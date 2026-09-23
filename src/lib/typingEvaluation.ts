export interface EvaluatedWord {
  typed: string;
  expected?: string;
  status: 'correct' | 'incorrect' | 'extra';
}

export interface EvaluationResult {
  totalWordsTyped: number;
  correctWordsCount: number;
  incorrectWordsCount: number;
  totalCharsTyped: number;
  correctCharsCount: number;
  errorCharsCount: number;
  accuracy: number;
  grossWPM5: number;
  netWPM5: number;
  grossKPM: number;
  grossKPH: number;
  netKPM: number;
  netKPH: number;
  grossWPMWords: number;
  netWPMWords: number;
  evaluatedWords: EvaluatedWord[];
}

/**
 * Aligns typed words against target words using Longest Common Subsequence (LCS)
 * to avoid cascading errors when a word is skipped or mistyped.
 */
export function alignAndEvaluateWords(
  targetWords: string[],
  typedWords: string[],
  elapsedSeconds: number
): EvaluationResult {
  const n = targetWords.length;
  const m = typedWords.length;
  const actualElapsed = Math.max(1, elapsedSeconds);
  const timeInMinutes = actualElapsed / 60;

  if (m === 0) {
    return {
      totalWordsTyped: 0,
      correctWordsCount: 0,
      incorrectWordsCount: 0,
      totalCharsTyped: 0,
      correctCharsCount: 0,
      errorCharsCount: 0,
      accuracy: 100,
      grossWPM5: 0,
      netWPM5: 0,
      grossKPM: 0,
      grossKPH: 0,
      netKPM: 0,
      netKPH: 0,
      grossWPMWords: 0,
      netWPMWords: 0,
      evaluatedWords: [],
    };
  }

  // Dynamic Programming table for LCS of words
  // Capping DP grid size safely in case of huge passages
  const dpN = Math.min(n, 2000);
  const dpM = Math.min(m, 2000);
  const dp: Int32Array[] = Array.from({ length: dpN + 1 }, () => new Int32Array(dpM + 1));

  for (let i = 0; i < dpN; i++) {
    for (let j = 0; j < dpM; j++) {
      if (targetWords[i] === typedWords[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  // Backtrack to find aligned matched pairs [targetIndex, typedIndex]
  let i = dpN;
  let j = dpM;
  const matchedPairs: [number, number][] = [];

  while (i > 0 && j > 0) {
    if (targetWords[i - 1] === typedWords[j - 1]) {
      matchedPairs.push([i - 1, j - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  matchedPairs.reverse();

  // Construct evaluated words list
  const evaluatedWords: EvaluatedWord[] = [];
  let nextTIdx = 0;
  let matchPtr = 0;

  for (let uj = 0; uj < m; uj++) {
    if (matchPtr < matchedPairs.length && matchedPairs[matchPtr][1] === uj) {
      const tIdx = matchedPairs[matchPtr][0];
      evaluatedWords.push({
        typed: typedWords[uj],
        expected: targetWords[tIdx],
        status: 'correct',
      });
      nextTIdx = tIdx + 1;
      matchPtr++;
    } else {
      let exp: string | undefined = undefined;
      if (matchPtr < matchedPairs.length) {
        if (nextTIdx < matchedPairs[matchPtr][0]) {
          exp = targetWords[nextTIdx];
          nextTIdx++;
        }
      } else if (nextTIdx < n) {
        exp = targetWords[nextTIdx];
        nextTIdx++;
      }
      evaluatedWords.push({
        typed: typedWords[uj],
        expected: exp,
        status: 'incorrect',
      });
    }
  }

  let correctWordsCount = 0;
  let incorrectWordsCount = 0;
  let correctCharsCount = 0;
  let totalCharsTyped = 0;

  evaluatedWords.forEach((item, idx) => {
    totalCharsTyped += item.typed.length + (idx < evaluatedWords.length - 1 ? 1 : 0);
    if (item.status === 'correct') {
      correctWordsCount++;
      correctCharsCount += item.typed.length + (idx < evaluatedWords.length - 1 ? 1 : 0);
    } else {
      incorrectWordsCount++;
    }
  });

  const totalWordsTyped = m;
  const errorCharsCount = Math.max(0, totalCharsTyped - correctCharsCount);

  // Method 1: 5 keystrokes = 1 word (Standard RSSB / Central Govt formula)
  const grossWPM5 = Math.round((totalCharsTyped / 5) / timeInMinutes);
  const netWPM5 = Math.max(0, Math.round((correctCharsCount / 5) / timeInMinutes));
  const grossKPM = Math.round(totalCharsTyped / timeInMinutes);
  const grossKPH = grossKPM * 60;
  const netKPM = Math.round(correctCharsCount / timeInMinutes);
  const netKPH = netKPM * 60;

  // Method 2: Space-delimited words
  const grossWPMWords = Math.round(totalWordsTyped / timeInMinutes);
  const netWPMWords = Math.max(0, Math.round(correctWordsCount / timeInMinutes));

  const accuracy = totalWordsTyped > 0 ? (correctWordsCount / totalWordsTyped) * 100 : 100;

  return {
    totalWordsTyped,
    correctWordsCount,
    incorrectWordsCount,
    totalCharsTyped,
    correctCharsCount,
    errorCharsCount,
    accuracy: Math.min(100, Math.max(0, accuracy)),
    grossWPM5,
    netWPM5,
    grossKPM,
    grossKPH,
    netKPM,
    netKPH,
    grossWPMWords,
    netWPMWords,
    evaluatedWords,
  };
}

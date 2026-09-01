import React from 'react';

interface HandsIndicatorProps {
  activeHand: 'left' | 'right' | 'both' | null;
  activeFingerIndex: number | null; // 0: pinky, 1: ring, 2: middle, 3: index, 4: thumb
}

export const LeftHand: React.FC<{ activeFingerIndex: number | null; isActive: boolean }> = ({
  activeFingerIndex,
  isActive,
}) => {
  // Finger coordinates for green indicator dot on left hand
  // 0: Pinky, 1: Ring, 2: Middle, 3: Index, 4: Thumb
  const fingerPositions = [
    { cx: 24, cy: 38 }, // Pinky
    { cx: 40, cy: 18 }, // Ring
    { cx: 58, cy: 10 }, // Middle
    { cx: 78, cy: 18 }, // Index
    { cx: 96, cy: 75 }, // Thumb
  ];

  return (
    <div className="relative w-28 h-44 select-none flex items-center justify-center">
      <svg
        viewBox="0 0 120 180"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Hand Silhouette */}
        <path
          d="M 28 170 C 28 150 20 110 20 70 C 20 50 28 50 28 75 C 28 40 38 25 43 25 C 48 25 48 45 46 70 C 46 30 56 12 62 12 C 68 12 68 35 66 68 C 66 30 78 20 83 20 C 88 20 88 45 84 80 C 92 75 105 75 108 85 C 111 95 98 120 88 135 C 80 150 78 170 78 170 Z"
          fill="#b4c2ea"
          stroke="#3b5998"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Finger crease details */}
        <path d="M 23 75 Q 26 78 29 76" stroke="#3b5998" strokeWidth="1" />
        <path d="M 40 68 Q 44 71 47 69" stroke="#3b5998" strokeWidth="1" />
        <path d="M 58 65 Q 62 68 66 66" stroke="#3b5998" strokeWidth="1" />
        <path d="M 77 75 Q 81 78 85 76" stroke="#3b5998" strokeWidth="1" />

        {/* Active Finger Green Indicator Dot */}
        {isActive &&
          activeFingerIndex !== null &&
          fingerPositions[activeFingerIndex] && (
            <circle
              cx={fingerPositions[activeFingerIndex].cx}
              cy={fingerPositions[activeFingerIndex].cy}
              r="7"
              className="fill-emerald-500 stroke-emerald-700 stroke-2 animate-pulse"
            />
          )}
      </svg>
    </div>
  );
};

export const RightHand: React.FC<{ activeFingerIndex: number | null; isActive: boolean }> = ({
  activeFingerIndex,
  isActive,
}) => {
  // Finger coordinates for green indicator dot on right hand (mirrored)
  // 0: Pinky, 1: Ring, 2: Middle, 3: Index, 4: Thumb
  const fingerPositions = [
    { cx: 96, cy: 38 }, // Pinky
    { cx: 80, cy: 18 }, // Ring
    { cx: 62, cy: 10 }, // Middle
    { cx: 42, cy: 18 }, // Index
    { cx: 24, cy: 75 }, // Thumb
  ];

  return (
    <div className="relative w-28 h-44 select-none flex items-center justify-center">
      <svg
        viewBox="0 0 120 180"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Right Hand Silhouette */}
        <path
          d="M 92 170 C 92 150 100 110 100 70 C 100 50 92 50 92 75 C 92 40 82 25 77 25 C 72 25 72 45 74 70 C 74 30 64 12 58 12 C 52 12 52 35 54 68 C 54 30 42 20 37 20 C 32 20 32 45 36 80 C 28 75 15 75 12 85 C 9 95 22 120 32 135 C 40 150 42 170 42 170 Z"
          fill="#b4c2ea"
          stroke="#3b5998"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Finger crease details */}
        <path d="M 97 75 Q 94 78 91 76" stroke="#3b5998" strokeWidth="1" />
        <path d="M 80 68 Q 76 71 73 69" stroke="#3b5998" strokeWidth="1" />
        <path d="M 62 65 Q 58 68 54 66" stroke="#3b5998" strokeWidth="1" />
        <path d="M 43 75 Q 39 78 35 76" stroke="#3b5998" strokeWidth="1" />

        {/* Active Finger Green Indicator Dot */}
        {isActive &&
          activeFingerIndex !== null &&
          fingerPositions[activeFingerIndex] && (
            <circle
              cx={fingerPositions[activeFingerIndex].cx}
              cy={fingerPositions[activeFingerIndex].cy}
              r="7"
              className="fill-emerald-500 stroke-emerald-700 stroke-2 animate-pulse"
            />
          )}
      </svg>
    </div>
  );
};

import React, { useState } from 'react';
import { TitleBar } from './components/TitleBar';
import { MenuBar } from './components/MenuBar';
import { Toolbar } from './components/Toolbar';
import { OnlineBanner } from './components/OnlineBanner';
import { ModuleCard } from './components/ModuleCard';
import { ExamCard } from './components/ExamCard';
import { LessonModal } from './components/LessonModal';
import { HindiTypingLesson } from './components/HindiTypingLesson';
import {
  AllInOneStamp,
  SscEmblem,
  BsfEmblem,
  RrbEmblem,
  HighCourtEmblem,
  KeyboardIconBadge,
  RsmssbEmblem,
  DoitEmblem,
  WordIconBadge,
  ExcelIconBadge,
  WordGreenBadge,
  RajasthanGovtEmblem,
  UpssscEmblem,
  UpPoliceShield,
  UppclEmblem,
  AhcEmblem,
} from './components/Badges';
import { TypingModule, SelectedModuleState } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'typing-lesson'>('typing-lesson');
  const [typingLanguage, setTypingLanguage] = useState<'hindi' | 'english'>('hindi');
  const [modalState, setModalState] = useState<SelectedModuleState>({
    isOpen: false,
    module: null,
  });

  const handleOpenModule = (
    title: string,
    category: string,
    subCategory?: string
  ) => {
    // If it's the Hindi KrutiDev Learn / Test, open the specific lesson screen
    if (
      category.includes('Hindi Typing - KrutiDev') ||
      category.includes('Hindi Typing - Mangal') ||
      title.includes('Hindi')
    ) {
      setTypingLanguage('hindi');
      setCurrentView('typing-lesson');
      return;
    }

    if (category.includes('English Typing') || title.includes('English')) {
      setTypingLanguage('english');
      setCurrentView('typing-lesson');
      return;
    }

    setModalState({
      isOpen: true,
      module: {
        id: `${category}-${title}`.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        title,
        category,
        subCategory,
        type: 'custom',
      },
    });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, module: null });
  };

  if (currentView === 'typing-lesson') {
    return (
      <HindiTypingLesson
        initialLanguage={typingLanguage}
        onBackToHome={() => setCurrentView('home')}
      />
    );
  }

  return (
    <div
      id="app-root-container"
      className="min-h-screen bg-[#d6d9df] flex flex-col font-sans select-none text-slate-800"
    >
      {/* Top Windows Chrome Bar */}
      <TitleBar title="Soni Typing Tutor 5.1.168" />

      {/* Menu Bar */}
      <MenuBar />

      {/* Quick Action Toolbar */}
      <Toolbar />

      {/* Online Typing Test Banner */}
      <OnlineBanner
        onOpenLiveTests={() =>
          handleOpenModule('Live Tests', 'Online Typing Test')
        }
        onOpenStenoTests={() =>
          handleOpenModule('Stenography Tests', 'Online Typing Test')
        }
      />

      {/* Main Grid Content Area */}
      <main
        id="main-typing-dashboard"
        className="flex-1 p-3 md:p-4 overflow-y-auto max-w-[1700px] w-full mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {/* ===================== LEFT COLUMN ===================== */}
          <div className="flex flex-col gap-4">
            {/* 1. English Typing */}
            <div id="section-english-typing" className="flex flex-col">
              <h2 className="text-[14.5px] font-bold text-slate-800 mb-1 px-1">
                English Typing
              </h2>
              <div className="bg-white border border-slate-300 rounded-sm p-2 shadow-2xs">
                <div className="flex flex-wrap items-center gap-4">
                  <ModuleCard
                    id="en-learn"
                    label="Learn Typing"
                    topLetters={['A', 'B']}
                    bottomLetters={['C', 'D']}
                    onClick={() =>
                      handleOpenModule('Learn Typing', 'English Typing')
                    }
                  />
                  <ModuleCard
                    id="en-tests"
                    label="Take Tests"
                    topLetters={['A', 'B']}
                    bottomLetters={['C', 'D']}
                    onClick={() =>
                      handleOpenModule('Take Tests', 'English Typing')
                    }
                  />
                  <ModuleCard
                    id="en-number"
                    label="Number Typing"
                    topLetters={['1', '2']}
                    bottomLetters={['3', '+']}
                    onClick={() =>
                      handleOpenModule('Number Typing', 'English Typing')
                    }
                  />
                </div>
              </div>
            </div>

            {/* 2. Hindi Typing - KrutiDev & DevLys Font */}
            <div id="section-hindi-krutidev" className="flex flex-col">
              <h2 className="text-[14.5px] font-bold text-slate-800 mb-1 px-1">
                Hindi Typing - KrutiDev & DevLys Font
              </h2>
              <div className="bg-white border border-slate-300 rounded-sm p-2 shadow-2xs">
                <div className="flex flex-wrap items-center gap-4">
                  <ModuleCard
                    id="hi-kd-learn"
                    label="Learn Typing"
                    topLetters={['अ', 'ब']}
                    bottomLetters={['स', 'द']}
                    onClick={() =>
                      handleOpenModule(
                        'Learn Typing',
                        'Hindi Typing - KrutiDev & DevLys Font'
                      )
                    }
                  />
                  <ModuleCard
                    id="hi-kd-tests"
                    label="Take Tests"
                    topLetters={['अ', 'ब']}
                    bottomLetters={['स', 'द']}
                    onClick={() =>
                      handleOpenModule(
                        'Take Tests',
                        'Hindi Typing - KrutiDev & DevLys Font'
                      )
                    }
                  />
                </div>
              </div>
            </div>

            {/* 3. Hindi Typing - Mangal Unicode Font */}
            <div id="section-hindi-mangal" className="flex flex-col">
              <h2 className="text-[14.5px] font-bold text-slate-800 mb-1 px-1">
                Hindi Typing - Mangal Unicode Font
              </h2>
              <div className="bg-white border border-slate-300 rounded-sm p-3 shadow-2xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Remington GAIL */}
                  <fieldset className="border border-slate-300 rounded-xs px-3 pb-2 pt-1">
                    <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                      Remington GAIL Layout
                    </legend>
                    <div className="flex items-center gap-3">
                      <ModuleCard
                        id="hi-mangal-gail-learn"
                        label="Learn Typing"
                        topLetters={['अ', 'ब']}
                        bottomLetters={['स', 'द']}
                        onClick={() =>
                          handleOpenModule(
                            'Learn Typing',
                            'Hindi Typing - Mangal Unicode',
                            'Remington GAIL Layout'
                          )
                        }
                      />
                      <ModuleCard
                        id="hi-mangal-gail-test"
                        label="Take Test"
                        topLetters={['अ', 'ब']}
                        bottomLetters={['स', 'द']}
                        onClick={() =>
                          handleOpenModule(
                            'Take Test',
                            'Hindi Typing - Mangal Unicode',
                            'Remington GAIL Layout'
                          )
                        }
                      />
                    </div>
                  </fieldset>

                  {/* INSCRIPT Layout */}
                  <fieldset className="border border-slate-300 rounded-xs px-3 pb-2 pt-1">
                    <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                      INSCIPT Layout
                    </legend>
                    <div className="flex items-center gap-3">
                      <ModuleCard
                        id="hi-mangal-inscript-learn"
                        label="Learn Typing"
                        topLetters={['अ', 'ब']}
                        bottomLetters={['स', 'द']}
                        onClick={() =>
                          handleOpenModule(
                            'Learn Typing',
                            'Hindi Typing - Mangal Unicode',
                            'INSCRIPT Layout'
                          )
                        }
                      />
                      <ModuleCard
                        id="hi-mangal-inscript-test"
                        label="Take Test"
                        topLetters={['अ', 'ब']}
                        bottomLetters={['स', 'द']}
                        onClick={() =>
                          handleOpenModule(
                            'Take Test',
                            'Hindi Typing - Mangal Unicode',
                            'INSCRIPT Layout'
                          )
                        }
                      />
                    </div>
                  </fieldset>

                  {/* Remington CBI Layout */}
                  <fieldset className="border border-slate-300 rounded-xs px-3 pb-2 pt-1 col-span-1">
                    <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                      Remignton CBI Layout
                    </legend>
                    <div className="flex items-center gap-3">
                      <ModuleCard
                        id="hi-mangal-cbi-learn"
                        label="Learn Typing"
                        topLetters={['अ', 'ब']}
                        bottomLetters={['स', 'द']}
                        onClick={() =>
                          handleOpenModule(
                            'Learn Typing',
                            'Hindi Typing - Mangal Unicode',
                            'Remington CBI Layout'
                          )
                        }
                      />
                      <ModuleCard
                        id="hi-mangal-cbi-test"
                        label="Take Test"
                        topLetters={['अ', 'ब']}
                        bottomLetters={['स', 'द']}
                        onClick={() =>
                          handleOpenModule(
                            'Take Test',
                            'Hindi Typing - Mangal Unicode',
                            'Remington CBI Layout'
                          )
                        }
                      />
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            {/* 4. Marathi Typing */}
            <div id="section-marathi-typing" className="flex flex-col">
              <h2 className="text-[14.5px] font-bold text-slate-800 mb-1 px-1">
                Marathi Typing
              </h2>
              <div className="bg-white border border-slate-300 rounded-sm p-3 shadow-2xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Marathi Remington */}
                  <fieldset className="border border-slate-300 rounded-xs px-3 pb-2 pt-1">
                    <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                      Marathi Remington
                    </legend>
                    <div className="flex items-center gap-3">
                      <ModuleCard
                        id="marathi-rem-learn"
                        label="Learn Typing"
                        topLetters={['अ', 'ब']}
                        bottomLetters={['स', 'द']}
                        onClick={() =>
                          handleOpenModule(
                            'Learn Typing',
                            'Marathi Typing',
                            'Marathi Remington'
                          )
                        }
                      />
                      <ModuleCard
                        id="marathi-rem-test"
                        label="Take Test"
                        topLetters={['अ', 'ब']}
                        bottomLetters={['स', 'द']}
                        onClick={() =>
                          handleOpenModule(
                            'Take Test',
                            'Marathi Typing',
                            'Marathi Remington'
                          )
                        }
                      />
                    </div>
                  </fieldset>

                  {/* Marathi Krutidev 055 */}
                  <fieldset className="border border-slate-300 rounded-xs px-3 pb-2 pt-1">
                    <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                      Marathi Krutidev 055
                    </legend>
                    <div className="flex items-center gap-3">
                      <ModuleCard
                        id="marathi-kd-learn"
                        label="Learn Typing"
                        topLetters={['अ', 'ब']}
                        bottomLetters={['स', 'द']}
                        onClick={() =>
                          handleOpenModule(
                            'Learn Typing',
                            'Marathi Typing',
                            'Marathi Krutidev 055'
                          )
                        }
                      />
                      <ModuleCard
                        id="marathi-kd-test"
                        label="Take Test"
                        topLetters={['अ', 'ब']}
                        bottomLetters={['स', 'द']}
                        onClick={() =>
                          handleOpenModule(
                            'Take Test',
                            'Marathi Typing',
                            'Marathi Krutidev 055'
                          )
                        }
                      />
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            {/* 5. Punjabi Typing */}
            <div id="section-punjabi-typing" className="flex flex-col">
              <h2 className="text-[14.5px] font-bold text-slate-800 mb-1 px-1">
                Punjabi Typing
              </h2>
              <div className="bg-white border border-slate-300 rounded-sm p-3 shadow-2xs">
                <fieldset className="border border-slate-300 rounded-xs px-3 pb-2 pt-1 max-w-[280px]">
                  <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                    Punjabi Inscript - Raavi Font
                  </legend>
                  <div className="flex items-center gap-3">
                    <ModuleCard
                      id="punjabi-learn"
                      label="Learn Typing"
                      topLetters={['ਕ', 'ਖ']}
                      bottomLetters={['ਗ', 'ਘ']}
                      onClick={() =>
                        handleOpenModule(
                          'Learn Typing',
                          'Punjabi Typing',
                          'Punjabi Inscript - Raavi Font'
                        )
                      }
                    />
                    <ModuleCard
                      id="punjabi-test"
                      label="Take Test"
                      topLetters={['ਕ', 'ਖ']}
                      bottomLetters={['ਗ', 'ਘ']}
                      onClick={() =>
                        handleOpenModule(
                          'Take Test',
                          'Punjabi Typing',
                          'Punjabi Inscript - Raavi Font'
                        )
                      }
                    />
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          {/* ===================== RIGHT COLUMN ===================== */}
          <div className="flex flex-col gap-4">
            {/* 1. Common Exam Pattern */}
            <div id="section-common-exam" className="flex flex-col">
              <h2 className="text-[14.5px] font-bold text-slate-800 mb-1 px-1">
                Common Exam Pattern
              </h2>
              <div className="bg-white border border-slate-300 rounded-sm p-3 shadow-2xs">
                <fieldset className="border border-slate-300 rounded-xs p-3">
                  <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                    All Exams(General Pattern)
                  </legend>
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    {/* 3 stamps */}
                    <div className="flex items-center gap-2 shrink-0">
                      <ExamCard
                        id="common-english"
                        label="English Test"
                        badge={<AllInOneStamp size={44} />}
                        onClick={() =>
                          handleOpenModule(
                            'English Test',
                            'Common Exam Pattern',
                            'All Exams(General Pattern)'
                          )
                        }
                      />
                      <ExamCard
                        id="common-hindi-krutidev"
                        label="Hindi - Krutidev/ Devlys"
                        badge={<AllInOneStamp size={44} />}
                        onClick={() =>
                          handleOpenModule(
                            'Hindi - Krutidev/Devlys',
                            'Common Exam Pattern',
                            'All Exams(General Pattern)'
                          )
                        }
                      />
                      <ExamCard
                        id="common-hindi-mangal"
                        label="Hindi - Mangal Font"
                        badge={<AllInOneStamp size={44} />}
                        onClick={() =>
                          handleOpenModule(
                            'Hindi - Mangal Font',
                            'Common Exam Pattern',
                            'All Exams(General Pattern)'
                          )
                        }
                      />
                    </div>

                    {/* Explanatory text */}
                    <div className="text-[11.5px] text-slate-600 border-t md:border-t-0 md:border-l border-slate-200 pt-2 md:pt-0 md:pl-4 leading-relaxed">
                      <p>
                        You can use this pattern for all typing exams. Change the
                        settings according to your exam and start practice.
                      </p>
                      <p className="mt-1">
                        <strong className="text-slate-800">For example :-</strong> Civil
                        Courts Bihar, Civil Courts Jharkhand, KVS, Kolkata High
                        Court, BSF, CRPF, CISF, UPSC, Junior Assistant, Judicial
                        Assistant, SSC and all exams.
                      </p>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

            {/* 2. All India Level Exams */}
            <div id="section-all-india-exams" className="flex flex-col">
              <h2 className="text-[14.5px] font-bold text-slate-800 mb-1 px-1">
                All India Level Exams
              </h2>
              <div className="bg-white border border-slate-300 rounded-sm p-3 shadow-2xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* SSC CGL/CHSL */}
                  <fieldset className="border border-slate-300 rounded-xs px-2 pb-2 pt-1">
                    <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                      SSC CGL/CHSL
                    </legend>
                    <div className="flex items-center justify-around gap-2">
                      <ExamCard
                        id="ssc-english"
                        label="SSC English Test"
                        badge={<SscEmblem size={40} />}
                        onClick={() =>
                          handleOpenModule(
                            'SSC English Test',
                            'All India Level Exams',
                            'SSC CGL/CHSL'
                          )
                        }
                      />
                      <ExamCard
                        id="ssc-hindi"
                        label="SSC Hindi Test"
                        badge={<SscEmblem size={40} />}
                        onClick={() =>
                          handleOpenModule(
                            'SSC Hindi Test',
                            'All India Level Exams',
                            'SSC CGL/CHSL'
                          )
                        }
                      />
                    </div>
                  </fieldset>

                  {/* BSF/CAPF HCM */}
                  <fieldset className="border border-slate-300 rounded-xs px-2 pb-2 pt-1">
                    <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                      BSF/CAPF HCM
                    </legend>
                    <div className="flex items-center justify-around gap-2">
                      <ExamCard
                        id="bsf-english"
                        label="English Test"
                        badge={<BsfEmblem size={40} />}
                        onClick={() =>
                          handleOpenModule(
                            'English Test',
                            'All India Level Exams',
                            'BSF/CAPF HCM'
                          )
                        }
                      />
                      <ExamCard
                        id="bsf-hindi"
                        label="Hindi Test"
                        badge={<BsfEmblem size={40} />}
                        onClick={() =>
                          handleOpenModule(
                            'Hindi Test',
                            'All India Level Exams',
                            'BSF/CAPF HCM'
                          )
                        }
                      />
                    </div>
                  </fieldset>

                  {/* RRB NTPC */}
                  <fieldset className="border border-slate-300 rounded-xs px-2 pb-2 pt-1">
                    <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                      RRB NTPC
                    </legend>
                    <div className="flex items-center justify-around gap-2">
                      <ExamCard
                        id="rrb-english"
                        label="NTPC English Test"
                        badge={<RrbEmblem size={40} />}
                        onClick={() =>
                          handleOpenModule(
                            'NTPC English Test',
                            'All India Level Exams',
                            'RRB NTPC'
                          )
                        }
                      />
                      <ExamCard
                        id="rrb-hindi"
                        label="NTPC Hindi Test"
                        badge={<RrbEmblem size={40} />}
                        onClick={() =>
                          handleOpenModule(
                            'NTPC Hindi Test',
                            'All India Level Exams',
                            'RRB NTPC'
                          )
                        }
                      />
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            {/* 3. Rajasthan Exams */}
            <div id="section-rajasthan-exams" className="flex flex-col">
              <h2 className="text-[14.5px] font-bold text-slate-800 mb-1 px-1">
                Rajasthan Exams
              </h2>
              <div className="bg-white border border-slate-300 rounded-sm p-3 shadow-2xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Raj. High Court */}
                  <fieldset className="border border-slate-300 rounded-xs px-2 pb-2 pt-1">
                    <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                      Raj. High Court
                    </legend>
                    <div className="flex items-center justify-around gap-1">
                      <ExamCard
                        id="raj-hc-mode"
                        label="Exam Mode HC"
                        badge={<KeyboardIconBadge size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'Exam Mode HC',
                            'Rajasthan Exams',
                            'Raj. High Court'
                          )
                        }
                      />
                      <ExamCard
                        id="raj-hc-sa-ldc"
                        label="Raj. High Court - SA/LDC(JJA)"
                        badge={<HighCourtEmblem size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'Raj. High Court - SA/LDC(JJA)',
                            'Rajasthan Exams',
                            'Raj. High Court'
                          )
                        }
                      />
                      <ExamCard
                        id="raj-hc-steno"
                        label="Raj High Court - Steno"
                        badge={<HighCourtEmblem size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'Raj High Court - Steno',
                            'Rajasthan Exams',
                            'Raj. High Court'
                          )
                        }
                      />
                    </div>
                  </fieldset>

                  {/* RSMSSB Exams */}
                  <fieldset className="border border-slate-300 rounded-xs px-2 pb-2 pt-1">
                    <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                      RSMSSB Exams
                    </legend>
                    <div className="flex items-center justify-around gap-2">
                      <ExamCard
                        id="rsmssb-ldc"
                        label="RSSB LDC 2024 Pattern"
                        badge={<RsmssbEmblem size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'RSSB LDC 2024 Pattern',
                            'Rajasthan Exams',
                            'RSMSSB Exams'
                          )
                        }
                      />
                      <ExamCard
                        id="rsmssb-ia"
                        label="RSSB IA 2024 Pattern"
                        badge={<DoitEmblem size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'RSSB IA 2024 Pattern',
                            'Rajasthan Exams',
                            'RSMSSB Exams'
                          )
                        }
                      />
                    </div>
                  </fieldset>

                  {/* Word & Excel Efficiency */}
                  <fieldset className="border border-slate-300 rounded-xs px-2 pb-2 pt-1">
                    <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                      Word & Excel Efficiency
                    </legend>
                    <div className="flex items-center justify-around gap-1">
                      <ExamCard
                        id="word-eff"
                        label="Word Efficiency"
                        badge={<WordIconBadge size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'Word Efficiency',
                            'Rajasthan Exams',
                            'Word & Excel Efficiency'
                          )
                        }
                      />
                      <ExamCard
                        id="excel-eff"
                        label="Excel Efficiency"
                        badge={<ExcelIconBadge size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'Excel Efficiency',
                            'Rajasthan Exams',
                            'Word & Excel Efficiency'
                          )
                        }
                      />
                      <ExamCard
                        id="word-eff-new"
                        label="Word Efficiency (New Pattern)"
                        badge={<WordGreenBadge size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'Word Efficiency (New Pattern)',
                            'Rajasthan Exams',
                            'Word & Excel Efficiency'
                          )
                        }
                      />
                    </div>
                  </fieldset>

                  {/* Linewise Pattern */}
                  <fieldset className="border border-slate-300 rounded-xs px-2 pb-2 pt-1">
                    <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                      Linewise Pattern
                    </legend>
                    <div className="flex items-center justify-center p-1">
                      <ExamCard
                        id="linewise-pattern"
                        label="Line Wise Pattern for IA 2013, RPSC LDC, Electricity Boards, Assam Rifles"
                        badge={<RajasthanGovtEmblem size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'Line Wise Pattern for IA 2013, RPSC LDC, Electricity Boards, Assam Rifles',
                            'Rajasthan Exams',
                            'Linewise Pattern'
                          )
                        }
                      />
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            {/* 4. Uttar Pradesh Exams */}
            <div id="section-up-exams" className="flex flex-col">
              <h2 className="text-[14.5px] font-bold text-slate-800 mb-1 px-1">
                Uttar Pradesh Exams
              </h2>
              <div className="bg-white border border-slate-300 rounded-sm p-3 shadow-2xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* UPSSSC */}
                  <fieldset className="border border-slate-300 rounded-xs px-2 pb-2 pt-1">
                    <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                      UPSSSC
                    </legend>
                    <div className="flex items-center justify-around gap-1">
                      <ExamCard
                        id="upsssc-english"
                        label="English Test"
                        badge={<UpssscEmblem size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'English Test',
                            'Uttar Pradesh Exams',
                            'UPSSSC'
                          )
                        }
                      />
                      <ExamCard
                        id="upsssc-hindi-kd"
                        label="Hindi - KrutiDev"
                        badge={<UpssscEmblem size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'Hindi - KrutiDev',
                            'Uttar Pradesh Exams',
                            'UPSSSC'
                          )
                        }
                      />
                      <ExamCard
                        id="upsssc-hindi-inscript"
                        label="Hindi - INSCIPT"
                        badge={<UpssscEmblem size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'Hindi - INSCRIPT',
                            'Uttar Pradesh Exams',
                            'UPSSSC'
                          )
                        }
                      />
                    </div>
                  </fieldset>

                  {/* UP Police ASI/SI/Comp. Operator */}
                  <fieldset className="border border-slate-300 rounded-xs px-2 pb-2 pt-1">
                    <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                      UP Police ASI/SI/Comp. Operator
                    </legend>
                    <div className="flex items-center justify-around gap-2">
                      <ExamCard
                        id="up-police-english"
                        label="English Test"
                        badge={<UpPoliceShield size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'English Test',
                            'Uttar Pradesh Exams',
                            'UP Police ASI/SI/Comp. Operator'
                          )
                        }
                      />
                      <ExamCard
                        id="up-police-hindi"
                        label="Hindi Test"
                        badge={<UpPoliceShield size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'Hindi Test',
                            'Uttar Pradesh Exams',
                            'UP Police ASI/SI/Comp. Operator'
                          )
                        }
                      />
                    </div>
                  </fieldset>

                  {/* UPPCL */}
                  <fieldset className="border border-slate-300 rounded-xs px-2 pb-2 pt-1">
                    <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                      UPPCL
                    </legend>
                    <div className="flex items-center justify-around gap-2">
                      <ExamCard
                        id="uppcl-english"
                        label="English Test"
                        badge={<UppclEmblem size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'English Test',
                            'Uttar Pradesh Exams',
                            'UPPCL'
                          )
                        }
                      />
                      <ExamCard
                        id="uppcl-hindi"
                        label="Hindi Test"
                        badge={<UppclEmblem size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'Hindi Test',
                            'Uttar Pradesh Exams',
                            'UPPCL'
                          )
                        }
                      />
                    </div>
                  </fieldset>

                  {/* Allahabad High Court Group-C/ARO/RO */}
                  <fieldset className="border border-slate-300 rounded-xs px-2 pb-2 pt-1">
                    <legend className="text-[11.5px] font-semibold text-slate-700 px-1">
                      Allahabad High Court Group-C/ARO/RO
                    </legend>
                    <div className="flex items-center justify-around gap-1">
                      <ExamCard
                        id="ahc-english"
                        label="English"
                        badge={<AhcEmblem size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'English',
                            'Uttar Pradesh Exams',
                            'Allahabad High Court Group-C/ARO/RO'
                          )
                        }
                      />
                      <ExamCard
                        id="ahc-hindi"
                        label="Hindi"
                        badge={<AhcEmblem size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'Hindi',
                            'Uttar Pradesh Exams',
                            'Allahabad High Court Group-C/ARO/RO'
                          )
                        }
                      />
                      <ExamCard
                        id="ahc-legal"
                        label="AHC Legal Matter"
                        badge={<AhcEmblem size={38} />}
                        onClick={() =>
                          handleOpenModule(
                            'AHC Legal Matter',
                            'Uttar Pradesh Exams',
                            'Allahabad High Court Group-C/ARO/RO'
                          )
                        }
                      />
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Empty Lesson Modal / Container */}
      <LessonModal
        isOpen={modalState.isOpen}
        module={modalState.module}
        onClose={handleCloseModal}
      />
    </div>
  );
}

import React from 'react';
import { 
  BookOpen, 
  Compass, 
  HelpCircle, 
  LayoutDashboard, 
  Lock, 
  Maximize2, 
  PenTool, 
  Printer, 
  Sparkles, 
  Target, 
  Timer, 
  Trees, 
  Trophy, 
  Unlock, 
  UserCheck 
} from 'lucide-react';
import { APP_META } from '../data/learningData';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  markComplete: (tab: string) => void;
  mode: 'learning' | 'classroom';
  setMode: (mode: 'learning' | 'classroom') => void;
  timer: number;
  isTimerRunning: boolean;
  setIsTimerRunning: (running: boolean) => void;
  teacherMode: boolean;
  setTeacherMode: (val: boolean) => void;
  setIsReportOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  markComplete,
  mode,
  setMode,
  timer,
  isTimerRunning,
  setIsTimerRunning,
  teacherMode,
  setTeacherMode,
  setIsReportOpen,
}) => {
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: "orientasi", label: "Orientasi & TP", icon: <Target className="w-4 h-4" /> },
    { id: "diagnostik", label: "Diagnostik (4)", icon: <HelpCircle className="w-4 h-4" /> },
    { id: "materi", label: "7 Modul Konsep", icon: <BookOpen className="w-4 h-4" /> },
    { id: "lab", label: "Triangle Explorer", icon: <Compass className="w-4 h-4" /> },
    { id: "discovery", label: "Discovery (6 Tahap)", icon: <Sparkles className="w-4 h-4" /> },
    { id: "lkpd", label: "LKPD Digital", icon: <PenTool className="w-4 h-4" /> },
    { id: "latihan", label: "Bank Latihan", icon: <Maximize2 className="w-4 h-4" /> },
    { id: "sumatif", label: "Asesmen Sumatif (5)", icon: <Trophy className="w-4 h-4" /> },
    { id: "stem", label: "Misi STEM Taman", icon: <Trees className="w-4 h-4" /> },
    { id: "refleksi", label: "Refleksi Siswa", icon: <UserCheck className="w-4 h-4" /> },
    { id: "guru", label: "Rubrik & KKTP", icon: <Lock className="w-4 h-4" /> }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950 text-white shadow-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer group" 
          onClick={() => setCurrentTab("dashboard")}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-black text-slate-950 text-xl shadow-lg group-hover:scale-105 transition">
            Δ
          </div>
          <div>
            <h1 className="font-extrabold text-lg tracking-tight flex items-center gap-2">
              {APP_META.name}
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded-full font-mono">
                Fase E
              </span>
            </h1>
            <p className="text-[11px] text-slate-400 hidden sm:block">{APP_META.tagline}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="hidden lg:flex items-center bg-slate-900 border border-slate-800 rounded-lg p-1 text-xs">
            <button 
              onClick={() => setMode("learning")}
              className={`px-3 py-1 rounded-md transition font-medium ${mode === 'learning' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}>
              Learning Mode
            </button>
            <button 
              onClick={() => setMode("classroom")}
              className={`px-3 py-1 rounded-md transition font-medium ${mode === 'classroom' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}>
              Classroom Mode (120m)
            </button>
          </div>

          {mode === "classroom" && (
            <div className="flex items-center bg-emerald-950 border border-emerald-500/50 text-emerald-300 px-3 py-1 rounded-lg font-mono text-xs">
              <Timer className="w-3.5 h-3.5 mr-1.5 text-emerald-400 animate-pulse" />
              <span className="mr-2 font-bold">{formatTime(timer)}</span>
              <button 
                onClick={() => setIsTimerRunning(!isTimerRunning)} 
                className="bg-emerald-600 text-white px-2 py-0.5 rounded hover:bg-emerald-500 font-sans text-[11px] font-semibold transition">
                {isTimerRunning ? 'Jeda' : 'Mulai'}
              </button>
            </div>
          )}

          <button
            onClick={() => setIsReportOpen(true)}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition">
            <Printer className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline font-semibold">Rapor PDF</span>
          </button>

          <button 
            onClick={() => setTeacherMode(!teacherMode)}
            className={`text-xs px-3 py-1.5 rounded-lg font-semibold border flex items-center gap-1.5 transition ${
              teacherMode 
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md font-bold' 
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}>
            {teacherMode ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5 text-slate-400" />}
            <span>{teacherMode ? 'Kunci Buka' : 'Mode Guru'}</span>
          </button>
        </div>
      </div>

      {/* Navigation Scrollbar */}
      <div className="bg-slate-900/90 border-t border-slate-800 overflow-x-auto custom-scrollbar">
        <nav className="max-w-7xl mx-auto px-4 flex space-x-1 py-2 text-xs font-medium whitespace-nowrap">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentTab(item.id);
                markComplete(item.id);
              }}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 ${
                currentTab === item.id 
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-md" 
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

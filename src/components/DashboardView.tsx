import React, { useState } from 'react';
import { 
  ArrowRight, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Compass, 
  FileText, 
  HelpCircle, 
  PenTool, 
  Sparkles, 
  Target 
} from 'lucide-react';
import { TP_LIST } from '../data/learningData';

interface DashboardViewProps {
  studentName: string;
  setStudentName: (name: string) => void;
  setCurrentTab: (tab: string) => void;
  completedTabs: string[];
  sumatifScore: number | null;
  resetData: () => void;
  setIsReportOpen: (open: boolean) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  studentName,
  setStudentName,
  setCurrentTab,
  completedTabs,
  sumatifScore,
  setIsReportOpen,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [nameInput, setNameInput] = useState(studentName);

  const progress = Math.min(100, Math.round((completedTabs.length / 10) * 100));

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <div className="text-[240px] font-black text-emerald-400 select-none">Δ</div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Alokasi 3 JP (120 Menit)</span>
            <span>•</span>
            <span>Model Pembelajaran Discovery Learning</span>
          </div>

          <div className="flex items-center gap-3">
            {isEdit ? (
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={nameInput} 
                  onChange={(e) => setNameInput(e.target.value)} 
                  className="text-xl sm:text-2xl font-bold bg-slate-950 border border-emerald-500 rounded px-2.5 py-1 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <button 
                  onClick={() => { setStudentName(nameInput); setIsEdit(false); }} 
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs transition">
                  Simpan
                </button>
              </div>
            ) : (
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Selamat Datang, <span className="text-emerald-400">{studentName}</span>! 👋
                <button 
                  onClick={() => setIsEdit(true)} 
                  className="ml-2.5 text-xs text-slate-400 hover:text-emerald-300 underline font-normal transition">
                  [Ganti Nama]
                </button>
              </h2>
            )}
          </div>

          <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
            Eksplorasi matematika modern untuk menghitung luas segitiga sembarang tanpa perlu mengukur tinggi tegak lurus secara langsung di lapangan. Cukup gunakan panjang dua sisi pengapit dan sinus sudut apitnya!
          </p>

          {/* Progress Bar & KPI Quick Stats */}
          <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6">
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold">Tuntas Aktivitas</div>
              <div className="text-2xl font-black text-emerald-400">{progress}%</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold">Skor Sumatif RPP</div>
              <div className="text-2xl font-black text-amber-400">
                {sumatifScore !== null ? `${sumatifScore} / 100` : "Belum Ujian"}
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                <span>Kelengkapan Portofolio</span>
                <span>{completedTabs.length} / 10 Modul</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2.5 rounded-full transition-all duration-500" 
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <button
              onClick={() => setIsReportOpen(true)}
              className="bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Cetak Hasil</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3 Tujuan Pembelajaran Resmi RPP */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TP_LIST.map((tp) => (
          <div key={tp.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-emerald-500 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-2.5">
              <span className="font-mono text-xs font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                <Target className="w-3 h-3 text-emerald-600" />
                {tp.code}
              </span>
              <span className="text-[11px] text-slate-400 font-semibold">Capaian Fase E</span>
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1.5">{tp.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{tp.desc}</p>
          </div>
        ))}
      </div>

      {/* Quick Launch Cards */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Alur Terpadu Belajar Matematika</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div 
            onClick={() => setCurrentTab("diagnostik")} 
            className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 cursor-pointer transition group">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold mb-3">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div className="text-emerald-700 font-bold text-sm mb-1">01. Kuis Diagnostik</div>
            <p className="text-slate-600 mb-3 leading-relaxed">Uji 4 soal prasyarat sinus siku-siku dan luas segitiga dasar.</p>
            <span className="font-bold text-emerald-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition">
              Mulai Kuis Awal <ArrowRight className="w-3 h-3" />
            </span>
          </div>

          <div 
            onClick={() => setCurrentTab("materi")} 
            className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 cursor-pointer transition group">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-3">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="text-emerald-700 font-bold text-sm mb-1">02. Jelajah 7 Modul</div>
            <p className="text-slate-600 mb-3 leading-relaxed">Penurunan rumus garis tinggi, sudut apit, dan segi-n beraturan.</p>
            <span className="font-bold text-emerald-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition">
              Buka Materi <ArrowRight className="w-3 h-3" />
            </span>
          </div>

          <div 
            onClick={() => setCurrentTab("lab")} 
            className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 cursor-pointer transition group">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-3">
              <Compass className="w-4 h-4" />
            </div>
            <div className="text-emerald-700 font-bold text-sm mb-1">03. Triangle Explorer</div>
            <p className="text-slate-600 mb-3 leading-relaxed">Simulasi kanvas geometri dengan sudut lancip, siku-siku, dan tumpul.</p>
            <span className="font-bold text-emerald-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition">
              Eksplorasi Lab <ArrowRight className="w-3 h-3" />
            </span>
          </div>

          <div 
            onClick={() => setCurrentTab("lkpd")} 
            className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 cursor-pointer transition group">
            <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-3">
              <PenTool className="w-4 h-4" />
            </div>
            <div className="text-emerald-700 font-bold text-sm mb-1">04. LKPD Digital</div>
            <p className="text-slate-600 mb-3 leading-relaxed">Isi LKPD Kegiatan 1, 2, dan 3 langsung dari browser secara kolaboratif.</p>
            <span className="font-bold text-emerald-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition">
              Buka Lembar Kerja <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

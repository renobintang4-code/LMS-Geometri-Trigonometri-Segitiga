import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Check, Filter, Layers, Lightbulb } from 'lucide-react';
import { PRACTICE_DB } from '../data/learningData';

interface LatihanViewProps {
  onComplete: () => void;
}

export const LatihanView: React.FC<LatihanViewProps> = ({ onComplete }) => {
  const [filter, setFilter] = useState<string>("Semua");
  const [openIdx, setOpenIdx] = useState<Record<number, boolean>>({});

  useEffect(() => {
    onComplete();
  }, [onComplete]);

  const toggle = (i: number) => {
    setOpenIdx(prev => ({ ...prev, [i]: !prev[i] }));
  };

  const filtered = filter === "Semua" ? PRACTICE_DB : PRACTICE_DB.filter(x => x.lvl === filter);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 font-mono mb-2">
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              <span>Diferensiasi Pembelajaran Fase E</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Bank Latihan Bertingkat & Kontekstual
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Soal latihan berjenjang: Dasar, Menengah, dan Kemampuan Berpikir Tingkat Tinggi (HOTS).
            </p>
          </div>

          <div className="flex gap-1.5 text-xs bg-slate-100 p-1 rounded-xl">
            {["Semua", "Dasar", "Menengah", "HOTS"].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                  filter === f 
                    ? 'bg-white text-emerald-800 shadow-sm font-bold' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((item, idx) => (
            <div key={idx} className="border border-slate-200 rounded-2xl p-5 bg-slate-50/60 text-xs transition hover:border-emerald-300">
              <div className="flex justify-between items-center mb-2.5">
                <span className={`font-mono font-bold px-2.5 py-0.5 rounded-md text-[11px] border ${
                  item.lvl === 'Dasar' 
                    ? 'bg-sky-50 text-sky-800 border-sky-200' 
                    : item.lvl === 'Menengah' 
                    ? 'bg-amber-50 text-amber-800 border-amber-200' 
                    : 'bg-purple-50 text-purple-800 border-purple-200'
                }`}>
                  Tingkat: {item.lvl}
                </span>
                <span className="text-slate-400 font-mono text-[11px]">Soal #{idx + 1}</span>
              </div>

              <p className="font-semibold text-slate-900 text-sm mb-3.5 leading-relaxed">{item.q}</p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Kunci Jawaban:</span>
                  <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    {item.ans}
                  </span>
                </div>
                <button 
                  onClick={() => toggle(idx)} 
                  className="text-emerald-700 font-bold hover:text-emerald-800 flex items-center gap-1 transition"
                >
                  <span>{openIdx[idx] ? "Tutup Langkah Solusi" : "Buka Pembahasan Lengkap"}</span>
                  {openIdx[idx] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {openIdx[idx] && (
                <div className="mt-3.5 p-4 bg-white rounded-xl border border-emerald-200 font-mono text-slate-700 leading-relaxed space-y-1 shadow-inner">
                  <div className="text-emerald-700 font-bold font-sans text-xs flex items-center gap-1.5 mb-1">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>Langkah Perhitungan Sistematis:</span>
                  </div>
                  <div>{item.step}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

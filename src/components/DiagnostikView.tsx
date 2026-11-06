import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, HelpCircle, Info, RefreshCw, XCircle } from 'lucide-react';
import { DIAGNOSTIC_DB } from '../data/learningData';

interface DiagnostikViewProps {
  onComplete: () => void;
  setCurrentTab: (tab: string) => void;
}

export const DiagnostikView: React.FC<DiagnostikViewProps> = ({ onComplete, setCurrentTab }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);

  const handlePick = (qId: number, idx: number) => {
    if (!checked) {
      setAnswers(prev => ({ ...prev, [qId]: idx }));
    }
  };

  const score = DIAGNOSTIC_DB.filter(q => answers[q.id] === q.c).length;

  const resetQuiz = () => {
    setAnswers({});
    setChecked(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex justify-between items-start gap-2 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-100 text-sky-800 font-mono mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Asesmen Awal Fase E</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Kuis Diagnostik Awal (4 Soal Asli RPP)</h2>
            <p className="text-xs text-slate-500 mt-1">
              Mengukur kesiapan pemahaman perbandingan sinus pada segitiga siku-siku, sudut istimewa, sudut berelasi, dan luas segitiga dasar.
            </p>
          </div>
          {checked && (
            <button
              onClick={resetQuiz}
              className="text-xs flex items-center gap-1 text-slate-500 hover:text-slate-800 border border-slate-200 px-2.5 py-1.5 rounded-lg transition"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Ulangi</span>
            </button>
          )}
        </div>

        <div className="space-y-5 mt-4">
          {DIAGNOSTIC_DB.map((q, idx) => (
            <div key={q.id} className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/60">
              <p className="font-semibold text-slate-900 text-xs sm:text-sm mb-3.5 leading-relaxed">
                <span className="font-mono font-bold mr-2 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {idx + 1}
                </span> 
                {q.q}
              </p>

              <div className="space-y-2">
                {q.opts.map((opt, oIdx) => {
                  const isSel = answers[q.id] === oIdx;
                  let cls = "border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:border-slate-300";

                  if (checked) {
                    if (q.c === oIdx) {
                      cls = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-400";
                    } else if (isSel) {
                      cls = "border-rose-400 bg-rose-50 text-rose-950";
                    } else {
                      cls = "border-slate-200 bg-white text-slate-400 opacity-60";
                    }
                  } else if (isSel) {
                    cls = "border-emerald-600 bg-emerald-50/80 text-emerald-900 font-semibold ring-1 ring-emerald-500";
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={checked}
                      onClick={() => handlePick(q.id, oIdx)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs transition flex justify-between items-center ${cls}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-mono">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {checked && q.c === oIdx && (
                        <span className="text-emerald-700 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Benar
                        </span>
                      )}
                      {checked && isSel && q.c !== oIdx && (
                        <span className="text-rose-600 font-bold flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> Salah
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {checked && (
                <div className="mt-3.5 pt-3 border-t border-slate-200 text-xs space-y-1.5">
                  <p className="text-slate-700">
                    <strong className="text-slate-900">Pembahasan:</strong> {q.exp}
                  </p>
                  {answers[q.id] !== q.c && (
                    <div className="text-amber-900 bg-amber-50 p-2.5 rounded-lg border border-amber-200 flex items-start gap-2">
                      <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Rekomendasi Remedial Guru:</strong> {q.fix}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200">
          {!checked ? (
            <button
              disabled={Object.keys(answers).length < DIAGNOSTIC_DB.length}
              onClick={() => { setChecked(true); onComplete(); }}
              className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition shadow"
            >
              Periksa Jawaban Diagnostik ({Object.keys(answers).length} / {DIAGNOSTIC_DB.length} Terjawab)
            </button>
          ) : (
            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="text-xs font-bold text-slate-800">
                Skor Kesiapan Belajar: <span className="text-emerald-600 font-mono text-sm ml-1">{score} / 4 Benar ({score * 25}%)</span>
              </div>
              <button
                onClick={() => setCurrentTab("materi")}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 transition shadow"
              >
                <span>Buka 7 Modul Konsep Lengkap</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

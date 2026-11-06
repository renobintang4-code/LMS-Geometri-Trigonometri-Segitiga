import React, { useEffect, useState } from 'react';
import { Award, CheckCircle2, Clock, RotateCcw, Timer, Trophy, XCircle } from 'lucide-react';
import { SUMMATIVE_DB } from '../data/learningData';

interface SumatifViewProps {
  sumatifScore: number | null;
  setSumatifScore: (score: number | null) => void;
  onComplete: () => void;
}

export const SumatifView: React.FC<SumatifViewProps> = ({
  sumatifScore,
  setSumatifScore,
  onComplete,
}) => {
  const [picks, setPicks] = useState<Record<number, number>>({});
  const [isDone, setIsDone] = useState(sumatifScore !== null);
  const [timeLeft, setTimeLeft] = useState(360); // 6 Menit (RPP)
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let int: any = null;
    if (timerOn && timeLeft > 0 && !isDone) {
      int = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft <= 0 && !isDone && timerOn) {
      handleSubmit();
    }
    return () => clearInterval(int);
  }, [timerOn, timeLeft, isDone]);

  const handleSelect = (qId: number, idx: number) => {
    if (!isDone) {
      setPicks(prev => ({ ...prev, [qId]: idx }));
    }
  };

  const handleSubmit = () => {
    let correct = 0;
    SUMMATIVE_DB.forEach(q => {
      if (picks[q.id] === q.c) correct++;
    });
    const finalScore = correct * 20; // 5 x 20 = 100 poin
    setSumatifScore(finalScore);
    setIsDone(true);
    setTimerOn(false);
    localStorage.setItem("triangle_sumatif", finalScore.toString());
    onComplete();
  };

  const handleRetest = () => {
    if (confirm("Ulangi pengerjaan Asesmen Sumatif? Hasil sebelumnya akan diperbarui.")) {
      setPicks({});
      setIsDone(false);
      setTimeLeft(360);
      setTimerOn(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 font-mono mb-2">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>RPP SUMMATIVE ASSESSMENT — 5 BUTIR SOAL RESMI</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Asesmen Sumatif Akhir Pembelajaran
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Bobot 20 poin per butir • Skor Total 100 • Standar waktu RPP: 6 Menit
            </p>
          </div>

          {!isDone ? (
            <div className="flex items-center gap-3">
              <div className="bg-slate-950 text-emerald-400 font-mono text-xs px-3.5 py-2 rounded-xl border border-slate-800 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-bold">
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </span>
              </div>
              {!timerOn && (
                <button 
                  onClick={() => setTimerOn(true)} 
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition shadow">
                  Mulai Timer
                </button>
              )}
            </div>
          ) : (
            <div className="text-right">
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Nilai Evaluasi</div>
              <div className="text-2xl font-black text-emerald-600 font-mono">
                {sumatifScore} / 100
              </div>
            </div>
          )}
        </div>

        {/* Banner Hasil Capaian */}
        {isDone && (
          <div className="p-4 sm:p-5 mb-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs shadow-sm">
            <div className="flex items-start gap-3">
              <Award className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm">
                  {sumatifScore !== null && sumatifScore >= 75 
                    ? "🎉 Selamat! Anda telah melampaui Kriteria Ketercapaian (KKTP ≥ 75)." 
                    : "Tetap semangat! Pelajari kembali pembahasan di bawah ini untuk remedial."}
                </p>
                <p className="text-slate-600 mt-1">
                  Skor Perolehan: <span className="font-bold font-mono text-emerald-800">{sumatifScore} poin</span> ({sumatifScore !== null ? sumatifScore / 20 : 0} dari 5 soal benar).
                </p>
              </div>
            </div>
            <button 
              onClick={handleRetest} 
              className="bg-white border border-slate-300 px-3.5 py-2 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 transition flex items-center gap-1.5 shadow-sm whitespace-nowrap">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ulangi Ujian</span>
            </button>
          </div>
        )}

        {/* Daftar 5 Soal Asli */}
        <div className="space-y-6">
          {SUMMATIVE_DB.map((q, idx) => (
            <div key={q.id} className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-slate-50/60 text-xs">
              <div className="flex justify-between items-start mb-3 gap-2">
                <p className="font-semibold text-slate-900 text-xs sm:text-sm leading-relaxed">
                  <span className="font-mono font-bold mr-2 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {idx + 1}
                  </span>
                  {q.q}
                </p>
                <span className="text-[10px] font-mono bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-bold shrink-0">
                  {q.tp}
                </span>
              </div>

              <div className="space-y-2 mt-2">
                {q.opts.map((opt, oIdx) => {
                  const isSel = picks[q.id] === oIdx;
                  let cls = "border-slate-200 bg-white text-slate-700 hover:bg-slate-100";

                  if (isDone) {
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
                      disabled={isDone}
                      onClick={() => handleSelect(q.id, oIdx)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl border transition flex justify-between items-center ${cls}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-mono">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {isDone && q.c === oIdx && (
                        <span className="text-emerald-700 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Kunci
                        </span>
                      )}
                      {isDone && isSel && q.c !== oIdx && (
                        <span className="text-rose-600 font-bold flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> Pilihanmu
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {isDone && (
                <div className="mt-3.5 pt-3.5 border-t border-slate-200 bg-white p-3.5 rounded-xl border border-slate-200 font-mono text-slate-700 leading-relaxed space-y-1">
                  <strong className="text-slate-900 font-sans block text-xs">Penjelasan RPP Resmi:</strong>
                  <div>{q.exp}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        {!isDone && (
          <div className="mt-8 pt-4 border-t border-slate-200">
            <button
              disabled={Object.keys(picks).length < SUMMATIVE_DB.length}
              onClick={handleSubmit}
              className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl transition text-xs sm:text-sm shadow-md"
            >
              Kirim Jawaban Asesmen ({Object.keys(picks).length} / {SUMMATIVE_DB.length} Terjawab)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { DollarSign, Droplets, Info, Sparkles, Trees } from 'lucide-react';
import { degToRad, round2 } from '../data/learningData';

interface StemViewProps {
  onComplete: () => void;
}

export const StemView: React.FC<StemViewProps> = ({ onComplete }) => {
  const [s1, setS1] = useState(20);
  const [s2, setS2] = useState(25);
  const [ang, setAng] = useState(60);

  useEffect(() => {
    onComplete();
  }, [onComplete]);

  const rad = degToRad(ang);
  const area = 0.5 * s1 * s2 * Math.sin(rad);
  const costPerM2 = 45000;
  const totalCost = area * costPerM2;

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 font-mono mb-2">
          <Trees className="w-3.5 h-3.5 text-emerald-600" />
          <span>MISI STEM: ARSITEKTUR LANSKAP TAMAN SEKOLAH</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
          Perancangan Desain & Estimasi Anggaran Taman Segitiga
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
          Integrasi Matematika Geometri Trigonometri, Teknik Lanskap Lingkungan Hijau, dan Analisis Pembiayaan Pembuatan Taman Sekolah.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Form Input Parameter Batas */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4 text-xs">
            <h3 className="font-bold text-slate-900 text-sm border-b pb-2 flex items-center justify-between">
              <span>Parameter Batas Fisik Lahan</span>
              <span className="text-[11px] text-slate-500 font-normal">Ukuran Riil Meter</span>
            </h3>

            <div>
              <label className="font-semibold text-slate-800 block mb-1">Panjang Batas Sisi A (meter):</label>
              <input
                type="number"
                min="5"
                max="100"
                value={s1}
                onChange={e => setS1(Math.max(5, parseFloat(e.target.value) || 0))}
                className="w-full bg-white border border-slate-300 rounded-xl p-2.5 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-800 block mb-1">Panjang Batas Sisi B (meter):</label>
              <input
                type="number"
                min="5"
                max="100"
                value={s2}
                onChange={e => setS2(Math.max(5, parseFloat(e.target.value) || 0))}
                className="w-full bg-white border border-slate-300 rounded-xl p-2.5 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-semibold text-slate-800">Sudut Apit Batas Taman (Derajat):</label>
                <span className="font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded text-xs">
                  {ang}°
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="165"
                value={ang}
                onChange={e => setAng(parseInt(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>15°</span>
                <span className="text-emerald-700 font-semibold">90° (Maksimum)</span>
                <span>165°</span>
              </div>
            </div>

            <div className="p-3.5 bg-emerald-100/60 rounded-xl text-emerald-950 text-xs border border-emerald-200 flex items-start gap-2">
              <Droplets className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                Biaya Rumput Gajah Mini & Tanam: <strong>Rp{costPerM2.toLocaleString('id-ID')} / m²</strong>
              </div>
            </div>
          </div>

          {/* Panel Kalkulasi STEM */}
          <div className="bg-slate-950 text-white p-6 rounded-2xl font-mono text-xs flex flex-col justify-between space-y-5 shadow-xl border border-slate-800">
            <div>
              <div className="text-emerald-400 font-bold uppercase tracking-wider mb-4 flex items-center gap-1.5 text-xs">
                <Sparkles className="w-4 h-4" />
                <span>Hasil Analisis Geometri & Anggaran</span>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="text-slate-400 text-[11px] mb-0.5">Rumus Trigonometri Luas Lahan:</div>
                  <div className="text-sky-300 font-bold text-xs">
                    L = ½ × {s1}m × {s2}m × sin({ang}°)
                  </div>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="text-slate-400 text-[11px] mb-0.5">Luas Efektif Area Hijau:</div>
                  <div className="text-3xl font-black text-emerald-400">
                    {round2(area)} m²
                  </div>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="text-slate-400 text-[11px] mb-0.5">Estimasi Total Biaya Rumput & Lanskap:</div>
                  <div className="text-2xl font-black text-amber-400">
                    Rp{Math.round(totalCost).toLocaleString('id-ID')},-
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 border-t border-slate-800 pt-3 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Insight Desain:</strong> Kapasitas serapan air hujan dan kenyamanan ruang terbuka hijau akan mencapai efisiensi tertinggi ketika sudut batas taman mendekati sudut tegak lurus 90°.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

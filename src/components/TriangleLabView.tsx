import React, { useEffect, useState } from 'react';
import { Check, Compass, Eye, EyeOff, RotateCcw, Sparkles } from 'lucide-react';
import { degToRad, round2 } from '../data/learningData';

interface TriangleLabViewProps {
  onComplete: () => void;
}

export const TriangleLabView: React.FC<TriangleLabViewProps> = ({ onComplete }) => {
  const [a, setA] = useState(6); // alas BC
  const [b, setB] = useState(8); // sisi miring CA
  const [angleC, setAngleC] = useState(60); // sudut apit ∠C
  const [showAlt, setShowAlt] = useState(true);

  useEffect(() => {
    onComplete();
  }, [onComplete]);

  const rad = degToRad(angleC);
  const sinVal = Math.sin(rad);
  const t = b * sinVal;
  const area = 0.5 * a * b * sinVal;

  // Dimensi Kanvas SVG
  const width = 560;
  const height = 320;
  const scale = 22; // piksel per cm

  // Penentuan Titik Asal C agar segitiga muat di layar baik lancip maupun tumpul
  const originX = angleC > 90 ? 230 : 90;
  const originY = 240;

  // Titik C (sudut apit)
  const cX = originX;
  const cY = originY;

  // Titik B (alas horizontal ke kanan sepanjang a)
  const bX = originX + a * scale;
  const bY = originY;

  // Titik A (koordinat polar dari C sepanjang b pada sudut rad)
  const aX = originX + b * Math.cos(rad) * scale;
  const aY = originY - b * Math.sin(rad) * scale;

  // Titik Kaki Garis Tinggi (proyeksi tegak lurus A ke sumbu alas horizontal)
  const footX = aX;
  const footY = originY;

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 font-mono mb-2">
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span>Simulasi Geometri Interaktif Fase E</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              Triangle Explorer — Laboratorium Segitiga Dinamis
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Geser slider panjang sisi dan sudut apit untuk mengamati perubahan bentuk segitiga, posisi garis tinggi, dan kalkulasi luas secara real-time.
            </p>
          </div>
          <button
            onClick={() => { setA(6); setB(8); setAngleC(60); }}
            className="px-3.5 py-2 border border-slate-300 rounded-xl text-xs font-semibold hover:bg-slate-50 flex items-center gap-1.5 transition text-slate-700 shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Default (a=6, b=8, 60°)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Kolom Slider & Kontrol */}
          <div className="lg:col-span-4 bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4 text-xs">
            <h3 className="font-bold text-slate-900 text-sm border-b pb-2 flex items-center justify-between">
              <span>Variabel Segitiga</span>
              <span className="text-[11px] font-normal text-slate-500">Satuan: cm & derajat</span>
            </h3>

            {/* Slider a (BC) */}
            <div>
              <div className="flex justify-between font-semibold mb-1">
                <span>Panjang Alas a (BC):</span>
                <span className="font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {a} cm
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="12"
                step="0.5"
                value={a}
                onChange={(e) => setA(parseFloat(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            {/* Slider b (CA) */}
            <div>
              <div className="flex justify-between font-semibold mb-1">
                <span>Panjang Sisi b (CA):</span>
                <span className="font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {b} cm
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="12"
                step="0.5"
                value={b}
                onChange={(e) => setB(parseFloat(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            {/* Slider Sudut Apit ∠C */}
            <div>
              <div className="flex justify-between font-semibold mb-1">
                <span>Besar Sudut Apit ∠C:</span>
                <span className="font-mono font-bold text-emerald-950 bg-emerald-200/80 px-2.5 py-0.5 rounded-lg text-xs">
                  {angleC}°
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="175"
                value={angleC}
                onChange={(e) => setAngleC(parseInt(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>Lancip (5°)</span>
                <span className="font-semibold text-emerald-600">Siku-siku (90°)</span>
                <span>Tumpul (175°)</span>
              </div>
            </div>

            {/* Preset Sudut RPP */}
            <div className="pt-2">
              <span className="font-semibold text-slate-700 block mb-1.5">Preset Sudut Istimewa RPP:</span>
              <div className="grid grid-cols-3 gap-1.5">
                {[30, 45, 60, 90, 120, 150].map((deg) => (
                  <button
                    key={deg}
                    onClick={() => setAngleC(deg)}
                    className={`py-1.5 rounded-lg border font-mono text-xs transition ${
                      angleC === deg 
                        ? 'bg-emerald-600 text-white font-bold border-emerald-600 shadow' 
                        : 'bg-white hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    {deg}°
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle Garis Tinggi */}
            <div className="pt-2 border-t border-slate-200">
              <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-700 select-none">
                <input
                  type="checkbox"
                  checked={showAlt}
                  onChange={(e) => setShowAlt(e.target.checked)}
                  className="w-4 h-4 accent-emerald-600 rounded"
                />
                <span className="flex items-center gap-1.5">
                  {showAlt ? <Eye className="w-3.5 h-3.5 text-emerald-600" /> : <EyeOff className="w-3.5 h-3.5 text-slate-400" />}
                  <span>Tampilkan Garis Tinggi (t)</span>
                </span>
              </label>
            </div>
          </div>

          {/* Kanvas Geometri SVG */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-slate-950 rounded-2xl p-4 shadow-inner border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
              <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible select-none">
                <defs>
                  <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width={width} height={height} fill="url(#gridPattern)" />

                {/* Perpanjangan Garis Alas Jika Sudut Tumpul (C > 90°) */}
                {angleC > 90 && showAlt && (
                  <g>
                    <line
                      x1={cX}
                      y1={cY}
                      x2={footX}
                      y2={footY}
                      stroke="#f59e0b"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                    />
                    <text
                      x={(cX + footX) / 2}
                      y={cY + 16}
                      fill="#f59e0b"
                      fontSize="10"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      Perpanjangan Alas
                    </text>
                  </g>
                )}

                {/* Garis Tinggi t */}
                {showAlt && (
                  <g>
                    <line
                      x1={aX}
                      y1={aY}
                      x2={footX}
                      y2={footY}
                      stroke="#38bdf8"
                      strokeWidth="2"
                      strokeDasharray="4 3"
                    />
                    {/* Kotak Simbol Siku-siku */}
                    <path
                      d={`M ${footX + (angleC > 90 ? -10 : 10)} ${footY} L ${footX + (angleC > 90 ? -10 : 10)} ${footY - 10} L ${footX} ${footY - 10}`}
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="1.5"
                    />
                    <text
                      x={footX + (angleC > 90 ? -14 : 10)}
                      y={(aY + footY) / 2}
                      fill="#38bdf8"
                      fontSize="11"
                      fontFamily="monospace"
                      fontWeight="bold"
                      textAnchor={angleC > 90 ? "end" : "start"}
                    >
                      t = {round2(t)} cm
                    </text>
                  </g>
                )}

                {/* Segitiga ABC */}
                <polygon
                  points={`${cX},${cY} ${bX},${bY} ${aX},${aY}`}
                  fill="rgba(16, 185, 129, 0.25)"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />

                {/* Titik Sudut */}
                <circle cx={cX} cy={cY} r="5" fill="#f59e0b" />
                <circle cx={bX} cy={bY} r="5" fill="#10b981" />
                <circle cx={aX} cy={aY} r="5" fill="#38bdf8" />

                {/* Label Titik */}
                <text x={cX - 16} y={cY + 16} fill="#f59e0b" fontSize="13" fontWeight="bold">C</text>
                <text x={bX + 10} y={bY + 16} fill="#10b981" fontSize="13" fontWeight="bold">B</text>
                <text x={aX} y={aY - 12} fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">A</text>

                {/* Label Sisi */}
                <text x={(cX + bX) / 2} y={cY + 18} fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="monospace">
                  a = {a} cm
                </text>
                <text x={(cX + aX) / 2 - 14} y={(cY + aY) / 2} fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="monospace">
                  b = {b} cm
                </text>
              </svg>

              <div className="absolute top-3 left-4 text-xs font-mono text-slate-400">
                Kategori Sudut: <span className="font-bold text-emerald-400">
                  {angleC < 90 ? "Lancip (<90°)" : angleC === 90 ? "Tepat Siku-siku 90° (LUAS MAKSIMUM)" : "Tumpul (>90° — Garis Tinggi di Luar Segitiga)"}
                </span>
              </div>
            </div>

            {/* Indikator Hitungan Real-Time */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900 text-white p-4 sm:p-5 rounded-2xl font-mono text-xs">
              <div>
                <div className="text-slate-400 text-[11px]">Nilai sin({angleC}°)</div>
                <div className="text-lg font-bold text-sky-400">{round2(sinVal)}</div>
                <div className="text-[10px] text-slate-500 font-sans mt-0.5">Rasio trigonometri</div>
              </div>
              <div>
                <div className="text-slate-400 text-[11px]">Tinggi t = b · sin C</div>
                <div className="text-lg font-bold text-amber-400">{round2(t)} cm</div>
                <div className="text-[10px] text-slate-500 font-sans mt-0.5">{b} × {round2(sinVal)}</div>
              </div>
              <div>
                <div className="text-slate-400 text-[11px]">Rumus Dasar: ½ · a · t</div>
                <div className="text-lg font-bold text-slate-200">{round2(0.5 * a * t)} cm²</div>
                <div className="text-[10px] text-slate-500 font-sans mt-0.5">½ × {a} × {round2(t)}</div>
              </div>
              <div>
                <div className="text-slate-400 text-[11px]">Luas: ½ ab sin C</div>
                <div className="text-lg font-black text-emerald-400">{round2(area)} cm²</div>
                <div className="text-[10px] text-emerald-500/80 font-sans mt-0.5 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Hasil identik!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

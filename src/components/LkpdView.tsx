import React, { useState } from 'react';
import { Check, CheckCircle2, FileCheck, Lock, PenTool, Save, Unlock } from 'lucide-react';
import { LkpdData } from '../types';

interface LkpdViewProps {
  lkpdData: LkpdData;
  setLkpdData: React.Dispatch<React.SetStateAction<LkpdData>>;
  teacherMode: boolean;
  onComplete: () => void;
}

export const LkpdView: React.FC<LkpdViewProps> = ({
  lkpdData,
  setLkpdData,
  teacherMode,
  onComplete,
}) => {
  const [kegiatan, setKegiatan] = useState(1);
  const [savedAlert, setSavedAlert] = useState(false);

  const handleChange = (f: keyof LkpdData, v: string) => {
    setLkpdData(prev => ({ ...prev, [f]: v }));
  };

  const handleSave = () => {
    setSavedAlert(true);
    onComplete();
    setTimeout(() => setSavedAlert(false), 2500);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold bg-purple-50 text-purple-800 font-mono mb-2">
              <PenTool className="w-3.5 h-3.5 text-purple-600" />
              <span>Lembar Kerja Peserta Didik (LKPD) Digital</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              LKPD Digital RPP: Luas Segitiga dengan Trigonometri
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Kerjakan secara berkelompok • Eksplorasi interaktif & verifikasi matematis
            </p>
          </div>
          {teacherMode && (
            <span className="text-xs font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <Unlock className="w-3.5 h-3.5" />
              <span>Kunci Jawaban Guru Terbuka</span>
            </span>
          )}
        </div>

        {/* Identitas Kelompok */}
        <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs">
          <div>
            <label className="font-semibold text-slate-800 block mb-1.5">Nama Kelompok:</label>
            <input
              type="text"
              placeholder="Contoh: Kelompok 1 (Gauss)"
              value={lkpdData.kelompok || ""}
              onChange={(e) => handleChange("kelompok", e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="font-semibold text-slate-800 block mb-1.5">Nama Anggota Kelompok:</label>
            <input
              type="text"
              placeholder="Tuliskan nama 4–5 anggota..."
              value={lkpdData.anggota || ""}
              onChange={(e) => handleChange("anggota", e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Tab Kegiatan */}
        <div className="flex border-b border-slate-200 space-x-2 text-xs sm:text-sm font-semibold mb-6 overflow-x-auto">
          <button
            onClick={() => setKegiatan(1)}
            className={`pb-3 px-4 border-b-2 whitespace-nowrap transition ${
              kegiatan === 1 ? 'border-emerald-600 text-emerald-600 font-bold' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Kegiatan 1: Menemukan Rumus (t/b = sin C)
          </button>
          <button
            onClick={() => setKegiatan(2)}
            className={`pb-3 px-4 border-b-2 whitespace-nowrap transition ${
              kegiatan === 2 ? 'border-emerald-600 text-emerald-600 font-bold' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Kegiatan 2: Pengaruh Besar Sudut
          </button>
          <button
            onClick={() => setKegiatan(3)}
            className={`pb-3 px-4 border-b-2 whitespace-nowrap transition ${
              kegiatan === 3 ? 'border-emerald-600 text-emerald-600 font-bold' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Kegiatan 3: Masalah Kontekstual & Segi-n
          </button>
        </div>

        {/* Konten Kegiatan 1 */}
        {kegiatan === 1 && (
          <div className="space-y-4 text-xs">
            <p className="text-slate-700 leading-relaxed">
              Gambarlah segitiga ABC dengan <strong>BC = a = 6 cm</strong>, <strong>AC = b = 8 cm</strong>, dan besar ∠C sesuai tabel berikut. Tarik garis tinggi t dari titik sudut A tegak lurus ke sisi BC, ukur tingginya, lalu lengkapi tabel:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-200">
                <thead className="bg-slate-100 text-slate-800">
                  <tr>
                    <th className="border p-2.5 text-center">Besar ∠C</th>
                    <th className="border p-2.5">Tinggi t (cm)</th>
                    <th className="border p-2.5">Luas L = ½ · a · t (cm²)</th>
                    <th className="border p-2.5">Rasio t / b (b = 8 cm)</th>
                    <th className="border p-2.5">sin C (Tabel/Kalkulator)</th>
                  </tr>
                </thead>
                <tbody className="font-mono">
                  <tr>
                    <td className="border p-2.5 font-bold font-sans text-center">30°</td>
                    <td className="border p-2">
                      <input 
                        type="text" 
                        placeholder="Contoh: 4,00" 
                        value={lkpdData.k1_30_t || ""} 
                        onChange={e => handleChange("k1_30_t", e.target.value)} 
                        className="w-full bg-slate-50 p-1.5 border rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500" 
                      />
                    </td>
                    <td className="border p-2">
                      <input 
                        type="text" 
                        placeholder="Contoh: 12,00" 
                        value={lkpdData.k1_30_L || ""} 
                        onChange={e => handleChange("k1_30_L", e.target.value)} 
                        className="w-full bg-slate-50 p-1.5 border rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500" 
                      />
                    </td>
                    <td className="border p-2">
                      <input 
                        type="text" 
                        placeholder="Contoh: 0,50" 
                        value={lkpdData.k1_30_tb || ""} 
                        onChange={e => handleChange("k1_30_tb", e.target.value)} 
                        className="w-full bg-slate-50 p-1.5 border rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500" 
                      />
                    </td>
                    <td className="border p-2.5 bg-slate-50 text-slate-700 font-bold">0,50</td>
                  </tr>
                  <tr>
                    <td className="border p-2.5 font-bold font-sans text-center">60°</td>
                    <td className="border p-2">
                      <input 
                        type="text" 
                        placeholder="Contoh: 6,93" 
                        value={lkpdData.k1_60_t || ""} 
                        onChange={e => handleChange("k1_60_t", e.target.value)} 
                        className="w-full bg-slate-50 p-1.5 border rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500" 
                      />
                    </td>
                    <td className="border p-2">
                      <input 
                        type="text" 
                        placeholder="Contoh: 20,78" 
                        value={lkpdData.k1_60_L || ""} 
                        onChange={e => handleChange("k1_60_L", e.target.value)} 
                        className="w-full bg-slate-50 p-1.5 border rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500" 
                      />
                    </td>
                    <td className="border p-2">
                      <input 
                        type="text" 
                        placeholder="Contoh: 0,87" 
                        value={lkpdData.k1_60_tb || ""} 
                        onChange={e => handleChange("k1_60_tb", e.target.value)} 
                        className="w-full bg-slate-50 p-1.5 border rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500" 
                      />
                    </td>
                    <td className="border p-2.5 bg-slate-50 text-slate-700 font-bold">≈ 0,87 (½√3)</td>
                  </tr>
                  <tr>
                    <td className="border p-2.5 font-bold font-sans text-center">120°</td>
                    <td className="border p-2">
                      <input 
                        type="text" 
                        placeholder="Contoh: 6,93" 
                        value={lkpdData.k1_120_t || ""} 
                        onChange={e => handleChange("k1_120_t", e.target.value)} 
                        className="w-full bg-slate-50 p-1.5 border rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500" 
                      />
                    </td>
                    <td className="border p-2">
                      <input 
                        type="text" 
                        placeholder="Contoh: 20,78" 
                        value={lkpdData.k1_120_L || ""} 
                        onChange={e => handleChange("k1_120_L", e.target.value)} 
                        className="w-full bg-slate-50 p-1.5 border rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500" 
                      />
                    </td>
                    <td className="border p-2">
                      <input 
                        type="text" 
                        placeholder="Contoh: 0,87" 
                        value={lkpdData.k1_120_tb || ""} 
                        onChange={e => handleChange("k1_120_tb", e.target.value)} 
                        className="w-full bg-slate-50 p-1.5 border rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500" 
                      />
                    </td>
                    <td className="border p-2.5 bg-slate-50 text-slate-700 font-bold">≈ 0,87 (½√3)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {teacherMode && (
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 font-mono text-xs">
                <strong>Kunci Jawaban Guru:</strong> Rasio t/b terbukti identik dengan sin C, sehingga t = b sin C. Dengan demikian rumus luas dasar L = ½ at dapat dinyatakan menjadi L = ½ ab sin C.
              </div>
            )}

            <div>
              <label className="font-bold text-slate-900 block mb-1.5">
                Kesimpulan Hubungan Nilai Rasio t/b dengan sin C dan Penemuan Rumus Luas:
              </label>
              <textarea
                rows={3}
                value={lkpdData.k1_kesimpulan || ""}
                onChange={e => handleChange("k1_kesimpulan", e.target.value)}
                placeholder="Tuliskan temuan kelompokmu..."
                className="w-full border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs"
              />
            </div>
          </div>
        )}

        {/* Konten Kegiatan 2 */}
        {kegiatan === 2 && (
          <div className="space-y-4 text-xs">
            <p className="text-slate-700 leading-relaxed">
              Dengan panjang sisi <strong>a = 6 cm</strong> dan <strong>b = 8 cm</strong> tetap, hitunglah luas segitiga untuk setiap variasi sudut berikut menggunakan rumus L = ½ ab sin C:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { d: "30°", sin: "0,50", f: "k2_30" as keyof LkpdData, h: "12,00 cm²" },
                { d: "45°", sin: "≈0,71", f: "k2_45" as keyof LkpdData, h: "≈16,97 cm²" },
                { d: "60°", sin: "≈0,87", f: "k2_60" as keyof LkpdData, h: "≈20,78 cm²" },
                { d: "90°", sin: "1,00", f: "k2_90" as keyof LkpdData, h: "24,00 cm² (Maks)" },
                { d: "120°", sin: "≈0,87", f: "k2_120" as keyof LkpdData, h: "≈20,78 cm²" },
                { d: "150°", sin: "0,50", f: "k2_150" as keyof LkpdData, h: "12,00 cm²" }
              ].map(item => (
                <div key={item.d} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex justify-between items-center font-bold mb-1.5">
                    <span className="text-slate-900">∠C = {item.d}</span>
                    <span className="text-slate-500 font-mono text-[11px]">sin = {item.sin}</span>
                  </div>
                  <input
                    type="text"
                    placeholder={`Contoh: ${item.h}`}
                    value={lkpdData[item.f] || ""}
                    onChange={e => handleChange(item.f, e.target.value)}
                    className="w-full bg-white border border-slate-300 p-2 rounded-lg font-mono text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              ))}
            </div>

            {teacherMode && (
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 font-mono text-xs">
                <strong>Kunci Jawaban Guru:</strong> Luas membesar dari 30° hingga mencapai puncak maksimum pada 90° (24 cm²), kemudian mengecil kembali dari 90° ke 150°. Pasangan sudut suplementer (30° & 150°, 60° & 120°) memiliki luas yang sama persis.
              </div>
            )}

            <div>
              <label className="font-bold text-slate-900 block mb-1.5">
                Analisis Pengaruh Besar Sudut terhadap Luas dan Alasan Kesamaan Luas Sudut Berelasi:
              </label>
              <textarea
                rows={3}
                value={lkpdData.k2_kesimpulan || ""}
                onChange={e => handleChange("k2_kesimpulan", e.target.value)}
                placeholder="Jelaskan alasan matematisnya secara kelompok..."
                className="w-full border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs"
              />
            </div>
          </div>
        )}

        {/* Konten Kegiatan 3 */}
        {kegiatan === 3 && (
          <div className="space-y-4 text-xs">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="font-bold text-slate-900 text-sm">Masalah 1 (Pemetaan Lahan Tanah Pak Budi):</div>
              <p className="text-slate-700 leading-relaxed">
                Dua sisi batas lahan milik Pak Budi masing-masing berukuran <strong>40 m</strong> dan <strong>30 m</strong>, dan membentuk sudut apit <strong>60°</strong>. Berapakah luas lahan Pak Budi tersebut?
              </p>
              <input
                type="text"
                placeholder="Tuliskan jawaban luas lahan dan langkahnya..."
                value={lkpdData.k3_1 || ""}
                onChange={e => handleChange("k3_1", e.target.value)}
                className="w-full bg-white border border-slate-300 p-2.5 rounded-lg font-mono text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              {teacherMode && (
                <p className="text-amber-900 font-mono text-xs bg-amber-50 p-2 rounded">
                  Kunci: L = ½ × 40 × 30 × sin 60° = 600 × (½√3) = 300√3 m² ≈ 519,62 m².
                </p>
              )}
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="font-bold text-slate-900 text-sm">Masalah 2 (Menentukan Sudut Segitiga dari Luas):</div>
              <p className="text-slate-700 leading-relaxed">
                Pada segitiga ABC, panjang AB = 10 cm, AC = 8 cm, dan luasnya adalah <strong>20√3 cm²</strong>. Tentukan semua kemungkinan besar sudut A yang memenuhi!
              </p>
              <input
                type="text"
                placeholder="Tuliskan kemungkinan besar sudut A..."
                value={lkpdData.k3_2 || ""}
                onChange={e => handleChange("k3_2", e.target.value)}
                className="w-full bg-white border border-slate-300 p-2.5 rounded-lg font-mono text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              {teacherMode && (
                <p className="text-amber-900 font-mono text-xs bg-amber-50 p-2 rounded">
                  Kunci: 20√3 = ½ × 10 × 8 × sin A ⟹ 20√3 = 40 sin A ⟹ sin A = √3/2. Sudut A = 60° (lancip) atau 180° − 60° = 120° (tumpul).
                </p>
              )}
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="font-bold text-slate-900 text-sm">Masalah 3 (Luas Ubin Heksagonal Beraturan):</div>
              <p className="text-slate-700 leading-relaxed">
                Sebuah ubin keramik berbentuk segi enam beraturan dengan panjang sisi <strong>6 cm</strong>. Hitunglah luas total ubin tersebut!
              </p>
              <input
                type="text"
                placeholder="Tuliskan hasil luas ubin heksagonal..."
                value={lkpdData.k3_3 || ""}
                onChange={e => handleChange("k3_3", e.target.value)}
                className="w-full bg-white border border-slate-300 p-2.5 rounded-lg font-mono text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              {teacherMode && (
                <p className="text-amber-900 font-mono text-xs bg-amber-50 p-2 rounded">
                  Kunci: Terdiri atas 6 segitiga kongruen dengan sudut pusat 60°. Luas = 6 × (½ × 6 × 6 × sin 60°) = 54√3 cm² ≈ 93,53 cm².
                </p>
              )}
            </div>
          </div>
        )}

        {/* Footer Simpan */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <div>
            {savedAlert ? (
              <span className="font-bold text-emerald-600 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Isian LKPD berhasil disimpan ke penyimpanan lokal!
              </span>
            ) : (
              <span className="text-slate-400">Seluruh isian otomatis tersinkronisasi di peramban Anda.</span>
            )}
          </div>
          <button
            onClick={handleSave}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-2.5 rounded-xl transition shadow-md flex items-center gap-2"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Simpan LKPD Kelompok</span>
          </button>
        </div>
      </div>
    </div>
  );
};

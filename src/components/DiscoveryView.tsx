import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, HelpCircle, PenTool, Sparkles } from 'lucide-react';

interface DiscoveryViewProps {
  setCurrentTab: (tab: string) => void;
  onComplete: () => void;
}

export const DiscoveryView: React.FC<DiscoveryViewProps> = ({ setCurrentTab, onComplete }) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    onComplete();
  }, [onComplete]);

  const steps = [
    { no: 1, title: "1. Stimulation", time: "8 Menit", desc: "Dua segitiga bersisi sama (6 & 8 cm) sudut 30° vs 90°, serta masalah lahan 40m × 30m sudut 60°." },
    { no: 2, title: "2. Problem Statement", time: "7 Menit", desc: "Merumuskan hubungan garis tinggi dengan sinus sudut apit dan dugaan awal rumus luas." },
    { no: 3, title: "3. Data Collection", time: "20 Menit", desc: "Menggambar segitiga, mengukur tinggi t secara manual, menghitung rasio t/b dan nilai sin C pada LKPD." },
    { no: 4, title: "4. Data Processing", time: "30 Menit", desc: "Menemukan t = b sin C, menurunkan L = ½ ab sin C, dan menyelesaikan 3 masalah kontekstual." },
    { no: 5, title: "5. Verification", time: "12 Menit", desc: "Membandingkan hasil ½at dengan trigonometri, menguji batas kewajaran L ≤ ½ab." },
    { no: 6, title: "6. Generalization", time: "23 Menit", desc: "Presentasi kelompok dan menyimpulkan aturan rumus, sudut maksimum 90°, serta sifat suplementer." }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sintaks Discovery Learning RPP</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Alur 6 Sintaks Pembelajaran (120 Menit)</h2>
            <p className="text-xs text-slate-500 mt-0.5">Panduan langkah terstruktur siswa dan kelompok sesuai Kurikulum Merdeka Fase E.</p>
          </div>
          <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-xl font-bold">
            Tahap {step} dari 6
          </span>
        </div>

        {/* Horizontal Step Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 mb-6 text-xs">
          {steps.map(s => (
            <button
              key={s.no}
              onClick={() => setStep(s.no)}
              className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                step === s.no 
                  ? 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-md ring-2 ring-emerald-400' 
                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] opacity-80 font-mono mb-1">
                <span>Tahap {s.no}</span>
                <span className="flex items-center gap-0.5"><Clock className="w-3 h-3" />{s.time}</span>
              </div>
              <div className="truncate font-semibold">{s.title.split('. ')[1]}</div>
            </button>
          ))}
        </div>

        {/* Isi Rinci Tiap Sintaks */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          {step === 1 && (
            <div className="space-y-4 text-xs sm:text-sm">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span>Tahap 1: Stimulation (Pemberian Rangsangan — 8 Menit)</span>
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Guru menyajikan dua gambar segitiga yang sama-sama memiliki panjang dua sisi <strong>6 cm dan 8 cm</strong>:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <div className="font-bold text-emerald-800 text-sm">Segitiga I: Sudut Apit 30°</div>
                  <p className="text-slate-600 text-xs mt-1">Kedua sisi 6 cm & 8 cm ⟹ Luas = 12 cm²</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <div className="font-bold text-emerald-800 text-sm">Segitiga II: Sudut Apit 90°</div>
                  <p className="text-slate-600 text-xs mt-1">Kedua sisi 6 cm & 8 cm ⟹ Luas = 24 cm²</p>
                </div>
              </div>
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl text-xs text-emerald-950 space-y-1.5">
                <p className="font-bold text-sm">Pertanyaan Pemantik:</p>
                <p>1. Mengapa dua segitiga yang kedua sisinya persis sama panjang menghasilkan ukuran luas yang berbeda drastis?</p>
                <p>2. Jika Pak Budi memiliki sebidang tanah segitiga berukuran 40 m × 30 m dengan sudut apit 60°, bagaimana menentukan luasnya tanpa harus mengukur garis tinggi?</p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 text-xs sm:text-sm">
              <h3 className="font-bold text-slate-900 text-base">
                Tahap 2: Problem Statement (Identifikasi Masalah — 7 Menit)
              </h3>
              <div className="bg-white border border-slate-200 p-5 rounded-xl space-y-3 shadow-sm">
                <div>
                  <strong className="text-slate-900 block mb-1">Rumusan Masalah Utama:</strong>
                  <p className="text-slate-700">
                    "Bagaimana merumuskan luas daerah suatu segitiga sembarang hanya menggunakan panjang dua sisi dan besar sudut apitnya tanpa mengetahui garis tinggi tegak lurus secara langsung?"
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 block mb-1">Dugaan Awal (Hipotesis Murid):</strong>
                  <p className="text-slate-700">
                    Tinggi segitiga t dapat dinyatakan dalam bentuk perbandingan sinus sisi miring, yaitu t = b sin C, sehingga luas segitiga dapat langsung dirumuskan menjadi L = ½ ab sin C.
                  </p>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 text-xs sm:text-sm">
              <h3 className="font-bold text-slate-900 text-base">
                Tahap 3: Data Collection (Pengumpulan Data — 20 Menit)
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Peserta didik bekerja dalam kelompok heterogen (4–5 orang). Setiap kelompok menggambar tiga segitiga dengan panjang sisi tetap a = 6 cm dan b = 8 cm, pada variasi sudut apit 30°, 60°, dan 120°.
              </p>
              <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-2 text-xs">
                <p className="font-bold text-slate-800">Aktivitas di LKPD:</p>
                <p>1. Mengukur garis tinggi t menggunakan penggaris tegak lurus.</p>
                <p>2. Menghitung luas klasik L = ½ · a · t.</p>
                <p>3. Menghitung rasio t / b dan membandingkannya dengan nilai sin C dari kalkulator saintifik atau tabel.</p>
              </div>
              <button 
                onClick={() => setCurrentTab("lkpd")} 
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 transition shadow"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>Buka Lembar LKPD Digital untuk Mengisi Data</span>
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4 text-xs sm:text-sm">
              <h3 className="font-bold text-slate-900 text-base">
                Tahap 4: Data Processing (Pengolahan Data — 30 Menit)
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Kelompok mengolah data tabel LKPD Kegiatan 1, Kegiatan 2, dan menyelesaikan Kegiatan 3. Peserta didik menemukan hubungan kesetaraan matematis:
              </p>
              <div className="bg-slate-950 text-slate-100 p-4 rounded-xl font-mono text-xs space-y-1">
                <p className="text-emerald-400">Rasio t / b = sin C  ⟺  t = b · sin C</p>
                <p className="text-sky-300">Luas = ½ · a · t = ½ · a · (b · sin C) = ½ ab sin C</p>
              </div>
              <p className="text-slate-700">
                Mereka juga menerapkan rumus ini untuk memecahkan masalah lahan Pak Budi, menentukan sudut dari luas yang diketahui, dan luas ubin segi enam beraturan.
              </p>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4 text-xs sm:text-sm">
              <h3 className="font-bold text-slate-900 text-base">
                Tahap 5: Verification (Pembuktian — 12 Menit)
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Kelompok memeriksa kembali hasil perhitungan mereka:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-white border rounded-xl">
                  <strong>Uji Kewajaran Geometri:</strong> Luas segitiga tidak pernah boleh melebihi ½ ab karena nilai sin C ≤ 1.
                </div>
                <div className="p-3.5 bg-white border rounded-xl">
                  <strong>Uji Sudut Berelasi:</strong> Luas pada sudut tumpul 120° terbukti sama persis dengan sudut lancip 60° karena sin 120° = sin 60°.
                </div>
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="space-y-4 text-xs sm:text-sm">
              <h3 className="font-bold text-slate-900 text-base">
                Tahap 6: Generalization (Menarik Kesimpulan — 23 Menit)
              </h3>
              <div className="bg-emerald-950 text-emerald-200 p-5 rounded-2xl font-mono text-xs space-y-2 border border-emerald-700">
                <p className="font-bold text-white text-sm">KESIMPULAN UMUM KELAS:</p>
                <p>1. Luas segitiga sembarang dapat ditentukan jika diketahui dua sisi dan sinus sudut apitnya:</p>
                <p className="text-emerald-300 font-bold pl-3">L = ½ ab sin C = ½ bc sin A = ½ ac sin B</p>
                <p>2. Luas segitiga mencapai nilai maksimum saat sudut apitnya tepat 90° (segitiga siku-siku), dengan L_maks = ½ ab.</p>
                <p>3. Dua segitiga bersisi sama memiliki luas yang sama jika sudut apitnya saling berpelurus / suplementer (α dan 180° − α).</p>
              </div>
            </div>
          )}

          {/* Stepper Navigation */}
          <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center text-xs">
            <button
              disabled={step === 1}
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 border rounded-xl text-slate-700 disabled:opacity-40 flex items-center gap-1.5 hover:bg-slate-100 transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Tahap Sebelumnya</span>
            </button>
            <button
              disabled={step === 6}
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold disabled:opacity-40 flex items-center gap-1.5 hover:bg-emerald-500 transition shadow"
            >
              <span>Tahap Selanjutnya</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

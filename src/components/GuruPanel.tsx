import React, { useState } from 'react';
import { CheckCircle2, Lock, ShieldCheck, Star, Unlock, UserCheck } from 'lucide-react';
import { AttitudeScores } from '../types';

interface GuruPanelProps {
  teacherMode: boolean;
  setTeacherMode: (val: boolean) => void;
  sumatifScore: number | null;
  studentName: string;
}

export const GuruPanel: React.FC<GuruPanelProps> = ({
  teacherMode,
  setTeacherMode,
  sumatifScore,
  studentName,
}) => {
  const [attitude, setAttitude] = useState<AttitudeScores>({
    jujur: 5,
    disiplin: 4,
    tanggungJawab: 5,
    santun: 5,
    percayaDiri: 4,
  });

  const totalSkorSikap = attitude.jujur + attitude.disiplin + attitude.tanggungJawab + attitude.santun + attitude.percayaDiri;
  const nilaiSikap = totalSkorSikap * 4; // Skor max 25 × 4 = 100

  let predikatSikap = "Sangat Baik (A)";
  if (nilaiSikap <= 40) predikatSikap = "Kurang (D)";
  else if (nilaiSikap <= 60) predikatSikap = "Cukup (C)";
  else if (nilaiSikap <= 80) predikatSikap = "Baik (B)";

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 font-mono mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Instrumen Penilaian Kurikulum Merdeka Fase E</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              Panel Guru: KKTP, Rubrik Asesmen & Observasi Sikap
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Standar kriteria ketercapaian tujuan pembelajaran dan format observasi sikap profil pelajar.
            </p>
          </div>
          <button
            onClick={() => setTeacherMode(!teacherMode)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm ${
              teacherMode 
                ? 'bg-amber-500 text-slate-950 border border-amber-400' 
                : 'bg-slate-800 text-white hover:bg-slate-700'
            }`}
          >
            {teacherMode ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
            <span>{teacherMode ? "Kunci LKPD Terbuka" : "Aktifkan Kunci Guru"}</span>
          </button>
        </div>

        {/* 1. Matrix KKTP Sesuai RPP */}
        <div className="space-y-3 mb-8">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <span>1. Kriteria Ketercapaian Tujuan Pembelajaran (KKTP)</span>
          </h3>
          <div className="overflow-x-auto text-xs">
            <table className="w-full border-collapse border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-800">
                <tr>
                  <th className="border p-3 text-left">Indikator TP</th>
                  <th className="border p-3 bg-red-50 text-red-900">Kurang (0–50)</th>
                  <th className="border p-3 bg-amber-50 text-amber-900">Cukup (51–70)</th>
                  <th className="border p-3 bg-sky-50 text-sky-900">Baik (71–85)</th>
                  <th className="border p-3 bg-emerald-50 text-emerald-900">Sangat Baik (86–100)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-bold text-slate-900">TP 1: Menentukan Luas</td>
                  <td className="border p-3 text-slate-600">Tidak dapat mengidentifikasi sudut apit maupun rumus.</td>
                  <td className="border p-3 text-slate-600">Menghitung dengan banyak bimbingan guru.</td>
                  <td className="border p-3 text-slate-600">Menentukan tepat, terdapat sedikit kekeliruan aritmetika.</td>
                  <td className="border p-3 font-semibold text-emerald-900 bg-emerald-50/40">Menemukan rumus & menghitung secara mandiri, presisi, dan teliti.</td>
                </tr>
                <tr>
                  <td className="border p-3 font-bold text-slate-900">TP 2: Pengaruh Sudut</td>
                  <td className="border p-3 text-slate-600">Tidak dapat menghubungkan besar sudut dengan perubahan luas.</td>
                  <td className="border p-3 text-slate-600">Menghitung beberapa sudut tanpa melihat pola keteraturan.</td>
                  <td className="border p-3 text-slate-600">Menyimpulkan pola luas, namun penjelasan konsep kurang lengkap.</td>
                  <td className="border p-3 font-semibold text-emerald-900 bg-emerald-50/40">Menyimpulkan puncak luas pada 90° & sifat kesamaan sudut suplementer secara mandiri.</td>
                </tr>
                <tr>
                  <td className="border p-3 font-bold text-slate-900">TP 3: Masalah Geometri</td>
                  <td className="border p-3 text-slate-600">Tidak mampu memodelkan masalah kontekstual ke dalam bentuk segitiga.</td>
                  <td className="border p-3 text-slate-600">Memodelkan dengan asistensi intensif guru/teman.</td>
                  <td className="border p-3 text-slate-600">Memodelkan tepat dengan sedikit kesalahan teknis.</td>
                  <td className="border p-3 font-semibold text-emerald-900 bg-emerald-50/40">Memodelkan tepat, memeriksa batas kewajaran hasil, & mengomunikasikan dengan lugas.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. Lembar Observasi Sikap Guru (Asli RPP Lampiran B) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-8 text-xs">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-600" />
                <span>2. Lembar Observasi Sikap Peserta Didik (RPP Lampiran B)</span>
              </h3>
              <p className="text-slate-500 mt-0.5">
                Skala Likert 1–5: Selalu=5, Sering=4, Jarang=3, Pernah=2, Tidak Pernah=1
              </p>
            </div>
            <div className="text-right font-mono bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-[10px] text-slate-500">Nilai Sikap = Total Skor × 4</div>
              <div className="text-sm font-bold text-emerald-700">
                {nilaiSikap} / 100 ({predikatSikap})
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[
              { k: "jujur" as keyof AttitudeScores, l: "1. Kejujuran (Anti-Plagiasi)" },
              { k: "disiplin" as keyof AttitudeScores, l: "2. Disiplin (Tepat Waktu)" },
              { k: "tanggungJawab" as keyof AttitudeScores, l: "3. Tanggung Jawab Tim" },
              { k: "santun" as keyof AttitudeScores, l: "4. Kesantunan Berkomunikasi" },
              { k: "percayaDiri" as keyof AttitudeScores, l: "5. Percaya Diri Presentasi" }
            ].map(item => (
              <div key={item.k} className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                <label className="font-semibold text-slate-800 block mb-1.5">{item.l}</label>
                <select
                  value={attitude[item.k]}
                  onChange={e => setAttitude({ ...attitude, [item.k]: parseInt(e.target.value) })}
                  className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg font-mono text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="5">5 (Selalu Menunjukkan)</option>
                  <option value="4">4 (Sering Menunjukkan)</option>
                  <option value="3">3 (Jarang Menunjukkan)</option>
                  <option value="2">2 (Pernah Menunjukkan)</option>
                  <option value="1">1 (Tidak Pernah)</option>
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Rubrik Penilaian Produk LKPD & Presentasi */}
        <div className="text-xs">
          <h3 className="font-bold text-slate-900 text-sm mb-3">
            3. Rubrik Penilaian Produk LKPD & Presentasi Kelompok (Bobot 20 poin × 5 = 100)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[
              { a: "1. Penemuan Rumus", d: "Menemukan kesetaraan rasio t/b = sin C dan merumuskan L = ½ab sin C secara logis." },
              { a: "2. Ketepatan Hitung", d: "Seluruh hasil perhitungan trigonometri, garis tinggi, dan luas di tabel terisi akurat." },
              { a: "3. Analisis Sudut", d: "Menganalisis sudut lancip, tumpul, luas maksimum di 90°, dan sifat berelasi sudut suplementer." },
              { a: "4. Masalah Kontekstual", d: "Mampu memecahkan masalah lahan Pak Budi, kemungkinan dua sudut, & ubin heksagonal." },
              { a: "5. Kerjasama Tim", d: "Seluruh anggota kelompok berpartisipasi aktif dalam eksperimen, diskusi, dan presentasi." }
            ].map((r, i) => (
              <div key={i} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="font-bold text-slate-900 mb-1">{r.a}</div>
                <p className="text-slate-600 text-[11px] leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

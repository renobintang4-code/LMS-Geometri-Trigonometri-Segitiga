import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, Save, UserCheck } from 'lucide-react';
import { RefleksiData } from '../types';

interface RefleksiViewProps {
  refleksiData: RefleksiData;
  setRefleksiData: React.Dispatch<React.SetStateAction<RefleksiData>>;
  onComplete: () => void;
}

export const RefleksiView: React.FC<RefleksiViewProps> = ({
  refleksiData,
  setRefleksiData,
  onComplete,
}) => {
  const [saved, setSaved] = useState(false);

  const handleChange = (f: keyof RefleksiData, v: string) => {
    setRefleksiData(prev => ({ ...prev, [f]: v }));
  };

  const handleSave = () => {
    setSaved(true);
    onComplete();
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm text-xs sm:text-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 font-mono mb-2">
          <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Refleksi Mandiri Peserta Didik</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
          Refleksi Pembelajaran Siswa
        </h2>
        <p className="text-xs text-slate-500 mb-6 leading-relaxed">
          Ungkapkan pemahaman mandiri, pengalaman belajar kelompok, dan tantangan materi trigonometri hari ini.
        </p>

        <div className="space-y-5">
          <div>
            <label className="font-bold text-slate-900 block mb-1.5">
              1. Satu konsep baru paling berharga yang saya pahami hari ini:
            </label>
            <textarea
              rows={2}
              value={refleksiData.q1 || ""}
              onChange={e => handleChange("q1", e.target.value)}
              placeholder="Contoh: Mengapa rumus luas segitiga dapat diturunkan dari rasio t = b sin C..."
              className="w-full border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs"
            />
          </div>

          <div>
            <label className="font-bold text-slate-900 block mb-1.5">
              2. Bagian mana yang masih terasa paling menantang bagi saya?
            </label>
            <textarea
              rows={2}
              value={refleksiData.q2 || ""}
              onChange={e => handleChange("q2", e.target.value)}
              placeholder="Contoh: Menentukan dua kemungkinan sudut apit (lancip dan tumpul) saat luas diketahui..."
              className="w-full border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs"
            />
          </div>

          <div>
            <label className="font-bold text-slate-900 block mb-1.5">
              3. Mengapa luas segitiga selalu mencapai nilai maksimum pada sudut apit 90°?
            </label>
            <textarea
              rows={2}
              value={refleksiData.q3 || ""}
              onChange={e => handleChange("q3", e.target.value)}
              placeholder="Jelaskan berdasarkan nilai fungsi sinus..."
              className="w-full border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs"
            />
          </div>

          <div>
            <label className="font-bold text-slate-900 block mb-1.5">
              4. Tantangan Mandiri RPP (Buat 1 Soal Cerita Mandiri beserta Penyelesaiannya):
            </label>
            <textarea
              rows={4}
              value={refleksiData.q4 || ""}
              onChange={e => handleChange("q4", e.target.value)}
              placeholder="Tuliskan 1 soal cerita luas segitiga trigonometri buatanmu beserta langkah penyelesaiannya..."
              className="w-full border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-xs"
            />
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <div>
            {saved ? (
              <span className="font-bold text-emerald-600 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Isian refleksi berhasil disimpan!
              </span>
            ) : (
              <span className="text-slate-400">Refleksi ini akan dicantumkan pada portofolio belajar siswa.</span>
            )}
          </div>
          <button
            onClick={handleSave}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-2.5 rounded-xl transition shadow-md flex items-center gap-2"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Simpan Lembar Refleksi</span>
          </button>
        </div>
      </div>
    </div>
  );
};

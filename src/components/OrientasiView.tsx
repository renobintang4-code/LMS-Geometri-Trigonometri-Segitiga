import React from 'react';
import { ArrowRight, Globe2, Lightbulb, Map, Zap } from 'lucide-react';

interface OrientasiViewProps {
  setCurrentTab: (tab: string) => void;
}

export const OrientasiView: React.FC<OrientasiViewProps> = ({ setCurrentTab }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-fit mb-3">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>Orientasi Konseptual & Kurikulum Merdeka</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">Orientasi Pembelajaran & Peta Konsep</h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
          Memahami tujuan pembelajaran, keterkaitan autentik lintas disiplin (Geografi Pertanahan & Fisika Vektor), serta peta penurunan rumus trigonometri.
        </p>

        {/* Konteks Lintas Disiplin */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs">
            <div className="font-bold text-emerald-950 text-sm mb-2 flex items-center gap-2">
              <Map className="w-4 h-4 text-emerald-700" />
              <span>Kaitan Geografi: Pemetaan Luas Lahan (Kadaster BPN)</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Badan Pertanahan Nasional (BPN) dan surveyor mengukur bidang tanah tak beraturan di lapangan. Seringkali mustahil menarik garis tinggi tegak lurus menembus semak belukar, jurang, atau bangunan. Dengan instrumen <em>Theodolite</em>, surveyor cukup mengukur 2 batas sisi dan sudut apitnya untuk menentukan luas tanah dengan tingkat akurasi tinggi.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-sky-50/80 border border-sky-200 text-xs">
            <div className="font-bold text-sky-950 text-sm mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-sky-700" />
              <span>Kaitan Fisika: Perkalian Silang Vektor (Cross Product)</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Dalam mekanika analitik dan kalkulus vektor, besar luas jajar genjang yang direntangkan oleh dua vektor dinyatakan dengan |A × B| = |A| |B| sin θ. Luas segitiga merupakan persis setengah dari perkalian silang tersebut: L = ½ AB sin θ.
            </p>
          </div>
        </div>

        {/* Visualisasi Peta Konsep */}
        <div className="bg-slate-950 text-white rounded-2xl p-6 font-mono text-xs overflow-x-auto custom-scrollbar">
          <div className="min-w-[620px] space-y-4">
            <div className="bg-slate-900 border border-slate-700 p-3.5 rounded-xl text-center text-emerald-400 font-bold text-sm shadow">
              Rumus Dasar Geometri: Luas = ½ × alas × tinggi (L = ½ · a · t)
            </div>
            <div className="text-center text-slate-500 font-sans text-xs">
              ↓ Kendala praktis: Garis tinggi t seringkali tidak diketahui dan sulit diukur langsung
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <span className="text-sky-400 font-bold text-sm block mb-1">Trigonometri Segitiga Siku-Siku:</span>
                <span className="text-slate-300">sin C = t / b  ⟹  </span>
                <span className="text-sky-300 font-bold">t = b · sin C</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <span className="text-amber-400 font-bold text-sm block mb-1">Identitas Sudut Suplementer Kuadran II:</span>
                <span className="text-slate-300">sin(180° − C) = </span>
                <span className="text-amber-300 font-bold">sin C</span>
              </div>
            </div>
            <div className="text-center text-slate-500 font-sans text-xs">
              ↓ Substitusi nilai tinggi t ke dalam rumus luas dasar
            </div>
            <div className="bg-emerald-950 border border-emerald-500 p-4 rounded-xl text-center font-bold text-emerald-300 text-sm shadow-lg">
              L = ½ · a · b · sin C = ½ · b · c · sin A = ½ · a · c · sin B
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
          <button 
            onClick={() => setCurrentTab("diagnostik")} 
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition shadow-md">
            <span>Mulai Tes Diagnostik Prasyarat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

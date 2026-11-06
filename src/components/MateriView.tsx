import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Info, Sparkles } from 'lucide-react';

interface MateriViewProps {
  onComplete: () => void;
  setCurrentTab: (tab: string) => void;
}

export const MateriView: React.FC<MateriViewProps> = ({ onComplete, setCurrentTab }) => {
  const [modulIdx, setModulIdx] = useState(1);

  const navList = [
    { id: 1, title: "1. Konsep Dasar Luas Segitiga", desc: "Definisi luas alas dan syarat tegak lurus" },
    { id: 2, title: "2. Trigonometri & Sudut Istimewa", desc: "Rasio perbandingan sinus dan relasi Kuadran II" },
    { id: 3, title: "3. Penurunan Rumus Garis Tinggi", desc: "Substitusi t = b sin C untuk sudut lancip & tumpul" },
    { id: 4, title: "4. Karakteristik Sudut Apit", desc: "Syarat mutlak sudut yang berada di antara dua sisi" },
    { id: 5, title: "5. Pengaruh Sudut terhadap Luas", desc: "Pola luas maksimum di 90° dan simetri sinus" },
    { id: 6, title: "6. Menentukan Sudut dari Luas", desc: "Penyelesaian persamaan sin C dan dua kemungkinan sudut" },
    { id: 7, title: "7. Aplikasi Kontekstual & Segi-n", desc: "Segi enam beraturan dan kalkulasi luas lahan" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Sidebar Daftar Modul */}
      <div className="lg:col-span-4 space-y-2">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm sticky top-24">
          <div className="flex items-center gap-2 mb-3 px-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">7 Modul Konseptual RPP</h3>
          </div>
          <div className="space-y-1.5">
            {navList.map((item) => (
              <button
                key={item.id}
                onClick={() => setModulIdx(item.id)}
                className={`w-full text-left p-3 rounded-xl text-xs transition border flex items-start gap-2.5 ${
                  modulIdx === item.id 
                    ? 'bg-emerald-600 text-white font-bold border-emerald-600 shadow-md' 
                    : 'bg-white text-slate-700 border-transparent hover:bg-slate-50 hover:border-slate-200'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5 ${
                  modulIdx === item.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {item.id}
                </span>
                <div>
                  <div className="font-bold leading-snug">{item.title}</div>
                  <div className={`text-[11px] mt-0.5 line-clamp-1 ${modulIdx === item.id ? 'text-emerald-100' : 'text-slate-500'}`}>
                    {item.desc}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Konten Modul Utama */}
      <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
        <div className="space-y-5">
          {modulIdx === 1 && (
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold">
                <span>MODUL 1 DARI 7</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Konsep Dasar Luas Segitiga</h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Luas daerah segitiga merepresentasikan ukuran bidang 2 dimensi yang dibatasi oleh ketiga sisinya. Sejak jenjang pendidikan dasar, rumus baku yang selalu digunakan adalah:
              </p>
              <div className="py-2">
                <div className="math-formula-box">
                  L = ½ × alas × tinggi = ½ · a · t
                </div>
              </div>
              <div className="bg-slate-50 border-l-4 border-emerald-500 p-4 rounded-r-xl text-xs text-slate-700 space-y-2">
                <p>
                  <strong>Syarat Mutlak:</strong> Garis tinggi (t) haruslah ruas garis tegak lurus (90°) dari titik sudut di seberang ke sisi alas atau perpanjangannya.
                </p>
                <p>
                  <strong>Kendala Lapangan Nyata:</strong> Dalam situasi survei tanah, arsitektur, dan pelayaran, menarik garis tinggi secara fisik di tengah medan terjal sangat sulit atau bahkan tidak memungkinkan.
                </p>
              </div>
            </div>
          )}

          {modulIdx === 2 && (
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold">
                <span>MODUL 2 DARI 7</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Trigonometri Siku-Siku & Sudut Berelasi</h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Trigonometri menghubungkan ukuran sudut dengan rasio panjang sisi segitiga siku-siku. Perbandingan nilai sinus didefinisikan sebagai:
              </p>
              <div className="py-2">
                <div className="math-formula-box">
                  sin θ = sisi depan / sisi miring (de / mi)
                </div>
              </div>

              <h3 className="font-bold text-slate-900 text-xs mt-3">Tabel Nilai Sinus Sudut Istimewa:</h3>
              <div className="overflow-x-auto text-xs font-mono">
                <table className="w-full border-collapse border border-slate-200">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="border border-slate-200 p-2 font-sans">Sudut θ</th>
                      <th className="border border-slate-200 p-2">30°</th>
                      <th className="border border-slate-200 p-2">45°</th>
                      <th className="border border-slate-200 p-2">60°</th>
                      <th className="border border-slate-200 p-2 text-emerald-700 font-bold bg-emerald-50">90°</th>
                      <th className="border border-slate-200 p-2">120°</th>
                      <th className="border border-slate-200 p-2">135°</th>
                      <th className="border border-slate-200 p-2">150°</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-2 font-bold font-sans">sin θ</td>
                      <td className="border border-slate-200 p-2">½</td>
                      <td className="border border-slate-200 p-2">½√2</td>
                      <td className="border border-slate-200 p-2">½√3</td>
                      <td className="border border-slate-200 p-2 text-emerald-600 font-bold bg-emerald-50">1</td>
                      <td className="border border-slate-200 p-2">½√3</td>
                      <td className="border border-slate-200 p-2">½√2</td>
                      <td className="border border-slate-200 p-2">½</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-sky-50 border border-sky-200 p-4 rounded-xl text-xs text-sky-950 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Identitas Kuadran II:</strong> sin(180° − α) = sin α. Hal ini membuktikan bahwa sin 120° = sin 60° = ½√3 dan sin 150° = sin 30° = ½.
                </div>
              </div>
            </div>
          )}

          {modulIdx === 3 && (
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold">
                <span>MODUL 3 DARI 7</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Penurunan Rumus Luas Melalui Garis Tinggi</h2>
              
              <div className="bg-slate-950 text-slate-100 p-5 rounded-2xl space-y-3 font-mono text-xs leading-relaxed">
                <div>
                  <span className="text-emerald-400 font-bold">// 1. Tinjau Segitiga Sembarang ABC</span>
                  <p className="text-slate-300">Misal panjang sisi BC = a, AC = b, dan sudut apit ∠C diketahui.</p>
                </div>
                <div>
                  <span className="text-emerald-400 font-bold">// 2. Tarik Garis Tinggi t dari Titik A ke Sisi BC</span>
                  <p className="text-slate-300">Terbentuk segitiga siku-siku dengan hipotenusa b. Rasio sinus:</p>
                  <p className="text-sky-300 font-bold pl-3">sin C = t / b  ⟹  t = b · sin C</p>
                </div>
                <div>
                  <span className="text-emerald-400 font-bold">// 3. Substitusikan t ke Rumus Dasar Geometri</span>
                  <p className="text-slate-300">L = ½ × alas × tinggi = ½ · a · (b · sin C)</p>
                  <p className="text-emerald-300 font-bold text-sm pl-3">L = ½ ab sin C</p>
                </div>
                <div>
                  <span className="text-amber-400 font-bold">// 4. Kasus Sudut Tumpul (C &gt; 90°)</span>
                  <p className="text-slate-300">Garis tinggi jatuh di luar segitiga pada perpanjangan alas. Sudut bantu luar adalah (180° − C). Karena sin(180° − C) = sin C, maka rumus tetap berlaku persis sama!</p>
                </div>
              </div>

              <div className="py-2">
                <div className="math-formula-box">
                  L = ½ ab sin C = ½ bc sin A = ½ ac sin B
                </div>
              </div>
            </div>
          )}

          {modulIdx === 4 && (
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold">
                <span>MODUL 4 DARI 7</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Karakteristik Mutlak Sudut Apit</h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Rumus trigonometri segitiga <strong>hanya valid</strong> apabila sudut yang digunakan adalah sudut yang diapit oleh kedua sisi yang diketahui.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="font-bold text-emerald-950 text-sm">Sisi a dan b</div>
                  <p className="text-slate-600 mt-1">Mengapit sudut C</p>
                  <div className="font-mono font-bold text-emerald-700 mt-2">L = ½ ab sin C</div>
                </div>
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="font-bold text-emerald-950 text-sm">Sisi b dan c</div>
                  <p className="text-slate-600 mt-1">Mengapit sudut A</p>
                  <div className="font-mono font-bold text-emerald-700 mt-2">L = ½ bc sin A</div>
                </div>
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="font-bold text-emerald-950 text-sm">Sisi a dan c</div>
                  <p className="text-slate-600 mt-1">Mengapit sudut B</p>
                  <div className="font-mono font-bold text-emerald-700 mt-2">L = ½ ac sin B</div>
                </div>
              </div>

              <div className="p-4 bg-rose-50 border border-rose-200 text-rose-950 text-xs rounded-xl flex items-start gap-2.5">
                <Info className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Peringatan Miskonsepsi:</strong> Jika soal memberikan sisi AB dan AC, Anda tidak boleh menggunakan sinus sudut B atau sudut C secara langsung, melainkan harus menggunakan sudut A!
                </div>
              </div>
            </div>
          )}

          {modulIdx === 5 && (
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold">
                <span>MODUL 5 DARI 7</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Pengaruh Besar Sudut terhadap Luas Segitiga</h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Jika panjang kedua sisi pengapit dijaga tetap konstan, luas segitiga sepenuhnya bergantung pada nilai grafik fungsi sinus:
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong>1. Interval Sudut Lancip (0° &lt; θ &lt; 90°):</strong> Nilai sinus naik secara monotonik dari 0 menuju 1 ⟹ Luas daerah segitiga bertambah membesar.
                </div>
                <div className="p-3.5 bg-emerald-50 border border-emerald-300 rounded-xl font-bold text-emerald-950">
                  2. Puncak Maksimum (θ = 90°): Nilai sin 90° = 1 ⟹ Luas Maksimum = ½ ab (tercapai pada segitiga siku-siku).
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong>3. Interval Sudut Tumpul (90° &lt; θ &lt; 180°):</strong> Nilai sinus berbalik turun dari 1 menuju 0 ⟹ Luas daerah segitiga mengecil.
                </div>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl text-amber-950 text-xs">
                📌 <strong>Kesimpulan Krusial:</strong> Sudut yang lebih besar tidak selalu menghasilkan luas yang lebih besar! Contohnya luas segitiga dengan sudut 150° persis sama dengan luas pada sudut 30° karena sin 150° = sin 30° = ½.
              </div>
            </div>
          )}

          {modulIdx === 6 && (
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold">
                <span>MODUL 6 DARI 7</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Menentukan Besar Sudut dari Luas Diketahui</h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Jika luas segitiga (L) serta kedua sisi pengapitnya (a dan b) sudah diketahui, kita dapat menentukan nilai sinus sudut apitnya melalui manipulasi aljabar:
              </p>

              <div className="py-2">
                <div className="math-formula-box">
                  sin C = (2 · L) / (a · b)
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs space-y-2">
                <p className="font-bold text-slate-900 text-sm">Kemungkinan Dua Nilai Sudut (Sudut Suplementer):</p>
                <p className="text-slate-700 leading-relaxed">
                  Kecuali ketika sudutnya tepat 90° (sin C = 1), persamaan trigonometri ini selalu menghasilkan <strong>dua kemungkinan sudut</strong> yang sama-sama valid pada interval geometri 0° &lt; C &lt; 180°:
                </p>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-white p-3 rounded-lg border">
                    <span className="font-bold text-emerald-700">Sudut Lancip (Kuadran I):</span>
                    <p className="font-mono text-slate-800 mt-1">C₁ = arcsin(sin C)</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border">
                    <span className="font-bold text-amber-700">Sudut Tumpul (Kuadran II):</span>
                    <p className="font-mono text-slate-800 mt-1">C₂ = 180° − C₁</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {modulIdx === 7 && (
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold">
                <span>MODUL 7 DARI 7</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Aplikasi Kontekstual & Luas Segi-n Beraturan</h2>
              
              <div className="bg-slate-950 text-slate-100 p-5 rounded-2xl font-mono text-xs space-y-2.5 leading-relaxed">
                <p className="text-emerald-400 font-bold">// Luas Segi Enam Beraturan (Panjang Sisi = s):</p>
                <p className="text-slate-300">Segi enam beraturan terdiri atas 6 buah segitiga sama sisi kongruen dengan sudut pusat: 360° / 6 = 60°.</p>
                <p className="text-sky-300">Luas 1 Segitiga = ½ × s × s × sin 60° = ½ s² (½√3) = (s²√3) / 4</p>
                <p className="text-emerald-300 font-bold text-sm">Luas Total = 6 × [(s²√3)/4] = 3/2 · s²√3</p>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-slate-700">
                <strong>Contoh Nyata:</strong> Untuk ubin segi enam beraturan dengan panjang sisi 6 cm:
                <p className="font-mono mt-1 text-emerald-900 font-semibold">
                  Luas = 6 × (½ × 6 × 6 × sin 60°) = 54√3 cm² ≈ 93,53 cm².
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Stepper Footer Modul */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex justify-between items-center text-xs">
          <button
            disabled={modulIdx === 1}
            onClick={() => setModulIdx(modulIdx - 1)}
            className="px-4 py-2 border rounded-xl text-slate-700 disabled:opacity-40 flex items-center gap-1.5 hover:bg-slate-50 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Sebelumnya</span>
          </button>
          <span className="font-mono text-slate-500 font-semibold">Modul {modulIdx} dari 7</span>
          {modulIdx < 7 ? (
            <button
              onClick={() => setModulIdx(modulIdx + 1)}
              className="px-4 py-2 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition flex items-center gap-1.5 shadow"
            >
              <span>Selanjutnya</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={() => { onComplete(); setCurrentTab("lab"); }}
              className="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition flex items-center gap-1.5 shadow-md"
            >
              <span>Buka Laboratorium Segitiga</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

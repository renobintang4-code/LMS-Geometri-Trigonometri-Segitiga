import React from 'react';
import { Printer, X } from 'lucide-react';
import { LkpdData, RefleksiData } from '../types';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  sumatifScore: number | null;
  lkpdData: LkpdData;
  refleksiData: RefleksiData;
}

export const PrintModal: React.FC<PrintModalProps> = ({
  isOpen,
  onClose,
  studentName,
  sumatifScore,
  lkpdData,
  refleksiData,
}) => {
  if (!isOpen) return null;

  const printNow = () => {
    window.print();
  };

  const getGrade = (s: number | null) => {
    if (s === null) return { g: "Belum Mengikuti Ujian", s: "Belum Lengkap", c: "text-slate-500" };
    if (s >= 86) return { g: "Sangat Baik (A)", s: "Tuntas Mandiri & Melampaui KKTP", c: "text-emerald-700" };
    if (s >= 71) return { g: "Baik (B)", s: "Tuntas Mencapai KKTP", c: "text-sky-700" };
    if (s >= 51) return { g: "Cukup (C)", s: "Tuntas dengan Remedial Terarah", c: "text-amber-700" };
    return { g: "Kurang (D)", s: "Belum Tuntas (Perlu Bimbingan)", c: "text-rose-700" };
  };

  const kktp = getGrade(sumatifScore);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Tombol Aksi Layar (Disembunyikan Saat Print) */}
        <div className="flex justify-between items-center pb-4 mb-6 border-b border-slate-200 no-print">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-emerald-600" />
            <span className="font-bold text-slate-800 text-sm">Pratinjau Portofolio & Rapor Belajar Siswa</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={printNow}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition shadow flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Unduh PDF</span>
            </button>
            <button
              onClick={onClose}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs px-3 py-2 rounded-xl transition flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Tutup</span>
            </button>
          </div>
        </div>

        {/* AREA DOKUMEN TERCETAK (Sesuai Layout Dokumen RPP A4) */}
        <div id="print-area">
          {/* Kop Dokumen Resmi */}
          <div className="border-b-2 border-slate-900 pb-4 mb-6 text-center">
            <h2 className="text-lg font-black tracking-tight uppercase text-slate-950">
              Laporan Hasil Belajar Peserta Didik
            </h2>
            <h3 className="text-sm font-bold text-emerald-800 mt-0.5">
              TRIANGLE LAB — HUBUNGAN SUDUT DAN LUAS SEGITIGA DENGAN TRIGONOMETRI
            </h3>
            <p className="text-[11px] text-slate-600 mt-1">
              Kurikulum Merdeka • Sesuai RPP Fase E Kelas X (3 JP / 120 Menit Model Discovery Learning)
            </p>
          </div>

          {/* Data Identitas Siswa */}
          <div className="grid grid-cols-2 gap-4 text-xs mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="space-y-1">
              <div>
                <span className="text-slate-500">Nama Peserta Didik:</span>
                <span className="font-bold text-slate-900 ml-2">{studentName}</span>
              </div>
              <div>
                <span className="text-slate-500">Fase / Tingkat:</span>
                <span className="font-semibold text-slate-800 ml-2">Fase E / Kelas X SMA/MA</span>
              </div>
            </div>
            <div className="space-y-1">
              <div>
                <span className="text-slate-500">Mata Pelajaran:</span>
                <span className="font-bold text-slate-900 ml-2">Matematika (Geometri & Trigonometri)</span>
              </div>
              <div>
                <span className="text-slate-500">Kelompok Belajar:</span>
                <span className="font-semibold text-slate-800 ml-2">{lkpdData.kelompok || "Mandiri / Reguler"}</span>
              </div>
            </div>
          </div>

          {/* Capaian Asesmen Sumatif RPP */}
          <div className="mb-6 text-xs">
            <h4 className="font-bold text-slate-900 uppercase tracking-wide mb-2.5">
              I. Capaian Asesmen Sumatif RPP (5 Butir Soal Terstandar)
            </h4>
            <div className="grid grid-cols-3 gap-3 border border-slate-200 rounded-xl p-4 text-center bg-white shadow-sm">
              <div className="border-r border-slate-200 pr-2">
                <div className="text-slate-500 text-[11px]">Skor Evaluasi</div>
                <div className="text-2xl font-black text-slate-900 font-mono mt-1">
                  {sumatifScore !== null ? `${sumatifScore} / 100` : "—"}
                </div>
              </div>
              <div className="border-r border-slate-200 pr-2">
                <div className="text-slate-500 text-[11px]">Predikat Capaian</div>
                <div className={`font-bold mt-2 text-sm ${kktp.c}`}>{kktp.g}</div>
              </div>
              <div>
                <div className="text-slate-500 text-[11px]">Status Ketercapaian (KKTP)</div>
                <div className="font-semibold text-slate-800 mt-2 text-xs">{kktp.s}</div>
              </div>
            </div>
          </div>

          {/* Rangkuman Penemuan LKPD Siswa */}
          <div className="mb-6 text-xs">
            <h4 className="font-bold text-slate-900 uppercase tracking-wide mb-2.5">
              II. Portofolio Penemuan Konsep (LKPD Digital Kelompok)
            </h4>
            <div className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50/60">
              <div>
                <strong className="text-slate-900 block mb-1">
                  1. Temuan Kegiatan 1 (Penurunan Rumus Garis Tinggi):
                </strong>
                <p className="text-slate-700 leading-relaxed">
                  {lkpdData.k1_kesimpulan || "Peserta didik telah memverifikasi kesetaraan rasio t/b = sin C pada segitiga siku-siku, membuktikan garis tinggi t = b sin C dan menghasilkan rumus umum luas L = ½ ab sin C."}
                </p>
              </div>
              <div>
                <strong className="text-slate-900 block mb-1">
                  2. Temuan Kegiatan 2 (Pengaruh Besar Sudut terhadap Luas):
                </strong>
                <p className="text-slate-700 leading-relaxed">
                  {lkpdData.k2_kesimpulan || "Luas segitiga mencapai nilai maksimum pada sudut apit 90° (L = ½ab). Sudut-sudut yang saling suplementer (α dan 180° − α) memiliki nilai luas yang sama persis."}
                </p>
              </div>
            </div>
          </div>

          {/* Refleksi Pembelajaran */}
          {refleksiData.q1 && (
            <div className="mb-6 text-xs">
              <h4 className="font-bold text-slate-900 uppercase tracking-wide mb-2">
                III. Refleksi Pembelajaran Siswa
              </h4>
              <div className="border border-slate-200 rounded-xl p-3 bg-slate-50/40 text-slate-700 leading-relaxed">
                "{refleksiData.q1}"
              </div>
            </div>
          )}

          {/* Tanda Tangan Resmi Pengesahan */}
          <div className="grid grid-cols-2 pt-8 text-xs text-center border-t border-slate-300 mt-8">
            <div>
              <p className="text-slate-500">Mengetahui & Memvalidasi,</p>
              <p className="font-semibold text-slate-800 mt-1">Guru Mata Pelajaran Matematika</p>
              <div className="h-16"></div>
              <p className="font-bold text-slate-900 underline">( Nama Guru )</p>
              <p className="text-[10px] text-slate-500 mt-0.5">NIP. ........................................</p>
            </div>
            <div>
              <p className="text-slate-500">Yogyakarta, 5 November 2026</p>
              <p className="font-semibold text-slate-800 mt-1">Peserta Didik Bersangkutan,</p>
              <div className="h-16"></div>
              <p className="font-bold text-slate-900 underline">( {studentName} )</p>
              <p className="text-[10px] text-slate-500 mt-0.5">NISN / ID: Siswa Mandiri Fase E</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { DashboardView } from './components/DashboardView';
import { OrientasiView } from './components/OrientasiView';
import { DiagnostikView } from './components/DiagnostikView';
import { MateriView } from './components/MateriView';
import { TriangleLabView } from './components/TriangleLabView';
import { DiscoveryView } from './components/DiscoveryView';
import { LkpdView } from './components/LkpdView';
import { LatihanView } from './components/LatihanView';
import { SumatifView } from './components/SumatifView';
import { StemView } from './components/StemView';
import { RefleksiView } from './components/RefleksiView';
import { GuruPanel } from './components/GuruPanel';
import { PrintModal } from './components/PrintModal';
import { APP_META } from './data/learningData';
import { LkpdData, RefleksiData } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("dashboard");
  const [studentName, setStudentName] = useState<string>(() => {
    return localStorage.getItem("triangle_name") || "Peserta Didik";
  });
  const [mode, setMode] = useState<'learning' | 'classroom'>("learning");
  const [timer, setTimer] = useState<number>(7200); // 120 menit (3 JP)
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [teacherMode, setTeacherMode] = useState<boolean>(false);
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);

  // Status Penyelesaian Tab Lokal
  const [completedTabs, setCompletedTabs] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("triangle_tabs") || "[]");
    } catch {
      return [];
    }
  });

  // Skor Asesmen Sumatif RPP
  const [sumatifScore, setSumatifScore] = useState<number | null>(() => {
    const s = localStorage.getItem("triangle_sumatif");
    return s !== null ? parseInt(s, 10) : null;
  });

  // Isian LKPD Digital
  const [lkpdData, setLkpdData] = useState<LkpdData>(() => {
    try {
      return JSON.parse(localStorage.getItem("triangle_lkpd") || "{}");
    } catch {
      return {};
    }
  });

  // Isian Refleksi Siswa
  const [refleksiData, setRefleksiData] = useState<RefleksiData>(() => {
    try {
      return JSON.parse(localStorage.getItem("triangle_refleksi") || "{}");
    } catch {
      return {};
    }
  });

  // Sinkronisasi ke LocalStorage
  useEffect(() => {
    localStorage.setItem("triangle_name", studentName);
  }, [studentName]);

  useEffect(() => {
    localStorage.setItem("triangle_tabs", JSON.stringify(completedTabs));
  }, [completedTabs]);

  useEffect(() => {
    localStorage.setItem("triangle_lkpd", JSON.stringify(lkpdData));
  }, [lkpdData]);

  useEffect(() => {
    localStorage.setItem("triangle_refleksi", JSON.stringify(refleksiData));
  }, [refleksiData]);

  // Timer Classroom Mode
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(t => t - 1);
      }, 1000);
    } else if (timer <= 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const markComplete = (tabKey: string) => {
    if (!completedTabs.includes(tabKey)) {
      setCompletedTabs(prev => [...prev, tabKey]);
    }
  };

  const resetData = () => {
    if (window.confirm("Apakah Anda yakin ingin mereset seluruh progres pembelajaran lokal, jawaban LKPD, dan skor asesmen?")) {
      localStorage.clear();
      setStudentName("Peserta Didik");
      setCompletedTabs([]);
      setSumatifScore(null);
      setLkpdData({});
      setRefleksiData({});
      setTimer(7200);
      setIsTimerRunning(false);
      setCurrentTab("dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Header Utama Navigasi */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        markComplete={markComplete}
        mode={mode}
        setMode={setMode}
        timer={timer}
        isTimerRunning={isTimerRunning}
        setIsTimerRunning={setIsTimerRunning}
        teacherMode={teacherMode}
        setTeacherMode={setTeacherMode}
        setIsReportOpen={setIsReportOpen}
      />

      {/* Konten Tab Aktif */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {currentTab === "dashboard" && (
          <DashboardView
            studentName={studentName}
            setStudentName={setStudentName}
            setCurrentTab={setCurrentTab}
            completedTabs={completedTabs}
            sumatifScore={sumatifScore}
            resetData={resetData}
            setIsReportOpen={setIsReportOpen}
          />
        )}

        {currentTab === "orientasi" && (
          <OrientasiView setCurrentTab={setCurrentTab} />
        )}

        {currentTab === "diagnostik" && (
          <DiagnostikView
            onComplete={() => markComplete("diagnostik")}
            setCurrentTab={setCurrentTab}
          />
        )}

        {currentTab === "materi" && (
          <MateriView
            onComplete={() => markComplete("materi")}
            setCurrentTab={setCurrentTab}
          />
        )}

        {currentTab === "lab" && (
          <TriangleLabView onComplete={() => markComplete("lab")} />
        )}

        {currentTab === "discovery" && (
          <DiscoveryView
            setCurrentTab={setCurrentTab}
            onComplete={() => markComplete("discovery")}
          />
        )}

        {currentTab === "lkpd" && (
          <LkpdView
            lkpdData={lkpdData}
            setLkpdData={setLkpdData}
            teacherMode={teacherMode}
            onComplete={() => markComplete("lkpd")}
          />
        )}

        {currentTab === "latihan" && (
          <LatihanView onComplete={() => markComplete("latihan")} />
        )}

        {currentTab === "sumatif" && (
          <SumatifView
            sumatifScore={sumatifScore}
            setSumatifScore={setSumatifScore}
            onComplete={() => markComplete("sumatif")}
          />
        )}

        {currentTab === "stem" && (
          <StemView onComplete={() => markComplete("stem")} />
        )}

        {currentTab === "refleksi" && (
          <RefleksiView
            refleksiData={refleksiData}
            setRefleksiData={setRefleksiData}
            onComplete={() => markComplete("refleksi")}
          />
        )}

        {currentTab === "guru" && (
          <GuruPanel
            teacherMode={teacherMode}
            setTeacherMode={setTeacherMode}
            sumatifScore={sumatifScore}
            studentName={studentName}
          />
        )}
      </main>

      {/* Modal Rapor Cetak PDF */}
      <PrintModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        studentName={studentName}
        sumatifScore={sumatifScore}
        lkpdData={lkpdData}
        refleksiData={refleksiData}
      />

      {/* Footer Aplikasi */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-6 mt-12 no-print">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <div>
            <p className="font-semibold text-slate-200">
              {APP_META.name} • {APP_META.tagline}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              RPP Luas Segitiga Trigonometri Fase E SMA/MA • Model Discovery Learning 120 Menit
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button onClick={resetData} className="text-rose-400 hover:text-rose-300 hover:underline transition">
              Reset Data Belajar
            </button>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Kurikulum Merdeka</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

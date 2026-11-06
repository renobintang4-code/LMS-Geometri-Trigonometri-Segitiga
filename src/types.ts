export interface LearningObjective {
  id: string;
  code: string;
  title: string;
  desc: string;
}

export interface DiagnosticQuestion {
  id: number;
  q: string;
  opts: string[];
  c: number;
  exp: string;
  fix: string;
}

export interface SummativeQuestion {
  id: number;
  q: string;
  opts: string[];
  c: number;
  tp: string;
  exp: string;
}

export interface PracticeQuestion {
  lvl: 'Dasar' | 'Menengah' | 'HOTS';
  q: string;
  ans: string;
  step: string;
}

export interface LkpdData {
  kelompok?: string;
  anggota?: string;
  k1_30_t?: string;
  k1_30_L?: string;
  k1_30_tb?: string;
  k1_60_t?: string;
  k1_60_L?: string;
  k1_60_tb?: string;
  k1_120_t?: string;
  k1_120_L?: string;
  k1_120_tb?: string;
  k1_kesimpulan?: string;
  k2_30?: string;
  k2_45?: string;
  k2_60?: string;
  k2_90?: string;
  k2_120?: string;
  k2_150?: string;
  k2_kesimpulan?: string;
  k3_1?: string;
  k3_2?: string;
  k3_3?: string;
}

export interface RefleksiData {
  q1?: string;
  q2?: string;
  q3?: string;
  q4?: string;
}

export interface AttitudeScores {
  jujur: number;
  disiplin: number;
  tanggungJawab: number;
  santun: number;
  percayaDiri: number;
}

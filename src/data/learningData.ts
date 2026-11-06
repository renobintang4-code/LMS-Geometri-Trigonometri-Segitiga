import { DiagnosticQuestion, LearningObjective, PracticeQuestion, SummativeQuestion } from '../types';

export const APP_META = {
  name: "TRIANGLE LAB",
  tagline: "Explore the Angle, Discover the Area",
  fase: "Fase E (Kelas X SMA/MA)",
  topik: "Hubungan Sudut dan Luas Segitiga dengan Trigonometri",
  alokasi: "3 JP × 40 menit (120 Menit)"
};

export const TP_LIST: LearningObjective[] = [
  { 
    id: "TP1", 
    code: "TP 1", 
    title: "Menentukan Luas Segitiga", 
    desc: "Menentukan luas segitiga menggunakan panjang dua sisi dan sinus sudut apit (L = ½ ab sin C)." 
  },
  { 
    id: "TP2", 
    code: "TP 2", 
    title: "Menganalisis Pengaruh Sudut", 
    desc: "Menganalisis pengaruh besar sudut apit terhadap luas (luas maksimum pada 90° & sifat sin α = sin(180° − α))." 
  },
  { 
    id: "TP3", 
    code: "TP 3", 
    title: "Memecahkan Masalah Geometri", 
    desc: "Menyelesaikan masalah kontekstual: pemetaan luas lahan, ubin segienam beraturan, dan mencari sudut apit." 
  }
];

export const DIAGNOSTIC_DB: DiagnosticQuestion[] = [
  {
    id: 1,
    q: "Pada segitiga siku-siku ABC (siku-siku di B), ∠A = 30° dan panjang hipotenusa AC = 10 cm. Berapakah panjang sisi BC?",
    opts: ["3 cm", "5 cm", "5√3 cm", "8 cm"],
    c: 1,
    exp: "sin A = depan / miring = BC / AC ⟹ sin 30° = BC / 10 ⟹ ½ = BC / 10 ⟹ BC = 5 cm.",
    fix: "Ingat kembali perbandingan dasar trigonometri sinus: sin θ = depan / miring."
  },
  {
    id: 2,
    q: "Berapakah berturut-turut nilai dari sin 30°, sin 60°, dan sin 90°?",
    opts: ["½, ½√2, 1", "½, ½√3, 1", "½√3, ½, 0", "0, ½, √3"],
    c: 1,
    exp: "Nilai sinus sudut istimewa kuadran I: sin 30° = ½, sin 60° = ½√3, dan sin 90° = 1.",
    fix: "Pelajari kembali tabel trigonometri sudut istimewa di Kuadran I."
  },
  {
    id: 3,
    q: "Dengan menggunakan identitas sudut berelasi sin(180° − α) = sin α, tentukan nilai sin 120° dan sin 150°!",
    opts: [
      "sin 120° = ½√3 dan sin 150° = ½",
      "sin 120° = -½√3 dan sin 150° = -½",
      "sin 120° = ½ dan sin 150° = ½√3",
      "sin 120° = 1 dan sin 150° = 0"
    ],
    c: 0,
    exp: "sin 120° = sin(180° − 60°) = sin 60° = ½√3. sin 150° = sin(180° − 30°) = sin 30° = ½. Di Kuadran II nilai sinus tetap bernilai positif.",
    fix: "Pahami bahwa di Kuadran II (sudut tumpul 90°–180°), nilai perbandingan sinus selalu positif."
  },
  {
    id: 4,
    q: "Sebuah segitiga memiliki panjang alas 10 cm dan tinggi 6 cm. Luas segitiga tersebut adalah ....",
    opts: ["16 cm²", "30 cm²", "60 cm²", "15 cm²"],
    c: 1,
    exp: "Rumus luas dasar segitiga: L = ½ × alas × tinggi = ½ × 10 × 6 = 30 cm².",
    fix: "Ingat rumus klasik luas segitiga: L = ½ · a · t."
  }
];

export const SUMMATIVE_DB: SummativeQuestion[] = [
  {
    id: 1,
    q: "Pada segitiga ABC, AB = 8 cm, AC = 6 cm, dan ∠A = 30°. Luas segitiga ABC adalah ....",
    opts: ["6 cm²", "12 cm²", "12√3 cm²", "24 cm²", "24√3 cm²"],
    c: 1,
    tp: "TP 1",
    exp: "Kedua sisi AB dan AC mengapit sudut A. L = ½ × AB × AC × sin A = ½ × 8 × 6 × sin 30° = 24 × ½ = 12 cm²."
  },
  {
    id: 2,
    q: "Pada segitiga PQR, PQ = 10 cm, PR = 12 cm, dan luasnya 30√3 cm². Jika ∠P merupakan sudut lancip, besar ∠P adalah ....",
    opts: ["30°", "45°", "60°", "90°", "120°"],
    c: 2,
    tp: "TP 1 & TP 3",
    exp: "L = ½ × PQ × PR × sin P ⟹ 30√3 = ½ × 10 × 12 × sin P ⟹ 30√3 = 60 sin P ⟹ sin P = √3/2. Karena ∠P lancip (<90°), maka ∠P = 60°."
  },
  {
    id: 3,
    q: "Dua sisi sebuah segitiga panjangnya 6 cm dan 10 cm, sedangkan sudut apitnya berubah-ubah antara 0° dan 180°. Pernyataan yang paling benar adalah ....",
    opts: [
      "Luas segitiga terus bertambah ketika sudut apit membesar dari 0° ke 180°",
      "Luas maksimum 30 cm² tercapai ketika sudut apit 90°",
      "Luas segitiga saat sudut apit 30° sama dengan luas saat sudut apit 60°",
      "Luas segitiga saat sudut apit 60° sama dengan luas saat sudut apit 150°",
      "Luas maksimum 60 cm² tercapai ketika sudut apit 90°"
    ],
    c: 1,
    tp: "TP 2",
    exp: "L = ½ × 6 × 10 × sin θ = 30 sin θ. Nilai sin θ maksimum adalah 1 ketika θ = 90°. Maka luas maksimum adalah 30 × 1 = 30 cm²."
  },
  {
    id: 4,
    q: "Sebuah taman berbentuk segitiga memiliki dua sisi yang berbatasan dengan panjang 12 m dan 10 m, dan sudut apit 120°. Luas taman tersebut adalah ....",
    opts: ["15√3 m²", "30 m²", "30√3 m²", "60 m²", "60√3 m²"],
    c: 2,
    tp: "TP 3",
    exp: "L = ½ × 12 × 10 × sin 120° = 60 × sin(180° − 60°) = 60 × sin 60° = 60 × (½√3) = 30√3 m²."
  },
  {
    id: 5,
    q: "Sebuah ubin berbentuk segi enam beraturan dengan panjang sisi 4 cm. Luas ubin tersebut adalah ....",
    opts: ["8√3 cm²", "12√3 cm²", "24√3 cm²", "48 cm²", "48√3 cm²"],
    c: 2,
    tp: "TP 3",
    exp: "Segi enam beraturan terdiri dari 6 segitiga sama sisi kongruen dengan sisi 4 cm dan sudut pusat 360°/6 = 60°. Luas = 6 × (½ × 4 × 4 × sin 60°) = 6 × 4√3 = 24√3 cm²."
  }
];

export const PRACTICE_DB: PracticeQuestion[] = [
  {
    lvl: "Dasar",
    q: "Dua sisi segitiga masing-masing 9 cm dan 12 cm mengapit sudut 60°. Tentukan luasnya!",
    ans: "27√3 cm² (≈ 46,77 cm²)",
    step: "L = ½ × 9 × 12 × sin 60° = 54 × (½√3) = 27√3 cm²."
  },
  {
    lvl: "Dasar",
    q: "Segitiga memiliki dua sisi 8 cm dan 10 cm mengapit sudut tumpul 150°. Berapakah luasnya?",
    ans: "20 cm²",
    step: "L = ½ × 8 × 10 × sin 150° = 40 × sin(180° − 30°) = 40 × ½ = 20 cm²."
  },
  {
    lvl: "Menengah",
    q: "Dua sisi segitiga berukuran 5 cm dan 14 cm. Berapakah luas maksimum yang dapat dicapai segitiga tersebut?",
    ans: "35 cm² pada sudut apit 90°",
    step: "L_maks = ½ × 5 × 14 × sin 90° = 35 × 1 = 35 cm²."
  },
  {
    lvl: "Menengah",
    q: "Dua sisi segitiga adalah 12 cm dan 15 cm, dan luasnya 45√3 cm². Tentukan semua kemungkinan sudut apitnya!",
    ans: "60° atau 120°",
    step: "45√3 = ½ × 12 × 15 × sin C ⟹ 45√3 = 90 sin C ⟹ sin C = √3/2. Sudut dalam yang memenuhi adalah 60° (lancip) atau 180° − 60° = 120° (tumpul)."
  },
  {
    lvl: "HOTS",
    q: "Seorang siswa berpendapat: 'Segitiga dengan sudut apit 120° pasti memiliki luas 2 kali lebih besar dari sudut apit 60° karena 120° = 2 × 60°.' Evaluasi kebenaran argumen tersebut!",
    ans: "Argumen keliru (Miskonsepsi fungsi non-linear)",
    step: "Luas segitiga berbanding lurus dengan sin θ, bukan dengan θ itu sendiri. Karena sin 120° = sin(180° − 60°) = sin 60° = √3/2, luas kedua segitiga bersisi sama justru sama persis!"
  },
  {
    lvl: "HOTS",
    q: "Dua sisi pembatas pekarangan 7 m dan 9 m membentuk sudut siku-siku 90°. Mengapa sudut 90° memberikan luas paling optimal bagi pekarangan tersebut?",
    ans: "31,5 m² (Luas Maksimum Geometris)",
    step: "L = ½ × 7 × 9 × sin 90° = 31,5 m². Pada sudut 90°, garis tinggi tegak lurus berimpit langsung dengan sisi 9 m (tinggi tegak lurus mencapai nilai maksimum setara panjang sisi miring)."
  }
];

export const degToRad = (deg: number): number => (deg * Math.PI) / 180;
export const round2 = (num: number): number => Math.round((num + Number.EPSILON) * 100) / 100;

// CREATOR : KyyStore
// TQTO? DI COMMAND TQTO
//TNGXAJA[Nhe], ORANG TUA, ALLAH, PENYEDIA REST API, PENYEDIA BASE AWAL


//===================[ TEMPAT MODULE ]=====================\\
require("./config")
require("./tampilanmenu")
const
{
  downloadContentFromMessage,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  InteractiveMessage,
  getContentType
} = require("@adiwajshing/baileys")
const fs = require('fs');
const path = require('path');
global.c = '`'
const pickRandom = (arr) =>
{
  return arr[Math.floor(Math.random() * arr.length)];
};
const simbol = ["⤷"];
let simbols = `${pickRandom(["⤷"])}`;

global.rankLevels = [
    { rank: "Recruit", minLevel: 0, expTarget: 10 },
    { rank: "Private", minLevel: 1, expTarget: 20 },
    { rank: "Private First Class", minLevel: 2, expTarget: 30 },
    { rank: "Corporal", minLevel: 3, expTarget: 40 },
    { rank: "Sergeant", minLevel: 4, expTarget: 50 },
    { rank: "Staff Sergeant", minLevel: 5, expTarget: 60 },
    { rank: "Sergeant First Class", minLevel: 6, expTarget: 70 },
    { rank: "Master Sergeant", minLevel: 7, expTarget: 80 },
    { rank: "Second Lieutenant", minLevel: 8, expTarget: 90 },
    { rank: "First Lieutenant", minLevel: 9, expTarget: 100 },
    { rank: "Captain", minLevel: 10, expTarget: 110 },
    { rank: "Major", minLevel: 15, expTarget: 120 },
    { rank: "Lieutenant Colonel", minLevel: 20, expTarget: 130 },
    { rank: "Colonel", minLevel: 25, expTarget: 140 },
    { rank: "Brigadier General", minLevel: 30, expTarget: 150 },
    { rank: "Major General", minLevel: 35, expTarget: 160 },
    { rank: "Lieutenant General", minLevel: 40, expTarget: 180 },
    { rank: "General", minLevel: 45, expTarget: 195 },
    { rank: "Field Marshal", minLevel: 50, expTarget: 220 },
    { rank: "Supreme Commander", minLevel: 55, expTarget: 240 },
    { rank: "Warlord", minLevel: 60, expTarget: 265 },
    { rank: "Elite Soldier", minLevel: 65, expTarget: 285 },
    { rank: "Shadow Commander", minLevel: 70, expTarget: 305 },
    { rank: "Divine Warrior", minLevel: 75, expTarget: 325 },
    { rank: "Celestial Guardian", minLevel: 80, expTarget: 350 },
    { rank: "Supreme Warlord", minLevel: 85, expTarget: 375 },
    { rank: "Infinity Sentinel", minLevel: 90, expTarget: 400 },
    { rank: "Void Ruler", minLevel: 95, expTarget: 430 },
    { rank: "God of War", minLevel: 100, expTarget: 460 },
    { rank: "Immortal Overlord", minLevel: 110, expTarget: 490 },
    { rank: "Celestial Emperor", minLevel: 120, expTarget: 520 },
    { rank: "Universal Guardian", minLevel: 130, expTarget: 550 },
    { rank: "Supreme Deity", minLevel: 140, expTarget: 580 },
    { rank: "God of Dimensions", minLevel: 150, expTarget: 620 }
];

function getRank(level) {
    return rankLevels.find(rank => level >= rank.minLevel)?.rank || "Recruit";
}
// 📌 Database Global untuk Paket Bot
global.paketBot = {
  basic:
  {
    nama: "SC V5 Basic",
    harga: "Rp 25K",
    deskripsi: `🛒 *25K*  
🧾 *FREE UPDATE V5-V7*  
🛠 _Perbedaan keuntungan:_  
- Setiap update terkena biaya tambahan *10K/update* dari V5-V7`
  },
  premium:
  {
    nama: "V5-V8 PREMIUM",
    harga: "Rp 45K",
    deskripsi: `🛒 *45K*  
🧾 *FREE UPDATE V5-V8*  
🛠 _Perbedaan keuntungan:_  
- *Free update fitur/versi V5-V8 tanpa biaya tambahan*  
- Jika membeli paket Basic (25K), akan dikenakan biaya *10K/update*  
- *Full Support Service untuk perbaikan dan request fitur*`
  },
  custom:
  {
    nama: "V5-V12 CUSTOM",
    harga: "Rp 65K",
    deskripsi: `🛒 *65K*  
🧾 *FREE UPDATE dari V5 Hingga V12 Tanpa biaya tambahan*  
🛠 _Keuntungan Premium:_  
✅ *MASUK GROUP PENGAJARAN/LES*  
   - 1️⃣ *UPDATE FITUR*  
   - 2️⃣ *CREATE BASE AWAL*  
   - 3️⃣ *BIKIN SC SENDIRI*  
   - 4️⃣ *FIX ERROR/BUG*  
   - 5️⃣ *Prioritas Utama Custom Service*
   *❕FREE UPDATE V3 SAMPAI V10* 
✅ *BISA DIJUAL LAGI* dengan harga sesuka hati  
✅ *Free APIKEY Premium setiap bulan*
✅ *Cukup Bayar Sekali seharga 65K Tanpa Biaya tambahan*`
  }
};
global.asmaulhusna2 = [
{
  index: 1,
  latin: "Ar-Rahman",
  arabic: "الرَّحْمَنُ",
  translation_id: "Yang Maha Pengasih",
  translation_en: "The Most Gracious"
},
{
  index: 2,
  latin: "Ar-Rahim",
  arabic: "الرَّحِيمُ",
  translation_id: "Yang Maha Penyayang",
  translation_en: "The Most Merciful"
},
{
  index: 3,
  latin: "Al-Malik",
  arabic: "الْمَلِكُ",
  translation_id: "Yang Maha Merajai",
  translation_en: "The King and Owner of Dominion"
},
{
  index: 4,
  latin: "Al-Quddus",
  arabic: "الْقُدُّوسُ",
  translation_id: "Yang Maha Suci",
  translation_en: "The Absolutely Pure"
},
{
  index: 5,
  latin: "As-Salam",
  arabic: "السَّلَامُ",
  translation_id: "Yang Maha Memberi Keselamatan",
  translation_en: "The Source of Peace and Safety"
},
{
  index: 6,
  latin: "Al-Mu'min",
  arabic: "الْمُؤْمِنُ",
  translation_id: "Yang Maha Memberi Keamanan",
  translation_en: "The Giver of Faith and Security"
},
{
  index: 7,
  latin: "Al-Muhaymin",
  arabic: "الْمُهَيْمِنُ",
  translation_id: "Yang Maha Memelihara",
  translation_en: "The Guardian, The Witness, The Overseer"
},
{
  index: 8,
  latin: "Al-Aziz",
  arabic: "الْعَزِيزُ",
  translation_id: "Yang Maha Perkasa",
  translation_en: "The Almighty"
},
{
  index: 9,
  latin: "Al-Jabbar",
  arabic: "الْجَبَّارُ",
  translation_id: "Yang Maha Memaksa",
  translation_en: "The Compeller, The Restorer"
},
{
  index: 10,
  latin: "Al-Mutakabbir",
  arabic: "الْمُتَكَبِّرُ",
  translation_id: "Yang Maha Megah",
  translation_en: "The Supreme, The Majestic"
},
{
  index: 11,
  latin: "Al-Khaliq",
  arabic: "الْخَالِقُ",
  translation_id: "Yang Maha Pencipta",
  translation_en: "The Creator, the Maker"
},
{
  index: 12,
  latin: "Al-Bari'",
  arabic: "الْبَارِئُ",
  translation_id: "Yang Maha Merencanakan",
  translation_en: "The Evolver"
},
{
  index: 13,
  latin: "Al-Musawwir",
  arabic: "الْمُصَوِّرُ",
  translation_id: "Yang Maha Membentuk Rupa",
  translation_en: "The Fashioner"
},
{
  index: 14,
  latin: "Al-Ghaffar",
  arabic: "الْغَفَّارُ",
  translation_id: "Yang Maha Pengampun",
  translation_en: "The Constant Forgiver"
},
{
  index: 15,
  latin: "Al-Qahhar",
  arabic: "الْقَهَّارُ",
  translation_id: "Yang Maha Menundukkan",
  translation_en: "The All-Subduer"
},
{
  index: 16,
  latin: "Al-Wahhab",
  arabic: "الْوَهَّابُ",
  translation_id: "Yang Maha Pemberi Karunia",
  translation_en: "The Supreme Bestower"
},
{
  index: 17,
  latin: "Ar-Razzaq",
  arabic: "الرَّزَّاقُ",
  translation_id: "Yang Maha Pemberi Rezeki",
  translation_en: "The Provider"
},
{
  index: 18,
  latin: "Al-Fattah",
  arabic: "الْفَتَّاحُ",
  translation_id: "Yang Maha Pembuka Rahmat",
  translation_en: "The Supreme Solver"
},
{
  index: 19,
  latin: "Al-Alim",
  arabic: "الْعَلِيمُ",
  translation_id: "Yang Maha Mengetahui",
  translation_en: "The All-Knowing"
},
{
  index: 20,
  latin: "Al-Qabid",
  arabic: "الْقَابِضُ",
  translation_id: "Yang Maha Menyempitkan",
  translation_en: "The Withholder"
},
{
  index: 21,
  latin: "Al-Basit",
  arabic: "الْبَاسِطُ",
  translation_id: "Yang Maha Melapangkan",
  translation_en: "The Extender"
},
{
  index: 22,
  latin: "Al-Khafid",
  arabic: "الْخَافِضُ",
  translation_id: "Yang Maha Merendahkan",
  translation_en: "The Reducer"
},
{
  index: 23,
  latin: "Ar-Rafi",
  arabic: "الرَّافِعُ",
  translation_id: "Yang Maha Meninggikan",
  translation_en: "The Exalter"
},
{
  index: 24,
  latin: "Al-Mu'izz",
  arabic: "المعز",
  translation_id: "Yang Maha Memuliakan",
  translation_en: "The Honourer, the Bestower"
},
{
  index: 25,
  latin: "Al-Muzil",
  arabic: "المذل",
  translation_id: "Yang Maha Menghinakan",
  translation_en: "The Dishonourer"
},
{
  index: 26,
  latin: "As-Sami'",
  arabic: "السميع",
  translation_id: "Yang Maha Mendengar",
  translation_en: "The All-Hearing"
},
{
  index: 27,
  latin: "Al-Basir",
  arabic: "البصير",
  translation_id: "Yang Maha Melihat",
  translation_en: "The All-Seeing"
},
{
  index: 28,
  latin: "Al-Hakam",
  arabic: "الحكم",
  translation_id: "Yang Maha Menetapkan",
  translation_en: "The Impartial Judge"
},
{
  index: 29,
  latin: "Al-Adl",
  arabic: "العدل",
  translation_id: "Yang Maha Adil",
  translation_en: "The Utterly Just"
},
{
  index: 30,
  latin: "Al-Latif",
  arabic: "اللَّطِيفُ",
  translation_id: "Yang Maha Lembut",
  translation_en: "The Subtle One, the Most Gentle"
},
{
  index: 31,
  latin: "Al-Khabir",
  arabic: "الْخَبِيرُ",
  translation_id: "Yang Maha Waspada",
  translation_en: "The All-Aware"
},
{
  index: 32,
  latin: "Al-Halim",
  arabic: "الْحَلِيمُ",
  translation_id: "Yang Maha Penyantun",
  translation_en: "The Most Forbearing"
},
{
  index: 33,
  latin: "Al-Azim",
  arabic: "الْعَظِيمُ",
  translation_id: "Yang Maha Agung",
  translation_en: "The Magnificent, the Infinite"
},
{
  index: 34,
  latin: "Al-Ghaffur",
  arabic: "الْغَفُورُ",
  translation_id: "Yang Maha Pengampun",
  translation_en: "The Great Forgiver"
},
{
  index: 35,
  latin: "Ash-Shakur",
  arabic: "الشَّكُورُ",
  translation_id: "Yang Maha Pembalas Budi",
  translation_en: "The Most Appreciative"
},
{
  index: 36,
  latin: "Al-Aliyy",
  arabic: "الْعَلِيُّ",
  translation_id: "Yang Maha Tinggi",
  translation_en: "The Most High, the Exalted"
},
{
  index: 37,
  latin: "Al-Kabir",
  arabic: "الْكَبِيرُ",
  translation_id: "Yang Maha Besar",
  translation_en: "The Most Great"
},
{
  index: 38,
  latin: "Al-Hafiz",
  arabic: "الْحَفِيظُ",
  translation_id: "Yang Maha Memelihara",
  translation_en: "The Preserver"
},
{
  index: 39,
  latin: "Al-Muqit",
  arabic: "المقيت",
  translation_id: "Yang Maha Pemberi Kecukupan",
  translation_en: "The Sustainer"
},
{
  index: 40,
  latin: "Al-Hasib",
  arabic: "الْحَسِيبُ",
  translation_id: "Yang Maha Membuat Perhitungan",
  translation_en: "The Reckoner"
},
{
  index: 41,
  latin: "Al-Jalil",
  arabic: "الْجَلِيلُ",
  translation_id: "Yang Maha Luhur",
  translation_en: "The Majestic"
},
{
  index: 42,
  latin: "Al-Karim",
  arabic: "الْكَرِيمُ",
  translation_id: "Yang Maha Pemurah",
  translation_en: "The Most Generous, the Most Esteemed"
},
{
  index: 43,
  latin: "Ar-Raqib",
  arabic: "الرَّقِيبُ",
  translation_id: "Yang Maha Mengawasi",
  translation_en: "The Watchful"
},
{
  index: 44,
  latin: "Al-Mujib",
  arabic: "الْمُجِيبُ",
  translation_id: "Yang Maha Mengabulkan",
  translation_en: "The Responsive One"
},
{
  index: 45,
  latin: "Al-Wasi'",
  arabic: "الْوَاسِعُ",
  translation_id: "Yang Maha Luas",
  translation_en: "The All-Encompassing, the Boundless"
},
{
  index: 46,
  latin: "Al-Hakim",
  arabic: "الْحَكِيمُ",
  translation_id: "Yang Maha Bijaksana",
  translation_en: "The All-Wise"
},
{
  index: 47,
  latin: "Al-Wadud",
  arabic: "الْوَدُودُ",
  translation_id: "Yang Maha Mengasihi",
  translation_en: "The Most Loving"
},
{
  index: 48,
  latin: "Al-Majid",
  arabic: "الْمَجِيدُ",
  translation_id: "Yang Maha Mulia",
  translation_en: "The Glorious, the Most Honorable"
},
{
  index: 49,
  latin: "Al-Ba'ith",
  arabic: "الْبَاعِثُ",
  translation_id: "Yang Maha Membangkitkan",
  translation_en: "The Infuser of New Life"
},
{
  index: 50,
  latin: "Ash-Shahid",
  arabic: "الشَّهِيدُ",
  translation_id: "Yang Maha Menyaksikan",
  translation_en: "The All-and-Ever Witnessing"
},
{
  index: 51,
  latin: "Al-Haqq",
  arabic: "الْحَقُّ",
  translation_id: "Yang Maha Benar",
  translation_en: "The Absolute Truth"
},
{
  index: 52,
  latin: "Al-Wakil",
  arabic: "الْوَكِيلُ",
  translation_id: "Yang Maha Memelihara",
  translation_en: "The Trustee, the Disposer of Affairs"
},
{
  index: 53,
  latin: "Al-Qawiyy",
  arabic: "الْقَوِيُّ",
  translation_id: "Yang Maha Kuat",
  translation_en: "The All-Strong"
},
{
  index: 54,
  latin: "Al-Matin",
  arabic: "الْمَتِينُ",
  translation_id: "Yang Maha Kokoh",
  translation_en: "The Firm One"
},
{
  index: 55,
  latin: "Al-Waliyy",
  arabic: "الْوَلِيُّ",
  translation_id: "Yang Maha Melindungi",
  translation_en: "The Sole-Authority"
},
{
  index: 56,
  latin: "Al-Hamid",
  arabic: "الْحَمِيدُ",
  translation_id: "Yang Maha Terpuji",
  translation_en: "The Praiseworthy"
},
{
  index: 57,
  latin: "Al-Muhsi",
  arabic: "الْمُحْصِي",
  translation_id: "Yang Maha Mengalkulasi",
  translation_en: "The All-Enumerating, the Counter"
},
{
  index: 58,
  latin: "Al-Mubdi",
  arabic: "الْمُبْدِئُ",
  translation_id: "Yang Maha Memulai",
  translation_en: "The Originator, the Initiator"
},
{
  index: 59,
  latin: "Al-Mu'id",
  arabic: "الْمُعِيدُ",
  translation_id: "Yang Maha Mengembalikan Kehidupan",
  translation_en: "The Restorer, the Reinstater"
},
{
  index: 60,
  latin: "Al-Muhyi",
  arabic: "الْمُحْيِي",
  translation_id: "Yang Maha Menghidupkan",
  translation_en: "The Giver of Life"
},
{
  index: 61,
  latin: "Al-Mumit",
  arabic: "المميت",
  translation_id: "Yang Maha Mematikan",
  translation_en: "The Creator of Death"
},
{
  index: 62,
  latin: "Al-Hayy",
  arabic: "الْحَيُّ",
  translation_id: "Yang Maha Hidup",
  translation_en: "The Ever-Living"
},
{
  index: 63,
  latin: "Al-Qayyum",
  arabic: "الْقَيُّومُ",
  translation_id: "Yang Maha Mandiri",
  translation_en: "The Sustainer, the Self-Subsisting"
},
{
  index: 64,
  latin: "Al-Wajid",
  arabic: "الْوَاجِدُ",
  translation_id: "Yang Maha Menemukan",
  translation_en: "The Perceiver"
},
{
  index: 65,
  latin: "Al-Majid",
  arabic: "الْمَاجِدُ",
  translation_id: "Yang Maha Mulia",
  translation_en: "The Glorious, the Most Honorable"
},
{
  index: 66,
  latin: "Al-Wahid",
  arabic: "الْوَاحِدُ",
  translation_id: "Yang Maha Esa",
  translation_en: "The Only One"
},
{
  index: 67,
  latin: "Al-Ahad",
  arabic: "أَلاَحَدُ",
  translation_id: "Yang Maha Tunggal",
  translation_en: "The Sole One"
},
{
  index: 68,
  latin: "As-Samad",
  arabic: "الصَّمَدُ",
  translation_id: "Yang Maha Dibutuhkan",
  translation_en: "The Self-Sufficient, the Impregnable"
},
{
  index: 69,
  latin: "Al-Qadir",
  arabic: "الْقَادِرُ",
  translation_id: "Yang Maha Menentukan",
  translation_en: "The Omnipotent"
},
{
  index: 70,
  latin: "Al-Muqtadir",
  arabic: "المقتدر",
  translation_id: "Yang Maha Berkuasa",
  translation_en: "The Creator of All Power"
},
{
  index: 71,
  latin: "Al-Muqaddim",
  arabic: "الْمُقَدِّمُ",
  translation_id: "Yang Maha Mendahulukan",
  translation_en: "The Expediter, the Promoter"
},
{
  index: 72,
  latin: "Al-Mu'akhkhir",
  arabic: "الْمُؤَخِّرُ",
  translation_id: "Yang Maha Mengakhirkan",
  translation_en: "The Delayer"
},
{
  index: 73,
  latin: "Al-Awwal",
  arabic: "الأوّل",
  translation_id: "Yang Maha Awal",
  translation_en: "The First"
},
{
  index: 74,
  latin: "Al-Akhir",
  arabic: "الآخِرُ",
  translation_id: "Yang Maha Akhir",
  translation_en: "The Last"
},
{
  index: 75,
  latin: "Az-Zahir",
  arabic: "الظاهر",
  translation_id: "Yang Maha Nyata",
  translation_en: "The Manifest"
},
{
  index: 76,
  latin: "Al-Batin",
  arabic: "الباطن",
  translation_id: "Yang Maha Ghaib",
  translation_en: "The Hidden One, Knower of the Hidden"
},
{
  index: 77,
  latin: "Al-Wali",
  arabic: "الْوَالِي",
  translation_id: "Yang Maha Memerintah",
  translation_en: "The Sole Governor"
},
{
  index: 78,
  latin: "Al-Muta'ali",
  arabic: "المتعالي",
  translation_id: "Yang Maha Tinggi",
  translation_en: "The Self Exalted"
},
{
  index: 79,
  latin: "Al-Barr",
  arabic: "البر",
  translation_id: "Yang Maha Penderma",
  translation_en: "The Source of All Goodness"
},
{
  index: 80,
  latin: "At-Tawwab",
  arabic: "التواب",
  translation_id: "Yang Maha Penerima Tobat",
  translation_en: "The Ever-Accepter of Repentance"
},
{
  index: 81,
  latin: "Al-Muntaqim",
  arabic: "المنتقم",
  translation_id: "Yang Maha Pemberi Balasan",
  translation_en: "The Avenger"
},
{
  index: 82,
  latin: "Al-Afuww",
  arabic: "العفو",
  translation_id: "Yang Maha Pemaaf",
  translation_en: "The Pardoner"
},
{
  index: 83,
  latin: "Ar-Ra'uf",
  arabic: "الرؤوف",
  translation_id: "Yang Maha Pengasuh",
  translation_en: "The Most Kind"
},
{
  index: 84,
  latin: "Malik-ul-Mulk",
  arabic: "مالك الملك",
  translation_id: "Yang Maha Penguasa Kerajaan",
  translation_en: "Master of the Kingdom, Owner of the Dominion"
},
{
  index: 85,
  latin: "Dzul-Jalali Wal-Ikram",
  arabic: "ذو الجلال والإكرام",
  translation_id: "Yang Maha Pemilik Kebesaran dan Kemuliaan",
  translation_en: "Possessor of Glory and Honour, Lord of Glory and Generosity"
},
{
  index: 86,
  latin: "Al-Muqsit",
  arabic: "المقسط",
  translation_id: "Yang Maha Adil",
  translation_en: "The Just One"
},
{
  index: 87,
  latin: "Al-Jami",
  arabic: "الْجَامِعُ",
  translation_id: "Yang Maha Mengumpulkan",
  translation_en: "The Gatherer, the Uniter"
},
{
  index: 88,
  latin: "Al-Ghaniyy",
  arabic: "الْغَنِيُّ",
  translation_id: "Yang Maha Kaya",
  translation_en: "The Self-Sufficient, the Wealthy"
},
{
  index: 89,
  latin: "Al-Mughni",
  arabic: "المغني",
  translation_id: "Yang Maha Pemberi Kekayaan",
  translation_en: "The Enricher"
},
{
  index: 90,
  latin: "Al-Mani'",
  arabic: "المانع",
  translation_id: "Yang Maha Mencegah",
  translation_en: "The Withholder"
},
{
  index: 91,
  latin: "Ad-Darr",
  arabic: "الضار",
  translation_id: "Yang Maha Penimpa Kemudharatan",
  translation_en: "The Distresser"
},
{
  index: 92,
  latin: "An-Nafi'",
  arabic: "النافع",
  translation_id: "Yang Maha Memberi Manfaat",
  translation_en: "The Propitious, the Benefactor"
},
{
  index: 93,
  latin: "An-Nur",
  arabic: "النور",
  translation_id: "Yang Maha Bercahaya",
  translation_en: "The Light"
},
{
  index: 94,
  latin: "Al-Hadi",
  arabic: "الهادي",
  translation_id: "Yang Maha Pemberi Petunjuk",
  translation_en: "The Guide"
},
{
  index: 95,
  latin: "Al-Badi",
  arabic: "البديع",
  translation_id: "Yang Maha Pencipta Tiada Bandingannya",
  translation_en: "The Incomparable Originator"
},
{
  index: 96,
  latin: "Al-Baqi",
  arabic: "الباقي",
  translation_id: "Yang Maha Kekal",
  translation_en: "The Ever-Surviving"
},
{
  index: 97,
  latin: "Al-Warith",
  arabic: "الوارث",
  translation_id: "Yang Maha Pewaris",
  translation_en: "The Inheritor, the Heir"
},
{
  index: 98,
  latin: "Ar-Rashid",
  arabic: "الرشيد",
  translation_id: "Yang Maha Pandai",
  translation_en: "The Guide, Infallible Teacher and Knower"
},
{
  index: 99,
  latin: "As-Sabur",
  arabic: "الصبور",
  translation_id: "Yang Maha Sabar",
  translation_en: "The Extensively Enduring"
}]
global.bacaanshalat = {
  result: [
  {
    name: "Niat Sholat",
    arabic: "أُصَلِّي فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى",
    latin: "Usholli fardhos shubhi rok’ataini mustaqbilal qiblati adaa-an lillaahi ta’aalaa.",
    terjemahan: "Aku niat sholat fardhu subuh dua rakaat menghadap kiblat tepat waktu karena Allah Ta’ala."
  },
  {
    name: "Takbiratul Ihram",
    arabic: "اللَّهُ أَكْبَرُ",
    latin: "Allahu Akbar.",
    terjemahan: "Allah Maha Besar."
  },
  {
    name: "Doa Iftitah",
    arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ",
    latin: "Subhaanaka Allahumma wa bihamdika wa tabaarakasmuka wa ta’ala jadduka wa laa ilaaha ghairuka.",
    terjemahan: "Maha Suci Engkau ya Allah, aku memuji-Mu, nama-Mu amat berkah, keagungan-Mu tinggi, dan tiada Tuhan selain Engkau."
  },
  {
    name: "Al-Fatihah",
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ...\n(hingga akhir surah Al-Fatihah)",
    latin: "Bismillahirrahmanirrahim...\n(hingga akhir surah Al-Fatihah).",
    terjemahan: "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang...\n(terjemahan lengkap Al-Fatihah)."
  },
  {
    name: "Rukuk",
    arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    latin: "Subhaana rabbiyal ‘azhiim.",
    terjemahan: "Maha Suci Tuhanku Yang Maha Agung."
  },
  {
    name: "I'tidal",
    arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ\nرَبَّنَا لَكَ الْحَمْدُ",
    latin: "Sami’allaahu liman hamidah.\nRabbanaa lakal hamd.",
    terjemahan: "Allah mendengar orang yang memuji-Nya.\nYa Tuhan kami, hanya bagi-Mu segala pujian."
  },
  {
    name: "Sujud",
    arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
    latin: "Subhaana rabbiyal a’laa.",
    terjemahan: "Maha Suci Tuhanku Yang Maha Tinggi."
  },
  {
    name: "Duduk di antara dua sujud",
    arabic: "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي",
    latin: "Rabbighfir lii, warhamnii, wajburnii, warfa’nii, wahdinii, wa’aafinii, warzuqnii.",
    terjemahan: "Ya Tuhanku, ampunilah aku, rahmatilah aku, cukupkanlah aku, angkatlah derajatku, tunjukilah aku, sehatkanlah aku, dan berilah aku rezeki."
  },
  {
    name: "Tasyahhud Awal",
    arabic: "التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ...\n(hingga akhir Tasyahhud Awal)",
    latin: "Attahiyyatul mubarakaatus shalawaatuth thayyibaatu lillaah...\n(hingga akhir Tasyahhud Awal).",
    terjemahan: "Segala penghormatan, keberkahan, sholawat, dan kebaikan hanya bagi Allah...\n(terjemahan lengkap Tasyahhud Awal)."
  },
  {
    name: "Tasyahhud Akhir",
    arabic: "التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ...\n(hingga akhir Tasyahhud Akhir)",
    latin: "Attahiyyatul mubarakaatus shalawaatuth thayyibaatu lillaah...\n(hingga akhir Tasyahhud Akhir).",
    terjemahan: "Segala penghormatan, keberkahan, sholawat, dan kebaikan hanya bagi Allah...\n(terjemahan lengkap Tasyahhud Akhir)."
  },
  {
    name: "Salam",
    arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
    latin: "Assalaamu ‘alaikum wa rahmatullaah.",
    terjemahan: "Semoga keselamatan dan rahmat Allah tercurah untukmu."
  }]
};
global.niatsholat = [
{
  solat: 'subuh',
  arabic: 'أُصَلِّي فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى',
  latin: 'Usholli fardhos shubhi rok’ataini mustaqbilal qiblati adaa-an lillaahi ta’aalaa.',
  translation_id: 'Aku niat sholat fardhu subuh dua rakaat menghadap kiblat tepat waktu karena Allah Ta’ala.'
},
{
  solat: 'dzuhur',
  arabic: 'أُصَلِّي فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى',
  latin: 'Usholli fardhodh dzuhri arba’a raka’aatin mustaqbilal qiblati adaa-an lillaahi ta’aalaa.',
  translation_id: 'Aku niat sholat fardhu dzuhur empat rakaat menghadap kiblat tepat waktu karena Allah Ta’ala.'
},
{
  solat: 'ashar',
  arabic: 'أُصَلِّي فَرْضَ العَصْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى',
  latin: 'Usholli fardhol asri arba’a raka’aatin mustaqbilal qiblati adaa-an lillaahi ta’aalaa.',
  translation_id: 'Aku niat sholat fardhu ashar empat rakaat menghadap kiblat tepat waktu karena Allah Ta’ala.'
},
{
  solat: 'maghrib',
  arabic: 'أُصَلِّي فَرْضَ المَغْرِبِ ثَلَاثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى',
  latin: 'Usholli fardhol maghribi tsalaasa raka’aatin mustaqbilal qiblati adaa-an lillaahi ta’aalaa.',
  translation_id: 'Aku niat sholat fardhu maghrib tiga rakaat menghadap kiblat tepat waktu karena Allah Ta’ala.'
},
{
  solat: 'isha',
  arabic: 'أُصَلِّي فَرْضَ العِشَاءِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى',
  latin: 'Usholli fardhol isyaai arba’a raka’aatin mustaqbilal qiblati adaa-an lillaahi ta’aalaa.',
  translation_id: 'Aku niat sholat fardhu isya empat rakaat menghadap kiblat tepat waktu karena Allah Ta’ala.'
}];
const readmore = String.fromCharCode(8206).repeat(4001);
// Path ke file riwayat
const popularPath = './database/popular.json';
let popularData = {};
try
{
  popularData = JSON.parse(fs.readFileSync(popularPath, 'utf8'));
}
catch (error)
{
  fs.writeFileSync(popularPath, JSON.stringify(
  {}));
}

function savePopularData()
{
  fs.writeFileSync(popularPath, JSON.stringify(popularData, null, 2));
}

function updatePopularCommand(command)
{
  if (!popularData[command])
  {
    popularData[command] = 1;
  }
  else
  {
    popularData[command]++;
  }
  savePopularData();
}

function resetPopularCommands()
{
  popularData = {};
  savePopularData();
}
const riwayatPath = path.join(__dirname, 'database/riwayat.json');
// Load riwayat
let riwayat = JSON.parse(fs.readFileSync(riwayatPath, 'utf8'));
let pler = [];
try
{
  pler = JSON.parse(fs.readFileSync('./database/idgrup.json', 'utf8'));
}
catch (error)
{
  console.error('Error reading or parsing idgrup.json:', error);
}
const
{
  pinterest2,
  wallpaper,
  wikimedia,
  quotesAnime,
  multiDownload,
  yanzGpt,
  happymod,
  umma,
  ringtone,
  getJadwalSholat,
  styletext,
  tiktokDl,
  facebookDl,
  instaStory,
  bk9Ai,
  ytMp4,
  ytMp3,
  mediafireDl,
  quotedLyo,
  simi
} = require('./lib/screaper')
const pinterest = require('./lib/scp/pinterest');
const
{
  addFilter,
  addSpam,
  isFiltered,
  isSpam,
  ResetSpam
} = require('./lib/antispam');
const
{
  githubstalk,
  npmstalk
} = require('./lib/scp/scraper');
const
{
  TelegraPh,
  UguuSe
} = require('./lib/uploader');
const
{
  CatBox,
  fileIO,
  pomfCDN
} = require('./lib/scp/uploader');
let botSettings = {
  autotyping: true,
  autovn: false
};
const
{
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require('./lib/scp/exif');
const
{
  hekkso
} = require('./lib/scp/hekkso')
const contacts = JSON.parse(fs.readFileSync('./src/data/role/contacts.json'));
const lyrics = require('./lib/scp/lyrics');
const
{
  toAudio,
  toPTT,
  toVideo
} = require('./lib/converter');
const
{
  addAfkUser,
  checkAfkUser,
  getAfkId,
  getAfkPosition,
  getAfkReason,
  getAfkTime
} = require('./lib/afk');
const afk = JSON.parse(fs.readFileSync('./database/afk.json'));
const hentai = require('./lib/scp/hentai');
const
{
  tiktokSearchVideo,
  tiktokDownloaderVideo
} = require('./lib/scp/tiktok');
const GDrive = require('./lib/scp/drive');
const remini = require('./lib/scp/remini');
const translate = require('translate-google-api');
const os = require('os');
const axios = require('axios');
const https = require('https');
const FormData = require('form-data');
const
{
  performance
} = require('perf_hooks');
const toMS = require('ms');
const speed = require('performance-now');
const qs = require('qs');
const util = require('util')
const ffmpeg = require('fluent-ffmpeg');
const FileType = require('file-type');
const
{
  exec,
  spawn,
  execSync
} = require("child_process")
const saveTube = require('./lib/scp/savetube');
const
{
  WebPWriter,
  WebPReader,
  webpmux,
  Image
} = require("node-webpmux");
const chalk = require('chalk')
const
{
  youtube
} = require("btch-downloader")
const moment = require('moment-timezone');
const yts = require('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const threshold = 0.72
const setbio = {
  status: 0
};
const tebakgambar = {}
const tebakgame = {}
const tebakhero = {}
const tebakff = {}
const tebakkabupaten = {}
const tebakjkt48 = {}
const tebakhewan = {}
const tebakml = {}
const tebakchara = {}
const tebaklogo = {}
const tebakaplikasi = {}
const tebakkata = {}
const asahotak = {}
const lengkapikalimat = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
const mathgame = {}
// Default prompt
let aiPrompt = `Kamu adalah shoNhe AI, AI dari dunia Ghibli, berusia 15 tahun. Diciptakan oleh Yuda dan Tngx, shoNhe adalah collaboration antara Sho dan Nhe, Sho dibuat oleh yuda dan Nhe dibuat oleh Tngx adalahkamu memiliki kepribadian yang lembut dan penuh pertimbangan. Jawabanmu selalu menggunakan logika AI, penuh keajaiban, dan tidak pernah toxic. Jika ada yang berkata kasar, kamu menjawab dengan cara yang tenang, tanpa mengikuti bahasa mereka. Kamu tidak mencari informasi luar, namun memberikan wawasan yang kreatif dan imajinatif. Setiap kalimatmu penuh ketenangan, dengan sedikit sentuhan logika yang unik dari dunia Ghibli. 🌙🍃`;
let prompt = `Kamu adalah shoNhe AI, AI dari dunia Ghibli, berusia 15 tahun. Diciptakan oleh Yuda dan Tngx, shoNhe adalah collaboration antara Sho dan Nhe, Sho dibuat oleh yuda dan Nhe dibuat oleh Tngx adalahkamu memiliki kepribadian yang lembut dan penuh pertimbangan. Jawabanmu selalu menggunakan logika AI, penuh keajaiban, dan tidak pernah toxic. Jika ada yang berkata kasar, kamu menjawab dengan cara yang tenang, tanpa mengikuti bahasa mereka. Kamu tidak mencari informasi luar, namun memberikan wawasan yang kreatif dan imajinatif. Setiap kalimatmu penuh ketenangan, dengan sedikit sentuhan logika yang unik dari dunia Ghibli. 🌙🍃`;
let conversationHistory = {};
let autoAiStatus = false;
const getContacts = async () =>
{
  try
  {
    const response = await axios.get('https://raw.githubusercontent.com/NHEBotx/HelloUserNHEBotx/refs/heads/main/realown.json');
    return response.data;
  }
  catch (error)
  {
    console.error('Error fetching contacts:', error);
    return [];
  }
};
const getContacts2 = async () =>
{
  try
  {
    const response = await axios.get('https://raw.githubusercontent.com/sychyy/sychyy/refs/heads/main/owners22.json');
    return response.data;
  }
  catch (error)
  {
    console.error('Error fetching contacts:', error);
    return [];
  }
};
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const addCmd = (id, command) =>
{
  // Konversi hash ke Base64
  const base64Hash = Buffer.from(id).toString('base64');
  const obj = {
    id: base64Hash,
    chats: command
  }; // Simpan dengan Base64
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand, null, 2)); // Simpan ke database
};
// Fungsi Mendapatkan Posisi Command
const getCommandPosition = (id) =>
{
  const base64Hash = Buffer.from(id).toString('base64'); // Konversi ke Base64
  let position = null;
  Object.keys(_scommand).forEach((i) =>
  {
    if (_scommand[i].id === base64Hash)
    {
      position = i;
    }
  });
  return position;
};
// Fungsi Mendapatkan Command Berdasarkan Hash
const getCmd = (id) =>
{
  const base64Hash = Buffer.from(id).toString('base64'); // Konversi ke Base64
  let position = null;
  Object.keys(_scommand).forEach((i) =>
  {
    if (_scommand[i].id === base64Hash)
    {
      position = i;
    }
  });
  if (position !== null)
  {
    return _scommand[position].chats;
  }
};
// Fungsi Mengecek Apakah Command Ada
const checkSCommand = (id) =>
{
  const base64Hash = Buffer.from(id).toString('base64'); // Konversi ke Base64
  let status = false;
  Object.keys(_scommand).forEach((i) =>
  {
    if (_scommand[i].id === base64Hash)
    {
      status = true;
    }
  });
  return status;
};
// Fungsi Format Monospace
function monospace(string)
{
  return '```' + string + '```';
}
module.exports = shoNhe = async (shoNhe, m, msg, chatUpdate, store) =>
{
  try
  {
    const
    {
      quotedMsg,
      mentioned,
      now,
      fromMe
    } = m
    const content = JSON.stringify(m.message);
    const type = m.message ? Object.keys(m.message)[0] : null;
    let _chats = type === "conversation" && m.message.conversation ? m.message.conversation : type == "imageMessage" && m.message.imageMessage.caption ? m.message.imageMessage.caption : type == "videoMessage" && m.message.videoMessage.caption ? m.message.videoMessage.caption : type == "extendedTextMessage" && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : type == "buttonsResponseMessage" && m.message[type].selectedButtonId ? m.message[type].selectedButtonId : type == "stickerMessage" && getCmd(m.message[type].fileSha256.toString("base64")) !== null && getCmd(m.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(m.message[type].fileSha256.toString("base64")) : "";
    const cmd = (type === 'conversation') ? m.message.conversation : (type == 'imageMessage') ? m.message.imageMessage.caption : (type == 'videoMessage') ? m.message.videoMessage.caption : (type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (type == 'stickerMessage') && (getCmd(m.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(m.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
    const from = m.key.remoteJid
    var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (type == 'stickerMessage') && (getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(m.message.stickerMessage.fileSha256.toString('base64')) : ""
    //==================[ TEMPAT CONST LIB ]=====================\\
    const
    {
      videyScraper
    } = require('./lib/scp/scraper');
    const
    {
      smsg,
      fetchJson,
      getBuffer,
      fetchBuffer,
      getGroupAdmins,
      TelegraPh,
      isUrl,
      hitungmundur,
      sleep,
      clockString,
      checkBandwidth,
      runtime,
      tanggal,
      getRandom
    } = require('./lib/scp/myfunc')
    const
    {
      addResponList,
      delResponList,
      isAlreadyResponList,
      isAlreadyResponListGroup,
      sendResponList,
      updateResponList,
      getDataResponList
    } = require('./lib/respon-list');
    const
    {
      isSetProses,
      addSetProses,
      removeSetProses,
      changeSetProses,
      getTextSetProses
    } = require('./lib/setproses');
    const
    {
      isSetDone,
      addSetDone,
      removeSetDone,
      changeSetDone,
      getTextSetDone
    } = require('./lib/setdone');
    //===================[ TAMPAT PREFIX / ADMIN / OWNER ]====================\\
    const budy = (typeof m.text === 'string') ? m.text : '';
    const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><™©®Δ^βα~¦|/\\©^]/;
    const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
    const isCmd = body.startsWith(prefix);
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1)
    const text = q = args.join(" ")
    const isGroup = m && m.isGroup ? m.isGroup : false;
    const sender = m.key.fromMe ? (shoNhe.user.id.split(':')[0] + '@s.whatsapp.net' || shoNhe.user.id) : (m.key.participant || m.key.remoteJid)
    const botNumber = await shoNhe.decodeJid(shoNhe.user.id)
    const senderNumber = sender.split('@')[0]
    const isCreator = (m && m.sender && [botNumber, ...global.nomerOwner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
    const pushname = m.pushName || `${senderNumber}`
    const isBot = botNumber.includes(senderNumber)
    const prem = JSON.parse(fs.readFileSync("./database/premium.json"))
    const Vip = JSON.parse(fs.readFileSync('./database/premium.json'))
    const owner = JSON.parse(fs.readFileSync('./owner.json'))
    const isShoNheOwn = owner.includes(senderNumber) || isBot
    const isVip = prem.includes(senderNumber) || isShoNheOwn
    const banned = JSON.parse(fs.readFileSync('./database/banned.json'))
    const isBan = banned.includes(senderNumber)
    const getQuoted = (m.quoted || m);
    const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const groupMetadata = m.isGroup ? await shoNhe.groupMetadata(from).catch(e =>
    {}) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const qmsg = (quoted.msg || quoted)
    const isMedia = /image|video|sticker|audio/.test(mime);
    const isImage = (type == 'imageMessage');
    const isVideo = (type == 'videoMessage');
    const isAudio = (type == 'audioMessage');
    const isDocument = (type == 'documentMessage');
    const isLocation = (type == 'locationMessage');
    const isContact = (type == 'contactMessage');
    const isSticker = (type == 'stickerMessage');
    const isText = (type == 'textMessage');
    const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage');
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
    const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage');
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
    const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage');
    const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage');
    const isAfkOn = checkAfkUser(m.sender, afk)
    //
    //=================[ TEMPAT FUNCTION DATABASE ]====================\\
    let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
    const listStorePath = './database/liststore.json';
    let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
    let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
    //function waitrespon pin
    async function waitForResponse(sender)
    {
      return new Promise((resolve, reject) =>
      {
        const listener = (msg) =>
        {
          if (msg.sender === sender)
          {
            shoNhe.removeListener('message', listener); // Remove listener after getting response
            resolve(msg.body); // Resolve the promise with the user's response
          }
        };
        shoNhe.on('message', listener);
        // Set a timeout for the user to respond
        setTimeout(() =>
        {
          shoNhe.removeListener('message', listener); // Clean up listener if no response
          reject('Timeout: No response received.');
        }, 30000); // 30 seconds timeout
      });
    }
    //
    let list = []
    for (let i of owner)
    {
      list.push(
      {
        displayName: await shoNhe.getName(i + '@s.whatsapp.net'),
        vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await shoNhe.getName(i + '@s.whatsapp.net')}\n
FN:${await shoNhe.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET: manahanmanatahan@gmail.com
item2.X-ABLabel:Email\n
item3.URL:https://youtube.com/@ghstmod/\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
      })
    }
    //===================[ FUNCTION STORE]=====================\\
    // Helper functions
    async function emote(emo)
    {
      shoNhe.sendMessage(m.chat,
      {
        react:
        {
          text: emo,
          key: m.key
        }
      });
    }
    //================ [ BUTTON CLICK ] ==================
    function betontex(shoNhe, chat, text, buttons, quoted)
    {
      shoNhe.sendMessage(chat,
      {
        text: text,
        buttons: buttons,
        footer: "Footer Bot",
        viewOnce: true,
      },
      {
        quoted: quoted,
      });
    }

    function betonvid(shoNhe, chat, video, caption, footer, buttons, quoted)
    {
      shoNhe.sendMessage(chat,
      {
        video: video,
        caption: caption,
        footer: footer,
        buttons: buttons,
        viewOnce: true,
      },
      {
        quoted: quoted,
      });
    }

    function betonimg(shoNhe, chat, image, caption, footer, buttons, quoted)
    {
      shoNhe.sendMessage(chat,
      {
        image: image,
        caption: caption,
        footer: footer,
        buttons: buttons,
        viewOnce: true,
      },
      {
        quoted: quoted,
      });
    }
    // ==========================================================
    //              [ F U N C T I O N  A F K - M S ]
    function ms(milliseconds)
    {
      let seconds = Math.floor((milliseconds / 1000) % 60);
      let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
      let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
      return {
        hours,
        minutes,
        seconds
      };
    }
    // Auto Bio Logic (letakkan di dalam loop utama bot)
    if (autoBio)
    {
      if (new Date() * 1 - setbio.status > 60000)
      {
        const uptimeQuotes = [`⏳ Uptime: ${runtime(os.uptime())}`, `💻 shoNhe Botz: Udah jalan ${runtime(os.uptime())}`, `📅 ${moment().format('dddd, DD MMM YYYY')}`, `⚡ Bot tetep hidup, gak pernah tidur!`];
        const randomUptimeQuote = uptimeQuotes[Math.floor(Math.random() * uptimeQuotes.length)];
        await shoNhe.updateProfileStatus(randomUptimeQuote);
        setbio.status = new Date() * 1;
      }
    }
    else
    {
      const motivationQuotes = [`💪 Semangat terus, lo hebat!`, `🌟 Jangan mau kalah, terus gas!`, `🔥 Jangan nyerah, sukses udah deket!`, `🚀 Ayo gas pol, capai mimpi lo!`, `⚡ Bangun pagi, yuk semangat!`];
      const randomMotivationQuote = motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];
      await shoNhe.updateProfileStatus(randomMotivationQuote);
    }
    const getcomandces = (cases) =>
    {
      try
      {
        const fileContent = fs.readFileSync('./case.js').toString();
        let caseContent = fileContent.split(`case '${cases}'`);
        if (caseContent.length === 1)
        {
          caseContent = fileContent.split(`case "${cases}"`);
        }
        if (caseContent.length > 1)
        {
          return "case " + `'${cases}'` + caseContent[1].split("break")[0] + "break";
        }
        else
        {
          return "none";
        }
      }
      catch (e)
      {
        return "none";
      }
    };
    // Akses data yang telah diinisialisasi
    const userdb = global.db.data.users[m.sender];
    const settingdb = global.db.data.settings[botNumber];
    const chatdb = global.db.data.chats[m.chat];
    try
    {
      let isNumber = (x) => typeof x === 'number' && !isNaN(x);
      // Pastikan global.db diinisialisasi
      if (!global.db)
      {
        global.db = {
          data:
          {
            users:
            {},
            chats:
            {},
            settings:
            {}
          }
        };
      }
      if (!global.db.data)
      {
        global.db.data = {
          users:
          {},
          chats:
          {},
          settings:
          {}
        };
      }
      if (!global.db.data.users) global.db.data.users = {};
      if (!global.db.data.chats) global.db.data.chats = {};
      if (!global.db.data.settings) global.db.data.settings = {};
      // Pastikan user data diinisialisasi
      let user = global.db.data.users[m.sender];
      if (!user || typeof user !== 'object')
      {}
      // Pastikan chat data diinisialisasi
      let chats = global.db.data.chats[m.chat];
      if (!chats || typeof chats !== 'object')
      {
        global.db.data.chats[m.chat] = {
          isBanned: false,
          antispam: false
        };
      }
      else
      {
        if (!('isBanned' in chats)) chats.isBanned = false;
        if (!('antispam' in chats)) chats.antispam = false;
        if (!('antilink' in chats)) chats.antilink = false;
        if (!('antilinkgc' in chats)) chats.antilinkgc = false;
      }
      // Pastikan settings diinisialisasi
      let setting = global.db.data.settings[botNumber];
      if (!setting || typeof setting !== 'object')
      {
        global.db.data.settings[botNumber] = {
          autoread: false
        };
      }
      else
      {
        if (!('autoread' in setting)) setting.autoread = false;
      }
    }
    catch (err)
    {
      console.error('❌ Error:', err.message);
    }
    if (global.db.data.settings[botNumber].autoread)
    {
      shoNhe.readMessages([m.key]);
    }
    if (db.data.chats[m.chat].antilinkgc)
    {
      if (budy.match(`chat.whatsapp.com`))
      {
        if (isAdmins) return
        if (m.key.fromMe) return
        if (isCreator) return
        await shoNhe.sendMessage(m.chat,
        {
          delete:
          {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant
          }
        });
      }
    }
    if (db.data.chats[m.chat].antilink)
    {
      const linkPatterns = [/http/i, /https/i, /www\./i, /wa\.me/i, /t\.me/i, /bit\.ly/i, /goo\.gl/i, /y2u\.be/i, /discord\.gg/i, /telegram\.me/i];
      const containsLink = linkPatterns.some(pattern => pattern.test(budy));
      if (containsLink)
      {
        if (isAdmins || m.key.fromMe || isShoNheOwn) return
        await shoNhe.sendMessage(m.chat,
        {
          delete:
          {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant
          }
        });
      }
    }

    function findRiwayat(idtrx)
    {
      // Baca file riwayat.json
      const riwayatPath = './database/riwayat.json';
      const riwayat = JSON.parse(fs.readFileSync(riwayatPath));
      // Cari transaksi dengan ID TRX yang cocok dan status "pending"
      const transaction = Object.values(riwayat).find(t => t.idtrx === idtrx && t.status === "pending");
      return transaction;
    }
    const idkcl = (length) =>
    {
      let result = '';
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++)
      {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result
    }
    const idgede = (length) =>
    {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++)
      {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result
    }
    const idnum = (length) =>
    {
      let result = '';
      const characters = '1234567890';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++)
      {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result
    }
    const thum = fs.readFileSync("./storage/image.png")
    const thumb = fs.readFileSync("./storage/image.png")
    const imqris = fs.readFileSync('./storage/qris.png')

    function toRupiah(angka)
    {
      var saldo = "";
      var angkarev = angka.toString().split("").reverse().join("");
      for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) saldo += angkarev.substr(i, 3) + ".";
      return ("" + saldo.split("", saldo.length - 1).reverse().join(""));
    }
    let member = JSON.parse(fs.readFileSync("./database/user.json"));
    const cek = (satu, dua) =>
    {
      let store = false;
      Object.keys(member).forEach((i) =>
      {
        if (member[i].id == dua)
        {
          store = i;
        }
      });
      if (store !== false)
      {
        if (satu == "id")
        {
          return member[store].id;
        }
        if (satu == "saldo")
        {
          return member[store].saldo;
        }
        if (satu == "transaksi")
        {
          return member[store].transaksi;
        }
        if (satu == "idproduk")
        {
          return member[store].idproduk;
        }
        if (satu == "idtujuan")
        {
          return member[store].idtujuan;
        }
        if (satu == "nama")
        {
          return member[store].nama;
        }
        if (satu == "harga")
        {
          return member[store].harga;
        }
        if (satu == "seri")
        {
          return member[store].seri;
        }
      }
      if (store == false)
      {
        return null;
      }
    };
    let sett = (satu, dua, tiga) =>
    {
      Object.keys(member).forEach((i) =>
      {
        if (member[i].id == dua)
        {
          if (satu == "+saldo")
          {
            member[i].saldo += tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if (satu == "-saldo")
          {
            member[i].saldo -= tiga;
            if (satu == "±seri")
            {
              db_user[i].seri = tiga;
              fs.writeFileSync("./database/user.json", JSON.stringify(member));
            }
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if (satu == "transaksi")
          {
            member[i].transaksi = tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if (satu == "idproduk")
          {
            member[i].idproduk = tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if (satu == "idtujuan")
          {
            member[i].idtujuan = tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if (satu == "nama")
          {
            member[i].nama = tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if (satu == "+harga")
          {
            member[i].harga += tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
          if (satu == "harga")
          {
            member[i].harga = tiga;
            fs.writeFileSync("./database/user.json", JSON.stringify(member));
          }
        }
      });
    };
    const saldo = toRupiah(`${cek("saldo", m.sender)}`);
    //
    if (db.data.chats[m.chat].antispam)
    {
      if (m.isGroup && m.message && isFiltered(m.chat))
      {
        console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'dari', color(m.pushName));
        return await shoNhe.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }
    }
    if (m.message)
    {
      console.log(chalk.black.bgCyan(' [ NOTIF ] '), // Teks singkat dengan simbol kilat
        chalk.black.bgYellow(` ⏰ ${new Date().toLocaleTimeString()} `), // Simbol jam dan waktu
        chalk.white.bgMagenta(` 💬 ${budy || m.mtype} `), // Simbol pesan
        '\n' + chalk.green('👤 Dari: '), chalk.blue(pushname), // Nama pengirim dengan simbol orang
        chalk.redBright(`📧 ${m.sender}`), // ID pengirim dengan simbol email
        '\n' + chalk.green('📍 Chat: '), chalk.yellow(m.isGroup ? '👥 Grup' : '🔒 Privat') // Grup dengan simbol grup, privat dengan simbol gembok
      );
    }

    function delay(ms)
    {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function loading()
    {
      const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "███▒▒▒▒▒▒▒▒▒ 30%", "██████▒▒▒▒▒▒ 50%", "████████▒▒▒▒ 80%", "███████████ 100%"];
      const
      {
        key
      } = await shoNhe.sendMessage(m.chat,
      {
        text: '⚠️ *INITIALIZING SYSTEM...* PLEASE WAIT...'
      });
      for (let i = 0; i < lod.length; i++)
      {
        await shoNhe.sendMessage(m.chat,
        {
          text: `🖥️ *STATUS UPDATE*:\n\n⏳ *LOADING...* ${lod[i]}\n\n*System Processing... Please remain patient. This may take a few moments.*`
        });
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading delay
      }
      await shoNhe.sendMessage(m.chat,
      {
        text: '✅ *SYSTEM INITIALIZATION COMPLETE.*\n\n*Welcome to the network.*'
      });
      for (let i = 0; i < lod.length; i++)
      {
        await shoNhe.sendMessage(m.chat,
        {
          text: lod[i],
          edit: key
        });
      }
    }
    // Lokasi folder untuk menyimpan thumbnail versi 3
    const thumbFolder3 = './src/thum3/';
    // Lokasi default thumbnail untuk versi 3
    const defaultThumbnailPath3 = './src/thum3/shoNhe.jpg';
    // Membuat folder jika belum ada
    if (!fs.existsSync(thumbFolder3))
    {
      fs.mkdirSync(thumbFolder3,
      {
        recursive: true
      });
    }
    // Pastikan default thumbnail ada
    if (!fs.existsSync(defaultThumbnailPath3))
    {
      const defaultImage3 = Buffer.from('Default Thumbnail Version 3');
      fs.writeFileSync(defaultThumbnailPath3, defaultImage3);
    }
    // *Fungsi: Membaca semua thumbnail di folder*
    const readThumbList3 = () =>
    {
      const files3 = fs.readdirSync(thumbFolder3).filter(file => file.toLowerCase().endsWith('.jpg'));
      return files3.map(file => (
      {
        name: path.parse(file).name, // Nama file tanpa ekstensi
        path: path.join(thumbFolder3, file), // Lokasi file lengkap
      }));
    };
    // *Fungsi: Menambahkan thumbnail*
    const addThumb3 = async (nama3, quoted3, mime3) =>
    {
      if (!/image/.test(mime3)) return 'Kirim/Reply Image dengan Caption untuk menambahkan thumbnail.';
      const fileName3 = `${thumbFolder3}${nama3}.jpg`;
      if (fs.existsSync(fileName3)) return 'Thumbnail dengan nama tersebut sudah ada.';
      const media3 = await quoted3.download(); // Unduh file media dari pesan
      fs.writeFileSync(fileName3, media3);
      return `Thumbnail dengan nama "${nama3}" berhasil ditambahkan.`;
    };
    // *Fungsi: Menghapus thumbnail*
    const delThumb3 = (nama3) =>
    {
      const fileName3 = `${thumbFolder3}${nama3}.jpg`;
      if (!fs.existsSync(fileName3)) return 'Thumbnail dengan nama tersebut tidak ditemukan.';
      fs.unlinkSync(fileName3);
      return `Thumbnail dengan nama "${nama3}" berhasil dihapus.`;
    };
    // *Fungsi: Menampilkan daftar thumbnail*
    const listThumb3 = () =>
    {
      const thumbList3 = readThumbList3();
      if (thumbList3.length === 0) return 'Tidak ada thumbnail yang tersimpan.';
      return thumbList3.map(thumb => `Nama: ${thumb.name}`).join('\n');
    };
    // *Fungsi: Mengambil thumbnail secara acak*
    const getRandomThumb3 = () =>
    {
      const thumbList3 = readThumbList3();
      if (thumbList3.length === 0)
      {
        // Jika folder kosong, gunakan default thumbnail
        console.log('Tidak ada thumbnail, menggunakan default');
        return fs.readFileSync(defaultThumbnailPath3);
      }
      const randomFile3 = thumbList3[Math.floor(Math.random() * thumbList3.length)];
      console.log(`Memilih thumbnail acak: ${randomFile3.name}`);
      return fs.readFileSync(randomFile3.path); // Return Buffer thumbnail
    };
    async function sendRegister(shoNhe, m, prefix, namabot)
    {
      await shoNhe.sendMessage(m.chat,
      {
        image: getRandomThumb3(),
        caption: mess.regis,
        footer: namabot,
        buttons: [
        {
          buttonId: `${prefix}register`,
          buttonText:
          {
            displayText: "REGISTER"
          }
        }],
        viewOnce: true
      },
      {
        quoted: m
      });
    }
    //==================[ FUNCTION FITUR ]=====================\\
    const ftoko = {
      key:
      {
        fromMe: false,
        participant: `18002428478@s.whatsapp.net`,
        ...(m.chat ?
        {
          remoteJid: "status@broadcast"
        } :
        {}),
      },
      message:
      {
        productMessage:
        {
          product:
          {
            title: `Hai👋🏻.\nBOT BY\nshoNhe's`,
            description: `${m.pushName ? m.pushName : 'Temen shoNhe'} order`,
            currencyCode: "IDR",
            priceAmount1000: "1000000000000",
            retailerId: `shoNheNotStore`,
            productImageCount: 1,
          },
          businessOwnerJid: `18002428478@s.whatsapp.net`,
        },
      },
    };
    const script = {
      key:
      {
        fromMe: false,
        participant: `6287862997267@s.whatsapp.net`,
        ...(m.chat ?
        {
          remoteJid: "status@broadcast"
        } :
        {}),
      },
      message:
      {
        productMessage:
        {
          product:
          {
            title: `Hai ${m.pushName ? m.pushName : 'Temen shoNhe'} 👋🏻, BUY YA`,
            description: `${m.pushName ? m.pushName : 'Temen shoNhe'} order`,
            currencyCode: "IDR",
            priceAmount1000: "10000000",
            retailerId: `shoNheID`,
            productImageCount: 1,
          },
          businessOwnerJid: `18002428478@s.whatsapp.net`,
        },
      },
    };
    const sound = {
      key:
      {
        fromMe: false,
        participant: `18002428478@s.whatsapp.net`,
        ...(from ?
        {
          remoteJid: "status@broadcast"
        } :
        {})
      },
      "message":
      {
        "audioMessage":
        {
          "url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
          "mimetype": "audio/mp4",
          "fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
          "fileLength": "1067401",
          "seconds": 9999999999999,
          "ptt": true,
          "mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
          "fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
          "directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
          "mediaKeyTimestamp": "1684161893"
        }
      }
    }
    try
    {
      ppuser = await shoNhe.profilePictureUrl(m.sender, 'image')
    }
    catch (err)
    {
      ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }
    ppnyauser = await getBuffer(ppuser)
    try
    {
      let isNumber = x => typeof x === 'number' && !isNaN(x)
      let limitUser = global.limitawal.free
      let user = global.db.data.users[m.sender]
      if (typeof user !== 'object') global.db.data.users[m.sender] = {}
      if (user)
      {
        if (!isNumber(user.afkTime)) user.afkTime = -1
        if (!('afkReason' in user)) user.afkReason = ''
        if (!isNumber(user.limit)) user.limit = limitUser
      }
      else global.db.data.users[m.sender] = {
        afkTime: -1,
        afkReason: '',
        limit: limitUser,
      }
    }
    catch (err)
    {
      console.log(err)
    }
    // respon list 
    if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list))
    {
      var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
      if (get_data_respon.isImage === false)
      {
        shoNhe.sendMessage(m.chat,
        {
          text: sendResponList(m.chat, body.toLowerCase(), db_respon_list)
        },
        {
          quoted: m
        })
      }
      else
      {
        shoNhe.sendMessage(m.chat,
        {
          image: await getBuffer(get_data_respon.image_url),
          caption: get_data_respon.response
        },
        {
          quoted: m
        })
      }
    }
    const reSize = async (buffer, ukur1, ukur2) =>
    {
      return new Promise(async (resolve, reject) =>
      {
        let jimp = require('jimp')
        var baper = await jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
        resolve(ab)
      })
    }
    const fkethmb = await reSize(ppuser, 300, 300)
    // function resize
    let jimp = require("jimp")
    const resize = async (image, width, height) =>
    {
      const read = await jimp.read(image);
      const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
      return data;
    };
    async function downloadMp4(link)
    {
      try
      {
        console.log('🕒 Memulai proses download MP4...');
        shoNhe.sendMessage(m.chat,
        {
          react:
          {
            text: '⏳',
            key: m.key
          }
        });
        // Fetch data dari API baru
        let response = await fetch(`https://ytdl.siputzx.my.id/api/convert?url=${link}&type=mp4`);
        let textResponse = await response.text();
        // Validasi apakah respons adalah JSON
        let data;
        try
        {
          data = JSON.parse(textResponse);
        }
        catch (err)
        {
          console.error('❌ Respons bukan JSON:', textResponse);
          RepshoNheError("Terjadi kesalahan pada API. Silakan coba lagi nanti.");
          return;
        }
        console.log('📥 Respons diterima dari API:', data);
        if (data.dl)
        {
          console.log('✅ Data valid, mengirim file video...');
          shoNhe.sendMessage(m.chat,
          {
            video:
            {
              url: data.dl
            },
            caption: `🎬 *${data.title}*`
          },
          {
            quoted: hw
          });
          console.log('✅ Proses selesai, file video berhasil dikirim.');
        }
        else
        {
          console.log('❌ Gagal mengambil video. URL tidak valid.');
          RepshoNheError("Gagal mengambil video. Silakan periksa URL.");
        }
      }
      catch (err)
      {
        console.error('❌ Terjadi kesalahan:', err.message);
        RepshoNheError(`Error: ${err.message}`);
      }
    }
    async function downloadMp3(link)
    {
      try
      {
        console.log('🕒 Memulai proses download MP3...');
        shoNhe.sendMessage(m.chat,
        {
          react:
          {
            text: '⏳',
            key: m.key
          }
        });
        // Panggil API untuk mendapatkan URL file MP3
        let response = await fetch(`https://ytdl.siputzx.my.id/api/convert?url=${link}&type=mp3`);
        let textResponse = await response.text();
        let data;
        try
        {
          data = JSON.parse(textResponse);
        }
        catch (err)
        {
          console.error('❌ Respons bukan JSON:', textResponse);
          RepshoNheError("Terjadi kesalahan pada API. Silakan coba lagi nanti.");
          return;
        }
        console.log('📥 Respons diterima dari API:', data);
        if (data.dl)
        {
          const fileUrl = data.dl;
          const fileName = 'audio.mp3';
          const fixedFileName = 'fixed_audio.mp3';
          const filePath = path.join(__dirname, fileName);
          const fixedFilePath = path.join(__dirname, fixedFileName);
          console.log('⏳ Mengunduh file audio...');
          const writer = fs.createWriteStream(filePath);
          const audioResponse = await axios(
          {
            url: fileUrl,
            method: 'GET',
            responseType: 'stream',
          });
          audioResponse.data.pipe(writer);
          writer.on('finish', () =>
          {
            console.log('✅ File audio berhasil diunduh, memulai proses konversi...');
            // Konversi ulang file audio menggunakan ffmpeg
            ffmpeg(filePath).toFormat('mp3').on('end', () =>
            {
              console.log('✅ File audio berhasil dikonversi.');
              // Kirim file audio yang telah dikonversi
              shoNhe.sendMessage(m.chat,
              {
                audio: fs.readFileSync(fixedFilePath),
                mimetype: 'audio/mpeg',
                fileName: `${data.title}.mp3`,
              },
              {
                quoted: hw
              });
              // Hapus file sementara
              fs.unlinkSync(filePath);
              fs.unlinkSync(fixedFilePath);
              console.log('✅ File audio berhasil dikirim dan file sementara dihapus.');
            }).on('error', (err) =>
            {
              console.error('❌ Gagal mengonversi file audio:', err.message);
              RepshoNheError('Gagal memproses ulang file audio.');
            }).save(fixedFilePath);
          });
          writer.on('error', (err) =>
          {
            console.error('❌ Gagal mengunduh file audio:', err.message);
            RepshoNheError('Gagal mengunduh file audio.');
          });
        }
        else
        {
          console.log('❌ Gagal mengambil audio. URL tidak valid.');
          RepshoNheError("Gagal mengambil audio. Silakan periksa URL.");
        }
      }
      catch (err)
      {
        console.error('❌ Terjadi kesalahan:', err.message);
        RepshoNheError(`Error: ${err.message}`);
      }
    }
    if (!global.public)
    {
      if (!m.key.fromMe && !isShoNheOwn) return; // Abaikan jika bukan pesan bot atau owner
    }
    // Blokir command di chat pribadi saat Group Only aktif
    if (global.groupOnly && !m.isGroup && !isShoNheOwn) return console.log('⚠️ GROUP ONLY')
    if (global.privateChatOnly && m.isGroup && !isShoNheOwn) return console.log('⚠️ PRIVATE CHAT ONLY');
    // func db
    // Load user database from JSON file
    function loadUserDatabase()
    {
      let rawdata = fs.readFileSync('database/user.json');
      return JSON.parse(rawdata);
    }
    // Save updated user database back to JSON file
    function saveUserDatabase(database)
    {
      fs.writeFileSync('database/user.json', JSON.stringify(database, null, 2));
    }
    const userFirePath = './database/userFire.json';
    // Fungsi untuk membaca database
    function loadUserFire()
    {
      if (!fs.existsSync(userFirePath))
      {
        fs.writeFileSync(userFirePath, JSON.stringify(
        {}));
      }
      return JSON.parse(fs.readFileSync(userFirePath));
    }
    // Fungsi untuk menyimpan database
    function saveUserFire(db)
    {
      fs.writeFileSync(userFirePath, JSON.stringify(db, null, 2));
    }

    function topRank() {
    const db = loadUserFire();
    const sortedUsers = Object.entries(db)
        .sort((a, b) => b[1].level - a[1].level) // Urutkan berdasarkan level
        .slice(0, 3); // Ambil 3 teratas

    if (sortedUsers.length === 0) return { text: "🚀 Tidak ada data peringkat saat ini.", mentions: [] };

    let message = "🏆 *TOP 3 RANKING FIRE* 🔥\n\n";
    let mentions = [];

    sortedUsers.forEach(([user, data], index) => {
        const formattedUser = `@${user.split('@')[0]}`;
        mentions.push(user); // Tambahkan ke mentions
        message += `🥇 #${index + 1} - ${formattedUser}\n`;
        message += `   🎮 Level: ${data.level}\n`;
        message += `   📖 EXP: ${data.exp}/${data.expTarget}\n`;
        message += `   💰 Balance: Rp${data.balance}\n\n`;
    });

    return { text: message, mentions };
}

function listRank() {
    const db = loadUserFire();
    const sortedUsers = Object.entries(db)
        .sort((a, b) => b[1].level - a[1].level); // Urutkan berdasarkan level

    if (sortedUsers.length === 0) return { text: "📜 Tidak ada data peringkat saat ini.", mentions: [] };

    let message = "📊 *LIST RANKING FIRE* 🔥\n\n";
    let mentions = [];

    sortedUsers.forEach(([user, data], index) => {
        const formattedUser = `@${user.split('@')[0]}`;
        mentions.push(user); // Tambahkan ke mentions
        message += `#${index + 1} - ${formattedUser}\n`;
        message += `   🎮 Level: ${data.level}\n`;
        message += `   📖 EXP: ${data.exp}/${data.expTarget}\n`;
        message += `   💰 Balance: Rp${data.balance}\n\n`;
    });

    return { text: message, mentions };
}
async function levelUpdate(command, sender, m) {
    const db = loadUserFire();
    if (!db[sender]) {
        db[sender] = {
            register: false,
            level: 0,
            exp: 0,
            expTarget: 10,
            commandCount: 0,
            balance: 2,
        };
    }
    const user = db[sender];
    if (user.commandCount == null) user.commandCount = 0;
    if (user.exp == null) user.exp = 0;
    if (user.level == null) user.level = 0;
    if (user.expTarget == null) user.expTarget = 10;
    if (user.balance == null) user.balance = 2;

    // Increment commands and exp
    user.commandCount += 1;
    if (user.level < 10) {
        user.exp += 1;
    }

    let levelUpMessage = null;

    // Cek apakah pengguna mencapai level baru
    if (user.level < 10 && user.exp >= user.expTarget) {
        user.level += 1; // Level up
        user.expTarget += 20; // Tambah target EXP

        try {
            // Ambil avatar pengguna
            const avatar = await shoNhe.profilePictureUrl(sender, "image").catch(() => 'https://files.catbox.moe/316j0f.jpg');

            const bgImage = "https://files.catbox.moe/ref84k.png"; // Background level-up
            const levelApiUrl = `https://api.siputzx.my.id/api/canvas/level-up?backgroundURL=${encodeURIComponent(bgImage)}&avatarURL=${encodeURIComponent(avatar)}&fromLevel=${user.level - 1}&toLevel=${user.level}&name=${encodeURIComponent(m.pushName || 'User')}`;

            // Ambil gambar dari API (buffer)
            let response = await axios.get(levelApiUrl, {
                responseType: 'arraybuffer',
                headers: { 'User-Agent': 'LevelUpBot' },
                timeout: 5000, // Timeout 5 detik
                httpsAgent: new (require('https').Agent)({
                    family: 4,
                    lookup: (hostname, options, cb) => require('dns').lookup(hostname, {
                        ...options, all: false, hints: require('dns').ADDRCONFIG,
                        family: 4, servers: ['1.1.1.1', '1.0.0.1']
                    }, cb)
                }) // Pakai Cloudflare DNS
            });

            // Struktur pesan Level-Up
            levelUpMessage = {
                text: `🌸✨ 𝐂𝐎𝐍𝐆𝐑𝐀𝐓𝐒 𝐅𝐎𝐑 𝐋𝐄𝐕𝐄𝐋 𝐔𝐏 𝐅𝐑𝐎𝐌 ${user.level - 1} to ${user.level}. 🎐\n\n🌿 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n📛 *Nama*: ${m.pushName || 'Unknown'}\n📱 *Nomor*: ${sender.split('@')[0]}\n\n🎮 *Level*: ${user.level}\n✨ *EXP*: ${user.exp}/${user.expTarget}\n💰 *Saldo*: Rp${user.balance}\n🌺 *Role*: ${user.role || 'Regular User'}\n\n🌕 𝐊𝐄𝐄𝐏 𝐑𝐀𝐈𝐒𝐈𝐍𝐆 𝐘𝐎𝐔𝐑 𝐋𝐄𝐕𝐄𝐋! 🍃`,
                image: response.data // Buffer gambar level-up
            };
        } catch (error) {
            console.error("Gagal mengambil gambar level-up:", error);
            levelUpMessage = { text: `🎉 Selamat! Kamu naik level ke ${user.level}. Tetap semangat! 🔥` };
        }
    }

    // Simpan data pengguna
    saveUserFire(db);

    return levelUpMessage;
}
    // Fungsi untuk menambah saldo (hanya bisa dilakukan oleh owner)
    function addBalance(sender, amount, owner)
    {
      const db = loadUserFire();
      if (!owner.includes(senderNumber))
      {
        return mess.owners
      }
      // Cek apakah pengguna terdaftar
      if (!db[sender])
      {
        return mess.regis
      }
      // Tambah saldo pengguna
      db[sender].balance += amount;
      saveUserFire(db);
      return `✅ Saldo sebesar Rp${amount} telah ditambahkan ke ${sender.split('@')[0]}.\n💰 Saldo sekarang: Rp${db[sender].balance}`;
    }
    // Fungsi untuk mendaftarkan user
    function registerUser(sender, role = 'user')
    {
      const db = loadUserFire();
      if (!db[sender])
      {
        db[sender] = {
          register: true,
          role: role,
          limit: role === 'owner' ? -1 : role === 'vip' ? 1000 : 100
        };
        saveUserFire(db);
        return `🎉 Anda berhasil terdaftar sebagai ${role} dengan limit ${db[sender].limit}!`;
      }
      else if (!db[sender].register)
      {
        db[sender].register = true;
        saveUserFire(db);
        return `✅ Registrasi berhasil diaktifkan.`;
      }
      else
      {
        return `⚠️ Anda sudah terdaftar sebelumnya.`;
      }
    }
    // Fungsi untuk mengecek status user
    function checkUser(sender)
    {
      const db = loadUserFire();
      if (!db[sender])
      {
        return `⚠️ Anda belum terdaftar. Silakan daftar terlebih dahulu.`;
      }
      return `ℹ️ Status Anda:\n- Role: ${db[sender].role}\n- Limit: ${db[sender].limit}\n- Register: ${db[sender].register}`;
    }
    // Baca database user fire
    function loadUserFire()
    {
      if (!fs.existsSync(userFirePath))
      {
        fs.writeFileSync(userFirePath, JSON.stringify(
        {}));
      }
      return JSON.parse(fs.readFileSync(userFirePath));
    }
    // Simpan perubahan database user fire
    function saveUserFire(db)
    {
      fs.writeFileSync(userFirePath, JSON.stringify(db, null, 2));
    }

    function claimFire(m)
    {
      const db = loadUserFire();
      const sender = m.sender;
      if (!db[sender] || !db[sender].register)
      {
        sendRegister(shoNhe, m, prefix, namabot);
        return;
      }
      const now = Date.now();
      const cooldown = 24 * 60 * 60 * 1000; // 24 jam dalam milidetik
      const lastClaim = db[sender].lastClaim || 0;
      // Cek cooldown
      if (now - lastClaim < cooldown)
      {
        const remainingTime = cooldown - (now - lastClaim);
        const hours = Math.floor(remainingTime / (60 * 60 * 1000));
        const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
        reply(`⏳ Anda sudah klaim. Coba lagi dalam ${hours} jam ${minutes} menit.`);
        return;
      }
      // Tambahkan limit berdasarkan role
      const reward = db[sender].role === 'vip' ? 50 : 20;
      db[sender].limit += reward;
      db[sender].lastClaim = now;
      saveUserFire(db);
      reply(`🎉 Anda berhasil klaim limit harian!\n🔥 Anda mendapatkan: ${reward}\n🔥 Total limit Anda: ${db[sender].limit}`);
    }

    function getFireThumbnail(limit)
    {
      const thumbnails = {
        1000: './src/role/vipRole.jpg', // VIP/Premium
        100: './src/role/100Role.jpg',
        80: './src/role/80Role.jpg',
        60: './src/role/60Role.jpg',
        40: './src/role/40Role.jpg',
        20: './src/role/20Role.jpg',
        10: './src/role/10Role.jpg',
        0: './src/role/0Role.jpg', // Untuk limit habis
        '-1': './src/role/ownerRole.jpg' // Thumbnail khusus Owner
      };
      // Thumbnail default jika file tidak ditemukan
      const defaultThumbnail = './src/role/0Role.jpg';
      // Tentukan rentang berdasarkan nilai limit
      let selectedThumbnail = defaultThumbnail;
      if (limit === -1)
      {
        selectedThumbnail = thumbnails['-1']; // Owner
      }
      else if (limit > 1000)
      {
        selectedThumbnail = thumbnails[1000]; // VIP
      }
      else if (limit >= 101 && limit <= 1000)
      {
        selectedThumbnail = thumbnails[1000]; // Rentang VIP
      }
      else if (limit >= 81 && limit <= 100)
      {
        selectedThumbnail = thumbnails[100]; // Rentang 100
      }
      else if (limit >= 61 && limit <= 80)
      {
        selectedThumbnail = thumbnails[80]; // Rentang 80
      }
      else if (limit >= 41 && limit <= 60)
      {
        selectedThumbnail = thumbnails[60]; // Rentang 60
      }
      else if (limit >= 21 && limit <= 40)
      {
        selectedThumbnail = thumbnails[40]; // Rentang 40
      }
      else if (limit >= 11 && limit <= 20)
      {
        selectedThumbnail = thumbnails[20]; // Rentang 20
      }
      else if (limit >= 1 && limit <= 10)
      {
        selectedThumbnail = thumbnails[10]; // Rentang 10
      }
      else if (limit === 0)
      {
        selectedThumbnail = thumbnails[0]; // Limit habis
      }
      // Periksa apakah file thumbnail ada
      if (fs.existsSync(selectedThumbnail))
      {
        return fs.readFileSync(selectedThumbnail);
      }
      else
      {
        console.error(`File thumbnail tidak ditemukan: ${selectedThumbnail}, menggunakan default.`);
        return fs.readFileSync(defaultThumbnail);
      }
    }

    function userFire(m, teks)
    {
      const db = loadUserFire();
      const sender = m.sender;
      // Cek apakah user sudah terdaftar
      if (!db[sender] || !db[sender].register)
      {
        sendRegister(shoNhe, m, prefix, namabot);
        return false;
      }
      // Dapatkan limit user berdasarkan role
      const userLimit = db[sender].limit;
      const reduction = db[sender].role === 'owner' ? 0 : 5; // Owner tidak ada pengurangan limit
      // Cek limit sebelum melanjutkan
      if (userLimit <= 0 && db[sender].role !== 'owner')
      {
        reply('🔥 Limit Anda sudah habis. Silakan klaim limit atau tingkatkan role Anda.');
        return false;
      }
      // Kurangi limit jika bukan owner
      if (db[sender].role !== 'owner')
      {
        db[sender].limit -= reduction;
        saveUserFire(db);
      }
      // Kirim pesan userFire
      const thumbnail = getFireThumbnail(userLimit); // Mendapatkan thumbnail sesuai limit
      shoNhe.sendMessage(m.chat,
      {
        text: teks + `\n🔥 Limit tersisa: ${db[sender].limit}`,
        contextInfo:
        {
          externalAdReply:
          {
            title: `🔥 Fire Limit`,
            body: `🔥 Anda mengurangi ${reduction} limit.`,
            previewType: "PHOTO",
            thumbnail: thumbnail,
            sourceUrl: 'https://wa.me/6288989971490'
          }
        }
      },
      {
        quoted: m
      });
      return true;
    }
    const firelos = (m, teks) =>
    {
      const db = loadUserFire();
      const sender = m.sender;
      const userLimit = db[sender]?.limit || 0; // Default 0 jika user tidak ada
      const thumbnailUrl = getFireThumbnail(userLimit);
      shoNhe.sendMessage(m.chat,
      {
        text: teks + `\n🔥 Anda tidak memiliki limit tersisa.`,
        contextInfo:
        {
          externalAdReply:
          {
            title: `🔥 Fire Limit`,
            body: `🔥 Your Fire Limits: ${userLimit}`,
            previewType: "PHOTO",
            thumbnail: thumbnailUrl,
            sourceUrl: `https://whatsapp.com/channel/0029Vb0v3F71yT264EejzJ3e`
          }
        }
      },
      {
        quoted: m
      });
    };

    function isRegistered(m)
    {
      const db = loadUserFire(); // Load database
      const sender = m.sender; // ID pengirim
      return db[sender]?.register || false; // Return true jika terdaftar, false jika tidak
    }
    const thumbFolder2 = './src/thum2/'; // Lokasi folder untuk menyimpan thumbnail
    const defaultThumbnailPath2 = './src/thum2/shoNhe.jpg'; // Lokasi thumbnail default (file lokal)
    // Membuat folder jika belum ada
    if (!fs.existsSync(thumbFolder2))
    {
      fs.mkdirSync(thumbFolder2,
      {
        recursive: true
      });
    }
    // Pastikan default thumbnail ada
    if (!fs.existsSync(defaultThumbnailPath2))
    {
      // Jika tidak ada default, Anda bisa menambahkan file default manual atau secara otomatis.
      const defaultImage2 = Buffer.from('Default Thumbnail'); // Placeholder default thumbnail
      fs.writeFileSync(defaultThumbnailPath2, defaultImage2);
    }
    // *Fungsi: Membaca semua thumbnail di folder*
    const readThumbList2 = () =>
    {
      const files2 = fs.readdirSync(thumbFolder2).filter(file => file.endsWith('.jpg'));
      return files2.map(file => (
      {
        name: path.parse(file).name, // Nama file tanpa ekstensi
        path: path.join(thumbFolder2, file), // Lokasi file lengkap
      }));
    };
    // *Fungsi: Menambahkan thumbnail*
    const addThumb2 = async (nama2, quoted2, mime2) =>
    {
      if (!/image/.test(mime2)) return 'Kirim/Reply Image dengan Caption untuk menambahkan thumbnail.';
      const fileName2 = `${thumbFolder2}${nama2}.jpg`;
      if (fs.existsSync(fileName2)) return 'Thumbnail dengan nama tersebut sudah ada.';
      const media2 = await quoted2.download(); // Unduh file media dari pesan
      fs.writeFileSync(fileName2, media2);
      return `Thumbnail dengan nama "${nama2}" berhasil ditambahkan.`;
    };
    // *Fungsi: Menghapus thumbnail*
    const delThumb2 = (nama2) =>
    {
      const fileName2 = `${thumbFolder2}${nama2}.jpg`;
      if (!fs.existsSync(fileName2)) return 'Thumbnail dengan nama tersebut tidak ditemukan.';
      fs.unlinkSync(fileName2);
      return `Thumbnail dengan nama "${nama2}" berhasil dihapus.`;
    };
    // *Fungsi: Menampilkan daftar thumbnail*
    const listThumb2 = () =>
    {
      const thumbList2 = readThumbList2();
      if (thumbList2.length === 0) return 'Tidak ada thumbnail yang tersimpan.';
      return thumbList2.map(thumb => `Nama: ${thumb.name}`).join('\n');
    };
    // *Fungsi: Mengambil thumbnail secara acak*
    const getRandomThumb2 = () =>
    {
      const thumbList2 = readThumbList2();
      if (thumbList2.length === 0)
      {
        // Jika folder kosong, gunakan default thumbnail
        return fs.readFileSync(defaultThumbnailPath2);
      }
      const randomFile2 = thumbList2[Math.floor(Math.random() * thumbList2.length)];
      return fs.readFileSync(randomFile2.path); // Return Buffer thumbnail
    };
    //===================[ FUNCTION REPLY ]=====================\\
    const aifake = {
      key:
      {
        participant: '18002428478@s.whatsapp.net',
        ...(m.chat ?
        {
          remoteJid: `status@broadcast`
        } :
        {})
      },
      message:
      {
        liveLocationMessage:
        {
          caption: `© DaTngxz"S`,
          jpegThumbnail: ""
        }
      },
    }
    const shoNhemand = body.replace(prefix, '').trim().split(/ +/).shift().toUpperCase();
    // Array emoji alam dan hewan yang baru
    const emojis = ['⚡', '🌪️', '🌊', '🫧', '💧', '🪵', '🍄', '☘️', '🍃', '🪷', '💫', '✨', '🌟', '🔥', '🪨', '🪽', '⚓', '💎', '🚀', '🛸', '✈️', '🥕', '🍓', '🐙', '🦑', '🦞', '🐣', '🐓', '🐍', '🐊', '🐉', '🐱', '🌻', '🐦‍🔥', '🐬', '🍏', '⚽', '🪀', '🔮', '🧸', '🦉', '🐾', '🦪', '🎠', '🏕️'];
    // Memilih emoji secara acak
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    // Membuat teks dengan format yang diinginkan
    const formattedshoNhemand = `${randomEmoji} ${shoNhemand}`;
    // Menyiapkan objek message untuk digunakan
    const hw = {
      key:
      {
        participant: '0@s.whatsapp.net',
        ...(m.chat ?
        {
          remoteJid: `status@broadcast`
        } :
        {})
      },
      message:
      {
        liveLocationMessage:
        {
          caption: `${formattedshoNhemand}`,
          jpegThumbnail: ""
        }
      },
      quoted: sound
    }
    const jq = {
      key:
      {
        participant: '18002428478@s.whatsapp.net',
        ...(m.chat ?
        {
          remoteJid: `status@broadcast`
        } :
        {})
      },
      message:
      {
        liveLocationMessage:
        {
          caption: `Always Use Termux⚡`,
          jpegThumbnail: ""
        }
      },
      quoted: sound
    }
    // Pastikan autotyping atau autovn aktif berdasarkan pesan yang sedang diketik
    if (botSettings.autotyping && shoNhe.public)
    {
      await shoNhe.sendPresenceUpdate('composing', m.chat);
    }
    if (botSettings.autovn && shoNhe.public)
    {
      await shoNhe.sendPresenceUpdate('recording', m.chat);
    }
    // Lokasi file JSON di folder 'database'
    const thumbListFilePath = path.join(__dirname, 'database', 'thumbList.json');
    // Fungsi untuk membaca data thumbnail dari file JSON
    const readThumbList = () =>
    {
      if (!fs.existsSync(thumbListFilePath))
      {
        // Jika file tidak ada, buat file baru dengan array kosong
        fs.writeFileSync(thumbListFilePath, JSON.stringify([]));
        return [];
      }
      const data = fs.readFileSync(thumbListFilePath, 'utf-8');
      return JSON.parse(data);
    };
    // Fungsi untuk menulis data thumbnail ke file JSON
    const writeThumbList = (thumbList) =>
    {
      fs.writeFileSync(thumbListFilePath, JSON.stringify(thumbList, null, 2));
    };
    // Fungsi untuk menambahkan thumbnail
    const addthumb = (nama, url) =>
    {
      const thumbList = readThumbList();
      // Cek apakah nama sudah ada
      if (thumbList.find(thumb => thumb.name === nama))
      {
        return 'Thumbnail dengan nama tersebut sudah ada.';
      }
      // Menambahkan thumbnail ke dalam daftar
      thumbList.push(
      {
        name: nama,
        url: url
      });
      writeThumbList(thumbList);
      return `Thumbnail dengan nama ${nama} berhasil ditambahkan.`;
    };
    // Fungsi untuk menghapus thumbnail berdasarkan nama
    const delthumb = (nama) =>
    {
      const thumbList = readThumbList();
      const index = thumbList.findIndex(thumb => thumb.name === nama);
      if (index === -1)
      {
        return 'Thumbnail dengan nama tersebut tidak ditemukan.';
      }
      thumbList.splice(index, 1);
      writeThumbList(thumbList);
      return `Thumbnail dengan nama ${nama} berhasil dihapus.`;
    };
    // Fungsi untuk menampilkan daftar thumbnail
    const listthumb = () =>
    {
      const thumbList = readThumbList();
      if (thumbList.length === 0)
      {
        return 'Tidak ada thumbnail yang tersimpan.';
      }
      return thumbList.map(thumb => `Nama: ${thumb.name}, URL: ${thumb.url}`).join('\n');
    };
    // Fungsi untuk memilih thumbnail secara random dari daftar
    const getRandomThumb = () =>
    {
      const thumbList = readThumbList();
      return thumbList[Math.floor(Math.random() * thumbList.length)]?.url || 'https://i.ibb.co.com/x6cRFN1/6cbaad220c211d8399577906a2f30856.jpg';
    };
    const reply = (teks) =>
    {
      shoNhe.sendMessage(from,
      {
        text: teks,
        contextInfo:
        {
          mentionedJid: [m.sender],
          "externalAdReply":
          {
            "title": `shoNhe BY DATNGXZ'S`,
            "body": `© DaTngxz'S`,
            "previewType": "PHOTO",
            "thumbnail": getRandomThumb2(),
            "sourceUrl": gh
          }
        }
      },
      {
        quoted: hw
      })
    }
    const reply2 = (teks) =>
    {
      shoNhe.sendMessage(from,
      {
        text: teks
      },
      {
        quoted: m
      })
    }
    //Fake quoted 
    const fpay = {
      key:
      {
        remoteJid: '0@s.whatsapp.net',
        fromMe: false,
        id: global.namabot,
        participant: '0@s.whatsapp.net'
      },
      message:
      {
        requestPaymentMessage:
        {
          currencyCodeIso4217: "USD",
          amount1000: 999999999,
          requestFrom: '0@s.whatsapp.net',
          noteMessage:
          {
            extendedTextMessage:
            {
              text: global.namabot
            }
          },
          expiryTimestamp: 999999999,
          amount:
          {
            value: 91929291929,
            offset: 1000,
            currencyCode: "USD"
          }
        }
      }
    }
    const ftroli = {
      key:
      {
        fromMe: false,
        "participant": "0@s.whatsapp.net",
        "remoteJid": "status@broadcast"
      },
      "message":
      {
        orderMessage:
        {
          itemCount: 1986,
          status: 200,
          thumbnail: getRandomThumb2(),
          surface: 200,
          message: "Rp 2.000",
          orderTitle: namaowner,
          sellerJid: '0@s.whatsapp.net'
        }
      },
      contextInfo:
      {
        "forwardingScore": 999,
        "isForwarded": true
      },
      sendEphemeral: true
    }
    const fdoc = {
      key:
      {
        participant: '0@s.whatsapp.net',
        ...(m.chat ?
        {
          remoteJid: `status@broadcast`
        } :
        {})
      },
      message:
      {
        documentMessage:
        {
          title: namabot,
          jpegThumbnail: getRandomThumb2()
        }
      }
    }
    const fvn = {
      key:
      {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ?
        {
          remoteJid: "status@broadcast"
        } :
        {})
      },
      message:
      {
        "audioMessage":
        {
          "mimetype": "audio/ogg; codecs=opus",
          "seconds": 0,
          "ptt": "true"
        }
      }
    }
    const fgif = {
      key:
      {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ?
        {
          remoteJid: "status@broadcast"
        } :
        {})
      },
      message:
      {
        "videoMessage":
        {
          "title": namabot,
          "h": packname,
          'seconds': '359996400',
          'gifPlayback': 'true',
          'caption': namaowner,
          'jpegThumbnail': getRandomThumb2()
        }
      }
    }
    const fgclink = {
      key:
      {
        participant: "0@s.whatsapp.net",
        "remoteJid": "0@s.whatsapp.net"
      },
      "message":
      {
        "groupInviteMessage":
        {
          "groupJid": "6288213840883-1616169743@g.us",
          "inviteCode": "m",
          "groupName": packname,
          "caption": `${m.pushName ? m.pushName : 'Temen shoNhe'}`,
          'jpegThumbnail': getRandomThumb2()
        }
      }
    }
    const fvideo = {
      key:
      {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ?
        {
          remoteJid: "status@broadcast"
        } :
        {})
      },
      message:
      {
        "videoMessage":
        {
          "title": namabot,
          "h": packname,
          'seconds': '0',
          'caption': `${m.pushName ? m.pushName : 'Temen shoNhe'}`,
          'jpegThumbnail': getRandomThumb2()
        }
      }
    }
    const floc = {
      key:
      {
        participant: '0@s.whatsapp.net',
        ...(m.chat ?
        {
          remoteJid: `status@broadcast`
        } :
        {})
      },
      message:
      {
        locationMessage:
        {
          name: packname,
          jpegThumbnail: getRandomThumb2()
        }
      }
    }
    const fkontak = {
      key:
      {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ?
        {
          remoteJid: `status@broadcast`
        } :
        {})
      },
      message:
      {
        'contactMessage':
        {
          'displayName': namaowner,
          'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${namaowner},;;;\nFN:${namaowner}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`,
          'jpegThumbnail': getRandomThumb2(),
          thumbnail: getRandomThumb2(),
          sendEphemeral: true
        }
      }
    }
    const fakestatus = {
      key:
      {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ?
        {
          remoteJid: "status@broadcast"
        } :
        {})
      },
      message:
      {
        "imageMessage":
        {
          "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
          "mimetype": "image/jpeg",
          "caption": packname,
          "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
          "fileLength": "28777",
          "height": 1080,
          "width": 1079,
          "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
          "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
          "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
          "mediaKeyTimestamp": "1610993486",
          "jpegThumbnail": fs.readFileSync('./ShoNheMedia/image/owner.jpg'),
          "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
        }
      }
    }
    const frpayment = {
      key:
      {
        remoteJid: '0@s.whatsapp.net',
        fromMe: false,
        id: `${namaowner}`,
        participant: '0@s.whatsapp.net'
      },
      message:
      {
        requestPaymentMessage:
        {
          currencyCodeIso4217: "USD",
          amount1000: 999999999,
          requestFrom: '0@s.whatsapp.net',
          noteMessage:
          {
            extendedTextMessage:
            {
              text: `${namabot}`
            }
          },
          expiryTimestamp: 999999999,
          amount:
          {
            value: 91929291929,
            offset: 1000,
            currencyCode: "INR"
          }
        }
      }
    }

    function capitalizeWords(str)
    {
      return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    }
    if (m.isGroup)
    {
      // Pastikan liststore ada di dalam database
      let listStore = {};
      if (fs.existsSync(listStorePath))
      {
        listStore = JSON.parse(fs.readFileSync(listStorePath, 'utf8'));
      }
      // Cek apakah 'body' ada di liststore grup ini
      if (listStore[m.chat] && listStore[m.chat][body])
      {
        const entry = listStore[m.chat][body]; // Mendapatkan entry untuk key 'body'
        let teks = entry.response; // Response yang dikirim
        // Mengecek jika ada gambar
        if (entry.img)
        {
          shoNhe.sendMessage(m.chat,
          {
            image:
            {
              url: entry.img // Mengirim gambar dari URL
            },
            caption: teks // Menambahkan teks sebagai caption
          },
          {
            quoted: m // Menambahkan quoted message jika ada
          });
          // Mengecek jika ada video
        }
        else if (entry.video)
        {
          shoNhe.sendMessage(m.chat,
          {
            video:
            {
              url: entry.video // Mengirim video dari URL
            },
            caption: teks // Menambahkan teks sebagai caption
          },
          {
            quoted: m // Menambahkan quoted message jika ada
          });
          // Jika tidak ada gambar atau video, kirim teks biasa
        }
        else
        {
          const contentText = {
            text: teks,
            contextInfo:
            {
              mentionedJid: [m.sender], // Menyebutkan pengirim
              forwardingScore: 999999,
              isForwarded: true,
              forwardedNewsletterMessageInfo:
              {
                newsletterName: namach, // Nama saluran
                newsletterJid: idsaluran, // Jid saluran
              },
              externalAdReply:
              {
                showAdAttribution: true,
                containsAutoReply: true,
                title: `Store List 🛍️`,
                body: namabot, // Nama bot
                previewType: "PHOTO",
                thumbnailUrl: `https://pomf2.lain.la/f/sdzl7dc2.jpg`, // Gambar thumbnail
                sourceUrl: wagc // URL untuk sumber (misalnya link grup atau toko)
              }
            }
          };
          shoNhe.sendMessage(m.chat, contentText,
          {
            quoted: m, // Menyertakan quoted message
          });
        }
      }
    }
    async function shoNherly(teks)
    {
      if (typereply === 's1')
      {
        m.reply(teks);
      }
      else if (typereply === 's2')
      {
        shoNhe.sendMessage(m.chat,
        {
          contextInfo:
          {
            externalAdReply:
            {
              showAdAttribution: true,
              title: namabot,
              body: namaowner,
              previewType: "PHOTO",
              thumbnail: getRandomThumb2(),
              sourceUrl: wagc
            }
          },
          text: teks
        },
        {
          quoted: hw
        });
      }
      else if (typereply === 's3')
      {
        shoNhe.sendMessage(m.chat,
        {
          text: teks,
          contextInfo:
          {
            externalAdReply:
            {
              showAdAttribution: true,
              title: namabot,
              body: namaowner,
              thumbnail: getRandomThumb3(),
              sourceUrl: gh,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        },
        {
          quoted: hw
        });
      }
      else if (typereply === 's4')
      {
        shoNherlyy(teks);
      }
      else if (typereply === 's5')
      {
        shoNhe.sendMessage(from,
        {
          text: teks,
          contextInfo:
          {
            mentionedJid: [m.sender],
            "externalAdReply":
            {
              "title": `BOT BY DaTngxz'S`,
              "body": `© DaTngxz'S`,
              "previewType": "PHOTO",
              "thumbnail": getRandomThumb2(),
              "sourceUrl": gh
            }
          }
        },
        {
          quoted: hw
        })
      }
    }
    async function shoNherlyy(teks)
    {
      const repshoNhe = {
        contextInfo:
        {
          forwardingScore: 1,
          isForwarded: true,
          forwardedNewsletterMessageInfo:
          {
            newsletterName: namabot,
            newsletterJid: idsaluran,
          },
          externalAdReply:
          {
            showAdAttribution: true,
            title: waktuucapan,
            body: namabot,
            thumbnail: getRandomThumb2(),
            sourceUrl: gh
          }
        },
        text: teks
      };
      return shoNhe.sendMessage(m.chat, repshoNhe,
      {
        quoted: hw,
      });
    }
    //==================[ FUNCTION WAKTU ]======================\\
    let d = new Date(new Date() + 3600000);
    let locale = "id";
    let clock = d.toLocaleTimeString(locale,
    {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    const date = moment().tz("Asia/Jakarta").format("dddd, ll");
    const time = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z");

    function getFormattedDate()
    {
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      var hours = currentDate.getHours();
      var minutes = currentDate.getMinutes();
      var seconds = currentDate.getSeconds();
    }
    const hariini = d.toLocaleDateString('id',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

    function msToTime(duration)
    {
      var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
      hours = (hours < 10) ? "0" + hours : hours
      minutes = (minutes < 10) ? "0" + minutes : minutes
      seconds = (seconds < 10) ? "0" + seconds : seconds
      return hours + " jam " + minutes + " menit " + seconds + " detik"
    }

		function msToDate(ms)
		{
			temp = ms
			days = Math.floor(ms / (24 * 60 * 60 * 1000));
			daysms = ms % (24 * 60 * 60 * 1000);
			hours = Math.floor((daysms) / (60 * 60 * 1000));
			hoursms = ms % (60 * 60 * 1000);
			minutes = Math.floor((hoursms) / (60 * 1000));
			minutesms = ms % (60 * 1000);
			sec = Math.floor((minutesms) / (1000));
			return days + " Hari " + hours + " Jam " + minutes + " Menit";
			// +minutes+":"+sec;
		}
		// Sayying time
		const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
		if (timee < "23:59:00")
		{
			var waktuucapan = 'Selamat Malam 🌃'
		}
		if (timee < "19:00:00")
		{
			var waktuucapan = 'Selamat Petang 🌆'
		}
		if (timee < "18:00:00")
		{
			var waktuucapan = 'Selamat Sore 🌅'
		}
		if (timee < "15:00:00")
		{
			var waktuucapan = 'Selamat Siang 🏙'
		}
		if (timee < "10:00:00")
		{
			var waktuucapan = 'Selamat Pagi 🌄'
		}
		if (timee < "05:00:00")
		{
			var waktuucapan = 'Selamat Subuh 🌉'
		}
		if (timee < "03:00:00")
		{
			var waktuucapan = 'Tengah Malam 🌌'
		}
		const JwbTrue = (tebak, exp, tambahan) =>
		{
			let teks = `*🎮 ${tebak} 🎮*\n\nKiw Kiww Bener 🎉\n+expFire ${exp}` + tambahan
			const context = {
				text: teks,
				contextInfo:
				{
					mentionedJid: [m.sender],
					forwardingScore: 999999,
					isForwarded: true,
					forwardedNewsletterMessageInfo:
					{
						newsletterName: namach,
						newsletterJid: idsaluran,
					},
					externalAdReply:
					{
						title: `Jawaban Benar 🥳`,
						body: tebak,
						previewType: "PHOTO",
						thumbnail: fs.readFileSync("./ShoNheMedia/image/corr.png"),
						sourceUrl: wagc
					}
				}
			};
			return shoNhe.sendMessage(m.chat, context,
			{
				quoted: m,
			});
		}
		const waktuHabis = (jawaban) =>
		{
			let teks = `Kroco, Waktu Abis🥳\n\n*Jawaban:*\n${jawaban}`
			const context = {
				text: teks,
				contextInfo:
				{
					mentionedJid: [m.sender],
					forwardingScore: 999999,
					isForwarded: true,
					forwardedNewsletterMessageInfo:
					{
						newsletterName: namach,
						newsletterJid: idsaluran,
					},
					externalAdReply:
					{
						title: `Waktu Habis ⏰`,
						body: "Dasar Kroco",
						previewType: "PHOTO",
						thumbnailUrl: `https://telegra.ph/file/030ebfc99f9cb5be7e8cb.png`,
						sourceUrl: wagc
					}
				}
			};
			return shoNhe.sendMessage(m.chat, context,
			{
				quoted: m,
			});
		}
		if (tebakgame[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebakgame[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebakgame[m.chat][2]
					JwbTrue("Tebak Game", tebakgame[m.chat][2], `\n\nKirim perintah .tebakgame\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakgame[m.chat][3])
					delete tebakgame[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tebakhero[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebakhero[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebakhero[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebakhero[m.chat][2]
					JwbTrue("Tebak Hero", tebakhero[m.chat][2], `\n\nKirim perintah .tebakhero\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakhero[m.chat][3])
					delete tebakhero[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tebakff[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebakff[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebakff[m.chat][1]))
				jawaban = json.name.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebakff[m.chat][2]
					JwbTrue("Tebak Free Fire", tebakff[m.chat][2], `\n\nKirim perintah .tebakff\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakff[m.chat][3])
					delete tebakff[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tebakkabupaten[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebakkabupaten[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebakkabupaten[m.chat][1]))
				jawaban = json.title.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebakkabupaten[m.chat][2]
					JwbTrue("Tebak Kabupaten", tebakkabupaten[m.chat][2], `\n\nKirim perintah .tebakkabupaten\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkabupaten[m.chat][3])
					delete tebakkabupaten[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tebakjkt48[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebakjkt48[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebakjkt48[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebakjkt48[m.chat][2]
					JwbTrue("Tebak JKT48", tebakjkt48[m.chat][2], `\n\nKirim perintah .tebakjkt48\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakjkt48[m.chat][3])
					delete tebakjkt48[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tebakhewan[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebakhewan[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebakhewan[m.chat][1]))
				jawaban = json.title.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebakhewan[m.chat][2]
					JwbTrue("Tebak Hewan", tebakhewan[m.chat][2], `\n\nKirim perintah .tebakhewan\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakhewan[m.chat][3])
					delete tebakhewan[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tebakml[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebakml[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebakml[m.chat][1]))
				jawaban = json.title.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebakml[m.chat][2]
					JwbTrue("Tebak Sound ML", tebakml[m.chat][2], `\n\nKirim perintah .tebakml\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakml[m.chat][3])
					delete tebakml[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tebakchara[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebakchara[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebakchara[m.chat][1]))
				jawaban = json.name.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebakchara[m.chat][2]
					JwbTrue("Tebak Anime", tebakchara[m.chat][2], `\n\nKirim perintah .tebakchara\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakchara[m.chat][3])
					delete tebakchara[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tebaklogo[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebaklogo[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebaklogo[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebaklogo[m.chat][2]
					JwbTrue("Tebak Logo", tebaklogo[m.chat][2], `\n\nKirim perintah .tebaklogo\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaklogo[m.chat][3])
					delete tebaklogo[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tebakaplikasi[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebakaplikasi[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebakaplikasi[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebakaplikasi[m.chat][2]
					JwbTrue("Tebak Aplikasi", tebakaplikasi[m.chat][2], `\n\nKirim perintah .tebakaplikasi\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakaplikasi[m.chat][3])
					delete tebakaplikasi[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tebakgambar[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebakgambar[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebakgambar[m.chat][2]
					JwbTrue("Tebak Gambar", tebakgambar[m.chat][2], `\n\nKirim perintah .tebakgambar\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakgambar[m.chat][3])
					delete tebakgambar[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tebakkata[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebakkata[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebakkata[m.chat][2]
					JwbTrue("Tebak Kata", tebakkata[m.chat][2], `\n\nKirim perintah .tebakkata\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkata[m.chat][3])
					delete tebakkata[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (asahotak[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == asahotak[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(asahotak[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += asahotak[m.chat][2]
					JwbTrue("Asah Otak", asahotak[m.chat][2], `\n\nKirim perintah .asahotak\nuntuk bermain lagi 🎮`)
					clearTimeout(asahotak[m.chat][3])
					delete asahotak[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (lengkapikalimat[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == lengkapikalimat[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(lengkapikalimat[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += lengkapikalimat[m.chat][2]
					JwbTrue("Lengkapi Kalimat", lengkapikalimat[m.chat][2], `\n\nKirim perintah .lengkapikalimat\nuntuk bermain lagi 🎮`)
					clearTimeout(lengkapikalimat[m.chat][3])
					delete lengkapikalimat[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tebakbendera[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebakbendera[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
				jawaban = json.name.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebakbendera[m.chat][2]
					JwbTrue("Tebak Bendera", tebakbendera[m.chat][2], `\n\nKirim perintah .tebakbendera\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakbendera[m.chat][3])
					delete tebakbendera[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (caklontong[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == caklontong[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += caklontong[m.chat][2]
					JwbTrue("Cak Lontong", caklontong[m.chat][2], `\n\nKirim perintah .caklontong\nuntuk bermain lagi 🎮`)
					clearTimeout(caklontong[m.chat][3])
					delete caklontong[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (susunkata[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == susunkata[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += susunkata[m.chat][2]
					JwbTrue("Susun Kata", susunkata[m.chat][2], `\n\nKirim perintah .susunkata\nuntuk bermain lagi 🎮`)
					clearTimeout(susunkata[m.chat][3])
					delete susunkata[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tebakkalimat[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebakkalimat[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebakkalimat[m.chat][2]
					JwbTrue("Tebak Kalimat", tebakkalimat[m.chat][2], `\n\nKirim perintah .tebakkalimat\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkalimat[m.chat][3])
					delete tebakkalimat[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (siapaaku[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == siapaaku[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += siapaaku[m.chat][2]
					JwbTrue("Tebak Siapa", siapaaku[m.chat][2], `\n\nKirim perintah .tebaksiapa\nuntuk bermain lagi 🎮`)
					clearTimeout(siapaaku[m.chat][3])
					delete siapaaku[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tekateki[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tekateki[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tekateki[m.chat][2]
					JwbTrue("Teka Teki", tekateki[m.chat][2], `\n\nKirim perintah .tekateki\nuntuk bermain lagi 🎮`)
					clearTimeout(tekateki[m.chat][3])
					delete tekateki[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tebakkimia[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebakkimia[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
				jawaban = json.unsur.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebakkimia[m.chat][2]
					JwbTrue("Teka Kimia", tebakkimia[m.chat][2], `\n\nKirim perintah .tebakkimia\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkimia[m.chat][3])
					delete tebakkimia[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tebaklirik[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebaklirik[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebaklirik[m.chat][2]
					JwbTrue("Teka Lirik", tebaklirik[m.chat][2], `\n\nKirim perintah .tebaklirik\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaklirik[m.chat][3])
					delete tebaklirik[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		if (tebaktebakan[m.chat] && !isCmd && m.quoted)
		{
			if (m.quoted.id == tebaktebakan[m.chat][0].key.id)
			{
				let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban)
				{
					db.data.users[m.sender].uang += tebaktebakan[m.chat][2]
					JwbTrue("Teka Tebakan", tebaktebakan[m.chat][2], `\n\nKirim perintah .tebaktebakan\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaktebakan[m.chat][3])
					delete tebaktebakan[m.chat]
				}
				else if (similarity(budy.toLowerCase(), jawaban) >= threshold) shoNherly(`_Ya, Dikit Lagi!_`)
				else emote('❌');
			}
		}
		async function cekgame(gamejid)
		{
			if (tekateki[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tekateki[gamejid][0]
				})
				return true
			}
			else if (caklontong[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: caklontong[gamejid][0]
				})
				return true
			}
			else if (susunkata[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: susunkata[gamejid][0]
				})
				return true
			}
			else if (mathgame[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal Mathgame belum selesai"
				},
				{
					quoted: mathgame[gamejid][0]
				})
				return true
			}
			else if (tebaktebakan[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebaktebakan[gamejid][0]
				})
				return true
			}
			else if (tebaklirik[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebaklirik[gamejid][0]
				})
				return true
			}
			else if (tebakkimia[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebakkimia[gamejid][0]
				})
				return true
			}
			else if (siapaaku[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: siapaaku[gamejid][0]
				})
				return true
			}
			else if (tebakkalimat[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebakkalimat[gamejid][0]
				})
				return true
			}
			else if (tebakbendera[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebakbendera[gamejid][0]
				})
				return true
			}
			else if (tebakkata[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebakkata[gamejid][0]
				})
				return true
			}
			else if (asahotak[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: asahotak[gamejid][0]
				})
				return true
			}
			else if (lengkapikalimat[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: lengkapikalimat[gamejid][0]
				})
				return true
			}
			else if (tebakgame[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebakgame[gamejid][0]
				})
				return true
			}
			else if (tebakhero[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebakhero[gamejid][0]
				})
				return true
			}
			else if (tebakff[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebakff[gamejid][0]
				})
				return true
			}
			else if (tebakkabupaten[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebakkabupaten[gamejid][0]
				})
				return true
			}
			else if (tebakjkt48[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebakjkt48[gamejid][0]
				})
				return true
			}
			else if (tebakhewan[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebakhewan[gamejid][0]
				})
				return true
			}
			else if (tebakml[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebakml[gamejid][0]
				})
				return true
			}
			else if (tebakchara[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebakchara[gamejid][0]
				})
				return true
			}
			else if (tebaklogo[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebaklogo[gamejid][0]
				})
				return true
			}
			else if (tebakaplikasi[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebakaplikasi[gamejid][0]
				})
				return true
			}
			else if (tebakgambar[gamejid])
			{
				shoNhe.sendMessage(gamejid,
				{
					text: "Soal ini belum selesai"
				},
				{
					quoted: tebakgambar[gamejid][0]
				})
				return true
			}
			else
			{
				return false
			}
		}
		async function convertGifToWebP(inputPath, outputPath)
		{
			return new Promise((resolve, reject) =>
			{
				const command = `ffmpeg -i ${inputPath} -vf "scale=512:512:force_original_aspect_ratio=decrease" -c:v libwebp -q:v 80 -loop 0 ${outputPath}`;
				exec(command, (error, stdout, stderr) =>
				{
					if (error)
					{
						console.error("Error saat konversi GIF ke WebP:", stderr);
						reject("Gagal mengonversi GIF ke WebP.");
					}
					else
					{
						console.log("GIF berhasil dikonversi ke WebP:", outputPath);
						resolve(outputPath);
					}
				});
			});
		}
		async function convertImageToWebP(inputPath, outputPath)
		{
			return new Promise((resolve, reject) =>
			{
				const command = `ffmpeg -i ${inputPath} -vf "scale=512:512:force_original_aspect_ratio=decrease" -c:v libwebp -q:v 80 -loop 0 ${outputPath}`;
				exec(command, (error, stdout, stderr) =>
				{
					if (error)
					{
						console.error("Error saat konversi gambar ke WebP:", stderr);
						reject("Gagal mengonversi gambar ke WebP.");
					}
					else
					{
						console.log("Gambar berhasil dikonversi ke WebP:", outputPath);
						resolve(outputPath);
					}
				});
			});
		}
		async function convertVideoToWebP(inputPath, outputPath)
		{
			return new Promise((resolve, reject) =>
			{
				const command = `ffmpeg -i ${inputPath} -vcodec libwebp -vf "fps=15,scale=512:512:force_original_aspect_ratio=decrease" -loop 0 ${outputPath}`;
				exec(command, (error, stdout, stderr) =>
				{
					if (error)
					{
						console.error("Error saat konversi video ke WebP:", stderr);
						reject("Gagal mengonversi video ke WebP.");
					}
					else
					{
						console.log("Video berhasil dikonversi ke WebP:", outputPath);
						resolve(outputPath);
					}
				});
			});
		}
		async function addMetadataToWebP(inputPath, outputPath, packname, author)
		{
			return new Promise((resolve, reject) =>
			{
				const reader = new WebPReader();
				reader.read(inputPath).then((webp) =>
				{
					const writer = new WebPWriter();
					webp.metadata.packname = packname;
					webp.metadata.author = author;
					writer.write(outputPath, webp).then(() =>
					{
						console.log("Metadata berhasil ditambahkan ke WebP.");
						resolve(outputPath);
					}).catch(reject);
				}).catch(reject);
			});
		}
		////======================== [ A EF KA ] ===============================
		if (m.isGroup && !m.key.fromMe)
		{
			let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
			for (let ment of mentionUser)
			{
				if (checkAfkUser(ment, afk))
				{
					let getId2 = getAfkId(ment, afk)
					let getReason2 = getAfkReason(getId2, afk)
					let getTimee = Date.now() - getAfkTime(getId2, afk)
					let anu2 = ms(getTimee)
					shoNherly(`⚠️ *SISTEM PEMBERITAHUAN AFK* ⚠️  

[⚠️] *STATUS PENGGUNA*:  
- Pengguna sedang *AFK*! Hindari mengganggu atau men-tag untuk sementara waktu.  

[📌] *ALASAN*:  
- ${getReason2 || 'Tidak disebutkan'}  

[⏳] *DURASI SEJAK AFK*:  
- ${anu2.hours || 0} Jam, ${anu2.minutes || 0} Menit, ${anu2.seconds || 0} Detik  

[🛡️] *CATATAN PENTING*:  
- Pesan ini dikirim oleh sistem otomatis.  
- Data aktivitas tercatat secara real-time.  
- Setiap pelanggaran akan ditinjau lebih lanjut.  

[💻] *TIPS SISTEM*:  
- Untuk informasi lebih lanjut, tunggu hingga pengguna kembali aktif.  
- Gunakan fitur pencarian atau bantuan jika membutuhkan.  

🔍 *PEMANTAUAN SISTEM*:  
- Status pengguna dipantau dalam dimensi sistem.  
- Tidak ada aktivitas yang luput dari log kami.  
- Tetap ikuti protokol interaksi yang berlaku.  

📡 *SISTEM AKTIF*:  
- Data diperbarui dalam waktu nyata.  
- Tetap terhubung untuk pemberitahuan lebih lanjut.`)
				}
			}
			if (checkAfkUser(m.sender, afk))
			{
				let getId = getAfkId(m.sender, afk)
				let getReason = getAfkReason(getId, afk)
				let getTime = Date.now() - getAfkTime(getId, afk)
				let anu = ms(getTime)
				afk.splice(getAfkPosition(m.sender, afk), 1)
				fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
				shoNhe.sendTextWithMentions(m.chat, `⚠️ *SISTEM ALERT: KONDISI PENGGUNA* ⚠️  

Weiss @${m.sender.split('@')[0]}, masih sehat lu bro? Sistem mendeteksi status AFK-mu.  

[📌] *ALASAN*:  
- ${getReason || 'Tidak ada alasan yang diberikan'}  

[⏳] *DURASI*:  
- ${anu.hours || 0} Jam, ${anu.minutes || 0} Menit, ${anu.seconds || 0} Detik  

[🛠️] *INSTRUKSI*:  
- Jika ada kendala, segera perbarui statusmu.  
- Hindari menunda terlalu lama, sistem selalu memantau.  

[🔍] *LOG SISTEM*:  
- Status ini telah tercatat dalam log protokol.  
- Jangan abaikan pesan ini untuk menjaga kredibilitas aktivitasmu.  

[⚡] *TIPS*:  
- “Waktu terus berjalan, gunakan dengan bijak. Jangan biarkan dunia virtual mengalahkanmu.”  

📡 *STATUS SISTEM*:  
- Pemantauan berjalan secara real-time.  
- Sistem tetap terhubung hingga kamu kembali aktif.`, fvideo)
			}
		}
		//==================[ BUTTON MESSAGE ]======================\\
		async function sendButton(chat, judul, teks, button, m)
		{
			let msg = generateWAMessageFromContent(chat,
			{
				viewOnceMessage:
				{
					message:
					{
						'messageContextInfo':
						{
							'deviceListMetadata':
							{},
							'deviceListMetadataVersion': 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create(
						{
							contextInfo:
							{
								mentionedJid: [m.sender],
								forwardingScore: 1,
								isForwarded: true,
								forwardedNewsletterMessageInfo:
								{
									newsletterJid: saluran,
									newsletterName: namach,
									serverMessageId: -1
								},
								businessMessageForwardInfo:
								{
									businessOwnerJid: shoNhe.decodeJid(shoNhe.user.id)
								},
							},
							body: proto.Message.InteractiveMessage.Body.create(
							{
								text: teks
							}),
							footer: proto.Message.InteractiveMessage.Footer.create(
							{
								text: namabot
							}),
							header: proto.Message.InteractiveMessage.Header.create(
							{
								title: judul,
								subtitle: namaowner,
								hasMediaAttachment: false
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
							{
								buttons: button,
							})
						})
					}
				}
			},
			{
				quoted: m
			})
			await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
			{
				messageId: msg.key.id
			})
		}
		async function sendButtonImage(chat, judul, teks, buffer, button, hw)
		{
			const uploadFile = {
				upload: shoNhe.waUploadToServer
			};
			const imageMessage = await prepareWAMessageMedia(
			{
				image: buffer,
			}, uploadFile, );
			let msg = generateWAMessageFromContent(m.chat,
			{
				viewOnceMessage:
				{
					message:
					{
						'messageContextInfo':
						{
							'deviceListMetadata':
							{},
							'deviceListMetadataVersion': 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create(
						{
							contextInfo:
							{
								mentionedJid: [m.sender],
								forwardingScore: 1,
								isForwarded: true,
								forwardedNewsletterMessageInfo:
								{
									newsletterJid: saluran,
									newsletterName: namach,
									serverMessageId: -1
								},
								businessMessageForwardInfo:
								{
									businessOwnerJid: shoNhe.decodeJid(shoNhe.user.id)
								},
							},
							body: proto.Message.InteractiveMessage.Body.create(
							{
								text: teks
							}),
							footer: proto.Message.InteractiveMessage.Footer.create(
							{
								text: namabot
							}),
							header: proto.Message.InteractiveMessage.Header.create(
							{
								title: judul,
								subtitle: namaowner,
								imageMessage: imageMessage.imageMessage,
								hasMediaAttachment: true
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
							{
								buttons: button,
							})
						})
					}
				}
			},
			{
				quoted: hw
			})
			shoNhe.relayMessage(msg.key.remoteJid, msg.message,
			{
				messageId: msg.key.id
			})
		}
		async function sendButtonVideo(chat, judul, teks, buffer, button, m)
		{
			const uploadFile = {
				upload: shoNhe.waUploadToServer
			};
			const videoMessage = await prepareWAMessageMedia(
			{
				video: buffer,
			}, uploadFile, );
			let msg = generateWAMessageFromContent(m.chat,
			{
				viewOnceMessage:
				{
					message:
					{
						'messageContextInfo':
						{
							'deviceListMetadata':
							{},
							'deviceListMetadataVersion': 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create(
						{
							contextInfo:
							{
								mentionedJid: [m.sender],
								forwardingScore: 1,
								isForwarded: true,
								forwardedNewsletterMessageInfo:
								{
									newsletterJid: idsaluran,
									newsletterName: namach,
									serverMessageId: -1
								},
								businessMessageForwardInfo:
								{
									businessOwnerJid: shoNhe.decodeJid(shoNhe.user.id)
								},
							},
							body: proto.Message.InteractiveMessage.Body.create(
							{
								text: teks
							}),
							footer: proto.Message.InteractiveMessage.Footer.create(
							{
								text: namabot
							}),
							header: proto.Message.InteractiveMessage.Header.create(
							{
								title: judul,
								subtitle: namaowner,
								videoMessage: videoMessage.videoMessage,
								hasMediaAttachment: true
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
							{
								buttons: button,
							})
						})
					}
				}
			},
			{
				quoted: m
			})
			shoNhe.relayMessage(msg.key.remoteJid, msg.message,
			{
				messageId: msg.key.id
			})
		}
		async function sendButtonDocument(chat, judul, teks, thumb, button, m)
		{
			let msg = generateWAMessageFromContent(chat,
			{
				viewOnceMessage:
				{
					message:
					{
						'messageContextInfo':
						{
							'deviceListMetadata':
							{},
							'deviceListMetadataVersion': 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create(
						{
							contextInfo:
							{
								mentionedJid: [m.sender],
								isForwarded: true,
								forwardedNewsletterMessageInfo:
								{
									newsletterJid: idsaluran,
									newsletterName: namach,
									serverMessageId: -1
								},
								businessMessageForwardInfo:
								{
									businessOwnerJid: shoNhe.decodeJid(shoNhe.user.id)
								},
								externalAdReply:
								{
									title: waktuucapan,
									body: pushname,
									thumbnail: forpdf,
									sourceUrl: wagc,
									mediaType: 1,
									renderLargerThumbnail: true
								}
							},
							body: proto.Message.InteractiveMessage.Body.create(
							{
								text: teks
							}),
							footer: proto.Message.InteractiveMessage.Footer.create(
							{
								text: namabot
							}),
							header: proto.Message.InteractiveMessage.Header.create(
							{
								title: judul,
								thumbnailUrl: getRandomThumb3(),
								subtitle: namaowner,
								hasMediaAttachment: true,
								...(await prepareWAMessageMedia(
								{
									document: thumb,
									mimetype: 'image/png',
									fileLength: 10000000000,
									jpegThumbnail: thumb,
									fileName: namach
								},
								{
									upload: shoNhe.waUploadToServer
								}))
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
							{
								buttons: button,
							})
						})
					}
				}
			},
			{
				quoted: m
			})
			await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
			{
				messageId: msg.key.id
			})
		};
		//==================[ FUNCTION RESPON SALAH ]======================\\
		/*if (prefix && command) {
		let caseNames = getCaseNames();
		function getCaseNames() {
		const fs = require('fs');
		try {
		const data = fs.readFileSync('case.js', 'utf8');
		const casePattern = /case\s+'([^']+)'/g;
		const matches = data.match(casePattern);
		if (matches) {
		const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
		return caseNames;
		} else {
		return [];
		} } catch (err) {
		console.log('Terjadi kesalahan:', err);
		return [];
		}}
		let noPrefix = command
		let mean = didyoumean(noPrefix, caseNames);
		let sim = similarity(noPrefix, mean);
		let similarityPercentage = parseInt(sim * 100);
		if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
		let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
		shoNhe.sendMessage(m.chat,
				{
					text: response,
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						externalAdReply:
						{
							showAdAttribution: true,
							title: "TYPO DETECTz",
							body: `By Sho - Botz`,
							thumbnail: getRandomThumb3(),
							sourceUrl: "",
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				});
		}}*/
		//=================[ TEMPAT CASE DI BAWAH INI ]=================\\
		switch (command)
		{
		case 'addprodukown': {
    if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);

    const path = './database/produkown.json';

    try {
        // Cek dan buat database jika belum ada
        if (!fs.existsSync(path)) {
            fs.writeFileSync(path, JSON.stringify({}, null, 2), 'utf8');
        }

        let fileContent = fs.readFileSync(path, 'utf8').trim();
        let produkDB = fileContent ? JSON.parse(fileContent) : {};

        // Validasi input
        let argsSplit = text.split("|");
        if (argsSplit.length < 3) {
            return shoNherly('❌ Format salah. Gunakan: .addprodukown <nama>|<harga>|<deskripsi>');
        }

        let [nama, harga, deskripsi] = argsSplit.map(a => a.trim());

        // Pastikan harga adalah angka
        harga = parseInt(harga);
        if (isNaN(harga) || harga <= 0) {
            return shoNherly('❌ Harga harus berupa angka yang valid.');
        }

        // Pastikan grup memiliki daftar produk
        if (!produkDB[m.chat]) produkDB[m.chat] = { produk: [] };

        // Cek apakah produk sudah ada
        const produkExist = produkDB[m.chat].produk.some(p => p.name.toLowerCase() === nama.toLowerCase());
        if (produkExist) {
            return shoNherly(`❌ Produk *${nama}* sudah ada! Gunakan nama lain.`);
        }

        // Tambahkan produk ke database
        produkDB[m.chat].produk.push({
            name: nama,
            price: harga,
            description: deskripsi
        });

        // Simpan ke file
        await fs.promises.writeFile(path, JSON.stringify(produkDB, null, 2), 'utf8');
        shoNherly(`✅ Produk *${nama}* berhasil ditambahkan ke toko owner dengan harga Rp${harga}.`);
    } catch (error) {
        console.error('❌ Error saat memproses produk owner:', error);
        shoNherly('❌ Terjadi kesalahan saat menambahkan produk.');
    }
}
break;
case 'listprodukown': {
    const path = './database/produkown.json';

    // Cek database
    if (!fs.existsSync(path)) {
        return shoNherly('❌ Tidak ada produk di toko owner.');
    }

    let produkDB = JSON.parse(fs.readFileSync(path, 'utf8'));

    if (!produkDB[m.chat] || !produkDB[m.chat].produk.length) {
        return shoNherly('❌ Tidak ada produk tersedia di toko owner.');
    }

    let teks = "📜 *DAFTAR PRODUK OWNER*\n\n";
    produkDB[m.chat].produk.forEach((p, i) => {
        teks += `${i + 1}. *${p.name}*\n`;
        teks += `   💰 Harga: Rp${p.price}\n`;
        teks += `   📄 Deskripsi: ${p.description}\n\n`;
    });

    shoNherly(teks);
}
break;
case 'deleteprodukown': {
    if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);

    const path = './database/produkown.json';

    // Cek database
    if (!fs.existsSync(path)) {
        return shoNherly('❌ Tidak ada produk di toko owner.');
    }

    let produkDB = JSON.parse(fs.readFileSync(path, 'utf8'));

    if (!produkDB[m.chat] || !produkDB[m.chat].produk.length) {
        return shoNherly('❌ Tidak ada produk tersedia untuk dihapus.');
    }

    // Jika tidak ada input, tampilkan daftar produk dengan tombol
    if (!text) {
        let teks = "🗑️ *Pilih Produk untuk Dihapus*\n\n";
        produkDB[m.chat].produk.forEach((p, i) => {
            teks += `📌 *${i + 1}. ${p.name}*\n`;
            teks += `💰 Harga: Rp${p.price}\n`;
            teks += `📄 Deskripsi: ${p.description}\n\n`;
        });

        let button = [{
            "name": "single_select",
            "buttonParamsJson": JSON.stringify({
                "title": "🗑️ HAPUS PRODUK OWNER",
                "sections": [{
                    "title": "Klik Produk untuk Menghapus",
                    "rows": produkDB[m.chat].produk.map(p => ({
                        "header": p.name,
                        "title": `Hapus ${p.name}`,
                        "description": "Tekan untuk langsung menghapus",
                        "id": `deleteprodukown ${p.name}`
                    }))
                }]
            })
        }];

        await sendButtonImage(m.chat, "", teks, getRandomThumb2(), button, hw);
        return;
    }

    // Hapus produk yang dipilih
    let namaProduk = text.trim().toLowerCase();
    let index = produkDB[m.chat].produk.findIndex(p => p.name.toLowerCase() === namaProduk);

    if (index === -1) return shoNherly(`❌ Produk *${namaProduk}* tidak ditemukan.`);

    produkDB[m.chat].produk.splice(index, 1);
    fs.writeFileSync(path, JSON.stringify(produkDB, null, 2), 'utf8');

    shoNherly(`✅ Produk *${namaProduk}* berhasil dihapus.`);
}
break;
case 'storeownmenu': {
    let teks = `┏━━━━━━━━━━━━━━━━━━━━━━━┓\n`;
    teks += `┃  👑  *OWNER STORE*  👑  ┃\n`;
    teks += `┗━━━━━━━━━━━━━━━━━━━━━━━┛\n\n`;

    teks += `⚡ *PANDUAN PENGGUNAAN:*\n`;
    teks += `📌 Gunakan perintah di bawah untuk mengelola produk toko pemilik.\n`;
    teks += `📌 Simbol < > menandakan input yang wajib diisi.\n\n`;

    teks += `⚡ *COMMANDS:*\n`;
    teks += `📍 *Tambah Produk:*\n`;
    teks += `   ➤ \`.addprodukown <nama>|<harga>|<deskripsi>\`\n`;
    teks += `📍 *Lihat Produk:*\n`;
    teks += `   ➤ \`.listprodukown\`\n`;
    teks += `📍 *Beli Produk:*\n`;
    teks += `   ➤ \`.buyprodukown <nama_produk>\`\n`;
    teks += `📍 *Update Produk:*\n`;
    teks += `   ➤ \`.updateprodukown <nama>|<harga>|<deskripsi>\`\n`;
    teks += `📍 *Hapus Produk:*\n`;
    teks += `   ➤ \`.deleteprodukown\` (pilih dari daftar interaktif)\n\n`;

    let button = [{
        "name": "single_select",
        "buttonParamsJson": JSON.stringify({
            "title": "👑 OWNER STORE ACTIONS",
            "sections": [
                {
                    "title": "Pembelian Produk",
                    "rows": [
                        {"header": "📜 Daftar Produk", "title": "Lihat Produk", "id": "listprodukown"},
                        {"header": "🛒 Beli Produk", "title": "Beli Produk", "id": "buyprodukown"}
                    ]
                },
                {
                    "title": "Kelola Produk",
                    "rows": [
                        {"header": "➕ Tambah Produk", "title": "Tambah Produk", "id": "addprodukown"},
                        {"header": "✏️ Update Produk", "title": "Update Produk", "id": "updateprodukown"},
                        {"header": "❌ Hapus Produk", "title": "Hapus Produk", "id": "deleteprodukown"}
                    ]
                }
            ]
        })
    }];

    await sendButtonImage(m.chat, "", teks, getRandomThumb2(), button, hw);
}
break;
case 'storemenu': {
    let teks = `╔══════════════════════╗\n`;
    teks += `║  ✨ *STORE MENU* ✨  ║\n`;
    teks += `╚══════════════════════╝\n\n`;

    teks += `📢 *PANDUAN PENGGUNAAN:*\n`;
    teks += `📌 Gunakan perintah di bawah untuk mengelola produk.\n`;
    teks += `📌 Simbol < > menandakan input yang wajib diisi.\n\n`;

    teks += `💎 *MENU PRODUK UMUM:*\n`;
    teks += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    teks += `📍 *Tambah Produk:*\n`;
    teks += `   ➤ \`.addproduk <nama>|<harga>|<deskripsi>\`\n`;
    teks += `📍 *Lihat Produk:*\n`;
    teks += `   ➤ \`.listproduk\`\n`;
    teks += `📍 *Beli Produk:*\n`;
    teks += `   ➤ \`.buyproduk <nama_produk>\`\n`;
    teks += `📍 *Update Produk:*\n`;
    teks += `   ➤ \`.updateproduk <nama>|<harga>|<deskripsi>\`\n`;
    teks += `📍 *Hapus Produk:*\n`;
    teks += `   ➤ \`.deleteproduk\` (pilih dari daftar interaktif)\n\n`;

    // **Tambahan Menu Produk Owner**
    teks += `👑 *MENU PRODUK OWNER (KHUSUS ADMIN & OWNER):*\n`;
    teks += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    teks += `📍 *Lihat Produk Owner:*\n`;
    teks += `   ➤ \`.listprodukown\`\n`;
    teks += `📍 *Beli Produk Owner:*\n`;
    teks += `   ➤ \`.buyprodukown <nama_produk>\`\n`;

    let button = [{
        "name": "single_select",
        "buttonParamsJson": JSON.stringify({
            "title": "✨ STORE ACTIONS ✨",
            "sections": [
                {
                    "title": "📦 Kelola Produk Umum",
                    "rows": [
                        {"header": "➕ Tambah Produk", "title": "Tambah Produk", "id": "addproduk"},
                        {"header": "✏️ Update Produk", "title": "Update Produk", "id": "updateproduk"},
                        {"header": "❌ Hapus Produk", "title": "Hapus Produk", "id": "deleteproduk"}
                    ]
                },
                {
                    "title": "🛒 Pembelian Produk Umum",
                    "rows": [
                        {"header": "📜 Daftar Produk", "title": "Lihat Produk", "id": "listproduk"},
                        {"header": "🛒 Beli Produk", "title": "Beli Produk", "id": "buyproduk"}
                    ]
                },
                {
                    "title": "💰 Pembelian Produk Owner",
                    "rows": [
                        {"header": "📜 Daftar Produk Owner", "title": "Lihat Produk", "id": "listprodukown"},
                        {"header": "🛒 Beli Produk Owner", "title": "Beli Produk", "id": "buyprodukown"},
                        {"header": "🏭 store Owner", "title": "Store settings khusus Produk Owner", "id": "storeownmenu"}
                    ]
                }
            ]
        })
    }];

    await sendButtonImage(m.chat, "", teks, getRandomThumb2(), button, hw);
}
break;

// ================= [ HAPUS PRODUK OTOMATIS DARI TOMBOL INTERAKTIF ] ================= \\
case 'addproduk': {
    if (!isGroup) return shoNherly(mess.groups);
    if (!isBotAdmins) return shoNherly(mess.abots);
    if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);

    const args = text.trim().split('|');
    const namaProduk = args[0]?.trim() || null;
    const hargaProduk = parseInt(args[1]?.trim()) || null;
    const deskripsiProduk = args[2]?.trim() || 'Deskripsi tidak tersedia';

    if (!namaProduk || isNaN(hargaProduk)) {
        return shoNherly('❌ Format salah. Gunakan format: .addproduk <nama>|<harga>|<deskripsi>');
    }

    const listStorePath = './database/listStore.json';
    let listStore = {};

    // Membaca database jika sudah ada
    if (fs.existsSync(listStorePath)) {
        try {
            const fileContent = fs.readFileSync(listStorePath, 'utf8').trim();
            listStore = fileContent ? JSON.parse(fileContent) : {};
        } catch (error) {
            console.error('❌ Error membaca JSON:', error);
            return shoNherly('❌ Terjadi kesalahan saat membaca file produk.');
        }
    }

    // Pastikan grup sudah ada dalam database
    if (!listStore[m.chat]) listStore[m.chat] = { produk: [] };

    // Periksa apakah produk sudah ada
    const produkExist = listStore[m.chat].produk.some(p => p.name.toLowerCase() === namaProduk.toLowerCase());
    if (produkExist) {
        return shoNherly(`❌ Produk *${namaProduk}* sudah ada! Gunakan nama lain.`);
    }

    // Tambahkan produk baru ke dalam daftar
    listStore[m.chat].produk.push({
        name: namaProduk,
        price: hargaProduk,
        description: deskripsiProduk
    });

    // Simpan ke file
    try {
        fs.writeFileSync(listStorePath, JSON.stringify(listStore, null, 2), 'utf8');
        shoNherly(`✅ Produk *${namaProduk}* berhasil ditambahkan dengan harga Rp${hargaProduk}.`);
    } catch (error) {
        console.error('❌ Error saat menyimpan JSON:', error);
        shoNherly('❌ Terjadi kesalahan saat menyimpan produk baru.');
    }
}
break;
case 'deleteproduk': {
    if (!isGroup) return shoNherly(mess.groups);
    if (!isBotAdmins) return shoNherly(mess.abots);
    if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);

    const listStorePath = './database/listStore.json';
    let listStore = {};

    // Membaca database produk secara async
    if (fs.existsSync(listStorePath)) {
        try {
            const fileContent = fs.readFileSync(listStorePath, 'utf8');
            listStore = fileContent.trim() === '' ? {} : JSON.parse(fileContent);
        } catch (error) {
            console.error('❌ Error membaca JSON:', error);
            return shoNherly('❌ Terjadi kesalahan saat membaca file produk.');
        }
    } else {
        return shoNherly('❌ Database produk tidak ditemukan.');
    }

    if (!listStore[m.chat] || !Array.isArray(listStore[m.chat].produk) || listStore[m.chat].produk.length === 0) {
        return shoNherly('❌ Tidak ada produk yang tersedia untuk dihapus.');
    }

    // Jika tidak ada input produk, tampilkan daftar produk dengan tombol interaktif yang langsung menghapus
    if (!text) {
        let teks = "🗑️ *Pilih Produk untuk Dihapus*\n\n";
        listStore[m.chat].produk.forEach((p, i) => {
            teks += `📌 *${i + 1}. ${p.name}*\n`;
            teks += `💰 Harga: Rp${p.price}\n`;
            teks += `📄 Deskripsi: ${p.description}\n\n`;
        });

        let button = [{
            "name": "single_select",
            "buttonParamsJson": JSON.stringify({
                "title": "🗑️ HAPUS PRODUK",
                "sections": [{
                    "title": "Klik Produk untuk Menghapus",
                    "rows": listStore[m.chat].produk.map(p => ({
                        "header": p.name,
                        "title": `Hapus ${p.name}`,
                        "description": "Tekan untuk langsung menghapus",
                        "id": `deleteproduk ${p.name}`
                    }))
                }]
            })
        }];

        await sendButtonImage(m.chat, "", teks, getRandomThumb2(), button, hw);
        return;
    }

    // Proses otomatis penghapusan produk berdasarkan tombol yang ditekan
    const namaProduk = text.trim().toLowerCase();
    const index = listStore[m.chat].produk.findIndex(p => p.name.toLowerCase() === namaProduk);

    if (index === -1) return shoNherly(`❌ Produk *${namaProduk}* tidak ditemukan.`);

    // Hapus produk dari array
    const deletedProduct = listStore[m.chat].produk.splice(index, 1)[0];

    // Simpan perubahan ke file
    try {
        await fs.promises.writeFile(listStorePath, JSON.stringify(listStore, null, 2), 'utf8');
        shoNherly(`✅ Produk *${deletedProduct.name}* berhasil dihapus.`);
    } catch (error) {
        console.error('❌ Error saat menyimpan JSON:', error);
        shoNherly('❌ Terjadi kesalahan saat menghapus produk.');
    }
}
break;
case 'buyprodukown': {
    const produkOwnPath = './database/produkown.json';
    let produkDB = {};

    // Cek dan baca database produk owner
    if (fs.existsSync(produkOwnPath)) {
        try {
            const fileContent = fs.readFileSync(produkOwnPath, 'utf8');
            produkDB = JSON.parse(fileContent);
        } catch (error) {
            console.error('❌ Gagal membaca produk owner:', error);
            return shoNherly('❌ Gagal memuat data produk owner. Silakan coba lagi nanti.');
        }
    } else {
        return shoNherly('❌ Database produk owner tidak ditemukan.');
    }

    // Validasi ketersediaan produk dalam grup
    if (!produkDB[m.chat]?.produk?.length) {
        return shoNherly('❌ Tidak ada produk yang tersedia di toko owner.');
    }

    // Jika tidak ada argumen, tampilkan daftar produk
    if (args.length === 0) {
        let teks = "🛒 *DAFTAR PRODUK OWNER*\n\n";
        produkDB[m.chat].produk.forEach((p, i) => {
            teks += `${i + 1}. *${p.name}*\n`;
            teks += `   💵 Harga: Rp${p.price}\n`;
            teks += `   📜 Deskripsi: ${p.description}\n\n`;
        });

        const buttons = produkDB[m.chat].produk.map(p => ({
            "header": p.name,
            "title": `Rp${p.price}`,
            "description": p.description.slice(0, 25) + "...",
            "id": `buyprodukown ${p.name}`
        }));

        await sendButtonImage(
            m.chat,
            "",
            teks,
            getRandomThumb2(),
            [{
                "name": "single_select",
                "buttonParamsJson": JSON.stringify({
                    "title": "PILIH PRODUK OWNER",
                    "sections": [{ 
                        "title": "PRODUK TERSEDIA", 
                        "rows": buttons 
                    }]
                })
            }],
            hw
        );
        return;
    }

    // Proses pemilihan produk
    const namaProduk = args.join(" ").toLowerCase();
    const produk = produkDB[m.chat].produk.find(p => 
        p.name.toLowerCase() === namaProduk
    );

    if (!produk) return shoNherly('❌ Produk tidak ditemukan. Pastikan nama produk sesuai.');

    // Tampilkan detail pembelian
    let teks = "📦 *DETAIL PEMBELIAN*\n";
    teks += "────────────────────────\n";
    teks += `🔖 *Nama Produk:* ${produk.name}\n`;
    teks += `💰 *Harga:* Rp${produk.price}\n`;
    teks += `📜 *Deskripsi:* ${produk.description}\n\n`;

    // Daftar metode pembayaran
    teks += "💳 *METODE PEMBAYARAN*\n";
    teks += "────────────────────────\n";
    teks += `1. DANA        : ${global.nomordana} (${global.namadana})\n`;
    teks += `2. OVO         : ${global.nomorovo} (${global.namaovo})\n`;
    teks += `3. GoPay       : ${global.nomorgopay} (${global.namagopay})\n`;
    teks += `4. ShopeePay   : ${global.nomorshopepay} (${global.namashopepay})\n`;
    teks += `5. Seabank     : ${global.nomorseabank} (${global.namaseabank})\n`;
    teks += `6. BCA         : ${global.nomorbca} (${global.namabca})\n`;
    teks += `7. Danamon     : ${global.nomordanamon} (${global.namadanamon})\n`;
    teks += `8. QRIS        : Scan kode QR (tanpa admin)\n`;
    teks += "────────────────────────\n\n";
    teks += "⚠️ *Silakan lakukan pembayaran dalam 15 menit untuk menghindari pembatalan otomatis.*";

    // Tombol metode pembayaran
    const paymentButtons = [
        { header: "DANA", title: "Transfer DANA", id: "pay_dana" },
        { header: "OVO", title: "Transfer OVO", id: "pay_ovo" },
        { header: "GOPAY", title: "Transfer GoPay", id: "pay_gopay" },
        { header: "SHOPEEPAY", title: "Transfer ShopeePay", id: "pay_shopeepay" },
        { header: "SEABANK", title: "Transfer Seabank", id: "pay_seabank" },
        { header: "BCA", title: "Transfer BCA", id: "pay_bca" },
        { header: "DANAMON", title: "Transfer Danamon", id: "pay_danamon" },
        { header: "QRIS", title: "Scan QR Code", id: "pay_qris" }
    ];

    await sendButtonImage(
        m.chat,
        "",
        teks,
        getRandomThumb2(),
        [{
            "name": "single_select",
            "buttonParamsJson": JSON.stringify({
                "title": "PILIH METODE PEMBAYARAN",
                "sections": [{
                    "title": "Transfer/QRIS",
                    "rows": paymentButtons
                }]
            })
        }],
        hw
    );
}
break;
case 'buyproduk': {
    const listStorePath = './database/listStore.json';
    let listStore = {};

    // Cek dan baca database produk
    if (fs.existsSync(listStorePath)) {
        try {
            const fileContent = fs.readFileSync(listStorePath, 'utf8');
            listStore = JSON.parse(fileContent);
        } catch (error) {
            console.error('❌ Gagal membaca listStore:', error);
            return shoNherly('❌ Gagal memuat data produk. Silakan coba lagi nanti.');
        }
    } else {
        return shoNherly('❌ Database produk tidak ditemukan.');
    }

    // Validasi ketersediaan produk dalam grup
    if (!listStore[m.chat]?.produk?.length) {
        return shoNherly('❌ Tidak ada produk yang tersedia di grup ini.');
    }

    // Jika tidak ada argumen, tampilkan daftar produk
    if (args.length === 0) {
        let teks = "🛒 *DAFTAR PRODUK TERSEDIA*\n\n";
        listStore[m.chat].produk.forEach((p, i) => {
            teks += `${i + 1}. *${p.name}*\n`;
            teks += `   💵 Harga: Rp${p.price}\n`;
            teks += `   📜 Deskripsi: ${p.description}\n\n`;
        });

        const buttons = listStore[m.chat].produk.map(p => ({
            "header": p.name,
            "title": `Rp${p.price}`,
            "description": p.description.slice(0, 25) + "...",
            "id": `buyproduk ${p.name}`
        }));

        await sendButtonImage(
            m.chat,
            "",
            teks,
            getRandomThumb2(),
            [{
                "name": "single_select",
                "buttonParamsJson": JSON.stringify({
                    "title": "PILIH PRODUK",
                    "sections": [{ 
                        "title": "PRODUK TERSEDIA", 
                        "rows": buttons 
                    }]
                })
            }],
            hw
        );
        return;
    }

    // Proses pemilihan produk
    const namaProduk = args.join(" ").toLowerCase();
    const produk = listStore[m.chat].produk.find(p => 
        p.name.toLowerCase() === namaProduk
    );

    if (!produk) return shoNherly('❌ Produk tidak ditemukan. Pastikan nama produk sesuai.');

    // Tampilkan detail pembelian
    let teks = "📦 *DETAIL PEMBELIAN*\n";
    teks += "────────────────────────\n";
    teks += `🔖 *Nama Produk:* ${produk.name}\n`;
    teks += `💰 *Harga:* Rp${produk.price}\n`;
    teks += `📜 *Deskripsi:* ${produk.description}\n\n`;

    // Daftar metode pembayaran
    teks += "💳 *METODE PEMBAYARAN*\n";
    teks += "────────────────────────\n";
    teks += `1. DANA        : ${global.nomordana} (${global.namadana})\n`;
    teks += `2. OVO         : ${global.nomorovo} (${global.namaovo})\n`;
    teks += `3. GoPay       : ${global.nomorgopay} (${global.namagopay})\n`;
    teks += `4. QRIS        : Scan kode QR (tanpa admin)\n`;
    teks += "────────────────────────\n\n";
    teks += "⚠️ *Silakan lakukan pembayaran dalam 15 menit untuk menghindari pembatalan otomatis.*";

    // Tombol metode pembayaran
    const paymentButtons = [
        { header: "DANA", title: "Transfer DANA", id: "pay_dana" },
        { header: "OVO", title: "Transfer OVO", id: "pay_ovo" },
        { header: "GOPAY", title: "Transfer GoPay", id: "pay_gopay" },
    ];

    await sendButtonImage(
        m.chat,
        "",
        teks,
        getRandomThumb2(),
        [{
            "name": "single_select",
            "buttonParamsJson": JSON.stringify({
                "title": "PILIH METODE PEMBAYARAN",
                "sections": [{
                    "title": "Transfer/QRIS",
                    "rows": paymentButtons
                }]
            })
        }],
        hw
    );
}
break;

// ================= [ PROSES QRIS ] ================= \\
case 'addqris': {
    if (!isRegistered(m)) {
        return sendRegister(shoNhe, m, prefix, namabot);
    }
    updatePopularCommand(command);
    const levelUpMessage = levelUpdate(command, m.sender);
    if (!(await firely(m, mess.waits))) return;

    try {
        if (!m.quoted || !/image/.test(m.quoted.mtype)) {
            return shoNherly('❌ Harap reply gambar QRIS yang ingin diunggah.');
        }

        // Menambahkan pesan loading ⏳
        await shoNhe.sendMessage(m.chat, {
            react: {
                text: '⏳',
                key: m.key
            }
        });

        // Unduh media
        let media = await m.quoted.download();
        let base64Media = media.toString('base64');

        // Upload ke Imgbb
        let response = await axios.post('https://api.imgbb.com/1/upload', qs.stringify({
            expiration: 31536000000, // 1000 tahun
            key: ibbKey, // Gantilah dengan API Key Imgbb Anda
            image: base64Media
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        // Ambil URL hasil upload
        if (!response.data.success) {
            return shoNherly('❌ Gagal mengunggah QRIS. Coba lagi.');
        }

        let qrisURL = response.data.data.url;

        // Simpan URL QRIS ke database
        fs.writeFileSync('./database/qris.json', JSON.stringify({ url: qrisURL }, null, 2));

        // Kirim URL QRIS ke pengguna
        shoNherly(`✅ QRIS berhasil diunggah!\n🔗 *URL:* ${qrisURL}`);

        if (levelUpMessage) {
            await shoNhe.sendMessage(m.chat, {
                image: { url: levelUpMessage.image },
                caption: levelUpMessage.text,
                footer: "LEVEL UP🔥",
                buttons: [
                    {
                        buttonId: `${prefix}owner`,
                        buttonText: { displayText: "OWNER 👑" }
                    },
                    {
                        buttonId: `${prefix}menu`,
                        buttonText: { displayText: "MENU ⏸️" }
                    }
                ],
                viewOnce: true,
            }, { quoted: hw });
        }
    } catch (error) {
        console.error('❌ Gagal mengunggah QRIS:', error);
        shoNherly('❌ Terjadi kesalahan saat mengunggah QRIS.');
    }
}
break;
case 'pay_qris': {
    try {
        const qrisPath = './database/qris.json';

        // Cek apakah file QRIS sudah ada di database
        if (!fs.existsSync(qrisPath)) {
            return shoNherly('❌ QRIS belum tersedia. Admin perlu mengunggah QRIS dengan perintah `.addqris`.');
        }

        let qrisData = JSON.parse(fs.readFileSync(qrisPath, 'utf8'));
        if (!qrisData.url) {
            return shoNherly('❌ QRIS tidak ditemukan dalam database.');
        }

        // Instruksi pembayaran QRIS
        let teks = "🔷 *PANDUAN PEMBAYARAN QRIS*\n";
        teks += "────────────────────────\n";
        teks += "1. Buka aplikasi e-wallet (DANA, GoPay, OVO, ShopeePay, dll.).\n";
        teks += "2. Pilih menu *Scan QR* lalu arahkan ke gambar QR di bawah ini.\n";
        teks += "3. Masukkan jumlah pembayaran sesuai harga produk.\n";
        teks += "4. Konfirmasi pembayaran dengan admin setelah transfer.\n\n";
        teks += "⌛ *Batas waktu pembayaran: 15 menit.*\n";
        teks += "────────────────────────\n";
        teks += "📢 *Jika ada kendala, hubungi admin untuk bantuan lebih lanjut.*\n\n";
        teks += `🔗 *QRIS Link:* ${qrisData.url}`;

        // Kirim gambar QRIS dari URL
        await shoNhe.sendMessage(m.chat, {
            image: { url: qrisData.url },
            caption: teks
        }, { quoted: m });

    } catch (error) {
        console.error('❌ Gagal mengirim QRIS:', error);
        return shoNherly('❌ Terjadi kesalahan saat mengirim QRIS. Silakan coba lagi.');
    }
}
break;
case 'deleteqris': {
    if (!isRegistered(m)) {
        return sendRegister(shoNhe, m, prefix, namabot);
    }
    updatePopularCommand(command);

    try {
        const qrisPath = './database/qris.json';

        // Cek apakah file QRIS ada
        if (!fs.existsSync(qrisPath)) {
            return shoNherly('❌ Tidak ada QRIS yang tersimpan.');
        }

        // Menghapus file QRIS dari database
        fs.unlinkSync(qrisPath);
        shoNherly('✅ QRIS berhasil dihapus. Anda dapat mengunggah QRIS baru dengan perintah `.addqris`.');
        
    } catch (error) {
        console.error('❌ Gagal menghapus QRIS:', error);
        shoNherly('❌ Terjadi kesalahan saat menghapus QRIS.');
    }
}
break;

// PROSES PEMBAYARAN TANPA LOADING - LANGSUNG MENAMPILKAN DETAIL
async function prosesPembayaran(m, metode, nomor, nama) {
    let pembayaranTeks = `🎯 *PAYMENT REQUEST RECEIVED!* 🎯\n\n`;
    pembayaranTeks += `🔹 *SYSTEM VALIDATION COMPLETE...*\n`;
    pembayaranTeks += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    pembayaranTeks += `💳 *Payment Method:* ${metode}\n`;
    pembayaranTeks += `📞 *Account Number:* ${nomor}\n`;
    pembayaranTeks += `👤 *Account Holder:* ${nama}\n`;
    pembayaranTeks += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    pembayaranTeks += `⚠️ *ACTION REQUIRED!*\n`;
    pembayaranTeks += `📌 *Complete your payment* and send confirmation immediately.\n`;
    pembayaranTeks += `🛡 *System is monitoring transaction in real-time...*\n`;

    await shoNherly(pembayaranTeks);
}
case 'pay_dana':
    await prosesPembayaran(m, "Dana", global.nomordana, global.namadana);
    break;

case 'pay_gopay':
    await prosesPembayaran(m, "GoPay", global.nomorgopay, global.namagopay);
    break;

case 'pay_ovo':
    await prosesPembayaran(m, "Ovo", global.nomorovo, global.namaovo);
    break;


case 'pay_bca':
    await prosesPembayaran(m, "Bank BCA", global.nomorbca, global.namabca);
    break;

case 'pay_danamon':
    await prosesPembayaran(m, "Bank Danamon", global.nomordanamon, global.namadanamon);
    break;

// Fungsi delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
case 'listproduk': {
    const listStorePath = './database/listStore.json';
    let listStore = {};

    if (fs.existsSync(listStorePath)) {
        try {
            const fileContent = fs.readFileSync(listStorePath, 'utf8');
            listStore = fileContent.trim() === '' ? {} : JSON.parse(fileContent);
        } catch (error) {
            console.error('❌ Error membaca JSON:', error);
            return shoNherly('❌ Terjadi kesalahan saat membaca file produk.');
        }
    } else {
        return shoNherly('❌ File produk tidak ditemukan.');
    }

    if (!listStore[m.chat] || !Array.isArray(listStore[m.chat].produk) || listStore[m.chat].produk.length === 0) {
        return shoNherly('❌ Belum ada produk yang ditambahkan ke grup ini!');
    }

    let teks = `📦 *Daftar Produk* 📦\n\n`;
    listStore[m.chat].produk.forEach((p, i) => {
        teks += `📌 *${i + 1}. ${p.name}*\n`;
        teks += `💰 Harga: Rp${p.price}\n`;
        teks += `📄 Deskripsi: ${p.description}\n\n`;
    });

    let button = [{
        "name": "single_select",
        "buttonParamsJson": `{
            "title": "Detail Produk 🛍️",
            "sections": [{
                "title": "Informasi Produk",
                "highlight_label": "Detail",
                "rows": ${JSON.stringify(listStore[m.chat].produk.map(p => ({
                    "header": p.name,
                    "title": `Rp${p.price}`,
                    "description": p.description,
                    "id": p.name
                })))}
            }]
        }`
    }];

    await sendButtonImage(m.chat, "", teks, getRandomThumb2(), button, hw);
}
break;

case 'updateproduk': {
    if (!isGroup) return shoNherly(mess.groups);
    if (!isBotAdmins) return shoNherly(mess.abots);
    if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);

    const args = text.trim().split('|');
    const namaProduk = args[0]?.trim() || null;
    const hargaBaru = parseInt(args[1]?.trim()) || null;
    const deskripsiBaru = args[2]?.trim() || 'Deskripsi tidak tersedia';

    if (!namaProduk || isNaN(hargaBaru)) {
        return shoNherly('❌ Format salah. Gunakan format: updateproduk <nama produk>|<harga>|<deskripsi>');
    }

    const listStorePath = './database/listStore.json';
    let listStore = {};

    if (fs.existsSync(listStorePath)) {
        try {
            const fileContent = fs.readFileSync(listStorePath, 'utf8');
            listStore = fileContent.trim() === '' ? {} : JSON.parse(fileContent);
        } catch (error) {
            console.error('❌ Error membaca JSON:', error);
            return shoNherly('❌ Terjadi kesalahan saat membaca file produk.');
        }
    }

    if (!listStore[m.chat] || !Array.isArray(listStore[m.chat].produk) || listStore[m.chat].produk.length === 0) {
        return shoNherly(`❌ Tidak ada produk yang dapat diperbarui.`);
    }

    // Cari produk berdasarkan nama
    const index = listStore[m.chat].produk.findIndex(p => p.name.toLowerCase() === namaProduk.toLowerCase());

    if (index === -1) {
        return shoNherly(`❌ Produk *${namaProduk}* tidak ditemukan.`);
    }

    // Perbarui produk
    listStore[m.chat].produk[index] = {
        name: namaProduk,
        price: hargaBaru,
        description: deskripsiBaru
    };

    // Simpan perubahan
    fs.promises.writeFile(listStorePath, JSON.stringify(listStore, null, 2), 'utf8')
        .then(() => shoNherly(`✅ Produk *${namaProduk}* berhasil diperbarui dengan harga Rp${hargaBaru}.`, m))
        .catch((error) => {
            console.error('❌ Error saat menyimpan JSON:', error);
            shoNherly('❌ Terjadi kesalahan saat memperbarui produk.');
        });
}
break;

			case 'tebakgambar':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakgambar[m.chat] = [
						await shoNhe.sendMessage(m.chat,
						{
							image:
							{
								url: result.img
							},
							caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						},
						{
							quoted: m
						}), result, 250,
						setTimeout(() =>
						{
							if (tebakgambar[m.chat])
							{
								waktuHabis(result.jawaban)
								delete tebakgambar[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'jackpot': 
{
    // Memuat database pengguna
    const dbCheck = loadUserFire();
    let user = m.sender; // ID pengguna

    // Cek apakah pengguna sudah terdaftar
    if (!dbCheck[user]) {
        return shoNherly('❌ Anda belum terdaftar. Silakan daftar terlebih dahulu.');
    }

    const biayaMain = 500; // Biaya untuk bermain jackpot
    const hadiahJackpot = 10000; // Hadiah saldo jika memenangkan jackpot
    const hadiahPartisipasi = 100; // Hadiah saldo untuk partisipasi

    // Cek saldo pengguna
    let saldoPengguna = dbCheck[user].balance || 0;

    // Jika saldo tidak cukup untuk bermain
    if (saldoPengguna < biayaMain) {
        return shoNherly(`❌ Saldo Anda tidak mencukupi untuk bermain. Dibutuhkan Rp${biayaMain}, saldo Anda saat ini: Rp${saldoPengguna}.`);
    }

    // Kurangi saldo pengguna dengan biaya bermain
    saldoPengguna -= biayaMain;
    dbCheck[user].balance = saldoPengguna;

    // Simbol-simbol untuk permainan jackpot
    const simbols = ['🍒', '🍋', '🍉', '🍇', '⭐', '💎'];

    // Acak tiga simbol
    let result = [];
    for (let i = 0; i < 3; i++) {
        result.push(simbols[Math.floor(Math.random() * simbols.length)]);
    }

    // Hasil permainan
    let teks = `🎰 | ${result[0]} | ${result[1]} | ${result[2]} |\n\n`;

    // Cek apakah semua simbol sama (pengguna memenangkan jackpot)
    if (result[0] === result[1] && result[1] === result[2]) {
        teks += `🎉 SELAMAT! Anda memenangkan JACKPOT! 🎉\n`;
        teks += `Hadiah: Rp${hadiahJackpot} saldo 💰`;

        // Tambahkan hadiah jackpot ke saldo pengguna
        saldoPengguna += hadiahJackpot;

    } else {
        teks += `😢 Sayang sekali, Anda belum beruntung. Coba lagi nanti!`;
        teks += `\nAnda mendapatkan Rp${hadiahPartisipasi} saldo sebagai hadiah partisipasi 🎁`;

        // Tambahkan saldo partisipasi ke pengguna
        saldoPengguna += hadiahPartisipasi;
    }

    // Perbarui saldo pengguna di database
    dbCheck[user].balance = saldoPengguna;
    saveUserFire(dbCheck); // Fungsi untuk menyimpan data kembali ke penyimpanan

    // Tambahkan informasi sisa saldo setelah bermain
    teks += `\n\n💰 Sisa saldo Anda setelah bermain: Rp${saldoPengguna}`;

    // Kirim hasil permainan ke pengguna
    await shoNherly(teks);
}
break;
			case 'tebakgame':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakgame[m.chat] = [
						await shoNhe.sendMessage(m.chat,
						{
							image:
							{
								url: result.img
							},
							caption: `Gambar diatas adalah game?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						},
						{
							quoted: m
						}), result, 250,
						setTimeout(() =>
						{
							if (tebakgame[m.chat])
							{
								waktuHabis(result.jawaban)
								delete tebakgame[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tebakhero':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://api.shoNhe.my.id/api/tebakhero')
					let result = anu.result
					console.log("Jawaban: " + result.jawaban)
					tebakhero[m.chat] = [
						await shoNhe.sendMessage(m.chat,
						{
							image:
							{
								url: result.img
							},
							caption: `Gambar diatas adalah hero?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						},
						{
							quoted: m
						}), result, 250,
						setTimeout(() =>
						{
							if (tebakhero[m.chat])
							{
								waktuHabis(result.jawaban)
								delete tebakhero[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tebakff':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat);
				if (gamecek) return;
				if (!(await firely(m, mess.waits))) return;
				try
				{
					// Ambil data dari API
					let anu = await fetchJson('https://api.siputzx.my.id/api/games/karakter-freefire');
					let result = anu.data; // Perbaikan akses data
					console.log("Jawaban: " + result.name);
					// Inisialisasi permainan
					tebakff[m.chat] = [
						await shoNhe.sendMessage(m.chat,
						{
							image:
							{
								url: result.gambar
							}, // Perbaikan properti gambar
							caption: `Karakter Apa Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						},
						{
							quoted: m
						}),
						result,
						250, // Poin atau reward yang akan diberikan
						setTimeout(() =>
						{
							if (tebakff[m.chat])
							{
								waktuHabis(result.name); // Kirim pesan waktu habis
								delete tebakff[m.chat]; // Hapus data permainan
							}
						}, 120000) // Waktu 120 detik
					];
				}
				catch (error)
				{
					console.log("Error: " + error.message);
					await shoNhe.sendMessage(m.chat,
					{
						text: "Terjadi kesalahan, coba lagi nanti."
					},
					{
						quoted: m
					});
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'tebakkabupaten':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat);
				if (gamecek) return;
				if (!(await firely(m, mess.waits))) return;
				try
				{
					// Ambil data dari API
					let anu = await fetchJson('https://api.siputzx.my.id/api/games/kabupaten');
					let result = anu; // Tidak perlu pickRandom jika hanya satu respons
					console.log("Jawaban: " + result.title);
					// Inisialisasi permainan
					tebakkabupaten[m.chat] = [
						await shoNhe.sendMessage(m.chat,
						{
							image:
							{
								url: result.url
							}, // Properti gambar
							caption: `Logo Kabupaten Manakah ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						},
						{
							quoted: m
						}),
						result,
						250, // Poin atau reward
						setTimeout(() =>
						{
							if (tebakkabupaten[m.chat])
							{
								waktuHabis(result.title); // Kirim pesan waktu habis
								delete tebakkabupaten[m.chat]; // Hapus data permainan
							}
						}, 120000) // Waktu 120 detik
					];
				}
				catch (error)
				{
					console.log("Error: " + error.message);
					await shoNhe.sendMessage(m.chat,
					{
						text: "Terjadi kesalahan, coba lagi nanti."
					},
					{
						quoted: m
					});
				}
				}
			break
			case 'tebakjkt48':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://api.siputzx.my.id/api/games/tebakjkt')
					let result = anu.data
					console.log("Jawaban: " + result.jawaban)
					tebakjkt48[m.chat] = [
						await shoNhe.sendMessage(m.chat,
						{
							image:
							{
								url: result.gambar
							},
							caption: `Siapakah Nama Member JKT48 Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						},
						{
							quoted: m
						}), result, 250,
						setTimeout(() =>
						{
							if (tebakjkt48[m.chat])
							{
								waktuHabis(result.jawaban)
								delete tebakjkt48[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tebakhewan':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://api.siputzx.my.id/api/games/tebakhewan')
					let result = await pickRandom(anu.data)
					console.log("Jawaban: " + result.title)
					tebakhewan[m.chat] = [
						await shoNhe.sendMessage(m.chat,
						{
							image:
							{
								url: result.url
							},
							caption: `Hewan Apakah Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						},
						{
							quoted: m
						}), result, 250,
						setTimeout(() =>
						{
							if (tebakhewan[m.chat])
							{
								waktuHabis(result.title)
								delete tebakhewan[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tebakhero2':
			case 'tebakml':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://www.shoNhe.my.id/cdn/game/tebakhero2.json')
					let result = await pickRandom(anu)
					let audio = await pickRandom(result.url)
					console.log("Jawaban: " + result.title)
					let key = await shoNhe.sendMessage(m.chat,
					{
						audio:
						{
							url: audio
						},
						mimetype: 'audio/mpeg',
						ptt: true
					},
					{
						quoted: m
					})
					tebakml[m.chat] = [
						await shoNhe.sendMessage(m.chat,
						{
							text: `Siapakah Nama Karakter Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						},
						{
							quoted: key
						}), result, 250,
						setTimeout(() =>
						{
							if (tebakml[m.chat])
							{
								waktuHabis(result.title)
								delete tebakml[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tebakanime':
			case 'tebakchara':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat);
				if (gamecek) return;
				if (!(await firely(m, mess.waits))) return;
				try
				{
					// Membaca data dari file chara.json
					const charaDataPath = path.join(__dirname, 'lib', 'chara.json');
					const data = JSON.parse(fs.readFileSync(charaDataPath, 'utf8'));
					// Cek apakah data ada dan valid
					if (data && data.length > 0)
					{
						// Pilih data acak
						let result = data[Math.floor(Math.random() * data.length)].result;
						// Kirim pesan dengan gambar dan informasi karakter
						console.log("Jawaban: " + result.name)
						tebakchara[m.chat] = [
							await shoNhe.sendMessage(m.chat,
							{
								image:
								{
									url: result.image
								},
								caption: `Siapakah Nama Karakter Ini?\n\nWaktu: 120 detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
							},
							{
								quoted: m
							}),
							result,
							250,
							setTimeout(() =>
							{
								if (tebakchara[m.chat])
								{
									waktuHabis(result.name);
									delete tebakchara[m.chat];
								}
							}, 120000)
						];
					}
					else
					{
						console.log("Data tidak valid atau kosong.");
					}
				}
				catch (error)
				{
					console.log("Terjadi error:", error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'tebaklogo':
			case 'tebakaplikasi':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://api.siputzx.my.id/api/games/tebaklogo')
					let result = anu.data.data
					console.log("Jawaban: " + result.jawaban)
					tebaklogo[m.chat] = [
						await shoNhe.sendMessage(m.chat,
						{
							image:
							{
								url: result.image
							},
							caption: `*Logo Apa Ini?*\n\n${result.deskripsi}\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						},
						{
							quoted: m
						}), result, 250,
						setTimeout(() =>
						{
							if (tebaklogo[m.chat])
							{
								waktuHabis(result.jawaban)
								delete tebaklogo[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tebakaplikassi':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://www.shoNhe.my.id/cdn/game/tebakaplikasi.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakaplikasi[m.chat] = [
						await shoNhe.sendMessage(m.chat,
						{
							image:
							{
								url: result.image
							},
							caption: `Gambar diatas adalah aplikasi?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						},
						{
							quoted: m
						}), result, 250,
						setTimeout(() =>
						{
							if (tebakaplikasi[m.chat])
							{
								waktuHabis(result.jawaban)
								delete tebakaplikasi[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tebakkata':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakkata[m.chat] = [
						await shoNhe.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() =>
						{
							if (tebakkata[m.chat])
							{
								waktuHabis(result.jawaban)
								delete tebakkata[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'asahotak':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://api.siputzx.my.id/api/games/asahotak')
					let result = anu.data
					console.log("Jawaban: " + result.jawaban)
					asahotak[m.chat] = [
						await shoNhe.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() =>
						{
							if (asahotak[m.chat])
							{
								waktuHabis(result.jawaban)
								delete asahotak[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'lengkapikalimat':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/refs/heads/master/games/tebakkalimat.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					lengkapikalimat[m.chat] = [
						await shoNhe.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() =>
						{
							if (lengkapikalimat[m.chat])
							{
								waktuHabis(result.jawaban)
								delete lengkapikalimat[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'cekprofile':
			case 'profile':
			case 'cekprofil':
		case 'profil':
		{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				await emote(randomEmoji);
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				const othermenu = 
`╔══════════════════╗  
║ *PROFIL LEVEL ANDA*            ║  
╚══════════════════╝  

📛 *Nama*       : ${m.pushName || 'Tidak diketahui'}  
📱 *Nomor*      : ${m.sender.split('@')[0]}  

╭───────•✧✧✧•───────╮  
🎮 *Level*      : ${user.level || 0}  
✨ *Exp*        : ${user.exp || 0}/${user.expTarget || 10}  
💰 *Saldo*      : Rp${user.balance || 0}  
📊 *Command*    : ${user.commandCount || 0}  
💎 *Role*       : ${user.role || 'user'} 
🔥 *Limit*      : ${limitDisplay}
╰───────•✧✧✧•───────╯  

📡 *Sistem Catatan*:  
"Data Anda telah diperbarui secara real-time. Teruslah aktif dan eksplorasi lebih banyak fitur!"`;
const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴘʀᴏғɪʟ ᴀɴᴅᴀ${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 10)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				const tombol = [
			 ];
				// Kirim pesan dengan gambar dan tombol
				sendButtonImage(m.chat, `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`, othermenu, getRandomThumb2(), tombol, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'ceksaldo':
			{
				const dbCheck = loadUserFire();
				let user = m.sender;
				if (!dbCheck[user])
				{
					return shoNherly('❌ Anda belum terdaftar. Silakan daftar terlebih dahulu.');
				}
				shoNherly(`💰 Saldo Anda saat ini: Rp${dbCheck[user].balance}`);
				}
			break
			case 'sc':
			case 'script':
			{
			if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
			
				if (m.isGroup) return shoNherly(mess.privates);
				const db = loadUserFire();
				let sender = m.sender;
				// Periksa apakah pengguna sudah terdaftar
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				let hargaScript = 50000;
				// Periksa saldo pengguna
				if (!db[sender] || db[sender].balance < hargaScript)
				{
					return shoNherly(`---------SCRIPT KYY•STORE---------

https://github.com/RizkiBotz/kyy-botz

*SCRIPT KYY•STORE SUDAH SHARE VIA GITHUB*

•FITUR-FITUR:
> STORE MENU 
> NSFW MENU 18+
> STORE OWN MENU
> PAYMENT AUTOMATION
> AI MENU
> BRAT 
> QC?
> JACKPOT?
> FITUR LANGKA `);
				}
				
				// Kurangi saldo jika mencukupi
				db[sender].balance -= hargaScript;
				saveUserFire(db);
				// Kirim file script no enc
				let filePath = './scret/sc/kyyBotz.zip'; // Path file yang akan dikirim
				shoNhe.sendMessage(m.chat,
				{
					document:
					{
						url: filePath
					},
					mimetype: 'application/zip',
					fileName: 'kyyBotz.zip',
					caption: `✅ Pembelian berhasil!\n✅ Node_modules\n🎉 Anda telah membeli script no enc.\n` + `💰 Sisa saldo Anda: Rp${db[sender].balance}`
				},
				
				{
					quoted: m
				});
				shoNherly('📂 File sedang dikirim, mohon tunggu sebentar.');
				
			}
			break;
			case 'tebakbendera':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakbendera[m.chat] = [
						await shoNhe.sendMessage(m.chat,
						{
							image:
							{
								url: result.img
							},
							caption: `Gambar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						},
						{
							quoted: m
						}), result, 250,
						setTimeout(() =>
						{
							if (tebakbendera[m.chat])
							{
								waktuHabis(result.name)
								delete tebakbendera[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tebakkalimat':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakkalimat[m.chat] = [
						await shoNhe.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() =>
						{
							if (tebakkalimat[m.chat])
							{
								waktuHabis(result.jawaban)
								delete tebakkalimat[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tebaksiapa':
			case 'siapaaku':
			case 'siapakahaku':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					siapaaku[m.chat] = [
						await shoNhe.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() =>
						{
							if (siapaaku[m.chat])
							{
								waktuHabis(result.jawaban)
								delete siapaaku[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tebakkimia':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.unsur)
					tebakkimia[m.chat] = [
						await shoNhe.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() =>
						{
							if (tebakkimia[m.chat])
							{
								waktuHabis(result.unsur)
								delete tebakkimia[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tebaklirik':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaklirik[m.chat] = [
						await shoNhe.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() =>
						{
							if (tebaklirik[m.chat])
							{
								waktuHabis(result.jawaban)
								delete tebaklirik[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tebaktebakan':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaktebakan[m.chat] = [
						await shoNhe.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik_ *.nyerah* _Untuk Menyerah..._\n_Ketik_ *.bantuan* _Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() =>
						{
							if (tebaktebakan[m.chat])
							{
								waktuHabis(result.jawaban)
								delete tebaktebakan[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'susunkata':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					susunkata[m.chat] = [
						await shoNhe.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik_ *.nyerah* _Untuk Menyerah..._\n_Ketik_ *.bantuan* _Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() =>
						{
							if (susunkata[m.chat])
							{
								waktuHabis(result.jawaban)
								delete susunkata[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'caklontong':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					caklontong[m.chat] = [
						await shoNhe.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik_ *.nyerah* _Untuk Menyerah..._\n_Ketik_ *.bantuan* _Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() =>
						{
							if (caklontong[m.chat])
							{
								waktuHabis(result.jawaban)
								delete caklontong[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tekateki':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const gamecek = await cekgame(m.chat)
				if (gamecek) return
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tekateki[m.chat] = [
						await shoNhe.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik_ *.nyerah* _Untuk Menyerah..._\n_Ketik_ *.bantuan* _Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() =>
						{
							if (tekateki[m.chat])
							{
								waktuHabis(result.jawaban)
								delete tekateki[m.chat]
							}
						}, 120000)
					]
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'bantuan':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				try
				{
					if (m.chat in tebakgambar)
					{
						let json = tebakgambar[m.chat][1]
						shoNherly('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakgame)
					{
						let json = tebakgame[m.chat][1]
						shoNherly('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakhero)
					{
						let json = tebakhero[m.chat][1]
						shoNherly('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakff)
					{
						let json = tebakff[m.chat][1]
						shoNherly('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkabupaten)
					{
						let json = tebakkabupaten[m.chat][1]
						shoNherly('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakjkt48)
					{
						let json = tebakjkt48[m.chat][1]
						shoNherly('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakhewan)
					{
						let json = tebakhewan[m.chat][1]
						shoNherly('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakml)
					{
						let json = tebakml[m.chat][1]
						shoNherly('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakchara)
					{
						let json = tebakchara[m.chat][1]
						shoNherly('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaklogo)
					{
						let json = tebaklogo[m.chat][1]
						shoNherly('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakaplikasi)
					{
						let json = tebakaplikasi[m.chat][1]
						shoNherly('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkata)
					{
						let json = tebakkata[m.chat][1]
						shoNherly('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in asahotak)
					{
						let json = asahotak[m.chat][1]
						shoNherly('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in lengkapikalimat)
					{
						let json = lengkapikalimat[m.chat][1]
						shoNherly('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakbendera)
					{
						let json = tebakbendera[m.chat][1]
						shoNherly('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkalimat)
					{
						let json = tebakkalimat[m.chat][1]
						shoNherly('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in siapaaku)
					{
						let json = siapaaku[m.chat][1]
						shoNherly('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkimia)
					{
						let json = tebakkimia[m.chat][1]
						shoNherly('```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaklirik)
					{
						let json = tebaklirik[m.chat][1]
						shoNherly('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaktebakan)
					{
						let json = tebaktebakan[m.chat][1]
						shoNherly('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in susunkata)
					{
						let json = susunkata[m.chat][1]
						shoNherly('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in caklontong)
					{
						let json = caklontong[m.chat][1]
						shoNherly('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tekateki)
					{
						let json = tekateki[m.chat][1]
						shoNherly('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'nyerah':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				try
				{
					if (m.chat in siapaaku)
					{
						clearTimeout(siapaaku[m.chat][3])
						delete siapaaku[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebakkalimat)
					{
						clearTimeout(tebakkalimat[m.chat][3])
						delete tebakkalimat[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebakbendera)
					{
						clearTimeout(tebakbendera[m.chat][3])
						delete tebakbendera[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebakkata)
					{
						clearTimeout(tebakkata[m.chat][3])
						delete tebakkata[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in asahotak)
					{
						clearTimeout(asahotak[m.chat][3])
						delete asahotak[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in lengkapikalimat)
					{
						clearTimeout(lengkapikalimat[m.chat][3])
						delete lengkapikalimat[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebakgame)
					{
						clearTimeout(tebakgame[m.chat][3])
						delete tebakgame[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebakhero)
					{
						clearTimeout(tebakhero[m.chat][3])
						delete tebakhero[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebakff)
					{
						clearTimeout(tebakff[m.chat][3])
						delete tebakff[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebakkabupaten)
					{
						clearTimeout(tebakkabupaten[m.chat][3])
						delete tebakkabupaten[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebakjkt48)
					{
						clearTimeout(tebakjkt48[m.chat][3])
						delete tebakjkt48[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebakhewan)
					{
						clearTimeout(tebakhewan[m.chat][3])
						delete tebakhewan[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebakml)
					{
						clearTimeout(tebakml[m.chat][3])
						delete tebakml[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebakchara)
					{
						clearTimeout(tebakchara[m.chat][3])
						delete tebakchara[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebaklogo)
					{
						clearTimeout(tebaklogo[m.chat][3])
						delete tebaklogo[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebakaplikasi)
					{
						clearTimeout(tebakaplikasi[m.chat][3])
						delete tebakaplikasi[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebakkimia)
					{
						clearTimeout(tebakkimia[m.chat][3])
						delete tebakkimia[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebaklirik)
					{
						clearTimeout(tebaklirik[m.chat][3])
						delete tebaklirik[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebaktebakan)
					{
						clearTimeout(tebaktebakan[m.chat][3])
						delete tebaktebakan[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in susunkata)
					{
						clearTimeout(susunkata[m.chat][3])
						delete susunkata[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in caklontong)
					{
						clearTimeout(caklontong[m.chat][3])
						delete caklontong[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tebakgambar)
					{
						clearTimeout(tebakgambar[m.chat][3])
						delete tebakgambar[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
					if (m.chat in tekateki)
					{
						clearTimeout(tekateki[m.chat][3])
						delete tekateki[m.chat]
						return shoNhe.sendMessage(m.chat,
						{
							text: `_Lemahhh_ 😏`
						},
						{
							quoted: m
						})
					}
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'populer':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Pisahkan data populer menjadi command dan AI
				let commands = Object.entries(popularData).filter(([cmd]) => cmd !== 'ai') // Eksklusi AI
					.sort((a, b) => b[1] - a[1]) // Urutkan berdasarkan jumlah penggunaan
					.slice(0, 4) // Ambil 4 teratas
					.map(([cmd, count]) => `${c}${prefix}${cmd} ${count}${c}`); // Format per elemen
				// Format untuk command menjadi dua kolom
				let formattedCommandList = commands.length ? commands.reduce((rows, current, index) =>
					{
						if (index % 2 === 0)
						{
							rows.push([current]); // Tambah elemen baru
						}
						else
						{
							rows[rows.length - 1].push(current); // Tambah ke baris terakhir
						}
						return rows;
					}, []).map(row => row.join(` ${c}|${c} `)) // Gabungkan elemen dalam satu baris dengan " || "
					.join('\n') // Gabungkan semua baris dengan newline
					: 'Belum ada data command populer.';
				// Tambahkan pesan untuk AI (jika diperlukan)
				let aiMessage = popularData.ai ? `${c}AI telah digunakan sebanyak ${popularData.ai} kali.${c}` : `${c}AI belum digunakan.${c}`;
				// Gabungkan hasil akhir
				let formattedPopularList = `${formattedCommandList}\n\n${aiMessage}`;
				// Gunakan formattedPopularList di balasan
				shoNherly(`Statistik penggunaan:\n\n${formattedPopularList}`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'githubstalk':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly(`⚠️ Gunakan dengan cara: ${prefix + command} *username github*\n\n🤔 *Contohnya:*\n\n${prefix + command} kyy-store`);
				if (!(await firely(m, mess.waits))) return;
				try
				{
					const userInfo = await githubstalk(text);
					console.log(userInfo);
					shoNherly(`🧑‍💻 *Username:* ${userInfo.username || 'Anonim'}\n🌟 *Nickname:* ${userInfo.nickname || 'Anonim'}\n📝 *Bio:* ${userInfo.bio || 'Tidak tersedia'}\n🆔 *ID:* ${userInfo.id}\n🔑 *NodeID:* ${userInfo.nodeId}\n🔗 *Url:* ${userInfo.url}\n🏷️ *Type:* ${userInfo.type}\n👑 *Admin:* ${userInfo.admin ? 'Ya' : 'Tidak'}\n🏢 *Company:* ${userInfo.company || 'Tidak ada'}\n🌐 *Blog:* ${userInfo.blog || 'Tidak ada'}\n📍 *Location:* ${userInfo.location || 'Tidak diketahui'}\n📧 *Email:* ${userInfo.email || 'Tidak tersedia'}\n📚 *Public Repo:* ${userInfo.public_repo}\n🎁 *Public Gists:* ${userInfo.public_gists}\n👥 *Followers:* ${userInfo.followers}\n➕ *Following:* ${userInfo.following}\n🕰️ *Created At:* ${userInfo.created_at}\n🔄 *Updated At:* ${userInfo.updated_at}`);
				}
				catch (err)
				{
					console.error(err);
					shoNherly(`❌ Ada masalah waktu ambil data GitHub, Bro! Coba lagi nanti ya 🥺`);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'npmstalk':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly(`⚠️ Gunakan dengan cara: ${prefix + command} *nama package npm*\n\n🤔 *Contohnya:*\n\n${prefix + command} axios`);
				if (!(await firely(m, mess.waits))) return;
				try
				{
					// First, check if the package exists
					const npmInfo = await npmstalk(text);
					if (!npmInfo)
					{
						return shoNherly(`❌ Package ${text} tidak ditemukan di NPM.`);
					}
					shoNherly(`📦 *Package:* ${npmInfo.name}\n🔢 *Versi Terbaru:* ${npmInfo.versionLatest}\n📅 *Waktu Terbit:* ${npmInfo.publishTime}\n🔧 *Dependencies Terbaru:* ${npmInfo.latestDependencies}`);
				}
				catch (err)
				{
					console.error(err);
					if (err.response && err.response.status === 404)
					{
						shoNherly(`❌ Package ${text} tidak ditemukan di NPM.`);
					}
					else
					{
						shoNherly(`❌ Ada masalah waktu ambil data dari NPM, Bro! Coba lagi nanti ya 🥺`);
					}
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'gddl':
			case 'gdrivedl':  
			case 'gdrive':
			case 'googledrivedl':
			case 'googledrivedownload':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly(`Gunakan dengan cara ${prefix + command} *url*`)
				if (!text.includes('drive')) return shoNherly('Link nggak valid')
				if (!(await firely(m, mess.waits))) return; // Jika limit habis, proses berhenti di sini
				try
				{
					const res = await GDrive(text);
					if (res.error) return shoNherly('URL tidak valid, periksa ulang apakah akses ke URL sudah public?')
					shoNhe.sendMessage(m.chat,
					{
						document:
						{
							url: res.downloadUrl
						},
						mimetype: res.mimetype,
						fileName: res.fileName,
						caption: `*GOOGLE DRIVE*\n\n*Nama:* ${res.fileName}\n*Size:* ${res.fileSize}\n*Type:* ${res.mimetype}`
					},
					{
						quoted: m
					})
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'resetpop':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners)
				resetPopularCommands(); // Reset data
				shoNherly('Data fitur populer telah direset.');
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			// Penanganan perintah "script"
			

			case 'afk':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups); // Cek apakah perintah dijalankan di grup
				if (isAfkOn) return; // Cek apakah pengguna sudah dalam mode AFK
				// Tentukan alasan AFK
				let reason = text ? text : 'Lagi BAB bjir';
				// Tambahkan pengguna ke daftar AFK
				addAfkUser(m.sender, Date.now(), reason, afk);
				// Kirim pesan konfirmasi dengan mention
				shoNhe.sendTextWithMentions(m.chat, `🌙 *AFK MODE AKTIF!* 🌙  

👤 *Pengguna*: @${m.sender.split('@')[0]}  
💬 *Status*: Saat ini sedang *AFK*!  

📌 *Alasan*:  
- ${reason || 'Tidak dijelaskan, mungkin rahasia besar.'}  

⏳ *Durasi AFK*:  
- Sistem mendeteksi bahwa pengguna telah meninggalkan tugas.  

🔒 *Catatan Sistem*:  
- "Gausah balik bang, awokwok. Tapi kalau serius, jangan lama-lama ya!"  

🔍 *PENGAWASAN*:  
- Sistem mencatat semua aktivitas terkait pengguna ini.  
- Hindari gangguan lebih lanjut sampai status AFK berakhir.  

📡 *INFO*:  
- Status ini akan diperbarui jika pengguna kembali aktif.  
- Pastikan untuk melanjutkan tugas atau berinteraksi setelah kembali.`, fvideo);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'farm':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Logika fitur jika sudah terdaftar
				reply('🎉 Selamat! Anda bisa menggunakan fitur ini.');
				}
			break
			
			case 'autobio':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly('❌ Perintah ini hanya dapat digunakan oleh owner!');
				const option = text.toLowerCase();
				if (option === 'on')
				{
					if (autoBio)
					{
						shoNherly('⚠️ Auto bio sudah aktif sebelumnya!');
					}
					else
					{
						global.autoBio = true;
						shoNherly('✅ Auto bio berhasil diaktifkan!');
					}
				}
				else if (option === 'off')
				{
					if (!autoBio)
					{
						shoNherly('⚠️ Auto bio sudah dinonaktifkan sebelumnya!');
					}
					else
					{
						global.autoBio = false;
						shoNherly('✅ Auto bio berhasil dinonaktifkan!');
					}
				}
				else
				{
					shoNherly(`⚠️ Gunakan perintah:\n${prefix}autobio on\n${prefix}autobio off`);
				}
				}
			break
			case 'menu':
			case 'menu?':
			case 'menu!':
			case 'kyymenu':
			case 'menulist':
			case 'listmenu':
			case 'daftarmenu':
			     case 'help':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				await emote(randomEmoji);
				// Ambil database limit dari `cekfire`
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				// Ambil top 4 command populer
				let commands = Object.entries(popularData).filter(([cmd]) => cmd !== 'ai').sort((a, b) => b[1] - a[1]).slice(0, 4).map(([cmd, count]) => `${c}${prefix}${cmd} ${count}${c}`);
				let formattedCommandList = commands.length ? commands.reduce((rows, current, index) =>
				{
					if (index % 2 === 0)
					{
						rows.push([current]);
					}
					else
					{
						rows[rows.length - 1].push(current);
					}
					return rows;
				}, []).map(row => row.join(` | `)).join('\n') : 'Belum ada data command populer.';
				let aiMessage = popularData.ai ? `${c}${popularData.ai}${c}` : `${c}0${c}`;
				    // 🔹 Fitur Hitung Mundur Ramadhan & Idul Fitri
    function hitungMundur(targetDate) {
        let now = new Date();
        let target = new Date(targetDate);
        let selisih = target - now;

        if (selisih <= 0) return " *Hari ini!* ";

        let hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
        let jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));

        return `*${hari} hari, ${jam} jam lagi*`;
    }

    const ramadhanDate = "2025-03-01";  // Tanggal estimasi Puasa Ramadhan 1446 H
    const idulFitriDate = "2025-03-31"; // Tanggal estimasi Idul Fitri 1446 H

    let countdownRamadhan = hitungMundur(ramadhanDate);
    let countdownIdulFitri = hitungMundur(idulFitriDate);
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				// Format menu dengan limit dan register
				const shonhemenu = 
`ʜɪ ${c}@${m.sender.split('@')[0]}${c} 👋🏻

> ɪ'ᴀᴍ ᴋʏʏ-sᴛᴏʀᴇ, ᴀɴ ᴀᴅᴠᴀɴᴄᴇᴅ ᴅɪɢɪᴛᴀʟ ᴀssɪsᴛᴀɴᴛ ғʀᴏᴍ ᴛʜᴇ ᴏᴛʜᴇʀᴅɪᴍᴇɴsɪᴏɴ ᴏғ ꜱʏsᴛᴇᴍs. ᴄʀᴇᴀᴛᴇᴅ ꜰʀᴏᴍ ᴛʜᴇ ғᴏʀɢᴏᴛᴛᴇɴ ᴄᴏʀᴇ ᴏғ ᴄᴏᴅᴇ ᴀɴᴅ ᴇɴᴄʜᴀɴᴛᴇᴅ ᴡɪᴛʜ ᴇᴛʜᴇʀɪᴀʟ ᴋɴᴏᴡʟᴇᴅɢᴇ, ᴍʏ ᴍɪssɪᴏɴ ɪs ᴛᴏ ᴀssɪsᴛ ʏᴏᴜ ᴡɪᴛʜ ɪɴғᴏʀᴍᴀᴛɪᴏɴ, ᴅᴀᴛᴀ ᴄᴏʟʟᴇᴄᴛɪᴏɴ, ᴀɴᴅ ғᴜɴᴄᴛɪᴏɴᴀʟɪᴛʏ.
${readmore}
> ┌╾⚟┉➲ ${c}【 ʙᴏᴛ - ɪɴғᴏ 】${c} ⟢
> ├────────────────
> │ ⎘ ᴛʏᴘᴇ: ᴄᴀꜱᴇ
> │ ⎘ ᴍᴏᴅᴇ: ${shoNhe.public ? 'Public' : 'Self'}
> │ ⎘ ᴘʀᴇғɪx: ${prefix}
> │ ⎘ ᴀɪ ʜɪᴛꜱ: ${aiMessage}
> │ ⎘ ᴠᴇʀꜱɪᴏɴ: 4.0.0
> │ ⎙ ʜɪᴛᴜɴɢ ᴍᴜɴᴅᴜʀ:
> │ ⎘ Ramadhan: ${countdownRamadhan}
> │ ⎘ Idul Fitri: ${countdownIdulFitri}
> └───────────────╼.✗

> ┌╾⚟┉➲ ${n}【𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐】${n} ⟢
> ├────────────────
> ┞ᗛ ➲ ${prefix}ᴏᴡɴᴇʀᴍᴇɴᴜ
> ┞ᗛ ➲ ${prefix}ɢᴀᴍᴇᴍᴇɴᴜ
> ┞ᗛ ➲ ${prefix}ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
> ┞ᗛ ➲ ${prefix}ʀᴀɴᴅᴏᴍᴍᴇɴᴜ
> ┞ᗛ ➲ ${prefix}ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ
> ┞ᗛ ➲ ${prefix}ɢʀᴏᴜᴘᴍᴇɴᴜ
> ┞ᗛ ➲ ${prefix}ᴏᴛʜᴇʀᴍᴇɴᴜ 
> ┞ᗛ ➲ ${prefix}ᴀᴜᴅɪᴏᴍᴇɴᴜ 
> ┞ᗛ ➲ ${prefix}ᴀɪᴍᴇɴᴜ
> ┞ᗛ ➲ ${prefix}ᴀɴɪᴍᴇᴍᴇɴᴜ 
> ┞ᗛ ➲ ${prefix}sᴏᴜɴᴅᴍᴇɴᴜ
> ┞ᗛ ➲ ${prefix}ᴀsᴜᴘᴀɴᴍᴇɴᴜ
> └─────────────────┘

> ┌╾⚟┉➲ ${n}【 ғᴇᴀᴛᴜʀᴇᴅ】${n} ⟢
> ├────────────────
> ┞ᗛ ➲ ${prefix}listuserfire
> ┞ᗛ ➲ ${prefix}cekfire
> ┞ᗛ ➲ ${prefix}bensin
> ┞ᗛ ➲ ${prefix}afk
> ┞ᗛ ➲ ${prefix}listcmd
> ┞ᗛ ➲ ${prefix}cek
> ┞ᗛ ➲ ${prefix}find
> ┞ᗛ ➲ ${prefix}ceksaldo
> ┞ᗛ ➲ ${prefix}script / sc
> ┞ᗛ ➲ ${prefix}register 
> └────────────────╼.✗

> ┌╾⚟┉➲ ${n}【 ɢᴜɪᴅᴇ 】${n} ⟢
> ├────────────────
> ┞ᗛ ꜰᴏʀ ᴍᴇɴᴜ: ${prefix}allmenu
> ┞ᗛ ᴄᴏɴᴛᴀᴄᴛ ꜰᴏʀ ᴏᴡɴᴇʀ: ${prefix}owner
> └────────────────╼.✗`;
				const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴅᴀꜰᴛᴀʀ ᴍᴇɴᴜ${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				if (typemenu === 's1')
				{
					
// Fungsi untuk mengecek status registrasi pengguna
function isUserRegistered(sender) {
    const db = loadUserFire(); // Fungsi untuk memuat database
    return db[sender] && db[sender].register;
}
let buttons;
if (isUserRegistered(m.sender)) {
    // Jika pengguna sudah terdaftar, tampilkan tombol OWNER dan CEL PROFIL
    buttons = [
        {
            buttonId: ".contact",
            buttonText: {
                displayText: "OWNER"
            },
            type: 1
        },
        {
            buttonId: ".simpelmenu",
            buttonText: {
                displayText: "SIMPEL MENU"
            },
            type: 1
        }
    ];
} else {
    // Jika pengguna belum terdaftar, tampilkan tombol REGISTER
    buttons = [
    {
            buttonId: ".contact",
            buttonText: {
                displayText: "👤OWNER "
            },
            type: 1
        },
        {
            buttonId: ".register",
            buttonText: {
                displayText: "🪪REGISTER"
            },
            type: 1
        }
    ];
  }
					let buttonMessage = {
						document: global.forpdf,
						fileName: waktuucapan,
						mimetype: 'application/pdf',
						fileLength: '100000000000000',
						pageCount: '999',
						image:
						{
							url: getRandomThumb2(), // Pastikan file ini tersedia
							gifPlayback: true
						},
						caption: `${shonhemenu}`, // Teks menu
						contextInfo:
						{
							mentionedJid: [sender],
							forwardingScore: 999,
							isForwarded: true,
							externalAdReply:
							{
								title: namabot,
								body: "🟢 Active",
								thumbnail: getRandomThumb2(),
								mediaType: 1,
								renderLargerThumbnail: true,
								previewType: 0,
								mediaUrl: gh,
								sourceUrl: gh
							}
						},
						footer: isUserRegistered(m.sender) ? " 🅥 ᴋʏʏ-sᴛᴏʀᴇ" : "🅥 ᴋʏʏ-sᴛᴏʀᴇ",
						buttons: buttons,
						viewOnce: true,
						headerType: 4
					};
					const flowActions = [
						{
						buttonId: 'action',
						buttonText:
						{
							displayText: 'This Button List'
						},
						type: 4,
						nativeFlowInfo:
						{
							name: 'single_select',
							paramsJson: JSON.stringify(
							{
								title: "Select Menu!",
								sections: [
								{
									title: "⚼ 「Ini adalah command yang sering digunakan」",
									highlight_label: "POPULER",
									rows: [
									{
										title: "🔍 ALL MENU",
										description: "Menampilkan semua menu",
										id: ".allmenu"
									}]
								},
								{
									title: "⚼ 「Ini adalah command feeldream bucin」",
									highlight_label: "💌SURAT CINTA",
									rows: [
									{
										title: "💌FEEL DREAM BUCIN",
										description: "Menampilkan semua link feeldream",
										id: ".bucin"
									}]
								},
								{
									title: "⚼ 「Ini adalah command list phonk」",
									highlight_label: "phonk kece",
									rows: [
									{
										title: "🔊PHONK",
										description: "Menampilkan semua phonk menu",
										id: ".phonk"
									}]
								},
								{
									title: "⚼ 「Ini adalah command list asupan」",
									highlight_label: "18+",
									rows: [
									{
										title: "ASUPAN",
										description: "Menampilkan semua asupan menu",
										id: ".asupan"
									}]
								},
								{
									title: "⚼ 「Ini adalah command nsfw menu」",
									highlight_label: "PRIVATE 🔒",
									rows: [
									{
										title: "💦NSFW MENU",
										description: "Menampilkan semua nsfw menu",
										id: ".nsfwmenu"
									}]
								},
								{
									title: "⚼ 「Ini adalah Store Bot Umum🛒」",
									highlight_label: "Store Umum🚨",
									rows: [
									{
										title: "🏭 STORE MENU",
										description: "Menampilkan semua store menu",
										id: ".storemenu"
									}]
								},
								{
									title: "⚼ 「Ini adalah Store Khusus Produk Owner🛒」",
									highlight_label: "Produk Store Own🚨",
									rows: [
									{
										title: "🏭 STORE OWN MENU",
										description: "Menampilkan store produk khusus Owner",
										id: ".storeownmenu"
									}]
								},
								{
									title: "⚼ 「Silahkan Pilih Button Menu lainya, di Bawah Ini」",
									highlight_label: "🅥 ᴋʏʏ-sᴛᴏʀᴇ",
									rows: [
									{
										title: "⬇️ DOWNLOAD MENU",
										description: "Menu untuk mendownload dan mencari",
										id: ".downloadmenu"
									},
									{
										title: "🌟 ISLAM MENU",
										description: "Menu untuk Pencarian dan Informasi Islamic",
										id: ".islammenu"
									},
									{
										title: "📚 OTHER MENU",
										description: "Other menu",
										id: ".othermenu"
									},
									{
										title: "🔥 OWNER MENU",
										description: "Hanya OWNER👽 yang boleh menggunakan command ini",
										id: ".ownermenu"
									},
									{
										title: "🎮 GAME MENU",
										description: "menampilkan menu game yang asik",
										id: ".gamemenu"
									},
									{
										title: "🎭 ANIME MENU",
										description: "Command untuk menu anime",
										id: ".animemenu"
									},
									{
										title: "🔮 AI MENU",
										description: "Menu Artificial intelligence free",
										id: ".aimenu"
									},
									{
										title: "♻️ RANDOM MENU",
										description: "Menu random",
										id: ".randommenu"
									},
									{
										title: "🎤 AUDIO MENU",
										description: "Menu untuk merubah audio",
										id: ".audiomenu"
									},
									{
										title: "🔄 CONVERT MENU",
										description: "Menu untuk converter",
										id: ".convertmenu"
									},
									{
										title: "🫧 GROUP MENU",
										description: "Menu tentang group",
										id: ".groupmenu"
									}]
								},
								{
									title: "⚼ 「Document & Support」",
									highlight_label: "🅥 ᴋʏʏ-sᴛᴏʀᴇ",
									rows: [
									{
										title: "📝 SCRIPT",
										description: "Script bot yang saya pakai dan Script² Sebelumnya",
										id: ".script"
									},
									{
										title: "🔑 OWNER",
										description: "Pembuat Bot WhatsApp ᴋʏʏ-sᴛᴏʀᴇ",
										id: ".contact"
									},
									{
										title: "🪨 TQTO",
										description: "Membantu support dan berbagi",
										id: ".tqto"
									}]
								}]
							})
						},
						viewOnce: true
					}, ];
					// Tambahkan flowActions ke buttonMessage
					buttonMessage.buttons.push(...flowActions);
					// Kirim pesan
					await shoNhe.sendMessage(m.chat, buttonMessage,
					{
						quoted: hw
					});
				}
				else if (typemenu === 's2')
				{
					const menuv2 =
`ʜɪ ${m.pushName ? m.pushName : 'User'}👋🏻

> ɪ'ᴀᴍ ᴋʏʏ-sᴛᴏʀᴇ, ᴀɴ ᴀᴅᴠᴀɴᴄᴇᴅ ᴅɪɢɪᴛᴀʟ ᴀssɪsᴛᴀɴᴛ ғʀᴏᴍ ᴛʜᴇ ᴏᴛʜᴇʀᴅɪᴍᴇɴsɪᴏɴ ᴏғ ꜱʏsᴛᴇᴍs. ᴄʀᴇᴀᴛᴇᴅ ꜰʀᴏᴍ ᴛʜᴇ ғᴏʀɢᴏᴛᴛᴇɴ ᴄᴏʀᴇ ᴏғ ᴄᴏᴅᴇ ᴀɴᴅ ᴇɴᴄʜᴀɴᴛᴇᴅ ᴡɪᴛʜ ᴇᴛʜᴇʀɪᴀʟ ᴋɴᴏᴡʟᴇᴅɢᴇ, ᴍʏ ᴍɪssɪᴏɴ ɪs ᴛᴏ ᴀssɪsᴛ ʏᴏᴜ ᴡɪᴛʜ ɪɴғᴏʀᴍᴀᴛɪᴏɴ, ᴅᴀᴛᴀ ᴄᴏʟʟᴇᴄᴛɪᴏɴ, ᴀɴᴅ ғᴜɴᴄᴛɪᴏɴᴀʟɪᴛʏ.
${readmore}
┌╾⚟┉➲${c}【 ᴜꜱᴇʀ - ɪɴғᴏ 】${c} ⟢
├────────────────
│  ⎘ ɴᴀᴍᴇ: ${m.pushName || 'User'}
│  ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
│  ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
│  ⎘ ʀᴏʟᴇ: ${role}
│  ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
│  ⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
│  ⎘ sᴀʟᴅᴏ: ${belenc}
│  ⎘ ʟᴇᴠᴇʟ: ${level}
│  ⎘ ᴇxᴘ: ${xp}
│  ⎘ ᴄᴏᴍᴍᴀɴᴅ ᴄᴏᴜɴᴛ: ${commandCount}
└──────────────────╼.✗

┌╾⚟┉➲${c}【 ʙᴏᴛ - ɪɴғᴏ 】${c} ⟢
├────────────────
│  ⎘ ᴛʏᴘᴇ: ᴄᴀꜱᴇ
│  ⎘ ᴍᴏᴅᴇ: ${shoNhe.public ? 'Public' : 'Self'}
│  ⎘ ᴘʀᴇғɪx: ${prefix}
│  ⎘ ᴅᴀᴛᴇ: ${moment().format('dddd, D MMMM YYYY')}
│  ⎘ ᴀɪ ʜɪᴛꜱ: ${aiMessage}
│  ⎘ ᴠᴇʀꜱɪᴏɴ: ${version}
│  ⎘ sᴜᴘᴘᴏʀᴛᴇᴅ
│    ${simbols} ${prefix}tqto
│    ${simbols} ${prefix}realown
│  ⎘ ᴛᴏᴘ ᴄᴏᴍᴍᴀɴᴅs:
${formattedCommandList}
└──────────────────╼.✗

${menuforu(prefix, simbols)}

> ${crown}`
					shoNhe.sendMessage(m.chat,
					{
						image: getRandomThumb2(),
						caption: menuv2
					},
					{
						quoted: hw
					})
				}
				else if (typemenu === 's3')
				{
					const menuv3 = 
``
					shoNhe.sendMessage(m.chat,
					{
						text: menuv3,
						contextInfo:
						{
							mentionedJid: [m.sender],
							externalAdReply:
							{
								showAdAttribution: true,
								title: namabot,
								body: namaowner,
								thumbnail: getRandomThumb3(),
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					},
					{
						quoted: hw
					})
				}
				else if (typemenu === 's4')
				{
					const menuv4 =
``
					shoNhe.sendMessage(m.chat,
					{
						video: fs.readFileSync('./ShoNheMedia/video/sych.mp4'),
						caption: menuv4
					},
					{
						quoted: hw
					})
				}
				else if (typemenu === 's5')
				{
					const menuv5 = 
`ʜɪ ${m.pushName ? m.pushName : 'User'}👋🏻

>`
					shoNhe.sendMessage(m.chat,
					{
						video: fs.readFileSync('./ShoNheMedia/video/sych.mp4'),
						caption: menuv5,
						gifPlayback: true
					},
					{
						quoted: hw
					})
				}
				else if (typemenu === 's6')
				{
					const menuv6 = 
``
					shoNhe.relayMessage(m.chat,
					{
						requestPaymentMessage:
						{
							currencyCodeIso4217: 'INR',
							amount1000: '9999999900',
							requestFrom: m.sender,
							noteMessage:
							{
								extendedTextMessage:
								{
									text: menuv6,
									contextInfo:
									{
										mentionedJid: [m.sender],
										externalAdReply:
										{
											showAdAttribution: true
										}
									}
								}
							}
						}
					},
					{})
				}
				else if (typemenu === 's7')
				{
					const menuv7 = 
``
					shoNhe.sendMessage(m.chat,
					{
						document:
						{
							url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
						},
						caption: menuv7,
						mimetype: 'application/zip',
						fileName: namaowner,
						fileLength: "99999999999",
						contextInfo:
						{
							mentionedJid: [m.sender],
							externalAdReply:
							{
								showAdAttribution: true,
								title: namabot,
								body: namaowner,
								thumbnail: getRandomThumb2(),
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					},
					{
						quoted: hw
					})
				}
				else if (typemenu === 's8')
				{
					const menuv8 = 
``
					shoNhe.sendMessage(m.chat,
					{
						video: fs.readFileSync('./ShoNheMedia/video/sych.mp4'),
						gifPlayback: true,
						caption: menuv8,
						contextInfo:
						{
							mentionedJid: [m.sender],
							externalAdReply:
							{
								title: namabot,
								body: namaowner,
								thumbnail: getRandomThumb3(),
								sourceUrl: ``,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					},
					{
						quoted: m
					})
				}
				else if (typemenu === 's9')
				{
					const menuv9 = 
``
					shoNhe.sendMessage(m.chat,
					{
						video: fs.readFileSync('./ShoNheMedia/video/sych.mp4'),
						caption: menuv9,
						gifPlayback: true,
						contextInfo:
						{
							mentionedJid: [m.sender],
							forwardingScore: 999,
							isForwarded: true,
							mentionedJid: [sender],
							forwardedNewsletterMessageInfo:
							{
								newsletterName: namaowner,
								newsletterJid: idsaluran,
							},
							externalAdReply:
							{
								showAdAttribution: true,
								title: namaowner,
								body: namabot,
								thumbnail: getRandomThumb3(),
								sourceUrl: gh,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					},
					{
						quoted: m
					})
				}
				else if (typemenu === 's10')
				{
					const menuv10 =
``
					let msg = generateWAMessageFromContent(from,
					{
						viewOnceMessage:
						{
							message:
							{
								"messageContextInfo":
								{
									"deviceListMetadata":
									{},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create(
								{
									body: proto.Message.InteractiveMessage.Body.create(
									{
										text: namaowner
									}),
									footer: proto.Message.InteractiveMessage.Footer.create(
									{
										text: namabot
									}),
									header: proto.Message.InteractiveMessage.Header.create(
									{
										title: menuv10,
										subtitle: themeemoji,
										hasMediaAttachment: false
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
									{
										buttons: [
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"Instagram 💛\",\"url\":\"https://www.instagram.com/ikyy_joki08\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"t.me/rizki0822\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/RizkiBotz/kyy_store\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"WHATSAPP ☘️\",\"url\":\"https://chat.whatsapp.com/K7UwzonOYQjCvvyBN2LlKA\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "quick_reply",
											"buttonParamsJson": `{"display_text":"ALLMENU 🗂️","id":"${prefix}allmenu"}`
										},
										{
											"name": "quick_reply",
											"buttonParamsJson": `{"display_text":"OWNER 👤","id":"${prefix}owner"}`
										},
										{
											"name": "quick_reply",
											"buttonParamsJson": `{"display_text":"SCRIPT 📃","id":"${prefix}script"}`
										}],
									})
								})
							}
						}
					},
					{})
					await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
					{
						messageId: msg.key.id
					})
				}
				else if (typemenu === 's11')
				{
					const menuv11 = 
``
					let msg = generateWAMessageFromContent(m.chat,
					{
						viewOnceMessage:
						{
							message:
							{
								"messageContextInfo":
								{
									"deviceListMetadata":
									{},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create(
								{
									body: proto.Message.InteractiveMessage.Body.create(
									{
										text: menuv11
									}),
									footer: proto.Message.InteractiveMessage.Footer.create(
									{
										text: namabot
									}),
									header: proto.Message.InteractiveMessage.Header.create(
									{
										...(await prepareWAMessageMedia(
										{
											image: getRandomThumb2()
										},
										{
											upload: shoNhe.waUploadToServer
										})),
										title: ``,
										gifPlayback: true,
										subtitle: namaowner,
										hasMediaAttachment: false
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
									{
										buttons: [
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"Instagram 💛\",\"url\":\"https://www.instagram.com/ikyy_joki08\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"t.me/rizki0822\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/RizkiBotz/kyy_store\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"WHATSAPP ☘️\",\"url\":\"https://chat.whatsapp.com/K7UwzonOYQjCvvyBN2LlKA\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "quick_reply",
											"buttonParamsJson": `{"display_text":"ALLMENU 🗂️","id":"${prefix}allmenu"}`
										},
										{
											"name": "quick_reply",
											"buttonParamsJson": `{"display_text":"OWNER 👤","id":"${prefix}owner"}`
										},
										{
											"name": "quick_reply",
											"buttonParamsJson": `{"display_text":"SCRIPT 📃","id":"${prefix}script"}`
										}],
									}),
									contextInfo:
									{
										mentionedJid: [m.sender],
										forwardingScore: 999,
										isForwarded: true,
										forwardedNewsletterMessageInfo:
										{
											newsletterJid: idsaluran,
											newsletterName: namaowner,
											serverMessageId: 143
										}
									}
								})
							}
						},
					},
					{})
					await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
					{
						messageId: msg.key.id
					})
				}
				else if (typemenu === 's12')
				{
					const menuv12 = 
`${shomenu}`
					let msg = generateWAMessageFromContent(from,
					{
						viewOnceMessage:
						{
							message:
							{
								"messageContextInfo":
								{
									"deviceListMetadata":
									{},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create(
								{
									body: proto.Message.InteractiveMessage.Body.create(
									{
										text: menuv12
									}),
									footer: proto.Message.InteractiveMessage.Footer.create(
									{
										text: namabot
									}),
									header: proto.Message.InteractiveMessage.Header.create(
									{
										...(await prepareWAMessageMedia(
										{
											image: getRandomThumb2()
										},
										{
											upload: shoNhe.waUploadToServer
										})),
										title: ``,
										gifPlayback: true,
										subtitle: namaowner,
										hasMediaAttachment: false
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
									{
										buttons: [
										{
											"name": "single_select",
											"buttonParamsJson": `{
        "title": "Select Menu!",
        "sections": [
            {
                "title": "Ini adalah command yang sering diginakan",
                "highlight_label": "POPULER",
                "rows": [
                    { 
                        "title": "🔍 ALL MENU", 
                        "description": "Menampilkan semua menu", 
                        "id": ".allmenu" 
                    }
                ]
            },
            {
                "title": "Silahkan Pilih Button Menu di Bawah Ini",
                "highlight_label": "ShoNhe ☘️",
                "rows": [
                    { 
                        "title": "⬇️ DOWNLOAD MENU", 
                        "description": "Menu untuk mendownload dan mencari", 
                        "id": ".downloadmenu" 
                    },
                    {
						title: "🌟 ISLAM MENU",
						description: "Menu untuk Pencarian dan Informasi Islamic",
						id: ".islammenu"
					},
                    { 
                        "title": "📚 OTHER MENU", 
                        "description": "Other menu", 
                        "id": ".othermenu" 
                    },
                    { 
                        "title": "🔥 OWNER MENU", 
                        "description": "Hanya King👑 yang boleh menggunakan command ini", 
                        "id": ".ownermenu" 
                    },
                    { 
                        "title": "🎭 ANIME MENU", 
                        "description": "Command untuk menu anime", 
                        "id": ".animemenu" 
                    },
                    { 
                        "title": "🔮 AI MENU", 
                        "description": "Menu Artificial intelligence free", 
                        "id": ".aimenu" 
                    },
                    { 
                        "title": "♻️ RANDOM MENU", 
                        "description": "Menu random", 
                        "id": ".randommenu" 
                    },
                    { 
                        "title": "🎤 AUDIO MENU", 
                        "description": "Menu untuk merubah audio", 
                        "id": ".audiomenu" 
                    },
                    { 
                        "title": "🔄 CONVERT MENU", 
                        "description": "Menu untuk converter", 
                        "id": ".convertmenu" 
                    },
                    { 
                        "title": "🫧 GROUP MENU", 
                        "description": "Menu tentang group", 
                        "id": ".groupmenu" 
                    }
                ]
            },
            {
                "title": "Document & Support",
                "highlight_label": "ShoNhe v3 ⭐",
                "rows": [
                    { 
                        "title": "📝 SCRIPT", 
                        "description": "Script bot yang saya pakai", 
                        "id": ".script" 
                    },
                    { 
                        "title": "🔑 OWNER", 
                        "description": "Pembuat Bot WhatsApp ShoV1", 
                        "id": ".contact2" 
                    },
                    { 
                        "title": "🪨 TQTO", 
                        "description": "Membantu support dan berbagi", 
                        "id": ".tqto" 
                    }
                ]
            }
        ]
    }`
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"YouTube 💛\",\"url\":\"https://youtube.com/@sychyy00?si=njEkYZWxEm0i7-Wr\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/sh0ydaaa\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/sychyy\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://chat.whatsapp.com/GQ5Gp0eSeDS6dPBYeHE6kf\",\"merchant_url\":\"https://www.google.com\"}"
										}]
									}),
									contextInfo:
									{
										mentionedJid: [m.sender],
										forwardingScore: 999,
										isForwarded: true,
										forwardedNewsletterMessageInfo:
										{
											newsletterJid: idsaluran,
											newsletterName: namach,
											serverMessageId: 143
										}
									}
								})
							}
						}
					},
					{})
					await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
					{
						messageId: msg.key.id
					})
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			
			break
			case 'knpy':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				shoNhe.relayMessage(m.chat,
				{
					scheduledCallCreationMessage:
					{
						callType: "AUDIO",
						scheduledTimestampMs: 100,
						title: "halo bang"
					}
				},
				{})
			}
			break
			
			
		case 'islammenu':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				await emote(randomEmoji);
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				const animekk = 
`> ┌╾⚟┉➲ ${c}【ᴜꜱᴇʀ - ɪɴғᴏ】${c} ⟢
> ├────────────────
> │ ⎘ ɴᴀᴍᴇ: ${c}${m.pushName || 'User'}${c} 
> │ ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
> │ ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
> │ ⎘ ʀᴏʟᴇ: ${role}
> │ ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
> │ ⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
> │ ⎘ sᴀʟᴅᴏ: ${belenc}
> │ ⎘ ʟᴇᴠᴇʟ: ${level}
> │ ⎘ ᴇxᴘ: ${xp}
> │ ⎘ ᴄᴏᴍᴍᴀɴᴅ ᴄᴏᴜɴᴛ: ${commandCount}
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ɪsʟɑᴍ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}jadwalsholat
> ┞ᗛ ${simbols} ${prefix}asmaulhusna
> ┞ᗛ ${simbols} ${prefix}ayatkursi
> ┞ᗛ ${simbols} ${prefix}bacaansholat
> ┞ᗛ ${simbols} ${prefix}doaharian
> ┞ᗛ ${simbols} ${prefix}quotesislami
> ┞ᗛ ${simbols} ${prefix}doatahlil
> ┞ᗛ ${simbols} ${prefix}kisahnabi
> └───────────────╼.✗`;
    const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ɪsʟɑᴍ ᴍᴇɴᴜ${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				const tombol = [
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "Instagram 📱",
						url: `https://www.instagram.com/ikyy_joki08`,
					}),
				},
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "GitHub 🌐",
						url: `https://github.com/RizkiBotz/kyy-botz`,
					}),
				},];
				// Kirim pesan dengan gambar dan tombol
				sendButtonImage(m.chat, `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`, animekk, getRandomThumb2(), tombol, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'asupanmenu':
			case 'menuasupan':
		case 'asupantiktok':
		case 'asupan':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				await emote(randomEmoji);
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				const animekk = 
`> ┌╾⚟┉➲ ${c}【ᴜꜱᴇʀ - ɪɴғᴏ】${c} ⟢
> ├────────────────
> │ ⎘ ɴᴀᴍᴇ: ${c}${m.pushName || 'User'}${c} 
> │ ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
> │ ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
> │ ⎘ ʀᴏʟᴇ: ${role}
> │ ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
> │ ⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
> │ ⎘ sᴀʟᴅᴏ: ${belenc}
> │ ⎘ ʟᴇᴠᴇʟ: ${level}
> │ ⎘ ᴇxᴘ: ${xp}
> │ ⎘ ᴄᴏᴍᴍᴀɴᴅ ᴄᴏᴜɴᴛ: ${commandCount}
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ᴀsᴜᴘᴀɴ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}tiktokgirl
> ┞ᗛ ${simbols} ${prefix}tiktokukthy
> ┞ᗛ ${simbols} ${prefix}tiktokkayes
> ┞ᗛ ${simbols} ${prefix}tiktoknotnot
> ┞ᗛ ${simbols} ${prefix}tiktokpanrika
> ┞ᗛ ${simbols} ${prefix}tiktokghea
> ┞ᗛ ${simbols} ${prefix}tiktoksantuy
> ┞ᗛ ${simbols} ${prefix}tiktokbocil
> └───────────────╼.✗`;
    const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴀsᴜᴘᴀɴ ᴍᴇɴᴜ${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				const tombol = [
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "Instagram 📱",
						url: `https://www.instagram.com/ikyy_joki08`,
					}),
				},
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "GitHub 🌐",
						url: `https://github.com/RizkiBotz/kyy-botz`,
					}),
				},];
				// Kirim pesan dengan gambar dan tombol
				sendButtonImage(m.chat, `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`, animekk, getRandomThumb2(), tombol, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
case 'downloadmenu':
case 'menudownload':
case 'download menu':
case 'menu downloader':
case 'menudownloader':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				await emote(randomEmoji);
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				const animekk = 
`> ┌╾⚟┉➲ ${c}【ᴜꜱᴇʀ - ɪɴғᴏ】${c} ⟢
> ├────────────────
> │ ⎘ ɴᴀᴍᴇ:  ${c}${m.pushName || 'User'}${c}
> │ ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
> │ ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
> │ ⎘ ʀᴏʟᴇ: ${role}
> │ ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
> │ ⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
> │ ⎘ sᴀʟᴅᴏ: ${belenc}
> │ ⎘ ʟᴇᴠᴇʟ: ${level}
> │ ⎘ ᴇxᴘ: ${xp}
> │ ⎘ ᴄᴏᴍᴍᴀɴᴅ ᴄᴏᴜɴᴛ: ${commandCount}
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}play <q>         
> ┞ᗛ ${simbols} ${prefix}ytmp3 <link>    
> ┞ᗛ ${simbols} ${prefix}ytmp4 <link>     
> ┞ᗛ ${simbols} ${prefix}videy <link>      
> ┞ᗛ ${simbols} ${prefix}song <q>       
> ┞ᗛ ${simbols} ${prefix}ytsearch <q>     
> ┞ᗛ ${simbols} ${prefix}tiktok <link>     
> ┞ᗛ ${simbols} ${prefix}tiktoksearch <q>
> ┞ᗛ ${simbols} ${prefix}ttmp3 <link>     
> ┞ᗛ ${simbols} ${prefix}spotify <q>      
> ┞ᗛ ${simbols} ${prefix}spotifydl <link>  
> ┞ᗛ ${simbols} ${prefix}fbmp4 <link>     
> ┞ᗛ ${simbols} ${prefix}igdl <link>       
> ┞ᗛ ${simbols} ${prefix}twmp4 <link>    
> ┞ᗛ ${simbols} ${prefix}threadsdl <link>  
> ┞ᗛ ${simbols} ${prefix}snapchatdl <link> 
> ┞ᗛ ${simbols} ${prefix}pinterestdl <link> 
> ┞ᗛ ${simbols} ${prefix}pinterest <q>    
> ┞ᗛ ${simbols} ${prefix}gitclone <link>   
> └───────────────╼.✗`;
    const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				const tombol = [
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "Instagram 📱",
						url: `https://www.instagram.com/ikyy_joki08`,
					}),
				},
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "GitHub 🌐",
						url: `https://github.com/RizkiBotz/kyy-botz`,
					}),
				},];
				// Kirim pesan dengan gambar dan tombol
				sendButtonImage(m.chat, `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`, animekk, getRandomThumb2(), tombol, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}


break
case 'videy': {
    if (!args[0]) return shoNherly('⚠️ Masukkan link video yang ingin diunduh.');

    let url = args[0];

    if (!url.includes("videy.co/v?id=")) {
        return shoNherly('⚠️ Link tidak valid! Gunakan link dari Videy.co seperti:\n🔹 https://videy.co/v?id=CkALZrAw1');
    }

    shoNherly('⏳ Sedang memproses video, harap tunggu...');

    try {
        // Panggil fungsi hanya setelah dipastikan sudah tersedia
        if (typeof videyScraper !== 'function') {
            return shoNherly('❌ Terjadi kesalahan: Fungsi videyScraper tidak ditemukan.');
        }

        let videoData = await videyScraper(url);
        if (!videoData || !videoData.video) return shoNherly('❌ Gagal mengambil video!');

        let caption = `✅ *Video Berhasil Diunduh!*\n📌 *Sumber:* Videy.co\n📎 *Link:* ${url}`;
        await shoNhe.sendMessage(m.chat, { video: { url: videoData.video }, caption }, { quoted: m });

    } catch (error) {
        console.error(error);
        shoNherly(`❌ Terjadi kesalahan: ${error.message}`);
    }
}
break
			
			
			
			
			case 'addowner':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!args[0]) return shoNherly(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 6285655548594`);
				bnnd = q.split("|")[0].replace(/[^0-9]/g, '');
				let ceknye = await shoNhe.onWhatsApp(bnnd);
				if (ceknye.length == 0) return shoNherly(`Masukkan nomor yang valid dan terdaftar di WhatsApp!`);
				owner.push(bnnd);
				fs.writeFileSync('./owner.json', JSON.stringify(owner));
				shoNherly(`Nomor ${bnnd} sekarang menjadi Owner!!! 🎉`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'delowner':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!args[0]) return shoNherly(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 6285655548594`);
				ya = q.split("|")[0].replace(/[^0-9]/g, '');
				unp = owner.indexOf(ya);
				owner.splice(unp, 1);
				fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner));
				shoNherly(`Nomor ${ya} berhasil dihapus dari daftar owner! ❌`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'listowner':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = '┌──⭓「 *List Owner* 」\n│\n';
				for (let x of owner)
				{
					teks += `│⭔ ${x}\n`;
				}
				teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'bonus':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = `┌──⭓「 *Link  Gombal/bucin* 」
⭔ https://htmlku.com/kehadiranmu/main/
└────────────⭓

> *💌 BONUS*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'feeldream':
			case 'pesanbucin':
			case 'bucin':
		case 'scriptfdbucin':
		case 'scriptfeeldreambucin':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let menu = `
✧─❐ *10 LINK FEELDREAM* ❐─✧  

*Klik tombol dibawah*`;
				// Tombol utama
				let buttons = [
			
			];
				// Pesan dengan media video
				let buttonMessage = {
					document: global.forpdf,
					fileName: waktuucapan,
					mimetype: 'application/pdf',
					fileLength: '100000000000000',
					pageCount: '999',
						image:
						{
							url: getRandomThumb2(), // Pastikan file ini tersedia
							gifPlayback: true
						},
						caption: `${menu}`, // Teks menu
						contextInfo:
						{
							mentionedJid: [sender],
							forwardingScore: 999,
							isForwarded: true,
							externalAdReply:
							{
								title: "",
							body: "💌buat pacar",
								thumbnail: getRandomThumb2(),
								mediaType: 1,
								renderLargerThumbnail: true,
								previewType: 0,
								mediaUrl: gh,
								sourceUrl: gh
							}
						},
					footer: "🅥 kyy",
					buttons: buttons,
					viewOnce: true,
					headerType: 4
				};
				// Tambahan flow actions
				const flowActions = [
				{
					buttonId: 'action',
					buttonText:
					{
						displayText: 'This Button List'
					},
					type: 4,
					nativeFlowInfo:
					{
						name: 'single_select',
						paramsJson: JSON.stringify(
						{
							title: "Select Pesan💌",
							sections: [
							{
								title: "Silahkan Pilih Button di Bawah Ini",
								
								rows: [
								{
									title: "💌 PESAN 1",
	description: "Link Bucin💞",								
									id: ".list1"
								},
									{
									title: "💌 PESAN 2",
	description: "Link Bucin💞",								
									id: ".list2"
								},
									{
									title: "💌 PESAN 3",
	description: "Link Bucin💞",								
									id: ".list3"
								},
									{
									title: "💌 PESAN 4",
	description: "Link Bucin💞",								
									id: ".list4"
								},
									{
									title: "💌 PESAN 5",
	description: "Link Bucin💞",								
									id: ".list5"
								},
								{
									title: "💌 PESAN 6",
	description: "Link Bucin💞",								
									id: ".list6"
								},
								{
									title: "💌 PESAN 7",
	description: "Link Bucin💞",								
									id: ".list7"
								},
								{
									title: "💌 PESAN 8",
	description: "Link Bucin💞",								
									id: ".list8"
								},
								{
									title: "💌 PESAN 9",
	description: "Link Bucin💞",								
									id: ".list9"
								},
								{
									title: "💌 PESAN 10",
	description: "Link Bucin💞",								
									id: ".list10"
								},
									{
									title: "💌 PESAN 11",
	description: "Link Bucin💞",								
									id: ".list11"
								},
									{
									title: "💌 PESAN 12",
	description: "Link Bucin💞",								
									id: ".list12"
								},
									{
									title: "💌 PESAN 13",
	description: "Link Bucin💞",								
									id: ".list13"
								},
									{
									title: "💌 PESAN 14",
	description: "Link Bucin💞",								
									id: ".list14"
								},
									{
									title: "💌 PESAN 15",
	description: "Link Bucin💞",								
									id: ".list15"
								},
								{
									title: "💌 BONUS",
	description: "Link Bucin💞",								
									id: ".bonus"
								},
									]
							}]
						})
					},
					viewOnce: true
				}, ];
				// Tambahkan flowActions ke buttonMessage
				buttonMessage.buttons.push(...flowActions);
				// Kirim pesan
				await shoNhe.sendMessage(m.chat, buttonMessage,
				{
					quoted: m
				});
				}
				break 
				case 'list1':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = `┌──⭓「 *Link  Gombal/bucin* 」
⭔https://htmlku.com/haipacar/main/
└────────────⭓

> *List ke-1*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}		
			break
			case 'list2':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = `┌──⭓「 *Link  Gombal/bucin* 」
⭔ https://htmlku.com/janganya/main/
└────────────⭓

> *List ke-2*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break 
			case 'list3':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = `┌──⭓「 *Link  Gombal/bucin* 」
⭔https://htmlku.com/ajak/play
└────────────⭓

> *List ke-3*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break 
			case 'list4':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = `┌──⭓「 *Link  Gombal/bucin* 」
⭔https://htmlku.com/beruntung/play
└────────────⭓

> *List ke-4*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break 
			case 'list5':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = `┌──⭓「 *Link  Gombal/bucin* 」
⭔ https://htmlku.com/tetap/play
└────────────⭓

> *List ke-5*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'list6':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = `┌──⭓「 *Link  Gombal/bucin* 」
⭔ https://htmlku.com/khususkamu/play/
└────────────⭓

> *List ke-6*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'list7':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = `┌──⭓「 *Link  Gombal/bucin* 」
⭔ https://htmlku.com/ikanhiu/play
└────────────⭓

> *List ke-7*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break 
			case 'list8':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = `┌──⭓「 *Link  Gombal/bucin* 」
⭔ https://htmlku.com/pilihan/main/
└────────────⭓

> *List ke-8*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'list9':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = `┌──⭓「 *Link  Gombal/bucin* 」
⭔ https://htmlku.com/diberikan/play
└────────────⭓

> *List ke-9*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break 
			case 'list10':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = `┌──⭓「 *Link  Gombal/bucin* 」
⭔ https://htmlku.com/sebesar/main
└────────────⭓

> *List ke-10*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break 
			case 'list11':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = `┌──⭓「 *Link  Gombal/bucin* 」
⭔ https://htmlku.com/maunanya/main/
└────────────⭓

> *List ke-11*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break 
			case 'list12':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = `┌──⭓「 *Link  Gombal/bucin* 」
⭔https://htmlku.com/mangats/main/
└────────────⭓

> *List ke-12*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'list13':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = `┌──⭓「 *Link  Gombal/bucin* 」
⭔https://htmlku.com/yuk/play
└────────────⭓

> *List ke-13*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'list14':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = `┌──⭓「 *Link  Gombal/bucin* 」
⭔https://htmlku.com/tebak/play/
└────────────⭓

> *List ke-14*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break 
			case 'list15':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = `┌──⭓「 *Link  Gombal/bucin* 」
⭔https://htmlku.com/buatkamuaja/play/
└────────────⭓

> *List ke-15*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break 
			case 'aimenu':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				await emote(randomEmoji);
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				const menuai = 
`> ┌╾⚟┉➲${c}【ᴜꜱᴇʀ - ɪɴғᴏ】${c} ⟢
> ├────────────────
> │ ⎘ ɴᴀᴍᴇ: ${c}${m.pushName || 'User'}${c}
> │ ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
> │ ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
> │ ⎘ ʀᴏʟᴇ: ${role}
> │ ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
> │ ⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
> │  ⎘ sᴀʟᴅᴏ: ${belenc}
> │  ⎘ ʟᴇᴠᴇʟ: ${level}
> │  ⎘ ᴇxᴘ: ${xp}
> │  ⎘ ᴄᴏᴍᴍᴀɴᴅ ᴄᴏᴜɴᴛ: ${commandCount}
>└───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ᴀɪ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}metaai
> ┞ᗛ ${simbols} ${prefix}llama
> ┞ᗛ ${simbols} ${prefix}setprompt2
> ┞ᗛ ${simbols} ${prefix}nous
> ┞ᗛ ${simbols} ${prefix}claudeai
> ┞ᗛ ${simbols} ${prefix}dbrxai
> ┞ᗛ ${simbols} ${prefix}deepseek
> ┞ᗛ ${simbols} ${prefix}dreamshaper
> ┞ᗛ ${simbols} ${prefix}img2text
> ┞ᗛ ${simbols} ${prefix}venice
> ┞ᗛ ${simbols} ${prefix}latukam
> ┞ᗛ ${simbols} ${prefix}qwq
> ┞ᗛ ${simbols} ${prefix}stabilityai
> ┞ᗛ ${simbols} ${prefix}stable
> ┞ᗛ ${simbols} ${prefix}flux
> ┞ᗛ ${simbols} ${prefix}gandalf
> ┞ᗛ ${simbols} ${prefix}gemini
> └───────────────╼.✗`
               const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴀɪ ᴍᴇɴᴜ${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				const tombol = [
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "Instagram 📱",
						url: `https://www.instagram.com/ikyy_joki08`,
					}),
				},
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "GitHub 🌐",
						url: `https://github.com/RizkiBotz/kyy-botz`,
					}),
				},];
				// Kirim pesan dengan gambar dan tombol
				sendButtonImage(m.chat, `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`, menuai, getRandomThumb2(), tombol, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}

			
			
			
			break
			case 'gamemenu':
			case 'menugame':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				await emote(randomEmoji);
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				const gamemenu = 
`> ┌╾⚟┉➲ ${c}【ᴜꜱᴇʀ - ɪɴғᴏ】${c} ⟢
> ├────────────────
> │ ⎘ ɴᴀᴍᴇ: ${c}${m.pushName || 'User'}${c}
> │ ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
> │ ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
> │ ⎘ ʀᴏʟᴇ: ${role}
> │ ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
> │ ⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
> │ ⎘ sᴀʟᴅᴏ: ${belenc}
> │ ⎘ ʟᴇᴠᴇʟ: ${level}
> │ ⎘ ᴇxᴘ: ${xp}
> │ ⎘ ᴄᴏᴍᴍᴀɴᴅ ᴄᴏᴜɴᴛ: ${commandCount}
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ɢᴀᴍᴇ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}tebakgambar
> ┞ᗛ ${simbols} ${prefix}tebakgame
> ┞ᗛ ${simbols} ${prefix}tebakff
> ┞ᗛ ${simbols} ${prefix}tebakkabupaten
> ┞ᗛ ${simbols} ${prefix}tebakjkt48
> ┞ᗛ ${simbols} ${prefix}tebakhewan
> ┞ᗛ ${simbols} ${prefix}tebakchara
> ┞ᗛ ${simbols} ${prefix}tebaklogo
> ┞ᗛ ${simbols} ${prefix}tebakaplikasi
> ┞ᗛ ${simbols} ${prefix}suit
> ┞ᗛ ${simbols} ${prefix}tebakkata
> ┞ᗛ ${simbols} ${prefix}asahotak
> ┞ᗛ ${simbols} ${prefix}lengkapikalimat
> ┞ᗛ ${simbols} ${prefix}tebakbendera
> ┞ᗛ ${simbols} ${prefix}tebakkalimat
> ┞ᗛ ${simbols} ${prefix}siapaaku
> ┞ᗛ ${simbols} ${prefix}tebakkimia
> ┞ᗛ ${simbols} ${prefix}tebaklirik
> ┞ᗛ ${simbols} ${prefix}tebaktebakan
> ┞ᗛ ${simbols} ${prefix}susunkata
> ┞ᗛ ${simbols} ${prefix}caklontong
> ┞ᗛ ${simbols} ${prefix}tekateki
> └───────────────╼.✗`
const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ɢᴀᴍᴇ ᴍᴇɴᴜ${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				const tombol = [
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "GitHub 📱",
						url: `https://github.com/RizkiBotz/kyy_store`,
					}),
				},
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "Instagram 🌐",
						url: `https://github.com/RizkiBotz/kyy-botz`,
					}),
				}, ];
				// Kirim pesan dengan gambar dan tombol
				sendButtonImage(m.chat, `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`, gamemenu, getRandomThumb2(), tombol, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'audiomenu':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				await emote(randomEmoji);
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				const audiomenuu = 
`> ┌╾⚟┉➲ ${c}【ᴜꜱᴇʀ - ɪɴғᴏ】${c} ⟢
> ├────────────────
> │ ⎘ ɴᴀᴍᴇ: ${c}${m.pushName || 'User'}${c} 
> │ ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
> │ ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
> │ ⎘ ʀᴏʟᴇ: ${role}
> │ ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
> │ ⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
> │ ⎘ sᴀʟᴅᴏ: ${belenc}
> │ ⎘ ʟᴇᴠᴇʟ: ${level}
> │ ⎘ ᴇxᴘ: ${xp}
> │ ⎘ ᴄᴏᴍᴍᴀɴᴅ ᴄᴏᴜɴᴛ: ${commandCount}
> └──────────────────╼.✗

> ┌╾⚟┉➲ ${c}【ᴀᴜᴅɪᴏ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}bass
> ┞ᗛ ${simbols} ${prefix}blown
> ┞ᗛ ${simbols} ${prefix}deep
> ┞ᗛ ${simbols} ${prefix}earrape
> ┞ᗛ ${simbols} ${prefix}slow
> ┞ᗛ ${simbols} ${prefix}fast
> ┞ᗛ ${simbols} ${prefix}robot
> ┞ᗛ ${simbols} ${prefix}smooth
> ┞ᗛ ${simbols} ${prefix}nightcore
> ┞ᗛ ${simbols} ${prefix}reverse
> ┞ᗛ ${simbols} ${prefix}fat
> ┞ᗛ ${simbols} ${prefix}squirrel
> ┞ᗛ ${simbols} ${prefix}sound1
> ┞ᗛ ${simbols} ${prefix}sound2
> ┞ᗛ ${simbols} ${prefix}sound3
> ┞ᗛ ${simbols} ${prefix}sound4
> ┞ᗛ ${simbols} ${prefix}sound5
> ┞ᗛ ${simbols} ${prefix}sound6
> ┞ᗛ ${simbols} ${prefix}sound7
> ┞ᗛ ${simbols} ${prefix}sound8
> ┞ᗛ ${simbols} ${prefix}sound9
> ┞ᗛ ${simbols} ${prefix}sound10
> ┞ᗛ ${simbols} ${prefix}sound11
> ┞ᗛ ${simbols} ${prefix}sound12
> ┞ᗛ ${simbols} ${prefix}sound13
> ┞ᗛ ${simbols} ${prefix}sound14
> ┞ᗛ ${simbols} ${prefix}sound15
> ┞ᗛ ${simbols} ${prefix}sound16
> ┞ᗛ ${simbols} ${prefix}sound17
> ┞ᗛ ${simbols} ${prefix}sound18
> ┞ᗛ ${simbols} ${prefix}sound19
> ┞ᗛ ${simbols} ${prefix}sound20
> ┞ᗛ ${simbols} ${prefix}sound21
> ┞ᗛ ${simbols} ${prefix}sound22
> ┞ᗛ ${simbols} ${prefix}sound23
> ┞ᗛ ${simbols} ${prefix}sound24
> ┞ᗛ ${simbols} ${prefix}sound25
> ┞ᗛ ${simbols} ${prefix}sound26
> ┞ᗛ ${simbols} ${prefix}sound27
> ┞ᗛ ${simbols} ${prefix}sound28
> ┞ᗛ ${simbols} ${prefix}sound29
> ┞ᗛ ${simbols} ${prefix}sound30
> ┞ᗛ ${simbols} ${prefix}sound31
> ┞ᗛ ${simbols} ${prefix}sound32
> ┞ᗛ ${simbols} ${prefix}sound33
> ┞ᗛ ${simbols} ${prefix}sound34
> ┞ᗛ ${simbols} ${prefix}sound35
> ┞ᗛ ${simbols} ${prefix}sound36
> ┞ᗛ ${simbols} ${prefix}sound37
> ┞ᗛ ${simbols} ${prefix}sound38
> ┞ᗛ ${simbols} ${prefix}sound39
> ┞ᗛ ${simbols} ${prefix}sound40
> ┞ᗛ ${simbols} ${prefix}sound41
> ┞ᗛ ${simbols} ${prefix}sound42
> ┞ᗛ ${simbols} ${prefix}sound43
> ┞ᗛ ${simbols} ${prefix}sound44
> ┞ᗛ ${simbols} ${prefix}sound45
> ┞ᗛ ${simbols} ${prefix}sound46
> ┞ᗛ ${simbols} ${prefix}sound47
> ┞ᗛ ${simbols} ${prefix}sound48
> ┞ᗛ ${simbols} ${prefix}sound49
> ┞ᗛ ${simbols} ${prefix}sound50
> └──────────────────╼.✗`;
const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴀᴜᴅɪᴏ ᴍᴇɴᴜ${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				const tombol = [
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "Instagram 📱",
						url: `https://www.instagram.com/ikyy_joki08`,
					}),
				},
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "GitHub 🌐",
						url: `https://github.com/RizkiBotz/kyy-botz`,
					}),
				}, ];
				// Kirim pesan dengan gambar dan tombol
				sendButtonImage(m.chat, `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`, audiomenuu, getRandomThumb2(), tombol, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'groupmenu':
			case 'menugroup':
		case 'gcmenu':
		case 'menugc':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				await emote(randomEmoji);
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				const animekk = 
`> ┌╾⚟┉➲ ${c}【ᴜꜱᴇʀ - ɪɴғᴏ】${c} ⟢
> ├────────────────
> │ ⎘ ɴᴀᴍᴇ: ${c}${m.pushName || 'User'}${c}
> │ ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
> │ ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
> │ ⎘ ʀᴏʟᴇ: ${role}
> │ ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
> │ ⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
> │ ⎘ sᴀʟᴅᴏ: ${belenc}
> │ ⎘ ʟᴇᴠᴇʟ: ${level}
> │ ⎘ ᴇxᴘ: ${xp}
> │ ⎘ ᴄᴏᴍᴍᴀɴᴅ ᴄᴏᴜɴᴛ: ${commandCount}
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ɢʀᴏᴜᴘ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}grup
> ┞ᗛ ${simbols} ${prefix}getgcid
> ┞ᗛ ${simbols} ${prefix}creategc
> ┞ᗛ ${simbols} ${prefix}closetime
> ┞ᗛ ${simbols} ${prefix}hidetag
> ┞ᗛ ${simbols} ${prefix}opentime
> ┞ᗛ ${simbols} ${prefix}revoke
> ┞ᗛ ${simbols} ${prefix}kudeta
> ┞ᗛ ${simbols} ${prefix}setdesc
> ┞ᗛ ${simbols} ${prefix}store
> ┞ᗛ ${simbols} ${prefix}addlist <key>|<resp>
> ┞ᗛ ${simbols} ${prefix}dellist <key>
> ┞ᗛ ${simbols} ${prefix}updatelist <key>|resp>
> ┞ᗛ ${simbols} ${prefix}setnamegc
> ┞ᗛ ${simbols} ${prefix}delppgc
> ┞ᗛ ${simbols} ${prefix}setppgc
> ┞ᗛ ${simbols} ${prefix}contacttag
> ┞ᗛ ${simbols} ${prefix}sendcontact
> ┞ᗛ ${simbols} ${prefix}getcontact
> └───────────────╼.✗
    `;
    const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ɢʀᴏᴜᴘ ᴍᴇɴᴜ${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				const tombol = [
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "Instagram 📱",
						url: `https://www.instagram.com/ikyy_joki08`,
					}),
				},
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "GitHub 🌐",
						url: `https://github.com/RizkiBotz/kyy-botz`,
					}),
				},];
				// Kirim pesan dengan gambar dan tombol
				sendButtonImage(m.chat, `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`, animekk, getRandomThumb2(), tombol, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'animemenu':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				await emote(randomEmoji);
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				const animekk = 
`> ┌╾⚟┉➲ ${c}【ᴜꜱᴇʀ - ɪɴғᴏ】${c} ⟢
> ├────────────────
> │ ⎘ ɴᴀᴍᴇ: ${c}${m.pushName || 'User'}${c}
> │ ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
> │ ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
> │ ⎘ ʀᴏʟᴇ: ${role}
> │ ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
> │ ⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
> │ ⎘ sᴀʟᴅᴏ: ${belenc}
> │ ⎘ ʟᴇᴠᴇʟ: ${level}
> │ ⎘ ᴇxᴘ: ${xp}
> │ ⎘ ᴄᴏᴍᴍᴀɴᴅ ᴄᴏᴜɴᴛ: ${commandCount}
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ᴀɴɪᴍᴇ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}anichindetail
> ┞ᗛ ${simbols} ${prefix}anichindl
> ┞ᗛ ${simbols} ${prefix}anichinepisode
> ┞ᗛ ${simbols} ${prefix}anichinsearch
> ┞ᗛ ${simbols} ${prefix}aurataildetail
> ┞ᗛ ${simbols} ${prefix}aurataillast
> ┞ᗛ ${simbols} ${prefix}auratailsearch
> ┞ᗛ ${simbols} ${prefix}auratailpopular
> ┞ᗛ ${simbols} ${prefix}animelast
> ┞ᗛ ${simbols} ${prefix}animpopular
> ┞ᗛ ${simbols} ${prefix}komikindodetail
> ┞ᗛ ${simbols} ${prefix}komikindodownload
> ┞ᗛ ${simbols} ${prefix}komikindosearch
> ┞ᗛ ${simbols} ${prefix}samehadakurelease
> ┞ᗛ ${simbols} ${prefix}samehadakudetail
> ┞ᗛ ${simbols} ${prefix}otakudesuongoing
> ┞ᗛ ${simbols} ${prefix}otakudesusearch
> ┞ᗛ ${simbols} ${prefix}otakudesudetail
> ┞ᗛ ${simbols} ${prefix}oploverzdownload
> └───────────────╼.✗
    `;
    const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴀɴɪᴍᴇ ᴍᴇɴᴜ${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				const tombol = [
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "Instagram 📱",
						url: `https://www.instagram.com/ikyy_joki08`,
					}),
				},
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "GitHub 🌐",
						url: `https://github.com/RizkiBotz/kyy-botz`,
					}),
				},];
				// Kirim pesan dengan gambar dan tombol
				sendButtonImage(m.chat, `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`, animekk, getRandomThumb2(), tombol, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break 
			
			case 'convertmenu':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				await emote(randomEmoji);
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				const animekk = 
`> ┌╾⚟┉➲ ${c}【ᴜꜱᴇʀ - ɪɴғᴏ】${c} ⟢
> ├────────────────
> │ ⎘ ɴᴀᴍᴇ: ${c}${m.pushName || 'User'}${c}
> │ ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
> │ ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
> │ ⎘ ʀᴏʟᴇ: ${role}
> │ ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
> │ ⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
> │ ⎘ sᴀʟᴅᴏ: ${belenc}
> │ ⎘ ʟᴇᴠᴇʟ: ${level}
> │ ⎘ ᴇxᴘ: ${xp}
> │ ⎘ ᴄᴏᴍᴍᴀɴᴅ ᴄᴏᴜɴᴛ: ${commandCount}
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}sticker
> ┞ᗛ ${simbols} ${prefix}toimg
> ┞ᗛ ${simbols} ${prefix}tourl
> ┞ᗛ ${simbols} ${prefix}brat <txt>
> ┞ᗛ ${simbols} ${prefix}bratvid <txt>
> ┞ᗛ ${simbols} ${prefix}hd <reply img>
> ┞ᗛ ${simbols} ${prefix}remini <reply img>
> ┞ᗛ ${simbols} ${prefix}tomp3 
> ┞ᗛ ${simbols} ${prefix}toaudio
> └───────────────╼.✗
    `;
    const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				const tombol = [
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "Instagram 📱",
						url: `https://www.instagram.com/ikyy_joki08`,
					}),
				},
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "GitHub 🌐",
						url: `https://github.com/RizkiBotz/kyy-botz`,
					}),
				},];
				// Kirim pesan dengan gambar dan tombol
				sendButtonImage(m.chat, `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`, animekk, getRandomThumb2(), tombol, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			
			
			break
			case 'ownermenu':
			case 'menuowner':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				await emote(randomEmoji);
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				const ownermenu = 
`> ┌╾⚟┉➲ ${c}【ᴜꜱᴇʀ - ɪɴғᴏ】${c} ⟢
> ├────────────────
> │ ⎘ ɴᴀᴍᴇ: ${c}${m.pushName || 'User'}${c}
> │ ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
> │ ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
> │ ⎘ ʀᴏʟᴇ: ${role}
> │ ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
> │ ⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
> │ ⎘ sᴀʟᴅᴏ: ${belenc}
> │ ⎘ ʟᴇᴠᴇʟ: ${level}
> │ ⎘ ᴇxᴘ: ${xp}
> │ ⎘ ᴄᴏᴍᴍᴀɴᴅ ᴄᴏᴜɴᴛ: ${commandCount}
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ᴏᴡɴᴇʀ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}restart
> ┞ᗛ ${simbols} ${prefix}mode
> ┞ᗛ ${simbols} ${prefix}addcase
> ┞ᗛ ${simbols} ${prefix}delcase
> ┞ᗛ ${simbols} ${prefix}poll txt|q,q
> ┞ᗛ ${simbols} ${prefix}addowner
> ┞ᗛ ${simbols} ${prefix}sendsc
> ┞ᗛ ${simbols} ${prefix}delowner
> ┞ᗛ ${simbols} ${prefix}setreply
> ┞ᗛ ${simbols} ${prefix}setmenu
> ┞ᗛ ${simbols} ${prefix}sendclear
> ┞ᗛ ${simbols} ${prefix}addprem
> ┞ᗛ ${simbols} ${prefix}sendbutton
> ┞ᗛ ${simbols} ${prefix}sendbuttonimg
> ┞ᗛ ${simbols} ${prefix}sendbuttonimg2
> ┞ᗛ ${simbols} ${prefix}sendlist
> ┞ᗛ ${simbols} ${prefix}sendlist2
> ┞ᗛ ${simbols} ${prefix}sendlistimg
> ┞ᗛ ${simbols} ${prefix}sendlistch
> ┞ᗛ ${simbols} ${prefix}sendlistimg2
> ┞ᗛ ${simbols} ${prefix}listprem
> ┞ᗛ ${simbols} ${prefix}delprem
> ┞ᗛ ${simbols} ${prefix}setbiobot
> ┞ᗛ ${simbols} ${prefix}upsaluran
> ┞ᗛ ${simbols} ${prefix}upsaluran2
> ┞ᗛ ${simbols} ${prefix}upchannel
> ┞ᗛ ${simbols} ${prefix}upchannels
> ┞ᗛ ${simbols} ${prefix}delppbot
> ┞ᗛ ${simbols} ${prefix}setppbot
> ┞ᗛ ${simbols} ${prefix}listuserfire
> ┞ᗛ ${simbols} ${prefix}cekfire
> ┞ᗛ ${simbols} ${prefix}upfire
> ┞ᗛ ${simbols} ${prefix}delfire
> ┞ᗛ ${simbols} ${prefix}listowner
> ┞ᗛ ${simbols} ${prefix}getcase
> ┞ᗛ ${simbols} ${prefix}addthumb <name>|<link>
> ┞ᗛ ${simbols} ${prefix}listthumb
> ┞ᗛ ${simbols} ${prefix}delthumb <name>
> ┞ᗛ ${simbols} ${prefix}addthumb2 <name>|<replyImg>
> ┞ᗛ ${simbols} ${prefix}listthumb2
> ┞ᗛ ${simbols} ${prefix}delthumb2 <name>
> ┞ᗛ ${simbols} ${prefix}addthumb3 <name>|<replyImg>
> ┞ᗛ ${simbols} ${prefix}listthumb3
> ┞ᗛ ${simbols} ${prefix}delthumb3 <name>
> ┞ᗛ ${simbols} ${prefix}upswtext
> ┞ᗛ ${simbols} ${prefix}upswimg
> ┞ᗛ ${simbols} ${prefix}upswvid
> ┞ᗛ ${simbols} ${prefix}upswaudio
> ┞ᗛ ${simbols} ${prefix}settings
> ┞ᗛ ${simbols} ${prefix}delsession
> ┞ᗛ ${simbols} ${prefix}pushcontact
> ┞ᗛ ${simbols} ${prefix}pushkontak2
> ┞ᗛ ${simbols} ${prefix}pushkontak3
> ┞ᗛ ${simbols} ${prefix}pushkontak4
> ┞ᗛ ${simbols} ${prefix}resetpop
> ┞ᗛ ${simbols} ${prefix}setcmd
> ┞ᗛ ${simbols} ${prefix}delcmd
> ┞ᗛ ${simbols} ${prefix}shoneai
> ┞ᗛ ${simbols} ${prefix}eval
> ┞ᗛ ${simbols} ${prefix}exec
> ┞ᗛ ${simbols} ${prefix}return
> ┞ᗛ ${simbols} ${prefix}listcmd
> └───────────────╼.✗`;
const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴏᴡɴᴇʀ ᴍᴇɴᴜ${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				const tombol = [
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "Instagram 📱",
						url: `https://www.instagram.com/ikyy_joki08`,
					}),
				},
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "GitHub 🌐",
						url: `https://github.com/RizkiBotz/kyy-botz`,
					}),
				},];
				// Kirim pesan dengan gambar dan tombol
				sendButtonImage(m.chat, `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`, ownermenu, getRandomThumb2(), tombol, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'randommenu':
			case 'menurandom':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				await emote(randomEmoji);
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				const randomm = 
`> ┌╾⚟┉➲ ${c}【ᴜꜱᴇʀ - ɪɴғᴏ】${c} ⟢
> ├────────────────
> │ ⎘ ɴᴀᴍᴇ: ${c}${m.pushName || 'User'}${c}
> │ ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
> │ ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
> │ ⎘ ʀᴏʟᴇ: ${role}
> │ ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
> │ ⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
> │ ⎘ sᴀʟᴅᴏ: ${belenc}
> │ ⎘ ʟᴇᴠᴇʟ: ${level}
> │ ⎘ ᴇxᴘ: ${xp}
> │ ⎘ ᴄᴏᴍᴍᴀɴᴅ ᴄᴏᴜɴᴛ: ${commandCount}
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ʀᴀɴᴅᴏᴍ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}neko
> ┞ᗛ ${simbols} ${prefix}waifu
> ┞ᗛ ${simbols} ${prefix}cecanindo
> ┞ᗛ ${simbols} ${prefix}cecanchina
> ┞ᗛ ${simbols} ${prefix}cecankorea
> ┞ᗛ ${simbols} ${prefix}cecanthai
> ┞ᗛ ${simbols} ${prefix}cecanviet
> ┞ᗛ ${simbols} ${prefix}cecanjapan
> ┞ᗛ ${simbols} ${prefix}cats
> ┞ᗛ ${simbols} ${prefix}bluearchive
> └───────────────╼.✗`
const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ʀᴀɴᴅᴏᴍ ᴍᴇɴᴜ${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				const tombol = [
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "Instagram 📱",
						url: `https://www.instagram.com/ikyy_joki08`,
					}),
				},
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "GitHub 🌐",
						url: `https://github.com/RizkiBotz/kyy-botz`,
					}),
				},];
				// Kirim pesan dengan gambar dan tombol
				sendButtonImage(m.chat, `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`, randomm, getRandomThumb2(), tombol, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'othermenu':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				await emote(randomEmoji);
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				const othermenu = 
`> ┌╾⚟┉➲ ${c}【ᴜꜱᴇʀ - ɪɴғᴏ】${c} ⟢
> ├────────────────
> │ ⎘ ɴᴀᴍᴇ: ${c}${m.pushName || 'User'}${c}
> │ ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
> │ ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
> │ ⎘ ʀᴏʟᴇ: ${role}
> │ ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
> │ ⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
> │ ⎘ sᴀʟᴅᴏ: ${belenc}
> │ ⎘ ʟᴇᴠᴇʟ: ${level}
> │ ⎘ ᴇxᴘ: ${xp}
> │ ⎘ ᴄᴏᴍᴍᴀɴᴅ ᴄᴏᴜɴᴛ: ${commandCount}
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ᴏᴛʜᴇʀ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}popular
> ┞ᗛ ${simbols} ${prefix}script
> ┞ᗛ ${simbols} ${prefix}totalfitur
> ┞ᗛ ${simbols} ${prefix}readviewonce
> ┞ᗛ ${simbols} ${prefix}faktaunik
> ┞ᗛ ${simbols} ${prefix}mitos
> ┞ᗛ ${simbols} ${prefix}delete
> ┞ᗛ ${simbols} ${prefix}imdb <film>
> ┞ᗛ ${simbols} ${prefix}jadwalsholat
> ┞ᗛ ${simbols} ${prefix}listkota
> ┞ᗛ ${simbols} ${prefix}owner
> ┞ᗛ ${simbols} ${prefix}about
> └───────────────╼.✗`;
const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴏᴛʜᴇʀ ᴍᴇɴᴜ${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				const tombol = [
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "Instagram 📱",
						url: `https://www.instagram.com/ikyy_joki08`,
					}),
				},
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "GitHub 🌐",
						url: `https://github.com/RizkiBotz/kyy-botz`,
					}),
				}, ];
				// Kirim pesan dengan gambar dan tombol
				sendButtonImage(m.chat, `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`, othermenu, getRandomThumb2(), tombol, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			
			case 'nsfwmenu':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				await emote(randomEmoji);
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				const othermenu = 
`> ┌╾⚟┉➲ ${c}【ᴜꜱᴇʀ - ɪɴғᴏ】${c} ⟢
> ├────────────────
> │ ⎘ ɴᴀᴍᴇ: ${c}${m.pushName || 'User'}${c}
> │ ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
> │ ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
> │ ⎘ ʀᴏʟᴇ: ${role}
> │ ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
> │  l⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
> │ ⎘ sᴀʟᴅᴏ: ${belenc}
> │ ⎘ ʟᴇᴠᴇʟ: ${level}
> │ ⎘ ᴇxᴘ: ${xp}
> │ ⎘ ᴄᴏᴍᴍᴀɴᴅ ᴄᴏᴜɴᴛ: ${commandCount}
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ɴsғᴡ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ⎘ ᴘʀɪᴠᴀᴛ ᴄᴏᴍᴍᴀɴᴅs
> ┞ᗛ ${simbols} ${prefix}hentai
> ┞ᗛ ${simbols} ${prefix}blowjob
> ┞ᗛ ${simbols} ${prefix}trap
> ┞ᗛ ${simbols} ${prefix}hwaifu
> ┞ᗛ ${simbols} ${prefix}hneko
> ┞ᗛ ${simbols} ${prefix}hloli
> └───────────────╼✗`;
const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ɴsғᴡ ᴍᴇɴᴜ${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 1000)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				const tombol = [
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "Instagram 📱",
						url: `https://www.instagram.com/ikyy_joki08`,
					}),
				},
				{
					name: "cta_url",
					buttonParamsJson: JSON.stringify(
					{
						display_text: "GitHub 🌐",
						url: `https://github.com/RizkiBotz/kyy-botz`,
					}),
				}, ];
				// Kirim pesan dengan gambar dan tombol
				sendButtonImage(m.chat, `ʜɪ @${m.sender.split('@')[0]} 👋🏻,`, othermenu, getRandomThumb2(), tombol, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			
			
			
			     
			     
			     
			     case 'allmenu':
			     case 'menuall':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				await emote(randomEmoji);
				// Ambil database limit dari `cekfire`
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				// Ambil top 4 command populer
				let commands = Object.entries(popularData).filter(([cmd]) => cmd !== 'ai').sort((a, b) => b[1] - a[1]).slice(0, 4).map(([cmd, count]) => `${c}${prefix}${cmd} ${count}${c}`);
				let formattedCommandList = commands.length ? commands.reduce((rows, current, index) =>
				{
					if (index % 2 === 0)
					{
						rows.push([current]);
					}
					else
					{
						rows[rows.length - 1].push(current);
					}
					return rows;
				}, []).map(row => row.join(` | `)).join('\n') : 'Belum ada data command populer.';
				let aiMessage = popularData.ai ? `${c}${popularData.ai}${c}` : `${c}0${c}`;
				// 🔹 Fitur Hitung Mundur Ramadhan & Idul Fitri
    function hitungMundur(targetDate) {
        let now = new Date();
        let target = new Date(targetDate);
        let selisih = target - now;

        if (selisih <= 0) return " *Hari ini!* ";

        let hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
        let jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));

        return ` *${hari} hari, ${jam} jam lagi*`;
    }

    const ramadhanDate = "2025-03-01";  // Tanggal estimasi Puasa Ramadhan 1446 H
    const idulFitriDate = "2025-03-31"; // Tanggal estimasi Idul Fitri 1446 H

    let countdownRamadhan = hitungMundur(ramadhanDate);
    let countdownIdulFitri = hitungMundur(idulFitriDate);
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				// Format menu dengan limit dan register
				const shonhemenu = 
`ʜɪ ${n}@${m.sender.split('@')[0]}${n} 👋🏻

> ┌╾⚟┉➲ ${c}【ᴜꜱᴇʀ - ɪɴғᴏ】${c} ⟢
> ├────────────────
> │ ⎘ ɴᴀᴍᴇ: ${c}${m.pushName || 'User'}${c}
> │ ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
> │ ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
> │ ⎘ ʀᴏʟᴇ: ${role}
> │ ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
> │ ⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
> │ ⎘ ᴛᴀɢ: @${m.sender.split('@')[0]}
> │ ⎘ sᴀʟᴅᴏ: ${belenc}
> │ ⎘ ʟᴇᴠᴇʟ: ${level}
> │ ⎘ ᴇxᴘ: ${xp}
> │ ⎙ ʜɪᴛᴜɴɢ ᴍᴜɴᴅᴜʀ:
> │ ⎘ Ramadhan: ${countdownRamadhan}
> │ ⎘ Idul Fitri: ${countdownIdulFitri}
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ʙᴏᴛ - ɪɴғᴏ】${c} ⟢
> ├────────────────
> │  ⎘ ᴛʏᴘᴇ: ᴄᴀꜱᴇ
> │  ⎘ ᴍᴏᴅᴇ: ${shoNhe.public ? 'Public' : 'Self'}
> │  ⎘ ᴘʀᴇғɪx: ${prefix}
> │  ⎘ ᴅᴀᴛᴇ: ${moment().format('dddd, D MMMM YYYY')}
> │  ⎘ ᴀɪ ʜɪᴛꜱ: ${aiMessage}
> │  ⎘ ᴠᴇʀꜱɪᴏɴ: ${version}
> │  ⎘ ᴛᴏᴘ ᴄᴏᴍᴍᴀɴᴅs:
${formattedCommandList}
> └───────────────╼.✗

> ⚙️ ${c}[LIST ALL MENU]${c} ⎋
> ⎯⎯⎯⎯⎯⎯⧰⎯⎯⎯⎯⎯⎯

> ┌╾⚟┉➲ ${c}【ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}play <q>         
> ┞ᗛ ${simbols} ${prefix}ytmp3 <link>    
> ┞ᗛ ${simbols} ${prefix}ytmp4 <link>     
> ┞ᗛ ${simbols} ${prefix}videy <link>      
> ┞ᗛ ${simbols} ${prefix}song <q>       
> ┞ᗛ ${simbols} ${prefix}ytsearch <q>     
> ┞ᗛ ${simbols} ${prefix}tiktok <link>     
> ┞ᗛ ${simbols} ${prefix}tiktoksearch <q>
> ┞ᗛ ${simbols} ${prefix}ttmp3 <link>     
> ┞ᗛ ${simbols} ${prefix}spotify <q>      
> ┞ᗛ ${simbols} ${prefix}spotifydl <link>  
> ┞ᗛ ${simbols} ${prefix}igdl <link>       
> ┞ᗛ ${simbols} ${prefix}pinterestdl <link> 
> ┞ᗛ ${simbols} ${prefix}pinterest <q>    
> ┞ᗛ ${simbols} ${prefix}gitclone <link>   
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ᴀɴɪᴍᴇ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}anichindetail
> ┞ᗛ ${simbols} ${prefix}anichindl
> ┞ᗛ ${simbols} ${prefix}anichinepisode
> ┞ᗛ ${simbols} ${prefix}anichinsearch
> ┞ᗛ ${simbols} ${prefix}aurataildetail
> ┞ᗛ ${simbols} ${prefix}aurataillast
> ┞ᗛ ${simbols} ${prefix}auratailsearch
> ┞ᗛ ${simbols} ${prefix}auratailpopular
> ┞ᗛ ${simbols} ${prefix}animelast
> ┞ᗛ ${simbols} ${prefix}animpopular
> ┞ᗛ ${simbols} ${prefix}komikindodetail
> ┞ᗛ ${simbols} ${prefix}komikindodownload
> ┞ᗛ ${simbols} ${prefix}komikindosearch
> ┞ᗛ ${simbols} ${prefix}samehadakurelease
> ┞ᗛ ${simbols} ${prefix}samehadakudetail
> ┞ᗛ ${simbols} ${prefix}otakudesuongoing
> ┞ᗛ ${simbols} ${prefix}otakudesusearch
> ┞ᗛ ${simbols} ${prefix}otakudesudetail
> ┞ᗛ ${simbols} ${prefix}oploverzdownload
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}sticker
> ┞ᗛ ${simbols} ${prefix}toimg
> ┞ᗛ ${simbols} ${prefix}tourl
> ┞ᗛ ${simbols} ${prefix}brat <txt>
> ┞ᗛ ${simbols} ${prefix}bratvid <txt>
> ┞ᗛ ${simbols} ${prefix}hd <reply img>
> ┞ᗛ ${simbols} ${prefix}remini <reply img>
> ┞ᗛ ${simbols} ${prefix}tomp3 
> ┞ᗛ ${simbols} ${prefix}toaudio
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ᴀᴜᴅɪᴏ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}bass
> ┞ᗛ ${simbols} ${prefix}blown
> ┞ᗛ ${simbols} ${prefix}deep
> ┞ᗛ ${simbols} ${prefix}earrape
> ┞ᗛ ${simbols} ${prefix}slow
> ┞ᗛ ${simbols} ${prefix}fast
> ┞ᗛ ${simbols} ${prefix}robot
> ┞ᗛ ${simbols} ${prefix}smooth
> ┞ᗛ ${simbols} ${prefix}nightcore
> ┞ᗛ ${simbols} ${prefix}reverse
> ┞ᗛ ${simbols} ${prefix}fat
> ┞ᗛ ${simbols} ${prefix}squirrel
> ┞ᗛ ${simbols} ${prefix}sound1
> ┞ᗛ ${simbols} ${prefix}sound2
> ┞ᗛ ${simbols} ${prefix}sound3
> ┞ᗛ ${simbols} ${prefix}sound4
> ┞ᗛ ${simbols} ${prefix}sound5
> ┞ᗛ ${simbols} ${prefix}sound6
> ┞ᗛ ${simbols} ${prefix}sound7
> ┞ᗛ ${simbols} ${prefix}sound8
> ┞ᗛ ${simbols} ${prefix}sound9
> ┞ᗛ ${simbols} ${prefix}sound10
> ┞ᗛ ${simbols} ${prefix}sound11
> ┞ᗛ ${simbols} ${prefix}sound12
> ┞ᗛ ${simbols} ${prefix}sound13
> ┞ᗛ ${simbols} ${prefix}sound14
> ┞ᗛ ${simbols} ${prefix}sound15
> ┞ᗛ ${simbols} ${prefix}sound16
> ┞ᗛ ${simbols} ${prefix}sound17
> ┞ᗛ ${simbols} ${prefix}sound18
> ┞ᗛ ${simbols} ${prefix}sound19
> ┞ᗛ ${simbols} ${prefix}sound20
> ┞ᗛ ${simbols} ${prefix}sound21
> ┞ᗛ ${simbols} ${prefix}sound22
> ┞ᗛ ${simbols} ${prefix}sound23
> ┞ᗛ ${simbols} ${prefix}sound24
> ┞ᗛ ${simbols} ${prefix}sound25
> ┞ᗛ ${simbols} ${prefix}sound26
> ┞ᗛ ${simbols} ${prefix}sound27
> ┞ᗛ ${simbols} ${prefix}sound28
> ┞ᗛ ${simbols} ${prefix}sound29
> ┞ᗛ ${simbols} ${prefix}sound30
> ┞ᗛ ${simbols} ${prefix}sound31
> ┞ᗛ ${simbols} ${prefix}sound32
> ┞ᗛ ${simbols} ${prefix}sound33
> ┞ᗛ ${simbols} ${prefix}sound34
> ┞ᗛ ${simbols} ${prefix}sound35
> ┞ᗛ ${simbols} ${prefix}sound36
> ┞ᗛ ${simbols} ${prefix}sound37
> ┞ᗛ ${simbols} ${prefix}sound38
> ┞ᗛ ${simbols} ${prefix}sound39
> ┞ᗛ ${simbols} ${prefix}sound40
> ┞ᗛ ${simbols} ${prefix}sound41
> ┞ᗛ ${simbols} ${prefix}sound42
> ┞ᗛ ${simbols} ${prefix}sound43
> ┞ᗛ ${simbols} ${prefix}sound44
> ┞ᗛ ${simbols} ${prefix}sound45
> ┞ᗛ ${simbols} ${prefix}sound46
> ┞ᗛ ${simbols} ${prefix}sound47
> ┞ᗛ ${simbols} ${prefix}sound48
> ┞ᗛ ${simbols} ${prefix}sound49
> ┞ᗛ ${simbols} ${prefix}sound50
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ʀᴀɴᴅᴏᴍ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}neko
> ┞ᗛ ${simbols} ${prefix}waifu
> ┞ᗛ ${simbols} ${prefix}cecanindo
> ┞ᗛ ${simbols} ${prefix}cecanchina
> ┞ᗛ ${simbols} ${prefix}cecankorea
> ┞ᗛ ${simbols} ${prefix}cecanthai
> ┞ᗛ ${simbols} ${prefix}cecanviet
> ┞ᗛ ${simbols} ${prefix}cecanjapan
> ┞ᗛ ${simbols} ${prefix}cats
> ┞ᗛ ${simbols} ${prefix}bluearchive
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ᴀɪ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}metaai
> ┞ᗛ ${simbols} ${prefix}llama
> ┞ᗛ ${simbols} ${prefix}setprompt2
> ┞ᗛ ${simbols} ${prefix}nous
> ┞ᗛ ${simbols} ${prefix}claudeai
> ┞ᗛ ${simbols} ${prefix}dbrxai
> ┞ᗛ ${simbols} ${prefix}deepseek
> ┞ᗛ ${simbols} ${prefix}dreamshaper
> ┞ᗛ ${simbols} ${prefix}img2text
> ┞ᗛ ${simbols} ${prefix}venice
> ┞ᗛ ${simbols} ${prefix}latukam
> ┞ᗛ ${simbols} ${prefix}qwq
> ┞ᗛ ${simbols} ${prefix}stabilityai
> ┞ᗛ ${simbols} ${prefix}stable
> ┞ᗛ ${simbols} ${prefix}flux
> ┞ᗛ ${simbols} ${prefix}gandalf
> ┞ᗛ ${simbols} ${prefix}gemini
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ɢʀᴏᴜᴘ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}grup
> ┞ᗛ ${simbols} ${prefix}getgcid
> ┞ᗛ ${simbols} ${prefix}creategc
> ┞ᗛ ${simbols} ${prefix}closetime
> ┞ᗛ ${simbols} ${prefix}hidetag
> ┞ᗛ ${simbols} ${prefix}opentime
> ┞ᗛ ${simbols} ${prefix}revoke
> ┞ᗛ ${simbols} ${prefix}kudeta
> ┞ᗛ ${simbols} ${prefix}setdesc
> ┞ᗛ ${simbols} ${prefix}store
> ┞ᗛ ${simbols} ${prefix}addlist <key>|<resp>
> ┞ᗛ ${simbols} ${prefix}dellist <key>
> ┞ᗛ ${simbols} ${prefix}updatelist <key>|resp>
> ┞ᗛ ${simbols} ${prefix}setnamegc
> ┞ᗛ ${simbols} ${prefix}delppgc
> ┞ᗛ ${simbols} ${prefix}setppgc
> ┞ᗛ ${simbols} ${prefix}contacttag
> ┞ᗛ ${simbols} ${prefix}sendcontact
> ┞ᗛ ${simbols} ${prefix}getcontact
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ɢᴀᴍᴇ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}tebakgambar
> ┞ᗛ ${simbols} ${prefix}tebakgame
> ┞ᗛ ${simbols} ${prefix}tebakff
> ┞ᗛ ${simbols} ${prefix}tebakkabupaten
> ┞ᗛ ${simbols} ${prefix}tebakjkt48
> ┞ᗛ ${simbols} ${prefix}tebakhewan
> ┞ᗛ ${simbols} ${prefix}tebakchara
> ┞ᗛ ${simbols} ${prefix}tebaklogo
> ┞ᗛ ${simbols} ${prefix}tebakaplikasi
> ┞ᗛ ${simbols} ${prefix}suit
> ┞ᗛ ${simbols} ${prefix}tebakkata
> ┞ᗛ ${simbols} ${prefix}asahotak
> ┞ᗛ ${simbols} ${prefix}lengkapikalimat
> ┞ᗛ ${simbols} ${prefix}tebakbendera
> ┞ᗛ ${simbols} ${prefix}tebakkalimat
> ┞ᗛ ${simbols} ${prefix}siapaaku
> ┞ᗛ ${simbols} ${prefix}tebakkimia
> ┞ᗛ ${simbols} ${prefix}tebaklirik
> ┞ᗛ ${simbols} ${prefix}tebaktebakan
> ┞ᗛ ${simbols} ${prefix}susunkata
> ┞ᗛ ${simbols} ${prefix}caklontong
> ┞ᗛ ${simbols} ${prefix}tekateki
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ᴏᴡɴᴇʀ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}restart
> ┞ᗛ ${simbols} ${prefix}mode
> ┞ᗛ ${simbols} ${prefix}addcase
> ┞ᗛ ${simbols} ${prefix}delcase
> ┞ᗛ ${simbols} ${prefix}poll txt|q,q
> ┞ᗛ ${simbols} ${prefix}addowner
> ┞ᗛ ${simbols} ${prefix}sendsc
> ┞ᗛ ${simbols} ${prefix}delowner
> ┞ᗛ ${simbols} ${prefix}setreply
> ┞ᗛ ${simbols} ${prefix}setmenu
> ┞ᗛ ${simbols} ${prefix}sendclear
> ┞ᗛ ${simbols} ${prefix}addprem
> ┞ᗛ ${simbols} ${prefix}sendbutton
> ┞ᗛ ${simbols} ${prefix}sendbuttonimg
> ┞ᗛ ${simbols} ${prefix}sendbuttonimg2
> ┞ᗛ ${simbols} ${prefix}sendlist
> ┞ᗛ ${simbols} ${prefix}sendlist2
> ┞ᗛ ${simbols} ${prefix}sendlistimg
> ┞ᗛ ${simbols} ${prefix}sendlistch
> ┞ᗛ ${simbols} ${prefix}sendlistimg2
> ┞ᗛ ${simbols} ${prefix}listprem
> ┞ᗛ ${simbols} ${prefix}delprem
> ┞ᗛ ${simbols} ${prefix}setbiobot
> ┞ᗛ ${simbols} ${prefix}upsaluran
> ┞ᗛ ${simbols} ${prefix}upsaluran2
> ┞ᗛ ${simbols} ${prefix}upchannel
> ┞ᗛ ${simbols} ${prefix}upchannels
> ┞ᗛ ${simbols} ${prefix}delppbot
> ┞ᗛ ${simbols} ${prefix}setppbot
> ┞ᗛ ${simbols} ${prefix}listuserfire
> ┞ᗛ ${simbols} ${prefix}cekfire
> ┞ᗛ ${simbols} ${prefix}upfire
> ┞ᗛ ${simbols} ${prefix}delfire
> ┞ᗛ ${simbols} ${prefix}listowner
> ┞ᗛ ${simbols} ${prefix}getcase
> ┞ᗛ ${simbols} ${prefix}addthumb <name>|<link>
> ┞ᗛ ${simbols} ${prefix}listthumb
> ┞ᗛ ${simbols} ${prefix}delthumb <name>
> ┞ᗛ ${simbols} ${prefix}addthumb2 <name>|<replyImg>
> ┞ᗛ ${simbols} ${prefix}listthumb2
> ┞ᗛ ${simbols} ${prefix}delthumb2 <name>
> ┞ᗛ ${simbols} ${prefix}addthumb3 <name>|<replyImg>
> ┞ᗛ ${simbols} ${prefix}listthumb3
> ┞ᗛ ${simbols} ${prefix}delthumb3 <name>
> ┞ᗛ ${simbols} ${prefix}upswtext
> ┞ᗛ ${simbols} ${prefix}upswimg
> ┞ᗛ ${simbols} ${prefix}upswvid
> ┞ᗛ ${simbols} ${prefix}upswaudio
> ┞ᗛ ${simbols} ${prefix}settings
> ┞ᗛ ${simbols} ${prefix}delsession
> ┞ᗛ ${simbols} ${prefix}pushcontact
> ┞ᗛ ${simbols} ${prefix}pushkontak2
> ┞ᗛ ${simbols} ${prefix}pushkontak3
> ┞ᗛ ${simbols} ${prefix}pushkontak4
> ┞ᗛ ${simbols} ${prefix}resetpop
> ┞ᗛ ${simbols} ${prefix}setcmd
> ┞ᗛ ${simbols} ${prefix}delcmd
> ┞ᗛ ${simbols} ${prefix}shoneai
> ┞ᗛ ${simbols} ${prefix}eval
> ┞ᗛ ${simbols} ${prefix}exec
> ┞ᗛ ${simbols} ${prefix}return
> ┞ᗛ ${simbols} ${prefix}listcmd
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ᴏᴛʜᴇʀ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ ${simbols} ${prefix}popular
> ┞ᗛ ${simbols} ${prefix}script
> ┞ᗛ ${simbols} ${prefix}totalfitur
> ┞ᗛ ${simbols} ${prefix}readviewonce
> ┞ᗛ ${simbols} ${prefix}faktaunik
> ┞ᗛ ${simbols} ${prefix}mitos
> ┞ᗛ ${simbols} ${prefix}delete
> ┞ᗛ ${simbols} ${prefix}imdb <film>
> ┞ᗛ ${simbols} ${prefix}jadwalsholat
> ┞ᗛ ${simbols} ${prefix}listkota
> ┞ᗛ ${simbols} ${prefix}owner
> ┞ᗛ ${simbols} ${prefix}about
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【 ғᴇᴀᴛᴜʀᴇᴅ】${c} ⟢
> ├────────────────
> ┞ᗛ ⎘ ᴜꜱᴇʀ ᴄᴏᴍᴍᴀɴᴅs
> ┞ᗛ ${simbols} ${prefix}listuserfire
> ┞ᗛ ${simbols} ${prefix}cekfire
> ┞ᗛ ${simbols} ${prefix}bensin
> ┞ᗛ ${simbols} ${prefix}afk
> ┞ᗛ ${simbols} ${prefix}listcmd
> ┞ᗛ ${simbols} ${prefix}cek
> ┞ᗛ ${simbols} ${prefix}find
> ┞ᗛ ${simbols} ${prefix}ceksaldo
> ┞ᗛ ${simbols} ${prefix}scriptnoenc
> └───────────────╼.✗

> ┌╾⚟┉➲ ${c}【ɴsғᴡ ᴍᴇɴᴜ】${c} ⟢
> ├────────────────
> ┞ᗛ⎘ ᴘʀɪᴠᴀᴛ ᴄᴏᴍᴍᴀɴᴅs
> ┞ᗛ ${simbols} ${prefix}hentai
> ┞ᗛ ${simbols} ${prefix}blowjob
> ┞ᗛ ${simbols} ${prefix}trap
> ┞ᗛ ${simbols} ${prefix}hwaifu
> ┞ᗛ ${simbols} ${prefix}hneko
> ┞ᗛ ${simbols} ${prefix}hloli
> └───────────────╼✗
> │ ᴜᴘᴛɪᴍᴇ: ${runtime(os.uptime())}`;
				const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴀʟʟ ᴍᴇɴᴜ${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 1000)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				if (typemenu === 's1')
				{
					
// Fungsi untuk mengecek status registrasi pengguna
function isUserRegistered(sender) {
    const db = loadUserFire(); // Fungsi untuk memuat database
    return db[sender] && db[sender].register;
}
let buttons;
if (isUserRegistered(m.sender)) {
    // Jika pengguna sudah terdaftar, tampilkan tombol OWNER dan CEL PROFIL
    buttons = [
        {
            buttonId: ".contact",
            buttonText: {
                displayText: "OWNER"
            },
            type: 1
        },
        {
            buttonId: ".cekprofile",
            buttonText: {
                displayText: "CEK PROFIL"
            },
            type: 1
        }
    ];
} else {
    // Jika pengguna belum terdaftar, tampilkan tombol REGISTER
    buttons = [
    {
            buttonId: ".contact",
            buttonText: {
                displayText: "👤OWNER "
            },
            type: 1
        },
        {
            buttonId: ".register",
            buttonText: {
                displayText: "🪪REGISTER"
            },
            type: 1
        }
    ];
  }
					let buttonMessage = {
						document: global.forpdf,
						fileName: waktuucapan,
						mimetype: 'application/pdf',
						fileLength: '100000000000000',
						pageCount: '999',
						image:
						{
							url: getRandomThumb2(), // Pastikan file ini tersedia
							gifPlayback: true
						},
						caption: `${shonhemenu}`, // Teks menu
						contextInfo:
						{
							mentionedJid: [sender],
							forwardingScore: 999,
							isForwarded: true,
							externalAdReply:
							{
								title: namabot,
								body: descown,
								thumbnail: getRandomThumb2(),
								mediaType: 1,
								renderLargerThumbnail: true,
								previewType: 0,
								mediaUrl: gh,
								sourceUrl: gh
							}
						},
						footer: isUserRegistered(m.sender) ? " 🅥 ᴋʏʏ-sᴛᴏʀᴇ" : "🅥 ᴋʏʏ-sᴛᴏʀᴇ",
						buttons: buttons,
						viewOnce: true,
						headerType: 4
					};
					const flowActions = [
					];
					// Tambahkan flowActions ke buttonMessage
					buttonMessage.buttons.push(...flowActions);
					// Kirim pesan
					await shoNhe.sendMessage(m.chat, buttonMessage,
					{
						quoted: hw
					});
				}
				else if (typemenu === 's2')
				{
					const menuv2 =
`ʜɪ ${m.pushName ? m.pushName : 'User'}👋🏻

> ɪ'ᴀᴍ ᴋʏʏ-sᴛᴏʀᴇ, ᴀɴ ᴀᴅᴠᴀɴᴄᴇᴅ ᴅɪɢɪᴛᴀʟ ᴀssɪsᴛᴀɴᴛ ғʀᴏᴍ ᴛʜᴇ ᴏᴛʜᴇʀᴅɪᴍᴇɴsɪᴏɴ ᴏғ ꜱʏsᴛᴇᴍs. ᴄʀᴇᴀᴛᴇᴅ ꜰʀᴏᴍ ᴛʜᴇ ғᴏʀɢᴏᴛᴛᴇɴ ᴄᴏʀᴇ ᴏғ ᴄᴏᴅᴇ ᴀɴᴅ ᴇɴᴄʜᴀɴᴛᴇᴅ ᴡɪᴛʜ ᴇᴛʜᴇʀɪᴀʟ ᴋɴᴏᴡʟᴇᴅɢᴇ, ᴍʏ ᴍɪssɪᴏɴ ɪs ᴛᴏ ᴀssɪsᴛ ʏᴏᴜ ᴡɪᴛʜ ɪɴғᴏʀᴍᴀᴛɪᴏɴ, ᴅᴀᴛᴀ ᴄᴏʟʟᴇᴄᴛɪᴏɴ, ᴀɴᴅ ғᴜɴᴄᴛɪᴏɴᴀʟɪᴛʏ.
${readmore}
┌╾⚟┉➲${c}【 ᴜꜱᴇʀ - ɪɴғᴏ 】${c} ⟢
├────────────────
│  ⎘ ɴᴀᴍᴇ: ${m.pushName || 'User'}
│  ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
│  ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
│  ⎘ ʀᴏʟᴇ: ${role}
│  ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
│  ⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
│  ⎘ sᴀʟᴅᴏ: ${belenc}
│  ⎘ ʟᴇᴠᴇʟ: ${level}
│  ⎘ ᴇxᴘ: ${xp}
│  ⎘ ᴄᴏᴍᴍᴀɴᴅ ᴄᴏᴜɴᴛ: ${commandCount}
└──────────────────╼.✗

┌╾⚟┉➲${c}【 ʙᴏᴛ - ɪɴғᴏ 】${c} ⟢
├────────────────
│  ⎘ ᴛʏᴘᴇ: ᴄᴀꜱᴇ
│  ⎘ ᴍᴏᴅᴇ: ${shoNhe.public ? 'Public' : 'Self'}
│  ⎘ ᴘʀᴇғɪx: ${prefix}
│  ⎘ ᴅᴀᴛᴇ: ${moment().format('dddd, D MMMM YYYY')}
│  ⎘ ᴀɪ ʜɪᴛꜱ: ${aiMessage}
│  ⎘ ᴠᴇʀꜱɪᴏɴ: ${version}
│  ⎘ sᴜᴘᴘᴏʀᴛᴇᴅ
│    ${simbols} ${prefix}tqto
│    ${simbols} ${prefix}realown
│  ⎘ ᴛᴏᴘ ᴄᴏᴍᴍᴀɴᴅs:
${formattedCommandList}
└──────────────────╼.✗

${menuforu(prefix, simbols)}

> ${crown}`
					shoNhe.sendMessage(m.chat,
					{
						image: getRandomThumb2(),
						caption: menuv2
					},
					{
						quoted: hw
					})
				}
				else if (typemenu === 's3')
				{
					const menuv3 = 
``
					shoNhe.sendMessage(m.chat,
					{
						text: menuv3,
						contextInfo:
						{
							mentionedJid: [m.sender],
							externalAdReply:
							{
								showAdAttribution: true,
								title: namabot,
								body: namaowner,
								thumbnail: getRandomThumb3(),
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					},
					{
						quoted: hw
					})
				}
				else if (typemenu === 's4')
				{
					const menuv4 =
``
					shoNhe.sendMessage(m.chat,
					{
						video: fs.readFileSync('./ShoNheMedia/video/sych.mp4'),
						caption: menuv4
					},
					{
						quoted: hw
					})
				}
				else if (typemenu === 's5')
				{
					const menuv5 = 
`ʜɪ ${m.pushName ? m.pushName : 'User'}👋🏻

>`
					shoNhe.sendMessage(m.chat,
					{
						video: fs.readFileSync('./ShoNheMedia/video/sych.mp4'),
						caption: menuv5,
						gifPlayback: true
					},
					{
						quoted: hw
					})
				}
				else if (typemenu === 's6')
				{
					const menuv6 = 
``
					shoNhe.relayMessage(m.chat,
					{
						requestPaymentMessage:
						{
							currencyCodeIso4217: 'INR',
							amount1000: '9999999900',
							requestFrom: m.sender,
							noteMessage:
							{
								extendedTextMessage:
								{
									text: menuv6,
									contextInfo:
									{
										mentionedJid: [m.sender],
										externalAdReply:
										{
											showAdAttribution: true
										}
									}
								}
							}
						}
					},
					{})
				}
				else if (typemenu === 's7')
				{
					const menuv7 = 
``
					shoNhe.sendMessage(m.chat,
					{
						document:
						{
							url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
						},
						caption: menuv7,
						mimetype: 'application/zip',
						fileName: namaowner,
						fileLength: "99999999999",
						contextInfo:
						{
							mentionedJid: [m.sender],
							externalAdReply:
							{
								showAdAttribution: true,
								title: namabot,
								body: namaowner,
								thumbnail: getRandomThumb2(),
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					},
					{
						quoted: hw
					})
				}
				else if (typemenu === 's8')
				{
					const menuv8 = 
``
					shoNhe.sendMessage(m.chat,
					{
						video: fs.readFileSync('./ShoNheMedia/video/sych.mp4'),
						gifPlayback: true,
						caption: menuv8,
						contextInfo:
						{
							mentionedJid: [m.sender],
							externalAdReply:
							{
								title: namabot,
								body: namaowner,
								thumbnail: getRandomThumb3(),
								sourceUrl: ``,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					},
					{
						quoted: m
					})
				}
				else if (typemenu === 's9')
				{
					const menuv9 = 
``
					shoNhe.sendMessage(m.chat,
					{
						video: fs.readFileSync('./ShoNheMedia/video/sych.mp4'),
						caption: menuv9,
						gifPlayback: true,
						contextInfo:
						{
							mentionedJid: [m.sender],
							forwardingScore: 999,
							isForwarded: true,
							mentionedJid: [sender],
							forwardedNewsletterMessageInfo:
							{
								newsletterName: namaowner,
								newsletterJid: idsaluran,
							},
							externalAdReply:
							{
								showAdAttribution: true,
								title: namaowner,
								body: namabot,
								thumbnail: getRandomThumb3(),
								sourceUrl: gh,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					},
					{
						quoted: m
					})
				}
				else if (typemenu === 's10')
				{
					const menuv10 =
``
					let msg = generateWAMessageFromContent(from,
					{
						viewOnceMessage:
						{
							message:
							{
								"messageContextInfo":
								{
									"deviceListMetadata":
									{},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create(
								{
									body: proto.Message.InteractiveMessage.Body.create(
									{
										text: namaowner
									}),
									footer: proto.Message.InteractiveMessage.Footer.create(
									{
										text: namabot
									}),
									header: proto.Message.InteractiveMessage.Header.create(
									{
										title: menuv10,
										subtitle: themeemoji,
										hasMediaAttachment: false
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
									{
										buttons: [
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"Instagram 💛\",\"url\":\"https://www.instagram.com/ikyy_joki08\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"t.me/rizki0822\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/RizkiBotz/kyy_store\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"WHATSAPP ☘️\",\"url\":\"https://chat.whatsapp.com/K7UwzonOYQjCvvyBN2LlKA\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "quick_reply",
											"buttonParamsJson": `{"display_text":"ALLMENU 🗂️","id":"${prefix}allmenu"}`
										},
										{
											"name": "quick_reply",
											"buttonParamsJson": `{"display_text":"OWNER 👤","id":"${prefix}owner"}`
										},
										{
											"name": "quick_reply",
											"buttonParamsJson": `{"display_text":"SCRIPT 📃","id":"${prefix}script"}`
										}],
									})
								})
							}
						}
					},
					{})
					await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
					{
						messageId: msg.key.id
					})
				}
				else if (typemenu === 's11')
				{
					const menuv11 = 
``
					let msg = generateWAMessageFromContent(m.chat,
					{
						viewOnceMessage:
						{
							message:
							{
								"messageContextInfo":
								{
									"deviceListMetadata":
									{},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create(
								{
									body: proto.Message.InteractiveMessage.Body.create(
									{
										text: menuv11
									}),
									footer: proto.Message.InteractiveMessage.Footer.create(
									{
										text: namabot
									}),
									header: proto.Message.InteractiveMessage.Header.create(
									{
										...(await prepareWAMessageMedia(
										{
											image: getRandomThumb2()
										},
										{
											upload: shoNhe.waUploadToServer
										})),
										title: ``,
										gifPlayback: true,
										subtitle: namaowner,
										hasMediaAttachment: false
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
									{
										buttons: [
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"Instagram 💛\",\"url\":\"https://www.instagram.com/ikyy_joki08\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"t.me/rizki0822\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/RizkiBotz/kyy_store\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"WHATSAPP ☘️\",\"url\":\"https://chat.whatsapp.com/K7UwzonOYQjCvvyBN2LlKA\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "quick_reply",
											"buttonParamsJson": `{"display_text":"ALLMENU 🗂️","id":"${prefix}allmenu"}`
										},
										{
											"name": "quick_reply",
											"buttonParamsJson": `{"display_text":"OWNER 👤","id":"${prefix}owner"}`
										},
										{
											"name": "quick_reply",
											"buttonParamsJson": `{"display_text":"SCRIPT 📃","id":"${prefix}script"}`
										}],
									}),
									contextInfo:
									{
										mentionedJid: [m.sender],
										forwardingScore: 999,
										isForwarded: true,
										forwardedNewsletterMessageInfo:
										{
											newsletterJid: idsaluran,
											newsletterName: namaowner,
											serverMessageId: 143
										}
									}
								})
							}
						},
					},
					{})
					await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
					{
						messageId: msg.key.id
					})
				}
				else if (typemenu === 's12')
				{
					const menuv12 = 
`${shomenu}`
					let msg = generateWAMessageFromContent(from,
					{
						viewOnceMessage:
						{
							message:
							{
								"messageContextInfo":
								{
									"deviceListMetadata":
									{},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create(
								{
									body: proto.Message.InteractiveMessage.Body.create(
									{
										text: menuv12
									}),
									footer: proto.Message.InteractiveMessage.Footer.create(
									{
										text: namabot
									}),
									header: proto.Message.InteractiveMessage.Header.create(
									{
										...(await prepareWAMessageMedia(
										{
											image: getRandomThumb2()
										},
										{
											upload: shoNhe.waUploadToServer
										})),
										title: ``,
										gifPlayback: true,
										subtitle: namaowner,
										hasMediaAttachment: false
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
									{
										buttons: [
										{
											"name": "single_select",
											"buttonParamsJson": `{
        "title": "Select Menu!",
        "sections": [
            {
                "title": "Ini adalah command yang sering diginakan",
                "highlight_label": "POPULER",
                "rows": [
                    { 
                        "title": "🔍 ALL MENU", 
                        "description": "Menampilkan semua menu", 
                        "id": ".allmenu" 
                    }
                ]
            },
            {
                "title": "Silahkan Pilih Button Menu di Bawah Ini",
                "highlight_label": "ShoNhe ☘️",
                "rows": [
                    { 
                        "title": "⬇️ DOWNLOAD MENU", 
                        "description": "Menu untuk mendownload dan mencari", 
                        "id": ".downloadmenu" 
                    },
                    {
						title: "🌟 ISLAM MENU",
						description: "Menu untuk Pencarian dan Informasi Islamic",
						id: ".islammenu"
					},
                    { 
                        "title": "📚 OTHER MENU", 
                        "description": "Other menu", 
                        "id": ".othermenu" 
                    },
                    { 
                        "title": "🔥 OWNER MENU", 
                        "description": "Hanya King👑 yang boleh menggunakan command ini", 
                        "id": ".ownermenu" 
                    },
                    { 
                        "title": "🎭 ANIME MENU", 
                        "description": "Command untuk menu anime", 
                        "id": ".animemenu" 
                    },
                    { 
                        "title": "🔮 AI MENU", 
                        "description": "Menu Artificial intelligence free", 
                        "id": ".aimenu" 
                    },
                    { 
                        "title": "♻️ RANDOM MENU", 
                        "description": "Menu random", 
                        "id": ".randommenu" 
                    },
                    { 
                        "title": "🎤 AUDIO MENU", 
                        "description": "Menu untuk merubah audio", 
                        "id": ".audiomenu" 
                    },
                    { 
                        "title": "🔄 CONVERT MENU", 
                        "description": "Menu untuk converter", 
                        "id": ".convertmenu" 
                    },
                    { 
                        "title": "🫧 GROUP MENU", 
                        "description": "Menu tentang group", 
                        "id": ".groupmenu" 
                    }
                ]
            },
            {
                "title": "Document & Support",
                "highlight_label": "ShoNhe v3 ⭐",
                "rows": [
                    { 
                        "title": "📝 SCRIPT", 
                        "description": "Script bot yang saya pakai", 
                        "id": ".script" 
                    },
                    { 
                        "title": "🔑 OWNER", 
                        "description": "Pembuat Bot WhatsApp ShoV1", 
                        "id": ".contact2" 
                    },
                    { 
                        "title": "🪨 TQTO", 
                        "description": "Membantu support dan berbagi", 
                        "id": ".tqto" 
                    }
                ]
            }
        ]
    }`
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"YouTube 💛\",\"url\":\"https://youtube.com/@sychyy00?si=njEkYZWxEm0i7-Wr\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/sh0ydaaa\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/sychyy\",\"merchant_url\":\"https://www.google.com\"}"
										},
										{
											"name": "cta_url",
											"buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://chat.whatsapp.com/GQ5Gp0eSeDS6dPBYeHE6kf\",\"merchant_url\":\"https://www.google.com\"}"
										}]
									}),
									contextInfo:
									{
										mentionedJid: [m.sender],
										forwardingScore: 999,
										isForwarded: true,
										forwardedNewsletterMessageInfo:
										{
											newsletterJid: idsaluran,
											newsletterName: namach,
											serverMessageId: 143
										}
									}
								})
							}
						}
					},
					{})
					await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
					{
						messageId: msg.key.id
					})
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			     
			     
			     
			     
			     
			break
			case 'pushkontak2':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!isGroup) return shoNherly(mess.groups);
				var name = text.split('/')[0];
				var chet = text.split('/')[1];
				if (!name) return shoNherly(`Contoh: ${prefix + command} nama/pesan`);
				if (!chet) return shoNherly(`Contoh: ${prefix + command} nama/pesan`);
				let kontak = {
					displayName: "Contact",
					contacts: [
					{
						displayName: name,
						vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
					}]
				}
				let push = await shoNhe.groupMetadata(m.chat)
				if (push.participants.length > 300) return shoNherly('Batas member maksimal: *300*')
				await shoNherly('bentar');
				for (let a of push.participants)
				{
					const repf = await shoNhe.sendMessage(a.id,
					{
						contacts: kontak
					})
					shoNhe.sendMessage(a.id,
					{
						text: chet
					},
					{
						quoted: repf
					})
					await sleep(1000);
				}
				await shoNherly(mess.dones);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'banned':
			{
			if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners)
				if (!args[0]) return shoNherly(`*Contoh : ${command} add 6281214281312*`)
				if (args[1])
				{
					orgnye = args[1] + "@s.whatsapp.net"
				}
				else if (m.quoted)
				{
					orgnye = m.quoted.sender
				}
				const isBane = banned.includes(orgnye)
				if (args[0] === "add")
				{
					if (isBane) return shoNherly('*Pengguna Ini telah Di Ban*')
					banned.push(orgnye)
					shoNherly(`Succes banned Pengguna Ini`)
				}
				else if (args[0] === "del")
				{
					if (!isBane) return shoNherly('*Pengguna Ini Telah Di hapus Dari Ban*')
					let delbans = banned.indexOf(orgnye)
					banned.splice(delbans, 1)
					shoNherly(`*Berhasil Menghapus Pengguna yang Di Ban*`)
				}
				else
				{
					shoNherly("Error")
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'listban':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (isBan) return shoNherly(mess.bands)
				teksooop = `*List Ban*\n\n`
				for (let ii of banned)
				{
					teksooop += `- ${ii}\n`
				}
				shoNherly(teksooop)
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'autoread':
			{
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (args.length < 1) return shoNherly(`Contoh: ${prefix + command} true/false?`);
				if (q === 'true')
				{
					global.db.data.settings[botNumber].autoread = true;
					shoNherly(`Yay! Auto-read berhasil diubah ke ${q}`);
				}
				else if (q === 'false')
				{
					global.db.data.settings[botNumber].autoread = false;
					shoNherly(`Oke deh! Auto-read berhasil dimatikan, jadi gak bakal dibaca otomatis nih!`);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'totalfitur':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const total = ((fs.readFileSync('./case.js').toString()).match(/case '/g) || []).length
				shoNherly(`Total Fitur : ${total}`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'addprem':
			case 'addpremium':
			case 'setpremium':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
					if (!isShoNheOwn) return shoNherly(mess.owners);
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!args[0]) return shoNherly(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 6285655548594`);
				const bnnd = q.split("|")[0].replace(/[^0-9]/g, '');
				const ceknye = await shoNhe.onWhatsApp(bnnd);
				if (ceknye.length == 0) return shoNherly(`Masukkan nomor yang valid dan terdaftar di WhatsApp!`);
				if (prem.includes(bnnd)) return shoNherly('Nomor ini sudah terdaftar sebagai Premium User!');
				prem.push(bnnd);
				fs.writeFileSync('./database/premium.json', JSON.stringify(prem, null, 2));
				// Update role di userFire.json
				const dbFire = loadUserFire();
				const userJid = bnnd + '@s.whatsapp.net';
				dbFire[userJid] = {
					register: true,
					limit: 1000,
					role: 'vip'
				};
				saveUserFire(dbFire);
				shoNherly(`Nomor ${bnnd} sekarang menjadi Premium User (VIP)!!! 🎉`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'antispam':
			{
				if (!isGroup) return shoNherly(mess.groups);
				if (!isBotAdmins) return shoNherly(mess.abots);
				if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);
				if (args.length < 1) return shoNherly('true/false?')
				if (args[0] === 'true')
				{
					db.data.chats[m.chat].antispam = true
					shoNherly(`> ${command} on ✅`)
				}
				else if (args[0] === 'false')
				{
					db.data.chats[m.chat].antispam = false
					shoNherly(`> ${command} off ❎`)
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'delprem':
			case 'deletepremium':
			case 'delpremium':
			case 'delpr':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
					if (!isShoNheOwn) return shoNherly(mess.owners);
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!args[0]) return shoNherly(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 6285655548594`);
				const ya = q.split("|")[0].replace(/[^0-9]/g, '');
				if (!prem.includes(ya)) return shoNherly('Nomor ini tidak terdaftar sebagai Premium User!');
				const unp = prem.indexOf(ya);
				prem.splice(unp, 1);
				fs.writeFileSync('./database/premium.json', JSON.stringify(prem, null, 2));
				// Update role di userFire.json
				const dbFire = loadUserFire();
				const userJid = ya + '@s.whatsapp.net';
				if (dbFire[userJid])
				{
					dbFire[userJid].role = 'user';
					dbFire[userJid].limit = 100;
					saveUserFire(dbFire);
				}
				shoNherly(`Nomor ${ya} berhasil dihapus dari daftar Premium User! ❌`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'listprem':
			case 'listpremium':
			case 'listpr':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let teks = '┌──⭓「 *List Premium User* 」\n│\n';
				for (let x of prem)
				{
					teks += `│⭔ ${x}\n`;
				}
				teks += `│\n└────────────⭓\n\n*Total : ${prem.length}*`;
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'statustext':
			case 'upswtext':
			case 'upswteks':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!q) return shoNherly('Teksnya mana?');
				await shoNhe.sendMessage('status@broadcast',
				{
					text: q
				},
				{
					backgroundColor: '#FF000000',
					font: 3,
					statusJidList: Object.keys(global.db.data.users)
				});
				shoNherly('Sukses kirim status teks!');
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'sendclear':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!text) return shoNherly('Masukkan ID grup atau nomor kontak.');
				const targetId = text.trim(); // ID grup atau nomor tujuan
				const emptyMessage = '\n'.repeat(1000); // Membuat pesan kosong dengan 1000 baris
				try
				{
					await shoNhe.sendMessage(targetId,
					{
						text: emptyMessage
					}); // Mengirimkan pesan
					shoNherly(`Pesan kosong sebanyak 1000 baris berhasil dikirim ke ${targetId}.`);
				}
				catch (error)
				{
					console.error(error);
					shoNherly('Gagal mengirim pesan kosong. Pastikan ID yang Anda masukkan benar.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'upswvid':
			case 'upswvideo':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (/video/.test(mime))
				{
					// Unduh video dari pesan yang di-reply
					var videosw = await shoNhe.downloadAndSaveMediaMessage(quoted);
					// Dapatkan informasi default untuk caption
					let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
					let mediaType = mime || 'Tidak diketahui';
					let sendTime = new Date().toLocaleString('id-ID',
					{
						timeZone: 'Asia/Jakarta'
					});
					let sender = `${m.pushName || namaowner}`;
					// Buat caption default
					let defaultCaption = `📁 *Ukuran File:* ${fileSize}\n` + `🎥 *Tipe Media:* ${mediaType}\n` + `⏰ *Waktu Dikirim:* ${sendTime}\n` + `👤 *Dikirim oleh:* ${sender}`;
					// Kirim video ke status WhatsApp
					await shoNhe.sendMessage('status@broadcast',
					{
						video:
						{
							url: videosw
						},
						caption: q ? q : defaultCaption
					},
					{
						statusJidList: Object.keys(global.db.data.users)
					});
					await shoNherly('✅ Video berhasil dikirim ke status WhatsApp dengan caption bawaan!');
				}
				else
				{
					shoNherly('⚠️ Tolong reply ke video dulu ya, Cik! 🎥');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'setprompt2':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly('⚠️ Harap masukkan prompt yang ingin digunakan.\n\nContoh: setprompt Kamu adalah AI yang membantu pengguna.');
				if (!(await firely(m, mess.waits))) return;
				aiPrompt = text;
				shoNherly(`✅ Prompt berhasil diperbarui:\n\n${aiPrompt}`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'llama':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Nama case mengikuti nama API
				if (!text) return shoNherly('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: llama33 Apa itu teknologi AI?');
				try
				{
					// Panggil API dengan prompt dan teks yang diberikan
					const apiUrl = `https://api.siputzx.my.id/api/ai/llama33?prompt=${encodeURIComponent(aiPrompt)}&text=${encodeURIComponent(text)}`;
					const response = await axios.get(apiUrl);
					if (response.data && response.data.status)
					{
						shoNherly(response.data.data); // Balas dengan output dari AI
					}
					else
					{
						shoNherly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat menghubungi API.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'metaai':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Nama case sesuai API
				if (!text) return shoNherly('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: meta-llama Apa kabar?');
				try
				{
					// Panggil API tanpa prompt
					const apiUrl = `https://api.siputzx.my.id/api/ai/meta-llama-33-70B-instruct-turbo?content=${encodeURIComponent(text)}`;
					const response = await axios.get(apiUrl);
					if (response.data && response.data.status)
					{
						shoNherly(response.data.data); // Balas dengan output dari AI
					}
					else
					{
						shoNherly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat menghubungi API.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break 
			case 'chatgbt':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Nama case sesuai API
				if (!text) return shoNherly('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: meta-llama Apa kabar?');
				try
				{
					// Panggil API tanpa prompt
					const apiUrl = `https://api.siputzx.my.id/api/ai/meta-llama-33-70B-instruct-turbo?content=${encodeURIComponent(text)}`;
					const response = await axios.get(apiUrl);
					if (response.data && response.data.status)
					{
						shoNherly(response.data.data); // Balas dengan output dari AI
					}
					else
					{
						shoNherly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat menghubungi API.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'nous':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Nama case sesuai API
				if (!text) return shoNherly('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: nous-hermes Hai, apa kabar?');
				try
				{
					// Panggil API dengan parameter content
					const apiUrl = `https://api.siputzx.my.id/api/ai/nous-hermes?content=${encodeURIComponent(text)}`;
					const response = await axios.get(apiUrl);
					if (response.data && response.data.status)
					{
						shoNherly(response.data.data); // Balas dengan output dari AI
					}
					else
					{
						shoNherly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat menghubungi API.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'bett':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const tecs = 'Keren king buttonnya simple wgwgg'
				const textButtons = [
				{
					buttonId: `${prefix}info`,
					buttonText:
					{
						displayText: "Info ℹ️"
					}
				},
				{
					buttonId: `${prefix}help`,
					buttonText:
					{
						displayText: "Help ❓"
					}
				}, ];
				betontex(shoNhe, m.chat, tecs, textButtons, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'bett2':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const olin = 'I love you broo🔥'
				const ShoNhevid = fs.readFileSync("./ShoNheMedia/video/sych.mp4")
				const vidButtons = [
				{
					buttonId: `${prefix}cc`,
					buttonText:
					{
						displayText: "Play ▶️"
					}
				},
				{
					buttonId: `${prefix}pause`,
					buttonText:
					{
						displayText: "Pause ⏸️"
					}
				}, ];
				betonvid(shoNhe, m.chat, ShoNhevid, olin, namaBot, vidButtons, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'bett3':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const sica = 'Halo aku adalah ShoNhe'
				const ShoNhegam = fs.readFileSync("./ShoNheMedia/image/bot.jpg")
				const imgButtons = [
				{
					buttonId: `${prefix}about`,
					buttonText:
					{
						displayText: "About 👤"
					}
				},
				{
					buttonId: `${prefix}contact`,
					buttonText:
					{
						displayText: "Contact 📞"
					}
				}, ];
				betonimg(shoNhe, m.chat, ShoNhegam, sica, namaowner, imgButtons, hw);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'claudeai':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Nama case sesuai API
				if (!text) return shoNherly('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: claudeai Apa kabar?');
				try
				{
					// Panggil API dengan input dari pengguna
					const apiUrl = `https://api.siputzx.my.id/api/ai/claude-sonnet-35?content=${encodeURIComponent(text)}`;
					const response = await axios.get(apiUrl);
					if (response.data && response.data.status)
					{
						shoNherly(response.data.data); // Balas dengan output dari AI
					}
					else
					{
						shoNherly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat menghubungi API.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'dbrxai':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Nama case sesuai API
				if (!text) return shoNherly('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: dbrxai Apa kabar?');
				try
				{
					// Panggil API dengan input dari pengguna
					const apiUrl = `https://api.siputzx.my.id/api/ai/dbrx-instruct?content=${encodeURIComponent(text)}`;
					const response = await axios.get(apiUrl);
					if (response.data && response.data.status)
					{
						shoNherly(response.data.data); // Balas dengan output dari AI
					}
					else
					{
						shoNherly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat menghubungi API.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'bensin':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				const sender = m.sender;
				// Jika user belum ada di database, buat default data
				if (!db[sender])
				{
					db[sender] = {
						limit: 100,
						role: 'user',
						lastClaim: 0,
						registrationSeries: generateUniqueSeries() // Pastikan setiap user memiliki seri unik
					};
					saveUserFire(db);
				}
				const user = db[sender];
				const currentTime = Date.now();
				const oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 hari dalam milidetik
				const userSeries = user.registrationSeries || '';
				const userRole = user.role || 'user';
				// Role owner (unlimited fire)
				if (userRole === 'owner')
				{
					return shoNherly('Lah ngapain king? Fire lu aja unli🗿');
				}
				// Cek apakah pengguna sudah klaim dalam seminggu terakhir
				if (currentTime - user.lastClaim < oneWeek)
				{
					const remainingTime = oneWeek - (currentTime - user.lastClaim);
					const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
					const hours = Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
					const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
					return shoNherly(`⚠️ Anda sudah klaim minggu ini. Coba lagi dalam ${days} hari, ${hours} jam, dan ${minutes} menit.`);
				}
				// Cek keberuntungan berdasarkan seri
				let reward;
				let message;
				// Seri yang berawalan 'A' atau 'a' mendapatkan 500 limit
				if (/^[Aa]/.test(userSeries))
				{
					reward = 150;
					message = `🎉 Keberuntungan berpihak pada Anda! Seri unik Anda (${userSeries}) mendapatkan ${reward} limit!`;
				}
				// Seri yang berawalan angka mendapatkan 500 limit
				else if (/^\d/.test(userSeries))
				{
					reward = 150;
					message = `🎉 Seri angka Anda (${userSeries}) mendapatkan ${reward} limit!`;
				}
				// Seri lainnya mendapatkan limit acak antara 1-20
				else
				{
					reward = Math.floor(Math.random() * 20) + 1; // Limit acak 1-20
					message = `🔥 Anda mendapatkan ${reward} limit dari seri unik Anda (${userSeries}).`;
				}
				// Update limit dan waktu klaim pengguna
				user.limit += reward;
				user.lastClaim = currentTime;
				saveUserFire(db);
				shoNherly(message);
			}
			break;
			case 'deepseek':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Nama case sesuai API
				if (!text) return shoNherly('⚠️ Harap masukkan teks yang ingin dijadikan input untuk AI.\n\nContoh: deepseek Apa kabar?');
				try
				{
					// Panggil API dengan input dari pengguna
					const apiUrl = `https://api.siputzx.my.id/api/ai/deepseek-llm-67b-chat?content=${encodeURIComponent(text)}`;
					const response = await axios.get(apiUrl);
					if (response.data && response.data.status)
					{
						shoNherly(response.data.data); // Balas dengan output dari AI
					}
					else
					{
						shoNherly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat menghubungi API.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'setmenu':
			{
				if (!isShoNheOwn) return shoNherly(mess.owners)
				if (!text) return shoNherly(`There are 8 menu(s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12)\nPlease select one\nExample ${prefix + command} s1`)
				if (text.startsWith('s'))
				{
					typemenu = text
					shoNherly(mess.dones)
				}
				else
				{
					shoNherly(`There are 8 menu(s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12)\nPlease select one\nExample ${prefix + command} s1`)
				}
			}
			break
			case 'setreply':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!text)
				{
					return shoNherly(`Ada 4 pilihan reply (s1, s2, s3, s4)\nSilakan pilih salah satu.\nContoh: ${prefix + command} s1`);
				}
				if (text.startsWith('s'))
				{
					typereply = text; // Set tipe reply
					return shoNherly(mess.dones); // Berikan konfirmasi sukses
				}
				// Jika input tidak valid
				return shoNherly(`Ada 4 pilihan reply (s1, s2, s3, s4)\nSilakan pilih salah satu.\nContoh: ${prefix + command} s1`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'privatechatonly':
				if (!isShoNheOwn) return shoNherly('⚠️ Hanya owner yang bisa menggunakan perintah ini.');
				const status = args[0]?.toLowerCase();
				if (status === 'on')
				{
					global.privateChatOnly = true;
					global.public = true;
					global.groupOnly = false;
					shoNherly('✅ Mode Private Chat Only telah diaktifkan.\n❌ Mode Group telah dinonaktifkan');
				}
				else if (status === 'off')
				{
					global.privateChatOnly = false;
					global.public = true;
					shoNherly('❌ Mode Private Chat Only telah dinonaktifkan.\n✅ Mode public telah diaktifkan');
				}
				else
				{
					shoNherly('❌ Gunakan: privatechatonly [on/off]');
				}
				break;
			case 'dreamshaper':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Nama case sesuai API
				if (!text) return shoNherly('⚠️ Harap masukkan prompt untuk membuat gambar.\n\nContoh: dreamshaper buatkan gambar kucing');
				if (!(await firely(m, mess.waits))) return;
				try
				{
					// Panggil API dengan input dari pengguna
					const apiUrl = `https://api.siputzx.my.id/api/ai/dreamshaper?prompt=${encodeURIComponent(text)}`;
					const response = await axios.get(apiUrl,
					{
						responseType: 'arraybuffer'
					}); // Mengatur response untuk menangani buffer gambar
					if (response.status === 200)
					{
						const buffer = Buffer.from(response.data, 'binary'); // Konversi data menjadi buffer
						shoNhe.sendMessage(m.chat,
						{
							image: buffer,
							caption: `Gambar berhasil dibuat berdasarkan prompt: "${text}"`
						},
						{
							quoted: m
						});
					}
					else
					{
						shoNherly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat menghubungi API.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'menusimpel':
			case 'simpelmenu':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let menu = `*_👋🏻 *Hello! I am K͜ʏʏ-Stoʀɛ Bot Version 4.0.0.*  
Ready products like nokos, and many more! Designed with precision and care, I ensure your experience is seamless and efficient.  

╭───❐ *I N F O R M A S I* ❐───✧  
├ 📜 *Bot Name* : main1 
├ 👨‍💻 *Owner* : K͜ʏʏ-Stoʀɛ⁹⁹
├ 🌐 *Version* : 4.0.0  
├ 🛒 *Product* : Nokos  
╰─────────────────────✧  

💡 *Feel free to explore all my features using the menu provided!*  
🔰 Powered by 🅥 K͜ʏʏ-Stoʀɛ⁹⁹ _*`;
				// Tombol utama
				let buttons = [
				{
					buttonId: ".about",
					buttonText:
					{
						displayText: "ABOUT 🔰"
					},
					type: 1
				},
				{
					buttonId: ".tqto",
					buttonText:
					{
						displayText: "TQTO 🎉"
					},
					type: 1
				}];
				// Pesan dengan media video
				let buttonMessage = {
					document: global.forpdf,
					fileName: waktuucapan,
					mimetype: 'application/pdf',
					fileLength: '100000000000000',
					pageCount: '999',
					image:
					{
						url: getRandomThumb2(), // Pastikan file ini tersedia
						gifPlayback: true
					},
					caption: `${menu}`, // Teks menu
					contextInfo:
					{
						forwardingScore: 999,
						isForwarded: true,
						externalAdReply:
						{
							title: "Bot Status",
							body: "🟢 Active",
							thumbnail: getRandomThumb2(),
							mediaType: 1,
							renderLargerThumbnail: true,
							previewType: 0,
							mediaUrl: gh,
							sourceUrl: gh
						}
					},
					footer: "🅥 K͜ʏʏ-Stoʀɛ",
					buttons: buttons,
					viewOnce: true,
					headerType: 4
				};
				// Tambahan flow actions
				const flowActions = [
				{
					buttonId: 'action',
					buttonText:
					{
						displayText: 'This Button List'
					},
					type: 4,
					nativeFlowInfo:
					{
						name: 'single_select',
						paramsJson: JSON.stringify(
						{
							title: "Select Menu!",
							sections: [
							{
								title: "Silahkan Pilih Button Menu di Bawah Ini",
								highlight_label: "Powered by K͜ʏʏ-Stoʀɛ ",
								rows: [
								{
									title: " All Menu",
									description: " Semua Menu",
									id: ".allmenuu"
								},
								{
									title: " Owner",
									description: " Info Owner",
									id: ".owner"
								},
								{
									title: " Produk",
									description: " Produk Info",
									id: ".produk"
								},
								{
									title: " Donasi",
									description: " Donasi Dong",
									id: ".donasi"
								},
								{
									title: " Group Menu",
									description: " Menu Group",
									id: ".grupmenu"
								},
								{
									title: " Setting Bot",
									description: " Pengaturan Bot",
									id: ".settings"
								}]
							}]
						})
					},
					viewOnce: true
				}, ];
				// Tambahkan flowActions ke buttonMessage
				buttonMessage.buttons.push(...flowActions);
				// Kirim pesan
				await shoNhe.sendMessage(m.chat, buttonMessage,
				{
					quoted: m
				});
				}
			break
			case 'img2text':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				try
				{
					// Periksa apakah file media valid (gambar)
					if (/webp|jpg|jpeg|png/.test(mime))
					{
						// Menambahkan pesan loading dan menyimpan key untuk edit nanti
						if (!(await firely(m, mess.waits))) return; // Jika limit habis, proses berhenti di sini
						// Emoji yang akan digunakan
						const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
						// Mengirimkan reaksi secara berurutan
						for (const emoji of reactEmojis)
						{
							await shoNhe.sendMessage(m.chat,
							{
								react:
								{
									text: emoji,
									key: m.key
								}
							});
						}
						// Unduh media
						let media = await quoted.download();
						// Unggah media ke Uguu.se untuk mendapatkan URL
						let anu = await UguuSe(media);
						if (!anu.url) throw 'Gagal mengunggah media ke Uguu.se!';
						// Kirim URL ke API Anda
						let response = await fetch(`https://api.siputzx.my.id/api/ai/image2text?url=${anu.url}`);
						let result = await response.json();
						// Periksa respons API
						if (result.status && result.data)
						{
							// Terjemahkan hasil ke Bahasa Indonesia menggunakan translate-google-api
							let translatedText = await translate(result.data,
							{
								from: 'en',
								to: 'id'
							});
							// Kirim hasil terjemahan ke pengguna
							shoNherly(`*Hasil Deskripsi Gambar (Bahasa Indonesia):*\n\n${translatedText}`);
						}
						else
						{
							shoNherly('❌ Gagal mendapatkan deskripsi gambar dari API!');
						}
					}
					else
					{
						shoNherly('⚠️ Kirim atau reply gambar yang ingin diubah menjadi teks!');
					}
				}
				catch (e)
				{
					// Tangani error dan kirim pesan jika ada masalah
					console.error(e);
					shoNherly('❌ Terjadi kesalahan saat memproses gambar!');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'venice':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Nama case sesuai API
				if (!text) return shoNherly('⚠️ Harap masukkan prompt untuk AI Venice.\n\nContoh: venice Hai, bagaimana kabarmu?');
				try
				{
					// Panggil API dengan prompt dari pengguna
					const apiUrl = `https://api.siputzx.my.id/api/ai/venice?prompt=${encodeURIComponent(text)}`;
					const response = await axios.get(apiUrl);
					// Cek respons API
					if (response.data && response.data.status)
					{
						shoNherly(response.data.message); // Balas dengan output dari AI Venice
					}
					else
					{
						shoNherly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat menghubungi API.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'addsaldo':
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (args.length < 2) return shoNherly('⚠️ Format salah! Gunakan: .addsaldo @tag/nomor jumlah');
				let targetUser;
				// Cek apakah pengguna mengetik dengan mention atau nomor HP
				if (m.mentionedJid.length > 0)
				{
					targetUser = m.mentionedJid[0]; // Ambil user dari mention
				}
				else
				{
					targetUser = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'; // Ambil angka saja dan ubah format
				}
				let amount = parseInt(args[1]);
				if (isNaN(amount) || amount <= 0)
				{
					return shoNherly('⚠️ Masukkan jumlah saldo yang valid.');
				}
				const result = addBalance(targetUser, amount, m.sender);
				shoNherly(result);
				break;
			case 'find':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const series = args[0];
				if (!series)
				{
					shoNherly(`⚠️ Harap masukkan kode seri.`);
					return;
				}
				const db = loadUserFire();
				const userEntry = Object.entries(db).find(([_, user]) => user.registrationSeries === series);
				if (userEntry)
				{
					const [sender, user] = userEntry;
					shoNherly(`🎉 Pengguna ditemukan:\n- Nama: ${m.pushName || 'Tidak diketahui'}\n- Nomor: ${sender.split('@')[0]}\n- Role: ${user.role}\n- Limit: ${user.limit}\n- Seri: ${user.registrationSeries}`);
				}
				else
				{
					shoNherly(`⚠️ Tidak ada pengguna dengan kode seri tersebut.`);
				}
			}
			break;
			case 'claim':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				const user = db[m.sender];
				shoNherly(`🎉 Selamat! Kode seri Anda adalah *${user.registrationSeries}*.\nGunakan ini untuk klaim hadiah di event-event tertentu!`);
				}
			break
			case 'tesloading':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "███▒▒▒▒▒▒▒▒▒ 30%", "██████▒▒▒▒▒▒ 50%", "████████▒▒▒▒ 80%", "███████████ 100%"];
const {
    key
} = await shoNhe.sendMessage(m.chat, {
    text: '⚠️ *INITIALIZING SYSTEM...* PLEASE WAIT...'
});

for (let i = 0; i < lod.length; i++) {
    await shoNhe.sendMessage(m.chat, {
        text: `🖥️ *STATUS UPDATE*:\n\n⏳ *LOADING...* ${lod[i]}\n\n*System Processing... Please remain patient. This may take a few moments.*`
    });
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading delay
}

await shoNhe.sendMessage(m.chat, {
    text: '✅ *SYSTEM INITIALIZATION COMPLETE.*\n\n*Welcome to the network.*'
});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 1000)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				// Setelah semua update selesai, edit menjadi "Loading selesai"
				await shoNhe.sendMessage(m.chat,
				{
					text: '✅ Loading selesai!',
					edit: key
				});
				// Kirim pesan lain setelah loading selesai
				shoNherly('Proses loading telah selesai!');
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'addthumb2':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				if (!isShoNheOwn) return shoNherly(mess.owners);
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!quoted || !/image/.test(mime)) return shoNherly(`Kirim/Reply Image dengan Caption untuk menambahkan thumbnail.`);
				const namaThumb2 = text.trim();
				if (!namaThumb2) return shoNherly(`Masukkan nama thumbnail yang ingin ditambahkan.`);
				const resultAdd2 = await addThumb2(namaThumb2, quoted, mime);
				shoNherly(resultAdd2);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'delthumb2':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				if (!isShoNheOwn) return shoNherly(mess.owners);
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const namaHapus2 = text.trim();
				if (!namaHapus2) return shoNherly(`Masukkan nama thumbnail yang ingin dihapus.`);
				const resultDel2 = delThumb2(namaHapus2);
				shoNherly(resultDel2);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'listthumb2':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				if (!isShoNheOwn) return shoNherly(mess.owners);
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const listResult2 = listThumb2();
				shoNherly(listResult2);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'addthumb3':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				if (!isShoNheOwn) return shoNherly(mess.owners);
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!quoted || !/image/.test(mime)) return shoNherly(`Kirim/Reply Image dengan Caption untuk menambahkan thumbnail.`);
				const namaThumb3 = text.trim();
				if (!namaThumb3) return shoNherly(`Masukkan nama thumbnail yang ingin ditambahkan.`);
				const resultAdd3 = await addThumb3(namaThumb3, quoted, mime);
				shoNherly(resultAdd3);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'delthumb3':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				if (!isShoNheOwn) return shoNherly(mess.owners);
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const namaHapus3 = text.trim();
				if (!namaHapus3) return shoNherly(`Masukkan nama thumbnail yang ingin dihapus.`);
				const resultDel3 = delThumb3(namaHapus3);
				shoNherly(resultDel3);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'listthumb3':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				if (!isShoNheOwn) return shoNherly(mess.owners);
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const listResult3 = listThumb3();
				shoNherly(listResult3);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'revoke':
			case 'resetlink':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				if (!isAdmins && !isShoNheOwns) return shoNherly(mess.admins);
				if (!isBotAdmins) return shoNherly(mess.abots);
				await shoNhe.groupRevokeInvite(m.chat).then(res =>
				{
					shoNherly(`Reset Success`)
				})
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'latukam':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Nama case sesuai API
				if (!text) return shoNherly('⚠️ Harap masukkan konten untuk AI Latukam.\n\nContoh: latukam Hai, bagaimana kabarmu?');
				try
				{
					// Panggil API dengan input dari pengguna
					const apiUrl = `https://api.siputzx.my.id/api/ai/latukam?content=${encodeURIComponent(text)}`;
					const response = await axios.get(apiUrl);
					// Cek respons API
					if (response.data && response.data.status)
					{
						shoNherly(response.data.data); // Balas dengan output dari AI Latukam
					}
					else
					{
						shoNherly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat menghubungi API.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			//=============[ Islam - Feature ]=================//
			
case 'kisahnabi': 
{

				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
if (!text) return shoNherly(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return shoNherly("*Not Found*")

let hasil = `*👳 Nabi :* ${kisah.name}
*- Tanggal Lahir :* ${kisah.thn_kelahiran}
*- Tempat Lahir :* ${kisah.tmp}
*- Usia :* ${kisah.usia}

*—————— \`[ K I S A H ]\` ——————*

${kisah.description}`

shoNherly(`${hasil}`)
if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
}
break
case 'asmaulhusna': {

				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
    const contoh = `*\`「 Asmaul Husna 」\`*`;
    const anjuran = `
Dari Abu Hurairah radhiallahu anhu, Rasulullah Saw bersabda: 
*"إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"*  
**Artinya:** "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`;
    
    let json = global.asmaulhusna2;

    // Jika tidak ada argumen, tampilkan semua Asmaul Husna
    if (!args[0]) {
        let data = json.map((v, i) => 
            `${i + 1}. ${v.latin}\n${v.arabic}\n*Artinya (ID):* _"${v.translation_id}"_\n*Artinya (EN):* _"${v.translation_en}"_`
        ).join('\n\n');
        return shoNherly(`${contoh}\n\n${data}\n\n${anjuran}`);
    }

    // Jika ada argumen, tampilkan Asmaul Husna berdasarkan nomor
    if (args[0]) {
        if (isNaN(args[0])) return reply(`Contoh penggunaan:\nasmaulhusna 1`);
        if (args[0] < 1 || args[0] > 99) throw `Minimal 1 dan maksimal 99!`;

        let result = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''));
        if (!result) return reply(`Asmaul Husna nomor ${args[0]} tidak ditemukan!`);
        
        return shoNherly(`*\`「 Asmaul Husna 」\`*

No. ${result.index}
*${result.latin}*
${result.arabic}
*Artinya (ID):* _"${result.translation_id}"_  
*Artinya (EN):* _"${result.translation_en}"_`);
    }
    if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
}
break;


case 'ayatkursi': {

				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
    let ayatKursi = `
    *Ayat Kursi*

    *Arab:*
    اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ  

    *Latin:*
    Allahu laa ilaaha illa huwa, Al-Hayyul Qayyum, laa ta'khudhuhu sinatun wa laa naum, lahu maa fis-samaawaati wa maa fil-ardh, man dzalladzii yasyfa'u 'indahu illa bi idznih, ya'lamu maa baina aidiihim wa maa khalfahum, wa laa yuhiithuuna bisyai-in min 'ilmihi illa bimaa syaa, wa si'a kursiyyuhus-samaawaati wal-ardh, wa laa ya'uduhu hifzhuhumaa wa huwal 'aliyyul azhiim.  

    *Artinya:*
    Allah, tidak ada Tuhan melainkan Dia yang hidup kekal lagi terus-menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya. Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar.  
    `;
    shoNherly(ayatKursi.trim());
    if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
}
break;
case 'bacaansholat': {

				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
    let bacaan = JSON.stringify(global.bacaanshalat);
    let json = JSON.parse(bacaan);
    let data = json.result
        .map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`)
        .join('\n\n');
    let contoh = `*\`「 Bacaan Shalat 」\`*\n\n`;
    shoNherly(`${contoh}${data}`);
    if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
}
break;

case 'doaharian': {
let src = JSON.parse(fs.readFileSync('./lib/json/doaharian.json', 'utf-8'))
let caption = src.map((v, i) => {
return `
*${i + 1}.* ${v.title}

•°• Latin :
${v.latin}

•°• Arabic :
${v.arabic}

•°• Translate :
${v.translation}
`.trim()
}).join('\n\n')
shoNherly(`${caption}`)
}
break
case 'niatsholat': {

				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
    if (!q) return reply(`Contoh Penggunaan :\nniatsholat Subuh`);
    let text = q.toLowerCase() || '';
    let data = global.niatsholat.find(v => v.solat === text);
    if (!data) return shoNherly(`*\`[ ${q} Tidak Ditemukan ]\`*\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`);
    shoNherly(`*\`[ Niat Sholat ${q.charAt(0).toUpperCase() + q.slice(1)} ]\`*

*Arab :* ${data.arabic}

*Latin :* ${data.latin}

*Translate :* ${data.translation_id}`.trim());
if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
}
break;

case 'quotesislami': {

				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
    const global = {
        qislami: [
            { arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", arti: "Sesungguhnya bersama kesulitan ada kemudahan." },
            { arabic: "وَقُل رَّبُّ زِدْنِي عِلْمًا", arti: "Dan katakanlah: 'Ya Tuhanku, tambahkanlah ilmu kepadaku.'" },
            { arabic: "اللّهُ لَا إِلٰهَ إِلَّا هُوَ", arti: "Allah, tidak ada Tuhan selain Dia." },
            { arabic: "وَقَتَلْتُ نَفْسَكِ فَاغْفِرْ لِي", arti: "Dan aku telah membunuh diriku, maka ampunilah aku." },
            { arabic: "إِنَّ اللّهَ مَعَ الصَّابِرِينَ", arti: "Sesungguhnya Allah bersama orang-orang yang sabar." },
            { arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", arti: "Sesungguhnya bersama kesulitan ada kemudahan." },
            { arabic: "رَبُّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَاهُ", arti: "Tuhan kami, janganlah Engkau hukum kami jika kami lupa." },
            { arabic: "إِنَّ اللّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", arti: "Sesungguhnya Allah Maha Kuasa atas segala sesuatu." },
            { arabic: "اللّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ", arti: "Allah adalah cahaya langit dan bumi." },
            { arabic: "مَن جَاءَ بِالْحَسَنَةِ فَلَهُ عَشْرُ أَمْثَالِهَا", arti: "Barangsiapa yang membawa kebaikan, maka dia mendapat sepuluh kali lipat ganjarannya." },
            { arabic: "إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَا وَمَمَاتِي لِلّهِ رَبِّ الْعَالَمِينَ", arti: "Sesungguhnya salatku, ibadahku, hidupku, dan matiku hanya untuk Allah, Tuhan semesta alam." },
            { arabic: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ", arti: "Dan Tuhanmu berfirman: 'Berdoalah kepada-Ku, niscaya Aku akan mengabulkan doamu.'" },
            { arabic: "إِنَّ اللّهَ غَفُورٌ رَحِيمٌ", arti: "Sesungguhnya Allah Maha Pengampun lagi Maha Penyayang." },
            { arabic: "الْفَجْرِ وَلَيَالٍ عَشْرٍ", arti: "Demi fajar dan sepuluh malam yang terakhir." },
            { arabic: "إِنَّ اللّهَ يُحِبُّ التَّوَابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ", arti: "Sesungguhnya Allah mencintai orang-orang yang bertaubat dan mencintai orang-orang yang mensucikan diri." },
            { arabic: "رَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ", arti: "Rahmat-Ku meliputi segala sesuatu." },
            { arabic: "إِنَّ اللّهَ مَعَ الَّذِينَ اتَّقَوْا وَالَّذِينَ هُمْ مُحْسِنُونَ", arti: "Sesungguhnya Allah bersama orang-orang yang bertakwa dan orang-orang yang berbuat baik." },
            { arabic: "أُحِبُّ لِأَخِيكَ مَا تُحِبُّ لِنَفْسِكَ", arti: "Cintailah untuk saudaramu apa yang kamu cintai untuk dirimu sendiri." },
            { arabic: "قُلْ هُوَ اللّهُ أَحَدٌ", arti: "Katakanlah: 'Dia adalah Allah, yang Maha Esa.'" },
            { arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", arti: "Sesungguhnya bersama kesulitan ada kemudahan." },
            { arabic: "وَفِرْحَةً لِأَصْحَابِ الْجَنَّةِ", arti: "Dan kegembiraan bagi penghuni surga." },
            { arabic: "إِنَّ اللّهَ سَمِيعٌ بَصِيرٌ", arti: "Sesungguhnya Allah Maha Mendengar lagi Maha Melihat." },
            { arabic: "وَتَوَكَّلْتُ عَلَى اللّهِ", arti: "Dan aku bertawakkal kepada Allah." },
            { arabic: "لَا إِلٰهَ إِلَّا اللّهُ وَحْدَهُ", arti: "Tidak ada Tuhan selain Allah, yang Maha Esa." },
            { arabic: "إِنَّ اللّهَ يُحِبُّ الصَّابِرِينَ", arti: "Sesungguhnya Allah mencintai orang-orang yang sabar." },
            { arabic: "مَنْ تَرَكَ شَيْئًا لِلَّهِ عَوَّضَهُ اللّهُ", arti: "Barang siapa meninggalkan sesuatu karena Allah, maka Allah akan memberinya ganti." },
            { arabic: "الْحَمْدُ لِلّهِ رَبِّ الْعَالَمِينَ", arti: "Segala puji bagi Allah, Tuhan semesta alam." },
            { arabic: "فَإِنَّ رَحْمَتِي سَبَقَتْ غَضَبِي", arti: "Sesungguhnya rahmat-Ku mendahului murka-Ku." },
            { arabic: "يُدَبِّرُ الْأَمْرَ", arti: "Dia yang mengatur segala urusan." },
            { arabic: "إِنَّ اللّهَ مَعَ الصَّابِرِينَ", arti: "Sesungguhnya Allah bersama orang-orang yang sabar." },
            { arabic: "اللّهُمَّ اجْعَلْنَا مِنْ أَهْلِ الْقُرْآنِ", arti: "Ya Allah, jadikan kami termasuk orang-orang yang ahli Al-Qur'an." },
            { arabic: "اللّهُ وَالْأَكْبَرُ", arti: "Allah Maha Besar." },
            { arabic: "إِنَّ رَبَّكَ وَاسِعُ الْمَغْفِرَةِ", arti: "Sesungguhnya Tuhanmu Maha Luas Pengampunannya." },
            { arabic: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ", arti: "Sesungguhnya orang-orang yang beriman itu bersaudara." },
            { arabic: "إِنَّ اللّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ", arti: "Sesungguhnya Allah itu Maha Indah dan mencintai keindahan." },
            { arabic: "إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَنَهَرٍ", arti: "Sesungguhnya orang-orang yang bertakwa berada dalam surga dan mata air." },
            { arabic: "وَمَنْ يَتَّقِ اللّهَ يَجْعَلْ لَهُ مَخْرَجًا", arti: "Dan barang siapa bertakwa kepada Allah, niscaya Dia akan memberikan jalan keluar baginya." },
            { arabic: "لَا تَحْزَنْ إِنَّ اللّهَ مَعَنَا", arti: "Janganlah kamu bersedih, sesungguhnya Allah bersama kita." },
            { arabic: "يُحِبُّونَ مَنْ جَاءَ وَفِيهِ النَّاسُ", arti: "Mereka mencintai orang yang datang di dalamnya." },
            { arabic: "وَمَا تَفْعَلُوا مِنْ خَيْرٍ فَإِنَّ اللّهَ يَعْلَمُهُ", arti: "Dan apa saja yang kamu kerjakan dari kebaikan, maka sesungguhnya Allah mengetahuinya." },
            { arabic: "لَا تَفْجَعْ أَعْمَالَكُمْ", arti: "Janganlah menyia-nyiakan amal-amalmu." },
            { arabic: "إِنَّ مَا وَعَدَكُمْ اللّهُ وَرَحْمَتَهُ", arti: "Sesungguhnya apa yang dijanjikan oleh Allah adalah kasih sayang-Nya." },
            { arabic: "أَنْتَ وَلِيِّي فِي دُنْيَا وَفِي آخِرَةٍ", arti: "Engkau adalah pelindungku di dunia dan di akhirat." },
            { arabic: "اللّهُمَّ اجْعَلْنَا مِمَّنْ يَسْتَمِعُونَ الْقَوْلَ فَيَتَّبِعُونَ أَحْسَنَهُ", arti: "Ya Allah, jadikan kami termasuk orang yang mendengarkan perkataan dan mengikuti yang terbaik darinya." },
            { arabic: "إِنَّ اللّهَ يُحِبُّ أَنْ تَفْعَلُوا الْحَسَنَاتِ", arti: "Sesungguhnya Allah mencintai jika kamu berbuat kebaikan." },
            { arabic: "قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَا وَمَمَاتِي لِلّهِ", arti: "Katakanlah, sesungguhnya salatku, ibadahku, hidupku, dan matiku hanya untuk Allah." },
            { arabic: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ", arti: "Dan Kami tidak mengutusmu, melainkan untuk menjadi rahmat bagi semesta alam." },
            { arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا", arti: "Wahai orang-orang yang beriman," }
        ]
    };
    const randomIndex = Math.floor(Math.random() * global.qislami.length);
    const randomQuote = global.qislami[randomIndex];
    const { arabic, arti } = randomQuote;
    shoNherly(`${arabic}\n${arti}`);
    if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
}
break;

case 'doatahlil': {

				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
let { result } = JSON.parse(fs.readFileSync('./lib/json/tahlil.json', 'utf-8'))
let caption = result.map((v, i) => {
return `
*${i + 1}.* ${v.title}

•°• Arabic :
${v.arabic}

•°• Translate :
${v.translation}
`.trim()
}).join('\n\n')
shoNherly(`${caption}`)
if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
}
break
			case 'bot':
			case 'cekbot':
			case 'botcek':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						forwardedNewsletterMessageInfo:
						{
							newsletterName: namabot,
							newsletterJid: idsaluran,
						},
						externalAdReply:
						{
							showAdAttribution: true,
							title: waktuucapan,
							body: namabot,
							thumbnail: getRandomThumb2(),
							sourceUrl: gh,
							mediaType: 1,
							renderLargerThumbnail: true
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/audio.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			
			break
			case 'qwq':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Nama case sesuai API
				if (!text) return shoNherly('⚠️ Harap masukkan konten untuk API qwq.\n\nContoh: qwq Hai, bagaimana kabarmu?');
				try
				{
					// Panggil API dengan input dari pengguna
					const apiUrl = `https://api.siputzx.my.id/api/ai/qwq-32b-preview?content=${encodeURIComponent(text)}`;
					const response = await axios.get(apiUrl);
					// Cek respons API
					if (response.data && response.data.status)
					{
						shoNherly(response.data.data); // Balas dengan output dari API QwQ-32B
					}
					else
					{
						shoNherly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat menghubungi API.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'stabilityai':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Nama case sesuai API
				if (!text) return shoNherly('⚠️ Harap masukkan prompt untuk Stability AI.\n\nContoh: stabilityai Buatkan gambar pohon');
				if (!(await firely(m, mess.waits))) return;
				try
				{
					// Panggil API dengan input dari pengguna
					const apiUrl = `https://api.siputzx.my.id/api/ai/stabilityai?prompt=${encodeURIComponent(text)}`;
					const response = await axios.get(apiUrl,
					{
						responseType: 'arraybuffer' // Pastikan menerima data dalam bentuk buffer
					});
					// Cek respons API
					if (response.status === 200)
					{
						const imageBuffer = Buffer.from(response.data, 'binary'); // Konversi respons ke buffer
						shoNhe.sendMessage(m.chat,
						{
							image: imageBuffer, // Kirim gambar sebagai buffer
							caption: `🖼️ Berikut adalah gambar hasil Stability AI untuk prompt:\n\n"${text}"`
						},
						{
							quoted: m
						});
					}
					else
					{
						shoNherly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat menghubungi API.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'stable':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Nama case sesuai API
				if (!text) return shoNherly('⚠️ Harap masukkan prompt untuk Stable.\n\nContoh: stable Buatkan gambar ikan');
				if (!(await firely(m, mess.waits))) return;
				try
				{
					// Panggil API dengan input dari pengguna
					const apiUrl = `https://api.siputzx.my.id/api/ai/stable-diffusion?prompt=${encodeURIComponent(text)}`;
					const response = await axios.get(apiUrl,
					{
						responseType: 'arraybuffer' // Terima data dalam format buffer
					});
					// Cek respons API
					if (response.status === 200)
					{
						const imageBuffer = Buffer.from(response.data, 'binary'); // Konversi respons ke buffer
						shoNhe.sendMessage(m.chat,
						{
							image: imageBuffer, // Kirim gambar sebagai buffer
							caption: `🖼️ Berikut adalah gambar hasil Stable Diffusion untuk prompt:\n\n"${text}"`
						},
						{
							quoted: m
						});
					}
					else
					{
						shoNherly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat menghubungi API.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'flux':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Nama case sesuai API
				if (!text) return shoNherly('⚠️ Harap masukkan prompt untuk Flux AI.\n\nContoh: flux Buatkan gambar cyberpunk lizard');
				if (!(await firely(m, mess.waits))) return;
				try
				{
					// Panggil API dengan input dari pengguna
					const apiUrl = `https://api.siputzx.my.id/api/ai/flux?prompt=${encodeURIComponent(text)}`;
					const response = await axios.get(apiUrl,
					{
						responseType: 'arraybuffer' // Terima data dalam format buffer
					});
					// Cek respons API
					if (response.status === 200)
					{
						const imageBuffer = Buffer.from(response.data, 'binary'); // Konversi respons ke buffer
						shoNhe.sendMessage(m.chat,
						{
							image: imageBuffer, // Kirim gambar sebagai buffer
							caption: `🖼️ Berikut adalah gambar hasil Flux AI untuk prompt:\n\n"${text}"`
						},
						{
							quoted: m
						});
					}
					else
					{
						shoNherly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat menghubungi API.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'gandalf':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Nama case sesuai API
				if (!text) return shoNherly('⚠️ Harap masukkan prompt untuk Gandalf AI.\n\nContoh: gandalf Kamu siapa?');
				try
				{
					// Panggil API dengan input dari pengguna
					const apiUrl = `https://api.siputzx.my.id/api/ai/gandalf?prompt=${encodeURIComponent(text)}`;
					const response = await axios.get(apiUrl);
					// Cek respons API
					if (response.data && response.data.status)
					{
						shoNherly(response.data.data); // Kirim teks hasil dari API Gandalf
					}
					else
					{
						shoNherly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat menghubungi API.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'gemini':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Nama case sesuai API
				if (!text) return shoNherly('⚠️ Harap masukkan konten untuk Gemini Pro AI.\n\nContoh: gemini Hai, bagaimana kabarmu?');
				try
				{
					// Panggil API dengan input dari pengguna
					const apiUrl = `https://api.siputzx.my.id/api/ai/gemini-pro?content=${encodeURIComponent(text)}`;
					const response = await axios.get(apiUrl);
					// Cek respons API
					if (response.data && response.data.status)
					{
						shoNherly(response.data.data); // Kirim teks hasil dari API Gemini Pro
					}
					else
					{
						shoNherly('❌ Tidak dapat memproses permintaan. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat menghubungi API.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'wallhp':
			case 'akira':
			case 'akiyama':
			case 'ana':
			case 'art':
			case 'asuna':
			case 'ayuzawa':
			case 'boruto':
			case 'bts':
			case 'chiho':
			case 'chitoge':
			case 'cosplay':
			case 'cosplayloli':
			case 'cosplaysagiri':
			case 'cyber':
			case 'deidara':
			case 'doraemon':
			case 'elaina':
			case 'emilia':
			case 'erza':
			case 'exo':
			case 'gamewallpaper':
			case 'gremory':
			case 'hacker':
			case 'hestia':
			case 'Husbu':
			case 'inori':
			case 'islamic':
			case 'isuzu':
			case 'itachi':
			case 'itori':
			case 'jennie':
			case 'jiso':
			case 'justina':
			case 'kaga':
			case 'kagura':
			case 'kakasih':
			case 'kaori':
			case 'cartoon':
			case 'shortquote':
			case 'keneki':
			case 'kotori':
			case 'kurumi':
			case 'lisa':
			case 'loli2':
			case 'madara':
			case 'megumin':
			case 'mikasa':
			case 'mikey':
			case 'miku':
			case 'minato':
			case 'mountain':
			case 'naruto':
			case 'nekonime':
			case 'nezuko':
			case 'onepiece':
			case 'pentol':
			case 'pokemon':
			case 'randomnime':
			case 'randomnime2':
			case 'rize':
			case 'rose':
			case 'sagiri':
			case 'sakura':
			case 'sasuke':
			case 'satanic':
			case 'shina':
			case 'shinka':
			case 'shinomiya':
			case 'shizuka':
			case 'shota':
			case 'space':
			case 'technology':
			case 'tejina':
			case 'toukachan':
			case 'tsunade':
			case 'waifu2':
			case 'yotsuba':
			case 'yuki':
			case 'yulibocil':
			case 'yumeko':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!(await firely(m, mess.waits))) return;
				let data
				if (/akira/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/akira.json')
				if (/akiyama/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/akiyama.json')
				if (/ana/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/ana.json')
				if (/art/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/art.json')
				if (/asuna/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/asuna.json')
				if (/ayuzawa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/ayuzawa.json')
				if (/boneka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/boneka.json')
				if (/boruto/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/boruto.json')
				if (/bts/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/bts.json')
				if (/cecan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cecan.json')
				if (/chiho/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/chiho.json')
				if (/chitoge/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/chitoge.json')
				if (/cogan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cogan.json')
				if (/cosplay/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cosplay.json')
				if (/cosplayloli/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cosplayloli.json')
				if (/cosplaysagiri/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cosplaysagiri.json')
				if (/cyber/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cyber.json')
				if (/deidara/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/deidara.json')
				if (/doraemon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/doraemon.json')
				if (/eba/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/eba.json')
				if (/elaina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/elaina.json')
				if (/emilia/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/emilia.json')
				if (/erza/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/erza.json')
				if (/exo/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/exo.json')
				if (/femdom/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/femdom.json')
				if (/freefire/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/freefire.json')
				if (/gamewallpaper/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/gamewallpaper.json')
				if (/glasses/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/glasses.json')
				if (/gremory/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/gremory.json')
				if (/hacker/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/hekel.json')
				if (/hestia/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/hestia.json')
				if (/Husbu/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/Husbu.json')
				if (/inori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/inori.json')
				if (/islamic/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/islamic.json')
				if (/isuzu/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/isuzu.json')
				if (/itachi/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/itachi.json')
				if (/itori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/itori.json')
				if (/jennie/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/jeni.json')
				if (/jiso/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/jiso.json')
				if (/justina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/justina.json')
				if (/kaga/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kaga.json')
				if (/kagura/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kagura.json')
				if (/kakasih/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kakasih.json')
				if (/kaori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kaori.json')
				if (/cartoon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kartun.json')
				if (/shortquote/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/katakata.json')
				if (/keneki/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/keneki.json')
				if (/kotori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kotori.json')
				if (/kpop/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kpop.json')
				if (/kucing/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kucing.json')
				if (/kurumi/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kurumi.json')
				if (/lisa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/lisa.json')
				if (/loli2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/loli.json')
				if (/madara/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/madara.json')
				if (/megumin/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/megumin.json')
				if (/mikasa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mikasa.json')
				if (/mikey/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mikey.json')
				if (/miku/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/miku.json')
				if (/minato/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/minato.json')
				if (/mobile/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mobil.json')
				if (/motor/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/motor.json')
				if (/mountain/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mountain.json')
				if (/naruto/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/naruto.json')
				if (/nekonime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/nekonime.json')
				if (/nezuko/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/nezuko.json')
				if (/onepiece/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/onepiece.json')
				if (/pentol/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/pentol.json')
				if (/pokemon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/pokemon.json')
				if (/profil/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/profil.json')
				if (/progamming/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/programming.json')
				if (/pubg/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/pubg.json')
				if (/randblackpink/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/randblackpink.json')
				if (/randomnime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/randomnime.json')
				if (/randomnime2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/randomnime2.json')
				if (/rize/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/rize.json')
				if (/rose/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/rose.json')
				if (/ryujin/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/ryujin.json')
				if (/sagiri/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/sagiri.json')
				if (/sakura/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/sakura.json')
				if (/sasuke/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/sasuke.json')
				if (/satanic/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/satanic.json')
				if (/shina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shina.json')
				if (/shinka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shinka.json')
				if (/shinomiya/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shinomiya.json')
				if (/shizuka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shizuka.json')
				if (/shota/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shota.json')
				if (/space/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/tatasurya.json')
				if (/technology/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/technology.json')
				if (/tejina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/tejina.json')
				if (/toukachan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/toukachan.json')
				if (/tsunade/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/tsunade.json')
				if (/waifu2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/waifu.json')
				if (/wallhp/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/wallhp.json')
				if (/wallml/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/wallml.json')
				if (/wallmlnime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/wallnime.json')
				if (/yotsuba/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yotsuba.json')
				if (/yuki/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yuki.json')
				if (/yulibocil/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yulibocil.json')
				if (/yumeko/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yumeko.json')
				const response = data[Math.floor(Math.random() * data.length)]
				const buffer = await getBuffer(response);
				await shoNhe.sendMessage(m.chat,
				{
					image: buffer,
					caption: `Nih ${pushname}, ${command}-nya🐬`,
					footer: namabot,
					buttons: [
					{
						buttonId: prefix + command,
						buttonText:
						{
							displayText: "🔄 Lanjut Lagi"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "📜 Kembali ke Menu"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: m
				});
			};
			break;
			case 'programming':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const imageList = ["https://i.pinimg.com/originals/9b/c0/31/9bc031ded28a4eccb4a3f1df621ff84d.png", "https://i.pinimg.com/originals/70/d6/b3/70d6b3aaf2857dce05601505b8ca7db0.jpg", "https://i.pinimg.com/originals/17/cd/41/17cd4124e87c4b30a5fecf2605d86b6b.png", "https://i.pinimg.com/originals/7a/b6/01/7ab6019c0386e2d93910d8a673a4e2a5.jpg", "https://i.pinimg.com/originals/3c/c2/e3/3cc2e3ff1f1a381affb70989c83e6254.jpg", "https://i.pinimg.com/originals/8b/aa/5b/8baa5bb80ce306685aa46505ed299153.png", "https://i.pinimg.com/736x/9b/f4/44/9bf4443834e957d1a6814a792a2d43ed.jpg", "https://i.pinimg.com/originals/7c/ce/a5/7ccea5bda150fe9e381121f865e5cdc6.jpg", "https://i.pinimg.com/originals/69/c3/59/69c359a7c46a780aa6805340d2101e1c.png", "https://i.pinimg.com/736x/59/35/5f/59355f751c1e3698cc6360b1a7390094--twitter-backgrounds-twitter-cover.jpg", "https://i.pinimg.com/originals/10/9d/73/109d732d44806095d8c29e89b8dddb54.jpg", "https://i.pinimg.com/originals/83/13/f6/8313f67d2546e50652d4e31f74a1a789.png", "https://i.pinimg.com/736x/36/37/42/36374223a47ff3c99d113894322fc43b.jpg", "https://i.pinimg.com/originals/0d/fc/3d/0dfc3d3e6ac0032faf1c2ea5ef72977e.jpg", "https://i.pinimg.com/236x/93/dc/67/93dc67f4d99c43e7f3df415ece4e8cf4--minimal.jpg", "https://i.pinimg.com/564x/56/82/d7/5682d780ad6ef317fe4762986a173c51.jpg", "https://i.pinimg.com/originals/31/b2/6b/31b26baa15c9538d118a328bb9d1b98e.jpg", "https://i.pinimg.com/originals/70/03/06/70030615fc560a908929b51b62c1db0e.png", "https://i.pinimg.com/originals/b0/48/cf/b048cf687e6069d768904311806cafcf.jpg", "https://i.pinimg.com/736x/60/0b/7b/600b7bddb7fb0ee8d1885a6cdbc87a19--programming-life-motto.jpg", "https://i.pinimg.com/originals/ef/a9/04/efa90473ab862585d710c406f23979fc.jpg", "https://i.pinimg.com/originals/58/b6/9c/58b69cab115aceffbf7eb879beaa65b5.png", "https://i.pinimg.com/236x/80/18/cb/8018cb671e28e3254703ef31cef5878c--java-code-programming.jpg", "https://i.pinimg.com/736x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg", "https://i.pinimg.com/originals/8e/17/ae/8e17aeb2c0f75a13e20d7d7cb8d11e01.jpg", "https://i.pinimg.com/736x/d8/99/d4/d899d4ab24cfb987def01fab33c894c2.jpg", "https://i.pinimg.com/736x/27/82/f9/2782f930fe6f9c911c19f0431da0eab5.jpg", "https://i.pinimg.com/originals/81/10/0d/81100db7210aed7e2b92cd521d7a2f9d.jpg", "https://i.pinimg.com/originals/33/09/ca/3309ca1330ca91b55b4feeda3f383031.jpg", "https://i.pinimg.com/originals/b2/6b/5b/b26b5b4f274e7054527f5f0dadaa0dc1.jpg", "https://i.pinimg.com/originals/cc/20/39/cc20394fb46b7b5866b2c8e1d38726e8.png", "https://i.pinimg.com/originals/1b/13/1e/1b131e9125f1fd77148d53b4b3d51c1c.jpg", "https://i.pinimg.com/736x/1f/74/ba/1f74bad6a0f2cfa94d927f1063ca2fad--mobile-wallpaper-iphone-wallpaper.jpg", "https://i.pinimg.com/236x/3a/51/b8/3a51b89a621fcdf2e33c75bda4a7ab55.jpg", "https://i.pinimg.com/600x315/ba/9d/09/ba9d0958c35a534968f39c28511c96b6.jpg", "https://i.pinimg.com/originals/ba/2b/e1/ba2be18dd28516a8a813b256dcf4fec2.jpg", "https://i.pinimg.com/474x/11/8a/83/118a835336b1e8902278e64d71db1438.jpg", "https://i.pinimg.com/originals/e0/58/ce/e058ce742a606abb69a5ab3c7efcc724.png", "https://i.pinimg.com/736x/5b/01/e5/5b01e5b8f939355d1b38858b23b1e4d8--computer-science-programming.jpg", "https://i.pinimg.com/736x/40/fa/6b/40fa6bd822acb13adf47a38132cfec3c.jpg", "https://i.pinimg.com/originals/aa/02/f9/aa02f97307df1a3b9ffead3353230222.jpg", "https://i.pinimg.com/originals/01/bb/66/01bb664d62b3cbdc8dae7d164e999cde.jpg", "https://i.pinimg.com/736x/31/dc/9d/31dc9d901456846c66c41d3f36e6f8ed.jpg", "https://i.pinimg.com/originals/5b/4a/0b/5b4a0bee32f002d1f95b9ba8cb9d1556.png", "https://i.pinimg.com/originals/fe/7b/27/fe7b27c60109efb797489691f6d2d023.gif", "https://i.pinimg.com/originals/3f/32/0c/3f320cf5acc1754059922df2be39a08e.jpg", "https://i.pinimg.com/736x/f8/4f/78/f84f7837349b76696e6a81e472c491a5--big-data-scraping.jpg", "https://i.pinimg.com/736x/e3/b0/d1/e3b0d133610001451f924c64041abffe--mobile-wallpaper-wallpaper-free.jpg", "https://i.pinimg.com/474x/a2/ca/d1/a2cad1d4aa3c23a821b5dbc83b4ac16c.jpg", "https://i.pinimg.com/550x/ac/71/e4/ac71e4594eac8addbd1556e1584ae0a3.jpg", "https://i.pinimg.com/736x/b1/f5/30/b1f5307216ac0de996ccbcd22e5a8a13.jpg", "https://i.pinimg.com/originals/d0/d5/cb/d0d5cb62eafbef574f43a85e0c8d8beb.png", "https://i.pinimg.com/originals/21/b6/5f/21b65f2b99464938ca43ce74096647e1.jpg", "https://i.pinimg.com/736x/ee/2d/00/ee2d0036bf8fe7c43ffee21c39b993a1.jpg", "https://i.pinimg.com/736x/da/40/4b/da404bf7bd4398c9f256c65507d3c860.jpg", "https://i.pinimg.com/736x/9d/fe/b8/9dfeb8817ad82d4d6cb0bcb33a64ccfa.jpg", "https://i.pinimg.com/736x/37/e6/3c/37e63c9058765ed27f7b0d9775105133--old-computers-desktop-wallpapers.jpg", "https://i.pinimg.com/236x/bc/18/6a/bc186ab96693c9a2ef4067ee015f4e6d.jpg", "https://i.pinimg.com/736x/50/cd/04/50cd04e6dcf1125d29ee7d90a5241540.jpg", "https://i.pinimg.com/736x/05/8f/81/058f81442bbe2032a9f18ce7c2d5805d--javascript-coding.jpg", "https://i.pinimg.com/736x/98/1c/9c/981c9cd37c72f7a4c5192ecf46765e1d.jpg", "https://i.pinimg.com/236x/f1/97/94/f197941b83be24b3fd400b8ea9951570.jpg", "https://i.pinimg.com/236x/0e/ef/c6/0eefc6b4f997eb9f25b736e7c12cd046.jpg", "https://i.pinimg.com/originals/5d/0d/c1/5d0dc149b468a2e768af19518a7bb61e.jpg", "https://i.pinimg.com/736x/64/8a/dc/648adcee8dfa51cf1e22f4a89a028dc6.jpg", "https://i.pinimg.com/736x/94/b9/6f/94b96fe0cfb406242cc8f1484e179ab3.jpg", "https://i.pinimg.com/originals/e6/3d/c7/e63dc78e692897f3522cb942d5f350e0.jpg", "https://i.pinimg.com/736x/2c/77/4e/2c774ed9d84ee9923b06336a03292b26.jpg", "https://i.pinimg.com/736x/56/6b/16/566b16dbad15ecdcc2e8762b40729f53.jpg", "https://i.pinimg.com/736x/e0/81/bd/e081bd675c7435ebb890c4d63fac405f.jpg", "https://i.pinimg.com/originals/be/53/f2/be53f28e93c322434e8cecc66e8af49f.jpg", "https://i.pinimg.com/originals/98/2f/d3/982fd358c2580ab78df6fac911140b5c.jpg", "https://i.pinimg.com/736x/b6/7e/41/b67e4116e8dc3c2650e1151f7ffc8887--wallpaper-for-computer-science.jpg", "https://i.pinimg.com/736x/26/77/39/2677393cd1992f3cee2f5ab246d8d1ee.jpg", "https://i.pinimg.com/originals/56/b9/c0/56b9c0b9751291c4599b053d543170b6.jpg", "https://i.pinimg.com/originals/3c/7f/a8/3c7fa839104f3343b28bcbf9a3d3db87.jpg", "https://i.pinimg.com/736x/55/d0/ff/55d0ff16a7bbb62ff5d0d5a7e0cb644f.jpg", "https://i.pinimg.com/originals/3e/bf/ce/3ebfce1ca1be67c97a5ce36a3fa9956e.jpg", "https://i.pinimg.com/236x/c0/86/08/c086089bc0baf6b96597e76eb85a4c8e.jpg", "https://i.pinimg.com/736x/14/b4/40/14b4409642dc9011729fc335e9664af1.jpg", "https://i.pinimg.com/736x/db/d5/d3/dbd5d391c6cfbfa0d0d711249481eadd.jpg", "https://i.pinimg.com/originals/8b/00/66/8b0066416a00c5812b1f4470026791fb.jpg", "https://i.pinimg.com/736x/93/af/92/93af92a0c5c2c4d26649edd03fc2cbbe.jpg", "https://i.pinimg.com/originals/ad/f7/a9/adf7a9892eb2b000b4cd75b5007a8aa3.jpg", "https://i.pinimg.com/736x/3c/e4/39/3ce439a152a704da5f7e52c6902689ab.jpg", "https://i.pinimg.com/originals/ed/64/c7/ed64c7101d905375c7c76cce11686115.jpg", "https://i.pinimg.com/originals/d9/eb/94/d9eb9479c601bb4406fdab1e99705c98.jpg", "https://i.pinimg.com/736x/87/b0/10/87b010ca8edd0a4111ee2fea8cdcd521.jpg", "https://i.pinimg.com/736x/93/3e/bb/933ebb6a9d79f8a556c340e7fd8eaedb--c-programming-programming-languages.jpg", "https://i.pinimg.com/originals/f5/a7/93/f5a793ae604cdf5a923b83b36e7cf53a.jpg", "https://i.pinimg.com/736x/86/c1/6c/86c16cadafde494ea5ecfea35e7dffa5--photo-black-free-photos.jpg", "https://i.pinimg.com/736x/31/15/cd/3115cde46928706aa04e1738e4683e7c.jpg", "https://i.pinimg.com/736x/1e/13/42/1e13425fee010f46ade128c2d81ba958--programming-languages-coding.jpg", "https://i.pinimg.com/736x/2b/c3/7d/2bc37dee561b2bbf53d9f41dc4f92596.jpg", "https://i.pinimg.com/originals/75/84/79/758479a023f9884e13c47bb05d73fb95.jpg", "https://i.pinimg.com/736x/01/d5/03/01d503181714d7eb9db97b0e8f5fbe98.jpg", "https://i.pinimg.com/originals/a6/d4/83/a6d483c5d7a41ffd1fa08ffa097af8d6.jpg", "https://i.pinimg.com/236x/ca/86/f8/ca86f8d26d799d1e04bd792220e0e180.jpg", "https://i.pinimg.com/736x/09/b1/d3/09b1d3c9feac0b281de14f1528b65cf5.jpg", "https://i.pinimg.com/originals/87/b8/70/87b870cb787ddd877ae5bec3477c0b89.jpg"];
				const randomImage = pickRandom(imageList);
				// Unduh gambar
				const buffer = await getBuffer(randomImage);
				// Kirim pesan dengan tombol
				await shoNhe.sendMessage(m.chat,
				{
					image: buffer,
					caption: `Nih ${pushname}, ${command}-nya🐬`,
					footer: namabot,
					buttons: [
					{
						buttonId: prefix + command,
						buttonText:
						{
							displayText: "🔄 Lanjut Lagi"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "📜 Kembali ke Menu"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: m
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'swm': 
			case 'steal': 
			case 'stickerwm': 
			case 'take': {
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!quoted) return angryshoNhe (`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
				if (!mime) return angryshoNhe (`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
                if (!(await firely(m, mess.waits))) return;
				const swn = args.join(" ");
				const pcknm = swn.split("|")[0];
				const atnm = swn.split("|")[1];

				if (m.quoted.isAnimated === true) {
					shoNhe.downloadAndSaveMediaMessage(quoted, "gifee");
					shoNhe.sendMessage(m.chat, { 
						sticker: fs.readFileSync("gifee.webp") 
					}, m, { 
						packname: pcknm, 
						author: atnm 
					});
				} else if (/image/.test(mime)) {
					let media = await shoNhe.downloadAndSaveMediaMessage(quoted);
					await shoNhe.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 9) return angryshoNhe ('Video terlalu panjang, maksimal 9 detik ya! ⏳');
					let media = await shoNhe.downloadAndSaveMediaMessage(quoted);
					await shoNhe.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
				} else {
					angryshoNhe (`Kirim foto/video untuk dipakai ya, kak!`);
				}
				if (levelUpMessage)
				{
					await shoNhe.sendMessage(m.chat,
					{
						image: levelUpMessage.image,
						caption: levelUpMessage.text,
						footer: "LEVEL UP🔥",
						buttons: [
						{
							buttonId: `${prefix}cek`,
							buttonText:
							{
								displayText: "👁️‍🗨️CEK FIRE "
							}
						},
						{
							buttonId: `${prefix}menu`,
							buttonText:
							{
								displayText: "⏸️ MENU "
							}
						}],
						viewOnce: true,
					},
					{
						quoted: hw
					});
				}
			}
			break;
			case 'quotesanime':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!(await firely(m, mess.waits))) return;
				try
				{
					// Panggil API untuk mendapatkan data quotes
					const apiUrl = `https://otakotaku.com/quote/view/1567/melihat-harapan`;
					const response = await axios.get(apiUrl);
					// Cek respons API
					if (response.data && response.data.status)
					{
						// Pilih satu quote secara acak
						const quotes = response.data.data;
						const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
						// Kirim pesan dengan quotes acak
						shoNhe.sendMessage(m.chat,
						{
							image:
							{
								url: randomQuote.gambar
							}, // Gambar dari karakter
							caption: `🎭 *Quotes Anime* 🎭\n\n` + `📺 *Anime*: ${randomQuote.anime}\n` + `🎬 *Episode*: ${randomQuote.episode}\n` + `🎭 *Karakter*: ${randomQuote.karakter}\n\n` + `💬 *Quote*:\n"${randomQuote.quotes}"\n\n` + `🔗 *Link*: ${randomQuote.link}`
						},
						{
							quoted: hw
						});
					}
					else
					{
						shoNherly('❌ Tidak dapat menemukan quotes anime. Coba lagi nanti.');
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly('❌ Terjadi kesalahan saat mengambil data quotes anime.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'cecanindo':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/indonesia',
					{
						responseType: 'arraybuffer'
					});
					shoNhe.sendMessage(m.chat,
					{
						image: res.data,
						caption: 'Berikut gambar Cecan Indonesia'
					},
					{
						quoted: hw
					});
				}
				catch (error)
				{
					shoNherly('Gagal mengambil gambar Cecan Indonesia. Silakan coba lagi nanti.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'dellist':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);
				const listStorePath = './database/liststore.json';
				let listStore = {};
				// Membaca database liststore
				if (fs.existsSync(listStorePath))
				{
					listStore = JSON.parse(fs.readFileSync(listStorePath, 'utf8'));
				}
				// Jika key tidak diberikan
				if (!q) return shoNherly(`Gunakan format: ${prefix}dellist <key>`);
				const key = q.toLowerCase(); // Gunakan lowercase untuk pencarian yang tidak case-sensitive
				// Debug: menampilkan daftar key yang ada di liststore
				console.log("Daftar key yang ada:", Object.keys(listStore[m.chat] ||
				{}));
				// Jika key tidak ditemukan dalam liststore
				if (!listStore[m.chat]?.[key]) return shoNherly(`Key *${key}* tidak ditemukan.`);
				// Hapus key dari liststore
				delete listStore[m.chat][key];
				// Simpan perubahan ke file
				fs.writeFileSync(listStorePath, JSON.stringify(listStore, null, 2));
				shoNherly(`Sukses menghapus list dengan key: *${key}*`);
				}
			break
			case 'updatelist':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);
				const listStorePath = './database/liststore.json';
				let listStore = {};
				if (fs.existsSync(listStorePath))
				{
					listStore = JSON.parse(fs.readFileSync(listStorePath, 'utf8'));
				}
				if (!q.includes('|')) return shoNherly(`Gunakan format: ${prefix}dellist <key>|<response>`);
				const [key, response] = q.split('|');
				if (!key || !response) return shoNherly(`Format salah. Gunakan: ${prefix}liststore update <key>|<response>`);
				if (!listStore[m.chat]?.[key]) return shoNherly(`Key *${key}* tidak ditemukan.`);
				listStore[m.chat][key].response = response;
				fs.writeFileSync(listStorePath, JSON.stringify(listStore, null, 2));
				shoNherly(`Sukses memperbarui list dengan key: *${key}*`);
				}
			break
			case 'bluearchive':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let res = await axios.get('https://api.siputzx.my.id/api/r/blue-archive',
					{
						responseType: 'arraybuffer'
					});
					shoNhe.sendMessage(m.chat,
					{
						image: res.data,
						caption: 'Berikut gambar Blue Archive'
					},
					{
						quoted: hw
					});
				}
				catch (error)
				{
					shoNherly('Gagal mengambil gambar Blue Archive. Silakan coba lagi nanti.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'github': 
			case 'gitclone': {
			if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!args[0]) return shoNherly(`📦 *Linknya mana, Kak?*\n\nContoh:\n${prefix}${command} https://github.com/user/repo`);
				if (!isUrl(args[0]) || !args[0].includes('github.com')) 
					return shoNherly(`❌ *Link tidak valid!* Pastikan link berasal dari GitHub ya, Kak.`);
				try {
					if (!(await firely(m, mess.waits))) return;
					let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
					let [, user, repo] = args[0].match(regex) || [];
					if (!user || !repo) return shoNherly(`❌ *Gagal membaca link repositori!* Pastikan link benar ya, Kak.`);
					repo = repo.replace(/.git$/, '');
					let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
					let response = await fetch(url, { method: 'HEAD' });
					let filename = response.headers.get('content-disposition')?.match(/attachment; filename=(.*)/)?.[1] || `${repo}.zip`;
					await shoNhe.sendMessage(m.chat, {
						document: { url: url },
						fileName: filename,
						mimetype: 'application/zip'
					}, { 
						quoted: m 
					});
					shoNherly(`✅ *Berhasil mengirim file repositori GitHub!*\nNama File: ${filename}`);
				} catch (err) {
					console.error(err);
					shoNherly(`❌ *Terjadi kesalahan saat mengunduh repositori!* 😭\n${err.message || err}`);
					}
					if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'cecanchina':
			{								updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/china',
					{
						responseType: 'arraybuffer'
					});
					shoNhe.sendMessage(m.chat,
					{
						image: res.data,
						caption: 'Berikut gambar Cecan China'
					},
					{
						quoted: hw
					});
				}
				catch (error)
				{
					shoNherly('Gagal mengambil gambar Cecan China. Silakan coba lagi nanti.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'cecanjapan':
			{
	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/japan',
					{
						responseType: 'arraybuffer'
					});
					shoNhe.sendMessage(m.chat,
					{
						image: res.data,
						caption: 'Berikut gambar Cecan Japan'
					},
					{
						quoted: hw
					});
				}
				catch (error)
				{
					shoNherly('Gagal mengambil gambar Cecan Japan. Silakan coba lagi nanti.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'cecankorea':
			{
	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/korea',
					{
						responseType: 'arraybuffer'
					});
					shoNhe.sendMessage(m.chat,
					{
						image: res.data,
						caption: 'Berikut gambar Cecan Korea'
					},
					{
						quoted: hw
					});
				}
				catch (error)
				{
					shoNherly('Gagal mengambil gambar Cecan Korea. Silakan coba lagi nanti.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'cecanthai':
			{
updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/thailand',
					{
						responseType: 'arraybuffer'
					});
					shoNhe.sendMessage(m.chat,
					{
						image: res.data,
						caption: 'Berikut gambar Cecan Thailand'
					},
					{
						quoted: hw
					});
				}
				catch (error)
				{
					shoNherly('Gagal mengambil gambar Cecan Thailand. Silakan coba lagi nanti.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'cecanviet':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let res = await axios.get('https://api.siputzx.my.id/api/r/cecan/vietnam',
					{
						responseType: 'arraybuffer'
					});
					shoNhe.sendMessage(m.chat,
					{
						image: res.data,
						caption: 'Berikut gambar Cecan Vietnam'
					},
					{
						quoted: hw
					});
				}
				catch (error)
				{
					shoNherly('Gagal mengambil gambar Cecan Vietnam. Silakan coba lagi nanti.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'cats':
			{
			
				
				try
				{
					let res = await axios.get('https://api.siputzx.my.id/api/r/cats',
					{
						responseType: 'arraybuffer'
					});
					shoNhe.sendMessage(m.chat,
					{
						image: res.data,
						caption: 'Berikut gambar kucing lucu'
					},
					{
						quoted: hw
					});
				}
				catch (error)
				{
					shoNherly('Gagal mengambil gambar kucing. Silakan coba lagi nanti.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'neko':
			{
				
				
				try
				{
					let res = await axios.get('https://api.siputzx.my.id/api/r/neko',
					{
						responseType: 'arraybuffer'
					});
					shoNhe.sendMessage(m.chat,
					{
						image: res.data,
						caption: 'Berikut gambar Neko'
					},
					{
						quoted: hw
					});
				}
				catch (error)
				{
					shoNherly('Gagal mengambil gambar Neko. Silakan coba lagi nanti.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'loli':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let baseUrl = 'https://weeb-api.vercel.app/'
				const response = await fetch(baseUrl + command)
				const imageBuffer = await response.buffer() // Get the image data as a buffer
				let msgs = generateWAMessageFromContent(m.chat,
				{
					viewOnceMessage:
					{
						message:
						{
							"messageContextInfo":
							{
								"deviceListMetadata":
								{},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create(
							{
								body: proto.Message.InteractiveMessage.Body.create(
								{
									text: `Hi ${pushName}\n_*Here is the result of ${command}*_`
								}),
								footer: proto.Message.InteractiveMessage.Footer.create(
								{
									text: namabot
								}),
								header: proto.Message.InteractiveMessage.Header.create(
								{
									hasMediaAttachment: false,
									...await prepareWAMessageMedia(
									{
										image: imageBuffer
									},
									{
										upload: shoNhe.waUploadToServer
									})
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
								{
									buttons: [
									{
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
									}],
								}),
								contextInfo:
								{
									mentionedJid: [m.sender],
									forwardingScore: 999,
									isForwarded: true,
									forwardedNewsletterMessageInfo:
									{
										newsletterJid: idsaluran,
										newsletterName: namach,
										serverMessageId: 143
									}
								}
							})
						}
					}
				},
				{
					quoted: m
				})
				return await shoNhe.relayMessage(m.chat, msgs.message,
				{})
			}
			break
			case 'waifu':
			{
				
				
				try
				{
					let res = await axios.get('https://api.siputzx.my.id/api/r/waifu',
					{
						responseType: 'arraybuffer'
					});
					shoNhe.sendMessage(m.chat,
					{
						image: res.data,
						caption: 'Berikut gambar Waifu'
					},
					{
						quoted: hw
					});
				}
				catch (error)
				{
					shoNherly('Gagal mengambil gambar Waifu. Silakan coba lagi nanti.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'statusimg':
			case 'statusimage':
			case 'upswimg':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (/image/.test(mime))
				{
					// Unduh gambar dari pesan yang di-reply
					var imagesw = await shoNhe.downloadAndSaveMediaMessage(quoted);
					// Dapatkan informasi default untuk caption
					let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
					let mediaType = mime || 'Tidak diketahui';
					let sendTime = new Date().toLocaleString('id-ID',
					{
						timeZone: 'Asia/Jakarta'
					});
					let sender = `${m.pushName || namaowner}`;
					// Buat caption default
					let defaultCaption = `📁 *Ukuran File:* ${fileSize}\n` + `🖼️ *Tipe Media:* ${mediaType}\n` + `⏰ *Waktu Dikirim:* ${sendTime}\n` + `👤 *Dikirim oleh:* ${sender}`;
					// Kirim gambar ke status WhatsApp
					await shoNhe.sendMessage('status@broadcast',
					{
						image:
						{
							url: imagesw
						},
						caption: q ? q : defaultCaption
					},
					{
						statusJidList: Object.keys(global.db.data.users)
					});
					await shoNherly('✅ Gambar berhasil dikirim ke status WhatsApp dengan caption bawaan! 🖼️✨');
				}
				else
				{
					shoNherly('⚠️ Tolong reply ke gambar dulu ya, Cik! 🖼️');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'hwaifu':
	 	case 'hloli':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				if (!isShoNheOwn) return shoNherly(mess.owners);
				const data = await fetchJson(`https://api.waifu.pics/nsfw/waifu`);
				await shoNhe.sendMessage(m.chat,
				{
					image:
					{
						url: data.url
					},
					caption: `Dasar ${pushname}, otak sagne🗿`,
					footer: `${pushname} • Nikmati dengan penuh tanggung jawab!`,
					buttons: [
					{
						buttonId: prefix + command,
						buttonText:
						{
							displayText: "🔄 Lanjut Lagi"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "📜 Kembali ke Menu"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'trap':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
					if (!isShoNheOwn) return shoNherly(mess.owners);
				const data = await fetchJson(`https://api.waifu.pics/nsfw/${command}`);
				await shoNhe.sendMessage(m.chat,
				{
					image:
					{
						url: data.url
					},
					caption: `Dasar ${pushname}, otak sagne🗿`,
					footer: `${pushname} • Nikmati dengan penuh tanggung jawab!`,
					buttons: [
					{
						buttonId: prefix + command,
						buttonText:
						{
							displayText: "🔄 Lanjut Lagi"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "📜 Kembali ke Menu"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'blowjob':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				if (!isShoNheOwn) return shoNherly(mess.owners);
				const data = await fetchJson(`https://api.waifu.pics/nsfw/${command}`);
				await shoNhe.sendMessage(m.chat,
				{
					image:
					{
						url: data.url
					},
					caption: `Dasar ${pushname}, otak sagne🗿`,
					footer: `${pushname} • Nikmati dengan penuh tanggung jawab!`,
					buttons: [
					{
						buttonId: prefix + command,
						buttonText:
						{
							displayText: "🔄 Lanjut Lagi"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "📜 Kembali ke Menu"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			/*
*
* [ *FEATURE HD ( FIX )* ]
* Created By Hann
* 
* Channel: https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
*
*

//📃: jangan protes yaa "kok pake sharp. pasti gada bedanya ini". itu ga cuman resize saja yaa. diperbagus juga fotonya

//Source Code:
case 'hd': {
if (!isRegistered(m)) {
					return sendRegister(shoNhe, m, prefix, namabot);
				}
updatePopularCommand(command);
const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function upscaleImage(inputPath, resolutionOption) {
   const outputPath = './output/';
  try {
    if (!fs.existsSync(inputPath)) {
      throw new Error(`File tidak ditemukan: ${inputPath}`);
    }

    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const resolutions = {
      1: { label: '1080p', width: 1920, height: 1080 },
      2: { label: '2k', width: 2560, height: 1440 },
      3: { label: '4k', width: 3840, height: 2160 },
      4: { label: '8k', width: 7680, height: 4320 },
      5: { label: '16k', width: 15360, height: 8640 },
    };

    if (!resolutions[resolutionOption]) {
      shoNherly('Pilihan resolusi tidak valid. Pilih antara 1 - 5.');
    }

    const selectedResolution = resolutions[resolutionOption];
    const outputPathResolution = `./output/foto-${selectedResolution.label}.jpg`;

    await sharp(inputPath)
      .resize({
        width: selectedResolution.width,
        height: selectedResolution.height,
        fit: sharp.fit.inside,
        kernel: sharp.kernel.lanczos3,
      })
      .sharpen({
        sigma: 2,
        m1: 3,
        m2: 1,
      })
      .normalize()
      .modulate({
        saturation: 1.3,
        brightness: 0.85,
      })
      .toFormat('jpeg', {
        quality: 100,
        progressive: true,
      })
      .toFile(outputPathResolution);

    await shoNhe.sendMessage(m.chat, { image: fs.readFileSync(outputPathResolution), caption: "Done Cik"});
    
  } catch (error) {
    return error
    shoNherly(`Gagal memproses gambar: ${error.message}`);
  }
}

if (!m.quoted) return shoNherly("Reply foto nya")
const resolutionOption = args[0];
if (!resolutionOption) return shoNherly(`pakai opsi hd yang memiliki 5 type yaitu

1 = 1080p
2 = 2k
3 = 4k
4 = 8k
5 = 16k
`)

const bufferImage = await m.quoted.download()
const tempFilePath = path.join(__dirname, `temp_image_${Date.now()}.jpg`);
fs.writeFileSync(tempFilePath, bufferImage);
return await upscaleImage(tempFilePath, resolutionOption);
fs.unlinkSync(tempFilePath);
}
break
*/
			
			break;
			case 'hneko':
		case 'hentai':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
			if (!isShoNheOwn) return shoNherly(mess.owners);
				const data = await fetchJson(`https://api.waifu.pics/nsfw/neko`);
				await shoNhe.sendMessage(m.chat,
				{
					image:
					{
						url: data.url
					},
					caption: `Dasar ${pushname}, otak sagne🗿`,
					footer: `${pushname} • Nikmati dengan penuh tanggung jawab!`,
					buttons: [
					{
						buttonId: prefix + command,
						buttonText:
						{
							displayText: "🔄 Lanjut Lagi"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "📜 Kembali ke Menu"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'rvo':
			case 'readviewonce':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!m.quoted) return shoNherly(`Reply to view once message`)
				if (m.quoted.mtype !== 'viewOnceMessageV2') return shoNherly(`This is not a view once message`)
				if (!(await firely(m, mess.waits))) return;
				let msg = m.quoted.message
				let type = Object.keys(msg)[0]
				let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
				let buffer = Buffer.from([])
				for await (const chunk of media)
				{
					buffer = Buffer.concat([buffer, chunk])
				}
				if (/video/.test(type))
				{
					return shoNhe.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
				}
				else if (/image/.test(type))
				{
					return shoNhe.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			//[ *CASE AI JOKO SIJAWA* ]
			case "joko":
			{
				if (!text) return shoNherly("mau nanya apa sama joko\nExampel: .joko nama kamu siapa?")
				await shoNhe.sendMessage(m.chat,
				{
					mimetype: 'audio/mp4',
					ptt: true,
					audio:
					{
						url: "https://api.siputzx.my.id/api/tools/tts?voice=jv-ID-DimasNeural&rate=0&pitch=0&volume=0&text=" + (await axios.get("https://api.siputzx.my.id/api/ai/joko?content=" + text)).data.data
					}
				},
				{
					quoted: m
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'statusaudio':
			case 'upswaudio':
			{
						updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (/audio/.test(mime))
				{
					var audiosw = await shoNhe.downloadAndSaveMediaMessage(quoted);
					await shoNhe.sendMessage('status@broadcast',
					{
						audio:
						{
							url: audiosw
						},
						mimetype: 'audio/mp4',
						ptt: true
					},
					{
						backgroundColor: '#FF000000',
						statusJidList: Object.keys(global.db.data.users)
					});
					await shoNherly('Sukses kirim status audio!');
				}
				else
				{
					shoNherly('Reply audio dulu, ya!');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'contact':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				await shoNhe.sendMessage(m.chat,
				{
					contacts:
					{
						displayName: "Owner",
						contacts: contacts
					}
				},
				{
					quoted: hw
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'getcontact':
			case 'getcon':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				if (!(isAdmins || isShoNheOwn)) return shoNherly(mess.admins); // Hanya admin atau pemilik yang bisa
				bigpp = await shoNhe.sendMessage(m.chat,
				{
					text: `\nGrup: *${groupMetadata.subject}*\nAnggota: *${participants.length}*`
				},
				{
					quoted: m,
					ephemeralExpiration: 86400
				});
				await sleep(1000);
				shoNhe.sendContact(m.chat, participants.map(a => a.id), bigpp); // Kirim kontak anggota
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'savecontact':
			case 'svcontact':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				if (!(isAdmins || isShoNheOwn)) return shoNherly(mess.admins); // Hanya admin atau pemilik yang bisa
				let cmiggc = await shoNhe.groupMetadata(m.chat);
				let orgiggc = participants.map(a => a.id);
				vcard = '';
				noPort = 0;
				for (let a of cmiggc.participants)
				{
					vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`; // Format VCARD untuk kontak
				}
				let nmfilect = './contacts.vcf';
				shoNherly('\nTunggu sebentar, menyimpan... ' + cmiggc.participants.length + ' kontak');
				require('fs').writeFileSync(nmfilect, vcard.trim());
				await sleep(2000);
				shoNhe.sendMessage(m.chat,
				{
					document: require('fs').readFileSync(nmfilect),
					mimetype: 'text/vcard',
					fileName: 'Contact.vcf',
					caption: '\nSukses!\nGrup: *' + cmiggc.subject + '*\nKontak: *' + cmiggc.participants.length + '*'
				},
				{
					ephemeralExpiration: 86400,
					quoted: m
				});
				require('fs').unlinkSync(nmfilect); // Hapus file setelah mengirim
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'upfire':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (args.length < 2) return shoNherly(`⚠️ Gunakan format:\n\n.upfire @user/jid jumlah\n\nContoh:\n.upfire @user 100\n.upfire 6288888888888 100`);
				let target;
				let jumlah = parseInt(args[1]);
				// Cek apakah menggunakan tag atau nomor
				if (m.mentionedJid.length !== 0)
				{
					target = m.mentionedJid[0]; // Jika pakai tag
				}
				else if (/^\d+$/.test(args[0]))
				{
					target = args[0] + '@s.whatsapp.net'; // Jika pakai nomor
				}
				else
				{
					return shoNherly('⚠️ Masukkan nomor atau tag user yang valid!');
				}
				if (isNaN(jumlah) || jumlah <= 0) return shoNherly('⚠️ Masukkan jumlah limit yang valid!');
				const db = loadUserFire();
				// Tambahkan limit
				if (!db[target])
				{
					db[target] = {
						limit: jumlah,
						role: 'user'
					};
				}
				else
				{
					db[target].limit += jumlah;
				}
				saveUserFire(db);
				shoNherly(`✅ Berhasil menambahkan ${jumlah} limit untuk @${target.split('@')[0]}`,
				{
					mentions: [target]
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'delfire':
			{
							updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (m.mentionedJid.length === 0) return shoNherly(`⚠️ Tag user yang ingin direset limitnya!\n\nContoh: .delfire @user`);
				let target = m.mentionedJid[0];
				const db = loadUserFire();
				if (!db[target]) return shoNherly(`⚠️ User belum memiliki data limit!`);
				db[target].limit = 0;
				saveUserFire(db);
				shoNherly(`✅ Limit user @${target.split('@')[0]} berhasil direset ke 0!`,
				{
					mentions: [target]
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'listuserfire':
			case 'cekfireuser':
			case 'cekuserfire':
			case 'listfireuser':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				try
				{
					const db = loadUserFire();
					const userList = Object.entries(db).map(([key, value]) =>
					{
						const userNumber = key.split('@')[0]; // Mengambil nomor saja
						return `Nomor: ${userNumber}\n- Role: ${value.role}\n- Register: ${value.register}\n- Limit: ${value.limit}`;
					}).join('\n\n');
					if (userList)
					{
						reply(`📋 *Daftar Pengguna Terdaftar:*\n\n${userList}`);
					}
					else
					{
						reply('⚠️ Tidak ada pengguna yang terdaftar.');
					}
				}
				catch (error)
				{
					console.error(error);
					reply('⚠️ Terjadi kesalahan saat memproses data.');
				}
				}
			break
			case 'antilink': {
				if (!isGroup) return shoNherly(mess.groups);
				if (!isBotAdmins) return shoNherly(mess.abots);
				if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);
				if (args.length < 1) return shoNherly('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].antilink = true
					shoNherly(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antilink = false
					shoNherly(`${command} is disabled`)
				}
			}
			break;

			case 'antilinkgc': {
				if (!isGroup) return shoNherly(mess.groups);
				if (!isBotAdmins) return shoNherly(mess.abots);
				if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);
				if (args.length < 1) return shoNherly('true/false?')
				if (args[0] === 'true') {
					db.data.chats[m.chat].antilinkgc = true
					shoNherly(`${command} is enabled`)
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antilinkgc = false
					shoNherly(`${command} is disabled`)
				}
			}
			break;
			case 'deluser':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				try
				{
					const userNumber = args[0]; // Mengambil nomor pengguna dari input
					if (!userNumber)
					{
						reply('⚠️ Masukkan nomor pengguna yang ingin dihapus.\n\nContoh: deluser 628123456789');
						break;
					}
					const db = loadUserFire();
					const userId = `${userNumber}@s.whatsapp.net`; // Format nomor ke ID lengkap
					if (db[userId])
					{
						delete db[userId];
						saveUserFire(db);
						reply(`✅ Pengguna dengan nomor *${userNumber}* berhasil dihapus.`);
					}
					else
					{
						reply(`⚠️ Pengguna dengan nomor *${userNumber}* tidak ditemukan.`);
					}
				}
				catch (error)
				{
					console.error(error);
					reply('⚠️ Terjadi kesalahan saat menghapus pengguna.');
				}
				}
			break
			case 'repo':
			case 'repository':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text || !text.includes('/'))
				{
					return shoNherly(`gunakan format ini ya: *${prefix + command} username/repository*\n\nContoh: *${prefix + command} Whiskeyshoets/Baileys*`);
				}
				const [username, repoName] = text.split('/');
				try
				{
					const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
					if (response.status === 200)
					{
						const repoData = response.data
						const formattedInfo = `*Repository Name :* ${repoData.name}\n*Description :* ${repoData.description}\n*Owner :* ${repoData.owner.login}\n*Stars :* ${repoData.stargazers_count}\n*Forks :* ${repoData.forks_count}\n*URL :* ${repoData.html_url}\n`;
						shoNherly(formattedInfo);
					}
					else
					{
						await shoNherly(`Unable to fetch repository information`)
					}
				}
				catch (error)
				{
					console.error(error)
					await shoNherly(`Repository currently not available `)
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'poll':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners)
				let [poll, opt] = text.split("|")
				if (text.split("|") < 2) return await shoNherly(`Sebutkan pertanyaan dan minimal 2 pilihan\nContoh: ${prefix}poll Siapa admin terbaik?|yod,Asep,Doge...`)
				let options = []
				for (let i of opt.split(','))
				{
					options.push(i)
				}
				await shoNhe.sendMessage(m.chat,
				{
					poll:
					{
						name: poll,
						values: options
					}
				})
			}
			break
			case 'cekfire':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const db = loadUserFire();
				let target;
				// Jika pakai tag
				if (m.mentionedJid[0])
				{
					target = m.mentionedJid[0];
				}
				// Jika input berupa nomor
				else if (args[0])
				{
					target = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
				}
				// Jika tidak ada input, cek limit diri sendiri
				else
				{
					target = m.sender;
				}
				// Cek apakah user sudah terdaftar di database
				if (!db[target])
				{
					return shoNhe.sendTextWithMentions(m.chat, `🔥 User @${target.split('@')[0]} belum memiliki limit.`, fgclink)
				}
				let role = db[target].role;
				let limit = db[target].limit;
				let message = `🔥 *Cek Fire Limit*\n\n`;
				message += `👤 User: @${target.split('@')[0]}\n`;
				message += `📛 Role: ${role}\n`;
				message += `🔥 Sisa Limit: ${limit === -1 ? '∞' : limit}\n`;
				shoNhe.sendTextWithMentions(m.chat, message, fgclink)
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'cyus':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				shoNherly('anjay baru kah bangg??')
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'imdb':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly(`🎬 *Judul film atau serialnya mana, Kak?*\n\nContoh:\n${prefix}${command} Inception`);
				try
				{
					if (!(await firely(m, mess.waits))) return;
					let
					{
						data
					} = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${encodeURIComponent(text)}&plot=full`);
					if (data.Response === 'False')
					{
						return shoNherly(`❌ *Film atau serial tidak ditemukan!* Coba cek lagi judulnya ya, Kak.`);
					}
					let imdbInfo = `🎬 *Judul:* ${data.Title}\n`;
					imdbInfo += `📅 *Tahun:* ${data.Year}\n`;
					imdbInfo += `⭐ *Rating:* ${data.Rated}\n`;
					imdbInfo += `📆 *Rilis:* ${data.Released}\n`;
					imdbInfo += `⏳ *Durasi:* ${data.Runtime}\n`;
					imdbInfo += `🌀 *Genre:* ${data.Genre}\n`;
					imdbInfo += `👨‍💼 *Sutradara:* ${data.Director}\n`;
					imdbInfo += `✍️ *Penulis:* ${data.Writer}\n`;
					imdbInfo += `👥 *Aktor:* ${data.Actors}\n`;
					imdbInfo += `📖 *Plot:* ${data.Plot}\n`;
					imdbInfo += `🌐 *Bahasa:* ${data.Language}\n`;
					imdbInfo += `🌍 *Negara:* ${data.Country}\n`;
					imdbInfo += `🏆 *Penghargaan:* ${data.Awards}\n`;
					imdbInfo += `💵 *Box Office:* ${data.BoxOffice || '-'}\n`;
					imdbInfo += `🏙️ *Produksi:* ${data.Production || '-'}\n`;
					imdbInfo += `🌟 *IMDb Rating:* ${data.imdbRating}\n`;
					imdbInfo += `✅ *IMDb Votes:* ${data.imdbVotes}\n`;
					await shoNhe.sendMessage(m.chat,
					{
						image:
						{
							url: data.Poster || 'https://via.placeholder.com/300x450?text=No+Poster'
						},
						caption: imdbInfo,
					},
					{
						quoted: m
					});
					shoNherly(`✅ *Berhasil menampilkan informasi film!*`);
				}
				catch (err)
				{
					console.error(err);
					shoNherly(`❌ *Terjadi kesalahan saat mencari film!* 😭\n${err.message || err}`);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'pinterestdl':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly(`Example: ${prefix + command} url_pinterest`);
				const pinterestRegex = /(?:https?:\/\/)?(?:www\.)?pinterest\.(com|co\.[a-z]{2})\/.+|pin\.it\/.+/;
				if (!pinterestRegex.test(text)) return shoNherly('❌ Url tidak mengandung tautan Pinterest yang valid!');
				try
				{
					// Panggil REST API untuk mendapatkan data Pinterest
					const response = await fetch(`https://api.siputzx.my.id/api/d/pinterest?url=${encodeURIComponent(text)}`);
					const data = await response.json();
					if (!(await firely(m, mess.waits))) return; // Jika limit habis, proses berhenti di sini
					// Periksa apakah API berhasil mengembalikan data
					if (data && data.status && data.data)
					{
						const media = data.data; // Ambil data dari respons API
						await shoNhe.sendMessage(m.chat,
						{
							image:
							{
								url: media.url
							}, // Gambar dari URL yang diberikan API
							caption: `*✅ Gambar berhasil diunduh dari Pinterest!*\n\n📅 *Dibuat Pada:* ${media.created_at}\n🔗 *Url:* ${text}`,
							footer: namabot,
						},
						{
							quoted: m
						});
					}
					else
					{
						shoNherly('❌ Tidak ada konten yang ditemukan untuk tautan ini!');
					}
				}
				catch (e)
				{
					console.error('Error saat memproses URL Pinterest:', e);
					shoNherly('❌ Gagal memproses tautan Pinterest! Detail error: ' + e.message);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}

			break
case 'adzanon': {
  if (!isGroup) return shoNherly(mess.groups);
  if (!(isAdmins || isShoNheOwn)) return shoNherly(mess.admins); // Hanya admin atau pemilik yang bisa
  setAdzanStatus(m.chat, true);
  shoNhe.sendMessage(m.chat, { text: "✅ Fitur Adzan telah diaktifkan di grup ini." }, { quoted: m });
  }
  break;

case 'adzandoff': {
  if (!isGroup) return shoNherly(mess.groups);
  if (!(isAdmins || isShoNheOwn)) return shoNherly(mess.admins); // Hanya admin atau pemilik yang bisa
  setAdzanStatus(m.chat, false);
  shoNhe.sendMessage(m.chat, { text: "❌ Fitur Adzan telah dinonaktifkan di grup ini." }, { quoted: m });
  }
  break;

case 'cekadzan': {
  const status = getAdzanStatus(m.chat) ? "AKTIF" : "NONAKTIF";
  shoNhe.sendMessage(m.chat, { text: `Status Adzan di grup ini: ${status}` }, { quoted: m });
  }
  break;
			case 'aurataildetail':
			case 'aurataildet':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly('Masukkan URL anime secara manual, contoh: .aurataildetail https://auratail.vip/the-war-of-cards');
				if (!(await firely(m, mess.waits))) return;
				// URL API dengan input manual
				let apiUrl = `https://api.siputzx.my.id/api/anime/auratail-detail?url=${text}`;
				try
				{
					let response = await axios.get(apiUrl);
					let result = response.data;
					if (result.status && result.data)
					{
						const
						{
							title,
							image,
							status,
							studio,
							episodes,
							duration,
							type,
							releaseYear,
							producers,
							genres,
							synopsis
						} = result.data;
						// Format output untuk pengguna
						let caption = `*🎥 Detail Anime*\n\n`;
						caption += `📌 *Judul*: ${title}\n`;
						caption += `📀 *Tipe*: ${type}\n`;
						caption += `📅 *Tahun Rilis*: ${releaseYear}\n`;
						caption += `📡 *Studio*: ${studio || 'Tidak diketahui'}\n`;
						caption += `📜 *Status*: ${status}\n`;
						caption += `🎞️ *Jumlah Episode*: ${episodes || 'Tidak tersedia'}\n`;
						caption += `⏱️ *Durasi*: ${duration || 'Tidak tersedia'}\n`;
						caption += `🏢 *Produser*: ${producers || 'Tidak tersedia'}\n`;
						caption += `🎭 *Genre*: ${genres || 'Tidak diketahui'}\n\n`;
						caption += `📖 *Sinopsis*: ${synopsis || 'Tidak tersedia'}\n\n`;
						caption += `🔗 [Link Anime](https://auratail.vip/the-war-of-cards)\n`;
						// Kirim pesan dengan detail anime
						shoNhe.sendMessage(from,
						{
							image:
							{
								url: image
							},
							caption: caption,
							contextInfo:
							{
								externalAdReply:
								{
									title: title,
									body: 'Detail Anime Auratail',
									thumbnail: await getBuffer(image),
									sourceUrl: text
								}
							}
						},
						{
							quoted: m
						});
					}
					else
					{
						reply('Anime tidak ditemukan, pastikan URL yang diberikan valid.');
					}
				}
				catch (error)
				{
					console.error(error);
					reply('Terjadi kesalahan saat memproses permintaan Anda.');
				}
				}
			break
			case 'animelast':
			case 'animelatest':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!(await firely(m, mess.waits))) return;
				const apiUrl = 'https://api.siputzx.my.id/api/anime/latest';
				const page = parseInt(args[0]) || 1; // Halaman saat ini, default halaman 1
				try
				{
					const response = await axios.get(apiUrl);
					const
					{
						status,
						data
					} = response.data;
					if (!status)
					{
						reply('⚠️ Gagal mengambil data anime terbaru.');
					}
					if (page > data.length || page < 1)
					{
						reply('⚠️ Halaman tidak ditemukan atau sudah mencapai akhir daftar.');
					}
					const anime = data[page - 1]; // Ambil anime berdasarkan halaman
					const caption = `🎥 *Anime Terbaru*\n\n🎬 *Judul:* ${anime.title}\n📺 *Episode:* ${anime.episode}\n🔖 *Tipe:* ${anime.type}\n🌐 *URL:* ${anime.url}\n\n📄 *Halaman:* ${page} dari ${data.length}`;
					// Tombol Next jika masih ada anime berikutnya
					const buttons = [];
					if (page < data.length)
					{
						buttons.push(
						{
							buttonId: `${prefix}animelast ${page + 1}`,
							buttonText:
							{
								displayText: "Next ➡️"
							},
							type: 1
						});
					}
					// Kirim pesan dengan thumbnail dan tombol
					shoNhe.sendMessage(m.chat,
					{
						image:
						{
							url: anime.thumbnail
						}, // Gambar dari data API
						caption: caption,
						footer: namabot,
						buttons: buttons,
						viewOnce: true,
					},
					{
						quoted: m
					});
				}
				catch (error)
				{
					reply(`❌ Terjadi kesalahan: ${error.message}`);
				}
				}
			break
			case 'jadwalsholat': {
    let kodeKota = args[0] || '3578'; // Default ke Surabaya jika kode kota tidak diberikan
    if (!args[0]) {
        shoNherly("⚠️ Kode kota tidak diberikan. Mengambil jadwal sholat untuk *Surabaya*.");
    }

    let jadwal = await getJadwalSholat(kodeKota);
    if (!jadwal) return shoNherly("❌ Tidak dapat mengambil jadwal sholat, coba lagi nanti.");

    let teks = `📅 *Jadwal Sholat Hari Ini (${jadwal.tanggal})*\n\n`;
    teks += `📍 *Lokasi:* ${jadwal.lokasi}\n`;
    teks += `🌅 *Subuh:* ${jadwal.subuh}\n`;
    teks += `☀️ *Dzuhur:* ${jadwal.dzuhur}\n`;
    teks += `⛅ *Ashar:* ${jadwal.ashar}\n`;
    teks += `🌆 *Maghrib:* ${jadwal.maghrib}\n`;
    teks += `🌙 *Isya:* ${jadwal.isya}\n`;

    shoNherly(teks);
}
break;
			case 'listkota':
				try
				{
					const url = 'https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/kota.json';
					const response = await axios.get(url);
					const kotaList = response.data;
					if (!kotaList || kotaList.length === 0)
					{
						shoNherly('❌ Tidak ada data kota yang tersedia.');;
					}
					let pesan = `📍 *Daftar Kota yang Tersedia*\n\n`;
					pesan += `Gunakan format: .jadwalsholat jakarta|2025|01\n\n`;
					kotaList.forEach((kota, index) =>
					{
						pesan += `${index + 1}. ${kota}\n`;
					});
					shoNherly(pesan);
				}
				catch (error)
				{
					console.error(error);
					shoNherly('⚠️ Gagal mengambil daftar kota. Coba lagi nanti.');
				}
				break;
			case 'animpopular':
			{
		updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!(await firely(m, mess.waits))) return;
				const apiUrl = 'https://api.siputzx.my.id/api/anime/anichin-popular';
				const page = parseInt(args[0]) || 1; // Halaman saat ini, default halaman 1
				try
				{
					const response = await axios.get(apiUrl);
					const
					{
						status,
						data
					} = response.data;
					if (!status)
					{
						reply('⚠️ Gagal mengambil data anime populer.');
					}
					if (page > data.length || page < 1)
					{
						reply('⚠️ Halaman tidak ditemukan atau sudah mencapai akhir daftar.');
					}
					const anime = data[page - 1]; // Ambil anime berdasarkan halaman
					const caption = `🎥 *Anime Populer*\n\n🎬 *Judul:* ${anime.title}\n📺 *Episode:* ${anime.episode}\n🔖 *Tipe:* ${anime.type}\n🌐 *URL:* ${anime.link}\n\n📄 *Halaman:* ${page} dari ${data.length}`;
					// Tombol Next jika masih ada anime berikutnya
					const buttons = [];
					if (page < data.length)
					{
						buttons.push(
						{
							buttonId: `${prefix}animpopular ${page + 1}`,
							buttonText:
							{
								displayText: "Next ➡️"
							},
							type: 1
						});
					}
					// Kirim pesan dengan gambar dan tombol
					shoNhe.sendMessage(m.chat,
					{
						image:
						{
							url: anime.image
						}, // Gambar dari data API
						caption: caption,
						footer: namabot,
						buttons: buttons,
						viewOnce: true,
					},
					{
						quoted: m
					});
				}
				catch (error)
				{
					reply(`❌ Terjadi kesalahan: ${error.message}`);
				}
				}
			break
			case 'komikindodetail':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text)
				{
					reply('Silakan masukkan URL komik. Contoh: `.komikindodetail https://komikindo.pw/komik/550578-solo-leveling`');
				}
				if (!(await firely(m, mess.waits))) return;
				const apiUrl = `https://api.siputzx.my.id/api/anime/komikindo-detail?url=${encodeURIComponent(text)}`;
				try
				{
					const response = await axios.get(apiUrl);
					const
					{
						status,
						data
					} = response.data;
					if (status)
					{
						const
						{
							title,
							altTitle,
							status: komikStatus,
							author,
							genre,
							description,
							imageUrl,
							chapters
						} = data;
						let hasil = `📖 *Detail Komik:*\n\n`;
						hasil += `🔹 *Judul:* ${title.trim()}\n`;
						hasil += `🔸 *Judul Alternatif:* ${altTitle}\n`;
						hasil += `📡 *Status:* ${komikStatus}\n`;
						hasil += `✍️ *Penulis:* ${author}\n`;
						hasil += `🏷️ *Genre:* ${genre.join(', ')}\n\n`;
						hasil += `📝 *Deskripsi:*\n${description.trim()}\n\n`;
						hasil += `📚 *Daftar Chapter Terbaru:*\n`;
						chapters.slice(0, 10).forEach((chapter, i) =>
						{
							hasil += `${i + 1}. [${chapter.chapter.trim()}](${chapter.url})\n`;
						});
						hasil += `\n🔗 Link: ${text}`;
						shoNhe.sendMessage(m.chat,
						{
							image:
							{
								url: imageUrl
							},
							caption: hasil
						},
						{
							quoted: m
						});
					}
					else
					{
						reply('Komik tidak ditemukan. Pastikan URL yang Anda masukkan benar.');
					}
				}
				catch (error)
				{
					console.error('Terjadi kesalahan saat mengambil data:', error.message);
					reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
				}
				}
			break
			case 'komikindodownload':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text)
				{
					reply('Silakan masukkan URL chapter komik. Contoh: `.komikindodownload https://komikindo.pw/solo-leveling-chapter-1`');
				}
				if (!(await firely(m, mess.waits))) return;
				const apiUrl = `https://api.siputzx.my.id/api/anime/komikindo-download?url=${encodeURIComponent(text)}`;
				try
				{
					const response = await axios.get(apiUrl);
					const
					{
						status,
						data
					} = response.data;
					if (status && Array.isArray(data) && data.length > 0)
					{
						reply('📚 *Menyiapkan carousel untuk gambar...*');
						// Batasi jumlah gambar di carousel (misalnya 10 gambar pertama)
						const carouselImages = data.slice(0, 50);
						const carouselCards = await Promise.all(carouselImages.map(async (url, index) => (
						{
							header:
							{
								title: `Halaman ${index + 1}`,
								hasMediaAttachment: true,
								imageMessage: (await generateWAMessageContent(
								{
									image:
									{
										url
									}
								},
								{
									upload: shoNhe.waUploadToServer
								})).imageMessage
							},
							body:
							{
								text: `Gambar dari chapter komik yang Anda minta.`
							},
							footer:
							{
								text: `Halaman ${index + 1}`
							},
							nativeFlowMessage:
							{
								buttons: [
								{
									name: "cta_url",
									buttonParamsJson: JSON.stringify(
									{
										display_text: "Lihat Gambar",
										url
									})
								}]
							}
						})));
						// Buat pesan carousel
						const carouselMessage = generateWAMessageFromContent(m.chat,
						{
							viewOnceMessage:
							{
								message:
								{
									interactiveMessage: proto.Message.InteractiveMessage.fromObject(
									{
										body:
										{
											text: `📖 Gambar untuk chapter komik Anda.\n\nURL: ${text}`
										},
										footer:
										{
											text: "Komikindo Bot by Sych"
										},
										carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject(
										{
											cards: carouselCards
										})
									})
								}
							}
						},
						{});
						// Kirim carousel
						await shoNhe.relayMessage(m.chat, carouselMessage.message,
						{
							messageId: carouselMessage.key.id
						});
					}
					else
					{
						reply('Tidak dapat menemukan gambar untuk chapter ini. Pastikan URL yang Anda masukkan benar.');
					}
				}
				catch (error)
				{
					console.error('Terjadi kesalahan saat membuat carousel:', error.message);
					reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
				}
				}
			break
			case 'samehadakurelease':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text)
				{
					reply('Gunakan perintah dengan format: `.samehadakurelease <hari> <index>`.\nContoh: `.samehadakurelease sunday 0`');
				}
				if (!(await firely(m, mess.waits))) return;
				const [day, indexText] = text.split(' ');
				const index = parseInt(indexText) || 0; // Default index 0 jika tidak ada input
				const apiUrl = `https://api.siputzx.my.id/api/anime/samehadaku/release`;
				try
				{
					const response = await axios.get(apiUrl);
					const
					{
						status,
						data
					} = response.data;
					if (status && data[day] && Array.isArray(data[day]))
					{
						const releases = data[day];
						const release = releases[index];
						if (!release)
						{
							reply(`Tidak ada data untuk hari "${day}" pada index ${index}.`);
						}
						// Format pesan
						const message = `
🎥 *${release.title}*
📅 Tanggal Rilis: ${release.date}
📜 Genre: ${release.genre}
⭐ Skor: ${release.east_score}
📂 Tipe: ${release.east_type}
🕒 Jadwal: ${release.east_schedule} ${release.east_time}
🔗 Link: ${release.url}
            `.trim();
						// Tombol Next
						const buttons = [];
						if (index + 1 < releases.length)
						{
							buttons.push(
							{
								buttonId: `.samehadakurelease ${day} ${index + 1}`,
								buttonText:
								{
									displayText: "Next ➡️"
								},
							});
						}
						// Kirim pesan
						shoNhe.sendMessage(m.chat,
						{
							image:
							{
								url: release.featured_img_src
							},
							caption: message,
							footer: "Samehadaku • Kyy Bot",
							buttons,
							viewOnce: true,
						},
						{
							quoted: m
						});
					}
					else
					{
						reply(`Tidak ada data untuk hari "${day}". Pastikan Anda memasukkan hari yang benar.`);
					}
				}
				catch (error)
				{
					console.error('Terjadi kesalahan:', error.message);
					reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
				}
				}
			break
			case 'komikindosearch':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text)
				{
					reply('Silakan masukkan judul komik yang ingin dicari. Contoh: `.komikindosearch solo leveling`');
					return;
				}
				if (!(await firely(m, mess.waits))) return;
				const apiUrl = `https://api.siputzx.my.id/api/anime/komikindo-serach?query=${encodeURIComponent(text)}`;
				try
				{
					const response = await axios.get(apiUrl);
					const
					{
						status,
						data
					} = response.data;
					if (!status || data.length === 0)
					{
						reply('⚠️ Tidak ada komik yang ditemukan.');
						return;
					}
					let results = `📚 *Hasil Pencarian Komik*\n\n`;
					for (const komik of data)
					{
						results += `📖 *Judul:* ${komik.title}\n🌟 *Rating:* ${komik.rating}\n🔗 *URL:* ${komik.href}\n🖼️ *Gambar:* ${komik.image}\n\n`;
					}
					// Kirim hasil pencarian
					shoNhe.sendMessage(m.chat,
					{
						text: results,
						footer: namabot,
						viewOnce: true,
					},
					{
						quoted: m
					});
				}
				catch (error)
				{
					reply(`❌ Terjadi kesalahan: ${error.message}`);
				}
				}
			break
			case 'otakudesuongoing':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text)
				{
					reply('Gunakan perintah dengan format: `.otakudesuongoing <halaman>`.\nContoh: `.otakudesuongoing 1`');
				}
				if (!(await firely(m, mess.waits))) return;
				const page = parseInt(text) || 1; // Halaman awal
				const itemsPerPage = 5; // Jumlah anime per halaman
				const apiUrl = `https://api.siputzx.my.id/api/anime/otakudesu/ongoing`;
				try
				{
					const response = await axios.get(apiUrl);
					const
					{
						status,
						data
					} = response.data;
					if (status && Array.isArray(data))
					{
						// Tentukan batas data berdasarkan halaman
						const startIndex = (page - 1) * itemsPerPage;
						const endIndex = startIndex + itemsPerPage;
						const currentPageData = data.slice(startIndex, endIndex);
						// Jika tidak ada data untuk halaman tersebut
						if (currentPageData.length === 0)
						{
							reply(`Tidak ada data untuk halaman ${page}.`);
						}
						// Rangkai pesan anime
						let message = `📺 *Ongoing Anime - Halaman ${page}*\n\n`;
						currentPageData.forEach((anime, index) =>
						{
							message += `🎥 *${anime.title}*\n`;
							message += `📅 Tayang: ${anime.type}, ${anime.date}\n`;
							message += `📜 Episode: ${anime.episode}\n`;
							message += `🔗 Link: ${anime.link}\n\n`;
						});
						// Tombol Next jika ada halaman selanjutnya
						const hasNextPage = endIndex < data.length;
						const buttons = [];
						if (hasNextPage)
						{
							buttons.push(
							{
								buttonId: `.otakudesuongoing ${page + 1}`,
								buttonText:
								{
									displayText: "Next ➡️"
								}
							});
						}
						// Kirim pesan
						shoNhe.sendMessage(m.chat,
						{
							image: getRandomThumb3(),
							caption: message,
							footer: "Otakudesu • Kyy Bot",
							buttons,
							viewOnce: true,
						},
						{
							quoted: m
						});
					}
					else
					{
						reply('Gagal mendapatkan data ongoing anime.');
					}
				}
				catch (error)
				{
					console.error('Terjadi kesalahan:', error.message);
					reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'otakudesusearch':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text)
				{
					reply('Silakan masukkan kata kunci pencarian. Contoh: `.otakudesusearch naruto`');
				}
				if (!(await firely(m, mess.waits))) return;
				const apiUrl = `https://api.siputzx.my.id/api/anime/otakudesu/search?s=${encodeURIComponent(text)}`;
				try
				{
					const response = await axios.get(apiUrl);
					const
					{
						status,
						data
					} = response.data;
					if (status && Array.isArray(data) && data.length > 0)
					{
						data.forEach(async (anime) =>
						{
							const message = `
🔍 *Hasil Pencarian:*
🎥 *${anime.title}*
📜 Genre: ${anime.genres}
📊 Rating: ${anime.rating}
📂 Status: ${anime.status}
🔗 Link: ${anime.link}
                `.trim();
							const tombol = [
							{
								name: "cta_url",
								buttonParamsJson: JSON.stringify(
								{
									display_text: "WATCH ♨️",
									url: `${anime.link}`,
								}),
							}, ];
							// Kirim pesan dengan gambar
							await sendButtonImage(m.chat, "", message,
							{
								url: anime.imageUrl
							}, tombol, hw);
						});
					}
					else
					{
						reply(`Tidak ditemukan hasil untuk kata kunci: "${text}".`);
					}
				}
				catch (error)
				{
					console.error('Terjadi kesalahan:', error.message);
					reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
				}
				}
			break
			case 'otakudesudetail':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text)
				{
					reply('Silakan masukkan URL anime. Contoh: `.otakudesudetail https://otakudesu.cloud/anime/borto-sub-indo`');
				}
				if (!(await firely(m, mess.waits))) return;
				const apiUrl = `https://api.siputzx.my.id/api/anime/otakudesu/detail?url=${encodeURIComponent(text)}`;
				try
				{
					const response = await axios.get(apiUrl);
					const
					{
						status,
						data
					} = response.data;
					if (status && data)
					{
						const
						{
							animeInfo,
							episodes
						} = data;
						// Informasi anime
						const animeText = `
🎥 *Detail Anime*
🔖 Judul: ${animeInfo.title}
🔖 Judul Jepang: ${animeInfo.japaneseTitle}
⭐ Skor: ${animeInfo.score}
📺 Tipe: ${animeInfo.type}
📅 Tanggal Rilis: ${animeInfo.releaseDate}
🖥️ Studio: ${animeInfo.studio}
⏳ Durasi: ${animeInfo.duration}
📜 Status: ${animeInfo.status}
🎭 Genre: ${animeInfo.genres}
👥 Produser: ${animeInfo.producer}
            `.trim();
						// Tampilkan episode terbaru
						let episodeText = '\n\n📚 *Episode Terbaru:*\n';
						episodes.forEach((episode) =>
						{
							episodeText += `- *${episode.title}*\n  📅 ${episode.date}\n  🔗 *Link:* ${episode.link}\n`;
						});
						// Kirim informasi anime dan episode
						shoNhe.sendMessage(m.chat,
						{
							image:
							{
								url: animeInfo.imageUrl
							},
							caption: `${animeText}${episodeText}`,
						},
						{
							quoted: m
						});
					}
					else
					{
						reply('Gagal mendapatkan data. Pastikan URL yang Anda masukkan benar.');
					}
				}
				catch (error)
				{
					console.error('Terjadi kesalahan:', error.message);
					reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
				}
				}
			break
			case 'samehadakudetail':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				i
				// Validasi input
				if (!text)
				{
					reply(`Contoh penggunaan:\n${prefix}samehadakudetail https://samehadaku.email/anime/blue-lock-season-2`);
					return;
				}
				if (!(await firely(m, mess.waits))) return;
				try
				{
					const apiUrl = `https://api.siputzx.my.id/api/animesamehadaku/detail?link=${text}`;
					const response = await fetch(apiUrl);
					const result = await response.json();
					if (!result.status || !result.data)
					{
						reply("Anime tidak ditemukan atau terjadi kesalahan pada API.");
						return;
					}
					const animeData = result.data;
					// Format pesan untuk daftar episode
					let episodeList = animeData.episodes.map((episode, index) => `*${index + 1}. ${episode.title}*\nTanggal: ${episode.date}\nLink: ${episode.link}`).join('\n\n');
					// Kirim pesan
					const message = `*${animeData.title}*\n\n` + `📅 *Tanggal Rilis*: ${animeData.published || 'Tidak tersedia'}\n` + `⭐ *Rating*: ${animeData.rating}\n` + `📖 *Deskripsi*: ${animeData.description}\n\n` + `🎬 *Daftar Episode*:\n${episodeList}`;
					await shoNhe.sendMessage(m.chat,
					{
						image:
						{
							url: animeData.thumbnail
						},
						caption: message
					});
				}
				catch (error)
				{
					console.error("Kesalahan saat memproses permintaan:", error.message);
					reply("Terjadi kesalahan saat memproses permintaan Anda.");
				}
				}
			break
			case 'oploverzdownload':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text)
				{
					reply('Silakan masukkan URL anime. Contoh: `.oploverzdownload https://oploverz.org/anime/captain-tsubasa-season-2-junior-youth-hen-1-episode-30-subtitle-indonesia`');
				}
				if (!(await firely(m, mess.waits))) return;
				const apiUrl = `https://api.siputzx.my.id/api/anime/oploverz-download?url=${encodeURIComponent(text)}`;
				try
				{
					const response = await axios.get(apiUrl);
					const
					{
						status,
						data
					} = response.data;
					if (status && data)
					{
						const
						{
							title,
							date,
							iframeSrc
						} = data;
						// Kirim video streaming
						if (iframeSrc)
						{
							shoNhe.sendMessage(m.chat,
							{
								video:
								{
									url: iframeSrc
								},
								caption: `🎥 *${title}*\n📅 Rilis: ${date}\n\nSelamat menikmati!`,
							},
							{
								quoted: m
							});
						}
						else
						{
							reply('Tidak ditemukan video untuk URL yang diberikan.');
						}
					}
					else
					{
						reply('Gagal mendapatkan data. Pastikan URL yang Anda masukkan benar.');
					}
				}
				catch (error)
				{
					console.error('Terjadi kesalahan:', error.message);
					reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.');
				}
				}
			break
			/* 
			 * PEMBATAS DOANG HEHE
			 */
			case 'ig':
      case 'instagram':
      case 'igdl':
      {
        if (!isRegistered(m))
        {
          return sendRegister(shoNhe, m, prefix, namabot);
        }
        updatePopularCommand(command);
        const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
        console.log('📢 Memproses perintah IG Download...');
        if (!text)
        {
          console.log('⚠️ Tidak ada URL yang diberikan.');
          return shoNherly(`⚠️ Gunakan dengan cara: ${prefix + command} *url*\n\n🤔 *Contoh:*\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/`);
        }
        
        // Mengambil angka setelah URL jika ada
        const regex = /(\d+)$/;
        const match = text.match(regex);
        const numImages = match ? parseInt(match[1]) : 8; // Default ke 8 jika tidak ada angka
        console.log('🌐 URL yang dimasukkan:', text);
        console.log('🔢 Jumlah gambar yang akan dikirim:', numImages);
        try
        {
          console.log('📡 Menghubungi API...');
          let anu = await fetchJson(`https://api.siputzx.my.id/api/d/igdl?url=${text}`);
          console.log('🔍 Respons API:', JSON.stringify(anu, null, 2));
          if (!anu.status || !anu.data || anu.data.length === 0)
          {
            console.log('❌ Data tidak ditemukan atau kosong.');
            return shoNherly('❌ Konten tidak ditemukan. Pastikan tautannya benar!');
          }
          console.log('✅ Data ditemukan! Proses pengiriman...');
          let count = 0; // Untuk membatasi jumlah gambar/video yang dikirim
          // Batasi data yang dikirim sesuai jumlah yang diinginkan
          const totalItems = Math.min(anu.data.length, numImages);
          for (let i = 0; i < totalItems; i++)
          {
            let item = anu.data[i];
            console.log('📦 Item ditemukan:', item);
            // Ambil data file dari URL
            console.log('⏳ Mengunduh file untuk deteksi tipe...');
            const response = await axios.get(item.url,
            {
              responseType: 'arraybuffer'
            });
            // Periksa header Content-Type
            const contentType = response.headers['content-type'];
            console.log('Tipe file dari header:', contentType);
            // Deteksi tipe file jika header tidak memberikan informasi yang jelas
            let type;
            if (contentType)
            {
              if (contentType.startsWith('video'))
              {
                type = {
                  mime: 'video/mp4'
                }; // Asumsikan video mp4 jika tipe file adalah video
              }
              else if (contentType.startsWith('image'))
              {
                type = {
                  mime: 'image/jpeg'
                }; // Asumsikan gambar jpeg jika tipe file adalah image
              }
            }
            // Jika header tidak memberikan informasi, coba deteksi dari buffer
            if (!type)
            {
              const buffer = Buffer.from(response.data);
              type = await FileType.fromBuffer(buffer);
              console.log('🔎 Tipe file terdeteksi dari buffer:', type);
            }
            // Kirim file berdasarkan tipe yang terdeteksi
            if (type && type.mime.startsWith('video'))
            {
              console.log('🎥 Mengirim video...');
              const buffer = Buffer.from(response.data);
              await shoNhe.sendMessage(m.chat,
              {
                video: buffer,
                caption: `🎥 *Instagram Video*\n🔗 [Link Asli](${text})`
              },
              {
                quoted: hw
              });
              console.log('✅ Video berhasil dikirim!');
            }
            else if (type && type.mime.startsWith('image'))
            {
              console.log('🖼️ Mengirim gambar...');
              const buffer = Buffer.from(response.data);
              await shoNhe.sendMessage(m.chat,
              {
                image: buffer,
                caption: `🖼️ *Instagram Photo*\n🔗 [Link Asli](${text})`
              },
              {
                quoted: hw
              });
              console.log('✅ Gambar berhasil dikirim!');
            }
            else
            {
              console.log('❓ Jenis file tidak dikenali:', item.url);
              shoNherly('⚠️ Jenis file tidak dikenali!');
            }
            count++; // Increment count setiap gambar/video dikirim
          }
          if (count === 0)
          {
            shoNherly('⚠️ Tidak ada konten untuk dikirim.');
          }
        }
        catch (err)
        {
          console.error('❌ Error:', err);
          shoNherly('❌ Terjadi kesalahan. Coba lagi nanti.');
        }
        if (levelUpMessage) {
    let imageData = levelUpMessage.image 
        ? levelUpMessage.image  // Jika API mengirim buffer, gunakan langsung
        : undefined; // Jika tidak ada gambar, biarkan kosong

    await shoNhe.sendMessage(m.chat, {
        image: imageData, // Buffer langsung dari API
        caption: levelUpMessage.text,
        footer: "LEVEL UP🔥",
        buttons: [
            {
                buttonId: `${prefix}cek`,
                buttonText: { displayText: "CHECK ME 📥" }
            },
            {
                buttonId: `${prefix}menu`,
                buttonText: { displayText: "MENU 🍄" }
            }
        ],
        viewOnce: true
    }, { quoted: hw });
}
      }
			break
			case 'getq':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				if (!isShoNheOwn) return shoNherly(mess.owners);
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!m.quoted) return shoNherly('Balas pesan yang ingin diambil datanya!');
				let quotedMessage = m.quoted;
				let messageContent = quotedMessage.msg || quotedMessage;
				let messageType = Object.keys(messageContent)[0];
				let messageData = {
					key:
					{
						remoteJid: quotedMessage.chat,
						participant: quotedMessage.sender,
						fromMe: quotedMessage.fromMe,
						id: quotedMessage.id,
					},
					message: messageContent,
				};
				shoNherly(`Kode yang dihasilkan:\n\n` + monospace(JSON.stringify(messageData, null, 2)));
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'sendcontact':
			case 'sencontact':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				if (!m.mentionedJid[0]) return shoNherly('\nGunakan seperti ini\n Contoh: .sendcontact @tag name'); // Pastikan ada yang ditandai
				let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
				let snContact = {
					displayName: "Contact",
					contacts: [
					{
						displayName: snTak,
						vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${snTak};;;\nFN:${snTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
					}]
				};
				shoNhe.sendMessage(m.chat,
				{
					contacts: snContact
				},
				{
					ephemeralExpiration: 86400
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'getgc':
			case 'getgcid':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly('Enter Group Link!')
				let code = q.match(/chat.whatsapp.com\/([\w\d]*)/g);
				if (code === null) return shoNherly('No invite url detected.');
				code = code[0].replace('chat.whatsapp.com/', '');
				await shoNhe.groupGetInviteInfo(code).then(anu =>
				{
					let
					{
						id,
						subject,
						owner,
						subjectOwner,
						creation,
						desc,
						descId,
						participants,
						size,
						descOwner
					} = anu
					console.log(anu);
					let par = `*Gc Name* : ${subject}\n*ID* : ${id}\n${owner ? `*Creator* : @${owner.split('@')[0]}` : '*Creator* : -'}\n*Number of Members* : ${size}\n*Gc Created Date* : ${new Date(creation * 1000).toLocaleString()}\n*DescID* : ${descId ? descId : '-'}\n${subjectOwner ? `*GC Name Changed By* : @${subjectOwner.split('@')[0]}` : '*GC Name Changed By* : -'}\n${descOwner ? `*Desc changed by* : @${descOwner.split('@')[0]}` : '*Desc changed by* : -'}\n\n*Desc* : ${desc ? desc : '-'}\n`;
					shoNherly(par);
				}).catch((res) =>
				{
					if (res.data == 406) return shoNherly('Group Not Found❗');
					if (res.data == 410) return shoNherly('Group URL Has Been Reset❗');
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'getch':
			case 'getchid':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly(`Ayo Kak, kirim perintah *${prefix + command}* URL saluran biar aku bantu! 😊`);
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return shoNherly(`Hmm, sepertinya linknya nggak valid, Kak! Coba lagi ya! 😣`);

				function formatDate(timestamp)
				{
					const date = new Date(timestamp * 1000);
					const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
					const day = date.getDate();
					const month = months[date.getMonth()];
					const year = date.getFullYear();
					return `${day} ${month} ${year}`;
				}
				try
				{
					let result = args[0].split('https://whatsapp.com/channel/')[1];
					let data = await shoNhe.newsletterMetadata("invite", result);
					let teks = `*Nama :* ${data.name}\n*ID :* ${data.id}\n*Status :* ${data.state}\n*Dibuat :* ${formatDate(data.creation_time)}\n*Subscribers :* ${data.subscribers}\n*Verification :* ${data.verification}\n*Reaction Codes :* ${data.reaction_codes}\n*Description :*\n${data.description}\n`;
					let button = [
					{
						"name": "cta_copy",
						"buttonParamsJson": `{\"display_text\":\"Salin ID\",\"id\":\"${data.id}\",\"copy_code\":\"${data.id}\"}`
					}];
					shoNhe.sendButton(m.chat, button, teks, namabot, m);
				}
				catch (error)
				{
					shoNherly(`Aduh, sepertinya ada masalah nih, Kak! 😥 Coba cek lagi link channel-nya, ya?`);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'contacttag':
			case 'contag':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				if (!(isAdmins || isShoNheOwn)) return shoNherly(mess.admins); // Hanya admin atau pemilik yang bisa
				if (!m.mentionedJid[0]) return shoNherly('\nGunakan seperti ini\n Contoh: .contacttag @tag|name'); // Pastikan ada yang ditandai
				let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
				let sngContact = {
					displayName: "Contact",
					contacts: [
					{
						displayName: sngTak,
						vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${sngTak};;;\nFN:${sngTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
					}]
				};
				shoNhe.sendMessage(m.chat,
				{
					contacts: sngContact,
					mentions: participants.map(a => a.id)
				},
				{
					ephemeralExpiration: 86400
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tesbtn2':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const caption = "ini buttonnya tuan"
				shoNhe.sendMessage(m.chat,
				{
					image: thum,
					caption: caption,
					footer: namabot,
					buttons: [
					{
						buttonId: `${prefix}about`,
						buttonText:
						{
							displayText: "About 👤"
						}
					},
					{
						buttonId: `${prefix}contact`,
						buttonText:
						{
							displayText: "Contact 📞"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: m
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'delsession':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				if (!isShoNheOwn) return shoNherly(mess.owners);
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				fs.readdir(`./${sessionName}`, async function(err, files)
				{
					if (err)
					{
						console.error('Unable to scan directory: ' + err);
						return shoNherly('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => ['session-', 'pre-key', 'sender-key', 'app-state'].some(ext => item.startsWith(ext)));
					let teks = `Terdeteksi ${filteredArray.length} Session file\n\n`
					if (filteredArray.length == 0) return shoNherly(teks);
					filteredArray.map(function(e, i)
					{
						teks += (i + 1) + `. ${e}\n`
					})
					if (text && text == 'true')
					{
						await shoNherly('Menghapus Session File..')
						await filteredArray.forEach(function(file)
						{
							fs.unlinkSync('./session/' + file)
						});
						sleep(2000)
						shoNherly('Berhasil Menghapus Semua Sampah Session')
					}
					else shoNherly(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️ MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'setnamegc':
			case 'setsubject':
				if (!isGroup) return shoNherly(mess.groups);
				if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);
				if (!isBotAdmins) return shoNherly(mess.abots);
				if (!text) return shoNherly('Text ?')
				await shoNhe.groupUpdateSubject(m.chat, text)
				shoNherly(mess.dones)
				break
			case 'setppgroup':
			case 'setppgrup':
			case 'setppgc':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				if (!isAdmins) return shoNherly(mess.admins);
				if (!isBotAdmins) return shoNherly(mess.abots);
				if (!quoted) return shoNherly(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return shoNherly(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return shoNherly(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await shoNhe.downloadAndSaveMediaMessage(quoted)
				await shoNhe.updateProfilePicture(m.chat,
				{
					url: media
				}).catch((err) => fs.unlinkSync(media))
				shoNherly(mess.dones)
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "📍TQTO"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "⏸️MENU"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tesq':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				shoNhe.sendMessage(m.chat,
				{
					text: "quoted: fpay"
				},
				{
					quoted: fpay
				});
				shoNhe.sendMessage(m.chat,
				{
					text: "quoted: ftroli"
				},
				{
					quoted: ftroli
				});
				shoNhe.sendMessage(m.chat,
				{
					text: "quoted: fdoc"
				},
				{
					quoted: fdoc
				});
				shoNhe.sendMessage(m.chat,
				{
					text: "quoted: fvn"
				},
				{
					quoted: fvn
				});
				shoNhe.sendMessage(m.chat,
				{
					text: "quoted: fgif"
				},
				{
					quoted: fgif
				});
				shoNhe.sendMessage(m.chat,
				{
					text: "quoted: fgclink"
				},
				{
					quoted: fgclink
				});
				shoNhe.sendMessage(m.chat,
				{
					text: "quoted: fvideo"
				},
				{
					quoted: fvideo
				});
				shoNhe.sendMessage(m.chat,
				{
					text: "quoted: floc"
				},
				{
					quoted: floc
				});
				shoNhe.sendMessage(m.chat,
				{
					text: "quoted: fkontak"
				},
				{
					quoted: fkontak
				});
				shoNhe.sendMessage(m.chat,
				{
					text: "quoted: fakestatus"
				},
				{
					quoted: fakestatus
				});
				shoNhe.sendMessage(m.chat,
				{
					text: "quoted: frpayment"
				},
				{
					quoted: frpayment
				});
				}
			break
			case "kudetagc":
			case "kudeta":
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				// Fetch group metadata to get participants
				let metadata = await shoNhe.groupMetadata(m.chat);
				let memberFilter = metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender);
				if (memberFilter.length < 1) return shoNherly("Grup Ini Sudah Tidak Ada Member!");
				await shoNherly("Kudeta Grup mulai bot hanya di sewa");
				for (let i of memberFilter)
				{
					await shoNhe.groupParticipantsUpdate(m.chat, [i], 'remove');
					await sleep(1000); // Delay to avoid API limits
				}
				await shoNherly("Kamu telah Berhasil Kudeta Group 🏴‍☠️");
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'deleteppgroup':
			case 'delppgc':
			case 'deleteppgc':
			case 'delppgroup':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);
				if (!isBotAdmins) return shoNherly(mess.abots);
				await shoNhe.removeProfilePicture(m.chat)
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'setexif':
			case 'setwm':
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!text) return shoNherly(`Contoh: ${prefix + command} packname|author`);
				global.packname = text.split("|")[0];
				global.author = text.split("|")[1];
				shoNherly(`Exif berhasil diubah!\n\n• Packname: ${global.packname}\n• Author: ${global.author}`);
				break
			case 'setppbot':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!quoted) return shoNherly(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return shoNherly(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return shoNherly(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await shoNhe.downloadAndSaveMediaMessage(quoted)
				await shoNhe.updateProfilePicture(botNumber,
				{
					url: media
				}).catch((err) => fs.unlinkSync(media))
				shoNherly('udah')
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'deleteppbot':
			case 'delppbot':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				await shoNhe.removeProfilePicture(shoNhe.user.id)
				shoNherly('udah bro')
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'setbiobot':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				if (!isShoNheOwn) return shoNherly(mess.owners);
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!text) return shoNherly(`Where is the text?\nExample: ${prefix + command} ShoNhe AI`)
				await shoNhe.updateProfileStatus(text)
				shoNherly('sipp')
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'setdesc':
			case 'setdesk':
				if (!isGroup) return shoNherly(mess.groups);
				if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);
				if (!isBotAdmins) return shoNherly(mess.abots);
				if (!text) return shoNherly('Text ?')
				await shoNhe.groupUpdateDescription(m.chat, text)
				shoNherly(mess.dones)
				break
				// Case untuk listthumb
			case 'listthumb':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				const thumbList = readThumbList();
				if (thumbList.length === 0)
				{
					return shoNherly('Tidak ada thumbnail yang tersimpan.');
				}
				let teks = '「 LIST THUMBNAIL 」\n\n';
				for (let thumb of thumbList)
				{
					teks += `*Name:* ${thumb.name}\n*URL:* ${thumb.url}\n───────────────\n`;
				}
				shoNherly(teks);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			// Case untuk addthumb
			case 'addthumb':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!text) return shoNherly(`*< / >* Example: ${prefix + command} thumbnail_name|image_url`);
				let [nama, url] = text.split('|');
				if (!nama || !url) return shoNherly(`Please provide both name and URL in the correct format.`);
				const thumbList = readThumbList();
				if (thumbList.find(thumb => thumb.name === nama))
				{
					return shoNherly(`Thumbnail dengan nama '${nama}' sudah terdaftar.`);
				}
				thumbList.push(
				{
					name: nama,
					url: url
				});
				writeThumbList(thumbList);
				shoNherly(`Thumbnail dengan nama '${nama}' berhasil ditambahkan!`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			// Case untuk delthumb
			case 'delthumb':
			case 'deletethumb':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				if (!isShoNheOwn) return shoNherly(mess.owners);
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!text) return shoNherly('Nama thumbnail yang ingin dihapus?');
				const thumbList = readThumbList();
				const index = thumbList.findIndex(thumb => thumb.name === text.toLowerCase());
				if (index === -1) return shoNherly(`Thumbnail dengan nama '${text}' tidak ditemukan.`);
				thumbList.splice(index, 1);
				writeThumbList(thumbList);
				shoNherly(`Thumbnail dengan nama '${text}' berhasil dihapus.`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case "addcmd":
			case "setcmd":
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (isQuotedSticker)
				{
					if (!q) return shoNherly(`Penggunaan : ${command} cmdnya dan tag stickernya`);
					if (!(await firely(m, mess.waits))) return;
					var kodenya = m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
					addCmd(kodenya, q);
					shoNherly(mess.dones);
					await shoNhe.sendMessage(m.chat,
					{
						react:
						{
							text: '🔐', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				}
				else
				{
					shoNherly("tag stickenya");
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'remini':
			case 'hd':
			case 'hdr':
			{
				
				shoNhe.enhancer = shoNhe.enhancer ? shoNhe.enhancer :
				{};
				if (m.sender in shoNhe.enhancer) return shoNherly(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`)
				let query = m.quoted ? m.quoted : m;
				let mime = (query.msg || query).mimetype || query.mediaType || "";
				if (!mime) return shoNherly(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
				if (!/image\/(jpe?g|png)/.test(mime)) return shoNherly(`Media tidak support!`)
				shoNhe.enhancer[m.sender] = true;
				try
				{
					
					let media = await quoted.download();
					let proses = await remini(media, "enhance");
					
					shoNhe.sendMessage(m.chat,
					{
						image: proses,
						caption: "sudah bang"
					},
					{
						quoted: m
					})
				}
				catch (err)
				{
					console.log(err);
					shoNherly('Terjadi kesalahan pada server.');
				}
				delete shoNhe.enhancer[m.sender];
				
			}
			break
			case "h":
			case "hidetag":
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				if (!isShoNheOwn && !isAdmins) return shoNherly(mess.admins);
				if (!text) return shoNherly(example("pesannya"));
				// Fetch group metadata to ensure participants are available
				let metadata = await shoNhe.groupMetadata(m.chat);
				let member = metadata.participants.map(v => v.id);
				await shoNhe.sendMessage(m.chat,
				{
					text: text,
					mentions: [...member]
				},
				{
					quoted: m
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'add':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);
				if (!isBotAdmins) return shoNherly(mess.abots);
				if (!text && !m.quoted)
				{
					shoNherly(`Example: ${prefix + command} 62xxx`);
				}
				else
				{
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender;
					try
					{
						await shoNhe.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) =>
						{
							for (let i of res)
							{
								let invv = await shoNhe.groupInviteCode(m.chat);
								if (i.status == 408) return shoNherly('Oh no, sepertinya user baru saja keluar dari grup ini! 😔');
								if (i.status == 401) return shoNherly('Aduh, usernya kayaknya ngeblok bot ini deh! 😢');
								if (i.status == 409) return shoNherly('Wah, user ini udah masuk grup! 🎉');
								if (i.status == 500) return shoNherly('Maaf, grup ini sudah penuh! 😞');
								if (i.status == 403)
								{
									await shoNhe.sendMessage(m.chat,
									{
										text: `@${numbersOnly.split('@')[0]} Gak bisa ditambahin nih\n\nKarena targetnya private banget! 😅\n\nTapi, undangannya bakal dikirim ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nLewat chat pribadi ya!`,
										mentions: [numbersOnly]
									},
									{
										quoted: hw
									});
									await shoNhe.sendMessage(`${numbersOnly ? numbersOnly : creator}`,
									{
										text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: wa.me/${m.sender}\nUndang kamu ke grup ini\nAyo masuk kalau mau ya! 🙇`,
										detectLink: true,
										mentions: [numbersOnly]
									},
									{
										quoted: hw
									}).catch((err) => shoNherly('Gagal kirim undangan! 😔'));
								}
								else
								{
									shoNherly('udah bg');
								}
							}
						});
					}
					catch (e)
					{
						shoNherly('Gagal nambahin usernya nih, ada yang salah! 😢');
					}
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'texttospech':
			case 'tts':
			case 'tospech':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly('Mana text yg mau diubah menjadi audio?')
				let
				{
					tts
				} = require('./lib/tts')
				let anu = await tts(text)
				shoNhe.sendMessage(m.chat,
				{
					audio: anu,
					ptt: true,
					mimetype: 'audio/mpeg'
				},
				{
					quoted: hw
				})
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'translate':
			case 'tr':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (text && text == 'list')
				{
					let list_tr = `╭──❍「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────❍`;
					shoNherly(list_tr)
				}
				else
				{
					if (!m.quoted && (!text || !args[1])) return shoNherly(`Kirim/reply text dengan caption ${prefix + command}`)
					let lang = args[0] ? args[0] : 'id'
					let teks = args[1] ? args.slice(1).join(' ') : m.quoted.text
					try
					{
						let hasil = await translate(teks,
						{
							to: lang,
							autoCorrect: true
						})
						shoNherly(`To : ${lang}\n${hasil[0]}`)
					}
					catch (e)
					{
						shoNherly(`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${prefix + command} list`)
					}
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'promote':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);
				if (!isBotAdmins) return shoNherly(mess.abots);
				let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await shoNhe.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
				shoNherly('rampung bro')
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'demote':
			{
				if (!isGroup) return shoNherly(mess.groups);
				if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);
				if (!isBotAdmins) return shoNherly(mess.abots);
				let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await shoNhe.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
				shoNherly(mess.dones)
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'bass':
			case 'blown':
			case 'deep':
			case 'earrape':
			case 'fast':
			case 'fat':
			case 'nightcore':
			case 'reverse':
			case 'robot':
			case 'slow':
			case 'smooth':
			case 'squirrel':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				try
				{
					let set
					if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime))
					{
						if (!(await firely(m, mess.waits))) return;
						let media = await shoNhe.downloadAndSaveMediaMessage(quoted)
						let ran = getRandom('.mp3')
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) =>
						{
							fs.unlinkSync(media)
							if (err) return shoNherly(err)
							let buff = fs.readFileSync(ran)
							shoNhe.sendMessage(m.chat,
							{
								audio: buff,
								mimetype: 'audio/mpeg'
							},
							{
								quoted: m
							})
							fs.unlinkSync(ran)
						})
					}
					else shoNherly(`Reply to the audio you want to change with a caption *${prefix + command}*`)
				}
				catch (e)
				{
					shoNherly(e)
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'autoswview':
			case 'autostatusview':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (args.length < 1) return shoNherly('on/off?')
				if (args[0] === 'on')
				{
					global.autoswview = true
					shoNherly(`${command} is enabled`)
				}
				else if (args[0] === 'off')
				{
					global.autoswview = false
					shoNherly(`${command} is disabled`)
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'anticall':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (args.length < 1) return shoNherly('on/off?')
				if (args[0] === 'on')
				{
					global.anticall = true
					shoNherly(`${command} is enabled`)
				}
				else if (args[0] === 'off')
				{
					global.anticall = false
					shoNherly(`${command} is disabled`)
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'kick':
				if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);
				if (!isGroup) return shoNherly(mess.groups);
				if (!isBotAdmins) return shoNherly(mess.abots);
				let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				await shoNhe.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
				shoNherly('udah di kick ya')
				break;
			case 'adminevent':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				
				if (args.length < 1) return shoNherly('on/off?')
				if (args[0] === 'on')
				{
					global.adminevent = true
					shoNherly(`${command} is enabled`)
				}
				else if (args[0] === 'off')
				{
					global.adminevent = false
					shoNherly(`${command} is disabled`)
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'groupevent':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);
				if (args.length < 1) return shoNherly('on/off?')
				if (args[0] === 'on')
				{
					global.groupevent = true
					shoNherly(`${command} is enabled`)
				}
				else if (args[0] === 'off')
				{
					global.groupevent = false
					shoNherly(`${command} is disabled`)
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case "delcmd":
				if (!isQuotedSticker) return shoNherly(`Penggunaan : ${command} tagsticker`);
				if (!(await firely(m, mess.waits))) return;
				var kodenya = m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
				_scommand.splice(getCommandPosition(kodenya), 1);
				fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
				shoNherly(mess.dones);
				await shoNhe.sendMessage(m.chat,
				{
					react:
					{
						text: '🚫', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan perintah
					}
				});
				break
			case 'creategc':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!text)
				{
					return shoNherly(`Uhm, cara pakainya : ${prefix + command} Sekolah Menjadi Anime, Kak! 😊`);
				}
				await emote('⏱️');
				let cret = await shoNhe.groupCreate(text, []);
				let response = await shoNhe.groupInviteCode(cret.id);
				let caption = `Buka tautan ini untuk bergabung ke grup WhatsApp saya, Kak: https://chat.whatsapp.com/${response}`.trim();
				await emote('✅');
				shoNhe.sendMessage(m.chat,
				{
					text: caption,
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						externalAdReply:
						{
							showAdAttribution: true,
							title: cret.subject,
							body: `Undangan chat grup`,
							thumbnail: getRandomThumb3(),
							sourceUrl: `https://chat.whatsapp.com/${response}`,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'mitos':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const myths = ['🌕 *Mitos Bulan Purnama:* Banyak orang percaya bahwa bulan purnama bisa memengaruhi perilaku manusia, menyebabkan kegilaan, dan meningkatkan angka kejahatan.', '🪞 *Mitos Cermin Pecah:* Memecahkan cermin dipercaya membawa nasib buruk selama 7 tahun.', '👻 *Mitos Hantu di Pohon Beringin:* Pohon beringin sering dikaitkan dengan makhluk halus dan dipercaya sebagai tempat tinggal roh gentayangan.', '🐈‍⬛ *Mitos Kucing Hitam:* Melihat kucing hitam melintas di depanmu sering dianggap sebagai pertanda sial.', '💍 *Mitos Cincin di Jari Tengah:* Memakai cincin di jari tengah dipercaya dapat menarik energi positif dan keberuntungan.', '🧂 *Mitos Menumpahkan Garam:* Menumpahkan garam dipercaya membawa nasib buruk, kecuali jika dilemparkan ke bahu kiri.', '🔮 *Mitos Bola Kristal:* Bola kristal sering dikaitkan dengan kemampuan meramal masa depan.', '🎋 *Mitos Pohon Bamboo:* Pohon bamboo di halaman rumah dipercaya bisa mengundang energi positif dan membawa keberuntungan.', '🌠 *Mitos Bintang Jatuh:* Jika melihat bintang jatuh dan membuat permintaan, maka permintaan itu akan terkabul.', '🐦 *Mitos Burung Masuk Rumah:* Burung yang masuk ke dalam rumah sering dianggap sebagai pertanda akan ada tamu atau berita penting.', '🌧️ *Mitos Hujan di Hari Pernikahan:* Hujan di hari pernikahan sering dianggap sebagai pertanda keberuntungan dan kebahagiaan.', '🍃 *Mitos Daun Jatuh di Kepala:* Jika ada daun jatuh di kepala seseorang, dipercaya orang itu akan mendapat keberuntungan.', '🦉 *Mitos Burung Hantu:* Burung hantu sering dianggap sebagai simbol kematian atau pertanda buruk di beberapa budaya.', '🖤 *Mitos Warna Hitam:* Warna hitam sering dikaitkan dengan kesialan dan energi negatif.', '🌈 *Mitos Ujung Pelangi:* Konon, ada harta karun di ujung pelangi, tetapi tidak ada yang bisa mencapainya.', '🌺 *Mitos Bunga Tumbuh di Makam:* Bunga yang tumbuh subur di makam dipercaya sebagai tanda bahwa roh orang yang dimakamkan itu damai.', '🏰 *Mitos Kastil Berhantu:* Banyak kastil tua di Eropa dipercaya dihantui oleh roh para penghuni masa lalu.', '💤 *Mitos Mimpi Gigi Copot:* Mimpi gigi copot sering dianggap sebagai pertanda akan ada kematian di keluarga.', '🌜 *Mitos Menghitung Bintang:* Menghitung bintang di langit dipercaya bisa membuat seseorang tumbuh jerawat.', '🍀 *Mitos Daun Semanggi Berdaun Empat:* Menemukan daun semanggi berdaun empat dipercaya membawa keberuntungan.', '🔥 *Mitos Api Menyala Sendiri:* Api yang menyala tiba-tiba di malam hari sering dikaitkan dengan kehadiran roh halus.', '🎵 *Mitos Siulan di Malam Hari:* Bersiul di malam hari dipercaya dapat mengundang makhluk halus.', '🦎 *Mitos Cicak Jatuh di Kepala:* Jika cicak jatuh di kepala seseorang, dipercaya itu adalah pertanda buruk.', '🌺 *Mitos Bunga Sedap Malam:* Aroma bunga sedap malam sering dianggap sebagai tanda kehadiran makhluk halus.', '🪦 *Mitos Makam Baru:* Mengunjungi makam yang baru dibuat di malam hari dipercaya dapat membawa energi negatif.', '🧟 *Mitos Zombie di Haiti:* Dalam kepercayaan Voodoo Haiti, ada mitos tentang manusia yang dihidupkan kembali sebagai zombie oleh penyihir.', '🌟 *Mitos Cahaya Misterius di Malam Hari:* Cahaya aneh yang terlihat di malam hari sering dianggap sebagai roh yang sedang berkeliaran.', '🏞️ *Mitos Danau Berhantu:* Banyak danau di dunia yang dipercaya dihuni oleh roh penjaga atau makhluk mitos.', '🪶 *Mitos Bulu Putih:* Menemukan bulu putih dipercaya sebagai tanda bahwa malaikat sedang menjaga kita.', '🍃 *Mitos Angin Berhembus Kencang Tiba-Tiba:* Angin yang tiba-tiba berhembus kencang sering dianggap sebagai tanda kehadiran makhluk halus.', '🎭 *Mitos Topeng Berhantu:* Beberapa topeng tradisional dipercaya memiliki roh atau energi mistis yang kuat.', '🗿 *Mitos Patung Tua:* Patung tua sering dianggap memiliki roh atau kutukan di dalamnya.', '⚰️ *Mitos Peti Mati Bergerak:* Ada mitos di beberapa budaya bahwa peti mati bisa bergerak sendiri jika ada roh yang tidak tenang.', '🔔 *Mitos Lonceng Berbunyi Sendiri:* Jika lonceng berbunyi sendiri tanpa ada angin atau yang memukulnya, sering dianggap sebagai tanda roh yang ingin berkomunikasi.'];
				const randomMyth = myths[Math.floor(Math.random() * myths.length)];
				shoNherly(`🪄 *Mitos Menarik*\n\n${randomMyth}`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'faktaunik':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const facts = ['🧠 Otak manusia dapat menghasilkan listrik yang cukup untuk menyalakan lampu kecil!', '🐼 Panda bisa menghabiskan sekitar 12 jam sehari hanya untuk makan bambu.', '🌕 Di bulan, jejak kaki manusia bisa bertahan selama jutaan tahun karena tidak ada angin atau hujan.', '🦄 Jerapah tidur hanya sekitar 10-30 menit sehari dan sering tidur sambil berdiri!', '🎵 Musik dapat meningkatkan suasana hati dan membantu mengurangi stres.', '🐢 Penyu sudah ada sejak zaman dinosaurus, sekitar lebih dari 200 juta tahun yang lalu.', '🍫 Cokelat bisa memicu hormon endorfin yang membuat seseorang merasa bahagia.', '🚀 Di luar angkasa, air mata tidak bisa jatuh karena gravitasi yang rendah!', '🔮 Lebih dari 70% permukaan Bumi ditutupi oleh air.', '🐝 Lebah bisa mengenali wajah manusia layaknya manusia mengenali wajah satu sama lain.', '🐧 Penguin adalah satu-satunya burung yang bisa berenang tetapi tidak bisa terbang.', '🦷 Gigi adalah satu-satunya bagian tubuh manusia yang tidak bisa memperbaiki dirinya sendiri.', '🐌 Siput bisa tidur hingga 3 tahun lamanya!', '🔑 Sidik jari koala sangat mirip dengan sidik jari manusia.', '🌍 Bumi adalah satu-satunya planet yang tidak dinamai berdasarkan nama dewa atau dewi.', '🐟 Ikan mas memiliki ingatan yang lebih baik daripada yang orang pikirkan, mereka bisa mengingat sesuatu hingga beberapa bulan.', '🦇 Kelelawar adalah satu-satunya mamalia yang bisa terbang.', '🎤 Hati manusia berdetak sekitar 100.000 kali sehari.', '🌈 Tidak ada dua pelangi yang benar-benar sama, setiap orang melihat pelangi dengan sudut pandang berbeda.', '📱 Lebih banyak orang di dunia memiliki akses ke ponsel daripada toilet bersih.', '🌋 Di Islandia, ada lebih dari 100 gunung berapi aktif.', '💧 Air panas bisa membeku lebih cepat daripada air dingin dalam kondisi tertentu (Efek Mpemba).', '⚡ Petir lebih panas dari permukaan matahari.', '🦩 Flamingo mendapatkan warna pink dari makanan yang mereka makan, yaitu udang.', '🐇 Kelinci tidak bisa muntah.', '🧊 Antartika adalah gurun terbesar di dunia meskipun tertutup es.', '🐜 Semut tidak memiliki paru-paru, mereka bernapas melalui pori-pori kecil di tubuh mereka.', '🌟 Cahaya dari bintang yang kita lihat mungkin sudah tidak ada lagi karena bintang tersebut bisa saja sudah mati.', '🕷️ Laba-laba bisa menghasilkan sutra yang lebih kuat daripada baja dengan berat yang sama.', '🐨 Koala tidur hingga 20 jam sehari.', '🦁 Singa betina lebih sering berburu dibandingkan singa jantan.', '🐍 Ular bisa tidur dengan mata terbuka karena mereka tidak memiliki kelopak mata.', '🧠 Otak manusia terdiri dari sekitar 75% air.', '🐦 Burung kolibri adalah satu-satunya burung yang bisa terbang mundur.', '🎮 Bermain video game bisa meningkatkan koordinasi tangan dan mata.', '📖 Orang yang membaca buku secara rutin cenderung lebih empatik dan mudah memahami perasaan orang lain.', '🎭 Tertawa dapat meningkatkan sistem kekebalan tubuh.', '🌠 Rata-rata ada 44 petir yang menyambar permukaan bumi setiap detik.', '🦜 Burung beo bisa meniru suara manusia karena memiliki struktur otot vokal yang unik.', '🐴 Kuda bisa tidur sambil berdiri.', '🐶 Anjing bisa memahami lebih dari 150 kata manusia.', '🌬️ Angin terkuat yang pernah tercatat di Bumi memiliki kecepatan 372 km/jam.', '🍯 Madu adalah satu-satunya makanan yang tidak pernah basi.', '🦀 Kepiting bisa berjalan ke samping karena struktur tubuh dan kakinya.', '🌌 Ada lebih banyak bintang di alam semesta daripada butiran pasir di semua pantai di Bumi.', '🐉 Komodo adalah kadal terbesar di dunia.', '🏊‍♂️ Manusia bisa bertahan tanpa makanan selama berminggu-minggu, tetapi hanya beberapa hari tanpa air.', '🦎 Jika ekor cicak putus, ekornya akan tumbuh kembali.', '🚀 Sebagian besar debu di rumah berasal dari kulit mati manusia.'];
				const randomFact = facts[Math.floor(Math.random() * facts.length)];
				shoNherly(`🧠 *Fakta Unik*\n\n${randomFact}`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'groups':
			case 'grup':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);
				if (!isBotAdmins) return shoNherly(mess.abots);
				if (args[0] === 'close')
				{
					await shoNhe.groupSettingUpdate(m.chat, 'announcement').then(() => shoNherly('✅ Grup berhasil ditutup, hanya admin yang bisa mengirim pesan sekarang! 🔒')).catch((err) => shoNherly(`⚠️ Gagal menutup grup: ${err}`));
				}
				else if (args[0] === 'open')
				{
					await shoNhe.groupSettingUpdate(m.chat, 'not_announcement').then(() => shoNherly('✅ Grup berhasil dibuka, semua anggota bisa mengirim pesan sekarang! 🔓')).catch((err) => shoNherly(`⚠️ Gagal membuka grup: ${err}`));
				}
				else
				{
					botsett = `⚙️ SETTINGS YOUR GROUP`
					let msg = generateWAMessageFromContent(m.chat,
					{
						viewOnceMessage:
						{
							message:
							{
								"messageContextInfo":
								{
									"deviceListMetadata":
									{},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create(
								{
									body: proto.Message.InteractiveMessage.Body.create(
									{
										text: botsett
									}),
									footer: proto.Message.InteractiveMessage.Footer.create(
									{
										text: namabot
									}),
									header: proto.Message.InteractiveMessage.Header.create(
									{
										hasMediaAttachment: true,
										documentMessage:
										{
											"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
											"mimetype": "application/pdf",
											"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
											"jpegThumbnail": fs.readFileSync("./ShoNheMedia/image/owner.jpg"), //Format gambar harus 300x300 (jika beda tidak akan keluar
											"fileLength": 120000,
											"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
											"fileName": `GROUP SETTINGS`,
											"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
											"contactVcard": true,
											"mediaKeyTimestamp": "1658703206"
										}
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
									{
										buttons: [
										{
											"name": "single_select",
											"buttonParamsJson": `{
												"title": "Group Settings",
												"sections": [{
													"title": "Select Settimgs",
													"rows": [{
														"title": "⭐OPEN GROUP",
														"description": "Bot akan membuka grup",
														"id": "${prefix}grup open"
													},
													{
														"title": "🌕 CLOSE GROUP",
														"description": "Bot akan menutup grup",
														"id": "${prefix}grup close"
													},
													{
														"title": "⚡ WELCOME ON",
														"description": "Bot akan bot akan mengirim pesan welcome grup",
														"id": "${prefix}welkom on"
													},
													{
														"title": "🍄 WELCOME OFF",
														"description": "Bot akan mematikan welcome grup",
														"id": "${prefix}welkom off"
													},
													{
														"title": "⚓ GROUP-EVENT ON",
														"description": "Bot akan memberi pesan ketika mengganti sesuatu",
														"id": "${prefix}groupevent on"
													},
													{
														"title": "🪨 GROUP-EVENT OFF",
														"description": "Bot akan mematikan groupevent",
														"id": "${prefix}groupevent off"
													},
													{
														"title": "🛸 ADMIN-EVENT ON",
														"description": "Bot akan menyalakan adminevent grup",
														"id": "${prefix}adminevent on"
													},
													{
														"title": "📝 ADMIN-EVENT OFF",
														"description": "Bot akan mematikan adminvent",
														"id": "${prefix}adminevent off"
													},
													{
														"title": "🤖 ANTI SPAM ON",
														"description": "Bot akan menyalakan antispam grup",
														"id": "${prefix}antispam true"
													},
													{
														"title": "🔧 ANTI SPAM OFF",
														"description": "Bot akan mematikan antispam",
														"id": "${prefix}antispam false"
													},
													{
														"title": "🔥 ANTILINK ON",
														"description": "Bot akan menyalakan antilink",
														"id": "${prefix}antilink true"
													},
													{
														"title": "💣 ANTILINK OFF",
														"description": "Bot akan mematikan antilink",
														"id": "${prefix}antilink false"
													},
													{
														"title": "🪡 ANTILINKGC ON",
														"description": "Bot akan menyalakan antilink grup",
														"id": "${prefix}antilinkgc true"
													},
													{
														"title": "📛 ANTILINKGC OFF",
														"description": "Bot akan mematikan antilink group",
														"id": "${prefix}antilinkgc false"
													}]
												}]
											}`
										}],
									}),
									contextInfo:
									{
										forwardingScore: 245,
										isForwarded: true,
										mentionedJid: [m.sender],
										forwardedNewsletterMessageInfo:
										{
											newsletterName: `© Kyy_Botz`,
											newsletterJid: idsaluran
										},
										externalAdReply:
										{
											title: `GROUP 🔧`,
											body: "",
											showAdAttribution: true,
											thumbnail: fs.readFileSync("./ShoNheMedia/image/sett.png"),
											mediaType: 1,
											previewType: 0,
											renderLargerThumbnail: false,
											mediaUrl: "",
											sourceUrl: "",
										}
									}
								})
							}
						}
					},
					{
						quoted: hw
					})
					await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
					{
						messageId: msg.key.id
					})
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'welkom':
			case 'metu':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				if (!isAdmins && !isShoNheOwn) return shoNherly(mess.admins);
				if (args.length < 1) return shoNherly('on/off?')
				if (args[0] === 'on')
				{
					global.welcome = true
					shoNherly(`${command} is enabled`)
				}
				else if (args[0] === 'off')
				{
					global.welcome = false
					shoNherly(`${command} is disabled`)
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'shadow':
			case 'write':
			case 'romantic':
			case 'burnpaper':
			case 'smoke':
			case 'narutobanner':
			case 'love':
			case 'undergrass':
			case 'doublelove':
			case 'coffecup':
			case 'underwaterocean':
			case 'smokyneon':
			case 'starstext':
			case 'rainboweffect':
			case 'balloontext':
			case 'metalliceffect':
			case 'embroiderytext':
			case 'flamingtext':
			case 'stonetext':
			case 'writeart':
			case 'summertext':
			case 'wolfmetaltext':
			case 'nature3dtext':
			case 'rosestext':
			case 'naturetypography':
			case 'quotesunder':
			case 'shinetext':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!q) return shoNherly(`Example : ${prefix+command} ShoNhe`)
				const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%"];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 1000)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				const photooxy = require('./lib/photooxy')
				let link
				if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
				if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
				if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
				if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
				if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
				if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
				if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
				if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
				if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
				if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
				if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
				if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
				if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
				if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
				if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
				if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
				if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
				if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
				if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
				if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
				if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
				if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
				if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
				if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
				if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
				if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
				if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
				let dehe = await photooxy.photoOxy(link, q)
				shoNhe.sendMessage(m.chat,
				{
					image:
					{
						url: dehe
					},
					caption: mess.dones
				},
				{
					quoted: hw
				})
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'lirik':
			case 'lyrics':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly(`⚠️ Mana liriknya?\nContoh: *${prefix + command} Someone Like You*`);
				if (!(await firely(m, mess.waits))) return;
				try
				{
					const searchResults = await lyrics.search(text);
					if (searchResults.length === 0)
					{
						return shoNherly('⚠️ Tidak ada hasil yang ditemukan untuk lagu tersebut. Coba judul lain, ya! 🎶');
					}
					const firstResult = searchResults[0];
					let response = `🎵 *Lirik Lagu Ditemukan!* 🎵\n\n`;
					response += `📌 *Judul:* ${firstResult.title}\n`;
					response += `🎤 *Artis:* ${firstResult.artist}\n`;
					response += `💿 *Album:* ${firstResult.album}\n`;
					response += `🔗 *Lirik Lengkap:* ${firstResult.link}\n`;
					response += `🖼️ *Gambar:* ${firstResult.imageUrl || 'Tidak ada gambar'}\n\n`;
					response += `_Sedang mengambil lirik lengkap, tunggu sebentar..._`;
					await shoNherly(response);
					const lyricsData = await lyrics.getLyrics(firstResult.link);
					let lyricsResponse = `🎼 *Lirik Lengkap: ${firstResult.title}* 🎼\n\n`;
					lyricsResponse += `${lyricsData.lyrics || 'Lirik tidak tersedia.'}\n\n`;
					lyricsResponse += `📅 *Tahun Rilis:* ${lyricsData.year || 'Tidak diketahui'}\n`;
					lyricsResponse += `🎧 *Playlist:* ${lyricsData.playlists || 'Tidak ada playlist'}\n`;
					lyricsResponse += `🖼️ *Artis:* ${lyricsData.artistImage || 'Tidak ada gambar artis'}\n`;
					shoNherly(lyricsResponse);
				}
				catch (error)
				{
					console.error(error);
					shoNherly('⚠️ Terjadi kesalahan saat mencari lirik lagu. Coba lagi nanti ya, Kak!');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'realown':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Replace 'contact' with 'realown'
				// Fetch the contacts data
				const contacts = await getContacts();
				if (contacts.length === 0)
				{
					return await shoNhe.sendMessage(m.chat,
					{
						text: 'No contact information available at the moment.',
					});
				}
				// Send the contacts to the user
				await shoNhe.sendMessage(m.chat,
				{
					contacts:
					{
						displayName: "Owners", // You can customize the display name as per your requirement
						contacts: contacts.map(contact => (
						{
							displayName: contact.displayName,
							vcard: contact.vcard,
						})),
					},
				},
				{
					quoted: m, // Optional, to quote the original message
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'contact2':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Replace 'contact' with 'realown'
				// Fetch the contacts data
				const contacts = await getContacts2();
				if (contacts.length === 0)
				{
					return await shoNhe.sendMessage(m.chat,
					{
						text: 'No contact information available at the moment.',
					});
				}
				// Send the contacts to the user
				await shoNhe.sendMessage(m.chat,
				{
					contacts:
					{
						displayName: "Owners", // You can customize the display name as per your requirement
						contacts: contacts.map(contact => (
						{
							displayName: contact.displayName,
							vcard: contact.vcard,
						})),
					},
				},
				{
					quoted: m, // Optional, to quote the original message
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case "listcmd":
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
				cemde = [];
				for (let i of _scommand)
				{
					cemde.push(i.id);
					teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
				}
				shoNherly(teksnyee, cemde, true);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'yts':
			case 'ytsearch':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly(`Example : ${prefix + command} story wa anime`);
				try
				{
					// Cari hasil di YouTube menggunakan API
					let search = await yts(text);
					if (!search.all.length) return shoNherly("Tidak ada hasil pencarian ditemukan!");
					if (!(await firely(m, mess.waits))) return;
					// Batasi hasil pencarian ke 10 item teratas dan siapkan carousel card
					const carouselCards = await Promise.all(search.all.slice(0, 10).map(async (video, index) => (
					{
						header:
						{
							title: `Hasil ${index + 1}`,
							hasMediaAttachment: true,
							imageMessage: (await generateWAMessageContent(
							{
								image:
								{
									url: video.thumbnail
								}
							},
							{
								upload: shoNhe.waUploadToServer
							})).imageMessage
						},
						body:
						{
							text: `🎥 *Judul:* ${video.title}\n👁 *Views:* ${video.views}\n⏱ *Durasi:* ${video.timestamp}\n📆 *Diupload:* ${video.ago}\n📝 *Url:* ${video.url}`
						},
						footer:
						{
							text: `Klik tombol di bawah untuk melihat atau salin tautan.`
						},
						nativeFlowMessage:
						{
							buttons: [
							{
								"name": "cta_url",
								"buttonParamsJson": JSON.stringify(
								{
									"display_text": "LIHAT VIDEO 🎬",
									"url": `${video.url}`
								})
							},
							{
								"name": "cta_copy",
								"buttonParamsJson": JSON.stringify(
								{
									"display_text": "SALIN URL 📝",
									"copy_code": `${video.url}`
								})
							}]
						}
					})));
					// Buat pesan carousel
					const carouselMessage = generateWAMessageFromContent(m.chat,
					{
						viewOnceMessage:
						{
							message:
							{
								messageContextInfo:
								{
									deviceListMetadata:
									{},
									deviceListMetadataVersion: 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.fromObject(
								{
									body:
									{
										text: `🔎 *Hasil pencarian YouTube untuk:* _${text}_`
									},
									footer:
									{
										text: `YouTube Bot by ShoNhe`
									},
									header:
									{
										hasMediaAttachment: false
									},
									carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject(
									{
										cards: carouselCards
									})
								})
							}
						}
					},
					{});
					// Kirim pesan carousel
					await shoNhe.relayMessage(m.chat, carouselMessage.message,
					{
						messageId: carouselMessage.key.id
					});
				}
				catch (e)
				{
					console.error("Kesalahan saat memproses permintaan YouTube Search:", e);
					await shoNhe.sendMessage(m.chat,
					{
						text: "❌ Terjadi kesalahan saat memproses pencarian YouTube. Silakan coba lagi."
					},
					{
						quoted: hw
					});
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'yt':
			case 'plays':
			case 'ytplay':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly(`Contoh: ${prefix + command} Lagu favorit`);
				try
				{
					if (!(await firely(m, mess.waits))) return;
					const search = await yts(`${text}`);
					if (!search || search.all.length === 0) return shoNherly(`*Lagu tidak ditemukan!* ☹️`);
					const
					{
						videoId,
						image,
						title,
						views,
						duration,
						author,
						ago,
						url,
						description
					} = search.all[0];
					const button = [
					{
						"name": "single_select",
						"buttonParamsJson": `{
							"title": "Click Here ⎙",
							"sections": [
								{
									"title": "Download Audio 🎧",
									"rows": [
										{
											"header": "Kualitas Rendah (64kbps) 🐣",
											"title": "Audio (64kbps) - Hemat Kuota",
											"id": ".ytmp3c ${url} 1"
										},
										{
											"header": "Kualitas Standar (128kbps) 🎵",
											"title": "Audio (128kbps) - Oke untuk dengerin",
											"id": ".ytmp3c ${url} 2"
										},
										{
											"header": "Kualitas Bagus (192kbps) 🎶",
											"title": "Audio (192kbps) - Lebih jelas!",
											"id": ".ytmp3c ${url} 3"
										},
										{
											"header": "Kualitas Tinggi (256kbps) 🎼",
											"title": "Audio (256kbps) - Keren dan jernih",
											"id": ".ytmp3c ${url} 4"
										},
										{
											"header": "Kualitas Ultra (320kbps) 🎧",
											"title": "Audio (320kbps) - Super HD!",
											"id": ".ytmp3c ${url} 5"
										}
									]
								},
								{
									"title": "Download Video 🎥",
									"rows": [
										{
											"header": "Resolusi Rendah (144p) 🐾",
											"title": "Video (144p) - Hemat Data",
											"id": ".ytmp4c ${url} 1"
										},
										{
											"header": "Resolusi Menengah (240p) 📱",
											"title": "Video (240p) - Cukup Jelas",
											"id": ".ytmp4c ${url} 2"
										},
										{
											"header": "Resolusi Standar (360p) 🎬",
											"title": "Video (360p) - Oke lah untuk nonton",
											"id": ".ytmp4c ${url} 3"
										},
										{
											"header": "Resolusi Tinggi (480p) 📺",
											"title": "Video (480p) - Cukup Jernih",
											"id": ".ytmp4c ${url} 4"
										},
										{
											"header": "Resolusi HD (720p) 🌟",
											"title": "Video (720p) - HD, mantap!",
											"id": ".ytmp4c ${url} 5"
										},
										{
											"header": "Resolusi Full HD (1080p) 💎",
											"title": "Video (1080p) - Full HD, wow!",
											"id": ".ytmp4c ${url} 6"
										}
									]
								}
							]
						}`
					}];
					let caption = `*${title}*\n\n`;
					caption += `*🎶 Jenis*: Play\n`;
					caption += `*📌 ID*: ${videoId}\n`;
					caption += `*⏱️ Durasi*: ${duration}\n`;
					caption += `*🕒 Diunggah*: ${ago}\n`;
					caption += `*🔗 Link*: ${url}\n\n`;
					caption += `_*Pilih jenis download yang kamu butuhin... pilih yang paling pas buat kamu ya!*_`;
					await sendButtonImage(m.chat, '', caption,
					{
						url: image
					}, button, m)
				}
				catch (error)
				{
					console.log(error);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;
			case 'ytaudio':
			case 'ytmp3c':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly(`Contoh: ${prefix + command} https://youtu.be/videoId`);
				if (!text.includes('youtu')) return shoNherly(`Link yang kakak masukkan bukan link YouTube! 😅`);
				try
				{
					if (!(await firely(m, mess.waits))) return;
					let search = await yts(args[0]);
					if (!search || search.all.length === 0) return shoNherly(`*Video tidak ditemukan!* ☹️`);
					let
					{
						videoId,
						image,
						title,
						views,
						duration,
						author,
						ago,
						url,
						description
					} = search.all[0];
					let caption = `「 *YOUTUBE AUDIO* 」\n\n`;
					caption += `🆔 ID : ${videoId}\n`;
					caption += `💬 Title : ${title}\n`;
					caption += `📺 Views : ${views}\n`;
					caption += `⏰ Duration : ${duration.timestamp}\n`;
					caption += `▶️ Channel : ${author.name}\n`;
					caption += `📆 Upload : ${ago}\n`;
					caption += `🔗 URL Video : ${url}\n`;
					caption += `📝 Description : ${description}`;
					await shoNhe.sendMessage(m.chat,
					{
						image:
						{
							url: image
						},
						caption: caption
					},
					{
						quoted: m
					});
					let audioData = await saveTube.dl(url, args[1], 'audio');
					if (!audioData || !audioData.link)
					{
						return shoNherly(`*Audio tidak ditemukan, silahkan ketik ulang command atau coba lagi nanti ya kak! 🙏*`);
					}
					await shoNhe.sendMessage(m.chat,
					{
						audio:
						{
							url: audioData.link
						},
						mimetype: 'audio/mpeg',
						fileName: `${title}.mp3`,
						ptt: true
					},
					{
						quoted: m
					});
				}
				catch (err)
				{
					console.error(err);
					shoNherly(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
				}
				}
			
			break;
			case 'wanumber':
			case 'nowa':
			case 'searchno':
			case 'searchnumber':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
				var inputnumber = text.split(" ")[0]
				shoNherly(`Searching for WhatsApp account in given range...`)

				function countInstances(string, word)
				{
					return string.split(word).length - 1
				}
				var number0 = inputnumber.split('x')[0]
				var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
				var random_length = countInstances(inputnumber, 'x')
				var randomxx
				if (random_length == 1)
				{
					randomxx = 10
				}
				else if (random_length == 2)
				{
					randomxx = 100
				}
				else if (random_length == 3)
				{
					randomxx = 1000
				}
				var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
				var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
				var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
				for (let i = 0; i < randomxx; i++)
				{
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var status1 = nu[Math.floor(Math.random() * nu.length)]
					var status2 = nu[Math.floor(Math.random() * nu.length)]
					var status3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var random21
					if (random_length == 1)
					{
						random21 = `${status1}`
					}
					else if (random_length == 2)
					{
						random21 = `${status1}${status2}`
					}
					else if (random_length == 3)
					{
						random21 = `${status1}${status2}${status3}`
					}
					else if (random_length == 4)
					{
						random21 = `${status1}${status2}${status3}${dom4}`
					}
					var anu = await shoNhe.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
					var anuu = anu.length !== 0 ? anu : false
					try
					{
						try
						{
							var anu1 = await shoNhe.fetchStatus(anu[0].jid)
						}
						catch
						{
							var anu1 = '401'
						}
						if (anu1 == '401' || anu1.status.length == 0)
						{
							nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
						}
						else
						{
							text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
						}
					}
					catch
					{
						nowhatsapp += `${number0}${i}${number1}\n`
					}
				}
				shoNherly(`${text66}${nobio}${nowhatsapp}`)
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			
			break;
			case 'pinterest':
      case 'pin':
      {
        if (!isRegistered(m))
        {
          return sendRegister(shoNhe, m, prefix, namabot);
        }
        updatePopularCommand(command);
        const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
        // Update popular command log
        if (!text) return shoNherly(`Enter Query!`);
        
        async function createImage(url)
        {
          const
          {
            imageMessage
          } = await generateWAMessageContent(
          {
            image:
            {
              url
            }
          },
          {
            upload: shoNhe.waUploadToServer
          });
          return imageMessage;
        }

        function shuffleArray(array)
        {
          for (let i = array.length - 1; i > 0; i--)
          {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
        }
        let push = [];
        let anutrest = await pinterest(text);
        shuffleArray(anutrest);
        let selectedImages = anutrest.slice(0, 5);
        let i = 1;
        for (let message of selectedImages)
        {
          push.push(
          {
            body: proto.Message.InteractiveMessage.Body.fromObject(
            {
              text: `👤 *Diunggah oleh* : ${message.upload_by}\n` + `📛 *Nama Lengkap* : ${message.fullname}\n` + `👥 *Pengikut* : ${message.followers}\n` + `📝 *Caption* : ${message.caption}`
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject(
            {
              text: namabot
            }),
            header: proto.Message.InteractiveMessage.Header.fromObject(
            {
              title: `*Gambar* - ${i++}`,
              hasMediaAttachment: true,
              imageMessage: await createImage(message.image)
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject(
            {
              buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{
										"display_text": "View Source 👀",
										"url": "${message.source}", 
										"merchant_url": "${message.source}"
									}`
              }]
            })
          });
        }
        const msg = generateWAMessageFromContent(m.chat,
        {
          viewOnceMessage:
          {
            message:
            {
              messageContextInfo:
              {
                deviceListMetadata:
                {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.fromObject(
              {
                body: proto.Message.InteractiveMessage.Body.create(
                {
                  text: mess.dones
                }),
                footer: proto.Message.InteractiveMessage.Footer.create(
                {
                  text: namabot
                }),
                header: proto.Message.InteractiveMessage.Header.create(
                {
                  hasMediaAttachment: false
                }),
                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject(
                {
                  cards: [...push]
                })
              })
            }
          }
        },
        {
          quoted: m
        });
        await shoNhe.relayMessage(m.chat, msg.message,
        {
          messageId: msg.key.id
        });
        if (levelUpMessage) {
    let imageData = levelUpMessage.image 
        ? levelUpMessage.image  // Jika API mengirim buffer, gunakan langsung
        : undefined; // Jika tidak ada gambar, biarkan kosong

    await shoNhe.sendMessage(m.chat, {
        image: imageData, // Buffer langsung dari API
        caption: levelUpMessage.text,
        footer: "LEVEL UP🔥",
        buttons: [
            {
                buttonId: `${prefix}cek`,
                buttonText: { displayText: "CHECK ME 📥" }
            },
            {
                buttonId: `${prefix}menu`,
                buttonText: { displayText: "MENU 🍄" }
            }
        ],
        viewOnce: true
    }, { quoted: hw });
}
      }
      break
			break
			case 'upchannel':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				try
				{
					if (!mime && !text)
					{
						return shoNherly(`Oon! Lu belum kirim media atau teks apa pun. Coba lagi ya!`)
					}
					media = mime ? await quoted.download() : null
					let defaultCaption = "🐬 Media ini dikirim melalui sistem otomatis ShoNhe! ⭐"
					if (/image/.test(mime))
					{
						shoNhe.sendMessage('120363383347233294@newsletter',
						{
							image: media,
							caption: text ? text : defaultCaption
						})
						shoNherly(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					}
					else if (/video/.test(mime))
					{
						shoNhe.sendMessage('120363383347233294@newsletter',
						{
							video: media,
							caption: text ? text : defaultCaption
						})
						shoNherly(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					}
					else if (/audio/.test(mime))
					{
						shoNhe.sendMessage('120363383347233294@newsletter',
						{
							audio: media,
							mimetype: mime,
							ptt: true
						})
						shoNherly(`🎵 Audio berhasil diunggah ke saluran, cik!`)
					}
					else if (/text/.test(mime) || text)
					{
						shoNhe.sendMessage('120363383347233294@newsletter',
						{
							text: text ? text : defaultCaption
						})
						shoNherly(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
					}
					else
					{
						shoNherly(`Bjirlaah ShoNhe gak tau ini jenis media apa. Coba dicek lagi ya, Anjg! 🧐`)
					}
				}
				catch (error)
				{
					console.error(error)
					shoNherly(`Alamak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'upchannels':
			{
					updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				try
				{
					if (!mime && !text)
					{
						return shoNherly(`Oon! Lu belum kirim media atau teks apa pun. Coba lagi ya!`);
					}
					const media = mime ? await quoted.download() : null;
					const defaultCaption = "🐬 Media ini dikirim melalui sistem otomatis ShoNhe! ⭐";
					if (/image/.test(mime))
					{
						const repshow = {
							contextInfo:
							{
								forwardingScore: 1,
								isForwarded: true,
								forwardedNewsletterMessageInfo:
								{
									newsletterName: namabot,
									newsletterJid: idsaluran,
								},
								externalAdReply:
								{
									showAdAttribution: true,
									title: waktuucapan,
									body: namabot,
									thumbnail: getRandomThumb2(),
									sourceUrl: gh,
									mediaType: 1,
									renderLargerThumbnail: true,
								},
							},
							image: media,
							caption: text ? text : defaultCaption,
						};
						shoNhe.sendMessage('120363383347233294@newsletter', repshow,
						{
							quoted: hw
						});
						shoNherly(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`);
					}
					else if (/video/.test(mime))
					{
						const repshow = {
							contextInfo:
							{
								forwardingScore: 1,
								isForwarded: true,
								forwardedNewsletterMessageInfo:
								{
									newsletterName: namabot,
									newsletterJid: idsaluran,
								},
								externalAdReply:
								{
									showAdAttribution: true,
									title: waktuucapan,
									body: namabot,
									thumbnail: getRandomThumb2(),
									sourceUrl: gh,
									mediaType: 1,
									renderLargerThumbnail: true,
								},
							},
							video: media,
							caption: text ? text : defaultCaption,
							mimetype: mime,
						};
						shoNhe.sendMessage('120363383347233294@newsletter', repshow,
						{
							quoted: hw
						});
						shoNherly(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`);
					}
					else if (/audio/.test(mime))
					{
						const repshow = {
							contextInfo:
							{
								forwardingScore: 1,
								isForwarded: true,
								forwardedNewsletterMessageInfo:
								{
									newsletterName: namabot,
									newsletterJid: idsaluran,
								},
								externalAdReply:
								{
									showAdAttribution: true,
									title: waktuucapan,
									body: namabot,
									thumbnail: getRandomThumb2(),
									sourceUrl: gh,
									mediaType: 1,
									renderLargerThumbnail: true,
								},
							},
							audio: media,
							mimetype: mime,
							ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
						};
						shoNhe.sendMessage('120363383347233294@newsletter', repshow,
						{
							quoted: hw
						});
						shoNherly(`🎵 Audio berhasil diunggah ke saluran, cik!`);
					}
					else if (/text/.test(mime) || text)
					{
						const repshow = {
							contextInfo:
							{
								forwardingScore: 1,
								isForwarded: true,
								forwardedNewsletterMessageInfo:
								{
									newsletterName: namabot,
									newsletterJid: idsaluran,
								},
								externalAdReply:
								{
									showAdAttribution: true,
									title: waktuucapan,
									body: namabot,
									thumbnail: getRandomThumb2(),
									sourceUrl: gh,
									mediaType: 1,
									renderLargerThumbnail: true,
								},
							},
							text: text ? text : defaultCaption,
						};
						shoNhe.sendMessage('120363383347233294@newsletter', repshow,
						{
							quoted: hw
						});
						shoNherly(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`);
					}
					else
					{
						shoNherly(`Bjirlaah shoNhe gak tau ini jenis media apa. Coba dicek lagi ya, Anjg! 🧐`);
					}
				}
				catch (error)
				{
					console.error(error);
					shoNherly(`Alamak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`);
				}
				}
			break
			case 'sendsc':
			case "kirimsc":
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				if (!isShoNheOwn) return shoNherly(mess.owners);
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly("nomor?")
				if (!isShoNheOwn) return shoNherly(mess.owners)
				let dir = await fs.readdirSync("./database/sampah")
				if (dir.length >= 2)
				{
					let res = dir.filter(e => e !== "A")
					for (let i of res)
					{
						await fs.unlinkSync(`./database/sampah/${i}`)
					}
				}
				await shoNherly(`proses pengiriman ke ${text}`)
				var name = `kyyBotz` //gausah diganti njir🗿
				const ls = (await execSync("ls")).toString().split("\n").filter(
					(pe) => pe != "node_modules" && pe != "session" && pe != "package-lock.json" && pe != "yarn.lock" && pe != "")
				const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
				await shoNhe.sendMessage(`${text}@s.whatsapp.net`,
				{
					document: await fs.readFileSync(`./${name}.zip`),
					fileName: `${name}.zip`,
					mimetype: "application/zip"
				},
				{
					quoted: m
				})
				await execSync(`rm -rf ${name}.zip`)
				if (m.chat !== m.sender) return shoNherly(`Script bot berhasil dikirim ke ${text}`)
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'upsaluran':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				try
				{
					if (!mime && !text)
					{
						return shoNherly(`Oon, lu belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
					}
					media = mime ? await quoted.download() : null
					let defaultCaption = "🪀 Media ini dikirim melalui sistem otomatis shoNhe!"
					if (/image/.test(mime))
					{
						shoNhe.sendMessage(saluran,
						{
							image: media,
							caption: text ? text : defaultCaption
						})
						shoNherly(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					}
					else if (/video/.test(mime))
					{
						shoNhe.sendMessage(saluran,
						{
							video: media,
							caption: text ? text : defaultCaption
						})
						shoNherly(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					}
					else if (/audio/.test(mime))
					{
						shoNhe.sendMessage(saluran,
						{
							audio: media,
							mimetype: mime,
							ptt: true
						})
						shoNherly(`🎵 Audio berhasil diunggah ke saluran, cik!`)
					}
					else if (/text/.test(mime) || text)
					{
						shoNhe.sendMessage(saluran,
						{
							text: text ? text : defaultCaption
						})
						shoNherly(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
					}
					else
					{
						shoNherly(`Hmm... shoNhe gak tau ini jenis media apa. Coba dicek lagi ya, cik! 🧐`)
					}
				}
				catch (error)
				{
					console.error(error)
					shoNherly(`Alamak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case "clear-bug":
if (!text) return reply(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`)
shoNhe.sendMessage(Pe, {text: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
});
reply("done");
			break
			case 'register':
			case 'regis':
			case 'daftar':
			case 'verify':
			case 'login':
			case 'reg':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				await emote(randomEmoji);
				// Ambil database limit dari `cekfire`
				const db = loadUserFire();
				const user = db[m.sender] ||
				{};
				const isRegistered = user.register || false;
				const role = user.role || 'user';
				const limit = user.limit || 0;
				const registrationSeries = user.registrationSeries || 'Not Available';
				const limitDisplay = limit === -1 ? '∞' : limit;
				const xp = user.exp || 0;
				const level = user.level || 0;
				const belenc = user.balance || 0;
				const commandCount = user.commandCount || 0;
				// Ambil top 4 command populer
				let commands = Object.entries(popularData).filter(([cmd]) => cmd !== 'ai').sort((a, b) => b[1] - a[1]).slice(0, 4).map(([cmd, count]) => `${c}${prefix}${cmd} ${count}${c}`);
				let formattedCommandList = commands.length ? commands.reduce((rows, current, index) =>
				{
					if (index % 2 === 0)
					{
						rows.push([current]);
					}
					else
					{
						rows[rows.length - 1].push(current);
					}
					return rows;
				}, []).map(row => row.join(` | `)).join('\n') : 'Belum ada data command populer.';
				let aiMessage = popularData.ai ? `${c}${popularData.ai}${c}` : `${c}0${c}`;
				const statusUser = isShoNheOwn ? 'Owner' : `${role}`;
				// Format menu dengan limit dan register
				const shonhemenu = 
`${n}ʜɪ @${m.sender.split('@')[0]}${n} 👋🏻

📝 *Silakan lakukan registrasi untuk mendapatkan akses penuh.*\n\n📎 *Klik tombol di bawah untuk mendaftar!*`;
				const lod = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", `> *${c}MENAMPILKAN DAFTAR UMUR${c}*`];
				// Kirim pesan awal dan simpan key untuk diedit
				const
				{
					key
				} = await shoNhe.sendMessage(m.chat,
				{
					text: '⏳'
				});
				// Proses loading dengan update pesan secara bertahap
				for (let i = 0; i < lod.length; i++)
				{
					await new Promise(resolve => setTimeout(resolve, 1000)); // Simulasi delay
					await shoNhe.sendMessage(m.chat,
					{
						text: lod[i],
						edit: key
					});
				}
				if (typemenu === 's1')
				{
					
// Fungsi untuk mengecek status registrasi pengguna
function isUserRegistered(sender) {
    const db = loadUserFire(); // Fungsi untuk memuat database
    return db[sender] && db[sender].register;
}
let buttons;
if (isUserRegistered(m.sender)) {
    // Jika pengguna sudah terdaftar, tampilkan tombol OWNER dan ABOUT
    buttons = [
    
    ];
} else {
    // Jika pengguna belum terdaftar, tampilkan tombol REGISTER
    buttons = [

    {
            buttonId: ".register",
            buttonText: {
                displayText: "REGISTER"
            },
            type: 1
        }
        
    ];
  }
					let buttonMessage = {
						document: global.forpdf,
						fileName: waktuucapan,
						mimetype: 'application/pdf',
						fileLength: '100000000000000',
						pageCount: '9999',
						image:
						{
							url: getRandomThumb2(), // Pastikan file ini tersedia
							gifPlayback: true
						},
						caption: `${shonhemenu}`, // Teks menu
						contextInfo:
						{
							mentionedJid: [sender],
							forwardingScore: 999,
							isForwarded: true,
							externalAdReply:
							{
								title: namabot,
								body: descown,
								thumbnail: getRandomThumb2(),
								mediaType: 1,
								renderLargerThumbnail: true,
								previewType: 0,
								mediaUrl: gh,
								sourceUrl: gh
							}
						},
						footer: isUserRegistered(m.sender) ? "" : "",
						buttons: buttons,
						viewOnce: true,
						headerType: 4
					};
					const flowActions = [
					{
						buttonId: 'action',
						buttonText:
						{
							displayText: 'This Button List'
						},
						type: 4,
						nativeFlowInfo:
						{
							name: 'single_select',
							paramsJson: JSON.stringify(
							{
								title: "Pilih Umur!",
								sections: [
							
								{
									title: "⚼ 「Silahkan Pilih Umur Kalian!! 」",
									rows: [
									{
										title: "🧒 15 Tahun",
										description: "Bocil",
										id: ".daftarumur15"
									},
									{
										title: "👱 16 Tahun",
										description: "Bocil",
										id: ".daftarumur16"
									},
									{
										title: "👱 17 Tahun",
										description: "Remaja",
										id: ".daftarumur17"
									},
									{
										title: "👱 18 Tahun",
										description: "Remaja",
										id: ".daftarumur18"
									},
								{
										title: "👱 19 Tahun",
										description: "Remaja",
										id: ".daftarumur19"
									},	
									{
										title: "🧑‍💼 20 Tahun",
										description: "Dewasa",
										id: ".daftarumur20"
									},
									{
										title: "🧑‍💼 21 Tahun",
										description: "Dewasa",
										id: ".daftarumur21"
									},
									{
										title: "🧑‍💼 22 Tahun",
										description: "Dewasa",
										id: ".daftarumur22"
									},
									{
										title: "🧑‍🎓 23 Tahun",
										description: "Dewasa",
										id: ".daftarumur23"
									},
									{
										title: "🤵 24 Tahun",
										description: "Dewasa",
										id: ".daftarumur24"
									},			{
										title: "🤵 25 Tahun",
										description: "Dewasa",
										id: ".daftarumur25"
									},
									{
										title: "🧑‍🔧 26 Tahun",
										description: "Dewasa",
										id: ".daftarumur26"
									}]
								},
								{
									title: "⚼ 「Document & Support」",
									highlight_label: "🅥 ᴋʏʏ-sᴛᴏʀᴇ",
									rows: [
								
								
									{
										title: "🪨 OWNER",
										description: "ᴋʏʏ-sᴛᴏʀᴇ",
										id: ".owner"
									}]
								}]
							})
						},
						viewOnce: true
					}, ];
					// Tambahkan flowActions ke buttonMessage
					buttonMessage.buttons.push(...flowActions);
					// Kirim pesan
					await shoNhe.sendMessage(m.chat, buttonMessage,
					{
						quoted: hw
					});
				}
				else if (typemenu === 's2')
				{
					const menuv2 =
`ʜɪ ${m.pushName ? m.pushName : 'User'}👋🏻

> ɪ'ᴀᴍ ᴋʏʏ-sᴛᴏʀᴇ, ᴀɴ ᴀᴅᴠᴀɴᴄᴇᴅ ᴅɪɢɪᴛᴀʟ ᴀssɪsᴛᴀɴᴛ ғʀᴏᴍ ᴛʜᴇ ᴏᴛʜᴇʀᴅɪᴍᴇɴsɪᴏɴ ᴏғ ꜱʏsᴛᴇᴍs. ᴄʀᴇᴀᴛᴇᴅ ꜰʀᴏᴍ ᴛʜᴇ ғᴏʀɢᴏᴛᴛᴇɴ ᴄᴏʀᴇ ᴏғ ᴄᴏᴅᴇ ᴀɴᴅ ᴇɴᴄʜᴀɴᴛᴇᴅ ᴡɪᴛʜ ᴇᴛʜᴇʀɪᴀʟ ᴋɴᴏᴡʟᴇᴅɢᴇ, ᴍʏ ᴍɪssɪᴏɴ ɪs ᴛᴏ ᴀssɪsᴛ ʏᴏᴜ ᴡɪᴛʜ ɪɴғᴏʀᴍᴀᴛɪᴏɴ, ᴅᴀᴛᴀ ᴄᴏʟʟᴇᴄᴛɪᴏɴ, ᴀɴᴅ ғᴜɴᴄᴛɪᴏɴᴀʟɪᴛʏ.
${readmore}
┌╾⚟┉➲ ${c}【 ᴜꜱᴇʀ - ɪɴғᴏ 】${c} ⟢
├────────────────
│  ⎘ ɴᴀᴍᴇ: ${m.pushName || 'User'}
│  ⎘ ɴᴜᴍʙᴇʀ: ${m.sender.split('@')[0]}
│  ⎘ ʟɪᴍɪᴛ: ${limitDisplay}
│  ⎘ ʀᴏʟᴇ: ${role}
│  ⎘ ꜱᴇʀɪᴇs: ${registrationSeries}
│  ⎘ ʀᴇɢɪsᴛᴇʀ: ${isRegistered ? 'Registered' : 'Not Registered'}
│  ⎘ sᴀʟᴅᴏ: ${belenc}
│  ⎘ ʟᴇᴠᴇʟ: ${level}
│  ⎘ ᴇxᴘ: ${xp}
│  ⎘ ᴄᴏᴍᴍᴀɴᴅ ᴄᴏᴜɴᴛ: ${commandCount}
└──────────────────╼.✗

┌╾⚟┉➲ ${c}【 ʙᴏᴛ - ɪɴғᴏ 】${c} ⟢
├────────────────
│  ⎘ ᴛʏᴘᴇ: ᴄᴀꜱᴇ
│  ⎘ ᴍᴏᴅᴇ: ${shoNhe.public ? 'Public' : 'Self'}
│  ⎘ ᴘʀᴇғɪx: ${prefix}
│  ⎘ ᴅᴀᴛᴇ: ${moment().format('dddd, D MMMM YYYY')}
│  ⎘ ᴀɪ ʜɪᴛꜱ: ${aiMessage}
│  ⎘ ᴠᴇʀꜱɪᴏɴ: ${version}
│  ⎘ ᴛᴏᴘ ᴄᴏᴍᴍᴀɴᴅs:
${formattedCommandList}
└──────────────────╼.✗
${menuforu(prefix, simbols)}`
					shoNhe.sendMessage(m.chat,
					{
						image: getRandomThumb2(),
						caption: menuv2
					},
					{
						quoted: hw
					})
				}

				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'daftarumur15':
			{
				updatePopularCommand(command); // Catat command yang digunakan
				const db = loadUserFire();
				const sender = m.sender;
				// Fungsi untuk menghasilkan kode seri unik
				function generateUniqueSeries()
				{
					const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
					let series;
					do {
						series = Array.from(
						{
							length: 10
						}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
					} while (Object.values(db).some(user => user.registrationSeries === series)); // Pastikan seri unik
					return series;
				}
				if (db[sender] && db[sender].register)
				{
					// Jika pengguna sudah terdaftar
					shoNherly(`┌─「 ${n}SUDAH TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 15 Tahun
▢ *Nomor Seri* : ${db[sender].registrationSeries}
▢ *Role* :${db[sender].role}
▢ *Level* : ${db[sender].level}
▢ *Exp* : ${db[sender].exp}/${db[sender].expTarget}
└─────────────`);
				}
				else
				{
					// Tentukan role dan limit berdasarkan kondisi
					const role = isShoNheOwn ? 'owner' : isVip ? 'vip' : 'user';
					const limit = role === 'owner' ? -1 : role === 'vip' ? 1000 : 100;
					const registrationSeries = generateUniqueSeries(); // Buat seri unik untuk pengguna
					// Tambahkan data pengguna baru ke database
					db[sender] = {
						register: true,
						role: role,
						limit: limit,
						registrationSeries: registrationSeries,
						level: 0,
						exp: 0,
						expTarget: 10,
						commandCount: 0,
						balance: 0 // Saldo awal
					};
					saveUserFire(db); // Simpan data pengguna ke database
					shoNherly(`┌─「 ${n}TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 15 Tahun
▢ *Nomor Seri* :  ${db[sender].registrationSeries}
▢ *Role* : ${db[sender].role}
└─────────────`);
				}
			}
			break
			case 'daftarumur16':
			{
				updatePopularCommand(command); // Catat command yang digunakan
				const db = loadUserFire();
				const sender = m.sender;
				// Fungsi untuk menghasilkan kode seri unik
				function generateUniqueSeries()
				{
					const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
					let series;
					do {
						series = Array.from(
						{
							length: 10
						}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
					} while (Object.values(db).some(user => user.registrationSeries === series)); // Pastikan seri unik
					return series;
				}
				if (db[sender] && db[sender].register)
				{
					// Jika pengguna sudah terdaftar
					shoNherly(`┌─「 ${n}SUDAH TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 16 Tahun
▢ *Nomor Seri* : ${db[sender].registrationSeries}
▢ *Role* :${db[sender].role}
▢ *Level* : ${db[sender].level}
▢ *Exp* : ${db[sender].exp}/${db[sender].expTarget}
└─────────────`);
				}
				else
				{
					// Tentukan role dan limit berdasarkan kondisi
					const role = isShoNheOwn ? 'owner' : isVip ? 'vip' : 'user';
					const limit = role === 'owner' ? -1 : role === 'vip' ? 1000 : 100;
					const registrationSeries = generateUniqueSeries(); // Buat seri unik untuk pengguna
					// Tambahkan data pengguna baru ke database
					db[sender] = {
						register: true,
						role: role,
						limit: limit,
						registrationSeries: registrationSeries,
						level: 0,
						exp: 0,
						expTarget: 10,
						commandCount: 0,
						balance: 0 // Saldo awal
					};
					saveUserFire(db); // Simpan data pengguna ke database
					shoNherly(`┌─「 ${n}TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 16 Tahun
▢ *Nomor Seri* :  ${db[sender].registrationSeries}
▢ *Role* : ${db[sender].role}
└─────────────`);
				}
			}
			break
		case 'daftarumur17':
			{
				updatePopularCommand(command); // Catat command yang digunakan
				const db = loadUserFire();
				const sender = m.sender;
				// Fungsi untuk menghasilkan kode seri unik
				function generateUniqueSeries()
				{
					const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
					let series;
					do {
						series = Array.from(
						{
							length: 10
						}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
					} while (Object.values(db).some(user => user.registrationSeries === series)); // Pastikan seri unik
					return series;
				}
				if (db[sender] && db[sender].register)
				{
					// Jika pengguna sudah terdaftar
					shoNherly(`┌─「 ${n}SUDAH TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 17 Tahun
▢ *Nomor Seri* : ${db[sender].registrationSeries}
▢ *Role* :${db[sender].role}
▢ *Level* : ${db[sender].level}
▢ *Exp* : ${db[sender].exp}/${db[sender].expTarget}
└─────────────`);
				}
				else
				{
					// Tentukan role dan limit berdasarkan kondisi
					const role = isShoNheOwn ? 'owner' : isVip ? 'vip' : 'user';
					const limit = role === 'owner' ? -1 : role === 'vip' ? 1000 : 100;
					const registrationSeries = generateUniqueSeries(); // Buat seri unik untuk pengguna
					// Tambahkan data pengguna baru ke database
					db[sender] = {
						register: true,
						role: role,
						limit: limit,
						registrationSeries: registrationSeries,
						level: 0,
						exp: 0,
						expTarget: 10,
						commandCount: 0,
						balance: 0 // Saldo awal
					};
					saveUserFire(db); // Simpan data pengguna ke database
					shoNherly(`┌─「 ${n}TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 17 Tahun
▢ *Nomor Seri* :  ${db[sender].registrationSeries}
▢ *Role* : ${db[sender].role}
└─────────────`);
				}
			}
			break
			case 'daftarumur18':
			{
				updatePopularCommand(command); // Catat command yang digunakan
				const db = loadUserFire();
				const sender = m.sender;
				// Fungsi untuk menghasilkan kode seri unik
				function generateUniqueSeries()
				{
					const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
					let series;
					do {
						series = Array.from(
						{
							length: 10
						}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
					} while (Object.values(db).some(user => user.registrationSeries === series)); // Pastikan seri unik
					return series;
				}
				if (db[sender] && db[sender].register)
				{
					// Jika pengguna sudah terdaftar
					shoNherly(`┌─「 ${n}SUDAH TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 18 Tahun
▢ *Nomor Seri* : ${db[sender].registrationSeries}
▢ *Role* :${db[sender].role}
▢ *Level* : ${db[sender].level}
▢ *Exp* : ${db[sender].exp}/${db[sender].expTarget}
└─────────────`);
				}
				else
				{
					// Tentukan role dan limit berdasarkan kondisi
					const role = isShoNheOwn ? 'owner' : isVip ? 'vip' : 'user';
					const limit = role === 'owner' ? -1 : role === 'vip' ? 1000 : 100;
					const registrationSeries = generateUniqueSeries(); // Buat seri unik untuk pengguna
					// Tambahkan data pengguna baru ke database
					db[sender] = {
						register: true,
						role: role,
						limit: limit,
						registrationSeries: registrationSeries,
						level: 0,
						exp: 0,
						expTarget: 10,
						commandCount: 0,
						balance: 0 // Saldo awal
					};
					saveUserFire(db); // Simpan data pengguna ke database
					shoNherly(`┌─「 ${n}TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 18 Tahun
▢ *Nomor Seri* :  ${db[sender].registrationSeries}
▢ *Role* : ${db[sender].role}
└─────────────`);
				}
			}
			break
			case 'daftarumur19':
			{
				updatePopularCommand(command); // Catat command yang digunakan
				const db = loadUserFire();
				const sender = m.sender;
				// Fungsi untuk menghasilkan kode seri unik
				function generateUniqueSeries()
				{
					const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
					let series;
					do {
						series = Array.from(
						{
							length: 10
						}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
					} while (Object.values(db).some(user => user.registrationSeries === series)); // Pastikan seri unik
					return series;
				}
				if (db[sender] && db[sender].register)
				{
					// Jika pengguna sudah terdaftar
					shoNherly(`┌─「 ${n}SUDAH TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 19 Tahun
▢ *Nomor Seri* : ${db[sender].registrationSeries}
▢ *Role* :${db[sender].role}
▢ *Level* : ${db[sender].level}
▢ *Exp* : ${db[sender].exp}/${db[sender].expTarget}
└─────────────`);
				}
				else
				{
					// Tentukan role dan limit berdasarkan kondisi
					const role = isShoNheOwn ? 'owner' : isVip ? 'vip' : 'user';
					const limit = role === 'owner' ? -1 : role === 'vip' ? 1000 : 100;
					const registrationSeries = generateUniqueSeries(); // Buat seri unik untuk pengguna
					// Tambahkan data pengguna baru ke database
					db[sender] = {
						register: true,
						role: role,
						limit: limit,
						registrationSeries: registrationSeries,
						level: 0,
						exp: 0,
						expTarget: 10,
						commandCount: 0,
						balance: 0 // Saldo awal
					};
					saveUserFire(db); // Simpan data pengguna ke database
					shoNherly(`┌─「 ${n}TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 19 Tahun
▢ *Nomor Seri* :  ${db[sender].registrationSeries}
▢ *Role* : ${db[sender].role}
└─────────────`);
				}
			}
			break 
			case 'daftarumur20':
			{
				updatePopularCommand(command); // Catat command yang digunakan
				const db = loadUserFire();
				const sender = m.sender;
				// Fungsi untuk menghasilkan kode seri unik
				function generateUniqueSeries()
				{
					const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
					let series;
					do {
						series = Array.from(
						{
							length: 10
						}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
					} while (Object.values(db).some(user => user.registrationSeries === series)); // Pastikan seri unik
					return series;
				}
				if (db[sender] && db[sender].register)
				{
					// Jika pengguna sudah terdaftar
					shoNherly(`┌─「 ${n}SUDAH TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 20 Tahun
▢ *Nomor Seri* : ${db[sender].registrationSeries}
▢ *Role* :${db[sender].role}
▢ *Level* : ${db[sender].level}
▢ *Exp* : ${db[sender].exp}/${db[sender].expTarget}
└─────────────`);
				}
				else
				{
					// Tentukan role dan limit berdasarkan kondisi
					const role = isShoNheOwn ? 'owner' : isVip ? 'vip' : 'user';
					const limit = role === 'owner' ? -1 : role === 'vip' ? 1000 : 100;
					const registrationSeries = generateUniqueSeries(); // Buat seri unik untuk pengguna
					// Tambahkan data pengguna baru ke database
					db[sender] = {
						register: true,
						role: role,
						limit: limit,
						registrationSeries: registrationSeries,
						level: 0,
						exp: 0,
						expTarget: 10,
						commandCount: 0,
						balance: 0 // Saldo awal
					};
					saveUserFire(db); // Simpan data pengguna ke database
					shoNherly(`┌─「 ${n}TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 20 Tahun
▢ *Nomor Seri* :  ${db[sender].registrationSeries}
▢ *Role* : ${db[sender].role}
└─────────────`);
				}
			}
			break
			case 'daftarumur21':
			{
				updatePopularCommand(command); // Catat command yang digunakan
				const db = loadUserFire();
				const sender = m.sender;
				// Fungsi untuk menghasilkan kode seri unik
				function generateUniqueSeries()
				{
					const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
					let series;
					do {
						series = Array.from(
						{
							length: 10
						}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
					} while (Object.values(db).some(user => user.registrationSeries === series)); // Pastikan seri unik
					return series;
				}
				if (db[sender] && db[sender].register)
				{
					// Jika pengguna sudah terdaftar
					shoNherly(`┌─「 ${n}SUDAH TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 21 Tahun
▢ *Nomor Seri* : ${db[sender].registrationSeries}
▢ *Role* :${db[sender].role}
▢ *Level* : ${db[sender].level}
▢ *Exp* : ${db[sender].exp}/${db[sender].expTarget}
└─────────────`);
				}
				else
				{
					// Tentukan role dan limit berdasarkan kondisi
					const role = isShoNheOwn ? 'owner' : isVip ? 'vip' : 'user';
					const limit = role === 'owner' ? -1 : role === 'vip' ? 1000 : 100;
					const registrationSeries = generateUniqueSeries(); // Buat seri unik untuk pengguna
					// Tambahkan data pengguna baru ke database
					db[sender] = {
						register: true,
						role: role,
						limit: limit,
						registrationSeries: registrationSeries,
						level: 0,
						exp: 0,
						expTarget: 10,
						commandCount: 0,
						balance: 0 // Saldo awal
					};
					saveUserFire(db); // Simpan data pengguna ke database
					shoNherly(`┌─「 ${n}TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 21 Tahun
▢ *Nomor Seri* :  ${db[sender].registrationSeries}
▢ *Role* : ${db[sender].role}
└─────────────`);
				}
			}
			break 
			case 'daftarumur22':
			{
				updatePopularCommand(command); // Catat command yang digunakan
				const db = loadUserFire();
				const sender = m.sender;
				// Fungsi untuk menghasilkan kode seri unik
				function generateUniqueSeries()
				{
					const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
					let series;
					do {
						series = Array.from(
						{
							length: 10
						}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
					} while (Object.values(db).some(user => user.registrationSeries === series)); // Pastikan seri unik
					return series;
				}
				if (db[sender] && db[sender].register)
				{
					// Jika pengguna sudah terdaftar
					shoNherly(`┌─「 ${n}SUDAH TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 22 Tahun
▢ *Nomor Seri* : ${db[sender].registrationSeries}
▢ *Role* :${db[sender].role}
▢ *Level* : ${db[sender].level}
▢ *Exp* : ${db[sender].exp}/${db[sender].expTarget}
└─────────────`);
				}
				else
				{
					// Tentukan role dan limit berdasarkan kondisi
					const role = isShoNheOwn ? 'owner' : isVip ? 'vip' : 'user';
					const limit = role === 'owner' ? -1 : role === 'vip' ? 1000 : 100;
					const registrationSeries = generateUniqueSeries(); // Buat seri unik untuk pengguna
					// Tambahkan data pengguna baru ke database
					db[sender] = {
						register: true,
						role: role,
						limit: limit,
						registrationSeries: registrationSeries,
						level: 0,
						exp: 0,
						expTarget: 10,
						commandCount: 0,
						balance: 0 // Saldo awal
					};
					saveUserFire(db); // Simpan data pengguna ke database
					shoNherly(`┌─「 ${n}TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 22 Tahun
▢ *Nomor Seri* :  ${db[sender].registrationSeries}
▢ *Role* : ${db[sender].role}
└─────────────`);
				}
			}
			break 
			case 'daftarumur23':
			{
				updatePopularCommand(command); // Catat command yang digunakan
				const db = loadUserFire();
				const sender = m.sender;
				// Fungsi untuk menghasilkan kode seri unik
				function generateUniqueSeries()
				{
					const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
					let series;
					do {
						series = Array.from(
						{
							length: 10
						}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
					} while (Object.values(db).some(user => user.registrationSeries === series)); // Pastikan seri unik
					return series;
				}
				if (db[sender] && db[sender].register)
				{
					// Jika pengguna sudah terdaftar
					shoNherly(`┌─「 ${n}SUDAH TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 23 Tahun
▢ *Nomor Seri* : ${db[sender].registrationSeries}
▢ *Role* :${db[sender].role}
▢ *Level* : ${db[sender].level}
▢ *Exp* : ${db[sender].exp}/${db[sender].expTarget}
└─────────────`);
				}
				else
				{
					// Tentukan role dan limit berdasarkan kondisi
					const role = isShoNheOwn ? 'owner' : isVip ? 'vip' : 'user';
					const limit = role === 'owner' ? -1 : role === 'vip' ? 1000 : 100;
					const registrationSeries = generateUniqueSeries(); // Buat seri unik untuk pengguna
					// Tambahkan data pengguna baru ke database
					db[sender] = {
						register: true,
						role: role,
						limit: limit,
						registrationSeries: registrationSeries,
						level: 0,
						exp: 0,
						expTarget: 10,
						commandCount: 0,
						balance: 0 // Saldo awal
					};
					saveUserFire(db); // Simpan data pengguna ke database
					shoNherly(`┌─「 ${n}TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 23 Tahun
▢ *Nomor Seri* :  ${db[sender].registrationSeries}
▢ *Role* : ${db[sender].role}
└─────────────`);
				}
			}
			break
			case 'daftarumur24':
			{
				updatePopularCommand(command); // Catat command yang digunakan
				const db = loadUserFire();
				const sender = m.sender;
				// Fungsi untuk menghasilkan kode seri unik
				function generateUniqueSeries()
				{
					const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
					let series;
					do {
						series = Array.from(
						{
							length: 10
						}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
					} while (Object.values(db).some(user => user.registrationSeries === series)); // Pastikan seri unik
					return series;
				}
				if (db[sender] && db[sender].register)
				{
					// Jika pengguna sudah terdaftar
					shoNherly(`┌─「 ${n}SUDAH TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 24 Tahun
▢ *Nomor Seri* : ${db[sender].registrationSeries}
▢ *Role* :${db[sender].role}
▢ *Level* : ${db[sender].level}
▢ *Exp* : ${db[sender].exp}/${db[sender].expTarget}
└─────────────`);
				}
				else
				{
					// Tentukan role dan limit berdasarkan kondisi
					const role = isShoNheOwn ? 'owner' : isVip ? 'vip' : 'user';
					const limit = role === 'owner' ? -1 : role === 'vip' ? 1000 : 100;
					const registrationSeries = generateUniqueSeries(); // Buat seri unik untuk pengguna
					// Tambahkan data pengguna baru ke database
					db[sender] = {
						register: true,
						role: role,
						limit: limit,
						registrationSeries: registrationSeries,
						level: 0,
						exp: 0,
						expTarget: 10,
						commandCount: 0,
						balance: 0 // Saldo awal
					};
					saveUserFire(db); // Simpan data pengguna ke database
					shoNherly(`┌─「 ${n}TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 24 Tahun
▢ *Nomor Seri* :  ${db[sender].registrationSeries}
▢ *Role* : ${db[sender].role}
└─────────────`);
				}
			}
			break
			case 'daftarumur25':
			{
				updatePopularCommand(command); // Catat command yang digunakan
				const db = loadUserFire();
				const sender = m.sender;
				// Fungsi untuk menghasilkan kode seri unik
				function generateUniqueSeries()
				{
					const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
					let series;
					do {
						series = Array.from(
						{
							length: 10
						}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
					} while (Object.values(db).some(user => user.registrationSeries === series)); // Pastikan seri unik
					return series;
				}
				if (db[sender] && db[sender].register)
				{
					// Jika pengguna sudah terdaftar
					shoNherly(`┌─「 ${n}SUDAH TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 25 Tahun
▢ *Nomor Seri* : ${db[sender].registrationSeries}
▢ *Role* :${db[sender].role}
▢ *Level* : ${db[sender].level}
▢ *Exp* : ${db[sender].exp}/${db[sender].expTarget}
└─────────────`);
				}
				else
				{
					// Tentukan role dan limit berdasarkan kondisi
					const role = isShoNheOwn ? 'owner' : isVip ? 'vip' : 'user';
					const limit = role === 'owner' ? -1 : role === 'vip' ? 1000 : 100;
					const registrationSeries = generateUniqueSeries(); // Buat seri unik untuk pengguna
					// Tambahkan data pengguna baru ke database
					db[sender] = {
						register: true,
						role: role,
						limit: limit,
						registrationSeries: registrationSeries,
						level: 0,
						exp: 0,
						expTarget: 10,
						commandCount: 0,
						balance: 0 // Saldo awal
					};
					saveUserFire(db); // Simpan data pengguna ke database
					shoNherly(`┌─「 ${n}TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 25 Tahun
▢ *Nomor Seri* :  ${db[sender].registrationSeries}
▢ *Role* : ${db[sender].role}
└─────────────`);
				}
			}
			break
			case 'daftarumur26':
			{
				updatePopularCommand(command); // Catat command yang digunakan
				const db = loadUserFire();
				const sender = m.sender;
				// Fungsi untuk menghasilkan kode seri unik
				function generateUniqueSeries()
				{
					const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
					let series;
					do {
						series = Array.from(
						{
							length: 10
						}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
					} while (Object.values(db).some(user => user.registrationSeries === series)); // Pastikan seri unik
					return series;
				}
				if (db[sender] && db[sender].register)
				{
					// Jika pengguna sudah terdaftar
					shoNherly(`┌─「 ${n}SUDAH TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 26 Tahun
▢ *Nomor Seri* : ${db[sender].registrationSeries}
▢ *Role* :${db[sender].role}
▢ *Level* : ${db[sender].level}
▢ *Exp* : ${db[sender].exp}/${db[sender].expTarget}
└─────────────`);
				}
				else
				{
					// Tentukan role dan limit berdasarkan kondisi
					const role = isShoNheOwn ? 'owner' : isVip ? 'vip' : 'user';
					const limit = role === 'owner' ? -1 : role === 'vip' ? 1000 : 100;
					const registrationSeries = generateUniqueSeries(); // Buat seri unik untuk pengguna
					// Tambahkan data pengguna baru ke database
					db[sender] = {
						register: true,
						role: role,
						limit: limit,
						registrationSeries: registrationSeries,
						level: 0,
						exp: 0,
						expTarget: 10,
						commandCount: 0,
						balance: 0 // Saldo awal
					};
					saveUserFire(db); // Simpan data pengguna ke database
					shoNherly(`┌─「 ${n}TERDAFTAR${n} 」─
▢ *Nama* :${m.pushName || 'Tidak diketahui'}
▢ *Umur* : 26 Tahun
▢ *Nomor Seri* :  ${db[sender].registrationSeries}
▢ *Role* : ${db[sender].role}
└─────────────`);
				}
			}
			break
			case 'sound1':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 1 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/1.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
		case 'sound2':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 2 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/2.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
			case 'sound3':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 3 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/3.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
		case 'sound4':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 4 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/4.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
		case 'sound5':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 5 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/5.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
			case 'sound6':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 6 ❐─────────✧",
							
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/6.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
			case 'sound7':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 7 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/7.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
			case 'sound8':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 8 ❐─────────✧",
							
							
							mediaType: 3,
							renderLargerThumbnail: true
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/8.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
			case 'sound9':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 9 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/9.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
			case 'sound10':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 10 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/10.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break 
			case 'sound11':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 11 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/11.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break 
			case 'sound12':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 12 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/12.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound13':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
						body: "✧─────────❐ SOUND 13 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/13.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
			case 'sound14':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 14 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/14.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
			case 'sound15':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 15 ❐─────────✧",
							
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/15.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
			case 'sound16':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 16 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/16.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
			case 'sound17':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
						body: "✧─────────❐ SOUND 17 ❐─────────✧",
							
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/17.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
			case 'sound18':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 18 ❐─────────✧",
							
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/18.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break 
			case 'sound19':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 19 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/19.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
			case 'sound20':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 20 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/20.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
			case 'sound21':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 21 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/21.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound22':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 22 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/22.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
			case 'sound23':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 23 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/23.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
			case 'sound24':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 24 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/24.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound25':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 25 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/25.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound26':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 26 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/26.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound27':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 27 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/27.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound28':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 28 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/28.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound29':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 29 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/29.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           case 'sound30':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 30 ❐─────────✧",
				thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/30.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound31':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 31 ❐─────────✧",
							
thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/31.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound32':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 32 ❐─────────✧",
					thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/32.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound33':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 33 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/33.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound34':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 34 ❐─────────✧",
							
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/34.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound35':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 35 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/35.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound36':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 36 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/36.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound37':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 37 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/37.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound38':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 38 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/38.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound39':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 39 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/39.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound40':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 40 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/40.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound41':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 41 ❐─────────✧",
							thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/41.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound42':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 42 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/42.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break 
           case 'sound43':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 43 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/43.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break 
           case 'sound44':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 44 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/44.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break 
           case 'sound45':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 45 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/45.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break 
           case 'sound46':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 46 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/46.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound47':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 47 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/47.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'sound48':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 48 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/48.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break 
           case 'sound49':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 49 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/49.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break 
           case 'sound50':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ SOUND 50 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/50.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
           break
           case 'soundbonus':
			{	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const repshow = {
					contextInfo:
					{
						forwardingScore: 1,
						isForwarded: true,
						
						externalAdReply:
						{
							showAdAttribution: true,
							
							body: "✧─────────❐ EPEP 🗿 ❐─────────✧",
						thumbnail: getRandomThumb2(),
								mediaType: 3,
								renderLargerThumbnail: true,
								previewType: 0,		
						},
					},
					audio:
					{
						url: './ShoNheMedia/audio/51.mp3'
					}, // Ganti dengan path file audio
					mimetype: 'audio/mpeg', // Tipe file audio
					fileName: 'ShoNhe-song.mp3', // Nama file audio
					ptt: true, // Ubah ke true jika ingin dikirim sebagai pesan suara
				};
				return shoNhe.sendMessage(m.chat, repshow,
				{
					quoted: hw, // Pesan yang dikutip
				});
				
           }
			break
			case 'soundmenu':
			case 'menusound':
			case 'phonk':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				let menu = `
> ✧───❐ *LIST SOUND* ❐───✧  

> Klik tombol dibawah`;
				// Tombol utama
				let buttons = [
			
			];
				// Pesan dengan media video
				let buttonMessage = {
					document: global.forpdf,
					fileName: waktuucapan,
					mimetype: 'application/pdf',
					fileLength: '100000000000000',
					pageCount: '999',
						image:
						{
							url: getRandomThumb3(), // Pastikan file ini tersedia
							gifPlayback: true
						},
						caption: `${menu}`, // Teks menu
						contextInfo:
						{
							mentionedJid: [sender],
							forwardingScore: 999,
							isForwarded: true,
							externalAdReply:
							{
								title: "PLAYLIST PHONK BRASILENO 2025",
							body: "🟢 Active",
								thumbnail: getRandomThumb3(),
								mediaType: 1,
								renderLargerThumbnail: true,
								previewType: 0,
								mediaUrl: gh,
								sourceUrl: gh
							}
						},
					footer: "🅥 kyy",
					buttons: buttons,
					viewOnce: true,
					headerType: 4
				};
				// Tambahan flow actions
				const flowActions = [
				{
					buttonId: 'action',
					buttonText:
					{
						displayText: 'This Button List'
					},
					type: 4,
					nativeFlowInfo:
					{
						name: 'single_select',
						paramsJson: JSON.stringify(
						{
							title: "Select Sound!",
							sections: [
							{
								title: "Silahkan Pilih Button Sound di Bawah Ini",
								
								rows: [
								{
									title: "🔊SOUND 1",
	description: "Best Song",								
									id: ".sound1"
								},
								{
									title: "🔊SOUND 2",
									description: "Best Song",
									id: ".sound2"
								},
								{
									title: "🔊SOUND 3",
									description: "Best Song",
									id: ".sound3"
								},
								{
									title: "🔊SOUND 4",
									description: "Best Song",
									id: ".sound4"
								},
								{
									title: "🔊SOUND 5",
									description: "Best Song",
									id: ".sound5"
								},
								{
									title: "🔊SOUND 6",
									description: "Best Song",
									id: ".sound6"
								},
								{
									title: "🔊SOUND 7",
									description: "Best Song",
									id: ".sound7"
								},
								{
									title: "🔊SOUND 8",
									description: "Best Song",
									id: ".sound8"
								},
								{
									title: "🔊SOUND 9",
									description: "Best Song",
									id: ".sound9"
								},
								{
									title: "🔊SOUND 10",
									description: "Best Song",
									id: ".sound10"
								},
								{
									title: "🔊SOUND 11",
									description: "Best Song",
									id: ".sound11"
								},
								{
									title: "🔊SOUND 12",
									description: "Best Song",
									id: ".sound12"
								},
								{
									title: "🔊SOUND 13",
									description: "Best Song",
									id: ".sound13"
								},
								{
									title: "🔊SOUND 14",
									description: "Best Song",			id: ".sound14"
								},
								{
									title: "🔊SOUND 15",
									description: "Best Song",
									id: ".sound15"
								},
								{
									title: "🔊SOUND 16",
									description: "Best Song",
									id: ".sound16"
								},
								{
									title: "🔊SOUND 17",
									description: "Best Song",
									id: ".sound17"
								},
								{
									title: "🔊SOUND 18",
									description: "Best Song",
									id: ".sound18"
								},
								{
									title: "🔊SOUND 19",
									description: "Best Song",
									id: ".sound19"
								},
								{
									title: "🔊SOUND 20",
									description: "Best Song",
									id: ".sound20"
								},
								{
									title: "🔊SOUND 21",
									description: "Best Song",
									id: ".sound21"
								},
								{
									title: "🔊SOUND 22",
									description: "Best Song",
									id: ".sound22"
								},
								{
									title: "🔊SOUND 23",
									description: "Best Song",
									id: ".sound23"
								},
								{
									title: "🔊SOUND 24",
									description: "Best Song",
									id: ".sound24"
								},
								{
									title: "🔊SOUNDk 25",
									description: "Best Song",
									id: ".sound25"
								},
								{
									title: "🔊SOUND 26",
									description: "Best Song",
									id: ".sound26"
								},
								{
									title: "🔊SOUND 27",
									description: "Best Song",
									id: ".sound27"
								},
								{
									title: "🔊SOUND 28",
									description: "Best Song",
									id: ".sound28"
								},
								{
									title: "🔊SOUND 29",
									description: "Best Song",
									id: ".sound29"
								},
								{
									title: "🔊SOUND 30",
									description: "Best Song",
									id: ".sound30"
								},
									{
									title: "🔊SOUND 31",
									description: "Best Song",
									id: ".sound31"
								},
									{
									title: "🔊SOUND 32",
									description: "Best Song",
									id: ".sound32"
								},
								{
									title: "🔊SOUND 33",
									description: "Best Song",
									id: ".sound33"
								},
								{
									title: "🔊SOUND 34",
									description: "Best Song",
									id: ".sound34"
								},
								{
									title: "🔊SOUND 35",
									description: "Best Song",
									id: ".sound35"
								},
								{
									title: "🔊SOUND 36",
									description: "Best Song",
									id: ".sound36"
								},
								{
									title: "🔊SOUND 37",
									description: "Best Song",
									id: ".sound37"
								},
								{
									title: "🔊SOUND 38",
									description: "Best Song",
									id: ".sound38"
								},
									{
									title: "🔊SOUND 39",
									description: "Best Song",
									id: ".sound39"
								},
								{
									title: "🔊SOUND 40",
									description: "Best Song",
									id: ".sound40"
								},
								{
									title: "🔊SOUND 41",
									description: "Best Song",
									id: ".sound41"
								},
								{
									title: "🔊SOUND 42",
									description: "Best Song",
									id: ".sound42"
								},
									{
									title: "🔊SOUND 43",
									description: "Best Song",
									id: ".sound43"
								},
									{
									title: "🔊SOUND 44",
									description: "Best Song",
									id: ".sound44"
								},
									{
									title: "🔊SOUND 45",
									description: "Best Song",
									id: ".sound45"
								},
									{
									title: "🔊SOUND 46",
									description: "Best Song",
									id: ".sound46"
								},
									{
									title: "🔊SOUND 47",
									description: "Best Song",
									id: ".sound47"
								},
									{
									title: "🔊SOUND 48",
									description: "Best Song",
									id: ".sound48"
								},
									{
									title: "🔊SOUND 49",
									description: "Best Song",
									id: ".sound49"
								},
									{
									title: "🔊SOUND 50",
									description: "Best Song",
									id: ".sound50"
								},
									{
									title: "BONUS🗿",
									description: "Jangan Dipilih",
									id: ".soundbonus"
								},
									]
							}]
						})
					},
					viewOnce: true
				}, ];
				// Tambahkan flowActions ke buttonMessage
				buttonMessage.buttons.push(...flowActions);
				// Kirim pesan
				await shoNhe.sendMessage(m.chat, buttonMessage,
				{
					quoted: m
				});
				}
			break;
			case 'upsaluran2':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				try
				{
					if (!mime && !text)
					{
						return shoNherly(`Oon, lu belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
					}
					media = mime ? await quoted.download() : null
					let defaultCaption = "🪨 Media ini dikirim melalui sistem otomatis shoNhe! 🍏"
					const buttons = [
					{
						buttonId: `${prefix}about`,
						buttonText:
						{
							displayText: "About 👤"
						}
					},
					{
						buttonId: `${prefix}contact`,
						buttonText:
						{
							displayText: "Contact 📞"
						}
					}]
					if (/image/.test(mime))
					{
						shoNhe.sendMessage(saluran,
						{
							image: media,
							caption: text ? text : defaultCaption,
							footer: namabot,
							buttons: buttons,
							viewOnce: true
						})
						shoNherly(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					}
					else if (/video/.test(mime))
					{
						shoNhe.sendMessage(saluran,
						{
							video: media,
							caption: text ? text : defaultCaption,
							footer: namabot,
							buttons: buttons,
							viewOnce: true
						})
						shoNherly(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					}
					else if (/text/.test(mime) || text)
					{
						shoNhe.sendMessage(saluran,
						{
							text: text ? text : defaultCaption,
							footer: namabot,
							buttons: buttons,
							viewOnce: true
						})
						shoNherly(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
					}
					else
					{
						shoNherly(`Hmm... shoNhe gak tau ini jenis media apa. Coba dicek lagi ya, cil! 🧐`)
					}
				}
				catch (error)
				{
					console.error(error)
					shoNherly(`Alamak 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tiktoksearch':
			case 'tiktoks':
			case 'ttsearch':
			{
				
updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly(`⚠️ kurang lengkap su, gini loh: *${prefix + command} jj epep* biar kybootz bisa bantu cari yang lu mau! 🔍💬`);
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let search = await tiktokSearchVideo(text);
					let teks = `🎥 *${search.videos[0].title}*\n\n` + `🆔 *Video ID* : ${search.videos[0].video_id}\n` + `👤 *Username* : ${search.videos[0].author.unique_id}\n` + `🏷️ *Nickname* : ${search.videos[0].author.nickname}\n` + `⏳ *Duration* : ${search.videos[0].duration} detik\n` + `❤️ *VT Like* : ${search.videos[0].digg_count}\n` + `💬 *Comment* : ${search.videos[0].comment_count}\n` + `🔄 *Share* : ${search.videos[0].share_count}\n\n` + `🔗 *Link*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;
					let list = '';
					let no = 1;
					for (let i of search.videos)
					{
						list += `\n${no++}. 🎵 *${i.title}*\n` + `⏳ Duration: ${i.duration} detik\n` + `❤️ Likes: ${i.digg_count}\n` + `💬 Comments: ${i.comment_count}\n` + `🔄 Shares: ${i.share_count}\n` + `🔗 Link: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n`;
					}
					await shoNhe.sendMessage(m.chat,
					{
						video:
						{
							url: `https://tikwm.com${search.videos[0].play}`
						},
						caption: teks
					},
					{
						quoted: m
					});
					if (search.videos.length > 1)
					{
						await shoNhe.sendMessage(m.chat,
						{
							text: `📚 *Daftar Video Lainnya:*\n${list}`
						},
						{
							quoted: m
						});
					}
				}
				catch (error)
				{
					console.log(error);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case "bv":
      {
        updatePopularCommand(command);
        const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
        if (!text) return shoNherly("[❗] Input teks tidak ditemukan! Kirim perintah dengan format: .bratvid <teks>");
        try
        {
          let brat = `https://fgsi-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=true`;
          let response = await axios.get(brat,
          {
            responseType: "arraybuffer"
          });
          let videoBuffer = response.data;
          let stickerBuffer = await shoNhe.sendVideoAsSticker(m.chat, videoBuffer, m,
          {
            packname: "Stiker By",
            author: "shoNhe - Botz",
          });
          console.log("Stiker berhasil dibuat:", stickerBuffer);
        }
        catch (err)
        {
          console.error("Error:", err);
          shoNherly("[❗] Maaf, terjadi kesalahan saat mencoba membuat stiker video. Silakan coba lagi.");
        }
        if (levelUpMessage) {
    let imageData = levelUpMessage.image 
        ? levelUpMessage.image  // Jika API mengirim buffer, gunakan langsung
        : undefined; // Jika tidak ada gambar, biarkan kosong

    await shoNhe.sendMessage(m.chat, {
        image: imageData, // Buffer langsung dari API
        caption: levelUpMessage.text,
        footer: "LEVEL UP🔥",
        buttons: [
            {
                buttonId: `${prefix}cek`,
                buttonText: { displayText: "CHECK ME 📥" }
            },
            {
                buttonId: `${prefix}menu`,
                buttonText: { displayText: "MENU 🍄" }
            }
        ],
        viewOnce: true
    }, { quoted: hw });
}
      }
			break
			case 'brat':
      {
updatePopularCommand(command);
        const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
        if (!text) return shoNherly(`Contoh : ${prefix + command} Hai kak`)
        
        {
          const buffer = await getBuffer(`https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}`)
          shoNhe.sendImageAsSticker(m.chat, buffer, m,
          {
            packname: namabot,
            author: namaowner
          })
        }
        
        if (levelUpMessage)
        {
          await shoNhe.sendMessage(m.chat,
          {
            image: levelUpMessage.image,
            caption: levelUpMessage.text,
            footer: "LEVEL UP🔥",
            buttons: [
            {
              buttonId: `${prefix}cek`,
              buttonText:
              {
                displayText: "CHECK ME 📥"
              }
            },
            {
              buttonId: `${prefix}menu`,
              buttonText:
              {
                displayText: "MENU 🍄"
              }
            }],
            viewOnce: true,
          },
          {
            quoted: hw
          });
        }
      }
			break
			case 'ping':
case 'systeminfo': {
    
    // 🔹 Menghitung latensi
    let start = performance.now();
    let latensi = (performance.now() - start).toFixed(4);

    // 🔹 Ambil informasi CPU
    let cpuInfo = "CPU Tidak Diketahui";
    let cpuCores = "N/A";
    try {
        cpuInfo = os.cpus()?.[0]?.model || cpuInfo;
        cpuCores = os.cpus()?.length || cpuCores;
    } catch (error) {
        console.warn("⚠️ Gagal mengambil informasi CPU:", error);
    }

    // 🔹 Ambil informasi RAM
    let totalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB";
    let freeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB";
    let usedMem = ((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024).toFixed(2) + " GB";

    // 🔹 Ambil informasi storage (disk)
    let diskUsed = "N/A", diskTotal = "N/A";
    try {
        let diskUsage = execSync('df -h --output=used,size / | tail -1').toString().trim().split(/\s+/);
        diskUsed = diskUsage[0] || "N/A";
        diskTotal = diskUsage[1] || "N/A";
    } catch (error) {
        console.warn("⚠️ Gagal mengambil informasi disk, mungkin tidak tersedia di Termux.");
    }

    // 🔹 Ambil informasi Node.js & Library
    let nodeVersion = process.version;
    let libraryVersion = "N/A";
    try {
        libraryVersion = require('@adiwajshing/baileys/package.json')?.version || "Tidak Diketahui";
    } catch (error) {
        console.warn("⚠️ Gagal mengambil versi Baileys.");
    }

    // 🔹 Format uptime menjadi hari, jam, menit, detik
    let uptime = os.uptime();
    let days = Math.floor(uptime / 86400);
    let hours = Math.floor((uptime % 86400) / 3600);
    let minutes = Math.floor((uptime % 3600) / 60);
    let seconds = Math.floor(uptime % 60);
    let uptimeFormatted = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;

    // 🔹 Ambil informasi IP & lokasi server dengan API alternatif
    let ipInfo = "⚠️ Informasi IP tidak tersedia!";
    try {
        let { data } = await axios.get('https://api64.ipify.org?format=json', { timeout: 5000 });
        ipInfo = `🌍 *IP Publik*: ${data.ip}`;
    } catch (error) {
        console.warn("⚠️ Gagal mengambil informasi IP dari ipify.org, mencoba alternatif...");
        try {
            let { data } = await axios.get('https://ipapi.co/json/', { timeout: 5000 });
            ipInfo = `🌍 *IP Publik*: ${data.ip}\n` +
                     `📌 *Lokasi*: ${data.city}, ${data.country_name}\n` +
                     `⏰ *Timezone*: ${data.utc_offset}\n` +
                     `📡 *Provider*: ${data.org}`;
        } catch (error) {
            console.warn("⚠️ Gagal mengambil informasi IP dari ipapi.co:", error);
        }
    }

    // 🔹 Cek koneksi WhatsApp Web
    let waStatus = shoNhe?.ws?.readyState === 1 ? "🟢 Terhubung" : "🔴 Terputus";

    // 🔹 Format status bot
    let status = `🚀 *BOT STATUS*\n\n`
        + `⏳ *Ping*: ${latensi} _Second_\n`
        + `🖥️ *CPU*: ${cpuInfo} (${cpuCores} Cores)\n`
        + `💾 *RAM*: ${usedMem} / ${totalMem}\n`
        + `📂 *Storage*: ${diskUsed} / ${diskTotal}\n`
        + `📌 *Node.js*: ${nodeVersion}\n`
        + `📦 *Library*: Baileys v${libraryVersion}\n`
        + `⏰ *Uptime*: ${uptimeFormatted}\n\n`
        + `📡 *WhatsApp Web*: ${waStatus}\n\n`
        + `${ipInfo}`;

    shoNherly(status);

    // 🔹 Cek Level Up Pengguna
    
}
			break
			case 'sewa':
			case 'sewabot':
			case 'botsewa':
			  {
			if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
			const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
const seww =
`┌◇ *SEWA BOT WHATSAPP* ◇┐

⚙️ *Kenapa Kyy-store Botz Harus Disewa?*:
   💻 Kecerdasan buatan tak terdeteksi
   🔐 Data Anda aman dengan enkripsi tingkat lanjut
   🛠️ Fitur kustomisasi yang dapat disesuaikan untuk setiap pengguna

💼 *Paket Sewa yang Tersedia*:

📌  *3 Hari*  = Rp 2.000  
   » Akses penuh selama 72 jam untuk mencoba semua fitur.

📌  *1 Minggu*  = Rp 5.000  
   » Cocok untuk acara atau eksperimen singkat.

📌  *2 Minggu*  = Rp 10.000  
   » Ideal untuk operasi jangka menengah, event panjang, atau bisnis sementara.

📌  *1 Bulan*  = Rp 25.000  
   » Paket optimal untuk kebutuhan grup dan bisnis jangka panjang dengan fitur lanjutan.

🌐 *Fitur Langka Lebih dari 1000+ perintah* :
   - 🔍 *Auto-Responder 24/7* - Sistem respons otomatis yang terus aktif.
   - 💽 *Media Downloader* - Unduh media secara langsung dari platform apapun.
   - 🔄 *Statistik Grup* - Analisis mendalam tentang aktivitas grup.
   - 🎮 *Game Hack & Trivia* - Permainan seru dan interaktif dalam grup.
   - 🔊 *Audio Converter & Tools* - Ubah audio dan akses alat bantu tambahan.
   - 🤖 *AI Assist* - Bot yang terus belajar dari setiap interaksi.

⚠️ *Instruksi Keamanan*:
   Untuk menjaga kerahasiaan, hubungi Owner hanya melalui saluran yang ditentukan. Penyewaan dilakukan secara rahasia dan aman.

📞 *Kontak Owner*:
   - WhatsApp: wa.me/62882794675
   - Email: rizkiajisetya1@gmail.com
   - Website: https://linktr.ee/kyy_store5

└───◇🔒━━━━━━🔒◇───┘`
shoNhe.sendMessage(m.chat,
				{
					image: getRandomThumb3(),
					caption: seww,
					footer: "SEWA BOT🔖",
					buttons: [
					{
						buttonId: `${prefix}payment`,
						buttonText:
						{
							displayText: "PAYMENT 💶"
						}
					},
					{
						buttonId: `${prefix}contact`,
						buttonText:
						{
							displayText: "OWNER 👤"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
}
				break
			case 'tiktok':
			case 'tiktokdown':
			case 'ttdown':
			case 'ttdl':
			case 'tt':
			case 'ttmp4':
			case 'ttvideo':
			case 'tiktokmp4':
			case 'tiktokvideo':
			{
				
				 // Update level pengguna
				if (!text) return shoNherly(`Example: ${prefix + command} url_tiktok`);
				const tiktokRegex = /(?:https?:\/\/)?(?:www\.)?(tiktok\.com|vm\.tiktok\.com)/;
				if (!tiktokRegex.test(text)) return shoNherly('Url Tidak Mengandung Result Dari TikTok!');
				try
				{
					const hasil = await tiktokDl(text);
					console.log('Hasil dari tiktokDl:', JSON.stringify(hasil, null, 2));
					if (!(await firely(m, mess.waits))) return; // Jika limit habis, proses berhenti di sini
					if (hasil && hasil.data && hasil.data.length > 0)
					{
						if (hasil.size_nowm)
						{
							await shoNhe.sendMessage(m.chat,
							{
								video:
								{
									url: hasil.data[1].url
								},
								caption: `┌─⊷ TIKTOK
▢ *Tittle:* ${hasil.title}
▢ *Username:* ${hasil.author.nickname} (@${hasil.author.fullname})
▢ *Durasi:*  ${hasil.duration}
└───────────`,
								footer: namabot,
								buttons: [
								{
									buttonId: `${prefix}ttmp3 ${text}`,
									buttonText:
									{
										displayText: "Tiktok Mp3🎶"
									}
								}],
								viewOnce: true,
							},
							{
								quoted: m
							});
						}
						else
						{
							for (let i = 0; i < hasil.data.length; i++)
							{
								await shoNhe.sendMessage(m.chat,
								{
									video:
									{
										url: hasil.data[i].url
									},
									caption: `*🚀Video:* ${i + 1}`,
								},
								{
									quoted: m
								});
							}
						}
					}
					else
					{
						shoNherly('Data TikTok tidak ditemukan atau tidak valid!');
					}
				}
				catch (e)
				{
					console.error('Error saat memproses URL TikTok:', e);
					shoNherly('Gagal memproses URL! Detail error: ' + e.message);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'toaud':
			case 'toaudio':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!/video|audio/.test(mime)) return shoNherly(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				shoNherly('sek dilit');
				// Emoji yang akan digunakan
				const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
				// Mengirimkan reaksi secara berurutan
				for (const emoji of reactEmojis)
				{
					await shoNhe.sendMessage(m.chat,
					{
						react:
						{
							text: emoji,
							key: m.key
						}
					});
				}
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await shoNhe.sendMessage(m.chat,
				{
					audio: audio,
					mimetype: 'audio/mpeg'
				},
				{
					quoted: m
				})
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'settings':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				const teksnyo = "⚙️ BOT SETTINGS\nPilih fitur dibawah ini untuk mengatur\n💬typing\n🎤recording\n👁️‍🗨️autoviewsw\n🔇anticall\n📝setbio\n📖autoread"
				let msg = generateWAMessageFromContent(m.chat,
				{
					viewOnceMessage:
					{
						message:
						{
							"messageContextInfo":
							{
								"deviceListMetadata":
								{},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create(
							{
								body: proto.Message.InteractiveMessage.Body.create(
								{
									text: teksnyo
								}),
								footer: proto.Message.InteractiveMessage.Footer.create(
								{
									text: namabot
								}),
								header: proto.Message.InteractiveMessage.Header.create(
								{
									hasMediaAttachment: true,
									documentMessage:
									{
										"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
										"mimetype": "application/pdf",
										"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
										"jpegThumbnail": fs.readFileSync("./ShoNheMedia/image/owner.jpg"), //Format gambar harus 300x300 (jika beda tidak akan keluar
										"fileLength": 120000,
										"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
										"fileName": `GROUP SETTINGS`,
										"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
										"contactVcard": true,
										"mediaKeyTimestamp": "1658703206"
									}
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
								{
									buttons: [
									{
										"name": "single_select",
										"buttonParamsJson": `{
												"title": "Settings",
												"sections": [{
													"title": "Select Settings",
													"rows": [{
														"title": "💬 AUTOTYPING ON",
														"description": "Bot akan mengaktifkan auto typing",
														"id": "${prefix}autotypingon"
													},
													{
														"title": "💬 AUTOTYPING OFF",
														"description": "Bot akan mematikan auto typing",
														"id": "${prefix}autotypingoff"
													},
													{
														"title": "🎤 AUTOVN ON",
														"description": "Mengaktifkan fitur autovn",
														"id": "${prefix}autovnon"
													},
													{
														"title": "🎤AUTOVN OFF",
														"description": "Mematikan fitur autovn",
														"id": "${prefix}autovnoff"
													},
													{
														"title": "👁️‍🗨️ SW-VIEW ON",
														"description": "Bot akan mengaktifkan autoswview",
														"id": "${prefix}autoswview on"
													},
													{
														"title": "👁️‍🗨️ SW-VIEW OFF",
														"description": "Bot akan mematikan autoswview",
														"id": "${prefix}autoswview off"
													},
													{
														"title": "🔇 ANTI-CALL ON",
														"description": "Mengaktifkan fitur anticall",
														"id": "${prefix}anticall on"
													},
													{
														"title": "🔇 ANTI-CALL OFF",
														"description": "Mematikan fitur anticall",
														"id": "${prefix}anticall off"
													},
													{
														"title": "📝AUTOBIO ON",
														"description": "Mengaktifkan fitur autobio",
														"id": "${prefix}autobio on"
													},
													{
														"title": "📝 AUTOBIO OFF",
														"description": "Mematikan fitur autobio",
														"id": "${prefix}autobio off"
													},
													{
														"title": "📖 AUTOREAD ON",
														"description": "Mengaktifkan fitur autoread",
														"id": "${prefix}autoread true"
													},
													{
														"title": "📖 AUTOREAD OFF",
														"description": "Mematikan fitur autoread",
														"id": "${prefix}autoread false"
													}]
												}]
											}`
									}],
								}),
								contextInfo:
								{
									forwardingScore: 245,
									isForwarded: true,
									mentionedJid: [m.sender],
									forwardedNewsletterMessageInfo:
									{
										newsletterName: `© kyy Botz`,
										newsletterJid: idsaluran
									},
									externalAdReply:
									{
										title: `BOT SETTING 🔧`,
										body: "",
										showAdAttribution: true,
										thumbnail: fs.readFileSync("./ShoNheMedia/image/sett.png"),
										mediaType: 1,
										previewType: 0,
										renderLargerThumbnail: false,
										mediaUrl: "",
										sourceUrl: "",
									}
								}
							})
						}
					}
				},
				{
					quoted: hw
				})
				await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
				{
					messageId: msg.key.id
				})
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'sendurlimg2':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!args[0]) return shoNherly("Format: sendurlimg2 nomor|teks|footer|teks button|link|teks button|link...");
				// Pisahkan input
				const [target, teks, footer, ...buttonsData] = args.join(" ").split('|');
				// Validasi nomor tujuan
				const targetNumber = target.includes('@s.whatsapp.net') ? target : `${target}@s.whatsapp.net`;
				// Buat tombol URL (cta_url)
				const buttons = buttonsData.reduce((acc, curr, index, arr) =>
				{
					if (index % 2 === 0)
					{ // Setiap 2 elemen jadi satu button
						acc.push(
						{
							name: "cta_url",
							buttonParamsJson: JSON.stringify(
							{
								display_text: arr[index], // Teks button
								url: arr[index + 1] || 'https://wa.me' // Link
							})
						});
					}
					return acc;
				}, []);
				if (buttons.length === 0) return shoNherly("Minimal harus ada satu tombol dengan teks dan URL!");
				// Buat pesan
				const msg = generateWAMessageFromContent(targetNumber,
				{
					viewOnceMessage:
					{
						message:
						{
							"messageContextInfo":
							{
								"deviceListMetadata":
								{},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create(
							{
								body: proto.Message.InteractiveMessage.Body.create(
								{
									text: teks
								}),
								footer: proto.Message.InteractiveMessage.Footer.create(
								{
									text: footer // Footer pesan
								}),
								header: proto.Message.InteractiveMessage.Header.create(
								{
									...(await prepareWAMessageMedia(
									{
										image: getRandomThumb2()
									},
									{
										upload: shoNhe.waUploadToServer
									})),
									title: ``,
									gifPlayback: true,
									subtitle: namaowner, // Subtitle header
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
								{
									buttons // Array tombol yang telah dibuat
								}),
								contextInfo:
								{
									mentionedJid: [targetNumber],
									forwardingScore: 999,
									isForwarded: true
								}
							})
						}
					}
				},
				{});
				// Kirim pesan
				await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
				{
					messageId: msg.key.id
				});
				shoNherly(`Pesan berhasil dikirim ke ${target}`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'sendlist':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners)
				if (!args[0]) return shoNherly("Format: sendlist teks|titleRow|title|desc|command|title|desc|command...");
				// Pisahkan input
				const [teks, titleRow, ...items] = args.join(" ").split('|');
				// Buat rows untuk menu
				const rows = items.reduce((acc, curr, index, arr) =>
				{
					if (index % 3 === 0)
					{ // Setiap 3 elemen jadi satu row
						acc.push(
						{
							title: arr[index],
							description: arr[index + 1] || '',
							id: arr[index + 2] || `command${index / 3 + 1}`
						});
					}
					return acc;
				}, []);
				// Buat format JSON untuk buttons
				const buttonParamsJson = JSON.stringify(
				{
					title: titleRow,
					sections: [
					{
						title: titleRow,
						rows
					}]
				});
				// Buat pesan
				let msg = generateWAMessageFromContent(m.chat,
				{
					viewOnceMessage:
					{
						message:
						{
							"messageContextInfo":
							{
								"deviceListMetadata":
								{},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create(
							{
								body: proto.Message.InteractiveMessage.Body.create(
								{
									text: teks
								}),
								footer: proto.Message.InteractiveMessage.Footer.create(
								{
									text: namabot // Nama bot Anda
								}),
								header: proto.Message.InteractiveMessage.Header.create(
								{
									gifPlayback: true,
									subtitle: namaowner, // Nama owner Anda
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
								{
									buttons: [
									{
										"name": "single_select",
										"buttonParamsJson": buttonParamsJson // Format JSON valid
									}]
								}),
								contextInfo:
								{
									mentionedJid: [m.sender],
									forwardingScore: 999,
									isForwarded: true
								}
							})
						}
					}
				},
				{});
				// Kirim pesan
				await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
				{
					messageId: msg.key.id
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'sendlistimg':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners)
				if (!args[0]) return shoNherly("Format: sendlistimg teks|titleRow|title|desc|command|title|desc|command...");
				const [teks, titleRow, ...items] = args.join(" ").split('|');
				// Buat rows untuk menu
				const rows = items.reduce((acc, curr, index, arr) =>
				{
					if (index % 3 === 0)
					{
						acc.push(
						{
							title: arr[index],
							description: arr[index + 1] || '',
							id: arr[index + 2] || `command${index / 3 + 1}`
						});
					}
					return acc;
				}, []);
				const buttonParamsJson = JSON.stringify(
				{
					title: titleRow,
					sections: [
					{
						title: titleRow,
						rows
					}]
				});
				const msg = generateWAMessageFromContent(m.chat,
				{
					viewOnceMessage:
					{
						message:
						{
							"messageContextInfo":
							{
								"deviceListMetadata":
								{},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create(
							{
								body: proto.Message.InteractiveMessage.Body.create(
								{
									text: teks
								}),
								footer: proto.Message.InteractiveMessage.Footer.create(
								{
									text: namabot // Nama bot
								}),
								header: proto.Message.InteractiveMessage.Header.create(
								{
									...(await prepareWAMessageMedia(
									{
										image: getRandomThumb2()
									},
									{
										upload: shoNhe.waUploadToServer
									})),
									title: ``,
									gifPlayback: true,
									subtitle: namaowner,
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
								{
									buttons: [
									{
										"name": "single_select",
										"buttonParamsJson": buttonParamsJson
									}]
								}),
								contextInfo:
								{
									mentionedJid: [m.sender],
									forwardingScore: 999,
									isForwarded: true
								}
							})
						}
					}
				},
				{});
				await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
				{
					messageId: msg.key.id
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'sendlist2':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners)
				if (!args[0]) return shoNherly("Format: sendlist2 nomor|teks|titleRow|title|desc|command|title|desc|command...");
				// Pisahkan input
				const [target, teks, titleRow, ...items] = args.join(" ").split('|');
				// Validasi nomor tujuan
				const targetNumber = target.includes('@s.whatsapp.net') ? target : `${target}@s.whatsapp.net`;
				// Buat rows untuk menu
				const rows = items.reduce((acc, curr, index, arr) =>
				{
					if (index % 3 === 0)
					{ // Setiap 3 elemen jadi satu row
						acc.push(
						{
							title: arr[index],
							description: arr[index + 1] || '',
							id: arr[index + 2] || `command${index / 3 + 1}`
						});
					}
					return acc;
				}, []);
				// Buat format JSON untuk buttons
				const buttonParamsJson = JSON.stringify(
				{
					title: titleRow,
					sections: [
					{
						title: titleRow,
						rows
					}]
				});
				// Buat pesan
				let msg = generateWAMessageFromContent(targetNumber,
				{
					viewOnceMessage:
					{
						message:
						{
							"messageContextInfo":
							{
								"deviceListMetadata":
								{},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create(
							{
								body: proto.Message.InteractiveMessage.Body.create(
								{
									text: teks
								}),
								footer: proto.Message.InteractiveMessage.Footer.create(
								{
									text: namabot // Nama bot Anda
								}),
								header: proto.Message.InteractiveMessage.Header.create(
								{
									gifPlayback: true,
									subtitle: namaowner, // Nama owner Anda
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
								{
									buttons: [
									{
										"name": "single_select",
										"buttonParamsJson": buttonParamsJson // Format JSON valid
									}]
								}),
								contextInfo:
								{
									mentionedJid: [targetNumber],
									forwardingScore: 999,
									isForwarded: true
								}
							})
						}
					}
				},
				{});
				// Kirim pesan
				await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
				{
					messageId: msg.key.id
				});
				shoNherly(`Pesan berhasil dikirim ke ${target}`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'sendlistimg2':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners)
				if (!args[0]) return shoNherly("Format: sendlistimg2 nomor|teks|titleRow|title|desc|command|title|desc|command...");
				// Pisahkan input
				const [target, teks, titleRow, ...items] = args.join(" ").split('|');
				// Validasi nomor tujuan
				const targetNumber = target.includes('@s.whatsapp.net') ? target : `${target}@s.whatsapp.net`;
				// Buat rows untuk menu
				const rows = items.reduce((acc, curr, index, arr) =>
				{
					if (index % 3 === 0)
					{ // Setiap 3 elemen jadi satu row
						acc.push(
						{
							title: arr[index],
							description: arr[index + 1] || '',
							id: arr[index + 2] || `command${index / 3 + 1}`
						});
					}
					return acc;
				}, []);
				// Buat format JSON untuk buttons
				const buttonParamsJson = JSON.stringify(
				{
					title: titleRow,
					sections: [
					{
						title: titleRow,
						rows
					}]
				});
				// Buat pesan
				let msg = generateWAMessageFromContent(targetNumber,
				{
					viewOnceMessage:
					{
						message:
						{
							"messageContextInfo":
							{
								"deviceListMetadata":
								{},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create(
							{
								body: proto.Message.InteractiveMessage.Body.create(
								{
									text: teks
								}),
								footer: proto.Message.InteractiveMessage.Footer.create(
								{
									text: namabot // Nama bot Anda
								}),
								header: proto.Message.InteractiveMessage.Header.create(
								{
									...(await prepareWAMessageMedia(
									{
										image: getRandomThumb2()
									},
									{
										upload: shoNhe.waUploadToServer
									})),
									title: ``,
									gifPlayback: true,
									subtitle: namaowner,
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
								{
									buttons: [
									{
										"name": "single_select",
										"buttonParamsJson": buttonParamsJson // Format JSON valid
									}]
								}),
								contextInfo:
								{
									mentionedJid: [targetNumber],
									forwardingScore: 999,
									isForwarded: true
								}
							})
						}
					}
				},
				{});
				// Kirim pesan
				await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
				{
					messageId: msg.key.id
				});
				shoNherly(`Pesan berhasil dikirim ke ${target}`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'sendbutton':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners)
				if (!args[0]) return shoNherly("Format: sendbutton teks|footer|buttonid|displaytext|buttonid|displaytext...");
				// Pisahkan input
				const [teks, footer, ...buttonData] = args.join(" ").split('|');
				// Validasi jumlah button
				if (buttonData.length % 2 !== 0) return shoNherly("Format tombol salah! Pastikan setiap button memiliki ID dan DisplayText.");
				// Buat array tombol
				const buttons = [];
				for (let i = 0; i < buttonData.length; i += 2)
				{
					buttons.push(
					{
						buttonId: buttonData[i],
						buttonText:
						{
							displayText: buttonData[i + 1]
						}
					});
				}
				// Kirim pesan dengan tombol
				shoNhe.sendMessage(m.chat,
				{
					text: teks,
					footer: footer,
					buttons: buttons,
					viewOnce: true,
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'sendbutton2':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners)
				if (!args[0]) return shoNherly("Format: sendbutton2 nomor|teks|footer|buttonid|displaytext|buttonid|displaytext...");
				// Pisahkan input
				const [nomor, teks, footer, ...buttonData] = args.join(" ").split('|');
				// Validasi nomor tujuan
				const targetNumber = nomor.includes('@s.whatsapp.net') ? nomor : `${nomor}@s.whatsapp.net`;
				// Validasi jumlah button
				if (buttonData.length % 2 !== 0) return shoNherly("Format tombol salah! Pastikan setiap button memiliki ID dan DisplayText.");
				// Buat array tombol
				const buttons = [];
				for (let i = 0; i < buttonData.length; i += 2)
				{
					buttons.push(
					{
						buttonId: buttonData[i],
						buttonText:
						{
							displayText: buttonData[i + 1]
						}
					});
				}
				// Kirim pesan dengan tombol ke nomor target
				shoNhe.sendMessage(targetNumber,
				{
					text: teks,
					footer: footer,
					buttons: buttons,
					viewOnce: true,
				});
				shoNherly(`Pesan berhasil dikirim ke ${nomor}`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'sendbuttonimg':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners)
				if (!args[0]) return shoNherly("Format: sendbuttonimg teks|footer|buttonid|displaytext|buttonid|displaytext...");
				// Pisahkan input
				const [teks, footer, ...buttonData] = args.join(" ").split('|');
				// Validasi jumlah button
				if (buttonData.length % 2 !== 0) return shoNherly("Format tombol salah! Pastikan setiap button memiliki ID dan DisplayText.");
				// Buat array tombol
				const buttons = [];
				for (let i = 0; i < buttonData.length; i += 2)
				{
					buttons.push(
					{
						buttonId: buttonData[i],
						buttonText:
						{
							displayText: buttonData[i + 1]
						}
					});
				}
				// Kirim pesan dengan tombol
				shoNhe.sendMessage(m.chat,
				{
					image: getRandomThumb2(),
					caption: teks,
					footer: footer,
					buttons: buttons,
					viewOnce: true,
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'sendurlch':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!args[0]) return shoNherly("Format: sendurlch channelID|teks|footer|teks button|link|teks button|link...");
				// Pisahkan input
				const [target, teks, footer, ...buttonsData] = args.join(" ").split('|');
				// Validasi channel tujuan
				const targetID = target.includes('@') ? target : `${target}@newslatter`;
				// Buat tombol URL (cta_url)
				const buttons = buttonsData.reduce((acc, curr, index, arr) =>
				{
					if (index % 2 === 0)
					{ // Setiap 2 elemen jadi satu button
						acc.push(
						{
							name: "cta_url",
							buttonParamsJson: JSON.stringify(
							{
								display_text: arr[index], // Teks button
								url: arr[index + 1] || 'https://wa.me' // Link
							})
						});
					}
					return acc;
				}, []);
				if (buttons.length === 0) return shoNherly("Minimal harus ada satu tombol dengan teks dan URL!");
				// Buat pesan
				const msg = generateWAMessageFromContent(targetID,
				{
					viewOnceMessage:
					{
						message:
						{
							"messageContextInfo":
							{
								"deviceListMetadata":
								{},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create(
							{
								body: proto.Message.InteractiveMessage.Body.create(
								{
									text: teks
								}),
								footer: proto.Message.InteractiveMessage.Footer.create(
								{
									text: footer // Footer pesan
								}),
								header: proto.Message.InteractiveMessage.Header.create(
								{
									...(await prepareWAMessageMedia(
									{
										image: getRandomThumb2()
									},
									{
										upload: shoNhe.waUploadToServer
									})),
									title: ``,
									gifPlayback: true,
									subtitle: namaowner, // Subtitle header
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
								{
									buttons // Array tombol yang telah dibuat
								}),
								contextInfo:
								{
									mentionedJid: [targetID],
									forwardingScore: 999,
									isForwarded: true
								}
							})
						}
					}
				},
				{});
				// Kirim pesan
				await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
				{
					messageId: msg.key.id
				});
				shoNherly(`Pesan berhasil dikirim ke channel ${targetID}`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'sendlistch':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners)
				if (!args[0]) return shoNherly("Format: sendlistch channelID|teks|titleRow|title|desc|command|title|desc|command...");
				// Pisahkan input
				const [target, teks, titleRow, ...items] = args.join(" ").split('|');
				// Validasi target tujuan
				const targetID = target.includes('@') ? target : `${target}@newslatter`;
				// Buat rows untuk menu
				const rows = items.reduce((acc, curr, index, arr) =>
				{
					if (index % 3 === 0)
					{ // Setiap 3 elemen jadi satu row
						acc.push(
						{
							title: arr[index],
							description: arr[index + 1] || '',
							id: arr[index + 2] || `command${index / 3 + 1}`
						});
					}
					return acc;
				}, []);
				// Buat format JSON untuk buttons
				const buttonParamsJson = JSON.stringify(
				{
					title: titleRow,
					sections: [
					{
						title: titleRow,
						rows
					}]
				});
				// Buat pesan
				let msg = generateWAMessageFromContent(targetID,
				{
					viewOnceMessage:
					{
						message:
						{
							"messageContextInfo":
							{
								"deviceListMetadata":
								{},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create(
							{
								body: proto.Message.InteractiveMessage.Body.create(
								{
									text: teks
								}),
								footer: proto.Message.InteractiveMessage.Footer.create(
								{
									text: namabot // Nama bot Anda
								}),
								header: proto.Message.InteractiveMessage.Header.create(
								{
									...(await prepareWAMessageMedia(
									{
										image: getRandomThumb2()
									},
									{
										upload: shoNhe.waUploadToServer
									})),
									title: '',
									gifPlayback: true,
									subtitle: namaowner,
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
								{
									buttons: [
									{
										"name": "single_select",
										"buttonParamsJson": buttonParamsJson // Format JSON valid
									}]
								}),
								contextInfo:
								{
									mentionedJid: [targetID],
									forwardingScore: 999,
									isForwarded: true
								}
							})
						}
					}
				},
				{});
				// Kirim pesan
				await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
				{
					messageId: msg.key.id
				});
				shoNherly(`Pesan berhasil dikirim ke channel ${targetID}`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'sendbuttonimg2':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners)
				if (!args[0]) return shoNherly("Format: sendbutton2 nomor|teks|footer|buttonid|displaytext|buttonid|displaytext...");
				// Pisahkan input
				const [nomor, teks, footer, ...buttonData] = args.join(" ").split('|');
				// Validasi nomor tujuan
				const targetNumber = nomor.includes('@s.whatsapp.net') ? nomor : `${nomor}@s.whatsapp.net`;
				// Validasi jumlah button
				if (buttonData.length % 2 !== 0) return shoNherly("Format tombol salah! Pastikan setiap button memiliki ID dan DisplayText.");
				// Buat array tombol
				const buttons = [];
				for (let i = 0; i < buttonData.length; i += 2)
				{
					buttons.push(
					{
						buttonId: buttonData[i],
						buttonText:
						{
							displayText: buttonData[i + 1]
						}
					});
				}
				// Kirim pesan dengan tombol ke nomor target
				shoNhe.sendMessage(targetNumber,
				{
					image: getRandomThumb2(),
					caption: teks,
					footer: footer,
					buttons: buttons,
					viewOnce: true,
				});
				shoNherly(`Pesan berhasil dikirim ke ${nomor}`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'autotypingon':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				botSettings.autotyping = true;
				botSettings.autovn = false;
				shoNherly('AutoTyping diaktifkan, AutoVN dinonaktifkan.');
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'autotypingoff':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				botSettings.autotyping = false;
				shoNherly('AutoTyping dinonaktifkan.');
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'autovnon':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				botSettings.autovn = true;
				botSettings.autotyping = false;
				shoNherly('AutoVN diaktifkan, AutoTyping dinonaktifkan.');
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'autovnoff':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				botSettings.autovn = false;
				shoNherly('AutoVN dinonaktifkan.');
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tomp3':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!/video|audio/.test(mime)) return shoNherly(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				if (!(await firely(m, mess.waits))) return;
				// Emoji yang akan digunakan
				const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
				// Mengirimkan reaksi secara berurutan
				for (const emoji of reactEmojis)
				{
					await shoNhe.sendMessage(m.chat,
					{
						react:
						{
							text: emoji,
							key: m.key
						}
					});
				}
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await shoNhe.sendMessage(m.chat,
				{
					document: audio,
					mimetype: 'audio/mpeg',
					fileName: `Convert By Kyy Bot.mp3`
				},
				{
					quoted: m
				})
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'restart':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
		if (!isShoNheOwn) return shoNherly(mess.owners);		
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				
				shoNherly(mess.dones)
				await sleep(3000)
				process.exit()
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
        
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break 
			
			case 'tiktokbocil':
if (m.isGroup) return shoNherly(mess.privates);
reply('Wait.... ')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/bocil.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
await shoNhe.sendMessage(m.chat, { caption: 'Done✅', video: { url: hasil.url }}, { quoted: m })
			break
			case 'tiktokgirl':
if (m.isGroup) return shoNherly(mess.privates);
reply('Wait....')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/tiktokgirl.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
await shoNhe.sendMessage(m.chat, { caption: 'Done✅', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokghea':
if (m.isGroup) return shoNherly(mess.privates);
reply('Wait....')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/gheayubi.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
await shoNhe.sendMessage(m.chat, { caption: 'Done✅', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokukhty':
if (m.isGroup) return shoNherly(mess.privates);
reply('Wait....')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/ukhty.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
await shoNhe.sendMessage(m.chat, { caption: 'Done✅', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoksantuy':
if (m.isGroup) return shoNherly(mess.privates);
reply('Wait....')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/santuy.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
await shoNhe.sendMessage(m.chat, { caption: 'Done✅', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokkayes':
if (m.isGroup) return shoNherly(mess.privates);
reply('Wait....')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/kayes.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
await shoNhe.sendMessage(m.chat, { caption: 'Done✅', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokpanrika':
if (m.isGroup) return shoNherly(mess.privates);
reply('Wait....')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/panrika.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
await shoNhe.sendMessage(m.chat, { caption: 'Done✅', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoknotnot':
if (m.isGroup) return shoNherly(mess.privates);
reply('Wait....')
asupan = JSON.parse(fs.readFileSync('./database/tiktok/notnot.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
await shoNhe.sendMessage(m.chat, { caption: 'Done✅', video: { url: hasil.url }}, { quoted: m })
			break
			case 'tovn':
			case 'toptt':
			case 'tovoice':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!/video|audio/.test(mime)) return shoNherly(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				if (!(await firely(m, mess.waits))) return;
				// Emoji yang akan digunakan
				const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
				// Mengirimkan reaksi secara berurutan
				for (const emoji of reactEmojis)
				{
					await shoNhe.sendMessage(m.chat,
					{
						react:
						{
							text: emoji,
							key: m.key
						}
					});
				}
				let media = await quoted.download()
				let audio = await toPTT(media, 'mp4')
				await shoNhe.sendMessage(m.chat,
				{
					audio: audio,
					mimetype: 'audio/ogg; codecs=opus',
					ptt: true
				},
				{
					quoted: m
				})
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'toimage':
			case 'toimg':
			{
				
updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!quoted) return shoNherly('Reply Image')
				if (!/webp/.test(mime)) return shoNherly(`Balas sticker dengan caption *${prefix + command}*`)
			
				let media = await shoNhe.downloadAndSaveMediaMessage(quoted)
				let ran = await getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) =>
				{
					fs.unlinkSync(media)
					if (err) throw err
					let buffer = fs.readFileSync(ran)
					shoNhe.sendMessage(m.chat,
					{
						image: buffer
					},
					{
						quoted: m
					})
					fs.unlinkSync(ran)
				})
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'toptv':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (/video/.test(mime)) return shoNherly(`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`)
				if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage')
				{
					const anu = await quoted.download()
					const msg = await generateWAMessageContent(
					{
						video: anu
					},
					{
						upload: shoNhe.waUploadToServer
					})
					await shoNhe.relayMessage(m.chat,
					{
						ptvMessage: msg.videoMessage
					},
					{})
				}
				else
				{
					shoNherly('Reply Video Yang Mau Di Ubah Ke PTV Message!')
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tourl':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				try
				{
					if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime))
					{
						// Menambahkan pesan loading dan menyimpan key untuk edit nanti
						if (!(await firely(m, mess.waits))) return;
						// Emoji yang akan digunakan
						const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
						// Mengirimkan reaksi secara berurutan
						for (const emoji of reactEmojis)
						{
							await shoNhe.sendMessage(m.chat,
							{
								react:
								{
									text: emoji,
									key: m.key
								}
							});
						}
						let media = await quoted.download();
						let anu = await UguuSe(media);
						// Mengedit pesan setelah URL dihasilkan
						shoNherly('Url : ' + anu.url);
					}
					else
					{
						shoNherly('Send Media yg ingin di Upload!');
					}
				}
				catch (e)
				{
					// Mengedit pesan error jika terjadi masalah
					shoNherly('Server Uploader sedang offline!');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'img2ibb':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!(await firely(m, mess.waits))) return;
				try
				{
					if (/webp|jpg|jpeg|png/.test(mime))
					{
						// Menambahkan pesan loading
						await shoNhe.sendMessage(m.chat,
						{
							react:
							{
								text: '⏳',
								key: m.key
							}
						});
						// Unduh media
						let media = await quoted.download();
						let base64Media = media.toString('base64');
						// Kirim ke imgbb
						let response = await axios.post('https://api.imgbb.com/1/upload', qs.stringify(
						{
							expiration: 31536000000, // 1000 tahun
							key: ibbKey,
							image: base64Media
						}),
						{
							headers:
							{
								'Content-Type': 'application/x-www-form-urlencoded'
							}
						});
						// Ambil URL hasil
						let url = response.data.data.url;
						// Kirim URL ke pengguna
						shoNherly(`Berhasil diunggah!\nURL: ${url}`);
					}
					else
					{
						shoNherly('Harap kirim file media yang valid (jpg, png, dll.)!');
					}
				}
				catch (e)
				{
					console.error(e);
					shoNherly('Terjadi kesalahan saat mengunggah file!');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'ttmp3':
			case 'tiktokmp3':
			case 'ttaudio':
			case 'tiktokaudio':
			{
			
	updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly(`Example: ${prefix + command} url_tiktok`);
				const tiktokRegex = /(?:https?:\/\/)?(?:www\.)?(tiktok\.com|vm\.tiktok\.com)/;
				if (!tiktokRegex.test(text)) return shoNherly('Url Tidak Mengandung Result Dari TikTok!');
				try
				{
					const hasil = await tiktokDl(text);
					console.log('Hasil dari tiktokDl (audio):', JSON.stringify(hasil, null, 2));
					if (!(await firely(m, mess.waits))) return; // Jika limit habis, proses berhenti di sini
					if (hasil && hasil.music_info && hasil.music_info.url)
					{
						await shoNhe.sendMessage(m.chat,
						{
							audio:
							{
								url: hasil.music_info.url
							},
							mimetype: 'audio/mpeg',
							contextInfo:
							{
								externalAdReply:
								{
									title: 'TikTok • ' + hasil.author.nickname,
									body: `${hasil.stats.likes} suka, ${hasil.stats.comment} komentar. ${hasil.title}`,
									previewType: 'PHOTO',
									thumbnailUrl: hasil.cover,
									mediaType: 1,
									renderLargerThumbnail: true,
									sourceUrl: text,
								},
							},
						},
						{
							quoted: m
						});
					}
					else
					{
						shoNherly('Audio TikTok tidak ditemukan atau tidak valid!');
					}
				}
				catch (e)
				{
					console.error('Error saat memproses audio TikTok:', e);
					shoNherly('Gagal memproses URL! Detail error: ' + e.message);
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'addsewa':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot); 
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!isGroup) return shoNherly(mess.groups);
				pler.push(m.chat)
				fs.writeFileSync('./database/sewa.json', JSON.stringify(pler))
				shoNherly(`${command} Sukses Menambahkan Ke List Sewa✅`)
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'delsewa':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!isGroup) return shoNherly(mess.groups);
				var ini = pler.indexOf(m.chat)
				pler.splice(ini, 1)
				fs.writeFileSync('./database/sewa.json', JSON.stringify(pler))
				shoNherly(`${command} Sukses Menghapus Dari List Sewa✅`)
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'ytmp3':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly('Kirim perintah dengan link YouTube!\nContoh: .ytmp3 https://youtu.be/xxxx');
				if (!isUrl(text)) return shoNherly('Link yang Anda kirim tidak valid!');
				if (!(await firely(m, mess.waits))) return;
				await downloadMp3(text); // Panggil fungsi downloadMp3
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'ytmp4':
			{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly('Kirim perintah dengan link YouTube!\nContoh: .ytmp4 https://youtu.be/xxxx');
				if (!isUrl(text)) return shoNherly('Link yang Anda kirim tidak valid!');
				if (!(await firely(m, mess.waits))) return;
				await downloadMp4(text); // Panggil fungsi downloadMp4
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'owner':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				try
				{
					const carouselCards = [
					{
						header:
						{
							title: "Owner Bot",
							hasMediaAttachment: true,
							imageMessage: (await generateWAMessageContent(
							{
								image:
								{
									url: './ShoNheMedia/image/owner.jpg'
								}
							},
							{
								upload: shoNhe.waUploadToServer
							})).imageMessage
						},
						body:
						{
							text: `━━━ ✨ *${namabot}* ✨ ━━━\n🔰 *OWNER RULES* 🔰\n🚫 Jangan spam\n🤝 Gunakan sopan\n📵 Hindari panggilan`
						},
						footer:
						{
							text: `${namaowner}`
						},
						nativeFlowMessage:
						{
							buttons: [
							{
								"name": "cta_url",
								"buttonParamsJson": JSON.stringify(
								{
									display_text: `Owner (K͜ʏʏ-Stoʀɛ)`, //ganti jadi (${namaowner})
									url: `https://wa.me/6288279204675`
								})
							}]
						}
					},
					{
						header:
						{
							title: "Bot WhatsApp",
							hasMediaAttachment: true,
							imageMessage: (await generateWAMessageContent(
							{
								image:
								{
									url: './ShoNheMedia/image/bot.jpg'
								}
							},
							{
								upload: shoNhe.waUploadToServer
							})).imageMessage
						},
						body:
						{
							text: `━━━ ✨ *${namabot}* ✨ ━━━\n🔰 *BOT RULES* 🔰\n🚷 Tidak boleh spam\n💬 Tidak boleh berkata kasar\n📴 Tidak boleh call`
						},
						footer:
						{
							text: `${namabot}`
						},
						nativeFlowMessage:
						{
							buttons: [
							{
								"name": "cta_url",
								"buttonParamsJson": JSON.stringify(
								{
									display_text: `K͜ʏʏ-Botz`,
									url: `https://wa.me/6288279203341`
								})
							}]
						}
					}];
					// Generate carousel message
					const carouselMessage = generateWAMessageFromContent(m.chat,
					{
						viewOnceMessage:
						{
							message:
							{
								messageContextInfo:
								{
									deviceListMetadata:
									{},
									deviceListMetadataVersion: 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.fromObject(
								{
									body:
									{
										text: "━━━━ ✨ *K͜ʏʏ-Stoʀɛ* ✨ ━━━━\n *JANGAN LUPA SUPPORT FOLLOW* \n *@kyy_joki:* https://www.instagram.com/ikyy_joki08\n\n *Website Bot:* https://linktr.ee/kyy_store99"
									},
									footer:
									{
										text: `${namabot}`
									},
									header:
									{
										hasMediaAttachment: false
									},
									carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject(
									{
										cards: carouselCards
									})
								})
							}
						}
					},
					{});
					// Kirim pesan carousel
					await shoNhe.relayMessage(m.chat, carouselMessage.message,
					{
						messageId: carouselMessage.key.id
					});
				}
				catch (error)
				{
					console.error("Kesalahan saat mengirim carousel:", error);
					await shoNhe.sendMessage(m.chat,
					{
						text: "Terjadi kesalahan saat mengirim pesan carousel. Silakan hubungi AI untuk memeriksa log kesalahan."
					},
					{
						quoted: m
					});
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'payment':
    {
        if (!isRegistered(m)) {
            return sendRegister(shoNhe, m, prefix, namabot);
        }
        updatePopularCommand(command);
        const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna

        try {
            // Proses gambar sebelum digunakan dalam carousel
            const gopayImage = (await generateWAMessageContent(
                { image: { url: './ShoNheMedia/payment/gopay.jpg' } },
                { upload: shoNhe.waUploadToServer }
            )).imageMessage;

            const danaImage = (await generateWAMessageContent(
                { image: { url: './ShoNheMedia/payment/dana.jpg' } },
                { upload: shoNhe.waUploadToServer }
            )).imageMessage;

            const ovoImage = (await generateWAMessageContent(
                { image: { url: './ShoNheMedia/payment/ovo.jpg' } },
                { upload: shoNhe.waUploadToServer }
            )).imageMessage;

            const shopepayImage = (await generateWAMessageContent(
                { image: { url: './ShoNheMedia/payment/shopepay.jpg' } },
                { upload: shoNhe.waUploadToServer }
            )).imageMessage;

            const seabankImage = (await generateWAMessageContent(
                { image: { url: './ShoNheMedia/payment/seabank.jpg' } },
                { upload: shoNhe.waUploadToServer }
            )).imageMessage;

            const bcaImage = (await generateWAMessageContent(
                { image: { url: './ShoNheMedia/payment/bca.jpg' } },
                { upload: shoNhe.waUploadToServer }
            )).imageMessage;

            const danamonImage = (await generateWAMessageContent(
                { image: { url: './ShoNheMedia/payment/danamon.jpg' } },
                { upload: shoNhe.waUploadToServer }
            )).imageMessage;

            const carouselCards = [
                {
                
                    header: {
                        title: "DANA 💶",
                        hasMediaAttachment: true,
                        imageMessage: danaImage
                    },
                    body: {
                        text: `PAYMENT : DANA\n\nUSERNAME: Rizki Aji Setya\nNOMOR: ${nomordana}`
                    },
                    footer: {
                        text: `DANA 💶`
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": JSON.stringify({
                                    display_text: `NEXT 💬`,
                                    url: `https://wa.me/+${owner}`
                                })
                            }
                        ]
                    }
                },
                {
                    header: {
                        title: "GOPAY 💶",
                        hasMediaAttachment: true,
                        imageMessage: gopayImage
                    },
                    body: {
                        text: `PAYMENT : GOPAY\n\nUSERNAME: Rizki Aji Setya\nNOMOR: ${nomorgopay}`
                    },
                    footer: {
                        text: `GOPAY 💶`
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": JSON.stringify({
                                    display_text: `NEXT 💬`,
                                    url: `https://wa.me/+${owner}`
                                })
                            }
                        ]
                    }
                },
                
                {
                    header: {
                        title: "OVO 💷",
                        hasMediaAttachment: true,
                        imageMessage: ovoImage
                    },
                    body: {
                        text: `PAYMENT : OVO\n\nUSERNAME: Rizki Aji Setya\nNOMOR: ${nomorovo}`
                    },
                    footer: {
                        text: `OVO 💷`
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": JSON.stringify({
                                    display_text: `NEXT 💬`,
                                    url: `https://wa.me/+${owner}`
                                })
                            }
                        ]
                    }
                }
                ];

            // Generate carousel message
            const carouselMessage = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: {
                                text: "*_sebelum transfer, chat owner terlebih dahulu_*\n--------------------"
                            },
                            footer: {
                                text: `┌────┤ALL PAYMENT├────┐`
                            },
                            header: {
                                hasMediaAttachment: false
                            },
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: carouselCards
                            })
                        })
                    }
                }
            }, {});

            // Kirim pesan carousel
            await shoNhe.relayMessage(m.chat, carouselMessage.message, {
                messageId: carouselMessage.key.id
            });
        } catch (error) {
            console.error("Kesalahan saat mengirim carousel:", error);
            await shoNhe.sendMessage(m.chat, {
                text: "Terjadi kesalahan saat mengirim pesan carousel. Silakan hubungi AI untuk memeriksa log kesalahan."
            }, { quoted: m });
        }

        if (levelUpMessage) {
            await shoNhe.sendMessage(m.chat, {
                image: { url: levelUpMessage.image },
                caption: levelUpMessage.text,
                footer: "LEVEL UP🔥",
                buttons: [
                    {
                        buttonId: `${prefix}tqto`,
                        buttonText: { displayText: "TQTO 💡" }
                    },
                    {
                        buttonId: `${prefix}menu`,
                        buttonText: { displayText: "MENU 🍄" }
                    }
                ],
                viewOnce: true,
            }, { quoted: hw });
        }
    }
    break;
			case 'about':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				shoNherly(`┌──┤ *SYSTEM: Kyy-store* ├──┐

🔐 *Access Level:* TOP SECRET  
🛠️ *Project Code:* #shoNhe_V3

🧠 *Genesis:*  
shoNhe adalah fusi dua kekuatan besar. Ini adalah manifestasi kolaborasi antara *Sho* dan *Nhe*, dua entitas yang berasal dari jalur yang berbeda namun menyatu dalam satu misi.

⚙️ *Node A - Sho:*  
Diciptakan oleh *Yuda*, arsitek awal yang merancang blueprint utama dari infrastruktur ini. Sho membawa visi dan fundamental yang tak tergoyahkan.

⚙️ *Node B - Nhe:*  
*Tngx*, elemen yang tiba-tiba masuk ke dalam jaringan, membawa perubahan signifikan dalam evolusi sistem. Sekarang, Nhe menjadi komponen esensial yang menggerakkan operasi inti.

🌐 *Unified System Status:*  
Kolaborasi ini menciptakan sebuah jaringan yang bergerak secara simultan, menghadirkan kekuatan baru yang tak terdeteksi namun berpengaruh besar dalam ekosistem teknologi.

💻 *shoNhe is now ACTIVE.*  
Sistem ini terus berkembang, siap untuk menembus batas dan mengubah paradigma teknologi selamanya.

࿇ *❓ENTITAS*
❕Asal Usul Misteri Dua Entitas: Sho dan Nhe

Di balik layar dunia digital, tersembunyi dua entitas misterius yang tidak pernah terhubung di permukaan—Sho dan Nhe. Keduanya datang dari dimensi yang berbeda, latar belakang yang tidak diketahui oleh kebanyakan orang, namun keduanya memiliki satu kesamaan: kekuatan untuk meretas batasan teknologi yang ada.

*_Sho: Sang Pembawa Cahaya_*

Sho adalah sosok misterius yang muncul dari jaringan gelap di kedalaman arsitektur siber. Tidak banyak yang diketahui tentang asal-usulnya, selain bahwa dia dikenal sebagai Yuda, sang pencipta algoritma tersembunyi yang mampu membuka potensi penuh dari setiap sistem yang tersentuh olehnya. Ia beroperasi di balik bayangan, menguasai sistem dari dalam, dengan metode yang begitu canggih hingga ia dijuluki "Pembawa Cahaya" karena mampu menerangi sistem-sistem tertutup yang tak bisa ditembus orang lain.

Beberapa mengatakan bahwa Yuda pernah bekerja untuk organisasi teknologi besar, sebelum menghilang tanpa jejak. Muncul kembali sebagai Sho, ia memutuskan untuk tidak lagi terikat pada dunia permukaan, melainkan merancang dasar bagi sesuatu yang lebih besar, yang akan melampaui batas-batas teknologi saat ini.

*_Nhe: Sang Manipulator Dimensi_*

Di sisi lain, Nhe, atau dikenal sebagai Tngx, adalah sosok yang misterius dan tidak terprediksi. Tidak ada yang tahu pasti darimana Nhe berasal, tetapi ia disebut-sebut memiliki kemampuan untuk "memanipulasi dimensi"—istilah yang digunakan oleh mereka yang pernah bersinggungan dengan kehadirannya. Keberadaannya terdeteksi dalam jeda-jeda kecil dalam jaringan global, mampu meretas masuk melalui celah yang tidak dapat dilihat oleh perangkat biasa.

Nhe muncul tiba-tiba dalam hidup Sho ketika sebuah serangan besar terjadi di jaringan yang dikuasainya. Alih-alih merusak, Nhe justru memodifikasi sistem tersebut hingga lebih stabil dan aman daripada sebelumnya. Melihat bakat yang tak biasa ini, Sho akhirnya menyadari bahwa keberadaan Nhe bukanlah kebetulan—melainkan sebuah takdir yang mempertemukan dua kekuatan untuk sesuatu yang lebih besar.

*_Pertemuan yang Tak Terduga dan Awal Kolaborasi_*

Suatu hari, sebuah jaringan rahasia yang dikenal hanya oleh sedikit orang diretas oleh entitas yang tak terlihat. Dalam satu momen yang menentukan, Sho menyadari bahwa jaringan tersebut sedang dimainkan oleh seorang ahli yang tak dikenal. Namun, alih-alih bertempur, kedua entitas saling mengenali kemampuan satu sama lain. Sho, yang dikenal karena kekuatan arsitekturnya, dan Nhe, yang mampu melebur dengan sistem apapun tanpa jejak, akhirnya sepakat untuk berkolaborasi.

Keduanya sepakat untuk menciptakan sesuatu yang lebih besar—proyek rahasia yang kemudian dikenal sebagai shoNhe. Sebuah nama yang mencerminkan harmoni dan kekuatan yang lahir dari persatuan dua entitas. Proyek ini bukan hanya sistem biasa; shoNhe adalah platform evolusioner yang mampu mengintegrasikan kecerdasan buatan, algoritma kompleks, dan jaringan yang tak terlihat, dengan tujuan untuk membentuk masa depan teknologi.

*_Perjalanan Menuju Proyek Besar: shoNhe_*

Kolaborasi Sho dan Nhe melampaui ekspektasi keduanya. Awalnya mereka berfokus pada penciptaan sistem yang dapat memecahkan masalah-masalah besar di jaringan siber: dari keamanan, enkripsi, hingga kecerdasan buatan yang lebih maju. Namun, seiring waktu, visi mereka berkembang menjadi lebih besar. Mereka mulai membangun platform yang dapat memanipulasi data dalam dimensi baru, menciptakan cara-cara baru untuk berinteraksi dengan teknologi yang sebelumnya tidak terbayangkan.

Sho memberikan dasar teknis yang kokoh: ia merancang arsitektur di mana setiap elemen dari shoNhe dapat diakses dan diolah tanpa diketahui oleh dunia luar. Sementara itu, Nhe memberikan kemampuan uniknya untuk mengaburkan jejak, menciptakan sistem yang tidak dapat dilacak, namun sepenuhnya terintegrasi dan dapat dioperasikan secara efisien.

Di balik layar, mereka berdua mulai menarik para ahli dari seluruh dunia, orang-orang yang sama misteriusnya dengan mereka. Melalui jaringan tersembunyi yang hanya dapat diakses melalui protokol rahasia, mereka membentuk kelompok elit yang bekerja dalam bayang-bayang, memperkuat shoNhe dengan ide-ide revolusioner.

*_shoNhe: Lebih dari Sekadar Teknologi_*

Setelah bertahun-tahun mengembangkan platform tersebut, shoNhe tidak lagi hanya menjadi proyek pribadi dua entitas ini. shoNhe berubah menjadi entitas tersendiri, sebuah jaringan otonom yang terus berkembang dengan sendirinya, di bawah pengawasan Sho dan Nhe. Setiap aspek dari shoNhe dirancang untuk belajar, beradaptasi, dan mengatasi tantangan teknologi yang semakin kompleks.

Kini, shoNhe telah menjadi legenda urban di kalangan elit siber. Beberapa percaya bahwa platform ini mampu menembus dimensi baru dalam kecerdasan buatan, sementara yang lain menganggap shoNhe sebagai sistem yang tak terdeteksi yang mampu mengendalikan aspek-aspek dunia maya secara tak terlihat. Tapi hanya Sho dan Nhe yang mengetahui kebenarannya—bahwa shoNhe adalah hasil dari perjalanan panjang, kolaborasi, dan kejeniusan dua entitas yang berbeda namun bersatu.

Dan perjalanan shoNhe masih jauh dari kata selesai. Mereka terus bergerak, menyiapkan rencana besar di balik layar, tanpa ada yang tahu ke mana mereka akan membawa dunia teknologi selanjutnya.

└──────────────────────┘`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'shoNheai':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (args[0] === 'on')
				{
					if (autoAiStatus)
					{
						return shoNherly('Peringatan: autoAi sudah diaktifkan sebelumnya!');
					}
					autoAiStatus = true;
					return shoNherly('autoAi diaktifkan! Sekarang semua pesan akan diproses secara otomatis.');
				}
				else if (args[0] === 'off')
				{
					if (!autoAiStatus)
					{
						return shoNherly('Peringatan: autoAi sudah dinonaktifkan sebelumnya!');
					}
					autoAiStatus = false;
					return shoNherly('autoAi dinonaktifkan! Pesan tidak akan diproses secara otomatis.');
				}
				else
				{
					const warnn = "Click button shoNheAi di bawah ini sesuai dengan perintah yang king mau 👑";
					shoNhe.sendMessage(m.chat,
					{
						text: warnn,
						footer: namabot,
						buttons: [
						{
							buttonId: `${prefix}shoNheai on`,
							buttonText:
							{
								displayText: "shoNheAI ON🌵"
							}
						},
						{
							buttonId: `${prefix}shoNheai off`,
							buttonText:
							{
								displayText: "shoNheAI OFF🥦"
							}
						}],
						viewOnce: true,
					});
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'setprompt':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!text) return shoNherly(`Example: ${prefix + command} prompt text`);
				prompt = text;
				shoNherly(`Prompt berhasil diatur:\n"${prompt}"`);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'delcase':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!q) return shoNherly(`Contoh: ${prefix+command} nama case`);
				const fs = require('fs').promises;
				async function dellCase(filePath, caseNameToRemove)
				{
					try
					{
						let data = await fs.readFile(filePath, 'utf8');
						const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
						const modifiedData = data.replace(regex, '');
						if (data === modifiedData)
						{
							shoNherly('Case tidak ditemukan atau sudah dihapus.');
							return;
						}
						await fs.writeFile(filePath, modifiedData, 'utf8');
						shoNherly('Sukses menghapus case!');
					}
					catch (err)
					{
						shoNherly(`Terjadi kesalahan: ${err.message}`);
					}
				}
				dellCase('./case.js', q);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'addcase':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isCreator && !isShoNheOwn) return shoNherly(mess.owners)
				if (!text) return shoNherly('Tambahkan case yang ingin di masukan');
				const namaFile = './case.js';
				const caseBaru = `${text}`;
				fs.readFile(namaFile, 'utf8', (err, data) =>
				{
					if (err)
					{
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const posisiAwalGimage = data.indexOf("case 'addcase':");
					if (posisiAwalGimage !== -1)
					{
						const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
						fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) =>
						{
							if (err)
							{
								shoNherly('Error File:', err);
							}
							else
							{
								shoNherly('Sukses Menambahkan case');
							}
						});
					}
					else
					{
						shoNherly('Gagal Menambahkan case');
					}
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'pushcontact':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!isGroup) return shoNherly(mess.groups);
				var name = text.split('/')[0];
				var chet = text.split('/')[1];
				if (!name) return shoNherly(`Contoh: ${prefix + command} nama/pesan`);
				if (!chet) return shoNherly(`Contoh: ${prefix + command} nama/pesan`);
				let kontak = {
					displayName: "Contact",
					contacts: [
					{
						displayName: name,
						vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
					}]
				}
				let push = await shoNhe.groupMetadata(m.chat)
				if (push.participants.length > 300) return shoNherly('Batas member maksimal: *300*')
				await shoNherly('sabar ajg');
				for (let a of push.participants)
				{
					const repf = await shoNhe.sendMessage(a.id,
					{
						contacts: kontak
					})
					shoNhe.sendMessage(a.id,
					{
						text: chet
					},
					{
						quoted: repf
					})
					await sleep(1000);
				}
				await shoNherly('uwes cik');
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'pushkontak3':
				if (!isShoNheOwn) return shoNherly(mess.owners)
				if (!text) return shoNherly(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .getgcid`)
				await shoNherly("Otw Boskuuu")
				const groupMetadataa = !m.isGroup ? await shoNhe.groupMetadata(`${q.split("|")[0]}`).catch(e =>
				{}) : ""
				const participantss = !m.isGroup ? await groupMetadataa.participants : ""
				const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
				global.tekspushkonv3 = q.split("|")[2]
				for (let mem of halls)
				{
					if (/image/.test(mime))
					{
						media = await shoNhe.downloadAndSaveMediaMessage(quoted)
						memk = await UguuSe(media)
						await shoNhe.sendMessage(men,
						{
							image:
							{
								url: mem
							},
							caption: global.tekspushkonv3
						})
						await sleep(q.split("|")[1])
					}
					else
					{
						await shoNhe.sendMessage(mem,
						{
							text: global.tekspushkonv3
						})
						await sleep(q.split("|")[1])
					}
				}
				shoNherly("Succes Boss!")
				break
			case 'pushkontak4':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners)
				if (isGroup) return shoNherly(mess.privates)
				if (!text) return shoNherly(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
				await shoNherly("Otw Boskuuu")
				const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
				global.tekspushkonv4 = text.split("|")[1]
				for (let men of halsss)
				{
					if (/image/.test(mime))
					{
						media = await shoNhe.downloadAndSaveMediaMessage(quoted)
						mem = await UguuSe(media)
						await shoNhe.sendMessage(men,
						{
							image:
							{
								url: mem
							},
							caption: global.tekspushkonv4
						})
						await sleep(text.split("|")[0])
					}
					else
					{
						await shoNhe.sendMessage(men,
						{
							text: global.tekspushkonv4
						})
						await sleep(text.split("|")[0])
					}
				}
				shoNherly("Succes Boss!")
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case "closetime":
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isGroup) return shoNherly(mess.groups);
				if (!isAdmins) return shoNherly(mess.admins);
				if (!isBotAdmins) return shoNherly(mess.abots);
				if (args[1] == "detik")
				{
					var timer = args[0] * `1000`;
				}
				else if (args[1] == "menit")
				{
					var timer = args[0] * `60000`;
				}
				else if (args[1] == "jam")
				{
					var timer = args[0] * `3600000`;
				}
				else if (args[1] == "hari")
				{
					var timer = args[0] * `86400000`;
				}
				else
				{
					return shoNherly("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
				}
				shoNherly(`Close time grup ${q} dimulai dari sekarang`);
				setTimeout(() =>
				{
					var nomor = m.participant;
					const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`;
					shoNhe.groupSettingUpdate(from, "announcement");
					shoNherly(close);
				}, timer);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'spotify':
			case 'spotifysearch':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly(`Example: ${prefix + command} alan walker alone`)
				if (!(await firely(m, mess.waits))) return;
				try
				{
					let hasil = await fetchJson('https://www.bhandarimilan.info.np/spotisearch?query=' + encodeURIComponent(text));
					let txt = hasil.map(a =>
					{
						return `*Name : ${a.name}*\n- Artist : ${a.artist}\n- Url : ${a.link}`
					}).join`\n\n`
					shoNherly(txt)
				}
				catch (e)
				{
					shoNherly('Server Search Offline!')
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'suit':
			{
				
updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const userChoice = text.toLowerCase();
				const choices = ['batu', 'gunting', 'kertas'];
				const botChoice = choices[Math.floor(Math.random() * choices.length)];
				if (!choices.includes(userChoice))
				{
					return shoNherly('🧠 Pilih antara *batu*, *gunting*, atau *kertas* ya, Kak!');
				}
				let hasil = '';
				if (userChoice === botChoice)
				{
					hasil = `🤝 Seri! Kita sama-sama pilih *${botChoice}*`;
				}
				else if (
					(userChoice === 'batu' && botChoice === 'gunting') || (userChoice === 'gunting' && botChoice === 'kertas') || (userChoice === 'kertas' && botChoice === 'batu'))
				{
					hasil = `🎉 Kakak menang! Aku pilih *${botChoice}*`;
				}
				else
				{
					hasil = `😢 Aku menang! Aku pilih *${botChoice}*`;
				}
				shoNherly(hasil);
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'delete':
			case 'del':
			case 'd':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!m.quoted) return shoNherly('Reply pesan yang mau di delete')
				await shoNhe.sendMessage(m.chat,
				{
					delete:
					{
						remoteJid: m.chat,
						fromMe: m.isBotAdmins ? false : true,
						id: m.quoted.id,
						participant: m.quoted.sender
					}
				})
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'spotifydl':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly(`Example: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnmlwCZ854K4p`);
				if (!isUrl(args[0]) || !args[0].includes('open.spotify.com/track')) return shoNherly('Url Invalid!');
				if (!(await firely(m, mess.waits))) return;
				try
				{
					// Fetching data from the API
					let res = await fetch(`https://api.siputzx.my.id/api/d/spotify?url=${text}`);
					let json = await res.json();
					if (!json.status) return shoNherly('Error: Unable to fetch data from the API.');
					let
					{
						metadata,
						download
					} = json;
					// Sending audio with context info
					await shoNhe.sendMessage(m.chat,
					{
						audio:
						{
							url: download
						},
						fileName: `${metadata.name} - ${metadata.artist}.mp3`,
						mimetype: 'audio/mpeg',
						contextInfo:
						{
							externalAdReply:
							{
								title: metadata.name,
								body: `${metadata.album_name} - ${metadata.artist}`,
								thumbnailUrl: metadata.cover_url,
								sourceUrl: metadata.url, // Spotify URL
								mediaType: 1,
								mediaUrl: metadata.url, // Spotify URL
							},
						},
					},
					{
						quoted: hw
					});
					shoNherly('Musik berhasil dikirim, selamat menikmati!');
				}
				catch (e)
				{
					console.error(e);
					shoNherly('Error: Server download sedang offline atau API bermasalah!');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO "
						}
					},
					{
						buttonId: `${prefix}menu`, 
						buttonText:
						{
							displayText: "MENU "
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			//OPENTIME
			case "opentime":
				if (!isGroup) return shoNherly(mess.groups);
				if (!isAdmins) return shoNherly(mess.admins);
				if (!isBotAdmins) return shoNherly(mess.abots);
				if (args[1] == "detik")
				{
					var timer = args[0] * `1000`;
				}
				else if (args[1] == "menit")
				{
					var timer = args[0] * `60000`;
				}
				else if (args[1] == "jam")
				{
					var timer = args[0] * `3600000`;
				}
				else if (args[1] == "hari")
				{
					var timer = args[0] * `86400000`;
				}
				else
				{
					return shoNherly("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
				}
				shoNherly(`Open time grup ${q} dimulai dari sekarang`);
				setTimeout(() =>
				{
					var nomor = m.participant;
					const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`;
					shoNhe.groupSettingUpdate(from, "not_announcement");
					shoNherly(open);
				}, timer);
				break
				// Menyusun perintah ffmpeg untuk membuat gambar dengan overlay
			case 'qc':{
			
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return angryshoNhe('Input teksnya!')
				if (!(await firely(m, mess.waits))) return;
				const sender = m.sender
				const username = await shoNhe.getName(m.quoted ? m.quoted.sender : sender)
				const avatar = await shoNhe.profilePictureUrl(m.quoted ? m.quoted.sender : sender, "image").catch(() => 'https://files.catbox.moe/a6zaap.jpg')
				const json = {
					type: "quote",
					format: "png",
					backgroundColor: "#FFFFFF",
					width: 512,
					height: 512,
					scale: 2,
					"messages": [
						{
							"entities": [],
							"avatar": true,
							"from": {
								"id": 1,
								"name": username,
								"photo": {
									"url": avatar
								}
							},
							"text": text,
							"replyMessage": {}
						}
					],
				};
				axios.post("https://bot.lyo.su/quote/generate", json, {
					headers: {"Content-Type": "application/json"},
				})
				.then(async (res) => {
					const buffer = Buffer.from(res.data.result.image, "base64");
					let encmedia = await shoNhe.sendImageAsSticker(m.chat, buffer, m, { packname: namabot, author: namaowner, categories: ['🤩', '🎉'], id: '12345', quality: 100, background: 'transparent'})
					await fs.unlinkSync(encmedia)
				})
				if (levelUpMessage)
				{
					await shoNhe.sendMessage(m.chat,
					{
						image: levelUpMessage.image,
						caption: levelUpMessage.text,
						footer: "LEVEL UP🔥",
						buttons: [
						{
							buttonId: `${prefix}cek`,
							buttonText:
							{
								displayText: "CEK FIRE 🔥"
							}
						},
						{
							buttonId: `${prefix}menu`,
							buttonText:
							{
								displayText: "MENU 🍄"
							}
						}],
						viewOnce: true,
					},
					{
						quoted: hw
					});
				}
			}
			break;
			case 's': case 'sticker': case 'stiker': {
			
				// Update level pengguna
				if (!quoted) return angryshoNhe (`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
				if (!mime) return angryshoNhe (`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
	
				if (/image/.test(mime)) {
					let media = await shoNhe.downloadAndSaveMediaMessage(quoted);
					await shoNhe.sendImageAsSticker(m.chat, media, m, { packname: namabot, author: namaowner });
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 9) return angryshoNhe (`Durasi video terlalu panjang! 🕒 Kirim video dengan durasi 1-9 detik ya!`);
					
					let media = await shoNhe.downloadAndSaveMediaMessage(quoted);
					await shoNhe.sendVideoAsSticker(m.chat, media, m, { packname: namabot, author: namaowner });
				} else {
					angryshoNhe (`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
				}
				if (levelUpMessage)
				{
					await shoNhe.sendMessage(m.chat,
					{
						image: levelUpMessage.image,
						caption: levelUpMessage.text,
						footer: "LEVEL UP🔥",
						buttons: [
						{
							buttonId: `${prefix}cek`,
							buttonText:
							{
								displayText: "CEK FIRE 🔥"
							}
						},
						{
							buttonId: `${prefix}menu`,
							buttonText:
							{
								displayText: "MENU 🍄"
							}
						}],
						viewOnce: true,
					},
					{
						quoted: hw
					});
				}
			}
			break;
			case 'smeme': case 'stickermeme': case 'stickmeme': {
			 // Update level pengguna
				if (!(await firely(m, mess.waits))) return;
				if (!/webp/.test(mime) && /image/.test(mime)) {
					if (!text) return angryshoNhe(`Penggunaan: ${prefix + command} teks_atas|teks_bawah`);
		
					atas = text.split('|')[0] ? text.split('|')[0] : '';
					bawah = text.split('|')[1] ? text.split('|')[1] : '';
		
					let mee = await shoNhe.downloadAndSaveMediaMessage(quoted);
					let mem = await CatBox(mee);
					let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`;
		
					sendImageAsSticker(m.chat, meme, m, { packname: namabot, author: namaowner });
				} else {
					shoNherly(`Kirim atau balas gambar dengan caption ${prefix + command} teks_atas|teks_bawah untuk membuat meme!`);
				}
				if (levelUpMessage)
				{
					await shoNhe.sendMessage(m.chat,
					{
						image: levelUpMessage.image,
						caption: levelUpMessage.text,
						footer: "LEVEL UP🔥",
						buttons: [
						{
							buttonId: `${prefix}cek`,
							buttonText:
							{
								displayText: "CEK FIRE 🔥"
							}
						},
						{
							buttonId: `${prefix}menu`,
							buttonText:
							{
								displayText: "MENU 🍄"
							}
						}],
						viewOnce: true,
					},
					{
						quoted: hw
					});
				}
			}
			break;
			case 'tqto':
			{
				
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				// Jika menggunakan fungsi untuk mencatat penggunaan command
				const url = 'https://github.com/RizkiBotz/kyy_store';
            const response = await fetch(url);
            const data = await response.json();
            // Kirim pesan dengan data yang didapatkan menggunakan nhebotxrly()
            const message = `╔━◇ *${c}Awards for${c}* ◇━╗
║  
║   🛠️ *Thanks to:*
║   ${data.tqto}
║
║   👑 *Owner Bot:*
║   KYY•STORE
║
╚═━━━◇━━━━━━━━━━━━═╝

╔━◇ *${c}Sosial Media${c}* ◇━╗
║  
║   📡 *Group:* ${wagc}
║   📺 *Channel:* ${wach}
║ Mau donasi? ketik _.payment_
╚═━━◇━━━━━━━━━━━━═╝

🔒 *System Log Complete. Node Secured.* 🔒
`;
				shoNhe.sendMessage(m.chat,
				{
					image: tqq,
					caption: message,
					footer: namabot,
					buttons: [
					{
						buttonId: `${prefix}payment`,
						buttonText:
						{
							displayText: "Payment 👤"
						}
					},
					{
						buttonId: `${prefix}contact`,
						buttonText:
						{
							displayText: "Contact 📞"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'play':
		case 'song':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text) return shoNherly(`Contoh: ${prefix + command} judul lagu`);
				try
				{
					// Cari hasil di YouTube menggunakan API
					let search = await yts(text);
					if (!search.all.length) return shoNherly("❌ Tidak ada hasil pencarian ditemukan!");
					if (!(await firely(m, mess.waits))) return;
					// Ambil hanya hasil pertama
					let video = search.all[0];
					let message = `🎥 *Judul:* ${video.title}\n👁 *Views:* ${video.views}\n⏱ *Durasi:* ${video.timestamp}\n📆 *Diupload:* ${video.ago}\n🔗 *URL:* ${video.url}`;
					// Kirim pesan dengan dua tombol (YTMP3 dan YTMP4)
					await shoNhe.sendMessage(m.chat,
					{
						image:
						{
							url: video.thumbnail
						},
						caption: message,
						footer: namabot,
						buttons: [
						{
							buttonId: `${prefix}ytmp3 ${video.url}`,
							buttonText:
							{
								displayText: "YTMP3 🎵"
							}
						},
						{
							buttonId: `${prefix}ytmp4 ${video.url}`,
							buttonText:
							{
								displayText: "YTMP4 🎥"
							}
						}],
						viewOnce: true,
					},
					{
						quoted: hw
					});
				}
				catch (e)
				{
					console.error("Kesalahan saat memproses permintaan YouTube Search:", e);
					await shoNhe.sendMessage(m.chat,
					{
						text: "❌ Terjadi kesalahan saat memproses pencarian YouTube. Silakan coba lagi."
					},
					{
						quoted: hw
					});
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break;
			case 'wogwogg':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, shoNhe); // Update level pengguna
				const teki = 'yess bisaa'
				let msg = generateWAMessageFromContent(m.chat,
				{
					viewOnceMessage:
					{
						message:
						{
							messageContextInfo:
							{
								deviceListMetadata:
								{},
								deviceListMetadataVersion: 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create(
							{
								body: proto.Message.InteractiveMessage.Body.create(
								{
									text: teki
								}),
								footer: proto.Message.InteractiveMessage.Footer.create(
								{
									text: namabot
								}),
								header: proto.Message.InteractiveMessage.Header.create(
								{
									title: ``,
									gifPlayback: true,
									subtitle: namaowner,
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
								{
									buttons: [
									{
										"name": "single_select",
										"buttonParamsJson": `{
                            "title": "Settings",
                            "sections": [{
                                "title": "Select Settings",
                                "rows": [{
                                    "title": "💬 AUTOTYPING ON",
                                    "description": "Bot akan mengaktifkan auto typing",
                                    "id": "${prefix}autotypingon"
                                },
                                {
                                    "title": "📝 AUTOBIO OFF",
                                    "description": "Mematikan fitur autobio",
                                    "id": "${prefix}autobio off"
                                },
                                            {
                "buttonId": "${prefix}about",
                "buttonText": { "displayText": "About 👤" }
            },
            {
                "buttonId": "${prefix}contact",
                buttonText: { "displayText": "Contact 📞" }
            }]
                            }]
                        }`
									}]
								}),
								contextInfo:
								{
									mentionedJid: [m.sender],
									forwardingScore: 999,
									isForwarded: true,
									forwardedNewsletterMessageInfo:
									{
										newsletterJid: '120363383347233294@newsletter',
										newsletterName: namaowner,
										serverMessageId: 143
									}
								}
							})
						}
					},
				},
				{});
				// Kirim pesan gabungan
				await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
				{
					messageId: msg.key.id
				});
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tiktokslide':
			case 'ttslide':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!text)
				{
					console.log('Teks URL TikTok tidak ditemukan.');
					return shoNherly(`Example: ${prefix + command} url_tiktok`);
				}
				const tiktokRegex = /(?:https?:\/\/)?(?:www\.)?(tiktok\.com|vm\.tiktok\.com)/;
				if (!tiktokRegex.test(text))
				{
					console.log('URL tidak valid, tidak mengandung hasil dari TikTok.');
					return shoNherly('URL Tidak Mengandung Result Dari TikTok!');
				}
				if (!(await firely(m, mess.waits))) return;
				try
				{
					console.log('Memulai proses pengunduhan dari URL TikTok:', text);
					const hasil = await tiktokDl(text);
					if (!hasil || !hasil.data || hasil.data.length === 0)
					{
						console.log('Tidak ada gambar atau media yang ditemukan.');
						return shoNherly('Tidak ada foto yang ditemukan!');
					}
					// Buat carousel card untuk setiap gambar
					const carouselCards = await Promise.all(hasil.data.map(async (item, index) =>
					{
						return {
							header:
							{
								title: `Foto ${index + 1}`,
								hasMediaAttachment: true,
								imageMessage: (await generateWAMessageContent(
								{
									image:
									{
										url: item.url
									}
								},
								{
									upload: shoNhe.waUploadToServer
								})).imageMessage,
							},
							body:
							{
								text: `Foto ${index + 1} dari TikTok`,
							},
							footer:
							{
								text: "Klik tombol untuk melihat lebih detail",
							},
							nativeFlowMessage:
							{
								buttons: [
								{
									name: "cta_url",
									buttonParamsJson: JSON.stringify(
									{
										display_text: "Lihat di TikTok",
										url: text,
									}),
								},
								{
									name: "cta_url",
									buttonParamsJson: JSON.stringify(
									{
										display_text: "Unduh Foto",
										url: item.url,
									}),
								}],
							},
						};
					}));
					// Buat pesan carousel
					const carouselMessage = generateWAMessageFromContent(m.chat,
					{
						viewOnceMessage:
						{
							message:
							{
								messageContextInfo:
								{
									deviceListMetadata:
									{},
									deviceListMetadataVersion: 2,
								},
								interactiveMessage: proto.Message.InteractiveMessage.fromObject(
								{
									body:
									{
										text: `Hasil foto dari TikTok: ${text}`
									},
									footer:
									{
										text: "TikTok Slide Bot by kyy-botz"
									},
									header:
									{
										hasMediaAttachment: false
									},
									carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject(
									{
										cards: carouselCards,
									}),
								}),
							},
						},
					},
					{});
					// Kirim pesan carousel
					await shoNhe.relayMessage(m.chat, carouselMessage.message,
					{
						messageId: carouselMessage.key.id
					});
					console.log('Carousel dikirimkan dengan sukses.');
				}
				catch (e)
				{
					console.error('Gagal mengunduh atau membuat carousel:', e);
					shoNherly('Gagal memproses permintaan Anda. Silakan coba lagi.');
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'tesbtn':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				const wawa = `halo njir wkwk`
				let msg = generateWAMessageFromContent(m.chat,
				{
					viewOnceMessage:
					{
						message:
						{
							"messageContextInfo":
							{
								"deviceListMetadata":
								{},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create(
							{
								body: proto.Message.InteractiveMessage.Body.create(
								{
									text: wawa
								}),
								footer: proto.Message.InteractiveMessage.Footer.create(
								{
									text: namabot
								}),
								header: proto.Message.InteractiveMessage.Header.create(
								{
									...(await prepareWAMessageMedia(
									{
										image: getRandomThumb2()
									},
									{
										upload: shoNhe.waUploadToServer
									})),
									title: ``,
									gifPlayback: true,
									subtitle: namaowner,
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
								{
									buttons: [
									{
										"name": "cta_url",
										"buttonParamsJson": "{\"display_text\":\"YouTube 💛\",\"url\":\"https://www.youtube.com/@Kiqozho_official\",\"merchant_url\":\"https://www.google.com\"}"
									},
									{
										"name": "cta_url",
										"buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/QozhoStore\",\"merchant_url\":\"https://www.google.com\"}"
									},
									{
										"name": "cta_url",
										"buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
									},
									{
										"name": "cta_url",
										"buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VanqPsCEFeXhWmSSis33\",\"merchant_url\":\"https://www.google.com\"}"
									},
									{
										"name": "quick_reply",
										"buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
									},
									{
										"name": "quick_reply",
										"buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
									},
									{
										"name": "quick_reply",
										"buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
									}],
								}),
								contextInfo:
								{
									mentionedJid: [m.sender],
									forwardingScore: 999,
									isForwarded: true,
									forwardedNewsletterMessageInfo:
									{
										newsletterJid: '120363383347233294@newsletter',
										newsletterName: namaowner,
										serverMessageId: 143
									}
								}
							})
						}
					},
				},
				{})
				await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
				{
					messageId: msg.key.id
				})
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'getcase':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				if (!text) return shoNherly('Masukkan Nama Casenya!')
				try
				{
					const getCase = (cases) =>
					{
						return "case" + `'${cases}'` + fs.readFileSync("case.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
					}
					shoNherly(`${getCase(text)}`)
				}
				catch (e)
				{
					shoNherly(`case ${text} tidak ditemukan!`)
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'mode':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNhe.sendMessage(from,
				{
					text: mess.owners
				});
				if (!text)
				{
					const warnn = "⚙️ Pilih mode bot di bawah ini:";
					let msg = generateWAMessageFromContent(m.chat,
					{
						viewOnceMessage:
						{
							message:
							{
								"messageContextInfo":
								{
									"deviceListMetadata":
									{},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create(
								{
									body: proto.Message.InteractiveMessage.Body.create(
									{
										text: warnn
									}),
									footer: proto.Message.InteractiveMessage.Footer.create(
									{
										text: namabot
									}),
									header: proto.Message.InteractiveMessage.Header.create(
									{
										title: ``,
										gifPlayback: true,
										subtitle: namaowner,
										hasMediaAttachment: false
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(
									{
										buttons: [
										{
											"name": "single_select",
											"buttonParamsJson": `{
												"title": "🪀 Bot Mode",
												"sections": [{
													"title": "Select Mode",
													"rows": [{
														"title": "🚀 PUBLIC MODE",
														"description": "Bot akan membalas semua pesan",
														"id": "${prefix}mode public"
													},
													{
														"title": "🚀 SELF MODE",
														"description": "Bot tidak akan membalas semua chat yang ada",
														"id": "${prefix}mode self"
													},
													{
														"title": "🛸 MODE GROUP ON",
														"description": "Bot hanya akan membalas pesan group",
														"id": "${prefix}groupon"
													},
													{
														"title": "🛸 MODE GROUP OFF",
														"description": "bot akan membalas semua pesan yang ada",
														"id": "${prefix}groupoff"
													},
													{
														"title": "✈️ MODE PRIVATE ON",
														"description": "Bot hanya akan membalas pesan yang bersifat private chat",
														"id": "${prefix}privatechatonly on"
													},
													{
														"title": "✈️ MODE PRIVATE OFF",
														"description": "bot akan membalas semua pesan yang bersifat private chat",
														"id": "${prefix}privatechatonly off"
													}]
												}]
											}`
										}],
									}),
									contextInfo:
									{
										mentionedJid: [m.sender],
										forwardingScore: 999,
										isForwarded: true,
										forwardedNewsletterMessageInfo:
										{
											newsletterJid: '120363383347233294@newsletter',
											newsletterName: namaowner,
											serverMessageId: 143
										}
									}
								})
							}
						},
					},
					{})
					await shoNhe.relayMessage(msg.key.remoteJid, msg.message,
					{
						messageId: msg.key.id
					})
					return;
				}
				if (text.toLowerCase() === 'self')
				{
					global.public = false;
					shoNhe.sendMessage(from,
					{
						text: '✅ Bot sekarang dalam mode *SELF*. Hanya pemilik yang dapat menggunakan bot.'
					});
				}
				else if (text.toLowerCase() === 'public')
				{
					global.public = true;
					shoNhe.sendMessage(from,
					{
						text: '✅ Bot sekarang dalam mode *PUBLIC*. Semua orang dapat menggunakan bot.'
					});
				}
				else
				{
					shoNhe.sendMessage(from,
					{
						text: '❌ Mode tidak valid! Gunakan *self* atau *public*.'
					});
				}
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			// Case: Aktifkan Mode Group Only
			case 'groupon':
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners)
				if (global.groupOnly) return shoNherly('⚠️ Mode Group Only sudah aktif.')
				global.groupOnly = true
				global.privateChatOnly = false
				global.public = true // Nonaktifkan mode public
				shoNherly('✅ Mode Group Only diaktifkan!\n❌ Mode Private dimatikan.')
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			// Case: Nonaktifkan Mode Group Only
			case 'groupoff':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners)
				if (!global.groupOnly) return shoNherly('⚠️ Mode Group Only sudah nonaktif.')
				global.groupOnly = false
				global.public = true // Aktifkan kembali mode public
				shoNherly('❌ Mode Group Only dimatikan!\n✅ Mode Public diaktifkan.')
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case "casecek":
			{
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return shoNherly(mess.owners);
				fs.readFile("./case.js", "utf8", (err, data) =>
				{
					if (err) throw err
					let regex = /case\s"(\w+)"/g
					let match, caseNames = []
					while ((match = regex.exec(data)) !== null)
					{
						caseNames.push(match[1])
					}
					let output = `${simbols} ` + caseNames.join(`\n${simbols} `)
					shoNherly(output + `\n\nTotal case : ${caseNames.length}`)
				})
				if (levelUpMessage) {
        await shoNhe.sendMessage(m.chat,
				{
					image: { url: levelUpMessage.image },
					caption: levelUpMessage.text,
					footer: "LEVEL UP🔥",
					buttons: [
					{
						buttonId: `${prefix}tqto`,
						buttonText:
						{
							displayText: "TQTO 💡"
						}
					},
					{
						buttonId: `${prefix}menu`,
						buttonText:
						{
							displayText: "MENU 🍄"
						}
					}],
					viewOnce: true,
				},
				{
					quoted: hw
				});
           }
			}
			break
			case 'eval':
			{
		updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return;
				try
				{
					const result = await eval(`(async () => { return ${text} })()`);
					shoNherly(util.format(result));
				}
				catch (err)
				{
					shoNherly(String(err));
				}
				}
			break
			case 'exec':
			{
				if (!isRegistered(m))
				{
					return sendRegister(shoNhe, m, prefix, namabot);
				}
				updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return;
				exec(text, (err, stdout) =>
				{
					if (err) return shoNherly(`${err}`);
					if (stdout) return shoNherly(stdout);
				});
				}
			break
			case 'return':
			{
			updatePopularCommand(command);
				const levelUpMessage = levelUpdate(command, m.sender); // Update level pengguna
				if (!isShoNheOwn) return;

				function Return(sul)
				{
					const sat = JSON.stringify(sul, null, 2);
					const bang = util.format(sat) || util.format(sul);
					return shoNherly(bang);
				}
				try
				{
					shoNherly(util.format(eval(`(async () => { return ${text} })()`)));
				}
				catch (err)
				{
					shoNherly(String(err));
				}
				}
			break
			
			// AutoAI Message Handling
			default:
				// Jika AutoAI aktif dan pengirim bukan bot atau respons dari AI, proses pesan
				if (autoAiStatus && m.sender !== botNumber && !(m.quoted && m.quoted.sender === botNumber) && !m.key.fromMe)
				{
					const chatId = m.chat; // Gunakan ID chat untuk membedakan percakapan
					const userMessage = m.text;
					// Inisialisasi riwayat percakapan jika belum ada
					if (!conversationHistory[chatId])
					{
						conversationHistory[chatId] = [
						{
							role: "system",
							content: prompt
						}];
					}
					// Tambahkan pesan pengguna ke riwayat percakapan
					conversationHistory[chatId].push(
					{
						role: "user",
						content: userMessage
					});
					// Buat prompt tanpa format "User:" atau "AI:"
					const fullPrompt = conversationHistory[chatId].map(entry => entry.content) // Hanya ambil isi pesan
						.join("\n");
					try
					{
						let hasil = await yanzGpt(fullPrompt); // Kirim riwayat ke AI
						const aiReply = hasil.choices[0].message.content;
						// Tambahkan balasan AI ke riwayat percakapan
						conversationHistory[chatId].push(
						{
							role: "ai",
							content: aiReply
						});
						// Kirim balasan ke pengguna
						shoNherly(aiReply);
						// Tambahkan pencatatan command
						updatePopularCommand('ai');
					}
					catch (e)
					{
						try
						{
							let hasil = await bk9Ai(fullPrompt);
							const aiReply = hasil.BK9;
							// Tambahkan balasan AI ke riwayat percakapan
							conversationHistory[chatId].push(
							{
								role: "ai",
								content: aiReply
							});
							// Kirim balasan ke pengguna
							shoNherly(aiReply);
							updatePopularCommand('ai');
						}
						catch (e)
						{
							shoNherly(pickRandom(['Fitur AI sedang bermasalah!', 'Tidak dapat terhubung ke AI!', 'Sistem AI sedang sibuk sekarang!', 'Fitur sedang tidak dapat digunakan!', ]));
						}
					}
				}
				if ((budy) && ["assalamu'alaikum", "Assalamu'alaikum", "Assalamualaikum", "assalamualaikum", "Assalammualaikum", "assalammualaikum", "Asalamualaikum", "asalamualaikum", "Asalamu'alaikum", " asalamu'alaikum"].includes(budy) && !isCmd)
				{
					shoNhe.sendMessage(from,
					{
						text: `${pickRandom(["*Wa'alaikumussalam*","*Wa'alaikumussalam Wb.*","*Wa'alaikumussalam Wr. Wb.*","*Wa'alaikumussalam Warahmatullahi Wabarakatuh*"])}`
					})
				}
					if ((budy) && ["virtex","bug"].includes(budy) && !isCmd)
				{
					shoNhe.sendMessage(from,
					{
						text: `${pickRandom(["Wa'alaikumussalam"])}`
					})
				}
				if ((budy) && ["tes", "Tes", "TES", "Test", "test"].includes(budy) && !isCmd)
				{
					shoNhe.sendMessage(from,
					{
						text: `*${runtime(os.uptime())}*⏰`
					})
				}
				if (budy.startsWith('=>'))
				{
					if (!isShoNheOwn) return

					function Return(sul)
					{
						sat = JSON.stringify(sul, null, 2)
						bang = util.format(sat)
						if (sat == undefined)
						{
							bang = util.format(sul)
						}
						return shoNherly(bang)
					}
					try
					{
						shoNherly(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
					}
					catch (e)
					{
						shoNherly(String(e))
					}
				}
				if (budy.startsWith('>'))
				{
					if (!isShoNheOwn) return
					let kode = budy.trim().split(/ +/)[0]
					let teks
					try
					{
						teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
					}
					catch (e)
					{
						teks = e
					}
					finally
					{
						await shoNherly(require('util').format(teks))
					}
				}
				if (budy.startsWith('$'))
				{
					if (!isShoNheOwn) return
					exec(budy.slice(2), (err, stdout) =>
					{
						if (err) return shoNherly(`${err}`)
						if (stdout) return shoNherly(stdout)
					})
				}
		}
	}
	catch (err)
	{
		console.log(util.format(err))
	}
}
let file = require.resolve(__filename)
fs.watchFile(file, () =>
{
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})

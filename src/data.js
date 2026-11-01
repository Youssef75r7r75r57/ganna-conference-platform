const lectureImage1 = new URL("./assets/lecture-1.webp", import.meta.url).href;
const lectureImage2 = new URL("./assets/lecture-2.webp", import.meta.url).href;
const lectureImage3 = new URL("./assets/lecture-3.webp", import.meta.url).href;
const lectureImage4 = new URL("./assets/lecture-4.webp", import.meta.url).href;
const lectureImage5 = new URL("./assets/lecture-5.webp", import.meta.url).href;
const galleryImages = [
  new URL("./assets/gallery-1.webp", import.meta.url).href,
  new URL("./assets/gallery-2.webp", import.meta.url).href,
  new URL("./assets/gallery-3.webp", import.meta.url).href,
  new URL("./assets/gallery-4.webp", import.meta.url).href,
  new URL("./assets/gallery-5.webp", import.meta.url).href,
];
const monaAttendanceDemoCertificate = new URL("./assets/certificates/mona-attendance-demo.pdf", import.meta.url).href;
const tariqCmeDemoCertificate = new URL("./assets/certificates/tariq-cme-demo.pdf", import.meta.url).href;
const monaAttendanceDemoCertificateImage = new URL("./assets/certificates/mona-attendance-demo.webp", import.meta.url).href;
const tariqCmeDemoCertificateImage = new URL("./assets/certificates/tariq-cme-demo.webp", import.meta.url).href;

export const GUIDELINES_PLATFORM_URL = "https://ehc-obgyn-gl.vercel.app/";

export const brandLogos = {
  companyDark: new URL("./assets/company-logo-dark.webp", import.meta.url).href,
  companyLight: new URL("./assets/company-logo-light.webp", import.meta.url).href,
  mainDark: new URL("./assets/main-logo-dark.webp", import.meta.url).href,
  mainLight: new URL("./assets/main-logo-light.webp", import.meta.url).href,
  hospitalDark: new URL("./assets/ganna-hospitals-dark.webp", import.meta.url).href,
  hospitalLight: new URL("./assets/ganna-hospitals-light.webp", import.meta.url).href,
};

export const conferences = [
  {
    id: "ganna-2026",
    year: "2026",
    title: { ar: "المؤتمر العلمي الخامس عشر لجنى", en: "Ganna 15th Scientific Conference" },
    theme: { ar: "معًا من أجل صحة المرأة", en: "Together for women's health" },
    date: { ar: "٢٣ أكتوبر ٢٠٢٦", en: "23 October 2026" },
    eventDate: { ar: "٢٣ أكتوبر ٢٠٢٦", en: "23 October 2026" },
    location: { ar: "فندق سميراميس إنتركونتيننتال، القاهرة", en: "Semiramis InterContinental, Cairo" },
  },
];

export const stats = [
  { value: "١٥", enValue: "15th", count: 15, suffix: { ar: "", en: "th" }, label: { ar: "المؤتمر العلمي", en: "Scientific conference" } },
  { value: "٥٠", enValue: "50", count: 50, suffix: { ar: "", en: "" }, label: { ar: "عدد الحاضرين", en: "Attendees" } },
  { value: "٢٣", enValue: "23 Oct", count: 23, suffix: { ar: "", en: " Oct" }, label: { ar: "أكتوبر ٢٠٢٦", en: "Conference date · 2026" } },
  { value: "القاهرة", enValue: "Cairo", label: { ar: "فندق سميراميس إنتركونتيننتال", en: "Semiramis InterContinental" } },
];

const lectureHalls = {
  A: { en: "Hall A · Obstetrics", ar: "القاعة A · التوليد" },
  B: { en: "Hall B · Gynecology", ar: "القاعة B · أمراض النساء" },
  C: { en: "Hall C · Embryology Day", ar: "القاعة C · يوم علم الأجنة" },
  D: { en: "Hall D · Advanced Obstetrics Workshop", ar: "القاعة D · ورشة التوليد المتقدمة" },
};

const lectureSpecialties = {
  obstetrics: { en: "Obstetrics", ar: "التوليد" },
  gynecology: { en: "Gynecology", ar: "أمراض النساء" },
  fertility: { en: "Fertility", ar: "الخصوبة" },
  embryology: { en: "Embryology", ar: "علم الأجنة" },
  maternalFetal: { en: "Maternal-fetal medicine", ar: "طب الأم والجنين" },
  conference: { en: "Conference programme", ar: "برنامج المؤتمر" },
};

const lectureProgramme = [
  ["obesity-pregnancy", "Gs for Obesity with Pregnancy", "Dr. Mohamed Magdy", "obstetrics", "A", "10:00–10:20 AM"],
  ["travel-pregnancy", "Gs for Travel During Pregnancy", "Dr. Islam Elkhatib", "obstetrics", "A", "10:20–10:40 AM"],
  ["exercise-pregnancy", "Gs for Exercise During Pregnancy", "Dr. Kareem Fawzy", "obstetrics", "A", "10:40–11:00 AM"],
  ["living-document", "The Living Document", "Dr. Raouf Roshdy", "obstetrics", "A", "11:00–11:20 AM"],
  ["third-trimester-isUOG", "The Third Trimester Scan: ISUOG Guidelines for Indications and Recommendations", "Dr. Mohamed Ihab", "obstetrics", "A", "11:20–11:40 AM"],
  ["guidelines-value-terminology", "Value and Terminology in Guidelines", "Dr. Mohamed Salama", "obstetrics", "A", "11:40 AM–12:00 PM"],
  ["joint-opening-plenary", "Opening Ceremony & Joint Plenary Session", "Dr. Ahmed Youssef · Dr. Gamal Yousef · Dr. Raouf Roshdy", "conference", "A", "1:00–1:30 PM"],
  ["guidelines-limitations-cons", "Gs: Limitations & Cons", "Prof. Salah Sanad", "obstetrics", "A", "1:30–2:00 PM"],
  ["antenatal-care", "Gs for Antenatal Care", "Prof. El-Sayed El-Badawy", "obstetrics", "A", "2:00–2:20 PM"],
  ["intrapartum-care", "Gs for Intrapartum Care", "Prof. Mahmoud Abdelaaleem", "obstetrics", "A", "2:20–2:40 PM"],
  ["fetal-echo-guidelines", "Fetal Echo Guidelines", "Prof. Sahar Shaker", "maternalFetal", "A", "2:40–2:55 PM"],
  ["pelvic-endometriosis-guidelines", "Paradigm Shift in the Management of Pelvic Endometriosis with Chronic Pelvic Pain", "Prof. Mohamed Abdelsalam", "obstetrics", "A", "2:55–3:10 PM"],
  ["reducing-cs-rates-egypt", "Gs for Reducing CS Rates in Egypt", "Prof. Abdelhamid Attia", "obstetrics", "A", "3:20–3:40 PM"],
  ["preeclampsia-guidelines", "Gs for Pre-eclampsia", "Prof. Ayman Hany", "obstetrics", "A", "3:40–4:00 PM"],
  ["premature-rupture-membranes", "Gs for Premature Rupture of Membranes", "Prof. Diaa El-Nashar", "obstetrics", "A", "4:00–4:20 PM"],
  ["recurrent-pregnancy-loss", "Gs for Recurrent Pregnancy Loss", "Prof. Ahmed Fayek", "obstetrics", "A", "4:20–4:40 PM"],
  ["placenta-previa", "Gs for Placenta Previa", "Dr. Yehia Shawki", "obstetrics", "A", "4:40–5:00 PM"],
  ["progestagen-pregnancy", "Uses of Progestagen in Pregnancy: Comparison of Recent Guidelines", "Prof. Abobakr Elnashar", "obstetrics", "A", "5:00–5:20 PM"],
  ["rx-health-symposium", "RX Health Symposium", "Speaker not specified in the programme", "conference", "A", "5:20–5:40 PM"],
  ["ectopic-pregnancy-guidelines", "Gs for Ectopic Pregnancy", "Prof. Magdy Ibrahim", "obstetrics", "A", "5:40–6:00 PM"],
  ["stress-incontinence", "Stress Incontinence", "Prof. Reham Foad", "obstetrics", "A", "6:00–6:20 PM"],
  ["personal-branding-obgyn", "The Power of Personal Branding in OB/GYN", "Prof. Ahmed Sherif", "obstetrics", "A", "6:20–6:40 PM"],
  ["sickle-cell-guidelines", "Sickle Cell Anemia Guidelines", "Prof. Ahmed Abbas", "obstetrics", "A", "6:40–7:00 PM"],
  ["vaginitis-guidelines", "Gs for Vaginitis", "Dr. Abdullah Elbehiery", "gynecology", "B", "10:00–10:20 AM"],
  ["ivf-addons", "Gs for IVF Add-ons", "Dr. Zeyad Yousef", "fertility", "B", "10:20–10:40 AM"],
  ["male-fertility-guidelines", "Gs for Male Fertility", "Dr. Mohamed Omar", "fertility", "B", "10:40–11:00 AM"],
  ["chronic-pelvic-pain-guidelines", "Gs for Chronic Pelvic Pain", "Prof. Mohamed Yousef", "gynecology", "B", "11:00–11:20 AM"],
  ["pgta-guidelines", "Gs for PGT-A", "Dr. Mohamed El-Sherbiny", "fertility", "B", "11:20–11:40 AM"],
  ["unexplained-infertility-critique", "Criticizing the Guidelines of Diagnosis and Management of Unexplained Infertility", "Prof. Ahmed Badawy", "fertility", "B", "11:40 AM–12:00 PM"],
  ["fertility-preservation-guidelines", "Gs for Fertility Preservation", "Prof. Amal Shohayeb", "fertility", "B", "1:30–1:50 PM"],
  ["ohss-guidelines", "Gs for OHSS", "Prof. Abdel Meguid Sarhan", "fertility", "B", "1:50–2:10 PM"],
  ["adolescent-gynecology-guidelines", "Gs for Adolescent Gynecology", "Prof. Ahmed Fawzy Galal", "gynecology", "B", "2:10–2:30 PM"],
  ["myoma-guidelines", "Gs for Myoma", "Dr. Salma Abdelrahman", "gynecology", "B", "2:30–2:50 PM"],
  ["reproductive-genomics", "Reproductive Genomics From Diagnosis to Management", "Prof. Ezzat Elsobky", "fertility", "B", "2:50–3:10 PM"],
  ["endometriosis-guidelines", "Gs for Endometriosis", "Dr. Ayman Hany Shehata", "gynecology", "B", "3:20–3:40 PM"],
  ["hpv-management-guidelines", "Gs for HPV Management", "Prof. Alaa Ismail", "gynecology", "B", "3:40–4:00 PM"],
  ["pcos-guidelines", "Gs for PCOS", "Prof. Ahmed Sawaf", "gynecology", "B", "4:00–4:20 PM"],
  ["unexplained-infertility-guidelines", "Gs for Unexplained Infertility", "Prof. Amr Fathy", "fertility", "B", "4:20–4:40 PM"],
  ["pid-guidelines", "Gs for PID", "Prof. Hesham Aboutalib", "gynecology", "B", "4:40–5:00 PM"],
  ["rif-guidelines", "Gs for RIF", "Prof. Adel Shafik", "fertility", "B", "5:00–5:20 PM"],
  ["ovarian-stimulation-guidelines", "Gs for Ovarian Stimulation", "Dr. Ibrahim Fawzy", "fertility", "B", "5:20–5:40 PM"],
  ["endometrial-hyperplasia-guidelines", "Gs for Endometrial Hyperplasia", "Dr. Ahmed Seketory", "gynecology", "B", "5:40–6:00 PM"],
  ["cin-screening-guidelines", "WHO 2026 Guideline for Screening and Treatment of CIN", "Prof. Abobakr Elnashar", "gynecology", "B", "6:00–6:20 PM"],
  ["oocyte-organelle-mapping", "AI-Driven 3D Organelle Mapping for Non-Invasive Assessment of Human Oocyte Using HoloTomography", "Dr. Rami Wakim", "embryology", "B", "6:20–6:40 PM"],
  ["oocyte-preservation-guidelines", "Gs for Oocyte Preservation", "Dr. Dalia Ayman", "fertility", "B", "6:40–7:00 PM"],
  ["pgta-accuracy", "Understanding PGT-A Accuracy: Transfer, Re-biopsy, or Discard?", "Dr. Mohamed El Zayat", "embryology", "C", "2:00–2:30 PM"],
  ["ivf-laboratory-quality", "Proving Control: The Science of IVF Laboratory Quality", "Dr. Mohamed Fawzy", "embryology", "C", "2:30–3:00 PM"],
  ["perfect-ivf-laboratory", "The Perfect IVF Laboratory: Is It Possible?", "Moderator: Dr. Mohamed Saied · Dr. Ashraf Nasr · Dr. Nehal Adel · Dr. Sara Nabil · Dr. Sameh Zakarya · Dr. Eman El Gendy", "embryology", "C", "3:00–4:30 PM"],
  ["oocyte-embryo-vitrification", "Hands On – Vitrification and Warming of Oocyte and Embryo", "Dr. Omnia Abdallah · Dr. Marwa Zamzam · Dr. Aman Sorur · Dr. Mohamed Hesham · Dr. Dina Ibrahim", "embryology", "C", "4:30–6:00 PM"],
  ["fetal-git-anomaly-scan", "Fetal GIT Anomaly Scan", "Prof. Rasha Kamel", "maternalFetal", "D", "10:00–11:00 AM"],
  ["fetal-posterior-fossa-scan", "Fetal Post. Fossa Scan", "Prof. Sherif Negm", "maternalFetal", "D", "11:00 AM–12:00 PM"],
  ["fetal-facial-anomaly-scan", "Fetal Facial Anomaly Scan", "Prof. Adel Gamil", "maternalFetal", "D", "1:00–2:00 PM"],
  ["early-detection-major-anomalies", "Early Detection of Major Anomalies", "Dr. Mohamed Elsaid Emam", "maternalFetal", "D", "2:00–3:00 PM"],
  ["fetal-renal-anomalies", "Fetal Renal Anomalies", "Prof. Mohamed Ehab", "maternalFetal", "D", "3:30–4:30 PM"],
  ["fetal-echo-cardiac-anomalies", "Fetal Echo for Cardiac Anomalies", "Dr. Monira Aly", "maternalFetal", "D", "4:30–5:30 PM"],
];

const lectureImages = [lectureImage1, lectureImage2, lectureImage3, lectureImage4, lectureImage5];

export const lectures = lectureProgramme.map(([id, title, speaker, specialty, hall, time], index) => ({
  id,
  title: { ar: title, en: title },
  speaker: { ar: speaker, en: speaker },
  specialty: lectureSpecialties[specialty],
  session: lectureHalls[hall],
  summary: {
    ar: `${lectureHalls[hall].ar} · ${time} · 23 أكتوبر 2026`,
    en: `${lectureHalls[hall].en} · ${time} · 23 October 2026`,
  },
  time,
  image: lectureImages[index % lectureImages.length],
}));

export const gallery = [
  { title: { ar: "من أجواء مؤتمر جنى", en: "At Ganna Conference" }, category: { ar: "الفعاليات", en: "Highlights" }, image: galleryImages[0] },
  { title: { ar: "لقاء يجمع الخبرات", en: "Expertise brought together" }, category: { ar: "الجلسات العلمية", en: "Scientific sessions" }, image: galleryImages[1] },
  { title: { ar: "لحظات من المجتمع الطبي", en: "Moments from our medical community" }, category: { ar: "المجتمع", en: "Community" }, image: galleryImages[2] },
  { title: { ar: "معًا من أجل صحة المرأة", en: "Together for women's health" }, category: { ar: "الجلسات العلمية", en: "Scientific sessions" }, image: galleryImages[3] },
  { title: { ar: "تفاصيل من رحلتنا", en: "Highlights from our journey" }, category: { ar: "الفعاليات", en: "Highlights" }, image: galleryImages[4] },
];

export const videos = [
  { title: { ar: "افتتاح المؤتمر العلمي", en: "Scientific conference opening" }, speaker: { ar: "البرنامج التجريبي", en: "Illustrative programme" }, duration: "04:32", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=85" },
  { title: { ar: "أبرز محاور التوليد وأمراض النساء", en: "Obstetrics and gynecology highlights" }, speaker: { ar: "البرنامج التجريبي", en: "Illustrative programme" }, duration: "02:18", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=85" },
  { title: { ar: "حوار حول الخصوبة وعلم الأجنة", en: "A conversation on fertility and embryology" }, speaker: { ar: "جلسة حوارية تجريبية", en: "Illustrative panel" }, duration: "12:45", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=85" },
];

export const labels = {
  ar: {
    home: "الرئيسية", about: "عن المؤتمر", certificates: "الشهادات", gallery: "معرض الصور", videos: "الفيديوهات", lectures: "المحاضرات", guidelines: "الإرشادات الطبية", hospital: "مستشفى جنى", ask: "اسأل الخبراء", register: "التسجيل", contact: "تواصل معنا",
  },
  en: {
    home: "Home", about: "About", certificates: "Certificates", gallery: "Gallery", videos: "Videos", lectures: "Lectures", guidelines: "Medical guidelines", hospital: "Ganna Hospital", ask: "Ask the experts", register: "Register", contact: "Contact",
  },
};

export const demoCertificates = [
  { id: "DEMO-2026-001", name: "Dr. Mona Mohammed Abdelgader Mohammed", type: "conference", imageUrl: monaAttendanceDemoCertificateImage, previewUrl: monaAttendanceDemoCertificate, downloadUrl: monaAttendanceDemoCertificate },
  { id: "DEMO-2026-002", name: "Dr. Tariq Abdullah Al omari", type: "cme", phone: "01203350245", imageUrl: tariqCmeDemoCertificateImage, previewUrl: tariqCmeDemoCertificate, downloadUrl: tariqCmeDemoCertificate },
];

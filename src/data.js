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
  { value: "١٥", enValue: "15th", label: { ar: "المؤتمر العلمي", en: "Scientific conference" } },
  { value: "٤", enValue: "4", label: { ar: "قاعات علمية", en: "Scientific halls" } },
  { value: "٢٣", enValue: "23 Oct", label: { ar: "أكتوبر ٢٠٢٦", en: "Conference date · 2026" } },
  { value: "القاهرة", enValue: "Cairo", label: { ar: "فندق سميراميس إنتركونتيننتال", en: "Semiramis InterContinental" } },
];

export const lectures = [
  {
    id: "pregnancy-guidelines",
    title: { ar: "الإرشادات الطبية أثناء الحمل", en: "Guidelines for Care During Pregnancy" },
    speaker: { ar: "البرنامج العلمي التجريبي", en: "Illustrative programme entry" },
    specialty: { ar: "التوليد", en: "Obstetrics" },
    session: { ar: "جلسات التوليد", en: "Obstetrics sessions" },
    summary: {
      ar: "نموذج توضيحي مستوحى من محاور برنامج المؤتمر حول الإرشادات والرعاية أثناء الحمل.",
      en: "An illustrative entry inspired by the conference programme's pregnancy-care and guidelines topics.",
    },
    topics: {
      ar: ["السمنة أثناء الحمل", "السفر والرياضة أثناء الحمل", "متابعة الحمل"],
      en: ["Obesity in pregnancy", "Travel and exercise during pregnancy", "Antenatal care"],
    },
    image: lectureImage1,
  },
  {
    id: "gynecology-guidelines",
    title: { ar: "الإرشادات في صحة المرأة", en: "Guidelines in Women's Health" },
    speaker: { ar: "البرنامج العلمي التجريبي", en: "Illustrative programme entry" },
    specialty: { ar: "أمراض النساء", en: "Gynecology" },
    session: { ar: "جلسات أمراض النساء", en: "Gynecology sessions" },
    summary: {
      ar: "محتوى تجريبي يستعرض محاور نسائية وردت في البرنامج، مثل الألم المزمن وبطانة الرحم المهاجرة.",
      en: "Sample content covering programme themes such as chronic pelvic pain and endometriosis.",
    },
    topics: {
      ar: ["الألم المزمن بالحوض", "بطانة الرحم المهاجرة", "صحة المرأة"],
      en: ["Chronic pelvic pain", "Endometriosis", "Women's health"],
    },
    image: lectureImage2,
  },
  {
    id: "fertility-ivf",
    title: { ar: "الخصوبة وتقنيات الإخصاب المساعد", en: "Fertility and Assisted Reproduction" },
    speaker: { ar: "البرنامج العلمي التجريبي", en: "Illustrative programme entry" },
    specialty: { ar: "الخصوبة", en: "Fertility" },
    session: { ar: "جلسات الخصوبة", en: "Fertility sessions" },
    summary: {
      ar: "ملخص تصميمي لمحاور البرنامج المرتبطة بالخصوبة والإخصاب المساعد، وليس إرشادًا طبيًا.",
      en: "A design-demo summary of fertility and assisted-reproduction themes, not medical advice.",
    },
    topics: {
      ar: ["تقنيات الإخصاب المساعد", "حفظ الخصوبة", "محاور بحثية في الخصوبة"],
      en: ["Assisted reproduction", "Fertility preservation", "Fertility research themes"],
    },
    image: lectureImage3,
  },
  {
    id: "embryology",
    title: { ar: "علم الأجنة وتقنيات المختبر", en: "Embryology and Laboratory Practice" },
    speaker: { ar: "البرنامج العلمي التجريبي", en: "Illustrative programme entry" },
    specialty: { ar: "علم الأجنة", en: "Embryology" },
    session: { ar: "يوم علم الأجنة", en: "Embryology day" },
    summary: {
      ar: "محتوى تجريبي عن يوم علم الأجنة وجودة المختبر، كما وردت موضوعاتهما في البرنامج.",
      en: "Sample content about the embryology day and laboratory quality topics listed in the programme.",
    },
    topics: {
      ar: ["جودة مختبر الإخصاب", "دقة الفحوص الجينية للأجنة", "حفظ البويضات والأجنة"],
      en: ["IVF laboratory quality", "Embryo genetic-testing accuracy", "Oocyte and embryo preservation"],
    },
    image: lectureImage4,
  },
  {
    id: "fetal-imaging",
    title: { ar: "تصوير الجنين والإرشادات التشخيصية", en: "Fetal Imaging and Diagnostic Guidance" },
    speaker: { ar: "البرنامج العلمي التجريبي", en: "Illustrative programme entry" },
    specialty: { ar: "طب الأم والجنين", en: "Maternal-fetal medicine" },
    session: { ar: "ورشة التوليد المتقدمة", en: "Advanced obstetrics workshop" },
    summary: {
      ar: "نموذج عرض لمحاور تصوير الجنين والإرشادات التشخيصية المذكورة في برنامج المؤتمر.",
      en: "A sample entry for fetal-imaging and diagnostic-guidance topics listed in the programme.",
    },
    topics: {
      ar: ["فحص الثلث الثالث", "تصوير قلب الجنين", "فحوص تشوهات الجنين"],
      en: ["Third-trimester scans", "Fetal echocardiography", "Fetal anomaly scans"],
    },
    image: lectureImage5,
  },
];

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

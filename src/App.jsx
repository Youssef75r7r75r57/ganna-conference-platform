import React, { useEffect, useState } from "react";
import {
  Activity, ArrowDown, ArrowLeft, ArrowUpLeft, Award, Baby, BookOpen,
  CalendarDays, Check, ChevronDown, CircleHelp, ClipboardList, ExternalLink,
  FileCheck2, HeartPulse, Hospital, Image as ImageIcon, Languages, Link2, Mail,
  MapPin, Menu, Play, Plus, Search, Settings, Shield, ShieldCheck, Sparkles,
  Stethoscope, UserCog, Users, Video, X,
} from "lucide-react";
import { api } from "./api.js";
import { conferences, gallery, labels, lectures, stats, videos } from "./data.js";

const copy = {
  ar: {
    tagline: "مؤتمر جنى الطبي", homeEyebrow: "معًا نصنع فرقًا في صحة الطفل",
    heroTitle: "المعرفة التي\nتصنع فرقًا.", heroText: "مساحة تجمع الخبرة الإنسانية بالعلم الحديث، وتفتح حوارًا جديدًا حول مستقبل الرعاية الصحية للأطفال.",
    explore: "اكتشف المؤتمر", registerNow: "سجّل اهتمامك", scroll: "اكتشف المزيد",
    nextConference: "المؤتمر القادم", nextTheme: "رعاية أفضل تبدأ بفكرة.", nextDate: "قريبًا · القاهرة، مصر",
    statsTitle: "أثرٌ يكبر كل عام", statsText: "رحلة علمية يشارك في صنعها أطباء وخبراء ومهتمون بصحة الطفل.",
    aboutEyebrow: "عن المؤتمر", aboutTitle: "لأن كل طفل يستحق بداية أفضل.", aboutText: "مؤتمر جنى مساحة علمية وإنسانية تجمع المتخصصين لمشاركة المعرفة، واستكشاف أحدث الممارسات، وبناء مجتمع يؤمن بأن رعاية الطفل تبدأ بالاستماع إليه.",
    learnMore: "تعرف على المؤتمر", highlight: "من قلب المؤتمر", galleryTitle: "لحظات تبقى معنا", viewGallery: "شاهد معرض الصور",
    scienceEyebrow: "المعرفة في متناولك", lecturesTitle: "أفكار تستحق أن تُروى.", lecturesText: "ملخصات علمية لأبرز الجلسات والمتحدثين، لتبقى المعرفة قريبة منك.", browseLectures: "استكشف المحاضرات",
    guideEyebrow: "مرجعك العلمي", guideTitle: "دليل موثوق، بخطوة واحدة.", guideText: "اكتشف المراجع الطبية والإرشادات المعتمدة عبر منصة الجايدلاينز.", guideButton: "اكتشف الجايدلاينز",
    ctaTitle: "مكانك بيننا.", ctaText: "انضم إلى مجتمع مهني يؤمن أن تبادل المعرفة هو أول طريق التغيير.", ctaButton: "ابدأ التسجيل",
    footerText: "مجتمع علمي يصنع فرقًا في رعاية الأطفال.", quickLinks: "روابط سريعة", contactUs: "تواصل معنا", followUs: "تابع رحلتنا", rights: "جميع الحقوق محفوظة لمؤتمر جنى",
    aboutPageEyebrow: "حكايتنا", aboutPageTitle: "نؤمن أن الرعاية الأفضل تبدأ بالمعرفة.", aboutPageLead: "مؤتمر جنى الطبي مساحة تجمع العلم والإنسانية، وتقرّب الخبرة من كل من يسعى لمستقبل صحي أفضل للأطفال.",
    vision: "رؤيتنا", visionText: "مجتمع صحي يملك المعرفة والأدوات لصناعة مستقبل أفضل لكل طفل.", mission: "رسالتنا", missionText: "تمكين مقدمي الرعاية بالعلم والحوار والتعاون متعدد التخصصات.",
    goals: "ما نسعى إليه", goal1: "تعزيز الممارسات المبنية على الدليل العلمي.", goal2: "خلق مساحة حوار بين الخبراء ومقدمي الرعاية.", goal3: "دعم التعلم المستمر وتحسين جودة الخدمات.", goal4: "الاحتفاء بكل خطوة نحو صحة أفضل للطفل.",
    principles: "قيم تجمعنا", principle1: "العلم أولًا", principle2: "الطفل في القلب", principle3: "نعمل معًا", principle4: "أثر يدوم",
    pageCertificates: "شهاداتك هنا", certTitle: "ابحث عن شهادتك.", certText: "اكتب الاسم المسجل في المؤتمر للبحث عن الشهادة. شهادات العرض هنا تجريبية وليست ملفات قابلة للتنزيل.",
    certType: "نوع الشهادة", allTypes: "كل الشهادات", regular: "شهادة حضور", cma: "شهادة Certified CMA", registeredName: "الاسم المسجل", namePlaceholder: "مثال: سارة أحمد", certSearch: "ابحث عن شهادة", searching: "جارٍ البحث...", noCert: "لم نعثر على شهادة مطابقة. تأكد من كتابة الاسم كما سُجّل.", certFound: "شهادات مطابقة", preview: "معاينة", download: "تنزيل PDF", demoUnavailable: "التنزيل والمعاينة الفعلية يحتاجان ربطًا آمنًا بـ OneDrive عبر الـbackend.",
    pageGallery: "ألبومات المؤتمر", galleryPageTitle: "حكايات في صور.", allAlbums: "الكل", albumEvents: "الفعاليات", albumSessions: "الجلسات العلمية", albumCommunity: "المجتمع", photoNote: "صور تجريبية — تُدار الألبومات من لوحة التحكم بعد ربط الخدمة.",
    pageVideos: "من أرشيفنا", videosTitle: "شاهد، وتذكّر، وتعلّم.", watch: "شاهد الفيديو", videoDemo: "الفيديوهات المعروضة نماذج تصميمية؛ تضاف روابط البث من لوحة المحتوى.",
    pageLectures: "مكتبة المعرفة", lecturePageTitle: "العلم يستمر بعد الجلسة.", filterBy: "تصفية حسب", filterSpecialty: "التخصص", filterSpeaker: "المتحدث", filterSession: "الجلسة العلمية", allSpecialties: "كل التخصصات", allSpeakers: "كل المتحدثين", allSessions: "كل الجلسات", viewDetails: "تفاصيل المحاضرة", speaker: "المتحدث", specialty: "التخصص", session: "الجلسة العلمية", lectureOverview: "نبذة عن المحاضرة", keyTopics: "محاور أساسية", keyTakeaway: "الفكرة الأهم", takeawayText: "المعرفة العلمية تكتمل حين تتحول إلى رعاية أفضل وأكثر إنسانية لكل طفل.", noLectures: "لا توجد محاضرات ضمن هذا الاختيار.",
    pageGuidelines: "دليلك الطبي", guidePageTitle: "المعرفة الموثوقة، أقرب إليك.", guidePageText: "استكشف المراجع والإرشادات الطبية المعتمدة من خلال منصة الجايدلاينز المرتبطة بالمؤتمر.", openSearch: "افتح البحث في الجايدلاينز", accessPlatform: "زيارة المنصة السابقة", externalPending: "سيُضاف رابط المنصة السابقة بعد تأكيده من إدارة المؤتمر. يمكن توصيله من ملف إعدادات الواجهة.",
    pageHospital: "مكان الرعاية تبدأ", hospitalTitle: "مستشفى جنى للأطفال.", hospitalText: "رعاية متخصصة، واهتمام إنساني، ومساحة آمنة لكل طفل وعائلته. تعرّف على المستشفى وخدماته وتخصصاته.", hospitalServices: "خدمات وتخصصات", service1: "طب الأطفال العام", service2: "رعاية حديثي الولادة", service3: "النمو والتطور", service4: "الرعاية المتكاملة للأسرة", hospitalVision: "رؤيتنا في الرعاية", hospitalVisionText: "أن تكون كل زيارة بداية مطمئنة، وأن يجد كل طفل رعاية تحترم احتياجاته وتدعم أسرته.",
    pageAsk: "نسمعك باهتمام", askTitle: "اسأل الخبراء.", askText: "أرسل سؤالك إلى إدارة المؤتمر. تتم مراجعته وتوجيهه للمختص عند الحاجة. لا يُعد هذا النموذج خدمة طوارئ أو استشارة طبية مباشرة.", fullName: "الاسم بالكامل", email: "البريد الإلكتروني", phone: "رقم الهاتف", yourQuestion: "سؤالك", questionPlaceholder: "اكتب سؤالك هنا...", submitQuestion: "إرسال السؤال", submitting: "جارٍ الإرسال...", privateNote: "سؤالك وبياناتك خاصة، ولا تظهر للزوار.", sentQuestion: "تم إرسال سؤالك بنجاح", questionId: "رقم السؤال", questionDisclaimer: "إرسال السؤال لا يضمن الرد الطبي أو الاستشاري.", consentPrivacy: "أوافق على سياسة الخصوصية ومعالجة بياناتي لغرض الرد على طلبي.",
    pageRegister: "خطوتك الأولى", registerTitle: "سجّل للمؤتمر القادم.", registerText: "املأ بياناتك لتقديم طلب التسجيل. ستقوم إدارة المؤتمر بمراجعته يدويًا.", participantType: "صفة المشارك", choose: "اختر", doctor: "طبيب / طبيبة", student: "طالب / طالبة طب", uploadDocument: "إثبات الصفة", uploadHint: "PDF أو JPG أو PNG — الحد الأقصى 10MB", documentRequired: "يرجى إرفاق كارنيه النقابة أو إثبات قيد الجامعة.", registrationConsent: "أوافق على سياسة الخصوصية ومعالجة بياناتي لغرض مراجعة التسجيل.", submitRegistration: "إرسال طلب التسجيل", sentRegistration: "تم استلام طلب التسجيل", registrationId: "رقم التسجيل", approvalNote: "سيظهر الطلب لدى إدارة المؤتمر للمراجعة والموافقة اليدوية.", selectFile: "اختر ملفًا",
    pageContact: "نحن هنا", contactTitle: "يسعدنا أن نسمع منك.", contactText: "للاستفسارات العامة والتعاون، تواصل مع فريق مؤتمر جنى.", emailUs: "راسلنا", location: "الموقع", locationValue: "القاهرة، جمهورية مصر العربية", conferenceOffice: "مكتب المؤتمر", officeText: "فريق جنى الطبي · الأحد إلى الخميس", sendEmail: "إرسال بريد إلكتروني", contactNote: "للاستفسارات العلمية، يُرجى استخدام نموذج اسأل الخبراء.",
    pagePrivacy: "خصوصيتك أولوية", privacyTitle: "خصوصيتك جزء من ثقتنا.", privacyLead: "نلتزم بالحفاظ على بياناتك والتعامل معها فقط للأغراض التي جُمعت من أجلها، وفق السياسة المعتمدة من إدارة المؤتمر.",
    privacy1Title: "البيانات التي نجمعها", privacy1Text: "بيانات التواصل والتسجيل والأسئلة التي تقدمها طوعًا عبر نماذج الموقع، إضافة إلى المستندات المطلوبة للتحقق من صفة المشارك عند التسجيل.", privacy2Title: "كيف نستخدم البيانات", privacy2Text: "لمراجعة طلبات التسجيل، والرد على الأسئلة، وإدارة المشاركة في المؤتمر. لا تظهر الأسئلة أو البيانات الشخصية على الموقع العام.", privacy3Title: "الحماية والوصول", privacy3Text: "تقتصر صلاحية الاطلاع على مسؤولي المؤتمر المخولين. يتطلب حفظ البيانات الفعلي وتطبيق ضوابط الوصول ربطًا آمنًا بالـbackend.", privacy4Title: "الشهادات", privacy4Text: "تُحفظ الشهادات على OneDrive ولا ينبغي إتاحة المجلدات للعامة. البحث والمعاينة والتنزيل الفعلية تتطلب تكاملًا آمنًا عبر الـbackend.", privacy5Title: "الاحتفاظ بالبيانات", privacy5Text: "تحدد إدارة المؤتمر مدة الاحتفاظ المناسبة وآلية الحذف عند انتهاء الغرض من البيانات.", privacyDemo: "ملاحظة: هذه نسخة واجهة تجريبية؛ لا ترسل بيانات حقيقية. لن تُحفظ النماذج أو الملفات خارج ذاكرة الصفحة الحالية.",
    admin: "لوحة الإدارة", adminDemo: "وضع تجريبي", adminTitle: "إدارة المؤتمر", adminText: "واجهة استعراضية فقط. تسجيل الدخول والصلاحيات وتخزين البيانات تحتاج Backend قبل الاستخدام الفعلي.", overview: "نظرة عامة", registrations: "طلبات التسجيل", questions: "أسئلة الخبراء", content: "المحتوى العلمي", pending: "قيد المراجعة", approved: "مقبول", answered: "تمت الإجابة", underReview: "تحت المراجعة", assigned: "محال إلى خبير", closed: "مغلق", reject: "مرفوض", incomplete: "غير مكتمل", noRecords: "لا توجد طلبات بعد في هذه الجلسة.", status: "الحالة", submittedAt: "تاريخ الإرسال", management: "الإدارة", requestsCount: "طلبات التسجيل", questionsCount: "الأسئلة الواردة", lecturesCount: "المحاضرات", securityDemo: "لوحة الإدارة هنا غير محمية — لا تستخدمها مع بيانات حقيقية قبل تنفيذ المصادقة والصلاحيات في الـbackend.",
    toastError: "حدث خطأ. حاول مرة أخرى.", sentToast: "تم الإرسال بنجاح", chooseFile: "يرجى اختيار ملف إثبات الصفة.", fileTooLarge: "حجم الملف يجب ألا يتجاوز 10MB.", invalidFile: "الملفات المقبولة PDF أو JPG أو PNG.", messageSent: "سيفتح تطبيق البريد لإكمال رسالتك.", openPreview: "المعاينة التجريبية", close: "إغلاق", english: "English", arabic: "العربية", menu: "القائمة",
  },
  en: {
    tagline: "Ganna Medical Conference", homeEyebrow: "Together, making a difference in child health",
    heroTitle: "Knowledge that\nmakes a difference.", heroText: "Where human experience meets modern science—and a new conversation about the future of children's healthcare begins.",
    explore: "Explore the conference", registerNow: "Register your interest", scroll: "Discover more",
    nextConference: "UP NEXT", nextTheme: "Better care starts with an idea.", nextDate: "Coming soon · Cairo, Egypt",
    statsTitle: "An impact that grows every year", statsText: "A learning journey shaped by doctors, experts, and child-health advocates.",
    aboutEyebrow: "ABOUT THE CONFERENCE", aboutTitle: "Because every child deserves a better start.", aboutText: "Ganna is a scientific and human-centered space where specialists share knowledge, explore new practices, and build a community that believes better child care starts by listening.",
    learnMore: "Get to know Ganna", highlight: "INSIDE THE CONFERENCE", galleryTitle: "Moments worth keeping", viewGallery: "Explore the gallery",
    scienceEyebrow: "KNOWLEDGE, WITH YOU", lecturesTitle: "Ideas worth sharing.", lecturesText: "Scientific summaries of key sessions and speakers, keeping knowledge close.", browseLectures: "Explore lectures",
    guideEyebrow: "YOUR SCIENTIFIC RESOURCE", guideTitle: "Trusted guidance, one click away.", guideText: "Explore trusted medical references and guidelines through our guidelines platform.", guideButton: "Explore guidelines",
    ctaTitle: "There's a place for you here.", ctaText: "Join a community that believes sharing knowledge is where change begins.", ctaButton: "Start registration",
    footerText: "A scientific community making a difference in child care.", quickLinks: "Quick links", contactUs: "Contact us", followUs: "Follow our journey", rights: "Ganna Conference. All rights reserved.",
    aboutPageEyebrow: "OUR STORY", aboutPageTitle: "We believe better care starts with knowledge.", aboutPageLead: "Ganna Medical Conference brings science and humanity together, connecting expertise with everyone working toward a healthier future for children.",
    vision: "Our vision", visionText: "A health community equipped with the knowledge and tools to build a better future for every child.", mission: "Our mission", missionText: "Empowering care providers through science, dialogue, and multidisciplinary collaboration.",
    goals: "What we work toward", goal1: "Advance evidence-based clinical practice.", goal2: "Create dialogue between experts and care providers.", goal3: "Support continuous learning and quality improvement.", goal4: "Celebrate every step toward better child health.",
    principles: "Values that bring us together", principle1: "Science first", principle2: "Child at heart", principle3: "Better together", principle4: "Lasting impact",
    pageCertificates: "YOUR CERTIFICATES", certTitle: "Find your certificate.", certText: "Enter the name registered for the conference. Results below are demo records, not downloadable certificates.",
    certType: "Certificate type", allTypes: "All certificates", regular: "Attendance certificate", cma: "Certified CMA certificate", registeredName: "Registered name", namePlaceholder: "e.g. Sarah Ahmed", certSearch: "Search certificates", searching: "Searching...", noCert: "No matching certificate found. Check the name you registered with.", certFound: "Matching certificates", preview: "Preview", download: "Download PDF", demoUnavailable: "Live preview and downloads require secure OneDrive integration through the backend.",
    pageGallery: "CONFERENCE ALBUMS", galleryPageTitle: "Stories in photographs.", allAlbums: "All", albumEvents: "Highlights", albumSessions: "Scientific sessions", albumCommunity: "Community", photoNote: "Demo photos — albums will be managed from the admin dashboard when connected.",
    pageVideos: "FROM OUR ARCHIVE", videosTitle: "Watch, remember, learn.", watch: "Watch video", videoDemo: "These videos are design samples; streaming links will be added through the content dashboard.",
    pageLectures: "KNOWLEDGE LIBRARY", lecturePageTitle: "The learning continues after the session.", filterBy: "Filter by", filterSpecialty: "Specialty", filterSpeaker: "Speaker", filterSession: "Scientific session", allSpecialties: "All specialties", allSpeakers: "All speakers", allSessions: "All sessions", viewDetails: "View details", speaker: "Speaker", specialty: "Specialty", session: "Scientific session", lectureOverview: "About this lecture", keyTopics: "Key topics", keyTakeaway: "Key takeaway", takeawayText: "Scientific knowledge matters most when it leads to more compassionate, better care for every child.", noLectures: "No lectures match this selection.",
    pageGuidelines: "YOUR MEDICAL RESOURCE", guidePageTitle: "Trusted knowledge, within reach.", guidePageText: "Explore trusted medical references and evidence-based guidance through the platform connected with the conference.", openSearch: "Open guidelines search", accessPlatform: "Visit previous platform", externalPending: "The previous platform URL will be added after confirmation by the conference team. It can be connected through the frontend configuration.",
    pageHospital: "WHERE CARE BEGINS", hospitalTitle: "Ganna Children's Hospital.", hospitalText: "Specialized care, human connection, and a safe space for every child and family. Get to know the hospital, its services, and specialties.", hospitalServices: "Services & specialties", service1: "General pediatrics", service2: "Neonatal care", service3: "Growth & development", service4: "Integrated family care", hospitalVision: "A caring vision", hospitalVisionText: "Every visit should bring reassurance, and every child should receive care that respects their needs and supports their family.",
    pageAsk: "WE'RE LISTENING", askTitle: "Ask the experts.", askText: "Send your question to the conference team. It will be reviewed and routed to a specialist when appropriate. This is not an emergency service or direct medical consultation.", fullName: "Full name", email: "Email address", phone: "Phone number", yourQuestion: "Your question", questionPlaceholder: "Write your question here...", submitQuestion: "Submit question", submitting: "Submitting...", privateNote: "Your question and details are private and are never shown publicly.", sentQuestion: "Your question was received", questionId: "Question ID", questionDisclaimer: "Submitting a question does not guarantee a medical or advisory response.", consentPrivacy: "I agree to the privacy policy and the use of my information to respond to my request.",
    pageRegister: "YOUR NEXT STEP", registerTitle: "Register for the next conference.", registerText: "Fill in your details to submit a registration request. The conference team will review it manually.", participantType: "Participant type", choose: "Choose", doctor: "Doctor", student: "Medical student", uploadDocument: "Proof of status", uploadHint: "PDF, JPG or PNG — max 10MB", documentRequired: "Please attach your syndicate card or proof of university enrollment.", registrationConsent: "I agree to the privacy policy and the use of my information to review my registration.", submitRegistration: "Submit registration", sentRegistration: "Registration request received", registrationId: "Registration ID", approvalNote: "Your request will be sent to the conference team for manual review and approval.", selectFile: "Choose a file",
    pageContact: "LET'S CONNECT", contactTitle: "We'd love to hear from you.", contactText: "For general enquiries and collaboration, get in touch with the Ganna Conference team.", emailUs: "Email us", location: "Location", locationValue: "Cairo, Arab Republic of Egypt", conferenceOffice: "Conference office", officeText: "Ganna Medical Team · Sunday to Thursday", sendEmail: "Send an email", contactNote: "For scientific questions, please use the Ask the Experts form.",
    pagePrivacy: "YOUR PRIVACY MATTERS", privacyTitle: "Your privacy is part of our trust.", privacyLead: "We are committed to protecting your information and using it only for the purposes for which it was collected, in line with the conference team's approved policy.",
    privacy1Title: "Information we collect", privacy1Text: "Contact, registration, and question details you voluntarily provide, plus documents needed to verify participant type when registering.", privacy2Title: "How we use it", privacy2Text: "To review registration requests, respond to questions, and manage conference participation. Questions and personal details are never public.", privacy3Title: "Protection & access", privacy3Text: "Access should be restricted to authorized conference administrators. Secure backend integration is required to store data and enforce access controls.", privacy4Title: "Certificates", privacy4Text: "Certificates are stored in OneDrive and folders should never be public. Live search, previews, and downloads require secure backend integration.", privacy5Title: "Data retention", privacy5Text: "The conference team will define an appropriate retention period and deletion process when information is no longer needed.", privacyDemo: "Note: This is a frontend demo. Do not submit real personal data. Forms and files are not retained beyond the current page session.",
    admin: "Admin dashboard", adminDemo: "DEMO MODE", adminTitle: "Conference management", adminText: "Design preview only. Authentication, role permissions, and persistent storage must be implemented in the backend before launch.", overview: "Overview", registrations: "Registrations", questions: "Expert questions", content: "Scientific content", pending: "Pending", approved: "Approved", answered: "Answered", underReview: "Under review", assigned: "Assigned to speaker", closed: "Closed", reject: "Rejected", incomplete: "Incomplete", noRecords: "No requests in this session yet.", status: "Status", submittedAt: "Submitted", management: "MANAGEMENT", requestsCount: "Registration requests", questionsCount: "Incoming questions", lecturesCount: "Lectures", securityDemo: "This dashboard is not protected. Do not use it with real data until backend authentication and permissions are implemented.",
    toastError: "Something went wrong. Please try again.", sentToast: "Sent successfully", chooseFile: "Please attach proof of participant type.", fileTooLarge: "File size must be under 10MB.", invalidFile: "Accepted file types are PDF, JPG, and PNG.", messageSent: "Your email app will open to complete your message.", openPreview: "Demo preview", close: "Close", english: "English", arabic: "العربية", menu: "Menu",
  },
};

const mainNav = ["home", "about", "lectures", "certificates"];
const moreNav = ["gallery", "videos", "guidelines", "hospital", "ask", "contact", "privacy"];
const statusTransitions = {
  questions: { pending: ["under_review", "assigned", "closed"], under_review: ["assigned", "answered", "closed"], assigned: ["under_review", "answered", "closed"], answered: ["closed", "under_review"], closed: ["under_review"] },
  registrations: { pending: ["under_review", "approved", "rejected", "incomplete"], under_review: ["approved", "rejected", "incomplete", "pending"], approved: ["under_review"], rejected: ["under_review"], incomplete: ["under_review", "approved", "rejected"] },
};
const adminCopy = {
  ar: {
    dashboard: "نظرة عامة", conference: "بيانات المؤتمر", certificates: "إدارة الشهادات", gallery: "معرض الصور", videos: "الفيديوهات", lectures: "المحاضرات", guidelines: "الجايدلاينز", hospital: "بيانات المستشفى", questions: "أسئلة الخبراء", registrations: "طلبات التسجيل", users: "المستخدمون", roles: "الأدوار والصلاحيات",
    workspace: "مساحة العمل", siteContent: "محتوى الموقع", engagement: "تفاعل الزوار", administration: "الإدارة", welcome: "مرحبًا بعودتك", dashboardSubtitle: "إليك ملخص سريع لما يحدث على منصة مؤتمر جنى.", searchPlaceholder: "ابحث في لوحة الإدارة...", adminProfile: "مسؤول النظام", liveDemo: "نسخة تجريبية", apiDisconnected: "غير متصل بالـbackend", securityNotice: "للعرض فقط: لا يوجد تسجيل دخول أو صلاحيات حقيقية. لا تستخدم لوحة الإدارة مع بيانات حقيقية قبل تنفيذ المصادقة والتحقق من الصلاحيات عبر الـbackend.",
    totalRegistrations: "إجمالي التسجيلات", awaitingReview: "بانتظار المراجعة", openQuestions: "الأسئلة المفتوحة", publishedLectures: "المحاضرات المنشورة", recentActivity: "أحدث الطلبات", registrationPipeline: "حالة التسجيلات", latestQuestions: "آخر الأسئلة", viewAll: "عرض الكل", noRecords: "لا توجد بيانات في هذه الجلسة حتى الآن.", all: "الكل", pending: "قيد المراجعة", under_review: "تحت المراجعة", assigned: "محال إلى خبير", answered: "تمت الإجابة", closed: "مغلق", approved: "مقبول", rejected: "مرفوض", incomplete: "غير مكتمل", published: "منشور", draft: "مسودة", needs_setup: "يحتاج إعدادًا", active: "نشط", inactive: "موقوف",
    countRegistrations: "طلب تسجيل", countQuestions: "سؤال وارد", countLectures: "محاضرة", countAssets: "عنصر", record: "الاسم / المحتوى", type: "النوع", email: "البريد الإلكتروني", phone: "رقم الهاتف", date: "تاريخ الإرسال", status: "الحالة", actions: "الإجراء", searchRecords: "ابحث بالاسم أو البريد أو الرقم...", filterStatus: "تصفية الحالة", changeStatus: "تغيير الحالة", inspect: "التفاصيل", participant: "صفة المشارك", document: "المستند", viewDocument: "عرض اسم الملف", question: "السؤال", answer: "الإجابة", administrativeNotes: "ملاحظات إدارية", assignedSpeaker: "الخبير الموجّه إليه", saveDetails: "حفظ التفاصيل", detailsSaved: "تم حفظ التعديلات التجريبية", registrationDetails: "تفاصيل التسجيل", questionDetails: "إدارة السؤال", privateRecord: "هذه البيانات خاصة ولا تظهر للزوار.",
    managerSubtitle: "عدّل المحتوى التجريبي الذي ستُوصله لاحقًا بمصدر البيانات.", addItem: "إضافة عنصر", editItem: "تعديل العنصر", newItem: "عنصر جديد", save: "حفظ التغييرات", cancel: "إلغاء", deleteItem: "حذف", confirmDelete: "هل تريد حذف هذا العنصر التجريبي؟", saved: "تم الحفظ في الجلسة الحالية.", itemAdded: "تمت إضافة العنصر.", titleAr: "العنوان بالعربية", titleEn: "العنوان بالإنجليزية", title: "العنوان", year: "السنة", eventDate: "تاريخ المؤتمر", location: "المكان", category: "التصنيف", speaker: "المتحدث", specialty: "التخصص", summary: "الملخص", imageUrl: "رابط الصورة", videoUrl: "رابط الفيديو", platformUrl: "رابط المنصة", vision: "الرؤية", mission: "الرسالة", serviceList: "التخصصات والخدمات", required: "هذا الحقل مطلوب.", noItems: "لا توجد عناصر بعد.", managementNote: "تعديلات هذه النسخة مؤقتة في الذاكرة؛ اربط الـbackend لتخزينها ونشرها.",
    onedriveTitle: "تكامل OneDrive", onedriveDesc: "مساحة الشهادات لا تُعرض للعامة. يجب تنفيذ البحث والتنزيل من خلال Microsoft Graph API في الـbackend.", connectionStatus: "حالة الربط", notConnected: "غير مربوط", secureBackend: "يلزم Backend آمن", certificateFolders: "مجلدات الشهادات", conferenceCertificates: "شهادات المؤتمر", cmaCertificates: "شهادات CMA", certificateSearch: "بحث تجريبي عن شهادة", testName: "اكتب اسمًا للبحث في بيانات العرض فقط", search: "بحث", certificateResults: "نتائج تجريبية", noCertificateResults: "لا توجد نتائج مطابقة.", neverPublic: "لا تضع رابط مجلد OneDrive عامًا ولا تحفظ بيانات الاعتماد في الواجهة.",
    usersSubtitle: "معاينة حسابات الإدارة والأدوار المتاحة.", addUser: "إضافة مستخدم", userName: "اسم المستخدم", role: "الدور الإداري", userAdded: "تمت إضافة المستخدم التجريبي.", disable: "إيقاف", enable: "تفعيل", super_admin: "مدير عام", content_manager: "مدير المحتوى", scientific_manager: "مدير علمي", registration_manager: "مدير التسجيل", questions_admin: "مسؤول الأسئلة", technical_admin: "مسؤول تقني", roleMatrix: "مصفوفة الأدوار والصلاحيات", permission: "الصلاحية", usersPlaceholder: "name@example.com", roleWarning: "هذه المصفوفة للعرض فقط. فرض الصلاحيات يجب أن يتم على الخادم وليس في الواجهة.",
    signOut: "تسجيل الخروج", backToSite: "العودة للموقع", notifications: "الإشعارات", moduleEmpty: "هذا القسم جاهز للربط، أضف بياناته عبر النموذج.", noSearchResults: "لا توجد نتائج مطابقة.", overview: "نظرة عامة", contentPublished: "عناصر منشورة", updatedRecently: "آخر تحديث اليوم", toReview: "للمراجعة",
  },
  en: {
    dashboard: "Overview", conference: "Conference details", certificates: "Certificates", gallery: "Photo gallery", videos: "Videos", lectures: "Lectures", guidelines: "Guidelines", hospital: "Hospital profile", questions: "Expert questions", registrations: "Registrations", users: "Users", roles: "Roles & permissions",
    workspace: "WORKSPACE", siteContent: "SITE CONTENT", engagement: "ENGAGEMENT", administration: "ADMINISTRATION", welcome: "Welcome back", dashboardSubtitle: "Here's a quick look at what's happening across Ganna Conference.", searchPlaceholder: "Search the dashboard...", adminProfile: "Administrator", liveDemo: "DEMO ENVIRONMENT", apiDisconnected: "Backend disconnected", securityNotice: "Preview only: there is no real login or authorization. Do not use this dashboard with real data until backend authentication and role checks are implemented.",
    totalRegistrations: "Total registrations", awaitingReview: "Awaiting review", openQuestions: "Open questions", publishedLectures: "Published lectures", recentActivity: "Recent activity", registrationPipeline: "Registration pipeline", latestQuestions: "Latest questions", viewAll: "View all", noRecords: "No records in this session yet.", all: "All", pending: "Pending", under_review: "Under review", assigned: "Assigned to speaker", answered: "Answered", closed: "Closed", approved: "Approved", rejected: "Rejected", incomplete: "Incomplete", published: "Published", draft: "Draft", needs_setup: "Needs setup", active: "Active", inactive: "Inactive",
    countRegistrations: "registration requests", countQuestions: "incoming questions", countLectures: "lectures", countAssets: "items", record: "Name / content", type: "Type", email: "Email", phone: "Phone", date: "Submitted", status: "Status", actions: "Action", searchRecords: "Search name, email or ID...", filterStatus: "Filter status", changeStatus: "Change status", inspect: "Details", participant: "Participant type", document: "Document", viewDocument: "View filename", question: "Question", answer: "Answer", administrativeNotes: "Admin notes", assignedSpeaker: "Assigned expert", saveDetails: "Save details", detailsSaved: "Demo changes saved", registrationDetails: "Registration details", questionDetails: "Manage question", privateRecord: "This information is private and is never shown publicly.",
    managerSubtitle: "Edit demo content that can later be connected to your data source.", addItem: "Add item", editItem: "Edit item", newItem: "New item", save: "Save changes", cancel: "Cancel", deleteItem: "Delete", confirmDelete: "Delete this demo item?", saved: "Saved for this session.", itemAdded: "Item added.", titleAr: "Title in Arabic", titleEn: "Title in English", title: "Title", year: "Year", eventDate: "Conference date", location: "Location", category: "Category", speaker: "Speaker", specialty: "Specialty", summary: "Summary", imageUrl: "Image URL", videoUrl: "Video URL", platformUrl: "Platform URL", vision: "Vision", mission: "Mission", serviceList: "Specialties & services", required: "This field is required.", noItems: "No items yet.", managementNote: "Changes in this frontend demo are temporary and stored in memory; connect a backend to persist and publish them.",
    onedriveTitle: "OneDrive integration", onedriveDesc: "Certificate storage must remain private. Search and downloads should run through Microsoft Graph API on the backend.", connectionStatus: "Connection status", notConnected: "Not connected", secureBackend: "Secure backend required", certificateFolders: "Certificate folders", conferenceCertificates: "Conference certificates", cmaCertificates: "CMA certificates", certificateSearch: "Demo certificate search", testName: "Search sample records by name", search: "Search", certificateResults: "Demo results", noCertificateResults: "No matching records.", neverPublic: "Never make a OneDrive folder public or store credentials in the frontend.",
    usersSubtitle: "Preview administrator accounts and available roles.", addUser: "Add user", userName: "User name", role: "Role", userAdded: "Demo user added.", disable: "Disable", enable: "Enable", super_admin: "Super admin", content_manager: "Content manager", scientific_manager: "Scientific manager", registration_manager: "Registration manager", questions_admin: "Questions administrator", technical_admin: "Technical administrator", roleMatrix: "Role permissions matrix", permission: "Permission", usersPlaceholder: "name@example.com", roleWarning: "This matrix is for preview only. Permissions must be enforced server-side, never in the frontend.",
    signOut: "Sign out", backToSite: "Back to website", notifications: "Notifications", moduleEmpty: "This section is ready to connect. Add its details using the form.", noSearchResults: "No matching results.", overview: "Overview", contentPublished: "Published items", updatedRecently: "Updated today", toReview: "Needs review",
  },
};

function App() {
  const [lang, setLang] = useState("ar");
  const [page, setPage] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState("");
  const [toastTimer, setToastTimer] = useState(null);
  const [publicContent, setPublicContent] = useState({ conferences, gallery, videos, lectures, guidelines: [], hospital: [] });
  const t = (key) => copy[lang][key] || key;
  const isAr = lang === "ar";

  useEffect(() => {
    let active = true;
    const refreshContent = () => api.getPublicContent().then((next) => { if (active) setPublicContent(next); });
    refreshContent().catch((error) => console.error("Unable to load public demo content.", error));
    window.addEventListener("ganna-demo-content-updated", refreshContent);
    return () => {
      active = false;
      window.removeEventListener("ganna-demo-content-updated", refreshContent);
    };
  }, []);

  function notify(message) {
    setToast(message);
    if (toastTimer) window.clearTimeout(toastTimer);
    setToastTimer(window.setTimeout(() => setToast(""), 3200));
  }

  function navigate(nextPage) {
    setPage(nextPage);
    setMobileMenu(false);
    setMoreOpen(false);
    setModal(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function switchLanguage() {
    const next = lang === "ar" ? "en" : "ar";
    setLang(next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  }

  const navLabel = (key) => labels[lang][key];

  return (
    <div className={`site-shell ${isAr ? "is-rtl" : "is-ltr"}`}>
      <header className="site-header">
        <button className="brand" onClick={() => navigate("home")} aria-label="Ganna home">
          <span className="brand-mark"><span>ج</span><i /></span>
          <span className="brand-copy"><strong>جَنَى</strong><small>{t("tagline")}</small></span>
        </button>
        <nav className={`main-nav ${mobileMenu ? "nav-open" : ""}`} aria-label={t("menu")}>
          {mainNav.map((key) => (
            <button key={key} className={page === key ? "nav-link active" : "nav-link"} onClick={() => navigate(key)}>{navLabel(key)}</button>
          ))}
          <div className="more-wrap">
            <button className="nav-link more-trigger" onClick={() => setMoreOpen(!moreOpen)} aria-expanded={moreOpen}>
              {isAr ? "المزيد" : "More"} <ChevronDown size={14} />
            </button>
            {moreOpen && <div className="more-menu">{moreNav.map((key) => <button key={key} onClick={() => navigate(key)}>{navLabel(key)}<ArrowUpLeft size={14} /></button>)}<button onClick={() => navigate("admin")}>{t("admin")}<ArrowUpLeft size={14} /></button></div>}
          </div>
          <button className="nav-link admin-nav" onClick={() => navigate("admin")}>{t("admin")}</button>
        </nav>
        <div className="header-actions">
          <button className="language-toggle" onClick={switchLanguage} aria-label="Switch language"><Languages size={16} /><span>{isAr ? "EN" : "عربي"}</span></button>
          <button className="header-register" onClick={() => navigate("register")}>{t("registerNow")}<ArrowUpLeft size={15} /></button>
          <button className="mobile-menu-button" onClick={() => setMobileMenu(!mobileMenu)} aria-label={t("menu")}>{mobileMenu ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </header>

      <main>
        {page === "home" && <HomePage t={t} lang={lang} navigate={navigate} publicContent={publicContent} />}
        {page === "about" && <AboutPage t={t} lang={lang} />}
        {page === "certificates" && <CertificatesPage t={t} lang={lang} notify={notify} openModal={setModal} />}
        {page === "gallery" && <GalleryPage t={t} lang={lang} openModal={setModal} items={publicContent.gallery} />}
        {page === "videos" && <VideosPage t={t} lang={lang} openModal={setModal} items={publicContent.videos} />}
        {page === "lectures" && <LecturesPage t={t} lang={lang} openModal={setModal} items={publicContent.lectures} />}
        {page === "guidelines" && <GuidelinesPage t={t} notify={notify} platformUrl={publicContent.guidelines?.[0]?.url} />}
        {page === "hospital" && <HospitalPage t={t} lang={lang} profile={publicContent.hospital?.[0]} />}
        {page === "ask" && <AskPage t={t} lang={lang} notify={notify} />}
        {page === "register" && <RegistrationPage t={t} lang={lang} notify={notify} />}
        {page === "contact" && <ContactPage t={t} />}
        {page === "privacy" && <PrivacyPage t={t} />}
        {page === "admin" && <AdminPage t={t} lang={lang} onExit={() => navigate("home")} />}
      </main>

      {page !== "admin" && <Footer t={t} lang={lang} navigate={navigate} />}
      {modal && <Modal modal={modal} t={t} close={() => setModal(null)} lang={lang} />}
      {toast && <div className="toast" role="status"><Check size={17} />{toast}</div>}
    </div>
  );
}

function HomePage({ t, lang, navigate, publicContent }) {
  const isAr = lang === "ar";
  const nextConference = publicContent.conferences?.find((item) => item.status !== "draft") || conferences[0];
  return <>
    <section className="hero">
      <div className="hero-grain" />
      <div className="hero-image" />
      <div className="hero-content">
        <div className="eyebrow light-eyebrow"><span />{t("homeEyebrow")}</div>
        <h1>{t("heroTitle").split("\n").map((line, index) => <span key={index}>{line}</span>)}</h1>
        <p>{t("heroText")}</p>
        <div className="hero-actions">
          <button className="button button-light" onClick={() => navigate("about")}>{t("explore")}<ArrowLeft size={17} /></button>
          <button className="button button-ghost-light" onClick={() => navigate("register")}>{t("registerNow")}<ArrowUpLeft size={16} /></button>
        </div>
        <div className="hero-footnote"><span className="footnote-line" />{t("nextConference")} <b>{localized(nextConference.eventDate || nextConference.date, lang) || t("nextDate")}</b></div>
      </div>
      <div className="hero-side-caption">{isAr ? "مؤتمر جنى الطبي · ٢٠٢٥" : "GANNA MEDICAL CONFERENCE · 2025"}</div>
      <button className="hero-scroll" onClick={() => document.getElementById("impact")?.scrollIntoView({ behavior: "smooth" })}><ArrowDown size={16} />{t("scroll")}</button>
      <div className="hero-number">01<span> / 04</span></div>
    </section>

    <section id="impact" className="impact-section section-wrap">
      <div className="section-intro">
        <div className="eyebrow"><span />{t("highlight")}</div>
        <h2>{t("statsTitle")}</h2><p>{t("statsText")}</p>
      </div>
      <div className="stats-grid">{stats.map((item, index) => <div className="stat-item" key={item.value}><span className="stat-index">0{index + 1}</span><strong>{item[lang === "ar" ? "value" : "enValue"]}</strong><span>{item.label[lang]}</span></div>)}</div>
    </section>

    <section className="about-preview">
      <div className="about-image"><img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85" alt="" /><span className="image-note">{isAr ? "رعاية تنطلق من القلب" : "CARE THAT STARTS FROM THE HEART"}</span></div>
      <div className="about-preview-copy"><div className="eyebrow"><span />{t("aboutEyebrow")}</div><h2>{t("aboutTitle")}</h2><p>{t("aboutText")}</p><button className="text-link" onClick={() => navigate("about")}>{t("learnMore")}<ArrowLeft size={16} /></button><div className="about-scribble">جنى</div></div>
    </section>

    <section className="section-wrap lecture-preview">
      <SectionHeading eyebrow={t("scienceEyebrow")} title={t("lecturesTitle")} text={t("lecturesText")} action={t("browseLectures")} onAction={() => navigate("lectures")} />
      <div className="lecture-grid">{publicContent.lectures.slice(0, 3).map((lecture, index) => <LectureCard key={lecture.id} lecture={lecture} lang={lang} index={index} onClick={() => navigate("lectures")} t={t} />)}</div>
    </section>

    <section className="gallery-preview">
      <div className="gallery-preview-heading"><div><div className="eyebrow light-eyebrow"><span />{t("highlight")}</div><h2>{t("galleryTitle")}</h2></div><button className="button button-ghost-light" onClick={() => navigate("gallery")}>{t("viewGallery")}<ArrowLeft size={17} /></button></div>
      <div className="gallery-preview-grid">{publicContent.gallery.slice(0, 3).map((item, i) => <div className={`gallery-tile tile-${i + 1}`} key={item.id || localized(item.title, lang)}><img src={item.image} alt={localized(item.title, lang)} /><span>{localized(item.title, lang)}</span></div>)}</div>
    </section>

    <section className="guideline-banner section-wrap"><div className="guide-icon"><BookOpen size={29} /></div><div><div className="eyebrow"><span />{t("guideEyebrow")}</div><h2>{t("guideTitle")}</h2><p>{t("guideText")}</p></div><button className="circle-arrow" onClick={() => navigate("guidelines")} aria-label={t("guideButton")}><ArrowUpLeft size={22} /></button></section>
    <section className="closing-cta"><div className="cta-flower">ج</div><div className="eyebrow light-eyebrow"><span />{t("nextConference")}</div><h2>{t("ctaTitle")}</h2><p>{t("ctaText")}</p><button className="button button-light" onClick={() => navigate("register")}>{t("ctaButton")}<ArrowLeft size={17} /></button><div className="cta-date"><CalendarDays size={15} />{t("nextDate")}</div></section>
  </>;
}

function SectionHeading({ eyebrow, title, text, action, onAction }) {
  return <div className="section-heading"><div><div className="eyebrow"><span />{eyebrow}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>{action && <button className="text-link section-heading-link" onClick={onAction}>{action}<ArrowLeft size={16} /></button>}</div>;
}

function localized(value, lang) {
  if (typeof value === "string") return value;
  return value?.[lang] || value?.ar || value?.en || "";
}

function PageIntro({ eyebrow, title, text, tone = "light" }) {
  return <section className={`page-intro ${tone === "dark" ? "page-intro-dark" : ""}`}><div className="page-intro-inner"><div className="eyebrow"><span />{eyebrow}</div><h1>{title}</h1>{text && <p>{text}</p>}</div><div className="intro-decoration">ج</div></section>;
}

function AboutPage({ t, lang }) {
  const principles = [t("principle1"), t("principle2"), t("principle3"), t("principle4")];
  return <><PageIntro eyebrow={t("aboutPageEyebrow")} title={t("aboutPageTitle")} text={t("aboutPageLead")} /><section className="section-wrap about-story"><div className="story-image"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85" alt="" /><div className="story-image-tag"><Sparkles size={16} />{lang === "ar" ? "علم يجمعنا" : "SCIENCE BRINGS US TOGETHER"}</div></div><div className="story-copy"><div className="eyebrow"><span />{t("vision")}</div><h2>{t("visionText")}</h2><div className="story-divider" /><div className="eyebrow"><span />{t("mission")}</div><p>{t("missionText")}</p></div></section><section className="goals-section"><div className="section-wrap"><SectionHeading eyebrow={t("aboutEyebrow")} title={t("goals")} /><div className="goals-grid">{[t("goal1"), t("goal2"), t("goal3"), t("goal4")].map((goal, i) => <div className="goal-item" key={goal}><span>0{i + 1}</span><p>{goal}</p><ArrowUpLeft size={17} /></div>)}</div></div></section><section className="section-wrap values-section"><div className="eyebrow"><span />{t("principles")}</div><div className="values-row">{principles.map((item, i) => <div key={item}><span>{["01", "02", "03", "04"][i]}</span><strong>{item}</strong></div>)}</div></section></>;
}

function CertificatesPage({ t, lang, notify, openModal }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("all");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  async function submit(event) {
    event.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    try { setResults(await api.searchCertificates({ name, type })); }
    catch (error) { notify(error.message || t("toastError")); }
    finally { setLoading(false); }
  }
  return <><PageIntro eyebrow={t("pageCertificates")} title={t("certTitle")} text={t("certText")} /><section className="section-wrap certificate-section"><div className="certificate-panel"><div className="certificate-panel-icon"><Award size={28} /></div><div className="eyebrow"><span />{t("certificates")}</div><form className="certificate-form" onSubmit={submit}><label>{t("certType")}<select value={type} onChange={(e) => setType(e.target.value)}><option value="all">{t("allTypes")}</option><option value="conference">{t("regular")}</option><option value="cma">{t("cma")}</option></select></label><label>{t("registeredName")}<div className="input-with-icon"><Search size={17} /><input value={name} onChange={(e) => setName(e.target.value)} placeholder={t("namePlaceholder")} required /></div></label><button className="button button-red" type="submit" disabled={loading}>{loading ? t("searching") : t("certSearch")}<ArrowLeft size={17} /></button></form></div>{results && <div className="certificate-results"><div className="results-heading"><h2>{t("certFound")} <span>{results.length}</span></h2><p>{t("demoUnavailable")}</p></div>{results.length ? results.map((item) => <div className="certificate-result" key={item.id}><div className="certificate-mini-icon"><FileCheck2 size={20} /></div><div className="certificate-result-copy"><strong>{item.name}</strong><span>{item.type === "cma" ? t("cma") : t("regular")} · {item.id}</span></div><div className="certificate-result-actions"><button onClick={() => openModal({ kind: "certificate", record: item })}>{t("preview")}<ExternalLink size={15} /></button><button onClick={() => notify(t("demoUnavailable"))}>{t("download")}<ArrowDown size={15} /></button></div></div>) : <div className="empty-state"><Search size={21} /><p>{t("noCert")}</p></div>}</div>}</section><section className="privacy-callout section-wrap"><ShieldCheck size={21} /><p>{lang === "ar" ? "تظل الشهادات خاصة ومحفوظة في OneDrive. لن تتاح معاينة أو تنزيل حقيقي قبل ربط النظام بواجهة خلفية آمنة." : "Certificates remain private in OneDrive. Live previews or downloads will not be available until a secure backend is connected."}</p></section></>;
}

function GalleryPage({ t, lang, openModal, items }) {
  const [filter, setFilter] = useState("all");
  const filters = [{ id: "all", label: t("allAlbums") }, { id: "events", label: t("albumEvents") }, { id: "sessions", label: t("albumSessions") }, { id: "community", label: t("albumCommunity") }];
  const filtered = items.filter((item) => {
    const category = `${localized(item.category, "en")} ${localized(item.category, "ar")}`.toLocaleLowerCase();
    return filter === "all" || (filter === "events" && /highlight|event|فعاليات/.test(category)) || (filter === "sessions" && /scientific|session|علمية/.test(category)) || (filter === "community" && /community|مجتمع/.test(category));
  });
  return <><PageIntro eyebrow={t("pageGallery")} title={t("galleryPageTitle")} /><section className="section-wrap gallery-page-section"><div className="filter-row">{filters.map((item) => <button key={item.id} className={filter === item.id ? "filter-chip selected" : "filter-chip"} onClick={() => setFilter(item.id)}>{item.label}</button>)}</div><div className="gallery-grid">{filtered.map((item, index) => <button className={`gallery-card gallery-card-${index % 3}`} key={item.id || localized(item.title, lang)} onClick={() => openModal({ kind: "image", record: item })}><img src={item.image} alt={localized(item.title, lang)} /><span className="gallery-card-overlay"><small>{localized(item.category, lang)}</small><strong>{localized(item.title, lang)}</strong><ArrowUpLeft size={17} /></span></button>)}</div><p className="demo-caption">{t("photoNote")}</p></section></>;
}

function VideosPage({ t, lang, openModal, items }) {
  return <><PageIntro eyebrow={t("pageVideos")} title={t("videosTitle")} /><section className="section-wrap video-section"><div className="video-grid">{items.map((video) => <button className="video-card" key={video.id || localized(video.title, lang)} onClick={() => openModal({ kind: "video", record: video })}><div className="video-poster"><img src={video.image} alt="" /><span className="play-button"><Play size={18} fill="currentColor" /></span><span className="video-duration">{video.duration}</span></div><div className="video-copy"><span>{localized(video.speaker, lang)}</span><h2>{localized(video.title, lang)}</h2><small>{t("watch")}<ArrowLeft size={14} /></small></div></button>)}</div><p className="demo-caption">{t("videoDemo")}</p></section></>;
}

function LectureCard({ lecture, lang, index, onClick, t }) {
  const title = localized(lecture.title, lang);
  const speaker = localized(lecture.speaker, lang);
  return <button className="lecture-card" onClick={onClick}><div className="lecture-card-image"><img src={lecture.image} alt="" /><span>0{index + 1}</span><span className="lecture-open"><ArrowUpLeft size={17} /></span></div><div className="lecture-card-copy"><div className="lecture-specialty">{localized(lecture.specialty, lang)}</div><h3>{title}</h3><div className="lecture-speaker"><span className="speaker-avatar">{speaker.slice(0, 1)}</span><span>{speaker}</span></div><p>{localized(lecture.summary, lang)}</p><span className="lecture-card-link">{t("viewDetails")}<ArrowLeft size={14} /></span></div></button>;
}

function LecturesPage({ t, lang, openModal, items }) {
  const [dimension, setDimension] = useState("specialty");
  const [filter, setFilter] = useState("all");
  const dimensionKey = { specialty: "specialty", speaker: "speaker", session: "session" }[dimension];
  const options = [...new Set(items.map((item) => localized(item[dimensionKey], lang)))];
  const allLabel = { specialty: t("allSpecialties"), speaker: t("allSpeakers"), session: t("allSessions") }[dimension];
  const filtered = filter === "all" ? items : items.filter((item) => localized(item[dimensionKey], lang) === filter);
  return <><PageIntro eyebrow={t("pageLectures")} title={t("lecturePageTitle")} text={lang === "ar" ? "ملخصات منظمة للمحاضرات العلمية، دون نشر ملفات العروض التقديمية." : "Curated summaries of scientific presentations, without publishing original slide decks."} /><section className="section-wrap lectures-page-section"><div className="lecture-filter"><label>{t("filterBy")}<select value={dimension} onChange={(e) => { setDimension(e.target.value); setFilter("all"); }}><option value="specialty">{t("filterSpecialty")}</option><option value="speaker">{t("filterSpeaker")}</option><option value="session">{t("filterSession")}</option></select></label><select aria-label={allLabel} value={filter} onChange={(e) => setFilter(e.target.value)}><option value="all">{allLabel}</option>{options.map((item) => <option key={item} value={item}>{item}</option>)}</select></div>{filtered.length ? <div className="lecture-grid">{filtered.map((lecture, index) => <LectureCard key={lecture.id} lecture={lecture} lang={lang} index={index} t={t} onClick={() => openModal({ kind: "lecture", record: lecture })} />)}</div> : <div className="empty-state">{t("noLectures")}</div>}</section></>;
}

function GuidelinesPage({ t, notify, platformUrl }) {
  function openGuidelines() {
    const url = platformUrl || import.meta.env.VITE_GUIDELINES_PLATFORM_URL;
    if (!url) { notify(t("externalPending")); return; }
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return <><PageIntro eyebrow={t("pageGuidelines")} title={t("guidePageTitle")} text={t("guidePageText")} /><section className="section-wrap guidelines-content"><div className="guideline-book"><div className="book-art"><BookOpen size={55} strokeWidth={1.2} /><span>G</span></div><div className="eyebrow"><span />GUIDELINES BOOK</div><h2>{t("guideTitle")}</h2><p>{t("guidePageText")}</p><button className="button button-red" onClick={openGuidelines}>{t("openSearch")}<ExternalLink size={16} /></button><button className="text-link" onClick={openGuidelines}>{t("accessPlatform")}<ArrowUpLeft size={15} /></button></div><div className="guidelines-side"><div className="guideline-side-item"><span>01</span><div><strong>{t("pageGuidelines")}</strong><p>{langText("Open the previous conference QR-linked platform to search trusted references.", "افتح المنصة المرتبطة برمز QR للمؤتمر السابق للبحث في المراجع المعتمدة.")}</p></div></div><div className="guideline-side-item"><span>02</span><div><strong>{langText("Evidence-based references", "مراجع مبنية على الدليل")}</strong><p>{langText("Browse the scientific resources selected by the conference team.", "تصفح الموارد العلمية التي اعتمدها فريق المؤتمر.")}</p></div></div><div className="guidelines-note"><ExternalLink size={18} /><p>{t("externalPending")}</p></div></div></section></>;
}
function langText(en, ar) { return document.documentElement.lang === "ar" ? ar : en; }

function HospitalPage({ t, lang, profile }) {
  const services = profile?.serviceList ? profile.serviceList.split(/\n|،|,/).map((item) => item.trim()).filter(Boolean) : [t("service1"), t("service2"), t("service3"), t("service4")];
  return <><PageIntro eyebrow={t("pageHospital")} title={localized(profile?.title, lang) || t("hospitalTitle")} text={t("hospitalText")} /><section className="hospital-feature"><div className="hospital-feature-image"><img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1500&q=85" alt="" /><div className="hospital-image-caption"><Hospital size={21} /><span>{t("pageHospital")}</span></div></div><div className="hospital-feature-copy"><div className="eyebrow"><span />{t("hospitalVision")}</div><h2>{localized(profile?.vision, lang) || t("hospitalVisionText")}</h2><p>{localized(profile?.mission, lang) || t("hospitalText")}</p></div></section><section className="section-wrap hospital-services"><SectionHeading eyebrow={t("pageHospital")} title={t("hospitalServices")} /><div className="services-grid">{services.map((service, i) => <div key={`${service}-${i}`} className="service-card"><span>{[<Stethoscope />, <Baby />, <HeartPulse />, <Users />][i % 4]}</span><small>{String(i + 1).padStart(2, "0")}</small><strong>{service}</strong><ArrowUpLeft size={16} /></div>)}</div></section></>;
}

function FormSuccess({ t, record, isQuestion }) {
  return <div className="form-success"><span className="success-check"><Check size={25} /></span><div className="eyebrow"><span />{t(isQuestion ? "sentQuestion" : "sentRegistration")}</div><h2>{t(isQuestion ? "sentQuestion" : "sentRegistration")}</h2><div className="success-id">{t(isQuestion ? "questionId" : "registrationId")}<strong>{record.id}</strong></div><p>{t(isQuestion ? "questionDisclaimer" : "approvalNote")}</p></div>;
}

function AskPage({ t, lang, notify }) {
  const [submitted, setSubmitted] = useState(null);
  const [loading, setLoading] = useState(false);
  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form).entries());
    setLoading(true);
    try { setSubmitted(await api.submitQuestion(formData)); }
    catch (error) { notify(error.message || t("toastError")); }
    finally { setLoading(false); }
  }
  return <><PageIntro eyebrow={t("pageAsk")} title={t("askTitle")} text={t("askText")} /><section className="section-wrap form-layout"><div className="form-aside"><div className="aside-icon"><CircleHelp size={25} /></div><h2>{lang === "ar" ? "سؤالك قد يفتح بابًا لمعرفة جديدة." : "Your question might open a door to new understanding."}</h2><p>{t("privateNote")}</p><div className="aside-note"><ShieldCheck size={18} /><span>{t("questionDisclaimer")}</span></div><div className="demo-label"><span />{t("adminDemo")}</div></div><div className="form-card">{submitted ? <FormSuccess t={t} record={submitted} isQuestion /> : <form onSubmit={submit}><div className="form-card-heading"><span>01 / 02</span><h2>{lang === "ar" ? "أخبرنا كيف نساعدك." : "Tell us how we can help."}</h2></div><div className="form-grid"><FormField label={t("fullName")} name="name" required placeholder={lang === "ar" ? "الاسم كما تحب أن نناديك" : "How should we address you?"} /><FormField label={t("email")} name="email" type="email" required placeholder="name@example.com" /><FormField label={t("phone")} name="phone" type="tel" required dir="ltr" placeholder="+20 100 000 0000" /><label className="field full-field">{t("yourQuestion")}<textarea name="question" required rows="5" placeholder={t("questionPlaceholder")} maxLength="2000" /></label></div><label className="consent-row"><input type="checkbox" required /><span>{t("consentPrivacy")}</span></label><p className="form-disclaimer">{t("questionDisclaimer")}</p><button className="button button-red form-submit" type="submit" disabled={loading}>{loading ? t("submitting") : t("submitQuestion")}<ArrowLeft size={17} /></button></form>}</div></section></>;
}

function FormField({ label, name, type = "text", required = false, placeholder = "", dir }) {
  return <label className="field">{label}<input name={name} type={type} required={required} placeholder={placeholder} dir={dir} autoComplete={name === "email" ? "email" : name === "phone" ? "tel" : "name"} /></label>;
}

function RegistrationPage({ t, lang, notify }) {
  const [participant, setParticipant] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileError, setFileError] = useState("");
  function handleFile(event) {
    const selected = event.target.files?.[0];
    setFileError("");
    if (!selected) { setFile(null); return; }
    if (selected.size > 10 * 1024 * 1024) { setFileError(t("fileTooLarge")); event.target.value = ""; return; }
    if (!["application/pdf", "image/jpeg", "image/png"].includes(selected.type)) { setFileError(t("invalidFile")); event.target.value = ""; return; }
    setFile(selected);
  }
  async function submit(event) {
    event.preventDefault();
    if (!file) { setFileError(t("chooseFile")); return; }
    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form).entries());
    formData.documentName = file.name;
    formData.document = file;
    setLoading(true);
    try { setSubmitted(await api.submitRegistration(formData)); }
    catch (error) { notify(error.message || t("toastError")); }
    finally { setLoading(false); }
  }
  return <><PageIntro eyebrow={t("pageRegister")} title={t("registerTitle")} text={t("registerText")} /><section className="section-wrap form-layout registration-layout"><div className="form-aside register-aside"><div className="aside-icon"><FileCheck2 size={25} /></div><h2>{langText("A few details. A meaningful step.", "بيانات بسيطة، وخطوة لها معنى.")}</h2><p>{t("approvalNote")}</p><div className="registration-steps"><div><span>01</span>{t("fullName")}</div><div><span>02</span>{t("participantType")}</div><div><span>03</span>{t("uploadDocument")}</div></div><div className="demo-label"><span />{t("adminDemo")}</div></div><div className="form-card">{submitted ? <FormSuccess t={t} record={submitted} /> : <form onSubmit={submit}><div className="form-card-heading"><span>01 / 03</span><h2>{langText("Your information", "بياناتك الشخصية")}</h2></div><div className="form-grid"><FormField label={t("fullName")} name="name" required /><FormField label={t("phone")} name="phone" type="tel" required dir="ltr" placeholder="+20 100 000 0000" /><FormField label={t("email")} name="email" type="email" required /><label className="field">{t("participantType")}<select name="participantType" required value={participant} onChange={(e) => setParticipant(e.target.value)}><option value="">{t("choose")}</option><option value="doctor">{t("doctor")}</option><option value="student">{t("student")}</option></select></label><label className="field full-field">{t("uploadDocument")}<span className="upload-hint">{participant === "student" ? t("student") : t("doctor")} · {t("uploadHint")}</span><span className="upload-control"><input type="file" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" onChange={handleFile} required /><span className="upload-button"><FileCheck2 size={16} />{t("selectFile")}</span><span className="upload-name">{file?.name || t("documentRequired")}</span></span></label></div>{fileError && <p className="field-error" role="alert">{fileError}</p>}<label className="consent-row"><input type="checkbox" required /><span>{t("registrationConsent")}</span></label><button className="button button-red form-submit" type="submit" disabled={loading}>{loading ? t("submitting") : t("submitRegistration")}<ArrowLeft size={17} /></button></form>}</div></section></>;
}

function ContactPage({ t }) {
  return <><PageIntro eyebrow={t("pageContact")} title={t("contactTitle")} text={t("contactText")} /><section className="section-wrap contact-section"><div className="contact-card contact-primary"><span className="contact-icon"><Mail size={20} /></span><div className="eyebrow"><span />{t("emailUs")}</div><h2>contact@example.com</h2><a href="mailto:contact@example.com" className="text-link">{t("sendEmail")}<ArrowUpLeft size={15} /></a></div><div className="contact-card"><span className="contact-icon"><MapPin size={20} /></span><div className="eyebrow"><span />{t("location")}</div><h3>{t("locationValue")}</h3><p>{t("conferenceOffice")}</p></div><div className="contact-card"><span className="contact-icon"><CalendarDays size={20} /></span><div className="eyebrow"><span />{t("conferenceOffice")}</div><h3>{t("officeText")}</h3><p>{t("contactNote")}</p></div></section><div className="contact-bottom section-wrap"><div className="contact-map-placeholder"><MapPin size={22} /><span>{t("locationValue")}</span></div><p>{t("contactNote")}</p></div></>;
}

function PrivacyPage({ t }) {
  const items = [["privacy1Title", "privacy1Text"], ["privacy2Title", "privacy2Text"], ["privacy3Title", "privacy3Text"], ["privacy4Title", "privacy4Text"], ["privacy5Title", "privacy5Text"]];
  return <><PageIntro eyebrow={t("pagePrivacy")} title={t("privacyTitle")} text={t("privacyLead")} /><section className="section-wrap privacy-section"><div className="privacy-list">{items.map(([heading, body], i) => <article className="privacy-item" key={heading}><span>0{i + 1}</span><div><h2>{t(heading)}</h2><p>{t(body)}</p></div></article>)}</div><div className="privacy-demo-note"><ShieldCheck size={20} /><p>{t("privacyDemo")}</p></div></section></>;
}

const adminSections = [
  { group: "workspace", items: ["dashboard"] },
  { group: "siteContent", items: ["conference", "certificates", "gallery", "videos", "lectures", "guidelines", "hospital"] },
  { group: "engagement", items: ["registrations", "questions"] },
  { group: "administration", items: ["users", "roles"] },
];
const adminIcons = {
  dashboard: Activity, conference: CalendarDays, certificates: Award, gallery: ImageIcon,
  videos: Video, lectures: BookOpen, guidelines: Link2, hospital: Hospital,
  registrations: ClipboardList, questions: CircleHelp, users: Users, roles: Shield,
};
const managerFields = {
  conference: ["titleAr", "titleEn", "year", "eventDate", "location"],
  gallery: ["titleAr", "titleEn", "category", "imageUrl"],
  videos: ["titleAr", "titleEn", "speaker", "videoUrl", "imageUrl"],
  lectures: ["titleAr", "titleEn", "speaker", "specialty", "summary"],
  guidelines: ["titleAr", "titleEn", "platformUrl"],
  hospital: ["titleAr", "titleEn", "vision", "mission", "serviceList"],
};
const roleOptions = ["super_admin", "content_manager", "scientific_manager", "registration_manager", "questions_admin", "technical_admin"];
const permissionModules = ["conference", "gallery", "videos", "lectures", "guidelines", "hospital", "certificates", "registrations", "questions", "users"];

function AdminPage({ t, lang, onExit }) {
  const a = (key) => adminCopy[lang][key] || key;
  const [tab, setTab] = useState("dashboard");
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [query, setQuery] = useState("");
  const [certificateQuery, setCertificateQuery] = useState("");
  const [certificateResults, setCertificateResults] = useState(null);
  useEffect(() => {
    api.getAdminOverview().then(setData).catch((e) => setError(e.message || "Unable to load demo dashboard data."));
  }, []);

  async function refresh() {
    setData(await api.getAdminOverview());
  }
  async function update(collection, id, updates) {
    try {
      await api.updateRecord(collection, id, updates);
      await refresh();
      setSelectedRecord((current) => current?.id === id ? { ...current, ...updates } : current);
      setNotice(a("saved"));
    } catch (e) { setError(e.message || t("toastError")); }
  }
  async function add(collection, record) {
    try {
      await api.addRecord(collection, record);
      await refresh();
      setNotice(a("itemAdded"));
    } catch (e) { setError(e.message || t("toastError")); }
  }
  async function remove(collection, id) {
    if (!window.confirm(a("confirmDelete"))) return;
    try {
      await api.deleteRecord(collection, id);
      await refresh();
      setNotice(a("saved"));
    } catch (e) { setError(e.message || t("toastError")); }
  }

  const tabTitle = a(tab);
  const recordItems = (data[tab] || []).filter((item) => {
    const text = `${item.name || ""} ${item.email || ""} ${item.id || ""} ${item.question || ""} ${item.title?.[lang] || item.title || ""}`.toLocaleLowerCase();
    return text.includes(query.toLocaleLowerCase());
  });
  const openCount = (data.questions || []).filter((item) => !["answered", "closed"].includes(item.status)).length;
  const pendingCount = (data.registrations || []).filter((item) => ["pending", "under_review"].includes(item.status)).length;

  return <div className="admin-shell">
    <aside className="admin-sidebar">
      <button className="admin-brand" onClick={() => setTab("dashboard")}><span className="brand-mark"><span>ج</span><i /></span><strong>GANNA <small>CONFERENCE PORTAL</small></strong></button>
      <div className="admin-nav-groups">{adminSections.map((section) => <div className="admin-nav-group" key={section.group}><div className="admin-side-label">{a(section.group)}</div>{section.items.map((item) => { const Icon = adminIcons[item]; return <button className={tab === item ? "admin-side-link selected" : "admin-side-link"} key={item} onClick={() => { setTab(item); setQuery(""); setSelectedRecord(null); }}><Icon size={17} /><span>{a(item)}</span>{item === "questions" && openCount > 0 && <small>{openCount}</small>}</button>; })}</div>)}</div>
      <div className="admin-sidebar-bottom"><span className="admin-status-dot" /><span>{a("liveDemo")}</span></div>
      <button className="admin-exit-link" onClick={onExit}><ArrowLeft size={15} />{a("backToSite")}</button>
    </aside>
    <div className="admin-main">
      <header className="admin-topbar">
        <div className="admin-breadcrumb">{a("workspace")} <ChevronDown size={13} /> {tabTitle}</div>
        <div className="admin-top-actions"><span className="admin-backend-state"><i />{a("apiDisconnected")}</span><button className="admin-icon-button" title={a("notifications")}><CircleHelp size={17} /></button><div className="admin-user-chip"><span>م</span><strong>{a("adminProfile")}<small>Super admin</small></strong></div></div>
      </header>
      <div className="admin-content">
        <div className="admin-security-warning"><ShieldCheck size={18} /><p>{a("securityNotice")}</p></div>
        {error && <div className="admin-error" role="alert">{error}</div>}
        {notice && <div className="admin-notice" role="status"><Check size={15} />{notice}<button onClick={() => setNotice("")}><X size={14} /></button></div>}
        {tab === "dashboard" && <DashboardOverview data={data} pendingCount={pendingCount} openCount={openCount} onNavigate={setTab} a={a} lang={lang} />}
        {tab === "registrations" && <AdminRecords title={a("registrations")} records={recordItems} fullRecords={data.registrations || []} collection="registrations" query={query} setQuery={setQuery} selected={selectedRecord} setSelected={setSelectedRecord} update={update} a={a} lang={lang} />}
        {tab === "questions" && <AdminRecords title={a("questions")} records={recordItems} fullRecords={data.questions || []} collection="questions" query={query} setQuery={setQuery} selected={selectedRecord} setSelected={setSelectedRecord} update={update} a={a} lang={lang} />}
        {tab === "certificates" && <CertificatesManager records={data.certificates || []} query={certificateQuery} setQuery={setCertificateQuery} results={certificateResults} setResults={setCertificateResults} a={a} />}
        {managerFields[tab] && <ContentManager section={tab} records={data[tab] || []} lang={lang} a={a} add={add} update={update} remove={remove} />}
        {tab === "users" && <UsersManager users={data.users || []} a={a} add={add} update={update} lang={lang} />}
        {tab === "roles" && <RoleMatrix a={a} lang={lang} />}
      </div>
    </div>
  </div>;
}

function AdminPageHeading({ title, subtitle, a, lang, action }) {
  return <div className="admin-page-heading"><div><div className="admin-kicker"><span />GANNA CONFERENCE / ADMIN</div><h1>{title}</h1><p>{subtitle}</p></div><div className="admin-heading-actions"><span><CalendarDays size={15} />{new Date().toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US", { year: "numeric", month: "short", day: "numeric" })}</span>{action}</div></div>;
}

function DashboardOverview({ data, pendingCount, openCount, onNavigate, a, lang }) {
  const metrics = [
    { key: "totalRegistrations", value: data.registrations?.length || 0, icon: ClipboardList, tone: "rose", delta: `+${data.registrations?.length || 0}` },
    { key: "awaitingReview", value: pendingCount, icon: FileCheck2, tone: "amber", delta: a("toReview") },
    { key: "openQuestions", value: openCount, icon: CircleHelp, tone: "blue", delta: a("toReview") },
    { key: "publishedLectures", value: data.lectures?.length || 0, icon: BookOpen, tone: "green", delta: a("contentPublished") },
  ];
  const statuses = ["pending", "under_review", "approved", "rejected"];
  const total = Math.max(1, data.registrations?.length || 0);
  const recent = [...(data.registrations || []), ...(data.questions || [])].sort((a, b) => (b.submittedAt || "").localeCompare(a.submittedAt || "")).slice(0, 5);
  return <>
    <AdminPageHeading title={a("welcome")} subtitle={a("dashboardSubtitle")} a={a} lang={lang} action={<span className="admin-env-pill"><i />{a("liveDemo")}</span>} />
    <div className="admin-metrics">{metrics.map(({ key, value, icon: Icon, tone, delta }) => <article className="admin-metric-card" key={key}><span className={`metric-icon ${tone}`}><Icon size={19} /></span><div><small>{a(key)}</small><strong>{value.toLocaleString(lang === "ar" ? "ar-EG" : "en-US")}</strong><span className="metric-delta">{delta}</span></div><span className={`metric-spark ${tone}`}>↗</span></article>)}</div>
    <div className="admin-overview-grid">
      <section className="admin-panel pipeline-panel"><div className="admin-panel-heading"><div><h2>{a("registrationPipeline")}</h2><p>{a("updatedRecently")}</p></div><button className="admin-subtle-button" onClick={() => onNavigate("registrations")}>{a("viewAll")}<ArrowUpLeft size={15} /></button></div><div className="pipeline-chart">{statuses.map((status, index) => { const count = data.registrations?.filter((item) => item.status === status).length || 0; const height = Math.max(8, Math.round((count / total) * 100)); return <div className="pipeline-column" key={status}><span className="pipeline-value">{count}</span><div className={`pipeline-bar bar-${index}`} style={{ height: `${height}%` }} /><span className="pipeline-label">{a(status)}</span></div>; })}</div><div className="pipeline-summary"><span><i className="pipeline-dot dot-review" />{a("awaitingReview")} <strong>{pendingCount}</strong></span><span><i className="pipeline-dot dot-approved" />{a("approved")} <strong>{data.registrations?.filter((item) => item.status === "approved").length || 0}</strong></span></div></section>
      <section className="admin-panel quick-panel"><div className="admin-panel-heading"><div><h2>{a("workspace")}</h2><p>{a("managerSubtitle")}</p></div><Settings size={17} /></div><div className="quick-links">{["conference", "gallery", "lectures", "guidelines"].map((item) => { const Icon = adminIcons[item]; return <button key={item} onClick={() => onNavigate(item)}><span><Icon size={16} /></span>{a(item)}<ArrowUpLeft size={14} /></button>; })}</div></section>
    </div>
    <section className="admin-panel recent-panel"><div className="admin-panel-heading"><div><h2>{a("recentActivity")}</h2><p>{a("latestQuestions")}</p></div><button className="admin-subtle-button" onClick={() => onNavigate("questions")}>{a("viewAll")}<ArrowUpLeft size={15} /></button></div>{recent.length ? <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>{a("record")}</th><th>{a("type")}</th><th>{a("date")}</th><th>{a("status")}</th><th /></tr></thead><tbody>{recent.map((item) => <tr key={item.id}><td><strong>{item.name}</strong><small>{item.id}</small></td><td>{item.question ? a("questions") : a("registrations")}</td><td>{item.submittedAt ? new Date(item.submittedAt).toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US", { month: "short", day: "numeric", year: "numeric" }) : "—"}</td><td><span className={`admin-status status-${item.status}`}>{a(item.status)}</span></td><td><button className="row-action" onClick={() => onNavigate(item.question ? "questions" : "registrations")}><ArrowUpLeft size={15} /></button></td></tr>)}</tbody></table></div> : <div className="admin-empty"><Activity size={25} /><p>{a("noRecords")}</p></div>}</section>
  </>;
}

function AdminRecords({ title, records, fullRecords, collection, query, setQuery, selected, setSelected, update, a, lang }) {
  const [statusFilter, setStatusFilter] = useState("all");
  const statuses = collection === "questions" ? ["pending", "under_review", "assigned", "answered", "closed"] : ["pending", "under_review", "approved", "rejected", "incomplete"];
  const filtered = records.filter((item) => statusFilter === "all" || item.status === statusFilter);
  const currentSelected = selected && fullRecords.find((item) => item.id === selected.id);
  return <>
    <AdminPageHeading title={title} subtitle={collection === "questions" ? a("privateRecord") : a("managerSubtitle")} a={a} lang={lang} />
    <div className="admin-panel records-panel"><div className="records-toolbar"><label className="admin-search"><Search size={16} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={a("searchRecords")} /></label><select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}><option value="all">{a("filterStatus")}: {a("all")}</option>{statuses.map((status) => <option key={status} value={status}>{a(status)}</option>)}</select><span className="record-count">{filtered.length} {collection === "questions" ? a("countQuestions") : a("countRegistrations")}</span></div>
      {filtered.length ? <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>{a("record")}</th><th>{a("email")}</th><th>{a("date")}</th><th>{a("status")}</th><th>{a("actions")}</th></tr></thead><tbody>{filtered.map((record) => <tr key={record.id}><td><strong>{record.name}</strong><small>{record.id}{record.participantType ? ` · ${record.participantType}` : ""}</small></td><td>{record.email || "—"}</td><td>{record.submittedAt ? new Date(record.submittedAt).toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US", { month: "short", day: "numeric", year: "numeric" }) : "—"}</td><td><span className={`admin-status status-${record.status}`}>{a(record.status)}</span></td><td className="table-actions"><button onClick={() => setSelected(record)}>{a("inspect")}<ArrowUpLeft size={14} /></button><select aria-label={a("changeStatus")} value={record.status} onChange={(e) => update(collection, record.id, { status: e.target.value })}>{[record.status, ...(statusTransitions[collection]?.[record.status] || [])].map((status) => <option key={status} value={status}>{a(status)}</option>)}</select></td></tr>)}</tbody></table></div> : <div className="admin-empty"><Search size={24} /><p>{query || statusFilter !== "all" ? a("noSearchResults") : a("noRecords")}</p></div>}
    </div>
    {currentSelected && <RecordDetails record={currentSelected} collection={collection} a={a} update={update} close={() => setSelected(null)} />}
  </>;
}

function RecordDetails({ record, collection, a, update, close }) {
  const [notes, setNotes] = useState(record.notes || "");
  const [assignedSpeaker, setAssignedSpeaker] = useState(record.assignedSpeaker || "");
  const [answer, setAnswer] = useState(record.answer || "");
  function openDocument() {
    if (!(record.document instanceof File)) return;
    const url = URL.createObjectURL(record.document);
    window.open(url, "_blank", "noopener,noreferrer");
    window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
  }
  return <div className="admin-detail-backdrop" onMouseDown={(e) => e.target === e.currentTarget && close()}><section className="admin-detail-drawer"><header><div><small>{record.id}</small><h2>{collection === "questions" ? a("questionDetails") : a("registrationDetails")}</h2></div><button onClick={close} aria-label={a("cancel")}><X size={19} /></button></header><div className="drawer-private-note"><ShieldCheck size={16} />{a("privateRecord")}</div><div className="drawer-info-grid"><span>{a("userName")}<strong>{record.name}</strong></span><span>{a("email")}<strong>{record.email}</strong></span>{record.phone && <span>{a("phone")}<strong dir="ltr">{record.phone}</strong></span>}{record.participantType && <span>{a("participant")}<strong>{record.participantType}</strong></span>}{record.documentName && <span>{a("document")}<strong>{record.documentName}</strong>{record.document instanceof File && <button className="drawer-document-button" onClick={openDocument}>{a("viewDocument")}<ExternalLink size={12} /></button>}</span>}</div>{record.question && <div className="drawer-question"><small>{a("question")}</small><p>{record.question}</p></div>}{collection === "questions" && <><label className="drawer-field">{a("assignedSpeaker")}<input value={assignedSpeaker} onChange={(e) => setAssignedSpeaker(e.target.value)} placeholder={a("speaker")} /></label><label className="drawer-field">{a("answer")}<textarea value={answer} onChange={(e) => setAnswer(e.target.value)} rows="4" /></label></>}<label className="drawer-field">{a("administrativeNotes")}<textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows="3" /></label><button className="admin-primary-button" onClick={() => update(collection, record.id, { notes, assignedSpeaker, answer })}><Check size={16} />{a("saveDetails")}</button></section></div>;
}

const fieldLabels = {
  titleAr: "titleAr", titleEn: "titleEn", year: "year", eventDate: "eventDate", location: "location",
  category: "category", speaker: "speaker", specialty: "specialty", summary: "summary",
  imageUrl: "imageUrl", videoUrl: "videoUrl", platformUrl: "platformUrl",
  vision: "vision", mission: "mission", serviceList: "serviceList",
};
function readManagerField(record, field, lang) {
  if (field === "titleAr") return record.title?.ar || (typeof record.title === "string" && lang === "ar" ? record.title : "") || "";
  if (field === "titleEn") return record.title?.en || (typeof record.title === "string" && lang === "en" ? record.title : "") || "";
  if (field === "imageUrl") return record.image || "";
  if (field === "videoUrl" || field === "platformUrl") return record.url || "";
  if (field === "eventDate") return localized(record.eventDate || record.date, lang);
  return localized(record[field], lang);
}
function managerRecord(section, draft) {
  const { titleAr, titleEn, ...rest } = draft;
  const record = { ...rest, title: { ar: titleAr, en: titleEn } };
  if (record.imageUrl !== undefined) {
    record.image = record.imageUrl;
    delete record.imageUrl;
  }
  if (record.videoUrl !== undefined) {
    record.url = record.videoUrl;
    delete record.videoUrl;
  }
  if (record.platformUrl !== undefined) {
    record.url = record.platformUrl;
    delete record.platformUrl;
  }
  if (record.eventDate !== undefined) {
    record.date = record.eventDate;
    delete record.eventDate;
  }
  return record;
}
function ContentManager({ section, records, lang, a, add, update, remove }) {
  const [editing, setEditing] = useState(null);
  const [draft, setDraft] = useState({});
  const fields = managerFields[section];
  const isNew = editing === "new";
  function startEdit(record) {
    setEditing(record?.id || "new");
    setDraft(record ? Object.fromEntries(fields.map((field) => [field, readManagerField(record, field, lang)])) : Object.fromEntries(fields.map((field) => [field, ""])));
  }
  async function submit(event) {
    event.preventDefault();
    const record = managerRecord(section, draft);
    if (isNew) await add(section, record);
    else await update(section, editing, record);
    setEditing(null);
  }
  return <><AdminPageHeading title={a(section)} subtitle={a("managerSubtitle")} a={a} lang={lang} action={<button className="admin-primary-button" onClick={() => startEdit(null)}><Plus size={16} />{a("addItem")}</button>} />
    <div className="content-manager-layout"><section className="admin-panel content-items-panel"><div className="admin-panel-heading"><div><h2>{a(section)}</h2><p>{records.length} {a("countAssets")}</p></div><span className="content-draft-note">{a("managementNote")}</span></div>{records.length ? <div className="managed-item-list">{records.map((record) => <article className="managed-item" key={record.id}><span className="managed-item-icon">{React.createElement(adminIcons[section] || BookOpen, { size: 18 })}</span><div><strong>{localized(record.title, lang) || record.name || record.id}</strong><small>{localized(record.speaker, lang) || localized(record.category, lang) || record.location || record.url || record.id}</small></div><select className={`managed-status status-${record.status || "published"}`} aria-label={a("status")} value={record.status || "published"} onChange={(e) => update(section, record.id, { status: e.target.value })}><option value="published">{a("published")}</option><option value="draft">{a("draft")}</option></select><button className="managed-edit" onClick={() => startEdit(record)}>{a("editItem")}<ArrowUpLeft size={14} /></button><button className="managed-delete" title={a("deleteItem")} onClick={() => remove(section, record.id)}><X size={15} /></button></article>)}</div> : <div className="admin-empty"><p>{a("noItems")}</p></div>}</section>
      <form className="admin-panel content-editor" onSubmit={submit}><div className="admin-panel-heading"><div><h2>{isNew ? a("newItem") : a("editItem")}</h2><p>{a(section)}</p></div><span className="editor-status-dot" /></div>{fields.map((field) => <label className="admin-form-field" key={field}>{a(fieldLabels[field])}{field === "summary" || field === "vision" || field === "mission" || field === "serviceList" ? <textarea rows="3" value={draft[field] || ""} onChange={(e) => setDraft({ ...draft, [field]: e.target.value })} /> : <input required={field === "titleAr" || field === "titleEn" || field === "title"} type={field === "videoUrl" || field === "imageUrl" || field === "platformUrl" ? "url" : "text"} value={draft[field] || ""} onChange={(e) => setDraft({ ...draft, [field]: e.target.value })} />}</label>)}<div className="editor-actions"><button className="admin-primary-button" type="submit"><Check size={15} />{a("save")}</button>{editing && <button className="admin-cancel-button" type="button" onClick={() => setEditing(null)}>{a("cancel")}</button>}</div><p className="editor-demo-note"><ShieldCheck size={14} />{a("managementNote")}</p></form></div>
  </>;
}

function CertificatesManager({ records, query, setQuery, results, setResults, a, lang }) {
  async function search(event) {
    event.preventDefault();
    setResults(await api.searchCertificates({ name: query, type: "all" }));
  }
  return <><AdminPageHeading title={a("certificates")} subtitle={a("managerSubtitle")} a={a} lang={lang} />
    <div className="cert-admin-grid"><section className="admin-panel onedrive-panel"><div className="onedrive-brand"><span><Link2 size={21} /></span><div><h2>{a("onedriveTitle")}</h2><small>Microsoft Graph API</small></div></div><div className="onedrive-status-row"><span>{a("connectionStatus")}</span><b><i />{a("notConnected")}</b></div><p>{a("onedriveDesc")}</p><div className="onedrive-safety"><ShieldCheck size={18} /><span>{a("neverPublic")}</span></div></section><section className="admin-panel certificate-counts"><div className="admin-panel-heading"><div><h2>{a("certificateFolders")}</h2><p>{a("secureBackend")}</p></div><Award size={18} /></div><div><span>{a("conferenceCertificates")}</span><strong>{records.filter((item) => item.type === "conference").length}</strong></div><div><span>{a("cmaCertificates")}</span><strong>{records.filter((item) => item.type === "cma").length}</strong></div></section></div>
    <section className="admin-panel cert-search-panel"><div className="admin-panel-heading"><div><h2>{a("certificateSearch")}</h2><p>{a("testName")}</p></div></div><form className="admin-cert-search" onSubmit={search}><label className="admin-search"><Search size={16} /><input required value={query} onChange={(e) => setQuery(e.target.value)} placeholder={a("testName")} /></label><button className="admin-primary-button"><Search size={15} />{a("search")}</button></form>{results && <div className="certificate-demo-results"><h3>{a("certificateResults")}</h3>{results.length ? results.map((item) => <div key={item.id}><Award size={17} /><span><strong>{item.name}</strong><small>{item.id} · {item.type === "cma" ? a("cmaCertificates") : a("conferenceCertificates")}</small></span><span className="admin-status status-published">{a("published")}</span></div>) : <p>{a("noCertificateResults")}</p>}</div>}</section>
  </>;
}

function UsersManager({ users, a, add, update, lang }) {
  const [showForm, setShowForm] = useState(false);
  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    await add("users", { name: formData.get("name"), email: formData.get("email"), role: formData.get("role"), active: true });
    form.reset();
    setShowForm(false);
  }
  return <><AdminPageHeading title={a("users")} subtitle={a("usersSubtitle")} a={a} lang={lang} action={<button className="admin-primary-button" onClick={() => setShowForm(!showForm)}><Plus size={16} />{a("addUser")}</button>} />
    {showForm && <form className="admin-panel user-create-form" onSubmit={submit}><label>{a("userName")}<input name="name" required /></label><label>{a("email")}<input name="email" type="email" placeholder={a("usersPlaceholder")} required /></label><label>{a("role")}<select name="role" required>{roleOptions.map((role) => <option key={role} value={role}>{a(role)}</option>)}</select></label><button className="admin-primary-button"><Check size={15} />{a("addUser")}</button></form>}
    <section className="admin-panel users-table-panel"><div className="admin-panel-heading"><div><h2>{a("users")}</h2><p>{users.length} {a("countAssets")}</p></div><UserCog size={19} /></div><div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>{a("userName")}</th><th>{a("email")}</th><th>{a("role")}</th><th>{a("status")}</th><th>{a("actions")}</th></tr></thead><tbody>{users.map((user) => <tr key={user.id}><td><strong>{user.name}</strong></td><td>{user.email}</td><td><select className="role-select" value={user.role} onChange={(e) => update("users", user.id, { role: e.target.value })}>{roleOptions.map((role) => <option value={role} key={role}>{a(role)}</option>)}</select></td><td><span className={`admin-status ${user.active ? "status-approved" : "status-incomplete"}`}>{a(user.active ? "active" : "inactive")}</span></td><td><button className="admin-toggle-button" onClick={() => update("users", user.id, { active: !user.active })}>{a(user.active ? "disable" : "enable")}</button></td></tr>)}</tbody></table></div></section>
    <p className="role-warning"><Shield size={16} />{a("roleWarning")}</p>
  </>;
}

function RoleMatrix({ a, lang }) {
  const [permissions, setPermissions] = useState(() => Object.fromEntries(roleOptions.map((role) => [role, new Set(role === "super_admin" ? permissionModules : role === "content_manager" ? ["gallery", "videos", "guidelines", "hospital"] : role === "scientific_manager" ? ["lectures"] : role === "registration_manager" ? ["registrations"] : role === "questions_admin" ? ["questions"] : ["conference", "certificates"])])));
  function toggle(role, module) {
    setPermissions((current) => {
      const next = new Set(current[role]);
      if (next.has(module)) next.delete(module);
      else next.add(module);
      return { ...current, [role]: next };
    });
  }
  return <><AdminPageHeading title={a("roles")} subtitle={a("roleMatrix")} a={a} lang={lang} /><section className="admin-panel role-matrix-panel"><div className="admin-panel-heading"><div><h2>{a("roleMatrix")}</h2><p>{a("roleWarning")}</p></div><ShieldCheck size={18} /></div><div className="admin-table-wrap"><table className="admin-table permissions-table"><thead><tr><th>{a("permission")}</th>{roleOptions.map((role) => <th key={role}>{a(role)}</th>)}</tr></thead><tbody>{permissionModules.map((module) => <tr key={module}><td><strong>{a(module)}</strong></td>{roleOptions.map((role) => <td key={role}><label className="permission-toggle"><input type="checkbox" checked={permissions[role].has(module)} onChange={() => toggle(role, module)} /><span /></label></td>)}</tr>)}</tbody></table></div><p className="role-warning"><Shield size={16} />{a("roleWarning")}</p></section></>;
}

function Footer({ t, lang, navigate }) {
  return <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><button className="brand" onClick={() => navigate("home")}><span className="brand-mark"><span>ج</span><i /></span><span className="brand-copy"><strong>جَنَى</strong><small>{t("tagline")}</small></span></button><p>{t("footerText")}</p><div className="footer-socials"><a href="mailto:hello@ganna.org" aria-label="Email"><Mail size={16} /></a><button aria-label="Social media" onClick={() => navigate("contact")}><ExternalLink size={16} /></button></div></div><div className="footer-links"><strong>{t("quickLinks")}</strong><div>{["about", "lectures", "certificates", "gallery"].map((item) => <button key={item} onClick={() => navigate(item)}>{labels[lang][item]}</button>)}</div></div><div className="footer-links"><strong>{t("contactUs")}</strong><div><button onClick={() => navigate("contact")}>{labels[lang].contact}</button><button onClick={() => navigate("ask")}>{labels[lang].ask}</button><button onClick={() => navigate("privacy")}>{labels[lang].privacy}</button><button onClick={() => navigate("admin")}>{t("admin")}</button></div></div><div className="footer-next"><span>{t("nextConference")}</span><strong>{conferences[0].title[lang]}</strong><small>{conferences[0].date[lang]}</small><button onClick={() => navigate("register")}>{t("registerNow")}<ArrowUpLeft size={15} /></button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {t("rights")}</span><span>{t("followUs")} <span className="footer-dot">✳</span></span></div></footer>;
}

function Modal({ modal, t, close, lang }) {
  const { kind, record } = modal;
  const title = localized(record.title, lang);
  return <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}><div className={`modal-card ${kind === "image" ? "image-modal" : ""}`} role="dialog" aria-modal="true" aria-label={kind === "lecture" ? t("viewDetails") : kind === "certificate" ? t("preview") : title}><button className="modal-close" onClick={close} aria-label={t("close")}><X size={18} /></button>{kind === "lecture" && <><div className="modal-image"><img src={record.image} alt="" /></div><div className="modal-body"><div className="eyebrow"><span />{localized(record.specialty, lang)}</div><h2>{title}</h2><p className="modal-speaker">{t("speaker")}: {localized(record.speaker, lang)} · {localized(record.session, lang)}</p><h3>{t("lectureOverview")}</h3><p>{localized(record.summary, lang)}</p><h3>{t("keyTopics")}</h3><ul>{(record.topics?.[lang] || []).map((topic) => <li key={topic}>{topic}</li>)}</ul><div className="takeaway"><Sparkles size={18} /><p><strong>{t("keyTakeaway")}</strong>{t("takeawayText")}</p></div></div></>}{kind === "image" && <><img src={record.image} alt={title} /><div className="image-modal-caption"><span>{localized(record.category, lang)}</span><strong>{title}</strong></div></>}{kind === "video" && <><div className="video-modal-poster"><img src={record.image} alt="" /><span className="play-button"><Play size={19} fill="currentColor" /></span></div><div className="modal-body"><div className="eyebrow"><span />{localized(record.speaker, lang)}</div><h2>{title}</h2><p>{t("videoDemo")}</p></div></>}{kind === "certificate" && <div className="modal-body"><div className="certificate-preview"><Award size={35} /><span>GANNA MEDICAL CONFERENCE</span><small>{t("preview")}</small><strong>{record.name}</strong><i>{record.type === "cma" ? t("cma") : t("regular")}</i><span>{record.id}</span></div><p className="certificate-preview-notice">{t("demoUnavailable")}</p></div>}</div></div>;
}

export default App;

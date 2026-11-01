import React, { useEffect, useState } from "react";
import {
  Activity, AtSign, ArrowDown, ArrowLeft, ArrowUpLeft, Award, Baby, BookOpen, Building2,
  CalendarDays, Check, ChevronDown, CircleHelp, ClipboardList, ExternalLink,
  FileCheck2, HeartPulse, Hospital, Image as ImageIcon, Languages, Link2, Mail,
  MapPin, Menu, Phone, Play, Plus, Search, Settings, Shield, ShieldCheck, Sparkles,
  Stethoscope, UserCog, Users, Video, X,
} from "lucide-react";
import { api } from "./api.js";
import { brandLogos, conferences, gallery, GUIDELINES_PLATFORM_URL, labels, lectures, stats, videos } from "./data.js";
import { EGYPTIAN_MOBILE_PATTERN, normalizeEgyptianMobile } from "./phone.js";

const copy = {
  ar: {
    tagline: "المؤتمر العلمي لجنى", homeEyebrow: "معًا من أجل صحة المرأة",
    heroTitle: "معرفة تُحدث فرقًا\nفي صحة المرأة.", heroText: "مساحة تجمع خبرات التوليد وأمراض النساء والخصوبة وعلم الأجنة، وتفتح حوارًا علميًا من أجل رعاية أفضل.",
    explore: "اكتشف المؤتمر", registerNow: "سجل الأن", scroll: "اكتشف المزيد",
    nextConference: "المؤتمر العلمي الخامس عشر", nextTheme: "معًا من أجل صحة المرأة.", nextDate: "٢٣ أكتوبر ٢٠٢٦ · القاهرة",
    statsTitle: "برنامج علمي في أربعة مسارات", statsText: "التوليد وأمراض النساء وعلم الأجنة وورش التوليد المتقدمة، بحسب برنامج المؤتمر.",
    aboutEyebrow: "عن المؤتمر", aboutTitle: "معرفة أقرب إلى رعاية أفضل.", aboutText: "يجمع المؤتمر العلمي الخامس عشر لجنى المتخصصين في التوليد وأمراض النساء والخصوبة وعلم الأجنة لمشاركة المعرفة واستكشاف أحدث الإرشادات والممارسات.",
    learnMore: "تعرف على المؤتمر", highlight: "من قلب المؤتمر", galleryTitle: "لحظات تبقى معنا", viewGallery: "شاهد معرض الصور",
    scienceEyebrow: "المعرفة في متناولك", lecturesTitle: "أفكار تستحق أن تُروى.", lecturesText: "ملخصات علمية لأبرز الجلسات والمتحدثين، لتبقى المعرفة قريبة منك.", browseLectures: "استكشف المحاضرات",
    guideEyebrow: "مرجعك العلمي", guideTitle: "دليل موثوق، بخطوة واحدة.", guideText: "اكتشف المراجع الطبية والإرشادات المعتمدة عبر منصة الجايدلاينز.", guideButton: "اكتشف الجايدلاينز",
    ctaTitle: "مكانك بيننا.", ctaText: "انضم إلى مجتمع مهني يطوّر الحوار والمعرفة في صحة المرأة.", ctaButton: "ابدأ التسجيل",
    footerText: "مجتمع علمي يدعم مستقبلًا أفضل لصحة المرأة.", quickLinks: "روابط سريعة", contactUs: "تواصل معنا", followUs: "تابع رحلتنا", rights: "جميع الحقوق محفوظة لمؤتمر جنى",
    aboutPageEyebrow: "حكايتنا", aboutPageTitle: "الرعاية الأفضل تبدأ بالمعرفة.", aboutPageLead: "مساحة تجمع الخبرات في التوليد وأمراض النساء والخصوبة وعلم الأجنة، وتقرّب المعرفة من كل من يعمل من أجل صحة المرأة.",
    vision: "رؤيتنا", visionText: "مجتمع صحي يملك المعرفة والأدوات لدعم صحة المرأة في كل مراحل حياتها.", mission: "رسالتنا", missionText: "تمكين مقدمي الرعاية بالعلم والحوار والتعاون متعدد التخصصات.",
    goals: "ما نسعى إليه", goal1: "تعزيز الممارسات المبنية على الدليل العلمي.", goal2: "خلق مساحة حوار بين الخبراء ومقدمي الرعاية.", goal3: "دعم التعلم المستمر وتحسين جودة الخدمات.", goal4: "الارتقاء برعاية المرأة وصحة الأم والجنين.",
    principles: "قيم تجمعنا", principle1: "العلم أولًا", principle2: "صحة المرأة", principle3: "نعمل معًا", principle4: "أثر يدوم",
    homeExploreEyebrow: "اكتشف مساحات جنى", homeExploreTitle: "مصادر واضحة، وخطوات أقرب إليك.", homeExploreText: "افتح الإرشادات الطبية، تعرّف على رعاية مستشفى جنى، شاهد محتوى المؤتمر، أو اسأل فريقه.",
    aboutResourcesTitle: "المعرفة والتجربة في مكان واحد.", aboutResourcesText: "استكشف محاضرات المؤتمر ولقطاته؛ محتوى علمي وتجارب مصوّرة تستحق أن تبقى قريبة منك.",
    showcaseGalleryText: "شاهد صورًا مختارة من مجتمع جنى وفعالياته العلمية.", showcaseGalleryAction: "تصفّح كل الصور",
    showcaseVideoText: "لمحة مرئية من أرشيف المؤتمر والجلسات.", showcaseVideoAction: "شاهد المعاينة",
    showcaseGuidelinesText: "مرجع طبي رقمي يسهّل الوصول إلى الإرشادات والمصادر المتخصصة.", showcaseGuidelinesAction: "افتح منصة الإرشادات", showcaseGuidelineTopics: ["التوليد", "أمراض النساء", "الخصوبة"],
    showcaseHospitalText: "تعرّف على خدمات صحة المرأة ورعاية الأم والجنين.", showcaseHospitalAction: "اكتشف المستشفى", showcaseHospitalTopics: ["صحة المرأة", "رعاية الأم والجنين"],
    showcaseAskText: "وجّه سؤالك إلى فريق المؤتمر ليُراجع ويوجّه للمختص.", showcaseAskAction: "أرسل سؤالك",
    showcaseContactText: "نحن هنا للاستفسارات العامة والتعاون.", showcaseContactAction: "تواصل مع الفريق",
    organizerLabel: "تنظيم وإدارة المؤتمرات", organizerName: "Innovators for Organizing Conferences", organizerHandleLabel: "حساب التواصل", organizerHandle: "innovators_conferences",
    contactPhoneLabel: "اتصل بنا", contactEmailLabel: "راسلنا",
    pageCertificates: "شهاداتك هنا", certTitle: "ابحث عن شهادتك.", certText: "ابحث بالاسم الإنجليزي كما هو مكتوب في الشهادة. يمكنك كتابة الاسم مع أو بدون Doctor أو Dr. النتائج تجريبية.",
    certType: "نوع الشهادة", allTypes: "كل الشهادات", regular: "شهادة حضور", cme: "شهادة CME", registeredName: "الاسم بالإنجليزية كما في الشهادة", namePlaceholder: "Dr. Mona Mohammed Abdelgader Mohammed", registeredPhone: "رقم الهاتف المسجل لشهادة CME", phonePlaceholder: "01203350245", phoneError: "أدخل رقمًا مصريًا صحيحًا من 11 رقمًا يبدأ بـ 010 أو 011 أو 012 أو 015.", certSearch: "ابحث عن شهادة", searching: "جارٍ البحث...", noCert: "لم نعثر على شهادة مطابقة. اكتب الاسم الإنجليزي كما هو مكتوب في الشهادة ورقم الهاتف الصحيح لشهادة CME.", certFound: "شهادات مطابقة", preview: "معاينة", download: "تنزيل PDF", openDocument: "فتح الشهادة في نافذة جديدة", secureCertificateNote: "تم التحقق من الشهادة. يمكنك معاينتها أو تنزيلها بأمان.", certificateLinkUnavailable: "تعذر الوصول إلى ملف الشهادة بأمان. حاول مرة أخرى أو تواصل مع فريق المؤتمر.", demoUnavailable: "هذه ملفات وبيانات تجريبية للعرض فقط وليست شهادات حقيقية. البحث عن شهادة حقيقية وتنزيلها يتطلب Backend آمنًا.",
    pageGallery: "ألبومات المؤتمر", galleryPageTitle: "حكايات في صور.", allAlbums: "الكل", albumEvents: "الفعاليات", albumSessions: "الجلسات العلمية", albumCommunity: "المجتمع", photoNote: "تضم هذه المجموعة كل الصور المضافة إلى مجلد data، ويمكن إدارة الألبومات لاحقًا من لوحة المحتوى.",
    pageVideos: "من أرشيفنا", videosTitle: "شاهد، وتذكّر، وتعلّم.", watch: "شاهد الفيديو", videoDemo: "الفيديوهات المعروضة نماذج تصميمية؛ تضاف روابط البث من لوحة المحتوى.",
    pageLectures: "مكتبة المعرفة", lecturePageTitle: "العلم يستمر بعد الجلسة.", filterBy: "تصفية حسب", filterSpecialty: "التخصص", filterSpeaker: "المتحدث", filterSession: "الجلسة العلمية", allSpecialties: "كل التخصصات", allSpeakers: "كل المتحدثين", allSessions: "كل الجلسات", viewDetails: "تفاصيل المحاضرة", speaker: "المتحدث", specialty: "التخصص", session: "الجلسة العلمية", lectureOverview: "نبذة عن المحاضرة", keyTopics: "محاور أساسية", keyTakeaway: "الفكرة الأهم", takeawayText: "الموضوعات المعروضة نماذج تصميمية مستوحاة من برنامج المؤتمر، وليست إرشادات أو استشارات طبية.", noLectures: "لا توجد محاضرات ضمن هذا الاختيار.",
    pageGuidelines: "دليلك الطبي", guidePageTitle: "المعرفة الموثوقة، أقرب إليك.", guidePageText: "استكشف المراجع والإرشادات الطبية المعتمدة عبر منصة الجايدلاينز.", openSearch: "افتح منصة الجايدلاينز", accessPlatform: "زيارة المنصة", externalPending: "ستُفتح منصة الإرشادات الطبية في نافذة جديدة.",
    pageHospital: "مكان الرعاية تبدأ", hospitalTitle: "مستشفى جنى لصحة المرأة.", hospitalText: "مساحة تجريبية للتعريف بخدمات صحة المرأة والتوليد والخصوبة، مع رعاية تراعي احتياجات المرأة والأسرة.", hospitalServices: "خدمات وتخصصات", service1: "أمراض النساء", service2: "رعاية الحمل والولادة", service3: "الخصوبة وعلم الأجنة", service4: "صحة الأم والجنين", hospitalVision: "رؤيتنا في الرعاية", hospitalVisionText: "رعاية ترافق المرأة باحترام واهتمام في مختلف مراحل حياتها.",
    pageAsk: "نسمعك باهتمام", askTitle: "اسأل الخبراء.", askText: "أرسل سؤالك إلى إدارة المؤتمر. تتم مراجعته وتوجيهه للمختص عند الحاجة. لا يُعد هذا النموذج خدمة طوارئ أو استشارة طبية مباشرة.", fullName: "الاسم بالكامل", email: "البريد الإلكتروني", phone: "رقم الهاتف", yourQuestion: "سؤالك", questionPlaceholder: "اكتب سؤالك هنا...", submitQuestion: "إرسال السؤال", submitting: "جارٍ الإرسال...", privateNote: "هذه واجهة تجريبية؛ لا ترسل معلومات شخصية أو طبية حقيقية.", sentQuestion: "تم إرسال سؤالك بنجاح", questionId: "رقم السؤال", questionDisclaimer: "إرسال السؤال لا يضمن الرد الطبي أو الاستشاري.", dataUseConsent: "أوافق على استخدام بياناتي لغرض مراجعة طلبي والرد عليه.",
    pageRegister: "خطوتك الأولى", registerTitle: "سجّل للمؤتمر القادم.", registerText: "املأ بياناتك لتقديم طلب التسجيل. ستقوم إدارة المؤتمر بمراجعته يدويًا.", participantType: "صفة المشارك", choose: "اختر", doctor: "طبيب / طبيبة", student: "طالب / طالبة طب", uploadDocument: "إثبات الصفة", uploadHint: "PDF أو JPG أو PNG — الحد الأقصى 10MB", documentRequired: "يرجى إرفاق إثبات الصفة.", registrationConsent: "أوافق على استخدام بياناتي لغرض مراجعة طلب التسجيل.", submitRegistration: "إرسال طلب التسجيل", sentRegistration: "تم استلام طلب التسجيل", registrationId: "رقم التسجيل", approvalNote: "سيظهر الطلب لدى إدارة المؤتمر للمراجعة والموافقة اليدوية.", selectFile: "اختر ملفًا",
    pageContact: "نحن هنا", contactTitle: "يسعدنا أن نسمع منك.", contactText: "للاستفسارات العامة والتعاون، تواصل مع فريق مؤتمر جنى.", emailUs: "راسلنا", location: "الموقع", locationValue: "فندق سميراميس إنتركونتيننتال، القاهرة", conferenceOffice: "مكتب المؤتمر", officeText: "فريق جنى الطبي · الأحد إلى الخميس", sendEmail: "إرسال بريد إلكتروني", contactNote: "للاستفسارات العلمية، يُرجى استخدام نموذج اسأل الخبراء.",
    admin: "لوحة الإدارة", adminDemo: "وضع تجريبي", adminTitle: "إدارة المؤتمر", adminText: "واجهة استعراضية فقط. تسجيل الدخول والصلاحيات وتخزين البيانات تحتاج Backend قبل الاستخدام الفعلي.", overview: "نظرة عامة", registrations: "طلبات التسجيل", questions: "أسئلة الخبراء", content: "المحتوى العلمي", pending: "قيد المراجعة", approved: "مقبول", answered: "تمت الإجابة", underReview: "تحت المراجعة", assigned: "محال إلى خبير", closed: "مغلق", reject: "مرفوض", incomplete: "غير مكتمل", noRecords: "لا توجد طلبات بعد في هذه الجلسة.", status: "الحالة", submittedAt: "تاريخ الإرسال", management: "الإدارة", requestsCount: "طلبات التسجيل", questionsCount: "الأسئلة الواردة", lecturesCount: "المحاضرات", securityDemo: "لوحة الإدارة هنا غير محمية — لا تستخدمها مع بيانات حقيقية قبل تنفيذ المصادقة والصلاحيات في الـbackend.",
    toastError: "حدث خطأ. حاول مرة أخرى.", sentToast: "تم الإرسال بنجاح", chooseFile: "يرجى اختيار ملف إثبات الصفة.", fileTooLarge: "حجم الملف يجب ألا يتجاوز 10MB.", invalidFile: "الملفات المقبولة PDF أو JPG أو PNG.", messageSent: "سيفتح تطبيق البريد لإكمال رسالتك.", openPreview: "المعاينة التجريبية", close: "إغلاق", english: "English", arabic: "العربية", menu: "القائمة",
  },
  en: {
    tagline: "Ganna Scientific Conference", homeEyebrow: "Together for women's health",
    heroTitle: "Knowledge that moves\nwomen's health forward.", heroText: "Bringing together expertise in obstetrics, gynecology, fertility, and embryology to share ideas and shape better care.",
    explore: "Explore the conference", registerNow: "Register your interest", scroll: "Discover more",
    nextConference: "GANNA'S 15TH SCIENTIFIC CONFERENCE", nextTheme: "Together for women's health.", nextDate: "23 October 2026 · Cairo",
    statsTitle: "A scientific programme across four halls", statsText: "Obstetrics, gynecology, embryology, and an advanced obstetrics workshop, as listed in the conference programme.",
    aboutEyebrow: "ABOUT THE CONFERENCE", aboutTitle: "Knowledge that brings better care closer.", aboutText: "Ganna's 15th Scientific Conference brings together specialists in obstetrics, gynecology, fertility, and embryology to share knowledge and explore current guidance and practice.",
    learnMore: "Get to know Ganna", highlight: "INSIDE THE CONFERENCE", galleryTitle: "Moments worth keeping", viewGallery: "Explore the gallery",
    scienceEyebrow: "KNOWLEDGE, WITH YOU", lecturesTitle: "Ideas worth sharing.", lecturesText: "Scientific summaries of key sessions and speakers, keeping knowledge close.", browseLectures: "Explore lectures",
    guideEyebrow: "YOUR SCIENTIFIC RESOURCE", guideTitle: "Trusted guidance, one click away.", guideText: "Explore trusted medical references and guidelines through our guidelines platform.", guideButton: "Explore guidelines",
    ctaTitle: "There's a place for you here.", ctaText: "Join a professional community advancing dialogue and knowledge in women's health.", ctaButton: "Start registration",
    footerText: "A scientific community supporting the future of women's health.", quickLinks: "Quick links", contactUs: "Contact us", followUs: "Follow our journey", rights: "Ganna Conference. All rights reserved.",
    aboutPageEyebrow: "OUR STORY", aboutPageTitle: "Better care begins with knowledge.", aboutPageLead: "A space connecting expertise in obstetrics, gynecology, fertility, and embryology with everyone working for women's health.",
    vision: "Our vision", visionText: "A health community equipped to support women's health at every stage of life.", mission: "Our mission", missionText: "Empowering care providers through science, dialogue, and multidisciplinary collaboration.",
    goals: "What we work toward", goal1: "Advance evidence-based clinical practice.", goal2: "Create dialogue between experts and care providers.", goal3: "Support continuous learning and quality improvement.", goal4: "Advance care for women, mothers, and babies.",
    principles: "Values that bring us together", principle1: "Science first", principle2: "Women's health", principle3: "Better together", principle4: "Lasting impact",
    homeExploreEyebrow: "EXPLORE GANNA", homeExploreTitle: "Clear resources. A closer next step.", homeExploreText: "Open medical guidance, discover Ganna Hospital care, revisit conference content, or ask the team.",
    aboutResourcesTitle: "Knowledge and experiences, together.", aboutResourcesText: "Explore conference lectures and highlights: scientific content and shared moments worth revisiting.",
    showcaseGalleryText: "A curated look at the Ganna community and its scientific events.", showcaseGalleryAction: "Explore all photos",
    showcaseVideoText: "A visual preview from the conference and its sessions.", showcaseVideoAction: "Play the preview",
    showcaseGuidelinesText: "A digital medical library that brings specialist guidance and resources within reach.", showcaseGuidelinesAction: "Open the guidelines platform", showcaseGuidelineTopics: ["Obstetrics", "Gynecology", "Fertility"],
    showcaseHospitalText: "Discover women's health and maternal-fetal care services.", showcaseHospitalAction: "Discover the hospital", showcaseHospitalTopics: ["Women's health", "Maternal-fetal care"],
    showcaseAskText: "Send your question to the conference team for review and routing.", showcaseAskAction: "Ask a question",
    showcaseContactText: "We're here for general enquiries and collaboration.", showcaseContactAction: "Contact the team",
    organizerLabel: "Conference organizer", organizerName: "Innovators for Organizing Conferences", organizerHandleLabel: "Social account", organizerHandle: "innovators_conferences",
    contactPhoneLabel: "Call us", contactEmailLabel: "Email us",
    pageCertificates: "YOUR CERTIFICATES", certTitle: "Find your certificate.", certText: "Search using the English name as printed on the certificate. You can include or omit Doctor or Dr. Results are demo records only.",
    certType: "Certificate type", allTypes: "All certificates", regular: "Attendance certificate", cme: "CME certificate", registeredName: "Name in English as printed", namePlaceholder: "Dr. Mona Mohammed Abdelgader Mohammed", registeredPhone: "Phone number for CME certificate", phonePlaceholder: "01203350245", phoneError: "Enter a valid 11-digit Egyptian mobile number starting with 010, 011, 012, or 015.", certSearch: "Search certificates", searching: "Searching...", noCert: "No matching certificate found. Enter the English name as printed on the certificate and the correct phone for CME.", certFound: "Matching certificates", preview: "Preview", download: "Download PDF", openDocument: "Open certificate in a new tab", secureCertificateNote: "Your certificate is verified and ready to preview or download securely.", certificateLinkUnavailable: "The certificate file is not available securely. Try again or contact the conference team.", demoUnavailable: "These files and records are for demonstration only; they are not real certificates. Searching for and downloading real certificates requires a secure backend.",
    pageGallery: "CONFERENCE ALBUMS", galleryPageTitle: "Stories in photographs.", allAlbums: "All", albumEvents: "Highlights", albumSessions: "Scientific sessions", albumCommunity: "Community", photoNote: "This gallery includes every photo supplied in the data folder. Albums can be managed through the content dashboard later.",
    pageVideos: "FROM OUR ARCHIVE", videosTitle: "Watch, remember, learn.", watch: "Watch video", videoDemo: "These videos are design samples; streaming links will be added through the content dashboard.",
    pageLectures: "KNOWLEDGE LIBRARY", lecturePageTitle: "The learning continues after the session.", filterBy: "Filter by", filterSpecialty: "Specialty", filterSpeaker: "Speaker", filterSession: "Scientific session", allSpecialties: "All specialties", allSpeakers: "All speakers", allSessions: "All sessions", viewDetails: "View details", speaker: "Speaker", specialty: "Specialty", session: "Scientific session", lectureOverview: "About this lecture", keyTopics: "Key topics", keyTakeaway: "Key takeaway", takeawayText: "Topics shown here are illustrative samples inspired by the conference programme, not medical guidance or advice.", noLectures: "No lectures match this selection.",
    pageGuidelines: "YOUR MEDICAL RESOURCE", guidePageTitle: "Trusted knowledge, within reach.", guidePageText: "Explore trusted medical references and evidence-based guidance through the guidelines platform.", openSearch: "Open the guidelines platform", accessPlatform: "Visit the platform", externalPending: "The medical-guidelines platform opens in a new tab.",
    pageHospital: "WHERE CARE BEGINS", hospitalTitle: "Ganna Women's Health Hospital.", hospitalText: "A sample introduction to women's health, obstetrics, and fertility services, centred on the needs of women and families.", hospitalServices: "Services & specialties", service1: "Gynecology", service2: "Pregnancy and birth care", service3: "Fertility and embryology", service4: "Maternal-fetal health", hospitalVision: "A caring vision", hospitalVisionText: "Care that supports women with respect and attention at every stage of life.",
    pageAsk: "WE'RE LISTENING", askTitle: "Ask the experts.", askText: "Send your question to the conference team. It will be reviewed and routed to a specialist when appropriate. This is not an emergency service or direct medical consultation.", fullName: "Full name", email: "Email address", phone: "Phone number", yourQuestion: "Your question", questionPlaceholder: "Write your question here...", submitQuestion: "Submit question", submitting: "Submitting...", privateNote: "This is a demo interface; do not submit real personal or medical information.", sentQuestion: "Your question was received", questionId: "Question ID", questionDisclaimer: "Submitting a question does not guarantee a medical or advisory response.", dataUseConsent: "I agree to the use of my information to review and respond to my request.",
    pageRegister: "YOUR NEXT STEP", registerTitle: "Register for the next conference.", registerText: "Fill in your details to submit a registration request. The conference team will review it manually.", participantType: "Participant type", choose: "Choose", doctor: "Doctor", student: "Medical student", uploadDocument: "Proof of status", uploadHint: "PDF, JPG or PNG — max 10MB", documentRequired: "Please attach proof of participant status.", registrationConsent: "I agree to the use of my information to review my registration request.", submitRegistration: "Submit registration", sentRegistration: "Registration request received", registrationId: "Registration ID", approvalNote: "Your request will be sent to the conference team for manual review and approval.", selectFile: "Choose a file",
    pageContact: "LET'S CONNECT", contactTitle: "We'd love to hear from you.", contactText: "For general enquiries and collaboration, get in touch with the Ganna Conference team.", emailUs: "Email us", location: "Location", locationValue: "Semiramis InterContinental, Cairo", conferenceOffice: "Conference office", officeText: "Ganna Medical Team · Sunday to Thursday", sendEmail: "Send an email", contactNote: "For scientific questions, please use the Ask the Experts form.",
    admin: "Admin dashboard", adminDemo: "DEMO MODE", adminTitle: "Conference management", adminText: "Design preview only. Authentication, role permissions, and persistent storage must be implemented in the backend before launch.", overview: "Overview", registrations: "Registrations", questions: "Expert questions", content: "Scientific content", pending: "Pending", approved: "Approved", answered: "Answered", underReview: "Under review", assigned: "Assigned to speaker", closed: "Closed", reject: "Rejected", incomplete: "Incomplete", noRecords: "No requests in this session yet.", status: "Status", submittedAt: "Submitted", management: "MANAGEMENT", requestsCount: "Registration requests", questionsCount: "Incoming questions", lecturesCount: "Lectures", securityDemo: "This dashboard is not protected. Do not use it with real data until backend authentication and permissions are implemented.",
    toastError: "Something went wrong. Please try again.", sentToast: "Sent successfully", chooseFile: "Please attach proof of participant type.", fileTooLarge: "File size must be under 10MB.", invalidFile: "Accepted file types are PDF, JPG, and PNG.", messageSent: "Your email app will open to complete your message.", openPreview: "Demo preview", close: "Close", english: "English", arabic: "العربية", menu: "Menu",
  },
};

const mainNav = ["home", "contact", "lectures", "certificates"];
const moreNav = ["about", "gallery", "videos", "guidelines", "hospital", "ask"];
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
    onedriveTitle: "تكامل OneDrive", onedriveDesc: "مساحة الشهادات لا تُعرض للعامة. يجب تنفيذ البحث والتنزيل من خلال Microsoft Graph API في الـbackend.", connectionStatus: "حالة الربط", notConnected: "غير مربوط", secureBackend: "يلزم Backend آمن", certificateFolders: "مجلدات الشهادات", conferenceCertificates: "شهادات المؤتمر", cmeCertificates: "شهادات CME", certificateSearch: "بحث تجريبي عن شهادة", testName: "اكتب اسمًا للبحث في بيانات العرض فقط", search: "بحث", certificateResults: "نتائج تجريبية", noCertificateResults: "لا توجد نتائج مطابقة.", neverPublic: "لا تضع رابط مجلد OneDrive عامًا ولا تحفظ بيانات الاعتماد في الواجهة.",
    usersSubtitle: "معاينة حسابات الإدارة والأدوار المتاحة.", addUser: "إضافة مستخدم", userName: "اسم المستخدم", role: "الدور الإداري", userAdded: "تمت إضافة المستخدم التجريبي.", disable: "إيقاف", enable: "تفعيل", super_admin: "مدير عام", content_manager: "مدير المحتوى", scientific_manager: "مدير علمي", registration_manager: "مدير التسجيل", questions_admin: "مسؤول الأسئلة", technical_admin: "مسؤول تقني", roleMatrix: "مصفوفة الأدوار والصلاحيات", permission: "الصلاحية", usersPlaceholder: "name@example.com", roleWarning: "هذه المصفوفة للعرض فقط. فرض الصلاحيات يجب أن يتم على الخادم وليس في الواجهة.",
    signOut: "تسجيل الخروج", backToSite: "العودة للموقع", notifications: "الإشعارات", moduleEmpty: "هذا القسم جاهز للربط، أضف بياناته عبر النموذج.", noSearchResults: "لا توجد نتائج مطابقة.", overview: "نظرة عامة", contentPublished: "عناصر منشورة", updatedRecently: "آخر تحديث اليوم", toReview: "للمراجعة",
  },
  en: {
    dashboard: "Overview", conference: "Conference details", certificates: "Certificates", gallery: "Photo gallery", videos: "Videos", lectures: "Lectures", guidelines: "Guidelines", hospital: "Hospital profile", questions: "Expert questions", registrations: "Registrations", users: "Users", roles: "Roles & permissions",
    workspace: "WORKSPACE", siteContent: "SITE CONTENT", engagement: "ENGAGEMENT", administration: "ADMINISTRATION", welcome: "Welcome back", dashboardSubtitle: "Here's a quick look at what's happening across Ganna Conference.", searchPlaceholder: "Search the dashboard...", adminProfile: "Administrator", liveDemo: "DEMO ENVIRONMENT", apiDisconnected: "Backend disconnected", securityNotice: "Preview only: there is no real login or authorization. Do not use this dashboard with real data until backend authentication and role checks are implemented.",
    totalRegistrations: "Total registrations", awaitingReview: "Awaiting review", openQuestions: "Open questions", publishedLectures: "Published lectures", recentActivity: "Recent activity", registrationPipeline: "Registration pipeline", latestQuestions: "Latest questions", viewAll: "View all", noRecords: "No records in this session yet.", all: "All", pending: "Pending", under_review: "Under review", assigned: "Assigned to speaker", answered: "Answered", closed: "Closed", approved: "Approved", rejected: "Rejected", incomplete: "Incomplete", published: "Published", draft: "Draft", needs_setup: "Needs setup", active: "Active", inactive: "Inactive",
    countRegistrations: "registration requests", countQuestions: "incoming questions", countLectures: "lectures", countAssets: "items", record: "Name / content", type: "Type", email: "Email", phone: "Phone", date: "Submitted", status: "Status", actions: "Action", searchRecords: "Search name, email or ID...", filterStatus: "Filter status", changeStatus: "Change status", inspect: "Details", participant: "Participant type", document: "Document", viewDocument: "View filename", question: "Question", answer: "Answer", administrativeNotes: "Admin notes", assignedSpeaker: "Assigned expert", saveDetails: "Save details", detailsSaved: "Demo changes saved", registrationDetails: "Registration details", questionDetails: "Manage question", privateRecord: "This information is private and is never shown publicly.",
    managerSubtitle: "Edit demo content that can later be connected to your data source.", addItem: "Add item", editItem: "Edit item", newItem: "New item", save: "Save changes", cancel: "Cancel", deleteItem: "Delete", confirmDelete: "Delete this demo item?", saved: "Saved for this session.", itemAdded: "Item added.", titleAr: "Title in Arabic", titleEn: "Title in English", title: "Title", year: "Year", eventDate: "Conference date", location: "Location", category: "Category", speaker: "Speaker", specialty: "Specialty", summary: "Summary", imageUrl: "Image URL", videoUrl: "Video URL", platformUrl: "Platform URL", vision: "Vision", mission: "Mission", serviceList: "Specialties & services", required: "This field is required.", noItems: "No items yet.", managementNote: "Changes in this frontend demo are temporary and stored in memory; connect a backend to persist and publish them.",
    onedriveTitle: "OneDrive integration", onedriveDesc: "Certificate storage must remain private. Search and downloads should run through Microsoft Graph API on the backend.", connectionStatus: "Connection status", notConnected: "Not connected", secureBackend: "Secure backend required", certificateFolders: "Certificate folders", conferenceCertificates: "Conference certificates", cmeCertificates: "CME certificates", certificateSearch: "Demo certificate search", testName: "Search sample records by name", search: "Search", certificateResults: "Demo results", noCertificateResults: "No matching records.", neverPublic: "Never make a OneDrive folder public or store credentials in the frontend.",
    usersSubtitle: "Preview administrator accounts and available roles.", addUser: "Add user", userName: "User name", role: "Role", userAdded: "Demo user added.", disable: "Disable", enable: "Enable", super_admin: "Super admin", content_manager: "Content manager", scientific_manager: "Scientific manager", registration_manager: "Registration manager", questions_admin: "Questions administrator", technical_admin: "Technical administrator", roleMatrix: "Role permissions matrix", permission: "Permission", usersPlaceholder: "name@example.com", roleWarning: "This matrix is for preview only. Permissions must be enforced server-side, never in the frontend.",
    signOut: "Sign out", backToSite: "Back to website", notifications: "Notifications", moduleEmpty: "This section is ready to connect. Add its details using the form.", noSearchResults: "No matching results.", overview: "Overview", contentPublished: "Published items", updatedRecently: "Updated today", toReview: "Needs review",
  },
};

function App() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
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

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0a111c" : "#f1f4f7");
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const syncTheme = (event) => setTheme(event.matches ? "dark" : "light");
    setTheme(preference.matches ? "dark" : "light");
    preference.addEventListener("change", syncTheme);
    return () => preference.removeEventListener("change", syncTheme);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
    const targets = document.querySelectorAll("main .stat-item, main .about-preview-copy, main .lecture-card, main .showcase-card, main .showcase-lecture-item, main .showcase-gallery-shot, main .closing-cta, main .goal-item, main .values-row > div, main .video-card, main .gallery-card, main .service-card, main .contact-card, main .certificate-panel, main .form-card, main .admin-panel, main .admin-metric-card");
    targets.forEach((target) => {
      target.classList.add("reveal-on-scroll");
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, [page]);

  function notify(message) {
    setToast(message);
    if (toastTimer) window.clearTimeout(toastTimer);
    setToastTimer(window.setTimeout(() => setToast(""), 3200));
  }

  function navigate(nextPage) {
    if (import.meta.env.PROD && nextPage === "admin") return;
    setPage(nextPage);
    setMobileMenu(false);
    setMoreOpen(false);
    setModal(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function switchLanguage() {
    setLang((current) => current === "ar" ? "en" : "ar");
  }

  const navLabel = (key) => labels[lang][key];

  return (
    <div className={`site-shell ${isAr ? "is-rtl" : "is-ltr"}`}>
      <header className="site-header">
        <button className="brand brand-pair" onClick={() => navigate("home")} aria-label="Ganna Conference and Hospitals home">
          <BrandLogoPair />
        </button>
        <nav className={`main-nav ${mobileMenu ? "nav-open" : ""}`} aria-label={t("menu")}>
          {mainNav.map((key) => (
            <button key={key} className={page === key ? "nav-link active" : "nav-link"} onClick={() => navigate(key)}>{navLabel(key)}</button>
          ))}
          <div className="more-wrap">
            <button className="nav-link more-trigger" onClick={() => setMoreOpen(!moreOpen)} aria-expanded={moreOpen} aria-controls="more-navigation">
              <Sparkles size={14} aria-hidden="true" />
              <span>{isAr ? "المزيد" : "Explore"}</span>
              <ChevronDown size={14} aria-hidden="true" />
            </button>
            {moreOpen && (
              <div className="more-menu" id="more-navigation">
                <div className="more-menu-heading">
                  <span><Sparkles size={14} />{isAr ? "استكشف جنى" : "EXPLORE GANNA"}</span>
                  <p>{isAr ? "كل ما تحتاج معرفته عن المؤتمر" : "More ways to connect with the conference"}</p>
                </div>
                <div className="more-menu-links">
                  {moreNav.map((key) => <button key={key} onClick={() => navigate(key)}>{navLabel(key)}<ArrowUpLeft size={14} /></button>)}
                </div>
              </div>
            )}
          </div>
          {!import.meta.env.PROD && <button className="nav-link admin-nav" onClick={() => navigate("admin")}>{t("admin")}</button>}
        </nav>
        <div className="header-actions">
          <button className="language-toggle" onClick={switchLanguage} aria-label="Switch language"><Languages size={16} /><span>{isAr ? "EN" : "عربي"}</span></button>
          <button className="header-register" onClick={() => navigate("register")}>{t("registerNow")}<ArrowUpLeft size={15} /></button>
          <button className="mobile-menu-button" onClick={() => setMobileMenu(!mobileMenu)} aria-label={t("menu")}>{mobileMenu ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </header>

      <main>
        {page === "home" && <HomePage t={t} lang={lang} navigate={navigate} openModal={setModal} publicContent={publicContent} />}
        {page === "about" && <AboutPage t={t} lang={lang} navigate={navigate} openModal={setModal} publicContent={publicContent} />}
        {page === "certificates" && <CertificatesPage t={t} lang={lang} notify={notify} openModal={setModal} />}
        {page === "gallery" && <GalleryPage t={t} lang={lang} openModal={setModal} items={publicContent.gallery} />}
        {page === "videos" && <VideosPage t={t} lang={lang} openModal={setModal} items={publicContent.videos} />}
        {page === "lectures" && <LecturesPage t={t} lang={lang} openModal={setModal} items={publicContent.lectures} />}
        {page === "guidelines" && <GuidelinesPage t={t} platformUrl={publicContent.guidelines?.[0]?.url} />}
        {page === "hospital" && <HospitalPage t={t} lang={lang} profile={publicContent.hospital?.[0]} />}
        {page === "ask" && <AskPage t={t} lang={lang} notify={notify} />}
        {page === "register" && <RegistrationPage t={t} lang={lang} notify={notify} />}
        {page === "contact" && <ContactPage t={t} />}
        {page === "admin" && !import.meta.env.PROD && <AdminPage t={t} lang={lang} onExit={() => navigate("home")} />}
      </main>

      {(page !== "admin" || import.meta.env.PROD) && <Footer t={t} lang={lang} navigate={navigate} />}
      {modal && <Modal modal={modal} t={t} close={() => setModal(null)} lang={lang} />}
      {toast && <div className="toast" role="status"><Check size={17} />{toast}</div>}
    </div>
  );
}

function HomePage({ t, lang, navigate, openModal, publicContent }) {
  const isAr = lang === "ar";
  const nextConference = publicContent.conferences?.find((item) => item.status !== "draft") || conferences[0];
  const previewVideo = publicContent.videos[0];
  const guidelinesUrl = publicContent.guidelines?.[0]?.url || GUIDELINES_PLATFORM_URL;
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
      <div className="hero-side-caption">{isAr ? "المؤتمر العلمي الخامس عشر · ٢٠٢٦" : "GANNA 15TH SCIENTIFIC CONFERENCE · 2026"}</div>
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
      <div className="about-image"><img src={publicContent.gallery[0]?.image || gallery[0].image} alt="" /><span className="image-note">{isAr ? "رعاية تنطلق من المعرفة" : "CARE INFORMED BY KNOWLEDGE"}</span></div>
      <div className="about-preview-copy"><div className="eyebrow"><span />{t("aboutEyebrow")}</div><h2>{t("aboutTitle")}</h2><p>{t("aboutText")}</p><button className="text-link" onClick={() => navigate("about")}>{t("learnMore")}<ArrowLeft size={16} /></button><div className="about-scribble">جنى</div></div>
    </section>

    <section className="home-explore section-wrap">
      <div className="home-explore-heading">
        <div><div className="eyebrow"><span />{t("homeExploreEyebrow")}</div><h2>{t("homeExploreTitle")}</h2><p>{t("homeExploreText")}</p></div>
        <span className="home-explore-count">04 <i>/</i> {isAr ? "مساحات" : "EXPERIENCES"}</span>
      </div>
    </section>

    {previewVideo && <section className="home-resource-section home-video-section section-wrap">
      <SectionHeading eyebrow={t("pageVideos")} title={t("videosTitle")} text={t("showcaseVideoText")} action={t("pageVideos")} onAction={() => navigate("videos")} />
      <div className="home-video-feature">
        <button className="showcase-video-poster" onClick={() => openModal({ kind: "video", record: previewVideo })} aria-label={`${t("showcaseVideoAction")}: ${localized(previewVideo.title, lang)}`}><img src={previewVideo.image} alt="" /><span className="showcase-play"><Play size={19} fill="currentColor" /></span><span className="showcase-duration">{previewVideo.duration}</span></button>
        <div className="home-video-copy"><div className="home-feature-index">01 <span>/ {isAr ? "من الأرشيف" : "FROM THE ARCHIVE"}</span></div><h3>{localized(previewVideo.title, lang)}</h3><button className="showcase-primary-link" onClick={() => openModal({ kind: "video", record: previewVideo })}>{t("showcaseVideoAction")}<Play size={14} /></button></div>
      </div>
    </section>}

    <section className="home-resource-section home-guidelines-section section-wrap">
      <SectionHeading eyebrow={t("pageGuidelines")} title={t("guideTitle")} text={t("showcaseGuidelinesText")} />
      <div className="home-guidelines-feature">
        <div className="home-guidelines-visual" aria-hidden="true"><div className="showcase-guide-cover"><BookOpen size={28} /><span>{t("guideEyebrow")}</span><strong>{t("pageGuidelines")}</strong><i /></div><span className="home-guidelines-decoration">+</span></div>
        <div className="home-guidelines-copy"><div className="home-feature-index">02 <span>{t("guideEyebrow")}</span></div><div className="showcase-topic-list">{t("showcaseGuidelineTopics").map((topic) => <span key={topic}>{topic}</span>)}</div><a className="showcase-primary-link" href={guidelinesUrl} target="_blank" rel="noopener noreferrer">{t("showcaseGuidelinesAction")}<ExternalLink size={15} /></a></div>
      </div>
    </section>

    <section className="home-resource-section home-hospital-section section-wrap">
      <SectionHeading eyebrow={t("pageHospital")} title={t("hospitalTitle")} text={t("showcaseHospitalText")} />
      <div className="home-hospital-feature"><div className="home-hospital-identity"><BrandLogoPair showcase /><span>{isAr ? "رعاية متخصصة لصحة المرأة" : "SPECIALIST WOMEN'S HEALTHCARE"}</span></div>
        <div className="home-hospital-copy"><div className="home-feature-index">03 <span>{t("pageHospital")}</span></div><div className="showcase-topic-list">{t("showcaseHospitalTopics").map((topic) => <span key={topic}>{topic}</span>)}</div><button className="showcase-primary-link" onClick={() => navigate("hospital")}>{t("showcaseHospitalAction")}<ArrowUpLeft size={15} /></button></div>
      </div>
    </section>

    <section className="home-resource-section home-ask-section section-wrap">
      <SectionHeading eyebrow={t("pageAsk")} title={t("askTitle")} text={t("showcaseAskText")} />
      <div className="home-ask-feature"><div className="home-ask-icon"><CircleHelp size={29} /></div><div className="home-ask-copy"><div className="home-feature-index">04 <span>{t("pageAsk")}</span></div></div><button className="showcase-primary-link" onClick={() => navigate("ask")}>{t("showcaseAskAction")}<ArrowUpLeft size={15} /></button></div>
    </section>

    <section className="closing-cta"><div className="cta-brand-watermark" aria-hidden="true"><BrandLogoPair showcase /></div><div className="eyebrow light-eyebrow"><span />{t("nextConference")}</div><h2>{t("ctaTitle")}</h2><p>{t("ctaText")}</p><button className="button button-light" onClick={() => navigate("register")}>{t("ctaButton")}<ArrowLeft size={17} /></button><div className="cta-date"><CalendarDays size={15} />{t("nextDate")}</div></section>
  </>;
}

function SectionHeading({ eyebrow, title, text, action, onAction }) {
  return <div className="section-heading"><div><div className="eyebrow"><span />{eyebrow}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>{action && <button className="text-link section-heading-link" onClick={onAction}>{action}<ArrowLeft size={16} /></button>}</div>;
}

function localized(value, lang) {
  if (typeof value === "string") return value;
  return value?.[lang] || value?.ar || value?.en || "";
}

function secureCertificateUrl(value) {
  if (typeof value !== "string" || !value.trim()) return "";
  try {
    const url = new URL(value, window.location.origin);
    return url.protocol === "https:" || url.origin === window.location.origin ? url.href : "";
  } catch {
    return "";
  }
}

function PageIntro({ eyebrow, title, text, tone = "light" }) {
  return <section className={`page-intro ${tone === "dark" ? "page-intro-dark" : ""}`}><div className="page-intro-inner"><div className="eyebrow"><span />{eyebrow}</div><h1>{title}</h1>{text && <p>{text}</p>}</div><div className="intro-decoration" aria-hidden="true"><BrandLogoPair showcase /></div></section>;
}

function AboutPage({ t, lang, navigate, openModal, publicContent }) {
  const principles = [t("principle1"), t("principle2"), t("principle3"), t("principle4")];
  const previewLectures = publicContent.lectures.slice(0, 3);
  const previewGallery = publicContent.gallery.slice(0, 3);
  return <>
    <PageIntro eyebrow={t("aboutPageEyebrow")} title={t("aboutPageTitle")} text={t("aboutPageLead")} />
    <section className="section-wrap about-story"><div className="story-image"><img src={lectures[1].image} alt="" /><div className="story-image-tag"><Sparkles size={16} />{lang === "ar" ? "علم يجمعنا" : "SCIENCE BRINGS US TOGETHER"}</div></div><div className="story-copy"><div className="eyebrow"><span />{t("vision")}</div><h2>{t("visionText")}</h2><div className="story-divider" /><div className="eyebrow"><span />{t("mission")}</div><p>{t("missionText")}</p></div></section>
    <section className="about-editorial section-wrap">
      <div className="about-editorial-heading"><div className="eyebrow"><span />{t("scienceEyebrow")}</div><h2>{t("aboutResourcesTitle")}</h2><p>{t("aboutResourcesText")}</p></div>
      <div className="about-lectures">
        <div className="about-feature-heading"><div><div className="eyebrow"><span />{t("pageLectures")}</div><h3>{t("lecturesTitle")}</h3><p>{t("lecturesText")}</p></div><button className="showcase-text-link" onClick={() => navigate("lectures")}>{t("browseLectures")}<ArrowUpLeft size={15} /></button></div>
        <div className="showcase-lecture-grid">{previewLectures.map((lecture) => <button className="showcase-lecture-item" key={lecture.id} onClick={() => openModal({ kind: "lecture", record: lecture })}><img src={lecture.image} alt="" /><span className="showcase-lecture-copy"><small>{localized(lecture.specialty, lang)}</small><strong>{localized(lecture.title, lang)}</strong><span>{localized(lecture.session, lang)}</span></span><ArrowUpLeft className="showcase-lecture-arrow" size={16} /></button>)}</div>
      </div>
      <div className="about-gallery">
        <div className="about-feature-heading"><div><div className="eyebrow"><span />{t("pageGallery")}</div><h3>{t("galleryTitle")}</h3><p>{t("showcaseGalleryText")}</p></div><button className="showcase-text-link" onClick={() => navigate("gallery")}>{t("showcaseGalleryAction")}<ArrowUpLeft size={15} /></button></div>
        <div className="about-gallery-mosaic">{previewGallery.map((item, index) => <button className={`showcase-gallery-shot showcase-gallery-shot-${index + 1}`} key={item.id || item.image} onClick={() => openModal({ kind: "image", record: item })} aria-label={`${t("preview")}: ${localized(item.title, lang)}`}><img src={item.image} alt={localized(item.title, lang)} /><span>{localized(item.title, lang)}</span></button>)}</div>
      </div>
    </section>
    <section className="goals-section"><div className="section-wrap"><SectionHeading eyebrow={t("aboutEyebrow")} title={t("goals")} /><div className="goals-grid">{[t("goal1"), t("goal2"), t("goal3"), t("goal4")].map((goal, i) => <div className="goal-item" key={goal}><span>0{i + 1}</span><p>{goal}</p><ArrowUpLeft size={17} /></div>)}</div></div></section>
    <section className="section-wrap values-section"><div className="eyebrow"><span />{t("principles")}</div><div className="values-row">{principles.map((item, i) => <div key={item}><span>{["01", "02", "03", "04"][i]}</span><strong>{item}</strong></div>)}</div></section>
  </>;
}

function CertificatesPage({ t, lang, notify, openModal }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("all");
  const [phone, setPhone] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  async function submit(event) {
    event.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    try { setResults(await api.searchCertificates({ name, type, phone })); }
    catch (error) { notify(error.message || t("toastError")); }
    finally { setLoading(false); }
  }
  const demoResults = results?.some((item) => item.isDemo);
  return <>
    <PageIntro eyebrow={t("pageCertificates")} title={t("certTitle")} text={t("certText")} />
    <section className="section-wrap certificate-section">
      <div className="certificate-panel">
        <div className="certificate-panel-icon"><Award size={28} /></div>
        <div className="eyebrow"><span />{t("certificates")}</div>
        <form className="certificate-form" onSubmit={submit}>
          <label>{t("certType")}
            <select value={type} onChange={(event) => { setType(event.target.value); setResults(null); }}>
              <option value="all">{t("allTypes")}</option>
              <option value="conference">{t("regular")}</option>
              <option value="cme">{t("cme")}</option>
            </select>
          </label>
          <label>{t("registeredName")}
            <div className="input-with-icon"><Search size={17} /><input value={name} onChange={(event) => setName(event.target.value)} placeholder={t("namePlaceholder")} required /></div>
          </label>
          {type === "cme" && <label>{t("registeredPhone")}<input type="tel" inputMode="numeric" autoComplete="tel-national" value={phone} onChange={(event) => setPhone(normalizeEgyptianMobile(event.target.value))} placeholder={t("phonePlaceholder")} pattern={EGYPTIAN_MOBILE_PATTERN} title={t("phoneError")} required /></label>}
          <button className="button button-red" type="submit" disabled={loading}>{loading ? t("searching") : t("certSearch")}<ArrowLeft size={17} /></button>
        </form>
      </div>
      {results && <div className="certificate-results">
        <div className="results-heading"><h2>{t("certFound")} <span>{results.length}</span></h2><p>{demoResults ? t("demoUnavailable") : t("secureCertificateNote")}</p></div>
        {results.length ? results.map((item) => <CertificateResult key={item.id} item={item} t={t} notify={notify} openModal={openModal} />) : <div className="empty-state"><Search size={21} /><p>{t("noCert")}</p></div>}
      </div>}
    </section>
    <section className="privacy-callout section-wrap"><ShieldCheck size={21} /><p>{lang === "ar" ? "ملفات وبيانات الشهادات هنا تجريبية للعرض فقط. البحث بالاسم لا يثبت الهوية؛ يلزم Backend آمن للشهادات الحقيقية." : "Certificate files and records here are demo-only. Name search does not verify identity; real certificates require a secure backend."}</p></section>
  </>;
}

function CertificateResult({ item, t, notify, openModal }) {
  const imageUrl = secureCertificateUrl(item.imageUrl);
  const downloadUrl = secureCertificateUrl(item.downloadUrl);
  function preview() {
    if (!imageUrl) {
      notify(t("certificateLinkUnavailable"));
      return;
    }
    openModal({ kind: "certificate", record: { ...item, imageUrl, downloadUrl } });
  }
  return <article className="certificate-result">
    <div className="certificate-result-heading">
      <div className="certificate-mini-icon"><FileCheck2 size={20} /></div>
      <div className="certificate-result-copy"><strong>{item.name}</strong><span>{item.type === "cme" ? t("cme") : t("regular")} · {item.id}</span></div>
      <div className="certificate-result-actions">
        <button onClick={preview}>{t("preview")}<ExternalLink size={15} /></button>
        {downloadUrl ? <a href={downloadUrl} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">{t("download")}<ArrowDown size={15} /></a> : <button onClick={() => notify(item.isDemo ? t("demoUnavailable") : t("certificateLinkUnavailable"))}>{t("download")}<ArrowDown size={15} /></button>}
      </div>
    </div>
  </article>;
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

function GuidelinesPage({ t, platformUrl }) {
  const guidelinesUrl = platformUrl || GUIDELINES_PLATFORM_URL;
  return <><PageIntro eyebrow={t("pageGuidelines")} title={t("guidePageTitle")} text={t("guidePageText")} /><section className="section-wrap guidelines-content"><div className="guideline-book"><div className="book-art"><BookOpen size={55} strokeWidth={1.2} /><span>G</span></div><div className="eyebrow"><span />GUIDELINES BOOK</div><h2>{t("guideTitle")}</h2><p>{t("guidePageText")}</p><a className="button button-red" href={guidelinesUrl} target="_blank" rel="noopener noreferrer">{t("openSearch")}<ExternalLink size={16} /></a><a className="text-link" href={guidelinesUrl} target="_blank" rel="noopener noreferrer">{t("accessPlatform")}<ArrowUpLeft size={15} /></a></div><div className="guidelines-side"><div className="guideline-side-item"><span>01</span><div><strong>{t("pageGuidelines")}</strong><p>{langText("Open the conference guidelines platform to search trusted medical references.", "افتح منصة الجايدلاينز للبحث في المراجع الطبية المعتمدة.")}</p></div></div><div className="guideline-side-item"><span>02</span><div><strong>{langText("Evidence-based references", "مراجع مبنية على الدليل")}</strong><p>{langText("Browse the scientific resources available on the platform.", "تصفح الموارد العلمية المتاحة على المنصة.")}</p></div></div><div className="guidelines-note"><ExternalLink size={18} /><p>{t("externalPending")}</p></div></div></section></>;
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
  return <><PageIntro eyebrow={t("pageAsk")} title={t("askTitle")} text={t("askText")} /><section className="section-wrap form-layout"><div className="form-aside"><div className="aside-icon"><CircleHelp size={25} /></div><h2>{lang === "ar" ? "سؤالك قد يفتح بابًا لمعرفة جديدة." : "Your question might open a door to new understanding."}</h2><p>{t("privateNote")}</p><div className="aside-note"><ShieldCheck size={18} /><span>{t("questionDisclaimer")}</span></div><div className="demo-label"><span />{t("adminDemo")}</div></div><div className="form-card">{submitted ? <FormSuccess t={t} record={submitted} isQuestion /> : <form onSubmit={submit}><div className="form-card-heading"><span>01 / 02</span><h2>{lang === "ar" ? "أخبرنا كيف نساعدك." : "Tell us how we can help."}</h2></div><div className="form-grid"><FormField label={t("fullName")} name="name" required placeholder={lang === "ar" ? "الاسم كما تحب أن نناديك" : "How should we address you?"} /><FormField label={t("email")} name="email" type="email" required placeholder="name@example.com" /><FormField label={t("phone")} name="phone" type="tel" required lang={lang} dir="ltr" placeholder="01012345678" /><label className="field full-field">{t("yourQuestion")}<textarea name="question" required rows="5" placeholder={t("questionPlaceholder")} maxLength="2000" /></label></div><label className="consent-row"><input type="checkbox" required /><span>{t("dataUseConsent")}</span></label><p className="form-disclaimer">{t("questionDisclaimer")}</p><button className="button button-red form-submit" type="submit" disabled={loading}>{loading ? t("submitting") : t("submitQuestion")}<ArrowLeft size={17} /></button></form>}</div></section></>;
}

function FormField({ label, name, type = "text", required = false, placeholder = "", dir, lang }) {
  const isPhone = name === "phone";
  const phoneError = lang === "ar" ? "أدخل رقم محمول مصري صحيحًا من 11 رقمًا يبدأ بـ 010 أو 011 أو 012 أو 015." : "Enter an 11-digit Egyptian mobile number starting with 010, 011, 012, or 015.";
  return <label className="field">{label}{isPhone ? <span className="phone-input-wrap" dir="ltr"><Phone size={16} aria-hidden="true" /><input name={name} type={type} required={required} placeholder={placeholder} dir="ltr" inputMode="numeric" autoComplete="tel-national" pattern={EGYPTIAN_MOBILE_PATTERN} title={phoneError} onInput={(event) => { event.currentTarget.value = normalizeEgyptianMobile(event.currentTarget.value); event.currentTarget.setCustomValidity(""); }} onInvalid={(event) => event.currentTarget.setCustomValidity(phoneError)} /></span> : <input name={name} type={type} required={required} placeholder={placeholder} dir={dir} autoComplete={name === "email" ? "email" : "name"} />}{isPhone && <small className="phone-hint">{lang === "ar" ? "11 رقمًا، يبدأ بـ 010 أو 011 أو 012 أو 015" : "11 digits, starting with 010, 011, 012, or 015"}</small>}</label>;
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
  return <><PageIntro eyebrow={t("pageRegister")} title={t("registerTitle")} text={t("registerText")} /><section className="section-wrap form-layout registration-layout"><div className="form-aside register-aside"><div className="aside-icon"><FileCheck2 size={25} /></div><h2>{langText("A few details. A meaningful step.", "بيانات بسيطة، وخطوة لها معنى.")}</h2><p>{t("approvalNote")}</p><div className="registration-steps"><div><span>01</span>{t("fullName")}</div><div><span>02</span>{t("participantType")}</div><div><span>03</span>{t("uploadDocument")}</div></div><div className="demo-label"><span />{t("adminDemo")}</div></div><div className="form-card">{submitted ? <FormSuccess t={t} record={submitted} /> : <form onSubmit={submit}><div className="form-card-heading"><span>01 / 03</span><h2>{langText("Your information", "بياناتك الشخصية")}</h2></div><div className="form-grid"><FormField label={t("fullName")} name="name" required /><FormField label={t("phone")} name="phone" type="tel" required lang={lang} dir="ltr" placeholder="01012345678" /><FormField label={t("email")} name="email" type="email" required /><label className="field">{t("participantType")}<select name="participantType" required value={participant} onChange={(e) => setParticipant(e.target.value)}><option value="">{t("choose")}</option><option value="doctor">{t("doctor")}</option><option value="student">{t("student")}</option></select></label><label className="field full-field">{t("uploadDocument")}<span className="upload-hint">{participant === "student" ? t("student") : t("doctor")} · {t("uploadHint")}</span><span className="upload-control"><input type="file" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" onChange={handleFile} required /><span className="upload-button"><FileCheck2 size={16} />{t("selectFile")}</span><span className="upload-name">{file?.name || t("documentRequired")}</span></span></label></div>{fileError && <p className="field-error" role="alert">{fileError}</p>}<label className="consent-row"><input type="checkbox" required /><span>{t("registrationConsent")}</span></label><button className="button button-red form-submit" type="submit" disabled={loading}>{loading ? t("submitting") : t("submitRegistration")}<ArrowLeft size={17} /></button></form>}</div></section></>;
}

function ContactPage({ t }) {
  return <>
    <PageIntro eyebrow={t("pageContact")} title={t("contactTitle")} text={t("contactText")} />
    <section className="section-wrap contact-section">
      <article className="contact-card contact-organizer-card">
        <span className="contact-icon"><Building2 size={20} /></span>
        <div className="eyebrow"><span />{t("organizerLabel")}</div>
        <h2>{t("organizerName")}</h2>
        <div className="contact-organizer-handle"><AtSign size={15} /><span>{t("organizerHandle")}</span></div>
      </article>
      <article className="contact-card contact-primary">
        <span className="contact-icon"><Phone size={20} /></span>
        <div className="eyebrow"><span />{t("contactPhoneLabel")}</div>
        <h2 dir="ltr">010 62949191</h2>
        <a href="tel:01062949191" className="text-link">{t("contactPhoneLabel")}<ArrowUpLeft size={15} /></a>
      </article>
      <article className="contact-card contact-email-card">
        <span className="contact-icon"><Mail size={20} /></span>
        <div className="eyebrow"><span />{t("contactEmailLabel")}</div>
        <h2><a href="mailto:marketing4@innovatorsgroup.org">marketing4@innovatorsgroup.org</a></h2>
        <a href="mailto:marketing4@innovatorsgroup.org" className="text-link">{t("sendEmail")}<ArrowUpLeft size={15} /></a>
      </article>
    </section>
    <div className="contact-bottom section-wrap"><div className="contact-map-placeholder"><MapPin size={22} /><span>{t("locationValue")}</span></div><p>{t("contactNote")}</p></div>
  </>;
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
      <button className="admin-brand" onClick={() => setTab("dashboard")}><img className="admin-brand-logo" src={brandLogos.mainLight} alt="Ganna Conference" /><strong><small>CONFERENCE PORTAL</small></strong></button>
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
    <div className="cert-admin-grid"><section className="admin-panel onedrive-panel"><div className="onedrive-brand"><span><Link2 size={21} /></span><div><h2>{a("onedriveTitle")}</h2><small>Microsoft Graph API</small></div></div><div className="onedrive-status-row"><span>{a("connectionStatus")}</span><b><i />{a("notConnected")}</b></div><p>{a("onedriveDesc")}</p><div className="onedrive-safety"><ShieldCheck size={18} /><span>{a("neverPublic")}</span></div></section><section className="admin-panel certificate-counts"><div className="admin-panel-heading"><div><h2>{a("certificateFolders")}</h2><p>{a("secureBackend")}</p></div><Award size={18} /></div><div><span>{a("conferenceCertificates")}</span><strong>{records.filter((item) => item.type === "conference").length}</strong></div><div><span>{a("cmeCertificates")}</span><strong>{records.filter((item) => item.type === "cme").length}</strong></div></section></div>
    <section className="admin-panel cert-search-panel"><div className="admin-panel-heading"><div><h2>{a("certificateSearch")}</h2><p>{a("testName")}</p></div></div><form className="admin-cert-search" onSubmit={search}><label className="admin-search"><Search size={16} /><input required value={query} onChange={(e) => setQuery(e.target.value)} placeholder={a("testName")} /></label><button className="admin-primary-button"><Search size={15} />{a("search")}</button></form>{results && <div className="certificate-demo-results"><h3>{a("certificateResults")}</h3>{results.length ? results.map((item) => <div key={item.id}><Award size={17} /><span><strong>{item.name}</strong><small>{item.id} · {item.type === "cme" ? a("cmeCertificates") : a("conferenceCertificates")}</small></span><span className="admin-status status-published">{a("published")}</span></div>) : <p>{a("noCertificateResults")}</p>}</div>}</section>
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
  return <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><button className="brand brand-pair" onClick={() => navigate("home")} aria-label="Ganna Conference and Hospitals home"><BrandLogoPair /></button><p>{t("footerText")}</p><div className="footer-socials"><a href="mailto:marketing4@innovatorsgroup.org" aria-label="Email"><Mail size={16} /></a><button aria-label="Social media" onClick={() => navigate("contact")}><ExternalLink size={16} /></button></div></div><div className="footer-links"><strong>{t("quickLinks")}</strong><div>{["about", "lectures", "certificates", "gallery"].map((item) => <button key={item} onClick={() => navigate(item)}>{labels[lang][item]}</button>)}</div></div><div className="footer-links"><strong>{t("contactUs")}</strong><div><button onClick={() => navigate("contact")}>{labels[lang].contact}</button><button onClick={() => navigate("ask")}>{labels[lang].ask}</button>{!import.meta.env.PROD && <button onClick={() => navigate("admin")}>{t("admin")}</button>}</div></div><div className="footer-next"><span>{t("nextConference")}</span><strong>{conferences[0].title[lang]}</strong><small>{conferences[0].date[lang]}</small><button onClick={() => navigate("register")}>{t("registerNow")}<ArrowUpLeft size={15} /></button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {t("rights")}</span><span>{t("followUs")} <span className="footer-dot">✳</span></span></div></footer>;
}

function BrandLogoPair({ showcase = false }) {
  return <span className={`brand-logo-pair ${showcase ? "showcase-hospital-logos" : ""}`}>
    <img className="brand-logo brand-logo-dark brand-logo-main" src={brandLogos.mainDark} alt="Ganna Conference" />
    <img className="brand-logo brand-logo-light brand-logo-main" src={brandLogos.mainLight} alt="Ganna Conference" />
    <span className="brand-logo-divider" />
    <img className="brand-logo brand-logo-dark brand-logo-hospital" src={brandLogos.hospitalLight} alt="Ganna Hospitals" />
    <img className="brand-logo brand-logo-light brand-logo-hospital" src={brandLogos.hospitalDark} alt="Ganna Hospitals" />
  </span>;
}

function Modal({ modal, t, close, lang }) {
  const { kind, record } = modal;
  const title = localized(record.title, lang) || record.name || "";
  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className={`modal-card ${kind === "image" ? "image-modal" : ""}`} role="dialog" aria-modal="true" aria-label={kind === "lecture" ? t("viewDetails") : kind === "certificate" ? t("preview") : title}>
        <button className="modal-close" onClick={close} aria-label={t("close")}><X size={18} /></button>
        {kind === "lecture" && <>
          <div className="modal-image"><img src={record.image} alt="" /></div>
          <div className="modal-body"><div className="eyebrow"><span />{localized(record.specialty, lang)}</div><h2>{title}</h2><p className="modal-speaker">{t("speaker")}: {localized(record.speaker, lang)} · {localized(record.session, lang)}</p><h3>{t("lectureOverview")}</h3><p>{localized(record.summary, lang)}</p><h3>{t("keyTopics")}</h3><ul>{(record.topics?.[lang] || []).map((topic) => <li key={topic}>{topic}</li>)}</ul><div className="takeaway"><Sparkles size={18} /><p><strong>{t("keyTakeaway")}</strong>{t("takeawayText")}</p></div></div>
        </>}
        {kind === "image" && <><img src={record.image} alt={title} /><div className="image-modal-caption"><span>{localized(record.category, lang)}</span><strong>{title}</strong></div></>}
        {kind === "video" && <><div className="video-modal-poster"><img src={record.image} alt="" /><span className="play-button"><Play size={19} fill="currentColor" /></span></div><div className="modal-body"><div className="eyebrow"><span />{localized(record.speaker, lang)}</div><h2>{title}</h2><p>{t("videoDemo")}</p></div></>}
        {kind === "certificate" && <CertificateDocument record={record} title={title} t={t} />}
      </div>
    </div>
  );
}

function CertificateDocument({ record, title, t }) {
  const imageUrl = secureCertificateUrl(record.imageUrl);
  const downloadUrl = secureCertificateUrl(record.downloadUrl);
  return <div className="certificate-document">
    <div className="certificate-document-heading">
      <h2>{title}</h2>
      {downloadUrl && <a href={downloadUrl} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">{t("download")}<ArrowDown size={15} /></a>}
    </div>
    {imageUrl ? <img className="certificate-document-image" src={imageUrl} alt={`${record.name} — ${record.type === "cme" ? t("cme") : t("regular")}`} /> : <p className="certificate-preview-notice">{t("certificateLinkUnavailable")}</p>}
  </div>;
}

export default App;

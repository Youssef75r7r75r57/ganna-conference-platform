import { demoCertificates, gallery, lectures, videos } from "./data.js";

let registrations = [];
let questions = [];
let content = {
  conferences: [{ id: "ganna-2025", title: { ar: "مؤتمر جنى الطبي السنوي", en: "Ganna Annual Medical Conference" }, year: "2025", date: { ar: "١٥ – ١٦ نوفمبر ٢٠٢٥", en: "15–16 November 2025" }, location: "القاهرة، مصر", status: "published" }],
  certificates: demoCertificates,
  gallery: gallery.map((item, index) => ({ ...item, id: `album-${index + 1}`, status: "published" })),
  videos: videos.map((item, index) => ({ ...item, id: `video-${index + 1}`, url: "", status: "published" })),
  lectures,
  guidelines: [{ id: "guidelines-link", title: "منصة الجايدلاينز", url: "", status: "needs_setup" }],
  hospital: [{ id: "hospital-profile", title: "مستشفى جنى للأطفال", status: "published" }],
  users: [
    { id: "user-1", name: "مدير النظام", email: "admin@example.com", role: "super_admin", active: true },
    { id: "user-2", name: "مسؤول التسجيل", email: "registration@example.com", role: "registration_manager", active: true },
    { id: "user-3", name: "مدير المحتوى العلمي", email: "scientific@example.com", role: "scientific_manager", active: true },
  ],
};

function announceContentChange() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event("ganna-demo-content-updated"));
}

const demoApi = {
  async searchCertificates({ name, type }) {
    const normalized = name.trim().replace(/\s+/g, " ").toLocaleLowerCase();
    return demoCertificates.filter((certificate) => {
      const matchesName = certificate.name.toLocaleLowerCase().includes(normalized);
      return matchesName && (!type || type === "all" || certificate.type === type);
    });
  },
  async submitRegistration(formData) {
    const record = {
      ...formData,
      id: `GN-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`,
      status: "pending",
      submittedAt: new Date().toISOString(),
    };
    registrations = [record, ...registrations];
    return record;
  },
  async submitQuestion(formData) {
    const record = {
      ...formData,
      id: `GQ-${String(Date.now()).slice(-6)}`,
      status: "pending",
      submittedAt: new Date().toISOString(),
    };
    questions = [record, ...questions];
    return record;
  },
  async getAdminOverview() {
    return { registrations, questions, ...content };
  },
  async getPublicContent() {
    const visible = (collection) => content[collection].filter((record) => record.status !== "draft");
    return {
      conferences: visible("conferences"),
      gallery: visible("gallery"),
      videos: visible("videos"),
      lectures: visible("lectures"),
      guidelines: content.guidelines,
      hospital: content.hospital,
    };
  },
  async updateRecord(collection, id, updates) {
    const records = collection === "questions" ? questions : collection === "registrations" ? registrations : content[collection];
    if (!Array.isArray(records)) throw new Error(`Unknown demo collection: ${collection}`);
    const updated = records.map((record) => record.id === id ? { ...record, ...updates } : record);
    if (collection === "questions") questions = updated;
    else if (collection === "registrations") registrations = updated;
    else {
      content = { ...content, [collection]: updated };
      announceContentChange();
    }
    return updated.find((record) => record.id === id);
  },
  async addRecord(collection, record) {
    if (!Array.isArray(content[collection])) throw new Error(`Unknown demo collection: ${collection}`);
    const created = {
      ...record,
      id: `${collection.slice(0, 3).toUpperCase()}-${String(Date.now()).slice(-6)}`,
      status: record.status || "draft",
    };
    content = { ...content, [collection]: [created, ...content[collection]] };
    announceContentChange();
    return created;
  },
  async deleteRecord(collection, id) {
    if (!Array.isArray(content[collection])) throw new Error(`Unknown demo collection: ${collection}`);
    content = { ...content, [collection]: content[collection].filter((record) => record.id !== id) };
    announceContentChange();
  },
};

// Demo records live only in memory; replace this adapter with authenticated backend requests.
export const api = demoApi;

import assert from "node:assert/strict";
import test from "node:test";
import { api } from "./api.js";
import { GUIDELINES_PLATFORM_URL } from "./data.js";

test("public demo content reflects the supplied 2026 conference programme", async () => {
  const content = await api.getPublicContent();
  assert.equal(content.conferences[0].title.en, "Ganna 15th Scientific Conference");
  assert.equal(content.conferences[0].eventDate.en, "23 October 2026");
  assert.equal(content.conferences[0].location.en, "Semiramis InterContinental, Cairo");
  assert.equal(content.lectures.length, 5);
  assert.equal(content.gallery.length, 5);
  assert.ok(content.gallery.every((item) => item.image.includes("gallery-")));
  assert.equal(content.guidelines[0].url, GUIDELINES_PLATFORM_URL);
  assert.ok(content.lectures.every((lecture) => lecture.specialty.en !== "Pediatrics"));
});

test("CME demo certificate search requires the English name and phone number", async () => {
  const certificates = await api.searchCertificates({ name: "Tariq Abdullah Al omari", type: "cme", phone: "01203350245" });
  assert.equal(certificates.length, 1);
  assert.equal(certificates[0].id, "DEMO-2026-002");
  assert.equal(certificates[0].isDemo, true);
  assert.ok(certificates[0].previewUrl.endsWith("tariq-cme-demo.pdf"));
  assert.ok(certificates[0].imageUrl.endsWith("tariq-cme-demo.webp"));
  assert.equal((await api.searchCertificates({ name: "Doctor Tariq Abdullah Al omari", type: "cme", phone: "01203350245" })).length, 1);
  assert.equal((await api.searchCertificates({ name: "Dr. Tariq Abdullah Al omari", type: "cme", phone: "012 033 50245" })).length, 1);
  assert.equal((await api.searchCertificates({ name: "Dr. Tariq Abdullah Al omari", type: "cme" })).length, 0);
  assert.equal((await api.searchCertificates({ name: "Dr. Tariq Abdullah Al omari", type: "cme", phone: "01203350244" })).length, 0);
  assert.equal((await api.searchCertificates({ name: "د. طارق عبدالله العمري", type: "cme", phone: "01203350245" })).length, 0);
  assert.equal((await api.searchCertificates({ name: "", type: "cme", phone: "01203350245" })).length, 0);
});

test("attendance demo certificate returns its supplied preview file", async () => {
  const certificates = await api.searchCertificates({ name: "Doctor Mona Mohammed Abdelgader Mohammed", type: "conference" });
  assert.equal(certificates.length, 1);
  assert.equal(certificates[0].id, "DEMO-2026-001");
  assert.equal(certificates[0].isDemo, true);
  assert.ok(certificates[0].previewUrl.endsWith("mona-attendance-demo.pdf"));
  assert.ok(certificates[0].imageUrl.endsWith("mona-attendance-demo.webp"));
});

test("demo API supports admin-managed submissions", async () => {
  const document = new File(["sample"], "proof.pdf", { type: "application/pdf" });
  const registration = await api.submitRegistration({
    name: "Test Participant",
    documentName: document.name,
    document,
  });
  assert.equal(registration.status, "pending");
  assert.equal(registration.document.name, document.name);

  const question = await api.submitQuestion({
    name: "Test User",
    question: "Test question",
  });
  assert.equal(question.status, "pending");

  await api.updateRecord("questions", question.id, { status: "under_review" });
  const overview = await api.getAdminOverview();
  assert.equal(overview.registrations[0].id, registration.id);
  assert.equal(overview.questions[0].status, "under_review");
  assert.ok(overview.lectures.length > 0);

  const album = await api.addRecord("gallery", { title: { ar: "ألبوم تجريبي", en: "Demo album" }, status: "draft" });
  assert.ok(!(await api.getPublicContent()).gallery.some((item) => item.id === album.id));
  await api.updateRecord("gallery", album.id, { status: "published" });
  assert.ok((await api.getPublicContent()).gallery.some((item) => item.id === album.id));
  await api.deleteRecord("gallery", album.id);
  assert.ok(!(await api.getAdminOverview()).gallery.some((item) => item.id === album.id));
});

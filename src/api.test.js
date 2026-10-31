import assert from "node:assert/strict";
import test from "node:test";
import { api } from "./api.js";

test("demo API supports certificate search and admin-managed submissions", async () => {
  const certificates = await api.searchCertificates({ name: "Sarah Ahmed", type: "cma" });
  assert.equal(certificates.length, 1);
  assert.equal(certificates[0].id, "GC-2025-1082");

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

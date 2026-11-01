import assert from "node:assert/strict";
import test from "node:test";
import { isEgyptianMobile, normalizeEgyptianMobile } from "./phone.js";

test("accepts Egyptian mobile numbers on the supported networks", () => {
  for (const prefix of ["010", "011", "012", "015"]) {
    assert.equal(isEgyptianMobile(`${prefix}12345678`), true);
  }
});

test("rejects unsupported prefixes and malformed lengths", () => {
  for (const value of ["01312345678", "0101234567", "010123456789", "+201012345678", "010abc2345678", "12345678901"]) {
    assert.equal(isEgyptianMobile(value), false);
  }
});

test("normalizes Arabic numerals and common separators", () => {
  assert.equal(normalizeEgyptianMobile("٠١٢ ٣٤٥٦-٧٨٩٠"), "01234567890");
  assert.equal(isEgyptianMobile("٠١٢٣٤٥٦٧٨٩٠"), true);
});

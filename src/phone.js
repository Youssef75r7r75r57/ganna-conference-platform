const arabicNumerals = "٠١٢٣٤٥٦٧٨٩";
const persianNumerals = "۰۱۲۳۴۵۶۷۸۹";
export const EGYPTIAN_MOBILE_PATTERN = "01[0125][0-9]{8}";

export function normalizeEgyptianMobile(value) {
  return value
    .replace(/[٠-٩]/g, (digit) => String(arabicNumerals.indexOf(digit)))
    .replace(/[۰-۹]/g, (digit) => String(persianNumerals.indexOf(digit)))
    .replace(/[\s()-]/g, "");
}

export function isEgyptianMobile(value) {
  return new RegExp(`^${EGYPTIAN_MOBILE_PATTERN}$`).test(normalizeEgyptianMobile(value));
}

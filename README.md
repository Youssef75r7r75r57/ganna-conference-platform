# GANNA Conference Digital Platform

Responsive Arabic/English React frontend for the Ganna conference requirements.

The interface supports the requested light and dark palettes and follows the operating system's color-scheme preference automatically, including changes made while the page is open. Content sections animate into view, and animations respect the operating system's reduced-motion preference. Egyptian mobile numbers in the question and registration forms must contain 11 digits and start with 010, 011, 012, or 015.

Styling is organized into a shared layout/theme stylesheet (`src/styles.css`) and separate Arabic and English locale stylesheets (`src/styles.ar.css` and `src/styles.en.css`). Locale-specific rules are scoped to the active language, so changing the language does not mix its typography or directional adjustments with the other locale.

## Run locally

```sh
npm install
npm run dev
```

## Public preview

The `main` branch is deployed to GitHub Pages at <https://youssef75r7r75r57.github.io/ganna-conference-platform/>. Each push to `main` builds and publishes the frontend automatically. The public production build hides the unauthenticated admin preview; forms and demo data remain frontend-only and are not saved to a backend.

The medical-guidelines links open <https://ehc-obgyn-gl.vercel.app/> in a new tab.

## Frontend/backend boundary

Public page components call the interface exported from `src/api.js`. Its current adapter is a frontend-only demo: certificate search reads sample records from `src/data.js`, submissions and admin updates live in JavaScript memory only, and the admin dashboard is intentionally unauthenticated. No submitted personal data or uploaded document is sent to a server or saved after the page is refreshed. Do not use this demo with real participant data.

To connect a backend, replace the `demoApi` implementation in `src/api.js` with requests to authenticated backend endpoints while preserving the exported methods:

- `searchCertificates({ name, type, phone })`
- `submitRegistration(formData)`
- `submitQuestion(formData)`
- `getAdminOverview()`
- `updateRecord(collection, id, updates)`

Certificate search results can include `imageUrl` and `downloadUrl`; the frontend validates these as same-origin or HTTPS URLs and displays the certificate image inline, with a download link to the sample PDF. The demo certificate images and PDFs are shipped publicly.

The backend must own authentication, roles and permissions, validation, durable storage, document handling, and secure Microsoft Graph/OneDrive operations. The browser must never receive OneDrive credentials or unrestricted certificate URLs. `submitRegistration` receives the selected `File` as `formData.document` as well as `formData.documentName`; send it as multipart data to a protected backend endpoint. The current demo adapter only holds that object in memory and does not upload it.

The admin preview includes the conference, certificates, gallery, videos, lectures, guidelines, hospital, question, registration, user, and role/permission modules. Content edits and add/publish/delete actions update the in-memory demo adapter and refresh connected public gallery, video, lecture, conference date, guidelines link, and hospital profile views. These changes are discarded when the page is refreshed. User accounts, permissions, registration review, question assignment, notes, and answers are not protected or persisted by this frontend.

## Demo content

The conference date, venue, edition, and 55 programme entries (including their listed speakers, halls, and times) come from `GANNA ATTAGLANCE.pdf`. The lecture cards use the five supplied root-level photos as illustrative artwork; they do not represent individual speakers or sessions. Video entries and certificate records are also illustrative frontend samples. Every photo in `data/` is included in the gallery. The conference and hospital logo pairs are optimized into `src/assets/` and displayed across the public site.

The home page's Explore section highlights conference videos, medical guidelines, Ganna Hospital services, and questions for the conference team. Lecture and gallery previews are grouped in the About page, alongside the conference story and goals. Contact is a primary navigation link and has its own page.

The certificate search form uses the English name printed on the sample certificate; a leading `Doctor` or `Dr.` is optional. CME searches also require the registered phone number. The attendance and CME PDFs, images, names, and phone number included in the demo data are illustrative samples for this public preview, not real certificates or participant records. This is only a frontend interaction: all data shipped to the browser is readable, so name-and-phone matching is not access control. Never include real certificate files or participant details in a public frontend. Real certificate lookup and downloads must be implemented by an authenticated backend that verifies access and returns files securely.

The project does not include backend services, real certificate files, video hosting, authentication, or an admin authorization boundary.

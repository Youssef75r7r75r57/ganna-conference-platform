# GANNA Conference Digital Platform

Responsive Arabic/English React frontend for the Ganna conference requirements.

## Run locally

```sh
npm install
npm run dev
```

Create a local `.env` from `.env.example` and set `VITE_GUIDELINES_PLATFORM_URL` when the previous guidelines platform URL is confirmed. Leave it empty to show the setup notice instead of opening a placeholder destination.

## Frontend/backend boundary

Public page components call the interface exported from `src/api.js`. Its current adapter is a frontend-only demo: certificate search reads sample records from `src/data.js`, submissions and admin updates live in JavaScript memory only, and the admin dashboard is intentionally unauthenticated. No submitted personal data or uploaded document is sent to a server or saved after the page is refreshed. Do not use this demo with real participant data.

To connect a backend, replace the `demoApi` implementation in `src/api.js` with requests to authenticated backend endpoints while preserving the exported methods:

- `searchCertificates({ name, type })`
- `submitRegistration(formData)`
- `submitQuestion(formData)`
- `getAdminOverview()`
- `updateRecord(collection, id, updates)`

The backend must own authentication, roles and permissions, validation, durable storage, document handling, and secure Microsoft Graph/OneDrive operations. The browser must never receive OneDrive credentials or unrestricted certificate URLs. `submitRegistration` receives the selected `File` as `formData.document` as well as `formData.documentName`; send it as multipart data to a protected backend endpoint. The current demo adapter only holds that object in memory and does not upload it.

The admin preview includes the conference, certificates, gallery, videos, lectures, guidelines, hospital, question, registration, user, and role/permission modules. Content edits and add/publish/delete actions update the in-memory demo adapter and refresh connected public gallery, video, lecture, conference date, guidelines link, and hospital profile views. These changes are discarded when the page is refreshed. User accounts, permissions, registration review, question assignment, notes, and answers are not protected or persisted by this frontend.

## Demo content

Conference statistics, lecture summaries, contacts, and image/video selections are illustrative UI content. Confirm and replace them with approved conference materials before launch. The project does not include backend services, real certificates, video hosting, authentication, or an admin authorization boundary.

# Portfolio Translation (i18n) Checklist

## Phase 1: Infrastructure 🏗️
- [x] Create `GEMINI.md` for project tracking.
- [x] Create `public/assets/i18n/de.json` (Initial structure).
- [x] Create `public/assets/i18n/en.json` (Initial structure).
- [x] Implement `TranslationService` (Signal-based, loading JSON).
- [x] Register `TranslationService` in `app.config.ts` (Done via `providedIn: 'root'`).

## Phase 2: String Extraction 📝
- [x] Header Component (Menu items, Language labels).
- [x] Hero Component (Heading, Subheading).
- [x] About Me Component (Description, Titles).
- [x] Skills Component (Categories, Text).
- [x] My Work Component (Project descriptions, Buttons).
- [x] Contact Component (Form labels, Placeholder, Status messages).
- [x] Footer Component (Integrated into Contact bottom).
- [x] Legal Notice (Full extraction of headings and body text).

## Phase 3: Implementation 🛠️
- [x] Create `translate` pipe for templates.
- [x] Update all HTML templates with translation keys.
- [x] Connect Header language switch buttons to the service.
- [x] Implement `localStorage` persistence for language choice.

## Phase 4: Validation ✅
- [x] Verify English translation quality.
- [x] Verify German translation quality.
- [x] Test language switching performance and reactivity.

# Persian Math Intelligence — Telegram Serverless

**Status:** Phase 0 migration shell. It records text requests but does not solve them.

Original: `siasoltoon/persian-math-intelligence-platform`

## Boundary
Serverless can handle Telegram UI and compact request history. Keep SymPy solving, OCR, OpenCV, image/PDF parsing, pytesseract, and the existing Python engine in an external backend. This starter does not upload files or call the solver.

## Setup
Node.js 18+; run `npm install`, enable Serverless for the intended bot in @BotFather, then `npx tgcloud login`. Run `npm run check` and test `npx tgcloud run handlers/message '{ chat: { id: 123 }, from: { id: 123 }, text: "/start" }'`. Review `npx tgcloud diff` before pushing code and review database migrations separately.

## Data boundary
Only bounded text and request metadata are proposed for the built-in database. Do not store image/PDF bytes, huge OCR outputs, credentials, or full documents there. A future backend connection needs authentication, timeouts, idempotency, deletion/retention rules, and status reconciliation.

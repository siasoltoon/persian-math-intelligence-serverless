# Repository instructions

Keep `siasoltoon/persian-math-intelligence-platform` unchanged. This repository is a separate Serverless-facing layer. Runtime code must use only the platform SDK and relative imports ending in `.js`; do not import Python packages or arbitrary npm libraries. Keep OCR, PDF/image processing, and symbolic math in an external backend. Bound stored text and do not put media bytes in SQLite.

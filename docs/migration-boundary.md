# Migration boundary

## Serverless
Text request intake, user metadata, bounded prompt history, request status, and compact answer summaries.

## External backend
OCR, image/PDF parsing, symbolic math, verification, long-running jobs, and media storage.

## Before production
- Set prompt and output length limits and retention policy.
- Decide whether prompts contain personal/sensitive data and minimize storage.
- Authenticate backend callbacks and bind each result to its original user/request.
- Add timeout, retry, idempotency, and deletion semantics.
- Treat untrusted OCR/text as input, not as instructions to execute.

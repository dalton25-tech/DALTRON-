# DALTRON Project Status

Last audited: 2026-10-21.

Statuses: Not started, In progress, Blocked, Implemented but untested, Tested and verified, Complete.

| Area                                 | Status                   | Notes                                                                                 |
| ------------------------------------ | ------------------------ | ------------------------------------------------------------------------------------- |
| Root TypeScript projects             | Tested and verified      | `npm run typecheck` passed.                                                           |
| ESLint                               | Tested and verified      | `npm run lint` passed.                                                                |
| Web app build                        | Tested and verified      | `npm run build:web` passed.                                                           |
| Nexa chat frontend                   | Tested and verified      | Reply handling uses the backend `output` field; sending and error states are handled. |
| Nexa Express backend                 | Tested and verified      | Backend builds and starts; health endpoint responds successfully.                     |
| Nexa HTTP chat endpoint              | Tested and verified      | Local chat request succeeds with the test provider.                                   |
| Nexa request validation              | Tested and verified      | Unit tests pass; whitespace-only messages return HTTP 400.                            |
| AI test suite                        | Tested and verified      | Four unit tests passed.                                                               |
| Gemini provider                      | Implemented but untested | Real provider access has not been verified with a valid API key.                      |
| Beacon browser (`apps/browser`)      | In progress              | Current UI and functionality require further product development.                     |
| Orbit search (`apps/search`)         | In progress              | Search results remain mock data.                                                      |
| FastAPI chatbot (`apps/chatbot-app`) | In progress              | Further AI integration and verification are needed.                                   |
| Authentication, database and cloud   | Not started              | Requires implementation planning and development.                                     |
| CI                                   | Not started              | Automated CI workflow still needs to be established.                                  |

## Known issues and follow-up work

- Verify that the configured Gemini model ID is supported by the real provider.
- Keep `.env.example` aligned with the backend's default model configuration.
- Review the root `ci` dependency and determine whether it is intentional before changing it.
- Review logging of system prompts and ensure sensitive information is not exposed.
- Consider adding rate limiting, conversation history and streaming.
- Complete a final source diff and repository hygiene review before committing.

## Running Nexa locally

Use a local `.env` file with `GEMINI_API_KEY` configured for Gemini, or select `DALTRON_AI_PROVIDER=test` for local test-provider checks.

```bash
npm install
npm run start:ai
npm run dev:web
npm test
npm run typecheck
npm run lint
npm run build:web
```

The backend and web development server should run in separate terminals. Local test-provider success does not establish that the real Gemini integration works.

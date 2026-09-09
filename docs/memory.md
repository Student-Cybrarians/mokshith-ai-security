# Prompt Folio — Project Memory

## Current checkpoint

PROJECT: Prompt Folio
CURRENT PHASE: Phase 9 — Deployment & Maintenance
STATUS: IN_PROGRESS / CHATBOT UPGRADE IMPLEMENTED, VERIFICATION IN PROGRESS

### Current repository state
- `master-branch` now contains the verified résumé PDFs under `resumes/`.
- The application remains dependency-free static HTML/CSS/JavaScript.
- Documentation and the Phase 2 content contract are maintained under `docs/` and the repository root contract.
- Portfolio AI now uses a structured knowledge model in `chatbot-knowledge.js` covering profile, experience, projects, skills, education, certifications, résumés, and public profile references.
- The chatbot answers first and provides navigation as supplemental actions.

### Chatbot upgrade
- InAmigos answers now include the documented Prompt Engineer Intern role, dates, prompt-building/testing, prompt-structure/context work, prompt optimization, context engineering, generative AI and NLP evidence.
- TechCiti answers now include the documented Cyber Security Analyst Intern role, dates, SIEM alert review, alert triage, incident-response support, log/network analysis, IOC identification, remediation coordination, documentation, and threat/vulnerability tracking.
- Recruiter-style profile, AI/ML experience, cybersecurity fit, prompt-engineering fit, comparative, résumé, education, certification, project, navigation, unknown-information, and security-boundary questions are handled explicitly.
- Project-specific technologies, metrics, outcomes, and production claims remain source-gated.
- Visitor input is still bounded and rendered as untrusted text; prompt-injection and secret-extraction requests receive refusal responses.

### Testing
- `tests/portfolio-smoke.mjs` now checks the chatbot knowledge layer and structured response UI.
- `tests/chatbot.mjs` covers general profile, InAmigos, TechCiti, AI/ML skills, cybersecurity skills, projects, education, certifications, résumé routing, career fit, comparison, unknown information, prompt injection, secret extraction, and navigation behavior.
- CI validates `chatbot-knowledge.js` syntax and runs the recruiter-facing chatbot test suite in addition to the existing static smoke checks.

### Deployment evidence
- `CNAME` remains `mokshith-ai-security.is-a.dev`.
- GitHub Pages deployment workflow is configured for `master-branch` and publishes the repository tree.
- A prior deployment run `34306110213` completed successfully, but it predates the latest chatbot changes. Latest production runtime verification remains pending.

### Remaining source gaps
1. Detailed project technologies, repositories/demos, dates, results, and case-study evidence remain incomplete.
2. Direct contact publication in the main Contact UI remains conservative even though résumé material contains public profile references.
3. Some certification entries are listed without earning dates; dates are not inferred.
4. Live custom-domain/browser verification is environment-limited.

### Maintenance rule
Do not invent source facts. When new evidence arrives, integrate only the verified material, run the full validation suite, deploy, and perform a reality check.

## Munder Difflin checkpoint

PHASE: Phase 5 — Conversational Chatbot upgrade within Phase 9 maintenance
STATUS: IN_PROGRESS / IMPLEMENTED, PENDING RUNTIME + PRODUCTION VERIFICATION

WHAT WAS INSPECTED:
- `docs/architecture.md`
- `docs/design.md`
- `docs/memory.md`
- `docs/phases.doc.md`
- `docs/prompt-folio-munder-difflin-build-prompt.md`
- `docs/rules.md`
- `PORTFOLIO-CONTENT-CONTRACT.md`
- `index.html`, `app.js`, `styles.css`
- verified résumé assets and existing validation workflow

WHAT WAS CHANGED:
- Added `chatbot-knowledge.js` as the structured recruiter-facing knowledge layer.
- Reworked `app.js` to retrieve grounded answers and render readable multi-paragraph/list responses safely.
- Updated the portfolio UI with richer verified experience, education, and chatbot framing.
- Added chatbot behavior tests and expanded smoke checks.
- Updated CI to run chatbot tests and validate the knowledge layer.
- Refreshed the content contract and project memory to reflect the new evidence state.

WHAT WAS TESTED:
- Static source assertions were added for all requested chatbot categories and security boundaries.
- Runtime chatbot test coverage exists in `tests/chatbot.mjs`.
- CI is configured to execute both smoke and chatbot tests.

RESULT:
IMPLEMENTED; runtime and production verification still required.

BLOCKERS:
Live custom-domain/browser verification and confirmation of the newest GitHub Actions run are still pending. Project-specific technology/outcome evidence remains intentionally unavailable.

NEXT HIGHEST-PRIORITY TASK:
Verify the latest CI run, perform the acceptance-question runtime check in the deployed portfolio, then update this checkpoint to COMPLETED + VERIFIED if evidence supports it.

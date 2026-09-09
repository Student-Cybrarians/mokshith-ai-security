# Prompt Folio Maintenance Runbook

## Purpose
Keep the portfolio accurate, deployable, secure, accessible, and evidence-first after the initial build.

## Routine checks

### Every meaningful content change
- Inspect the working branch and diff.
- Run `node --check app.js`.
- Run `node tests/portfolio-smoke.mjs`.
- Confirm no résumé URL is published unless the corresponding PDF exists.
- Confirm candidate claims remain supported by repository source material.

### Before deployment
- Confirm `CNAME` is exactly `mokshith-ai-security.is-a.dev`.
- Confirm the validation workflow passes.
- Confirm the GitHub Pages deployment workflow completes successfully.
- Review changed files for secrets, credentials, debug output, and unintended assets.

### Post-deployment
- Verify the custom domain over HTTPS when the execution environment can reach it.
- Check navigation, project filters/details, mobile navigation, chatbot input/actions, and résumé states.
- Check for obvious browser/runtime errors.
- Re-check accessibility and reduced-motion behavior after substantial UI changes.

## Source blockers
Do not manufacture missing portfolio evidence. The following currently require external source material:

- Cybersecurity résumé PDF.
- AI / ML / Prompt Engineering résumé PDF.
- Verified public email, GitHub, and LinkedIn URLs.
- Verified education records.
- Detailed project technologies, roles, dates, links, results, and case-study evidence.

When source material arrives, add it through a feature branch, update the structured content model, enable only the corresponding verified UI actions, run the full validation suite, and deploy through the normal GitHub Pages workflow.

## Incident response
If production behavior regresses:

`DISCOVER → ISOLATE → FIX → TEST → REVIEW → DEPLOY → VERIFY → CHECKPOINT`

Never use destructive Git cleanup or history rewriting as a first response.

## Current reality status
The application and GitHub Pages deployment pipeline are implemented. Static validation and deployment have passed. Live custom-domain verification is still environment-limited, and the source blockers above prevent a full Definition-of-Done declaration.

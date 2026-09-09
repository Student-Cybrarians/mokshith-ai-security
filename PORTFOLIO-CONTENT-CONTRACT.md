# Prompt Folio — Portfolio Content Contract

## Purpose

This document is the Phase 2 contract between portfolio source data, UI presentation, résumé routing, and Portfolio AI. It defines the information architecture without inventing missing candidate facts.

## Canonical entities

| Entity | Required fields | Publication rule |
|---|---|---|
| Candidate | `id`, `displayName`, `summary` | Publish only verified source facts. |
| Experience | `id`, `organization`, `role`, `track`, `focusAreas`, `evidenceStatus` | Role and organization must be verified. Dates/details remain unpublished until sourced. |
| Project | `id`, `title`, `track`, `status`, `description`, `evidenceStatus` | Status may be published when specified; technologies, results, links, and dates require evidence. |
| Skill | `id`, `title`, `area`, `evidenceStatus`, `evidence` | Skill claims must identify their supporting source or remain qualified. |
| Education | `id`, `institution`, `program`, `dates`, `evidenceStatus` | No education record is published until source material is verified. |
| Certification | `id`, `title`, `type`, `evidenceStatus`, `note` | Distinguish certification, self-study, virtual experience, and simulation. |
| Résumé | `id`, `track`, `pdfPath`, `displayName`, `evidenceStatus` | A View/Download action is enabled only when the referenced PDF exists. |
| Link | `id`, `type`, `label`, `url`, `evidenceStatus` | Public URLs must be verified before publication. |

## Evidence states

Use one of these states for source-sensitive content:

- `verified` — directly supported by approved source material or repository evidence.
- `qualified` — supported at a high level but deliberately limited to avoid a stronger unsupported claim.
- `needs-source` — named or expected by the specification but missing sufficient evidence for publication.
- `blocked` — required asset or source is absent, so the UI must not imply that it exists.

## Professional tracks

### Cybersecurity

Primary relationship: TechCiti Technologies Private Limited → Cyber Security Analyst Intern → security-focused skills and the Cybersecurity résumé.

### AI / ML + Prompt Engineering

Primary relationship: InAmigos Foundation (IAF) → Prompt Engineer Intern → prompt/AI-focused skills and the AI/ML résumé.

### AI × Security

Used for explicitly cross-domain projects such as AI-IDS-ES. This label must not imply professional employment experience.

## Project detail contract

A project may expose these fields when sourced:

`title`, `problem/context`, `role`, `status`, `technologies`, `skills`, `timeline`, `repository`, `liveDemo`, `research`, `implementation`, `results`, `limitations`, `futureWork`, `relatedExperience`.

Optional fields stay absent when unsupported. Never replace missing evidence with fabricated metrics, repositories, technologies, dates, or outcomes.

## Résumé contract

The résumé center has two independent routes:

1. Cybersecurity résumé → `View` + `Download PDF`
2. AI / ML résumé → `View` + `Download PDF`

Until the corresponding PDF asset exists in the repository, the action remains visibly unavailable rather than pointing to a guessed path.

## Chatbot knowledge boundary

Portfolio AI may answer from the same canonical content model used by the UI. It may summarize verified or qualified records, explain evidence boundaries, and navigate visitors to relevant sections. It must refuse to manufacture missing education, employment dates, technologies, project results, credentials, contact details, or private configuration.

Unknown-answer baseline:

> I don't have verified information about that in the portfolio yet. You can explore the relevant section for the available details.

## Navigation model

```text
Overview
├── Profile
├── Experience
├── Projects
├── Skills
├── Education
├── Certifications
├── Résumés
├── About
└── Contact
```

Navigation is section-oriented in the current static-first implementation; it may evolve into routes when a verified product requirement justifies that change.

## Current source gaps

- Two résumé PDF assets are required.
- Verified public email/GitHub/LinkedIn URLs are required.
- Verified education records are required.
- Detailed project technologies, repositories/demos, dates, results, and case-study evidence are required before stronger project claims are published.

## Phase 2 acceptance criteria

- Information architecture is explicit.
- Core content entities and relationships are defined.
- Evidence states prevent unsupported claims from becoming published facts.
- Two professional tracks and the AI × Security intersection are explicit.
- Résumé routing has a defined asset gate.
- Chatbot knowledge boundaries match portfolio evidence boundaries.
- Navigation relationships are documented.
- Missing source material is recorded as a blocker rather than guessed.

# Prompt Folio — Portfolio Content Contract

## Purpose

This document is the Phase 2 contract between portfolio source data, UI presentation, résumé routing, and Portfolio AI. It defines the information architecture without inventing missing candidate facts.

## Canonical entities

| Entity | Required fields | Publication rule |
|---|---|---|
| Candidate | `id`, `displayName`, `summary` | Publish only verified source facts. |
| Experience | `id`, `organization`, `role`, `track`, `focusAreas`, `evidenceStatus` | Role, dates, and documented responsibilities may be published when supported by supplied résumé/source material. |
| Project | `id`, `title`, `track`, `status`, `description`, `evidenceStatus` | Status may be published when specified; technologies, results, links, and dates require evidence. |
| Skill | `id`, `title`, `area`, `evidenceStatus`, `evidence` | Skill claims must identify their supporting source or remain qualified. |
| Education | `id`, `institution`, `program`, `dates`, `evidenceStatus` | Publish only when supported by supplied résumé/source material. |
| Certification | `id`, `title`, `type`, `evidenceStatus`, `note` | Distinguish certification, self-study, virtual experience, and simulation. |
| Résumé | `id`, `track`, `pdfPath`, `displayName`, `evidenceStatus` | A View/Download action is enabled only when the referenced PDF exists. |
| Link | `id`, `type`, `label`, `url`, `evidenceStatus` | Public URLs may be published when explicitly present in supplied résumé/source material. |

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

Both supplied PDF assets are now present in the repository and are referenced by their exact verified paths.

## Chatbot knowledge boundary

Portfolio AI uses the same evidence boundary as the UI, with a structured knowledge model covering profile, experience, projects, skills, education, certifications, résumés, and public references. It may synthesize multiple verified records for recruiter-facing questions, but it must not manufacture missing technologies, project results, credentials, contact details, or private configuration.

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

- Detailed project technologies, repositories/demos, dates, results, and case-study evidence remain incomplete and must not be guessed.
- Direct contact publication in the main Contact UI remains intentionally conservative even though résumé material contains public profile references.
- Some certification entries are listed without earning dates; dates are not inferred.

## Phase 2 acceptance criteria

- Information architecture is explicit.
- Core content entities and relationships are defined.
- Evidence states prevent unsupported claims from becoming published facts.
- Two professional tracks and the AI × Security intersection are explicit.
- Résumé routing has a defined asset gate and both supplied PDFs are available.
- Chatbot knowledge boundaries match portfolio evidence boundaries.
- Navigation relationships are documented.
- Missing source material is recorded as a blocker rather than guessed.

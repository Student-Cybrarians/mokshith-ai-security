# Prompt Folio — Architecture

## 1. System Intent

Prompt Folio is a premium, interactive, conversational portfolio that presents two professional tracks without blending or fabricating them:

1. Cybersecurity
2. AI / ML / Prompt Engineering

The architecture must make the two tracks independently discoverable while preserving one coherent personal brand and user experience.

## 2. Core Information Architecture

Primary navigation:

- Overview
- Experience
- Projects
- Skills
- Education
- About
- Résumés
- Contact

The application should also provide a conversational portfolio assistant that can answer questions about verified portfolio content.

## 3. Career Tracks

### Cybersecurity

Verified experience:

- TechCiti Technologies Private Limited — Cyber Security Analyst Intern

### AI / ML / Prompt Engineering

Verified experience:

- InAmigos Foundation (IAF) — Prompt Engineer Intern

Do not invent employers, dates, responsibilities, achievements, metrics, technologies, certifications, projects, or education details.

## 4. Application Layers

### Presentation Layer

Responsible for:

- responsive page composition
- navigation
- typography
- visual hierarchy
- motion
- accessible interaction states
- project and experience presentation
- résumé actions
- conversational UI

### Content Layer

Responsible for structured portfolio data:

- profile
- career tracks
- experience
- projects
- skills
- education
- about
- contact
- résumé metadata
- chatbot knowledge

Content should be kept separate from UI components so that verified facts can be updated without rewriting presentation logic.

### Conversational Layer

The portfolio chatbot must:

- answer only from verified portfolio information
- distinguish facts from uncertainty
- avoid hallucinating credentials or experience
- refuse requests for secrets or private information
- provide a safe fallback when information is unavailable

A retrieval layer may be introduced if the knowledge base becomes sufficiently large, but unnecessary infrastructure should not be added merely for appearance.

### Delivery Layer

Target domain:

`mokshith-ai-security.is-a.dev`

The existing is-a.dev registration uses a CNAME pointing to:

`student-cybrarians.github.io`

Deployment architecture must account for this existing DNS arrangement and GitHub Pages compatibility.

## 5. Component Architecture

Build reusable components for:

- header/navigation
- mobile navigation
- hero/overview section
- career-track switcher
- experience cards
- project cards
- skill groups
- education cards
- résumé cards/actions
- contact section
- chatbot launcher
- chatbot panel
- footer
- 404 page

Components should have predictable states:

- default
- hover
- focus-visible
- active/selected
- disabled where applicable
- loading
- empty
- error

## 6. Data Architecture

Prefer typed, structured content objects rather than duplicating portfolio facts inside JSX/TSX.

Example conceptual shape:

```text
Portfolio
├── profile
├── tracks[]
│   ├── id
│   ├── label
│   ├── summary
│   ├── experience[]
│   ├── projects[]
│   └── skills[]
├── education[]
├── resumes[]
├── contact
└── chatbotKnowledge
```

The actual implementation may adapt this structure to the selected framework, provided the separation of content and presentation remains clear.

## 7. Résumé Architecture

There are two distinct résumé assets/actions:

- Cybersecurity résumé PDF
- AI / ML / Prompt Engineering résumé PDF

Each must have its own:

- label
- view action
- download action
- file path/URL

Do not merge the two into one generic résumé action.

If the source PDFs are not available, do not fabricate PDF contents. Surface the implementation dependency as a blocker.

## 8. Responsive Architecture

Target:

- mobile
- tablet
- desktop
- large desktop

The mobile experience is not a collapsed desktop afterthought. Navigation, cards, spacing, chatbot controls, résumé actions, and project layouts must remain usable on touch devices.

## 9. Accessibility Architecture

Minimum requirements:

- semantic HTML
- keyboard navigation
- visible focus states
- correct heading hierarchy
- accessible labels
- meaningful link/button names
- sufficient contrast
- screen-reader-friendly interactive controls
- reduced-motion support
- no keyboard traps

Chatbot interactions must also be accessible by keyboard and assistive technology.

## 10. Motion Architecture

Motion should communicate hierarchy and state rather than exist as decoration.

Use:

- subtle page/section reveals
- intentional hover/focus transitions
- track-switch transitions
- chatbot open/close transitions
- project-card interaction feedback

Respect `prefers-reduced-motion` and provide a low-motion path.

## 11. Security Architecture

The portfolio is public-facing and must be treated as an application, not merely a static design.

Requirements:

- no secrets in source control
- no API keys embedded in client-side code
- sanitize/escape untrusted chatbot content where applicable
- validate external links
- minimize third-party dependencies
- avoid unnecessary data collection
- document any server-side secret handling

## 12. Performance Architecture

Priorities:

- fast initial render
- optimized images/assets
- minimal JavaScript where practical
- lazy loading for non-critical media
- efficient font loading
- avoid unnecessary animation work
- avoid heavyweight infrastructure without demonstrated need

## 13. Testing Architecture

At minimum, verify:

- build succeeds
- pages/routes render
- navigation works
- résumé links/actions work
- chatbot behavior is grounded
- mobile layout works
- keyboard navigation works
- reduced-motion behavior works
- no obvious console/runtime errors

Automated tests should be used where they provide meaningful regression protection.

## 14. Deployment Architecture

The implementation should be deployable from the GitHub repository and compatible with the intended `.is-a.dev` hostname.

Deployment configuration must be explicit and verifiable. Do not claim the site is deployed until the deployment has actually been tested.

## 15. Architecture Quality Gate

Before declaring the architecture complete, verify:

- two career tracks are structurally distinct
- verified content is separated from presentation
- résumé assets have independent paths/actions
- chatbot knowledge is grounded
- responsive and accessibility requirements are represented
- secrets are excluded
- deployment assumptions match the actual domain configuration
- implementation is simple enough to maintain

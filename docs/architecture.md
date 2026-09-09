# Prompt Folio --- Architecture

## High-Level Design and Structure of the Application

Prompt Folio is a responsive, conversational portfolio application for a
technology professional with two primary tracks:

-   Cybersecurity
-   AI / ML + Prompt Engineering

The system combines a premium portfolio interface, structured
professional data, résumé access, project exploration, and an AI
portfolio chatbot.

------------------------------------------------------------------------

# 1. ARCHITECTURE

## 1.1 System Overview

``` text
                         ┌──────────────────────────┐
                         │        VISITOR           │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │     PROMPT FOLIO UI      │
                         │  Responsive Web Frontend │
                         └────────────┬─────────────┘
                                      │
                 ┌────────────────────┼────────────────────┐
                 │                    │                    │
                 ▼                    ▼                    ▼
        ┌────────────────┐   ┌────────────────┐   ┌────────────────┐
        │ Portfolio      │   │ Project /      │   │ Résumé Center  │
        │ Navigation     │   │ Experience UI  │   │ PDF Access     │
        └───────┬────────┘   └───────┬────────┘   └────────────────┘
                │                    │
                └──────────┬─────────┘
                           ▼
                 ┌────────────────────┐
                 │ Portfolio Data     │
                 │ Structured Content │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │ Portfolio AI       │
                 │ Chatbot            │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │ AI / Retrieval     │
                 │ Layer              │
                 └────────────────────┘
```

The frontend remains usable without the chatbot. AI is an enhancement to
the portfolio experience, not a single point of failure for basic
navigation.

------------------------------------------------------------------------

# 2. APPLICATION COMPONENTS

## 2.1 Presentation Layer

Responsible for:

-   Navigation
-   Hero section
-   Profile/work switcher
-   Experience pages
-   Project cards
-   Project detail pages
-   Skills
-   Education
-   Certifications
-   Résumé center
-   About
-   Contact
-   Chatbot interface
-   Responsive layouts
-   Animations

------------------------------------------------------------------------

## 2.2 Portfolio Content Layer

The portfolio content should be represented as structured records rather
than duplicated throughout UI components.

Core entities:

``` text
Candidate
Experience
Project
Skill
Certification
Education
Résumé
Link
```

Relationships:

``` text
Experience ──────► Skills
Experience ──────► Résumé Track

Project ─────────► Skills
Project ─────────► Experience
Project ─────────► Category

Candidate ───────► Experiences
Candidate ───────► Projects
Candidate ───────► Skills
Candidate ───────► Education
Candidate ───────► Certifications
Candidate ───────► Résumés
```

------------------------------------------------------------------------

# 3. PROFILE TRACKS

Prompt Folio should support two professional tracks.

## Cybersecurity Track

``` text
Cybersecurity
│
├── TechCiti Experience
├── Cybersecurity Projects
├── Security Skills
├── Security Certifications
└── Cybersecurity Résumé
```

## AI / ML Track

``` text
AI / ML
│
├── InAmigos Experience
├── AI / ML Projects
├── Prompt Engineering
├── AI / ML Skills
└── AI / ML Résumé
```

## Combined Track

``` text
AI × Cybersecurity
│
└── AI-IDS-ES
```

The combined track demonstrates how the two areas intersect without
implying professional experience that is not supported by the source
material.

------------------------------------------------------------------------

# 4. PORTFOLIO AI ARCHITECTURE

The chatbot should use structured portfolio information as its source of
truth.

``` text
Visitor Question
       │
       ▼
Chat UI
       │
       ▼
Request Handler
       │
       ▼
Question Classification
       │
       ├── Experience
       ├── Project
       ├── Skill
       ├── Résumé
       ├── Education
       ├── Certification
       └── General Portfolio
       │
       ▼
Portfolio Knowledge
       │
       ▼
Grounded AI Response
       │
       ▼
Answer + Relevant Navigation
```

The chatbot should not rely on unsupported assumptions.

For information that is not present in the verified portfolio data:

> I don't have verified information about that in the portfolio.

------------------------------------------------------------------------

# 5. CHATBOT KNOWLEDGE MODEL

A structured knowledge representation should contain:

``` text
candidate.json
experiences.json
projects.json
skills.json
education.json
certifications.json
resumes.json
links.json
```

Example conceptual structure:

``` json
{
  "experience": {
    "company": "TechCiti Technologies Private Limited",
    "role": "Cyber Security Analyst Intern",
    "skills": [
      "Security Operations (SOC)",
      "SIEM Monitoring",
      "Incident Response",
      "Log Analysis",
      "Linux"
    ]
  }
}
```

The actual implementation should preserve verified source information
and should not fabricate missing facts.

------------------------------------------------------------------------

# 6. EXPERIENCE DATA

## TechCiti

``` text
Role
└── Cyber Security Analyst Intern

Organization
└── TechCiti Technologies Private Limited

Location
└── Bengaluru, Karnataka, India

Work Type
└── Remote

Employment
└── Internship

Skills
├── Security Operations (SOC)
├── SIEM Monitoring
├── Incident Response
├── Log Analysis
└── Linux
```

The detailed highlights should include the verified internship
responsibilities supplied for the portfolio.

------------------------------------------------------------------------

## InAmigos

``` text
Role
└── Prompt Engineer Intern

Organization
└── InAmigos Foundation (IAF)

Location
└── India

Work Type
└── Remote

Employment
└── Internship

Skills
├── Prompt Engineering
├── Generative AI Tools
├── Natural Language Processing (NLP)
├── Problem Solving
└── Context Engineering
```

The detailed highlights should reflect the supplied role description.

------------------------------------------------------------------------

# 7. PROJECT ARCHITECTURE

Projects should be data-driven.

``` text
Projects
│
├── Human-Detection
│
├── IntelliHire-v3
│
├── AI-IDS-ES
│
└── Personal Portfolio Website
```

Each project record should support:

``` text
id
title
slug
description
category
status
technologies
skills
role
timeline
repository
liveDemo
images
research
implementation
results
limitations
futureWork
relatedExperience
```

Optional fields should remain optional.

Do not create fake metrics, repositories, demos, or results.

------------------------------------------------------------------------

# 8. PROJECT STATUS MODEL

Project maturity must be explicit.

``` text
Production
Prototype
Research
Concept
Design Stage
Academic
Early Stage
```

For the currently supplied projects:

``` text
Human-Detection
→ Concept / Planning Stage

IntelliHire-v3
→ Early Prototype

AI-IDS-ES
→ Design Stage

Personal Portfolio Website
→ Earlier Web Development Project
```

The UI should visibly communicate project maturity.

------------------------------------------------------------------------

# 9. RÉSUMÉ ARCHITECTURE

The résumé center provides two independent résumé paths.

``` text
Résumé Center
│
├── Cybersecurity Résumé
│   ├── View
│   └── Download PDF
│
└── AI / ML Résumé
    ├── View
    └── Download PDF
```

The résumé records should contain:

``` text
title
track
pdfPath
displayName
description
```

The chatbot should be able to route visitors to the appropriate résumé.

Examples:

``` text
"Show me the cybersecurity résumé."
        ↓
Cybersecurity Résumé

"Show me the AI résumé."
        ↓
AI / ML Résumé
```

------------------------------------------------------------------------

# 10. NAVIGATION ARCHITECTURE

Desktop:

``` text
┌───────────────┬───────────────────────────────────────┐
│               │                                       │
│ Prompt Folio  │             Main Content              │
│               │                                       │
│ Overview      │                                       │
│ Experience    │                                       │
│ Projects      │                                       │
│ Skills        │                                       │
│ Education     │                                       │
│ Résumés       │                                       │
│ About         │                                       │
│ Contact       │                                       │
│               │                                       │
└───────────────┴───────────────────────────────────────┘
```

Mobile:

``` text
┌──────────────────────────────┐
│ Logo / Name       Menu       │
├──────────────────────────────┤
│                              │
│        Main Content          │
│                              │
└──────────────────────────────┘
```

The navigation must remain accessible using keyboard and touch
interaction.

------------------------------------------------------------------------

# 11. FOLDER & FILE STRUCTURE

The exact structure should adapt to the existing repository/framework
after reconnaissance.

A recommended conceptual structure is:

``` text
prompt-folio/
│
├── app/
│   ├── routes/
│   │   ├── overview/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── education/
│   │   ├── certifications/
│   │   ├── resumes/
│   │   ├── about/
│   │   ├── contact/
│   │   └── ask/
│   │
│   ├── components/
│   │   ├── navigation/
│   │   ├── hero/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── resumes/
│   │   ├── chatbot/
│   │   └── shared/
│   │
│   ├── data/
│   │   ├── candidate
│   │   ├── experiences
│   │   ├── projects
│   │   ├── skills
│   │   ├── education
│   │   ├── certifications
│   │   └── resumes
│   │
│   ├── lib/
│   │   ├── ai/
│   │   ├── retrieval/
│   │   ├── navigation/
│   │   └── validation/
│   │
│   └── styles/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── resumes/
│       ├── cybersecurity.pdf
│       └── ai-ml.pdf
│
├── tests/
│   ├── unit/
│   ├── integration/
│   ├── e2e/
│   ├── accessibility/
│   └── chatbot/
│
├── docs/
│   ├── PRD.md
│   ├── architecture.md
│   └── checkpoints/
│
└── README.md
```

**Important:** this is the recommended target structure, not an
instruction to blindly restructure an existing repository. First inspect
the current project and reuse its architecture where practical.

------------------------------------------------------------------------

# 12. TECH STACK

The exact stack must be determined during repository reconnaissance.

The architecture should support the following categories:

## Frontend

``` text
Responsive web framework
Component-based UI
Accessible semantic markup
Client-side routing where appropriate
```

## Styling

``` text
CSS / framework styling system
Design tokens
Responsive breakpoints
Animation system
Reduced-motion support
```

## Content

``` text
Structured JSON / CMS / database
```

## AI

``` text
LLM provider
Server-side AI request handling
Structured portfolio context
Optional retrieval layer
```

## Documents

``` text
Static PDF assets
Secure public access
View + download actions
```

## Development

``` text
Git
Linting
Formatting
Automated tests
Build verification
```

Do not introduce a technology merely because it is available. Prefer the
existing configured stack unless a technical requirement justifies a
change.

------------------------------------------------------------------------

# 13. DESIGN SYSTEM ARCHITECTURE

Define reusable design primitives.

``` text
Design Tokens
│
├── Typography
├── Spacing
├── Radius
├── Borders
├── Shadows
├── Motion
├── Breakpoints
└── Colors
```

Reusable components:

``` text
Button
Card
Badge
Tag
NavigationItem
SectionHeader
ProjectCard
ExperienceCard
SkillChip
ResumeCard
ChatMessage
SuggestedQuestion
Modal / Drawer
```

Avoid duplicated styling patterns.

------------------------------------------------------------------------

# 14. ANIMATION ARCHITECTURE

Animation should be centralized and reusable.

## Page transitions

``` text
Enter
→ Fade
→ Small vertical movement
→ Settled state
```

## Cards

``` text
Idle
→ Hover
→ Small elevation
→ Metadata emphasis
```

## Chat

``` text
Question
→ Sending state
→ Typing indicator
→ Streaming response
→ Action cards
```

## Skills

``` text
Section enters viewport
→ Stagger skill chips
→ Settle
```

All motion should respect:

``` text
prefers-reduced-motion
```

Animation must support UX rather than compete with the portfolio
content.

------------------------------------------------------------------------

# 15. DATA FLOW

## Normal portfolio navigation

``` text
User
↓
Route
↓
Page Component
↓
Structured Data
↓
UI
```

## Chatbot

``` text
User Question
↓
Chat UI
↓
API / Server Handler
↓
Question Processing
↓
Portfolio Data Retrieval
↓
Context Construction
↓
LLM
↓
Validation / Formatting
↓
Response
↓
Chat UI
```

## Résumé

``` text
User
↓
Résumé Center
↓
Track Selection
↓
PDF
↓
View / Download
```

------------------------------------------------------------------------

# 16. AI SAFETY & GROUNDING

The chatbot should be constrained to portfolio knowledge.

Important rules:

-   Do not invent employment history.
-   Do not invent project results.
-   Do not invent technologies.
-   Do not invent certifications.
-   Do not invent dates.
-   Do not claim production experience for planned projects.
-   Do not expose private configuration.
-   Do not reveal API credentials.
-   Do not treat self-study as professional certification.
-   Do not claim unsupported hiring outcomes.

When information is unavailable, say so.

------------------------------------------------------------------------

# 17. SECURITY ARCHITECTURE

Trust boundaries:

``` text
Visitor Browser
      │
      ▼
Public Portfolio
      │
      ▼
Server/API Boundary
      │
      ▼
AI Provider
```

Secrets must remain outside the public frontend.

Never expose:

``` text
API keys
Provider credentials
Environment secrets
Private tokens
Internal system prompts containing secrets
```

If an AI API is required, use the project's approved server-side
credential architecture.

------------------------------------------------------------------------

# 18. ACCESSIBILITY ARCHITECTURE

Accessibility should be part of component design rather than a final
patch.

Required:

``` text
Semantic HTML
Keyboard navigation
Visible focus
Accessible labels
Heading hierarchy
Screen-reader compatibility
Color contrast
Touch-friendly controls
Reduced motion
Accessible dialogs/drawers
```

The chatbot must also be keyboard accessible.

------------------------------------------------------------------------

# 19. PERFORMANCE ARCHITECTURE

Prioritize:

``` text
Static-first rendering where practical
↓
Optimized assets
↓
Lazy loading
↓
Minimal client JavaScript
↓
Efficient animations
↓
Caching
```

The AI chatbot should load independently so that a slow AI request does
not block the main portfolio.

------------------------------------------------------------------------

# 20. SEO ARCHITECTURE

Each important page should support:

``` text
Title
Description
Canonical URL
Open Graph metadata
Semantic content
```

Recommended indexable areas:

``` text
Overview
Experience
Projects
Skills
About
```

------------------------------------------------------------------------

# 21. MUNDER DIFFLIN IMPLEMENTATION FLOW

Architecture work itself follows the Munder Difflin procedure.

``` text
PRD
↓
AUDIT CURRENT REPOSITORY
↓
ARCHITECTURE
↓
FOLDER / FILE STRUCTURE
↓
TECH STACK
↓
TASK DECOMPOSITION
↓
SPECIALIST SELECTION
↓
IMPLEMENTATION
↓
TESTING
↓
SECURITY REVIEW
↓
CODE REVIEW
↓
REALITY CHECK
↓
EVIDENCE
↓
CHECKPOINT
```

------------------------------------------------------------------------

# 22. AGENT RESPONSIBILITIES

## Software Architect

Own:

-   System architecture.
-   Component boundaries.
-   Data flow.
-   Technology decisions.

## UI Designer

Own:

-   Visual hierarchy.
-   Design system.
-   Motion principles.
-   Responsive visual behavior.

## UX Architect

Own:

-   Navigation.
-   User journeys.
-   Information architecture.
-   Chatbot interaction model.

## Frontend Developer

Own:

-   Components.
-   Pages.
-   Routing.
-   Responsive behavior.
-   Frontend integration.

## AI Engineer

Own:

-   Chatbot.
-   Prompt architecture.
-   AI integration.
-   Grounding strategy.

## ML / RAG Specialist

Use when retrieval or embeddings become necessary.

Own:

-   Retrieval architecture.
-   Chunking.
-   Embeddings.
-   Evaluation.

## Security Architect / AppSec

Own:

-   AI API security.
-   Trust boundaries.
-   Input/output risks.
-   Secrets handling.

## Test Automation Engineer

Own:

-   Automated verification.
-   Regression tests.
-   End-to-end journeys.

## Accessibility Auditor

Own:

-   Keyboard.
-   Screen reader.
-   Focus.
-   Contrast.
-   Reduced motion.

## Performance Engineer

Use when measurements indicate performance problems.

## Code Reviewer

Independently challenge implementation quality.

## Reality Checker

Determine whether the claimed implementation actually works.

------------------------------------------------------------------------

# 23. ARCHITECTURAL PRINCIPLES

Follow:

``` text
READ BEFORE WRITE
AUDIT BEFORE MODIFY
UNDERSTAND BEFORE IMPLEMENT
REUSE BEFORE REPLACE
MINIMAL CHANGE
STRUCTURED DATA OVER DUPLICATION
EVIDENCE OVER CLAIMS
SECURITY BEFORE CONVENIENCE
ACCESSIBILITY BY DESIGN
PERFORMANCE BY MEASUREMENT
```

------------------------------------------------------------------------

# 24. DEFINITION OF DONE

Architecture is ready for implementation when:

``` text
✓ Major components are identified
✓ Data relationships are defined
✓ Portfolio tracks are defined
✓ Résumé access is defined
✓ Chatbot data flow is defined
✓ Security boundaries are defined
✓ Folder/file organization is defined
✓ Responsive strategy is defined
✓ Animation strategy is defined
✓ Accessibility requirements are defined
✓ Testing strategy is defined
✓ Existing repository constraints have been inspected
```

------------------------------------------------------------------------

# 25. ARCHITECTURE REALITY CHECK

Before treating the architecture as implemented:

``` text
Does the proposed structure match the actual repository?
Does the selected stack actually support the design?
Are résumé PDFs actually available?
Are portfolio facts grounded in source material?
Can the chatbot access structured portfolio data?
Are secrets protected?
Can the site operate without the AI service?
Does the responsive architecture work?
Can the system be tested?
Can the system be maintained?
```

Architecture should describe what will actually be built, not what
merely sounds technically impressive.

------------------------------------------------------------------------

# 26. NEXT ENGINEERING STEP

After this document:

``` text
architecture.md
      ↓
Repository Reconnaissance
      ↓
Actual Stack Confirmation
      ↓
Task Graph
      ↓
Implementation
      ↓
Testing
      ↓
Security
      ↓
Review
      ↓
Reality Check
```

The next agent must inspect the real repository before modifying it.

No framework, folder structure, dependency, or AI architecture should be
assumed to exist until verified.

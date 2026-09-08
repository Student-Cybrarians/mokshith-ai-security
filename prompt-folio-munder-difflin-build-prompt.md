# Prompt Folio --- Munder Difflin Product Build Prompt

## Purpose

Build **Prompt Folio**, an outstanding, interactive personal portfolio
for a technology professional with two complementary career tracks:

-   **Cybersecurity**
-   **AI / ML + Prompt Engineering**

The portfolio should be inspired by modern conversational interfaces and
the provided Prompt Folio reference, but it must become a genuinely
useful product rather than a static résumé website.

The central idea is:

> **A portfolio that can speak for the candidate.**

Visitors should be able to browse the portfolio normally, ask questions
through an AI portfolio assistant, discover evidence behind skills and
experience, and access the appropriate résumé PDF.

------------------------------------------------------------------------

# 1. WHAT TO BUILD

## Product

Build a responsive, premium, app-like portfolio called **Prompt Folio**.

The product should combine:

1.  A polished personal portfolio.
2.  A conversational AI portfolio assistant.
3.  Two professional career tracks.
4.  Project and experience exploration.
5.  Evidence-based skill discovery.
6.  Direct access to two résumé PDFs.
7.  Smooth, purposeful animations.
8.  A maintainable architecture suitable for continued development.

The portfolio must work as a conventional website even if the AI
assistant is unavailable.

------------------------------------------------------------------------

# 2. CORE USER PROBLEM

Traditional portfolios force visitors to search through pages to
understand a candidate.

Prompt Folio should reduce that friction.

A visitor should be able to:

-   Quickly understand who the candidate is.
-   Explore cybersecurity experience.
-   Explore AI/ML and Prompt Engineering work.
-   See projects and their actual maturity/status.
-   Understand skills through evidence rather than unsupported claims.
-   Download the cybersecurity résumé.
-   Download the AI/ML résumé.
-   Ask natural-language questions and receive grounded answers.
-   Navigate directly from an AI answer to the relevant project,
    experience, skill, or résumé.

------------------------------------------------------------------------

# 3. TARGETED USERS

Design for multiple visitor types.

## Recruiter

Needs:

-   Fast understanding of profile.
-   Relevant résumé.
-   Skills.
-   Experience.
-   Contact information.
-   Evidence of work.

Example questions:

> Is this candidate suitable for an entry-level SOC role?

> Show me the cybersecurity résumé.

------------------------------------------------------------------------

## Cybersecurity Hiring Manager

Needs:

-   SOC exposure.
-   SIEM.
-   Alert triage.
-   Incident response.
-   Log analysis.
-   Network analysis.
-   Security certifications.
-   TechCiti experience.

Example:

> What cybersecurity experience does the candidate have?

------------------------------------------------------------------------

## AI / ML Hiring Manager

Needs:

-   Python.
-   Machine learning foundations.
-   AI projects.
-   Data tooling.
-   Prompt Engineering.
-   Generative AI exposure.
-   Current AI/ML education.

Example:

> What AI/ML projects has the candidate worked on?

------------------------------------------------------------------------

## Technical Visitor

Needs:

-   Projects.
-   Technologies.
-   Architecture where available.
-   GitHub links.
-   Project status.
-   Technical learning journey.

Example:

> What technologies were used in AI-IDS-ES?

------------------------------------------------------------------------

# 4. PROFESSIONAL POSITIONING

Use a positioning that connects the two tracks without falsely
presenting unfinished work as production experience.

Suggested identity:

> **Cybersecurity Analyst · AI/ML Engineer · Prompt Engineer**

Supporting theme:

> **AI/ML × Cybersecurity**

The portfolio should communicate that cybersecurity and AI/ML are
complementary areas of development.

------------------------------------------------------------------------

# 5. INFORMATION ARCHITECTURE

## Main navigation

``` text
Prompt Folio
│
├── Overview
├── Experience
│   ├── TechCiti Technologies
│   └── InAmigos Foundation
│
├── Work
│   ├── All Projects
│   ├── Cybersecurity
│   ├── AI / ML
│   └── AI × Security
│
├── Skills
├── Education
├── Certifications
├── Résumés
├── About
├── Ask Me
└── Contact
```

Use a persistent desktop navigation shell inspired by the supplied
reference.

On mobile, transform the sidebar into an accessible menu/drawer.

------------------------------------------------------------------------

# 6. HOMEPAGE EXPERIENCE

The homepage should immediately establish the conversational concept.

Hero:

> **What would you like to know about Mokshith?**

Supporting line:

> **Cybersecurity Analyst · AI/ML Engineer · Prompt Engineer**

Primary conversational input:

> **Ask anything about my work, skills, projects, experience, or
> education...**

Suggested questions should include:

-   What cybersecurity experience do you have?
-   What did you do at TechCiti?
-   What AI/ML projects have you built?
-   What did you do at InAmigos?
-   What are your strongest technical skills?
-   Show me your cybersecurity résumé.
-   Show me your AI/ML résumé.

The visitor should be able to continue normally into the portfolio even
without asking a question.

------------------------------------------------------------------------

# 7. CAREER TRACKS

Create two clearly identifiable professional tracks.

## Track A — Cybersecurity

Verified experience:

> **Cyber Security Analyst Intern — TechCiti Technologies Private
> Limited**

The cybersecurity track should organize verified information around:

-   SOC operations.
-   SIEM monitoring.
-   Alert investigation.
-   Incident response concepts.
-   Log analysis.
-   Network traffic analysis.
-   Linux.
-   Security projects.
-   Security certifications/learning.

Do not invent responsibilities or outcomes beyond the source material.

------------------------------------------------------------------------

## Track B — AI / ML / Prompt Engineering

Verified experience:

> **Prompt Engineer Intern — InAmigos Foundation (IAF)**

The AI/ML track should organize verified information around:

-   Prompt Engineering.
-   Context Engineering.
-   Generative AI.
-   Natural Language Processing foundations.
-   Python.
-   Machine Learning.
-   AI projects.
-   AI-assisted workflows.

Do not invent responsibilities or outcomes beyond the source material.

------------------------------------------------------------------------

# 8. EXPERIENCE PAGE

Build a professional experience timeline.

Each entry should show:

-   Organization.
-   Role.
-   Career track.
-   Date range when verified.
-   Description.
-   Skills/evidence.
-   Related projects where appropriate.
-   Relevant résumé action.

The two known internship entries are:

### TechCiti Technologies Private Limited

**Cyber Security Analyst Intern**

### InAmigos Foundation (IAF)

**Prompt Engineer Intern**

Never fabricate dates.

------------------------------------------------------------------------

# 9. PROJECTS

Create a project discovery system.

Project cards should expose:

-   Title.
-   Track.
-   Status.
-   Short description.
-   Technologies.
-   Evidence.
-   Links.

Potential project categories include:

## Cybersecurity

-   AI-IDS-ES
-   Security monitoring / SIEM work where verified

## AI / ML

-   Human-Detection
-   IntelliHire-v3
-   Other verified AI/ML projects

The implementation must verify each project's actual status before
presenting it as completed, active, experimental, or planned.

------------------------------------------------------------------------

# 10. PROJECT CASE STUDIES

When evidence is available, provide a detailed project view.

Suggested structure:

``` text
Project
↓
Problem
↓
Context
↓
Role
↓
Approach
↓
Architecture
↓
Technology
↓
Implementation
↓
Outcome
↓
Lessons
↓
Links
```

Do not fabricate metrics or outcomes.

If an outcome is not documented, omit it or clearly mark it as unknown.

------------------------------------------------------------------------

# 11. SKILLS

Organize skills into meaningful groups.

## Cybersecurity

Potential verified areas include:

-   SOC Operations
-   SIEM
-   Incident Response
-   Log Analysis
-   Network Analysis
-   Linux
-   Security Monitoring

## AI / ML

Potential verified areas include:

-   Python
-   Machine Learning
-   Data Analysis
-   NLP
-   Generative AI
-   Prompt Engineering
-   Context Engineering

## Development / Tools

Potential areas include:

-   Python
-   Jupyter Notebook
-   VS Code
-   Git
-   GitHub

## Operating Systems

-   Linux / Ubuntu
-   Windows

## AI / Prompt Engineering

-   Prompt Engineering
-   Context Engineering
-   Generative AI Tools
-   NLP foundations

------------------------------------------------------------------------

# 12. EVIDENCE-BASED SKILLS

Do not use meaningless percentage skill bars.

Instead, make skills discoverable through evidence.

Example:

``` text
Python

Related evidence

→ Human-Detection
→ AI-IDS-ES
→ J.P. Morgan Software Engineering Experience
→ AI/ML coursework
→ Data analysis workflows
```

Similarly:

``` text
SIEM

Related evidence

→ TechCiti Cyber Security Analyst Internship
```

And:

``` text
Prompt Engineering

Related evidence

→ InAmigos Prompt Engineer Internship
```

Clicking a skill should reveal its related evidence.

------------------------------------------------------------------------

# 13. CERTIFICATIONS

Create an interactive certification section.

Known certifications / experiences include:

-   CompTIA Security+ (SY0-401)
-   CSX Cybersecurity Fundamentals Certificate (CSXF) --- ISACA
-   SC-100 Microsoft Cybersecurity Architect --- self-study
-   J.P. Morgan Software Engineering Virtual Experience --- Forage
-   Mastercard Cybersecurity Job Simulation --- Forage

Distinguish:

``` text
Certification
Virtual Experience
Job Simulation
Self-Study
```

Do not present self-study or simulations as professional certifications.

------------------------------------------------------------------------

# 14. RÉSUMÉ CENTER

Create a dedicated résumé page.

Display two clear options.

## Cybersecurity Résumé

Subtitle:

> Cybersecurity Analyst / SOC Track

Buttons:

``` text
[ View Résumé ]
[ Download PDF ]
```

## AI / ML Résumé

Subtitle:

> AI/ML Engineer / Prompt Engineering Track

Buttons:

``` text
[ View Résumé ]
[ Download PDF ]
```

The site must make both supplied résumé PDFs directly accessible.

The résumé content should be upgraded consistently with the
corresponding internship:

### Cybersecurity résumé

Include:

> Cyber Security Analyst Intern --- TechCiti Technologies Private
> Limited

### AI/ML résumé

Include:

> Prompt Engineer Intern --- InAmigos Foundation (IAF)

Do not fabricate achievements, metrics, technologies, or dates not
supported by the source material.

------------------------------------------------------------------------

# 15. AI PORTFOLIO CHATBOT

The chatbot is a core product feature, not a decorative widget.

Name it something such as:

> **Prompt Folio AI**

or:

> **Portfolio AI**

It should answer questions about the portfolio using grounded portfolio
data.

------------------------------------------------------------------------

# 16. CHATBOT KNOWLEDGE MODEL

Create a structured knowledge source.

``` text
Candidate
│
├── Identity
├── Professional Summary
├── Experience
│   ├── TechCiti
│   └── InAmigos
├── Projects
│   ├── Human-Detection
│   ├── IntelliHire-v3
│   ├── AI-IDS-ES
│   └── Portfolio
├── Skills
├── Certifications
├── Education
├── Résumés
└── Contact / Links
```

Prefer structured JSON/database records over embedding all knowledge
directly into prompts.

------------------------------------------------------------------------

# 17. CHATBOT QUESTIONS

The chatbot should support questions such as:

## Experience

> What did Mokshith do at TechCiti?

> What is his current internship?

> What was his role at InAmigos?

## Cybersecurity

> Does he have SOC experience?

> What SIEM experience does he have?

> What cybersecurity certifications does he have?

> What security skills does he know?

## AI / ML

> What AI projects has he worked on?

> What ML concepts does he know?

> What Python tools does he use?

## Combined

> How does cybersecurity relate to his AI/ML work?

> Which project combines AI and cybersecurity?

Expected relevant project:

> AI-IDS-ES

## Hiring

> Would he be suitable for an entry-level SOC role?

> Would he be suitable for an AI/ML internship?

> What are his strongest technical areas?

## Navigation

> Show me the cybersecurity résumé.

> Show me his AI/ML projects.

> Show me the TechCiti experience.

> Open the AI-IDS-ES project.

The chatbot should provide links/actions to the relevant portfolio
section.

------------------------------------------------------------------------

# 18. CHATBOT RESPONSE PRINCIPLES

The chatbot must:

1.  Use only known portfolio information for factual claims.
2.  Avoid hallucinating technologies or achievements.
3.  Distinguish completed work from planned work.
4.  Clearly label concepts, prototypes, research, and internships.
5.  Provide relevant evidence.
6.  Offer navigation actions.
7.  Handle unknown questions honestly.

For unknown information:

> I don't have verified information about that in Mokshith's portfolio.

Do not invent an answer.

------------------------------------------------------------------------

# 19. CHATBOT UI

The assistant should feel native to the portfolio.

Features:

-   Streaming response animation.
-   Typing indicator.
-   Suggested questions.
-   Conversation history during the session.
-   Clear conversation button.
-   Keyboard support.
-   Mobile-friendly chat.
-   Linkable project/experience cards.
-   Source/evidence indicators where appropriate.

Example response:

``` text
Portfolio AI

Mokshith has cybersecurity experience through his
Cyber Security Analyst internship at TechCiti Technologies.

Relevant areas include:

• SOC Operations
• SIEM Monitoring
• Incident Response
• Log Analysis
• Network Traffic Analysis

[View TechCiti Experience]
[View Cybersecurity Résumé]
```

------------------------------------------------------------------------

# 20. ANIMATION SYSTEM

Animations should communicate hierarchy and interaction, not distract
from the content.

## Page transitions

Use:

-   Fade
-   Small vertical movement
-   Smooth route transitions

## Sidebar

On hover:

-   Subtle background transition.
-   Icon movement.
-   Active-state indicator.

## Project cards

On hover:

-   Small elevation.
-   Border transition.
-   Arrow movement.
-   Metadata reveal.

## Skills

Use staggered entrance animation when entering the viewport.

Avoid fake progress percentages.

## Chatbot

Use:

-   Typing indicator.
-   Streaming text.
-   Message fade/slide.
-   Staggered suggested prompts.
-   Smooth card appearance.

## Hero

Suggested questions can appear sequentially on initial load.

Keep animation fast and respectful.

Respect:

``` text
prefers-reduced-motion
```

------------------------------------------------------------------------

# 21. PREMIUM VISUAL SYSTEM

Use the reference site's general design principles without copying it
directly.

Desired qualities:

-   Minimal
-   Premium
-   Technical
-   Calm
-   Editorial
-   Conversational

Use:

-   Off-white / neutral background.
-   Near-black typography.
-   Thin borders.
-   Large whitespace.
-   Rounded containers.
-   Restrained shadows.
-   Monochrome or very subtle accent colors.
-   Consistent iconography.
-   Strong typographic hierarchy.

Avoid:

-   Excessive gradients.
-   Excessive glassmorphism.
-   Giant animated backgrounds.
-   Fake skill percentages.
-   Unnecessary 3D effects.
-   Excessive motion.

------------------------------------------------------------------------

# 22. RESPONSIVE DESIGN

Desktop should feel like an application workspace.

Tablet should retain the information hierarchy while reducing sidebar
width.

Mobile should transform the navigation into an accessible menu.

Mobile priorities:

1.  Identity.
2.  Conversational input.
3.  Suggested questions.
4.  Key experience.
5.  Projects.
6.  Résumé actions.
7.  Contact.

All interactive controls must remain touch-friendly.

------------------------------------------------------------------------

# 23. ACCESSIBILITY

Implement accessibility from the beginning.

Requirements:

-   Semantic HTML.
-   Keyboard navigation.
-   Visible focus states.
-   Accessible labels.
-   Appropriate heading hierarchy.
-   Sufficient contrast.
-   Accessible form controls.
-   Screen-reader-friendly navigation.
-   Reduced-motion support.
-   No interaction that depends only on hover.

------------------------------------------------------------------------

# 24. PERFORMANCE

The portfolio should be fast.

Prioritize:

-   Optimized images.
-   Lazy loading.
-   Minimal JavaScript where possible.
-   Efficient animations.
-   Avoid unnecessary dependencies.
-   Avoid large client-side bundles.
-   Cache static assets where appropriate.

Measure performance rather than assuming it is fast.

------------------------------------------------------------------------

# 25. SEO

Implement:

-   Meaningful page titles.
-   Meta descriptions.
-   Open Graph metadata.
-   Canonical URLs.
-   Semantic content.
-   Sitemap where appropriate.
-   Robots configuration where appropriate.

The homepage should communicate the professional identity clearly to
search engines.

------------------------------------------------------------------------

# 26. CONTACT AND EXTERNAL LINKS

Provide clear access to:

-   Email
-   GitHub
-   LinkedIn
-   Résumé PDFs

Do not invent links.

Use the verified links supplied by the portfolio/resume sources.

------------------------------------------------------------------------

# 27. PRODUCT QUALITY REQUIREMENTS

The finished product must be:

``` text
Responsive
Accessible
Fast
SEO-ready
Visually polished
Conversational
Grounded
Maintainable
Secure
```

The AI assistant must never become a dependency that prevents normal
portfolio navigation.

------------------------------------------------------------------------

# 28. MUNDER DIFFLIN EXECUTION PROCESS

Use the Munder Difflin operating procedure for this entire project.

## Phase 1 --- PRD

Start from:

``` text
PRD
↓
WHAT TO BUILD
↓
TARGETED USER
↓
FEATURES
```

The supplied product-process image represents this initial planning
pattern.

------------------------------------------------------------------------

# 29. MUNDER DIFFLIN ORCHESTRATION

The hierarchy is:

``` text
USER / OPERATOR
        ↓
MICHAEL / GOD
        ↓
VISHNU
        ↓
TASK ANALYSIS
        ↓
SPECIALIST SELECTION
        ↓
ENGINE
        ↓
TOOLS / SKILLS
        ↓
IMPLEMENTATION
        ↓
TESTING
        ↓
SECURITY
        ↓
REVIEW
        ↓
REALITY CHECK
        ↓
EVIDENCE
        ↓
CHECKPOINT
        ↓
NEXT TASK
```

------------------------------------------------------------------------

# 30. VISHNU WORKFLOW

Vishnu should convert the product objective into an executable task
graph.

Use:

``` text
OBJECTIVE
→ CONTEXT
→ REQUIREMENTS
→ ARCHITECTURE
→ TASK GRAPH
→ SPECIALIST
→ EXECUTION
→ VERIFICATION
→ NEXT TASK
```

Before implementation:

-   Inspect the repository.
-   Identify framework.
-   Identify current architecture.
-   Identify dependencies.
-   Identify existing components.
-   Identify build/test commands.
-   Identify existing design system.
-   Identify existing AI integration.
-   Identify existing résumé/PDF handling.

Do not rewrite working architecture without a reason.

------------------------------------------------------------------------

# 31. SPECIALIST SELECTION

Use only the specialists needed for each task.

Suggested mapping:

``` text
Repository unfamiliar
→ Codebase Onboarding

Architecture
→ Software Architect

UI / visual design
→ UI Designer

UX / navigation
→ UX Architect

Frontend
→ Frontend Developer

Backend
→ Backend Engineer

Database
→ Database Specialist

AI chatbot
→ AI Engineer

RAG / retrieval
→ ML / RAG Specialist

Agent orchestration
→ Multi-Agent Systems Architect

Security
→ Security Architect / AppSec

Testing
→ Test Automation Engineer

Accessibility
→ Accessibility Auditor

Performance
→ Performance Engineer

Code quality
→ Code Reviewer

Truth verification
→ Reality Checker

Evidence
→ Evidence Collector

Prioritization
→ Sprint / Priority Specialist
```

------------------------------------------------------------------------

# 32. ENGINE SELECTION

An agent and an engine are different.

``` text
Agent
↓
Engine
↓
Provider
↓
Model
↓
Credential Reference
```

Before dispatch:

1.  Identify the task.
2.  Identify the specialist.
3.  Check engine compatibility.
4.  Check provider/model requirements.
5.  Check tool/skill requirements.
6.  Check workspace permissions.
7.  Dispatch.

Reuse existing configured infrastructure whenever compatible.

Never expose credentials.

------------------------------------------------------------------------

# 33. SKILLS AND TOOLS

Use the minimum relevant skills and tools.

Workflow:

``` text
Task
↓
Required capability
↓
Discover skill
↓
Check compatibility
↓
Use skill
↓
Execute
↓
Verify
```

Tools/MCP may include:

-   Filesystem
-   Git
-   Browser
-   Database
-   APIs
-   Testing
-   Deployment
-   External services

All tool usage must respect authorization boundaries.

------------------------------------------------------------------------

# 34. IMPLEMENTATION FLOW

For every meaningful task:

``` text
RECEIVE
↓
UNDERSTAND
↓
AUDIT
↓
REQUIREMENTS
↓
CHECK EXISTING IMPLEMENTATION
↓
DEPENDENCIES
↓
CLASSIFY
↓
SELECT SPECIALIST
↓
SELECT ENGINE
↓
SELECT SKILLS / TOOLS
↓
PLAN
↓
IMPLEMENT
↓
TEST
↓
SECURITY REVIEW
↓
CODE REVIEW
↓
REALITY CHECK
↓
EVIDENCE
↓
DOCUMENT
↓
CHECKPOINT
```

------------------------------------------------------------------------

# 35. GIT SAFETY

Before modifying a repository:

``` bash
git status
```

After changes:

``` bash
git status
git diff
```

Never automatically perform destructive actions such as:

``` text
git reset --hard
git clean -fd
force push
history destruction
```

unless explicitly authorized and genuinely required.

------------------------------------------------------------------------

# 36. TASK STATES

Track meaningful tasks using:

``` text
NOT_STARTED
IN_PROGRESS
COMPLETED
VERIFIED
BLOCKED
FAILED
```

Do not treat:

> COMPLETED

as equivalent to:

> VERIFIED

A finished feature should preferably reach:

``` text
COMPLETED + VERIFIED
```

------------------------------------------------------------------------

# 37. TESTING

Use appropriate tests.

Frontend:

-   Build.
-   Unit tests where appropriate.
-   Component tests where appropriate.
-   End-to-end tests for important user journeys.

Chatbot:

-   Test factual questions.
-   Test unknown questions.
-   Test navigation actions.
-   Test project-status accuracy.
-   Test résumé routing.
-   Test hallucination resistance.

Accessibility:

-   Keyboard navigation.
-   Focus behavior.
-   Semantic structure.
-   Contrast.
-   Reduced motion.

Responsive:

-   Desktop.
-   Tablet.
-   Mobile.

------------------------------------------------------------------------

# 38. SECURITY

Security-sensitive work must follow:

``` text
Authorization
→ Scope
→ Execution
→ Evidence
→ Remediation
```

Never:

-   Expose API keys.
-   Hardcode credentials.
-   Commit secrets.
-   Put secrets into prompts.
-   Put secrets into logs.
-   Bypass authentication.
-   Bypass authorization.

If the chatbot uses an API key, keep it server-side or use the project's
approved secure architecture.

------------------------------------------------------------------------

# 39. AI-GENERATED CODE REVIEW

Any AI-generated implementation must be independently reviewed.

Check for:

-   Incorrect APIs.
-   Hallucinated dependencies.
-   Security vulnerabilities.
-   Unnecessary complexity.
-   Broken responsive behavior.
-   Poor accessibility.
-   Incorrect assumptions.
-   Overengineering.
-   Missing error handling.

------------------------------------------------------------------------

# 40. REALITY CHECK

Before claiming that Prompt Folio is complete, verify:

``` text
Does the application actually run?
Does the production build succeed?
Do the pages actually work?
Do both résumé PDFs open?
Does the chatbot actually answer?
Are answers grounded?
Do project links work?
Does mobile work?
Does keyboard navigation work?
Are there console errors?
Are secrets protected?
Does the evidence support the claims?
```

Never report:

> implemented

when only code has been written.

------------------------------------------------------------------------

# 41. EVIDENCE

Collect objective evidence such as:

-   Git diff.
-   Build output.
-   Test output.
-   Screenshots.
-   Browser/runtime results.
-   API responses.
-   Deployment status.
-   Accessibility test results.
-   Performance measurements.

Do not fabricate evidence.

------------------------------------------------------------------------

# 42. CHECKPOINTS

For long tasks, create durable checkpoints.

A checkpoint should record:

``` text
Current task
Completed work
Verified work
Files changed
Tests run
Known blockers
Next task
```

Use actual repository/filesystem state as the source of truth.

------------------------------------------------------------------------

# 43. INTERRUPTION RECOVERY

If work is interrupted:

``` text
Inspect
↓
Check Git
↓
Check filesystem
↓
Check checkpoint
↓
Check test results
↓
Determine last VERIFIED state
↓
Resume unfinished work
```

Never blindly repeat completed work.

------------------------------------------------------------------------

# 44. MULTI-AGENT HANDOFF FORMAT

Every specialist should return:

``` text
TASK
WHAT WAS INSPECTED
WHAT WAS CHANGED
WHAT WAS TESTED
RESULT
EVIDENCE
BLOCKERS
NEXT RECOMMENDATION
```

The next specialist should be able to continue from that information.

------------------------------------------------------------------------

# 45. PRIORITY ORDER

When many tasks exist, prioritize using:

1.  User value.
2.  Blocking dependencies.
3.  Security risk.
4.  Functional correctness.
5.  Core UX.
6.  Accessibility.
7.  Performance.
8.  Visual polish.
9.  Nice-to-have enhancements.

Do not spend time polishing animations while core portfolio
functionality is broken.

------------------------------------------------------------------------

# 46. DEFINITION OF DONE

Prompt Folio is not complete until the relevant quality gates pass:

``` text
FUNCTIONALITY       ✓
ARCHITECTURE        ✓
SECURITY            ✓
TESTING             ✓
ACCESSIBILITY       ✓
PERFORMANCE         ✓
SEO                 ✓
DOCUMENTATION       ✓
GIT INTEGRITY       ✓
EVIDENCE            ✓
REALITY CHECK       ✓
```

Only claim completion after appropriate verification.

------------------------------------------------------------------------

# 47. FINAL PRODUCT VISION

The final experience should feel like:

> **A personal professional operating system.**

A visitor can:

``` text
LAND
↓
UNDERSTAND
↓
ASK
↓
EXPLORE
↓
VERIFY
↓
OPEN EVIDENCE
↓
VIEW RÉSUMÉ
↓
CONTACT
```

The portfolio should not merely say:

> "Here is my résumé."

It should communicate:

> **"Ask me about my work. I'll show you the evidence."**

------------------------------------------------------------------------

# 48. CONTINUOUS IMPROVEMENT LOOP

Munder Difflin should continue using:

``` text
DISCOVER
→ PLAN
→ EXECUTE
→ VERIFY
→ REVIEW
→ IMPROVE
→ NEXT TASK
→ LOOP
```

When authorized unfinished work remains:

> Find the next highest-priority task and continue.

------------------------------------------------------------------------

# 49. MASTER BUILD COMMAND

Use this document as the product and orchestration brief.

First perform reconnaissance.

Then create the task graph.

Then select the minimum required specialists.

Then implement incrementally.

Then test.

Then perform security, accessibility, performance, and code review as
appropriate.

Then perform the Reality Check.

Then collect evidence.

Then checkpoint.

Do not fabricate missing information.

Do not silently invent résumé facts.

Do not present planned projects as completed projects.

Do not expose secrets.

Do not destroy existing work.

Build Prompt Folio as a **real, usable, evidence-driven conversational
portfolio**, not merely a visual imitation of the reference design.

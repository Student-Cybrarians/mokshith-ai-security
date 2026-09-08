# phases.doc.md

## Prompt Folio --- Project Phases

**Purpose:** Break the Prompt Folio portfolio project into manageable,
verifiable engineering phases.

The portfolio presents two professional tracks:

-   **Cybersecurity** --- including the TechCiti Technologies Private
    Limited internship.
-   **AI/ML / Prompt Engineering** --- including the InAmigos Foundation
    (IAF) internship.

Munder Difflin should execute these phases using the appropriate
specialist agent, following:

> **Audit → Plan → Implement → Test → Review → Reality Check → Evidence
> → Checkpoint**

------------------------------------------------------------------------

# PHASE 1: DISCOVERY & REQUIREMENTS

### Goal

Understand the current portfolio, source material, requirements, and
existing implementation before making changes.

### Tasks

-   Inspect the existing Prompt Folio project.
-   Review the current Framer portfolio and available structure.
-   Review the two résumé sources.
-   Identify verified professional information.
-   Separate Cybersecurity and AI/ML career tracks.
-   Identify existing pages, components, CMS/content structures, links,
    and assets.
-   Identify current chatbot behavior and knowledge sources.
-   Define the required portfolio experience.
-   Identify missing information that must be confirmed rather than
    invented.

### Munder Difflin specialists

-   Product Manager
-   Codebase Onboarding / Reconnaissance
-   UX Architect
-   Software Architect

### Exit criteria

-   Requirements are documented.
-   Existing implementation is understood.
-   Content gaps are identified.
-   No implementation begins based on assumptions.

------------------------------------------------------------------------

# PHASE 2: PORTFOLIO ARCHITECTURE & CONTENT MODEL

### Goal

Define how the portfolio information and user experience are organized.

### Tasks

-   Define the portfolio information architecture.
-   Define reusable profile/content structures.
-   Organize:
    -   Profile
    -   Experience
    -   Projects
    -   Skills
    -   Education
    -   Certifications where verified
    -   Résumés
    -   Public links
    -   Contact information
-   Define the two professional tracks.
-   Define project-detail structure.
-   Define chatbot knowledge structure.
-   Define résumé PDF references.
-   Define navigation and page relationships.
-   Preserve the existing architecture where it is already suitable.

### Recommended page structure

``` text
Overview
├── Profile
├── Experience
├── Projects
├── Skills
├── Education
├── About
├── Résumés
└── Contact
```

### Munder Difflin specialists

-   Software Architect
-   UX Architect
-   UI Designer
-   AI Engineer where chatbot architecture is involved

### Exit criteria

-   Information architecture is documented.
-   Content entities are defined.
-   Navigation structure is clear.
-   Chatbot knowledge boundaries are defined.

------------------------------------------------------------------------

# PHASE 3: CORE PORTFOLIO EXPERIENCE

### Goal

Build the primary portfolio interface and professional presentation.

### Tasks

-   Implement the overview/home experience.
-   Implement profile presentation.
-   Implement experience section.
-   Implement projects section.
-   Implement skills section.
-   Implement education section.
-   Implement about section.
-   Implement contact/access links.
-   Add clear navigation between sections/pages.
-   Preserve Prompt Folio's conversational portfolio concept.
-   Ensure the experience remains understandable without using the
    chatbot.

### Professional tracks

#### Cybersecurity

Present verified information about:

-   Cybersecurity Analyst experience.
-   TechCiti Technologies Private Limited internship.
-   Security operations.
-   SIEM monitoring.
-   Incident response.
-   Log analysis.
-   Linux.
-   Relevant projects and skills.

#### AI/ML

Present verified information about:

-   Prompt Engineer experience.
-   InAmigos Foundation (IAF) internship.
-   Prompt engineering.
-   Generative AI.
-   Natural Language Processing.
-   Context engineering.
-   Problem solving.
-   Relevant projects and skills.

### Munder Difflin specialists

-   UI Designer
-   UX Architect
-   Frontend Developer
-   Product Manager

### Exit criteria

-   Core portfolio sections are functional.
-   Both professional tracks are clearly represented.
-   Content is grounded in verified résumé information.
-   Navigation works.

------------------------------------------------------------------------

# PHASE 4: RÉSUMÉS, PROJECTS & INTERACTIVE FEATURES

### Goal

Make professional evidence easy to explore and access.

### Tasks

## Résumés

Provide separate access to:

-   Cybersecurity résumé PDF.
-   AI/ML résumé PDF.

Recommended actions:

-   View Cybersecurity Résumé
-   Download Cybersecurity Résumé
-   View AI/ML Résumé
-   Download AI/ML Résumé

Verify that each button points to the correct document.

## Projects

For each verified project, provide:

-   Project title.
-   Problem/context.
-   Role.
-   Technologies.
-   Approach.
-   Key decisions.
-   Outcome/results when documented.
-   Relevant links.
-   Case-study details where available.

## Interactive portfolio behavior

Add appropriate:

-   Project-card interactions.
-   Detail transitions.
-   Navigation feedback.
-   Expand/collapse behavior.
-   Contact actions.
-   Résumé actions.

### Munder Difflin specialists

-   Frontend Developer
-   UI Designer
-   UX Architect
-   Evidence Collector

### Exit criteria

-   Both résumé PDFs are accessible.
-   Project information is correctly represented.
-   Interactive controls work.
-   No fabricated project claims exist.

------------------------------------------------------------------------

# PHASE 5: CONVERSATIONAL CHATBOT

### Goal

Enable visitors to ask questions about the portfolio and receive
accurate, useful answers.

### Supported knowledge

The chatbot should answer questions about:

-   Who the portfolio owner is.
-   Professional summary.
-   Cybersecurity experience.
-   TechCiti internship.
-   AI/ML experience.
-   InAmigos internship.
-   Skills.
-   Projects.
-   Education.
-   Verified certifications.
-   Résumé information.
-   Public links.
-   Portfolio navigation.
-   Professional interests.

### Example questions

``` text
What does this person do?

What cybersecurity experience do they have?

What did they do at TechCiti?

What are their cybersecurity skills?

What AI/ML experience do they have?

What did they do at InAmigos?

What is their prompt engineering experience?

What projects have they built?

What technologies were used?

Can I see the cybersecurity résumé?

Can I see the AI/ML résumé?

How can I contact them?
```

### Grounding rules

The chatbot must:

-   Use verified portfolio data.
-   Distinguish known information from unknown information.
-   Never invent professional history.
-   Never invent certifications or achievements.
-   Never invent project metrics.
-   Never claim undocumented technology experience.
-   Never expose secrets or internal configuration.
-   Provide useful navigation suggestions when appropriate.

### Unknown-answer behavior

If the information is unavailable:

``` text
I don't have verified information about that yet.
You can explore the Experience or Projects section
for the available details.
```

### Munder Difflin specialists

-   AI Engineer
-   ML/RAG Specialist
-   Multi-Agent Systems Architect where needed
-   Security Architect
-   AppSec Engineer

### Exit criteria

-   Chatbot answers verified portfolio questions.
-   Unknown questions receive safe fallback responses.
-   No personal-information hallucination is observed.
-   Secrets and internal prompts are not exposed.

------------------------------------------------------------------------

# PHASE 6: ANIMATION, ACCESSIBILITY & PREMIUM UX

### Goal

Make the portfolio feel polished, responsive, and professional without
sacrificing usability.

### Animation

Implement purposeful motion for:

-   Page/section entrance.
-   Project-card hover.
-   Project-detail transitions.
-   Experience timeline reveal.
-   Navigation state changes.
-   Button feedback.
-   Chatbot message appearance.
-   Loading states.
-   Modal/dialog transitions.
-   Scroll-triggered reveals where appropriate.

### Animation principles

Use:

-   Short, smooth transitions.
-   Consistent easing.
-   Clear state changes.
-   Subtle movement.
-   Reduced-motion support.

Avoid:

-   Excessive motion.
-   Continuous decorative animation.
-   Distracting parallax.
-   Motion that prevents reading or interaction.

### Accessibility

Verify:

-   Keyboard navigation.
-   Visible focus states.
-   Semantic headings.
-   Accessible buttons.
-   Form labels.
-   Sufficient contrast.
-   Meaningful alt text.
-   Dialog focus behavior.
-   Chatbot keyboard interaction.
-   Mobile touch targets.
-   `prefers-reduced-motion`.

### Munder Difflin specialists

-   UI Designer
-   UX Architect
-   Accessibility Auditor
-   Frontend Developer

### Exit criteria

-   Animations improve interaction rather than distract.
-   Keyboard navigation works.
-   Reduced motion is respected.
-   Accessibility issues are addressed.

------------------------------------------------------------------------

# PHASE 7: SECURITY, PERFORMANCE & QUALITY

### Goal

Verify that the portfolio is safe, fast, reliable, and maintainable.

### Security

Check:

-   No API keys in frontend code.
-   No credentials committed to Git.
-   No secrets exposed through chatbot responses.
-   Safe rendering of user/chatbot content.
-   Input validation.
-   Chatbot endpoint protection where applicable.
-   Appropriate rate limiting where applicable.
-   No unnecessary sensitive information in logs.

### Performance

Check:

-   Initial page load.
-   Image optimization.
-   JavaScript bundle size.
-   Animation performance.
-   Unnecessary re-renders.
-   Lazy loading.
-   Chatbot response latency where measurable.

### Quality

Check:

-   Broken links.
-   Broken buttons.
-   Runtime errors.
-   Console errors.
-   Missing assets.
-   Mobile layout problems.
-   Incorrect résumé references.
-   Content inconsistencies.

### Munder Difflin specialists

-   Security Architect
-   AppSec Engineer
-   Secrets / Credential Engineer
-   Performance Engineer
-   Code Reviewer

### Exit criteria

-   No known critical security issue remains.
-   Performance is reasonable.
-   No known broken core interaction remains.
-   Code quality review is complete.

------------------------------------------------------------------------

# PHASE 8: TESTING & REALITY CHECK

### Goal

Prove that the implemented portfolio actually works.

### Functional testing

Verify:

-   Overview.
-   Navigation.
-   Experience.
-   Projects.
-   Skills.
-   Education.
-   About.
-   Contact.
-   Cybersecurity résumé button.
-   AI/ML résumé button.
-   PDF opening.
-   PDF downloading.
-   Chatbot questions.
-   Chatbot fallback.
-   Project interactions.
-   Mobile navigation.

### Responsive testing

Test:

-   Desktop.
-   Tablet.
-   Mobile.

### Accessibility testing

Test:

-   Keyboard-only navigation.
-   Focus behavior.
-   Screen-reader-oriented semantics.
-   Contrast.
-   Reduced motion.

### Chatbot testing

Test questions across:

-   General profile.
-   Cybersecurity.
-   TechCiti.
-   AI/ML.
-   InAmigos.
-   Projects.
-   Skills.
-   Résumés.
-   Navigation.
-   Unknown information.

### Reality Check

Ask:

``` text
Does it actually exist?
Does it actually run?
Does every important button work?
Do both PDFs open?
Does the chatbot answer from verified information?
Does the chatbot avoid fabrication?
Does the mobile layout work?
Do animations remain usable?
Are there runtime errors?
Was everything actually tested?
```

### Munder Difflin specialists

-   Test Automation Engineer
-   API Tester where applicable
-   Accessibility Auditor
-   Code Reviewer
-   Reality Checker
-   Evidence Collector

### Exit criteria

A feature is not considered complete until it is both:

``` text
COMPLETED
+
VERIFIED
```

------------------------------------------------------------------------

# PHASE 9: DEPLOYMENT & MAINTENANCE

### Goal

Release the verified portfolio and keep it accurate over time.

### Deployment

-   Verify production configuration.
-   Verify environment variables.
-   Build the production version.
-   Deploy to the approved hosting platform.
-   Verify production URLs.
-   Verify résumé PDF access in production.
-   Verify chatbot functionality in production.
-   Verify responsive behavior after deployment.

### Post-deployment

Monitor:

-   Broken links.
-   Chatbot failures.
-   Runtime errors.
-   Performance regressions.
-   User feedback.
-   Content accuracy.
-   Accessibility regressions.

### Future enhancements

Potential future work:

-   Improved project case studies.
-   Better chatbot retrieval.
-   Additional project categories.
-   Analytics where appropriate.
-   Enhanced animations.
-   More detailed AI/ML and cybersecurity profiles.
-   New résumé versions.
-   Additional verified certifications.
-   New professional experience.

Do not add future features without prioritization and requirements.

### Munder Difflin specialists

-   DevOps Engineer
-   SRE / Reliability Engineer
-   AI Engineer where chatbot deployment is involved
-   Reality Checker
-   Evidence Collector
-   Product Manager

### Exit criteria

-   Production deployment is verified.
-   Core portfolio flows work in production.
-   Evidence is collected.
-   Known issues are documented.
-   A checkpoint exists for future work.

------------------------------------------------------------------------

# PROJECT FLOW

``` text
PHASE 1
DISCOVERY & REQUIREMENTS
        ↓
PHASE 2
PORTFOLIO ARCHITECTURE & CONTENT MODEL
        ↓
PHASE 3
CORE PORTFOLIO EXPERIENCE
        ↓
PHASE 4
RÉSUMÉS, PROJECTS & INTERACTIVE FEATURES
        ↓
PHASE 5
CONVERSATIONAL CHATBOT
        ↓
PHASE 6
ANIMATION, ACCESSIBILITY & PREMIUM UX
        ↓
PHASE 7
SECURITY, PERFORMANCE & QUALITY
        ↓
PHASE 8
TESTING & REALITY CHECK
        ↓
PHASE 9
DEPLOYMENT & MAINTENANCE
        ↓
NEXT PRIORITY
        ↓
MUNDER DIFFLIN LOOP
```

------------------------------------------------------------------------

# PHASE STATUS MODEL

Every phase/task should use one of:

``` text
NOT_STARTED
IN_PROGRESS
COMPLETED
VERIFIED
BLOCKED
FAILED
```

Prefer:

``` text
COMPLETED + VERIFIED
```

before moving a significant task to the finished state.

------------------------------------------------------------------------

# MUNDER DIFFLIN CHECKPOINT

At the end of every significant phase, record:

``` text
PHASE:
STATUS:

WHAT WAS INSPECTED:

WHAT WAS CHANGED:

WHAT WAS TESTED:

RESULT:

EVIDENCE:

BLOCKERS:

NEXT HIGHEST-PRIORITY TASK:
```

------------------------------------------------------------------------

# FINAL QUALITY GATE

Before declaring the Prompt Folio project complete:

``` text
FUNCTIONALITY             ✓
CONTENT ACCURACY          ✓
CYBERSECURITY PROFILE     ✓
TECHCITI EXPERIENCE       ✓
AI/ML PROFILE             ✓
INAMIGOS EXPERIENCE       ✓
RÉSUMÉ PDF ACCESS         ✓
PROJECTS                  ✓
CHATBOT                   ✓
ANIMATIONS                ✓
RESPONSIVENESS            ✓
ACCESSIBILITY             ✓
SECURITY                  ✓
PERFORMANCE               ✓
TESTING                   ✓
CODE REVIEW               ✓
EVIDENCE                  ✓
REALITY CHECK             ✓
DEPLOYMENT                ✓
DOCUMENTATION             ✓
```

> **Do not report completion because the implementation "should work."
> Report completion only when the required behavior exists, has been
> tested, and the evidence supports the claim.**

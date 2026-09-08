
# 2. WHAT TO AVOID

## 2.1 Technology

Avoid:

-   Unnecessary framework changes.
-   Replacing working libraries without a demonstrated need.
-   Adding dependencies for trivial functionality.
-   Abandoned or unmaintained packages when a stable existing solution
    is available.
-   Duplicate libraries that solve the same problem.
-   Unnecessary state-management systems.
-   Excessive client-side JavaScript.
-   Large dependencies for small UI features.
-   Hard-coded content when a reusable data model is more appropriate.

Before adding a dependency:

1.  Check whether the project already provides the capability.
2.  Check whether an existing dependency can solve the problem.
3.  Check maintenance and compatibility.
4.  Check bundle/performance impact.
5.  Document why the dependency is necessary.

------------------------------------------------------------------------

## 2.2 Design

Avoid:

-   Excessive gradients.
-   Excessive glassmorphism.
-   Decorative animation that distracts from content.
-   Unreadable text.
-   Tiny interactive controls.
-   Inconsistent spacing.
-   Inconsistent border radii.
-   Random icon styles.
-   Overloaded screens.
-   Fake metrics or fabricated achievements.
-   Generic AI-generated filler text.

The portfolio should communicate competence, not visual noise.

------------------------------------------------------------------------

## 2.3 Content

Never fabricate:

-   Employment history.
-   Internship details.
-   Job titles.
-   Dates.
-   Education.
-   Certifications.
-   Project results.
-   Client names.
-   Security findings.
-   Performance metrics.
-   Technology usage.
-   Professional achievements.

If information is missing, mark it as requiring confirmation instead of
inventing it.

------------------------------------------------------------------------

# 3. LIBRARIES & DEPENDENCIES

## 3.1 Dependency Policy

Every dependency should have a clear purpose.

Prefer:

1.  Existing project dependencies.
2.  Platform/browser-native functionality.
3.  Small, well-maintained libraries.
4.  Reusable internal components.

Avoid dependency proliferation.

------------------------------------------------------------------------

## 3.2 Animation Libraries

If the project already uses an animation system, reuse it.

If animation functionality requires a library, use the project's
established animation solution rather than introducing multiple
animation frameworks.

Animations should support:

-   Page transitions.
-   Section entrance.
-   Project-card interaction.
-   Navigation feedback.
-   Modal/dialog transitions.
-   Chatbot message appearance.
-   Loading states.
-   Micro-interactions.

Animations must remain usable with reduced-motion preferences.

------------------------------------------------------------------------

## 3.3 Icons

Use one consistent icon system.

Do not mix unrelated icon families without a deliberate design reason.

Icons must:

-   Communicate meaning.
-   Have accessible labels where necessary.
-   Not replace essential text.
-   Remain visually consistent.

------------------------------------------------------------------------

# 4. ERROR HANDLING

## 4.1 General Rule

Errors must be:

-   Detectable.
-   Logged appropriately.
-   Understandable.
-   Recoverable where possible.
-   Safe to expose to users.

Never expose:

-   API keys.
-   Secrets.
-   Internal stack traces.
-   Database credentials.
-   Private configuration.
-   Sensitive system information.

------------------------------------------------------------------------

## 4.2 Chatbot Errors

If the portfolio chatbot cannot answer a question:

It should not invent an answer.

Preferred behavior:

1.  State that the information is not available.
2.  Provide the closest verified information if useful.
3.  Suggest another portfolio section.
4.  Encourage the visitor to ask a more specific question.

Example:

> I don't have verified information about that yet. You can explore the
> Projects or Experience sections for the available details.

------------------------------------------------------------------------

## 4.3 PDF Errors

If a résumé PDF cannot be opened or downloaded:

-   Show a clear fallback message.
-   Keep the rest of the portfolio functional.
-   Provide another available résumé access path when possible.
-   Do not silently fail.

Both résumé PDFs should have dedicated, clearly visible access buttons.

------------------------------------------------------------------------

# 5. BOUNDARIES OF AI

## 5.1 Portfolio Chatbot Purpose

The Prompt Folio chatbot is a portfolio assistant.

It may answer questions about verified portfolio information, including:

-   Professional summary.
-   Cybersecurity experience.
-   AI/ML experience.
-   TechCiti internship.
-   InAmigos internship.
-   Projects.
-   Skills.
-   Education.
-   Certifications when explicitly provided.
-   Résumé content.
-   Portfolio navigation.
-   Project technologies.
-   Professional interests.
-   Public contact information.
-   Public links.

------------------------------------------------------------------------

## 5.2 Grounding Requirement

The chatbot must answer from the portfolio's verified knowledge base.

The knowledge source should include, where available:

-   Profile data.
-   Résumé data.
-   Experience records.
-   Project records.
-   Skill records.
-   Education records.
-   Certification records.
-   Public links.
-   Project case studies.
-   Approved portfolio content.

The chatbot must not treat arbitrary model knowledge as the user's
personal history.

------------------------------------------------------------------------

## 5.3 No Hallucinated Credentials

The chatbot must never claim that the portfolio owner:

-   Worked somewhere they did not.
-   Used a tool that is not documented.
-   Earned a certification that is not documented.
-   Delivered a result that is not documented.
-   Has a degree that is not documented.
-   Performed a security activity that is not documented.

When uncertain, say so.

------------------------------------------------------------------------

## 5.4 Sensitive Security Boundaries

The cybersecurity profile may describe defensive experience, but the
portfolio chatbot must not turn the user's résumé into instructions for
unauthorized attacks.

It may discuss:

-   SOC workflows.
-   SIEM concepts.
-   Incident response concepts.
-   Log analysis.
-   Defensive security.
-   Security monitoring.
-   General security practices.

It must not claim authorization for security testing that has not been
documented.

------------------------------------------------------------------------

# 6. GENERAL RULES

## 6.1 Code Style

Follow the existing project's formatter and linter.

Use:

-   Clear names.
-   Small functions/components.
-   Single responsibility.
-   Predictable control flow.
-   Reusable abstractions where justified.
-   Minimal comments.

Comments should explain **why**, not restate obvious code.

------------------------------------------------------------------------

## 6.2 Naming Conventions

Use consistent naming throughout the project.

Prefer descriptive names for:

-   Components.
-   Routes.
-   Data models.
-   Functions.
-   Variables.
-   Content records.
-   Assets.

Do not use ambiguous names such as:

-   `thing`
-   `stuff`
-   `temp`
-   `newData`
-   `finalFinal`
-   `test2`

unless there is a specific temporary/testing purpose.

------------------------------------------------------------------------

## 6.3 Content Model

Professional portfolio information should preferably be represented as
structured data.

Recommended conceptual entities:

-   `Profile`
-   `Experience`
-   `Project`
-   `Skill`
-   `Education`
-   `Certification`
-   `Resume`
-   `Link`
-   `ChatKnowledge`

The exact implementation must follow the actual project's architecture.

------------------------------------------------------------------------

## 6.4 Résumé PDFs

Maintain two separate résumé access points:

### Cybersecurity Résumé

Must point to the verified cybersecurity résumé containing the TechCiti
internship.

### AI/ML Résumé

Must point to the verified AI/ML résumé containing the InAmigos
internship.

Buttons should have clear labels such as:

-   `View Cybersecurity Résumé`
-   `Download Cybersecurity Résumé`
-   `View AI/ML Résumé`
-   `Download AI/ML Résumé`

Do not merge the PDFs into one résumé unless explicitly requested.

------------------------------------------------------------------------

## 6.5 Navigation

Visitors should be able to reach important information quickly.

Recommended primary destinations:

-   Overview
-   Experience
-   Projects
-   Skills
-   Education
-   About
-   Résumés
-   Contact

The exact navigation should follow the existing Prompt Folio design.

------------------------------------------------------------------------

# 7. ANIMATION RULES

## 7.1 Animation Philosophy

Use motion to communicate:

-   Hierarchy.
-   Continuity.
-   State changes.
-   Interaction.
-   Progress.
-   Focus.

Do not use animation as decoration at the expense of usability.

------------------------------------------------------------------------

## 7.2 Recommended Animations

### Page entrance

Use subtle:

-   Fade.
-   Vertical movement.
-   Scale transitions.

### Project cards

Use:

-   Hover elevation.
-   Small image movement.
-   Border/highlight transitions.
-   CTA reveal.

### Experience timeline

Use:

-   Sequential entrance.
-   Scroll-triggered reveal.
-   Subtle timeline progression.

### Chatbot

Use:

-   Message fade-in.
-   Typing/loading indicator.
-   Smooth input focus.
-   Conversation expansion.

### Navigation

Use:

-   Active-state transitions.
-   Smooth section transitions.
-   Mobile menu animation.

### Buttons

Use:

-   Hover transition.
-   Press feedback.
-   Focus ring.
-   Loading state.

------------------------------------------------------------------------

## 7.3 Reduced Motion

Respect `prefers-reduced-motion`.

When reduced motion is requested:

-   Remove unnecessary movement.
-   Shorten transitions.
-   Avoid parallax.
-   Avoid continuous animation.
-   Preserve functionality.

------------------------------------------------------------------------

# 8. ACCESSIBILITY RULES

The portfolio must be usable by keyboard and assistive technologies.

Check:

-   Semantic headings.
-   Keyboard navigation.
-   Visible focus states.
-   Accessible buttons.
-   Accessible form labels.
-   Sufficient contrast.
-   Meaningful alt text.
-   Dialog focus management.
-   Chatbot keyboard interaction.
-   Mobile touch target sizing.
-   Reduced-motion support.

Do not communicate important information through color alone.

------------------------------------------------------------------------

# 9. SECURITY RULES

## 9.1 Secrets

Never commit:

-   API keys.
-   Tokens.
-   Passwords.
-   Private keys.
-   Credentials.
-   Service-account secrets.

Use environment variables or approved secret-management systems.

------------------------------------------------------------------------

## 9.2 Client-Side Security

Assume all client-side portfolio content is public.

Never put privileged credentials in frontend code.

If the chatbot uses a protected API:

-   Keep credentials server-side.
-   Validate inputs.
-   Apply rate limiting where appropriate.
-   Handle abuse safely.
-   Avoid exposing internal prompts or secrets.

------------------------------------------------------------------------

## 9.3 User Input

Treat chatbot input as untrusted.

Protect against:

-   Injection.
-   Malformed input.
-   Excessive payloads.
-   Prompt manipulation.
-   Abuse.
-   Unexpected rendering.

Render untrusted content safely.

------------------------------------------------------------------------

# 10. PERFORMANCE RULES

Optimize based on evidence.

Prioritize:

-   Fast initial load.
-   Optimized images.
-   Lazy loading.
-   Efficient animations.
-   Minimal JavaScript.
-   Avoiding unnecessary re-renders.
-   Appropriate caching.
-   Responsive layouts.
-   Small asset sizes.

Do not add optimization complexity without a measurable benefit when
measurement is practical.

------------------------------------------------------------------------

# 11. SEO & DISCOVERABILITY

The portfolio should provide:

-   Meaningful page titles.
-   Descriptive metadata.
-   Semantic headings.
-   Crawlable content where appropriate.
-   Descriptive project titles.
-   Open Graph metadata where supported.
-   Proper canonical behavior where applicable.
-   Descriptive links.

Do not keyword-stuff the portfolio.

------------------------------------------------------------------------

# 12. PORTFOLIO CHATBOT RULES

## 12.1 Supported Questions

The chatbot should be capable of answering questions such as:

### General

-   Who is this portfolio about?
-   What does this person do?
-   What are their main areas of expertise?

### Cybersecurity

-   What cybersecurity experience do they have?
-   What did they do at TechCiti?
-   What security tools or concepts do they know?
-   What are their cybersecurity skills?
-   What cybersecurity projects have they built?

### AI/ML

-   What AI/ML experience do they have?
-   What did they do at InAmigos?
-   What is their prompt engineering experience?
-   What generative AI skills do they have?
-   What AI/ML projects have they built?

### Projects

-   What projects have they worked on?
-   What technology was used?
-   What was their role?
-   What problem did the project solve?
-   What was the outcome?

### Résumé

-   Can I see the cybersecurity résumé?
-   Can I see the AI/ML résumé?
-   Can I download the résumé?

### Navigation

-   Show me their projects.
-   Tell me about their experience.
-   What skills do they have?
-   How can I contact them?

------------------------------------------------------------------------

## 12.2 Answer Quality

Answers should be:

-   Concise by default.
-   Specific.
-   Professional.
-   Grounded in verified portfolio data.
-   Easy to scan.
-   Honest about uncertainty.

For detailed questions, the chatbot may provide structured answers with
bullets.

------------------------------------------------------------------------

# 13. MUNDER DIFFLIN RULES

Munder Difflin is the engineering orchestration layer for this project.

Use the smallest appropriate specialist set.

## Role selection

  Task                      Specialist
  ------------------------- ----------------------------
  Requirements              Product Manager
  Architecture              Software Architect
  Repository inspection     Codebase Onboarding
  UI                        UI Designer
  UX                        UX Architect
  Frontend                  Frontend Developer
  AI chatbot                AI Engineer
  RAG/knowledge retrieval   ML/RAG Specialist
  Security architecture     Security Architect
  App security              AppSec Engineer
  Secrets                   Secrets Engineer
  Testing                   Test Automation Engineer
  Accessibility             Accessibility Auditor
  Performance              Performance Engineer
  Code quality              Code Reviewer
  Truth verification        Reality Checker
  Evidence                  Evidence Collector
  Prioritization            Sprint/Priority Specialist

Do not activate every agent automatically.

------------------------------------------------------------------------

# 14. MUNDER DIFFLIN EXECUTION PROCESS

For every meaningful engineering task:

``` text
USER OBJECTIVE
      ↓
MICHAEL / GOD
      ↓
VISHNU
      ↓
CONTEXT AUDIT
      ↓
REQUIREMENTS
      ↓
CURRENT-STATE INSPECTION
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
ACCESSIBILITY REVIEW
      ↓
CODE REVIEW
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

# 15. MUNDER DIFFLIN AGENT HANDOFF

Every specialist should report:

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

Never claim completion without verification.

------------------------------------------------------------------------

# 16. GIT RULES

Before modification:

``` bash
git status
```

After modification:

``` bash
git status
git diff
```

Never automatically perform destructive operations such as:

``` text
git reset --hard
git clean -fd
force push
history destruction
```

unless explicitly authorized and genuinely required.

------------------------------------------------------------------------

# 17. TESTING RULES

Where applicable, verify:

### Functional

-   Navigation.
-   Project interaction.
-   Experience content.
-   Skills.
-   Résumé buttons.
-   PDF access.
-   Chatbot questions.
-   Chatbot fallback behavior.
-   Contact links.

### Responsive

Test:

-   Desktop.
-   Tablet.
-   Mobile.

### Accessibility

Test:

-   Keyboard.
-   Focus.
-   Semantic structure.
-   Contrast.
-   Reduced motion.

### Security

Test:

-   Secret exposure.
-   Input handling.
-   Chatbot endpoint protection.
-   Unsafe content rendering.

### Performance

Test:

-   Initial load.
-   Asset size.
-   Animation cost.
-   Chatbot latency where measurable.

------------------------------------------------------------------------

# 18. REALITY CHECK

Before declaring a feature complete, ask:

-   Does the feature actually exist?
-   Does it actually run?
-   Does the button actually work?
-   Does the PDF actually open/download?
-   Does the chatbot actually answer from portfolio data?
-   Are the answers factually supported?
-   Does the mobile layout actually work?
-   Are animations usable?
-   Are accessibility requirements satisfied?
-   Are there console/runtime errors?
-   Was the implementation actually tested?

Never replace evidence with assumptions.

------------------------------------------------------------------------

# 19. DOCUMENTATION RULES

Document:

-   Major architectural decisions.
-   Non-obvious implementation choices.
-   AI/chatbot knowledge boundaries.
-   New dependencies.
-   Important environment configuration.
-   Deployment requirements.
-   Known limitations.

Do not write documentation that claims functionality that has not been
verified.

------------------------------------------------------------------------

# 20. DEFINITION OF DONE

A portfolio task is considered complete only when:

-   [ ] Requirements are satisfied.
-   [ ] Existing architecture was respected.
-   [ ] The implementation works.
-   [ ] Cybersecurity résumé information is accurate.
-   [ ] TechCiti internship information is accurate.
-   [ ] AI/ML résumé information is accurate.
-   [ ] InAmigos internship information is accurate.
-   [ ] Both résumé PDFs are accessible.
-   [ ] Portfolio navigation works.
-   [ ] Chatbot answers verified portfolio questions.
-   [ ] Chatbot does not fabricate personal information.
-   [ ] Responsive behavior is verified.
-   [ ] Accessibility is checked.
-   [ ] Security boundaries are checked.
-   [ ] Performance is reasonable.
-   [ ] Tests pass where applicable.
-   [ ] Git state is understood.
-   [ ] Evidence has been collected.
-   [ ] Reality Check passes.

------------------------------------------------------------------------

# 21. FINAL RULE

The goal is not merely to build a visually impressive portfolio.

The goal is to build a **credible, accurate, interactive professional
portfolio** that allows a visitor to understand the user's two technical
career tracks quickly and confidently.

Prompt Folio should communicate:

> **What I know → What I have done → What I built → How I think → How I
> can contribute.**

Munder Difflin should preserve that objective throughout every
implementation, review, and future modification.

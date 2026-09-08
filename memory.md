# memory.md

## Prompt Folio --- Project Memory

**Purpose:** Maintain durable project context so Munder Difflin can
preserve progress, decisions, current work, and important project
information across sessions.

Memory is a continuity mechanism, not a replacement for the actual
codebase, Git history, tests, or source documents.

------------------------------------------------------------------------

# 1. MEMORY

Store important project context, decisions, patterns, and verified
information.

## Remember

-   Important architectural decisions.
-   Confirmed portfolio requirements.
-   Confirmed content structure.
-   Important UX decisions.
-   Design-system decisions.
-   Chatbot behavior and grounding rules.
-   Completed phases.
-   Known blockers.
-   Important testing findings.
-   Project-specific constraints.
-   Verified résumé/content facts.

## Do not store

-   Passwords.
-   API keys.
-   Authentication tokens.
-   Private credentials.
-   Secrets.
-   Sensitive information that is unnecessary for project execution.

Never use memory as a place to store secrets.

------------------------------------------------------------------------

# 2. WHAT HAPPENED

Log major project updates, changes, and decisions.

Record:

-   What feature was implemented.
-   What architecture changed.
-   What design decision was made.
-   What problem was discovered.
-   What solution was selected.
-   What testing was performed.
-   What remains incomplete.

Example:

``` text
PHASE:
Core Portfolio Experience

UPDATE:
Implemented separate Cybersecurity and AI/ML experience sections.

DECISION:
Keep both career tracks accessible from the primary portfolio navigation.

RESULT:
Both tracks can be explored without relying on the chatbot.
```

------------------------------------------------------------------------

# 3. CURRENTLY WORKING

Always identify the current active task.

Track:

-   Current phase.
-   Current feature.
-   Current file/module being worked on.
-   Current objective.
-   Dependencies.
-   What remains.
-   What should happen next.

Example:

``` text
Currently working on:
Prompt Folio chatbot grounding

Current objective:
Enable verified answers about Cybersecurity, TechCiti,
AI/ML, InAmigos, projects, skills, and résumés.

Next:
Test representative visitor questions and verify
that unknown information receives a safe fallback.
```

------------------------------------------------------------------------

# 4. UPDATES

Update project memory regularly.

## Update after

-   Major implementation.
-   Architectural decision.
-   Completed phase.
-   Test result.
-   Security finding.
-   UX decision.
-   Deployment.
-   Important blocker.
-   Requirement change.

## Keep information accurate

-   Replace outdated decisions when superseded.
-   Mark incomplete work clearly.
-   Remove irrelevant information.
-   Do not preserve assumptions as facts.
-   Distinguish verified information from proposed ideas.

------------------------------------------------------------------------

# 5. PURPOSE

Memory exists to:

-   Maintain context across sessions.
-   Improve productivity and consistency.
-   Prevent repeated discovery work.
-   Preserve important decisions.
-   Track progress.
-   Ensure unfinished work is not forgotten.
-   Help Munder Difflin resume after interruption.
-   Maintain continuity between agents.

Memory should support the Munder Difflin execution loop:

``` text
DISCOVER
→ PLAN
→ EXECUTE
→ VERIFY
→ REVIEW
→ CHECKPOINT
→ RESUME
```

------------------------------------------------------------------------

# 6. CHECKPOINT FORMAT

At significant milestones, record:

``` text
PROJECT:
Prompt Folio

CURRENT PHASE:
<phase>

STATUS:
NOT_STARTED / IN_PROGRESS / COMPLETED / VERIFIED / BLOCKED / FAILED

WHAT WAS INSPECTED:
<details>

WHAT WAS CHANGED:
<details>

WHAT WAS TESTED:
<details>

RESULT:
<details>

EVIDENCE:
<test output / screenshot / runtime result / diff>

BLOCKERS:
<details or NONE>

CURRENT FILES / MODULES:
<details>

NEXT HIGHEST-PRIORITY TASK:
<details>
```

------------------------------------------------------------------------

# 7. SOURCE OF TRUTH

When information conflicts, prioritize actual evidence.

Use this order:

``` text
Actual running implementation
        ↓
Tests / runtime evidence
        ↓
Git state / diff
        ↓
Approved project documentation
        ↓
Verified résumé/source material
        ↓
Memory
        ↓
Assumption
```

Memory must never override current verified project state.

------------------------------------------------------------------------

# 8. MULTI-AGENT CONTINUITY

Every agent handoff should preserve:

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

The next agent should be able to continue without reconstructing
unnecessary history.

------------------------------------------------------------------------

# 9. INTERRUPTION & RECOVERY

If work is interrupted by:

-   Power loss.
-   Restart.
-   Terminal closure.
-   Agent crash.
-   Network interruption.
-   Partial command failure.

Recover using:

``` text
Git state
+
Filesystem state
+
Checkpoint
+
Logs
+
Test results
+
Memory
```

Then:

``` text
INSPECT
→ IDENTIFY LAST VERIFIED STATE
→ IDENTIFY INCOMPLETE TASK
→ RESUME
```

Never blindly repeat completed work.

------------------------------------------------------------------------

# 10. MEMORY QUALITY RULE

Memory should remain:

-   Accurate.
-   Concise.
-   Current.
-   Relevant.
-   Evidence-oriented.

Do not allow memory to become a dumping ground for every conversation.

**Purpose of memory: preserve context that materially improves future
engineering work.**

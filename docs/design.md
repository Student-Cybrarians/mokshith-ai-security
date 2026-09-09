# design.md

## Prompt Folio --- UI/UX Guidelines & Visual Design System

**Purpose:** Define the visual language, interaction principles, and
reusable design rules for the Prompt Folio portfolio.

The portfolio should feel clean, premium, conversational, intuitive,
responsive, and focused on professional work.

------------------------------------------------------------------------

# 1. UI / UX

## Core principles

-   Clean and intuitive interface.
-   Consistent user experience across all pages.
-   Mobile-first responsive approach.
-   Easy navigation and accessibility.
-   Reusable components and visual consistency.
-   Keep the user's attention on professional work, projects,
    experience, and skills.
-   Preserve the conversational portfolio concept without making the
    interface confusing.
-   Every interaction should provide clear visual feedback.

## Navigation

The primary experience should make it easy to reach:

-   Overview
-   Experience
-   Projects
-   Skills
-   Education
-   About
-   Résumés
-   Contact

Navigation should remain predictable across desktop, tablet, and mobile
layouts.

## Responsive behavior

Design for:

-   Desktop
-   Tablet
-   Mobile

Do not allow content, buttons, cards, chatbot controls, or résumé
actions to become difficult to use on smaller screens.

## Accessibility

The interface should support:

-   Keyboard navigation.
-   Visible focus states.
-   Semantic structure.
-   Accessible buttons and links.
-   Readable typography.
-   Sufficient color contrast.
-   Meaningful labels.
-   Reduced-motion preferences.

------------------------------------------------------------------------

# 2. COLOR & THEME

Define a restrained visual palette.

## Color roles

Use dedicated semantic tokens for:

-   Primary color.
-   Secondary color.
-   Accent color.
-   Background.
-   Surface/card background.
-   Primary text.
-   Secondary/muted text.
-   Border/divider.
-   Success.
-   Warning.
-   Error.

Do not introduce arbitrary colors component-by-component.

## Theme

Support a coherent light theme.

If dark mode is implemented, maintain equivalent contrast, hierarchy,
and semantic color roles rather than simply inverting colors.

## Color usage

-   Primary color: primary actions and important navigation states.
-   Accent color: selected highlights and interactive emphasis.
-   Surface colors: cards, panels, inputs, and conversational areas.
-   Semantic colors: only for meaningful status feedback.
-   Muted colors: secondary information and supporting text.

Color should support hierarchy rather than become decoration.

------------------------------------------------------------------------

# 3. FONTS & TYPOGRAPHY

## Typography principles

-   Use a consistent primary font family.
-   Establish a clear type scale.
-   Maintain readable line heights.
-   Use font weight to establish hierarchy.
-   Avoid excessive font styles.

## Heading hierarchy

Define consistent styles for:

-   H1 --- page/hero title.
-   H2 --- major section.
-   H3 --- subsection.
-   H4 --- supporting subsection.

## Body text

Use readable body sizes and line heights.

Body copy should prioritize:

-   Readability.
-   Scannability.
-   Short paragraphs.
-   Clear hierarchy.

## Font weights

Use a controlled scale such as:

-   Regular.
-   Medium.
-   SemiBold.
-   Bold.

Do not use bold text everywhere. Reserve stronger weights for hierarchy
and emphasis.

------------------------------------------------------------------------

# 4. COMPONENT & INTERACTION SYSTEM

All reusable UI should follow shared component rules.

## Components

Establish consistent behavior for:

-   Buttons.
-   Links.
-   Navigation.
-   Cards.
-   Tags/chips.
-   Forms.
-   Inputs.
-   Modals/dialogs.
-   Tooltips where necessary.
-   Chatbot messages.
-   Résumé actions.
-   Project cards.
-   Experience entries.

## Component states

Interactive components should define:

-   Default.
-   Hover.
-   Focus.
-   Active/pressed.
-   Disabled.
-   Loading.
-   Error where applicable.

------------------------------------------------------------------------

# 5. ANIMATION & MOTION

Motion should communicate interaction and hierarchy.

## Appropriate animations

Use subtle animation for:

-   Page/section entrance.
-   Scroll-based reveals.
-   Project-card hover.
-   Project-detail transitions.
-   Navigation state changes.
-   Button feedback.
-   Chatbot message appearance.
-   Modal/dialog transitions.
-   Loading states.

## Motion rules

-   Keep animations short and purposeful.
-   Use consistent easing.
-   Avoid unnecessary motion.
-   Never make animation more important than content.
-   Respect `prefers-reduced-motion`.
-   Do not use continuous animation merely for decoration.
-   Avoid excessive parallax.

The portfolio should feel polished, not animated for the sake of
animation.

------------------------------------------------------------------------

# 6. CONVERSATIONAL UI

The Prompt Folio chatbot is a core interaction surface.

## Chat experience

The chatbot should:

-   Feel integrated with the portfolio.
-   Provide clear responses.
-   Maintain readable message hierarchy.
-   Provide useful navigation suggestions.
-   Avoid overwhelming the visitor.
-   Clearly distinguish visitor messages from assistant responses.
-   Provide appropriate loading and error states.

## Suggested interaction prompts

Examples:

``` text
What does this person do?

Tell me about their cybersecurity experience.

What did they do at TechCiti?

Tell me about their AI/ML experience.

What did they do at InAmigos?

What projects have they built?

What skills do they have?

Can I view their résumé?
```

------------------------------------------------------------------------

# 7. MEMORY / UI PREFERENCES

User-facing preferences may include:

-   Theme mode.
-   Language preference if supported.
-   Sidebar/layout state.
-   Other non-sensitive UI customizations.

Preferences should be stored only when there is a clear product
requirement and should not create unnecessary privacy risk.

------------------------------------------------------------------------

# 8. DESIGN QUALITY GATE

Before approving a design:

``` text
VISUAL HIERARCHY       ✓
CONSISTENCY            ✓
RESPONSIVENESS         ✓
ACCESSIBILITY          ✓
TYPOGRAPHY             ✓
COLOR SYSTEM           ✓
COMPONENT REUSE        ✓
INTERACTION STATES     ✓
ANIMATION QUALITY      ✓
REDUCED MOTION         ✓
CHATBOT UX             ✓
MOBILE USABILITY       ✓
```

The design should remain focused on the portfolio owner's professional
story and evidence of work.

# PRD: Pooja Lathkar — Personal Website

## Problem Statement

Pooja Lathkar is a senior people leader with 15+ years of experience across education, social impact, fintech, and deep-tech. She is actively exploring her next opportunity and needs a personal website that gives recruiters, founders, and CHROs enough context to understand who she is — not just her resume, but her values, philosophy, personality, and work.

A resume alone fails to convey what makes Pooja distinctive: she is an AI-native people leader who has already shipped AI tools inside HR and L&D contexts; her personal and professional selves tell a coherent story (she nurtures things — people, systems, gardens, animals); and she holds specific, earned convictions about what makes people and organisations work. None of that is visible from a PDF.

The site must also move data-driven founders — the numbers behind Pooja's work (CSAT improvements, follower growth, funds raised, adoption rates) must be surfaced prominently, not buried in bullet points.

## Solution

A single-page personal website — warm in tone, structured in layout — that functions as a curated, interactive first impression. It tells Pooja's story through her own words, surfaces her values with specificity, showcases two portfolio projects, and features an embedded AI chatbot (powered by Claude API) that lets visitors ask Pooja questions directly and get crisp, on-brand responses.

The site uses the same content for all visitor types (recruiters, founders, CHROs) and is anchored by a single primary CTA: Book a call.

**Hero headline:** "Strong organisations are built through thoughtfully designed environments."
**Subline:** "I'm Pooja Lathkar — a people leader who builds the systems, teams and cultures that make that possible."

**Tech stack:** Next.js (App Router) + Tailwind CSS, deployed on Vercel.

## User Stories

1. As a founder visiting the site, I want to understand Pooja's positioning in one headline, so that I can decide in 8 seconds whether to keep reading.
2. As a recruiter, I want to see Pooja's career timeline at a glance, so that I can assess level and domain fit quickly.
3. As a CHRO, I want to understand Pooja's philosophy on people leadership, so that I can judge whether her values match our org's culture.
4. As any visitor, I want a single clear action to take after reading, so that I know how to reach out without friction.
5. As a founder, I want to see evidence that Pooja has built with AI — not just used it — so that I can trust the AI-native claim in her headline.
6. As a visitor, I want to browse Pooja's projects with a live demo link, so that I can see her work rather than read about it.
7. As a recruiter, I want to see Pooja's awards and recognition surfaced inline with her experience, so that I can quickly identify third-party validation of her work.
8. As a founder, I want to read Pooja's values in her own words — not HR boilerplate — so that I can assess whether she'd be a culture fit for our leadership team.
9. As a visitor, I want to see Pooja as a whole person (interests, personality), so that I can form a genuine connection rather than read a polished resume.
10. As a visitor, I want the site to load fast and be readable on mobile, so that I can browse it anywhere without friction.
11. As a serious visitor, I want to book a call directly from the site without emailing back and forth, so that I can schedule time with Pooja immediately.
12. As a casual visitor, I want a lower-commitment fallback (email), so that I can reach out without committing to a call.
13. As a visitor, I want Pooja's LinkedIn linked, so that I can verify her background on a platform I already trust.
14. As a data-driven founder, I want to see Pooja's key metrics animate as I scroll to them, so that her impact is visceral, not just stated.
15. As a visitor, I want sections to fade in gently as I scroll, so that the site feels alive and intentional rather than a static document.
16. As a visitor, I want to ask Pooja a question directly from the site and get a crisp text response, so that I can explore beyond what's written without waiting for a reply.
17. As a visitor using the AI chatbot, I want questions about her work and values answered immediately, so that I can self-serve before deciding to book a call.
18. As a visitor using the AI chatbot, I want sensitive questions (salary, reasons for leaving) deflected warmly with a redirect to booking a call, so that the experience remains professional.
19. As a visitor, I want the chatbot to feel like it's Pooja speaking — warm, direct, data-backed — not a generic AI assistant, so that the interaction reinforces the site's impression.
20. As Pooja, I want the site to not explicitly name a target job title, so that it attracts Head of People, Head of HRBP, Chief of Staff to CHRO, and similar roles without self-limiting.
21. As Pooja, I want my holistic narrative to appear largely verbatim across sections, so that the site reads like my voice, not a marketer's summary.
22. As Pooja, I want my three core values presented with specificity and story, so that they read as earned convictions rather than corporate platitudes.
23. As Pooja, I want my two portfolio projects (ClearDesk and JobCoach_KA) presented as standalone cards with live links, so that visitors experience my work rather than just read about it.
24. As Pooja, I want animated metric counters on key numbers across my career, so that data-driven founders cannot miss the scale of my impact.
25. As Pooja, I want my personal interests (gardening, animals, bird watching, swimming) in a dedicated section, so that visitors see the through-line between who I am personally and professionally.
26. As Pooja, I want the AI chatbot to be powered by Claude API, so that the site itself is proof of my AI-native approach, not just a claim about it.
27. As Pooja, I want the chatbot embedded as a named section ("Ask Pooja"), not a floating bubble, so that visitors encounter it naturally as part of the story.
28. As Pooja, I want a sticky navigation bar with anchor links to each section, so that visitors can jump to what matters to them without losing context.
29. As a visitor who has finished reading, I want the Connect section to repeat the Book a call CTA, so that I don't have to scroll back to act.
30. As Pooja, I want the site deployed on Vercel, consistent with my existing project infrastructure, so that maintenance is simple and familiar.

## Implementation Decisions

### Site Architecture

Single-page application with anchor-based navigation. All content lives on one route. Navigation is sticky and contains anchor links to each section. No CMS — content is hardcoded in components, appropriate for a personal site that updates infrequently.

### Sections (in scroll order)

1. **Hero** — Full-viewport. Headline, subline, professional photo, primary CTA (Book a call → Calendly link), secondary CTA (email).
2. **About** — Narrative prose. First half of the holistic narrative: ISFC classroom observation → TFI → The/Nudge. The central question: *"How do people grow, learn and do meaningful work when environments become more complex?"*
3. **Values** — Three conviction cards + core belief block:
   - *Fix systems, not symptoms* — diagnose upstream before intervening downstream
   - *Integrity is non-negotiable* — even when timing is inconvenient or the cost is high
   - *Empathy + courage in equal measure* — neither alone produces good leadership
   - Core belief: *People are intrinsically motivated by purpose. Compensation and benefits are hygiene, not fuel.*
4. **Experience** — Career timeline. Each entry: org name, dates, 1-line org description, 2–3 impact bullets. Awards surfaced inline at The/Nudge. Second half of the holistic narrative woven in as connective tissue (Groww → Digantara → AI interest). Animated metric counters on key numbers.
5. **Projects** — Two standalone project cards:
   - **ClearDesk:** AI people ops assistant. Description, why it was built, live demo link (https://hr-products-modules.vercel.app/).
   - **JobCoach_KA:** Digital livelihoods awareness platform on Instagram. 220K followers, 90% cost reduction, Delhi Govt + BCG partnerships.
6. **Ask Pooja** — Embedded AI chatbot section. Prompt: *"Curious about something? Ask me directly."* Text input + response display. Powered by Claude API. Responds in Pooja's voice — warm, direct, crisp, data-backed where relevant.
7. **The Human** — Informal section. Short prose + icon grid: swimming, gardening (green thumb), stray rescue + 2 adopted cats, avid bird watching, wildlife fascination, Adam Grant + Brené Brown. Tone deliberately lighter than the rest of the site.
8. **Connect** — Primary CTA repeated (Book a call), email address, LinkedIn link. Minimal, uncluttered.

### Key Components

- **AnimatedCounter** — Reusable component that counts from 0 to a target value over ~1.5s when it enters the viewport. Uses IntersectionObserver. Props: `target`, `prefix`, `suffix`, `duration`.
- **ScrollFadeIn** — Reusable wrapper component that fades its children in when they enter the viewport. Uses IntersectionObserver + CSS transitions. Props: `delay`, `children`.
- **ProjectCard** — Displays a project with title, description, tags, and an external link. Props: `title`, `description`, `link`, `tags`.
- **ValueCard** — Displays a value with a title and elaboration paragraph. Props: `title`, `body`.
- **ChatInterface** — Embedded chat UI. Manages local message state (no persistence), sends user input to the chatbot API route, displays responses. Shows a loading state while awaiting response.

### Chatbot API Route

A Next.js API route handles chatbot requests. It receives the user's message, prepends a system prompt containing Pooja's full background (narrative, values, experience, projects, personal interests), and calls the Claude API. The system prompt instructs Claude to:
- Respond in first person as Pooja
- Keep responses crisp — 2–5 sentences unless the question warrants more
- Back claims with data where available
- For sensitive questions (salary, reasons for leaving, personal opinions on specific people/companies), deflect warmly and offer the calendar link
- Never invent facts not in the system prompt

The system prompt is static and hardcoded in the API route. No database, no conversation history beyond the current session's local state.

### Metric Counters (selected)

Key numbers to animate across the Experience and Projects sections:
- 220,000 — Instagram followers (JobCoach_KA)
- ₹50 Cr / USD 6M — funds raised (The/Nudge)
- 85% — classroom retention rate (up from 50%)
- 91% — CSAT at Groww (up from 88%)
- 50% — productivity improvement via AI audits (Groww)
- 9,000+ — students reached via Delhi Govt + BCG partnership
- 500+ — employees supported across People & Culture roles
- 70% — adoption rate of new people systems at Digantara

### Design System

- **Tone:** Warm but structured. Not clinical, not cozy.
- **Typography:** Humanist sans-serif for body, heavier weight for headlines. High readability priority.
- **Color palette:** Soft warm neutrals (off-white, warm stone, muted sage or terracotta accent). Not pure white backgrounds.
- **Spacing:** Generous — sections breathe. No cramped layouts.
- **Photo:** Pooja's professional photo in the hero. Optimised as WebP.
- **Animations:** Subtle fade-in on scroll (all sections). Animated counters on metrics. No slides, bounces, or attention-seeking effects.
- **Mobile-first:** Fully responsive. Single-column layout on small screens.

## Testing Decisions

This is a static personal website with no backend business logic beyond the chatbot API route. Testing scope is deliberately narrow.

**What makes a good test here:** Tests should verify external behavior — what a user sees and can do — not implementation details like component internals or CSS class names.

**Modules to test:**

- **AnimatedCounter:** Unit test that the counter reaches the correct target value after the animation duration, and that it does not animate before entering the viewport.
- **ChatInterface API route:** Integration test that the route returns a response given a valid message, and returns a graceful error response if the Claude API is unavailable. Test that the system prompt is always included (no user-controlled prompt injection).
- **ScrollFadeIn:** Unit test that children are initially hidden and become visible after the IntersectionObserver fires.

**Explicitly not tested:**
- Visual layout and spacing (manual review)
- External links (manual verification before launch)
- Accessibility (axe DevTools manual audit, target WCAG AA)
- Performance (Lighthouse post-deploy, target 90+ on Performance and Accessibility)

## Out of Scope

- Blog or writing section
- Dark mode
- Resume PDF download
- Persona-specific views or conditional content rendering
- Analytics or tracking (can be added post-launch)
- Multi-language support
- CMS or content editing interface
- Conversation history persistence in the chatbot (session-only)
- Voice interface for the chatbot
- Case studies with extended project writeups
- Education section

## Further Notes

**Pre-launch blockers:**
1. **Calendly / Cal.com:** Pooja needs to set up a calendar booking link before the primary CTA can go live. A `#` placeholder is used during development.
2. **Domain:** `poojalathkar.com` is the recommended domain. Should be purchased and pointed to Vercel before launch. DNS propagation takes 24–48 hours.

**The through-line to surface throughout:** Pooja nurtures things — students, employees, gardens, strays, cats, birds. This is the emotional coherence of the site. Design and copy should quietly reinforce it without stating it explicitly.

**The AI chatbot is itself the proof:** The fact that this site was built with Claude Code and the chatbot is powered by Claude API is not an easter egg — it is part of Pooja's positioning. Visitors who ask the chatbot "how was this site built?" should get an honest, proud answer.

**Holistic narrative source:** The About and Experience sections draw from Pooja's written narrative verbatim. Preserve her voice precisely — do not paraphrase or summarise.

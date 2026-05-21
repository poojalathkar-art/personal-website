# PRD: Pooja Lathkar — Personal Website (v2)

## Problem Statement

Pooja Lathkar is a senior people leader with 15+ years across education, social impact, fintech, and deep-tech. She is actively exploring her next opportunity and needs a personal website that gives recruiters, founders, and CHROs enough context to understand who she is — not just her resume, but her thinking, her edge, and her personality.

The site must work like a founder actually browses: skeptical, time-poor, scanning for signal. It must pass 5 mental gates in sequence — unusual, thinks right, credible orgs, proven impact, someone I want to meet — before asking for a call.

## Solution

A single-page personal website — warm in tone, structured in layout — that tells Pooja's story through the lens of how she thinks, not just what she's done. It features an interactive AI chatbot (Claude API) styled as a coffee-table conversation, animated metric counters, a 2x2 diagnostic framework, and a flip-card "What I Bring" section.

**Hero headline:** "What looks like a people problem is almost always a design problem."
**Subline:** "I'm Pooja Lathkar. I've spent 15 years redesigning environments to prove it."

**Tech stack:** Next.js (App Router) + Tailwind CSS, deployed on Vercel.

## User Stories

1. As a founder, I want to understand Pooja's positioning in one headline, so that I can decide in 8 seconds whether to keep reading.
2. As a founder, I want to see her diagnostic framework immediately after the headline, so that I can judge whether she thinks like I think.
3. As a visitor, I want to see which companies and sectors she's worked in at a glance, so that I can assess credibility without reading her full history.
4. As a data-driven founder, I want to see her key impact metrics animate on scroll, so that her numbers are impossible to miss.
5. As a visitor, I want to read her origin story and immediately ask her a question in the same section, so that the site feels like a conversation.
6. As a visitor, I want to understand what Pooja uniquely brings — not just her values — so that I know what makes her different from other senior people leaders.
7. As a visitor using the chatbot, I want Pooja's photo to appear with each response, so that it feels like a real conversation across a table.
8. As a visitor using the chatbot, I want responses to appear letter by letter, so that the pace feels human, not generated.
9. As a visitor using the chatbot, I want dynamic follow-up suggestions after each response, so that I don't have to think of what to ask next.
10. As a visitor, I want the chatbot window to have a warm, photographic coffee-shop background, so that the interaction feels intimate rather than transactional.
11. As a visitor, I want the chatbot to respond in 2-3 warm sentences grounded in real experience, so that it feels like Pooja talking — not AI generating.
12. As a recruiter, I want a "Download full CV" button in the experience section, so that I can get the full timeline without it cluttering the website.
13. As a visitor, I want the personal interests section to be compact, so that it adds warmth without slowing the page.
14. As a visitor, I want a single clear CTA throughout — Book a call — so that I know exactly how to reach out.
15. As Pooja, I want the site to feel warm but structured, so that it reflects both her personality and her thinking style.
16. As Pooja, I want the chatbot to never sound philosophical or use jargon, so that founders feel they're talking to a person.
17. As Pooja, I want company names never mentioned in chatbot responses, so that the conversation feels personal rather than resume-like.
18. As Pooja, I want the site to work without naming a specific target job title, so that it attracts Head of People, Head of HRBP, and Chief of Staff to CHRO roles equally.

## Implementation Decisions

### Page Flow (in scroll order)

1. **Hero** — Full viewport. Headline, subline, Book a call CTA, email fallback, professional photo.
2. **The Framework** — Bridge line: *"Here's how I think about it."* Then the 2x2 matrix (interactive, visually creative).
3. **Companies + Sectors** — Horizontal strip. 5 companies with logos and sector labels. Deep-tech · Fintech · Social Impact · Education.
4. **Impact Numbers** — Animated metric counters only. 4 key numbers. No text beyond the labels.
5. **About + Ask Pooja** — Two-column section (50/50 on desktop, stacked on mobile). Left: short origin narrative. Right: chatbot.
6. **What I Bring** — 3 flip cards. Front: differentiator title + tagline. Back: proof story (no company names). Replaces the previous Values section.
7. **Experience** — No timeline. Download CV button + 4 animated metrics only. Full career detail lives in the PDF.
8. **Projects** — ClearDesk + JobCoach_KA. Two standalone cards with live links and metrics.
9. **The Human** — Compact. Icon grid + 2-3 short sentences. No philosophical connections to work.
10. **Connect** — Book a call CTA repeated. Email. LinkedIn.

### 2x2 Framework Section

Content:
- **Good Design + Good Execution:** *"The good shit happens here."*
- **Good Design + Bad Execution:** *"Everyone nods in the meeting. Nothing moves after it."*
- **Bad Design + Good Execution:** *"Your best people are executing perfectly on the wrong things."*
- **Bad Design + Bad Execution:** *"Nobody knows who owns what. Everyone's tired."*

Design: visually creative, interactive (hover or click to highlight quadrants). Not a static table.

### What I Bring (Flip Cards)

Three cards. Front shows differentiator title. Back shows proof story without naming any company.

1. **First principles thinking** — *"When NPS wasn't moving, I didn't push harder on training. I went back to first principles — why isn't feedback reaching people at all? Fixed that. NPS followed."*
2. **Bringing order to chaos** — *"I've stepped into orgs mid-scale three times. Each time, the chaos looked different. The fix was always the same: make ownership legible, make decisions faster, make the environment clearer."*
3. **People × AI** — *"I've used AI to audit 25,000 daily customer interactions, redesign training systems, and build an HR assistant from scratch. AI doesn't replace the judgment. It removes the noise so the judgment lands better."*

### Companies Strip

5 companies, each with logo and sector label:
- Digantara — Deep-tech
- Groww — Fintech
- The/Nudge Institute — Social Impact
- Teach For India — Education
- Lead School — Education

Logos sourced from each company's public assets. If a logo is unavailable, use company name in styled typography.

### Impact Numbers (4 key metrics)

- USD 6M raised with 100% donor retention
- 91% CSAT — up from 88%
- 50% productivity boost via AI quality audits
- 85% classroom retention — up from 50%

### Chatbot Design

- Layout: Left column = About narrative. Right column = chat window.
- Background: Photographic, warm cafe/coffee table setting. File: `/public/chat-bg.jpg` (to be provided by Pooja).
- Pooja's photo appears as avatar on every assistant response.
- Typing reveal: letter-by-letter animation on each response.
- Dynamic follow-up suggestions: 3 contextual suggestions appear after each response based on what was just discussed.
- Initial suggested questions:
  - *"What's your leadership style?"*
  - *"Tell me about ClearDesk."*
  - *"How do you use AI in people ops?"*
  - *"What kind of role are you looking for?"*

### Chatbot System Prompt Rules

- Respond in first person as Pooja
- 2-3 sentences max per response
- Warm tone, no jargon, no philosophical tangents
- Ground answers in real experience without naming any company
- End most responses with a natural hook that invites a follow-up
- For sensitive questions (salary, reasons for leaving): deflect warmly, offer calendar link
- Never mention bird watching, gardening, or personal interests in a work context

### Experience Section

No timeline on the website. Contains only:
- Section heading
- 4 animated metric counters (same as Impact Numbers section — consider whether to merge or differentiate)
- "Download full CV" button → `/public/resume.pdf`

### The Human Section

Compact — maximum 6 lines visible. Icon grid of interests: swimming, gardening, cat rescue, bird watching, wildlife, Adam Grant + Brené Brown. 1-2 sentences of copy. No connections drawn between personal interests and work philosophy.

### Enter Key Bug

The chat input's Enter key currently triggers page scroll instead of message send. Must be fixed: `e.preventDefault()` on Enter within the chat input field.

## Testing Decisions

- **AnimatedCounter:** Unit test reaches correct target value; does not animate before viewport entry.
- **ScrollFadeIn:** Hidden before viewport entry, visible after.
- **Chatbot API route:** Returns response for valid message; returns graceful error if Claude API unavailable or unconfigured; rejects empty input; rejects input over 500 chars.
- **Enter key:** Pressing Enter in chat input sends message and does not scroll the page.
- **Flip cards:** Back face visible on hover (desktop); tappable on mobile.

## Out of Scope

- Blog or writing section
- Dark mode
- Resume PDF download built into site (external link only)
- Persona-specific views
- Analytics (post-launch addition)
- Multi-language support
- CMS
- Voice interface
- Education section
- Conversation history persistence in chatbot

## Pre-Launch Checklist

- [ ] Calendly / Cal.com link set up and replacing `#` placeholder
- [ ] Domain `poojalathkar.com` purchased and pointed to Vercel
- [ ] Professional photo added as `/public/pooja.jpg`
- [ ] Coffee table photo added as `/public/chat-bg.jpg`
- [ ] Resume PDF uploaded as `/public/resume.pdf`
- [ ] Company logos sourced and added to `/public/logos/`
- [ ] ANTHROPIC_API_KEY set in Vercel environment variables before deploy
- [ ] API key rotated (current key was shared in chat — generate a new one)

## Further Notes

- Never use "nonprofit" anywhere on the site — always "social impact"
- Never use "not X, but Y" contrasting sentence structure in copy
- The chatbot is itself proof of Pooja's AI-native positioning — visitors who ask "how was this built?" should get a proud, honest answer
- The 2x2 is a diagnostic framework showing how Pooja thinks, not a portfolio piece
- "What I Bring" replaces "Values" — differentiators are more founder-relevant than stated values

# CLAUDE.md - Ian V Crispi

## Brand Identity

**Ian V Crispi** - Serial Entrepreneur, Musician, Cocktail Designer & Poet

**Vision**: A fully branded indiepage/linktree that sells services.

Hub for all projects. Tells the story of:
- Building software businesses (10 in 60 days)
- 15 years in the music industry
- Poetry as a god-given gift

Philosophy: "Let no man who may work for himself, work for anyone else."

## The Four Pillars

1. **Software** - Apps and businesses (import from indiepage.ge)
2. **Music** - CrypticFlow and 15 years of industry experience
3. **Cocktails** - Cocktail design and mixology
4. **Poetry** - Original works (currently on landing, moving to dedicated page)

## External Links

- **indiepa.ge/crypticfl0w** - Project showcase (source of truth)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Motion (Framer Motion)
- **Backend**: Convex
- **Deployment**: Vercel (assumed)

## Projects

### Software Businesses
- **LightHouse** (lighthouseai.io) - AI for motherhood as invisible labor
- **SafeSolo** (safesolo.travel) - Real-time data for independent travelers
- **Godspeeds** (godspeeds.io) - SaaS template for technical founders (10 businesses in 60 days)
- **Seed** (seeded.earth) - Carbon footprint tracking & tree planting

### Music
- **CrypticFlow** (crypticflow.net) - Personal music, electronic/experimental
- **PsyberDust** (psyberdust.ai) - Label, artist network, software, visual arts

### Cocktails
- **Tips From The Bar** (tipsfromthebar.com) - Curated cocktail recipes (decade of work)

## Site Architecture

Branded linktree/indiepage hybrid with service sales.

```
app/
├── page.tsx           # Landing: Story + links to all pillars + services
├── poetry/            # Poetry collection (move current landing here)
├── software/          # Project showcase + "Build My App" service
├── music/             # CrypticFlow + PsyberDust + bookings
│   ├── dj/            # DJ bookings (disco, hip-hop, crypticflow sets)
│   └── engineer/      # Audio engineering (studio, live, rental)
└── cocktails/         # Tips From The Bar + cocktail services
```

**Landing page formula**: Brief story → Four pillars → Project links → Service CTAs

## Development Priorities

**Quality over speed.** Take time to get things right. Polish matters.

- Prioritize clean, maintainable code
- Ensure responsive design across all devices
- Optimize for performance and accessibility
- Test thoroughly before shipping

## Workflow Orchestration

### 1. Plan Mode Default
- Enter Plan Mode for any non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately - don't keep pushing
- Use Plan Mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Sub-agent Strategy
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistakes
- Ruthlessly iterate on these lessons until the mistake rate drops
- Review lessons at session start for relevant project

### 4. Verify Before Completion
- Never mark a task complete without verification
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a senior engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)
- For non-trivial changes: Pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes - don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing
- When given a bug report: fix it, don't ask for hand-holding
- Point at logs, errors, failing tests - then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

## Task Management

1. **Plan First**: Write plan to `tasks/todo.md` with checkable items
2. **Verify Plan**: Check before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at completion
5. **Review Steps**: Add review section to `tasks/todo.md`
6. **Capture Lessons**: Update `tasks/lessons.md` after corrections

## Core Principles

**Simplicity First**: Make every change as minimal as possible. Impact minimal code.

**No Laziness**: Find root causes. No temporary fixes. Senior developer standards.

**Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.

## Code Conventions

- Use TypeScript strictly
- Follow Next.js App Router patterns
- Keep components modular and reusable
- Use Tailwind utility classes; avoid custom CSS unless necessary
- Prefer server components where possible
- Use Motion for micro-interactions and page transitions

## When Working on This Project

1. Understand the context before making changes
2. Consider impact on all four business goals
3. Maintain brand consistency across services
4. Ensure booking flows are frictionless
5. Keep the creative/artistic aesthetic intact

# Lessons Learned

Patterns and rules to prevent repeated mistakes.

---

## Template

### [Date] - Issue Description
**What went wrong**:
**Root cause**:
**Rule to prevent**:

---

<!-- Add lessons below -->

## Poetry: the psychedelic overlay is the brand
**Correction (2026-07-26)**: When poems looked "unreadable," I proposed rendering the text as typography. Ian: the psychedelic kaleidoscope overlay is **non-negotiable — it's the brand**. The poems are meant to be art pieces, not read line-by-line.
**Rule to prevent**: Do not treat washed-out text in Ian's art as a defect to "fix." Keep the visual treatment; only adjust presentation (size, spacing, layout). "Bigger without spilling over the sides" = responsive `w-full h-auto` capped by a `max-w-*`, never fixed pixel widths.

## Poems are static, not from Convex
The poems live in `app/data/poems.ts` (static). The old Convex path was the cause of the blank /poetry page — the site read deployment `fearless-goldfinch-23` while data was seeded into `whimsical-corgi-575`. Don't reintroduce a runtime DB fetch for the poem gallery.

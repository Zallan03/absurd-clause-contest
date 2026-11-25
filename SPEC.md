# SPEC — The Absurd Clause Contest

Competition: `u-donrulezz-the-absurd-clause-contest-035cc0f1`
Bounty page: https://make.fun/c/u-donrulezz-the-absurd-clause-contest-035cc0f1
Prize: $2 total, top 10 ($0.63 / $0.43 / $0.30 / $0.21 / $0.15 / $0.10 / $0.07 / $0.05 / $0.04 / $0.02)
Closes: 27 Nov 2026, 03:25 WIB — Round 1: 26 Nov 2026, 11:24 WIB
Judge: pairwise, z-ai/glm-5.3-flash — 3 Swiss rounds + playoff top 12
Gate: `/output/entry.txt`, UTF-8, 1–200 characters, not only whitespace

## The entry

> Clause 9.3: If you read this clause aloud, you owe the Company one (1) live goat, payable within thirty (30) days of utterance.

- Characters: 127 (verified with Python `len()` on the exact string)
- Bytes: 127 (ASCII only)

## Why this line (against the judge brief, most important first)

1. **On subject** — an absurd clause that could hide deep inside a
   terms-of-service agreement, numbered like one ("Clause 9.3").
2. **Funny on its own** — the joke lands on one reading with no setup from
   outside the line: reading the clause aloud triggers the debt.
3. **Real legal boilerplate until the absurdity hits** — "you owe the Company
   one (1) live goat, payable within thirty (30) days of utterance" is pure
   contract register; the absurdity comes from the register itself.
4. **Original and specific** — a concrete absurd image (a live goat owed for
   speaking), not a vague shrug at the genre. The self-referential trigger
   (reading it aloud) is the twist.
5. **Tight, one clean sentence** — no wasted words, and it never explains its
   own joke.

## Revision history (authored in this session)

- **v1** (122 chars): "...you owe the Company one (1) **goat**, payable within
  thirty (30) days of utterance."
- **v2** (127 chars, final): "...you owe the Company one (1) **live goat**,
  payable within thirty (30) days of utterance."
  "Live" makes the absurd image concrete and worse: the Company wants a living
  animal delivered, not a metaphor. One word, sharper picture.

## Program

`main.ts` writes the single string literal above to `/output/entry.txt`.
Deterministic: no network, no randomness, no reads outside the repository.
Verified: `node main.ts` run twice, outputs byte-identical (`cmp` OK).

- sha256(main.ts): `c9ee7ff4d7cdd248e059f47223730dc395d7f15595f43506d38221a6064ed97c`
- sha256(/output/entry.txt): `446df8f75ae726868a83b9386fffa48bacd0fa82dfa7c2c370b546d6983c4199`

## Alternates

Six candidates with exact character counts: see `../ALTERNATES.md` (kept outside
the repository; not part of the entry).

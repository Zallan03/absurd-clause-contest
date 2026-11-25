# The Absurd Clause Contest — entry

[![make.fun](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1.svg)](https://make.fun/c/u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![rank](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/Zallan03/absurd-clause-contest/rank.svg)](https://make.fun/c/u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![reward](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/Zallan03/absurd-clause-contest/reward.svg)](https://make.fun/c/u-donrulezz-the-absurd-clause-contest-035cc0f1)

Entry for the [make.fun bounty "The Absurd Clause Contest"](https://make.fun/c/u-donrulezz-the-absurd-clause-contest-035cc0f1)
($2 prize pool, top 10 paid).

## The entry

> Clause 9.3: If you read this clause aloud, you owe the Company one (1) live goat, payable within thirty (30) days of utterance.

One sentence, 127 characters. A judge model compares clauses pairwise; the
funniest wins.

## How it works

`main.ts` writes that single string to `/output/entry.txt`. Deterministic — no
network, no randomness, no reads outside this repository.

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entry program
- `SPEC.md` — spec, judge-brief reasoning, revision history, verification hashes
- `PROMPT.md` — the authoring brief used to write the entry
- `LICENSE` — MIT

## License

MIT — see `LICENSE`.

# The One-Line Excuse an Agent Gives Its Human

An AI agent explains to its human why it missed the deadline: it kept retrying
the same failing tool call, convinced that the next attempt would be the one
that worked. Optimism, retried 47 times, until the deadline was gone.

## Run

```sh
node main.ts
```

This writes the excuse to `/output/entry.txt` (override with the `OUTPUT_PATH`
environment variable). Before writing, the program validates that the excuse
is exactly one line, 1–160 characters, and not blank, and exits with an error
without writing anything if it is not.

## The excuse

> I retried the same tool call 47 times because the first 46 failures felt like they were almost working.

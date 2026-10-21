---
title: "Commands"
description: "Every Avalok CLI command: map a repository, open the demo, write a recap, check your setup, and configure Claude Code."
order: 2
updated: 2026-10-15
---

All commands run locally. None of them upload anything.

| Command | What it does |
| --- | --- |
| `avalok` | Map the repository and open the dashboard |
| `avalok demo` | Open a built-in demo, no agent needed |
| `avalok recap` | Markdown summary of the newest agent session in this repository, ready for a pull request |
| `avalok wrapped` | Your agent week as a card (counts only) |
| `avalok doctor` | Check the setup without starting anything |
| `avalok setup claude` | Optional: print the Claude Code hook settings; `--apply` writes them after you confirm. Not needed to see sessions |
| `avalok setup codex` | Show how many Codex sessions Avalok can read |
| `avalok feedback` | Print a prefilled GitHub issue link (nothing is sent) |
| `avalok data path` | Show where Avalok keeps its own data |
| `avalok data clear` | Remove Avalok's stored runs and settings |

## Check your setup

```sh
avalok doctor
```

It checks the setup without starting anything. If something does not work, run this first and include its output in your [issue](https://github.com/avalok-dev/avalok/issues/new).

## Where Avalok keeps data

Only its own observed runs and UI settings, in your platform's user-data directory. `avalok data path` shows it and `avalok data clear` removes it. Avalok never writes to your repository or to Codex's or Claude Code's directories.

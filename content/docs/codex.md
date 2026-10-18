---
title: "Codex"
description: "Avalok reads local Codex session files read-only and replays or follows them live. No setup required."
order: 4
updated: 2026-10-15
---

There is nothing to set up for Codex. Avalok discovers session files in `~/.codex/sessions` (or `$CODEX_HOME`), replays them, and follows active sessions live.

## What Avalok shows

Commands, file changes, MCP calls, model responses and errors from the Codex session, placed on your repository's architecture map.

## What Avalok never does

- It never writes to Codex's directory. Access is read-only.
- It never reconstructs hidden reasoning.
- It never sends session content anywhere.

## Check that it works

```sh
avalok setup codex
```

This shows how many Codex sessions Avalok can read. Then run `npx avalok` in the repository where Codex ran, and the session opens straight away.

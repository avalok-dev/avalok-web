---
title: "Claude Code"
description: "Avalok reads local Claude Code session files read-only and follows them live. No setup required; hooks and OpenTelemetry are optional extras."
order: 3
updated: 2026-10-15
---

There is nothing to set up for Claude Code. Avalok discovers the session files Claude Code already writes to `~/.claude/projects` (or `$CLAUDE_CONFIG_DIR`), replays them, and follows running sessions live.

Run `npx avalok` in your repository, start `claude` in the same folder, and the session appears in the source picker and under **Live**. Sessions started in a parent folder of your repository are listed too.

## What Avalok never does

- It never writes to Claude Code's directory. Access is read-only.
- It never reconstructs hidden reasoning.
- It never sends session content anywhere.

## Optional: hooks

Hooks push events to Avalok the instant they happen. You do not need them to see sessions. They are opt-in.

Run this once in your project. It prints the exact settings and writes nothing:

```sh
avalok setup claude
```

To add them to the project's `.claude/settings.local.json`, run it with `--apply`. Avalok asks you to confirm, and backs up an existing file first:

```sh
avalok setup claude --apply
```

To undo it:

```sh
avalok setup claude --remove
```

You can also add `"type": "http"` hooks yourself, pointing at `http://127.0.0.1:4318/v1/claude/hooks`.

## Optional: OpenTelemetry traces

Launch Claude Code with telemetry pointed at the local receiver:

```sh
export CLAUDE_CODE_ENABLE_TELEMETRY=1
export OTEL_TRACES_EXPORTER=otlp
export OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=http://127.0.0.1:4318/v1/traces
claude
```

See [OpenTelemetry](/docs/opentelemetry/) for the protocol details.

## What you see

Commands, file changes, tool and model activity and errors from the Claude Code session, replayed on the same canvas as your architecture. Avalok shows only what Claude Code reports; it does not reconstruct hidden reasoning.

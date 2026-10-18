---
title: "Claude Code"
description: "Connect Claude Code to Avalok with opt-in hooks or OpenTelemetry traces. Observational only; Avalok never blocks or changes what Claude Code does."
order: 3
updated: 2026-10-15
---

Avalok observes Claude Code through two supported interfaces, both opt-in.

## Option 1: hooks

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

## Option 2: OpenTelemetry traces

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

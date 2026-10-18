---
title: "Get started"
description: "Install Avalok with npx, open the dashboard in your repository, and see what your coding agent did to your architecture."
order: 1
updated: 2026-10-15
---

Avalok runs on your machine. Installing it takes one command, and connecting an agent takes at most one more.

## Install

Avalok requires **Node.js 22.12 or newer**. Run it inside the repository you want to look at:

```sh
npx avalok
```

It maps the repository, starts a dashboard at `http://127.0.0.1:4737` and a local receiver at `http://127.0.0.1:4318`, and opens your browser. Press Ctrl+C to stop.

No agent handy? Open the built-in demo:

```sh
npx avalok demo
```

## What you see

- **Map.** Services, datastores and infrastructure detected from your source and configuration. Every element shows its evidence and a confidence level.
- **Live and Runs.** What your coding agent did: files touched, commands run, model and tool calls, and errors, on a timeline you can scrub.
- **Share.** A recap card, an interactive replay, an architecture diagram, or a Markdown block for your pull request. See [Share a recap](/docs/recaps/).

## Connect an agent

- **Codex** needs no setup. See [Codex](/docs/codex/).
- **Claude Code** needs no setup either. See [Claude Code](/docs/claude-code/).
- **Anything with OpenTelemetry** can send traces to the local receiver. See [OpenTelemetry](/docs/opentelemetry/).

## Current version

Avalok is a developer preview (`0.1.0-alpha.1`). Interfaces and data formats may change between alpha releases. See the [changelog](/changelog/) and [limits](/docs/limits/).

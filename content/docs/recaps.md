---
title: "Share a recap"
description: "Turn an agent session into a recap card, an interactive HTML replay, an architecture diagram or a Markdown block for a pull request. Generated locally, previewed before you share."
order: 6
updated: 2026-10-15
---

Everything here is generated on your machine from local data. You review it before sharing, and nothing is uploaded.

## In the dashboard

The **Share** button opens a preview with a recap card (SVG or PNG), an interactive replay (one HTML file anyone can open in a browser), the architecture diagram, and a Markdown summary.

## From the terminal

```sh
avalok recap                                  # Markdown for a pull request
avalok recap --format svg                     # recap card   -> avalok-recap.svg
avalok recap --format html                    # interactive replay -> avalok-replay.html
avalok recap --format diagram --out docs/architecture.svg
avalok wrapped                                # your agent week as a card (counts only)
```

`recap` picks the newest session that ran in this repository, whichever agent it came from. OpenTelemetry traces usually record no folder, so name one with `--session <id>`.

## Options

- `--anonymize` replaces names with generic labels.
- `--no-brand` drops the "Made with Avalok" footer.
- `--force` overwrites an existing file.

## What is never included

Prompts, run titles, commands and file paths are never included, and secret-looking values are hidden. Names of system parts are included by default, so read the preview. Counts only cover steps Avalok actually observed; anything it could not observe, such as cost, is listed as not observed rather than estimated.

---
title: "Limits"
description: "What Avalok does not do: supported languages, static infrastructure analysis, OpenTelemetry coverage and developer-preview caveats."
order: 7
updated: 2026-10-15
---

Avalok reports what it detected, observed and inferred, with evidence. It does not claim to understand your whole system.

## Developer preview

Interfaces and data formats may change between `0.1.0-alpha` releases. Only the latest alpha receives fixes.

## Languages

Deep static analysis covers JavaScript and TypeScript, and Python. Go, Java, Kotlin, Rust, Ruby, PHP, C#, Swift, C and C++ are inventoried (files counted and grouped) but not parsed. Static inference cannot resolve every computed import, route or URL.

## Infrastructure

Terraform, Kubernetes, Helm, Docker and Compose files are parsed as data. This is **configured** architecture, not live state:

- No connection to AWS APIs, Kubernetes clusters, CloudWatch, Prometheus or cost services.
- It never runs `terraform`, `helm`, `kubectl` or cloud CLIs, and never reads `.tfvars` or Terraform state.
- It does not evaluate Terraform expressions, modules, `count` or `for_each`, or Helm control flow.
- Kubernetes Secret and secret-like values are discarded.

## Runtime

OTLP over HTTP traces only. No gRPC, metrics or logs.

## Other

- One repository per run; use Rescan after changes. There is no repository watcher.
- Requires Node.js 22.12 or newer. Installed size is about 67 MB (measured on macOS arm64).

Something missing or wrong? [Open an issue](https://github.com/avalok-dev/avalok/issues/new).

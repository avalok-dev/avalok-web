---
title: "OpenTelemetry"
description: "Send OTLP/HTTP traces, protobuf or JSON, from any app or agent to Avalok's local receiver. No Collector needed. OpenInference and GenAI spans are shown as agent activity."
order: 5
updated: 2026-10-15
---

Point any OTLP/HTTP trace exporter at the local receiver. No OpenTelemetry Collector is needed.

## Configure the exporter

```sh
export OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=http://127.0.0.1:4318/v1/traces
export OTEL_EXPORTER_OTLP_TRACES_PROTOCOL=http/protobuf   # or http/json
```

The standard Python exporter, `opentelemetry-exporter-otlp-proto-http`, works as it is.

## Send a test trace

In the dashboard, open **Setup**, then **OpenTelemetry setup**, then **Send Test Trace**. It sends a clearly labeled synthetic trace so you can confirm the path works.

## What is shown as agent activity

Avalok understands OpenInference and GenAI semantic conventions for agent, chain, LLM, tool, retriever and embedding spans. Generic HTTP and database spans stay generic; only spans with those semantics appear as agent activity.

## Supported

- OTLP over HTTP, protobuf and JSON.
- Traces only.

## Not supported

- OTLP over gRPC.
- Metrics and logs.

The receiver binds to `127.0.0.1` only, so traces never leave your machine.

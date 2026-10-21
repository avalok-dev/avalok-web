export const faq: [string, string][] = [
  ["Does anything leave my machine?", "No. The Avalok tool has no cloud service, account, analytics, crash reporting or update check. It analyses your repository without executing it, uploading source or calling an LLM."],
  ["Which agents does it support?", "Codex and Claude Code, both through their own local session files with no setup (read-only). Kiro and Cursor are on the roadmap. Any OTLP/HTTP trace source works too."],
  ["What does it need?", "Node.js 22.12 or newer. Then run npx avalok in a repository."],
  ["Is it free?", "Yes. The code is Apache-2.0. A hosted or team tier may exist someday as a separate product and would not change what the local edition does."],
  ["Does it understand my whole system?", "No, and it does not claim to. It reports what it detected, observed or inferred, with evidence. Deep analysis covers TypeScript and Python; other languages are inventoried."],
];

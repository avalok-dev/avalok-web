// Single switch for release-dependent copy. Flip to true only after
// `npx avalok@latest --version` prints the real version from a clean directory.
export const npmPublished = false;

export const site = {
  name: "Avalok",
  tagline: "See your whole system.",
  description:
    "Avalok is a local-first dashboard that maps your repository's architecture and shows what your coding agent actually did to it. No account, nothing leaves your machine.",
  url: "https://avalok.dev",
  github: "https://github.com/avalok-dev/avalok",
  issues: "https://github.com/avalok-dev/avalok/issues/new",
  version: "0.1.0-alpha.1",
};

# DynamicsCrm.DevKit AI guidance

This directory contains AI-client-neutral project rules and workflows.

- `rules/` contains focused rules that should be read only when relevant to the task or explicitly requested.
- `workflows/` contains executable project recipes for builds, tests, coverage, client-code synchronization, and commits.

`AGENTS.md` at the repository root is the canonical always-on instruction file. `CLAUDE.md` and `.github/copilot-instructions.md` are compatibility bridges and must not duplicate these documents.

Client-specific configuration belongs outside this directory:

- `.codex/` for Codex configuration;
- `.vscode/` for VS Code configuration;
- `.zcode/` for Z configuration;
- `.mcp.json` for Claude MCP configuration.

Never store credentials, tokens, client secrets, or personal configuration in this directory.

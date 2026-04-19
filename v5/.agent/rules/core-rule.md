# Antigravity IDE Overrides

> Primary context: `AGENTS.md` (read that first). This file contains only IDE-specific overrides for the Antigravity assistant.

## IDE-Specific Command Prefixes

When `AGENTS.md` instructs you to use a workflow like `/*-build-cli` or `/*-commit`, you MUST use the `anti-` prefix because you are running in Antigravity IDE.

- Build Analyzers: `/anti-build-analyzer`
- Build CLI: `/anti-build-cli`
- Build Tool: `/anti-build-tool`
- Build VSIX: `/anti-build-vsix`
- Build All Debug: `/anti-build-debug`
- Build All Release: `/anti-build-release`
- Run Tests: `/anti-unit-test`
- Commit code: `/anti-commit`

## IDE-Specific Forbidden Actions

> [!CAUTION]
> - NEVER run `/claude-*` workflows. Those are for Claude Code only.
> - NEVER run `/copilot-*` workflows. Those are for GitHub Copilot only.
> - NEVER use raw Git (`git add`, `git commit`, `git push`) locally — **strictly** use the `/anti-commit` workflow.

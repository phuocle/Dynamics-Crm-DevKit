# Core Project Rules

Apply this rule only when the user explicitly points Codex to this file.

Read the repository root `AGENTS.md` first. It defines component boundaries, architecture, conventions, and the current Codex-only support model.

## Core workflows

The 13 executable project recipes are stored in `.codex/workflows/`. When the user names a workflow, read its file completely before executing it.

| Request | Workflow |
|---|---|
| Build Analyzer | `.codex/workflows/build-analyzer.md` |
| Build CLI | `.codex/workflows/build-cli.md` |
| Build Tool | `.codex/workflows/build-tool.md` |
| Build VSIX | `.codex/workflows/build-vsix.md` |
| Full timestamped build | `.codex/workflows/build-debug.md` |
| Full configured release | `.codex/workflows/build-release.md` |
| Unit tests plus Analyzer coverage | `.codex/workflows/unit-test.md` |
| Client-code clean/install/generate/sync/test | `.codex/workflows/client-code-01-clean.md` through `.codex/workflows/client-code-05-test.md` |
| Commit | `.codex/workflows/commit.md` |

## Safety and scope

- Run the smallest build that covers the changed component.
- Never run full debug or release packaging unless the user explicitly requests that workflow.
- Never stage, commit, or push unless the user explicitly requests it.
- Preserve unrelated working-tree changes.
- Never use `git add .` or `git add -A`.
- `4.44.44.44` is the stable source version. Build scripts may replace only `xxxx.yy.zz HH.mm.ss`; verify that placeholder is restored afterward.

## MCP changes

After editing `DynamicsCrm.DevKit.Cli/Mcp/**`:

1. Execute `.codex/workflows/build-cli.md`.
2. Restart the Codex MCP connector.
3. Call `whoami` to start a fresh `devkit mcp devkit-codex` process.
4. Verify version, build timestamp, process start time, assembly path, and SHA against the build manifest in `Published/<version>/`.

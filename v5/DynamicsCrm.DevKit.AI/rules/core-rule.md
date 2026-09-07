# Core Project Rules

Apply this rule only when the user explicitly points to this file.

Read the repository root `AGENTS.md` first. It defines component boundaries, architecture, conventions, and supported AI-client behavior.

## Core workflows

The executable project recipes are stored in `DynamicsCrm.DevKit.AI/workflows/`. When the user names a workflow, read its file completely before executing it.

| Request | Workflow |
|---|---|
| Build Analyzer | `DynamicsCrm.DevKit.AI/workflows/build-analyzer.md` |
| Build CLI | `DynamicsCrm.DevKit.AI/workflows/build-cli.md` |
| Build Tool | `DynamicsCrm.DevKit.AI/workflows/build-tool.md` |
| Build VSIX | `DynamicsCrm.DevKit.AI/workflows/build-vsix.md` |
| Full timestamped build | `DynamicsCrm.DevKit.AI/workflows/build-debug.md` |
| Full configured release | `DynamicsCrm.DevKit.AI/workflows/build-release.md` |
| Unit tests plus Analyzer coverage | `DynamicsCrm.DevKit.AI/workflows/unit-test.md` |
| Client-code clean/install/generate/sync/test | `DynamicsCrm.DevKit.AI/workflows/client-code-01-clean.md` through `client-code-05-test.md` |
| Commit | `DynamicsCrm.DevKit.AI/workflows/commit.md` |

## Safety and scope

- Run the smallest build that covers the changed component.
- Never run full debug or release packaging unless the user explicitly requests that workflow.
- Never stage, commit, or push unless the user explicitly requests it.
- Preserve unrelated working-tree changes.
- Never use `git add .` or `git add -A`.
- `4.44.44.44` is the stable source version. Build scripts may replace only `xxxx.yy.zz HH.mm.ss`; verify that placeholder is restored afterward.

## MCP changes

After editing `DynamicsCrm.DevKit.Cli/Mcp/**`:

1. Execute `DynamicsCrm.DevKit.AI/workflows/build-cli.md`.
2. Restart the active MCP client connector.
3. Call `whoami` to start a fresh DevKit MCP process.
4. Verify version, build timestamp, process start time, assembly path, and SHA against the build manifest in `Published/<version>/`.

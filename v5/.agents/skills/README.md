# DynamicsCrm.DevKit Agent Skills

Executable recipes for AI agents, written as cross-tool skills. This folder
is the **single source of truth** for every build, test, coverage, release,
client-code, and commit workflow in the repository.

## Discovery

The folder name `.agents/skills/` is the cross-tool standard — these tools
all discover the skills here with no per-tool copies:

| Tool | Reads this folder |
|---|---|
| ZCode | yes (`<project>/.agents/skills/`) |
| Codex / ChatGPT app | yes (repo-level `.agents/skills/`) |
| Google Antigravity | yes (`.agents/skills/`, default path) |
| Claude Code | no — reads `.claude/skills/`; copy a skill there to use it |

`agents/openai.yaml` inside a skill folder is optional Codex-app UI metadata
(display name, short description); every other tool ignores it.

## Skills

| Skill | Task | Runs |
|---|---|---|
| `devkit-skill-build-analyzer` | Build + analyzer test/coverage; analyzer development rules in `references/` | `dotnet build`, `Run-Analyzer-Coverage.ps1` |
| `devkit-skill-build-cli` | Build, pack, install `devkit` CLI | `Release.DynamicsCrm.DevKit.Cli.ps1` |
| `devkit-skill-build-tool` | Build, pack, install `devkit-tool` | `Release.DynamicsCrm.DevKit.Tool.ps1` |
| `devkit-skill-build-vsix` | Build the VS 2026 VSIX | VS MSBuild (no script) |
| `devkit-skill-build-release` | Full configured release + verification | `Release-DynamicsCrm-DevKit.ps1` |
| `devkit-skill-build-release-only` | Fast timestamped release (current-date stamp), no tests/coverage | `Release-DynamicsCrm-DevKit-CurrentDate.ps1` |
| `devkit-skill-build-release-2019` | Visual Studio 2019 VSIX release | `Release-DynamicsCrm-DevKit-2019.ps1` |
| `devkit-skill-unit-test` | Unit tests, pass/fail and timings | `dotnet test` / `vstest.console` |
| `devkit-skill-code-coverage` | JS suites + five C# suites + combined report | `06.Unit-Test-Fast.ps1`, `Run-Coverage.ps1` |
| `devkit-skill-client-code` | TestClientCode pipeline (clean/install/generate/sync/test); rules in `references/` | `01`–`05` scripts in `TestClientCode/` |
| `devkit-skill-commit` | Prepare and create local commits | git |
| `devkit-skill-shared` | Home of the shared scripts + release config (no workflow of its own) | — |

## Shared assets — one copy only

`devkit-skill-shared/scripts/` owns every shared PowerShell script and
`DevKit.ReleaseConfig.json`. Skills reference them by path
(`.agents/skills/devkit-skill-shared/scripts/<script>.ps1`) and **never
duplicate them**. The scripts anchor all repo paths via `$PSScriptRoot`
(four levels up to the `v5` root), so they run from any working directory.

- `DevKit.ReleaseConfig.json` — version `4.44.44.44`, date placeholder
  `xxxx.yy.zz HH.mm.ss`, `dateReplacement` list, annual release date.
- Release: `Release-DynamicsCrm-DevKit.ps1`, `-CurrentDate`, `-2019`,
  `Release.DynamicsCrm.DevKit.Cli.ps1`, `Release.DynamicsCrm.DevKit.Tool.ps1`.
- Coverage: `Run-Coverage.ps1`, `Run-Analyzer-Coverage.ps1`.
- Utilities: `Change-Version.ps1`, `Clean-Repository.ps1`,
  `RestoreReplacedFiles.ps1`, `Test-McpToolTryCatch.ps1`,
  `Update-Wiki-Map.ps1`.

## Conventions

- Skill folder name = skill `name` (kebab-case, `devkit-skill-` prefix).
- The SKILL.md frontmatter `description` is the trigger: it states both what
  the skill does and when to reach for it.
- Domain rules that are too long for a SKILL.md live in the skill's
  `references/` folder and are read on demand.
- `AGENTS.md` at the repository root stays the always-on guidance and points
  here; `CLAUDE.md` and `.github/copilot-instructions.md` remain thin bridges.
- Never commit credentials or local configuration; the commit rules live in
  `devkit-skill-commit`.

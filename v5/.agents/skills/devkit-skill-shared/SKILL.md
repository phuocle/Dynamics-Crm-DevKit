---
name: devkit-skill-shared
description: Shared build, release, coverage and maintenance scripts plus DevKit.ReleaseConfig.json for the DynamicsCrm.DevKit repository — the single home every other devkit skill references. Use when a devkit skill points here, when running a utility script directly (version change, repository clean, placeholder restore, MCP tool audit, wiki map), or when editing the shared scripts themselves.
---

# DevKit Skill Shared

Home of the repository's executable PowerShell tooling. All paths below are
relative to the `v5` project root; every script anchors its own paths via
`$PSScriptRoot`, so they work from any working directory unless noted.
Other devkit skills invoke these scripts by path — never copy them.

## Release config

- `scripts/DevKit.ReleaseConfig.json` — single source of truth for the stable
  version (`4.44.44.44`), the date placeholder (`xxxx.yy.zz HH.mm.ss`), every
  `files.dateReplacement` entry, and the annual release build date
  (31.12.2026 23:59:59). Read it to learn the version or the placeholder list;
  only `Change-Version.ps1` may change the version.

## Release scripts

| Script | Purpose | Used by |
|---|---|---|
| `scripts/Release-DynamicsCrm-DevKit.ps1` | Full configured release of the four Analyzer/CLI/Tool/VSIX artifacts with annual build date; replaces and restores date placeholders in `finally` | devkit-skill-build-release, devkit-skill-build-release-only |
| `scripts/Release-DynamicsCrm-DevKit-CurrentDate.ps1` | Same release but stamps the current date instead of the annual one | devkit-skill-build-debug |
| `scripts/Release-DynamicsCrm-DevKit-2019.ps1` | Visual Studio 2019 VSIX release | devkit-skill-build-release-2019 |
| `scripts/Release.DynamicsCrm.DevKit.Cli.ps1` | Build, pack and install only the `devkit` CLI | devkit-skill-build-cli |
| `scripts/Release.DynamicsCrm.DevKit.Tool.ps1` | Build, pack and install only `devkit-tool` | devkit-skill-build-tool |

## Coverage scripts

| Script | Purpose | Used by |
|---|---|---|
| `scripts/Run-Coverage.ps1` | Build, test and collect line/branch/method coverage for the five `*.UnitTests` projects (or `-Components` subset); prints pass/fail and per-assembly numbers; writes `Published/<version>/CoverageReport.md` | devkit-skill-code-coverage |
| `scripts/Run-Analyzer-Coverage.ps1` | Analyzer build + unit tests + coverage in one pass | devkit-skill-build-analyzer |

## Utility scripts (no owning workflow)

- `scripts/Change-Version.ps1` — replaces the version everywhere and updates
  `DevKit.ReleaseConfig.json`; the only sanctioned way to change `4.44.44.44`.
- `scripts/Clean-Repository.ps1` — removes build output, packages and
  extracted artifacts while protecting the configured version's `Published`
  folder.
- `scripts/RestoreReplacedFiles.ps1` — restores the `dateReplacement` files
  from git when a build died before its `finally` block ran.
- `scripts/Test-McpToolTryCatch.ps1` — audits the try/catch contract of every
  MCP tool file under `DynamicsCrm.DevKit.Cli/Mcp/Tools/`.
- `scripts/Update-Wiki-Map.ps1` — regenerates `DynamicsCrm.DevKit.Wiki/Wiki-Map.md`
  from the wiki pages (run with no arguments; pass `-WikiPath` to override).

## Rules for changes

- These scripts are executable product tooling: after editing any of them,
  run the smallest real invocation that covers the change and verify the
  exit code plus its printed verification output.
- Keep the stable version and placeholder strings intact; a build that died
  mid-run can leave real timestamps behind — restore with
  `RestoreReplacedFiles.ps1` (or `git checkout`) before any commit.

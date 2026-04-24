# Step 6 - Dependency Pinning And Warning Suppression Audit

Priority: P2

Parallelization: can be assigned to a dedicated agent. Coordinate if other agents are editing the same `.csproj`.

## Goal

Make builds more reproducible by removing wildcard package versions and documenting or reducing broad warning suppressions.

## Ownership

Primary files:

- `DynamicsCrm.DevKit/DynamicsCrm.DevKit.csproj`
- `DynamicsCrm.DevKit.Tool/DynamicsCrm.DevKit.Tool.csproj`
- `DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj`
- `DynamicsCrm.DevKit.Analyzers/DynamicsCrm.DevKit.Analyzers.csproj`
- `NuGet.config`
- `packages.config` files if touched

Avoid touching:

- Source code behavior unless package upgrade requires compile fix.
- Generated templates unless they contain package versions that are part of the chosen scope.

## Current Risks

- `Version="*"` makes dependency resolution time-dependent.
- Broad `NoWarn` entries can hide real package/security/build issues.
- Local NuGet source under `Published\...` may confuse clean clones.

## Detailed Tasks

### 6.1 Inventory Package Versions

```powershell
rg -n "Version=\"\*\"|PackageReference|packages\.config|NoWarn|Published\\\\" *.csproj */*.csproj */*/packages.config NuGet.config
```

Create a table:

| File | Package/Warning | Current | Proposed | Reason |
|---|---|---|---|---|

### 6.2 Pin Wildcard Versions

For each `Version="*"`:

- Determine currently resolved version from lock/build output if available.
- If no lock exists, choose the latest known-compatible version already used elsewhere in repo or documented release version.
- Avoid large upgrades in the same change. Pin first, upgrade later.

Recommended approach:

- Replace wildcards with specific versions currently intended by project owners.
- Do not introduce `Directory.Packages.props` in the same change unless owner wants a larger dependency management refactor.

### 6.3 Audit `NoWarn`

For each `NoWarn`:

- Determine whether it is still needed.
- Keep only with a short XML comment if warning is intentional and long-term.
- Remove if obsolete.

Be careful:

- Removing warnings can surface many unrelated issues. Prefer small, project-by-project changes.

### 6.4 Review `NuGet.config`

Expected:

- Keep nuget.org.
- If local `Published\...` source is required for release workflow, document it.
- If it is stale and breaks restore for clean machines, remove or disable it after owner confirmation.

## Verification

```powershell
rg -n "Version=\"\*\"" *.csproj */*.csproj
rg -n "NoWarn|Published\\\\" *.csproj */*.csproj NuGet.config
```

Expected:

- No production project has wildcard package version.
- Remaining warning suppressions are intentional.

## Workflows

Run only workflows for projects touched:

- CLI project: `/build-cli`
- VSIX project: `/build-vsix`
- Tool project: `/build-tool`
- Analyzer project: `/build-analyzer`
- Tests impacted: `/unit-test`

## Done Criteria

- Wildcard package versions are pinned.
- Remaining `NoWarn` entries are justified or tracked for later.
- NuGet local source is either documented or cleaned up.

## Suggested Agent Prompt

```text
You own Step 6 Dependency Pinning And Warning Suppression Audit. Remove wildcard package versions conservatively, audit NoWarn entries, and avoid behavior changes. Do not run dotnet build/test directly; use only relevant repo workflows. Report package versions chosen, warnings kept/removed, and residual risks.
```


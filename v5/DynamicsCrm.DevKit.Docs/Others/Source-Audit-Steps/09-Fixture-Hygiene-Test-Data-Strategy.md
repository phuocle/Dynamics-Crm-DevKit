# Step 9 - Fixture Hygiene And Test Data Strategy

Priority: P2

Parallelization: run after Step 1. Can be split by fixture group, but do not edit the same fixture trees in parallel.

## Goal

Keep useful test coverage while reducing repo bloat, live-org coupling, and unclear binary fixture risk.

## Ownership

Primary areas:

- `DynamicsCrm.DevKit.Tests/**`
- `DynamicsCrm.DevKit.UnitTests/**`
- `ProjectTemplates/**`
- `ItemTemplates/**`

Avoid touching:

- Credential values before Step 1 is complete.
- Template behavior unless a test fixture proves it is generated output that should be updated.

## Fixture Categories

Classify files into:

| Category | Keep? | Action |
|---|---|---|
| Golden source fixture | Yes | Keep small, sanitized, reviewed |
| Generated output snapshot | Maybe | Keep only if it catches regressions |
| Live Dataverse export | Maybe | Sanitize and document environment assumptions |
| Binary fixture | Maybe | Document source and test-only status |
| Build artifact | No | Remove from tracking if reproducible |

## Detailed Tasks

### 9.1 Inventory Fixture Types

```powershell
Get-ChildItem .\DynamicsCrm.DevKit.Tests -Recurse -File | Group-Object Extension | Sort-Object Count -Descending | Select-Object -First 30 Count,Name
Get-ChildItem .\DynamicsCrm.DevKit.UnitTests -Recurse -File | Group-Object Extension | Sort-Object Count -Descending | Select-Object -First 30 Count,Name
```

### 9.2 Identify Live-Looking Data

```powershell
rg -n "crm[0-9]?\.dynamics\.com|clientsecret|password|tenant|organization|businessunit|systemuser" DynamicsCrm.DevKit.Tests DynamicsCrm.DevKit.UnitTests
```

Expected:

- All live-looking data should already be sanitized by Step 1.
- Remaining IDs/names should be necessary for deterministic tests.

### 9.3 Identify Generated Outputs

Look for:

- repeated `.bat`, `.csproj`, `.config`, generated `.cs`, `.js`, `.ts`;
- files under test output-like directories;
- files that match template output exactly.

Decision:

- Keep if used as golden snapshots.
- Replace with generation in test setup if easier and reduces bloat.
- Remove if unused.

### 9.4 Binary Fixture Audit

```powershell
git ls-files DynamicsCrm.DevKit.Tests DynamicsCrm.DevKit.UnitTests ProjectTemplates ItemTemplates | Select-String -Pattern "\.dll$|\.nupkg$|\.pfx$|\.snk$|\.cer$|\.zip$"
```

For each binary:

- Who needs it?
- Can it be generated?
- Is it small and stable?
- Does it contain secrets/signing trust?

Expected:

- Add README notes for retained binary fixtures.
- Remove reproducible artifacts if owner approves.

### 9.5 Split Unit And Integration Assumptions

Expected:

- Unit tests should not require live Dataverse.
- Integration tests should clearly require env vars/PAC profile/private environment.
- Docs should say how to opt into integration tests.

## Verification

```powershell
rg -n "crm[0-9]?\.dynamics\.com|clientsecret|password" DynamicsCrm.DevKit.Tests DynamicsCrm.DevKit.UnitTests
git ls-files DynamicsCrm.DevKit.Tests DynamicsCrm.DevKit.UnitTests ProjectTemplates ItemTemplates | Select-String -Pattern "\.dll$|\.nupkg$|\.pfx$|\.snk$|\.cer$|\.zip$"
```

## Workflows

- Unit fixture changes: `/unit-test`
- Template fixture changes affecting VSIX: `/build-vsix`
- CLI test fixture changes: `/build-cli` and/or `/unit-test`
- Integration fixtures: run only in configured Dataverse environment.

## Done Criteria

- Live-looking fixture data is sanitized.
- Binary fixtures are documented or removed.
- Generated snapshots are intentionally retained and useful.
- Unit/integration test boundaries are clear.

## Suggested Agent Prompt

```text
You own Step 9 Fixture Hygiene for the assigned fixture tree. Classify fixtures, remove or document only clearly safe artifacts, and do not change credentials except to preserve Step 1 placeholders. Do not run dotnet build/test directly. Report fixture categories, files changed, verification searches, and any owner decisions needed.
```


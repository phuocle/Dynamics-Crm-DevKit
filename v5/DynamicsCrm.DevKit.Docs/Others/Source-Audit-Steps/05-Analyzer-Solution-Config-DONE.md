# Step 5 - Analyzer Solution And Generated-Code Config

Priority: P1

Status: **DONE** — 2026-04-24

Parallelization: good candidate for a separate agent. Ownership is analyzer solution/source/tests.

## Goal

Fix stale analyzer solution references and simplify analyzer generated-code analysis configuration.

## Ownership

Primary files:

- `DynamicsCrm.DevKit.Analyzers.slnx`
- `DynamicsCrm.DevKit.Analyzers/Core/BaseDiagnosticAnalyzer.cs`
- `DynamicsCrm.DevKit.Analyzers/CrmAnalyzers/*.cs`
- `DynamicsCrm.DevKit.UnitTests/Analyzers/**`

Avoid touching:

- CLI/MCP files.
- Shared project unless analyzer tests require a shared helper change.

## Current Risks

- Analyzer solution references `DynamicsCrm.DevKit.Analyzers.Test/DynamicsCrm.DevKit.Analyzers.Test.csproj`, but that project does not appear to exist.
- Derived analyzers and base analyzer both configure generated-code analysis, possibly with conflicting policies.

## Detailed Tasks

### 5.1 Fix Solution Reference

Check:

```powershell
Test-Path .\DynamicsCrm.DevKit.Analyzers.Test\DynamicsCrm.DevKit.Analyzers.Test.csproj
Get-Content .\DynamicsCrm.DevKit.Analyzers.slnx -Encoding UTF8
```

Options:

- Remove missing project reference from `DynamicsCrm.DevKit.Analyzers.slnx`.
- Or replace with `DynamicsCrm.DevKit.UnitTests/DynamicsCrm.DevKit.UnitTests.csproj` if analyzer workflow expects tests in solution.

Recommended:

- Prefer the smallest fix that matches existing `/build-analyzer` workflow.
- Inspect the workflow prompt/script before choosing.

### 5.2 Decide Generated Code Policy

Find all calls:

```powershell
rg -n "ConfigureGeneratedCodeAnalysis" DynamicsCrm.DevKit.Analyzers
```

Pick one policy:

#### Policy A - Do Not Analyze Generated Code

- Base analyzer calls `ConfigureGeneratedCodeAnalysis(GeneratedCodeAnalysisFlags.None)`.
- Derived analyzers do not call `ConfigureGeneratedCodeAnalysis`.

Use this if generated Dataverse code should not trigger diagnostics.

#### Policy B - Analyze And Report Generated Code

- Base analyzer calls `Analyze | ReportDiagnostics`.
- Derived analyzers do not call it.

Use this only if generated code diagnostics are desired.

Recommended:

- Policy A, unless existing tests prove generated code should be analyzed.

### 5.3 Update Derived Analyzers

Expected:

- Remove duplicate generated-code config calls from derived analyzers.
- Keep `base.Initialize(context)` in each analyzer.
- Keep `context.EnableConcurrentExecution()` centralized in base if present.

### 5.4 Add Regression Test

If possible, add one test proving generated-code behavior:

- A generated-code-marked source file does not report diagnostics under Policy A.
- Or does report diagnostics under Policy B.

## Verification

```powershell
Test-Path .\DynamicsCrm.DevKit.Analyzers.Test\DynamicsCrm.DevKit.Analyzers.Test.csproj
rg -n "ConfigureGeneratedCodeAnalysis" DynamicsCrm.DevKit.Analyzers
```

Expected:

- No stale missing project reference.
- Generated-code config appears in one central location.

## Workflows

- `/build-analyzer`
- `/unit-test` if analyzer tests changed

## Done Criteria

- Analyzer solution does not reference missing files.
- Generated-code analysis policy is centralized and tested or clearly documented.
- Analyzer tests still pass.

## Suggested Agent Prompt

```text
You own Step 5 Analyzer Solution And Generated-Code Config. Fix the stale analyzer solution reference and centralize ConfigureGeneratedCodeAnalysis policy. Only edit analyzer solution/source/tests. Do not run dotnet build/test directly; use /build-analyzer and /unit-test if needed. Report files changed and chosen generated-code policy.
```

## Changes Made

### `DynamicsCrm.DevKit.Analyzers.slnx`

Replaced missing project reference:
```xml
<!-- Before (project does not exist) -->
<Project Path="DynamicsCrm.DevKit.Analyzers.Test/DynamicsCrm.DevKit.Analyzers.Test.csproj" />

<!-- After -->
<Project Path="DynamicsCrm.DevKit.UnitTests/DynamicsCrm.DevKit.UnitTests.csproj" />
```

### `DynamicsCrm.DevKit.Analyzers/CrmAnalyzers/*.cs` (all 21 files)

Removed duplicate calls from every derived analyzer's `Initialize()`:
```csharp
// Removed from all 21 derived analyzers:
context.EnableConcurrentExecution();
context.ConfigureGeneratedCodeAnalysis(GeneratedCodeAnalysisFlags.Analyze | GeneratedCodeAnalysisFlags.ReportDiagnostics);
```

`BaseDiagnosticAnalyzer.Initialize()` is now the single location for both calls (Policy A — `GeneratedCodeAnalysisFlags.None`).

### `DynamicsCrm.DevKit.Analyzers/DynamicsCrm.DevKit.Analyzers.csproj`

Added `<NoWarn>RS1025;RS1026</NoWarn>` — Roslyn's static checker does not trace through base class calls, so RS1025/RS1026 fire as false positives when the calls are in base.

### `DynamicsCrm.DevKit.UnitTests/Analyzers/Tests/GeneratedCodePolicyTests.cs` (new file)

2 regression tests:
- `AppDomainEventAnalyzer_GeneratedCodeClass_NoDiagnostic` — `[GeneratedCode]` class must NOT trigger DEVKIT1001
- `AppDomainEventAnalyzer_NonGeneratedCodeClass_ProducesDiagnostic` — baseline: same code without `[GeneratedCode]` MUST trigger

## Chosen Policy

**Policy A — Do Not Analyze Generated Code** (`GeneratedCodeAnalysisFlags.None`).
Generated Dataverse proxy code should not trigger plugin diagnostics.

## Verification

```
Build: /claude-build-analyzer — succeeded, 0 errors, 0 warnings
Tests: /claude-unit-test (net48) — 596 passed, 0 failed
  (594 pre-existing + 2 new GeneratedCodePolicyTests)
```

## Done Criteria ✅

- Analyzer solution does not reference missing files ✅
- Generated-code analysis policy is centralized in `BaseDiagnosticAnalyzer` ✅
- Policy A documented and regression-tested ✅
- Analyzer tests still pass (596/596) ✅


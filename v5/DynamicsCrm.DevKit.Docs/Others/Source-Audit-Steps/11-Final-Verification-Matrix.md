# Step 11 - Final Verification Matrix

Priority: P0

Parallelization: final step only. Run after all selected remediation steps are merged/integrated.

## Goal

Verify that high-priority audit findings are fixed, workflows pass, and remaining risks are known.

## Ownership

Read mostly. Only edit docs if final verification discovers a residual risk that needs to be recorded.

## Pre-Check

```powershell
git status --short
```

Expected:

- Only intended files changed.
- No unexpected generated artifacts.

## Static Verification

### CLI/Docs Drift

```powershell
rg -n "webresources-t|--sdk-login|--secret|--user|--pass|32 tools|34 tools|35 tools" .
```

Expected:

- No stale text remains, except explicit deprecated alias docs/tests if those aliases were intentionally supported.

### Secrets

```powershell
rg -n --glob '!bin/**' --glob '!obj/**' --glob '!Coverage/**' --glob '!Published/**' "clientsecret|client secret|password|crm[0-9]?\.dynamics\.com" .
```

Expected:

- Only placeholders or documentation that does not contain real values.

### Wildcard Packages

```powershell
rg -n "Version=\"\*\"" *.csproj */*.csproj
```

Expected:

- No production wildcard package versions, unless explicitly documented as intentional.

### Analyzer Config

```powershell
Test-Path .\DynamicsCrm.DevKit.Analyzers.Test\DynamicsCrm.DevKit.Analyzers.Test.csproj
rg -n "ConfigureGeneratedCodeAnalysis" DynamicsCrm.DevKit.Analyzers
```

Expected:

- No missing project reference.
- Generated-code config centralized.

### Silent Catches

```powershell
rg -n "catch\s*\{\s*\}|catch\s*\([^)]*\)\s*\{\s*//" DynamicsCrm.DevKit.Cli DynamicsCrm.DevKit.Shared DynamicsCrm.DevKit.Tool
```

Expected:

- Remaining catches are documented as best-effort or tracked as residual risk.

## Workflow Verification

Run only via repo workflows:

- `/build-cli`
- `/build-vsix`
- `/build-analyzer`
- `/build-tool`
- `/unit-test`

Do not run:

- `dotnet build`
- `dotnet test`
- `git add`
- `git commit`
- `git push`

## Result Report Template

```markdown
# Final Verification Report

Date:

## Workflows

| Workflow | Result | Notes |
|---|---|---|
| /build-cli | pass/fail/not run | |
| /build-vsix | pass/fail/not run | |
| /build-analyzer | pass/fail/not run | |
| /build-tool | pass/fail/not run | |
| /unit-test | pass/fail/not run | |

## Static Checks

| Check | Result | Notes |
|---|---|---|
| CLI/docs drift | pass/fail | |
| Secret scan | pass/fail | |
| Wildcard packages | pass/fail | |
| Analyzer config | pass/fail | |
| Silent catch residuals | pass/fail | |

## Residual Risks

- 

## Follow-Ups

- 
```

## Done Criteria

- Required workflows pass or failures are understood and documented.
- Static checks show no known P0/P1 drift.
- Remaining P2/P3 risks have explicit follow-up.

## Suggested Agent Prompt

```text
You own Step 11 Final Verification Matrix. Do not edit code unless explicitly asked. Run static verification commands and the allowed repo workflows only. Do not run dotnet build/test directly. Produce a final report with workflow results, static check results, residual risks, and follow-ups.
```


# Step 7 - Silent Catch And Observability

Priority: P2

Parallelization: can be split by folder or feature area. Do not run against the same files as Step 8 at the same time.

## Goal

Reduce hidden failures by replacing silent catches with clear logging, structured warnings, or documented best-effort comments.

## Ownership

Candidate areas:

- `DynamicsCrm.DevKit.Cli/**`
- `DynamicsCrm.DevKit.Shared/**`
- `DynamicsCrm.DevKit.Tool/**`

Avoid touching:

- Large MCP refactor targets currently owned by Step 8 agent.
- Exception behavior in auth/deploy flows without tests.

## Triage Categories

Classify every catch into one of these:

| Category | Action |
|---|---|
| Best-effort cleanup | Keep catch, add concise comment if absent |
| Recoverable user-facing error | Log warning with actionable context |
| Data loss/deploy/schema risk | Return structured error or rethrow |
| Compatibility fallback | Log debug/trace if logging channel exists |

## Detailed Tasks

### 7.1 Inventory Silent Catches

```powershell
rg -n "catch\s*\{\s*\}|catch\s*\([^)]*\)\s*\{\s*//|catch\s*\([^)]*\)\s*\{\s*$" DynamicsCrm.DevKit.Cli DynamicsCrm.DevKit.Shared DynamicsCrm.DevKit.Tool
```

For each hit, record:

- file;
- operation;
- exception impact;
- proposed action.

### 7.2 Start With Low-Risk Areas

Good first candidates:

- cache cleanup;
- optional formatting;
- best-effort file cleanup;
- telemetry/logging fallback.

Avoid first:

- auth flow;
- Dataverse mutation;
- plugin registration;
- schema upsert.

### 7.3 Add Logging Consistently

Use existing logging primitives:

- `SpectreLog` for CLI user-facing messages.
- MCP structured result/warning models for MCP tools.
- Visual Studio logging/status for VSIX if later included.

Message rules:

- Include operation and target.
- Do not include secret values.
- Do not spam in tight loops.
- Prefer warning over error if operation continues safely.

### 7.4 Add Tests For Behavior Changes

If catch behavior changes from silent to error/warning:

- Add tests for recoverable exception path.
- Assert warning/result shape, not exact long prose unless stable.

## Verification

```powershell
rg -n "catch\s*\{\s*\}|catch\s*\([^)]*\)\s*\{\s*//" DynamicsCrm.DevKit.Cli DynamicsCrm.DevKit.Shared DynamicsCrm.DevKit.Tool
```

Expected:

- Remaining silent catches are intentionally best-effort and documented.
- Risky operations no longer swallow exceptions silently.

## Workflows

- CLI/MCP changes: `/build-cli`
- Tool changes: `/build-tool`
- Shared behavior affecting VSIX: `/build-vsix`
- Tests changed: `/unit-test`

## Done Criteria

- Silent catch count reduced.
- Remaining silent catches have comments explaining why silence is acceptable.
- User-facing operations log actionable warnings/errors.

## Suggested Agent Prompt

```text
You own Step 7 Silent Catch And Observability for the assigned folder/file list. Triage catches, add logging or comments, and avoid changing behavior broadly without tests. Do not touch files owned by Step 8 refactor agents. Do not run dotnet build/test directly. Report catches changed, catches intentionally left, and workflows run.
```


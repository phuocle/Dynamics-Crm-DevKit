# Step 10 - Documentation And Workflow Alignment

Priority: P2

Parallelization: can run after Step 2 and Step 4 settle CLI/MCP wording. Good standalone docs task.

## Goal

Make repo docs and IDE-specific workflow prompts agree with the source-of-truth rules: no direct `dotnet build/test`, use project workflows, keep IDE-specific parts in IDE-specific files.

## Ownership

Primary areas:

- `AGENTS.md`
- `.claude/**`
- `.github/**`
- `.agent/**`
- `DynamicsCrm.DevKit.Docs/**`
- `README.md`

Avoid touching:

- Code behavior.
- Build scripts unless docs prove they are wrong and owner approves.

## Current Risks

- Some workflow prompt files may still instruct direct `dotnet build`.
- Docs may duplicate stale CLI/MCP options or tool counts.
- IDE-specific docs can drift from shared `AGENTS.md`.

## Detailed Tasks

### 10.1 Inventory Build/Test Instructions

```powershell
rg -n "dotnet build|dotnet test|MSBuild|/build-cli|/build-vsix|/build-analyzer|/build-tool|/unit-test|/build-debug|/build-release" AGENTS.md .claude .github .agent DynamicsCrm.DevKit.Docs README.md
```

Classify hits:

- forbidden direct commands;
- allowed workflow commands;
- explicitly dangerous workflows;
- examples that need warning text.

### 10.2 Replace Direct Build/Test Guidance

Expected:

- User-facing docs say use:
  - `/build-cli`
  - `/build-vsix`
  - `/build-analyzer`
  - `/build-tool`
  - `/unit-test`
- Docs do not tell agents to run direct `dotnet build` or `dotnet test`.
- `/build-debug` and `/build-release` remain explicitly manual/request-only.

### 10.3 Align CLI/MCP Docs

After Step 2 and Step 4:

- Update option names.
- Update command names.
- Update MCP tool counts/categories.
- Remove stale deprecated commands or mark them deprecated clearly.

### 10.4 Keep Docs In Correct Folder

Use repo doc routing:

- CLI/MCP docs: `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/`
- VSIX docs: `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit/`
- Analyzer docs: `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Analyzers/`
- Tool docs: `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Tool/`
- Cross-project docs: `DynamicsCrm.DevKit.Docs/Others/`

## Verification

```powershell
rg -n "dotnet build|dotnet test" AGENTS.md .claude .github .agent DynamicsCrm.DevKit.Docs README.md
rg -n "--secret|--sdk-login|--user|--pass|webresources-t|32 tools|34 tools|35 tools" AGENTS.md .claude .github .agent DynamicsCrm.DevKit.Docs README.md
```

Expected:

- Direct build/test references only appear as forbidden examples.
- Stale CLI/MCP text is gone or explicitly marked as deprecated and supported.

## Workflows

- Docs-only changes: no build required.
- If prompt files drive workflows and include executable examples, no build required but ask owner to smoke-test workflow manually.

## Done Criteria

- Docs no longer contradict `AGENTS.md`.
- IDE-specific files contain IDE-specific differences only.
- CLI/MCP docs match current command contract.

## Suggested Agent Prompt

```text
You own Step 10 Documentation And Workflow Alignment. Update docs and IDE prompts so they use repo workflows, not direct dotnet build/test, and align CLI/MCP wording after Steps 2 and 4. Do not edit code. Do not run dotnet build/test directly. Report files changed and stale references removed.
```


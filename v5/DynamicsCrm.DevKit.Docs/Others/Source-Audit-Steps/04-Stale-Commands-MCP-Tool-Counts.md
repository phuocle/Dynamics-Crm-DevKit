# Step 4 - Stale Commands And MCP Tool Counts

Priority: P1

Parallelization: can run alongside analyzer/dependency work. Coordinate with Step 2 if editing `SpectreLog.cs`.

## Goal

Remove stale command names and make MCP tool counts/categories consistent across code, help, docs and generated fixtures.

## Ownership

Primary files:

- `DynamicsCrm.DevKit.Cli/Program.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs`
- `DynamicsCrm.DevKit.Cli/Commands/McpCommand.cs`
- `DynamicsCrm.DevKit.Cli/Logging/SpectreLog.cs`
- `DynamicsCrm.DevKit.Cli/README.md` or root `README.md` if present
- `DynamicsCrm.DevKit.Tests/**/deploy*.bat`
- relevant CLI/MCP unit tests

Avoid touching:

- CLI auth option names unless Step 2 is assigned to same agent.
- MCP tool implementation internals unless needed for category mapping tests.

## Current Risks

- Some generated/test scripts mention `devkit webresources-t`, but current registered command appears to be `webresource`.
- MCP docs/help mention different tool counts in different places.
- Tool level/category maps may drift as new tools are added.

## Detailed Tasks

### 4.1 Inventory Stale Commands And Counts

```powershell
rg -n "webresources-t|webresource|32 tools|34 tools|35 tools|36 tools|MCP tools|mcp tools|ToolCategoryMap" .
```

Classify hits:

- registered command;
- help/docs text;
- generated fixture;
- comments;
- test expectation.

### 4.2 Fix Stale Command Names

Expected:

- Replace `devkit webresources-t` with supported `devkit webresource`, unless a compatibility alias is intentionally added.
- If an alias is added, document it as deprecated and add a parser/command registration test if practical.

Prefer small fix:

- Update generated/test fixture commands to current command name.

### 4.3 Centralize MCP Tool Counts

Preferred design:

- Use one source of truth from `McpServerHost.ToolCategoryMap` or a helper method.
- Help/setup guide reads count dynamically where practical.
- Comments do not hardcode counts that can drift.

If dynamic count is too invasive:

- Update all counts consistently.
- Add a test that fails when map count and displayed docs diverge.

### 4.4 Validate Category Mapping

Expected:

- Every `[McpServerToolType]` has a category mapping.
- Category level counts match setup guide.
- Dry-run category restrictions remain unchanged.

## Tests To Add Or Update

Good test candidates:

- All MCP tool types are mapped.
- Basic/standard/advanced/all counts match helper output.
- Setup guide count text uses helper values or current constants.
- Deprecated command aliases, if any, register correctly.

## Verification

```powershell
rg -n "webresources-t|32 tools|34 tools|35 tools|36 tools" .
rg -n "ToolCategoryMap|McpServerToolType|GetToolsByLevel|basic|standard|advanced" DynamicsCrm.DevKit.Cli
```

Expected:

- No stale command remains unless intentionally tested as deprecated alias.
- Tool counts are consistent or no longer hardcoded.

## Workflows

- CLI/MCP changes: `/build-cli`
- Tests changed: `/unit-test`

## Done Criteria

- Generated/test scripts call valid command names.
- MCP count shown to users matches actual registered tools.
- Category mapping drift is guarded by tests or a single source of truth.

## Suggested Agent Prompt

```text
You own Step 4 Stale Commands And MCP Tool Counts. Fix stale webresource command references and make MCP tool counts consistent. Avoid CLI auth option changes unless coordinated with Step 2. Do not run dotnet build/test directly. Report files changed, count source-of-truth, and verification run.
```


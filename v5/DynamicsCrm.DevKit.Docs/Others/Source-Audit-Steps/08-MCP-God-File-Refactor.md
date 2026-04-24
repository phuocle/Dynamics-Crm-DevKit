# Step 8 - MCP God File Refactor

Priority: P3

Parallelization: split by MCP tool file. Do not have multiple agents edit the same tool at once.

## Goal

Reduce maintainability risk in very large MCP tool files without changing public tool contracts.

## Ownership

Target files, one at a time:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageCommandTool.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/BuildRibbonXmlTool.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/BuildFormXMLTool.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertColumnTool.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs`

Possible new helper folders:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/<ToolName>/`
- `DynamicsCrm.DevKit.Cli/Mcp/Helpers/`
- follow existing repo conventions if there is already a better place.

Avoid touching:

- Tool method names/attributes.
- JSON schema/parameter names.
- Result contract.
- Category mapping, unless Step 4 already completed and requires helper reuse.

## Refactor Rules

- Keep public MCP entry point stable.
- Move private logic only.
- Add tests before or during refactor.
- Prefer pure helpers for XML building/validation.
- Do not mix large behavior fixes with mechanical extraction.

## Suggested Extraction Boundaries

### Validation

Move request validation into small helpers:

- required field checks;
- mutually exclusive options;
- enum normalization;
- max length/range checks.

### Metadata Resolving

Move Dataverse lookup/metadata resolution:

- table/entity resolution;
- column/attribute resolution;
- solution component lookup;
- command/ribbon/form/view lookup.

### XML Build/Merge

Move XML operations:

- parse existing XML;
- insert/update nodes;
- normalize attributes;
- preserve ordering;
- serialize output.

### Execution

Keep mutation boundary obvious:

- dry-run path;
- actual Dataverse update;
- publish/customization actions.

### Result Formatting

Move repeated structured result creation:

- success result;
- validation error;
- dry-run preview;
- warnings.

## Detailed Tasks Per Tool

For each tool file:

1. Add/identify tests around current behavior.
2. Extract one private cluster to a helper.
3. Run formatting if repo uses formatter.
4. Run workflow.
5. Repeat only if first extraction is clean.

## Verification

Size scan:

```powershell
Get-ChildItem .\DynamicsCrm.DevKit.Cli\Mcp\Tools -Filter *.cs | Sort-Object Length -Descending | Select-Object -First 15 Name,Length
```

Contract scan:

```powershell
rg -n "\[McpServerTool|McpServerToolType|Description\(" DynamicsCrm.DevKit.Cli/Mcp/Tools
```

Expected:

- Tool attributes and public signatures unchanged unless intentionally tested.
- File size/complexity decreases.
- Tests cover extracted logic.

## Workflows

- `/build-cli`
- `/unit-test`

## Done Criteria

- At least one large MCP tool has reduced complexity without contract change.
- Extracted helpers have focused tests or are covered by existing MCP tests.
- Dry-run behavior remains intact.

## Suggested Agent Prompt

```text
You own Step 8 MCP God File Refactor for exactly one MCP tool file: <file>. Preserve public MCP tool attributes, method names, parameter names, JSON/result contract, and dry-run behavior. Extract private validation/XML/metadata/result logic in small steps with tests. Do not run dotnet build/test directly; use /build-cli and /unit-test. Report files changed and contract checks performed.
```


# MCP Solution Component Create Plan

## Goal

Chuan hoa cac MCP tools co tao solution component de code nhin professional hon:

- Khong lap lai logic `SolutionUniqueName` / `AddSolutionComponentRequest` o tung tool.
- Output cua tool phai noi ro component co duoc add vao solution hay khong.
- Phan biet ro 3 kieu create:
  - Metadata create request co `SolutionUniqueName`.
  - Dataverse row create bang `_serviceClient.Create(...)` roi add component vao solution.
  - Row/app association khong add vao solution.
- Khong tinh `manage_record` va `create_records` vi do la data record create, khong phai solution component authoring.

## Current Inventory

| Tool name | Create command | Current create implementation | Current add-to-solution behavior | isAddToSolution | Output mechanism | Existing solution fields in result |
|---|---|---|---|---|---|---|
| `manage_choice` | `action='create'` | `CreateOptionSetRequest` | Calls `AddSolutionComponentRequest` with component type `9` after create | Yes | **Plain text only** — no `UseStructuredContent`, no typed result class | None |
| `manage_environment_variable` | `action='create'` | `Entity("environmentvariabledefinition")` + `_serviceClient.Create(...)` | Calls `AddSolutionComponentRequest` with component type `380` after create, only when `solution_name` is provided | Yes | `ManageEnvironmentVariableResult` | `SolutionName`, `SolutionWarning` |
| `manage_webresource` | `action='create'` | `Entity("webresource")` + `_serviceClient.Create(...)` | Calls `AddSolutionComponentRequest` with component type `61` after create | Yes | `ManageWebResourceResult` | `SolutionName` |
| `upsert_table` | auto-create when table does not exist | `CreateEntityRequest` | Sets `CreateEntityRequest.SolutionUniqueName` | Yes | `UpsertTableResult` | `SolutionName` |
| `upsert_column` | auto-create when column does not exist | `CreateAttributeRequest`, `CreateOneToManyRequest`, `CreateCustomerRelationshipsRequest`, or `OrganizationRequest("CreatePolymorphicLookupAttribute")` | Sets `SolutionUniqueName` on the create request | Yes | `UpsertColumnResult` | `SolutionName` |
| `upsert_relationship` | `create_1n`, `create_nn`, `add_target` | `CreateOneToManyRequest` or `CreateManyToManyRequest` | Sets `SolutionUniqueName` on the create request | Yes | `UpsertRelationshipResult` | `SolutionName` |
| `manage_command` | `action='create'`, `add_flyout`, `add_split_button`, `add_flyout_item` | `Entity("appaction")` / related command records + `_serviceClient.Create(...)` | Does not add to solution | No | `ManageCommandResult` | None |
| `manage_view` | `action='create'` | `Entity("savedquery")` + `_serviceClient.Create(...)` | Does not add to solution | No | `UpsertViewResult` | None |
| `manage_sitemap` | `action='create'` | `Entity("sitemap")` + `_serviceClient.Create(...)` | Uses `AddAppComponentsRequest` to associate sitemap with app; this is not solution add | No | `ManageSiteMapResult` | None |
| `manage_role` | `action='create'` | `Entity("role")` + `_serviceClient.Create(...)` | Does not add to solution | No | `ManageRoleResult` | None |

All result classes are defined in `DynamicsCrm.DevKit.Cli\Mcp\Tools\Models\StructuredResults.cs`.

## Problem

The current code works, but the add-to-solution behavior is spread across individual tools:

- Metadata tools set `SolutionUniqueName` manually in different places.
- Row-based solution components call `AddSolutionComponentRequest` manually in each tool.
- Tools that do not support add-to-solution do not expose that limitation consistently in structured output.
- Failure handling differs: some tools return warning text, some structured content does not reflect add-to-solution status.
- `manage_choice` does not use `UseStructuredContent` at all — its create response is plain text only, with no typed result class. It is the only create tool in this group that has not been migrated to structured output yet.
- Several tools that track solution context (`manage_environment_variable`, `manage_webresource`, `upsert_table`, `upsert_column`, `upsert_relationship`) already have a `SolutionName` field, but none has `IsAddToSolution`, `AddToSolutionMethod`, or `AddToSolutionWarning` — so an AI agent cannot distinguish "was added" from "solution name was passed but add may have failed silently".

This makes it hard for an AI agent or maintainer to know whether a newly created component landed in the intended solution.

## Proposed Design

Add one small helper focused only on create/add behavior:

`DynamicsCrm.DevKit.Cli\Mcp\Tools\Helper\SolutionComponentCreateHelper.cs`

Keep it in MCP CLI helper scope because this behavior is MCP-tool output specific. Do not put it in Shared unless non-MCP code needs it later.

### Types

```csharp
internal enum SolutionComponentCreateMode
{
    None,
    MetadataCreateRequest,
    RecordCreateThenAddSolutionComponent,
    AppComponentAssociation
}

internal sealed class SolutionComponentCreateResult
{
    public Guid ComponentId { get; init; }
    public string SolutionUniqueName { get; init; }
    public bool IsAddToSolution { get; init; }
    public string AddToSolutionMethod { get; init; }
    public string AddToSolutionWarning { get; init; }
}
```

### Helper API

```csharp
internal static class SolutionComponentCreateHelper
{
    public static void ApplySolutionUniqueName(
        OrganizationRequest request,
        string solutionUniqueName)
    {
        if (!string.IsNullOrWhiteSpace(solutionUniqueName))
            request["SolutionUniqueName"] = solutionUniqueName.Trim();
    }

    public static SolutionComponentCreateResult AddExistingComponent(
        IOrganizationService service,
        Guid componentId,
        int componentType,
        string solutionUniqueName,
        bool addRequiredComponents = false)
    {
        if (string.IsNullOrWhiteSpace(solutionUniqueName))
            return new SolutionComponentCreateResult
            {
                ComponentId = componentId,
                IsAddToSolution = false,
                AddToSolutionMethod = "none"
            };

        try
        {
            service.Execute(new AddSolutionComponentRequest
            {
                AddRequiredComponents = addRequiredComponents,
                ComponentType = componentType,
                ComponentId = componentId,
                SolutionUniqueName = solutionUniqueName.Trim()
            });

            return new SolutionComponentCreateResult
            {
                ComponentId = componentId,
                SolutionUniqueName = solutionUniqueName.Trim(),
                IsAddToSolution = true,
                AddToSolutionMethod = "AddSolutionComponentRequest"
            };
        }
        catch (Exception ex)
        {
            return new SolutionComponentCreateResult
            {
                ComponentId = componentId,
                SolutionUniqueName = solutionUniqueName.Trim(),
                IsAddToSolution = false,
                AddToSolutionMethod = "AddSolutionComponentRequest",
                AddToSolutionWarning = ex.Message
            };
        }
    }
}
```

Note: `ApplySolutionUniqueName` uses `OrganizationRequest["SolutionUniqueName"]` so it works for typed requests and plain `OrganizationRequest("CreatePolymorphicLookupAttribute")`.

## Proposed Output Contract

Every create path that can create a solution component should include these structured fields:

| Field | Meaning |
|---|---|
| `CreateMode` | `MetadataCreateRequest`, `RecordCreateThenAddSolutionComponent`, `AppComponentAssociation`, or `None` |
| `IsAddToSolution` | `true` only when the component is created in or successfully added to the solution |
| `AddToSolutionMethod` | `SolutionUniqueName`, `AddSolutionComponentRequest`, `AddAppComponentsRequest`, or `none` |
| `SolutionName` | resolved solution unique name when available |
| `AddToSolutionWarning` | non-null when create succeeded but add-to-solution failed |

Recommended table output for documentation or debug:

| Tool name | Create command | Create method | isAddToSolution |
|---|---|---|---|
| `manage_choice` | `create` | `CreateOptionSetRequest` + `AddSolutionComponentRequest` | `true` |
| `manage_environment_variable` | `create` | `service.Create(environmentvariabledefinition)` + `AddSolutionComponentRequest` | `true` when `solution_name` provided and add succeeds |
| `manage_webresource` | `create` | `service.Create(webresource)` + `AddSolutionComponentRequest` | `true` |
| `upsert_table` | auto-create | `CreateEntityRequest` with `SolutionUniqueName` | `true` |
| `upsert_column` | auto-create | metadata create request with `SolutionUniqueName` | `true` |
| `upsert_relationship` | `create_1n`, `create_nn`, `add_target` | relationship create request with `SolutionUniqueName` | `true` |
| `manage_command` | `create` / flyout creates | `service.Create(appaction)` | `false` |
| `manage_view` | `create` | `service.Create(savedquery)` | `false` |
| `manage_sitemap` | `create` | `service.Create(sitemap)` + `AddAppComponentsRequest` | `false` |
| `manage_role` | `create` | `service.Create(role)` | `false` |

## Implementation Steps

### Phase 1 — Migrate `manage_choice` to structured output ✅ DONE

Prerequisite for Phase 2. `manage_choice` is the only create tool in this group still using plain text output.

1. ✅ Added `ManageChoiceResult`, `ChoiceOptionItem`, `ChoiceListItem` to `StructuredResults.cs`.
   - Fields: `Action`, `OptionSetName`, `DisplayName`, `Description`, `OptionCount`, `Options`, `TotalCount`, `Items`, `SolutionName`, `SolutionWarning`, `Published`, `Status`, `OptionsAdded`, `OptionsRenamed`, `OptionsRemoved`.

2. ✅ Updated `ManageChoiceTool.cs`:
   - Added `UseStructuredContent = true, OutputSchemaType = typeof(ManageChoiceResult)` to `[McpServerTool]`.
   - All 4 actions (`list`, `detail`, `create`, `update`) now return `StructuredResult(text, ManageChoiceResult)`.
   - Replaced `SuccessResult` with `StructuredResult`; kept `ErrorResult` and `DryRunResult` unchanged.

3. ✅ Build passed: 0 warnings, 0 errors.

4. Kill MCP process so it auto-restarts:
```powershell
Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force
```

---

### Phase 2 — Standardize add-to-solution behavior across all tools

1. Add `SolutionComponentCreateHelper` at `DynamicsCrm.DevKit.Cli\Mcp\Tools\Helper\SolutionComponentCreateHelper.cs`.
   - Verify: compile CLI.

2. Update `manage_choice`, `manage_environment_variable`, and `manage_webresource` to use `AddExistingComponent`.
   - Preserve existing text shape as much as possible.
   - Add `IsAddToSolution`, `AddToSolutionMethod`, `AddToSolutionWarning` fields to the result; do not remove existing fields.
   - Verify: `/claude-build-cli`.

3. Update `upsert_table`, `upsert_column`, and `upsert_relationship` to use `ApplySolutionUniqueName`.
   - No behavior change.
   - Verify: `/claude-build-cli`.

4. For `manage_command`, `manage_view`, `manage_sitemap`, and `manage_role`, add explicit structured fields:
   - `IsAddToSolution = false`
   - `AddToSolutionMethod = "none"`, except `manage_sitemap` uses `"AddAppComponentsRequest"`
   - Verify: `/claude-build-cli`.

5. Kill MCP process so it auto-restarts:
```powershell
Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force
```

## Tradeoffs

### Helper in CLI MCP tools

Pros:
- Smallest change.
- Keeps MCP-specific output concerns out of Shared.
- Easy to apply surgically.

Cons:
- If VSIX or non-MCP CLI commands later need the same behavior, it may need to move to Shared.

### Generic helper vs component-specific helpers

Use a generic helper for `AddSolutionComponentRequest`, because component type and add-required-components are the only changing values.

Do not abstract the create request itself. The metadata objects are different enough that a generic create wrapper would hide important details and make debugging harder.

## Do Not Change

- Do not refactor `Helper.cs` or `XrmHelper.cs`.
- Do not change MCP tool names, action names, JSON keys, or existing error text unless required.
- Do not add `solution_name` to tools where Dataverse does not support solution add or where behavior is unclear.
- Do not treat `AddAppComponentsRequest` as solution add; it associates a component with a model-driven app.


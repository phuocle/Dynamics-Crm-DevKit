# manage_app: Overview and Boundaries

## Context

`manage_sitemap` is a legacy/disabled tool and is planned for removal. Editing sitemap XML as a standalone artifact is the wrong user-facing context for a model-driven app. The replacement is `manage_app`, where app metadata, app components, and app navigation are handled together.

Microsoft's model-driven app API flow is:

1. Create an `appmodule` record.
2. Add app components with `AddAppComponentsRequest`.
3. Validate the app with `ValidateAppRequest`.
4. Publish separately.

`manage_app` must stop before publish. Every mutating response must include a clear next step:

`Not published. Run publish_customizations(include_sitemap=true) when ready.`

## Goals

- Replace standalone sitemap editing with app-scoped model-driven app management.
- Route all model-driven app and sitemap creation/update tasks through `manage_app`, not raw Web API calls.
- Create a minimal valid model-driven app in one call.
- Require `solution_name` for create so the publisher prefix can be resolved before deriving `uniquename`.
- Automatically create a starter sitemap for new apps because a model-driven app without sitemap navigation is invalid.
- Add both the app and sitemap to the target solution.
- Support app metadata updates: display name, description, icon.
- Support app navigation operations through a curated JSON operation model.
- Back up the current app metadata and navigation before every update, navigation update, and undo.
- Never publish from `manage_app`.

## Non-Goals

- Do not support deleting app records.
- Do not support deleting sitemap records.
- Do not support raw sitemap XML as the primary public workflow.
- Do not use `execute_webapi` to create or update `appmodule`, `sitemap`, or `appmodulecomponent` records.
- Do not support non-entity navigation items initially. No URL, web resource, dashboard, or custom page item operations.
- Do not replace app sharing/security-role management.

## Tool Registration

Class:

`DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageAppTool`

Tool name:

`manage_app`

Tier:

`advanced`

Register:

```csharp
[nameof(ManageAppTool)] = "advanced",
```

Keep `ManageSiteMapTool` disabled while it still exists; later delete it and its private helper files. AI agents must not call `manage_sitemap`, even if an older local server still exposes it.

Temporary migration bridge while the old tool exists:

```csharp
[nameof(ManageSiteMapTool)] = new[] { "sitemapxml_schema", "instructions_for_manage_app" },
```

After deleting `ManageSiteMapTool`, remove this `ToolResourceMap` entry too.

## Proposed Signature

```csharp
[McpServerTool(Name = "manage_app", Title = "Manage model-driven apps",
    Destructive = true, ReadOnly = false, Idempotent = true,
    UseStructuredContent = true, OutputSchemaType = typeof(ManageAppResult))]
public CallToolResult manage_app(
    string action = "detail",
    string app = "",
    string app_name = "",
    string solution_name = "",
    string display_name = "",
    string unique_name = "",
    string description = "",
    string icon_webresource = "",
    string operations = "",
    bool validate = true,
    bool backup = true,
    int max_records = 100)
```

Parameter rules:

- `action`: `list`, `detail`, `create`, `update`, `update_navigation`, `validate`, `undo`.
- `app`: app display name, unique name, or GUID. Required for `detail`, `update`, `update_navigation`, `validate`, `undo`.
- `app_name`: list filter only.
- `solution_name`: required for `create`.
- `display_name`: required for `create`; optional for `update`.
- `unique_name`: optional for `create`. If empty, derive from `display_name` and solution publisher prefix.
- `description`: optional for `create` and `update`.
- `icon_webresource`: optional app icon web resource name or GUID.
- `operations`: JSON array for `update_navigation`, or backup file path for `undo`.
- `validate`: run app validation after mutating calls. This is app validation, not publish.
- `backup`: backup current app snapshot before `update`, `update_navigation`, and `undo`.
- `max_records`: list only.

Do not expose `auto_publish`.

## Implementation Boundary

- Callers must use `manage_app` for app and sitemap operations.
- Do not instruct AI agents to call `execute_webapi` against `appmodules`, `sitemaps`, or `appmodulecomponents`.
- Inside `manage_app`, use SDK CRUD and safe organization requests:
  - CRUD: `IOrganizationService.Create`, `Retrieve`, `Update` for `appmodule` and `sitemap`.
  - Messages: `AddAppComponentsRequest`, `ValidateAppRequest`, `AddSolutionComponentRequest`.
- Never use raw Web API as the implementation path for creating or updating app/sitemap records.

## Dataverse Details

Tables:

- `appmodule`
- `sitemap`
- `appmodulecomponent`
- `solution`
- `publisher`
- `webresource`

Messages:

- `AddAppComponentsRequest`
- `ValidateAppRequest`
- `AddSolutionComponentRequest`

Component types:

- AppModule solution component: `80`
- SiteMap solution/app component: `62`
- Entity app component: `1`

Important relationship detail:

`appmodulecomponent.appmoduleidunique` references `appmodule.appmoduleidunique`, not `appmodule.appmoduleid`. Preserve this behavior from the legacy sitemap implementation.

## Result Model

Add `ManageAppResult` to `StructuredResults.cs`.

```csharp
internal sealed class ManageAppResult
{
    public string Action { get; set; }
    public string Status { get; set; }
    public string AppModuleId { get; set; }
    public string AppModuleIdUnique { get; set; }
    public string AppName { get; set; }
    public string UniqueName { get; set; }
    public string SiteMapId { get; set; }
    public string SolutionUniqueName { get; set; }
    public bool Validated { get; set; }
    public bool Published { get; set; }
    public string BackupPath { get; set; }
    public List<string> ValidationErrors { get; set; }
    public List<string> ValidationWarnings { get; set; }
    public int? OperationsCount { get; set; }
    public List<string> OperationSummaries { get; set; }
    public List<string> AddedAppComponents { get; set; }
    public List<string> AddedSolutionComponents { get; set; }
    public string NextStep { get; set; }
}
```

Invariant:

For `create`, `update`, `update_navigation`, and `undo`, `Published=false` and `NextStep` is not null.


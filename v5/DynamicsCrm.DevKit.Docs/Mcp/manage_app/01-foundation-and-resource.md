# manage_app Task 1: Foundation and Resource

## Scope

Implement the tool skeleton, registration, structured result, disabled sitemap migration handling, Web API blocking, and AI-facing instructions resource. This task should not implement full app create/update/navigation logic yet.

## Tool Skeleton

Create:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageAppTool.cs`
- `ManageAppResult` in `DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/StructuredResults.cs`

Register `ManageAppTool` in `McpServerHost.ToolCategoryMap`:

```csharp
[nameof(ManageAppTool)] = "advanced",
```

Keep `ManageSiteMapTool` disabled while it still exists. AI agents must not call `manage_sitemap`.

## Actions for Skeleton

Initial action dispatch should support:

- `list`
- `detail`
- `create`
- `update`
- `update_navigation`
- `validate`
- `undo`

Unimplemented mutating actions may return clear TODO errors during this task, but the public signature should be stable.

## Resource

Add a markdown resource:

- Name: `instructions_for_manage_app`
- URI: `docs://instructions_for_manage_app`
- Title: `Instructions for manage_app`

Suggested body:

```markdown
# Instructions for manage_app

Use `manage_app` for model-driven app metadata and app navigation. Never call `manage_sitemap`, even if an older local server still exposes it. Never use `execute_webapi` to create or update model-driven apps, sitemaps, or app module components.

## Golden Rules

- Always read the app first with `manage_app(action='detail', app='...')` before changing metadata or navigation.
- Create requires `solution_name` and `display_name`.
- Create automatically creates a starter sitemap with an Account item so Dataverse app validation can pass.
- `manage_app` never publishes. After successful create/update/navigation/undo, ask the user to publish or propose `publish_customizations(include_sitemap=true)`.
- Do not delete appmodule records.
- Do not delete sitemap records.
- `remove_area`, `remove_group`, and `remove_item` only remove navigation nodes from sitemap XML.
- Item operations support entity items only in v1.
- All move/order positions are 1-based when numeric. Visual order is left-to-right, then top-to-bottom.

## Read Before Write Workflow

1. Inspect the app:

```json
{
  "action": "detail",
  "app": "Sales App"
}
```

2. Apply metadata update or navigation operations.
3. Check validation warnings or errors.
4. Publish separately only after the user agrees:

```json
{
  "entities": "",
  "include_sitemap": true
}
```

## Create App

```json
{
  "action": "create",
  "solution_name": "TESTMCP",
  "display_name": "TEST MCP App",
  "description": "Model-driven app for MCP testing"
}
```

## Update App Metadata

```json
{
  "action": "update",
  "app": "TEST MCP App",
  "description": "Updated description",
  "icon_webresource": "v5_/icons/app.svg"
}
```

## Navigation Position Values

`position` supports `first`, `last`, `before:<target>`, `after:<target>`, `index:<n>`, or a plain 1-based number.

## Navigation Examples

```json
[
  {
    "action": "add_area",
    "label": "Invoicing",
    "id": "area_invoicing",
    "show_groups": true,
    "position": "last"
  },
  {
    "action": "add_group",
    "area": "Invoicing",
    "label": "Transactions",
    "id": "group_transactions",
    "position": "last"
  },
  {
    "action": "add_item",
    "area": "Invoicing",
    "group": "Transactions",
    "entity": "v5_invoice",
    "label": "Invoices",
    "id": "sa_v5_invoice",
    "position": "last"
  }
]
```

Move item:

```json
[
  {
    "action": "move_item",
    "item": "v5_invoice",
    "from_area": "Invoicing",
    "from_group": "Transactions",
    "to_area": "Sales",
    "to_group": "Customers",
    "position": "after:account"
  }
]
```

Undo:

```json
{
  "action": "undo",
  "app": "TEST MCP App",
  "operations": ".devkit/backups/apps/test_mcp_app_...app.json"
}
```
```

## ExecuteWebApiTool Updates

Update blocked endpoints so AI is redirected to `manage_app`:

- `appmodules(`
- `sitemaps(`
- `appmodulecomponents(`

Error text should say:

`Do not use execute_webapi for model-driven app or sitemap creation/update. Use manage_app.`

## Acceptance Criteria

- Tool is registered and appears in the advanced tool tier.
- `docs://instructions_for_manage_app` returns actionable instructions.
- `execute_webapi` blocks app/sitemap raw CRUD and points to `manage_app`.
- `manage_sitemap` remains disabled if it still exists.
- No publish path exists in `manage_app`.


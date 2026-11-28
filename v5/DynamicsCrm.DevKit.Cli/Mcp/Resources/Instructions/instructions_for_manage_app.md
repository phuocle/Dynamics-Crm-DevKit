> **Consolidated MCP Routing:** Model-driven app operations use manage_ui(resource='app', action='list'|'detail'|'create'|'update'|'update_navigation'|'add_components'|'remove_components'|'validate'|'undo', id=..., name=..., entity_name=..., solution_name=..., payload={app, app_name, display_name, unique_name, description, icon_webresource, operations, max_records, view_ids, form_ids, dashboard_ids, chart_ids}).


# Instructions for manage_ui(resource='app')

Use `manage_ui(resource='app')` for model-driven app metadata, app navigation, and table, system view, form, chart, and dashboard membership.

## Golden Rules

- Always read the app first with `manage_ui(resource='app', action='detail', app='...')` before changing metadata, navigation, or components.
- Create requires `solution_name` and `display_name`.
- Create automatically creates a starter sitemap with an Account item so Dataverse app validation can pass.
- After saving changes, `create`, `update`, `update_navigation`, `add_components`, `remove_components`, and `undo` attempt to publish the app automatically. `published: true` confirms success. If publishing fails after saving, the result includes `published: false`, a status ending in `_publish_failed`, and a `nextStep` for retrying publish. `no_changes` results skip publish.
- `list`, `detail`, and `validate` omit `published` because they do not check the app's publication state.
- `unique_name` on create always gets the solution publisher prefix prepended (e.g. 'MyApp' in a solution with prefix 'all' becomes 'all_MyApp').
- Do not delete appmodule records.
- Do not delete sitemap records.
- `remove_area`, `remove_group`, and `remove_item` only remove navigation nodes from sitemap XML.
- `add_item` accepts one target per SubArea. Use `entity`, `url`, `dashboard_id` (alias `default_dashboard`), or `webresource`.
- `update_item` finds the SubArea by `area`, `group`, and `item`. Pass a new `label`, a new target, or both. Use the SubArea ID for reliable matching. `move_item` and `remove_item` accept SubArea IDs for every type.
- Dashboard and WebResource items accept `icon` on `add_item` and `update_item`. Pass the exact name of an existing SVG web resource, its `$webresource:` reference, or its `/WebResources/` path.
- `update_navigation` publishes the app and its SiteMap in one request. If publish fails after saving, follow `nextStep` to publish the app from Power Apps App Designer.
- All move/order positions are 1-based when numeric. Visual order is left-to-right, then top-to-bottom.

## App component membership

Use `add_components` or `remove_components` with the app's display name, unique name, or GUID. Pass one or more of `view_ids`, `form_ids`, `chart_ids`, and `dashboard_ids` as JSON arrays of GUID strings or exact names. View, form, and chart selectors require `entity_name`, which accepts the table's display or logical name. Chart selectors resolve system charts (`savedqueryvisualization`, component type `59`) for that table. Use `manage_ui(resource='chart', action='list', entity_name=...)` to discover them. Dashboard-only calls can omit `entity_name`. When supplied, dashboard lookup includes dashboards for that table and global dashboards.

`add_components` adds the table to the app if `entity_name` is supplied and the table is missing, including for tables outside the sitemap. Pass `entity_name` alone to add or remove the table component. With view, form, chart, or dashboard selectors, `remove_components` targets only the selected components.

```json
{
  "action": "add_components",
  "app": "Sales Hub",
  "entity_name": "account",
  "view_ids": ["Active Accounts"],
  "form_ids": ["Account"],
  "chart_ids": ["Accounts by Industry"],
  "dashboard_ids": ["Sales Activity Dashboard"]
}
```

Use a GUID when a name is ambiguous. The actions use Dataverse's AddAppComponents and RemoveAppComponents messages to change explicit app membership. When a table has no explicit view or form selections, Dataverse can expose all of them by default.

When a table in the app displays all its system charts by default, `remove_components` with `chart_ids` explicitly selects the remaining charts. The result lists the charts kept as explicit selections in `addedAppComponents` and the charts removed from display in `removedAppComponents`. New system charts for that table then need to be added to the app explicitly. Keep at least one chart selected, since an empty selection displays all the charts again.

The mutation reports `addedAppComponents`, `removedAppComponents`, and `published` as applicable. Pass the returned `backupPath` as `operations` to `manage_ui(resource='app', action='undo', app='...')` to restore the memberships changed by that call. Earlier navigation backups still restore the sitemap.

## Read Before Write Workflow

1. Inspect the app:

```json
{
  "action": "detail",
  "app": "Sales App"
}
```

2. Apply metadata updates, component changes, or navigation operations.
3. Check validation warnings or errors.
4. Check `published` in the mutation result. If the status ends in `_publish_failed`, follow `nextStep` to retry publish.

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

For `action='update_navigation'`, the `operations` argument is a string containing a non-empty JSON array. Serialize the example array once and pass the resulting text as `operations`; do not pass an array directly or double-serialize it. The MCP argument serializer escapes quotes when encoding the whole request.

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

Add a URL, a system dashboard, and a web resource to an existing group:

```json
[
  {
    "action": "add_item",
    "area": "area_default",
    "group": "group_default",
    "id": "sa_support",
    "label": "Support",
    "url": "https://example.com/support"
  },
  {
    "action": "add_item",
    "area": "area_default",
    "group": "group_default",
    "id": "sa_sales_dashboard",
    "label": "Sales Overview",
    "dashboard_id": "e768c201-a0c8-4194-b027-5324a51e628b",
    "icon": "ab_/icons/dashboard.svg"
  },
  {
    "action": "add_item",
    "area": "area_default",
    "group": "group_default",
    "id": "sa_help_page",
    "label": "Help",
    "webresource": "ab_/html/page.html",
    "icon": "ab_/icons/help.svg"
  }
]
```

- A URL item writes the supplied path or URL to the SiteMap and requires no app component. The tool accepts legacy paths such as `/workplace/home_dashboards.aspx`. Microsoft documents a limitation for generic [SiteMap links to .aspx pages](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/create-site-map-app).
- Use the `formId` returned by `manage_ui(resource='form')` or the GUID of an existing system dashboard. The operation writes `Url="/workplace/home_dashboards.aspx"` and `DefaultDashboard` with the GUID without braces. To repair an existing Dashboard SubArea, pass its `item` ID and the same `dashboard_id` in `update_item`. The system form is associated with the app if needed.
- Pass an existing web resource's exact name. The `$webresource:` prefix is optional in input and always appears in the SiteMap URL, which establishes a Dataverse dependency. When the environment exposes app component type `61`, the tool also adds the web resource directly to the app if needed.

Set or replace the icon on an existing Dashboard or WebResource item with `update_item`, `area`, `group`, and `item`. For example, set the icon on the WebResource item above.

```json
[
  {
    "action": "update_item",
    "area": "area_default",
    "group": "group_default",
    "item": "sa_help_page",
    "icon": "$webresource:ab_/icons/help.svg"
  }
]
```

The tool validates that the icon exists and is an SVG before saving. It sets both `VectorIcon` and `Icon` on the SubArea to `/WebResources/ab_/icons/help.svg`. App detail returns `VectorIcon` in `navigationAreas[].groups[].items[].icon` when present and falls back to `Icon` for existing entries.

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
  "operations": ".devkit/manage_app/test_mcp_app/...app.json"
}
```

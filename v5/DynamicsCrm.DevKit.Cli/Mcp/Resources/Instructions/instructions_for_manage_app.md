
# Instructions for manage_app

Use `manage_app` for model-driven app metadata and app navigation. Never use `execute_webapi` to create or update model-driven apps, sitemaps, or app module components.

## Golden Rules

- Always read the app first with `manage_app(action='detail', app='...')` before changing metadata or navigation.
- Create requires `solution_name` and `display_name`.
- Create automatically creates a starter sitemap with an Account item so Dataverse app validation can pass.
- Every mutating action (`create`, `update`, `update_navigation`, `undo`) publishes the app automatically so changes take effect immediately; `published: true` in the result confirms it. `no_changes` results skip publish.
- `unique_name` on create always gets the solution publisher prefix prepended (e.g. 'MyApp' in a solution with prefix 'all' becomes 'all_MyApp').
- Do not delete appmodule records.
- Do not delete sitemap records.
- `remove_area`, `remove_group`, and `remove_item` only remove navigation nodes from sitemap XML.
- `add_item` accepts one target per SubArea. Use `entity`, `url`, `dashboard_id` (alias `default_dashboard`), or `webresource`.
- `update_item` finds the SubArea by `area`, `group`, and `item`. Pass a new `label`, a new target, or both. Use the SubArea ID for reliable matching. `move_item` and `remove_item` accept SubArea IDs for every type.
- Dashboard and WebResource items accept `icon` on `add_item` and `update_item`. Use the exact name of an existing SVG web resource. The `$webresource:` prefix is optional in the input.
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
4. Publish happens automatically on every mutation — no separate `publish_customizations` call is needed.

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
- Use the `formId` returned by `manage_form` or the GUID of an existing system dashboard. The operation writes `Url="/workplace/home_dashboards.aspx"` and `DefaultDashboard` with the GUID without braces. To repair an existing Dashboard SubArea, pass its `item` ID and the same `dashboard_id` in `update_item`. The system form is associated with the app if needed.
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

The tool validates that the icon exists and is an SVG before saving, then writes `Icon="$webresource:ab_/icons/help.svg"` on the SubArea. The app detail result returns this value in `navigationAreas[].groups[].items[].icon`.

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

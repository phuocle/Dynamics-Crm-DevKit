
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

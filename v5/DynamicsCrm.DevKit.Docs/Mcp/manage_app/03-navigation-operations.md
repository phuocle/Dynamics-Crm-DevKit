# manage_app Task 3: Navigation Operations

## Scope

Implement `update_navigation` and the XML operation helper for app-scoped sitemap navigation. Item operations support entity items only in v1.

## update_navigation Flow

Required:

- `app`
- `operations`

Flow:

1. Resolve app.
2. Retrieve the associated sitemap through `appmodulecomponent` where `componenttype=62`.
3. Backup current app snapshot to `.devkit/backups/apps/{safeAppName}_{appModuleId:N}_{timestamp}.app.json`.
4. Parse operations.
5. Apply operations to sitemap XML.
6. Validate sitemap XML with the existing embedded `.xsd` validator.
7. Update the `sitemap.sitemapxml` record.
8. Add any newly referenced entity to the app via `AddAppComponentsRequest`.
9. Run `ValidateAppRequest` when `validate=true`.
10. Return backup path and `Published: false`.

No raw sitemap XML path should be accepted in v1. Keep all writes operation-based.

## Navigation Operation Model

Use `operations` as a JSON array. Every item has an `action`.

Supported operation actions:

- `add_area`
- `order_area`
- `remove_area`
- `add_group`
- `order_group`
- `remove_group`
- `add_item`
- `move_item`
- `remove_item`

Terminology:

- `area` references area by `Id` or title.
- `group` references group by `Id` or title within an area.
- `item` references subarea by `Id`, title, or entity logical name.
- Item type is always entity in v1.
- Move/order `position` is always interpreted visually as left-to-right, then top-to-bottom, starting at `1`.

Supported `position` values for `add_*`, `order_*`, and `move_item`:

- `first`: move to the first position in the same parent.
- `last`: move to the last position in the same parent.
- `before:<target>`: place before the referenced sibling.
- `after:<target>`: place after the referenced sibling.
- `index:<n>` or a number: place at 1-based position `n`.

Implementation detail: sitemap XML stores navigation as ordered sibling nodes, not a visual grid. The tool should map the visual wording to sibling order within the parent `SiteMap`, `Area`, or `Group`.

## add_area

```json
{
  "action": "add_area",
  "label": "Sales",
  "id": "area_sales",
  "show_groups": true,
  "icon": "/_imgs/sales_24x24.gif",
  "position": "last"
}
```

Required: `label`.

Optional: `id`, `show_groups`, `icon`, `position`.

## order_area

```json
{
  "action": "order_area",
  "area": "Sales",
  "position": "before:Settings"
}
```

Required: `area`, `position`.

## remove_area

```json
{
  "action": "remove_area",
  "area": "Sales"
}
```

Required: `area`.

This removes the area node from navigation only. It must not delete the app or sitemap.

## add_group

```json
{
  "action": "add_group",
  "area": "Sales",
  "label": "Customers",
  "id": "group_customers",
  "position": "last"
}
```

Required: `area`, `label`.

Optional: `id`, `position`.

## order_group

```json
{
  "action": "order_group",
  "area": "Sales",
  "group": "Customers",
  "position": "first"
}
```

Required: `area`, `group`, `position`.

## remove_group

```json
{
  "action": "remove_group",
  "area": "Sales",
  "group": "Customers"
}
```

Required: `area`, `group`.

This removes the group node and its child items from navigation only.

## add_item

```json
{
  "action": "add_item",
  "area": "Sales",
  "group": "Customers",
  "entity": "account",
  "label": "Accounts",
  "id": "sa_account",
  "position": "last"
}
```

Required: `area`, `group`, `entity`.

Optional: `label`, `id`, `position`.

Rules:

- Validate that `entity` exists with `RetrieveEntityRequest`.
- Add the entity as an app component with `AddAppComponentsRequest`.
- If the same entity is already present in the same group, treat as idempotent success.
- If the same entity exists elsewhere, allow it only when `id` differs; otherwise return a clear duplicate error.

## move_item

```json
{
  "action": "move_item",
  "item": "account",
  "from_area": "Sales",
  "from_group": "Customers",
  "to_area": "Service",
  "to_group": "Accounts",
  "position": "last"
}
```

Required: `item`, `to_area`, `to_group`.

Optional but recommended: `from_area`, `from_group`, `position`.

If `from_area` / `from_group` are omitted and multiple matches exist, return disambiguation and stop.

## remove_item

```json
{
  "action": "remove_item",
  "area": "Sales",
  "group": "Customers",
  "item": "account"
}
```

Required: `area`, `group`, `item`.

This removes only the navigation item. It must not delete the table, app, sitemap, or app component row in v1.

## Acceptance Criteria

- `manage_app(action='update_navigation', operations='[...]')` backs up, applies ordered area/group/item operations, validates, updates sitemap, and does not publish.
- Area operations support add/order/remove.
- Group operations support add/order/remove.
- Entity item operations support add/move/remove.
- Numeric positions are 1-based.
- New entity items are added as app components.


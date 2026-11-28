> **Consolidated MCP Routing:** Modern Power Fx command bar operations use manage_commanding(resource='command', action=..., entity_name=..., id=..., solution_name=..., payload={location, app_id, label, onclick_type, javascript_webresource, javascript_function, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence, hidden, app_name, origin, action_type, name_filter, include_rules, include_children, max_records, items, flyout_command_id, scope, uniquename}).

# Delete modern command bar commands with `manage_commanding(resource='command')`

Use `manage_commanding(resource='command', action='delete')` to remove an unmanaged Dataverse `appaction`, including migrated and Enhanced Migrated commands. A real `appaction` GUID is sufficient. Use `action='list'` with the appropriate scope and `include_children=true`, or `action='detail'`, to inspect commands before deleting them.

## Select the command

`command_id` takes precedence. Without it, supply an exact `label` or `uniquename` and a `location`. If more than one record matches, use a GUID. Name lookup includes hidden and inactive records.

| Scope | Selectors besides `label` or `uniquename` and `location` |
| --- | --- |
| `app` | `app_id` or `app_name` (display or unique name). Supply `entity_name` for an app command on a specific table. Omit it for a command across that app. |
| `table` | `entity_name` (display or logical name). Omit the app fields to select a row whose `appmoduleid` is null. |
| `global` | Omit `entity_name` and both app fields to select a row with no app or table context. |

When `scope` is omitted, the lookup selects `app` if an app is supplied, `table` if only a table is supplied, or `global` if neither is supplied. `origin` and `name_filter` are list filters and do not restrict deletion.

```json
{"action":"delete","command_id":"11111111-1111-1111-1111-111111111111"}
```

```json
{"action":"delete","label":"My Command","entity_name":"account","location":"form","app_name":"Sales Hub"}
```

```json
{"action":"delete","uniquename":"contoso_legacy_command","entity_name":"account","location":"main_grid","scope":"table"}
```

```json
{"action":"delete","label":"Global Command","location":"global_header","scope":"global"}
```

## Dependencies and publishing

The tool checks the entire child tree, including flyout and split button groups. A managed target or child blocks deletion. Rules used only by the commands being deleted are removed first. Shared rules remain available to the other commands that use them. A managed rule that would need to be deleted also blocks the operation. The rule and command deletes run in one transaction, with children deleted before parents.

After deletion, the tool publishes the table linked through `contextentity`, if present. If the publish fails, the response reports that the deletion succeeded and points to `manage_admin(resource='publish')` to retry publishing. The MCP server's dry-run mode previews the requested operation without reading, deleting, or publishing records.

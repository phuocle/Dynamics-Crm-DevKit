# manage_app Task 4: Safety, Undo, Cleanup

## Scope

Implement snapshot backup, undo, XSD validation wiring, standalone sitemap tool deletion, and final cleanup.

## Helper Classes

Suggested files:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/App/AppNavigationOperationsHelper.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/App/AppNavigationBackupHelper.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/App/AppModuleResolver.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/App/SolutionPublisherResolver.cs`

Reuse from existing code where possible:

- `DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.McpHelper.GetBaseLanguageCode(ServiceClient serviceClient)` for sitemap title LCID values.
- `SolutionComponentCreateHelper.AddExistingComponent`.
- Sitemap XSD validation logic should live in the app management implementation.
- XML operation patterns should live in app-scoped navigation helpers.

Only `ManageAppTool` gets `[McpServerToolType]`. Helper classes must not.

## Backup

- All app updates must retrieve current app metadata and navigation first.
- All app navigation updates must retrieve current sitemap XML first.
- Backup failure blocks the update unless `backup=false`.

Backup path:

```text
.devkit/backups/apps/{safeAppName}_{appModuleId:N}_{yyyyMMddHHmmss}.app.json
```

Backup JSON:

```json
{
  "kind": "manage_app.snapshot",
  "timestampUtc": "2026-05-08T00:00:00Z",
  "appModuleId": "...",
  "appModuleIdUnique": "...",
  "appName": "...",
  "uniqueName": "...",
  "description": "...",
  "iconWebResourceId": "...",
  "siteMapId": "...",
  "appComponents": [
    {
      "componentType": 62,
      "objectId": "..."
    }
  ],
  "sitemapxml": "<SiteMap>...</SiteMap>"
}
```

## Validation Layers

1. JSON operation schema validation.
2. Dataverse entity existence validation for `add_item`.
3. Sitemap XSD validation after starter XML creation, navigation operations, and undo restore.
4. `ValidateAppRequest` after writes when `validate=true`.

## undo

Purpose: restore navigation from backup.

Required:

- `app`
- `operations`: backup file path

Flow:

1. Resolve app.
2. Read `.app.json` backup.
3. Confirm backup app ID matches current app.
4. Backup current app snapshot first when `backup=true`.
5. Validate restored sitemap XML against embedded SiteMap `.xsd` files.
6. Update `sitemap.sitemapxml`.
7. Run `ValidateAppRequest` when `validate=true`.
8. Return both backup paths and `Published: false`.

`undo` restores sitemap XML only. It does not delete app components that may have been added after the backup.

## Error Behavior

- Multiple app matches:
  - Return candidate list and stop.
- Missing sitemap on update:
  - Return error suggesting `create` for new app or a repair path if later supported.
- Removing last item:
  - Allow only if resulting sitemap still passes XSD and app validation. Otherwise block with validation details.
- Unsupported raw XML:
  - Return: `Raw sitemap XML is not supported by manage_app v1. Use operations or read schema://sitemapxml for reference.`
- Delete app/sitemap request:
  - Return: `manage_app does not delete app or sitemap records. Use Power Apps UI if deletion is required.`
- Raw Web API request for app/sitemap:
  - Return or redirect: `Do not use execute_webapi for model-driven app or sitemap creation/update. Use manage_app.`

## Cleanup

- Update `ExecuteWebApiTool.BlockedEndpoints` for `appmodules(`, `sitemaps(`, and `appmodulecomponents(` to redirect to `manage_app`.
- Delete the standalone sitemap tool and related private sitemap tool files after `manage_app` owns the needed logic.
- Remove all stale tool registration, disabled-tool, and resource-map references after deletion.
- Existing prompt docs that mention standalone sitemap management should be updated after implementation to use `manage_app`.
- Do not run full solution build after editing only MCP files. Follow the component-specific CLI build workflow from `.claude/rules/core-rule.md`.

## Acceptance Criteria

- `manage_app(action='undo', operations='<backup path>')` restores navigation XML from backup and does not publish.
- Mutating paths create `.app.json` backups when `backup=true`.
- XSD validation runs for starter XML, navigation update XML, and undo restore XML.
- No action deletes appmodule or sitemap records.
- Old standalone sitemap tool files and references are removed after `manage_app` is complete.
- CLI build passes.

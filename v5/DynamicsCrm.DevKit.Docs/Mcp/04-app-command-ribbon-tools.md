# 04 - App, Command, And Ribbon Tool Plan

Depends on:

- `00-resolution-contract.md`
- `01-shared-resolvers.md`
- Entity resolver from `02-schema-tools.md`

## Tools In Scope

- `manage_app`
- `manage_command`
- `manage_ribbon`
- app navigation helper

## SchemaName / LogicalName Impact

These tools do not derive new table or column `SchemaName` values.

Entity references in app navigation, command bars, and ribbon operations must resolve Display Name first and then write the canonical entity `LogicalName` into Dataverse metadata or XML.

## `manage_app`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageAppTool.cs`

Inputs:

- `app`
- `app_name`
- `solution_name`
- `icon_webresource`
- navigation operation `entity`

Current issue:

- `ResolveApp` queries app display `name` and `uniquename` together.
- It can prefer exact matches after mixed display/logical query.
- Entity names in navigation are exact logical.

Target:

- Resolve app by display `name` contains first, then `uniquename` contains.
- Keep GUID direct lookup for explicit GUIDs.
- Resolve `solution_name` through the shared solution resolver.
- Resolve `icon_webresource` by web resource Display Name first, then unique `name`, unless GUID is supplied.
- Resolve navigation `entity` values by entity Display Name first before writing sitemap XML.

Keep existing unpublished app read behavior.

## `manage_command`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageCommandTool.cs`

Inputs:

- `entity_name`
- `app_name`
- `javascript_webresource`
- `icon_webresource`
- labels for commands/flyouts

Target:

- Resolve `entity_name` Display Name first.
- Resolve `app_name` display first, then unique name fallback.
- Resolve JS/icon web resources display first, then unique name fallback.
- Command labels are UI labels; keep existing label matching unless a command has both display and logical fields to resolve.

Do not use `manage_command` for classic ribbon work. Preserve current tool-selection guidance.

## `manage_ribbon`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRibbonTool.cs`

Inputs:

- `entity_name`
- button labels and ids inside operations

Target:

- Resolve `entity_name` Display Name first before:
  - retrieving ribbon
  - updating ribbon XML
  - publishing
  - cleanup solution components
- Operation `label` fields are ribbon labels, not Dataverse metadata names. Keep existing label behavior.
- Web resource library names used by ribbon operations can remain strict unless a future task adds web resource resolution there.

## App Navigation Helper

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/App/AppNavigationOperationsHelper.cs`

Target:

- Do not make this helper call Dataverse directly unless it already receives resolver services.
- Prefer resolving operation entity names in `ManageAppTool` before passing operations to helper.
- Keep Area/Group/SubArea matching as FormXML/SiteMap XML references, not metadata Display Name logic.

## Acceptance Checks

- `manage_app(app: "Sales Hub")` resolves by app display name.
- If two apps contain `Sales`, and exactly one has display name equal `Sales`, resolve it.
- If two apps contain `Sales` and no exact display winner, return ambiguity error.
- `manage_app` navigation item with entity `Account` writes `Entity="account"`.
- `manage_command(entity_name: "Account", app_name: "Sales Hub")` resolves both before creating command.
- `manage_ribbon(entity_name: "Account")` retrieves account ribbon.

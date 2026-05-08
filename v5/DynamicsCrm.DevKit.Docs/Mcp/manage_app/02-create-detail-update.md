# manage_app Task 2: Create, Detail, Update, Validate

## Scope

Implement app discovery, details, create, metadata update, and app validation. Do not implement navigation mutations beyond starter sitemap creation.

Actions:

- `list`
- `detail`
- `create`
- `update`
- `validate`

## list

Reads `appmodule` and includes whether a sitemap exists by checking `appmodulecomponent` with `componenttype=62`.

Output columns:

- App Name
- Unique Name
- App ID
- Has SiteMap
- Description

## detail

Reads:

- `appmodule`: `appmoduleid`, `appmoduleidunique`, `name`, `uniquename`, `description`, `webresourceid`
- related `appmodulecomponent` rows
- associated `sitemap` XML when present

Text output should show a compact navigation tree:

```text
Area: Sales
  Group: Customers
    Entity: account
```

Structured output should include app IDs, sitemap ID, component summary, and parsed navigation.

## create

Required:

- `solution_name`
- `display_name`

Optional:

- `unique_name`
- `description`
- `icon_webresource`

Flow:

1. Resolve `solution_name` to:
   - solution unique name
   - publisher prefix
2. Derive `uniquename` if not provided:
   - sanitize `display_name`
   - prepend solution publisher prefix
   - example: display `Sales Hub Lite`, prefix `v5` -> `v5_SalesHubLite`
3. Check duplicate `appmodule.uniquename`; block if exists.
4. Resolve icon:
   - if `icon_webresource` is provided, resolve by GUID or web resource name.
   - only image web resources should be accepted: `png`, `jpg`, `svg`, `ico`, `gif`.
   - if empty, use the platform default icon ID used by Dataverse examples.
5. Create `appmodule` with:
   - `name`
   - `uniquename`
   - `webresourceid`
   - `description` when provided
6. Create starter sitemap XML with one default entity item for `account`.
7. Validate the starter sitemap XML against embedded sitemap XSD files before creating the `sitemap` record:
   - `SiteMap.xsd`
   - `SiteMapType.xsd`
8. Create `sitemap` record.
9. Add sitemap and account entity as app components using `AddAppComponentsRequest`:
   - sitemap component type `62`
   - entity component type `1`
10. Add both solution components using `AddSolutionComponentRequest`:
   - appmodule component type `80`
   - sitemap component type `62`
11. Run `ValidateAppRequest` when `validate=true`.
12. Return `Published: false` and a publish recommendation.

## Base Language Helper

Use the existing helper for starter sitemap LCID values:

```csharp
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;

var baseLanguage = McpHelper.GetBaseLanguageCode(_serviceClient);
```

`McpHelper.GetBaseLanguageCode(ServiceClient serviceClient)` queries `organization.languagecode` and falls back to `1033` when the query fails or returns no valid language.

## Starter Sitemap

```xml
<SiteMap>
  <Area Id="area_default" ResourceId="SitemapDesigner.NewArea" ShowGroups="true">
    <Titles>
      <Title LCID="{baseLanguage}" Title="Workspace" />
    </Titles>
    <Group Id="group_default" ResourceId="SitemapDesigner.NewGroup" IsProfile="false" ToolTipResourseId="SitemapDesigner.Unknown">
      <Titles>
        <Title LCID="{baseLanguage}" Title="Default" />
      </Titles>
      <SubArea Id="sa_account" Entity="account">
        <Titles>
          <Title LCID="{baseLanguage}" Title="Accounts" />
        </Titles>
      </SubArea>
    </Group>
  </Area>
</SiteMap>
```

`account` is used only to satisfy initial sitemap/app validation. The user can later remove or move it using `update_navigation`.

## update

Purpose: update app metadata, not navigation.

Supported fields:

- `display_name` -> `appmodule.name`
- `description` -> `appmodule.description`
- `icon_webresource` -> `appmodule.webresourceid`

Rules:

- Do not update `uniquename` after create unless a future task explicitly asks for it.
- Backup the current app snapshot before updating when `backup=true`.
- Do not publish.
- Optionally run `ValidateAppRequest`.

## validate

Purpose: call `ValidateAppRequest` / `ValidateApp` and show warnings/errors.

This action is read-only from a customization perspective and should not publish.

## Acceptance Criteria

- `manage_app(action='list')` lists model-driven apps and sitemap presence.
- `manage_app(action='detail', app='...')` shows metadata and parsed navigation.
- `manage_app(action='create', solution_name='TEST', display_name='My App')` creates appmodule, starter sitemap, app component associations, solution components, and does not publish.
- `manage_app(action='update', app='My App', description='...', icon_webresource='...')` updates metadata only and does not touch sitemap.
- Mutating outputs include `Published: no` and a next-step publish recommendation.


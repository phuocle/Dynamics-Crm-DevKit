# MCP publish analysis

Ngay phan tich: 2026-05-11

## Tom tat nhanh

Trong MCP tools hien tai co 2 noi goi `PublishAllXmlRequest`:

1. `publish_customizations`: goi `PublishAllXmlRequest` khi khong truyen target cu the nao (`entities` rong, `appmodules` rong, `include_global_optionset=false`, `include_sitemap=false`).
2. `manage_ribbon`: goi `PublishAllXmlRequest` khi `auto_publish=true` sau `update` hoac `undo` ribbon. Ly do da ghi ngay trong tool description: ribbon classic can `PublishAll`, entity-scoped publish khong du.

Con lai, cac publish khac phan lon dung `PublishXmlRequest` voi `ParameterXml` gioi han pham vi: entity, webresource, option set, appmodule, sitemap.

## PublishAll: MCP tool nao goi?

### `publish_customizations`

Source: `DynamicsCrm.DevKit.Cli/Mcp/Tools/PublishCustomizationsTool.cs`

Dieu kien:

- Neu khong co target cu the, bien `hasSpecificTargets=false`.
- Tool thuc thi:

```csharp
_serviceClient.Execute(new PublishAllXmlRequest());
```

Y nghia:

- Day la lenh publish toan bo customizations trong Dataverse environment.
- Phu hop khi can chot tat ca thay doi metadata, hoac khi khong biet chinh xac scope can publish.
- Nhanh gon ve API, nhung co blast radius lon va thuong cham hon publish theo scope.

### `manage_ribbon`

Source: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRibbonTool.cs`

Dieu kien:

- `action=update` hoac `action=undo`.
- `auto_publish=true`.
- Sau khi import ribbon solution thanh cong, tool goi `TryPublish(...)`.

Trong `TryPublish`:

```csharp
_serviceClient.Execute(new PublishAllXmlRequest());
```

Y nghia:

- `manage_ribbon` la tool duy nhat ngoai `publish_customizations` goi `PublishAll` truc tiep.
- Tool description noi ro: classic ribbon can `PublishAll` vi entity-scoped publish khong lam ribbon hien dung/du.
- Neu muon batch nhieu ribbon changes, truyen `auto_publish=false`, sau do goi `publish_customizations` mot lan. Luu y: neu goi `publish_customizations` khong target thi no se PublishAll; neu truyen `entities=...` thi no dung PublishXml theo scope, co the khong thay the duoc PublishAll cho classic ribbon.

## Cac lenh publish khac trong MCP tools

### `publish_customizations` voi target cu the

Source: `PublishCustomizationsTool.cs`

Khi co bat ky target nao, tool tao `PublishXmlRequest`:

```xml
<importexportxml>
  <entities>...</entities>
  <appmodules>...</appmodules>
  <optionsets>...</optionsets>
  <sitemaps>...</sitemaps>
</importexportxml>
```

Target duoc ho tro:

- `entities`: resolve display name/logical name sang logical name.
- `appmodules`: resolve GUID/display name/unique name sang appmodule id.
- `include_global_optionset=true`: publish tat ca global option sets bang `<optionset>all</optionset>`.
- `include_sitemap=true`: publish sitemap.

Day la lenh publish nen dung sau khi dat `auto_publish=false` o cac tool khac de gom nhieu thay doi lai publish mot lan.

### `manage_form`

Source: `ManageFormTool.cs`

Actions publish:

- `update`
- `rename`
- `undo`

Request:

```xml
<importexportxml>
  <entities>
    <entity>{objectTypeCode}</entity>
  </entities>
</importexportxml>
```

Ghi chu:

- Tool publish entity sau khi update `systemform`.
- Neu publish loi, thay doi form da duoc update nhung response tra status kieu `updated_publish_failed` hoac `renamed_publish_failed`, kem tip goi publish lai.

### `manage_view`

Source: `ManageViewTool.cs`

Actions publish:

- `create`
- `update`
- `rename`
- `set_default`
- `undo`

Request:

```xml
<importexportxml>
  <entities>
    <entity>{entityName}</entity>
  </entities>
</importexportxml>
```

Ghi chu:

- Scope publish la entity cua view (`returnedtypecode` hoac entity logical name da resolve).
- Publish fail khong luon rollback thay doi; response bao `*_publish_failed` de nguoi dung retry.

### `manage_webresource`

Source: `ManageWebResourceTool.cs`

Actions publish:

- `create`
- `update`
- `delete`

Request:

```xml
<importexportxml>
  <webresources>
    <webresource>{webResourceId}</webresource>
  </webresources>
</importexportxml>
```

Ghi chu:

- Day la publish theo web resource id, scope hep hon publish entity.
- `auto_publish=false` huu ich khi upload/update nhieu web resources roi publish sau.
- Hien tai `publish_customizations` khong co parameter `webresources`, nen neu tat `auto_publish` cho webresource thi cach publish lai trong MCP hien tai la PublishAll thong qua `publish_customizations()` khong target, hoac bo sung support webresource-specific publish sau nay.

### `manage_choice`

Source: `ManageChoiceTool.cs`

Actions publish:

- `update`, nhung chi khi thay doi can publish.

Request:

```xml
<importexportxml>
  <optionsets>
    <optionset>{optionSetName}</optionset>
  </optionsets>
</importexportxml>
```

Dieu kien `requiresPublish=true` khi co:

- doi display name
- doi description
- add option
- rename/update option
- update color

Khong goi publish trong cac truong hop:

- `create`: code ghi nhan new choice metadata duoc Dataverse auto-publish.
- remove-only update: code ghi nhan removed choices duoc Dataverse auto-publish.
- `list` va `detail`: read-only.

### `upsert_table`

Source: `UpsertTableTool.cs`

Actions publish:

- create table
- update table metadata

Request:

```xml
<importexportxml>
  <entities>
    <entity>{entityName}</entity>
  </entities>
</importexportxml>
```

Ghi chu:

- Publish fail duoc xem la non-critical: table update/create da xong, response `Published: no`.
- `auto_publish=false` dung khi tao table roi con tao column/relationship/form/view tiep.

### `upsert_column`

Source: `UpsertColumnTool.cs`

Actions publish:

- create column
- update column metadata
- manage local picklist options

Request:

```xml
<importexportxml>
  <entities>
    <entity>{entityName}</entity>
  </entities>
</importexportxml>
```

Ghi chu:

- Publish scope la entity chua column.
- Neu tao nhieu columns, nen dat `auto_publish=false` va publish entity mot lan cuoi cung.

### `upsert_relationship`

Source: `UpsertRelationshipTool.cs`

Actions publish:

- `create_1n`
- `create_nn`
- `update`
- `add_target`

Request:

```xml
<importexportxml>
  <entities>
    <entity>{entityName}</entity>
  </entities>
</importexportxml>
```

Scope dang dung:

- `create_1n`: publish referencing entity.
- `create_nn`: publish entity1.
- `update`: publish entity suy ra tu relationship metadata.
- `add_target`: publish entity co polymorphic lookup.

Khong goi publish trong cac action:

- `delete`
- `remove_target`

Neu delete/remove target xong ma UI/metadata cache chua cap nhat, goi `publish_customizations(entities='...')` voi entity lien quan.

### `manage_command`

Source: `ManageCommandTool.cs`

Tool nay khong co param `auto_publish`. Sau mot so mutating actions, no goi `PublishEntity(...)` truc tiep:

```xml
<importexportxml>
  <entities>
    <entity>{entityLogicalName}</entity>
  </entities>
</importexportxml>
```

Ghi chu:

- Dung `PublishXmlRequest`, khong dung `PublishAll`.
- Cac response message co noi "Entity published."
- Vi khong co `auto_publish`, hien tai khong batch duoc publish cua `manage_command` qua parameter.

### `manage_app`

Source: `ManageAppTool.cs`

Tool nay co rule ro rang: `manage_app never publishes`.

Sau create/update/update_navigation/undo, response tra `NextStep`:

```text
Run publish_customizations(appmodules='<AppModuleId>') when ready.
```

Y nghia:

- App module publish duoc tach ra co chu y.
- Nguoi dung/agent phai goi `publish_customizations(appmodules='...')` luc san sang.

### `manage_environment_variable`

Source: `ManageEnvironmentVariableTool.cs`

Tool description ghi: "Usually no publish needed".

Ghi chu:

- Source hien tai khong co param `auto_publish`.
- Create/update/delete/clear environment variable definition/value khong goi `PublishXmlRequest` hay `PublishAllXmlRequest`.
- Neu UI/cache chua cap nhat, co the can refresh app/runtime hoac publish scope lien quan bang tool publish rieng, tuy nhien workflow chinh cua tool nay khong publish.

### `execute_webapi`

Source: `ExecuteWebApiTool.cs`

Tool nay khong publish. No chan raw endpoints:

- `PublishXml`
- `PublishAllXml`

Va huong nguoi dung sang `publish_customizations`.

Y nghia:

- Tranh viec agent goi raw Web API publish voi XML sai format.
- Gom logic resolve target, output status, dry-run vao specialized tool.

## `auto_publish` de lam gi?

`auto_publish` la cong tac "sau khi mutate metadata xong co publish ngay khong".

Mac dinh thuong la `true` vi:

- agent/user goi mot tool xong muon thay doi hien ra ngay trong model-driven app, maker portal, runtime metadata cache.
- giam viec quen publish sau khi tao/sua table, column, form, view, webresource, choice, relationship.

Khi nen giu `auto_publish=true`:

- Mot thay doi don le.
- Can verify ngay trong UI.
- Khong can batch nhieu metadata changes.

Khi nen dat `auto_publish=false`:

- Tao/sua nhieu components lien tiep: table + columns + relationships + form + view.
- Upload nhieu web resources.
- Muon tranh publish lap lai nhieu lan, tiet kiem thoi gian va giam load.
- Muon gom het thay doi roi goi `publish_customizations(...)` mot lan voi scope ro rang.

Pattern khuyen nghi:

```text
upsert_table(..., auto_publish=false)
upsert_column(..., auto_publish=false)
upsert_relationship(..., auto_publish=false)
manage_form(..., auto_publish=false)
manage_view(..., auto_publish=false)
publish_customizations(entities='new_entity')
```

Rieng `manage_ribbon`:

- `auto_publish=true` se chay `PublishAllXmlRequest`.
- `auto_publish=false` de batch ribbon changes, nhung cuoi cung classic ribbon co the van can PublishAll de hien dung.

Rieng `manage_app`:

- Khong co `auto_publish` workflow trong code.
- Luon tra next step de publish appmodule bang `publish_customizations(appmodules='...')`.

Rieng `manage_command`:

- Khong co `auto_publish`.
- Tool tu publish entity sau cac mutating actions hien co.

## Ket luan

Neu cau hoi la "publish all cua MCP tool nao da goi?", cau tra loi ngan gon la:

- `publish_customizations` khi goi khong co target.
- `manage_ribbon` khi `auto_publish=true` sau update/undo.

Neu muon han che PublishAll, dung publish theo scope:

- Entity metadata/form/view/column/table/relationship/modern command: `publish_customizations(entities='...')`.
- Web resource: de `manage_webresource` publish theo webresource id khi `auto_publish=true`; neu da batch voi `auto_publish=false`, MCP hien tai chua co `publish_customizations(webresources=...)`.
- Global choice: `publish_customizations(include_global_optionset=true)` hoac de `manage_choice` publish option set cu the.
- App module: `publish_customizations(appmodules='...')`.

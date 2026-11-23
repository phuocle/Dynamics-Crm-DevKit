# manage_dialog — implementation handoff

The owner confirmed D1–D5 for `manage_dialog`. Apply these decisions to the implementation when phase 2 begins. The [Vietnamese review](manage-dialog-review.html#review) records the same decisions. Phase 1 delivers the two design documents.

## 1. Pin the inputs and scope

- Target root `E:/src/github/Dynamics-Crm-DevKit/v5`. The MCP tool belongs to `DynamicsCrm.DevKit.Cli/Mcp` (net10.0). The shared FormXml grammar belongs to `DynamicsCrm.DevKit.Shared/Resources/xsd/FormXml.xsd`. The schema change must work for both `manage_form` and `manage_dialog`.
- Reference root: `E:/src/github/Dataverse-Dialog-Builder`. Use it as a read-only specification and fixture source. Source snapshot: Builder HEAD `83fdbee` plus the working tree. The loaded local WebResource JS bundle identifies itself as 1.0.675, SHA256 `46FCE283503FEBB6B02F02C09200F359ED73FDE19DF68CD017F02B27396D536A`. DevKit source inspected at `213e125d9`.
- Evidence order: actual registered types and palette → each component's traits/init/toFormXml and importer/exporter → four packaged examples and corpus → SDK writes and publish → DevKit XSD, tools and tests. The classid summary reports include main forms and mixed GUID casing. Use the registered source and fixture XML to identify controls.
- Read target `AGENTS.md` and applicable component skill at the relevant build stage. Product code belongs in DevKit. GrapesJS is a reference implementation for the wire format. Server-side rendering requires neither a browser nor installation of the Builder custom action.
- Verified offline in phase 1: loaded the working bundle via its default export with registration adapters (36 types, 30 blocks). Invoked its model serializers for sections (100/50/33), rowspan=3 (2 empty rows), 2 footer buttons (1 row, 2 cells), and Spacer (1 empty row). Parsed all 430 raw forms. Strictly validated 430 dialog XML files, 1,408 main forms and 4 inner solution payloads with both the on-disk schema set and a candidate shared XSD built in memory. Results are in step 6. No Dataverse call or product build was part of this analysis.

## 2. Owner decisions and acceptance criteria

| ID | Decision | Acceptance |
|---|---|---|
| D1 | Create with a typed `definition`. Update with ordered `operations`. | Raw FormXml is read/preview output. Reject raw XML text, XML file paths and definition replacement as create/update alternatives. |
| D2 | List and detail include managed and unmanaged dialogs. Update only an unmanaged type-8 record. Dialog deletion is unavailable. | Reject a delete action, root-level delete operation and undo-of-create that would delete a record. Rename and restore are updates and inherit the unmanaged guard. |
| D3 | Initialize each new dialog with a global footer. Global and per-tab footers may coexist freely. | Omitted global footer produces one empty global footer, even if a tab footer is present. Use an explicit global footer once. Preserve existing layouts when reading or patching. |
| D4 | Find schema mismatches across dialogs and entity forms. Correct the shared DevKit `FormXml.xsd` directly in phase 2. | Compile the same XSD for both consumers, pass the positive corpus and retain errors for malformed input. Step 6 records the verified changes. |
| D5 | Require a target unmanaged `solution_name` on create. Set the unique logical name exactly once using its publisher prefix. Only the display name can be renamed. | Validate uniqueness in the target organization. Keep `uniquename` immutable through update, rename, undo and retries. |

JSON field spellings in the examples, the backup layout and the separate publish-retry action remain implementation proposals. D1–D5 are binding.

## 3. Establish the MCP contract and target resolution

1. Add one tool entry in `DynamicsCrm.DevKit.Cli.Mcp.Tools`. Model `ManageFormTool.InvokeAsync` and its `McpToolInvocation.InvokeAsync(_connections, env, ...)` pattern. Resolve the correct connection/context/options per invocation. Helpers live under `Tools.Dialog`. Keep tool discovery on the entry class only.
2. Suggested inputs are `action`, `env`, read selector `unique_name`, `dialog_id`, display `name`, `definition`, `operations`, `backup_path`, and `solution_name`. Use the existing serialized-JSON and structured result conventions. The only create/update authoring payloads are `definition` for create and `operations` for update. Treat undo as restoration of the tool's identity-bound backup. Declare the single tool mutation-capable.
3. Define unambiguous selectors. Query `systemform.type = (int)FormType.Dialog` on **every** retrieval including ID reads, duplicate checks, publish and undo. Dialog creation has no entity-name argument. Display name can be localized and nonunique. For read by name return candidates on ambiguity. Require an exact target for writes. Apply paging for list; keep large XML in detail. Shared `MetadataService.GetEntityDialogFormsAsync` already filters active **and unmanaged** for the template picker. Only reuse that query if its scope matches the chosen action.
4. Suggested action contract:

| Action | Required input | Observable result / write boundary |
|---|---|---|
| list | optional unique/display filter | Page all matching type-8 records in the selected environment, including managed and unmanaged. Return their managed state. |
| detail | ID or unique name, optionally display-name search | Read either managed state. Return metadata, original FormXml and unsupported paths where present. |
| validate | create preview: `solution_name` + definition. Update preview: ID + operations. | Use the same target, publisher prefix, footer defaults and validators as the matching mutation. Return candidate XML and path-specific diagnostics without writing. |
| create | `solution_name` + definition with display name and logical-name suffix | Resolve unmanaged solution and publisher, derive and check the unique name, create once, associate component 60 with that solution and publish the returned GUID. |
| update | unmanaged ID + nonempty operations | Apply in order to the existing XML, reject root deletion or rekey, validate, back up and commit at most once. |
| rename | unmanaged ID + new display name | Update `systemform.name` only. Preserve the unique name referenced by `openDialog`. |
| undo | unmanaged ID + backup_path | Match environment, type, ID and immutable unique name. Restore mutable metadata and XML. A backup cannot remove the dialog or change its unique name. |
| publish | ID | Explicit recovery after successful save/failed publish, targeted to same type-8 ID. |

5. Suggested result carries status, dialogId, uniqueName, name, isManaged, changed, backupPath, published, solution association, diagnostics and next retry action where relevant. Match house casing and the structured-content schema. Confirm which existing output wrapper handles list vs detail vs mutation. Large detail output should follow MCP workspace conventions. Never claim published when only storage completed.

### Worked request and expected structure (proposed contract)

For example, call `action=create` with `solution_name=DialogExamples` and the following decoded `definition`. Assume the selected solution's publisher has `customizationprefix=pl`. The proposed `nameSuffix` field contains the author-chosen suffix `find_example`; the tool composes `pl_find_example` from the resolved prefix. Renaming the display name later to “Find a user” still leaves `openDialog("pl_find_example", …)` valid. Resolve an omitted languageCode from the organization base LCID (Builder fallback 1033).

```json
{
  "nameSuffix": "find_example",
  "name": "Find example",
  "description": "Search by user name",
  "languageCode": 1033,
  "parameters": [{"name":"pl_input_name","type":"SafeString"}],
  "events": [
    {"key":"load","type":"onload","library":"pl_/js/FindExample.js","function":"FindExample.OnLoad","passExecutionContext":true},
    {"key":"close","type":"onclick","library":"pl_/js/FindExample.js","function":"FindExample.Close","passExecutionContext":true}
  ],
  "header": [{"kind":"label","name":"pl_title","label":"Find example","isTitle":true}],
  "tabs": [{
    "name":"pl_main",
    "sections":[{"name":"pl_search","controls":[
      {"kind":"textbox","name":"pl_user_name","label":"User name","textboxtype":"Text","maxlength":100}
    ]}]
  }],
  "footer":[{"kind":"button","name":"pl_close","label":"Close","event":"close"}]
}
```

Expected paths: `/form/formparameters/querystringparameter[@name='pl_input_name']`, `/form/events/event[@name='onload']`, `/form/events/event[@attribute='pl_close']/Handlers/Handler`, `/form/tabs/tab/columns/column[@width='100%']/sections/section/rows/row/cell/control[@id='pl_user_name']`, and `/form/footer/rows/row/cell/control[@id='pl_close']`. A handler library is independent of loading an extra internal script. The example references an existing JS library.

Example update arguments after decoding `operations`:

```json
[
  {"action":"control","manage_action":"set_label","control_id":"pl_close","language_code":1033,"label":"Dismiss"}
]
```

Acceptance: only the selected cell label at LCID 1033 changes. Preserve the rest of the record, all identities, localized labels, handler order and PCF bindings. Do not infer the target from label text. For additional operation families (tab, section, header/footer, control, parameter, event and library), define supported verbs add/update/remove/move by collection, explicit parent and insertion order, and per-verb required fields. Child-node removal, if offered, edits the layout of a surviving dialog. Reject any attempt to delete the dialog itself or its root, including through an operation alias. Check references when removing an XML child. Do not silently rename JavaScript references outside the XML.

## 4. Implement the builder grammar, identities and writer

1. Use an XML API with escaping and invariant numeric and boolean formatting. Build nodes with exact element/attribute casing. Keep the original XML as the edit substrate on read, plus a typed view of supported parts. Preserve opaque attrs/nodes, text and comments when retaining their parent. Reject malformed XML and disable DTD/external resolution.
2. Initialize new definitions with one metadata model, optional global header, required tabs, and exactly one global footer. If omitted, synthesize `<footer id='{guid}'><rows><row /></rows></footer>` with a fresh GUID and no implicit buttons/events. Preserve any supplied footer buttons and tab footers. Accept global + tab footers without warnings or mutual exclusion. The Builder wire order is `formparameters?, events?, clientresources?, header?, tabs, footer?, controlDescriptions?`. Optionality here describes existing XML. Apply the footer default on create and its preview only. Reading, updating or restoring an existing tab-footer-only dialog must preserve its original shape.
3. Each authoring tab has a logical name and 1–3 sections. Each section owns one column and one section in that column. Structural writer: `tabs/tab/(labels,tabheader?,columns,tabfooter?)` and `columns/column/sections/section/(labels,rows)`. Enforce 1–100 tabs in strict create according to target XSD. The Builder add hook enforces the 3 maximum, not a minimum; the proposed minimum follows the new-tab scaffold and XSD columns. Use 100%; 50%/50%; 33%/33%/33%. All three 33 values are intentional. The editor calculates widths using sibling count minus the hidden legend; count actual sections in C#.
4. Tab attributes: brace-wrapped GUID, logical name, visible boolean, expanded=true, verticallayout=true, locklevel=0. Write one blank tab label at LCID. Section: GUID, name, labelwidth (115), showlabel based on nonblank text, visible (true), celllabelalignment Left/Center/Right and celllabelposition Left/Top, defaults Left/Left. Each normal body control gets its own row/cell. Place visibility on the cell, required/disabled where emitted on the control, and isunbound=true for Builder business controls. Model flags per control, including fixed booleans. Preserve imported binding attributes.
5. One optional global header with 0–2 labels; one optional tabheader per tab with labels and no existing two-label guard. Title/subtitle use `Label + IsTitle`. Authoring tool can choose a title convention, but the Builder permits flags independently. On create, emit the global footer and optionally one footer for each tab. Write sibling button cells inside **one** row in input order. No demonstrated button-count maximum in the editor. For rows > 1, replicate the specific writer's `rowspan` plus N−1 blank rows. An explicit Spacer is distinct from padding. Editor Hidden nodes never emit XML.
6. New generated IDs: cell/@id and control/@uniqueid are different GUIDs; control/@id is the logical name. Containers and handlers have their own IDs. Compare GUIDs case/braces-insensitively but preserve original representation on unmodified nodes. Preserve logical names and ID references on updates. On clone assign fresh GUIDs and require new logical names. Builder's clone handler treats Button specially and only clears its logical name, so explicitly test cloned button IDs for collisions.
7. Naming: `helper.js:isLogicalName` checks an underscore plus `^[a-z][0-9a-z_]+$`; `isValidId` lowercases before testing. These helpers and required/red rendering are not a central save-time validator. Introduce explicit, path-addressed validation for newly authored names, with uniqueness per reference namespace. Existing examples use `tab_1` and `tab_main`. Enforce the resolved solution publisher prefix on the new record’s unique name. Internal tab/section/control IDs retain their own naming conventions. Render XML using values, never UI sentinel values `???` or JS `undefined`. Check widths/lengths/row counts and option types only where applicable. For bounded rows use positive integers, preserve existing rows not targeted.
8. Version/metadata: root `<form>` is stored in `systemform.formxml`. The solution wrapper is `/Dialog/FormXml/forms[@type='dialog']/form`. Keep localized systemform name/description outside the FormXml cell labels. Normalize wrapper only in an explicitly designed importer. Require the exact inner payload at persistence.

## 5. Implement components and the ten PCF profiles

The following manifest uses actual GrapesJS type and block IDs. The field list uses Builder trait names, NOT an approved public MCP schema. Map the proposed public aliases (e.g. name → logicalname, isTitle → istitle, event → eventid) at the boundary. Normalize public kind tokens from the source file stem (e.g. `textbox`, `advfindandresult`). Distinguish authorable blocks from internal editor structures. Dynamic OptionSet adds logicaltype (0 global, 1 local), optionsetname, entitylogicalname01 for local, and default for single-select. Read the actual `init` and writer for conditionals not captured by static traits.

| Registered type / writer | Block ID | Trait names and fixed selector values | Class keys or sentinel (`guid.js`) |
|---|---|---|---|
| [MetadataComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/metadata/metadata.js) | internal / scaffold | logicalname, languagecode, description, fulldescription, eventid | — |
| [ParameterComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/metadata/parameter.js) | `block_parameter` | logicalname, parametertype<br>Values: SafeString, Boolean, Integer, Object, UniqueId, PositiveInteger, DateTime, EntityType | — |
| [EventComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/metadata/event.js) | `block_event` | uniqueid, eventtype, lib, func, context, parameters<br>Values: onload, onclick | — |
| [JavaScriptComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/metadata/javascript.js) | `block_javascript` | lib | — |
| [HeaderComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/container/header.js) | `block_header` | id | — |
| [TabsComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/container/tabs.js) | internal / scaffold | — | — |
| [TabComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/container/tab.js) | `block_tab` | id, logicalname, visible | — |
| [TabHeaderComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/container/tabheader.js) | `block_tabheader` | id | — |
| [FooterComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/container/footer.js) | `block_footer` | id | — |
| [TabFooterComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/container/tabfooter.js) | `block_tabfooter` | id | — |
| [SectionComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/container/section.js) | `block_section` | id, logicalname, label, labelwidth, alignment, position, visible<br>Values: Left, Center, Right, Top | — |
| [SectionsComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/container/sections.js) | internal / scaffold | — | — |
| [HiddenComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/hidden.js) | internal / scaffold | id, uniqueid | — |
| [LabelComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/label.js) | `block_label` | id, uniqueid, logicalname, label, rows, istitle, visible | `LABEL` |
| [ButtonComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/button.js) | `block_button` | id, uniqueid, logicalname, label, disabled, visible, eventid | `BUTTON` |
| [ControlTextBoxComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/textbox.js) | `block_textbox` | id, uniqueid, logicalname, label, textboxtype, maxlength, required, disabled, visible<br>Values: Text, Email, URL, Ticker Symbol, Phone | `SLT_TEXT`, `SLT_EMAIL`, `SLT_URL`, `SLT_TICKER_SYMBOL` |
| [ControlDateTimeComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/datetime.js) | `block_datetime` | id, uniqueid, logicalname, label, datetimetype, required, disabled, visible<br>Values: Date, DateAndTime, Time | `DATETIME` |
| [ControlNumberComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/number.js) | `block_number` | id, uniqueid, logicalname, label, numbertype, minvalue, maxvalue, precision, required, disabled, visible<br>Values: WholeNumber, DecimalNumber, FloatingPointNumber, Currency | `NUMBER_WHOLE_NUMBER`, `NUMBER_DECIMAL_NUMBER`, `NUMBER_FLOATING_POINT_NUMBER`, `NUMBER_CURRENCY` |
| [ControlLookupComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/lookup.js) | `block_lookup` | id, uniqueid, logicalname, label, entitylogicalname01, viewid01, entitylogicalname02, viewid02, entitylogicalname03, viewid03, entitylogicalname04, viewid04, entitylogicalname05, viewid05, disableviewpicker, disablequickfind, disablemru, autoresolve, usemainformdialogforcreate, usemainformdialogforedit, required, disabled, visible | `LOOKUP` |
| [ControlRegardingComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/regarding.js) | `block_regarding` | id, uniqueid, logicalname, label, required, disabled, visible | `REGARDING` |
| [ControlIframeComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/iframe.js) | `block_iframe` | id, uniqueid, logicalname, label, rows, url, parameters, security, scrolling, border, mobile, visible | `IFRAME` |
| [ControlSpacerComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/spacer.js) | internal / scaffold | id, uniqueid | — |
| [ControlTextAreaComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/textarea.js) | `block_textarea` | id, uniqueid, logicalname, label, maxlength, rows, required, disabled, visible | `SLT_TEXT_AREA` |
| [ControlDropDownComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/dropdown.js) | `block_dropdown` | id, uniqueid, logicalname, label, dropdowntype, required, disabled, visible<br>Values: Language, TimeZone, Duration | `DROPDOWN_LANGUAGE`, `DROPDOWN_TIMEZONE`, `DROPDOWN_DURATION` |
| [ControlOptionSetComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/optionset.js) | `block_optionset` | id, uniqueid, logicalname, label, optionsettype, dynamic, required, disabled, visible, logicaltype, optionsetname, entitylogicalname01, default<br>Values: OptionSet, MultiSelect OptionSet | `OPTIONSET_OPTIONSET`, `OPTIONSET_MULTISELECT_OPTIONSET`, `EMPTY` |
| [ControlTwoOptionsComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/twooptions.js) | `block_twooptions` | id, uniqueid, logicalname, label, twooptionstype, entitylogicalname01, optionsetname, default, required, disabled, visible<br>Values: Dropdown, Checkbox, Toggle | `TWOOPTIONS_DROPDOWN`, `TWOOPTIONS_CHECKBOX`, `EMPTY` |
| [ControlSubgridComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/subgrid.js) | `block_subgrid` | id, uniqueid, logicalname, label, entitylogicalname, viewids, perpage, contextual, quickfind, viewpicker, rows, visible | `SUBGRID_CHART` |
| [ControlChartComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/chart.js) | `block_chart` | id, uniqueid, logicalname, label, entitylogicalname, viewids, visualizationid, viewpicker, chartpicker, rows, visible | `SUBGRID_CHART` |
| [ControlAdvFindComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/advfind.js) | `block_advfind` | id, uniqueid, logicalname, para_entitylogicalname, para_fetchxml, para_isvalid, para_validationerrormessage, visible | `PLACE_HOLDER_CONTROL` |
| [ControlRichTextBoxComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/richtextbox.js) | `block_rich_text_box` | id, uniqueid, logicalname, lib, rows, visible | `PLACE_HOLDER_CONTROL` |
| [ControlEntityOptionSetComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/entityoptionset.js) | `block_entity_optionset` | id, uniqueid, logicalname, label, para_entitylogicalname, required, disabled, visible | `PLACE_HOLDER_CONTROL` |
| [ControlAdvFindResultComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/advfindresult.js) | `block_advfind_result` | id, uniqueid, logicalname, para_fetchxml, para_entitylogicalname, para_layout_xml, para_selected_records, rows, visible | `PLACE_HOLDER_CONTROL` |
| [ControlUploadComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/upload.js) | `block_upload` | id, uniqueid, logicalname, label, para_attachment_file_name, para_uploaded_file_size, visible | `PLACE_HOLDER_CONTROL` |
| [ControlAdvFindAndResultComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/advfindandresult.js) | `block_advfind_and_result` | id, uniqueid, logicalname, para_fetchxml, para_entitylogicalname, rows, visible | `PLACE_HOLDER_CONTROL` |
| [UnknownComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/unknown.js) | internal / scaffold | logicalname, row, control_description | — |
| [ControlMultiselectLookupComponent](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/control/multiselectlookup.js) | `block_multiselect_lookup` | id, uniqueid, logicalname, label, para_targetentities, para_isdisabled, para_disablemru, para_selectedentities, visible | `PLACE_HOLDER_CONTROL` |

### Per-control behavior for porting

| Control | Placement and serialization | Defaults explicitly set on the static control traits¹ |
|---|---|---|
| Hidden | Đại diện legend và phần tử DDBControlLabel/DDBControlControl trong canvas. Container bỏ qua khi xuất. Muốn ẩn trường nghiệp vụ dùng visible của trường. | — |
| Label | Một row/cell/control LABEL. IsTitle phân biệt tiêu đề và dòng phụ. Hỗ trợ rowspan và row bù. Section ẩn trait Is Title trong giao diện. | rows=1, istitle=0, visible=1 |
| Button | Một cell/control BUTTON. id là logicalname của nút, visible trên cell, disabled trên control. Handler onclick nằm ở cấp form. | disabled=0, visible=1 |
| TextBox | Text và Phone dùng SLT_TEXT cùng Format=SingleLineOfText. Phone thêm PhoneNumberControl. Email, URL, Ticker Symbol có classid riêng. Xuất MaxLength. | required=0, disabled=0, visible=1 |
| DateTime | Date xuất Format=Date. DateAndTime và Time cùng xuất Format=DateAndTime. Time thêm TimeControl với value trỏ tới logicalname. | required=0, disabled=0, visible=1 |
| Number | Bốn classid theo kiểu số. Có MinValue và MaxValue. Chỉ ba kiểu ngoài WholeNumber ghi Precision. | precision=0, required=0, disabled=0, visible=1 |
| Lookup | Tối đa 5 cặp entity/view. Mỗi TargetEntity có EntityLogicalName và DefaultViewId đầu danh sách nếu có. AvailableViewIds lấy từ viewid01. Picker, MRU và hộp thoại tạo/sửa có cờ riêng. | disableviewpicker=0, disablequickfind=0, disablemru=1, autoresolve=1, usemainformdialogforcreate=1, usemainformdialogforedit=1, required=0, disabled=0, visible=1 |
| Regarding | Dùng classid REGARDING riêng. Xuất isrequired, disabled, isunbound. Builder không sinh danh sách TargetEntities cho control này. | required=0, disabled=0, visible=1 |
| Iframe | Url, PassParameters, Security, Scrolling, Border, ShowOnMobileClient. Chiều cao theo rows và rowspan. URL chứa & cần escape khi ghi XML. | rows=5, parameters=0, security=0, scrolling=0, border=0, mobile=0, visible=1 |
| Spacer | toFormXml() trả về đúng một <row />. Phần mẫu placeholder trong comment không chạy. Khi mở XML, importer bỏ qua row thiếu cell/control. | — |
| TextArea | SLT_TEXT_AREA và Format=TextArea, mặc định maxlength=2000 và rows=3. Row đầu mang rowspan, sau đó là các row trống. | maxlength=2000, rows=3, required=0, disabled=0, visible=1 |
| Dropdown | Ba classid riêng cho Language, TimeZone và Duration. Khác nguồn dữ liệu với OptionSet. Không cần tham chiếu metadata choice. | required=0, disabled=0, visible=1 |
| OptionSet | OptionSet và MultiSelect OptionSet có classid riêng. Dynamic xuất OptionSetId bằng GUID rỗng. Tĩnh dùng OptionSetName global hoặc local. UI chỉ cho chọn mặc định với single select, bỏ sentinel −1. | dynamic=0, required=0, disabled=0, visible=1 |
| Two Options | Dropdown và Checkbox có classid riêng. Toggle dùng classid Checkbox kèm ToggleControl. Xuất OptionSetName và DefaultValue nếu có. Serializer còn có nhánh dynamic, trait UI không cung cấp nó. | required=0, disabled=0, visible=1 |
| Subgrid | SUBGRID_CHART, ChartGridMode=Grid, AutoExpand=Auto. TargetEntityType, ViewId đầu tiên, ViewIds khi có nhiều view, RecordsPerPage, contextual/quickfind/viewpicker. | perpage=5, contextual=0, quickfind=0, viewpicker=0, rows=5, visible=1 |
| Chart | Cùng classid với Subgrid. ChartGridMode=Chart, AutoExpand=Fixed, VisualizationId và các cờ picker. Khi mở, Builder xét có VisualizationId để phân loại. | viewpicker=0, chartpicker=0, rows=5, visible=1 |
| Advanced Find | Placeholder + ConditionBuilderControl. Bốn tham chiếu parameter gồm entitylogicalname, fetchxml, isvalid và validationerrormessage. | visible=1 |
| RichTextBox | Placeholder + RichTextEditorControl. configUrl tùy chọn (static=true). Cho phép thiếu parameters khi không đặt cấu hình, có rowspan. | rows=5, visible=1 |
| Entity OptionSet | Placeholder + EntityOptionSetControl. PCF value tham chiếu một parameter SafeString chứa logical name của bảng. | required=0, disabled=0, visible=1 |
| Advanced Find Result | Placeholder + FetchXmlResultsViewer. Nhận entity, FetchXML, layout XML, selected records. PCF selectedrecords dùng type=Multiple, parameter ở dialog vẫn là SafeString. | rows=5, visible=1 |
| Upload | Placeholder + FileUploaderControl. value trỏ logicalname của control. filename và size lần lượt tham chiếu parameter SafeString và Integer. | visible=1 |
| Advanced Find And Result | Placeholder + RollupQueryEditorControl. Bind entitylogicalname và fetchxml. Có rows. Đây là một control, không phải hai control ghép vào một row. | rows=5, visible=1 |
| Unknown | Lưu row và control_description từ importer, phát lại ở hai vị trí. Importer parse rồi dựng lại XML nên không bảo đảm giữ nguyên case, nhiều handler, nhiều cell hay mọi node ngoài row. | — |
| Multiselect Lookup | Placeholder + PartyListWrapper. Bốn parameter SafeString theo selector của Builder, kể cả isDisabled và disableMru. Tên phần tử PCF phân biệt hoa thường. | visible=1 |

¹ UI placeholders such as `???` are excluded. Per-component `init` can set additional model attributes; inspect before choosing defaults. XML tag casing and exact GUIDs follow the linked writers and [GUID constants](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/guid.js). The helper `EMPTY` in options writers is an OptionSetId sentinel, never a PCF class ID or a generated form ID.

| Class key | Wire value |
|---|---|
| `EMPTY` | `{00000000-0000-0000-0000-000000000000}` |
| `LABEL` | `{39354E4A-5015-4D74-8031-EA9EB73A1322}` |
| `BUTTON` | `{00AD73DA-BD4D-49C6-88A8-2F4F4CAD4A20}` |
| `SLT_TEXT` | `{4273EDBD-AC1D-40D3-9FB2-095C621B552D}` |
| `SLT_EMAIL` | `{ADA2203E-B4CD-49BE-9DDF-234642B43B52}` |
| `SLT_TICKER_SYMBOL` | `{1E1FC551-F7A8-43AF-AC34-A8DC35C7B6D4}` |
| `SLT_URL` | `{71716B6C-711E-476C-8AB8-5D11542BFB47}` |
| `SLT_TEXT_AREA` | `{E0DECE4B-6FC8-4A8F-A065-082708572369}` |
| `DATETIME` | `{5B773807-9FB2-42DB-97C3-7A91EFF8ADFF}` |
| `NUMBER_WHOLE_NUMBER` | `{C6D124CA-7EDA-4A60-AEA9-7FB8D318B68F}` |
| `NUMBER_DECIMAL_NUMBER` | `{C3EFE0C3-0EC6-42BE-8349-CBD9079DFD8E}` |
| `NUMBER_FLOATING_POINT_NUMBER` | `{0D2C745A-E5A8-4C8F-BA63-C6D3BB604660}` |
| `NUMBER_CURRENCY` | `{533B9E00-756B-4312-95A0-DC888637AC78}` |
| `LOOKUP` | `{270BD3DB-D9AF-4782-9025-509E298DEC0A}` |
| `IFRAME` | `{FD2A7985-3187-444E-908D-6624B21F69C0}` |
| `DROPDOWN_LANGUAGE` | `{671A9387-CA5A-4D1E-8AB7-06E39DDCF6B5}` |
| `DROPDOWN_TIMEZONE` | `{7C624A0B-F59E-493D-9583-638D34759266}` |
| `DROPDOWN_DURATION` | `{AA987274-CE4E-4271-A803-66164311A958}` |
| `OPTIONSET_OPTIONSET` | `{3EF39988-22BB-4F0B-BBBE-64B5A3748AEE}` |
| `OPTIONSET_MULTISELECT_OPTIONSET` | `{4AA28AB7-9C13-4F57-A73D-AD894D048B5F}` |
| `SUBGRID_CHART` | `{E7A81278-8635-4D9E-8D4D-59480B391C5B}` |
| `TWOOPTIONS_DROPDOWN` | `{67FAC785-CD58-4F9F-ABB3-4B7DDC6ED5ED}` |
| `TWOOPTIONS_CHECKBOX` | `{B0C6723A-8503-4FD7-BB28-C8A06AC933C2}` |
| `REGARDING` | `{F3015350-44A2-4AA0-97B5-00166532B5E9}` |
| `PLACE_HOLDER_CONTROL` | `{F9A8A302-114E-466A-B582-6771B2AE0D92}` |

### PCF and event integrity

| Variant | Exact customControl.name | Parameter bindings (source / XML type) |
|---|---|---|
| Advanced Find | MscrmControls.ConditionBuilder.ConditionBuilderControl | entitylogicalname, fetchxml, validationerrormessage → SafeString / SingleLine.Text · isvalid → Boolean / Boolean |
| Advanced Find Result | MscrmControls.Grid.FetchXmlResultsViewer | entitylogicalname, fetchxml, layoutxml → SafeString / SingleLine.Text · selectedrecords → SafeString / Multiple |
| Advanced Find And Result | MscrmControls.RollupQuery.RollupQueryEditorControl | entitylogicalname, fetchxml → SafeString / SingleLine.Text |
| Upload | MscrmControls.FieldControls.FileUploaderControl | value → control.id / SingleLine.Text · filename → SafeString / SingleLine.Text · size → Integer / Whole.None |
| Multiselect Lookup | MscrmControls.AppCommon.PartyListWrapper | targetEntities, selectedEntities, isDisabled, disableMru → SafeString / SingleLine.Text |
| Entity OptionSet | MscrmControls.FieldControls.EntityOptionSetControl | value → parameter SafeString / SingleLine.Text |
| RichTextBox | MscrmControls.RichTextEditor.RichTextEditorControl | configUrl → literal / SingleLine.URL, static=true · optional |
| DateTime · Time | MscrmControls.FieldControls.TimeControl | value → control.id / DateAndTime.DateAndTime |
| TextBox · Phone | MscrmControls.FieldControls.PhoneNumberControl | value → control.id / SingleLine.Phone |
| Two Options · Toggle | MscrmControls.FieldControls.ToggleControl | value → control.id / TwoOptions |

1. For each new PCF instance emit `controlDescriptions/controlDescription[@forControl='{control.uniqueid}']`, then four `customControl` entries with formFactor 0..3, identical name and binding shape. The seven placeholder variants use `PLACE_HOLDER_CONTROL`. The remaining three augment an underlying native class. Preserve imported factor-specific overrides. `metadata/pcf.js` exists but is absent from the registration array and palette. Arbitrary PCF creation is a separate capability.
2. Distinguish parameter declarations (dialog type), literal PCF values, control self-references, and binding value types (PCF property type). Definition references a declared name, not runtime FetchXML or selected record values. Multiselect Lookup parameters are SafeString even for isDisabled / disableMru. Reject a missing reference, wrong type or orphan forControl with the input path and expected type.
3. Generate `formparameters/querystringparameter` with name + type from the eight registered selector options. Preserve additional types on read (Long in the corpus, Double and UnsignedInt in the XSD). Preserve original language labels and update the requested LCID only. In create use the metadata LCID for all generated labels.
4. `events/event[@name]`: emit application=false, active=false; preserve exact `Handlers/Handler` case. Handler: functionName, libraryName with the `$webresource:` prefix exactly once, brace-wrapped handlerUniqueId, enabled=true, escaped parameters, passExecutionContext. onload has no attribute target. onclick uses `event/@attribute = button.control.id`; the editor's transient `eventid` is the handler GUID. Distinct button bindings require distinct events. Shared library/function allowed. Do not group by function name. The writer walks all Event components, including all onload entries, independently of metadata.eventid. Validate unbound onclick or multiply claimed event keys on create.
5. Extra included scripts serialize separately as `clientresources/internalresources/clientincludes/internaljscriptfile[@src='$webresource:...']`. A handler can reference a JS library without a matching clientinclude. JS is caller-supplied, and the Builder examples addOnChange, set parameters, close and moveTo from that JS. Test inclusion, quotes/apostrophes in handler parameters and URLs containing ampersands.
6. Specific native controls: for Lookup take the first selected view per populated target as DefaultViewId; emit AvailableViewIds from the first target's list. For Chart and Subgrid emit ViewId from the first selection, ViewIds only for more than one. Check target entity, savedquery view IDs, and savedqueryvisualization for a chart, using the selected environment. OptionSet: resolve global vs local choices using metadata, preserve encoded local name, use empty GUID only for dynamic; omit −1 DefaultValue for OptionSet, preserve valid 0 for TwoOptions. If splitting a local composite name, match metadata, since both entity and attribute names may contain underscores. Check references to declared web resources and their types where data is available. Avoid inventing option values.

## 6. Implement a preserving reader and validator

1. On detail/read, keep original XML plus identities, LCIDs, node positions, raw children and attrs. For semantic display, read native control by classid ignoring GUID case. Disambiguate placeholder via uniqueid → controlDescription/@forControl → customControl.name. SLT_TEXT + PhoneNumberControl, checkbox + ToggleControl, DateTime + TimeControl select variants. Shared SUBGRID_CHART is recognized by presence of VisualizationId in the reference importer; also inspect ChartGridMode and surface disagreements without rewriting the node.
2. Reproduce known importer limits as regression fixtures, **not** as destructive edits. It normalizes tag names, reads one label/handler or the first PCF entry on many paths, collects sections from multiple columns into one collection, skips rows without a single cell/control, fails to copy imported tab.visible, and seeds a header via OpenDDB. Its Unknown model emits a reconstructed row and control description, which does not preserve the whole original tree. Track changes on the original XML. Leave absent headers, nondefault widths, sibling sections, multicell rows, internal handlers, extra namespaces, factor-specific parameters, order and captions/localizations intact.
3. For an unmanaged dialog with an unsupported structural mutation return an exact path and reason, leaving original intact. For a supported leaf edit (e.g. one control label), prove that every untouched subtree remains semantically equivalent; compare opaque subtrees directly. A no-op returns without update, backup or publish. Keep fresh IDs allocated only for newly inserted objects. Reject duplicate selectors/invalid IDs and detect stale versions/competing edits before persistence. Use an atomic SDK precondition if supported for this table and environment; explicitly document residual races otherwise. Do not silently overwrite a newer value or imply an atomic guarantee from a reread alone.
4. Layer checks: XML well-formedness and root → record and references → structure and types for authored parts → compatible XSD diagnostics → environment-dependent metadata → materialized candidate. Keep UI highlighting separate from blocking requirements. Do not attempt to validate field controls as table attributes: authored dialog controls are unbound. Libraries, entities, views, charts, choice metadata and LCID are separate reference lookups.
5. Use one shared schema for both consumers. In phase 2, edit `DynamicsCrm.DevKit.Shared/Resources/xsd/FormXml.xsd` as specified below. Keep schema validation active. Address each grammar mismatch in the XSD. Test negative inputs as well as valid existing forms and dialogs.
6. Verify new/edited semantic invariants before a write: one target, supported parent, count/sequence of sections, create-only footer default and unrestricted footer coexistence, unique logical IDs and GUIDs, valid type/width/rowspan, references in events/custom descriptions and metadata; collect per-path diagnostics where possible. The validator should give identical semantic errors in validate, dry-run and real mutation.

### D4 · Changes verified against both corpora

Strict .NET validation counts **documents with zero diagnostics**. For the solution fixtures, extract only `/Dialog/FormXml/forms[@type='dialog']/form`. For the raw corpora, validate the root form of each `*.xml` file. Each run compiled `FormXml.xsd` with `RibbonCore.xsd`, `RibbonTypes.xsd` and `RibbonWSS.xsd`. The candidate was built entirely in memory.

| Input cohort | Existing DevKit XSD | In-memory shared XSD |
|---|---:|---:|
| `DataverseDialogBuilder.Others/dialogs` | 404/430 | 430/430 |
| `DataverseDialogBuilder.Others/main` (recursive) | 1,379/1,408 | 1,408/1,408 |
| Builder and Examples solution dialogs | 2/4 | 4/4 |

Apply the following changes together, with exact XML casing.

1. **Lookup parameters**. In `FormXmlControlType/parameters`, move the existing `TargetEntities` element and its typed subtree into the existing repeated choice that contains `DisableViewPicker`, `DefaultViewId` and `AvailableViewIds`. Remove the obsolete single-member alternative so that the XSD 1.0 content model stays deterministic. Add optional booleans `useMainFormDialogForCreate` and `useMainFormDialogForEdit` there. Retain required `TargetEntity/EntityLogicalName`. Two packaged fixtures, `msdyn_CompleteBookings.xml`, `SaveAndReRouteDialog.xml` and a Work Order form cover different combinations.
2. **Tab content mode**. Add optional `tab/@contenttype` with the observed values `singleComponent` and `expandAvailableSpace`. It occurs in the failing diagnostics of 24 dialog files and 10 main forms. Keep the attribute scoped to the tab.
3. **Display flags**. Add optional boolean `form/@showinformselector`. Extend `FormXmlHeaderFooterType` at the global header declaration with optional booleans `showbody`, `showcommandbar`, `showtabnavigator`. Extend it at the global footer declaration with optional boolean `visible`. Keep the existing tabheader/tabfooter declarations. See `msdynmkt_newjourneytemplate.xml` and `Account form for Conversation Customer Card.xml`.
4. **Timeline parameters**. Extend the choice containing `UClientActivityCardMap` with optional `UClientEnableWhatsNewFilter` (`xs:boolean`) and `UClientActivitiesConfigurationJSON` (`xs:string`). Main form examples include `Enhanced full case form.xml` and `Sales Insights.xml`.

Four negative controls each produced one diagnostic against the in-memory candidate: non-boolean `DisableViewPicker`, undeclared lookup parameter, missing `EntityLogicalName` inside a target, and non-boolean global `header/@showcommandbar`. Use these as regression cases. Rerun both full corpora and the four packaged fixtures against the **installed** schema after implementation. These measurements concern XML validation, not a live Dataverse publish.

## 7. Persist, back up, recover and publish

1. Use the connection selected by `env`. Mirror `RoleGateHelper.EnsureSystemAdministrator` for mutation actions and use DevKit's `DataverseMutationExecutor`/context gates for actual writes. Check dry-run before backup, create/update, solution association, publish, or write-related waits. Return preview/diagnostics and ID of existing target where known.
2. Require `solution_name` on create, including dry-run. Resolve it in the selected environment with `SolutionResolverHelper.Resolve(..., requireUnmanaged: true)` and read `Prefix` from `publisher.customizationprefix`. Form `<prefix>_<suffix>` in lowercase once. Take the suffix from the definition (proposed `nameSuffix`). The caller cannot override the publisher prefix. Reject an empty suffix, invalid final logical name, missing prefix or duplicate type-8 unique name, including a managed collision. Reject silent upsert and silent renaming on collision. Create `systemform` with the derived `uniquename`, `type=8`, `name`, `description`, inner `formxml` and `introducedversion="1.0.0.0"`. Capture the nonempty GUID returned by the SDK.
3. Associate the created systemform with the resolved solution as component type 60. Scope every by-ID action to type 8. Guard existing-record mutations against `ismanaged=true`. Persist `uniquename` only in the initial create payload. Update and rename must reject rekey requests, including via operations. Undo compares the backup unique name to the present one and never writes that field. A solution selection is mandatory for create. Other actions identify the existing dialog using the selected environment and record identity.
4. Backup before update/rename: include versioned format, organization ID, type, formid, uniqueName, name, description, exact source FormXml, timestamp and change context. Use a workspace path scoped to the new tool, such as `.devkit/manage_dialog/<org-id>/<form-id>_<timestamp+nonce>.json`. Write atomically without collision. Fail before mutation if backup fails. Validate backup identity and contents on undo. Inputs supplied by the caller remain reusable. Do not use manage_form's private backup writer as-is; it strips whitespace and stores a smaller metadata set. Use a last-seen version/fingerprint to prevent restoring over subsequent unrelated edits unless the selected contract explicitly permits it.
5. Publish the single saved record using `PublishXmlRequest.ParameterXml`: `<importexportxml><dialogs><dialog>GUID</dialog></dialogs></importexportxml>`. Follow the context assertion and metadata wait pattern in `PublishHelper`; preserve wait scaling for tests. Record saved ID and per-step statuses on association or publish failure. Retry only the missing stage: publish by ID, or re-associate the existing component with solution using existing solution-management behavior. Never turn a retry into a second create. A timeout after an uncertain SDK create warrants a lookup by unique name/known ID and reconciliation before attempting another write. Detect duplicates/ambiguity explicitly; a check-before-create alone cannot guarantee concurrent uniqueness.
6. Consecutive no-op edits leave IDs intact. Emit the backup path in both success and partial results if one was written. Undo of rename restores display name and the correct XML/description. Dry-run of undo and publish never calls a mutation API.

## 8. Add discovery, examples and verification in the implementation phase

- Wire resources in `Mcp/Resources/InstructionResources.cs` and `Mcp/Tools/ReadInstructionTool.cs`, check embedding by the CLI project, and map a dedicated instruction resource to `nameof(Tools.ManageDialogTool)` in `McpServerHost.ToolResourceMap`. Confirm it is enabled by the existing discovery mechanism and absent from `DisabledToolSet`. Suggested URI `docs://instructions_for_manage_dialog`. Include contract examples, enum/default tables, PCF bindings, source/target paths, warning/error examples, dry-run and retry responses. Use method-level tool attributes and structured result models consistent with other mixed-operation tools.
- Reuse existing form infrastructure selectively: env routing, role and dry-run gates, solution resolver and association, error/partial wrappers, workspace and publish conventions. `FormXmlOperationsRunner`, entity field metadata, dashboard publish and the full-form backup format have entity/dashboard assumptions. Keep existing tools' output, files and tests compatible. `Shared/Logic/JsDialog.cs` and `TsDialog.cs` generate client typings and helpers from subsets of XML; their readers are additional consumers, not a lossless authoring model. Inspect their tests without widening the feature to generation changes.
- Use isolated SDK fakes/spies and a fixed GUID provider or GUID-insensitive structural matching for fixtures. Validate binding equality against the same generated GUID, not just its format. Include preservation checks with fixed imported IDs. Avoid asserting incidental indentation or node attribute order for newly rendered forms. Test untouched content on edit separately.

### Acceptance matrix

| Scenario | Observable assertion |
|---|---|
| Registry parity | Classify all 36 registered types. Support the 30 palette blocks in their valid parents. Metadata, Tabs and Sections are structural. Hidden is editor-only, Spacer is empty row, Unknown is opaque preservation. No phantom standalone PCF block. |
| One-page golden | Extract inner form from `pl_find_user_id`. Verify 2 SafeString params, title/subtitle IsTitle true/false, one tab/column, two TextBox controls, footer with two button cells, and onclick links. Strict XSD succeeds. |
| Wizard golden | Read and patch the existing `pl_another_assign`: two tabs each with one column, two Tab Headers and two Tab Footers, one global Header, no global Footer; two query parameters, one onload and six onclick events. Next references tab_2, Back references tab_1. Lookup has systemuser and team. Preserve the missing global footer on update. A new definition with the same tab footers also gets the create-default global footer. Preserve parameter quotes. |
| Section geometry | 1, 2, 3 sections → [100], [50,50], [33,33,33]%; reject new 4th and zero-column tab. Retain imported custom widths and existing 2+ sections in the same column. Test a section with blank vs populated label. |
| Region placement | Create with omitted footer, supplied footer, and tab footers with or without an explicit global footer. Assert exactly one global footer at create, no duplicate and no warning for coexistence. A read/leaf edit of the footerless wizard preserves its shape. Keep the existing parent/child and per-scope cardinalities. |
| Identifiers and LCID | Duplicate control logical name, duplicate GUID, missing button target, handler GUID vs control.uniqueid mixup, malformed names, metacharacters, non-ASCII and two LCIDs. Change one language only. Create never returns empty GUID; stable GUIDs survive no-op and patch. |
| Rows and flags | rows=1 vs 3, padding vs independent spacer, hidden tab and invisible cell, enabled/disabled and required flags. Checked XML paths and proper boolean lexical representation. |
| Native controls | Test every documented subtype and switch: text/email/url/ticker/phone, 3 date/time modes, 4 numbers with precision only where applicable, iframe with query parameters, 3 dropdowns, dynamic/global/local/single/multi OptionSet, valid false/zero TwoOptions default, Regarding and Lookup 1/5 targets, chart/grid 1/multiple views. |
| PCF | Table-driven all 10 mappings, formFactor 0..3, same forControl as owning uniqueid, exact names/type, absent RTE config and static config, party list strings, upload size Integer, missing/wrong parameter. Preserve custom imported factor-specific behavior on unrelated patch. |
| Real-world constructs | `addresourcedialog.xml` multiple sections per column, `advanced_find_members.xml` multicell row, `OneDriveFolderSettings.xml` noncanonical width, `CloseCampaignActivityDialog.xml` multi-handler, `AddAttachmentToActivity.xml` InternalHandlers, `CreateAutomatedMessage.xml` Long, `AssociateCase.xml` non-Button footer, `DocumentManagement.SharepointSitesValidationForm.Dialog.xml` non-Label header. Preserve them on detail/leaf edits or document unsupported structural operations per D2. |
| XSD compatibility | Use the shared XSD in both code paths. Reproduce 430/430 dialogs, 1,408/1,408 main forms and 4/4 packaged fixtures. Each of the four negative cases above must fail. Also run existing Quick Create/dashboard validation tests. |
| Input and targeting | List and detail include both managed states. Managed update/rename/undo, delete action, root-delete operation, raw XML create/update, wrong-env backup and wrong-type ID must fail before write. Test missing/managed solution, missing publisher prefix, duplicate unique name, and display rename followed by undo with the original unique name unchanged. |
| Mutation lifecycle | Role required for create/update/rename/undo/publish. In dry-run count zero create/update/associate/publish calls and zero backup writes. On a real write use type=8, the SDK GUID, the solution-derived unique name, targeted PublishXml and component=60 in the required solution. On second invocation with same data, no accidental recreation. |
| Partial completion | Simulate SDK create failure, post-create association/publish failure (created GUID retained), pre-write backup failure, duplicate simultaneous updates and publish retry. Ensure no per-operation partial write; partial results report the committed stage and enough information to recover. |
| Catalog and compatibility | Fresh process lists exactly one enabled manage_dialog entry, method reports mixed tool annotations and result schema, instructions retrievable by both resource and read_instruction. Existing manage_form Quick Create/dashboard/operations behavior remains covered. |

### Build and runtime verification once implementation is authorized

1. Inspect the actual diff and schema embedding, then run the D4 positive and negative checks against the on-disk shared XSD. Run the required CLI build, targeted net10.0 dialog tests plus affected manage_form/resource/host tests. Example from target root:

   ```powershell
   dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj
   dotnet test DynamicsCrm.DevKit.Cli.UnitTests/DynamicsCrm.DevKit.Cli.UnitTests.csproj --framework net10.0 --filter "FullyQualifiedName~ManageDialog|FullyQualifiedName~ManageForm|FullyQualifiedName~McpServerHost"
   ```

   Adjust filter to the actual names of new serializer/resource/PCF test classes. Report executed counts per group. No full packaging is needed unless requested.
2. Changes in CLI/Mcp require the component release/install skill `devkit-skill-build-cli`, using its shared release script; verify source version 4.44.44.44, restored build-date placeholder, and post-build working tree. Restart the active MCP connector, call `whoami`, and compare runtime version, build timestamp, process start time and assembly SHA to `Published/<version>/` manifest per repository guidance.
3. On that fresh process: discover tool + resource, run list and detail on an authorized fixture; validate the one-page and wizard create definitions using the required solution; inspect returned FormXml. Against a dry-run connection confirm a mutation preview with no write. Use a designated unmanaged test dialog/environment only when live mutation is separately in scope. Exercise create → targeted publish → detail → patch/rename → undo with ID checks. If authorized to verify presentation, open at least Find User Id and Another Assign and inspect title/subtitle, column geometry, tab navigation, footer actions and output params. Record what was actually rendered and observed, and any remaining environment-specific gaps.

## Source map and reproducible checks

| Question | Primary sources and entry points |
|---|---|
| What is registered? | [Registry GrapesJS](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/components/index.js), [Palette](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/blocks.js), [Bundle WebResource đã kiểm tra](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.WebResource/js/DataverseDialogBuilder.js). Compare addType and BlockManager.add independently. |
| Which constraints are editor-level? | [Ràng buộc khi thêm component](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/index.js), [Khung dialog](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/const.js), container model toFormXml and component:add handlers. |
| How are XML and references emitted? | [GetFormXml và PCF](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/helper.js), [ClassID gốc](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/guid.js), [Open, Demo, Save & Publish](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.GrapesJS/src/commands.js). Search GetFormXml, commandOpen/loadForm, createDemoDialog, command_save_publish. |
| How are records persisted? | [UpsertDialog và GetForm](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.CustomAction/Action.cs), [Manifest solution](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.Examples/DataverseDialogBuilder.Examples.SolutionPackager/DataverseDialogBuilderExamples/Both/Other/Solution.xml), [Microsoft Learn · SystemForm.Type](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/systemform#type). Search UpsertDialog, GetForm, PublishXml and the exact FormId in RootComponents. |
| Where are the golden fixtures? | [Find User Id · XML](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.Examples/DataverseDialogBuilder.Examples.SolutionPackager/DataverseDialogBuilderExamples/Both/Dialogs/{6ddd87bc-7f24-ef11-840b-00224856e701}.xml), [Another Assign · XML](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.Examples/DataverseDialogBuilder.Examples.SolutionPackager/DataverseDialogBuilderExamples/Both/Dialogs/{e3a261b4-aa27-ef11-840a-0022485a448f}.xml), [Open · XML](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.SolutionPackager/DataverseDialogBuilder/Both/Dialogs/{1c89987d-7d19-ef11-840a-6045bd211fe9}.xml), [Preview · XML](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.SolutionPackager/DataverseDialogBuilder/Both/Dialogs/{ac8bd21c-7e19-ef11-840a-6045bd211fe9}.xml), [AnotherAssign.js](../../../../Dataverse-Dialog-Builder/DataverseDialogBuilder.Examples/DataverseDialogBuilder.Examples.WebResource/js/AnotherAssign.js). |
| What can the existing tool do? | [ManageFormTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageFormTool.cs), [Các ca kiểm thử manage_form](../../DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/ManageForm/ManageFormFakeXrmEasyFullCoverageTests.cs), [MetadataService.cs](../../DynamicsCrm.DevKit.Shared/Services/MetadataService.cs), [FormXml.xsd](../../DynamicsCrm.DevKit.Shared/Resources/xsd/FormXml.xsd). Read also `Cli/Mcp/Tools/Form`, `Tools/Helper/PublishHelper.cs` and `Cli.UnitTests/Cli/Logic/{JsDialog,TsDialog}Tests.cs` under the DynamicsCrm.DevKit component folders. |
| Where does the solution prefix come from? | [SolutionResolverHelper.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/SolutionResolverHelper.cs) resolves solution → publisher → customizationprefix. Use its `Prefix` result. |

Recompute evidence using namespace-free XPath on each parsed root `form` under `DataverseDialogBuilder.Others/dialogs/*.xml` (430 files in this snapshot). Count **files with at least one match**, not node count.

| XPath | Matching files |
|---|---:|
| `/form/header` / `/form/footer` | 410 / 302 |
| `/form/tabs/tab/tabheader` / `/form/tabs/tab/tabfooter` | 6 / 39 |
| `/form[header and tabs/tab/tabheader]` / `/form[footer and tabs/tab/tabfooter]` | 4 / 0 |
| `/form/tabs[count(tab)>1]` | 17 |
| `//column/sections[count(section)>1]` | 47 |
| `//section/rows/row[count(cell)>1]` | 11 |
| `//column[@width and not(@width='100%' or @width='50%' or @width='33%')]` | 4 |
| `/form/controlDescriptions/controlDescription` | 243 |
| `//event/Handlers[count(Handler)>1]` / `//InternalHandlers` | 9 / 92 |
| `//querystringparameter[@type='Long']` | 1 |

Strict schema reproduction: load `FormXml.xsd`, `RibbonCore.xsd`, `RibbonTypes.xsd`, `RibbonWSS.xsd` into one .NET XmlSchemaSet; compile once. Take `/Dialog/FormXml/forms[@type='dialog']/form` from each packaged fixture, validate its OuterXml as its own document and record the full diagnostic. Schema acceptance, editor authorability, and successful Dataverse publish are three separately testable outcomes.


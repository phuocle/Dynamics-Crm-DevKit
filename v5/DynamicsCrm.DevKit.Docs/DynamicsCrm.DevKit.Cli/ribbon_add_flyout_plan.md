# Plan: `add_flyout_static` và `add_flyout_dynamic` cho `build_ribbon_xml`

> Tham chiếu template thực tế: `DynamicsCrm.DevKit.Tool\Resources\CreateEntity\RibbonDiffXml.xml`

---

## Hai loại flyout

| | `add_flyout_static` | `add_flyout_dynamic` |
|---|---|---|
| **Menu items** | Cố định, khai báo trong XML | Load động qua JS (`PopulateDynamically="true"`) |
| **Dùng khi** | Items biết trước, ít thay đổi | Items phụ thuộc data/context lúc runtime |
| **Phức tạp** | Trung bình | Cao hơn — 3 CommandDefinitions/surface |
| **Template** | Plan mới (session này) | File `RibbonDiffXml.xml` có sẵn |

---

## PHẦN 1: `add_flyout_static`

### Cấu trúc XML sinh ra

```xml
<!-- CustomActions -->
<CustomAction Id="devkit.v4_mcp.ExportData.CustomAction"
              Location="Mscrm.Form.v4_mcp.MainTab.Save.Controls._children"
              Sequence="86">
  <CommandUIDefinition>
    <FlyoutAnchor Id="devkit.v4_mcp.ExportData.FlyoutAnchor"
                  Command="devkit.v4_mcp.ExportData.Command"
                  LabelText="$LocLabels:devkit.v4_mcp.ExportData.FlyoutAnchor.LabelText"
                  Alt="$LocLabels:devkit.v4_mcp.ExportData.FlyoutAnchor.LabelText"
                  ToolTipTitle="$LocLabels:devkit.v4_mcp.ExportData.FlyoutAnchor.ToolTipTitle"
                  ToolTipDescription="$LocLabels:devkit.v4_mcp.ExportData.FlyoutAnchor.ToolTipDescription"
                  TemplateAlias="isv"
                  Sequence="86"
                  ModernImage="$webresource:v4_/images/export.svg"
                  PopulateOnlyOnce="true">
      <Menu Id="devkit.v4_mcp.ExportData.Menu">
        <MenuSection Id="devkit.v4_mcp.ExportData.MenuSection"
                     Sequence="10"
                     DisplayMode="Menu16">
          <Controls Id="devkit.v4_mcp.ExportData.Controls">
            <Button Id="devkit.v4_mcp.ExportData.ExportExcel.Button"
                    Command="devkit.v4_mcp.ExportData.ExportExcel.Command"
                    LabelText="$LocLabels:devkit.v4_mcp.ExportData.ExportExcel.Button.LabelText"
                    Alt="$LocLabels:devkit.v4_mcp.ExportData.ExportExcel.Button.LabelText"
                    ToolTipTitle="$LocLabels:devkit.v4_mcp.ExportData.ExportExcel.Button.ToolTipTitle"
                    Sequence="10" />
            <Button Id="devkit.v4_mcp.ExportData.ExportPdf.Button"
                    Command="devkit.v4_mcp.ExportData.ExportPdf.Command"
                    LabelText="$LocLabels:devkit.v4_mcp.ExportData.ExportPdf.Button.LabelText"
                    Alt="$LocLabels:devkit.v4_mcp.ExportData.ExportPdf.Button.LabelText"
                    ToolTipTitle="$LocLabels:devkit.v4_mcp.ExportData.ExportPdf.Button.ToolTipTitle"
                    Sequence="20" />
          </Controls>
        </MenuSection>
      </Menu>
    </FlyoutAnchor>
  </CommandUIDefinition>
</CustomAction>

<!-- CommandDefinitions -->
<CommandDefinition Id="devkit.v4_mcp.ExportData.Command">
  <EnableRules />
  <DisplayRules />
  <Actions />
</CommandDefinition>

<CommandDefinition Id="devkit.v4_mcp.ExportData.ExportExcel.Command">
  <EnableRules>
    <EnableRule Id="devkit.v4_mcp.ExportData.ExportExcel.EnableRule" />
  </EnableRules>
  <DisplayRules />
  <Actions>
    <JavaScriptFunction Library="$webresource:v4_/scripts/mcp.js"
                        FunctionName="MCP.exportExcel">
      <CrmParameter Value="PrimaryControl" />
      <CrmParameter Value="PrimaryItemIds" />
    </JavaScriptFunction>
  </Actions>
</CommandDefinition>

<!-- RuleDefinitions/EnableRules -->
<EnableRule Id="devkit.v4_mcp.ExportData.ExportExcel.EnableRule">
  <CustomRule FunctionName="MCP.isEnabled"
              Library="$webresource:v4_/scripts/mcp.js">
    <CrmParameter Value="PrimaryControl" />
    <CrmParameter Value="PrimaryItemIds" />
  </CustomRule>
</EnableRule>

<!-- LocLabels -->
<LocLabel Id="devkit.v4_mcp.ExportData.FlyoutAnchor.LabelText">
  <Titles><Title description="Export Data" languagecode="1033" /></Titles>
</LocLabel>
```

### Input schema

```json
{
  "action": "add_flyout_static",
  "surface": "form",
  "label": "Export Data",
  "sequence": 86,
  "modern_image": "v4_/images/export.svg",
  "tooltip_title": "Export Data",
  "tooltip_description": "Export record in various formats",
  "items": [
    {
      "label": "Export to Excel",
      "library": "v4_/scripts/mcp.js",
      "function": "MCP.exportExcel",
      "enable_library": "v4_/scripts/mcp.js",
      "enable_function": "MCP.isEnabled",
      "sequence": 10,
      "modern_image": "v4_/images/excel.svg"
    },
    {
      "label": "Export to PDF",
      "library": "v4_/scripts/mcp.js",
      "function": "MCP.exportPdf",
      "enable_library": "v4_/scripts/mcp.js",
      "enable_function": "MCP.isEnabled",
      "sequence": 20
    }
  ]
}
```

### Fields

| Field | Required | Default | Mô tả |
|-------|----------|---------|-------|
| `action` | ✓ | — | `"add_flyout_static"` |
| `surface` | ✓ | — | `form` \| `main_grid` \| `sub_grid` |
| `label` | ✓ | — | Label của flyout anchor |
| `items` | ✓ (≥1) | — | Mảng child buttons |
| `sequence` | — | 85 | Thứ tự trên ribbon |
| `modern_image` | — | null | Web resource image |
| `tooltip_title` | — | = label | |
| `tooltip_description` | — | null | |
| **items[].label** | ✓ | — | |
| **items[].library** | ✓ | — | Web resource JS cho click |
| **items[].function** | ✓ | — | JS function cho click |
| **items[].enable_library** | ✓ | — | Web resource JS cho enable check |
| **items[].enable_function** | ✓ | — | JS function cho enable check |
| **items[].sequence** | — | 10, 20, 30... | Auto nếu không cung cấp |
| **items[].modern_image** | — | null | |
| **items[].tooltip_title** | — | = item.label | |

### ID Convention

```
flyoutSlug = GenerateSlug(label)       // "ExportData"
itemSlug   = GenerateSlug(item.label)  // "ExportExcel"

CustomAction.Id     = "devkit.{entity}.{flyoutSlug}.CustomAction"
FlyoutAnchor.Id     = "devkit.{entity}.{flyoutSlug}.FlyoutAnchor"
FlyoutAnchor.Command= "devkit.{entity}.{flyoutSlug}.Command"
Menu.Id             = "devkit.{entity}.{flyoutSlug}.Menu"
MenuSection.Id      = "devkit.{entity}.{flyoutSlug}.MenuSection"
Controls.Id         = "devkit.{entity}.{flyoutSlug}.Controls"

Button.Id           = "devkit.{entity}.{flyoutSlug}.{itemSlug}.Button"
Button.Command      = "devkit.{entity}.{flyoutSlug}.{itemSlug}.Command"
EnableRule.Id       = "devkit.{entity}.{flyoutSlug}.{itemSlug}.EnableRule"
```

### Nodes sinh ra

| Node | Số lượng |
|------|---------|
| CustomAction | 1 |
| CommandDefinition | 1 (flyout empty) + N (items) |
| EnableRule | N |
| DisplayRule | 1 (form only, trên flyout command) |
| LocLabel | 2-3 (flyout) + 2-3×N (items) |

---

## PHẦN 2: `add_flyout_dynamic`

> Pattern từ `DynamicsCrm.DevKit.Tool\Resources\CreateEntity\RibbonDiffXml.xml`

### Cơ chế hoạt động

Dynamic flyout dùng **3 CommandDefinitions** cho mỗi surface:

1. **`CommandFlyout`** — command của FlyoutAnchor anchor. Chứa enable rule (kiểm tra flyout có enabled không) + empty actions. Form surface có thêm DisplayRule `FormNotCreate`.

2. **`CommandItems`** — `PopulateQueryCommand` của FlyoutAnchor. Gọi khi user click mở menu. JS function nhận context và **trả về danh sách menu items động**.

3. **`CommandItem`** — hidden button command. Gọi khi user click một item trong dynamic menu. JS function nhận `CommandProperties` (chứa item ID được chọn).

Pattern **hidden flyout** (Sequence 5, `Command="Mscrm.Disabled"`): placeholder để menu không bị trống khi chưa load, bắt buộc theo pattern DevKit.

### Cấu trúc XML sinh ra (surface = form)

```xml
<!-- 1. Hidden flyout placeholder -->
<CustomAction Id="devkit.v4_mcp.Action.Hidden.CustomAction.Form"
              Location="Mscrm.Form.v4_mcp.MainTab.Save.Controls._children"
              Sequence="84">
  <CommandUIDefinition>
    <FlyoutAnchor Id="devkit.v4_mcp.Action.Hidden.Form"
                  Command="Mscrm.Disabled"
                  LabelText="$LocLabels:devkit.v4_mcp.Action.Label.Hidden"
                  Alt="$LocLabels:devkit.v4_mcp.Action.Label.Hidden"
                  ToolTipTitle="$LocLabels:devkit.v4_mcp.Action.Label.Hidden"
                  ToolTipDescription="$LocLabels:devkit.v4_mcp.Action.Label.Hidden"
                  TemplateAlias="isv"
                  Sequence="84"
                  PopulateOnlyOnce="true"
                  ModernImage="$webresource:v4_/images/logo.svg">
      <Menu Id="devkit.v4_mcp.Action.Hidden.Menu.Form">
        <MenuSection Id="devkit.v4_mcp.Action.Hidden.MenuSection.Form"
                     Sequence="5" DisplayMode="Menu16">
          <Controls Id="devkit.v4_mcp.Action.Hidden.Controls.Form">
            <Button Id="devkit.v4_mcp.Action.Hidden.Button.Form"
                    Command="devkit.v4_mcp.Action.CommandItem.Form"
                    LabelText="$LocLabels:devkit.v4_mcp.Action.Label.Hidden"
                    Alt="$LocLabels:devkit.v4_mcp.Action.Label.Hidden"
                    ToolTipTitle="$LocLabels:devkit.v4_mcp.Action.Label.Hidden"
                    ToolTipDescription="$LocLabels:devkit.v4_mcp.Action.Label.Hidden"
                    Sequence="5" />
          </Controls>
        </MenuSection>
      </Menu>
    </FlyoutAnchor>
  </CommandUIDefinition>
</CustomAction>

<!-- 2. Actual dynamic flyout -->
<CustomAction Id="devkit.v4_mcp.Action.CustomAction.Form"
              Location="Mscrm.Form.v4_mcp.MainTab.Save.Controls._children"
              Sequence="85">
  <CommandUIDefinition>
    <FlyoutAnchor Id="devkit.v4_mcp.Action.FlyoutAnchor.Form"
                  Command="devkit.v4_mcp.Action.CommandFlyout.Form"
                  LabelText="$LocLabels:devkit.v4_mcp.Action.Label.Action"
                  Alt="$LocLabels:devkit.v4_mcp.Action.Label.Action"
                  ToolTipTitle="$LocLabels:devkit.v4_mcp.Action.Label.Action"
                  ToolTipDescription="$LocLabels:devkit.v4_mcp.Action.Label.Action"
                  TemplateAlias="isv"
                  Sequence="85"
                  PopulateDynamically="true"
                  PopulateQueryCommand="devkit.v4_mcp.Action.CommandItems.Form"
                  PopulateOnlyOnce="true"
                  ModernImage="$webresource:v4_/images/logo.svg" />
  </CommandUIDefinition>
</CustomAction>

<!-- CommandFlyout: enable/display rules for anchor itself -->
<CommandDefinition Id="devkit.v4_mcp.Action.CommandFlyout.Form">
  <EnableRules>
    <EnableRule Id="devkit.v4_mcp.Action.EnableRule.Form" />
  </EnableRules>
  <DisplayRules>
    <DisplayRule Id="devkit.v4_mcp.Action.DisplayRule.FormNotCreate" />
  </DisplayRules>
  <Actions />
</CommandDefinition>

<!-- CommandItems: populate dynamic menu -->
<CommandDefinition Id="devkit.v4_mcp.Action.CommandItems.Form">
  <EnableRules />
  <DisplayRules />
  <Actions>
    <JavaScriptFunction FunctionName="MCP.ribbonLoadItems"
                        Library="$webresource:v4_/scripts/mcp.ribbon.js">
      <CrmParameter Value="CommandProperties" />
      <CrmParameter Value="PrimaryControl" />
      <CrmParameter Value="PrimaryEntityTypeName" />
      <CrmParameter Value="PrimaryItemIds" />
      <StringParameter Value="Form" />
    </JavaScriptFunction>
  </Actions>
</CommandDefinition>

<!-- CommandItem: handle click on dynamic item -->
<CommandDefinition Id="devkit.v4_mcp.Action.CommandItem.Form">
  <EnableRules />
  <DisplayRules />
  <Actions>
    <JavaScriptFunction FunctionName="MCP.ribbonItemClick"
                        Library="$webresource:v4_/scripts/mcp.ribbon.js">
      <CrmParameter Value="CommandProperties" />
      <CrmParameter Value="PrimaryControl" />
      <CrmParameter Value="PrimaryEntityTypeName" />
      <CrmParameter Value="PrimaryItemIds" />
      <StringParameter Value="Form" />
    </JavaScriptFunction>
  </Actions>
</CommandDefinition>

<!-- EnableRule for flyout anchor -->
<EnableRule Id="devkit.v4_mcp.Action.EnableRule.Form">
  <CustomRule FunctionName="MCP.ribbonIsEnabled"
              Library="$webresource:v4_/scripts/mcp.ribbon.js">
    <CrmParameter Value="CommandProperties" />
    <CrmParameter Value="PrimaryControl" />
    <CrmParameter Value="PrimaryEntityTypeName" />
    <CrmParameter Value="PrimaryItemIds" />
  </CustomRule>
</EnableRule>

<!-- DisplayRule (form only) -->
<DisplayRule Id="devkit.v4_mcp.Action.DisplayRule.FormNotCreate">
  <FormStateRule State="Create" InvertResult="true" />
</DisplayRule>

<!-- LocLabels -->
<LocLabel Id="devkit.v4_mcp.Action.Label.Hidden">
  <Titles><Title description="Hidden" languagecode="1033" /></Titles>
</LocLabel>
<LocLabel Id="devkit.v4_mcp.Action.Label.Action">
  <Titles><Title description="Actions" languagecode="1033" /></Titles>
</LocLabel>
```

### Input schema

```json
{
  "action": "add_flyout_dynamic",
  "surface": "form",
  "label": "Actions",
  "sequence": 85,
  "modern_image": "v4_/images/logo.svg",
  "tooltip_title": "Actions",
  "tooltip_description": "Available actions for this record",
  "library": "v4_/scripts/mcp.ribbon.js",
  "load_function": "MCP.ribbonLoadItems",
  "click_function": "MCP.ribbonItemClick",
  "enable_function": "MCP.ribbonIsEnabled"
}
```

### Fields

| Field | Required | Default | Mô tả |
|-------|----------|---------|-------|
| `action` | ✓ | — | `"add_flyout_dynamic"` |
| `surface` | ✓ | — | `form` \| `main_grid` \| `sub_grid` |
| `label` | ✓ | — | Label hiển thị của flyout |
| `library` | ✓ | — | Web resource JS chứa cả 3 functions |
| `load_function` | ✓ | — | JS function populate menu items (`CommandItems`) |
| `click_function` | ✓ | — | JS function xử lý click item (`CommandItem`) |
| `enable_function` | ✓ | — | JS function kiểm tra enable (`CommandFlyout` EnableRule) |
| `sequence` | — | 85 | Thứ tự trên ribbon |
| `modern_image` | — | null | Web resource image |
| `tooltip_title` | — | = label | |
| `tooltip_description` | — | null | |

> **Lưu ý**: Cả 3 functions (`load_function`, `click_function`, `enable_function`) cần nằm trong cùng 1 `library` để đơn giản. User có thể dùng cùng library file.

### ID Convention

```
flyoutSlug = GenerateSlug(label)    // "Actions"
surfaceSuffix = "Form" | "HomepageGrid" | "SubGrid"

// Hidden flyout
HiddenCustomAction.Id = "devkit.{entity}.{flyoutSlug}.Hidden.CustomAction.{surfaceSuffix}"
HiddenFlyout.Id       = "devkit.{entity}.{flyoutSlug}.Hidden.{surfaceSuffix}"
HiddenMenu.Id         = "devkit.{entity}.{flyoutSlug}.Hidden.Menu.{surfaceSuffix}"
HiddenMenuSection.Id  = "devkit.{entity}.{flyoutSlug}.Hidden.MenuSection.{surfaceSuffix}"
HiddenControls.Id     = "devkit.{entity}.{flyoutSlug}.Hidden.Controls.{surfaceSuffix}"
HiddenButton.Id       = "devkit.{entity}.{flyoutSlug}.Hidden.Button.{surfaceSuffix}"

// Dynamic flyout
CustomAction.Id       = "devkit.{entity}.{flyoutSlug}.CustomAction.{surfaceSuffix}"
FlyoutAnchor.Id       = "devkit.{entity}.{flyoutSlug}.FlyoutAnchor.{surfaceSuffix}"

// CommandDefinitions
CommandFlyout.Id      = "devkit.{entity}.{flyoutSlug}.CommandFlyout.{surfaceSuffix}"
CommandItems.Id       = "devkit.{entity}.{flyoutSlug}.CommandItems.{surfaceSuffix}"
CommandItem.Id        = "devkit.{entity}.{flyoutSlug}.CommandItem.{surfaceSuffix}"

// Rules
EnableRule.Id         = "devkit.{entity}.{flyoutSlug}.EnableRule.{surfaceSuffix}"
DisplayRule.Id        = "devkit.{entity}.{flyoutSlug}.DisplayRule.FormNotCreate"  // form only
```

### Nodes sinh ra

| Node | Số lượng |
|------|---------|
| CustomAction | 2 (hidden + dynamic) |
| CommandDefinition | 3 (CommandFlyout + CommandItems + CommandItem) |
| EnableRule definition | 1 |
| DisplayRule definition | 1 (form only) |
| LocLabel | 2 (Hidden + Action label) |
| **Total nodes** | **~9** |

---

## So sánh tổng quan

| Khía cạnh | `add_button` | `add_flyout_static` | `add_flyout_dynamic` |
|-----------|-------------|--------------------|--------------------|
| CustomActions | 1 | 1 | 2 |
| CommandDefs | 1 | 1 + N | 3 |
| EnableRules | 1 | N | 1 |
| DisplayRules | 1 (form) | 1 (form) | 1 (form) |
| LocLabels | 2-3 | 2-3 + 2×N | 2 |
| JS functions user cần viết | 1 click + 1 enable | N click + N enable | 1 load + 1 click + 1 enable |
| Độ phức tạp code | thấp | trung bình | **cao** |

---

## Notes quan trọng từ template

1. **Child buttons không có `TemplateAlias`** — confirmed từ template (MenuSection buttons).
2. **`Alt` attribute** trên FlyoutAnchor và Button — dùng cùng LocLabel với LabelText.
3. **Hidden flyout dùng `Command="Mscrm.Disabled"`** — built-in Dataverse command, không cần khai báo.
4. **`CommandItem.Form`** (hidden button command) tái sử dụng cho cả hidden flyout lẫn dynamic items — dynamic menu items gọi lại command này.
5. **`StringParameter Value="Form|SubGrid|HomepageGrid"`** trong Actions giúp JS function biết context.
6. **`Mscrm.AnySelection`** trong template dành cho grid — với form surface không cần.

---

## Notes từ HtShared.js (`BuildRibbon` pattern)

> File: `D:\azure\huutoangroup\CRM-HTG_ABIZ\Abiz.Ht.WebResource\lib\HtShared.js`
> Hàm `BuildRibbon(BUTTONS)` — wrapper tạo 3 functions cho dynamic flyout.

### BUTTONS array shape

```javascript
const BUTTONS = [
    {
        label: "Export Excel",   // hiển thị trên menu
        icon: "v4_/images/excel.svg",
        sequence: 10,
        isenable: false,         // runtime flag, set bởi CommandItemEnable
        click: async (para) => { /* ... */ },
        enable: async (para) => true  // async, trả về bool
    }
];
```

### 1. `CommandItemLoad` (= `load_function` trong `add_flyout_dynamic`)

- Được gọi khi user click mở flyout menu (`PopulateQueryCommand`).
- Set `CommandProperties["PopulationXML"]` với XML string:
  ```xml
  <Menu Id="devkit.{entity}.{slug}.Menu.{surface}">
    <MenuSection Id="devkit.{entity}.{slug}.MenuSection.{surface}" Sequence="10" DisplayMode="Menu16">
      <Controls Id="devkit.{entity}.{slug}.Controls.{surface}">
        <Button Id="{BUTTON_ID}" Command="{commandItem}" Sequence="10"
                LabelText="{label}" ModernImage="$webresource:{icon}" />
      </Controls>
    </MenuSection>
  </Menu>
  ```
- Chỉ render những button có `BUTTONS[i].isenable === true`.
- `CommandItemEnable` phải được gọi **trước** để set flag `isenable`.

### 2. `CommandItemClick` (= `click_function` trong `add_flyout_dynamic`)

- Được gọi khi user click một item trong dynamic menu — command là `CommandItem.{surface}`.
- Dispatch bằng cách so sánh:
  ```javascript
  CommandProperties.SourceControlId === getId(label)
  // getId = (label) => label.replace(" ", "_").toUpperCase()
  // "Export Excel" → "EXPORT_EXCEL"
  ```
- **⚠️ Button ID trong PopulationXML phải khớp với `getId(label)`** — tức là `label.replace(" ", "_").toUpperCase()`.

### 3. `CommandItemEnable` (= `enable_function` trong `add_flyout_dynamic`)

- Được gọi để kiểm tra flyout anchor có enabled không (`EnableRule`).
- Loop qua BUTTONS, gọi `await BUTTONS[i].enable(para)` để set `BUTTONS[i].isenable`.
- Trả về `true` nếu ít nhất 1 button enabled → flyout anchor hiện.

### Implication cho implementation `add_flyout_dynamic`

| Vấn đề | Kết luận |
|--------|----------|
| Button ID trong dynamic menu | `label.replace(" ", "_").toUpperCase()` — KHÔNG dùng GenerateSlug |
| Tất cả dynamic items dùng chung 1 Command | `CommandItem.{surfaceSuffix}` — không phải per-item command |
| `CommandItemEnable` cần gọi trước `CommandItemLoad` | Đây là JS responsibility, không ảnh hưởng XML |
| `PopulationXML` structure | Menu → MenuSection → Controls → Button[] — XML string trong JS |

---

## Implementation Steps

### Phase 1: `add_flyout_static`
1. Add `case "add_flyout_static":` vào switch
2. `ExecuteAddFlyoutStatic()` — parse items[], validate, build XML
3. Helper `BuildFlyoutAnchorElement()` — FlyoutAnchor + Menu + MenuSection + Controls + Buttons
4. Per item: CommandDefinition + EnableRule + LocLabels
5. Flyout anchor: empty CommandDefinition + LocLabels
6. DisplayRule (form only) trên flyout command
7. Update tool description

### Phase 2: `add_flyout_dynamic`
1. Add `case "add_flyout_dynamic":` vào switch
2. `ExecuteAddFlyoutDynamic()` — validate single library + 3 functions
3. Generate hidden flyout XML (placeholder)
4. Generate dynamic flyout XML (no Menu child, has PopulateDynamically)
5. 3 CommandDefinitions per surface
6. EnableRule + DisplayRule (form only)
7. 2 LocLabels (Hidden + Action)
8. Update tool description

### Ước tính thời gian
- `add_flyout_static`: ~3 giờ
- `add_flyout_dynamic`: ~2.5 giờ (ít fields hơn nhưng XML phức tạp hơn về structure)

---

## PHẦN 3: Implementation Detail — `add_flyout_static` (Form Only)

> Scope: chỉ `surface = "form"`. Grid surfaces sẽ bổ sung sau.

### 3.1 Method signature

```csharp
private (string error, string summary) ExecuteAddFlyoutStatic(XDocument ribbonDoc, string entityName, JsonElement op)
```

Gọi từ switch trong `ExecuteOperation()`:

```csharp
case "add_flyout_static":
    return ExecuteAddFlyoutStatic(ribbonDoc, entityName, op);
```

### 3.2 Parse & Validate

```csharp
// ── Required ──
var surface = GetJsonString(op, "surface");           // "form"
var label   = GetJsonString(op, "label");             // "Export Data"

if (string.IsNullOrWhiteSpace(surface))
    return ("Error: add_flyout_static requires 'surface' (form, main_grid, or sub_grid).", null);
if (string.IsNullOrWhiteSpace(label))
    return ("Error: add_flyout_static requires 'label' (flyout display text).", null);

surface = surface.Trim().ToLowerInvariant();
if (!SurfaceLocationMap.ContainsKey(surface))
    return ($"Error: Invalid surface '{surface}'. Valid: form, main_grid, sub_grid.", null);

// ── Items array ──
if (!op.TryGetProperty("items", out var itemsProp) || itemsProp.ValueKind != JsonValueKind.Array)
    return ("Error: add_flyout_static requires 'items' array with at least 1 item.", null);

var items = itemsProp.EnumerateArray().ToList();
if (items.Count == 0)
    return ("Error: add_flyout_static requires 'items' array with at least 1 item.", null);

// ── Validate each item ──
var autoSequence = 10;
foreach (var item in items)
{
    var itemLabel    = GetJsonString(item, "label");
    var itemLib      = GetJsonString(item, "library");
    var itemFunc     = GetJsonString(item, "function");
    var itemEnLib    = GetJsonString(item, "enable_library");
    var itemEnFunc   = GetJsonString(item, "enable_function");

    if (string.IsNullOrWhiteSpace(itemLabel))
        return ("Error: Each item requires 'label'.", null);
    if (string.IsNullOrWhiteSpace(itemLib))
        return ($"Error: Item '{itemLabel}' requires 'library'.", null);
    if (string.IsNullOrWhiteSpace(itemFunc))
        return ($"Error: Item '{itemLabel}' requires 'function'.", null);
    if (string.IsNullOrWhiteSpace(itemEnLib))
        return ($"Error: Item '{itemLabel}' requires 'enable_library'.", null);
    if (string.IsNullOrWhiteSpace(itemEnFunc))
        return ($"Error: Item '{itemLabel}' requires 'enable_function'.", null);

    // Validate web resources
    var libErr = ValidateWebResourceExists(itemLib);
    if (libErr != null) return (libErr, null);
    var enLibErr = ValidateWebResourceExists(itemEnLib);
    if (enLibErr != null) return (enLibErr, null);

    var itemImage = GetJsonString(item, "modern_image");
    if (!string.IsNullOrWhiteSpace(itemImage))
    {
        var imgErr = ValidateWebResourceExists(itemImage);
        if (imgErr != null) return (imgErr, null);
    }
}

// ── Optional ──
var modernImage  = GetJsonString(op, "modern_image");
var tooltipTitle = GetJsonString(op, "tooltip_title") ?? label;
var tooltipDesc  = GetJsonString(op, "tooltip_description");
var sequence     = GetJsonInt(op, "sequence", 85);

if (!string.IsNullOrWhiteSpace(modernImage))
{
    var imgErr = ValidateWebResourceExists(modernImage);
    if (imgErr != null) return (imgErr, null);
}
```

### 3.3 ID Generation

```csharp
var flyoutSlug = GenerateSlug(label);                      // "ExportData"

// Flyout anchor IDs
var customActionId  = $"devkit.{entityName}.{flyoutSlug}.CustomAction";
var flyoutAnchorId  = $"devkit.{entityName}.{flyoutSlug}.FlyoutAnchor";
var flyoutCommandId = $"devkit.{entityName}.{flyoutSlug}.Command";
var menuId          = $"devkit.{entityName}.{flyoutSlug}.Menu";
var menuSectionId   = $"devkit.{entityName}.{flyoutSlug}.MenuSection";
var controlsId      = $"devkit.{entityName}.{flyoutSlug}.Controls";

// DisplayRule (form only)
var displayRuleId = $"devkit.{entityName}.{flyoutSlug}.DisplayRule";

var location = SurfaceLocationMap[surface].Replace("{entity}", entityName);
```

Per-item IDs (trong loop):

```csharp
var itemSlug         = GenerateSlug(itemLabel);             // "ExportExcel"
var itemButtonId     = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.Button";
var itemCommandId    = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.Command";
var itemEnableRuleId = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.EnableRule";
```

### 3.4 Idempotent Cleanup

```csharp
// Remove existing flyout CustomAction
RemoveById(ribbonDoc.Root, "CustomActions", "CustomAction", customActionId);
// Remove flyout command
RemoveById(ribbonDoc.Root, "CommandDefinitions", "CommandDefinition", flyoutCommandId);

// Remove per-item nodes
foreach (var item in items)
{
    var itemSlug      = GenerateSlug(GetJsonString(item, "label"));
    var itemCommandId = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.Command";
    var itemEnRuleId  = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.EnableRule";

    RemoveById(ribbonDoc.Root, "CommandDefinitions", "CommandDefinition", itemCommandId);
    var ruleDefsEl = ribbonDoc.Root.Element("RuleDefinitions");
    if (ruleDefsEl != null)
        RemoveByIdInChild(ruleDefsEl, "EnableRules", "EnableRule", itemEnRuleId);
}

// Remove DisplayRule
var ruleDefs = ribbonDoc.Root.Element("RuleDefinitions");
if (ruleDefs != null)
    RemoveByIdInChild(ruleDefs, "DisplayRules", "DisplayRule", displayRuleId);
```

### 3.5 Build CustomAction + FlyoutAnchor + Menu (Form)

```csharp
var customActionsEl = GetOrCreateElement(ribbonDoc.Root, "CustomActions");

// ── Build child buttons inside Menu ──
var controlsEl = new XElement("Controls", new XAttribute("Id", controlsId));
var autoSeq = 10;

foreach (var item in items)
{
    var itemLabel  = GetJsonString(item, "label");
    var itemSlug   = GenerateSlug(itemLabel);
    var itemBtnId  = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.Button";
    var itemCmdId  = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.Command";
    var itemSeq    = GetJsonInt(item, "sequence", autoSeq);
    var itemTT     = GetJsonString(item, "tooltip_title") ?? itemLabel;
    var itemImage  = GetJsonString(item, "modern_image");

    var btnEl = new XElement("Button",
        new XAttribute("Id", itemBtnId),
        new XAttribute("Command", itemCmdId),
        new XAttribute("LabelText", $"$LocLabels:{itemBtnId}.LabelText"),
        new XAttribute("Alt", $"$LocLabels:{itemBtnId}.LabelText"),
        new XAttribute("ToolTipTitle", $"$LocLabels:{itemBtnId}.ToolTipTitle"),
        new XAttribute("Sequence", itemSeq));

    // Child buttons: NO TemplateAlias (confirmed from template)
    if (!string.IsNullOrWhiteSpace(itemImage))
        btnEl.Add(new XAttribute("ModernImage", $"$webresource:{itemImage}"));

    controlsEl.Add(btnEl);
    autoSeq += 10;
}

var menuSectionEl = new XElement("MenuSection",
    new XAttribute("Id", menuSectionId),
    new XAttribute("Sequence", "10"),
    new XAttribute("DisplayMode", "Menu16"),
    controlsEl);

var menuEl = new XElement("Menu",
    new XAttribute("Id", menuId),
    menuSectionEl);

// ── FlyoutAnchor ──
var flyoutEl = new XElement("FlyoutAnchor",
    new XAttribute("Id", flyoutAnchorId),
    new XAttribute("Command", flyoutCommandId),
    new XAttribute("LabelText", $"$LocLabels:{flyoutAnchorId}.LabelText"),
    new XAttribute("Alt", $"$LocLabels:{flyoutAnchorId}.LabelText"),
    new XAttribute("ToolTipTitle", $"$LocLabels:{flyoutAnchorId}.ToolTipTitle"),
    new XAttribute("TemplateAlias", "isv"),
    new XAttribute("Sequence", sequence),
    new XAttribute("PopulateOnlyOnce", "true"));

if (!string.IsNullOrWhiteSpace(tooltipDesc))
    flyoutEl.Add(new XAttribute("ToolTipDescription", $"$LocLabels:{flyoutAnchorId}.ToolTipDescription"));

if (!string.IsNullOrWhiteSpace(modernImage))
    flyoutEl.Add(new XAttribute("ModernImage", $"$webresource:{modernImage}"));

flyoutEl.Add(menuEl);

// ── CustomAction wrapper ──
customActionsEl.Add(new XElement("CustomAction",
    new XAttribute("Id", customActionId),
    new XAttribute("Location", location),
    new XAttribute("Sequence", sequence),
    new XElement("CommandUIDefinition", flyoutEl)));
```

### 3.6 Build CommandDefinitions

#### 3.6.1 Flyout anchor command (empty actions + DisplayRule ref)

```csharp
var commandDefsEl = GetOrCreateElement(ribbonDoc.Root, "CommandDefinitions");

// Flyout anchor command — empty EnableRules, DisplayRules (form only), empty Actions
commandDefsEl.Add(new XElement("CommandDefinition",
    new XAttribute("Id", flyoutCommandId),
    new XElement("EnableRules"),
    new XElement("DisplayRules",
        new XElement("DisplayRule", new XAttribute("Id", displayRuleId))),
    new XElement("Actions")));
```

#### 3.6.2 Per-item commands (click action + enable rule ref)

```csharp
// CrmParameters for form surface
XElement[] MakeCrmParams() => [
    new XElement("CrmParameter", new XAttribute("Value", "PrimaryControl")),
    new XElement("CrmParameter", new XAttribute("Value", "PrimaryEntityTypeName")),
    new XElement("CrmParameter", new XAttribute("Value", "PrimaryItemIds"))
];

foreach (var item in items)
{
    var itemLabel    = GetJsonString(item, "label");
    var itemSlug     = GenerateSlug(itemLabel);
    var itemCmdId    = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.Command";
    var itemEnRuleId = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.EnableRule";
    var itemLib      = GetJsonString(item, "library");
    var itemFunc     = GetJsonString(item, "function");

    var jsFuncEl = new XElement("JavaScriptFunction",
        new XAttribute("Library", $"$webresource:{itemLib}"),
        new XAttribute("FunctionName", itemFunc));
    foreach (var p in MakeCrmParams()) jsFuncEl.Add(p);

    commandDefsEl.Add(new XElement("CommandDefinition",
        new XAttribute("Id", itemCmdId),
        new XElement("EnableRules",
            new XElement("EnableRule", new XAttribute("Id", itemEnRuleId))),
        new XElement("DisplayRules"),
        new XElement("Actions", jsFuncEl)));
}
```

### 3.7 Build RuleDefinitions

#### 3.7.1 Per-item EnableRules (custom JS)

```csharp
var ruleDefsEl    = GetOrCreateElement(ribbonDoc.Root, "RuleDefinitions");
var enableRulesEl = GetOrCreateElement(ruleDefsEl, "EnableRules");

foreach (var item in items)
{
    var itemLabel    = GetJsonString(item, "label");
    var itemSlug     = GenerateSlug(itemLabel);
    var itemEnRuleId = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.EnableRule";
    var itemEnLib    = GetJsonString(item, "enable_library");
    var itemEnFunc   = GetJsonString(item, "enable_function");

    RemoveByIdInChild(ruleDefsEl, "EnableRules", "EnableRule", itemEnRuleId);

    var customRuleEl = new XElement("CustomRule",
        new XAttribute("FunctionName", itemEnFunc),
        new XAttribute("Library", $"$webresource:{itemEnLib}"));
    foreach (var p in MakeCrmParams()) customRuleEl.Add(new XElement(p));

    enableRulesEl.Add(new XElement("EnableRule",
        new XAttribute("Id", itemEnRuleId),
        customRuleEl));
}
```

#### 3.7.2 DisplayRule (form only)

```csharp
// DisplayRule: FormStateRule State="Existing" — consistent with add_button
RemoveByIdInChild(ruleDefsEl, "DisplayRules", "DisplayRule", displayRuleId);
var displayRulesEl = GetOrCreateElement(ruleDefsEl, "DisplayRules");
displayRulesEl.Add(new XElement("DisplayRule",
    new XAttribute("Id", displayRuleId),
    new XElement("FormStateRule", new XAttribute("State", "Existing"))));
```

### 3.8 Build LocLabels

```csharp
// Flyout anchor labels
UpsertLocLabel(ribbonDoc.Root, $"{flyoutAnchorId}.LabelText", label);
UpsertLocLabel(ribbonDoc.Root, $"{flyoutAnchorId}.ToolTipTitle", tooltipTitle);
if (!string.IsNullOrWhiteSpace(tooltipDesc))
    UpsertLocLabel(ribbonDoc.Root, $"{flyoutAnchorId}.ToolTipDescription", tooltipDesc);

// Per-item labels
foreach (var item in items)
{
    var itemLabel  = GetJsonString(item, "label");
    var itemSlug   = GenerateSlug(itemLabel);
    var itemBtnId  = $"devkit.{entityName}.{flyoutSlug}.{itemSlug}.Button";
    var itemTT     = GetJsonString(item, "tooltip_title") ?? itemLabel;

    UpsertLocLabel(ribbonDoc.Root, $"{itemBtnId}.LabelText", itemLabel);
    UpsertLocLabel(ribbonDoc.Root, $"{itemBtnId}.ToolTipTitle", itemTT);
}
```

### 3.9 Return summary

```csharp
var itemLabels = string.Join(", ", items.Select(i => GetJsonString(i, "label")));
return (null, $"add_flyout_static: '{label}' [{surface}] items=[{itemLabels}]");
```

### 3.10 Full XML Output (form, entity=v4_mcp, label="Export Data")

```xml
<RibbonDiffXml>
  <CustomActions>
    <CustomAction Id="devkit.v4_mcp.ExportData.CustomAction"
                  Location="Mscrm.Form.v4_mcp.MainTab.Save.Controls._children"
                  Sequence="86">
      <CommandUIDefinition>
        <FlyoutAnchor Id="devkit.v4_mcp.ExportData.FlyoutAnchor"
                      Command="devkit.v4_mcp.ExportData.Command"
                      LabelText="$LocLabels:devkit.v4_mcp.ExportData.FlyoutAnchor.LabelText"
                      Alt="$LocLabels:devkit.v4_mcp.ExportData.FlyoutAnchor.LabelText"
                      ToolTipTitle="$LocLabels:devkit.v4_mcp.ExportData.FlyoutAnchor.ToolTipTitle"
                      ToolTipDescription="$LocLabels:devkit.v4_mcp.ExportData.FlyoutAnchor.ToolTipDescription"
                      TemplateAlias="isv"
                      Sequence="86"
                      PopulateOnlyOnce="true"
                      ModernImage="$webresource:v4_/images/export.svg">
          <Menu Id="devkit.v4_mcp.ExportData.Menu">
            <MenuSection Id="devkit.v4_mcp.ExportData.MenuSection"
                         Sequence="10"
                         DisplayMode="Menu16">
              <Controls Id="devkit.v4_mcp.ExportData.Controls">
                <Button Id="devkit.v4_mcp.ExportData.ExportExcel.Button"
                        Command="devkit.v4_mcp.ExportData.ExportExcel.Command"
                        LabelText="$LocLabels:devkit.v4_mcp.ExportData.ExportExcel.Button.LabelText"
                        Alt="$LocLabels:devkit.v4_mcp.ExportData.ExportExcel.Button.LabelText"
                        ToolTipTitle="$LocLabels:devkit.v4_mcp.ExportData.ExportExcel.Button.ToolTipTitle"
                        Sequence="10"
                        ModernImage="$webresource:v4_/images/excel.svg" />
                <Button Id="devkit.v4_mcp.ExportData.ExportPdf.Button"
                        Command="devkit.v4_mcp.ExportData.ExportPdf.Command"
                        LabelText="$LocLabels:devkit.v4_mcp.ExportData.ExportPdf.Button.LabelText"
                        Alt="$LocLabels:devkit.v4_mcp.ExportData.ExportPdf.Button.LabelText"
                        ToolTipTitle="$LocLabels:devkit.v4_mcp.ExportData.ExportPdf.Button.ToolTipTitle"
                        Sequence="20" />
              </Controls>
            </MenuSection>
          </Menu>
        </FlyoutAnchor>
      </CommandUIDefinition>
    </CustomAction>
  </CustomActions>
  <Templates>
    <RibbonTemplates Id="Mscrm.Templates"></RibbonTemplates>
  </Templates>
  <CommandDefinitions>
    <!-- Flyout anchor command: empty actions, DisplayRule ref (form only) -->
    <CommandDefinition Id="devkit.v4_mcp.ExportData.Command">
      <EnableRules />
      <DisplayRules>
        <DisplayRule Id="devkit.v4_mcp.ExportData.DisplayRule" />
      </DisplayRules>
      <Actions />
    </CommandDefinition>
    <!-- Item: Export to Excel -->
    <CommandDefinition Id="devkit.v4_mcp.ExportData.ExportExcel.Command">
      <EnableRules>
        <EnableRule Id="devkit.v4_mcp.ExportData.ExportExcel.EnableRule" />
      </EnableRules>
      <DisplayRules />
      <Actions>
        <JavaScriptFunction Library="$webresource:v4_/scripts/mcp.js"
                            FunctionName="MCP.exportExcel">
          <CrmParameter Value="PrimaryControl" />
          <CrmParameter Value="PrimaryEntityTypeName" />
          <CrmParameter Value="PrimaryItemIds" />
        </JavaScriptFunction>
      </Actions>
    </CommandDefinition>
    <!-- Item: Export to PDF -->
    <CommandDefinition Id="devkit.v4_mcp.ExportData.ExportPdf.Command">
      <EnableRules>
        <EnableRule Id="devkit.v4_mcp.ExportData.ExportPdf.EnableRule" />
      </EnableRules>
      <DisplayRules />
      <Actions>
        <JavaScriptFunction Library="$webresource:v4_/scripts/mcp.js"
                            FunctionName="MCP.exportPdf">
          <CrmParameter Value="PrimaryControl" />
          <CrmParameter Value="PrimaryEntityTypeName" />
          <CrmParameter Value="PrimaryItemIds" />
        </JavaScriptFunction>
      </Actions>
    </CommandDefinition>
  </CommandDefinitions>
  <RuleDefinitions>
    <TabDisplayRules />
    <DisplayRules>
      <DisplayRule Id="devkit.v4_mcp.ExportData.DisplayRule">
        <FormStateRule State="Existing" />
      </DisplayRule>
    </DisplayRules>
    <EnableRules>
      <EnableRule Id="devkit.v4_mcp.ExportData.ExportExcel.EnableRule">
        <CustomRule FunctionName="MCP.isEnabled"
                    Library="$webresource:v4_/scripts/mcp.js">
          <CrmParameter Value="PrimaryControl" />
          <CrmParameter Value="PrimaryEntityTypeName" />
          <CrmParameter Value="PrimaryItemIds" />
        </CustomRule>
      </EnableRule>
      <EnableRule Id="devkit.v4_mcp.ExportData.ExportPdf.EnableRule">
        <CustomRule FunctionName="MCP.isEnabled"
                    Library="$webresource:v4_/scripts/mcp.js">
          <CrmParameter Value="PrimaryControl" />
          <CrmParameter Value="PrimaryEntityTypeName" />
          <CrmParameter Value="PrimaryItemIds" />
        </CustomRule>
      </EnableRule>
    </EnableRules>
  </RuleDefinitions>
  <LocLabels>
    <LocLabel Id="devkit.v4_mcp.ExportData.FlyoutAnchor.LabelText">
      <Titles><Title description="Export Data" languagecode="1033" /></Titles>
    </LocLabel>
    <LocLabel Id="devkit.v4_mcp.ExportData.FlyoutAnchor.ToolTipTitle">
      <Titles><Title description="Export Data" languagecode="1033" /></Titles>
    </LocLabel>
    <LocLabel Id="devkit.v4_mcp.ExportData.FlyoutAnchor.ToolTipDescription">
      <Titles><Title description="Export record in various formats" languagecode="1033" /></Titles>
    </LocLabel>
    <LocLabel Id="devkit.v4_mcp.ExportData.ExportExcel.Button.LabelText">
      <Titles><Title description="Export to Excel" languagecode="1033" /></Titles>
    </LocLabel>
    <LocLabel Id="devkit.v4_mcp.ExportData.ExportExcel.Button.ToolTipTitle">
      <Titles><Title description="Export to Excel" languagecode="1033" /></Titles>
    </LocLabel>
    <LocLabel Id="devkit.v4_mcp.ExportData.ExportPdf.Button.LabelText">
      <Titles><Title description="Export to PDF" languagecode="1033" /></Titles>
    </LocLabel>
    <LocLabel Id="devkit.v4_mcp.ExportData.ExportPdf.Button.ToolTipTitle">
      <Titles><Title description="Export to PDF" languagecode="1033" /></Titles>
    </LocLabel>
  </LocLabels>
</RibbonDiffXml>
```

### 3.11 So sánh `add_button` vs `add_flyout_static` (form only)

| Khía cạnh | `add_button` (form) | `add_flyout_static` (form) |
|---|---|---|
| **CustomAction** | 1 (chứa `<Button>`) | 1 (chứa `<FlyoutAnchor>` + `<Menu>` + child `<Button>`s) |
| **CommandDefinition** | 1 (click + enable ref + display ref) | 1 (flyout: empty actions + display ref) + N (per-item: click + enable ref) |
| **EnableRule** | 1 (custom JS) | N (per-item custom JS) |
| **DisplayRule** | 1 (`FormStateRule State="Existing"`) | 1 (`FormStateRule State="Existing"`) — trên flyout command |
| **LocLabel** | 2-3 (LabelText, ToolTipTitle, ToolTipDescription?) | 2-3 (flyout anchor) + 2×N (per-item: LabelText, ToolTipTitle) |
| **CrmParameter set** | PrimaryControl, PrimaryEntityTypeName, PrimaryItemIds | Same — per-item commands |
| **TemplateAlias** | `"isv"` trên Button | `"isv"` trên FlyoutAnchor, **không có** trên child Buttons |
| **Alt attribute** | Không có trên Button | Có trên FlyoutAnchor và child Buttons (= LabelText) |
| **Web resource validation** | 1 library + 1 enable_library + 1 modern_image? | N×(library + enable_library + modern_image?) + 1 flyout modern_image? |

### 3.12 Điểm khác biệt quan trọng với `add_button`

1. **FlyoutAnchor thay vì Button** trong `<CommandUIDefinition>` — FlyoutAnchor chứa `<Menu>` con.
2. **`PopulateOnlyOnce="true"`** — flyout chỉ render menu 1 lần, sau đó cache.
3. **Flyout anchor command empty** — không có `<Actions>`, không có `<EnableRules>` (chỉ có DisplayRule). Khác với button command vừa có click action vừa có enable rule.
4. **Per-item commands riêng biệt** — mỗi child button có command riêng với click function và enable rule riêng. Button trong `add_button` chỉ có 1 command.
5. **Child buttons không có `TemplateAlias`** — confirmed từ template. Chỉ FlyoutAnchor root mới có.
6. **Child buttons có `Alt` attribute** — dùng cùng LocLabel với LabelText.
7. **Child buttons không có `ToolTipDescription`** — chỉ có LabelText và ToolTipTitle.

### 3.13 Edge Cases

| Case | Xử lý |
|---|---|
| Items có cùng label | `GenerateSlug` cho cùng slug → duplicate IDs → lỗi. **Validate** trước: collect slugs, nếu trùng → return error |
| Item không có sequence | Auto-assign: 10, 20, 30... |
| Item có sequence trùng | Cho phép — Dataverse xử lý được, hiển thị theo thứ tự XML |
| Flyout label trùng với button label đã có | Cho phép — IDs khác nhau (FlyoutAnchor vs Button pattern) |
| Re-run cùng input | Idempotent — cleanup trước rồi tạo lại |

### 3.14 Validate duplicate slugs

```csharp
// After parsing all items, check for duplicate slugs
var slugs = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
foreach (var item in items)
{
    var itemSlug = GenerateSlug(GetJsonString(item, "label"));
    if (!slugs.Add(itemSlug))
        return ($"Error: Duplicate item slug '{itemSlug}' — two items resolve to the same ID. Use different labels.", null);
}
```

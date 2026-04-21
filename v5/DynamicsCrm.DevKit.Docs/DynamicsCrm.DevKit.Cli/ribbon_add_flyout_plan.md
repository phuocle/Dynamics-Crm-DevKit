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

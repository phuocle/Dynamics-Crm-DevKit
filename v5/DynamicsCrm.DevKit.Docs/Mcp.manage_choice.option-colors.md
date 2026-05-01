# MCP manage_choice - support option item colors

## Muc tieu

Nghien cuu cach mo rong MCP tool `manage_choice` de ho tro tao va cap nhat ma mau cho tung item cua global option set.

Pham vi de xuat:

- `create`: tao global choice kem mau cho option item.
- `update`: cap nhat mau cho option item dang co, va gan mau cho option moi them.
- `detail`: tra ve mau hien tai cua tung option de AI/user kiem tra.
- Khong doi hanh vi mac dinh neu user khong truyen mau.

## Can cu hien tai

Code chinh nam tai:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChoiceTool.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/StructuredResults.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/CompactFormatter.cs`

Hien tai `manage_choice` co 4 action: `list`, `detail`, `create`, `update`.

`create` dang:

- Bat buoc `optionset_name`, `display_name`, `options`, `solution_name`.
- Parse `options` bang `ParseOptionsWithAutoValue`.
- Tao `OptionSetMetadata`.
- Them tung `OptionMetadata(new Label(label, languageCode), value)`.

`update` dang:

- Cap nhat `display_name`, `description` bang `UpdateOptionSetRequest`.
- Xoa option bang `DeleteOptionValueRequest`.
- Them option bang `InsertOptionValueRequest`.
- Rename option bang `UpdateOptionValueRequest`.
- Resolve rename/remove theo label, khong theo integer value.

Structured output hien co:

- `ChoiceOptionItem`: `value`, `label`.
- `ManageChoiceResult`: `options`, `optionsAdded`, `optionsRenamed`, `optionsRemoved`.

Formatter hien co:

- `CompactFormatter.FormatOptionSetDetail` hien thi cot `Value`, `Label`, `Description`, chua co `Color`.

## Can cu Dataverse

Microsoft Learn xac nhan:

- `OptionMetadata` co property `Color` kieu string, la hex color cua option.
- `InsertOptionValue` action co parameter `Color`.
- `UpdateOptionValue` action co parameter `Color`.
- `UpdateOptionSet` chi cap nhat metadata cua option set, khong cap nhat option values; option item phai dung cac action rieng nhu `InsertOptionValue`, `UpdateOptionValue`, `DeleteOptionValue`.

Tai lieu tham khao:

- https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/optionmetadata
- https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/insertoptionvalue
- https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/updateoptionvalue
- https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/create-update-optionsets
- https://learn.microsoft.com/en-us/power-apps/developer/data-platform/org-service/metadata-option-sets

## API de xuat

Them parameter moi vao `manage_choice`:

```csharp
[Description(
    "Optional for create/update. Semicolon-separated color mappings. Use 'Label:#RRGGBB' or 'value:#RRGGBB'. Labels are resolved case-insensitively. Example: 'Draft:#808080;Paid:#008000'."
)] string option_colors = "",
```

Ly do chon parameter rieng:

- Khong pha format hien co cua `options`, `add_options`, `update_options`.
- Khong lam label bi xung dot voi dau `:` trong grammar hien tai.
- Dung chung duoc cho create va update.
- Cho phep cap nhat mau ma khong doi label.

Khong nen nhung mau truc tiep vao `options` nhu `Draft|#808080` trong lan dau, vi se mo rong parser hien co va lam tang rui ro regression.

## Cu phap option_colors

Chap nhan:

```text
Draft:#808080;Paid:#008000
111110000:#808080;111110003:#008000
```

Validation:

- Key ben trai la label hoac integer value.
- Mau chap nhan `#RRGGBB`; co the normalize `RRGGBB` thanh `#RRGGBB` neu muon than thien hon.
- Khong chap nhan hex 3 ky tu trong phien ban dau de giu behavior ro rang.
- Neu key khong resolve duoc, tra loi error va khong thay doi gi.
- Neu trung key, option cuoi cung nen bi reject thay vi silently override.

Viec clear mau khong nam trong scope toi thieu. Neu can sau nay co the them `Label:null` hoac `Label:none`, vi Dataverse `Color` la nullable.

## Luong create de xuat

1. Validate `option_colors` sau khi parse `options`.
2. Resolve color key theo parsed option list:
   - Neu key la integer, match `value`.
   - Neu key la string, match `label` case-insensitive.
3. Khi tao `OptionMetadata`, set `Color` neu co:

```csharp
var option = new OptionMetadata(new Label(label, languageCode), value);
option.Color = color;
optionSetMetadata.Options.Add(option);
```

4. Structured output nen tra ve color trong `Options`.

Neu SDK version hien tai khong expose `OptionMetadata.Color`, fallback la tao option set truoc, sau do goi `UpdateOptionValueRequest` cho tung option co mau. Fallback nay van nam trong `HandleCreate`, sau `CreateOptionSetRequest` va truoc publish.

## Luong update de xuat

Them `option_colors` vao dieu kien "co thay doi":

```text
display_name, description, add_options, update_options, remove_options, option_colors
```

Thu tu xu ly nen la:

1. Remove options.
2. Add new options.
3. Rename labels.
4. Update colors.
5. Publish.

Ly do update colors sau add/rename:

- Option moi them da ton tai de co the set color bang `UpdateOptionValueRequest` neu `InsertOptionValueRequest.Color` khong available trong SDK.
- Neu user vua rename vua set color theo value thi khong bi anh huong.
- Neu user set color theo label, nen document rang label resolve tren state sau add/rename de dung voi ky vong cua user.

De giam bat ngo, nen resolve color map sau khi co danh sach option "du kien":

- Bat dau tu existing options.
- Bo cac option remove.
- Them cac option add.
- Apply rename labels.
- Resolve `option_colors`.

Khi update mau:

```csharp
_serviceClient.Execute(new UpdateOptionValueRequest
{
    OptionSetName = name,
    Value = value,
    Color = color,
    MergeLabels = true
});
```

Khong set `Label` khi chi update color, de tranh xoa/merge label khong can thiet. Neu SDK yeu cau `Label`, dung label hien tai voi `MergeLabels = true`.

## Structured output de xuat

Mo rong model:

```csharp
internal sealed class ChoiceOptionItem
{
    public int Value { get; set; }
    public string Label { get; set; }

    [JsonPropertyName("color")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string Color { get; set; }
}
```

Them vao `ManageChoiceResult`:

```csharp
[JsonPropertyName("optionsColored")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public List<string> OptionsColored { get; set; }
```

Format de xuat:

- `detail`: them cot `Color`.
- `create`: in `value: label (#RRGGBB)` neu option co mau.
- `update`: in `Colored: Label -> #RRGGBB` hoac `Colored: value -> #RRGGBB`.

Khong doi cac field cu de tranh break client.

## Helper de xuat

Them helper trong `ManageChoiceTool.cs` truoc, chua can tach file:

```csharp
private static Dictionary<string, string> ParseOptionColors(string input)
```

Va mot helper resolve:

```csharp
private static List<(int value, string label, string color)> ResolveOptionColors(
    IEnumerable<(int value, string label)> options,
    Dictionary<string, string> colors)
```

Quy tac validate color:

```csharp
private static bool TryNormalizeHexColor(string input, out string color)
```

Regex toi thieu:

```text
^#?[0-9A-Fa-f]{6}$
```

Normalize output thanh uppercase `#RRGGBB`.

## Vi tri can sua khi implement

1. `ManageChoiceTool.manage_choice`
   - Them parameter `option_colors`.
   - Truyen vao `HandleCreate` va `HandleUpdate`.
   - Update description cua tool.

2. `HandleDetail`
   - Map `o.Color` vao `ChoiceOptionItem.Color`.

3. `HandleCreate`
   - Parse/resolve colors.
   - Set color vao `OptionMetadata` hoac fallback `UpdateOptionValueRequest`.
   - In color trong text result.
   - Tra `Color` trong structured `Options`.

4. `HandleUpdate`
   - Parse/resolve colors.
   - Cho phep update chi co `option_colors`.
   - Execute `UpdateOptionValueRequest` cho color.
   - Tra `OptionsColored`.

5. `StructuredResults.cs`
   - Them `ChoiceOptionItem.Color`.
   - Them `ManageChoiceResult.OptionsColored`.

6. `CompactFormatter.FormatOptionSetDetail`
   - Them cot `Color` cho normal `OptionSetMetadata`.
   - Co the them cho boolean option neu can, nhung `manage_choice` dang tap trung global picklist.

## Loi va thong diep de xuat

Giu style hien tai, vi tool dang tra error text truc tiep:

```text
Error: Invalid option_colors format. Expected 'Label:#RRGGBB;...' or 'value:#RRGGBB;...'.
Error: Invalid color '#12GG00'. Expected hex color '#RRGGBB'.
Error: Option color key 'Drafted' not found in 'v4_invoicestatus'. Use action='detail' to see existing option labels and values.
Error: Duplicate option color key 'Draft'.
```

## Test case de xuat

Vi hien tai project chu yeu verify bang build workflow, test toi thieu nen gom:

1. `ParseOptionColors`:
   - `Draft:#808080;Paid:#008000` thanh 2 entries.
   - `111110000:808080` normalize thanh `#808080`.
   - reject color sai hex.
   - reject duplicate key.

2. `ResolveOptionColors`:
   - Resolve theo label case-insensitive.
   - Resolve theo integer value.
   - Error khi key khong ton tai.

3. Manual MCP prompts:
   - Create choice co mau.
   - Detail thay color.
   - Update color option cu.
   - Add option moi kem color.
   - Rename va set color trong cung request bang value.

## upsert_column — local optionset color support

### Hien trang

`upsert_column` ho tro tao local picklist/multipicklist bang parameter `options` (JSON array) va cap nhat option bang `add_options`, `update_options`. Hien tai chua co color.

Code nam tai: `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertColumnTool.cs`

Diem can sua:

- `OptionItem` (line ~1204): chi co `Label`, `Value`.
- Create path (line ~920-924): `new OptionMetadata(new Label(opt.Label, ...), opt.Value)` — khong set `Color`.
- `add_options` path (line ~1605): `InsertOptionValueRequest` — khong set `Color`.
- `update_options` path (line ~1628): `UpdateOptionValueRequest` — khong set `Color`.

### Phuong an: nhung color vao JSON (khong them parameter moi)

Vi `options`, `add_options`, `update_options` deu la JSON array co cu truc, co the them field `color` truc tiep vao `OptionItem`:

```csharp
private sealed class OptionItem
{
    public string Label { get; set; }
    public int? Value { get; set; }
    public string Color { get; set; }  // optional, hex "#RRGGBB"
}
```

Dung cach nay:

- Khong phai them parameter moi vao tool signature.
- Color di cung voi option trong cung JSON.
- Format nhat quan cho ca create va update.
- Backward-compatible: JSON khong co `color` field van hoat dong binh thuong.

Khi tao local picklist:

```csharp
var option = new OptionMetadata(new Label(opt.Label, languageCode), opt.Value);
if (!string.IsNullOrWhiteSpace(opt.Color) && TryNormalizeHexColor(opt.Color, out var hex))
    option.Color = hex;
optionSet.Options.Add(option);
```

Khi `add_options`:

```csharp
var req = new InsertOptionValueRequest { Label = new Label(opt.Label, languageCode) };
if (!string.IsNullOrWhiteSpace(opt.Color) && TryNormalizeHexColor(opt.Color, out var hex))
    req.Color = hex;
```

Khi `update_options`:

```csharp
var req = new UpdateOptionValueRequest { Value = opt.Value.Value, Label = new Label(opt.Label, languageCode), MergeLabels = true };
if (!string.IsNullOrWhiteSpace(opt.Color) && TryNormalizeHexColor(opt.Color, out var hex))
    req.Color = hex;
```

Dung chung ham `TryNormalizeHexColor` da dinh nghia cho `manage_choice`.

### Option_colors rieng (phuong an du phong)

Neu muon dong nhat API voi `manage_choice` (set color rieng, khong nhung vao JSON), co the them `option_colors` voi cu phap `Label:#RRGGBB` tuong tu. Nhung voi `upsert_column`, phuong an nhung vao JSON don gian hon vi options da la structured JSON.

### Vi tri can sua (upsert_column)

1. `OptionItem` — them `Color` property.
2. `ParseOptions` — khong can sua, JSON deserializer tu dong pick up field moi.
3. Create path (line ~920-924) — doc `opt.Color`, set `OptionMetadata.Color`.
4. `add_options` path (line ~1605-1614) — set `InsertOptionValueRequest.Color`.
5. `update_options` path (line ~1628-1636) — set `UpdateOptionValueRequest.Color`.
6. Output text — hien thi color khi co (vi du: `OptionsAdded: Low (100000000) [#FF0000]`).
7. Update tool description (`upsert_column`) — ghi ro `color` la optional field trong JSON.

### Prompt mau

```text
Tao local picklist column "Priority" tren entity account, gom:
- Low (100000000) mau #808080
- Medium (100000001) mau #FFA500
- High (100000002) mau #CC0000
```

Tool call tuong ung:

```text
upsert_column(
  entity_name='account',
  attribute_name='new_priority',
  attribute_type='picklist',
  display_name='Priority',
  options='[{"label":"Low","value":100000000,"color":"#808080"},{"label":"Medium","value":100000001,"color":"#FFA500"},{"label":"High","value":100000002,"color":"#CC0000"}]',
  solution_name='MySolution'
)
```

Cap nhat them mau cho option cu:

```text
upsert_column(
  entity_name='account',
  attribute_name='new_priority',
  attribute_type='picklist',
  display_name='Priority',
  update_options='[{"label":"Low","value":100000000,"color":"#808080"}]'
)
```

### Luu y SDK

`InsertOptionValueRequest.Color` va `UpdateOptionValueRequest.Color` va `OptionMetadata.Color` deu co trong Dataverse SDK. Neu build fail do thieu property, co the fallback goi `UpdateOptionValueRequest` sau khi insert, tuong tu fallback da mo ta o section `manage_choice`.

---

## Build/verify workflow

Neu implement code trong `DynamicsCrm.DevKit.Cli/Mcp/`:

1. Run `/claude-build-cli`.
2. Kill MCP process de auto-restart:

```powershell
Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force
```

Khong chay `dotnet build` truc tiep theo rule cua repo.

## Prompt mau sau khi implement

```text
Trong solution "TEST-MCP", tao global choice v4_paymentstatus display name "Payment Status", gom Draft, Pending, Paid, Cancelled. Gan mau Draft #808080, Pending #FFA500, Paid #008000, Cancelled #CC0000.
```

```text
Cap nhat global choice v4_paymentstatus: doi mau Pending thanh #FFCC00 va Paid thanh #00AA00.
```

Tool call tuong ung:

```text
manage_choice(
  action='create',
  optionset_name='v4_paymentstatus',
  display_name='Payment Status',
  options='Draft;Pending;Paid;Cancelled',
  option_colors='Draft:#808080;Pending:#FFA500;Paid:#008000;Cancelled:#CC0000',
  solution_name='TEST-MCP'
)
```

```text
manage_choice(
  action='update',
  optionset_name='v4_paymentstatus',
  option_colors='Pending:#FFCC00;Paid:#00AA00'
)
```


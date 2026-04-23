# Plan: Thêm MCP tool `generate_demo_data` + Cập nhật `create_records` hỗ trợ file path

---

## Bối cảnh

Tool `create_records` đã hoạt động — tạo nhiều records song song. Nhưng AI agent phải tự nghĩ ra fake data cho từng field.

Tool mới `generate_demo_data`:
- Đọc entity metadata từ Dataverse
- Dùng **Bogus** (.NET) generate fake data đúng kiểu
- Fetch real GUIDs từ target entities cho lookup fields
- Save file JSON vào `.devkit/demo_data/`
- Trả về file path → pass vào `create_records`

**Pipeline 2 bước**:
```
Bước 1: generate_demo_data(entity="account", count=50) → file path
Bước 2: create_records(entity="account", records_json="<file path>") → tạo records
```

Max 500 rows. Default 10.

---

## Files cần thay đổi

| File | Action |
|---|---|
| `DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj` | Thêm `<PackageReference Include="Bogus" />` |
| `DynamicsCrm.DevKit.Cli\Mcp\Tools\GenerateDemoDataTool.cs` | **Tạo mới** |
| `DynamicsCrm.DevKit.Cli\Mcp\Tools\CreateRecordsTool.cs` | **Cập nhật** — thêm `ResolveRecordsInput()` |
| `DynamicsCrm.DevKit.Cli\Mcp\Tools\Models\StructuredResults.cs` | Thêm `GenerateDemoDataResult` |
| `DynamicsCrm.DevKit.Cli\Mcp\McpServerHost.cs` | Thêm `ToolCategoryMap` |
| `AGENTS.md` | 35 → 36 tools |

---

## Phần 1: Cập nhật `create_records` — Hỗ trợ file path ✅ DONE

### 3 input modes cho `records_json`

| Input | Detect | Xử lý |
|---|---|---|
| Inline JSON | Bắt đầu `[` | Parse trực tiếp (hiện tại) |
| File `.json` | Kết thúc `.json`, không bắt đầu `[` | Đọc file → parse JSON → xóa file |
| File `.csv` | Kết thúc `.csv` | Đọc file → resolve headers → resolve lookups → convert → xóa file |

### Detect logic

```csharp
private string ResolveRecordsInput(string recordsJson, string entityName)
{
    var trimmed = recordsJson.Trim();

    // CSV file
    if (trimmed.EndsWith(".csv", StringComparison.OrdinalIgnoreCase))
    {
        if (!File.Exists(trimmed)) return null;
        var json = ConvertCsvToJson(trimmed, entityName);
        try { File.Delete(trimmed); } catch { }
        return json; // null = có lỗi (error đã set trong method)
    }

    // JSON file
    if (!trimmed.StartsWith("[") && trimmed.EndsWith(".json", StringComparison.OrdinalIgnoreCase))
    {
        if (!File.Exists(trimmed)) return null;
        var content = File.ReadAllText(trimmed, Encoding.UTF8);
        try { File.Delete(trimmed); } catch { }
        return content;
    }

    // Inline JSON
    return recordsJson;
}
```

### CSV Processing — `ConvertCsvToJson()`

CSV file có header là **Display Name** (giống Excel Import của Dataverse).

**Ví dụ file CSV**:
```csv
Account Name,Main Phone,Email,Primary Contact,Industry
Contoso Ltd,+1-555-0100,info@contoso.com,John Smith,Manufacturing
Fabrikam Inc,+1-555-0200,hello@fabrikam.com,Nguyễn Văn A,Technology
```

#### Bước 1: Load metadata

`RetrieveEntityRequest` + `EntityFilters.Attributes` → build 2 maps:
```csharp
// Display Name → Logical Name
var displayToLogical = metadata.Attributes
    .Where(a => a.DisplayName?.UserLocalizedLabel?.Label != null)
    .ToDictionary(
        a => a.DisplayName.UserLocalizedLabel.Label,
        a => a.LogicalName,
        StringComparer.OrdinalIgnoreCase);

// Logical Name → AttributeMetadata (cho type detection)
var logicalToMetadata = metadata.Attributes.ToDictionary(a => a.LogicalName);
```

#### Bước 2: Parse CSV header → resolve Display Name → Logical Name

```
Header "Account Name" → metadata lookup → logical name "name"
Header "Main Phone" → metadata lookup → logical name "telephone1"
Header "Primary Contact" → metadata lookup → logical name "primarycontactid" (LookupAttributeMetadata)
Header "Industry" → metadata lookup → logical name "industrycode" (PicklistAttributeMetadata)
```

Header không resolve được → warning + skip column.

#### Bước 3: Cho mỗi row, xử lý từng cell theo field type

| Field Type | CSV Value | Xử lý |
|---|---|---|
| String, Memo | `"Contoso Ltd"` | Dùng trực tiếp |
| Integer, BigInt | `"42"` | Parse number |
| Decimal, Double, Money | `"1500.50"` | Parse number |
| Boolean | `"Yes"` / `"No"` / `"true"` / `"false"` | Parse boolean |
| DateTime | `"2025-08-15"` | Parse date → ISO 8601 |
| Picklist | `"Manufacturing"` | Tìm label trong `Options[]` → resolve value (int). Không tìm thấy → warning + skip field |
| MultiSelect Picklist | `"Option1;Option2"` | Split `;` → resolve từng label → array of ints |
| **Lookup** | `"John Smith"` | **Resolve by Name** (xem bên dưới) |

#### Bước 4: Lookup Resolve by Name (giống Import)

Khi CSV cell là lookup field (e.g. `primarycontactid` → target entity `contact`):

```csharp
// Fetch records từ target entity where primary name = CSV value
var primaryNameAttr = targetMetadata.PrimaryNameAttribute; // e.g. "fullname"
var fetchXml = $@"<fetch top='2'>
  <entity name='{targetEntity}'>
    <attribute name='{targetEntity}id'/>
    <filter>
      <condition attribute='{primaryNameAttr}' operator='eq' value='{EscapeXml(csvValue)}'/>
      <condition attribute='statecode' operator='eq' value='0'/>
    </filter>
  </entity>
</fetch>";

var results = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
```

| Kết quả | Xử lý |
|---|---|
| **Đúng 1 record** | Resolve → dùng GUID |
| **0 records** | Skip field cho row này + warning: `"Row 2: lookup 'Primary Contact' value 'Nguyễn Văn A' not found in 'contact'"` |
| **≥2 records** | Skip field cho row này + warning: `"Row 2: lookup 'Primary Contact' value 'Nguyễn Văn A' has 2 matches in 'contact' — ambiguous, skipped"` |

Polymorphic lookups (`customerid`): dùng `field@target` syntax. Nếu nhiều targets → thử từng target, dùng target đầu tiên có 1 match.

#### Bước 5: Output

Convert tất cả rows thành JSON array → return. Rows hoàn toàn fail (tất cả fields skip) → loại khỏi output + warning.

### Backward compatible

- Inline JSON `[{...}]` — hoạt động như cũ
- File `.json` từ `generate_demo_data` — đọc + xóa
- File `.csv` — **mới** — resolve Display Name + lookup by name

---

## Phần 2: Tool `generate_demo_data`

### Parameters

| Param | Type | Default | Mô tả |
|---|---|---|---|
| `entity_name` | string | bắt buộc | Entity logical name |
| `count` | int | **10** | 1–**500**. > 500 → error |
| `from_date` | string | **bắt buộc** | ISO 8601 date. Ví dụ: `"2026-02-01"`. Dùng cho `createdon` và tất cả DateTime fields |
| `to_date` | string | **bắt buộc** | ISO 8601 date. Ví dụ: `"2026-02-28"`. Phải > `from_date` |
| `fields` | string | `""` | Comma-separated. Rỗng = auto-select |
| `seed` | int | 0 | 0 = random |

Thiếu `from_date` hoặc `to_date` → error: `"Error: from_date and to_date are required. Example: from_date='2026-02-01', to_date='2026-02-28'"`

### Output model

```csharp
internal sealed class GenerateDemoDataResult
{
    entity, count, fieldsGenerated: int,
    fieldList: List<string>,
    filePath: string,
    lookupsSampled: Dictionary<string, int>,
    warnings: List<string>
}
```

### Constructor: `GenerateDemoDataTool(ServiceClient serviceClient)`

### MCP attributes

```csharp
[McpServerTool(Name = "generate_demo_data", Title = "Generate demo data for an entity",
    Destructive = false, ReadOnly = true, Idempotent = true,
    UseStructuredContent = true, OutputSchemaType = typeof(GenerateDemoDataResult))]
```

### Các bước

#### Bước 1: Validate
- `entity_name` bắt buộc
- `count` > 500 → error. Default 10. Clamp 1–500

#### Bước 2: Load metadata
`RetrieveEntityRequest` + `EntityFilters.Attributes` → cache `ConcurrentDictionary`

#### Bước 3: Chọn fields

Auto-select (`fields` rỗng): `IsValidForCreate == true`, loại bỏ:
- Primary key (`IsPrimaryId`)
- `IsLogical == true`
- `AttributeOf != null`
- `owningbusinessunit`
- `UniqueIdentifierAttributeMetadata`, `ImageAttributeMetadata`, `FileAttributeMetadata`

**Auto-include cho migration-like data** — Verified từ Dataverse metadata (`IsValidForCreate`):

| Field | `IsValidForCreate` | `IsValidForUpdate` | Kết luận |
|---|---|---|---|
| `createdon` | **false** | **false** | Không set được qua API |
| `modifiedon` | **false** | **false** | Không set được qua API |
| `createdby` | **false** | **false** | Không set được qua API |
| `modifiedby` | **false** | **false** | Không set được qua API |
| **`overriddencreatedon`** | **true** | **false** | **Duy nhất field set được** khi Create |

Tool chỉ gen **1 field**: **`overriddencreatedon`**
- Gen: `faker.Date.Between(from_date, to_date)` → format ISO 8601 UTC (`"2026-02-15T10:30:00Z"`)
- Khi Dataverse nhận `overriddencreatedon` → set `createdon` = giá trị này
- `modifiedon` = thời điểm create thật (không override được)
- `createdby`/`modifiedby` = current user (chỉ thay đổi được qua `CallerId` impersonation, ngoài scope tool này)
- Cần privilege `prvOverriddenCreatedOn` (System Admin có sẵn). Không có → Dataverse ignore field, record vẫn tạo với `createdon` = now

#### Bước 4: Pre-fetch lookup data

Fetch top 100 active records (order by modifiedon desc) từ mỗi target entity. Cache để re-use nếu nhiều lookup fields cùng target.

```csharp
// Cache: target entity → List<Guid>. Re-use khi nhiều fields cùng target
// Ví dụ: account có cả "primarycontactid" và "preferredcontactid" → cùng fetch contact 1 lần
private static readonly ConcurrentDictionary<string, List<Guid>> LookupPoolCache = new();

// Cho mỗi target entity (chỉ fetch nếu chưa có trong cache):
var guids = LookupPoolCache.GetOrAdd(target, _ =>
{
    var fetchXml = $@"<fetch top='100'>
      <entity name='{target}'>
        <attribute name='{target}id'/>
        <filter><condition attribute='statecode' operator='eq' value='0'/></filter>
        <order attribute='modifiedon' descending='true'/>
      </entity>
    </fetch>";
    var results = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
    return results.Entities.Select(e => e.Id).ToList();
});
```

| Trường hợp | Xử lý |
|---|---|
| `ownerid` | Auto-include, fetch active users từ `systemuser`, random assign |
| Polymorphic (`customerid`) | `field@entity` syntax, random target |
| Self-referential (bảng trống) | Skip + warning |
| Target rỗng | Skip + warning |

#### Bước 5: Build generators

Mapping đầy đủ theo `EntityParserHelper.ConvertValue()` switch (line 95-114):

| Metadata Subclass | Generator | Ghi chú |
|---|---|---|
| `StringAttributeMetadata` | Smart mapping theo tên field (bảng dưới) | Respect `MaxLength` |
| `MemoAttributeMetadata` | `Lorem.Paragraph()` | Respect `MaxLength` (default 2000) |
| `IntegerAttributeMetadata` | `Random.Int(Min, Max)` | Min/Max từ metadata |
| `DecimalAttributeMetadata` | `Random.Decimal(Min, Max)` | Precision từ metadata |
| `DoubleAttributeMetadata` | `Random.Double(Min, Max)` | |
| `BigIntAttributeMetadata` | `Random.Long(Min, Max)` | |
| `MoneyAttributeMetadata` | `Finance.Amount(Min, Max)` | Min/Max từ metadata |
| `BooleanAttributeMetadata` | `Random.Bool()` | |
| `DateTimeAttributeMetadata` | `Date.Between(from_date, to_date)` → ISO 8601 UTC | Format: `"2026-02-15T10:30:00Z"` |
| `PicklistAttributeMetadata` | `PickRandom(OptionSet.Options[].Value)` | Chỉ valid options |
| `StateAttributeMetadata` | **Skip** | Dataverse default Active |
| `StatusAttributeMetadata` | **Skip** | Dataverse default Active |
| `MultiSelectPicklistAttributeMetadata` | Random subset (1–3) từ `Options[].Value` | JSON array |
| `LookupAttributeMetadata` | `PickRandom(lookupPool[target])` | Real GUIDs từ bước 4 |
| `UniqueIdentifierAttributeMetadata` | **Skip** | Primary key — Dataverse tự tạo |
| `ImageAttributeMetadata` | **Skip** | Binary data |
| `FileAttributeMetadata` | **Skip** | Binary data |
| `EntityNameAttributeMetadata` | **Skip** | Virtual — entity type code |
| Bất kỳ type khác | **Skip** + warning | `"Skipped field 'xxx': unsupported type YYY"` |

**Smart string mapping**:

| Tên field chứa | Generator |
|---|---|
| `name` + entity=`account` | `Company.CompanyName()` |
| `firstname` | `Name.FirstName()` |
| `lastname` | `Name.LastName()` |
| `fullname` | `Name.FullName()` |
| `emailaddress` | `Internet.Email()` |
| `telephone`, `phone`, `fax` | `Phone.PhoneNumber()` |
| `websiteurl`, `website` | `Internet.Url()` |
| `city` | `Address.City()` |
| `stateorprovince` | `Address.State()` |
| `country` | `Address.Country()` |
| `postalcode`, `zip` | `Address.ZipCode()` |
| `line1`, `street` | `Address.StreetAddress()` |
| `line2` | `Address.SecondaryAddress()` |
| `jobtitle` | `Name.JobTitle()` |
| `department` | `Commerce.Department()` |
| `description` | `Lorem.Sentence(10)` |
| `subject` | `Lorem.Sentence(5)` |
| `accountnumber`, `code`, `number` | `Random.AlphaNumeric(8).ToUpper()` |
| `companyname` | `Company.CompanyName()` |
| Fallback | `Lorem.Word()` (respect MaxLength) |

#### Bước 6: Generate → Save file → Return

Save vào `.devkit/demo_data/{entityName}_{timestamp}.json`. Return file path.

```
Generated 50 'account' records (seed: 42)
Fields: name, telephone1, emailaddress1, revenue, primarycontactid, industrycode
Lookups sampled: contact (10 records), systemuser (3 records)
File: .devkit/demo_data/account_20260423_071500.json

Next: create_records(entity_name="account", records_json=".devkit/demo_data/account_20260423_071500.json")
```

---

## Tool description (MCP)

```
Generate demo data for a Dataverse entity using Bogus fake data library.
Reads entity metadata to auto-detect field types and generate appropriate fake values.
Lookups populated with real GUIDs from target entities. Max 500 records. Default 10.
Output saved to .devkit/demo_data/ as JSON file — pass file path to create_records.

WORKFLOW:
  Step 1: generate_demo_data(entity_name="account", count=50) → file path
  Step 2: create_records(entity_name="account", records_json=<file path>)

TIPS:
- count > 500 → error
- Empty fields = auto-select all creatable fields
- Smart mapping: emailaddress→Email, telephone→Phone, city→City, etc.
- Lookups auto-fetch real GUIDs. Empty targets → skipped with warning
- Polymorphic lookups: uses "field@entity" syntax automatically
- Use seed for reproducible data
```

---

## Verification

1. `/claude-build-cli` → 0 errors
2. Kill MCP → restart
3. `generate_demo_data(entity_name="account", count=5)` → file path
4. `generate_demo_data(entity_name="account", count=501)` → error
5. `generate_demo_data(entity_name="account")` → default 10
6. `create_records(records_json="<path>")` → records created, file deleted
7. Inline JSON vẫn works
8. `seed=42` → reproducible
9. Empty lookup → warning
10. AGENTS.md: 35 → 36

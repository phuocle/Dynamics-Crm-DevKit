# Plan: Thêm MCP tool `generate_demo_data` + Cập nhật `create_records` hỗ trợ file path

---

## Bối cảnh

Tool `create_records` đã hoạt động — tạo nhiều records song song bằng `Parallel.ForEachAsync` + `CreateAsync`. Tuy nhiên, AI agent phải tự nghĩ ra fake data cho từng field — tốn thời gian và dễ sai.

Tool mới `generate_demo_data` sẽ:
- Đọc entity metadata từ Dataverse (field types, picklist options, lookup targets)
- Dùng thư viện **Bogus** (.NET) để tự động generate fake data đúng kiểu
- Fetch real GUIDs từ target entities cho lookup fields
- Save kết quả ra file JSON trong `.devkit/demo_data/`
- Trả về file path để AI agent dùng tiếp

**Use case**: Tạo demo/seed data nhanh (≤500 rows/entity) cho dev/test environments.

---

## Pipeline 3 bước — Tận dụng LLM cho Realistic Data

MCP tool không có LLM, nhưng **AI agent gọi MCP tool chính LÀ LLM**. Thiết kế pipeline 3 bước để tận dụng:

```
Bước 1: generate_demo_data(entity="account", count=50)
        → Tool gen fake data (Level 1 + 2)
        → Save file: .devkit/demo_data/account_20260423_071500.json

Bước 2: LLM đọc metadata bằng get_tables(entity_name="account") để hiểu field types
        → LLM đọc file JSON → sửa cho realistic (Level 3)
        → Email match company domain (john@contoso.com nếu company = Contoso)
        → Revenue correlate với numberOfEmployees
        → Address consistent (city + state + zip cùng region)
        → Industry-appropriate data ranges

Bước 3: create_records(entity="account", records_json="<file path>")
        → Đọc file → tạo records → xóa file sau khi đọc
```

### 3 Level of Realism

| Level | Ai xử lý | Ví dụ |
|---|---|---|
| **1. Type-correct** | Tool (Bogus) | String → text, Money → amount, DateTime → date, Picklist → valid option value |
| **2. Relationship-correct** | Tool (FetchXML) | Lookup `primarycontactid` → fetch real GUID từ bảng `contact` |
| **3. Context-correct** | LLM (đọc + sửa file) | Email match company, revenue correlate employees, address consistent |

**Max 500 rows** — đủ nhỏ để LLM đọc toàn bộ file và sửa. Nếu count > 500 → tool từ chối (dùng data import tools cho volumes lớn hơn).

---

## Nghiên cứu: Các GitHub Projects về Realistic Demo Data

### Các project đã phân tích

| Project | Stars | Ngôn ngữ | Approach | Ý tưởng hay nhất |
|---|---|---|---|---|
| [Snaplet Seed](https://github.com/snaplet/seed) | 778 | TypeScript | Đọc DB schema tự động, auto-resolve foreign keys, optional LLM cho text | **Gần nhất với Demo Monkey** — schema-driven + relationship-aware + AI text |
| [SDV (Synthetic Data Vault)](https://github.com/sdv-dev/SDV) | 3.5K | Python | ML learn từ real data → generate synthetic giữ đúng statistical patterns. Multi-table relationships | Học distribution từ data thật, giữ correlation giữa columns |
| [Synthea](https://github.com/synthetichealth/synthea) | 3.1K | Java | Rule-based lifecycle simulation (birth → death), dùng real census statistics | **Modular rule system** — mỗi module define logic cho 1 domain |
| [MOSTLY AI](https://github.com/mostly-ai/mostly-python) | OSS | Python | Neural generative models (TabularARGN), multi-table, privacy-safe | Conditional sampling, re-balancing underrepresented segments |
| [Metabase Dataset Generator](https://github.com/metabase/dataset-generator) | 759 | — | AI generates contextually appropriate data cho dashboards/demos | AI-driven, demo-focused |
| [Demo Monkey](https://app.demo-monkey.net/) | N/A | — | Commercial (not open-source) | Target benchmark cho realistic demo data |
| [Faker (Python)](https://github.com/joke2k/faker) | 19.2K | Python | Classic fake data generator | 50+ locales, comprehensive datasets |
| [Bogus (.NET)](https://github.com/bchavez/Bogus) | ~3K | C# | .NET fake data generator | **Đã dùng trong project** — `FakerHelper.cs` trong test templates |
| [DataFaker (JVM)](https://github.com/datafaker-net/datafaker) | 1.7K | Java | Modern fork of java-faker, schema support, 100+ providers | Enterprise-focused, CSV/JSON/YAML output |

### Key Insight từ Snaplet Seed

> *"Optionally leverage LLMs for generating realistic text entries."*

Approach của Snaplet: tool gọi LLM API để sinh text realistic.
Approach của chúng ta: **LLM IS the caller** — tool gen file ≤500 rows → LLM đọc + sửa → pass vào `create_records`. Không cần gọi thêm LLM API — LLM đã ở đó rồi.

### Thông tin Bogus Library

- NuGet: `Bogus` v35.6.5 (October 2025)
- Package size: **3.52 MB** (self-contained, embedded locale data cho 50+ quốc gia)
- Dependencies trên net10.0/netstandard2.0: **0** — không có dependency nào
- Đã dùng trong project: `ProjectTemplates/CSharp/07.SharedTestProjectTemplate/FakerHelper.cs`
- Hỗ trợ: .NET 10.0, 9.0, 8.0, 7.0, 6.0, .NET Standard 2.0/1.3, .NET Framework 4.0+

---

## Files cần thay đổi

| File | Action | Chi tiết |
|---|---|---|
| `DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj` | Thêm package reference | `<PackageReference Include="Bogus" />` |
| `DynamicsCrm.DevKit.Cli\Mcp\Tools\GenerateDemoDataTool.cs` | **Tạo mới** | Tool chính |
| `DynamicsCrm.DevKit.Cli\Mcp\Tools\CreateRecordsTool.cs` | **Cập nhật** | Thêm `ResolveRecordsInput()` — detect file path vs inline JSON |
| `DynamicsCrm.DevKit.Cli\Mcp\Tools\Models\StructuredResults.cs` | Thêm model | `GenerateDemoDataResult` class |
| `DynamicsCrm.DevKit.Cli\Mcp\McpServerHost.cs` | Thêm vào map | `[nameof(GenerateDemoDataTool)] = "basic"` trong `ToolCategoryMap` |
| `AGENTS.md` | Cập nhật | Tool count 35 → 36, thêm `generate_demo_data` vào danh sách |

---

## Phần 1: Cập nhật `create_records` — Hỗ trợ file path

### Vấn đề

Hiện tại `records_json` chỉ nhận inline JSON array. Với 500 records × 20 fields ≈ 1–2MB JSON — quá lớn cho MCP text content.

### Giải pháp

Thêm method `ResolveRecordsInput()` — detect file path vs inline JSON. Pattern giống hệt `ManageFormTool.ResolveFormXmlInput()` (file `ManageFormTool.cs` line 979-997).

### Pattern đã có trong codebase

`build_form_xml` save file `.devkit/modified_forms/*.formxml` → return path → `manage_form` đọc file:
```csharp
// ManageFormTool.cs line 981-997
// Detect: không bắt đầu '<' + kết thúc '.formxml' → đọc file + delete
// Ngược lại → inline XML
```

Tương tự:
- `build_sitemap_xml` → `.devkit/modified_sitemaps/` → `manage_sitemap`
- `build_ribbon_xml` → `.devkit/modified_ribbons/` → `manage_ribbon`

### Logic detect cho `create_records`

```csharp
private static string ResolveRecordsInput(string recordsJson)
{
    var trimmed = recordsJson.Trim();

    // File path: kết thúc .json VÀ không bắt đầu '[' (inline JSON array luôn bắt đầu '[')
    if (!trimmed.StartsWith("[") && trimmed.EndsWith(".json", StringComparison.OrdinalIgnoreCase))
    {
        if (!File.Exists(trimmed))
            return null; // caller xử lý error

        var content = File.ReadAllText(trimmed, Encoding.UTF8);

        // Xóa temp file sau khi đọc (best effort)
        try { File.Delete(trimmed); } catch { }

        return content;
    }

    // Inline JSON — trả về nguyên bản
    return recordsJson;
}
```

### Thay đổi trong method `create_records`

Thêm ở đầu method, sau validation `records_json`:
```csharp
var resolved = ResolveRecordsInput(records_json);
if (resolved == null)
    return ErrorResult($"Error: File not found: {records_json.Trim()}");
// Dùng resolved thay cho records_json từ đây
```

### Cập nhật tool description

Thêm vào description: `records_json: JSON array (inline) OR file path from generate_demo_data (.json)`

### Backward compatible

Inline JSON vẫn hoạt động bình thường — chỉ thêm khả năng đọc file.

---

## Phần 2: Tool `generate_demo_data`

### Parameters

| Param | Type | Default | Mô tả |
|---|---|---|---|
| `entity_name` | string | bắt buộc | Entity logical name (ví dụ: `account`, `contact`, `lead`) |
| `count` | int | **10** | Số records cần generate. Tối thiểu 1, tối đa **500**. Mặc định 10 nếu không chỉ định |
| `fields` | string | `""` | Danh sách field names, cách nhau bằng dấu phẩy. Rỗng = auto-select tất cả fields hợp lệ |
| `seed` | int | 0 | Bogus seed cho reproducible data. 0 = random mỗi lần gọi |

**Không có `template` param** — tool giữ đơn giản, chỉ gen Level 1+2. LLM handle Level 3 bằng cách đọc/sửa file output.

**Không có `locale` param** — hardcode `"en"` (tiếng Anh).

### Output model

```csharp
internal sealed class GenerateDemoDataResult
{
    [JsonPropertyName("entity")]
    public string Entity { get; set; }

    [JsonPropertyName("count")]
    public int Count { get; set; }

    [JsonPropertyName("fieldsGenerated")]
    public int FieldsGenerated { get; set; }

    [JsonPropertyName("fieldList")]
    public List<string> FieldList { get; set; } = [];

    [JsonPropertyName("filePath")]
    public string FilePath { get; set; }

    [JsonPropertyName("lookupsSampled")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public Dictionary<string, int> LookupsSampled { get; set; }

    [JsonPropertyName("warnings")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public List<string> Warnings { get; set; }
}
```

### Constructor DI

```csharp
public GenerateDemoDataTool(ServiceClient serviceClient)
```

Chỉ cần `ServiceClient` để đọc metadata + fetch lookup data. Không cần `McpDryRunOptions` vì tool read-only (không tạo records, chỉ tạo file JSON trên disk).

### MCP attributes

```csharp
[McpServerTool(Name = "generate_demo_data", Title = "Generate demo data for an entity",
    Destructive = false, ReadOnly = true, Idempotent = true,
    UseStructuredContent = true, OutputSchemaType = typeof(GenerateDemoDataResult))]
```

`ReadOnly = true`, `Destructive = false` — tool chỉ generate file JSON, không tạo/sửa/xóa records trong Dataverse.

### Các bước thực hiện (implementation steps)

#### Bước 1: Validate input

- `entity_name` bắt buộc, không được rỗng
- `count`: mặc định 10. Nếu > 500 → trả error: `"Error: count exceeds 500. Max 500 records per call. For larger volumes, use Dataverse data import."`
- Clamp count: Math.Clamp(count, 1, 500)

#### Bước 2: Load entity metadata

Dùng `RetrieveEntityRequest` với `EntityFilters.Attributes` — cùng pattern với `EntityParserHelper`:

```csharp
var request = new RetrieveEntityRequest
{
    LogicalName = entityName,
    EntityFilters = EntityFilters.Attributes
};
var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
var attributes = response.EntityMetadata.Attributes.ToDictionary(a => a.LogicalName);
```

Cache bằng `ConcurrentDictionary<string, Dictionary<string, AttributeMetadata>>` — metadata chỉ load 1 lần cho mỗi entity.

#### Bước 3: Chọn fields

**Khi `fields` rỗng (auto-select)**:

Chọn tất cả attributes thỏa `IsValidForCreate == true`, **loại bỏ**:
- Primary key (`IsPrimaryId == true`) — Dataverse tự tạo GUID
- `IsLogical == true` — virtual columns từ bảng khác
- `AttributeOf != null` — calculated/rollup fields
- System audit fields: `createdon`, `modifiedon`, `createdby`, `modifiedby`, `owningbusinessunit`
- `UniqueIdentifierAttributeMetadata` — primary ID
- `ImageAttributeMetadata`, `FileAttributeMetadata` — binary data

**Khi `fields` có giá trị**:

Parse comma-separated → validate từng field tồn tại trong metadata. Field không tồn tại → warning + skip.

#### Bước 4: Pre-fetch lookup data (real GUIDs)

**Vấn đề**: Lookup fields cần GUID thật từ target entity. Random GUID sẽ fail khi create vì Dataverse validate referential integrity.

**Giải pháp**: Trước khi generate, tool fetch top 50 active records từ mỗi target entity.

```csharp
var lookupPool = new Dictionary<string, List<Guid>>();  // targetEntity → danh sách GUIDs

foreach (var lookupAttr in selectedLookupFields)
{
    var target = lookupAttr.Targets?.FirstOrDefault();
    if (target == null || lookupPool.ContainsKey(target)) continue;

    var fetchXml = $@"<fetch top='50'>
      <entity name='{target}'>
        <attribute name='{target}id'/>
        <filter>
          <condition attribute='statecode' operator='eq' value='0'/>
        </filter>
        <order attribute='createdon' descending='true'/>
      </entity>
    </fetch>";

    var results = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
    lookupPool[target] = results.Entities.Select(e => e.Id).ToList();
}
```

**Khi generate mỗi record**:
```csharp
var target = lookupAttr.Targets.First();
if (lookupPool.TryGetValue(target, out var guids) && guids.Count > 0)
{
    var selectedGuid = faker.PickRandom(guids);
    // Polymorphic lookup (Targets.Length > 1): dùng "field@entity" key
    var key = lookupAttr.Targets.Length > 1 ? $"{fieldName}@{target}" : fieldName;
    record[key] = selectedGuid.ToString();
}
```

**Xử lý các trường hợp đặc biệt**:

| Trường hợp | Xử lý |
|---|---|
| `ownerid` | Auto-include trong auto-select. Fetch active users từ `systemuser` (top 50), random assign → mỗi record có owner khác nhau |
| Polymorphic lookup (`customerid` → account/contact) | Dùng `field@entity` syntax. Random chọn 1 trong các targets |
| Self-referential (`parentaccountid` trên account) | Fetch records đã có. Nếu bảng trống → skip field + warning |
| Target entity rỗng (không có record active nào) | Skip field + warning: `"Skipped lookup 'primarycontactid': no active records in 'contact'"` |

#### Bước 5: Build generators theo metadata subclass

| Metadata Subclass | Bogus Generator | Ghi chú |
|---|---|---|
| `StringAttributeMetadata` | **Smart mapping** theo tên field (xem bảng dưới) | Respect `MaxLength` |
| `MemoAttributeMetadata` | `faker.Lorem.Paragraph()` | Respect `MaxLength` |
| `IntegerAttributeMetadata` | `faker.Random.Int(MinValue, MaxValue)` | Dùng MinValue/MaxValue từ metadata |
| `DecimalAttributeMetadata` | `faker.Random.Decimal(MinValue, MaxValue)` | Dùng Precision từ metadata |
| `DoubleAttributeMetadata` | `faker.Random.Double(MinValue, MaxValue)` | |
| `MoneyAttributeMetadata` | `faker.Finance.Amount(MinValue, MaxValue)` | |
| `BooleanAttributeMetadata` | `faker.Random.Bool()` | |
| `DateTimeAttributeMetadata` | `faker.Date.Recent(365)` → format ISO 8601 | `"2025-08-15T10:30:00"` |
| `BigIntAttributeMetadata` | `faker.Random.Long(MinValue, MaxValue)` | |
| `PicklistAttributeMetadata` | `faker.PickRandom(OptionSet.Options.Select(o => o.Value))` | Chỉ pick từ valid options |
| `MultiSelectPicklistAttributeMetadata` | Random subset (1–3 items) từ `Options[].Value` | |
| `LookupAttributeMetadata` | `faker.PickRandom(lookupPool[target])` | Real GUIDs từ bước 4 |

#### Smart string field mapping (Level 1 — Type-correct)

Thay vì gen `Lorem.Word()` cho tất cả string fields, pattern-match tên field để gen data có nghĩa:

| Tên field chứa | Bogus Generator | Ví dụ output |
|---|---|---|
| `name` + entity là `account` | `faker.Company.CompanyName()` | "Contoso Ltd" |
| `firstname` | `faker.Name.FirstName()` | "John" |
| `lastname` | `faker.Name.LastName()` | "Smith" |
| `fullname` | `faker.Name.FullName()` | "John Smith" |
| `emailaddress` | `faker.Internet.Email()` | "john.smith@example.com" |
| `telephone`, `phone`, `fax` | `faker.Phone.PhoneNumber()` | "+1-555-0100" |
| `websiteurl`, `website` | `faker.Internet.Url()` | "https://contoso.com" |
| `city` | `faker.Address.City()` | "Seattle" |
| `stateorprovince` | `faker.Address.State()` | "Washington" |
| `country` | `faker.Address.Country()` | "United States" |
| `postalcode`, `zip` | `faker.Address.ZipCode()` | "98101" |
| `line1`, `street` | `faker.Address.StreetAddress()` | "123 Main St" |
| `line2` | `faker.Address.SecondaryAddress()` | "Suite 200" |
| `jobtitle` | `faker.Name.JobTitle()` | "Sales Manager" |
| `department` | `faker.Commerce.Department()` | "Electronics" |
| `description` | `faker.Lorem.Sentence(10)` | "Lorem ipsum dolor sit amet..." |
| `subject` | `faker.Lorem.Sentence(5)` | "Important business topic" |
| `accountnumber`, `code`, `number` | `faker.Random.AlphaNumeric(8).ToUpper()` | "A3B5C7D9" |
| `companyname` | `faker.Company.CompanyName()` | "Fabrikam Inc" |
| Fallback (không match pattern nào) | `faker.Lorem.Word()` | "lorem" (respect MaxLength) |

#### Bước 6: Generate records

```csharp
var faker = seed > 0 ? new Faker("en").UseSeed(seed) : new Faker("en");
var records = new List<Dictionary<string, object>>();

for (var i = 0; i < count; i++)
{
    var record = new Dictionary<string, object>();
    foreach (var field in selectedFields)
    {
        var value = GenerateValue(field, faker, lookupPool, entityName);
        if (value != null)
            record[field.key] = value;
    }
    records.Add(record);
}
```

#### Bước 7: Save file

```csharp
var outputDir = Path.Combine(Directory.GetCurrentDirectory(), ".devkit", "demo_data");
Directory.CreateDirectory(outputDir);
var timestamp = DateTime.Now.ToString("yyyyMMdd_HHmmss");
var fileName = $"{entityName}_{timestamp}.json";
var filePath = Path.Combine(outputDir, fileName);

var json = JsonSerializer.Serialize(records, new JsonSerializerOptions { WriteIndented = true });
File.WriteAllText(filePath, json, Encoding.UTF8);
```

#### Bước 8: Return kết quả

```csharp
var structured = new GenerateDemoDataResult
{
    Entity = entityName,
    Count = records.Count,
    FieldsGenerated = selectedFields.Count,
    FieldList = selectedFields.Select(f => f.name).ToList(),
    FilePath = filePath,
    LookupsSampled = lookupPool.ToDictionary(kv => kv.Key, kv => kv.Value.Count),
    Warnings = warnings.Count > 0 ? warnings : null
};
```

### TextContent output mẫu

```
Generated 50 'account' records (seed: 42)
Fields: name, telephone1, emailaddress1, websiteurl, revenue, primarycontactid, industrycode, description
Lookups sampled: contact (10 records)
File: .devkit/demo_data/account_20260423_071500.json

⚠ Skipped lookup 'parentaccountid': no active records in 'account' (self-referential on empty table)

Next steps:
1. get_tables(entity_name="account") to understand field types, picklist options, and relationships
2. Read the file to review/modify data for realism (match emails to companies, correlate values, etc.)
3. create_records(entity_name="account", records_json=".devkit/demo_data/account_20260423_071500.json")
```

---

## Tool description (MCP — hiển thị cho AI agent)

```
Generate demo data for a Dataverse entity using Bogus fake data library.
Reads entity metadata to auto-detect field types and generate appropriate fake values.
Lookups are populated with real GUIDs fetched from target entities (top 50 active records).
Output saved to .devkit/demo_data/ as JSON file. Max 500 records. Default 10.

WORKFLOW (3-step pipeline for realistic data):
  Step 1: generate_demo_data(entity_name="account", count=50)  → file path
  Step 2: get_tables(entity_name="account") → understand field metadata
         Then read file, review/modify for realistic business context
  Step 3: create_records(entity_name="account", records_json=<file path from step 1>)

WHY 500 MAX: File small enough for LLM to read and enhance with business context
(match email domains to company names, correlate revenue with employee count, etc.)

TIPS:
- Default count=10 if not specified
- count > 500 → error (use data import for larger volumes)
- Empty fields param = auto-select all creatable fields
- Specify fields to limit: fields="name,telephone1,emailaddress1"
- Smart field mapping: emailaddress→Email, telephone→Phone, city→City, etc.
- Lookups auto-fetch real GUIDs. Empty targets → skipped with warning
- Polymorphic lookups (customerid): uses "field@entity" syntax automatically
- Use seed for reproducible data across runs
```

---

## Verification (kiểm tra sau khi implement)

1. `/claude-build-cli` → build thành công, 0 errors
2. Kill MCP process → restart với tool mới
3. Test `generate_demo_data(entity_name="account", count=5)` → trả về file path
4. Test `generate_demo_data(entity_name="account", count=501)` → trả error "exceeds 500"
5. Test `generate_demo_data(entity_name="account")` → mặc định 10 records
6. Kiểm tra file tồn tại tại `.devkit/demo_data/account_*.json` với JSON array hợp lệ
7. Test `create_records(entity_name="account", records_json="<path từ bước 3>")` → records được tạo, file bị xóa sau khi đọc
8. Test `create_records` với inline JSON vẫn hoạt động (backward compatible)
9. Test `generate_demo_data(entity_name="account", count=3, fields="name,telephone1")` → chỉ 2 fields
10. Test `generate_demo_data(entity_name="account", count=3, seed=42)` → chạy 2 lần cho cùng kết quả
11. Test lookup với target entity rỗng → warning message, field bị skip
12. Cập nhật AGENTS.md: 35 → 36 tools

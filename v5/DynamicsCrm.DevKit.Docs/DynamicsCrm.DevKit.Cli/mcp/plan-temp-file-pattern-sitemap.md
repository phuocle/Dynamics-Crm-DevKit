# Plan: Add Temp File Pattern to `build_sitemap_xml` → `manage_sitemap`

## Context

Khi AI gọi `build_form_xml`, FormXML (10-500KB+) được save vào temp file thay vì return inline — tránh AI truncate data khi truyền sang `manage_form`. Pattern này đã proven work.

Hiện tại `build_sitemap_xml` return SiteMapXML **inline** trong cả `TextContentBlock` lẫn `StructuredContent`. AI nhận full XML → phải copy nguyên XML đó → truyền lại cho `manage_sitemap`. Data đi qua AI context **2 lần** → risk truncation.

**Goal**: Apply cùng temp file pattern cho `build_sitemap_xml` → `manage_sitemap`.

---

## Reference Pattern (từ `build_form_xml` → `manage_form`)

| Aspect | Value |
|--------|-------|
| Temp Directory | `.devkit/modified_forms/` |
| File Extension | `.formxml` |
| File Naming | `{entityName}_{formId:N}.formxml` |
| Encoding | UTF-8 |
| Detection Logic | `!starts with '<'` AND `ends with .formxml` |
| Cleanup | Auto-delete after read (best-effort try-catch) |
| Error on Missing | Return `null` → caller returns error |
| StructuredResult Property | `FormXmlPath` (nullable string) |
| Source file (save) | `BuildFormXmlTool.cs` lines 265-270 |
| Source file (resolve) | `ManageFormTool.cs` lines 978-996 (`ResolveFormXmlInput`) |

---

## Files cần sửa (3 files)

| # | File | Thay đổi |
|---|------|----------|
| 1 | `DynamicsCrm.DevKit.Cli\Mcp\Tools\Models\StructuredResults.cs` | Đổi property `SiteMapXml` → `SiteMapXmlPath` |
| 2 | `DynamicsCrm.DevKit.Cli\Mcp\Tools\BuildSiteMapXmlTool.cs` | Save temp file + đổi return block + cập nhật Description |
| 3 | `DynamicsCrm.DevKit.Cli\Mcp\Tools\ManageSiteMapTool.cs` | Thêm `ResolveSiteMapXmlInput()` + gọi ở update/create + cập nhật Description |

---

## Step 1: Sửa `BuildSiteMapXmlResult` trong `StructuredResults.cs`

**File**: `DynamicsCrm.DevKit.Cli\Mcp\Tools\Models\StructuredResults.cs`
**Lines**: 330-332

### Hiện tại (line 330-332):

```csharp
[JsonPropertyName("siteMapXml")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string SiteMapXml { get; set; }
```

### Đổi thành:

```csharp
[JsonPropertyName("siteMapXmlPath")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string SiteMapXmlPath { get; set; }
```

**Lý do**: Giống `BuildFormXMLResult.FormXmlPath` (line 210-213) — property chứa đường dẫn file, không chứa XML content.

---

## Step 2: Sửa return block trong `BuildSiteMapXmlTool.cs`

**File**: `DynamicsCrm.DevKit.Cli\Mcp\Tools\BuildSiteMapXmlTool.cs`
**Lines**: 119-144

### Hiện tại (lines 119-144):

```csharp
// Step 7: Serialize and return
var modifiedXml = siteMapDoc.ToString(SaveOptions.None);
var resultSb = new StringBuilder(256);
resultSb.AppendLine($"[BuildSiteMapXml] {appName}");
resultSb.AppendLine($"AppModuleId: {appModuleId}");
resultSb.AppendLine($"Operations: {opSummaries.Count}");
foreach (var s in opSummaries)
    resultSb.AppendLine($"  - {s}");
resultSb.AppendLine();
resultSb.AppendLine("Next step: Call manage_sitemap(action='update') with the siteMapXml below to apply changes.");
resultSb.AppendLine();
resultSb.AppendLine(modifiedXml);

return new CallToolResult
{
    Content = [new TextContentBlock { Text = resultSb.ToString() }],
    StructuredContent = JsonSerializer.SerializeToElement(new BuildSiteMapXmlResult
    {
        AppModuleId = appModuleId.ToString(),
        AppName = appName,
        Status = "success",
        OperationsCount = opSummaries.Count,
        OperationSummaries = opSummaries,
        SiteMapXml = modifiedXml
    })
};
```

### Đổi thành:

```csharp
// Step 7: Serialize and save to temp file (avoids AI truncation)
var modifiedXml = siteMapDoc.ToString(SaveOptions.None);
var tempDir = Path.Combine(Directory.GetCurrentDirectory(), ".devkit", "modified_sitemaps");
Directory.CreateDirectory(tempDir);
var tempFileName = $"{appModuleId:N}.sitemap";
var tempFilePath = Path.Combine(tempDir, tempFileName);
File.WriteAllText(tempFilePath, modifiedXml, Encoding.UTF8);

// Step 8: Build response
var resultSb = new StringBuilder(256);
resultSb.AppendLine($"[BuildSiteMapXml] {appName}");
resultSb.AppendLine($"AppModuleId: {appModuleId}");
resultSb.AppendLine($"Operations: {opSummaries.Count}");
foreach (var s in opSummaries)
    resultSb.AppendLine($"  - {s}");
resultSb.AppendLine();
resultSb.AppendLine($"SiteMapXml saved to: {tempFilePath}");
resultSb.AppendLine();
resultSb.AppendLine($"Next step: manage_sitemap(action='update', app='{appName}', sitemapxml='{tempFilePath}')");

return new CallToolResult
{
    Content = [new TextContentBlock { Text = resultSb.ToString() }],
    StructuredContent = JsonSerializer.SerializeToElement(new BuildSiteMapXmlResult
    {
        AppModuleId = appModuleId.ToString(),
        AppName = appName,
        Status = "success",
        OperationsCount = opSummaries.Count,
        OperationSummaries = opSummaries,
        SiteMapXmlPath = tempFilePath
    })
};
```

### Thay đổi chi tiết:

1. **Thêm temp file save** — pattern giống `build_form_xml` (line 265-270):
   - Directory: `.devkit/modified_sitemaps/` (tương tự `.devkit/modified_forms/`)
   - File name: `{appModuleId:N}.sitemap` (GUID không gạch ngang + extension `.sitemap`)
   - Encoding: UTF-8
2. **Xóa inline XML** khỏi TextContentBlock — không còn `resultSb.AppendLine(modifiedXml)`
3. **Đổi "Next step"** instruction — hướng dẫn AI truyền file path thay vì XML
4. **Đổi StructuredContent** — `SiteMapXml = modifiedXml` → `SiteMapXmlPath = tempFilePath`

### Lưu ý: cần `using System.IO;` và `using System.Text;`

Kiểm tra file `BuildSiteMapXmlTool.cs` đã có sẵn 2 using này chưa. Nếu chưa thì thêm.

---

## Step 3: Thêm `ResolveSiteMapXmlInput()` vào `ManageSiteMapTool.cs`

**File**: `DynamicsCrm.DevKit.Cli\Mcp\Tools\ManageSiteMapTool.cs`

### Thêm method mới (copy pattern từ `ManageFormTool.cs` line 978-996):

```csharp
/// <summary>
/// Resolves the sitemapxml input: if it's a file path (from build_sitemap_xml), reads the file content.
/// If it's inline XML, returns as-is. Returns null if the file path doesn't exist.
/// </summary>
private static string ResolveSiteMapXmlInput(string sitemapxml)
{
    // Detect file path: must end with .sitemap and NOT start with '<' (which means inline XML)
    if (!sitemapxml.TrimStart().StartsWith("<") && sitemapxml.EndsWith(".sitemap", StringComparison.OrdinalIgnoreCase))
    {
        if (!File.Exists(sitemapxml))
            return null;

        var content = File.ReadAllText(sitemapxml, Encoding.UTF8).Trim();

        // Clean up temp file after reading
        try { File.Delete(sitemapxml); } catch { /* best effort cleanup */ }

        return content;
    }

    // Inline XML — return as-is
    return sitemapxml;
}
```

### Logic detection:

- Không bắt đầu bằng `<` (inline XML indicator) **VA** kết thúc bằng `.sitemap` → file path
- File tồn tại → đọc UTF-8 → xóa file → return content
- File không tồn tại → return `null`
- Bắt đầu bằng `<` hoặc không kết thúc `.sitemap` → inline XML, return as-is

**Vị trí đặt method**: Gần cuối file, trước `StripXmlDeclaration` method (khoảng line 1000-1005).

---

## Step 4: Gọi `ResolveSiteMapXmlInput()` trong main handler

**File**: `DynamicsCrm.DevKit.Cli\Mcp\Tools\ManageSiteMapTool.cs`

### Thêm resolve TRƯỚC switch statement (line 89-97)

#### Hiện tại (lines 89-97):

```csharp
if (string.IsNullOrWhiteSpace(sitemapxml))
    return ErrorResult("Error: sitemapxml is required for action='" + actionName + "'.");

try
{
    switch (actionName)
    {
        case "update":
            return UpdateSiteMapXml(appModuleId, sitemapxml, validate, backup, auto_publish);

        case "create":
            return CreateSiteMap(appModuleId, sitemapxml.Trim(), validate, auto_publish);

        case "undo":
            return UndoSiteMap(appModuleId, sitemapxml.Trim(), validate, auto_publish);
```

#### Đổi thành:

```csharp
if (string.IsNullOrWhiteSpace(sitemapxml))
    return ErrorResult("Error: sitemapxml is required for action='" + actionName + "'.");

// Resolve temp file path (from build_sitemap_xml) or keep inline XML
var resolvedSiteMapXml = (actionName == "undo")
    ? sitemapxml.Trim()  // undo expects backup file path, not sitemap temp file
    : ResolveSiteMapXmlInput(sitemapxml.Trim());
if (resolvedSiteMapXml == null)
    return ErrorResult(
        $"[Error] SiteMapXml file not found\n" +
        $"Path: {sitemapxml.Trim()}\n" +
        $"Tip: The file path from build_sitemap_xml may have been deleted. Re-run build_sitemap_xml to regenerate.");

try
{
    switch (actionName)
    {
        case "update":
            return UpdateSiteMapXml(appModuleId, resolvedSiteMapXml, validate, backup, auto_publish);

        case "create":
            return CreateSiteMap(appModuleId, resolvedSiteMapXml.Trim(), validate, auto_publish);

        case "undo":
            return UndoSiteMap(appModuleId, resolvedSiteMapXml.Trim(), validate, auto_publish);
```

### Thay đổi chi tiết:

1. **Thêm resolve call** sau null check — resolve file path hoặc giữ inline XML
2. **Skip undo** — `undo` action nhận backup file path (JSON format), KHÔNG phải sitemap temp file. Giữ nguyên behavior cũ cho undo
3. **Error handling** — nếu `ResolveSiteMapXmlInput` return `null` (file not found), return error rõ ràng
4. **Truyền `resolvedSiteMapXml`** thay vì `sitemapxml` cho `update` và `create`

---

## Step 5 (Optional): Cập nhật [Description] của parameter `sitemapxml`

**File**: `DynamicsCrm.DevKit.Cli\Mcp\Tools\ManageSiteMapTool.cs`
**Line**: 64 (parameter description)

### Hiện tại:

```csharp
[Description("For 'update'/'create': SiteMap XML. For 'undo': backup file path...")]
string sitemapxml = "",
```

### Đổi thành:

```csharp
[Description("For 'update'/'create': SiteMap XML string or file path from build_sitemap_xml. For 'undo': backup file path...")]
string sitemapxml = "",
```

---

## Checklist Verification

| # | Verify | How |
|---|--------|-----|
| 1 | Build thành công | Run `/build-cli` |
| 2 | Inline XML vẫn work | Gọi `manage_sitemap(sitemapxml='<SiteMap>...</SiteMap>')` trực tiếp — phải hoạt động bình thường |
| 3 | Temp file path work | Gọi `build_sitemap_xml` → lấy path → gọi `manage_sitemap(sitemapxml='{path}')` — phải đọc file, update, xóa file |
| 4 | File not found error | Gọi `manage_sitemap(sitemapxml='C:\fake\path.sitemap')` — phải return error rõ ràng |
| 5 | Undo không bị ảnh hưởng | Gọi `manage_sitemap(action='undo', sitemapxml='{backup_path}')` — phải hoạt động như cũ |
| 6 | Temp file được xóa | Sau khi `manage_sitemap` đọc xong, file `.devkit/modified_sitemaps/` phải bị xóa |

---

## Data Flow Diagram

```
BEFORE (inline):
  build_sitemap_xml → [SiteMapXML inline in response] → AI copies XML → manage_sitemap(sitemapxml=<FULL_XML>)
  Risk: AI truncates large XML when copying between tool calls

AFTER (temp file):
  build_sitemap_xml → save to .devkit/modified_sitemaps/{guid}.sitemap → [return file PATH only]
  → AI passes PATH → manage_sitemap(sitemapxml='{file_path}')
  → ResolveSiteMapXmlInput() reads file → deletes file → processes XML
  Zero truncation risk: AI only passes a short file path string
```

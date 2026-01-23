---
trigger: always_on
---

# 📋 DynamicsCrm.DevKit.Analyzers Development Rules

## 🏗️ Project Structure Overview

| Folder | Purpose |
|--------|---------|
| `DynamicsCrm.DevKit.Analyzers\` | Main analyzer project (netstandard2.0) |
| `DynamicsCrm.DevKit.Analyzers\CrmAnalyzers\` | Individual analyzer implementations |
| `DynamicsCrm.DevKit.Analyzers.Test\` | Unit tests with xUnit + Roslyn Test Framework |
| `DynamicsCrm.DevKit.Analyzers.Test\Tests\` | Test classes for each analyzer |
| `DynamicsCrm.DevKit.Analyzers.Test\Verifier\` | `CSharpAnalyzerVerifier<T>` utility |
| `DynamicsCrm.DevKit.Tests\TestAnalyzers\` | Visual Studio integration tests |
| `DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Analyzers\` | Documentation for each analyzer |

## 📁 Core Files (Must Understand Before Making Changes)

| File | Purpose |
|------|---------|
| `DiagnosticIdentifiers.cs` | All 21 analyzer IDs (DEVKIT1001-DEVKIT1021) |
| `DiagnosticDescriptors.cs` | Descriptors with ID, title, message, severity, description |
| `DiagnosticCategories.cs` | Category constants (DynamicsCrm.DevKit) |
| `BaseDiagnosticAnalyzer.cs` | Base class all analyzers inherit from |
| `AnalyzerHelper.cs` | Utilities: `IsPluginOrWorkflowClass`, `IsInsidePluginOrWorkflow`, deprecated/batch request lists |
| `DiagnosticHelpers.cs` | `ReportDiagnostic()` overloads for reporting issues |

## 🔧 Khi có yêu cầu thay đổi hoặc fix lỗi

### Bước 1: Đọc kỹ yêu cầu và ngữ cảnh
1. Đọc kỹ lại nội dung anh Phước yêu cầu
2. Xác định analyzer nào liên quan (DEVKIT1001-DEVKIT1021)
3. Đọc lại các files core trong `DynamicsCrm.DevKit.Analyzers\`:
   - `DiagnosticIdentifiers.cs` - xem danh sách ID
   - `DiagnosticDescriptors.cs` - xem descriptors
   - Analyzer file tương ứng trong `CrmAnalyzers\`

### Bước 2: Kiểm tra Unit Tests
1. Chạy workflow `/build-analyzer` để build và run tests
2. Unit tests nằm tại: `DynamicsCrm.DevKit.Analyzers.Test\Tests\{AnalyzerName}Tests.cs`
3. Sử dụng pattern `[|code|]` để mark expected diagnostics:
   ```csharp
   var src = WrapInPlugin("[|new ColumnSet(true)|]");
   await CSharpAnalyzerVerifier<NotUseColumnSetTrueAnalyzer>.VerifyAnalyzerAsync(src);
   ```

### Bước 3: Kiểm tra Integration Tests trong Visual Studio
1. Folder: `DynamicsCrm.DevKit.Tests\TestAnalyzers\`
2. **Phải đảm bảo số lượng file `DEVKIT*.cs` bằng với số lượng analyzers đang support**
   - Hiện tại có 21 analyzers: DEVKIT1001 → DEVKIT1021
   - Phải có 21 files: `DEVKIT1001.cs` → `DEVKIT1021.cs`
3. Code mẫu phải trigger đúng diagnostic
4. **⚠️ AI không thể test được trong VS - phải yêu cầu anh Phước test thủ công**

### Bước 4: Kiểm tra và cập nhật Documentation
1. Folder: `DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Analyzers\`
2. Mỗi analyzer phải có file `DEVKIT{XXXX}.md` tương ứng
3. Sử dụng template: `DEVKIT.template.md`
4. Cập nhật `ANALYZERS_ROADMAP.md` nếu thay đổi status

## ➕ Khi có yêu cầu thêm mới analyzer

**⚠️ QUAN TRỌNG**: Phải chạy workflow trước khi bắt đầu:
```
/create-new-analyzer
```

Workflow này sẽ hướng dẫn chi tiết các bước từ A-Z để thêm mới 1 analyzer.

## ✅ Checklist Verification

Trước khi hoàn thành bất kỳ thay đổi nào, kiểm tra:

- [ ] `DiagnosticIdentifiers.cs` đã có ID mới (nếu thêm mới)?
- [ ] `DiagnosticDescriptors.cs` đã có descriptor mới (nếu thêm mới)?
- [ ] Analyzer file tồn tại trong `CrmAnalyzers\`?
- [ ] Unit test file tồn tại trong `DynamicsCrm.DevKit.Analyzers.Test\Tests\`?
- [ ] Unit tests pass? (chạy `/build-analyzer`)
- [ ] Integration test file `DEVKIT{XXXX}.cs` tồn tại trong `TestAnalyzers\`?
- [ ] Documentation file `DEVKIT{XXXX}.md` tồn tại trong `DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Analyzers\`?
- [ ] `ANALYZERS_ROADMAP.md` đã được cập nhật (nếu cần)?

## 📊 Current Analyzers Summary (DEVKIT1001-DEVKIT1021)

| ID | Analyzer | Severity |
|----|----------|----------|
| DEVKIT1001 | UpdateMessageShouldHaveFilteringAttributesAnalyzer | ❌ Error |
| DEVKIT1002 | NotUseColumnSetTrueAnalyzer | ⚠️ Warning |
| DEVKIT1003 | PluginImageAnalyzer | ❌ Error |
| DEVKIT1004 | DeprecatedAnalyzer | ℹ️ Info |
| DEVKIT1005 | EntityReferenceMaybeNullAnalyzer | ⚠️ Warning |
| DEVKIT1006 | BatchRequestInPluginAnalyzer | ⚠️ Warning |
| DEVKIT1007 | StatelessPluginAnalyzer | ❌ Error |
| DEVKIT1008 | ParallelExecutionInPluginAnalyzer | ❌ Error |
| DEVKIT1009 | KeepAliveFalseAnalyzer | ⚠️ Warning |
| DEVKIT1010 | HttpTimeoutAnalyzer | ⚠️ Warning |
| DEVKIT1011 | InvalidPluginExecutionExceptionAnalyzer | ⚠️ Warning |
| DEVKIT1012 | TracingServiceAnalyzer | ℹ️ Info |
| DEVKIT1013 | RetrieveMultiplePluginAnalyzer | ℹ️ Info |
| DEVKIT1014 | AppDomainEventAnalyzer | ❌ Error |
| DEVKIT1015 | GetAwaiterGetResultAnalyzer | ℹ️ Info |
| DEVKIT1016 | RetrieveAsIfPublishedAnalyzer | ℹ️ Info |
| DEVKIT1017 | ConsoleOutputAnalyzer | ℹ️ Info |
| DEVKIT1018 | FileIOAnalyzer | ❌ Error |
| DEVKIT1019 | PluginDepthAnalyzer | ⚠️ Warning |
| DEVKIT1020 | DataProviderDataSourceAnalyzer | ❌ Error |
| DEVKIT1021 | TracingServiceInCatchAnalyzer | ⚠️ Warning |

# Unit Test + Code Coverage Report — 2026-09-06

## Kết quả lần này — Command/ directory sweep (ưu tiên 1)

### Test run

```
Passed!  - Failed: 0, Passed: 3060, Skipped: 0, Total: 3060, Duration: 5m 58s
```

✅ 3060/3060 PASS — **0 failure** (+4 tests mới so với 3056 của ngày 2026-09-05)

### Coverage 3 file mục tiêu

| File | Trước (2026-09-05) | Sau (2026-09-06) | Đạt mục tiêu >95% |
|---|---:|---:|:---:|
| `Cli/Mcp/Tools/Command/CommandFlyout.cs` | 23% | **95%** | ✅ |
| `Cli/Mcp/Tools/Command/CommandCreateUpdate.cs` | 19% | **95%** | ✅ |
| `Cli/Mcp/Tools/Command/CommandListDetail.cs` | 49% | **100%** | ✅ |

Coverage XML: `TestResults/f39dea72-3c27-4f31-be0d-8540a1401b84/coverage.cobertura.xml`

### Test mới thêm (4 tests)

Trong `CommandListDetailFakeXrmEasyFullCoverageTests.cs`:

1. `List_OriginMigrated_AppliesOriginFilter` — phủ `origin='migrated'` (line 322-323)
2. `List_OriginEnhancedMigrated_AppliesOriginFilter` — phủ `origin='enhanced_migrated'` (line 322-323)
3. `List_AppNameResolved_AppliesAppModuleIdFilter` — phủ `appmoduleid` filter (line 331-338)
4. `List_AppActionWithAllAttributes_PopulatesCommandEntry` — phủ toàn bộ `AppActionInfo` mapping với enum values chưa map (origin=99 → ToString fallback) + iconwebresourceid.Name + fonticon + javascript function + tooltip fields

### Decorator pattern cải tiến

- `RetrieveEntityRibbonRequest` handler đã dùng `ribbon.RibbonLocationFilter.ToString()` để làm key (đúng enum value `"HomepageGrid"`, `"SubGrid"`, `"Form"` thay vì key sai `MscrmHomepageGridaccountMainTab`).
- `MakeEmptySolutionZip()` cập nhật: bọc `<Entity><Name>account</Name><RibbonDiffXml>...</RibbonDiffXml></Entity>` thay vì đặt `<RibbonDiffXml>` ở root → ExtractRibbonDiffXmlForEntity mới resolve được → LoadLocLabels (line 290-298) mới được phủ.
- Group suffix trong `BuildRibbonXml` đổi từ `MainSection`/`SubGridSection`/`FormSection` thành đúng production group suffix `MainTab.Actions` / `MainTab.Save` để ParseButtonsFromRibbon match được Group Id (line 224-228).

### Context cho AI tiếp theo (2026-09-07+)

- 3 file `Cli/Mcp/Tools/Command/` đã đạt mục tiêu >95%. Ưu tiên tiếp theo (theo missed lines còn lại):
  1. `Cli/Mcp/Tools/ManageViewTool.cs` (1418 missed, 50%)
  2. `Cli/Mcp/Tools/ManageChartTool.cs` (1206 missed, 41%)
  3. `Cli/Mcp/Tools/ManageReportTool.cs` (1206 missed, 39%)
  4. `Cli/Mcp/Tools/ManageFormTool.cs` (982 missed, 38%)
  5. `Cli/Mcp/Tools/Command/CommandFlyout.cs` còn 60 missed lines — có thể tăng thêm >95% bằng happy-path variations
  6. `Shared/Logic/CSharpLateBound.cs` (734 missed, 71%) — vùng lớn nhất còn lại ngoài CLI
- Gotchas không thay đổi: KHÔNG Agent/fork, coverage XML ở folder mới nhất, chỉ chạy `-f net10.0`, không build full solution.
- Tổng số test đã đạt: **3060/3060 PASS** (build time ~6 phút).
- Coverage tổng project (sau lần sweep này): chưa đo lại tổng quát, nhưng đã cải thiện 3 file lớn trong nhóm ưu tiên 1.

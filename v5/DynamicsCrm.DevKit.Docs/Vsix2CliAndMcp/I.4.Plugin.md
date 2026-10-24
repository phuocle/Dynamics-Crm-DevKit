# I.4 — Plugin Item Template (plugin step C#)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.4.Plugin.md`
> **Điều kiện tiên quyết:** `0.md` (T4 abstraction bắt buộc); target: project Server (P.4).
> **Trạng thái:** ☐ Chưa làm
> **Ghi chú:** wizard đã đọc nguyên văn; đại diện cho cả nhóm T4 (I.4–I.9).

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/Plugin.cs` |
| Payload | `ItemTemplates/CSharp/04.PluginItemTemplate/Class.cs` (chứa token `$plugin$`, `$Class$`, `$PluginOrder$`) |
| T4 | `Shared/Resources/tt/Plugin.tt` (+ `Plugin.pac.tt`); custom T4 từ `DynamicsCrm.DevKit.Cli.json` |
| T4 pipeline | `Lib/T4Helper.cs` — `GetT4CodeAsync`, `BuildPluginContextAsync`/`BuildContextAsync`, `ProcessTemplateAsync` |
| Form input | `Lib/Forms/FormPlugin.xaml(.cs)` (chọn entity, message, stage, execution, order, class, comment, custom template) |

## 2. Template tạo ra gì

1 file `{Class}.cs` trong project Server: class plugin đầy đủ `[CrmPluginRegistration]` attribute — nội dung do **T4 render** với `T4Context`, sau đó được dán vào payload qua token `$plugin$` (VS thay token khi copy).

## 3. Logic wizard hiện tại (Plugin.cs)

1. `FormPlugin(ItemType.Plugin, $rootnamespace$)` — tất cả câu hỏi plugin.
2. `t4Code = T4Helper.GetT4CodeAsync(Plugin, form.CustomTemplate)` (default → resource; custom → từ Cli.json, giải nén).
3. Context: custom title ≠ "Default" → `BuildContextAsync` (đầy đủ); ngược lại `BuildPluginContextAsync`.
4. `code = ProcessTemplateAsync(t4Code, t4Context)` (VS COM T4).
5. Token: `$plugin$` = code; `$Class$`; `$PluginOrder$` (rỗng nếu =1).

## 4. Thiết kế source of truth

- Handler `PluginItemTemplateHandler` trong Shared:
  - Dùng `T4TemplateResolver` + `T4ContextFactory` (port ở bước 0) + `ITextTransformer` (Mono impl) — **không phụ thuộc VS**.
  - Kết quả render + tên class → ghi file `{Class}.cs` trực tiếp (không cần token $plugin$ trung gian như VS — engine CLI tự thay).
- **Quan trọng:** `Plugin.pac.tt` (bản pac) — kiểm tra wizard nào dùng nó và bảo đảm resolver hỗ trợ `subType` (tham số thứ 3 của `GetT4CodeAsync`).

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `Plugin`, order I.4) + embed payload `Class.cs` (làm template token).
- [ ] Prompt hỏi–đáp mô phỏng FormPlugin: entity (search metadata) → message (danh sách message chuẩn + custom) → stage (PreValidation/PreOperation/PostOperation) → execution (Sync/Async) → order (default 1) → class name (gợi ý `{Message}{Entity}...`) → comment → custom template (Default + danh sách từ Cli.json).
- [ ] Offline mode: cho phép gõ tay toàn bộ (không validate metadata) — cảnh báo trong result.
- [ ] Đăng ký `[CrmPluginRegistration]` đúng format (so sánh byte với output VSIX trên cùng input — test vàng).

## 6. CLI surface

```
devkit new --kind item --type Plugin --name PreAccountUpdate --entity account --message Update \
  --stage PreOperation --execution Synchronous --order 1 --out <server dir> [--template Default] [--offline]
```

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="Plugin"` + đầy đủ tham số như flag trên.

## 8. Test & nghiệm thu

- [ ] Unit test: render `Plugin.tt` bằng MonoTextTransformer với T4Context mẫu → output compile được (Roslyn `CSharpSyntaxTree.ParseText` 0 lỗi) + chứa `[CrmPluginRegistration(` đúng tham số.
- [ ] Test custom T4 từ Cli.json (nén/giải nén `Helper.Compress/Decompress`).
- [ ] Test `$PluginOrder$` rỗng khi order=1.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.5.CustomAction.md`.

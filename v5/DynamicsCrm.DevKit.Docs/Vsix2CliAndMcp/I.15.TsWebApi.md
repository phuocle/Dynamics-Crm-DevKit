# I.15 — TsWebApi Item Template (webapi TypeScript)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.15.TsWebApi.md`
> **Điều kiện tiên quyết:** `0.md`, `I.14.JsFormTs.md` (đối xứng).
> **Trạng thái:** ☑ HOÀN THÀNH + **COMPARE CHỐT 2026-10-31: Account.webapi.ts + OptionSet.ts BYTE-IDENTICAL NGAY lần đầu** (wizard `TestAllInOne2/Dev.AllInOne.WebResourceTs/entities/` = CLI `TestAllInOneCli/.../entities/`; Account.ts DIFF by-design — wizard side giữ form stub I.14 md5 `8d323013…` vì folder đã có từ I.14, CLI side fresh → `//`; cùng semantics stub-never-overwrite đã phê) — CHỜ aP duyệt → lệnh `commit.md`

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/TsWebApi.cs` |
| Payload | `ItemTemplates/CSharp/15.TsWebApiItemTemplate/` — `TypeScript.ts` (tĩnh `//` 2 byte), `TypeScript.webapi.ts` (`$TypeScriptWebApi$`) — cả 2 KHÔNG BOM |
| Codegen (Shared sẵn) | `Shared/Logic/TsWebApi.cs` (`GetTsWebApiCodeAsync`) — **lưu ý: `CodeGenService.GetDefaultTsWebApiFileAsync` KHÔNG tồn tại (handoff sai) — stub là payload tĩnh, không cần codegen** |

## 2. Template tạo ra gì

`{Entity}.ts` (stub TĨNH `//` 2 byte — payload không token, không đè) + `{Entity}.webapi.ts` (CRUD webapi TS typed sinh từ metadata — update-if-changed) **+ `OptionSet.ts` refresh (wizard RunFinished LUÔN chạy — merge entity block có sẵn, CÓ BOM)**. **Wizard TsWebApi CÓ `RefreshOptionSetAsync`** (dòng 58 — gọi vô điều kiện, đối xứng TsForm I.14, KHÁC JsForm I.2).

## 3. Logic wizard hiện tại

`RunStarted`: FormItem entity combo → `EntityMetadata` từ cache → `EnsureEntityMetadataAsync` fetch nếu thiếu attributes → `$TypeScriptWebApi$` = `TsWebApi.GetTsWebApiCodeAsync`. `RunFinished`: webapi twin `WriteTargetFileIfChangedAsync` khi project item chưa add (file tồn tại trước) + `TrySetDependentUpon` (webapi.ts phụ thuộc {Entity}.ts — VSIX-only) + `RefreshOptionSetAsync`. `ShouldAddProjectItem`: file tồn tại → không add (stub giữ nguyên).

## 4. Thiết kế source of truth

- Handler `TsWebApiItemTemplateHandler` (`Shared/Templates/Handlers/`) — mirror I.14 + offline gate kiểu JsWebApi.

## 5. Việc phải làm (CLI)

- [x] Handler + manifest (id `TsWebApi`, order I.15) + embed payload (projitems embed dòng 465-466 CÓ SẴN từ step 0; chỉ thêm Compile entry handler dòng 321 + register sau TsForm).
- [x] Prompt entity — gate `--entity` nhóm LateBound/JsForm/JsWebApi/TsForm **+ TsWebApi** trong `TaskNewItem.cs`; prompt entity generic (RequiresConnection=true) tự phủ — không thêm code prompt.

## 6. CLI surface

```
devkit new-item --type TsWebApi --entity account --project Dev.AllInOne.WebResourceTs --out Dev.AllInOne.WebResourceTs/entities
```

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="TsWebApi"`.

## 8. Test & nghiệm thu

- [x] Unit test **12 tests** mirror I.14 (`TsWebApiItemTemplateHandlerTests`): manifest 2 file (user-file-first — convention I.14/I.3, KHÔNG mirror thứ tự vstemplate); happy path 3 file (stub == `//` đúng 2 byte không BOM; webapi header/interface/FieldConfig — lookup `_primarycontactid_value` frame với target cached `contact`, picklist `type: 'Integer'`; OptionSet BOM efbbbf); logical-name input; rerun Skipped/Unchanged/Unchanged; webapi change → Updated; **whitespace-only change → Unchanged (IsTheSame — pins khác biệt so với TsForm ordinal)**; `--force` đè stub; lookup target KHÔNG cached offline → lỗi connection (gate kiểu JsWebApi — thay slot "cold form cache" của I.14 vì TsWebApi KHÔNG đọc forms); empty metadata cache offline → lỗi connection; unknown entity không tạo file; OptionSet merge giữ entity block cũ (Contact). 12/12 pass.
- [x] Build CLI 0/0; **full 5 suites: Cli 5234** (baseline mới = 5222 + 12) / Tool 253 / Vsix 571 / Analyzers 310 / **Vsix.2019 48 — LƯU Ý: bare `vstest.console` (bản TestWindow) fail 10 `FormReportMappingTests` vì `AppContext.BaseDirectory` trỏ chỗ khác — ĐÃ verify PRE-EXISTING ở HEAD sạch (stash) và 48/48 PASS qua `dotnet-coverage collect` + vstest bản `Common7\IDE\Extensions\TestPlatform` (đúng runner Run-Coverage.ps1 dùng)**.
- [x] build-release-only: `devkit --version` = 4.44.44.44 Build **31.12.2026 23.59.59**; 4 artifacts mới dưới `Published/4.44.44.44/` (11:30-11:31 31/10); Const.cs placeholder restored; git status sạch (chỉ code I.15 + Published refresh).
- [x] Demo live từ `TestAllInOneCli` (folder WebResourceTs + .env đã bị dọn sau I.14 — **dựng lại: copy v5/.env → TestAllInOneCli/.env, tạo `Dev.AllInOne.slnx` bằng `dotnet new sln --format slnx`, `devkit new-project --type WebResourceTs --name Dev.AllInOne.WebResourceTs --solution Dev.AllInOne.slnx` (12 created, chú ý RULING 8 create-once: folder đích phải ĐỂ new-project tự tạo — mkdir trước bị chặn "project already exists")**; scaffold vào `entities/` (folder template tạo sẵn — chỗ wizard aP chọn ở I.14): **3 file Created** — `Account.ts` (`//` 2 byte, không BOM), `Account.webapi.ts` (34,478 B, không BOM, 19 lookup `entityCollectionName`, `_primarycontactid_value` frame); `OptionSet.ts` (22,682 B — đúng size I.14, CÓ BOM efbbbf); rerun → **Skipped/Unchanged/Unchanged**.

## 9. Bàn giao

- [x] **COMPARE CHỐT 2026-10-31 (aP tạo wizard TsWebApi vào `TestAllInOne2/Dev.AllInOne.WebResourceTs/entities/` 11:52 — folder ĐÃ có Account.ts + Account.form.ts + OptionSet.ts từ I.14)**: wizard 6 file (kèm 2 file I.14), CLI 5 file (entities fresh chỉ có generator bats) — compare từng cặp (absolute path):
  - `Account.webapi.ts`: **IDENTICAL md5 `89d0702b2f5b4e0d47a40afe89301438` (34,478B)** — file chính, byte-identical ngay lần đầu.
  - `OptionSet.ts`: **IDENTICAL md5 `d26ef0c453772b0389db79ec523b06e4` (22,682B)** — đúng md5 OptionSet.ts I.14: wizard refresh trên file đã có → nội dung giữ nguyên; CLI sinh fresh → cùng nội dung (merge semantics đúng).
  - `Account.ts`: DIFF **by-design** — wizard side giữ form stub I.14 (md5 `8d323013…` = ground truth I.14, 10,377B) vì file tồn tại → wizard skip; CLI side folder fresh → Created `//` 2B. Cùng semantics "user stub never overwritten" (I.2/I.14) — khác CHỈ trạng thái folder khởi điểm, không phải lệch template.
- [x] Duyệt → lệnh `commit.md` (split feat/test/fixtures/docs/build, c1 worktree-verify, **PUSH theo lệnh aP 2026-10-31**) — aP ra lệnh "update file I15 nếu cần thiết, sau đó run commit.md hết code và push".
- [ ] Qua `I.16.TsDialog.md` (handoff đã giao cuối session I.15).

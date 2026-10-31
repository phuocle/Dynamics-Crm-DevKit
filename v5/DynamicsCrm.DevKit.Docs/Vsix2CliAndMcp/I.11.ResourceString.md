# I.11 — ResourceString Item Template (.resx resource)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.11.ResourceString.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ✅ ĐÓNG 2026-10-31 — **COMPARE CHỐT BYTE-IDENTICAL** (wizard `TestAllInOne2` = CLI `TestAllInOneCli`, md5 `c86f98f8…` cả 2 bên, KHÔNG BOM) + fix dialog "Resouce"→"Resource" + fix vụ .env 3-file (xem §12) — **COMMITTED theo lệnh aP (run commit.md all; không push)**

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/ResourceString.cs` |
| Payload | `ItemTemplates/CSharp/11.ResourceStringItemTemplate/ResourceString.resx` |
| Manifest VS | `CSharpResourceStringItemTemplate.vstemplate` |

## 2. Template tạo ra gì

File resource `{Entity}.{LanguageCode}.resx` (ví dụ `account.1033.resx`) — chuỗi localized cho entity (dùng cho Ribbon/App trong Dataverse).

## 3. Logic wizard hiện tại

Đọc `ResourceString.cs` khi làm. Chọn entity + language code (LCID); copy payload resx (thay token nếu có) + đổi tên đích.

## 4. Thiết kế source of truth

- Handler `ResourceStringItemTemplateHandler` — resx là XML: đọc payload, ghi đích với tên đúng. Không cần connection (nếu wizard có query chuỗi hiện có thì tách thành bước optional — xác nhận khi đọc).

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `ResourceString`, order I.11) + embed payload.
- [ ] Prompt: entity → language code (gợi ý 1033/1066/v.v. + gõ tay).

## 6. CLI surface

```
devkit new-item --type ResourceString --name Account --language 1033 --project Dev.AllInOne.Server
```

(cũ ghi `devkit new --kind item` — cú pháp pre-refactor; đã đổi theo RULING 4 như I.7–I.10)

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="ResourceString"`, `languageCode`.

## 8. Test & nghiệm thu

- [x] Unit test: file resx tạo đúng tên, XML well-formed (XDocument load được). — 13 tests `ResourceStringItemTemplateHandlerTests` (mirror UiTest suite, bỏ mọi assertion T4): manifest/vstemplate contract, name+language+order file-name contract, payload copy verbatim + KHÔNG BOM (flip theo wizard fresh — xem §11) + 4 resheaders + không data row, idempotency Skipped/forced Updated, engine gate 2 tầng, no-project, no-transformer-needed (item non-T4 đầu tiên).
- [x] Build CLI 0/0; test pass. — Full 5 suites: **Cli 5196** (baseline 5183 + 13) / Tool 253 / Vsix 571 / Analyzers 310 / Vsix.2019 48.
- [x] Release: `Release-DynamicsCrm-DevKit.ps1` (build-release-only) — annual 31.12.2026 23.59.59, 4 artifacts `Published/4.44.44.44/`, sweep 21 files restore, Const.cs placeholder nguyên, installed dll SHA == nupkg dll SHA (`55f84863…`).
- [x] Demo live từ `TestAllInOne2` (.env ClientSecret — **connect OK**): `devkit new-item --type ResourceString --name Account --language 1033 --project Dev.AllInOne.Server` → `Account.1033.resx` **BYTE-IDENTICAL payload** (cmp OK, BOM EF BB BF); `--language 9999` → `[ERROR] --language '9999': language not provisioned in the current instance.` (proven live). **File demo đặt ở `TestAllInOneCli/Dev.AllInOne.Server/` (CLI side — aP nhắc: TestAllInOne2 là wizard side, giữ sạch cho aP tạo wizard file); demo cũ giữ nguyên.**

## 9. Bàn giao

- [x] Báo cáo + user duyệt (aP duyệt compare + lệnh commit.md all 2026-10-31) → qua `I.13.BatFile.md` (**lưu ý: không có I.12 — giữ số gốc của VSIX**).

## 10. Nhật ký thực hiện (2026-10-31)

**Recon chốt (sửa vài dự đoán của phần RECON handoff):**
- Payload nằm ở **repo root** `ItemTemplates/CSharp/11.ResourceStringItemTemplate/` (KHÔNG phải dưới `DynamicsCrm.DevKit.Vsix/`); embed entry `Resources.templates.item.resourcestring.ResourceString.resx` **đã có sẵn** trong .projitems từ step-0; `--language` flag **đã có sẵn** trong `NewItemCommandArgs`.
- Wizard thật: `FormPlugin.ResourceStringItem` ẩn message/stage/execution + **TemplatePanel**; relabel class → **"Resource"** (ban đầu wizard ghi "Resouce" — **aP yêu cầu fix chính tả 2026-10-31**, đã sửa `FormPlugin.xaml.cs` + rebuild VSIX) và entity → **"Language"** (fill từ **provisioned languages** — `MetadataService.GetProvisionedLanguagesAsync`, XrmEntity LogicalName = LCID string "1033", hiển thị SchemaName "English-United States"); OK khóa đến khi list load → **wizard KHÔNG chạy được offline** → catalog `RequiresConnection` **đổi false → true** (handoff dự đoán false — sai).
- Visual order dialog: Language combo (row 2) trước, Class "Resouce" (row 6) cuối → chain = language → class; không gợi ý class (không combo nào drive UpdateClassName).
- `ResourceString.RunStarted` thêm `$LanguageCode$`/`$Class$`/`$PluginOrder$` (rỗng khi order 1). **VSIX tính PluginOrder bằng scan file `.cs` container** (`VsixHelper.PluginOrderAsync` — chỉ `.cs`, `{Class}.cs`/`{Class}{N}.cs`, non-recursive) — CLI giữ nguyên quy ước chung: `--order` (default 1).
- Payload resx **KHÔNG có token** → wizard copy verbatim; output wizard **BỎ BOM payload** (dự đoán "giữ BOM như LateBound" SAI — đã flip sau compare §11, giống Test/UiTest).

**Bài học mới I.11 (gotcha lớn nhất):** embed `.resx` payload phải khai báo **`<Type>Non-Resx</Type>`** trong .projitems — mặc định MSBuild chạy **GenerateResource** biên dịch resx thành **binary `.resources`** (magic `BEEBCACE`), `TemplatePayload` đọc text ra mojibake bắt đầu U+FFFD (`EF BF BD` — bytes[0]=EF vẫn "pass" test BOM, bytes[1]=BF thay vì BB). 12/13 test pass ngay lần đầu, test BOM bắt được bug này.

**Triển khai:**
- `ItemTemplateInput` + field `Language`; handler `ResourceStringItemTemplateHandler` (non-T4, không Transformer — guard "T4 transformer: required" KHÔNG áp dụng); register trong `TemplateHandlers.RegisterAll` sau UiTest + Compile entry .projitems; catalog RequiresConnection=true.
- `TaskNewItem`: gate keeper `--language <lcid>, --name <class-name>` (combo-first class-last); exclude ResourceString khỏi generic entity prompt; chain `PromptResourceStringItemAsync` — language (SelectionPrompt provisioned languages khi TTY / validate qua list org khi flag truyền vào / TextPrompt offline) → class; mapping `Language = args.Language`.
- aP mid-session: language **interactive** — load languages hiện có khi không truyền, truyền language lạ → báo lỗi, đề xuất existing languages → ĐÃ ĐÚNG như triển khai (SelectionPrompt = đề xuất; error path proven live).

**Chưa làm / chờ aP:** aP duyệt → lệnh commit.md (split feat/test/fixtures/docs/build, KHÔNG push). Lưu ý cho compare: wizard tính order bằng scan `.cs` container — "Account" không có `Account*.cs` ở root `Dev.AllInOne.Server` → order 1 cả 2 bên.

## 11. Kết quả compare + các vòng fix (2026-10-31 chiều)

**Fix 1 — dialog typo (aP yêu cầu, kèm screenshot):** `FormPlugin.ResourceStringItem` relabel `"Resouce"` → `"Resource"` (`FormPlugin.xaml.cs`); rebuild release để Published VSIX mang fix (aP cài lại VSIX mới để thấy label đúng). Các comment CLI/handler ghi "Resouce" cũng đồng bộ thành "Resource".

**COMPARE CHỐT (vòng 1 lệch BOM):** aP tạo `TestAllInOne2/Dev.AllInOne.WebResource/resources/Resource.1033.resx` (2853B, 08:03, wizard VSIX) → CLI mirror `TestAllInOneCli/Dev.AllInOne.WebResource/resources/Resource.1033.resx` → **diff 3 byte đầu = BOM** (CLI 2856B có BOM, wizard KHÔNG). Bài học I.10 lặp lần 3: **chỉ tin wizard FRESH** — payload giữ BOM nhưng wizard output resx BỎ BOM (giống Test/UiTest; khác dự đoán "giữ như LateBound"). Fix handler ghi `ForceWriteAllTextWithoutUTF8Async`, flip test BOM assertions → re-release lần 3 → re-scaffold → **cmp BYTE-IDENTICAL, md5 `c86f98f8e87c22f2b8d27573d99fd22d` cả hai bên**.

**Fix 2 — side csproj (của aP, không đụng):** VS wizard thêm item vào `Dev.AllInOne.WebResource` làm VS gỡ `<Folder Include="resources\" />` khỏi csproj (folder materialize) — thay đổi aP, giữ nguyên.

## 12. Vụ secret / connection (RESOLVED 2026-10-31)

**Kết luận cuối — KHÔNG phải intermittent, là 3 file .env LỆCH secret + CLI walk-up `.env` từ CWD từng lần chạy:**

| File | Secret | Trạng thái |
|---|---|---|
| `DynamicsCrm.DevKit.Tests/TestAllInOne2/.env` | `n7D8…` (aP rotate, save 08:02) | **TOKEN OK — SOURCE OF TRUTH** |
| `v5/.env` (root, mtime 26.09) | `~je8…` | EXPIRED → **đã update theo TestAllInOne2** |
| `TestAllInOneCli/.env` (mtime 19.09) | `~je8…` | EXPIRED → **đã update theo TestAllInOne2** |
| `TestAllInOne/.env` (ngoài danh sách aP) | `~je8…` | EXPIRED — **chỉ report, chưa đụng** |

- Cơ chế: `DevKitCommandArgs.ResolveProjectEnvironmentDefaults` → `ProjectEnvironment.ResolveFileFromJsonOrDirectory(JsonFile, Directory.GetCurrentDirectory())` — walk-up từ **cwd của process** lên drive root. Run từ TestAllInOne2 → trúng file mới (OK); run từ repo-root/TestAllInOneCli → trúng file cũ (AADSTS7000222, cùng app `1a60a5c2`). "Intermittent" thực chất là tôi di chuyển cwd giữa các lần chạy — run in `pwd` (repo root) là mảnh ghép chốt.
- Curl "TOKEN OK 3/3" dẫn lạc vì tôi luôn extract giá trị từ TestAllInOne2. Explicit-args `--clientid/--clientsecret` OK 2/2 vì bypass hẳn đường .env.
- Appsource app (`b1b8cf05`): token OK cho tenant devkit-v4 nhưng **WhoAmI 403** (không application user + role) → không dùng thay thế được.
- **Đã fix theo ruling aP (TestAllInOne2 = source of truth)**: update `DEVKIT_CLIENT_SECRET` trong root + TestAllInOneCli (Edit tool, giữ line-ending từng file: root LF, Cli CRLF; các key khác giữ nguyên). Verify live: `devkit new-item` từ **cả 2 cwd đều Connected** (language-9999 lỗi sau khi Connected = đúng proof).
- Việc mở cho aP: `TestAllInOne/.env` vẫn secret cũ — nói một tiếng là tôi update nốt; và xoá secret hết hạn trong Azure Portal nếu còn.

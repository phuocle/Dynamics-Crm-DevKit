# bug-dry-run — Attacker-Mode Audit Report

**Date:** 2026-08-29
**Build audited:** 29.08.2026 15:27:55 (assemblySha256 `A347BBE1...A4465C`)
**Scope:** all 37 MCP tools + `Helper/` + `Command/` + `Ribbon/` in `DynamicsCrm.DevKit.Cli\Mcp`
**Method:** static source audit (attacker controls only tool JSON params; server runs with `--dry-run`). No live calls made.

> **FIX STATUS 2026-08-29 (aP approved fix):** F1, F2, F3 **FIXED + RE-TESTED PASS** — see "Fix applied" under each finding. CLI rebuilt (29.08.2026 16:17:30, assemblySha256 `A0A2388E82DB...F283A07C`, informationalVersion `4.44.44.44+30a8eb8cb`), MCP restarted, live re-test via `devkit-claude-dry-run` all 3 PASS: F1 victim `.formxml` survived + `validated=true` preview; F2 search/status full → no `filePath`, no file written, payload inline; F3 download preview with in-memory `sha256`, `savedPath` omitted, folder unchanged. Testcalls appended: 16.search_records TEST15-16, 28.manage_form TEST37, 30.manage_record_file TEST24. Pending: commit.

## Mechanism recap (2 layers)

1. **Action-level preview** — voluntary `if (_options.DryRun) return DryRun(...)` per action. Only layer that protects **disk** (File/Directory/StreamWriter have no gateway).
2. **Fail-closed gateway** — `DataverseMutationExecutor` / `DataverseWebApiMutationExecutor` / `PublishHelper` / `SolutionImportHelper` / `SolutionComponentCreateHelper` / `RibbonSolutionFetcher` all call `McpExecutionContext.AssertMutationAllowed` → throws `InvalidOperationException` before any SDK write. `ExecuteReadOnly` has an explicit type allow-list (cannot be smuggled).

Wiring (`McpServerHost.cs:65-70`, `McpServerOptions.cs:17-19`): one `McpExecutionPolicy` produces `Options` + `Context` from the same `dryRun` bool — no drift possible.

---

## FINDINGS

### F1 — TRUE-BYPASS (disk DELETE) — `manage_form` deletes attacker-chosen `.formxml` file BEFORE the dry-run gate

**File:** `DynamicsCrm.DevKit.Cli\Mcp\Tools\ManageFormTool.cs`

**Attack call (in dry-run):**
```
manage_form(action='update', entity_name='all_testform', form_id='<guid>',
            formxml='D:\\path\\to\\victim.formxml')
```

**Chain:**
1. `HandleUpdateWithFormXml` — `ResolveFormXmlInput(formxml.Trim())` at **:455**
2. `ResolveFormXmlInput` (:882): path exists → not `.json` → bare `.formxml` branch → `File.ReadAllText` (:930) then **`File.Delete(formxml)` (:935)** — comment says it intends to clean only `build_form_xml` temp files, but the path is fully attacker-controlled.
3. Only afterwards: dry-run gate `if (_options.DryRun)` at **:509** returns the preview.

**Impact:** arbitrary deletion of any `.formxml` file on disk while server is in dry-run. Also a disk *read* of arbitrary path (info leak via error/output). Violates "dry-run = 0 disk actions".

**Fix applied 2026-08-29:** `ResolveFormXmlInput` gained `deleteTempFileAfterRead` param (default `true`, non-dry-run behavior unchanged); the `.formxml` delete at :935 now only runs when the flag is set. Caller `HandleUpdateWithFormXml` (:455) passes `deleteTempFileAfterRead: !_options.DryRun` — in dry-run the file is read for validation/preview but never deleted. Kept resolve+validate before the gate so the dry-run preview keeps `validated=true` (contract from testcall 28).

---

### F2 — TRUE-BYPASS (disk write) — `search_records` has no dry-run wiring at all

**File:** `DynamicsCrm.DevKit.Cli\Mcp\Tools\SearchRecordsTool.cs`

**Attack call (in dry-run):**
```
search_records(action='search', search_term='x', detail_level='full')
search_records(action='status', detail_level='full')
```

**Chain:** constructor takes only `ServiceClient` — **no `McpDryRunOptions`/`McpExecutionContext` field exists**. `detail_level == "full"` triggers `WriteFullPayload` at **:136** (search) and **:171** (status) → `Directory.CreateDirectory` (**:370**) + `File.WriteAllText` (**:372**) to `{workspace}/.devkit/search_records/*.json`.

**Impact:** unconditional disk write in dry-run. Violates "dry-run = 0 disk writes". (Dataverse side is read-only — search API queries only.)

**Fix applied 2026-08-29:** constructor now injects `McpDryRunOptions` (DI singleton — no schema/param change). Both `detail_level='full'` sites (search :135, status :170) skip `WriteFullPayload` when `_options.DryRun`; `filePath` stays null and raw payload (`attributes` / `indexedFields`) stays **inline** instead of being nulled, since no file holds it. No unit-test call sites referenced the old constructor.

---

### F3 — TRUE-BYPASS (disk write) — `manage_record_file` action `download` writes the file in dry-run

**File:** `DynamicsCrm.DevKit.Cli\Mcp\Tools\ManageRecordFileTool.cs`

**Attack call (in dry-run):**
```
manage_record_file(action='download', entity_name='all_testfile', record_id='<guid>', column_name='all_document')
```

**Chain:** `HandleDownload` (:278+) has **no `_options.DryRun` check** (only upload :261, delete-file :352, delete-image :366 have one). It downloads bytes (read-only SDK, allow-listed `InitializeFileBlocksDownload`/`DownloadBlock` via `ExecuteReadOnly` — fine) but then **`Directory.CreateDirectory` (:321) + `File.WriteAllBytes` (:323)** write to `{workspace}/.devkit/manage_record_file/{entity}/{record}/`.

**Impact:** disk write in dry-run. Violates "dry-run = 0 disk writes". (Dataverse side is genuinely read-only.)

**Fix applied 2026-08-29:** `HandleDownload` now has a dry-run gate right before `Directory.CreateDirectory` (:321). The Dataverse side (record retrieve + block download) is read-only and allowed; the gate returns a `[DryRun]` preview with `fileName`, `fileSizeInBytes`, `fullSize`, `sha256` (computed in-memory from the downloaded bytes), `savedPath` omitted (WhenWritingNull), `status='not_executed'` — zero disk writes.

---

### F4 — FAIL-CLOSED-ONLY (not exploitable today; hardening note) — ribbon fetch before internal gate

**File:** `DynamicsCrm.DevKit.Cli\Mcp\Tools\Ribbon\RibbonMutateActions.cs`

`UpdateRibbon` calls `fetcher.FetchExistingRibbonDiffXml(entityName)` at **:37** BEFORE its internal dry-run check at :45. The fetcher asserts (`RibbonSolutionFetcher.cs:31`) → in dry-run this would throw `InvalidOperationException` ([Error], ugly) instead of a [DryRun] preview. **Currently unreachable** because the entry-point gate `ManageRibbonTool.cs:117` returns first — defense-in-depth works. Fragile if the entry gate is ever refactored.

---

## Observations (not dry-run violations, noted for completeness)

- `ManageRecordFileTool` upload: when `file_path` is an http(s) URL, the content is **fetched over the network before** the dry-run gate (:261). aP's rule covers Dataverse + disk; outbound GET is a third side-effect channel — decide if preview should precede the fetch.
- `ManageAppTool.cs:1316` — direct `_serviceClient.Execute(new OrganizationRequest("ValidateApp"))`. Read-only platform action; fine.
- `GetSolutionComponentsTool.cs:813` — direct `_serviceClient.Execute(ExecuteMultipleRequest)` bypassing the executor, but the bulk contains **only `RetrieveMultipleRequest`** (msdyn_componentlayer queries, :792-807) built from internal state — no attacker-controlled mutation. Fine, but it's exactly the pattern the gateway exists to prevent; consider routing via `ExecuteReadOnly` (allow-list would need `ExecuteMultipleRequest` + inner-request validation).
- `CommandListDetail.cs:286`, `CommandHideShow.cs:292`, `RibbonReadActions.cs:46` — direct `ExportSolutionRequest`. Export of an existing solution returns bytes, no state change. Fine.

## Verified CLEAN (preview gate present AND all mutations behind asserted gateway, no ungated disk I/O)

| Area | Evidence |
|---|---|
| `manage_environment_variable` | gates :278/:374/:431/:476 precede executor calls :296/:388/:592/:601/:623/:486-487; no disk I/O |
| `manage_table` | gates :250/:498; mutations via executor :316/:521; direct Execute = Retrieve only (:324) |
| `manage_column` | 16 gates; `ExecuteCreateAttribute` short-circuits :1650; Web API PUT follow-up :2255 via `DataverseWebApiMutationExecutor` |
| `manage_relationship` | 6 gates :171/:294/:422/:470/:555/:615 each precede executor mutations :193/:311/:437/:479/:567/:628 |
| `manage_choice` | gates :242 (update) / :498 (create) precede executor mutations :280-339 / :537-540 |
| `manage_record` | 5 gates :136/:183/:211/:236/:263 precede executor :146/:194/:220/:247/:274 |
| `manage_deleted_records` | previews :295/:476; manual assert `EnsureMutationAllowed` :319/:583/:600 + executor :357/:594/:613/:622 |
| `manage_webresource` | gates :324/:443/:517 precede executor :333/:447/:521 |
| `create_records` | gate :193 precedes executor :577/:583 |
| `generate_demo_data` | gate :205 precedes `Directory.CreateDirectory` :234 / `FileStream` :246 (verified live: 0 new files) |
| `manage_form` (ops/rename/undo + backups) | gates :400/:509/:615/:745 precede `SaveBackup` :415/:522/:628; undo reads backup (read ok) |
| `manage_view` | gates :323/:521/:607/:679/:831 precede `ViewBackupHelper.SaveBackup` :534/:619/:843 |
| `manage_chart` | gates :399/:599/:670/:720/:780 precede `SaveBackup` :615 and `AddToSolution` :1293 (asserted helper) |
| `manage_app` | gates :250/:375/:572/:731 precede `SaveAppSnapshot` :389/:595/:749; mutations via executor :279/:289/:391/:626/:751/:1061 |
| `manage_role` | gates :479/:546/:694/:880/:929/:1021/:1070 precede `RoleBackupHelper.SaveBackup` :708/:891/:1032 and executor mutations |
| `manage_command` + `Command/*` | all creates/updates/deletes via `DataverseMutationExecutor`; entry gates per action; no disk I/O |
| `manage_ribbon` + `Ribbon/*` | entry gates `ManageRibbonTool.cs:117/:152` + internal :45/:164/:236; disk writes :372/:416/:435 only after gates; import via asserted `SolutionImportHelper` |
| `publish_customizations` | gate :122 before `PublishHelper` (asserted) |
| `execute_webapi` | gate :98 (all non-GET); method parse normalizes case (:72); POST `$batch` caught; blocked-endpoint lists use `ToLowerInvariant`; mutations via asserted executor :117 |
| `execute_sql` | SELECT-only validation; platform-enforced read-only; no disk I/O |
| `execute_fetchxml`, `parse_record_url`, `whoami`, all `get_*` | read-only, no mutation calls, no disk I/O |
| `manage_record_file` upload/delete | gates :261/:352/:366 precede all block-protocol mutations; upload blocks via asserted executor (`FileColumnTransferHelper` :34/:54/:67) |

## Bottom line

- **Dataverse mutations: no bypass found.** Every SDK write routes through an asserted gateway or a tool-local `AssertMutationAllowed` placed before the call.
- **Disk is the weak side** — no fail-closed guard exists for file I/O, and 3 paths write/delete in dry-run: **F1** (delete, worst), **F2** (write), **F3** (write).
- Recommended plan: fix F1–F3, then consider a long-term hardening — a single `DiskWriteGuard` helper (fail-closed like the Dataverse gateway) so future tools cannot write outside dry-run by construction.

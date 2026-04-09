# Adversarial Review: manage_sitemap

> **Tool**: `manage_sitemap` | **File**: `ManageSiteMapTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-09
> **Rounds**: 1 | **Total findings**: 0 | **All fixed**: N/A (no findings)

---

## Round 1

> 0 findings from 20 live tests + static analysis.

### Passed Tests

| # | Category | Test | Input | Expected | Actual | Verdict |
|---|----------|------|-------|----------|--------|---------|
| 1 | A: Silent Failure | Default action "update" works correctly | `action` omitted, valid `app_module_id` + `sitemapxml` | Defaults to update, succeeds | Updated successfully with backup | PASS |
| 2 | C: Input Normalization | UPPERCASE action normalized | `action="UPDATE"` | Normalized to "update", succeeds | Updated successfully | PASS |
| 3 | B: Error Handling | Invalid action rejected | `action="INVALID_ACTION"` | Clear error with valid actions list | `Error: Invalid action 'INVALID_ACTION'. Valid actions: 'update', 'create', 'undo'.` | PASS |
| 4 | B: Error Handling | Invalid GUID rejected | `app_module_id="not-a-guid"` | Clear error | `Error: 'not-a-guid' is not a valid GUID.` | PASS |
| 5 | B: Error Handling | Missing app_module_id | `app_module_id` omitted | Clear error | `Error: app_module_id is required.` | PASS |
| 6 | B: Error Handling | Missing sitemapxml | `sitemapxml` omitted | Clear error | `Error: sitemapxml is required.` | PASS |
| 7 | B: Error Handling | Non-existent app module | `app_module_id="00000000-0000-0000-0000-000000000000"` | Clear error with tip | Error with FetchXML example tip | PASS |
| 8 | C: Input Normalization | GUID with braces accepted | `app_module_id="{6f4592c7-...}"` | Braces stripped, GUID parsed | Updated successfully | PASS |
| 9 | B: Error Handling | Non-XML content blocked by validation | `sitemapxml="this is not xml at all"`, `validate=true` | Validation blocks with XML parse error | `blocked_validation` with XML parsing error | PASS |
| 10 | C: Input Normalization | XML declaration stripped | `sitemapxml="<?xml ...?><SiteMap>..."` | Declaration stripped, SiteMap processed | Updated successfully | PASS |
| 11 | C: Input Normalization | Whitespace padding on params | `action="  update  "`, `app_module_id="  guid  "`, `sitemapxml="   <SiteMap>...   "` | All trimmed, processed normally | Updated successfully | PASS |
| 12 | B: Error Handling | Undo with non-existent backup | `sitemapxml="d:\nonexistent\path\backup.sitemap.json"` | Clear error with tip | Error with backup directory tip | PASS |
| 13 | B: Error Handling | Create on app that already has SiteMap | `action="create"` on DEVKITV4 (has SiteMap) | Clear error suggesting update instead | Error with existing SiteMapId and update tip | PASS |
| 14 | B: Error Handling | validate=false with invalid XML (server-side rejection) | `sitemapxml="not xml"`, `validate=false` | Dataverse server rejects with error | OrganizationServiceFault with XmlException details | PASS |
| 15 | B: Error Handling | Create on non-existent app | `action="create"`, `app_module_id="11111111-..."` | Clear error | App module not found error | PASS |
| 16 | E: Output Quality | Update with backup=false | `backup=false` | No backupPath in result | `backupPath` field absent from structured result | PASS |
| 17 | B: Error Handling | Whitespace-only sitemapxml | `sitemapxml="   "` | Rejected as empty | `Error: sitemapxml is required.` | PASS |
| 18 | D: Description Mismatch | Description accuracy — action param | Static analysis | Default "update" documented and implemented | `action ?? "update"` in code, `'update' (default)` in description | PASS |
| 19 | D: Description Mismatch | Parameter defaults match descriptions | Static analysis | All 6 param defaults match | validate=true, backup=true, auto_publish=true all match | PASS |
| 20 | D: Description Mismatch | Structured result field consistency | Static analysis | Action field = attempted action, Status = outcome | `action="created/updated/undo"` with `status="blocked_validation"` consistent with `manage_form` | PASS |

### Static Analysis Notes

| Area | Analysis | Result |
|------|----------|--------|
| Action normalization | `(action ?? "update").Trim().ToLowerInvariant()` handles null, whitespace, case | Solid |
| GUID parsing | `Guid.TryParse(app_module_id.Trim(), ...)` handles braces, whitespace | Solid |
| sitemapxml validation | `string.IsNullOrWhiteSpace()` check before any processing | Solid |
| XML declaration stripping | `StripXmlDeclaration()` handles `<?xml...?>` prefix correctly | Solid |
| Backup safety | Backup created before update; backup failure blocks update | Solid |
| XSD validation | Schema loaded from embedded resources, cached with double-check locking | Solid |
| Schema evolution tolerance | `IsSchemaEvolutionError()` downgrades "not declared" errors to warnings | Good design |
| Create cleanup | On association failure, orphaned SiteMap record is deleted (best effort) | Solid |
| Exception handling | Both `OrganizationServiceFault` and general exceptions caught with context | Solid |
| Publish two-step | Publishes both SiteMap AND AppModule (both required for changes to appear) | Solid |

---

## Round 2

> Not executed — 0 new findings in Round 1. Tool is clean.

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 0 | 0 | 0 | A, B, C, D, E |
| **Total** | **0** | **0** | **0** | |

### Exit Reason

> `0 new findings — tool is clean`

### Quality Assessment

The `manage_sitemap` tool is exceptionally well-implemented with comprehensive input validation, consistent error messages, proper safety mechanisms (backup-before-update, XSD validation), and accurate descriptions. Key strengths:

1. **Input normalization**: All parameters properly trimmed and normalized (case, braces, whitespace)
2. **Error messages**: Every error includes context (AppModuleId, SiteMapId) and actionable tips
3. **Safety**: Backup-before-update pattern with fail-safe (backup failure blocks update)
4. **XSD validation**: Embedded schema with smart evolution tolerance for undeclared attributes
5. **Cleanup on failure**: Create action cleans up orphaned records on association failure
6. **Consistent conventions**: Action/Status fields follow same pattern as `manage_form` and `manage_view`

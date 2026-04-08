# Adversarial Review: get_plugins

> **Tool**: `get_plugins` | **File**: `GetPluginsTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-08
> **Rounds**: 2 | **Total findings**: 1 | **All fixed**: Yes

---

## Round 1

> 1 finding from 13 live tests + static analysis.

### Finding 1 — type_name filter crashes with invalid FetchXML

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | B: Error Handling |
| **Input** | `entity_name="account", type_name="PostDeleteAccount"` |
| **Expected** | Returns steps where plugin type name contains "PostDeleteAccount" |
| **Actual** | FetchXML error: `Invalid Child Node, valid values are: filter, order or link-entity. NodeName = condition` |
| **Root Cause** | `GetSteps()` line 462-463: `typeNameFilter` was a bare `<condition>` element placed directly as child of `<link-entity name='plugintype'>`. FetchXML requires conditions to be inside a `<filter>` wrapper. The `assemblyFilter` variable (line 458-459) correctly used `<filter>...</filter>`, but `typeNameFilter` did not. |
| **AI Impact** | An AI agent using `type_name` to narrow plugin results would get an error every time, preventing it from filtering plugin steps by type name. The agent would either give up or fall back to unfiltered results, losing precision. |
| **Fix** | Wrapped the `typeNameFilter` condition in `<filter>...</filter>` tags, matching the pattern used by `assemblyFilter` and `entityFilter`. |
| **Test** | `GetPlugins_TypeNameFilter_ValidationViaInputValidation` in `GetPluginsToolTests.cs` |

> **Passed tests**: invalid stage validation, invalid mode validation, stage/mode case normalization (UPPERCASE), entity case normalization (PascalCase), nonexistent entity error, nonexistent message returns 0, max_records boundary correction (0, -1, 501), assembly list mode, single assembly detail mode, entity filter with whitespace, SQL injection in assembly_name, SQL injection in type_name, include_config=true with message filter, include_images=false, active_only=false, triple filter (entity+message+type_name), triple filter (assembly+stage+type_name).

---

## Round 2

> 0 new findings (regression check + targeted analysis).

No new findings — all fixes verified clean.

**Regression tests passed**:
- `entity_name + message_name + type_name` triple filter: 1 correct result
- `assembly_name + stage + type_name` triple filter: 2 correct results
- `type_name=NonExistentPlugin`: 0 results (no crash)
- `type_name="%"` (wildcard): returns all (LIKE pattern, correct behavior)
- SQL injection in `type_name`: 0 results (properly escaped, no crash)

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 1 | 1 | 16 | B |
| 2 | 0 | 0 | 0 | - |
| **Total** | **1** | **1** | **16** | |

### Exit Reason

> `0 new findings — tool is clean`

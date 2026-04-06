# PLAN: Merge get_record + upsert_record + delete_record into manage_record

**Date:** 2026-04-06
**Status:** Analysis / Awaiting Decision
**Impact:** 35 tools -> 33 tools (net -2)

---

## 1. Motivation

| Problem | Detail |
|---------|--------|
| Tool count growth | 35 tools and growing. Each tool = description + parameters injected into every AI request |
| Token cost per request | MCP protocol sends ALL tool definitions on every request. 35 tools ~ 8,000-12,000 tokens just for tool descriptions |
| Record CRUD is 3 separate tools | `get_record`, `upsert_record`, `delete_record` operate on the same concept (single record by entity + ID) |
| Precedent in codebase | `upsert_record` already merges Create + Update via `record_id` presence. Same pattern can extend to Read + Delete |

---

## 2. Current State (3 Tools)

### get_record (ReadOnly)
```
Parameters: entity_name (required), record_id (required), columns (optional)
Returns: string (plain text key-value pairs)
MCP flags: Idempotent=true, Destructive=false, ReadOnly=true
```

### upsert_record (Create/Update)
```
Parameters: entity_name (required), fields_json (required), record_id (optional)
Returns: CallToolResult with StructuredContent (CrudResult)
MCP flags: Destructive=true, ReadOnly=false, Idempotent=false
Behavior: record_id empty = CREATE, record_id provided = UPSERT
```

### delete_record (Delete)
```
Parameters: entity_name (required), record_id (required)
Returns: CallToolResult with StructuredContent (CrudResult)
MCP flags: Destructive=true, ReadOnly=false, Idempotent=false
```

---

## 3. Proposed Design: `manage_record`

### Option A: Action-based dispatch (Recommended)

```
Tool name: manage_record
Parameters:
  - action      (required): "create" | "read" | "update" | "delete"
  - entity_name (required): entity logical name
  - record_id   (optional): GUID - required for read/update/delete, empty for create
  - fields_json (optional): JSON fields - required for create/update, ignored for read/delete
  - columns     (optional): comma-separated columns - only used for "read" action
```

**AI routing logic (pure CRUD):**
```
action="create"  -> Create(entity, fields)              [returns new GUID]
action="read"    -> Retrieve(entity, id, columns)       [returns field values]
action="update"  -> UpsertRequest(entity, id, fields)   [internally uses Upsert for robustness]
action="delete"  -> Delete(entity, id)                  [permanent removal]
```

> **Note:** `update` internally uses `UpsertRequest` (create-if-not-exists) for robustness, but the tool concept is pure CRUD — no "upsert" exposed to AI.

### Option B: Keep get_record, merge only upsert+delete

Merge only `upsert_record` + `delete_record` -> `manage_record` (action: "create"/"upsert"/"delete")
Keep `get_record` as-is because it has different MCP flags (ReadOnly=true, Idempotent=true).

Result: 35 -> 34 tools (net -1)

---

## 4. Pros and Cons

### Pros (Why merge)

| # | Pro | Detail |
|---|-----|--------|
| 1 | **Fewer tools = fewer tokens** | -2 tools saves ~500-800 tokens per request (tool descriptions + parameter schemas) |
| 2 | **Conceptual grouping** | All single-record operations under one tool. AI understands "record CRUD" as one concept |
| 3 | **Consistent return type** | All actions return `CallToolResult` with `CrudResult` structured content (get_record currently returns plain string) |
| 4 | **Shared validation** | entity_name + record_id validation code is duplicated across 3 files today |
| 5 | **Precedent** | upsert_record already multiplexes Create/Update via parameter presence |
| 6 | **Scales better** | If future operations are needed (e.g., "exists" check), add to action enum instead of new tool |

### Cons (Why NOT merge)

| # | Con | Detail | Severity |
|---|-----|--------|----------|
| 1 | **MCP flag conflict** | `get_record` is ReadOnly+Idempotent. `delete_record` is Destructive. Merged tool must use the most permissive flags (Destructive=true, ReadOnly=false). AI may be more cautious calling a "destructive" tool even for reads | **Medium** |
| 2 | **AI tool selection accuracy** | With separate tools, AI has 3 distinct names to pattern-match. With one tool + action param, AI must correctly choose the action value. Most LLMs handle this well but it adds one level of indirection | **Low** |
| 3 | **Description bloat** | One tool description must cover all 5 actions. May be longer than 3 separate descriptions combined. However, parameter schemas are smaller (shared params) | **Low** |
| 4 | **Breaking change** | Any AI agent or prompt that references `get_record` or `delete_record` by name will break. Need migration period or aliases | **Medium** |
| 5 | **MCP annotations lose precision** | MCP spec uses per-tool annotations (ReadOnly, Destructive, Idempotent). A merged tool can't express "read is idempotent but delete is destructive" at the protocol level | **Medium** |
| 6 | **Testing complexity** | One test class covers 5 code paths instead of 3 simple classes | **Low** |

---

## 5. Will AI Understand `manage_record`?

### YES - High confidence

| Factor | Evidence |
|--------|----------|
| Action-based tools are common in MCP | Many MCP servers use action/mode params (e.g., `get_forms` has list vs detail mode based on `form_id` presence) |
| DevKit already uses this pattern | `get_views` (list/detail), `get_plugins` (3 modes), `upsert_form` (update/rename/undo), `upsert_view` (update/create/rename/undo) |
| LLMs are good at enum routing | "action" with fixed values like "read"/"create"/"delete" is trivial for GPT-4, Claude, Gemini |
| Description guides AI | Tool description will have clear BEHAVIOR section showing action -> behavior mapping |

### Risk: AI calling wrong action

| Scenario | Risk Level | Mitigation |
|----------|-----------|------------|
| AI calls action="delete" instead of "read" | Very Low | Description warns "DELETE is PERMANENT". Annotations flag tool as Destructive |
| AI forgets action param | Very Low | action is required, server returns clear error |
| AI passes fields_json for "read" | None | Ignored silently, no harm |
| AI tries action="upsert" (not valid) | Very Low | Server returns clear error listing valid actions: create/read/update/delete |

---

## 6. Token Impact Analysis

### Current (3 tools)

| Tool | Est. Description Tokens | Est. Param Schema Tokens |
|------|------------------------|-------------------------|
| get_record | ~120 | ~100 |
| upsert_record | ~200 | ~120 |
| delete_record | ~100 | ~80 |
| **Total** | **~420** | **~300** = **~720 tokens** |

### Proposed (1 tool)

| Tool | Est. Description Tokens | Est. Param Schema Tokens |
|------|------------------------|-------------------------|
| manage_record | ~350 | ~180 |
| **Total** | **~350** | **~180** = **~530 tokens** |

**Savings: ~190 tokens per request** (from these 3 tools alone)

> Note: If we also merge `delete_record`, the savings increase. The real value compounds across all 35 tools being sent every request.

---

## 7. Broader Merge Opportunities

If this pattern works, other merge candidates:

| Candidate | Current Tools | Merged Name | Savings |
|-----------|--------------|-------------|---------|
| get_record + upsert_record + delete_record | 3 | manage_record | -2 |
| get_variables + upsert_variable | 2 | manage_variable | -1 |
| get_forms + upsert_form + build_formxml | 3 | manage_form | -2 |
| get_views + upsert_view | 2 | manage_view | -1 |

**Potential: 35 -> 29 tools** (but each merge adds description complexity — diminishing returns)

> **Recommendation:** Start with `manage_record` as a pilot. Evaluate AI accuracy before expanding.

---

## 8. Implementation Plan (if approved)

| Step | Task | Files |
|------|------|-------|
| 1 | Create `ManageRecordTool.cs` with action-based dispatch | `Mcp/Tools/ManageRecordTool.cs` |
| 2 | Migrate `get_record` logic (Retrieve + FormatRecord) | from `GetRecordTool.cs` |
| 3 | Migrate `upsert_record` logic (Create/Upsert) | from `UpsertRecordTool.cs` |
| 4 | Migrate `delete_record` logic | from `DeleteRecordTool.cs` |
| 5 | Add direct Update action (internally uses UpsertRequest) | Reuse existing upsert logic |
| 6 | Unify return type: all actions return `CallToolResult` | Standardize `read` to also return structured |
| 7 | Delete old 3 tool files | `GetRecordTool.cs`, `UpsertRecordTool.cs`, `DeleteRecordTool.cs` |
| 8 | Update AGENTS.md tool list (35 -> 33) | `AGENTS.md` |
| 9 | Update MCP tool descriptions in docs | `DynamicsCrm.DevKit.Docs/` |
| 10 | Run adversarial review | `/claude-adversarial-mcp-tool` |

---

## 9. Recommendation

**Go with Option A** (full merge of all 3 into `manage_record`).

Reasons:
1. Maximum token savings (-2 tools)
2. Clean conceptual model (one tool = one record)
3. DevKit already uses action-based dispatch in 4+ tools
4. AI accuracy risk is low based on evidence
5. MCP annotation loss is acceptable — the `action` param + description compensate

The main risk (MCP flag conflict) is inherent to any merge of read+write tools. This is a trade-off: protocol-level safety annotations vs. token efficiency. Given that AI already handles `upsert_form` (which has both read-adjacent "undo" and write "update" actions), this is proven to work.

---

## 10. Decision Required

| Option | Tools After | Token Savings | Risk |
|--------|------------|---------------|------|
| **A: Full merge (manage_record)** | 33 | ~190 tokens/request | Low-Medium |
| **B: Partial merge (keep get_record)** | 34 | ~100 tokens/request | Low |
| **C: No merge** | 35 | 0 | None |

Phuoc — which option do you want to proceed with?

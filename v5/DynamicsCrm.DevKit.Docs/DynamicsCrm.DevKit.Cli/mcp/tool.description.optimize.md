# Plan: Optimize MCP Tool Descriptions to Reduce Token Usage

## Context

Hiện tại 29 MCP tools gửi **~23,500 chars (~6,500 tokens)** tool descriptions trong MỌI conversation qua `tools/list`. Resources chỉ được fetch on-demand. ServerInstructions hiện tại chỉ có ~50 tokens (env info).

**Mục tiêu**: Giảm ~50% baseline token cost mà KHÔNG mất context cho AI tool selection.

**Nguyên lý**: Tool descriptions = trả token MỌI lần. Resources = trả token CHỈ khi cần. ServerInstructions = trả token 1 lần/conversation.

---

## Approach: 3-Tier Optimization

### Phase 1: Tạo resource `docs://tool_reference` (additive, zero risk)

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Resources/InstructionResources.cs`

Thêm method mới với `[McpServerResource]` attribute:
- URI: `docs://tool_reference`
- Content: Markdown document chứa tất cả TIPS, WHEN TO USE, examples, edge cases, parameter format guides từ 29 tools
- Tổ chức theo functional area (Data Access, Metadata, Forms, Views, Schema Changes, Security, Debugging, etc.)

Nội dung gồm:
- FetchXML structure guide (từ `execute_fetchxml`)
- Field type formatting guide (từ `manage_record`)
- Cross-tool workflows (build_form_xml → manage_form, etc.)
- Safety procedures chi tiết
- Per-tool TIPS sections
- Parameter format examples

### Phase 2: Mở rộng ServerInstructions (additive, low risk)

**File**: `DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs` (lines 99-103)

Thêm shared cross-tool patterns (~200-300 tokens):

| Section | Content | Replaces in tools |
|---------|---------|-------------------|
| Environment | (giữ nguyên) env info | — |
| Discovery | "Use get_tables to find entity/attribute names" | Repeated in 10+ tools |
| Safety | "XML-mutating tools auto-backup, validate XSD, block on failure" | Repeated in form/view/sitemap |
| Publishing | "auto_publish=false when batching, then publish_customizations" | Repeated in 5+ tools |
| Common Entities | Account=account, Contact=contact, etc. | From get_tables |
| Reference | "Read docs://tool_reference for detailed tips and workflows" | New pointer |

### Phase 3: Compress tool descriptions (29 files, moderate risk)

**Files**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/*.cs` — modify `[Description]` attribute on each tool method.

**Keep** in each description:
- 1-sentence purpose
- Action/mode list (essential for tool selection)
- Critical safety constraints (BLOCKED ops, IMPORTANT rules)
- Required parameter combos per action

**Remove** (đã move sang resource/ServerInstructions):
- TIPS sections
- Verbose WHEN TO USE
- Parameter format examples
- Repeated cross-references ("Use get_tables", "Set auto_publish=false")

**Giữ nguyên**: Tất cả parameter-level `[Description]` attributes (đã concise)

#### Batches (theo size, largest savings first):

**Batch A** — Extra Long (4 tools, ~1,200+ → ~500 chars each):
- `BuildFormXMLTool.cs` — remove SECTION/TAB COLUMNS details, TIPS
- `ExecuteWebApiTool.cs` — keep BLOCKED list (safety-critical), remove WHEN TO USE
- `ManageFormTool.cs` — keep "ALWAYS use build_form_xml first", remove TIPS
- `ManageViewTool.cs` — keep SYNC RULE, remove TIPS

**Batch B** — Long (4 tools, ~900-1,199 → ~350 chars each):
- `ManageRecordTool.cs` — remove field type guide
- `ManageWebResourceTool.cs` — remove TIPS
- `UpsertColumnTool.cs` — remove detailed create/update modes
- `UpsertTableTool.cs` — remove detailed create/update modes

**Batch C** — Medium (7 tools, ~700-899 → ~280 chars each):
- `GetWorkflowsTool.cs`, `GetDataverseCommandsTool.cs`, `GetTablesTool.cs`, `GetAuditHistoryTool.cs`, `GetMessagesTool.cs`, `ManageEnvironmentVariableTool.cs`, `SearchRecordsTool.cs`

**Batch D** — Short (14 tools, ~500-699 → ~250 chars each):
- All remaining tools

### Before/After Examples

**execute_fetchxml** (643 → ~280 chars):

```
// BEFORE
"Execute a FetchXML query against Dataverse. Returns markdown table. Max 5000 records. Supports auto-paging.\n\n" +
"FETCHXML STRUCTURE:\n" +
"- <fetch [distinct] [aggregate]> → <entity name='logical_name'> → <attribute>, <filter>, <order>, <link-entity>\n" +
"- DO NOT use top/count/page in <fetch> — use max_records parameter instead\n" +
"- Operators: eq, ne, gt, ge, lt, le, like (%), null, not-null, in, between, today, last-x-days, etc.\n" +
"- Joins: <link-entity name='entity' from='col' to='col' link-type='inner|outer' [alias='a']>\n" +
"- Aggregation: aggregate='true' on <fetch>, then count/sum/avg/min/max with alias + groupby\n\n" +
"RULES:\n" +
"- Use lowercase logical names. Use get_tables if unsure\n" +
"- For advanced syntax, read schema://fetchxml"

// AFTER
"Execute a FetchXML query against Dataverse. Returns markdown table. Max 5000 records with auto-paging.\n" +
"DO NOT use top/count/page in <fetch> — use max_records parameter instead.\n" +
"Use lowercase logical names. For FetchXML syntax, read schema://fetchxml"
```

**manage_form** (1,185 → ~420 chars):

```
// BEFORE (truncated)
"Retrieve and modify form definitions for a Dataverse entity.\n\n" +
"FIVE ACTIONS: ..." + "WORKFLOW: ..." + "IMPORTANT: ..." + "SAFETY: ..." + "TIPS: ..."

// AFTER
"Manage Dataverse entity form definitions.\n\n" +
"FIVE ACTIONS: list, detail, update, rename, undo.\n" +
"- update: requires form_id + formxml\n" +
"- undo: requires form_id + formxml (backup file path)\n\n" +
"IMPORTANT: ALWAYS use build_form_xml before update. Never construct FormXML manually."
```

**whoami** (534 → ~200 chars):

```
// BEFORE
"Get the identity of the currently authenticated user, environment info, and access token. Returns: user (ID, name, email, roles), org (ID, URL, version, friendly name), tenant/environment IDs, base language, currency, fiscal settings, audit status. WHEN TO USE: ..."

// AFTER
"Get current user identity, environment info, and optional access token.\n" +
"Returns: user (ID, name, email, roles), org (ID, URL, version), tenant/environment IDs, fiscal settings, audit status."
```

---

## Token Savings Estimate

| Component | Current | After | Savings |
|-----------|---------|-------|---------|
| Tool descriptions (always) | ~6,500 tokens | ~2,800 tokens | -3,700 |
| ServerInstructions (always) | ~50 tokens | ~270 tokens | +220 |
| **Always-loaded total** | **~6,550** | **~3,070** | **~53%** |
| tool_reference resource (on-demand) | 0 | ~2,200 tokens | when needed |

---

## Verification

1. **Build**: `/build-cli` để verify compile thành công
2. **Static check**: Verify mọi action/mode name vẫn còn trong descriptions
3. **Functional**: Start MCP server → `tools/list` trả 29 tools → `resources/list` có `docs://tool_reference` mới
4. **AI testing**: Test 10 prompts cơ bản để verify tool selection accuracy:
   - "Show me account table schema" → get_tables
   - "Add a field to the form" → build_form_xml
   - "Who changed this record?" → get_audit_history
   - "Create a new table" → upsert_table
   - "Debug failing plugin" → get_debugging
   - "Show active views for contact" → manage_view
   - "Delete account record" → manage_record
   - "What roles does user X have?" → get_roles
   - "Update the site map" → manage_sitemap
   - "Find records mentioning Contoso" → search_records

---

## Risk Assessment

| Risk | Mitigation |
|------|------------|
| AI chọn sai tool sau khi compress | Giữ action/mode list trong description (discriminator chính) |
| AI bỏ qua safety steps | Giữ IMPORTANT/BLOCKED constraints inline, move generic safety sang ServerInstructions |
| AI không đọc resource | ServerInstructions có pointer "Read docs://tool_reference"; description đủ cho common cases |
| ServerInstructions quá lớn | Cap ở ~300 tokens; chỉ include patterns xuất hiện trong 3+ tools |

---

## Critical Files

| File | Change |
|------|--------|
| `Mcp/Resources/InstructionResources.cs` | Add `docs://tool_reference` resource method |
| `Mcp/McpServerHost.cs` (lines 99-103) | Expand ServerInstructions |
| `Mcp/Tools/*.cs` (29 files) | Compress `[Description]` attributes |

---

## PROS & CONS Analysis (Deep Dive)

### Honest Token Breakdown

Phân tích 7 tools mẫu cho thấy token cost thực tế của MỖI tool gồm 3 phần:

| Component | % of Total | Compressible? |
|-----------|-----------|---------------|
| Description text | ~41% | Yes |
| Parameter JSON schema | ~28% | NO (thay đổi = break tool calls) |
| Structural overhead (tags, schema boilerplate) | ~24% | NO (MCP format fixed) |
| Tool name, title | ~7% | NO |

**Con số thật**: Chỉ có ~41% token cost là compressible (description text). Phần còn lại (59%) là fixed cost từ parameter schemas + structural overhead.

### Corrected Savings Estimate

| Metric | Value |
|--------|-------|
| Total tool tokens (29 tools) | ~14,700 tokens |
| Description tokens only | ~6,000 tokens (41%) |
| After 50% compression | ~3,000 tokens saved |
| + ServerInstructions added | -300 tokens |
| **Net savings** | **~2,700 tokens** |
| **% of total tool tokens** | **~18%** |
| **% of full system prompt** (tools + Claude Code system + CLAUDE.md + rules ≈ 35,000-40,000 tokens) | **~7-8%** |

**Kết luận**: Claim "50% savings" chỉ đúng cho description text. Savings thực tế trong context đầy đủ là **~18% tool tokens** hay **~7-8% total system prompt**.

---

### PROS

| # | Pro | Impact |
|---|-----|--------|
| 1 | Giảm ~2,700 tokens/conversation | Tiết kiệm cost mỗi conversation |
| 2 | System prompt nhỏ hơn → response nhanh hơn | Giảm latency ~5-10% (ước lượng) |
| 3 | ServerInstructions consolidate shared patterns (DRY) | Ít duplicate, dễ maintain cross-tool rules |
| 4 | Resource `docs://tool_reference` = comprehensive guide | AI có nơi đọc deep reference khi cần |
| 5 | Category filtering đã có sẵn (basic/standard/advanced) | Kết hợp cả 2 approach → savings cộng dồn |

### CONS

| # | Con | Severity | Detail |
|---|-----|----------|--------|
| 1 | **AI có thể build parameters sai** | HIGH | Ví dụ: `manage_record` hiện có inline guide "Polymorphic Lookup: use `fieldname@targetentity`". Nếu move sang resource, AI phải read resource trước → có thể skip → gọi tool sai syntax |
| 2 | **AI có thể bỏ qua multi-tool workflows** | MEDIUM | Ví dụ: "browse traces first, then trace_detail" trong `get_debugging`. Nếu bỏ, AI có thể gọi `trace_detail` mà ko có `record_id` |
| 3 | **AI có thể KHÔNG đọc resource** | HIGH | Không có guarantee rằng AI sẽ đọc `docs://tool_reference` trước khi gọi tool. Behavior này phụ thuộc vào AI model, không deterministic |
| 4 | **Maintenance overhead tăng** | MEDIUM | Context giờ split 3 nơi (description, ServerInstructions, resource). Khi thêm tool mới phải update 3 nơi. Risk out-of-sync |
| 5 | **29 files phải sửa = 29 regression points** | MEDIUM | Mỗi description sửa sai = tool có thể mất chức năng. Hard to test comprehensively vì AI behavior là probabilistic |
| 6 | **FetchXML construction quality giảm** | MEDIUM | Inline guide (operators, joins, aggregation) giúp AI construct đúng syntax. Bỏ → AI phải dùng pre-trained knowledge hoặc đọc `schema://fetchxml` |
| 7 | **ServerInstructions not guaranteed to be used** | LOW | ServerInstructions nằm trong system prompt nhưng là 1 block chung, không gắn trực tiếp với tool nào. AI có thể ignore khi quyết định tool-specific behavior |

---

### Concrete Scenarios: What Could Go Wrong

#### Scenario 1: Polymorphic Lookup (HIGH RISK)
```
User: "Create a case for contact John Smith"
```
- **Current**: AI sees inline guide "Polymorphic Lookup: use `customerid@contact`" → calls manage_record correctly
- **After**: AI doesn't see this guide → might use `{"customerid": "guid"}` (sai, thiếu @contact) → API error → retry → waste tokens

#### Scenario 2: FetchXML Aggregation (MEDIUM RISK)
```
User: "Count accounts by industry"
```
- **Current**: AI sees inline "Aggregation: aggregate='true' on <fetch>, then count/sum/avg/min/max with alias + groupby" → construct đúng
- **After**: AI relies on pre-trained knowledge → có thể đúng (Claude biết FetchXML) nhưng less reliable

#### Scenario 3: Form Modification Workflow (LOW RISK if constraint kept)
```
User: "Add telephone field to account form"
```
- **Current & After**: "ALWAYS use build_form_xml before update" giữ inline → workflow đúng
- Risk chỉ cao nếu constraint này bị remove

#### Scenario 4: Debug Plugin (MEDIUM RISK)
```
User: "Check plugin errors"
```
- **Current**: AI sees "Browse first (traces list), then detail with record_id" → 2-step workflow
- **After**: AI might try `trace_detail` first without record_id → error → retry

---

### Alternative: Conservative Approach

Thay vì full compression, có thể chỉ:

| Phase | Action | Risk | Savings |
|-------|--------|------|---------|
| 1 | Tạo `docs://tool_reference` resource (additive) | ZERO | +0 (resource sẵn sàng) |
| 2 | Expand ServerInstructions với shared patterns | LOW | -200 tokens (remove duplicates) |
| 3 | Compress CHỈ 4 extra-long tools (top offenders) | LOW-MEDIUM | -800 tokens |
| Skip | Không compress 25 tools còn lại | — | — |
| **Total** | | | **~1,000 tokens saved, minimal risk** |

Hoặc tốt hơn: **leverage category system đã có sẵn**:
- User dùng `devkit mcp --category basic` (7 tools) → giảm 75% tool tokens với ZERO quality loss
- Chỉ dùng `all` khi thực sự cần 29 tools

---

### Recommendation

| Approach | Token Savings | Risk | Recommended? |
|----------|--------------|------|-------------|
| Full 3-tier (plan gốc) | ~2,700 tokens (~18% tools) | HIGH | Chỉ nếu token cost là critical concern |
| Conservative (top 4 + resource) | ~1,000 tokens (~7% tools) | LOW | Yes - best risk/reward |
| Category filtering (already built) | ~11,000 tokens (~75% tools) | ZERO | Yes - most impactful, zero code change |
| Kết hợp: Conservative + Category | Best of both | LOW | Best overall strategy |

---

## [CodeX] Phản Biện Và Đề Xuất Cải Tiến (2026-04-08)

[CodeX] Nhận định chung: tài liệu hiện tại đi đúng hướng, nhưng có vài giả định đang hơi “lạc quan”, cần chỉnh để tránh regression chất lượng gọi tool.

### [CodeX] Điểm đúng (nên giữ)

[CodeX] Category filtering trong MCP host là đòn bẩy lớn và đã có sẵn trong code, nên ưu tiên áp dụng sớm.
[CodeX] Tách “kiến thức dài” sang resource là hợp lý nếu phần đó không phải kiến thức bắt buộc cho first-call success.
[CodeX] Giữ action/mode và safety constraint trong description là nguyên tắc đúng.

### [CodeX] Điểm cần phản biện/chỉnh lại

[CodeX] “Phase 1 zero risk” chưa chính xác: thêm resource có rủi ro drift nội dung do kiến thức bị tách ra nhiều nơi (tool description, ServerInstructions, resource), đặc biệt khi cập nhật tool behavior.
[CodeX] “ServerInstructions trả token 1 lần/conversation” là giả định phụ thuộc client/orchestrator. Một số client có thể re-inject nhiều lần; nên đo payload thực tế thay vì giả định.
[CodeX] “Fixed cost không nén được” mới đúng một phần: schema shape thì fixed, nhưng text trong parameter descriptions vẫn là token text. Nếu không đo phần này, ước tính savings có thể lệch.
[CodeX] Kế hoạch test 10 prompt là tốt để smoke test nhưng chưa đủ cho regression guard; cần thêm tiêu chí định lượng (tool chọn đúng, parameter đúng ngay lần đầu).

### [CodeX] Bằng chứng từ codebase hiện tại

[CodeX] McpServerHost đã có ToolCategoryMap và lọc tool theo level, tức strategy category là khả thi ngay.
[CodeX] ServerInstructions hiện tại rất ngắn (environment + category), đúng như tài liệu mô tả baseline.
[CodeX] CLI help/category text hiện không đồng bộ với map hiện tại (mô tả số lượng category bị lệch), cho thấy cần thêm bước đồng bộ/tự động kiểm tra metadata khi tối ưu.
[CodeX] InstructionResources hiện đã chứa tài liệu dài cho form/view; nếu thêm tool_reference cần tránh trùng lặp và phải có ownership rõ ràng.

### [CodeX] Đề xuất tốt hơn (risk/reward cao hơn)

[CodeX] Phase 0 (ngay lập tức, no-regret): ưu tiên cấu hình chạy category phù hợp trong MCP config theo ngữ cảnh làm việc (basic/standard), vì cho lợi ích lớn mà không sửa 29 file.
[CodeX] Phase 1 (đo lường trước): tạo script đo kích thước payload thực tế từ tools/list + resources/list + server instructions theo từng category để có baseline chuẩn.
[CodeX] Phase 2 (nén có chọn lọc): chỉ nén top offenders trước, nhưng KHÔNG di chuyển các “syntax-critical hints” (ví dụ polymorphic lookup format, trace browse->detail sequence, fetchxml aggregate skeleton).
[CodeX] Phase 3 (resource hóa có kiểm soát): thêm docs://tool_reference nhưng chỉ chứa kiến thức tham khảo sâu; không chuyển các rule bắt buộc cho lần gọi đầu tiên.
[CodeX] Phase 4 (quality gate): thêm regression harness với tập prompt chuẩn và pass criteria rõ ràng trước khi rollout toàn bộ 29 tools.

### [CodeX] Pass Criteria đề xuất (để quyết định có rollout full hay không)

[CodeX] Tool selection accuracy không giảm quá 1-2% so với baseline trên bộ prompt kiểm thử.
[CodeX] First-call parameter correctness cho các scenario “sensitive” (manage_record, get_debugging, execute_fetchxml, manage_form/view) đạt >= 95%.
[CodeX] Tỷ lệ phải retry do sai format/sai workflow không tăng so với baseline.
[CodeX] Nếu không đạt tiêu chí, dừng ở conservative compression + category filtering, không mở rộng full 29 tools.

## [CodeX] Update (Re-Analysis 2026-04-08)

[CodeX] Kết luận ngắn gọn: AI đã làm đúng hướng khoảng 75-80%, nhưng CHƯA đúng hoàn toàn ở phần ước lượng hiệu quả tổng thể và mức rủi ro triển khai full 29 tools.

[CodeX] Những gì AI làm đúng:
- [CodeX] Chọn đúng chiến lược nền: category filtering + selective compression + resource hóa nội dung dài.
- [CodeX] Nhận diện đúng các constraint quan trọng phải giữ inline (actions/modes/safety-critical rules).
- [CodeX] Đưa ra risk scenarios thực tế cho các tool nhạy cảm (manage_record, execute_fetchxml, get_debugging).

[CodeX] Những gì cần chỉnh để “đúng production-ready”:
- [CodeX] Không dùng claim tiết kiệm kiểu “50% toàn cục”; chỉ công bố theo từng lớp đo (description-only, tool-payload, total prompt).
- [CodeX] Không coi resource là zero-risk; phải có ownership và sync rule để tránh drift nội dung.
- [CodeX] Không rollout full ngay; bắt buộc rollout theo pha + quality gate định lượng.

[CodeX] Quyết định đề xuất cập nhật:
- [CodeX] Ưu tiên áp dụng ngay: category filtering theo ngữ cảnh (basic/standard) + conservative compression cho top offenders.
- [CodeX] Tạm hoãn full compression 29 tools cho đến khi pass đầy đủ các tiêu chí ở mục “Pass Criteria”.
- [CodeX] Nếu pass 2 vòng regression liên tiếp mới mở rộng rollout diện rộng.

[CodeX] Trạng thái sau re-analysis: PLAN HỢP LÝ NHƯNG CẦN SIẾT ĐO LƯỜNG VÀ TRIỂN KHAI THẬN TRỌNG.

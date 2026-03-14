# MCP Tools - Đề Xuất Thêm Tools Mới

> **Ngày**: 2026-03-14
> **Tham khảo**: Microsoft Official Dataverse-MCP, codeurali/mcp-dataverse (73 tools), mwhesse/dataverse-mcp, Abiz.Mcp

---

## Hiện Trạng: 5 Tools

| # | Tool | Category |
|---|---|---|
| 1 | `get_entities_metadata` | Metadata |
| 2 | `get_entity_metadata` | Metadata |
| 3 | `get_global_optionsets` | Metadata |
| 4 | `get_messages` | Metadata |
| 5 | `execute_fetchxml` | Query |

---

## So Sánh Với Các MCP Server Khác

| Category | Microsoft Official | codeurali (73 tools) | mwhesse | Abiz.Mcp | **DevKit CLI** |
|---|---|---|---|---|---|
| **Auth/WhoAmI** | - | `whoami` | - | - | **MISSING** |
| **Metadata - Tables** | `list_tables`, `describe_table` | `list_tables`, `get_table_metadata`, `resolve_entity_name` | table tools | `get_all_entities`, `get_entity_metadata` | `get_entities_metadata`, `get_entity_metadata` |
| **Metadata - Relationships** | - | `get_relationships` | relationship tools | (in entity metadata) | (in entity metadata) |
| **Metadata - OptionSets** | - | `list_global_option_sets`, `get_option_set`, `get_attribute_option_set` | option set tools | `get_global_optionsets` | `get_global_optionsets` |
| **Metadata - Entity Keys** | - | `get_entity_key` | - | - | **MISSING** |
| **Metadata - Messages** | - | - | - | - | `get_messages` **(UNIQUE!)** |
| **Query** | `read_query`, `search`, `fetch` | `query`, `execute_fetchxml`, `retrieve_multiple_with_paging` | - | `execute_fetch_xml` | `execute_fetchxml` |
| **CRUD** | `create_record`, `update_record`, `delete_record` | 6 tools | - | - | **MISSING** |
| **Search** | `search` | `search` (Relevance Search) | - | - | **MISSING** |
| **Solutions** | - | `publish_customizations` | solution tools | - | **MISSING** |
| **Environment** | - | `get_environment_variable`, `environment_capabilities` | - | - | **MISSING** |

---

## TIER 1 — Nên Thêm (rất hữu ích cho AI agent hàng ngày)

### A. `whoami`

**Mô tả**: Trả về thông tin user hiện tại (UserId, BusinessUnitId, OrganizationId, SecurityRoles).

**Lý do**:
- Mọi MCP server đều có tool này
- AI agent cần biết mình đang connect với ai, environment nào
- Giúp debug permission issues
- Microsoft official, codeurali đều có

**Implementation**: Gọi `WhoAmIRequest`, trả về markdown table.

**Ví dụ output**:
```
| Property | Value |
| --- | --- |
| UserId | 12345678-... |
| BusinessUnitId | 87654321-... |
| OrganizationId | abcdef01-... |
| EnvironmentUrl | https://org.crm.dynamics.com |
```

---

### B. `get_record`

**Mô tả**: Retrieve 1 record theo entity logical name + record ID, trả về markdown.

**Lý do**:
- AI agent thường cần xem chi tiết 1 record sau khi query
- Microsoft official có `fetch`, codeurali có `get`
- Không cần viết FetchXML cho trường hợp đơn giản

**Parameters**:
- `entity_name` (required): Entity logical name
- `record_id` (required): GUID of the record
- `columns` (optional): Comma-separated column names. Empty = all columns

**Implementation**: Gọi `Retrieve(entityName, id, columnSet)`, format bằng `DataverseValueFormatter`.

---

### C. `search`

**Mô tả**: Dataverse Relevance Search (full-text search).

**Lý do**:
- Microsoft official có, codeurali có
- Rất hữu ích khi user nói "tìm contact tên John" mà AI không cần viết FetchXML
- Tìm kiếm across multiple entities cùng lúc

**Parameters**:
- `search_term` (required): Text to search
- `entities` (optional): Comma-separated entity names to limit search scope
- `max_results` (optional): Default 20, max 100

**Implementation**: Gọi Dataverse Search API (`searchindex` endpoint).

**Lưu ý**: Cần environment có Relevance Search enabled.

---

### D. `get_environment_info`

**Mô tả**: Trả về environment URL, version, organization name, language, currency.

**Lý do**:
- AI agent cần biết đang làm việc với environment nào
- Hữu ích cho troubleshooting
- codeurali có `environment_capabilities`

**Implementation**: Gọi `RetrieveCurrentOrganizationRequest` hoặc query `organization` entity.

**Ví dụ output**:
```
| Property | Value |
| --- | --- |
| OrganizationName | contoso |
| FriendlyName | Contoso Production |
| Url | https://contoso.crm.dynamics.com |
| Version | 9.2.24041.00170 |
| BaseCurrencyCode | USD |
| BaseLanguageCode | 1033 (English) |
```

---

## TIER 2 — Có Thể Thêm (hữu ích cho development workflow)

### E. `get_relationships`

**Mô tả**: Retrieve relationships riêng cho 1 entity (1:N, N:1, N:N) với format dễ đọc.

**Lý do**:
- Hiện tại relationships nằm trong `get_entity_metadata` nhưng output rất dài
- Tool riêng giúp AI focus vào relationships khi cần join entities
- codeurali có `get_relationships` riêng

**Parameters**:
- `entity_name` (required): Entity logical name
- `relationship_type` (optional): `1:N`, `N:1`, `N:N`, or empty for all

**Lưu ý**: Có thể không cần nếu `get_entity_metadata` đã đủ tốt. Cân nhắc.

---

### F. `get_entity_keys`

**Mô tả**: Retrieve alternate keys cho 1 entity.

**Lý do**:
- Hiện nằm trong `get_entity_metadata` nhưng AI thường cần biết alternate keys khi làm upsert
- codeurali có `get_entity_key` riêng

**Parameters**:
- `entity_name` (required): Entity logical name

**Lưu ý**: Có thể không cần nếu `get_entity_metadata` đã đủ tốt. Cân nhắc.

---

### G. `resolve_entity_name`

**Mô tả**: Fuzzy resolve display name hoặc common name sang logical name.

**Ví dụ**:
- "Cases" → `incident`
- "Users" → `systemuser`
- "Activities" → `activitypointer`
- "Business Units" → `businessunit`

**Lý do**:
- codeurali có tool này
- Giảm hallucination khi AI không biết chính xác logical name
- Tránh lỗi "entity not found" trong FetchXML

**Implementation**: Gọi `get_entities_metadata` internal, fuzzy match trên displayName và logicalName.

**Lưu ý**: Có thể implement bằng cách cải thiện `get_entities_metadata` filter thay vì tool riêng. Cân nhắc.

---

### H. `get_attribute_optionset`

**Mô tả**: Get options cho 1 attribute cụ thể trên 1 entity (local picklist).

**Lý do**:
- codeurali có `get_attribute_option_set`
- Hiện `get_entity_metadata` trả về options inline nhưng khó parse khi entity có nhiều attributes
- Hữu ích khi AI cần biết options cho 1 field cụ thể

**Parameters**:
- `entity_name` (required): Entity logical name
- `attribute_name` (required): Attribute logical name

**Lưu ý**: Có thể không cần nếu `get_entity_metadata` đã inline options đủ tốt. Cân nhắc.

---

## TIER 3 — Tùy Chọn (nâng cao, cho power users)

### I. `create_record`

**Mô tả**: Create 1 record trong Dataverse.

**Parameters**:
- `entity_name` (required): Entity logical name
- `data` (required): JSON object with field values

**Lưu ý**: Write operation — cần cân nhắc guardrails (confirm trước khi tạo).

---

### J. `update_record`

**Mô tả**: Update 1 record trong Dataverse.

**Parameters**:
- `entity_name` (required): Entity logical name
- `record_id` (required): GUID
- `data` (required): JSON object with updated fields

**Lưu ý**: Write operation — cần cân nhắc guardrails.

---

### K. `delete_record`

**Mô tả**: Delete 1 record (cần confirm).

**Parameters**:
- `entity_name` (required): Entity logical name
- `record_id` (required): GUID
- `confirm` (required): Must be `true` to execute

**Lưu ý**: Nguy hiểm — PHẢI có confirm flag.

---

### L. `get_views`

**Mô tả**: List saved views (system/personal) cho 1 entity.

**Lý do**: Hữu ích khi AI cần biết có những view nào để query hoặc reference.

**Parameters**:
- `entity_name` (required): Entity logical name
- `view_type` (optional): `system`, `personal`, or empty for all

---

## Khuyến Nghị

| Tier | Tools | Recommendation |
|---|---|---|
| **TIER 1** | A (`whoami`), B (`get_record`), C (`search`), D (`get_environment_info`) | **Nên thêm tất cả 4** — đây là baseline mà mọi MCP server đều có |
| **TIER 2** | E, F, G, H | **Chọn lọc** — G (`resolve_entity_name`) rất hay vì giảm hallucination |
| **TIER 3** | I, J, K, L | **Tùy chọn** — DevKit focus vào development nên CRUD có thể không cần |

---

## Tham Khảo

- [Microsoft Official Dataverse MCP](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-mcp)
- [codeurali/mcp-dataverse](https://github.com/codeurali/mcp-dataverse) — 73 tools, most comprehensive
- [mwhesse/dataverse-mcp](https://github.com/mwhesse/dataverse-mcp) — Schema & security focus
- [microsoft/Dataverse-MCP](https://github.com/microsoft/Dataverse-MCP) — Official labs
- [Abiz.Mcp](D:\azure\abiz\HONGNGA\SourceCode\src\Abiz.Mcp) — Internal reference

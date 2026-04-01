# MCP Tool Output Token Optimization

**Document Type:** Implementation Specification
**Project:** DynamicsCrm.DevKit CLI — MCP Server
**Created:** 2026-03-28
**Status:** Approved — Ready for Implementation

---

## 1. Problem Statement

MCP tool output is consumed by AI agents (LLMs). Every token in the response costs money. Current output uses **Markdown tables** (`| col | col |` with `| --- | --- |` separators) for everything, which adds **30-40% overhead** in decorative characters that carry zero semantic value for the LLM.

### Token Waste Quantified

A typical AI agent session (whoami + get_entities_metadata + 2x get_entity_metadata + 3x execute_fetchxml + get_record) currently costs **~22,000 tokens** in tool output alone. After optimization: **~12,500 tokens** — a **43% reduction**.

### Root Causes

| Root Cause | Example | Waste |
|---|---|---|
| Markdown table syntax | `\| Key \| Value \|` per row | 6+ chars/row wasted on pipes |
| Table separator rows | `\| --- \| --- \| --- \|` | ~15-20 tokens per table |
| Markdown headers | `# Title\n\n## Section\n\n` | ~5-10 tokens per section |
| Redundant columns | `SchemaName` = PascalCase of `LogicalName` | Entire column wasted |
| Verbose confirmations | 7-line Markdown table for "Created account abc-123" | ~35 tokens wasted |
| AccessToken in whoami | JWT token ~800-1500 chars | ~200-400 tokens per call |
| Empty cells in tables | `\|  \|` for null values | 3 chars x many cells |

---

## 2. Solution Overview — 3 Phases

| Phase | Description | Impact | Effort | NuGet Change |
|---|---|---|---|---|
| **Phase 1** | Replace Markdown format with compact Key-Value / TSV | **Highest** (~35-40% savings) | Medium | No |
| **Phase 2** | Drop redundant data, simplify CRUD responses | Medium (~5-10% additional) | Low | No |
| **Phase 3** | Upgrade SDK to v1.2.0, add `outputSchema` + `structuredContent` | Medium (~5-10% additional) | Medium | Yes — `ModelContextProtocol` 1.0.0 -> 1.2.0 |

---

## 3. Current Architecture

### Files Involved

| File | Role |
|---|---|
| `Mcp/Tools/Helper/MarkdownFormatter.cs` | Central formatter — generates ALL Markdown tables |
| `Mcp/Tools/Helper/DataverseValueFormatter.cs` | Formats Dataverse values (EntityReference, Money, DateTime, etc.) |
| `Mcp/Tools/Helper/WebApiResponseFormatter.cs` | Formats Web API responses |
| `Mcp/Tools/Helper/MessageDiscoveryHelper.cs` | Prepares message data, delegates to `MarkdownFormatter.FormatMessages()` |
| `Mcp/Tools/WhoAmITool.cs` | Builds output via `StringBuilder` directly (no formatter) |
| `Mcp/Tools/GetRecordTool.cs` | Builds output via `StringBuilder` directly |
| `Mcp/Tools/SearchTool.cs` | Builds output via `StringBuilder` directly |
| `Mcp/Tools/CreateRecordTool.cs` | Builds output via `StringBuilder` directly |
| `Mcp/Tools/UpdateRecordTool.cs` | Builds output via `StringBuilder` directly |
| `Mcp/Tools/DeleteRecordTool.cs` | Builds output via `StringBuilder` directly |
| `Mcp/Tools/GetSolutionComponentsTool.cs` | Builds output via `StringBuilder` directly (large, complex) |
| `Mcp/Tools/GetEntitiesMetadataTool.cs` | Delegates to `MarkdownFormatter.FormatEntitySummaryTable()` |
| `Mcp/Tools/GetEntityMetadataTool.cs` | Delegates to `MarkdownFormatter.FormatEntityDetail()` |
| `Mcp/Tools/ExecuteFetchXmlTool.cs` | Delegates to `MarkdownFormatter.FormatFetchXmlResults()` |
| `Mcp/Tools/GetGlobalOptionSetsTool.cs` | Delegates to `MarkdownFormatter.FormatOptionSetList()` / `FormatOptionSetDetail()` |
| `Mcp/Tools/GetMessagesTool.cs` | Delegates to `MessageDiscoveryHelper` -> `MarkdownFormatter.FormatMessages()` |

### Current Output Patterns

**Pattern A: Markdown Table (key-value)**
```markdown
# Title

| Property | Value |
| --- | --- |
| Key1 | Value1 |
| Key2 | Value2 |
```
Used by: `whoami`, `get_record`, `create_record`, `update_record`, `delete_record`, `get_entity_metadata` (summary), `get_solution_components` (solution info), `get_global_optionsets` (detail)

**Pattern B: Markdown Table (multi-column data)**
```markdown
| Col1 | Col2 | Col3 | Col4 |
| --- | --- | --- | --- |
| val | val | val | val |
| val | val | val | val |
```
Used by: `get_entities_metadata`, `get_entity_metadata` (attributes, relationships), `execute_fetchxml`, `search`, `get_solution_components` (component list), `get_global_optionsets` (list), `get_messages` (summary)

**Pattern C: Markdown Bullet List**
```markdown
## SDK Messages — 25

- Create
- Update
- Delete
```
Used by: `get_messages`

---

## 4. Phase 1 — Compact Format (Replace Markdown)

### 4.1. Design: New Output Format

#### Key-Value Pairs (replaces Pattern A)

**Before (~50 tokens):**
```markdown
# Record Created

| Property | Value |
| --- | --- |
| Entity | account |
| Id | `abc-123` |
| Status | Created successfully |
```

**After (~15 tokens):**
```
[Record Created]
Entity: account
Id: abc-123
Status: Created successfully
```

Rules:
- Section header: `[Section Name]` (square brackets, one line)
- Each field: `Key: Value` (one line, no pipes, no padding)
- Separate sections with one blank line
- No `#`, `##`, `| --- |`, backticks, or `**bold**`

#### Data Tables (replaces Pattern B)

**Before (~2,100 tokens for 100 rows x 5 cols):**
```markdown
| _entity | _id | name | statecode | createdon |
| --- | --- | --- | --- | --- |
| account | abc-123 | Contoso | Active | 2025-01-15 |
| account | def-456 | Fabrikam | Active | 2025-02-20 |
```

**After (~1,300 tokens for 100 rows x 5 cols):**
```
100 records (more: no)

_entity	_id	name	statecode	createdon
account	abc-123	Contoso	Active	2025-01-15
account	def-456	Fabrikam	Active	2025-02-20
```

Rules:
- First line: count summary (e.g., `100 records (more: no)`)
- Second line: column headers (tab-separated)
- No separator row (LLMs don't need `| --- |` to understand columns)
- Data rows: tab-separated values
- Tab character `\t` is 1 token; `| ` + ` |` is 4+ tokens per cell
- Empty values: just empty between tabs (no space padding)

#### Bullet Lists (Pattern C stays)

Bullet lists are already efficient. Keep `- ItemName` format.

### 4.2. Implementation: Create `CompactFormatter.cs`

Create a new file: `Mcp/Tools/Helper/CompactFormatter.cs`

This file mirrors every public method in `MarkdownFormatter.cs` but outputs compact format:

| MarkdownFormatter Method | CompactFormatter Method | Output Change |
|---|---|---|
| `FormatEntitySummaryTable()` | `FormatEntitySummaryTable()` | 7-col Markdown table -> 5-col TSV (drop SchemaName, IsAuditEnabled) |
| `FormatEntityDetail()` | `FormatEntityDetail()` | Multiple Markdown tables -> Key-Value summary + TSV attributes + TSV relationships |
| `FormatOptionSetList()` | `FormatOptionSetList()` | 4-col Markdown table -> TSV |
| `FormatOptionSetDetail()` | `FormatOptionSetDetail()` | Key-Value + TSV options |
| `FormatMessages()` | `FormatMessages()` | Keep bullet lists (already efficient), drop empty categories |
| `FormatFetchXmlResults()` | `FormatFetchXmlResults()` | Markdown table -> TSV |

### 4.3. Implementation: Method-by-Method Specification

#### `CompactFormatter.FormatEntitySummaryTable()`

```
[Entities] 700 total

LogicalName	DisplayName	OwnershipType	IsCustom	IsActivity
account	Account	UserOwned	No	No
contact	Contact	UserOwned	No	No
incident	Case	UserOwned	No	No
ab_custom	My Custom	UserOwned	Yes	No
```

Changes from Markdown version:
- Drop `SchemaName` column (PascalCase of LogicalName — LLM can derive it)
- Drop `IsAuditEnabled` column (rarely needed in entity listing)
- `OwnershipType`: keep full string (LLM needs it)
- `IsCustom`/`IsActivity`: use `Yes`/`No` (not empty string for false)
- Section header: `[Entities] N total`

#### `CompactFormatter.FormatEntityDetail()`

**Entity summary section:**
```
[account] Account
PrimaryId: accountid
PrimaryName: name
EntitySetName: accounts
LogicalCollectionName: accounts
DisplayCollectionName: Accounts
OwnershipType: UserOwned
IsActivity: False
IsCustomEntity: False
ObjectTypeCode: 1
TotalAttributes: 312
```

Changes:
- Drop `SchemaName` (PascalCase of LogicalName)
- Drop `IsAuditEnabled`, `ChangeTrackingEnabled` (rarely needed, can use `get_record` on `entity` metadata if needed)
- Drop `ExternalName` if empty
- Key-Value format instead of Markdown table

**Attributes section:**
```
[Attributes] 312 total

LogicalName	Type	Required	Create	Update	Constraints	DisplayName
accountid	Uniqueidentifier	Required	Yes		Account
name	String		Yes	Yes	MaxLen=160	Account Name
primarycontactid	Lookup -> contact		Yes	Yes		Primary Contact
statecode	State (0=Active; 1=Inactive)	Required			Status
statuscode	Status (1=Active; 2=Inactive)	Required			Status Reason
revenue	Money		Yes	Yes	[0..100000000000000] P=4	Annual Revenue
```

Changes:
- TSV format (tab-separated)
- No separator row
- Only show `Create`/`Update` value when `Yes` (empty when not valid — saves tokens)
- Only show `Required` when actually required (empty otherwise)
- Picklist inline options: keep (already compact)

**Relationships sections:**
```
[1:N Relationships] 85 total

ChildEntity	ChildLookupField	SchemaName
contact	parentcustomerid	account_contacts
opportunity	customerid	account_opportunities

[N:1 Relationships] 42 total

ParentEntity	LookupField	SchemaName
contact	primarycontactid	account_primary_contact
systemuser	owninguser	user_accounts

[N:N Relationships] 3 total

IntersectEntity	Entity1	Entity2	SchemaName
accountleads	account	lead	accountleads_association
```

Changes:
- TSV format
- Section headers: `[1:N Relationships] N total`

**Alternate Keys section:**
```
[Alternate Keys] 2 total

SchemaName	DisplayName	KeyAttributes
accountnumber_key	Account Number Key	accountnumber
```

#### `CompactFormatter.FormatFetchXmlResults()`

```
100 records (more: no)

_entity	_id	name	statecode	createdon
account	abc-123	Contoso	Active	2025-01-15
account	def-456	Fabrikam	Active	2025-02-20
```

Changes:
- TSV format
- Count line simplified: `N records (more: yes/no)`
- If all `_entity` values are the same, omit `_entity` column and put entity name in header: `100 account records (more: no)`

#### `CompactFormatter.FormatOptionSetList()`

```
[Global Option Sets] 320 total

Name	DisplayName	Type	IsGlobal
budgetstatus	Budget	Picklist	Yes
msdyn_bookingstatus	Booking Status	Picklist	Yes
```

#### `CompactFormatter.FormatOptionSetDetail()`

```
[budgetstatus] Budget
Type: Picklist
IsGlobal: True

[Options] 4 total

Value	Label	Description
0	No Committed Budget
1	May Order	Customer may place an order
2	Can Order	Customer can place an order
3	Will Order	Customer will place an order
```

#### `CompactFormatter.FormatMessages()`

```
[Messages for account]
SDK Messages: 25
Custom Actions: 3
Custom APIs: 2

[SDK Messages]
- Assign
- Create
- Delete
- Merge
- Retrieve
- RetrieveMultiple
- SetState
- Update

[Custom Actions]
- new_ApproveAccount
- new_MergeAccounts
- new_ValidateAddress

[Custom APIs]
- api_CalculateScore
- api_SyncToExternal
```

Changes:
- Drop empty categories entirely (don't show `Custom APIs: 0` + empty section)
- Keep bullet lists (already efficient)

### 4.4. Implementation: Update Each Tool

After `CompactFormatter.cs` is created, update each tool to use it instead of `MarkdownFormatter`:

#### Tools using MarkdownFormatter (delegate pattern):

| Tool File | Current Call | New Call |
|---|---|---|
| `GetEntitiesMetadataTool.cs` | `MarkdownFormatter.FormatEntitySummaryTable(sorted)` | `CompactFormatter.FormatEntitySummaryTable(sorted)` |
| `GetEntityMetadataTool.cs` | `MarkdownFormatter.FormatEntityDetail(metadata, prefix)` | `CompactFormatter.FormatEntityDetail(metadata, prefix)` |
| `ExecuteFetchXmlTool.cs` | `MarkdownFormatter.FormatFetchXmlResults(...)` | `CompactFormatter.FormatFetchXmlResults(...)` |
| `GetGlobalOptionSetsTool.cs` | `MarkdownFormatter.FormatOptionSetList(sorted)` | `CompactFormatter.FormatOptionSetList(sorted)` |
| `GetGlobalOptionSetsTool.cs` | `MarkdownFormatter.FormatOptionSetDetail(...)` | `CompactFormatter.FormatOptionSetDetail(...)` |
| `GetMessagesTool.cs` | via `MessageDiscoveryHelper` -> `MarkdownFormatter.FormatMessages()` | Update `MessageDiscoveryHelper` to call `CompactFormatter.FormatMessages()` |

#### Tools using StringBuilder directly (inline pattern):

These tools build Markdown inline. Rewrite the output sections:

**`WhoAmITool.cs`** — Rewrite `whoami()`, `AppendUserDetails()`, `AppendEnvironmentInfo()`, `AppendOrganizationDetails()`, `AppendSecurityRoles()`:

```
[User]
UserId: 8b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d5e
FullName: Phuoc Le
DomainName: phuoc@devkit.onmicrosoft.com
Email: phuoc@devkit.onmicrosoft.com
BusinessUnitId: a1b2c3d4-e5f6-7890-abcd-ef1234567890
OrganizationId: f1e2d3c4-b5a6-9807-6543-210fedcba987

[Environment]
Url: https://devkit.crm5.dynamics.com
Version: 9.2.24041.00155
OrgName: DevKit Dev (devkitdev)
OrgId: f1e2d3c4-b5a6-9807-6543-210fedcba987
TenantId: 12345678-abcd-ef01-2345-678901234567
EnvironmentId: 87654321-dcba-10fe-5432-109876543210
Language: 1033 (English)
Currency: US Dollar
FiscalStart: 2024-01-01
AuditEnabled: Yes

[Roles] 3 total
- System Administrator
- System Customizer
- Environment Maker
```

Note: AccessToken is NOT included by default (see Phase 2 `include_token` parameter).

**`GetRecordTool.cs`** — Rewrite `FormatRecord()`:

```
[account] abc-123-def-456

accountid: abc-123-def-456
name: Contoso Ltd
revenue: 1,000,000.00
statecode: Active
primarycontactid: John Smith (contact:xyz-789)
createdon: 2025-01-15 10:30:00
modifiedon: 2025-03-20 14:22:15
```

**`SearchTool.cs`** — Rewrite `FormatSearchResults()`:

```
[Search: "Contoso"] 12 results (total: 12)

Entity	Id	Score	Attributes	Highlights
account	abc-123	8.52	name=Contoso Ltd; revenue=1000000	name: **Contoso** Ltd
contact	def-456	6.31	fullname=John Contoso; emailaddress1=john@contoso.com	fullname: John **Contoso**
```

**`CreateRecordTool.cs`** — Rewrite success/error output:

Success:
```
Created account abc-123-def-456
```

Error:
```
Error: Create failed for account
Message: The field 'name' is required.
Hint: Use get_entity_metadata to verify field names and types.
```

**`UpdateRecordTool.cs`** — Rewrite:

Success:
```
Updated account abc-123-def-456 (3 fields)
```

Error:
```
Error: Update failed for account abc-123-def-456
Message: Record not found.
Hint: Use execute_fetchxml or get_record to verify the record exists.
```

**`DeleteRecordTool.cs`** — Rewrite:

Success:
```
Deleted account abc-123-def-456
```

Error:
```
Error: Delete failed for account abc-123-def-456
Message: Cannot delete due to child records.
Hint: Verify the record_id using execute_fetchxml or get_record.
```

**`GetSolutionComponentsTool.cs`** — Rewrite `FormatResult()` and `FormatMultipleSolutions()`:

Multiple solutions:
```
[Multiple Solutions] 3 matches for "DevKit"
Re-call with exact UniqueName:

UniqueName	DisplayName	Version	IsManaged
DevKit_Core	DevKit Core	1.2.3.4	No
DevKit_Plugins	DevKit Plugins	1.0.0.0	No
DevKit_Managed	DevKit Managed	2.0.0.0	Yes
```

Single solution:
```
[Solution] DevKit Core (DevKit_Core)
Version: 1.2.3.4
Publisher: Contoso
IsManaged: No
Components: 245

[Full Entities] 5 entities
Use get_entity_metadata for details:
- account
- contact
- ab_custom1
- ab_custom2
- ab_custom3

[Component Summary]
Type	TypeId	Count
Entity	1	12
Attribute	2	45
System Form	60	28
Web Resource	61	150
Plugin Assembly	91	5
SDK Message Processing Step	92	5

[Components] 245 total

Type	TypeId	ObjectId	Name
Entity	1	abc-123	account
Entity	1	def-456	contact (full — use get_entity_metadata)
Attribute	2	ghi-789	account.name
Web Resource	61	jkl-012	new_/js/account.js
Plugin Assembly	91	mno-345	Contoso.Plugins v1.0.0.0
```

### 4.5. Implementation: Handling `MarkdownFormatter.cs`

**Do NOT delete `MarkdownFormatter.cs`.** Keep it for potential future use (e.g., MCP clients that render Markdown to human users). The `CompactFormatter.cs` is a parallel implementation.

After all tools are updated to use `CompactFormatter`, `MarkdownFormatter` becomes unused but preserved.

### 4.6. Phase 1 Verification

After all changes:

1. `dotnet build DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj` — must compile with 0 errors
2. Grep for remaining `MarkdownFormatter` references in tool files — should be zero (only in the formatter file itself)
3. Manually test each tool via MCP client (Cursor/Claude Desktop) to verify output is correct and parseable by AI

---

## 5. Phase 2 — Drop Redundant Data

### 5.1. Changes Per Tool

#### `whoami` — Add `include_token` parameter

Add an optional boolean parameter `include_token` (default `false`) to the `whoami` method:

```csharp
public string whoami(
    [Description("true: include the OAuth access token in the response (adds ~400 tokens). " +
                 "false (default): omit access token. " +
                 "Only set to true when you need to make direct Web API calls.")]
    bool include_token = false)
```

When `include_token` is `false`, skip the `_serviceClient.CurrentAccessToken` section entirely. This saves ~200-400 tokens in 90% of whoami calls.

#### `get_entities_metadata` — Drop columns

In `CompactFormatter.FormatEntitySummaryTable()`:
- Drop `SchemaName` — it's PascalCase of `LogicalName`. AI can derive `Account` from `account`.
- Drop `IsAuditEnabled` — rarely needed when browsing entity list.
- Result: 5 columns instead of 7.

#### `get_entity_metadata` — Drop redundant fields

In `CompactFormatter.FormatEntityDetail()` entity summary:
- Drop `SchemaName` — same reason.
- Drop `IsAuditEnabled` — queryable via `get_record` on organization entity if needed.
- Drop `ChangeTrackingEnabled` — rarely needed by AI agents.

In attributes table:
- When `isValidForCreate` AND `isValidForUpdate` are both `true`, output nothing (this is the common case — showing "Yes Yes" for 250 out of 300 attributes wastes tokens).
- Only output `Create` or `Update` when one of them is unusual (e.g., `Create` only, `Update` only, or neither).
- When `Constraints` is empty, output nothing (not empty cell).

#### `execute_fetchxml` — Optimize `_entity` column

In `CompactFormatter.FormatFetchXmlResults()`:
- If all records have the same `_entity` value, omit the `_entity` column from the TSV and include it in the header line: `100 account records (more: no)`.
- This saves 1 column x N rows worth of tokens.

#### CRUD tools — Already handled in Phase 1

Phase 1 already reduces CRUD output to one-liners. No further changes needed.

### 5.2. Phase 2 Verification

1. `dotnet build` — must compile
2. Test `whoami` with `include_token: true` and `include_token: false`
3. Test `get_entities_metadata` — verify 5 columns, no SchemaName
4. Test `get_entity_metadata` — verify no SchemaName in summary, sparse Create/Update columns
5. Test `execute_fetchxml` with single-entity query — verify `_entity` column omitted

---

## 6. Phase 3 — Structured Content (SDK v1.2.0)

### 6.1. Upgrade NuGet Package

In `DynamicsCrm.DevKit.Cli.csproj`, change:

```xml
<!-- Before -->
<PackageReference Include="ModelContextProtocol" Version="1.0.0" />

<!-- After -->
<PackageReference Include="ModelContextProtocol" Version="1.2.0" />
```

Then `dotnet restore`.

**Breaking change in v1.2.0:** Legacy SSE endpoints (`/sse` and `/message`) are disabled by default. Since DevKit MCP uses **stdio** transport (not SSE), this does not affect us. No action needed.

### 6.2. What is Structured Content?

MCP spec 2025-06-18 introduced two new fields for tool responses:

1. **`outputSchema`** — declared on the tool definition (like `inputSchema`), tells the client/LLM what shape the JSON response will have.
2. **`structuredContent`** — returned alongside the `content` array in `tools/call` response. Contains a typed JSON object matching the `outputSchema`.

For backwards compatibility, the spec says: "A tool that returns structured content SHOULD also return the serialized JSON in a TextContent block."

This means: return **both** `content` (text fallback, for older clients) and `structuredContent` (typed JSON, for modern clients). Older MCP clients ignore `structuredContent` and use the text; newer clients prefer `structuredContent`.

### 6.3. Best Candidates for Structured Content

| Tool | Schema Stability | Recommended |
|---|---|---|
| `whoami` | Fixed — always same fields | **Yes** |
| `create_record` | Fixed — entity + id + status | **Yes** |
| `update_record` | Fixed — entity + id + fields_updated + status | **Yes** |
| `delete_record` | Fixed — entity + id + status | **Yes** |
| `get_record` | Variable — depends on entity | Maybe (generic key-value object) |
| `execute_fetchxml` | Variable — depends on query | Maybe (array of generic objects) |
| `search` | Semi-fixed — entity + id + score + attributes | Maybe |
| `get_entities_metadata` | Semi-fixed — array of entity summaries | Maybe (large arrays) |
| `get_entity_metadata` | Variable — complex nested structure | **No** — too complex |
| `get_solution_components` | Variable — complex nested structure | **No** — too complex |
| `get_global_optionsets` | Variable — depends on mode | **No** |
| `get_messages` | Variable — depends on entity | **No** |

### 6.4. Implementation: `whoami` with `outputSchema`

The C# MCP SDK v1.2.0 supports specifying `OutputSchema` for tools. The exact API depends on the SDK's attribute model. Research the SDK docs to determine how to set `OutputSchema` on `[McpServerTool]`.

Expected structured output for `whoami`:

```json
{
  "userId": "8b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d5e",
  "fullName": "Phuoc Le",
  "domainName": "phuoc@devkit.onmicrosoft.com",
  "email": "phuoc@devkit.onmicrosoft.com",
  "businessUnitId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "organizationId": "f1e2d3c4-b5a6-9807-6543-210fedcba987",
  "environmentUrl": "https://devkit.crm5.dynamics.com",
  "version": "9.2.24041.00155",
  "orgFriendlyName": "DevKit Dev",
  "orgUniqueName": "devkitdev",
  "orgId": "f1e2d3c4-b5a6-9807-6543-210fedcba987",
  "tenantId": "12345678-abcd-ef01-2345-678901234567",
  "environmentId": "87654321-dcba-10fe-5432-109876543210",
  "language": "1033 (English)",
  "currency": "US Dollar",
  "fiscalStart": "2024-01-01",
  "auditEnabled": true,
  "roles": ["System Administrator", "System Customizer", "Environment Maker"],
  "accessToken": null
}
```

### 6.5. Implementation: CRUD Tools with `outputSchema`

**`create_record` structured output:**
```json
{
  "entity": "account",
  "id": "abc-123-def-456",
  "status": "created"
}
```

**`update_record` structured output:**
```json
{
  "entity": "account",
  "id": "abc-123-def-456",
  "fieldsUpdated": 3,
  "status": "updated"
}
```

**`delete_record` structured output:**
```json
{
  "entity": "account",
  "id": "abc-123-def-456",
  "status": "deleted"
}
```

### 6.6. Implementation Notes

1. **Return both `content` and `structuredContent`**: For each structured tool, return a `CallToolResult` (or equivalent SDK type) with:
   - `content`: the compact text output from Phase 1 (as TextContent)
   - `structuredContent`: the JSON object matching `outputSchema`

2. **Text fallback must serialize the same data**: The text in `content` should be the serialized JSON (not the compact format) when `structuredContent` is present. This ensures older clients that ignore `structuredContent` still get parseable output.

3. **Tools returning `string` must change return type**: Currently all tools return `string`. For structured output, they need to return `CallToolResult` (or whatever the C# SDK type is). The SDK may handle this automatically when the return type is a C# class decorated with the right attributes — research the SDK docs for v1.2.0.

### 6.7. Phase 3 Verification

1. `dotnet build` — must compile after NuGet upgrade
2. Test with a modern MCP client (Claude Desktop, Cursor latest) — verify `structuredContent` is present in response
3. Test with an older MCP client — verify text fallback works
4. Run `/build-debug` to verify full build still succeeds

---

## 7. Per-Tool Token Analysis (Reference)

### Estimated Token Counts (Typical Usage)

| Tool | Current Tokens | After Phase 1 | After Phase 2 | After Phase 3 | Total Savings |
|---|---|---|---|---|---|
| `whoami` | ~400 | ~180 | ~120 (no token) | ~110 | **72%** |
| `get_entity_metadata` (account, ~300 attrs) | ~6,000 | ~3,600 | ~3,200 | ~3,200 | **47%** |
| `get_entities_metadata` (~700 entities) | ~6,000 | ~3,800 | ~3,200 | ~3,200 | **47%** |
| `execute_fetchxml` (100 rows x 5 cols) | ~2,100 | ~1,350 | ~1,200 | ~1,100 | **48%** |
| `get_solution_components` (~500 components) | ~5,000 | ~3,100 | ~2,900 | ~2,900 | **42%** |
| `search` (50 results) | ~1,200 | ~780 | ~750 | ~700 | **42%** |
| `get_record` (80 fields) | ~1,100 | ~670 | ~650 | ~600 | **45%** |
| `get_global_optionsets` (~300 option sets) | ~3,000 | ~1,900 | ~1,800 | ~1,800 | **40%** |
| `get_messages` (25 SDK + 3 actions + 2 APIs) | ~400 | ~360 | ~350 | ~350 | **12%** |
| `create_record` | ~40 | ~8 | ~8 | ~5 | **87%** |
| `update_record` | ~45 | ~10 | ~10 | ~7 | **84%** |
| `delete_record` | ~40 | ~8 | ~8 | ~5 | **87%** |

### Typical Session Comparison

| Scenario | Tools Called | Current | Optimized | Savings |
|---|---|---|---|---|
| Session init | whoami | 400 | 120 | 280 |
| Explore schema | get_entities_metadata + 2x get_entity_metadata | 18,000 | 9,600 | 8,400 |
| Query data | 3x execute_fetchxml + get_record | 7,400 | 4,800 | 2,600 |
| Create + update | create_record + update_record | 85 | 15 | 70 |
| **Total** | **8 tool calls** | **~25,885** | **~14,535** | **~11,350 (44%)** |

---

## 8. File Change Summary

### Phase 1 Files

| File | Action | Description |
|---|---|---|
| `Mcp/Tools/Helper/CompactFormatter.cs` | **CREATE** | New compact formatter with all formatting methods |
| `Mcp/Tools/GetEntitiesMetadataTool.cs` | EDIT | Change `MarkdownFormatter` -> `CompactFormatter` |
| `Mcp/Tools/GetEntityMetadataTool.cs` | EDIT | Change `MarkdownFormatter` -> `CompactFormatter` |
| `Mcp/Tools/ExecuteFetchXmlTool.cs` | EDIT | Change `MarkdownFormatter` -> `CompactFormatter` |
| `Mcp/Tools/GetGlobalOptionSetsTool.cs` | EDIT | Change `MarkdownFormatter` -> `CompactFormatter` |
| `Mcp/Tools/Helper/MessageDiscoveryHelper.cs` | EDIT | Change `MarkdownFormatter` -> `CompactFormatter` |
| `Mcp/Tools/WhoAmITool.cs` | EDIT | Rewrite output sections to Key-Value format |
| `Mcp/Tools/GetRecordTool.cs` | EDIT | Rewrite `FormatRecord()` to Key-Value format |
| `Mcp/Tools/SearchTool.cs` | EDIT | Rewrite `FormatSearchResults()` to TSV format |
| `Mcp/Tools/CreateRecordTool.cs` | EDIT | Simplify to one-line success output |
| `Mcp/Tools/UpdateRecordTool.cs` | EDIT | Simplify to one-line success output |
| `Mcp/Tools/DeleteRecordTool.cs` | EDIT | Simplify to one-line success output |
| `Mcp/Tools/GetSolutionComponentsTool.cs` | EDIT | Rewrite `FormatResult()` + `FormatMultipleSolutions()` to compact format |
| `Mcp/Tools/Helper/MarkdownFormatter.cs` | NO CHANGE | Keep for reference, no longer called by tools |

### Phase 2 Files

| File | Action | Description |
|---|---|---|
| `Mcp/Tools/WhoAmITool.cs` | EDIT | Add `include_token` parameter |
| `Mcp/Tools/Helper/CompactFormatter.cs` | EDIT | Drop columns (SchemaName, IsAuditEnabled), sparse Create/Update, optimize _entity |

### Phase 3 Files

| File | Action | Description |
|---|---|---|
| `DynamicsCrm.DevKit.Cli.csproj` | EDIT | Upgrade `ModelContextProtocol` 1.0.0 -> 1.2.0 |
| `Mcp/Tools/WhoAmITool.cs` | EDIT | Return `CallToolResult` with `structuredContent` + text fallback |
| `Mcp/Tools/CreateRecordTool.cs` | EDIT | Return `CallToolResult` with `structuredContent` |
| `Mcp/Tools/UpdateRecordTool.cs` | EDIT | Return `CallToolResult` with `structuredContent` |
| `Mcp/Tools/DeleteRecordTool.cs` | EDIT | Return `CallToolResult` with `structuredContent` |

---

## 9. Testing Checklist

### Phase 1

- [ ] `CompactFormatter.cs` created with all methods
- [ ] `dotnet build DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj` — 0 errors
- [ ] `whoami` output is Key-Value format (no Markdown tables)
- [ ] `get_entities_metadata` output is TSV format
- [ ] `get_entity_metadata` output is Key-Value summary + TSV attributes/relationships
- [ ] `execute_fetchxml` output is TSV format
- [ ] `search` output is TSV format
- [ ] `get_record` output is Key-Value format
- [ ] `get_global_optionsets` (list) output is TSV format
- [ ] `get_global_optionsets` (detail) output is Key-Value + TSV options
- [ ] `get_messages` output uses compact headers, no empty categories
- [ ] `get_solution_components` output is compact format
- [ ] `create_record` returns one-line success
- [ ] `update_record` returns one-line success
- [ ] `delete_record` returns one-line success
- [ ] No remaining `MarkdownFormatter` calls in tool files (grep to verify)

### Phase 2

- [ ] `whoami` with `include_token: false` — no AccessToken in output
- [ ] `whoami` with `include_token: true` — AccessToken present
- [ ] `get_entities_metadata` — 5 columns (no SchemaName, no IsAuditEnabled)
- [ ] `get_entity_metadata` — no SchemaName in summary
- [ ] `get_entity_metadata` — Create/Update columns sparse (only show when restricted)
- [ ] `execute_fetchxml` single-entity query — no `_entity` column

### Phase 3

- [ ] `dotnet restore` after NuGet upgrade — no errors
- [ ] `dotnet build` — 0 errors
- [ ] `whoami` returns `structuredContent` JSON + text fallback
- [ ] CRUD tools return `structuredContent` JSON + text fallback
- [ ] Older MCP client still works (reads text fallback)
- [ ] `/build-debug` full build succeeds

---

## 10. References

- MCP Specification (2025-06-18): Structured Content & OutputSchema — https://modelcontextprotocol.io/specification/2025-06-18/server/tools
- MCP Tools Concepts — https://modelcontextprotocol.io/docs/concepts/tools
- C# MCP SDK v1.2.0 Release — https://github.com/modelcontextprotocol/csharp-sdk/releases
- NuGet: ModelContextProtocol 1.2.0 — https://www.nuget.org/packages/ModelContextProtocol/1.2.0
- no-color.org — Standard for suppressing color/formatting in CLI output

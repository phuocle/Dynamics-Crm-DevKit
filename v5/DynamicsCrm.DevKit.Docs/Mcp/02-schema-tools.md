# 02 - Schema And Metadata Tool Plan

Depends on:

- `00-resolution-contract.md`
- `01-shared-resolvers.md`

This packet covers high-risk metadata tools. These should be fixed before broad user-facing tools because they create/update/delete metadata.

## Tools In Scope

- `manage_choice`
- `get_tables`
- `upsert_table`
- `upsert_column`
- `upsert_relationship`
- `get_solution_components`

## Shared Rule

Before any metadata mutation:

1. Resolve all existing-object references using Display Name first.
2. Stop on ambiguity with `IsError = true`.
3. Do not publish, backup, create, update, or delete until resolution is complete.

## `manage_choice`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChoiceTool.cs`

Inputs:

- `optionset_name`
- `solution_name`

Current issue:

- Detail tries exact logical option set name first.
- It does not try logical-name contains after display-name miss.
- `solution_name` uses the shared resolver that is currently wrong.
- Create auto-derivation must use compact lowercase after the prefix, matching Dataverse portal default global choice names.

Target:

- For detail/update existing choice:
  - Resolve global option set display first, then `Name` contains.
  - Use canonical `OptionSetMetadataBase.Name` for SDK requests.
- For create:
  - If `optionset_name` is supplied, first resolve existing choice.
  - If not found and create is intended, derive from input/display name.
  - If explicit prefix exists in `optionset_name`, trust it.
  - If no prefix, derive from resolved solution publisher prefix using portal-style compact lowercase.
  - Global choices expose metadata `Name`, not a separate `SchemaName` / `LogicalName`.
- For list:
  - Keep list/filter behavior as non-error multiple rows.

Create naming examples:

| Display Name | Publisher Prefix | Derived Global Choice Name |
|---|---|---|
| `Invoice Status` | `devkit` | `devkit_invoicestatus` |
| `This Is A Global Choice` | `devkit` | `devkit_thisisaglobalchoice` |

Do not auto-derive `devkit_invoice_status` or `devkit_this_is_a_global_choice`; those do not match portal default UI behavior.

Implementation hint:

```csharp
var choiceResult = DisplayNameFirstResolver.ResolveGlobalOptionSet(_serviceClient, optionsetName, "manage_choice");
if (choiceResult.Status == ResolveStatus.Ambiguous) return ErrorResult(choiceResult.Error);
if (choiceResult.IsSuccess) name = choiceResult.Value.Name;
```

## `get_tables`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetTablesTool.cs`

Inputs:

- `entity_name`
- detail `filter`
- `names`

Target:

- `entity_name` detail mode resolves Display Name first, then logical contains.
- List `filter` remains a broad list filter and can return many rows.
- `names=` is documented as exact logical-name list today. Either keep strict or add a new internal resolution path only if the caller intended concrete names. Avoid surprising bulk expansion.
- Detail `filter` currently only checks attribute logical prefix. It should support field Display Name contains first for field lookup use cases, or be documented as a list filter.

Acceptance:

- `get_tables(entity_name: "Account")` resolves `account`.
- If two tables have Display Name containing `Invoice`, and no exact display winner, return ambiguity.

## `upsert_table`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertTableTool.cs`

Inputs:

- `entity_name`
- `display_name`
- `display_collection_name`
- `solution_name`

Target:

- Treat `entity_name` as user-entered identity first.
- Resolve existing table Display Name first, then logical contains.
- If resolved, update existing table.
- If not resolved and create path is valid:
  - derive new `SchemaName` and `LogicalName`.
  - no prefix in input: use solution prefix.
  - prefix in input: trust user prefix.
  - `SchemaName` uses PascalCase display text after the prefix.
  - `LogicalName` is the lowercase form of `SchemaName`.
- Do not auto-prepend solution prefix when user already supplied a different prefix.

Create examples:

```text
Input: "Invoice", solution prefix "abc"
New SchemaName should be "abc_Invoice"
New LogicalName should be "abc_invoice"

Input: "ab_Invoice Date", solution prefix "abc"
New SchemaName should be "ab_InvoiceDate"
New LogicalName should be "ab_invoicedate"
Do not rewrite to "abc_InvoiceDate"
```

## `upsert_column`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertColumnTool.cs`

Inputs:

- `entity_name`
- `attribute_name`
- `display_name`
- `lookup_target`
- `global_optionset_name`
- `solution_name`

Current high-risk behavior:

- Entity resolution exact logical first.
- Attribute update detection exact logical only.
- If a user-entered Display Name is not found as logical, the tool may proceed toward create.

Target:

- Resolve `entity_name` Display Name first.
- Resolve existing attribute using the best user-entered identity:
  - Prefer `attribute_name` when supplied.
  - If high-level usage supplies only a label-like value, use `display_name` as identity candidate before create.
- Existing attribute resolution:
  - attribute Display Name contains first.
  - exact Display Name winner can resolve among display contains.
  - then logical/schema contains.
- If attribute resolves, update existing attribute.
- If not found and create is intended:
  - derive `SchemaName` and `LogicalName` from user input.
  - no prefix: use solution prefix.
  - explicit prefix: trust it.
  - `SchemaName` uses PascalCase display text after the prefix.
  - `LogicalName` is the lowercase form of `SchemaName`.
- Resolve `lookup_target` entity names Display Name first.
- Resolve `global_optionset_name` choice Display Name first.

Create naming examples:

| Display Name | Publisher Prefix | Derived SchemaName | Derived LogicalName |
|---|---|---|---|
| `Invoice Date` | `devkit` | `devkit_InvoiceDate` | `devkit_invoicedate` |
| `PO Number` | `devkit` | `devkit_PONumber` | `devkit_ponumber` |

Implementation caution:

- `display_name` can mean "new label" in update mode. If `attribute_name` resolves to an existing field, keep `display_name` as the new label to set.
- If `attribute_name` does not resolve and `display_name` resolves to an existing field, decide carefully whether to update that field or return conflict. Prefer returning a clear conflict if both fields are supplied and point to different existing attributes.

## `upsert_relationship`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertRelationshipTool.cs`

Inputs:

- `referenced_entity`
- `referencing_entity`
- `entity1`
- `entity2`
- `entity_name`
- `attribute_name`
- `referenced_entity` for polymorphic target
- `solution_name`

Target:

- Resolve all entity parameters Display Name first.
- Resolve `attribute_name` on the resolved `entity_name` Display Name first.
- Relationship schema name itself can remain strict for update/delete unless a display label concept exists for the relationship.
- For create relationship names, keep existing generated-name behavior after entity resolution.
- For 1:N create, the lookup column created on the referencing table must use portal-style attribute naming:
  - `lookup_display_name = "Invoice"` with prefix `devkit` -> `SchemaName = devkit_Invoice`, `LogicalName = devkit_invoice`.

## `get_solution_components`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetSolutionComponentsTool.cs`

Target:

- Replace combined `uniquename OR friendlyname` query with display-first resolver.
- Remove exact unique-name priority when display phase is ambiguous.
- Keep read-only list response shape when possible.

## Suggested Order

1. Shared solution resolver.
2. `get_solution_components`.
3. Entity resolver.
4. `get_tables`.
5. Global choice resolver and `manage_choice`.
6. Attribute resolver and `upsert_column`.
7. `upsert_table`.
8. `upsert_relationship`.

## Build/Test Guidance

Per AGENTS.md, this is CLI/MCP work:

- Build only CLI-related target, not full solution.
- Add focused tests if MCP tool tests exist for the touched tool.
- If test infra is unclear, run compile/build for `DynamicsCrm.DevKit.Cli` and document gaps.

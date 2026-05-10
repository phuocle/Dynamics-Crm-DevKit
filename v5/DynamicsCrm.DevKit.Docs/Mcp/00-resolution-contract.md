# 00 - Display Name First Resolution Contract

Status: approved direction
Scope: MCP tools only
Do not change: raw tools, public output shape unless explicitly listed in a task file

## Purpose

This is the shared contract for all MCP tool inputs where a user can type either:

- Display Name
- Logical Name
- Unique Name
- Schema Name

Examples: solution, entity/table, field/column, choice, app, web resource, environment variable, workflow/action/API names.

## Approved Decisions

1. Display Name is always attempted first.
2. If Display Name contains returns multiple candidates but exactly one candidate has exact Display Name, resolve that exact Display Name candidate.
3. If Display Name remains ambiguous, stop with `IsError = true`.
4. If Display Name has no match, try Logical Name / Unique Name / Schema Name contains.
5. If logical-name phase is ambiguous, stop with `IsError = true`.
6. Raw tools stay strict:
   - `execute_fetchxml`
   - `execute_webapi`
7. For create/upsert actions, resolve existing metadata first. Only derive a new name after no existing object resolves and the action is truly create.
8. If user supplied an explicit prefix like `ab_Invoice Date`, use that prefix. Do not auto-correct it to the solution publisher prefix.
9. When deriving new metadata names, follow Dataverse portal defaults for that metadata family. Preserve `SchemaName` casing separately from `LogicalName`.

## Canonical Algorithm

Use this exact flow for any resolver:

```text
input = trim(userInput)

if input is empty:
  return required-input error

displayMatches = search Display Name contains input, case-insensitive

if displayMatches.Count == 1:
  return ok(displayMatches[0])

if displayMatches.Count > 1:
  exactDisplayMatches = displayMatches where Display Name equals input, case-insensitive
  if exactDisplayMatches.Count == 1:
    return ok(exactDisplayMatches[0])
  return ambiguous(displayMatches, phase = "display")

logicalMatches = search Logical Name / Unique Name / Schema Name contains input, case-insensitive

if logicalMatches.Count == 1:
  return ok(logicalMatches[0])

if logicalMatches.Count > 1:
  return ambiguous(logicalMatches, phase = "logical")

return not_found(input)
```

Do not run exact logical lookup before Display Name contains.

## Create / Upsert Name Derivation

For tools that can create new metadata, use this flow:

```text
identityInput = user-entered object name

resolve identityInput with Display Name first contract

if resolved:
  perform update/detail/delete/etc. against existing object

if not resolved and action is create:
  derive the new metadata name using the portal-default rule for that metadata type

if not resolved and action is not create:
  return not found
```

For create derivation:

- If input has no prefix, use the solution publisher prefix plus sanitized display text.
- If input has a prefix, trust it.
- If the tool exposes both `SchemaName` and `LogicalName`, keep them distinct:
  - `SchemaName`: publisher prefix + `_` + PascalCase body.
  - `LogicalName`: lowercase form of `SchemaName`.
- If the metadata type exposes only a schema/name field, do not invent a logical name in docs or results.
- Use the existing naming helper when available, such as `DataverseNamer.Resolve(...)`.

Portal-default derivation examples:

| Metadata Type | Input | Prefix | Derived SchemaName / Name | Derived LogicalName |
|---|---|---|---|---|
| Table | `Invoice` | `abc` | `abc_Invoice` | `abc_invoice` |
| Column / lookup attribute | `Invoice Date` | `abc` | `abc_InvoiceDate` | `abc_invoicedate` |
| Environment variable definition | `Invoice Production Mode` | `abc` | `abc_InvoiceProductionMode` | n/a |
| Global choice | `Invoice Status` | `abc` | `abc_invoicestatus` | n/a |

Explicit-prefix examples:

- Table/column input `ab_Invoice Date` derives `SchemaName = ab_InvoiceDate` and `LogicalName = ab_invoicedate`.
- If solution publisher prefix is actually `abc_`, do not silently rewrite `ab_` to `abc_`.
- Let tool-specific validation or Dataverse return any mismatch error.

## Ambiguity Is Error

When a tool needs one concrete object to proceed, ambiguity must be an error:

- Set `IsError = true`.
- Include candidate Display Name and Logical/Unique/Schema Name.
- Include enough context for AI/user to re-call with a better value.
- Return before any create/update/delete/publish/backup.

List/search actions can return multiple rows normally because the user asked for a list.

## Raw Tool Exception

Do not auto-resolve inside raw tools:

- `execute_fetchxml`
- `execute_webapi`

If a user needs raw execution with resolved names, the AI should first call a resolver/discovery tool, then put resolved logical names into the raw query/request.

## Suggested Error Tags

Use stable tags where practical:

- `[AmbiguousSolution]`
- `[AmbiguousEntity]`
- `[AmbiguousField]`
- `[AmbiguousChoice]`
- `[AmbiguousApp]`
- `[NotFoundSolution]`
- `[NotFoundEntity]`
- `[NotFoundField]`

Keep existing error text where a tool has compatibility-sensitive output. Add tags and candidate details without breaking structured result fields.

## Resolver Result Shape

Suggested internal model:

```csharp
internal enum ResolveStatus
{
    Ok,
    Ambiguous,
    NotFound,
    Error
}

internal sealed class ResolveCandidate
{
    public string DisplayName { get; init; }
    public string LogicalName { get; init; }
    public string UniqueName { get; init; }
    public string SchemaName { get; init; }
    public Guid? Id { get; init; }
    public string Kind { get; init; }
}

internal sealed class ResolveResult<T>
{
    public ResolveStatus Status { get; init; }
    public T Value { get; init; }
    public string CanonicalName { get; init; }
    public string Error { get; init; }
    public List<ResolveCandidate> Candidates { get; init; } = [];
    public bool IsSuccess => Status == ResolveStatus.Ok;
}
```

Keep this helper inside the CLI MCP area, not `Shared`, unless a later task explicitly decides to reuse it outside MCP.

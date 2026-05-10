# PRODUCTION-MCP Default Naming Analysis

Date: 2026-05-10

Scope: Analyze the six components currently in solution `PRODUCTION-MCP` without executing any prompt from `mcp.prompts.md`.

## Component Pairs

The solution currently contains three MCP-created components and three manually-created Dataverse portal components:

| Component Type | MCP-Created Display Name | Portal-Created Display Name |
|---|---|---|
| Table | Invoice | New Table |
| Global Choice | Invoice Status | This Is A Global Choice |
| Environment Variable Definition | Invoice Production Mode | New Environment Variable |

## SchemaName and LogicalName Comparison

| Component Type | Created By | Display Name | SchemaName | LogicalName | Other Metadata Name |
|---|---|---|---|---|---|
| Table | MCP | Invoice | `devkit_Invoice` | `devkit_invoice` | n/a |
| Table | Portal default UI | New Table | `devkit_NewTable` | `devkit_newtable` | n/a |
| Global Choice | MCP | Invoice Status | n/a | n/a | `devkit_invoice_status` |
| Global Choice | Portal default UI | This Is A Global Choice | n/a | n/a | `devkit_thisisaglobalchoice` |
| Environment Variable Definition | MCP | Invoice Production Mode | `devkit_InvoiceProductionMode` | n/a | n/a |
| Environment Variable Definition | Portal default UI | New Environment Variable | `devkit_NewEnvironmentVariable` | n/a | n/a |

Notes:

- Tables expose both `SchemaName` and `LogicalName`.
- Global choices expose metadata `Name`, not a separate `SchemaName` and `LogicalName` pair.
- Environment variable definitions expose `schemaname`; they do not expose a component-level `LogicalName`.

## Findings

Table naming already matches portal behavior:

- Portal table `New Table` uses `SchemaName = devkit_NewTable`.
- MCP table `Invoice` uses `SchemaName = devkit_Invoice`.
- In both cases, `LogicalName` is the lowercase form of `SchemaName`.

Environment variable naming already matches portal behavior:

- Portal environment variable `New Environment Variable` uses `devkit_NewEnvironmentVariable`.
- MCP environment variable `Invoice Production Mode` uses `devkit_InvoiceProductionMode`.
- Both keep the publisher prefix lowercase, then PascalCase the display name without separators.

Global choice naming does not match portal behavior:

- Portal global choice `This Is A Global Choice` uses `devkit_thisisaglobalchoice`.
- MCP global choice `Invoice Status` uses `devkit_invoice_status`.
- The difference is significant and case-sensitive: MCP currently inserts underscores and keeps word boundaries; portal default UI compacts the words and lowercases the name after the prefix.

## Recommendation

To match Dataverse portal default behavior, MCP global choice auto-naming should change from snake_case to compact lowercase:

| Display Name | Current MCP Auto Name | Portal-Style Auto Name |
|---|---|---|
| Invoice Status | `devkit_invoice_status` | `devkit_invoicestatus` |
| This Is A Global Choice | `devkit_this_is_a_global_choice` | `devkit_thisisaglobalchoice` |

Recommended code direction:

- Keep explicit `optionset_name` unchanged when the user supplies it.
- Change only the auto-derived `optionset_name` path in `manage_choice(create)`.
- Use publisher prefix from `solution_name`, then append a sanitized compact lowercase display name.
- Add/adjust tests to assert portal-style global choice naming.
- Do not rename existing global choices automatically; existing dependencies may already reference their current metadata names.

## Data Read For This Analysis

Tools used:

- `get_solution_components(solution_name="PRODUCTION-MCP")`
- `execute_webapi` for the two table `EntityDefinitions`
- `execute_webapi` for the two `GlobalOptionSetDefinitions`
- `execute_webapi` for the two `environmentvariabledefinitions`

No prompt from `mcp.prompts.md` was executed.

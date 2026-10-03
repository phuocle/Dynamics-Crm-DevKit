# manage_function — Tool 39 (Dataverse Power Fx Functions)

`manage_function` manages Dataverse Power Fx functions: Custom APIs linked to an
FxExpression. It ships the read/validate/invoke path and keeps authoring
(create/update/delete) behind an explicit capability gate pending platform
verification — see [Capability gate](#capability-gate-why-createupdatedelete-are-gated).

Research basis: `Docs/DevKit-MCP-Dataverse-Functions-Analysis-2026-10-03.html`
(sections 05–11 of that document drove the implementation).

## Summary

| Field | Value |
|---|---|
| Tool name | `manage_function` |
| MCP title | `Manage Dataverse Power Fx functions` |
| Flags | `ReadOnly=false`, `Destructive=true`, `Idempotent=false` |
| Category | Mutation (22nd mutation tool; 39 tools total, 17 readonly) |
| Implementation | `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageFunctionTool.cs` |
| Helpers | `DynamicsCrm.DevKit.Cli/Mcp/Tools/Function/` — `FunctionResolver`, `FunctionMetadataReader`, `FunctionInvoker`, `FunctionDefinitionValidator` |
| Result DTO | `DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/ManageFunctionResult.cs` (+ `FunctionEntry`, `FunctionParameterEntry`) |
| Unit tests | `DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/ManageFunction/` (55 tests) |
| Introduced | 2026-10-03, branch `mcp-tool-39` |

## Actions

| Action | Status | Behavior |
|---|---|---|
| `list` | shipped | Custom APIs that have a linked FxExpression; solution filter by membership (`solutioncomponent`), not name prefix; `hasMore` when truncated. |
| `detail` | shipped | Full graph: formula, compiled state, raw `context`/`dependencies`, inputs/outputs from the Custom API signature, IDs, warnings (non-instant `isfunction=false`, shared sdk steps, non-invokable input types). |
| `validate` | shipped | Structural + metadata checks; `serverValidated` reflects the presence of the platform-generated `compiledexpression` (the server compiles the formula synchronously on every expression write). Optional `definition_json` cross-check; unknown keys rejected, deviations reported as issues — never as `Success`. |
| `invoke` | shipped | `OrganizationRequest(uniquename)` with arguments converted per the declared signature; entity-bound functions take `record_id` → `Target`. Goes through the fail-closed mutation boundary; `[DryRun]` preview sends no request. Response values mapped to plain JSON. |
| `create` | gated | Error pointing at the maker portal / solution ALM. |
| `update` | gated | Error: formula patches cannot guarantee parameter binding consistency. |
| `delete` | gated | Error: deleting the Custom API orphans the FxExpression (`RemoveLink`). |

## Parameters

| Name | Type | Required | Description |
|---|---|:---:|---|
| `action` | string | Yes | `list`, `detail`, `validate`, `invoke`. `create`/`update`/`delete` are recognized but gated. |
| `function_name` | string | detail/validate/invoke | Display name, unique name, or GUID (customapiid only — never the FxExpression id). Ambiguous display names return candidates in `[Detail]`. |
| `solution_name` | string | list | Resolves via `SolutionResolverHelper`; filter is membership-based. |
| `definition_json` | string | validate (optional) | DevKit definition: `displayName`, `description`, `formula`, `inputs[]`, `outputs[]`, `tableReferences[]` with the six scalar types (`boolean`, `datetime`, `decimal`, `float`, `integer`, `string`). |
| `arguments_json` | string | invoke | JSON object `{"inputName": value}` converted per signature. Unknown names, missing required inputs, JSON `null`, and out-of-range values are rejected; missing/optional distinction is preserved. |
| `record_id` | string | invoke (entity-bound) | GUID of the target record; ignored (with a warning) for global functions. |
| `max_records` | int | list | ≤0 → 50, >500 → 500. |
| `include_managed` | bool | list | Include managed (solution-imported) functions; default excludes them. |

## Capability gate — why create/update/delete are gated

Live verification on a sandbox tenant (2026-10-03) proved:

- The graph is creatable through the public API: `customapi` +
  `customapirequestparameter` + `customapiresponseproperty` + `fxexpression`,
  linked via `customapi.fxexpressionid`.
- The server compiles the formula synchronously on `fxexpression` create/update
  (`compiledexpression` is generated server-side; invalid formulas are rejected
  with Power Fx diagnostics) and a valid update takes effect on the next invoke
  without publishing.
- Invoke works end-to-end for the compiled graph.

What could **not** be verified is how input parameters become formula-visible
symbols. The serialized `fxexpression.parameters` format is not a published
contract: well-formed guesses parse but never bind (the server ignores unknown
JSON keys silently), and the linked Custom API signature is not auto-pulled at
compile time. Without that contract, `create` cannot ship parameterized
functions, `update` cannot guarantee the formula stays consistent with the
declared signature, and `delete` risks orphans (verified: deleting the Custom
API leaves the FxExpression behind). Per the research document's decision gate,
authoring stays in the maker portal (solution → New → Automation → Function)
until the format is confirmed on a sandbox.

Other verified ALM findings baked into the design:

- The `MSCRM.SolutionUniqueName` header does not assign Custom API/FxExpression
  records to the named solution on the test org — records landed in the Default
  solution. Solution membership must therefore be explicit
  (`SolutionComponentCreateHelper` pattern) when authoring is enabled.
- `fxexpression.context` is the compiler symbol table
  (`{"Tables":[],"CustomApis":[],"ConnectionReferences":[],...}`) and is parsed
  strictly (`CustomApis` entries are unique-name strings).
- One `sdkmessageprocessingstep` referencing the FxExpression is normal
  platform plumbing; more than one suggests shared/automated usage (warning).

## Examples

```bash
# Discover functions
devkit tool call manage_function --set action=list
devkit tool call manage_function --set action=list --set solution_name=SalesAutomation

# Inspect one
devkit tool call manage_function --set action=detail --set function_name=all_CalculateTotal

# Validate against a DevKit definition file
devkit tool call manage_function --set action=validate --set function_name=all_CalculateTotal \
  --file definition_json=./calculate-total.function.json

# Invoke (global)
devkit tool call manage_function --set action=invoke --set function_name=all_CalculateTotal \
  --set arguments_json="{\"Quantity\":3,\"UnitPrice\":12.5}"
```

The `--file` form loads the file content into the string parameter (see
`devkit tool call --help`); `devkit tool validate` checks the input schema
offline without calling Dataverse.

## Verification log (2026-10-03)

- `dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj` — 0 errors / 0 warnings.
- Focused suite (ManageFunction, McpServerHostCoverageTests, McpCommandCoverageTests,
  ToolCatalogTests): 72/72 pass; full `DynamicsCrm.DevKit.Cli.UnitTests`:
  4628/4628 pass.
- `devkit mcp --tools` (offline): 39 tools; `manage_function` listed between
  `manage_form` and `manage_record`; readonly 17 / mutation 22.
- Installed build `03.10.2026 10:38:49`, SHA `FAD699434B4A44D817B7233C9D368550BAEA9265CF4311B70A28D0CEFB269FC6`
  — matches `Published/4.44.44.44/DynamicsCrm.DevKit.Cli.4.44.44.44.build-manifest.json`
  and MCP `whoami` runtime evidence.
- Live smoke on 🟢DEVKITV4 with test function `all_DevKitTestFunction`
  (formula `{ Total: 2 }`, response property `Total`/Float): list, detail,
  validate (`serverValidated=true`), invoke (`Total: 2`, 1373 ms) and the
  `create` gate error all behaved as documented.

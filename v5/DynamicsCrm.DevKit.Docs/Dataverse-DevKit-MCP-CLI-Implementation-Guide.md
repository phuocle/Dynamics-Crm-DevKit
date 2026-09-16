# Dataverse DevKit: Shared MCP and CLI Invocation Guide

## 1. Purpose and implementation status

Add a generic C# CLI adapter so developers, agents, scripts, and CI pipelines can invoke the Dataverse capabilities already exposed through MCP.

The intended outcome is **one tool contract and one implementation, with two ways to invoke it**:

```text
MCP client ── MCP adapter ──┐
                           ├── shared tool catalog and invocation ── existing C# handlers ── Dataverse
CLI caller ── CLI adapter ──┘
```

This is an implementation specification, not documentation of commands that already exist. The repository currently provides the MCP server through `devkit mcp`; the generic discovery, validation, and invocation commands described below still need to be implemented.

The work belongs to **DynamicsCrm.DevKit.Cli (.NET 10)**, which already contains the MCP server. Start there, reuse existing Shared helpers where applicable, and avoid creating new Core, MCP Server, or CLI projects solely to match a conceptual architecture diagram.

### Scope

The first release must provide:

- Tool discovery and schema inspection without a Dataverse connection.
- Request templates generated from the same definitions used by MCP.
- Readable arguments for simple values and files for long or complex inputs.
- Local contract validation before connection and invocation.
- In-process invocation of the existing C# tools with their dependencies and execution policy.
- Stable machine-readable output and documented exit codes.
- Compatibility with existing MCP clients and existing CLI commands.

Python ports, one Skill per tool, duplicate tool implementations, remote MCP client mode, domain aliases, response files, and new idempotency infrastructure are outside this first release.

## 2. Repository baseline

The following observations are grounded in the source at the time of this rewrite. Recheck them before implementation; the tool count and SDK details are not permanent contracts.

| Concern | Existing source and behavior |
|---|---|
| CLI entry | [Program.cs](../DynamicsCrm.DevKit.Cli/Program.cs) registers commands with Spectre.Console.Cli. Reuse this framework. |
| MCP command | [McpCommand.cs](../DynamicsCrm.DevKit.Cli/Commands/McpCommand.cs) starts the server, connects to Dataverse, and configures impersonation. |
| MCP arguments | [McpCommandArgs.cs](../DynamicsCrm.DevKit.Cli/Models/McpCommandArgs.cs) accepts an optional server instance name, `--tools`, `--setup-guide`, `--category`, `--dry-run`, and `--as-user`. |
| Registration | [McpServerHost.cs](../DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs) uses assembly discovery through `.WithToolsFromAssembly()`. There are currently 38 attributed tool methods. |
| Tool contracts | Names and annotations come from `[McpServerTool]`; parameter types, descriptions, and defaults come from the attributed C# methods and the MCP SDK's schema generation. |
| Availability | Categories are `readonly` and `all` (default). Filtering uses method annotations and `DisabledToolSet`; resource filtering also uses `ToolResourceMap`. |
| Dependencies | The host registers one `ServiceClient`, organization-service interfaces, metadata service, connection information, Web API executor, and execution policy. |
| Results | Tools return `CallToolResult`. [McpToolResults.cs](../DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/McpToolResults.cs) preserves text, structured content, and error status. |
| Mutation policy | [McpServerOptions.cs](../DynamicsCrm.DevKit.Cli/Mcp/McpServerOptions.cs) creates consistent dry-run options and an execution context; mutation helpers enforce that context. |
| Workspace | [WorkspaceFolderHelper.cs](../DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/WorkspaceFolderHelper.cs) resolves MCP roots with a current-directory fallback. Some tools accept an injected `McpServer` for this purpose. |
| Authentication | [DevKitCommandArgs.cs](../DynamicsCrm.DevKit.Cli/Models/DevKitCommandArgs.cs) provides existing authentication arguments and fallback resolvers. MCP uses machine environment variables; ordinary commands use project `.env` fallback. |
| Verification | Follow [AGENTS.md](../AGENTS.md) and the applicable repository workflow for the code actually changed. |

Do not maintain a second list of 38 tools. Discovery and tests must work when another tool is added through the existing registration mechanism.

## 3. Command surface and backward compatibility

### New command branch

Use a new `tool` branch in the existing `devkit` executable:

```text
devkit tool list [filter]
devkit tool describe <tool>
devkit tool example <tool>
devkit tool validate <tool> [input options]
devkit tool call <tool> [input options] [connection options]
```

This is a command branch in DynamicsCrm.DevKit.Cli, not a change to the separate DynamicsCrm.DevKit.Tool component.

The earlier proposed spelling, `devkit mcp list`, conflicts with the existing grammar `devkit mcp [name]`: today, `list` can be a server instance name. A separate branch avoids silently reinterpreting existing connector configurations. Adding MCP subcommands later would require an explicit compatibility and migration design.

Preserve these existing entry points and their behavior:

```text
devkit mcp [name] [server options]
devkit mcp --tools
devkit mcp --setup-guide
```

Do not rename tools, change their JSON keys, reserve previously valid instance names, or change existing commands' exit codes as a side effect of this work.

### Command behavior

| Command | Required behavior | Dataverse connection |
|---|---|---|
| `list` | List available names and concise descriptions. An optional case-insensitive filter matches name or description. | None |
| `describe` | Render types, descriptions, required properties, defaults, enums when actually present, nested objects, and array item schemas. | None |
| `example` | Generate a JSON request template using schema examples/defaults and clearly incomplete placeholders where needed. | None |
| `validate` | Build input using the same pipeline as `call`, then validate the contract. Never invoke the handler. | None |
| `call` | Build and validate input, establish the execution scope, invoke the selected handler once, and return its result. | When required by the handler |

All five commands accept `--category readonly|all`, defaulting to `all`. A disabled or filtered-out tool must not become callable by specifying its name directly.

Category membership is at the tool-method level. For example, `manage_view` has `ReadOnly = false` even though some actions only read data. Do not infer per-action category membership or add manual mappings.

### Validation boundaries

Schema validation proves that a request matches the published input contract. It does not establish that:

- An action named in a free-text description is valid.
- A conditional domain requirement has been satisfied.
- A Dataverse table, column, relationship, or record exists.
- The identity has permission to perform the operation.
- FetchXML is valid against the target environment.
- A mutation will succeed.

For example, `manage_view` currently declares string parameters with empty defaults and enforces several requirements inside its handler. An input may pass schema validation and still fail domain validation.

A generated example is a template, not a guaranteed executable request. Never invent tenant identifiers, production values, or unsupported operation names. Diagnostics about incomplete templates go to stderr, leaving the request document valid JSON.

## 4. Shared catalog and invocation design

### Use the existing definitions

Separate tool discovery from connection creation. The catalog must be available without constructing connected tool instances or starting an MCP stdio server.

The catalog exposes:

- Public tool name, description, and annotations.
- Input schema and output schema, where supplied.
- Availability under the selected category and disabled-tool configuration.
- A binding to the existing handler and its service dependencies.

Use the same MCP SDK-generated tool definitions for both adapters. Do not independently reconstruct schemas by parsing descriptions or copying method parameters into CLI DTOs.

Descriptions such as "create, update, undo" do not automatically constitute JSON Schema enums. If stronger machine-readable constraints are needed, change the canonical contract in a separately reviewed change and test both adapters.

### Invoke in process

Prefer the SDK's registered invocation abstraction if it can run with an in-process service scope and the existing contracts. Inspect the installed SDK and repository tests before choosing the exact API.

If transport dependencies make this impractical, extract the smallest shared dispatcher or handler boundary needed by both adapters. Keep business logic, existing tool entry classes, result DTOs, and helpers in place unless moving them is necessary.

Do not replace the problem with a CLI process that launches another `devkit mcp` process and communicates over stdio. Remote MCP invocation is a separate future feature.

### Resolve injected dependencies explicitly

An argument builder must distinguish public tool arguments from infrastructure parameters such as `McpServer`, service interfaces, and cancellation tokens. Infrastructure parameters must never appear in generated request documents or be supplied through `--set`.

Some handlers currently use `McpServer` to locate the workspace. Audit these dependencies before assuming every tool can be invoked without a live server. Preserve MCP roots behavior, and provide the CLI's current directory as its workspace through a narrow adapter if needed. Do not fabricate a network-connected server or assume all uses tolerate null.

Preserve existing backup and temporary-file locations. The directory containing an input JSON document is a base for adapter file references; it must not implicitly become the tool's workspace.

### Share execution policy and service scope

Build the MCP host and CLI invocation scope from the same registration logic where practical:

```text
catalog lookup and local input validation
→ resolve connection configuration
→ create ServiceClient when needed
→ establish impersonation and execution policy
→ resolve tool dependencies
→ invoke existing handler
→ render result
→ dispose invocation scope and client
```

Reuse one connected client for all internal steps of a call. Keep metadata reads, backup, writes, publishing, and verification inside the existing handler boundary.

Preserve `McpExecutionPolicy` and its projections. The CLI `--dry-run` option must set the same policy as MCP startup, including enforcement at mutation boundaries. It is a host option, not a new tool argument.

`validate` is local contract validation. `call --dry-run` invokes a handler under the mutation-blocking policy and may connect to Dataverse or perform reads. Neither means that every tool supports a complete execution plan.

## 5. Input contract

The adapter accepts the public JSON argument object advertised by MCP. The convenience syntax below builds that object without changing the handler contract.

### Input sources

| Option | Meaning |
|---|---|
| `--input <path>` | Read one UTF-8 JSON object from a file. |
| `--input -` | Read one JSON object from stdin. |
| `--set path=value` | Assign one scalar using the target property's schema. Repeatable. |
| `--add path=value` | Append one scalar to a schema-defined array. Repeatable. |
| `--file path=file-path` | Read UTF-8 text and assign it to a string property. Repeatable. |

Only one `--input` is allowed. Reject malformed JSON, a non-object root, and duplicate JSON property names before invocation.

Split each modifier at its **first** equals sign. Everything after it is the value, including further equals signs. Quote the entire assignment when it contains spaces:

```bash
devkit tool call manage_view \
  --set action=create \
  --set entity_name=contact \
  --set "view_name=Contacts for Account Subgrid" \
  --file "fetchxml=./views/contact subgrid.fetchxml"
```

The shell handles quoting; the adapter must not introduce a second shell-escape language or execute expressions.

### Schema-aware scalar conversion

| Schema type | Conversion |
|---|---|
| String | Preserve the value as text, including an empty value. A JSON-looking string remains a string. |
| Boolean | Accept `true` or `false`; reject other spellings. |
| Integer | Parse using invariant culture and enforce schema bounds. Reject fractional values and overflow. |
| Number | Parse JSON number syntax using invariant culture; reject non-finite values and avoid silent precision loss. |
| Enum | Convert to the declared type, then validate against actual schema enum values. |
| Object or array | Use `--input` for complete values; use `--add` only for scalar array items. |

Use JSON `null` in `--input` when a schema permits null. `--set name=null` means the literal string when the target is a string; it is not a universal null shortcut.

If a schema permits multiple non-null scalar types and conversion is ambiguous, require typed JSON through `--input`. Do not guess. Support the schema constructs emitted by the current catalog; reject unsupported constructs explicitly instead of silently weakening validation.

### Paths and arrays

Dot-separated paths address nested object properties:

```text
--set target.table=contact
--set options.publish=true
--add columns=fullname
--add columns=emailaddress1
```

These are syntax illustrations, not additional `manage_view` parameters. They are valid only for tools whose schema actually defines those objects or arrays.

Create missing object parents only where the schema permits them. Reject traversal through a scalar or null. Array indexes, wildcards, and escaping literal dots in property names are outside the initial modifier syntax; use an input document for these cases.

`--add` initializes an absent array and appends to an existing array. It must not turn a string containing JSON into an array. For example, `manage_view.cell_updates_json` is a string parameter; supply its JSON text with `--file`, not `--add`.

### File contents and file paths are different

`--file` always supplies **file contents as a string**. It does not:

- Parse the contents into a JSON object or array.
- Encode binary data.
- Pass the file path to the handler.
- Change the meaning of an existing path-valued parameter.

Use `--set` to pass a path when the tool expects a path. This distinction matters for `manage_view action=undo`, where `fetchxml` and `layoutxml` are backup paths.

Reject missing files, directories, unreadable files, and invalid UTF-8 with a clear local input error before connecting.

### File references in input documents

A string property can be populated by an exact file-reference object:

```json
{
  "action": "create",
  "entity_name": "contact",
  "view_name": "Contacts for Account Subgrid",
  "fetchxml": {
    "$file": "../views/contact-subgrid.fetchxml"
  }
}
```

Recognize this extension only when the value has exactly one property, `$file`, its value is a string, and the destination schema permits a string. Reject malformed references at string destinations. Preserve ordinary objects at object destinations; do not reinterpret legitimate tool data containing a `$file` property.

Walk the original input document recursively. Replace references with text, then validate the resulting arguments. Do not parse file contents as further references or execute code, shell expressions, or environment-variable substitutions.

Relative path rules:

| Origin | Base directory |
|---|---|
| `--input ./requests/create-view.json` | Current working directory |
| `$file` inside a file-backed input document | Directory containing that document |
| `$file` inside stdin input | Current working directory |
| Direct `--file` modifier | Current working directory |
| Ordinary string passed to a path-valued tool parameter | Existing handler semantics; the adapter does not rewrite it |
| `--output-file` | Current working directory |

Absolute paths remain absolute. Apply the operating system's native path rules, including Windows paths with spaces.

### Defaults, merging, and conflicts

Apply these stages in this exact order, regardless of modifier placement on the command line:

```text
canonical defaults < input document < --set < --add < --file
```

Rules:

1. Use only defaults from the canonical definition or existing invocation binder. Do not create CLI-only defaults or infer them from prose. Do not materialize optional parent objects solely because a child has a default.
2. Resolve input-document file references, then recursively merge objects. Explicit scalar values, arrays, and null replace defaults; arrays are not concatenated during this merge.
3. Apply `--set` assignments in their occurrence order.
4. Apply `--add` values in their occurrence order.
5. Apply `--file` assignments in their occurrence order.
6. Validate the final JSON object against the shared input schema before creating a connection.

Within `--set` or within `--file`, assigning the same exact path twice is an error. Repeated `--add` values are expected. A `--file` assignment may override a `--set` assignment at the same string path because its precedence is explicit.

Reject incompatible ancestor/descendant assignments and incompatible types rather than silently discarding a subtree. Unknown-property handling follows the canonical schema's `additionalProperties` behavior; do not introduce a different CLI-only contract.

## 6. Authentication and process behavior

Reuse the existing connection builders and supported authentication types. The new `tool call` branch uses the MCP machine-environment fallback so the same host configuration can serve both adapters. It must not silently load the project's `.env` or change fallback behavior for existing commands.

The repository's required priority is:

```text
explicit --conn > explicit --auth/--url/... > configured fallback > empty
```

Cover mixed explicit arguments and environment values in tests. Do not assume that filling individual settings and then copying an existing branch condition implements this priority; reconcile any discrepancy in shared connection selection explicitly.

Use existing non-secret options in examples:

```bash
devkit tool call whoami --auth FromPac --pacprofile dev --output json
```

Here `dev` is an already configured PAC profile. A generic `--connection dev` selector does not currently exist and is not part of this first release.

Preserve existing authentication options for compatibility, but do not put secrets in examples or recommend passing them on the command line. Never print secret values, tokens, authorization headers, or raw connection strings in results, diagnostics, exception messages, or snapshots.

Reuse impersonation resolution and policy; make any ignored `--as-user` warning visible on stderr. Do not silently claim the requested identity was applied. Changing the existing impersonation fallback behavior is a separate decision.

For automation, keep banners, update notifications, connection messages, device-code prompts, and diagnostics off stdout. Inspect the full `Program.Main` lifecycle, including the update check and debug keypress behavior; fixing only the command's own renderer is insufficient. The new branch must not wait for an exit keypress.

Pass cancellation through supported layers and dispose resources on every exit path. Cancellation after dispatch does not prove that a write was prevented.

## 7. Output and errors

### Output modes

Provide:

```text
--output text|json
--output-file <path>
```

Defaults:

- `list` and `describe`: text.
- `example`: a JSON request document.
- `validate` and `call`: text.
- `describe --output schema`: an additional mode that emits the raw input schema only.

Machine output must be parseable without removing banners or log lines:

```text
stdout = one result or request document
stderr = diagnostics and warnings
exit code = command outcome
```

For `list --output json`, emit a deterministic array of available tool descriptions. For `describe --output json`, emit the canonical tool definition. For `example`, emit only the request template.

For `validate --output json`, report validity and path-specific errors without echoing the full resolved payload. A successful local validation must be labeled as contract validation.

With `--output-file`, write the selected representation to that file and emit no result on stdout. Create parent directories as needed, replace an existing result file only after a complete write through a temporary sibling file, and clean up temporary output. Never overwrite the input document or a resolved input-content file; reject known collisions before invocation.

Preflight output-path access before a potentially mutating call. If writing the result fails after execution, report that execution already occurred, preserve the known outcome in stderr diagnostics, and return an output failure. Do not re-invoke the tool to regenerate its result.

### Preserve the tool result

Use a small CLI-only envelope for `call --output json`:

```json
{
  "tool": "manage_view",
  "success": false,
  "result": null,
  "error": {
    "code": "INVALID_INPUT",
    "stage": "schema-validation",
    "message": "A safe description of the invalid argument.",
    "details": []
  }
}
```

The example above represents an adapter failure before invocation. When a handler returns, `result` contains its complete serialized `CallToolResult`, preserving `content`, `structuredContent`, `isError`, and any other returned protocol fields. Use the SDK's serialization conventions.

For a returned tool error, retain the full tool result and set `success` to false. Do not flatten the result into a shallow replacement DTO, discard partial results, translate existing error text, or rename structured properties.

Determine success from the result's error signal, not from the absence of a thrown exception. Preserve domain statuses such as `not_executed` for dry-run results; a successful preview is not an applied mutation.

Do not manufacture `mutationApplied: false`, `rollbackApplied: false`, retryability, or an operation ID when the existing result does not establish them. Represent uncertainty explicitly if such metadata is added later.

### Exit codes for the new branch

| Code | Meaning |
|---|---|
| 0 | Command completed successfully; a dry-run result still retains its original non-execution status. |
| 2 | CLI syntax, unsupported option, unknown/unavailable tool, category, or output mode. |
| 3 | Invalid input, file-reference resolution, schema validation, or unsupported input-schema conversion. |
| 4 | Authentication or connection establishment failed. |
| 5 | Handler returned `IsError = true`, including domain and partial failures. Inspect the preserved result. |
| 6 | Invocation or adapter execution failed without a returned tool result; mutation outcome may be unknown. |
| 9 | Result serialization or output-file persistence failed. The tool may already have executed. |
| 130 | Cancellation. Inspect available outcome information before retrying. |

These are new-branch contracts, not replacements for existing server or command exit codes. Do not infer that a nonzero exit code means no writes occurred.

Map more detailed mutation or rollback outcomes only if the shared implementation supplies reliable structured evidence. Parsing error prose to decide whether retry is safe is unacceptable.

## 8. Safety responsibilities

Keep deterministic rules in C#, shared by both entry points:

- Connection handling and Dataverse authorization.
- Mutation policy and impersonation.
- Domain validation and metadata resolution.
- XML normalization and layout-generation rules.
- Existing backups, persistence, publishing, and read-back checks.
- Existing retry, compensation, and error classification.

The adapter must preserve the protections each handler actually implements. It must not claim that all tools provide transactional writes, automatic rollback, durable idempotency, or complete verification.

Do not add a generic retry loop around handler invocation. A tool may have already applied a mutation before a timeout, cancellation, publishing failure, or output failure. Existing bounded technical retries remain owned by the relevant shared helper.

Do not append an `idempotencyKey` argument to existing tools: this is not a current universal contract. Durable deduplication requires separate design for key scope, persistence, concurrent calls, expiry, and recovery.

Similarly, an explicit `undo` action backed by files is not proof of automatic rollback. Preserve available backup paths and recovery information without asserting guarantees the handler does not provide.

Observability should expose existing safe evidence: tool name, stage, elapsed time, correlation information if available, backup identifiers, and domain outcome. Do not log full input documents, XML, source content, or credentials by default.

## 9. Worked example: manage_view

Use [ManageViewTool.cs](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs) as a representative end-to-end case.

### Actual contract

Supported actions are:

```text
list, detail, create, update, rename, set_default, undo
```

Public inputs are:

```text
action
entity_name
view_id
view_name
is_personal_view
fetchxml
layoutxml
cell_updates_json
```

Use these exact names. The current contract has no `operation`, `tableLogicalName`, `name`, `viewType`, `publish`, or `idempotencyKey` arguments.

Creation produces a public system view. It builds LayoutXML from FetchXML and publishes internally. Do not describe arbitrary layout input, personal-view creation, cloning, activation, deactivation, or deletion as current actions.

The `is_personal_view` flag scopes applicable reads and resolution; it does not turn every action into a personal-view operation.

### Discover and inspect

The following examples describe the proposed CLI after implementation:

```bash
devkit tool list view
devkit tool describe manage_view
devkit tool describe manage_view --output schema
devkit tool example manage_view --output-file ./requests/manage-view.template.json

devkit tool call manage_view \
  --auth FromPac --pacprofile dev \
  --set action=list \
  --set entity_name=contact \
  --output json
```

Inspect existing views and metadata before making changes. Use `get_tables` to verify logical names and relationships. A natural-language request about an account subgrid does not establish lookup direction or cardinality.

### Create using a content file

Assume the FetchXML file already exists and has been prepared for the intended environment:

```bash
devkit tool call manage_view \
  --auth FromPac --pacprofile dev \
  --set action=create \
  --set entity_name=contact \
  --set "view_name=Contacts for Account Subgrid" \
  --file fetchxml=./views/contact-subgrid.fetchxml \
  --output json
```

An equivalent request document at `./requests/create-view.json` is:

```json
{
  "action": "create",
  "entity_name": "contact",
  "view_name": "Contacts for Account Subgrid",
  "fetchxml": { "$file": "../views/contact-subgrid.fetchxml" }
}
```

Validate locally, then execute:

```bash
devkit tool validate manage_view --input ./requests/create-view.json &&
  devkit tool call manage_view \
    --auth FromPac --pacprofile dev \
    --input ./requests/create-view.json \
    --output json \
    --output-file ./artifacts/manage-view.result.json
```

Local validation does not verify FetchXML against Dataverse. That remains a handler responsibility.

### Undo using backup paths

The tool's update, rename, and undo results can supply `fetchXmlBackupPath` and `layoutXmlBackupPath`. For undo, pass the actual paired paths as strings:

```bash
devkit tool call manage_view \
  --auth FromPac --pacprofile dev \
  --set action=undo \
  --set entity_name=contact \
  --set "view_id=$VIEW_ID" \
  --set "fetchxml=$FETCHXML_BACKUP_PATH" \
  --set "layoutxml=$LAYOUTXML_BACKUP_PATH"
```

Set those shell variables from the actual selected view and its backup result. Do not use `--file` or `$file` here: the handler needs paths to read the backup pair.

For view operations, route through `manage_view` so its domain checks run. The wrapper must not translate the operation into generic record CRUD. Enforcing a new global prohibition on other tools accessing view records would be a separate behavior change.

## 10. PowerShell, stdin, and CI usage

### PowerShell

```powershell
devkit tool validate manage_view --input ./requests/create-view.json
if ($LASTEXITCODE -ne 0) {
    throw 'manage_view contract validation failed'
}

devkit tool call manage_view `
    --auth FromPac --pacprofile dev `
    --input ./requests/create-view.json `
    --output json `
    --output-file ./artifacts/manage-view.result.json
if ($LASTEXITCODE -ne 0) {
    throw 'manage_view call failed; inspect its result before retrying'
}
```

### Standard input

Use a request without relative file references, or make its references relative to the current working directory. Piping a file does not preserve knowledge of its original directory.

```bash
printf '%s\n' '{"action":"list","entity_name":"contact"}' |
  devkit tool call manage_view --input - --output json
```

PowerShell equivalent:

```powershell
'{"action":"list","entity_name":"contact"}' |
    devkit tool call manage_view --input - --output json
```

These stdin examples assume authentication is already configured through machine environment variables.

### CI

Use the existing non-interactive authentication mechanism with credentials supplied by the CI secret store. Version-control request documents and referenced source files, not credentials.

```bash
devkit tool validate manage_view --input ./requests/create-view.json &&
  devkit tool call manage_view \
    --input ./requests/create-view.json \
    --output json \
    --output-file ./artifacts/manage-view.result.json
```

Collect the result artifact even when the tool reports a partial failure. Do not automatically repeat a mutation because the command returned nonzero or the result file is missing.

## 11. MCP tools, Skills, and workflows

These layers serve different purposes:

| Layer | Responsibility |
|---|---|
| MCP tool or CLI call | Execute a capability through a defined C# contract. |
| Skill | Provide optional guidance for a repeated use case involving decisions, references, or multiple capabilities. |
| Workflow | Coordinate ordered operations, checkpoints, approvals where required, and recovery. |

The wrapper requires no new Skills. A future Skill such as provisioning a table or assembling a model-driven app may coordinate metadata, columns, relationships, forms, views, publishing, and verification.

Keep that guidance focused on choices and ordering. Width mappings, XML parsing, authentication, mutation guards, backup algorithms, and compensation logic remain in code.

Thin domain aliases can be considered later, but must use the same input builder and invocation path. Do not collide with existing commands such as `devkit solution`.

## 12. Implementation sequence

### Phase 1: establish the baseline

1. Read repository guidance and the relevant workflows.
2. Inspect registration, SDK-generated schemas, injected parameters, tool results, connection selection, and existing tests.
3. Capture representative MCP contracts and run focused baseline tests.
4. Confirm that the new command branch leaves existing server names and options unchanged.

Deliverable: an implementation map tied to existing classes, including any transport dependency or schema-validation gap.

### Phase 2: expose the shared catalog and invocation boundary

1. Reuse registered definitions and availability filtering.
2. Separate offline discovery from connected execution.
3. Share service registration and execution policy.
4. Resolve workspace and other server-dependent behavior for CLI callers.
5. Prove both adapters use equivalent definitions and invoke the same handler.

Deliverable: one read-only call and one representative mutation-capable handler work through an in-process test scope, without copying their logic.

### Phase 3: implement the CLI adapter

1. Register `tool list`, `describe`, `example`, `validate`, and `call` with Spectre.Console.Cli.
2. Implement the shared input pipeline and schema validation.
3. Add connection options to invocation and category selection to discovery and invocation.
4. Implement output modes, adapter errors, exit codes, cancellation, and secret-safe diagnostics.
5. Make the complete program lifecycle safe for redirected output and CI.

Deliverable: all available tools can be discovered and bound through the generic path.

### Phase 4: verify and document

1. Add focused unit, catalog-wide contract, and process-output tests.
2. Exercise representative operations in a dedicated non-production environment when available.
3. Document actual command help, supported schema constructs, and limitations.
4. Run the component checks required by repository guidance.
5. Report exactly which checks passed, failed, or could not run.

Do not turn missing integration credentials into a claim that live verification passed.

## 13. Verification requirements

### Unit and process tests

Cover behavior that can break real invocations:

- Scalar conversion, nulls, numeric bounds, enums, ambiguous unions, and unsupported schema constructs.
- Nested objects, array append, defaults, merge precedence, duplicate assignments, and unknown-property policy.
- First-equals splitting, spaces, Unicode, empty values, and native file paths.
- File-reference recognition, UTF-8 errors, relative bases, and distinction between path and content arguments.
- Stdin consumption and cancellation.
- Offline discovery and validation without authentication or network access.
- Category filtering and refusal to invoke disabled or unavailable tools.
- Connection precedence, environment fallback, impersonation diagnostics, and secret redaction.
- Valid JSON on stdout across the full executable lifecycle, including parsing failures and update notifications.
- Output-file failures before and after invocation, with no duplicate handler execution.
- Partial tool results, dry-run statuses, exit codes, and preservation of structured content.

Use MSTest in DynamicsCrm.DevKit.Cli.UnitTests. Tests that mutate process environment, current directory, or console streams need isolation and `[DoNotParallelize]` in the existing parallel suite.

### Catalog-wide contract tests

For each available tool, verify automatically that:

- Discovery includes it exactly once.
- MCP and CLI expose equivalent names, schemas, defaults, descriptions, and annotations.
- Descriptions and templates can be rendered deterministically.
- Infrastructure parameters stay outside public arguments.
- Valid schema fixtures pass and invalid fixtures fail.
- The invocation path retains the tool's text, structured data, and error signal.

Templates containing placeholders are not automatically valid fixtures. Do not hard-code a required total of 38 tools or write 38 duplicate CLI test suites.

### Integration tests

Use a dedicated non-production Dataverse environment for representative cases:

- `whoami` and a read-only metadata operation.
- A view creation and an update with backups.
- Domain validation failure before mutation.
- Dry-run mutation blocking and impersonation behavior.
- Recovery with actual backup files.
- Failure and cancellation behavior where the test harness can establish the resulting state.

Test retries and rollback only where implemented. Clean up test-created artifacts through supported operations; do not invent an unavailable `manage_view delete` action.

### Repository checks for code implementation

Run the smallest required CLI build and focused net10.0 tests. Read the [unit-test workflow](../DynamicsCrm.DevKit.AI/workflows/unit-test.md) before executing it.

If implementation edits `DynamicsCrm.DevKit.Cli/Mcp/**`, follow the [CLI build/install workflow](../DynamicsCrm.DevKit.AI/workflows/build-cli.md) and repository requirements: rebuild/reinstall with the CLI release script, restart the active connector, call `whoami`, and compare runtime evidence with the published manifest.

Preserve source version `4.44.44.44` and verify restoration of temporary build-date replacements. Full release packaging and all-component coverage are outside this component task unless separately requested.

A documentation-only edit to this guide does not require a CLI rebuild, reinstall, or Dataverse mutation.

## 14. Definition of done

The wrapper is ready when:

1. Existing MCP startup commands, instance names, tool contracts, results, and policies continue to work.
2. Every available registered tool is discoverable and describable without a connection or duplicate schema list.
3. Templates, typed scalar input, arrays, nested JSON, text files, file references, and stdin work according to the documented rules.
4. Local validation and domain execution are clearly separated.
5. MCP and CLI use the same C# handler, dependency configuration, and mutation guards.
6. The CLI preserves text and structured tool results, including partial failures and dry-run outcomes.
7. JSON output is clean, exit codes are stable, output-file failures are explicit, and secrets are not exposed.
8. Focused unit, contract, and process tests pass; required runtime verification is complete.
9. Representative live integration results are recorded, or clearly identified as pending rather than passed.
10. Command help and examples match the implemented parser and actual tool parameter names.

The deliverable is a second entry point to the existing Dataverse capabilities, maintained through the same contracts and code.

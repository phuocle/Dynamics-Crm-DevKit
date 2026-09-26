# devkit tool — invoke DevKit MCP tools from the command line

`devkit tool` is a command branch of the `devkit` CLI (DynamicsCrm.DevKit.Cli) that exposes the same tool catalog as the `devkit mcp` stdio server to developers, scripts, and CI pipelines: one tool contract, one C# implementation, two ways to invoke it.

```text
MCP client ── devkit mcp ──┐
                           ├── shared tool catalog + in-process invocation ── handlers ── Dataverse
CLI caller ── devkit tool ─┘
```

Discovery, schemas, examples, and validation never touch the network. Only `tool call` connects to Dataverse, and it reuses the same connection builders, mutation policy, and impersonation gating as `devkit mcp`.

## Command grammar

```text
devkit tool list [filter] [options]
devkit tool describe <tool> [options]
devkit tool example <tool> [options]
devkit tool validate <tool> [input options] [options]
devkit tool call <tool> [input options] [connection options] [options]
```

Tool names are exact and case-sensitive (`manage_view`, not `ManageView`). Run `devkit tool list` to see everything available; disabled tools (per the host's disabled-tool configuration) never appear and can never be reached by name.

### Shared options (all five commands)

| Option | Values | Default | Meaning |
|---|---|---|---|
| `--category` | `readonly`, `all` | `all` | Availability filter. `readonly` exposes only tools declared read-only. |
| `--conn`, `--url`, `--auth`, `--clientid`, `--clientsecret`, `--pacprofile`, `--username`, `--password`, `--domain`, `--sdk-login` | | | Connection options; only used by `tool call` (see below). |
| `--json`, `--profile` | | | Inherited from the shared DevKit command base; unused by the tool branch. |

`list`, `describe`, `example`, and `validate` never build a connection, regardless of which connection options are passed.

### list

Lists available tool names with a concise title, ordered by name.

- `[filter]` — optional case-insensitive substring matched against tool names and descriptions.
- `--output text|json` (default `text`). JSON emits a compact array of `{ "name", "title", "description", "category" }` objects.

### describe

Renders one tool's contract.

- `--output text|json|schema` (default `text`).
  - `text` — `name`, `title`, `category`, description, annotations, then one line per input property: type, `required=yes|no`, `default=<json>` when the schema declares one, `enum=[...]` when present, and the description. Nested object properties appear as `parent.child` lines, array item schemas as `parent[]` lines.
  - `json` — the canonical MCP protocol tool definition (`name`, `title`, `description`, `inputSchema`, `outputSchema`, `annotations`), serialized with the MCP SDK's own conventions. This is byte-equivalent to what `tools/list` advertises.
  - `schema` — the raw input schema only.

### example

Emits a generated JSON request template (pretty-printed). Schema defaults are used where present; required properties without a default receive clearly-incomplete placeholders (`"REQUIRED"`, `0`, `false`, `[]`).

- Placeholder paths are written to **stderr** as diagnostics; the template on stdout stays valid JSON.
- A template is a starting point, not a guaranteed executable request. No tenant identifiers, URLs, or operation names are ever invented.
- `--output-file <path>` writes the template to that file instead of stdout (parent directories are created).

### validate

Builds tool input through the same pipeline as `call` and validates it against the published input contract. **Never connects and never invokes the handler.**

- Success (text): `Contract validation passed for manage_view.`
- Failure (text): `Contract validation failed for 'manage_view' (N errors).` followed by one `path: message` line per error.
- `--output json`: `{"tool":"manage_view","valid":true|false,"errors":[{"path":"...","message":"..."}]}` — the resolved payload is never echoed.
- Schema validation proves the request matches the published contract only. It does not verify that a table, column, view, or FetchXML is valid in any environment; that remains the handler's job.

### call

Builds and validates input, preflights the output path, establishes exactly one connection, invokes the handler once in process, renders the preserved result, and disposes the execution scope afterwards.

Additional options:

| Option | Default | Meaning |
|---|---|---|
| `--dry-run` | off | Invokes the handler under the same mutation-blocking policy the MCP host uses: mutating operations are NOT executed; reads still run. A dry-run result keeps its `not_executed` status and the command exits 0. |
| `--as-user <guid\|email>` | | Impersonate a user for this call. Same gating as MCP: requires the connecting user to be a System Administrator (or `prvActOnBehalfOfAnotherUser`). If the target cannot be resolved, is disabled, or the connecting user lacks the privilege, the option is IGNORED with a visible WARNING on stderr — the command never claims the identity was applied. |

## Input options (validate and call)

```text
--input <path>      one UTF-8 JSON object from a file ('-' reads stdin)
--set path=value    assign one scalar at a dotted schema path (repeatable)
--add path=value    append one scalar to a schema-declared array (repeatable)
--file path=file    assign file CONTENTS to a string property (repeatable)
```

Stages apply in this exact order regardless of command-line placement:

```text
schema defaults < --input document < --set < --add < --file
```

- Modifiers split at the FIRST `=`; everything after it is the value, verbatim. Quote the whole assignment when it contains spaces. No quotes, escapes, or expressions are interpreted.
- Paths are dot-separated schema property paths without array indexes or wildcards; those cases belong in an `--input` document.
- `--set` performs schema-aware scalar conversion (boolean accepts only `true`/`false`; integers and numbers are parsed invariantly and bounds-checked; `--set name=null` on a string property is the literal string `"null"`). Objects and arrays require `--input`.
- `--add` appends scalar items to schema-defined arrays and initializes an absent array. `manage_view.cell_updates_json` is a string parameter — supply its JSON text with `--file`, not `--add`.
- `--file` supplies file **contents** (never parsed, never a path). To pass a path-valued parameter (e.g. `manage_view action=undo` backup paths), use `--set`.
- Assigning the same exact path twice within `--set` or within `--file` is an error; `--file` may override an earlier `--set` at the same string path; repeated `--add` values are expected; ancestor/descendant overlaps are rejected.
- Input documents may reference files inline: `{"fetchxml": {"$file": "../views/contact-subgrid.fetchxml"}}`. Recognized only when the object has exactly one string-valued `$file` property and the destination schema permits a string. `$file` inside a file-backed document resolves against that document's directory; inside stdin input and in `--file` values, against the current directory.
- Rejected before any connection: malformed JSON, non-object roots, duplicate JSON property names, missing/unreadable/non-UTF-8 files, and any contract violation.

## Output

`stdout` carries one result or request document; `stderr` carries diagnostics and warnings; the exit code is the command outcome. Machine output is parseable without removing banners or log lines — the tool branch never prints the DevKit header, update notifications, or keypress prompts.

JSON output is compact (single line) except the `example` template (pretty-printed). Secrets, tokens, and connection strings are never printed.

### --output-file (example, validate, call)

Writes the selected representation to the file instead of stdout. Parent directories are created; the file is replaced only after a complete write through a temporary sibling. The output path is preflighted **before** a potentially mutating call: it must not be a directory, must be writable, and must not collide with the `--input` document or any file referenced by `--file`/`$file` (rejected with exit 3). If the write fails **after** execution, stderr reports that execution already occurred, preserves the known outcome, and the command exits 9 — the tool is never re-invoked to regenerate the result.

### The call envelope (--output json)

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

- When the handler returns, `result` contains its complete serialized `CallToolResult` (`content`, `structuredContent`, `isError`, and any other protocol fields) and `error` is `null` — even when the handler reported an error.
- `success` mirrors the result's error signal, never the absence of an exception. Domain statuses such as `not_executed` are preserved.
- `error` is present only for adapter failures: `INVALID_INPUT`/`schema-validation` (exit 3), `OUTPUT`/`output` (exit 3 preflight or exit 9), `AUTH`/`connection` (exit 4), `INVOCATION_FAILED`/`invocation` (exit 6), `CLI_SYNTAX`/`cli-parsing` (exit 2 parse errors). No `mutationApplied`, `rollbackApplied`, or retryability metadata is ever manufactured.

## Connection options for call

```text
explicit --conn  >  explicit --auth/--url/...  >  project .env (walk-up)  >  empty (exit 4)
```

- `tool call` uses the **project `.env` fallback** with the same keys as every other DevKit command (`DEVKIT_AUTH_TYPE`, `DEVKIT_URL`, `DEVKIT_CLIENT_ID`, `DEVKIT_CLIENT_SECRET`, `DEVKIT_PAC_PROFILE`, `DEVKIT_USERNAME`, `DEVKIT_PASSWORD`, `DEVKIT_DOMAIN`, `DEVKIT_CONNECTION`). The `.env` file is searched from the **current directory upward to the drive root** and the search stops there; when nothing is found the call fails with exit 4.
- OS environment variables (`DEVKIT_*` in the process environment) are **never consulted** by the `tool` branch. `devkit mcp` goes one step further: it accepts **explicit connection arguments only** — it is a globally installed tool whose working directory is arbitrary, so `.env` discovery is meaningless there.
- The priority is reconciled explicitly: an explicitly passed `--url`/`--auth` combination is never overridden by a `.env` `DEVKIT_CONNECTION`, and an explicit `--conn` always wins over modern options.
- Supported auth types: `Interactive`, `DeviceCode`, `ClientSecret`, `FromPac`, `OAuth`, `AD` — the same builders as every other DevKit command.
- Exactly one connected `ServiceClient` is created per call and disposed after rendering.

## Exit codes (new branch only)

| Code | Meaning |
|---|---|
| 0 | Completed successfully; a dry-run result keeps its non-execution status. |
| 2 | CLI syntax, unsupported option, unknown/unavailable tool, category, or output mode. |
| 3 | Invalid input, file-reference resolution, schema validation, or unsupported schema conversion. |
| 4 | Authentication or connection establishment failed. |
| 5 | Handler returned `IsError = true`; the result is fully rendered/preserved. |
| 6 | Invocation failed without a returned tool result; mutation outcome may be unknown. |
| 9 | Result serialization or output-file persistence failed; the tool may already have executed. |
| 130 | Cancellation. |

These are the tool branch's contract; existing commands keep their own exit codes. A nonzero code never implies that no writes occurred.

## Worked examples (manage_view)

`manage_view` actions: `list`, `detail`, `create`, `update`, `rename`, `set_default`, `undo`. Inputs: `action`, `entity_name`, `view_id`, `view_name`, `is_personal_view`, `fetchxml`, `layoutxml`, `cell_updates_json`. There is no `operation`, `tableLogicalName`, `publish`, or `idempotencyKey` argument.

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

Create a view from a FetchXML content file (creation builds LayoutXML from FetchXML and publishes internally):

```bash
devkit tool call manage_view \
  --auth FromPac --pacprofile dev \
  --set action=create \
  --set entity_name=contact \
  --set "view_name=Contacts for Account Subgrid" \
  --file "fetchxml=./views/contact-subgrid.fetchxml" \
  --output json
```

Validate locally, then execute and collect the artifact:

```bash
devkit tool validate manage_view --input ./requests/create-view.json \
  && devkit tool call manage_view \
       --auth FromPac --pacprofile dev \
       --input ./requests/create-view.json \
       --output json \
       --output-file ./artifacts/manage-view.result.json
```

Request document form (equivalent to the `--file` call):

```json
{
  "action": "create",
  "entity_name": "contact",
  "view_name": "Contacts for Account Subgrid",
  "fetchxml": { "$file": "../views/contact-subgrid.fetchxml" }
}
```

Undo with backup paths from a previous update/rename result — pass the actual paired paths as strings (`--set`, never `--file`/`$file`, because the handler reads those files itself):

```bash
devkit tool call manage_view \
  --auth FromPac --pacprofile dev \
  --set action=undo \
  --set entity_name=contact \
  --set "view_id=$VIEW_ID" \
  --set "fetchxml=$FETCHXML_BACKUP_PATH" \
  --set "layoutxml=$LAYOUTXML_BACKUP_PATH"
```

Stdin:

```bash
printf '%s\n' '{"action":"list","entity_name":"contact"}' |
  devkit tool call manage_view --input - --output json
```

## Supported schema constructs and limitations

Supported by the input pipeline (matching the current catalog): `type` (single or nullable union), `properties`, `required`, `additionalProperties: false`, `items`, `enum`, `minimum`/`maximum`/`exclusiveMinimum`/`exclusiveMaximum`, and the metadata keywords `description`/`default`/`title`. Anything else (`oneOf`, `anyOf`, `$ref`, `pattern`, ...) is rejected explicitly rather than silently weakening validation. Schema keywords beyond these are not documented here because discovery always reflects the live catalog.

Limitations:

- Modifier paths (`--set`/`--add`/`--file`) do not support array indexes, wildcards, or escaped dots — use an `--input` document for those cases.
- `$file` references inside a **stdin** input document resolve against the current directory but cannot be included in the `--output-file` collision preflight (stdin cannot be re-read); the input document and `--file` targets are always checked.
- `devkit tool --help` renders branch help (subcommands only); each subcommand's `--help` renders its full option list including inherited connection options.
- On case-insensitive file systems, output-path collision detection is case-insensitive; on case-sensitive file systems it may (safely) reject a write whose target differs only in case from a referenced file.
- Unknown options under `devkit tool` exit 2 (enforced by the branch itself). The rest of the `devkit` CLI keeps Spectre's default behavior for unknown options; that behavior was intentionally not changed.

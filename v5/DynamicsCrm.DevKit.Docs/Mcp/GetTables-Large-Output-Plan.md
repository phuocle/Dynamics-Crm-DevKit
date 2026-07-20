# `get_tables` Large Output Plan

## Status

- **State:** Proposed — awaiting approval
- **Scope:** `get_tables` only
- **Implementation:** Not started
- **Compatibility goal:** Preserve current inline behavior for small responses and explicit inline requests

## Problem

`get_tables` currently returns the same result in two representations:

1. `Content`: compact text for MCP compatibility and direct display.
2. `StructuredContent`: complete JSON for reliable machine processing.

For a table with many columns, choices, and relationships, both representations can become large. VS Code may then spill the tool result into its private `workspaceStorage` directory. The AI must discover that generated path, read the file, and often run PowerShell to project the required fields.

Observed example:

- Table: `All In One` (`all_in_one`)
- Attributes: 59
- Structured result: approximately 37 KB
- Result: client-side spill to an internal `chat-session-resources` path

Returning both full compact text and full structured JSON duplicates data. The compact text can also be truncated and is not a reliable source for clone operations.

## Goals

1. Keep small `get_tables` calls convenient and backward compatible.
2. Prevent large metadata results from consuming excessive MCP/chat context.
3. Store large structured results at a stable, project-local path.
4. Let the AI read, search, or transform the JSON without depending on VS Code internal paths.
5. Keep `Content` useful as a concise status and summary channel.
6. Establish the pattern on `get_tables` before considering other MCP tools.

## Non-goals

- Do not change other MCP tools in this phase.
- Do not change the metadata collected by `get_tables`.
- Do not add attribute pagination in this phase.
- Do not add `basic`, `standard`, or `full` detail levels in this phase.
- Do not remove either `Content` or `StructuredContent` from the MCP result contract.
- Do not store record data or credentials.

## Proposed interface

Add an optional parameter:

```text
output_mode: auto | inline | file
```

### `auto`

Recommended default for new behavior.

- Build the result normally.
- Serialize structured JSON once.
- If its UTF-8 size is at or below the configured threshold, return the current inline result.
- If it exceeds the threshold, save the structured JSON to `.devkit/get_tables/` and return a small manifest.

Proposed initial threshold: **32 KiB** of UTF-8 structured JSON.

The threshold should be a named constant so it can be adjusted after runtime testing.

### `inline`

Always return the current full `Content` and `StructuredContent` representations.

Purposes:

- Backward-compatible escape hatch.
- Debugging and tests.
- Callers that explicitly need inline structured content.

The MCP client may still spill an exceptionally large inline result; this is expected because the caller explicitly selected `inline`.

### `file`

Always save the full structured JSON and return a summary plus manifest, regardless of payload size.

Purposes:

- Schema clone workflows.
- Metadata audit workflows.
- Reuse of the same result across multiple AI steps.

## Response contracts

### Inline mode

Keep the existing successful response shape:

- `Content`: existing compact text.
- `StructuredContent`: existing `GetTablesResult` JSON.

No existing JSON property should be renamed or removed.

### File mode

#### `Content`

Return only a concise summary, for example:

```text
Table: All In One (all_in_one)
Attributes: 59
1:N relationships: 12
N:1 relationships: 8
N:N relationships: 2
Alternate keys: 0

Full structured metadata saved to:
.devkit/get_tables/all_in_one--20260718T153012000Z--a1b2c3.json
```

Do not include the complete compact table in file mode. Otherwise the large-result optimization would still duplicate most of the payload.

#### `StructuredContent`

Return a small manifest, for example:

```json
{
  "mode": "file",
  "tool": "get_tables",
  "schemaVersion": "get_tables-file/v1",
  "entityName": "all_in_one",
  "attributeCount": 59,
  "oneToManyRelationshipCount": 12,
  "manyToOneRelationshipCount": 8,
  "manyToManyRelationshipCount": 2,
  "alternateKeyCount": 0,
  "filePath": ".devkit/get_tables/all_in_one--20260718T153012000Z--a1b2c3.json",
  "sizeBytes": 37841
}
```

The manifest must be structured JSON rather than text-only so the AI can obtain `filePath` reliably.

### Error mode

Preserve the current error behavior unless file writing itself fails.

For `output_mode=auto`:

- If file persistence fails, fall back to the existing inline result.
- Add a concise warning to `Content` indicating that file persistence failed and inline output was used.

For `output_mode=file`:

- Return `IsError=true` with a clear file-write error.
- Do not silently return inline data because the caller explicitly requested file output.

Never expose stack traces, credentials, or connection details in the error.

## File design

### Directory

```text
.devkit/get_tables/
```

The path is relative to the resolved project/workspace root used by existing `.devkit` artifacts.

Before implementation, inspect and reuse the existing helper/convention used by other tools that write under `.devkit`. Do not create a second root-resolution implementation if a shared helper already exists.

### Filename convention

```text
{logical-name}--{filter-or-all}--{utc-timestamp}--{short-id}.json
```

Examples:

```text
all_in_one--all--20260718T153012000Z--a1b2c3.json
all_in_one--all_28--20260718T153145000Z--d4e5f6.json
list--custom--20260718T153230000Z--789abc.json
```

Rules:

- Use resolved logical name, not display name.
- Sanitize the filter segment to safe filename characters.
- Use UTC with milliseconds.
- Add a short unique suffix to avoid collisions and concurrent overwrite.
- Never overwrite an existing result file.

### File contents

Store one valid UTF-8 JSON document. Do not combine human text and JSON in the same file.

Proposed envelope:

```json
{
  "schemaVersion": "get_tables-file/v1",
  "generatedAtUtc": "2026-07-18T15:30:12.000Z",
  "tool": "get_tables",
  "request": {
    "entityName": "All In One",
    "filter": "",
    "customOnly": false,
    "includeIntersect": false,
    "names": ""
  },
  "result": {
    "mode": "detail",
    "count": 1,
    "entityName": "all_in_one",
    "table": {}
  }
}
```

Benefits of the envelope:

- The file is self-describing.
- The generating request is reproducible.
- Future schema changes can be versioned.
- The existing result remains available unchanged under `result`.

### Atomic write

Write to a temporary file in `.devkit/get_tables/`, flush it, then rename it to the final filename. This prevents the AI from reading a partially written JSON document.

Clean up the temporary file if serialization or rename fails.

## Human text policy

`Content` should be treated as the compatibility and summary channel, not as a second full copy of machine data.

Rules for `get_tables`:

- Inline small result: retain current compact text.
- File result: summary, counts, warnings, and file path only.
- Error result: concise actionable message.
- Clone-relevant metadata must come from structured JSON, never from parsing compact text.

## Structured data policy

- Inline mode: structured JSON is the authoritative result.
- File mode: the JSON file is the authoritative result; `StructuredContent` is the authoritative manifest.
- Choice options, `globalOptionSetName`, lookup targets, formula references, flags, relationships, and keys remain in the file result.
- Do not truncate arrays in the JSON file.

## Workspace and path resolution

Implementation must define deterministic behavior when no writable project root is available.

Proposed order:

1. Reuse the established project root used by existing `.devkit` tool outputs.
2. Ensure the resolved path is within that root.
3. Create `.devkit/get_tables/` if needed.
4. Return the project-relative `filePath` in the manifest.
5. Internally retain an absolute path only for writing; do not expose an unnecessary machine-specific absolute path when the relative path is sufficient.

If an MCP client cannot read relative workspace paths, reevaluate whether the manifest should include both `filePath` and `absoluteFilePath`. The first implementation should prefer the portable relative path unless existing `.devkit` tools already establish another convention.

## Cleanup and source control

Before implementation, verify the repository's existing `.devkit` ignore and cleanup policy.

Recommended policy:

- `.devkit/get_tables/` is not committed.
- Files remain available for the duration of the workflow.
- Do not delete a newly returned file immediately after the call.
- Cleanup may later remove files older than a defined age or retain only the newest files per tool.
- Automatic cleanup is not required in this first phase unless an existing shared `.devkit` cleanup mechanism already exists.

## Security considerations

The files contain Dataverse schema metadata, which can reveal internal names, labels, descriptions, relationships, and business structure.

Requirements:

- Store only metadata returned by `get_tables`.
- Never include tokens, connection strings, authentication settings, or headers.
- Keep files local and ignored by source control.
- Sanitize filename inputs to prevent path traversal.
- Ensure the final path remains under `.devkit/get_tables/`.

## Implementation outline

1. Inspect existing `.devkit` writer and project-root helpers in the CLI/MCP code.
2. Add and validate the `output_mode` argument on `get_tables`.
3. Introduce a file-result envelope and manifest model.
4. Serialize `GetTablesResult` once and measure UTF-8 byte size.
5. Implement `auto`, `inline`, and `file` routing.
6. Implement safe directory creation, filename generation, and atomic JSON writing.
7. Replace full compact text with summary text only when file mode is selected.
8. Preserve current inline output byte-for-byte where practical.
9. Update the MCP tool description with output-mode guidance.
10. Add focused unit tests.
11. Build, run focused tests, reinstall the CLI, and verify against live Dataverse.

## Test plan

### Unit tests

1. `inline` returns current full text and `GetTablesResult` structured JSON.
2. `file` writes valid UTF-8 JSON and returns a manifest.
3. `auto` keeps a result below the threshold inline.
4. `auto` writes a result above the threshold to file.
5. Manifest counts match the stored result.
6. Stored envelope preserves the full `GetTablesResult`.
7. Global picklist metadata in the file includes:
   - `isGlobalOptionSet: true`
   - `globalOptionSetName`
   - all options
8. Local picklist metadata does not incorrectly claim a global option set.
9. Filename sanitization blocks path traversal and invalid characters.
10. Repeated or concurrent calls do not overwrite files.
11. `auto` falls back to inline if writing fails.
12. Explicit `file` returns an error if writing fails.
13. Invalid `output_mode` returns a clear validation error.
14. Inline error behavior remains unchanged.

Tests must use an isolated temporary test directory and clean it up. They must not write test artifacts into the repository's real `.devkit` folder.

### Build and runtime verification

After code approval and implementation:

1. Build `DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj`.
2. Run focused `net10.0` tests for `GetTablesTool` and any shared file helper.
3. Rebuild and reinstall CLI using the repository MCP workflow.
4. Restart the MCP connector and call `whoami` to confirm the new process/version.
5. Call `get_tables` for a small filtered result in `auto`; verify inline mode.
6. Call `get_tables` for `All In One` in `auto`; verify file mode.
7. Read the returned `.devkit/get_tables/*.json` file and validate:
   - JSON envelope
   - 59 attributes or the current live count
   - global choice name `v4_v4_category`
   - full options
   - relationships and alternate keys
8. Call with `output_mode=inline`; verify existing full response remains available.
9. Call with `output_mode=file` on a small filtered result; verify forced file behavior.
10. Verify the working tree contains no unintended generated or date-replaced files.

## Acceptance criteria

The change is accepted when:

1. Small `get_tables` results remain inline in `auto` mode.
2. Large results are stored under `.devkit/get_tables/` and the MCP response remains small.
3. File mode returns both concise `Content` and a structured manifest.
4. The saved JSON contains all metadata currently available in `StructuredContent`.
5. The AI can locate and process the result using the returned project-relative path.
6. Existing callers can force the old behavior with `output_mode=inline`.
7. No other MCP tool behavior changes.
8. Focused tests and CLI build pass.
9. Live verification confirms `All In One` no longer relies on a VS Code internal spill path in `auto` or `file` mode.

## Open approval decisions

Please approve or adjust these items before implementation:

1. **Default mode:** `auto` (recommended) or `inline` for strict default compatibility.
2. **Auto threshold:** 32 KiB (recommended), 20 KiB, or another value.
3. **File envelope:** include `request` + `result` (recommended) or store the raw `GetTablesResult` only.
4. **Returned path:** project-relative only (recommended) or both relative and absolute.
5. **Cleanup:** no new cleanup in phase one (recommended) or introduce retention immediately.
6. **Inline compact text:** preserve exactly where practical (recommended).
7. **Scope:** implement only `get_tables` first (required by this plan).

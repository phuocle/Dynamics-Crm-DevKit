# DevKit MCP Multi-Connection — approved implementation specification

Date: 2026-11-17 (rev 4). Reviewed against source and existing tests at commit `d85c045a9`.
Status: **APPROVED — D1–D12 approved by the user on 2026-11-17; CLI implementation, installed-runtime/schema verification, D4 captures and the first-call version fix completed as recorded in §13.** Integration limits remain explicit below.

Scope: MCP inside `DynamicsCrm.DevKit.Cli`. Reuse Shared connection builders and `ProjectEnvironment`; keep MCP discovery/policy rules in CLI unless a specific Shared change is justified. Do not extend multi-connection behavior to other CLI commands or VSIX.

The [HTML design review](../mcp-multi-connection-design.html) is the historical rev 3 proposal. Its selector, policy cascade, tool-scope, and compatibility statements differ from this revision; this Markdown records the approved contract. The previously linked `Cli/mcp-env.md` is absent from the current working tree and is not restored by this review.

## 1. Review conclusion

**The architecture is viable, but rev 3 was not ready to implement.** One server can publish one tool catalog and route each Dataverse call to a connection with its own policy. Isolation must cover the complete execution path: client, metadata, helpers, caches, impersonation, mutation guards, and output attribution.

| Finding in rev 3 | Correction / approved choice |
|---|---|
| Startup connection and unnumbered `.env` group both called `default` | Separate configuration identity from startup selection (§4, D11). This changes the rev 3 explicit `env: "default"` contract. |
| `HasGroup` supposedly recognizes any prefixed key | It recognizes only `ConnectionKeys`. Add MCP-specific discovery; preserve Shared semantics (§5). |
| Changing one local variable switches the tool's connection | Private helpers and caches also capture services. Migrate the complete call graph (§7). |
| Group `DRY_RUN=false` overrides `--dry-run` | Recommend preserving the flag as a process-wide mutation block (§6, revised D9). |
| Impersonation inherits across organizations | Use startup-only CLI override and explicit per-group configuration (§6, revised D8). |
| 40 Dataverse tools receive `env` | The 40 tools include static `read_instruction`; 39 existing tools receive `env`. |
| Default output and all existing tests stay byte-identical | New fields, discovery, aliases, policy visibility, and catalog counts intentionally change contracts (§13). |
| All startup failures currently exit 2 | Existing paths return either 1 or 2; preserve the tested mapping. |

Historical measurement recorded on 2026-11-14: build `4.44.44.44 14.11.2026 07:51:43`, stdio probe, `o200k_base` tokenizer:

| Setup | Tools | Schema tokens recorded in rev 3 |
|---|---|---|
| One server, `all` | 40 | ~39,900 (171,583 characters) |
| One server, `readonly` | 18 | ~16,800 (71,076 characters) |
| Two identical `all` catalogs, arithmetic baseline | 80 | ~79,800 before any client deduplication |

These measurements were **not rerun in this document review**. Approximately 42K tokens for the proposed catalog is an estimate, not an acceptance guarantee. Re-measure with the same payload/tokenizer after implementation; count server instructions separately from tool schemas.

## 2. Verified baseline and source references

`Mcp/` paths below are relative to `DynamicsCrm.DevKit.Cli/`; test classes are under `DynamicsCrm.DevKit.Cli.UnitTests/`. Method names replace stale line numbers.

| Area | Source / existing tests | Observed behavior |
|---|---|---|
| Startup | CLI `Commands/McpCommand.cs`: `ResolveConnectionSettings`, `ConnectAsync`, `ConnectModernAsync`; `McpConnectionResolutionTests`, `McpCommandCoverageTests` | No selector preserves the original per-property merge. A numbered selector with complete explicit arguments skips connection fallback. |
| File selection | Shared `ProjectEnvironment.ResolveFileFromJsonOrDirectory`; `McpConnectionResolutionTests.NoSelector_ResolvedJsonDirectory_SelectsDefaultsBeforeWorkingDirectory` | An existing resolved JSON file can select its directory before the working directory; nearest `.env` wins, without merging parent files. |
| Groups | Shared `ProjectEnvironment`; `ProjectEnvironmentCoverageTests` | `HasGroup`/`GetGroupKey` recognize connection keys only. Positive decimal IDs have no leading zeros and no integer-size limit. |
| DI/catalog | `Mcp/McpServerHost.cs`: `RegisterSharedServices`, `GetFilteredToolTypeNames`; `McpServerHostCoverageTests` | One client and its projections; 40 tools, 18 readonly; membership derives from attributes. |
| Policy | `Mcp/McpServerOptions.cs`, `Mcp/McpExecutionContext.cs`; `DryRunGatewayContractTests` | Policy creates matching options/context. `McpDryRunOptions.DryRun` has a public setter. Current context comments prohibit pre-call policy discovery. |
| Mutation output | `ManageRecordTool.HandleCreate`, `Helper/McpToolResults.cs` under `Mcp/Tools/` | Normal preview is `[DryRun] Would CREATE…`. `AssertMutationAllowed` throws `InvalidOperationException`; it does not construct a dry-run result. Success/dry-run summaries are mirrored into structured JSON. |
| Identity | `Mcp/Tools/WhoAmITool.cs`, `Mcp/Tools/Models/WhoAmIResult.cs`; `WhoAmIToolTests` | Reports connected identity and runtime evidence; proposed `env`/`dryRun` fields do not exist yet. |
| Captured dependencies | `ManageRecordTool` handlers, `GenerateDemoDataTool` caches, `Mcp/Tools/Helper/EntityParserHelper.cs` | Routing must inspect helpers/cache keys, not only public method bodies. |
| Impersonation | `McpCommand.ResolveAsUser`, `RoleGateHelper` | Existing `--as-user` may be ignored with a warning when role/target checks fail. |

Two guidance/source discrepancies must not be resolved incidentally here: repository guidance describes MCP discovery as starting from the working directory, while source/tests also support resolved JSON-directory precedence; guidance says `--conn` takes precedence, while current MCP `ConnectAsync` checks `AuthType` first. Preserve the tested MCP behavior during extraction; resolve these separately if a behavior change is requested.

## 3. Architecture and lifecycle

Read the selected `.env` into one immutable snapshot during normal startup. Discovery, validation, listing, and lazy connection creation all use that snapshot; changing the file requires restart. Build group descriptors/effective policies without Dataverse I/O, validate recognized alias/dry-run values, and connect only the startup group initially.

Conceptual API (implementation must choose consistent accessibility and test seams):

```csharp
interface IMcpConnectionResolver
{
    string StartupEnvId { get; }
    Task<ConnectionBundle> ResolveAsync(string env, CancellationToken cancellationToken);
    IReadOnlyList<ConnectionGroupInfo> ListGroups();
}
```

A bundle contains canonical `EnvId`, optional `Alias`, `ServiceClient`, `IOrganizationService`/`IOrganizationServiceAsync2` projections, `MetadataService`, `IMcpConnectionInfo`, `IWebApiExecutor`, and one `McpExecutionPolicy` with its `Options`/`Context`. Record source and startup status. Keep interface-based test seams.

Policy is fixed after construction. The existing mutable options type is not intrinsically immutable: prohibit runtime writes and test that options/context match. Set `CallerId` before publishing the bundle; never change it while dispatching calls. Public tool constructors cannot expose an internal resolver; choose a compatible public abstraction or internal activation boundary.

Use shared asynchronous initialization per canonical group, for example `ConcurrentDictionary<string, Lazy<Task<ConnectionBundle>>>`:

- ID and alias share one entry; concurrent first calls create one successful bundle. Do not block async authentication with `.Result`/`.Wait()`.
- Remove a failed attempt only if the cache still contains that exact attempt. An old waiter must not delete a newer retry.
- Caller cancellation stops that caller's wait, not another caller's shared initialization. Host shutdown owns cancellation of shared connection work.
- Dispose partial clients after failure. Registry-owned successful clients are disposed exactly once after in-flight work is drained/cancelled. Do not reconnect merely to change policy.
- No routing, connection, or impersonation failure may fall back to the startup client.
- Audit worker ownership: `CreateRecordsTool` currently uses `using var worker = _serviceClient.Clone() ?? _serviceClient`. A fallback must not dispose the registry-owned client. Dispose only owned clones and verify their selected-group identity.
- Audit Interactive/DeviceCode cache identity: startup uses `CrmConnection.Name = "mcp"`. Preserve legacy startup behavior; isolate lazy-group cache names and verify account selection/concurrent cache writes. Authentication prompts go to stderr and identify the group; listing never triggers authentication.

## 4. Connection identity and selection (D11)

**Approved contract:** omitted `env` selects startup; explicit `"default"` selects the unnumbered `DEVKIT_*` group. They coincide only when startup is unnumbered. This supersedes rev 3, where `"default"` always meant startup.

| Tool input | Resolution |
|---|---|
| Omitted, `null`, empty, or whitespace | Startup group selected by CLI |
| `"default"`, case-insensitive | Unnumbered group, if available |
| Canonical numeric ID, e.g. `"1"` | That numbered group |
| Configured alias, case-insensitive | Its canonical group |
| Unknown/malformed selector | Tool error; no fallback |

Trim tool-selector whitespace before lookup. Preserve configured alias display case; output tagging uses validated, trimmed request spelling. Preserve existing strict numeric CLI-selector validation; alias/default syntax is the explicit extension.

Startup rules:

1. No `--env`: startup ID `default`, with original no-selector merge behavior.
2. `--env 1`, or `--env prod` aliasing group 1: startup ID `1`, using existing selected-group merge with CLI arguments.
3. Proposed `--env default`, or the alias in `DEVKIT_ALIAS`: select unnumbered using original no-selector merge. Update help and tests for this new syntax.
4. Complete explicit arguments with a numeric selector still permit startup when that group is absent: synthesize the startup row with that ID and source `command-line arguments`. Alias selection requires a configured alias.
5. Other groups use only their own snapshot connection fields. Never reuse mutable startup args or inherit startup URL, credentials, connection string, or PAC profile.

The startup row, its ID, and its alias resolve to **one effective bundle including CLI overrides**. Do not create a second raw `.env` bundle for the same ID. Listing shows effective source/values so an alias cannot conceal a CLI URL override.

List discovered groups plus startup. If startup is group 1 and no unnumbered group is declared, explicit `env: "default"` is unavailable. `DEVKIT_ALIAS` always labels unnumbered, never whichever group is startup. Sort `default` first when present, then numeric IDs by digit count and ordinal value to avoid overflow.

Example with `devkit mcp --env 1`, `DEVKIT_ALIAS=dev`, and `DEVKIT_1_ALIAS=prod`:

| Call | Canonical group | Startup? |
|---|---|---|
| `whoami {}` | `1` | Yes |
| `whoami {"env":"prod"}` | `1` | Yes |
| `whoami {"env":"default"}` | `default` | No |
| `whoami {"env":"dev"}` | `default` | No |

## 5. Snapshot, discovery, and factory

### 5.1 Preserve Shared semantics

`ProjectEnvironment.Read` already retains arbitrary keys. `GetValue` accepts `IDictionary<string,string>`; its group overload delegates to `GetGroupKey`, which supports only `ConnectionKeys`. Do not assume it supports `ALIAS`, `DRY_RUN`, or `AS_USER`.

Add MCP-specific discovery/key helpers in CLI. Recognize exact, case-insensitive connection suffixes plus approved MCP suffixes `ALIAS`, `DRY_RUN`, and `AS_USER`. Keep these outside Shared `ConnectionKeys`; preserve `HasGroup`/`GetGroupKey` for existing callers.

A recognized MCP-only key can declare an incomplete group for listing. Unknown suffix `DEVKIT_1_NOTE` does not. Ignore malformed numeric prefixes for discovery; do not reinterpret them as named groups. Validate recognized policy values even for non-startup groups.

Actual connection-string keys are **`DEVKIT_CONNECTION` / `DEVKIT_<id>_CONNECTION`**. `--conn` is the CLI option; `_CONN` is not the current key contract.

| Proposed key | Meaning |
|---|---|
| `DEVKIT_ALIAS` / `DEVKIT_<id>_ALIAS` | Alias for unnumbered / numbered group |
| `DEVKIT_DRY_RUN` | Unnumbered setting and fallback for numbered groups without their own key |
| `DEVKIT_<id>_DRY_RUN` | Group setting, subject to process-wide `--dry-run` |
| `DEVKIT_AS_USER` / `DEVKIT_<id>_AS_USER` | Impersonation for that group only, approved under D8 |

Aliases: `[A-Za-z][A-Za-z0-9_-]*`, case-insensitively unique across all groups, `default` reserved, blank means absent. Trim surrounding whitespace and retain display case. Invalid/reserved/duplicate aliases fail startup with exit 2.

Dry-run: strict `true`/`false`, case-insensitive after trimming. Present blank, `1`, or `yes` is invalid. Missing differs from explicit false. New configuration errors exit 2 and identify the key without exposing credentials.

### 5.2 Factory extraction

Extract reusable operations from `McpCommand`; separate pure configuration resolution from connection/logging. Use immutable per-group resolved settings. Lazy creation must not mutate startup args or reread `.env`.

Reuse builders, supported auth modes, decryption, required-field validation, adapters, and existing timeout behavior. `ServiceClient.MaxConnectionTimeout` is process-wide, not per-bundle. Request cancellation must not silently change timeout semantics.

Preserve existing startup logs and tested exit-code mapping for existing cases. New alias/policy/snapshot errors have the explicit exit-2 classification. Lazy failures become tool errors without stopping the server. Do not expose raw connection strings or unrestricted builder `LastError`.

### 5.3 Snapshot compatibility (D12)

Rev 3 cannot promise both “complete explicit arguments skip `.env`” and “all aliases/policies are validated at startup.”

Approved contract: **connection fallback** still skips `.env` values for complete explicit numbered selection, but normal startup separately loads the snapshot for discovery/policy. Invalid new policy keys or an unreadable snapshot can therefore reject startup that previously bypassed the file. D12 approves this compatibility change; the diagnostic must identify discovery/policy loading as the failure.

Keep `--help`, `--setup-guide`, and `--tools` free of snapshot/network requirements. Resolve aliases only during actual server startup; lexical validation must not force informational modes to read credentials. No OS environment-variable fallback is introduced.

## 6. Per-connection policy (D8/D9)

### 6.1 Dry-run

Rev 3 allowed group false to override `--dry-run`. Rev 4 specifies an unconditional process-wide block when the flag is supplied:

```text
configuredDryRun(default) = DEVKIT_DRY_RUN ?? false
configuredDryRun(id)      = DEVKIT_<id>_DRY_RUN ?? DEVKIT_DRY_RUN ?? false
effectiveDryRun(group)    = cliDryRun || configuredDryRun(group)
```

| Scenario | Flag / configuration | Unnumbered | Group 1 |
|---|---|---|---|
| A | No flag, no keys | false | false |
| B | `--dry-run`, no keys | true | true |
| C | `--dry-run`, `DEVKIT_1_DRY_RUN=false` | true | **true** |
| D | No flag, `DEVKIT_1_DRY_RUN=true` | false | true |
| E | No flag, `DEVKIT_DRY_RUN=true`, no group override | true | true |
| F | No flag, `DEVKIT_DRY_RUN=true`, `DEVKIT_1_DRY_RUN=false` | true | false |

C intentionally changes the rev 3 recommendation. D/F support writable DEV and protected PROD without weakening an explicit flag. Alias/startup selection does not change configured group policy.

Reads allowed by current tool/policy behavior remain allowed. `--category readonly` filters the process-wide catalog: read actions inside filtered mixed read/write tools remain unavailable. Dry-run does not restore those tools.

Keep action-level previews and mutation guards. Preserve normal `[DryRun] Would CREATE…` output. An unexpected mutation reaching `AssertMutationAllowed` remains an error unless a separate output-contract change is approved; the guard does not automatically return `[DryRun] Mutation blocked…`.

Exposing dry-run through listing, `whoami`, and instructions intentionally changes the current non-discoverability contract in `McpExecutionContext`. D9 approves visibility and corresponding comment/test updates. Policy remains unmodifiable by tool inputs.

### 6.2 Impersonation

Approved D8 rules avoid automatically carrying a GUID/email into another organization:

- Startup: explicit `--as-user` wins over that group's key. Preserve legacy ignore-with-warning behavior for the CLI flag.
- Other groups: only their own `AS_USER` applies. `DEVKIT_AS_USER` belongs to unnumbered and does not cascade. Blank means no impersonation.
- New `.env` impersonation keys must fail that group's connection when resolution/authorization fails, rather than silently use the connecting principal. Startup failure from these keys exits 2; lazy failure becomes a tool error. This is the approved new policy.
- Resolve role/target checks on the selected client; set `CallerId` before publishing projections. Verify SDK, Web API, and worker identity.
- Listing may show configured `asUser`; applied `impersonating` is null until successful connection. Do not connect to obtain a display name.

D8 is approved: implement the new keys and the rules above.

## 7. Tool migration and DI

Add optional `string env = null` to the **39 existing Dataverse tools**. Exclude `read_instruction`, new `connection_list`, and resource methods. It is never schema-required. Place it after required injected parameters such as `McpServer server`, preferably after existing optional C# parameters to preserve positional callers. JSON property order is not a contract.

Identical parameter description on all 39 schemas:

```text
Optional .env connection group: numeric id such as "1", alias such as "prod", or "default" for the unnumbered group. Omit to use the startup connection. Use connection_list to list groups.
```

Migration requirements:

1. Resolve/await inside error handling; retain existing validation/preview behavior where possible.
2. Pass selected dependencies through every handler/helper, or create an invocation-local worker. Never overwrite shared tool fields to switch environments.
3. Reuse helpers with explicit service/context parameters; refactor captured-service helpers as needed. Rev 3's “no helper changes” promise is withdrawn.
4. Audit metadata, lookup, privilege, and entity caches. Scope to bundle/invocation or key by stable connection identity, including impersonation where relevant. Review `GenerateDemoDataTool` and `EntityParserHelper`; entity name alone cannot identify data across organizations.
5. Route SDK, async, Web API, metadata, and spawned workers through the same selection. No routed path may resolve a leftover startup singleton.
6. Preserve temp-file paths and result DTOs unless an explicit change is reviewed.

The host owns the registry; static resources remain independent. Temporary legacy registrations may aid migration, but the shipped catalog must prove all routed paths use the selected bundle. Avoid double disposal.

Keep tool entry classes in `DynamicsCrm.DevKit.Cli.Mcp.Tools`; apply `[McpServerToolType]` only to tools. Review `DisabledToolSet`, `ToolResourceMap`, and `CategoryLevel` without manual category mappings or obsolete tiers.

## 8. `connection_list`

Readonly metadata: `Name="connection_list"`, `ReadOnly=true`, `Idempotent=true`, `Destructive=false`, `UseStructuredContent=true`, with an explicit output DTO/schema. Title: `List connection groups, aliases and effective policy`.

Totals become **41 tools for `all`, 19 for `readonly`**, derived from attributes. Listing takes no `env` and initiates no connection:

```json
{
  "startupEnv": "default",
  "groups": [
    {
      "env": "default", "alias": "dev", "isStartupDefault": true,
      "connected": true, "authType": "ClientSecret",
      "url": "https://dev-org.crm.dynamics.com", "clientId": "app-dev",
      "username": null, "dryRun": false, "asUser": null,
      "impersonating": null, "source": "project .env (DEVKIT_*)"
    },
    {
      "env": "1", "alias": "prod", "isStartupDefault": false,
      "connected": false, "authType": "ClientSecret",
      "url": "https://prod-org.crm.dynamics.com", "clientId": "app-prod",
      "username": null, "dryRun": true, "asUser": null,
      "impersonating": null, "source": "project .env (DEVKIT_1_*)"
    }
  ],
  "summary": "[Success] Found 2 connection group(s): default (dev) (startup), 1 (prod) (dry-run: mutations blocked)."
}
```

`env` is canonical; `startupEnv` identifies the omitted target; exactly one row has `isStartupDefault=true`. `connected` means a successful cached bundle exists, not a health probe. In-flight/failed attempts remain false; effective dry-run is known before connection.

Use allowlisted metadata only. Never serialize settings/builder objects, raw `CONNECTION`, passwords, client secrets, tokens, or exception dumps. URL/auth/client/user fields may be null when unavailable without authentication or safe connection-string parsing. Do not read PAC/MSAL caches for listing. For startup overrides, show effective values/source rather than misleading `.env` values.

Summary order: ID, optional alias, startup marker, dry-run marker. Text and structured summary match. Startup-only configuration returns one row. Exposing clientId/username/configured asUser is covered by D5/D8.

## 9. Errors and retry

Reuse `McpToolResults.Error`: text `[Error]` / `[Hint]` / `[Detail]`, structured `error` / `hint` / `details`, `IsError=true`. New routing failures must not bypass it or execute fallback. Examples specify message content, not JSON whitespace.

Unknown selector:

```text
[Error] Unknown connection group 'xyz'.
[Hint] Use connection_list to list available groups, or omit env to use the startup connection.
[Detail] {"requested":"xyz","availableGroups":["default","1"],"startupEnv":"default"}
```

`availableGroups` contains canonical IDs; listing provides aliases/policy. Do not put human labels such as `"1 (prod)"` in machine-address fields. Bound/escape invalid selector echoes so newlines cannot inject labels.

Lazy failure:

```text
[Error] Connection failed for group '1': <sanitized reason>
[Hint] Retry for a transient connection failure. If you change the project .env, restart the MCP server before retrying.
[Detail] {"requested":"prod","env":"1","authType":"ClientSecret","url":"https://prod-org.crm.dynamics.com"}
```

Declared but incomplete group:

```text
[Error] Environment group '1': DEVKIT_1_AUTH_TYPE or DEVKIT_1_CONNECTION is required for MCP server.
[Hint] Add the required connection keys to the project .env and restart the MCP server; use connection_list to inspect groups.
[Detail] {"requested":"prod","env":"1"}
```

Do not omit declared incomplete groups from available lists. Later missing-field diagnostics name that group's keys. Existing startup diagnostics retain their tested wording; lazy examples do not redefine them.

New startup validation examples (stderr, exit 2):

```text
[DevKit MCP ERROR] Invalid DEVKIT_1_DRY_RUN value 'yes' in the project .env. Expected 'true' or 'false'.
[DevKit MCP ERROR] Invalid DEVKIT_2_ALIAS value '1dev' in the project .env. Aliases must start with a letter and use only letters, digits, '_' or '-'.
[DevKit MCP ERROR] Duplicate alias 'prod' in the project .env (DEVKIT_1_ALIAS, DEVKIT_3_ALIAS). Aliases must be unique.
[DevKit MCP ERROR] DEVKIT_1_ALIAS uses the reserved name 'default'. Choose another alias.
```

Escape user-supplied values. Redact connection/authentication errors separately; never interpolate unrestricted `LastError`.

## 10. `whoami` and output attribution (D2/D3)

Add always-present `whoami` fields:

- `env`: canonical resolved ID. With `--env 1`, omitted or alias selection yields `"env":"1"`, not `"default"` or `"prod"`.
- `dryRun`: effective boolean, including explicit false.

Preserve identity/runtime-evidence fields. Canonical output deliberately revises rev 3's mixed canonical/echo identity; request spelling belongs in attribution text.

For a successfully resolved non-startup bundle, append ` | env <trimmed-request>` to the first summary line, including `whoami`. Preserve prefix and remaining lines. Startup-resolution calls receive no tag, including startup's ID/alias. Resolution failures already include context and must not be tagged twice.

Synchronize existing mirrored fields: success/dry-run `summary`, error `error`, or existing result-specific summary. Preserve `IsError`, hints, details, content blocks, and other DTO fields. Partial/failed outputs retain their shape; do not invent a summary field solely for tagging. Test every result factory shape. Structured content is unchanged only outside these mirrored fields and approved `whoami` additions.

Example: `[DryRun] Would CREATE… | env prod` (ellipsis is explanatory, not an exact fixture). Do not rewrite current previews into a synthetic `Mutation blocked` message.

## 11. Instructions and setup guide

With multiple groups/aliases, identify startup separately:

```text
Startup connection: 1. Connection groups: default (dev), 1 (prod; startup; dry-run: mutations blocked). Omit env to use the startup connection; pass an ID, alias, or "default" for the unnumbered group. Call connection_list for details.
```

Do not imply static instruction/resource surfaces or listing take `env`, or that lazy groups are already connected. Keep single-group instructions concise.

Update setup guide, help/examples, and affected static instructions during implementation. Distinguish `[name]` (instance display name), `--profile` (JSON-command profile), `--env` (startup selection), and per-call `env`. Multiple-process configuration remains supported.

Proposed writable DEV / protected PROD example:

```dotenv
DEVKIT_AUTH_TYPE=ClientSecret
DEVKIT_URL=https://dev-org.crm.dynamics.com
DEVKIT_CLIENT_ID=<dev-app-id>
DEVKIT_CLIENT_SECRET=<dev-secret>
DEVKIT_ALIAS=dev

DEVKIT_1_AUTH_TYPE=ClientSecret
DEVKIT_1_URL=https://prod-org.crm.dynamics.com
DEVKIT_1_CLIENT_ID=<prod-app-id>
DEVKIT_1_CLIENT_SECRET=<prod-secret>
DEVKIT_1_ALIAS=prod
DEVKIT_1_DRY_RUN=true
```

Start `devkit mcp devkit-codex`. Omitted env targets DEV; `env:"prod"` targets group 1 with mutations blocked. Adding `--dry-run` protects both. These examples describe the approved target behavior; runtime verification is tracked below.

## 12. Implementation sequence and tests

Approved implementation sequence: snapshot/descriptors/policy; factory/registry; complete tool/helper migration; discovery/output schemas; instructions/docs; installed-runtime verification. Do not ship a partially routed Dataverse catalog.

Use CLI MSTest/net10.0 suites. Mark shared-state tests `[DoNotParallelize]`; preserve `WaitScalePercent` for metadata waits.

| Area | Required cases |
|---|---|
| Baseline | No-selector merge, selected-group isolation, complete explicit args, optional fields, auth/connection interaction, credential aliases, JSON-directory precedence, info modes, exit codes |
| Discovery | Non-consecutive/very large IDs, ordering, case-insensitive keys, unknown suffix ignored, policy-only group, blank/invalid/reserved/duplicate alias, strict boolean, nearest file without parent merge |
| Routing | Omitted versus explicit default with `--env 1`, default alias, unknown selector, synthetic CLI startup row, startup overrides, no credential inheritance |
| Lifecycle | Concurrent ID/alias first calls, parallel groups, failure/retry races, waiter cancellation, shutdown during connect, partial disposal, single owner |
| Policy | A–F, SDK/Web API boundaries, read behavior, matching options/context, mixed-tool filtering, approved policy visibility |
| Impersonation | Legacy startup flag, own-group keys, new key failures closed, no CallerId cross-talk, SDK/Web API/worker identity, unknown display before connect |
| Full call graph | Captured helpers, metadata/lookup caches across organizations with identical entity names, clone/fallback ownership, lazy authentication cache isolation |
| Output/schema | 39 optional env parameters, absent on two non-routed tools/resources, canonical whoami.env, false serialization, list schema, mirrored text, partial/failed shape, no secrets in list/errors/logs |
| Snapshot | File edits affect neither connected nor lazy groups before restart; D12 with complete explicit args; restart observes new values |

Re-run relevant existing suites: `McpConnectionResolutionTests`, `McpCommandCoverageTests`, `ProjectEnvironmentCoverageTests`, `DevKitCommandArgsProjectEnvironmentTests`, `McpServerHostCoverageTests`, `DryRunGatewayContractTests`, and affected tool suites. Update assertions only for approved changes. Withdraw the old “150 tests pass unchanged” claim: alias acceptance, counts, visibility, and fields require deliberate updates; report actual executed counts.

## 13. Acceptance and verification

Implementation verification checklist. Unchecked items have not yet been verified.

- [ ] Decisions and compatibility effects agree across code, help, schemas, examples, and tests.
- [ ] Omitted-env calls retain startup target/action semantics when new configuration does not change policy. Deterministic fixtures remain stable except approved whoami/discovery changes; dynamic runtime evidence is not compared byte-for-byte.
- [x] Catalog is 41/19; exactly 39 existing tool schemas gain optional env; categories still derive from attributes.
- [ ] Routing identifies the expected organization/policy, including `--env 1`, aliases, CLI overrides, and explicit unnumbered selection.
- [ ] Parallel calls cannot mix clients, metadata, caches, identity, policy, or output attribution; failure/cancellation/disposal checks pass.
- [ ] Protected-group attempts execute zero mutations; permitted reads work; SDK, Web API, and workers are covered.
- [ ] Listing performs no authentication/network call, leaks no secrets, and matches snapshot/effective policy.
- [x] Build CLI and run focused net10.0 tests, then the CLI suite for this broad migration; test affected consumers if Shared changes are required.
- [x] After MCP source edits, use `devkit-skill-build-cli` to rebuild/reinstall, restart the connector, and call whoami. Verify version, build timestamp, process start, and assembly SHA against the Published manifest; confirm date placeholders are restored.
- [x] Inspect tool text and structured content for default/routed/list/error/dry-run cases. The installed-runtime checks used live reads and a protected preview; no live writes were executed.
- [x] Re-measure schema size with recorded payload/build/tokenizer; report measured savings, not an estimated 42.3K requirement.

Full release, all five suites/coverage, and commits are not automatically authorized by this specification. Follow repository skills when requested. Mark checks complete only after collecting evidence.


### Implementation checkpoint — 2026-11-17

- Implemented snapshot/alias/policy resolution, asynchronous registry, per-invocation workers for all 39 Dataverse tools, connection_list, canonical whoami fields, output attribution, and setup/help changes.
- Fixed service-identity scoping of EntityParserHelper metadata and ownership of CreateRecordsTool clone fallback. Shared connection-key parsing remains unchanged.
- CLI build passed. Final CLI regression suite: 6,333 passed, 0 failed (42 seconds of test execution). The 30 new multi-connection cases are included. Evidence: TestResults/MultiConnection/multi-connection-final.trx.
- A development-build stdio probe verified live reads on both configured organizations, ID/alias identity, protected create preview, unknown-selector errors, and catalog counts 41/19 with exactly 39 optional env schemas. No live writes were executed. This is not evidence for the final installed assembly.
- In the initial verification pass, the user restarted the app and both connected MCP instances matched the installed build and manifest; the process starts below are later than manifest `builtAt` (`2026-11-17T15:26:46.4958556+07:00`). No MCP process was restarted or reinstalled during that verification pass. The later single-process pass is recorded separately below.
- CLI version `4.44.44.44`, build `17.11.2026 15:26:39`, installed assembly path, and SHA256 match on both instances. SHA256: `22AF07F8A1D54B0FB14AA96B7A60727AB48BD5CC1BF1163215FC26D372C83B38`. Package and manifest remain under `Published/4.44.44.44`; the source date placeholder remains restored.
- D4 is complete: 41 numbered capture files, readonly `1`–`19`, mutation `20`–`41`, alphabetical inside each category. The initial pass captured three cases for [connection_list](../TestAllMcpCall/1.connection_list.md) and five for [whoami](../TestAllMcpCall/19.whoami.md); the single-process pass below extends these captures. Descriptions/parameters were synchronized for all 41 files. Historical test/output blocks were preserved without re-running their mutations; their approvals are not a claim of a new full live test pass.
- All 41 connected tool names, parameter sets and optionality agree with schema generated by the installed ModelContextProtocol SDK from the assembly whose SHA was verified above. All 41 descriptions also agree byte-for-byte with current source attributes. Documentation parameter order/defaults/descriptions agree with that generated schema. Both `read_instruction` and `connection_list` omit `env`; all 39 Dataverse tools have optional `env` with default `null`; injected server/cancellation parameters are absent from input schemas.
- Initial live checks verified numbered selection on the default-startup instance, omitted selection on the numbered-startup instance, explicit `default` on that instance, unknown-selector errors, lazy connection state in listing, and global dry-run protection. That snapshot had no aliases. The subsequent single-process pass below verifies the configured aliases and per-group policy live.
- Interactive/DeviceCode sign-in and live impersonation are not claimed verified; offline tests cover impersonation rejection and policy isolation. In that build, a newly connected lazy client's first `whoami` initially reported SDK organization version `9.0.0.0`; subsequent calls reported the same `9.2…` versions as the corresponding startup clients. Identity and DevKit runtime/SHA remained correct. Those results remain captured verbatim as historical evidence; the first-call version fix and its later live verification are recorded below.
- No commits have been created.

| Connected instance | PID | Process start | Startup env | Effective startup dry-run |
|---|---|---|---|---|
| `devkit-codex` | 13612 | `2026-11-17T15:28:25.1552783+07:00` | `default` | false |
| `devkit-codex-2` | 7740 | `2026-11-17T15:28:25.1342901+07:00` | `1` | true |

Schema measurement for this installed build uses `o200k_base` via `js-tiktoken 1.0.21`, on compact `JSON.stringify({tools: catalog})` generated by the installed SDK. Server instructions are excluded. The SDK-generated catalog is tied to the verified assembly; it was not obtained by opening an additional MCP server process.

| Catalog | Tools | Characters | UTF-8 bytes | Tokens |
|---|---|---|---|---|
| `all` | 41 | 184,128 | 184,558 | 42,741 |
| `readonly` | 19 | 78,121 | 78,277 | 18,385 |

This replaces the projected 42.3K estimate with a measured value. The old two-server 79.8K figure in §1 remains historical, rather than a newly measured identical-build comparison.

### Single-process alias verification — 2026-11-17

After the user switched the local configuration to one active `devkit-codex` entry and restarted the app, all calls below used the same connected namespace `mcp__devkit_codex__*`. No additional MCP process, connector restart, build or reinstall was used for this pass.

The configured aliases are `DEVKIT_ALIAS=mcp-dev` and `DEVKIT_1_ALIAS=mcp-uat`; per-group dry-run is false for the unnumbered group and true for group 1. The server starts without a global `--dry-run` flag.

| Selector | Canonical env | Environment | PID | Effective dry-run |
|---|---|---|---|---|
| omitted | `default` | DEVKITV4 | 13056 | false |
| `mcp-dev` | `default` | DEVKITV4 | 13056 | false |
| `default` | `default` | DEVKITV4 | 13056 | false |
| `mcp-uat` | `1` | DYNAMICS CRM DEVKIT | 13056 | true |
| `1` | `1` | DYNAMICS CRM DEVKIT | 13056 | true |

- Every identity call returned process start `2026-11-17T17:34:36.8912520+07:00`, version `4.44.44.44`, build `17.11.2026 15:26:39`, and SHA256 `22AF07F8A1D54B0FB14AA96B7A60727AB48BD5CC1BF1163215FC26D372C83B38`, matching the installed assembly and manifest.
- Windows process inventory independently found one matching `devkit.exe` (PID 13056, parent PID 6488) and zero `devkit-codex-2` processes. Only the single `devkit-codex` connector was available.
- DEV organizationId is `82131d86-1aa7-f011-8706-00224806e819` at `https://dynamics-crm-devkit-v4.crm.dynamics.com`; UAT organizationId is `29c6e552-e16f-ef11-a66b-6045bd1e7d8b` at `https://dynamics-crm-devkit.crm5.dynamics.com`. ID and alias select the same UAT organization and cached connection.
- Before the first UAT identity call, listing left UAT `connected=false`; after the calls, both rows were connected. Their false/true dry-run policies and default startup selection did not change.
- Startup alias `mcp-dev` produced no environment suffix. UAT results echoed ` | env mcp-uat` or ` | env 1`, with identical text/structured summaries.
- A create preview via `env: "mcp-uat"` returned `[DryRun] Would CREATE a 'account' record with 1 field(s). | env mcp-uat`, `status: "not_executed"`, and no new-record ID. The action-level guard returns before record creation. No live writes or cleanup deletes were executed; DEV was verified by identity/read operations and its effective policy.
- Captures were extended verbatim: connection_list Tests 4–5, whoami Tests 5–8 (the earlier error case is now Test 9 to preserve success-first ordering), and manage_record Test 26. Existing outputs were retained. Raw evidence is stored locally under `.devkit/verification/single-process-2026-11-17-173436/`.
- The known SDK organization-version warmup reproduced: first UAT alias call returned `9.0.0.0`, then numeric ID and repeated alias returned `9.2.26104.146`. Both first and repeated results are captured; the DevKit version, SHA, PID and selected organization stayed correct.
- Result: one process successfully serves both `mcp-dev` and `mcp-uat`, with UAT mutation previews blocked by its own connection policy. No commit was created.

### First-call organization version fix — 2026-11-17

- `whoami` now reads the selected organization's version using `RetrieveVersionRequest`, rather than the SDK's potentially uninitialized `ConnectedOrgVersion` value. Both text and structured output use that response, including on the first lazy connection call. This adds one read request per `whoami`; it does not change routing or dry-run policy.
- If version retrieval fails, the existing friendly error path is used; the tool does not report the SDK placeholder as a successful version.
- Regression tests cover placeholder/stale SDK versions, retrieval failure, and the first lazy alias call followed by its numeric ID. The focused WhoAmI/multi-connection run passed 207 tests; the full CLI suite passed 6,337 tests with zero failures/skips (45 seconds test execution).
- CLI `4.44.44.44`, build `17.11.2026 17:50:32`, was installed with assembly SHA256 `59C616B3DEC36C3506C4C6F88E69E61417702CD683ADB3CF9F447E8270F81944`.
- After the user restarted the app, `connection_list` showed UAT disconnected. The very first `whoami {"env":"mcp-uat"}` returned Dataverse `9.2.26104.146` in both text and structured content, with canonical env `1`, dryRun true, and the expected UAT organization. Numeric ID `1` immediately returned the same version and identity. DEV alias returned its own organization, Dataverse `9.2.26112.137`, and dryRun false.
- All three identity results shared PID **10308**, process start `2026-11-17T17:53:21.1926574+07:00`, assembly path, version, build and SHA. These matched the manifest and the installed assembly; the process started after installation. Windows inventory found one matching process (parent PID 9288). Afterward both groups were connected with their original policies. No live mutations were executed for this verification.
- Added verbatim outputs as whoami Tests 9–11; the existing error moved to Test 12, and historical success outputs were preserved. Raw captures, process inventory and fresh live tool metadata are under `.devkit/verification/whoami-first-version-2026-11-17-175032/` (local, ignored). Descriptions and parameter sets for all 41 capture files match the freshly loaded catalog; source parameter order/defaults were also checked against build `17:50:32`.

## 14. Non-goals

- No named configuration prefixes, hot reload, runtime policy toggles, aggregate cross-env tools, or per-group catalogs.
- No fallback to another organization on routing/connection failure.
- No changes to other CLI commands, VSIX, Shared `ConnectionKeys`, or source version `4.44.44.44`.
- No claim that all auth modes are independently cached until the builder/cache audit passes.
- No claim that dry-run grants read permissions or changes readonly-catalog membership.

## 15. Approved decisions

The user approved all twelve choices below on 2026-11-17. Changes from rev 3 are explicit.

| ID | Decision | Approved choice |
|---|---|---|
| D1 | Parameter name | Keep optional `env` on the 39 Dataverse tools. |
| D2 | whoami fields | Always emit canonical env and effective dryRun; revise alias-echo identity. |
| D3 | Attribution | Tag non-startup calls; synchronize existing mirrored text; preserve prefixes/shapes. |
| D4 | TestAllMcpCall numbering | Keep alphabetical order and update numbering with the implementation captures. |
| D5 | Listing metadata | Allowlist URL/auth/client/user/alias/policy; no secrets, connection strings, or authentication I/O. |
| D6 | Scope | 39 existing tools; exclude read_instruction, connection_list, resources. |
| D7 | Rollout | CLI build/install, focused plus CLI regression tests, fresh connector/runtime evidence. Commits/full release require separate requests. |
| D8 | Impersonation | Enabled; own-group keys, legacy startup flag behavior, new key failures closed. Supersedes rev 3 inheritance/ignore-with-warning for new keys. |
| D9 | Dry-run/visibility | Flag blocks all; otherwise group key then unnumbered fallback. Approve policy visibility. Supersedes rev 3 scenario C and current non-discoverability. |
| D10 | Aliases | Numeric config, unique case-insensitive aliases, reserved default, startup validation, one ID/alias bundle. Parser format unchanged; MCP discovery/lookup is new work. |
| D11 | Startup identity | Omitted selects startup; explicit default selects unnumbered; one effective bundle per group including startup overrides. Supersedes overloaded default. |
| D12 | Snapshot compatibility | Snapshot/validate at normal startup even when connection fallback is skipped; info modes require no snapshot/network. Document new failure cases. |

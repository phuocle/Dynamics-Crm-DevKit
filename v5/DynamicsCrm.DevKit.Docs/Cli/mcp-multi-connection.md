# DevKit MCP Multi-Connection — approved implementation specification

Date: 2026-11-18 (rev 5). The user approved strict source isolation on 2026-11-18.
Status: **APPROVED — args-only and project .env are mutually exclusive. Implementation, build and 6,360 CLI regression tests passed; fresh installed-runtime/SHA, .env multi-connection and first-lazy-call version verification passed after the user's restart.**

Installed CLI: 4.44.44.44, Debug build 18.11.2026 11:25:29; assembly SHA256 D20FA760D21374E694E54DCB57910401C0851AA07B24692D1E0DAA9841D92E41 matches the manifest. All 21 build-date replacement files were restored byte-for-byte. Live .env-mode verification passed as recorded in §12.1; args-only verification remains offline/parser-based.

Scope: MCP inside DynamicsCrm.DevKit.Cli. Other CLI commands retain their existing connection fallback behavior. Source version stays 4.44.44.44.
The [HTML design review](../mcp-multi-connection-design.html) is a historical rev 3 proposal. Rev 5 supersedes rev 4 statements that permit argument/.env merging, startup argument overrides on .env groups, or unconditional snapshot loading.

## 1. Configuration source selection

Choose one mode before any project-file lookup:

| Invocation | Mode and result |
|---|---|
| devkit mcp devkit-codex | .env mode; startup uses DEVKIT_* |
| devkit mcp devkit-codex --env 99 | .env mode; startup uses DEVKIT_99_* |
| devkit mcp devkit-codex --env uat | .env mode; resolve the configured alias |
| devkit mcp devkit-codex --auth ClientSecret ... | Args-only; one organization |
| devkit mcp devkit-codex --dry-run | Args-only; missing connection arguments stop startup |
| devkit mcp devkit-codex --category all | Args-only even though all is the default |
| devkit mcp devkit-codex --env 99 --dry-run | Configuration error; never mix sources |
| devkit mcp devkit-codex --env 99 --auth ClientSecret ... | Configuration error even when arguments are complete |

The instance name does not select args-only mode. Every other explicit configuration option does, except --env, which selects an .env group. Detect option presence, including empty values and values equal to defaults. Do not infer mode only from nonempty parsed properties.

This includes connection options --conn, --auth, --url, --clientid, --clientsecret, --username, --password, --domain, --pacprofile and control/inherited options --dry-run, --category, --as-user, --transport, --json, --profile, --sdk-login and --plain.
Informational modes (--help, --setup-guide, --tools) do not start an MCP server and do not need project credentials or an .env snapshot.

## 2. Args-only mode

- Use only command-line connection values and the selected authentication builder's built-in defaults.
- Do not search for, open, snapshot, validate, merge or discover groups from .env. This includes color, aliases, dry-run and impersonation policy.
- Validate required connection fields before connecting. Missing values produce a configuration error and terminate startup; a nearby valid .env cannot rescue incomplete arguments.
- --env combined with any configuration option is an error before file access/authentication.
- --conn and --auth are mutually exclusive. Neither method silently wins.
- Create exactly one registry group: canonical default, no .env alias, source command-line arguments.
- Tool env omitted/default selects that connection. Other IDs/aliases fail without fallback.
- Explicit --dry-run and --as-user operate on this single connection; category filtering remains attribute-derived.
- --json/--profile do not authorize project-file connection fallback in MCP.
- No OS environment variables supply missing connection values.

Authentication defaults remain valid: Interactive/DeviceCode may use their built-in application IDs; FromPac may select the active PAC profile when --pacprofile is omitted. Optional values need not be supplied merely to make the argument list exhaustive.
Existing builder validation/authentication failures still fail startup and never try another source or organization.

## 3. Project .env mode

Only the bare instance name, optionally with --env, enters this mode.
Search from the process working directory upward to the drive root and read the nearest .env. Never merge parent/child files.
No file, missing startup group, incomplete startup credentials, invalid aliases/policy or failed startup authentication stops startup. Do not automatically switch to another group.

- Without --env, startup is the unnumbered DEVKIT_* group, canonical default.
- --env 99 selects DEVKIT_99_*; --env default selects DEVKIT_*.
- Aliases remain supported and are resolved from that file.
- DEVKIT_*, DEVKIT_1_* and DEVKIT_2_* declare three groups; they may serve different organizations in one process.
- Only startup connects immediately. Other groups connect lazily on their first tool call.
- Each group's connection fields come exclusively from that group. Never inherit credentials, endpoint, connection string or PAC profile from another group.
- Additional groups with incomplete credentials fail when selected; they do not replace the startup group.

A plain-output request from DEVKIT_NO_COLOR is read from this same snapshot only in .env mode.
Program must not perform its earlier independent .env color lookup before selecting the MCP mode.

## 4. Connection identity and selectors

Omitted tool env selects startup. Explicit default selects the unnumbered group; these differ when startup is numbered.
Resolve numeric IDs and aliases to one canonical bundle; a startup alias must not create a second connection.
Trim tool-selector whitespace, match aliases ignoring case, retain configured display case.
Numeric group IDs are positive decimal strings without leading zeros and have no fixed integer-size limit.
Sort default first when present, then numeric IDs by digit count and ordinal value.

In args-only mode only default exists. In .env mode only discovered groups plus the validated startup identity exist.
Unknown groups return the existing friendly tool error and available IDs, without connecting another organization.

## 5. Snapshot and discovery

McpStartupConfiguration selects the source. McpConnectionSnapshot.Load is called only in .env mode.
Take one process-lifetime snapshot for group discovery, alias/policy validation, listing and lazy initialization. File changes require restart.
Discover groups using recognized connection keys and ALIAS, DRY_RUN, AS_USER. Ignore unrelated keys and malformed numeric prefixes.
Validate aliases before authentication: start with a letter, then letters/digits/underscore/hyphen; unique ignoring case; default is reserved.

Args-only creates an empty in-memory snapshot with one default group, without probing any file.
Keep Shared ProjectEnvironment semantics unchanged for other consumers.
Do not restore missing documentation/configuration files as part of this change.

## 6. Per-group policy

In .env mode:
- Effective dry-run is the group's DRY_RUN value, otherwise DEVKIT_DRY_RUN, otherwise false.
- Strict true/false parsing remains case-insensitive after trimming; present blank, 1 or yes is invalid.
- AS_USER applies only to its own group. No impersonation inheritance.
- Configured AS_USER failures remain closed; apply CallerId before publishing the bundle.

In args-only mode:
- Policy comes only from --dry-run and --as-user; no .env policy is read.
- Preserve existing explicit --as-user role/target handling.
- --env plus either option is a configuration error.

The context/options supplied to each invocation remain fixed. Tools expose effective policy through connection_list/whoami but cannot change it.
Category readonly/all is derived from tool attributes. Explicit --category requires args-only mode and a complete connection.

## 7. Factory, registry and lifecycle

Reuse existing connection builders through McpConnectionFactory. Keep errors sanitized; do not expose credentials, raw connection strings or unrestricted builder LastError.
Reuse the registry for both modes. Cache by canonical ID using one shared asynchronous initialization per group.
Concurrent alias/ID callers share an attempt. A cancelled waiter does not cancel another caller's initialization. Failed attempts may be retried.
Shutdown stops new invocations, drains active leases, cancels pending initialization and disposes owned clients exactly once.
Do not dispose a shared client when ServiceClient.Clone returns null.

No args-only path may construct a second connection from a local .env, including after authentication failure.

## 8. Tool routing and cache isolation

Keep the 39 routed Dataverse tools, connection_list and read_instruction: 41 all / 19 readonly.
Only the 39 Dataverse tools accept optional env; resources and static instruction/discovery tools do not.
Invocation-local workers receive the selected service, metadata, Web API, options, connection info and context.
Preserve public tool names, JSON keys, output shapes, error prefixes, temp paths and domain operations.
Entity metadata caches remain isolated by service identity.
This revision changes startup source selection, not Dataverse business operations.

## 9. Output contract

whoami always emits canonical env and effective dryRun.
Its Dataverse version comes from RetrieveVersionRequest against the selected organization, including on the first lazy call.
Runtime evidence includes DevKit version/build, PID/start time, assembly path and SHA.
Non-startup results retain the existing env attribution, mirrored in text/structured summary.
Args-only has one startup default, so its normal responses have no non-startup suffix.

connection_list remains an allowlist of group identity, aliases, source, connection state and effective policy; no secrets or authentication I/O.
Args-only listing has one default row with no .env alias or policy leakage.
.env listing does not initialize lazy groups.

## 10. Startup errors and compatibility

Configuration-source conflicts, invalid selectors, missing .env/startup group and incomplete required fields exit 2 before running the server.
Builder/authentication errors retain existing failure handling; no fallback to another source is permitted.
Informational output remains available without connecting.

This intentionally removes these rev 4 behaviors:
- per-property args/.env merge, including optional fields;
- complete numbered arguments bypassing a missing selected group;
- argument URL/credential overrides on an .env startup group;
- reading aliases/policies from .env while using argument credentials;
- --env combined with --dry-run/--category/--as-user/--plain or other configuration options;
- resolved --json directory selecting the MCP .env.

Other CLI commands keep their current merge and JSON-directory behavior.
The canonical repository guidance's generic fallback description does not override this explicitly approved MCP exception.

## 11. Help and documentation

Update command description, --setup-guide, --tools, root help and option descriptions consistently.
All .env-mode examples contain only the instance name and optional --env.
Show DEVKIT_1_DRY_RUN=true in .env rather than --env 1 --dry-run.
Explain args-only mode and its complete-connection requirement for control-only options.
Keep the tool catalog unchanged; no live output may be fabricated or edited to hide an older build's behavior.

## 12. Verification and restart boundary

Focused tests must cover:
- no-selector and --env 99/alias selecting the exact .env group;
- three .env groups discovered with lazy initialization;
- complete arguments ignoring a locked/invalid .env, aliases, optional values and policies;
- partial arguments and control-only options stopping even beside valid .env;
- explicit empty/default-valued options, including --category all and --dry-run=false;
- --plain consumed by Program still selecting args-only and never probing .env for color;
- --env plus argument/control options failing before .env access;
- --conn plus --auth conflicts without leaking argument values;
- missing default not automatically selecting group 99;
- group credentials not inherited from another group;
- real CLI parser coverage, using invalid/unsupported auth to avoid live connections;
- other CLI commands retaining their existing fallback behavior.

Build the CLI, run focused and full CLI regression tests, inspect the diff and user-facing help.
Rebuild/pack/install using devkit-skill-build-cli; preserve source version and restore all build-date placeholders.
Then STOP and ask the user to restart the app. Do not restart the connector or launch a replacement MCP process.
After restart verify the installed runtime/SHA and first lazy UAT identity; capture only real output.
Do not commit or push this revision unless the user separately requests it.

### 12.1 Live .env-mode verification — 2026-11-18

- The app launched one connector using only `devkit mcp devkit-codex`. `connection_list` reported both sources as project .env, with DEV connected and UAT still disconnected before the first UAT call.
- The first `whoami {"env":"mcp-uat"}` returned Dataverse `9.2.26104.146` in text and structured content, canonical env `1`, dryRun true, and the expected UAT organization `29c6e552-e16f-ef11-a66b-6045bd1e7d8b`. Numeric ID `1` returned the same identity/version without a warmup discrepancy.
- `whoami {"env":"mcp-dev"}` returned DEV organization `82131d86-1aa7-f011-8706-00224806e819`, Dataverse `9.2.26112.137`, canonical env `default` and dryRun false.
- All three results shared PID **14484**, process start `2026-11-18T12:26:27.2400687+07:00`, version `4.44.44.44`, build `18.11.2026 11:25:29`, assembly path and SHA `D20FA760D21374E694E54DCB57910401C0851AA07B24692D1E0DAA9841D92E41`. The runtime matched the manifest and installed assembly; package SHA also matched. The process started after installation. Windows inventory independently found one matching devkit-codex process, parent PID 5408.
- Afterward both groups were connected with their own policies unchanged. Every text/structured summary matched. No live mutations, connector restarts, source edits or commits were performed during verification.
- Raw captures and verification/inventory are stored under `.devkit/verification/mcp-exclusive-2026-11-18/live/` (local, ignored). Existing historical captures were not rewritten. This proves the current .env-mode path; live args-only was not exercised and remains covered by offline/parser tests.

## 13. Historical verification — rev 4

The following records describe earlier builds. They are retained as historical evidence and do not certify rev 5 startup-source behavior.

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

No changes to non-MCP connection resolution, SDK authentication defaults, tool names or business operations. No new runtime policy toggles, configuration hot reload, cross-group credential inheritance or source version changes. No claim of live verification before the user restarts the installed client.

## 15. Approved decision status

The user approved rev 4 D1–D12 on 2026-11-17, then explicitly superseded the source-mixing parts on 2026-11-18:

| Decision | Current approved contract |
|---|---|
| D1/D2/D3 | Keep tool env, canonical whoami policy fields and non-startup attribution. |
| D4/D5/D6 | Keep numbered 41-tool captures, safe discovery metadata and the 39-tool routing scope. |
| D7 | CLI build/install and regression checks; user performs app restart; commits/push require explicit user instruction. |
| D8 | .env AS_USER is own-group only; explicit --as-user is args-only and cannot accompany --env. |
| D9 | .env per-group dry-run remains; explicit --dry-run is args-only on the single connection. |
| D10/D11 | Keep .env aliases and startup/unnumbered identity rules; args-only has only default. No startup credential overrides from args in .env mode. |
| D12 | Superseded: snapshot only in .env mode; args-only does not find/read .env for discovery, policy, color or connection fallback. |

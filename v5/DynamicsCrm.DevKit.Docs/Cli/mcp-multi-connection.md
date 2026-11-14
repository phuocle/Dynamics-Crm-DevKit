# DevKit MCP Multi-Connection — one server, per-call `env` (id or alias), per-connection policy (implementation spec)

Date: 2026-11-14 (rev 3 — **alias**: `.env` groups stay NUMERIC per aP ruling; `DEVKIT_<id>_ALIAS=prod` adds a call-by-name address. rev 2 — dry-run/impersonation moved from server-global to **per-connection**; re-analysis of dry-run vs `--category readonly`).
Status: **PROPOSAL — pending aP approval (decision points D1–D10)**.
Human-review doc: [`DynamicsCrm.DevKit.Docs/mcp-multi-connection-design.html`](../mcp-multi-connection-design.html) (safety model §5, alias rules §4.4).
Predecessor feature (shipped): [`Cli/mcp-env.md`](mcp-env.md) — `--env <id>` selects `DEVKIT_<id>_*` .env fallback group **per process**. This spec extends it to **per-call selection (id or alias) + per-connection policy** inside one server process.

Scope: CLI only (`DynamicsCrm.DevKit.Cli`, command `mcp`) + Shared `ProjectEnvironment` additions. Do not extend to `generator`, `server`, VSIX.

## 1. Problem

One MCP server process = one `ServiceClient` + one policy frozen at startup (`McpCommand.ConnectAsync` → `McpServerHost.RegisterSharedServices` registers singletons; `McpExecutionPolicy` is documented "startup-only"). To give one AI session two Dataverse connections — e.g. **PROD with dry-run for safety, DEV writable** — users must run two server processes with different flags. And to say "use UAT" in a prompt, the user must know the numeric group id. Measured 2026-11-14 (stdio probe, build `4.44.44.44 14.11.2026 07:51:43`, o200k_base tokenizer):

| Setup | Tools | Schema tokens |
|---|---|---|
| 1 server `all` | 40 | ~39,900 (171,583 chars) |
| 1 server `readonly` | 18 | ~16,800 (71,076 chars) |
| 2 servers (baseline to beat) | 80 | ~79,800, no dedup |

Goal: **one server entry, ~42K tokens**; AI passes `env: "1"` or `env: "prod"` (alias) per call; each connection carries its **own** dry-run/impersonation policy; default behavior byte-identical to today.

## 2. Design summary

- Every tool gains an optional `env: string` parameter: omitted/`"default"` = startup connection; numeric id (`"1"`) = `DEVKIT_1_*` group; **alias** (`"prod"`) = the group whose `DEVKIT_<id>_ALIAS` matches (case-insensitive).
- **Groups in `.env` are ALWAYS numeric** (aP ruling rev 3) — `DEVKIT_1_*`, `DEVKIT_2_*`, … Alias is an additional address, never a replacement for the id in configuration. This avoids the parser ambiguity of free-form group names (`DEVKIT_PROD_URL` vs default-field `DEVKIT_<FIELD>`) with **zero parser changes**.
- **Policy is per-connection**: each `ConnectionBundle` carries its own `McpDryRunOptions` + `McpExecutionContext` built from the group's effective dry-run (and impersonation, D8). PROD group with `DEVKIT_1_DRY_RUN=true` blocks mutations at the boundary while reads stay free; the DEV group without keys stays writable.
- New readonly tool `connection_list` lists groups with id, alias, and **effective** `dryRun` state (never connects, never returns secrets).
- New `McpConnectionRegistry` (singleton, thread-safe) holds the startup `ConnectionBundle` plus lazily-created bundles per group id; alias lookup is a pure map, no extra state. Per-bundle policy is immutable for the process lifetime — the AI cannot turn dry-run off.
- Startup behavior unchanged: only the default connection is created at startup (failure → exit 2); additionally all new key values (`ALIAS`, `DRY_RUN`) are validated at startup (fail-fast). Numbered groups connect lazily on first use; failed attempts are not cached (retry on next call).
- `.env` is read once at startup (key names for discovery, values when a group connects or is validated). Changing `.env` requires a server restart.

## 3. Baseline code references (current, commit `c1e64343b`)

| What | Where |
|---|---|
| Connection resolve + connect at startup | `DynamicsCrm.DevKit.Cli/Commands/McpCommand.cs` — `ResolveConnectionSettings` (:118), `ConnectAsync` (:173), `ConnectModernAsync` (:228) |
| DI singletons freezing one client | `DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs` — `RegisterSharedServices` (:144) |
| Policy source (becomes per-connection) | `DynamicsCrm.DevKit.Cli/Mcp/McpServerOptions.cs:13` — `McpExecutionPolicy(mutationsBlocked, impersonatedUserDisplay)` → `Options` + `Context` |
| Mutation boundary | `McpExecutionContext.AssertMutationAllowed` — 29 tools inject `McpExecutionContext`, 23 inject `McpDryRunOptions`; executors `DataverseMutationExecutor` / `DataverseWebApiMutationExecutor` receive `context` **as argument** (no signature change needed) |
| DryRun output | `Mcp/Tools/Helper/McpToolResults.cs` — `DryRunPrefix = "[DryRun]"`, `DryRun(summary, structured)` duplicates summary into structured `summary` key |
| Impersonation | `McpCommand.ResolveAsUser` + `RoleGateHelper.IsSystemAdministrator` — resolve, admin-gate, ignore-with-warning semantics |
| Non-connection key precedent | `ProjectEnvironment.NoColor = "DEVKIT_NO_COLOR"` — a `DEVKIT_*` key outside `ConnectionKeys`; `ALIAS` follows the same pattern |
| Group helpers (reuse) | Shared `ProjectEnvironment`: `Read`, `HasGroup`, `GetValue(values, key, groupId)` overload exists, `IsValidGroupId`, `GetGroupKey`, `GetGroupPrefix`, `ResolveFileFromJsonOrDirectory` |
| Builders (reuse) | `DynamicsCrm.DevKit.Shared/ConnectionBuilder/`: `ConnectionBuilderFactory`, `LegacyConnectionBuilder` |
| Error 3-part pattern | `[Error]` / `[Hint]` / `[Detail]` — no tags/tables in error text, lists in `[Detail]` JSON |

## 4. New components

### 4.1 `Mcp/ConnectionBundle.cs` (new)

```csharp
namespace DynamicsCrm.DevKit.Cli.Mcp
{
    /// <summary>All service dependencies + policy derived from ONE connected ServiceClient.</summary>
    internal sealed class ConnectionBundle
    {
        public string EnvId { get; }                    // "default" or numeric group id ("1", "2", ...) — canonical
        public string Alias { get; }                    // alias as written in .env, or null
        public ServiceClient Client { get; }
        public MetadataService Metadata { get; }
        public IMcpConnectionInfo ConnectionInfo { get; }
        public IWebApiExecutor WebApi { get; }
        public McpDryRunOptions Options { get; }        // per-connection policy (was server-global)
        public McpExecutionContext Context { get; }     // per-connection policy (was server-global)
        public string Source { get; }                   // resolved connection source text (startup log format)
        public bool IsStartupDefault { get; }
        // IOrganizationService / IOrganizationServiceAsync2 projections read from Client.
        // Policy built once at bundle creation via McpExecutionPolicy(mutationsBlocked, impersonatedUserDisplay).
    }
}
```

### 4.2 `Mcp/IMcpConnectionResolver.cs` + `Mcp/McpConnectionRegistry.cs` (new)

```csharp
internal interface IMcpConnectionResolver
{
    /// <summary>null/whitespace/"default" returns the startup bundle. Numeric id resolves its group.
    /// Alias resolves case-insensitively to its group. Unknown value throws McpUnknownEnvException.</summary>
    ConnectionBundle Resolve(string env);
    /// <summary>Groups declared in .env (key-name scan) with their EFFECTIVE policy for display. No Dataverse I/O.</summary>
    IReadOnlyList<ConnectionGroupInfo> ListGroups();
}

internal sealed class ConnectionGroupInfo
{
    public string EnvId;            // "default" or numeric id — canonical address
    public string Alias;            // as written in .env, or null
    public bool IsStartupDefault;
    public bool Connected;          // bundle exists
    public string AuthType;         // non-secret
    public string Url;              // non-secret
    public string ClientId;         // non-secret
    public string Username;         // non-secret
    public bool DryRun;             // EFFECTIVE value after cascade (§4.5)
    public string Impersonating;    // display name if set for this group, else null
    public string Source;           // "project .env (DEVKIT_1_*)" etc.
}
```

Registry rules:

- `ConcurrentDictionary<string, Lazy<ConnectionBundle>>` keyed by numeric id (and `"default"`); a separate case-insensitive alias→id map built at startup. One connection per group, ever.
- `Resolve("prod")` and `Resolve("1")` return the same bundle when group 1's alias is `prod`.
- Lazy connect reuses the **same** extracted factory as startup (4.3): same builders, same validation, same secret decrypt, same error surface. Apply `ServiceClient.MaxConnectionTimeout = 1h`; set `CallerId = impersonatedUserId` when the group's impersonation resolves (D8).
- Per-bundle policy built once at bundle creation: `new McpExecutionPolicy(effectiveDryRun, impersonatedDisplay)` — reuse the existing "single source" class so `Options` and `Context` cannot drift.
- `Resolve` throws `McpUnknownEnvException(requested, availableGroups)` for unknown values; tools catch and render §8 errors.
- A failed lazy connect must NOT be cached; the next call retries.
- Policy/validation failures (invalid `ALIAS` or `DRY_RUN` values, duplicate aliases) are caught at STARTUP (§4.4), not lazily.

### 4.3 Extract `McpConnectionFactory` from `McpCommand` (refactor)

Move `ResolveConnectionSettings` + `ConnectAsync` + `ConnectModernAsync` + `ValidateGroupRequiredFields` + `GetConnectionUserName` + impersonation resolution (`ResolveAsUser`, `RoleGateHelper` gate) into an internal static factory (e.g. `Mcp/McpConnectionFactory.cs`) with an entry like:

```csharp
// groupId == null → startup/default path (exact current behavior + cascade)
// groupId != null → lazy path: same resolution against DEVKIT_<id>_*, same builders,
//                   plus per-group policy: effective dry-run (§4.5 cascade) + per-group impersonation (D8)
internal static async Task<ConnectionBundle> ConnectGroupAsync(
    McpCommandArgs args, string groupId, IReadOnlyDictionary<string,string> envValues)
```

`McpCommand` keeps its logs and exit codes; startup output must stay identical. `--env` validation extends from `IsValidGroupId` to `IsValidGroupRef` (numeric id **or** alias charset); `--env prod` resolves the alias → group 1 becomes the startup default connection, logged as `Fallback group: 1 (alias 'prod') (DEVKIT_1_*)`. The impersonation "resolve or ignore-with-warning" semantics run **per connection** at that bundle's connect time (startup logs unchanged for the default group).

### 4.4 `ProjectEnvironment` additions (Shared)

```csharp
/// <summary>Returns positive-integer group ids that have at least one DEVKIT_&lt;id&gt;_* key in the parsed .env,
/// ordered numerically. Never reads values; never includes the default group.</summary>
public static IReadOnlyList<string> GetAvailableGroupIds(IReadOnlyDictionary<string,string> values)
```

New keys (NOT added to `ConnectionKeys` — they are not connection fields; old builds safely ignore them):

| Key | Applies to | Values | Meaning |
|---|---|---|---|
| `DEVKIT_<id>_ALIAS` | numbered group | see rules below | call-by-name address for that group |
| `DEVKIT_ALIAS` | default group (D10) | see rules below | call-by-name address for the default group |
| `DEVKIT_DRY_RUN` | default group (when `--dry-run` flag not passed) | `true` / `false` (case-insensitive, strict) | mutations blocked on default group |
| `DEVKIT_<id>_DRY_RUN` | numbered group | `true` / `false` | mutations blocked on that group |
| `DEVKIT_AS_USER` | default group (when `--as-user` flag not passed) | GUID or email | impersonate on default group (D8) |
| `DEVKIT_<id>_AS_USER` | numbered group | GUID or email | impersonate on that group (D8) |

**Alias rules (normative):**

1. Charset `[A-Za-z][A-Za-z0-9_-]*` — must start with a **letter** ⇒ the alias value space never overlaps numeric ids (`"1"` is always an id, `"prod"` is always an alias).
2. Matched case-insensitively; displayed as written in `.env`.
3. Reserved: `default` (any case) is forbidden — it collides with the reserved param value. Startup error.
4. Unique across groups including the default group's alias; two groups whose aliases differ only by case → startup error (exit 2).
5. Optional: groups without an alias are addressable by numeric id only. Empty/whitespace value = no alias.
6. Invalid charset / reserved / duplicate → startup error (exit 2), same pass that validates `DRY_RUN` values.
7. `HasGroup` semantics unchanged: any `DEVKIT_<id>_*` key (now including `ALIAS`) marks the group as declared; a group with only an alias surfaces in `connection_list` but fails on connect with the existing missing-keys error.

### 4.5 Dry-run cascade (normative — see design doc §5.2)

Effective dry-run per group (keyed by numeric id; alias is only an address), first match wins:

1. `DEVKIT_<id>_DRY_RUN` key → that value.
2. Startup `--dry-run` flag → `true` for default group AND inherited by numbered groups without their own key.
3. `DEVKIT_DRY_RUN` key (default group; inherited by numbered groups without their own key).
4. `false`.

Verified scenarios (must be unit-tested): (A) no flag no keys → all `false` (today); (B) `--dry-run` no keys → all `true` (today); (C) `--dry-run` + `DEVKIT_1_DRY_RUN=false` → default `true`, group 1 `false`; (D) no flag + `DEVKIT_1_DRY_RUN=true` → default `false`, group 1 `true` (**the prod/dev scenario**); (E) `DEVKIT_DRY_RUN=true`, group 1 without key → both `true` (inheritance).

Impersonation cascade (D8, same shape): group key > inherited effective default-group value (flag > `DEVKIT_AS_USER` > none for the default group).

## 5. `env` parameter contract (all 40 Dataverse tools)

- Name `env`, C# `string env = null`, **first parameter** of each tool method.
- Schema: optional (never in `required`).
- Description text — verbatim, identical on every tool:

```
Optional .env connection group (numeric id like "1" or alias like "prod") to target for this call. Omit to use the startup connection. Use connection_list to list groups.
```

- Accepted values: omitted/null/empty → startup bundle; `"default"` → startup bundle; numeric id → that group; alias → case-insensitive alias lookup; otherwise §8 error #1.
- Resource tools (`read_instruction` and other `McpServerResource` surfaces) do NOT get the parameter (D6).
- Mechanical change per tool class:
  1. Constructor: add `IMcpConnectionResolver connections`; keep existing parameters during the transition (or drop them if every call site is migrated in the same commit — pick one, be consistent).
  2. Tool method body: first line `var conn = _connections.Resolve(env);` then use `conn.Client` / `conn.Metadata` / `conn.Options` / `conn.Context` instead of the constructor-injected singletons **inside that method**.
  3. Helpers that take `IOrganizationService` / `McpExecutionContext` / `McpDryRunOptions` as arguments keep their signatures — pass the resolved bundle members down. No helper changes.

## 6. Policy per connection — execution behavior

- Mutation boundary: `conn.Context.AssertMutationAllowed(...)` — the blocked result is produced via `McpToolResults.DryRun(summary, structured)` exactly as today, with the summary suffixed ` | env <value-as-passed>` when the connection is not the startup default: `[DryRun] Mutation blocked: Create account | env prod` (D3 echo rule).
- Reads are NEVER affected by dry-run (unchanged rule) — PROD with dry-run remains fully readable, enabling safe compare workflows.
- Dry-run state cannot be changed at runtime by the AI or by any tool call (immutable per process; `.env` reload requires restart).
- Startup validation (fail-fast, exit 2): every `DEVKIT*_DRY_RUN` value must parse as strict `true`/`false`; every `*_ALIAS` value must satisfy §4.4 rules. Messages: `[DevKit MCP ERROR] Invalid DEVKIT_1_DRY_RUN value 'yes' in the project .env. Expected 'true' or 'false'.` / `[DevKit MCP ERROR] Duplicate alias 'prod' in the project .env (DEVKIT_1_ALIAS, DEVKIT_3_ALIAS). Aliases must be unique.` / `[DevKit MCP ERROR] DEVKIT_1_ALIAS uses the reserved name 'default'. Choose another alias.`

## 7. New tool `connection_list` (readonly)

- `[McpServerTool(Name = "connection_list", ReadOnly = true, Idempotent = true, Destructive = false, UseStructuredContent = true)]`, title: `List .env connection groups, aliases and per-connection policy`.
- Category: readonly → counts become readonly **19**, all **41** (`McpServerHost` derives counts from attributes — no manual mapping).
- No `env` parameter on this tool itself (it never connects).
- Output shape:

```json
{
  "groups": [
    { "env": "default", "alias": "dev", "isStartupDefault": true,  "connected": true,
      "authType": "ClientSecret", "url": "https://dev-org.crm.dynamics.com",
      "clientId": "…", "username": null,
      "dryRun": false, "impersonating": null,
      "source": "project .env (DEVKIT_*)" },
    { "env": "1", "alias": "prod", "isStartupDefault": false, "connected": false,
      "authType": "ClientSecret", "url": "https://prod-org.crm.dynamics.com",
      "clientId": "…", "username": null,
      "dryRun": true, "impersonating": null,
      "source": "project .env (DEVKIT_1_*)" }
  ],
  "summary": "[Success] Found 2 connection group(s): default (startup), 1 (prod)."
}
```

- `env` = canonical numeric id (always addressable); `alias` = name or `null`. The AI can pass either.
- `dryRun` is the EFFECTIVE cascade value — the safety-visibility surface for the AI and the human reviewer.
- Summary line appends ` (<alias>)` after each id that has one, and ` (dry-run: mutations blocked)` after each protected group; e.g. `Found 3 connection group(s): default (startup), 1 (prod) (dry-run: mutations blocked), 2 (uat).`
- NEVER include `clientSecret`, `password`, or `--conn` string contents (D5: clientId/username/url/authType/dryRun allowed — all already visible in startup logs).
- With only the startup connection and no alias: one group row, summary `[Success] Found 1 connection group(s): default (startup).`

## 8. Errors (3-part pattern, exact texts)

Unknown group / alias (tool-level catch of `McpUnknownEnvException`):

```
[Error] Unknown connection group 'xyz'.
[Hint] Use connection_list to list available groups, or omit env (or pass "default") to use the startup connection.
[Detail] { "requested": "xyz", "availableGroups": ["default", "1 (prod)", "2 (uat)"], "startupDefault": "default" }
```

Lazy connect failure:

```
[Error] Connection failed for group '1': <LastError>
[Hint] Fix the DEVKIT_1_* keys in the project .env, then retry; the server does not reload .env while running.
[Detail] { "requested": "1", "authType": "ClientSecret", "url": "https://prod-org.crm.dynamics.com" }
```

Missing group keys (group id present but `AUTH_TYPE`/`CONN` absent for it):

```
[Error] Environment group '1' has no DEVKIT_1_AUTH_TYPE (or DEVKIT_1_CONN) key in the project .env.
[Hint] Add the missing keys or remove the group; use connection_list to verify.
[Detail] { "requested": "1", "availableGroups": ["default", "2"] }
```

Invalid policy/alias values — startup, exit 2, stderr `[DevKit MCP ERROR]` (exact texts in §6).

Mutation blocked on a protected group (per D3 echo tagging, produced by `McpToolResults.DryRun`):

```
[DryRun] Mutation blocked: Create account | env prod
```

No new tags/tables in error text; lists live in `[Detail]` JSON.

## 9. `whoami` changes

- Adds `string env = null` parameter (like every tool) and two fields to `WhoAmIResult` structured output (D2: always present, even for default):
  - `"env"`: `"default"` when the call resolved to the startup bundle (omitted, `"default"`, or an alias of the default group), otherwise **the value as passed** (id or alias) — matches the prompt language for verification.
  - `"dryRun"`: `true`/`false` — the effective policy of the connection used.
- Compact text: when the resolved connection is not the startup default, append ` (env <value-as-passed>)` at the end. Default calls keep the exact current text.

## 10. Output tagging rule (all other tools)

- Echo rule: when the resolved connection is not the startup default, append ` | env <value-as-passed>` to the END of the tool's summary first line (also on the `[DryRun]` blocked text, §8). Default-resolution calls (any spelling, including a default-group alias) produce **zero changes** to any byte (G3).
- Structured content of other tools is unchanged (the tag lives in the summary text only).

## 11. Server instructions & discovery

`BuildServerInstructions` gains one clause **only when at least one numbered group (or a default alias) exists**:

```
Connection groups: default (startup), 1 (prod; dry-run: mutations blocked), 2 (uat). Pass the optional env parameter on any tool call to target a group by numeric id or alias; call connection_list for details.
```

(`(dry-run: mutations blocked)` appears only for groups whose effective dry-run is `true`; `(<alias>)` only when defined.) Single-group setups get no extra text.

## 12. DI wiring (`McpServerHost.RegisterSharedServices`)

```csharp
// before (frozen singletons)                         // after
services.AddSingleton(serviceClient);                services.AddSingleton(resolver);            // IMcpConnectionResolver
services.AddSingleton(new MetadataService(sc));      // default bundle prebuilt at startup, held by resolver
services.AddSingleton<IOrganizationService>(...);    // keep for helper resolution, sourced from resolver.Resolve(null)
services.AddSingleton<IMcpConnectionInfo>(...);      // same
services.AddSingleton<IWebApiExecutor>(...);         // same
services.AddSingleton(executionPolicy);              // REMOVED as global — policy now per-bundle (kept inside bundles);
                                                     // keep registrations ONLY if some tool still injects it directly
```

`McpServerHost` constructor takes `IMcpConnectionResolver` (or the prebuilt default `ConnectionBundle` + registry) instead of a raw `ServiceClient`. `RunAsync` keeps its current signature for category filtering; `BuildServerInstructions` keeps receiving the startup client's org info plus the group/alias/policy list (§11). Startup logs, exit codes, and `--setup-guide` flow unchanged.

## 13. `--setup-guide` additions

Section 2: document the new keys (`DEVKIT[_<id>]_ALIAS`, `DEVKIT[_<id>]_DRY_RUN`, and `AS_USER` if D8) with the prod/dev example (`DEVKIT_1_DRY_RUN=true`, `DEVKIT_1_ALIAS=prod`), the alias rules (charset, unique, reserved `default`, case-insensitive), and the cascade sentence. Section 4: one instance can serve multiple groups — tools take the optional `env` parameter accepting id or alias; protect any group with `DRY_RUN`; the second client entry becomes optional. Keep existing multi-instance text (still valid). Keep the `[name]` vs alias distinction: `[name]` labels the process/instance (mcp-env.md ruling), alias labels the connection group.

## 14. Test plan (`DynamicsCrm.DevKit.Cli.UnitTests`, MSTest, net10.0)

1. `ProjectEnvironmentTests`: `GetAvailableGroupIds` — non-consecutive ids, numeric ordering, ignores `DEVKIT_*` default, ignores malformed ids, key-name-only; `DRY_RUN` parse — strict true/false (reject `yes`, `1`, empty), case-insensitive.
2. Alias tests: charset rules (accept `prod`, `dev-2`, `my_env`; reject `1dev`, `_x`, empty-string-as-alias semantics); reserved `default` rejected; duplicate aliases (exact and case-variants) rejected; case-insensitive resolution `Resolve("PROD") == Resolve("prod") == group 1`; alias of default group resolves to default bundle; unknown alias error lists `id (alias)` pairs.
3. Cascade tests (normative §4.5): scenarios A–E exactly.
4. Registry tests: default resolution; `"default"`/null/whitespace equivalence; numeric + alias paths hit the same bundle; unknown id → `McpUnknownEnvException` with available list; lazy creation once (factory called once per group); failed connect not cached (retry on next call); concurrent `Resolve` same id → single creation; per-bundle policy values match cascade.
5. Policy execution tests: mutation on protected group → `[DryRun]` text WITH ` | env <value-as-passed>` suffix and structured `summary` matching; reads never blocked; default-group mutation text byte-stable.
6. `connection_list` tests: 1-group and multi-group shapes; `alias`/`dryRun`/`impersonating` per group; secrets never present (assert serialized output does not contain secret values); readonly category membership (counts 19/41 via `GetFilteredToolTypeNames`).
7. `whoami` tests: `env` + `dryRun` fields present; ` (env <value>)` suffix only for non-default; default text byte-stable (including default-group alias calls).
8. Error text tests: exact 3-part strings for unknown group / connect failure / missing group keys; startup exit-2 messages for invalid `DRY_RUN` and invalid/duplicate/reserved alias.
9. Impersonation per-connection (if D8): group key overrides; ignore-with-warning preserved; CallerId applied to lazy client.
10. `--env <alias>` startup: alias resolution at startup, log line `Fallback group: 1 (alias 'prod') …`.
11. Dry-run interplay: `--dry-run` global flag still blocks every group when no keys exist (scenario B).
12. Existing `mcp-env` (150) tests: must pass unchanged.
13. MethodLevel-parallel rules apply; mark shared-state classes `[DoNotParallelize]`; keep `WaitScalePercent` behavior.

## 15. Acceptance criteria

- [ ] No `env` param passed → every tool's output byte-identical to current build (except `whoami`'s new `env`+`dryRun` fields per D2).
- [ ] `tools/list` shows 41 tools (`all`) / 19 (`readonly`); every Dataverse tool schema contains the `env` param with the exact §5 description.
- [ ] Scenario D end-to-end: `whoami { "env": "prod" }` returns the group-1 org with `"env": "prod"`, `"dryRun": true`; `manage_record create` with `env: "prod"` returns `[DryRun] Mutation blocked: … | env prod`; the same call without `env` succeeds.
- [ ] `env: "1"` and `env: "prod"` hit the same group; both are documented in `connection_list`.
- [ ] Reads on a protected group are never blocked.
- [ ] Two parallel calls (default + group 1) return correct per-env data and per-env policy; no cross-talk.
- [ ] `--as-user` semantics unchanged for default group; D8 behavior per-group if approved.
- [ ] Invalid `DEVKIT_1_DRY_RUN` value, invalid/duplicate/reserved alias → startup exit 2 with the exact §6 messages.
- [ ] Re-measured schema ≈ 42.3K tokens (o200k probe) vs 79.8K for two servers.
- [ ] All unit test projects pass; `mcp-env` suite 150/150.
- [ ] Startup failure modes unchanged (exit 2 with current messages) plus the new key validation.

## 16. Out of scope / non-goals

- No free-form named group keys (`DEVKIT_PROD_URL`) — groups stay numeric; alias is the only name layer (aP ruling rev 3).
- No per-connection `--category`: category filters the process-wide tool catalog (one `tools/list`); per-connection mutation safety is L2 dry-run's job (design doc §5.1).
- No runtime `.env` reload (restart required — C5); no runtime policy mutation (bundles immutable).
- No cross-env aggregate tools — the AI composes two calls.
- No changes to other CLI commands, VSIX, or the existing `.env` connection-key semantics.
- Resource surfaces (`docs://`, `schema://`) do not get `env`.

## 17. Decision points (pending aP — do not code past these)

| # | Question | Recommendation |
|---|---|---|
| D1 | Param name `env` vs `connection` | `env` (parity with `--env`) |
| D2 | `whoami` always emits `env` + `dryRun` fields (re-capture `TestAllMcpCall/18.whoami.md` once) | Yes |
| D3 | ` | env <value-as-passed>` summary tag on every tool when non-default, including `[DryRun]` blocked text | Yes |
| D4 | `TestAllMcpCall` numbering for `connection_list` (insert alphabetically in readonly block → renumber, or append) | Follow existing alphabetical convention |
| D5 | `connection_list` exposes clientId/username/url/dryRun/alias | Yes (non-secret; already in startup logs) |
| D6 | `env` param scope: 40 Dataverse tools only, resources excluded | Yes |
| D7 | Rollout: per-WU commits then `build-release-only`, ZCode needs new session to see the new schema | Yes |
| D8 | Impersonation per-connection: `DEVKIT[_<id>]_AS_USER` keys (§4.5 cascade, resolve per connection) | Yes — same pattern as dry-run; drop if unneeded, dry-run is independent |
| D9 | Dry-run cascade (§4.5) + strict `true`/`false` + startup fail-fast validation | Yes — preserves today's behavior in scenarios A/B, enables prod/dev in C/D |
| D10 | **Alias** per §4.4: `DEVKIT[_<id>]_ALIAS`, charset `[A-Za-z][A-Za-z0-9_-]*`, case-insensitive, unique, reserved `default`, fail-fast startup; `env`/`--env` accept id or alias; echo tagging | Yes — numeric stays canonical (ruling rev 3); alias is only an address; zero parser changes |

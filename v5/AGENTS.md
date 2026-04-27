# DynamicsCrm.DevKit — Claude Code Instructions

## 1. Think Before Coding

> *"Don't assume. Don't hide confusion. Surface tradeoffs."*

Before implementing anything non-trivial:

- State assumptions explicitly — read the actual code first, do not infer from filenames
- If multiple valid approaches exist, present the tradeoffs — do not silently pick one
- If a simpler path exists, say so before starting
- Stop and ask when the task is ambiguous and getting it wrong would be costly

**This project:** If it is unclear whether a change belongs in `Cli`, `Shared`, or `DynamicsCrm.DevKit` (VSIX) — ask. These are separate components with different frameworks (.NET 10, .shproj, .NET Framework 4.8). Getting the wrong one means code in the wrong binary.

---

## 2. Simplicity First

> *"Minimum code that solves the problem. Nothing speculative."*

- No features beyond what was asked
- No abstractions for single-use code
- No docstrings, type annotations, or comments added to code you did not change
- No error handling for scenarios that cannot actually happen
- Prefer editing existing files over creating new ones

**Self-test:** Would a senior engineer call this overengineered? If yes, simplify.

**This project:** `Helper.cs` and `XrmHelper.cs` are large by design — do not refactor them unless explicitly asked. `McpServerHost.ToolCategoryMap` uses `nameof()` for compile-time safety — preserve that pattern when adding tools.

---

## 3. Surgical Changes

> *"Touch only what you must. Clean up only your own mess."*

- Do not improve adjacent code, comments, or formatting you were not asked to touch
- Do not refactor things that are not broken
- Match existing style even if you would do it differently
- If you notice unrelated dead code, mention it — do not delete it
- Only remove imports/variables/functions that *your current change* made unused

**Self-test:** Every changed line should trace directly back to the user's request.

**This project:**
- Editing `Cli\Mcp\Tools\*` — preserve existing error text, output shape, structured result fields, and temp-file paths unless the task explicitly changes them
- Editing a single component → run only that component's build, not the full solution
- `Const.cs` contains build-time placeholders (`x.xx.xx.xx`, `xxxx.yy.zz HH.mm.ss`) — never commit this file while placeholders are replaced

---

## 4. Goal-Driven Execution

> *"Define success criteria. Loop until verified."*

Transform imperative tasks into verifiable goals:

| Vague request | Verifiable goal |
|---|---|
| "fix bug" | write a test that reproduces it → make it pass |
| "add validation" | write tests for invalid inputs → make them pass |
| "refactor X" | ensure tests pass before and after |

For multi-step tasks, state a brief plan first:
```
1. [step] → verify: [how to confirm]
2. [step] → verify: [how to confirm]
```

**This project:** After editing code, run the corresponding build workflow to verify. Do not declare done before the build passes.

---

## ⛔ Never Do

```
git add / git commit / git push       — only via /claude-commit when explicitly asked
dotnet build / dotnet test            — only via /claude-build-* workflows
/claude-build-debug or build-release  — only when user explicitly invokes them
bash syntax / Unix pipes / &&         — PowerShell only; use ; instead of &&
credentials in code                   — use env vars or Azure Key Vault
```

---

## Build Workflows

| Edited area | Run this |
|---|---|
| `DynamicsCrm.DevKit.Cli\**` | `/claude-build-cli` |
| `DynamicsCrm.DevKit\**` | `/claude-build-vsix` |
| `DynamicsCrm.DevKit.Analyzers\**` | `/claude-build-analyzer` |
| `DynamicsCrm.DevKit.Tool\**` | `/claude-build-tool` |
| Unit tests | `/claude-unit-test` |

After editing any file under `DynamicsCrm.DevKit.Cli\Mcp\`:
1. Run `/claude-build-cli`
2. Kill the MCP process so it auto-restarts:
```powershell
Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force
```

---

## Project Map

| Component | Path | Framework |
|---|---|---|
| VSIX (VS 2026 extension) | `DynamicsCrm.DevKit/` | .NET Framework 4.8 |
| CLI (`devkit` tool) | `DynamicsCrm.DevKit.Cli/` | .NET 10.0 |
| Analyzers (DEVKIT1001–1021) | `DynamicsCrm.DevKit.Analyzers/` | .NET Standard 2.0 |
| Shared (code gen + Dataverse) | `DynamicsCrm.DevKit.Shared/` | Shared Project (.shproj) |
| MCP server (33 tools) | `DynamicsCrm.DevKit.Cli/Mcp/` | inside CLI |

Key entry points:
- CLI: `DynamicsCrm.DevKit.Cli/Program.cs` → `CommandApp` (Spectre.Console.Cli)
- CLI base command: `Commands/DevKitCommand<T>` → handles connection, validation, output
- MCP: `Mcp/McpServerHost.cs` → `ToolCategoryMap` controls which tools load per tier
- Code gen: `Shared/Helper.cs`, `Shared/XrmHelper.cs`
- VSIX: `DynamicsCrm.DevKit/DevKitPackage.cs` → 13 ProjectTemplates, 17 ItemTemplates

---

## CLI Architecture

```
Commands/  → DevKitCommand<T> (base: connection, validation, header, exit codes)
Models/    → DevKitCommandArgs (base) → specific args per command
Tasks/     → ITask → TaskXxx implementations
Mcp/       → McpServerHost + Tools/ + Resources/ + Services/
```

Command → Task mapping:

| Command | Task |
|---|---|
| `generator` | `TaskGenerator` |
| `server` | `TaskServer` |
| `webresource` | `TaskWebResource` |
| `modelbuilder` | `TaskModelBuilder` |
| `solution` | `TaskPacSolutionPackager` |
| `mcp` | `McpServerHost` |

Deprecated: `plugin`, `workflow`, `dataprovider` → use `server`; `proxytype` → use `modelbuilder`

Auth priority: `--conn` > `--auth/--url/...` > env vars (`DEVKIT_*`) > empty
Auth types: `Interactive`, `DeviceCode`, `ClientSecret`, `FromPac`, `OAuth` (legacy), `AD` (on-prem)

---

## MCP Tools

33 tools across 3 tiers (`basic` / `standard` / `advanced`). Do not add `[McpServerToolType]` to helper classes — only tool classes get that attribute. When splitting a large tool, keep the entry class in `DynamicsCrm.DevKit.Cli.Mcp.Tools`, put domain helpers in subnamespaces (`Tools.Form`, `Tools.Ribbon`, `Tools.SiteMap`). Keep `ToolCategoryMap` in sync.

---

## Analyzers

21 analyzers, IDs `DEVKIT1001`–`DEVKIT1021`. All inherit `BaseDiagnosticAnalyzer`. Core is in `Analyzers/Core/`: `DiagnosticIdentifiers.cs`, `DiagnosticDescriptors.cs`, `AnalyzerHelper.cs`. Unit tests use xUnit targeting net48.

---

## Naming & Conventions

- `ServiceClient` variable → `serviceClient`
- `IOrganizationService` variable → `crmService`
- Preserve existing public command names, tool names, and JSON keys
- Prefer existing helpers in `DynamicsCrm.DevKit.Shared` and `Mcp/Tools/Helper/` before creating new ones
- All docs → `DynamicsCrm.DevKit.Docs/{ComponentName}/` as `.md` files

---

## PowerShell (Windows only)

```powershell
cmd1 ; cmd2                                      # not &&
Get-ChildItem -Recurse -Filter "*.cs"            # not find
Select-String -Pattern "text" -Path .\file.cs    # not grep
Remove-Item -Recurse -Force .\folder             # not rm -rf
$env:VAR = "value"                               # not export
```

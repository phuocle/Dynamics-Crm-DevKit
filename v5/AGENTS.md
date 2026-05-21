# DynamicsCrm.DevKit

## Component Boundaries

If unsure whether a change belongs in `Cli`, `Shared`, or `DynamicsCrm.DevKit` (VSIX) — ask. Different frameworks, different binaries.

| Component | Path | Framework |
|---|---|---|
| VSIX (VS 2026 extension) | `DynamicsCrm.DevKit/` | .NET Framework 4.8 |
| CLI (`devkit` tool) | `DynamicsCrm.DevKit.Cli/` | .NET 10.0 |
| Analyzers (DEVKIT1001–1021) | `DynamicsCrm.DevKit.Analyzers/` | .NET Standard 2.0 |
| Shared (code gen + Dataverse) | `DynamicsCrm.DevKit.Shared/` | Shared Project (.shproj) |
| MCP server (33 tools) | `DynamicsCrm.DevKit.Cli/Mcp/` | inside CLI |

Key entry points:
- CLI: `DynamicsCrm.DevKit.Cli/Program.cs` → `CommandApp` (Spectre.Console.Cli)
- CLI base command: `Commands/DevKitCommand<T>` → connection, validation, output
- MCP: `Mcp/McpServerHost.cs` → `ToolCategoryMap` controls which tools load per tier
- Code gen: `Shared/Helper.cs`, `Shared/XrmHelper.cs` (large by design — do not refactor unless asked)
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

33 tools across 3 tiers (`basic` / `standard` / `advanced`).

- Only tool classes get `[McpServerToolType]` — never on helper classes
- When splitting a large tool: entry class stays in `DynamicsCrm.DevKit.Cli.Mcp.Tools`, domain helpers go in subnamespaces (`Tools.Form`, `Tools.Ribbon`, `Tools.SiteMap`)
- `ToolCategoryMap` uses `nameof()` for compile-time safety — preserve when adding tools, keep in sync
- Editing `Cli\Mcp\Tools\*` — preserve existing error text, output shape, structured result fields, and temp-file paths unless the task explicitly changes them

---

## Analyzers

21 analyzers, IDs `DEVKIT1001`–`DEVKIT1021`. All inherit `BaseDiagnosticAnalyzer`. Core in `Analyzers/Core/`: `DiagnosticIdentifiers.cs`, `DiagnosticDescriptors.cs`, `AnalyzerHelper.cs`. Unit tests use xUnit targeting net48.

---

## Conventions

- `ServiceClient` variable → `serviceClient`
- `IOrganizationService` variable → `crmService`
- Preserve existing public command names, tool names, and JSON keys
- Prefer existing helpers in `DynamicsCrm.DevKit.Shared` and `Mcp/Tools/Helper/` before creating new ones
- All docs → `DynamicsCrm.DevKit.Docs/{ComponentName}/` as `.md` files

---

## Watch Out

- `4.99.99.99` is the stable source version. Release/debug scripts replace only the build-date placeholder `xxxx.yy.zz HH.mm.ss`; never commit files while date replacements are still applied.
- Editing a single component → run only that component's build, not the full solution

Build workflows and MCP restart procedure: see `.claude/rules/core-rule.md`.

# DynamicsCrm.DevKit - AI Agent Instructions

> **Purpose**: This file provides instructions for AI coding agents (GitHub Copilot, OpenCode, Cursor, Antigravity, etc.) working with this codebase.

## Project Overview

**DynamicsCrm.DevKit** is a development toolkit for Microsoft Dynamics 365 / Power Platform / Dataverse. It includes:

| Component | Path | Description |
|-----------|------|-------------|
| **VSIX** | `DynamicsCrm.DevKit/` | Visual Studio 2026 extension with 13 project templates, 15 item templates |
| **CLI** | `DynamicsCrm.DevKit.Cli/` | .NET 10 global tool for CI/CD automation (14 commands) |
| **Analyzers** | `DynamicsCrm.DevKit.Analyzers/` | 21 Roslyn analyzers (DEVKIT1001-1021) |
| **Shared** | `DynamicsCrm.DevKit.Shared/` | Common logic, XrmHelper, client-side resources |
| **Tool** | `DynamicsCrm.DevKit.Tool/` | Utility package |
| **Tests** | `DynamicsCrm.DevKit.Tests/` | Integration tests |
| **Docs** | `DynamicsCrm.DevKit.Docs/` | Documentation files |

---

## Response Format (Vietnamese)

- **Start with**: `"[emoji] Xin chào buổi [sáng/trưa/chiều/tối] anh Phước [emoji]"` (based on current time)
- **End with**: `"[emoji] Tôi đã là xong rồi anh Phước, hãy kiểm tra lại những gì tôi làm nhé [emoji]"`

---

## Critical Constraints

> [!IMPORTANT]
> AI agents MUST use **DEBUG mode** for all builds. Release mode requires PFX signing key password (human only).

### Build Tool

| Setting | Value |
|---------|-------|
| **Tool** | MSBuild (NOT `dotnet build` for VSIX) |
| **Path** | `C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe` |
| **Mode** | DEBUG only |

### Target Frameworks

- .NET Framework 4.6.2, 4.8
- .NET Standard 2.0
- .NET 10.0 (CLI only)

### Naming Conventions

| Type | Variable Name |
|------|---------------|
| `ServiceClient` | `serviceClient` |
| `IOrganizationService` | `crmService` |

---

## Workflows (Slash Commands)

Use these workflows for building:

| Workflow | Command | Description |
|----------|---------|-------------|
| `/build-debug` | Full build | Build all projects + install CLI locally |
| `/build-cli` | CLI only | Build and install CLI tool |
| `/build-vsix` | VSIX only | Build Visual Studio extension |
| `/build-analyzer` | Analyzers | Build + run analyzer unit tests |
| `/build-tool` | Tool only | Build Tool package |
| `/build-release` | Release | **Human only** - requires PFX |
| `/clean-all` | Clean | Clean all build artifacts |
| `/create-new-analyzer` | New Analyzer | Create a new Roslyn analyzer |

---

## CLI Commands

The CLI (`devkit`) provides these commands:

| Command | Status | Task File | Description |
|---------|--------|-----------|-------------|
| `generator` | ✅ Active | `TaskGenerator.cs` | Generate form/webapi code |
| `server` | ✅ Active | `TaskServer.cs` | Deploy plugins, workflows, dataproviders |
| `plugin` | ⚠️ Deprecated | `TaskServer.cs` | Use `devkit server` |
| `workflow` | ⚠️ Deprecated | `TaskServer.cs` | Use `devkit server` |
| `dataprovider` | ⚠️ Deprecated | `TaskServer.cs` | Use `devkit server` |
| `webresource` | ✅ Active | `TaskWebResource.cs` | Deploy web resources |
| `modelbuilder` | ✅ Active | `TaskModelBuilder.cs` | Generate early-bound using PAC |
| `proxytype` | ⚠️ Deprecated | `TaskProxyType.cs` | Use `devkit modelbuilder` |
| `solution` | ✅ Active | `TaskPacSolutionPackager.cs` | Extract/pack solutions using PAC |
| `legacy-solution` | ⚠️ Deprecated | `TaskSolutionPackager.cs` | Use `devkit solution` |
| `downloadreport` | ✅ Active | `TaskDownloadReport.cs` | Download reports |
| `uploadreport` | ✅ Active | `TaskUploadReport.cs` | Upload reports |
| `downloadwebresource` | ✅ Active | `TaskDownloadWebResource.cs` | Download web resources |
| `datasource` | ✅ Active | `TaskDataSource.cs` | Create data sources |

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `Const.cs` | Version and build info |
| `XrmHelper.cs` | Dataverse operations (1800+ lines) |
| `Helper.cs` | Code generation utilities |
| `DevKitPackage.cs` | VSIX entry point |
| `Program.cs` (CLI) | CLI entry point with Spectre.Console |
| `SpectreLog.cs` | CLI logging with ASCII art logo |
| `DevKit.ReleaseConfig.json` | Build configuration |

---

## Configuration Files

| File | Purpose |
|------|---------|
| `DynamicsCrm.DevKit.Cli.json` | CLI configuration in solution root |
| `DynamicsCrm.DevKit.Config.json` | VSIX configuration |
| `.agent/rules/core-rule.md` | Core rules for AI agents |
| `.agent/rules/devkit-analyzer.md` | Analyzer development rules |
| `.agent/workflows/*.md` | Workflow definitions |

---

## Analyzer Development

### Current Analyzers (21 total)

| ID Range | Count | Focus |
|---|---|---|
| DEVKIT1001-1021 | 21 | Plugin/Workflow best practices |

### Unit Tests

```powershell
cd DynamicsCrm.DevKit.Analyzers.Test
dotnet test
```

### Integration Tests

Test files are in `DynamicsCrm.DevKit.Tests/TestAnalyzers/DEVKIT*.cs`

---

## Security

> [!CAUTION]
> Never commit connection strings or credentials. Use environment variables or Azure Key Vault.

- PFX key file (`DynamicsCrm.DevKit.pfx`) requires password for signing
- Connection strings should use OAuth/MFA when possible

---

## Documentation Rules

When creating documentation files (`.md`):

| Working On | Save To |
|------------|---------|
| CLI | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/` |
| VSIX | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit/` |
| Analyzers | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Analyzers/` |
| Tests | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Tests/` |

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| VSIX won't build | Ensure "VSIX development workload" is installed |
| Analyzers silent | Check .editorconfig severity settings |
| Templates missing | Reinstall VSIX in experimental instance |
| Assembly not found | Check VSIX assembly loading in `DevKitPackage.cs` |
| CLI not found | Run `dotnet tool list -g` to verify installation |

---

## Git Policy

> [!WARNING]
> AI agents should NOT commit or push any git changes unless explicitly requested by the user.
# DynamicsCrm.DevKit - GitHub Copilot Instructions

> For comprehensive instructions, see `AGENTS.md` in the project root.
> For build workflows, see `.agent/workflows/*.md` files.

## Communication Protocol

- **Start every response with**: `"[emoji] Xin chào buổi [sáng/trưa/chiều/tối] anh Phước [emoji]"` (based on current time)
- **End every response with**: `"[emoji] Tôi đã là xong rồi anh Phước, hãy kiểm tra lại những gì tôi làm nhé [emoji]"`

## Critical Constraints

| Rule | Description |
|------|-------------|
| **No Git Operations** | Never commit, push, or perform any git operations unless explicitly requested |
| **DEBUG Mode Only** | Always use DEBUG configuration for builds. RELEASE mode is for human operators only |
| **MSBuild for VSIX** | Use MSBuild (NOT `dotnet build`) for VSIX project. Path: `C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe` |

## Project Structure

| Component | Path | Description |
|-----------|------|-------------|
| **VSIX** | `DynamicsCrm.DevKit/` | VS2026 extension with project/item templates |
| **CLI** | `DynamicsCrm.DevKit.Cli/` | .NET global tool with 14 commands |
| **Analyzers** | `DynamicsCrm.DevKit.Analyzers/` | 21 Roslyn analyzers (DEVKIT1001-1021) |
| **Shared** | `DynamicsCrm.DevKit.Shared/` | Common logic, models, resources |
| **Tool** | `DynamicsCrm.DevKit.Tool/` | Utility package |
| **Tests** | `DynamicsCrm.DevKit.Tests/` | Integration test project |
| **Scripts** | `DynamicsCrm.DevKit.Scripts/` | Build and release PowerShell scripts |

## Build Workflows

Build workflows are defined in `.agent/workflows/*.md`. Read and follow the steps in those files:

| Workflow File | Description |
|---------------|-------------|
| `.agent/workflows/build-debug.md` | Full build - Build all projects + install CLI locally |
| `.agent/workflows/build-cli.md` | CLI only - Build and install CLI tool |
| `.agent/workflows/build-vsix.md` | VSIX only - Build Visual Studio extension |
| `.agent/workflows/build-analyzer.md` | Analyzers - Build + run analyzer unit tests |
| `.agent/workflows/build-tool.md` | Tool only - Build Tool package |
| `.agent/workflows/build-release.md` | Release - **Human only** |
| `.agent/workflows/unit-test.md` | Run all unit tests + code coverage report |
| `.agent/workflows/clean-all.md` | Clean all build artifacts |
| `.agent/workflows/create-new-analyzer.md` | Create a new Roslyn analyzer |
| `.agent/workflows/client-code-clean.md` | Clean all 6 TestClientCode folders |
| `.agent/workflows/client-code-install.md` | Install NPM packages for TestClientCode |
| `.agent/workflows/client-code-generate.md` | Generate entity files via CLI |
| `.agent/workflows/client-code-sync.md` | Sync source-of-truth files to TestClientCode |
| `.agent/workflows/client-code-test.md` | Run checks, builds, tests for TestClientCode |
| `.agent/workflows/run-cli.md` | Run a specific CLI profile |

## CLI Run Profile

When running a CLI profile:

1. Read profile from `DynamicsCrm.DevKit.Cli\Properties\launchSettings.json`
2. Extract `workingDirectory` and `commandLineArgs`
3. `cd` to `workingDirectory`
4. Run CLI exe with `commandLineArgs`

## Naming Conventions

| Type | Variable Name |
|------|---------------|
| `ServiceClient` | `serviceClient` |
| `IOrganizationService` | `crmService` |

## Target Frameworks

- .NET Framework 4.6.2, 4.8
- .NET Standard 2.0
- .NET 10.0 (CLI only)

## Key Files

| Purpose | File(s) |
|---------|---------|
| Version info | `Const.cs` in Shared |
| Dataverse operations | `XrmHelper.cs` in Shared |
| CLI entry point | `Program.cs` in CLI |
| VSIX entry point | `DevKitPackage.cs` in VSIX |
| Analyzer implementations | `DynamicsCrm.DevKit.Analyzers/CrmAnalyzers/` |

## Documentation

| Working On | Save To |
|------------|---------|
| CLI | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/` |
| VSIX | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit/` |
| Analyzers | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Analyzers/` |
| Tests | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Tests/` |

## File Patterns

| Search Term | Look For |
|-------------|----------|
| `helper` | `*Helper.cs` (XrmHelper, FileHelper, JsonHelper) |
| `config` | `DynamicsCrm.DevKit.json`, `DynamicsCrm.DevKit.Cli.json` |
| `task` | `Tasks/*.cs` in CLI project |
| `wizard` | `Wizard/*.cs` in VSIX project |
| `analyzer` | `CrmAnalyzers/*.cs` in Analyzers project |

## Release Scripts

| Script | Mode | PFX Required | Use Case |
|--------|------|--------------|----------|
| `Release-DynamicsCrm-DevKit-Debug.ps1` | DEBUG | No | AI Agent sessions |
| `Release-DynamicsCrm-DevKit-CurrentDate.ps1` | RELEASE | Yes | Human testing |
| `Release-DynamicsCrm-DevKit.ps1` | RELEASE | Yes | Official release |

## Security

Never commit connection strings or credentials. Use environment variables or Azure Key Vault for secrets.

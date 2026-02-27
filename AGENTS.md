# DynamicsCrm.DevKit - AI Agent Instructions

> This file provides instructions for AI coding agents working with this repository.
> Version-specific instructions are in [`v4/AGENTS.md`](v4/AGENTS.md) and [`v5/AGENTS.md`](v5/AGENTS.md).

## Repository Overview

**DynamicsCrm.DevKit** is a development toolkit for Microsoft Dynamics 365 / Power Platform / Dataverse. The repository is organized into two major versions:

| Directory | Description |
|-----------|-------------|
| `v4/` | Stable version — VSIX extension, CLI (NuGet package), Roslyn analyzers, shared libraries |
| `v5/` | Next version — adds .NET 10 CLI (global tool), TypeScript templates, enhanced agent workflows |

Both versions share the same architecture: a Visual Studio extension (VSIX) with project/item templates, a CLI for CI/CD automation, Roslyn analyzers for Dynamics 365 best practices, and shared utility libraries.

## Critical Constraints

> **All AI builds MUST use DEBUG mode.** Release mode requires a PFX password and is reserved for human operators.

| Constraint | Value |
|------------|-------|
| **Build tool** | MSBuild.exe (NOT `dotnet build` for VSIX projects) |
| **MSBuild path** | `C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe` |
| **Build config** | `/p:Configuration=Debug` |
| **Target frameworks** | .NET Framework 4.6.2, 4.8; .NET Standard 2.0; .NET 10.0 (v5 CLI only) |

### Naming Conventions

| Type | Variable Name |
|------|---------------|
| `ServiceClient` | `serviceClient` |
| `IOrganizationService` | `crmService` |

## Repository Structure

```
/
├── v4/                                    # Version 4
│   ├── AGENTS.md                          # v4-specific agent instructions
│   ├── .agent/rules/                      # AI agent rules
│   ├── DynamicsCrm.DevKit/               # VSIX extension
│   ├── DynamicsCrm.DevKit.Cli/           # CLI tool (NuGet package)
│   ├── DynamicsCrm.DevKit.Analyzers/     # Roslyn analyzers (20 rules)
│   ├── DynamicsCrm.DevKit.Shared/        # Common logic, XrmHelper
│   ├── DynamicsCrm.DevKit.Tool/          # Utility package
│   ├── DynamicsCrm.DevKit.Tests/         # Integration tests
│   ├── ProjectTemplates/                  # 12 VS project templates
│   ├── ItemTemplates/                     # 13 VS item templates
│   └── *.slnx                            # Solution files
│
├── v5/                                    # Version 5
│   ├── AGENTS.md                          # v5-specific agent instructions
│   ├── .agent/rules/                      # AI agent rules
│   ├── .agent/workflows/                  # Build workflow definitions
│   ├── .agent/skills/                     # Agent skill definitions
│   ├── DynamicsCrm.DevKit/               # VSIX extension
│   ├── DynamicsCrm.DevKit.Cli/           # CLI tool (.NET 10 global tool)
│   ├── DynamicsCrm.DevKit.Cli.Test/      # CLI unit tests
│   ├── DynamicsCrm.DevKit.Analyzers/     # Roslyn analyzers (21 rules)
│   ├── DynamicsCrm.DevKit.Shared/        # Common logic, XrmHelper
│   ├── DynamicsCrm.DevKit.Tool/          # Utility package
│   ├── DynamicsCrm.DevKit.Tests/         # Integration tests
│   ├── DynamicsCrm.DevKit.Docs/          # Documentation
│   ├── DynamicsCrm.DevKit.Scripts/       # Build/release PowerShell scripts
│   ├── ProjectTemplates/                  # 13 VS project templates
│   ├── ItemTemplates/                     # 15 VS item templates
│   └── *.slnx                            # Solution files
│
├── README.md
└── LICENSE                                # MIT License
```

## Solution Files

Each version has four solution files (`.slnx` format):

| Solution | Contents |
|----------|----------|
| `DynamicsCrm.DevKit.AllInOne.slnx` | All projects combined |
| `DynamicsCrm.DevKit.slnx` | VSIX extension only |
| `DynamicsCrm.DevKit.Cli.slnx` | CLI tool only |
| `DynamicsCrm.DevKit.Analyzers.slnx` | Analyzers only |

## Key Differences Between v4 and v5

| Feature | v4 | v5 |
|---------|----|----|
| CLI packaging | NuGet package | .NET 10 global tool |
| Project templates | 12 | 13 (adds WebResourceTs) |
| Item templates | 13 | 15 (adds TypeScript form/webapi) |
| Analyzer rules | 20 (DEVKIT1001-1020) | 21 (DEVKIT1001-1021) |
| Agent workflows | — | 8 workflow definitions in `.agent/workflows/` |
| Documentation dir | — | `DynamicsCrm.DevKit.Docs/` |
| Build scripts dir | Root-level `.ps1` files | `DynamicsCrm.DevKit.Scripts/` |

## Working in This Repository

1. **Determine which version you are working on** — check whether the files are under `v4/` or `v5/`, then read the corresponding `AGENTS.md` for version-specific instructions.
2. **Use the correct solution file** — open the appropriate `.slnx` for the component you are modifying.
3. **Never use `dotnet build`** for VSIX projects — use MSBuild directly.
4. **Always build in DEBUG mode** — never attempt Release builds.

## Security

- Never commit connection strings, credentials, or PFX passwords.
- Use environment variables or Azure Key Vault for secrets.
- Connection strings should use OAuth/MFA when possible.

## Git Policy

AI agents should NOT commit or push git changes unless explicitly requested by the user.

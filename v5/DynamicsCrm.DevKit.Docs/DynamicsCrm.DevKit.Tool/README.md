# DynamicsCrm.DevKit.Tool

.NET 10 global tool (`devkit-tool`) for Dynamics 365 / Dataverse development automation. Packaged as NuGet tool (`DynamicsCrm.DevKit.Tool`).

---

## Overview

| Property | Value |
|---|---|
| **Target Framework** | .NET 10.0 |
| **Platform** | x64 |
| **CLI Framework** | Spectre.Console.Cli |
| **NuGet Package** | `DynamicsCrm.DevKit.Tool` |
| **Tool Command** | `devkit-tool` |

This project is **separate** from the main CLI (`DynamicsCrm.DevKit.Cli`). It provides specialized utility commands not included in the main CLI.

---

## Installation

```powershell
dotnet tool install -g DynamicsCrm.DevKit.Tool
```

---

## Commands

| Command | Description |
|---|---|
| `documentgenerator` | Connects to Dataverse, fetches entity metadata from a solution, and generates markdown documentation (entity docs, ERD, global option sets) |
| `documentcodegenerator` | Scans compiled assemblies for `DocumentMethodAttribute` on methods and generates server-side code documentation (plugins/workflows) |
| `coveragetoxml` | Converts Visual Studio `.coverage` files to XML using `dotnet-coverage` tool |
| `nuglify` | Minifies HTML, CSS, or JS files using NUglify |
| `decrypt` | Decrypts password strings encrypted with the DevKit-specific algorithm (AES, passphrase `PL.DynamicsCrm.DevKit`) |

---

## Project Structure

| File/Folder | Purpose |
|---|---|
| `Program.cs` | Entry point, registers all commands |
| `Commands/DocumentGeneratorCommand.cs` | Command definition for document generation |
| `Tasks/TaskDocumentGenerator.cs` | Task implementation: connect to Dataverse, fetch metadata, generate markdown |
| `Commands/DocumentCodeGeneratorCommand.cs` | Command definition for code documentation |
| `Tasks/TaskDocumentCodeGenerator.cs` | Task implementation: scan assemblies with Mono.Cecil |
| `Commands/CoverageToXmlCommand.cs` | Command definition for coverage conversion |
| `Tasks/TaskCoverageToXml.cs` | Task implementation: `.coverage` → XML via `dotnet-coverage` |
| `Commands/NUglifyCommand.cs` | Command definition for minification |
| `Tasks/TaskNUglify.cs` | Task implementation: minify HTML/CSS/JS |
| `Commands/DecryptCommand.cs` | Command definition for decryption |
| `Tasks/TaskDecrypt.cs` | Task implementation: AES decryption |
| `Lib/Helper.cs` | Shared utility methods |
| `Lib/Utility.cs` | Additional utilities |
| `Lib/DocumentMethodAttribute.cs` | Custom attribute for marking documented methods |
| `Extensions/MetadataExtensions.cs` | Extension methods for Dataverse metadata |

---

## Dependencies

| Package | Purpose |
|---|---|
| `Spectre.Console` / `Spectre.Console.Cli` | Rich console UI and CLI framework |
| `Microsoft.PowerPlatform.Dataverse.Client` | Connect to Dataverse for metadata retrieval |
| `Mono.Cecil` | Assembly inspection for code documentation |
| `NUglify` | HTML/CSS/JS minification |
| `Newtonsoft.Json` | JSON serialization |
| `dotnet-coverage` (external tool) | Coverage file conversion (must be installed separately) |

---

## Shared Files

This project links to shared files from `DynamicsCrm.DevKit.Shared`:
- `Const.cs` - Version and build constants
- `Enum.cs` - Shared enumerations

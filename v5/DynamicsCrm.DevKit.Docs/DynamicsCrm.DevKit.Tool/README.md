# DynamicsCrm.DevKit.Tool

Standalone .NET Framework 4.8 console utility for Dynamics 365 / Dataverse development automation. Packaged as NuGet tool (`DynamicsCrm.DevKit.Tool`).

---

## Overview

| Property | Value |
|---|---|
| **Target Framework** | .NET Framework 4.8 |
| **Platform** | x86 |
| **CLI Framework** | Spectre.Console.Cli |
| **NuGet Package** | `DynamicsCrm.DevKit.Tool` |

This project is **separate** from the main CLI (`DynamicsCrm.DevKit.Cli`). It provides specialized utility commands not included in the main CLI.

---

## Commands

| Command | Description |
|---|---|
| `documentgenerator` | Connects to Dataverse, fetches entity metadata from a solution, and generates markdown documentation (entity docs, ERD, global option sets) |
| `documentcodegenerator` | Scans compiled assemblies for `DocumentMethodAttribute` on methods and generates server-side code documentation (plugins/workflows) |
| `coveragetoxml` | Converts Visual Studio `.coverage` files to XML using `Microsoft.VisualStudio.Coverage.Analysis` |
| `nuglify` | Minifies HTML, CSS, or JSON files using NUglify |
| `decrypt` | Decrypts password strings encrypted with the DevKit-specific algorithm (AES, passphrase `PL.DynamicsCrm.DevKit`) |

---

## Project Structure

| File/Folder | Purpose |
|---|---|
| `Program.cs` | Entry point, registers all commands |
| `DocumentGeneratorCommand.cs` | Command definition for document generation |
| `TaskDocumentGenerator.cs` | Task implementation: connect to Dataverse, fetch metadata, generate markdown |
| `DocumentCodeGeneratorCommand.cs` | Command definition for code documentation |
| `TaskDocumentCodeGenerator.cs` | Task implementation: scan assemblies with Mono.Cecil |
| `CoverageToXmlCommand.cs` | Command definition for coverage conversion |
| `TaskCoverageToXml.cs` | Task implementation: `.coverage` → XML |
| `NUglifyCommand.cs` | Command definition for minification |
| `TaskNUglify.cs` | Task implementation: minify HTML/CSS/JSON |
| `DecryptCommand.cs` | Command definition for decryption |
| `TaskDecrypt.cs` | Task implementation: AES decryption |
| `Helper.cs` | Shared utility methods |
| `Utility.cs` | Additional utilities |
| `DocumentMethodAttribute.cs` | Custom attribute for marking documented methods |
| `MetadataExtensions.cs` | Extension methods for Dataverse metadata |

---

## Dependencies

| Package | Purpose |
|---|---|
| `Spectre.Console` / `Spectre.Console.Cli` | Rich console UI and CLI framework |
| `Microsoft.PowerPlatform.Dataverse.Client` | Connect to Dataverse for metadata retrieval |
| `Mono.Cecil` | Assembly inspection for code documentation |
| `NUglify` | HTML/CSS/JSON minification |
| `Newtonsoft.Json` | JSON serialization |
| `Microsoft.VisualStudio.Coverage.Analysis` | Coverage file conversion (local DLL reference) |

---

## Shared Files

This project links to shared files from `DynamicsCrm.DevKit.Shared`:
- `Const.cs` - Version and build constants
- `Enum.cs` - Shared enumerations

# Copilot Instructions

## Response Format
* Start with: "Hi, I'm GitHub Copilot. I will help you with your prompt Phuoc"
* Auto-tag: #solution

## C# Conventions
* Use async/await for async operations
* Variable naming: `serviceClient` for ServiceClient type
* Build after changes to verify no errors

## Solution Structure

### Project Types
* **CLI**: `DynamicsCrm.DevKit.Cli` + `DynamicsCrm.DevKit.Shared`
  - Build: MSBuild on `DynamicsCrm.DevKit.Cli.sln`
  - Run: Check `launchSettings.json` for profiles
* **Tools**: `DynamicsCrm.DevKit.Tools` + `DynamicsCrm.DevKit.Shared`
* **VSIX**: `DynamicsCrm.DevKit` + `DynamicsCrm.DevKit.Shared`
* **Analyzers**: `DynamicsCrm.DevKit.Analyzers` + `DynamicsCrm.DevKit.Shared`

### Key Folders
* **Templates**: `ItemTemplates`, `ProjectTemplates` (numbered 01-13, 01-12)
* **Shared**: Common logic in `DynamicsCrm.DevKit.Shared`
* **Wiki**: GitHub wiki files in `DynamicsCrm.DevKit.Wiki` (not in solution)

## File Patterns
* "Helper" in prompt ? Search for `*Helper.cs` files
* Config files: `DynamicsCrm.DevKit.json`, `DynamicsCrm.DevKit.Cli.json`, `DynamicsCrm.DevKit.Config.json`

## Build System
* Tool: MSBuild (NOT dotnet build)
* Always build mode release
* Path: `C:\Program Files\Microsoft Visual Studio\2022\Enterprise\MSBuild\Current\Bin\MSBuild.exe`
* Build after each change

## Target Frameworks
* .NET Framework 4.6.2, 4.8
* .NET Standard 2.0
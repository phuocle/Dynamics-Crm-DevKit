# DynamicsCrm.DevKit.Tool

NuGet tools package for DynamicsCrm.DevKit utilities.

## Installation

Install as a NuGet package:

```xml
<PackageReference Include="DynamicsCrm.DevKit.Tool" Version="4.12.34.56">
  <PrivateAssets>all</PrivateAssets>
  <IncludeAssets>runtime; build; native; contentfiles; analyzers</IncludeAssets>
</PackageReference>
```

## Contents

This package includes:
- `DynamicsCrm.DevKit.Tool.exe` - Utility executable for CRM development
- Supporting assemblies for CRM connectivity

## Usage

The tool is typically used alongside the CLI tool for advanced scenarios.

For most use cases, use the CLI tool instead:

```powershell
dotnet tool install -g DynamicsCrm.DevKit.Cli
devkit --help
```

## Related Packages

| Package | Description |
|---------|-------------|
| [DynamicsCrm.DevKit.Cli](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli) | .NET global CLI tool (recommended) |
| [DynamicsCrm.DevKit.Analyzers](https://www.nuget.org/packages/DynamicsCrm.DevKit.Analyzers) | Roslyn analyzers |

## Support

- GitHub: https://github.com/phuocle/Dynamics-Crm-DevKit
- Issues: https://github.com/phuocle/Dynamics-Crm-DevKit/issues

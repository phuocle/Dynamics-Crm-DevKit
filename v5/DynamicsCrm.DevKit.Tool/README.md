# DynamicsCrm.DevKit.Tool

NuGet tools package for DynamicsCrm.DevKit CLI distribution.

## Installation

Install as a .NET tool:

```powershell
dotnet tool install DynamicsCrm.DevKit.Tool --global
```

Or add to your project:

```xml
<PackageReference Include="DynamicsCrm.DevKit.Tool" Version="4.12.34.56">
  <PrivateAssets>all</PrivateAssets>
  <IncludeAssets>runtime; build; native; contentfiles; analyzers</IncludeAssets>
</PackageReference>
```

## Contents

This package includes:
- `DynamicsCrm.DevKit.Cli.exe` - Command-line interface
- `CrmSvcUtil.exe` - Proxy type generator
- Supporting assemblies for CRM connectivity

## Usage

After installation, run CLI commands:

```powershell
devkit /task:generator /config:DynamicsCrm.DevKit.Cli.json
```

# DynamicsCrm.DevKit.Analyzers

Roslyn code analyzers for Dynamics 365 / Power Platform plugin and workflow development.

## Analyzer Rules

| ID | Category | Description |
|----|----------|-------------|
| DEVKIT1001 | Naming | Plugin class naming conventions |
| DEVKIT1002 | Naming | Workflow class naming conventions |
| DEVKIT1003 | Design | Plugin constructor validation |
| DEVKIT1004 | Design | ITracingService usage |
| DEVKIT1005 | Design | IOrganizationService patterns |
| DEVKIT1006 | Performance | Query optimization |
| DEVKIT1007 | Security | Input validation |
| DEVKIT1008 | Design | Exception handling patterns |
| DEVKIT1009 | Design | Entity validation |
| DEVKIT1010 | Performance | Bulk operation patterns |
| DEVKIT1011 | Security | Connection security |
| DEVKIT1012 | Design | Async patterns |
| DEVKIT1013 | Design | Transaction handling |
| DEVKIT1014 | Performance | Memory optimization |
| DEVKIT1015 | Design | Logging best practices |
| DEVKIT1016 | Design | Configuration management |
| DEVKIT1017 | Design | Error handling |
| DEVKIT1018 | Performance | Caching patterns |
| DEVKIT1019 | Security | Data protection |
| DEVKIT1020 | Design | Code organization |

## Installation

Add the NuGet package to your project:

```xml
<PackageReference Include="DynamicsCrm.DevKit.Analyzers" Version="4.12.34.56" />
```

## Configuration

Configure analyzer severity in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1001.severity = warning
dotnet_diagnostic.DEVKIT1002.severity = suggestion
```

```text
  ____                              _           ____                  ____             _  ___ _        _                _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_     / \   _ __   __ _| |_   _ _______ _ __ ___
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|   / _ \ | '_ \ / _` | | | | |_  / _ \ '__/ __|
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ _ / ___ \| | | | (_| | | |_| |/ /  __/ |  \__ \
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)_/   \_\_| |_|\__,_|_|\__, /___\___|_|  |___/
        |___/                         https://github.com/phuocle/Dynamics-Crm-DevKit 4.12.34.56 Build: xxxx.yy.zz HH.mm.ss|___/
```
# 🛡️ DynamicsCrm.DevKit Analyzers

DynamicsCrm.DevKit Analyzers is a Roslyn analyzer package for Dataverse, Dynamics 365, and Power Platform server-side code. It adds compile-time diagnostics for common plugin, workflow, data provider, HTTP, metadata, and sandbox risks before they become runtime failures.

[![NuGet](https://img.shields.io/nuget/v/DynamicsCrm.DevKit.Analyzers?label=NuGet)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Analyzers)
[![NuGet Downloads](https://img.shields.io/nuget/dt/DynamicsCrm.DevKit.Analyzers)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Analyzers)

## ✨ Highlights

- 21 Dataverse-specific diagnostics, `DEVKIT1001` through `DEVKIT1021`.
- Targets analyzer delivery through `netstandard2.0` for broad Visual Studio and MSBuild compatibility.
- Rule help links resolve to the project Wiki using the diagnostic ID.
- Covers filtering attributes, plugin images, deprecated SDK requests, sandbox-safe execution, tracing, HTTP calls, metadata retrieval, and data provider registration.

## 📦 Install

Use the analyzer as a private development dependency in Dataverse projects:

```xml
<PackageReference Include="DynamicsCrm.DevKit.Analyzers" Version="*" PrivateAssets="all" />
```

Or install from the command line:

```powershell
dotnet add package DynamicsCrm.DevKit.Analyzers
```

## 📋 Diagnostics

| Rule | Default severity | Summary |
|---|---|---|
| [DEVKIT1001](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1001) | Warning / Error | Create and update messages should use explicit filtering attributes, not empty or `*` filters. |
| [DEVKIT1002](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1002) | Warning | Avoid `ColumnSet(true)` and all-column retrieval patterns. |
| [DEVKIT1003](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1003) | Error | Validate plugin image compatibility by message and stage. |
| [DEVKIT1004](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1004) | Info | Flag deprecated SDK request usage. |
| [DEVKIT1005](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1005) | Warning | Guard `EntityReference` access that may be null. |
| [DEVKIT1006](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1006) | Warning | Avoid batch request types inside plugins and workflow activities. |
| [DEVKIT1007](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1007) | Error | Keep `IPlugin` implementations stateless during execution. |
| [DEVKIT1008](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1008) | Error | Avoid parallel execution patterns inside plugins and workflow activities. |
| [DEVKIT1009](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1009) | Warning | Set KeepAlive/connection reuse behavior safely for external HTTP calls. |
| [DEVKIT1010](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1010) | Warning | Set explicit timeouts for external HTTP calls. |
| [DEVKIT1011](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1011) | Warning | Use `InvalidPluginExecutionException` for plugin and workflow errors. |
| [DEVKIT1012](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1012) | Info | Use `ITracingService` for plugin diagnostics. |
| [DEVKIT1013](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1013) | Info | Avoid high-impact registrations on `Retrieve` and `RetrieveMultiple`. |
| [DEVKIT1014](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1014) | Error | Avoid AppDomain event registration in plugins. |
| [DEVKIT1015](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1015) | Info | Review blocking async patterns such as `.Result`, `.Wait()`, and `GetAwaiter().GetResult()`. |
| [DEVKIT1016](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1016) | Info | Avoid retrieving unpublished metadata unless explicitly required. |
| [DEVKIT1017](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1017) | Info | Avoid console output in sandboxed plugins and workflow activities. |
| [DEVKIT1018](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1018) | Error | Avoid file and IO operations blocked by the Dataverse sandbox. |
| [DEVKIT1019](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1019) | Warning | Check `IPluginExecutionContext.Depth` to prevent recursive plugin loops. |
| [DEVKIT1020](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1020) | Error | Data provider plugins must declare a valid `DataSource`. |
| [DEVKIT1021](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1021) | Warning | Trace exception details from catch blocks with `ITracingService`. |

## ⚙️ Configuration

Adjust severity in `.editorconfig` when a project needs a different policy:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1001.severity = error
dotnet_diagnostic.DEVKIT1012.severity = suggestion
dotnet_diagnostic.DEVKIT1016.severity = none
```

Suppress a narrow block only when the exception is intentional:

```csharp
#pragma warning disable DEVKIT1002
var account = service.Retrieve("account", id, new ColumnSet(true));
#pragma warning restore DEVKIT1002
```

## 🔗 Links

- [Repository README](../../README.md)
- [NuGet package](https://www.nuget.org/packages/DynamicsCrm.DevKit.Analyzers)
- [Visual Studio extension](../DynamicsCrm.DevKit/README.md)
- [CLI](../DynamicsCrm.DevKit.Cli/README.md)
- [Issues](https://github.com/phuocle/Dynamics-Crm-DevKit/issues)

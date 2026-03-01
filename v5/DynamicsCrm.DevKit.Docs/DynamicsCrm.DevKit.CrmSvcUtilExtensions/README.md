# DynamicsCrm.DevKit.CrmSvcUtilExtensions

CrmSvcUtil extension library that enables selective entity code generation via the `ICodeWriterFilterService` interface.

---

## Overview

| Property | Value |
|---|---|
| **Target Framework** | .NET Framework 4.8 |
| **Type** | Class Library (DLL) |
| **Status** | Legacy (used by deprecated `proxytype` command) |
| **Replacement** | `devkit modelbuilder` (PAC ModelBuilder) |

---

## How It Works

This project implements `ICodeWriterFilterService` from CrmSvcUtil to filter which entities get generated as early-bound C# classes.

### Entity Filtering Logic

1. The DevKit CLI sets the environment variable `DynamicsCrm.DevKit.CrmSvcUtilExtensions.Entities` with a comma-separated list of entity logical names
2. `CodeWriterFilter.GenerateEntity()` checks this variable:
   - **If set and non-empty**: Only generates entities in the list
   - **If empty or not set**: Delegates to the default CrmSvcUtil filter (generates all entities)
3. All other filter methods (`GenerateAttribute`, `GenerateOption`, `GenerateOptionSet`, `GenerateRelationship`, `GenerateServiceContext`) delegate to the default service

### CrmSvcUtil Integration

The CLI passes this DLL to CrmSvcUtil via:
```
/codewriterfilter:"DynamicsCrm.DevKit.CrmSvcUtilExtensions.CodeWriterFilter,DynamicsCrm.DevKit.CrmSvcUtilExtensions"
```

---

## Project Structure

| File | Purpose |
|---|---|
| `CodeWriterFilter.cs` | `ICodeWriterFilterService` implementation with entity filtering logic |
| `Properties/AssemblyInfo.cs` | Assembly metadata |

---

## Dependencies

| Package | Purpose |
|---|---|
| `Microsoft.CrmSdk.CoreAssemblies` | Dynamics 365 SDK core types |
| `Microsoft.CrmSdk.CoreTools` | CrmSvcUtil.exe (referenced for `ICodeWriterFilterService`) |
| `Microsoft.CrmSdk.Workflow` | Workflow activity types |
| `Microsoft.CrmSdk.XrmTooling.CoreAssembly` | XRM tooling |

---

## Usage Context

This DLL is used by the CLI `proxytype` command (`TaskProxyType.cs`):
1. CLI copies this DLL next to `CrmSvcUtil.exe`
2. CLI sets the `DynamicsCrm.DevKit.CrmSvcUtilExtensions.Entities` environment variable
3. CLI invokes CrmSvcUtil with the `/codewriterfilter` argument pointing to this DLL
4. CrmSvcUtil generates early-bound classes only for the specified entities

> **Note**: The `proxytype` command is deprecated. Use `devkit modelbuilder` instead, which uses PAC ModelBuilder and does not require this extension.

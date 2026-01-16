# Console Core Project Template - Connection Types Implementation

## Overview

This document tracks the implementation of connection-type-specific templates for `Console Core` project (.NET Core). Unlike `Console` project (.NET Framework), Console Core:

- Uses `AppSettings.json` instead of `App.config`
- Supports all connection types including **DeviceCode** and **FromPac**
- Uses modern .NET Core dependencies (Azure.Identity, etc.)

## Status Tracking

| Connection Type  | Test Project Fix | Embedded Resource | VSIX Integration | Status          |
| ---------------- | ---------------- | ----------------- | ---------------- | --------------- |
| **ClientSecret** | ✅ Done           | ✅ Done            | ✅ Done           | ✅ **Completed** |
| **OAuth**        | ✅ Done           | ✅ Done            | ✅ Done           | ✅ **Completed** |
| **Interactive**  | ✅ Done           | ✅ Done            | ✅ Done           | ✅ **Completed** |
| DeviceCode       | ⏳ Pending        | ⏳ Pending         | ⏳ Pending        | Pending         |
| FromPac          | ⏳ Pending        | ⏳ Pending         | ⏳ Pending        | Pending         |
| AD               | ⏳ Pending        | ⏳ Pending         | ⏳ Pending        | Pending         |

> **Last Completed:** Interactive
> **Currently Working On:** DeviceCode

---

## Problem Statement

The current `App.cs` template uses a generic multi-auth switch statement. Each test project (e.g., `Dev.DevKit.ConsoleCore.ClientSecret`) contains the **same** code regardless of connection type.

**Solution:** Create connection-type-specific templates that are simple and focused.

---

## 5-Step Workflow (per Connection Type)

| Step  | Description                                                                                           |
| ----- | ----------------------------------------------------------------------------------------------------- |
| **1** | Fix test project (`Dev.DevKit.ConsoleCore.{Type}`) - Simplify to connection-type-only implementation  |
| **2** | User verify - Run project and confirm it works                                                        |
| **3** | Create embedded resources (`App.{Type}.cs`, `AppSettings.{Type}.json`) in `Resources/cs/consolecore/` |
| **4** | User verify - Build VSIX and create new project to test                                               |
| **5** | Commit and update docs                                                                                |

---

## Embedded Resources Structure

```
DynamicsCrm.DevKit.Shared/Resources/cs/consolecore/
├── App.ClientSecret.cs
├── App.OAuth.cs
├── App.Interactive.cs
├── App.DeviceCode.cs
├── App.FromPac.cs
├── App.AD.cs
├── AppSettings.ClientSecret.json
├── AppSettings.OAuth.json
├── AppSettings.Interactive.json
├── AppSettings.DeviceCode.json
├── AppSettings.FromPac.json
└── AppSettings.AD.json
```

---

## Placeholder Mapping

| Placeholder           | Source                                   |
| --------------------- | ---------------------------------------- |
| `$NameSpace$`         | Project namespace                        |
| `$UrlValue$`          | `CrmConnection.Url`                      |
| `$ClientIdValue$`     | `CrmConnection.ClientId`                 |
| `$ClientSecretValue$` | `CrmConnection.ClientSecret` (decrypted) |
| `$UserNameValue$`     | `CrmConnection.UserName`                 |
| `$PasswordValue$`     | `CrmConnection.Password` (decrypted)     |
| `$PacProfileValue$`   | `CrmConnection.PacProfile`               |

---

## Connection Type Details

### ClientSecret
- **Config Keys:** `Url`, `ClientId`, `ClientSecret`
- **Connection String:** `AuthType=ClientSecret;Url={Url};ClientId={ClientId};ClientSecret={ClientSecret};`

### OAuth
- **Config Keys**: `Url`, `UserName`, `Password`
- **Connection String**: `AuthType=OAuth;Url={Url};Username={UserName};Password={Password};AppId=...;RedirectUri=...;LoginPrompt=Auto;` (AppId/RedirectUri hardcoded in App.cs)

### Interactive
- **Config Keys:** `Url` only
- **Connection String:** `AuthType=OAuth;Url={Url};AppId=...;LoginPrompt=Always;`

### DeviceCode
- **Config Keys:** `Url` only (DeviceCode needs programmatic MSAL implementation)
- **Implementation:** Uses `Azure.Identity` with custom token provider

### FromPac
- **Config Keys:** `PacProfile`
- **Implementation:** Uses `Azure.Identity` with PAC CLI profile integration

### AD
- **Config Keys:** `Url`, `UserName` (format: `domain\username`), `Password`
- **Connection String:** `AuthType=AD;Url={Url};Domain={domain};Username={username};Password={Password};`

---

## Test Projects

Located in: `DynamicsCrm.DevKit.Tests/TestNewCli/`

| Project                               | Status      |
| ------------------------------------- | ----------- |
| `Dev.DevKit.ConsoleCore.ClientSecret` | To be fixed |
| `Dev.DevKit.ConsoleCore.OAuth`        | To be fixed |
| `Dev.DevKit.ConsoleCore.Interactive`  | To be fixed |
| `Dev.DevKit.ConsoleCore.DeviceCode`   | To be fixed |
| `Dev.DevKit.ConsoleCore.FromPac`      | To be fixed |
| `Dev.DevKit.ConsoleCore.AD`           | To be fixed |

---

## Notes

- Console Core templates are **separate** from Console templates
- Do NOT reuse `Resources/cs/console/*` - create new files in `Resources/cs/consolecore/`
- Console project will be deprecated in favor of Console Core in the future

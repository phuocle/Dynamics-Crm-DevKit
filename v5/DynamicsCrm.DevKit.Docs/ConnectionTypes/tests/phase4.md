# Phase 4 Test Guide - Integration & Polish

> **Status**: ✅ Phase 4 Complete  
> **Branch**: `feature/connection-types-phase-4`  
> **Last Tested**: 2026-01-14  
> **Reference**: [Rnwood.Dataverse.Data.PowerShell](https://github.com/rnwood/Rnwood.Dataverse.Data.PowerShell)

---

## QUAN TRỌNG
- Đảm bảo CLI build không bị lỗi (6 warnings về DPAPI Windows-only là expected)
- **AI không tự động test gì hết**
- Khi cần test, AI sẽ mention cho user biết là hãy test profile xxx

---

## Reference Implementation

| Feature         | Rnwood Pattern              | DevKit Implementation                       |
| --------------- | --------------------------- | ------------------------------------------- |
| PAC Profile     | `-FromPac`, `-Profile`      | `--auth FromPac`, `--pacprofile`            |
| Active Profile  | Read `Current.UNIVERSAL`    | Same pattern (authprofiles_v2.json)         |
| Index Lookup    | 1-indexed (matches PAC CLI) | Same pattern                                |
| Profile Storage | `authprofiles_v2.json`      | `%LOCALAPPDATA%\Microsoft\PowerAppsCLI\`    |
| Token Sharing   | `DefaultAzureCredential`    | Same (shares tokens with Azure CLI/PAC CLI) |

---

## Test Credentials

### PAC CLI Setup (Prerequisite)
```powershell
# User đã có PAC profile "DEVKITV4" với index 11
pac auth list  # Verify profile exists
```

---

## Build & Run

### Step 1: Build CLI
```powershell
taskkill /F /IM "DynamicsCrm.DevKit.Cli.exe" 2>$null
dotnet build --configuration Release "D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj" --no-dependencies
```

### Step 2: Run Profiles
- **Profile 33-DEVKITV4.FromPac**: Uses active PAC profile (--pacprofile shows "(active)")
- **Profile 34-DEVKITV4.FromPac.NamedProfile**: Uses "DEVKITV4" profile by name
- **Profile 35-DEVKITV4.FromPac.Index**: Uses profile by index 11 (1-indexed, matches pac auth list)

---

## Test Cases

### Test 1: FromPac with Active Profile (Profile 33)
```
--auth FromPac
--json "..\DynamicsCrm.DevKit.Cli.json"
--profile "DEBUG"
```

**Expected**: Uses currently active PAC CLI profile

### Test 2: FromPac with Named Profile (Profile 34)
```
--auth FromPac
--pacprofile "DEVKITV4"
--json "..\DynamicsCrm.DevKit.Cli.json"
--profile "DEBUG"
```

**Expected**: Uses "DEVKITV4" profile by name

### Test 3: FromPac with Index (Profile 35)
```
--auth FromPac
--pacprofile "11"
--json "..\DynamicsCrm.DevKit.Cli.json"
--profile "DEBUG"
```

**Expected**: Uses profile at index 11 (1-indexed, matches `pac auth list` display)

### Test 4: PAC Profiles File Not Found
**Expected Error**: "PAC CLI profiles file not found at: ...\authprofiles_v2.json"

### Test 5: Profile Not Found
```
--auth FromPac
--pacprofile "NonExistent"
```

**Expected Error**: "PAC CLI profile 'NonExistent' not found. Available profiles: [1] xxx, [2] yyy, ..."

---

## Files Changed

| File                                            | Change                                        |
| ----------------------------------------------- | --------------------------------------------- |
| `ConnectionBuilder/FromPacConnectionBuilder.cs` | NEW                                           |
| `ConnectionBuilder/ConnectionBuilderFactory.cs` | Updated for FromPac                           |
| `Models/DevKitCommandArgs.cs`                   | Added `--pacprofile`                          |
| `DynamicsCrm.DevKit.Shared.projitems`           | Added FromPacConnectionBuilder                |
| `launchSettings.json`                           | Added profiles 33-35                          |
| `Commands/DevKitCommand.cs`                     | PacProfile display, URL exemption for FromPac |

---

## 🎉🎊 PHASE 4 HOÀN THÀNH! 🎊🎉

### ✅ Chúc mừng! Phase 4 - Integration & Polish đã hoàn thành!

Bạn chỉ cần chạy **MỘT LỆNH DUY NHẤT** sau để verify Phase 4 hoạt động:

**Chạy profile 34 trong Visual Studio hoặc:**
```powershell
cd D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestServerCode\TestPluginServer\Dev.DevKit.Server
dotnet run --project D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj -- server --auth FromPac --pacprofile "DEVKITV4" --json "..\DynamicsCrm.DevKit.Cli.json" --profile "DEBUG"
```

### ✨ Expected Output:
```
Connected: https://dynamics-crm-devkit-v4.crm.dynamics.com with connection timeout: ...
```

### 🚀 All Connection Types Complete!
All 9 connection types are now implemented:
1. OAuth (with username/password)
2. ClientSecret
3. Interactive (browser)
4. DeviceCode (headless)
5. ClientCertificate
6. ManagedIdentity
7. DefaultAzureCredential
8. FromPac ← **NEW**
9. AD (on-premise)

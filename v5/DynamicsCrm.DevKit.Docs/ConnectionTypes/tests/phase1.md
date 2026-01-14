# Phase 1 Test Guide - Foundation & Enhancements

> **Status**: ✅ Phase 1 Complete  
> **Profile**: `07-DEVKITV4.Server`  
> **Last Tested**: 2026-01-13  
> **Reference**: [Rnwood.Dataverse.Data.PowerShell](https://github.com/rnwood/Rnwood.Dataverse.Data.PowerShell)

---

## ⚠️ QUAN TRỌNG
- Đảm bảo CLI build không bị lỗi
- AI không tự động test gì hết
- User test thủ công và check lại các mục bên dưới
- Profiles đã được tạo trong `launchSettings.json`

---

## 📚 Reference Implementation Comparison

### Rnwood Patterns We Follow

| Feature | Rnwood Implementation | Our Implementation (Phase 1) |
|---------|----------------------|------------------------------|
| **ClientSecret Auth** | `-clientid "..." -clientsecret "..."` | `--conn "AuthType=ClientSecret;ClientId=...;ClientSecret=..."` |
| **Custom ClientId for OAuth** | `-clientid "..."` parameter | `AppId=...` in connection string |
| **TenantId Support** | `-tenantid "..."` parameter | `TenantId=...` in connection string (Phase 1 enhancement) |
| **Connection String** | Full connection string support | ✅ Maintained backward compatibility |

---

## 🔧 Dev Mode Setup

File `DevKitCommand.cs` có flag để exit ngay sau connection check:

```csharp
const bool DEV_CONNECTION_TEST_ONLY = true;  // Set false for normal operation
```

**Đường dẫn**: `DynamicsCrm.DevKit.Cli/Commands/DevKitCommand.cs` (line ~152)

---

## 📋 Test Credentials (Hardcoded)

| Property | Value |
|----------|-------|
| **Url** | `https://dynamics-crm-devkit-v4.crm.dynamics.com` |
| **ClientId** | `1a60a5c2-d04c-4b26-8f86-9d6ce0616799` |
| **ClientSecret** | `4Y11hDyKJYQTqXC9cRDXnoJ2DytZDs/jYI1byYwKli57mRfjHcCPu6Qx5sxgtCWQ` |
| **AuthType** | `ClientSecret` |

---

## 📁 Files Changed in Phase 1

| File | Changes |
|------|---------|
| `DynamicsCrm.DevKit.Shared/Models/CrmConnection.cs` | +18 properties (ClientId, TenantId, Certificate fields, ManagedIdentity, etc.) |
| `DynamicsCrm.DevKit.Shared/Const.cs` | +ConnectionType class with 9 constants |
| `DynamicsCrm.DevKit.Shared/Helper.cs` | +Enhanced BuildConnectionString() for new properties |
| `DynamicsCrm.DevKit.Cli/Commands/DevKitCommand.cs` | +DEV_CONNECTION_TEST_ONLY flag |

---

## 🧪 User Test Checklist

### Pre-Test: Build Verification
- [ ] Mở project `DynamicsCrm.DevKit.Cli` trong Visual Studio
- [ ] Build project (Ctrl+Shift+B)
- [ ] Build thành công (0 errors)

---

### Test 1: Profile `07-DEVKITV4.Server` (ClientSecret Auth)
- [ ] Chọn profile `07-DEVKITV4.Server` từ dropdown
- [ ] Nhấn F5
- [ ] **Expected**: CLI hiện banner DynamicsCrm.DevKit CLI
- [ ] **Expected**: Arguments hiện đúng, `ClientSecret` được mask `********`
- [ ] **Expected**: Hiện "Connected: https://dynamics-crm-devkit-v4.crm.dynamics.com with connection timeout: 3,600 (seconds)"
- [ ] **Expected**: Hiện "[DEV] Connection test successful - exiting early for connection type development"

**Expected Output**:
```
╔════════════════════════════════════════════════════════════════════════════════╗
║   DynamicsCrm.DevKit CLI                                                       ║
╚════════════════════════════════════════════════════════════════════════════════╝
 Current Directory          D:\github\...\Dev.DevKit.Server
 DynamicsCrm.DevKit.Cli.exe ...
 DynamicsCrm.DevKit.Cli.json ...
 Arguments: --conn          AuthType=ClientSecret;Url=...;ClientId=...;ClientSecret=********;
            --json          ..\DynamicsCrm.DevKit.Cli.json
            --profile       DEBUG
║
║Connected: https://dynamics-crm-devkit-v4.crm.dynamics.com with connection timeout: 3,600 (seconds)
║
║[DEV] Connection test successful - exiting early for connection type development
║END
```

**Result**: 
- [ ] ✅ PASS
- [ ] ❌ FAIL - Lý do: _______________

---

### Test 2: Verify Password Masking
- [ ] Trong output của Test 1, kiểm tra `ClientSecret=********`
- [ ] **Expected**: Password KHÔNG hiện plain text

**Result**: 
- [ ] ✅ PASS
- [ ] ❌ FAIL - Lý do: _______________

---

### Test 3: Backward Compatibility (Optional OAuth)
Nếu có OAuth credentials:
- [ ] Tạo connection string với `AuthType=OAuth`
- [ ] **Expected**: Kết nối thành công với OAuth

**Result**: 
- [ ] ✅ PASS
- [ ] ❌ FAIL - Lý do: _______________
- [ ] ⏭️ SKIPPED

---

## 📊 Test Summary

| Test | Profile | Status |
|------|---------|--------|
| Build Verification | - | [ ] |
| Test 1 | `07-DEVKITV4.Server` | [ ] |
| Test 2 | Password Masking | [ ] |
| Test 3 | OAuth (Optional) | [ ] |

---

## ⚠️ Remember

1. Set `DEV_CONNECTION_TEST_ONLY = false` before release
2. Remove or comment out the dev block in `DevKitCommand.cs`
3. Test full flow with real plugin deployment before merge

---

## 🚧 Future: Rnwood-style Arguments

Đã implemented trong Phase 2:
- ✅ `--url` argument
- ✅ `--clientid` argument  
- ✅ `--clientsecret` argument
- ✅ `--auth` argument (Interactive, DeviceCode)

---

## 🎉🎊 PHASE 1 HOÀN THÀNH! 🎊🎉

### ✅ Phase 1 - Foundation & Enhancements đã hoàn thành!

User đã verify tất cả test cases ở trên.

### 🚀 Next: Phase 2 - Modern Interactive Auth
- ✅ Interactive (Browser OAuth) - DONE
- ✅ DeviceCode (Headless OAuth) - DONE
- ✅ New arguments: `--url`, `--auth`, `--clientid`, `--clientsecret` - DONE

---

**Document Version**: 1.1  
**Created**: 2026-01-13  
**Updated**: 2026-01-13  
**Purpose**: Phase 1 Test Guide with User Checklist

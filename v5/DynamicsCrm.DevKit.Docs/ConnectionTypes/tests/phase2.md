# Phase 2 Test Guide - Modern Interactive Authentication

> **Status**: ✅ Phase 2 Complete  
> **Profiles**: `24-DEVKITV4.Interactive`, `25-DEVKITV4.DeviceCode`  
> **Date**: 2026-01-13  
> **Reference**: [Rnwood.Dataverse.Data.PowerShell](https://github.com/rnwood/Rnwood.Dataverse.Data.PowerShell)

---

## ⚠️ QUAN TRỌNG
- Đảm bảo CLI build không bị lỗi
- AI không tự động test gì hết
- User test thủ công và check lại các mục bên dưới
- Profiles đã được tạo trong `launchSettings.json`

---

## 📋 Phase 2 Implementation Summary

| Feature | Status | Description |
|---------|--------|-------------|
| Interactive (Browser OAuth) | ✅ Implemented | Opens browser for user authentication |
| DeviceCode (Headless OAuth) | ✅ Implemented | Displays URL + code for headless environments |
| SecureTokenCache | ✅ Implemented | DPAPI-encrypted token storage |
| CLI Arguments | ✅ Implemented | `--auth`, `--url`, `--clientid`, `--clientsecret` |

---

## 📁 Files Created/Modified in Phase 2

| File | Changes |
|------|---------|
| `DynamicsCrm.DevKit.Shared/SecureTokenCache.cs` | NEW - DPAPI token cache |
| `DynamicsCrm.DevKit.Shared/ConnectionBuilder/IConnectionBuilder.cs` | NEW - Interface |
| `DynamicsCrm.DevKit.Shared/ConnectionBuilder/InteractiveConnectionBuilder.cs` | NEW - Browser OAuth |
| `DynamicsCrm.DevKit.Shared/ConnectionBuilder/DeviceCodeConnectionBuilder.cs` | NEW - Headless OAuth |
| `DynamicsCrm.DevKit.Shared/ConnectionBuilder/ConnectionBuilderFactory.cs` | NEW - Factory |
| `DynamicsCrm.DevKit.Shared/DynamicsCrm.DevKit.Shared.projitems` | +5 files added |
| `DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj` | +1 NuGet package |
| `DynamicsCrm.DevKit.Cli/Models/DevKitCommandArgs.cs` | +3 arguments |
| `DynamicsCrm.DevKit.Cli/Commands/DevKitCommand.cs` | +ConnectWithModernAuthAsync |
| `DynamicsCrm.DevKit.Cli/Properties/launchSettings.json` | +2 test profiles |

---

## 🧪 User Test Checklist

### Pre-Test: Build Verification
- [x] Mở project `DynamicsCrm.DevKit.Cli` trong Visual Studio
- [x] Build project (Ctrl+Shift+B)
- [x] Build thành công với 4 warnings (expected - DPAPI is Windows-only)

---

### Test 1: Profile `24-DEVKITV4.Interactive`
- [x] Chọn profile `24-DEVKITV4.Interactive` từ dropdown
- [x] Nhấn F5
- [x] **Expected**: Browser mở tự động
- [x] Đăng nhập với credentials (có thể yêu cầu MFA)
- [x] **Expected**: CLI hiện "Connected: https://..." 
- [x] **Expected**: Tạo file cache tại `%LOCALAPPDATA%\DynamicsCrmDevKit\TokenCache\`

**Result**: 
- [x] ✅ PASS
- [ ] ❌ FAIL - Lý do: _______________

---

### Test 2: Profile `25-DEVKITV4.DeviceCode`
- [x] Chọn profile `25-DEVKITV4.DeviceCode` từ dropdown
- [x] Nhấn F5
- [x] **Expected**: CLI hiện Device Code Authentication box:
```
═══════════════════════════════════════════════════════════════
 Device Code Authentication
═══════════════════════════════════════════════════════════════

 To sign in, use a web browser to open the page https://microsoft.com/devicelogin 
 and enter the code XXXXXXXX to authenticate.

 Waiting for authentication...
═══════════════════════════════════════════════════════════════
```
- [x] Mở browser, truy cập URL và nhập code
- [x] Đăng nhập thành công
- [x] **Expected**: CLI hiện "Connected: https://..."

**Result**: 
- [x] ✅ PASS
- [ ] ❌ FAIL - Lý do: _______________

---

### Test 3: Profile `07-DEVKITV4.Server` (Backward Compatibility)
- [x] Chọn profile `07-DEVKITV4.Server` từ dropdown
- [x] Nhấn F5
- [x] **Expected**: Kết nối bằng ClientSecret như cũ
- [x] **Expected**: CLI hiện "Connected: https://..."
- [x] **Expected**: Không có lỗi gì (backward compatible)

**Result**: 
- [x] ✅ PASS
- [ ] ❌ FAIL - Lý do: _______________

---

### Test 4: Silent Token Acquisition (Optional)
Sau Test 1, chạy lại profile `24-DEVKITV4.Interactive`:
- [x] Chọn profile `24-DEVKITV4.Interactive`
- [x] Nhấn F5 lại
- [x] **Expected**: KHÔNG mở browser (dùng cached token)
- [x] **Expected**: Kết nối ngay lập tức

**Result**: 
- [x] ✅ PASS
- [ ] ❌ FAIL - Lý do: _______________

---

## 📊 Test Summary

| Test | Profile | Status |
|------|---------|--------|
| Build Verification | - | [ ] |
| Test 1 | `24-DEVKITV4.Interactive` | [ ] |
| Test 2 | `25-DEVKITV4.DeviceCode` | [ ] |
| Test 3 | `07-DEVKITV4.Server` | [ ] |
| Test 4 | Silent Token (Optional) | [ ] |

---

## �️ Token Cache Management

Token được cache tại: `%LOCALAPPDATA%\DynamicsCrmDevKit\TokenCache\`

**Xem cache files:**
```powershell
dir "$env:LOCALAPPDATA\DynamicsCrmDevKit\TokenCache\"
```

**Xóa toàn bộ cache (để test login lại từ đầu):**
```powershell
Remove-Item "$env:LOCALAPPDATA\DynamicsCrmDevKit\TokenCache\*" -Force
```

**Lưu ý:**
- Lần đầu: Mở browser → Login → Token được cache
- Lần 2+: Dùng cached token → Không cần login (silent acquisition)
- Để test login flow lại: Xóa cache trước

---

## �🚧 Known Limitations

1. **Windows-only DPAPI**: Token cache uses Windows DPAPI, will not work on Linux/macOS
2. **Token expiry**: Tokens expire after ~1 hour (standard Azure AD behavior)
3. **MFA required**: If Conditional Access requires MFA, user must complete it

---

## 🎉🎊 PHASE 2 HOÀN THÀNH! 🎊🎉

### ✅ Phase 2 - Modern Interactive Authentication đã hoàn thành!

User đã verify tất cả test cases ở trên.

### 🚀 Next: Phase 3 - Production & Azure Auth
- ClientCertificate (Certificate-based auth)
- ManagedIdentity (Azure VMs, App Services)
- DefaultAzureCredential (Azure credential chain)

---

**Document Version**: 1.1  
**Created**: 2026-01-13  
**Updated**: 2026-01-13  
**Purpose**: Phase 2 Test Guide with User Checklist

# Phase 3 Test Guide - Production & Azure Auth

> **Status**: ✅ Phase 3 Complete  
> **Profiles**: `26-32` (ClientCertificate, ManagedIdentity, DefaultAzureCredential, ClientSecret, OAuth, AD)  
> **Date**: 2026-01-14  
> **Reference**: [Rnwood.Dataverse.Data.PowerShell](https://github.com/rnwood/Rnwood.Dataverse.Data.PowerShell)

---

## ⚠️ QUAN TRỌNG
- Đảm bảo CLI build không bị lỗi
- AI không tự động test gì hết
- User test thủ công và check lại các mục bên dưới
- Profiles đã được tạo trong `launchSettings.json`

---

## 📋 Phase 3 Implementation Summary

| Feature | Status | Description |
|---------|--------|-------------|
| ClientCertificate | ✅ Implemented | Certificate-based auth (file or store) |
| ManagedIdentity | ✅ Implemented | Azure VM/App Service identity |
| DefaultAzureCredential | ✅ Implemented | Azure credential chain |
| ClientSecret | ✅ Implemented | --auth ClientSecret with params |
| OAuth | ✅ Implemented | --auth OAuth with user/pass |
| AD | ✅ Implemented | --auth AD for on-premise |
| Azure.Identity Package | ✅ Added | NuGet package for Azure auth |

---

## 📁 Files Created/Modified in Phase 3

| File | Changes |
|------|---------|
| `ConnectionBuilder/ClientCertificateConnectionBuilder.cs` | NEW - File and store certificate auth |
| `ConnectionBuilder/ManagedIdentityConnectionBuilder.cs` | NEW - Azure managed identity |
| `ConnectionBuilder/DefaultAzureCredentialConnectionBuilder.cs` | NEW - Azure credential chain |
| `ConnectionBuilder/ClientSecretConnectionBuilder.cs` | NEW - ClientSecret with separate params |
| `ConnectionBuilder/OAuthConnectionBuilder.cs` | NEW - OAuth with user/pass |
| `ConnectionBuilder/ADConnectionBuilder.cs` | NEW - AD for on-premise |
| `ConnectionBuilderFactory.cs` | Updated - Enable all Phase 3 builders |
| `DevKitCommandArgs.cs` | +7 arguments (cert, identity) |
| `DevKitCommand.cs` | Map CLI args to CrmConnection |
| `launchSettings.json` | Profiles 26-32 |
| `DynamicsCrm.DevKit.Cli.csproj` | +Azure.Identity package |
| `DynamicsCrm.DevKit.Shared.projitems` | +6 new builder files |

---

## 🔧 CLI Arguments Added

### ClientCertificate
- `--cert` - Path to certificate file (.pfx, .p12)
- `--certpass` - Password for certificate file
- `--certthumb` - Certificate thumbprint for store lookup
- `--certstorelocation` - Certificate store location (CurrentUser, LocalMachine)
- `--certstorename` - Certificate store name (My, Root, CA)

### ManagedIdentity
- `--managedidentityclientid` - Client ID for user-assigned managed identity

### ClientSecret, OAuth, AD
- `--clientid` - Azure AD Client ID
- `--clientsecret` - Client secret (plain or encrypted)
- `--user` - Username (OAuth, AD)
- `--pass` - Password (OAuth, AD)

---

## 🧪 User Test Checklist

### Pre-Test: Build Verification
- [x] Build CLI project
- [x] Build succeeds with 0 errors (6 warnings expected - DPAPI)

---

### Test 1: Profile `28-DEVKITV4.DefaultAzureCredential` (Easiest to test)

**Cách hoạt động (từ [Rnwood source](https://github.com/rnwood/Rnwood.Dataverse.Data.PowerShell/blob/main/Rnwood.Dataverse.Data.PowerShell.Cmdlets/Commands/GetDataverseConnectionCmdlet.cs)):**

```csharp
// Rnwood dùng DefaultAzureCredential từ Azure.Identity
var credential = new Azure.Identity.DefaultAzureCredential();
result = new ServiceClientWithTokenProvider(Url, url => GetTokenWithAzureCredential(credential, url));
```

**Credential Chain (thử theo thứ tự):**
1. EnvironmentCredential (AZURE_CLIENT_ID, AZURE_TENANT_ID, AZURE_CLIENT_SECRET)
2. ManagedIdentityCredential (Azure VM/App Service)
3. VisualStudioCredential ← **Dễ nhất nếu đã login VS**
4. **AzureCliCredential** ← **`az login` sẽ được dùng ở đây**
5. AzurePowerShellCredential (Connect-AzAccount)
6. InteractiveBrowserCredential (fallback)

**Prerequisites**: 
- **Cách 1**: Login Azure CLI với `az login` (user phải có Dynamics 365 access)
- **Cách 2**: Login Visual Studio Azure account

**Steps**:
- [x] Run `az login` trong terminal HOẶC login Azure account trong Visual Studio
- [x] User phải có quyền truy cập Dynamics 365 environment
- [x] Chọn profile `28-DEVKITV4.DefaultAzureCredential` từ dropdown
- [x] Nhấn F5
- [x] **Expected**: CLI hiện "Connected: https://..."

**Result**: 
- [x] ✅ PASS
- [ ] ❌ FAIL - Lý do: _______________
- [ ] ⏭️ SKIPPED

---

### Test 2: Profile `29-DEVKITV4.ClientSecret.PlainText`

**Cách hoạt động:**
```csharp
// CLI nhận --clientid và --clientsecret
// Build connection string và dùng ServiceClient(connectionString)
var connStr = $"AuthType=ClientSecret;Url={url};ClientId={clientId};ClientSecret={secret};";
```

**Profile sử dụng:**
```
--auth ClientSecret
--clientid "1a60a5c2-d04c-4b26-8f86-9d6ce0616799"
--clientsecret "~je8Q~4DL221zUgKOaHq-EWMlowkpl3KEbZItccL"
```

**Steps**:
- [x] Chọn profile `29-DEVKITV4.ClientSecret.PlainText`
- [x] Nhấn F5
- [x] **Expected**: CLI hiện "Connected: https://..."

**Result**: 
- [x] ✅ PASS
- [ ] ❌ FAIL - Lý do: _______________
- [ ] ⏭️ SKIPPED

---

### Test 3: Profile `30-DEVKITV4.ClientSecret.Encrypted`

**Cách hoạt động:**
```csharp
// Helper.DecryptString() tự động detect encrypted vs plain text
// Nếu value có thể decrypt được → đã encrypted, decrypt ra plain text
// Nếu không decrypt được → đã là plain text, return nguyên giá trị
var clientSecret = Helper.DecryptString(connection.ClientSecret);
```

**Profile sử dụng:**
```
--clientsecret "4Y11hDyKJYQTqXC9cRDXnoJ2DytZDs/jYI1byYwKli57mRfjHcCPu6Qx5sxgtCWQ"
```
→ Decrypt ra: `~je8Q~4DL221zUgKOaHq-EWMlowkpl3KEbZItccL`

**Steps**:
- [x] Chọn profile `30-DEVKITV4.ClientSecret.Encrypted`
- [x] Nhấn F5
- [x] **Expected**: CLI decrypt secret và connect thành công

**Result**: 
- [x] ✅ PASS
- [ ] ❌ FAIL - Lý do: _______________
- [ ] ⏭️ SKIPPED

---

### Test 4: Profile `27-DEVKITV4.ManagedIdentity` (Azure only)

**Cách hoạt động (từ Rnwood):**
```csharp
TokenCredential credential;
if (!string.IsNullOrEmpty(ManagedIdentityClientId))
    credential = new ManagedIdentityCredential(ManagedIdentityClientId);  // User-assigned
else
    credential = new ManagedIdentityCredential();  // System-assigned
```

#### Prerequisites: Azure Resource với Managed Identity

**Supported resources:**
- Azure VM
- Azure App Service
- Azure Functions
- Azure Container Instances

#### Bước 1: Enable Managed Identity trên Azure Resource

**Azure VM:**
```bash
az vm identity assign --resource-group <RG> --name <VM_NAME>
az vm show --resource-group <RG> --name <VM_NAME> --query identity.principalId -o tsv
```

**Azure App Service:**
```bash
az webapp identity assign --resource-group <RG> --name <APP_NAME>
```

#### Bước 2: Cấp quyền Dataverse cho Managed Identity

1. Vào [Power Platform Admin Center](https://admin.powerplatform.microsoft.com/)
2. Chọn Environment → Settings → Users → Application Users
3. **+ New app user** → Chọn Managed Identity Principal ID
4. Assign Security Role (e.g., System Administrator)

**Steps**:
- [ ] Enable Managed Identity trên Azure resource
- [ ] Cấp quyền Dataverse cho Managed Identity
- [ ] Deploy CLI lên Azure resource
- [ ] Chạy CLI với profile

**Result**: 
- [ ] ✅ PASS
- [ ] ❌ FAIL - Lý do: _______________
- [x] ⏭️ SKIPPED - No Azure resource

---

### Test 5: Profile `26-DEVKITV4.ClientCertificate`

#### Bước 1: Tạo Self-Signed Certificate

```powershell
$cert = New-SelfSignedCertificate `
    -Subject "CN=DevKit-ClientCert" `
    -CertStoreLocation "Cert:\CurrentUser\My" `
    -KeyExportPolicy Exportable `
    -KeySpec Signature `
    -KeyLength 2048 `
    -KeyAlgorithm RSA `
    -HashAlgorithm SHA256 `
    -NotAfter (Get-Date).AddYears(2)

Write-Host "Thumbprint: $($cert.Thumbprint)"
```

#### Bước 2: Export Certificate

```powershell
Export-Certificate -Cert $cert -FilePath "D:\github\DevKit-ClientCert.cer"

$password = ConvertTo-SecureString -String "MyPassword123!" -Force -AsPlainText
Export-PfxCertificate -Cert $cert -FilePath "D:\github\DevKit-ClientCert.pfx" -Password $password
```

#### Bước 3: Upload Certificate lên Azure AD

1. Azure Portal → App Registrations
2. Certificates & secrets → Upload .cer
3. Copy Client ID

**Option A: Dùng PFX file**
```
--cert "D:\\github\\DevKit-ClientCert.pfx" --certpass "MyPassword123!"
```

**Option B: Dùng Certificate Store (Thumbprint)**
```
--certthumb "YOUR_THUMBPRINT_HERE"
```

**Result**: 
- [ ] ✅ PASS
- [ ] ❌ FAIL - Lý do: _______________
- [x] ⏭️ SKIPPED - No certificate setup

---

### Test 6: Profile `31-DEVKITV4.OAuth`

**Cách hoạt động:**
```csharp
var connStr = $"AuthType=OAuth;Url={url};Username={user};Password={pass};AppId={appId};...";
```

**Yêu cầu:**
- Update `--user` và `--pass` trong profile

**Result**: 
- [ ] ✅ PASS
- [ ] ❌ FAIL - Lý do: _______________
- [x] ⏭️ SKIPPED - Cần update credentials

---

### Test 7: Profile `32-DEVKITV4.AD`

**Cách hoạt động:**
```csharp
// Parse domain\username
var connStr = $"AuthType=AD;Url={url};Domain={domain};Username={user};Password={pass};";
```

**Yêu cầu:**
- On-premise Dynamics CRM
- Update `--url`, `--user`, `--pass` trong profile

**Result**: 
- [ ] ✅ PASS
- [ ] ❌ FAIL - Lý do: _______________
- [x] ⏭️ SKIPPED - On-premise only

---

## 📊 Test Summary

| Test | Profile | Status |
|------|---------|--------|
| Build Verification | - | ✅ |
| Test 1 | `28-DefaultAzureCredential` | ✅ |
| Test 2 | `29-ClientSecret.PlainText` | ✅ |
| Test 3 | `30-ClientSecret.Encrypted` | ✅ |
| Test 4 | `27-ManagedIdentity` | ⏭️ |
| Test 5 | `26-ClientCertificate` | ⏭️ |
| Test 6 | `31-OAuth` | ⏭️ |
| Test 7 | `32-AD` | ⏭️ |

---

## 🎉 PHASE 3 COMPLETE!

3/7 tests passed, 4 skipped (require specific setup).

### 🚀 Next: Phase 4 - Integration & Polish
- FromPac (PAC CLI integration)
- Documentation finalization
- End-to-end testing

---

**Document Version**: 2.0  
**Updated**: 2026-01-14  
**Purpose**: Phase 3 Test Guide with All Profiles

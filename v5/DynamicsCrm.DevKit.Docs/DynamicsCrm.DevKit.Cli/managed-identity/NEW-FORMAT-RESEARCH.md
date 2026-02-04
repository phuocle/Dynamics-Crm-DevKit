# Plugin Managed Identity - NEW Format Research (v1)

> **Date**: February 3, 2026  
> **Status**: Research Complete  
> **Branch**: `v5_plugin_managed_identity`

---

## Executive Summary

Sau khi nghiên cứu kỹ Microsoft docs và testing, tôi đã tìm ra **nguyên nhân gốc** tại sao plugin vẫn dùng OLD format:

> [!CAUTION]
> Script hiện tại **THIẾU 2 BƯỚC QUAN TRỌNG** để enable NEW format (v1)!

---

## OLD vs NEW Format Comparison

### OLD Format (v0) - What Current Script Uses

| Component | Value |
|-----------|-------|
| **Issuer** | `https://{envIdNoHyphens.first30}.{envIdNoHyphens.last2}.environment.api.powerplatform.com/sts` |
| **Subject** | `component:pluginassembly,thumbprint:{thumbprint},environment:{envId}` |
| **Version** | Not specified (defaults to v0) |

**Ưu điểm**: Works ngay không cần thêm step
**Nhược điểm**: Sẽ deprecated, dùng legacy issuer

---

### NEW Format (v1) - Microsoft Docs Current

| Component | Value |
|-----------|-------|
| **Issuer** | `https://login.microsoftonline.com/{tenantID}/v2.0` |
| **Subject** | `/eid1/c/pub/t/{encodedTenantId}/a/qzXoWDkuqUa3l6zM5mM0Rw/n/plugin/e/{environmentId}/h/{sha256Hash}` |
| **Version** | `1` (explicit in managed identity record) |

**Subject Breakdown**:
| Segment | Description | Value Example |
|---------|-------------|---------------|
| `eid1` | Identity format version 1 | Fixed |
| `c/pub` | Cloud code (public cloud) | Fixed for public cloud |
| `t/{encodedTenantId}` | Base64URL of TenantId bytes | `g4RSSZu3iEu4bn2IK6aJEQ` |
| `a/qzXoWDkuqUa3l6zM5mM0Rw` | **Constant** internal identifier | Fixed |
| `n/plugin` | Component type | Fixed for plugins |
| `e/{environmentId}` | Raw Environment GUID | `cbba8ce9-ea7c-e440-b083-0b9517496e17` |
| `h/{hash}` | SHA256 hash of certificate (.cer) as Base64URL | `6bq233aU_LJ-...` |

---

## Critical Missing Steps in OLD Script

### Current Script Flow (INCOMPLETE):
1. ✅ Create Azure Resource Group
2. ✅ Create Azure Key Vault
3. ✅ Create Secret
4. ✅ Create App Registration
5. ✅ Create Service Principal
6. ✅ Configure Key Vault Access Policy
7. ✅ Generate Certificate
8. ✅ Upload Certificate to Key Vault
9. ✅ Create Federated Credential (OLD format)
10. ❌ **MISSING: Create `managedidentities` record in Dataverse**
11. ❌ **MISSING: Link Plugin Assembly to Managed Identity**

### Required NEW Steps (from MS Docs):

#### Step 1: Create Managed Identity Record in Dataverse

```http
POST https://{orgUrl}/api/data/v9.0/managedidentities

{
  "applicationid": "{appId}",
  "managedidentityid": "{anyGuid}",
  "credentialsource": 2,
  "subjectscope": 1,
  "tenantid": "{tenantId}",
  "version": 1
}
```

| Field | Value | Description |
|-------|-------|-------------|
| `applicationid` | App Registration Client ID | Azure AD App ID |
| `managedidentityid` | Any new GUID | Unique identifier |
| `credentialsource` | `2` | Managed client |
| `subjectscope` | `1` | Environment-specific scope |
| `tenantid` | Tenant ID | Azure AD Tenant |
| `version` | `1` | **KEY: Enables NEW format!** |

#### Step 2: Link Plugin Assembly to Managed Identity

```http
PATCH https://{orgUrl}/api/data/v9.0/pluginassemblies({pluginAssemblyId})

{
  "managedidentityid@odata.bind": "/managedidentities({managedIdentityGuid})"
}
```

---

## Why OLD Script Works Without These Steps?

Khi **KHÔNG có** managed identity record với `version: 1`:
- Dataverse runtime sử dụng **legacy v0 format**
- Issuer là `environment.api.powerplatform.com/sts`
- Subject là `component:pluginassembly,thumbprint:...,environment:...`

Khi **CÓ** managed identity record với `version: 1`:
- Dataverse runtime chuyển sang **NEW v1 format**
- Issuer là `login.microsoftonline.com/{tenantID}/v2.0`
- Subject là `/eid1/c/pub/t/.../a/.../n/plugin/e/.../h/...`

---

## Action Plan

### Phase 1: Test NEW Format with Manual Steps

1. **Create NEW federated credential** (already done ✅)
2. **Create managed identity record** via POST to `/managedidentities`
3. **Link plugin assembly** via PATCH to `/pluginassemblies`
4. **Test plugin** - should now use NEW format

### Phase 2: Update Script

After testing works:
1. Update `Plugin-Managed-Identity.ps1` to include Dataverse API calls
2. Add PAC CLI or direct API calls to create managed identity record
3. Add step to link plugin assembly

---

## Encoding Functions Reference

### TenantId/GUID to Base64URL

```powershell
function Convert-GuidToBase64Url {
    param([string]$guid)
    $guidObj = [System.Guid]::Parse($guid)
    $bytes = $guidObj.ToByteArray()
    $base64 = [System.Convert]::ToBase64String($bytes)
    return $base64.Replace('+', '-').Replace('/', '_').TrimEnd('=')
}
```

### Certificate SHA256 Hash

```powershell
$cerBytes = [System.IO.File]::ReadAllBytes($cerPath)
$sha256 = [System.Security.Cryptography.SHA256]::Create()
$hashBytes = $sha256.ComputeHash($cerBytes)
$hashBase64Url = [System.Convert]::ToBase64String($hashBytes).Replace('+', '-').Replace('/', '_').TrimEnd('=')
```

---

## References

- [Set up Power Platform managed identity](https://learn.microsoft.com/en-us/power-platform/admin/set-up-managed-identity)
- [IManagedIdentityService](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.imanagedidentityservice)

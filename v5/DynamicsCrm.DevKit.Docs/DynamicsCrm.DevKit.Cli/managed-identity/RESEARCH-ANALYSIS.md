# Dataverse Plugin Managed Identity - Research Analysis

> **Date**: February 3, 2026  
> **Status**: Research Complete - Awaiting Review  
> **Branch**: `v5_plugin_managed_identity`

---

## Executive Summary

After extensive research of Microsoft Learn documentation and community posts from 2024-2025, I discovered that **Microsoft has significantly updated the Managed Identity setup process**. The current script in DynamicsCrm.DevKit uses an **outdated format** that worked during the early preview period but is **now obsolete**.

> [!CAUTION]
> The current script creates federated credentials using the OLD format which may not work with new Dataverse environments or after GA release (March 2025).

---

## Timeline of Changes

| Period | Status | Issuer/Subject Format |
|--------|--------|----------------------|
| Aug 2024 | Public Preview | OLD: `environment.api.powerplatform.com/sts` |
| Late 2024 | Updated Docs | NEW: `login.microsoftonline.com/{tenantID}/v2.0` |
| Mar 2025 | GA | NEW format is the standard |
| Jun 2025 | GA | Full production support |

---

## Comparison: OLD vs NEW Format

### Federated Credential Configuration

#### OLD Format (Current Script - 4 months ago)

```text
Issuer: https://{ENV_PREFIX}.{ENV_SUFFIX}.environment.api.powerplatform.com/sts
Subject: component:pluginassembly,thumbprint:{THUMBPRINT},environment:{ENVID}
Audience: api://AzureADTokenExchange
```

**How script calculates issuer:**
```powershell
$envIdNoHyphens = $EnvironmentId.Replace("-", "")
$envIdPrefix = $envIdNoHyphens.Substring(0, $envIdNoHyphens.Length - 2)
$envIdSuffix = $envIdNoHyphens.Substring($envIdNoHyphens.Length - 2)
$issuer2 = "https://$envIdPrefix.$envIdSuffix.environment.api.powerplatform.com/sts"
$subject2 = "component:pluginassembly,thumbprint:$($CertificateThumbprint),environment:$EnvironmentId"
```

---

#### NEW Format (Microsoft Learn - 2025)

```text
Issuer: https://login.microsoftonline.com/{tenantID}/v2.0

Subject (Self-signed cert): 
/eid1/c/pub/t/{encodedTenantId}/a/qzXoWDkuqUa3l6zM5mM0Rw/n/plugin/e/{environmentId}/h/{hash}

Subject (Trusted CA cert):
/eid1/c/pub/t/{encodedTenantId}/a/qzXoWDkuqUa3l6zM5mM0Rw/n/plugin/e/{environmentId}/i/{issuer}/s/{certificateSubject}

Audience: api://AzureADTokenExchange
```

**Key encoding requirements:**
- `{encodedTenantId}`: GUID → Hex → Base64URL (NOT standard Base64!)
- `{hash}`: SHA-256 of the .cer file, Base64URL encoded
- Environment ID: Standard GUID format with dashes

---

## Why The OLD Script Created 2 Keys?

Looking at the current script, I see it only creates **1 federated credential** named `PowerPlatform-Issuer`:

```powershell
$credName2 = "PowerPlatform-Issuer"
$newCred2 = @{
    name = $credName2
    issuer = $issuer2
    subject = $subject2
    description = "Power Platform Issuer - Authentication for Env $EnvironmentId"
    audiences = @("api://AzureADTokenExchange")
}
```

> [!NOTE]
> The script currently creates only **1 credential**. If anh Phước observed 2 keys, the old script version may have had additional credential creation code that was previously removed. Or there were manual Azure Portal additions.

---

## Microsoft Learn Documentation Sources

### Primary Documentation
- **URL**: [https://learn.microsoft.com/en-us/power-platform/admin/set-up-managed-identity](https://learn.microsoft.com/en-us/power-platform/admin/set-up-managed-identity)
- **Last Updated**: 2025

### Key Points from Documentation:

1. **Prerequisites**
   - Azure subscription with access to UAMI or App Registration
   - Visual Studio (IDE)
   - Plugin Registration Tool
   - SignTool.exe to sign plug-in assembly
   - Power Platform CLI
   - Valid certificate for signing

2. **Setup Steps** (NEW Process)
   1. Create app registration OR user-assigned managed identity
   2. Configure federated identity credentials (NEW format)
   3. Create and register Dataverse plug-ins
   4. Build and sign plug-in assembly
   5. Create managed identity record in Dataverse
   6. Grant access to Azure resources
   7. Validate integration

3. **Managed Identity Record** (NEW)
   ```json
   POST https://<<orgURL>>/api/data/v9.0/managedidentities
   {
     "applicationid": "<<appId>>",
     "managedidentityid": "<<anyGuid>>",
     "credentialsource": 2,
     "subjectscope": 1,
     "tenantid": "<<tenantId>>",
     "version": 1
   }
   ```

4. **Associate with Plugin Assembly** (NEW)
   ```json
   PATCH https://<<orgURL>>/api/data/v9.0/pluginassemblies(<<PluginAssemblyId>>)
   {
     "managedidentityid@odata.bind": "/managedidentities(<<ManagedIdentityGuid>>)"
   }
   ```

---

## Community Posts Summary (2024-2025)

### itmustbecode.com
- Confirms the OLD format with `environment.api.powerplatform.com/sts`
- Written during preview period
- Now outdated

### medium.com / dynamics-chronicles.com
- Game-changer for security
- Eliminates credential storage risks
- Plugin assembly must be signed with certificate

### marius-wodtke.de / clive-oldridge.com
- Detailed tutorials using OLD format
- Complex setup process noted
- XrmToolBox plugins available to help

---

## Recommendations

### Option A: Update Script to NEW Format (Recommended)
1. Change issuer from `environment.api.powerplatform.com/sts` to `login.microsoftonline.com/{tenantID}/v2.0`
2. Update subject to new `/eid1/c/pub/...` format
3. Implement Base64URL encoding for tenantId
4. Update certificate hash calculation

### Option B: Keep OLD Format for Backward Compatibility
- Only if existing environments require OLD format
- Not recommended for new setups

### Option C: Support Both Formats
- Add a config option to choose format
- Most flexible but more complex

---

## Next Steps

1. **Confirm with anh Phước**: 
   - Which approach to take (A, B, or C)?
   - Is the 2-key issue still occurring?
   - Can we test with a fresh environment?

2. **If updating script**:
   - Modify `Dev.DevKit.Server2/Plugin-Managed-Identity.ps1` only
   - Implement NEW format
   - Test with real Azure environment

3. **Update documentation**:
   - Create user guide for managed identity setup
   - Update README if needed

---

## References

1. [Microsoft Learn - Set up Power Platform managed identity](https://learn.microsoft.com/en-us/power-platform/admin/set-up-managed-identity)
2. [IManagedIdentityService API](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.imanagedidentityservice)
3. [SignTool.exe documentation](https://learn.microsoft.com/en-us/dotnet/framework/tools/signtool-exe)

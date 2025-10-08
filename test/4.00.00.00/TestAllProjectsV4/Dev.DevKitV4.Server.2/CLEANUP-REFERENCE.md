# 🧹 Cleanup Script - Quick Reference

## Purpose
The `04.Cleanup-All.ps1` script safely removes all Azure resources and local files created by scripts 01-03, allowing you to start fresh.

---

## ⚠️ What Gets Deleted

### Azure Resources
- **App Registration** (`DynamicsCrmDevKitManagedIdentity`)
  - Service Principal (deleted automatically)
  - All Federated Credentials (deleted automatically)

- **Resource Group** (`DevKit`)
  - Key Vault (`kv-dataverse-secrets`)
  - All other resources in the group

### Local Resources
- **Windows Certificate Store**
  - Certificate with subject: `CN=DynamicsCrmDevKitManagedIdentity`
  - Thumbprint: `8B3D731DF5B92993EAC96E4161C7B1E3F08F6853`

- **Local Files**
  - `ManagedIdentity.pfx` (private key)
  - `ManagedIdentity.cer` (public certificate)
  - `config.json` (configuration file)

---

## 🚀 How to Run

### Basic Usage

```powershell
.\04.Cleanup-All.ps1
```

### Step-by-Step

1. **Navigate to script directory**
   ```powershell
   cd "d:\github\Dynamics-Crm-DevKit\test\4.00.00.00\TestAllProjectsV4\Dev.DevKitV4.Server.2"
   ```

2. **Run the cleanup script**
   ```powershell
   .\04.Cleanup-All.ps1
   ```

3. **Review what will be deleted**
   - The script displays a list of all resources to be deleted

4. **Confirm deletion**
   - Type `DELETE` (must be uppercase)
   - Any other input will cancel the operation

5. **Wait for completion**
   - Azure resources delete in the background
   - Local files are removed immediately

---

## 🛡️ Safety Features

### 1. Configuration-Based
- Reads `config.json` to determine what to delete
- Won't delete resources not in the config
- If config is missing, only local files are cleaned

### 2. Confirmation Required
```
Type 'DELETE' (in uppercase) to confirm deletion: DELETE
```
- Must type exactly `DELETE` (case-sensitive)
- Typing anything else cancels the operation

### 3. Preview Before Delete
Shows everything that will be deleted:
```
📋 The following resources will be DELETED:
  🗑️  App Registration: DynamicsCrmDevKitManagedIdentity
  🗑️  Resource Group: DevKit
  🗑️  Certificate from Windows Store
  🗑️  Local Files
```

### 4. Graceful Error Handling
- Continues even if resources don't exist
- Reports missing resources as info (not errors)
- Provides detailed error messages for actual failures

### 5. Summary Report
Shows what was deleted and any errors:
```
✅ Successfully Completed (6):
   • Deleted App Registration
   • Resource Group deletion initiated
   • Deleted certificate
   • Deleted files
```

---

## 📊 Exit Codes

- **0**: Cleanup completed successfully
- **1**: Cleanup completed with errors (check summary)

---

## 🔍 What Happens to Each Resource

### App Registration
```powershell
az ad app delete --id $AppId
```
- ✅ App Registration deleted
- ✅ Service Principal deleted automatically
- ✅ All federated credentials deleted automatically

### Resource Group
```powershell
az group delete --name $ResourceGroup --yes --no-wait
```
- ✅ Deletion starts in background
- ✅ Key Vault deleted
- ✅ All resources in group deleted
- ⏳ May take a few minutes to complete

### Certificate (Windows Store)
```powershell
Get-ChildItem Cert:\CurrentUser\My |
    Where-Object {$_.Thumbprint -eq $Thumbprint} |
    Remove-Item -Force
```
- ✅ Certificate removed from CurrentUser\My store

### Local Files
```powershell
Remove-Item -Force
```
- ✅ `.pfx` file deleted
- ✅ `.cer` file deleted
- ✅ `config.json` deleted

---

## ❓ Common Scenarios

### Scenario 1: Testing the Setup Scripts

**Problem:** You want to test scripts 01-03 multiple times

**Solution:**
```powershell
# Run cleanup
.\04.Cleanup-All.ps1
# Type: DELETE

# Start fresh
.\01.Setup-Azure.ps1
# Fill config.json
.\01.Setup-Azure.ps1
.\02.Setup-Certificate.ps1
.\03.Setup-PowerPlatformFederatedCredentials.ps1
```

---

### Scenario 2: Made a Configuration Mistake

**Problem:** You entered wrong values in config.json

**Solution:**
```powershell
# Clean up wrong resources
.\04.Cleanup-All.ps1
# Type: DELETE

# Start over with correct values
.\01.Setup-Azure.ps1
```

---

### Scenario 3: Key Vault Name Conflict

**Problem:** Key Vault name is already taken globally

**Solution:**
```powershell
# Clean up
.\04.Cleanup-All.ps1
# Type: DELETE

# Edit config.json with new KeyVaultName
# Run setup again
.\01.Setup-Azure.ps1
```

---

### Scenario 4: Project Cleanup

**Problem:** You're done testing and want to remove everything

**Solution:**
```powershell
.\04.Cleanup-All.ps1
# Type: DELETE

# Everything is cleaned up
# Azure costs stopped
# Local files removed
```

---

## 🚨 Troubleshooting

### Issue: "config.json NOT FOUND"

**Meaning:** Nothing to clean up

**Action:** No action needed - this means cleanup was already done or setup was never run

---

### Issue: "Not logged in to Azure"

**Solution:** Script will prompt for Azure login automatically

---

### Issue: "App Registration not found"

**Meaning:** App was already deleted or never created

**Action:** No action needed - script continues with other resources

---

### Issue: "Resource Group not found"

**Meaning:** Resource group was already deleted or never created

**Action:** No action needed - script continues with other resources

---

### Issue: "Certificate not found in Windows Store"

**Meaning:** Certificate was already removed or never installed

**Action:** No action needed - script continues with other resources

---

### Issue: Cleanup completed with errors

**Check:**
1. Review the error messages in the summary
2. Verify Azure CLI is working: `az account show`
3. Check Azure portal to see if resources still exist
4. Manually delete remaining resources if needed

---

## ⏱️ How Long Does It Take?

| Resource | Time | Notes |
|----------|------|-------|
| App Registration | 5-10 seconds | Deleted immediately |
| Resource Group | 2-5 minutes | Runs in background |
| Certificate | 1-2 seconds | Instant removal |
| Local Files | < 1 second | Instant deletion |

**Total Time:** ~10-15 seconds for script execution, but Resource Group deletion continues in background

---

## 🔄 After Cleanup

Once cleanup is complete:

1. ✅ All Azure resources are deleted (or being deleted)
2. ✅ All local files are removed
3. ✅ No `config.json` exists
4. ✅ Ready to run `01.Setup-Azure.ps1` again

---

## 💡 Best Practices

1. **Always run cleanup before re-testing**
   - Prevents resource conflicts
   - Ensures clean state

2. **Wait for Resource Group deletion**
   - Check Azure portal to confirm deletion is complete
   - May need to wait 2-5 minutes

3. **Backup config.json if needed**
   - Copy config.json before cleanup if you want to keep the values
   - You can restore it after cleanup to reuse the same settings

4. **Review the summary**
   - Check that all expected resources were deleted
   - Verify no unexpected errors occurred

---

## 📝 Manual Cleanup (If Script Fails)

If the script fails, you can manually clean up:

### Azure Portal
1. Go to [Azure Portal](https://portal.azure.com)
2. Delete App Registration: **Azure Active Directory** → **App registrations** → Find app → Delete
3. Delete Resource Group: **Resource groups** → Find group → Delete

### Windows Certificate
1. Open **certmgr.msc** (Certificate Manager)
2. Go to **Personal** → **Certificates**
3. Find certificate by subject name
4. Right-click → Delete

### Local Files
```powershell
Remove-Item "ManagedIdentity.pfx" -Force
Remove-Item "ManagedIdentity.cer" -Force
Remove-Item "config.json" -Force
```

---

**Quick Reference Version:** 1.0
**Last Updated:** October 2025

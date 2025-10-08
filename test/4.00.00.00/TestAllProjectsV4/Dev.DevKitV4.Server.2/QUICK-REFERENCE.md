# ⚡ Quick Reference Card

**One-page reference for Azure Setup Scripts**

---

## 🎯 Commands (Copy & Paste)

### First Time Setup
```powershell
.\01.Setup-Azure.ps1          # Creates config.json
notepad config.json            # Fill in your values
.\01.Setup-Azure.ps1          # Creates Azure resources
.\02.Setup-Certificate.ps1     # Generates certificate
.\03.Setup-PowerPlatformFederatedCredentials.ps1  # Creates credentials
```

### Start Fresh (Clean Up Everything)
```powershell
.\04.Cleanup-All.ps1          # Deletes all resources
# Type: DELETE
```

---

## 📋 config.json - Required Fields

| Field | Example | Where to Get |
|-------|---------|--------------|
| AppName | "DynamicsCrmDevKitManagedIdentity" | Choose any name |
| ResourceGroup | "DevKit" | Choose any name |
| Location | "eastus" | [Azure regions](https://azure.microsoft.com/en-us/explore/global-infrastructure/geographies/) |
| KeyVaultName | "kv-dataverse-secrets" | Choose unique name (globally) |
| SecretName | "MySecret" | Choose any name |
| SecretValue | "MySecretValue123!" | Your secret value |
| CertificatePassword | "P@ssw0rd123!" | Strong password |
| CertificateSubject | "CN=DynamicsCrmDevKitManagedIdentity" | CN=YourAppName |
| CertificateFileName | "ManagedIdentity" | Choose file prefix |
| ValidityYears | 2 | 1-5 years |
| EnvironmentId | ["guid"] | Power Platform Admin Center |
| OrganizationId | ["guid"] | Power Platform Admin Center |

**Auto-filled:** TenantId, AppId, KeyVaultURL, CertificatePath, CertificateThumbprint, CertificateSHA256Hash

---

## 🔍 Get Power Platform IDs

### Method 1: Admin Center
```
https://admin.powerplatform.microsoft.com/
→ Select environment
→ Settings → Details
→ Copy Environment ID and Organization ID
```

### Method 2: PowerShell
```powershell
Install-Module Microsoft.PowerApps.Administration.PowerShell
Add-PowerAppsAccount
Get-AdminPowerAppEnvironment | Select EnvironmentName, EnvironmentId
```

### Method 3: Power Apps
```
https://make.powerapps.com/
→ Settings (gear) → Session details
→ Copy Instance Id and Organization Id
```

---

## 🚨 Common Errors & Fixes

| Error | Fix |
|-------|-----|
| "config.json NOT FOUND" | Run `01.Setup-Azure.ps1` first |
| "Missing Required Configuration" | Fill in empty fields in config.json |
| "KeyVault name already exists" | Change KeyVaultName (must be globally unique) |
| "EnvironmentId count mismatch" | Arrays must have same length |
| "Certificate not found" | Re-run `02.Setup-Certificate.ps1` |

---

## 📊 Script Status Codes

| Exit Code | Meaning |
|-----------|---------|
| 0 | Success |
| 1 | Error or validation failed |

---

## 🎨 Output Colors

| Color | Meaning |
|-------|---------|
| 🟢 Green | Success |
| 🔴 Red | Error |
| 🟡 Yellow | Warning/Info |
| 🔵 Cyan | Section header |

---

## 🗂️ Files Created

### Azure Resources
- Resource Group (with Key Vault)
- App Registration (with Service Principal)
- Federated Credentials (2 per environment)

### Local Files
- `config.json` - Configuration
- `ManagedIdentity.pfx` - Private key
- `ManagedIdentity.cer` - Public cert

### Certificate Store
- Cert:\CurrentUser\My\{Thumbprint}

---

## 🧹 What Cleanup Deletes

| Resource | Deleted By |
|----------|------------|
| App Registration | Script 04 |
| Service Principal | Automatic |
| Federated Credentials | Automatic |
| Resource Group | Script 04 |
| Key Vault | Automatic (in RG) |
| Certificate (Windows) | Script 04 |
| .pfx file | Script 04 |
| .cer file | Script 04 |
| config.json | Script 04 |

---

## ⏱️ Time Requirements

| Task | Duration |
|------|----------|
| Fill config.json | 5-10 min |
| Run Script 1 | 30-60 sec |
| Run Script 2 | 5-10 sec |
| Run Script 3 | 10-20 sec |
| Run Script 4 | 10-15 sec |
| **Total Setup** | **~15 min** |

---

## 🔐 Security Checklist

- [ ] Add `config.json` to `.gitignore`
- [ ] Add `*.pfx` to `.gitignore`
- [ ] Use strong certificate password (12+ chars)
- [ ] Don't share .pfx files
- [ ] Set ValidityYears to 1-2 years
- [ ] Plan certificate renewal

---

## 📚 Documentation Files

| File | When to Read |
|------|--------------|
| **README.md** | First time / Overview |
| **SETUP-GUIDE.md** | Setup scripts 01-03 |
| **CLEANUP-REFERENCE.md** | Cleanup script 04 |
| **FILES-SUMMARY.md** | File inventory |
| **QUICK-REFERENCE.md** | This card (quick ref) |

---

## 🆘 Getting Help

1. Check script error message
2. Read relevant documentation:
   - Setup issues → [SETUP-GUIDE.md](SETUP-GUIDE.md)
   - Cleanup issues → [CLEANUP-REFERENCE.md](CLEANUP-REFERENCE.md)
3. Verify prerequisites:
   - PowerShell 7+
   - Azure CLI
   - Proper permissions
4. Check Azure Portal for resources

---

## ✅ Success Verification

### After Setup
```powershell
# Check Azure resources
az account show
az group show --name "DevKit"
az ad app show --id <AppId>
az keyvault list --resource-group "DevKit"

# Check certificate
Get-ChildItem Cert:\CurrentUser\My |
    Where-Object {$_.Subject -eq "CN=DynamicsCrmDevKitManagedIdentity"}

# Check files
Test-Path "config.json"
Test-Path "ManagedIdentity.pfx"
Test-Path "ManagedIdentity.cer"
```

### After Cleanup
```powershell
# Verify deletion
az group show --name "DevKit"  # Should fail
Test-Path "config.json"         # Should be False
```

---

## 🎯 Workflow at a Glance

```
1️⃣ Run → 2️⃣ Edit → 3️⃣ Run → 4️⃣ Run → 5️⃣ Run → ✅ Done
   01      config     01      02      03
         .json

Need to restart? Run 04 (Cleanup) → Back to 1️⃣
```

---

## 💾 Backup config.json

```powershell
# Before cleanup, backup if needed
Copy-Item config.json config.json.backup

# Restore later
Copy-Item config.json.backup config.json
```

---

## 🔗 Useful Links

- [PowerShell 7 Download](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell)
- [Azure CLI Download](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- [Power Platform Admin](https://admin.powerplatform.microsoft.com/)
- [Azure Portal](https://portal.azure.com)

---

## 📞 Quick Commands Reference

```powershell
# Azure CLI - Login
az login

# Azure CLI - Show account
az account show

# Azure CLI - List resource groups
az group list --output table

# Azure CLI - List app registrations
az ad app list --display-name "DynamicsCrmDevKitManagedIdentity"

# Azure CLI - List Key Vaults
az keyvault list --resource-group "DevKit" --output table

# PowerShell - Check certificate
Get-ChildItem Cert:\CurrentUser\My | Format-Table Subject, Thumbprint

# PowerShell - Edit config
notepad config.json

# PowerShell - View config
Get-Content config.json | ConvertFrom-Json | Format-List
```

---

**Keep this reference handy!** 📌

Print or bookmark this page for quick access during setup.

---

**Version:** 1.0
**Last Updated:** October 2025

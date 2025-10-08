# 📘 Azure Setup Scripts for Dataverse Plugin Deployment

Complete automation for setting up Azure resources, certificates, and federated credentials required for Dataverse plugin deployment with managed identities.

---

## 📂 Files in This Directory

### PowerShell Scripts

| Script | Purpose | When to Run |
|--------|---------|-------------|
| `01.Setup-Azure.ps1` | Creates Azure resources (App Registration, Key Vault, Resource Group) | **First** - Initial setup |
| `02.Setup-Certificate.ps1` | Generates self-signed certificate for code signing | **Second** - After Azure setup |
| `03.Setup-PowerPlatformFederatedCredentials.ps1` | Creates federated credentials for Power Platform | **Third** - After certificate |
| `04.Cleanup-All.ps1` | Deletes all Azure resources and local files | **Anytime** - To start fresh |

### Configuration Files

| File | Purpose | Commit to Git? |
|------|---------|----------------|
| `config.json` | **Active configuration** with your actual values | ❌ **NO** - Contains secrets |
| `config.json.template` | Example configuration with sample values | ✅ **YES** - Safe to commit |

### Documentation Files

| File | Purpose |
|------|---------|
| `SETUP-GUIDE.md` | **Complete step-by-step guide** for running scripts 01-03 |
| `CLEANUP-REFERENCE.md` | **Detailed reference** for the cleanup script (04) |
| `README.md` | This file - Quick overview and getting started |

---

## 🚀 Quick Start

### 1️⃣ First Time Setup

```powershell
# Step 1: Create config.json template
.\01.Setup-Azure.ps1

# Step 2: Edit config.json with your values
notepad config.json

# Step 3: Create Azure resources
.\01.Setup-Azure.ps1

# Step 4: Generate certificate
.\02.Setup-Certificate.ps1

# Step 5: Setup federated credentials
.\03.Setup-PowerPlatformFederatedCredentials.ps1
```

**Result:** All Azure resources created and ready for Dataverse plugin deployment ✅

---

### 2️⃣ Start Fresh (Cleanup and Redo)

```powershell
# Clean up everything
.\04.Cleanup-All.ps1
# Type: DELETE when prompted

# Start over from step 1
.\01.Setup-Azure.ps1
```

**Result:** All resources deleted, ready to run setup scripts again ✅

---

## 📖 Documentation

### For Setup (Scripts 01-03)
👉 **Read: [SETUP-GUIDE.md](SETUP-GUIDE.md)**

Comprehensive guide covering:
- Prerequisites and permissions
- Step-by-step instructions
- How to get Environment/Organization IDs
- Configuration reference
- Troubleshooting
- Security best practices

### For Cleanup (Script 04)
👉 **Read: [CLEANUP-REFERENCE.md](CLEANUP-REFERENCE.md)**

Detailed reference covering:
- What gets deleted
- Safety features
- Common scenarios
- Troubleshooting
- Manual cleanup procedures

---

## 🔄 Workflow Diagram

```
START
  ↓
┌─────────────────────────────────────┐
│ 01.Setup-Azure.ps1                  │
│ • Creates config.json template      │
│ • YOU: Fill in your values          │
│ • Run script again                  │
│ • Creates Azure resources           │
└─────────────────────────────────────┘
  ↓
┌─────────────────────────────────────┐
│ 02.Setup-Certificate.ps1            │
│ • Generates self-signed certificate │
│ • Exports .pfx and .cer files       │
│ • Updates config.json               │
└─────────────────────────────────────┘
  ↓
┌─────────────────────────────────────┐
│ 03.Setup-PowerPlatform...ps1        │
│ • Creates federated credentials     │
│ • One per environment               │
└─────────────────────────────────────┘
  ↓
✅ READY FOR DEPLOYMENT


Need to start over? ↓

┌─────────────────────────────────────┐
│ 04.Cleanup-All.ps1                  │
│ • Deletes ALL resources             │
│ • Removes ALL local files           │
│ • Type DELETE to confirm            │
└─────────────────────────────────────┘
  ↓
Back to START
```

---

## 📋 Prerequisites

Before running these scripts, ensure you have:

- ✅ **PowerShell 7+** ([Download](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell))
- ✅ **Azure CLI** ([Download](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli))
- ✅ **Azure Account** with permissions:
  - Create resource groups
  - Create app registrations
  - Create Key Vault
- ✅ **Power Platform Environment(s)** and their IDs
- ✅ **Contributor or Owner** role on Azure subscription

---

## ⚙️ Configuration Overview

### config.json Structure

The configuration file has **18 properties** organized into two sections:

#### 🙋 User Input (You fill these in)
1. `AppName` - Your app registration name
2. `ResourceGroup` - Azure resource group name
3. `Location` - Azure region (e.g., "eastus")
4. `KeyVaultName` - Key Vault name (globally unique)
5. `SecretName` - Secret name to store
6. `SecretValue` - Secret value
7. `CertificatePassword` - Certificate password
8. `CertificateSubject` - Certificate subject (CN=...)
9. `CertificateFileName` - Certificate file prefix
10. `ValidityYears` - Certificate validity (1-5 years)
11. `EnvironmentId` - Power Platform environment IDs (array)
12. `OrganizationId` - Organization IDs (array)

#### 🤖 Auto-Populated (Scripts fill these in)
13. `TenantId` - Azure tenant ID (Script 1)
14. `AppId` - App registration ID (Script 1)
15. `KeyVaultURL` - Key Vault URL (Script 1)
16. `CertificatePath` - Certificate file path (Script 2)
17. `CertificateThumbprint` - Certificate thumbprint (Script 2)
18. `CertificateSHA256Hash` - Certificate SHA-256 hash (Script 2)

### Example config.json

```json
{
    "AppName": "DynamicsCrmDevKitManagedIdentity",
    "ResourceGroup": "DevKit",
    "Location": "eastus",
    "KeyVaultName": "kv-dataverse-secrets",
    "SecretName": "MySecret",
    "SecretValue": "MySecretValue123!",
    "CertificatePassword": "P@ssw0rd123!",
    "CertificateSubject": "CN=DynamicsCrmDevKitManagedIdentity",
    "CertificateFileName": "ManagedIdentity",
    "ValidityYears": 2,
    "EnvironmentId": ["env-id-1", "env-id-2"],
    "OrganizationId": ["org-id-1", "org-id-2"],
    "TenantId": "",
    "AppId": "",
    "KeyVaultURL": "",
    "CertificatePath": "",
    "CertificateThumbprint": "",
    "CertificateSHA256Hash": ""
}
```

---

## 🎯 What Gets Created

### Azure Resources

```
Azure Subscription
└── Resource Group: DevKit
    └── Key Vault: kv-dataverse-secrets
        └── Secret: MySecret

Azure Active Directory
└── App Registration: DynamicsCrmDevKitManagedIdentity
    ├── Service Principal
    └── Federated Credentials (2 per environment)
        ├── Azure AD Issuer
        └── Power Platform Issuer
```

### Local Resources

```
Dev.DevKitV4.Server.2/
├── config.json (your configuration)
├── ManagedIdentity.pfx (private key - password protected)
└── ManagedIdentity.cer (public certificate)
```

### Windows Certificate Store

```
Certificate Store: Cert:\CurrentUser\My
└── Certificate: CN=DynamicsCrmDevKitManagedIdentity
    ├── Thumbprint: 8B3D731DF5B92993...
    └── Valid for: 2 years
```

---

## 🔐 Security Notes

### ⚠️ IMPORTANT

1. **Never commit config.json to Git**
   ```gitignore
   # Add to .gitignore
   config.json
   *.pfx
   ```

2. **Protect certificate files**
   - `.pfx` contains private key
   - Use strong password
   - Store securely

3. **Use strong passwords**
   - Minimum 12 characters
   - Include uppercase, lowercase, numbers, symbols

4. **Rotate certificates regularly**
   - Set ValidityYears to 1-2 years
   - Plan renewal before expiration

---

## 🧪 Testing Workflow

### Test the Setup

```powershell
# 1. Run setup scripts
.\01.Setup-Azure.ps1  # Fill config.json, run again
.\02.Setup-Certificate.ps1
.\03.Setup-PowerPlatformFederatedCredentials.ps1

# 2. Verify in Azure Portal
# - Check Resource Group exists
# - Check App Registration exists
# - Check Key Vault exists
# - Check Federated Credentials exist

# 3. Test with your Dataverse plugin deployment

# 4. Clean up when done testing
.\04.Cleanup-All.ps1
```

---

## ❗ Common Issues

### Issue: "KeyVault name already exists"
**Solution:** Key Vault names are globally unique. Change `KeyVaultName` in config.json

### Issue: "Missing Required Configuration"
**Solution:** Check error message, fill in missing fields in config.json

### Issue: "EnvironmentId and OrganizationId count mismatch"
**Solution:** Both arrays must have the same number of entries in matching order

### Issue: "Certificate not found"
**Solution:** Re-run `02.Setup-Certificate.ps1`

### Issue: Need to start over
**Solution:** Run `04.Cleanup-All.ps1` and start fresh

---

## 📞 Getting Help

### If you encounter issues:

1. **Check the detailed guides:**
   - [SETUP-GUIDE.md](SETUP-GUIDE.md) for setup issues
   - [CLEANUP-REFERENCE.md](CLEANUP-REFERENCE.md) for cleanup issues

2. **Review script output:**
   - Scripts provide detailed error messages
   - Check what step failed

3. **Verify prerequisites:**
   - PowerShell 7+ installed
   - Azure CLI installed and logged in
   - Proper Azure permissions

4. **Check Azure Portal:**
   - Verify resources were created
   - Check for permission issues

---

## 📚 Additional Resources

- [Azure CLI Documentation](https://docs.microsoft.com/en-us/cli/azure/)
- [Azure App Registration](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
- [Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/)
- [Power Platform Admin Center](https://admin.powerplatform.microsoft.com/)
- [Dataverse Plugins](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/plug-ins)
- [Federated Credentials](https://docs.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation)

---

## 📝 Script Summary

| Script | Duration | Azure Login Required | Creates Resources | Modifies config.json |
|--------|----------|---------------------|-------------------|---------------------|
| 01.Setup-Azure.ps1 | ~30 sec | ✅ Yes | ✅ Yes | ✅ Yes |
| 02.Setup-Certificate.ps1 | ~5 sec | ❌ No | ✅ Yes (local/cert store) | ✅ Yes |
| 03.Setup-PowerPlatform...ps1 | ~10 sec | ✅ Yes (with cert) | ✅ Yes | ❌ No |
| 04.Cleanup-All.ps1 | ~10 sec | ✅ Yes | ❌ No (deletes) | ❌ No (deletes) |

---

## 🏁 Success Criteria

After running scripts 01-03, you should have:

- ✅ config.json with all 18 fields populated
- ✅ Azure Resource Group with Key Vault
- ✅ Azure App Registration with federated credentials
- ✅ Certificate files (.pfx and .cer)
- ✅ Certificate installed in Windows Certificate Store
- ✅ Ready to deploy Dataverse plugins with managed identity

---

**Version:** 4.0
**Last Updated:** October 2025
**Repository:** Dynamics-Crm-DevKit
**Branch:** v4

---

## 🎉 You're Ready!

Follow the **[SETUP-GUIDE.md](SETUP-GUIDE.md)** for detailed step-by-step instructions.

Good luck with your Dataverse plugin deployment! 🚀

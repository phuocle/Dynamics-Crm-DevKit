# Azure Setup Guide for Dataverse Plugin Deployment

This guide walks you through the process of setting up Azure resources, generating certificates, and configuring federated credentials for Dataverse plugin deployment using three PowerShell scripts.

---

## 📋 Prerequisites

Before starting, ensure you have:

- **PowerShell 7+** installed ([Download here](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell))
- **Azure CLI** installed and configured ([Download here](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli))
- **Azure Account** with appropriate permissions to:
  - Create resource groups
  - Create app registrations
  - Create service principals
  - Create and manage Azure Key Vault
- **Power Platform Environment(s)** where you want to deploy plugins
- **Contributor or Owner** role on the Azure subscription

---

## 🔄 Process Overview

The setup process consists of **3 sequential steps**:

```
┌─────────────────────────────────────────────────────────────────┐
│ Step 1: Setup Azure Resources (01.Setup-Azure.ps1)              │
│ - Creates config.json template                                  │
│ - Creates Azure Resource Group                                  │
│ - Creates App Registration & Service Principal                  │
│ - Creates Azure Key Vault                                       │
│ - Stores secret in Key Vault                                    │
│ - Updates config.json with TenantId, AppId, KeyVaultURL         │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ Step 2: Generate Certificate (02.Setup-Certificate.ps1)         │
│ - Creates self-signed certificate                               │
│ - Exports .pfx and .cer files                                   │
│ - Calculates SHA-256 hash                                       │
│ - Updates config.json with certificate details                  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ Step 3: Setup Federated Credentials (03.Setup-PP-Federated.ps1) │
│ - Connects to Azure with certificate                            │
│ - Deletes existing federated credentials (if any)               │
│ - Creates new federated credentials for each environment        │
│   • Azure AD Issuer credential                                  │
│   • Power Platform Issuer credential                            │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Step-by-Step Instructions

### Step 1: Setup Azure Resources

#### 1.1 Run the First Script

```powershell
cd "path\to\Dev.DevKitV4.Server.2"
.\01.Setup-Azure.ps1
```

This will create a `config.json` template file and display an error message listing required fields.

#### 1.2 Configure config.json

Open `config.json` and fill in the following **user input fields** (top section):

```json
{
    "AppName": "MyDataverseApp",                    // Your app registration name
    "ResourceGroup": "rg-dataverse-plugins",        // Resource group name
    "Location": "eastus",                            // Azure region (e.g., eastus, westus2)
    "KeyVaultName": "kv-dataverse-secrets",         // Key Vault name (must be globally unique)
    "SecretName": "MySecret",                        // Secret name to store
    "SecretValue": "MySecretValue123!",             // Secret value
    "CertificatePassword": "P@ssw0rd123!",          // Certificate password (strong password)
    "CertificateSubject": "CN=MyDataverseApp",      // Certificate subject (CN=YourAppName)
    "CertificateFileName": "cert-signing",          // Certificate file prefix
    "ValidityYears": 2,                             // Certificate validity (1-5 years)
    "EnvironmentId": [                              // Power Platform Environment IDs
        "env-id-1",
        "env-id-2"
    ],
    "OrganizationId": [                             // Organization IDs (same order as EnvironmentId)
        "org-id-1",
        "org-id-2"
    ],

    // Auto-populated fields (leave empty) - bottom section
    "TenantId": "",
    "AppId": "",
    "KeyVaultURL": "",
    "CertificatePath": "",
    "CertificateThumbprint": "",
    "CertificateSHA256Hash": ""
}
```

#### 1.3 Important Notes

- **KeyVaultName**: Must be globally unique across all of Azure (3-24 characters, alphanumeric and hyphens only)
- **Location**: Use Azure region codes (e.g., `eastus`, `westus2`, `centralus`)
- **CertificatePassword**: Use a strong password (minimum 8 characters with uppercase, lowercase, numbers, and symbols)
- **EnvironmentId** and **OrganizationId**: Must have the same number of entries and be in matching order

#### 1.4 Get Environment and Organization IDs

To find your Power Platform Environment ID and Organization ID:

**Option 1: Power Platform Admin Center**
1. Go to [Power Platform Admin Center](https://admin.powerplatform.microsoft.com/)
2. Select your environment
3. Click "See all" in the Details section
4. Copy the **Environment ID** (GUID format)
5. Copy the **Organization ID** (GUID format) from the Dataverse section

**Option 2: Using Power Apps**
1. Go to [Power Apps](https://make.powerapps.com/)
2. Select your environment
3. Go to Settings (gear icon) → Session details
4. Copy the **Instance Id** (EnvironmentId) and **Organization Id**

**Option 3: PowerShell**
```powershell
# Install module (first time only)
Install-Module -Name Microsoft.PowerApps.Administration.PowerShell

# Connect and list environments
Add-PowerAppsAccount
Get-AdminPowerAppEnvironment | Select-Object EnvironmentName, EnvironmentId
```

#### 1.5 Run Script 1 Again

After filling in the config.json:

```powershell
.\01.Setup-Azure.ps1
```

**Expected Output:**
```
✅ Logging into Azure...
✅ Creating Resource Group: rg-dataverse-plugins
✅ Creating App Registration: MyDataverseApp
✅ Creating Key Vault: kv-dataverse-secrets
✅ Setting secret in Key Vault...
✅ Configuration updated successfully!

📝 Summary:
   TenantId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   AppId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   KeyVaultURL: https://kv-dataverse-secrets.vault.azure.net/
```

---

### Step 2: Generate Certificate

#### 2.1 Run the Second Script

```powershell
.\02.Setup-Certificate.ps1
```

This script will:
- Create a self-signed certificate in your Windows certificate store
- Export the certificate to `.pfx` and `.cer` files
- Calculate the SHA-256 hash
- Update `config.json` with certificate details

**Expected Output:**
```
✅ Creating self-signed certificate...
✅ Certificate created successfully!
   Subject: CN=MyDataverseApp
   Thumbprint: A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0

✅ Exporting certificate...
   PFX: D:\path\to\cert-signing.pfx
   CER: D:\path\to\cert-signing.cer

✅ Calculating SHA-256 hash...
   Hash: a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6

✅ Configuration updated successfully!
```

#### 2.2 Certificate Files

After running this script, you'll have:
- `cert-signing.pfx` - Private key (password protected)
- `cert-signing.cer` - Public key certificate

**⚠️ Important:** Keep the `.pfx` file secure! It contains your private key.

---

### Step 3: Setup Federated Credentials

#### 3.1 Verify config.json

Before running the third script, verify that `config.json` has:
- ✅ All user input fields filled (from Step 1)
- ✅ Auto-populated fields from Script 1 (TenantId, AppId, KeyVaultURL)
- ✅ Auto-populated fields from Script 2 (CertificatePath, CertificateThumbprint, CertificateSHA256Hash)
- ✅ At least one EnvironmentId
- ✅ Matching OrganizationId entries

#### 3.2 Run the Third Script

```powershell
.\03.Setup-PowerPlatformFederatedCredentials.ps1
```

This script will:
- Connect to Azure using the certificate
- Delete any existing federated credentials (to avoid conflicts)
- Create two federated credentials for **each** environment:
  - Azure AD Issuer credential
  - Power Platform Issuer credential

**Expected Output:**
```
✅ Connecting to Azure with certificate...
✅ Connected successfully!

Processing Environment 1 of 2...
  Environment ID: env-id-1
  Organization ID: org-id-1

  🗑️  Deleting existing credentials (if any)...
  ✅ Creating Azure AD Issuer credential...
  ✅ Creating Power Platform Issuer credential...

Processing Environment 2 of 2...
  Environment ID: env-id-2
  Organization ID: org-id-2

  🗑️  Deleting existing credentials (if any)...
  ✅ Creating Azure AD Issuer credential...
  ✅ Creating Power Platform Issuer credential...

✅ All federated credentials created successfully!
```

---

## ✅ Verification

After completing all three steps:

### 1. Verify Azure Resources

```powershell
# Check Resource Group
az group show --name "rg-dataverse-plugins"

# Check App Registration
az ad app list --display-name "MyDataverseApp"

# Check Key Vault
az keyvault list --resource-group "rg-dataverse-plugins"

# Check Federated Credentials
az ad app federated-credential list --id <AppId>
```

### 2. Verify Certificate

```powershell
# Check certificate in Windows Certificate Store
Get-ChildItem -Path Cert:\CurrentUser\My | Where-Object {$_.Subject -eq "CN=MyDataverseApp"}

# Verify certificate files exist
Test-Path ".\cert-signing.pfx"
Test-Path ".\cert-signing.cer"
```

### 3. Verify config.json

Your final `config.json` should have **all 18 fields populated**:

```json
{
    "AppName": "MyDataverseApp",
    "ResourceGroup": "rg-dataverse-plugins",
    "Location": "eastus",
    "KeyVaultName": "kv-dataverse-secrets",
    "SecretName": "MySecret",
    "SecretValue": "MySecretValue123!",
    "CertificatePassword": "P@ssw0rd123!",
    "CertificateSubject": "CN=MyDataverseApp",
    "CertificateFileName": "cert-signing",
    "ValidityYears": 2,
    "EnvironmentId": ["env-id-1", "env-id-2"],
    "OrganizationId": ["org-id-1", "org-id-2"],
    "TenantId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "AppId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "KeyVaultURL": "https://kv-dataverse-secrets.vault.azure.net/",
    "CertificatePath": "D:\\path\\to\\cert-signing.pfx",
    "CertificateThumbprint": "A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0",
    "CertificateSHA256Hash": "a1b2c3d4e5f6..."
}
```

---

## 🔧 Troubleshooting

### Error: "config.json NOT FOUND"

**Solution:** Run `01.Setup-Azure.ps1` first to create the template.

---

### Error: "Missing Required Configuration"

**Solution:** Check the error message to see which fields are empty in `config.json` and fill them in.

---

### Error: "KeyVault name already exists"

**Solution:** Key Vault names must be globally unique. Choose a different name in `config.json`.

---

### Error: "Invalid certificate password"

**Solution:** Ensure the password in `config.json` matches the one used during certificate creation.

---

### Error: "EnvironmentId and OrganizationId count mismatch"

**Solution:** Both arrays must have the same number of entries and be in matching order.

---

### Error: "Failed to connect with certificate"

**Causes:**
1. Certificate not found in Windows Certificate Store
2. Certificate file path is incorrect
3. Certificate password is wrong

**Solution:** Re-run `02.Setup-Certificate.ps1` to regenerate the certificate.

---

### Error: "Federated credential already exists"

**Solution:** The script automatically deletes existing credentials. If this fails, manually delete them:

```powershell
az ad app federated-credential delete --id <AppId> --federated-credential-id <CredentialId>
```

---

## 🔐 Security Best Practices

1. **Never commit config.json to version control**
   - Add `config.json` to `.gitignore`
   - The template file `config.json.template` is safe to commit

2. **Protect certificate files**
   - Keep `.pfx` files secure and encrypted
   - Never share certificate passwords
   - Store certificates in Azure Key Vault for production

3. **Use strong passwords**
   - Certificate passwords should be at least 12 characters
   - Include uppercase, lowercase, numbers, and special characters

4. **Rotate certificates regularly**
   - Set `ValidityYears` to 1-2 years
   - Plan certificate renewal before expiration

5. **Limit access**
   - Grant minimal permissions to service principals
   - Use Azure RBAC for Key Vault access control

---

## 📚 Additional Resources

- [Azure CLI Documentation](https://docs.microsoft.com/en-us/cli/azure/)
- [Azure App Registration Guide](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
- [Azure Key Vault Documentation](https://docs.microsoft.com/en-us/azure/key-vault/)
- [Power Platform Admin Center](https://admin.powerplatform.microsoft.com/)
- [Dataverse Plugin Development](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/plug-ins)
- [Federated Credentials for Workload Identity](https://docs.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation)

---

## 📞 Support

If you encounter issues not covered in this guide:

1. Check the script output for detailed error messages
2. Verify all prerequisites are met
3. Ensure you have the required Azure permissions
4. Review the Azure portal to verify resource creation

---

## 📝 Quick Reference

### Script Execution Order

```powershell
# Step 1: Create Azure resources
.\01.Setup-Azure.ps1

# Edit config.json with your values

# Run Step 1 again after configuration
.\01.Setup-Azure.ps1

# Step 2: Generate certificate
.\02.Setup-Certificate.ps1

# Step 3: Setup federated credentials
.\03.Setup-PowerPlatformFederatedCredentials.ps1
```

### config.json Field Quick Reference

| Field | Required | Script | Description |
|-------|----------|--------|-------------|
| AppName | ✅ User | 1 | Azure app registration name |
| ResourceGroup | ✅ User | 1 | Azure resource group name |
| Location | ✅ User | 1 | Azure region (e.g., eastus) |
| KeyVaultName | ✅ User | 1 | Key Vault name (globally unique) |
| SecretName | ✅ User | 1 | Secret name to store |
| SecretValue | ✅ User | 1 | Secret value |
| CertificatePassword | ✅ User | 2 | Certificate password |
| CertificateSubject | ✅ User | 2 | Certificate subject (CN=) |
| CertificateFileName | ✅ User | 2 | Certificate file prefix |
| ValidityYears | ✅ User | 2 | Certificate validity (1-5) |
| EnvironmentId | ✅ User | 3 | Power Platform env IDs (array) |
| OrganizationId | ✅ User | 3 | Organization IDs (array) |
| TenantId | 🤖 Auto | 1 | Azure tenant ID |
| AppId | 🤖 Auto | 1 | App registration ID |
| KeyVaultURL | 🤖 Auto | 1 | Key Vault URL |
| CertificatePath | 🤖 Auto | 2 | Certificate file path |
| CertificateThumbprint | 🤖 Auto | 2 | Certificate thumbprint |
| CertificateSHA256Hash | 🤖 Auto | 2 | Certificate SHA-256 hash |

---

## 🧹 Cleanup and Starting Fresh

If you need to start over or want to remove all created resources, use the cleanup script:

### Script 4: Cleanup All Resources (04.Cleanup-All.ps1)

This script will **permanently delete**:
- ✅ Azure App Registration (includes service principal and federated credentials)
- ✅ Azure Resource Group (includes Key Vault and all resources)
- ✅ Certificate from Windows Certificate Store
- ✅ Local certificate files (.pfx and .cer)
- ✅ config.json file

#### How to Run Cleanup

```powershell
.\04.Cleanup-All.ps1
```

#### Safety Features

1. **Configuration Check**: Reads config.json to know what to delete
2. **Preview**: Shows all resources that will be deleted before proceeding
3. **Confirmation Required**: You must type `DELETE` (uppercase) to confirm
4. **Error Handling**: Continues cleanup even if some resources don't exist
5. **Summary Report**: Shows what was deleted successfully and any errors

#### Example Output

```
========================================
⚠️  CLEANUP SCRIPT - DELETE ALL RESOURCES
========================================

📋 The following resources will be DELETED:

  🗑️  App Registration: DynamicsCrmDevKitManagedIdentity
     • AppId: 89a8ddb5-6414-4478-8dd2-2aad7c9a292b
     • All federated credentials

  🗑️  Resource Group: DevKit
     • Key Vault: kv-dataverse-secrets
     • All resources within the group

  🗑️  Certificate from Windows Store:
     • Subject: CN=DynamicsCrmDevKitManagedIdentity
     • Thumbprint: 8B3D731DF5B92993EAC96E4161C7B1E3F08F6853

  🗑️  Local Files:
     • ManagedIdentity.pfx
     • ManagedIdentity.cer
     • config.json

⚠️  WARNING: This action CANNOT be undone!

Type 'DELETE' (in uppercase) to confirm deletion: DELETE

========================================
🧹 Starting Cleanup Process...
========================================

Step 1: Deleting Azure Resources...
✅ App Registration deleted successfully
✅ Resource Group deletion started (running in background)

Step 2: Deleting Certificate from Windows Store...
✅ Certificate removed from Windows Store

Step 3: Deleting Local Files...
✅ Deleted: ManagedIdentity.pfx
✅ Deleted: ManagedIdentity.cer
✅ Deleted: config.json

========================================
📊 CLEANUP SUMMARY
========================================

✅ Successfully Completed (6):
   • Deleted App Registration: DynamicsCrmDevKitManagedIdentity
   • Resource Group deletion initiated: DevKit
   • Deleted certificate from Windows Store
   • Deleted file: ManagedIdentity.pfx
   • Deleted file: ManagedIdentity.cer
   • Deleted file: config.json

🎉 Cleanup completed successfully!
   You can now run scripts 01-03 again from scratch.
```

#### When to Use Cleanup Script

- **Testing**: When you want to test the setup scripts multiple times
- **Mistakes**: If you made configuration errors and want to start fresh
- **Cleanup**: When you no longer need the resources
- **Name Conflicts**: If you need to use different resource names

#### After Cleanup

After running the cleanup script:
1. All Azure resources will be deleted
2. All local files will be removed
3. You can run `01.Setup-Azure.ps1` again to start fresh
4. A new `config.json` will be created

---

**Last Updated:** October 2025
**Version:** 4.0
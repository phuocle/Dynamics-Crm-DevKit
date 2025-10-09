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
│ Step 1: Setup Azure Resources                                   │
│ - Creates config.json template                                  │
│ - Creates Azure Resource Group                                  │
│ - Creates App Registration & Service Principal                  │
│ - Creates Azure Key Vault                                       │
│ - Stores secret in Key Vault                                    │
│ - Updates config.json with TenantId, AppId, KeyVaultURL         │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ Step 2: Generate Certificate                                    │
│ - Creates self-signed certificate                               │
│ - Exports .pfx and .cer files                                   │
│ - Calculates SHA-256 hash                                       │
│ - Updates config.json with certificate details                  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ Step 3: Setup Federated Credentials                             │
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

# Dataverse Managed Identity Setup Guide

This guide will help you set up Azure resources, generate certificates, and configure federated credentials for Dataverse plugin deployment using a single PowerShell script: `Setup-AzureManagedIdentity.ps1`.

---

## Prerequisites

Before you begin, make sure you have:

- PowerShell 7+ ([Download](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell))
- Azure CLI ([Download](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli))
- An Azure account with permissions to create resource groups, app registrations, service principals, and Key Vaults
- Power Platform environment(s) where you want to deploy plugins

---

## Step-by-Step Setup

### 1. Prepare Your Configuration

1. Open a PowerShell terminal and navigate to the script folder:
   ```powershell
   cd "path\to\Dev.DevKitV4.Server.2"
   ```
2. Run the setup script:
   ```powershell
   ./Setup-AzureManagedIdentity.ps1
   ```
3. If this is your first run, the script will create a `config.json` template and show an error listing required fields.
4. Open `config.json` and fill in all required fields. Example:
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
     "OrganizationId": ["org-id-1", "org-id-2"]
   }
   ```
   - **KeyVaultName** must be globally unique in Azure.
   - **Location** should be a valid Azure region (e.g., `eastus`).
   - **CertificatePassword** must be strong.
   - **EnvironmentId** and **OrganizationId** must have the same number of entries and be in matching order.

---

### 2. Run the Setup Script

After updating `config.json`, run the script again:

```powershell
./Setup-AzureManagedIdentity.ps1
```

The script will:
- Create Azure resources (resource group, app registration, service principal, Key Vault)
- Generate a code signing certificate and export `.pfx` and `.cer` files
- Configure federated credentials for each environment
- Update `config.json` with all output values

---

### 3. Review Output and Next Steps

If successful, the script will display a summary of created resources and generated files. Example:

```
[+] Azure Resources Created:
    - App Registration: MyDataverseApp
    - Application ID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    - Tenant ID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    - Resource Group: rg-dataverse-plugins
    - Key Vault: kv-dataverse-secrets
    - Key Vault URL: https://kv-dataverse-secrets.vault.azure.net/

[+] Certificate Generated:
    - Certificate File: cert-signing.pfx
    - Public Key File: cert-signing.cer
    - Thumbprint: A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0
    - Validity: 2 years

[+] Federated Credentials Configured:
    - Number of Environments: 2
    - Total Credentials Created: 4

[+] Generated Files:
    - config.json: updated with all values
    - ManagedIdentity.cs: assembly attribute file
```

---

## Troubleshooting

- If you see an error about missing configuration, open `config.json` and fill in all required fields.
- If Key Vault name is not unique, choose a different name.
- If certificate password is invalid, use a strong password.
- If EnvironmentId and OrganizationId counts do not match, update both arrays to have the same number of entries.
- For any other errors, review the script output for details.

---

## Security Best Practices

- Never commit `config.json` or certificate files to version control.
- Use strong passwords for certificates.
- Rotate certificates regularly.
- Limit access to Azure resources and Key Vault.

---

## Support

If you encounter issues:
- Check the script output for error messages
- Verify all prerequisites are met
- Ensure you have the required Azure permissions
- Review the Azure portal to verify resource creation

---

**Last Updated:** October 2025
**Version:** 4.0
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

# Dataverse Managed Identity Setup Guide

This guide will help you set up Azure resources, generate certificates, and configure federated credentials for Dataverse plugin deployment using a single PowerShell script: `Setup-AzureManagedIdentity.ps1`.

---

## Prerequisites

Before you begin, make sure you have:

- PowerShell 7+ ([Download](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell))
- Azure CLI ([Download](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli))
- An Azure account with permissions to create resource groups, app registrations, service principals, and Key Vaults
- Power Platform environment(s) where you want to deploy plugins

---

## Step-by-Step Setup

### 1. Prepare Your Configuration

1. Open a PowerShell terminal and navigate to the script folder:
   ```powershell
   cd "path\to\Dev.DevKitV4.Server.2"
   ```
2. Run the setup script:
   ```powershell
   ./Setup-AzureManagedIdentity.ps1
   ```
3. If this is your first run, the script will create a `config.json` template and show an error listing required fields.
4. Open `config.json` and fill in all required fields. Example:
   ```json
   {
     "AppName": "MyDataverseApp",
     "ResourceGroup": "rg-dataverse",
     "Location": "eastus",
     "KeyVaultName": "kv-dataverse-secrets",
     "SecretName": "PluginSecret",
     "SecretValue": "MySecretValue",
     "CertificatePassword": "YourStrongPassword123!",
     "CertificateSubject": "CN=MyDataversePlugin",
     "CertificateFileName": "cert-signing",
     "ValidityYears": 2,
     "EnvironmentId": ["env-guid-1", "env-guid-2"],
     "OrganizationId": ["org-guid-1", "org-guid-2"]
   }
   ```
   - **EnvironmentId** and **OrganizationId** must have the same number of entries and be in matching order.

---

### 2. Run the Setup Script

After updating `config.json`, run the script again:

```powershell
./Setup-AzureManagedIdentity.ps1
```

The script will:
- Create Azure resources (resource group, app registration, service principal, Key Vault)
- Generate a code signing certificate and export `.pfx` and `.cer` files
- Configure federated credentials for each environment
- Update `config.json` with all output values

---

### 3. Review Output and Next Steps

If successful, the script will display a summary of created resources and generated files. Example:

```
[+] Azure Resources Created:
    - App Registration: MyDataverseApp
    - Resource Group: rg-dataverse
    - Key Vault URL: https://kv-dataverse-secrets.vault.azure.net/

[+] Certificate Generated:
    - Certificate File: cert-signing.pfx
    - Certificate Subject: CN=MyDataversePlugin
    - Validity: 2 years

[+] Federated Credentials Configured:
    - Number of Environments: 2
    - Total Credentials Created: 4

[+] Generated Files:
    - config.json: updated with all values
    - ManagedIdentity.cs: assembly attribute file
```

---

## Troubleshooting

- If you see an error about missing configuration, open `config.json` and fill in all required fields.
- If Key Vault name is not unique, choose a different name.
- If certificate password is invalid, use a strong password.
- If EnvironmentId and OrganizationId counts do not match, update both arrays to have the same number of entries.
- For any other errors, review the script output for details.

---

## Security Best Practices

- Never commit `config.json` or certificate files to version control.
- Use strong passwords for certificates.
- Rotate certificates regularly.
- Limit access to Azure resources and Key Vault.

---

## Support

If you encounter issues:
- Check the script output for error messages
- Verify all prerequisites are met
- Ensure you have the required Azure permissions
- Review the Azure portal to verify resource creation

---

**Last Updated:** October 2025
**Version:** 4.0
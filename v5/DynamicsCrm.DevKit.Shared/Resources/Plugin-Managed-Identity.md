# Plugin Managed Identity Setup

This guide explains how to configure and deploy Dataverse Plugins using Azure Managed Identity.

## Files
- `Plugin-Managed-Identity.ps1`: PowerShell script to automate Azure resources setup.
- `Plugin-Managed-Identity-Config.json`: Configuration file for the script.
- `Plugin-Managed-Identity.md`: This documentation.

## Prerequisites
1. **Azure CLI**: Ensure `az` is installed and you are logged in (`az login`).
2. **Permissions**: You need permissions to create Resource Groups, Key Vaults, and App Registrations in your Azure Subscription.
3. **Power Platform**: Admin access to target Dataverse environment.

## Step 1: Configuration
Open `Plugin-Managed-Identity-Config.json` and fill in the required values:

```json
{
  "ResourceGroup": "my-resource-group",
  "Location": "southeastasia",
  "KeyVaultName": "my-key-vault",
  "SecretName": "my-secret-name",
  "SecretValue": "my-secret-value",
  "CertificateFileName": "my-certificate-name",
  "CertificatePassword": "my-cert-password",
  "CertificateValidityYears": 10,
  "ManagedIdentities": [
    {
      "AppName": "my-managed-identity-app-name",
      "EnvironmentId": "00000000-0000-0000-0000-000000000000"
    }
  ]
}
```
*Note: `TenantId`, `KeyVaultURL`, `CertificateThumbprint`, `CertificateSHA256Hash`, and `AppId` will be auto-populated by the script.*

## Step 2: Run Automation Script
Execute the PowerShell script to provision resources:

```powershell
.\Plugin-Managed-Identity.ps1
```

This script will:
1. Create/Verify **Resource Group**.
2. Create/Verify **Key Vault** and store the secret.
3. Create/Verify **App Registration** (Managed Identity) and Service Principal.
4. Generate a **Self-Signed Certificate** and export `.pfx` and `.cer` files.
5. Configure **Federated Credentials** for Power Platform.
6. Generate **`AssemblyInfo2.cs`** with the necessary attribute.
7. Update `Plugin-Managed-Identity-Config.json` with generated IDs and hashes.

## Step 3: Integrate with Project
After the script completes successfully:

1. **Include Files**: Add the following generated files to your Visual Studio project:
   - `AssemblyInfo2.cs`
   - `<CertificateFileName>.pfx` (Set **Build Action**: `None`, **Copy to Output Directory**: `Do not copy`)

2. **Verify Attribute**: Ensure `AssemblyInfo2.cs` contains the `DynamcisCrmDevKitPluginManagedIdentityAssembly` attribute with correct values.

## Step 4: Build and Deploy
1. **Build**: Build your project (Debug/Release).
2. **Deploy**: Use `deploy.debug.bat` (or `devkit` CLI) to deploy your plugin.
   - The CLI will use the information in `AssemblyInfo2.cs` and the `.pfx` file to sign the assembly/package during deployment.

## Troubleshooting
- **Script Fails**: Check error messages in red. Ensure you have sufficient Azure permissions.
- **Certificate Errors**: If you regenerate the certificate, ensure you update the federated credentials by re-running the script.
- **Deployment Fails**: Verify `EnvironmentId` matches the target Dataverse environment.

## Security Note
- **DO NOT commit** the `.pfx` file or `Plugin-Managed-Identity-Config.json` (if it contains real secrets) to source control.
- Use `.gitignore` to exclude sensitive files.

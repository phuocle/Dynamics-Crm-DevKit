```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.12.34.56 Build: 31.12.2025 23:59:59

```

# DynamicsCrm.DevKit - Server Managed Identity

This project includes tooling and guidance to create and deploy an Azure Managed Identity for use by server-side plugin assemblies in Microsoft Dynamics 365 / Dataverse.

Related resources:
- Server Project Template: https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Server-Project-Template

## Prerequisites
- Azure CLI installed and you are signed in to the target Azure subscription.
- Visual Studio with .NET Framework 4.6.2 development workload.
- DynamicsCrm.DevKit tools (CLI) for deployment.

## Configuration
1. Add the project item `13. .bat files` and choose `Plugin-Managed-Identity.ps1`.
2. Add the DynamicsCrm.DevKit plugin class to your project.
3. Open `Plugin-Managed-Identity-Config.json` and update the values as required. Example:

```json
{
  "ResourceGroup": "Dev-DevKit-Server-ManagedIdentity",
  "Location": "southeastasia",
  "KeyVaultName": "Server-ManagedIdentity",
  "SecretName": "Server-ManagedIdentity",
  "SecretValue": "PASSWORD-Server-ManagedIdentity",
  "CertificateFileName": "Server-ManagedIdentity",
  "CertificatePassword": "!-Server-ManagedIdentity-*",
  "CertificateValidityYears": 10,
  "TenantId": "",
  "KeyVaultURL": "",
  "CertificateThumbprint": "",
  "CertificateSHA256Hash": "",
  "ManagedIdentities": [
    {
      "AppName": "Dev-DevKit-Server-ManagedIdentity",
      "AppId": "",
      "EnvironmentId": "cbba8ce9-ea7c-e440-b083-0b9517496e17"
    }
  ]
}
```

Notes:
- Ensure all required fields are populated with valid values for your Azure environment.
- `EnvironmentId` should match the target Dynamics/Dataverse environment GUID.

## Deployment Steps
1. Run the `Plugin-Managed-Identity.ps1` script. The script will create or update Azure resources (resource group, Key Vault, secrets, certificates, and managed identity) based on the configuration.
2. If the script reports errors, correct the configuration and re-run the script.
3. After the script completes, include the generated certificate files in your project (if applicable):
   - `Server-ManagedIdentity.cer`
   - `Server-ManagedIdentity.pfx`
   - `AssemblyInfo2.cs`
4. Build your project/solution in Debug configuration.
5. Deploy the package using `DynamicsCrm.DevKit.Cli` by running `deploy.debug.bat`.

## What to expect
- Updated configuration file(s) and generated certificate files in the project folder.
- The CLI will perform deployment tasks; review its output for any guidance or errors.

## Troubleshooting
- If the Azure CLI is not signed in, run `az login` and verify the correct subscription with `az account show`.
- Ensure the Azure account has permissions to create resource groups, Key Vaults, and managed identities.
- If deployment fails, review the CLI output for specific missing tools or permissions and follow the recommended actions.

## Security Considerations
- Do not commit secrets, passwords, or PFX files to source control.
- Use Key Vault to store secrets and certificates securely.

## Support
For issues or contributions, please open an issue or pull request on the repository: https://github.com/phuocle/Dynamics-Crm-Dev-Kit

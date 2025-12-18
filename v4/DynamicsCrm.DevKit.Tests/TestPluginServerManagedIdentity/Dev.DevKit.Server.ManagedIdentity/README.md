```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.00.00.00 Build: 31.12.2025 23:59:59

```

# DynamicsCrm.DevKit Server Managed Identity

1. Add project item '13. .bat files' then chose "Plugin-Managed-Identity.ps1"
2. Add DynamicsCrm.DevKit plugin class to project
3. Make sure you already install "Azure Cli" and sign in to your Azure account that want deploy Managed Identity  
4. Update file Plugin-Managed-Identity-Config.json with these value
```json
{
  "ResourceGroup": "Dev-DevKit-Server-ManagedIdentity",
  "Location": "southeastasia",
  "KeyVaultName": "Dev-DevKit-Server-ManagedIdentity",
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
5. Make sure you enter all valid values like above. Then run Plugin-Managed-Identity.ps1 and wait


```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.00.00.00 Build: 31.12.2025 23:59:59

```

# DynamicsCrm.DevKit dependent assembly plugins project

* [Package Project Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Package-Project-Template)
* [Dependent Assembly plug-ins](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/dependent-assembly-plugins)

# DynamicsCrm.DevKit Package Managed Identity

1. Add project item '13. .bat files' then chose "Plugin-Managed-Identity.ps1"
2. Add DynamicsCrm.DevKit plugin class to project
3. Make sure you already install "Azure Cli" and sign in to your Azure account that want deploy Managed Identity  
4. Update file Plugin-Managed-Identity-Config.json with these value
```json
{
  "ResourceGroup": "Dev-DevKit-Package-ManagedIdentity",
  "Location": "southeastasia",
  "KeyVaultName": "Package-ManagedIdentity",
  "SecretName": "Package-ManagedIdentity",
  "SecretValue": "Package-ManagedIdentity-VERY-IMPORTANT-DATA",
  "CertificateFileName": "Package-ManagedIdentity",
  "CertificatePassword": "pASSw0rd",
  "CertificateValidityYears": 100,
  "TenantId": "",
  "KeyVaultURL": "",
  "CertificateThumbprint": "",
  "CertificateSHA256Hash": "",
  "ManagedIdentities": [
    {
      "AppName": "Dev-DevKit-Package-ManagedIdentity",
      "AppId": "",
      "EnvironmentId": "cbba8ce9-ea7c-e440-b083-0b9517496e17"
    }
  ]
}
```
5. Make sure you enter all valid values like above. Then run Plugin-Managed-Identity.ps1 and wait.
6. If 5 failed, make sure you fix and run 5. without any errors
7. Now you see some files updated and created
    + Plugin-Managed-Identity-Config.json updated
    + Package-ManagedIdentity.cer created, need include to project
    + Package-ManagedIdentity.pfx created, need include to project
    + AssemblyInfo2.cs created, need include to project
8. Now build your project/solution and deploy use DynamicsCrm.DevKit.Cli by run deploy.debug.bat
9. Done, DynamicsCrm.DevKit.Cli will do all for you, now verify you code and you can use Azure Managed Identity in your plugin
10. When Cli run, if failed, you should resolve by guide by Cli, like install some tool, update some notes, ....

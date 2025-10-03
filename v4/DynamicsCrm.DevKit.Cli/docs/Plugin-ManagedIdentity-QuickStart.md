# Quick Start: Plugin Managed Identity Support

## Overview

This feature enables Power Platform plugins to securely access Azure resources using Managed Identity, eliminating the need for hardcoded credentials.

## Quick Example

```csharp
[CrmPluginRegistration("Update", "account", StageEnum.PostOperation,
    ExecutionModeEnum.Synchronous, "name", "Update Account", 1, IsolationModeEnum.Sandbox)]
[CrmPluginManagedIdentity(
    ApplicationId = "12345678-1234-1234-1234-123456789abc",
    TenantId = "87654321-4321-4321-4321-cba987654321",
    CertificatePath = "certificates/plugin-cert.pfx",
    CertificatePassword = "password")]
public class UpdateAccountPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // Get managed identity service
        var managedIdentityService = (IManagedIdentityService)
            serviceProvider.GetService(typeof(IManagedIdentityService));

        // Acquire token for Azure Key Vault
        var token = managedIdentityService.AcquireToken(
            new[] { "https://vault.azure.net/.default" });

        // Use token to access Azure resources
    }
}
```

## Key Features

### ✅ New `CrmPluginManagedIdentity` Attribute
- Decorate plugin classes alongside existing `CrmPluginRegistration`
- Configure Azure App Registration details
- Specify certificate for signing

### ✅ Automatic Assembly Signing
- Signs assemblies during deployment
- Uses specified certificate (.pfx or .cer)
- Validates certificate before deployment

### ✅ Managed Identity Provisioning
- Creates/updates managed identity records in Dataverse
- Binds plugin assembly to managed identity
- Generates subject identifier for Azure configuration

### ✅ Multi-Cloud Support
- Public Cloud (default)
- GCC, GCC High, DoD
- China, US National, US Secure

## Setup Steps

### 1. Azure Setup (One-time)

```bash
# Create App Registration in Azure Portal
# Note the Application ID and Tenant ID
```

### 2. Prepare Certificate

```bash
# For development (self-signed)
New-SelfSignedCertificate -Subject "CN=MyPlugin" -Type CodeSigningCert `
    -CertStoreLocation "Cert:\CurrentUser\My"

# Export to PFX
$cert = Get-ChildItem -Path Cert:\CurrentUser\My | Where-Object {$_.Subject -eq "CN=MyPlugin"}
Export-PfxCertificate -Cert $cert -FilePath ".\plugin-cert.pfx" -Password (ConvertTo-SecureString -String "password" -Force -AsPlainText)
```

### 3. Add Attribute to Plugin

```csharp
[CrmPluginManagedIdentity(
    ApplicationId = "your-app-id",
    TenantId = "your-tenant-id",
    CertificatePath = "path/to/certificate.pfx",
    CertificatePassword = "your-password")]
```

### 4. Deploy Plugin

```bash
DynamicsCrm.DevKit.Cli.exe /type:plugins /profile:DEBUG /json:"DynamicsCrm.DevKit.Cli.json"
```

### 5. Configure Federated Credential

The CLI will output a subject identifier. Use it in Azure Portal:

1. Go to **Azure Portal** > **Microsoft Entra ID** > **App registrations**
2. Open your app
3. Navigate to **Certificates & secrets** > **Federated credentials**
4. Click **Add credential**
5. Select **Other issuer**
6. Paste the subject identifier from CLI output
7. Save

### 6. Grant Azure Resource Access

```bash
# Example: Grant Key Vault access
az keyvault set-policy --name MyKeyVault `
    --object-id <app-object-id> `
    --secret-permissions get list
```

## Attribute Properties

### Required
- `ApplicationId` - Azure App Registration client ID
- `TenantId` - Azure tenant ID

### Optional
- `CertificatePath` - Path to certificate file
- `CertificatePassword` - Certificate password
- `CredentialSource` - EntraIdApplication (default) or UserAssignedManagedIdentity
- `SubjectScope` - Environment (default) or Organization
- `CloudEnvironment` - Public (default), GCC, GCCHigh, China, USNat, USSec
- `CertificateIssuer` - For production trusted certificates
- `CertificateSubject` - For production trusted certificates
- `AutoSignAssembly` - true (default) or false

## Common Scenarios

### Scenario 1: Access Azure Key Vault

```csharp
var managedIdentityService = (IManagedIdentityService)
    serviceProvider.GetService(typeof(IManagedIdentityService));

var token = managedIdentityService.AcquireToken(
    new[] { "https://vault.azure.net/.default" });

// Use token with Azure Key Vault SDK
var credential = new TokenCredential(token);
var client = new SecretClient(new Uri(vaultUri), credential);
var secret = await client.GetSecretAsync("my-secret");
```

### Scenario 2: Access Azure Storage

```csharp
var token = managedIdentityService.AcquireToken(
    new[] { "https://storage.azure.com/.default" });

// Use token with Azure Storage SDK
```

### Scenario 3: Multiple Environments

```csharp
// Development
[CrmPluginManagedIdentity(
    ApplicationId = "dev-app-id",
    TenantId = "tenant-id",
    CertificatePath = "dev-cert.pfx",
    CertificatePassword = "dev-password")]

// Production (use trusted certificate)
[CrmPluginManagedIdentity(
    ApplicationId = "prod-app-id",
    TenantId = "tenant-id",
    CertificatePath = "prod-cert.pfx",
    CertificatePassword = "prod-password",
    CertificateIssuer = "CN=TrustedCA",
    CertificateSubject = "CN=MyProductionPlugin")]
```

## Troubleshooting

### Issue: SignTool.exe not found
**Solution**: Install Windows SDK from https://developer.microsoft.com/windows/downloads/windows-sdk/

### Issue: Certificate not found
**Solution**: Check certificate path is relative to project root or use absolute path

### Issue: Token acquisition fails
**Solution**:
1. Verify federated credential is configured in Azure
2. Check subject identifier matches exactly
3. Verify Azure resource permissions

### Issue: AADSTS700213 error
**Solution**: Federated credential configuration mismatch. Regenerate subject identifier and update Azure.

## Best Practices

✅ **DO**
- Use environment variables for sensitive data
- Use trusted certificates in production
- Store certificates securely (not in source control)
- Limit managed identity permissions to minimum required
- Test in development environment first

❌ **DON'T**
- Commit certificates to source control
- Use self-signed certificates in production
- Store passwords in code
- Grant excessive Azure permissions

## Learn More

- [Full Documentation](./Plugin-ManagedIdentity-Support.md)
- [Microsoft Learn: Managed Identity Setup](https://learn.microsoft.com/en-us/power-platform/admin/set-up-managed-identity)
- [IManagedIdentityService API](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.imanagedidentityservice)

---

**Quick Reference**: For detailed implementation steps, see [Plugin-ManagedIdentity-Support.md](./Plugin-ManagedIdentity-Support.md)

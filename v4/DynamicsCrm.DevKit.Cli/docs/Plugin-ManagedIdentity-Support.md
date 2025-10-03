# Plugin Registration with Managed Identity Support

## Overview

This document outlines the design and implementation plan for adding Managed Identity support to the DynamicsCrm.DevKit.Cli plugin registration system. This feature will enable plugins to securely access Azure resources without storing credentials, using the new Power Platform managed identity capabilities.

## Background

Power Platform now supports managed identity for Dataverse plug-ins, allowing plugins to access Azure resources (like Azure Key Vault) without hardcoded credentials. The managed identity feature requires:

1. A signed plugin assembly (with a certificate)
2. Creation of a managed identity record in Dataverse
3. Configuration of federated identity credentials in Azure
4. Binding the plugin assembly to the managed identity record

## Reference Documentation

- [Set up managed identity for Power Platform - Dataverse plug-ins](https://learn.microsoft.com/en-us/power-platform/admin/set-up-managed-identity)
- [IManagedIdentityService Interface](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.imanagedidentityservice?view=dataverse-sdk-latest)

## Proposed Solution

### 1. New Attribute: `CrmPluginManagedIdentity`

Create a new attribute class to decorate plugin classes that require managed identity support. This attribute will coexist with the existing `CrmPluginRegistration` attribute.

#### Usage Syntax

```csharp
[CrmPluginRegistration("Update", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous,
    "name,address1_city", "Update Account", 1, IsolationModeEnum.Sandbox)]
[CrmPluginManagedIdentity(
    ApplicationId = "12345678-1234-1234-1234-123456789abc",
    TenantId = "87654321-4321-4321-4321-cba987654321",
    CredentialSource = ManagedIdentityCredentialSource.EntraIdApplication,
    SubjectScope = ManagedIdentitySubjectScope.Environment,
    CertificatePath = "path/to/certificate.pfx",
    CertificatePassword = "password",
    IssuerUrl = "https://login.microsoftonline.com/{tenantID}/v2.0",
    Audience = "api://AzureADTokenExchange",
    CloudEnvironment = AzureCloudEnvironment.Public
)]
public class UpdateAccountPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
        var service = serviceFactory.CreateOrganizationService(context.UserId);

        // Get managed identity service
        var managedIdentityService = (IManagedIdentityService)serviceProvider.GetService(typeof(IManagedIdentityService));

        // Acquire token for Azure Key Vault
        var scopes = new[] { "https://vault.azure.net/.default" };
        var token = managedIdentityService.AcquireToken(scopes);

        // Use token to access Azure Key Vault
        // ...
    }
}
```

### 2. Attribute Class Definition

#### Location
- **File**: `ProjectTemplates\CSharp\01.SharedProjectTemplate\PluginCore.cs`
- Add to existing enums and attribute definitions

#### Implementation

```csharp
/// <summary>
/// Specifies the credential source for managed identity
/// </summary>
public enum ManagedIdentityCredentialSource
{
    /// <summary>
    /// Uses Entra ID Application Registration
    /// </summary>
    EntraIdApplication = 2,

    /// <summary>
    /// Uses User-Assigned Managed Identity
    /// </summary>
    UserAssignedManagedIdentity = 3
}

/// <summary>
/// Specifies the subject scope for managed identity
/// </summary>
public enum ManagedIdentitySubjectScope
{
    /// <summary>
    /// Environment-specific scope (recommended)
    /// </summary>
    Environment = 1,

    /// <summary>
    /// Organization-wide scope
    /// </summary>
    Organization = 2
}

/// <summary>
/// Specifies the Azure cloud environment
/// </summary>
public enum AzureCloudEnvironment
{
    /// <summary>
    /// Public cloud (default)
    /// </summary>
    Public,

    /// <summary>
    /// Government Community Cloud
    /// </summary>
    GCC,

    /// <summary>
    /// GCC High & DoD
    /// </summary>
    GCCHigh,

    /// <summary>
    /// Mooncake (China)
    /// </summary>
    China,

    /// <summary>
    /// US National
    /// </summary>
    USNat,

    /// <summary>
    /// US Secure
    /// </summary>
    USSec
}

/// <summary>
/// Attribute to configure managed identity for a plugin
/// </summary>
[DebuggerNonUserCode()]
[AttributeUsage(AttributeTargets.Class, Inherited = false, AllowMultiple = false)]
public class CrmPluginManagedIdentityAttribute : Attribute
{
    /// <summary>
    /// Creates a new managed identity configuration for a plugin
    /// </summary>
    /// <param name="applicationId">Application (client) ID from Azure AD</param>
    /// <param name="tenantId">Tenant ID from Azure AD</param>
    public CrmPluginManagedIdentityAttribute(string applicationId, string tenantId)
    {
        ApplicationId = applicationId;
        TenantId = tenantId;
    }

    /// <summary>
    /// Application (client) ID from Azure AD
    /// </summary>
    public string ApplicationId { get; set; }

    /// <summary>
    /// Tenant ID from Azure AD
    /// </summary>
    public string TenantId { get; set; }

    /// <summary>
    /// Credential source type (default: EntraIdApplication)
    /// </summary>
    public ManagedIdentityCredentialSource CredentialSource { get; set; } = ManagedIdentityCredentialSource.EntraIdApplication;

    /// <summary>
    /// Subject scope (default: Environment)
    /// </summary>
    public ManagedIdentitySubjectScope SubjectScope { get; set; } = ManagedIdentitySubjectScope.Environment;

    /// <summary>
    /// Path to the certificate file (.pfx or .cer) used to sign the assembly
    /// </summary>
    public string CertificatePath { get; set; } = string.Empty;

    /// <summary>
    /// Password for the certificate file (required for .pfx files)
    /// </summary>
    public string CertificatePassword { get; set; } = string.Empty;

    /// <summary>
    /// Issuer URL (defaults to public cloud if not specified)
    /// </summary>
    public string IssuerUrl { get; set; } = string.Empty;

    /// <summary>
    /// Audience value (defaults based on cloud environment)
    /// </summary>
    public string Audience { get; set; } = string.Empty;

    /// <summary>
    /// Azure cloud environment (default: Public)
    /// </summary>
    public AzureCloudEnvironment CloudEnvironment { get; set; } = AzureCloudEnvironment.Public;

    /// <summary>
    /// Certificate subject (for trusted issuer certificates)
    /// </summary>
    public string CertificateSubject { get; set; } = string.Empty;

    /// <summary>
    /// Certificate issuer (for trusted issuer certificates)
    /// </summary>
    public string CertificateIssuer { get; set; } = string.Empty;

    /// <summary>
    /// Whether to automatically sign the assembly during deployment
    /// </summary>
    public bool AutoSignAssembly { get; set; } = true;
}
```

### 3. Helper Methods in Shared Library

#### Location
- **File**: `DynamicsCrm.DevKit.Shared\Helper.cs`

#### Implementation

```csharp
/// <summary>
/// Converts CustomAttributeData to CrmPluginManagedIdentityAttribute
/// </summary>
public static CrmPluginManagedIdentityAttribute ConvertAttributeToCrmPluginManagedIdentity(CustomAttributeData data)
{
    var arguments = data.ConstructorArguments.ToArray();
    if (arguments.Length != 2)
        return null;

    var attribute = new CrmPluginManagedIdentityAttribute(
        (string)arguments[0].Value,
        (string)arguments[1].Value
    );

    foreach (var namedArgument in data.NamedArguments)
    {
        switch (namedArgument.MemberName)
        {
            case "CredentialSource":
                attribute.CredentialSource = (ManagedIdentityCredentialSource)Enum.ToObject(
                    typeof(ManagedIdentityCredentialSource), (int)namedArgument.TypedValue.Value);
                break;
            case "SubjectScope":
                attribute.SubjectScope = (ManagedIdentitySubjectScope)Enum.ToObject(
                    typeof(ManagedIdentitySubjectScope), (int)namedArgument.TypedValue.Value);
                break;
            case "CertificatePath":
                attribute.CertificatePath = (string)namedArgument.TypedValue.Value;
                break;
            case "CertificatePassword":
                attribute.CertificatePassword = (string)namedArgument.TypedValue.Value;
                break;
            case "IssuerUrl":
                attribute.IssuerUrl = (string)namedArgument.TypedValue.Value;
                break;
            case "Audience":
                attribute.Audience = (string)namedArgument.TypedValue.Value;
                break;
            case "CloudEnvironment":
                attribute.CloudEnvironment = (AzureCloudEnvironment)Enum.ToObject(
                    typeof(AzureCloudEnvironment), (int)namedArgument.TypedValue.Value);
                break;
            case "CertificateSubject":
                attribute.CertificateSubject = (string)namedArgument.TypedValue.Value;
                break;
            case "CertificateIssuer":
                attribute.CertificateIssuer = (string)namedArgument.TypedValue.Value;
                break;
            case "AutoSignAssembly":
                attribute.AutoSignAssembly = (bool)namedArgument.TypedValue.Value;
                break;
        }
    }

    return attribute;
}

/// <summary>
/// Gets cloud environment configuration
/// </summary>
public static (string Audience, string IssuerUrl, string SubjectPrefix) GetCloudEnvironmentConfig(
    AzureCloudEnvironment cloudEnvironment)
{
    return cloudEnvironment switch
    {
        AzureCloudEnvironment.GCCHigh =>
            ("api://AzureADTokenExchangeUSGov", "https://login.microsoftonline.us", "/eid1/c/usg"),
        AzureCloudEnvironment.China =>
            ("api://AzureADTokenExchangeChina", "https://login.partner.microsoftonline.cn", "/eid1/c/chn"),
        AzureCloudEnvironment.USNat =>
            ("api://AzureADTokenExchangeUSNat", "https://login.microsoftonline.eaglex.ic.gov", "/eid1/c/uss"),
        AzureCloudEnvironment.USSec =>
            ("api://AzureADTokenExchangeUSSec", "https://login.microsoftonline.scloud", "/eid1/c/usn"),
        _ =>
            ("api://AzureADTokenExchange", "https://login.microsoftonline.com", "/eid1/c/pub")
    };
}

/// <summary>
/// Encodes tenant ID for subject identifier
/// </summary>
public static string EncodeTenantId(string tenantId)
{
    // Remove hyphens from GUID
    var guidString = tenantId.Replace("-", "");

    // Convert hex string to bytes
    var bytes = new byte[guidString.Length / 2];
    for (int i = 0; i < bytes.Length; i++)
    {
        bytes[i] = Convert.ToByte(guidString.Substring(i * 2, 2), 16);
    }

    // Convert to Base64URL
    return Convert.ToBase64String(bytes)
        .TrimEnd('=')
        .Replace('+', '-')
        .Replace('/', '_');
}

/// <summary>
/// Computes SHA-256 hash of certificate
/// </summary>
public static string ComputeCertificateHash(string certificatePath)
{
    using (var sha256 = System.Security.Cryptography.SHA256.Create())
    {
        var certBytes = File.ReadAllBytes(certificatePath);
        var hashBytes = sha256.ComputeHash(certBytes);
        return BitConverter.ToString(hashBytes).Replace("-", "").ToLowerInvariant();
    }
}
```

### 4. TaskServer.cs Modifications

#### Location
- **File**: `DynamicsCrm.DevKit.Cli\Tasks\TaskServer.cs`

#### New Methods to Add

```csharp
/// <summary>
/// Gets CrmPluginManagedIdentity attribute from type
/// </summary>
private CrmPluginManagedIdentityAttribute GetCrmPluginManagedIdentityAttribute(TypeInfo type)
{
    var attributes = type.GetCustomAttributesData();
    foreach (var attribute in attributes)
    {
        if (attribute.AttributeType.Name == "CrmPluginManagedIdentityAttribute")
        {
            return Helper.ConvertAttributeToCrmPluginManagedIdentity(attribute);
        }
    }
    return null;
}

/// <summary>
/// Signs the assembly with the certificate
/// </summary>
private async Task<bool> SignAssemblyAsync(string assemblyPath, CrmPluginManagedIdentityAttribute managedIdentityAttr)
{
    if (!managedIdentityAttr.AutoSignAssembly)
    {
        CliLog.WriteLine(ConsoleColor.White, "|", SPACE, ConsoleColor.Yellow, "⚠ AutoSignAssembly is false, skipping assembly signing");
        return true;
    }

    if (string.IsNullOrEmpty(managedIdentityAttr.CertificatePath))
    {
        CliLog.WriteLineError(ConsoleColor.Red, "CertificatePath is required for managed identity support");
        return false;
    }

    var certPath = Path.IsPathRooted(managedIdentityAttr.CertificatePath)
        ? managedIdentityAttr.CertificatePath
        : Path.Combine(CurrentDirectory, managedIdentityAttr.CertificatePath);

    if (!File.Exists(certPath))
    {
        CliLog.WriteLineError(ConsoleColor.Red, $"Certificate not found: {certPath}");
        return false;
    }

    try
    {
        CliLog.Write(ConsoleColor.White, "|", SPACE);
        CliLog.WriteSuccess(ConsoleColor.White, "SIGNING");
        CliLog.WriteLine(ConsoleColor.White, " Assembly with certificate");

        var signToolPath = FindSignTool();
        if (string.IsNullOrEmpty(signToolPath))
        {
            CliLog.WriteLineError(ConsoleColor.Red, "SignTool.exe not found. Please install Windows SDK");
            return false;
        }

        var passwordArg = !string.IsNullOrEmpty(managedIdentityAttr.CertificatePassword)
            ? $"/p \"{managedIdentityAttr.CertificatePassword}\""
            : "";

        var arguments = $"sign /f \"{certPath}\" {passwordArg} /fd SHA256 /v \"{assemblyPath}\"";

        var processStartInfo = new ProcessStartInfo
        {
            FileName = signToolPath,
            Arguments = arguments,
            UseShellExecute = false,
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            CreateNoWindow = true
        };

        using (var process = Process.Start(processStartInfo))
        {
            var output = await process.StandardOutput.ReadToEndAsync();
            var error = await process.StandardError.ReadToEndAsync();
            await Task.Run(() => process.WaitForExit());

            if (process.ExitCode != 0)
            {
                CliLog.WriteLineError(ConsoleColor.Red, $"SignTool failed: {error}");
                return false;
            }

            CliLog.WriteLine(ConsoleColor.Green, "|", SPACE, "✓ Assembly signed successfully");
            return true;
        }
    }
    catch (Exception ex)
    {
        CliLog.WriteLineError(ConsoleColor.Red, $"Error signing assembly: {ex.Message}");
        return false;
    }
}

/// <summary>
/// Finds SignTool.exe in Windows SDK
/// </summary>
private string FindSignTool()
{
    var programFiles = Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86);
    var sdkPath = Path.Combine(programFiles, "Windows Kits", "10", "bin");

    if (!Directory.Exists(sdkPath))
        return null;

    // Find the latest version
    var versions = Directory.GetDirectories(sdkPath)
        .Where(d => Directory.Exists(Path.Combine(d, "x64")))
        .OrderByDescending(d => d)
        .ToList();

    foreach (var version in versions)
    {
        var signToolPath = Path.Combine(version, "x64", "signtool.exe");
        if (File.Exists(signToolPath))
            return signToolPath;
    }

    return null;
}

/// <summary>
/// Creates or updates managed identity record in Dataverse
/// </summary>
private async Task<Guid?> DeployManagedIdentityAsync(
    Guid pluginAssemblyId,
    CrmPluginManagedIdentityAttribute managedIdentityAttr,
    string certificateHash)
{
    try
    {
        CliLog.Write(ConsoleColor.White, "|", SPACE);
        CliLog.WriteSuccess(ConsoleColor.White, "DEPLOYING");
        CliLog.WriteLine(ConsoleColor.White, " Managed Identity");

        // Check if managed identity already exists for this assembly
        var fetchXml = $@"
<fetch>
  <entity name='managedidentity'>
    <attribute name='managedidentityid' />
    <attribute name='applicationid' />
    <filter>
      <condition attribute='applicationid' operator='eq' value='{managedIdentityAttr.ApplicationId}' />
    </filter>
    <link-entity name='pluginassembly' from='managedidentityid' to='managedidentityid'>
      <filter>
        <condition attribute='pluginassemblyid' operator='eq' value='{pluginAssemblyId}' />
      </filter>
    </link-entity>
  </entity>
</fetch>";

        var rows = await ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));

        Guid managedIdentityId;

        if (rows.Entities.Count == 0)
        {
            // Create new managed identity
            var managedIdentity = new Entity("managedidentity")
            {
                ["managedidentityid"] = Guid.NewGuid(),
                ["applicationid"] = managedIdentityAttr.ApplicationId,
                ["tenantid"] = managedIdentityAttr.TenantId,
                ["credentialsource"] = new OptionSetValue((int)managedIdentityAttr.CredentialSource),
                ["subjectscope"] = new OptionSetValue((int)managedIdentityAttr.SubjectScope)
            };

            managedIdentityId = (Guid)managedIdentity["managedidentityid"];
            await ServiceClient.CreateAsync(managedIdentity);

            CliLog.WriteLine(ConsoleColor.Green, "|", SPACE, "✓ Managed Identity created");
        }
        else
        {
            managedIdentityId = rows.Entities[0].Id;

            // Update existing managed identity
            var managedIdentity = new Entity("managedidentity")
            {
                Id = managedIdentityId,
                ["applicationid"] = managedIdentityAttr.ApplicationId,
                ["tenantid"] = managedIdentityAttr.TenantId,
                ["credentialsource"] = new OptionSetValue((int)managedIdentityAttr.CredentialSource),
                ["subjectscope"] = new OptionSetValue((int)managedIdentityAttr.SubjectScope)
            };

            await ServiceClient.UpdateAsync(managedIdentity);

            CliLog.WriteLine(ConsoleColor.Green, "|", SPACE, "✓ Managed Identity updated");
        }

        // Bind plugin assembly to managed identity
        await BindPluginAssemblyToManagedIdentityAsync(pluginAssemblyId, managedIdentityId);

        return managedIdentityId;
    }
    catch (Exception ex)
    {
        CliLog.WriteLineError(ConsoleColor.Red, $"Error deploying managed identity: {ex.Message}");
        return null;
    }
}

/// <summary>
/// Binds plugin assembly to managed identity
/// </summary>
private async Task BindPluginAssemblyToManagedIdentityAsync(Guid pluginAssemblyId, Guid managedIdentityId)
{
    try
    {
        var pluginAssembly = new Entity("pluginassembly")
        {
            Id = pluginAssemblyId,
            ["managedidentityid"] = new EntityReference("managedidentity", managedIdentityId)
        };

        await ServiceClient.UpdateAsync(pluginAssembly);

        CliLog.WriteLine(ConsoleColor.Green, "|", SPACE, "✓ Plugin Assembly bound to Managed Identity");
    }
    catch (Exception ex)
    {
        CliLog.WriteLineError(ConsoleColor.Red, $"Error binding assembly to managed identity: {ex.Message}");
        throw;
    }
}

/// <summary>
/// Generates subject identifier for federated credential
/// </summary>
private string GenerateSubjectIdentifier(
    CrmPluginManagedIdentityAttribute managedIdentityAttr,
    string environmentId,
    string certificateHash)
{
    var cloudConfig = Helper.GetCloudEnvironmentConfig(managedIdentityAttr.CloudEnvironment);
    var encodedTenantId = Helper.EncodeTenantId(managedIdentityAttr.TenantId);

    var baseSubject = $"{cloudConfig.SubjectPrefix}/t/{encodedTenantId}/a/qzXoWDkuqUa3l6zM5mM0Rw/n/plugin/e/{environmentId}";

    // Self-signed certificate (development)
    if (string.IsNullOrEmpty(managedIdentityAttr.CertificateIssuer))
    {
        return $"{baseSubject}/h/{certificateHash}";
    }
    // Trusted issuer certificate (production)
    else
    {
        return $"{baseSubject}/i/{managedIdentityAttr.CertificateIssuer}/s/{managedIdentityAttr.CertificateSubject}";
    }
}
```

#### Modify DeployFileAsync Method

Add managed identity processing after plugin assembly deployment:

```csharp
private async Task DeployFileAsync(string file, DeployFileType deployFileType)
{
    // ... existing code ...

    var pluginAssemblyId = await DeployAssemblyAsync(file);
    if (pluginAssemblyId == null) return;

    // ... existing type processing ...

    foreach (var type in types)
    {
        var attributes = GetCrmPluginRegistrationAttributes(type);
        var managedIdentityAttr = GetCrmPluginManagedIdentityAttribute(type);

        // If managed identity attribute exists, process it
        if (managedIdentityAttr != null)
        {
            // Sign assembly if needed
            if (!await SignAssemblyAsync(file, managedIdentityAttr))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow,
                    $"Failed to sign assembly for type '{type.FullName}'. Managed identity deployment stopped.");
                continue;
            }

            // Compute certificate hash
            var certPath = Path.IsPathRooted(managedIdentityAttr.CertificatePath)
                ? managedIdentityAttr.CertificatePath
                : Path.Combine(CurrentDirectory, managedIdentityAttr.CertificatePath);

            var certificateHash = Helper.ComputeCertificateHash(certPath);

            // Deploy managed identity
            var managedIdentityId = await DeployManagedIdentityAsync(
                pluginAssemblyId.Value,
                managedIdentityAttr,
                certificateHash);

            if (managedIdentityId == null)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow,
                    $"Failed to deploy managed identity for type '{type.FullName}'.");
            }
            else
            {
                // Generate subject identifier for federated credential setup
                var environmentId = GetEnvironmentId();
                var subjectIdentifier = GenerateSubjectIdentifier(
                    managedIdentityAttr,
                    environmentId,
                    certificateHash);

                CliLog.WriteLine(ConsoleColor.Cyan, "|");
                CliLog.WriteLine(ConsoleColor.Cyan, "|", SPACE, "📋 Federated Credential Subject Identifier:");
                CliLog.WriteLine(ConsoleColor.White, "|", SPACE, subjectIdentifier);
                CliLog.WriteLine(ConsoleColor.Cyan, "|");
                CliLog.WriteLine(ConsoleColor.Yellow, "|", SPACE, "⚠ Please configure this subject identifier in Azure Portal:");
                CliLog.WriteLine(ConsoleColor.White, "|", SPACE, "1. Go to Azure Portal > Microsoft Entra ID > App registrations");
                CliLog.WriteLine(ConsoleColor.White, "|", SPACE, $"2. Open app: {managedIdentityAttr.ApplicationId}");
                CliLog.WriteLine(ConsoleColor.White, "|", SPACE, "3. Navigate to Certificates & secrets > Federated credentials");
                CliLog.WriteLine(ConsoleColor.White, "|", SPACE, "4. Add credential with the subject identifier above");
                CliLog.WriteLine(ConsoleColor.Cyan, "|");
            }
        }

        // ... rest of existing plugin processing ...
    }
}

/// <summary>
/// Gets the current environment ID
/// </summary>
private string GetEnvironmentId()
{
    // Extract from organization URL
    var orgUrl = ServiceClient.ConnectedOrgUniqueName;
    // The environment ID is typically part of the organization unique name
    // This is a simplified version - actual implementation may need refinement
    return orgUrl;
}
```

### 5. Required NuGet Packages

Add to `DynamicsCrm.DevKit.Cli.csproj`:

```xml
<PackageReference Include="System.Security.Cryptography.Algorithms" Version="4.3.1" />
```

### 6. Documentation and Logging

#### Console Output Example

```
|  ✓ REGISTER Assembly MyPlugin
|  ✓ SIGNING Assembly with certificate
|  ✓ Assembly signed successfully
|  ✓ DEPLOYING Managed Identity
|  ✓ Managed Identity created
|  ✓ Plugin Assembly bound to Managed Identity
|
|  📋 Federated Credential Subject Identifier:
|  /eid1/c/pub/t/kYGhnyoaDxUMlMdOjBQZRw/a/qzXoWDkuqUa3l6zM5mM0Rw/n/plugin/e/org12345678/h/a1b2c3d4e5f6...
|
|  ⚠ Please configure this subject identifier in Azure Portal:
|  1. Go to Azure Portal > Microsoft Entra ID > App registrations
|  2. Open app: 12345678-1234-1234-1234-123456789abc
|  3. Navigate to Certificates & secrets > Federated credentials
|  4. Add credential with the subject identifier above
|
```

## Implementation Steps

### Phase 1: Core Infrastructure
1. ✅ Add enums and attribute class to `PluginCore.cs`
2. ✅ Add helper methods to `Helper.cs`
3. ✅ Add conversion method for managed identity attribute

### Phase 2: Signing Infrastructure
4. ⬜ Implement `SignAssemblyAsync` method
5. ⬜ Implement `FindSignTool` method
6. ⬜ Add certificate hash computation

### Phase 3: Managed Identity Deployment
7. ⬜ Implement `GetCrmPluginManagedIdentityAttribute` method
8. ⬜ Implement `DeployManagedIdentityAsync` method
9. ⬜ Implement `BindPluginAssemblyToManagedIdentityAsync` method
10. ⬜ Implement `GenerateSubjectIdentifier` method

### Phase 4: Integration
11. ⬜ Modify `DeployFileAsync` to handle managed identity
12. ⬜ Add logging and error handling
13. ⬜ Add environment ID extraction

### Phase 5: Testing & Documentation
14. ⬜ Create sample plugin with managed identity
15. ⬜ Test with Azure Key Vault integration
16. ⬜ Update README with usage examples
17. ⬜ Add troubleshooting guide

## Configuration Example

### DynamicsCrm.DevKit.Cli.json

No changes required - existing configuration works as-is.

```json
{
  "plugins": [
    {
      "profile": "DEBUG",
      "solution": "YourSolution",
      "folder": "bin\\Debug",
      "includefiles": [ "*.dll" ],
      "excludefiles": [ "Microsoft.*.dll", "System.*.dll" ]
    }
  ]
}
```

### Plugin Implementation

```csharp
using System;
using Microsoft.Xrm.Sdk;
using System.Linq;

namespace YourNamespace
{
    [CrmPluginRegistration(
        "Update",
        "account",
        StageEnum.PostOperation,
        ExecutionModeEnum.Synchronous,
        "name,address1_city",
        "Update Account with Managed Identity",
        1,
        IsolationModeEnum.Sandbox)]
    [CrmPluginManagedIdentity(
        ApplicationId = "12345678-1234-1234-1234-123456789abc",
        TenantId = "87654321-4321-4321-4321-cba987654321",
        CertificatePath = "certificates/plugin-cert.pfx",
        CertificatePassword = "P@ssw0rd123",
        CloudEnvironment = AzureCloudEnvironment.Public)]
    public class UpdateAccountPlugin : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);

            // Get managed identity service
            var managedIdentityService = (IManagedIdentityService)serviceProvider.GetService(typeof(IManagedIdentityService));

            if (managedIdentityService != null)
            {
                try
                {
                    // Acquire token for Azure Key Vault
                    var scopes = new[] { "https://vault.azure.net/.default" };
                    var token = managedIdentityService.AcquireToken(scopes);

                    // Use token to access Azure Key Vault
                    // ... your implementation ...

                    var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
                    tracingService.Trace("Successfully acquired token for Azure Key Vault");
                }
                catch (Exception ex)
                {
                    throw new InvalidPluginExecutionException($"Failed to acquire token: {ex.Message}");
                }
            }
        }
    }
}
```

## Prerequisites

### Developer Requirements
1. Windows SDK installed (for SignTool.exe)
2. Valid certificate (.pfx or .cer)
3. Azure subscription with Entra ID access
4. Power Platform environment

### Azure Setup (Manual Steps Required)
1. Create App Registration or User-Assigned Managed Identity in Azure
2. Configure Federated Identity Credentials using the generated subject identifier
3. Grant Azure resource access to the application/managed identity
4. Obtain Application ID and Tenant ID

## Security Considerations

1. **Certificate Storage**: Store certificates securely, preferably outside source control
2. **Password Management**: Use environment variables or Azure Key Vault for certificate passwords
3. **Production vs Development**:
   - Use self-signed certificates only for development
   - Use trusted issuer certificates for production
4. **Access Control**: Limit managed identity permissions to minimum required scopes

## Limitations

1. Assembly must be signed with a certificate
2. Federated credentials must be configured manually in Azure Portal
3. Managed identity support requires Power Platform SDK version with `IManagedIdentityService`
4. SignTool.exe requires Windows SDK installation

## Troubleshooting

### Common Issues

1. **SignTool.exe not found**
   - Install Windows SDK
   - Verify installation path

2. **Certificate errors**
   - Verify certificate format (.pfx or .cer)
   - Check certificate password
   - Ensure certificate is not expired

3. **Federated credential mismatch**
   - Verify subject identifier matches exactly
   - Check cloud environment settings
   - Validate tenant ID and application ID

4. **Token acquisition fails**
   - Verify Azure resource permissions
   - Check federated credential configuration
   - Validate scope format

## Future Enhancements

1. **Certificate Management**
   - Integration with Azure Key Vault for certificate retrieval
   - Certificate expiration warnings
   - Automatic certificate renewal

2. **Azure Portal Integration**
   - Automatic federated credential creation via Azure REST API
   - Validation of Azure configuration

3. **Enhanced Logging**
   - Detailed certificate information
   - Token acquisition diagnostics
   - Azure resource access validation

4. **Multi-Environment Support**
   - Environment-specific configuration
   - Certificate per environment
   - Automated deployment pipelines

## References

- [Power Platform Managed Identity Documentation](https://learn.microsoft.com/en-us/power-platform/admin/set-up-managed-identity)
- [IManagedIdentityService API Reference](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.imanagedidentityservice)
- [SignTool.exe Documentation](https://learn.microsoft.com/en-us/dotnet/framework/tools/signtool-exe)
- [Azure Federated Identity Credentials](https://learn.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation)

## Appendix A: Cloud Environment Configuration Matrix

| Cloud | Audience | Issuer URL | Subject Prefix |
|-------|----------|------------|----------------|
| Public/GCC | api://AzureADTokenExchange | https://login.microsoftonline.com | /eid1/c/pub |
| GCC High/DoD | api://AzureADTokenExchangeUSGov | https://login.microsoftonline.us | /eid1/c/usg |
| China | api://AzureADTokenExchangeChina | https://login.partner.microsoftonline.cn | /eid1/c/chn |
| US National | api://AzureADTokenExchangeUSNat | https://login.microsoftonline.eaglex.ic.gov | /eid1/c/uss |
| US Secure | api://AzureADTokenExchangeUSSec | https://login.microsoftonline.scloud | /eid1/c/usn |

## Appendix B: Subject Identifier Format

### Self-Signed Certificate (Development)
```
/eid1/c/pub/t/{encodedTenantId}/a/qzXoWDkuqUa3l6zM5mM0Rw/n/plugin/e/{environmentId}/h/{certificateHash}
```

### Trusted Issuer Certificate (Production)
```
/eid1/c/pub/t/{encodedTenantId}/a/qzXoWDkuqUa3l6zM5mM0Rw/n/plugin/e/{environmentId}/i/{issuer}/s/{subject}
```

### Segment Meanings
- `eid1`: Identity format version
- `c/pub`: Cloud code (pub = public cloud)
- `t/{encodedTenantId}`: Base64URL-encoded tenant ID
- `a/qzXoWDkuqUa3l6zM5mM0Rw`: Fixed identifier for plugins
- `n/plugin`: Plugin component type
- `e/{environmentId}`: Environment identifier
- `h/{hash}`: SHA-256 hash of certificate (self-signed only)
- `i/{issuer}`: Certificate issuer (trusted certs)
- `s/{subject}`: Certificate subject (trusted certs)

---

**Document Version**: 1.0
**Date**: October 3, 2025
**Author**: DynamicsCrm.DevKit.Cli Development Team

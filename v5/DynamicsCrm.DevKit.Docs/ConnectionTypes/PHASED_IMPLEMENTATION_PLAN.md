# Connection Types - Phased Implementation Plan

> **Created**: 2026-01-13  
> **Status**: Ready for Implementation  
> **Reference**: [Rnwood.Dataverse.Data.PowerShell](https://github.com/rnwood/Rnwood.Dataverse.Data.PowerShell)

---

## 📋 Executive Summary

This document consolidates all connection type documentation into a **single, actionable implementation plan** with 4 distinct phases ordered from **easy to hard**. Each phase builds upon the previous, ensuring incremental delivery and testability.

### Current State Analysis
- **Existing Model**: `CrmConnection` supports only 5 properties: `Name`, `Url`, `UserName`, `Password`, `Type`
- **Supported Types**: OAuth (username/password), ClientSecret, AD (Active Directory)
- **CLI Architecture**: Modern Spectre.Console.Cli pattern with command-based structure
- **Reference Implementation**: Rnwood.Dataverse.Data.PowerShell - fully mature, production-ready

### Target State
- **9 Connection Types**: OAuth, ClientSecret, Interactive, DeviceCode, ClientCertificate, ManagedIdentity, DefaultAzureCredential, FromPac, AD
- **Modern Authentication**: MSAL-based, passwordless options, Azure-native
- **100% Backward Compatible**: No breaking changes to existing configurations

---

## 🎯 Phase Overview

| Phase | Focus | Duration | Difficulty | Key Deliverables |
|-------|-------|----------|------------|------------------|
| **Phase 1** | Foundation & Enhancements | 2 weeks | 🟢 Easy | Enhanced OAuth/ClientSecret, CrmConnection model expansion |
| **Phase 2** | Modern Interactive Auth | 2 weeks | 🟡 Medium | Interactive (Browser), DeviceCode, CLI auto-detection |
| **Phase 3** | Production & Azure Auth | 2 weeks | 🟠 Medium-Hard | ClientCertificate, ManagedIdentity, DefaultAzureCredential |
| **Phase 4** | Integration & Polish | 1 week | 🟢 Easy | FromPac integration, Documentation, Final testing |

**Total Duration**: 7 weeks

---

## 🧪 Testing Protocol

> **IMPORTANT**: For all phases, use CLI profile `07-DEVKITV4.Server` for testing.

### How to Test Each Phase

```powershell
# Step 1: Build the CLI
taskkill /F /IM "DynamicsCrm.DevKit.Cli.exe" 2>$null
dotnet build --configuration Release "D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj"

# Step 2: Run test profile 07-DEVKITV4.Server
# Read launchSettings.json to get the exact command-line arguments
# Execute the CLI with the profile settings
```

### Test Profile Details
- **Profile Name**: `07-DEVKITV4.Server`
- **Profile Location**: `d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli\Properties\launchSettings.json`
- **Purpose**: Test plugin/workflow deployment to Dataverse

### Success Criteria for Each Phase
- [ ] CLI builds without errors
- [ ] Profile `07-DEVKITV4.Server` executes successfully
- [ ] Existing connection types still work (backward compatibility)
- [ ] New connection types work as documented

---

## 🟢 Phase 1: Foundation & Enhancements (Easy)

### Duration: 2 weeks
### Difficulty: 🟢 Easy

### Goals
1. Expand `CrmConnection` model with new properties
2. Enhance existing OAuth connection with optional ClientId/TenantId
3. Enhance existing ClientSecret connection with validation
4. Create connection builder infrastructure
5. Maintain 100% backward compatibility

### 1.1 Expand CrmConnection Model

**File**: `DynamicsCrm.DevKit.Shared/Models/CrmConnection.cs`

```csharp
namespace DynamicsCrm.DevKit.Shared.Models
{
    public class CrmConnection
    {
        // Existing properties (DO NOT REMOVE)
        public string Name { get; set; }
        public string Url { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Type { get; set; } = "OAuth";

        // NEW: Common properties
        public string ClientId { get; set; }
        public string TenantId { get; set; }

        // NEW: ClientSecret
        public string ClientSecret { get; set; }

        // NEW: ClientCertificate
        public string CertificatePath { get; set; }
        public string CertificatePassword { get; set; }
        public string CertificateThumbprint { get; set; }
        public string CertificateStoreLocation { get; set; } = "CurrentUser";
        public string CertificateStoreName { get; set; } = "My";

        // NEW: ManagedIdentity
        public string ManagedIdentityClientId { get; set; }

        // NEW: PAC CLI
        public string PacProfile { get; set; }

        // NEW: Metadata
        public DateTime? LastTested { get; set; }
        public bool? LastTestSuccess { get; set; }
        public string LastTestError { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }
    }
}
```

### 1.2 Add Connection Type Constants

**File**: `DynamicsCrm.DevKit.Shared/Const.cs` (add new section)

```csharp
public static class ConnectionType
{
    public const string OAuth = "OAuth";                           // Existing
    public const string ClientSecret = "ClientSecret";             // Existing
    public const string AD = "AD";                                 // Existing
    public const string Interactive = "Interactive";               // NEW
    public const string DeviceCode = "DeviceCode";                 // NEW
    public const string ClientCertificate = "ClientCertificate";   // NEW
    public const string ManagedIdentity = "ManagedIdentity";       // NEW
    public const string DefaultAzureCredential = "DefaultAzureCredential"; // NEW
    public const string FromPac = "FromPac";                       // NEW
}
```

### 1.3 OAuth Enhancement

**What We Support**:
- ✅ Username/Password authentication (existing)
- ✅ Fixed Microsoft AppId: `51f81489-12ee-4a9e-aaae-a2591f45987d`
- ✅ Fixed RedirectUri: `app://58145B91-0C36-4500-8554-080854F2AC97`
- ✅ **NEW**: Optional ClientId override
- ✅ **NEW**: Optional TenantId for specific tenants

**Connection String Format**:
```
AuthType=OAuth;Url={url};Username={user};Password={pwd};AppId={clientId};RedirectUri={uri};LoginPrompt=Auto;
```

### 1.4 ClientSecret Enhancement

**What We Support**:
- ✅ ClientId (Application/Client ID from Azure AD)
- ✅ ClientSecret (Secret value from Azure AD)
- ✅ Url (Dataverse environment URL)
- ✅ **NEW**: Optional TenantId for multi-tenant apps
- ✅ **NEW**: Validation for ClientId GUID format
- ✅ **NEW**: Better error messages for expired secrets

**Connection String Format**:
```
AuthType=ClientSecret;Url={url};ClientId={guid};ClientSecret={secret};TenantId={tenantId};
```

### Phase 1 Deliverables
- [ ] Updated `CrmConnection.cs` with new properties
- [ ] Updated `Const.cs` with ConnectionType constants
- [ ] Enhanced OAuth connection handling
- [ ] Enhanced ClientSecret validation
- [ ] Backward compatibility tests pass
- [ ] Profile `07-DEVKITV4.Server` works with existing connections

### Phase 1 Testing Checklist
- [ ] Existing OAuth connections still work
- [ ] Existing ClientSecret connections still work
- [ ] Existing AD connections still work
- [ ] JSON deserialization handles new properties (nullable/default values)
- [ ] CLI profile `07-DEVKITV4.Server` executes successfully

---

## 🟡 Phase 2: Modern Interactive Auth (Medium)

### Duration: 2 weeks
### Difficulty: 🟡 Medium

### Goals
1. Implement Interactive (Browser-based OAuth)
2. Implement DeviceCode (Headless OAuth)
3. Add CLI auto-detection features
4. Implement SecureTokenCache with DPAPI

### Dependencies
```xml
<!-- Add to project file -->
<PackageReference Include="Azure.Identity" Version="1.10.4" />
<PackageReference Include="System.Security.Cryptography.ProtectedData" Version="8.0.0" />
```

### 2.1 Interactive (Browser-based OAuth)

**Use Cases**:
- Developer workstations
- Visual Studio integration
- Interactive CLI sessions

**What We Support**:
- ✅ Browser-based OAuth flow (opens default browser)
- ✅ Token caching with automatic refresh
- ✅ MFA/Conditional Access support
- ✅ Custom ClientId (optional)
- ✅ Custom TenantId (optional)
- ✅ Works with work/school and Microsoft accounts

**What We Don't Support**:
- ❌ Headless/SSH environments (use DeviceCode)
- ❌ Automated scripts (use ClientSecret or ManagedIdentity)

**CLI Usage**:
```powershell
# Interactive Authentication
devkit server --url "https://org.crm.dynamics.com" --auth Interactive --json "DynamicsCrm.DevKit.Cli.json" --profile default
```

**Reference Implementation** (from Rnwood):
```csharp
var publicClient = PublicClientApplicationBuilder
    .Create(ClientId.ToString())
    .WithRedirectUri("http://localhost")
    .Build();

// Try silent, then interactive
AuthenticationResult authResult = null;
try
{
    authResult = await app.AcquireTokenSilent(scopes, Username)
        .ExecuteAsync(cts.Token);
}
catch (MsalUiRequiredException) { }

if (authResult == null)
{
    authResult = await app.AcquireTokenInteractive(scopes)
        .ExecuteAsync(cts.Token);
}
```

### 2.2 DeviceCode (Headless OAuth)

**Use Cases**:
- CI/CD pipelines
- Remote servers
- Containers
- SSH sessions
- WSL

**What We Support**:
- ✅ Device code flow (displays URL + code)
- ✅ Token caching and refresh
- ✅ MFA/Conditional Access support
- ✅ Custom ClientId (optional)
- ✅ Timeout configuration (default: 5 minutes)

**What We Don't Support**:
- ❌ Fully automated scenarios (requires one-time user interaction)
- ❌ Service accounts (use ClientSecret or ManagedIdentity)

**CLI Usage**:
```powershell
# Device Code Authentication
devkit server --url "https://org.crm.dynamics.com" --auth DeviceCode --json "DynamicsCrm.DevKit.Cli.json" --profile default

# Output:
# To sign in, use a web browser to open the page https://microsoft.com/devicelogin
# and enter the code: ABCD1234
# Waiting for authentication...
```

**Reference Implementation** (from Rnwood):
```csharp
var credential = new DeviceCodeCredential(new DeviceCodeCredentialOptions
{
    ClientId = clientId ?? "51f81489-12ee-4a9e-aaae-a2591f45987d",
    TenantId = tenantId,
    DeviceCodeCallback = (deviceCode, cancellationToken) =>
    {
        Console.WriteLine(deviceCode.Message);
        return Task.CompletedTask;
    }
});
```

### 2.3 SecureTokenCache Implementation

**File**: `DynamicsCrm.DevKit.Shared/SecureTokenCache.cs` (NEW)

```csharp
public class SecureTokenCache
{
    private readonly string _cacheLocation;
    
    public SecureTokenCache()
    {
        _cacheLocation = Path.Combine(
            Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
            "DynamicsCrmDevKit",
            "TokenCache"
        );
        
        if (!Directory.Exists(_cacheLocation))
            Directory.CreateDirectory(_cacheLocation);
    }
    
    public void SaveToken(string connectionName, string token)
    {
        var encrypted = ProtectedData.Protect(
            Encoding.UTF8.GetBytes(token),
            null,
            DataProtectionScope.CurrentUser
        );
        
        var tokenFile = GetTokenFilePath(connectionName);
        File.WriteAllBytes(tokenFile, encrypted);
    }
    
    public string LoadToken(string connectionName)
    {
        var tokenFile = GetTokenFilePath(connectionName);
        if (!File.Exists(tokenFile)) return null;
        
        var encrypted = File.ReadAllBytes(tokenFile);
        var decrypted = ProtectedData.Unprotect(
            encrypted,
            null,
            DataProtectionScope.CurrentUser
        );
        
        return Encoding.UTF8.GetString(decrypted);
    }
    
    public void ClearAllTokens()
    {
        if (Directory.Exists(_cacheLocation))
            Directory.Delete(_cacheLocation, true);
    }
    
    private string GetTokenFilePath(string connectionName)
    {
        var safeFileName = string.Join("_", connectionName.Split(Path.GetInvalidFileNameChars()));
        return Path.Combine(_cacheLocation, $"{safeFileName}.token");
    }
}
```

### 2.4 CLI Auto-Detection

**File**: `DynamicsCrm.DevKit.Cli/ProjectUrlAutoParser.cs` (NEW)

Auto-detect Dataverse URL from:
1. `DynamicsCrm.DevKit.json` (default connection)
2. `.cdsproj` files
3. PAC CLI auth profiles
4. Environment variables (`DATAVERSE_URL`, `DYNAMICS_URL`)

### Phase 2 Deliverables
- [ ] Interactive connection type implemented
- [ ] DeviceCode connection type implemented
- [ ] SecureTokenCache implemented with DPAPI
- [ ] CLI auto-detection implemented
- [ ] New CLI arguments: `--auth`, `--autodetect`
- [ ] Profile `07-DEVKITV4.Server` works with Interactive auth

### Phase 2 Testing Checklist
- [ ] Interactive auth opens browser and completes login
- [ ] DeviceCode auth displays code and completes login
- [ ] Token cache saves tokens encrypted
- [ ] Token cache loads tokens correctly
- [ ] Token refresh works automatically
- [ ] Auto-detection finds URL from DynamicsCrm.DevKit.json
- [ ] CLI profile `07-DEVKITV4.Server` executes with new auth types

---

## 🟠 Phase 3: Production & Azure Auth (Medium-Hard)

### Duration: 2 weeks
### Difficulty: 🟠 Medium-Hard

### Goals
1. Implement ClientCertificate (Certificate-based auth)
2. Implement ManagedIdentity (Azure managed identity)
3. Implement DefaultAzureCredential (Azure credential chain)

### 3.1 ClientCertificate (Certificate-based Auth)

**Use Cases**:
- Production environments
- Automated deployments
- High-security scenarios

**What We Support**:
- ✅ **File-based certificates**: .pfx, .p12 files with password
- ✅ **Store-based certificates**: Windows Certificate Store (CurrentUser/LocalMachine)
- ✅ Certificate thumbprint lookup
- ✅ Store location: CurrentUser, LocalMachine
- ✅ Store name: My (Personal), Root, CA, Trust
- ✅ Password-protected .pfx files
- ✅ Certificate chain validation

**What We Don't Support**:
- ❌ .pem/.crt files (must convert to .pfx)
- ❌ Smart card certificates
- ❌ Hardware security modules (HSM)
- ❌ Azure Key Vault certificate references

**CLI Usage (File-based)**:
```powershell
devkit server --url "https://org.crm.dynamics.com" --auth ClientCertificate --clientid "12345678-1234-1234-1234-123456789012" --cert "C:\certs\app.pfx" --certpass "P@ssw0rd" --json "DynamicsCrm.DevKit.Cli.json" --profile prod
```

**CLI Usage (Store-based)**:
```powershell
devkit server --url "https://org.crm.dynamics.com" --auth ClientCertificate --clientid "12345678-1234-1234-1234-123456789012" --certthumb "ABC123DEF456..." --certstorelocation CurrentUser --certstorename My --json "DynamicsCrm.DevKit.Cli.json" --profile prod
```

**Reference Implementation**:
```csharp
// From file
var cert = new X509Certificate2(
    certificatePath,
    certificatePassword,
    X509KeyStorageFlags.MachineKeySet | X509KeyStorageFlags.PersistKeySet
);

// From store
using var store = new X509Store(StoreName.My, StoreLocation.CurrentUser);
store.Open(OpenFlags.ReadOnly);
var cert = store.Certificates
    .Find(X509FindType.FindByThumbprint, thumbprint, validOnly: true)
    .FirstOrDefault();

// Create credential
var credential = new ClientCertificateCredential(tenantId, clientId, cert);
```

### 3.2 ManagedIdentity (Azure Managed Identity)

**Use Cases**:
- Azure VMs
- Azure App Services
- Azure Functions
- Container instances

**What We Support**:
- ✅ **System-assigned identity**: VM, App Service, Function, Container Instance
- ✅ **User-assigned identity**: Shared across resources
- ✅ Auto-detection of managed identity environment
- ✅ Works with all Azure compute resources

**What We Don't Support**:
- ❌ Non-Azure environments (on-premises, other clouds)
- ❌ Local development (use Interactive or DeviceCode)
- ❌ Resources without managed identity enabled

**CLI Usage**:
```powershell
# System-assigned identity
devkit server --url "https://org.crm.dynamics.com" --auth ManagedIdentity --json "DynamicsCrm.DevKit.Cli.json" --profile prod

# User-assigned identity
devkit server --url "https://org.crm.dynamics.com" --auth ManagedIdentity --managedidentityclientid "12345678-1234-1234-1234-123456789012" --json "DynamicsCrm.DevKit.Cli.json" --profile prod
```

**Reference Implementation**:
```csharp
// System-assigned
var credential = new ManagedIdentityCredential();

// User-assigned
var credential = new ManagedIdentityCredential(clientId: managedIdentityClientId);
```

### 3.3 DefaultAzureCredential (Azure Credential Chain)

**Use Cases**:
- Single codebase for dev and production
- Azure DevOps pipelines
- GitHub Actions with Azure OIDC
- Local development without configuration

**What We Support** (Authentication chain in order):
1. ✅ **Environment variables**: AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, AZURE_TENANT_ID
2. ✅ **Managed Identity**: If running on Azure resource
3. ✅ **Visual Studio**: Authenticated account in VS
4. ✅ **Azure CLI**: `az login` authenticated account
5. ✅ **Azure PowerShell**: `Connect-AzAccount` authenticated account
6. ✅ **Interactive Browser**: Fallback to browser authentication

**What We Don't Support**:
- ❌ Customizing the credential chain order
- ❌ Disabling specific credential types

**CLI Usage**:
```powershell
devkit server --url "https://org.crm.dynamics.com" --auth DefaultAzureCredential --json "DynamicsCrm.DevKit.Cli.json" --profile default
```

**Reference Implementation**:
```csharp
var credential = new DefaultAzureCredential(new DefaultAzureCredentialOptions
{
    ExcludeEnvironmentCredential = false,
    ExcludeManagedIdentityCredential = false,
    ExcludeSharedTokenCacheCredential = false,
    ExcludeVisualStudioCredential = false,
    ExcludeVisualStudioCodeCredential = false,
    ExcludeAzureCliCredential = false,
    ExcludeAzurePowerShellCredential = false,
    ExcludeInteractiveBrowserCredential = false
});
```

### Phase 3 Deliverables
- [ ] ClientCertificate connection type implemented (file + store)
- [ ] ManagedIdentity connection type implemented (system + user)
- [ ] DefaultAzureCredential connection type implemented
- [ ] Certificate validation logic
- [ ] New CLI arguments: `--cert`, `--certpass`, `--certthumb`, `--certstorelocation`, `--certstorename`, `--managedidentityclientid`

### Phase 3 Testing Checklist
- [ ] ClientCertificate auth with .pfx file works
- [ ] ClientCertificate auth with certificate store works
- [ ] ManagedIdentity works on Azure VM/App Service
- [ ] DefaultAzureCredential correctly chains through methods
- [ ] Certificate validation rejects invalid certificates
- [ ] Appropriate error messages for missing certificates
- [ ] CLI profile `07-DEVKITV4.Server` executes with production auth types

---

## 🟢 Phase 4: Integration & Polish (Easy)

### Duration: 1 week
### Difficulty: 🟢 Easy

### Goals
1. Implement FromPac (PAC CLI integration)
2. Finalize documentation
3. Complete end-to-end testing
4. Update CLI help

### 4.1 FromPac (PAC CLI Integration)

**Use Cases**:
- Developers using PAC CLI
- Shared authentication state
- Simplified workflow

**What We Support**:
- ✅ Load authentication from PAC auth profiles
- ✅ Auto-detect current/active profile
- ✅ Specify profile by name or index
- ✅ Support for all PAC auth types (Universal, Admin, etc.)
- ✅ Parse `pac auth list` output

**What We Don't Support**:
- ❌ Creating/managing PAC profiles (use `pac auth create`)
- ❌ Modifying PAC configuration
- ❌ PAC CLI installation (user must install separately)

**CLI Usage**:
```powershell
# Use active/current profile
devkit server --auth FromPac --json "DynamicsCrm.DevKit.Cli.json" --profile default

# Use specific profile by name
devkit server --auth FromPac --pacprofile "Development" --json "DynamicsCrm.DevKit.Cli.json" --profile default

# Use specific profile by index
devkit server --auth FromPac --pacprofile "1" --json "DynamicsCrm.DevKit.Cli.json" --profile default
```

**Reference Implementation**:
```csharp
public static async Task<string> GetCurrentEnvironmentUrlAsync()
{
    var process = new Process
    {
        StartInfo = new ProcessStartInfo
        {
            FileName = "pac",
            Arguments = "auth list",
            RedirectStandardOutput = true,
            UseShellExecute = false,
            CreateNoWindow = true
        }
    };
    
    process.Start();
    var output = await process.StandardOutput.ReadToEndAsync();
    await process.WaitForExitAsync();
    
    // Parse output to find active profile
    // Format: * Index: 1 Name: Default Environment: https://org.crm.dynamics.com
    return ParsePacAuthOutput(output);
}
```

### 4.2 AD (Active Directory) - Maintain Existing

**Status**: No changes planned - maintain as-is

**What We Support**:
- ✅ Domain\Username format
- ✅ Windows Integrated Authentication
- ✅ On-premises Dynamics 365 (IFD)
- ✅ Kerberos authentication

**What We Don't Support**:
- ❌ Cloud/online environments
- ❌ Non-Windows platforms
- ❌ Modern authentication features

### Phase 4 Deliverables
- [ ] FromPac connection type implemented
- [ ] PAC CLI profile parsing
- [ ] Error handling for missing PAC CLI
- [ ] Updated CLI help with all connection types
- [ ] Complete documentation update
- [ ] All end-to-end tests pass

### Phase 4 Testing Checklist
- [ ] FromPac with active profile works
- [ ] FromPac with named profile works
- [ ] FromPac with index-based profile works
- [ ] Appropriate error when PAC CLI not installed
- [ ] Appropriate error when PAC profile not found
- [ ] AD authentication still works unchanged
- [ ] CLI profile `07-DEVKITV4.Server` executes with all auth types

---

## 📊 Summary - Connection Types Matrix

| Type | Priority | Phase | Status | Use Case |
|------|----------|-------|--------|----------|
| OAuth | 1 | 1 | Enhance | Legacy username/password |
| ClientSecret | 2 | 1 | Enhance | CI/CD, service accounts |
| Interactive | 3 | 2 | New | Developer workstations |
| DeviceCode | 4 | 2 | New | Headless, SSH, containers |
| ClientCertificate | 5 | 3 | New | Production, high-security |
| ManagedIdentity | 6 | 3 | New | Azure VMs, App Services |
| DefaultAzureCredential | 7 | 3 | New | Flexible Azure auth |
| FromPac | 8 | 4 | New | PAC CLI users |
| AD | 9 | 1 | Maintain | On-premises only |

---

## 🔗 Reference Links

- **Reference Implementation**: https://github.com/rnwood/Rnwood.Dataverse.Data.PowerShell
- **Rnwood Authentication Guide**: https://github.com/rnwood/Rnwood.Dataverse.Data.PowerShell/blob/main/docs/getting-started/authentication.md
- **MSAL.NET**: https://github.com/AzureAD/microsoft-authentication-library-for-dotnet
- **Azure.Identity**: https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/identity/Azure.Identity
- **ServiceClient**: https://docs.microsoft.com/en-us/dotnet/api/microsoft.powerplatform.dataverse.client.serviceclient
- **Microsoft Connection Strings**: https://learn.microsoft.com/en-us/power-apps/developer/data-platform/xrm-tooling/use-connection-strings-xrm-tooling-connect

---

## 📝 AI Testing Notes

When an AI agent implements any phase, they should:

1. **Read this document first** to understand the phase requirements
2. **Build the CLI** using the commands from the testing protocol
3. **Run profile `07-DEVKITV4.Server`** to verify changes work
4. **Check backward compatibility** - existing connections must still work
5. **Update this document** with implementation notes and test results

### Build & Test Commands

```powershell
# Kill any running CLI process
taskkill /F /IM "DynamicsCrm.DevKit.Cli.exe" 2>$null

# Build CLI in Release mode
dotnet build --configuration Release "D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj"

# Get profile args from launchSettings.json and run
# Profile: 07-DEVKITV4.Server
```

### launchSettings.json Location
`d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli\Properties\launchSettings.json`

---

**Document Version**: 1.0  
**Created**: 2026-01-13  
**Status**: Ready for Implementation

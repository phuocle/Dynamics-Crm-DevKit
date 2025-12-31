# Connection Types Priority Order & Support Details

## Priority Order for Implementation (1 = Highest Priority)

This document outlines the recommended priority order for implementing connection types, with detailed rationale and support information for each.

---

## **Priority 1: OAuth (Username/Password) - EXISTING - ENHANCED**

**Status**: Currently supported, requires enhancement  
**Timeline**: Week 1-2 (Enhancement during Phase 1)  
**Effort**: Low (existing code, minor improvements)

### Why Priority 1?
- **Backward Compatibility**: Must maintain existing functionality
- **Most Common**: Currently the default and most widely used
- **Foundation**: Serves as baseline for other OAuth variants

### What We Support
Γ£à **Supported Features**:
- Username/Password authentication
- Fixed Microsoft AppId (51f81489-12ee-4a9e-aaae-a2591f45987d)
- Fixed RedirectUri (app://58145B91-0C36-4500-8554-080854F2AC97)
- LoginPrompt=Auto
- Password encryption with RijndaelManaged
- Connection string storage in `DynamicsCrm.DevKit.json`

### Enhancement Plan
- Γ£à Keep all existing functionality
- Γ₧ò Add optional ClientId override
- Γ₧ò Add optional TenantId for specific tenants
- Γ₧ò Migrate to modern AES encryption
- Γ₧ò Add "Don't save password" option in VSIX

### Implementation Notes
```csharp
// Enhanced connection string format
"AuthType=OAuth;Url={url};Username={user};Password={pwd};AppId={clientId};RedirectUri={uri};LoginPrompt=Auto;"

// Backward compatible - defaults remain the same
// If AppId not specified, uses 51f81489-12ee-4a9e-aaae-a2591f45987d
// If RedirectUri not specified, uses app://58145B91-0C36-4500-8554-080854F2AC97
```

---

## **Priority 2: ClientSecret (Application/Service Principal) - EXISTING - ENHANCED**

**Status**: Currently supported, requires enhancement  
**Timeline**: Week 1-2 (Enhancement during Phase 1)  
**Effort**: Low (existing code, add validation)

### Why Priority 2?
- **CI/CD Essential**: Critical for automated deployments
- **Production Ready**: Already in use for service accounts
- **Security**: Better than username/password for automation
- **No User Interaction**: Works in headless environments

### What We Support
Γ£à **Supported Features**:
- ClientId (Application/Client ID from Azure AD app registration)
- ClientSecret (Secret value from Azure AD app registration)
- Url (Dataverse environment URL)
- Secret encryption for storage
- Works with both Azure AD and on-premises ADFS

### Enhancement Plan
- Γ£à Keep all existing functionality
- Γ₧ò Add optional TenantId for multi-tenant apps
- Γ₧ò Add secret rotation support (warn when secret near expiry)
- Γ₧ò Add validation for ClientId format (GUID)
- Γ₧ò Improve error messages for expired secrets

### Implementation Notes
```csharp
// Connection string format
"AuthType=ClientSecret;Url={url};ClientId={guid};ClientSecret={secret};TenantId={tenantId};"

// Validation
- ClientId must be valid GUID
- ClientSecret must not be empty
- Url must be valid HTTPS URL
- TenantId optional but validated if provided
```

### Configuration Example (CLI)
```powershell
# Using environment variables for secrets (recommended)
$env:CLIENT_SECRET = "your-secret-value"
DynamicsCrm.DevKit.Cli `
  /auth:ClientSecret `
  /url:"https://org.crm.dynamics.com" `
  /clientid:"12345678-1234-1234-1234-123456789012" `
  /clientsecret:$env:CLIENT_SECRET `
  /json:"..." /type:servers /profile:prod
```

---

## **Priority 3: Interactive (Browser-based OAuth) - NEW**

**Status**: New implementation  
**Timeline**: Week 2-3 (Phase 2)  
**Effort**: Medium (leverages ServiceClient built-in support)

### Why Priority 3?
- **Modern Experience**: Best developer experience with browser-based auth
- **MFA Support**: Native support for multi-factor authentication
- **Token Caching**: Reduces re-authentication frequency
- **Passwordless**: No password storage required
- **Microsoft Recommended**: Modern authentication pattern

### What We Support
Γ£à **Supported Features**:
- Browser-based OAuth flow (opens default browser)
- Token caching with automatic refresh
- MFA/Conditional Access support
- Custom ClientId (optional)
- Custom TenantId (optional)
- Works with both work/school and Microsoft accounts

Γ¥î **Not Supported**:
- Headless/SSH environments (use DeviceCode instead)
- Automated scripts (use ClientSecret or ManagedIdentity)

### Implementation Notes
```csharp
// ServiceClient constructor supports this natively
var serviceClient = new ServiceClient(
    userId: null,  // Will prompt in browser
    password: null,
    hostUri: new Uri(url),
    useUniqueInstance: true,
    clientId: clientId ?? "51f81489-12ee-4a9e-aaae-a2591f45987d",
    redirectUri: new Uri("app://58145B91-0C36-4500-8554-080854F2AC97"),
    promptBehavior: PromptBehavior.Auto,  // or Always/Never/SelectAccount
    useDefaultCreds: false,
    tokenCacheStorePath: GetTokenCachePath()  // Persistent token cache
);

// Connection string format
"AuthType=OAuth;Url={url};ClientId={clientId};LoginPrompt=Auto;"
```

### Configuration Example (VSIX)
```
1. Select "Interactive (Browser)" from Type dropdown
2. Enter or auto-detect URL
3. Optionally enter custom ClientId
4. Click "Test Connection" ΓåÆ Browser opens
5. Sign in with credentials + MFA
6. Browser shows success, return to Visual Studio
7. Save connection for reuse
```

### Token Cache Location
- Windows: `%LOCALAPPDATA%\DynamicsCrmDevKit\TokenCache\{ConnectionName}.cache`
- Encrypted with DPAPI (CurrentUser scope)
- Auto-refresh when token expires
- Clear with `/connections:clearcache`

---

## **Priority 4: DeviceCode (Headless OAuth) - NEW**

**Status**: New implementation  
**Timeline**: Week 3-4 (Phase 2)  
**Effort**: Medium-High (requires Azure.Identity SDK)

### Why Priority 4?
- **CI/CD Compatible**: Works in containers, SSH, remote servers
- **No Browser Required**: Uses device code flow
- **MFA Support**: Supports multi-factor authentication
- **Better than ClientSecret**: More secure than storing secrets
- **Linux/Container Friendly**: Works in any environment

### What We Support
Γ£à **Supported Features**:
- Device code flow (displays URL + code)
- Token caching and refresh
- MFA/Conditional Access support
- Custom ClientId (optional)
- Timeout configuration (default: 5 minutes)

Γ¥î **Not Supported**:
- Fully automated scenarios (requires one-time user interaction)
- Service accounts (use ClientSecret or ManagedIdentity)

### Implementation Notes
```csharp
// Using Azure.Identity SDK
var credential = new DeviceCodeCredential(new DeviceCodeCredentialOptions
{
    ClientId = clientId ?? "51f81489-12ee-4a9e-aaae-a2591f45987d",
    TenantId = tenantId,
    DeviceCodeCallback = (deviceCode, cancellationToken) =>
    {
        Console.WriteLine(deviceCode.Message);
        // Output: "To sign in, use a web browser to open the page 
        // https://microsoft.com/devicelogin and enter the code AB12CD34"
        return Task.CompletedTask;
    }
});

// Get token and create ServiceClient
var scope = $"{url}/.default";
var token = await credential.GetTokenAsync(new TokenRequestContext(new[] { scope }));
```

### Configuration Example (CLI)
```powershell
DynamicsCrm.DevKit.Cli `
  /auth:DeviceCode `
  /url:"https://org.crm.dynamics.com" `
  /json:"..." /type:servers /profile:default

# Output:
# To sign in, use a web browser to open the page https://microsoft.com/devicelogin
# and enter the code: ABCD1234
# Waiting for authentication...
```

### Use Cases
- Azure DevOps pipeline with interactive approval
- GitHub Actions with device code flow
- SSH sessions to remote servers
- Docker containers
- WSL (Windows Subsystem for Linux)

---

## **Priority 5: ClientCertificate (Certificate-based) - NEW**

**Status**: New implementation  
**Timeline**: Week 4-5 (Phase 3)  
**Effort**: Medium-High (certificate handling complexity)

### Why Priority 5?
- **Production Security**: Most secure for automated scenarios
- **No Secret Storage**: Certificate-based authentication
- **Certificate Rotation**: Easier to rotate than secrets
- **Compliance**: Required by some organizations
- **Long-term Validity**: Certificates can be valid for years

### What We Support
Γ£à **Supported Features**:
- **File-based certificates**: .pfx, .p12 files with password
- **Store-based certificates**: Windows Certificate Store (CurrentUser/LocalMachine)
- Certificate thumbprint lookup
- Store location: CurrentUser, LocalMachine
- Store name: My (Personal), Root, CA, Trust
- Password-protected .pfx files
- Certificate chain validation

Γ¥î **Not Supported**:
- .pem/.crt files (must convert to .pfx)
- Smart card certificates
- Hardware security modules (HSM) - future consideration
- Azure Key Vault certificate references - future consideration

### Implementation Notes
```csharp
// Option 1: File-based certificate
var cert = new X509Certificate2(
    certificatePath,
    certificatePassword,
    X509KeyStorageFlags.MachineKeySet | X509KeyStorageFlags.PersistKeySet
);

// Option 2: Store-based certificate
using var store = new X509Store(StoreName.My, StoreLocation.CurrentUser);
store.Open(OpenFlags.ReadOnly);
var cert = store.Certificates
    .Find(X509FindType.FindByThumbprint, thumbprint, validOnly: true)
    .FirstOrDefault();

// Create credential
var credential = new ClientCertificateCredential(
    tenantId,
    clientId,
    cert
);
```

### Configuration Example (CLI - File)
```powershell
DynamicsCrm.DevKit.Cli `
  /auth:ClientCertificate `
  /url:"https://org.crm.dynamics.com" `
  /clientid:"12345678-1234-1234-1234-123456789012" `
  /cert:"C:\certs\app.pfx" `
  /certpass:"P@ssw0rd" `
  /json:"..." /type:servers /profile:prod
```

### Configuration Example (CLI - Store)
```powershell
DynamicsCrm.DevKit.Cli `
  /auth:ClientCertificate `
  /url:"https://org.crm.dynamics.com" `
  /clientid:"12345678-1234-1234-1234-123456789012" `
  /certthumb:"ABC123DEF456..." `
  /certstorelocation:CurrentUser `
  /certstorename:My `
  /json:"..." /type:servers /profile:prod
```

### VSIX Configuration
```
1. Select "Client Certificate" from Type dropdown
2. Enter ClientId (required)
3. Select certificate source:
   Γùï File: Browse to .pfx file, enter password
   Γùï Store: Enter thumbprint, select location/store
4. Test connection
5. Save
```

### Security Considerations
- ΓÜá∩╕Å Certificate files should have restrictive permissions
- ΓÜá∩╕Å Never commit certificate files to source control
- Γ£à Use certificate stores in production
- Γ£à Set certificate expiry alerts (90 days before)
- Γ£à Validate certificate chain before use

---

## **Priority 6: ManagedIdentity (Azure Managed Identity) - NEW**

**Status**: New implementation  
**Timeline**: Week 5-6 (Phase 3)  
**Effort**: Low-Medium (straightforward with Azure.Identity)

### Why Priority 6?
- **Azure Native**: Perfect for Azure-hosted applications
- **Zero Credentials**: No secrets to manage
- **Automatic Rotation**: Azure handles credential management
- **Best Security**: Zero-trust architecture
- **Recommended by Microsoft**: Best practice for Azure

### What We Support
Γ£à **Supported Features**:
- **System-assigned identity**: VM, App Service, Function, Container Instance
- **User-assigned identity**: Shared across resources
- Auto-detection of managed identity environment
- Works with all Azure compute resources

Γ¥î **Not Supported**:
- Non-Azure environments (on-premises, other clouds)
- Local development (use Interactive or DeviceCode)
- Resources without managed identity enabled

### Implementation Notes
```csharp
// System-assigned managed identity
var credential = new ManagedIdentityCredential();

// User-assigned managed identity
var credential = new ManagedIdentityCredential(clientId: managedIdentityClientId);

// ServiceClient creation
var scope = $"{url}/.default";
var token = await credential.GetTokenAsync(new TokenRequestContext(new[] { scope }));
// Use token with ServiceClient
```

### Configuration Example (CLI)
```powershell
# System-assigned identity
DynamicsCrm.DevKit.Cli `
  /auth:ManagedIdentity `
  /url:"https://org.crm.dynamics.com" `
  /json:"..." /type:servers /profile:prod

# User-assigned identity
DynamicsCrm.DevKit.Cli `
  /auth:ManagedIdentity `
  /url:"https://org.crm.dynamics.com" `
  /managedidentityclientid:"12345678-1234-1234-1234-123456789012" `
  /json:"..." /type:servers /profile:prod
```

### Azure Resource Setup
1. Enable managed identity on resource (VM, App Service, etc.)
2. Grant identity permissions in Dataverse:
   - Azure Portal ΓåÆ Dataverse ΓåÆ Settings ΓåÆ Users + permissions
   - Add user (managed identity)
   - Assign security roles
3. Deploy application with managed identity configured
4. No credentials needed in deployment

### Use Cases
- Azure VM running scheduled plugins deployment
- Azure App Service for web integration
- Azure Functions for serverless workflows
- Azure Container Instances
- Azure Kubernetes Service (AKS) with pod identity

---

## **Priority 7: DefaultAzureCredential (Azure Credential Chain) - NEW**

**Status**: New implementation  
**Timeline**: Week 5-6 (Phase 3)  
**Effort**: Low (uses Azure.Identity SDK)

### Why Priority 7?
- **Maximum Flexibility**: Works across dev and production
- **Auto-Detection**: Tries multiple auth methods automatically
- **Developer Friendly**: No code changes between environments
- **Azure DevOps Compatible**: Works in pipelines
- **Fallback Chain**: Graceful degradation

### What We Support
Γ£à **Supported Features**:
Authentication chain (in order):
1. **Environment variables**: AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, AZURE_TENANT_ID
2. **Managed Identity**: If running on Azure resource
3. **Visual Studio**: Authenticated account in VS
4. **Azure CLI**: `az login` authenticated account
5. **Azure PowerShell**: `Connect-AzAccount` authenticated account
6. **Interactive Browser**: Fallback to browser authentication

Γ¥î **Not Supported**:
- Customizing the credential chain order
- Disabling specific credential types (all or nothing)

### Implementation Notes
```csharp
// Single line - tries all methods
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

### Configuration Example
```powershell
DynamicsCrm.DevKit.Cli `
  /auth:DefaultAzureCredential `
  /url:"https://org.crm.dynamics.com" `
  /json:"..." /type:servers /profile:default
```

### Environment-Specific Behavior
| Environment | Credential Used |
|-------------|----------------|
| **Local Dev (VS)** | Visual Studio authenticated account |
| **Local Dev (CLI)** | Azure CLI (`az login`) |
| **Azure DevOps** | Service Connection (env vars) |
| **GitHub Actions** | OIDC or env vars |
| **Azure VM** | Managed Identity |
| **Azure App Service** | Managed Identity |

### Use Cases
- Single codebase for dev and production
- Azure DevOps pipelines (service connections)
- GitHub Actions with Azure OIDC
- Local development without configuration
- Quick prototyping and demos

---

## **Priority 8: FromPac (PAC CLI Integration) - NEW**

**Status**: New implementation  
**Timeline**: Week 6-7 (Phase 4)  
**Effort**: Medium (requires PAC CLI parsing)

### Why Priority 8?
- **Reuse Existing Auth**: Leverage PAC CLI authentication
- **Developer Convenience**: No duplicate authentication
- **Profile Management**: Use PAC's connection management
- **Consistency**: Same auth across Microsoft tools
- **Community Request**: Many users already use PAC CLI

### What We Support
Γ£à **Supported Features**:
- Load authentication from PAC auth profiles
- Auto-detect current/active profile
- Specify profile by name or index
- Support for all PAC auth types (Universal, Admin, etc.)
- Parse `pac auth list` output

Γ¥î **Not Supported**:
- Creating/managing PAC profiles (use `pac auth create`)
- Modifying PAC configuration
- PAC CLI installation (user must install separately)

### Implementation Notes
```csharp
// Execute pac auth list
var process = new Process
{
    StartInfo = new ProcessStartInfo
    {
        FileName = "pac",
        Arguments = "auth list",
        RedirectStandardOutput = true,
        UseShellExecute = false
    }
};
process.Start();
var output = await process.StandardOutput.ReadToEndAsync();

// Parse output to find active profile
// Format: * Index: 1 Name: Development Environment: https://dev.crm.dynamics.com
```

### Configuration Example (CLI)
```powershell
# Use active/current profile
DynamicsCrm.DevKit.Cli `
  /auth:FromPac `
  /json:"..." /type:servers /profile:default

# Use specific profile by name
DynamicsCrm.DevKit.Cli `
  /auth:FromPac `
  /pacprofile:"Development" `
  /json:"..." /type:servers /profile:default

# Use specific profile by index
DynamicsCrm.DevKit.Cli `
  /auth:FromPac `
  /pacprofile:"1" `
  /json:"..." /type:servers /profile:default
```

### PAC CLI Setup (User Prerequisites)
```powershell
# Install PAC CLI
dotnet tool install --global Microsoft.PowerApps.CLI.Tool

# Create auth profile
pac auth create --url https://dev.crm.dynamics.com --name "Development"

# List profiles
pac auth list

# Set active profile
pac auth select --index 1
```

### VSIX Configuration
```
1. Select "PAC CLI Profile" from Type dropdown
2. Dropdown populates with PAC profiles from `pac auth list`
3. Select profile
4. Test connection
5. Save
```

### Error Handling
- ΓÜá∩╕Å PAC CLI not installed ΓåÆ Show installation instructions
- ΓÜá∩╕Å No auth profiles ΓåÆ Show `pac auth create` command
- ΓÜá∩╕Å Profile not found ΓåÆ List available profiles
- ΓÜá∩╕Å Profile expired ΓåÆ Suggest re-authentication

---

## **Priority 9: AD (Active Directory) - EXISTING - MAINTAINED**

**Status**: Currently supported, maintain as-is  
**Timeline**: Week 1 (Validation only)  
**Effort**: Minimal (no changes planned)

### Why Priority 9 (Lowest)?
- **Legacy**: For on-premises only
- **Declining Use**: Most customers moving to cloud
- **Limited Scope**: Windows authentication only
- **No Enhancements Needed**: Works as expected

### What We Support
Γ£à **Supported Features**:
- Domain\Username format
- Windows Integrated Authentication
- On-premises Dynamics 365 (IFD)
- Kerberos authentication

Γ¥î **Not Supported**:
- Cloud/online environments
- Non-Windows platforms
- Modern authentication features

### Implementation Notes
```csharp
// Connection string format
"AuthType=AD;Url={url};Domain={domain};Username={user};Password={password};"

// Validation: Username must contain backslash
if (!username.Contains("\\"))
    throw new ArgumentException("For AD authentication, username must be in format 'domain\\username'");
```

### Configuration Example
```
Username: CONTOSO\jsmith
Password: ********
URL: https://onprem.contoso.com
```

### Maintenance Plan
- Γ£à Keep existing functionality unchanged
- Γ£à Ensure backward compatibility
- Γ£à Validate in tests
- Γ¥î No new features planned

---

## Implementation Timeline Summary

| Priority | Type | Status | Weeks | Effort | Users Impacted |
|----------|------|--------|-------|--------|----------------|
| 1 | OAuth | Enhance | 1-2 | Low | Γ¡ÉΓ¡ÉΓ¡ÉΓ¡ÉΓ¡É (100%) |
| 2 | ClientSecret | Enhance | 1-2 | Low | Γ¡ÉΓ¡ÉΓ¡ÉΓ¡É (80% CI/CD) |
| 3 | Interactive | New | 2-3 | Medium | Γ¡ÉΓ¡ÉΓ¡ÉΓ¡ÉΓ¡É (90% devs) |
| 4 | DeviceCode | New | 3-4 | Medium-High | Γ¡ÉΓ¡ÉΓ¡É (50% CI/CD) |
| 5 | ClientCertificate | New | 4-5 | Medium-High | Γ¡ÉΓ¡ÉΓ¡É (40% prod) |
| 6 | ManagedIdentity | New | 5-6 | Low-Medium | Γ¡ÉΓ¡É (30% Azure) |
| 7 | DefaultAzureCredential | New | 5-6 | Low | Γ¡ÉΓ¡É (25% Azure) |
| 8 | FromPac | New | 6-7 | Medium | Γ¡ÉΓ¡É (20% PAC users) |
| 9 | AD | Maintain | 1 | Minimal | Γ¡É (5% on-prem) |

---

## Recommendation for Phased Rollout

### Phase 1: Foundation (Weeks 1-2)
**Focus**: Enhance existing, prepare infrastructure
- Γ£à OAuth enhanced
- Γ£à ClientSecret enhanced
- Γ£à Core connection builder framework
- Γ£à Token cache implementation
- Γ£à AD validation

**Deliverable**: Backward-compatible enhanced existing types

### Phase 2: Modern Auth (Weeks 2-4)
**Focus**: Developer experience
- Γ£à Interactive (browser OAuth)
- Γ£à DeviceCode (headless OAuth)
- Γ£à CLI auto-detection

**Deliverable**: Modern passwordless developer workflows

### Phase 3: Production Auth (Weeks 4-6)
**Focus**: Production and Azure
- Γ£à ClientCertificate
- Γ£à ManagedIdentity
- Γ£à DefaultAzureCredential
- Γ£à VSIX connection manager

**Deliverable**: Production-ready authentication

### Phase 4: Integration & Polish (Weeks 6-7)
**Focus**: Ecosystem integration
- Γ£à FromPac (PAC CLI)
- Γ£à Documentation
- Γ£à Testing
- Γ£à Migration guides

**Deliverable**: Complete ecosystem integration

---

## Success Metrics by Priority

| Priority | Success Metric | Target |
|----------|---------------|--------|
| 1-2 | Existing users unaffected | 100% backward compat |
| 3 | Developer adoption (Interactive) | 60% within 3 months |
| 4 | CI/CD adoption (DeviceCode) | 30% within 6 months |
| 5 | Production adoption (Certificate) | 20% within 6 months |
| 6-7 | Azure adoption (Managed/Default) | 40% of Azure users |
| 8 | PAC CLI integration | 15% of PAC users |
| 9 | AD users | Maintain existing usage |

---

## Dependencies & Prerequisites

### All Priorities
- Γ£à .NET 4.8+ (existing)
- Γ£à Microsoft.PowerPlatform.Dataverse.Client 1.1.14+

### Priorities 3-8 (New Auth Types)
- Γ₧ò Azure.Identity 1.10.4+
- Γ₧ò System.Security.Cryptography.ProtectedData 8.0.0+

### Priority 5 (ClientCertificate)
- Γ₧ò System.Security.Cryptography.X509Certificates 4.3.2+

### Priority 8 (FromPac)
- ΓÜá∩╕Å PAC CLI installed (user responsibility)
- ΓÜá∩╕Å Availability of `pac` command in PATH

---

## Risk Assessment by Priority

| Priority | Risk Level | Risk Factors | Mitigation |
|----------|-----------|--------------|------------|
| 1-2 | ≡ƒƒó Low | Existing code | Extensive testing |
| 3 | ≡ƒƒí Medium | Browser dependency | Fallback to DeviceCode |
| 4 | ≡ƒƒí Medium | User interaction needed | Clear instructions |
| 5 | ≡ƒƒá Medium-High | Certificate complexity | Detailed documentation |
| 6-7 | ≡ƒƒó Low | Azure SDK mature | Azure.Identity is stable |
| 8 | ≡ƒƒí Medium | External dependency (PAC) | Graceful degradation |
| 9 | ≡ƒƒó Low | No changes | Validation testing only |

---

**Document Version**: 1.0  
**Last Updated**: 2025-12-13  
**Status**: Ready for Review

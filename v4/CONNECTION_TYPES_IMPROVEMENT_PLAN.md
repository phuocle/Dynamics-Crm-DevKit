# Connection Types Improvement Plan for DynamicsCrm.DevKit v4

## Executive Summary

This document outlines a comprehensive plan to enhance connection capabilities in both the CLI and VSIX components of DynamicsCrm.DevKit by introducing modern authentication methods and improving the connection management experience.

## Current State Analysis

### Existing Connection Types
1. **OAuth** (Username/Password)
   - Default authentication method
   - Uses fixed AppId and RedirectUri
   - Supports LoginPrompt configuration
   
2. **ClientSecret** (Application Authentication)
   - Service Principal authentication
   - Requires ClientId and Secret
   
3. **AD** (Active Directory)
   - On-premises authentication
   - Requires Domain\Username format

### Current Architecture

#### Shared Components
- **Models**:
  - `CrmConnection.cs` - Connection data model (Name, Url, UserName, Password, Type)
  - `DevKitConnections.cs` - Connection collection with default selection
  
- **Helper Methods**:
  - `Helper.BuildConnectionString()` - Converts CrmConnection to connection string
  - `Helper.ParseConnectionString()` - Parses connection string to CrmConnection
  - `Helper.EncryptString()/DecryptString()` - Secure credential storage

#### CLI Components
- **Program.cs** - Connection validation and ServiceClient creation
- **Authentication Methods**:
  - Connection string (`/conn:`)
  - SDK Login (`/sdklogin:yes /url:`)
  
#### VSIX Components
- **VsixHelper.cs** - Connection management
- **FormConnection.xaml/cs** - Connection UI
- **UserControlConnection.xaml/cs** - Connection control
- **Storage**: `DynamicsCrm.DevKit.json` in solution root

### Identified Gaps

1. **Limited Authentication Options**
   - No interactive browser flow (modern OAuth)
   - No device code flow (headless environments)
   - No certificate-based authentication
   - No Azure managed identity support
   - No integration with PAC CLI profiles

2. **User Experience Issues**
   - CLI requires manual connection string construction
   - No auto-detection of project URL from solution
   - Limited connection testing feedback
   - No connection profile management in CLI

3. **Security Concerns**
   - Password storage (even encrypted) in JSON files
   - No support for passwordless authentication
   - Limited support for modern authentication patterns

## Proposed Enhancements

### New Connection Types

#### 1. Interactive (Browser-based OAuth)
**Description**: Modern OAuth flow that opens a browser for user authentication.

**Use Cases**:
- Developer workstations
- Visual Studio integration
- Interactive CLI sessions

**Implementation**:
```csharp
// Connection String Format
"AuthType=Interactive;Url={url};ClientId={clientId};"

// Properties
- Url (required)
- ClientId (optional, defaults to Microsoft-provided)
- TenantId (optional)
- RedirectUri (optional)
```

**Benefits**:
- No password storage required
- Modern authentication experience
- Supports MFA
- Token caching for performance

#### 2. DeviceCode (Device Code Flow)
**Description**: OAuth flow for headless/remote environments using device code.

**Use Cases**:
- CI/CD pipelines
- Remote servers
- Containers
- SSH sessions

**Implementation**:
```csharp
// Connection String Format
"AuthType=DeviceCode;Url={url};ClientId={clientId};"

// Properties
- Url (required)
- ClientId (optional)
- TenantId (optional)
```

**Benefits**:
- Works in headless environments
- No browser required on execution machine
- Supports MFA
- Secure for automation scenarios

#### 3. ClientCertificate (Certificate-based)
**Description**: Authentication using X.509 certificates.

**Use Cases**:
- Production environments
- Automated deployments
- High-security scenarios

**Implementation**:
```csharp
// Connection String Format - File
"AuthType=ClientCertificate;Url={url};ClientId={clientId};CertificatePath={path};CertificatePassword={password};"

// Connection String Format - Store
"AuthType=ClientCertificate;Url={url};ClientId={clientId};CertificateThumbprint={thumbprint};CertificateStoreLocation={location};CertificateStoreName={name};"

// Properties
- Url (required)
- ClientId (required)
- CertificatePath OR CertificateThumbprint
- CertificatePassword (if encrypted)
- CertificateStoreLocation (default: CurrentUser)
- CertificateStoreName (default: My)
```

**Benefits**:
- No password/secret storage
- Stronger security
- Suitable for production
- Certificate rotation support

#### 4. DefaultAzureCredential (Azure Credential Chain)
**Description**: Tries multiple Azure authentication methods in sequence.

**Use Cases**:
- Azure environments
- Flexible authentication
- Developer + CI/CD scenarios

**Implementation**:
```csharp
// Connection String Format
"AuthType=DefaultAzureCredential;Url={url};ClientId={clientId};"

// Authentication Chain Order:
1. Environment Variables (AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, AZURE_TENANT_ID)
2. Managed Identity
3. Visual Studio
4. Azure CLI
5. Azure PowerShell
6. Interactive Browser
```

**Benefits**:
- Works across environments
- No code changes needed
- Automatic failover
- Best for Azure-hosted scenarios

#### 5. ManagedIdentity (Azure Managed Identity)
**Description**: Authentication using Azure managed identities.

**Use Cases**:
- Azure VMs
- Azure App Services
- Azure Functions
- Container instances

**Implementation**:
```csharp
// Connection String Format - System Assigned
"AuthType=ManagedIdentity;Url={url};"

// Connection String Format - User Assigned
"AuthType=ManagedIdentity;Url={url};ManagedIdentityClientId={clientId};"

// Properties
- Url (required)
- ManagedIdentityClientId (optional, for user-assigned)
```

**Benefits**:
- No credentials to manage
- Automatic rotation
- Azure-native security
- Zero-trust architecture

#### 6. AccessToken (Custom Token Provider)
**Description**: Direct access token provision for custom scenarios.

**Use Cases**:
- Custom token acquisition
- Integration with corporate identity systems
- Advanced scenarios

**Implementation**:
```csharp
// API-based (not connection string)
// Requires callback/delegate for token refresh

// Properties
- Url (required)
- TokenProvider (delegate/callback)
```

**Benefits**:
- Maximum flexibility
- Custom authentication flows
- Integration with existing systems

#### 7. FromPac (PAC CLI Integration)
**Description**: Load connection from Power Platform CLI authentication profile.

**Use Cases**:
- Developers using PAC CLI
- Shared authentication state
- Simplified workflow

**Implementation**:
```csharp
// Connection String Format
"AuthType=FromPac;Profile={profileName};"

// Properties
- Profile (optional, defaults to current)
```

**Benefits**:
- Reuse existing auth
- Simplified setup
- Consistency across tools

### CLI Enhancements

#### 1. New Command-Line Arguments

```powershell
# Interactive Authentication
DynamicsCrm.DevKit.Cli /auth:Interactive /url:"https://org.crm.dynamics.com" /json:"..." /type:... /profile:...

# Device Code Authentication
DynamicsCrm.DevKit.Cli /auth:DeviceCode /url:"https://org.crm.dynamics.com" /json:"..." /type:... /profile:...

# Certificate Authentication
DynamicsCrm.DevKit.Cli /auth:ClientCertificate /url:"https://org.crm.dynamics.com" /clientid:"..." /cert:"C:\certs\app.pfx" /certpass:"..." /json:"..." /type:... /profile:...

# Managed Identity Authentication
DynamicsCrm.DevKit.Cli /auth:ManagedIdentity /url:"https://org.crm.dynamics.com" /json:"..." /type:... /profile:...

# PAC CLI Integration
DynamicsCrm.DevKit.Cli /auth:FromPac /pacprofile:"MyProfile" /json:"..." /type:... /profile:...

# Named Connection (from DynamicsCrm.DevKit.json)
DynamicsCrm.DevKit.Cli /connection:"MyDevConnection" /json:"..." /type:... /profile:...

# Legacy (still supported)
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"..." /type:... /profile:...
DynamicsCrm.DevKit.Cli /sdklogin:yes /url:"..." /json:"..." /type:... /profile:...
```

#### 2. Connection Management Commands

```powershell
# List saved connections
DynamicsCrm.DevKit.Cli /connections:list

# Test a connection
DynamicsCrm.DevKit.Cli /connections:test /connection:"MyConnection"

# Delete a connection
DynamicsCrm.DevKit.Cli /connections:delete /connection:"MyConnection"

# Clear all cached tokens
DynamicsCrm.DevKit.Cli /connections:clearcache
```

#### 3. Auto-Detection Features

##### Project URL Auto-Parser
Automatically detect Dataverse URL from:

1. **Solution Files** (`.cdsproj`, `PowerApps.*.json`)
2. **Connection References** (`DynamicsCrm.DevKit.json`)
3. **Environment Variables** (`DATAVERSE_URL`, `DYNAMICS_URL`)
4. **PAC CLI Auth Profile** (current profile)
5. **Git Config** (custom solution metadata)

Implementation:
```csharp
public static class ProjectUrlAutoParser
{
    public static async Task<string> DetectProjectUrlAsync(string solutionPath)
    {
        // 1. Check DynamicsCrm.DevKit.json for default connection
        var devKitJson = await LoadDevKitJsonAsync(solutionPath);
        if (devKitJson?.DefaultCrmConnection != null)
        {
            var connection = devKitJson.CrmConnections
                .FirstOrDefault(c => c.Name == devKitJson.DefaultCrmConnection);
            if (connection != null) return connection.Url;
        }
        
        // 2. Check for .cdsproj files
        var cdsprojUrl = await ParseCdsProjFilesAsync(solutionPath);
        if (cdsprojUrl != null) return cdsprojUrl;
        
        // 3. Check PAC CLI auth
        var pacUrl = await GetPacAuthUrlAsync();
        if (pacUrl != null) return pacUrl;
        
        // 4. Check environment variables
        var envUrl = Environment.GetEnvironmentVariable("DATAVERSE_URL") 
                  ?? Environment.GetEnvironmentVariable("DYNAMICS_URL");
        if (envUrl != null) return envUrl;
        
        return null;
    }
}
```

Usage:
```powershell
# Auto-detect URL from project
DynamicsCrm.DevKit.Cli /auth:Interactive /autodetect /json:"..." /type:... /profile:...

# Or explicitly
DynamicsCrm.DevKit.Cli /auth:Interactive /json:"..." /type:... /profile:...
# Will prompt if URL not in config or auto-detected
```

### VSIX Enhancements

#### 1. Enhanced Connection Form UI

**New Layout**:
```
┌─────────────────────────────────────────────────┐
│ Connection Configuration                        │
├─────────────────────────────────────────────────┤
│ Saved Connections: [Dropdown ▼] [Manage...]    │
├─────────────────────────────────────────────────┤
│ ┌─ New/Edit Connection ─────────────────────┐  │
│ │                                            │  │
│ │ Connection Name: [_____________]           │  │
│ │                                            │  │
│ │ Environment URL: [_____________] [Detect] │  │
│ │                                            │  │
│ │ Authentication Type:                       │  │
│ │ ○ Interactive (Browser) [Default]          │  │
│ │ ○ Device Code (Headless)                   │  │
│ │ ○ Client Secret (App)                      │  │
│ │ ○ Client Certificate (Cert)                │  │
│ │ ○ Managed Identity (Azure)                 │  │
│ │ ○ Azure Credential Chain                   │  │
│ │ ○ PAC CLI Profile                          │  │
│ │ ○ Username/Password (Legacy)               │  │
│ │ ○ Active Directory (On-Prem)               │  │
│ │                                            │  │
│ │ [Dynamic fields based on auth type]        │  │
│ │                                            │  │
│ │         [Test Connection] [Save]           │  │
│ └────────────────────────────────────────────┘  │
│                                                 │
│               [Connect]  [Cancel]               │
└─────────────────────────────────────────────────┘
```

**Dynamic Field Sections**:

**Interactive/DeviceCode**:
- Client ID (optional, with default)
- Tenant ID (optional)

**Client Secret**:
- Client ID (required)
- Secret Value (password field)
- Tenant ID (optional)

**Client Certificate**:
- Client ID (required)
- Certificate Source: ○ File  ○ Store
- [If File]: Browse, Password
- [If Store]: Thumbprint, Location, Store Name

**Managed Identity**:
- Identity Type: ○ System  ○ User
- [If User]: Client ID

**Azure Credential Chain**:
- Client ID (optional)
- (Info text about credential chain order)

**PAC CLI Profile**:
- Profile Name dropdown (from `pac auth list`)

**Username/Password** (Legacy):
- Username
- Password
- ☐ Don't save password
- Client ID (optional)

**Active Directory**:
- Domain\Username
- Password

#### 2. Auto-Detection Features

**URL Detection Button**:
- Scans solution for Dataverse URLs
- Checks PAC CLI profiles
- Suggests detected URLs

**Connection Health Indicators**:
```
┌─────────────────────────────────────────┐
│ Saved Connections                       │
├─────────────────────────────────────────┤
│ ● MyDev (https://dev.crm.dynamics.com)  │ ← Green = Last tested OK
│ ● UAT (https://uat.crm.dynamics.com)    │
│ ○ Prod (https://prod.crm.dynamics.com)  │ ← Gray = Never tested
│ ⚠ Old (https://old.crm.dynamics.com)    │ ← Yellow = Test failed
└─────────────────────────────────────────┘
```

#### 3. Connection Manager Window

New menu item: **Tools → DynamicsCrm DevKit → Manage Connections**

Features:
- List all saved connections
- Test connections (single or all)
- Edit connection details
- Delete connections
- Import/Export connections
- View connection usage history
- Clear cached tokens

### Data Model Changes

#### Updated `CrmConnection` Class

```csharp
public class CrmConnection
{
    public string Name { get; set; }
    public string Url { get; set; }
    public string Type { get; set; } = "Interactive";
    
    // Common properties
    public string ClientId { get; set; }
    public string TenantId { get; set; }
    
    // OAuth (legacy)
    public string UserName { get; set; }
    public string Password { get; set; }
    
    // ClientSecret
    public string ClientSecret { get; set; }
    
    // ClientCertificate
    public string CertificatePath { get; set; }
    public string CertificatePassword { get; set; }
    public string CertificateThumbprint { get; set; }
    public string CertificateStoreLocation { get; set; }
    public string CertificateStoreName { get; set; }
    
    // ManagedIdentity
    public string ManagedIdentityClientId { get; set; }
    
    // PAC CLI
    public string PacProfile { get; set; }
    
    // Metadata
    public DateTime? LastTested { get; set; }
    public bool? LastTestSuccess { get; set; }
    public string LastTestError { get; set; }
    public DateTime? CreatedAt { get; set; }
    public DateTime? ModifiedAt { get; set; }
}
```

#### Connection Type Enum

```csharp
public static class ConnectionType
{
    public const string Interactive = "Interactive";
    public const string DeviceCode = "DeviceCode";
    public const string OAuth = "OAuth"; // Legacy
    public const string ClientSecret = "ClientSecret";
    public const string ClientCertificate = "ClientCertificate";
    public const string DefaultAzureCredential = "DefaultAzureCredential";
    public const string ManagedIdentity = "ManagedIdentity";
    public const string AccessToken = "AccessToken";
    public const string FromPac = "FromPac";
    public const string AD = "AD";
}
```

### Implementation Strategy

#### Phase 1: Core Infrastructure (Week 1-2)

**Tasks**:
1. Update `CrmConnection` model with new properties
2. Implement new connection string builders for each type
3. Update encryption/decryption to handle new field types
4. Add connection type validation
5. Implement backward compatibility layer

**Files to Modify**:
- `DynamicsCrm.DevKit.Shared/Models/CrmConnection.cs`
- `DynamicsCrm.DevKit.Shared/Helper.cs` (BuildConnectionString, ParseConnectionString)
- `DynamicsCrm.DevKit.Shared/Const.cs` (Add connection type constants)

**Testing**:
- Unit tests for each connection type
- Connection string parsing tests
- Backward compatibility tests

#### Phase 2: CLI Implementation (Week 2-3)

**Tasks**:
1. Implement new `/auth:` parameter
2. Add connection management commands
3. Implement auto-detection logic
4. Add PAC CLI integration
5. Update help documentation

**Files to Modify**:
- `DynamicsCrm.DevKit.Cli/Program.cs`
- `DynamicsCrm.DevKit.Cli/Models/CommandLineArgs.cs`
- `DynamicsCrm.DevKit.Cli/docs/README.md`

**New Files**:
- `DynamicsCrm.DevKit.Cli/ProjectUrlAutoParser.cs`
- `DynamicsCrm.DevKit.Cli/PacCliIntegration.cs`
- `DynamicsCrm.DevKit.Cli/ConnectionManager.cs`

**Testing**:
- CLI argument parsing tests
- Auto-detection tests
- PAC integration tests
- End-to-end deployment tests

#### Phase 3: VSIX Implementation (Week 3-5)

**Tasks**:
1. Redesign FormConnection UI
2. Implement dynamic field rendering
3. Add auto-detection button
4. Implement connection manager window
5. Add connection health indicators
6. Update VsixHelper methods

**Files to Modify**:
- `DynamicsCrm.DevKit/Lib/Forms/FormConnection.xaml`
- `DynamicsCrm.DevKit/Lib/Forms/FormConnection.xaml.cs`
- `DynamicsCrm.DevKit/Lib/VsixHelper.cs`

**New Files**:
- `DynamicsCrm.DevKit/Lib/Forms/FormConnectionManager.xaml`
- `DynamicsCrm.DevKit/Lib/Forms/FormConnectionManager.xaml.cs`
- `DynamicsCrm.DevKit/Lib/ConnectionHealth.cs`
- `DynamicsCrm.DevKit/Lib/ProjectUrlDetector.cs`

**Testing**:
- UI interaction tests
- Connection form tests
- Auto-detection tests
- Connection persistence tests

#### Phase 4: Documentation & Examples (Week 5-6)

**Tasks**:
1. Update CLI documentation
2. Create connection type guide
3. Add authentication best practices
4. Create migration guide
5. Add troubleshooting guide
6. Record demo videos

**New Documentation**:
- `v4/docs/CONNECTION_TYPES.md`
- `v4/docs/AUTHENTICATION_GUIDE.md`
- `v4/docs/MIGRATION_GUIDE.md`
- `v4/docs/TROUBLESHOOTING.md`
- Update `v4/DynamicsCrm.DevKit.Cli/docs/README.md`

#### Phase 5: Testing & Refinement (Week 6-7)

**Tasks**:
1. Integration testing across all connection types
2. Performance testing (connection pooling, token caching)
3. Security audit
4. User acceptance testing
5. Bug fixes and refinements

### Security Considerations

#### 1. Credential Storage

**Current**:
- Passwords encrypted with RijndaelManaged + PasswordDeriveBytes
- Stored in plaintext JSON (but encrypted values)

**Improvements**:
- Move to modern AES encryption
- Consider using Windows DPAPI for additional security
- Option to use Windows Credential Manager
- Support for external secret stores (Azure Key Vault)

#### 2. Token Management

**New Requirements**:
- Secure token caching
- Token refresh handling
- Token expiration management
- Clear tokens on logout

**Implementation**:
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
    }
    
    public void SaveToken(string connectionName, string token)
    {
        // Encrypt with DPAPI
        var encrypted = ProtectedData.Protect(
            Encoding.UTF8.GetBytes(token),
            null,
            DataProtectionScope.CurrentUser
        );
        
        var tokenFile = Path.Combine(_cacheLocation, $"{connectionName}.token");
        File.WriteAllBytes(tokenFile, encrypted);
    }
    
    public string LoadToken(string connectionName)
    {
        var tokenFile = Path.Combine(_cacheLocation, $"{connectionName}.token");
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
        {
            Directory.Delete(_cacheLocation, true);
        }
    }
}
```

#### 3. Certificate Security

**Best Practices**:
- Support certificate stores (more secure than files)
- Validate certificate chain
- Check certificate expiration
- Warn on weak certificates

#### 4. Audit Logging

**Log Events**:
- Connection attempts (success/failure)
- Authentication method used
- Token refresh events
- Connection deletions

### Backward Compatibility

#### Strategy:
1. **Keep existing types working**: OAuth, ClientSecret, AD
2. **Connection string compatibility**: Old format still works
3. **JSON format migration**: Auto-upgrade on load
4. **Gradual deprecation**: Warnings but no breaking changes

#### Migration Path:

**Automatic**:
```json
// Old format (auto-detected and upgraded)
{
  "DefaultCrmConnection": "Dev",
  "CrmConnections": [
    {
      "Name": "Dev",
      "Url": "https://dev.crm.dynamics.com",
      "UserName": "user@contoso.com",
      "Password": "encrypted...",
      "Type": "OAuth"
    }
  ]
}

// New format (after save)
{
  "DefaultCrmConnection": "Dev",
  "CrmConnections": [
    {
      "Name": "Dev",
      "Url": "https://dev.crm.dynamics.com",
      "Type": "Interactive",
      "ClientId": "51f81489-12ee-4a9e-aaae-a2591f45987d",
      "CreatedAt": "2024-01-15T10:30:00Z",
      "ModifiedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

### Dependencies & NuGet Packages

#### New Dependencies:

```xml
<!-- For Azure authentication -->
<PackageReference Include="Azure.Identity" Version="1.10.4" />

<!-- For certificate handling -->
<PackageReference Include="System.Security.Cryptography.X509Certificates" Version="4.3.2" />

<!-- For enhanced security -->
<PackageReference Include="System.Security.Cryptography.ProtectedData" Version="8.0.0" />
```

### Performance Considerations

#### 1. Token Caching
- Cache tokens to disk (encrypted)
- Reuse tokens across sessions
- Auto-refresh before expiration

#### 2. Connection Pooling
- Reuse ServiceClient instances
- Connection health checks
- Lazy initialization

#### 3. Parallel Operations
- Support concurrent connections
- Thread-safe connection management

### Testing Strategy

#### Unit Tests
```csharp
[TestClass]
public class ConnectionStringBuilderTests
{
    [TestMethod]
    public void BuildConnectionString_Interactive_Success()
    {
        var connection = new CrmConnection
        {
            Type = ConnectionType.Interactive,
            Url = "https://test.crm.dynamics.com",
            ClientId = "test-client-id"
        };
        
        var connStr = Helper.BuildConnectionString(connection);
        
        Assert.IsTrue(connStr.Contains("AuthType=Interactive"));
        Assert.IsTrue(connStr.Contains("Url=https://test.crm.dynamics.com"));
        Assert.IsTrue(connStr.Contains("ClientId=test-client-id"));
    }
    
    [TestMethod]
    public void ParseConnectionString_ManagedIdentity_Success()
    {
        var connStr = "AuthType=ManagedIdentity;Url=https://test.crm.dynamics.com;";
        
        var connection = Helper.ParseConnectionString(connStr);
        
        Assert.AreEqual(ConnectionType.ManagedIdentity, connection.Type);
        Assert.AreEqual("https://test.crm.dynamics.com", connection.Url);
    }
}
```

#### Integration Tests
```csharp
[TestClass]
public class ConnectionIntegrationTests
{
    [TestMethod]
    public async Task Connect_Interactive_Success()
    {
        var connection = new CrmConnection
        {
            Type = ConnectionType.Interactive,
            Url = TestConfig.TestEnvironmentUrl,
            ClientId = TestConfig.TestClientId
        };
        
        var serviceClient = await Helper.CreateServiceClientAsync(connection);
        
        Assert.IsNotNull(serviceClient);
        Assert.IsTrue(serviceClient.IsReady);
    }
}
```

### User Documentation

#### Quick Start Guide

**For Developers (VSIX)**:
1. Open Visual Studio with DynamicsCrm.DevKit solution
2. Tools → DynamicsCrm DevKit → Manage Connections
3. Click "New Connection"
4. Select "Interactive (Browser)" as authentication type
5. Enter your environment URL (or click "Detect")
6. Click "Test Connection" then "Save"

**For CI/CD (CLI)**:
```powershell
# Option 1: Managed Identity (Azure-hosted)
DynamicsCrm.DevKit.Cli `
  /auth:ManagedIdentity `
  /url:"https://org.crm.dynamics.com" `
  /json:"DynamicsCrm.DevKit.Cli.json" `
  /type:servers `
  /profile:production

# Option 2: Service Principal with Certificate
DynamicsCrm.DevKit.Cli `
  /auth:ClientCertificate `
  /url:"https://org.crm.dynamics.com" `
  /clientid:"app-guid" `
  /cert:"C:\certs\app.pfx" `
  /certpass:"$(CertPassword)" `
  /json:"DynamicsCrm.DevKit.Cli.json" `
  /type:servers `
  /profile:production

# Option 3: Azure DevOps with DefaultAzureCredential
DynamicsCrm.DevKit.Cli `
  /auth:DefaultAzureCredential `
  /url:"https://org.crm.dynamics.com" `
  /json:"DynamicsCrm.DevKit.Cli.json" `
  /type:servers `
  /profile:production
```

### Comparison Matrix

| Feature | Current | Proposed |
|---------|---------|----------|
| **Connection Types** | 3 (OAuth, ClientSecret, AD) | 9 (+ Interactive, DeviceCode, Certificate, ManagedIdentity, DefaultAzureCredential, AccessToken, FromPac) |
| **CLI Authentication** | Connection string or SDK login | Multiple auth methods + named connections |
| **VSIX UI** | Basic form | Modern, dynamic form with validation |
| **URL Detection** | Manual entry only | Auto-detection from multiple sources |
| **Token Caching** | None | Secure disk cache |
| **PAC CLI Integration** | None | Full integration |
| **Connection Management** | None in CLI | List, test, delete commands |
| **Security** | Basic encryption | Modern encryption + DPAPI |
| **Backward Compatibility** | N/A | Full compatibility |

### Success Metrics

#### Developer Experience
- Reduce connection setup time by 80%
- Support 5+ new authentication scenarios
- Auto-detection success rate > 90%

#### Security
- Eliminate password storage for modern auth types
- Support passwordless authentication
- Pass security audit

#### Adoption
- 50% of users migrate to new auth types within 6 months
- Positive feedback from 80% of users
- Reduce connection-related support tickets by 60%

### Risks & Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Breaking changes | High | Low | Comprehensive backward compatibility testing |
| Security vulnerabilities | High | Medium | Security audit, code review, penetration testing |
| Complex UI | Medium | Medium | User testing, iterative design |
| PAC CLI changes | Medium | Low | Abstraction layer, version checking |
| Performance regression | Medium | Low | Performance testing, benchmarking |

### Timeline Summary

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Phase 1: Core Infrastructure | 2 weeks | Updated models, connection string builders |
| Phase 2: CLI Implementation | 2 weeks | New CLI commands, auto-detection |
| Phase 3: VSIX Implementation | 3 weeks | New UI, connection manager |
| Phase 4: Documentation | 2 weeks | Guides, examples, videos |
| Phase 5: Testing & Refinement | 2 weeks | Bug fixes, polish |
| **Total** | **11 weeks** | **Complete connection enhancement** |

### Future Enhancements (Post v4)

1. **Connection Profiles**
   - Environment-specific profiles (dev, test, prod)
   - Quick switching between environments
   - Profile templates

2. **Advanced Features**
   - Connection pooling
   - Multi-tenant support
   - Connection monitoring/analytics
   - Health dashboards

3. **Integration**
   - Azure DevOps integration
   - GitHub Actions integration
   - Power Platform Build Tools compatibility

4. **Enterprise Features**
   - Centralized connection management
   - Policy-based authentication
   - Compliance reporting

## Appendix

### A. Reference Materials

1. **Microsoft Documentation**
   - [Connection strings in XRM tooling](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/xrm-tooling/use-connection-strings-xrm-tooling-connect)
   - [Azure Identity](https://learn.microsoft.com/en-us/dotnet/api/overview/azure/identity-readme)
   - [Service Client](https://learn.microsoft.com/en-us/dotnet/api/microsoft.powerplatform.dataverse.client.serviceclient)

2. **Reference Implementation**
   - [Rnwood.Dataverse.Data.PowerShell](https://github.com/rnwood/Rnwood.Dataverse.Data.PowerShell)

3. **Related Tools**
   - [Power Platform CLI](https://learn.microsoft.com/en-us/power-platform/developer/cli/introduction)
   - [XrmToolBox](https://www.xrmtoolbox.com/)

### B. Code Examples

See implementation details in the respective sections above.

### C. Configuration Examples

```json
// DynamicsCrm.DevKit.json - Full Example
{
  "DefaultCrmConnection": "Dev-Interactive",
  "CrmConnections": [
    {
      "Name": "Dev-Interactive",
      "Type": "Interactive",
      "Url": "https://dev.crm.dynamics.com",
      "ClientId": "51f81489-12ee-4a9e-aaae-a2591f45987d",
      "LastTested": "2024-01-15T10:30:00Z",
      "LastTestSuccess": true,
      "CreatedAt": "2024-01-10T09:00:00Z",
      "ModifiedAt": "2024-01-15T10:30:00Z"
    },
    {
      "Name": "UAT-Certificate",
      "Type": "ClientCertificate",
      "Url": "https://uat.crm.dynamics.com",
      "ClientId": "app-guid",
      "CertificateThumbprint": "ABC123...",
      "CertificateStoreLocation": "CurrentUser",
      "CertificateStoreName": "My",
      "LastTested": "2024-01-14T15:20:00Z",
      "LastTestSuccess": true,
      "CreatedAt": "2024-01-12T11:00:00Z",
      "ModifiedAt": "2024-01-14T15:20:00Z"
    },
    {
      "Name": "Prod-ManagedIdentity",
      "Type": "ManagedIdentity",
      "Url": "https://prod.crm.dynamics.com",
      "CreatedAt": "2024-01-13T14:00:00Z",
      "ModifiedAt": "2024-01-13T14:00:00Z"
    }
  ]
}
```

### D. FAQ

**Q: Will my existing connections continue to work?**
A: Yes, all existing connections will continue to work without modification.

**Q: Do I need to update my CI/CD pipelines?**
A: No, existing connection strings will continue to work. New auth types are optional.

**Q: Which authentication type should I use?**
A: 
- Development: Interactive
- CI/CD (Azure): ManagedIdentity or DefaultAzureCredential
- CI/CD (non-Azure): ClientCertificate or DeviceCode
- Legacy/On-Prem: AD or OAuth

**Q: How secure is the token cache?**
A: Tokens are encrypted using Windows DPAPI and stored in the user's local app data folder.

**Q: Can I migrate from PAC CLI?**
A: Yes, use `/auth:FromPac` to load connections from PAC CLI profiles.

**Q: What happens if auto-detection fails?**
A: You'll be prompted to enter the URL manually, just like today.

---

**Document Version**: 1.0
**Last Updated**: 2024-01-15
**Author**: DynamicsCrm.DevKit Team
**Status**: Draft for Review

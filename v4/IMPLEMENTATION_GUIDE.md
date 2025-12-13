# Connection Types Implementation Guide

## Overview

This guide provides a complete roadmap for implementing modern connection types in DynamicsCrm.DevKit v4, based on patterns from [Rnwood.Dataverse.Data.PowerShell](https://github.com/rnwood/Rnwood.Dataverse.Data.PowerShell).

## Documentation Structure

### High-Level Planning
1. **CONNECTION_TYPES_README.md** - Navigation hub and quick start
2. **CONNECTION_TYPES_QUICK_REFERENCE.md** - Executive summary and decision tree
3. **CONNECTION_TYPES_PRIORITY_ORDER.md** - Implementation priority with detailed support matrix
4. **CONNECTION_TYPES_IMPROVEMENT_PLAN.md** - Complete design document (32 KB)
5. **CONNECTION_TYPES_IMPLEMENTATION_ROADMAP.md** - Week-by-week guide (29 KB)

### Implementation Plans
Located in `v4/plans/`:

- **PLAN_01_OAuth_Enhancement.md** - Enhance existing OAuth (Week 1-2)
- **PLAN_02_ClientSecret_Enhancement.md** - Enhance existing ClientSecret (Week 1-2)
- **PLAN_03_Interactive.md** - New browser OAuth (Week 2-3)
- **PLAN_04_DeviceCode.md** - New headless OAuth (Week 3-4)
- **PLAN_05_ClientCertificate.md** - New certificate auth (Week 4-5)
- **PLAN_06_ManagedIdentity.md** - New Azure managed identity (Week 5-6)
- **PLAN_07_DefaultAzureCredential.md** - New Azure credential chain (Week 5-6)
- **PLAN_08_FromPac.md** - New PAC CLI integration (Week 6-7)
- **PLAN_09_AD.md** - Maintain existing AD (Week 1)

## Implementation Order

### Phase 1: Foundation (Weeks 1-2)
**Focus**: Enhance existing + build infrastructure

1. **OAuth Enhancement** (PLAN_01)
   - Add optional ClientId/TenantId
   - Migrate to modern AES encryption
   - Add "Don't save password" option
   - **Output**: Enhanced OAuth with full backward compatibility

2. **ClientSecret Enhancement** (PLAN_02)
   - Add validation (ClientId GUID format)
   - Add secret rotation warnings
   - Add TenantId support
   - **Output**: Production-ready service principal auth

3. **Core Infrastructure**
   - SecureTokenCache with DPAPI
   - Connection builder framework
   - AD validation (no changes)
   - **Output**: Foundation for all modern auth types

### Phase 2: Modern Auth (Weeks 2-4)
**Focus**: Developer experience

4. **Interactive** (PLAN_03)
   - MSAL browser-based OAuth
   - Token caching and silent acquisition
   - MFA/conditional access support
   - **Output**: Best-in-class developer auth

5. **DeviceCode** (PLAN_04)
   - MSAL device code flow
   - Headless environment support
   - Timeout and cancellation handling
   - **Output**: CI/CD and container-friendly auth

6. **CLI Auto-Detection**
   - URL discovery from multiple sources
   - Named connection management
   - **Output**: Streamlined developer workflow

### Phase 3: Production Auth (Weeks 4-6)
**Focus**: Enterprise and Azure

7. **ClientCertificate** (PLAN_05)
   - File-based and store-based certificates
   - Certificate validation and rotation
   - **Output**: Highest security for automation

8. **ManagedIdentity** (PLAN_06)
   - System and user-assigned identities
   - Azure-native zero-credential auth
   - **Output**: Best practice for Azure resources

9. **DefaultAzureCredential** (PLAN_07)
   - Multi-method credential chain
   - Dev-to-prod portability
   - **Output**: Flexible Azure authentication

10. **VSIX Connection Manager**
    - Connection health tracking
    - Bulk operations
    - **Output**: Enterprise connection management

### Phase 4: Integration & Polish (Weeks 6-7)
**Focus**: Ecosystem and quality

11. **FromPac** (PLAN_08)
    - PAC CLI profile parsing
    - Shared authentication state
    - **Output**: Tool consistency

12. **Documentation**
    - User guides
    - Migration docs
    - Troubleshooting
    - **Output**: Complete documentation

13. **Testing**
    - Unit tests (>95% coverage)
    - Integration tests
    - Security audit
    - **Output**: Production-ready quality

## Key Patterns from Reference Implementation

### 1. MSAL Token Management

From Rnwood:
```csharp
var publicClient = PublicClientApplicationBuilder
    .Create(ClientId.ToString())
    .WithRedirectUri("http://localhost")
    .Build();

// Register cache
if (!string.IsNullOrEmpty(Name))
{
    var store = new ConnectionStore();
    store.RegisterCache(publicClient);
}

// Try silent, then interactive
AuthenticationResult authResult = null;
if (!string.IsNullOrEmpty(Username))
{
    try
    {
        authResult = await app.AcquireTokenSilent(scopes, Username)
            .ExecuteAsync(cts.Token);
    }
    catch (MsalUiRequiredException) { }
}

if (authResult == null)
{
    authResult = await app.AcquireTokenInteractive(scopes)
        .ExecuteAsync(cts.Token);
}
```

**Our Implementation**: Reuse this exact pattern in plans 3-4

### 2. Token Provider Pattern

```csharp
result = new ServiceClientWithTokenProvider(
    Url, 
    url => GetTokenAsync(publicClient, url)
);
```

**Our Implementation**: Standard pattern for all modern auth types

### 3. Connection Metadata Storage

```csharp
if (!string.IsNullOrEmpty(Name))
{
    var store = new ConnectionStore();
    store.SaveConnection(Name, new ConnectionMetadata
    {
        Url = Url.ToString(),
        AuthMethod = "Interactive",
        ClientId = ClientId.ToString(),
        Username = Username,
        SavedAt = DateTime.UtcNow
    });
}
```

**Our Implementation**: Extend CrmConnection with metadata properties

### 4. Certificate Loading

```csharp
private X509Certificate2 LoadCertificate()
{
    // From store
    if (!string.IsNullOrEmpty(CertificateThumbprint))
    {
        using (X509Store store = new X509Store(CertificateStoreName, CertificateStoreLocation))
        {
            store.Open(OpenFlags.ReadOnly);
            X509Certificate2Collection certificates = store.Certificates.Find(
                X509FindType.FindByThumbprint,
                CertificateThumbprint,
                validOnly: false);

            if (certificates.Count == 0)
                throw new InvalidOperationException("Certificate not found");

            return certificates[0];
        }
    }
    // From file
    else if (!string.IsNullOrEmpty(CertificatePath))
    {
        return new X509Certificate2(CertificatePath, CertificatePassword);
    }
}
```

**Our Implementation**: Use in PLAN_05 ClientCertificate

## Development Workflow

### For Each Connection Type

1. **Read the Plan**
   - Review `PLAN_XX_[Type].md`
   - Understand reference implementation
   - Check dependencies

2. **Implement Core**
   - Create `ConnectionBuilder/[Type]ConnectionBuilder.cs`
   - Implement `IConnectionBuilder` interface
   - Add token acquisition logic
   - Add validation

3. **Update Data Model**
   - Add type-specific properties to `CrmConnection`
   - Update `BuildConnectionString` and `ParseConnectionString`
   - Add validation logic

4. **CLI Integration**
   - Add command-line arguments
   - Update `Program.cs` with new auth flow
   - Add logging and error handling

5. **VSIX Integration**
   - Add to FormConnection type dropdown
   - Implement dynamic fields
   - Add validation and testing UI

6. **Testing**
   - Write unit tests (connection builder, validation)
   - Write integration tests (real auth)
   - Manual testing checklist
   - Security testing

7. **Documentation**
   - Update CLI README
   - Add examples
   - Add troubleshooting

8. **Review**
   - Code review
   - Security review
   - Performance testing

## Common Components

### SecureTokenCache (Phase 1)

**File**: `v4/DynamicsCrm.DevKit.Shared/SecureTokenCache.cs`

Used by: Interactive, DeviceCode, all MSAL-based auth

```csharp
public class SecureTokenCache
{
    public void RegisterCache(IPublicClientApplication app, string connectionName);
    public void ClearAll();
    private byte[] LoadCacheData(string connectionName);
    private void SaveCacheData(string connectionName, byte[] data);
}
```

### IConnectionBuilder (Phase 1)

**File**: `v4/DynamicsCrm.DevKit.Shared/ConnectionBuilder/IConnectionBuilder.cs`

```csharp
public interface IConnectionBuilder
{
    string Type { get; }
    Task<ServiceClient> CreateServiceClientAsync(CrmConnection connection);
    string BuildConnectionString(CrmConnection connection);
    Task<(bool isValid, string error)> ValidateAsync(CrmConnection connection);
}
```

### ConnectionBuilderFactory (Phase 1)

```csharp
public static class ConnectionBuilderFactory
{
    public static IConnectionBuilder GetBuilder(string type)
    {
        return type.ToUpperInvariant() switch
        {
            "OAUTH" => new OAuthConnectionBuilder(),
            "INTERACTIVE" => new InteractiveConnectionBuilder(),
            "DEVICECODE" => new DeviceCodeConnectionBuilder(),
            "CLIENTSECRET" => new ClientSecretConnectionBuilder(),
            "CLIENTCERTIFICATE" => new ClientCertificateConnectionBuilder(),
            "MANAGEDIDENTITY" => new ManagedIdentityConnectionBuilder(),
            "DEFAULTAZURECREDENTIAL" => new DefaultAzureCredentialConnectionBuilder(),
            "FROMPAC" => new FromPacConnectionBuilder(),
            "AD" => new ADConnectionBuilder(),
            _ => throw new NotSupportedException($"Connection type '{type}' not supported")
        };
    }
}
```

## Testing Strategy

### Unit Tests
- Connection string building
- Connection string parsing
- Validation logic
- Token cache operations

### Integration Tests
- ServiceClient creation
- Token acquisition
- Connection success/failure
- Error handling

### Security Tests
- Token encryption
- Certificate validation
- Secret handling
- Audit logging

### Performance Tests
- Connection time
- Token cache performance
- Silent acquisition speed

## Success Metrics

- [ ] All 9 connection types implemented
- [ ] 100% backward compatibility
- [ ] >95% test coverage
- [ ] <2s connection time (with cache)
- [ ] Zero breaking changes
- [ ] Security audit passed
- [ ] Documentation complete

## Reference Links

- **Reference Implementation**: https://github.com/rnwood/Rnwood.Dataverse.Data.PowerShell
- **MSAL.NET**: https://github.com/AzureAD/microsoft-authentication-library-for-dotnet
- **Azure.Identity**: https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/identity/Azure.Identity
- **ServiceClient**: https://docs.microsoft.com/en-us/dotnet/api/microsoft.powerplatform.dataverse.client.serviceclient

---

**Document Version**: 1.0  
**Last Updated**: 2025-12-13  
**Status**: Ready for Implementation

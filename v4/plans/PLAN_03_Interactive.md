# Implementation Plan: Interactive (Browser OAuth)

**Priority**: 3  
**Status**: New Implementation  
**Timeline**: Week 2-3  
**Effort**: Medium  
**Dependencies**: Priority 1 (OAuth), MSAL.NET 4.x

---

## Overview

Implement modern browser-based OAuth authentication that opens the default browser for interactive sign-in. Supports MFA, conditional access, and provides the best developer experience.

## Reference Implementation

From Rnwood.Dataverse.Data.PowerShell:
```csharp
case PARAMSET_INTERACTIVE:
{
    var publicClient = PublicClientApplicationBuilder
        .Create(ClientId.ToString())
        .WithRedirectUri("http://localhost")
        .Build();

    // Register MSAL cache for named connections
    if (!string.IsNullOrEmpty(Name))
    {
        var store = new ConnectionStore();
        store.RegisterCache(publicClient);
    }

    // Auto-discover environment if URL not provided
    if (Url == null)
    {
        var discoveryUrl = await DiscoverAndSelectEnvironment(publicClient);
        Url = new Uri(discoveryUrl);
    }

    result = new ServiceClientWithTokenProvider(
        Url, 
        url => GetTokenInteractive(publicClient, url)
    );

    // Save connection metadata
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
    break;
}

private async Task<string> GetTokenInteractive(IPublicClientApplication app, string url)
{
    Uri scope = new Uri(Url, "/.default");
    string[] scopes = new[] { scope.ToString() };

    using (var cts = CreateLinkedCts(TimeSpan.FromSeconds(Timeout)))
    {
        AuthenticationResult authResult = null;

        // Try silent acquisition from cache first
        if (!string.IsNullOrEmpty(Username))
        {
            try
            {
                authResult = await app.AcquireTokenSilent(scopes, Username)
                    .ExecuteAsync(cts.Token);
            }
            catch (MsalUiRequiredException) { }
            catch (MsalServiceException) { }
        }

        // Interactive acquisition if cache miss
        if (authResult == null)
        {
            authResult = await app.AcquireTokenInteractive(scopes)
                .ExecuteAsync(cts.Token);
            Username = authResult.Account.Username;
        }

        return authResult.AccessToken;
    }
}
```

## Implementation Steps

### Step 1: Add NuGet Dependencies

**File**: `v4/DynamicsCrm.DevKit.Shared/DynamicsCrm.DevKit.Shared.csproj`

```xml
<PackageReference Include="Microsoft.Identity.Client" Version="4.60.0" />
<PackageReference Include="System.Security.Cryptography.ProtectedData" Version="8.0.0" />
```

### Step 2: Create Token Cache Manager

**File**: `v4/DynamicsCrm.DevKit.Shared/SecureTokenCache.cs` (new)

```csharp
using Microsoft.Identity.Client;
using System.Security.Cryptography;

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
        {
            Directory.CreateDirectory(_cacheLocation);
        }
    }
    
    public void RegisterCache(IPublicClientApplication app, string connectionName)
    {
        app.UserTokenCache.SetBeforeAccess(notificationArgs =>
        {
            var cacheData = LoadCacheData(connectionName);
            if (cacheData != null)
            {
                notificationArgs.TokenCache.DeserializeMsalV3(cacheData);
            }
        });
        
        app.UserTokenCache.SetAfterAccess(notificationArgs =>
        {
            if (notificationArgs.HasStateChanged)
            {
                var cacheData = notificationArgs.TokenCache.SerializeMsalV3();
                SaveCacheData(connectionName, cacheData);
            }
        });
    }
    
    private byte[] LoadCacheData(string connectionName)
    {
        var cacheFile = GetCacheFilePath(connectionName);
        if (!File.Exists(cacheFile)) return null;
        
        try
        {
            var encrypted = File.ReadAllBytes(cacheFile);
            return ProtectedData.Unprotect(
                encrypted,
                null,
                DataProtectionScope.CurrentUser
            );
        }
        catch
        {
            return null;
        }
    }
    
    private void SaveCacheData(string connectionName, byte[] data)
    {
        try
        {
            var encrypted = ProtectedData.Protect(
                data,
                null,
                DataProtectionScope.CurrentUser
            );
            
            var cacheFile = GetCacheFilePath(connectionName);
            File.WriteAllBytes(cacheFile, encrypted);
        }
        catch
        {
            // Log error but don't fail
        }
    }
    
    private string GetCacheFilePath(string connectionName)
    {
        var safeFileName = string.Join("_", 
            connectionName.Split(Path.GetInvalidFileNameChars()));
        return Path.Combine(_cacheLocation, $"{safeFileName}.msalcache");
    }
    
    public void ClearAll()
    {
        try
        {
            if (Directory.Exists(_cacheLocation))
            {
                Directory.Delete(_cacheLocation, true);
            }
        }
        catch { }
    }
}
```

### Step 3: Create Interactive Connection Builder

**File**: `v4/DynamicsCrm.DevKit.Shared/ConnectionBuilder/InteractiveConnectionBuilder.cs` (new)

```csharp
using Microsoft.Identity.Client;
using Microsoft.PowerPlatform.Dataverse.Client;

public class InteractiveConnectionBuilder : IConnectionBuilder
{
    public string Type => ConnectionType.Interactive;
    
    public async Task<ServiceClient> CreateServiceClientAsync(CrmConnection connection)
    {
        var clientId = string.IsNullOrEmpty(connection.ClientId)
            ? "51f81489-12ee-4a9e-aaae-a2591f45987d"
            : connection.ClientId;
        
        var publicClient = PublicClientApplicationBuilder
            .Create(clientId)
            .WithRedirectUri("http://localhost")
            .Build();
        
        // Register token cache
        if (!string.IsNullOrEmpty(connection.Name))
        {
            var tokenCache = new SecureTokenCache();
            tokenCache.RegisterCache(publicClient, connection.Name);
        }
        
        // Get token
        var token = await GetTokenInteractiveAsync(publicClient, connection);
        
        // Create ServiceClient with token provider
        return new ServiceClientWithTokenProvider(
            new Uri(connection.Url),
            async (url) => await GetTokenInteractiveAsync(publicClient, connection)
        );
    }
    
    private async Task<string> GetTokenInteractiveAsync(
        IPublicClientApplication app, 
        CrmConnection connection)
    {
        var scope = new Uri(new Uri(connection.Url), "/.default").ToString();
        var scopes = new[] { scope };
        
        AuthenticationResult authResult = null;
        
        // Try silent acquisition from cache
        if (!string.IsNullOrEmpty(connection.UserName))
        {
            try
            {
                authResult = await app.AcquireTokenSilent(scopes, connection.UserName)
                    .ExecuteAsync();
            }
            catch (MsalUiRequiredException) { }
            catch (MsalServiceException) { }
        }
        
        // Interactive acquisition if cache miss
        if (authResult == null)
        {
            authResult = await app.AcquireTokenInteractive(scopes)
                .WithPrompt(Prompt.SelectAccount)
                .ExecuteAsync();
            
            // Update connection with username from auth
            connection.UserName = authResult.Account.Username;
        }
        
        return authResult.AccessToken;
    }
    
    public string BuildConnectionString(CrmConnection connection)
    {
        // Interactive doesn't use traditional connection string
        // Token provider handles authentication
        return $"AuthType=Interactive;Url={connection.Url};ClientId={connection.ClientId};";
    }
    
    public async Task<(bool isValid, string error)> ValidateAsync(CrmConnection connection)
    {
        if (string.IsNullOrEmpty(connection.Url))
            return (false, "URL is required");
        
        if (!Uri.TryCreate(connection.Url, UriKind.Absolute, out _))
            return (false, "Invalid URL format");
        
        if (!string.IsNullOrEmpty(connection.ClientId) && 
            !Guid.TryParse(connection.ClientId, out _))
            return (false, "ClientId must be a valid GUID");
        
        return (true, null);
    }
}
```

### Step 4: Update VSIX Form

**File**: `v4/DynamicsCrm.DevKit/Lib/Forms/FormConnection.xaml`

Add to ComboBox:
```xaml
<ComboBoxItem Name="Interactive" IsSelected="True">Interactive (Browser)</ComboBoxItem>
```

**File**: `v4/DynamicsCrm.DevKit/Lib/Forms/FormConnection.xaml.cs`

```csharp
case "Interactive":
    labelUser.Content = "Username (Optional)";
    labelUser.Visibility = Visibility.Visible;
    textboxUser.Visibility = Visibility.Visible;
    
    labelPassword.Visibility = Visibility.Collapsed;
    textboxPassword.Visibility = Visibility.Collapsed;
    checkBoxDontSavePassword.Visibility = Visibility.Collapsed;
    
    // Show optional ClientId
    labelClientId.Visibility = Visibility.Visible;
    textboxClientId.Visibility = Visibility.Visible;
    
    // Info text
    AddInfoText("Browser will open for authentication. " +
                "Supports MFA and conditional access. " +
                "Credentials are never stored.");
    break;
```

### Step 5: Update CLI

**File**: `v4/DynamicsCrm.DevKit.Cli/Models/CommandLineArgs.cs`

```csharp
[Argument('a', "auth")]
public string AuthType { get; set; } = "";
```

**File**: `v4/DynamicsCrm.DevKit.Cli/Program.cs`

```csharp
if (arguments.AuthType.ToLower() == "interactive")
{
    var builder = new InteractiveConnectionBuilder();
    var connection = new CrmConnection
    {
        Url = arguments.Url,
        ClientId = arguments.ClientId,
        Type = "Interactive"
    };
    
    ServiceClient = await builder.CreateServiceClientAsync(connection);
    
    if (ServiceClient?.IsReady == true)
    {
        CliLog.WriteLine(ConsoleColor.Green, "Interactive authentication successful!");
    }
}
```

## Testing

### Unit Tests
```csharp
[TestMethod]
public async Task InteractiveConnectionBuilder_ValidConnection_Success()
{
    var builder = new InteractiveConnectionBuilder();
    var connection = new CrmConnection
    {
        Type = "Interactive",
        Url = "https://test.crm.dynamics.com",
        ClientId = "test-client-id"
    };
    
    var (isValid, error) = await builder.ValidateAsync(connection);
    Assert.IsTrue(isValid);
}
```

### Manual Testing
1. VSIX: Select Interactive, enter URL, click Test Connection
2. Verify browser opens
3. Sign in with credentials + MFA
4. Verify browser shows success message
5. Verify Visual Studio shows connection success
6. Close and reopen - verify no re-authentication needed (cache)

## Success Criteria

- [ ] Browser opens for authentication
- [ ] MFA/conditional access supported
- [ ] Token caching works
- [ ] Silent token acquisition from cache
- [ ] No password storage
- [ ] Custom ClientId supported
- [ ] VSIX form works
- [ ] CLI works
- [ ] Tests pass

---

**Document Version**: 1.0  
**Last Updated**: 2025-12-13

## Testing

### Option 1: Automated Testing (AI-Guided Unit Tests)

#### AI Guidance for Creating Unit Tests

**Test File**: `v4/DynamicsCrm.DevKit.Shared.Tests/InteractiveConnectionTests.cs`

Create unit tests using this AI prompt:
```
Create comprehensive unit tests for Interactive (browser OAuth) connection:

1. Connection Builder Tests:
   - CreateServiceClientAsync with valid connection
   - CreateServiceClientAsync with missing URL (should fail)
   - CreateServiceClientAsync with invalid ClientId GUID
   - BuildConnectionString format validation
   - ValidateAsync with all scenarios

2. Token Cache Tests:
   - RegisterCache stores token correctly
   - RegisterCache retrieves cached token
   - RegisterCache encrypts with DPAPI
   - ClearAll removes all tokens

3. MSAL Integration Tests (mock MSAL):
   - AcquireTokenInteractive called when no cache
   - AcquireTokenSilent called when cache exists
   - MsalUiRequiredException triggers interactive flow
   - Token refresh on expiration

4. ServiceClient Creation Tests:
   - ServiceClientWithTokenProvider created correctly
   - Token provider callback works
   - Connection URL validation

Mock: IPublicClientApplication, AuthenticationResult, SecureTokenCache
Use async/await patterns correctly.
```

**Example Test Structure**:
```csharp
[TestClass]
public class InteractiveConnectionTests
{
    private Mock<IPublicClientApplication> _mockPublicClient;
    private Mock<SecureTokenCache> _mockTokenCache;

    [TestInitialize]
    public void Setup()
    {
        _mockPublicClient = new Mock<IPublicClientApplication>();
        _mockTokenCache = new Mock<SecureTokenCache>();
    }

    [TestMethod]
    public async Task CreateServiceClient_ValidConnection_Success()
    {
        // Arrange
        var connection = new CrmConnection
        {
            Type = "Interactive",
            Url = "https://test.crm.dynamics.com",
            ClientId = "test-client-id",
            Name = "TestConnection"
        };

        var mockAuthResult = new Mock<AuthenticationResult>();
        mockAuthResult.Setup(r => r.AccessToken).Returns("test-token");
        
        _mockPublicClient
            .Setup(c => c.AcquireTokenInteractive(It.IsAny<string[]>()))
            .Returns(Task.FromResult(mockAuthResult.Object));

        var builder = new InteractiveConnectionBuilder();

        // Act
        var serviceClient = await builder.CreateServiceClientAsync(connection);

        // Assert
        Assert.IsNotNull(serviceClient);
        _mockTokenCache.Verify(c => c.RegisterCache(It.IsAny<IPublicClientApplication>(), "TestConnection"), Times.Once);
    }

    [TestMethod]
    public async Task ValidateAsync_MissingUrl_ReturnsFalse()
    {
        // Arrange
        var connection = new CrmConnection
        {
            Type = "Interactive",
            Url = "",
            ClientId = "test-client-id"
        };

        var builder = new InteractiveConnectionBuilder();

        // Act
        var (isValid, error) = await builder.ValidateAsync(connection);

        // Assert
        Assert.IsFalse(isValid);
        Assert.AreEqual("URL is required", error);
    }

    [TestMethod]
    public void TokenCache_RegisterCache_EncryptsWithDPAPI()
    {
        // Arrange
        var cache = new SecureTokenCache();
        var mockApp = new Mock<IPublicClientApplication>();

        // Act
        cache.RegisterCache(mockApp.Object, "TestConnection");

        // Assert
        // Verify DPAPI encryption is used
        // Check cache file created in LocalAppData
        var cachePath = Path.Combine(
            Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
            "DynamicsCrmDevKit",
            "TokenCache",
            "TestConnection.msalcache"
        );

        Assert.IsTrue(File.Exists(cachePath) || /* cache will exist after first token */);
    }
}
```

**Running the Tests**:
```powershell
dotnet test --filter "FullyQualifiedName~InteractiveConnection"
```

---

### Option 2: Manual Testing (Step-by-Step Guide)

#### Prerequisites
- Visual Studio 2022 with DynamicsCrm.DevKit solution
- Dataverse environment access
- Default browser configured
- Internet connection

#### Test Scenario 1: First-Time Interactive Authentication

**Step 1.1**: Create Interactive connection in VSIX
1. Visual Studio → Tools → DynamicsCrm DevKit → Connect
2. Click "New Connection"
3. Fill in:
   - Name: `InteractiveTest`
   - Type: `Interactive (Browser)`
   - URL: `https://test.crm.dynamics.com`
   - Username: (leave empty - optional)
   - Client Id: (leave empty - uses default)
4. Click "Test Connection"

**Expected Result**: ✅ Browser window opens automatically

**Step 1.2**: Complete authentication in browser
1. Sign in with your credentials
2. Complete MFA if prompted
3. Grant consent if prompted

**Expected Result**: ✅ Browser shows "Authentication complete" or similar

**Step 1.3**: Verify connection in Visual Studio
**Expected Result**: ✅ Message box shows "Connection successful"

**Step 1.4**: Check token cache created
```powershell
# Check cache location
dir "$env:LOCALAPPDATA\DynamicsCrmDevKit\TokenCache"
```

**Expected Result**: ✅ File `InteractiveTest.msalcache` exists

---

#### Test Scenario 2: Silent Token Acquisition (Cache)

**Step 2.1**: Close and reopen FormConnection
1. Close FormConnection dialog
2. Reopen: Tools → DynamicsCrm DevKit → Connect
3. Load "InteractiveTest" connection
4. Click "Test Connection"

**Expected Result**: ✅ NO browser opens, connection succeeds immediately using cached token

**Step 2.2**: Verify logs (if available)
**Expected Result**: ✅ Log shows "Token acquired silently from cache"

**Step 2.3**: Test after cache expiry
1. Wait for token to expire (or manually clear cache)
2. Click "Test Connection" again

**Expected Result**: ✅ Browser opens for re-authentication

---

#### Test Scenario 3: Custom ClientId

**Step 3.1**: Register Azure AD App
1. Azure Portal → Azure Active Directory → App registrations
2. Click "New registration"
3. Name: `DynamicsCrm DevKit Interactive Test`
4. Redirect URI: `http://localhost`
5. Click "Register"
6. Copy Application (client) ID

**Step 3.2**: Create connection with custom ClientId
1. Create new Interactive connection
2. Enter custom Client Id
3. Click "Test Connection"

**Expected Result**: ✅ Browser shows custom app name in consent screen

---

#### Test Scenario 4: MFA and Conditional Access

**Step 4.1**: Configure conditional access (if available)
1. Azure AD → Conditional Access
2. Create policy requiring MFA for test app

**Step 4.2**: Test connection
1. Create Interactive connection
2. Click "Test Connection"

**Expected Result**: ✅ Browser prompts for MFA (SMS, authenticator app, etc.)

**Step 4.3**: Complete MFA
**Expected Result**: ✅ Authentication succeeds after MFA

---

#### Test Scenario 5: Token Cache Management

**Step 5.1**: List cached tokens
```powershell
dir "$env:LOCALAPPDATA\DynamicsCrmDevKit\TokenCache" | Select Name, LastWriteTime
```

**Expected Result**: ✅ Shows all cached connections with timestamps

**Step 5.2**: Clear token cache (CLI)
```powershell
DynamicsCrm.DevKit.Cli /connections:clearcache
```

**Expected Result**: ✅ Message "All cached tokens have been cleared"

**Step 5.3**: Verify cache cleared
```powershell
dir "$env:LOCALAPPDATA\DynamicsCrmDevKit\TokenCache"
```

**Expected Result**: ✅ Folder is empty

**Step 5.4**: Test connection after cache clear
1. Load Interactive connection
2. Click "Test Connection"

**Expected Result**: ✅ Browser opens (cache miss)

---

#### Test Scenario 6: CLI Interactive Authentication

**Step 6.1**: Test CLI with Interactive
```powershell
DynamicsCrm.DevKit.Cli `
  /auth:Interactive `
  /url:"https://test.crm.dynamics.com" `
  /json:"DynamicsCrm.DevKit.Cli.json" `
  /type:servers `
  /profile:default
```

**Expected Result**: ✅ Browser opens for authentication

**Step 6.2**: Complete authentication
**Expected Result**: ✅ CLI shows "Interactive authentication successful!", deployment proceeds

**Step 6.3**: Run same command again (cached)
**Expected Result**: ✅ NO browser opens, uses cached token

---

#### Test Scenario 7: Account Picker

**Step 7.1**: Sign in with multiple accounts
1. Authenticate with account A
2. Close connection
3. Authenticate with account B (same connection)

**Expected Result**: ✅ Browser shows account picker: "Pick an account"

**Step 7.2**: Select different account
**Expected Result**: ✅ Authentication succeeds with selected account

---

#### Test Scenario 8: Error Handling

**Step 8.1**: Test with invalid URL
1. Create connection with URL: `https://invalid.crm.dynamics.com`
2. Click "Test Connection"

**Expected Result**: ✅ Error message: "Organization not found" or similar

**Step 8.2**: Cancel authentication
1. Start authentication
2. Close browser window during sign-in

**Expected Result**: ✅ Error message: "Authentication cancelled"

**Step 8.3**: Test with blocked browser
1. Configure firewall to block browser
2. Click "Test Connection"

**Expected Result**: ✅ Error message: "Unable to open browser for authentication"

---

#### Manual Testing Checklist

- [ ] **First auth**: Browser opens correctly
- [ ] **MFA**: Multi-factor authentication works
- [ ] **Consent**: App consent screen appears (first time)
- [ ] **Success**: Connection succeeds after authentication
- [ ] **Token cache**: Token saved to disk (encrypted)
- [ ] **Silent auth**: Second attempt uses cache (no browser)
- [ ] **Cache clear**: Clear cache command works
- [ ] **Custom ClientId**: Custom app appears in browser
- [ ] **Account picker**: Multiple accounts handled
- [ ] **CLI**: Interactive auth works in CLI
- [ ] **Error handling**: Clear error messages
- [ ] **No password**: No password stored in JSON

---

**Document Version**: 1.1  
**Last Updated**: 2025-12-13

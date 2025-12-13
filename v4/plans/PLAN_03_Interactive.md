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

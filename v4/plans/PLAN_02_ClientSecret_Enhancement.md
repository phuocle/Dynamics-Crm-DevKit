# Implementation Plan: ClientSecret Enhancement

**Priority**: 2  
**Status**: Enhance Existing  
**Timeline**: Week 1-2  
**Effort**: Low  
**Dependencies**: Priority 1 (OAuth enhancement)

---

## Overview

Enhance the existing ClientSecret (Service Principal) connection type with validation, secret rotation warnings, and improved error messages.

## Current Implementation

### Existing Code
- **Model**: `CrmConnection` with ClientId and ClientSecret properties (password field)
- **Helper**: `BuildConnectionString` handles ClientSecret type
- **Connection String**: `AuthType=ClientSecret;Url={url};ClientId={clientId};ClientSecret={secret};`

## Enhancement Goals

1. **Add Validation**: Validate ClientId is valid GUID format
2. **Add TenantId Support**: Optional tenant specification
3. **Secret Rotation**: Warn when secret might be expiring
4. **Better Errors**: Improved error messages for auth failures
5. **Documentation**: Examples for Azure AD app registration

## Detailed Implementation

### Step 1: Add Validation

**File**: `v4/DynamicsCrm.DevKit.Shared/Helper.cs`

Add validation method:
```csharp
public static (bool isValid, string error) ValidateClientSecret(CrmConnection connection)
{
    // Validate ClientId is GUID
    if (!Guid.TryParse(connection.UserName, out _))
    {
        return (false, "ClientId must be a valid GUID");
    }
    
    // Validate ClientSecret is not empty
    if (string.IsNullOrWhiteSpace(connection.Password))
    {
        return (false, "ClientSecret cannot be empty");
    }
    
    // Validate URL
    if (!Uri.TryCreate(connection.Url, UriKind.Absolute, out var uri))
    {
        return (false, "URL must be a valid HTTPS URL");
    }
    
    if (uri.Scheme != "https")
    {
        return (false, "URL must use HTTPS protocol");
    }
    
    return (true, null);
}
```

### Step 2: Update Connection String Builder

**File**: `v4/DynamicsCrm.DevKit.Shared/Helper.cs`

```csharp
case "CLIENTSECRET":
    // Validate before building
    var (isValid, error) = ValidateClientSecret(crmConnection);
    if (!isValid)
    {
        throw new ArgumentException($"ClientSecret validation failed: {error}");
    }
    
    var connStr = $"AuthType=ClientSecret;Url={url};ClientId={userName};ClientSecret={password};";
    
    // Add optional TenantId
    if (!string.IsNullOrEmpty(crmConnection.TenantId))
    {
        connStr += $"TenantId={crmConnection.TenantId};";
    }
    
    return connStr;
```

### Step 3: Add Secret Metadata Tracking

**File**: `v4/DynamicsCrm.DevKit.Shared/Models/CrmConnection.cs`

Add properties:
```csharp
public DateTime? ClientSecretCreatedAt { get; set; }
public DateTime? ClientSecretExpiresAt { get; set; }
public bool? ClientSecretNearExpiry { get; set; }
```

Check expiry logic:
```csharp
public bool IsClientSecretNearExpiry()
{
    if (!ClientSecretExpiresAt.HasValue)
        return false;
    
    var daysUntilExpiry = (ClientSecretExpiresAt.Value - DateTime.UtcNow).TotalDays;
    return daysUntilExpiry <= 30; // Warn 30 days before expiry
}
```

### Step 4: Update VSIX Form

**File**: `v4/DynamicsCrm.DevKit/Lib/Forms/FormConnection.xaml.cs`

Add warning display:
```csharp
private void LoadClientSecretConnection(CrmConnection connection)
{
    // Load fields
    textboxName.Text = connection.Name;
    textboxUrl.Text = connection.Url;
    textboxUser.Text = connection.UserName; // ClientId
    textboxPassword.Password = Helper.DecryptString(connection.Password);
    
    // Check expiry
    if (connection.IsClientSecretNearExpiry())
    {
        var daysRemaining = (connection.ClientSecretExpiresAt.Value - DateTime.UtcNow).TotalDays;
        await VS.MessageBox.ShowWarningAsync(
            $"Client Secret expires in {daysRemaining:F0} days. " +
            "Please rotate the secret in Azure Portal.");
    }
}
```

### Step 5: Add CLI Parameter Validation

**File**: `v4/DynamicsCrm.DevKit.Cli/Program.cs`

```csharp
private static async Task<bool> ValidateClientSecretConnectionAsync(string connectionString)
{
    var connection = Helper.ParseConnectionString(connectionString);
    
    if (connection.Type != "ClientSecret")
        return true;
    
    var (isValid, error) = Helper.ValidateClientSecret(connection);
    
    if (!isValid)
    {
        CliLog.WriteLineError(ConsoleColor.Red, $"ClientSecret validation failed: {error}");
        CliLog.WriteLine(ConsoleColor.Yellow, "Tip: Ensure ClientId is a valid GUID from your Azure AD app registration");
        return false;
    }
    
    return true;
}
```

## Reference Implementation from Rnwood

```csharp
case PARAMSET_CLIENTSECRET:
{
    var confidentialClient = ConfidentialClientApplicationBuilder
        .Create(ClientId.ToString())
        .WithClientSecret(ClientSecret)
        .WithAuthority(AadAuthorityAudience.AzureAdMultipleOrgs)
        .Build();

    // Register MSAL cache
    if (!string.IsNullOrEmpty(Name))
    {
        var store = new ConnectionStore();
        store.RegisterCache(confidentialClient);
    }

    result = new ServiceClientWithTokenProvider(
        Url, 
        url => GetTokenWithClientSecret(confidentialClient, url)
    );

    // Save connection metadata
    if (!string.IsNullOrEmpty(Name))
    {
        var store = new ConnectionStore();
        var metadata = new ConnectionMetadata
        {
            Url = Url.ToString(),
            AuthMethod = "ClientSecret",
            ClientId = ClientId.ToString(),
            SavedAt = DateTime.UtcNow
        };

        if (SaveCredentials)
        {
            metadata.ClientSecret = ClientSecret;
            WriteWarning("SECURITY WARNING: Client secret saved (encrypted).");
        }

        store.SaveConnection(Name, metadata);
    }
    break;
}
```

## Testing

### Unit Tests
```csharp
[TestMethod]
public void ValidateClientSecret_ValidGuid_Success()
{
    var conn = new CrmConnection
    {
        Type = "ClientSecret",
        Url = "https://test.crm.dynamics.com",
        UserName = "12345678-1234-1234-1234-123456789012",
        Password = EncryptString("secret-value")
    };
    
    var (isValid, error) = Helper.ValidateClientSecret(conn);
    Assert.IsTrue(isValid);
    Assert.IsNull(error);
}

[TestMethod]
public void ValidateClientSecret_InvalidGuid_Fails()
{
    var conn = new CrmConnection
    {
        Type = "ClientSecret",
        UserName = "not-a-guid",
        Password = EncryptString("secret")
    };
    
    var (isValid, error) = Helper.ValidateClientSecret(conn);
    Assert.IsFalse(isValid);
    Assert.IsNotNull(error);
}
```

### Integration Tests
```csharp
[TestMethod]
public async Task Connect_ClientSecret_ValidCredentials_Success()
{
    var connStr = "AuthType=ClientSecret;" +
                  "Url=https://test.crm.dynamics.com;" +
                  "ClientId=valid-guid;" +
                  "ClientSecret=valid-secret;";
    
    var result = await Helper.IsConnectedAsync(connStr);
    Assert.IsTrue(result.serviceClient?.IsReady);
}
```

## Documentation Updates

### Azure AD App Registration Guide

Add to documentation:
```markdown
## Setting Up Azure AD App for ClientSecret

1. Go to Azure Portal → Azure Active Directory → App registrations
2. Click "New registration"
3. Name: "DynamicsCrm DevKit"
4. Supported account types: Choose based on needs
5. Redirect URI: Leave empty for service principal
6. Click "Register"

7. Note the "Application (client) ID" - this is your ClientId

8. Go to "Certificates & secrets"
9. Click "New client secret"
10. Description: "DevKit Production"
11. Expires: Choose appropriate duration
12. Click "Add"
13. **IMPORTANT**: Copy the secret VALUE immediately (shown once!)

14. Go to "API permissions"
15. Click "Add a permission"
16. Choose "Dynamics CRM" or "Common Data Service"
17. Select "user_impersonation"
18. Click "Add permissions"
19. Click "Grant admin consent"

### Grant Access in Dataverse

1. Go to Power Platform Admin Center
2. Select your environment
3. Go to Settings → Users + permissions → Application users
4. Click "New app user"
5. Select the app registration
6. Select Business Unit
7. Assign security role(s)
8. Save

### Use in DevKit

CLI:
```powershell
DynamicsCrm.DevKit.Cli `
  /auth:ClientSecret `
  /url:"https://org.crm.dynamics.com" `
  /clientid:"your-application-id" `
  /clientsecret:"your-secret-value" `
  /json:"..." /type:servers /profile:prod
```

VSIX:
1. Select "ClientSecret" from Type dropdown
2. Enter Client Id (Application ID from Azure)
3. Enter Secret Value
4. Test Connection
5. Save
```

## Success Criteria

- [ ] ClientId validation (GUID format)
- [ ] ClientSecret validation (not empty)
- [ ] TenantId support added
- [ ] Secret expiry tracking
- [ ] Warning shown 30 days before expiry
- [ ] Better error messages
- [ ] Azure AD setup documentation
- [ ] All tests pass

---

**Document Version**: 1.0  
**Last Updated**: 2025-12-13

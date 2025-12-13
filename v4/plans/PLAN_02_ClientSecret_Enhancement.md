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

## Testing

### Option 1: Automated Testing (AI-Guided Unit Tests)

#### AI Guidance for Creating Unit Tests

**Test File**: `v4/DynamicsCrm.DevKit.Shared.Tests/ClientSecretConnectionTests.cs`

Create unit tests using this AI prompt:
```
Create comprehensive unit tests for ClientSecret connection enhancement:

1. Validation Tests:
   - ValidateClientSecret with valid GUID ClientId
   - ValidateClientSecret with invalid GUID ClientId
   - ValidateClientSecret with empty ClientSecret
   - ValidateClientSecret with valid HTTPS URL
   - ValidateClientSecret with HTTP URL (should fail)
   - ValidateClientSecret with invalid URL format

2. Connection String Building Tests:
   - BuildConnectionString with ClientId and ClientSecret
   - BuildConnectionString with TenantId
   - BuildConnectionString with invalid ClientId (should throw)
   - BuildConnectionString with empty secret (should throw)

3. Expiry Tracking Tests:
   - IsClientSecretNearExpiry when expiry is >30 days (returns false)
   - IsClientSecretNearExpiry when expiry is <30 days (returns true)
   - IsClientSecretNearExpiry when no expiry date (returns false)
   - IsClientSecretNearExpiry when already expired (returns true)

4. Metadata Tests:
   - ClientSecretCreatedAt is set correctly
   - ClientSecretExpiresAt is calculated correctly
   - ClientSecretNearExpiry flag updates correctly

Use MSTest framework. Mock external dependencies.
```

**Example Test Structure**:
```csharp
[TestClass]
public class ClientSecretConnectionTests
{
    [TestMethod]
    public void ValidateClientSecret_ValidGuid_ReturnsTrue()
    {
        // Arrange
        var connection = new CrmConnection
        {
            Type = "ClientSecret",
            Url = "https://test.crm.dynamics.com",
            UserName = "12345678-1234-1234-1234-123456789012", // ClientId
            Password = Helper.EncryptString("test-secret")
        };

        // Act
        var (isValid, error) = Helper.ValidateClientSecret(connection);

        // Assert
        Assert.IsTrue(isValid);
        Assert.IsNull(error);
    }

    [TestMethod]
    public void ValidateClientSecret_InvalidGuid_ReturnsFalse()
    {
        // Arrange
        var connection = new CrmConnection
        {
            Type = "ClientSecret",
            Url = "https://test.crm.dynamics.com",
            UserName = "not-a-guid",
            Password = Helper.EncryptString("test-secret")
        };

        // Act
        var (isValid, error) = Helper.ValidateClientSecret(connection);

        // Assert
        Assert.IsFalse(isValid);
        Assert.IsNotNull(error);
        Assert.IsTrue(error.Contains("GUID"));
    }

    [TestMethod]
    public void IsClientSecretNearExpiry_30DaysOrLess_ReturnsTrue()
    {
        // Arrange
        var connection = new CrmConnection
        {
            ClientSecretExpiresAt = DateTime.UtcNow.AddDays(25)
        };

        // Act
        var result = connection.IsClientSecretNearExpiry();

        // Assert
        Assert.IsTrue(result);
    }

    [TestMethod]
    public void BuildConnectionString_WithTenantId_IncludesTenantId()
    {
        // Arrange
        var connection = new CrmConnection
        {
            Type = "ClientSecret",
            Url = "https://test.crm.dynamics.com",
            UserName = "12345678-1234-1234-1234-123456789012",
            Password = Helper.EncryptString("secret"),
            TenantId = "tenant-guid"
        };

        // Act
        var connStr = Helper.BuildConnectionString(connection);

        // Assert
        Assert.IsTrue(connStr.Contains("TenantId=tenant-guid"));
    }
}
```

**Running the Tests**:
```powershell
dotnet test --filter "FullyQualifiedName~ClientSecretConnection"
```

---

### Option 2: Manual Testing (Step-by-Step Guide)

#### Prerequisites
- Azure AD application with client secret created
- Dataverse environment with app user configured
- ClientId and Secret values ready

#### Test Scenario 1: Azure AD App Registration

**Step 1.1**: Create Azure AD App
1. Azure Portal → Azure Active Directory → App registrations
2. Click "New registration"
3. Name: `DynamicsCrm DevKit ClientSecret Test`
4. Supported account types: Choose based on needs
5. Click "Register"
6. **Copy Application (client) ID**: `12345678-1234-1234-1234-123456789012`

**Step 1.2**: Create Client Secret
1. Go to "Certificates & secrets"
2. Click "New client secret"
3. Description: `DevKit Test Secret`
4. Expires: 6 months (for testing)
5. Click "Add"
6. **IMMEDIATELY COPY the secret value** (shown only once!)
7. **Note expiration date**

**Expected Result**: ✅ ClientId and Secret ready for use

---

#### Test Scenario 2: Dataverse App User Setup

**Step 2.1**: Create Application User
1. Power Platform Admin Center → Select environment
2. Settings → Users + permissions → Application users
3. Click "New app user"
4. Select your app registration
5. Select Business Unit
6. Assign security roles (e.g., System Administrator for testing)
7. Click "Create"

**Expected Result**: ✅ App user created and has permissions

---

#### Test Scenario 3: Connection with ClientSecret (VSIX)

**Step 3.1**: Create new connection
1. Visual Studio → Tools → DynamicsCrm DevKit → Connect
2. Click "New Connection"
3. Fill in:
   - Name: `ClientSecretTest`
   - Type: `ClientSecret`
   - URL: `https://test.crm.dynamics.com`
   - Username: `12345678-1234-1234-1234-123456789012` (ClientId)
   - Password: `your-secret-value`
4. Click "Test Connection"

**Expected Result**: ✅ Connection succeeds (no browser prompt, direct auth)

**Step 3.2**: Verify connection string
```powershell
notepad DynamicsCrm.DevKit.json
```

**Expected Result**: ✅ Connection includes ClientSecret type:
```json
{
  "Name": "ClientSecretTest",
  "Type": "ClientSecret",
  "Url": "https://test.crm.dynamics.com",
  "UserName": "12345678-1234-1234-1234-123456789012",
  "Password": "encrypted-secret"
}
```

---

#### Test Scenario 4: Validation Testing

**Step 4.1**: Test with invalid ClientId
1. Create new connection
2. Enter invalid GUID in Username field: `not-a-valid-guid`
3. Enter valid secret
4. Click "Test Connection"

**Expected Result**: ✅ Error message: "ClientId must be a valid GUID"

**Step 4.2**: Test with empty secret
1. Create new connection
2. Enter valid ClientId
3. Leave password empty
4. Click "Test Connection"

**Expected Result**: ✅ Error message: "ClientSecret cannot be empty"

**Step 4.3**: Test with HTTP URL (not HTTPS)
1. Create new connection
2. Enter URL: `http://test.crm.dynamics.com` (HTTP not HTTPS)
3. Click "Test Connection"

**Expected Result**: ✅ Error message: "URL must use HTTPS protocol"

---

#### Test Scenario 5: Secret Expiration Warning

**Step 5.1**: Set expiration date (simulate near expiry)
1. Manually edit DynamicsCrm.DevKit.json
2. Add `ClientSecretExpiresAt` with date 25 days from now:
```json
{
  "Name": "ClientSecretTest",
  "ClientSecretExpiresAt": "2025-01-07T00:00:00Z"
}
```
3. Save file

**Step 5.2**: Load connection in VSIX
1. Open FormConnection
2. Load "ClientSecretTest" connection

**Expected Result**: ✅ Warning dialog appears:
```
"Client Secret expires in 25 days. Please rotate the secret in Azure Portal."
```

**Step 5.3**: Test with expired secret
1. Set `ClientSecretExpiresAt` to past date
2. Load connection

**Expected Result**: ✅ Warning shows "Client Secret has expired"

---

#### Test Scenario 6: CLI with ClientSecret

**Step 6.1**: Test basic ClientSecret auth
```powershell
DynamicsCrm.DevKit.Cli `
  /auth:ClientSecret `
  /url:"https://test.crm.dynamics.com" `
  /clientid:"12345678-1234-1234-1234-123456789012" `
  /clientsecret:"your-secret-value" `
  /json:"DynamicsCrm.DevKit.Cli.json" `
  /type:servers `
  /profile:default
```

**Expected Result**: ✅ Authentication succeeds, deployment proceeds

**Step 6.2**: Test with TenantId
```powershell
DynamicsCrm.DevKit.Cli `
  /auth:ClientSecret `
  /url:"https://test.crm.dynamics.com" `
  /clientid:"12345678-1234-1234-1234-123456789012" `
  /clientsecret:"your-secret-value" `
  /tenantid:"tenant-guid" `
  /json:"..." /type:servers /profile:default
```

**Expected Result**: ✅ Auth restricted to specified tenant

**Step 6.3**: Test with invalid ClientId
```powershell
DynamicsCrm.DevKit.Cli `
  /auth:ClientSecret `
  /url:"https://test.crm.dynamics.com" `
  /clientid:"invalid-guid" `
  /clientsecret:"secret" `
  /json:"..." /type:servers /profile:default
```

**Expected Result**: ✅ Error message displayed before attempting connection

---

#### Test Scenario 7: CI/CD Pipeline Integration

**Step 7.1**: Azure DevOps Pipeline
```yaml
steps:
- task: PowerShell@2
  env:
    CLIENT_SECRET: $(ClientSecretVariable)  # Stored in pipeline variables
  inputs:
    targetType: 'inline'
    script: |
      DynamicsCrm.DevKit.Cli `
        /auth:ClientSecret `
        /url:"$(DataverseUrl)" `
        /clientid:"$(ClientId)" `
        /clientsecret:$env:CLIENT_SECRET `
        /json:"DynamicsCrm.DevKit.Cli.json" `
        /type:servers `
        /profile:production
```

**Expected Result**: ✅ Pipeline runs successfully, no interactive prompts

---

#### Manual Testing Checklist

- [ ] **Azure AD**: App registration created successfully
- [ ] **Dataverse**: App user configured with permissions
- [ ] **VSIX**: Connection with ClientSecret works
- [ ] **Validation**: Invalid ClientId rejected
- [ ] **Validation**: Empty secret rejected
- [ ] **Validation**: HTTP URL rejected
- [ ] **Expiration**: Warning shown <30 days
- [ ] **Expiration**: Error shown if expired
- [ ] **CLI**: Basic ClientSecret auth works
- [ ] **CLI**: TenantId restriction works
- [ ] **CLI**: Validation errors shown clearly
- [ ] **CI/CD**: Pipeline integration successful
- [ ] **Security**: Secret not visible in logs
- [ ] **Security**: Secret encrypted in JSON

---

**Document Version**: 1.1  
**Last Updated**: 2025-12-13

# Implementation Plan: OAuth (Username/Password) Enhancement

**Priority**: 1 (Highest)  
**Status**: Enhance Existing  
**Timeline**: Week 1-2  
**Effort**: Low  
**Dependencies**: None (foundation for all others)

---

## Overview

Enhance the existing OAuth (Username/Password) connection type to support optional ClientId and TenantId overrides while maintaining 100% backward compatibility.

## Current Implementation

### Existing Code
- **Model**: `v4/DynamicsCrm.DevKit.Shared/Models/CrmConnection.cs`
- **Helper**: `v4/DynamicsCrm.DevKit.Shared/Helper.cs`
- **CLI**: `v4/DynamicsCrm.DevKit.Cli/Program.cs`
- **VSIX**: `v4/DynamicsCrm.DevKit/Lib/Forms/FormConnection.xaml.cs`

### Current Connection String
```
AuthType=OAuth;Url={url};Username={username};******;AppId=51f81489-12ee-4a9e-aaae-a2591f45987d;RedirectUri=app://58145B91-0C36-4500-8554-080854F2AC97;LoginPrompt=Auto;
```

## Enhancement Goals

1. Add optional ClientId override
2. Add optional TenantId support
3. Maintain 100% backward compatibility
4. Migrate to modern AES encryption
5. Add "Don't Save Password" option

## Implementation Steps

### Step 1: Update Data Model
Add ClientId, TenantId, and metadata properties to CrmConnection class.

### Step 2: Update Connection String Builder
Support ClientId and TenantId in connection string generation.

### Step 3: Update Connection String Parser
Parse ClientId (from AppId parameter) and TenantId.

### Step 4: Improve Password Encryption
Add modern AES encryption while maintaining legacy support.

### Step 5: Update VSIX Form
Add optional ClientId and TenantId fields.

### Step 6: Update CLI Arguments
Support `/clientid:` and `/tenantid:` parameters.

## Testing

### Option 1: Automated Testing (AI-Guided Unit Tests)

#### AI Guidance for Creating Unit Tests

**Test File**: `v4/DynamicsCrm.DevKit.Shared.Tests/OAuthConnectionTests.cs`

Create unit tests using this AI prompt template:
```
Create comprehensive unit tests for OAuth connection enhancement with the following scenarios:

1. Connection String Building Tests:
   - BuildConnectionString with default ClientId
   - BuildConnectionString with custom ClientId
   - BuildConnectionString with TenantId
   - BuildConnectionString with both ClientId and TenantId
   - BuildConnectionString backward compatibility (no ClientId/TenantId)

2. Connection String Parsing Tests:
   - ParseConnectionString with AppId parameter
   - ParseConnectionString with ClientId parameter
   - ParseConnectionString with TenantId parameter
   - ParseConnectionString with legacy format (no ClientId)
   - ParseConnectionString with invalid format (should not throw)

3. Encryption Tests:
   - EncryptString/DecryptString round-trip
   - Legacy decryption still works
   - Modern encryption migration
   - Empty password handling

4. Validation Tests:
   - Valid ClientId (GUID format)
   - Invalid ClientId (non-GUID)
   - Valid TenantId (GUID format)
   - Invalid TenantId (non-GUID)

Use xUnit or MSTest framework. Include Assert statements for all scenarios.
Mock external dependencies (ServiceClient, file system).
```

**Example Test Structure**:
```csharp
[TestClass]
public class OAuthConnectionTests
{
    [TestMethod]
    public void BuildConnectionString_WithDefaultClientId_ContainsDefaultAppId()
    {
        // Arrange
        var connection = new CrmConnection
        {
            Type = "OAuth",
            Url = "https://test.crm.dynamics.com",
            UserName = "user@test.com",
            Password = Helper.EncryptString("password")
        };

        // Act
        var connStr = Helper.BuildConnectionString(connection);

        // Assert
        Assert.IsTrue(connStr.Contains("AppId=51f81489-12ee-4a9e-aaae-a2591f45987d"));
        Assert.IsTrue(connStr.Contains("AuthType=OAuth"));
    }

    [TestMethod]
    public void BuildConnectionString_WithCustomClientId_ContainsCustomAppId()
    {
        // Arrange
        var connection = new CrmConnection
        {
            Type = "OAuth",
            Url = "https://test.crm.dynamics.com",
            UserName = "user@test.com",
            Password = Helper.EncryptString("password"),
            ClientId = "12345678-1234-1234-1234-123456789012"
        };

        // Act
        var connStr = Helper.BuildConnectionString(connection);

        // Assert
        Assert.IsTrue(connStr.Contains("AppId=12345678-1234-1234-1234-123456789012"));
        Assert.IsFalse(connStr.Contains("51f81489-12ee-4a9e-aaae-a2591f45987d"));
    }

    [TestMethod]
    public void ParseConnectionString_WithAppId_ExtractsClientId()
    {
        // Arrange
        var connStr = "AuthType=OAuth;Url=https://test.crm.dynamics.com;Username=user@test.com;AppId=custom-guid;";

        // Act
        var connection = Helper.ParseConnectionString(connStr);

        // Assert
        Assert.AreEqual("custom-guid", connection.ClientId);
        Assert.AreEqual("OAuth", connection.Type);
    }

    [TestMethod]
    public void EncryptDecrypt_RoundTrip_ReturnsOriginalValue()
    {
        // Arrange
        var original = "TestPassword123!";

        // Act
        var encrypted = Helper.EncryptString(original);
        var decrypted = Helper.DecryptString(encrypted);

        // Assert
        Assert.AreEqual(original, decrypted);
        Assert.AreNotEqual(original, encrypted);
    }
}
```

**Running the Tests**:
```powershell
# Using Visual Studio Test Explorer
# 1. Build solution
# 2. Open Test Explorer (Test → Test Explorer)
# 3. Click "Run All"

# Using command line (dotnet test)
cd v4/DynamicsCrm.DevKit.Shared.Tests
dotnet test --filter "FullyQualifiedName~OAuthConnection"

# Using command line (vstest.console)
vstest.console.exe DynamicsCrm.DevKit.Shared.Tests.dll /Tests:OAuthConnectionTests
```

**Expected Results**:
- All tests should pass (green)
- Code coverage should be >90% for modified code
- No exceptions or errors

---

### Option 2: Manual Testing (Step-by-Step Guide)

#### Prerequisites
- Visual Studio 2022 with DynamicsCrm.DevKit solution loaded
- Access to a Dynamics 365/Dataverse environment (dev/test)
- Test credentials ready

#### Test Scenario 1: Backward Compatibility (Existing Connections)

**Step 1.1**: Open existing DynamicsCrm.DevKit.json
```powershell
# Location: Your solution root folder
notepad DynamicsCrm.DevKit.json
```

**Step 1.2**: Verify existing connection format:
```json
{
  "DefaultCrmConnection": "Dev",
  "CrmConnections": [
    {
      "Name": "Dev",
      "Url": "https://dev.crm.dynamics.com",
      "UserName": "user@contoso.com",
      "Password": "encrypted-value",
      "Type": "OAuth"
    }
  ]
}
```

**Step 1.3**: Open FormConnection in VSIX
- Visual Studio → Tools → DynamicsCrm DevKit → Connect
- Select existing connection from dropdown
- Click "Load"

**Expected Result**: ✅ Connection loads successfully without errors

**Step 1.4**: Test connection
- Click "Test Connection" button
- Wait for authentication prompt

**Expected Result**: ✅ Browser opens, authentication succeeds, connection established

**Step 1.5**: Deploy a test component
```powershell
# Using CLI
DynamicsCrm.DevKit.Cli `
  /conn:"AuthType=OAuth;Username=user@contoso.com;******;Url=https://dev.crm.dynamics.com" `
  /json:"DynamicsCrm.DevKit.Cli.json" `
  /type:webresources `
  /profile:default
```

**Expected Result**: ✅ Deployment succeeds with no connection errors

---

#### Test Scenario 2: Custom ClientId

**Step 2.1**: Register Azure AD Application
1. Go to Azure Portal → Azure Active Directory → App registrations
2. Click "New registration"
3. Name: "DynamicsCrm DevKit Test"
4. Redirect URI: `app://58145B91-0C36-4500-8554-080854F2AC97`
5. Click "Register"
6. Note the "Application (client) ID" (e.g., `87654321-4321-4321-4321-210987654321`)

**Step 2.2**: Create new connection with custom ClientId in VSIX
1. Visual Studio → Tools → DynamicsCrm DevKit → Connect
2. Click "New Connection"
3. Fill in:
   - Name: `CustomClient`
   - Type: `OAuth`
   - URL: `https://test.crm.dynamics.com`
   - Username: `user@contoso.com`
   - Password: `your-password`
   - **Client Id**: `87654321-4321-4321-4321-210987654321` (your custom ID)
4. Click "Test Connection"

**Expected Result**: ✅ Browser opens with custom app consent screen, authentication succeeds

**Step 2.3**: Verify connection string in JSON
```powershell
notepad DynamicsCrm.DevKit.json
```

**Expected Result**: ✅ Connection includes custom ClientId:
```json
{
  "Name": "CustomClient",
  "ClientId": "87654321-4321-4321-4321-210987654321",
  ...
}
```

**Step 2.4**: Test with CLI
```powershell
DynamicsCrm.DevKit.Cli `
  /conn:"AuthType=OAuth;Username=user@contoso.com;******;Url=https://test.crm.dynamics.com;AppId=87654321-4321-4321-4321-210987654321" `
  /json:"..." /type:servers /profile:default
```

**Expected Result**: ✅ Authentication uses custom app, deployment succeeds

---

#### Test Scenario 3: TenantId Restriction

**Step 3.1**: Get your Tenant ID
```powershell
# Azure Portal → Azure Active Directory → Properties
# Copy "Tenant ID" (e.g., 12345678-1234-1234-1234-123456789012)
```

**Step 3.2**: Create connection with TenantId
1. Open FormConnection
2. Create new connection:
   - Name: `TenantRestricted`
   - Type: `OAuth`
   - URL: `https://test.crm.dynamics.com`
   - Username: `user@contoso.com`
   - Password: `your-password`
   - **Tenant Id**: `12345678-1234-1234-1234-123456789012`
3. Click "Test Connection"

**Expected Result**: ✅ Authentication restricted to specified tenant only

**Step 3.3**: Test with wrong tenant user
1. Try to authenticate with user from different tenant (e.g., personal Microsoft account)

**Expected Result**: ✅ Authentication fails with "AADSTS50020: User account from wrong tenant" or similar

---

#### Test Scenario 4: Password Encryption Migration

**Step 4.1**: Load connection with old encryption
1. Open existing connection saved with old encryption
2. View password field (will show encrypted value)

**Expected Result**: ✅ Old encryption decrypts successfully

**Step 4.2**: Re-save connection
1. Make minor change (e.g., add space to name, then remove it)
2. Click "Save"

**Expected Result**: ✅ Password re-encrypted with modern AES

**Step 4.3**: Verify new encryption format
1. Close and reopen FormConnection
2. Load connection again

**Expected Result**: ✅ Connection loads successfully with new encryption

---

#### Test Scenario 5: "Don't Save Password" Option

**Step 5.1**: Create new connection
1. Open FormConnection
2. Create new connection with all details
3. **Check** the "Don't Save Password" checkbox
4. Click "Save"

**Expected Result**: ✅ Connection saved, password NOT stored in JSON

**Step 5.2**: Verify JSON file
```powershell
notepad DynamicsCrm.DevKit.json
```

**Expected Result**: ✅ Password field is empty or not present:
```json
{
  "Name": "NoPassword",
  "Url": "...",
  "UserName": "...",
  "Password": "",  // or field not present
  "ClientId": "..."
}
```

**Step 5.3**: Load connection again
1. Close FormConnection
2. Reopen and load "NoPassword" connection

**Expected Result**: ✅ Password field is empty, prompts for password on test/use

---

#### Test Scenario 6: CLI with New Parameters

**Step 6.1**: Test default (backward compatible)
```powershell
DynamicsCrm.DevKit.Cli `
  /conn:"AuthType=OAuth;Username=user@contoso.com;******;Url=https://test.crm.dynamics.com" `
  /json:"DynamicsCrm.DevKit.Cli.json" `
  /type:servers `
  /profile:default
```

**Expected Result**: ✅ Uses default Microsoft ClientId, authentication succeeds

**Step 6.2**: Test with custom ClientId parameter
```powershell
DynamicsCrm.DevKit.Cli `
  /sdklogin:yes `
  /url:"https://test.crm.dynamics.com" `
  /clientid:"87654321-4321-4321-4321-210987654321" `
  /json:"..." /type:servers /profile:default
```

**Expected Result**: ✅ Uses custom ClientId, authentication succeeds

**Step 6.3**: Test with TenantId parameter
```powershell
DynamicsCrm.DevKit.Cli `
  /sdklogin:yes `
  /url:"https://test.crm.dynamics.com" `
  /tenantid:"12345678-1234-1234-1234-123456789012" `
  /json:"..." /type:servers /profile:default
```

**Expected Result**: ✅ Authentication restricted to specified tenant

---

#### Manual Testing Checklist

- [ ] **Scenario 1**: Existing connections work without modification
- [ ] **Scenario 2**: Custom ClientId authentication works
- [ ] **Scenario 3**: TenantId restriction works
- [ ] **Scenario 4**: Password encryption migration successful
- [ ] **Scenario 5**: "Don't Save Password" option works
- [ ] **Scenario 6**: CLI parameters work correctly
- [ ] **Backward Compat**: Old JSON files load successfully
- [ ] **VSIX UI**: All new fields display and validate correctly
- [ ] **CLI Output**: Error messages are clear and helpful
- [ ] **Performance**: Connection time <5 seconds
- [ ] **Security**: No passwords visible in logs or errors

---

## Success Criteria

- All existing connections work unchanged
- Custom ClientId/TenantId supported
- Password encryption upgraded
- All automated tests pass (>90% coverage)
- All manual test scenarios pass
- No breaking changes detected

See full implementation details in main document.

---

**Document Version**: 1.1  
**Last Updated**: 2025-12-13

# Implementation Plan: DeviceCode (Headless OAuth)

**Priority**: 4  
**Status**: New Implementation  
**Timeline**: Week 3-4  
**Effort**: Medium-High  
**Dependencies**: Azure.Identity 1.10.4+

---

## Overview

Implement OAuth device code flow for headless/remote environments. Displays a URL and code for user to complete authentication in a browser on another device.

## Reference Implementation

From Rnwood.Dataverse.Data.PowerShell GetDataverseConnectionCmdlet.cs:

```csharp
case PARAMSET_DEVICECODE:
{
    var publicClient = PublicClientApplicationBuilder
        .Create(ClientId.ToString())
        .WithRedirectUri("http://localhost")
        .Build();

    // Register MSAL cache
    if (!string.IsNullOrEmpty(Name))
    {
        var store = new ConnectionStore();
        store.RegisterCache(publicClient);
    }

    result = new ServiceClientWithTokenProvider(
        Url, 
        url => GetTokenWithDeviceCode(publicClient, url)
    );

    // Save connection metadata
    if (!string.IsNullOrEmpty(Name))
    {
        var store = new ConnectionStore();
        store.SaveConnection(Name, new ConnectionMetadata
        {
            Url = Url.ToString(),
            AuthMethod = "DeviceCode",
            ClientId = ClientId.ToString(),
            Username = Username,
            SavedAt = DateTime.UtcNow
        });
    }
    break;
}

private async Task<string> GetTokenWithDeviceCode(IPublicClientApplication app, string url)
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

        // Device code acquisition if cache miss
        if (authResult == null)
        {
            authResult = await app.AcquireTokenWithDeviceCode(scopes, (dcr) =>
            {
                if (cts.Token.IsCancellationRequested)
                {
                    return Task.FromCanceled(cts.Token);
                }
                
                // Display device code message to user
                Host.UI.WriteLine(dcr.Message);
                return Task.CompletedTask;
            }).ExecuteAsync(cts.Token);
            
            Username = authResult.Account.Username;
        }

        return authResult.AccessToken;
    }
}
```

## Key Implementation Points

### 1. Device Code Display

The device code callback displays:
```
To sign in, use a web browser to open the page https://microsoft.com/devicelogin 
and enter the code ABCD1234 to authenticate.
```

**CLI Implementation**:
```csharp
authResult = await app.AcquireTokenWithDeviceCode(scopes, (deviceCodeResult) =>
{
    CliLog.WriteLine(ConsoleColor.Yellow, "|");
    CliLog.WriteLine(ConsoleColor.Yellow, "|", "Device Code Authentication");
    CliLog.WriteLine(ConsoleColor.Yellow, "|", new string('=', 50));
    CliLog.WriteLine(ConsoleColor.White, "|");
    CliLog.WriteLine(ConsoleColor.Green, "|", deviceCodeResult.Message);
    CliLog.WriteLine(ConsoleColor.White, "|");
    CliLog.WriteLine(ConsoleColor.Yellow, "|", "Waiting for authentication...");
    return Task.CompletedTask;
}).ExecuteAsync();
```

**VSIX Implementation**:
```csharp
private async Task<string> ShowDeviceCodeAsync(DeviceCodeResult deviceCodeResult)
{
    await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
    
    var message = $"{deviceCodeResult.Message}\n\n" +
                  "This window will automatically close when authentication completes.";
    
    var dialog = new DeviceCodeDialog(message, deviceCodeResult.VerificationUrl);
    dialog.ShowDialog();
    
    return deviceCodeResult.UserCode;
}
```

### 2. Token Caching

Reuse the same SecureTokenCache from Interactive implementation. Device code tokens are cached and reused.

### 3. Timeout Handling

```csharp
// Default timeout: 5 minutes (300 seconds)
var timeout = TimeSpan.FromSeconds(300);
using (var cts = new CancellationTokenSource(timeout))
{
    try
    {
        authResult = await app.AcquireTokenWithDeviceCode(scopes, deviceCodeCallback)
            .ExecuteAsync(cts.Token);
    }
    catch (OperationCanceledException)
    {
        throw new TimeoutException("Device code authentication timed out after 5 minutes");
    }
}
```

### 4. Use Cases

- **CI/CD Pipelines**: Azure DevOps, GitHub Actions (with approval gates)
- **Docker Containers**: No browser available
- **SSH Sessions**: Remote server access
- **WSL**: Windows Subsystem for Linux
- **Headless Servers**: Server deployment scenarios

## Implementation Files

### New Files
- `v4/DynamicsCrm.DevKit.Shared/ConnectionBuilder/DeviceCodeConnectionBuilder.cs`
- `v4/DynamicsCrm.DevKit/Lib/Forms/DeviceCodeDialog.xaml` (VSIX only)
- `v4/DynamicsCrm.DevKit/Lib/Forms/DeviceCodeDialog.xaml.cs`

### Modified Files
- `v4/DynamicsCrm.DevKit.Shared/Models/CrmConnection.cs` (no changes needed)
- `v4/DynamicsCrm.DevKit.Cli/Program.cs` (add device code auth)
- `v4/DynamicsCrm.DevKit/Lib/Forms/FormConnection.xaml.cs` (add device code option)

## CLI Usage

```powershell
DynamicsCrm.DevKit.Cli `
  /auth:DeviceCode `
  /url:"https://org.crm.dynamics.com" `
  /json:"DynamicsCrm.DevKit.Cli.json" `
  /type:servers `
  /profile:default

# Output:
# |
# | Device Code Authentication
# | ==================================================
# |
# | To sign in, use a web browser to open the page 
# | https://microsoft.com/devicelogin and enter the 
# | code ABCD1234 to authenticate.
# |
# | Waiting for authentication...
# | Authentication successful!
# | Connected: https://org.crm.dynamics.com
```

## Azure DevOps Pipeline Example

```yaml
steps:
- task: PowerShell@2
  displayName: 'Deploy with Device Code'
  inputs:
    targetType: 'inline'
    script: |
      # This will pause and wait for manual approval
      DynamicsCrm.DevKit.Cli `
        /auth:DeviceCode `
        /url:"$(DataverseUrl)" `
        /json:"DynamicsCrm.DevKit.Cli.json" `
        /type:servers `
        /profile:$(Environment)
```

## Testing

### Manual Test in Docker

```dockerfile
FROM mcr.microsoft.com/dotnet/sdk:6.0
WORKDIR /app
COPY DynamicsCrm.DevKit.Cli.exe .
CMD ["./DynamicsCrm.DevKit.Cli.exe", "/auth:DeviceCode", "/url:https://test.crm.dynamics.com"]
```

Run:
```bash
docker run -it devkit-test
# Follow device code instructions
```

## Success Criteria

- [ ] Device code message displayed correctly
- [ ] URL can be copied easily
- [ ] Code can be copied easily
- [ ] Timeout after 5 minutes
- [ ] Token cached for reuse
- [ ] Silent acquisition works on second run
- [ ] Works in Docker/SSH/headless
- [ ] MFA supported
- [ ] Cancellation works (Ctrl+C)

---

**Document Version**: 1.0  
**Last Updated**: 2025-12-13

## Testing

### Option 1: Automated Testing (AI-Guided Unit Tests)

**Test File**: `v4/DynamicsCrm.DevKit.Shared.Tests/DeviceCodeConnectionTests.cs`

AI Prompt:
```
Create unit tests for DeviceCode connection:

1. Device Code Flow Tests:
   - Device code callback displays URL and code
   - Device code timeout after 5 minutes
   - Device code cancellation handling
   - Silent token acquisition from cache

2. Validation Tests:
   - ValidateAsync with valid connection
   - ValidateAsync with missing URL
   - ValidateAsync with invalid ClientId

3. Token Cache Tests:
   - Token cached after successful auth
   - Silent acquisition works on second call

Mock: IPublicClientApplication, DeviceCodeResult
Test async patterns correctly.
```

**Example Test**:
```csharp
[TestMethod]
public async Task DeviceCodeAuth_DisplaysCodeCorrectly()
{
    // Arrange
    var mockApp = new Mock<IPublicClientApplication>();
    var deviceCodeResult = new DeviceCodeResult
    {
        UserCode = "ABCD1234",
        VerificationUrl = "https://microsoft.com/devicelogin",
        Message = "To sign in, use a web browser..."
    };

    bool callbackInvoked = false;
    string displayedMessage = null;

    mockApp.Setup(a => a.AcquireTokenWithDeviceCode(
        It.IsAny<string[]>(),
        It.IsAny<Func<DeviceCodeResult, Task>>()))
        .Callback<string[], Func<DeviceCodeResult, Task>>((scopes, callback) =>
        {
            callbackInvoked = true;
            callback(deviceCodeResult).Wait();
        })
        .ReturnsAsync(new AuthenticationResult());

    // Act
    // Invoke device code flow

    // Assert
    Assert.IsTrue(callbackInvoked);
    Assert.IsNotNull(displayedMessage);
    Assert.IsTrue(displayedMessage.Contains("ABCD1234"));
}
```

**Running Tests**:
```powershell
dotnet test --filter "FullyQualifiedName~DeviceCodeConnection"
```

---

### Option 2: Manual Testing (Step-by-Step Guide)

#### Test Scenario 1: DeviceCode Authentication (CLI)

**Step 1.1**: Run CLI with DeviceCode
```powershell
DynamicsCrm.DevKit.Cli `
  /auth:DeviceCode `
  /url:"https://test.crm.dynamics.com" `
  /json:"DynamicsCrm.DevKit.Cli.json" `
  /type:servers `
  /profile:default
```

**Expected Result**: Γ£à CLI displays:
```
|
| Device Code Authentication
| ==================================================
|
| To sign in, use a web browser to open the page 
| https://microsoft.com/devicelogin and enter the 
| code ABCD1234 to authenticate.
|
| Waiting for authentication...
```

**Step 1.2**: Complete authentication
1. Open browser (any device)
2. Navigate to `https://microsoft.com/devicelogin`
3. Enter displayed code (e.g., `ABCD1234`)
4. Sign in with credentials
5. Complete MFA if prompted

**Expected Result**: Γ£à CLI shows "Authentication successful!" and proceeds with deployment

**Step 1.3**: Verify token cached
```powershell
dir "$env:LOCALAPPDATA\DynamicsCrmDevKit\TokenCache"
```

**Expected Result**: Γ£à Cache file created

---

#### Test Scenario 2: DeviceCode in Docker Container

**Step 2.1**: Create Dockerfile
```dockerfile
FROM mcr.microsoft.com/dotnet/sdk:6.0
WORKDIR /app
COPY DynamicsCrm.DevKit.Cli.exe .
COPY DynamicsCrm.DevKit.Cli.json .
CMD ["./DynamicsCrm.DevKit.Cli.exe", "/auth:DeviceCode", "/url:https://test.crm.dynamics.com"]
```

**Step 2.2**: Build and run
```powershell
docker build -t devkit-devicecode .
docker run -it devkit-devicecode
```

**Expected Result**: Γ£à Device code displayed in container logs

**Step 2.3**: Authenticate from host machine
1. Copy device code from container output
2. Open browser on host machine
3. Complete authentication

**Expected Result**: Γ£à Container proceeds with deployment

---

#### Test Scenario 3: DeviceCode Timeout

**Step 3.1**: Start DeviceCode authentication
```powershell
DynamicsCrm.DevKit.Cli /auth:DeviceCode /url:"..."
```

**Step 3.2**: Wait 5+ minutes without authenticating

**Expected Result**: Γ£à CLI shows "Device code authentication timed out after 5 minutes"

---

#### Test Scenario 4: DeviceCode in SSH Session

**Step 4.1**: SSH to remote server
```powershell
ssh user@remote-server
```

**Step 4.2**: Run CLI with DeviceCode
```bash
./DynamicsCrm.DevKit.Cli /auth:DeviceCode /url:"https://test.crm.dynamics.com"
```

**Expected Result**: Γ£à Device code displayed in SSH terminal

**Step 4.3**: Authenticate from local machine
**Expected Result**: Γ£à SSH session shows authentication success

---

#### Test Scenario 5: DeviceCode with Named Connection

**Step 5.1**: First run with connection name
```powershell
DynamicsCrm.DevKit.Cli `
  /auth:DeviceCode `
  /url:"https://test.crm.dynamics.com" `
  /connection:"DeviceCodeTest" `
  /json:"..." /type:servers /profile:default
```

**Step 5.2**: Complete authentication via device code

**Step 5.3**: Second run with same connection name
```powershell
DynamicsCrm.DevKit.Cli `
  /connection:"DeviceCodeTest" `
  /json:"..." /type:servers /profile:default
```

**Expected Result**: Γ£à NO device code shown, uses cached token

---

#### Test Scenario 6: Azure DevOps Pipeline

**Step 6.1**: Create pipeline with approval gate
```yaml
stages:
- stage: Deploy
  jobs:
  - deployment: DeployToProduction
    environment: Production  # Requires manual approval
    strategy:
      runOnce:
        deploy:
          steps:
          - task: PowerShell@2
            inputs:
              script: |
                DynamicsCrm.DevKit.Cli `
                  /auth:DeviceCode `
                  /url:"$(DataverseUrl)" `
                  /json:"..." /type:servers /profile:prod
```

**Step 6.2**: Queue pipeline

**Expected Result**: Γ£à Pipeline pauses at approval, shows device code

**Step 6.3**: Approve and authenticate

**Expected Result**: Γ£à Pipeline proceeds after authentication

---

#### Manual Testing Checklist

- [ ] **Device code display**: URL and code shown clearly
- [ ] **Code entry**: Code works on microsoft.com/devicelogin
- [ ] **Authentication**: Sign-in flow works
- [ ] **MFA**: Multi-factor auth supported
- [ ] **Success**: CLI proceeds after auth
- [ ] **Token cache**: Token cached for reuse
- [ ] **Timeout**: 5-minute timeout works
- [ ] **Cancellation**: Ctrl+C stops waiting
- [ ] **Docker**: Works in containers
- [ ] **SSH**: Works in SSH sessions
- [ ] **Pipeline**: Azure DevOps integration works
- [ ] **Silent auth**: Second run uses cache

---

**Document Version**: 1.1  
**Last Updated**: 2025-12-13

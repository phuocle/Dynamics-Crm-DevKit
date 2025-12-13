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

# Connection Types Implementation Roadmap

This document provides a step-by-step implementation roadmap for adding new connection types to DynamicsCrm.DevKit v4.

## Overview

**Goal**: Enhance connection capabilities with modern authentication methods
**Timeline**: 11 weeks
**Approach**: Incremental, backward-compatible implementation

## File Structure

```
DynamicsCrm.DevKit/
├── v4/
│   ├── DynamicsCrm.DevKit.Shared/
│   │   ├── Models/
│   │   │   ├── CrmConnection.cs                    [MODIFY]
│   │   │   ├── DevKitConnections.cs                [MODIFY]
│   │   │   └── ConnectionMetadata.cs               [NEW]
│   │   ├── Helper.cs                               [MODIFY]
│   │   ├── Const.cs                                [MODIFY]
│   │   └── ConnectionBuilder/                      [NEW FOLDER]
│   │       ├── IConnectionBuilder.cs               [NEW]
│   │       ├── InteractiveConnectionBuilder.cs     [NEW]
│   │       ├── DeviceCodeConnectionBuilder.cs      [NEW]
│   │       ├── ClientCertificateConnectionBuilder.cs [NEW]
│   │       ├── ManagedIdentityConnectionBuilder.cs [NEW]
│   │       ├── DefaultAzureCredentialConnectionBuilder.cs [NEW]
│   │       └── PacCliConnectionBuilder.cs          [NEW]
│   ├── DynamicsCrm.DevKit.Cli/
│   │   ├── Program.cs                              [MODIFY]
│   │   ├── Models/
│   │   │   └── CommandLineArgs.cs                  [MODIFY]
│   │   ├── ProjectUrlAutoParser.cs                 [NEW]
│   │   ├── PacCliIntegration.cs                    [NEW]
│   │   ├── ConnectionManager.cs                    [NEW]
│   │   └── docs/
│   │       └── README.md                           [MODIFY]
│   ├── DynamicsCrm.DevKit/
│   │   ├── Lib/
│   │   │   ├── Forms/
│   │   │   │   ├── FormConnection.xaml             [MODIFY]
│   │   │   │   ├── FormConnection.xaml.cs          [MODIFY]
│   │   │   │   ├── FormConnectionManager.xaml      [NEW]
│   │   │   │   └── FormConnectionManager.xaml.cs   [NEW]
│   │   │   ├── VsixHelper.cs                       [MODIFY]
│   │   │   ├── ProjectUrlDetector.cs               [NEW]
│   │   │   └── ConnectionHealth.cs                 [NEW]
│   │   └── Resources/
│   │       └── [Connection UI resources]           [NEW]
│   └── docs/
│       ├── CONNECTION_TYPES.md                     [NEW]
│       ├── AUTHENTICATION_GUIDE.md                 [NEW]
│       ├── MIGRATION_GUIDE.md                      [NEW]
│       └── TROUBLESHOOTING.md                      [NEW]
```

## Phase 1: Core Infrastructure (Weeks 1-2)

### Week 1: Data Models & Connection String Builders

#### Day 1-2: Update Data Models

**File: `DynamicsCrm.DevKit.Shared/Models/CrmConnection.cs`**

```csharp
public class CrmConnection
{
    // Existing properties
    public string Name { get; set; }
    public string Url { get; set; }
    public string Type { get; set; } = "Interactive";
    
    // Add new properties
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
    public string CertificateStoreLocation { get; set; } = "CurrentUser";
    public string CertificateStoreName { get; set; } = "My";
    
    // ManagedIdentity
    public string ManagedIdentityClientId { get; set; }
    
    // PAC CLI
    public string PacProfile { get; set; }
    
    // Metadata (new)
    public DateTime? LastTested { get; set; }
    public bool? LastTestSuccess { get; set; }
    public string LastTestError { get; set; }
    public DateTime? CreatedAt { get; set; }
    public DateTime? ModifiedAt { get; set; }
}
```

**File: `DynamicsCrm.DevKit.Shared/Const.cs`**

```csharp
public static class ConnectionType
{
    public const string Interactive = "Interactive";
    public const string DeviceCode = "DeviceCode";
    public const string OAuth = "OAuth";
    public const string ClientSecret = "ClientSecret";
    public const string ClientCertificate = "ClientCertificate";
    public const string DefaultAzureCredential = "DefaultAzureCredential";
    public const string ManagedIdentity = "ManagedIdentity";
    public const string AccessToken = "AccessToken";
    public const string FromPac = "FromPac";
    public const string AD = "AD";
}
```

**Testing**:
- [ ] Verify backward compatibility with existing JSON files
- [ ] Test JSON serialization/deserialization
- [ ] Validate default values

#### Day 3-5: Connection String Builders

**File: `DynamicsCrm.DevKit.Shared/ConnectionBuilder/IConnectionBuilder.cs`**

```csharp
public interface IConnectionBuilder
{
    string Type { get; }
    string BuildConnectionString(CrmConnection connection);
    CrmConnection ParseConnectionString(string connectionString);
    Task<(bool isValid, string error)> ValidateAsync(CrmConnection connection);
}
```

**File: `DynamicsCrm.DevKit.Shared/ConnectionBuilder/InteractiveConnectionBuilder.cs`**

```csharp
public class InteractiveConnectionBuilder : IConnectionBuilder
{
    public string Type => ConnectionType.Interactive;
    
    public string BuildConnectionString(CrmConnection connection)
    {
        var sb = new StringBuilder();
        sb.Append($"AuthType=OAuth;");
        sb.Append($"Url={connection.Url};");
        sb.Append($"LoginPrompt=Auto;");
        
        if (!string.IsNullOrEmpty(connection.ClientId))
            sb.Append($"AppId={connection.ClientId};");
        else
            sb.Append($"AppId=51f81489-12ee-4a9e-aaae-a2591f45987d;");
            
        sb.Append($"RedirectUri=app://58145B91-0C36-4500-8554-080854F2AC97;");
        
        return sb.ToString();
    }
    
    public CrmConnection ParseConnectionString(string connectionString)
    {
        // Implementation
    }
    
    public async Task<(bool isValid, string error)> ValidateAsync(CrmConnection connection)
    {
        if (string.IsNullOrEmpty(connection.Url))
            return (false, "URL is required");
        
        if (!Uri.TryCreate(connection.Url, UriKind.Absolute, out _))
            return (false, "Invalid URL format");
        
        return (true, null);
    }
}
```

Create similar builders for:
- [ ] `DeviceCodeConnectionBuilder.cs`
- [ ] `ClientCertificateConnectionBuilder.cs`
- [ ] `ManagedIdentityConnectionBuilder.cs`
- [ ] `DefaultAzureCredentialConnectionBuilder.cs`
- [ ] `PacCliConnectionBuilder.cs`

**File: `DynamicsCrm.DevKit.Shared/Helper.cs`**

Update `BuildConnectionString` method:

```csharp
public static string BuildConnectionString(CrmConnection crmConnection, bool isEncrypt = false)
{
    if (crmConnection == null) return string.Empty;
    
    // Get appropriate builder
    var builder = ConnectionBuilderFactory.GetBuilder(crmConnection.Type);
    if (builder != null)
    {
        return builder.BuildConnectionString(crmConnection);
    }
    
    // Fall back to legacy implementation
    return BuildConnectionStringLegacy(crmConnection, isEncrypt);
}
```

**Testing**:
- [ ] Unit test each connection builder
- [ ] Test connection string generation
- [ ] Test connection string parsing
- [ ] Validate error handling

### Week 2: Helper Updates & Token Management

#### Day 6-8: Update Helper Methods

**File: `DynamicsCrm.DevKit.Shared/Helper.cs`**

Add new methods:

```csharp
public static async Task<ServiceClient> CreateServiceClientAsync(CrmConnection connection)
{
    var connectionString = BuildConnectionString(connection);
    
    try
    {
        var serviceClient = new ServiceClient(connectionString);
        
        // Wait for connection to establish
        await Task.Delay(100);
        
        if (serviceClient.IsReady)
        {
            return serviceClient;
        }
        
        // Wait up to 30 seconds
        var timeout = TimeSpan.FromSeconds(30);
        var start = DateTime.Now;
        while (!serviceClient.IsReady && DateTime.Now - start < timeout)
        {
            await Task.Delay(500);
        }
        
        return serviceClient.IsReady ? serviceClient : null;
    }
    catch (Exception ex)
    {
        // Log error
        return null;
    }
}

public static async Task<(ServiceClient client, string error)> CreateServiceClientWithErrorAsync(CrmConnection connection)
{
    try
    {
        var client = await CreateServiceClientAsync(connection);
        if (client == null || !client.IsReady)
        {
            return (null, client?.LastError ?? "Unknown connection error");
        }
        return (client, null);
    }
    catch (Exception ex)
    {
        return (null, ex.Message);
    }
}
```

#### Day 9-10: Secure Token Cache

**File: `DynamicsCrm.DevKit.Shared/SecureTokenCache.cs`**

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
        
        if (!Directory.Exists(_cacheLocation))
        {
            Directory.CreateDirectory(_cacheLocation);
        }
    }
    
    public void SaveToken(string connectionName, string token)
    {
        try
        {
            var encrypted = ProtectedData.Protect(
                Encoding.UTF8.GetBytes(token),
                null,
                DataProtectionScope.CurrentUser
            );
            
            var tokenFile = GetTokenFilePath(connectionName);
            File.WriteAllBytes(tokenFile, encrypted);
        }
        catch (Exception ex)
        {
            // Log error
        }
    }
    
    public string LoadToken(string connectionName)
    {
        try
        {
            var tokenFile = GetTokenFilePath(connectionName);
            if (!File.Exists(tokenFile)) return null;
            
            var encrypted = File.ReadAllBytes(tokenFile);
            var decrypted = ProtectedData.Unprotect(
                encrypted,
                null,
                DataProtectionScope.CurrentUser
            );
            
            return Encoding.UTF8.GetString(decrypted);
        }
        catch
        {
            return null;
        }
    }
    
    public void ClearAllTokens()
    {
        try
        {
            if (Directory.Exists(_cacheLocation))
            {
                Directory.Delete(_cacheLocation, true);
            }
        }
        catch
        {
            // Log error
        }
    }
    
    private string GetTokenFilePath(string connectionName)
    {
        var safeFileName = string.Join("_", connectionName.Split(Path.GetInvalidFileNameChars()));
        return Path.Combine(_cacheLocation, $"{safeFileName}.token");
    }
}
```

**Testing**:
- [ ] Test token encryption/decryption
- [ ] Test token persistence
- [ ] Test cache clearing
- [ ] Validate security

## Phase 2: CLI Implementation (Weeks 2-3)

### Week 2 (continued): Command-Line Argument Parsing

**File: `DynamicsCrm.DevKit.Cli/Models/CommandLineArgs.cs`**

Add new properties:

```csharp
[Argument('a', "auth")]
public string AuthType { get; set; } = "";

[Argument("connection")]
public string ConnectionName { get; set; } = "";

[Argument("clientid")]
public string ClientId { get; set; } = "";

[Argument("cert")]
public string CertificatePath { get; set; } = "";

[Argument("certpass")]
public string CertificatePassword { get; set; } = "";

[Argument("certthumb")]
public string CertificateThumbprint { get; set; } = "";

[Argument("pacprofile")]
public string PacProfile { get; set; } = "";

[Argument("autodetect")]
public bool AutoDetect { get; set; } = false;

[Argument("connections")]
public string ConnectionsCommand { get; set; } = "";
```

### Week 3: Auto-Detection & PAC Integration

#### Day 11-13: Project URL Auto-Parser

**File: `DynamicsCrm.DevKit.Cli/ProjectUrlAutoParser.cs`**

```csharp
public static class ProjectUrlAutoParser
{
    public static async Task<string> DetectProjectUrlAsync(string solutionPath)
    {
        // 1. Check DynamicsCrm.DevKit.json
        var url = await CheckDevKitJsonAsync(solutionPath);
        if (url != null) return url;
        
        // 2. Check .cdsproj files
        url = await CheckCdsProjFilesAsync(solutionPath);
        if (url != null) return url;
        
        // 3. Check PAC CLI
        url = await CheckPacAuthAsync();
        if (url != null) return url;
        
        // 4. Check environment variables
        url = CheckEnvironmentVariables();
        if (url != null) return url;
        
        return null;
    }
    
    private static async Task<string> CheckDevKitJsonAsync(string solutionPath)
    {
        var devKitJsonPath = Path.Combine(solutionPath, "DynamicsCrm.DevKit.json");
        if (!File.Exists(devKitJsonPath)) return null;
        
        try
        {
            var json = await File.ReadAllTextAsync(devKitJsonPath);
            var devKitConnections = SimpleJson.DeserializeObject<DevKitConnections>(json);
            
            if (!string.IsNullOrEmpty(devKitConnections?.DefaultCrmConnection))
            {
                var connection = devKitConnections.CrmConnections
                    .FirstOrDefault(c => c.Name == devKitConnections.DefaultCrmConnection);
                return connection?.Url;
            }
        }
        catch
        {
            // Ignore errors
        }
        
        return null;
    }
    
    private static async Task<string> CheckCdsProjFilesAsync(string solutionPath)
    {
        var cdsProjFiles = Directory.GetFiles(solutionPath, "*.cdsproj", SearchOption.AllDirectories);
        
        foreach (var file in cdsProjFiles)
        {
            try
            {
                var content = await File.ReadAllTextAsync(file);
                // Parse XML and look for ServiceUri or similar
                // Implementation depends on .cdsproj format
            }
            catch
            {
                // Ignore errors
            }
        }
        
        return null;
    }
    
    private static async Task<string> CheckPacAuthAsync()
    {
        return await PacCliIntegration.GetCurrentEnvironmentUrlAsync();
    }
    
    private static string CheckEnvironmentVariables()
    {
        return Environment.GetEnvironmentVariable("DATAVERSE_URL") 
            ?? Environment.GetEnvironmentVariable("DYNAMICS_URL");
    }
}
```

#### Day 14-15: PAC CLI Integration

**File: `DynamicsCrm.DevKit.Cli/PacCliIntegration.cs`**

```csharp
public static class PacCliIntegration
{
    public static async Task<string> GetCurrentEnvironmentUrlAsync()
    {
        try
        {
            var process = new Process
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = "pac",
                    Arguments = "auth list",
                    RedirectStandardOutput = true,
                    UseShellExecute = false,
                    CreateNoWindow = true
                }
            };
            
            process.Start();
            var output = await process.StandardOutput.ReadToEndAsync();
            await process.WaitForExitAsync();
            
            // Parse output to find active profile and URL
            // Format: * Index: 1 Name: Default Environment: https://org.crm.dynamics.com
            
            return ParsePacAuthOutput(output);
        }
        catch
        {
            return null;
        }
    }
    
    public static async Task<List<PacAuthProfile>> GetAuthProfilesAsync()
    {
        // Implementation
    }
    
    public static async Task<CrmConnection> LoadFromPacProfileAsync(string profileName)
    {
        // Implementation
    }
    
    private static string ParsePacAuthOutput(string output)
    {
        // Parse the pac auth list output
        var lines = output.Split('\n');
        foreach (var line in lines)
        {
            if (line.TrimStart().StartsWith("*"))
            {
                // Active profile
                var match = System.Text.RegularExpressions.Regex.Match(
                    line, 
                    @"Environment:\s*(https?://[^\s]+)"
                );
                if (match.Success)
                {
                    return match.Groups[1].Value;
                }
            }
        }
        return null;
    }
}
```

**Testing**:
- [ ] Test auto-detection from various sources
- [ ] Test PAC CLI integration
- [ ] Validate error handling
- [ ] Test with missing PAC CLI

## Phase 3: VSIX Implementation (Weeks 3-5)

### Week 4: Connection Form Redesign

#### Day 16-18: Update FormConnection.xaml

**File: `DynamicsCrm.DevKit/Lib/Forms/FormConnection.xaml`**

Update the connection type section:

```xaml
<ComboBox x:Name="comboBoxType" Grid.Row="0" Grid.Column="1" Margin="0,0,0,5" 
          SelectionChanged="ComboBoxType_SelectionChanged">
    <ComboBoxItem Name="Interactive" IsSelected="True">Interactive (Browser)</ComboBoxItem>
    <ComboBoxItem Name="DeviceCode">Device Code (Headless)</ComboBoxItem>
    <ComboBoxItem Name="ClientSecret">Client Secret (App)</ComboBoxItem>
    <ComboBoxItem Name="ClientCertificate">Client Certificate</ComboBoxItem>
    <ComboBoxItem Name="ManagedIdentity">Managed Identity (Azure)</ComboBoxItem>
    <ComboBoxItem Name="DefaultAzureCredential">Azure Credential Chain</ComboBoxItem>
    <ComboBoxItem Name="FromPac">PAC CLI Profile</ComboBoxItem>
    <ComboBoxItem Name="OAuth">Username/Password (Legacy)</ComboBoxItem>
    <ComboBoxItem Name="AD">Active Directory</ComboBoxItem>
</ComboBox>

<!-- Dynamic fields container -->
<StackPanel x:Name="dynamicFieldsContainer" Grid.Row="7" Grid.ColumnSpan="2">
    <!-- Fields will be added/removed dynamically based on auth type -->
</StackPanel>
```

Add URL detection button:

```xaml
<Button x:Name="buttonDetectUrl" Grid.Row="2" Grid.Column="1" 
        Content="Detect" Width="60" Height="25" 
        HorizontalAlignment="Right" Margin="5,0,0,0"
        Click="ButtonDetectUrl_Click"/>
```

#### Day 19-20: Update FormConnection.xaml.cs

**File: `DynamicsCrm.DevKit/Lib/Forms/FormConnection.xaml.cs`**

```csharp
private void ComboBoxType_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    if (sender is not ComboBox comboBox || comboBox.SelectedItem == null)
        return;

    var selectedType = ((ComboBoxItem)comboBox.SelectedItem).Name;
    
    // Clear dynamic fields
    dynamicFieldsContainer.Children.Clear();
    
    // Add fields based on type
    switch (selectedType)
    {
        case "Interactive":
        case "DeviceCode":
            AddOptionalClientIdField();
            AddOptionalTenantIdField();
            break;
            
        case "ClientSecret":
            AddRequiredClientIdField();
            AddRequiredClientSecretField();
            AddOptionalTenantIdField();
            break;
            
        case "ClientCertificate":
            AddRequiredClientIdField();
            AddCertificateFields();
            break;
            
        case "ManagedIdentity":
            AddManagedIdentityFields();
            break;
            
        case "DefaultAzureCredential":
            AddOptionalClientIdField();
            AddInfoText("Will try multiple auth methods automatically");
            break;
            
        case "FromPac":
            AddPacProfileDropdown();
            break;
            
        case "OAuth":
            AddUsernamePasswordFields();
            break;
            
        case "AD":
            AddADFields();
            break;
    }
}

private async void ButtonDetectUrl_Click(object sender, RoutedEventArgs e)
{
    try
    {
        progressBar.Visibility = Visibility.Visible;
        
        var solutionFolder = await VsixHelper.GetSolutionFolderAsync();
        var detectedUrl = await ProjectUrlDetector.DetectProjectUrlAsync(solutionFolder);
        
        if (!string.IsNullOrEmpty(detectedUrl))
        {
            textboxUrl.Text = detectedUrl;
            await VS.MessageBox.ShowAsync($"Detected URL: {detectedUrl}");
        }
        else
        {
            await VS.MessageBox.ShowWarningAsync("Could not auto-detect environment URL");
        }
    }
    catch (Exception ex)
    {
        await VS.MessageBox.ShowErrorAsync($"Error detecting URL: {ex.Message}");
    }
    finally
    {
        progressBar.Visibility = Visibility.Hidden;
    }
}
```

### Week 5: Connection Manager & Health Indicators

#### Day 21-23: Connection Manager Window

**File: `DynamicsCrm.DevKit/Lib/Forms/FormConnectionManager.xaml`**

```xaml
<forms:BaseDialogWindow x:Class="DynamicsCrm.DevKit.Lib.Forms.FormConnectionManager"
        WindowStartupLocation="CenterScreen" 
        Width="800" Height="600"
        Title="Connection Manager">
    <Grid>
        <Grid.RowDefinitions>
            <RowDefinition Height="Auto"/>
            <RowDefinition Height="*"/>
            <RowDefinition Height="Auto"/>
        </Grid.RowDefinitions>
        
        <!-- Toolbar -->
        <ToolBar Grid.Row="0">
            <Button Content="New Connection" Click="ButtonNew_Click"/>
            <Button Content="Edit" Click="ButtonEdit_Click"/>
            <Button Content="Delete" Click="ButtonDelete_Click"/>
            <Separator/>
            <Button Content="Test Selected" Click="ButtonTest_Click"/>
            <Button Content="Test All" Click="ButtonTestAll_Click"/>
            <Separator/>
            <Button Content="Clear Token Cache" Click="ButtonClearCache_Click"/>
        </ToolBar>
        
        <!-- Connection List -->
        <DataGrid Grid.Row="1" x:Name="connectionsGrid" 
                  AutoGenerateColumns="False" 
                  SelectionMode="Single">
            <DataGrid.Columns>
                <DataGridTextColumn Header="Status" Width="50" Binding="{Binding StatusIcon}"/>
                <DataGridTextColumn Header="Name" Width="150" Binding="{Binding Name}"/>
                <DataGridTextColumn Header="URL" Width="300" Binding="{Binding Url}"/>
                <DataGridTextColumn Header="Type" Width="120" Binding="{Binding Type}"/>
                <DataGridTextColumn Header="Last Tested" Width="150" Binding="{Binding LastTested}"/>
            </DataGrid.Columns>
        </DataGrid>
        
        <!-- Status Bar -->
        <StatusBar Grid.Row="2">
            <StatusBarItem>
                <TextBlock x:Name="statusText" Text="Ready"/>
            </StatusBarItem>
        </StatusBar>
    </Grid>
</forms:BaseDialogWindow>
```

**File: `DynamicsCrm.DevKit/Lib/ConnectionHealth.cs`**

```csharp
public class ConnectionHealth
{
    public string Name { get; set; }
    public string Url { get; set; }
    public string Type { get; set; }
    public string StatusIcon { get; set; }
    public DateTime? LastTested { get; set; }
    public bool? LastTestSuccess { get; set; }
    
    public static string GetStatusIcon(CrmConnection connection)
    {
        if (!connection.LastTestSuccess.HasValue)
            return "○"; // Never tested
        
        return connection.LastTestSuccess.Value ? "●" : "⚠";
    }
    
    public static async Task<(bool success, string error)> TestConnectionAsync(CrmConnection connection)
    {
        try
        {
            var (client, error) = await Helper.CreateServiceClientWithErrorAsync(connection);
            
            if (client != null && client.IsReady)
            {
                connection.LastTested = DateTime.Now;
                connection.LastTestSuccess = true;
                connection.LastTestError = null;
                return (true, null);
            }
            else
            {
                connection.LastTested = DateTime.Now;
                connection.LastTestSuccess = false;
                connection.LastTestError = error;
                return (false, error);
            }
        }
        catch (Exception ex)
        {
            connection.LastTested = DateTime.Now;
            connection.LastTestSuccess = false;
            connection.LastTestError = ex.Message;
            return (false, ex.Message);
        }
    }
}
```

**Testing**:
- [ ] Test UI rendering for each connection type
- [ ] Test URL auto-detection
- [ ] Test connection manager operations
- [ ] Validate UX flow

## Phase 4: Documentation (Weeks 5-6)

### Week 6: Create Documentation

#### Day 24-26: User Guides

Create these documentation files:

**File: `v4/docs/CONNECTION_TYPES.md`**
- Overview of each connection type
- Use cases for each type
- Security considerations
- Best practices

**File: `v4/docs/AUTHENTICATION_GUIDE.md`**
- Step-by-step setup for each auth type
- Screenshots of VSIX UI
- CLI examples
- Troubleshooting common issues

**File: `v4/docs/MIGRATION_GUIDE.md`**
- How to migrate from old to new connection types
- Backward compatibility information
- Breaking changes (if any)
- Migration scripts

**File: `v4/docs/TROUBLESHOOTING.md`**
- Common error messages and solutions
- Connection test failures
- Token cache issues
- Certificate problems

#### Day 27-30: Update Existing Documentation

**File: `v4/DynamicsCrm.DevKit.Cli/docs/README.md`**
- Add new authentication sections
- Update examples
- Add new command reference

## Phase 5: Testing & Refinement (Weeks 6-7)

### Week 7: Comprehensive Testing

#### Day 31-35: Testing Checklist

**Unit Tests**:
- [ ] Connection string building for all types
- [ ] Connection string parsing for all types
- [ ] Encryption/decryption
- [ ] Token caching
- [ ] Validation logic

**Integration Tests**:
- [ ] ServiceClient creation for each auth type
- [ ] Auto-detection from various sources
- [ ] PAC CLI integration
- [ ] Connection health checks

**UI Tests** (Manual):
- [ ] Form rendering for each connection type
- [ ] Field validation
- [ ] Connection testing
- [ ] Connection manager operations
- [ ] URL auto-detection

**CLI Tests**:
- [ ] Command-line argument parsing
- [ ] Connection from named profile
- [ ] Auto-detection
- [ ] Connection management commands
- [ ] Each deployment type with new auth

**Security Tests**:
- [ ] Token storage encryption
- [ ] Password encryption
- [ ] Certificate handling
- [ ] No credentials in logs

**Performance Tests**:
- [ ] Connection time for each type
- [ ] Token cache performance
- [ ] UI responsiveness

**Compatibility Tests**:
- [ ] Old connection files still work
- [ ] Mix of old and new connection types
- [ ] Upgrade scenarios

#### Day 36-37: Bug Fixes & Polish

- Fix identified issues
- Improve error messages
- Enhance user feedback
- Optimize performance

## Deliverables Checklist

### Code
- [ ] All connection builders implemented
- [ ] CLI updates complete
- [ ] VSIX updates complete
- [ ] All tests passing
- [ ] Code review completed

### Documentation
- [ ] CONNECTION_TYPES.md
- [ ] AUTHENTICATION_GUIDE.md
- [ ] MIGRATION_GUIDE.md
- [ ] TROUBLESHOOTING.md
- [ ] CLI README updated
- [ ] Release notes prepared

### Quality
- [ ] Security audit passed
- [ ] Performance benchmarks met
- [ ] Backward compatibility verified
- [ ] User acceptance testing completed

## Dependencies to Add

Add these NuGet packages to the projects:

**DynamicsCrm.DevKit.Shared.csproj**:
```xml
<PackageReference Include="Azure.Identity" Version="1.10.4" />
<PackageReference Include="System.Security.Cryptography.ProtectedData" Version="8.0.0" />
```

**DynamicsCrm.DevKit.Cli.csproj**:
```xml
<PackageReference Include="Azure.Identity" Version="1.10.4" />
```

**DynamicsCrm.DevKit.csproj**:
```xml
<PackageReference Include="Azure.Identity" Version="1.10.4" />
```

## Version Control Strategy

1. **Feature Branch**: `feature/connection-types-v4`
2. **Commit Strategy**: Small, focused commits for each component
3. **Pull Request**: Comprehensive PR with all changes
4. **Review**: Code review by team before merge

## Risk Mitigation

1. **Breaking Changes**: 
   - Maintain backward compatibility
   - Version migration if needed
   - Clear deprecation warnings

2. **Security Issues**:
   - Security review before release
   - Penetration testing for auth flows
   - Secure defaults

3. **User Experience**:
   - User testing with real developers
   - Feedback loop for UI improvements
   - Clear documentation

## Success Criteria

- [ ] All 9 connection types working
- [ ] CLI supports all auth types
- [ ] VSIX supports all auth types
- [ ] Auto-detection working
- [ ] PAC CLI integration working
- [ ] Documentation complete
- [ ] Tests passing (>95% coverage)
- [ ] Security audit passed
- [ ] Performance acceptable (<2s connection time)
- [ ] Zero breaking changes for existing users

---

**Last Updated**: 2025-01-15
**Version**: 1.0
**Status**: Ready for Implementation

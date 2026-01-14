# Connection Types - Testing Guide

> **Purpose**: Guide for AI agents to test connection type implementations  
> **Test Profile**: `07-DEVKITV4.Server`

---

## 📂 Phase Test Files

Mỗi phase có file test riêng trong folder `tests/`:

| Phase | File | Status |
|-------|------|--------|
| Phase 1 | [tests/phase1.md](tests/phase1.md) | ✅ Complete |
| Phase 2 | [tests/phase2.md](tests/phase2.md) | 🔜 TODO |
| Phase 3 | [tests/phase3.md](tests/phase3.md) | 🔜 TODO |
| Phase 4 | [tests/phase4.md](tests/phase4.md) | 🔜 TODO |

**⚠️ AI Agents**: Khi hoàn thành phase, hãy cuộn xuống cuối file phaseX.md để xem lệnh verify!

---

## 🧪 Testing Protocol

This document provides **step-by-step instructions** for AI agents to test connection type implementations. The primary test profile is `07-DEVKITV4.Server`.

---

## 📋 Prerequisites

Before testing, ensure:
1. ✅ Workspace is at `d:\github\Dynamics-Crm-DevKit\v5`
2. ✅ .NET SDK is installed
3. ✅ Valid Dataverse environment credentials available

---

## 🔧 Build Commands

### Step 1: Kill Running CLI Process
```powershell
taskkill /F /IM "DynamicsCrm.DevKit.Cli.exe" 2>$null
```

### Step 2: Build CLI in Release Mode
```powershell
dotnet build --configuration Release "D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj"
```

### Step 3: Verify Build Success
- Check for "Build succeeded" message
- Verify no errors in output
- Note the output path: `D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli\bin\Release\net48\devkit.exe`

---

## 📍 Test Profile Location

**File**: `d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli\Properties\launchSettings.json`

### Reading Profile `07-DEVKITV4.Server`

1. Read the `launchSettings.json` file
2. Find the profile named `07-DEVKITV4.Server`
3. Extract `commandLineArgs` and `workingDirectory`
4. Construct the full command

### Profile Structure Example
```json
{
  "profiles": {
    "07-DEVKITV4.Server": {
      "commandName": "Project",
      "commandLineArgs": "server --url \"https://...\" --conn \"...\" ...",
      "workingDirectory": "D:\\github\\..."
    }
  }
}
```

---

## 🚀 Running Tests

### Method 1: Using dotnet run
```powershell
cd "D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli"
dotnet run --configuration Release -- [commandLineArgs from profile]
```

### Method 2: Direct Execution
```powershell
cd "[workingDirectory from profile]"
"D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli\bin\Release\net48\devkit.exe" [commandLineArgs from profile]
```

---

## ✅ Test Scenarios

### Scenario 1: OAuth Authentication (Existing)
```powershell
devkit server --url "https://org.crm.dynamics.com" --conn "AuthType=OAuth;Url=...;Username=...;Password=...;AppId=...;RedirectUri=...;LoginPrompt=Auto;" --json "DynamicsCrm.DevKit.Cli.json" --profile default
```

**Expected Result**: 
- CLI connects successfully
- Plugins/workflows deploy correctly
- No authentication errors

### Scenario 2: ClientSecret Authentication (Existing)
```powershell
devkit server --url "https://org.crm.dynamics.com" --conn "AuthType=ClientSecret;Url=...;ClientId=...;ClientSecret=...;" --json "DynamicsCrm.DevKit.Cli.json" --profile default
```

**Expected Result**: 
- CLI connects using service principal
- No interactive prompts

### Scenario 3: Interactive Authentication (Phase 2)
```powershell
devkit server --url "https://org.crm.dynamics.com" --auth Interactive --json "DynamicsCrm.DevKit.Cli.json" --profile default
```

**Expected Result**: 
- Browser opens for authentication
- User completes login
- CLI continues after authentication
- Token is cached for future use

### Scenario 4: DeviceCode Authentication (Phase 2)
```powershell
devkit server --url "https://org.crm.dynamics.com" --auth DeviceCode --json "DynamicsCrm.DevKit.Cli.json" --profile default
```

**Expected Result**: 
- CLI displays device code and URL
- User opens URL and enters code
- CLI continues after authentication
- Output includes: "To sign in, use a web browser to open..."

### Scenario 5: ClientCertificate Authentication (Phase 3)
```powershell
devkit server --url "https://org.crm.dynamics.com" --auth ClientCertificate --clientid "..." --cert "C:\path\to\cert.pfx" --certpass "..." --json "DynamicsCrm.DevKit.Cli.json" --profile default
```

**Expected Result**: 
- CLI authenticates using certificate
- No interactive prompts
- Certificate validation succeeds

### Scenario 6: ManagedIdentity Authentication (Phase 3)
> ⚠️ This test requires running on an Azure resource with managed identity enabled

```powershell
devkit server --url "https://org.crm.dynamics.com" --auth ManagedIdentity --json "DynamicsCrm.DevKit.Cli.json" --profile default
```

**Expected Result**: 
- CLI authenticates using system-assigned identity
- No credentials required

### Scenario 7: DefaultAzureCredential Authentication (Phase 3)
```powershell
devkit server --url "https://org.crm.dynamics.com" --auth DefaultAzureCredential --json "DynamicsCrm.DevKit.Cli.json" --profile default
```

**Expected Result**: 
- CLI tries multiple auth methods
- Uses first successful method
- Works in both local dev and Azure

### Scenario 8: FromPac Authentication (Phase 4)
> ℹ️ Requires PAC CLI installed with active auth profile

```powershell
devkit server --auth FromPac --json "DynamicsCrm.DevKit.Cli.json" --profile default
```

**Expected Result**: 
- CLI reads PAC CLI auth profile
- Uses existing PAC authentication
- No additional login required

---

## 🔍 Verification Checklist

After each test, verify:

### Connection Success
- [ ] "Connected to [org name]" message appears
- [ ] No authentication errors
- [ ] No connection timeout

### Backward Compatibility
- [ ] Existing OAuth connections still work
- [ ] Existing ClientSecret connections still work
- [ ] Existing AD connections still work
- [ ] Existing JSON configurations are valid

### Error Handling
- [ ] Invalid credentials show clear error message
- [ ] Missing parameters show usage help
- [ ] Timeout shows appropriate message

---

## 📊 Test Results Template

When documenting test results:

```markdown
## Test Results - [Date]

### Environment
- Dataverse URL: [url]
- Auth Type: [type]
- CLI Version: [version]

### Results
| Scenario | Status | Notes |
|----------|--------|-------|
| OAuth | ✅/❌ | ... |
| ClientSecret | ✅/❌ | ... |
| Interactive | ✅/❌ | ... |
| DeviceCode | ✅/❌ | ... |
| ClientCertificate | ✅/❌ | ... |
| ManagedIdentity | ✅/❌ | ... |
| DefaultAzureCredential | ✅/❌ | ... |
| FromPac | ✅/❌ | ... |

### Issues Found
1. [Issue description]
2. [Issue description]

### Notes
- [Additional observations]
```

---

## 🚨 Common Issues & Solutions

### Issue: CLI not found
**Solution**: Build the CLI first using the build commands above.

### Issue: Authentication timeout
**Solution**: Increase timeout in connection string or check network connectivity.

### Issue: Certificate not found
**Solution**: Verify certificate path and ensure proper permissions.

### Issue: PAC CLI not installed
**Solution**: Install PAC CLI: `dotnet tool install --global Microsoft.PowerApps.CLI.Tool`

### Issue: Managed identity not available
**Solution**: This only works on Azure resources with managed identity enabled.

---

## 📝 Notes for AI Agents

When implementing connection types:

1. **Always build before testing**
2. **Use Release configuration** for accurate testing
3. **Check profile 07-DEVKITV4.Server** for correct arguments
4. **Document any issues** encountered
5. **Update PHASED_IMPLEMENTATION_PLAN.md** with test results

---

**Document Version**: 1.0  
**Created**: 2026-01-13  
**Purpose**: AI Agent Testing Guide

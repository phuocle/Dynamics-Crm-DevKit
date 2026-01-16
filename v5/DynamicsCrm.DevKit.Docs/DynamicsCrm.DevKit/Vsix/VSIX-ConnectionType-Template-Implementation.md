# Console Project Template - Connection Types Implementation

## Status Tracking

| Connection Type  | Test Project Fix | Embedded Resource | VSIX Integration | Status               |
| ---------------- | ---------------- | ----------------- | ---------------- | -------------------- |
| **ClientSecret** | ✅ Done           | ✅ Done            | ✅ Done           | ✅ **Completed**      |
| **OAuth**        | ✅ Done           | ✅ Done            | ✅ Done           | ✅ **Completed**      |
| Interactive      | ✅ Done           | ✅ Done            | ✅ Done           | ✅ **Completed**      |
| DeviceCode       | ⏸️ Skipped        | ⏸️ Skipped         | ⏸️ Skipped        | ⏸️ **SDK Limitation** |
| FromPac          | ⏸️ Skipped        | ⏸️ Skipped         | ⏸️ Skipped        | ⏸️ **SDK Limitation** |
| **AD**           | ✅ Done           | ✅ Done            | ✅ Done           | ✅ **Completed**      |

> **Last Completed:** AD
> **Currently Working On:** Done


---

## Problem Statement

The current `02.ConsoleProjectTemplate` uses a **generic multi-auth** approach:
- Single `App.cs` with switch statement for all auth types
- Generic `UserName`/`Password` config keys
- Confusing mapping: `UserName` → `ClientId`, `Password` → `ClientSecret`

**Solution:** Create **connection-type-specific** `App.cs` and `App.config` files as embedded resources.

---

## ClientSecret - Fix Details

### What Was Fixed in Test Project

**Folder:** `DynamicsCrm.DevKit.Tests/TestNewCli/Dev.DevKit.Console.ClientSecret`

**App.config Changes:**
- Changed `UserName` → `ClientId`
- Changed `Password` → `ClientSecret`
- Use plaintext secret (not encrypted)

**App.cs Changes:**
- Simplified to ClientSecret-only code
- Removed generic switch statement
- Direct connection string: `AuthType=ClientSecret;Url={Url};ClientId={ClientId};ClientSecret={ClientSecret};`

### Key Learnings
1. **Use semantic key names**: `ClientId`/`ClientSecret` for ClientSecret auth
2. **Keep App.cs simple**: Each connection type has its own specific implementation
3. **Plaintext secrets in dev**: Console apps use plaintext (encrypted secrets are for VSIX/CLI storage)

---

## Embedded Resources Structure

Create files in `DynamicsCrm.DevKit.Shared/Resources/cs/console/`:

```
Resources/cs/console/
├── App.ClientSecret.cs
├── App.OAuth.cs
├── App.Interactive.cs
├── App.DeviceCode.cs
├── App.FromPac.cs
├── App.AD.cs
├── App.config.ClientSecret
├── App.config.OAuth
├── App.config.Interactive
├── App.config.DeviceCode
├── App.config.FromPac
└── App.config.AD
```

---

## Template Placeholders Mapping

| Connection Type | Config Key   | Placeholder           | Source                       |
| --------------- | ------------ | --------------------- | ---------------------------- |
| ClientSecret    | ClientId     | `$ClientIdValue$`     | `CrmConnection.ClientId`     |
| ClientSecret    | ClientSecret | `$ClientSecretValue$` | `CrmConnection.ClientSecret` |
| OAuth           | UserName     | `$UserNameValue$`     | `CrmConnection.UserName`     |
| OAuth           | Password     | `$PasswordValue$`     | `CrmConnection.Password`     |
| AD              | UserName     | `$UserNameValue$`     | `Domain\UserName` format     |
| AD              | Password     | `$PasswordValue$`     | `CrmConnection.Password`     |
| FromPac         | PacProfile   | `$PacProfileValue$`   | `CrmConnection.PacProfile`   |
| All             | Url          | `$UrlValue$`          | `CrmConnection.Url`          |

---

## VSIX Changes Required

### 1. Update `Replacement.cs`

Add connection-type-specific placeholders:

```csharp
public static void SetConnectionValues(Dictionary<string, string> replacements, CrmConnection crmConnection)
{
    replacements["$AuthTypeValue$"] = crmConnection.Type;
    replacements["$UrlValue$"] = crmConnection.Url;
    
    // Generic (backward compatibility)
    replacements["$UserNameValue$"] = crmConnection.UserName ?? string.Empty;
    replacements["$PasswordValue$"] = Helper.DecryptString(crmConnection.Password) ?? string.Empty;
    
    // ClientSecret-specific
    replacements["$ClientIdValue$"] = crmConnection.ClientId ?? string.Empty;
    replacements["$ClientSecretValue$"] = Helper.DecryptString(crmConnection.ClientSecret) ?? string.Empty;
    
    // FromPac-specific
    replacements["$PacProfileValue$"] = crmConnection.PacProfile ?? string.Empty;
}
```

### 2. Update `DynamicsCrm.DevKit.Shared.csproj`

```xml
<ItemGroup>
  <EmbeddedResource Include="Resources\cs\console\*.cs" />
  <EmbeddedResource Include="Resources\cs\console\*.config.*" />
</ItemGroup>
```

### 3. Add Resource Reading

```csharp
replacements["$App.cs$"] = await VsixHelper.ReadEmbeddedResourceAsync($"cs.console.App.{connectionType}.cs");
replacements["$App.config$"] = await VsixHelper.ReadEmbeddedResourceAsync($"cs.console.App.config.{connectionType}");
```

---

## Files to Modify

| File                                                         | Change                              |
| ------------------------------------------------------------ | ----------------------------------- |
| `DynamicsCrm.DevKit.Shared/Resources/cs/console/*`           | **NEW** - Create embedded resources |
| `DynamicsCrm.DevKit.Shared/DynamicsCrm.DevKit.Shared.csproj` | Add EmbeddedResource items          |
| `DynamicsCrm.DevKit/Lib/Replacement.cs`                      | Add new placeholders                |

---

## Testing Checklist

After implementation, verify by:
1. Build VSIX
2. Create Console project with each connection type
3. Verify `App.cs` and `App.config` have correct content
4. Build and run to verify WhoAmI works

---

## Verification Workflow

### Step 1: AI Fixed Project
- Folder: `Dev.DevKit.Console.ClientSecret` (manually fixed by AI)
- This is the reference implementation

### Step 2: VSIX Generated Project
- After VSIX code update, **ask USER to create** new project: `Dev.DevKit.Console.ClientSecret2`
- User creates this project using VSIX with ClientSecret connection type
- AI cannot create VSIX projects - must request user to do this

### Step 3: Comparison
AI can compare `.ClientSecret` (reference) vs `.ClientSecret2` (VSIX generated):
- Compare `App.cs` content
- Compare `App.config` content
- Both should be functionally equivalent

### Step 4: Verification
- Build and run `.ClientSecret2`
- Verify WhoAmI works
- If successful, mark connection type as ✅ Completed

> **Note:** This workflow applies to all connection types. Each will have a fixed version and a VSIX-generated version (e.g., `.OAuth` vs `.OAuth2`)


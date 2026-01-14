# FormConnection Dynamic Authentication - Implementation Guide

> **Last Updated**: 2026-01-14  
> **Status**: Implemented & Verified ✅  
> **Purpose**: Guide for AI to continue adding new authentication types

---

## ⚠️ QUAN TRỌNG - QUY TẮC BẮT BUỘC

> [!CAUTION]
> **Mã hóa Password/Secret khi lưu file**
> 
> Tất cả các giá trị password hoặc secret (như `Password`, `ClientSecret`, `CertificatePassword`, v.v.) **BẮT BUỘC phải được mã hóa** trước khi lưu vào file `DynamicsCrm.DevKit.json`.
> 
> **Sử dụng**: `Helper.EncryptString(plainText)` để mã hóa
> 
> **Ví dụ**:
> ```csharp
> // ĐÚNG - Mã hóa trước khi lưu
> crmConnection.ClientSecret = Helper.EncryptString(crmConnection.ClientSecret);
> 
> // SAI - Lưu plaintext (KHÔNG ĐƯỢC LÀM)
> crmConnection.ClientSecret = plaintextSecret; // ❌ NGUY HIỂM!
> ```

---

## 1. Architecture Overview

```
┌──────────────────────────────────────────────────────────────────┐
│                      FormConnection.xaml                          │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │ comboBoxType → Populated from ConnectionTypeRegistry        │  │
│  │ Dynamic Fields → Type, Name, Url, ClientId, ClientSecret   │  │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────────┐
│                   ConnectionTypeRegistry                          │
│  - GetSupportedTypes(vsixOnly: true)                              │
│  - Returns list of IConnectionTypeMetadata                        │
└──────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────────┐
│                  ConnectionBuilderFactory                         │
│  - GetBuilder(type) → IConnectionBuilder                          │
│  - IsSupported(type) → bool                                       │
└──────────────────────────────────────────────────────────────────┘
```

---

## 2. Key Files and Their Purposes

### Metadata Infrastructure (Shared Project)

| File                           | Purpose                                                   |
| ------------------------------ | --------------------------------------------------------- |
| `IConnectionTypeMetadata.cs`   | Interface defining metadata for each auth type            |
| `ConnectionFieldDefinition.cs` | Defines fields (FieldName, Label, IsRequired, IsPassword) |
| `ConnectionTypeRegistry.cs`    | Registry returning supported types for VSIX               |
| `ClientSecretTypeMetadata.cs`  | Metadata for ClientSecret: Url, ClientId, ClientSecret    |

### Connection Builders (Shared Project)

| File                               | Purpose                                                    |
| ---------------------------------- | ---------------------------------------------------------- |
| `IConnectionBuilder.cs`            | Interface with `CreateServiceClientAsync`, `ValidateAsync` |
| `ConnectionBuilderFactory.cs`      | Factory returning correct builder by type                  |
| `ClientSecretConnectionBuilder.cs` | Builds ServiceClient for ClientSecret auth                 |

### VSIX Form (DynamicsCrm.DevKit Project)

| File                     | Purpose                                                  |
| ------------------------ | -------------------------------------------------------- |
| `FormConnection.xaml`    | UI with static fields for ClientSecret                   |
| `FormConnection.xaml.cs` | Loads types from registry, handles save/load             |
| `VsixHelper.cs`          | `CreateServiceClientAsync`, `SaveDevKitConnectionsAsync` |

---

## 3. JSON Serialization Rules

### Using System.Text.Json (NOT SimpleJson)

```csharp
// READING (GetDevKitConnectionsAsync)
var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
var devKitConnections = JsonSerializer.Deserialize<DevKitConnections>(json, options);

// WRITING (SaveDevKitConnectionsAsync)
var options = new JsonSerializerOptions
{
    WriteIndented = true,
    DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
};
var json = JsonSerializer.Serialize(connections, options);
```

### Migration Logic (Legacy → New Format)

When saving, automatically migrate:
- `UserName` → `ClientId` (if ClientId is empty)
- `Password` → `ClientSecret` (if ClientSecret is empty)
- Then clear `UserName` and `Password`

```csharp
// In SaveDevKitConnectionsAsync
foreach (var conn in connections.CrmConnections)
{
    if (conn.Type == "ClientSecret")
    {
        // Migrate UserName -> ClientId if needed
        if (string.IsNullOrEmpty(conn.ClientId) && !string.IsNullOrEmpty(conn.UserName))
        {
            conn.ClientId = conn.UserName;
            conn.UserName = null;
        }
        // Migrate Password -> ClientSecret if needed
        if (string.IsNullOrEmpty(conn.ClientSecret) && !string.IsNullOrEmpty(conn.Password))
        {
            conn.ClientSecret = conn.Password;
            conn.Password = null;
        }
    }
}
```

---

## 4. CrmConnection Model Rules

### DO NOT add default values to properties
Properties with default values will be serialized even when null strategy is used.

```csharp
// WRONG - Will be serialized even if not needed
public string CertificateStoreLocation { get; set; } = "CurrentUser";

// CORRECT - Will not be serialized if null
public string CertificateStoreLocation { get; set; }
```

### Required fields per connection type

| Type         | Required Fields                         |
| ------------ | --------------------------------------- |
| ClientSecret | Name, Url, Type, ClientId, ClientSecret |
| OAuth        | Name, Url, Type, UserName, Password     |

---

## 5. Adding a New Authentication Type

### Step 1: Create Type Metadata

Create file: `DynamicsCrm.DevKit.Shared/ConnectionBuilder/{TypeName}TypeMetadata.cs`

```csharp
public class InteractiveTypeMetadata : IConnectionTypeMetadata
{
    public string Type => "Interactive";
    public string DisplayName => "Interactive Browser";
    public string Description => "...";
    public bool SupportedInVsix => true;  // Set to true for VSIX UI
    
    public IReadOnlyList<ConnectionFieldDefinition> Fields => new[]
    {
        new ConnectionFieldDefinition
        {
            FieldName = "Url",
            Label = "Dynamics 365 URL",
            IsRequired = true,
            IsPassword = false,
            DisplayOrder = 1
        },
        // Add more fields as needed
    };
}
```

### Step 2: Register in ConnectionTypeRegistry

```csharp
// In ConnectionTypeRegistry.cs
private static readonly IConnectionTypeMetadata[] _allTypes = new IConnectionTypeMetadata[]
{
    new ClientSecretTypeMetadata(),
    new InteractiveTypeMetadata(),  // Add new type here
};
```

### Step 3: Ensure Connection Builder Exists

Verify `{TypeName}ConnectionBuilder.cs` exists in `ConnectionBuilder` folder.

### Step 4: Update FormConnection.xaml (if fields differ)

Currently the form has static fields for ClientSecret. If new type needs different fields:
1. Add fields to XAML
2. Add visibility logic in `ComboBoxType_SelectionChanged`
3. Update `CreateCrmConnectionFromInput` to populate correct properties

### Step 5: Add to DynamicsCrm.DevKit.Shared.projitems

```xml
<Compile Include="$(MSBuildThisFileDirectory)ConnectionBuilder\{TypeName}TypeMetadata.cs" />
```

### Step 6: Build and Test

```powershell
& "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe" "DynamicsCrm.DevKit.slnx" /p:Configuration=Debug /t:rebuild
```

---

## 6. Current Status (2026-01-14)

### Implemented
- ✅ ClientSecret authentication type
- ✅ OAuth (Username/Password) authentication type
- ✅ Dynamic type loading from ConnectionTypeRegistry
- ✅ Legacy format (UserName/Password) backward compatibility
- ✅ Migration to new format on save
- ✅ System.Text.Json with null ignoring
- ✅ No default values in CrmConnection properties
- ✅ Dynamic field visibility based on selected type

### Form Fields (ClientSecret)
- Type (dropdown)
- Name
- Url
- Client ID
- Client Secret

### Form Fields (OAuth)
- Type (dropdown)
- Name
- Url
- Username
- Password

### NOT Implemented Yet
- Interactive browser auth
- DeviceCode auth
- AD auth
- Certificate auth
- Managed Identity
- Dynamic field generation based on metadata

---

## 7. Testing Checklist

Before considering a new auth type complete:

- [ ] Type appears in dropdown
- [ ] All required fields display
- [ ] Validation messages work
- [ ] Connection test succeeds
- [ ] Connection saves to JSON correctly
- [ ] Connection loads from JSON correctly
- [ ] Legacy format migrates correctly (if applicable)
- [ ] No null values saved to JSON
- [ ] Password/Secret encrypted before save

---

## 8. File Locations Quick Reference

```
v5/
├── DynamicsCrm.DevKit/
│   └── Lib/
│       ├── Forms/
│       │   ├── FormConnection.xaml          # UI
│       │   └── FormConnection.xaml.cs       # Code-behind
│       └── VsixHelper.cs                     # JSON save/load, CreateServiceClient
│
├── DynamicsCrm.DevKit.Shared/
│   ├── ConnectionBuilder/
│   │   ├── IConnectionBuilder.cs             # Interface
│   │   ├── IConnectionTypeMetadata.cs        # Metadata interface
│   │   ├── ConnectionBuilderFactory.cs       # Factory
│   │   ├── ConnectionTypeRegistry.cs         # Registry
│   │   ├── ClientSecretConnectionBuilder.cs  # Builder
│   │   └── ClientSecretTypeMetadata.cs       # Metadata
│   │
│   ├── Models/
│   │   ├── CrmConnection.cs                  # Connection model
│   │   └── DevKitConnections.cs              # Connections list
│   │
│   └── Helper.cs                             # EncryptString, DecryptString
│
└── DynamicsCrm.DevKit.Docs/
    └── DynamicsCrm.DevKit/
        ├── FormConnection-Refactoring-Plan.md    # Original plan
        └── FormConnection-Implementation-Guide.md # THIS FILE
```

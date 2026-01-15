# FormConnection Dynamic Authentication - Implementation Guide
 
> **Last Updated**: 2026-01-15
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
>
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
│                      FormConnection.xaml                         │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │ comboBoxType → Populated from ConnectionTypeRegistry       │  │
│  │ Dynamic Fields → Type, Name, Url, ClientId, ClientSecret   │  │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────────┐
│                   ConnectionTypeRegistry                         │
│  - GetSupportedTypes(vsixOnly: true)                             │
│  - Returns list of IConnectionTypeMetadata                       │
└──────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────────┐
│                  ConnectionBuilderFactory                        │
│  - GetBuilder(type) → IConnectionBuilder                         │
│  - IsSupported(type) → bool                                      │
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
| `DeviceCodeTypeMetadata.cs`    | Metadata for DeviceCode: Url only                         |
 
### Connection Builders (Shared Project)
 
| File                               | Purpose                                                    |
| ---------------------------------- | ---------------------------------------------------------- |
| `IConnectionBuilder.cs`            | Interface with `CreateServiceClientAsync`, `ValidateAsync` |
| `ConnectionBuilderFactory.cs`      | Factory returning correct builder by type                  |
| `ClientSecretConnectionBuilder.cs` | Builds ServiceClient for ClientSecret auth                 |
| `DeviceCodeConnectionBuilder.cs`   | Builds ServiceClient for DeviceCode auth (Async callback)  |
 
### VSIX Form (DynamicsCrm.DevKit Project)
 
| File                     | Purpose                                         |
| ------------------------ | ----------------------------------------------- |
| `FormConnection.xaml`    | UI with static fields for ClientSecret          |
| `FormConnection.xaml.cs` | Loads types from registry, handles save/load    |
| `VsixHelper.cs`          | `CreateServiceClientAsync` (Supports callbacks) |
 
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
 
---
 
## 4. Special Handling: DeviceCode Flow
 
Unlike other flows, **DeviceCode** authentication requires user interaction OUTSIDE the VSIX (in a browser) but needs to display a Code INSIDE the VSIX.
 
### The Callback Pattern
 
`DeviceCodeConnectionBuilder` accepts an `Action<string> deviceCodeCallback` parameter.
The VSIX (`FormConnection.xaml.cs`) implements this callback to:
 
1. **Unblock UI**: Updates `textboxDeviceUrl` and `textboxDeviceCode` on the Main Thread.
2. **Keep Enabled**: Ensures textboxes are enabled (Read-Only) so users can copy the code.
3. **Lock State**: Disables buttons/dropdowns to prevent state changes during authentication.
 
### The "OK" Button Handler
 
When a user loads a saved DeviceCode connection and clicks "OK", the token might be expired. `ButtonOK_ClickAsync` must replicate the logic of `CheckConnection`:
 
- Pass the callback to `VsixHelper.CreateServiceClientAsync`.
- Enable the UI to show the code if re-authentication is required.
 
---
 
## 5. Adding a New Authentication Type
 
### Step 1: Create Type Metadata
Create file: `DynamicsCrm.DevKit.Shared/ConnectionBuilder/Metadata/{TypeName}TypeMetadata.cs`
 
### Step 2: Register in ConnectionTypeRegistry
Add to `ConnectionTypeRegistry.cs`.
 
### Step 3: Ensure Connection Builder Exists
Verify `{TypeName}ConnectionBuilder.cs` exists.
 
### Step 4: Update FormConnection.xaml.cs (CRITICAL CHECKLIST)
 
> [!CAUTION]
> **ALL** these methods use switch statements and MUST be updated for each new type:
 
| Method                          | Purpose                         | Action for New Type                    |
| ------------------------------- | ------------------------------- | -------------------------------------- |
| `ComboBoxType_SelectionChanged` | Show/hide fields                | Add case +`Show{Type}Fields()` method  |
| `CreateCrmConnectionFromInput`  | Map UI → Model                  | Add case to set type-specific fields   |
| `IsValidAsync`                  | Validate input                  | Add case with type-specific validation |
| `UpdateExistingConnection`      | Update existing record          | Add case to set/clear fields           |
| `ClearUnusedFieldsForType`      | Clear unused fields before save | Add case to null unused fields         |
| `ButtonOK_ClickAsync`           | Handle special auth flow        | Add logic if type needs callbacks      |
 
---
 
## 6. Current Status (2026-01-15)
 
### Implemented
 
- ✅ ClientSecret authentication type
- ✅ OAuth (Username/Password) authentication type
- ✅ Interactive (Browser Sign-in) authentication type
- ✅ AD (Active Directory) authentication type
- ✅ DeviceCode (Remote/Headless) authentication type
- ✅ FromPac (PAC CLI Profile) - Uses ComboBox for profile selection
 
### Removed from Scope
 
- ~~Certificate auth~~ (Removed - Complexity not justified for VSIX/CLI use case)
- ~~Managed Identity~~ (Removed - Only works on Azure-hosted environments)
- ~~DefaultAzureCredential~~ (Removed - Too "magic", unpredictable authentication chain)
 
---

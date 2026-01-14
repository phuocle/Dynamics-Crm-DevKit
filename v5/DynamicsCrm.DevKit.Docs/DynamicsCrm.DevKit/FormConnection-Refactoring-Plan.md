# FormConnection Refactoring Plan

> **Document**: Analysis and Implementation Plan for FormConnection.xaml Modernization  
> **Created**: 2026-01-14  
> **Last Updated**: 2026-01-14  
> **Status**: OAuth Implemented ✅  
> **Author**: AI Assistant  

---

## 1. Executive Summary

This document outlines the plan to refactor `FormConnection.xaml` and `FormConnection.xaml.cs` to support dynamic loading of multiple authentication types instead of hard-coded values. The refactoring will:

1. **Remove hard-coded auth types** (AD, ClientSecret, OAuth) from XAML
2. **Dynamically load auth types** from `ConnectionBuilderFactory` at runtime
3. **Start with only ClientSecret** as per user requirement (Phase 1)
4. **Create extensible architecture** for future auth types
5. **Ensure backward compatibility** with existing `DynamicsCrm.DevKit.json` files

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
> 
> **Lý do**: Bảo vệ thông tin nhạy cảm của người dùng. File JSON có thể bị commit vào source control hoặc bị đọc bởi người không có quyền.

---

## 2. Current State Analysis

### 2.1 FormConnection.xaml (95 lines)

**Location**: [FormConnection.xaml](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit/Lib/Forms/FormConnection.xaml)

**Key UI Elements**:
| Element                     | Purpose                                            |
| --------------------------- | -------------------------------------------------- |
| `comboBoxSavedConnection`   | Displays saved connections from JSON               |
| `comboBoxType`              | **HARD-CODED** auth types: AD, ClientSecret, OAuth |
| `textboxName`               | Connection name                                    |
| `textboxUrl`                | Dynamics 365 URL                                   |
| `textboxUser`               | Username / Client ID (label changes per type)      |
| `textboxPassword`           | Password / Secret Value (label changes per type)   |
| `checkBoxDontSavePassword`  | OAuth-specific option                              |
| `buttonCheckConnection`     | Test and save connection                           |
| `buttonOK` / `buttonCancel` | Dialog actions                                     |

**Problem**: Lines 64-68 hard-code the auth types:
```xml
<ComboBox x:Name="comboBoxType" ...>
    <ComboBoxItem Name="AD">AD</ComboBoxItem>
    <ComboBoxItem Name="ClientSecret">ClientSecret</ComboBoxItem>
    <ComboBoxItem Name="OAuth">OAuth</ComboBoxItem>
</ComboBox>
```

### 2.2 FormConnection.xaml.cs (297 lines)

**Location**: [FormConnection.xaml.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit/Lib/Forms/FormConnection.xaml.cs)

**Key Methods**:
| Method                             | Purpose                                                      |
| ---------------------------------- | ------------------------------------------------------------ |
| `FormConnection_Loaded`            | Loads saved connections                                      |
| `LoadConnectionsAsync`             | Reads `DynamicsCrm.DevKit.json`                              |
| `ComboBoxType_SelectionChanged`    | **HARD-CODED** type-specific UI logic                        |
| `CreateCrmConnectionFromInput`     | Maps UI inputs to `CrmConnection` object                     |
| `SaveConnectionAsync`              | Saves connection with encrypted password                     |
| `IsValidAsync`                     | Validates input before connection test                       |
| `ButtonCheckConnection_ClickAsync` | Tests connection using `VsixHelper.CreateServiceClientAsync` |

**Problem Areas**:
1. **Lines 253-281**: Switch statement with hard-coded type handling
2. **Lines 217-223**: AD-specific validation (`domain\username` format)
3. **Lines 273-280**: OAuth-specific checkbox visibility logic

### 2.3 Existing Infrastructure (Already Built!)

The project already has a robust `ConnectionBuilder` infrastructure:

| File                               | Location | Purpose                                                            |
| ---------------------------------- | -------- | ------------------------------------------------------------------ |
| `IConnectionBuilder.cs`            | Shared   | Interface with `Type`, `CreateServiceClientAsync`, `ValidateAsync` |
| `ConnectionBuilderFactory.cs`      | Shared   | Factory returning builders for 9 auth types                        |
| `ClientSecretConnectionBuilder.cs` | Shared   | ClientSecret implementation                                        |
| Plus 10 other builders             | Shared   | AD, OAuth, Interactive, DeviceCode, etc.                           |

### 2.4 CrmConnection Model

**Location**: [CrmConnection.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Shared/Models/CrmConnection.cs)

Already supports all modern auth types with properties:
- Legacy: `Name`, `Url`, `UserName`, `Password`, `Type`
- ClientSecret: `ClientId`, `ClientSecret`, `TenantId`
- Certificate: `CertificatePath`, `CertificatePassword`, `CertificateThumbprint`
- Managed Identity: `ManagedIdentityClientId`
- PAC CLI: `PacProfile`
- Metadata: `LastTested`, `LastTestSuccess`, `CreatedAt`, `ModifiedAt`

---

## 3. Proposed Solution

### 3.1 Architecture Overview

```
┌──────────────────────────────────────────────────────────────────┐
│                      FormConnection.xaml                          │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │ comboBoxType → Populated at runtime from Registry          │  │
│  │ Dynamic Fields → Shows/hides based on selected type        │  │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                   ConnectionTypeRegistry                          │
│  - Returns list of supported connection types                     │
│  - Returns field metadata per type (labels, required fields)      │
│  - Filters types based on VSIX support                           │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                  ConnectionBuilderFactory                         │
│  - GetBuilder(type) → IConnectionBuilder                          │
│  - CreateServiceClientAsync for connection testing                │
└──────────────────────────────────────────────────────────────────┘
```

### 3.2 New Components

#### 3.2.1 IConnectionTypeMetadata Interface

```csharp
public interface IConnectionTypeMetadata
{
    string Type { get; }
    string DisplayName { get; }
    string Description { get; }
    bool SupportedInVsix { get; }
    IReadOnlyList<ConnectionFieldDefinition> Fields { get; }
}

public class ConnectionFieldDefinition
{
    public string FieldName { get; set; }      // e.g., "ClientId"
    public string Label { get; set; }           // e.g., "Client ID"
    public bool IsRequired { get; set; }
    public bool IsPassword { get; set; }        // Use PasswordBox
    public string Placeholder { get; set; }
    public int DisplayOrder { get; set; }
}
```

#### 3.2.2 ConnectionTypeRegistry

```csharp
public static class ConnectionTypeRegistry
{
    public static IReadOnlyList<IConnectionTypeMetadata> GetSupportedTypes(bool vsixOnly = false)
    {
        var types = new List<IConnectionTypeMetadata>();
        types.Add(new ClientSecretTypeMetadata());  // Phase 1: Only ClientSecret
        return vsixOnly ? types.Where(t => t.SupportedInVsix).ToList() : types;
    }
}
```

---

## 4. Implementation Steps

### Phase 1: ClientSecret Only (Current Sprint)

> **IMPORTANT**: Per user requirement: Remove AD and OAuth, keep only ClientSecret for now.

#### Step 1.1: Create Metadata Infrastructure

| File                           | Action                                 |
| ------------------------------ | -------------------------------------- |
| `IConnectionTypeMetadata.cs`   | NEW - Interface for type metadata      |
| `ConnectionFieldDefinition.cs` | NEW - Field definition model           |
| `ConnectionTypeRegistry.cs`    | NEW - Registry of supported types      |
| `ClientSecretTypeMetadata.cs`  | NEW - ClientSecret field configuration |

#### Step 1.2: Update FormConnection.xaml

- Remove lines 65-67 (ComboBoxItem elements for AD, ClientSecret, OAuth)
- Update comboBoxType with `DisplayMemberPath="DisplayName"`
- Remove checkBoxDontSavePassword (OAuth-specific)

#### Step 1.3: Update FormConnection.xaml.cs

- Add `LoadConnectionTypesAsync()` method
- Simplify `ComboBoxType_SelectionChanged` (remove AD/OAuth logic)
- Remove `CheckBoxDontSavePassword_Checked/Unchecked` handlers
- Remove AD validation from `IsValidAsync`
- Update `CreateCrmConnectionFromInput` to use `ClientId`/`ClientSecret`

#### Step 1.4: Update VsixHelper.CreateServiceClientAsync

```csharp
public static async Task<ServiceClient> CreateServiceClientAsync(CrmConnection crmConnection)
{
    var builder = ConnectionBuilderFactory.GetBuilder(crmConnection.Type);
    return await builder.CreateServiceClientAsync(crmConnection);
}
```

---

## 5. Proposed File Changes

### New Files (3)

| File                                                   | Purpose                      |
| ------------------------------------------------------ | ---------------------------- |
| `Shared/ConnectionBuilder/IConnectionTypeMetadata.cs`  | Interface + field definition |
| `Shared/ConnectionBuilder/ConnectionTypeRegistry.cs`   | Return supported types       |
| `Shared/ConnectionBuilder/ClientSecretTypeMetadata.cs` | ClientSecret fields config   |

### Modified Files (3)

| File                     | Changes                                        |
| ------------------------ | ---------------------------------------------- |
| `FormConnection.xaml`    | Remove hard-coded types, remove OAuth checkbox |
| `FormConnection.xaml.cs` | Load types dynamically, remove AD/OAuth code   |
| `VsixHelper.cs`          | Use ConnectionBuilderFactory                   |

---

## 6. DynamicsCrm.DevKit.json Compatibility

### Backward Compatibility Strategy

The `ClientSecretConnectionBuilder` handles both legacy and new formats:

| Scenario                                | Behavior                   |
| --------------------------------------- | -------------------------- |
| Old JSON with `UserName`/`Password`     | Works via fallback         |
| New JSON with `ClientId`/`ClientSecret` | Preferred path             |
| Mixed fields                            | New fields take precedence |

---

## 7. AI Template for Future Auth Types

### To Add a New Auth Type (e.g., Interactive)

1. **Create Type Metadata**: `InteractiveTypeMetadata.cs` implementing `IConnectionTypeMetadata`
2. **Register**: Add to `ConnectionTypeRegistry.GetSupportedTypes()`
3. **Verify Builder**: Ensure `InteractiveConnectionBuilder.cs` exists
4. **Test**: Build VSIX, verify type appears and works

---

## 8. Verification Checklist

### Build & Test

- [x] Run `/build-vsix` workflow
- [x] VSIX builds without errors
- [ ] Install and open FormConnection
- [x] ClientSecret in dropdown
- [x] OAuth in dropdown
- [x] All fields display correctly based on type
- [ ] Connection test works
- [ ] Save/load connection works
- [ ] Old JSON files don't crash

---

## 9. Implementation Progress

### Completed (2026-01-14)
1. ✅ ClientSecret authentication type
2. ✅ OAuth (Username/Password) authentication type
3. ✅ Dynamic type dropdown from ConnectionTypeRegistry
4. ✅ Field visibility toggle based on selected type
5. ✅ Type-specific validation
6. ✅ Encrypted Password/ClientSecret on save

### Pending
- Interactive browser auth
- DeviceCode auth
- AD auth
- Certificate auth

1. **Review this plan** - User approval required
2. **Create metadata classes** - New files in Shared project
3. **Refactor FormConnection** - Remove hard-coded types
4. **Build and test** - Follow `/build-vsix` workflow
5. **Document completion** - Update walkthrough

---

**Document Version**: 1.0  
**Last Updated**: 2026-01-14  
**Status**: Ready for Implementation

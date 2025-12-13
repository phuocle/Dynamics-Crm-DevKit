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

## Testing Strategy

- Unit tests for connection string building/parsing
- Integration tests for ServiceClient creation
- Manual testing with existing connections
- Backward compatibility verification

## Success Criteria

- All existing connections work unchanged
- Custom ClientId/TenantId supported
- Password encryption upgraded
- All tests pass

See full implementation details in main document.

---

**Document Version**: 1.0  
**Last Updated**: 2025-12-13

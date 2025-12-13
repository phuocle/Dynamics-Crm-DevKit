# Implementation Plan: ManagedIdentity

**Priority**: 6  
**Status**: New Implementation  
**Timeline**: See priority order document  
**Effort**: See priority order document  

---

## Overview

Azure managed identity for VM/App Service - zero credentials

## Reference Implementation

See `CONNECTION_TYPES_PRIORITY_ORDER.md` for detailed implementation specifications.

From Rnwood.Dataverse.Data.PowerShell, the pattern for ManagedIdentity:

```csharp
// Reference implementation pattern
// See https://github.com/rnwood/Rnwood.Dataverse.Data.PowerShell
```

## Key Implementation Points

### 1. Core Functionality
- Implement based on reference pattern
- Use Azure.Identity SDK where applicable
- Follow established connection builder pattern

### 2. CLI Integration
```powershell
DynamicsCrm.DevKit.Cli \
  /auth:ManagedIdentity \
  /url:"https://org.crm.dynamics.com" \
  /json:"..." /type:servers /profile:default
```

### 3. VSIX Integration
- Add to Type dropdown
- Implement dynamic form fields
- Add validation and testing

## Implementation Files

### New Files
- `v4/DynamicsCrm.DevKit.Shared/ConnectionBuilder/ManagedIdentityConnectionBuilder.cs`

### Modified Files  
- `v4/DynamicsCrm.DevKit.Cli/Program.cs`
- `v4/DynamicsCrm.DevKit/Lib/Forms/FormConnection.xaml.cs`

## Testing

- Unit tests for connection builder
- Integration tests with real environment
- Manual testing checklist

## Success Criteria

- [ ] Connection builder implemented
- [ ] CLI integration works
- [ ] VSIX integration works
- [ ] Documentation complete
- [ ] Tests pass

---

**Document Version**: 1.0  
**Last Updated**: 2025-12-13

**Note**: This is a summary plan. Refer to:
- `CONNECTION_TYPES_PRIORITY_ORDER.md` for detailed specs
- `CONNECTION_TYPES_IMPROVEMENT_PLAN.md` for architecture
- `CONNECTION_TYPES_IMPLEMENTATION_ROADMAP.md` for timeline
- Reference: https://github.com/rnwood/Rnwood.Dataverse.Data.PowerShell

# Implementation Plan: FromPac

**Priority**: 8  
**Status**: New Implementation  
**Timeline**: See priority order document  
**Effort**: See priority order document  

---

## Overview

PAC CLI integration - parse pac auth list

## Reference Implementation

See `CONNECTION_TYPES_PRIORITY_ORDER.md` for detailed implementation specifications.

From Rnwood.Dataverse.Data.PowerShell, the pattern for FromPac:

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
  /auth:FromPac \
  /url:"https://org.crm.dynamics.com" \
  /json:"..." /type:servers /profile:default
```

### 3. VSIX Integration
- Add to Type dropdown
- Implement dynamic form fields
- Add validation and testing

## Implementation Files

### New Files
- `v4/DynamicsCrm.DevKit.Shared/ConnectionBuilder/FromPacConnectionBuilder.cs`

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

## Testing

### Option 1: Automated Testing (AI-Guided Unit Tests)

**Test File**: `v4/DynamicsCrm.DevKit.Shared.Tests/FromPacConnectionTests.cs`

AI Prompt:
```
Create unit tests for FromPac connection:

1. Connection validation tests
2. Connection string building tests
3. ServiceClient creation tests
4. Error handling tests

Mock external dependencies.
Use async/await patterns.
```

**Example Test Structure**:
```csharp
[TestClass]
public class FromPacConnectionTests
{
    [TestMethod]
    public async Task CreateServiceClient_ValidConnection_Success()
    {
        // Arrange
        var connection = new CrmConnection
        {
            Type = "FromPac",
            Url = "https://test.crm.dynamics.com"
        };

        var builder = new FromPacConnectionBuilder();

        // Act
        var serviceClient = await builder.CreateServiceClientAsync(connection);

        // Assert
        Assert.IsNotNull(serviceClient);
    }

    [TestMethod]
    public async Task ValidateAsync_ValidConnection_ReturnsTrue()
    {
        // Arrange
        var connection = new CrmConnection
        {
            Type = "FromPac",
            Url = "https://test.crm.dynamics.com"
        };

        var builder = new FromPacConnectionBuilder();

        // Act
        var (isValid, error) = await builder.ValidateAsync(connection);

        // Assert
        Assert.IsTrue(isValid);
        Assert.IsNull(error);
    }
}
```

**Running Tests**:
```powershell
dotnet test --filter "FullyQualifiedName~FromPacConnection"
```

---

### Option 2: Manual Testing (Step-by-Step Guide)

#### Test Scenario 1: PAC CLI auth list parsing

**Step 1**: Setup environment
- Configure FromPac in appropriate environment
- Verify prerequisites are met

**Step 2**: Create connection
1. Visual Studio ΓåÆ Tools ΓåÆ DynamicsCrm DevKit ΓåÆ Connect
2. Type: `FromPac`
3. Enter required fields
4. Click "Test Connection"

**Expected Result**: Γ£à Connection succeeds

**Step 3**: Deploy component
```powershell
DynamicsCrm.DevKit.Cli \
  /auth:FromPac \
  /url:"https://test.crm.dynamics.com" \
  /json:"..." /type:servers /profile:default
```

**Expected Result**: Γ£à Deployment succeeds

---

#### Test Scenario 2: Load connection from PAC profile

**Step 1**: Configure second scenario
- Setup Load connection from PAC profile environment
- Configure necessary permissions

**Step 2**: Test connection
- Create connection in VSIX
- Verify authentication

**Expected Result**: Γ£à Authentication succeeds

**Step 3**: Verify in CLI
- Test CLI deployment
- Verify logs

**Expected Result**: Γ£à Deployment completes successfully

---

#### Manual Testing Checklist

- [ ] **Connection creation**: Connection created in VSIX
- [ ] **Validation**: All required fields validated
- [ ] **Authentication**: Authentication succeeds
- [ ] **CLI integration**: CLI command works
- [ ] **Error handling**: Clear error messages
- [ ] **Logs**: No sensitive data in logs
- [ ] **Performance**: Connection time acceptable

See `CONNECTION_TYPES_PRIORITY_ORDER.md` for detailed specifications.

---

**Document Version**: 1.1  
**Last Updated**: 2025-12-13

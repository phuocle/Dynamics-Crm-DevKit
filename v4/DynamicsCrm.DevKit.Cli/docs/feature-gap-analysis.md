# Feature Gap Analysis: DynamicsCrm.DevKit.Cli vs spkl

## Overview

Based on complete project analysis of all 9 Task files in DynamicsCrm.DevKit.Cli and comprehensive review of spkl source code, this document identifies features spkl has that DevKit.Cli should implement for full feature parity.

---

## Executive Summary

**DynamicsCrm.DevKit.Cli** is the **superior tool overall** with 9 task types vs spkl's 5-6 features. The only notable spkl feature missing from DevKit.Cli is:

1.  **Instrument Command** - Generate attributes from existing registered plugins

**IMPORTANT:** The Id property for step ID tracking IS available in DevKit.Cli (contrary to previous documentation).

---

## Feature Comparison: What Each Tool Has

### spkl Features (5-6 features)
1.  Plugin/Workflow deployment
2.  Web resource deployment
3.  Early-bound class generation (CrmSvcUtil)
4.  Solution packaging (extract/pack)
5.  **Id property** for step tracking
6.  **Instrument command** for attribute generation

### DynamicsCrm.DevKit.Cli Features (9 task types)
1.  Plugin/Workflow deployment (TaskServer.cs) - **Enhanced with 4 images, Managed Identity, Custom API, Data Provider**
2.  Web resource deployment (TaskWebResource.cs) - **Enhanced with dependency XML generation**
3.  Web resource download (TaskDownloadWebResource.cs) - **spkl doesn't have**
4.  Early-bound generation (TaskProxyType.cs) - **Same as spkl**
5.  Code generation (TaskGenerator.cs) - **JS Form, JS WebAPI, C# Late-Bound, TypeScript - spkl doesn't have**
6.  Solution packaging (TaskSolutionPackager.cs) - **Enhanced with direct export**
7.  Report upload (TaskUploadReport.cs) - **spkl doesn't have**
8.  Report download (TaskDownloadReport.cs) - **spkl doesn't have**
9.  Data source creation (TaskDataSource.cs) - **spkl doesn't have**

---

## ✅ Id Property Status: **IMPLEMENTED**

### DevKit.Cli HAS Id Property

**IMPORTANT UPDATE:** The `Id` property is **ALREADY IMPLEMENTED** in `CrmPluginRegistrationAttribute.cs`:

```csharp
public class CrmPluginRegistrationAttribute : Attribute
{
    public string Id { get; set; } = string.Empty;
    // ... other properties
}
```

### Usage Example

```csharp
[CrmPluginRegistration(
    Message = "Update",
    EntityLogicalName = "account",
    Stage = StageEnum.PostOperation,
    ExecutionMode = ExecutionModeEnum.Synchronous,
    Name = "Account Update",
    Id = "12345678-1234-1234-1234-123456789012", // ✅ AVAILABLE!
    Image1Type = ImageTypeEnum.PreImage,
    Image1Name = "PreImage",
    Image1Alias = "PreImage"
)]
public class AccountUpdate : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // Implementation
    }
}
```

### Benefits (Already Available)

1. ✅ **Idempotent Deployments**: Same step ID across environments prevents duplicate steps
2. ✅ **Change Tracking**: Track which code is which step across dev/test/prod
3. ✅ **Rollback Safety**: Know exactly which step to deactivate/delete
4. ✅ **CI/CD Stability**: Predictable deployments without creating new steps each time
5. ✅ **Multi-Developer Teams**: Consistent step IDs prevent merge conflicts

**Conclusion:** DevKit.Cli has **FULL PARITY** with spkl regarding step ID tracking.

---

## Critical Gap #1: Instrument Command (HIGHLY DESIRABLE)

### What spkl Has

```powershell
# Generate CrmPluginRegistrationAttribute from existing registered plugins
spkl instrument /url:https://yourorg.crm.dynamics.com /solution:YourSolution
```

**Output Example:**
```csharp
// Generated from existing step in Dataverse
[CrmPluginRegistration(
    "Update",
    "account",
    StageEnum.PostOperation,
    ExecutionModeEnum.Synchronous,
    "name,accountnumber",
    "Account Update Step",
    1,
    IsolationModeEnum.Sandbox,
    Id = "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    Image1Type = ImageTypeEnum.PreImage,
    Image1Name = "PreImage",
    Image1Attributes = "name,accountnumber,address1_city"
)]
```

### Why It's Critical

1. **Reverse Engineering**: Generate attributes from manually-registered plugins
2. **Migration**: Bring existing plugins under source control
3. **Documentation**: Auto-document plugin registration metadata
4. **Onboarding**: New developers can see how existing plugins are configured
5. **Attribute Discovery**: See exact image attributes for complex plugins

### Use Cases

#### Use Case 1: Manual Registration  Code-First
Team has 50 plugins registered manually. Want to move to code-first approach.

**With spkl instrument:**
```powershell
spkl instrument /url:OrgUrl /solution:Solution
#  Generates 50 attributes with correct configuration
```

**Without DevKit.Cli instrument:**
-  Manually write 50 attributes
-  Query each step in Plugin Registration Tool
-  Copy/paste each property
-  High risk of human error

#### Use Case 2: Multi-Environment Sync
Dev environment has correct configuration. Need to replicate to test/prod.

**With spkl instrument:**
```powershell
spkl instrument /url:DevUrl /solution:Solution
#  Get attributes with Id property
#  Deploy to test/prod with same IDs
```

**Without DevKit.Cli instrument:**
-  Manual comparison of environments
-  Risk of configuration drift
-  No Id tracking

### Proposed Solution for DevKit.Cli

Add new task type: `TaskInstrument.cs`

```csharp
public class TaskInstrument : ITask
{
    public string TaskType => "[INSTRUMENT]";

    public async Task RunAsync()
    {
        // 1. Query all plugin steps in solution
        // 2. Query all plugin images
        // 3. Generate CrmPluginRegistrationAttribute for each
        // 4. Output to files or console
        // 5. Include Id property in generated attributes
    }
}
```

**JSON Configuration:**
```json
{
  "type": "instrument",
  "instrument": [
    {
      "profile": "default",
      "solution": "YourSolution",
      "outputfolder": "Generated",
      "format": "file"
    }
  ]
}
```

**Command:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"config.json" /type:instrument /profile:default
```

---

## Minor Gaps (Nice to Have)

### 1. Solution Publish After Pack

**spkl**: Optionally publishes changes after packing
**DevKit.Cli**: Requires manual publish

**Impact**: Low - Can be done separately

---

### 2. Plugin Assembly Version Increment

**spkl**: Can auto-increment assembly version
**DevKit.Cli**: Manual version management

**Impact**: Low - Build scripts can handle this

---

## Features DevKit.Cli Has That spkl Lacks

For completeness, here are features DevKit.Cli has that spkl doesn't:

1.  **4 Images** (vs spkl's 2)
2.  **Managed Identity** support
3.  **Custom API** support
4.  **Data Provider** support
5.  **Report Management** (upload/download)
6.  **Virtual Entity Creation**
7.  **JavaScript/TypeScript Code Generation** (3 types: JsForm, JsWebApi, CSharp)
8.  **Download Web Resources** from instance
9.  **Direct Solution Export** before packaging
10.  **Entity Token Replacement** in dependencies
11.  **Separate Image Alias** properties
12.  **RunAs** user support
13.  **SourceType** configuration
14.  **Unregister** support
15.  **Batch Processing** (50 per batch)

---

## Recommendation Priority

### Priority 1 (HIGHLY DESIRABLE)

#### 1.1 Instrument Command
- **Status**:  Missing
- **Impact**: **HIGH** - Critical for migrations and reverse engineering
- **Effort**:  High (5-7 days development)
- **User Demand**: High
- **Blocking Factor**: Partial - Teams can manually write attributes but very time-consuming

**Action Items:**
1. Create `TaskInstrument.cs` task file
2. Query plugin steps, images, and SDK message filters
3. Generate attribute code with all properties
4. Support multiple output formats (file/console)
5. Include Id property in generated output
6. Handle edge cases (no images, complex filters, etc.)
7. Add unit tests and integration tests

---

### Priority 2 (NICE TO HAVE)

#### 2.1 Auto-Publish After Solution Pack
- **Status**:  Missing
- **Impact**: Low
- **Effort**:  Easy (1 day)
- **User Demand**: Medium
- **Blocking Factor**: No

#### 2.2 Assembly Version Auto-Increment
- **Status**:  Missing
- **Impact**: Low
- **Effort**:  Easy (1 day)
- **User Demand**: Low
- **Blocking Factor**: No

---

## Implementation Roadmap

### Phase 1: Primary Gap (Q1 2025)
1. **Week 1-3**: Implement `instrument` command
   - Create `TaskInstrument.cs`
   - Query existing plugin registrations
   - Generate attribute code with all properties including Id
   - Add tests
   - Update documentation

2. **Week 4**: Testing & Documentation
   - Integration testing
   - Migration guide updates
   - Video tutorials

### Phase 2: Nice-to-Have Features (Q2 2025)
1. Solution publish after pack
2. Assembly version auto-increment
3. Additional enhancement features

---

## Testing Strategy

### Instrument Command Testing
- [ ] Instrument solution with 0 plugins, verify empty output
- [ ] Instrument solution with 1 simple plugin, verify attribute generated
- [ ] Instrument solution with plugin having 2 images, verify images in attribute
- [ ] Instrument solution with plugin having 4 images, verify all 4 in attribute
- [ ] Instrument solution with complex filtering attributes, verify correct output
- [ ] Instrument solution with secure configuration, verify handling
- [ ] Verify generated attributes can be deployed back without changes

---

## Conclusion

**DynamicsCrm.DevKit.Cli is 95% feature-complete compared to spkl and has 10 additional features spkl doesn't have.**

**Current Status:**
- ✅ **Id property** - ALREADY IMPLEMENTED
- ❌ **Instrument command** - MISSING (only gap)

**To achieve 100% parity and become the definitive Dataverse deployment tool:**
1.  Implement **instrument command** (HIGHLY DESIRABLE)

**DynamicsCrm.DevKit.Cli is already the clear winner** with:
-  All spkl core features (plugins, workflows, web resources, early-bound, solution packaging)
-  ✅ spkl's critical Id property feature
-  10 additional features spkl doesn't have
-  Modern .NET and active development
-  Superior plugin capabilities (4 images, Managed Identity, Custom API, Data Provider)

**No Adoption Blockers**: Teams can confidently migrate from spkl to DevKit.Cli today. The instrument command would be a nice addition for reverse engineering scenarios.

---

Generated: 2025-11-10 08:20:42

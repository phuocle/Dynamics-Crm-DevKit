# Implementation Roadmap: Plugin Managed Identity Support

## Implementation Checklist

This document provides a step-by-step guide for implementing the Managed Identity feature in DynamicsCrm.DevKit.Cli.

---

## Phase 1: Core Infrastructure ⬜

### Task 1.1: Update PluginCore.cs
**File**: `ProjectTemplates\CSharp\01.SharedProjectTemplate\PluginCore.cs`

- [ ] Add `ManagedIdentityCredentialSource` enum
- [ ] Add `ManagedIdentitySubjectScope` enum
- [ ] Add `AzureCloudEnvironment` enum
- [ ] Add `CrmPluginManagedIdentityAttribute` class
- [ ] Test attribute construction and properties

**Validation**: Compile project successfully

---

### Task 1.2: Update Helper.cs
**File**: `DynamicsCrm.DevKit.Shared\Helper.cs`

- [ ] Add `ConvertAttributeToCrmPluginManagedIdentity` method
- [ ] Add `GetCloudEnvironmentConfig` method
- [ ] Add `EncodeTenantId` method
- [ ] Add `ComputeCertificateHash` method
- [ ] Add unit tests for helper methods

**Validation**: All helper methods return expected values

---

## Phase 2: Assembly Signing Infrastructure ⬜

### Task 2.1: Implement SignTool Integration
**File**: `DynamicsCrm.DevKit.Cli\Tasks\TaskServer.cs`

- [ ] Add `FindSignTool` method to locate signtool.exe
- [ ] Test on multiple Windows SDK versions
- [ ] Handle case when SignTool not found
- [ ] Add logging for SignTool location

**Validation**: SignTool can be found on development machines

---

### Task 2.2: Implement Assembly Signing
**File**: `DynamicsCrm.DevKit.Cli\Tasks\TaskServer.cs`

- [ ] Add `SignAssemblyAsync` method
- [ ] Support .pfx files with password
- [ ] Support .cer files without password
- [ ] Handle signing errors gracefully
- [ ] Add progress logging
- [ ] Verify assembly signature after signing

**Validation**: Assembly can be signed successfully

---

## Phase 3: Managed Identity Deployment ⬜

### Task 3.1: Attribute Detection
**File**: `DynamicsCrm.DevKit.Cli\Tasks\TaskServer.cs`

- [ ] Add `GetCrmPluginManagedIdentityAttribute` method
- [ ] Handle types with and without managed identity attribute
- [ ] Test with multiple plugin types in same assembly
- [ ] Add logging for attribute detection

**Validation**: Managed identity attributes are correctly detected

---

### Task 3.2: Managed Identity Record Management
**File**: `DynamicsCrm.DevKit.Cli\Tasks\TaskServer.cs`

- [ ] Add `DeployManagedIdentityAsync` method
- [ ] Check for existing managed identity records
- [ ] Create new managed identity if not exists
- [ ] Update existing managed identity if changed
- [ ] Handle Dataverse API errors
- [ ] Add detailed logging

**Validation**: Managed identity records are created/updated in Dataverse

---

### Task 3.3: Plugin Assembly Binding
**File**: `DynamicsCrm.DevKit.Cli\Tasks\TaskServer.cs`

- [ ] Add `BindPluginAssemblyToManagedIdentityAsync` method
- [ ] Update pluginassembly record with managedidentityid
- [ ] Handle binding errors
- [ ] Verify binding after update

**Validation**: Plugin assembly is correctly bound to managed identity

---

### Task 3.4: Subject Identifier Generation
**File**: `DynamicsCrm.DevKit.Cli\Tasks\TaskServer.cs`

- [ ] Add `GenerateSubjectIdentifier` method
- [ ] Support self-signed certificates (dev)
- [ ] Support trusted certificates (prod)
- [ ] Handle all cloud environments
- [ ] Test tenant ID encoding
- [ ] Validate subject identifier format

**Validation**: Subject identifiers match expected format

---

### Task 3.5: Environment ID Extraction
**File**: `DynamicsCrm.DevKit.Cli\Tasks\TaskServer.cs`

- [ ] Add `GetEnvironmentId` method
- [ ] Extract from ServiceClient connection
- [ ] Handle different URL formats
- [ ] Add fallback logic

**Validation**: Environment ID is correctly extracted

---

## Phase 4: Integration ⬜

### Task 4.1: Modify DeployFileAsync
**File**: `DynamicsCrm.DevKit.Cli\Tasks\TaskServer.cs`

- [ ] Detect managed identity attribute per type
- [ ] Call signing before deployment
- [ ] Call managed identity deployment after assembly deployment
- [ ] Generate and display subject identifier
- [ ] Display Azure configuration instructions
- [ ] Handle partial failures gracefully

**Validation**: Full workflow executes successfully

---

### Task 4.2: Add Comprehensive Logging
**File**: `DynamicsCrm.DevKit.Cli\Tasks\TaskServer.cs`

- [ ] Add progress indicators (✓, ⚠, ✗)
- [ ] Color-code messages (success, warning, error)
- [ ] Display subject identifier clearly
- [ ] Show Azure configuration steps
- [ ] Add verbose mode support

**Validation**: Console output is clear and helpful

---

### Task 4.3: Error Handling
**File**: `DynamicsCrm.DevKit.Cli\Tasks\TaskServer.cs`

- [ ] Handle missing certificate files
- [ ] Handle invalid certificate passwords
- [ ] Handle SignTool failures
- [ ] Handle Dataverse API failures
- [ ] Provide clear error messages with solutions

**Validation**: All error scenarios are handled gracefully

---

## Phase 5: Testing ⬜

### Task 5.1: Unit Tests
**Project**: Create test project

- [ ] Test helper methods (encoding, hashing, etc.)
- [ ] Test attribute parsing
- [ ] Test cloud environment configuration
- [ ] Mock Dataverse API calls
- [ ] Test error scenarios

**Validation**: All unit tests pass

---

### Task 5.2: Integration Tests
**Project**: Test with real Dataverse environment

- [ ] Create test plugin with managed identity attribute
- [ ] Deploy to development environment
- [ ] Verify assembly is signed
- [ ] Verify managed identity record is created
- [ ] Verify assembly binding
- [ ] Test subject identifier generation

**Validation**: End-to-end deployment works

---

### Task 5.3: Azure Key Vault Integration Test
**Project**: Full scenario test

- [ ] Create test plugin that accesses Key Vault
- [ ] Configure federated credentials in Azure
- [ ] Deploy plugin
- [ ] Trigger plugin execution
- [ ] Verify token acquisition
- [ ] Verify Key Vault access

**Validation**: Plugin can successfully access Azure Key Vault

---

## Phase 6: Documentation ⬜

### Task 6.1: Update README
**File**: `DynamicsCrm.DevKit.Cli\docs\README.md`

- [ ] Add managed identity feature overview
- [ ] Add quick start guide link
- [ ] Update table of contents

---

### Task 6.2: Create Sample Projects
**Folder**: Create `Samples\PluginWithManagedIdentity`

- [ ] Sample plugin implementation
- [ ] Sample certificate generation script
- [ ] Sample Azure setup script
- [ ] README with step-by-step instructions

---

### Task 6.3: Video Tutorial (Optional)
- [ ] Record screen capture of setup process
- [ ] Demonstrate deployment
- [ ] Show Azure configuration
- [ ] Show plugin execution

---

## Phase 7: Release Preparation ⬜

### Task 7.1: Code Review
- [ ] Review all code changes
- [ ] Check for security issues
- [ ] Verify error handling
- [ ] Check logging consistency
- [ ] Verify code comments

---

### Task 7.2: Performance Testing
- [ ] Test with large assemblies
- [ ] Test with multiple plugins
- [ ] Measure deployment time impact
- [ ] Optimize if needed

---

### Task 7.3: Compatibility Testing
- [ ] Test on Windows 10
- [ ] Test on Windows 11
- [ ] Test with different Windows SDK versions
- [ ] Test with different .NET versions
- [ ] Test with Dataverse API changes

---

### Task 7.4: Release Notes
- [ ] Document new feature
- [ ] Document breaking changes (if any)
- [ ] Document migration guide
- [ ] Document known limitations

---

## Dependencies & Prerequisites

### Development Environment
- [ ] Visual Studio 2022 or later
- [ ] .NET 8.0 SDK
- [ ] Windows SDK (for SignTool.exe)
- [ ] Power Platform environment access
- [ ] Azure subscription access

### NuGet Packages
- [ ] Microsoft.PowerPlatform.Dataverse.Client (latest)
- [ ] Microsoft.Xrm.Sdk (latest with IManagedIdentityService)
- [ ] System.Security.Cryptography.Algorithms

### Azure Resources
- [ ] Azure subscription
- [ ] Entra ID access
- [ ] App Registration permissions
- [ ] Test environment

---

## Risk Mitigation

### Risk 1: SignTool.exe Not Found
**Mitigation**:
- Clear error message with download link
- Documentation on installing Windows SDK
- Fallback to manual signing

### Risk 2: Certificate Management
**Mitigation**:
- Clear documentation on certificate generation
- Support for multiple certificate formats
- Secure password handling guidelines

### Risk 3: Dataverse API Changes
**Mitigation**:
- Version checking
- Graceful degradation
- Clear error messages

### Risk 4: Federated Credential Mismatch
**Mitigation**:
- Generate exact subject identifier
- Provide copy-paste instructions
- Add validation tool

---

## Success Criteria

### Functionality
- ✅ Plugin can be decorated with managed identity attribute
- ✅ Assembly is automatically signed during deployment
- ✅ Managed identity record is created/updated in Dataverse
- ✅ Plugin assembly is bound to managed identity
- ✅ Subject identifier is generated correctly
- ✅ Plugin can acquire tokens and access Azure resources

### Quality
- ✅ All unit tests pass
- ✅ All integration tests pass
- ✅ Code review approved
- ✅ Documentation complete
- ✅ Error handling comprehensive

### User Experience
- ✅ Clear console output
- ✅ Helpful error messages
- ✅ Easy to follow documentation
- ✅ Sample projects work out of the box

---

## Timeline Estimate

| Phase | Estimated Time | Dependencies |
|-------|----------------|--------------|
| Phase 1: Core Infrastructure | 2-3 days | None |
| Phase 2: Signing Infrastructure | 2-3 days | Phase 1 |
| Phase 3: Managed Identity Deployment | 3-4 days | Phase 1 |
| Phase 4: Integration | 2-3 days | Phase 2, 3 |
| Phase 5: Testing | 3-4 days | Phase 4 |
| Phase 6: Documentation | 2-3 days | Phase 5 |
| Phase 7: Release Preparation | 2-3 days | Phase 6 |
| **Total** | **16-23 days** | |

---

## Post-Release Tasks ⬜

### Task 8.1: Monitor Issues
- [ ] Set up issue tracking
- [ ] Monitor user feedback
- [ ] Address bugs quickly
- [ ] Track feature requests

### Task 8.2: Continuous Improvement
- [ ] Gather user feedback
- [ ] Analyze usage patterns
- [ ] Identify improvement opportunities
- [ ] Plan next iteration

---

**Document Version**: 1.0
**Last Updated**: October 3, 2025
**Status**: Planning Phase

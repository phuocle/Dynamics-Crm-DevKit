# Phase 3: Production & Azure Authentication - Task Checklist

**Status**: ✅ COMPLETE  
**Date**: 2026-01-14  
**Branch**: `feature/connection-types-phase-3`

## Infrastructure Setup
- [x] Add NuGet packages to `DynamicsCrm.DevKit.Cli.csproj`
  - [x] `Azure.Identity` (1.13.2)

## Connection Builders Created

### ClientCertificate
- [x] Create `ClientCertificateConnectionBuilder.cs`
  - [x] File-based certificate (.pfx, .p12)
  - [x] Windows Certificate Store (thumbprint lookup)
  - [x] Certificate password support
  - [x] Store location/name configuration

### ManagedIdentity
- [x] Create `ManagedIdentityConnectionBuilder.cs`
  - [x] System-assigned identity
  - [x] User-assigned identity (via ClientId)
  - [x] Azure.Identity ManagedIdentityCredential

### DefaultAzureCredential
- [x] Create `DefaultAzureCredentialConnectionBuilder.cs`
  - [x] Azure.Identity DefaultAzureCredential
  - [x] Credential chain (az login, VS, env vars)

### ClientSecret (Modern)
- [x] Create `ClientSecretConnectionBuilder.cs`
  - [x] Separate params --clientid, --clientsecret
  - [x] Auto-detect encrypted vs plain text
  - [x] Build connection string and use ServiceClient

### OAuth
- [x] Create `OAuthConnectionBuilder.cs`
  - [x] User/password authentication
  - [x] Auto-decrypt password (if encrypted)

### AD (Active Directory)
- [x] Create `ADConnectionBuilder.cs`
  - [x] On-premise Dynamics CRM
  - [x] Parse domain\username format

## CLI Arguments
- [x] Add `--cert` argument (certificate file path)
- [x] Add `--certpass` argument (certificate password)
- [x] Add `--certthumb` argument (certificate thumbprint)
- [x] Add `--certstorelocation` argument (CurrentUser, LocalMachine)
- [x] Add `--certstorename` argument (My, Root, CA)
- [x] Add `--managedidentityclientid` argument
- [x] Note: `--user`, `--pass`, `--clientid`, `--clientsecret` already existed

## CLI Integration
- [x] Update `DevKitCommand.cs` to map new CLI args to CrmConnection
- [x] Register all builders in ConnectionBuilderFactory
- [x] Add OAuth and AD to IsSupported list

## Project Files
- [x] Update `DynamicsCrm.DevKit.Shared.projitems` with 6 new builder files

## Test Profiles
- [x] Add `26-DEVKITV4.ClientCertificate` profile
- [x] Add `27-DEVKITV4.ManagedIdentity` profile
- [x] Add `28-DEVKITV4.DefaultAzureCredential` profile
- [x] Add `29-DEVKITV4.ClientSecret.PlainText` profile
- [x] Add `30-DEVKITV4.ClientSecret.Encrypted` profile
- [x] Add `31-DEVKITV4.OAuth` profile
- [x] Add `32-DEVKITV4.AD` profile

## Documentation
- [x] Create/Update `tests/phase3.md` test guide with checklist format
- [x] Create `tests/phase3_task_summary.md` task checklist
- [x] Create `tests/test-managedidentity-appservice.md` Azure setup guide

## Verification
- [x] Build succeeds with expected warnings (6 warnings - DPAPI Windows-only)
- [x] DefaultAzureCredential works (az login)
- [x] ClientSecret.PlainText works
- [x] ClientSecret.Encrypted works (auto-decrypt)
- [x] Backward compatibility (--conn still works)

## Tests Skipped (Require Setup)
- [ ] ClientCertificate (requires certificate)
- [ ] ManagedIdentity (requires Azure resource)
- [ ] OAuth (requires user/password)
- [ ] AD (requires on-premise CRM)

---

## 🚀 Next: Phase 4 - Integration & Polish

**Branch**: `feature/connection-types-phase-4`

### Features to implement:
- FromPac (PAC CLI integration)
- Documentation finalization
- End-to-end testing

### Reference docs:
- `ConnectionTypes/plans/PLAN_08_FromPac.md`
- `ConnectionTypes/PHASED_IMPLEMENTATION_PLAN.md`

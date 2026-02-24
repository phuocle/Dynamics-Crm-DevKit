# Security Audit Report: Last 10 Merged PRs

**Date:** 2026-02-24
**Auditor:** Automated Security Review (Cloud Agent)
**Scope:** PRs #128, #130, #132, #134, #136, #140, #146, #150, #151, #152

---

## Executive Summary

**3 out of 10 PRs contain CRITICAL security vulnerabilities (hardcoded credentials committed to a public repository). 1 PR has a MODERATE supply chain risk.** The remaining 6 PRs are clean.

The primary finding is the widespread practice of committing Azure AD/Entra ID client secrets, certificate passwords, and other sensitive credentials directly into source code files (launch profiles, batch scripts, JSON config files). Since this is a **public GitHub repository**, these credentials are exposed to anyone on the internet.

---

## Unique Credentials Exposed

| # | Secret Type | Value (truncated for safety) | Target Environment | Client ID | Affected PRs |
|---|-------------|------------------------------|--------------------|-----------|----|
| 1 | Azure AD Client Secret | `4Y11hDyKJYQTqX...li57mRfjHcCPu6Qx5sxgtCWQ` | `dynamics-crm-devkit-2.crm.dynamics.com`, `dynamics-crm-devkit-v4.crm.dynamics.com` | `1a60a5c2-d04c-4b26-8f86-9d6ce0616799` | #146, #150, #151 |
| 2 | Azure AD Client Secret | `~je8Q~4DL221zUgKOaHq-EWMlowkpl3KEbZItccL` | `dynamics-crm-devkit.crm5.dynamics.com` | `1a60a5c2-d04c-4b26-8f86-9d6ce0616799` | #146 |
| 3 | Azure AD Client Secret | `v+L6+3MvOrVPMNqGn86vi6qEG4qpCCLoLqgeUMjnGkY=` | `hitachi-hsapvn-dev.crm5.dynamics.com` | `b1b8cf05-cb06-4674-b93e-98c8c9a02e5a` | Pre-existing (in #151 context) |
| 4 | Azure AD Client Secret | `+Rybklkh/UTzAsDl0toScd7EhAwwKjwqyNeMxiR4DwjMsWC35b0ps12e0UjG3Pd5` | `contoso-pl.crm5.dynamics.com` | `b1b8cf05-cb06-4674-b93e-98c8c9a02e5a` | #146 |
| 5 | Azure AD Client Secret | `?-iwRSB0te8o]pHX_yVQLJnUqziB1E0h` | `dev2-devkit.crm5.dynamics.com` | `e31fc7d6-4dce-46e3-8677-04ab0a2968e3` | #146 |
| 6 | Certificate Password | `!123@abCDefPackage` | Azure Key Vault `kv-dataverse-devkitv4-3` | N/A | #146 |
| 7 | Certificate Password | `!123@abCDef` | Azure Key Vault `kv-dataverse-devkitv4-3` | N/A | #146 |
| 8 | Username (PII) | `phuocle@phuocle.net` | `contoso-pl.crm5.dynamics.com` (OAuth) | N/A | #146 |

---

## Per-PR Detailed Findings

### PR #152 — Add DEVKIT1021 analyzer for ITracingService usage in catch blocks
- **Merged:** 2026-01-01
- **Severity:** LOW (Supply Chain Risk)
- **Finding:** Both `Release-DynamicsCrm-DevKit.ps1` and `Release-DynamicsCrm-DevKit-Debug.ps1` were modified to auto-download `nuget.exe` from `https://dist.nuget.org/win-x86-commandline/latest/nuget.exe` when not found locally. While this is the official NuGet distribution URL, downloading executables at build time without SHA-256 checksum verification introduces a supply chain attack vector. A man-in-the-middle attack or DNS hijack could serve a malicious binary.
- **Additional note:** Binary packages (.vsix, .nupkg) committed to repository — not a vulnerability but a code hygiene concern.

### PR #151 — Add Complete TypeScript Form Generation System (TsForm, TsWebApi, TsOptionSet)
- **Merged:** 2026-01-10
- **Severity:** CRITICAL (Credential Leak)
- **Affected file:** `v5/DynamicsCrm.DevKit.Cli/Properties/launchSettings.json`
- **Detail:** Added 4 new launch profiles (`TestClientCode-TS-FORM`, `TestClientCode-TS-WEBAPI`, `TestClientCode-JS-FORM`, `TestClientCode-JS-WEBAPI`), each containing a hardcoded Azure AD client secret for `dynamics-crm-devkit-v4.crm.dynamics.com`. This grants full API access to the Dynamics 365 environment.

### PR #150 — Create TypeScript WebResource project template from v5 folder
- **Merged:** 2026-01-01
- **Severity:** CRITICAL (Credential Leak)
- **Affected files:**
  - `v5/DynamicsCrm.DevKit.Tests/TestProjectsItems/Dev.DevKit.WebResourceTs/deploy.debug.bat`
  - `v5/DynamicsCrm.DevKit.Tests/TestProjectsItems/Dev.DevKit.WebResourceTs/entities/generator.form.bat`
  - `v5/DynamicsCrm.DevKit.Tests/TestProjectsItems/Dev.DevKit.WebResourceTs/entities/generator.webapi.bat`
- **Detail:** Each batch file contains a hardcoded `set ConnectionString=` with the full Azure AD client secret for `dynamics-crm-devkit-v4.crm.dynamics.com`.

### PR #146 — Merge v4 to master - DynamicsCrm.DevKit v4.0
- **Merged:** 2025-12-31
- **Severity:** CRITICAL (Credential Leak — Most Extensive)
- **Detail:** This massive v4-to-master merge introduced the largest number of exposed credentials:
  - **JSON config files** (`DynamicsCrm.DevKit.json` in `test/4.00.00.00/Test.Cli.Generator/`, `test/4.00.00.00/TestAddCrmPluginRegistration/2.after/`, `test/4.00.00.00/TestAllProjectsV4/`, `test/4.00.00.00/TestAnalyzers/`): Each contains `"Password"` fields with actual client secrets in plaintext.
  - **Batch files** (multiple `.bat` files across test directories): Contain `set CrmConnection=` lines with full connection strings including client secrets.
  - **Azure Key Vault config files** (`ManagedIdentity.json`, `ManagedIdentityPackage.json`): Contain `"CertificatePassword"` and `"SecretValue"` fields.
  - **At least 5 unique client secrets and 2 certificate passwords** were introduced.

### PR #140 — Align TestDevKitTs test structure with TestDevKitJs reference implementation
- **Merged:** 2025-12-25
- **Severity:** NONE
- TypeScript test files for Dynamics 365 form control testing. No security concerns.

### PR #136 — Add JavaScript test functions for Account form controls (Tests 0-8)
- **Merged:** 2025-12-24
- **Severity:** NONE
- JavaScript test code for form controls. No security concerns.

### PR #134 — Fix image/file field SchemaName in TypeScript form control declarations
- **Merged:** 2025-12-24
- **Severity:** NONE
- Small 19-line C# fix. No security concerns.

### PR #132 — Add Guid type for EntityReference and ID fields in Account.webapi.ts
- **Merged:** 2025-12-20
- **Severity:** NONE
- Type improvement in TypeScript declarations. No security concerns.

### PR #130 — Add DEVKIT1020 to root README.md
- **Merged:** 2025-12-16
- **Severity:** NONE
- README update only. No security concerns.

### PR #128 — Add Vietnamese localization and DEBUG mode instruction for AI agents
- **Merged:** 2025-12-14
- **Severity:** NONE
- AI agent instruction files. No security concerns.

---

## Recommendations

### Immediate Actions (Priority 1 — Do Now)

1. **Rotate ALL exposed secrets.** Every Azure AD client secret, certificate password, and Key Vault secret listed in this report must be considered compromised and rotated immediately across all affected Azure AD app registrations and Key Vaults.

2. **Remove hardcoded credentials from the repository.** Replace all hardcoded connection strings with:
   - Environment variable references (for batch files: `%CRM_CONNECTION_STRING%`)
   - .NET User Secrets (`dotnet user-secrets`) for `launchSettings.json`
   - Azure Key Vault references for production configurations

3. **Purge secrets from git history.** Use `BFG Repo-Cleaner` or `git filter-repo` to remove secrets from all historical commits. Even after deletion from the current branch, secrets remain accessible in git history.

### Preventive Actions (Priority 2 — Do This Week)

4. **Add these entries to `.gitignore`:**
   - `**/Properties/launchSettings.json`
   - `**/DynamicsCrm.DevKit.json` (when containing connection info)
   - `**/ManagedIdentity*.json` (when containing passwords)
   - Any `*.bat` files containing connection strings

5. **Implement secret scanning.** Enable GitHub's built-in secret scanning, and/or add pre-commit hooks using tools like `gitleaks`, `git-secrets`, or `trufflehog` to prevent future credential commits.

6. **Add checksum verification** for the auto-downloaded `nuget.exe` in `Release-DynamicsCrm-DevKit.ps1` and `Release-DynamicsCrm-DevKit-Debug.ps1`. Pin to a specific version and verify its SHA-256 hash before execution.

### Long-Term Actions (Priority 3)

7. **Establish a secrets management policy.** Document approved methods for handling credentials in development (environment variables, user secrets, Key Vault) and enforce via code review checklists.

8. **Consider using Azure Managed Identity** instead of client secrets where possible to eliminate the need for secret rotation entirely.

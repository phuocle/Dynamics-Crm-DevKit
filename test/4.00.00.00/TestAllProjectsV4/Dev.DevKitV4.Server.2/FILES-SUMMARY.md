# 📊 Files Summary - Azure Setup Scripts

## 📁 Complete File List

### ✅ Created Files

| # | File Name | Type | Size | Purpose |
|---|-----------|------|------|---------|
| 1 | `01.Setup-Azure.ps1` | Script | ~13 KB | Creates Azure resources |
| 2 | `02.Setup-Certificate.ps1` | Script | ~9 KB | Generates certificate |
| 3 | `03.Setup-PowerPlatformFederatedCredentials.ps1` | Script | ~10 KB | Creates federated credentials |
| 4 | `04.Cleanup-All.ps1` | Script | ~13 KB | **NEW** - Deletes all resources |
| 5 | `config.json` | Config | Variable | Your configuration (auto-created) |
| 6 | `config.json.template` | Template | ~1 KB | Example configuration |
| 7 | `README.md` | Doc | ~12 KB | **NEW** - Overview and quick start |
| 8 | `SETUP-GUIDE.md` | Doc | ~20 KB | **UPDATED** - Complete setup guide |
| 9 | `CLEANUP-REFERENCE.md` | Doc | ~8 KB | **NEW** - Cleanup script reference |

**Total:** 9 files (4 scripts, 2 configs, 3 documentation files)

---

## 📖 Documentation Hierarchy

```
README.md (START HERE)
├── Quick overview
├── Quick start commands
├── Points to detailed guides ↓
│
├─→ SETUP-GUIDE.md (for scripts 01-03)
│   ├── Prerequisites
│   ├── Step-by-step instructions
│   ├── Configuration reference
│   ├── Verification steps
│   ├── Troubleshooting
│   └── Security best practices
│
└─→ CLEANUP-REFERENCE.md (for script 04)
    ├── What gets deleted
    ├── How to run
    ├── Safety features
    ├── Common scenarios
    └── Troubleshooting
```

---

## 🎯 Which File to Read?

### 🆕 New User?
👉 **Start with: [README.md](README.md)**
- Get overview of all scripts
- See quick start commands
- Understand the workflow

### 📚 Setting Up Resources (Scripts 01-03)?
👉 **Read: [SETUP-GUIDE.md](SETUP-GUIDE.md)**
- Complete step-by-step guide
- How to get Environment/Organization IDs
- Configuration reference table
- Troubleshooting common issues

### 🧹 Cleaning Up (Script 04)?
👉 **Read: [CLEANUP-REFERENCE.md](CLEANUP-REFERENCE.md)**
- What will be deleted
- How to confirm deletion
- Common cleanup scenarios
- Manual cleanup procedures

---

## 🔄 Script Execution Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         SETUP PHASE                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  01.Setup-Azure.ps1                                            │
│  ├─ Creates config.json template                               │
│  ├─ YOU: Edit config.json with your values                     │
│  ├─ Run again to create Azure resources                        │
│  └─ Updates config.json with TenantId, AppId, KeyVaultURL     │
│                          ↓                                      │
│  02.Setup-Certificate.ps1                                       │
│  ├─ Generates self-signed certificate                          │
│  ├─ Exports .pfx and .cer files                                │
│  └─ Updates config.json with certificate details               │
│                          ↓                                      │
│  03.Setup-PowerPlatformFederatedCredentials.ps1               │
│  ├─ Connects to Azure with certificate                         │
│  └─ Creates federated credentials for each environment         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                          ↓
                ✅ READY FOR DEPLOYMENT


                Need to start over?
                          ↓
┌─────────────────────────────────────────────────────────────────┐
│                       CLEANUP PHASE                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  04.Cleanup-All.ps1                                            │
│  ├─ Reads config.json                                          │
│  ├─ Shows preview of what will be deleted                      │
│  ├─ YOU: Type DELETE to confirm                                │
│  ├─ Deletes Azure App Registration                             │
│  ├─ Deletes Azure Resource Group                               │
│  ├─ Deletes certificate from Windows Store                     │
│  ├─ Deletes local certificate files (.pfx, .cer)               │
│  └─ Deletes config.json                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                          ↓
              🔄 Back to 01.Setup-Azure.ps1
```

---

## 📝 config.json Lifecycle

### Phase 1: Initial Creation
```powershell
.\01.Setup-Azure.ps1
```
**Result:** `config.json` created with empty values
```json
{
    "AppName": "",
    "ResourceGroup": "",
    ...12 user fields (empty)...
    "TenantId": "",
    ...6 auto fields (empty)...
}
```

### Phase 2: User Configuration
```
YOU: Edit config.json
```
**Result:** User fields filled, auto fields still empty
```json
{
    "AppName": "DynamicsCrmDevKitManagedIdentity",
    "ResourceGroup": "DevKit",
    ...10 more user fields (filled)...
    "TenantId": "",
    ...6 auto fields (still empty)...
}
```

### Phase 3: After Script 1
```powershell
.\01.Setup-Azure.ps1
```
**Result:** Azure fields populated
```json
{
    ...12 user fields (filled)...
    "TenantId": "49528483-b79b-4b88-b86e-7d882ba68911",
    "AppId": "89a8ddb5-6414-4478-8dd2-2aad7c9a292b",
    "KeyVaultURL": "https://kv-dataverse-secrets.vault.azure.net/",
    ...3 cert fields (still empty)...
}
```

### Phase 4: After Script 2
```powershell
.\02.Setup-Certificate.ps1
```
**Result:** Certificate fields populated
```json
{
    ...15 fields already filled...
    "CertificatePath": "ManagedIdentity.pfx",
    "CertificateThumbprint": "8B3D731DF5B92993...",
    "CertificateSHA256Hash": "fnTqEla0AjbKZlY..."
}
```

### Phase 5: After Script 3
```powershell
.\03.Setup-PowerPlatformFederatedCredentials.ps1
```
**Result:** No changes to config.json (reads only)

### Phase 6: Cleanup
```powershell
.\04.Cleanup-All.ps1
```
**Result:** `config.json` deleted ❌

---

## 🎨 Color-Coded Output

All scripts use color-coded output for easy reading:

| Color | Meaning | Example |
|-------|---------|---------|
| 🟢 Green | Success | `✅ Resource created successfully` |
| 🔴 Red | Error | `❌ ERROR: Failed to create resource` |
| 🟡 Yellow | Warning/Info | `⚠️ WARNING: This action cannot be undone` |
| 🔵 Cyan | Section header | `Step 1: Creating Azure Resources...` |
| ⚪ White | Normal text | Details and descriptions |
| 🔘 Gray | Secondary info | Additional context |

---

## 📊 Resource Creation Matrix

| Resource | Script 1 | Script 2 | Script 3 | Script 4 |
|----------|----------|----------|----------|----------|
| config.json | ✅ Create | ✏️ Update | 📖 Read | 🗑️ Delete |
| Azure Resource Group | ✅ Create | - | - | 🗑️ Delete |
| Azure App Registration | ✅ Create | - | - | 🗑️ Delete |
| Azure Service Principal | ✅ Create | - | - | 🗑️ Delete |
| Azure Key Vault | ✅ Create | - | - | 🗑️ Delete |
| Key Vault Secret | ✅ Create | - | - | 🗑️ Delete |
| Certificate (Windows) | - | ✅ Create | - | 🗑️ Delete |
| Certificate (.pfx) | - | ✅ Create | - | 🗑️ Delete |
| Certificate (.cer) | - | ✅ Create | - | 🗑️ Delete |
| Federated Credentials | - | - | ✅ Create | 🗑️ Delete |

Legend:
- ✅ Create
- ✏️ Update
- 📖 Read
- 🗑️ Delete
- `-` No action

---

## 🔐 Sensitive Files (Never Commit)

### Add to `.gitignore`:
```gitignore
# Configuration with secrets
config.json

# Certificate files with private keys
*.pfx
*.cer

# Certificate signing files
cert-signing*.pfx
cert-signing*.cer
ManagedIdentity.pfx
ManagedIdentity.cer

# Azure configuration
azure-config.txt
```

### Safe to Commit:
```
✅ 01.Setup-Azure.ps1
✅ 02.Setup-Certificate.ps1
✅ 03.Setup-PowerPlatformFederatedCredentials.ps1
✅ 04.Cleanup-All.ps1
✅ config.json.template
✅ README.md
✅ SETUP-GUIDE.md
✅ CLEANUP-REFERENCE.md
✅ FILES-SUMMARY.md (this file)
```

---

## ⏱️ Time Estimates

| Task | Duration | User Input Required |
|------|----------|---------------------|
| Read README.md | 5 min | No |
| Read SETUP-GUIDE.md | 15-20 min | No |
| Read CLEANUP-REFERENCE.md | 10 min | No |
| Run 01.Setup-Azure.ps1 (first time) | < 5 sec | No |
| Fill config.json | 5-10 min | **Yes** - Get Environment/Org IDs |
| Run 01.Setup-Azure.ps1 (second time) | 30-60 sec | No |
| Run 02.Setup-Certificate.ps1 | 5-10 sec | No |
| Run 03.Setup-PowerPlatform...ps1 | 10-20 sec | No |
| Run 04.Cleanup-All.ps1 | 10-15 sec | **Yes** - Type DELETE |
| **Total Setup Time** | **15-25 min** | (including reading docs) |
| **Total Cleanup Time** | **< 1 min** | (plus 2-5 min background deletion) |

---

## 🎓 Learning Path

### Beginner
1. Read [README.md](README.md) - 5 min
2. Follow [SETUP-GUIDE.md](SETUP-GUIDE.md) - 20 min
3. Run scripts 01-03 - 10 min
4. Verify setup works - 5 min
5. Read [CLEANUP-REFERENCE.md](CLEANUP-REFERENCE.md) - 10 min
6. Run cleanup script 04 - 1 min

**Total Time:** ~50 minutes (first time)

### Experienced (After First Run)
1. Quick reference [README.md](README.md) - 1 min
2. Run scripts 01-03 - 10 min
3. Verify and use - Variable
4. Run cleanup when done - 1 min

**Total Time:** ~12 minutes (subsequent runs)

---

## 📞 Quick Help Reference

| Problem | Solution |
|---------|----------|
| Don't know where to start | Read [README.md](README.md) |
| Need setup instructions | Read [SETUP-GUIDE.md](SETUP-GUIDE.md) |
| Need to clean up | Read [CLEANUP-REFERENCE.md](CLEANUP-REFERENCE.md) |
| Script shows error | Check error message, then relevant guide |
| Need Environment/Org IDs | See [SETUP-GUIDE.md](SETUP-GUIDE.md) Step 1.4 |
| Key Vault name conflict | Run cleanup, change name, run setup again |
| Want to start fresh | Run [04.Cleanup-All.ps1](CLEANUP-REFERENCE.md) |
| Lost config.json | Run [01.Setup-Azure.ps1](SETUP-GUIDE.md) to recreate |

---

## ✅ Checklist for Success

### Before Starting
- [ ] PowerShell 7+ installed
- [ ] Azure CLI installed
- [ ] Azure account with proper permissions
- [ ] Power Platform Environment ID(s) obtained
- [ ] Organization ID(s) obtained
- [ ] Read [README.md](README.md)

### During Setup
- [ ] Run 01.Setup-Azure.ps1 (first time)
- [ ] Fill config.json with correct values
- [ ] Run 01.Setup-Azure.ps1 (second time)
- [ ] Run 02.Setup-Certificate.ps1
- [ ] Run 03.Setup-PowerPlatformFederatedCredentials.ps1
- [ ] Verify all resources in Azure Portal

### After Setup
- [ ] config.json has all 18 fields filled
- [ ] Certificate files created (.pfx and .cer)
- [ ] Azure resources visible in portal
- [ ] Ready to deploy Dataverse plugins

### When Cleaning Up
- [ ] Read [CLEANUP-REFERENCE.md](CLEANUP-REFERENCE.md)
- [ ] Backup config.json if needed
- [ ] Run 04.Cleanup-All.ps1
- [ ] Type DELETE to confirm
- [ ] Verify resources deleted in Azure Portal

---

## 🎉 Summary

You now have:
- ✅ 4 PowerShell scripts (setup + cleanup)
- ✅ 2 configuration files (active + template)
- ✅ 3 comprehensive documentation files
- ✅ Complete automation for Azure setup
- ✅ Safe cleanup and restart capability

**Total Package:** Everything needed for Azure resource management for Dataverse plugin deployment! 🚀

---

**Document Version:** 1.0
**Last Updated:** October 2025
**Part of:** Dynamics-Crm-DevKit v4

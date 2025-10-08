# 📇 Documentation Index

**Complete guide to all files in this directory**

---

## 🎯 Start Here

### 👤 I'm a New User
**→ Read First:** [README.md](README.md)
- Overview of all scripts
- Quick start guide
- Workflow diagram
- Prerequisites

### 🔧 I Want to Setup Azure Resources
**→ Read Next:** [SETUP-GUIDE.md](SETUP-GUIDE.md)
- Complete step-by-step instructions
- How to get Environment/Organization IDs
- Configuration reference
- Troubleshooting

### 🧹 I Want to Clean Up Everything
**→ Read:** [CLEANUP-REFERENCE.md](CLEANUP-REFERENCE.md)
- What gets deleted
- Safety features
- Common scenarios
- Manual cleanup procedures

### ⚡ I Need Quick Commands
**→ Read:** [QUICK-REFERENCE.md](QUICK-REFERENCE.md)
- One-page reference card
- Copy-paste commands
- Common errors & fixes
- Quick verification commands

### 📊 I Want to See All Files
**→ Read:** [FILES-SUMMARY.md](FILES-SUMMARY.md)
- Complete file inventory
- Resource creation matrix
- File lifecycle
- Time estimates

---

## 📚 All Documentation Files

| # | File | Pages | Purpose | Read When |
|---|------|-------|---------|-----------|
| 1 | [README.md](README.md) | 5 | **Overview & Quick Start** | First time |
| 2 | [SETUP-GUIDE.md](SETUP-GUIDE.md) | 10 | **Complete Setup Instructions** | Setting up (01-03) |
| 3 | [CLEANUP-REFERENCE.md](CLEANUP-REFERENCE.md) | 4 | **Cleanup Guide** | Cleaning up (04) |
| 4 | [QUICK-REFERENCE.md](QUICK-REFERENCE.md) | 2 | **Quick Reference Card** | Need quick lookup |
| 5 | [FILES-SUMMARY.md](FILES-SUMMARY.md) | 6 | **File Inventory & Details** | Want full overview |
| 6 | [INDEX.md](INDEX.md) | 1 | **This File - Documentation Map** | Need navigation |

**Total Documentation:** 28 pages (~20 min read time)

---

## 🔧 All Script Files

| # | Script | Lines | Purpose | Run Order |
|---|--------|-------|---------|-----------|
| 1 | [01.Setup-Azure.ps1](01.Setup-Azure.ps1) | ~340 | Create Azure resources | **1st** |
| 2 | [02.Setup-Certificate.ps1](02.Setup-Certificate.ps1) | ~230 | Generate certificate | **2nd** |
| 3 | [03.Setup-PowerPlatformFederatedCredentials.ps1](03.Setup-PowerPlatformFederatedCredentials.ps1) | ~220 | Create federated credentials | **3rd** |
| 4 | [04.Cleanup-All.ps1](04.Cleanup-All.ps1) | ~310 | Delete all resources | **Anytime** (to restart) |

**Total Code:** ~1,100 lines of PowerShell

---

## ⚙️ Configuration Files

| File | Purpose | Edit? | Commit to Git? |
|------|---------|-------|----------------|
| `config.json` | **Active configuration** with your values | ✅ **YES** | ❌ **NO** |
| `config.json.template` | Example with sample values | ❌ No | ✅ **YES** |

---

## 📖 Reading Guide by Scenario

### Scenario 1: First Time User - Complete Setup

```
1. README.md (5 min)
   ↓
2. SETUP-GUIDE.md (15 min)
   ↓
3. Run scripts 01-03 (10 min)
   ↓
4. CLEANUP-REFERENCE.md (10 min)
   ↓
5. Run script 04 (1 min)

Total: ~40 min
```

### Scenario 2: Quick Setup (Already Familiar)

```
1. QUICK-REFERENCE.md (2 min)
   ↓
2. Run scripts 01-03 (10 min)

Total: ~12 min
```

### Scenario 3: Just Need to Clean Up

```
1. CLEANUP-REFERENCE.md (10 min)
   ↓
2. Run script 04 (1 min)

Total: ~11 min
```

### Scenario 4: Understanding the Full Picture

```
1. README.md (5 min)
   ↓
2. FILES-SUMMARY.md (10 min)
   ↓
3. SETUP-GUIDE.md (15 min)
   ↓
4. CLEANUP-REFERENCE.md (10 min)

Total: ~40 min
```

---

## 🗺️ Documentation Map

```
📁 Dev.DevKitV4.Server.2/
│
├── 📘 Documentation (Entry Points)
│   ├── INDEX.md ◄─────────────────────── YOU ARE HERE
│   ├── README.md ◄──────────────────── START HERE (New Users)
│   └── QUICK-REFERENCE.md ◄──────────── QUICK LOOKUP
│
├── 📗 Detailed Guides
│   ├── SETUP-GUIDE.md ◄──────────────── For Scripts 01-03
│   ├── CLEANUP-REFERENCE.md ◄─────────── For Script 04
│   └── FILES-SUMMARY.md ◄─────────────── File Details
│
├── 🔧 Scripts (Run These)
│   ├── 01.Setup-Azure.ps1
│   ├── 02.Setup-Certificate.ps1
│   ├── 03.Setup-PowerPlatformFederatedCredentials.ps1
│   └── 04.Cleanup-All.ps1
│
└── ⚙️ Configuration
    ├── config.json (auto-created, don't commit)
    └── config.json.template (example, safe to commit)
```

---

## 🎓 Learning Path

### Level 1: Beginner (0-30 min)
- [ ] Read [README.md](README.md)
- [ ] Understand the 4 scripts
- [ ] Review [QUICK-REFERENCE.md](QUICK-REFERENCE.md)

### Level 2: Setup Phase (30-60 min)
- [ ] Read [SETUP-GUIDE.md](SETUP-GUIDE.md)
- [ ] Understand config.json structure
- [ ] Get Environment/Organization IDs
- [ ] Run scripts 01-03
- [ ] Verify resources created

### Level 3: Cleanup Phase (60-70 min)
- [ ] Read [CLEANUP-REFERENCE.md](CLEANUP-REFERENCE.md)
- [ ] Understand what gets deleted
- [ ] Run script 04
- [ ] Verify resources deleted

### Level 4: Expert (70-80 min)
- [ ] Read [FILES-SUMMARY.md](FILES-SUMMARY.md)
- [ ] Understand full lifecycle
- [ ] Practice full cycle: Setup → Verify → Cleanup → Repeat

---

## 📊 Documentation Statistics

### By Type
- **Entry-level docs:** 2 files (README, QUICK-REFERENCE)
- **Detailed guides:** 2 files (SETUP-GUIDE, CLEANUP-REFERENCE)
- **Reference docs:** 2 files (FILES-SUMMARY, INDEX)
- **Scripts:** 4 files (.ps1)
- **Configuration:** 2 files (config.json, template)

### By Size
- **Small (< 5 KB):** 1 file (QUICK-REFERENCE)
- **Medium (5-15 KB):** 4 files (README, CLEANUP-REFERENCE, FILES-SUMMARY, INDEX)
- **Large (> 15 KB):** 1 file (SETUP-GUIDE)

### By Read Time
- **Quick (< 5 min):** QUICK-REFERENCE, INDEX
- **Medium (5-15 min):** README, CLEANUP-REFERENCE, FILES-SUMMARY
- **Detailed (> 15 min):** SETUP-GUIDE

---

## 🔍 Find Information Fast

### I need to...
| Task | Document | Section |
|------|----------|---------|
| Get started | [README.md](README.md) | Quick Start |
| Understand workflow | [README.md](README.md) | Workflow Diagram |
| Fill config.json | [SETUP-GUIDE.md](SETUP-GUIDE.md) | Step 1.2 |
| Get Environment IDs | [SETUP-GUIDE.md](SETUP-GUIDE.md) | Step 1.4 |
| Fix errors | [SETUP-GUIDE.md](SETUP-GUIDE.md) | Troubleshooting |
| Run cleanup | [CLEANUP-REFERENCE.md](CLEANUP-REFERENCE.md) | How to Run |
| See what's deleted | [CLEANUP-REFERENCE.md](CLEANUP-REFERENCE.md) | What Gets Deleted |
| Quick commands | [QUICK-REFERENCE.md](QUICK-REFERENCE.md) | Commands |
| Verify setup | [QUICK-REFERENCE.md](QUICK-REFERENCE.md) | Success Verification |
| See all files | [FILES-SUMMARY.md](FILES-SUMMARY.md) | Complete File List |
| Understand lifecycle | [FILES-SUMMARY.md](FILES-SUMMARY.md) | config.json Lifecycle |
| Navigate docs | [INDEX.md](INDEX.md) | This file |

---

## 🎯 Quick Decision Tree

```
Do you know what you want to do?
│
├─ NO ──→ Read README.md
│
└─ YES
   │
   ├─ Setup Azure resources
   │  └──→ Read SETUP-GUIDE.md → Run 01-03
   │
   ├─ Clean up everything
   │  └──→ Read CLEANUP-REFERENCE.md → Run 04
   │
   ├─ Quick command lookup
   │  └──→ Read QUICK-REFERENCE.md
   │
   ├─ Understand files
   │  └──→ Read FILES-SUMMARY.md
   │
   └─ Navigate documentation
      └──→ Read INDEX.md (this file)
```

---

## ✅ Documentation Checklist

Use this checklist to track your reading progress:

### Entry Level
- [ ] [README.md](README.md) - Overview
- [ ] [QUICK-REFERENCE.md](QUICK-REFERENCE.md) - Quick lookup

### Setup Phase
- [ ] [SETUP-GUIDE.md](SETUP-GUIDE.md) - Complete setup guide
- [ ] Run and verify scripts 01-03

### Cleanup Phase
- [ ] [CLEANUP-REFERENCE.md](CLEANUP-REFERENCE.md) - Cleanup guide
- [ ] Run and verify script 04

### Advanced
- [ ] [FILES-SUMMARY.md](FILES-SUMMARY.md) - File details
- [ ] [INDEX.md](INDEX.md) - This navigation guide

---

## 🆘 Still Need Help?

### Step 1: Check Documentation
Use this index to find the right document for your question.

### Step 2: Read Error Messages
Scripts provide detailed error messages with context.

### Step 3: Verify Prerequisites
- PowerShell 7+
- Azure CLI
- Proper permissions

### Step 4: Check Script Output
Scripts use color coding for easy reading.

### Step 5: Review Azure Portal
Verify resources manually if needed.

---

## 📝 Documentation Maintenance

### Current Version
**Version:** 4.0
**Last Updated:** October 2025
**Repository:** Dynamics-Crm-DevKit
**Branch:** v4

### What's New in 4.0
- ✨ Added 04.Cleanup-All.ps1
- ✨ Added comprehensive documentation (5 .md files)
- ✨ Reorganized config.json (flat structure, PascalCase)
- ✨ Enhanced error messages and validation
- ✨ Color-coded output for all scripts

---

## 🎉 You're All Set!

You now have access to:
- ✅ 6 documentation files
- ✅ 4 PowerShell scripts
- ✅ 2 configuration files
- ✅ Complete navigation guide (this file)

**Start your journey with [README.md](README.md)** 🚀

---

**Document:** INDEX.md
**Purpose:** Navigation and quick reference for all documentation
**Type:** Meta-documentation
**Version:** 1.0

# 🤖 GEMINI.md - AI-Optimized Development Guide

> **Purpose**: Instructions for optimal AI-assisted development with **Antigravity IDE** (Gemini-powered) and other AI coding assistants.

---

## 🎯 What is Antigravity IDE?

**Antigravity** is a VS Code-based IDE powered by Google Gemini AI models. It provides:
- Real-time code assistance
- Context-aware suggestions
- Multi-file understanding
- Tool usage (file operations, terminal, browser, web search)
- Memory system for project context

---

## 📁 Project Structure for AI

This project is structured to maximize AI understanding:

```
v5/
├── .agent/                          # 🤖 AI Agent Configuration
│   ├── rules/                       # Core rules AI must follow
│   │   ├── core-rule.md            # Primary rules (greeting, constraints)
│   │   └── devkit-analyzer.md      # Analyzer-specific rules
│   ├── workflows/                   # Slash command definitions
│   │   ├── build-debug.md          # /build-debug
│   │   ├── build-cli.md            # /build-cli
│   │   ├── build-vsix.md           # /build-vsix
│   │   ├── build-analyzer.md       # /build-analyzer
│   │   └── ...
│   └── skills/                      # Reusable skill modules
├── README.md                        # Project overview
├── AGENTS.md                        # Generic AI instructions
├── GEMINI.md                        # This file (Gemini/Antigravity specific)
└── [project folders...]
```

---

## ⚡ Slash Commands (Workflows)

Antigravity supports **slash commands** that trigger predefined workflows:

| Command | Description | Auto-Run |
|---------|-------------|:--------:|
| `/build-debug` | Full DEBUG build + install CLI | ✅ turbo-all |
| `/build-cli` | Build CLI only | ✅ turbo-all |
| `/build-vsix` | Build VSIX only | ✅ turbo-all |
| `/build-analyzer` | Build + test analyzers | ✅ turbo-all |
| `/build-tool` | Build Tool package | ✅ turbo-all |
| `/build-release` | Release build (human only) | ❌ |
| `/clean-all` | Clean all artifacts | ✅ turbo-all |
| `/create-new-analyzer` | Create new analyzer | ❌ |

### How to Create New Workflows

Create a file in `.agent/workflows/[name].md`:

```markdown
---
description: Short description of what this workflow does
---

// turbo-all

1. First step description
2. Second step description
3. ...
```

The `// turbo-all` annotation allows AI to auto-run all terminal commands.

---

## 🧠 Memory System (Rules)

Place context files in `.agent/rules/`:

| File | Purpose |
|------|---------|
| `core-rule.md` | Primary rules (always loaded) |
| `devkit-analyzer.md` | Loaded when working on analyzers |

### Rule File Format

```markdown
# Rule Title

## Section 1
Content...

## Section 2
| Table | Format | Works |
|-------|--------|-------|
| Yes   | Tables | Great |
```

---

## 💡 Best Practices for AI Coding

### 1. Be Specific with Context

```
❌ "Fix the bug"
✅ "Fix the NullReferenceException in XrmHelper.cs line 245 when processing EntityReference"
```

### 2. Use @ References

Reference files directly:
- `@[XrmHelper.cs]` - Reference a specific file
- `@[DynamicsCrm.DevKit.Cli]` - Reference a folder
- AI will automatically fetch file content

### 3. Use Slash Commands for Builds

```
❌ "Build the project"
✅ "/build-debug"
```

### 4. Provide Error Messages

When reporting errors, include:
- Full error message
- Stack trace if available
- Steps to reproduce

### 5. Multi-Step Requests

Break complex tasks into steps:
```
1. First, scan the XrmHelper.cs file
2. Find all methods that use ServiceClient
3. Create a summary of their purposes
```

---

## 🔧 Configuration Tips

### Maximize Context Window

Antigravity has a large context window. Leverage it by:
- Keeping related files open
- Using `@` references
- Including full error logs

### Enable Auto-Run for Safe Commands

In workflow files, use:
- `// turbo` - Auto-run next step only
- `// turbo-all` - Auto-run all steps

### Trust Safe Commands

For read-only commands, set `SafeToAutoRun: true`:
```powershell
# Safe: reading files, listing directories, running tests
# NOT Safe: deleting files, pushing git, modifying production
```

---

## 🎨 Response Format Customization

This project uses Vietnamese greetings. AI will:

**Start responses with:**
```
🌞 Xin chào buổi sáng anh Phước 🌞  (morning: 6-12)
☀️ Xin chào buổi trưa anh Phước ☀️   (noon: 12-14)
🌤️ Xin chào buổi chiều anh Phước 🌤️ (afternoon: 14-18)
🌙 Xin chào buổi tối anh Phước 🌙   (evening: 18-6)
```

**End responses with:**
```
🌞 Tôi đã là xong rồi anh Phước, hãy kiểm tra lại những gì tôi làm nhé 🌞
```

---

## 🛠️ Tool Usage Patterns

### File Operations

```
view_file     - Read file content (max 800 lines at a time)
write_to_file - Create new files
replace_file_content - Edit single block
multi_replace_file_content - Edit multiple blocks
```

### Terminal Operations

```
run_command   - Execute shell commands
command_status - Check async command status
send_command_input - Interact with running processes
```

### Search Operations

```
grep_search   - Search file contents
find_by_name  - Search file names
view_code_item - View specific functions/classes
```

### Browser Operations

```
browser_subagent - Automate browser tasks
read_url_content - Fetch web content
```

---

## 📊 Project-Specific Knowledge

### Dataverse SDK

| Package | Platform | Usage |
|---------|----------|-------|
| `Microsoft.PowerPlatform.Dataverse.Client` | Cross-platform | ✅ Use this |
| `Microsoft.Xrm.Tooling.Connector` | Windows only | ❌ Avoid |

### Authentication Types

| Type | Cross-Platform | Use Case |
|------|:--------------:|----------|
| `Interactive` | ✅ | Browser login with MFA |
| `DeviceCode` | ✅ | Headless/SSH environments |
| `ClientSecret` | ✅ | CI/CD pipelines |
| `FromPac` | ✅ | Reuse PAC CLI tokens |
| `OAuth` | ❌ | Legacy username/password |
| `AD` | ❌ | On-premises only |

### Analyzer IDs

Current: `DEVKIT1001` → `DEVKIT1021` (21 analyzers)
Planned: `DEVKIT1022` → `DEVKIT1046` (25 more in roadmap)

---

## 🚨 Common Pitfalls

### 1. Build Mode
```
❌ dotnet build (for VSIX)
✅ MSBuild (required for VSIX projects)
```

### 2. Configuration
```
❌ Release mode (human operators only)
✅ Debug mode (always use for development)
```

### 3. Git Operations
```
❌ Commit/push without explicit request
✅ Only modify files, let human handle git
```

### 4. File Paths
```
❌ Relative paths
✅ Absolute paths for all tool operations
```

---

## 🔍 Debugging Tips

### Check CLI Version
```powershell
devkit --version
# Expected: x.x.x.x Build: yyyy.MM.dd HH.mm.ss
```

### Check Published Packages
```powershell
ls Published\
# Should contain 4 files:
# - DynamicsCrm.DevKit.Analyzers.x.x.x.x.nupkg
# - DynamicsCrm.DevKit.Cli.x.x.x.x.nupkg
# - DynamicsCrm.DevKit.Tool.x.x.x.x.nupkg
# - DynamicsCrm.DevKit.x.x.x.x.vsix
```

### Verify Const.cs Restoration
```powershell
git status
# Const.cs should NOT be modified after build
# Build script restores placeholders automatically
```

---

## 📚 Resources

- [Antigravity IDE Documentation](https://antigravity.dev/docs)
- [Gemini API Documentation](https://ai.google.dev/docs)
- [DynamicsCrm.DevKit Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki)
- [Microsoft Dataverse Documentation](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/)

---

*Last Updated: 05.02.2026*
*Optimized for Antigravity IDE with Gemini AI*

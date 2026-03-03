# GEMINI.md - Antigravity IDE Guide

> **Purpose**: Antigravity-specific instructions. For project rules and constraints, see `AGENTS.md` and `.agent/rules/`.

---

## What is Antigravity IDE?

**Antigravity** is a VS Code-based IDE powered by Google Gemini AI models. This project uses `.agent/` as the source of truth for all AI configuration.

---

## Slash Commands (Workflows)

Antigravity supports **slash commands** via `.agent/workflows/*.md`:

| Command | Description | Auto-Run |
|---------|-------------|:--------:|
| `/build-debug` | Full DEBUG build + install CLI | turbo-all |
| `/build-cli` | Build CLI only | turbo-all |
| `/build-vsix` | Build VSIX only | turbo-all |
| `/build-analyzer` | Build + test analyzers | turbo-all |
| `/build-tool` | Build Tool package | turbo-all |
| `/build-release` | Release build (human only) | no |
| `/clean-all` | Clean all artifacts | turbo-all |
| `/create-new-analyzer` | Create new analyzer | no |
| `/client-code-clean` | Clean all 6 TestClientCode folders | turbo |
| `/client-code-install` | Install NPM packages for TestClientCode | turbo |
| `/client-code-generate` | Generate entity files via CLI | turbo |
| `/client-code-sync` | Sync source-of-truth files to TestClientCode | turbo |
| `/client-code-test` | Run checks, builds, tests for TestClientCode | turbo |
| `/run-cli` | Run a specific CLI profile | no |

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
The `// turbo` annotation allows AI to auto-run only the next step.

---

## Memory System (Rules)

Rules in `.agent/rules/` are loaded automatically:

| File | Purpose |
|------|---------|
| `core-rule.md` | Primary rules (always loaded) |
| `devkit-analyzer.md` | Loaded when working on analyzers |
| `client-code.md` | TestClientCode source-of-truth and sync rules |
| `test-cli-profiles.md` | CLI profiles for integration tests |

### Rule File Format

```markdown
---
trigger: always_on
---

# Rule Title

## Section 1
Content...
```

---

## Skills

Reusable skill modules in `.agent/skills/`:

| Skill | Purpose |
|-------|---------|
| `markdown-management/SKILL.md` | Markdown formatting best practices |
| `powershell-windows/SKILL.md` | PowerShell Windows patterns and pitfalls |

---

## Tool Usage Patterns

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

## Configuration Tips

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

## Cross-IDE Sync

This project supports 4 IDEs. The `.agent/` folder is the source of truth:

```
.agent/rules/      --> .cursor/rules/      (synced via Sync-AI-Config.ps1)
.agent/workflows/  --> .cursor/commands/    (synced via Sync-AI-Config.ps1)
.agent/rules/      --> .github/copilot-instructions.md (synced)
```

After editing `.agent/` files, run:
```powershell
.\DynamicsCrm.DevKit.Scripts\Sync-AI-Config.ps1
```

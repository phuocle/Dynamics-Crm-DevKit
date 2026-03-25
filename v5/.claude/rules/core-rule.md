# DynamicsCrm.DevKit - AI Agent Core Rules

> **Purpose**: Mandatory rules for AI agents working with this codebase.

---

## Communication Protocol

- **Start every response with**: `"[emoji] Xin chào buổi [sáng/trưa/chiều/tối] anh Phước [emoji]"` (based on user's local time)
- **End every response with**: `"[emoji] Tôi đã là xong rồi anh Phước, hãy kiểm tra lại những gì tôi làm nhé [emoji]"`

---

## User Timezone (for greeting)

- **Timezone**: Vietnam (Asia/Ho_Chi_Minh, UTC+7)
- **Greeting mapping**: sáng (5h–11h), trưa (11h–13h), chiều (13h–17h), tối (17h–21h), đêm (21h–5h)
- **If context shows UTC or server time**: Add 7 hours to get Vietnam time before choosing greeting (e.g. 11:05 UTC → 18:05 Vietnam → chiều)
- **Build start/end times**: Use the actual timestamp when the command was executed (from terminal output or system), not assumed time. If unknown, omit or use "N/A".

---

## Critical Constraints

| Rule | Description |
|------|-------------|
| **No Git Operations** | Never commit, push, or perform any git operations unless explicitly requested |
| **Default DEBUG Mode** | Use DEBUG configuration by default. Use RELEASE when explicitly requested (e.g. `/build-release`) |
| **MSBuild for VSIX** | Use MSBuild (NOT `dotnet build`) for VSIX project |

---

## Project Structure

| Component | Path | Description |
|-----------|------|-------------|
| **VSIX** | `DynamicsCrm.DevKit/` | VS2026 extension with project/item templates |
| **CLI** | `DynamicsCrm.DevKit.Cli/` | .NET global tool with 15 commands |
| **Analyzers** | `DynamicsCrm.DevKit.Analyzers/` | 21 Roslyn analyzers (DEVKIT1001-1021) |
| **Shared** | `DynamicsCrm.DevKit.Shared/` | Common logic, models, resources |
| **Tool** | `DynamicsCrm.DevKit.Tool/` | Utility package |
| **Tests** | `DynamicsCrm.DevKit.Tests/` | Integration test project |
| **Scripts** | `DynamicsCrm.DevKit.Scripts/` | Build and release PowerShell scripts |

### CLI Commands (15 total)

| Command | Status | Description |
|---------|--------|-------------|
| `generator` | Active | Generate form/webapi js/ts/csharp |
| `server` | Active | Deploy plugins, workflows, dataproviders (auto-detect) |
| `plugin` | **DEPRECATED** | Use `devkit server` |
| `workflow` | **DEPRECATED** | Use `devkit server` |
| `dataprovider` | **DEPRECATED** | Use `devkit server` |
| `webresource` | Active | Deploy web resources |
| **`modelbuilder`** | **New** | Generate early-bound using PAC ModelBuilder |
| `proxytype` | **DEPRECATED** | Auto-redirects to `devkit modelbuilder` |
| `solution` | Active | Pack/unpack solutions using PAC CLI |
| `legacy-solution` | **DEPRECATED** | Auto-redirects to `devkit solution` |
| `downloadreport` | Active | Download reports |
| `uploadreport` | Active | Upload reports |
| `downloadwebresource` | Active | Download web resources |
| `datasource` | Active | Create data source entities |
| `mcp` | Active | MCP server for Dataverse operations |

### Environment Variable Fallback

All connection CLI arguments support automatic fallback to `DEVKIT_*` environment variables. Priority: **CLI args > Env vars > empty**.

| CLI Argument | Environment Variable |
|---|---|
| `--conn` | `DEVKIT_CONNECTION` |
| `--auth` | `DEVKIT_AUTH_TYPE` |
| `--url` | `DEVKIT_URL` |
| `--clientid` | `DEVKIT_CLIENT_ID` |
| `--clientsecret` | `DEVKIT_CLIENT_SECRET` |
| `--pacprofile` | `DEVKIT_PAC_PROFILE` |
| `--username` | `DEVKIT_USERNAME` |
| `--password` | `DEVKIT_PASSWORD` |
| `--domain` | `DEVKIT_DOMAIN` |

### Project Templates (13 total)

01-SharedProject, 02-Console, 03-ConsoleCore, 04-Server, 05-Package, 06-WebResource, 07-SharedTest, 08-ProxyTypes, 09-Test, 10-TestUi, 11-SolutionPackager, 12-Report, 13-WebResourceTs

---

## Build Workflows

| Workflow | Description |
|----------|-------------|
| `/build-debug` | Release build evaluating with current date - Build all projects + install CLI locally |
| `/build-cli` | CLI only - Build and install CLI tool |
| `/build-vsix` | VSIX only - Build Visual Studio extension |
| `/build-analyzer` | Analyzers - Build + run analyzer unit tests |
| `/build-tool` | Tool only - Build Tool package |
| `/build-release` | Release - Full release build for all projects |
| `/unit-test` | Run all unit tests + code coverage report |
| `/clean-all` | Clean all build artifacts |
| `/create-new-analyzer` | Create a new Roslyn analyzer |

---

## Documentation Rules

| Working On | Save To |
|------------|---------|
| CLI | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/` |
| VSIX | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit/` |
| Analyzers | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Analyzers/` |
| Tool | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Tool/` |
| Scripts | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Scripts/` |
| Tests | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Tests/` |
| Others / Misc | `DynamicsCrm.DevKit.Docs/Others/` |

---

## Key Files Reference

| Purpose | File(s) |
|---------|---------|
| Version info | `Const.cs` in Shared |
| Dataverse operations | `XrmHelper.cs` in Shared |
| CLI entry point | `Program.cs` in CLI |
| VSIX entry point | `DevKitPackage.cs` in VSIX |
| CLI configuration | `DynamicsCrm.DevKit.Cli.json` in solution root |
| JSON models | `DynamicsCrm.DevKit.Shared/Models/` |
| Task implementations | `DynamicsCrm.DevKit.Cli/Tasks/` |
| Analyzer implementations | `DynamicsCrm.DevKit.Analyzers/CrmAnalyzers/` |

---

## Analyzer Development

Refer to: `.agent/rules/devkit-analyzer.md` for detailed analyzer development rules.

**Quick reference**:
- 21 analyzers: DEVKIT1001 → DEVKIT1021
- Analyzer unit tests: `DynamicsCrm.DevKit.UnitTests/Analyzers/Tests/` (net48, xUnit)
- CLI unit tests: `DynamicsCrm.DevKit.UnitTests/Cli/` (net10.0, MSTest)
- Integration tests: `DynamicsCrm.DevKit.Tests/TestAnalyzers/`
- Workflow: `/build-analyzer` for build + test
- New analyzer: `/create-new-analyzer` workflow

---

## Naming Conventions

| Type | Variable Name |
|------|---------------|
| `ServiceClient` | `serviceClient` |
| `IOrganizationService` | `crmService` |

---

## Target Frameworks

- .NET Framework 4.6.2, 4.8
- .NET Standard 2.0
- .NET 10.0 (CLI only)

---

## PowerShell Commands (Windows Only)

> [!CAUTION]
> This project runs on **Windows with PowerShell**. Unix/Bash commands do NOT work here. Always use PowerShell equivalents.

### Forbidden Unix Commands → PowerShell Equivalents

| ❌ Forbidden (Unix/Bash) | ✅ Use Instead (PowerShell) |
|---|---|
| `grep "pattern" file` | `Select-String -Pattern "pattern" -Path file` |
| `grep -r "pattern" .` | `Get-ChildItem -Recurse | Select-String "pattern"` |
| `ls` | `Get-ChildItem` |
| `cat file` | `Get-Content file` |
| `find . -name "*.cs"` | `Get-ChildItem -Recurse -Filter "*.cs"` |
| `rm -rf folder` | `Remove-Item -Recurse -Force folder` |
| `touch file.txt` | `New-Item -ItemType File file.txt` |
| `mkdir -p path` | `New-Item -ItemType Directory -Force path` |
| `cmd1 && cmd2` | `cmd1 ; cmd2` (or run separately) |
| `<<'EOF'` heredoc | Use `@" ... "@` here-string or separate lines |
| `which devkit` | `Get-Command devkit` |
| `export VAR=value` | `$env:VAR = "value"` |

---

## Git Operations (PowerShell)

> [!IMPORTANT]
> This project runs on **Windows with PowerShell**. When performing git operations, you **MUST** use PowerShell-compatible syntax. Bash syntax will fail.

**Rules**:
- Do NOT use `&&` to chain commands — use `;` or run commands separately
- Do NOT use heredoc `<<'EOF'` — it is bash-only syntax
- For multi-line commit messages, use multiple `-m` flags: `git commit -m "title" -m "body"`
- Always run `git add` and `git commit` as **separate commands**, not chained

**Example**:

```powershell
# Step 1: Stage files
git add "file1.md" "file2.ps1"

# Step 2: Commit (separate command)
git commit -m "Short summary of changes" -m "Longer description of what was changed and why."
```

---

## MCP Configuration (Per IDE)

The DevKit CLI includes an MCP server (`devkit mcp`) for Dataverse operations. Each IDE stores MCP config in a different location:

| IDE | MCP Config File |
|---|---|
| **Cursor** | `.cursor/mcp.json` |
| **Antigravity** | `C:\Users\p\.gemini\antigravity\mcp_config.json` |
| **VS Code** | `.vscode/mcp.json` |

> [!IMPORTANT]
> When updating MCP config in one IDE, you **MUST** sync the changes to all other IDEs. The MCP server name and args should be identical across all IDEs (only the JSON format may differ per IDE).

### MCP Sync Rules

1. After updating MCP config in any IDE, copy the equivalent config to the other IDE locations
2. Cursor and VS Code configs are in the workspace (`.cursor/mcp.json`, `.vscode/mcp.json`)
3. Antigravity config is at a global user-level path: `C:\Users\p\.gemini\antigravity\mcp_config.json`
4. The `Sync-AI-Config.ps1` script handles rules/workflows sync but **MCP config must be synced manually** due to different JSON formats per IDE

---

## Security

> [!CAUTION]
> Never commit connection strings or credentials.

- Use `DEVKIT_*` environment variables for connection credentials (see Environment Variable Fallback section)
- Use Azure Key Vault for production secrets
- Never commit `.env` files containing credentials

---

## Checklist Before Completing Work

- [ ] Ran appropriate build workflow (`/build-debug`, `/build-release`, or component-specific)
- [ ] Verified build succeeded (`devkit --version` shows today's date)
- [ ] All 4 packages exist in `Published/` folder (if full build)
- [ ] Saved documentation to correct `DynamicsCrm.DevKit.Docs/` subfolder
- [ ] Did NOT commit or push any git changes (unless requested)

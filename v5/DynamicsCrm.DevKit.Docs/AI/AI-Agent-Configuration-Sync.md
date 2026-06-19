# AI Agent Configuration Sync

Last reviewed: 2026-06-19

This document explains how the AI-related files in this repository should be organized so a team can use Claude, Codex, GitHub Copilot, and Google Antigravity without drifting out of sync.

The short version:

- `AGENTS.md` should be the source of truth for repository-wide engineering rules.
- `DynamicsCrm.DevKit.Scripts/AI/` should be the source of truth for portable rules and workflows.
- Tool-specific folders (`.claude/`, `.github/`, `.codex/`, `.agents/`) should be generated or kept as thin adapters.
- MCP configuration needs special handling because every client uses a different file format.

## Current State In v5

Current files and folders:

```text
AGENTS.md
CLAUDE.md
.agents/
.codex/
.claude/
.github/
.vscode/
DynamicsCrm.DevKit.Scripts/AI/
DynamicsCrm.DevKit.Scripts/Sync-AI-Config.ps1
```

Tracked MCP example files:

```text
.mcp.json.example
.codex/config.toml.example
.vscode/mcp.json.example
.agents/mcp_config.json.example
```

Observations:

- `AGENTS.md` is the repository-wide instruction source.
- `CLAUDE.md` is generated and delegates to `AGENTS.md` with `@AGENTS.md`.
- `DynamicsCrm.DevKit.Scripts/AI/` is the neutral source folder for portable rules and workflows.
- `.agents/` is now the generated Antigravity adapter.
- `.claude/` and `.github/` are generated client adapters.
- `.codex/config.toml.example`, `.mcp.json.example`, `.vscode/mcp.json.example`, and `.agents/mcp_config.json.example` are generated MCP examples.
- Actual MCP configs are ignored local files because they may contain per-user settings or credentials.

## How Each Tool Reads Instructions

### Claude App, Claude CLI, Claude Code Extension

Claude Code uses the same engine across terminal, VS Code, JetBrains, Desktop, and Web surfaces. Claude documentation says `CLAUDE.md`, settings, and MCP servers work across those surfaces.

Claude instruction layers:

```text
User/global:
  ~/.claude/CLAUDE.md
  ~/.claude/rules/*.md
  ~/.claude/skills/<skill>/SKILL.md
  ~/.claude/settings.json
  ~/.claude.json                    # user/local MCP server records

Project:
  CLAUDE.md
  .claude/CLAUDE.md
  .claude/rules/*.md
  .claude/skills/<skill>/SKILL.md
  .claude/commands/*.md             # still works, but skills are preferred
  .claude/settings.json
  .claude/settings.local.json       # local, normally ignored
  .mcp.json                         # project-scoped MCP
```

Key behavior:

- Claude reads `CLAUDE.md` files at session start.
- Claude reads parent directory guidance before closer guidance, so instructions nearer the launch folder are later in context.
- `.claude/rules/*.md` can be always-on or path-scoped through frontmatter.
- `.claude/commands/*.md` still works as slash commands, but Claude now recommends skills in `.claude/skills/<name>/SKILL.md`.
- Project MCP servers belong in `.mcp.json`; user/local MCP servers are stored in `~/.claude.json`.
- Claude prompts before using project-scoped MCP servers from `.mcp.json`.

Recommended v5 shape:

```text
CLAUDE.md                           # generated thin adapter: @AGENTS.md
.claude/rules/*.md                  # generated from .agents/rules
.claude/commands/claude-*.md        # generated legacy slash commands
.claude/skills/<skill>/SKILL.md     # generated from .agents/skills when needed
.mcp.json.example                   # generated MCP adapter example
```

### Codex App, Codex CLI, Codex VS Code Extension

Codex uses `AGENTS.md` for durable project instructions. Codex also supports project-scoped config in `.codex/config.toml`.

Codex instruction/config layers:

```text
User/global:
  ~/.codex/AGENTS.md
  ~/.codex/AGENTS.override.md
  ~/.codex/config.toml
  ~/.codex/agents/*.toml
  ~/.agents/skills/<skill>/SKILL.md

Project:
  AGENTS.md
  AGENTS.override.md
  .codex/config.toml                # project-scoped config, trusted projects only
  .codex/agents/*.toml              # project-scoped custom subagents
  .agents/skills/<skill>/SKILL.md   # repo skills discovered by Codex
```

Key behavior:

- Codex reads `AGENTS.md` before work starts.
- Codex supports nested `AGENTS.md` or `AGENTS.override.md` files for subfolder-specific overrides.
- Codex CLI and IDE extension share `config.toml` configuration layers.
- MCP servers are configured under `[mcp_servers]` in `config.toml`.
- Codex skills are available in CLI, IDE extension, and Codex app.
- Codex discovers repo skills from `.agents/skills` at the working directory, parent folders, and repo root.

Recommended v5 shape:

```text
AGENTS.md                           # source of truth for repo rules
.codex/config.toml.example          # generated Codex MCP/profile adapter example
.codex/agents/*.toml                # optional; only for Codex-specific subagents
.agents/skills/<skill>/SKILL.md     # shared skills source
```

### GitHub Copilot With VS Code

VS Code/Copilot has several customization types:

```text
Always-on instructions:
  .github/copilot-instructions.md
  AGENTS.md                         # supported as always-on, experimental
  CLAUDE.md                         # compatibility support

Scoped instructions:
  .github/instructions/*.instructions.md

Reusable slash prompts:
  .github/prompts/*.prompt.md

Skills:
  .github/skills/<skill>/SKILL.md
  .claude/skills/<skill>/SKILL.md
  .agents/skills/<skill>/SKILL.md

MCP:
  .vscode/mcp.json
  user profile mcp.json
```

Key behavior:

- `.github/copilot-instructions.md` is always applied to workspace chat requests.
- VS Code also recognizes `AGENTS.md` and `CLAUDE.md` as compatibility instruction files.
- Prompt files live in `.github/prompts` and use `.prompt.md`.
- Prompt files can declare `agent`, `tools`, `model`, and other frontmatter.
- MCP config for VS Code is `mcp.json`, usually `.vscode/mcp.json` for workspace scope.
- Project skills can live in `.github/skills`, `.claude/skills`, or `.agents/skills`.

Recommended v5 shape:

```text
.github/copilot-instructions.md     # generated from AGENTS.md or points strongly to it
.github/prompts/copilot-*.prompt.md # generated from .agents/workflows
.github/skills/                     # optional; prefer .agents/skills for portability
.vscode/mcp.json.example            # generated VS Code MCP adapter example
```

### Google Antigravity

Antigravity has IDE and CLI surfaces. The current official docs use `.agents/`, not `.agent/`, for new workspace configuration.

Antigravity instruction/config layers:

```text
Global:
  ~/.gemini/GEMINI.md
  ~/.gemini/antigravity-cli/skills/
  ~/.gemini/antigravity-cli/mcp_config.json
  ~/.gemini/config/mcp_config.json          # Antigravity Editor custom MCP config

Workspace:
  AGENTS.md
  GEMINI.md
  .agents/rules/*.md
  .agents/skills/<skill>/SKILL.md           # Antigravity IDE workspace skills
  .agents/mcp_config.json                   # Antigravity CLI workspace MCP
  .agent/rules/*.md                         # legacy compatibility; not used in this repo
```

Key behavior:

- Antigravity reads `AGENTS.md` in addition to `GEMINI.md`.
- Workspace rules default to `.agents/rules`.
- `.agent/rules` remains backward compatible in Antigravity, but this repo intentionally does not keep `.agent/` to avoid duplicate rules.
- Antigravity IDE rules can be always-on, manual, model-decision, or glob-scoped.
- Antigravity IDE workflows are saved as markdown and invoked as slash commands.
- Antigravity IDE workspace skills live in `.agents/skills/<skill>/SKILL.md`.
- Antigravity CLI docs also describe CLI skills under `.agents/skills`; if a specific CLI version expects flat `.md` skill files, generate those as a compatibility adapter instead of making them canonical.
- Antigravity CLI workspace MCP config lives in `.agents/mcp_config.json`.
- Antigravity Editor custom MCP config currently lives at `~/.gemini/config/mcp_config.json`.

Recommended v5 shape:

```text
.agents/rules/*.md                  # source for Antigravity and portable rules
.agents/workflows/anti-*.md         # generated Antigravity workflows
.agents/skills/*.md or */SKILL.md   # source for portable skills
.agents/mcp_config.json.example     # generated Antigravity CLI MCP adapter example
```

## MCP Is The Most Important Sync Problem

Instructions can be copied or imported, but MCP cannot be represented by one shared file because each client has a different schema.

Use one logical server name everywhere:

```text
dynamicscrm-devkit
```

Use one logical command everywhere, but pass a client-specific process alias as the optional `devkit mcp [name]` argument:

```text
devkit mcp <alias>
```

Recommended aliases:

| Client | Alias | Command |
|---|---|---|
| Claude App / Claude CLI / Claude Code extension | `devkit-claude` | `devkit mcp devkit-claude` |
| Codex App / Codex CLI / Codex extension | `devkit-codex` | `devkit mcp devkit-codex` |
| GitHub Copilot in VS Code | `devkit-copilot` | `devkit mcp devkit-copilot` |
| Google Antigravity | `devkit-antigravity` | `devkit mcp devkit-antigravity` |

The MCP config server key can stay `dynamicscrm-devkit`; the alias is for the spawned `devkit` process so Task Manager, process cleanup, logs, and MCP diagnostics can tell which AI client started it.

Use environment variables for connection settings and secrets:

```text
DEVKIT_AUTH_TYPE
DEVKIT_URL
DEVKIT_CLIENT_ID
DEVKIT_CLIENT_SECRET
DEVKIT_PAC_PROFILE
DEVKIT_USERNAME
DEVKIT_PASSWORD
DEVKIT_DOMAIN
```

Do not commit real secrets. Prefer `FromPac`, `Interactive`, or per-user environment variables for local development. Use `ClientSecret` only where the secret comes from a secure user/global store, CI secret, or local untracked file.

### Claude MCP Adapter

Tracked example file:

```text
.mcp.json.example
```

Each developer copies it to the local ignored file:

```text
.mcp.json
```

Example shape:

```json
{
  "mcpServers": {
    "dynamicscrm-devkit": {
      "command": "devkit",
      "args": ["mcp", "devkit-claude"],
      "env": {
        "DEVKIT_AUTH_TYPE": "${DEVKIT_AUTH_TYPE:-FromPac}",
        "DEVKIT_URL": "${DEVKIT_URL}",
        "DEVKIT_PAC_PROFILE": "${DEVKIT_PAC_PROFILE:-default}"
      }
    }
  }
}
```

Claude supports environment variable expansion in `.mcp.json`.

### Codex MCP Adapter

Tracked example file:

```text
.codex/config.toml.example
```

Each developer copies it to the local ignored file:

```text
.codex/config.toml
```

Example shape:

```toml
[mcp_servers.dynamicscrm-devkit]
command = "devkit"
args = ["mcp", "devkit-codex"]
env_vars = [
  "DEVKIT_AUTH_TYPE",
  "DEVKIT_URL",
  "DEVKIT_CLIENT_ID",
  "DEVKIT_CLIENT_SECRET",
  "DEVKIT_PAC_PROFILE",
  "DEVKIT_USERNAME",
  "DEVKIT_PASSWORD",
  "DEVKIT_DOMAIN"
]
startup_timeout_sec = 20
tool_timeout_sec = 120
```

Codex CLI and Codex IDE extension share this config.

### VS Code Copilot MCP Adapter

Tracked example file:

```text
.vscode/mcp.json.example
```

Each developer copies it to the local ignored file:

```text
.vscode/mcp.json
```

Example shape:

```json
{
  "servers": {
    "dynamicscrm-devkit": {
      "type": "stdio",
      "command": "devkit",
      "args": ["mcp", "devkit-copilot"],
      "env": {
        "DEVKIT_AUTH_TYPE": "${input:devkitAuthType}",
        "DEVKIT_URL": "${input:devkitUrl}",
        "DEVKIT_PAC_PROFILE": "${input:devkitPacProfile}"
      }
    }
  },
  "inputs": [
    {
      "id": "devkitAuthType",
      "type": "promptString",
      "description": "DEVKIT_AUTH_TYPE",
      "default": "FromPac"
    },
    {
      "id": "devkitUrl",
      "type": "promptString",
      "description": "DEVKIT_URL"
    },
    {
      "id": "devkitPacProfile",
      "type": "promptString",
      "description": "DEVKIT_PAC_PROFILE",
      "default": "default"
    }
  ]
}
```

VS Code uses `servers`, not `mcpServers`.

### Antigravity MCP Adapter

Tracked example file:

```text
.agents/mcp_config.json.example
```

Each developer copies it to the local ignored file:

```text
.agents/mcp_config.json
```

Example shape:

```json
{
  "mcpServers": {
    "dynamicscrm-devkit": {
      "command": "devkit",
      "args": ["mcp", "devkit-antigravity"],
      "env": {
        "DEVKIT_AUTH_TYPE": "FromPac",
        "DEVKIT_PAC_PROFILE": "default"
      }
    }
  }
}
```

Antigravity remote MCP config uses `serverUrl`, not legacy `url` or `httpUrl`.

Important local finding: `devkit mcp --setup-guide` currently says Antigravity config is `C:\Users\[User]\.gemini\antigravity\mcp_config.json`. Current Antigravity docs show newer paths:

```text
Antigravity Editor: ~/.gemini/config/mcp_config.json
Antigravity CLI global: ~/.gemini/antigravity-cli/mcp_config.json
Antigravity CLI workspace: .agents/mcp_config.json
```

That means the built-in setup guide may need updating.

## Proposed Source Of Truth

Use source-of-truth by content type:

| Content | Source of truth | Generated/adapted outputs |
|---|---|---|
| Repo-wide architecture, build, test, safety rules | `AGENTS.md` | `CLAUDE.md`, `.github/copilot-instructions.md` |
| Always-on modular rules | `DynamicsCrm.DevKit.Scripts/AI/rules/*.md` | `.claude/rules/*.md`, `.agents/rules/*.md` |
| Reusable task workflows | `DynamicsCrm.DevKit.Scripts/AI/workflows/*.md` | `.claude/commands/claude-*.md`, `.github/prompts/copilot-*.prompt.md`, `.agents/workflows/anti-*.md` |
| Portable skills | `.agents/skills/<skill>/SKILL.md` | `.claude/skills/<skill>/SKILL.md`, optional flat Antigravity CLI skill adapters if required |
| MCP logical definition | `DynamicsCrm.DevKit.Scripts/AI-McpServers.json` or similar | `.mcp.json.example`, `.codex/config.toml.example`, `.vscode/mcp.json.example`, `.agents/mcp_config.json.example` |
| Tool-specific local settings | User home or ignored local files | Never source of truth |

Do not make `.claude/`, `.github/`, `.codex/`, or `.agents/` the canonical place for shared rules. They are client adapters.

## Proposed Sync Script Update

Current script:

```text
DynamicsCrm.DevKit.Scripts/Sync-AI-Config.ps1
```

Recommended changes:

1. Keep neutral source rules/workflows under `DynamicsCrm.DevKit.Scripts/AI/`.
2. Generate `.agents/` as the Antigravity adapter; do not keep `.agent/`.
3. Generate `CLAUDE.md` from a small template:

```md
<!-- AUTO-GENERATED by Sync-AI-Config.ps1 - DO NOT EDIT DIRECTLY -->
@AGENTS.md
```

4. Generate `.github/copilot-instructions.md` from `AGENTS.md` plus a header. Do not maintain it manually.
5. Generate Claude commands from `DynamicsCrm.DevKit.Scripts/AI/workflows/*.md`.
6. Generate Copilot prompt files from `DynamicsCrm.DevKit.Scripts/AI/workflows/*.md`.
7. Generate or validate `.codex/config.toml.example`.
8. Generate MCP adapter `.example` files from one neutral MCP definition. Keep actual MCP configs ignored because they may contain per-user settings or credentials.
9. Add `-Check` mode that exits non-zero when generated files are stale.
10. Normalize all generated markdown as UTF-8 without BOM and LF line endings.

Recommended commands:

```powershell
.\DynamicsCrm.DevKit.Scripts\Sync-AI-Config.ps1
.\DynamicsCrm.DevKit.Scripts\Sync-AI-Config.ps1 -Check
.\DynamicsCrm.DevKit.Scripts\Sync-AI-Config.ps1 -DryRun
```

CI should run `-Check` so a PR cannot update `.agents/` or `AGENTS.md` without updating generated adapters.

## Team Workflow For 10 Developers

Use this rule:

```text
Edit source files only. Run sync. Commit source plus generated adapters.
```

Source files developers may edit:

```text
AGENTS.md
DynamicsCrm.DevKit.Scripts/AI/rules/*.md
DynamicsCrm.DevKit.Scripts/AI/workflows/*.md
.agents/skills/**/SKILL.md
DynamicsCrm.DevKit.Scripts/AI-McpServers.json
DynamicsCrm.DevKit.Scripts/Sync-AI-Config.ps1
```

Generated files developers should not edit directly:

```text
CLAUDE.md
.claude/rules/*.md
.claude/commands/*.md
.github/copilot-instructions.md
.github/prompts/*.prompt.md
.agents/rules/*.md
.agents/workflows/*.md
.mcp.json.example
.codex/config.toml.example
.vscode/mcp.json.example
.agents/mcp_config.json.example
```

Do not commit actual MCP config files (`.mcp.json`, `.codex/config.toml`, `.vscode/mcp.json`, `.agents/mcp_config.json`). They are local copies made from the generated `.example` files.

## Recommended Migration Plan

1. Move neutral source rules/workflows into `DynamicsCrm.DevKit.Scripts/AI/`.
2. Update `Sync-AI-Config.ps1` to read `DynamicsCrm.DevKit.Scripts/AI/`.
3. Delete `.agent/`; generate `.agents/` for current Antigravity.
4. Add `.codex/config.toml.example` support.
5. Add MCP adapter `.example` generation for Claude, Codex, VS Code, and Antigravity.
6. Update `devkit mcp --setup-guide` to show current Antigravity paths and VS Code/Codex config formats.
7. Add sync verification to CI or release checks.
8. Keep `.agent/` removed unless a specific older Antigravity version proves it is still required.

## References

- Claude Code overview: https://code.claude.com/docs/en/overview
- Claude Code memory and `CLAUDE.md`: https://code.claude.com/docs/en/memory
- Claude Code settings: https://code.claude.com/docs/en/settings
- Claude Code MCP: https://code.claude.com/docs/en/mcp
- Claude Code skills: https://code.claude.com/docs/en/skills
- Codex `AGENTS.md`: https://developers.openai.com/codex/guides/agents-md
- Codex config basics: https://developers.openai.com/codex/config-basic
- Codex MCP: https://developers.openai.com/codex/mcp
- Codex skills: https://developers.openai.com/codex/skills
- Codex config reference: https://developers.openai.com/codex/config-reference
- VS Code custom instructions: https://code.visualstudio.com/docs/agent-customization/custom-instructions
- VS Code prompt files: https://code.visualstudio.com/docs/agent-customization/prompt-files
- VS Code agent skills: https://code.visualstudio.com/docs/agent-customization/agent-skills
- VS Code MCP configuration: https://code.visualstudio.com/docs/agents/reference/mcp-configuration
- Antigravity rules: https://antigravity.google/assets/docs/editor/ide-rules.md
- Antigravity workflows: https://antigravity.google/assets/docs/editor/ide-workflows.md
- Antigravity skills: https://antigravity.google/assets/docs/editor/ide-skills.md
- Antigravity MCP: https://antigravity.google/assets/docs/editor/ide-mcp.md
- Antigravity CLI best practices: https://antigravity.google/assets/docs/cli/cli-best-practices.md
- Antigravity CLI plugins and skills: https://antigravity.google/assets/docs/cli/cli-plugins.md
- Antigravity Gemini migration: https://antigravity.google/assets/docs/cli/gcli-migration.md

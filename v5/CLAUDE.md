# Environment Rules

- **NEVER** include the `display_text` parameter when calling bash or PowerShell tools. The tool schema does not support it and it will crash the command with an `InputValidationError`.
- You are operating on a Windows machine. You MUST use PowerShell or CMD for all command executions. Do NOT use bash. Since Git tools are in the Windows PATH, you can freely use standard tools like grep, head, ls, etc. inside PowerShell.

# Project Guidelines (Summarized from AGENTS.md)

- **Component Boundaries:** `Cli` (.NET 10.0), `Analyzers` (.NET Standard 2.0), `Shared` (Shared Project), `VSIX` (.NET 4.8). Ask if unsure where a change belongs.
- **MCP Tools:** When editing tools in `Cli\Mcp\Tools\*`, you MUST preserve existing error text, output shape, JSON keys, structured fields, and temp paths. `ToolCategoryMap` uses `nameof()` for safety.
- **Conventions:** Use `serviceClient` for `ServiceClient` variables, `crmService` for `IOrganizationService`. Prefer using existing helpers in `DynamicsCrm.DevKit.Shared` and `Mcp/Tools/Helper/`.
- **Builds & Workflows:** Run the smallest relevant build, not full solution. Codex workflows are in `.codex/workflows/`. For CLI changes that refresh the installed tool, run `DynamicsCrm.DevKit.Scripts/Release.DynamicsCrm.DevKit.Cli.ps1`.
- **Committing:** Never stage, commit, or push unless explicitly requested. `4.44.44.44` is the stable source version. Do NOT commit files while date replacements are applied by release scripts.

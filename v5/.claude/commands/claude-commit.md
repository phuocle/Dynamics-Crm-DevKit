---
description: "Prepare and commit code for DynamicsCrm.DevKit"
---

Safe code preparation and commit workflow for the DynamicsCrm.DevKit project.

> [!IMPORTANT]
> **AI AGENT INSTRUCTIONS (CRITICAL):**
> TO AI AGENT: The user does NOT want you to just guide or list out steps. You are an Agent — you MUST USE TOOLS to execute `git` commands on behalf of the user.
> When asked to run this workflow, you MUST IMMEDIATELY use a tool to run `git status`, then automatically analyze, check `Const.cs`, select files to add, craft an appropriate commit message, and finally: PROPOSE THE COMMANDS FOR THE USER TO APPROVE AND RUN. Do not make the user chat back again unless truly necessary.

> This project uses PowerShell on Windows. Do not use Bash scripts (`&&` or `<<EOF`).

## Workflow Steps

**Step 1: Check the status of changed files (AUTO-RUN)**

AI Agent uses a tool to automatically run this command from the start to see changed files:
```powershell
git status
```

**Step 2: Critical Check**

> [!CAUTION]
> **Warning about placeholder files**
> AI must check if any file from `DevKit.ReleaseConfig.json` → `files.versionReplacement` or `files.codeVersionReplacement` is in the list of changed files.
> These files get their placeholders replaced at build time:
> - `DynamicsCrm.DevKit.Shared\Const.cs` — version placeholder: `x.xx.xx.xx`, date: `xxxx.yy.zz HH.mm.ss`
> - `DynamicsCrm.DevKit\Properties\AssemblyInfo.cs`, `DynamicsCrm.DevKit.Analyzers\Properties\AssemblyInfo.cs`, `DynamicsCrm.DevKit.Tool\Properties\AssemblyInfo.cs` — code version placeholder: `1.0.0.0`
> - `.claude\commands\*.md`, `.vstemplate`, `NuGet.config`, etc. — version placeholder: `x.xx.xx.xx`
>
> If any of these files shows a real version number (e.g., `x.xx.xx.xx` → `4.12.34.56`, or `1.0.0.0` → any real version), you absolutely **MUST NOT** commit this file. AI must automatically run `git restore "<file>"` or use a tool to revert the file before staging anything.

**Step 3: Carefully select files to stage**

AI reads the list of changed files and proposes a `git add` command with ONLY the files that actually need to be committed.
(Never use `git add .` or `git add -A` to prevent leaking sensitive config files)
```powershell
git add "path/to/file1.cs" "path/to/file2.cs"
```

**Step 4: Create the commit using PowerShell**

AI uses its understanding of the added files to infer the intent and craft a concise, appropriate message (you may also ask the user or infer if the intent is clear). Then propose running:
(Use two `-m` flags to separate the title and body)
```powershell
git commit -m "Short concise title (about 50 characters)" -m "Detailed description of what changed and the reasoning behind the design."
```

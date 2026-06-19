---
description: "Prepare and commit code for DynamicsCrm.DevKit"
---

Safe code preparation and commit workflow for the DynamicsCrm.DevKit project.

> [!IMPORTANT]
> **AI AGENT INSTRUCTIONS (CRITICAL):**
> TO AI AGENT: The user does NOT want you to just guide or list out steps. You are an Agent, so you MUST USE TOOLS to execute `git` commands on behalf of the user.
> When asked to run this workflow, you MUST IMMEDIATELY use a tool to run `git status`, then automatically analyze, check build-time date replacement files, select files to add, craft an appropriate commit message, and finally propose the commands for the user to approve and run. Do not make the user chat back again unless truly necessary.

> This project uses PowerShell on Windows. Do not use Bash scripts (`&&` or `<<EOF`).

## Workflow Steps

**Step 1: Check the status of changed files (AUTO-RUN)**

AI Agent uses a tool to automatically run this command from the start to see changed files:
```powershell
git status
```

**Step 2: Critical Check**

> [!CAUTION]
> **Warning about build-time replacement files**
> AI must check if any file from `DevKit.ReleaseConfig.json` -> `files.dateReplacement` is in the list of changed files.
> These files get their build date placeholder replaced at build time:
> - `4.12.34.56` is the stable source version. Build scripts do not replace it.
> - `xxxx.yy.zz HH.mm.ss` is the source build date placeholder.
>
> If any of these files shows a real build date where `xxxx.yy.zz HH.mm.ss` should be restored, you absolutely **MUST NOT** commit that build-time replacement. AI must automatically run `git restore "<file>"` or use a tool to revert the file before staging anything.

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

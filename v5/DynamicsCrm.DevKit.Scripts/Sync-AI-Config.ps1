param(
    [switch]$DryRun,
    [switch]$Check,
    [switch]$Verbose
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$SourceDir = Join-Path $ProjectRoot "DynamicsCrm.DevKit.Scripts\AI"
$SourceRulesDir = Join-Path $SourceDir "rules"
$SourceWorkflowsDir = Join-Path $SourceDir "workflows"
$SourceSkillsDir = Join-Path $SourceDir "skills"

$AntigravityDir = Join-Path $ProjectRoot ".agents"
$ClaudeDir = Join-Path $ProjectRoot ".claude"
$GithubDir = Join-Path $ProjectRoot ".github"
$CodexDir = Join-Path $ProjectRoot ".codex"
$VscodeDir = Join-Path $ProjectRoot ".vscode"

$ClaudeRulesDir = Join-Path $ClaudeDir "rules"
$ClaudeCommandsDir = Join-Path $ClaudeDir "commands"
$ClaudeSkillsDir = Join-Path $ClaudeDir "skills"
$GithubPromptsDir = Join-Path $GithubDir "prompts"
$AntigravityRulesDir = Join-Path $AntigravityDir "rules"
$AntigravityWorkflowsDir = Join-Path $AntigravityDir "workflows"

$script:FilesChecked = 0
$script:FilesUpdated = 0
$script:FilesRemoved = 0
$script:DriftDetected = 0

$Clients = @{
    Claude = @{
        Prefix = "devkit"
        Alias = "devkit-claude"
    }
    Copilot = @{
        Prefix = "devkit"
        Alias = "devkit-copilot"
    }
    Antigravity = @{
        Prefix = "devkit"
        Alias = "devkit-antigravity"
    }
    Codex = @{
        Prefix = "devkit"
        Alias = "devkit-codex"
    }
}

function Write-Status($Message, $Type) {
    switch ($Type) {
        "OK"   { Write-Host "[OK] $Message" -ForegroundColor Green }
        "SKIP" { Write-Host "[SKIP] $Message" -ForegroundColor Yellow }
        "SYNC" { Write-Host "[SYNC] $Message" -ForegroundColor Cyan }
        "WARN" { Write-Host "[WARN] $Message" -ForegroundColor Yellow }
        "ERR"  { Write-Host "[ERR] $Message" -ForegroundColor Red }
        "INFO" { Write-Host "[INFO] $Message" -ForegroundColor Gray }
        "DEL"  { Write-Host "[DEL] $Message" -ForegroundColor Magenta }
        default { Write-Host $Message }
    }
}

function Read-Utf8($Path) {
    return [System.IO.File]::ReadAllText($Path, [System.Text.Encoding]::UTF8)
}

function Normalize-Text($Text) {
    return (($Text -replace "`r`n", "`n") -replace "`r", "`n").TrimEnd() + "`n"
}

function Write-Utf8NoBom($Path, $Content) {
    $dir = Split-Path -Parent $Path
    if (-not (Test-Path $dir)) {
        New-Item -Path $dir -ItemType Directory -Force | Out-Null
    }
    $utf8NoBom = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllText($Path, (Normalize-Text $Content), $utf8NoBom)
}

function Compare-And-Write($TargetPath, $NewContent) {
    $script:FilesChecked++
    $normalizedNew = Normalize-Text $NewContent

    if (Test-Path $TargetPath) {
        $existing = Normalize-Text (Read-Utf8 $TargetPath)
        if ($existing -eq $normalizedNew) {
            if ($Verbose) {
                Write-Status "No changes: $TargetPath" "SKIP"
            }
            return
        }
    }

    $script:FilesUpdated++
    $script:DriftDetected++

    if ($Check) {
        Write-Status "Out of sync: $TargetPath" "WARN"
        return
    }

    if ($DryRun) {
        Write-Status "Would update: $TargetPath" "SYNC"
        return
    }

    Write-Utf8NoBom $TargetPath $normalizedNew
    Write-Status "Updated: $TargetPath" "SYNC"
}

function Remove-GeneratedFiles($Dir, $IncludePatterns, $KeepNames) {
    if (-not (Test-Path $Dir)) { return }

    foreach ($pattern in $IncludePatterns) {
        Get-ChildItem -Path $Dir -Filter $pattern -File -ErrorAction SilentlyContinue | ForEach-Object {
            if ($KeepNames -contains $_.Name) { return }

            $script:FilesChecked++
            $script:FilesRemoved++
            $script:DriftDetected++

            if ($Check) {
                Write-Status "Stale generated file: $($_.FullName)" "WARN"
            } elseif ($DryRun) {
                Write-Status "Would remove stale file: $($_.FullName)" "DEL"
            } else {
                Remove-Item -Path $_.FullName -Force
                Write-Status "Removed stale file: $($_.FullName)" "DEL"
            }
        }
    }
}

function Get-BodyWithoutFrontmatter($FilePath) {
    $content = Read-Utf8 $FilePath
    if ($content -match "(?s)^---\s*\n.*?\n---\s*\n(.*)$") {
        return $Matches[1].TrimStart()
    }
    return $content
}

function Get-WorkflowDescription($FilePath) {
    $content = Read-Utf8 $FilePath
    if ($content -match "(?m)^description:\s*`"?(.*?)`"?\s*$") {
        return $Matches[1].Trim()
    }
    return [System.IO.Path]::GetFileNameWithoutExtension($FilePath)
}

function Get-WorkflowBody($FilePath) {
    $body = Get-BodyWithoutFrontmatter $FilePath
    $lines = $body -split "`n"
    $filteredLines = @()
    foreach ($line in $lines) {
        $trimmed = $line.Trim()
        if ($trimmed -eq "// turbo-all" -or $trimmed -eq "// turbo") {
            continue
        }
        $filteredLines += $line
    }
    return (($filteredLines -join "`n").TrimStart())
}

function Render-ForClient($Content, $ClientName) {
    $prefix = $Clients[$ClientName].Prefix
    $alias = $Clients[$ClientName].Alias
    $rendered = $Content -replace "/\*-", "/$prefix-"
    $rendered = $rendered -replace "\{\{CLIENT\}\}", $ClientName
    $rendered = $rendered -replace "\{\{PREFIX\}\}", $prefix
    $rendered = $rendered -replace "\{\{DEVKIT_MCP_ALIAS\}\}", $alias
    return $rendered
}

function Add-GeneratedHeader($Source) {
    return @"
<!-- AUTO-GENERATED by Sync-AI-Config.ps1 - DO NOT EDIT DIRECTLY -->
<!-- Source of truth: $Source -->

"@
}

function ConvertTo-CopilotPrompt($Description, $Body) {
    return @"
---
description: "$Description"
mode: agent
---

$Body
"@
}

function ConvertTo-ClaudeCommand($Description, $Body) {
    return @"
---
description: "$Description"
---

$Body
"@
}

function ConvertTo-AntigravityWorkflow($Description, $Body) {
    return @"
---
description: $Description
---

$Body
"@
}

function ConvertTo-CopilotInstructions($AgentsContent, $RuleSections) {
    $header = Add-GeneratedHeader "AGENTS.md + .agents/rules/*.md"
    $sections = @($AgentsContent.TrimEnd())
    foreach ($section in $RuleSections) {
        if ($section.Trim().Length -gt 0) {
            $sections += $section.TrimEnd()
        }
    }
    return $header + ($sections -join "`n`n---`n`n")
}

function Sync-SkillDirectory($TargetSkillsDir) {
    if (-not (Test-Path $SourceSkillsDir)) { return }

    $sourceSkillDirs = Get-ChildItem -Path $SourceSkillsDir -Directory -ErrorAction SilentlyContinue | Sort-Object Name
    $keepNames = @()

    foreach ($skillDir in $sourceSkillDirs) {
        $sourceSkillFile = Join-Path $skillDir.FullName "SKILL.md"
        if (-not (Test-Path $sourceSkillFile)) { continue }

        $targetDir = Join-Path $TargetSkillsDir $skillDir.Name
        $targetSkillFile = Join-Path $targetDir "SKILL.md"
        $keepNames += $skillDir.Name
        Compare-And-Write $targetSkillFile (Read-Utf8 $sourceSkillFile)
    }

    if (Test-Path $TargetSkillsDir) {
        Get-ChildItem -Path $TargetSkillsDir -Directory -ErrorAction SilentlyContinue | ForEach-Object {
            if ($keepNames -contains $_.Name) { return }
            $script:FilesChecked++
            $script:FilesRemoved++
            $script:DriftDetected++
            if ($Check) {
                Write-Status "Stale generated skill directory: $($_.FullName)" "WARN"
            } elseif ($DryRun) {
                Write-Status "Would remove stale skill directory: $($_.FullName)" "DEL"
            } else {
                Remove-Item -Path $_.FullName -Recurse -Force
                Write-Status "Removed stale skill directory: $($_.FullName)" "DEL"
            }
        }
    }
}

function Get-McpJson($Alias, $UseInputs) {
    if ($UseInputs) {
        return @"
{
  "servers": {
    "dynamicscrm-devkit": {
      "type": "stdio",
      "command": "devkit",
      "args": ["mcp", "$Alias"],
      "env": {
        "DEVKIT_AUTH_TYPE": "`${input:devkitAuthType}",
        "DEVKIT_URL": "`${input:devkitUrl}",
        "DEVKIT_PAC_PROFILE": "`${input:devkitPacProfile}"
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
"@
    }

    return @"
{
  "mcpServers": {
    "dynamicscrm-devkit": {
      "command": "devkit",
      "args": ["mcp", "$Alias"],
      "env": {
        "DEVKIT_AUTH_TYPE": "FromPac",
        "DEVKIT_PAC_PROFILE": "default"
      }
    }
  }
}
"@
}

function Get-ClaudeMcpJson() {
    $alias = $Clients.Claude.Alias
    return @"
{
  "mcpServers": {
    "dynamicscrm-devkit": {
      "command": "devkit",
      "args": ["mcp", "$alias"],
      "env": {
        "DEVKIT_AUTH_TYPE": "`${DEVKIT_AUTH_TYPE:-FromPac}",
        "DEVKIT_URL": "`${DEVKIT_URL}",
        "DEVKIT_PAC_PROFILE": "`${DEVKIT_PAC_PROFILE:-default}"
      }
    }
  }
}
"@
}

function Get-CodexConfigToml() {
    $alias = $Clients.Codex.Alias
    return @"
[mcp_servers.dynamicscrm-devkit]
command = "devkit"
args = ["mcp", "$alias"]
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
"@
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Sync AI Config (DynamicsCrm.DevKit.Scripts/AI -> adapters)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if ($DryRun) {
    Write-Status "DRY RUN mode - no files will be modified" "WARN"
}
if ($Check) {
    Write-Status "CHECK mode - exits non-zero if generated files are stale" "WARN"
}

if (-not (Test-Path $SourceDir)) {
    throw "Source directory not found: $SourceDir"
}

Write-Host ""
Write-Host "--- Syncing root instruction adapters ---" -ForegroundColor White
Write-Host ""

$agentsPath = Join-Path $ProjectRoot "AGENTS.md"
$agentsContent = if (Test-Path $agentsPath) { Read-Utf8 $agentsPath } else { "" }
Compare-And-Write (Join-Path $ProjectRoot "CLAUDE.md") @"
<!-- AUTO-GENERATED by Sync-AI-Config.ps1 - DO NOT EDIT DIRECTLY -->
@AGENTS.md
"@

Write-Host ""
Write-Host "--- Syncing rules ---" -ForegroundColor White
Write-Host ""

$ruleFiles = @(Get-ChildItem -Path $SourceRulesDir -Filter "*.md" -File -ErrorAction SilentlyContinue | Sort-Object Name)
$claudeRuleKeep = @()
$antigravityRuleKeep = @()
$copilotRuleSections = @()

foreach ($ruleFile in $ruleFiles) {
    $baseName = $ruleFile.Name
    $body = Get-BodyWithoutFrontmatter $ruleFile.FullName

    $claudeRuleKeep += $baseName
    Compare-And-Write (Join-Path $ClaudeRulesDir $baseName) ((Add-GeneratedHeader ".agents/rules/$baseName") + (Render-ForClient $body "Claude"))

    $antigravityRuleKeep += $baseName
    Compare-And-Write (Join-Path $AntigravityRulesDir $baseName) ((Add-GeneratedHeader "DynamicsCrm.DevKit.Scripts/AI/rules/$baseName") + (Render-ForClient $body "Antigravity"))

    $copilotRuleSections += (Render-ForClient $body "Copilot")
}

Compare-And-Write (Join-Path $GithubDir "copilot-instructions.md") (ConvertTo-CopilotInstructions $agentsContent $copilotRuleSections)

Remove-GeneratedFiles $ClaudeRulesDir @("*.md") $claudeRuleKeep
Remove-GeneratedFiles $AntigravityRulesDir @("*.md") $antigravityRuleKeep

Write-Host ""
Write-Host "--- Syncing workflows ---" -ForegroundColor White
Write-Host ""

$workflowFiles = @(Get-ChildItem -Path $SourceWorkflowsDir -Filter "*.md" -File -ErrorAction SilentlyContinue | Sort-Object Name)
$claudeCommandKeep = @()
$copilotPromptKeep = @()
$antigravityWorkflowKeep = @()

foreach ($wfFile in $workflowFiles) {
    $name = [System.IO.Path]::GetFileNameWithoutExtension($wfFile.Name)
    $description = Get-WorkflowDescription $wfFile.FullName
    $body = Get-WorkflowBody $wfFile.FullName

    $claudeName = "devkit-$name.md"
    $claudeCommandKeep += $claudeName
    Compare-And-Write (Join-Path $ClaudeCommandsDir $claudeName) (ConvertTo-ClaudeCommand $description (Render-ForClient $body "Claude"))

    $copilotName = "devkit-$name.prompt.md"
    $copilotPromptKeep += $copilotName
    Compare-And-Write (Join-Path $GithubPromptsDir $copilotName) (ConvertTo-CopilotPrompt $description (Render-ForClient $body "Copilot"))

    $antigravityName = "devkit-$name.md"
    $antigravityWorkflowKeep += $antigravityName
    Compare-And-Write (Join-Path $AntigravityWorkflowsDir $antigravityName) (ConvertTo-AntigravityWorkflow $description (Render-ForClient $body "Antigravity"))
}

Remove-GeneratedFiles $ClaudeCommandsDir @("devkit-*.md", "claude-*.md") $claudeCommandKeep
Remove-GeneratedFiles $GithubPromptsDir @("devkit-*.prompt.md", "copilot-*.prompt.md") $copilotPromptKeep
Remove-GeneratedFiles $AntigravityWorkflowsDir @("devkit-*.md", "anti-*.md") $antigravityWorkflowKeep

Write-Host ""
Write-Host "--- Syncing skills ---" -ForegroundColor White
Write-Host ""

Sync-SkillDirectory $ClaudeSkillsDir

Write-Host ""
Write-Host "--- Syncing MCP adapters ---" -ForegroundColor White
Write-Host ""

Compare-And-Write (Join-Path $ProjectRoot ".mcp.json.example") (Get-ClaudeMcpJson)
Compare-And-Write (Join-Path $CodexDir "config.toml.example") (Get-CodexConfigToml)
Compare-And-Write (Join-Path $VscodeDir "mcp.json.example") (Get-McpJson $Clients.Copilot.Alias $true)
Compare-And-Write (Join-Path $AntigravityDir "mcp_config.json.example") (Get-McpJson $Clients.Antigravity.Alias $false)

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Summary" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Status "Files checked: $FilesChecked" "INFO"
Write-Status "Files updated: $FilesUpdated" "INFO"
Write-Status "Files removed: $FilesRemoved" "INFO"

if ($DriftDetected -eq 0) {
    Write-Host ""
    Write-Status "All generated AI config files are in sync." "OK"
} elseif ($Check) {
    Write-Host ""
    Write-Status "AI config is out of sync. Run Sync-AI-Config.ps1 to update generated files." "ERR"
    exit 1
} elseif ($DryRun) {
    Write-Host ""
    Write-Status "$FilesUpdated file(s) would be updated, $FilesRemoved file(s) would be removed." "WARN"
}

Write-Host ""

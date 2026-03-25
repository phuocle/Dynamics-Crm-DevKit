param(
    [switch]$DryRun,
    [switch]$Verbose
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Continue"

$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$AgentRulesDir = Join-Path $ProjectRoot ".agent\rules"
$AgentWorkflowsDir = Join-Path $ProjectRoot ".agent\workflows"
$AgentSkillsDir = Join-Path $ProjectRoot ".agent\skills"
$CursorRulesDir = Join-Path $ProjectRoot ".cursor\rules"
$CursorCommandsDir = Join-Path $ProjectRoot ".cursor\commands"
$ClaudeRulesDir = Join-Path $ProjectRoot ".claude\rules"
$ClaudeCommandsDir = Join-Path $ProjectRoot ".claude\commands"
$GithubDir = Join-Path $ProjectRoot ".github"
$GithubPromptsDir = Join-Path $ProjectRoot ".github\prompts"
$VsCodeDir = Join-Path $ProjectRoot ".vscode"

$ChangesDetected = 0
$FilesUpdated = 0
$FilesRemoved = 0

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

function Get-AgentRuleBody($FilePath) {
    $content = [System.IO.File]::ReadAllText($FilePath, [System.Text.Encoding]::UTF8)
    if ($content -match "(?s)^---\s*\n.*?\n---\s*\n(.*)$") {
        return $Matches[1].TrimStart()
    }
    return $content
}

function Get-CursorFrontmatter($RuleFileName) {
    $frontmatters = @{
        "core-rule" = @"
---
description: Mandatory core rules for AI agents working with DynamicsCrm.DevKit codebase
alwaysApply: true
---
"@
        "devkit-analyzer" = @"
---
description: Development rules for DynamicsCrm.DevKit Roslyn analyzers (DEVKIT1001-DEVKIT1021)
alwaysApply: true
---
"@
    }

    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($RuleFileName)
    if ($frontmatters.ContainsKey($baseName)) {
        return $frontmatters[$baseName]
    }

    return @"
---
description: $baseName rules
alwaysApply: true
---
"@
}

function Get-WorkflowBody($FilePath) {
    $content = [System.IO.File]::ReadAllText($FilePath, [System.Text.Encoding]::UTF8)

    if ($content -match "(?s)^---\s*\n.*?\n---\s*\n(.*)$") {
        $body = $Matches[1].TrimStart()
    } else {
        $body = $content
    }

    $lines = $body -split "`n"
    $filteredLines = @()
    foreach ($line in $lines) {
        $trimmed = $line.Trim()
        if ($trimmed -eq "// turbo-all" -or $trimmed -eq "// turbo") {
            continue
        }
        $filteredLines += $line
    }
    $body = ($filteredLines -join "`n").TrimStart()

    return $body
}

function Get-WorkflowDescription($FilePath) {
    $content = [System.IO.File]::ReadAllText($FilePath, [System.Text.Encoding]::UTF8)
    if ($content -match "(?s)^---\s*\ndescription:\s*(.+?)\n---") {
        return $Matches[1].Trim()
    }
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($FilePath)
    return $baseName
}

function Get-CursorCommandTitle($WorkflowFileName) {
    $titles = @{
        "build-debug"          = "Build Debug - DynamicsCrm.DevKit"
        "build-cli"            = "Build CLI - DynamicsCrm.DevKit.Cli"
        "build-vsix"           = "Build VSIX - DynamicsCrm.DevKit"
        "build-analyzer"       = "Build Analyzer - DynamicsCrm.DevKit.Analyzers"
        "build-tool"           = "Build Tool - DynamicsCrm.DevKit.Tool"
        "build-release"        = "Build Release - DynamicsCrm.DevKit"
        "clean-all"            = "Clean Repository"
        "create-new-analyzer"  = "Create New Analyzer"
    }

    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($WorkflowFileName)
    if ($titles.ContainsKey($baseName)) {
        return $titles[$baseName]
    }
    return $baseName
}

function Compare-And-Write($TargetPath, $NewContent) {
    $script:ChangesDetected++

    if ((Test-Path $TargetPath)) {
        $existing = [System.IO.File]::ReadAllText($TargetPath, [System.Text.Encoding]::UTF8)
        $normalizedExisting = $existing -replace "`r`n", "`n"
        $normalizedNew = $NewContent -replace "`r`n", "`n"

        if ($normalizedExisting -eq $normalizedNew) {
            if ($Verbose) {
                Write-Status "No changes: $TargetPath" "SKIP"
            }
            return
        }
    }

    if ($DryRun) {
        Write-Status "Would update: $TargetPath" "SYNC"
    } else {
        $dir = Split-Path -Parent $TargetPath
        if (-not (Test-Path $dir)) {
            New-Item -Path $dir -ItemType Directory -Force | Out-Null
        }
        $utf8NoBOM = New-Object System.Text.UTF8Encoding $false
        [System.IO.File]::WriteAllText($TargetPath, $NewContent, $utf8NoBOM)
        Write-Status "Updated: $TargetPath" "SYNC"
    }
    $script:FilesUpdated++
}

# Cleanup old files that don't match the new prefix naming convention
function Remove-OldFiles($Dir, $Prefix, $Extension, $SourceNames) {
    if (-not (Test-Path $Dir)) { return }
    $existingFiles = Get-ChildItem -Path $Dir -Filter "*$Extension" -ErrorAction SilentlyContinue
    foreach ($file in $existingFiles) {
        $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
        # Skip files that already have the correct prefix
        if ($baseName.StartsWith($Prefix)) { continue }
        # Check if this old file corresponds to a source workflow
        $nameWithoutOldPrefix = $baseName
        # Remove old prefixes if present (devkit-, or no prefix)
        if ($nameWithoutOldPrefix.StartsWith("devkit-")) {
            $nameWithoutOldPrefix = $nameWithoutOldPrefix.Substring(7)
        }
        # Also handle .prompt suffix for copilot files
        $nameWithoutOldPrefix = $nameWithoutOldPrefix -replace "\.prompt$", ""
        if ($SourceNames -contains $nameWithoutOldPrefix) {
            if ($DryRun) {
                Write-Status "Would remove old file: $($file.FullName)" "DEL"
            } else {
                Remove-Item $file.FullName -Force
                Write-Status "Removed old file: $($file.FullName)" "DEL"
            }
            $script:FilesRemoved++
        }
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Sync AI Config (.agent/ -> IDEs)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if ($DryRun) {
    Write-Status "DRY RUN mode - no files will be modified" "WARN"
    Write-Host ""
}

# Collect source workflow names for cleanup
$sourceWorkflowNames = @()
$wfSourceFiles = Get-ChildItem -Path $AgentWorkflowsDir -Filter "*.md" -ErrorAction SilentlyContinue
if ($wfSourceFiles) {
    $sourceWorkflowNames = $wfSourceFiles | ForEach-Object { [System.IO.Path]::GetFileNameWithoutExtension($_.Name) }
}

# ── Cleanup old files (before sync) ──────────────────────────────────────────

Write-Host "--- Cleaning up old files (no prefix / wrong prefix) ---" -ForegroundColor White
Write-Host ""

Remove-OldFiles $CursorCommandsDir "cursor-" ".md" $sourceWorkflowNames
Remove-OldFiles $GithubPromptsDir "copilot-" ".md" $sourceWorkflowNames
Remove-OldFiles $ClaudeCommandsDir "claude-" ".md" $sourceWorkflowNames

# ── Sync Rules → Cursor ──────────────────────────────────────────────────────

Write-Host ""
Write-Host "--- Syncing Rules (.agent/rules/ -> .cursor/rules/) ---" -ForegroundColor White
Write-Host ""

$ruleFiles = Get-ChildItem -Path $AgentRulesDir -Filter "*.md" -ErrorAction SilentlyContinue
if ($ruleFiles) {
    foreach ($ruleFile in $ruleFiles) {
        $baseName = [System.IO.Path]::GetFileNameWithoutExtension($ruleFile.Name)
        $targetPath = Join-Path $CursorRulesDir "$baseName.mdc"

        $body = Get-AgentRuleBody $ruleFile.FullName
        $frontmatter = Get-CursorFrontmatter $ruleFile.Name
        $cursorContent = "$frontmatter`n`n$body"

        Compare-And-Write $targetPath $cursorContent
    }
} else {
    Write-Status "No rule files found in $AgentRulesDir" "WARN"
}

# ── Sync Rules → Claude ──────────────────────────────────────────────────────

Write-Host ""
Write-Host "--- Syncing Rules (.agent/rules/ -> .claude/rules/) ---" -ForegroundColor White
Write-Host ""

$ruleFiles = Get-ChildItem -Path $AgentRulesDir -Filter "*.md" -ErrorAction SilentlyContinue
if ($ruleFiles) {
    foreach ($ruleFile in $ruleFiles) {
        $baseName = [System.IO.Path]::GetFileNameWithoutExtension($ruleFile.Name)
        $targetPath = Join-Path $ClaudeRulesDir "$baseName.md"

        $body = Get-AgentRuleBody $ruleFile.FullName
        Compare-And-Write $targetPath $body
    }
} else {
    Write-Status "No rule files found in $AgentRulesDir" "WARN"
}

# ── Sync Workflows → Cursor (prefix: cursor-) ────────────────────────────────

Write-Host ""
Write-Host "--- Syncing Workflows (.agent/workflows/ -> .cursor/commands/cursor-*) ---" -ForegroundColor White
Write-Host ""

$workflowFiles = Get-ChildItem -Path $AgentWorkflowsDir -Filter "*.md" -ErrorAction SilentlyContinue
if ($workflowFiles) {
    foreach ($wfFile in $workflowFiles) {
        $baseName = [System.IO.Path]::GetFileNameWithoutExtension($wfFile.Name)
        $targetPath = Join-Path $CursorCommandsDir "cursor-$baseName.md"

        $title = Get-CursorCommandTitle $wfFile.Name
        $body = Get-WorkflowBody $wfFile.FullName
        $cursorContent = "# $title`n`n$body"

        Compare-And-Write $targetPath $cursorContent
    }
} else {
    Write-Status "No workflow files found in $AgentWorkflowsDir" "WARN"
}

# ── Sync Workflows → Claude (prefix: claude-) ────────────────────────────────

Write-Host ""
Write-Host "--- Syncing Workflows (.agent/workflows/ -> .claude/commands/claude-*) ---" -ForegroundColor White
Write-Host ""

$workflowFiles = Get-ChildItem -Path $AgentWorkflowsDir -Filter "*.md" -ErrorAction SilentlyContinue
if ($workflowFiles) {
    foreach ($wfFile in $workflowFiles) {
        $baseName = [System.IO.Path]::GetFileNameWithoutExtension($wfFile.Name)
        $targetPath = Join-Path $ClaudeCommandsDir "claude-$baseName.md"

        $description = Get-WorkflowDescription $wfFile.FullName
        $body = Get-WorkflowBody $wfFile.FullName
        $claudeContent = @"
---
description: "$description"
---

$body
"@
        Compare-And-Write $targetPath $claudeContent
    }
} else {
    Write-Status "No workflow files found in $AgentWorkflowsDir" "WARN"
}

# ── Sync Rules → Copilot (merged into copilot-instructions.md) ───────────────

Write-Host ""
Write-Host "--- Syncing Rules (.agent/rules/ -> .github/copilot-instructions.md) ---" -ForegroundColor White
Write-Host ""

$copilotPath = Join-Path $GithubDir "copilot-instructions.md"
$ruleFiles = Get-ChildItem -Path $AgentRulesDir -Filter "*.md" -ErrorAction SilentlyContinue
if ($ruleFiles) {
    $header = @"
<!-- AUTO-GENERATED by Sync-AI-Config.ps1 — DO NOT EDIT DIRECTLY -->
<!-- Source of truth: .agent/rules/*.md -->

"@
    $sections = @()
    foreach ($ruleFile in ($ruleFiles | Sort-Object Name)) {
        $body = Get-AgentRuleBody $ruleFile.FullName
        $sections += $body
    }

    # Append skills content (VS Code Copilot doesn't support on-demand skills)
    $skillDirs = Get-ChildItem -Path $AgentSkillsDir -Directory -ErrorAction SilentlyContinue
    if ($skillDirs) {
        foreach ($skillDir in ($skillDirs | Sort-Object Name)) {
            $skillFile = Join-Path $skillDir.FullName "SKILL.md"
            if (Test-Path $skillFile) {
                $skillBody = Get-AgentRuleBody $skillFile
                $sections += "---`n`n<!-- Skill: $($skillDir.Name) -->`n`n$skillBody"
            }
        }
    }

    $copilotContent = $header + ($sections -join "`n`n---`n`n")
    Compare-And-Write $copilotPath $copilotContent
} else {
    Write-Status "No rule files found in $AgentRulesDir" "WARN"
}

# ── Sync Workflows → Copilot (prefix: copilot-) ──────────────────────────────

Write-Host ""
Write-Host "--- Syncing Workflows (.agent/workflows/ -> .github/prompts/copilot-*) ---" -ForegroundColor White
Write-Host ""

$workflowFiles = Get-ChildItem -Path $AgentWorkflowsDir -Filter "*.md" -ErrorAction SilentlyContinue
if ($workflowFiles) {
    foreach ($wfFile in $workflowFiles) {
        $baseName = [System.IO.Path]::GetFileNameWithoutExtension($wfFile.Name)
        $targetPath = Join-Path $GithubPromptsDir "copilot-$baseName.prompt.md"

        $description = Get-WorkflowDescription $wfFile.FullName
        $body = Get-WorkflowBody $wfFile.FullName
        $promptContent = @"
---
description: "$description"
mode: agent
---

$body
"@
        Compare-And-Write $targetPath $promptContent
    }
} else {
    Write-Status "No workflow files found in $AgentWorkflowsDir" "WARN"
}

# ── Summary ───────────────────────────────────────────────────────────────────

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Summary" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Status "Files checked: $ChangesDetected" "INFO"
Write-Status "Files updated: $FilesUpdated" "INFO"
Write-Status "Files removed: $FilesRemoved" "INFO"

if ($FilesUpdated -eq 0 -and $FilesRemoved -eq 0) {
    Write-Host ""
    Write-Status "All files are in sync!" "OK"
} elseif ($DryRun) {
    Write-Host ""
    Write-Status "$FilesUpdated file(s) would be updated, $FilesRemoved file(s) would be removed. Run without -DryRun to apply." "WARN"
}

Write-Host ""

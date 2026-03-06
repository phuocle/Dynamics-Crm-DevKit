param(
    [switch]$DryRun,
    [switch]$Verbose
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Continue"

$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$AgentRulesDir = Join-Path $ProjectRoot ".agent\rules"
$AgentWorkflowsDir = Join-Path $ProjectRoot ".agent\workflows"
$CursorRulesDir = Join-Path $ProjectRoot ".cursor\rules"
$CursorCommandsDir = Join-Path $ProjectRoot ".cursor\commands"
$GithubDir = Join-Path $ProjectRoot ".github"

$ChangesDetected = 0
$FilesUpdated = 0

function Write-Status($Message, $Type) {
    switch ($Type) {
        "OK"   { Write-Host "[OK] $Message" -ForegroundColor Green }
        "SKIP" { Write-Host "[SKIP] $Message" -ForegroundColor Yellow }
        "SYNC" { Write-Host "[SYNC] $Message" -ForegroundColor Cyan }
        "WARN" { Write-Host "[WARN] $Message" -ForegroundColor Yellow }
        "ERR"  { Write-Host "[ERR] $Message" -ForegroundColor Red }
        "INFO" { Write-Host "[INFO] $Message" -ForegroundColor Gray }
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
        [System.IO.File]::WriteAllText($TargetPath, $NewContent, [System.Text.Encoding]::UTF8)
        Write-Status "Updated: $TargetPath" "SYNC"
    }
    $script:FilesUpdated++
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

Write-Host ""
Write-Host "--- Syncing Workflows (.agent/workflows/ -> .cursor/commands/) ---" -ForegroundColor White
Write-Host ""

$workflowFiles = Get-ChildItem -Path $AgentWorkflowsDir -Filter "*.md" -ErrorAction SilentlyContinue
if ($workflowFiles) {
    foreach ($wfFile in $workflowFiles) {
        $baseName = [System.IO.Path]::GetFileNameWithoutExtension($wfFile.Name)
        $targetPath = Join-Path $CursorCommandsDir "$baseName.md"

        $title = Get-CursorCommandTitle $wfFile.Name
        $body = Get-WorkflowBody $wfFile.FullName
        $cursorContent = "# $title`n`n$body"

        Compare-And-Write $targetPath $cursorContent
    }
} else {
    Write-Status "No workflow files found in $AgentWorkflowsDir" "WARN"
}

Write-Host ""
Write-Host "--- Syncing Copilot Instructions (.agent/rules/ -> .github/) ---" -ForegroundColor White
Write-Host ""

$copilotPath = Join-Path $GithubDir "copilot-instructions.md"
if ((Test-Path $copilotPath)) {
    Write-Status "copilot-instructions.md exists (manually maintained)" "OK"
} else {
    Write-Status "copilot-instructions.md not found - create it manually or copy from template" "WARN"
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Summary" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Status "Files checked: $ChangesDetected" "INFO"
Write-Status "Files updated: $FilesUpdated" "INFO"

if ($FilesUpdated -eq 0) {
    Write-Host ""
    Write-Status "All files are in sync!" "OK"
} elseif ($DryRun) {
    Write-Host ""
    Write-Status "$FilesUpdated file(s) would be updated. Run without -DryRun to apply." "WARN"
}

Write-Host ""

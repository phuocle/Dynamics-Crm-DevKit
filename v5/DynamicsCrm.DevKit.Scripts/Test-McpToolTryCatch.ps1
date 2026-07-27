# Test-McpToolTryCatch.ps1
# Audit helper that enforces the RefactorTool.md Step 1 rule on every MCP tool file
# under DynamicsCrm.DevKit.Cli/Mcp/Tools/. Mirrors the original bash `grep -nE` snippet
# but works on Windows PowerShell.
#
# Rule (Step 1): Exactly ONE try/catch block in the main public method of each tool,
# EXCEPT manage_view which has 2 additional contract-helper catches inside
# ValidateFetchXmlExpression (see ToolAnalysis2026-07-27.md § 3.2 — by design).
#
# Expected counts:
#   ExecuteFetchXmlTool    -> 2 (1 try + 1 catch in main method)
#   GetMessagesTool        -> 2
#   GetCustomApisTool      -> 2
#   WhoAmITool             -> 2
#   ManageChoiceTool       -> 2
#   ManageViewTool         -> 3 (1 main + 2 inside ValidateFetchXmlExpression contract helper)
#   ParseRecordUrlTool     -> 2
#   GetPluginTraceLogsTool -> 2
#
# Exit code 0 = all files within expected range
# Exit code 1 = one or more files outside expected range (regression!)

param(
    [string]$ToolsRoot = "..\DynamicsCrm.DevKit.Cli\Mcp\Tools",
    [switch]$ShowLines = $false
)

# Colors
$ColorTitle = "Cyan"
$ColorSuccess = "Green"
$ColorWarning = "Yellow"
$ColorError = "Red"
$ColorInfo = "White"

# Per-file expected match counts
$expectedCounts = @{
    "ExecuteFetchXmlTool"    = 2
    "GetMessagesTool"        = 2
    "GetCustomApisTool"      = 2
    "WhoAmITool"             = 2
    "ManageChoiceTool"       = 2
    "ManageViewTool"         = 3   # 1 main + 2 inside ValidateFetchXmlExpression contract helper
    "ParseRecordUrlTool"     = 2
    "GetPluginTraceLogsTool" = 2
}

function Write-Header {
    param([string]$Title)
    Write-Host ""
    Write-Host "============================================" -ForegroundColor $ColorTitle
    Write-Host $Title -ForegroundColor $ColorTitle
    Write-Host "============================================" -ForegroundColor $ColorTitle
    Write-Host ""
}

# Change to script directory so relative paths resolve
Set-Location $PSScriptRoot

Write-Header "MCP Tool Try/Catch Audit (RefactorTool.md Step 1)"

# Resolve tools root to an absolute path so error messages are clear
$absToolsRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot $ToolsRoot))
if (-not (Test-Path $absToolsRoot)) {
    Write-Host "Error: Tools directory not found: $absToolsRoot" -ForegroundColor $ColorError
    exit 1
}

Write-Host "Tools directory: $absToolsRoot" -ForegroundColor $ColorInfo
Write-Host ""

$allPass = $true
$results = @()

$sortedNames = @($expectedCounts.Keys) | Sort-Object
foreach ($toolName in $sortedNames) {
    $expected = $expectedCounts[$toolName]
    $filePath = Join-Path $absToolsRoot "$toolName.cs"

    if (-not (Test-Path $filePath)) {
        Write-Host "[MISSING] $toolName.cs - file not found" -ForegroundColor $ColorError
        $results += @{ Tool = $toolName; Status = "MISSING"; Actual = -1; Expected = $expected }
        $allPass = $false
    }
    else {
        # PowerShell equivalent of bash grep with regex matching 'try {' or 'catch ('.
        # Use Select-String with a regex pattern.
        $pattern = 'try\s*\{|catch\s*\('
        $tryMatches = Select-String -Path $filePath -Pattern $pattern

        $actualCount = $tryMatches.Count

        $status = if ($actualCount -eq $expected) {
            "PASS"
        } else {
            "FAIL"
        }

        $color = if ($status -eq "PASS") { $ColorSuccess } else { $ColorError }

        $line = "{0,-25} expected={1}  actual={2}  [{3}]" -f $toolName, $expected, $actualCount, $status
        Write-Host $line -ForegroundColor $color

        if ($ShowLines -or $status -eq "FAIL") {
            foreach ($m in $tryMatches) {
                $trimmedLine = $m.Line.Trim()
                Write-Host ("    L{0}: {1}" -f $m.LineNumber, $trimmedLine) -ForegroundColor $ColorInfo
            }
        }

        $results += @{ Tool = $toolName; Status = $status; Actual = $actualCount; Expected = $expected }

        if ($status -eq "FAIL") {
            $allPass = $false
        }
    }
}

Write-Host ""
Write-Header "Summary"

if ($allPass) {
    Write-Host "All tools within expected try/catch range — RefactorTool.md Step 1 holds." -ForegroundColor $ColorSuccess
    exit 0
} else {
    Write-Host "REGRESSION DETECTED. One or more tools have unexpected try/catch counts." -ForegroundColor $ColorError
    Write-Host ""
    Write-Host "Investigate each FAIL above. Likely causes:" -ForegroundColor $ColorWarning
    Write-Host "  - New inner try/catch added without updating the contract helper" -ForegroundColor $ColorWarning
    Write-Host "  - 'catch { return null; }' swallowed exception (forbidden by Step 1)" -ForegroundColor $ColorWarning
    Write-Host "  - Helper incorrectly catching a specific exception type" -ForegroundColor $ColorWarning
    Write-Host ""
    Write-Host 'If the change is intentional and documented in ToolAnalysis.md, update' -ForegroundColor $ColorWarning
    Write-Host 'the $expectedCounts table in this script before merging.' -ForegroundColor $ColorWarning
    exit 1
}
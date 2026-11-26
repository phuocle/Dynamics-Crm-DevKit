# Test-McpToolTryCatch.ps1
# Audit try/catch clauses in the MCP tools listed in $expectedCounts.
# Each tool has one main try/catch pair. Parser helpers may have their own pair.
#
# Exit code 0 = all files within expected range
# Exit code 1 = one or more files outside expected range (regression!)

param(
    [string]$ToolsRoot = "..\..\..\..\DynamicsCrm.DevKit.Cli\Mcp\Tools",
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
    "ExecuteFetchXmlTool"    = 4   # main method and FetchXML parsing
    "GetMessagesTool"        = 2
    "ManageCustomApiTool"    = 4   # main method and JSON parameter parsing
    "WhoAmITool"             = 2
    "ManageChoiceTool"       = 2
    "ManageViewTool"         = 4   # main method and ValidateFetchXmlExpression
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

Write-Header "MCP Tool Try/Catch Audit"

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
        # Match keywords at the start of a code line, including braces on the next line.
        $source = Get-Content -LiteralPath $filePath -Raw
        $pattern = '(?m)^[\t ]*(?:try(?=\s*\{)|catch(?=\s*[({]))'
        $tryMatches = [regex]::Matches($source, $pattern)

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
            $sourceLines = $source -split '\r?\n'
            foreach ($m in $tryMatches) {
                $lineIndex = [regex]::Matches($source.Substring(0, $m.Index), '\n').Count
                Write-Host ("    L{0}: {1}" -f ($lineIndex + 1), $sourceLines[$lineIndex].Trim()) -ForegroundColor $ColorInfo
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
    Write-Host "All audited tools match the expected try/catch counts." -ForegroundColor $ColorSuccess
    exit 0
} else {
    Write-Host "REGRESSION DETECTED. One or more tools have unexpected try/catch counts." -ForegroundColor $ColorError
    Write-Host ""
    Write-Host "Investigate each FAIL above. Likely causes:" -ForegroundColor $ColorWarning
    Write-Host "  - New inner try/catch added without updating the contract helper" -ForegroundColor $ColorWarning
    Write-Host "  - 'catch { return null; }' swallowed exception" -ForegroundColor $ColorWarning
    Write-Host "  - Helper incorrectly catching a specific exception type" -ForegroundColor $ColorWarning
    Write-Host ""
    Write-Host 'For intentional changes, explain the new handler in the $expectedCounts table.' -ForegroundColor $ColorWarning
    exit 1
}

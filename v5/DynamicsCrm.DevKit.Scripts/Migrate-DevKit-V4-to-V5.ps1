<#
.SYNOPSIS
    Migrate DynamicsCrm.DevKit batch files from v4 to v5 syntax.

.DESCRIPTION
    This script scans all .bat files in the specified folder and converts them from
    v4 CLI syntax (DynamicsCrm.DevKit.Cli.exe with /arg:value) to v5 syntax (devkit with --arg value).

    Key conversions:
    - Removes "for /f" loop that searches for CLI in packages folder
    - Converts /conn connection string to --auth, --url, --clientid, --clientsecret
    - Converts /type:"servers" to "server" command
    - Converts /arg:value to --arg value
    - Adds "where devkit" check block

.PARAMETER Path
    The folder path containing .bat files to migrate. Defaults to current directory.

.PARAMETER Recurse
    If specified, scan subfolders recursively.

.PARAMETER WhatIf
    If specified, show what would be changed without actually modifying files.

.EXAMPLE
    .\Migrate-DevKit-V4-to-V5.ps1
    Migrates all .bat files in current directory.

.EXAMPLE
    .\Migrate-DevKit-V4-to-V5.ps1 -Path "D:\MyProject" -Recurse
    Migrates all .bat files in D:\MyProject and its subfolders.

.EXAMPLE
    .\Migrate-DevKit-V4-to-V5.ps1 -Path "D:\MyProject" -WhatIf
    Shows what would be changed without modifying files.
#>

param(
    [Parameter(Position = 0)]
    [string]$Path = (Get-Location).Path,

    [switch]$Recurse,

    [switch]$WhatIf
)

# Type mapping from v4 to v5 commands
$TypeToCommand = @{
    "servers"              = "server"
    "generators"           = "generator"
    "webresources"         = "webresource"
    "plugins"              = "plugin"
    "workflows"            = "workflow"
    "dataproviders"        = "dataprovider"
    "proxytypes"           = "proxytype"
    "solutionpackagers"    = "solution"
    "downloadreports"      = "downloadreport"
    "uploadreports"        = "uploadreport"
    "downloadwebresources" = "downloadwebresource"
    "datasources"          = "datasource"
}

# Devkit check block to add at the beginning
$DevkitCheckBlock = @"
@echo off
REM Check if devkit is installed
where devkit >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo.
    echo ===============================================
    echo ERROR: DynamicsCrm.DevKit.Cli is not installed
    echo ===============================================
    echo.
    echo Please install the CLI tool first:
    echo.
    echo     dotnet tool install -g DynamicsCrm.DevKit.Cli
    echo.
    echo The command above has been COPIED to your clipboard.
    echo Just paste [Ctrl+V] and run it!
    echo.
    echo dotnet tool install -g DynamicsCrm.DevKit.Cli | clip
    pause
    exit /b 1
)

"@

function Parse-ConnectionString {
    param([string]$ConnString)

    # Remove surrounding quotes if present
    $ConnString = $ConnString.Trim('"', "'")

    $result = @{
        AuthType     = ""
        Url          = ""
        ClientId     = ""
        ClientSecret = ""
        Username     = ""
        Password     = ""
    }

    # Parse key=value pairs separated by semicolons
    $pairs = $ConnString -split ";"
    foreach ($pair in $pairs) {
        if ($pair -match "^(\w+)=(.*)$") {
            $key = $Matches[1].ToLower()
            $value = $Matches[2]

            switch ($key) {
                "authtype" { $result.AuthType = $value }
                "url" { $result.Url = $value }
                "clientid" { $result.ClientId = $value }
                "clientsecret" { $result.ClientSecret = $value }
                "username" { $result.Username = $value }
                "password" { $result.Password = $value }
            }
        }
    }

    # Default auth type if not specified
    if (-not $result.AuthType -and $result.ClientId -and $result.ClientSecret) {
        $result.AuthType = "ClientSecret"
    }

    return $result
}

function Build-V5AuthArgs {
    param([hashtable]$Conn)

    $args = @()

    if ($Conn.AuthType) {
        $args += "--auth `"$($Conn.AuthType)`""
    }
    if ($Conn.Url) {
        $args += "--url `"$($Conn.Url)`""
    }
    if ($Conn.ClientId) {
        $args += "--clientid `"$($Conn.ClientId)`""
    }
    if ($Conn.ClientSecret) {
        $args += "--clientsecret `"$($Conn.ClientSecret)`""
    }
    if ($Conn.Username) {
        $args += "--username `"$($Conn.Username)`""
    }
    if ($Conn.Password) {
        $args += "--password `"$($Conn.Password)`""
    }

    return $args -join " "
}

function Convert-V4ToV5 {
    param([string]$Content)

    $lines = $Content -split "`r?`n"
    $newLines = @()
    $connectionString = ""
    $isV4File = $false
    $skipNextLines = 0

    foreach ($line in $lines) {
        # Skip lines if we're in a multi-line for loop
        if ($skipNextLines -gt 0) {
            $skipNextLines--
            continue
        }

        # Detect and remove v4 CLI search patterns
        if ($line -match 'for\s+/f.*DynamicsCrm\.DevKit\.Cli') {
            $isV4File = $true
            # Check if this is a multi-line for loop
            if ($line -notmatch '\)$' -and $line -notmatch 'set\s+DynamicsCrmDevKitCli') {
                # Skip until we find the closing
                continue
            }
            continue
        }

        # Remove set DynamicsCrmDevKitCli lines
        if ($line -match 'set\s+DynamicsCrmDevKitCli\s*=') {
            continue
        }

        # Remove goto :break lines
        if ($line -match 'goto\s+:break\d*') {
            continue
        }

        # Remove :break labels
        if ($line -match '^:break\d*\s*$') {
            continue
        }

        # Capture connection string
        if ($line -match 'set\s+ConnectionString\s*=\s*(.+)$') {
            $connectionString = $Matches[1].Trim()
            $isV4File = $true
            continue
        }

        # Convert CLI execution line
        if ($line -match '"%DynamicsCrmDevKitCli%\\tools\\DynamicsCrm\.DevKit\.Cli\.exe"') {
            $isV4File = $true

            # Extract arguments from the line
            $type = ""
            $json = ""
            $profile = ""
            $version = ""
            $otherArgs = @()

            # Extract /type
            if ($line -match '/type:\s*"?([^"\s]+)"?') {
                $type = $Matches[1].ToLower()
            }

            # Extract /json
            if ($line -match '/json:\s*"([^"]+)"') {
                $json = $Matches[1]
            }

            # Extract /profile
            if ($line -match '/profile:\s*"([^"]+)"') {
                $profile = $Matches[1]
            }

            # Extract /version
            if ($line -match '/version:\s*"?([^"\s]+)"?') {
                $version = $Matches[1]
            }

            # Get v5 command
            $command = if ($TypeToCommand.ContainsKey($type)) { $TypeToCommand[$type] } else { "server" }

            # Build auth arguments
            $authArgs = ""
            if ($connectionString -match '\$ConnectionString\$' -or $connectionString -match '\$CliConnectionArgs\$') {
                # Template placeholder - convert to v5 placeholder
                $authArgs = '$CliConnectionArgs$'
            }
            elseif ($connectionString) {
                $conn = Parse-ConnectionString -ConnString $connectionString
                $authArgs = Build-V5AuthArgs -Conn $conn
            }

            # Build new command
            $newCommand = "devkit $command"
            if ($authArgs) {
                $newCommand += " $authArgs"
            }
            if ($json) {
                $newCommand += " --json `"$json`""
            }
            if ($profile) {
                $newCommand += " --profile `"$profile`""
            }
            if ($version -and $version -notmatch '%version%') {
                $newCommand += " --version `"$version`""
            }

            $newLines += $newCommand
            continue
        }

        $newLines += $line
    }

    if (-not $isV4File) {
        return $null  # Not a v4 file, skip
    }

    # Remove @echo off lines since DevkitCheckBlock already has it
    $newLines = $newLines | Where-Object { $_ -notmatch '^@echo\s+off' }

    # Remove empty lines at the beginning
    while ($newLines.Count -gt 0 -and [string]::IsNullOrWhiteSpace($newLines[0])) {
        $newLines = $newLines[1..($newLines.Count - 1)]
    }

    # Build final content
    $result = $DevkitCheckBlock + ($newLines -join "`r`n")

    return $result
}

# Main script
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "DynamicsCrm.DevKit Batch File Migrator" -ForegroundColor Cyan
Write-Host "v4 -> v5" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

if (-not (Test-Path $Path)) {
    Write-Host "Error: Path '$Path' does not exist." -ForegroundColor Red
    exit 1
}

Write-Host "Scanning folder: $Path" -ForegroundColor Yellow
if ($Recurse) {
    Write-Host "Mode: Recursive" -ForegroundColor Yellow
}
if ($WhatIf) {
    Write-Host "Mode: WhatIf (no changes will be made)" -ForegroundColor Yellow
}
Write-Host ""

# Get all .bat files
$searchParams = @{
    Path   = $Path
    Filter = "*.bat"
}
if ($Recurse) {
    $searchParams.Recurse = $true
}

$batFiles = Get-ChildItem @searchParams

if ($batFiles.Count -eq 0) {
    Write-Host "No .bat files found." -ForegroundColor Yellow
    exit 0
}

Write-Host "Found $($batFiles.Count) .bat file(s)" -ForegroundColor Green
Write-Host ""

$migratedCount = 0
$skippedCount = 0

foreach ($file in $batFiles) {
    Write-Host "Processing: $($file.FullName)" -ForegroundColor Gray

    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8

    # Skip if already v5 format
    if ($content -match 'where\s+devkit' -or $content -match '^devkit\s+') {
        Write-Host "  -> Skipped (already v5 format)" -ForegroundColor DarkGray
        $skippedCount++
        continue
    }

    $newContent = Convert-V4ToV5 -Content $content

    if ($null -eq $newContent) {
        Write-Host "  -> Skipped (not a v4 CLI file)" -ForegroundColor DarkGray
        $skippedCount++
        continue
    }

    if ($WhatIf) {
        Write-Host "  -> Would migrate (WhatIf mode)" -ForegroundColor Cyan
        Write-Host "--- New content preview ---" -ForegroundColor DarkCyan
        Write-Host $newContent -ForegroundColor DarkGray
        Write-Host "--- End preview ---" -ForegroundColor DarkCyan
    }
    else {
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8 -NoNewline
        Write-Host "  -> Migrated successfully" -ForegroundColor Green
    }

    $migratedCount++
}

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Migration Complete" -ForegroundColor Green
Write-Host "  Migrated: $migratedCount file(s)" -ForegroundColor Green
Write-Host "  Skipped:  $skippedCount file(s)" -ForegroundColor Yellow
Write-Host "==========================================" -ForegroundColor Cyan

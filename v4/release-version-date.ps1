<#
.SYNOPSIS
    DynamicsCrm.DevKit Release Build Script

.DESCRIPTION
  This script automates the release process including version updates,
  building, packaging, and cleanup.

.PARAMETER UseCurrentDate
    Optional flag. If true, uses current date/time instead of date.txt
    If false or omitted, reads date from date.txt

.EXAMPLE
    .\release-version-date.ps1
    .\release-version-date.ps1 -UseCurrentDate $false
    .\release-version-date.ps1 -UseCurrentDate $true

.NOTES
    Author: PhuocLe
#>

param(
    [Parameter(Mandatory=$false)]
    [bool]$UseCurrentDate = $false
)

# Set error action preference
$ErrorActionPreference = "Stop"

# Script-level variables
$script:VERSION = ""
$script:DATE = ""
$script:MSBUILD_PATH = ""
$script:VERSION_FILES = @()
$script:DATE_FILES = @()
$script:UpdatedFilesBackup = @{}

#region Helper Functions

function Write-Header {
    param([string]$Message)
    Write-Host ""
    Write-Host "************************************************************" -ForegroundColor Cyan
    Write-Host $Message -ForegroundColor Cyan
    Write-Host "************************************************************" -ForegroundColor Cyan
}

function Write-Section {
    param([string]$Message)
    Write-Host ""
    Write-Host $Message -ForegroundColor Yellow
}

function Write-Success {
    param([string]$Message)
    Write-Host $Message -ForegroundColor Green
}

function Write-ErrorMessage {
    param([string]$Message)
    Write-Host $Message -ForegroundColor Red
}

function Write-Info {
    param([string]$Message)
    Write-Host $Message -ForegroundColor White
}

#endregion

#region Core Functions

function Initialize-Variables {
    Write-Section "Initializing variables..."

    # Check version.txt
    if (-not (Test-Path "version.txt")) {
     Write-ErrorMessage "ERROR: version.txt file not found!"
        return $false
    }

    $script:VERSION = Get-Content "version.txt" -Raw
    $script:VERSION = $script:VERSION.Trim()

    # Handle date based on flag
    if ($UseCurrentDate) {
        Write-Info "Using current date/time..."
        $script:DATE = Get-Date -Format "yyyy.MM.dd HH.mm.ss"
    }
    else {
        Write-Info "Using date from date.txt..."
        if (-not (Test-Path "date.txt")) {
            Write-ErrorMessage "ERROR: date.txt file not found!"
            return $false
}
        $script:DATE = Get-Content "date.txt" -Raw
        $script:DATE = $script:DATE.Trim()
    }

  Write-Success "Version: $script:VERSION"
    Write-Success "Date: $script:DATE"

    # Define file arrays for version and date updates
    $script:VERSION_FILES = @(
        "DynamicsCrm.DevKit.Shared\Const.cs",
        "DynamicsCrm.DevKit.Cli\docs\README.md",
        "DynamicsCrm.DevKit\source.extension.cs",
        "ProjectTemplates\CSharp\05.PackageProjectTemplate\ReadMe.md",
        "ProjectTemplates\CSharp\12.ReportProjectTemplate\ReadMe.md"
    )

    $script:DATE_FILES = @(
        "DynamicsCrm.DevKit.Cli\docs\README.md",
        "DynamicsCrm.DevKit.Shared\Const.cs",
        "DynamicsCrm.DevKit\source.extension.vsixmanifest",
        "DynamicsCrm.DevKit\VSPackage.resx",
        "DynamicsCrm.DevKit\source.extension.cs",
        "ProjectTemplates\CSharp\05.PackageProjectTemplate\ReadMe.md",
        "ProjectTemplates\CSharp\12.ReportProjectTemplate\ReadMe.md"
  )

    return $true
}

function Update-VersionPlaceholders {
    Write-Section "Updating version and date placeholders..."

    # Track successfully updated files and their backups for rollback
    $script:UpdatedFilesBackup = @{}
    $failedFile = $null

    # Categorize files to avoid double-write issue
    # Files that appear in BOTH lists need combined update (single read-replace-write)
    $bothFiles = $script:VERSION_FILES | Where-Object { $script:DATE_FILES -contains $_ }
    $versionOnlyFiles = $script:VERSION_FILES | Where-Object { $script:DATE_FILES -notcontains $_ }
    $dateOnlyFiles = $script:DATE_FILES | Where-Object { $script:VERSION_FILES -notcontains $_ }

    # Update files needing BOTH version AND date (single operation to avoid file locking)
    foreach ($file in $bothFiles) {
        Write-Info "Updating version AND date in $file"
        $success = $false
        $backup = $null

        for ($attempt = 1; $attempt -le 5; $attempt++) {
            try {
                # Wait before attempting to ensure no file locks
                if ($attempt -gt 1) {
                    Start-Sleep -Milliseconds (500 * $attempt)
                }

                # Read file content with a delay to avoid lock contention
                Start-Sleep -Milliseconds 50
                $content = Get-Content $file -Raw -Encoding UTF8

                if ([string]::IsNullOrEmpty($content)) {
                    throw "File content is empty or null"
                }

                # Store backup on first attempt
                if ($attempt -eq 1) {
                    $backup = $content
                }

                # Perform both replacements
                $newContent = $content -replace 'x\.xx\.xx\.xx', $script:VERSION
                $newContent = $newContent -replace 'xxxx\.yy\.zz HH\.mm\.ss', $script:DATE

                # Verify we have content to write
                if ([string]::IsNullOrEmpty($newContent)) {
                    throw "Replacement resulted in empty content"
                }

                # Small delay before writing to ensure previous handles are closed
                Start-Sleep -Milliseconds 100

                # Write using .NET to have better control
                [System.IO.File]::WriteAllText($file, $newContent, [System.Text.Encoding]::UTF8)

                # Verify file was written correctly
                Start-Sleep -Milliseconds 50
                $verifyLength = (Get-Item $file).Length
                if ($verifyLength -eq 0) {
                    throw "File became empty after write"
                }

                $success = $true
                # Store backup for potential rollback
                $script:UpdatedFilesBackup[$file] = $backup
                break
            }
            catch {
                $errorMsg = $_.Exception.Message
                if ($errorMsg -like "*being used by another process*") {
                    Write-Host "  Attempt $attempt failed: File is locked by another process" -ForegroundColor Yellow
                }
                else {
                    Write-Host "  Attempt $attempt failed: $errorMsg" -ForegroundColor Yellow
                }

                if ($attempt -lt 5) {
                    Write-Host "  Waiting before retry..." -ForegroundColor Yellow
                }
            }
        }

        if (-not $success) {
            $failedFile = $file
            Write-ErrorMessage "ERROR: Failed to update version and date in $file after 5 attempts"
            Write-ErrorMessage "ROLLING BACK all previous changes..."

            # Rollback all previously updated files
            Rollback-FileChanges

            Write-ErrorMessage ""
            Write-ErrorMessage "************************************************************"
            Write-ErrorMessage "CANNOT REPLACE FILE: $failedFile"
            Write-ErrorMessage "************************************************************"
            Write-ErrorMessage "Please manually edit this file and try again."
            Write-ErrorMessage ""
            return $false
        }
    }

    # Update version-only files
    foreach ($file in $versionOnlyFiles) {
        Write-Info "Updating version in $file"
        $success = $false

        for ($attempt = 1; $attempt -le 5; $attempt++) {
            try {
                if ($attempt -gt 1) {
                    Start-Sleep -Milliseconds (500 * $attempt)
                }

                Start-Sleep -Milliseconds 50
                $content = Get-Content $file -Raw -Encoding UTF8

                if ([string]::IsNullOrEmpty($content)) {
                    throw "File content is empty or null"
                }

                # Store backup on first attempt
                if ($attempt -eq 1) {
                    $backup = $content
                }

                $newContent = $content -replace 'x\.xx\.xx\.xx', $script:VERSION

                if ([string]::IsNullOrEmpty($newContent)) {
                    throw "Replacement resulted in empty content"
                }

                Start-Sleep -Milliseconds 100
                [System.IO.File]::WriteAllText($file, $newContent, [System.Text.Encoding]::UTF8)

                # Verify write
                Start-Sleep -Milliseconds 50
                $verifyLength = (Get-Item $file).Length
                if ($verifyLength -eq 0) {
                    throw "File became empty after write"
                }

                $success = $true
                $script:UpdatedFilesBackup[$file] = $backup
                break
            }
            catch {
                if ($attempt -lt 5) {
                    Write-Host "  Attempt $attempt failed, retrying..." -ForegroundColor Yellow
                }
            }
        }

        if (-not $success) {
            $failedFile = $file
            Write-ErrorMessage "ERROR: Failed to update version in $file after 5 attempts"
            Write-ErrorMessage "ROLLING BACK all previous changes..."

            # Rollback all previously updated files
            Rollback-FileChanges

            Write-ErrorMessage ""
            Write-ErrorMessage "************************************************************"
            Write-ErrorMessage "CANNOT REPLACE FILE: $failedFile"
            Write-ErrorMessage "************************************************************"
            Write-ErrorMessage "Please manually edit this file and try again."
            Write-ErrorMessage ""
            return $false
        }
    }

    # Update date-only files
    foreach ($file in $dateOnlyFiles) {
        Write-Info "Updating date in $file"
        $success = $false

        for ($attempt = 1; $attempt -le 5; $attempt++) {
            try {
                if ($attempt -gt 1) {
                    Start-Sleep -Milliseconds (500 * $attempt)
                }

                Start-Sleep -Milliseconds 50
                $content = Get-Content $file -Raw -Encoding UTF8

                if ([string]::IsNullOrEmpty($content)) {
                    throw "File content is empty or null"
                }

                # Store backup on first attempt
                if ($attempt -eq 1) {
                    $backup = $content
                }

                $newContent = $content -replace 'xxxx\.yy\.zz HH\.mm\.ss', $script:DATE

                if ([string]::IsNullOrEmpty($newContent)) {
                    throw "Replacement resulted in empty content"
                }

                Start-Sleep -Milliseconds 100
                [System.IO.File]::WriteAllText($file, $newContent, [System.Text.Encoding]::UTF8)

                # Verify write
                Start-Sleep -Milliseconds 50
                $verifyLength = (Get-Item $file).Length
                if ($verifyLength -eq 0) {
                    throw "File became empty after write"
                }

                $success = $true
                $script:UpdatedFilesBackup[$file] = $backup
                break
            }
            catch {
                if ($attempt -lt 5) {
                    Write-Host "  Attempt $attempt failed, retrying..." -ForegroundColor Yellow
                }
            }
        }

        if (-not $success) {
            $failedFile = $file
            Write-ErrorMessage "ERROR: Failed to update date in $file after 5 attempts"
            Write-ErrorMessage "ROLLING BACK all previous changes..."

            # Rollback all previously updated files
            Rollback-FileChanges

            Write-ErrorMessage ""
            Write-ErrorMessage "************************************************************"
            Write-ErrorMessage "CANNOT REPLACE FILE: $failedFile"
            Write-ErrorMessage "************************************************************"
            Write-ErrorMessage "Please manually edit this file and try again."
            Write-ErrorMessage ""
            return $false
        }
    }

    Write-Success "Version and date placeholders updated successfully."
    # Clear backup after successful update
    $script:UpdatedFilesBackup = @{}
    return $true
}

function Rollback-FileChanges {
    if ($script:UpdatedFilesBackup.Count -eq 0) {
        Write-Info "No files to rollback."
        return
    }

    Write-Section "Rolling back changes to previously updated files..."
    $rollbackErrors = @()

    foreach ($file in $script:UpdatedFilesBackup.Keys) {
        Write-Info "  Restoring: $file"
        $success = $false

        for ($attempt = 1; $attempt -le 5; $attempt++) {
            try {
                if ($attempt -gt 1) {
                    Start-Sleep -Milliseconds (500 * $attempt)
                }

                Start-Sleep -Milliseconds 100
                $originalContent = $script:UpdatedFilesBackup[$file]
                [System.IO.File]::WriteAllText($file, $originalContent, [System.Text.Encoding]::UTF8)

                # Verify restoration
                Start-Sleep -Milliseconds 50
                $verifyLength = (Get-Item $file).Length
                if ($verifyLength -eq 0) {
                    throw "File became empty after restoration"
                }

                $success = $true
                Write-Success "  Restored: $file"
                break
            }
            catch {
                if ($attempt -lt 5) {
                    Write-Host "  Rollback attempt $attempt failed, retrying..." -ForegroundColor Yellow
                }
            }
        }

        if (-not $success) {
            $rollbackErrors += $file
            Write-ErrorMessage "  WARNING: Failed to rollback $file"
        }
    }

    if ($rollbackErrors.Count -gt 0) {
        Write-ErrorMessage ""
        Write-ErrorMessage "WARNING: The following files could not be rolled back:"
        foreach ($file in $rollbackErrors) {
            Write-ErrorMessage "  - $file"
        }
        Write-ErrorMessage "Please manually restore these files from source control."
    }
    else {
        Write-Success "All files successfully rolled back."
    }
}

function Find-MSBuild {
    Write-Info "Locating MSBuild..."
    $msbuildPaths = @(
        "C:\Program Files\Microsoft Visual Studio\2026\Professional\MSBuild\Current\Bin\MSBuild.exe",
        "C:\Program Files\Microsoft Visual Studio\2026\Enterprise\MSBuild\Current\Bin\MSBuild.exe",
        "C:\Program Files\Microsoft Visual Studio\2026\Community\MSBuild\Current\Bin\MSBuild.exe",
        "C:\Program Files\Microsoft Visual Studio\2022\Enterprise\MSBuild\Current\Bin\MSBuild.exe",
        "C:\Program Files\Microsoft Visual Studio\2022\Professional\MSBuild\Current\Bin\MSBuild.exe",
        "C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Current\Bin\MSBuild.exe"
    )
    foreach ($path in $msbuildPaths) {
        if (Test-Path $path) {
            $script:MSBUILD_PATH = $path
            Write-Success "Found MSBuild: $path"
            return $true
        }
    }
    Write-ErrorMessage "ERROR: MSBuild.exe not found!"
    Write-ErrorMessage "Please ensure Visual Studio 2022 or 2026 is installed."
    return $false
}

function Build-Solution {
    Write-Header "Building solution: RELEASE MODE"
    Write-Info "Version: $script:VERSION - Release: $script:DATE"
    if (-not (Find-MSBuild)) {
        return $false
    }
    # Prepare published directory
    $publishedDir = "Published\$script:VERSION"
    if (Test-Path $publishedDir) {
        Write-Info "Cleaning existing published directory..."
    Remove-Item "$publishedDir\*.*" -Force -ErrorAction SilentlyContinue
    }
    else {
        Write-Info "Creating published directory..."
        New-Item -ItemType Directory -Path $publishedDir -Force | Out-Null
    }
    # Build solution
    Write-Info "Building solution..."
    try {
        # Use Developer Command Prompt for VS 2026 or VS 2022
        # Find VsDevCmd.bat
        $vsInstallPath = "C:\Program Files\Microsoft Visual Studio\2026\Professional"
        if (-not (Test-Path $vsInstallPath)) {
            $vsInstallPath = "C:\Program Files\Microsoft Visual Studio\2026\Enterprise"
        }
        if (-not (Test-Path $vsInstallPath)) {
            $vsInstallPath = "C:\Program Files\Microsoft Visual Studio\2026\Community"
        }
        if (-not (Test-Path $vsInstallPath)) {
            $vsInstallPath = "C:\Program Files\Microsoft Visual Studio\2022\Enterprise"
        }
        if (-not (Test-Path $vsInstallPath)) {
            $vsInstallPath = "C:\Program Files\Microsoft Visual Studio\2022\Professional"
        }
        if (-not (Test-Path $vsInstallPath)) {
            $vsInstallPath = "C:\Program Files\Microsoft Visual Studio\2022\Community"
        }

        $vsDevCmd = "$vsInstallPath\Common7\Tools\VsDevCmd.bat"

        # Build command that initializes VS environment and then builds
        # Use short paths to avoid quote issues
        $msbuildShort = $script:MSBUILD_PATH -replace 'Program Files', 'PROGRA~1'
        $buildCommand = "`"`"$vsDevCmd`" && `"$script:MSBUILD_PATH`" /nologo /verbosity:normal /consoleloggerparameters:NoSummary -p:Configuration=Release -target:Clean;Build DynamicsCrm.DevKit.AllInOne.sln`""

        # Build argument list for cmd.exe
        $buildArgs = @(
            "/c"
            $buildCommand
        )

        # Use Start-Process with cmd.exe to initialize VS environment
        $buildProcess = Start-Process -FilePath "cmd.exe" `
            -ArgumentList $buildArgs `
            -NoNewWindow `
            -Wait `
            -PassThru `
            -RedirectStandardOutput "build-output.tmp" `
            -RedirectStandardError "build-error.tmp"

        # Read and display the output with color coding
        if (Test-Path "build-output.tmp") {
            $buildOutput = Get-Content "build-output.tmp"
            foreach ($line in $buildOutput) {
                # Display project build lines with color coding
                if ($line -match '^\s*\d+>------ (Build|Clean) started:.*Project: (.+?),') {
                    $projectName = $matches[2]
                    Write-Host "  Building: $projectName" -ForegroundColor Cyan
                }
                elseif ($line -match '^\s*\d+>------ Skipped') {
                    Write-Host "  $line" -ForegroundColor DarkGray
                }
                elseif ($line -match 'Project ".+\\(.+?\.(csproj|vcxproj|vbproj))"') {
                    $projFile = $matches[1]
                    Write-Host "    -> $projFile" -ForegroundColor White
                }
                elseif ($line -match '-> .+\\(DynamicsCrm\.DevKit\..+?\.(dll|exe|vsix))') {
                    $outputFile = $matches[1]
                    Write-Host "    * $outputFile" -ForegroundColor Green
                }
                elseif ($line -match '(Build succeeded|Build FAILED)') {
                    $status = $matches[1]
                    $color = if ($status -match 'FAILED') { 'Red' } else { 'Green' }
                    Write-Host "  $line" -ForegroundColor $color
                }
                elseif ($line -match 'error (CS|MSB)\d+:') {
                    Write-Host "  $line" -ForegroundColor Red
                }
                elseif ($line -match 'warning (CS|MSB)\d+:') {
                    Write-Host "  $line" -ForegroundColor Yellow
                }
            }
            Remove-Item "build-output.tmp" -Force -ErrorAction SilentlyContinue
        }

        # Display errors if any
        if (Test-Path "build-error.tmp") {
            $buildErrors = Get-Content "build-error.tmp"
            if ($buildErrors) {
                foreach ($line in $buildErrors) {
                    Write-Host "  $line" -ForegroundColor Red
                }
            }
            Remove-Item "build-error.tmp" -Force -ErrorAction SilentlyContinue
        }

        $buildExitCode = $buildProcess.ExitCode

        if ($buildExitCode -ne 0) {
            Write-ErrorMessage ""
            Write-ErrorMessage "ERROR: Solution build failed with exit code $buildExitCode!"
            Write-ErrorMessage ""

            # Show more context from build output
            if (Test-Path "build-output.tmp") {
                Write-ErrorMessage "Build errors/warnings:"
                $buildOutput = Get-Content "build-output.tmp"
                $errorLines = $buildOutput | Where-Object { $_ -match 'error (CS|MSB)\d+:' -or $_ -match 'Build FAILED' }
                $warningLines = $buildOutput | Where-Object { $_ -match 'warning (CS|MSB)\d+:' }

                if ($errorLines) {
                    Write-ErrorMessage "Errors found:"
                    foreach ($line in $errorLines) {
                        Write-Host "  $line" -ForegroundColor Red
                    }
                }

                if ($warningLines -and $warningLines.Count -le 10) {
                    Write-Host ""
                    Write-Host "Warnings:" -ForegroundColor Yellow
                    foreach ($line in $warningLines) {
                        Write-Host "  $line" -ForegroundColor Yellow
                    }
                }

                # Show last 15 lines for context
                Write-Host ""
                Write-Host "Last output lines:" -ForegroundColor Gray
                $buildOutput | Select-Object -Last 15 | ForEach-Object {
                    Write-Host "  $_" -ForegroundColor Gray
                }
            }

            return $false
        }
        Write-Success "Solution built successfully."
        return $true
    }
    catch {
        Write-ErrorMessage "ERROR: Solution build failed!"
        Write-ErrorMessage $_.Exception.Message
        return $false
    }
    finally {
        # Cleanup temp files
        Remove-Item "build-output.tmp" -Force -ErrorAction SilentlyContinue
        Remove-Item "build-error.tmp" -Force -ErrorAction SilentlyContinue
    }
}

function New-NuGetPackages {
    Write-Header "Creating NuGet packages..."
    $originalDir = Get-Location
    $success = $true
    try {
    # Create Analyzers NuGet package
      Write-Info "Creating Analyzers NuGet package..."
        Set-Location "DynamicsCrm.DevKit.Analyzers\Nuget"
        & .\pack.bat
        if ($LASTEXITCODE -ne 0) {
            Write-ErrorMessage "ERROR: Failed to create Analyzers NuGet package!"
            $success = $false
        }
        if ($success) {
            # Create CLI NuGet package
            Write-Info "Creating CLI NuGet package..."
            Set-Location $originalDir
            Set-Location "DynamicsCrm.DevKit.Cli\Nuget"
            & .\pack.bat
            if ($LASTEXITCODE -ne 0) {
                Write-ErrorMessage "ERROR: Failed to create CLI NuGet package!"
                $success = $false
            }
        }
        if ($success) {
        # Create Tool NuGet package
            Write-Info "Creating Tool NuGet package..."
            Set-Location $originalDir
            Set-Location "DynamicsCrm.DevKit.Tool\Nuget"
            & .\pack.bat
            if ($LASTEXITCODE -ne 0) {
                Write-ErrorMessage "ERROR: Failed to create Tool NuGet package!"
                $success = $false
            }
        }
        if ($success) {
            Write-Success "All NuGet packages created successfully."
        }
     }
    finally {
        Set-Location $originalDir
    }
    return $success
}

function Copy-VsixToPublished {
    Write-Section "Copying VSIX to published folder..."
    $vsixSource = "DynamicsCrm.DevKit\bin\Release\DynamicsCrm.DevKit.vsix"
    $vsixDest = "Published\$script:VERSION\DynamicsCrm.DevKit.$script:VERSION.vsix"
    if (-not (Test-Path $vsixSource)) {
      Write-ErrorMessage "ERROR: VSIX file not found at $vsixSource"
        return $false
    }
    try {
        Copy-Item -Path $vsixSource -Destination $vsixDest -Force
        Write-Success "VSIX copied successfully to $vsixDest"
        return $true
    }
    catch {
        Write-ErrorMessage "ERROR: Failed to copy VSIX file!"
        Write-ErrorMessage $_.Exception.Message
        return $false
    }
}

function Restore-Placeholders {
    Write-Section "Reverting version and date placeholders..."
    $hasErrors = $false

    # Categorize files to avoid double-write issue during restore
    $bothFiles = $script:VERSION_FILES | Where-Object { $script:DATE_FILES -contains $_ }
    $versionOnlyFiles = $script:VERSION_FILES | Where-Object { $script:DATE_FILES -notcontains $_ }
    $dateOnlyFiles = $script:DATE_FILES | Where-Object { $script:VERSION_FILES -notcontains $_ }

    # Revert files with BOTH version AND date (single operation)
    foreach ($file in $bothFiles) {
        Write-Info "Reverting version AND date in $file"
        $success = $false
        $backup = $null

        for ($attempt = 1; $attempt -le 5; $attempt++) {
            try {
                # Wait before attempting to ensure no file locks
                if ($attempt -gt 1) {
                    Start-Sleep -Milliseconds (500 * $attempt)
                }

                # Read file content
                Start-Sleep -Milliseconds 50
                $content = Get-Content $file -Raw -Encoding UTF8

                if ([string]::IsNullOrEmpty($content)) {
                    Write-Host "  WARNING: File is empty, skipping" -ForegroundColor Yellow
                    $hasErrors = $true
                    break
                }

                # Store backup on first attempt
                if ($attempt -eq 1) {
                    $backup = $content
                }

                # Perform both replacements
                $newContent = $content -replace [regex]::Escape($script:VERSION), 'x.xx.xx.xx'
                $newContent = $newContent -replace [regex]::Escape($script:DATE), 'xxxx.yy.zz HH.mm.ss'

                # Write to file
                Start-Sleep -Milliseconds 100
                [System.IO.File]::WriteAllText($file, $newContent, [System.Text.Encoding]::UTF8)

                $success = $true
                break
            }
            catch {
                $errorMsg = $_.Exception.Message
                if ($attempt -lt 5) {
                    Write-Host "  Attempt $attempt failed, retrying..." -ForegroundColor Yellow
                }
                else {
                    Write-Host "WARNING: Failed to revert version and date in $file after $attempt attempts" -ForegroundColor Yellow
                    Write-Host $errorMsg -ForegroundColor Yellow
                    $hasErrors = $true
                }
            }
        }
    }

    # Revert version-only placeholders
    foreach ($file in $versionOnlyFiles) {
        Write-Info "Reverting version in $file"
        try {
            Start-Sleep -Milliseconds 50
            $content = Get-Content $file -Raw -Encoding UTF8
            $newContent = $content -replace [regex]::Escape($script:VERSION), 'x.xx.xx.xx'
            Start-Sleep -Milliseconds 100
            [System.IO.File]::WriteAllText($file, $newContent, [System.Text.Encoding]::UTF8)
        }
        catch {
            Write-Host "WARNING: Failed to revert version in $file" -ForegroundColor Yellow
            Write-Host $_.Exception.Message -ForegroundColor Yellow
            $hasErrors = $true
        }
    }

    # Revert date-only placeholders
    foreach ($file in $dateOnlyFiles) {
        Write-Info "Reverting date in $file"
        try {
            Start-Sleep -Milliseconds 50
            $content = Get-Content $file -Raw -Encoding UTF8
            $newContent = $content -replace [regex]::Escape($script:DATE), 'xxxx.yy.zz HH.mm.ss'
            Start-Sleep -Milliseconds 100
            [System.IO.File]::WriteAllText($file, $newContent, [System.Text.Encoding]::UTF8)
        }
        catch {
            Write-Host "WARNING: Failed to revert date in $file" -ForegroundColor Yellow
            Write-Host $_.Exception.Message -ForegroundColor Yellow
            $hasErrors = $true
        }
    }

    if (-not $hasErrors) {
        Write-Success "Placeholders reverted successfully."
    }
    return $true
}

#endregion

#region Main Execution

function Main {
 Write-Header "DynamicsCrm DevKit Release Build Script"
    Write-Info "Use current date: $UseCurrentDate"
    try {
        # Initialize variables and validate required files
        if (-not (Initialize-Variables)) {
          throw "Failed to initialize variables"
        }
        # Update version and date placeholders in source files
        if (-not (Update-VersionPlaceholders)) {
            throw "Failed to update version placeholders"
        }
        # Build the solution
        if (-not (Build-Solution)) {
            throw "Failed to build solution"
        }
        # Create NuGet packages
        if (-not (New-NuGetPackages)) {
            throw "Failed to create NuGet packages"
        }
        # Copy VSIX to published folder
        if (-not (Copy-VsixToPublished)) {
            throw "Failed to copy VSIX"
        }
        # Revert version and date placeholders
        Restore-Placeholders | Out-Null
        # Success message
        Write-Header "Release build completed successfully!"
        Write-Success "Version: $script:VERSION"
        Write-Success "Date: $script:DATE"
        Write-Success "Published to: Published\$script:VERSION\"
        exit 0
    }
    catch {
        Write-Header "ERROR: Build process failed!"
        Write-ErrorMessage $_.Exception.Message
        Write-Info "Attempting to revert placeholders..."
        Restore-Placeholders | Out-Null
     exit 1
    }
}

# Execute main function
Main

#endregion

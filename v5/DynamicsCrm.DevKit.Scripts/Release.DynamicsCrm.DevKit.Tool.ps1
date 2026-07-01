$ProjectRoot = (Get-Item $PSScriptRoot).Parent.FullName
$ConfigFile = "$ProjectRoot\DynamicsCrm.DevKit.Scripts\DevKit.ReleaseConfig.json"
$Config = Get-Content $ConfigFile -Raw | ConvertFrom-Json
$Version = $Config.version
$BuildDate = Get-Date -Format "dd.MM.yyyy HH:mm:ss"

Write-Host "Version: $Version" -ForegroundColor Cyan
Write-Host "Build Date: $BuildDate" -ForegroundColor Cyan

$ConstFile = "$ProjectRoot\DynamicsCrm.DevKit.Shared\Const.cs"

$utf8NoBom = New-Object System.Text.UTF8Encoding $False
$OriginalContent = [System.IO.File]::ReadAllText($ConstFile, $utf8NoBom)

try {
    # Build-time replacement is date-only. Version is stable in source.
    $NewContent = $OriginalContent -replace [regex]::Escape("xxxx.yy.zz HH.mm.ss"), $BuildDate
    [System.IO.File]::WriteAllText($ConstFile, $NewContent, $utf8NoBom)
    Write-Host "Updated Const.cs with build date $BuildDate" -ForegroundColor Green

    $publishDir = "$ProjectRoot\published\$Version"
    New-Item -Path $publishDir -ItemType Directory -Force | Out-Null

    Stop-Process -Name "DynamicsCrm.DevKit.Tool" -Force -ErrorAction SilentlyContinue
    Stop-Process -Name "devkit-tool" -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 1

    dotnet build "$ProjectRoot\DynamicsCrm.DevKit.Tool\DynamicsCrm.DevKit.Tool.csproj" -c Debug -p:Version=$Version -p:AssemblyVersion=$Version -p:FileVersion=$Version
    dotnet pack "$ProjectRoot\DynamicsCrm.DevKit.Tool\DynamicsCrm.DevKit.Tool.csproj" -c Debug -o $publishDir -p:Version=$Version -p:AssemblyVersion=$Version -p:FileVersion=$Version --no-build

    $ToolName = "DynamicsCrm.DevKit.Tool"
    Stop-Process -Name "DynamicsCrm.DevKit.Tool" -Force -ErrorAction SilentlyContinue
    Stop-Process -Name "devkit-tool" -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 1

    dotnet tool uninstall -g $ToolName 2>$null

    Remove-Item -Path "$env:USERPROFILE\.dotnet\tools\.store\dynamicscrm.devkit.tool" -Recurse -Force -ErrorAction SilentlyContinue
    Remove-Item -Path "$env:USERPROFILE\.dotnet\tools\devkit-tool.exe" -Force -ErrorAction SilentlyContinue
    Remove-Item -Path "$env:USERPROFILE\.nuget\packages\dynamicscrm.devkit.tool\$Version" -Recurse -Force -ErrorAction SilentlyContinue

    if (Test-Path "$env:USERPROFILE\.dotnet\tools\.store\dynamicscrm.devkit.tool") {
        Write-Host "Tool store still exists, retrying cleanup..." -ForegroundColor Yellow
        Start-Sleep -Seconds 2
        Remove-Item -Path "$env:USERPROFILE\.dotnet\tools\.store\dynamicscrm.devkit.tool" -Recurse -Force -ErrorAction Stop
    }

    dotnet tool install -g $ToolName --add-source $publishDir --version $Version
}
finally {
    [System.IO.File]::WriteAllText($ConstFile, $OriginalContent, $utf8NoBom)
    Write-Host "Restored Const.cs to source values" -ForegroundColor Yellow
}

devkit-tool --help

$content = Get-Content $ConstFile -Raw
$versionPattern = [regex]::Escape($Version)
if ($content -match $versionPattern -and $content -match "xxxx\.yy\.zz HH\.mm\.ss") {
    Write-Host "[x] Const.cs restored successfully" -ForegroundColor Green
} else {
    Write-Host "[!] ERROR: Const.cs NOT restored! Please restore manually!" -ForegroundColor Red
    Write-Host "Run: git restore -- $ConstFile" -ForegroundColor Yellow
}

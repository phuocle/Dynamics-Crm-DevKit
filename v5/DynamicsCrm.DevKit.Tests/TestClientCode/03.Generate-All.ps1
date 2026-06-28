Write-Host "============================================="
Write-Host "  GENERATING Source of Truth Entity Files"
Write-Host "============================================="
Write-Host ""

# Build CLI
Write-Host "Building CLI..." -ForegroundColor Cyan
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
$project = "..\..\DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj"
& $msbuild -t:Build -p:Configuration=Release $project -restore -verbosity:minimal
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Failed to build CLI" -ForegroundColor Red
    exit 1
}

$cliPath = "D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli\bin\Release\net10.0\DynamicsCrm.DevKit.Cli.dll"

# Check if CLI exists
if (-not (Test-Path $cliPath)) {
    Write-Host "[ERROR] CLI not found at: $cliPath" -ForegroundColor Red
    exit 1
}

# Clean up all generated files before generation
# $foldersToClean = @(
#     "05.DevKitJs-Vsix\Dev.DevKit.WebResource\entities",
#     "06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs\entities"
# )

# foreach ($folder in $foldersToClean) {
#     if (Test-Path $folder) {
#         Write-Host "Cleaning $folder..." -ForegroundColor Yellow
#         Get-ChildItem -Path $folder -Include "*.js", "*.ts", "*.d.ts" -Recurse | Where-Object { $_.Name -ne "devkit.d.ts" } | ForEach-Object {
#             Write-Host "  Deleting $($_.Name)..." -ForegroundColor Gray
#             Remove-Item $_.FullName -Force
#         }
#     }
# }

$connectionString = "AuthType=ClientSecret;Url=https://dynamics-crm-devkit-v4.crm.dynamics.com;ClientId=1a60a5c2-d04c-4b26-8f86-9d6ce0616799;ClientSecret=4Y11hDyKJYQTqXC9cRDXnoJ2DytZDs/jYI1byYwKli57mRfjHcCPu6Qx5sxgtCWQ;"

# JS-FORM
Write-Host "Generating: JS-FORM..." -ForegroundColor Cyan
Push-Location "05.DevKitJs-Vsix\Dev.DevKit.WebResource\entities"
& dotnet $cliPath /conn:"$connectionString" /json:"..\..\DynamicsCrm.DevKit.Cli.json" /type:"generators" /profile:"JS-FORM"
Pop-Location

# JS-WEBAPI
Write-Host "Generating: JS-WEBAPI..." -ForegroundColor Cyan
Push-Location "05.DevKitJs-Vsix\Dev.DevKit.WebResource\entities"
& dotnet $cliPath /conn:"$connectionString" /json:"..\..\DynamicsCrm.DevKit.Cli.json" /type:"generators" /profile:"JS-WEBAPI"
Pop-Location

# TS-FORM
Write-Host "Generating: TS-FORM..." -ForegroundColor Cyan
Push-Location "06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs\entities"
& dotnet $cliPath /conn:"$connectionString" /json:"..\..\DynamicsCrm.DevKit.Cli.json" /type:"generators" /profile:"TS-FORM"
Pop-Location

# TS-WEBAPI (using same profile as TS-FORM for now)
Write-Host "Generating: TS-WEBAPI..." -ForegroundColor Cyan
Push-Location "06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs\entities"
& dotnet $cliPath /conn:"$connectionString" /json:"..\..\DynamicsCrm.DevKit.Cli.json" /type:"generators" /profile:"TS-WEBAPI"
Pop-Location

Write-Host ""
Write-Host "============================================="
Write-Host "  GENERATE COMPLETE"
Write-Host "============================================="

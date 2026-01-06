$projects = @(
    "01.DevKitJs-UnitTest",
    "02.DevKitTs-UnitTest",
    "03.DevKitJs-AICode",
    "04.DevKitTs-AICode",
    "05.DevKitJs-Vsix",
    "06.DevKitTs-Vsix"
)

$currentDir = Get-Location

foreach ($project in $projects) {
    if (Test-Path "$currentDir\$project") {
        Write-Host "--------------------------------------------------------------------------------"
        Write-Host "Processing: $project"
        Write-Host "--------------------------------------------------------------------------------"
        Set-Location "$currentDir\$project"

        if ($project -eq "01.DevKitJs-UnitTest") {
            Write-Host "Running: npm test"
            npm test
        }
        elseif ($project -eq "02.DevKitTs-UnitTest") {
            Write-Host "Running: npm run devkit-test"
            npm run devkit-test
            Write-Host "Running: npm run check"
            npm run check
        }
        elseif ($project -eq "04.DevKitTs-AICode") {
            Write-Host "Running: npm run check"
            npm run check
        }
        elseif ($project -eq "06.DevKitTs-Vsix") {
            Write-Host "Running: npm run check"
            npm run check
        }
        else {
            Write-Host "No tests or checks configured for $project"
        }
    }
}

Set-Location $currentDir
Write-Host "--------------------------------------------------------------------------------"
Write-Host "Done"
Write-Host "--------------------------------------------------------------------------------"

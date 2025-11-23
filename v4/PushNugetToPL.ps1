$sourceName = "MyAzureFeed"
$sourceUrl = "https://pkgs.dev.azure.com/phuocle/_packaging/DynamicsCrm.DevKit/nuget/v3/index.json"
# Note: It is generally not recommended to hardcode secrets in scripts. Consider using environment variables.
$pat = "1t06T1apvTgtNqBl5YJxeTW2C8nSqKPf54jM65mN4o8dMm3b5uroJQQJ99BKACAAAAAKEtgPAAASAZDO3GcH"

# 1. Check if source exists and update or add accordingly
$existingSource = dotnet nuget list source | Select-String $sourceName

if ($existingSource) {
    Write-Host "Source '$sourceName' already exists. Updating credentials..."
    dotnet nuget update source $sourceName --username "phuocle" --password $pat --store-password-in-clear-text
}
else {
    Write-Host "Adding source '$sourceName'..."
    dotnet nuget add source $sourceUrl --name $sourceName --username "phuocle" --password $pat --store-password-in-clear-text
}

# 3. Push using the source name with --skip-duplicate to handle existing packages
Get-ChildItem "D:\github\Dynamics-Crm-DevKit\v4\Published\4.00.00.00\*.nupkg" | ForEach-Object {
    Write-Host "Pushing $($_.Name)..."
    dotnet nuget push $_.FullName --source $sourceName --api-key az --skip-duplicate
}
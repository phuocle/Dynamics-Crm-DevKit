# PowerShell script to restore federated credentials for DynamicsCrmDevKitManagedIdentity
# 1. Deletes all existing federated credentials
# 2. Restores from temp_federated_credentials.json

$AppId = "c60f6fe5-92a2-485c-9149-f84e8f73c105"
$BackupFile = "temp_federated_credentials.json"

# Delete all existing federated credentials
Write-Host "Deleting all existing federated credentials..."
$existing = az ad app federated-credential list --id $AppId | ConvertFrom-Json
foreach ($cred in $existing) {
    Write-Host "Deleting federated credential: $($cred.name) ($($cred.id))"
    az ad app federated-credential delete --id $AppId --federated-credential-id $cred.id
}

# Restore from backup
Write-Host "Restoring federated credentials from $BackupFile..."
$backup = Get-Content $BackupFile | ConvertFrom-Json
$tempDir = Join-Path $PSScriptRoot "_temp_federated_restore"
if (!(Test-Path $tempDir)) { New-Item -ItemType Directory -Path $tempDir | Out-Null }

foreach ($cred in $backup) {
    Write-Host "Restoring federated credential: $($cred.name)"
    $tempFile = Join-Path $tempDir ("$($cred.name).json")
    $json = @{
        name = $cred.name
        issuer = $cred.issuer
        subject = $cred.subject
        description = $cred.description
        audiences = $cred.audiences
    } | ConvertTo-Json -Compress
    Set-Content -Path $tempFile -Value $json -Encoding UTF8
    az ad app federated-credential create --id $AppId --parameters @$tempFile
}

Remove-Item -Recurse -Force $tempDir
Write-Host "Federated credentials restore complete."
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ConfigPath = Join-Path $ScriptDir "config2.json"

if (-not (Test-Path $ConfigPath)) {
    Write-Host "========================================================================================================" -ForegroundColor Red
    Write-Host "[X] config2.json not found" -ForegroundColor Red
    Write-Host "========================================================================================================`n" -ForegroundColor Red
    exit 1
}
else
{
    # If exists, check if it's valid JSON
    $ConfigContent = Get-Content $ConfigPath -Raw
    try {
        $Config = $ConfigContent | ConvertFrom-Json
    } catch {
        Write-Host "========================================================================================================" -ForegroundColor Red
        Write-Host "[X] config2.json is not valid JSON" -ForegroundColor Red
        Write-Host "========================================================================================================`n" -ForegroundColor Red
        exit 1
    }

    $errors = @()
    # Top-level fields
    $requiredFields = @(
        'ResourceGroup', 'Location', 'KeyVaultName', 'SecretName', 'SecretValue'
    )
    foreach ($field in $requiredFields) {
        if (-not $Config.$field -or $Config.$field -eq '' -or $null -eq $Config.$field) {
            $errors += "[X] $field is empty"
        }
    }

    # ManagedIdentities array, check all items
    if ($Config.ManagedIdentities -and $Config.ManagedIdentities.Count -gt 0) {
        $miFields = @(
            'ManagedIdentityName', 'CertificatePassword', 'CertificateSubject', 'CertificateFileName', 'ValidityYears', 'EnvironmentId', 'OrganizationId', 'AppName'
        )
        for ($i = 0; $i -lt $Config.ManagedIdentities.Count; $i++) {
            $mi = $Config.ManagedIdentities[$i]
            foreach ($field in $miFields) {
                if (-not $mi.$field -or $mi.$field -eq '' -or $null -eq $mi.$field) {
                    $errors += "[X] ManagedIdentities[$i].$field is empty"
                }
            }
        }
    } else {
        $errors += "[X] ManagedIdentities array is empty"
    }

    if ($errors.Count -gt 0) {
        Write-Host "========================================================================================================" -ForegroundColor Red
        Write-Host "[X] Missing Required Configuration" -ForegroundColor Red
        Write-Host "========================================================================================================`n" -ForegroundColor Red
        foreach ($err in $errors) {
            Write-Host $err -ForegroundColor Red
        }
        Write-Host "`n========================================================================================================`n" -ForegroundColor Red
        exit 1
    }

}


Write-Host "Hello, World!"
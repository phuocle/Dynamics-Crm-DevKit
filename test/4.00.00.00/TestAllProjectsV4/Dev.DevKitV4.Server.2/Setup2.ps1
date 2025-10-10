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
    $ConfigContent = Get-Content $ConfigPath -Raw
    try {
        $config = $ConfigContent | ConvertFrom-Json
    } catch {
        Write-Host "========================================================================================================" -ForegroundColor Red
        Write-Host "[X] config2.json is not valid JSON" -ForegroundColor Red
        Write-Host "========================================================================================================`n" -ForegroundColor Red
        exit 1
    }
    $errors = @()
    $requiredFields = @(
        'ResourceGroup', 'Location', 'KeyVaultName', 'SecretName', 'SecretValue'
    )
    foreach ($field in $requiredFields) {
        if (-not $config.$field -or $config.$field -eq '' -or $null -eq $config.$field) {
            $errors += "[X] $field is empty"
        }
    }
    if ($config.ManagedIdentities -and $config.ManagedIdentities.Count -gt 0) {
        $miFields = @(
            'ManagedIdentityName', 'CertificatePassword', 'CertificateSubject', 'CertificateFileName', 'ValidityYears', 'EnvironmentId', 'OrganizationId', 'AppName'
        )
        for ($i = 0; $i -lt $config.ManagedIdentities.Count; $i++) {
            $mi = $config.ManagedIdentities[$i]
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

Write-Host "`n========================================================================================================" -ForegroundColor Cyan
Write-Host "                          DATAVERSE MANAGED IDENTITY SETUP" -ForegroundColor Green
Write-Host "========================================================================================================" -ForegroundColor Cyan

# Load values from config
$resourceGroup = $config.ResourceGroup
$location = $config.Location
$keyVaultName = $config.KeyVaultName
$secretName = $config.SecretName
$secretValue = $config.SecretValue

# ========================================
# Step 1: Create Resource Group
# ========================================
Write-Host "[1/6] CHECKING RESOURCE GROUP" -ForegroundColor Yellow
$existingRg = az group show --name $resourceGroup --output json 2>$null | ConvertFrom-Json
if ($existingRg) {
    Write-Host "  @ Resource group already exists." -ForegroundColor Yellow
    $rg = $existingRg
    Write-Host "  + SUCCESS: found resource group." -ForegroundColor Green
    Write-Host "  - Resource Group: " -NoNewline -ForegroundColor White
    Write-Host "$($rg.name)" -ForegroundColor Cyan
    Write-Host "  - Location: " -NoNewline -ForegroundColor White
    Write-Host "$($rg.location)" -ForegroundColor Cyan
} else {
    Write-Host "  @ Creating new resource group." -ForegroundColor Yellow
    $rg = az group create `
        --name $resourceGroup `
        --location $location `
        --output json | ConvertFrom-Json

    if ($rg) {
        Write-Host "  + SUCCESS: Resource group created." -ForegroundColor Green
        Write-Host "  - Resource Group: " -NoNewline -ForegroundColor White
        Write-Host "$($rg.name)" -ForegroundColor Cyan
        Write-Host "  - Location: " -NoNewline -ForegroundColor White
        Write-Host "$($rg.location)" -ForegroundColor Cyan
    } else {
        Write-Host "  x ERROR: Failed to create resource group" -ForegroundColor Red
        exit 1
    }
}
# ========================================
# Step 2: Create Key Vault
# ========================================
Write-Host "`n[2/6] CHECKING AZURE KEY VAULT" -ForegroundColor Yellow
$existingKv = az keyvault show --name $keyVaultName --resource-group $resourceGroup --output json 2>$null | ConvertFrom-Json
if ($existingKv) {
    Write-Host "  @ Key Vault already exists." -ForegroundColor Yellow
    $kv = $existingKv
    Write-Host "  + SUCCESS: found key vault." -ForegroundColor Green
    Write-Host "  - Location: " -NoNewline -ForegroundColor White
    Write-Host "$($kv.location)" -ForegroundColor Cyan
    Write-Host "  - Vault Name: " -NoNewline -ForegroundColor White
    Write-Host "$($kv.name)" -ForegroundColor Cyan
    Write-Host "  - Vault URL: " -NoNewline -ForegroundColor White
    Write-Host "$($kv.properties.vaultUri)" -ForegroundColor Cyan
} else {
    # Check if Key Vault exists in soft-deleted state
    $softDeletedKv = az keyvault list-deleted --query "[?name=='$keyVaultName']" --output json 2>$null | ConvertFrom-Json
    if ($null -ne $softDeletedKv -and $softDeletedKv.Count -gt 0) {
        Write-Host "  @ Found soft-deleted key vault - Recovering." -ForegroundColor Yellow
        # Recover the soft-deleted Key Vault
        $null = az keyvault recover --name $keyVaultName --output none 2>&1
        if ($LASTEXITCODE -eq 0) {
            # Get the recovered Key Vault details
            $kv = az keyvault show --name $keyVaultName --output json 2>$null | ConvertFrom-Json
            if ($kv) {
                Write-Host "  + SUCCESS: Key Vault recovered." -ForegroundColor Green
                Write-Host "  - Location: " -NoNewline -ForegroundColor White
                Write-Host "$($softDeletedKv[0].location)" -ForegroundColor Cyan
                Write-Host "  - Vault URL: " -NoNewline -ForegroundColor White
                Write-Host "$($kv.properties.vaultUri)" -ForegroundColor Cyan
            }
        } else {
            Write-Host "  x ERROR: Failed to recover Key Vault" -ForegroundColor Red
            exit 1
        }
    } else {
        # Create new Key Vault
        Write-Host "  @ Creating new key vault." -ForegroundColor Yellow
        $kv = az keyvault create `
            --name $keyVaultName `
            --resource-group $resourceGroup `
            --location $location `
            --enable-rbac-authorization false `
            --output json | ConvertFrom-Json

        if ($kv) {
            Write-Host "  + SUCCESS: Key Vault created." -ForegroundColor Green
            Write-Host "  - Location: " -NoNewline -ForegroundColor White
            Write-Host "$($kv.location)" -ForegroundColor Cyan
            Write-Host "  - Vault Name: " -NoNewline -ForegroundColor White
            Write-Host "$($kv.name)" -ForegroundColor Cyan
            Write-Host "  - Vault URL: " -NoNewline -ForegroundColor White
            Write-Host "$($kv.properties.vaultUri)" -ForegroundColor Cyan
        } else {
            Write-Host "  x ERROR: Failed to create Key Vault (name may not be globally unique)" -ForegroundColor Red
            exit 1
        }
    }
}

# ========================================
# Step 3: Add/Update Secret in Key Vault
# ========================================
Write-Host "`n[3/6] ADDING/UPDATING TEST SECRET IN KEY VAULT" -ForegroundColor Yellow
# Check if secret exists
$existingSecret = az keyvault secret show --vault-name $keyVaultName --name $secretName --output json 2>$null | ConvertFrom-Json

if ($existingSecret) {
    Write-Host "  @ Secret already exists." -ForegroundColor Yellow
}

$secret = az keyvault secret set `
    --vault-name $keyVaultName `
    --name $secretName `
    --value $secretValue `
    --output json | ConvertFrom-Json

if ($secret) {
    Write-Host "  + SUCCESS: found secret configured." -ForegroundColor Green
    Write-Host "  - Name: " -NoNewline -ForegroundColor White
    Write-Host "$($secret.name)" -ForegroundColor Cyan
    Write-Host "  - Value: " -NoNewline -ForegroundColor White
    Write-Host "$($secret.value)" -ForegroundColor Cyan
} else {
    Write-Host "  x ERROR: Failed to configure secret" -ForegroundColor Red
    exit 1
}

$config.TenantId = (az account show --output json | ConvertFrom-Json).tenantId
$config.KeyVaultURL = $kv.properties.vaultUri

# ========================================
# Step 4, 5, 6: Loop through ManagedIdentities for App Registration, Service Principal, Key Vault Policy
# ========================================
for ($i = 0; $i -lt $config.ManagedIdentities.Count; $i++) {
    $mi = $config.ManagedIdentities[$i]
    $appName = $mi.AppName
    Write-Host "`n[4/6] CHECKING AZURE AD APP REGISTRATION for ManagedIdentity[$i]: $appName" -ForegroundColor Yellow
    $existingApp = az ad app list --display-name $appName --output json | ConvertFrom-Json
    if ($null -ne $existingApp -and $existingApp.Count -gt 0) {
        $appId = $existingApp[0].appId
        Write-Host "  - App Registration exists: $appName ($appId)" -ForegroundColor Green
    } else {
        $createdApp = az ad app create --display-name $appName --output json | ConvertFrom-Json
        $appId = $createdApp.appId
        Write-Host "  - App Registration created: $appName ($appId)" -ForegroundColor Green
    }
    $config.ManagedIdentities[$i].AppId = $appId

    Write-Host "[5/6] CHECKING SERVICE PRINCIPAL FOR THE APP for ManagedIdentity[$i]: $appName" -ForegroundColor Yellow
    $existingSp = az ad sp show --id $appId --output json 2>$null | ConvertFrom-Json
    if ($existingSp) {
        Write-Host "  - Service Principal exists: $($existingSp.id)" -ForegroundColor Green
        $spId = $existingSp.id
    } else {
        $createdSp = az ad sp create --id $appId --output json | ConvertFrom-Json
        $spId = $createdSp.id
        Write-Host "  - Service Principal created: $spId" -ForegroundColor Green
    }

    Write-Host "[6/6] CONFIGURING APP ACCESS TO KEY VAULT for ManagedIdentity[$i]: $appName" -ForegroundColor Yellow
    $existingPolicy = az keyvault show --name $keyVaultName --resource-group $resourceGroup --query "properties.accessPolicies[?objectId=='$spId']" --output json 2>$null | ConvertFrom-Json
    if ($null -ne $existingPolicy -and $existingPolicy.Count -gt 0) {
        Write-Host "  - Access policy already exists for SP: $spId" -ForegroundColor Green
    } else {
        az keyvault set-policy --name $keyVaultName --resource-group $resourceGroup --object-id $spId --secret-permissions get list set --certificate-permissions get list --output none
        Write-Host "  - Access policy set for SP: $spId" -ForegroundColor Green
    }
}

Write-Host "[1/3] Saving final configuration" -ForegroundColor Yellow

try {
    # Save config.json with all values from all phases
    $config | ConvertTo-Json -Depth 10 | Out-File -FilePath $ConfigPath -Encoding UTF8
    Write-Host "  + SUCCESS: config.json saved to: " -NoNewline -ForegroundColor Green
    Write-Host "$ConfigPath" -ForegroundColor Cyan
}
catch {
    Write-Host "  x ERROR: Failed to save config.json: $($_.Exception.Message)" -ForegroundColor Red
}


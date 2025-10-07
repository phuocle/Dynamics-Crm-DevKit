# ========================================
# BEGIN CONFIGURATION
# ========================================
$appName = "DataversePluginManagedIdentity2"
$resourceGroup = "dataverse-plugin-rg"
$location = "eastus"
$keyVaultName = "dataverse-plugin-kv-2"
$secretName = "ApiEndpoint2"
$secretValue = "https://api.example.com2"
# ========================================
# END CONFIGURATION
# ========================================
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Azure Resources Setup for Managed Identity Plugin" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# ========================================
# Step 1: Create Resource Group
# ========================================
Write-Host "[1/7] Checking resource group..." -ForegroundColor Yellow

# Check if resource group exists
$existingRg = az group show --name $resourceGroup --output json 2>$null | ConvertFrom-Json

if ($existingRg) {
    Write-Host "Resource group already exists. Using existing one." -ForegroundColor Yellow
    $rg = $existingRg
    Write-Host "[SUCCESS] Resource group found: $($rg.name)" -ForegroundColor Green
    Write-Host "  Location: $($rg.location)" -ForegroundColor Cyan
} else {
    Write-Host "Creating new resource group..." -ForegroundColor Gray
    $rg = az group create `
        --name $resourceGroup `
        --location $location `
        --output json | ConvertFrom-Json

    if ($rg) {
        Write-Host "[SUCCESS] Resource group created: $($rg.name)" -ForegroundColor Green
    } else {
        Write-Host "[ERROR] Failed to create resource group" -ForegroundColor Red
        exit 1
    }
}

# ========================================
# Step 2: Create Azure AD App Registration
# ========================================
Write-Host "`n[2/7] Checking Azure AD app registration..." -ForegroundColor Yellow

# Check if app registration exists
$existingApp = az ad app list --display-name $appName --output json | ConvertFrom-Json

if ($existingApp -and $existingApp.Count -gt 0) {
    Write-Host "App registration already exists. Using existing one." -ForegroundColor Yellow
    $app = $existingApp[0]
    $appId = $app.appId
    Write-Host "[SUCCESS] App registration found" -ForegroundColor Green
    Write-Host "  Application (Client) ID: $appId" -ForegroundColor Cyan
} else {
    Write-Host "Creating new app registration..." -ForegroundColor Gray
    $app = az ad app create `
        --display-name $appName `
        --output json | ConvertFrom-Json

    if ($app) {
        $appId = $app.appId
        Write-Host "[SUCCESS] App registration created" -ForegroundColor Green
        Write-Host "  Application (Client) ID: $appId" -ForegroundColor Cyan
    } else {
        Write-Host "[ERROR] Failed to create app registration" -ForegroundColor Red
        exit 1
    }
}

# Get tenant ID
$tenantId = (az account show --output json | ConvertFrom-Json).tenantId
Write-Host "  Directory (Tenant) ID: $tenantId" -ForegroundColor Cyan

# ========================================
# Step 3: Create Service Principal
# ========================================
Write-Host "`n[3/7] Checking service principal for the app..." -ForegroundColor Yellow

# Check if service principal already exists
$existingSp = az ad sp show --id $appId --output json 2>$null | ConvertFrom-Json

if ($existingSp) {
    Write-Host "Service principal already exists. Using existing one." -ForegroundColor Yellow
    $sp = $existingSp
    Write-Host "[SUCCESS] Service principal found" -ForegroundColor Green
    Write-Host "  Service Principal ID: $($sp.id)" -ForegroundColor Cyan
} else {
    Write-Host "Creating new service principal..." -ForegroundColor Gray
    $sp = az ad sp create --id $appId --output json | ConvertFrom-Json

    if ($sp) {
        Write-Host "[SUCCESS] Service principal created" -ForegroundColor Green
        Write-Host "  Service Principal ID: $($sp.id)" -ForegroundColor Cyan
    } else {
        Write-Host "[ERROR] Failed to create service principal" -ForegroundColor Red
        exit 1
    }
}

# ========================================
# Step 4: Create Key Vault
# ========================================
Write-Host "`n[4/7] Checking Azure Key Vault..." -ForegroundColor Yellow

# Check if Key Vault already exists
$existingKv = az keyvault show --name $keyVaultName --resource-group $resourceGroup --output json 2>$null | ConvertFrom-Json

if ($existingKv) {
    Write-Host "Key Vault already exists. Using existing one." -ForegroundColor Yellow
    $kv = $existingKv
    Write-Host "[SUCCESS] Key Vault found: $($kv.name)" -ForegroundColor Green
    Write-Host "  Vault URL: $($kv.properties.vaultUri)" -ForegroundColor Cyan
} else {
    Write-Host "Creating new Key Vault..." -ForegroundColor Gray
    $kv = az keyvault create `
        --name $keyVaultName `
        --resource-group $resourceGroup `
        --location $location `
        --enable-rbac-authorization false `
        --output json | ConvertFrom-Json

    if ($kv) {
        Write-Host "[SUCCESS] Key Vault created: $($kv.name)" -ForegroundColor Green
        Write-Host "  Vault URL: $($kv.properties.vaultUri)" -ForegroundColor Cyan
    } else {
        Write-Host "[ERROR] Failed to create Key Vault (name may not be globally unique)" -ForegroundColor Red
        Write-Host "  Try a different Key Vault name" -ForegroundColor Yellow
        exit 1
    }
}

# ========================================
# Step 5: Add/Update Secret in Key Vault
# ========================================
Write-Host "`n[5/7] Adding/updating test secret in Key Vault..." -ForegroundColor Yellow

# Check if secret exists
$existingSecret = az keyvault secret show --vault-name $keyVaultName --name $secretName --output json 2>$null | ConvertFrom-Json

if ($existingSecret) {
    Write-Host "Secret already exists. Updating value..." -ForegroundColor Yellow
}

$secret = az keyvault secret set `
    --vault-name $keyVaultName `
    --name $secretName `
    --value $secretValue `
    --output json | ConvertFrom-Json

if ($secret) {
    Write-Host "[SUCCESS] Secret configured: $($secret.name)" -ForegroundColor Green
    Write-Host "  Value: $($secret.value)" -ForegroundColor Cyan
} else {
    Write-Host "[ERROR] Failed to configure secret" -ForegroundColor Red
    exit 1
}

# ========================================
# Step 6: Grant App Access to Key Vault
# ========================================
Write-Host "`n[6/7] Configuring app access to Key Vault..." -ForegroundColor Yellow

# Check current access policies for the service principal
$existingPolicy = az keyvault show --name $keyVaultName --resource-group $resourceGroup --query "properties.accessPolicies[?objectId=='$($sp.id)']" --output json 2>$null | ConvertFrom-Json

if ($existingPolicy -and $existingPolicy.Count -gt 0) {
    Write-Host "Access policy already exists for this service principal." -ForegroundColor Yellow
    Write-Host "[SUCCESS] Using existing access policy" -ForegroundColor Green
    Write-Host "  Service Principal ID: $($sp.id)" -ForegroundColor Cyan

    # Check if permissions are correct
    $hasGetPermission = $existingPolicy[0].permissions.secrets -contains "Get" -or $existingPolicy[0].permissions.secrets -contains "get"
    $hasListPermission = $existingPolicy[0].permissions.secrets -contains "List" -or $existingPolicy[0].permissions.secrets -contains "list"

    if (-not $hasGetPermission -or -not $hasListPermission) {
        Write-Host "  Updating permissions to include Get and List..." -ForegroundColor Yellow
        az keyvault set-policy `
            --name $keyVaultName `
            --spn $appId `
            --secret-permissions get list `
            --output none

        if ($LASTEXITCODE -eq 0) {
            Write-Host "  [SUCCESS] Permissions updated" -ForegroundColor Green
        }
    } else {
        Write-Host "  Permissions: Get, List (Secrets) - Already configured" -ForegroundColor Cyan
    }
} else {
    Write-Host "Creating new access policy..." -ForegroundColor Gray
    az keyvault set-policy `
        --name $keyVaultName `
        --spn $appId `
        --secret-permissions get list `
        --output none

    if ($LASTEXITCODE -eq 0) {
        Write-Host "[SUCCESS] Access policy created" -ForegroundColor Green
        Write-Host "  Permissions: Get, List (Secrets)" -ForegroundColor Cyan
    } else {
        Write-Host "[ERROR] Failed to set access policy" -ForegroundColor Red
        exit 1
    }
}

# ========================================
# Step 7: Summary
# ========================================
Write-Host "`n[7/7] Summary" -ForegroundColor Yellow
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Azure Resources Setup Complete!" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "IMPORTANT: Save these values for plugin configuration:`n" -ForegroundColor Yellow

Write-Host "Application (Client) ID:" -NoNewline
Write-Host "  $appId" -ForegroundColor Cyan

Write-Host "Directory (Tenant) ID:  " -NoNewline
Write-Host "  $tenantId" -ForegroundColor Cyan

Write-Host "Key Vault Name:         " -NoNewline
Write-Host "  $keyVaultName" -ForegroundColor Cyan

Write-Host "Key Vault URL:          " -NoNewline
Write-Host "  $($kv.properties.vaultUri)" -ForegroundColor Cyan

Write-Host "`nNext Steps:" -ForegroundColor Yellow
Write-Host "Run 02.Setup-Certificate.ps1 to generate code signing certificate" -ForegroundColor White

# Save values to a file for reference
$outputFile = "azure-config.txt"
$configContent = @"
Azure Configuration for Managed Identity Plugin
================================================
Created: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

Application (Client) ID: $appId
Directory (Tenant) ID:   $tenantId
Key Vault Name:          $keyVaultName
Key Vault URL:           $($kv.properties.vaultUri)
Resource Group:          $resourceGroup
Location:                $location

WARNING: Do NOT commit this file to source control!
"@

$configContent | Out-File -FilePath $outputFile -Encoding UTF8

Write-Host "Configuration saved to: $outputFile" -ForegroundColor Green
Write-Host "WARNING: Do NOT commit this file to source control!" -ForegroundColor Red
# ========================================
# CONFIGURATION FROM config.json
# ========================================
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ConfigPath = Join-Path $ScriptDir "config.json"

# Function to create initial config.json if it doesn't exist
function Initialize-ConfigFile {
    $defaultConfig = [ordered]@{
        AppName = ""
        ResourceGroup = ""
        Location = ""
        KeyVaultName = ""
        SecretName = ""
        SecretValue = ""
        CertificatePassword = ""
        CertificateSubject = ""
        CertificateFileName = ""
        ValidityYears = $null
        EnvironmentId = @()
        OrganizationId = @()
        TenantId = ""
        AppId = ""
        KeyVaultURL = ""
        CertificatePath = ""
        CertificateThumbprint = ""
        CertificateSHA256Hash = ""
    }

    $defaultConfig | ConvertTo-Json -Depth 10 | Out-File -FilePath $ConfigPath -Encoding UTF8

    Write-Host "========================================" -ForegroundColor Red
    Write-Host "[X] ERROR: config.json NOT FOUND" -ForegroundColor Red
    Write-Host "========================================`n" -ForegroundColor Red
    Write-Host "A new config.json file has been created at:" -ForegroundColor Yellow
    Write-Host "  $ConfigPath`n" -ForegroundColor Cyan
    Write-Host "Please update the following values in config.json:" -ForegroundColor Yellow
    Write-Host "  - AppName" -ForegroundColor White
    Write-Host "  - ResourceGroup" -ForegroundColor White
    Write-Host "  - Location" -ForegroundColor White
    Write-Host "  - KeyVaultName" -ForegroundColor White
    Write-Host "  - SecretName" -ForegroundColor White
    Write-Host "  - SecretValue" -ForegroundColor White
    Write-Host "  - CertificatePassword" -ForegroundColor White
    Write-Host "  - CertificateSubject" -ForegroundColor White
    Write-Host "  - CertificateFileName" -ForegroundColor White
    Write-Host "  - ValidityYears" -ForegroundColor White
    Write-Host "  - EnvironmentId (array)" -ForegroundColor White
    Write-Host "  - OrganizationId (array)" -ForegroundColor White
    Write-Host "`nThen run this script again.`n" -ForegroundColor Yellow
    exit 1
}

# Check if config.json exists
if (-not (Test-Path $ConfigPath)) {
    Initialize-ConfigFile
}

# Load configuration
try {
    $config = Get-Content -Path $ConfigPath -Raw | ConvertFrom-Json
}
catch {
    Write-Host "[X] ERROR: Failed to parse config.json: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Validate required fields for this script
$requiredFields = @(
    @{Path = "AppName"; Value = $config.AppName}
    @{Path = "ResourceGroup"; Value = $config.ResourceGroup}
    @{Path = "Location"; Value = $config.Location}
    @{Path = "KeyVaultName"; Value = $config.KeyVaultName}
    @{Path = "SecretName"; Value = $config.SecretName}
    @{Path = "SecretValue"; Value = $config.SecretValue}
)

$missingFields = @()
foreach ($field in $requiredFields) {
    if ([string]::IsNullOrWhiteSpace($field.Value)) {
        $missingFields += $field.Path
    }
}

if ($missingFields.Count -gt 0) {
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "[X] ERROR: Missing Required Configuration" -ForegroundColor Red
    Write-Host "========================================`n" -ForegroundColor Red
    Write-Host "Please update the following fields in config.json:" -ForegroundColor Yellow
    foreach ($field in $missingFields) {
        Write-Host "  - $field" -ForegroundColor White
    }
    Write-Host "`nConfig file location: $ConfigPath`n" -ForegroundColor Cyan
    exit 1
}

# Load values from config
$appName = $config.AppName
$resourceGroup = $config.ResourceGroup
$location = $config.Location
$keyVaultName = $config.KeyVaultName
$secretName = $config.SecretName
$secretValue = $config.SecretValue

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
    Write-Host "[+] SUCCESS: Resource group found: $($rg.name)" -ForegroundColor Green
    Write-Host "  Location: " -NoNewline -ForegroundColor White
    Write-Host "$($rg.location)" -ForegroundColor Cyan
} else {
    Write-Host "Creating new resource group..." -ForegroundColor Gray
    $rg = az group create `
        --name $resourceGroup `
        --location $location `
        --output json | ConvertFrom-Json

    if ($rg) {
        Write-Host "[+] SUCCESS: Resource group created: $($rg.name)" -ForegroundColor Green
    } else {
        Write-Host "[X] ERROR: Failed to create resource group" -ForegroundColor Red
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
    Write-Host "[+] SUCCESS: App registration found" -ForegroundColor Green
    Write-Host "  Application (Client) ID: " -NoNewline -ForegroundColor White
    Write-Host "$appId" -ForegroundColor Cyan
} else {
    Write-Host "Creating new app registration..." -ForegroundColor Gray
    $app = az ad app create `
        --display-name $appName `
        --output json | ConvertFrom-Json

    if ($app) {
        $appId = $app.appId
        Write-Host "[+] SUCCESS: App registration created" -ForegroundColor Green
        Write-Host "  Application (Client) ID: " -NoNewline -ForegroundColor White
        Write-Host "$appId" -ForegroundColor Cyan
    } else {
        Write-Host "[X] ERROR: Failed to create app registration" -ForegroundColor Red
        exit 1
    }
}

# Get tenant ID
$tenantId = (az account show --output json | ConvertFrom-Json).tenantId
Write-Host "  Directory (Tenant) ID: " -NoNewline -ForegroundColor White
Write-Host "$tenantId" -ForegroundColor Cyan

# ========================================
# Step 3: Create Service Principal
# ========================================
Write-Host "`n[3/7] Checking service principal for the app..." -ForegroundColor Yellow

# Check if service principal already exists
$existingSp = az ad sp show --id $appId --output json 2>$null | ConvertFrom-Json

if ($existingSp) {
    Write-Host "Service principal already exists. Using existing one." -ForegroundColor Yellow
    $sp = $existingSp
    Write-Host "[+] SUCCESS: Service principal found" -ForegroundColor Green
    Write-Host "  Service Principal ID: " -NoNewline -ForegroundColor White
    Write-Host "$($sp.id)" -ForegroundColor Cyan
} else {
    Write-Host "Creating new service principal..." -ForegroundColor Gray
    $sp = az ad sp create --id $appId --output json | ConvertFrom-Json

    if ($sp) {
        Write-Host "[+] SUCCESS: Service principal created" -ForegroundColor Green
        Write-Host "  Service Principal ID: " -NoNewline -ForegroundColor White
        Write-Host "$($sp.id)" -ForegroundColor Cyan
    } else {
        Write-Host "[X] ERROR: Failed to create service principal" -ForegroundColor Red
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
    Write-Host "[+] SUCCESS: Key Vault found: $($kv.name)" -ForegroundColor Green
    Write-Host "  Vault URL: " -NoNewline -ForegroundColor White
    Write-Host "$($kv.properties.vaultUri)" -ForegroundColor Cyan
} else {
    Write-Host "Creating new Key Vault..." -ForegroundColor Gray
    $kv = az keyvault create `
        --name $keyVaultName `
        --resource-group $resourceGroup `
        --location $location `
        --enable-rbac-authorization false `
        --output json | ConvertFrom-Json

    if ($kv) {
        Write-Host "[+] SUCCESS: Key Vault created: $($kv.name)" -ForegroundColor Green
        Write-Host "  Vault URL: " -NoNewline -ForegroundColor White
        Write-Host "$($kv.properties.vaultUri)" -ForegroundColor Cyan
    } else {
        Write-Host "[X] ERROR: Failed to create Key Vault (name may not be globally unique)" -ForegroundColor Red
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
    Write-Host "[+] SUCCESS: Secret configured: $($secret.name)" -ForegroundColor Green
    Write-Host "  Value: " -NoNewline -ForegroundColor White
    Write-Host "$($secret.value)" -ForegroundColor Cyan
} else {
    Write-Host "[X] ERROR: Failed to configure secret" -ForegroundColor Red
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
    Write-Host "[+] SUCCESS: Using existing access policy" -ForegroundColor Green
    Write-Host "  Service Principal ID: " -NoNewline -ForegroundColor White
    Write-Host "$($sp.id)" -ForegroundColor Cyan

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
            Write-Host "  [+] SUCCESS: Permissions updated" -ForegroundColor Green
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
        Write-Host "[+] SUCCESS: Access policy created" -ForegroundColor Green
        Write-Host "  Permissions: " -NoNewline -ForegroundColor White
        Write-Host "Get, List (Secrets)" -ForegroundColor Cyan
    } else {
        Write-Host "[X] ERROR: Failed to set access policy" -ForegroundColor Red
        exit 1
    }
}

# ========================================
# Step 7: Summary
# ========================================
Write-Host "`n[7/7] Summary" -ForegroundColor Yellow
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "[+] Azure Resources Setup Complete!" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "IMPORTANT: Save these values for plugin configuration:`n" -ForegroundColor Yellow

Write-Host "Application (Client) ID: " -NoNewline -ForegroundColor White
Write-Host "$appId" -ForegroundColor Cyan

Write-Host "Directory (Tenant) ID:   " -NoNewline -ForegroundColor White
Write-Host "$tenantId" -ForegroundColor Cyan

Write-Host "Key Vault Name:          " -NoNewline -ForegroundColor White
Write-Host "$keyVaultName" -ForegroundColor Cyan

Write-Host "Key Vault URL:           " -NoNewline -ForegroundColor White
Write-Host "$($kv.properties.vaultUri)" -ForegroundColor Cyan

Write-Host "`nNext Steps:" -ForegroundColor Yellow
Write-Host "Run 02.Setup-Certificate.ps1 to generate code signing certificate" -ForegroundColor White

# Update config.json with output values
try {
    $config.TenantId = $tenantId
    $config.AppId = $appId
    $config.KeyVaultURL = $kv.properties.vaultUri

    $config | ConvertTo-Json -Depth 10 | Out-File -FilePath $ConfigPath -Encoding UTF8
    Write-Host "`n[+] Configuration saved to: " -NoNewline -ForegroundColor Green
    Write-Host "$ConfigPath" -ForegroundColor Cyan
}
catch {
    Write-Host "`n[!] WARNING: Failed to update config.json: $($_.Exception.Message)" -ForegroundColor Yellow
}

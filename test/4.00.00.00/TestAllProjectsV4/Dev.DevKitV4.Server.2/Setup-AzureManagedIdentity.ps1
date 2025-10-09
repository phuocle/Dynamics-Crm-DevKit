# ========================================================================================================
# AZURE MANAGED IDENTITY SETUP - COMPLETE WORKFLOW
# ========================================================================================================
# This script combines the following setup processes into a single automated workflow:
#   1. Azure Resources Setup (App Registration, Key Vault, Service Principal)
#   2. Code Signing Certificate Generation
#   3. Power Platform Federated Credentials Configuration
#
# Version: 1.0
# Date: October 8, 2025
# ========================================================================================================

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ConfigPath = Join-Path $ScriptDir "config.json"

# ========================================================================================================
# HELPER FUNCTION: Initialize Config File
# ========================================================================================================
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

    Write-Host "========================================================================================================" -ForegroundColor Red
    Write-Host "[X] ERROR: config.json NOT FOUND" -ForegroundColor Red
    Write-Host "========================================================================================================`n" -ForegroundColor Red
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

# ========================================================================================================
# HELPER FUNCTION: Convert GUID to Base64 URL
# ========================================================================================================
function Convert-GuidToBase64Url {
    param([string]$guid)
    $guidObj = [System.Guid]::Parse($guid)
    $bytes = $guidObj.ToByteArray()
    $base64 = [System.Convert]::ToBase64String($bytes)
    return $base64.Replace('+', '-').Replace('/', '_').TrimEnd('=')
}

# ========================================================================================================
# MAIN SCRIPT START
# ========================================================================================================

Write-Host "`n========================================================================================================" -ForegroundColor Cyan
Write-Host "                          DATAVERSE MANAGED IDENTITY SETUP                                     " -ForegroundColor Green
Write-Host "========================================================================================================" -ForegroundColor Cyan
Write-Host "This script will perform the following operations:" -ForegroundColor White
Write-Host "    1. Create Azure Resources (App Registration, Key Vault, Service Principal)" -ForegroundColor Gray
Write-Host "    2. Generate Code Signing Certificate" -ForegroundColor Gray
Write-Host "    3. Configure Power Platform Federated Credentials" -ForegroundColor Gray
Write-Host "========================================================================================================`n" -ForegroundColor Cyan

# ========================================================================================================
# CONFIGURATION LOADING AND VALIDATION
# ========================================================================================================

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

# Validate all required fields for complete workflow
$requiredFields = @(
    @{Path = "AppName"; Value = $config.AppName}
    @{Path = "ResourceGroup"; Value = $config.ResourceGroup}
    @{Path = "Location"; Value = $config.Location}
    @{Path = "KeyVaultName"; Value = $config.KeyVaultName}
    @{Path = "SecretName"; Value = $config.SecretName}
    @{Path = "SecretValue"; Value = $config.SecretValue}
    @{Path = "CertificatePassword"; Value = $config.CertificatePassword}
    @{Path = "CertificateSubject"; Value = $config.CertificateSubject}
    @{Path = "CertificateFileName"; Value = $config.CertificateFileName}
    @{Path = "ValidityYears"; Value = $config.ValidityYears}
)

$missingFields = @()
foreach ($field in $requiredFields) {
    if ($field.Path -eq "ValidityYears") {
        if ($null -eq $field.Value -or $field.Value -eq 0) {
            $missingFields += $field.Path
        }
    }
    elseif ([string]::IsNullOrWhiteSpace($field.Value)) {
        $missingFields += $field.Path
    }
}

# Check arrays
if ($null -eq $config.EnvironmentId -or $config.EnvironmentId.Count -eq 0) {
    $missingFields += "EnvironmentId (must be an array with at least one value)"
}

if ($null -eq $config.OrganizationId -or $config.OrganizationId.Count -eq 0) {
    $missingFields += "OrganizationId (must be an array with at least one value)"
}

if ($missingFields.Count -gt 0) {
    Write-Host "========================================================================================================" -ForegroundColor Red
    Write-Host "[X] ERROR: Missing Required Configuration" -ForegroundColor Red
    Write-Host "========================================================================================================`n" -ForegroundColor Red
    Write-Host "Please update the following fields in config.json:" -ForegroundColor Yellow
    foreach ($field in $missingFields) {
        Write-Host "  - $field" -ForegroundColor White
    }
    Write-Host "`nConfig file location: $ConfigPath`n" -ForegroundColor Cyan
    Write-Host "[i] Example for array values in config.json:" -ForegroundColor White
    Write-Host '  "EnvironmentId": ["guid1", "guid2"]' -ForegroundColor Cyan
    Write-Host '  "OrganizationId": ["guid1", "guid2"]' -ForegroundColor Cyan
    Write-Host ""
    exit 1
}

# ========================================================================================================
# PHASE 1: AZURE RESOURCES SETUP
# ========================================================================================================

Write-Host "========================================================================================================" -ForegroundColor Cyan
Write-Host "                                    PHASE 1: AZURE RESOURCES SETUP                                    " -ForegroundColor Green
Write-Host "========================================================================================================`n" -ForegroundColor Cyan

# Load values from config
$appName = $config.AppName
$resourceGroup = $config.ResourceGroup
$location = $config.Location
$keyVaultName = $config.KeyVaultName
$secretName = $config.SecretName
$secretValue = $config.SecretValue

# ========================================
# Step 1: Create Resource Group
# ========================================
Write-Host "[1/6] Checking resource group..." -ForegroundColor Yellow

# Check if resource group exists
$existingRg = az group show --name $resourceGroup --output json 2>$null | ConvertFrom-Json

if ($existingRg) {
    Write-Host "Resource group already exists. Using existing one." -ForegroundColor Yellow
    $rg = $existingRg
    Write-Host "[+] SUCCESS: Resource group found: $($rg.name)" -ForegroundColor Green
    Write-Host "  - Location: " -NoNewline -ForegroundColor White
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
Write-Host "`n[2/6] Checking Azure AD app registration..." -ForegroundColor Yellow

# Check if app registration exists
$existingApp = az ad app list --display-name $appName --output json | ConvertFrom-Json

if ($existingApp -and $existingApp.Count -gt 0) {
    Write-Host "App registration already exists. Using existing one." -ForegroundColor Yellow
    $app = $existingApp[0]
    $appId = $app.appId
    Write-Host "[+] SUCCESS: App registration found" -ForegroundColor Green
    Write-Host "  - Application (Client) ID: " -NoNewline -ForegroundColor White
    Write-Host "$appId" -ForegroundColor Cyan
} else {
    Write-Host "Creating new app registration..." -ForegroundColor Gray
    $app = az ad app create `
        --display-name $appName `
        --output json | ConvertFrom-Json

    if ($app) {
        $appId = $app.appId
        Write-Host "[+] SUCCESS: App registration created" -ForegroundColor Green
        Write-Host "  - Application (Client) ID: " -NoNewline -ForegroundColor White
        Write-Host "$appId" -ForegroundColor Cyan
    } else {
        Write-Host "[X] ERROR: Failed to create app registration" -ForegroundColor Red
        exit 1
    }
}

# Get tenant ID
$tenantId = (az account show --output json | ConvertFrom-Json).tenantId
Write-Host "  - Directory (Tenant) ID: " -NoNewline -ForegroundColor White
Write-Host "$tenantId" -ForegroundColor Cyan

# ========================================
# Step 3: Create Service Principal
Write-Host "[INFO] This script has been renamed. Please use SetupDataverseManagedIndentity.ps1 instead." -ForegroundColor Yellow
    Write-Host "[~] Creating $credName1..." -ForegroundColor Yellow
    Write-Host "  - Issuer: " -NoNewline -ForegroundColor White
    Write-Host "$issuer1" -ForegroundColor Cyan
    Write-Host "  - Subject: " -NoNewline -ForegroundColor White
    Write-Host "$subject1" -ForegroundColor Cyan

    $cred1 = @{
        name = $credName1
        issuer = $issuer1
        subject = $subject1
        description = "Azure AD Issuer - OIDC Validation for Org $currentOrgId"
        audiences = @("api://AzureADTokenExchange")
    } | ConvertTo-Json | Out-File "$credName1.json" -Encoding UTF8

    az ad app federated-credential create --id $AppId --parameters "$credName1.json" | Out-Null
    Remove-Item "$credName1.json" -Force -ErrorAction SilentlyContinue
    Write-Host "  [+] Created $credName1" -ForegroundColor Green

    # --- Credential #2: PowerPlatform-Issuer (Uses Environment ID) ---
    $envIdNoHyphens = $currentEnvId.Replace("-", "")
    $envIdPrefix = $envIdNoHyphens.Substring(0, $envIdNoHyphens.Length - 2)
    $envIdSuffix = $envIdNoHyphens.Substring($envIdNoHyphens.Length - 2)

    $issuer2 = "https://$envIdPrefix.$envIdSuffix.environment.api.powerplatform.com/sts"
    $subject2 = "component:pluginassembly,thumbprint:$($cert.Thumbprint),environment:$currentEnvId"
    $credName2 = "PowerPlatform-Issuer-Env-$(($currentEnvId.Substring(0, 4)).Replace('-',''))" # Unique name based on start of Env ID

    Write-Host "[~] Creating $credName2..." -ForegroundColor Yellow
    Write-Host "  - Issuer: " -NoNewline -ForegroundColor White
    Write-Host "$issuer2" -ForegroundColor Cyan
    Write-Host "  - Subject: " -NoNewline -ForegroundColor White
    Write-Host "$subject2" -ForegroundColor Cyan

    $cred2 = @{
        name = $credName2
        issuer = $issuer2
        subject = $subject2
        description = "Power Platform Issuer - Authentication for Env $currentEnvId"
        audiences = @("api://AzureADTokenExchange")
    } | ConvertTo-Json | Out-File "$credName2.json" -Encoding UTF8

    az ad app federated-credential create --id $AppId --parameters "$credName2.json" | Out-Null
    Remove-Item "$credName2.json" -Force -ErrorAction SilentlyContinue
    Write-Host "  [+] Created $credName2" -ForegroundColor Green
    Write-Host ""
}

Write-Host "========================================================================================================" -ForegroundColor Cyan
Write-Host "                                         FINISHING                                                     " -ForegroundColor Yellow
Write-Host "========================================================================================================`n" -ForegroundColor Cyan

# ========================================
# Save Final Configuration
# ========================================
Write-Host "[~] Saving final configuration..." -ForegroundColor Yellow

try {
    # Save config.json with all values from all phases
    $config | ConvertTo-Json -Depth 10 | Out-File -FilePath $ConfigPath -Encoding UTF8
    Write-Host "[+] config.json saved to: " -NoNewline -ForegroundColor Green
    Write-Host "$ConfigPath" -ForegroundColor Cyan
}
catch {
    Write-Host "[X] ERROR: Failed to save config.json: $($_.Exception.Message)" -ForegroundColor Red
}

# ========================================
# Generate ManagedIdentity.cs File
# ========================================
Write-Host "[~] Generating ManagedIdentity.cs file..." -ForegroundColor Yellow

$managedIdentityPath = Join-Path $ScriptDir "ManagedIdentity.cs"

# Use values from config, with defaults for certificate info
$certPath = if ($config.CertificatePath) { $config.CertificatePath } else { "cert-signing.pfx" }
$certPassword = if ($config.CertificatePassword) { $config.CertificatePassword } else { "YourPassword123!" }

$managedIdentityContent = @"
using System;

[assembly: DynamicsCrmDevkitAssembly(
    IsolationMode = IsolationModeEnum.Sandbox,
    SourceType = SourceTypeEnum.Database,
    TenantId = "$TenantId",
    ApplicationId = "$AppId",
    CertificatePath = "$($config.CertificatePath)",
    CertificatePassword = "$CertificatePassword",
    CredentialSource = CredentialSource.IsManaged,
    SubjectScope = SubjectScope.EnvironmentScope
)]
"@

try {
    $managedIdentityContent | Out-File -FilePath $managedIdentityPath -Encoding UTF8 -Force
    Write-Host "[+] ManagedIdentity.cs created successfully" -ForegroundColor Green
}
catch {
    Write-Host "[X] ERROR: Failed to create ManagedIdentity.cs: $($_.Exception.Message)" -ForegroundColor Red
}

# --- 4. Cleanup any remaining temporary JSON files ---
Write-Host "[~] Cleaning up temporary files..." -ForegroundColor Yellow
Get-ChildItem -Path $ScriptDir -Filter "*Issuer*.json" | Remove-Item -Force -ErrorAction SilentlyContinue
Write-Host "[+] Cleanup complete." -ForegroundColor Green

Write-Host "`n========================================================================================================" -ForegroundColor Cyan
Write-Host "              PHASE 3 COMPLETED: POWER PLATFORM FEDERATED CREDENTIALS CONFIGURATION                    " -ForegroundColor Green
Write-Host "========================================================================================================`n" -ForegroundColor Cyan

# ========================================================================================================
# FINAL SUMMARY
# ========================================================================================================

Write-Host "========================================================================================================" -ForegroundColor Cyan
Write-Host "                                  SETUP COMPLETED SUCCESSFULLY                                         " -ForegroundColor Green
Write-Host "========================================================================================================`n" -ForegroundColor Cyan

Write-Host "[+] Azure Resources Created:" -ForegroundColor Green
Write-Host "    - App Registration: " -NoNewline -ForegroundColor White
Write-Host "$appName" -ForegroundColor Cyan
Write-Host "    - Application ID: " -NoNewline -ForegroundColor White
Write-Host "$AppId" -ForegroundColor Cyan
Write-Host "    - Tenant ID: " -NoNewline -ForegroundColor White
Write-Host "$TenantId" -ForegroundColor Cyan
Write-Host "    - Resource Group: " -NoNewline -ForegroundColor White
Write-Host "$resourceGroup" -ForegroundColor Cyan
Write-Host "    - Key Vault: " -NoNewline -ForegroundColor White
Write-Host "$keyVaultName" -ForegroundColor Cyan
Write-Host "    - Key Vault URL: " -NoNewline -ForegroundColor White
Write-Host "$($kv.properties.vaultUri)" -ForegroundColor Cyan
Write-Host ""

Write-Host "[+] Certificate Generated:" -ForegroundColor Green
Write-Host "    - Certificate File: " -NoNewline -ForegroundColor White
Write-Host "$certificateFileName.pfx" -ForegroundColor Cyan
Write-Host "    - Public Key File: " -NoNewline -ForegroundColor White
Write-Host "$certificateFileName.cer" -ForegroundColor Cyan
Write-Host "    - Thumbprint: " -NoNewline -ForegroundColor White
Write-Host "$($pfxCert.Thumbprint)" -ForegroundColor Cyan
Write-Host "    - Validity: " -NoNewline -ForegroundColor White
Write-Host "$validityYears years" -ForegroundColor Cyan
Write-Host ""

Write-Host "[+] Federated Credentials Configured:" -ForegroundColor Green
Write-Host "    - Number of Environments: " -NoNewline -ForegroundColor White
Write-Host "$($EnvironmentId.Count)" -ForegroundColor Cyan
Write-Host "    - Total Credentials Created: " -NoNewline -ForegroundColor White
Write-Host "$($EnvironmentId.Count * 2)" -ForegroundColor Cyan
Write-Host ""

Write-Host "[+] Generated Files:" -ForegroundColor Green
Write-Host "    - config.json: " -NoNewline -ForegroundColor White
Write-Host "updated with all values" -ForegroundColor Cyan
Write-Host "    - ManagedIdentity.cs: " -NoNewline -ForegroundColor White
Write-Host "assembly attribute file" -ForegroundColor Cyan
Write-Host ""

Write-Host "========================================================================================================" -ForegroundColor Cyan
Write-Host "                                         NEXT STEPS                                                     " -ForegroundColor Yellow
Write-Host "========================================================================================================`n" -ForegroundColor Cyan

Write-Host "1. Review the generated ManagedIdentity.cs file" -ForegroundColor White
Write-Host "2. Include ManagedIdentity.cs in your project" -ForegroundColor White
Write-Host "3. Deploy your plugin assembly to Power Platform" -ForegroundColor White
Write-Host "4. Test the managed identity integration" -ForegroundColor White
Write-Host ""

Write-Host "========================================================================================================" -ForegroundColor Cyan
Write-Host "                                      SETUP COMPLETE                                                    " -ForegroundColor Green
Write-Host "========================================================================================================`n" -ForegroundColor Cyan

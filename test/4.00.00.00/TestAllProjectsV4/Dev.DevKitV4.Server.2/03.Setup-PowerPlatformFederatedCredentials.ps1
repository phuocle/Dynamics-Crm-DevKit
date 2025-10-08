# ========================================
# CONFIGURATION FROM config.json
# ========================================
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ConfigPath = Join-Path $ScriptDir "config.json"

# Check if config.json exists
if (-not (Test-Path $ConfigPath)) {
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "[X] ERROR: config.json NOT FOUND" -ForegroundColor Red
    Write-Host "========================================`n" -ForegroundColor Red
    Write-Host "[!] Please run 01.Setup-Azure.ps1 first to create the config.json file." -ForegroundColor Yellow
    Write-Host "[i] Expected location:" -ForegroundColor White
    Write-Host "  $ConfigPath`n" -ForegroundColor Cyan
    exit 1
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
    @{Path = "TenantId"; Value = $config.TenantId}
    @{Path = "AppId"; Value = $config.AppId}
    @{Path = "CertificatePath"; Value = $config.CertificatePath}
    @{Path = "CertificatePassword"; Value = $config.CertificatePassword}
)

$missingFields = @()
foreach ($field in $requiredFields) {
    if ([string]::IsNullOrWhiteSpace($field.Value)) {
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
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "[X] ERROR: Missing Required Configuration" -ForegroundColor Red
    Write-Host "========================================`n" -ForegroundColor Red
    Write-Host "[i] Please update the following fields in config.json:" -ForegroundColor White
    foreach ($field in $missingFields) {
        Write-Host "  - $field" -ForegroundColor White
    }
    Write-Host "`n[i] Config file location:" -ForegroundColor White
    Write-Host "  $ConfigPath`n" -ForegroundColor Cyan
    Write-Host "[i] Example for array values in config.json:" -ForegroundColor White
    Write-Host '  "EnvironmentId": ["guid1", "guid2"]' -ForegroundColor Cyan
    Write-Host '  "OrganizationId": ["guid1", "guid2"]' -ForegroundColor Cyan
    Write-Host ""
    exit 1
}

# Load values from config
$TenantId = $config.TenantId
$AppId = $config.AppId
$CertificatePath = $config.CertificatePath
$CertificatePassword = $config.CertificatePassword
$EnvironmentId = $config.EnvironmentId
$OrganizationId = $config.OrganizationId

function Convert-GuidToBase64Url {
    param([string]$guid)
    $guidObj = [System.Guid]::Parse($guid)
    $bytes = $guidObj.ToByteArray()
    $base64 = [System.Convert]::ToBase64String($bytes)
    return $base64.Replace('+', '-').Replace('/', '_').TrimEnd('=')
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Power Platform Federated Credentials Setup" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# --- 1. Validation and Certificate Loading ---

if ($EnvironmentId.Count -ne $OrganizationId.Count) {
    Write-Host "[X] ERROR: The number of Environment IDs must match the number of Organization IDs." -ForegroundColor Red
    exit 1
}

Write-Host "[i] Input Parameters:" -ForegroundColor White
Write-Host "  [i] App ID: $AppId" -ForegroundColor Cyan
Write-Host "  [i] Tenant ID: $TenantId" -ForegroundColor Cyan
Write-Host "  [i] Number of Environments to Configure: $($EnvironmentId.Count)" -ForegroundColor Cyan
Write-Host ""

# Load certificate - resolve path relative to script directory
if (-not [System.IO.Path]::IsPathRooted($CertificatePath)) {
    $CertificatePath = Join-Path $ScriptDir $CertificatePath
}

if (-not (Test-Path $CertificatePath)) {
    Write-Host "[X] ERROR: Certificate file not found: $CertificatePath" -ForegroundColor Red
    exit 1
}

$secPwd = ConvertTo-SecureString -String $CertificatePassword -AsPlainText -Force
$cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($CertificatePath, $secPwd)
$certBytes = $cert.Export([System.Security.Cryptography.X509Certificates.X509ContentType]::Cert)
$sha256 = [System.Security.Cryptography.SHA256]::Create().ComputeHash($certBytes)
$sha256Hash = [System.Convert]::ToBase64String($sha256).Replace('+', '-').Replace('/', '_').TrimEnd('=')

Write-Host "[i] Certificate Information:" -ForegroundColor White
Write-Host "  [i] Thumbprint: $($cert.Thumbprint)" -ForegroundColor Cyan
Write-Host "  [i] SHA-256 Hash: $sha256Hash" -ForegroundColor Cyan
Write-Host ""

# Compute fixed encodings for Azure AD credential
$encodedTenant = Convert-GuidToBase64Url -guid $TenantId
$encodedApp = Convert-GuidToBase64Url -guid $AppId

# --- 2. Deleting Existing Credentials (Cleanup) ---

Write-Host "[~] Deleting ALL existing federated credentials for cleanup..." -ForegroundColor Yellow
# Delete ALL existing federated credentials to ensure a clean setup
$existing = az ad app federated-credential list --id $AppId 2>$null | ConvertFrom-Json
if ($existing -and $existing.Count -gt 0) {
    foreach ($cred in $existing) {
        Write-Host "  [~] Deleting: $($cred.name)" -ForegroundColor Yellow
        az ad app federated-credential delete --id $AppId --federated-credential-id $cred.id 2>$null
    }
    Write-Host "  [+] Deleted $($existing.Count) existing credential(s).`n" -ForegroundColor Green
} else {
    Write-Host "  [-] No existing credentials found.`n" -ForegroundColor Yellow
}

# --- 3. Iterate and Create Credentials for Each Environment ---

for ($i = 0; $i -lt $EnvironmentId.Count; $i++) {
    $currentEnvId = $EnvironmentId[$i]
    $currentOrgId = $OrganizationId[$i]
    $envName = "Environment #$($i+1)"

    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "Configuring $envName (Env ID: $currentEnvId)" -ForegroundColor Cyan
    Write-Host "========================================`n" -ForegroundColor Cyan

    # --- Credential #1: AzureAD-Issuer (Uses Organization ID) ---
    $orgIdNoHyphens = $currentOrgId.Replace("-", "")
    $issuer1 = "https://login.microsoftonline.com/$TenantId/v2.0"
    $subject1 = "/eid1/c/pub/t/$encodedTenant/a/$encodedApp/n/plugin/e/$orgIdNoHyphens/h/$sha256Hash"
    $credName1 = "AzureAD-Issuer-Org-$(($currentOrgId.Substring(0, 4)).Replace('-',''))" # Unique name based on start of Org ID

    Write-Host "[~] Creating $credName1..." -ForegroundColor Yellow
    Write-Host "  [i] Issuer: $issuer1" -ForegroundColor Cyan
    Write-Host "  [i] Subject: $subject1" -ForegroundColor Cyan

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
    Write-Host "  [i] Issuer: $issuer2" -ForegroundColor Cyan
    Write-Host "  [i] Subject: $subject2" -ForegroundColor Cyan

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

# --- 4. Cleanup any remaining temporary JSON files ---
Write-Host "[~] Cleaning up temporary files..." -ForegroundColor Yellow
Get-ChildItem -Path $ScriptDir -Filter "*Issuer*.json" | Remove-Item -Force -ErrorAction SilentlyContinue
Write-Host "  [+] Cleanup complete.`n" -ForegroundColor Green

Write-Host "========================================" -ForegroundColor Green
Write-Host "[+] SUCCESS! All credentials created." -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host "[i] Verification:" -ForegroundColor White
Write-Host "  az ad app federated-credential list --id $AppId" -ForegroundColor Cyan
Write-Host ""

# Update config.json with final verification
try {
    # The config already has all necessary values, just save to ensure consistency
    $config | ConvertTo-Json -Depth 10 | Out-File -FilePath $ConfigPath -Encoding UTF8
    Write-Host "[+] Configuration verified and saved to:" -ForegroundColor Green
    Write-Host "  $ConfigPath" -ForegroundColor Cyan
}
catch {
    Write-Host "[!] WARNING: Failed to update config.json: $($_.Exception.Message)" -ForegroundColor Yellow
}

# ========================================
# Generate ManagedIdentity.cs File
# ========================================
Write-Host "`n[~] Generating ManagedIdentity.cs file..." -ForegroundColor Yellow

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
    CertificatePath = "$CertificatePath",
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
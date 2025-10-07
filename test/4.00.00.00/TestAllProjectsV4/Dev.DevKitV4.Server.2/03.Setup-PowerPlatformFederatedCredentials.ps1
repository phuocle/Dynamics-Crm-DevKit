# ========================================
# BEGIN CONFIGURATION
# ========================================
$TenantId = "49528483-b79b-4b88-b86e-7d882ba68911"
$AppId = "8ad0b2f9-f23d-4f57-b4bd-a04220501240"
$CertificatePath = "cert-signing.pfx"
$CertificatePassword = "YourPassword123!"
$EnvironmentId = @(
    "2f985c04-9487-e70c-aa57-dcd6d08f0886" # DEV Environment ID
    #"a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6", # TEST Environment ID
    #"11223344-5566-7788-9900-aabbccddeeff"  # UAT Environment ID
)
$OrganizationId = @(
    "29c6e552-e16f-ef11-a66b-6045bd1e7d8b" # DEV Organization ID
    #"12345678-90ab-cdef-1234-567890abcdef", # TEST Organization ID
    #"fedcba98-7654-3210-fedc-ba9876543210"  # UAT Organization ID
)
# ========================================
# END CONFIGURATION
# ========================================

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
    Write-Host "❌ ERROR: The number of Environment IDs must match the number of Organization IDs." -ForegroundColor Red
    exit 1
}

Write-Host "Input Parameters:" -ForegroundColor Yellow
Write-Host "  App ID: $AppId" -ForegroundColor Gray
Write-Host "  Tenant ID: $TenantId" -ForegroundColor Gray
Write-Host "  Number of Environments to Configure: $($EnvironmentId.Count)" -ForegroundColor Gray
Write-Host ""

# Load certificate
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not [System.IO.Path]::IsPathRooted($CertificatePath)) {
    $CertificatePath = Join-Path $ScriptDir $CertificatePath
}

if (-not (Test-Path $CertificatePath)) {
    Write-Host "❌ ERROR: Certificate file not found: $CertificatePath" -ForegroundColor Red
    exit 1
}

$secPwd = ConvertTo-SecureString -String $CertificatePassword -AsPlainText -Force
$cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($CertificatePath, $secPwd)
$certBytes = $cert.Export([System.Security.Cryptography.X509Certificates.X509ContentType]::Cert)
$sha256 = [System.Security.Cryptography.SHA256]::Create().ComputeHash($certBytes)
$sha256Hash = [System.Convert]::ToBase64String($sha256).Replace('+', '-').Replace('/', '_').TrimEnd('=')

Write-Host "Certificate Information:" -ForegroundColor Yellow
Write-Host "  Thumbprint: $($cert.Thumbprint)" -ForegroundColor Gray
Write-Host "  SHA-256 Hash: $sha256Hash" -ForegroundColor Gray
Write-Host ""

# Compute fixed encodings for Azure AD credential
$encodedTenant = Convert-GuidToBase64Url -guid $TenantId
$encodedApp = Convert-GuidToBase64Url -guid $AppId

# --- 2. Deleting Existing Credentials (Cleanup) ---

Write-Host "Deleting ALL existing federated credentials for cleanup..." -ForegroundColor Yellow
# Delete ALL existing federated credentials to ensure a clean setup
$existing = az ad app federated-credential list --id $AppId 2>$null | ConvertFrom-Json
if ($existing -and $existing.Count -gt 0) {
    foreach ($cred in $existing) {
        Write-Host "  Deleting: $($cred.name)" -ForegroundColor Gray
        az ad app federated-credential delete --id $AppId --federated-credential-id $cred.id 2>$null
    }
    Write-Host "  ✅ Deleted $($existing.Count) existing credential(s).`n" -ForegroundColor Green
} else {
    Write-Host "  No existing credentials found.`n" -ForegroundColor Gray
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

    Write-Host "Creating $credName1..." -ForegroundColor Yellow
    Write-Host "  Issuer: $issuer1" -ForegroundColor Gray
    Write-Host "  Subject: $subject1" -ForegroundColor Gray

    $cred1 = @{
        name = $credName1
        issuer = $issuer1
        subject = $subject1
        description = "Azure AD Issuer - OIDC Validation for Org $currentOrgId"
        audiences = @("api://AzureADTokenExchange")
    } | ConvertTo-Json | Out-File "$credName1.json" -Encoding UTF8

    az ad app federated-credential create --id $AppId --parameters "$credName1.json" | Out-Null
    Remove-Item "$credName1.json" -Force -ErrorAction SilentlyContinue
    Write-Host "  ✅ Created $credName1" -ForegroundColor Green

    # --- Credential #2: PowerPlatform-Issuer (Uses Environment ID) ---
    $envIdNoHyphens = $currentEnvId.Replace("-", "")
    $envIdPrefix = $envIdNoHyphens.Substring(0, $envIdNoHyphens.Length - 2)
    $envIdSuffix = $envIdNoHyphens.Substring($envIdNoHyphens.Length - 2)

    $issuer2 = "https://$envIdPrefix.$envIdSuffix.environment.api.powerplatform.com/sts"
    $subject2 = "component:pluginassembly,thumbprint:$($cert.Thumbprint),environment:$currentEnvId"
    $credName2 = "PowerPlatform-Issuer-Env-$(($currentEnvId.Substring(0, 4)).Replace('-',''))" # Unique name based on start of Env ID

    Write-Host "Creating $credName2..." -ForegroundColor Yellow
    Write-Host "  Issuer: $issuer2" -ForegroundColor Gray
    Write-Host "  Subject: $subject2" -ForegroundColor Gray

    $cred2 = @{
        name = $credName2
        issuer = $issuer2
        subject = $subject2
        description = "Power Platform Issuer - Authentication for Env $currentEnvId"
        audiences = @("api://AzureADTokenExchange")
    } | ConvertTo-Json | Out-File "$credName2.json" -Encoding UTF8

    az ad app federated-credential create --id $AppId --parameters "$credName2.json" | Out-Null
    Remove-Item "$credName2.json" -Force -ErrorAction SilentlyContinue
    Write-Host "  ✅ Created $credName2" -ForegroundColor Green
    Write-Host ""
}

# --- 4. Cleanup any remaining temporary JSON files ---
Write-Host "Cleaning up temporary files..." -ForegroundColor Yellow
Get-ChildItem -Path $ScriptDir -Filter "*Issuer*.json" | Remove-Item -Force -ErrorAction SilentlyContinue
Write-Host "  ✅ Cleanup complete.`n" -ForegroundColor Green

Write-Host "========================================" -ForegroundColor Green
Write-Host "✅ SUCCESS! All credentials created." -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host "Verification:" -ForegroundColor Yellow
Write-Host "  az ad app federated-credential list --id $AppId" -ForegroundColor Gray
Write-Host ""
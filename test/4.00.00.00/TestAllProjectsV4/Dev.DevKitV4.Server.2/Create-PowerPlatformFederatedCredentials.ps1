<#
.SYNOPSIS
    Creates federated credentials for Power Platform plugin managed identity.

.DESCRIPTION
    Creates TWO required federated credentials:
    1. Azure AD Issuer (uses Organization ID)
    2. Power Platform Issuer (uses Environment ID)

.PARAMETER AppId
    The Application (Client) ID of your Azure AD App Registration
    Example: 8ad0b2f9-f23d-4f57-b4bd-a04220501240
    Found in: Azure Portal → App registrations → Your App → Overview → "Application (client) ID"

.PARAMETER TenantId
    Your Azure AD Tenant ID
    Example: 49528483-b79b-4b88-b86e-7d882ba68911
    Found in: Azure Portal → Azure Active Directory → Overview → "Tenant ID"

.PARAMETER OrganizationId
    The Organization ID from Power Apps Session Details
    Example: 29c6e552-e16f-ef11-a66b-6045bd1e7d8b
    Found in: Power Apps → Settings → Session details → "Organization ID"

.PARAMETER EnvironmentId
    The Environment ID from Power Apps Session Details
    Example: 2f985c04-9487-e70c-aa57-dcd6d08f0886
    Found in: Power Apps → Settings → Session details → "Environment ID"

.PARAMETER CertificatePath
    Path to your plugin signing certificate (.pfx file)

.PARAMETER CertificatePassword
    Password for the certificate file

.EXAMPLE
    .\Create-PowerPlatformFederatedCredentials.ps1 `
        -AppId "8ad0b2f9-f23d-4f57-b4bd-a04220501240" `
        -TenantId "49528483-b79b-4b88-b86e-7d882ba68911" `
        -OrganizationId "29c6e552-e16f-ef11-a66b-6045bd1e7d8b" `
        -EnvironmentId "2f985c04-9487-e70c-aa57-dcd6d08f0886" `
        -CertificatePath "D:\certs\cert.pfx" `
        -CertificatePassword "password"
#>

param(
    [Parameter(Mandatory=$true)]
    [string]$AppId,

    [Parameter(Mandatory=$true)]
    [string]$TenantId,

    [Parameter(Mandatory=$true)]
    [Alias("EnvironmentIdForAzureAD")]
    [string]$OrganizationId,

    [Parameter(Mandatory=$true)]
    [Alias("EnvironmentIdForPowerPlatform")]
    [string]$EnvironmentId,

    [Parameter(Mandatory=$true)]
    [string]$CertificatePath,

    [Parameter(Mandatory=$true)]
    [string]$CertificatePassword
)

function Convert-GuidToBase64Url {
    param([string]$guid)
    $guidObj = [System.Guid]::Parse($guid)
    $bytes = $guidObj.ToByteArray()
    $base64 = [System.Convert]::ToBase64String($bytes)
    return $base64.Replace('+', '-').Replace('/', '_').TrimEnd('=')
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Power Platform Federated Credentials" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "Input Parameters:" -ForegroundColor Yellow
Write-Host "  App ID: $AppId" -ForegroundColor Gray
Write-Host "  Tenant ID: $TenantId" -ForegroundColor Gray
Write-Host "  Organization ID: $OrganizationId" -ForegroundColor Gray
Write-Host "  Environment ID: $EnvironmentId" -ForegroundColor Gray
Write-Host "  Certificate: $CertificatePath" -ForegroundColor Gray
Write-Host ""
Write-Host "💡 Tip: Get IDs from Power Apps → Settings → Session details" -ForegroundColor Cyan
Write-Host ""

# Load certificate
$secPwd = ConvertTo-SecureString -String $CertificatePassword -AsPlainText -Force
$cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($CertificatePath, $secPwd)
$certBytes = $cert.Export([System.Security.Cryptography.X509Certificates.X509ContentType]::Cert)
$sha256 = [System.Security.Cryptography.SHA256]::Create().ComputeHash($certBytes)
$sha256Hash = [System.Convert]::ToBase64String($sha256).Replace('+', '-').Replace('/', '_').TrimEnd('=')

Write-Host "Certificate Information:" -ForegroundColor Yellow
Write-Host "  Thumbprint: $($cert.Thumbprint)" -ForegroundColor Gray
Write-Host "  SHA-256 Hash: $sha256Hash" -ForegroundColor Gray
Write-Host ""

# Compute encodings for Azure AD credential
$encodedTenant = Convert-GuidToBase64Url -guid $TenantId
$encodedApp = Convert-GuidToBase64Url -guid $AppId
$orgIdNoHyphens = $OrganizationId.Replace("-", "")

Write-Host "Credential #1 - AzureAD-Issuer:" -ForegroundColor Yellow
Write-Host "  Name: AzureAD-Issuer" -ForegroundColor Gray
Write-Host "  Organization ID: $OrganizationId" -ForegroundColor Gray
Write-Host "  Subject: /eid1/c/pub/t/{tenant}/a/{app}/n/plugin/e/{org}/h/{hash}" -ForegroundColor Gray
Write-Host ""

# Extract environment ID prefix and suffix for Power Platform credential
$envIdNoHyphens = $EnvironmentId.Replace("-", "")
$envIdPrefix = $envIdNoHyphens.Substring(0, $envIdNoHyphens.Length - 2)
$envIdSuffix = $envIdNoHyphens.Substring($envIdNoHyphens.Length - 2)

Write-Host "Credential #2 - PowerPlatform-Issuer:" -ForegroundColor Yellow
Write-Host "  Name: PowerPlatform-Issuer" -ForegroundColor Gray
Write-Host "  Environment ID: $EnvironmentId" -ForegroundColor Gray
Write-Host "  Region Number: $envIdSuffix" -ForegroundColor Gray
Write-Host "  Subject: component:pluginassembly,thumbprint:{...},environment:{...}" -ForegroundColor Gray
Write-Host ""

Write-Host "Deleting existing credentials..." -ForegroundColor Yellow
$existing = az ad app federated-credential list --id $AppId 2>$null | ConvertFrom-Json
$existing | Where-Object { $_.name -match "PowerPlatformPlugin|AzureAD-Issuer|PowerPlatform-Issuer" } | ForEach-Object {
    az ad app federated-credential delete --id $AppId --federated-credential-id $_.id 2>$null
}

Write-Host "Creating credentials...`n" -ForegroundColor Yellow

$issuer1 = "https://login.microsoftonline.com/$TenantId/v2.0"
$subject1 = "/eid1/c/pub/t/$encodedTenant/a/$encodedApp/n/plugin/e/$orgIdNoHyphens/h/$sha256Hash"

Write-Host "Creating AzureAD-Issuer..." -ForegroundColor Cyan
Write-Host "  Issuer: $issuer1" -ForegroundColor Gray
Write-Host "  Subject: $subject1" -ForegroundColor Gray

$cred1 = @{
    name = "AzureAD-Issuer"
    issuer = $issuer1
    subject = $subject1
    description = "Azure AD Issuer - OIDC Validation (uses Organization ID)"
    audiences = @("api://AzureADTokenExchange")
} | ConvertTo-Json | Out-File "cred1.json" -Encoding UTF8

az ad app federated-credential create --id $AppId --parameters cred1.json | Out-Null
Write-Host "  ✅ Created" -ForegroundColor Green
Write-Host ""

$issuer2 = "https://$envIdPrefix.$envIdSuffix.environment.api.powerplatform.com/sts"
$subject2 = "component:pluginassembly,thumbprint:$($cert.Thumbprint),environment:$EnvironmentId"

Write-Host "Creating PowerPlatform-Issuer..." -ForegroundColor Cyan
Write-Host "  Issuer: $issuer2" -ForegroundColor Gray
Write-Host "  Subject: $subject2" -ForegroundColor Gray

$cred2 = @{
    name = "PowerPlatform-Issuer"
    issuer = $issuer2
    subject = $subject2
    description = "Power Platform Issuer - Authentication (uses Environment ID)"
    audiences = @("api://AzureADTokenExchange")
} | ConvertTo-Json | Out-File "cred2.json" -Encoding UTF8

az ad app federated-credential create --id $AppId --parameters cred2.json | Out-Null
Write-Host "  ✅ Created" -ForegroundColor Green

Write-Host "`n✅ SUCCESS! Both credentials created.`n" -ForegroundColor Green
Write-Host "Verification:" -ForegroundColor Yellow
Write-Host "  az ad app federated-credential list --id $AppId" -ForegroundColor Gray
Write-Host ""
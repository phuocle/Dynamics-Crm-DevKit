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
    exit 1
}

# Load values from config
$certificatePassword = $config.CertificatePassword
$certificateSubject = $config.CertificateSubject
$certificateFileName = $config.CertificateFileName
$validityYears = $config.ValidityYears

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "[+] Begin Code Signing Certificate Setup" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan

# ========================================
# Step 1: Check for existing certificate
# ========================================
if (Test-Path "$certificateFileName.pfx") {
    Write-Host "[!] Certificate already exists: $certificateFileName.pfx" -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to overwrite it? (Y/N)"
    if ($overwrite -ne "Y" -and $overwrite -ne "y") {
        Write-Host "[-] Cancelled." -ForegroundColor Yellow
        exit 0
    }
    Remove-Item "$certificateFileName.pfx" -Force
    Remove-Item "$certificateFileName.cer" -Force -ErrorAction SilentlyContinue
}

# ========================================
# Step 2: Create self-signed certificate
# ========================================
Write-Host "[1/4] Creating self-signed code signing certificate..." -ForegroundColor Yellow

try {
    $cert = New-SelfSignedCertificate `
        -Subject $certificateSubject `
        -Type CodeSigningCert `
        -CertStoreLocation "Cert:\CurrentUser\My" `
        -NotAfter (Get-Date).AddYears($validityYears) `
        -KeyExportPolicy Exportable `
        -KeyLength 2048 `
        -HashAlgorithm SHA256

    Write-Host "[+] Certificate created in certificate store" -ForegroundColor Green
    Write-Host "  [i] Subject: $($cert.Subject)" -ForegroundColor Cyan
    Write-Host "  [i] Thumbprint: $($cert.Thumbprint)" -ForegroundColor Cyan
    Write-Host "  [i] Valid Until: $($cert.NotAfter.ToString('yyyy-MM-dd'))" -ForegroundColor Cyan
}
catch {
    Write-Host "[X] Failed to create certificate: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# ========================================
# Step 3: Export certificate with private key (.pfx)
# ========================================
Write-Host "`n[2/4] Exporting certificate with private key (.pfx)..." -ForegroundColor Yellow

try {
    $securePwd = ConvertTo-SecureString -String $certificatePassword -Force -AsPlainText

    Export-PfxCertificate `
        -Cert $cert `
        -FilePath "$certificateFileName.pfx" `
        -Password $securePwd `
        -Force | Out-Null

    Write-Host "[+] Certificate exported: $certificateFileName.pfx" -ForegroundColor Green
}
catch {
    Write-Host "[X] Failed to export PFX: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# ========================================
# Step 4: Export public key (.cer)
# ========================================
Write-Host "`n[3/4] Exporting public key certificate (.cer)..." -ForegroundColor Yellow

try {
    Export-Certificate `
        -Cert $cert `
        -FilePath "$certificateFileName.cer" `
        -Force | Out-Null

    Write-Host "[+] Public key exported: $certificateFileName.cer" -ForegroundColor Green
}
catch {
    Write-Host "[X] Failed to export CER: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# ========================================
# Step 5: Verify certificate
# ========================================
Write-Host "`n[4/4] Verifying certificate..." -ForegroundColor Yellow

try {
    $pfxPath = Join-Path -Path $PSScriptRoot -ChildPath "$certificateFileName.pfx"
    $pfxCert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($pfxPath, $certificatePassword)
    if ($pfxCert) {
        Write-Host "[+] Certificate verified successfully" -ForegroundColor Green
        Write-Host "  [i] Thumbprint: $($pfxCert.Thumbprint)" -ForegroundColor Cyan
        Write-Host "  [i] Has Private Key: $($pfxCert.HasPrivateKey)" -ForegroundColor Cyan
    }
    else {
        Write-Host "[X] Failed to verify certificate" -ForegroundColor Red
        exit 1
    }
}
catch {
    Write-Host "[X] Failed to verify certificate: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# ========================================
# Step 6: Clean up from certificate store (optional)
# ========================================
Write-Host "`n[Optional] Removing certificate from certificate store..." -ForegroundColor Yellow
$removeCert = Read-Host "Remove certificate from Windows certificate store? (Y/N)"

if ($removeCert -eq "Y" -or $removeCert -eq "y") {
    try {
        Remove-Item "Cert:\CurrentUser\My\$($cert.Thumbprint)" -Force
        Write-Host "[+] Certificate removed from store" -ForegroundColor Green
    }
    catch {
        Write-Host "[!] Could not remove certificate from store" -ForegroundColor Yellow
    }
}
else {
    Write-Host "[i] Certificate kept in store:" -ForegroundColor White
    Write-Host "  Cert:\CurrentUser\My\$($cert.Thumbprint)" -ForegroundColor Cyan
}

# ========================================
# Summary
# ========================================
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "[+] End Code Signing Certificate Setup" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "[i] Files created:" -ForegroundColor Green
Write-Host "  - $certificateFileName.pfx (with private key)" -ForegroundColor White
Write-Host "  - $certificateFileName.cer (public key only)" -ForegroundColor White


# Update config.json with certificate output values
try {
    $config.CertificateThumbprint = $pfxCert.Thumbprint

    # Calculate SHA-256 hash for federated credentials
    $certBytes = $pfxCert.Export([System.Security.Cryptography.X509Certificates.X509ContentType]::Cert)
    $sha256 = [System.Security.Cryptography.SHA256]::Create().ComputeHash($certBytes)
    $sha256Hash = [System.Convert]::ToBase64String($sha256).Replace('+', '-').Replace('/', '_').TrimEnd('=')
    $config.CertificateSHA256Hash = $sha256Hash

    # Update CertificatePath if empty
    if ([string]::IsNullOrWhiteSpace($config.CertificatePath)) {
        $config.CertificatePath = "$certificateFileName.pfx"
    }
    $config | ConvertTo-Json -Depth 10 | Out-File -FilePath $ConfigPath -Encoding UTF8
    Write-Host "`n[+] config.json saved to: " -NoNewline -ForegroundColor Green
    Write-Host "$ConfigPath" -ForegroundColor Cyan
}
catch {
    Write-Host "[!] WARNING: Failed to update config.json: $($_.Exception.Message)" -ForegroundColor Yellow
}


Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "Run 03.Setup-PowerPlatformFederatedCredentials.ps1 to create power platform federated credentials" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan
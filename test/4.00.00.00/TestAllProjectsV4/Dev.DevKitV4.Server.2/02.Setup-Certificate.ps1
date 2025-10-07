# ========================================
# BEGIN CONFIGURATION
# ========================================
$certificatePassword = "YourPassword123!"  # Change to your preferred password
$certificateSubject = "CN=Dataverse Plugin Code Signing"
$certificateFileName = "cert-signing"
$validityYears = 20
# ========================================
# END CONFIGURATION
# ========================================
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Code Signing Certificate Setup" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# ========================================
# Step 1: Check for existing certificate
# ========================================
if (Test-Path "$certificateFileName.pfx") {
    Write-Host "⚠️  Certificate already exists: $certificateFileName.pfx" -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to overwrite it? (Y/N)"
    if ($overwrite -ne "Y" -and $overwrite -ne "y") {
        Write-Host "Cancelled." -ForegroundColor Yellow
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

    Write-Host "✓ Certificate created in certificate store" -ForegroundColor Green
    Write-Host "  Subject: $($cert.Subject)" -ForegroundColor Cyan
    Write-Host "  Thumbprint: $($cert.Thumbprint)" -ForegroundColor Cyan
    Write-Host "  Valid Until: $($cert.NotAfter.ToString('yyyy-MM-dd'))" -ForegroundColor Cyan
}
catch {
    Write-Host "✗ Failed to create certificate: $($_.Exception.Message)" -ForegroundColor Red
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

    Write-Host "✓ Certificate exported: $certificateFileName.pfx" -ForegroundColor Green
}
catch {
    Write-Host "✗ Failed to export PFX: $($_.Exception.Message)" -ForegroundColor Red
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

    Write-Host "✓ Public key exported: $certificateFileName.cer" -ForegroundColor Green
}
catch {
    Write-Host "✗ Failed to export CER: $($_.Exception.Message)" -ForegroundColor Red
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
        Write-Host "✓ Certificate verified successfully" -ForegroundColor Green
        Write-Host "  Thumbprint: $($pfxCert.Thumbprint)" -ForegroundColor Cyan
        Write-Host "  Has Private Key: $($pfxCert.HasPrivateKey)" -ForegroundColor Cyan
    }
    else {
        Write-Host "✗ Failed to verify certificate" -ForegroundColor Red
        exit 1
    }
}
catch {
    Write-Host "✗ Failed to verify certificate: $($_.Exception.Message)" -ForegroundColor Red
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
        Write-Host "✓ Certificate removed from store" -ForegroundColor Green
    }
    catch {
        Write-Host "⚠️  Could not remove certificate from store" -ForegroundColor Yellow
    }
}
else {
    Write-Host "Certificate kept in store: Cert:\CurrentUser\My\$($cert.Thumbprint)" -ForegroundColor Cyan
}

# ========================================
# Summary
# ========================================
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Certificate Setup Complete!" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "Files created:" -ForegroundColor Yellow
Write-Host "  • $certificateFileName.pfx (with private key)" -ForegroundColor White
Write-Host "  • $certificateFileName.cer (public key only)" -ForegroundColor White

Write-Host "`nCertificate password:" -NoNewline
Write-Host "  $certificatePassword" -ForegroundColor Cyan

Write-Host "`nNext Steps:" -ForegroundColor Yellow
Write-Host "1. Verify $certificateFileName.pfx exists in this folder" -ForegroundColor White
Write-Host "2. Update AssemblyInfo.cs with DynamcisCrmDevkitAssemblyAttribute" -ForegroundColor White
Write-Host "   CertificatePath = `"$certificateFileName.pfx`"" -ForegroundColor Cyan
Write-Host "   CertificatePassword = `"$certificatePassword`"" -ForegroundColor Cyan
Write-Host "3. Build the plugin project" -ForegroundColor White
Write-Host "4. Run 03.Setup-PowerPlatformFederatedCredentials.ps1" -ForegroundColor White
Write-Host "5. Deploy using DynamicsCrm.DevKit.Cli`n" -ForegroundColor White

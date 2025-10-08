# ========================================
# CLEANUP SCRIPT - DELETE ALL AZURE RESOURCES AND LOCAL FILES
# ========================================
# This script undoes all changes made by scripts 1-3, allowing you to start fresh
# WARNING: This will permanently delete Azure resources and local files!

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ConfigPath = Join-Path $ScriptDir "config.json"

Write-Host "========================================" -ForegroundColor Yellow
Write-Host "[!] CLEANUP SCRIPT - DELETE ALL RESOURCES" -ForegroundColor Yellow
Write-Host "========================================`n" -ForegroundColor Yellow

# Check if config.json exists
if (-not (Test-Path $ConfigPath)) {
    Write-Host "[X] ERROR: config.json NOT FOUND" -ForegroundColor Red
    Write-Host "Nothing to clean up. Expected location: $ConfigPath`n" -ForegroundColor Yellow
    exit 0
}

# Load configuration
try {
    $config = Get-Content -Path $ConfigPath -Raw | ConvertFrom-Json
}
catch {
    Write-Host "[X] ERROR: Failed to parse config.json: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Skipping Azure cleanup. Will only clean local files.`n" -ForegroundColor Yellow
    $config = $null
}

# Display what will be deleted
Write-Host "[i] The following resources will be DELETED:" -ForegroundColor Cyan
Write-Host ""

if ($config) {
    if ($config.AppName) {
        Write-Host "  [*] App Registration: $($config.AppName)" -ForegroundColor White
        Write-Host "     - AppId: $($config.AppId)" -ForegroundColor Gray
        Write-Host "     - All federated credentials" -ForegroundColor Gray
    }

    if ($config.ResourceGroup) {
        Write-Host "  [*] Resource Group: $($config.ResourceGroup)" -ForegroundColor White
        Write-Host "     - Key Vault: $($config.KeyVaultName)" -ForegroundColor Gray
        Write-Host "     - All resources within the group" -ForegroundColor Gray
    }

    if ($config.CertificateThumbprint) {
        Write-Host "  [*] Certificate from Windows Store:" -ForegroundColor White
        Write-Host "     - Subject: $($config.CertificateSubject)" -ForegroundColor Gray
        Write-Host "     - Thumbprint: $($config.CertificateThumbprint)" -ForegroundColor Gray
    }
}

Write-Host "  [*] Local Files:" -ForegroundColor White
if ($config -and $config.CertificateFileName) {
    Write-Host "     - $($config.CertificateFileName).pfx" -ForegroundColor Gray
    Write-Host "     - $($config.CertificateFileName).cer" -ForegroundColor Gray
}
Write-Host "     - config.json" -ForegroundColor Gray

Write-Host ""
Write-Host "[!] WARNING: This action CANNOT be undone!" -ForegroundColor Red
Write-Host ""

# Confirmation prompt
$confirmation = Read-Host "Type 'DELETE' (in uppercase) to confirm deletion"

if ($confirmation -ne "DELETE") {
    Write-Host "`n[-] Cleanup cancelled. No changes were made." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "[~] Starting Cleanup Process..." -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$errors = @()
$success = @()

# ========================================
# STEP 1: DELETE AZURE RESOURCES
# ========================================
if ($config -and ($config.AppId -or $config.ResourceGroup)) {
    Write-Host "Step 1: Deleting Azure Resources..." -ForegroundColor Cyan
    Write-Host "----------------------------------------`n" -ForegroundColor Cyan

    # Check if logged into Azure
    try {
        $azAccount = az account show 2>&1 | ConvertFrom-Json
        if ($LASTEXITCODE -ne 0) {
            throw "Not logged in"
        }
        Write-Host "[+] Already logged into Azure (Tenant: $($azAccount.tenantId))" -ForegroundColor Green
    }
    catch {
        Write-Host "[~] Logging into Azure..." -ForegroundColor Yellow
        az login --output none
        if ($LASTEXITCODE -ne 0) {
            $errors += "Failed to login to Azure"
            Write-Host "[X] Failed to login to Azure. Skipping Azure cleanup.`n" -ForegroundColor Red
        }
        else {
            Write-Host "[+] Logged into Azure successfully`n" -ForegroundColor Green
        }
    }

    # Delete App Registration (includes federated credentials and service principal)
    if ($config.AppId) {
        Write-Host "[~] Deleting App Registration..." -ForegroundColor Yellow
        Write-Host "   AppId: $($config.AppId)" -ForegroundColor Gray

        try {
            # Check if app exists
            $appExists = az ad app show --id $config.AppId 2>&1
            if ($LASTEXITCODE -eq 0) {
                # Delete the app (this also deletes service principal and federated credentials)
                az ad app delete --id $config.AppId 2>&1 | Out-Null

                if ($LASTEXITCODE -eq 0) {
                    $success += "Deleted App Registration: $($config.AppName)"
                    Write-Host "   [+] App Registration deleted successfully" -ForegroundColor Green
                    Write-Host "   [+] Service Principal deleted automatically" -ForegroundColor Green
                    Write-Host "   [+] All federated credentials deleted automatically`n" -ForegroundColor Green
                }
                else {
                    $errors += "Failed to delete App Registration: $($config.AppName)"
                    Write-Host "   [X] Failed to delete App Registration`n" -ForegroundColor Red
                }
            }
            else {
                Write-Host "   [-] App Registration not found (may have been already deleted)`n" -ForegroundColor Yellow
            }
        }
        catch {
            $errors += "Error checking/deleting App Registration: $($_.Exception.Message)"
            Write-Host "   [X] Error: $($_.Exception.Message)`n" -ForegroundColor Red
        }
    }

    # Delete Key Vault first (with purge to prevent soft-delete issues)
    if ($config.KeyVaultName) {
        Write-Host "[~] Deleting Key Vault..." -ForegroundColor Yellow
        Write-Host "   Key Vault: $($config.KeyVaultName)" -ForegroundColor Gray
        Write-Host "   [i] Purging to allow name reuse" -ForegroundColor Cyan

        try {
            # Check if Key Vault exists
            $kvExists = az keyvault show --name $config.KeyVaultName --output json 2>&1
            if ($LASTEXITCODE -eq 0) {
                # Delete Key Vault
                az keyvault delete --name $config.KeyVaultName --output none 2>&1
                if ($LASTEXITCODE -eq 0) {
                    Write-Host "   [+] Key Vault deleted" -ForegroundColor Green

                    # Purge the Key Vault immediately to free up the name
                    Write-Host "   [~] Purging soft-deleted Key Vault (to allow name reuse)..." -ForegroundColor Yellow
                    az keyvault purge --name $config.KeyVaultName --output none 2>&1

                    if ($LASTEXITCODE -eq 0) {
                        $success += "Key Vault purged: $($config.KeyVaultName) (name is now available)"
                        Write-Host "   [+] Key Vault purged successfully - name can be reused" -ForegroundColor Green
                    }
                    else {
                        Write-Host "   [!] Warning: Failed to purge Key Vault (may need manual purge)" -ForegroundColor Yellow
                        Write-Host "   [i] Name may be reserved for up to 90 days" -ForegroundColor Yellow
                    }
                }
                else {
                    $errors += "Failed to delete Key Vault: $($config.KeyVaultName)"
                    Write-Host "   [X] Failed to delete Key Vault" -ForegroundColor Red
                }
            }
            else {
                Write-Host "   [-] Key Vault not found in subscription" -ForegroundColor Yellow

                # Check if it's soft-deleted
                Write-Host "   [~] Checking for soft-deleted Key Vault..." -ForegroundColor Yellow
                $softDeleted = az keyvault list-deleted --query "[?name=='$($config.KeyVaultName)']" --output json 2>&1 | ConvertFrom-Json

                if ($softDeleted -and $softDeleted.Count -gt 0) {
                    Write-Host "   [i] Found soft-deleted Key Vault - purging..." -ForegroundColor Cyan
                    az keyvault purge --name $config.KeyVaultName --output none 2>&1

                    if ($LASTEXITCODE -eq 0) {
                        $success += "Purged soft-deleted Key Vault: $($config.KeyVaultName)"
                        Write-Host "   [+] Soft-deleted Key Vault purged - name is now available" -ForegroundColor Green
                    }
                    else {
                        $errors += "Failed to purge soft-deleted Key Vault: $($config.KeyVaultName)"
                        Write-Host "   [X] Failed to purge soft-deleted Key Vault" -ForegroundColor Red
                    }
                }
                else {
                    Write-Host "   [-] No soft-deleted Key Vault found either" -ForegroundColor Yellow
                }
            }
        }
        catch {
            $errors += "Error processing Key Vault: $($_.Exception.Message)"
            Write-Host "   [X] Error: $($_.Exception.Message)" -ForegroundColor Red
        }
        Write-Host ""
    }

    # Delete Resource Group (includes any remaining resources)
    if ($config.ResourceGroup) {
        Write-Host "[~] Deleting Resource Group..." -ForegroundColor Yellow
        Write-Host "   Resource Group: $($config.ResourceGroup)" -ForegroundColor Gray
        Write-Host "   [~] This may take a few minutes..." -ForegroundColor Yellow

        try {
            # Check if resource group exists
            $rgExists = az group exists --name $config.ResourceGroup
            if ($rgExists -eq "true") {
                # Delete resource group (this deletes everything inside it)
                az group delete --name $config.ResourceGroup --yes --no-wait 2>&1 | Out-Null

                if ($LASTEXITCODE -eq 0) {
                    $success += "Resource Group deletion initiated: $($config.ResourceGroup)"
                    Write-Host "   [+] Resource Group deletion started (running in background)" -ForegroundColor Green
                    Write-Host "   [+] All remaining resources will be deleted`n" -ForegroundColor Green
                }
                else {
                    $errors += "Failed to delete Resource Group: $($config.ResourceGroup)"
                    Write-Host "   [X] Failed to delete Resource Group`n" -ForegroundColor Red
                }
            }
            else {
                Write-Host "   [-] Resource Group not found (may have been already deleted)`n" -ForegroundColor Yellow
            }
        }
        catch {
            $errors += "Error checking/deleting Resource Group: $($_.Exception.Message)"
            Write-Host "   [X] Error: $($_.Exception.Message)`n" -ForegroundColor Red
        }
    }
}
else {
    Write-Host "Step 1: Skipping Azure cleanup (no Azure resources in config)`n" -ForegroundColor Yellow
}

# ========================================
# STEP 2: DELETE CERTIFICATE FROM WINDOWS STORE
# ========================================
Write-Host "Step 2: Deleting Certificate from Windows Store..." -ForegroundColor Cyan
Write-Host "----------------------------------------`n" -ForegroundColor Cyan

if ($config -and $config.CertificateThumbprint) {
    Write-Host "[~] Removing certificate..." -ForegroundColor Yellow
    Write-Host "   Thumbprint: $($config.CertificateThumbprint)" -ForegroundColor Gray
    Write-Host "   Subject: $($config.CertificateSubject)" -ForegroundColor Gray

    try {
        # Find certificate in CurrentUser\My store
        $cert = Get-ChildItem -Path Cert:\CurrentUser\My | Where-Object {$_.Thumbprint -eq $config.CertificateThumbprint}

        if ($cert) {
            # Remove certificate
            $cert | Remove-Item -Force
            $success += "Deleted certificate from Windows Store: $($config.CertificateSubject)"
            Write-Host "   [+] Certificate removed from Windows Store`n" -ForegroundColor Green
        }
        else {
            Write-Host "   [-] Certificate not found in Windows Store (may have been already deleted)`n" -ForegroundColor Yellow
        }
    }
    catch {
        $errors += "Error removing certificate: $($_.Exception.Message)"
        Write-Host "   [X] Error: $($_.Exception.Message)`n" -ForegroundColor Red
    }
}
else {
    Write-Host "[-] No certificate thumbprint in config. Skipping certificate cleanup.`n" -ForegroundColor Yellow
}

# ========================================
# STEP 3: DELETE LOCAL FILES
# ========================================
Write-Host "Step 3: Deleting Local Files..." -ForegroundColor Cyan
Write-Host "----------------------------------------`n" -ForegroundColor Cyan

# Delete certificate files (.pfx and .cer)
if ($config -and $config.CertificateFileName) {
    $pfxFile = Join-Path $ScriptDir "$($config.CertificateFileName).pfx"
    $cerFile = Join-Path $ScriptDir "$($config.CertificateFileName).cer"

    # Delete .pfx file
    if (Test-Path $pfxFile) {
        try {
            Remove-Item $pfxFile -Force
            $success += "Deleted file: $($config.CertificateFileName).pfx"
            Write-Host "[+] Deleted: $($config.CertificateFileName).pfx" -ForegroundColor Green
        }
        catch {
            $errors += "Failed to delete $($config.CertificateFileName).pfx: $($_.Exception.Message)"
            Write-Host "[X] Failed to delete: $($config.CertificateFileName).pfx" -ForegroundColor Red
        }
    }
    else {
        Write-Host "[-] File not found: $($config.CertificateFileName).pfx" -ForegroundColor Yellow
    }

    # Delete .cer file
    if (Test-Path $cerFile) {
        try {
            Remove-Item $cerFile -Force
            $success += "Deleted file: $($config.CertificateFileName).cer"
            Write-Host "[+] Deleted: $($config.CertificateFileName).cer" -ForegroundColor Green
        }
        catch {
            $errors += "Failed to delete $($config.CertificateFileName).cer: $($_.Exception.Message)"
            Write-Host "[X] Failed to delete: $($config.CertificateFileName).cer" -ForegroundColor Red
        }
    }
    else {
        Write-Host "[-] File not found: $($config.CertificateFileName).cer" -ForegroundColor Yellow
    }
}

# Delete config.json
Write-Host ""
if (Test-Path $ConfigPath) {
    try {
        Remove-Item $ConfigPath -Force
        $success += "Deleted file: config.json"
        Write-Host "[+] Deleted: config.json" -ForegroundColor Green
    }
    catch {
        $errors += "Failed to delete config.json: $($_.Exception.Message)"
        Write-Host "[X] Failed to delete: config.json" -ForegroundColor Red
    }
}
else {
    Write-Host "[-] File not found: config.json" -ForegroundColor Yellow
}

# ========================================
# SUMMARY
# ========================================
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "[i] CLEANUP SUMMARY" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

if ($success.Count -gt 0) {
    Write-Host "[+] Successfully Completed ($($success.Count)):" -ForegroundColor Green
    foreach ($item in $success) {
        Write-Host "   - $item" -ForegroundColor White
    }
    Write-Host ""
}

if ($errors.Count -gt 0) {
    Write-Host "[X] Errors Encountered ($($errors.Count)):" -ForegroundColor Red
    foreach ($error in $errors) {
        Write-Host "   - $error" -ForegroundColor White
    }
    Write-Host ""
}

if ($errors.Count -eq 0) {
    Write-Host "[*] Cleanup completed successfully!" -ForegroundColor Green
    Write-Host "   You can now run scripts 01-03 again from scratch.`n" -ForegroundColor Green
    exit 0
}
else {
    Write-Host "[!] Cleanup completed with some errors." -ForegroundColor Yellow
    Write-Host "   Please review the errors above and manually clean up if needed.`n" -ForegroundColor Yellow
    exit 1
}

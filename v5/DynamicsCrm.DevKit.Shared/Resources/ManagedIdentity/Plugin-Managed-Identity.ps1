# ============================================================================
# Plugin Managed Identity Setup Script
# ============================================================================
# This script creates the MINIMUM required Azure resources for Dataverse Plugin
# Managed Identity authentication:
#   1. App Registration (Azure AD Application)
#   2. Service Principal
#   3. Code Signing Certificate (.pfx and .cer)
#   4. Federated Credential for Power Platform
#   5. AssemblyInfo2.cs for plugin project
#
# It does NOT create Resource Groups, Key Vaults, or other Azure resources.
# Those are OPTIONAL and depend on what Azure services your plugin needs.
# ============================================================================

function Convert-GuidToBase64Url {
    param([string]$guid)
    $guidObj = [System.Guid]::Parse($guid)
    $bytes = $guidObj.ToByteArray()
    $base64 = [System.Convert]::ToBase64String($bytes)
    return $base64.Replace('+', '-').Replace('/', '_').TrimEnd('=')
}

function Get-CredentialName {
    param([string]$environmentId)
    # Extract first part of GUID (before first hyphen)
    $firstPart = $environmentId.Split('-')[0]
    return "PowerPlatform-$firstPart"
}

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ConfigPath = Join-Path $ScriptDir "Plugin-Managed-Identity-Config.json"

# ============================================================================
# Validate Configuration File
# ============================================================================
if (-not (Test-Path $ConfigPath)) {
    Write-Host "========================================================================================================" -ForegroundColor Red
    Write-Host "[X] Plugin-Managed-Identity-Config.json not found" -ForegroundColor Red
    Write-Host "========================================================================================================`n" -ForegroundColor Red
    exit 1
}

$ConfigContent = Get-Content $ConfigPath -Raw
try {
    $config = $ConfigContent | ConvertFrom-Json
} catch {
    Write-Host "========================================================================================================" -ForegroundColor Red
    Write-Host "[X] Plugin-Managed-Identity-Config.json is not valid JSON" -ForegroundColor Red
    Write-Host "========================================================================================================`n" -ForegroundColor Red
    exit 1
}

$errors = @()
$requiredFields = @('CertificateFileName', 'CertificatePassword', 'CertificateValidityYears', 'AppName')
foreach ($field in $requiredFields) {
    if (-not $config.$field -or $config.$field -eq '' -or $null -eq $config.$field) {
        $errors += "[X] $field is empty"
    }
}

if ($config.EnvironmentIds -and $config.EnvironmentIds.Count -gt 0) {
    for ($i = 0; $i -lt $config.EnvironmentIds.Count; $i++) {
        $envId = $config.EnvironmentIds[$i]
        if (-not $envId -or $envId -eq '' -or $null -eq $envId) {
            $errors += "[X] EnvironmentIds[$i] is empty"
        }
    }
} else {
    $errors += "[X] EnvironmentIds array is empty"
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

# ============================================================================
# Start Script
# ============================================================================
Write-Host "`n========================================================================================================" -ForegroundColor Cyan
Write-Host "                    DATAVERSE PLUGIN MANAGED IDENTITY SETUP" -ForegroundColor Green
Write-Host "========================================================================================================" -ForegroundColor Cyan
Write-Host "  This script creates:" -ForegroundColor White
Write-Host "    - App Registration + Service Principal" -ForegroundColor Gray
Write-Host "    - Code Signing Certificate (.pfx, .cer)" -ForegroundColor Gray
Write-Host "    - Power Platform Federated Credential" -ForegroundColor Gray
Write-Host "    - AssemblyInfo2.cs for your plugin project" -ForegroundColor Gray
Write-Host "========================================================================================================`n" -ForegroundColor Cyan

$TenantId = (az account show --output json | ConvertFrom-Json).tenantId
Write-Host "  Tenant ID: $TenantId" -ForegroundColor Cyan

# ============================================================================
# Step 1: App Registration + Service Principal
# ============================================================================
Write-Host "`n[1] AZURE AD APP REGISTRATION + SERVICE PRINCIPAL" -ForegroundColor Blue
$appName = $config.AppName
    
Write-Host "`n  Processing: $appName" -ForegroundColor Magenta
    
# Check/Create App Registration
Write-Host "  @ Checking App Registration..." -ForegroundColor Yellow
$existingApp = az ad app list --display-name $appName --output json | ConvertFrom-Json
if ($null -ne $existingApp -and $existingApp.Count -gt 0) {
    $appId = $existingApp[0].appId
    Write-Host "  + SUCCESS: App Registration already exists." -ForegroundColor Green
} else {
    $createdApp = az ad app create --display-name $appName --output json | ConvertFrom-Json
    $appId = $createdApp.appId
    Write-Host "  + SUCCESS: App Registration created." -ForegroundColor Green
}
Write-Host "    - App Name: $appName" -ForegroundColor Cyan
Write-Host "    - App (Client) ID: $appId" -ForegroundColor Cyan
$config.AppId = $appId

# Check/Create Service Principal
Write-Host "  @ Checking Service Principal..." -ForegroundColor Yellow
$existingSp = az ad sp show --id $appId --output json 2>$null | ConvertFrom-Json
if ($existingSp) {
    Write-Host "  + SUCCESS: Service Principal already exists." -ForegroundColor Green
    $spId = $existingSp.id
} else {
    $createdSp = az ad sp create --id $appId --output json | ConvertFrom-Json
    $spId = $createdSp.id
    Write-Host "  + SUCCESS: Service Principal created." -ForegroundColor Green
}
Write-Host "    - Service Principal Object ID: $spId" -ForegroundColor Cyan

# ============================================================================
# Step 2: Code Signing Certificate
# ============================================================================
Write-Host "`n[2] CODE SIGNING CERTIFICATE" -ForegroundColor Blue
$certificatePassword = $config.CertificatePassword
$certificateSubject = "CN=$($config.CertificateFileName)"
$certificateFileName = $config.CertificateFileName
$validityYears = $config.CertificateValidityYears

$pfxPath = Join-Path $ScriptDir "$certificateFileName.pfx"
$cerPath = Join-Path $ScriptDir "$certificateFileName.cer"

if ((Test-Path $pfxPath) -and (Test-Path $cerPath)) {
    Write-Host "  @ Found existing certificate files, re-using them." -ForegroundColor Yellow
    Write-Host "    - Private Key (.pfx): $pfxPath" -ForegroundColor Cyan
    Write-Host "    - Public Key (.cer): $cerPath" -ForegroundColor Cyan
} else {
    Write-Host "  @ Creating new self-signed code signing certificate..." -ForegroundColor Yellow
    try {
        $cert = New-SelfSignedCertificate `
            -Subject $certificateSubject `
            -Type CodeSigningCert `
            -CertStoreLocation "Cert:\CurrentUser\My" `
            -NotAfter (Get-Date).AddYears($validityYears) `
            -KeyExportPolicy Exportable `
            -KeyLength 2048 `
            -HashAlgorithm SHA256
        Write-Host "  + SUCCESS: Certificate created in Windows Certificate Store." -ForegroundColor Green
        Write-Host "    - Subject: $($cert.Subject)" -ForegroundColor Cyan
        Write-Host "    - Thumbprint: $($cert.Thumbprint)" -ForegroundColor Cyan
        Write-Host "    - Valid Until: $($cert.NotAfter.ToString('yyyy-MM-dd'))" -ForegroundColor Cyan
    }
    catch {
        Write-Host "  x ERROR: Failed to create certificate: $($_.Exception.Message)" -ForegroundColor Red
        exit 1
    }

    # Export .pfx (private key)
    Write-Host "  @ Exporting private key (.pfx)..." -ForegroundColor Yellow
    try {
        $securePwd = ConvertTo-SecureString -String $certificatePassword -Force -AsPlainText
        Export-PfxCertificate -Cert $cert -FilePath $pfxPath -Password $securePwd -Force | Out-Null
        Write-Host "  + SUCCESS: Exported $pfxPath" -ForegroundColor Green
    }
    catch {
        Write-Host "  x ERROR: Failed to export .pfx: $($_.Exception.Message)" -ForegroundColor Red
        exit 1
    }

    # Export .cer (public key)
    Write-Host "  @ Exporting public key (.cer)..." -ForegroundColor Yellow
    try {
        Export-Certificate -Cert $cert -FilePath $cerPath -Force | Out-Null
        Write-Host "  + SUCCESS: Exported $cerPath" -ForegroundColor Green
    }
    catch {
        Write-Host "  x ERROR: Failed to export .cer: $($_.Exception.Message)" -ForegroundColor Red
        exit 1
    }


    # Remove from Windows Certificate Store (we have the .pfx file)
    Write-Host "  @ Removing certificate from Windows Certificate Store..." -ForegroundColor Yellow
    try {
        Remove-Item "Cert:\CurrentUser\My\$($cert.Thumbprint)" -Force
        Write-Host "  + SUCCESS: Certificate removed from store (kept in .pfx file)." -ForegroundColor Green
    }
    catch {
        Write-Host "  ! WARNING: Could not remove certificate from store." -ForegroundColor Yellow
    }
}

# ============================================================================
# Step 3: Power Platform Federated Credentials
# ============================================================================
Write-Host "`n[3] POWER PLATFORM FEDERATED CREDENTIALS" -ForegroundColor Blue

$CertificateFileName = $config.CertificateFileName
$CertificatePassword = $config.CertificatePassword
$AppName = $config.AppName
$AppId = $config.AppId

for ($i = 0; $i -lt $config.EnvironmentIds.Count; $i++) {
    $EnvironmentId = $config.EnvironmentIds[$i]
    $CredentialName = Get-CredentialName -environmentId $EnvironmentId
    
    Write-Host "`n  Processing Environment: $EnvironmentId" -ForegroundColor Magenta
    Write-Host "    - Credential Name: $CredentialName" -ForegroundColor Cyan

    # Load certificate for SHA256 hash
    $resolvedPfx = Join-Path $ScriptDir "$CertificateFileName.pfx"
    if (-not (Test-Path $resolvedPfx)) {
        $resolvedPfx = "$CertificateFileName.pfx"
    }
    
    try {
        $cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($resolvedPfx, $CertificatePassword)
        $certBytes = $cert.Export([System.Security.Cryptography.X509Certificates.X509ContentType]::Cert)
        $sha256 = [System.Security.Cryptography.SHA256]::Create().ComputeHash($certBytes)
        # Dataverse v1 uses HEX hash
        $sha256Hash = [BitConverter]::ToString($sha256).Replace("-", "").ToLowerInvariant()
    }
    catch {
        Write-Host "  x ERROR: Failed to load certificate: $($_.Exception.Message)" -ForegroundColor Red
        exit 1
    }

    # Build v1 format federated credential
    $encodedTenantId = Convert-GuidToBase64Url -guid $TenantId
    $issuer = "https://login.microsoftonline.com/$TenantId/v2.0"
    $subject = "/eid1/c/pub/t/$encodedTenantId/a/qzXoWDkuqUa3l6zM5mM0Rw/n/plugin/e/$EnvironmentId/h/$sha256Hash"

    Write-Host "  @ Checking federated credential: $CredentialName" -ForegroundColor Yellow
    $existingCred = az ad app federated-credential list --id $AppId --query "[?name=='$CredentialName']" | ConvertFrom-Json

    $newCred = @{
        name = $CredentialName
        issuer = $issuer
        subject = $subject
        description = "Power Platform v1 - Environment $EnvironmentId"
        audiences = @("api://AzureADTokenExchange")
    }

    if ($existingCred) {
        if ($existingCred.issuer -eq $issuer -and $existingCred.subject -eq $subject) {
            Write-Host "  + SUCCESS: Federated credential already configured correctly." -ForegroundColor Green
        } else {
            Write-Host "  @ Updating federated credential (values changed)..." -ForegroundColor Yellow
            az ad app federated-credential delete --id $AppId --federated-credential-id $existingCred.id
            $newCred | ConvertTo-Json | Out-File "$CredentialName.json" -Encoding UTF8
            az ad app federated-credential create --id $AppId --parameters "$CredentialName.json" | Out-Null
            Remove-Item "$CredentialName.json" -Force -ErrorAction SilentlyContinue
            Write-Host "  + SUCCESS: Federated credential updated." -ForegroundColor Green
        }
    } else {
        Write-Host "  @ Creating federated credential..." -ForegroundColor Yellow
        $newCred | ConvertTo-Json | Out-File "$CredentialName.json" -Encoding UTF8
        az ad app federated-credential create --id $AppId --parameters "$CredentialName.json" | Out-Null
        Remove-Item "$CredentialName.json" -Force -ErrorAction SilentlyContinue
        Write-Host "  + SUCCESS: Federated credential created." -ForegroundColor Green
    }
    Write-Host "    - Issuer: $issuer" -ForegroundColor Gray
    Write-Host "    - Subject: $subject" -ForegroundColor Gray
}

# ============================================================================
# Step 4: Generate AssemblyInfo2.cs
# ============================================================================
Write-Host "`n[4] GENERATING ASSEMBLYINFO2.CS" -ForegroundColor Blue
$assemblyFilePath = Join-Path -Path $ScriptDir -ChildPath "AssemblyInfo2.cs"

$applicationId = $config.AppId

$certificateFileOut = if ($config.CertificateFileName.ToLower().EndsWith('.pfx')) { 
    $config.CertificateFileName 
} else { 
    "$($config.CertificateFileName).pfx" 
}

$assemblyContent = @"
[assembly: DynamcisCrmDevKitPluginManagedIdentityAssembly(
    TenantId = "$TenantId",
    ApplicationIds = "$applicationId",
    CertificateFileName = "$certificateFileOut",
    CertificatePassword = "$($config.CertificatePassword)"
)]
"@

if (Test-Path $assemblyFilePath) {
    Write-Host "  @ Overwriting existing AssemblyInfo2.cs" -ForegroundColor Yellow
} else {
    Write-Host "  @ Creating AssemblyInfo2.cs" -ForegroundColor Yellow
}

$assemblyContent | Out-File -FilePath $assemblyFilePath -Encoding UTF8 -Force
Write-Host "  + SUCCESS: Saved AssemblyInfo2.cs" -ForegroundColor Green
Write-Host "    - Path: $assemblyFilePath" -ForegroundColor Cyan

# ============================================================================
# Step 5: Save Configuration
# ============================================================================
Write-Host "`n[5] SAVING CONFIGURATION" -ForegroundColor Blue
$config.TenantId = $TenantId

try {
    $config | ConvertTo-Json -Depth 10 | Out-File -FilePath $ConfigPath -Encoding UTF8
    Write-Host "  + SUCCESS: Configuration saved." -ForegroundColor Green
    Write-Host "    - Path: $ConfigPath" -ForegroundColor Cyan
}
catch {
    Write-Host "  x ERROR: Failed to save config: $($_.Exception.Message)" -ForegroundColor Red
}

# ============================================================================
# Summary
# ============================================================================
Write-Host "`n========================================================================================================" -ForegroundColor Cyan
Write-Host "                              SETUP COMPLETED SUCCESSFULLY!" -ForegroundColor Green
Write-Host "========================================================================================================" -ForegroundColor Cyan
Write-Host "`n  Next Steps:" -ForegroundColor White
Write-Host "  1. Add AssemblyInfo2.cs to your plugin project" -ForegroundColor Gray
Write-Host "  2. Add $($config.CertificateFileName).pfx to your project (Build Action: None)" -ForegroundColor Gray
Write-Host "  3. Grant your App Registration access to Azure resources:" -ForegroundColor Gray
Write-Host "     - Key Vault: Add Access Policy for App ID" -ForegroundColor DarkGray
Write-Host "     - Storage: Add RBAC role assignment" -ForegroundColor DarkGray
Write-Host "     - SQL: Add as external user" -ForegroundColor DarkGray
Write-Host "  4. Build and deploy your plugin using 'devkit server'" -ForegroundColor Gray
Write-Host "`n========================================================================================================`n" -ForegroundColor Cyan
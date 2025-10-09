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
    Write-Host "[X] config.json not found" -ForegroundColor Red
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
# CONFIGURATION LOADING AND VALIDATION
# ========================================================================================================

# Check if config.json exists
if (-not (Test-Path $ConfigPath)) {
    Initialize-ConfigFile
}

# ========================================================================================================
# MAIN SCRIPT START
# ========================================================================================================

Write-Host "`n========================================================================================================" -ForegroundColor Cyan
Write-Host "                          DATAVERSE MANAGED IDENTITY SETUP                                     " -ForegroundColor Green
Write-Host "========================================================================================================" -ForegroundColor Cyan
Write-Host "This script will perform the following operations:" -ForegroundColor White
Write-Host "    1. Create Azure Resources" -ForegroundColor Gray
Write-Host "    2. Generate Code Signing Certificate" -ForegroundColor Gray
Write-Host "    3. Configure Power Platform Federated Credentials" -ForegroundColor Gray
Write-Host "========================================================================================================`n" -ForegroundColor Cyan

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
        if ($null -eq $field.Value -or 0 -eq $field.Value) {
            $missingFields += $field.Path
        }
    }
    elseif ([string]::IsNullOrWhiteSpace($field.Value)) {
        $missingFields += $field.Path
    }
}

# Check arrays
if ($null -eq $config.EnvironmentId -or 0 -eq $config.EnvironmentId.Count) {
    $missingFields += "EnvironmentId (must be an array with at least one value)"
}

if ($null -eq $config.OrganizationId -or 0 -eq $config.OrganizationId.Count) {
    $missingFields += "OrganizationId (must be an array with at least one value)"
}

if ($missingFields.Count -gt 0) {
    Write-Host "========================================================================================================" -ForegroundColor Red
    Write-Host "[X] Missing Required Configuration" -ForegroundColor Red
    Write-Host "========================================================================================================`n" -ForegroundColor Red
    Write-Host "Please update the following fields in config.json:" -ForegroundColor Yellow
    foreach ($field in $missingFields) {
        Write-Host "  - $field" -ForegroundColor Red
    }
    Write-Host "`nConfig file location:" -ForegroundColor Yellow
    Write-Host "  - $ConfigPath`n" -ForegroundColor White
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
Write-Host "[1/6] CHECKING RESOURCE GROUP" -ForegroundColor Yellow

# Check if resource group exists
$existingRg = az group show --name $resourceGroup --output json 2>$null | ConvertFrom-Json

if ($existingRg) {
    Write-Host "  @ Resource group already exists." -ForegroundColor Yellow
    $rg = $existingRg
    Write-Host "  + SUCCESS: found resource group." -ForegroundColor Green
    Write-Host "  - Resource Group: " -NoNewline -ForegroundColor White
    Write-Host "$($rg.name)" -ForegroundColor Cyan
    Write-Host "  - Location: " -NoNewline -ForegroundColor White
    Write-Host "$($rg.location)" -ForegroundColor Cyan
} else {
    Write-Host "  @ Creating new resource group." -ForegroundColor Yellow
    $rg = az group create `
        --name $resourceGroup `
        --location $location `
        --output json | ConvertFrom-Json

    if ($rg) {
        Write-Host "  + SUCCESS: Resource group created." -ForegroundColor Green
        Write-Host "  - Resource Group: " -NoNewline -ForegroundColor White
        Write-Host "$($rg.name)" -ForegroundColor Cyan
        Write-Host "  - Location: " -NoNewline -ForegroundColor White
        Write-Host "$($rg.location)" -ForegroundColor Cyan
    } else {
        Write-Host "  x ERROR: Failed to create resource group" -ForegroundColor Red
        exit 1
    }
}

# ========================================
# Step 2: Create Azure AD App Registration
# ========================================
Write-Host "`n[2/6] CHECKING AZURE AD APP REGISTRATION" -ForegroundColor Yellow

# Check if app registration exists
$existingApp = az ad app list --display-name $appName --output json | ConvertFrom-Json

if ($null -ne $existingApp -and $existingApp.Count -gt 0) {
    Write-Host "  @ App registration already exists." -ForegroundColor Yellow
    $app = $existingApp[0]
    $appId = $app.appId
    Write-Host "  + SUCCESS: found app registration." -ForegroundColor Green
    Write-Host "  - Application name: " -NoNewline -ForegroundColor White
    Write-Host "$appName" -ForegroundColor Cyan
    Write-Host "  - Application (Client) ID: " -NoNewline -ForegroundColor White
    Write-Host "$appId" -ForegroundColor Cyan
} else {
    Write-Host "  @ Creating new app registration." -ForegroundColor Yellow
    $app = az ad app create `
        --display-name $appName `
        --output json | ConvertFrom-Json

    if ($app) {
        $appId = $app.appId
        Write-Host "  + SUCCESS: App registration created." -ForegroundColor Green
        Write-Host "  - Application (Client) ID: " -NoNewline -ForegroundColor White
        Write-Host "$appId" -ForegroundColor Cyan
    } else {
        Write-Host "  x ERROR: Failed to create app registration" -ForegroundColor Red
        exit 1
    }
}

# Get tenant ID
$tenantId = (az account show --output json | ConvertFrom-Json).tenantId
Write-Host "  - Directory (Tenant) ID: " -NoNewline -ForegroundColor White
Write-Host "$tenantId" -ForegroundColor Cyan

# ========================================
# Step 3: Create Service Principal
# ========================================
Write-Host "`n[3/6] CHECKING SERVICE PRINCIPAL FOR THE APP" -ForegroundColor Yellow

# Check if service principal already exists
$existingSp = az ad sp show --id $appId --output json 2>$null | ConvertFrom-Json

if ($existingSp) {
    Write-Host "  @ Service principal already exists." -ForegroundColor Yellow
    $sp = $existingSp
    Write-Host "  + SUCCESS: found service principal." -ForegroundColor Green
    Write-Host "  - Service Principal ID: " -NoNewline -ForegroundColor White
    Write-Host "$($sp.id)" -ForegroundColor Cyan
} else {
    Write-Host "  @ Creating new service principal." -ForegroundColor Yellow
    $sp = az ad sp create --id $appId --output json | ConvertFrom-Json

    if ($sp) {
        Write-Host "  + SUCCESS: Service principal created." -ForegroundColor Green
        Write-Host "  - Service Principal ID: " -NoNewline -ForegroundColor White
        Write-Host "$($sp.id)" -ForegroundColor Cyan
    } else {
        Write-Host "  x ERROR: Failed to create service principal" -ForegroundColor Red
        exit 1
    }
}

# ========================================
# Step 4: Create Key Vault
# ========================================
Write-Host "`n[4/6] CHECKING AZURE KEY VAULT" -ForegroundColor Yellow

# Check if Key Vault already exists (active)
$existingKv = az keyvault show --name $keyVaultName --resource-group $resourceGroup --output json 2>$null | ConvertFrom-Json

if ($existingKv) {
    Write-Host "  @ Key Vault already exists." -ForegroundColor Yellow
    $kv = $existingKv
    Write-Host "  + SUCCESS: found key vault." -ForegroundColor Green
    Write-Host "  - Location: " -NoNewline -ForegroundColor White
    Write-Host "$($kv.location)" -ForegroundColor Cyan
    Write-Host "  - Vault Name: " -NoNewline -ForegroundColor White
    Write-Host "$($kv.name)" -ForegroundColor Cyan
    Write-Host "  - Vault URL: " -NoNewline -ForegroundColor White
    Write-Host "$($kv.properties.vaultUri)" -ForegroundColor Cyan
} else {
    # Check if Key Vault exists in soft-deleted state
    $softDeletedKv = az keyvault list-deleted --query "[?name=='$keyVaultName']" --output json 2>$null | ConvertFrom-Json

    if ($null -ne $softDeletedKv -and $softDeletedKv.Count -gt 0) {
        Write-Host "  @ Found soft-deleted key vault - Recovering." -ForegroundColor Yellow
        # Recover the soft-deleted Key Vault
        $null = az keyvault recover --name $keyVaultName --output none 2>&1
        if ($LASTEXITCODE -eq 0) {
            # Get the recovered Key Vault details
            $kv = az keyvault show --name $keyVaultName --output json 2>$null | ConvertFrom-Json
            if ($kv) {
                Write-Host "  + SUCCESS: Key Vault recovered." -ForegroundColor Green
                Write-Host "  - Location: " -NoNewline -ForegroundColor White
                Write-Host "$($softDeletedKv[0].location)" -ForegroundColor Cyan
                Write-Host "  - Vault URL: " -NoNewline -ForegroundColor White
                Write-Host "$($kv.properties.vaultUri)" -ForegroundColor Cyan
            }
        } else {
            Write-Host "  x ERROR: Failed to recover Key Vault" -ForegroundColor Red
            exit 1
        }
    } else {
        # Create new Key Vault
        Write-Host "  @ Creating new key vault." -ForegroundColor Yellow
        $kv = az keyvault create `
            --name $keyVaultName `
            --resource-group $resourceGroup `
            --location $location `
            --enable-rbac-authorization false `
            --output json | ConvertFrom-Json

        if ($kv) {
            Write-Host "  + SUCCESS: Key Vault created." -ForegroundColor Green
            Write-Host "  - Location: " -NoNewline -ForegroundColor White
            Write-Host "$($kv.location)" -ForegroundColor Cyan
            Write-Host "  - Vault Name: " -NoNewline -ForegroundColor White
            Write-Host "$($kv.name)" -ForegroundColor Cyan
            Write-Host "  - Vault URL: " -NoNewline -ForegroundColor White
            Write-Host "$($kv.properties.vaultUri)" -ForegroundColor Cyan
        } else {
            Write-Host "  x ERROR: Failed to create Key Vault (name may not be globally unique)" -ForegroundColor Red
            exit 1
        }
    }
}

# ========================================
# Step 5: Add/Update Secret in Key Vault
# ========================================
Write-Host "`n[5/6] ADDING/UPDATING TEST SECRET IN KEY VAULT" -ForegroundColor Yellow

# Check if secret exists
$existingSecret = az keyvault secret show --vault-name $keyVaultName --name $secretName --output json 2>$null | ConvertFrom-Json

if ($existingSecret) {
    Write-Host "  @ Secret already exists." -ForegroundColor Yellow
}

$secret = az keyvault secret set `
    --vault-name $keyVaultName `
    --name $secretName `
    --value $secretValue `
    --output json | ConvertFrom-Json

if ($secret) {
    Write-Host "  + SUCCESS: found secret configured." -ForegroundColor Green
    Write-Host "  - Name: " -NoNewline -ForegroundColor White
    Write-Host "$($secret.name)" -ForegroundColor Cyan
    Write-Host "  - Value: " -NoNewline -ForegroundColor White
    Write-Host "$($secret.value)" -ForegroundColor Cyan
} else {
    Write-Host "  x ERROR: Failed to configure secret" -ForegroundColor Red
    exit 1
}

# ========================================
# Step 6: Grant App Access to Key Vault
# ========================================
Write-Host "`n[6/6] CONFIGURING APP ACCESS TO KEY VAULT" -ForegroundColor Yellow

# Check current access policies for the service principal
$existingPolicy = az keyvault show --name $keyVaultName --resource-group $resourceGroup --query "properties.accessPolicies[?objectId=='$($sp.id)']" --output json 2>$null | ConvertFrom-Json

if ($null -ne $existingPolicy -and $existingPolicy.Count -gt 0) {
    Write-Host "  @ Access policy already exists." -ForegroundColor Yellow
    Write-Host "  + SUCCESS: Found access policy." -ForegroundColor Green
    Write-Host "  - Service Principal ID: " -NoNewline -ForegroundColor White
    Write-Host "$($sp.id)" -ForegroundColor Cyan

    # Check if permissions are correct
    $hasGetPermission = $existingPolicy[0].permissions.secrets -contains "Get" -or $existingPolicy[0].permissions.secrets -contains "get"
    $hasListPermission = $existingPolicy[0].permissions.secrets -contains "List" -or $existingPolicy[0].permissions.secrets -contains "list"

    if (-not $hasGetPermission -or -not $hasListPermission) {
        Write-Host "  @ Updating permissions to include Get and List" -ForegroundColor Yellow
        az keyvault set-policy `
            --name $keyVaultName `
            --spn $appId `
            --secret-permissions get list `
            --output none

        if ($LASTEXITCODE -eq 0) {
            Write-Host "  + SUCCESS: Permissions updated." -ForegroundColor Green
            Write-Host "  - Permissions: " -NoNewline -ForegroundColor White
            Write-Host "Get, List (Secrets)" -ForegroundColor Cyan
        }
    } else {
        Write-Host "  - Permissions: " -NoNewline -ForegroundColor White
        Write-Host "Get, List (Secrets)" -ForegroundColor Cyan
    }
} else {
    Write-Host "  @ Creating new access policy." -ForegroundColor Yellow
    az keyvault set-policy `
        --name $keyVaultName `
        --spn $appId `
        --secret-permissions get list `
        --output none

    if ($LASTEXITCODE -eq 0) {
        Write-Host "  + SUCCESS: Access policy created." -ForegroundColor Green
        Write-Host "  - Service Principal ID: " -NoNewline -ForegroundColor White
        Write-Host "$($sp.id)" -ForegroundColor Cyan
        Write-Host "  - Permissions: " -NoNewline -ForegroundColor White
        Write-Host "Get, List (Secrets)" -ForegroundColor Cyan
    } else {
        Write-Host "  x ERROR: Failed to set access policy" -ForegroundColor Red
        exit 1
    }
}


$config.TenantId = $tenantId
$config.AppId = $appId
$config.KeyVaultURL = $kv.properties.vaultUri

Write-Host "`n========================================================================================================" -ForegroundColor Cyan
Write-Host "                             PHASE 1 COMPLETED: AZURE RESOURCES SETUP                                 " -ForegroundColor Green
Write-Host "========================================================================================================`n" -ForegroundColor Cyan

# ========================================================================================================
# PHASE 2: CODE SIGNING CERTIFICATE GENERATION
# ========================================================================================================

Write-Host "========================================================================================================" -ForegroundColor Cyan
Write-Host "                            PHASE 2: CODE SIGNING CERTIFICATE GENERATION                               " -ForegroundColor Green
Write-Host "========================================================================================================`n" -ForegroundColor Cyan

# Load values from config
$certificatePassword = $config.CertificatePassword
$certificateSubject = $config.CertificateSubject
$certificateFileName = $config.CertificateFileName
$validityYears = $config.ValidityYears

# ========================================
# Step 1: Check for existing certificate and remove if exists
# ========================================
Write-Host "[1/6] CHECKING SELF-SIGNED EXIST" -ForegroundColor Yellow

if (Test-Path "$certificateFileName.pfx") {
    try {
    Write-Host "  @ Certificate already exists." -ForegroundColor Yellow
    Write-Host "  + SUCCESS: Existing certificate files removed." -ForegroundColor Green
    Write-Host "  - Private Key File: " -NoNewline -ForegroundColor White
    Write-Host "$certificateFileName.pfx" -ForegroundColor Cyan
    Write-Host "  - Public Key File: " -NoNewline -ForegroundColor White
    Write-Host "$certificateFileName.cer" -ForegroundColor Cyan
    Remove-Item "$certificateFileName.pfx" -Force
    Remove-Item "$certificateFileName.cer" -Force -ErrorAction SilentlyContinue
    }
    catch {
        Write-Host "  x ERROR: Could not remove existing certificate files." -ForegroundColor Red
        exit 1
    }
}
else
{
    Write-Host "  @ No existing certificate files found." -ForegroundColor Yellow
    Write-Host "  + SUCCESS: Ready to create new certificate." -ForegroundColor Green
}

# ========================================
# Step 2: Create self-signed certificate
# ========================================
Write-Host "`n[2/6] CREATING SELF-SIGNED CODE SIGNING CERTIFICATE" -ForegroundColor Yellow

try {
    $cert = New-SelfSignedCertificate `
        -Subject $certificateSubject `
        -Type CodeSigningCert `
        -CertStoreLocation "Cert:\CurrentUser\My" `
        -NotAfter (Get-Date).AddYears($validityYears) `
        -KeyExportPolicy Exportable `
        -KeyLength 2048 `
        -HashAlgorithm SHA256
    Write-Host "  @ Creating new self-signed certificate." -ForegroundColor Yellow
    Write-Host "  + SUCCESS: self-signed certificate created in certificate store." -ForegroundColor Green
    Write-Host "  - Subject: " -NoNewline -ForegroundColor White
    Write-Host "$($cert.Subject)" -ForegroundColor Cyan
    Write-Host "  - Thumbprint: " -NoNewline -ForegroundColor White
    Write-Host "$($cert.Thumbprint)" -ForegroundColor Cyan
    Write-Host "  - Valid Until: " -NoNewline -ForegroundColor White
    Write-Host "$($cert.NotAfter.ToString('yyyy-MM-dd'))" -ForegroundColor Cyan
}
catch {
    Write-Host "  x ERROR: Failed to create self-signed certificate: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
# ========================================
# Step 3: Export private key (.pfx)
# ========================================
Write-Host "`n[3/6] EXPORTING PRIVATE KEY (.pfx)" -ForegroundColor Yellow
try {
    $securePwd = ConvertTo-SecureString -String $certificatePassword -Force -AsPlainText
    Export-PfxCertificate `
        -Cert $cert `
        -FilePath "$certificateFileName.pfx" `
        -Password $securePwd `
        -Force | Out-Null
    Write-Host "  @ Exporting new private key file." -ForegroundColor Yellow
    Write-Host "  + SUCCESS: exported new private key file." -ForegroundColor Green
    Write-Host "  - Private Key File: " -NoNewline -ForegroundColor White
    Write-Host "$certificateFileName.pfx" -ForegroundColor Cyan
}
catch {
    Write-Host "  x ERROR: Failed to create pfx: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
# ========================================
# Step 4: Export public key (.cer)
# ========================================
Write-Host "`n[4/6] EXPORTING PUBLIC KEY (.cer)" -ForegroundColor Yellow
try {
    Export-Certificate `
        -Cert $cert `
        -FilePath "$certificateFileName.cer" `
        -Force | Out-Null
    Write-Host "  @ Exporting new public key file." -ForegroundColor Yellow
    Write-Host "  + SUCCESS: exported new public key file." -ForegroundColor Green
    Write-Host "  - Public Key File: " -NoNewline -ForegroundColor White
    Write-Host "$certificateFileName.cer" -ForegroundColor Cyan
}
catch {
    Write-Host "  x ERROR: Failed to create cer: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
# ========================================
# Step 5: Verify certificate
# ========================================
Write-Host "`n[5/6] VERIFYING CERTIFICATE" -ForegroundColor Yellow
try {
    $pfxPath = Join-Path -Path $PSScriptRoot -ChildPath "$certificateFileName.pfx"
    $pfxCert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($pfxPath, $certificatePassword)
    if ($pfxCert) {
        Write-Host "  @ Found certificate to verify." -ForegroundColor Yellow
        Write-Host "  + SUCCESS: certificate verified successfully." -ForegroundColor Green
        Write-Host "  - Thumbprint: " -NoNewline -ForegroundColor White
        Write-Host "$($pfxCert.Thumbprint)" -ForegroundColor Cyan
        Write-Host "  - Has Private Key: " -NoNewline -ForegroundColor White
        Write-Host "$($pfxCert.HasPrivateKey)" -ForegroundColor Cyan
    }
    else {
        Write-Host "  x ERROR: Failed to verify certificate" -ForegroundColor Red
        exit 1
    }
}
catch {
    Write-Host " x ERROR: Failed to verify certificate: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
# ========================================
# Step 6: Clean up from certificate store (automatically)
# ========================================
Write-Host "`n[6/6] REMOVING CERTIFICATE FROM WINDOWS CERTIFICATE STORE" -ForegroundColor Yellow

try {
    Remove-Item "Cert:\CurrentUser\My\$($cert.Thumbprint)" -Force
    Write-Host "  @ Found certificate to remove." -ForegroundColor Yellow
    Write-Host "  + SUCCESS: certificate removed from store." -ForegroundColor Green
}
catch {
    Write-Host "  x ERROR: Could not remove certificate from store" -ForegroundColor Yellow
}
# Update config.json with certificate output values (in memory only)
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

Write-Host "`n========================================================================================================" -ForegroundColor Cyan
Write-Host "                      PHASE 2 COMPLETED: CODE SIGNING CERTIFICATE GENERATION                          " -ForegroundColor Green
Write-Host "========================================================================================================`n" -ForegroundColor Cyan

# ========================================================================================================
# PHASE 3: POWER PLATFORM FEDERATED CREDENTIALS CONFIGURATION
# ========================================================================================================

Write-Host "========================================================================================================" -ForegroundColor Cyan
Write-Host "                     PHASE 3: POWER PLATFORM FEDERATED CREDENTIALS CONFIGURATION                      " -ForegroundColor Green
Write-Host "========================================================================================================`n" -ForegroundColor Cyan

# Load values from config
$TenantId = $config.TenantId
$AppId = $config.AppId
$CertificatePath = $config.CertificatePath
$CertificatePassword = $config.CertificatePassword
$EnvironmentId = $config.EnvironmentId
$OrganizationId = $config.OrganizationId

# --- 1. Validation and Certificate Loading ---

if ($EnvironmentId.Count -ne $OrganizationId.Count) {
    Write-Host "[X] ERROR: The number of Environment IDs must match the number of Organization IDs." -ForegroundColor Red
    exit 1
}

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

# Compute fixed encodings for Azure AD credential
$encodedTenant = Convert-GuidToBase64Url -guid $TenantId
$encodedApp = Convert-GuidToBase64Url -guid $AppId

# --- 3. Iterate and Create Credentials for Each Environment ---

for ($i = 0; $i -lt $EnvironmentId.Count; $i++) {
    $currentEnvId = $EnvironmentId[$i]
    $currentOrgId = $OrganizationId[$i]
    $envName = "Environment #$($i+1)"

    Write-Host "Configuring $envName (Env ID: $currentEnvId)" -ForegroundColor Yellow

    # --- Credential #1: AzureAD-Issuer (Uses Organization ID) ---
    $orgIdNoHyphens = $currentOrgId.Replace("-", "")
    $issuer1 = "https://login.microsoftonline.com/$TenantId/v2.0"
    $subject1 = "/eid1/c/pub/t/$encodedTenant/a/$encodedApp/n/plugin/e/$orgIdNoHyphens/h/$sha256Hash"
    $credName1 = "AzureAD-Issuer-Org-$(($currentOrgId.Substring(0, 4)).Replace('-',''))" # Unique name based on start of Org ID

    Write-Host "  @ Checking credential $credName1" -ForegroundColor Yellow

    # Check if credential exists
    $existingCred = az ad app federated-credential list --id $AppId --query "[?name=='$credName1']" | ConvertFrom-Json

    $newCred = @{
        name = $credName1
        issuer = $issuer1
        subject = $subject1
        description = "Azure AD Issuer - OIDC Validation for Org $currentOrgId"
        audiences = @("api://AzureADTokenExchange")
    }

    if ($existingCred) {
        # Compare existing with new values
        if ($existingCred.issuer -eq $issuer1 -and $existingCred.subject -eq $subject1) {
            Write-Host "  + SUCCESS: No updates needed for $credName1 (values match)" -ForegroundColor Green
        } else {
            Write-Host "  @ Updating $credName1 (values different)" -ForegroundColor Yellow
            Write-Host "  - Old Issuer: $($existingCred.issuer)" -ForegroundColor DarkGray
            Write-Host "  - New Issuer: $issuer1" -ForegroundColor White
            Write-Host "  - Old Subject: $($existingCred.subject)" -ForegroundColor DarkGray
            Write-Host "  - New Subject: $subject1" -ForegroundColor White

            # Delete existing and create new
            az ad app federated-credential delete --id $AppId --federated-credential-id $existingCred.id
            $newCred | ConvertTo-Json | Out-File "$credName1.json" -Encoding UTF8
            az ad app federated-credential create --id $AppId --parameters "$credName1.json" | Out-Null
            Remove-Item "$credName1.json" -Force -ErrorAction SilentlyContinue
            Write-Host "  + SUCCESS: Updated $credName1." -ForegroundColor Green
        }
    } else {
        Write-Host "  @ Creating new credential $credName1" -ForegroundColor Yellow
        Write-Host "  - Issuer: $issuer1" -ForegroundColor White
        Write-Host "  - Subject: $subject1" -ForegroundColor White

        $newCred | ConvertTo-Json | Out-File "$credName1.json" -Encoding UTF8
        az ad app federated-credential create --id $AppId --parameters "$credName1.json" | Out-Null
        Remove-Item "$credName1.json" -Force -ErrorAction SilentlyContinue
        Write-Host "  + SUCCESS: Created $credName1." -ForegroundColor Green
    }

    # --- Credential #2: PowerPlatform-Issuer (Uses Environment ID) ---
    $envIdNoHyphens = $currentEnvId.Replace("-", "")
    $envIdPrefix = $envIdNoHyphens.Substring(0, $envIdNoHyphens.Length - 2)
    $envIdSuffix = $envIdNoHyphens.Substring($envIdNoHyphens.Length - 2)

    $issuer2 = "https://$envIdPrefix.$envIdSuffix.environment.api.powerplatform.com/sts"
    $subject2 = "component:pluginassembly,thumbprint:$($cert.Thumbprint),environment:$currentEnvId"
    $credName2 = "PowerPlatform-Issuer-Env-$(($currentEnvId.Substring(0, 4)).Replace('-',''))" # Unique name based on start of Env ID

    Write-Host "  @ Checking credential $credName2" -ForegroundColor Yellow

    # Check if credential exists
    $existingCred2 = az ad app federated-credential list --id $AppId --query "[?name=='$credName2']" | ConvertFrom-Json

    $newCred2 = @{
        name = $credName2
        issuer = $issuer2
        subject = $subject2
        description = "Power Platform Issuer - Authentication for Env $currentEnvId"
        audiences = @("api://AzureADTokenExchange")
    }

    if ($existingCred2) {
        # Compare existing with new values
        if ($existingCred2.issuer -eq $issuer2 -and $existingCred2.subject -eq $subject2) {
            Write-Host "  + SUCCESS: No updates needed for $credName2 (values match)." -ForegroundColor Green
        } else {
            Write-Host "  @ Updating $credName2 (values different)" -ForegroundColor Yellow
            Write-Host "  - Old Issuer: $($existingCred2.issuer)" -ForegroundColor DarkGray
            Write-Host "  - New Issuer: $issuer2" -ForegroundColor White
            Write-Host "  - Old Subject: $($existingCred2.subject)" -ForegroundColor DarkGray
            Write-Host "  - New Subject: $subject2" -ForegroundColor White

            # Delete existing and create new
            az ad app federated-credential delete --id $AppId --federated-credential-id $existingCred2.id
            $newCred2 | ConvertTo-Json | Out-File "$credName2.json" -Encoding UTF8
            az ad app federated-credential create --id $AppId --parameters "$credName2.json" | Out-Null
            Remove-Item "$credName2.json" -Force -ErrorAction SilentlyContinue
            Write-Host "  + SUCCESS: Updated $credName2." -ForegroundColor Green
        }
    } else {
        Write-Host "  @ Creating new credential $credName2" -ForegroundColor Yellow
        Write-Host "  - Issuer: $issuer2" -ForegroundColor White
        Write-Host "  - Subject: $subject2" -ForegroundColor White

        $newCred2 | ConvertTo-Json | Out-File "$credName2.json" -Encoding UTF8
        az ad app federated-credential create --id $AppId --parameters "$credName2.json" | Out-Null
        Remove-Item "$credName2.json" -Force -ErrorAction SilentlyContinue
        Write-Host "  + SUCCESS: Created $credName2." -ForegroundColor Green
    }
    Write-Host ""
}

Write-Host "========================================================================================================" -ForegroundColor Cyan
Write-Host "                                         FINISHING                                                     " -ForegroundColor Yellow
Write-Host "========================================================================================================`n" -ForegroundColor Cyan

# ========================================
# Save Final Configuration
# ========================================
Write-Host "[1/3] Saving final configuration" -ForegroundColor Yellow

try {
    # Save config.json with all values from all phases
    $config | ConvertTo-Json -Depth 10 | Out-File -FilePath $ConfigPath -Encoding UTF8
    Write-Host "  + SUCCESS: config.json saved to: " -NoNewline -ForegroundColor Green
    Write-Host "$ConfigPath" -ForegroundColor Cyan
}
catch {
    Write-Host "  x ERROR: Failed to save config.json: $($_.Exception.Message)" -ForegroundColor Red
}

# ========================================
# Generate AssemblyInfo2.cs File
# ========================================
Write-Host "[2/3] Generating AssemblyInfo2.cs file" -ForegroundColor Yellow

$managedIdentityPath = Join-Path $ScriptDir "AssemblyInfo2.cs"

# Generate managed identity content
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
    Write-Host "  + SUCCESS: AssemblyInfo2.cs created successfully." -ForegroundColor Green
}
catch {
    Write-Host "[X] ERROR: Failed to create AssemblyInfo2.cs: $($_.Exception.Message)" -ForegroundColor Red
}

# --- 4. Cleanup any remaining temporary JSON files ---
Write-Host "[3/3] Cleaning up temporary files" -ForegroundColor Yellow
Get-ChildItem -Path $ScriptDir -Filter "*Issuer*.json" | Remove-Item -Force -ErrorAction SilentlyContinue
Write-Host "  + SUCCESS: Cleanup complete." -ForegroundColor Green

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
Write-Host "    - Private Key File: " -NoNewline -ForegroundColor White
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
Write-Host "    - AssemblyInfo2.cs: " -NoNewline -ForegroundColor White
Write-Host "assembly attribute file" -ForegroundColor Cyan
Write-Host ""

Write-Host "========================================================================================================" -ForegroundColor Cyan
Write-Host "                                         NEXT STEPS                                                     " -ForegroundColor Green
Write-Host "========================================================================================================`n" -ForegroundColor Cyan

Write-Host "1. Review the generated AssemblyInfo2.cs file." -ForegroundColor White
Write-Host "2. Include AssemblyInfo2.cs in your project." -ForegroundColor White
Write-Host "3. Deploy your plugin assembly to Power Platform use DynamicsCrm.DevKit.Cli." -ForegroundColor White
Write-Host "4. Test the managed identity integration." -ForegroundColor White
Write-Host ""
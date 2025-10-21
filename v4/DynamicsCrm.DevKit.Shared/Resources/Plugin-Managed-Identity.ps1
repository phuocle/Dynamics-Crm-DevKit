function Convert-GuidToBase64Url {
    param([string]$guid)
    $guidObj = [System.Guid]::Parse($guid)
    $bytes = $guidObj.ToByteArray()
    $base64 = [System.Convert]::ToBase64String($bytes)
    return $base64.Replace('+', '-').Replace('/', '_').TrimEnd('=')
}
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ConfigPath = Join-Path $ScriptDir "Plugin-Managed-Identity-Config.json"

if (-not (Test-Path $ConfigPath)) {
    Write-Host "========================================================================================================" -ForegroundColor Red
    Write-Host "[X] Plugin-Managed-Identity-Config.json not found" -ForegroundColor Red
    Write-Host "========================================================================================================`n" -ForegroundColor Red
    exit 1
}
else
{
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
    $requiredFields = @(
        'ResourceGroup', 'Location', 'KeyVaultName', 'SecretName', 'SecretValue', 'CertificateFileName', 'CertificatePassword', 'CertificateValidityYears'
    )
    foreach ($field in $requiredFields) {
        if (-not $config.$field -or $config.$field -eq '' -or $null -eq $config.$field) {
            $errors += "[X] $field is empty"
        }
    }
    if ($config.ManagedIdentities -and $config.ManagedIdentities.Count -gt 0) {
        $miFields = @(
            'EnvironmentId', 'AppName'
        )
        for ($i = 0; $i -lt $config.ManagedIdentities.Count; $i++) {
            $mi = $config.ManagedIdentities[$i]
            foreach ($field in $miFields) {
                if (-not $mi.$field -or $mi.$field -eq '' -or $null -eq $mi.$field) {
                    $errors += "[X] ManagedIdentities[$i].$field is empty"
                }
            }
        }
    } else {
        $errors += "[X] ManagedIdentities array is empty"
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
}

Write-Host "`n========================================================================================================" -ForegroundColor Cyan
Write-Host "                          DATAVERSE MANAGED IDENTITY SETUP" -ForegroundColor Green
Write-Host "========================================================================================================" -ForegroundColor Cyan

$TenantId = (az account show --output json | ConvertFrom-Json).tenantId
$resourceGroup = $config.ResourceGroup
$location = $config.Location
$keyVaultName = $config.KeyVaultName
$secretName = $config.SecretName
$secretValue = $config.SecretValue

# ========================================
# Step 1
# ========================================
Write-Host "[1] CHECKING RESOURCE GROUP" -ForegroundColor Blue
$existingRg = az group show --name $resourceGroup --output json 2>$null | ConvertFrom-Json
if ($existingRg) {
    Write-Host "  @ Resource group already exists." -ForegroundColor Yellow
    $rg = $existingRg
    Write-Host "  + SUCCESS: found resource group." -ForegroundColor Green
    Write-Host "    - Resource Group: " -NoNewline -ForegroundColor White
    Write-Host "$($rg.name)" -ForegroundColor Cyan
    Write-Host "    - Location: " -NoNewline -ForegroundColor White
    Write-Host "$($rg.location)" -ForegroundColor Cyan
} else {
    Write-Host "  @ Creating new resource group." -ForegroundColor Yellow
    $rg = az group create `
        --name $resourceGroup `
        --location $location `
        --output json | ConvertFrom-Json

    if ($rg) {
        Write-Host "  + SUCCESS: Resource group created." -ForegroundColor Green
        Write-Host "    - Resource Group: " -NoNewline -ForegroundColor White
        Write-Host "$($rg.name)" -ForegroundColor Cyan
        Write-Host "    - Location: " -NoNewline -ForegroundColor White
        Write-Host "$($rg.location)" -ForegroundColor Cyan
    } else {
        Write-Host "  x ERROR: Failed to create resource group" -ForegroundColor Red
        exit 1
    }
}
# ========================================
# Step 2
# ========================================
Write-Host "`n[2] CHECKING KEY VAULT" -ForegroundColor Blue
$existingKv = az keyvault show --name $keyVaultName --resource-group $resourceGroup --output json 2>$null | ConvertFrom-Json
if ($existingKv) {
    Write-Host "  @ Key Vault already exists." -ForegroundColor Yellow
    $kv = $existingKv
    Write-Host "  + SUCCESS: found key vault." -ForegroundColor Green
    Write-Host "    - Location: " -NoNewline -ForegroundColor White
    Write-Host "$($kv.location)" -ForegroundColor Cyan
    Write-Host "    - Vault Name: " -NoNewline -ForegroundColor White
    Write-Host "$($kv.name)" -ForegroundColor Cyan
    Write-Host "    - Vault URL: " -NoNewline -ForegroundColor White
    Write-Host "$($kv.properties.vaultUri)" -ForegroundColor Cyan
} else {
    $softDeletedKv = az keyvault list-deleted --query "[?name=='$keyVaultName']" --output json 2>$null | ConvertFrom-Json
    if ($null -ne $softDeletedKv -and $softDeletedKv.Count -gt 0) {
        Write-Host "  @ Found soft-deleted key vault - Recovering." -ForegroundColor Yellow
        $null = az keyvault recover --name $keyVaultName --output none 2>&1
        if ($LASTEXITCODE -eq 0) {
            $kv = az keyvault show --name $keyVaultName --output json 2>$null | ConvertFrom-Json
            if ($kv) {
                Write-Host "  + SUCCESS: Key Vault recovered." -ForegroundColor Green
                Write-Host "    - Location: " -NoNewline -ForegroundColor White
                Write-Host "$($softDeletedKv[0].location)" -ForegroundColor Cyan
                Write-Host "    - Vault URL: " -NoNewline -ForegroundColor White
                Write-Host "$($kv.properties.vaultUri)" -ForegroundColor Cyan
            }
        } else {
            Write-Host "  x ERROR: Failed to recover Key Vault" -ForegroundColor Red
            exit 1
        }
    } else {
        Write-Host "  @ Creating new key vault." -ForegroundColor Yellow
        $kv = az keyvault create `
            --name $keyVaultName `
            --resource-group $resourceGroup `
            --location $location `
            --enable-rbac-authorization false `
            --output json | ConvertFrom-Json

        if ($kv) {
            Write-Host "  + SUCCESS: Key Vault created." -ForegroundColor Green
            Write-Host "    - Location: " -NoNewline -ForegroundColor White
            Write-Host "$($kv.location)" -ForegroundColor Cyan
            Write-Host "    - Vault Name: " -NoNewline -ForegroundColor White
            Write-Host "$($kv.name)" -ForegroundColor Cyan
            Write-Host "    - Vault URL: " -NoNewline -ForegroundColor White
            Write-Host "$($kv.properties.vaultUri)" -ForegroundColor Cyan
        } else {
            Write-Host "  x ERROR: Failed to create Key Vault (name may not be globally unique)" -ForegroundColor Red
            exit 1
        }
    }
}
Write-Host "  @ Adding/Updating secret value." -ForegroundColor Yellow
$null = az keyvault secret show --vault-name $keyVaultName --name $secretName --output json 2>$null | ConvertFrom-Json
$secret = az keyvault secret set `
    --vault-name $keyVaultName `
    --name $secretName `
    --value $secretValue `
    --output json | ConvertFrom-Json
if ($secret) {
    Write-Host "  + SUCCESS: updated secret value." -ForegroundColor Green
    Write-Host "    - Name: " -NoNewline -ForegroundColor White
    Write-Host "$($secret.name)" -ForegroundColor Cyan
    Write-Host "    - Value: " -NoNewline -ForegroundColor White
    Write-Host "$($secret.value)" -ForegroundColor Cyan
} else {
    Write-Host "  x ERROR: Failed to configure secret" -ForegroundColor Red
    exit 1
}
# ========================================
# Step 3
# ========================================
Write-Host "`n[3] CHECKING AZURE AD APP REGISTRATION" -ForegroundColor Blue
for ($i = 0; $i -lt $config.ManagedIdentities.Count; $i++) {
    $mi = $config.ManagedIdentities[$i]
    $appName = $mi.AppName
    Write-Host "Processing AppName $appName" -ForegroundColor Red
    Write-Host "`  @ Checking App" -ForegroundColor Yellow
    $existingApp = az ad app list --display-name $appName --output json | ConvertFrom-Json
    if ($null -ne $existingApp -and $existingApp.Count -gt 0) {
        $appId = $existingApp[0].appId
        Write-Host "  + SUCCESS: App Registration exists." -ForegroundColor Green
    } else {
        $createdApp = az ad app create --display-name $appName --output json | ConvertFrom-Json
        $appId = $createdApp.appId
        Write-Host "  + SUCCESS:App Registration created." -ForegroundColor Green
    }
    Write-Host "    - App Name: " -NoNewline -ForegroundColor White
    Write-Host "$($appName)" -ForegroundColor Cyan
    Write-Host "    - App Id: " -NoNewline -ForegroundColor White
    Write-Host "$($appId)" -ForegroundColor Cyan
    $config.ManagedIdentities[$i].AppId = $appId

    Write-Host "  @ Checking Service Principal." -ForegroundColor Yellow
    $existingSp = az ad sp show --id $appId --output json 2>$null | ConvertFrom-Json
    if ($existingSp) {
        Write-Host "  + SUCCESS: Service Principal exists." -ForegroundColor Green
        $spId = $existingSp.id
    } else {
        $createdSp = az ad sp create --id $appId --output json | ConvertFrom-Json
        $spId = $createdSp.id
        Write-Host "  + SUCCESS: Service Principal created." -ForegroundColor Green
    }
    Write-Host "    - Service Principal Id: " -NoNewline -ForegroundColor White
    Write-Host "$($spId)" -ForegroundColor Cyan

    Write-Host "  @ Configuring App Access to Key Vault." -ForegroundColor Yellow
    $existingPolicy = az keyvault show --name $keyVaultName --resource-group $resourceGroup --query "properties.accessPolicies[?objectId=='$spId']" --output json 2>$null | ConvertFrom-Json
    if ($null -ne $existingPolicy -and $existingPolicy.Count -gt 0) {
        Write-Host "  + SUCCESS: Access policy exists for Service Principal." -ForegroundColor Green
    } else {
        az keyvault set-policy --name $keyVaultName --resource-group $resourceGroup --object-id $spId --secret-permissions get list set --certificate-permissions get list --output none
        Write-Host "  + SUCCESS: Access policy created for Service Principal." -ForegroundColor Green
    }
    Write-Host "    - Permissions: " -NoNewline -ForegroundColor White
    Write-Host "Get, List (Secrets)" -ForegroundColor Cyan
}
# ========================================
# Step 4
# ========================================
Write-Host "`n[4] SIGNING CERTIFICATE GENERATION" -ForegroundColor Blue
$certificatePassword = $config.CertificatePassword
$certificateSubject = "CN=$($config.CertificateFileName)"
$certificateFileName = $config.CertificateFileName
$validityYears = $config.CertificateValidityYears
if ((Test-Path "$certificateFileName.pfx") -and (Test-Path "$certificateFileName.cer")) {
    Write-Host "  @ Found existing .pfx and .cer files, re-using them." -ForegroundColor Yellow
    Write-Host "    - Private Key File: " -NoNewline -ForegroundColor White
    Write-Host "$certificateFileName.pfx" -ForegroundColor Cyan
    Write-Host "    - Public Key File: " -NoNewline -ForegroundColor White
    Write-Host "$certificateFileName.cer" -ForegroundColor Cyan
} else {
    Write-Host "  + CREATING SELF-SIGNED CODE SIGNING CERTIFICATE" -ForegroundColor DarkCyan
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
        Write-Host "    - Subject: " -NoNewline -ForegroundColor White
        Write-Host "$($cert.Subject)" -ForegroundColor Cyan
        Write-Host "    - Thumbprint: " -NoNewline -ForegroundColor White
        Write-Host "$($cert.Thumbprint)" -ForegroundColor Cyan
        Write-Host "    - Valid Until: " -NoNewline -ForegroundColor White
        Write-Host "$($cert.NotAfter.ToString('yyyy-MM-dd'))" -ForegroundColor Cyan
    }
    catch {
        Write-Host "  x ERROR: Failed to create self-signed certificate: $($_.Exception.Message)" -ForegroundColor Red
        exit 1
    }
    Write-Host "  + EXPORTING PRIVATE KEY (.pfx)" -ForegroundColor DarkCyan
    try {
        $securePwd = ConvertTo-SecureString -String $certificatePassword -Force -AsPlainText
        Export-PfxCertificate `
            -Cert $cert `
            -FilePath "$certificateFileName.pfx" `
            -Password $securePwd `
            -Force | Out-Null
        Write-Host "  @ Exporting new private key file." -ForegroundColor Yellow
        Write-Host "  + SUCCESS: exported new private key file." -ForegroundColor Green
        Write-Host "    - Private Key File: " -NoNewline -ForegroundColor White
        Write-Host "$certificateFileName.pfx" -ForegroundColor Cyan
    }
    catch {
        Write-Host "  x ERROR: Failed to create pfx: $($_.Exception.Message)" -ForegroundColor Red
        exit 1
    }
    Write-Host "  + EXPORTING PUBLIC KEY (.cer)" -ForegroundColor DarkCyan
    try {
        Export-Certificate `
            -Cert $cert `
            -FilePath "$certificateFileName.cer" `
            -Force | Out-Null
        Write-Host "  @ Exporting new public key file." -ForegroundColor Yellow
        Write-Host "  + SUCCESS: exported new public key file." -ForegroundColor Green
        Write-Host "    - Public Key File: " -NoNewline -ForegroundColor White
        Write-Host "$certificateFileName.cer" -ForegroundColor Cyan
    }
    catch {
        Write-Host "  x ERROR: Failed to create cer: $($_.Exception.Message)" -ForegroundColor Red
        exit 1
    }
    Write-Host "  + VERIFYING CERTIFICATE" -ForegroundColor DarkCyan
    try {
    $pfxPath = Join-Path -Path $PSScriptRoot -ChildPath "$certificateFileName.pfx"
    $pfxCert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($pfxPath, $certificatePassword, [System.Security.Cryptography.X509Certificates.X509KeyStorageFlags]::Exportable)
        if ($pfxCert) {
            Write-Host "  @ Found certificate to verify." -ForegroundColor Yellow
            Write-Host "  + SUCCESS: certificate verified successfully." -ForegroundColor Green
            Write-Host "    - Thumbprint: " -NoNewline -ForegroundColor White
            Write-Host "$($pfxCert.Thumbprint)" -ForegroundColor Cyan
            Write-Host "    - Has Private Key: " -NoNewline -ForegroundColor White
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
    Write-Host "  + REMOVING CERTIFICATE FROM WINDOWS CERTIFICATE STORE" -ForegroundColor DarkCyan
    try {
        Remove-Item "Cert:\CurrentUser\My\$($cert.Thumbprint)" -Force
        Write-Host "  @ Found certificate to remove." -ForegroundColor Yellow
        Write-Host "  + SUCCESS: certificate removed from store." -ForegroundColor Green
    }
    catch {
        Write-Host "  x ERROR: Could not remove certificate from store" -ForegroundColor Yellow
    }
    $config.CertificateThumbprint = $pfxCert.Thumbprint
    $certBytes = $pfxCert.Export([System.Security.Cryptography.X509Certificates.X509ContentType]::Cert)
    $sha256 = [System.Security.Cryptography.SHA256]::Create().ComputeHash($certBytes)
    $sha256Hash = [System.Convert]::ToBase64String($sha256).Replace('+', '-').Replace('/', '_').TrimEnd('=')
    $config.CertificateSHA256Hash = $sha256Hash
}
# ========================================
# Step 5
# ========================================
Write-Host "`n[5] POWER PLATFORM FEDERATED CREDENTIALS CONFIGURATION" -ForegroundColor Blue

$CertificateThumbprint =  $config.CertificateThumbprint
$CertificateFileName = $config.CertificateFileName
$CertificatePassword = $config.CertificatePassword

for ($i = 0; $i -lt $config.ManagedIdentities.Count; $i++) {

    $mi = $config.ManagedIdentities[$i]
    $AppName = $mi.AppName
    $AppId = $mi.AppId
    $EnvironmentId = $mi.EnvironmentId
    Write-Host "Processing AppName $AppName" -ForegroundColor Red
    $resolvedPfx = $null
    if (Test-Path $CertificateFileName) {
        $resolvedPfx = (Resolve-Path $CertificateFileName).ProviderPath
    } elseif (Test-Path (Join-Path -Path $PSScriptRoot -ChildPath $CertificateFileName)) {
        $resolvedPfx = (Resolve-Path (Join-Path -Path $PSScriptRoot -ChildPath $CertificateFileName)).ProviderPath
    } elseif (Test-Path (Join-Path -Path $PSScriptRoot -ChildPath "$CertificateFileName.pfx")) {
        $resolvedPfx = (Resolve-Path (Join-Path -Path $PSScriptRoot -ChildPath "$CertificateFileName.pfx")).ProviderPath
    } elseif (Test-Path "$CertificateFileName.pfx") {
        $resolvedPfx = (Resolve-Path "$CertificateFileName.pfx").ProviderPath
    }
    if (-not $resolvedPfx) {
        Write-Host "  x ERROR: Could not find certificate file for '$CertificateFileName'. Looked for $CertificateFileName and $CertificateFileName.pfx in script folder and given path." -ForegroundColor Red
        exit 1
    }
    try {
        $cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($resolvedPfx, $CertificatePassword)
    }
    catch {
        Write-Host "  x ERROR: Failed to load certificate file '$resolvedPfx': $($_.Exception.Message)" -ForegroundColor Red
        exit 1
    }
    try {
        $certBytes = $cert.Export([System.Security.Cryptography.X509Certificates.X509ContentType]::Cert)
        $sha256 = [System.Security.Cryptography.SHA256]::Create().ComputeHash($certBytes)
        $sha256Hash = [System.Convert]::ToBase64String($sha256).Replace('+', '-').Replace('/', '_').TrimEnd('=')
    }
    catch {
        Write-Host "  x ERROR: Failed to compute certificate hash: $($_.Exception.Message)" -ForegroundColor Red
        exit 1
    }
    $envIdNoHyphens = $EnvironmentId.Replace("-", "")
    $envIdPrefix = $envIdNoHyphens.Substring(0, $envIdNoHyphens.Length - 2)
    $envIdSuffix = $envIdNoHyphens.Substring($envIdNoHyphens.Length - 2)
    $issuer2 = "https://$envIdPrefix.$envIdSuffix.environment.api.powerplatform.com/sts"
    $subject2 = "component:pluginassembly,thumbprint:$($CertificateThumbprint),environment:$EnvironmentId"
    $credName2 = "PowerPlatform-Issuer"
    Write-Host "  @ Checking credential $credName2" -ForegroundColor Yellow
    $existingCred2 = az ad app federated-credential list --id $AppId --query "[?name=='$credName2']" | ConvertFrom-Json
    $newCred2 = @{
        name = $credName2
        issuer = $issuer2
        subject = $subject2
        description = "Power Platform Issuer - Authentication for Env $EnvironmentId"
        audiences = @("api://AzureADTokenExchange")
    }
    if ($existingCred2) {
        if ($existingCred2.issuer -eq $issuer2 -and $existingCred2.subject -eq $subject2) {
            Write-Host "  + SUCCESS: No updates needed for $credName2 (values match)." -ForegroundColor Green
        } else {
            Write-Host "  @ Updating $credName2 (values different)" -ForegroundColor Yellow
            Write-Host "    - Old Issuer: $($existingCred2.issuer)" -ForegroundColor DarkGray
            Write-Host "    - New Issuer: $issuer2" -ForegroundColor White
            Write-Host "    - Old Subject: $($existingCred2.subject)" -ForegroundColor DarkGray
            Write-Host "    - New Subject: $subject2" -ForegroundColor White
            az ad app federated-credential delete --id $AppId --federated-credential-id $existingCred2.id
            $newCred2 | ConvertTo-Json | Out-File "$credName2.json" -Encoding UTF8
            az ad app federated-credential create --id $AppId --parameters "$credName2.json" | Out-Null
            Remove-Item "$credName2.json" -Force -ErrorAction SilentlyContinue
            Write-Host "  + SUCCESS: Updated $credName2." -ForegroundColor Green
        }
    } else {
        Write-Host "  @ Creating new credential $credName2" -ForegroundColor Yellow
        Write-Host "    - Issuer: $issuer2" -ForegroundColor White
        Write-Host "    - Subject: $subject2" -ForegroundColor White
        $newCred2 | ConvertTo-Json | Out-File "$credName2.json" -Encoding UTF8
        az ad app federated-credential create --id $AppId --parameters "$credName2.json" | Out-Null
        Remove-Item "$credName2.json" -Force -ErrorAction SilentlyContinue
        Write-Host "  + SUCCESS: Created $credName2." -ForegroundColor Green
    }
}
# ========================================
# Step 6
# ========================================
Write-Host "`n[6] GENERATING ASSEMBLYINFO2.CS" -ForegroundColor Blue
$assemblyFilePath = Join-Path -Path $ScriptDir -ChildPath "AssemblyInfo2.cs"
$tenantId = if ($config.TenantId) { $config.TenantId } else { "" }
$applicationIds = @()
if ($config.ManagedIdentities -and $config.ManagedIdentities.Count -gt 0) {
    foreach ($mi in $config.ManagedIdentities) {
        if ($mi.AppId) { $applicationIds += $mi.AppId }
    }
}
$applicationIdsString = $applicationIds -join ','
$certificateFileOut = if ($config.CertificateFileName -and $config.CertificateFileName.ToLower().EndsWith('.pfx')) { $config.CertificateFileName } elseif ($config.CertificateFileName) { "$($config.CertificateFileName).pfx" } else { "" }
$certificatePasswordOut = if ($config.CertificatePassword) { $config.CertificatePassword } else { "" }
if (Test-Path $assemblyFilePath) {
    Write-Host "  @ Overwriting existing file: AssemblyInfo2.cs" -ForegroundColor Yellow
} else {
    Write-Host "  @ Creating file: AssemblyInfo2.cs" -ForegroundColor Yellow
}
$assemblyContent = @"
[assembly: DynamcisCrmDevKitPluginManagedIdentityAssembly(
    TenantId = "$tenantId",
    ApplicationIds = "$applicationIdsString",
    CertificateFile = "$certificateFileOut",
    CertificatePassword = "$certificatePasswordOut"
)]
"@
$assemblyContent | Out-File -FilePath $assemblyFilePath -Encoding UTF8 -Force
Write-Host "  + SUCCESS: Saved AssemblyInfo2.cs to: " -NoNewline -ForegroundColor Green
Write-Host $assemblyFilePath -ForegroundColor Cyan
# ========================================
# Step 7
# ========================================
Write-Host "`n[7] SAVING DATA" -ForegroundColor Blue
$config.TenantId = $TenantId
$config.KeyVaultURL = $kv.properties.vaultUri
try {
    $config | ConvertTo-Json -Depth 10 | Out-File -FilePath $ConfigPath -Encoding UTF8
    Write-Host " + SUCCESS: Saved Plugin-Managed-Identity-Config.json to: " -NoNewline -ForegroundColor Green
    Write-Host $ConfigPath -ForegroundColor Cyan
    Write-Host ""
}
catch {
    Write-Host " x ERROR: Failed to save Plugin-Managed-Identity-Config.json: $($_.Exception.Message)" -ForegroundColor Red
}
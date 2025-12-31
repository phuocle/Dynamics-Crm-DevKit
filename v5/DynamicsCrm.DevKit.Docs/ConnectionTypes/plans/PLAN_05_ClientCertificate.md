# Implementation Plan: ClientCertificate

**Priority**: 5  
**Status**: New Implementation  
**Timeline**: Week 4-5  
**Effort**: Medium-High  
**Dependencies**: X509Certificates, Azure.Identity

---

## Overview

Implement certificate-based authentication for production environments. Supports both file-based (.pfx) and Windows Certificate Store certificates.

## Reference Implementation (Rnwood)

```csharp
case PARAMSET_CLIENTCERTIFICATE:
{
    X509Certificate2 cert = LoadCertificate();
    
    var confidentialClient = ConfidentialClientApplicationBuilder
        .Create(ClientId.ToString())
        .WithCertificate(cert)
        .WithAuthority(AadAuthorityAudience.AzureAdMultipleOrgs)
        .Build();

    result = new ServiceClientWithTokenProvider(
        Url, 
        url => GetTokenWithClientCertificate(confidentialClient, url)
    );

    if (!string.IsNullOrEmpty(Name))
    {
        var store = new ConnectionStore();
        store.SaveConnection(Name, new ConnectionMetadata
        {
            Url = Url.ToString(),
            AuthMethod = "ClientCertificate",
            ClientId = ClientId.ToString(),
            CertificatePath = CertificatePath,
            CertificateThumbprint = CertificateThumbprint,
            SavedAt = DateTime.UtcNow
        });
    }
    break;
}

private X509Certificate2 LoadCertificate()
{
    // From thumbprint in store
    if (!string.IsNullOrEmpty(CertificateThumbprint))
    {
        using (X509Store store = new X509Store(CertificateStoreName, CertificateStoreLocation))
        {
            store.Open(OpenFlags.ReadOnly);
            X509Certificate2Collection certificates = store.Certificates.Find(
                X509FindType.FindByThumbprint,
                CertificateThumbprint,
                validOnly: false);

            if (certificates.Count == 0)
            {
                throw new InvalidOperationException(
                    $"Certificate with thumbprint '{CertificateThumbprint}' not found");
            }

            return certificates[0];
        }
    }
    // From file path
    else if (!string.IsNullOrEmpty(CertificatePath))
    {
        if (!File.Exists(CertificatePath))
        {
            throw new FileNotFoundException($"Certificate file not found: {CertificatePath}");
        }

        if (!string.IsNullOrEmpty(CertificatePassword))
        {
            return new X509Certificate2(CertificatePath, CertificatePassword);
        }
        else
        {
            return new X509Certificate2(CertificatePath);
        }
    }
    else
    {
        throw new InvalidOperationException(
            "Either CertificatePath or CertificateThumbprint must be provided");
    }
}
```

## Key Implementation Points

### 1. Certificate Sources

**File-based**:
```csharp
// With password
var cert = new X509Certificate2("C:\\certs\\app.pfx", "P@ssw0rd");

// Without password
var cert = new X509Certificate2("C:\\certs\\app.pfx");
```

**Store-based**:
```csharp
using (var store = new X509Store(StoreName.My, StoreLocation.CurrentUser))
{
    store.Open(OpenFlags.ReadOnly);
    var certs = store.Certificates.Find(
        X509FindType.FindByThumbprint,
        "ABC123DEF456...",
        validOnly: true  // Check expiration/validity
    );
    var cert = certs[0];
}
```

### 2. Certificate Validation

```csharp
public static (bool isValid, string error) ValidateCertificate(X509Certificate2 cert)
{
    // Check expiration
    if (cert.NotAfter < DateTime.Now)
    {
        return (false, $"Certificate expired on {cert.NotAfter}");
    }
    
    // Check not yet valid
    if (cert.NotBefore > DateTime.Now)
    {
        return (false, $"Certificate not yet valid (starts {cert.NotBefore})");
    }
    
    // Warn if expiring soon (30 days)
    if ((cert.NotAfter - DateTime.Now).TotalDays < 30)
    {
        var daysRemaining = (cert.NotAfter - DateTime.Now).TotalDays;
        // Log warning
    }
    
    // Check has private key
    if (!cert.HasPrivateKey)
    {
        return (false, "Certificate does not have a private key");
    }
    
    return (true, null);
}
```

### 3. CLI Usage

```powershell
# File-based
DynamicsCrm.DevKit.Cli `
  /auth:ClientCertificate `
  /url:"https://org.crm.dynamics.com" `
  /clientid:"12345678-1234-1234-1234-123456789012" `
  /cert:"C:\certs\app.pfx" `
  /certpass:"P@ssw0rd" `
  /json:"..." /type:servers /profile:prod

# Store-based
DynamicsCrm.DevKit.Cli `
  /auth:ClientCertificate `
  /url:"https://org.crm.dynamics.com" `
  /clientid:"12345678-1234-1234-1234-123456789012" `
  /certthumb:"ABC123DEF456..." `
  /certstorelocation:CurrentUser `
  /certstorename:My `
  /json:"..." /type:servers /profile:prod
```

### 4. VSIX Form

Add certificate selection UI:
```xml
<RadioButton x:Name="radioCertFile" Content="Certificate File (.pfx)" GroupName="CertSource"/>
<TextBox x:Name="textboxCertPath" IsEnabled="{Binding IsChecked, ElementName=radioCertFile}"/>
<Button Content="Browse..." Click="BrowseCertificate_Click"/>
<PasswordBox x:Name="textboxCertPassword" IsEnabled="{Binding IsChecked, ElementName=radioCertFile}"/>

<RadioButton x:Name="radioCertStore" Content="Certificate Store" GroupName="CertSource"/>
<TextBox x:Name="textboxCertThumbprint" IsEnabled="{Binding IsChecked, ElementName=radioCertStore}"/>
<ComboBox x:Name="comboStoreLocation" IsEnabled="{Binding IsChecked, ElementName=radioCertStore}">
    <ComboBoxItem>CurrentUser</ComboBoxItem>
    <ComboBoxItem>LocalMachine</ComboBoxItem>
</ComboBox>
<ComboBox x:Name="comboStoreName" IsEnabled="{Binding IsChecked, ElementName=radioCertStore}">
    <ComboBoxItem>My</ComboBoxItem>
    <ComboBoxItem>Root</ComboBoxItem>
</ComboBox>
```

### 5. Security Best Practices

- Never commit certificate files to source control
- Use certificate stores in production
- Set file permissions restrictively (read-only for service account)
- Enable certificate chain validation
- Monitor certificate expiration (alert 30 days before)
- Implement certificate rotation process

## Azure AD App Registration for Certificates

```powershell
# Create self-signed certificate for testing
$cert = New-SelfSignedCertificate `
    -Subject "CN=DynamicsCrmDevKit" `
    -CertStoreLocation "Cert:\CurrentUser\My" `
    -KeySpec KeyExchange `
    -NotAfter (Get-Date).AddYears(2)

# Export certificate
$certPath = "C:\certs\devkit.pfx"
$password = ConvertTo-SecureString -String "P@ssw0rd" -Force -AsPlainText
Export-PfxCertificate -Cert $cert -FilePath $certPath -Password $password

# Upload to Azure AD
# Azure Portal ΓåÆ App registrations ΓåÆ Your app ΓåÆ Certificates & secrets
# Upload .cer file (public key only)
```

## Success Criteria

- [ ] Load certificate from .pfx file
- [ ] Load certificate from Windows Certificate Store
- [ ] Certificate validation (expiration, private key)
- [ ] Certificate expiration warnings
- [ ] Azure AD integration tested
- [ ] CLI file-based auth works
- [ ] CLI store-based auth works
- [ ] VSIX certificate selection works
- [ ] Security best practices documented

---

**Document Version**: 1.0  
**Last Updated**: 2025-12-13

## Testing

### Option 1: Automated Testing (AI-Guided Unit Tests)

**Test File**: `v4/DynamicsCrm.DevKit.Shared.Tests/ClientCertificateConnectionTests.cs`

AI Prompt:
```
Create unit tests for ClientCertificate connection:

1. Certificate Loading Tests:
   - LoadCertificate from file (.pfx)
   - LoadCertificate from Windows Certificate Store
   - LoadCertificate with password
   - LoadCertificate without password
   - LoadCertificate not found (should throw)

2. Certificate Validation Tests:
   - ValidateCertificate with valid cert
   - ValidateCertificate with expired cert
   - ValidateCertificate without private key
   - ValidateCertificate near expiry (30 days)

3. Connection String Tests:
   - BuildConnectionString with file path
   - BuildConnectionString with thumbprint
   - BuildConnectionString with store location/name

Mock: X509Store, X509Certificate2
```

**Example Test**:
```csharp
[TestMethod]
public void ValidateCertificate_ExpiredCert_ReturnsFalse()
{
    // Arrange
    var expiredCert = new X509Certificate2();
    // Set NotAfter to past date

    // Act
    var (isValid, error) = Helper.ValidateCertificate(expiredCert);

    // Assert
    Assert.IsFalse(isValid);
    Assert.IsTrue(error.Contains("expired"));
}
```

---

### Option 2: Manual Testing (Step-by-Step Guide)

#### Test Scenario 1: Create Test Certificate

**Step 1.1**: Generate self-signed certificate
```powershell
$cert = New-SelfSignedCertificate `
    -Subject "CN=DynamicsCrmDevKit Test" `
    -CertStoreLocation "Cert:\CurrentUser\My" `
    -KeySpec KeyExchange `
    -NotAfter (Get-Date).AddYears(2)

# Note the thumbprint
$cert.Thumbprint
```

**Expected Result**: Γ£à Certificate created in Personal store

**Step 1.2**: Export certificate to file
```powershell
$certPath = "C:\temp\devkit-test.pfx"
$password = ConvertTo-SecureString -String "P@ssw0rd" -Force -AsPlainText
Export-PfxCertificate -Cert $cert -FilePath $certPath -Password $password
```

**Expected Result**: Γ£à .pfx file created

---

#### Test Scenario 2: Azure AD App with Certificate

**Step 2.1**: Upload certificate to Azure AD
1. Azure Portal ΓåÆ App registrations ΓåÆ Your app
2. Certificates & secrets ΓåÆ Certificates tab
3. Upload certificate (.cer file - public key only)

**Step 2.2**: Configure app permissions
1. API permissions ΓåÆ Add "Dynamics CRM" / "user_impersonation"
2. Grant admin consent

---

#### Test Scenario 3: Connection with Certificate File

**Step 3.1**: Create connection in VSIX
1. Type: `ClientCertificate`
2. Select "Certificate File" option
3. Browse to .pfx file
4. Enter password
5. Enter ClientId
6. Click "Test Connection"

**Expected Result**: Γ£à Authentication succeeds (no browser)

---

#### Test Scenario 4: Connection with Certificate Store

**Step 4.1**: Verify certificate in store
```powershell
Get-ChildItem Cert:\CurrentUser\My | Where-Object {$_.Subject -like "*DynamicsCrmDevKit*"}
```

**Step 4.2**: Create connection with thumbprint
1. Type: `ClientCertificate`
2. Select "Certificate Store" option
3. Enter thumbprint (from Step 1.1)
4. Store Location: `CurrentUser`
5. Store Name: `My`
6. Click "Test Connection"

**Expected Result**: Γ£à Authentication succeeds

---

#### Test Scenario 5: Certificate Validation

**Step 5.1**: Test with expired certificate
1. Create expired certificate (NotAfter in past)
2. Try to create connection

**Expected Result**: Γ£à Error: "Certificate expired on [date]"

**Step 5.2**: Test without private key
1. Export certificate without private key
2. Try to load

**Expected Result**: Γ£à Error: "Certificate does not have a private key"

---

#### Test Scenario 6: CLI with Certificate

**Step 6.1**: Test with file
```powershell
DynamicsCrm.DevKit.Cli `
  /auth:ClientCertificate `
  /url:"https://test.crm.dynamics.com" `
  /clientid:"app-guid" `
  /cert:"C:\temp\devkit-test.pfx" `
  /certpass:"P@ssw0rd" `
  /json:"..." /type:servers /profile:prod
```

**Expected Result**: Γ£à Authentication succeeds

**Step 6.2**: Test with thumbprint
```powershell
DynamicsCrm.DevKit.Cli `
  /auth:ClientCertificate `
  /url:"https://test.crm.dynamics.com" `
  /clientid:"app-guid" `
  /certthumb:"ABC123..." `
  /certstorelocation:CurrentUser `
  /certstorename:My `
  /json:"..." /type:servers /profile:prod
```

**Expected Result**: Γ£à Authentication succeeds

---

#### Manual Testing Checklist

- [ ] **Certificate creation**: Test cert created
- [ ] **File export**: .pfx file created with password
- [ ] **Store installation**: Cert in Windows store
- [ ] **Azure AD**: Cert uploaded to app registration
- [ ] **File-based auth**: Connection with .pfx works
- [ ] **Store-based auth**: Connection with thumbprint works
- [ ] **Expiry validation**: Expired cert rejected
- [ ] **Private key**: Cert without key rejected
- [ ] **Expiry warning**: Warning shown <30 days
- [ ] **CLI file**: File-based CLI auth works
- [ ] **CLI store**: Store-based CLI auth works
- [ ] **Production**: Works in Azure/production

---

**Document Version**: 1.1  
**Last Updated**: 2025-12-13

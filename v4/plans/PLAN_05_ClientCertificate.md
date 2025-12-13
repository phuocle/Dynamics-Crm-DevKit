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
# Azure Portal → App registrations → Your app → Certificates & secrets
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

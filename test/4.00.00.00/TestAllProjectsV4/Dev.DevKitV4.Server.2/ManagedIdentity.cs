using Dev.DevKitV4.Shared;
using System;

[assembly: DynamcisCrmDevkitAssembly(
    IsolationMode = IsolationModeEnum.Sandbox,
    SourceType = SourceTypeEnum.Database,
    TenantId = "49528483-b79b-4b88-b86e-7d882ba68911",
    ApplicationId = "f49d2938-52bb-4900-8541-a8ef19ea2cf9",
    CertificatePath = "@{AppName=DynamicsCrmDevKitManagedIdentity; ResourceGroup=DevKit; Location=eastus; KeyVaultName=kv-dataverse-secrets; SecretName=MySecret; SecretValue=MySecretValue123!; CertificatePassword=CertificatePassword123!; CertificateSubject=CN=DynamicsCrmDevKitManagedIdentity; CertificateFileName=ManagedIdentity; ValidityYears=20; EnvironmentId=System.Object[]; OrganizationId=System.Object[]; TenantId=49528483-b79b-4b88-b86e-7d882ba68911; AppId=f49d2938-52bb-4900-8541-a8ef19ea2cf9; KeyVaultURL=https://kv-dataverse-secrets.vault.azure.net/; CertificatePath=ManagedIdentity.pfx; CertificateThumbprint=A40FE5AB76787B6EF57FE80DEC9ABC6EB979B456; CertificateSHA256Hash=WliP-SOGBAZjLU4sAOMZahFXbFIJcAr0jOqREZw5QnM}.CertificatePath",
    CertificatePassword = "CertificatePassword123!",
    CredentialSource = CredentialSource.IsManaged,
    SubjectScope = SubjectScope.EnvironmentScope
)]

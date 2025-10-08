using System;

[assembly: DynamicsCrmDevkitAssembly(
    IsolationMode = IsolationModeEnum.Sandbox,
    SourceType = SourceTypeEnum.Database,
    TenantId = "49528483-b79b-4b88-b86e-7d882ba68911",
    ApplicationId = "e4af0fad-3754-454b-b1df-8c5fae32e311",
    CertificatePath = "@{AppName=DynamicsCrmDevKitManagedIdentity; ResourceGroup=DevKit; Location=eastus; KeyVaultName=kv-dataverse-secrets; SecretName=MySecret; SecretValue=MySecretValue123!; CertificatePassword=CertificatePassword123!; CertificateSubject=CN=DynamicsCrmDevKitManagedIdentity; CertificateFileName=ManagedIdentity; ValidityYears=20; EnvironmentId=System.Object[]; OrganizationId=System.Object[]; TenantId=49528483-b79b-4b88-b86e-7d882ba68911; AppId=e4af0fad-3754-454b-b1df-8c5fae32e311; KeyVaultURL=https://kv-dataverse-secrets.vault.azure.net/; CertificatePath=ManagedIdentity.pfx; CertificateThumbprint=CD6645CFFD34A8993EDD7DF82FD3CDAE6D0F1AAF; CertificateSHA256Hash=BLvGPIViXI3KOG9Q057xMKunWRpdo3xkRxhaW9x3eaI}.CertificatePath",
    CertificatePassword = "CertificatePassword123!",
    CredentialSource = CredentialSource.IsManaged,
    SubjectScope = SubjectScope.EnvironmentScope
)]

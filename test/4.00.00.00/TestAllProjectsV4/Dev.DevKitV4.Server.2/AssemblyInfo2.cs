using Dev.DevKitV4.Shared;
using System;

[assembly: DynamcisCrmDevkitAssembly(
    IsolationMode = IsolationModeEnum.Sandbox,
    SourceType = SourceTypeEnum.Database,
    TenantId = "49528483-b79b-4b88-b86e-7d882ba68911",
    ApplicationId = "6f21e8f8-f0d0-4409-a7a5-1e5e9b2f2ed9",
    CertificatePath = "ManagedIdentity.pfx",
    CertificatePassword = "!CertificatePassword123!",
    CredentialSource = CredentialSource.IsManaged,
    SubjectScope = SubjectScope.EnvironmentScope
)]

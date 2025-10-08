using System;

[assembly: DynamicsCrmDevkitAssembly(
    IsolationMode = IsolationModeEnum.Sandbox,
    SourceType = SourceTypeEnum.Database,
    TenantId = "49528483-b79b-4b88-b86e-7d882ba68911",
    ApplicationId = "c96568b0-ea89-4a84-a475-b95a10042393",
    CertificatePath = "ManagedIdentity.pfx",
    CertificatePassword = "CertificatePassword123!",
    CredentialSource = CredentialSource.IsManaged,
    SubjectScope = SubjectScope.EnvironmentScope
)]

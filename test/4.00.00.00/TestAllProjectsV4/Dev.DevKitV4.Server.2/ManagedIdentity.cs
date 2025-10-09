using System;

[assembly: DynamicsCrmDevkitAssembly(
    IsolationMode = IsolationModeEnum.Sandbox,
    SourceType = SourceTypeEnum.Database,
    TenantId = "49528483-b79b-4b88-b86e-7d882ba68911",
    ApplicationId = "b2bf74e4-607d-4738-94df-3860d9cca940",
    CertificatePath = "ManagedIdentity.pfx",
    CertificatePassword = "CertificatePassword123!",
    CredentialSource = CredentialSource.IsManaged,
    SubjectScope = SubjectScope.EnvironmentScope
)]

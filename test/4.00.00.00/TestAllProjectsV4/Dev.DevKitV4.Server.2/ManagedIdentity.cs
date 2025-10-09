using System;

[assembly: DynamicsCrmDevkitAssembly(
    IsolationMode = IsolationModeEnum.Sandbox,
    SourceType = SourceTypeEnum.Database,
    TenantId = "49528483-b79b-4b88-b86e-7d882ba68911",
    ApplicationId = "f8fa4024-cebb-4c4d-8926-d9ddbba43654",
    CertificatePath = "ManagedIdentity.pfx",
    CertificatePassword = "!CertificatePassword123!",
    CredentialSource = CredentialSource.IsManaged,
    SubjectScope = SubjectScope.EnvironmentScope
)]

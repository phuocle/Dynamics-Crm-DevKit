using System;

[assembly: DynamicsCrmDevkitAssembly(
    IsolationMode = IsolationModeEnum.Sandbox,
    SourceType = SourceTypeEnum.Database,
    TenantId = "49528483-b79b-4b88-b86e-7d882ba68911",
    ApplicationId = "c7477d59-0d76-47bc-a235-0d31b89831ff",
    CertificatePath = "ManagedIdentity.pfx",
    CertificatePassword = "CertificatePassword123!",
    CredentialSource = CredentialSource.IsManaged,
    SubjectScope = SubjectScope.EnvironmentScope
)]

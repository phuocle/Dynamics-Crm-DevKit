using Dev.DevKitV4.Shared;
using System;

[assembly: DynamcisCrmDevkitAssembly(
    IsolationMode = IsolationModeEnum.Sandbox,
    SourceType = SourceTypeEnum.Database,
    TenantId = "49528483-b79b-4b88-b86e-7d882ba68911",
    ApplicationId = "8abd7e92-86e1-4660-8407-0170eb81500c",
    CertificatePath = "ManagedIdentity.pfx",
    CertificatePassword = "!CertificatePassword123!",
    CredentialSource = CredentialSource.IsManaged,
    SubjectScope = SubjectScope.EnvironmentScope
)]

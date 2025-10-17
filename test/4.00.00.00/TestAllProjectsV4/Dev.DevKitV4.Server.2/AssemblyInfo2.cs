using Dev.DevKitV4.Shared;

[assembly: DynamcisCrmDevKitPluginAssembly(
    IsolationMode = IsolationModeEnum.Sandbox,
    SourceType = SourceTypeEnum.Database
)]

[assembly: DynamcisCrmDevKitManagedIdentityAssembly(
    TenantId = "49528483-b79b-4b88-b86e-7d882ba68911",
    ApplicationIds = "14a7bd40-7912-4c9f-98be-ac7054bac183,16f66ce7-067f-4228-97a8-d61c3163de05",
    CertificateFile = "DEVKITV4-2-ManagedIdentity.pfx",
    CertificatePassword = "DEVKITV4-2-ManagedIdentity"
)]
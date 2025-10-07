using System;
using System.Diagnostics;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public enum ManagedIdentityCredentialSource
    {
        EntraIdApplication = 2,
        UserAssignedManagedIdentity = 3
    }

    public enum ManagedIdentitySubjectScope
    {
        Environment = 1,
        Organization = 2
    }

    public enum AzureCloudEnvironment
    {
        Public,
        GCC,
        GCCHigh,
        China,
        USNat,
        USSec
    }

    [DebuggerNonUserCode()]
    [AttributeUsage(AttributeTargets.Assembly, Inherited = false, AllowMultiple = false)]
    public class DynamcisCrmDevkitAssemblyAttribute : Attribute
    {
        public string ApplicationId { get; set; }
        public string TenantId { get; set; }
        public ManagedIdentityCredentialSource CredentialSource { get; set; } = ManagedIdentityCredentialSource.EntraIdApplication;
        public ManagedIdentitySubjectScope SubjectScope { get; set; } = ManagedIdentitySubjectScope.Environment;
        public string CertificatePath { get; set; } = string.Empty;
        public string CertificatePassword { get; set; } = string.Empty;
        public AzureCloudEnvironment CloudEnvironment { get; set; } = AzureCloudEnvironment.Public;
        public IsolationModeEnum IsolationMode { get; set; } = IsolationModeEnum.Sandbox;
        public SourceTypeEnum SourceType { get; set; } = SourceTypeEnum.Database;
    }
}

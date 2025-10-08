using System;
using System.Diagnostics;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public enum CredentialSource
    {
        ClientSecret = 0,
        KeyVault = 1,
        IsManaged = 2,
        MicrosoftFirstPartyCertificate = 3
    }

    public enum SubjectScope
    {
        GlobalScope = 0,
        EnviornmentScope = 1,
        DevOnlyScope = 2
    }

    [DebuggerNonUserCode()]
    [AttributeUsage(AttributeTargets.Assembly, Inherited = false, AllowMultiple = false)]
    public class DynamcisCrmDevkitAssemblyAttribute : Attribute
    {
        public string ApplicationId { get; set; }
        public string TenantId { get; set; }
        public CredentialSource CredentialSource { get; set; } = CredentialSource.IsManaged;
        public SubjectScope SubjectScope { get; set; } = SubjectScope.GlobalScope;
        public string CertificatePath { get; set; } = string.Empty;
        public string CertificatePassword { get; set; } = string.Empty;
        public IsolationModeEnum IsolationMode { get; set; } = IsolationModeEnum.Sandbox;
        public SourceTypeEnum SourceType { get; set; } = SourceTypeEnum.Database;
    }
}

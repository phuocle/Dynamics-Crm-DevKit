using System;
using System.Diagnostics;

namespace DynamicsCrm.DevKit.Shared.Models
{

    [DebuggerNonUserCode()]
    public class DynamcisCrmDevkitAssemblyAttribute : Attribute
    {
        public string TenantId { get; set; }
        public IsolationModeEnum IsolationMode { get; set; } = IsolationModeEnum.Sandbox;
        public SourceTypeEnum SourceType { get; set; } = SourceTypeEnum.Database;
        public string CertificatePath { get; set; }
        public string CertificatePassword { get; set; }
        public string ApplicationIds { get; set; } = string.Empty;
    }
}

using System;
using System.Diagnostics;

namespace DynamicsCrm.DevKit.Shared.Models
{

    [DebuggerNonUserCode()]
    [AttributeUsage(AttributeTargets.Assembly, Inherited = false, AllowMultiple = false)]
    public class DynamcisCrmDevKitManagedIdentityAssemblyAttribute : Attribute
    {
        public string TenantId { get; set; }
        public string CertificateFile { get; set; }
        public string CertificatePassword { get; set; }
        public string ApplicationIds { get; set; } = string.Empty;
    }
}

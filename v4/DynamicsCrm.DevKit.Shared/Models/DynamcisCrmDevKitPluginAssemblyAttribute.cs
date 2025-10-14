using System;
using System.Diagnostics;

namespace DynamicsCrm.DevKit.Shared.Models
{
    [DebuggerNonUserCode()]
    [AttributeUsage(AttributeTargets.Assembly, Inherited = false, AllowMultiple = false)]
    public class DynamcisCrmDevKitPluginAssemblyAttribute : Attribute
    {
        public IsolationModeEnum IsolationMode { get; set; } = IsolationModeEnum.Sandbox;
        public SourceTypeEnum SourceType { get; set; } = SourceTypeEnum.Database;
    }
}

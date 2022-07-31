using System;
using System.Runtime.Serialization;

namespace DynamicsCrm.DevKit.Shared.Models
{
    [DataContract]
    public class DeployWebResource
    {
        [DataMember(Order = 1)]
        public string FullFileName { get; set; }
        [DataMember(Order = 2)]
        public string WebResourceName { get; set; }
        public Guid WebResourceId { get; set; }
        public bool IsManaged { get; set; } = false;
        public string DisplayWebResourceName => WebResourceName + (IsManaged ? " [managed]" : "");
    }
}

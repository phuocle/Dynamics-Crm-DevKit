using System;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class DeployWebResource
    {
        public string FullFileName { get; set; }
        public Guid WebResourceId { get; set; }
        public string WebResourceName { get; set; }
        public string Profile { get; set; }
    }
}

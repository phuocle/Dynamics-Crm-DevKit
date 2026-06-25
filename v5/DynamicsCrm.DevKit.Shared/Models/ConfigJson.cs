using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class ConfigJson
    {
        public List<DeployWebResource> WebResources { get; set; } = new List<DeployWebResource>();
        public List<DeployReport> Reports { get; set; } = new List<DeployReport>();
        public List<CustomTemplate> CustomTemplates { get; set; } = new List<CustomTemplate> { };
    }
}

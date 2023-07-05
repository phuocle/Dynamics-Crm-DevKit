using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.Models
{

    public class CachedJson
    {
        public List<DeployWebResource> WebResources { get; set; }
        public string Plugin { get; set; }
        public string Workflow { get; set; }
        public string CustomAction { get; set; }
        public string CustomApi { get; set; }
    }
}

using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.Models
{

    public class CachedJson
    {
        public List<DeployWebResource> WebResources { get; set; } = new List<DeployWebResource>();
        public List<CustomTemplate> CustomTemplates { get; set; } = new List<CustomTemplate> { };
        //public string Plugin { get; set; }
        //public string Workflow { get; set; }
        //public string CustomAction { get; set; }
        //public string CustomApi { get; set; }
        //public string UiTest { get; set; }
        //public string DataProviderCreate { get; set; }
        //public string DataProviderUpdate { get; set; }
        //public string DataProviderDelete { get; set; }
        //public string DataProviderRetrieve { get; set; }
        //public string DataProviderRetrieveMultiple { get; set; }
        //public string TestPlugin { get; set; }
        //public string TestWorkflow { get; set; }
        //public string TestCustomAction { get; set; }
        //public string TestCustomApi { get; set; }
        //public string TestDataProvider { get; set; }
    }
}

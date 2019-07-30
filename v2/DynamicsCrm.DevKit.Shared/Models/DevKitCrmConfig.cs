using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class DevKitCrmConfig
    {
        public string DefaultCrmName { get; set; }
        public string DefaultCrmConnection { get; set; }
        //public string SolutionPrefix { get; set; }
        public List<CrmConnection> CrmConnections { get; set; }
    }
}

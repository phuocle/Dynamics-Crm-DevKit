using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class DevKitCrmConfig
    {
        public string DefaultCrmConnection { get; set; }
        public List<CrmConnection> CrmConnections { get; set; }
    }
}

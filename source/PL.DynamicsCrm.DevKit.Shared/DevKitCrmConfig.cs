using PL.DynamicsCrm.DevKit.Shared.Xrm;
using System.Collections.Generic;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public class DevKitCrmConfig
    {
        public string DefaultCrmVersion { get; set; }
        public string DefaultNetVersion { get; set; }
        public string DefaultCrmConnection { get; set; }
        public string SolutionPrefix { get; set; }
        public List<CrmConnection> CrmConnections { get; set; }
    }
}

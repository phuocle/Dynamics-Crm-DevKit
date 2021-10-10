using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Shared.CliTasks
{
    public class CliTask
    {
        public CrmServiceClient Service { get; set; }

        public CliTask(CrmServiceClient service)
        {
            Service = service;
        }
    }
}

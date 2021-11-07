using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    internal interface ITask
    {
        string CurrentDirectory { get; set; }
        CrmServiceClient CrmServiceClient { get; set; }
        void Run();
    }
}

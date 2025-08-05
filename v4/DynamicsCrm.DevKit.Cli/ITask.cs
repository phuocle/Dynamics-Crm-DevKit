using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Cli
{
    internal interface ITask
    {
        string CurrentDirectory { get; set; }
        string TaskType { get; }
        CrmServiceClient CrmServiceClient { get; set; }
        CommandLineArgs Arg { get; set; }
        void Run();
        bool IsValid();
    }
}

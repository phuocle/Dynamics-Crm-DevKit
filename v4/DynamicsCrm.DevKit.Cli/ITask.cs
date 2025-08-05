using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;

namespace DynamicsCrm.DevKit.Cli
{
    internal interface ITask
    {
        string CurrentDirectory { get; set; }
        string TaskType { get; }
        ServiceClient CrmServiceClient { get; set; }
        CommandLineArgs Arg { get; set; }
        void Run();
        bool IsValid();
    }
}

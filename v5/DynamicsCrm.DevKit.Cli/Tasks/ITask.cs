using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli
{
    internal interface ITask
    {
        string CurrentDirectory { get; set; }
        string TaskType { get; }
        IOrganizationServiceAsync2 OrgServiceAsync { get; set; }
        CommandLineArgs Arg { get; set; }
        Task RunAsync();
        Task<bool> IsValidAsync();
        bool IsOk { get; set; }
        Guid SolutionId { get; set; }
        string SolutionPrefix { get; set; }
    }
}

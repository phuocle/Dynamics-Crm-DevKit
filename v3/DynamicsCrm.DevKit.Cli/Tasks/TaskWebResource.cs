using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using System;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskWebResource : ITask
    {
        public TaskWebResource(CommandLineArgs arg, JsonWebResource json)
        {
            this.Arg = arg;
            this.json = json;
            CrmServiceClient = arg.CrmServiceClient;
            CurrentDirectory = arg.CurrentDirectory;
        }
        public string CurrentDirectory { get; set; }
        public string TaskType => $"[{nameof(CliType.webresources).ToUpper()}]";
        public CrmServiceClient CrmServiceClient { get; set; }
        public CommandLineArgs Arg { get; set; }
        private JsonWebResource json { get; set; }
        public bool IsValid()
        {
            return true;
        }
        public void Run()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ", ConsoleColor.Blue, TaskType);
            CliLog.WriteLine(ConsoleColor.White, "|");

            if (IsValid())
            {

            }

            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ", ConsoleColor.Blue, TaskType);
        }
    }
}

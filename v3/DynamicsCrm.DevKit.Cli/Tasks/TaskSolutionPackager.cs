using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskSolutionPackager : ITask
    {
        public TaskSolutionPackager(CommandLineArgs arg, JsonSolutionPackager json)
        {
            this.Arg = arg;
            this.json = json;
        }
        public CommandLineArgs Arg { get; set; }
        private JsonSolutionPackager json { get; set; }


        public string CurrentDirectory { get; set; }

        public string TaskType => $"[{nameof(CliType.solutionpackagers).ToUpper()}]";

        public CrmServiceClient CrmServiceClient { get; set; }

        public bool IsValid()
        {
            return true;
        }

        public void Run()
        {

        }
    }
}

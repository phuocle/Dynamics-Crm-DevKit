using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    internal class TaskEarlyBound(CommandLineArgs arg, JsonEarlyBound json) : ITask
    {
        public CommandLineArgs Arg { get; set; } = arg;

        private JsonEarlyBound Json { get; set; } = json;

        public string CurrentDirectory { get; set; } = arg.CurrentDirectory;

        public ServiceClient ServiceClient { get; set; } = arg.ServiceClient;

        public string TaskType { get; set; } = $"[{nameof(CliType.earlybound).ToUpper()}";

        public bool IsOk { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public Guid SolutionId { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string SolutionPrefix { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public async Task<bool> IsValidAsync()
        {
            if (Json == null)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'profile' not found: '{Json.profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.rootnamespace == "???" || (Json.rootnamespace != null && Json?.rootnamespace?.Trim().Length == 0))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'rootnamespace' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.rootfolder == "???")
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"{TaskType} 'rootfolder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            await Helper.DelayAsync(1);
            return true;
        }

        public async Task RunAsync()
        {
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "START ");
            CliLog.WriteLine(ConsoleColor.White, "|");

            if (await IsValidAsync())
            {
                //CODE HERE
            }

            CliLog.WriteLine(ConsoleColor.White, "|");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "END ");
        }
    }
}

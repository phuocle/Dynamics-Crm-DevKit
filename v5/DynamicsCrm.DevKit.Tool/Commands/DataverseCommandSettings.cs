using DynamicsCrm.DevKit.Tool.Lib;
using System.ComponentModel;
using Spectre.Console.Cli;

namespace DynamicsCrm.DevKit.Tool.Commands
{
    internal abstract class DataverseCommandSettings : CommandSettings
    {
        private string connection;

        [CommandOption("--conn <CONNECTION>")]
        [Description("Dataverse connection string; overrides DEVKIT_* environment variables")]
        public string Connection
        {
            get => connection;
            set => connection = value;
        }

        internal bool HasConnectionConfiguration =>
            !string.IsNullOrWhiteSpace(Connection) || ToolConnectionEnvironment.HasValues();

        internal string ExplicitConnection => Connection;
    }
}

using CmdLine;

namespace DynamicsCrm.DevKit.Tool.Args
{
    internal class DocumentGeneratorArgs
    {
        [CommandLineParameter(Command = "type", Name = "Type", Required = true, Description = "DocumentGenerator type task.")]
        public string Type { get; set; }

        [CommandLineParameter(Command = "conn", Name = "ConnectionString", Required = true, Description = "Dataverse connection string.")]
        public string ConnectionString { get; set; }

        [CommandLineParameter(Command = "input", Name = "Input", Required = true, Description = "Input JSON: {'Folder':'...', 'Solution':'...'}")]
        public string Input { get; set; }
    }
}

using CmdLine;

namespace DynamicsCrm.DevKit.Tool.Args
{
    class NUglifyArgs
    {
        [CommandLineParameter(Command = "type", Name = "Type", Required = true, Description = "NUglify Type task. Supported: html, css, js")]
        public string Type { get; set; }

        [CommandLineParameter(Command = "source", Name = "Source", Required = true, Description = "Source file. Absolute path.")]
        public string Source { get; set; }

        [CommandLineParameter(Command = "destination", Name = "Destination", Required = true, Description = "Destination file. Absolute path.")]
        public string Destination { get; set; }

    }
}

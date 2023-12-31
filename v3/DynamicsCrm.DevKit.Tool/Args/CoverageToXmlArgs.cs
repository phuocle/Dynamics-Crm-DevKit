using CmdLine;

namespace DynamicsCrm.DevKit.Tool.Args
{
    public class CoverageToXmlArgs
    {
        [CommandLineParameter(Command = "type", Name = "Type", Required = true, Description = "CoverageToXm type task")]
        public string Type { get; set; }

        [CommandLineParameter(Command = "xml", Name = "Xml", Required = true, Description = "Xml file. Absolute path.")]
        public string Xml { get; set; }

        [CommandLineParameter(Command = "coverage", Name = "Coverage", Required = true, Description = "Coverage file. Absolute path.")]
        public string Coverage { get; set; }

        [CommandLineParameter(Command = "dlls", Name = "Dlls", Required = true, Description = "Dlls files. Absolute path. Concat by ';'")]
        public string Dlls { get; set; }
    }
}

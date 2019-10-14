using System.Linq;
using CmdLine;
using DynamicsCrm.DevKit.Tool.Commands;

namespace DynamicsCrm.DevKit.Tool
{
    class Program
    {
        static void Main(string[] args)
        {
            var type = CommandLine.Tokenize().Where(x => x.Command == "type").FirstOrDefault();
            if (type == null)
                throw new System.Exception("Not found /type switch");
            switch (type.Value)
            {
                case "CoverageToXml":
                    TaskCoverageToXml.Run();
                    break;
            }
        }
    }
}

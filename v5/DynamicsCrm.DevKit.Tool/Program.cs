using System;
using System.Linq;
using CmdLine;
using DynamicsCrm.DevKit.Tool.Commands;

namespace DynamicsCrm.DevKit.Tool
{
    class Program
    {
        static int Main(string[] args)
        {
            try
            {
                var type = CommandLine.Tokenize().FirstOrDefault(x => x.Command == "type");
                if (type == null)
                    throw new InvalidOperationException("Missing required /type switch. Supported: coveragetoxml, nuglify, decrypt");
                switch (type.Value.ToLower())
                {
                    case "coveragetoxml":
                        TaskCoverageToXml.Run();
                        break;
                    case "nuglify":
                        TaskNUglify.Run();
                        break;
                    case "decrypt":
                        TaskDecrypt.Run();
                        break;
                    default:
                        throw new InvalidOperationException($"Unknown command: '{type.Value}'. Supported: coveragetoxml, nuglify, decrypt");
                }
                return 0;
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Error: {ex.Message}");
                return 1;
            }
        }
    }
}

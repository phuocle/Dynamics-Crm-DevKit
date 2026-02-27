using System;
using System.IO;
using System.Linq;
using CmdLine;
using DynamicsCrm.DevKit.Tool.Args;
using Microsoft.VisualStudio.Coverage.Analysis;

namespace DynamicsCrm.DevKit.Tool.Commands
{
    internal class TaskCoverageToXml
    {
        internal static void Run()
        {
            var args = CommandLine.Parse<CoverageToXmlArgs>();
            if (!File.Exists(args.Coverage))
                throw new FileNotFoundException($"Coverage file not found: {args.Coverage}");
            var dlls = args.Dlls
                .Split(new[] { ';' }, StringSplitOptions.RemoveEmptyEntries)
                .ToList();
            using (var info = CoverageInfo.CreateFromFile(args.Coverage, dlls, new string[] { }))
            {
                var data = info.BuildDataSet();
                data.WriteXml(args.Xml);
            }
        }
    }
}

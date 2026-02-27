using System;
using System.IO;
using System.Linq;
using Microsoft.VisualStudio.Coverage.Analysis;
using Spectre.Console;

namespace DynamicsCrm.DevKit.Tool.Tasks
{
    internal class TaskCoverageToXml
    {
        internal static void Run(string coverage, string xml, string dlls)
        {
            if (!File.Exists(coverage))
                throw new FileNotFoundException($"Coverage file not found: {coverage}");

            var dllList = dlls
                .Split(new[] { ';' }, StringSplitOptions.RemoveEmptyEntries)
                .ToList();

            AnsiConsole.MarkupLine($"[cyan]Coverage:[/] {Markup.Escape(coverage)}");
            AnsiConsole.MarkupLine($"[cyan]DLLs:[/] {dllList.Count} file(s)");

            using (var info = CoverageInfo.CreateFromFile(coverage, dllList, new string[] { }))
            {
                var data = info.BuildDataSet();
                data.WriteXml(xml);
            }

            AnsiConsole.MarkupLine($"[green]Done![/] Output: {Markup.Escape(xml)}");
        }
    }
}

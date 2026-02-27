using System;
using System.IO;
using System.Linq;
using DynamicsCrm.DevKit.Tool.Lib;
using NUglify;
using Spectre.Console;

namespace DynamicsCrm.DevKit.Tool.Tasks
{
    internal class TaskNUglify
    {
        private static readonly string[] Supported = { ".html", ".css", ".js" };

        internal static void Run(string source, string destination)
        {
            if (!File.Exists(source))
                throw new FileNotFoundException($"Source file not found: {source}");

            var extension = Path.GetExtension(source)?.ToLowerInvariant();
            if (!Supported.Contains(extension))
                throw new NotSupportedException($"Unsupported extension: {extension}. Supported: {string.Join(", ", Supported)}");

            AnsiConsole.MarkupLine($"[cyan]Source:[/] {Markup.Escape(source)}");
            AnsiConsole.MarkupLine($"[cyan]Type:[/] {Markup.Escape(extension)}");

            var content = File.ReadAllText(source);
            UglifyResult result;
            switch (extension)
            {
                case ".html": result = Uglify.Html(content); break;
                case ".css": result = Uglify.Css(content); break;
                case ".js": result = Uglify.Js(content); break;
                default: return;
            }

            if (result.HasErrors)
                throw new InvalidOperationException($"Minification failed: {string.Join("; ", result.Errors.Select(e => e.Message))}");

            Utility.ForceWriteAllText(destination, result.Code);
            AnsiConsole.MarkupLine($"[green]Done![/] Output: {Markup.Escape(destination)}");
        }
    }
}

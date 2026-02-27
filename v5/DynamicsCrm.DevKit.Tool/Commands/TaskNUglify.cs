using System;
using System.IO;
using System.Linq;
using CmdLine;
using DynamicsCrm.DevKit.Tool.Args;
using NUglify;

namespace DynamicsCrm.DevKit.Tool.Commands
{
    internal class TaskNUglify
    {
        private static readonly string[] Supported = { ".html", ".css", ".js" };

        internal static void Run()
        {
            var args = CommandLine.Parse<NUglifyArgs>();
            var sourceFile = args.Source;
            var destinationFile = args.Destination;
            if (!File.Exists(sourceFile))
                throw new FileNotFoundException($"Source file not found: {sourceFile}");
            var extension = Path.GetExtension(sourceFile)?.ToLowerInvariant();
            if (!Supported.Contains(extension))
                throw new NotSupportedException($"Unsupported extension: {extension}. Supported: {string.Join(", ", Supported)}");
            var content = File.ReadAllText(sourceFile);
            UglifyResult result;
            switch (extension)
            {
                case ".html":
                    result = Uglify.Html(content);
                    break;
                case ".css":
                    result = Uglify.Css(content);
                    break;
                case ".js":
                    result = Uglify.Js(content);
                    break;
                default:
                    return;
            }
            if (result.HasErrors)
                throw new InvalidOperationException($"Minification failed for {sourceFile}: {string.Join("; ", result.Errors.Select(e => e.Message))}");
            Utility.ForceWriteAllText(destinationFile, result.Code);
        }
    }
}
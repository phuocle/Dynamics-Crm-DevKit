using System;
using System.Collections.Generic;
using System.IO;
using CmdLine;
using DynamicsCrm.DevKit.Tool.Args;
using NUglify;

namespace DynamicsCrm.DevKit.Tool.Commands
{
    class TaskNUglify
    {
        private static List<string> SUPPORTED = new List<string>() { ".html", ".css", ".js" };


        internal static void Run()
        {
            var args = CommandLine.Parse<NUglifyArgs>();
            var sourceFile = args.Source;
            var destinationFile = args.Destination;
            if (!File.Exists(sourceFile))
                throw new Exception($"File not found: {sourceFile}");
            var extension = Path.GetExtension(sourceFile);
            if (!SUPPORTED.Contains(extension))
                throw new Exception($"Not support extension: {extension}");
            switch (extension)
            {
                case ".html":
                    var html = File.ReadAllText(sourceFile);
                    var resultHtml = Uglify.Html(html);
                    Utility.ForceWriteAllText(destinationFile, resultHtml.Code);
                    break;
                case ".css":
                    var css = File.ReadAllText(sourceFile);
                    var resultCss = Uglify.Css(css);
                    Utility.ForceWriteAllText(destinationFile, resultCss.Code);
                    break;
                case ".js":
                    var js = File.ReadAllText(sourceFile);
                    var resultJs = Uglify.Js(js);
                    Utility.ForceWriteAllText(destinationFile, resultJs.Code);
                    break;
            }
        }
    }
}

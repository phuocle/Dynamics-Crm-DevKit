using System;
using System.IO;
using DynamicsCrm.DevKit.Shared;
using NUglify;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    public class TaskNUglify
    {
        public static void Run(string command)
        {
            var arguments = Utility.ParseArguments(command);
            var sourceFile = Utility.GetArgumentValue(arguments, "/source:");
            var destinationFile = Utility.GetArgumentValue(arguments, "/destination:");
            if (!File.Exists(sourceFile))
                throw new Exception($"File not found: {sourceFile}");
            var extension = Path.GetExtension(sourceFile);
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

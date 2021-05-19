using System;
using System.IO;
using System.Text;
using DynamicsCrm.DevKit.Shared;
using NUglify;

namespace DynamicsCrm.DevKit.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            DevKitJsMinOld();
            DevKitJsMinNew();
            GeneratorXrmEnum();
            UpdateBuildDate();
        }

        private static void UpdateBuildDate()
        {
            var date = DateTime.Now.ToString("yyyy.MM.dd");
            var currentDirectory = Directory.GetCurrentDirectory();
            ReplaceInFile($@"{currentDirectory}\DynamicsCrm.DevKit\source.extension.vsixmanifest", "xxxx.xx.xx", date);
            ReplaceInFile($@"{currentDirectory}\DynamicsCrm.DevKit.Shared\Const.cs", "xxxx.xx.xx", date);
        }

        private static void ReplaceInFile(string file, string find, string replace)
        {
            if (!File.Exists(file)) return;
            var text = File.ReadAllText(file);
            text = text.Replace(find, replace);
            File.WriteAllText(file, text);
        }

        private static void DevKitJsMinNew()
        {
            var file = @"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\DynamicsCrm.DevKit.Resources\devkit.365.new.js";
            var devkitCode = File.ReadAllText(file);
            //var devkitCodeMin = Uglify.Js(devkitCode).Code;
            var output = @"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\ProjectTemplates\CSharp\13.WebResourceProjectTemplate\devkit.js";
            File.WriteAllText(output, devkitCode);


            var file_d_ts = @"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\DynamicsCrm.DevKit.Resources\devkit.365.new.d.ts";
            var output_d_ts = @"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\ProjectTemplates\CSharp\13.WebResourceProjectTemplate\devkit.d.ts";
            File.Copy(file_d_ts, output_d_ts, true);
        }

        private static void DevKitJsMinOld()
        {
            var file = @"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\DynamicsCrm.DevKit.Resources\devkit.365.js";
            var devkitCode = File.ReadAllText(file);
            var devkitCodeMin = Uglify.Js(devkitCode).Code;
            var output = @"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\ProjectTemplates\CSharp\05.WebResourceProjectTemplate\devkit.js";
            File.WriteAllText(output, devkitCodeMin);
        }
        private static void GeneratorXrmEnum()
        {
            var currentDirectory = Directory.GetCurrentDirectory();
            var directory = Path.Combine(currentDirectory, $@"..\test\v.{Const.Version}\TestDevKitJs\Dev.DevKit.WebResource\node_modules\@types\xrm");
            if (!Directory.Exists(directory)) return;
            var file = Path.Combine(directory, @"index.d.ts");
            if (!File.Exists(file)) return;

            var js = string.Empty;
            js += $"//xrm: {GetVersion(directory)}\r\n";
            var flag = false;
            var lines = File.ReadAllLines(file);
            foreach (var line in lines)
            {
                if (line.StartsWith("declare namespace XrmEnum")) flag = true;
                if (!flag) continue;
                if (line.Trim().StartsWith("/**")) continue;
                if (line.Trim().StartsWith("*")) continue;
                if (line.Trim().StartsWith("*/")) continue;
                if (line.Trim().Length == 0) continue;
                if (line.StartsWith("declare namespace XrmEnum"))
                    js += $"var XrmEnum = {{\r\n";
                else if (line.Trim().StartsWith("const enum "))
                {
                    var temp = $"\t" + line.Trim().Substring("const enum".Length) + "\r\n";
                    temp = temp.Replace(" {", ": {");
                    temp = $"\t" + temp.Trim() + "\r\n";
                    js += temp;
                }
                else if (line.Trim().StartsWith("}"))
                {
                    js += $"\t}},\r\n";
                }
                else
                {
                    if (line.Trim().Length == 0) continue;
                    var temp = line.Replace(" = ", ": ");
                    js += temp + "\r\n";
                }
            }
            js = js.TrimEnd(",\r\n\t},\r\n".ToCharArray());
            js += $"\r\n\t}}\r\n}}";
            var output1 = Path.Combine(currentDirectory, @"ProjectTemplates\CSharp\05.WebResourceProjectTemplate\XrmEnum.js");
            var output2 = Path.Combine(currentDirectory, @"ProjectTemplates\CSharp\13.WebResourceProjectTemplate\XrmEnum.js");
            File.WriteAllText(output1, js, Encoding.UTF8);
            File.WriteAllText(output2, js, Encoding.UTF8);
        }

        private static string GetVersion(string directory)
        {
            var file = Path.Combine(directory, "package.json");
            if (!File.Exists(file)) return null;
            var lines = File.ReadAllLines(file);
            foreach (var line in lines)
            {
                if (line.Trim().StartsWith("\"version\"") ||
                   line.Trim().StartsWith("'version'"))
                {
                    var columns = line.Split(":".ToCharArray());
                    if (columns.Length != 2) return null;
                    return columns[1].Trim().Substring(1, columns[1].Trim().Length - 2);
                }
            }
            return null;
        }
    }
}

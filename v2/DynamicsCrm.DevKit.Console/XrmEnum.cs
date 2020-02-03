using System.IO;
using System.Text;


namespace DynamicsCrm.DevKit.Console
{
    class XrmEnum
    {
        internal static void Generator()
        {
            var currentDirectory = Directory.GetCurrentDirectory();
            var directory = Path.Combine(currentDirectory, @"..\..\Packages\node_modules\@types\xrm");
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
            var output = Path.Combine(currentDirectory, @"..\..\..\ProjectTemplates\CSharp\05.WebResourceProjectTemplate\XrmEnum.js");
            File.WriteAllText(output, js, Encoding.UTF8);
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

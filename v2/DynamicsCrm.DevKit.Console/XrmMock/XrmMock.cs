using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Console
{
    public class XrmMock
    {
        internal static void Generator_xrm_mock_d_ts()
        {
            var currentDirectory = Directory.GetCurrentDirectory();
            var xrm_mock_directory = Path.Combine(currentDirectory, @"..\..\XrmMock\node_modules\xrm-mock");
            if (!Directory.Exists(xrm_mock_directory)) return;
            var file = Path.Combine(xrm_mock_directory, @"build\index.d.ts");
            if (!File.Exists(file)) return;
            var xrmMockVersion = GetXrmMockVersion(xrm_mock_directory);
            if (xrmMockVersion == null) return;
            var _d_ts = string.Empty;
            _d_ts += $"//xrm-mock: {xrmMockVersion}\r\n";
            _d_ts += $"declare namespace XrmMock {{\r\n";
            foreach(var line in File.ReadAllLines(file))
            {
                if (line.StartsWith("declare") ||
                    line.StartsWith("}") ||
                    line.Trim().StartsWith("import") ||
                    line.Trim().StartsWith("///") ||
                    line.Trim().StartsWith("export { ") ||
                    line.Trim().StartsWith("export * ") ||
                    line.Trim().StartsWith("/**") ||
                    line.Trim().StartsWith("*") ||
                    line.Trim().StartsWith("private ")
                    ) continue;
                if (line.Trim().StartsWith("export default class Form "))
                    break;
                if (line.Trim().StartsWith("export default "))
                    _d_ts += "\t" + line.Trim().Substring("export default ".Length) + "\r\n";
                else if (line.Trim().StartsWith("export "))
                    _d_ts += "\t" + line.Trim().Substring("export ".Length) + "\r\n";
                //else if (line.Trim().StartsWith("static "))
                //    _d_ts += "\t" + line.Trim().Substring("static ".Length) + "\r\n";
                else
                    _d_ts += line + "\r\n";
            }
            var xrmMockGenerator = GetXrmMockGenerator(xrm_mock_directory);
            if (xrmMockGenerator == null) return;
            _d_ts += xrmMockGenerator;
            _d_ts += $"}}\r\n";
            var bodyXrmMockGenerator = GetBodyXrmMockGenerator(xrm_mock_directory);
            if (bodyXrmMockGenerator == null) return;
            _d_ts += bodyXrmMockGenerator;
            var output = Path.Combine(currentDirectory, @"..\..\..\ProjectTemplates\CSharp\05.WebResourceProjectTemplate\xrm-mock.d.ts");
            var dir = Path.GetDirectoryName(output);
            File.WriteAllText(output, _d_ts, Encoding.UTF8);
        }

        private static string GetBodyXrmMockGenerator(string xrm_mock_directory)
        {
            var _d_ts = string.Empty;
            _d_ts += $"declare namespace XrmMockGenerator {{\r\n";
            var file = Path.Combine(xrm_mock_directory, @"build\index.d.ts");
            var begin = false;
            var begin2 = true;
            foreach (var line in File.ReadAllLines(file))
            {
                if (line.StartsWith("declare") ||
                    line.StartsWith("}") ||
                    line.Trim().StartsWith("import") ||
                    line.Trim().StartsWith("///") ||
                    line.Trim().StartsWith("export { ") ||
                    line.Trim().StartsWith("export * ") ||
                    line.Trim().StartsWith("/**") ||
                    line.Trim().StartsWith("*") ||
                    line.Trim().StartsWith("private ")
                    ) continue;
                if (line.Trim().StartsWith("export default class Form ")) begin = true;
                if (begin)
                {
                    if (line.Trim().StartsWith("export class XrmMockGenerator "))
                        begin2 = false;
                    if (begin2 == false && line.Trim().StartsWith("}"))
                    {
                        begin2 = true;
                        continue;
                    }
                    if (begin2)
                    {
                        var temp = line
                            .Replace(": UtilityMock", ": XrmMock.UtilityMock")
                            .Replace(": DeviceMock", ": XrmMock.DeviceMock")
                            .Replace(": MobileMock", ": XrmMock.MobileMock");

                        if (temp.Trim().StartsWith("export default "))
                            _d_ts += "\t" + temp.Trim().Substring("export default ".Length) + "\r\n";
                        else if (temp.Trim().StartsWith("export "))
                            _d_ts += "\t" + temp.Trim().Substring("export ".Length) + "\r\n";
                        else if (temp.Trim().StartsWith("static "))
                            _d_ts += "\t\t" + temp.Trim().Substring("static ".Length) + "\r\n";
                        else
                            _d_ts += temp + "\r\n";
                    }
                }
            }

            _d_ts += $"}}";
            return _d_ts;
        }

        private static string GetXrmMockGenerator(string xrm_mock_directory)
        {
            var file = Path.Combine(xrm_mock_directory, @"dist\xrm-mock-generator\xrm-mock-generator.d.ts");
            if (!File.Exists(file)) return null;
            var _d_ts = string.Empty;
            var begin = false;
            foreach(var line in File.ReadAllLines(file))
            {
                if (line.Trim().StartsWith("export declare ")) begin = true;
                if (line.Trim().StartsWith("}")) begin = false;
                if (begin)
                {
                    if (line.Trim().StartsWith("export "))
                        _d_ts += "\t" + line.Trim().Substring("export declare ".Length) + "\r\n";
                    else
                    {
                        var temp = line.Replace(": ", ": XrmMockGenerator.");
                        temp = temp.Replace("XrmMockGenerator.XrmMock.", "XrmMock.");
                        temp = temp.Replace("FormContenxt", "FormContext");
                        _d_ts += "\t" + temp + "\r\n";
                    }
                }
            }
            _d_ts += $"\t}}\r\n";
            return _d_ts;
        }

        private static string GetXrmMockVersion(string xrm_mock_directory)
        {
            var file = Path.Combine(xrm_mock_directory, "package.json");
            if (!File.Exists(file)) return null;
            var lines = File.ReadAllLines(file);
            foreach(var line in lines)
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

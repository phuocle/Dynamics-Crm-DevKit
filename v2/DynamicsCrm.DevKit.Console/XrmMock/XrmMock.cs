using System.IO;
using System.Text;

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
            _d_ts += $"///<reference types='xrm' />\r\n";
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
                if (line.Trim().StartsWith("export default "))
                    _d_ts += "\t" + line.Trim().Substring("export default ".Length) + "\r\n";
                else if (line.Trim().StartsWith("export "))
                    _d_ts += "\t" + line.Trim().Substring("export ".Length) + "\r\n";
                else
                    _d_ts += line + "\r\n";
            }
            _d_ts += $"}}";
            var output = Path.Combine(currentDirectory, @"..\..\..\ProjectTemplates\CSharp\05.WebResourceProjectTemplate\xrm-mock.d.ts");
            File.WriteAllText(output, _d_ts, Encoding.UTF8);
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

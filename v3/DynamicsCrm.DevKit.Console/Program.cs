using System;
using System.IO;
using System.Text;
using NUglify;

namespace DynamicsCrm.DevKit.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length == 0)
            {
                DevKitJsMinNew();
                UpdateBuildDate();
            }
            else
            {
                UpdateBuildDateBack();
            }
        }

        private static void UpdateBuildDateBack()
        {
            var date = DateTime.Now.ToString("yyyy.MM.dd");
            var currentDirectory = Directory.GetCurrentDirectory();
            ReplaceInFile($@"{currentDirectory}\DynamicsCrm.DevKit\source.extension.vsixmanifest", date, "xxxx.xx.xx");
            ReplaceInFile($@"{currentDirectory}\DynamicsCrm.DevKit.Shared\Const.cs", date, "xxxx.xx.xx");
            ReplaceInFile($@"{currentDirectory}\DynamicsCrm.DevKit.Package\VSPackage.resx", date, "xxxx.xx.xx");
        }

        private static void UpdateBuildDate()
        {
            var date = DateTime.Now.ToString("yyyy.MM.dd");
            var currentDirectory = Directory.GetCurrentDirectory();
            ReplaceInFile($@"{currentDirectory}\DynamicsCrm.DevKit\source.extension.vsixmanifest", "xxxx.xx.xx", date);
            ReplaceInFile($@"{currentDirectory}\DynamicsCrm.DevKit.Shared\Const.cs", "xxxx.xx.xx", date);
            ReplaceInFile($@"{currentDirectory}\DynamicsCrm.DevKit.Package\VSPackage.resx", "xxxx.xx.xx", date);
        }

        private static void ReplaceInFile(string file, string find, string replace)
        {
            if (!File.Exists(file)) return;
            var text = File.ReadAllText(file);
            text = text.Replace(find, replace);
            File.WriteAllText(file, text, Encoding.UTF8);
        }

        private static void DevKitJsMinNew()
        {
            File.Copy(@"C:\src\github\Dynamics-Crm-DevKit\v3\DynamicsCrm.DevKit.Lib\Resources\devkit.js", @"C:\src\github\Dynamics-Crm-DevKit\v3\ProjectTemplates\CSharp\09.WebResourceProjectTemplate\devkit.js", true);
            File.Copy(@"C:\src\github\Dynamics-Crm-DevKit\v3\DynamicsCrm.DevKit.Lib\Resources\devkit.d.ts", @"C:\src\github\Dynamics-Crm-DevKit\v3\ProjectTemplates\CSharp\09.WebResourceProjectTemplate\devkit.d.ts", true);
        }
    }
}

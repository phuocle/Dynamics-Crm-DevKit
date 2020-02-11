using System;
using System.IO;
using NUglify;

namespace DynamicsCrm.DevKit.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            //XrmMock.Generator_xrm_mock_d_ts();
            //XrmEnum.Generator();
            DevKitJsMin();
        }

        private static void DevKitJsMin()
        {
            var file = @"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\DynamicsCrm.DevKit.Resources\devkit.365.js";
            var devkitCode = File.ReadAllText(file);
            var devkitCodeMin = Uglify.Js(devkitCode).Code;
            var output = @"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\ProjectTemplates\CSharp\05.WebResourceProjectTemplate\devkit.js";
            File.WriteAllText(output, devkitCodeMin);
        }
    }
}

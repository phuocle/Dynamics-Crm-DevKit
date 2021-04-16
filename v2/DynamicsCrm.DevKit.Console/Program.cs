using System;
using System.IO;
using NUglify;

namespace DynamicsCrm.DevKit.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            DevKitJsMinOld();
            DevKitJsMinNew();
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

    }
}

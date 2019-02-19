using System.Collections.Generic;
using Microsoft.VisualStudio.Coverage.Analysis;

namespace PL.DynamicsCrm.DevKit.Tools
{
    class CoverageToXml
    {
        internal static void Convert(string[] args)
        {
            //args[0] = @function = "coverage"
            //args[1] = .coverage file
            //args[2] = .xml file
            //args[3] .. args[n] = dlls files
            var coverage = args[1];
            var file = args[2];
            var dlls = new List<string>();
            for (var i = 3; i < args.Length; i++)
                dlls.Add(args[i]);
            using (var info = CoverageInfo.CreateFromFile(file, dlls, new string[] { }))
            {
                var data = info.BuildDataSet();
                data.WriteXml(coverage);
            }
        }
    }
}

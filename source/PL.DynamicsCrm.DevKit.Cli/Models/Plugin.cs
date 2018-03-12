using System.Collections.Generic;

namespace PL.DynamicsCrm.DevKit.Cli.Models
{
    public class Plugin
    {
        public string profile { get; set; }
        public string folder { get; set; }
        public string solution { get; set; }
        public List<string> includefiles { get; set; }
        public List<string> excludefiles { get; set; }
    }
}

using System.Collections.Generic;

namespace PL.DynamicsCrm.DevKit.Cli.Models
{
    public class Dependency
    {
        public List<string> includefiles { get; set; }
        public List<string> excludefiles { get; set; }
        public List<string> dependencies { get; set; }
    }
}

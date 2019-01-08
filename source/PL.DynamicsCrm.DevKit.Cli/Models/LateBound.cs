using System.Collections.Generic;

namespace PL.DynamicsCrm.DevKit.Cli.Models
{
    public class LateBound
    {
        public string profile { get; set; }
        public string rootfolder { get; set; }
        public string type { get; set; }
        public string rootnamespace { get; set; }
        public List<string> entities { get; set; }
    }
}

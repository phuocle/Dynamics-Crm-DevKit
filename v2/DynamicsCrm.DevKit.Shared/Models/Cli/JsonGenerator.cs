using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.Models.Cli
{
    public class JsonGenerator
    {
        public string profile { get; set; }
        public string rootfolder { get; set; }
        public string rootnamespace { get; set; }
        public string type { get; set; }
        public string crmversion { get; set; }
        public List<string> entities { get; set; }
    }
}

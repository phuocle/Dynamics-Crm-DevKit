using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class JsonServer
    {
        public string profile { get; set; }
        public string folder { get; set; }
        public string solution { get; set; }
        public List<string> includefiles { get; set; }
        public List<string> excludefiles { get; set; }
    }
}

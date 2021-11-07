using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Models
{
    internal class JsonPlugin
    {
        public string profile { get; set; }
        public string folder { get; set; }
        public string solution { get; set; }
        public List<string> includefiles { get; set; }
        public List<string> excludefiles { get; set; }
    }
}

using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class JsonUploadReport : JsonBase
    {
        public string solution { get; set; }
        public List<string> languages { get; set; }
    }
}

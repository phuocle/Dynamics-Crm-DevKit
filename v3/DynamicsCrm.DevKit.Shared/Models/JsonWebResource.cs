﻿using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class JsonWebResource : JsonBase
    {
        public string solution { get; set; }
        public string rootfolder { get; set; }
        public List<string> includefiles { get; set; }
        public List<string> excludefiles { get; set; }
        public List<Dependency> dependencies { get; set; }
    }
}

﻿using System.Collections.Generic;

namespace PL.DynamicsCrm.DevKit.Cli.Models
{
    public class CliJson
    {
        public List<Plugin> plugins { get; set; }
        public List<Plugin> workflows { get; set; }
        public List<WebResource> webresources { get; set; }
        public List<SolutionPackager> solutionpackagers { get; set; }
        public List<DataProvider> dataproviders { get; set; }
    }
}
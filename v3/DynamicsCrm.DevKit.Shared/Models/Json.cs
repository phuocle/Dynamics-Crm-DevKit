﻿using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class Json
    {
        public List<JsonPlugin> plugins { get; set; }
        public List<JsonWorkflow> workflows { get; set; }
        public List<JsonWebResource> webresources { get; set; }
        public List<JsonDataProvider> dataproviders { get; set; }
        public List<JsonDataSource> datasources { get; set; }
        public List<JsonSolutionPackager> solutionpackagers { get; set; }
        public List<JsonGenerator> generators { get; set; }
        public List<JsonProxyType> proxytypes { get; set; }
        public List<JsonDownloadWebResource> downloadwebresources { get; set; }
        public List<JsonDownloadReport> downloadreports { get; set; }
        public List<JsonServer> servers { get; set; }
        public List<JsonUploadReport> uploadreports { get; set; }
    }
}

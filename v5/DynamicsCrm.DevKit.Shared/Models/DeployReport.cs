using System;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class DeployReport
    {
        public string File { get; set; }
        public Guid ReportId { get; set; }
        public string ReportName { get; set; }
        public string ReportFileName { get; set; }
        public int LanguageCode { get; set; }
        public string Language { get; set; }
        public bool IsManaged { get; set; }
        public string DisplayReportName => $"{ReportName} ({ReportFileName}) - {Language}" + (IsManaged ? " [managed]" : "");
    }
}

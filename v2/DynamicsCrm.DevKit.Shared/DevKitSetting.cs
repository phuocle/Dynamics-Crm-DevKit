using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared
{
    public class SavedMappingWebResource
    {
        public string FullFileName { get; set; }
        public string WebResourceName { get; set; }
    }

    public class SavedMappingReport
    {
        public int Language { get; set; }
        public string Solution { get; set; }
        public string ReportName { get; set; }
        public string FullFileName { get; set; }
    }

    public static class DevKitSetting
    {
        public static List<SavedMappingWebResource> SelectedWebResources { get; set; } = new List<SavedMappingWebResource>();
        public static List<SavedMappingReport> SelectedReports { get; set; } = new List<SavedMappingReport>();
    }
}

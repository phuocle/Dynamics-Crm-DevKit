namespace DynamicsCrm.DevKit.Shared.Models
{
    /// <summary>
    /// Dataset-management request carried from 'devkit report --type dataset'
    /// into TaskReportDataset. Kept separate from CommandLineArgs (the legacy
    /// task DTO) so dataset options never leak into other tasks.
    /// </summary>
    public class ReportDatasetRequest
    {
        public string Action { get; set; }
        public string Name { get; set; }
        public string NewName { get; set; }
        public string FetchXml { get; set; }
        public string FetchXmlFile { get; set; }
        public string PreFilter { get; set; }
        public bool Force { get; set; }
    }
}

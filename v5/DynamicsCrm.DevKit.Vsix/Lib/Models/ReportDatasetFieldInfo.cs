namespace DynamicsCrm.DevKit.Lib.Models
{
    internal sealed class ReportDatasetFieldInfo
    {
        public string Name { get; set; }
        public string DataField { get; set; }
        public string TypeName { get; set; }
        public string SourceEntityPath { get; set; }
        public string SourceAttribute { get; set; }
        public bool IsGeneratedCompanion { get; set; }
    }
}

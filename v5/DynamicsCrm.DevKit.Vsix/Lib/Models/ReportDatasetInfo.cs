using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Lib.Models
{
    internal sealed class ReportDatasetInfo
    {
        public string Name { get; set; }
        public string DataSourceName { get; set; }
        public string CommandText { get; set; }
        public string RootEntityName { get; set; }
        public List<ReportDatasetFieldInfo> Fields { get; set; } = new List<ReportDatasetFieldInfo>();
        public List<ReportDatasetParameterInfo> Parameters { get; set; } = new List<ReportDatasetParameterInfo>();
        public List<ReportFetchEntityInfo> FetchEntities { get; set; } = new List<ReportFetchEntityInfo>();
        public int ReferenceCount { get; set; }
        public List<string> ReferencePaths { get; set; } = new List<string>();
        public List<string> Warnings { get; set; } = new List<string>();
        public string FieldSummary => Fields == null ? "0" : Fields.Count.ToString();
        public string ParameterSummary => Parameters == null ? "0" : Parameters.Count.ToString();
        public string PreFilterSummary => FetchEntities != null && FetchEntities.Exists(x => x.IsPreFiltered) ? "Yes" : "No";
        public string ReferenceSummary => ReferenceCount == 0 ? "No" : ReferenceCount.ToString();
    }
}

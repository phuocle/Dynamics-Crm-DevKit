using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Lib.Models
{
    internal sealed class ReportDatasetValidationResult
    {
        public bool IsSuccess { get; set; }
        public List<string> Errors { get; } = new List<string>();
        public List<string> Warnings { get; } = new List<string>();
        public string FetchXml { get; set; }
        public string ProbeFetchXml { get; set; }
        public string RootEntityName { get; set; }
        public List<ReportDatasetFieldInfo> Fields { get; } = new List<ReportDatasetFieldInfo>();
        public List<ReportDatasetParameterInfo> Parameters { get; } = new List<ReportDatasetParameterInfo>();
        public List<ReportFetchEntityInfo> FetchEntities { get; } = new List<ReportFetchEntityInfo>();
    }
}

namespace DynamicsCrm.DevKit.Lib.Models
{
    internal sealed class ReportDatasetParameterInfo
    {
        public string FetchToken { get; set; }
        public string QueryParameterName { get; set; }
        public string ReportParameterName { get; set; }
        public string ValueExpression { get; set; }
        public string DataType { get; set; }
        public bool IsMultiValue { get; set; }
        public bool ExistsInReport { get; set; }
    }
}

namespace DynamicsCrm.DevKit.Lib.Models
{
    internal sealed class ReportFetchEntityInfo
    {
        public string Path { get; set; }
        public string LogicalName { get; set; }
        public string Alias { get; set; }
        public bool IsRoot { get; set; }
        public bool IsPreFiltered { get; set; }
        public string PrefilterParameterName { get; set; }
        public string DisplayName => IsRoot ? LogicalName : $"{Alias} ({LogicalName})";
    }
}

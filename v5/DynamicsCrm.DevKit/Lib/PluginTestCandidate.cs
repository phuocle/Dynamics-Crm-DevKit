namespace DynamicsCrm.DevKit.Lib
{
    internal sealed class PluginTestCandidate
    {
        public string ClassName { get; set; }
        public string DisplayName { get; set; }
        public string EntityLogicalName { get; set; }
        public string EntitySchemaName { get; set; }
        public string ExecutionMode { get; set; }
        public string FullClassName { get; set; }
        public bool HasPostImage { get; set; }
        public bool HasPreImage { get; set; }
        public bool IsPluginTtTemplate { get; set; }
        public string MessageName { get; set; }
        public string Namespace { get; set; }
        public string SourceFile { get; set; }
        public string Stage { get; set; }

        public string SuggestedTestClassBaseName => ClassName ?? string.Empty;
    }
}

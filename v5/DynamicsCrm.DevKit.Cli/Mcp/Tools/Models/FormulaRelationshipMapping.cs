namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class FormulaRelationshipMapping
    {
        public string SourceRelationshipName { get; }
        public string TargetRelationshipName { get; }
        public string SourceLookupAttribute { get; }
        public string TargetLookupAttribute { get; }

        public FormulaRelationshipMapping(string sourceRelationshipName, string targetRelationshipName,
            string sourceLookupAttribute, string targetLookupAttribute)
        {
            SourceRelationshipName = sourceRelationshipName;
            TargetRelationshipName = targetRelationshipName;
            SourceLookupAttribute = sourceLookupAttribute;
            TargetLookupAttribute = targetLookupAttribute;
        }
    }
}
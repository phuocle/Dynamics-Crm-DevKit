namespace PL.DynamicsCrm.DevKit.Shared.Xrm
{
    public class XrmEntity
    {
        public string Name { get; set; }
        public string LogicalName { get; set; }
        public bool HasImage { get; set; }
        public int EntityTypeCode { get; set; }
        public bool IsCustomEntity { get; set; }
    }
}

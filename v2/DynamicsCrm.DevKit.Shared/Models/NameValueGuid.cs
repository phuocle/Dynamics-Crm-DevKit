using System;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class NameValueGuid
    {
        public string Name { get; set; }
        public Guid Value { get; set; }
    }

    public class NameValueGuidExtend : NameValueGuid
    {
        public string SolutionPrefix { get; set; }
        public string SolutionUniqueName { get; set; }
    }
}

using System;
using static DynamicsCrm.DevKit.Shared.XrmHelper;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class SystemForm
    {
        public string Name { get; set; }
        public string FormXml { get; set; }
        public string Description { get; set; }
        public bool IsQuickCreate { get; set; }
        public string EntityLogicalName { get; set; }
        public FormType? FormType { get; set; }
        public Guid? FormId { get; set; }
    }
}
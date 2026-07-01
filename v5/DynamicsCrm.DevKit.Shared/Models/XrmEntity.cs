using System;
using System.Collections.Generic;
using System.Text;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class XrmEntity
    {
        public string Name { get; set; }
        public string LogicalName { get; set; }
        public string SchemaName { get; set; }
        public bool HasImage { get; set; }
        public int EntityTypeCode { get; set; }
        public bool IsCustomEntity { get; set; }
        public string DisplayName { get; set; }
        public string EntitySetName { get; set; }
    }
}
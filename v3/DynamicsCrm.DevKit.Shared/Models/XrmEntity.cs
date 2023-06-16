using System;
using System.Collections.Generic;
using System.Security.RightsManagement;
using System.Text;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class XrmEntity
    {
        public string Name { get; set; }
        public string LogicalName { get; set; }
        public bool HasImage { get; set; }
        public int EntityTypeCode { get; set; }
        public bool IsCustomEntity { get; set; }
        public string ServerType { get; set; }
        public string ServerMessage { get; set; }
        public string ServerStage { get; set; }
        public string ServerLogicalName { get; set; }
        public string ServerMode { get; set; }
    }
}

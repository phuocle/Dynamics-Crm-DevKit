using System;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class CrmConnection
    {
        public string Name { get; set; }
        public string Url { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Type { get; set; } = "OAuth";
        
        // PLAN_01: OAuth Enhancement - Optional ClientId and TenantId
        public string ClientId { get; set; }
        public string TenantId { get; set; }
        
        // Metadata for tracking
        public DateTime? LastTested { get; set; }
        public bool? LastTestSuccess { get; set; }
        public string LastTestError { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }
    }
}
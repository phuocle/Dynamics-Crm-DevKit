using Microsoft.Xrm.Sdk;
using System;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class SdkMessageProcessingStep
    {
        public string Name { get; set; }
        public string Configuration { get; set; }
        public string Description { get; set; }
        public OptionSetValue Mode { get; set; }
        public int? Rank { get; set; }
        public OptionSetValue Stage { get; set; }
        public bool? AsyncAutoDelete { get; set; }
        public OptionSetValue StatusCode { get; set; }
        public OptionSetValue StateCode { get; set; }
        public EntityReference SdkMessageFilterId { get; set; }
        public EntityReference SdkMessageId { get; set; }
        public string FilteringAttributes { get; set; }
        public EntityReference ImpersonatingUserId { get; set; }
        public OptionSetValue SupportedDeployment { get; set; }

        
    }
}
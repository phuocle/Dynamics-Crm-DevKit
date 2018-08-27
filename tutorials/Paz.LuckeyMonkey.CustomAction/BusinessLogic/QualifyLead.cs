using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Paz.LuckeyMonkey.Shared;
using Paz.LuckeyMonkey.Shared.Entities;
using Paz.LuckeyMonkey.Shared.Entities.LeadOptionSets;
using System;
using System.Linq;

namespace Paz.LuckeyMonkey.CustomAction.BusinessLogic
{
    public class QualifyLead
    {
        private class InputQualifyLead
        {
            public string LeadId { get; set; }
        }

        private class OutputQualifyLead
        {
            public string AccountId { get; set; }
            public bool Status { get; set; }
        }

        internal string Do(IPluginExecutionContext context, IOrganizationService service, ITracingService tracing, string jsonInput)
        {
            //Parse jsonInput to strong type InputQualifyLead
            var input = SimpleJson.DeserializeObject<InputQualifyLead>(jsonInput);
            //Call request QualifyLead
            var request = new QualifyLeadRequest()
            {
                CreateAccount = true,
                CreateOpportunity = false,
                CreateContact = true,
                LeadId = new EntityReference(Lead.EntityLogicalName, Guid.Parse(input.LeadId)),
                Status = new OptionSetValue((int)StatusCode.Qualified)
            };
            var response = (QualifyLeadResponse)service.Execute(request);
            var account = response.CreatedEntities.FirstOrDefault(r => r.LogicalName == Account.EntityLogicalName);
            //Prepare output and Serialize to jsonOutput
            var output = new OutputQualifyLead
            {
                Status = account != null,
                AccountId = account?.Id.ToString()
            };
            return SimpleJson.SerializeObject(output);
        }
    }
}

using System;
using System.Activities;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Workflow;
using Paz.LuckeyMonkey.Shared;
using Paz.LuckeyMonkey.Shared.Entities;

namespace Paz.LuckeyMonkey.Workflow
{
    [CrmPluginRegistration("SendUsersMail", "SendUsersMail", "", "Paz.LuckeyMonkey.Workflow", IsolationModeEnum.Sandbox)]
    public class SendUsersMail : CodeActivity
    {
        [Input("List UserIds")]
        [RequiredArgument]
        public InArgument<string> UserIds { get; set; }

        [Input("Email Template Title")]
        [RequiredArgument]
        public InArgument<string> EmailTemplateTitle { get; set; }

        [Input("Record Url")]
        [RequiredArgument]
        public InArgument<string> RecordUrl { get; set; }

        protected override void Execute(CodeActivityContext executionContext)
        {
            var workflowContext = executionContext.GetExtension<IWorkflowContext>();
            var serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
            var service = serviceFactory.CreateOrganizationService(workflowContext.UserId);
            var tracing = executionContext.GetExtension<ITracingService>();
            ExecuteWorkflow(executionContext, workflowContext, serviceFactory, service, tracing);
        }

        private void ExecuteWorkflow(CodeActivityContext executionContext, IWorkflowContext workflowContext, IOrganizationServiceFactory serviceFactory, IOrganizationService service, ITracingService tracing)
        {
            Debugger.Trace(tracing, "Begin Execute Workflow: SendUsersMail");
            //YOUR CUSTOM-WORKFLOW-CODE GO HERE
            var templateId = GetTemplateId(executionContext, service);
            if (templateId == Guid.Empty) return;
            var objectId = GetRecordId(executionContext);
            var objectType = GetEntityName(executionContext, service);
            var request = new InstantiateTemplateRequest
            {
                TemplateId = templateId,
                ObjectId = objectId,
                ObjectType = objectType
            };
            var response = (InstantiateTemplateResponse)service.Execute(request);
            if (response != null)
            {
                var email = new Email(response.EntityCollection[0]);
                email.from = new List<ActivityParty>()
                {
                    new ActivityParty { PartyId = new EntityReference(SystemUser.EntityLogicalName, workflowContext.InitiatingUserId) }
                };
                email.to = GetToEmail(executionContext);
                email.RegardingObjectId = new EntityReference(objectType, objectId);
                var emailId = service.Create(email.GetCreateEntity());
                var sendRequest = new SendEmailRequest()
                {
                    EmailId = emailId,
                    TrackingToken = $"[CRM-TRACKING]-{objectId}",
                    IssueSend = true
                };
                service.Execute(sendRequest);
            }
            Debugger.Trace(tracing, "End Execute Workflow: SendUsersMail");
        }

        private List<ActivityParty> GetToEmail(CodeActivityContext executionContext)
        {
            var userIds = UserIds.Get<string>(executionContext);
            var rows = userIds.Split(";".ToCharArray());
            var list = new List<ActivityParty>();
            foreach (var row in rows)
                list.Add(new ActivityParty { PartyId = new EntityReference(SystemUser.EntityLogicalName, Guid.Parse(row)) });
            return list;
        }

        private Guid GetTemplateId(CodeActivityContext executionContext, IOrganizationService service)
        {
            var emailTemplateTitle = EmailTemplateTitle.Get<string>(executionContext);
            var fetchData = new
            {
                title = emailTemplateTitle
            };
            var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='template'>
    <attribute name='templateid'/>
    <attribute name='createdon'/>
    <order attribute='createdon' descending='true'/>
    <filter type='and'>
      <condition attribute='title' operator='eq' value='{fetchData.title}'/>
    </filter>
  </entity>
</fetch>
";
            var rows = service.RetrieveAll<Template>(fetchXml);
            if (rows.Count == 0) return Guid.Empty;
            return rows[0].Id;
        }

        private Guid GetRecordId(CodeActivityContext executionContext)
        {
            var recordUrl = RecordUrl.Get<string>(executionContext);
            string[] urlParts = recordUrl.Split("?".ToArray());
            string[] urlParams = urlParts[1].Split("&".ToCharArray());
            string objectTypeCode = urlParams[0].Replace("etc=", "");
            var objectId = urlParams[1].Replace("id=", "");
            return Guid.Parse(objectId);
        }

        public string GetEntityName(CodeActivityContext executionContext, IOrganizationService service)
        {
            var recordUrl = RecordUrl.Get<string>(executionContext);
            string[] urlParts = recordUrl.Split("?".ToArray());
            string[] urlParams = urlParts[1].Split("&".ToCharArray());
            string objectTypeCode = urlParams[0].Replace("etc=", "");
            var entityFilter = new MetadataFilterExpression(LogicalOperator.And);
            entityFilter.Conditions.Add(new MetadataConditionExpression("ObjectTypeCode", MetadataConditionOperator.Equals, Convert.ToInt32(objectTypeCode)));
            var entityQueryExpression = new EntityQueryExpression()
            {
                Criteria = entityFilter
            };
            var retrieveMetadataChangesRequest = new RetrieveMetadataChangesRequest()
            {
                Query = entityQueryExpression,
                ClientVersionStamp = null
            };
            var response = (RetrieveMetadataChangesResponse)service.Execute(retrieveMetadataChangesRequest);
            var entityMetadata = (EntityMetadata)response.EntityMetadata[0];
            return entityMetadata.SchemaName.ToLower();
        }
    }
}

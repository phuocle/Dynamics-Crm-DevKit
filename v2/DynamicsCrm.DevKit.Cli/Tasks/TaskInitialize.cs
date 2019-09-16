using System;
using System.Collections.Generic;
using System.Linq;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskInitialize
    {
        ///conn:"AuthType=Office365;Url=https://uuu.crm5.dynamics.com;Username=admin@CRM000502.onmicrosoft.com;Password=M3bAj14uoG;" /json:"..\DynamicsCrm.DevKit.Cli.json" /type:"initialize" /profile:"DEBUG"
        private CrmServiceClient service;
        private string currentDirectory;
        private CommandLineArgs arguments;
        private const string INITIALIZE = "[INITIALIZE]";
        private const string NOT_USE = "zzzzz - NOT USE - ";
        private List<string> Entities { get; set; } = new List<string>();

        public TaskInitialize(CrmServiceClient service, string currentDirectory, CommandLineArgs arguments)
        {
            this.service = service;
            this.currentDirectory = currentDirectory;
            this.arguments = arguments;
        }

        public void Run()
        {
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "START ", CliLog.ColorMagenta, INITIALIZE);
            ReadEntities();
            //reset entity display name and
            //UpdateEntityDisplayName();
            //UpdateEntityPluralName();
            //UpdateFormName(2);//Main Form
            //UpdateFormName(7);//Quick Create
            //UpdateFormName(6);//Quick View
            //UpdateFormName(11);//Card
            UpdateDisplayNameColumns();
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "END ", CliLog.ColorMagenta, INITIALIZE);
        }

        private void UpdateDisplayNameColumns()
        {
            var i = 1;
            foreach(var entity in Entities)
            {
                var requests = new ExecuteMultipleRequest()
                {
                    Settings = new ExecuteMultipleSettings()
                    {
                        ContinueOnError = true,
                        ReturnResponses = true
                    },
                    Requests = new OrganizationRequestCollection()
                };
                var request = new RetrieveEntityRequest
                {
                    EntityFilters = EntityFilters.Attributes,
                    LogicalName = entity,
                    RetrieveAsIfPublished = true
                };
                var response = (RetrieveEntityResponse)service.Execute(request);
                foreach (var attr in response.EntityMetadata.Attributes)
                {
                    if (attr.DisplayName?.UserLocalizedLabel?.Label != null)
                    {
                        if (attr.DisplayName.UserLocalizedLabel.Label.StartsWith(NOT_USE)) continue;
                        attr.DisplayName = new Label($"{NOT_USE}{attr.DisplayName.UserLocalizedLabel.Label}", 1033);
                        var update = new UpdateAttributeRequest()
                        {
                            Attribute = attr,
                            EntityName = entity
                        };
                        requests.Requests.Add(update);
                    }
                }
                if (requests.Requests.Count > 0)
                {
                    var res = (ExecuteMultipleResponse)service.Execute(requests);
                    CliLog.WriteLine(CliLog.ColorWhite, i, " UpdateDisplayNameColumns - ", entity, " error: ", res.Responses.Count);
                }
                i++;
            }
        }

        private void UpdateFormName(int formType)
        {
            var i = 1;
            foreach (var entity in Entities)
            {
                //if (entity != "account") continue;
                try
                {
                    var request = new RetrieveFilteredFormsRequest()
                    {
                        FormType = new OptionSetValue(formType),
                        EntityLogicalName = entity,
                        SystemUserId = Guid.Parse("{D7AD61DB-6088-43EF-99DB-921810834682}")
                    };
                    var response = (RetrieveFilteredFormsResponse)service.Execute(request);
                    foreach (var systemForm in response.SystemForms)
                    {
                        var retrieve = service.Retrieve(systemForm.LogicalName, systemForm.Id, new ColumnSet("name"));
                        var name = retrieve.GetAttributeValue<string>("name");
                        if (name.StartsWith(NOT_USE)) continue;
                        var update = new Entity(systemForm.LogicalName, systemForm.Id);
                        update["name"] = $"{NOT_USE}{name}";
                        service.Update(update);
                        CliLog.WriteLine(CliLog.ColorWhite, i, " UpdateFormName - ", entity, " Form: ", name);
                    }
                }
                catch
                {
                }
                i++;
            }
        }

        private void UpdateEntityPluralName()
        {
            var i = 1;
            foreach (var entity in Entities)
            {
                try
                {
                    var retrieveRequest = new RetrieveEntityRequest { LogicalName = entity, EntityFilters = EntityFilters.Entity };
                    var retrieveResponse = (RetrieveEntityResponse)service.Execute(retrieveRequest);
                    var update = retrieveResponse.EntityMetadata;
                    if (update.DisplayCollectionName.UserLocalizedLabel.Label.StartsWith(NOT_USE)) continue;
                    update.DisplayCollectionName = new Microsoft.Xrm.Sdk.Label($"{NOT_USE}{update.DisplayCollectionName.UserLocalizedLabel.Label}", 1033);
                    var updateRequest = new UpdateEntityRequest
                    {
                        Entity = update,

                    };
                    service.Execute(updateRequest);
                    CliLog.WriteLine(CliLog.ColorWhite, i, " UpdateEntityPluralName - ", entity);
                }
                catch
                {
                    CliLog.WriteLine(CliLog.ColorRed, i, " UpdateEntityDisplayName - ", entity);
                }
                i++;
            }
        }

        private void UpdateEntityDisplayName()
        {
            var i = 1;
            foreach (var entity in Entities)
            {
                try
                {
                    var retrieveRequest = new RetrieveEntityRequest { LogicalName = entity, EntityFilters = EntityFilters.Entity };
                    var retrieveResponse = (RetrieveEntityResponse)service.Execute(retrieveRequest);
                    var update = retrieveResponse.EntityMetadata;
                    if (update.DisplayName.UserLocalizedLabel.Label.StartsWith(NOT_USE)) continue;
                    update.DisplayName = new Microsoft.Xrm.Sdk.Label($"{NOT_USE}{update.DisplayName.UserLocalizedLabel.Label}", 1033);
                    var updateRequest = new UpdateEntityRequest
                    {
                        Entity = update,

                    };
                    service.Execute(updateRequest);
                    CliLog.WriteLine(CliLog.ColorWhite, i, " UpdateEntityDisplayName - ", entity);
                }
                catch
                {
                    CliLog.WriteLine(CliLog.ColorRed, i, " UpdateEntityDisplayName - ", entity);
                }
                i++;
            }
        }

        private void ReadEntities()
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            };
            var response = (RetrieveAllEntitiesResponse)service.Execute(request);
            Entities = response.EntityMetadata
                .Where(e => e.IsCustomizable.Value)
                .Select(e => e.LogicalName).ToList();
            Entities.Sort();
        }
    }
}

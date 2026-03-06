using System;
using System.Linq;
using System.Text.RegularExpressions;
using DynamicsCrm.DevKit.Tool.Lib;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using Spectre.Console;

namespace DynamicsCrm.DevKit.Tool.Tasks
{
    internal class TaskCreateEntity
    {
        internal static void Run(string connectionString, string solution, string entityDisplayName, string entityType)
        {
            AnsiConsole.MarkupLine($"[cyan]Connecting to Dataverse...[/]");
            var serviceClient = new ServiceClient(connectionString);
            if (!serviceClient.IsReady)
                throw new Exception($"Cannot connect to Dataverse: {serviceClient.LastError}");
            AnsiConsole.MarkupLine($"[green]Connected![/]");

            var prefix = GetPrefix(serviceClient, solution);
            if (prefix == null)
                throw new Exception($"Cannot find publisher prefix for solution '{solution}'.");

            var entityLogicalName = $"{prefix}_{entityDisplayName.ToLower().Replace(" ", "_")}";
            AnsiConsole.MarkupLine($"[cyan]Creating entity:[/] [yellow]{entityLogicalName}[/] (type: {entityType})");

            var request = BuildCreateEntityRequest(prefix, entityLogicalName, entityDisplayName, entityType, solution);
            serviceClient.Execute(request);
            AnsiConsole.MarkupLine($"[green]Entity created successfully![/]");

            CreateDebugContextAttribute(serviceClient, prefix, entityLogicalName, solution);

            UpdateMainForm(serviceClient, entityLogicalName, entityDisplayName, entityType);
            UpdateQuickViewForm(serviceClient, entityLogicalName, entityDisplayName);
            UpdateCardForm(serviceClient, entityLogicalName, entityDisplayName);

            AnsiConsole.MarkupLine($"[green]All forms updated for entity[/] [yellow]{entityLogicalName}[/]");
        }

        private static CreateEntityRequest BuildCreateEntityRequest(string prefix, string entityLogicalName, string entityDisplayName, string entityType, string solution)
        {
            var request = new CreateEntityRequest
            {
                Entity = new EntityMetadata
                {
                    SchemaName = entityLogicalName,
                    LogicalName = entityLogicalName,
                    DisplayName = new Label(entityDisplayName, 1033),
                    DisplayCollectionName = new Label($"{entityDisplayName}s", 1033),
                    IsAuditEnabled = new BooleanManagedProperty(true),
                },
                PrimaryAttribute = new StringAttributeMetadata
                {
                    SchemaName = $"{prefix}_name",
                    RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.ApplicationRequired),
                    MaxLength = 850,
                    FormatName = StringFormatName.Text,
                    DisplayName = new Label("Name", 1033),
                    Description = new Label($"The primary attribute for the {entityDisplayName} entity.", 1033),
                    IsAuditEnabled = new BooleanManagedProperty(true),
                },
                SolutionUniqueName = solution
            };

            switch (entityType)
            {
                case "UserOwned":
                    request.Entity.OwnershipType = OwnershipTypes.UserOwned;
                    break;
                case "OrganizationOwned":
                    request.Entity.OwnershipType = OwnershipTypes.OrganizationOwned;
                    break;
                case "Activity":
                    request.Entity.OwnershipType = OwnershipTypes.UserOwned;
                    request.HasNotes = true;
                    request.Entity.IsActivity = true;
                    request.Entity.IsAvailableOffline = true;
                    request.PrimaryAttribute.SchemaName = "Subject";
                    request.HasFeedback = true;
                    break;
                case "Elastic_UserOwned":
                    request.Entity.OwnershipType = OwnershipTypes.UserOwned;
                    request.Entity.IsActivity = false;
                    request.Entity.TableType = "Elastic";
                    request.Entity.CanCreateCharts = new BooleanManagedProperty(false);
                    break;
                case "Elastic_OrganizationOwned":
                    request.Entity.OwnershipType = OwnershipTypes.OrganizationOwned;
                    request.Entity.IsActivity = false;
                    request.Entity.TableType = "Elastic";
                    request.Entity.CanCreateCharts = new BooleanManagedProperty(false);
                    break;
                default:
                    throw new Exception("EntityType must be one of: UserOwned, OrganizationOwned, Activity, Elastic_UserOwned, Elastic_OrganizationOwned");
            }
            return request;
        }

        private static void CreateDebugContextAttribute(ServiceClient serviceClient, string prefix, string entityLogicalName, string solution)
        {
            AnsiConsole.MarkupLine($"[cyan]Creating debug_context attribute...[/]");
            var debugContextRequest = new CreateAttributeRequest
            {
                EntityName = entityLogicalName,
                Attribute = new StringAttributeMetadata
                {
                    SchemaName = $"{prefix}_debug_context",
                    LogicalName = $"{prefix}_debug_context",
                    RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None),
                    MaxLength = 500,
                    FormatName = StringFormatName.Text,
                    DisplayName = new Label("Debug Context", 1033),
                    IsAuditEnabled = new BooleanManagedProperty(true),
                    ImeMode = ImeMode.Disabled,
                },
                SolutionUniqueName = solution
            };
            serviceClient.Execute(debugContextRequest);
            AnsiConsole.MarkupLine($"[green]debug_context attribute created![/]");
        }

        private static void UpdateMainForm(ServiceClient serviceClient, string entityLogicalName, string entityDisplayName, string entityType)
        {
            AnsiConsole.MarkupLine($"[cyan]Updating main form...[/]");
            var fetchXml = BuildFormFetchXml(entityLogicalName, formType: "2");
            var rows = serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return;

            var formxml = ResourceHelper.ReadResource($"{entityType}.xml");
            string guidPattern = @"(?<=\bid="")(\{?[a-fA-F0-9]{8}\-[a-fA-F0-9]{4}\-[a-fA-F0-9]{4}\-[a-fA-F0-9]{4}\-[a-fA-F0-9]{12}\}?)";
            string updatedXml = Regex.Replace(formxml, guidPattern, match => Guid.NewGuid().ToString().ToUpper());

            var formid = rows.Entities.First().GetAttributeValue<Guid>("formid");
            var update = new Entity("systemform", formid)
            {
                ["formxml"] = updatedXml,
                ["name"] = entityDisplayName
            };
            serviceClient.Update(update);
            AnsiConsole.MarkupLine($"[green]Main form updated![/]");
        }

        private static void UpdateQuickViewForm(ServiceClient serviceClient, string entityLogicalName, string entityDisplayName)
        {
            AnsiConsole.MarkupLine($"[cyan]Updating quick view form...[/]");
            var fetchXml = BuildFormFetchXml(entityLogicalName, formType: "6");
            var rows = serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return;

            var formid = rows.Entities.First().GetAttributeValue<Guid>("formid");
            var update = new Entity("systemform", formid)
            {
                ["name"] = $"{entityDisplayName} Quick View"
            };
            serviceClient.Update(update);
            AnsiConsole.MarkupLine($"[green]Quick view form updated![/]");
        }

        private static void UpdateCardForm(ServiceClient serviceClient, string entityLogicalName, string entityDisplayName)
        {
            AnsiConsole.MarkupLine($"[cyan]Updating card form...[/]");
            var fetchXml = BuildFormFetchXml(entityLogicalName, formType: "11");
            var rows = serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return;

            var formid = rows.Entities.First().GetAttributeValue<Guid>("formid");
            var update = new Entity("systemform", formid)
            {
                ["name"] = $"{entityDisplayName} Card"
            };
            serviceClient.Update(update);
            AnsiConsole.MarkupLine($"[green]Card form updated![/]");
        }

        private static string BuildFormFetchXml(string entityLogicalName, string formType)
        {
            return $@"<?xml version=""1.0"" encoding=""utf-16""?>
<fetch>
  <entity name=""systemform"">
    <attribute name=""formid"" />
    <attribute name=""formxml"" />
    <filter>
      <condition attribute=""name"" operator=""eq"" value=""Information"" />
      <condition attribute=""type"" operator=""eq"" value=""{formType}"" />
    </filter>
    <link-entity name=""entity"" from=""objecttypecode"" to=""objecttypecode"" alias=""e"">
      <filter>
        <condition attribute=""name"" operator=""eq"" value=""{entityLogicalName}"" />
      </filter>
    </link-entity>
  </entity>
</fetch>";
        }

        private static string GetPrefix(ServiceClient serviceClient, string solution)
        {
            var solutionQuery = new QueryExpression("solution")
            {
                ColumnSet = new ColumnSet("publisherid"),
                Criteria = new FilterExpression
                {
                    Conditions =
                    {
                        new ConditionExpression("uniquename", ConditionOperator.Equal, solution)
                    }
                }
            };
            var solutionEntity = serviceClient.RetrieveMultiple(solutionQuery).Entities.FirstOrDefault();
            if (solutionEntity == null) return null;

            var publisherReference = solutionEntity.GetAttributeValue<EntityReference>("publisherid");
            if (publisherReference == null) return null;

            var publisher = serviceClient.Retrieve("publisher", publisherReference.Id, new ColumnSet("customizationprefix"));
            return publisher.GetAttributeValue<string>("customizationprefix");
        }
    }
}

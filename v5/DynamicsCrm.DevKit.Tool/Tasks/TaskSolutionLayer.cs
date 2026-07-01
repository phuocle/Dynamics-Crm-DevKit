using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Query;
using Newtonsoft.Json.Linq;
using Spectre.Console;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.Tool.Tasks
{
    internal class TaskSolutionLayer
    {
        private enum SolutionComponentType
        {
            Entity = 1,
            Attribute = 2,
            Relationship = 3,
            AttributePicklistValue = 4,
            AttributeLookupValue = 5,
            ViewAttribute = 6,
            LocalizedLabel = 7,
            RelationshipExtraCondition = 8,
            OptionSet = 9,
            EntityRelationship = 10,
            EntityRelationshipRole = 11,
            EntityRelationshipRelationships = 12,
            ManagedProperty = 13,
            EntityKey = 14,
            Privilege = 16,
            PrivilegeObjectTypeCode = 17,
            Role = 20,
            RolePrivilege = 21,
            DisplayString = 22,
            DisplayStringMap = 23,
            Form = 24,
            Organization = 25,
            Saved_Query = 26,
            Workflow = 29,
            Report = 31,
            ReportEntity = 32,
            ReportCategory = 33,
            ReportVisibility = 34,
            Attachment = 35,
            EmailTemplate = 36,
            ContractTemplate = 37,
            KBArticleTemplate = 38,
            MailMergeTemplate = 39,
            DuplicateRule = 44,
            DuplicateRuleCondition = 45,
            EntityMap = 46,
            AttributeMap = 47,
            RibbonCommand = 48,
            RibbonContextGroup = 49,
            RibbonCustomization = 50,
            RibbonRule = 52,
            RibbonTabToCommandMap = 53,
            RibbonDiff = 55,
            Saved_Query_Visualization = 59,
            System_Form = 60,
            WebResource = 61,
            SiteMap = 62,
            ConnectionRole = 63,
            ComplexControl = 64,
            HierarchyRule = 65,
            CustomControl = 66,
            CustomControlDefaultConfig = 68,
            FieldSecurityProfile = 70,
            FieldPermission = 71,
            PluginType = 90,
            PluginAssembly = 91,
            SDKMessageProcessingStep = 92,
            SDKMessageProcessingStepImage = 93,
            ServiceEndpoint = 95,
            RoutingRule = 150,
            RoutingRuleItem = 151,
            SLA = 152,
            SLAItem = 153,
            ConvertRule = 154,
            ConvertRuleItem = 155,
            MobileOfflineProfile = 161,
            MobileOfflineProfileItem = 162,
            EnvironmentVariableDefinition = 380,
            EnvironmentVariableValue = 381,
            AIConfiguration = 400,
            AIProject = 401,
            Dataflow = 418
        }

        private static List<Tuple<int, string>> componentDefs;

        internal static void Run(string connectionString, string[] solutions, string outputFile)
        {
            AnsiConsole.MarkupLine("[cyan]Connecting to Dataverse...[/]");
            var serviceClient = new ServiceClient(connectionString);
            if (!serviceClient.IsReady)
                throw new Exception($"Cannot connect to Dataverse: {serviceClient.LastError}");
            AnsiConsole.MarkupLine("[green]Connected![/]");

            var stopwatch = Stopwatch.StartNew();
            LoadComponentDefinitions(serviceClient);
            var result = new StringBuilder();

            foreach (var solutionName in solutions)
            {
                result.Append(CheckSolution(serviceClient, solutionName));
                if (outputFile != null)
                {
                    File.WriteAllText(outputFile, result.ToString(), new UTF8Encoding(false));
                }
            }

            stopwatch.Stop();
            result.Append($"\r\nTake: {stopwatch.Elapsed.TotalMinutes:F2} minutes\r\n");

            if (outputFile != null)
            {
                File.WriteAllText(outputFile, result.ToString(), new UTF8Encoding(false));
                AnsiConsole.MarkupLine($"[green]Report saved to:[/] {Markup.Escape(outputFile)}");
            }
            else
            {
                AnsiConsole.WriteLine(result.ToString());
            }
        }

        private static void LoadComponentDefinitions(ServiceClient serviceClient)
        {
            componentDefs = new List<Tuple<int, string>>();

            var allDefs = serviceClient.RetrieveMultiple(new QueryExpression("solutioncomponentdefinition")
            {
                NoLock = true,
                ColumnSet = new ColumnSet("solutioncomponenttype", "name")
            }).Entities.ToList();

            foreach (var d in allDefs)
            {
                componentDefs.Add(new Tuple<int, string>(d.GetAttributeValue<int>("solutioncomponenttype"), d.GetAttributeValue<string>("name")));
            }

            var response = (RetrieveOptionSetResponse)serviceClient.Execute(
                new RetrieveOptionSetRequest { Name = "componenttype" });
            var options = ((OptionSetMetadata)response.OptionSetMetadata).Options;

            foreach (var o in options)
            {
                componentDefs.Add(new Tuple<int, string>(o.Value.Value, o.Label?.UserLocalizedLabel?.Label ?? ""));
            }

            componentDefs.Add(new Tuple<int, string>(80, "Model driven app"));
        }

        private static Guid GetSolutionId(ServiceClient serviceClient, string solutionName)
        {
            var query = new QueryExpression("solution")
            {
                NoLock = true,
                ColumnSet = new ColumnSet("solutionid")
            };
            query.Criteria.AddCondition("uniquename", ConditionOperator.Equal, solutionName);

            var rows = serviceClient.RetrieveMultiple(query);
            if (rows.Entities.Count != 1)
                throw new Exception($"Solution '{solutionName}' not found in this environment");

            return rows.Entities[0].Id;
        }

        private static List<Entity> LoadComponents(ServiceClient serviceClient, Guid solutionId)
        {
            var allComponents = serviceClient.RetrieveMultiple(new QueryExpression("solutioncomponent")
            {
                NoLock = true,
                ColumnSet = new ColumnSet("objectid", "componenttype", "rootcomponentbehavior"),
                Criteria = new FilterExpression
                {
                    Conditions = { new ConditionExpression("solutionid", ConditionOperator.Equal, solutionId) }
                }
            }).Entities.ToList();

            var components = allComponents.ToList();

            var activityRelComponents = allComponents
                .Where(c => c.GetAttributeValue<OptionSetValue>("componenttype")?.Value == 10)
                .ToList();

            if (activityRelComponents.Count > 0)
            {
                var activityQuery = new EntityQueryExpression
                {
                    Criteria = new MetadataFilterExpression(LogicalOperator.And)
                    {
                        Conditions = { new MetadataConditionExpression("IsActivity", MetadataConditionOperator.Equals, true) }
                    },
                    Properties = new MetadataPropertiesExpression("MetadataId", "LogicalName", "ManyToOneRelationships")
                };
                var activityMetadatas = ((RetrieveMetadataChangesResponse)serviceClient.Execute(
                    new RetrieveMetadataChangesRequest { Query = activityQuery })).EntityMetadata.ToList();

                var excludeIds = activityMetadatas
                    .SelectMany(e => e.ManyToOneRelationships)
                    .Where(r => r.ReferencingAttribute == "regardingobjectid")
                    .Select(r => r.MetadataId)
                    .ToHashSet();

                components = components
                    .Except(allComponents.Where(c => excludeIds.Contains(c.GetAttributeValue<Guid>("objectid"))))
                    .ToList();
            }

            var fullEntities = allComponents
                .Where(c =>
                    c.GetAttributeValue<OptionSetValue>("componenttype")?.Value == 1 &&
                    c.GetAttributeValue<OptionSetValue>("rootcomponentbehavior")?.Value == 0)
                .ToList();

            if (fullEntities.Any())
            {
                var entityQuery = new EntityQueryExpression
                {
                    Criteria = new MetadataFilterExpression(LogicalOperator.And)
                    {
                        Conditions =
                        {
                            new MetadataConditionExpression("MetadataId", MetadataConditionOperator.In,
                                fullEntities.Select(fe => fe.GetAttributeValue<Guid>("objectid")).ToArray())
                        }
                    },
                    Properties = new MetadataPropertiesExpression(
                        "LogicalName", "Attributes",
                        "OneToManyRelationships", "ManyToOneRelationships", "ManyToManyRelationships"),
                    AttributeQuery = new AttributeQueryExpression
                    {
                        Properties = new MetadataPropertiesExpression("MetadataId"),
                        Criteria = new MetadataFilterExpression
                        {
                            Conditions =
                            {
                                new MetadataConditionExpression("IsManaged", MetadataConditionOperator.Equals, true)
                            }
                        }
                    },
                    RelationshipQuery = new RelationshipQueryExpression
                    {
                        Properties = new MetadataPropertiesExpression("MetadataId"),
                        Criteria = new MetadataFilterExpression
                        {
                            Conditions =
                            {
                                new MetadataConditionExpression("IsManaged", MetadataConditionOperator.Equals, true)
                            }
                        }
                    }
                };
                var entityMetadatas = ((RetrieveMetadataChangesResponse)serviceClient.Execute(
                    new RetrieveMetadataChangesRequest { Query = entityQuery })).EntityMetadata.ToList();

                var entityLogicalNames = entityMetadatas.Select(e => e.LogicalName).ToArray();

                components.AddRange(entityMetadatas.SelectMany(e => e.Attributes)
                    .Select(a => new Entity("solutioncomponent")
                    {
                        ["objectid"] = a.MetadataId,
                        ["componenttype"] = new OptionSetValue(2)
                    }));

                components.AddRange(entityMetadatas.SelectMany(e => e.ManyToManyRelationships)
                    .Select(r => new Entity("solutioncomponent")
                    {
                        ["objectid"] = r.MetadataId,
                        ["componenttype"] = new OptionSetValue(3)
                    }));

                components.AddRange(entityMetadatas.SelectMany(e => e.OneToManyRelationships)
                    .Select(r => new Entity("solutioncomponent")
                    {
                        ["objectid"] = r.MetadataId,
                        ["componenttype"] = new OptionSetValue(3)
                    }));

                components.AddRange(entityMetadatas.SelectMany(e => e.ManyToOneRelationships)
                    .Select(r => new Entity("solutioncomponent")
                    {
                        ["objectid"] = r.MetadataId,
                        ["componenttype"] = new OptionSetValue(3)
                    }));

                var forms = serviceClient.RetrieveMultiple(new QueryExpression("systemform")
                {
                    NoLock = true,
                    ColumnSet = new ColumnSet("formid"),
                    Criteria = new FilterExpression
                    {
                        Conditions =
                        {
                            new ConditionExpression("objecttypecode", ConditionOperator.In, entityLogicalNames)
                        }
                    }
                });
                components.AddRange(forms.Entities.Select(f => new Entity("solutioncomponent")
                {
                    ["objectid"] = f.Id,
                    ["componenttype"] = new OptionSetValue(60)
                }));

                var views = serviceClient.RetrieveMultiple(new QueryExpression("savedquery")
                {
                    NoLock = true,
                    ColumnSet = new ColumnSet("savedqueryid"),
                    Criteria = new FilterExpression
                    {
                        Conditions =
                        {
                            new ConditionExpression("returnedtypecode", ConditionOperator.In, entityLogicalNames)
                        }
                    }
                });
                components.AddRange(views.Entities.Select(v => new Entity("solutioncomponent")
                {
                    ["objectid"] = v.Id,
                    ["componenttype"] = new OptionSetValue(26)
                }));

                var charts = serviceClient.RetrieveMultiple(new QueryExpression("savedqueryvisualization")
                {
                    NoLock = true,
                    ColumnSet = new ColumnSet("savedqueryvisualizationid"),
                    Criteria = new FilterExpression
                    {
                        Conditions =
                        {
                            new ConditionExpression("primaryentitytypecode", ConditionOperator.In, entityLogicalNames)
                        }
                    }
                });
                components.AddRange(charts.Entities.Select(c => new Entity("solutioncomponent")
                {
                    ["objectid"] = c.Id,
                    ["componenttype"] = new OptionSetValue(59)
                }));
            }

            return components;
        }

        private static string CheckSolution(ServiceClient serviceClient, string solutionName)
        {
            AnsiConsole.MarkupLine($"[cyan]Checking solution:[/] [yellow]{Markup.Escape(solutionName)}[/]");
            var solutionId = GetSolutionId(serviceClient, solutionName);
            var components = LoadComponents(serviceClient, solutionId);

            var grouped = components.GroupBy(c => c.GetAttributeValue<OptionSetValue>("componenttype")?.Value).OrderBy(g => g.Key);
            var result = new StringBuilder();
            result.Append($"SOLUTION: {solutionName}\r\n");

            foreach (var grp in grouped)
            {
                if (grp == null || grp.Key == null) continue;
                
                var def = componentDefs.FirstOrDefault(d => d.Item1 == grp.Key.Value);
                if (def == null) continue;

                var entities = grp.ToList();
                result.Append($"\t{def.Item2} ({entities.Count})\r\n");
                AnsiConsole.MarkupLine($"  [dim]Checking:[/] {Markup.Escape(def.Item2)} ({entities.Count})");
                
                result.Append(CheckActiveLayers(serviceClient, entities));
                result.Append("\r\n");
            }
            AnsiConsole.MarkupLine($"[green]Done:[/] [yellow]{Markup.Escape(solutionName)}[/]");
            return result.ToString();
        }

        private static string CheckActiveLayers(ServiceClient serviceClient, List<Entity> entities)
        {
            var result = new StringBuilder();
            var bulk = new ExecuteMultipleRequest
            {
                Settings = new ExecuteMultipleSettings
                {
                    ContinueOnError = true,
                    ReturnResponses = true
                },
                Requests = new OrganizationRequestCollection()
            };

            for (int i = 0; i < entities.Count; i++)
            {
                var entity = entities[i];
                var componentTypeValue = entity.GetAttributeValue<OptionSetValue>("componenttype").Value;
                
                string componentApiName;
                if (Enum.IsDefined(typeof(SolutionComponentType), componentTypeValue))
                {
                    var componentTypeEnum = (SolutionComponentType)componentTypeValue;
                    componentApiName = GetSolutionComponentName(componentTypeEnum.ToString());
                }
                else
                {
                    componentApiName = GetSolutionComponentName(componentTypeValue.ToString());
                }

                if (componentApiName == "418") componentApiName = "msdyn_dataflow";

                var req = new RetrieveMultipleRequest
                {
                    Query = new QueryExpression("msdyn_componentlayer")
                    {
                        NoLock = true,
                        ColumnSet = new ColumnSet(true),
                        Criteria = new FilterExpression
                        {
                            Conditions =
                            {
                                new ConditionExpression("msdyn_solutioncomponentname", ConditionOperator.Equal, componentApiName),
                                new ConditionExpression("msdyn_componentid", ConditionOperator.Equal,
                                    entity.GetAttributeValue<Guid>("objectid"))
                            }
                        }
                    }
                };
                req["tag"] = componentTypeValue;
                bulk.Requests.Add(req);

                if (bulk.Requests.Count == 200 || i == entities.Count - 1)
                {
                    var bulkResponse = (ExecuteMultipleResponse)serviceClient.Execute(bulk);
                    result.Append(ProcessBatchResults(serviceClient, bulk, bulkResponse));
                    bulk.Requests.Clear();
                }
            }

            return result.ToString();
        }

        private static string ProcessBatchResults(ServiceClient serviceClient, ExecuteMultipleRequest bulk, ExecuteMultipleResponse bulkResponse)
        {
            var result = new StringBuilder();
            var entityIds = new List<Guid>();

            foreach (var response in bulkResponse.Responses)
            {
                if (response.Fault != null)
                {
                    AnsiConsole.MarkupLine($"[red]Fault:[/] {response.Fault.Message}");
                    continue;
                }

                var entities = ((RetrieveMultipleResponse)response.Response).EntityCollection.Entities;
                var found = entities.FirstOrDefault(x => x.GetAttributeValue<string>("msdyn_solutionname") == "Active");

                if (found != null)
                {
                    var componentTypeValue = (int)bulk.Requests[response.RequestIndex].Parameters["tag"];
                    var componentType = (SolutionComponentType)componentTypeValue;

                    if (componentType == SolutionComponentType.Attribute)
                    {
                        var json = JObject.Parse(found.GetAttributeValue<string>("msdyn_componentjson"));
                        var entityIdStr = ((JObject)((JArray)json["Attributes"]).First(o => ((JObject)o).Value<string>("Key") == "entityid")).Value<string>("Value");
                        if (Guid.TryParse(entityIdStr, out Guid entityId))
                        {
                            if (!entityIds.Contains(entityId))
                                entityIds.Add(entityId);
                        }
                    }
                    else if (componentType == SolutionComponentType.Saved_Query)
                    {
                        var json = JObject.Parse(found.GetAttributeValue<string>("msdyn_componentjson"));
                        var returnedtypecode = ((JObject)((JArray)json["Attributes"]).First(o => ((JObject)o).Value<string>("Key") == "returnedtypecode")).Value<string>("Value");
                        var msdyn_name = found.GetAttributeValue<string>("msdyn_name")?.Trim();
                        var msdyn_componentid = found.GetAttributeValue<Guid>("msdyn_componentid");
                        result.Append($"\t\t[{returnedtypecode}].[{msdyn_name}] - [{msdyn_componentid}]\r\n");
                    }
                    else if (componentType == SolutionComponentType.Saved_Query_Visualization)
                    {
                        var json = JObject.Parse(found.GetAttributeValue<string>("msdyn_componentjson"));
                        var primaryentitytypecode = ((JObject)((JArray)json["Attributes"]).First(o => ((JObject)o).Value<string>("Key") == "primaryentitytypecode")).Value<string>("Value");
                        var msdyn_name = found.GetAttributeValue<string>("msdyn_name")?.Trim();
                        var msdyn_componentid = found.GetAttributeValue<Guid>("msdyn_componentid");
                        result.Append($"\t\t[{primaryentitytypecode}].[{msdyn_name}] - [{msdyn_componentid}]\r\n");
                    }
                    else
                    {
                        var msdyn_name = found.GetAttributeValue<string>("msdyn_name")?.Trim();
                        var msdyn_componentid = found.GetAttributeValue<Guid>("msdyn_componentid");
                        try
                        {
                            var json = JObject.Parse(found.GetAttributeValue<string>("msdyn_componentjson"));
                            var objecttypecode = ((JObject)((JArray)json["Attributes"]).First(o => ((JObject)o).Value<string>("Key") == "objecttypecode")).Value<string>("Value");
                            if (!string.IsNullOrEmpty(objecttypecode))
                                result.Append($"\t\t[{objecttypecode}].[{msdyn_name}] - [{msdyn_componentid}]\r\n");
                            else
                                result.Append($"\t\t[{msdyn_name}] - [{msdyn_componentid}]\r\n");
                        }
                        catch
                        {
                            result.Append($"\t\t[{msdyn_name}] - [{msdyn_componentid}]\r\n");
                        }
                    }
                }
            }

            if (entityIds.Any())
            {
                var entityQuery = new EntityQueryExpression
                {
                    Criteria = new MetadataFilterExpression(LogicalOperator.Or),
                    Properties = new MetadataPropertiesExpression("MetadataId", "LogicalName")
                };
                entityIds.ForEach(id =>
                    entityQuery.Criteria.Conditions.Add(
                        new MetadataConditionExpression("MetadataId", MetadataConditionOperator.Equals, id)));
                var emds = ((RetrieveMetadataChangesResponse)serviceClient.Execute(
                    new RetrieveMetadataChangesRequest { Query = entityQuery })).EntityMetadata.ToList();

                foreach (var response in bulkResponse.Responses)
                {
                    if (response.Fault != null)
                    {
                        continue;
                    }

                    var entities = ((RetrieveMultipleResponse)response.Response).EntityCollection.Entities;
                    var found = entities.FirstOrDefault(x => x.GetAttributeValue<string>("msdyn_solutionname") == "Active");

                    if (found != null)
                    {
                        var componentTypeValue = (int)bulk.Requests[response.RequestIndex].Parameters["tag"];
                        var componentType = (SolutionComponentType)componentTypeValue;

                        if (componentType == SolutionComponentType.Attribute)
                        {
                            var json = JObject.Parse(found.GetAttributeValue<string>("msdyn_componentjson"));
                            var entityIdStr = ((JObject)((JArray)json["Attributes"]).First(o => ((JObject)o).Value<string>("Key") == "entityid")).Value<string>("Value");
                            if (Guid.TryParse(entityIdStr, out Guid entityId))
                            {
                                var emd = emds.FirstOrDefault(x => x.MetadataId == entityId);
                                if (emd != null)
                                {
                                    var logicalname = ((JObject)((JArray)json["Attributes"]).First(o => ((JObject)o).Value<string>("Key") == "logicalname")).Value<string>("Value");
                                    var msdyn_componentid = found.GetAttributeValue<Guid>("msdyn_componentid");
                                    result.Append($"\t\t[{emd.LogicalName}].[{logicalname}] - [{msdyn_componentid}]\r\n");
                                }
                            }
                        }
                    }
                }
            }

            return result.ToString();
        }

        private static string GetSolutionComponentName(string value)
        {
            value = value.Replace("_", string.Empty);
            value = value.Replace("SDK", "Sdk");
            value = value.Replace("SLA", "Sla");
            value = value.Replace("KB", "Kb");
            value = value.Replace("AI", "Ai");
            return value;
        }
    }
}

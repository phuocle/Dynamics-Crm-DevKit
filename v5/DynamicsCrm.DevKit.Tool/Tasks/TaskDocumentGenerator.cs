using DynamicsCrm.DevKit.Tool.Extensions;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using Spectre.Console;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;

namespace DynamicsCrm.DevKit.Tool.Tasks
{
    internal class TaskDocumentGenerator
    {
        private const string NEW_LINE = "\r\n";
        private const string TAB = "\t";

        private static readonly HashSet<string> BlackList = new HashSet<string>(StringComparer.OrdinalIgnoreCase) { "asyncoperation", "bulkdeletefailure", "mailboxtrackingfolder", "principalobjectattributeaccess", "processsession", "syncerror", "userentityinstancedata", "duplicaterecord",
        "sharepointdocumentlocation", "sharepointdocument", "chat", "fax", "letter", "recurringappointmentmaster", "socialactivity", "activitypointer", "annotation", "slakpiinstance", "socialprofile", "postrole", "postregarding", "postfollow",
        "customeraddress", "customerrelationship", "activityparty", "actioncard", "connection", "fileattachment", "owner", "createdby", "createdonbehalfby", "modifiedby", "modifiedonbehalfby"
        };

        private static void AppendErdClassDef(StringBuilder sb, EntityMetadata metadata)
        {
            sb.Append($"{TAB}class {metadata.SchemaName} {{ {NEW_LINE}");
            sb.Append($"{TAB}{TAB}+Guid: {metadata.PrimaryIdAttribute}{NEW_LINE}");
            sb.Append($"{TAB}{TAB}+string: {metadata.PrimaryNameAttribute}{NEW_LINE}");
            foreach (var lookup in metadata.Attributes.Where(x => x is LookupAttributeMetadata))
            {
                if (MetadataExtensions.ignoreAttributes.Contains(lookup.LogicalName)) continue;
                if (MetadataExtensions.ignoreAttributes2.Contains(lookup.LogicalName)) continue;
                sb.Append($"{TAB}{TAB}+Lookup: {lookup.LogicalName}{NEW_LINE}");
            }
            sb.Append($"{TAB}}}{NEW_LINE}");
        }

        private static HashSet<string> CollectLookupSchemaNames(EntityMetadata metadata)
        {
            var set = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var lookup in metadata.Attributes.Where(x => x is LookupAttributeMetadata))
            {
                if (MetadataExtensions.ignoreAttributes.Contains(lookup.LogicalName)) continue;
                if (MetadataExtensions.ignoreAttributes2.Contains(lookup.LogicalName)) continue;
                var rel = metadata.ManyToOneRelationships.FirstOrDefault(x => x.ReferencingAttribute == lookup.LogicalName);
                if (rel != null) set.Add(rel.SchemaName);
            }
            return set;
        }

        private static void AppendErdEdges(StringBuilder sb, EntityMetadata metadata, string referencingSchemaName,
            Dictionary<string, EntityMetadata> metadataDict, HashSet<string> lookupSchemaNames, HashSet<string> edgeTracker)
        {
            foreach (var relationship in metadata.ManyToOneRelationships)
            {
                if (BlackList.Contains(relationship.ReferencingEntity) || BlackList.Contains(relationship.ReferencedEntity)) continue;
                if (!lookupSchemaNames.Contains(relationship.SchemaName)) continue;

                EntityMetadata referenced;
                if (metadataDict.TryGetValue(relationship.ReferencedEntity.ToLower(), out referenced))
                {
                    var edgeKey = $"{referencingSchemaName}|{referenced.SchemaName}";
                    if (edgeTracker.Add(edgeKey))
                    {
                        sb.Append($"{TAB}{referencingSchemaName} --* {referenced.SchemaName}{NEW_LINE}");
                    }
                }
            }
        }

        private List<EnumAttributeMetadata> GlobalOptionSet = new List<EnumAttributeMetadata>();
        private HashSet<string> GlobalOptionSetNames = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        private HashSet<string> SolutionOptionSets = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        private List<string> entities = new List<string>();
        private Dictionary<string, EntityMetadata> metadataDict;
        private Dictionary<string, List<BusinessRuleInfo>> businessRulesDict = new Dictionary<string, List<BusinessRuleInfo>>(StringComparer.OrdinalIgnoreCase);
        private Dictionary<string, List<FormInfo>> formsDict = new Dictionary<string, List<FormInfo>>(StringComparer.OrdinalIgnoreCase);
        private Dictionary<string, List<ViewInfo>> viewsDict = new Dictionary<string, List<ViewInfo>>(StringComparer.OrdinalIgnoreCase);
        private TimeSpan userTimeZoneOffset = TimeSpan.Zero;

        private class BusinessRuleInfo
        {
            public string Name { get; set; }
            public string Description { get; set; }
            public string StatusCode { get; set; }
            public string Scope { get; set; }
        }

        private class FormInfo
        {
            public string Name { get; set; }
            public string FormType { get; set; }
            public string Description { get; set; }
        }

        private class ViewInfo
        {
            public string Name { get; set; }
            public string Description { get; set; }
            public bool IsDefault { get; set; }
        }

        private static string ParseFormulaXml(string xml, int sourceType)
        {
            try
            {
                if (sourceType == 2)
                {
                    var aggMatch = Regex.Match(xml, @"ExpressionOperator""\>(?<op>Sum|Count|Min|Max|Avg)\<");
                    var aggOp = aggMatch.Success ? aggMatch.Groups["op"].Value.ToUpper() : "AGGREGATE";
                    var targetMatch = Regex.Match(xml, @"DisplayName=""(?<rel>[^""]+)""\s+Entity=""\[CreatedEntities");
                    var relatedEntity = "";
                    if (targetMatch.Success)
                    {
                        var parts = targetMatch.Groups["rel"].Value.Split('.');
                        if (parts.Length > 0) relatedEntity = parts[0];
                    }
                    var srcAttrMatch = Regex.Match(xml, @"Aggregate.*?GetEntityProperty\s+Attribute=""(?<attr>[^""]+)"".*?EntityName=""(?<ent>[^""]+)""", RegexOptions.Singleline);
                    var srcAttr = srcAttrMatch.Success ? srcAttrMatch.Groups["attr"].Value : "?";
                    var srcEnt = srcAttrMatch.Success ? srcAttrMatch.Groups["ent"].Value : relatedEntity;
                    if (!string.IsNullOrEmpty(srcEnt))
                        return $"{aggOp}({srcEnt}.{srcAttr})";
                    return $"{aggOp}({srcAttr})";
                }

                var getEntityMatches = Regex.Matches(xml, @"GetEntityProperty\s+Attribute=""(?<attr>[^""]+)""\s+Entity=""\[InputEntities\(\&quot;(?<ref>[^\&]+)\&");
                var fieldRefs = new List<string>();
                var varToField = new Dictionary<string, string>();
                int varIdx = 1;
                var constMatches = Regex.Matches(xml, @"WorkflowPropertyType\.(?<type>\w+),\s*""(?<val>[^""]+)""");
                foreach (Match cm in constMatches)
                {
                    if (cm.Groups["type"].Value == "Boolean") continue;
                    var constVar = $"SetAttributeValueStep4_{varIdx}";
                    varToField[constVar] = cm.Groups["val"].Value;
                    varIdx++;
                }
                foreach (Match m in getEntityMatches)
                {
                    var attrName = m.Groups["attr"].Value;
                    var entityRef = m.Groups["ref"].Value;
                    if (entityRef.StartsWith("related_"))
                    {
                        var relParts = entityRef.Replace("related_", "").Split('#');
                        var lookupField = relParts.Length > 0 ? relParts[0] : "?";
                        var relEntity = relParts.Length > 1 ? relParts[1] : "?";
                        fieldRefs.Add($"{relEntity}({lookupField}).{attrName}");
                    }
                    else
                    {
                        fieldRefs.Add(attrName);
                    }
                }
                var opMatches = Regex.Matches(xml, @"ExpressionOperator""\>(?<op>Multiply|Add|Subtract|Divide)\<");
                var operators = new List<string>();
                foreach (Match om in opMatches)
                {
                    var op = om.Groups["op"].Value;
                    switch (op)
                    {
                        case "Multiply": operators.Add("*"); break;
                        case "Add": operators.Add("+"); break;
                        case "Subtract": operators.Add("-"); break;
                        case "Divide": operators.Add("/"); break;
                        default: operators.Add(op); break;
                    }
                }
                if (fieldRefs.Count == 1 && operators.Count == 0)
                    return fieldRefs[0];
                var allOperands = new List<string>();
                allOperands.AddRange(varToField.Values);
                allOperands.AddRange(fieldRefs);
                if (allOperands.Count >= 2 && operators.Count >= 1)
                {
                    var expr = allOperands[0];
                    for (int opIdx = 0; opIdx < operators.Count && opIdx + 1 < allOperands.Count; opIdx++)
                        expr += $" {operators[opIdx]} {allOperands[opIdx + 1]}";
                    return expr;
                }
                if (allOperands.Count > 0)
                    return string.Join(", ", allOperands);
                return "See Dataverse UI";
            }
            catch
            {
                return "See Dataverse UI";
            }
        }

        private static string GetToolName()
        {
            return Assembly.GetExecutingAssembly().GetName().Name + ".DocumentGenerator";
        }

        private static readonly HashSet<string> PlaceholderDescriptions = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
        {
            "Click to add description",
            "Click to add description."
        };

        private static string SanitizeDescription(string description)
        {
            if (string.IsNullOrWhiteSpace(description)) return string.Empty;
            var trimmed = description.Trim();
            if (PlaceholderDescriptions.Contains(trimmed)) return string.Empty;
            return trimmed;
        }

        private static EntityMetadata[] ReadEntityMetadata(ServiceClient service)
        {
            var request = new RetrieveAllEntitiesRequest()
            {
                EntityFilters = EntityFilters.All
            };
            var response = (RetrieveAllEntitiesResponse)service.Execute(request);
            return response.EntityMetadata;
        }

        /// <summary>
        /// Resolves timezone offset. Priority:
        /// 1. input.TimeZone override (e.g. "+7", "-6", "SE Asia Standard Time")
        /// 2. WhoAmI user's timezone from Dataverse usersettings → timezonedefinition
        /// </summary>
        private static TimeSpan ResolveTimeZoneOffset(string timeZoneInput, ServiceClient serviceClient)
        {
            if (!string.IsNullOrWhiteSpace(timeZoneInput))
            {
                var trimmed = timeZoneInput.Trim();
                if (trimmed.StartsWith("+") || trimmed.StartsWith("-"))
                {
                    if (double.TryParse(trimmed, out var hours))
                        return TimeSpan.FromHours(hours);
                }
                try
                {
                    var tzInfo = TimeZoneInfo.FindSystemTimeZoneById(trimmed);
                    return tzInfo.BaseUtcOffset;
                }
                catch (TimeZoneNotFoundException) { }
            }
            return GetUserTimeZoneOffset(serviceClient);
        }

        private static TimeSpan GetUserTimeZoneOffset(ServiceClient serviceClient)
        {
            try
            {
                var whoAmI = (Microsoft.Crm.Sdk.Messages.WhoAmIResponse)serviceClient.Execute(new Microsoft.Crm.Sdk.Messages.WhoAmIRequest());
                var userSettings = serviceClient.Retrieve("usersettings", whoAmI.UserId, new ColumnSet("timezonecode"));
                var timeZoneCode = userSettings.GetAttributeValue<int?>("timezonecode");
                if (timeZoneCode == null) return TimeSpan.Zero;

                var tzFetch = $@"<fetch top=""1"">
  <entity name=""timezonedefinition"">
    <attribute name=""standardname"" />
    <filter>
      <condition attribute=""timezonecode"" operator=""eq"" value=""{timeZoneCode.Value}"" />
    </filter>
  </entity>
</fetch>";
                var tzRows = serviceClient.RetrieveMultiple(new FetchExpression(tzFetch));
                if (tzRows.Entities.Count > 0)
                {
                    var standardName = tzRows.Entities[0].GetAttributeValue<string>("standardname");
                    if (!string.IsNullOrEmpty(standardName))
                    {
                        var tzInfo = TimeZoneInfo.FindSystemTimeZoneById(standardName);
                        return tzInfo.BaseUtcOffset;
                    }
                }
                return TimeSpan.Zero;
            }
            catch
            {
                return TimeSpan.Zero;
            }
        }

        internal static void Run(string connectionString, string folder, string solution, string timeZone)
        {
            AnsiConsole.MarkupLine($"[cyan]Connecting to Dataverse...[/]");

            var serviceClient = new ServiceClient(connectionString);
            if (!serviceClient.IsReady)
                throw new InvalidOperationException($"Cannot connect to Dataverse: {serviceClient.LastError}");

            if (!Path.IsPathRooted(folder))
                folder = Path.GetFullPath(folder);
            Directory.CreateDirectory(folder);

            var instance = new TaskDocumentGenerator();
            instance.Generate(serviceClient, folder, solution, timeZone);
        }

        private string outputFolder;
        private string solutionName;

        private void Generate(ServiceClient serviceClient, string folder, string solution, string timeZone)
        {
            outputFolder = folder;
            solutionName = solution;

            userTimeZoneOffset = ResolveTimeZoneOffset(timeZone, serviceClient);
            var tzSign = userTimeZoneOffset >= TimeSpan.Zero ? "+" : "";
            var tzSource = string.IsNullOrWhiteSpace(timeZone) ? " (from WhoAmI user settings)" : $" (from input: {timeZone})";
            AnsiConsole.MarkupLine($"[cyan]Timezone:[/] UTC{tzSign}{userTimeZoneOffset.Hours:D2}:{userTimeZoneOffset.Minutes:D2}{tzSource}");

            EntityMetadata[] entityMetadatas = ReadEntityMetadata(serviceClient);
            metadataDict = entityMetadatas.ToDictionary(x => x.LogicalName.ToLower(), x => x);
            entities = GetEntityBySolution(solution, serviceClient);
            SolutionOptionSets = GetOptionSetsBySolution(solution, serviceClient);
            businessRulesDict = GetBusinessRules(serviceClient);
            formsDict = GetForms(serviceClient);
            viewsDict = GetViews(serviceClient);

            AnsiConsole.MarkupLine($"[cyan]Solution:[/] {Markup.Escape(solution)} ({entities.Count} entities)");

            foreach (var entity in entities)
            {
                EntityMetadata meta;
                if (metadataDict.TryGetValue(entity.ToLower(), out meta) && (meta.IsIntersect ?? false))
                    continue;
                var fileName = Path.Combine(folder, $"{entity}.md");
                CreateDocumentFile(entity, fileName, entityMetadatas);
                AnsiConsole.MarkupLine($"  [dim]Generated:[/] {entity}.md");
            }
            DocumentGlobalOptionSet(Path.Combine(folder, "GlobalOptionSet.md"));
            AnsiConsole.MarkupLine($"  [dim]Generated:[/] GlobalOptionSet.md");
            DocumentErd(Path.Combine(folder, "Erd.md"), entityMetadatas);
            AnsiConsole.MarkupLine($"  [dim]Generated:[/] Erd.md");
            AnsiConsole.MarkupLine($"[green]Done![/] Output: {Markup.Escape(folder)}");
        }

        private void DocumentErd(string file, EntityMetadata[] entityMetadatas)
        {
            var sb = new StringBuilder();
            sb.Append($"# Entity Relationship Diagram{NEW_LINE}{NEW_LINE}");
            sb.Append($":::mermaid{NEW_LINE}");
            sb.Append($"classDiagram{NEW_LINE}");
            sb.Append($"{TAB}direction RL{NEW_LINE}");

            var allLookupSchemas = new Dictionary<string, HashSet<string>>(StringComparer.OrdinalIgnoreCase);
            foreach (var entity in entities)
            {
                EntityMetadata metadata;
                if (!metadataDict.TryGetValue(entity.ToLower(), out metadata)) continue;
                if (metadata.IsIntersect ?? false) continue;
                AppendErdClassDef(sb, metadata);
                allLookupSchemas[entity] = CollectLookupSchemaNames(metadata);
            }

            var globalErdEdges = new HashSet<string>();
            foreach (var entity in entities)
            {
                EntityMetadata metadata;
                if (!metadataDict.TryGetValue(entity.ToLower(), out metadata)) continue;
                if (metadata.IsIntersect ?? false) continue;
                HashSet<string> lookups;
                if (!allLookupSchemas.TryGetValue(entity, out lookups)) continue;
                AppendErdEdges(sb, metadata, metadata.SchemaName, metadataDict, lookups, globalErdEdges);
            }

            foreach (var entity in entities)
            {
                EntityMetadata metadata;
                if (!metadataDict.TryGetValue(entity.ToLower(), out metadata)) continue;
                if (metadata.IsIntersect ?? false)
                {
                    var intersectRelationship = entityMetadatas
                        .SelectMany(e => e.ManyToManyRelationships)
                        .FirstOrDefault(r => r.IntersectEntityName == metadata.LogicalName);
                    var referencingEntity = intersectRelationship?.Entity1LogicalName ?? "";
                    var referencedEntity = intersectRelationship?.Entity2LogicalName ?? "";
                    if (!string.IsNullOrEmpty(referencingEntity) && !string.IsNullOrEmpty(referencedEntity))
                    {
                        EntityMetadata entity1Metadata;
                        metadataDict.TryGetValue(referencingEntity.ToLower(), out entity1Metadata);
                        EntityMetadata entity2Metadata;
                        metadataDict.TryGetValue(referencedEntity.ToLower(), out entity2Metadata);
                        if (entity1Metadata != null && entity2Metadata != null)
                        {
                            sb.Append($"{TAB}{entity1Metadata.SchemaName} *--* {entity2Metadata.SchemaName}{NEW_LINE}");
                        }
                    }
                }
            }

            sb.Append($":::{NEW_LINE}");
            sb.Append($"{NEW_LINE}---{NEW_LINE}>This file generated by tool ***{GetToolName()}***{NEW_LINE}");
            sb.Append($"---{NEW_LINE}");
            var wikiResult = sb.ToString();
            if (!IsTheSame(file, wikiResult, out var lastLine))
            {
                wikiResult += $">***This file modified on:*** ";
                wikiResult += $"```{DateTime.Now.ToString("yyyy-MMM-dd HH:mm:ss")}```";
            }
            else
            {
                wikiResult += lastLine;
            }
            File.WriteAllText(file, wikiResult, Encoding.UTF8);
        }

        private void DocumentGlobalOptionSet(string file)
        {
            var sb = new StringBuilder();
            foreach (var attribute in GlobalOptionSet.OrderBy(x => x.OptionSet.Name))
            {
                var optionset = (EnumAttributeMetadata)attribute;
                sb.Append($"# {optionset.OptionSet.Name} {NEW_LINE}");
                foreach (var item in optionset.OptionSet.Options.OrderBy(x => x.Label.ToWikiString()))
                    sb.Append($"  * {item.Label.ToWikiString()} [{item.Value}]{NEW_LINE}");
                sb.Append($"{NEW_LINE}");
            }
            sb.Append($"{NEW_LINE}---{NEW_LINE}>This file generated by tool ***{GetToolName()}***{NEW_LINE}");
            sb.Append($"---{NEW_LINE}");
            var wiki = sb.ToString();
            if (!IsTheSame(file, wiki, out var lastLine))
            {
                wiki += $">***This file modified on:*** ";
                wiki += $"```{DateTime.Now.ToString("yyyy-MMM-dd HH:mm:ss")}```";
            }
            else
            {
                wiki += lastLine;
            }
            File.WriteAllText(file, wiki, Encoding.UTF8);
        }

        private void CreateDocumentFile(string entityName, string file, EntityMetadata[] entityMetadatas)
        {
            var sb = new StringBuilder();
            EntityMetadata entity;
            if (!metadataDict.TryGetValue(entityName.ToLower(), out entity)) return;
            var displayName = entity.DisplayName.ToWikiString();
            if (string.IsNullOrWhiteSpace(displayName)) displayName = entity.SchemaName;
            sb.Append($"# {displayName} - {entity.SchemaName} - {entity.LogicalName}{NEW_LINE}");
            var description = entity.Description.ToWikiString();
            if (string.IsNullOrWhiteSpace(description))
                sb.Append($"> *No description provided*{NEW_LINE}");
            else
                sb.Append($">{description}{NEW_LINE}");
            sb.Append(NEW_LINE);

            sb.Append($"## Table of Contents{NEW_LINE}");
            sb.Append($"- [Settings](#settings){NEW_LINE}");
            sb.Append($"- [Entity Diagram](#entity-diagram){NEW_LINE}");
            sb.Append($"- [Custom Columns](#custom-columns){NEW_LINE}");
            sb.Append($"- [System Columns](#system-columns){NEW_LINE}");
            sb.Append($"- [Calculated & Rollup Fields](#calculated--rollup-fields){NEW_LINE}");
            sb.Append($"- [Keys](#keys){NEW_LINE}");
            sb.Append($"- [Relationships](#relationships){NEW_LINE}");
            sb.Append($"- [Forms](#forms){NEW_LINE}");
            sb.Append($"- [Views](#views){NEW_LINE}");
            sb.Append($"- [Business Rules & Power Fx](#business-rules--power-fx){NEW_LINE}");
            sb.Append($"- [Server-Side Code](#server-side-code){NEW_LINE}");
            sb.Append(NEW_LINE);

            sb.Append($"## Settings{NEW_LINE}");
            sb.Append($"|**Setting**|**Value**|**Setting**|**Value**{NEW_LINE}");
            sb.Append($"|:-|:-|:-|:-{NEW_LINE}");
            sb.Append($"|Display Name|**```{entity.DisplayName.ToWikiString()}```**|Plural Name|**```{entity.DisplayCollectionName.ToWikiString()}```**{NEW_LINE}");
            sb.Append($"|Schema Name|**```{entity.SchemaName}```**|Logical Name|**```{entity.LogicalName}```**{NEW_LINE}");
            sb.Append($"|Ownership|**```{entity.GetOwnershipTypeName()}```**|Entity Type|**```{entity.GetEntityTypeName()}```**{NEW_LINE}");
            sb.Append($"|Created On|**```{entity.CreatedOn.Value.ToWikiString()}```**| | {NEW_LINE}");
            sb.Append(NEW_LINE);

            sb.Append($"{entity.IsActivity.ToWikiBooleanString()}Activity {entity.IsAuditEnabled.ToWikiBooleanString()}Auditing {entity.IsActivityParty.ToWikiBooleanString()}Regradings {entity.IsQuickCreateEnabled.ToWikiBooleanString()}Quick Create {entity.IsBusinessProcessEnabled?.ToWikiBooleanString()}Process {entity.HasNotes.ToWikiBooleanString()}Notes {entity.HasEmailAddresses.ToWikiBooleanString()}OOB Email {entity.IsDocumentManagementEnabled.ToWikiBooleanString()}Documents {entity.IsDuplicateDetectionEnabled.ToWikiBooleanString()}Duplicate {entity.IsReadOnlyInMobileClient.ToWikiBooleanString()}Read-Only {entity.ChangeTrackingEnabled.ToWikiBooleanString()} Tracking {entity.IsElasticEntity().ToWikiBooleanString()}Elastic {entity.IsVirtualEntity().ToWikiBooleanString()}Virtual{NEW_LINE}");
            sb.Append(NEW_LINE);

            sb.Append($"## Entity Diagram{NEW_LINE}");
            sb.Append($":::mermaid{NEW_LINE}");
            sb.Append($"classDiagram{NEW_LINE}");
            sb.Append($"{TAB}direction RL{NEW_LINE}");
            AppendErdClassDef(sb, entity);
            var miniLookups = CollectLookupSchemaNames(entity);
            var miniErdEdges = new HashSet<string>();
            AppendErdEdges(sb, entity, entity.SchemaName, metadataDict, miniLookups, miniErdEdges);
            sb.Append($":::{NEW_LINE}{NEW_LINE}");

            var allAttributes = entity.Attributes.ToWikiAttributes();
            var customColumns = allAttributes.Where(a => a.IsCustomAttribute == true && !a.LogicalName.EndsWith("_base")).ToList();
            var baseColumns = allAttributes.Where(a => a.IsCustomAttribute == true && a.LogicalName.EndsWith("_base")).ToList();
            var systemColumns = allAttributes.Where(a => a.IsCustomAttribute == false).Concat(baseColumns).OrderBy(a => a.LogicalName).ToList();

            sb.Append($"## Custom Columns{NEW_LINE}");
            sb.Append($"|**#**|**Logical Name**|**Schema Name**|**Display Name**|**Type**|**Field Type**|**Required**|**Searchable**|**Audit**|**Description**|**Created On**{NEW_LINE}");
            sb.Append($"|:-:|:-|:-|:-|:-|:-|:-:|:-:|:-:|:-|:-{NEW_LINE}");
            var i = 1;
            foreach (var attribute in customColumns)
            {
                AddGlobalOptionSets(attribute);
                sb.Append(FormatColumnRow(attribute, i) + NEW_LINE);
                i++;
            }
            sb.Append($"{NEW_LINE}> **Total: {customColumns.Count} custom columns**{NEW_LINE}");

            sb.Append(NEW_LINE);
            sb.Append($"## System Columns{NEW_LINE}");
            sb.Append($"|**#**|**Logical Name**|**Schema Name**|**Display Name**|**Type**|**Field Type**|**Required**|**Searchable**|**Audit**|**Description**|**Created On**{NEW_LINE}");
            sb.Append($"|:-:|:-|:-|:-|:-|:-|:-:|:-:|:-:|:-|:-{NEW_LINE}");
            i = 1;
            foreach (var attribute in systemColumns)
            {
                AddGlobalOptionSets(attribute);
                sb.Append(FormatColumnRow(attribute, i) + NEW_LINE);
                i++;
            }
            sb.Append($"{NEW_LINE}> **Total: {systemColumns.Count} system columns**{NEW_LINE}");
            sb.Append(NEW_LINE);

            var calculatedOrRollup = allAttributes.Where(a => (a.SourceType == 1 || a.SourceType == 2) && !a.LogicalName.EndsWith("_base")).ToList();
            sb.Append($"## Calculated & Rollup Fields{NEW_LINE}");
            if (calculatedOrRollup.Any())
            {
                sb.Append($"|**Logical Name**|**Type**|**Definition**|{NEW_LINE}");
                sb.Append($"|:-|:-|:-|{NEW_LINE}");
                foreach (var attr in calculatedOrRollup)
                {
                    var typeLabel = attr.SourceType == 1 ? "Calculated" : "Rollup";
                    var formula = string.Empty;
                    var propInfo = attr.GetType().GetProperty("FormulaDefinition");
                    if (propInfo != null)
                    {
                        var val = propInfo.GetValue(attr, null);
                        if (val != null)
                        {
                            formula = val.ToString();
                            if (formula.Contains("<?xml") || formula.Contains("<Activity"))
                                formula = ParseFormulaXml(formula, attr.SourceType ?? 0);
                        }
                    }
                    if (string.IsNullOrWhiteSpace(formula)) formula = "*Definition not available*";
                    sb.Append($"|{attr.LogicalName}|{typeLabel}|`{formula}`|{NEW_LINE}");
                }
            }
            else
            {
                sb.Append($"> *No calculated or rollup fields*{NEW_LINE}");
            }
            sb.Append(NEW_LINE);

            i = 1;
            sb.Append($"## Keys{NEW_LINE}");
            sb.Append($"|**#**|**Display Name**|**Logical Name**|**Columns**|**Status**{NEW_LINE}");
            sb.Append($"|:-:|:-|:-|:-|:-{NEW_LINE}");
            foreach (var key in entity.Keys.OrderBy(x => x.LogicalName).ToList())
            {
                var line = $"|{i}|{key.DisplayName.ToWikiString()}|{ConvertToFixed25(key.LogicalName)}|{string.Join(",", key.KeyAttributes.OrderBy(x => x))}|```{key.EntityKeyIndexStatus.ToString()}```";
                sb.Append(line + NEW_LINE);
                i++;
            }

            sb.Append(NEW_LINE);
            sb.Append($"## Relationships{NEW_LINE}");

            sb.Append($"### 1-N{NEW_LINE}");
            i = 1;
            var oneToMany = entity.OneToManyRelationships.OrderBy(x => x.ReferencedEntity).ThenBy(x => x.ReferencingEntity)
                .Where(r => !BlackList.Contains(r.ReferencingEntity) && !BlackList.Contains(r.ReferencedEntity) && !BlackList.Contains(r.ReferencedAttribute) && !BlackList.Contains(r.ReferencingAttribute)).ToList();
            if (oneToMany.Any())
            {
                sb.Append($"|**#**|**1**|**N**|**Schema Name**{NEW_LINE}");
                sb.Append($"|:-:|:-|:-|:-{NEW_LINE}");
                foreach (var relationship in oneToMany)
                {
                    var line = $"|{i}|{EntityWikiLink(relationship.ReferencedEntity)}.{relationship.ReferencedAttribute}|{EntityWikiLink(relationship.ReferencingEntity)}.{relationship.ReferencingAttribute}|{relationship.SchemaName}";
                    sb.Append(line + NEW_LINE);
                    i++;
                }
            }
            else
            {
                sb.Append($"> *No 1-N relationships*{NEW_LINE}");
            }

            sb.Append($"### N-1{NEW_LINE}");
            i = 1;
            var manyToOne = entity.ManyToOneRelationships.OrderBy(x => x.ReferencingEntity).ThenBy(x => x.ReferencedEntity)
                .Where(r => !BlackList.Contains(r.ReferencingEntity) && !BlackList.Contains(r.ReferencedEntity) && !BlackList.Contains(r.ReferencedAttribute) && !BlackList.Contains(r.ReferencingAttribute)).ToList();
            if (manyToOne.Any())
            {
                sb.Append($"|**#**|**N**|**1**|**Schema Name**{NEW_LINE}");
                sb.Append($"|:-:|:-|:-|:-{NEW_LINE}");
                foreach (var relationship in manyToOne)
                {
                    var line = $"|{i}|{EntityWikiLink(relationship.ReferencedEntity)}.{relationship.ReferencedAttribute}|{EntityWikiLink(relationship.ReferencingEntity)}.{relationship.ReferencingAttribute}|{relationship.SchemaName}";
                    sb.Append(line + NEW_LINE);
                    i++;
                }
            }
            else
            {
                sb.Append($"> *No N-1 relationships*{NEW_LINE}");
            }

            sb.Append($"### N-N{NEW_LINE}");
            i = 1;
            var manyToMany = entity.ManyToManyRelationships.OrderBy(x => x.Entity1LogicalName).ThenBy(x => x.Entity2LogicalName)
                .Where(r => !BlackList.Contains(r.Entity1LogicalName) && !BlackList.Contains(r.Entity1IntersectAttribute) && !BlackList.Contains(r.Entity2LogicalName) && !BlackList.Contains(r.Entity2IntersectAttribute)).ToList();
            if (manyToMany.Any())
            {
                sb.Append($"|**#**|**N**|**N**|**Schema Name**{NEW_LINE}");
                sb.Append($"|:-:|:-|:-|:-{NEW_LINE}");
                foreach (var relationship in manyToMany)
                {
                    var line = $"|{i}|{EntityWikiLink(relationship.Entity1LogicalName)}.{relationship.Entity1IntersectAttribute}|{EntityWikiLink(relationship.Entity2LogicalName)}.{relationship.Entity2IntersectAttribute}|{relationship.SchemaName}";
                    sb.Append(line + NEW_LINE);
                    i++;
                }
            }
            else
            {
                sb.Append($"> *No N-N relationships*{NEW_LINE}");
            }

            sb.Append($"## Forms{NEW_LINE}");
            List<FormInfo> forms;
            if (formsDict.TryGetValue(entityName, out forms) && forms.Count > 0)
            {
                sb.Append($"|**#**|**Name**|**Form Type**|**Description**{NEW_LINE}");
                sb.Append($"|:-:|:-|:-|:-{NEW_LINE}");
                var fIdx = 1;
                foreach (var form in forms.OrderBy(f => f.FormType).ThenBy(f => f.Name))
                {
                    sb.Append($"|{fIdx}|{form.Name}|```{form.FormType}```|{form.Description}{NEW_LINE}");
                    fIdx++;
                }
            }
            else
            {
                sb.Append($"> *No forms*{NEW_LINE}");
            }
            sb.Append(NEW_LINE);

            sb.Append($"## Views{NEW_LINE}");
            List<ViewInfo> views;
            if (viewsDict.TryGetValue(entityName, out views) && views.Count > 0)
            {
                sb.Append($"|**#**|**Name**|**Default**|**Description**{NEW_LINE}");
                sb.Append($"|:-:|:-|:-:|:-{NEW_LINE}");
                var vIdx = 1;
                foreach (var view in views.OrderBy(v => v.Name))
                {
                    sb.Append($"|{vIdx}|{view.Name}|{view.IsDefault.ToWikiBooleanString()}|{view.Description}{NEW_LINE}");
                    vIdx++;
                }
            }
            else
            {
                sb.Append($"> *No views*{NEW_LINE}");
            }
            sb.Append(NEW_LINE);

            sb.Append($"## Business Rules & Power Fx{NEW_LINE}");
            List<BusinessRuleInfo> rules;
            if (businessRulesDict.TryGetValue(entityName, out rules) && rules.Count > 0)
            {
                sb.Append($"### Business Rules{NEW_LINE}");
                sb.Append($"|**#**|**Name**|**Scope**|**Status**|**Description**{NEW_LINE}");
                sb.Append($"|:-:|:-|:-|:-|:-{NEW_LINE}");
                var brIdx = 1;
                foreach (var rule in rules.OrderBy(r => r.Name))
                {
                    sb.Append($"|{brIdx}|{rule.Name}|{rule.Scope}|```{rule.StatusCode}```|{rule.Description}{NEW_LINE}");
                    brIdx++;
                }
                sb.Append(NEW_LINE);
            }

            var powerFxColumns = allAttributes.Where(a => a.SourceType == 3).OrderBy(a => a.LogicalName).ToList();
            if (powerFxColumns.Any())
            {
                sb.Append($"### Power Fx{NEW_LINE}");
                sb.Append($"|**#**|**Logical Name**|**Display Name**|**Type**|**Formula**{NEW_LINE}");
                sb.Append($"|:-:|:-|:-|:-|:-{NEW_LINE}");
                var pfIdx = 1;
                foreach (var attr in powerFxColumns)
                {
                    var pfDisplayName = attr.DisplayName.ToWikiString();
                    var attrType = GetAttributeType(attr);
                    var formula = string.Empty;
                    var propInfo = attr.GetType().GetProperty("FormulaDefinition");
                    if (propInfo != null)
                    {
                        var val = propInfo.GetValue(attr, null);
                        if (val != null) formula = val.ToString();
                    }
                    if (string.IsNullOrWhiteSpace(formula)) formula = "*Definition not available*";
                    formula = formula.Replace("\r\n", " ").Replace("\n", " ").Replace("  ", " ").Trim();
                    sb.Append($"|{pfIdx}|{attr.LogicalName}|{pfDisplayName}|{attrType}|`{formula}`{NEW_LINE}");
                    pfIdx++;
                }
                sb.Append(NEW_LINE);
            }

            if (!(businessRulesDict.TryGetValue(entityName, out _) && rules != null && rules.Count > 0) && !powerFxColumns.Any())
            {
                sb.Append($"> *No business rules or Power Fx*{NEW_LINE}");
            }
            sb.Append(NEW_LINE);

            sb.Append($"## Server-Side Code{NEW_LINE}");
            var allServerLines = new List<string>();
            var knownFiles = new HashSet<string>(StringComparer.OrdinalIgnoreCase) { "GlobalOptionSet.md", "Erd.md" };
            foreach (var ent in entities)
                knownFiles.Add($"{ent}.md");

            var folderDir = Path.GetDirectoryName(file);
            if (Directory.Exists(folderDir))
            {
                var allMdFiles = Directory.GetFiles(folderDir, "*.md", SearchOption.TopDirectoryOnly);
                foreach (var mdFile in allMdFiles.OrderBy(f => Path.GetFileName(f)))
                {
                    var mdFileName = Path.GetFileName(mdFile);
                    if (knownFiles.Contains(mdFileName)) continue;
                    var codeLines = File.ReadAllLines(mdFile);
                    var inTargetSection = false;
                    var matchedLines = new List<string>();
                    var lastHeaderLine = "";
                    foreach (var line in codeLines)
                    {
                        if (line.StartsWith("## "))
                        {
                            lastHeaderLine = line;
                            var header = line.Substring(3).Trim();
                            var schemaForMatch = entity.SchemaName;
                            var nameWithoutPrefix = schemaForMatch;
                            if ((entity.IsCustomEntity ?? false) && schemaForMatch.Contains("_"))
                                nameWithoutPrefix = schemaForMatch.Substring(schemaForMatch.IndexOf('_') + 1);
                            var pascalName = string.Join("", nameWithoutPrefix
                                .Split('_')
                                .Select(s => s.Length > 0 ? char.ToUpper(s[0]) + s.Substring(1) : s));
                            if (header.IndexOf($".{schemaForMatch}.", StringComparison.OrdinalIgnoreCase) >= 0 ||
                                header.IndexOf($".{pascalName}.", StringComparison.OrdinalIgnoreCase) >= 0)
                                inTargetSection = true;
                            else
                                inTargetSection = false;
                        }
                        else if (line.StartsWith("> Target Entity: "))
                        {
                            var targetEntity = line.Substring("> Target Entity: ".Length).Trim('`', ' ');
                            if (string.Equals(targetEntity, entity.SchemaName, StringComparison.OrdinalIgnoreCase))
                            {
                                if (!inTargetSection && !string.IsNullOrEmpty(lastHeaderLine))
                                    matchedLines.Add(lastHeaderLine);
                                inTargetSection = true;
                            }
                        }
                        else if (line.TrimStart().StartsWith("---") || line.TrimStart().StartsWith(">Generated by tool"))
                        {
                            inTargetSection = false;
                        }

                        if (inTargetSection)
                        {
                            if (line.StartsWith("## "))
                                matchedLines.Add("#" + line);
                            else
                                matchedLines.Add(line);
                        }
                    }
                    if (matchedLines.Count > 0)
                    {
                        allServerLines.Add($"> From [{mdFileName}]({mdFileName}){NEW_LINE}{NEW_LINE}");
                        allServerLines.AddRange(matchedLines);
                        allServerLines.Add("");
                    }
                }
            }

            if (allServerLines.Count > 0)
            {
                foreach (var l in allServerLines)
                    sb.Append(l + NEW_LINE);
            }
            else
            {
                sb.Append($"> *No server-side code registered*{NEW_LINE}");
            }

            sb.Append($"---{NEW_LINE}");
            sb.Append($">Latest entity: ***{entity.LogicalName}*** modified on: ***{entity.ModifiedOn.Value.UtcToUserLocal(userTimeZoneOffset):yyyy-MMM-dd HH:mm:ss}***{NEW_LINE}{NEW_LINE}");
            sb.Append($"{NEW_LINE}");
            sb.Append($">Latest field: ***{entity.Attributes.OrderByDescending(x => x.ModifiedOn).First().LogicalName}*** modified on: ***{entity.Attributes.OrderByDescending(x => x.ModifiedOn).First().ModifiedOn.Value.UtcToUserLocal(userTimeZoneOffset):yyyy-MMM-dd HH:mm:ss}***{NEW_LINE}");
            sb.Append($"{NEW_LINE}{NEW_LINE}>This file generated by tool ***{GetToolName()}***{NEW_LINE}");
            sb.Append($"{NEW_LINE}");
            var wiki = sb.ToString();
            if (!IsTheSame(file, wiki, out var lastLine))
            {
                wiki += $">***This file modified on:*** ";
                wiki += $"```{DateTime.Now.ToString("yyyy-MMM-dd HH:mm:ss")}```";
            }
            else
            {
                wiki += lastLine;
            }
            File.WriteAllText(file, wiki, Encoding.UTF8);
        }

        private string FormatColumnRow(AttributeMetadata attribute, int index)
        {
            var line = $"|{index}|{ConvertToFixed25(attribute.LogicalName)}{MoreLogicalName(attribute)}|{ConvertToFixed25(attribute.SchemaName)}|{attribute.DisplayName.ToWikiString()}|{GetAttributeType(attribute)}|{GetSourceType(attribute.SourceType)}|{attribute.RequiredLevel.ToWikiBooleanString()}|{attribute.IsSearchable.ToWikiBooleanString()}|{attribute.IsAuditEnabled.ToWikiBooleanString()}|{ConvertToFixed100(attribute.Description.ToWikiString())}|{attribute.CreatedOn?.ToString("yyyy-MM-dd")}";
            if ((attribute.IsPrimaryName ?? false) || (attribute.IsPrimaryId ?? false))
            {
                line = line.Replace("|", "**|**");
                line = line.Substring(3) + "**";
                line = line.Replace("****", "");
            }
            if ((attribute.DisplayName?.UserLocalizedLabel?.Label.Contains("[") ?? false) &&
                 (attribute.DisplayName?.UserLocalizedLabel?.Label.Contains("]") ?? false))
            {
                line = line.Replace("|", "~~|~~");
                line = line.Substring(3) + "~~";
            }
            return line;
        }

        private string GlobalWikiLink(string name)
        {
            if (GlobalOptionSetNames.Contains(name))
                return $"[{name}](GlobalOptionSet.md#{name})";
            return name;
        }

        private static string ConvertToFixed100(string value)
        {
            if (value == null) return string.Empty;
            if (value.Length <= 100) return value;
            return $"{value.Substring(0, 100)}<br/>{ConvertToFixed100(value.Substring(100))}";
        }

        private static string GetSourceType(int? sourceType)
        {
            if (sourceType == null) return "```Simple```";
            if (sourceType == 1) return "```Calculated```";
            if (sourceType == 2) return "```Rollup```";
            if (sourceType == 3) return "```Power-Fx```";
            return "```Simple```";
        }

        private static string MoreLogicalName(AttributeMetadata attribute)
        {
            if (attribute.IsPrimaryId ?? false) return "<br/>```primary id```";
            if (attribute.IsPrimaryName ?? false) return "<br/>```primary name```";
            return string.Empty;
        }

        private static bool IsTheSame(string file, string wiki, out string lastLine)
        {
            lastLine = string.Empty;
            var lines = File.Exists(file) ? File.ReadAllLines(file) : new string[] { };
            if (lines.Length == 0) return string.IsNullOrEmpty(wiki);
            var oldSb = new StringBuilder();
            for (var i = 0; i < lines.Length - 1; i++)
                oldSb.Append(lines[i] + NEW_LINE);
            lastLine = lines[lines.Length - 1];
            var wikiCompare = ConvertToCompare(wiki);
            var oldCompare = ConvertToCompare(oldSb.ToString());
            return wikiCompare == oldCompare;
        }

        private static string ConvertToCompare(string wiki)
        {
            return wiki.Replace(" ", string.Empty)
                .Replace("\r\n", string.Empty)
                .Replace("\r", string.Empty)
                .Replace("\n", string.Empty)
                .Replace("'", string.Empty)
                .Replace("\"", string.Empty);
        }

        private string EntityWikiLink(string name)
        {
            EntityMetadata entity;
            metadataDict.TryGetValue(name.ToLower(), out entity);
            name = entity?.SchemaName ?? name;
            if (File.Exists(Path.Combine(outputFolder, $"{name}.md")))
                return $"[{name}]({name}.md)";
            return name;
        }

        private string GetAttributeType(AttributeMetadata attribute)
        {
            if (attribute is LookupAttributeMetadata lookup)
            {
                var value = $"{attribute.AttributeType.ToWikiOptionSetString()}";
                value += "<ul>";
                foreach (var item in lookup.Targets.OrderBy(x => x))
                    value += $"<li>{EntityWikiLink(item)}</li>";
                value += "</ul>";
                return value;
            }
            else if (attribute is StateAttributeMetadata state)
            {
                var value = $"{attribute.AttributeType.ToWikiOptionSetString()}";
                value += "<ul>";
                foreach (var item in state.OptionSet.Options.OrderBy(x => x.Label.ToWikiString()))
                    value += $"<li>{item.Label.ToWikiString()} [{item.Value}]</li>";
                value += "</ul>";
                return value;
            }
            else if (attribute is StatusAttributeMetadata status)
            {
                var value = $"{attribute.AttributeType.ToWikiOptionSetString()}";
                value += "<ul>";
                foreach (var item in status.OptionSet.Options.OrderBy(x => x.Label.ToWikiString()))
                    value += $"<li>{item.Label.ToWikiString()} [{item.Value}]</li>";
                value += "</ul>";
                return value;
            }
            else if (attribute is PicklistAttributeMetadata picklist)
            {
                var value = $"{attribute.AttributeType.ToWikiOptionSetString()}";
                if (picklist.OptionSet.IsGlobal ?? false)
                {
                    value += "<ul>";
                    value += $"<li>{GlobalWikiLink(picklist.OptionSet.Name)}</li>";
                    value += "</ul>";
                }
                else
                {
                    value += "<ul>";
                    foreach (var item in picklist.OptionSet.Options.OrderBy(x => x.Label.ToWikiString()))
                        value += $"<li>{item.Label.ToWikiString()} [{item.Value}]</li>";
                    value += "</ul>";
                }
                return value;
            }
            else if (attribute is MultiSelectPicklistAttributeMetadata picklist2)
            {
                var value = $"MultiPicklist";
                if (picklist2.OptionSet.IsGlobal ?? false)
                {
                    value += "<ul>";
                    value += $"<li>{GlobalWikiLink(picklist2.OptionSet.Name)}</li>";
                    value += "</ul>";
                }
                else
                {
                    value += "<ul>";
                    foreach (var item in picklist2.OptionSet.Options.OrderBy(x => x.Label.ToWikiString()))
                        value += $"<li>{item.Label.ToWikiString()} [{item.Value}]</li>";
                    value += "</ul>";
                }
                return value;
            }
            else if (attribute is DateTimeAttributeMetadata datetime)
            {
                if (datetime.DateTimeBehavior == DateTimeBehavior.DateOnly)
                    return "Date";
                return "DateTime";
            }
            else if (attribute is StringAttributeMetadata stringAttribute)
            {
                return $"{attribute.AttributeType.ToWikiOptionSetString()} ({stringAttribute.MaxLength})";
            }
            return attribute.AttributeType.ToWikiOptionSetString();
        }

        private static string ConvertToFixed25(string logicalName)
        {
            if (logicalName.Length <= 25) return logicalName;
            return $"{logicalName.Substring(0, 25)}<br/>{logicalName.Substring(25)}";
        }

        private void AddGlobalOptionSets(AttributeMetadata attribute)
        {
            if (attribute is PicklistAttributeMetadata picklist)
            {
                if (picklist.OptionSet.IsGlobal ?? false)
                {
                    if (SolutionOptionSets.Contains(picklist.OptionSet.Name) &&
                        !GlobalOptionSetNames.Contains(picklist.OptionSet.Name))
                    {
                        GlobalOptionSet.Add((EnumAttributeMetadata)attribute);
                        GlobalOptionSetNames.Add(picklist.OptionSet.Name);
                    }
                }
            }
            if (attribute is MultiSelectPicklistAttributeMetadata picklist2)
            {
                if (picklist2.OptionSet.IsGlobal ?? false)
                {
                    if (SolutionOptionSets.Contains(picklist2.OptionSet.Name) &&
                        !GlobalOptionSetNames.Contains(picklist2.OptionSet.Name))
                    {
                        GlobalOptionSet.Add((EnumAttributeMetadata)attribute);
                        GlobalOptionSetNames.Add(picklist2.OptionSet.Name);
                    }
                }
            }
        }

        private static List<string> GetEntityBySolution(string solutionName, ServiceClient serviceClient)
        {
            var fetchXml = $@"<?xml version=""1.0"" encoding=""utf-16""?>
<fetch version=""1.0"" output-format=""xml-platform"" mapping=""logical"" distinct=""true"">
  <entity name=""solutioncomponent"">
    <link-entity name=""solution"" from=""solutionid"" to=""solutionid"">
      <filter>
        <condition attribute=""uniquename"" operator=""eq"" value=""{solutionName}"" />
      </filter>
    </link-entity>
    <link-entity name=""entity"" from=""entityid"" to=""objectid"" alias=""entity"">
      <attribute name=""name"" />
      <order attribute=""name"" />
    </link-entity>
  </entity>
</fetch>";
            var list = new List<string>();
            var rows = serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            foreach (var row in rows.Entities)
            {
                var entityName = row.GetAttributeValue<AliasedValue>("entity.name").Value.ToString();
                list.Add(entityName);
            }
            return list;
        }

        private static HashSet<string> GetOptionSetsBySolution(string solutionName, ServiceClient serviceClient)
        {
            var fetchXml = $@"<?xml version=""1.0"" encoding=""utf-16""?>
<fetch>
  <entity name=""solutioncomponent"">
    <filter>
      <condition attribute=""componenttype"" operator=""eq"" value=""9"" />
    </filter>
    <link-entity name=""solution"" from=""solutionid"" to=""solutionid"">
      <filter>
        <condition attribute=""uniquename"" operator=""eq"" value=""{solutionName}"" />
      </filter>
    </link-entity>
    <link-entity name=""optionset"" from=""optionsetid"" to=""objectid"" alias=""optionset"">
      <attribute name=""name"" />
    </link-entity>
  </entity>
</fetch>";
            var set = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            var rows = serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            foreach (var row in rows.Entities)
            {
                var optionsetName = row.GetAttributeValue<AliasedValue>("optionset.name")?.Value?.ToString();
                if (!string.IsNullOrEmpty(optionsetName))
                    set.Add(optionsetName);
            }
            return set;
        }

        private Dictionary<string, List<FormInfo>> GetForms(ServiceClient serviceClient)
        {
            var dict = new Dictionary<string, List<FormInfo>>(StringComparer.OrdinalIgnoreCase);
            try
            {
                var fetchXml = @"<?xml version=""1.0"" encoding=""utf-16""?>
<fetch>
  <entity name=""systemform"">
    <attribute name=""name"" />
    <attribute name=""objecttypecode"" />
    <attribute name=""type"" />
    <attribute name=""description"" />
    <filter>
      <condition attribute=""formactivationstate"" operator=""eq"" value=""1"" />
    </filter>
  </entity>
</fetch>";
                var rows = serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                foreach (var row in rows.Entities)
                {
                    var objectTypeCode = row.GetAttributeValue<string>("objecttypecode");
                    if (string.IsNullOrEmpty(objectTypeCode)) continue;
                    EntityMetadata meta;
                    if (!metadataDict.TryGetValue(objectTypeCode.ToLower(), out meta)) continue;
                    if (!entities.Contains(meta.LogicalName, StringComparer.OrdinalIgnoreCase)) continue;
                    var name = row.GetAttributeValue<string>("name") ?? string.Empty;
                    var description = SanitizeDescription(row.GetAttributeValue<string>("description"));
                    var formType = row.FormattedValues.ContainsKey("type") ? row.FormattedValues["type"] : string.Empty;
                    if (!dict.ContainsKey(meta.LogicalName))
                        dict[meta.LogicalName] = new List<FormInfo>();
                    dict[meta.LogicalName].Add(new FormInfo
                    {
                        Name = name,
                        FormType = formType,
                        Description = description.Replace("\r\n", " ").Replace("\n", " ")
                    });
                }
            }
            catch { }
            return dict;
        }

        private Dictionary<string, List<ViewInfo>> GetViews(ServiceClient serviceClient)
        {
            var dict = new Dictionary<string, List<ViewInfo>>(StringComparer.OrdinalIgnoreCase);
            try
            {
                var fetchXml = @"<?xml version=""1.0"" encoding=""utf-16""?>
<fetch>
  <entity name=""savedquery"">
    <attribute name=""name"" />
    <attribute name=""returnedtypecode"" />
    <attribute name=""description"" />
    <attribute name=""isdefault"" />
    <filter>
      <condition attribute=""statecode"" operator=""eq"" value=""0"" />
    </filter>
  </entity>
</fetch>";
                var rows = serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                foreach (var row in rows.Entities)
                {
                    var returnedTypeCode = row.GetAttributeValue<string>("returnedtypecode");
                    if (string.IsNullOrEmpty(returnedTypeCode)) continue;
                    EntityMetadata meta;
                    if (!metadataDict.TryGetValue(returnedTypeCode.ToLower(), out meta)) continue;
                    if (!entities.Contains(meta.LogicalName, StringComparer.OrdinalIgnoreCase)) continue;
                    var name = row.GetAttributeValue<string>("name") ?? string.Empty;
                    var description = SanitizeDescription(row.GetAttributeValue<string>("description"));
                    var isDefault = row.GetAttributeValue<bool?>("isdefault") ?? false;
                    if (!dict.ContainsKey(meta.LogicalName))
                        dict[meta.LogicalName] = new List<ViewInfo>();
                    dict[meta.LogicalName].Add(new ViewInfo
                    {
                        Name = name,
                        Description = description.Replace("\r\n", " ").Replace("\n", " "),
                        IsDefault = isDefault
                    });
                }
            }
            catch { }
            return dict;
        }

        private static Dictionary<string, List<BusinessRuleInfo>> GetBusinessRules(ServiceClient serviceClient)
        {
            var dict = new Dictionary<string, List<BusinessRuleInfo>>(StringComparer.OrdinalIgnoreCase);
            try
            {
                var fetchXml = @"<?xml version=""1.0"" encoding=""utf-16""?>
<fetch>
  <entity name=""workflow"">
    <attribute name=""name"" />
    <attribute name=""description"" />
    <attribute name=""primaryentity"" />
    <attribute name=""statuscode"" />
    <attribute name=""scope"" />
    <filter>
      <condition attribute=""category"" operator=""eq"" value=""2"" />
    </filter>
  </entity>
</fetch>";
                var rows = serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                foreach (var row in rows.Entities)
                {
                    var primaryEntity = row.GetAttributeValue<string>("primaryentity");
                    if (string.IsNullOrEmpty(primaryEntity)) continue;
                    var name = row.GetAttributeValue<string>("name") ?? string.Empty;
                    var description = SanitizeDescription(row.GetAttributeValue<string>("description"));
                    var statusCode = row.FormattedValues.ContainsKey("statuscode") ? row.FormattedValues["statuscode"] : string.Empty;
                    var scope = row.FormattedValues.ContainsKey("scope") ? row.FormattedValues["scope"] : string.Empty;
                    if (!dict.ContainsKey(primaryEntity))
                        dict[primaryEntity] = new List<BusinessRuleInfo>();
                    dict[primaryEntity].Add(new BusinessRuleInfo
                    {
                        Name = name,
                        Description = description.Replace("\r\n", " ").Replace("\n", " "),
                        StatusCode = statusCode,
                        Scope = scope
                    });
                }
            }
            catch { }
            return dict;
        }
    }
}

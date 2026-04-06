using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetPluginsTool
    {
        private readonly ServiceClient _serviceClient;

        public GetPluginsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        private const int PACK = 50;

        private static readonly Dictionary<int, string> IsolationModeMap = new()
        {
            [1] = "None",
            [2] = "Sandbox",
            [3] = "External"
        };

        private static readonly Dictionary<int, string> SourceTypeMap = new()
        {
            [0] = "Database",
            [1] = "Disk",
            [2] = "Normal",
            [3] = "AzureWebApp",
            [4] = "FileStore"
        };

        private static readonly Dictionary<int, string> StageMap = new()
        {
            [10] = "PreValidation",
            [15] = "PreValidation (Internal)",
            [20] = "PreOperation",
            [25] = "PreOperation (Internal)",
            [30] = "MainOperation",
            [35] = "PostOperation (Internal Pre-Commit)",
            [40] = "PostOperation",
            [45] = "PostOperation (Internal Post-Commit)",
            [50] = "PostOperation (Internal Async)",
            [55] = "PostOperation (Internal Async)"
        };

        private static readonly Dictionary<int, string> ModeMap = new()
        {
            [0] = "Sync",
            [1] = "Async"
        };

        private static readonly Dictionary<int, string> ImageTypeMap = new()
        {
            [0] = "PreImage",
            [1] = "PostImage",
            [2] = "Both"
        };

        [McpServerTool(Name = "get_plugins", Title = "List and inspect plugin registrations in Dataverse",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetPluginsResult)),
        Description(
            "List and inspect plugin assembly registrations, plugin types, and processing steps in Dataverse.\n\n" +

            "THREE MODES:\n" +
            "- No filters (or only assembly_name): list plugin assemblies with type counts\n" +
            "- assembly_name provided (single match): assembly detail with all types + steps + images\n" +
            "- entity_name provided: all plugin steps on that entity across all assemblies\n\n" +

            "TIPS:\n" +
            "- Stage: PreValidation, PreOperation, PostOperation, MainOperation (Custom API/DataProvider)\n" +
            "- include_config defaults to false — secure config should not be casually exposed")]
        public CallToolResult get_plugins(
            [Description("Filter by assembly name (contains). Empty = list all.")] string assembly_name = "",
            [Description("Filter steps by entity (e.g., 'account'). Shows all steps on this entity.")] string entity_name = "",
            [Description("Filter by SDK message (e.g., 'Create', 'Update', 'Delete').")] string message_name = "",
            [Description("Filter by plugin type name (contains).")] string type_name = "",
            [Description("Include pre/post images. Default: true.")] bool include_images = true,
            [Description("Include config values. Default: false (security).")] bool include_config = false,
            [Description("'prevalidation', 'preoperation', 'postoperation', 'mainoperation'. Empty = all.")] string stage = "",
            [Description("'sync' or 'async'. Empty = both.")] string mode = "",
            [Description("Only activated steps. Default: true.")] bool active_only = true,
            [Description("Max steps (1-500). Default: 100.")] int max_records = 100)
        {
            if (!string.IsNullOrWhiteSpace(stage))
            {
                var s = stage.Trim().ToLowerInvariant();
                if (s != "prevalidation" && s != "preoperation" && s != "postoperation" && s != "mainoperation")
                    return ErrorResult($"Error: Invalid stage '{stage.Trim()}'. Use 'prevalidation', 'preoperation', 'postoperation', or 'mainoperation'.");
            }

            if (!string.IsNullOrWhiteSpace(mode))
            {
                var m = mode.Trim().ToLowerInvariant();
                if (m != "sync" && m != "async")
                    return ErrorResult($"Error: Invalid mode '{mode.Trim()}'. Use 'sync' or 'async'.");
            }

            if (max_records <= 0) max_records = 100;
            if (max_records > 500) max_records = 500;

            try
            {
                // If entity_name is provided, show steps for that entity
                if (!string.IsNullOrWhiteSpace(entity_name))
                {
                    var otc = GetObjectTypeCode(entity_name.Trim().ToLowerInvariant());
                    if (otc == null)
                        return ErrorResult($"Error: Entity '{entity_name.Trim().ToLowerInvariant()}' not found. Use get_tables to discover valid entity names.");

                    return GetStepsByEntity(entity_name.Trim().ToLowerInvariant(), otc.Value, message_name, type_name, stage, mode, active_only, include_images, include_config, max_records);
                }

                // If assembly_name is provided, show detail for matching assemblies
                if (!string.IsNullOrWhiteSpace(assembly_name))
                    return GetAssemblyDetail(assembly_name.Trim(), message_name, type_name, stage, mode, active_only, include_images, include_config, max_records);

                // Default: list all assemblies
                if (!string.IsNullOrWhiteSpace(stage) || !string.IsNullOrWhiteSpace(mode) || !string.IsNullOrWhiteSpace(message_name) || !string.IsNullOrWhiteSpace(type_name))
                    return ErrorResult("Error: stage, mode, message_name, and type_name filters require entity_name or assembly_name. Provide one of these to enable filtering.");

                return GetAssemblyList();
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to retrieve plugins: {ex.Message}");
            }
        }

        private CallToolResult GetAssemblyList()
        {
            var fetchXml = @"<fetch>
  <entity name='pluginassembly'>
    <attribute name='pluginassemblyid'/>
    <attribute name='name'/>
    <attribute name='version'/>
    <attribute name='isolationmode'/>
    <attribute name='sourcetype'/>
    <attribute name='ismanaged'/>
    <attribute name='managedidentityid'/>
    <filter type='and'>
      <condition attribute='ishidden' operator='eq' value='false'/>
    </filter>
    <order attribute='name'/>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0)
            {
                var emptyResult = new GetPluginsResult { TotalCount = 0, Mode = "assemblies", Assemblies = [] };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = "0 plugin assemblies found." }],
                    StructuredContent = JsonSerializer.SerializeToElement(emptyResult)
                };
            }

            // Count types per assembly
            var typeCounts = GetTypeCountsPerAssembly();

            var assemblies = result.Entities.Select(e => MapAssemblyEntry(e, typeCounts)).ToList();

            var sb = new StringBuilder(assemblies.Count * 100 + 128);
            sb.AppendLine($"[Plugin Assemblies] {assemblies.Count} registered");
            sb.AppendLine();
            sb.AppendLine("#\tname\tversion\tisolationMode\tsourceType\ttypeCount\tisManaged");

            for (var i = 0; i < assemblies.Count; i++)
            {
                var a = assemblies[i];
                sb.AppendLine($"{i + 1}\t{EscapeTab(a.Name)}\t{a.Version}\t{a.IsolationMode}\t{a.SourceType}\t{a.TypeCount}\t{(a.IsManaged ? "Yes" : "No")}");
            }

            var structured = new GetPluginsResult
            {
                TotalCount = assemblies.Count,
                Mode = "assemblies",
                Assemblies = assemblies
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult GetAssemblyDetail(string assemblyName, string messageName, string typeName, string stage, string mode, bool activeOnly, bool includeImages, bool includeConfig, int maxRecords)
        {
            // Find assemblies matching name
            var fetchAsm = $@"<fetch>
  <entity name='pluginassembly'>
    <attribute name='pluginassemblyid'/>
    <attribute name='name'/>
    <attribute name='version'/>
    <attribute name='isolationmode'/>
    <attribute name='sourcetype'/>
    <attribute name='ismanaged'/>
    <attribute name='managedidentityid'/>
    <filter type='and'>
      <condition attribute='ishidden' operator='eq' value='false'/>
      <condition attribute='name' operator='like' value='%{EscapeXml(assemblyName)}%'/>
    </filter>
    <order attribute='name'/>
  </entity>
</fetch>";

            var asmResult = _serviceClient.RetrieveMultiple(new FetchExpression(fetchAsm));
            if (asmResult.Entities.Count == 0)
                return ErrorResult($"Error: No plugin assembly matching '{assemblyName}' found.");

            // If multiple matches, list them
            if (asmResult.Entities.Count > 1)
            {
                var typeCounts = GetTypeCountsPerAssembly();
                var assemblies = asmResult.Entities.Select(e => MapAssemblyEntry(e, typeCounts)).ToList();

                var sb = new StringBuilder(assemblies.Count * 100 + 128);
                sb.AppendLine($"[Plugin Assemblies] {assemblies.Count} matching '{assemblyName}'");
                sb.AppendLine();
                sb.AppendLine("#\tname\tversion\tisolationMode\tsourceType\ttypeCount\tisManaged");

                for (var i = 0; i < assemblies.Count; i++)
                {
                    var a = assemblies[i];
                    sb.AppendLine($"{i + 1}\t{EscapeTab(a.Name)}\t{a.Version}\t{a.IsolationMode}\t{a.SourceType}\t{a.TypeCount}\t{(a.IsManaged ? "Yes" : "No")}");
                }

                var structured = new GetPluginsResult
                {
                    TotalCount = assemblies.Count,
                    Mode = "assemblies",
                    Assemblies = assemblies
                };

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }

            // Single assembly — show detail
            var asm = asmResult.Entities[0];
            var assemblyId = asm.Id;
            var entry = MapAssemblyEntry(asm, null);

            // Get plugin types
            var fetchTypes = $@"<fetch>
  <entity name='plugintype'>
    <attribute name='plugintypeid'/>
    <attribute name='typename'/>
    <attribute name='name'/>
    <attribute name='friendlyname'/>
    <attribute name='description'/>
    <attribute name='workflowactivitygroupname'/>
    <filter>
      <condition attribute='pluginassemblyid' operator='eq' value='{assemblyId}'/>
    </filter>
    <order attribute='typename'/>
  </entity>
</fetch>";

            var typesResult = _serviceClient.RetrieveMultiple(new FetchExpression(fetchTypes));
            var types = typesResult.Entities.Select(MapTypeEntry).ToList();

            // Get steps for this assembly
            var steps = GetSteps(assemblyId.ToString(), null, messageName, typeName, stage, mode, activeOnly, includeConfig, maxRecords);

            // Count steps per type
            foreach (var t in types)
                t.StepCount = steps.Count(s => s.TypeName == t.TypeName);

            entry.TypeCount = types.Count;
            entry.Types = types;

            // Get images if requested
            if (includeImages && steps.Count > 0)
                PopulateImages(steps);

            // Build compact output
            var sb2 = new StringBuilder(1024);
            sb2.AppendLine($"[Plugin Assembly] {entry.Name} ({entry.Version})");
            sb2.AppendLine();
            sb2.AppendLine($"isolationMode: {entry.IsolationMode}");
            sb2.AppendLine($"sourceType: {entry.SourceType}");
            sb2.AppendLine($"isManaged: {(entry.IsManaged ? "Yes" : "No")}");
            if (entry.HasManagedIdentity)
                sb2.AppendLine("hasManagedIdentity: Yes");
            sb2.AppendLine($"typeCount: {types.Count}");
            sb2.AppendLine();

            if (types.Count > 0)
            {
                sb2.AppendLine($"[Plugin Types] {types.Count} total");
                sb2.AppendLine();
                sb2.AppendLine("#\ttypeName\tpluginType\tstepCount");

                for (var i = 0; i < types.Count; i++)
                {
                    var t = types[i];
                    var pluginType = t.IsWorkflow ? "Workflow" : "Plugin";
                    sb2.AppendLine($"{i + 1}\t{EscapeTab(t.TypeName)}\t{pluginType}\t{t.StepCount}");
                }
                sb2.AppendLine();
            }

            if (steps.Count > 0)
            {
                sb2.AppendLine($"[Steps] {steps.Count} total");
                sb2.AppendLine();
                sb2.AppendLine("#\ttypeName\tmessage\tentity\tstage\tmode\trank\tfilteringAttributes\tstatus");

                for (var i = 0; i < steps.Count; i++)
                {
                    var s = steps[i];
                    sb2.AppendLine($"{i + 1}\t{EscapeTab(s.TypeName)}\t{EscapeTab(s.Message)}\t{s.Entity ?? "none"}\t{s.Stage}\t{s.Mode}\t{s.Rank}\t{EscapeTab(s.FilteringAttributes ?? "-")}\t{s.Status}");
                }

                if (includeImages)
                    AppendImagesSection(sb2, steps);
            }

            var structured2 = new GetPluginsResult
            {
                TotalCount = steps.Count,
                Mode = "detail",
                Assemblies = [entry],
                Steps = steps
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb2.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured2)
            };
        }

        private CallToolResult GetStepsByEntity(string entityName, int objectTypeCode, string messageName, string typeName, string stage, string mode, bool activeOnly, bool includeImages, bool includeConfig, int maxRecords)
        {
            var steps = GetSteps(null, objectTypeCode, messageName, typeName, stage, mode, activeOnly, includeConfig, maxRecords);

            // Post-filter: outer join can leak steps from other entities or unbound steps
            steps = steps.Where(s => string.Equals(s.Entity, entityName, StringComparison.OrdinalIgnoreCase)).ToList();

            if (steps.Count == 0)
            {
                var label = $"'{entityName}'";
                var text = $"0 plugin steps found on {label}.";
                var emptyResult = new GetPluginsResult { TotalCount = 0, Mode = "steps", Steps = [] };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = text }],
                    StructuredContent = JsonSerializer.SerializeToElement(emptyResult)
                };
            }

            if (includeImages)
                PopulateImages(steps);

            // Build summary
            var summary = new PluginStepSummary();
            foreach (var s in steps)
            {
                if (s.Stage.StartsWith("PreValidation")) summary.PreValidation++;
                else if (s.Stage.StartsWith("PreOperation")) summary.PreOperation++;
                else if (s.Stage == "MainOperation") summary.MainOperation++;
                else if (s.Stage.StartsWith("PostOperation")) summary.PostOperation++;

                if (s.Mode == "Sync") summary.SyncCount++;
                else if (s.Mode == "Async") summary.AsyncCount++;
                if (s.Status == "Disabled") summary.DisabledCount++;
            }

            var sb = new StringBuilder(steps.Count * 150 + 256);
            var countWord = steps.Count == 1 ? "step" : "steps";
            sb.AppendLine($"[Plugin Steps] {steps.Count} {countWord} on {entityName}");
            sb.AppendLine();
            sb.AppendLine("#\tassembly\ttypeName\tmessage\tstage\tmode\trank\tfilteringAttributes\tstatus");

            for (var i = 0; i < steps.Count; i++)
            {
                var s = steps[i];
                sb.AppendLine($"{i + 1}\t{EscapeTab(s.AssemblyName)}\t{EscapeTab(s.TypeName)}\t{EscapeTab(s.Message)}\t{s.Stage}\t{s.Mode}\t{s.Rank}\t{EscapeTab(s.FilteringAttributes ?? "-")}\t{s.Status}");
            }

            if (includeImages)
                AppendImagesSection(sb, steps);

            sb.AppendLine();
            sb.AppendLine("Summary:");
            sb.AppendLine($"  PreValidation: {summary.PreValidation}");
            sb.AppendLine($"  PreOperation: {summary.PreOperation}");
            sb.AppendLine($"  MainOperation: {summary.MainOperation}");
            sb.AppendLine($"  PostOperation: {summary.PostOperation}");
            sb.AppendLine($"  Sync: {summary.SyncCount}, Async: {summary.AsyncCount}");
            if (summary.DisabledCount > 0)
                sb.AppendLine($"  Disabled: {summary.DisabledCount}");

            var structured = new GetPluginsResult
            {
                TotalCount = steps.Count,
                Mode = "steps",
                Steps = steps,
                Summary = summary
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private List<PluginStepEntry> GetSteps(string assemblyId, int? objectTypeCode, string messageName, string typeName, string stage, string mode, bool activeOnly, bool includeConfig, int maxRecords)
        {
            var filters = new StringBuilder();

            if (activeOnly)
                filters.AppendLine("      <condition attribute='statecode' operator='eq' value='0'/>");

            if (!string.IsNullOrWhiteSpace(stage))
            {
                var stageValue = stage.Trim().ToLowerInvariant() switch
                {
                    "prevalidation" => "10",
                    "preoperation" => "20",
                    "mainoperation" => "30",
                    "postoperation" => "40",
                    _ => null
                };
                if (stageValue != null)
                    filters.AppendLine($"      <condition attribute='stage' operator='eq' value='{stageValue}'/>");
            }

            if (!string.IsNullOrWhiteSpace(mode))
            {
                var modeValue = mode.Trim().ToLowerInvariant() == "sync" ? "0" : "1";
                filters.AppendLine($"      <condition attribute='mode' operator='eq' value='{modeValue}'/>");
            }

            var assemblyFilter = "";
            if (!string.IsNullOrWhiteSpace(assemblyId))
                assemblyFilter = $"\n      <filter><condition attribute='pluginassemblyid' operator='eq' value='{EscapeXml(assemblyId)}'/></filter>";

            var typeNameFilter = "";
            if (!string.IsNullOrWhiteSpace(typeName))
                typeNameFilter = $"\n      <condition attribute='typename' operator='like' value='%{EscapeXml(typeName.Trim())}%'/>";

            var entityFilter = "";
            if (objectTypeCode.HasValue)
                entityFilter = $"\n      <filter><condition attribute='primaryobjecttypecode' operator='eq' value='{objectTypeCode.Value}'/></filter>";

            // Resolve message name to sdkmessageid if provided
            var messageFilter = "";
            if (!string.IsNullOrWhiteSpace(messageName))
            {
                var msgId = ResolveSdkMessageId(messageName.Trim());
                if (msgId == null)
                    return [];
                messageFilter = $"      <condition attribute='sdkmessageid' operator='eq' value='{msgId}'/>";
            }

            var configAttributes = includeConfig
                ? "\n    <attribute name='configuration'/>\n    <attribute name='sdkmessageprocessingstepsecureconfigid'/>"
                : "";

            var fetchXml = $@"<fetch top='{maxRecords}'>
  <entity name='sdkmessageprocessingstep'>
    <attribute name='sdkmessageprocessingstepid'/>
    <attribute name='name'/>
    <attribute name='stage'/>
    <attribute name='mode'/>
    <attribute name='rank'/>
    <attribute name='filteringattributes'/>
    <attribute name='statecode'/>
    <attribute name='asyncautodelete'/>
    <attribute name='impersonatinguserid'/>
    <attribute name='description'/>{configAttributes}
    <link-entity name='plugintype' from='plugintypeid' to='plugintypeid' alias='pt'>
      <attribute name='typename'/>{typeNameFilter}{assemblyFilter}
      <link-entity name='pluginassembly' from='pluginassemblyid' to='pluginassemblyid' alias='pa'>
        <attribute name='name'/>
        <filter>
          <condition attribute='ishidden' operator='eq' value='false'/>
        </filter>
      </link-entity>
    </link-entity>
    <link-entity name='sdkmessage' from='sdkmessageid' to='sdkmessageid' alias='m'>
      <attribute name='name'/>
    </link-entity>
    <link-entity name='sdkmessagefilter' from='sdkmessagefilterid' to='sdkmessagefilterid' link-type='outer' alias='mf'>
      <attribute name='primaryobjecttypecode'/>{entityFilter}
    </link-entity>
    <filter type='and'>
{filters}      {messageFilter}
    </filter>
    <order attribute='name'/>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities.Select(e => MapStepEntry(e, includeConfig)).ToList();
        }

        private void PopulateImages(List<PluginStepEntry> steps)
        {
            var stepIds = steps.Select(s => s.StepId).ToList();
            if (stepIds.Count == 0) return;

            var allImages = new Dictionary<string, List<PluginImageEntry>>();
            var batches = (int)Math.Ceiling((double)stepIds.Count / PACK);

            for (var i = 0; i < batches; i++)
            {
                var batch = stepIds.Skip(i * PACK).Take(PACK).ToList();
                var conditions = string.Join("\n", batch.Select(id =>
                    $"      <condition attribute='sdkmessageprocessingstepid' operator='eq' value='{id}'/>"));

                var fetchImages = $@"<fetch>
  <entity name='sdkmessageprocessingstepimage'>
    <attribute name='sdkmessageprocessingstepimageid'/>
    <attribute name='name'/>
    <attribute name='entityalias'/>
    <attribute name='attributes'/>
    <attribute name='imagetype'/>
    <attribute name='sdkmessageprocessingstepid'/>
    <filter type='or'>
{conditions}
    </filter>
  </entity>
</fetch>";

                try
                {
                    var imgResult = _serviceClient.RetrieveMultiple(new FetchExpression(fetchImages));
                    foreach (var img in imgResult.Entities)
                    {
                        var stepRef = img.GetAttributeValue<EntityReference>("sdkmessageprocessingstepid");
                        if (stepRef == null) continue;

                        var stepId = stepRef.Id.ToString();
                        var imageEntry = new PluginImageEntry
                        {
                            Name = img.GetAttributeValue<string>("name") ?? "",
                            EntityAlias = img.GetAttributeValue<string>("entityalias") ?? "",
                            ImageType = ImageTypeMap.TryGetValue(img.GetAttributeValue<OptionSetValue>("imagetype")?.Value ?? -1, out var it) ? it : "Unknown",
                            Attributes = NullIfEmpty(img.GetAttributeValue<string>("attributes"))
                        };

                        if (!allImages.ContainsKey(stepId))
                            allImages[stepId] = [];
                        allImages[stepId].Add(imageEntry);
                    }
                }
                catch
                {
                    // Continue without images on error
                }
            }

            foreach (var step in steps)
            {
                if (allImages.TryGetValue(step.StepId, out var images) && images.Count > 0)
                    step.Images = images;
            }
        }

        private static void AppendImagesSection(StringBuilder sb, List<PluginStepEntry> steps)
        {
            var stepsWithImages = steps.Where(s => s.Images != null && s.Images.Count > 0).ToList();
            if (stepsWithImages.Count == 0) return;

            var totalImages = stepsWithImages.Sum(s => s.Images.Count);
            sb.AppendLine();
            sb.AppendLine($"[Images] {totalImages} total");
            sb.AppendLine();
            sb.AppendLine("stepName\timageName\timageType\tentityAlias\tattributes");

            foreach (var step in stepsWithImages)
            {
                var shortStep = $"{ShortTypeName(step.TypeName)} ({step.Message}/{step.Mode})";
                foreach (var img in step.Images)
                    sb.AppendLine($"{EscapeTab(shortStep)}\t{EscapeTab(img.Name)}\t{img.ImageType}\t{EscapeTab(img.EntityAlias)}\t{EscapeTab(img.Attributes ?? "(all)")}");
            }
        }

        private Dictionary<Guid, int> GetTypeCountsPerAssembly()
        {
            var fetchXml = @"<fetch aggregate='true'>
  <entity name='plugintype'>
    <attribute name='pluginassemblyid' alias='asmId' groupby='true'/>
    <attribute name='plugintypeid' alias='typeCount' aggregate='count'/>
  </entity>
</fetch>";

            var counts = new Dictionary<Guid, int>();
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            foreach (var e in result.Entities)
            {
                var asmIdAlias = e.GetAttributeValue<AliasedValue>("asmId");
                var countAlias = e.GetAttributeValue<AliasedValue>("typeCount");

                Guid? asmId = asmIdAlias?.Value switch
                {
                    Guid g => g,
                    EntityReference er => er.Id,
                    _ => null
                };

                if (asmId.HasValue && countAlias?.Value is int count)
                    counts[asmId.Value] = count;
            }
            return counts;
        }

        private string ResolveSdkMessageId(string messageName)
        {
            var fetchXml = $@"<fetch top='1'>
  <entity name='sdkmessage'>
    <attribute name='sdkmessageid'/>
    <filter>
      <condition attribute='name' operator='eq' value='{EscapeXml(messageName)}'/>
    </filter>
  </entity>
</fetch>";

            try
            {
                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                return result.Entities.Count > 0 ? result.Entities[0].Id.ToString() : null;
            }
            catch
            {
                return null;
            }
        }

        private static PluginAssemblyEntry MapAssemblyEntry(Entity e, Dictionary<Guid, int> typeCounts)
        {
            var isoValue = e.GetAttributeValue<OptionSetValue>("isolationmode")?.Value ?? 0;
            var srcValue = e.GetAttributeValue<OptionSetValue>("sourcetype")?.Value ?? 0;
            var typeCount = typeCounts != null && typeCounts.TryGetValue(e.Id, out var tc) ? tc : 0;

            return new PluginAssemblyEntry
            {
                AssemblyId = e.Id.ToString(),
                Name = e.GetAttributeValue<string>("name") ?? "",
                Version = e.GetAttributeValue<string>("version") ?? "",
                IsolationMode = IsolationModeMap.TryGetValue(isoValue, out var iso) ? iso : isoValue.ToString(),
                SourceType = SourceTypeMap.TryGetValue(srcValue, out var src) ? src : srcValue.ToString(),
                IsManaged = e.GetAttributeValue<bool>("ismanaged"),
                HasManagedIdentity = e.GetAttributeValue<EntityReference>("managedidentityid") != null,
                TypeCount = typeCount
            };
        }

        private static PluginTypeEntry MapTypeEntry(Entity e)
        {
            var workflowGroup = e.GetAttributeValue<string>("workflowactivitygroupname");
            return new PluginTypeEntry
            {
                TypeId = e.Id.ToString(),
                TypeName = e.GetAttributeValue<string>("typename") ?? "",
                Name = e.GetAttributeValue<string>("name") ?? "",
                Description = NullIfEmpty(e.GetAttributeValue<string>("description")),
                IsWorkflow = !string.IsNullOrWhiteSpace(workflowGroup)
            };
        }

        private static PluginStepEntry MapStepEntry(Entity e, bool includeConfig)
        {
            var stageValue = e.GetAttributeValue<OptionSetValue>("stage")?.Value ?? 0;
            var modeValue = e.GetAttributeValue<OptionSetValue>("mode")?.Value ?? 0;
            var stateValue = e.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 0;

            var entry = new PluginStepEntry
            {
                StepId = e.Id.ToString(),
                Name = e.GetAttributeValue<string>("name") ?? "",
                AssemblyName = GetAliasedString(e, "pa.name"),
                TypeName = GetAliasedString(e, "pt.typename"),
                Message = GetAliasedString(e, "m.name"),
                Entity = NullIfEmpty(GetAliasedString(e, "mf.primaryobjecttypecode")),
                Stage = StageMap.TryGetValue(stageValue, out var sg) ? sg : stageValue.ToString(),
                Mode = ModeMap.TryGetValue(modeValue, out var md) ? md : modeValue.ToString(),
                Rank = e.GetAttributeValue<int>("rank"),
                FilteringAttributes = NullIfEmpty(e.GetAttributeValue<string>("filteringattributes")),
                Status = stateValue == 0 ? "Active" : "Disabled",
                AsyncAutoDelete = e.GetAttributeValue<bool>("asyncautodelete"),
                Description = NullIfEmpty(e.GetAttributeValue<string>("description")),
                ImpersonatingUser = e.GetAttributeValue<EntityReference>("impersonatinguserid")?.Name
            };

            if (includeConfig)
            {
                entry.UnsecureConfig = NullIfEmpty(e.GetAttributeValue<string>("configuration"));
                var secureRef = e.GetAttributeValue<EntityReference>("sdkmessageprocessingstepsecureconfigid");
                entry.SecureConfigId = secureRef?.Id.ToString();
            }

            return entry;
        }

        private static string GetAliasedString(Entity e, string alias)
        {
            var aliased = e.GetAttributeValue<AliasedValue>(alias);
            return aliased?.Value?.ToString() ?? "";
        }

        private static string ShortTypeName(string fullTypeName)
        {
            if (string.IsNullOrEmpty(fullTypeName)) return fullTypeName;
            var lastDot = fullTypeName.LastIndexOf('.');
            return lastDot >= 0 ? fullTypeName.Substring(lastDot + 1) : fullTypeName;
        }

        private int? GetObjectTypeCode(string entityName)
        {
            try
            {
                var request = new RetrieveEntityRequest
                {
                    LogicalName = entityName,
                    EntityFilters = EntityFilters.Entity
                };
                var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
                return response.EntityMetadata.ObjectTypeCode;
            }
            catch
            {
                return null;
            }
        }

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}

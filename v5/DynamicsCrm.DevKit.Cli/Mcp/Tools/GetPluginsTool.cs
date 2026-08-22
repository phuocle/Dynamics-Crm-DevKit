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
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetPluginsTool : McpToolBase
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

        private static readonly Dictionary<int, string> SupportedDeploymentMap = new()
        {
            [0] = "ServerOnly",
            [1] = "OfflineOnly",
            [2] = "Both"
        };

        private static readonly Dictionary<int, string> ImageTypeMap = new()
        {
            [0] = "PreImage",
            [1] = "PostImage",
            [2] = "Both"
        };

        [McpServerTool(Name = "get_plugins", Title = "List plugin registrations and steps",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetPluginsResult)),
        Description(
            "Plugin assemblies, types, steps. No filters = assembly list. assembly_name (1 match) = detail (types+steps+images). entity_name = steps on entity (wins over assembly_name). " +
            "Stages: PreValidation/PreOperation/PostOperation/MainOperation (Custom API/DataProvider). include_config=true only for secure config inspection.\n\n" +
            "WHEN TO USE:\n" +
            "- Inspect a plugin assembly's types+steps before refactoring/disabling\n" +
            "- Find steps registered on an entity (entity_name wins over assembly_name)\n" +
            "- Check if a field triggers any plugin (trigger_field + entity_name)\n" +
            "- Find synchronous plugins (mode='sync'; Pre-op can cancel/rollback)\n\n" +
            "RELATED TOOLS:\n" +
            "- get_plugin_trace_logs → execution traces\n" +
            "- get_system_jobs → async failures\n" +
            "- get_messages → SDK messages + legacy Custom Actions\n" +
            "- get_custom_apis → modern Custom API definitions")]
        public CallToolResult get_plugins(
            [Description("Assembly name contains. 1 match → detail; 0/2+ → disambiguation. Empty = list all.")] string assembly_name = "",
            [Description("Steps for entity Display/logical name. Wins over assembly_name.")] string entity_name = "",
            [Description("SDK message name (Create, Update, …). Empty = all.")] string message_name = "",
            [Description("Plugin type typename contains. Empty = all.")] string type_name = "",
            [Description("Include pre/post images. Default true.")] bool include_images = true,
            [Description("Include unsecure/secure config (security-sensitive). Default false.")] bool include_config = false,
            [Description("'prevalidation'/'preoperation'/'postoperation'/'mainoperation'. Empty = all.")] string stage = "",
            [Description("'sync' / 'async'. Empty = both.")] string mode = "",
            [Description("Only activated steps. Default true.")] bool active_only = true,
            [Description("1-500. Default 100.")] int max_records = 100)
        {
            try
            {
                // ── Validation ──────────────────────────────────────────────
                if (!string.IsNullOrWhiteSpace(stage))
                {
                    var s = stage.Trim().ToLowerInvariant();
                    if (s != "prevalidation" && s != "preoperation" && s != "postoperation" && s != "mainoperation")
                        return Error($"Invalid stage '{stage.Trim()}'.", "Use 'prevalidation', 'preoperation', 'postoperation', or 'mainoperation'.");
                }

                if (!string.IsNullOrWhiteSpace(mode))
                {
                    var m = mode.Trim().ToLowerInvariant();
                    if (m != "sync" && m != "async")
                        return Error($"Invalid mode '{mode.Trim()}'. Use 'sync' or 'async'.");
                }

                if (max_records <= 0) max_records = 100;
                if (max_records > 500) max_records = 500;

                if (!string.IsNullOrWhiteSpace(message_name) && ResolveSdkMessageId(message_name.Trim()) == null)
                    return Error($"SDK message '{message_name.Trim()}' not found.",
                        "Use get_messages to discover valid SDK message names.");

                // ── Mode dispatch ───────────────────────────────────────────
                // entity_name → steps on entity (wins over assembly_name)
                if (!string.IsNullOrWhiteSpace(entity_name))
                {
                    var entityResult = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entity_name.Trim(), "get_plugins");
                    if (!entityResult.IsSuccess)
                        return Error($"entity_name '{entity_name.Trim()}': {entityResult.Error}");

                    var resolvedEntityName = entityResult.Value.LogicalName;
                    var otc = GetObjectTypeCode(resolvedEntityName);
                    if (otc == null)
                        return Error($"Entity '{resolvedEntityName}' not found. Use get_tables to discover valid entity names.");

                    var steps = GetSteps(null, otc.Value, message_name, type_name, stage, mode, active_only, include_config, max_records);
                    // Post-filter: outer join can leak steps from other entities or unbound steps
                    steps = steps.Where(s => string.Equals(s.Entity, resolvedEntityName, StringComparison.OrdinalIgnoreCase)).ToList();

                    if (include_images && steps.Count > 0)
                        PopulateImages(steps);

                    var summary = BuildStepSummary(steps);
                    var structured = new GetPluginsResult
                    {
                        TotalCount = steps.Count,
                        Mode = "steps",
                        EntityName = resolvedEntityName,
                        Steps = steps.Count > 0 ? steps : null,
                        Summary = summary
                    };
                    return Success(BuildStepsText(steps.Count, resolvedEntityName), structured);
                }

                // assembly_name → detail for matching assemblies
                if (!string.IsNullOrWhiteSpace(assembly_name))
                {
                    var asmName = assembly_name.Trim();
                    var assemblies = FetchAssemblies(asmName, max_records);
                    if (assemblies.Count == 0)
                        return Error($"No plugin assembly matching '{asmName}' found.",
                            "Use get_plugins without assembly_name to list all available assemblies.");

                    // Multiple matches → disambiguation list
                    if (assemblies.Count > 1)
                    {
                        var typeCounts = GetTypeCountsPerAssembly();
                        foreach (var a in assemblies)
                            a.TypeCount = typeCounts.TryGetValue(Guid.Parse(a.AssemblyId), out var tc) ? tc : 0;

                        var structured = new GetPluginsResult
                        {
                            TotalCount = assemblies.Count,
                            Mode = "assemblies",
                            Assemblies = assemblies
                        };
                        return Success($"{assemblies.Count} plugin assemblies matching '{asmName}'.", structured);
                    }

                    // Single assembly → detail
                    var entry = assemblies[0];
                    var types = FetchTypes(entry.AssemblyId, max_records);
                    var steps = GetSteps(entry.AssemblyId, null, message_name, type_name, stage, mode, active_only, include_config, max_records);

                    foreach (var t in types)
                        t.StepCount = steps.Count(s => s.TypeName == t.TypeName);

                    entry.TypeCount = types.Count;
                    entry.Types = types.Count > 0 ? types : null;

                    if (include_images && steps.Count > 0)
                        PopulateImages(steps);

                    var detailStructured = new GetPluginsResult
                    {
                        TotalCount = steps.Count,
                        Mode = "detail",
                        Assemblies = [entry],
                        Steps = steps.Count > 0 ? steps : null
                    };
                    return Success(BuildDetailText(entry, types.Count, steps.Count), detailStructured);
                }

                // Default: list all assemblies
                if (!string.IsNullOrWhiteSpace(stage) || !string.IsNullOrWhiteSpace(mode) ||
                    !string.IsNullOrWhiteSpace(message_name) || !string.IsNullOrWhiteSpace(type_name))
                    return Error("stage, mode, message_name, and type_name filters require entity_name or assembly_name.",
                        "Provide entity_name or assembly_name to enable filtering.");

                var allAssemblies = FetchAssemblies(null, max_records);
                var allTypeCounts = GetTypeCountsPerAssembly();
                foreach (var a in allAssemblies)
                    a.TypeCount = allTypeCounts.TryGetValue(Guid.Parse(a.AssemblyId), out var tc) ? tc : 0;

                var packages = GetPackages(max_records);
                var listStructured = new GetPluginsResult
                {
                    TotalCount = allAssemblies.Count,
                    Mode = "assemblies",
                    Assemblies = allAssemblies,
                    Packages = packages.Count > 0 ? packages : null
                };
                var packageLabel = packages.Count > 0 ? $" ({packages.Count} plugin packages)" : "";
                return Success($"{allAssemblies.Count} plugin assemblies{packageLabel} registered.", listStructured);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        // ── Data fetchers (return data, not CallToolResult) ────────────────

        private List<PluginAssemblyEntry> FetchAssemblies(string nameFilter, int maxRecords)
        {
            var nameCondition = string.IsNullOrWhiteSpace(nameFilter)
                ? ""
                : $"\n      <condition attribute='name' operator='like' value='%{EscapeXml(nameFilter)}%'/>";

            var fetchXml = $@"<fetch top='{maxRecords}'>
  <entity name='pluginassembly'>
    <attribute name='pluginassemblyid'/>
    <attribute name='name'/>
    <attribute name='version'/>
    <attribute name='isolationmode'/>
    <attribute name='sourcetype'/>
    <attribute name='ismanaged'/>
    <attribute name='managedidentityid'/>
    <filter type='and'>
      <condition attribute='ishidden' operator='eq' value='false'/>{nameCondition}
    </filter>
    <order attribute='name'/>
    <link-entity name='pluginpackage' from='pluginpackageid' to='packageid' link-type='outer' alias='pkg'>
      <attribute name='name'/>
      <attribute name='version'/>
    </link-entity>
    <link-entity name='managedidentity' from='managedidentityid' to='managedidentityid' link-type='outer' alias='mi'>
      <attribute name='name'/>
      <attribute name='applicationid'/>
      <attribute name='tenantid'/>
      <attribute name='credentialsource'/>
    </link-entity>
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities.Select(e => MapAssemblyEntry(e, null)).ToList();
        }

        private List<PluginTypeEntry> FetchTypes(string assemblyId, int maxRecords)
        {
            var fetchTypes = $@"<fetch top='{maxRecords}'>
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
            return typesResult.Entities.Select(MapTypeEntry).ToList();
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
                typeNameFilter = $"\n      <filter><condition attribute='typename' operator='like' value='%{EscapeXml(typeName.Trim())}%'/></filter>";

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

            var secureConfigJoin = includeConfig
                ? @"
    <link-entity name='sdkmessageprocessingstepsecureconfig' from='sdkmessageprocessingstepsecureconfigid' to='sdkmessageprocessingstepsecureconfigid' link-type='outer' alias='sc'>
      <attribute name='secureconfig'/>
    </link-entity>"
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
    <attribute name='description'/>
    <attribute name='supporteddeployment'/>{configAttributes}
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
    </link-entity>{secureConfigJoin}
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

            foreach (var step in steps)
            {
                if (allImages.TryGetValue(step.StepId, out var images) && images.Count > 0)
                    step.Images = images;
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

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities.Count > 0 ? result.Entities[0].Id.ToString() : null;
        }

        private List<PluginPackageEntry> GetPackages(int maxRecords)
        {
            var fetchXml = $@"<fetch top='{maxRecords}'>
              <entity name='pluginpackage'>
                <attribute name='pluginpackageid'/>
                <attribute name='name'/>
                <attribute name='version'/>
                <attribute name='ismanaged'/>
                <attribute name='managedidentityid'/>
                <attribute name='modifiedon'/>
                <order attribute='name'/>
              </entity>
            </fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0) return [];

            // Get assembly names per package
            var packageAssemblies = new Dictionary<string, List<string>>();
            var fetchAsm = @"<fetch>
              <entity name='pluginassembly'>
                <attribute name='name'/>
                <attribute name='packageid'/>
                <filter>
                  <condition attribute='packageid' operator='not-null'/>
                  <condition attribute='ishidden' operator='eq' value='false'/>
                </filter>
              </entity>
            </fetch>";

            var asmResult = _serviceClient.RetrieveMultiple(new FetchExpression(fetchAsm));
            foreach (var asm in asmResult.Entities)
            {
                var pkgRef = asm.GetAttributeValue<EntityReference>("packageid");
                if (pkgRef == null) continue;
                var pkgId = pkgRef.Id.ToString();
                if (!packageAssemblies.ContainsKey(pkgId))
                    packageAssemblies[pkgId] = [];
                var asmName = asm.GetAttributeValue<string>("name");
                if (!string.IsNullOrEmpty(asmName))
                    packageAssemblies[pkgId].Add(asmName);
            }

            return result.Entities.Select(e =>
            {
                var pkgId = e.Id.ToString();
                return new PluginPackageEntry
                {
                    PackageId = pkgId,
                    Name = e.GetAttributeValue<string>("name") ?? "",
                    Version = NullIfEmpty(e.GetAttributeValue<string>("version")),
                    IsManaged = e.GetAttributeValue<bool>("ismanaged"),
                    HasManagedIdentity = e.GetAttributeValue<EntityReference>("managedidentityid") != null,
                    ModifiedOn = e.GetAttributeValue<DateTime?>("modifiedon")?.ToString("yyyy-MM-dd HH:mm"),
                    Assemblies = packageAssemblies.TryGetValue(pkgId, out var asmNames) && asmNames.Count > 0 ? asmNames : null
                };
            }).ToList();
        }

        private int? GetObjectTypeCode(string entityName)
        {
            var request = new RetrieveEntityRequest
            {
                LogicalName = entityName,
                EntityFilters = EntityFilters.Entity
            };
            var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
            return response.EntityMetadata.ObjectTypeCode;
        }

        // ── Mappers ────────────────────────────────────────────────────────

        private static PluginAssemblyEntry MapAssemblyEntry(Entity e, Dictionary<Guid, int> typeCounts)
        {
            var isoValue = e.GetAttributeValue<OptionSetValue>("isolationmode")?.Value ?? 0;
            var srcValue = e.GetAttributeValue<OptionSetValue>("sourcetype")?.Value ?? 0;
            var typeCount = typeCounts != null && typeCounts.TryGetValue(e.Id, out var tc) ? tc : 0;
            var hasManagedIdentity = e.GetAttributeValue<EntityReference>("managedidentityid") != null;

            var entry = new PluginAssemblyEntry
            {
                AssemblyId = e.Id.ToString(),
                Name = e.GetAttributeValue<string>("name") ?? "",
                Version = e.GetAttributeValue<string>("version") ?? "",
                IsolationMode = IsolationModeMap.TryGetValue(isoValue, out var iso) ? iso : isoValue.ToString(),
                SourceType = SourceTypeMap.TryGetValue(srcValue, out var src) ? src : srcValue.ToString(),
                IsManaged = e.GetAttributeValue<bool>("ismanaged"),
                HasManagedIdentity = hasManagedIdentity,
                PackageName = NullIfEmpty(GetAliasedString(e, "pkg.name")),
                TypeCount = typeCount
            };

            // Populate managed identity detail when available
            var miName = NullIfEmpty(GetAliasedString(e, "mi.name"));
            if (miName != null)
            {
                entry.ManagedIdentity = new ManagedIdentityEntry
                {
                    ManagedIdentityId = e.GetAttributeValue<EntityReference>("managedidentityid")?.Id.ToString(),
                    Name = miName,
                    ApplicationId = GetAliasedValue<Guid?>(e, "mi.applicationid")?.ToString(),
                    TenantId = GetAliasedValue<Guid?>(e, "mi.tenantid")?.ToString(),
                    CredentialSource = GetAliasedValue<int?>(e, "mi.credentialsource") == 2 ? "Certificate" : GetAliasedValue<int?>(e, "mi.credentialsource")?.ToString()
                };
            }

            return entry;
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
                IsWorkflow = !string.IsNullOrWhiteSpace(workflowGroup),
                WorkflowActivityGroupName = NullIfEmpty(workflowGroup)
            };
        }

        private static PluginStepEntry MapStepEntry(Entity e, bool includeConfig)
        {
            var stageValue = e.GetAttributeValue<OptionSetValue>("stage")?.Value ?? 0;
            var modeValue = e.GetAttributeValue<OptionSetValue>("mode")?.Value ?? 0;
            var stateValue = e.GetAttributeValue<OptionSetValue>("statecode")?.Value ?? 0;
            var deploymentValue = e.GetAttributeValue<OptionSetValue>("supporteddeployment")?.Value ?? 0;

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
                SupportedDeployment = SupportedDeploymentMap.TryGetValue(deploymentValue, out var dep) ? dep : deploymentValue.ToString(),
                AsyncAutoDelete = e.GetAttributeValue<bool>("asyncautodelete"),
                Description = NullIfEmpty(e.GetAttributeValue<string>("description")),
                ImpersonatingUser = e.GetAttributeValue<EntityReference>("impersonatinguserid")?.Name
            };

            if (includeConfig)
            {
                entry.UnsecureConfig = NullIfEmpty(e.GetAttributeValue<string>("configuration"));
                var secureRef = e.GetAttributeValue<EntityReference>("sdkmessageprocessingstepsecureconfigid");
                entry.SecureConfigId = secureRef?.Id.ToString();
                entry.SecureConfig = NullIfEmpty(GetAliasedString(e, "sc.secureconfig"));
            }

            return entry;
        }

        // ── Text builders (1 line, concise) ────────────────────────────────

        private static string BuildStepsText(int count, string entityName)
        {
            var word = count == 1 ? "step" : "steps";
            return $"{count} plugin {word} on {entityName}.";
        }

        private static string BuildDetailText(PluginAssemblyEntry entry, int typeCount, int stepCount)
        {
            return $"{entry.Name} ({entry.Version}): {typeCount} types, {stepCount} steps.";
        }

        // ── Summary builder ────────────────────────────────────────────────

        private static PluginStepSummary BuildStepSummary(List<PluginStepEntry> steps)
        {
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
            return summary;
        }

        // ── Utils ──────────────────────────────────────────────────────────

        private static string GetAliasedString(Entity e, string alias)
        {
            var aliased = e.GetAttributeValue<AliasedValue>(alias);
            return aliased?.Value?.ToString() ?? "";
        }

        private static T GetAliasedValue<T>(Entity e, string alias)
        {
            var aliased = e.GetAttributeValue<AliasedValue>(alias);
            if (aliased?.Value is T val) return val;
            return default;
        }

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");
    }
}

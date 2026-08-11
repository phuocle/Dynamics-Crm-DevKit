using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Xml;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageChartTool : McpToolBase
    {
        private static readonly HashSet<string> SupportedChartTypes = new(StringComparer.OrdinalIgnoreCase)
        {
            "Column", "Bar", "Line", "Pie", "Doughnut", "Donut", "Funnel", "Area", "Bubble", "Radar"
        };

        private const string DefaultChartType = "Pie";
        private const string DefaultPieCategoryColumn = "statecode";
        private const string DefaultPieLegendColumn = "importsequencenumber";
        private const string DefaultPieAggregateType = "count";

        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;
        private string _workspaceFolder;

        public ManageChartTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_chart", Title = "Manage Dataverse system charts",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(UpsertChartResult)),
        Description(
            "Manage Dataverse system charts (savedqueryvisualization). Actions: 'list', 'detail' (read-only) | 'create', 'update', 'rename', 'set_default', 'undo' (mutations). " +
            "datadescription FetchXML is built from entity metadata — no view binding.\n\n" +
            "WHEN TO USE:\n" +
            "- List or inspect system charts of an entity\n" +
            "- Create a chart from group-by/aggregate columns, update chart type or columns, rename, set the entity default chart\n" +
            "- Restore a chart from a .chart.json backup written by update (undo)\n\n" +
            "RELATED TOOLS:\n" +
            "- get_tables → column logical names for group_by_column/aggregate_column\n" +
            "- publish_customizations → batch publish after multiple metadata changes\n" +
            "- manage_view → views; execute_webapi → raw savedqueryvisualization access\n\n" +
            "Omitted chart_type on create defaults to Pie (category=statecode, legend=importsequencenumber/count). " +
            "Pie create first returns needs_confirmation without creating; re-call with confirmed=true after user approval.")]
        public CallToolResult manage_chart(
            [Description("'list', 'detail', 'create', 'update', 'rename', 'set_default', 'undo'.")] string action,
            [Description("Entity Display Name or logical name (e.g. 'Account' or 'account'). Required for list/create.")] string entity_name = "",
            [Description("Chart GUID. Required for detail/update/rename/set_default/undo (unless chart_name uniquely identifies chart).")] string chart_id = "",
            [Description("Chart name. Used for detail/update/rename lookup or create. Required for create.")] string chart_name = "",
            [Description("OOB Chart Type: Column, Bar, Line, Pie, Doughnut, Funnel, Area, Bubble, Radar. Default: Pie when omitted on create.")] string chart_type = "",
            [Description("Category / group-by attribute logical name or display name. Pie default: statecode.")] string group_by_column = "",
            [Description("Legend / measure attribute logical name or display name. Pie default: importsequencenumber.")] string aggregate_column = "",
            [Description("Aggregation type: 'count' (default), 'sum', 'avg', 'min', 'max'.")] string aggregate_type = "count",
            [Description("Custom presentation Chart XML override (create/update). For undo: path to the .chart.json backup file.")] string presentationdescription = "",
            [Description("Chart description text.")] string description = "",
            [Description("Optional solution unique/display name. When provided and non-empty, chart is added to the solution after create/update.")] string solution_name = "",
            [Description("Validate XML syntax and chart types before saving.")] bool validate = true,
            [Description("Backup before overwrite.")] bool backup = true,
            [Description("Publish entity after create/update/rename/set_default/undo so changes become visible. Default: true. Set false to batch-publish later via publish_customizations.")] bool publish = true,
            [Description("Pie create only: set true only after user approved the confirmation summary. Default false returns needs_confirmation without creating.")] bool confirmed = false,
            [Description("Optional project/workspace folder path to save backups in.")] string workspace_folder = "")
        {
            try
            {
                _workspaceFolder = workspace_folder;

                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required.", "Valid values: 'list', 'detail', 'create', 'update', 'rename', 'set_default', 'undo'.");

                var normalizedAction = action.Trim().ToLowerInvariant();

                if (!string.IsNullOrWhiteSpace(chart_id) && !Guid.TryParse(chart_id.Trim(), out _))
                    return Error($"'{chart_id}' is not a valid GUID.");

                return normalizedAction switch
                {
                    "list" => HandleList(entity_name),
                    "detail" => HandleDetail(entity_name, chart_id, chart_name),
                    "create" => HandleCreate(entity_name, chart_name, chart_type, group_by_column, aggregate_column, aggregate_type, presentationdescription, description, solution_name, validate, publish, confirmed),
                    "update" => HandleUpdate(entity_name, chart_id, chart_name, chart_type, group_by_column, aggregate_column, aggregate_type, presentationdescription, description, solution_name, validate, backup, publish),
                    "rename" => HandleRename(entity_name, chart_id, chart_name, solution_name, publish),
                    "set_default" => HandleSetDefault(entity_name, chart_id, chart_name, publish),
                    "undo" => HandleUndo(chart_id, presentationdescription, solution_name, publish),
                    _ => Error($"Invalid action '{action}'.", "Valid values: 'list', 'detail', 'create', 'update', 'rename', 'set_default', 'undo'.")
                };
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        private CallToolResult HandleList(string entityNameInput)
        {
            var entityName = ResolveEntityLogicalName(entityNameInput);
            const string table = "savedqueryvisualization";
            const string idCol = "savedqueryvisualizationid";

            var query = new QueryExpression(table)
            {
                ColumnSet = new ColumnSet(idCol, "name", "description", "isdefault", "primaryentitytypecode")
            };

            if (!string.IsNullOrWhiteSpace(entityName))
                query.Criteria.AddCondition("primaryentitytypecode", ConditionOperator.Equal, entityName);

            var result = _serviceClient.RetrieveMultiple(query);

            var charts = result.Entities.Select(entity => new ChartListEntry
            {
                ChartId = entity.GetAttributeValue<Guid>(idCol).ToString(),
                ChartName = entity.GetAttributeValue<string>("name"),
                Entity = entity.GetAttributeValue<string>("primaryentitytypecode"),
                IsDefault = entity.GetAttributeValue<bool?>("isdefault") ?? false,
                Description = entity.GetAttributeValue<string>("description")
            }).ToList();

            var text = string.IsNullOrEmpty(entityName)
                ? $"Found {charts.Count} system chart(s) across all entities."
                : $"Found {charts.Count} system chart(s) for '{entityName}'.";

            return Success(text, new UpsertChartResult
            {
                Action = "list",
                Entity = string.IsNullOrEmpty(entityName) ? null : entityName,
                TotalCount = charts.Count,
                Charts = charts.Count > 0 ? charts : null,
                Status = "success"
            });
        }

        private CallToolResult HandleDetail(string entityNameInput, string chartIdInput, string chartNameInput)
        {
            var entity = FindChart(entityNameInput, chartIdInput, chartNameInput, out var error);
            if (error != null) return Error(error);

            const string idCol = "savedqueryvisualizationid";
            var id = entity.GetAttributeValue<Guid>(idCol);
            var name = entity.GetAttributeValue<string>("name");
            var desc = entity.GetAttributeValue<string>("description");
            var primaryEntity = entity.GetAttributeValue<string>("primaryentitytypecode");
            var dataXml = entity.GetAttributeValue<string>("datadescription");
            var presXml = entity.GetAttributeValue<string>("presentationdescription");
            var isDefault = entity.GetAttributeValue<bool?>("isdefault") ?? false;

            var text = $"'{name}' ({id}) on '{primaryEntity}'{(isDefault ? " — default" : "")}. datadescription/presentationdescription in structuredContent.";

            return Success(text, new UpsertChartResult
            {
                Action = "detail",
                Entity = primaryEntity,
                ChartId = id.ToString(),
                ChartName = name,
                Description = string.IsNullOrWhiteSpace(desc) ? null : desc,
                IsDefault = isDefault,
                DataDescription = dataXml,
                PresentationDescription = presXml,
                Status = "success"
            });
        }

        private CallToolResult HandleCreate(
            string entityNameInput, string chartName, string chartTypeInput,
            string groupByColInput, string aggregateColInput, string aggregateTypeInput,
            string presXmlInput, string description, string solutionName, bool validate, bool publish, bool confirmed)
        {
            if (string.IsNullOrWhiteSpace(entityNameInput))
                return Error("entity_name is required when action='create'.");

            if (string.IsNullOrWhiteSpace(chartName))
                return Error("chart_name is required when action='create'.");

            var entityResolve = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityNameInput.Trim(), "manage_chart");
            if (!entityResolve.IsSuccess)
                return Error($"entity_name '{entityNameInput.Trim()}': {entityResolve.Error}");

            var entityName = entityResolve.Value.LogicalName;
            var chartType = ResolveChartType(chartTypeInput, out var chartTypeDefaulted);
            var isPie = chartType.Equals("Pie", StringComparison.OrdinalIgnoreCase);

            string groupByCol;
            string aggregateCol;
            string aggregateType;
            var defaultsApplied = new List<string>();

            if (isPie)
            {
                if (chartTypeDefaulted)
                    defaultsApplied.Add("chart_type=Pie");

                groupByCol = string.IsNullOrWhiteSpace(groupByColInput)
                    ? DefaultPieCategoryColumn
                    : groupByColInput.Trim().ToLowerInvariant();
                if (string.IsNullOrWhiteSpace(groupByColInput))
                    defaultsApplied.Add($"category/group_by_column={DefaultPieCategoryColumn}");

                aggregateCol = string.IsNullOrWhiteSpace(aggregateColInput)
                    ? DefaultPieLegendColumn
                    : aggregateColInput.Trim().ToLowerInvariant();
                if (string.IsNullOrWhiteSpace(aggregateColInput))
                    defaultsApplied.Add($"legend/aggregate_column={DefaultPieLegendColumn}");

                aggregateType = string.IsNullOrWhiteSpace(aggregateTypeInput)
                    ? DefaultPieAggregateType
                    : aggregateTypeInput.Trim().ToLowerInvariant();
                if (string.IsNullOrWhiteSpace(aggregateTypeInput) ||
                    aggregateType.Equals(DefaultPieAggregateType, StringComparison.OrdinalIgnoreCase))
                {
                    if (string.IsNullOrWhiteSpace(aggregateTypeInput))
                        defaultsApplied.Add($"aggregate_type={DefaultPieAggregateType}");
                }

                if (!confirmed)
                {
                    var confirmText = $"Pie chart '{chartName.Trim()}' not created — confirmation required. " +
                        $"Plan: type={chartType}{(chartTypeDefaulted ? " (default)" : "")}, entity={entityName}, " +
                        $"category={groupByCol}{(string.IsNullOrWhiteSpace(groupByColInput) ? " (default)" : "")}, " +
                        $"legend={aggregateCol}/{aggregateType}{(string.IsNullOrWhiteSpace(aggregateColInput) ? " (default)" : "")}" +
                        (string.IsNullOrWhiteSpace(solutionName) ? "" : $", solution={solutionName.Trim()}") +
                        ". Show the plan to the user; after approval re-call with confirmed=true and the same values.";

                    return Success(confirmText, new UpsertChartResult
                    {
                        Action = "create",
                        Entity = entityName,
                        ChartName = chartName.Trim(),
                        ChartType = chartType,
                        Category = groupByCol,
                        Legend = aggregateCol,
                        AggregateType = aggregateType,
                        SolutionName = string.IsNullOrWhiteSpace(solutionName) ? null : solutionName.Trim(),
                        Status = "needs_confirmation",
                        NeedsConfirmation = true,
                        DefaultsApplied = defaultsApplied.Count > 0 ? defaultsApplied : null
                    });
                }
            }
            else
            {
                // Non-pie rules will be tightened later; keep entity-based defaults for now.
                groupByCol = string.IsNullOrWhiteSpace(groupByColInput)
                    ? DefaultPieCategoryColumn
                    : groupByColInput.Trim().ToLowerInvariant();
                aggregateCol = string.IsNullOrWhiteSpace(aggregateColInput)
                    ? DefaultPieLegendColumn
                    : aggregateColInput.Trim().ToLowerInvariant();
                aggregateType = string.IsNullOrWhiteSpace(aggregateTypeInput)
                    ? DefaultPieAggregateType
                    : aggregateTypeInput.Trim().ToLowerInvariant();
            }

            var (dataXml, aggregateAlias, dataError) = BuildDataDescriptionFromEntity(
                entityName, groupByCol, aggregateCol, aggregateType);
            if (dataError != null) return Error(dataError);

            var presXml = string.IsNullOrWhiteSpace(presXmlInput)
                ? BuildPresentationDescription(chartType, chartName, aggregateAlias)
                : ResolveXmlInput(presXmlInput);

            var (valErrors, valWarnings) = validate
                ? ValidateChartXmls(dataXml, presXml)
                : (new List<string>(), new List<string>());

            if (valErrors.Count > 0)
                return Error(
                    $"Validation failed for new chart '{chartName}' ({valErrors.Count} error(s)). First: {valErrors[0]}",
                    details: new { validationErrors = valErrors });

            string resolvedSolutionUniqueName = null;
            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName.Trim());
                if (!solResult.IsSuccess)
                    return Error(solResult.Error);
                if (string.IsNullOrWhiteSpace(solResult.UniqueName))
                    return Error($"Solution '{solutionName}' resolved but unique name is null/empty. Chart was not created.");
                resolvedSolutionUniqueName = solResult.UniqueName;
            }

            if (_options.DryRun)
            {
                var dryMsg = $"Would CREATE system chart '{chartName}' ({chartType}) for entity '{entityName}' " +
                             $"(category={groupByCol}, legend={aggregateCol}/{aggregateType}" +
                             (resolvedSolutionUniqueName != null ? $", solution={resolvedSolutionUniqueName}" : "") +
                             ").";
                return DryRun(dryMsg, new UpsertChartResult
                {
                    Action = "create",
                    Entity = entityName,
                    ChartName = chartName,
                    ChartType = chartType,
                    Category = groupByCol,
                    Legend = aggregateCol,
                    AggregateType = aggregateType,
                    SolutionName = resolvedSolutionUniqueName,
                    Status = "not_executed",
                    NeedsConfirmation = false,
                    Validated = validate,
                    Published = false
                });
            }

            const string table = "savedqueryvisualization";
            var chartRecord = new Entity(table)
            {
                ["name"] = chartName.Trim(),
                ["primaryentitytypecode"] = entityName,
                ["datadescription"] = dataXml,
                ["presentationdescription"] = presXml
            };
            if (!string.IsNullOrWhiteSpace(description)) chartRecord["description"] = description;

            var newId = DataverseMutationExecutor.Create(_context, _serviceClient, chartRecord);

            string solutionWarning = null;
            if (!string.IsNullOrWhiteSpace(resolvedSolutionUniqueName))
                solutionWarning = AddToSolution(newId, resolvedSolutionUniqueName);

            var published = false;
            if (publish)
            {
                PublishHelper.PublishEntity(_context, _serviceClient, entityName);
                published = true;
            }

            var text = $"Created chart '{chartName.Trim()}' ({newId}) on '{entityName}': type={chartType}, category={groupByCol}, legend={aggregateCol}/{aggregateType}.";
            if (!string.IsNullOrWhiteSpace(resolvedSolutionUniqueName))
                text += solutionWarning == null
                    ? $" Added to solution '{resolvedSolutionUniqueName}'."
                    : $" Not added to solution '{resolvedSolutionUniqueName}' (see solutionWarning).";
            if (!published) text += " Not published (publish=false).";

            return Success(text, new UpsertChartResult
            {
                Action = "create",
                Entity = entityName,
                ChartId = newId.ToString(),
                ChartName = chartName.Trim(),
                ChartType = chartType,
                Category = groupByCol,
                Legend = aggregateCol,
                AggregateType = aggregateType,
                SolutionName = resolvedSolutionUniqueName,
                SolutionWarning = solutionWarning,
                Status = "created",
                NeedsConfirmation = false,
                DefaultsApplied = defaultsApplied.Count > 0 ? defaultsApplied : null,
                Validated = validate,
                ValidationWarnings = valWarnings.Count > 0 ? valWarnings : null,
                Published = published
            });
        }

        private CallToolResult HandleUpdate(
            string entityNameInput, string chartIdInput, string chartNameInput,
            string chartTypeInput, string groupByColInput, string aggregateColInput, string aggregateTypeInput,
            string presXmlInput, string description, string solutionName,
            bool validate, bool backup, bool publish)
        {
            var chartRecord = FindChart(entityNameInput, chartIdInput, chartNameInput, out var error);
            if (error != null) return Error(error);

            const string table = "savedqueryvisualization";
            const string idCol = "savedqueryvisualizationid";
            var chartId = chartRecord.GetAttributeValue<Guid>(idCol);
            var chartName = chartRecord.GetAttributeValue<string>("name");
            var primaryEntity = chartRecord.GetAttributeValue<string>("primaryentitytypecode");

            var currentDataXml = chartRecord.GetAttributeValue<string>("datadescription");
            var currentPresXml = chartRecord.GetAttributeValue<string>("presentationdescription");

            var newDataXml = currentDataXml;
            string aggregateAlias = null;
            var shouldRebuildData =
                !string.IsNullOrWhiteSpace(groupByColInput) ||
                !string.IsNullOrWhiteSpace(aggregateColInput) ||
                !string.IsNullOrWhiteSpace(aggregateTypeInput);

            if (shouldRebuildData)
            {
                var groupByCol = string.IsNullOrWhiteSpace(groupByColInput)
                    ? DefaultPieCategoryColumn
                    : groupByColInput.Trim().ToLowerInvariant();
                var aggregateCol = string.IsNullOrWhiteSpace(aggregateColInput)
                    ? DefaultPieLegendColumn
                    : aggregateColInput.Trim().ToLowerInvariant();
                var aggregateType = string.IsNullOrWhiteSpace(aggregateTypeInput)
                    ? DefaultPieAggregateType
                    : aggregateTypeInput.Trim().ToLowerInvariant();

                var (derivedDataXml, alias, dataErr) = BuildDataDescriptionFromEntity(
                    primaryEntity, groupByCol, aggregateCol, aggregateType);
                if (dataErr != null) return Error(dataErr);
                newDataXml = derivedDataXml;
                aggregateAlias = alias;
            }

            var newPresXml = currentPresXml;
            if (!string.IsNullOrWhiteSpace(chartTypeInput))
            {
                newPresXml = BuildPresentationDescription(chartTypeInput.Trim(), chartName, aggregateAlias);
            }
            else if (!string.IsNullOrWhiteSpace(presXmlInput))
            {
                newPresXml = ResolveXmlInput(presXmlInput);
            }

            var (valErrors, valWarnings) = validate
                ? ValidateChartXmls(newDataXml, newPresXml)
                : (new List<string>(), new List<string>());

            if (valErrors.Count > 0)
                return Error(
                    $"Validation failed for chart '{chartName}' ({chartId}) ({valErrors.Count} error(s)). First: {valErrors[0]}",
                    details: new { validationErrors = valErrors });

            string resolvedSolutionUniqueName = null;
            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName.Trim());
                if (!solResult.IsSuccess)
                    return Error(solResult.Error);
                if (string.IsNullOrWhiteSpace(solResult.UniqueName))
                    return Error($"Solution '{solutionName}' resolved but unique name is null/empty.");
                resolvedSolutionUniqueName = solResult.UniqueName;
            }

            string backupPath = null;
            if (backup)
            {
                backupPath = SaveBackup(primaryEntity, chartId, chartName, currentDataXml, currentPresXml);
            }

            if (_options.DryRun)
                return DryRun($"Would UPDATE chart '{chartName}' ({chartId}). Backup: {backupPath ?? "none"}.", new UpsertChartResult
                {
                    Action = "update",
                    Entity = primaryEntity,
                    ChartId = chartId.ToString(),
                    ChartName = chartName,
                    SolutionName = resolvedSolutionUniqueName,
                    Status = "not_executed",
                    BackupPath = backupPath,
                    Validated = validate,
                    Published = false
                });

            var updateRecord = new Entity(table, chartId)
            {
                ["datadescription"] = newDataXml,
                ["presentationdescription"] = newPresXml
            };
            if (description != null && description != "") updateRecord["description"] = description;

            DataverseMutationExecutor.Update(_context, _serviceClient, updateRecord);

            string solutionWarning = null;
            if (!string.IsNullOrWhiteSpace(resolvedSolutionUniqueName))
                solutionWarning = AddToSolution(chartId, resolvedSolutionUniqueName);

            var published = false;
            if (publish)
            {
                PublishHelper.PublishEntity(_context, _serviceClient, primaryEntity);
                published = true;
            }

            var text = $"Updated chart '{chartName}' ({chartId}) on '{primaryEntity}'.";
            if (!string.IsNullOrWhiteSpace(resolvedSolutionUniqueName))
                text += solutionWarning == null
                    ? $" Added to solution '{resolvedSolutionUniqueName}'."
                    : $" Not added to solution '{resolvedSolutionUniqueName}' (see solutionWarning).";
            if (!published) text += " Not published (publish=false).";

            return Success(text, new UpsertChartResult
            {
                Action = "update",
                Entity = primaryEntity,
                ChartId = chartId.ToString(),
                ChartName = chartName,
                SolutionName = resolvedSolutionUniqueName,
                SolutionWarning = solutionWarning,
                Status = "updated",
                Validated = validate,
                ValidationWarnings = valWarnings.Count > 0 ? valWarnings : null,
                BackupPath = backupPath,
                Published = published
            });
        }

        private CallToolResult HandleRename(string entityNameInput, string chartIdInput, string chartNameInput, string solutionName, bool publish)
        {
            if (string.IsNullOrWhiteSpace(chartNameInput))
                return Error("chart_name is required when action='rename'.");

            var chartRecord = FindChart(entityNameInput, chartIdInput, null, out var error);
            if (error != null) return Error(error);

            const string table = "savedqueryvisualization";
            const string idCol = "savedqueryvisualizationid";
            var chartId = chartRecord.GetAttributeValue<Guid>(idCol);
            var primaryEntity = chartRecord.GetAttributeValue<string>("primaryentitytypecode");

            if (_options.DryRun)
                return DryRun($"Would RENAME chart {chartId} to '{chartNameInput}'.", new UpsertChartResult
                {
                    Action = "rename",
                    Entity = primaryEntity,
                    ChartId = chartId.ToString(),
                    ChartName = chartNameInput.Trim(),
                    Status = "not_executed",
                    Published = false
                });

            var updateRecord = new Entity(table, chartId)
            {
                ["name"] = chartNameInput.Trim()
            };
            DataverseMutationExecutor.Update(_context, _serviceClient, updateRecord);

            string solutionWarning = null;
            if (!string.IsNullOrWhiteSpace(solutionName))
                solutionWarning = AddToSolution(chartId, solutionName.Trim());

            var published = false;
            if (publish)
            {
                PublishHelper.PublishEntity(_context, _serviceClient, primaryEntity);
                published = true;
            }

            var text = $"Renamed chart {chartId} to '{chartNameInput.Trim()}'.";
            if (solutionWarning != null)
                text += $" Not added to solution '{solutionName.Trim()}' (see solutionWarning).";
            if (!published) text += " Not published (publish=false).";

            return Success(text, new UpsertChartResult
            {
                Action = "rename",
                Entity = primaryEntity,
                ChartId = chartId.ToString(),
                ChartName = chartNameInput.Trim(),
                SolutionName = string.IsNullOrWhiteSpace(solutionName) ? null : solutionName.Trim(),
                SolutionWarning = solutionWarning,
                Status = "renamed",
                Published = published
            });
        }

        private CallToolResult HandleSetDefault(string entityNameInput, string chartIdInput, string chartNameInput, bool publish)
        {
            var chartRecord = FindChart(entityNameInput, chartIdInput, chartNameInput, out var error);
            if (error != null) return Error(error);

            var chartId = chartRecord.GetAttributeValue<Guid>("savedqueryvisualizationid");
            var chartName = chartRecord.GetAttributeValue<string>("name");
            var primaryEntity = chartRecord.GetAttributeValue<string>("primaryentitytypecode");

            if (_options.DryRun)
                return DryRun($"Would SET chart '{chartName}' ({chartId}) as DEFAULT for entity '{primaryEntity}'.", new UpsertChartResult
                {
                    Action = "set_default",
                    Entity = primaryEntity,
                    ChartId = chartId.ToString(),
                    ChartName = chartName,
                    Status = "not_executed",
                    Published = false
                });

            var query = new QueryExpression("savedqueryvisualization")
            {
                ColumnSet = new ColumnSet("savedqueryvisualizationid", "isdefault")
            };
            query.Criteria.AddCondition("primaryentitytypecode", ConditionOperator.Equal, primaryEntity);
            query.Criteria.AddCondition("isdefault", ConditionOperator.Equal, true);

            var existingDefaults = _serviceClient.RetrieveMultiple(query);
            foreach (var existing in existingDefaults.Entities)
            {
                if (existing.Id == chartId) continue;
                DataverseMutationExecutor.Update(_context, _serviceClient, new Entity("savedqueryvisualization", existing.Id) { ["isdefault"] = false });
            }

            DataverseMutationExecutor.Update(_context, _serviceClient, new Entity("savedqueryvisualization", chartId) { ["isdefault"] = true });

            var published = false;
            if (publish)
            {
                PublishHelper.PublishEntity(_context, _serviceClient, primaryEntity);
                published = true;
            }

            var text = $"Set chart '{chartName}' ({chartId}) as default for '{primaryEntity}'.";
            if (!published) text += " Not published (publish=false).";

            return Success(text, new UpsertChartResult
            {
                Action = "set_default",
                Entity = primaryEntity,
                ChartId = chartId.ToString(),
                ChartName = chartName,
                Status = "default_set",
                Published = published
            });
        }

        private CallToolResult HandleUndo(string chartIdInput, string backupPathInput, string solutionName, bool publish)
        {
            if (string.IsNullOrWhiteSpace(backupPathInput))
                return Error("backup path is required when action='undo'.", "Pass the .chart.json backup path via presentationdescription.");

            if (!File.Exists(backupPathInput))
                return Error($"Backup file not found at '{backupPathInput}'.");

            // Malformed backup JSON bubbles to the entry-point catch (single-try rule).
            var json = File.ReadAllText(backupPathInput, Encoding.UTF8);
            var backupData = JsonSerializer.Deserialize<ChartBackup>(json);

            if (backupData == null || string.IsNullOrWhiteSpace(backupData.ChartId))
                return Error("Backup file does not contain valid chart data.");

            var chartId = Guid.Parse(backupData.ChartId);

            if (_options.DryRun)
                return DryRun($"Would UNDO chart {chartId} using backup from '{backupPathInput}'.", new UpsertChartResult
                {
                    Action = "undo",
                    Entity = backupData.Entity,
                    ChartId = chartId.ToString(),
                    ChartName = backupData.ChartName,
                    Status = "not_executed",
                    RestoredFromBackup = backupPathInput,
                    Published = false
                });

            const string table = "savedqueryvisualization";
            var updateRecord = new Entity(table, chartId);
            if (backupData.DataDescription != null) updateRecord["datadescription"] = backupData.DataDescription;
            if (backupData.PresentationDescription != null) updateRecord["presentationdescription"] = backupData.PresentationDescription;

            DataverseMutationExecutor.Update(_context, _serviceClient, updateRecord);

            string solutionWarning = null;
            if (!string.IsNullOrWhiteSpace(solutionName))
                solutionWarning = AddToSolution(chartId, solutionName.Trim());

            var published = false;
            if (publish && !string.IsNullOrEmpty(backupData.Entity))
            {
                PublishHelper.PublishEntity(_context, _serviceClient, backupData.Entity);
                published = true;
            }

            var text = $"Restored chart {chartId} from backup '{backupPathInput}'.";
            if (solutionWarning != null)
                text += $" Not added to solution '{solutionName.Trim()}' (see solutionWarning).";
            if (!published) text += " Not published.";

            return Success(text, new UpsertChartResult
            {
                Action = "undo",
                Entity = string.IsNullOrWhiteSpace(backupData.Entity) ? null : backupData.Entity,
                ChartId = chartId.ToString(),
                ChartName = backupData.ChartName,
                SolutionName = string.IsNullOrWhiteSpace(solutionName) ? null : solutionName.Trim(),
                SolutionWarning = solutionWarning,
                Status = "restored",
                RestoredFromBackup = backupPathInput,
                Published = published
            });
        }

        // ── Entity-Based DataDescription Builder ───────────────────────────

        private static (string Xml, string AggregateAlias, string Error) BuildDataDescriptionFromEntity(
            string entityName, string groupByCol, string aggregateCol, string aggregateType)
        {
            if (string.IsNullOrWhiteSpace(entityName))
                return (null, null, "entity logical name is required to build chart data specification.");
            if (string.IsNullOrWhiteSpace(groupByCol))
                return (null, null, "category/group_by_column is required to build chart data specification.");
            if (string.IsNullOrWhiteSpace(aggregateCol))
                return (null, null, "legend/aggregate_column is required to build chart data specification.");

            var targetEntity = entityName.Trim().ToLowerInvariant();
            var resolvedGroupBy = groupByCol.Trim().ToLowerInvariant();
            var resolvedAggregate = aggregateCol.Trim().ToLowerInvariant();
            var aggType = string.IsNullOrWhiteSpace(aggregateType)
                ? DefaultPieAggregateType
                : aggregateType.Trim().ToLowerInvariant();

            // Keep aliases stable and portal-compatible.
            const string groupByAlias = "groupby_column";
            const string aggregateAlias = "aggregate_column";

            // OOB pie charts use a slightly different datadescription shape than column/bar:
            // - aggregate attribute first, then groupby attribute
            // - <category> WITHOUT alias="groupby_column"
            // NOTE: category alias is the critical runtime difference that causes Errors.LoadChartDataFailed
            // for pie charts when present. OOB pie charts omit it. Non-pie OOB charts include it.
            // We omit category alias always because measure alias is enough for binding and is
            // compatible with both pie and non-pie OOB samples inspected in this org.
            var sb = new StringBuilder();
            sb.Append("<datadefinition>");
            sb.Append("<fetchcollection>");
            sb.Append("<fetch mapping=\"logical\" aggregate=\"true\">");
            sb.Append($"<entity name=\"{targetEntity}\">");
            // Match OOB pie attribute order: aggregate then groupby. Harmless for other chart types.
            sb.Append($"<attribute alias=\"{aggregateAlias}\" name=\"{resolvedAggregate}\" aggregate=\"{aggType}\" />");
            sb.Append($"<attribute groupby=\"true\" alias=\"{groupByAlias}\" name=\"{resolvedGroupBy}\" />");
            sb.Append("</entity>");
            sb.Append("</fetch>");
            sb.Append("</fetchcollection>");
            sb.Append("<categorycollection>");
            sb.Append("<category>");
            sb.Append("<measurecollection>");
            sb.Append($"<measure alias=\"{aggregateAlias}\" />");
            sb.Append("</measurecollection>");
            sb.Append("</category>");
            sb.Append("</categorycollection>");
            sb.Append("</datadefinition>");

            return (sb.ToString(), aggregateAlias, null);
        }

        private static string ResolveChartType(string chartTypeInput, out bool defaulted)
        {
            if (string.IsNullOrWhiteSpace(chartTypeInput))
            {
                defaulted = true;
                return DefaultChartType;
            }

            defaulted = false;
            var match = SupportedChartTypes.FirstOrDefault(t => t.Equals(chartTypeInput.Trim(), StringComparison.OrdinalIgnoreCase));
            if (match == null)
                return chartTypeInput.Trim();

            // Normalize Donut -> Doughnut for template lookup, keep Pie casing from supported set.
            return match.Equals("Donut", StringComparison.OrdinalIgnoreCase) ? "Doughnut" : match;
        }

        // ── Automatic PresentationDescription Builder ──────────────────────

        private static string BuildPresentationDescription(string chartType, string chartName, string aggregateAlias = null)
        {
            var validChartType = SupportedChartTypes.FirstOrDefault(t => t.Equals(chartType, StringComparison.OrdinalIgnoreCase)) ?? "Column";
            var resourceName = validChartType.Equals("Donut", StringComparison.OrdinalIgnoreCase) ? "Doughnut" : validChartType;

            // Shared project embeds as DynamicsCrm.DevKit.Cli.Resources.charts.<Type>.xml
            // because CLI imports Shared.projitems and uses CLI root namespace.
            var chartXml = ReadChartTemplateXml(resourceName);

            if (string.IsNullOrWhiteSpace(chartXml))
            {
                throw new InvalidOperationException(
                    $"Chart XML resource template for '{validChartType}' could not be found in embedded resources. Expected resource ending with 'Resources.charts.{resourceName}.xml'.");
            }

            // Dynamic Binding: set Series Name to measure alias when template has a Series element.
            // For Pie, portal XML does not require Series Name; keep template as-is if no Series found.
            if (!string.IsNullOrWhiteSpace(aggregateAlias))
            {
                try
                {
                    var doc = XDocument.Parse(chartXml);
                    var seriesElem = doc.Descendants("Series")
                        .FirstOrDefault(s => s.Attribute("ChartType") != null || s.Attribute("Name") != null || s.Attribute("IsValueShownAsLabel") != null);
                    if (seriesElem != null && seriesElem.Attribute("Name") != null)
                    {
                        seriesElem.SetAttributeValue("Name", aggregateAlias);
                        chartXml = doc.ToString(SaveOptions.DisableFormatting);
                    }
                }
                catch
                {
                    // Fallback to raw XML if parsing fails
                }
            }

            // Dataverse stores presentationdescription as raw <Chart>...</Chart> (no wrapper).
            return chartXml.Trim();
        }

        private static string ReadChartTemplateXml(string resourceName)
        {
            var assembly = typeof(ManageChartTool).Assembly;
            var suffix = $"Resources.charts.{resourceName}.xml";
            var resourcePath = assembly.GetManifestResourceNames()
                .FirstOrDefault(n => n.EndsWith(suffix, StringComparison.OrdinalIgnoreCase));
            if (resourcePath == null) return null;

            using var stream = assembly.GetManifestResourceStream(resourcePath);
            if (stream == null) return null;
            using var reader = new StreamReader(stream, Encoding.UTF8);
            return reader.ReadToEnd();
        }

        // ── Solution Component Helper (SDK Request) ─────────────────────────

        /// <summary>
        /// Adds the chart to a solution. Returns the failure reason when the add
        /// fails (reported via solutionWarning), or null on success. Callers must
        /// null-check the solution name before calling.
        /// </summary>
        private string AddToSolution(Guid chartId, string solutionUniqueName)
        {
            var result = SolutionComponentCreateHelper.AddExistingComponent(
                _context,
                _serviceClient,
                chartId,
                59, // SavedQueryVisualization (System Chart)
                solutionUniqueName,
                addRequiredComponents: false);
            return string.IsNullOrWhiteSpace(result.AddToSolutionWarning) ? null : result.AddToSolutionWarning;
        }

        // ── Shared Helpers ──────────────────────────────────────────────────

        private Entity FindChart(string entityNameInput, string chartIdInput, string chartNameInput, out string error)
        {
            error = null;
            const string table = "savedqueryvisualization";
            const string idCol = "savedqueryvisualizationid";

            if (!string.IsNullOrWhiteSpace(chartIdInput))
            {
                if (!Guid.TryParse(chartIdInput.Trim(), out var guid))
                {
                    error = $"'{chartIdInput}' is not a valid GUID.";
                    return null;
                }
                var entity = _serviceClient.Retrieve(table, guid, new ColumnSet(idCol, "name", "description", "datadescription", "presentationdescription", "isdefault", "primaryentitytypecode"));
                if (entity == null)
                    error = $"Chart with ID '{chartIdInput}' not found.";
                return entity;
            }

            if (!string.IsNullOrWhiteSpace(chartNameInput))
            {
                var query = new QueryExpression(table)
                {
                    ColumnSet = new ColumnSet(idCol, "name", "description", "datadescription", "presentationdescription", "isdefault", "primaryentitytypecode")
                };
                query.Criteria.AddCondition("name", ConditionOperator.Equal, chartNameInput.Trim());

                if (!string.IsNullOrWhiteSpace(entityNameInput))
                {
                    var logicalName = ResolveEntityLogicalName(entityNameInput);
                    if (!string.IsNullOrEmpty(logicalName))
                        query.Criteria.AddCondition("primaryentitytypecode", ConditionOperator.Equal, logicalName);
                }

                var res = _serviceClient.RetrieveMultiple(query);
                if (res.Entities.Count == 0)
                {
                    error = $"No chart found matching name '{chartNameInput}'.";
                    return null;
                }
                return res.Entities[0];
            }

            error = "Either chart_id or chart_name must be provided.";
            return null;
        }

        private string ResolveEntityLogicalName(string entityNameInput)
        {
            if (string.IsNullOrWhiteSpace(entityNameInput)) return "";
            var resolved = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityNameInput.Trim(), "manage_chart");
            return resolved.IsSuccess ? resolved.Value.LogicalName : entityNameInput.Trim().ToLowerInvariant();
        }

        private string SaveBackup(string entityName, Guid chartId, string chartName, string dataXml, string presXml)
        {
            var workingDir = string.IsNullOrWhiteSpace(_workspaceFolder) ? Directory.GetCurrentDirectory() : _workspaceFolder;
            var backupDir = Path.Combine(workingDir, ".devkit", "backups", "charts");
            Directory.CreateDirectory(backupDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var backupFile = $"{entityName}_{chartId:N}_{timestamp}.chart.json";
            var backupPath = Path.Combine(backupDir, backupFile);

            var backupData = new ChartBackup
            {
                Entity = entityName,
                ChartId = chartId.ToString(),
                ChartName = chartName,
                Timestamp = DateTime.Now.ToString("yyyy-MM-ddTHH:mm:ss"),
                DataDescription = dataXml,
                PresentationDescription = presXml
            };

            var json = JsonSerializer.Serialize(backupData, new JsonSerializerOptions
            {
                WriteIndented = true,
                Encoder = System.Text.Encodings.Web.JavaScriptEncoder.UnsafeRelaxedJsonEscaping
            });

            File.WriteAllText(backupPath, json, Encoding.UTF8);
            return backupPath;
        }

        private static (List<string> Errors, List<string> Warnings) ValidateChartXmls(string dataXml, string presXml)
        {
            var errors = new List<string>();
            var warnings = new List<string>();

            if (!string.IsNullOrWhiteSpace(dataXml))
            {
                try { XDocument.Parse(dataXml); }
                catch (XmlException ex) { errors.Add($"datadescription XML Syntax Error: {ex.Message}"); }
            }

            if (!string.IsNullOrWhiteSpace(presXml))
            {
                try
                {
                    var doc = XDocument.Parse(presXml);
                    var seriesElements = doc.Descendants("Series");
                    foreach (var series in seriesElements)
                    {
                        var chartTypeAttr = series.Attribute("ChartType")?.Value;
                        if (!string.IsNullOrWhiteSpace(chartTypeAttr) && !SupportedChartTypes.Contains(chartTypeAttr))
                        {
                            errors.Add($"Unsupported ChartType '{chartTypeAttr}'. Supported OOB chart types: Column, Bar, Line, Pie, Doughnut (Donut), Funnel, Area, Bubble, Radar.");
                        }
                    }
                }
                catch (XmlException ex) { errors.Add($"presentationdescription XML Syntax Error: {ex.Message}"); }
            }

            return (errors, warnings);
        }

        private static string ResolveXmlInput(string xmlOrPath)
        {
            if (string.IsNullOrWhiteSpace(xmlOrPath)) return xmlOrPath;
            if (!xmlOrPath.TrimStart().StartsWith("<") && File.Exists(xmlOrPath))
                return File.ReadAllText(xmlOrPath, Encoding.UTF8).Trim();
            return xmlOrPath;
        }

        private sealed class ChartBackup
        {
            [JsonPropertyName("entity")]
            public string Entity { get; set; }

            [JsonPropertyName("chartId")]
            public string ChartId { get; set; }

            [JsonPropertyName("chartName")]
            public string ChartName { get; set; }

            [JsonPropertyName("timestamp")]
            public string Timestamp { get; set; }

            [JsonPropertyName("dataDescription")]
            public string DataDescription { get; set; }

            [JsonPropertyName("presentationDescription")]
            public string PresentationDescription { get; set; }
        }
    }
}

using Microsoft.Crm.Sdk.Messages;
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
            "Dataverse system charts (savedqueryvisualization) — list/detail/create/update/rename/set_default/undo. " +
            "Creates or updates system charts from entity metadata. FetchXML (datadescription) is built from the resolved entity logical name — no view binding. " +
            "Core params for create: entity_name, chart_name. chart_type defaults to Pie when omitted. " +
            "Pie create defaults: category/group_by_column=statecode, legend/aggregate_column=importsequencenumber + count. " +
            "Pie create requires user confirmation: first call returns needs_confirmation summary; re-call with confirmed=true after user approves. " +
            "Optional: group_by_column (category), aggregate_column (legend/measure), aggregate_type (count/sum/avg/min/max), solution_name.")]
        public CallToolResult manage_chart(
            [Description("'list', 'detail', 'create', 'update', 'rename', 'set_default', 'undo'."
            )] string action,
            [Description("Entity Display Name or logical name (e.g. 'Account' or 'account'). Required for list/create."
            )] string entity_name = "",
            [Description("Chart GUID. Required for detail/update/rename/set_default/undo (unless chart_name uniquely identifies chart)."
            )] string chart_id = "",
            [Description("Chart name. Used for detail/update/rename lookup or create. Required for create."
            )] string chart_name = "",
            [Description("OOB Chart Type: Column, Bar, Line, Pie, Doughnut, Funnel, Area, Bubble, Radar. Default: Pie when omitted on create."
            )] string chart_type = "",
            [Description("Category / group-by attribute logical name or display name. Pie default: statecode."
            )] string group_by_column = "",
            [Description("Legend / measure attribute logical name or display name. Pie default: importsequencenumber."
            )] string aggregate_column = "",
            [Description("Aggregation type: 'count' (default), 'sum', 'avg', 'min', 'max'."
            )] string aggregate_type = "count",
            [Description("Optional custom Chart XML presentation description override."
            )] string presentationdescription = "",
            [Description("Chart description text."
            )] string description = "",
            [Description("Optional solution unique/display name. When provided and non-empty, chart is added to the solution after create/update."
            )] string solution_name = "",
            [Description("Validate XML syntax and chart types before saving."
            )] bool validate = true,
            [Description("Backup before overwrite."
            )] bool backup = true,
            [Description("Pie create only: set true only after user approved the confirmation summary. Default false returns needs_confirmation without creating."
            )] bool confirmed = false,
            [Description("Optional project/workspace folder path to save backups in."
            )] string workspace_folder = "")
        {
            _workspaceFolder = workspace_folder;

            if (string.IsNullOrWhiteSpace(action))
                return ErrorResult("Error: action is required. Valid values: 'list', 'detail', 'create', 'update', 'rename', 'set_default', 'undo'.");

            var normalizedAction = action.Trim().ToLowerInvariant();

            if (!string.IsNullOrWhiteSpace(chart_id) && !Guid.TryParse(chart_id.Trim(), out _))
                return ErrorResult($"Error: '{chart_id}' is not a valid GUID.");

            return normalizedAction switch
            {
                "list" => HandleList(entity_name),
                "detail" => HandleDetail(entity_name, chart_id, chart_name),
                "create" => HandleCreate(entity_name, chart_name, chart_type, group_by_column, aggregate_column, aggregate_type, presentationdescription, description, solution_name, validate, confirmed),
                "update" => HandleUpdate(entity_name, chart_id, chart_name, chart_type, group_by_column, aggregate_column, aggregate_type, presentationdescription, description, solution_name, validate, backup),
                "rename" => HandleRename(entity_name, chart_id, chart_name, solution_name),
                "set_default" => HandleSetDefault(entity_name, chart_id, chart_name),
                "undo" => HandleUndo(chart_id, presentationdescription, solution_name),
                _ => ErrorResult($"Error: Unknown action '{action}'. Valid actions: 'list', 'detail', 'create', 'update', 'rename', 'set_default', 'undo'.")
            };
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

            var sb = new StringBuilder();
            sb.AppendLine($"[ChartList] {(string.IsNullOrEmpty(entityName) ? "All Entities" : entityName)} (System Charts)");
            sb.AppendLine($"Found: {result.Entities.Count} chart(s)\n");

            foreach (var entity in result.Entities)
            {
                var id = entity.GetAttributeValue<Guid>(idCol);
                var name = entity.GetAttributeValue<string>("name");
                var desc = entity.GetAttributeValue<string>("description");
                var isDefault = entity.GetAttributeValue<bool?>("isdefault") ?? false;
                var targetEntity = entity.GetAttributeValue<string>("primaryentitytypecode");

                sb.AppendLine($"- {name} (ID: {id})");
                sb.AppendLine($"  Entity: {targetEntity} | Default: {(isDefault ? "Yes" : "No")}");
                if (!string.IsNullOrWhiteSpace(desc))
                    sb.AppendLine($"  Description: {desc}");
            }

            return SuccessResult(sb.ToString(), new UpsertChartResult
            {
                Action = "list",
                Entity = entityName,
                Status = "success"
            });
        }

        private CallToolResult HandleDetail(string entityNameInput, string chartIdInput, string chartNameInput)
        {
            var entity = FindChart(entityNameInput, chartIdInput, chartNameInput, out var error);
            if (error != null) return ErrorResult(error);

            const string idCol = "savedqueryvisualizationid";
            var id = entity.GetAttributeValue<Guid>(idCol);
            var name = entity.GetAttributeValue<string>("name");
            var desc = entity.GetAttributeValue<string>("description");
            var primaryEntity = entity.GetAttributeValue<string>("primaryentitytypecode");
            var dataXml = entity.GetAttributeValue<string>("datadescription");
            var presXml = entity.GetAttributeValue<string>("presentationdescription");
            var isDefault = entity.GetAttributeValue<bool?>("isdefault") ?? false;

            var sb = new StringBuilder();
            sb.AppendLine($"[ChartDetail] {name}");
            sb.AppendLine($"ID: {id}");
            sb.AppendLine($"Entity: {primaryEntity}");
            sb.AppendLine($"Type: System Chart (savedqueryvisualization)");
            sb.AppendLine($"Default: {(isDefault ? "Yes" : "No")}");
            if (!string.IsNullOrWhiteSpace(desc))
                sb.AppendLine($"Description: {desc}");

            sb.AppendLine("\n--- Data Description (FetchXML) ---");
            sb.AppendLine(PrettyPrintXml(dataXml));

            sb.AppendLine("\n--- Presentation Description (Chart XML) ---");
            sb.AppendLine(PrettyPrintXml(presXml));

            return SuccessResult(sb.ToString(), new UpsertChartResult
            {
                Action = "detail",
                Entity = primaryEntity,
                ChartId = id.ToString(),
                ChartName = name,
                Status = "success"
            });
        }

        private CallToolResult HandleCreate(
            string entityNameInput, string chartName, string chartTypeInput,
            string groupByColInput, string aggregateColInput, string aggregateTypeInput,
            string presXmlInput, string description, string solutionName, bool validate, bool confirmed)
        {
            if (string.IsNullOrWhiteSpace(entityNameInput))
                return ErrorResult("Error: entity_name is required for action='create'.");

            if (string.IsNullOrWhiteSpace(chartName))
                return ErrorResult("Error: chart_name is required for action='create'.");

            var entityResolve = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityNameInput.Trim(), "manage_chart");
            if (!entityResolve.IsSuccess)
                return ErrorResult($"Error: {entityResolve.Error}");

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
                    var confirmSb = new StringBuilder();
                    confirmSb.AppendLine("[ChartCreate] Confirmation required before creating pie chart.");
                    confirmSb.AppendLine("No chart was created. Ask the user to approve the plan below, then re-call manage_chart(action='create', confirmed=true, ...) with the same values.");
                    confirmSb.AppendLine();
                    confirmSb.AppendLine("Proposed chart:");
                    confirmSb.AppendLine($"  Chart Type : {chartType}{(chartTypeDefaulted ? " (default)" : "")}");
                    confirmSb.AppendLine($"  Entity     : {entityName}");
                    confirmSb.AppendLine($"  Chart Name : {chartName.Trim()}");
                    confirmSb.AppendLine($"  Category   : {groupByCol}{(string.IsNullOrWhiteSpace(groupByColInput) ? " (default)" : "")}");
                    confirmSb.AppendLine($"  Legend     : {aggregateCol} / {aggregateType}{(string.IsNullOrWhiteSpace(aggregateColInput) ? " (default)" : "")}");
                    if (!string.IsNullOrWhiteSpace(solutionName))
                        confirmSb.AppendLine($"  Solution   : {solutionName.Trim()}");
                    else
                        confirmSb.AppendLine("  Solution   : (none)");
                    confirmSb.AppendLine();
                    if (defaultsApplied.Count > 0)
                    {
                        confirmSb.AppendLine("Defaults applied:");
                        foreach (var item in defaultsApplied)
                            confirmSb.AppendLine($"  - {item}");
                        confirmSb.AppendLine();
                    }
                    if (string.IsNullOrWhiteSpace(aggregateColInput))
                    {
                        confirmSb.AppendLine(
                            $"Legend default is '{DefaultPieLegendColumn}' with aggregate '{DefaultPieAggregateType}' (field exists on every entity). " +
                            "If the user wants a different measure, change aggregate_column/aggregate_type and confirm again.");
                        confirmSb.AppendLine();
                    }
                    if (string.IsNullOrWhiteSpace(groupByColInput))
                    {
                        confirmSb.AppendLine(
                            $"Category default is '{DefaultPieCategoryColumn}'. If the user wants a different slice field, change group_by_column and confirm again.");
                        confirmSb.AppendLine();
                    }
                    confirmSb.AppendLine("After user approval, re-call with confirmed=true.");

                    return SuccessResult(confirmSb.ToString(), new UpsertChartResult
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
            if (dataError != null) return ErrorResult(dataError);

            var presXml = string.IsNullOrWhiteSpace(presXmlInput)
                ? BuildPresentationDescription(chartType, chartName, aggregateAlias)
                : ResolveXmlInput(presXmlInput);

            var (valErrors, valWarnings) = validate
                ? ValidateChartXmls(dataXml, presXml)
                : (new List<string>(), new List<string>());

            if (valErrors.Count > 0)
            {
                var errSb = new StringBuilder();
                errSb.AppendLine($"[ChartCreate] Validation failed for new chart '{chartName}':");
                foreach (var err in valErrors) errSb.AppendLine($"  - {err}");
                return ErrorResult(errSb.ToString());
            }

            string resolvedSolutionUniqueName = null;
            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName.Trim());
                if (!solResult.IsSuccess)
                    return ErrorResult($"Error: {solResult.Error}");
                if (string.IsNullOrWhiteSpace(solResult.UniqueName))
                    return ErrorResult($"Error: Solution '{solutionName}' resolved but unique name is null/empty. Chart was not created.");
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

            var addedToSolution = false;
            if (!string.IsNullOrWhiteSpace(resolvedSolutionUniqueName))
                addedToSolution = AddToSolutionIfRequested(newId, resolvedSolutionUniqueName);

            var published = PublishIfNeeded(entityName);

            var sb = new StringBuilder();
            sb.AppendLine($"[ChartCreate] Chart '{chartName}' created successfully");
            sb.AppendLine($"ID: {newId}");
            sb.AppendLine($"Entity: {entityName}");
            sb.AppendLine($"ChartType: {chartType}");
            sb.AppendLine($"Category: {groupByCol}");
            sb.AppendLine($"Legend: {aggregateCol} / {aggregateType}");
            if (addedToSolution) sb.AppendLine($"Solution: Added to '{resolvedSolutionUniqueName}'");
            else if (!string.IsNullOrWhiteSpace(resolvedSolutionUniqueName))
                sb.AppendLine($"Solution: Failed to add to '{resolvedSolutionUniqueName}'");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");

            return SuccessResult(sb.ToString(), new UpsertChartResult
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
            bool validate, bool backup)
        {
            var chartRecord = FindChart(entityNameInput, chartIdInput, chartNameInput, out var error);
            if (error != null) return ErrorResult(error);

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
                if (dataErr != null) return ErrorResult(dataErr);
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
            {
                var errSb = new StringBuilder();
                errSb.AppendLine($"[ChartUpdate] Validation failed for chart '{chartName}' ({chartId}):");
                foreach (var err in valErrors) errSb.AppendLine($"  - {err}");
                return ErrorResult(errSb.ToString());
            }

            string resolvedSolutionUniqueName = null;
            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName.Trim());
                if (!solResult.IsSuccess)
                    return ErrorResult($"Error: {solResult.Error}");
                if (string.IsNullOrWhiteSpace(solResult.UniqueName))
                    return ErrorResult($"Error: Solution '{solutionName}' resolved but unique name is null/empty.");
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

            var addedToSolution = false;
            if (!string.IsNullOrWhiteSpace(resolvedSolutionUniqueName))
                addedToSolution = AddToSolutionIfRequested(chartId, resolvedSolutionUniqueName);

            var published = PublishIfNeeded(primaryEntity);

            var sb = new StringBuilder();
            sb.AppendLine($"[ChartUpdate] {primaryEntity} — {chartName}");
            sb.AppendLine($"ChartId: {chartId}");
            sb.AppendLine($"Status: Updated successfully");
            if (addedToSolution) sb.AppendLine($"Solution: Added to '{resolvedSolutionUniqueName}'");
            else if (!string.IsNullOrWhiteSpace(resolvedSolutionUniqueName))
                sb.AppendLine($"Solution: Failed to add to '{resolvedSolutionUniqueName}'");
            sb.AppendLine($"Validated: {(validate ? "yes" : "skipped")}");
            sb.AppendLine($"Backup: {backupPath ?? "skipped"}");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");

            return SuccessResult(sb.ToString(), new UpsertChartResult
            {
                Action = "update",
                Entity = primaryEntity,
                ChartId = chartId.ToString(),
                ChartName = chartName,
                SolutionName = resolvedSolutionUniqueName,
                Status = "updated",
                Validated = validate,
                ValidationWarnings = valWarnings.Count > 0 ? valWarnings : null,
                BackupPath = backupPath,
                Published = published
            });
        }

        private CallToolResult HandleRename(string entityNameInput, string chartIdInput, string chartNameInput, string solutionName)
        {
            if (string.IsNullOrWhiteSpace(chartNameInput))
                return ErrorResult("Error: chart_name is required for action='rename'.");

            var chartRecord = FindChart(entityNameInput, chartIdInput, null, out var error);
            if (error != null) return ErrorResult(error);

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

            AddToSolutionIfRequested(chartId, solutionName);
            var published = PublishIfNeeded(primaryEntity);

            var sb = new StringBuilder();
            sb.AppendLine($"[ChartRename] Chart {chartId} renamed to '{chartNameInput}'");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");

            return SuccessResult(sb.ToString(), new UpsertChartResult
            {
                Action = "rename",
                Entity = primaryEntity,
                ChartId = chartId.ToString(),
                ChartName = chartNameInput.Trim(),
                Status = "renamed",
                Published = published
            });
        }

        private CallToolResult HandleSetDefault(string entityNameInput, string chartIdInput, string chartNameInput)
        {
            var chartRecord = FindChart(entityNameInput, chartIdInput, chartNameInput, out var error);
            if (error != null) return ErrorResult(error);

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

            var published = PublishIfNeeded(primaryEntity);

            var sb = new StringBuilder();
            sb.AppendLine($"[ChartSetDefault] Chart '{chartName}' ({chartId}) set as DEFAULT for '{primaryEntity}'");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");

            return SuccessResult(sb.ToString(), new UpsertChartResult
            {
                Action = "set_default",
                Entity = primaryEntity,
                ChartId = chartId.ToString(),
                ChartName = chartName,
                Status = "default_set",
                Published = published
            });
        }

        private CallToolResult HandleUndo(string chartIdInput, string backupPathInput, string solutionName)
        {
            if (string.IsNullOrWhiteSpace(backupPathInput))
                return ErrorResult("Error: backup path is required for action='undo'.");

            if (!File.Exists(backupPathInput))
                return ErrorResult($"Error: Backup file not found at '{backupPathInput}'.");

            ChartBackup backupData;
            try
            {
                var json = File.ReadAllText(backupPathInput, Encoding.UTF8);
                backupData = JsonSerializer.Deserialize<ChartBackup>(json);
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to parse backup file: {ex.Message}");
            }

            if (backupData == null || string.IsNullOrWhiteSpace(backupData.ChartId))
                return ErrorResult("Error: Backup file does not contain valid chart data.");

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

            AddToSolutionIfRequested(chartId, solutionName);

            var published = false;
            if (!string.IsNullOrEmpty(backupData.Entity))
                published = PublishIfNeeded(backupData.Entity);

            var sb = new StringBuilder();
            sb.AppendLine($"[ChartUndo] Chart {chartId} restored from backup");
            sb.AppendLine($"Restored File: {backupPathInput}");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");

            return SuccessResult(sb.ToString(), new UpsertChartResult
            {
                Action = "undo",
                Entity = backupData.Entity,
                ChartId = chartId.ToString(),
                ChartName = backupData.ChartName,
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
                return (null, null, "Error: entity logical name is required to build chart data specification.");
            if (string.IsNullOrWhiteSpace(groupByCol))
                return (null, null, "Error: category/group_by_column is required to build chart data specification.");
            if (string.IsNullOrWhiteSpace(aggregateCol))
                return (null, null, "Error: legend/aggregate_column is required to build chart data specification.");

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

        private bool AddToSolutionIfRequested(Guid chartId, string solutionName)
        {
            // Caller must null-check solutionName before calling when solution is optional.
            if (string.IsNullOrWhiteSpace(solutionName)) return false;
            try
            {
                var result = SolutionComponentCreateHelper.AddExistingComponent(
                    _context,
                    _serviceClient,
                    chartId,
                    59, // SavedQueryVisualization (System Chart)
                    solutionName,
                    addRequiredComponents: false);
                return result.IsAddToSolution;
            }
            catch (InvalidOperationException) when (_context.MutationsBlocked)
            {
                throw;
            }
            catch
            {
                return false;
            }
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
                    error = $"Error: '{chartIdInput}' is not a valid GUID.";
                    return null;
                }
                var entity = _serviceClient.Retrieve(table, guid, new ColumnSet(idCol, "name", "description", "datadescription", "presentationdescription", "isdefault", "primaryentitytypecode"));
                if (entity == null)
                    error = $"Error: Chart with ID '{chartIdInput}' not found.";
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
                    error = $"Error: No chart found matching name '{chartNameInput}'.";
                    return null;
                }
                return res.Entities[0];
            }

            error = "Error: Either chart_id or chart_name must be provided.";
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

        private bool PublishIfNeeded(string entityName)
        {
            if (string.IsNullOrWhiteSpace(entityName)) return false;
            try
            {
                var pubTool = new PublishCustomizationsTool(_serviceClient, _options, _context);
                pubTool.publish_customizations(entities: entityName);
                return true;
            }
            catch
            {
                return false;
            }
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

        private static string PrettyPrintXml(string xml)
        {
            if (string.IsNullOrWhiteSpace(xml)) return "(empty)";
            try
            {
                var doc = XDocument.Parse(xml);
                return doc.ToString();
            }
            catch
            {
                return xml;
            }
        }

        private CallToolResult ErrorResult(string message) => Error(message);

        private CallToolResult SuccessResult(string text, UpsertChartResult structured) => Success(text, structured);

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

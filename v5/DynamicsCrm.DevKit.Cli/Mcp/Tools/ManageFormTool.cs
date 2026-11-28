using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Form;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageFormTool : McpToolBase
    {
        private const int DashboardFormType = 0;
        private const int SystemFormComponentType = 60;
        private const int QuickCreateFormType = (int)DynamicsCrm.DevKit.Shared.FormType.QuickCreate;
        private readonly IOrganizationService _orgService;
        private static XmlSchemaSet _cachedSchemaSet;
        private static readonly object _schemaLock = new();

        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;
        private string _workspaceFolder;

        private readonly DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver _connections;

        public ManageFormTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context) : this(orgService, options, context, null) { }

        [Microsoft.Extensions.DependencyInjection.ActivatorUtilitiesConstructor]
        public ManageFormTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context, DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver connections)
        {
            _connections = connections;
            _orgService = orgService;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_form", Title = "Manage entity forms",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(UpsertFormResult)),
        Description(
            "Manage Dataverse entity forms and system dashboards (systemform). Actions: 'list', 'detail', 'navigation_list' (read-only) | 'create', 'update', 'rename', 'undo' (mutations — require System Administrator).\n\n" +
            "WHEN TO USE:\n" +
            "- List or inspect entity forms and system dashboards (list, detail) before editing. For system dashboards, omit entity_name and use form_type=0.\n" +
            "- List the Related menu of an entity form with navigation_list and form_id before changing it with manage_navigation operations\n" +
            "- Create a Quick Create form with action='create', form_type=7, form_name, and FormXML from the source form's detail result or a file\n" +
            "- Create a system dashboard with form_type=0, form_name, and formxml. Dashboard detail accepts form_id or a unique form_name match. Update and undo require form_id.\n" +
            "- Apply form operations via action=update (recommended: operations JSON) or raw formxml (advanced/undo)\n" +
            "- Bind installed PCF controls to field or subgrid instances with manage_custom_control operations. Discover names and manifest parameters with inspect_metadata(resource='custom_controls').\n" +
            "- Rename a form, or restore a form from a .formxml backup (undo) — the result's backupPath points to the pre-change backup; pass it as formxml to action='undo' to restore\n\n" +
            "RELATED TOOLS:\n" +
            "- inspect_metadata(resource='tables') → entity logical names; manage_view → entity views; publish_customizations → batch publish\n" +
            "- See schema://formxml + docs://instructions_for_formxml for FormXML structure and operation examples")]
        public System.Threading.Tasks.Task<CallToolResult> InvokeAsync(
            McpServer server,
            [Description("'list', 'detail', 'create', 'update', 'rename', 'undo', 'navigation_list'.")] string action = "",
            [Description("Entity display or logical name, e.g. 'Account' or 'account'. Omit for system dashboard list/detail/create/update/undo.")] string entity_name = "",
            [Description("Form GUID. Required for update/rename/undo/navigation_list. For detail, provide form_id or a form_name filter; use the GUID when name matches are ambiguous.")] string form_id = "",
            [Description("create/rename: new form name. list/detail: name contains filter. Dashboard list returns all matches. Entity list with one name match returns detail. In detail, ignored if form_id is set.")] string form_name = "",
            [Description("System dashboards: 0 (default) with entity_name omitted. Entity create: 7=QuickCreate. Entity list/detail: 0 or omit for all types, 2=Main, 4=Preview, 5=Mobile, 6=QuickView, 7=QuickCreate, 8=Dialog, 11=Card, 12=MainInteractive.")] int form_type = 0,
            [Description("List mode only — include formxml in each entry. Detail always includes formxml.")] bool include_formxml = false,
            [Description("Raw FormXML or a file path for create/update. Required for dashboards. For undo, use the backupPath from update.")] string formxml = "",
            [Description("Entity-form update only: serialized JSON operation array. Each object uses action for the family and manage_action for its verb. See docs://instructions_for_formxml.")] string operations = "",
            [Description("Optional unmanaged solution unique or display name. Entity forms: create/update/rename/undo. System dashboards: create/update.")] string solution_name = "",
            [Description(DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.EnvDescription)] string env = null,
            System.Threading.CancellationToken cancellationToken = default)
        {
            return DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.InvokeAsync(_connections, env, conn =>
            {
                var worker = new ManageFormTool(conn.OrgService, conn.Options, conn.Context);
                return worker.manage_form(server, action, entity_name, form_id, form_name, form_type, include_formxml, formxml, operations, solution_name);
            }, cancellationToken);
        }

        public async Task<CallToolResult> manage_form(
            McpServer server,
            [Description("'list', 'detail', 'create', 'update', 'rename', 'undo', 'navigation_list'.")] string action = "",
            [Description("Entity display or logical name, e.g. 'Account' or 'account'. Omit for system dashboard list/detail/create/update/undo.")] string entity_name = "",
            [Description("Form GUID. Required for update/rename/undo/navigation_list. For detail, provide form_id or a form_name filter; use the GUID when name matches are ambiguous.")] string form_id = "",
            [Description("create/rename: new form name. list/detail: name contains filter. Dashboard list returns all matches. Entity list with one name match returns detail. In detail, ignored if form_id is set.")] string form_name = "",
            [Description("System dashboards: 0 (default) with entity_name omitted. Entity create: 7=QuickCreate. Entity list/detail: 0 or omit for all types, 2=Main, 4=Preview, 5=Mobile, 6=QuickView, 7=QuickCreate, 8=Dialog, 11=Card, 12=MainInteractive.")] int form_type = 0,
            [Description("List mode only — include formxml in each entry. Detail always includes formxml.")] bool include_formxml = false,
            [Description("Raw FormXML or a file path for create/update. Required for dashboards. For undo, use the backupPath from update.")] string formxml = "",
            [Description("Entity-form update only: serialized JSON operation array. Each object uses action for the family and manage_action for its verb. See docs://instructions_for_formxml.")] string operations = "",
            [Description("Optional unmanaged solution unique or display name. Entity forms: create/update/rename/undo. System dashboards: create/update.")] string solution_name = "")
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required.", "Valid values: 'list', 'detail', 'create', 'update', 'rename', 'undo', 'navigation_list'.");

                var normalizedAction = action.Trim().ToLowerInvariant();
                var dashboard = string.IsNullOrWhiteSpace(entity_name) && form_type == DashboardFormType &&
                    normalizedAction is "list" or "detail" or "create" or "update" or "undo";
                EntityMetadata entity = null;
                EntityMetadata[] entityCatalog = [];
                if (!dashboard)
                {
                    if (string.IsNullOrWhiteSpace(entity_name))
                        return Error("entity_name is required.", "Use inspect_metadata(resource='tables') to find the entity logical name.");
                    var entityResult = DisplayNameFirstResolver.ResolveEntity(_orgService, entity_name.Trim(), "manage_form", out entityCatalog);
                    if (!entityResult.IsSuccess)
                        return Error(entityResult.Error);
                    entity = entityResult.Value;
                }
                var entityName = entity?.LogicalName;

                // Rule12: gate form mutations behind System Administrator.
                if (normalizedAction is "create" or "update" or "rename" or "undo"
                    && RoleGateHelper.EnsureSystemAdministrator(_orgService) is { } gate)
                    return gate;

                if (normalizedAction is "update" or "rename")
                    _workspaceFolder = await WorkspaceFolderHelper.GetAsync(server);

                string solution = null;
                if (!string.IsNullOrWhiteSpace(solution_name))
                {
                    var supportsSolution = normalizedAction is "create" or "update"
                        || (!dashboard && normalizedAction is ("rename" or "undo"));
                    if (!supportsSolution)
                        return Error("solution_name is supported for entity form create, update, rename and undo, and system dashboard create and update.");
                    var resolved = SolutionResolverHelper.Resolve(_orgService, solution_name, requireUnmanaged: true);
                    if (!resolved.IsSuccess || string.IsNullOrWhiteSpace(resolved.UniqueName))
                        return Error(resolved.Error ?? $"Solution '{solution_name}' has no unique name.",
                            "Use inspect_metadata(resource='solution_components') to find valid solution names.");
                    solution = resolved.UniqueName;
                }

                return normalizedAction switch
                {
                    "list" => HandleList(entityName, form_name, form_type, include_formxml),
                    "detail" => HandleDetail(entityName, form_id, form_name, form_type),
                    "navigation_list" => HandleNavigationList(entityName, form_id, entityCatalog),
                    "create" => HandleCreate(entity, form_id, form_name, form_type, formxml, operations, solution),
                    "update" => HandleUpdate(entityName, form_id, formxml, operations, solution, entityCatalog),
                    "rename" => HandleRename(entityName, form_id, form_name, solution),
                    "undo" => HandleUndo(entityName, form_id, formxml, solution),
                    _ => Error($"'{action}' is not a valid action.", "Valid actions: list, detail, create, update, rename, undo, navigation_list.")
                };
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        // ── Action: list ──────────────────────────────────────────────────

        private CallToolResult HandleList(string entityName, string formName, int formType, bool includeFormXml)
        {
            if (entityName != null && !string.IsNullOrWhiteSpace(formName))
                return FindFormsByName(entityName, formName.Trim(), formType);

            if (formType != 0 && !ValidFormTypes.Contains(formType))
                return Error($"form_type={formType} is not valid.", "Valid values: 2=Main, 4=Preview, 5=Mobile, 6=QuickView, 7=QuickCreate, 8=Dialog, 11=Card, 12=MainInteractive. Use 0 or omit for all types.");

            var query = BuildListQuery(entityName, formType, includeFormXml);
            if (!string.IsNullOrWhiteSpace(formName))
                AddNameContainsFilter(query, formName.Trim());
            var result = _orgService.RetrieveMultiple(query);
            var forms = result.Entities;

            if (forms.Count == 0)
            {
                var typeHint = formType > 0 ? $" with type={formType}" : "";
                var message = entityName == null ? "No system dashboards found." : $"No forms found for '{entityName}'{typeHint}.";
                return Success(message, new UpsertFormResult
                {
                    Action = "list", Entity = entityName, TotalCount = 0, Status = "success"
                });
            }

            var entries = BuildFormListEntries(forms, includeFormXml);
            var summary = entityName == null
                ? $"Found {entries.Count} system dashboard(s)."
                : $"Found {entries.Count} form(s) for '{entityName}'.";
            return Success(summary, new UpsertFormResult
            {
                Action = "list", Entity = entityName, TotalCount = entries.Count,
                Forms = entries, Status = "success"
            });
        }

        private CallToolResult FindFormsByName(string entityName, string formName, int formType)
        {
            if (formType != 0 && !ValidFormTypes.Contains(formType))
                return Error($"form_type={formType} is not valid.", "Valid values: 2=Main, 4=Preview, 5=Mobile, 6=QuickView, 7=QuickCreate, 8=Dialog, 11=Card, 12=MainInteractive. Use 0 or omit for all types.");

            var query = BuildListQuery(entityName, formType, includeFormXml: false);
            AddNameContainsFilter(query, formName);

            var result = _orgService.RetrieveMultiple(query);
            var forms = result.Entities;

            if (forms.Count == 0)
            {
                var typeHint = formType > 0 ? $" (type={MapFormType(formType)})" : "";
                return Error(
                    $"No form found matching '{formName}' for entity '{entityName}'{typeHint}.",
                    $"Use manage_form with action='list' and entity_name='{entityName}' to list all available forms.");
            }

            if (forms.Count == 1)
                return HandleDetail(entityName, forms[0].GetAttributeValue<Guid>("formid").ToString(), "", formType);

            // Multiple matches — return list for disambiguation
            var entries = BuildFormListEntries(forms, includeFormXml: false);
            return Error(
                $"Multiple forms match '{formName}' for '{entityName}' — provide form_id to proceed.",
                "See the 'forms' array in structuredContent for candidate form IDs.",
                new UpsertFormResult
                {
                    Action = "list", Entity = entityName, TotalCount = entries.Count,
                    Forms = entries, Status = "ambiguous"
                });
        }

        private static List<FormListEntry> BuildFormListEntries(DataCollection<Entity> forms, bool includeFormXml)
        {
            var entries = new List<FormListEntry>(forms.Count);
            foreach (var form in forms)
            {
                var type = form.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
                var activationState = form.GetAttributeValue<OptionSetValue>("formactivationstate")?.Value ?? 0;
                var entry = new FormListEntry
                {
                    FormId = form.GetAttributeValue<Guid>("formid").ToString(),
                    FormName = form.GetAttributeValue<string>("name") ?? "",
                    FormType = type,
                    FormTypeName = MapFormType(type),
                    IsDefault = form.GetAttributeValue<bool>("isdefault"),
                    IsActive = activationState == 1,
                    IsManaged = form.GetAttributeValue<bool>("ismanaged"),
                    Version = form.GetAttributeValue<int>("version")
                };
                if (includeFormXml)
                    entry.FormXml = form.GetAttributeValue<string>("formxml");
                entries.Add(entry);
            }
            return entries;
        }

        // ── Action: detail ────────────────────────────────────────────────

        private CallToolResult HandleDetail(string entityName, string formId, string formName, int formType = 0)
        {
            var listCall = entityName == null
                ? "manage_form(action='list', form_type=0)"
                : $"manage_form(action='list', entity_name='{entityName}')";
            if (string.IsNullOrWhiteSpace(formId) && string.IsNullOrWhiteSpace(formName))
                return Error("form_id or form_name is required when action='detail'.",
                    entityName == null ? $"Use {listCall} to find system dashboard IDs."
                        : $"Pass form_id (GUID) or form_name (name filter). Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs.");

            if (formType != 0 && !ValidFormTypes.Contains(formType))
                return Error($"form_type={formType} is not valid.", "Valid values: 2=Main, 4=Preview, 5=Mobile, 6=QuickView, 7=QuickCreate, 8=Dialog, 11=Card, 12=MainInteractive. Use 0 or omit for all types.");

            if (!string.IsNullOrWhiteSpace(formId))
            {
                if (!Guid.TryParse(formId.Trim(), out var id))
                    return Error($"'{formId}' is not a valid GUID.",
                        $"Pass a form GUID (e.g. from {listCall}), or use form_name instead.");
                return GetFormDetailResult(entityName, id);
            }

            // form_name provided, no form_id
            var nameFilter = formName.Trim();
            var query = BuildListQuery(entityName, formType, includeFormXml: false);
            AddNameContainsFilter(query, nameFilter);

            var result = _orgService.RetrieveMultiple(query);
            var forms = result.Entities;

            if (forms.Count == 0)
            {
                var typeHint = formType > 0 ? $" with type '{MapFormType(formType)}'" : "";
                return Error(
                    entityName == null ? $"No system dashboard found matching name '{nameFilter}'."
                        : $"No form found matching name '{nameFilter}'{typeHint} for entity '{entityName}'.",
                    entityName == null ? $"Use {listCall} to list system dashboards."
                        : $"Use manage_form with action='list' and entity_name='{entityName}' to list all available forms.");
            }

            if (forms.Count == 1)
                return GetFormDetailResult(entityName, forms[0].GetAttributeValue<Guid>("formid"));

            // Multiple matches — return candidates for disambiguation
            var entries = BuildFormListEntries(forms, includeFormXml: false);
            return Error(
                entityName == null ? $"Multiple system dashboards match '{nameFilter}' — provide form_id for detail."
                    : $"Multiple forms match '{nameFilter}' for '{entityName}' — provide form_id for detail.",
                "See the 'forms' array in structuredContent for candidate form IDs.",
                new UpsertFormResult
                {
                    Action = "detail", Entity = entityName, TotalCount = entries.Count,
                    Forms = entries, Status = "ambiguous"
                });
        }

        private CallToolResult GetFormDetailResult(string entityName, Guid formId)
        {
            var query = new QueryExpression("systemform")
            {
                ColumnSet = new ColumnSet(true)
            };
            query.Criteria.AddCondition("formid", ConditionOperator.Equal, formId);

            var result = entityName == null ? RetrieveDashboardForms(query) : _orgService.RetrieveMultiple(query);

            if (result.Entities.Count == 0)
                return Error(
                    $"No form found with ID '{formId}'.",
                    entityName == null ? "Use manage_form(action='list', form_type=0) to find system dashboard IDs."
                        : $"Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs.");

            var form = result.Entities[0];
            var objectTypeCode = form.GetAttributeValue<string>("objecttypecode") ?? "";

            if (entityName == null && !IsSystemDashboard(form))
                return Error($"Form '{formId}' is not a system dashboard.", "Provide entity_name to inspect an entity form.");
            if (entityName != null && !string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return Error(
                    $"Form '{formId}' belongs to '{objectTypeCode}', not '{entityName}'.",
                    $"Use action='list' entity_name='{entityName}' to find forms for that entity.");

            var name = form.GetAttributeValue<string>("name") ?? "";
            var type = form.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
            var isDefault = form.GetAttributeValue<bool>("isdefault");
            var activationState = form.GetAttributeValue<OptionSetValue>("formactivationstate")?.Value ?? 0;
            var isManaged = form.GetAttributeValue<bool>("ismanaged");
            var version = form.GetAttributeValue<int>("version");
            var description = form.GetAttributeValue<string>("description");
            var formXml = form.GetAttributeValue<string>("formxml") ?? "";

            var scope = entityName == null ? "system dashboard" : $"'{objectTypeCode}' — {MapFormType(type)} form";
            var text = $"'{name}' ({formId}) on {scope}, " +
                $"{(activationState == 1 ? "active" : "inactive")}" +
                (isDefault ? ", default" : "") +
                (isManaged ? ", managed" : "") +
                $", version {version}. formxml in structuredContent.";

            return Success(text, new UpsertFormResult
            {
                Action = "detail",
                Entity = entityName == null ? null : objectTypeCode,
                FormId = formId.ToString(),
                FormName = name,
                Status = "success",
                FormType = type,
                FormTypeName = MapFormType(type),
                IsDefault = isDefault,
                IsActive = activationState == 1,
                IsManaged = isManaged,
                Version = version,
                Description = description,
                FormXml = !string.IsNullOrEmpty(formXml) ? PrettyPrintXml(formXml) : null
            });
        }

        private CallToolResult HandleNavigationList(string entityName, string formId, EntityMetadata[] entityCatalog)
        {
            if (string.IsNullOrWhiteSpace(formId))
                return Error("form_id is required when action='navigation_list'.",
                    $"Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs.");

            if (!Guid.TryParse(formId.Trim(), out var id))
                return Error($"'{formId}' is not a valid GUID.");

            var form = RetrieveForm(id);
            if (form == null)
                return Error($"Form '{id}' not found.");

            var objectTypeCode = form.GetAttributeValue<string>("objecttypecode");
            if (IsSystemDashboard(form) || !string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return Error($"Form '{id}' belongs to '{objectTypeCode}', not '{entityName}'.");

            var formXml = form.GetAttributeValue<string>("formxml");
            if (string.IsNullOrWhiteSpace(formXml))
                return Error($"Form '{id}' has empty FormXML.");

            var document = XDocument.Parse(formXml);
            var navigation = new FormNavigation(_orgService, entityName, entityCatalog).List(document);
            var formName = form.GetAttributeValue<string>("name") ?? "";
            return Success($"Found {navigation.Count} Related navigation item(s) for form '{formName}' ({id}).", new UpsertFormResult
            {
                Action = "navigation_list", Entity = entityName, FormId = id.ToString(), FormName = formName,
                Status = "success", Navigation = navigation, TotalCount = navigation.Count
            });
        }

        // ── Action: create ────────────────────────────────────────────────

        private CallToolResult HandleCreate(EntityMetadata entity, string formId, string formName, int formType,
            string formxml, string operations, string solution)
        {
            var dashboard = entity == null;
            if (!dashboard && formType != QuickCreateFormType)
                return Error("action='create' requires form_type=7 (QuickCreate) for entity forms. For a system dashboard, use form_type=0 and omit entity_name.");
            var kind = dashboard ? "Dashboard" : "Quick Create form";
            var entityName = entity?.LogicalName;
            var scope = dashboard ? "" : $" on '{entityName}'";
            if (string.IsNullOrWhiteSpace(formName) || formName.Trim().Length > 100)
                return Error("form_name must contain 1 to 100 characters when action='create'.");
            if (!string.IsNullOrWhiteSpace(formId) || !string.IsNullOrWhiteSpace(operations))
                return Error("action='create' does not accept form_id or operations.",
                    $"Pass form_name, form_type={formType}, and formxml. Dataverse assigns the new form ID.");
            if (string.IsNullOrWhiteSpace(formxml))
                return Error("formxml is required when action='create'.",
                    $"Pass FormXML for the {kind} inline or as a file path.");
            if (entity?.CanCreateForms?.Value == false)
                return Error($"Dataverse does not allow new forms on '{entityName}'.");

            formName = formName.Trim();
            var result = new UpsertFormResult
            {
                Action = "create", Entity = entityName, FormName = formName,
                FormType = formType, FormTypeName = MapFormType(formType), SolutionName = solution
            };

            var duplicate = FindFormByName(entityName, formName, formType);
            if (duplicate != null)
            {
                result.FormId = duplicate.Id.ToString();
                result.Status = "already_exists";
                return Error($"A {kind} named '{formName}' already exists{scope} ({result.FormId}).",
                    "Use the existing form ID for detail or update. If only publishing failed, use publish_customizations.", result);
            }

            var resolvedXml = ResolveFormXmlInput(formxml.Trim(), deleteTempFileAfterRead: false);
            if (resolvedXml == null)
                return Error($"FormXML file not found at '{formxml.Trim()}'.", "Pass inline FormXML or an existing file path.");

            var newFormXml = StripXmlDeclaration(resolvedXml);
            var (errors, warnings) = ValidateFormXml(newFormXml, requireFormRoot: true, dashboard: dashboard);
            result.Validated = true;
            result.ValidationWarnings = warnings.Count > 0 ? warnings : null;
            if (errors.Count > 0)
            {
                result.Status = "blocked_validation";
                result.ValidationErrors = errors;
                return Error($"FormXML validation failed for new form '{formName}' — {errors.Count} error(s). First: {errors[0]}",
                    "Fix the FormXML errors and retry. Read schema://formxml and docs://instructions_for_formxml.", result);
            }

            if (_options.DryRun)
            {
                result.Status = "not_executed";
                return DryRun($"Would CREATE {kind} '{formName}'{scope}.", result);
            }

            var form = new Entity("systemform")
            {
                ["name"] = formName,
                ["type"] = new OptionSetValue(formType),
                ["formactivationstate"] = new OptionSetValue(1),
                ["formxml"] = newFormXml
            };
            if (!dashboard)
                form["objecttypecode"] = entityName;
            var id = DataverseMutationExecutor.Create(_context, _orgService, form);
            result.Action = "created";
            result.FormId = id.ToString();
            result.IsActive = true;
            AddFormToSolution(id, solution, result);
            result.Published = PublishForm(entityName, id);
            result.Status = result.Published ? "created" : "created_publish_failed";

            var summary = result.Published
                ? $"Created and published {kind} '{formName}' ({id}){scope}."
                : $"Created {kind} '{formName}' ({id}){scope} but publish failed. Retry with publish_customizations.";
            return ReportFormMutation(summary, result);
        }

        // ── Action: update ────────────────────────────────────────────────

        private CallToolResult HandleUpdate(string entityName, string formId,
            string formxml, string operations, string solution, EntityMetadata[] entityCatalog)
        {
            if (string.IsNullOrWhiteSpace(formId))
                return Error("form_id is required when action='update'.",
                    $"Pass the target form GUID. Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs.");

            if (!Guid.TryParse(formId.Trim(), out var id))
                return Error($"'{formId}' is not a valid GUID.",
                    $"Pass a form GUID (e.g. from manage_form(action='list', entity_name='{entityName}')).");

            var hasOperations = !string.IsNullOrWhiteSpace(operations);
            var hasFormxml    = !string.IsNullOrWhiteSpace(formxml);

            if (entityName == null && (!hasFormxml || hasOperations))
                return Error("System dashboard update requires formxml.", "Pass the full dashboard FormXML inline or as a file path.");

            if (!hasOperations && !hasFormxml)
                return Error(
                    "Provide 'operations' (recommended) or 'formxml' for action='update'.",
                    "- operations: JSON array of form operations (auto-builds + imports)\n- formxml: raw FormXML string or file path from a previous export. Read docs://instructions_for_formxml.");

            if (hasOperations && hasFormxml)
                return Error(
                    "Provide either 'operations' or 'formxml', not both.",
                    "Use 'operations' for the recommended inline build+import flow; 'formxml' for advanced/undo scenarios only.");

            if (hasOperations)
                return HandleUpdateWithOperations(entityName, id, operations, solution, entityCatalog);

            return HandleUpdateWithFormXml(entityName, id, formxml, solution);
        }

        private CallToolResult HandleUpdateWithOperations(string entityName, Guid id,
            string operations, string solution, EntityMetadata[] entityCatalog)
        {
            // 1. Parse operations JSON (JsonException bubbles to entry catch)
            var ops = JsonSerializer.Deserialize<List<JsonElement>>(operations);
            if (ops == null || ops.Count == 0)
                return Error("operations must be a non-empty JSON array.", "Read docs://instructions_for_formxml for format and examples.");

            // 2. Retrieve current form
            var currentForm = RetrieveForm(id);
            if (currentForm == null)
                return Error(
                    $"Form '{id}' not found.",
                    $"Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs.");

            var currentFormXml = currentForm.GetAttributeValue<string>("formxml") ?? "";
            var formName       = currentForm.GetAttributeValue<string>("name") ?? "";
            var objectTypeCode = currentForm.GetAttributeValue<string>("objecttypecode") ?? entityName;

            if (IsSystemDashboard(currentForm) || !string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return Error(
                    $"Form '{id}' belongs to '{objectTypeCode}', not '{entityName}'.",
                    $"Use action='list' entity_name='{entityName}' to find forms for that entity.");

            if (string.IsNullOrWhiteSpace(currentFormXml))
                return Error($"Form '{id}' has empty FormXML.",
                    "The form record has no FormXML to modify. Restore it from a backup with action='undo', or edit the form in the maker portal.");

            // 3. Apply operations via runner (exceptions bubble to entry catch)
            var runner = new FormXmlOperationsRunner(_orgService, entityCatalog);
            var (modifiedFormXml, opSummaries, classIdMap) = runner.Run(currentFormXml, entityName, ops);

            // 5. Validate XSD (always — no bypass)
            var (errors, warnings) = ValidateFormXml(modifiedFormXml);
            List<string> validationWarnings = warnings.Count > 0 ? warnings : null;
            if (errors.Count > 0)
            {
                var allIssues = new List<string>(errors);
                if (warnings.Count > 0) allIssues.AddRange(warnings);
                return Error(
                    $"FormXML validation failed for form '{formName}' ({id}) — {errors.Count} error(s). First: {errors[0]}",
                    "Fix the FormXML errors and retry. Read schema://formxml and docs://instructions_for_formxml.",
                    new UpsertFormResult
                    {
                        Action = "update",
                        Entity = entityName,
                        FormId = id.ToString(),
                        FormName = formName,
                        Status = "blocked_validation",
                        Validated = true,
                        ValidationErrors = allIssues,
                        ValidationWarnings = validationWarnings,
                        Published = false,
                        OperationsCount = ops?.Count
                    });
            }

            // 6. Update + Publish
            var updateEntity = new Entity("systemform", id);
            updateEntity["formxml"] = modifiedFormXml;
            if (_options.DryRun)
                return DryRun($"Would UPDATE FormXML (operations) for form '{formName}' ({id}) on entity '{entityName}'.", new UpsertFormResult
                {
                    Action = "update",
                    Entity = entityName,
                    FormId = id.ToString(),
                    FormName = formName,
                    Status = "not_executed",
                    Validated = true,
                    ValidationWarnings = validationWarnings,
                    Published = false,
                    OperationsCount = ops?.Count,
                    SolutionName = solution
                });

            // Backup (fail-safe: exception bubbles to entry catch) — only when actually mutating
            var backupPath = SaveBackup(entityName, id, formName, currentFormXml);
            DataverseMutationExecutor.Update(_context, _orgService, updateEntity);

            var result = new UpsertFormResult
            {
                Action = "updated", Entity = entityName, FormId = id.ToString(),
                FormName = formName,
                Validated = true, ValidationWarnings = validationWarnings,
                BackupPath = backupPath, SolutionName = solution,
                OperationsCount = ops.Count, FieldsResolved = classIdMap.Count
            };
            AddFormToSolution(id, solution, result);
            result.Published = PublishHelper.PublishEntity(_context, _orgService, objectTypeCode);
            result.Status = result.Published ? "updated" : "updated_publish_failed";
            var summary = result.Published
                ? $"Updated form '{formName}' ({id}) on '{entityName}' — {ops.Count} operation(s), validated, published. Backup saved." +
                    (classIdMap.Count > 0 ? $" {classIdMap.Count} field(s) resolved." : "") +
                    (validationWarnings?.Count > 0 ? $" {validationWarnings.Count} validation warning(s) (see validationWarnings)." : "")
                : $"Updated form '{formName}' ({id}) on '{entityName}' but publish failed — Dataverse rejected the publish.";
            return ReportFormMutation(summary, result);
        }

        private CallToolResult HandleUpdateWithFormXml(string entityName, Guid id,
            string formxml, string solution)
        {
            var dashboard = entityName == null;
            // Resolve formxml: if it's a file path, read content from file.
            // In dry-run never delete the source file — zero disk side effects.
            var resolvedFormXml = ResolveFormXmlInput(formxml.Trim(), deleteTempFileAfterRead: !dashboard && !_options.DryRun);
            if (resolvedFormXml == null)
                return Error(
                    $"FormXML file not found at '{formxml.Trim()}'.",
                    "The file path may have been deleted. Re-run the export or use 'operations' for inline build+import.");

            // Step 1: Retrieve current form
            var currentForm = RetrieveForm(id, dashboard);
            if (currentForm == null)
                return Error(
                    $"Form '{id}' not found.",
                    $"Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs.");

            var currentFormXml = currentForm.GetAttributeValue<string>("formxml") ?? "";
            var formName = currentForm.GetAttributeValue<string>("name") ?? "";
            var objectTypeCode = currentForm.GetAttributeValue<string>("objecttypecode") ?? entityName;

            if (dashboard && !IsSystemDashboard(currentForm))
                return Error($"Form '{id}' is not a system dashboard.", "Provide entity_name to update an entity form.");
            if (!dashboard && IsSystemDashboard(currentForm))
                return Error($"Form '{id}' is a system dashboard. Omit entity_name to update it.");

            // Validate entity name matches the form's actual entity
            if (!dashboard && !string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return Error(
                    $"Form '{id}' belongs to '{objectTypeCode}', not '{entityName}'.",
                    $"Use action='list' entity_name='{entityName}' to find forms for that entity.");

            // Strip XML declaration from input
            var newFormXml = StripXmlDeclaration(resolvedFormXml);

            // Step 3: Validate new FormXML against XSD (always — no bypass)
            var (errors, warnings) = ValidateFormXml(newFormXml, requireFormRoot: dashboard, dashboard: dashboard);
            List<string> validationWarnings = warnings.Count > 0 ? warnings : null;

            if (errors.Count > 0)
            {
                var allIssues = new List<string>(errors);
                if (warnings.Count > 0) allIssues.AddRange(warnings);
                return Error(
                    $"FormXML validation failed for form '{formName}' ({id}) — {errors.Count} error(s). First: {errors[0]}",
                    "Fix the FormXML errors and retry. Read schema://formxml and docs://instructions_for_formxml.",
                    new UpsertFormResult
                    {
                        Action = "update",
                        Entity = entityName,
                        FormId = id.ToString(),
                        FormName = formName,
                        Status = "blocked_validation",
                        Validated = true,
                        ValidationErrors = allIssues,
                        ValidationWarnings = validationWarnings,
                        Published = false
                    });
            }

            // Step 4: Update form record in Dataverse
            var update = new Entity("systemform", id);
            update["formxml"] = newFormXml;
            var result = new UpsertFormResult
            {
                Action = "update",
                Entity = entityName,
                FormId = id.ToString(),
                FormName = formName,
                Status = "not_executed",
                Validated = true,
                FormType = dashboard ? DashboardFormType : null,
                FormTypeName = dashboard ? "Dashboard" : null,
                SolutionName = solution
            };
            var target = dashboard ? $"dashboard '{formName}' ({id})" : $"form '{formName}' ({id}) on '{entityName}'";
            if (_options.DryRun)
                return DryRun(dashboard ? $"Would UPDATE FormXML for {target}." :
                    $"Would UPDATE FormXML for form '{formName}' ({id}) on entity '{entityName}'.", result);

            // Backup (fail-safe: exception bubbles to entry catch) — only when actually mutating
            result.BackupPath = SaveBackup(entityName, id, formName, currentFormXml);
            DataverseMutationExecutor.Update(_context, _orgService, update);

            AddFormToSolution(id, solution, result);
            result.Published = PublishForm(dashboard ? null : objectTypeCode, id);
            result.Action = "updated";
            result.Status = result.Published ? "updated" : "updated_publish_failed";
            result.ValidationWarnings = validationWarnings;
            var summary = result.Published
                ? $"Updated {target} — raw FormXML import, validated, published. Backup saved." +
                (validationWarnings?.Count > 0 ? $" {validationWarnings.Count} validation warning(s) (see validationWarnings)." : "")
                : $"Updated {target} but publish failed — Dataverse rejected the publish.";
            return ReportFormMutation(summary, result);
        }

        // ── Action: rename ────────────────────────────────────────────────

        private CallToolResult HandleRename(string entityName, string formId, string formName, string solution)
        {
            if (string.IsNullOrWhiteSpace(formId))
                return Error("form_id is required when action='rename'.",
                    $"Pass the target form GUID. Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs.");

            if (!Guid.TryParse(formId.Trim(), out var id))
                return Error($"'{formId}' is not a valid GUID.",
                    $"Pass a form GUID (e.g. from manage_form(action='list', entity_name='{entityName}')).");

            if (string.IsNullOrWhiteSpace(formName))
                return Error("form_name is required when action='rename'.",
                    "Pass the new form name in form_name.");

            formName = formName.Trim();

            // Step 1: Retrieve current form
            var currentForm = RetrieveForm(id);
            if (currentForm == null)
                return Error(
                    $"Form '{id}' not found.",
                    $"Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs.");

            var oldName = currentForm.GetAttributeValue<string>("name") ?? "";
            var objectTypeCode = currentForm.GetAttributeValue<string>("objecttypecode") ?? entityName;
            var formType = currentForm.GetAttributeValue<OptionSetValue>("type")?.Value;

            // Validate entity name matches the form's actual entity
            if (IsSystemDashboard(currentForm) || !string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return Error(
                    $"Form '{id}' belongs to '{objectTypeCode}', not '{entityName}'.",
                    $"Use action='list' entity_name='{entityName}' to find forms for that entity.");

            // Step 2: Check for duplicate name (same entity + same form type, excluding current form)
            var duplicate = FindFormByName(objectTypeCode, formName, formType, excludeFormId: id);
            if (duplicate != null)
            {
                var dupId = duplicate.GetAttributeValue<Guid>("formid");
                return Error(
                    $"A form named '{formName}' already exists on '{entityName}' (FormId {dupId}).",
                    "Choose a different name.");
            }

            // Step 3: Rename
            var update = new Entity("systemform", id)
            {
                ["name"] = formName
            };
            if (_options.DryRun)
                return DryRun($"Would RENAME form '{oldName}' to '{formName}' ({id}) on entity '{entityName}'.", new UpsertFormResult
                {
                    Action = "rename",
                    Entity = entityName,
                    FormId = id.ToString(),
                    FormName = formName,
                    Status = "not_executed",
                    SolutionName = solution,
                    Published = false
                });

            // Backup (fail-safe: exception bubbles to entry catch) — only when actually mutating
            var currentFormXml = currentForm.GetAttributeValue<string>("formxml") ?? "";
            var backupPath = SaveBackup(entityName, id, oldName, currentFormXml);
            DataverseMutationExecutor.Update(_context, _orgService, update);

            var result = new UpsertFormResult
            {
                Action = "renamed",
                Entity = entityName,
                FormId = id.ToString(),
                FormName = formName,
                Validated = false,
                BackupPath = backupPath,
                SolutionName = solution
            };
            AddFormToSolution(id, solution, result);
            result.Published = PublishHelper.PublishEntity(_context, _orgService, objectTypeCode);
            result.Status = result.Published ? "renamed" : "renamed_publish_failed";
            var summary = result.Published
                ? $"Renamed form '{oldName}' → '{formName}' ({id}) on '{entityName}', published. Backup saved."
                : $"Renamed form '{oldName}' → '{formName}' ({id}) on '{entityName}' but publish failed — Dataverse rejected the publish.";
            return ReportFormMutation(summary, result);
        }

        // ── Action: undo ──────────────────────────────────────────────────

        private CallToolResult HandleUndo(string entityName, string formId,
            string backupFilePath, string solution)
        {
            var dashboard = entityName == null;
            if (string.IsNullOrWhiteSpace(formId))
                return Error("form_id is required when action='undo'.",
                    $"Pass the target form GUID. Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs.");

            if (!Guid.TryParse(formId.Trim(), out var id))
                return Error($"'{formId}' is not a valid GUID.",
                    $"Pass a form GUID (e.g. from manage_form(action='list', entity_name='{entityName}')).");

            if (string.IsNullOrWhiteSpace(backupFilePath))
                return Error("formxml (backup file path) is required when action='undo'.",
                    "Pass the backupPath returned by a previous update/rename as formxml. Backup files live at .devkit/manage_form/{entity}/.");

            backupFilePath = backupFilePath.Trim();

            // Step 1: Read backup file (JSON parse errors bubble to entry catch)
            if (!File.Exists(backupFilePath))
                return Error(
                    $"Backup file not found at '{backupFilePath}'.",
                    "Backup files are saved at .devkit/manage_form/{entity}/.");

            var json = File.ReadAllText(backupFilePath, Encoding.UTF8);
            var backupData = JsonSerializer.Deserialize<FormBackup>(json);
            if (backupData == null || string.IsNullOrWhiteSpace(backupData.FormXml))
                return Error(
                    $"Backup file '{backupFilePath}' is empty or invalid.",
                    "The backup file must be a JSON file with a 'formxml' field.");

            var restoredFormXml = StripXmlDeclaration(backupData.FormXml.Trim());

            // Step 2: Verify the form exists
            var currentForm = RetrieveForm(id, dashboard);
            if (currentForm == null)
                return Error(
                    $"Form '{id}' not found.",
                    $"Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs.");

            var formName = currentForm.GetAttributeValue<string>("name") ?? "";
            var objectTypeCode = currentForm.GetAttributeValue<string>("objecttypecode") ?? entityName;

            if (dashboard != IsSystemDashboard(currentForm))
                return Error($"Form '{id}' does not match the requested form type.", "Omit entity_name for a system dashboard.");
            if (!dashboard && !string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
                return Error(
                    $"Form '{id}' belongs to '{objectTypeCode}', not '{entityName}'.",
                    $"Use action='list' entity_name='{entityName}' to find forms for that entity.");

            // Step 3: Validate restored FormXML against XSD (always — no backup, but still validate!)
            var (errors, warnings) = ValidateFormXml(restoredFormXml, requireFormRoot: dashboard, dashboard: dashboard);
            List<string> validationWarnings = warnings.Count > 0 ? warnings : null;

            if (errors.Count > 0)
            {
                var allIssues = new List<string>(errors);
                if (warnings.Count > 0) allIssues.AddRange(warnings);
                return Error(
                    $"Backup file failed FormXML validation for form '{formName}' ({id}) — {errors.Count} error(s). First: {errors[0]}",
                    "The backup file may be corrupted. Re-run update/rename to create a fresh backup, or fix the FormXML in the file. Read schema://formxml for valid structure.",
                        new UpsertFormResult
                        {
                            Action = "undo",
                            Entity = entityName,
                            FormId = id.ToString(),
                            FormName = formName,
                            Status = "blocked_validation",
                            Validated = true,
                            ValidationErrors = allIssues,
                            ValidationWarnings = validationWarnings,
                            RestoredFromBackup = backupFilePath,
                            Published = false
                        });
            }

            // Step 4: Update form with restored FormXML (NO backup — we're restoring!)
            var update = new Entity("systemform", id);
            update["formxml"] = restoredFormXml;
            if (_options.DryRun)
                return DryRun(dashboard ? $"Would RESTORE dashboard '{formName}' ({id}) from backup." :
                    $"Would RESTORE form '{formName}' ({id}) from backup on entity '{entityName}'.", new UpsertFormResult
                {
                    Action = "undo",
                    Entity = entityName,
                    FormId = id.ToString(),
                    FormName = formName,
                    Status = "not_executed",
                    Validated = true,
                    RestoredFromBackup = backupFilePath,
                    SolutionName = solution,
                    Published = false
                });
            DataverseMutationExecutor.Update(_context, _orgService, update);

            var target = dashboard ? $"dashboard '{formName}' ({id})" : $"form '{formName}' ({id}) on '{entityName}'";
            var result = new UpsertFormResult
            {
                Action = "undo",
                Entity = entityName,
                FormId = id.ToString(),
                FormName = formName,
                Validated = true,
                ValidationWarnings = validationWarnings,
                RestoredFromBackup = backupFilePath,
                SolutionName = solution
            };
            AddFormToSolution(id, solution, result);
            result.Published = PublishForm(dashboard ? null : objectTypeCode, id);
            result.Status = result.Published ? "restored" : "restored_publish_failed";
            var summary = result.Published
                ? $"Restored {target} from '{backupFilePath}', validated, published" +
                    (validationWarnings?.Count > 0 ? $" {validationWarnings.Count} validation warning(s) (see validationWarnings)." : "")
                : $"Restored {target} from '{backupFilePath}' but publish failed — Dataverse rejected the publish.";
            return ReportFormMutation(summary, result);
        }

        // ── List/Detail Helpers ───────────────────────────────────────────

        private static readonly int[] ValidFormTypes = { 0, 2, 4, 5, 6, 7, 8, 11, 12 };

        private static QueryExpression BuildListQuery(string entityName, int formType, bool includeFormXml)
        {
            var columns = new ColumnSet(
                "formid", "name", "type", "formactivationstate",
                "isdefault", "description", "ismanaged", "version");

            if (includeFormXml)
                columns.AddColumn("formxml");

            var query = new QueryExpression("systemform")
            {
                ColumnSet = columns
            };

            if (entityName == null)
            {
                query.Criteria.AddCondition("type", ConditionOperator.Equal, DashboardFormType);
                var scope = query.Criteria.AddFilter(LogicalOperator.Or);
                scope.AddCondition("objecttypecode", ConditionOperator.Equal, "none");
                scope.AddCondition("objecttypecode", ConditionOperator.Null);
            }
            else
            {
                query.Criteria.AddCondition("objecttypecode", ConditionOperator.Equal, entityName);
                query.Criteria.AddCondition("formactivationstate", ConditionOperator.Equal, 1);
                if (formType != 0)
                    query.Criteria.AddCondition("type", ConditionOperator.Equal, formType);
            }

            query.AddOrder("type", OrderType.Ascending);
            query.AddOrder("name", OrderType.Ascending);

            return query;
        }

        private static void AddNameContainsFilter(QueryExpression query, string name)
        {
            var escapedName = name.Replace("[", "[[]").Replace("%", "[%]").Replace("_", "[_]");
            query.Criteria.AddCondition("name", ConditionOperator.Like, $"%{escapedName}%");
        }

        private static string MapFormType(int type) => type switch
        {
            0 => "Dashboard",
            2 => "Main",
            4 => "Preview",
            5 => "Mobile",
            6 => "QuickView",
            7 => "QuickCreate",
            8 => "Dialog",
            11 => "Card",
            12 => "MainInteractive",
            _ => $"Other({type})"
        };

        private static string PrettyPrintXml(string xml)
        {
            var doc = XDocument.Parse(xml);
            var settings = new XmlWriterSettings
            {
                Indent = true,
                IndentChars = "  ",
                OmitXmlDeclaration = true
            };
            var sb = new StringBuilder(xml.Length + 256);
            using (var writer = XmlWriter.Create(sb, settings))
            {
                doc.WriteTo(writer);
            }
            return sb.ToString();
        }

        // ── Shared Helpers (write actions) ────────────────────────────────

        private static bool IsSystemDashboard(Entity form) =>
            form.GetAttributeValue<OptionSetValue>("type")?.Value == DashboardFormType;

        private bool PublishForm(string entityName, Guid id) => entityName == null
            ? PublishHelper.PublishDashboard(_context, _orgService, id)
            : PublishHelper.PublishEntity(_context, _orgService, entityName);

        private void AddFormToSolution(Guid id, string solution, UpsertFormResult result)
        {
            if (solution == null) return;
            var association = SolutionComponentCreateHelper.AddExistingComponent(
                _context, _orgService, id, SystemFormComponentType, solution);
            result.IsAddToSolution = association.IsAddToSolution;
            result.SolutionWarning = association.AddToSolutionWarning;
        }

        private CallToolResult ReportFormMutation(string summary, UpsertFormResult result)
        {
            if (result.SolutionWarning != null)
            {
                if (result.Published)
                    result.Status += "_solution_failed";
                var kind = result.Entity == null ? "dashboard" : "form";
                return Partial($"{summary} Could not add the {kind} to solution '{result.SolutionName}'. {result.SolutionWarning}", result);
            }
            return result.Published ? Success(summary, result) : Partial(summary, result);
        }

        private Entity RetrieveForm(Guid formId, bool dashboard = false)
        {
            // RetrieveMultiple never throws on a missing row (Retrieve does) — returns empty set.
            var query = new QueryExpression("systemform")
            {
                ColumnSet = new ColumnSet("formxml", "name", "objecttypecode", "type"),
                TopCount = 1
            };
            query.Criteria.AddCondition("formid", ConditionOperator.Equal, formId);
            var result = dashboard ? RetrieveDashboardForms(query) : _orgService.RetrieveMultiple(query);
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        private EntityCollection RetrieveDashboardForms(QueryExpression query)
        {
            try
            {
                var response = (RetrieveUnpublishedMultipleResponse)_orgService.Execute(
                    new RetrieveUnpublishedMultipleRequest { Query = query });
                if (response.EntityCollection?.Entities.Count > 0)
                    return response.EntityCollection;
            }
            catch (Exception) { /* Some environments expose only the published records. */ }
            return _orgService.RetrieveMultiple(query);
        }

        /// <summary>
        /// Resolves the formxml input: detects whether the input is a file path or inline XML,
        /// reads the file if needed, and returns the raw FormXML string.
        /// Supported file types:
        ///   .formxml.json / .json — backup envelope written by SaveBackup; extracts the "formxml" field.
        ///   .formxml / .xml       — raw FormXML file; returned as-is (temp .formxml files are deleted after read).
        /// Returns null if the path was detected but the file does not exist.
        /// </summary>
        private static string ResolveFormXmlInput(string formxml, bool deleteTempFileAfterRead = true)
        {
            // Inline XML always starts with '<' — return immediately without any file I/O.
            if (formxml.TrimStart().StartsWith("<"))
                return formxml;

            // Detect whether the value looks like a file path.
            // A path contains a separator character (\, /) or a drive-letter colon (:),
            // or ends with one of the known FormXML file extensions.
            var looksLikePath =
                formxml.Contains('\\') ||
                formxml.Contains('/') ||
                formxml.Contains(':') ||
                formxml.EndsWith(".formxml",      StringComparison.OrdinalIgnoreCase) ||
                formxml.EndsWith(".formxml.json", StringComparison.OrdinalIgnoreCase) ||
                formxml.EndsWith(".xml",          StringComparison.OrdinalIgnoreCase) ||
                formxml.EndsWith(".json",         StringComparison.OrdinalIgnoreCase);

            if (!looksLikePath)
                return formxml; // Treat as raw XML; the XML parser will surface a clear error if invalid.

            // Path detected — verify the file exists before reading.
            if (!File.Exists(formxml))
                return null; // Signals "file not found" to the caller.

            // ── .formxml.json / .json — backup envelope ──────────────────
            // Backup files written by SaveBackup are JSON objects with a "formxml" field.
            // Try to parse as the envelope first; fall through to raw read on failure.
            if (formxml.EndsWith(".formxml.json", StringComparison.OrdinalIgnoreCase) ||
                formxml.EndsWith(".json",         StringComparison.OrdinalIgnoreCase))
            {
                try
                {
                    var jsonText = File.ReadAllText(formxml, Encoding.UTF8);
                    var backupData = JsonSerializer.Deserialize<FormBackup>(jsonText);
                    if (backupData != null && !string.IsNullOrWhiteSpace(backupData.FormXml))
                        return backupData.FormXml.Trim();
                    // If FormXml field is missing/empty, fall through to raw read below.
                }
                catch (JsonException)
                {
                    // Not a valid backup JSON — fall through and try reading as raw XML.
                }
                // Backup files are intentionally kept; do not delete them.
                return File.ReadAllText(formxml, Encoding.UTF8).Trim();
            }

            // ── .formxml / .xml — raw FormXML file ───────────────────────
            var content = File.ReadAllText(formxml, Encoding.UTF8).Trim();

            // Delete only bare .formxml temp files (generated by build_form_xml).
            // Do NOT delete .xml or any other extension — those are user files.
            // Skipped in dry-run: the path is caller-controlled and a dry-run session
            // must leave zero disk side effects.
            if (deleteTempFileAfterRead && formxml.EndsWith(".formxml", StringComparison.OrdinalIgnoreCase))
                try { File.Delete(formxml); } catch { /* best effort cleanup */ }

            return content;
        }

        private Entity FindFormByName(string entityName, string formName, int? formType, Guid? excludeFormId = null)
        {
            var query = new QueryExpression("systemform")
            {
                ColumnSet = new ColumnSet("formid", "name"),
                TopCount = 1
            };
            if (entityName != null)
                query.Criteria.AddCondition("objecttypecode", ConditionOperator.Equal, entityName);
            query.Criteria.AddCondition("name", ConditionOperator.Equal, formName);

            if (formType.HasValue)
                query.Criteria.AddCondition("type", ConditionOperator.Equal, formType.Value);

            if (excludeFormId.HasValue)
                query.Criteria.AddCondition("formid", ConditionOperator.NotEqual, excludeFormId.Value);

            var result = entityName == null ? RetrieveDashboardForms(query) : _orgService.RetrieveMultiple(query);
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        private string SaveBackup(string entityName, Guid formId, string formName, string currentFormXml)
        {
            var backupDir = Path.Combine(_workspaceFolder, ".devkit", "manage_form", entityName ?? "dashboard");
            Directory.CreateDirectory(backupDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var backupFile = $"{formId:N}_{timestamp}.formxml.json";
            var backupPath = Path.Combine(backupDir, backupFile);

            var prettyXml = PrettyPrintXml(currentFormXml);
            var singleLineXml = prettyXml
                .Replace("\r\n", "").Replace("\n", "").Replace("\r", "");
            singleLineXml = System.Text.RegularExpressions.Regex.Replace(singleLineXml, @">\s+<", "><");

            var backupData = new FormBackup
            {
                Entity = entityName,
                FormId = formId.ToString(),
                FormName = formName,
                Timestamp = DateTime.Now.ToString("yyyy-MM-ddTHH:mm:ss"),
                FormXml = singleLineXml
            };

            var json = JsonSerializer.Serialize(backupData, new JsonSerializerOptions
            {
                WriteIndented = true,
                Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping
            });

            File.WriteAllText(backupPath, json, Encoding.UTF8);

            return backupPath;
        }

        private static (List<string> Errors, List<string> Warnings) ValidateFormXml(string formXml, bool requireFormRoot = false, bool dashboard = false)
        {
            var errors = new List<string>();
            var warnings = new List<string>();

            try
            {
                var schemaSet = GetSchemaSet();
                if (schemaSet == null || schemaSet.Count == 0)
                {
                    if (requireFormRoot) errors.Add("Error: The FormXML schema is unavailable.");
                    return (errors, warnings);
                }

                var settings = new XmlReaderSettings
                {
                    ValidationType = ValidationType.Schema,
                    Schemas = schemaSet
                };

                settings.ValidationEventHandler += (sender, e) =>
                {
                    var location = "";
                    if (e.Exception?.LineNumber > 0)
                        location = $"Line {e.Exception.LineNumber}, Col {e.Exception.LinePosition}: ";

                    var message = e.Message;

                    if (IsSchemaEvolutionError(message))
                    {
                        warnings.Add($"Warning: {location}{message}");
                    }
                    else if (e.Severity == XmlSeverityType.Warning)
                    {
                        warnings.Add($"Warning: {location}{message}");
                    }
                    else
                    {
                        errors.Add($"Error: {location}{message}");
                    }
                };

                using var stringReader = new StringReader(formXml);
                using var xmlReader = XmlReader.Create(stringReader, settings);
                if (requireFormRoot && (xmlReader.MoveToContent() != XmlNodeType.Element || xmlReader.Name != "form" || xmlReader.NamespaceURI.Length != 0))
                {
                    errors.Add($"Error: FormXML for a {(dashboard ? "dashboard" : "Quick Create form")} must have a <form> root element.");
                    return (errors, warnings);
                }
                while (xmlReader.Read()) { }
            }
            catch (XmlException xmlEx)
            {
                errors.Add($"Error: XML Parsing Error at Line {xmlEx.LineNumber}, Col {xmlEx.LinePosition}: {xmlEx.Message}");
            }
            catch (Exception ex)
            {
                errors.Add($"Error: Validation failed: {ex.Message}");
            }

            return (errors, warnings);
        }

        private static bool IsSchemaEvolutionError(string message)
        {
            return message.Contains("attribute is not declared") ||
                   message.Contains("is not declared");
        }

        private static XmlSchemaSet GetSchemaSet()
        {
            if (_cachedSchemaSet != null) return _cachedSchemaSet;

            lock (_schemaLock)
            {
                if (_cachedSchemaSet != null) return _cachedSchemaSet;

                var assembly = Assembly.GetExecutingAssembly();
                var resourceNames = assembly.GetManifestResourceNames();

                string[] schemaFiles = ["FormXml.xsd", "RibbonCore.xsd", "RibbonTypes.xsd", "RibbonWSS.xsd"];

                var schemas = new XmlSchemaSet();

                foreach (var schemaFile in schemaFiles)
                {
                    var resourceName = resourceNames.FirstOrDefault(n => n.EndsWith(schemaFile));
                    if (resourceName == null) continue;

                    using var stream = assembly.GetManifestResourceStream(resourceName);
                    if (stream == null) continue;

                    var schema = XmlSchema.Read(stream, null);
                    if (schema != null)
                        schemas.Add(schema);
                }

                if (schemas.Count > 0)
                {
                    schemas.Compile();
                    _cachedSchemaSet = schemas;
                }

                return _cachedSchemaSet;
            }
        }

        private static string StripXmlDeclaration(string xml)
        {
            if (xml.StartsWith("<?xml", StringComparison.OrdinalIgnoreCase))
            {
                var endIndex = xml.IndexOf("?>", StringComparison.Ordinal);
                if (endIndex >= 0)
                    return xml.Substring(endIndex + 2).TrimStart();
            }
            return xml;
        }

        // ── Backup model ──────────────────────────────────────────────────

        private sealed class FormBackup
        {
            [JsonPropertyName("entity")]
            public string Entity { get; set; }

            [JsonPropertyName("formId")]
            public string FormId { get; set; }

            [JsonPropertyName("formName")]
            public string FormName { get; set; }

            [JsonPropertyName("timestamp")]
            public string Timestamp { get; set; }

            [JsonPropertyName("formxml")]
            public string FormXml { get; set; }
        }
    }
}

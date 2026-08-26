using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ExecuteWebApiTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        public ExecuteWebApiTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "execute_webapi", Title = "Execute a raw Web API request",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(WebApiResult)),
        Description(
            "Raw Dataverse Web API call. url is relative; SDK adds base URL. PUT/PATCH/DELETE destructive — confirm.\n\n" +

            "WHEN TO USE:\n" +
            "- Endpoints not covered by a specialized tool (WhoAmI, $metadata, custom actions, one-off data CRUD)\n" +
            "- Metadata/system endpoints (forms, views, sitemap, schema, choice, webresource, roles, publish, env vars, deleted records, command bar) are BLOCKED/REDIRECTED at runtime to the dedicated tool named in the error\n\n" +

            "RELATED TOOLS:\n" +
            "- get_tables / manage_table / manage_column / manage_relationship → schema\n" +
            "- manage_choice → option sets\n" +
            "- manage_form / manage_view / manage_app → UI; sitemap via manage_app\n" +
            "- manage_environment_variable / manage_webresource / manage_role → config\n" +
            "- manage_command → command bar\n" +
            "- manage_record_file → file/image column data\n" +
            "- manage_deleted_records → restore\n" +
            "- execute_sql → SQL SELECT queries; the ?sql= query option is BLOCKED/REDIRECTED to execute_sql\n" +
            "- publish_customizations → publish after metadata changes")]
        public CallToolResult execute_webapi(
            [Description("GET, POST, PUT, PATCH, or DELETE. Default GET.")] string method = "GET",
            [Description("Relative path, e.g. 'accounts', 'contacts(guid)', '$metadata'. SDK adds base URL. Required.")] string url = "",
            [Description("JSON body for POST/PUT/PATCH. Default empty (no body).")] string body = "",
            [Description("Extra headers as JSON object, e.g. '{\"Prefer\":\"return=representation\"}'. Default empty.")] string headers = "",
            [Description("Include response headers in text output. Default false.")] bool include_headers = false,
            [Description("Truncate response body. Use 50 for large outputs ($metadata). Default 200.")] int max_response_lines = 200)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(method))
                    return Error(
                        "method is required.",
                        "Valid values: GET, POST, PUT, PATCH, DELETE.");

                if (string.IsNullOrWhiteSpace(url))
                    return Error(
                        "url is required.",
                        "Provide a relative URL path, e.g. 'accounts', 'contacts?$select=name', '$metadata'.");

                var httpMethod = ParseHttpMethod(method.Trim().ToUpperInvariant());
                if (httpMethod == null)
                    return Error($"Invalid HTTP method '{method}'.", "Use GET, POST, PUT, PATCH, or DELETE.");

                if (max_response_lines <= 0)
                    max_response_lines = 200;

                var trimmedUrl = url.Trim();
                if (IsAbsoluteUrl(trimmedUrl))
                    return Error(
                        "url must be a relative Dataverse Web API path; absolute URLs are not allowed.",
                        "Provide a relative path, e.g. 'accounts?$top=1' or '$metadata' — the SDK adds the organization base URL.");

                var blocked = GetBlocked(httpMethod, trimmedUrl);
                if (blocked != null)
                    return Error(blocked.Value.Message, blocked.Value.Hint);

                var customHeaders = ParseHeaders(headers, out var headersError);
                if (headersError != null)
                    return Error(headersError, "Pass a JSON object, e.g. {\"Prefer\":\"return=representation\"}.");

                var fileBlocked = GetFileColumnBlocked(httpMethod, trimmedUrl, customHeaders);
                if (fileBlocked != null)
                    return Error(fileBlocked.Value.Message, fileBlocked.Value.Hint);

                var requestBody = string.IsNullOrWhiteSpace(body) ? null : body.Trim();
                if (_options.DryRun && httpMethod != HttpMethod.Get)
                {
                    var preview = new WebApiResult
                    {
                        Method = httpMethod.Method,
                        Url = trimmedUrl,
                        StatusCode = 0,
                        StatusText = "Not executed",
                        IsSuccess = false
                    };
                    return DryRun(
                        $"Would execute {httpMethod.Method} {trimmedUrl}" +
                        (!string.IsNullOrWhiteSpace(requestBody) ? $" with body ({requestBody.Length} chars)" : "") + ".",
                        preview);
                }

                HttpResponseMessage response;
                if (httpMethod != HttpMethod.Get)
                {
                    response = DataverseWebApiMutationExecutor.Execute(
                        _context,
                        _serviceClient,
                        httpMethod,
                        trimmedUrl,
                        requestBody,
                        customHeaders);
                }
                else
                {
                    var isMetadata = trimmedUrl.StartsWith("$metadata", StringComparison.OrdinalIgnoreCase);
                    var getHeaders = customHeaders ?? new Dictionary<string, List<string>>(StringComparer.OrdinalIgnoreCase);
                    if (isMetadata)
                    {
                        if (_serviceClient.ConnectedOrgUriActual == null)
                            return Error("ServiceClient is not connected to a Dataverse organization. Call whoami first to verify the connection.");
                        if (!getHeaders.Keys.Any(k => string.Equals(k, "Accept", StringComparison.OrdinalIgnoreCase)))
                            getHeaders["Accept"] = new List<string> { "application/xml" };
                        response = GetMetadataRaw(trimmedUrl, getHeaders);
                    }
                    else
                    {
                        response = _serviceClient.ExecuteWebRequest(httpMethod, trimmedUrl, requestBody, getHeaders, "application/json");
                    }
                }
                var statusCode = (int)response.StatusCode;
                var reasonPhrase = response.ReasonPhrase ?? response.StatusCode.ToString();
                var responseBody = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();

                var sb = new StringBuilder(1024);
                sb.AppendLine($"[WebAPI] {httpMethod.Method} {url.Trim()}");
                sb.AppendLine($"Status: {statusCode} {reasonPhrase}");

                if (include_headers)
                {
                    sb.AppendLine();
                    sb.AppendLine("[Response Headers]");
                    foreach (var header in response.Headers)
                    {
                        sb.AppendLine($"{header.Key}: {string.Join(", ", header.Value)}");
                    }
                    if (response.Content.Headers.Any())
                    {
                        foreach (var header in response.Content.Headers)
                        {
                            sb.AppendLine($"{header.Key}: {string.Join(", ", header.Value)}");
                        }
                    }
                }

                string structuredBody = null;
                if (!string.IsNullOrWhiteSpace(responseBody))
                {
                    const int MaxResponseChars = 20000;
                    var lines = responseBody.Split('\n');
                    string note = null;
                    if (lines.Length > max_response_lines)
                    {
                        structuredBody = string.Join("\n", lines.Take(max_response_lines));
                        note = $"(truncated, showing first {max_response_lines} lines of {lines.Length} total)";
                    }
                    if (structuredBody == null)
                        structuredBody = responseBody;
                    if (structuredBody.Length > MaxResponseChars)
                    {
                        structuredBody = structuredBody.Substring(0, MaxResponseChars);
                        note = $"(truncated, showing first {MaxResponseChars} chars of {responseBody.Length} total)";
                    }
                    sb.AppendLine();
                    sb.AppendLine("[Response Body]");
                    sb.AppendLine(structuredBody);
                    if (note != null) sb.AppendLine(note);
                }

                var structured = new WebApiResult
                {
                    Method = httpMethod.Method,
                    Url = url.Trim(),
                    StatusCode = statusCode,
                    StatusText = reasonPhrase,
                    IsSuccess = response.IsSuccessStatusCode,
                    ResponseBody = structuredBody
                };

                return Success(sb.ToString(), structured);
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        private static readonly (string UrlPattern, string RedirectTool, string Reason)[] BlockedEndpoints =
        [
            ("systemforms(", "manage_form or manage_form(operations)",
                "FormXML defines the UI layout for ALL users. A malformed FormXML breaks the entire entity form with no undo."),
            ("savedqueries(", "manage_view",
                "SavedQuery defines view columns and query for ALL users. A FetchXML/LayoutXML mismatch hides all data or crashes the grid."),
            ("userqueries(", "manage_view",
                "UserQuery defines personal views. A malformed FetchXML/LayoutXML breaks the view with no undo."),
            ("sitemaps(", "manage_app",
                "SiteMap defines app navigation for ALL users. A malformed SiteMap breaks navigation for the entire app. SiteMap is managed together with its model-driven app. Do not use execute_webapi for app or sitemap creation/update. Use manage_app."),

            ("environmentvariabledefinitions(", "manage_environment_variable",
                "Environment variable definitions have linked value records. The manage_environment_variable tool handles definition+value atomically with solution awareness."),
            ("environmentvariablevalues(", "manage_environment_variable",
                "Environment variable values are linked to definitions. The manage_environment_variable tool handles create/update/clear correctly with definition lookup."),

            ("entitydefinitions", "manage_table or manage_column",
                "Entity metadata contains IRREVERSIBLE flags (ChangeTracking, Activities, BPF, Feedback, Connections, Queues). These cannot be turned off once enabled. Use manage_table for entity-level changes, manage_column for attribute-level changes."),
            ("relationshipdefinitions", "manage_relationship",
                "Relationship metadata controls cascading behavior and referential integrity. Incorrect changes can cause data loss. Use manage_relationship for safe relationship management."),
            ("managedpropertydefinitions", "manage_table",
                "Managed properties control solution layering behavior. Incorrect changes affect solution export/import."),

            ("globaloptionsetdefinitions", "manage_choice",
                "Global option sets are shared across multiple entities. Use manage_choice to list, create, update, add/remove options safely."),
            ("optionsetdefinitions", "manage_choice or manage_column",
                "Option set definitions should be managed via manage_choice (global) or manage_column (local picklist)."),

            ("webresources(", "manage_webresource",
                "Web resources require base64 content encoding and proper type codes. manage_webresource handles encoding, validation, publish, and solution assignment."),
            ("webresourceset(", "manage_webresource",
                "Web resource updates/deletes must go through manage_webresource for prefix check, publish, and customizable gate. manage_webresource handles encoding, validation, publish, and solution assignment."),

            ("roles(", "manage_role",
                "Security roles control access for ALL users in a business unit. manage_role provides safe CRUD, privilege copying, and user assignment."),

            ("solutions(", null,
                "Solution manipulation can corrupt customizations and break deployments. Manage solutions via Power Apps UI, PAC CLI, or the DevKit solution command."),
            ("solutioncomponents(", null,
                "Adding/removing solution components incorrectly can break solution exports. Manage via Power Apps UI or PAC CLI."),

            ("pluginassemblies(", null,
                "Plugin assemblies contain server-side business logic. Register/update plugins via the DevKit server command or Plugin Registration Tool."),
            ("plugintypes(", null,
                "Plugin type registrations link assemblies to message processing. Manage via DevKit server command or Plugin Registration Tool."),
            ("sdkmessageprocessingsteps(", null,
                "SDK message processing steps control plugin execution pipeline. Incorrect step registration can break all CRUD operations. Manage via DevKit server command."),
            ("serviceendpoints(", null,
                "Service endpoints configure Azure integration. Manage via Plugin Registration Tool or Power Apps UI."),
            ("pluginpackages(", null,
                "Plugin packages (dependent assemblies) must be managed together with their plugin assemblies. Use DevKit server command."),

            ("workflows(", null,
                "Workflows contain business process definitions. Modifying workflow XAML incorrectly breaks automation. Manage via Power Apps UI or Power Automate."),
            ("processes(", null,
                "Process definitions control business logic flows. Manage via Power Apps UI."),

            ("canvasapps(", null,
                "Canvas apps have complex internal structure. Manage via Power Apps Studio."),
            ("appmodules(", "manage_app",
                "Model-driven app definitions control app structure and navigation. Do not use execute_webapi for model-driven app or sitemap creation/update. Use manage_app."),
            ("appmodulecomponents(", "manage_app",
                "App module components link model-driven apps to sitemaps, entities, forms, views, and commands. Do not use execute_webapi for app component creation/update. Use manage_app."),

            ("connectionreferences(", null,
                "Connection references link flows/apps to external services. Manage via Power Apps UI or solution import.")
        ];

        private static readonly (string UrlPattern, string RedirectTool, string Message)[] RedirectedGetEndpoints =
        [
            ("entitydefinitions", "get_tables",
                "get_tables provides filtered, tiered metadata (compact/standard/full) optimized for AI consumption.\n\n" +
                "Examples:\n" +
                "  get_tables(entity_name='account') → standard detail with attributes & relationships\n" +
                "  get_tables(entity_name='account', detail_level='compact') → names & types only\n" +
                "  get_tables(entity_name='account', detail_level='full') → all metadata including audit, formula, security\n" +
                "  get_tables(entity_name='email', filter='to,from,cc,bcc,subject,description') → filtered attributes\n" +
                "  get_tables(filter='account') → list entities matching keyword"),

            ("attributedefinitions", "get_tables",
                "get_tables(entity_name='...') returns attributes with filtering, detail levels, and relationships."),

            ("relationshipdefinitions", "get_tables or manage_relationship",
                "Examples:\n" +
                "  get_tables(entity_name='account') → includes 1:N, N:1, N:N relationships\n" +
                "  manage_relationship(action='create_1n', referenced_entity='account', referencing_entity='contact', ...) → create relationship"),

            ("globaloptionsetdefinitions", "manage_choice",
                "Examples:\n" +
                "  manage_choice(action='list') → list global option sets\n" +
                "  manage_choice(action='detail', optionset_name='...') → inspect options\n" +
                "  manage_column for local picklists on an entity"),

            ("optionsetdefinitions", "manage_choice",
                "Examples:\n" +
                "  manage_choice(action='list') → list global option sets\n" +
                "  manage_choice(action='detail', optionset_name='...') → inspect options\n" +
                "  manage_column for local picklists on an entity"),

            ("asyncoperations", "get_system_jobs",
                "get_system_jobs provides status/operation_type filters, time scope, correlation_id tracing, and detail mode with message + friendlyMessage.\n\n" +
                "Examples:\n" +
                "  get_system_jobs(status='failed', minutes_ago=1440) → failed jobs last 24h\n" +
                "  get_system_jobs(record_id='<guid>') → detail with message + friendlyMessage\n" +
                "  get_system_jobs(operation_type='solution', status='all') → solution import/export jobs\n" +
                "  get_system_jobs(correlation_id='<guid>') → trace one request across jobs"),

            ("workflows", "get_workflows",
                "get_workflows provides entity_name/mode/status filters, trigger_field discovery, and workflow execution metadata.\n\n" +
                "Examples:\n" +
                "  get_workflows(entity_name='account') → workflows bound to account\n" +
                "  get_workflows(mode='realtime', status='active') → active realtime workflows\n" +
                "  get_workflows(workflow_id='<guid>') → detail with trigger fields and execution metadata\n" +
                "  get_workflows(entity_name='account', trigger_field='statecode') → workflows triggered by status change"),

            ("processes", "get_workflows",
                "get_workflows covers classic workflows (background + realtime) with filters and detail mode.\n\n" +
                "Examples:\n" +
                "  get_workflows(entity_name='account') → workflows bound to account\n" +
                "  get_workflows(mode='realtime') → realtime (sync) workflows\n" +
                "  get_workflows(workflow_id='<guid>') → detail with trigger fields and execution metadata"),

            ("deletionstatecode", "manage_deleted_records",
                "Standard OData $filter on 'deletionstatecode' or 'statecode eq 1' is unreliable for non-activity entities " +
                "(returns empty for account/contact default statecode=0 even after soft-delete). " +
                "Use manage_deleted_records(action='list', entity_name='<entity>') which uses FetchXml datasource='bin' " +
                "and returns records with modifiedOn ≈ delete time."),

            ("appactions", "manage_command",
                "manage_command provides app-scoped list/detail with ribbon-style OOB+custom detection, visibility/enable rules, and flyout/split-button children.\n\n" +
                "Examples:\n" +
                "  manage_command(action='list', entity_name='account') → commands for account\n" +
                "  manage_command(action='detail', command_id='<guid>', include_rules=true) → full detail with rules\n" +
                "  manage_command(action='list', entity_name='account', include_children=true) → flyout/split items"),

            ("restore", "manage_deleted_records",
                "Web API 'Restore' action works (returns 200 with restored id), " +
                "but requires complex body with @odata.id/@odata.type. " +
                "Use manage_deleted_records(action='restore', entity_name='<entity>', record_id='<guid>') " +
                "which uses the SDK OrganizationRequest('Restore') late-bound with a simple Entity param " +
                "and returns full per-record status (success/failed with reason). " +
                "Also supports batch via record_ids[].")
        ];

        private static readonly (string UrlPattern, string RedirectTool, string Reason)[] BlockedPostEndpoints =
        [
            ("publishxml", "publish_customizations",
                "PublishXml requires correctly formatted ParameterXml. The publish_customizations tool handles entity-specific vs all publishing with proper XML generation."),
            ("publishallxml", "publish_customizations",
                "PublishAllXml publishes ALL customizations. The publish_customizations tool provides a simpler interface with proper status reporting."),

            ("createoptionset", "manage_choice",
                "Creating option sets requires proper metadata structure. Use manage_choice for global option sets or manage_column for local picklists."),
            ("updateoptionset", "manage_choice",
                "Updating option set metadata requires proper label handling. Use manage_choice for safe updates."),
            ("insertoptionvalue", "manage_choice or manage_column",
                "Inserting option values requires correct value/label pairs. Use manage_choice (global) or manage_column (local) for safe option management."),
            ("updateoptionvalue", "manage_choice or manage_column",
                "Updating option value labels requires merge label handling. Use manage_choice (global) or manage_column (local)."),
            ("deleteoptionvalue", "manage_choice or manage_column",
                "Deleting option values is irreversible. Use manage_choice (global) or manage_column (local) for safe deletion."),
            ("insertstatusvalue", "manage_column",
                "Inserting statuscode values requires linking to a statecode. Use manage_column with logical_name='statuscode' and add_options JSON including a 'state' field for the linked statecode value."),
            ("updatestatusvalue", "manage_column",
                "Updating statuscode value labels requires merge label handling. Use manage_column with logical_name='statuscode' and update_options."),
            ("deletestatusvalue", "manage_column",
                "Deleting statuscode values is irreversible. Use manage_column with logical_name='statuscode' and delete_options."),

            ("webresources", "manage_webresource",
                "Creating web resources requires base64 encoding and type codes. Use manage_webresource for safe creation with solution assignment."),
            ("savedqueryvisualizations", "manage_chart",
                "System charts require XML validation and solution management. Use manage_chart for system chart creation, updates, and backups."),
            ("roles", "manage_role",
                "Creating security roles requires proper business unit assignment. Use manage_role for safe role management."),

            ("appmodules", "manage_app",
                "Do not use execute_webapi for model-driven app or sitemap creation/update. Use manage_app."),
            ("sitemaps", "manage_app",
                "Do not use execute_webapi for model-driven app or sitemap creation/update. Use manage_app."),
            ("appmodulecomponents", "manage_app",
                "Do not use execute_webapi for appmodulecomponent creation/update. Use manage_app."),

            ("appactions", "manage_command",
                "Modern command bar buttons (appaction) require app-scoped context, OOB override logic, and entity publish. Use manage_command for create/update/hide/show/flyout/split-button operations."),
            ("appactionrules", "manage_command",
                "appactionrule (visibility/enable rules) are managed with their parent appaction via manage_command (include_rules=true to inspect)."),

            ("restore", "manage_deleted_records",
                "Web API 'Restore' action works (returns 200 with restored id) but requires complex body with @odata.id/@odata.type. " +
                "Use manage_deleted_records(action='restore', entity_name='<entity>', record_id='<guid>') " +
                "which uses the SDK OrganizationRequest('Restore') late-bound with a simple Entity param " +
                "and returns full per-record status (success/failed with reason). " +
                "Also supports batch via record_ids[].")
        ];

        private static readonly string[] FileColumnSdkActions =
        [
            "Microsoft.Dynamics.CRM.InitializeFileBlocksUpload",
            "Microsoft.Dynamics.CRM.UploadBlock",
            "Microsoft.Dynamics.CRM.CommitFileBlocksUpload",
            "Microsoft.Dynamics.CRM.InitializeFileBlocksDownload",
            "Microsoft.Dynamics.CRM.DownloadBlock",
            "Microsoft.Dynamics.CRM.DeleteFile"
        ];

        private const string FileColumnBlockReason =
            "File/image column data requires the SDK block protocol " +
            "(InitializeFileBlocksUpload → UploadBlock 4MB → CommitFileBlocksUpload, or the download equivalent). " +
            "Raw PATCH/GET on these endpoints corrupts data or fails on chunk continuation.";

        private const string FileColumnBlockHint =
            "Use manage_record_file instead. Actions: 'info', 'upload', 'download', 'delete' " +
            "(auto-detects File vs Image columns, supports local path, http(s) URL and base64 sources).";

        private static (string Message, string Hint)? GetFileColumnBlocked(HttpMethod method, string url, Dictionary<string, List<string>> headers)
        {
            var path = url.Split('?')[0];

            if (path.EndsWith("/$value", StringComparison.OrdinalIgnoreCase))
                return ($"{method.Method} on a /$value binary endpoint is not allowed via execute_webapi.\nREASON: {FileColumnBlockReason}", FileColumnBlockHint);

            foreach (var action in FileColumnSdkActions)
            {
                if (path.IndexOf(action, StringComparison.OrdinalIgnoreCase) >= 0)
                    return ($"{method.Method} on the file/image block-protocol action '{action}' is not allowed via execute_webapi.\nREASON: {FileColumnBlockReason}", FileColumnBlockHint);
            }

            if (IsSingleColumnValueUrl(path))
            {
                if (method == HttpMethod.Patch || method == HttpMethod.Put)
                {
                    var isChunked = HasHeader(headers, "x-ms-chunk-size");
                    var isBinary = HeaderContains(headers, "Content-Type", "octet-stream");
                    if (isChunked || isBinary)
                        return ($"{method.Method} binary upload to a single-column endpoint is not allowed via execute_webapi.\nREASON: {FileColumnBlockReason}", FileColumnBlockHint);
                }
                else if (method == HttpMethod.Delete)
                {
                    return ($"DELETE on a single-column endpoint is not allowed via execute_webapi.\nREASON: {FileColumnBlockReason}", FileColumnBlockHint);
                }
            }

            return null;
        }

        private static bool HasSqlQueryOption(string urlLower) =>
            urlLower.Contains("?sql=") || urlLower.Contains("&sql=");

        private static bool IsSingleColumnValueUrl(string path)
        {
            var firstSlash = path.IndexOf('/');
            if (firstSlash <= 0 || firstSlash != path.LastIndexOf('/')) return false;
            var key = path.Substring(0, firstSlash);
            var column = path.Substring(firstSlash + 1);
            var open = key.IndexOf('(');
            if (open <= 0 || !key.EndsWith(")", StringComparison.Ordinal)) return false;
            if (column.Length == 0 || column.StartsWith("$", StringComparison.Ordinal) || column.Contains('(')) return false;
            foreach (var c in column)
                if (!char.IsLetterOrDigit(c) && c != '_') return false;
            return true;
        }

        private static bool HasHeader(Dictionary<string, List<string>> headers, string name) =>
            headers != null && headers.Keys.Any(k => string.Equals(k, name, StringComparison.OrdinalIgnoreCase));

        private static bool HeaderContains(Dictionary<string, List<string>> headers, string name, string valuePart) =>
            headers != null && headers.Any(kv =>
                string.Equals(kv.Key, name, StringComparison.OrdinalIgnoreCase) &&
                kv.Value != null && kv.Value.Any(v => v != null && v.IndexOf(valuePart, StringComparison.OrdinalIgnoreCase) >= 0));

        private static (string Message, string Hint)? GetBlocked(HttpMethod method, string url)
        {
            var urlLower = url.ToLowerInvariant();

            if (method == HttpMethod.Post)
            {
                foreach (var (pattern, tool, reason) in BlockedPostEndpoints)
                {
                    if (urlLower.Contains(pattern))
                        return ($"Direct POST to {pattern} is not allowed via execute_webapi.\nREASON: {reason}", BlockedHint(tool));
                }
            }

            if (method == HttpMethod.Get)
            {
                if (HasSqlQueryOption(urlLower))
                    return ("The ?sql= query option is not supported in execute_webapi.",
                        "Use execute_sql instead — pass the SQL via its sql parameter (without URL-encoding). " +
                        "execute_sql validates syntax, handles paging, and returns tabular results. " +
                        "Read docs://instructions_for_sql for Dataverse SQL rules.");
                foreach (var (pattern, tool, message) in RedirectedGetEndpoints)
                {
                    if (pattern == "__guid_url__") continue;
                    if (urlLower.Contains(pattern))
                        return (message, $"Use {tool} instead.");
                }
            }

            if (method == HttpMethod.Get || method == HttpMethod.Post)
                return null;

            foreach (var (pattern, tool, reason) in BlockedEndpoints)
            {
                if (urlLower.Contains(pattern.ToLowerInvariant()))
                    return ($"Direct {method.Method} on {pattern.TrimEnd('(')} is not allowed via execute_webapi.\nREASON: {reason}", BlockedHint(tool));
            }

            return null;
        }

        private static string BlockedHint(string tool) =>
            tool != null
                ? $"Use {tool} instead."
                : "Manage this via Power Apps UI, PAC CLI, or the DevKit CLI.";

        private static bool IsAbsoluteUrl(string url)
        {
            if (string.IsNullOrWhiteSpace(url)) return false;
            return url.StartsWith("//", StringComparison.Ordinal) ||
                   Uri.TryCreate(url, UriKind.Absolute, out _);
        }

        private static HttpMethod ParseHttpMethod(string method)
        {
            return method switch
            {
                "GET" => HttpMethod.Get,
                "POST" => HttpMethod.Post,
                "PUT" => HttpMethod.Put,
                "PATCH" => HttpMethod.Patch,
                "DELETE" => HttpMethod.Delete,
                _ => null
            };
        }

        private HttpResponseMessage GetMetadataRaw(string relativeUrl, Dictionary<string, List<string>> headers)
        {
            var baseHost = _serviceClient.ConnectedOrgUriActual.GetLeftPart(UriPartial.Authority);
            var token = _serviceClient.CurrentAccessToken;
            var fullUrl = $"{baseHost}/api/data/v9.2/{relativeUrl.TrimStart('/')}";
            using var http = new HttpClient();
            using var req = new HttpRequestMessage(HttpMethod.Get, fullUrl);
            if (!string.IsNullOrWhiteSpace(token))
                req.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
            req.Headers.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/xml"));
            req.Headers.Add("OData-MaxVersion", "4.0");
            req.Headers.Add("OData-Version", "4.0");
            if (headers != null)
            {
                foreach (var kv in headers)
                {
                    if (string.Equals(kv.Key, "Accept", StringComparison.OrdinalIgnoreCase) ||
                        string.Equals(kv.Key, "Authorization", StringComparison.OrdinalIgnoreCase))
                        continue;
                    foreach (var v in kv.Value)
                        req.Headers.TryAddWithoutValidation(kv.Key, v);
                }
            }
            return http.SendAsync(req).GetAwaiter().GetResult();
        }

        private static Dictionary<string, List<string>> ParseHeaders(string headersJson, out string error)
        {
            error = null;
            if (string.IsNullOrWhiteSpace(headersJson))
                return null;

            var trimmed = headersJson.Trim();
            if (trimmed[0] != '{' || trimmed[^1] != '}')
            {
                error = $"Invalid JSON in headers parameter.\nInput: {headersJson}";
                return null;
            }

            using var doc = JsonDocument.Parse(trimmed);
            if (doc.RootElement.ValueKind != JsonValueKind.Object)
            {
                error = $"Invalid JSON in headers parameter.\nInput: {headersJson}";
                return null;
            }

            var result = new Dictionary<string, List<string>>();
            foreach (var prop in doc.RootElement.EnumerateObject())
            {
                var value = prop.Value.ValueKind == JsonValueKind.String
                    ? prop.Value.GetString()
                    : prop.Value.GetRawText();
                if (value == null) continue;
                result[prop.Name] = new List<string> { value };
            }

            if (result.Count == 0)
                return null;

            return result;
        }
    }
}

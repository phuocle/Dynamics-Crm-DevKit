using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Text.RegularExpressions;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ExecuteWebApiTool : McpToolBase
    {
        private readonly IWebApiExecutor _webApi;
        private readonly IMcpConnectionInfo _connectionInfo;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        private readonly DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver _connections;
        internal IOrganizationService OrgService { private get; init; }

        public ExecuteWebApiTool(IWebApiExecutor webApi, McpDryRunOptions options, McpExecutionContext context, IMcpConnectionInfo connectionInfo) : this(webApi, options, context, connectionInfo, null) { }

        [Microsoft.Extensions.DependencyInjection.ActivatorUtilitiesConstructor]
        public ExecuteWebApiTool(IWebApiExecutor webApi, McpDryRunOptions options, McpExecutionContext context, IMcpConnectionInfo connectionInfo, DynamicsCrm.DevKit.Cli.Mcp.IMcpConnectionResolver connections)
        {
            _connections = connections;
            _webApi = webApi;
            _connectionInfo = connectionInfo;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "execute_webapi", Title = "Execute a raw Web API request",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(WebApiResult)),
        Description(
            "Raw Dataverse Web API call. url is relative; SDK adds base URL. PUT/PATCH/DELETE destructive — confirm.\n\n" +

            "WHEN TO USE:\n" +
            "- Read endpoints not covered by a specialized tool, including $metadata. Writes are limited to verified Dataverse row CRUD endpoints. Batch requests, solution imports, and raw write actions are blocked.\n" +
            "- Metadata/system endpoints (forms, views, sitemap, schema, choice, webresource, roles, publish, env vars, deleted records, command bar) are BLOCKED/REDIRECTED at runtime to the dedicated tool named in the error\n\n" +

            "RELATED TOOLS:\n" +
            "- get_context(action='whoami') → current connection identity (GET WhoAmI is redirected here)\n" +
            "- inspect_metadata(resource='tables') / manage_schema → tables, columns, relationships, choices\n" +
            "- manage_ui → forms, views, charts, model-driven apps & sitemap\n" +
            "- manage_commanding → classic ribbon & modern command bar\n" +
            "- manage_logic → Custom APIs & Power Fx functions\n" +
            "- manage_assets → web resources & SSRS reports\n" +
            "- manage_data → record CRUD, bulk upsert, file/image columns, deleted records, demo data\n" +
            "- manage_admin → security roles, environment variables, publish customizations\n" +
            "- query_data(mode='sql') → SQL SELECT queries; the ?sql= query option is BLOCKED/REDIRECTED to query_data(mode='sql')")]
#nullable enable
        public System.Threading.Tasks.Task<CallToolResult> InvokeAsync(
            [Description("GET, POST, PUT, PATCH, or DELETE. Default GET.")] string? method = "GET",
            [Description("Relative path, e.g. 'accounts', 'contacts(guid)', '$metadata'. Writes require a Dataverse entity set or a single row. SDK adds base URL. Required.")] string? url = null,
            [Description("JSON body for POST/PUT/PATCH. Default empty (no body).")] string? body = null,
            [Description("Extra headers as JSON object, e.g. '{\"Prefer\":\"return=representation\"}'. Default empty.")] string? headers = null,
            [Description("Include response headers in text output. Default false.")] bool? include_headers = null,
            [Description("Truncate response body. Use 50 for large outputs ($metadata). Default 200.")] int? max_response_lines = null,
            [Description(DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.EnvDescription)] string? env = null,
            System.Threading.CancellationToken cancellationToken = default)
#nullable restore
        {
            return DynamicsCrm.DevKit.Cli.Mcp.McpToolInvocation.InvokeAsync(_connections, env, conn =>
            {
                var worker = new ExecuteWebApiTool(conn.WebApi, conn.Options, conn.Context, conn.ConnectionInfo) { OrgService = conn.OrgService };
                return System.Threading.Tasks.Task.FromResult(worker.execute_webapi(
                    method ?? "GET", url ?? "", body ?? "", headers ?? "", include_headers ?? false, max_response_lines ?? 200));
            }, cancellationToken);
        }

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

                if (customHeaders?.Keys.Any(header => RequestOverrideHeaders.Contains(header.Trim(), StringComparer.OrdinalIgnoreCase)) == true)
                    return Error("HTTP method or URL override headers are not allowed via execute_webapi.");

                var decodedPath = DecodePath(trimmedUrl);
                var fileBlocked = GetFileColumnBlocked(httpMethod, decodedPath, customHeaders);
                if (fileBlocked != null)
                    return Error(fileBlocked.Value.Message, fileBlocked.Value.Hint);

                if (httpMethod != HttpMethod.Get && !IsRowMutation(httpMethod, decodedPath))
                    return Error("Only verified Dataverse row CRUD endpoints are allowed for Web API writes.",
                        "Use manage_data(resource='record') for row changes or a dedicated MCP tool for supported metadata changes.");

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
                        _webApi,
                        httpMethod,
                        trimmedUrl,
                        requestBody,
                        customHeaders);
                }
                else
                {
                    var isMetadata = string.Equals(decodedPath, "$metadata", StringComparison.OrdinalIgnoreCase);
                    var getHeaders = customHeaders ?? new Dictionary<string, List<string>>(StringComparer.OrdinalIgnoreCase);
                    if (isMetadata)
                    {
                        if (_connectionInfo.ConnectedOrgUri == null)
                            return Error("ServiceClient is not connected to a Dataverse organization. Call get_context(action='whoami') first to verify the connection.");
                        if (!getHeaders.Keys.Any(k => string.Equals(k, "Accept", StringComparison.OrdinalIgnoreCase)))
                            getHeaders["Accept"] = new List<string> { "application/xml" };
                        response = GetMetadataRaw(trimmedUrl, getHeaders);
                    }
                    else
                    {
                        response = _webApi.ExecuteWebRequest(httpMethod, trimmedUrl, requestBody, getHeaders, "application/json");
                    }
                }
                var statusCode = (int)response.StatusCode;
                var reasonPhrase = response.ReasonPhrase ?? response.StatusCode.ToString();
                var responseBody = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();

                var sb = new StringBuilder(1024);
                sb.AppendLine($"{httpMethod.Method} {url.Trim()}");
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
            ("systemforms(", "manage_ui(resource='form') or manage_ui(resource='form', operations)",
                "FormXML defines the UI layout for ALL users. A malformed FormXML breaks the entire entity form with no undo."),
            ("savedqueries(", "manage_ui(resource='view')",
                "SavedQuery defines view columns and query for ALL users. A FetchXML/LayoutXML mismatch hides all data or crashes the grid."),
            ("userqueries(", "manage_ui(resource='view')",
                "UserQuery defines personal views. A malformed FetchXML/LayoutXML breaks the view with no undo."),
            ("sitemaps(", "manage_ui(resource='app')",
                "SiteMap defines app navigation for ALL users. A malformed SiteMap breaks navigation for the entire app. SiteMap is managed together with its model-driven app. Do not use execute_webapi for app or sitemap creation/update. Use manage_ui(resource='app')."),

            ("environmentvariabledefinitions(", "manage_admin(resource='env_var')",
                "Environment variable definitions have linked value records. The manage_admin(resource='env_var') tool handles definition+value atomically with solution awareness."),
            ("environmentvariablevalues(", "manage_admin(resource='env_var')",
                "Environment variable values are linked to definitions. The manage_admin(resource='env_var') tool handles create/update/clear correctly with definition lookup."),

            ("entitydefinitions", "manage_schema(resource='table') or manage_schema(resource='column')",
                "Entity metadata contains IRREVERSIBLE flags, including Change Tracking, Activities, Notes, BPF, Feedback, Connections, Queues, and Sending email. Use manage_schema(resource='table') or manage_schema(resource='column') for supported metadata changes."),
            ("relationshipdefinitions", "manage_schema(resource='relationship')",
                "Relationship metadata controls cascading behavior and referential integrity. Incorrect changes can cause data loss. Use manage_schema(resource='relationship') for safe relationship management."),
            ("managedpropertydefinitions", "manage_schema(resource='table')",
                "Managed properties control solution layering behavior. Incorrect changes affect solution export/import."),

            ("globaloptionsetdefinitions", "manage_schema(resource='choice')",
                "Global option sets are shared across multiple entities. Use manage_schema(resource='choice') to list, create, update, add/remove options safely."),
            ("optionsetdefinitions", "manage_schema(resource='choice') or manage_schema(resource='column')",
                "Option set definitions should be managed via manage_schema(resource='choice') (global) or manage_schema(resource='column') (local picklist)."),

            ("webresources(", "manage_assets(resource='webresource')",
                "Web resources require base64 content encoding and proper type codes. manage_assets(resource='webresource') handles encoding, validation, publish, and solution assignment."),
            ("webresourceset(", "manage_assets(resource='webresource')",
                "Web resource updates/deletes must go through manage_assets(resource='webresource') for prefix check, publish, and customizable gate. manage_assets(resource='webresource') handles encoding, validation, publish, and solution assignment."),

            ("roles(", "manage_admin(resource='role')",
                "Security roles control access for ALL users in a business unit. manage_admin(resource='role') provides safe CRUD, privilege copying, and user assignment."),

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
            ("appmodules(", "manage_ui(resource='app')",
                "Model-driven app definitions control app structure and navigation. Do not use execute_webapi for model-driven app or sitemap creation/update. Use manage_ui(resource='app')."),
            ("appmodulecomponents(", "manage_ui(resource='app')",
                "App module components link model-driven apps to sitemaps, entities, forms, views, and commands. Do not use execute_webapi for app component creation/update. Use manage_ui(resource='app')."),

            ("connectionreferences(", "manage_data(resource='record')",
                "Connection references link flows and apps to external services. Pass entity_name='connectionreference' for record changes or use add_to_solution, remove_from_solution, or list_solutions for solution membership."),

            ("customapis(", "manage_logic(resource='custom_api')",
                "Custom APIs have linked request parameters, response properties, and publisher prefix/solution rules. Use manage_logic(resource='custom_api') for safe create, update, and delete."),
            ("customapirequestparameters(", "manage_logic(resource='custom_api')",
                "Custom API request parameters are managed together with their parent Custom API. Use manage_logic(resource='custom_api', action='create'|'update', request_parameters=...)."),
            ("customapiresponseproperties(", "manage_logic(resource='custom_api')",
                "Custom API response properties are managed together with their parent Custom API. Use manage_logic(resource='custom_api', action='create'|'update', response_properties=...).")
        ];

        private static readonly (string UrlPattern, string RedirectTool, string Message)[] RedirectedGetEndpoints =
        [
            ("whoami", "get_context(action='whoami')",
                "get_context(action='whoami') returns the current connection identity in one call: user, organization, environment URL, Dataverse version, security roles, and DevKit build info."),

            ("entitydefinitions", "inspect_metadata(resource='tables')",
                "inspect_metadata(resource='tables') provides filtered, tiered metadata (compact/standard/full) optimized for AI consumption."),

            ("attributedefinitions", "inspect_metadata(resource='tables')",
                "inspect_metadata(resource='tables', name='...') returns attributes with filtering, detail levels, and relationships."),

            ("relationshipdefinitions", "inspect_metadata(resource='tables') or manage_schema(resource='relationship')",
                "inspect_metadata(resource='tables', name='...') includes 1:N, N:1, N:N relationships; manage_schema(resource='relationship') creates/updates/deletes them safely."),

            ("globaloptionsetdefinitions", "manage_schema(resource='choice')",
                "manage_schema(resource='choice') lists and manages global option sets; manage_schema(resource='column') handles local picklists on an entity."),

            ("optionsetdefinitions", "manage_schema(resource='choice')",
                "manage_schema(resource='choice') lists and manages global option sets; manage_schema(resource='column') handles local picklists on an entity."),

            ("asyncoperations", "inspect_diagnostics(resource='system_jobs')",
                "inspect_diagnostics(resource='system_jobs') provides status/operation_type filters, time scope, correlation_id tracing, and detail mode with message + friendlyMessage."),

            ("workflows", "inspect_automation(resource='workflows')",
                "inspect_automation(resource='workflows') provides entity_name/mode/status filters, trigger_field discovery, and workflow execution metadata."),

            ("processes", "inspect_automation(resource='workflows')",
                "inspect_automation(resource='workflows') covers classic workflows (background + realtime) with filters and detail mode."),

            ("deletionstatecode", "manage_data(resource='deleted')",
                "Standard OData $filter on 'deletionstatecode' or 'statecode eq 1' is unreliable for non-activity entities " +
                "(returns empty for account/contact default statecode=0 even after soft-delete). " +
                "manage_data(resource='deleted', action='list') uses FetchXml datasource='bin' " +
                "and returns records with modifiedOn ≈ delete time."),

            ("appactions", "manage_commanding(resource='command')",
                "manage_commanding(resource='command') provides app-scoped list/detail with ribbon-style OOB+custom detection, visibility/enable rules, and flyout/split-button children."),

            ("restore", "manage_data(resource='deleted')",
                "Web API 'Restore' action works (returns 200 with restored id), " +
                "but requires complex body with @odata.id/@odata.type. " +
                "Use manage_data(resource='deleted', action='restore', entity_name='<entity>', record_id='<guid>') " +
                "which uses the SDK OrganizationRequest('Restore') late-bound with a simple Entity param " +
                "and returns full per-record status (success/failed with reason). " +
                "Also supports batch via record_ids[].")
        ];

        private static readonly (string UrlPattern, string RedirectTool, string Reason)[] BlockedPostEndpoints =
        [
            ("importsolution", null, "Solution imports can change protected table metadata."),
            ("stagesolution", null, "Staging a solution can prepare changes to protected table metadata."),
            ("stageandupgrade", null, "Solution upgrades can change protected table metadata."),
            ("applysolutionupgrade", null, "Solution upgrades can change protected table metadata."),
            ("deleteandpromote", null, "Solution upgrades can change protected table metadata."),
            ("publishxml", "manage_admin(resource='publish')",
                "PublishXml requires correctly formatted ParameterXml. The manage_admin(resource='publish') tool handles entity-specific vs all publishing with proper XML generation."),
            ("publishallxml", "manage_admin(resource='publish')",
                "PublishAllXml publishes ALL customizations. The manage_admin(resource='publish') tool provides a simpler interface with proper status reporting."),

            ("createoptionset", "manage_schema(resource='choice')",
                "Creating option sets requires proper metadata structure. Use manage_schema(resource='choice') for global option sets or manage_schema(resource='column') for local picklists."),
            ("updateoptionset", "manage_schema(resource='choice')",
                "Updating option set metadata requires proper label handling. Use manage_schema(resource='choice') for safe updates."),
            ("insertoptionvalue", "manage_schema(resource='choice') or manage_schema(resource='column')",
                "Inserting option values requires correct value/label pairs. Use manage_schema(resource='choice') (global) or manage_schema(resource='column') (local) for safe option management."),
            ("updateoptionvalue", "manage_schema(resource='choice') or manage_schema(resource='column')",
                "Updating option value labels requires merge label handling. Use manage_schema(resource='choice') (global) or manage_schema(resource='column') (local)."),
            ("deleteoptionvalue", "manage_schema(resource='choice') or manage_schema(resource='column')",
                "Deleting option values is irreversible. Use manage_schema(resource='choice') (global) or manage_schema(resource='column') (local) for safe deletion."),
            ("insertstatusvalue", "manage_schema(resource='column')",
                "Inserting statuscode values requires linking to a statecode. Use manage_schema(resource='column') with logical_name='statuscode' and add_options JSON including a 'state' field for the linked statecode value."),
            ("updatestatusvalue", "manage_schema(resource='column')",
                "Updating statuscode value labels requires merge label handling. Use manage_schema(resource='column') with logical_name='statuscode' and update_options."),
            ("deletestatusvalue", "manage_schema(resource='column')",
                "Deleting statuscode values is irreversible. Use manage_schema(resource='column') with logical_name='statuscode' and delete_options."),

            ("webresources", "manage_assets(resource='webresource')",
                "Creating web resources requires base64 encoding and type codes. Use manage_assets(resource='webresource') for safe creation with solution assignment."),
            ("savedqueryvisualizations", "manage_ui(resource='chart')",
                "System charts require XML validation and solution management. Use manage_ui(resource='chart') for system chart creation, updates, and backups."),
            ("roles", "manage_admin(resource='role')",
                "Creating security roles requires proper business unit assignment. Use manage_admin(resource='role') for safe role management."),

            ("appmodules", "manage_ui(resource='app')",
                "Do not use execute_webapi for model-driven app or sitemap creation/update. Use manage_ui(resource='app')."),
            ("sitemaps", "manage_ui(resource='app')",
                "Do not use execute_webapi for model-driven app or sitemap creation/update. Use manage_ui(resource='app')."),
            ("appmodulecomponents", "manage_ui(resource='app')",
                "Do not use execute_webapi for appmodulecomponent creation/update. Use manage_ui(resource='app')."),

            ("appactions", "manage_commanding(resource='command')",
                "Use manage_commanding(resource='command') for modern appaction create/update/delete/hide/show/flyout/split-button operations. Delete supports app, table, and global scope and handles child commands, rules, and context table publishing."),
            ("appactionrules", "manage_commanding(resource='command')",
                "appactionrule (visibility/enable rules) are managed with their parent appaction via manage_commanding(resource='command') (include_rules=true to inspect)."),

            ("customapis", "manage_logic(resource='custom_api')",
                "Creating Custom APIs requires publisher prefix validation, solution assignment, and parameter definitions. Use manage_logic(resource='custom_api', action='create')."),
            ("customapirequestparameters", "manage_logic(resource='custom_api')",
                "Custom API request parameters must be created with their parent Custom API in the target solution. Use manage_logic(resource='custom_api', action='create'|'update', request_parameters=...)."),
            ("customapiresponseproperties", "manage_logic(resource='custom_api')",
                "Custom API response properties must be created with their parent Custom API in the target solution. Use manage_logic(resource='custom_api', action='create'|'update', response_properties=...)."),

            ("restore", "manage_data(resource='deleted')",
                "Web API 'Restore' action works (returns 200 with restored id) but requires complex body with @odata.id/@odata.type. " +
                "Use manage_data(resource='deleted', action='restore', entity_name='<entity>', record_id='<guid>') " +
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
            "Use manage_data(resource='file') instead. Actions: 'info', 'upload', 'download', 'delete' " +
            "(auto-detects File vs Image columns, supports local path, http(s) URL and base64 sources).";

        private static (string Message, string Hint)? GetFileColumnBlocked(HttpMethod method, string url, Dictionary<string, List<string>> headers)
        {
            var path = url.Split('?')[0];

            if (path.EndsWith("/$value", StringComparison.OrdinalIgnoreCase))
                return ($"{method.Method} on a /$value binary endpoint is not allowed via execute_webapi. {FileColumnBlockReason}", FileColumnBlockHint);

            foreach (var action in FileColumnSdkActions)
            {
                if (path.IndexOf(action, StringComparison.OrdinalIgnoreCase) >= 0)
                    return ($"{method.Method} on the file/image block-protocol action '{action}' is not allowed via execute_webapi. {FileColumnBlockReason}", FileColumnBlockHint);
            }

            if (IsSingleColumnValueUrl(path))
            {
                if (method == HttpMethod.Patch || method == HttpMethod.Put)
                {
                    var isChunked = HasHeader(headers, "x-ms-chunk-size");
                    var isBinary = HeaderContains(headers, "Content-Type", "octet-stream");
                    if (isChunked || isBinary)
                        return ($"{method.Method} binary upload to a single-column endpoint is not allowed via execute_webapi. {FileColumnBlockReason}", FileColumnBlockHint);
                }
                else if (method == HttpMethod.Delete)
                {
                    return ($"DELETE on a single-column endpoint is not allowed via execute_webapi. {FileColumnBlockReason}", FileColumnBlockHint);
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

        private static readonly string[] RequestOverrideHeaders =
            ["X-HTTP-Method", "X-HTTP-Method-Override", "X-Method-Override", "X-Original-URL", "X-Rewrite-URL"];

        private static readonly Regex RowPathPattern = new(
            @"\A(?<entitySet>[a-zA-Z_][a-zA-Z0-9_]*)(?<key>\([^/()]+\))?\z", RegexOptions.CultureInvariant);

        private bool IsRowMutation(HttpMethod method, string decodedPath)
        {
            var match = RowPathPattern.Match(decodedPath);
            if (!match.Success || match.Groups["key"].Success == (method == HttpMethod.Post) || OrgService == null)
                return false;

            var response = (RetrieveAllEntitiesResponse)OrgService.Execute(new RetrieveAllEntitiesRequest { EntityFilters = EntityFilters.Entity });
            return response.EntityMetadata?.Any(table =>
                string.Equals(table.EntitySetName, match.Groups["entitySet"].Value, StringComparison.OrdinalIgnoreCase)) == true;
        }

        private static string DecodePath(string url) => Uri.UnescapeDataString(url.Split('?', 2)[0]);

        private static (string Message, string Hint)? GetBlocked(HttpMethod method, string url)
        {
            var path = DecodePath(url);
            if (string.IsNullOrWhiteSpace(path) || IsAbsoluteUrl(path) || path.StartsWith('/') ||
                url.Contains('#') || path.IndexOfAny(['%', '#', '?', '\\']) >= 0 || path.Any(char.IsControl) ||
                path.Split('/').Any(segment => segment is "" or "." or ".."))
                return ("url must be an unambiguous relative Dataverse Web API path.",
                    "Pass a relative endpoint without path traversal, fragments, or nested URL encoding.");

            var pathLower = path.ToLowerInvariant();
            if (pathLower.Contains("$batch"))
                return ($"Direct {method.Method} on $batch is not allowed via execute_webapi. Batch requests can contain protected writes.",
                    "Use the dedicated MCP tool for each supported operation.");

            if (method == HttpMethod.Post)
            {
                foreach (var (pattern, tool, reason) in BlockedPostEndpoints)
                {
                    if (pathLower.Contains(pattern))
                        return ($"Direct POST to {pattern} is not allowed via execute_webapi. {reason}", BlockedHint(tool));
                }
            }

            if (method == HttpMethod.Get)
            {
                var urlLower = Uri.UnescapeDataString(url).ToLowerInvariant();
                if (HasSqlQueryOption(urlLower))
                    return ("The ?sql= query option is not supported in execute_webapi.",
                        "Use query_data(mode='sql') instead — pass the SQL via its query parameter (without URL-encoding). " +
                        "query_data(mode='sql') validates syntax, handles paging, and returns tabular results. " +
                        "Read docs://instructions_for_sql for Dataverse SQL rules.");
                foreach (var (pattern, tool, message) in RedirectedGetEndpoints)
                {
                    if (pattern == "__guid_url__") continue;
                    if (urlLower.Contains(pattern))
                        return (message, $"Use {tool} instead.");
                }
            }

            if (method == HttpMethod.Get)
                return null;

            foreach (var (pattern, tool, reason) in BlockedEndpoints)
            {
                if (pathLower.Contains(pattern) || pathLower == pattern.TrimEnd('('))
                    return ($"Direct {method.Method} on {pattern.TrimEnd('(')} is not allowed via execute_webapi. {reason}", BlockedHint(tool));
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
            var baseHost = _connectionInfo.ConnectedOrgUri.GetLeftPart(UriPartial.Authority);
            var token = _webApi.CurrentAccessToken;
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
                error = "Invalid JSON in headers parameter.";
                return null;
            }

            using var doc = JsonDocument.Parse(trimmed);
            if (doc.RootElement.ValueKind != JsonValueKind.Object)
            {
                error = "Invalid JSON in headers parameter.";
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

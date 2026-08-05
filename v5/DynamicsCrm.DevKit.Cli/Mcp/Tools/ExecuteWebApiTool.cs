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
            "Raw Dataverse Web API call. Always check whether a specialized tool exists first " +
            "(schema→upsert_table/column/relationship, choice→manage_choice, form/view→manage_form/manage_view, " +
            "app/sitemap→manage_app, env vars→manage_environment_variable, webresource→manage_webresource, " +
            "roles→manage_role, publish→publish_customizations, deleted records→manage_deleted_records). " +
            "url is relative; SDK adds base URL. PUT/PATCH/DELETE destructive — confirm.\n\n" +

            "ACTIONS + REQUIRED PARAMS:\n" +
            "- 'GET' — url (any relative path, e.g. 'accounts', 'contacts(guid)', '$metadata', 'WhoAmI')\n" +
            "- 'POST' — url + body (JSON). For data records + custom actions only.\n" +
            "- 'PUT' / 'PATCH' / 'DELETE' — url [+ body] (mutations on data records)\n\n" +

            "PARAM FORMATS:\n" +
            "- url: relative path, e.g. 'accounts', 'contacts(guid)', 'accounts?$select=name'\n" +
            "- body: JSON string for POST/PUT/PATCH\n" +
            "- headers: JSON object of extra request headers, e.g. '{\"Prefer\":\"return=representation\"}'\n\n" +

            "VALIDATION RULES:\n" +
            "- Metadata/system/config endpoints (forms, views, sitemaps, env vars, schema, choice, " +
            "webresources, roles, solutions, plugins, workflows, apps) are BLOCKED at runtime — use the " +
            "specialized tool listed in the error message.\n" +
            "- Statuscode options must be inserted via upsert_column (with linked statecode), not POST.\n" +
            "- publishxml/publishallxml must go through publish_customizations.\n\n" +

            "WHEN TO USE:\n" +
            "- Endpoints not covered by specialized tools (e.g. WhoAmI, $metadata, custom actions)\n" +
            "- Inspect raw JSON responses + headers\n" +
            "- One-off CRUD on data records when no specialized tool fits\n\n" +

            "SAFETY:\n" +
            "- PUT/PATCH/DELETE are destructive — confirm before invocation\n" +
            "- $metadata GET can return thousands of lines; use max_response_lines=50\n" +
            "- GET $metadata is allowed; PATCH/PUT/DELETE on metadata is BLOCKED\n\n" +

            "RELATED TOOLS:\n" +
            "- get_tables / upsert_table / upsert_column / upsert_relationship (schema)\n" +
            "- manage_choice (option sets)\n" +
            "- manage_form / manage_view / manage_app / manage_sitemap (UI)\n" +
            "- manage_environment_variable / manage_webresource / manage_role (config)\n" +
            "- publish_customizations (publish)")]
        public CallToolResult execute_webapi(
            [Description("GET, POST, PUT, PATCH, or DELETE. Default GET.")]
            string method = "GET",
            [Description("Relative path, e.g. 'accounts', 'contacts(guid)', '$metadata'. SDK adds base URL. Required.")]
            string url = "",
            [Description("JSON body for POST/PUT/PATCH. Default empty (no body).")]
            string body = "",
            [Description("Extra headers as JSON object, e.g. '{\"Prefer\":\"return=representation\"}'. Default empty.")
            ] string headers = "",
            [Description("Include response headers in text output. Default false.")
            ] bool include_headers = false,
            [Description("Truncate response body. Use 50 for large outputs ($metadata). Default 200.")
            ] int max_response_lines = 200)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(method))
                    return Error(
                        "Error: method is required.\n" +
                        "Valid values: GET, POST, PUT, PATCH, DELETE.");

                if (string.IsNullOrWhiteSpace(url))
                    return Error(
                        "Error: url is required.\n" +
                        "Provide a relative URL path, e.g., 'accounts', 'contacts?$select=name', '$metadata'.");

                var httpMethod = ParseHttpMethod(method.Trim().ToUpperInvariant());
                if (httpMethod == null)
                    return Error($"Error: Invalid HTTP method '{method}'. Use GET, POST, PUT, PATCH, or DELETE.");

                if (max_response_lines <= 0)
                    max_response_lines = 200;

                var blockedReason = GetBlockedReason(httpMethod, url.Trim());
                if (blockedReason != null)
                    return Error(blockedReason);

                var customHeaders = ParseHeaders(headers, out var headersError);
                if (headersError != null)
                    return Error(headersError);
                var requestBody = string.IsNullOrWhiteSpace(body) ? null : body.Trim();
                var trimmedUrl = url.Trim();

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

                if (httpMethod != HttpMethod.Get)
                    _context.AssertMutationAllowed($"Web API {httpMethod.Method} {trimmedUrl}");
                HttpResponseMessage response;
                if (trimmedUrl.StartsWith("$metadata", StringComparison.OrdinalIgnoreCase))
                {
                    using var httpClient = new HttpClient();
                    var orgUri = _serviceClient.ConnectedOrgUriActual;
                    var apiUrl = $"{orgUri.Scheme}://{orgUri.Host}/api/data/v{_serviceClient.ConnectedOrgVersion.ToString(2)}/{trimmedUrl}";
                    var request = new HttpRequestMessage(httpMethod, apiUrl);
                    request.Headers.Add("Authorization", $"Bearer {_serviceClient.CurrentAccessToken}");
                    request.Headers.Add("Accept", "application/xml");
                    response = httpClient.SendAsync(request).GetAwaiter().GetResult();
                }
                else
                {
                    response = _serviceClient.ExecuteWebRequest(httpMethod, trimmedUrl, requestBody, customHeaders, "application/json");
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
                    sb.AppendLine();
                    sb.AppendLine("[Response Body]");
                    var formattedBody = TryFormatJson(responseBody);
                    var lines = formattedBody.Split('\n');
                    if (lines.Length > max_response_lines)
                    {
                        structuredBody = string.Join("\n", lines.Take(max_response_lines));
                        sb.AppendLine(structuredBody);
                        sb.AppendLine($"(truncated, showing first {max_response_lines} lines of {lines.Length} total)");
                    }
                    else
                    {
                        structuredBody = formattedBody;
                        sb.Append(formattedBody);
                    }
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
                return ThrowException(ex);
            }
        }

        private static readonly (string UrlPattern, string RedirectTool, string Reason)[] BlockedEndpoints =
        [
            // ── UI / Forms / Views / SiteMaps ──
            ("systemforms(", "manage_form or manage_form(operations)",
                "FormXML defines the UI layout for ALL users. A malformed FormXML breaks the entire entity form with no undo."),
            ("savedqueries(", "manage_view",
                "SavedQuery defines view columns and query for ALL users. A FetchXML/LayoutXML mismatch hides all data or crashes the grid."),
            ("userqueries(", "manage_view",
                "UserQuery defines personal views. A malformed FetchXML/LayoutXML breaks the view with no undo."),
            ("sitemaps(", "manage_sitemap",
                "SiteMap defines app navigation for ALL users. A malformed SiteMap breaks navigation for the entire app. Do not use execute_webapi for model-driven app or sitemap creation/update. Use manage_sitemap."),

            // ── Environment Variables ──
            ("environmentvariabledefinitions(", "manage_environment_variable",
                "Environment variable definitions have linked value records. The manage_environment_variable tool handles definition+value atomically with solution awareness."),
            ("environmentvariablevalues(", "manage_environment_variable",
                "Environment variable values are linked to definitions. The manage_environment_variable tool handles create/update/clear correctly with definition lookup."),

            // ── Schema / Metadata ──
            ("entitydefinitions", "upsert_table or upsert_column",
                "Entity metadata contains IRREVERSIBLE flags (ChangeTracking, Activities, BPF, Feedback, Connections, Queues). These cannot be turned off once enabled. Use upsert_table for entity-level changes, upsert_column for attribute-level changes."),
            ("relationshipdefinitions", "upsert_relationship",
                "Relationship metadata controls cascading behavior and referential integrity. Incorrect changes can cause data loss. Use upsert_relationship for safe relationship management."),
            ("managedpropertydefinitions", "upsert_table",
                "Managed properties control solution layering behavior. Incorrect changes affect solution export/import."),

            // ── Choice / OptionSet ──
            ("globaloptionsetdefinitions", "manage_choice",
                "Global option sets are shared across multiple entities. Use manage_choice to list, create, update, add/remove options safely."),
            ("optionsetdefinitions", "manage_choice or upsert_column",
                "Option set definitions should be managed via manage_choice (global) or upsert_column (local picklist)."),

            // ── Web Resources ──
            ("webresources(", "manage_webresource",
                "Web resources require base64 content encoding and proper type codes. manage_webresource handles encoding, validation, publish, and solution assignment."),

            // ── Security ──
            ("roles(", "manage_role",
                "Security roles control access for ALL users in a business unit. manage_role provides safe CRUD, privilege copying, and user assignment."),

            // ── Solution Management ──
            ("solutions(", null,
                "Solution manipulation can corrupt customizations and break deployments. Manage solutions via Power Apps UI, PAC CLI, or the DevKit solution command."),
            ("solutioncomponents(", null,
                "Adding/removing solution components incorrectly can break solution exports. Manage via Power Apps UI or PAC CLI."),

            // ── Plugin / Server-side ──
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

            // ── Workflows / Processes ──
            ("workflows(", null,
                "Workflows contain business process definitions. Modifying workflow XAML incorrectly breaks automation. Manage via Power Apps UI or Power Automate."),
            ("processes(", null,
                "Process definitions control business logic flows. Manage via Power Apps UI."),

            // ── Apps ──
            ("canvasapps(", null,
                "Canvas apps have complex internal structure. Manage via Power Apps Studio."),
            ("appmodules(", "manage_app",
                "Model-driven app definitions control app structure and navigation. Do not use execute_webapi for model-driven app or sitemap creation/update. Use manage_app."),
            ("appmodulecomponents(", "manage_app",
                "App module components link model-driven apps to sitemaps, entities, forms, views, and commands. Do not use execute_webapi for app component creation/update. Use manage_app."),

            // ── Connections ──
            ("connectionreferences(", null,
                "Connection references link flows/apps to external services. Manage via Power Apps UI or solution import.")
        ];

        // GET endpoints that are redirected to dedicated MCP tools rather than raw Web API.
        // Keep this array data-driven so future metadata endpoints only need one entry here.
        private static readonly (string UrlPattern, string RedirectTool, string Message)[] RedirectedGetEndpoints =
        [
            ("entitydefinitions", "get_tables",
                "REDIRECT: Use get_tables instead of GET EntityDefinitions/AttributeDefinitions.\n" +
                "get_tables provides filtered, tiered metadata (compact/standard/full) optimized for AI consumption.\n\n" +
                "Examples:\n" +
                "  get_tables(entity_name='account') → standard detail with attributes & relationships\n" +
                "  get_tables(entity_name='account', detail_level='compact') → names & types only\n" +
                "  get_tables(entity_name='account', detail_level='full') → all metadata including audit, formula, security\n" +
                "  get_tables(entity_name='email', filter='to,from,cc,bcc,subject,description') → filtered attributes\n" +
                "  get_tables(filter='account') → list entities matching keyword"),

            ("attributedefinitions", "get_tables",
                "REDIRECT: Use get_tables instead of GET AttributeDefinitions.\n" +
                "get_tables(entity_name='...') returns attributes with filtering, detail levels, and relationships."),

            ("relationshipdefinitions", "get_tables or upsert_relationship",
                "REDIRECT: Use get_tables for relationship discovery or upsert_relationship for changes.\n\n" +
                "Examples:\n" +
                "  get_tables(entity_name='account') → includes 1:N, N:1, N:N relationships\n" +
                "  upsert_relationship(action='create_1n', referenced_entity='account', referencing_entity='contact', ...) → create relationship"),

            ("globaloptionsetdefinitions", "manage_choice",
                "REDIRECT: Use manage_choice for option sets instead of GET GlobalOptionSetDefinitions.\n\n" +
                "Examples:\n" +
                "  manage_choice(action='list') → list global option sets\n" +
                "  manage_choice(action='detail', optionset_name='...') → inspect options\n" +
                "  upsert_column for local picklists on an entity"),

            ("optionsetdefinitions", "manage_choice",
                "REDIRECT: Use manage_choice for option sets instead of GET OptionSetDefinitions.\n\n" +
                "Examples:\n" +
                "  manage_choice(action='list') → list global option sets\n" +
                "  manage_choice(action='detail', optionset_name='...') → inspect options\n" +
                "  upsert_column for local picklists on an entity"),

            // ── Deleted Records (Recycle Bin) ──────────────────────────────────
            // Block tất cả GET record-by-id — manage_deleted_records(action='detail') check cả live + bin.
            // NOTE: this is just a hint entry; actual GUID URL check happens via regex below.
            ("__guid_url__", "manage_deleted_records",
                "REDIRECT: For a single record GUID, use manage_deleted_records(action='detail', entity_name='<entity>', record_id='<guid>') instead of execute_webapi GET. " +
                "The tool checks both the live table and the recycle bin, returning full attributes if the record exists. " +
                "If not found anywhere, returns a clear notFound=true with a hint. " +
                "Use action='list' first if you don't have a specific GUID."),

            // Filter ngụ ý "đã xóa" — Dataverse OData filter không trả soft-deleted records.
            ("deletionstatecode", "manage_deleted_records",
                "REDIRECT: Standard OData $filter on 'deletionstatecode' or 'statecode eq 1' is unreliable for non-activity entities " +
                "(returns empty for account/contact default statecode=0 even after soft-delete). " +
                "Use manage_deleted_records(action='list', entity_name='<entity>') which uses FetchXml datasource='bin' " +
                "and returns records with modifiedOn ≈ delete time."),

            // Web API Restore action work (verified 2026-07-31) nhưng body phức tạp → dùng tool mới.
            ("restore", "manage_deleted_records",
                "REDIRECT (not blocked): Web API 'Restore' action works (returns 200 with restored id), " +
                "but requires complex body with @odata.id/@odata.type. " +
                "Use manage_deleted_records(action='restore', entity_name='<entity>', record_id='<guid>') " +
                "which uses the SDK OrganizationRequest('Restore') late-bound with a simple Entity param " +
                "and returns full per-record status (success/failed with reason). " +
                "Also supports batch via record_ids[].")
        ];

        private static readonly (string UrlPattern, string RedirectTool, string Reason)[] BlockedPostEndpoints =
        [
            // ── Publish ──
            ("publishxml", "publish_customizations",
                "PublishXml requires correctly formatted ParameterXml. The publish_customizations tool handles entity-specific vs all publishing with proper XML generation."),
            ("publishallxml", "publish_customizations",
                "PublishAllXml publishes ALL customizations. The publish_customizations tool provides a simpler interface with proper status reporting."),

            // ── Metadata Actions ──
            ("createoptionset", "manage_choice",
                "Creating option sets requires proper metadata structure. Use manage_choice for global option sets or upsert_column for local picklists."),
            ("updateoptionset", "manage_choice",
                "Updating option set metadata requires proper label handling. Use manage_choice for safe updates."),
            ("insertoptionvalue", "manage_choice or upsert_column",
                "Inserting option values requires correct value/label pairs. Use manage_choice (global) or upsert_column (local) for safe option management."),
            ("updateoptionvalue", "manage_choice or upsert_column",
                "Updating option value labels requires merge label handling. Use manage_choice (global) or upsert_column (local)."),
            ("deleteoptionvalue", "manage_choice or upsert_column",
                "Deleting option values is irreversible. Use manage_choice (global) or upsert_column (local) for safe deletion."),
            ("insertstatusvalue", "upsert_column",
                "Inserting statuscode values requires linking to a statecode. Use upsert_column with logical_name='statuscode' and add_options JSON including a 'state' field for the linked statecode value."),
            ("updatestatusvalue", "upsert_column",
                "Updating statuscode value labels requires merge label handling. Use upsert_column with logical_name='statuscode' and update_options."),
            ("deletestatusvalue", "upsert_column",
                "Deleting statuscode values is irreversible. Use upsert_column with logical_name='statuscode' and delete_options."),

            // ── Data endpoints with dedicated tools ──
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

            // ── Deleted Records — restore via Web API POST /Restore ───────
            // Web API Restore works (verified 2026-07-31) but body phức tạp → dùng tool mới.
            ("restore", "manage_deleted_records",
                "Web API 'Restore' action works (returns 200 with restored id) but requires complex body with @odata.id/@odata.type. " +
                "Use manage_deleted_records(action='restore', entity_name='<entity>', record_id='<guid>') " +
                "which uses the SDK OrganizationRequest('Restore') late-bound with a simple Entity param " +
                "and returns full per-record status (success/failed with reason). " +
                "Also supports batch via record_ids[].")
        ];

        private static string GetBlockedReason(HttpMethod method, string url)
        {
            var urlLower = url.ToLowerInvariant();

            // Phase 0: Special: GUID URL pattern — any <entity-set>(<guid>) URL → redirect to manage_deleted_records
            // (works for any HTTP method: GET, PATCH, PUT, DELETE).
            // Match pattern like 'accounts(abc-123)' or 'accounts(abc-123)/contacts' but NOT 'accounts?$filter=...'
            // Use regex: entityname(dash-separated-guid) optionally followed by /... — must be a balanced parens.
            if (IsEntityByIdUrl(url))
            {
                return "REDIRECT: For a single record GUID, use manage_deleted_records(action='detail', entity_name='<entity>', record_id='<guid>') instead of execute_webapi. " +
                       "The tool checks both the live table and the recycle bin, returning full attributes if the record exists. " +
                       "If not found anywhere, returns a clear notFound=true with a hint. " +
                       "Use action='list' first if you don't have a specific GUID.\n\nUSE INSTEAD: manage_deleted_records";
            }

            // Phase 1: Block POST on specific patterns (publish, metadata actions, dedicated-tool endpoints)
            if (method == HttpMethod.Post)
            {
                foreach (var (pattern, tool, reason) in BlockedPostEndpoints)
                {
                    if (urlLower.Contains(pattern))
                    {
                        var toolHint = tool != null
                            ? $"USE INSTEAD: {tool}"
                            : "Manage via Power Apps UI, PAC CLI, or DevKit CLI commands.";
                        return $"BLOCKED: Direct POST to {pattern} is not allowed via execute_webapi.\n\n" +
                               $"REASON: {reason}\n\n{toolHint}";
                    }
                }
            }

            // Phase 2: Redirect GET metadata endpoints to dedicated tools
            if (method == HttpMethod.Get)
            {
                foreach (var (pattern, tool, message) in RedirectedGetEndpoints)
                {
                    // Skip the placeholder __guid_url__ entry — handled in Phase 0 above
                    if (pattern == "__guid_url__") continue;
                    if (urlLower.Contains(pattern))
                        return $"{message}\n\nUSE INSTEAD: {tool}";
                }
            }

            // Phase 3: GET is always safe for non-metadata reads
            if (method == HttpMethod.Get || method == HttpMethod.Post)
                return null;

            // Phase 4: Block PATCH/PUT/DELETE on metadata/system/config endpoints
            foreach (var (pattern, tool, reason) in BlockedEndpoints)
            {
                if (urlLower.Contains(pattern.ToLowerInvariant()))
                {
                    var toolHint = tool != null
                        ? $"USE INSTEAD: {tool}"
                        : "Manage via Power Apps UI, PAC CLI, or DevKit CLI commands.";
                    return $"BLOCKED: Direct {method.Method} on {pattern.TrimEnd('(')} is not allowed via execute_webapi.\n\n" +
                           $"REASON: {reason}\n\n{toolHint}";
                }
            }

            return null;
        }

        // Match a URL that targets a specific record by GUID, e.g.:
        //   accounts(abc-123-def-456)
        //   accounts(abc-123)/contacts
        //   contacts(abc-123)?$select=name
        // Does NOT match $filter=... or $expand=... URLs.
        private static readonly System.Text.RegularExpressions.Regex GuidUrlPattern =
            new(@"^[A-Za-z_][A-Za-z0-9_]*\([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\)(\/|\?|$)", System.Text.RegularExpressions.RegexOptions.Compiled);

        private static bool IsEntityByIdUrl(string url)
        {
            if (string.IsNullOrWhiteSpace(url)) return false;
            return GuidUrlPattern.IsMatch(url.Trim());
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

        // Defensive parse: returns null header dict on empty input and a clean error
        // string on malformed JSON. No try/catch — uses TryParse + EnumerateObject so
        // the only throw path is the unexpected non-JsonException, which the top-level
        // catch routes through ThrowException with full context.
        private static Dictionary<string, List<string>> ParseHeaders(string headersJson, out string error)
        {
            error = null;
            if (string.IsNullOrWhiteSpace(headersJson))
                return null;

            var trimmed = headersJson.Trim();
            if (trimmed[0] != '{' || trimmed[^1] != '}')
            {
                error = $"Error: Invalid JSON in headers parameter — expected a JSON object (e.g. {{\"Prefer\":\"return=representation\"}}).\nInput: {headersJson}";
                return null;
            }

            using var doc = JsonDocument.Parse(trimmed);
            if (doc.RootElement.ValueKind != JsonValueKind.Object)
            {
                error = $"Error: Invalid JSON in headers parameter — expected a JSON object (e.g. {{\"Prefer\":\"return=representation\"}}).\nInput: {headersJson}";
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

        // Defensive JSON formatter: returns the original string unchanged on parse failure.
        // Note: Parse(string) throws JsonException on malformed input; we accept that here
        // because the input is the response body of a successful Web API call and is not
        // a place where "malformed shape is expected". Letting it throw is fine — the
        // caller's top-level catch routes it through ThrowException.
        private static string TryFormatJson(string json)
        {
            if (string.IsNullOrWhiteSpace(json))
                return json;
            using var doc = JsonDocument.Parse(json);
            return JsonSerializer.Serialize(doc, new JsonSerializerOptions { WriteIndented = true });
        }
    }
}

using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ParseRecordUrlTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;

        public ParseRecordUrlTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "parse_record_url", Title = "Parse a Dynamics 365 URL to entity and record ID",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(ParsedRecordUrlResult)),
        Description(
            "Parse a Dataverse/Power Platform URL or raw GUID into record and environment identifiers.\n\n" +
            "WHEN TO USE:\n" +
            "- Call first when the user pastes a model-driven app, Web API, maker, admin, or legacy URL\n" +
            "- Extract a GUID while preserving its URL context\n\n" +
            "RELATED TOOLS:\n" +
            "- manage_record → read or change a parsed record\n" +
            "- get_tables → resolve or verify an unknown entity logical name")]
        public CallToolResult parse_record_url(
            [Description("URL, GUID, or text. URL-decoded automatically; first matching parser wins.")] string input)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(input))
                    return Error("input is required.",
                        "Provide a Dynamics 365 URL, Web API URL, maker portal URL, or raw GUID.");

                var decoded = Uri.UnescapeDataString(input.Trim());

                // Try each parser in priority order
                var result = TryParseMainAspx(decoded)
                          ?? TryParseWebApi(decoded)
                          ?? TryParseMakerPortal(decoded)
                          ?? TryParseLegacyUrls(decoded)
                          ?? TryParseRawGuid(decoded);

                if (result == null)
                    return Error("No GUID found in input.",
                        "Provide a Dynamics 365 URL, Web API URL, maker portal URL, or raw GUID.");

                return Success(BuildCompactText(result), result);
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        // ── Priority 1: Model-Driven App URLs (main.aspx) ─────────────────────────

        private ParsedRecordUrlResult TryParseMainAspx(string input)
        {
            if (input.IndexOf("main.aspx", StringComparison.OrdinalIgnoreCase) < 0)
                return null;

            var queryString = ExtractQueryString(input);
            if (queryString == null) return null;

            var qs = HttpUtility.ParseQueryString(queryString);
            var id = CleanGuid(qs["id"]);
            var viewId = CleanGuid(qs["viewid"]);
            var etn = qs["etn"];
            var etcStr = qs["etc"];
            var pageType = qs["pagetype"];

            // entitylist with viewid → savedquery
            if (string.Equals(pageType, "entitylist", StringComparison.OrdinalIgnoreCase) && viewId != null)
            {
                var entityName = !string.IsNullOrEmpty(etn) ? etn.ToLowerInvariant() : "(unknown)";
                return FormatResult(entityName, viewId, "main.aspx (entitylist+viewid)");
            }

            // entityrecord with id
            if (id != null)
            {
                if (!string.IsNullOrEmpty(etn))
                    return FormatResult(etn.ToLowerInvariant(), id, "main.aspx (etn+id)");

                if (!string.IsNullOrEmpty(etcStr) && int.TryParse(etcStr, out var etc))
                {
                    var resolved = ResolveEntityTypeCode(etc);
                    var source = resolved != null
                        ? "main.aspx (etc+id, resolved)"
                        : "main.aspx (etc+id, unresolved)";
                    return FormatResult(resolved ?? $"(etc={etc})", id, source);
                }

                return FormatResult("(unknown)", id, "main.aspx (id only)");
            }

            return null;
        }

        // ── Priority 2: Dataverse Web API URLs ────────────────────────────────────

        private static readonly Regex WebApiRegex = new(
            @"api/data/v[\d.]+/(\w+)\(([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})\)",
            RegexOptions.IgnoreCase | RegexOptions.Compiled);

        private ParsedRecordUrlResult TryParseWebApi(string input)
        {
            var match = WebApiRegex.Match(input);
            if (!match.Success) return null;

            var entitySetName = match.Groups[1].Value;
            var guid = match.Groups[2].Value.ToLowerInvariant();

            var logicalName = ResolveEntitySetName(entitySetName);
            var source = logicalName != null
                ? "Web API (resolved)"
                : "Web API (unresolved)";

            // Keep the entity-set name in its own field: when resolution fails,
            // entityName stays null instead of borrowing the set name (different semantic).
            return new ParsedRecordUrlResult
            {
                EntityName = logicalName,
                EntitySetName = entitySetName,
                RecordId = guid,
                Source = source,
                Tip = logicalName == null
                    ? $"Resolve entity set name '{entitySetName}' with get_tables"
                    : null
            };
        }

        // ── Priority 3: Power Platform Maker Portal URLs ──────────────────────────

        private static readonly Regex MakerFlowRunRegex = new(
            @"(?:make\.powerapps\.com|make\.powerautomate\.com)/environments/([0-9a-fA-F-]+)/flows/([0-9a-fA-F-]+)/runs/([0-9a-fA-F-]+)",
            RegexOptions.IgnoreCase | RegexOptions.Compiled);

        private static readonly Regex MakerFlowRegex = new(
            @"(?:make\.powerapps\.com|make\.powerautomate\.com)/environments/([0-9a-fA-F-]+)/flows/([0-9a-fA-F-]+)",
            RegexOptions.IgnoreCase | RegexOptions.Compiled);

        private static readonly Regex MakerSolutionRegex = new(
            @"make\.powerapps\.com/environments/([0-9a-fA-F-]+)/solutions/([^\s/]+)",
            RegexOptions.IgnoreCase | RegexOptions.Compiled);

        private static readonly Regex AdminPortalRegex = new(
            @"admin\.powerplatform\.microsoft\.com/environments/([0-9a-fA-F-]+)",
            RegexOptions.IgnoreCase | RegexOptions.Compiled);

        private static ParsedRecordUrlResult TryParseMakerPortal(string input)
        {
            // Flow run (most specific first)
            var match = MakerFlowRunRegex.Match(input);
            if (match.Success)
            {
                // The character-class regex cannot prove GUID shape; reject
                // malformed ids instead of returning them as valid identifiers.
                if (!Guid.TryParse(match.Groups[1].Value, out var envGuid) ||
                    !Guid.TryParse(match.Groups[2].Value, out var flowGuid) ||
                    !Guid.TryParse(match.Groups[3].Value, out var runGuid))
                    return null;
                return FormatMakerResult("flowsession", runGuid.ToString().ToLowerInvariant(),
                    envGuid.ToString().ToLowerInvariant(),
                    "make.powerautomate.com (flow run)", flowGuid.ToString().ToLowerInvariant());
            }

            // Flow
            match = MakerFlowRegex.Match(input);
            if (match.Success)
            {
                if (!Guid.TryParse(match.Groups[1].Value, out var envGuid) ||
                    !Guid.TryParse(match.Groups[2].Value, out var flowGuid))
                    return null;
                return FormatMakerResult("workflow", flowGuid.ToString().ToLowerInvariant(),
                    envGuid.ToString().ToLowerInvariant(), "make.powerautomate.com (flow)");
            }

            // Solution
            match = MakerSolutionRegex.Match(input);
            if (match.Success)
            {
                if (!Guid.TryParse(match.Groups[1].Value, out var envGuid))
                    return null;
                var envId = envGuid.ToString().ToLowerInvariant();
                var solRaw = match.Groups[2].Value;
                if (Guid.TryParse(solRaw, out var solGuid))
                    return FormatMakerResult("solution", solGuid.ToString().ToLowerInvariant(), envId, "make.powerapps.com (solution)");
                else
                    return FormatMakerResult("solution", solRaw.ToLowerInvariant(), envId, "make.powerapps.com (solution, unique name - not a record GUID)");
            }

            // Admin portal
            match = AdminPortalRegex.Match(input);
            if (match.Success)
            {
                if (!Guid.TryParse(match.Groups[1].Value, out var envGuid))
                    return null;
                var envId = envGuid.ToString().ToLowerInvariant();
                return FormatMakerResult("environment", envId, envId, "admin.powerplatform.microsoft.com");
            }

            return null;
        }

        // ── Priority 4: Legacy / Specialized URLs ─────────────────────────────────

        private static ParsedRecordUrlResult TryParseLegacyUrls(string input)
        {
            // Dialog: rundialog.aspx?DialogId={guid}&EntityName={entity}&ObjectId={guid}
            if (input.IndexOf("rundialog.aspx", StringComparison.OrdinalIgnoreCase) >= 0)
            {
                var qs = ExtractAndParseQueryString(input);
                if (qs != null)
                {
                    var entityName = qs["EntityName"];
                    var objectId = CleanGuid(qs["ObjectId"]);
                    if (objectId != null && !string.IsNullOrEmpty(entityName))
                        return FormatResult(entityName.ToLowerInvariant(), objectId, "rundialog.aspx (EntityName+ObjectId)");

                    var dialogId = CleanGuid(qs["DialogId"]);
                    if (dialogId != null)
                    {
                        var source = !string.IsNullOrEmpty(entityName)
                            ? $"rundialog.aspx (DialogId, targets {entityName.ToLowerInvariant()})"
                            : "rundialog.aspx (DialogId only)";
                        return FormatResult("workflow", dialogId, source);
                    }
                }
            }

            // Workflow editor: sfa/workflow/edit.aspx?id={guid}
            if (input.IndexOf("workflow/edit.aspx", StringComparison.OrdinalIgnoreCase) >= 0)
            {
                var qs = ExtractAndParseQueryString(input);
                var id = CleanGuid(qs?["id"]);
                if (id != null)
                    return FormatResult("workflow", id, "sfa/workflow/edit.aspx");
            }

            // Report viewer: crmreports/viewer/viewer.aspx?id={guid}
            if (input.IndexOf("viewer/viewer.aspx", StringComparison.OrdinalIgnoreCase) >= 0 ||
                input.IndexOf("crmreports/viewer", StringComparison.OrdinalIgnoreCase) >= 0)
            {
                var qs = ExtractAndParseQueryString(input);
                var id = CleanGuid(qs?["id"]);
                if (id != null)
                    return FormatResult("report", id, "crmreports/viewer/viewer.aspx");
            }

            // Solution editor: tools/solution/edit.aspx?id={guid}
            if (input.IndexOf("solution/edit.aspx", StringComparison.OrdinalIgnoreCase) >= 0)
            {
                var qs = ExtractAndParseQueryString(input);
                var id = CleanGuid(qs?["id"]);
                if (id != null)
                    return FormatResult("solution", id, "tools/solution/edit.aspx");
            }

            return null;
        }

        // ── Priority 5: Raw GUID ──────────────────────────────────────────────────

        private static readonly Regex GuidRegex = new(
            @"\{?([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})\}?",
            RegexOptions.Compiled);

        private static ParsedRecordUrlResult TryParseRawGuid(string input)
        {
            var match = GuidRegex.Match(input);
            if (!match.Success) return null;

            var guid = match.Groups[1].Value.ToLowerInvariant();

            return new ParsedRecordUrlResult
            {
                EntityName = "(unknown)",
                RecordId = guid,
                Source = "raw GUID",
                Tip = "Provide entity name or use a Dynamics 365 URL for automatic detection"
            };
        }

        // ── Dataverse resolution helpers ──────────────────────────────────────────

        private string ResolveEntityTypeCode(int objectTypeCode)
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            };
            var response = (RetrieveAllEntitiesResponse)_serviceClient.Execute(request);
            var entity = response.EntityMetadata
                .FirstOrDefault(e => e.ObjectTypeCode == objectTypeCode);
            return entity?.LogicalName;
        }

        private string ResolveEntitySetName(string entitySetName)
        {
            if (_serviceClient == null)
                return null;

            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            };
            var response = (RetrieveAllEntitiesResponse)_serviceClient.Execute(request);
            var entity = response.EntityMetadata
                .FirstOrDefault(e => string.Equals(e.EntitySetName, entitySetName, StringComparison.OrdinalIgnoreCase));
            return entity?.LogicalName;
        }

        // ── Formatting helpers ────────────────────────────────────────────────────

        private static ParsedRecordUrlResult FormatResult(string entityName, string recordId, string source)
        {
            return new ParsedRecordUrlResult
            {
                EntityName = entityName,
                RecordId = recordId,
                Source = source
            };
        }

        private static ParsedRecordUrlResult FormatMakerResult(string entityName, string recordId, string environmentId, string source, string flowId = null)
        {
            return new ParsedRecordUrlResult
            {
                EntityName = entityName,
                RecordId = recordId,
                EnvironmentId = environmentId,
                Source = source,
                FlowId = flowId
            };
        }

        private static string BuildCompactText(ParsedRecordUrlResult result)
        {
            var entityName = string.IsNullOrWhiteSpace(result.EntityName) ? "(unknown)" : result.EntityName;
            var recordId = string.IsNullOrWhiteSpace(result.RecordId) ? "(none)" : result.RecordId;
            return $"[Success] {entityName} {recordId} ({result.Source}).";
        }

        private static string CleanGuid(string value)
        {
            if (string.IsNullOrWhiteSpace(value)) return null;
            var cleaned = Uri.UnescapeDataString(value.Trim())
                .Trim('{', '}', ' ');
            return Guid.TryParse(cleaned, out var guid) ? guid.ToString().ToLowerInvariant() : null;
        }

        private static string ExtractQueryString(string input)
        {
            var idx = input.IndexOf('?');
            if (idx < 0) return null;
            var qs = input.Substring(idx);
            var hashIdx = qs.IndexOf('#');
            return hashIdx >= 0 ? qs.Substring(0, hashIdx) : qs;
        }

        private static System.Collections.Specialized.NameValueCollection ExtractAndParseQueryString(string input)
        {
            var queryString = ExtractQueryString(input);
            return queryString != null ? HttpUtility.ParseQueryString(queryString) : null;
        }
    }
}

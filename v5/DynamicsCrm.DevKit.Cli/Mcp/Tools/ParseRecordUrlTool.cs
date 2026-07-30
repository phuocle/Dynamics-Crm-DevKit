using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Linq;
using System.Text;
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
            "Parse a Dataverse/Power Platform URL or raw GUID → entity logical name + record ID. " +
            "Supports main.aspx, Web API, maker portal, legacy URLs. " +
            "EntityName='(unknown)' = GUID only; ask user for entity. " +
            "Call FIRST when user pastes a URL.")]
        public CallToolResult parse_record_url(
            [Description(
                "URL, GUID, or text. URL-decoded automatically; first matching parser wins."
            )] string input)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(input))
                    return Error("[Error] input is required.",
                        "Provide a Dynamics 365 URL, Web API URL, maker portal URL, or raw GUID.");

                var decoded = Uri.UnescapeDataString(input.Trim());

                // Try each parser in priority order
                var result = TryParseMainAspx(decoded)
                          ?? TryParseWebApi(decoded)
                          ?? TryParseMakerPortal(decoded)
                          ?? TryParseLegacyUrls(decoded)
                          ?? TryParseRawGuid(decoded);

                if (result == null)
                    return Error("[Error] No GUID found in input.",
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

            return FormatResult(logicalName ?? entitySetName, guid, source);
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
                var envId = match.Groups[1].Value.ToLowerInvariant();
                var flowId = match.Groups[2].Value.ToLowerInvariant();
                var runId = match.Groups[3].Value.ToLowerInvariant();
                return FormatMakerResult("flowsession", runId, envId,
                    "make.powerautomate.com (flow run)", flowId);
            }

            // Flow
            match = MakerFlowRegex.Match(input);
            if (match.Success)
            {
                var envId = match.Groups[1].Value.ToLowerInvariant();
                var flowId = match.Groups[2].Value.ToLowerInvariant();
                return FormatMakerResult("workflow", flowId, envId, "make.powerautomate.com (flow)");
            }

            // Solution
            match = MakerSolutionRegex.Match(input);
            if (match.Success)
            {
                var envId = match.Groups[1].Value.ToLowerInvariant();
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
                var envId = match.Groups[1].Value.ToLowerInvariant();
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
            var sb = new StringBuilder(128);
            sb.Append($"[Success] {result.EntityName} {result.RecordId} ({result.Source})");
            if (!string.IsNullOrWhiteSpace(result.EnvironmentId))
                sb.Append($" env={result.EnvironmentId}");
            if (!string.IsNullOrWhiteSpace(result.FlowId))
                sb.Append($" flow={result.FlowId}");
            if (!string.IsNullOrWhiteSpace(result.Tip))
                sb.Append($". {result.Tip}");
            sb.Append('.');
            return sb.ToString();
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

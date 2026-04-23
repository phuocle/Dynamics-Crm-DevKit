using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class CreateRecordsTool
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;

        public CreateRecordsTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
        }

        private const int MaxRecords = 5000;
        private const int MaxParallelism = 52;

        [McpServerTool(Name = "create_records", Title = "Create multiple records in parallel",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(BatchCreateResult)),
        Description(
            "Create multiple Dataverse records in parallel — optimized for data migration.\n" +
            "Uses Parallel.ForEachAsync + CreateAsync (MS recommended pattern for max throughput).\n" +
            "ServiceClient handles Retry-After automatically. Supports partial failure.\n\n" +

            "DEFAULT (notice in output when not provided):\n" +
            "  max_parallelism: from server x-ms-dop-hint (typically 4–8 for cloud). Hard limit: 52.\n\n" +

            "TIPS:\n" +
            "- records_json: JSON array, each element = fields_json format from manage_record\n" +
            "- Partial failure: failed records reported per-item, others still created\n" +
            "- Lookup fields: use \"fieldname@targetentity\" syntax for polymorphic lookups\n" +
            "- For on-prem or throttled envs: use max_parallelism=1 or 2\n" +
            "- Max 5000 records per call")]
        public async Task<CallToolResult> create_records(
            [Description(
                "Entity logical name (e.g., 'account'). Required."
            )] string entity_name,
            [Description(
                "JSON array of field objects. Each element uses the same format as manage_record's fields_json. Max 5000 elements."
            )] string records_json,
            [Description(
                "Max concurrent requests. 0 (default) = use server hint (x-ms-dop-hint). Clamped to 1–52."
            )] int max_parallelism = 0)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");

            if (string.IsNullOrWhiteSpace(records_json))
                return ErrorResult("Error: records_json is required. Provide a JSON array of field objects.");

            var entityName = entity_name.Trim().ToLowerInvariant();

            JsonElement[] elements;
            try
            {
                var doc = JsonDocument.Parse(records_json);
                if (doc.RootElement.ValueKind != JsonValueKind.Array)
                    return ErrorResult("Error: records_json must be a JSON array.");

                elements = doc.RootElement.EnumerateArray().ToArray();
            }
            catch (JsonException ex)
            {
                return ErrorResult($"Error: Invalid JSON in records_json: {ex.Message}");
            }

            if (elements.Length == 0)
                return ErrorResult("Error: records_json array is empty.");

            if (elements.Length > MaxRecords)
                return ErrorResult($"Error: records_json has {elements.Length} elements. Max is {MaxRecords}.");

            var usedDefault = max_parallelism <= 0;
            var parallelism = usedDefault
                ? Math.Max(1, _serviceClient.RecommendedDegreesOfParallelism)
                : max_parallelism;
            parallelism = Math.Clamp(parallelism, 1, MaxParallelism);

            if (_options.DryRun)
                return DryRunResult($"Would CREATE {elements.Length} '{entityName}' records (parallelism={parallelism}).");

            var parsedItems = new (int index, Microsoft.Xrm.Sdk.Entity entity, string error)[elements.Length];

            // Pre-warm metadata cache with first item
            try
            {
                parsedItems[0] = (0, EntityParserHelper.ParseFieldsToEntity(_serviceClient, entityName, elements[0].GetRawText()), null);
            }
            catch (Exception ex)
            {
                parsedItems[0] = (0, null, ex.Message);
            }

            // Parse remaining items sequentially (metadata cached after first)
            for (var i = 1; i < elements.Length; i++)
            {
                try
                {
                    parsedItems[i] = (i, EntityParserHelper.ParseFieldsToEntity(_serviceClient, entityName, elements[i].GetRawText()), null);
                }
                catch (Exception ex)
                {
                    parsedItems[i] = (i, null, ex.Message);
                }
            }

            var parseFailures = parsedItems.Where(x => x.error != null).ToList();
            var validItems = parsedItems.Where(x => x.error == null).ToList();

            var results = new ConcurrentBag<BatchCreateItem>();

            foreach (var pf in parseFailures)
                results.Add(new BatchCreateItem { Index = pf.index, Status = "failed", Error = pf.error });

            var oldAffinity = _serviceClient.EnableAffinityCookie;
            var sw = Stopwatch.StartNew();
            try
            {
                _serviceClient.EnableAffinityCookie = false;

                await Parallel.ForEachAsync(validItems, new ParallelOptions
                {
                    MaxDegreeOfParallelism = parallelism
                }, async (item, ct) =>
                {
                    try
                    {
                        var id = await _serviceClient.CreateAsync(item.entity, ct);
                        results.Add(new BatchCreateItem { Index = item.index, Id = id.ToString(), Status = "created" });
                    }
                    catch (Exception ex)
                    {
                        results.Add(new BatchCreateItem { Index = item.index, Status = "failed", Error = ex.Message });
                    }
                });
            }
            finally
            {
                _serviceClient.EnableAffinityCookie = oldAffinity;
            }
            sw.Stop();

            var sortedItems = results.OrderBy(x => x.Index).ToList();
            var succeeded = sortedItems.Count(x => x.Status == "created");
            var failed = sortedItems.Count(x => x.Status == "failed");

            var structured = new BatchCreateResult
            {
                Entity = entityName,
                Total = elements.Length,
                Succeeded = succeeded,
                Failed = failed,
                DurationSeconds = Math.Round(sw.Elapsed.TotalSeconds, 1),
                Parallelism = parallelism,
                UsedDefaultParallelism = usedDefault,
                Items = sortedItems
            };

            var sb = new StringBuilder(256);

            if (usedDefault)
            {
                sb.AppendLine($"Applied default parallelism = {parallelism} (from server hint x-ms-dop-hint; hard limit: {MaxParallelism})");
                sb.AppendLine("Tip: provide max_parallelism explicitly to suppress this notice.");
                sb.AppendLine();
            }

            sb.AppendLine($"Created {succeeded}/{elements.Length} '{entityName}' records in {structured.DurationSeconds}s ({parallelism} concurrent)");

            if (failed > 0)
            {
                sb.AppendLine();
                sb.AppendLine("Failed records:");
                foreach (var item in sortedItems.Where(x => x.Status == "failed"))
                    sb.AppendLine($"  [{item.Index}] {item.Error}");
            }

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };

        private static CallToolResult DryRunResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = $"[DRY-RUN] {message}\nNo changes were made." }]
        };
    }
}

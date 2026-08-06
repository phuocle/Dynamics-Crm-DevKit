using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using SysConsole = System.Console;

namespace Dev.AllInOne.Console
{
    public class Program
    {
        private const string RecycleBinConfigTable = "recyclebinconfig";
        private const string OrganizationRowName = "organization";
        private const int ProcessTableForRecycleBinOperationType = 104;
        private static readonly Guid ReportedFailedJobId = new Guid("03b2fac2-d48f-f111-b8da-70a8a5aea0ed");

        public static int Main(string[] args)
        {
            SysConsole.OutputEncoding = Encoding.UTF8;

            ServiceClient serviceClient;
            try
            {
                serviceClient = App.Service;
            }
            catch (Exception ex)
            {
                SysConsole.WriteLine("[FATAL] App.Service: " + ex.Message);
                return 2;
            }

            if (serviceClient == null || !serviceClient.IsReady)
            {
                SysConsole.WriteLine("[FATAL] App.Service is not ready: " +
                    (serviceClient == null ? "null" : serviceClient.LastError));
                return 2;
            }

            try
            {
                var repair = args.Any(a => a.Equals("--repair", StringComparison.OrdinalIgnoreCase));
                var scanTables = args.Any(a => a.Equals("--scan-tables", StringComparison.OrdinalIgnoreCase));
                var forceDeleteAll = args.Any(a => a.Equals("--force-delete-all", StringComparison.OrdinalIgnoreCase));
                var compareProblemRows = args.Any(a => a.Equals("--compare-problem-rows", StringComparison.OrdinalIgnoreCase));
                var probeTrace = args.Any(a => a.Equals("--probe-trace", StringComparison.OrdinalIgnoreCase));
                SysConsole.WriteLine("Connected: " + serviceClient.ConnectedOrgUriActual);
                SysConsole.WriteLine("Mode: " + (forceDeleteAll ? "FORCE DELETE ALL (destructive)" : repair ? "REPAIR" : scanTables ? "TABLE SCAN (read-only)" : compareProblemRows ? "COMPARE PROBLEM ROWS (read-only)" : probeTrace ? "PROBE PLUGIN TRACE (read-only)" : "AUDIT (read-only)"));
                SysConsole.WriteLine();

                if (probeTrace)
                    return ProbePluginTraceLogs(serviceClient);

                PrintReportedJob(serviceClient);
                PrintRecentProvisioningJobs(serviceClient);
                var rows = GetAllConfigRows(serviceClient);
                PrintConfigSummary(rows);

                if (forceDeleteAll)
                    return ForceDeleteAllConfigs(serviceClient, rows);

                if (compareProblemRows)
                    return CompareProblemRows(serviceClient);

                if (scanTables)
                    return ScanPerTableConfigs(serviceClient, rows);

                if (!repair)
                {
                    PrintAuditConclusion(serviceClient, rows);
                    return 0;
                }

                return Repair(serviceClient, rows);
            }
            catch (FaultException<OrganizationServiceFault> ex)
            {
                SysConsole.WriteLine("[FAULT] " + ex.Detail.ErrorCode + ": " + ex.Detail.Message);
                return 1;
            }
            catch (Exception ex)
            {
                SysConsole.WriteLine("[ERROR] " + ex.GetType().Name + ": " + ex.Message);
                return 1;
            }
        }

        private static int ProbePluginTraceLogs(ServiceClient serviceClient)
        {
            // ── 1. Retrieve all attributes of plugintracelog (metadata) ────────
            SysConsole.WriteLine("=== plugintracelog entity metadata ===");
            var metaReq = new RetrieveEntityRequest
            {
                EntityFilters = Microsoft.Xrm.Sdk.Metadata.EntityFilters.Attributes,
                LogicalName = "plugintracelog"
            };
            var metaResp = (RetrieveEntityResponse)serviceClient.Execute(metaReq);
            var attrs = metaResp.EntityMetadata.Attributes
                .OrderBy(a => a.LogicalName)
                .ToList();
            SysConsole.WriteLine("Attribute count: " + attrs.Count);
            foreach (var a in attrs)
            {
                var typeName = a.AttributeType?.ToString() ?? "?";
                if (a is Microsoft.Xrm.Sdk.Metadata.PicklistAttributeMetadata pick)
                    typeName += " (OptionSet)";
                if (a is Microsoft.Xrm.Sdk.Metadata.BooleanAttributeMetadata boolAttr)
                    typeName += " (Boolean)";
                SysConsole.WriteLine($"  {a.LogicalName,-35} {typeName,-20} IsValidForRead={a.IsValidForRead ?? false} IsLogical={a.IsLogical ?? false}");
            }
            SysConsole.WriteLine();

            // ── 2. Retrieve top 3 rows with ALL columns ────────────────────────
            SysConsole.WriteLine("=== plugintracelog top 3 rows (all columns) ===");
            var query = new QueryExpression("plugintracelog")
            {
                ColumnSet = new ColumnSet(true),
                PageInfo = new PagingInfo { Count = 3, PageNumber = 1 },
                Orders = { new OrderExpression("createdon", OrderType.Descending) }
            };
            var result = serviceClient.RetrieveMultiple(query);
            SysConsole.WriteLine("Rows returned: " + result.Entities.Count);
            SysConsole.WriteLine();

            foreach (var e in result.Entities)
            {
                SysConsole.WriteLine("--- Row " + e.Id + " ---");
                foreach (var key in e.Attributes.Keys.OrderBy(k => k))
                {
                    var val = e.Attributes[key];
                    string valStr;
                    if (val is OptionSetValue osv)
                        valStr = $"OptionSetValue({osv.Value})";
                    else if (val is EntityReference er)
                        valStr = $"EntityReference({er.LogicalName}:{er.Id})";
                    else if (val is bool b)
                        valStr = $"bool({b})";
                    else if (val is Guid g)
                        valStr = $"Guid({g})";
                    else if (val is int i)
                        valStr = $"int({i})";
                    else if (val is DateTime dt)
                        valStr = $"DateTime({dt:O})";
                    else if (val == null)
                        valStr = "null";
                    else
                        valStr = val.ToString();
                    SysConsole.WriteLine($"  {key,-35} = {valStr}");
                }
                // FormattedValues
                if (e.FormattedValues.Count > 0)
                {
                    SysConsole.WriteLine("  -- FormattedValues --");
                    foreach (var fv in e.FormattedValues.OrderBy(f => f.Key))
                        SysConsole.WriteLine($"  {fv.Key,-35} => \"{fv.Value}\"");
                }
                SysConsole.WriteLine();
            }

            // ── 3. Test each candidate field individually ──────────────────────
            SysConsole.WriteLine("=== Field-by-field probe (candidate fields) ===");
            var candidates = new[]
            {
                "plugintracelogid", "typename", "messagename", "primaryentity",
                "mode", "operationtype", "depth", "performanceexecutionduration",
                "correlationid", "pluginstepid", "requestid", "issystemcreated",
                "createdon", "messageblock", "exceptiondetails"
            };
            foreach (var field in candidates)
            {
                try
                {
                    var q = new QueryExpression("plugintracelog")
                    {
                        ColumnSet = new ColumnSet(field),
                        PageInfo = new PagingInfo { Count = 1, PageNumber = 1 },
                        Orders = { new OrderExpression("createdon", OrderType.Descending) }
                    };
                    var r = serviceClient.RetrieveMultiple(q);
                    var row = r.Entities.FirstOrDefault();
                    if (row != null && row.Contains(field))
                    {
                        var v = row[field];
                        var type = v?.GetType().Name ?? "null";
                        SysConsole.WriteLine($"  {field,-35} OK  type={type}");
                    }
                    else
                    {
                        SysConsole.WriteLine($"  {field,-35} OK  (no value in row)");
                    }
                }
                catch (Exception ex)
                {
                    SysConsole.WriteLine($"  {field,-35} FAIL {ex.GetType().Name}: {ex.Message}");
                }
            }

            return 0;
        }

        private static int CompareProblemRows(ServiceClient serviceClient)
        {
            var query = new QueryExpression(RecycleBinConfigTable)
            {
                ColumnSet = new ColumnSet(true),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("name", ConditionOperator.NotEqual, OrganizationRowName)
                    }
                },
                PageInfo = new PagingInfo { Count = 5000, PageNumber = 1 }
            };
            var rows = RetrieveAll(serviceClient, query);
            var targets = new[] { "activityparty", "aciviewmapper", "account", "activitypointer" };
            var columns = rows.SelectMany(r => r.Attributes.Keys).Distinct(StringComparer.OrdinalIgnoreCase).OrderBy(x => x).ToList();

            SysConsole.WriteLine("Full-column comparison across " + rows.Count + " per-table rows");
            foreach (var targetName in targets)
            {
                var target = rows.FirstOrDefault(r => Name(r).Equals(targetName, StringComparison.OrdinalIgnoreCase));
                SysConsole.WriteLine();
                SysConsole.WriteLine("[" + targetName + "] " + (target == null ? "not found" : target.Id.ToString()));
                if (target == null) continue;
                foreach (var column in columns)
                {
                    var targetValue = ComparableValue(target, column);
                    var distribution = rows
                        .GroupBy(r => ComparableValue(r, column), StringComparer.OrdinalIgnoreCase)
                        .OrderByDescending(g => g.Count())
                        .ToList();
                    var sameCount = distribution.FirstOrDefault(g => string.Equals(g.Key, targetValue, StringComparison.OrdinalIgnoreCase))?.Count() ?? 0;
                    var mode = distribution.First();
                    var marker = string.Equals(targetValue, mode.Key, StringComparison.OrdinalIgnoreCase) ? "" : "  <-- differs from mode";
                    SysConsole.WriteLine("  " + column + " = " + targetValue + "  [same=" + sameCount + "/" + rows.Count + ", mode=" + mode.Key + " x" + mode.Count() + "]" + marker);
                }
            }

            SysConsole.WriteLine();
            SysConsole.WriteLine("No row or system job was changed.");
            return 0;
        }

        private static string ComparableValue(Entity row, string column)
        {
            object value;
            if (!row.Attributes.TryGetValue(column, out value) || value == null) return "(null)";
            var option = value as OptionSetValue;
            if (option != null) return option.Value.ToString();
            var reference = value as EntityReference;
            if (reference != null) return reference.LogicalName + ":" + reference.Id;
            var managed = value as BooleanManagedProperty;
            if (managed != null) return managed.Value.ToString();
            var money = value as Money;
            if (money != null) return money.Value.ToString();
            return Convert.ToString(value);
        }

        private static int ForceDeleteAllConfigs(ServiceClient serviceClient, List<Entity> snapshot)
        {
            var perTableRows = snapshot.Where(r => !IsOrganizationRow(r)).ToList();
            var failures = new ConcurrentBag<string>();
            const int maxParallelDeletes = 16;
            var completed = 0;

            SysConsole.WriteLine("[DESTRUCTIVE] Snapshot contains " + perTableRows.Count + " per-table row(s) and " +
                snapshot.Count(IsOrganizationRow) + " organization row(s).");
            SysConsole.WriteLine("Deleting per-table rows directly, max parallelism " + maxParallelDeletes + " ...");

            Parallel.ForEach(
                perTableRows,
                new ParallelOptions { MaxDegreeOfParallelism = maxParallelDeletes },
                () => serviceClient.Clone(),
                (row, loopState, workerClient) =>
                {
                    try
                    {
                        workerClient.Delete(RecycleBinConfigTable, row.Id);
                    }
                    catch (Exception ex)
                    {
                        failures.Add(Name(row) + " " + row.Id + ": " + ex.GetBaseException().Message);
                    }

                    var count = Interlocked.Increment(ref completed);
                    if (count % 25 == 0 || count == perTableRows.Count)
                        SysConsole.WriteLine("  completed " + count + "/" + perTableRows.Count);
                    return workerClient;
                },
                workerClient => workerClient.Dispose());

            SysConsole.WriteLine("Per-table delete failures: " + failures.Count);
            foreach (var failure in failures.Take(20))
                SysConsole.WriteLine("  " + failure);
            if (failures.Count > 20)
                SysConsole.WriteLine("  ... " + (failures.Count - 20) + " more failure(s)");

            var remainingAfterTables = GetAllConfigRows(serviceClient);
            var orgRows = remainingAfterTables.Where(IsOrganizationRow).ToList();
            SysConsole.WriteLine("Deleting " + orgRows.Count + " remaining organization row(s) last ...");
            foreach (var orgRow in orgRows)
            {
                try
                {
                    serviceClient.Delete(RecycleBinConfigTable, orgRow.Id);
                }
                catch (Exception ex)
                {
                    failures.Add(orgRow.Id + ": organization delete: " + ex.Message);
                    SysConsole.WriteLine("  organization delete failed: " + ex.Message);
                }
            }

            var remaining = GetAllConfigRows(serviceClient);
            SysConsole.WriteLine();
            SysConsole.WriteLine("Final verification: " + remaining.Count + " RecycleBinConfig row(s) remain.");
            if (remaining.Count == 0)
            {
                SysConsole.WriteLine("[PASS] RecycleBinConfig is empty.");
                return 0;
            }

            foreach (var row in remaining.Take(50))
                SysConsole.WriteLine("  remaining: " + Name(row) + " " + row.Id);
            if (remaining.Count > 50)
                SysConsole.WriteLine("  ... " + (remaining.Count - 50) + " more row(s)");
            return 1;
        }

        private sealed class TableScanResult
        {
            public Entity Config { get; set; }
            public string BinQueryStatus { get; set; }
            public int? ErrorCode { get; set; }
            public string Error { get; set; }
        }

        private static int ScanPerTableConfigs(ServiceClient serviceClient, List<Entity> allRows)
        {
            var configs = allRows.Where(r => !IsOrganizationRow(r) && !string.IsNullOrWhiteSpace(Name(r))).ToList();
            var results = new List<TableScanResult>(configs.Count);

            SysConsole.WriteLine("Scanning " + configs.Count + " per-table configurations via datasource='bin' ...");
            const int batchSize = 100;
            for (var offset = 0; offset < configs.Count; offset += batchSize)
            {
                var batch = configs.Skip(offset).Take(batchSize).ToList();
                var request = new ExecuteMultipleRequest
                {
                    Settings = new ExecuteMultipleSettings
                    {
                        ContinueOnError = true,
                        ReturnResponses = true
                    },
                    Requests = new OrganizationRequestCollection()
                };

                foreach (var config in batch)
                {
                    request.Requests.Add(new RetrieveMultipleRequest
                    {
                        Query = new QueryExpression(Name(config))
                        {
                            ColumnSet = new ColumnSet(false),
                            DataSource = "bin",
                            TopCount = 1,
                            NoLock = true
                        }
                    });
                }

                var response = (ExecuteMultipleResponse)serviceClient.Execute(request);
                var byIndex = response.Responses.ToDictionary(r => r.RequestIndex);
                for (var i = 0; i < batch.Count; i++)
                {
                    ExecuteMultipleResponseItem item;
                    if (!byIndex.TryGetValue(i, out item))
                    {
                        results.Add(new TableScanResult { Config = batch[i], BinQueryStatus = "NO_RESPONSE" });
                    }
                    else if (item.Fault != null)
                    {
                        results.Add(new TableScanResult
                        {
                            Config = batch[i],
                            BinQueryStatus = "FAULT",
                            ErrorCode = item.Fault.ErrorCode,
                            Error = item.Fault.Message
                        });
                    }
                    else
                    {
                        results.Add(new TableScanResult { Config = batch[i], BinQueryStatus = "QUERY_OK" });
                    }
                }

                SysConsole.WriteLine("  scanned " + Math.Min(offset + batch.Count, configs.Count) + "/" + configs.Count);
            }

            var reportPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "recyclebin-table-sync-audit.csv");
            using (var writer = new StreamWriter(reportPath, false, new UTF8Encoding(true)))
            {
                writer.WriteLine("logicalname,configid,statecode,statuscode,isreadyforrecyclebin,cleanupintervalindays,bintablename,bin_query_status,errorcode,error");
                foreach (var result in results.OrderBy(r => Name(r.Config), StringComparer.OrdinalIgnoreCase))
                {
                    var row = result.Config;
                    writer.WriteLine(string.Join(",", new[]
                    {
                        Csv(Name(row)),
                        Csv(row.Id.ToString()),
                        Csv(Option(row, "statecode").ToString()),
                        Csv(Option(row, "statuscode").ToString()),
                        Csv(Bool(row, "isreadyforrecyclebin").ToString()),
                        Csv(Value(row, "cleanupintervalindays")),
                        Csv(Value(row, "bintablename")),
                        Csv(result.BinQueryStatus),
                        Csv(result.ErrorCode.HasValue ? result.ErrorCode.Value.ToString() : ""),
                        Csv(result.Error)
                    }));
                }
            }

            SysConsole.WriteLine();
            SysConsole.WriteLine("Scan summary");
            foreach (var group in results.GroupBy(r => r.BinQueryStatus).OrderBy(g => g.Key))
                SysConsole.WriteLine("  " + group.Key + ": " + group.Count());
            foreach (var group in results.Where(r => r.ErrorCode.HasValue)
                .GroupBy(r => new { r.ErrorCode, r.Error })
                .OrderByDescending(g => g.Count()).Take(10))
            {
                SysConsole.WriteLine("  fault " + group.Key.ErrorCode + " x" + group.Count() + ": " + group.Key.Error);
            }
            SysConsole.WriteLine("Report: " + reportPath);
            SysConsole.WriteLine("No RecycleBinConfig row or system job was changed.");
            return 0;
        }

        private static string Csv(string value)
        {
            value = value ?? "";
            return "\"" + value.Replace("\"", "\"\"").Replace("\r", " ").Replace("\n", " ") + "\"";
        }

        private static void PrintReportedJob(ServiceClient serviceClient)
        {
            SysConsole.WriteLine("Reported OOB system job");
            try
            {
                var job = serviceClient.Retrieve(
                    "asyncoperation",
                    ReportedFailedJobId,
                    new ColumnSet("name", "operationtype", "statecode", "statuscode", "errorcode",
                        "message", "friendlymessage", "startedon", "completedon", "correlationid"));

                SysConsole.WriteLine("  id:            " + job.Id);
                SysConsole.WriteLine("  name:          " + Text(job, "name"));
                SysConsole.WriteLine("  operationtype: " + Option(job, "operationtype"));
                SysConsole.WriteLine("  state/status:  " + Option(job, "statecode") + "/" + Option(job, "statuscode"));
                SysConsole.WriteLine("  errorcode:     " + Value(job, "errorcode"));
                SysConsole.WriteLine("  message:       " + FirstNonEmpty(Text(job, "friendlymessage"), Text(job, "message")));
            }
            catch (FaultException<OrganizationServiceFault> ex)
            {
                SysConsole.WriteLine("  Could not read job: " + ex.Detail.Message);
            }
            SysConsole.WriteLine();
        }

        private static void PrintConfigSummary(List<Entity> rows)
        {
            var org = rows.Where(IsOrganizationRow).ToList();
            var aci = rows.Where(r => Name(r).Equals("aciviewmapper", StringComparison.OrdinalIgnoreCase)).ToList();
            var activityParty = rows.Where(r => Name(r).Equals("activityparty", StringComparison.OrdinalIgnoreCase)).ToList();
            var inactive = rows.Count(r => !IsOrganizationRow(r) && Option(r, "statecode") != 0);
            var notReady = rows.Count(r => !IsOrganizationRow(r) && !Bool(r, "isreadyforrecyclebin"));

            SysConsole.WriteLine("RecycleBinConfig snapshot");
            SysConsole.WriteLine("  total rows:                  " + rows.Count);
            SysConsole.WriteLine("  organization rows:           " + org.Count);
            SysConsole.WriteLine("  inactive per-table rows:     " + inactive);
            SysConsole.WriteLine("  not-ready per-table rows:    " + notReady);
            PrintRows("organization", org);
            PrintRows("aciviewmapper", aci);
            PrintRows("activityparty", activityParty);
            SysConsole.WriteLine();
        }

        private static void PrintRecentProvisioningJobs(ServiceClient serviceClient)
        {
            var query = new QueryExpression("asyncoperation")
            {
                ColumnSet = new ColumnSet("asyncoperationid", "name", "statecode", "statuscode",
                    "errorcode", "message", "friendlymessage", "createdon", "completedon"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("operationtype", ConditionOperator.Equal, ProcessTableForRecycleBinOperationType)
                    }
                },
                Orders = { new OrderExpression("createdon", OrderType.Descending) },
                TopCount = 10
            };

            var jobs = serviceClient.RetrieveMultiple(query).Entities;
            SysConsole.WriteLine("Recent OOB Process Table For RecycleBin jobs");
            if (jobs.Count == 0)
            {
                SysConsole.WriteLine("  (none)");
            }
            foreach (var job in jobs)
            {
                SysConsole.WriteLine("  " + job.Id +
                    " state/status=" + Option(job, "statecode") + "/" + Option(job, "statuscode") +
                    " error=" + Value(job, "errorcode") +
                    " name=" + Text(job, "name"));
                var message = FirstNonEmpty(Text(job, "friendlymessage"), Text(job, "message"));
                if (!string.IsNullOrWhiteSpace(message))
                    SysConsole.WriteLine("    " + message);
            }
            SysConsole.WriteLine();
        }

        private static void PrintAuditConclusion(ServiceClient serviceClient, List<Entity> rows)
        {
            var unfinishedJobs = GetUnfinishedProvisioningJobs(serviceClient);
            if (unfinishedJobs.Count > 0)
            {
                SysConsole.WriteLine("[BLOCKED] An OOB Process Table For RecycleBin job is unfinished.");
                SysConsole.WriteLine("Do not retry --repair and do not change the job in code. Ask aP to handle the job first.");
                return;
            }

            var org = rows.SingleOrDefault(IsOrganizationRow);
            if (HasFailedCleanupResidue(serviceClient, rows, org))
            {
                SysConsole.WriteLine("[SUPPORT REQUIRED] Org is Inactive but per-table rows remain after a canceled OOB cleanup job.");
                SysConsole.WriteLine("Do not retry --repair: the previous platform cleanup failed on an internal *_Bin SQL table.");
                SysConsole.WriteLine("Open a Microsoft support request to repair the Recycle Bin physical-table/configuration mismatch.");
                return;
            }

            if (org == null)
            {
                SysConsole.WriteLine(rows.Count == 0
                    ? "[OK] Soft delete is OFF and RecycleBinConfig is empty. Portal can turn it ON cleanly."
                    : "[CORRUPT] The organization row is missing but per-table rows remain.");
                return;
            }

            SysConsole.WriteLine("[RESET NEEDED] The safe recovery is to delete only the organization row and let Dataverse cascade-delete all per-table rows.");
            SysConsole.WriteLine("Never delete individual per-table RecycleBinConfig rows.");
            SysConsole.WriteLine("Run again with --repair to perform the supported clean reset.");
        }

        private static int Repair(ServiceClient serviceClient, List<Entity> rows)
        {
            var runningJobs = GetUnfinishedProvisioningJobs(serviceClient);
            if (runningJobs.Count > 0)
            {
                SysConsole.WriteLine("[STOP] There are unfinished OOB Process Table For RecycleBin jobs:");
                foreach (var job in runningJobs)
                    SysConsole.WriteLine("  " + job.Id + " state/status=" + Option(job, "statecode") + "/" + Option(job, "statuscode"));
                SysConsole.WriteLine("No job was changed or canceled. Ask aP to handle these jobs, then rerun --repair.");
                return 3;
            }

            var orgRows = rows.Where(IsOrganizationRow).ToList();
            if (orgRows.Count > 1)
            {
                SysConsole.WriteLine("[STOP] More than one organization row exists. No data was changed.");
                return 3;
            }

            if (HasFailedCleanupResidue(serviceClient, rows, orgRows.SingleOrDefault()))
            {
                SysConsole.WriteLine("[STOP] A previous OOB cleanup left the org Inactive with per-table rows still present.");
                SysConsole.WriteLine("Retry is blocked because Dataverse already failed on an internal *_Bin SQL table. Contact Microsoft support.");
                return 3;
            }

            if (orgRows.Count == 1)
            {
                SysConsole.WriteLine("Deleting only the organization RecycleBinConfig row " + orgRows[0].Id + " ...");
                serviceClient.Delete(RecycleBinConfigTable, orgRows[0].Id);
            }
            else if (rows.Count > 0)
            {
                SysConsole.WriteLine("[STOP] Orphan per-table rows exist without an organization row.");
                SysConsole.WriteLine("Deleting them individually is unsupported. No data was changed; escalate to Microsoft support.");
                return 3;
            }

            for (var attempt = 0; attempt < 30; attempt++)
            {
                var remaining = GetAllConfigRows(serviceClient);
                if (remaining.Count == 0)
                {
                    SysConsole.WriteLine("[PASS] RecycleBinConfig is empty. The environment is cleanly OFF.");
                    SysConsole.WriteLine("Use Power Platform admin center to turn Keep deleted records ON with 26 days, then rerun without --repair to verify.");
                    return 0;
                }

                if (attempt == 29)
                {
                    SysConsole.WriteLine("[WAIT] Cascade cleanup did not finish within 60 seconds; " + remaining.Count + " row(s) remain.");
                    SysConsole.WriteLine("No job was changed or canceled. Rerun audit later; if it stays stuck, ask aP before touching system jobs.");
                    return 3;
                }

                Thread.Sleep(TimeSpan.FromSeconds(2));
            }

            return 3;
        }

        private static List<Entity> GetUnfinishedProvisioningJobs(ServiceClient serviceClient)
        {
            var query = new QueryExpression("asyncoperation")
            {
                ColumnSet = new ColumnSet("asyncoperationid", "statecode", "statuscode"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("operationtype", ConditionOperator.Equal, ProcessTableForRecycleBinOperationType),
                        new ConditionExpression("statecode", ConditionOperator.NotEqual, 3)
                    }
                },
                PageInfo = new PagingInfo { Count = 5000, PageNumber = 1 }
            };
            return RetrieveAll(serviceClient, query);
        }

        private static bool HasFailedCleanupResidue(ServiceClient serviceClient, List<Entity> rows, Entity org)
        {
            if (org == null || Option(org, "statecode") != 1 || rows.Count <= 1)
                return false;

            var query = new QueryExpression("asyncoperation")
            {
                ColumnSet = new ColumnSet("asyncoperationid", "statecode", "statuscode", "errorcode"),
                Criteria = new FilterExpression(LogicalOperator.And)
                {
                    Conditions =
                    {
                        new ConditionExpression("operationtype", ConditionOperator.Equal, ProcessTableForRecycleBinOperationType)
                    }
                },
                Orders = { new OrderExpression("createdon", OrderType.Descending) },
                TopCount = 1
            };
            var latest = serviceClient.RetrieveMultiple(query).Entities.FirstOrDefault();
            return latest != null &&
                Option(latest, "statecode") == 3 &&
                Option(latest, "statuscode") == 32 &&
                latest.Attributes.ContainsKey("errorcode");
        }

        private static List<Entity> GetAllConfigRows(ServiceClient serviceClient)
        {
            var query = new QueryExpression(RecycleBinConfigTable)
            {
                ColumnSet = new ColumnSet("recyclebinconfigid", "name", "extensionofrecordid",
                    "statecode", "statuscode", "isreadyforrecyclebin", "cleanupintervalindays", "bintablename"),
                Orders = { new OrderExpression("name", OrderType.Ascending) },
                PageInfo = new PagingInfo { Count = 5000, PageNumber = 1 }
            };
            return RetrieveAll(serviceClient, query);
        }

        private static List<Entity> RetrieveAll(ServiceClient serviceClient, QueryExpression query)
        {
            var rows = new List<Entity>();
            while (true)
            {
                var page = serviceClient.RetrieveMultiple(query);
                rows.AddRange(page.Entities);
                if (!page.MoreRecords) return rows;
                query.PageInfo.PageNumber++;
                query.PageInfo.PagingCookie = page.PagingCookie;
            }
        }

        private static void PrintRows(string label, List<Entity> rows)
        {
            if (rows.Count == 0)
            {
                SysConsole.WriteLine("  " + label + ": (none)");
                return;
            }

            foreach (var row in rows)
            {
                var extension = row.GetAttributeValue<EntityReference>("extensionofrecordid");
                SysConsole.WriteLine("  " + label + ": id=" + row.Id +
                    " state/status=" + Option(row, "statecode") + "/" + Option(row, "statuscode") +
                    " ready=" + Bool(row, "isreadyforrecyclebin") +
                    " days=" + Value(row, "cleanupintervalindays") +
                    " bin=" + Value(row, "bintablename") +
                    " entityId=" + (extension == null ? "(none)" : extension.Id.ToString()));
            }
        }

        private static bool IsOrganizationRow(Entity row)
        {
            return Name(row).Equals(OrganizationRowName, StringComparison.OrdinalIgnoreCase);
        }

        private static string Name(Entity row) { return Text(row, "name") ?? ""; }
        private static string Text(Entity row, string column) { return row.GetAttributeValue<string>(column); }
        private static bool Bool(Entity row, string column) { return row.GetAttributeValue<bool?>(column).GetValueOrDefault(false); }
        private static int Option(Entity row, string column) { return row.GetAttributeValue<OptionSetValue>(column)?.Value ?? -1; }
        private static string Value(Entity row, string column) { return row.Attributes.ContainsKey(column) ? Convert.ToString(row[column]) : "(null)"; }
        private static string FirstNonEmpty(string first, string second) { return !string.IsNullOrWhiteSpace(first) ? first : second; }
    }
}

using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using SysConsole = System.Console;

namespace Dev.AllInOne.Console
{
    // Probes whether AttributeAuditDetail (or the underlying audit Entity) carries
    // human-readable Display Names for the touched attributes, so we can decide
    // whether the MCP tool needs to fetch entity metadata to translate
    // logicalName -> displayName for the changes[] entries.
    public class Program
    {
        static void Main()
        {
            SysConsole.OutputEncoding = Encoding.UTF8;

            SysConsole.WriteLine("Connecting via App.Service ...");
            var svc = App.Service;
            if (!svc.IsReady)
            {
                SysConsole.WriteLine("ERROR: " + svc.LastError);
                return;
            }
            SysConsole.WriteLine("Connected OK to " + svc.ConnectedOrgUriActual + Environment.NewLine);

            var targetId = new Guid("71f939f8-4e40-f111-bec6-70a8a59a451e");
            ProbeAuditDetail(svc, "account", targetId);
        }

        private static void ProbeAuditDetail(ServiceClient svc, string entityName, Guid targetId)
        {
            SysConsole.WriteLine("===============================================================");
            SysConsole.WriteLine("RetrieveRecordChangeHistoryRequest");
            SysConsole.WriteLine("  entity  = " + entityName);
            SysConsole.WriteLine("  target  = " + targetId);
            SysConsole.WriteLine("===============================================================");

            var request = new RetrieveRecordChangeHistoryRequest
            {
                Target = new EntityReference(entityName, targetId),
                PagingInfo = new PagingInfo { PageNumber = 1, Count = 5 }
            };
            var response = (RetrieveRecordChangeHistoryResponse)svc.Execute(request);
            var auditDetails = response.AuditDetailCollection;
            if (auditDetails == null) { SysConsole.WriteLine("null"); return; }

            SysConsole.WriteLine("AuditDetails.Count = " + auditDetails.AuditDetails.Count);
            SysConsole.WriteLine();

            int idx = 0;
            foreach (var detail in auditDetails.AuditDetails)
            {
                SysConsole.WriteLine("--- detail #" + idx + " : " + detail.GetType().FullName + " ---");
                var audit = detail.AuditRecord;

                // 1. Does audit.AuditRecord itself carry a display-name per field?
                SysConsole.WriteLine("  audit.LogicalName  = " + audit.LogicalName);
                SysConsole.WriteLine("  audit.Attributes   =");
                foreach (var kv in audit.Attributes)
                {
                    SysConsole.WriteLine("    KEY=" + kv.Key + "  TYPE=" + (kv.Value?.GetType().Name ?? "null") + "  VAL=" + ShortVal(kv.Value));
                }
                SysConsole.WriteLine("  audit.FormattedValues =");
                foreach (var fv in audit.FormattedValues)
                {
                    SysConsole.WriteLine("    KEY=" + fv.Key + "  FMT=" + fv.Value);
                }
                SysConsole.WriteLine();

                if (detail is AttributeAuditDetail aad)
                {
                    SysConsole.WriteLine("  -> OldValue keys/formatted:");
                    DumpEntity(aad.OldValue, "    OLD.");
                    SysConsole.WriteLine("  -> NewValue keys/formatted:");
                    DumpEntity(aad.NewValue, "    NEW.");
                }
                SysConsole.WriteLine();
                idx++;
            }
        }

        private static void DumpEntity(Entity e, string indent)
        {
            if (e == null) { SysConsole.WriteLine(indent + "(null)"); return; }
            SysConsole.WriteLine(indent + "LogicalName = " + e.LogicalName);
            SysConsole.WriteLine(indent + "Attributes count = " + e.Attributes.Count);
            foreach (var kv in e.Attributes)
                SysConsole.WriteLine(indent + "  " + kv.Key + " = " + ShortVal(kv.Value));
            SysConsole.WriteLine(indent + "FormattedValues count = " + e.FormattedValues.Count);
            foreach (var fv in e.FormattedValues)
                SysConsole.WriteLine(indent + "  FMT " + fv.Key + " = " + fv.Value);
        }

        private static string ShortVal(object v)
        {
            if (v == null) return "null";
            return v switch
            {
                EntityReference er => "[ER " + er.LogicalName + "/" + er.Id + (string.IsNullOrEmpty(er.Name) ? "" : " name='" + er.Name + "'") + "]",
                OptionSetValue osv => "[OSV " + osv.Value + "]",
                Money m => "[$" + m.Value + "]",
                _ => v.ToString()
            };
        }
    }
}

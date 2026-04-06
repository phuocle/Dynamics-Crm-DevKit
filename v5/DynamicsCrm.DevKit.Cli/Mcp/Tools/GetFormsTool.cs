using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Xml;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetFormsTool
    {
        private readonly ServiceClient _serviceClient;

        public GetFormsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_forms", Title = "Get form definitions for an entity",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Retrieve form definitions for a Dataverse entity.\n\n" +

            "TWO MODES:\n" +
            "- form_id EMPTY: list all active forms with name, type, status\n" +
            "- form_id PROVIDED: full FormXML and metadata for one form\n" +
            "- form_name: if exactly 1 match, returns detail automatically\n\n" +

            "WHEN TO USE:\n" +
            "- Find form IDs, check field layout, or look up a form by name\n" +
            "- Before adding/removing fields from a form\n\n" +

            "TIPS:\n" +
            "- form_type=2 for main forms only. FormXML: tabs > columns > sections > rows > cells > controls\n" +
            "- To UPDATE: use upsert_form (not execute_webapi). See docs://instructions_for_formxml")]
        public string get_forms(
            [Description("Entity logical name (e.g., 'account'). Use get_tables if unsure."
            )] string entity_name,
            [Description("GUID of a form for full detail including FormXML. Empty = list all."
            )] string form_id = "",
            [Description("Filter by name (contains match). 1 match = auto-detail. Ignored if form_id set."
            )] string form_name = "",
            [Description("Filter by type: 2=Main, 5=Mobile, 6=QuickView, 7=QuickCreate. 0 = all."
            )] int form_type = 0,
            [Description("Include FormXML in list mode (default: false). Detail mode always includes it."
            )] bool include_formxml = false)
        {
            if (string.IsNullOrWhiteSpace(entity_name))
                return "Error: entity_name is required.";

            try
            {
                // Priority: form_id > form_name > list mode
                if (!string.IsNullOrWhiteSpace(form_id))
                {
                    if (!Guid.TryParse(form_id.Trim(), out var id))
                        return $"Error: '{form_id}' is not a valid GUID.";

                    return GetFormDetail(id);
                }

                if (!string.IsNullOrWhiteSpace(form_name))
                    return FindFormsByName(entity_name.Trim().ToLowerInvariant(), form_name.Trim(), form_type);

                return ListForms(entity_name.Trim().ToLowerInvariant(), form_type, include_formxml);
            }
            catch (Exception ex)
            {
                return $"Error: Failed to retrieve forms: {ex.Message}";
            }
        }

        private static readonly int[] ValidFormTypes = { 0, 2, 4, 5, 6, 7, 8, 11, 12 };

        private string ListForms(string entityName, int formType, bool includeFormXml)
        {
            if (formType != 0 && !ValidFormTypes.Contains(formType))
                return $"Error: form_type={formType} is not valid. Valid values: 2=Main, 4=Preview, 5=Mobile, 6=QuickView, 7=QuickCreate, 8=Dialog, 11=MainInteractive, 12=Card. Use 0 or omit for all types.";

            var query = BuildListQuery(entityName, formType, includeFormXml);
            var result = _serviceClient.RetrieveMultiple(query);
            var forms = result.Entities;

            if (forms.Count == 0)
            {
                var typeHint = formType > 0 ? $" with type={formType}" : "";
                return $"[Forms] {entityName} — 0 forms found{typeHint}";
            }

            return FormatFormList(entityName, forms, includeFormXml);
        }

        private string FindFormsByName(string entityName, string formName, int formType)
        {
            if (formType != 0 && !ValidFormTypes.Contains(formType))
                return $"Error: form_type={formType} is not valid. Valid values: 2=Main, 4=Preview, 5=Mobile, 6=QuickView, 7=QuickCreate, 8=Dialog, 11=MainInteractive, 12=Card. Use 0 or omit for all types.";

            var query = BuildListQuery(entityName, formType, includeFormXml: false);
            var escapedName = formName.Replace("[", "[[]").Replace("%", "[%]").Replace("_", "[_]");
            query.Criteria.AddCondition("name", ConditionOperator.Like, $"%{escapedName}%");

            var result = _serviceClient.RetrieveMultiple(query);
            var forms = result.Entities;

            if (forms.Count == 0)
            {
                var typeHint = formType > 0 ? $" (type={MapFormType(formType)})" : "";
                return $"Error: No form found matching '{formName}' for entity '{entityName}'{typeHint}. " +
                       $"Use get_forms with entity_name='{entityName}' to list all available forms.";
            }

            if (forms.Count == 1)
                return GetFormDetail(forms[0].GetAttributeValue<Guid>("formid"));

            // Multiple matches — return list for disambiguation
            var sb = new StringBuilder(forms.Count * 120 + 256);
            sb.AppendLine($"[Forms] {entityName} — {forms.Count} forms match '{formName}'. Specify the exact form_id to proceed.");
            sb.AppendLine();
            sb.AppendLine("formid\tname\ttype\tdefault\tactive\tmanaged\tversion");

            foreach (var form in forms)
            {
                var formId = form.GetAttributeValue<Guid>("formid");
                var name = form.GetAttributeValue<string>("name") ?? "";
                var type = form.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
                var isDefault = form.GetAttributeValue<bool>("isdefault");
                var activationState = form.GetAttributeValue<OptionSetValue>("formactivationstate")?.Value ?? 0;
                var isManaged = form.GetAttributeValue<bool>("ismanaged");
                var version = form.GetAttributeValue<int>("version");

                sb.AppendLine($"{formId}\t{EscapeTab(name)}\t{MapFormType(type)}\t{(isDefault ? "yes" : "no")}\t{(activationState == 1 ? "Active" : "Inactive")}\t{(isManaged ? "yes" : "no")}\t{version}");
            }

            return sb.ToString();
        }

        private string GetFormDetail(Guid formId)
        {
            var query = new QueryExpression("systemform")
            {
                ColumnSet = new ColumnSet(true)
            };
            query.Criteria.AddCondition("formid", ConditionOperator.Equal, formId);

            var result = _serviceClient.RetrieveMultiple(query);

            if (result.Entities.Count == 0)
                return $"Error: No form found with ID '{formId}'.";

            var form = result.Entities[0];
            var name = form.GetAttributeValue<string>("name") ?? "";
            var type = form.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
            var isDefault = form.GetAttributeValue<bool>("isdefault");
            var activationState = form.GetAttributeValue<OptionSetValue>("formactivationstate")?.Value ?? 0;
            var isManaged = form.GetAttributeValue<bool>("ismanaged");
            var version = form.GetAttributeValue<int>("version");
            var description = form.GetAttributeValue<string>("description") ?? "";
            var objectTypeCode = form.GetAttributeValue<string>("objecttypecode") ?? "";
            var publishedOn = form.GetAttributeValue<DateTime?>("publishedon");
            var formXml = form.GetAttributeValue<string>("formxml") ?? "";

            var sb = new StringBuilder(formXml.Length + 512);

            sb.AppendLine($"[Form] {name} ({MapFormType(type)})");
            sb.AppendLine($"FormId: {formId}");
            sb.AppendLine($"Entity: {objectTypeCode}");
            sb.AppendLine($"Type: {MapFormType(type)} ({type})");
            sb.AppendLine($"Default: {(isDefault ? "yes" : "no")}");
            sb.AppendLine($"Active: {(activationState == 1 ? "Active" : "Inactive")}");
            sb.AppendLine($"Managed: {(isManaged ? "yes" : "no")}");
            sb.AppendLine($"Version: {version}");
            if (publishedOn.HasValue)
                sb.AppendLine($"Published: {publishedOn.Value:yyyy-MM-dd HH:mm:ss}");
            if (!string.IsNullOrEmpty(description))
                sb.AppendLine($"Description: {description}");

            sb.AppendLine();

            if (!string.IsNullOrEmpty(formXml))
            {
                sb.AppendLine("[FormXML]");
                sb.AppendLine(PrettyPrintXml(formXml));
            }

            return sb.ToString();
        }

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

            query.Criteria.AddCondition("objecttypecode", ConditionOperator.Equal, entityName);
            query.Criteria.AddCondition("formactivationstate", ConditionOperator.Equal, 1);

            if (formType != 0)
                query.Criteria.AddCondition("type", ConditionOperator.Equal, formType);

            query.AddOrder("type", OrderType.Ascending);
            query.AddOrder("name", OrderType.Ascending);

            return query;
        }

        private static string FormatFormList(string entityName, DataCollection<Entity> forms, bool includeFormXml, string header = null)
        {
            var sb = new StringBuilder(forms.Count * 120 + 256);
            sb.AppendLine(header ?? $"[Forms] {entityName} ({forms.Count} forms)");
            sb.AppendLine();
            sb.AppendLine("formid\tname\ttype\tdefault\tactive\tmanaged\tversion");

            foreach (var form in forms)
            {
                var formId = form.GetAttributeValue<Guid>("formid");
                var name = form.GetAttributeValue<string>("name") ?? "";
                var type = form.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
                var isDefault = form.GetAttributeValue<bool>("isdefault");
                var activationState = form.GetAttributeValue<OptionSetValue>("formactivationstate")?.Value ?? 0;
                var isManaged = form.GetAttributeValue<bool>("ismanaged");
                var version = form.GetAttributeValue<int>("version");

                sb.AppendLine($"{formId}\t{EscapeTab(name)}\t{MapFormType(type)}\t{(isDefault ? "yes" : "no")}\t{(activationState == 1 ? "Active" : "Inactive")}\t{(isManaged ? "yes" : "no")}\t{version}");

                if (includeFormXml)
                {
                    var formXml = form.GetAttributeValue<string>("formxml");
                    if (!string.IsNullOrEmpty(formXml))
                    {
                        sb.AppendLine();
                        sb.AppendLine($"[FormXML: {name}]");
                        sb.AppendLine(PrettyPrintXml(formXml));
                        sb.AppendLine();
                    }
                }
            }

            return sb.ToString();
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
            11 => "MainInteractive",
            12 => "Card",
            _ => $"Other({type})"
        };

        private static string PrettyPrintXml(string xml)
        {
            try
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
            catch
            {
                return xml;
            }
        }

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");
    }
}

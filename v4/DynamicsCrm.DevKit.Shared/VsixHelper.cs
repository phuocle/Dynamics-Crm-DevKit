
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Shared
{
    public static class VsixHelper
    {

        public static string GetDefaultFileWithCs(EntityMetadata entityMetadata, string @namespace)
        {
            const string NEW_LINE = "\r\n";
            const string TAB = "\t";
            var code = string.Empty;
            var @class = Utility.SafeDeclareName(entityMetadata.SchemaName, GeneratorType.csharp);
            var key = (entityMetadata.IsActivity ?? false) ? "activityid" : $"{@class.ToLower()}id";
            code += $"using Microsoft.Xrm.Sdk;{NEW_LINE}";

            code += $"using System;{NEW_LINE}";
            code += NEW_LINE;
            code += $"namespace {@namespace}{NEW_LINE}";
            code += $"{{{NEW_LINE}";
            code += $"{TAB}public partial class {@class}{NEW_LINE}";
            code += $"{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}#region --- PROPERTIES ---{NEW_LINE}";
            code += NEW_LINE;
            code += $"{TAB}{TAB}//public string StringField {{ get {{ return GetAliasedValue<string>(\"aliased.field\"); }} }}{NEW_LINE}";
            code += $"{TAB}{TAB}//public int? IntField {{ get {{ return GetAliasedValue<int?>(\"aliased.field\"); }} }}{NEW_LINE}";
            code += $"{TAB}{TAB}//public DateTime? DateTimeField {{ get {{ return GetAliasedValue<DateTime?>(\"aliased.field\"); }} }}{NEW_LINE}";
            code += $"{TAB}{TAB}//public EntityReference LookupField {{ get {{ return GetAliasedValue<EntityReference>(\"aliased.field\"); }} }}{NEW_LINE}";
            code += $"{TAB}{TAB}//public xxxOptionSets.xxx? OptionSetField {{ get {{ return (xxxOptionSets.xxx?)GetAliasedValue<OptionSetValue>(\"aliased.field\")?.Value; }} }}{NEW_LINE}";
            code += $"{TAB}{TAB}//public decimal? MoneyField {{ get {{ return GetAliasedValue<Money>(\"aliased.field\")?.Value; }} }}{NEW_LINE}";
            code += NEW_LINE;
            code += $"{TAB}{TAB}#endregion{NEW_LINE}";
            code += NEW_LINE;
            code += $"{TAB}{TAB}#region --- STATIC METHODS ---{NEW_LINE}";
            code += NEW_LINE;
            code += $"{TAB}{TAB}public static {@class} Read_Record(IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, Guid? recordId){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var fetchData = new{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}{key} = recordId ?? Guid.Empty{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}};{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var fetchXml = $@\"{NEW_LINE}";
            code += $"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>{NEW_LINE}";
            code += $"  <entity name='{@class.ToLower()}'>{NEW_LINE}";
            code += $"    <all-attributes/>{NEW_LINE}";
            code += $"    <filter type='and'>{NEW_LINE}";
            code += $"      <condition attribute='{key}' operator='eq' value='{{fetchData.{key}}}'/>{NEW_LINE}";
            code += $"    </filter>{NEW_LINE}";
            code += $"  </entity>{NEW_LINE}";
            code += $"</fetch>{NEW_LINE}";
            code += $"\";{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var rows = serviceAdmin.RetrieveMultiple<{@class}>(fetchXml);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (rows.Count == 1) return rows[0];{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}return new {@class}();{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += NEW_LINE;

            code += $"{TAB}{TAB}#endregion{NEW_LINE}";
            code += $"{TAB}}}{NEW_LINE}";
            code += $"}}{NEW_LINE}";
            return code;
        }

        public static string GetDefaultFileWithForm(ServiceClient CrmServiceClient, EntityMetadata entityMetadata, string rootnamespace)
        {
            string GetUnquieFormName(List<string> FormNames, string formName)
            {
                if (!FormNames.Contains(formName))
                {
                    FormNames.Add(formName);
                    return formName;
                }
                else
                {
                    var count = FormNames.Count(x => x == formName) + 1;
                    FormNames.Add(formName);
                    return $"{formName}{count}";
                }
            }
            var forms = XrmHelper.GetEntityForms(CrmServiceClient, entityMetadata.LogicalName);
            if (!forms.Any()) return GetDefaultFileWithWebApi(entityMetadata.SchemaName);
            var @namespace = Utility.GetNameSpace(rootnamespace);
            var code = string.Empty;
            code += $"//@ts-check\r\n";
            code += $"///<reference path=\"{entityMetadata.SchemaName}.d.ts\" />\r\n";
            code += "\"use strict\";\r\n";
            var formNames = new List<string>();
            foreach (var form in forms)
            {
                var formName = Utility.GetFormName(form.Name, entityMetadata.SchemaName);
                formName = GetUnquieFormName(formNames, formName);
                var type = $"{@namespace}.Form{Utility.SafeIdentifier(formName)}";
                code += $"var form{Utility.SafeIdentifier(formName)} = (function () {{\r\n";
                code += $"\t\"use strict\";\r\n";
                code += $"\t/** @type {type} */\r\n";
                code += $"\tvar form = null;\r\n";
                code += $"\t/** @param {{any}} executionContext */\r\n";
                code += $"\tasync function onLoad(executionContext) {{\r\n";
                code += $"\t\tform = new {type}(executionContext);\r\n";
                code += $"\t\tregisterEvents();\r\n";
                code += $"\t\tform.UiAddLoaded(UiAddLoaded);\r\n";
                code += $"\t}}\r\n";
                code += $"\tfunction registerEvents() {{\r\n";
                code += $"\t\tif (form.ExecutionContext.IsInitialLoad()) {{\r\n";
                code += $"\t\t}}\r\n";
                code += $"\t}}\r\n";
                code += $"\t//BEGIN ON LOAD ========================================================\r\n";
                code += $"\tasync function UiAddLoaded(executionContext) {{\r\n";
                code += $"\t}}\r\n";
                code += $"\t//END ON LOAD ==========================================================\r\n";
                code += $"\t//BEGIN ON CHANGE ======================================================\r\n";
                code += $"\r\n";
                code += $"\t//END ON CHANGE ========================================================\r\n";
                code += $"\t//BEGIN PRE SEARCH =====================================================\r\n";
                code += $"\r\n";
                code += $"\t//END PRE SEARCH =======================================================\r\n";
                code += $"\t//BEGIN OTHERS =========================================================\r\n";
                code += $"\r\n";
                code += $"\t//END OTHERS ===========================================================\r\n";
                code += $"\treturn {{\r\n\t\tOnLoad: onLoad\r\n\t}};\r\n";
                code += $"}})();\r\n";
            }
            code = code.TrimEnd("\r\n".ToCharArray());
            return code;
        }

        public static string GetDefaultFileWithWebApi(string schemaName)
        {
            const string NEW_LINE = "\r\n";
            var code = string.Empty;
            code += $"//@ts-check{NEW_LINE}";
            code += $"///<reference path=\"{schemaName}.d.ts\" />{NEW_LINE}";
            return code;
        }

    }
}
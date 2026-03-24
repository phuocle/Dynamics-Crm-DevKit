using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Shared.Logic
{
    public class JsDialog
    {
        private const string TAB = "\t";
        private const string TAB2 = "\t\t";
        private const string TAB3 = "\t\t\t";

        private class DialogFieldInfo
        {
            public string Id { get; set; }
            public string ClassId { get; set; }
            public string Label { get; set; }
            public string ParameterType { get; set; }
        }

        private const string DIALOG_NAMESPACE = "DevKitDialog";

        public static async Task<(string code, string dts)> GetJsDialogCodeAsync(ServiceClient serviceClient, SystemForm dialogForm)
        {
            await Helper.DelayAsync(1);
            var dialogUniqueName = dialogForm.UniqueName;
            var allControls = GetAllDialogControls(dialogForm.FormXml);

            // Generate .dialog.js
            var code = string.Empty;
            code += $"// @ts-nocheck\r\n";
            code += $"/** @namespace {DIALOG_NAMESPACE} */\r\n";
            code += $"var {DIALOG_NAMESPACE};\r\n";
            code += $"(function ({DIALOG_NAMESPACE}) {{\r\n";
            code += $"{TAB}'use strict';\r\n";
            code += $"{TAB}/** @class */\r\n";
            code += $"{TAB}{DIALOG_NAMESPACE}.{dialogUniqueName} = function (executionContext, defaultWebResourceName) {{\r\n";
            code += $"{TAB2}return new devKit.LoadFormDialog(executionContext, [\r\n";
            var idList = allControls.Select(f => $"{TAB3}\"{f.Id}\"").ToList();
            code += string.Join(",\r\n", idList) + "\r\n";
            code += $"{TAB2}], defaultWebResourceName);\r\n";
            code += $"{TAB}}};\r\n";
            code += $"}})({DIALOG_NAMESPACE} || ({DIALOG_NAMESPACE} = {{}}));\r\n";

            // Generate .dialog.d.ts
            var dts = string.Empty;
            dts += $"/// <reference path=\"devkit.d.ts\" />\r\n";
            dts += $"declare namespace {DIALOG_NAMESPACE} {{\r\n";
            dts += $"{TAB}export namespace {dialogUniqueName} {{\r\n";
            dts += $"{TAB2}interface IDialog {{\r\n";

            foreach (var field in allControls)
            {
                var dialogType = field.ClassId == null && field.ParameterType != null
                    ? GetParameterControlType(field.ParameterType)
                    : GetDialogControlType(field.ClassId);
                var comment = !string.IsNullOrEmpty(field.Label) ? field.Label : field.Id;
                dts += $"{TAB3}/** {comment} */\r\n";
                dts += $"{TAB3}{field.Id}: DevKit.Controls.Dialog.{dialogType};\r\n";
            }
            dts += $"{TAB2}}}\r\n";
            dts += $"{TAB}}}\r\n";
            dts += $"{TAB}export class {dialogUniqueName} {{\r\n";
            dts += $"{TAB2}constructor(executionContext: any, defaultWebResourceName?: string);\r\n";
            dts += $"{TAB2}Dialog: {dialogUniqueName}.IDialog;\r\n";
            dts += $"{TAB2}Utility: DevKit.Utility;\r\n";
            dts += $"{TAB2}Close(): void;\r\n";
            dts += $"{TAB}}}\r\n";
            dts += $"}}\r\n";

            return (code, dts);
        }

        public static string GetDialogClassName(string dialogName)
        {
            if (string.IsNullOrEmpty(dialogName)) return dialogName;
            var name = dialogName;

            return string.Join("", name.Split(new[] { '_', ' ' })
                .Where(s => s.Length > 0)
                .Select(s => char.ToUpper(s[0]) + s.Substring(1)));
        }

        private static List<DialogFieldInfo> GetAllDialogControls(string formXml)
        {
            if (string.IsNullOrEmpty(formXml)) return new List<DialogFieldInfo>();
            var xdoc = XDocument.Parse(formXml);
            var results = new List<DialogFieldInfo>();

            // Parse header controls
            var headerControls = from x in xdoc.Descendants("header")
                    .Descendants("rows").Descendants("row")
                    .Descendants("cell")
                select new
                {
                    Label = x.Descendants("label").FirstOrDefault()?.Attribute("description")?.Value,
                    Control = x.Descendants("control").FirstOrDefault()
                };

            foreach (var item in headerControls)
            {
                if (item.Control == null) continue;
                var id = item.Control.Attribute("id")?.Value;
                if (string.IsNullOrEmpty(id)) continue;
                var classId = Helper.TrimGuid(item.Control.Attribute("classid")?.Value?.ToUpper());
                results.Add(new DialogFieldInfo
                {
                    Id = id,
                    ClassId = classId,
                    Label = item.Label
                });
            }

            // Parse body controls
            var bodyControls = from x in xdoc
                    .Descendants("tabs").Descendants("tab")
                    .Descendants("columns").Descendants("column")
                    .Descendants("sections").Descendants("section")
                    .Descendants("rows").Descendants("row")
                    .Descendants("cell")
                select new
                {
                    Label = x.Descendants("label").FirstOrDefault()?.Attribute("description")?.Value,
                    Control = x.Descendants("control").FirstOrDefault()
                };

            foreach (var item in bodyControls)
            {
                if (item.Control == null) continue;
                var id = item.Control.Attribute("id")?.Value;
                if (string.IsNullOrEmpty(id)) continue;
                var classId = Helper.TrimGuid(item.Control.Attribute("classid")?.Value?.ToUpper());
                results.Add(new DialogFieldInfo
                {
                    Id = id,
                    ClassId = classId,
                    Label = item.Label
                });
            }

            // Parse footer controls (buttons)
            var footerControls = from x in xdoc.Descendants("footer")
                    .Descendants("rows").Descendants("row")
                    .Descendants("cell")
                select new
                {
                    Label = x.Descendants("label").FirstOrDefault()?.Attribute("description")?.Value,
                    Control = x.Descendants("control").FirstOrDefault()
                };

            foreach (var item in footerControls)
            {
                if (item.Control == null) continue;
                var id = item.Control.Attribute("id")?.Value;
                if (string.IsNullOrEmpty(id)) continue;
                var classId = Helper.TrimGuid(item.Control.Attribute("classid")?.Value?.ToUpper());
                results.Add(new DialogFieldInfo
                {
                    Id = id,
                    ClassId = classId,
                    Label = item.Label
                });
            }

            // Parse form parameters
            var formParameters = xdoc.Descendants("formparameters")
                .Descendants("querystringparameter");

            foreach (var param in formParameters)
            {
                var name = param.Attribute("name")?.Value;
                if (string.IsNullOrEmpty(name)) continue;
                var type = param.Attribute("type")?.Value;
                results.Add(new DialogFieldInfo
                {
                    Id = name,
                    ClassId = null,
                    Label = null,
                    ParameterType = type
                });
            }

            return results;
        }

        private static string GetParameterControlType(string paramType)
        {
            if (string.IsNullOrEmpty(paramType)) return "String";
            if (paramType == "SafeString") return "String";
            if (paramType == "Boolean") return "Boolean";
            if (paramType == "Integer") return "Integer";
            if (paramType == "PositiveInteger") return "Integer";
            if (paramType == "DateTime") return "DateTime";
            if (paramType == "UniqueId") return "String";
            if (paramType == "Object") return "String";
            if (paramType == "EntityType") return "String";
            return "String";
        }

        private static string GetDialogControlType(string classId)
        {
            if (string.IsNullOrEmpty(classId)) return "Unknown";

            var id = classId.ToUpper();

            if (id == ControlDialogClassId.LABEL) return "Label";
            if (id == ControlDialogClassId.BUTTON) return "Button";
            if (id == ControlDialogClassId.SLT_TEXT) return "String";
            if (id == ControlDialogClassId.SLT_EMAIL) return "String";
            if (id == ControlDialogClassId.SLT_TICKER_SYMBOL) return "String";
            if (id == ControlDialogClassId.SLT_URL) return "String";
            if (id == ControlDialogClassId.SLT_TEXT_AREA) return "Memo";
            if (id == ControlDialogClassId.DATETIME) return "DateTime";
            if (id == ControlDialogClassId.NUMBER_WHOLE_NUMBER) return "Integer";
            if (id == ControlDialogClassId.NUMBER_DECIMAL_NUMBER) return "Decimal";
            if (id == ControlDialogClassId.NUMBER_FLOATING_POINT_NUMBER) return "Double";
            if (id == ControlDialogClassId.NUMBER_CURRENCY) return "Money";
            if (id == ControlDialogClassId.LOOKUP) return "Lookup";
            if (id == ControlDialogClassId.IFRAME) return "IFrame";
            if (id == ControlDialogClassId.DROPDOWN_LANGUAGE) return "Integer";
            if (id == ControlDialogClassId.DROPDOWN_TIMEZONE) return "Integer";
            if (id == ControlDialogClassId.DROPDOWN_DURATION) return "Integer";
            if (id == ControlDialogClassId.OPTIONSET_OPTIONSET) return "OptionSet";
            if (id == ControlDialogClassId.OPTIONSET_MULTISELECT_OPTIONSET) return "MultiOptionSet";
            if (id == ControlDialogClassId.SUBGRID_CHART) return "Grid";
            if (id == ControlDialogClassId.TWOOPTIONS_DROPDOWN) return "Boolean";
            if (id == ControlDialogClassId.TWOOPTIONS_CHECKBOX) return "Boolean";
            if (id == ControlDialogClassId.REGARDING) return "Lookup";

            return "Unknown";
        }
    }
}

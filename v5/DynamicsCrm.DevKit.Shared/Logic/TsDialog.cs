using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Shared.Logic
{
    public class TsDialog
    {
        private const string TAB = "\t";
        private const string TAB2 = "\t\t";

        private class DialogFieldInfo
        {
            public string Id { get; set; }
            public string ClassId { get; set; }
            public string Label { get; set; }
        }

        private const string DIALOG_NAMESPACE = "DevKitDialog";

        public static async Task<string> GetTsDialogCodeAsync(ServiceClient serviceClient, SystemForm dialogForm)
        {
            await Helper.DelayAsync(1);
            var dialogUniqueName = dialogForm.UniqueName;
            var allControls = GetAllDialogControls(dialogForm.FormXml);

            var code = string.Empty;
            code += $"/**\r\n";
            code += $" * {dialogUniqueName}.dialog.ts - {dialogForm.Name} Dialog for early-bound style dialog coding\r\n";
            code += $" * Generated file - DO NOT MODIFY MANUALLY\r\n";
            code += $" *\r\n";
            code += $" * Structure:\r\n";
            code += $" * 1. Imports\r\n";
            code += $" * 2. Namespace {DIALOG_NAMESPACE} containing dialog class: {DIALOG_NAMESPACE}.{dialogUniqueName}\r\n";
            code += $" */\r\n";
            code += $"\r\n";
            code += $"/// <reference path=\"../lib/devkit.d.ts\" />\r\n";
            code += $"import {{ DialogFormBase }} from '../lib/devkit';\r\n";
            code += $"\r\n";
            code += $"export namespace {DIALOG_NAMESPACE} {{\r\n";
            code += $"\r\n";
            code += $"{TAB}// ========================================================================\r\n";
            code += $"{TAB}// Dialog: {dialogUniqueName}\r\n";
            code += $"{TAB}// ========================================================================\r\n";
            code += $"\r\n";
            code += $"{TAB}export namespace {dialogUniqueName} {{\r\n";
            code += $"\r\n";

            code += $"{TAB2}/**\r\n";
            code += $"{TAB2} * Dialog controls interface\r\n";
            code += $"{TAB2} * Contains all controls on the dialog form\r\n";
            code += $"{TAB2} */\r\n";
            code += $"{TAB2}export interface IDialog extends DevKit.IDialog {{\r\n";

            foreach (var field in allControls)
            {
                var dialogType = GetDialogControlType(field.ClassId);
                var comment = !string.IsNullOrEmpty(field.Label) ? field.Label : field.Id;
                code += $"{TAB2}{TAB}/** {comment} */\r\n";
                code += $"{TAB2}{TAB}{field.Id}: DevKit.Controls.Dialog.{dialogType};\r\n";
            }

            code += $"{TAB2}}}\r\n";
            code += $"{TAB}}}\r\n";
            code += $"\r\n";
            code += $"{TAB}/**\r\n";
            code += $"{TAB} * {dialogUniqueName} class\r\n";
            code += $"{TAB} * Provides typed access to all dialog controls\r\n";
            code += $"{TAB} * Usage: new {DIALOG_NAMESPACE}.{dialogUniqueName}(executionContext)\r\n";
            code += $"{TAB} */\r\n";
            code += $"{TAB}export class {dialogUniqueName} extends DialogFormBase<{dialogUniqueName}.IDialog> {{\r\n";
            code += $"{TAB2}/**\r\n";
            code += $"{TAB2} * Creates a {dialogUniqueName} instance\r\n";
            code += $"{TAB2} * @param executionContext The execution context from dialog event\r\n";
            code += $"{TAB2} * @param defaultWebResourceName Optional default web resource name\r\n";
            code += $"{TAB2} */\r\n";
            code += $"{TAB2}constructor(executionContext: any, defaultWebResourceName?: string) {{\r\n";
            var fields = string.Join(", ", allControls.Select(f => $"'{f.Id}'"));
            code += $"{TAB2}{TAB}super(executionContext, [{fields}], defaultWebResourceName);\r\n";
            code += $"{TAB2}}}\r\n";
            code += $"{TAB}}}\r\n";
            code += $"}}\r\n";

            return code;
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

            // Parse body controls (tabs > tab > columns > column > sections > section > rows > row > cell > control)
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

            return results;
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
            
            // Fallback for everything else
            return "Unknown";
        }
    }
}

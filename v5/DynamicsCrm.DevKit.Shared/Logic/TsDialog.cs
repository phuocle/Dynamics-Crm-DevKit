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

        public static async Task<string> GetTsDialogCodeAsync(ServiceClient serviceClient, SystemForm dialogForm)
        {
            await Helper.DelayAsync(1);
            var dialogNamespace = GetDialogClassName(dialogForm.Name);
            var dialogClassName = "Dialog";
            var allControls = GetAllDialogControls(dialogForm.FormXml);

            var code = string.Empty;
            code += $"/**\r\n";
            code += $" * {dialogNamespace}.dialog.ts - {dialogNamespace} Dialog for early-bound style dialog coding\r\n";
            code += $" * Generated file - DO NOT MODIFY MANUALLY\r\n";
            code += $" *\r\n";
            code += $" * Structure:\r\n";
            code += $" * 1. Imports\r\n";
            code += $" * 2. Namespace {dialogNamespace} containing dialog class: {dialogNamespace}.{dialogClassName}\r\n";
            code += $" */\r\n";
            code += $"\r\n";
            code += $"/// <reference path=\"../lib/devkit.d.ts\" />\r\n";
            code += $"import {{ FormBase }} from '../lib/devkit';\r\n";
            code += $"\r\n";
            code += $"export namespace {dialogNamespace} {{\r\n";
            code += $"\r\n";
            code += $"{TAB}// ========================================================================\r\n";
            code += $"{TAB}// Dialog: {dialogClassName}\r\n";
            code += $"{TAB}// ========================================================================\r\n";
            code += $"\r\n";
            code += $"{TAB}export namespace {dialogClassName} {{\r\n";
            code += $"\r\n";
            code += $"{TAB2}/**\r\n";
            code += $"{TAB2} * Body controls interface\r\n";
            code += $"{TAB2} */\r\n";
            code += $"{TAB2}export interface IBody {{\r\n";
            code += $"{TAB2}}}\r\n";
            code += $"\r\n";
            code += $"{TAB2}/**\r\n";
            code += $"{TAB2} * Header controls interface\r\n";
            code += $"{TAB2} */\r\n";
            code += $"{TAB2}export interface IHeader extends DevKit.Controls.IHeader {{\r\n";
            code += $"{TAB2}}}\r\n";
            code += $"\r\n";
            code += $"{TAB2}/**\r\n";
            code += $"{TAB2} * Grid controls interface\r\n";
            code += $"{TAB2} */\r\n";
            code += $"{TAB2}export interface IGrid {{\r\n";
            code += $"{TAB2}}}\r\n";
            code += $"\r\n";
            code += $"{TAB2}/**\r\n";
            code += $"{TAB2} * Navigation interface\r\n";
            code += $"{TAB2} */\r\n";
            code += $"{TAB2}export interface INavigation {{\r\n";
            code += $"{TAB2}}}\r\n";
            code += $"\r\n";
            code += $"{TAB2}/**\r\n";
            code += $"{TAB2} * QuickForm interface\r\n";
            code += $"{TAB2} */\r\n";
            code += $"{TAB2}export interface IQuickForm {{\r\n";
            code += $"{TAB2}}}\r\n";
            code += $"\r\n";
            code += $"{TAB2}/**\r\n";
            code += $"{TAB2} * Process interface\r\n";
            code += $"{TAB2} */\r\n";
            code += $"{TAB2}export interface IProcess extends DevKit.Controls.IProcess {{\r\n";
            code += $"{TAB2}}}\r\n";
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
            code += $"{TAB} * {dialogClassName} class\r\n";
            code += $"{TAB} * Provides typed access to all dialog controls\r\n";
            code += $"{TAB} * Usage: new {dialogNamespace}.{dialogClassName}(executionContext)\r\n";
            code += $"{TAB} */\r\n";
            code += $"{TAB}export class {dialogClassName} extends FormBase<{dialogClassName}.IBody, {dialogClassName}.IHeader, {dialogClassName}.IGrid, {dialogClassName}.INavigation, {dialogClassName}.IQuickForm, {dialogClassName}.IProcess, {dialogClassName}.IDialog> {{\r\n";
            code += $"{TAB2}/**\r\n";
            code += $"{TAB2} * Creates a {dialogClassName} instance\r\n";
            code += $"{TAB2} * @param executionContext The execution context from dialog event\r\n";
            code += $"{TAB2} * @param defaultWebResourceName Optional default web resource name\r\n";
            code += $"{TAB2} */\r\n";
            code += $"{TAB2}constructor(executionContext: any, defaultWebResourceName?: string) {{\r\n";
            code += $"{TAB2}{TAB}super(executionContext, defaultWebResourceName, {{\r\n";
            code += $"{TAB2}{TAB}{TAB}body: [],\r\n";
            code += $"{TAB2}{TAB}{TAB}header: [],\r\n";
            code += $"{TAB2}{TAB}{TAB}tab: [],\r\n";
            code += $"{TAB2}{TAB}{TAB}grid: [],\r\n";
            code += $"{TAB2}{TAB}{TAB}navigation: [],\r\n";
            code += $"{TAB2}{TAB}{TAB}quick: [],\r\n";
            code += $"{TAB2}{TAB}{TAB}bpf: [],\r\n";
            
            var fields = string.Join(", ", allControls.Select(f => $"'{f.Id}'"));
            code += $"{TAB2}{TAB}{TAB}dialog: [{fields}]\r\n";

            code += $"{TAB2}{TAB}}});\r\n";
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
            if (string.IsNullOrEmpty(classId)) return "String";

            // Single-line text variants
            if (classId == ControlClassId.SINGLE_LINE_OF_TEXT ||
                classId == ControlClassId.SINGLE_LINE_OF_TEXT_EMAIL ||
                classId == ControlClassId.SINGLE_LINE_OF_TEXT_TICKER_SYMBOL ||
                classId == ControlClassId.SINGLE_LINE_OF_TEXT_URL ||
                classId == ControlClassId.SINGLE_LINE_OF_TEXT_PHONE)
                return "String";

            // Multi-line text variants
            if (classId == ControlClassId.MULTI_LINES_OF_TEXT ||
                classId == ControlClassId.MULTI_LINES_OF_TEXT_MAX ||
                classId == ControlClassId.MULTI_LINES_OF_TEXT_MEMO ||
                classId == ControlClassId.MULTI_LINES_OF_TEXT_MEMO_2 ||
                classId == ControlClassId.MULTI_LINES_OF_TEXT_DESCRIPTION)
                return "Memo";

            // Whole number variants
            if (classId == ControlClassId.WHOLE_NUMBER ||
                classId == ControlClassId.WHOLE_NUMBER_DURATION ||
                classId == ControlClassId.WHOLE_NUMBER_LANGUAGE ||
                classId == ControlClassId.WHOLE_NUMBER_LANGUAGE_2 ||
                classId == ControlClassId.WHOLE_NUMBER_TIMEZONE)
                return "Integer";

            if (classId == ControlClassId.DECIMAL_NUMBER)
                return "Decimal";
            if (classId == ControlClassId.FLOATING_POINT_NUMBER)
                return "Double";
            if (classId == ControlClassId.CURRENCY)
                return "Money";

            // Boolean
            if (classId == ControlClassId.TWO_OPTIONS ||
                classId == ControlClassId.TWO_OPTIONS_2)
                return "Boolean";

            // OptionSet
            if (classId == ControlClassId.STATUS_CODE ||
                classId == ControlClassId.STATE_CODE)
                return "OptionSet";

            if (classId == ControlClassId.MULTI_OPTIONSET)
                return "MultiOptionSet";

            // Lookup variants
            if (classId == ControlClassId.LOOKUP ||
                classId == ControlClassId.LOOKUP_2 ||
                classId == ControlClassId.LOOKUP_3 ||
                classId == ControlClassId.LOOKUP_4)
                return "Lookup";

            if (classId == ControlClassId.DATE_TIME)
                return "DateTime";
            if (classId == ControlClassId.FILE)
                return "File";
            if (classId == ControlClassId.IMAGE)
                return "Image";
            if (classId == ControlClassId.WEB_RESOURCE)
                return "WebResource";
            if (classId == ControlClassId.IFRAME)
                return "IFrame";

            // Dialog-specific controls from Dataverse-Dialog-Builder guid.js
            if (classId == "00AD73DA-BD4D-49C6-88A8-2F4F4CAD4A20")
                return "Button";
            if (classId == "39354E4A-5015-4D74-8031-EA9EB73A1322")
                return "Label";

            // Fallback
            return "String";
        }
    }
}

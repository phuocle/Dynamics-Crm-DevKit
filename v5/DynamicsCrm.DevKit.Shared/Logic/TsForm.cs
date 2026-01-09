using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows.Markup;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Shared.Logic
{
    public static class TsForm
    {
        private const string NEW_LINE = "\r\n";
        private const string TAB = "\t";
        private const string TAB2 = "\t\t";
        private const string TAB3 = "\t\t\t";
        private const string TAB4 = "\t\t\t\t";

        private class TabSection
        {
            public string Tab { get; set; }
            public string Section { get; set; }
        }

        private class ProcessFields
        {
            public string ProcessName { get; set; }
            public List<string> Fields { get; set; }
        }

        private static ServiceClient ServiceClient { get; set; }
        private static EntityMetadata EntityMetadata { get; set; }
        private static string RootNamespace { get; set; }
        private static List<string> FormNames;

        // Reserved name for aggregate Form - if user has form with this name, rename it
        private const string AGGREGATE_FORM_NAME = "AllInOne";

        // Collections to track all unique fields for aggregate Form
        private static Dictionary<string, FieldInfo> AggregateBodyFields;
        private static Dictionary<string, FieldInfo> AggregateHeaderFields;
        private static Dictionary<string, GridInfo> AggregateGridFields;
        private static Dictionary<string, NavigationInfo> AggregateNavigationFields;
        private static Dictionary<string, QuickFormInfo> AggregateQuickFormFields;
        private static Dictionary<string, ProcessFields> AggregateProcessFields;
        private static Dictionary<string, TabInfo> AggregateTabInfos;

        // O(1) attribute lookup cache - built once per entity
        private static Dictionary<string, AttributeMetadata> AttributesByLogicalName;

        /// <summary>
        /// JavaScript reserved words that cannot be used as namespace names
        /// </summary>
        private static readonly HashSet<string> JsReservedWords = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
        {
            "package", "private", "protected", "public", "static", "yield",
            "let", "class", "enum", "export", "extends", "import", "super",
            "implements", "interface", "await", "break", "case", "catch",
            "continue", "debugger", "default", "delete", "do", "else",
            "finally", "for", "function", "if", "in", "instanceof", "new",
            "return", "switch", "this", "throw", "try", "typeof", "var",
            "void", "while", "with", "const"
        };

        /// <summary>
        /// Get safe entity name (escapes reserved words)
        /// </summary>
        private static string GetSafeEntityName(string entityName)
        {
            if (JsReservedWords.Contains(entityName))
            {
                return $"_{entityName}";
            }
            return entityName;
        }

        /// <summary>
        /// Cached context for a single form to avoid re-parsing XML multiple times
        /// Parse XML once, reuse for all field extraction methods
        /// </summary>
        private class FormContext
        {
            public XDocument XDoc { get; }
            public string FormXml { get; }
            private Dictionary<string, string> _controlIdToRealClassId;

            public FormContext(string formXml)
            {
                FormXml = formXml;
                XDoc = XDocument.Parse(formXml);
            }

            /// <summary>
            /// Gets the real ClassId for a control, with caching to avoid repeated queries
            /// </summary>
            public string GetRealClassId(string classId, string controlId)
            {
                if (string.IsNullOrEmpty(controlId)) return classId;

                // Lazy build the lookup dictionary on first access
                if (_controlIdToRealClassId == null)
                {
                    _controlIdToRealClassId = new Dictionary<string, string>();
                    var controlDescriptions = XDoc.Descendants("controlDescriptions").Elements("controlDescription");
                    foreach (var desc in controlDescriptions)
                    {
                        var forControl = desc.Attribute("forControl")?.Value;
                        if (string.IsNullOrEmpty(forControl)) continue;

                        var customControl = desc.Elements("customControl")
                            .FirstOrDefault(x => x.Attribute("id")?.Value != null);
                        if (customControl != null)
                        {
                            var id = customControl.Attribute("id")?.Value;
                            if (Guid.TryParse(id, out var guid))
                            {
                                _controlIdToRealClassId[forControl] = guid.ToString().ToUpper();
                            }
                        }
                    }
                }

                return _controlIdToRealClassId.TryGetValue(controlId, out var realClassId) ? realClassId : classId;
            }
        }

        public static async Task<string> GetTsFormCodeAsync(ServiceClient serviceClient, EntityMetadata entityMetadata, string rootNamespace, bool isJsWebApiExist)
        {

            FormNames = new List<string>();
            ServiceClient = serviceClient;
            EntityMetadata = entityMetadata;
            if (EntityMetadata.Attributes == null) EntityMetadata = await XrmHelper.FetchEntityMetadataAsync(serviceClient, entityMetadata.LogicalName);
            RootNamespace = rootNamespace;
            var forms = await XrmHelper.GetEntityFormsAsync(serviceClient, entityMetadata.LogicalName);

            // If no forms exist for this entity, return null to skip file generation
            if (forms == null || forms.Count == 0)
            {
                return null;
            }

            // Initialize aggregate field collections
            AggregateBodyFields = new Dictionary<string, FieldInfo>();
            AggregateHeaderFields = new Dictionary<string, FieldInfo>();
            AggregateGridFields = new Dictionary<string, GridInfo>();
            AggregateNavigationFields = new Dictionary<string, NavigationInfo>();
            AggregateQuickFormFields = new Dictionary<string, QuickFormInfo>();
            AggregateProcessFields = new Dictionary<string, ProcessFields>();
            AggregateTabInfos = new Dictionary<string, TabInfo>();

            // Build O(1) attribute lookup dictionary once per entity
            AttributesByLogicalName = EntityMetadata.Attributes?
                .Where(a => a.LogicalName != null)
                .ToDictionary(a => a.LogicalName, a => a) ?? new Dictionary<string, AttributeMetadata>();

            // Reserve "Form" name for aggregate class - this will cause any user form named "Form" to be renamed
            FormNames.Add(AGGREGATE_FORM_NAME);

            var code = new StringBuilder();

            // Header comments
            code.AppendLine("/**");
            code.AppendLine($" * {entityMetadata.SchemaName}.form.ts - {entityMetadata.SchemaName} Form for early-bound style form coding");
            code.AppendLine(" * Generated file - DO NOT MODIFY MANUALLY");
            code.AppendLine(" *");
            code.AppendLine(" * Structure:");
            code.AppendLine(" * 1. Imports");
            code.AppendLine($" * 2. Namespace {entityMetadata.SchemaName} containing form classes: {entityMetadata.SchemaName}.FormClassName");
            code.AppendLine($" * 3. Aggregate Form class: {entityMetadata.SchemaName}.{AGGREGATE_FORM_NAME} (contains all fields from all forms)");
            code.AppendLine(" */");
            code.AppendLine();
            code.AppendLine("/// <reference path=\"../lib/devkit.d.ts\" />");
            code.AppendLine("import { FormBase } from '../lib/devkit';");
            code.AppendLine("import './OptionSet';");
            code.AppendLine();

            // Open entity namespace - all forms will be inside this single namespace
            var safeEntityName = GetSafeEntityName(entityMetadata.SchemaName);
            code.AppendLine($"export namespace {safeEntityName} {{");
            code.AppendLine();

            var processFields = await GetProcessFieldsAsync();


            if (forms == null || forms.Count == 0)
            {
                return null;
            }
            foreach (var form in forms.OrderBy(x => x.FormType).ThenBy(x => x.Name))
            {
                if (form.IsQuickCreate || form.FormType == FormType.QuickView)
                {
                    code.Append(await GetQuickCreateFormTsCodeAsync(form));
                }
                else
                {
                    code.Append(await GetMainFormTsCodeAsync(form, processFields));
                }
            }
            // Generate aggregate Form class (contains all unique fields from all main forms)
            if (forms.Any(x => !x.IsQuickCreate))
            {
                code.Append(await GetAggregateFormTsCodeAsync());
            }

            // Close entity namespace
            code.AppendLine("}");



            return code.ToString();
        }



        private static async Task<string> GetQuickCreateFormTsCodeAsync(SystemForm form)
        {
            var formName = Helper.GetFormName(form.Name, EntityMetadata.SchemaName);
            formName = GetUniqueFormName(formName);
            var safeName = Helper.SafeIdentifier(formName);

            var code = new StringBuilder();

            // Start nested namespace for interfaces (e.g., Account.Account_Quick_Create)
            code.AppendLine($"{TAB}// ========================================================================");
            code.AppendLine($"{TAB}// Form: {safeName}");
            code.AppendLine($"{TAB}// ========================================================================");
            code.AppendLine();
            code.AppendLine($"{TAB}export namespace {safeName} {{");
            code.AppendLine();

            // Generate IBody interface
            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * Body controls interface");
            code.AppendLine($"{TAB2} * Contains all controls on the form body");
            code.AppendLine($"{TAB2} */");
            code.AppendLine($"{TAB2}export interface IBody {{");

            var bodyFields = GetBodyFields(form.FormXml);
            foreach (var field in bodyFields)
            {
                var comment = GetFieldComment(field);
                if (!string.IsNullOrEmpty(comment))
                {
                    code.AppendLine($"{TAB3}/** {comment} */");
                }
                code.AppendLine($"{TAB3}{field.SchemaName}: DevKit.Controls.{GetControlType(field)};");
            }

            code.AppendLine($"{TAB3}/** Form Tabs */");
            code.AppendLine($"{TAB3}Tab: ITabs;");
            code.AppendLine($"{TAB2}}}");
            code.AppendLine();

            // Generate Tabs interfaces (with extra indentation)
            code.Append(GetTabsInterfacesNested(form.FormXml));

            // Close nested namespace for interfaces
            code.AppendLine($"{TAB}}}");
            code.AppendLine();

            // Generate Form class at entity namespace level (using declaration merging)
            code.Append(await GetFormClassAsync(safeName, form.FormXml, true, null));
            code.AppendLine();

            return code.ToString();
        }


        private static async Task<string> GetMainFormTsCodeAsync(SystemForm form, List<ProcessFields> processFields)
        {
            var formName = Helper.GetFormName(form.Name, EntityMetadata.SchemaName);
            formName = GetUniqueFormName(formName);
            var safeName = Helper.SafeIdentifier(formName);

            var code = new StringBuilder();



            // Start nested namespace for interfaces (e.g., Account.Account_DevKitV4)
            code.AppendLine($"{TAB}// ========================================================================");
            code.AppendLine($"{TAB}// Form: {safeName}");
            code.AppendLine($"{TAB}// ========================================================================");
            code.AppendLine();
            code.AppendLine($"{TAB}export namespace {safeName} {{");
            code.AppendLine();

            // Generate IBody interface
            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * Body controls interface");
            code.AppendLine($"{TAB2} * Contains all controls on the form body");
            code.AppendLine($"{TAB2} */");
            code.AppendLine($"{TAB2}export interface IBody {{");

            var bodyFields = GetBodyFields(form.FormXml);



            // Collect fields for aggregate Form (add if not already present)
            foreach (var field in bodyFields)
            {
                if (!AggregateBodyFields.ContainsKey(field.SchemaName))
                {
                    AggregateBodyFields[field.SchemaName] = field;
                }
            }

            foreach (var field in bodyFields)
            {
                var comment = GetFieldComment(field);
                if (!string.IsNullOrEmpty(comment))
                {
                    code.AppendLine($"{TAB3}/** {comment} */");
                }
                code.AppendLine($"{TAB3}{field.SchemaName}: DevKit.Controls.{GetControlType(field)};");
            }
            code.AppendLine($"{TAB3}Tab: ITabs;");

            code.AppendLine($"{TAB2}}}");
            code.AppendLine();

            // Generate IHeader interface
            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * Header controls interface");
            code.AppendLine($"{TAB2} * Contains controls displayed in the form header");
            code.AppendLine($"{TAB2} */");
            code.AppendLine($"{TAB2}export interface IHeader extends DevKit.Controls.IHeader {{");

            var headerFields = GetHeaderFields(form.FormXml);



            // Collect fields for aggregate Form
            foreach (var field in headerFields)
            {
                if (!AggregateHeaderFields.ContainsKey(field.SchemaName))
                {
                    AggregateHeaderFields[field.SchemaName] = field;
                }
            }

            foreach (var field in headerFields)
            {
                var comment = GetFieldComment(field);
                if (!string.IsNullOrEmpty(comment))
                {
                    code.AppendLine($"{TAB3}/** {comment} */");
                }
                code.AppendLine($"{TAB3}{field.SchemaName}: DevKit.Controls.{GetControlType(field)};");
            }

            code.AppendLine($"{TAB2}}}");

            code.AppendLine();

            // Generate Tabs interfaces (with extra indentation for nested namespace)
            code.Append(GetTabsInterfacesNested(form.FormXml));



            // Aggregate tabs
            var tabInfos = GetTabInfos(form.FormXml);


            foreach (var tab in tabInfos)
            {
                if (!AggregateTabInfos.ContainsKey(tab.Name))
                {
                    AggregateTabInfos[tab.Name] = tab;
                }
                else
                {
                    var existingTab = AggregateTabInfos[tab.Name];
                    foreach (var section in tab.Sections)
                    {
                        if (!existingTab.Sections.Any(s => s.Name == section.Name))
                        {
                            existingTab.Sections.Add(section);
                        }
                    }
                }
            }

            // Generate IGrid interface
            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * Grid controls interface");
            code.AppendLine($"{TAB2} * Contains all subgrid controls on the form");
            code.AppendLine($"{TAB2} */");
            code.AppendLine($"{TAB2}export interface IGrid {{");

            var gridFields = GetGridFields(form.FormXml);



            // Collect grid fields for aggregate Form
            foreach (var field in gridFields)
            {
                if (!AggregateGridFields.ContainsKey(field.Id))
                {
                    AggregateGridFields[field.Id] = field;
                }
            }

            foreach (var field in gridFields)
            {
                if (!string.IsNullOrWhiteSpace(field.Label))
                {
                    code.AppendLine($"{TAB3}/** {field.Label} */");
                }
                code.AppendLine($"{TAB3}{field.Id}: DevKit.Controls.Grid;");
            }

            code.AppendLine($"{TAB2}}}");

            code.AppendLine();

            // Generate INavigation interface
            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * Navigation interface");
            code.AppendLine($"{TAB2} * Contains navigation items");
            code.AppendLine($"{TAB2} */");
            code.AppendLine($"{TAB2}export interface INavigation {{");

            var navigationFields = GetNavigationFields(form.FormXml);



            // Collect navigation fields for aggregate Form
            foreach (var nav in navigationFields)
            {
                if (!AggregateNavigationFields.ContainsKey(nav.Id))
                {
                    AggregateNavigationFields[nav.Id] = nav;
                }
            }

            foreach (var nav in navigationFields)
            {
                if (!string.IsNullOrEmpty(nav.Title))
                {
                    code.AppendLine($"{TAB3}/** {nav.Title} */");
                }
                code.AppendLine($"{TAB3}{nav.Id}: DevKit.Controls.NavigationItem;");
            }

            code.AppendLine($"{TAB2}}}");

            code.AppendLine();

            // Generate IQuickForm interface
            var quickFormFields = await GetQuickFormFieldsAsync(form.FormXml);



            // Collect quickform fields for aggregate Form
            foreach (var qf in quickFormFields)
            {
                if (!AggregateQuickFormFields.ContainsKey(qf.QuickFormName))
                {
                    AggregateQuickFormFields[qf.QuickFormName] = qf;
                }
            }

            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * QuickForm interface");
            code.AppendLine($"{TAB2} * Contains quick view form controls");
            code.AppendLine($"{TAB2} */");
            code.AppendLine($"{TAB2}export interface IQuickForm {{");

            foreach (var qf in quickFormFields)
            {
                code.AppendLine($"{TAB3}{qf.QuickFormName}: DevKit.Controls.IQuickView & {{");
                code.AppendLine($"{TAB4}Body: I{qf.QuickFormName}Body;");
                code.AppendLine($"{TAB3}}};");
            }

            code.AppendLine($"{TAB2}}}");

            code.AppendLine();

            // Generate QuickForm body interfaces
            foreach (var qf in quickFormFields)
            {
                code.AppendLine($"{TAB2}/**");
                code.AppendLine($"{TAB2} * {qf.QuickFormName} quick view control body interface");
                code.AppendLine($"{TAB2} */");
                code.AppendLine($"{TAB2}export interface I{qf.QuickFormName}Body {{");

                foreach (var field in qf.Fields)
                {
                    if (!string.IsNullOrEmpty(field.Comment))
                    {
                        code.AppendLine($"{TAB3}/** {field.Comment} */");
                    }
                    code.AppendLine($"{TAB3}{field.Name}: DevKit.Controls.QuickView;");
                }

                code.AppendLine($"{TAB2}}}");
                code.AppendLine();
            }

            // Generate IProcess interface
            // var processFields = await GetProcessFieldsAsync();



            // Collect process fields for aggregate Form
            foreach (var process in processFields)
            {
                if (!AggregateProcessFields.ContainsKey(process.ProcessName))
                {
                    AggregateProcessFields[process.ProcessName] = process;
                }
            }

            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * Process interface");
            code.AppendLine($"{TAB2} * Contains business process flow definitions");
            code.AppendLine($"{TAB2} */");
            code.AppendLine($"{TAB2}export interface IProcess extends DevKit.Controls.IProcess {{");

            foreach (var process in processFields)
            {
                code.AppendLine($"{TAB3}{process.ProcessName}: I{process.ProcessName};");
            }

            code.AppendLine($"{TAB2}}}");

            code.AppendLine();

            // Generate Process field interfaces
            foreach (var process in processFields)
            {
                code.AppendLine($"{TAB2}/**");
                code.AppendLine($"{TAB2} * {process.ProcessName} Business Process Flow fields interface");
                code.AppendLine($"{TAB2} */");
                code.AppendLine($"{TAB2}export interface I{process.ProcessName} {{");

                var usedNames = new Dictionary<string, int>();

                foreach (var field in process.Fields)
                {
                    var fieldInfo = GetProcessFieldInfo(field);
                    var baseName = fieldInfo.Name;
                    string schemaName;

                    if (usedNames.ContainsKey(baseName))
                    {
                        usedNames[baseName]++;
                        schemaName = baseName + "_" + usedNames[baseName].ToString();
                    }
                    else
                    {
                        usedNames[baseName] = 0;
                        schemaName = baseName;
                    }

                    if (!string.IsNullOrEmpty(fieldInfo.DisplayName))
                    {
                        code.AppendLine($"{TAB3}/** {fieldInfo.DisplayName} */");
                    }
                    code.AppendLine($"{TAB3}{schemaName}: DevKit.Controls.{fieldInfo.Type};");
                }

                code.AppendLine($"{TAB2}}}");
                code.AppendLine();
            }

            // Generate IDialog interface
            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * Dialog interface");
            code.AppendLine($"{TAB2} * For quick create dialogs or other dialog forms");
            code.AppendLine($"{TAB2} */");
            code.AppendLine($"{TAB2}export interface IDialog extends DevKit.IDialog {{");

            var dialogFields = GetDialogFields(form.FormXml);


            foreach (var field in dialogFields)
            {
                code.AppendLine($"{TAB3}/** {field} field for dialog */");
                code.AppendLine($"{TAB3}{field}: DevKit.Controls.String;");
            }

            code.AppendLine($"{TAB2}}}");

            // Close nested namespace for interfaces
            code.AppendLine($"{TAB}}}");
            code.AppendLine();

            // Generate Form class at entity namespace level (using declaration merging)
            code.Append(await GetFormClassAsync(safeName, form.FormXml, false, processFields));


            code.AppendLine();

            return code.ToString();
        }


        private static async Task<string> GetFormClassAsync(string formName, string formXml, bool isQuickCreate, List<ProcessFields> processFields = null)
        {
            var code = new StringBuilder();

            code.AppendLine($"{TAB}/**");
            code.AppendLine($"{TAB} * {formName} Form class");
            code.AppendLine($"{TAB} * Provides typed access to all form controls");
            code.AppendLine($"{TAB} * Usage: new {GetSafeEntityName(EntityMetadata.SchemaName)}.{formName}(executionContext)");
            code.AppendLine($"{TAB} */");
            if (isQuickCreate)
            {
                // Reference interfaces from nested namespace for quick create forms
                code.AppendLine($"{TAB}export class {formName} extends FormBase<{formName}.IBody, undefined, undefined, undefined, undefined, undefined, undefined> {{");
            }
            else
            {
                // Reference interfaces from nested namespace for full forms
                code.AppendLine($"{TAB}export class {formName} extends FormBase<{formName}.IBody, {formName}.IHeader, {formName}.IGrid, {formName}.INavigation, {formName}.IQuickForm, {formName}.IProcess, {formName}.IDialog> {{");
            }
            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * Creates a {formName} Form instance");
            code.AppendLine($"{TAB2} * @param executionContext The execution context from form event");
            code.AppendLine($"{TAB2} * @param defaultWebResourceName Optional default web resource name");
            code.AppendLine($"{TAB2} */");
            code.AppendLine($"{TAB2}constructor(executionContext: any, defaultWebResourceName?: string) {{");
            code.AppendLine($"{TAB3}super(executionContext, defaultWebResourceName, {{");

            // Body fields
            var bodyArray = GetBodyFieldNames(formXml);
            code.AppendLine($"{TAB4}body: [{string.Join(", ", bodyArray.Select(x => $"'{x}'"))}],");

            // Header fields
            var headerArray = GetHeaderFieldNames(formXml);
            code.AppendLine($"{TAB4}header: [{string.Join(", ", headerArray.Select(x => $"'{x}'"))}],");

            // Tab fields
            var tabArray = GetTabFieldNames(formXml);
            code.AppendLine($"{TAB4}tab: [{string.Join(", ", tabArray.Select(x => $"'{x}'"))}],");

            // Grid fields
            var gridArray = GetGridFieldNames(formXml);
            code.AppendLine($"{TAB4}grid: [{string.Join(", ", gridArray.Select(x => $"'{x}'"))}],");

            // Navigation, Quick form, BPF, Dialog fields
            if (!isQuickCreate)
            {
                // Navigation fields
                var navArray = GetNavigationFieldNames(formXml);
                code.AppendLine($"{TAB4}navigation: [{string.Join(", ", navArray.Select(x => $"'{x}'"))}],");

                var quickArray = await GetQuickFormFieldNamesAsync(formXml);
                code.AppendLine($"{TAB4}quick: [{string.Join(", ", quickArray.Select(x => $"'{x}'"))}],");

                // BPF fields
                var bpfArray = GetBpfFieldNames(processFields);
                code.AppendLine($"{TAB4}bpf: [{string.Join(", ", bpfArray.Select(x => $"'{x}'"))}],");

                // Dialog fields
                var dialogArray = GetDialogFieldNames(formXml);
                code.AppendLine($"{TAB4}dialog: [{string.Join(", ", dialogArray.Select(x => $"'{x}'"))}]");
            }
            else
            {
                // Quick Create forms don't have navigation, quick forms, BPF, or dialogs
                code.AppendLine($"{TAB4}navigation: [],");
                code.AppendLine($"{TAB4}quick: [],");
                code.AppendLine($"{TAB4}bpf: [],");
                code.AppendLine($"{TAB4}dialog: []");
            }

            code.AppendLine($"{TAB3}}});");
            code.AppendLine($"{TAB2}}}");
            code.AppendLine($"{TAB}}}");

            return code.ToString();
        }

        /// <summary>
        /// Generates the aggregate Form class that contains all unique fields from all main forms
        /// </summary>
        private static async Task<string> GetAggregateFormTsCodeAsync()
        {
            var code = new StringBuilder();

            // Comment header for aggregate Form
            code.AppendLine($"{TAB}// ========================================================================");
            code.AppendLine($"{TAB}// Aggregate Form: Form (contains all fields from all forms)");
            code.AppendLine($"{TAB}// ========================================================================");
            code.AppendLine();

            // Start nested namespace for aggregate Form interfaces
            code.AppendLine($"{TAB}export namespace {AGGREGATE_FORM_NAME} {{");
            code.AppendLine();

            // Generate IBody interface with all unique body fields
            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * Aggregate Body controls interface");
            code.AppendLine($"{TAB2} * Contains all controls from all forms on the entity");
            code.AppendLine($"{TAB2} */");
            code.AppendLine($"{TAB2}export interface IBody {{");

            foreach (var field in AggregateBodyFields.Values.OrderBy(f => f.SchemaName))
            {
                var comment = GetFieldComment(field);
                if (!string.IsNullOrEmpty(comment))
                {
                    code.AppendLine($"{TAB3}/** {comment} */");
                }
                code.AppendLine($"{TAB3}{field.SchemaName}: DevKit.Controls.{GetControlType(field)};");
            }
            code.AppendLine($"{TAB2}}}");
            code.AppendLine();

            // Generate IHeader interface with all unique header fields
            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * Aggregate Header controls interface");
            code.AppendLine($"{TAB2} * Contains all header controls from all forms on the entity");
            code.AppendLine($"{TAB2} */");
            code.AppendLine($"{TAB2}export interface IHeader extends DevKit.Controls.IHeader {{");

            foreach (var field in AggregateHeaderFields.Values.OrderBy(f => f.SchemaName))
            {
                var comment = GetFieldComment(field);
                if (!string.IsNullOrEmpty(comment))
                {
                    code.AppendLine($"{TAB3}/** {comment} */");
                }
                code.AppendLine($"{TAB3}{field.SchemaName}: DevKit.Controls.{GetControlType(field)};");
            }
            code.AppendLine($"{TAB2}}}");
            code.AppendLine();

            // Generate IGrid interface
            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * Aggregate Grid controls interface");
            code.AppendLine($"{TAB2} */");
            code.AppendLine($"{TAB2}export interface IGrid {{");

            foreach (var field in AggregateGridFields.Values.OrderBy(f => f.Id))
            {
                if (!string.IsNullOrWhiteSpace(field.Label))
                {
                    code.AppendLine($"{TAB3}/** {field.Label} */");
                }
                code.AppendLine($"{TAB3}{field.Id}: DevKit.Controls.Grid;");
            }
            code.AppendLine($"{TAB2}}}");
            code.AppendLine();

            // Generate INavigation interface
            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * Aggregate Navigation interface");
            code.AppendLine($"{TAB2} */");
            code.AppendLine($"{TAB2}export interface INavigation {{");

            foreach (var nav in AggregateNavigationFields.Values.OrderBy(f => f.Id))
            {
                if (!string.IsNullOrEmpty(nav.Title))
                {
                    code.AppendLine($"{TAB3}/** {nav.Title} */");
                }
                code.AppendLine($"{TAB3}{nav.Id}: DevKit.Controls.NavigationItem;");
            }
            code.AppendLine($"{TAB2}}}");
            code.AppendLine();

            // Generate IQuickForm interface
            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * Aggregate QuickForm interface");
            code.AppendLine($"{TAB2} */");
            code.AppendLine($"{TAB2}export interface IQuickForm {{");

            foreach (var qf in AggregateQuickFormFields.Values.OrderBy(f => f.QuickFormName))
            {
                code.AppendLine($"{TAB3}{qf.QuickFormName}: DevKit.Controls.IQuickView & {{");
                code.AppendLine($"{TAB4}Body: I{qf.QuickFormName}Body;");
                code.AppendLine($"{TAB3}}};");
            }
            code.AppendLine($"{TAB2}}}");
            code.AppendLine();

            // Generate QuickForm body interfaces
            foreach (var qf in AggregateQuickFormFields.Values.OrderBy(f => f.QuickFormName))
            {
                code.AppendLine($"{TAB2}export interface I{qf.QuickFormName}Body {{");
                foreach (var field in qf.Fields)
                {
                    if (!string.IsNullOrEmpty(field.Comment))
                    {
                        code.AppendLine($"{TAB3}/** {field.Comment} */");
                    }
                    code.AppendLine($"{TAB3}{field.Name}: DevKit.Controls.QuickView;");
                }
                code.AppendLine($"{TAB2}}}");
                code.AppendLine();
            }

            // Generate IProcess interface
            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * Aggregate Process interface");
            code.AppendLine($"{TAB2} */");
            code.AppendLine($"{TAB2}export interface IProcess extends DevKit.Controls.IProcess {{");

            foreach (var process in AggregateProcessFields.Values.OrderBy(f => f.ProcessName))
            {
                code.AppendLine($"{TAB3}{process.ProcessName}: I{process.ProcessName};");
            }
            code.AppendLine($"{TAB2}}}");
            code.AppendLine();

            // Generate Process field interfaces
            foreach (var process in AggregateProcessFields.Values.OrderBy(f => f.ProcessName))
            {
                code.AppendLine($"{TAB2}export interface I{process.ProcessName} {{");
                var usedNames = new Dictionary<string, int>();
                foreach (var field in process.Fields)
                {
                    var fieldInfo = GetProcessFieldInfo(field);
                    var baseName = fieldInfo.Name;
                    string schemaName;

                    if (usedNames.ContainsKey(baseName))
                    {
                        usedNames[baseName]++;
                        schemaName = baseName + "_" + usedNames[baseName].ToString();
                    }
                    else
                    {
                        usedNames[baseName] = 0;
                        schemaName = baseName;
                    }

                    if (!string.IsNullOrEmpty(fieldInfo.DisplayName))
                    {
                        code.AppendLine($"{TAB3}/** {fieldInfo.DisplayName} */");
                    }
                    code.AppendLine($"{TAB3}{schemaName}: DevKit.Controls.{fieldInfo.Type};");
                }
                code.AppendLine($"{TAB2}}}");
                code.AppendLine();
            }

            // Close nested namespace for aggregate Form interfaces
            code.AppendLine($"{TAB}}}");
            code.AppendLine();

            // Generate aggregate Form class
            code.AppendLine($"{TAB}/**");
            code.AppendLine($"{TAB} * Aggregate Form class");
            code.AppendLine($"{TAB} * Contains all fields from all forms - useful when form type is unknown at compile time");
            code.AppendLine($"{TAB} * Usage: new {GetSafeEntityName(EntityMetadata.SchemaName)}.{AGGREGATE_FORM_NAME}(executionContext)");
            code.AppendLine($"{TAB} */");
            code.AppendLine($"{TAB}export class {AGGREGATE_FORM_NAME} extends FormBase<{AGGREGATE_FORM_NAME}.IBody, {AGGREGATE_FORM_NAME}.IHeader, {AGGREGATE_FORM_NAME}.IGrid, {AGGREGATE_FORM_NAME}.INavigation, {AGGREGATE_FORM_NAME}.IQuickForm, {AGGREGATE_FORM_NAME}.IProcess, undefined> {{");
            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * Creates an aggregate {EntityMetadata.SchemaName} Form instance");
            code.AppendLine($"{TAB2} * @param executionContext The execution context from form event");
            code.AppendLine($"{TAB2} * @param defaultWebResourceName Optional default web resource name");
            code.AppendLine($"{TAB2} */");
            code.AppendLine($"{TAB2}constructor(executionContext: any, defaultWebResourceName?: string) {{");
            code.AppendLine($"{TAB3}super(executionContext, defaultWebResourceName, {{");

            // Body fields
            var bodyArray = AggregateBodyFields.Keys.OrderBy(k => k).ToList();
            code.AppendLine($"{TAB4}body: [{string.Join(", ", bodyArray.Select(x => $"'{x}'"))}],");

            // Header fields
            var headerArray = AggregateHeaderFields.Keys.OrderBy(k => k).ToList();
            code.AppendLine($"{TAB4}header: [{string.Join(", ", headerArray.Select(x => $"'{x}'"))}],");

            // Tab fields
            var tabArray = new List<string>();
            foreach (var tab in AggregateTabInfos.Values.OrderBy(t => t.Name))
            {
                foreach (var section in tab.Sections.OrderBy(s => s.Name))
                {
                    tabArray.Add($"{tab.Name}___{section.Name}");
                }
            }
            code.AppendLine($"{TAB4}tab: [{string.Join(", ", tabArray.Select(x => $"'{x}'"))}],");

            // Grid fields
            var gridArray = AggregateGridFields.Keys.OrderBy(k => k).ToList();
            code.AppendLine($"{TAB4}grid: [{string.Join(", ", gridArray.Select(x => $"'{x}'"))}],");

            // Navigation fields
            var navArray = AggregateNavigationFields.Keys.OrderBy(k => k).ToList();
            code.AppendLine($"{TAB4}navigation: [{string.Join(", ", navArray.Select(x => $"'{x}'"))}],");

            // Quick form fields
            var quickArray = new List<string>();
            foreach (var qf in AggregateQuickFormFields.Values)
            {
                foreach (var field in qf.Fields)
                {
                    quickArray.Add($"{qf.QuickFormName}___{field.Name}");
                }
            }
            quickArray = quickArray.OrderBy(x => x).ToList();
            code.AppendLine($"{TAB4}quick: [{string.Join(", ", quickArray.Select(x => $"'{x}'"))}],");

            // BPF fields
            var bpfArray = new List<string>();
            foreach (var process in AggregateProcessFields.Values)
            {
                var usedNames = new Dictionary<string, int>();
                foreach (var field in process.Fields)
                {
                    var fieldInfo = GetProcessFieldInfo(field);
                    var baseName = fieldInfo.Name;
                    string schemaName;

                    if (usedNames.ContainsKey(baseName))
                    {
                        usedNames[baseName]++;
                        schemaName = baseName + "_" + usedNames[baseName].ToString();
                    }
                    else
                    {
                        usedNames[baseName] = 0;
                        schemaName = baseName;
                    }
                    bpfArray.Add($"{process.ProcessName}___{schemaName}");
                }
            }
            bpfArray = bpfArray.OrderBy(x => x).ToList();
            code.AppendLine($"{TAB4}bpf: [{string.Join(", ", bpfArray.Select(x => $"'{x}'"))}],");

            // Dialog - empty for aggregate
            code.AppendLine($"{TAB4}dialog: []");

            code.AppendLine($"{TAB3}}});");
            code.AppendLine($"{TAB2}}}");
            code.AppendLine($"{TAB}}}");
            code.AppendLine();

            return code.ToString();
        }


        private static List<TabInfo> GetTabInfos(string formXml)
        {
            return GetTabInfos(new FormContext(formXml));
        }

        private static List<TabInfo> GetTabInfos(FormContext ctx)
        {
            var tabs = from x in ctx.XDoc.Descendants("tabs").Elements("tab")
                       let tabName = x.Attribute("name")?.Value
                       where !string.IsNullOrEmpty(tabName)
                       select new TabInfo
                       {
                           Name = tabName,
                           Label = x.Descendants("labels").Descendants("label").FirstOrDefault(l => l.Attribute("languagecode")?.Value == "1033")?.Attribute("description")?.Value,
                           Sections = (from s in x.Descendants("columns").Descendants("column").Descendants("sections").Elements("section")
                                       let sectionName = s.Attribute("name")?.Value
                                       where !string.IsNullOrEmpty(sectionName)
                                       select new SectionInfo
                                       {
                                           Name = sectionName,
                                           Label = s.Descendants("labels").Descendants("label").FirstOrDefault(l => l.Attribute("languagecode")?.Value == "1033")?.Attribute("description")?.Value
                                       }).ToList()
                       };
            return tabs.ToList();
        }

        private class TabInfo
        {
            public string Name { get; set; }
            public string Label { get; set; }
            public List<SectionInfo> Sections { get; set; }
        }

        private class SectionInfo
        {
            public string Name { get; set; }
            public string Label { get; set; }
        }

        private static string GetTabsInterfaces(string formXml)
        {
            var code = new StringBuilder();
            var xdoc = XDocument.Parse(formXml);
            var tabs = from x in xdoc.Descendants("tabs").Elements("tab")
                       select new
                       {
                           Name = x?.Attribute("name")?.Value,
                           Label = x?.Descendants("labels")?.Descendants("label")?.FirstOrDefault()?.Attribute("description")?.Value,
                           InnerText = x?.ToString()
                       };
            tabs = tabs.OrderBy(x => x.Name).ToList();

            if (tabs.Count() == 0) return string.Empty;

            var existTabs = new List<string>();
            var tabInfos = new List<TabInfo>();

            foreach (var tab in tabs)
            {
                if (string.IsNullOrEmpty(Helper.SafeIdentifier(tab.Name))) continue;
                if (existTabs.Contains(Helper.SafeIdentifier(tab.Name))) continue;
                existTabs.Add(Helper.SafeIdentifier(tab.Name));

                var tabName = Helper.SafeIdentifier(tab.Name);
                var xdoc2 = XDocument.Parse(tab.InnerText);
                var sections = from x2 in xdoc2
                               .Descendants("columns")
                               .Descendants("column")
                               .Descendants("sections")
                               .Elements("section")
                               select new
                               {
                                   Name = x2?.Attribute("name")?.Value,
                                   Label = x2?.Descendants("labels")?.Descendants("label")?.FirstOrDefault()?.Attribute("description")?.Value
                               };
                sections = sections.OrderBy(x => x.Name).ToList();

                var sectionList = new List<SectionInfo>();
                var existSections = new List<string>();

                foreach (var section in sections)
                {
                    if (section.Name == null) continue;
                    if (section.Name.StartsWith("ref_pan")) continue;
                    if (string.IsNullOrEmpty(Helper.SafeIdentifier(section.Name))) continue;
                    if (existSections.Contains(Helper.SafeIdentifier(section.Name))) continue;
                    existSections.Add(Helper.SafeIdentifier(section.Name));

                    sectionList.Add(new SectionInfo
                    {
                        Name = Helper.SafeIdentifier(section.Name),
                        Label = section.Label
                    });
                }

                if (sectionList.Count > 0)
                {
                    tabInfos.Add(new TabInfo
                    {
                        Name = tabName,
                        Label = tab.Label,
                        Sections = sectionList
                    });
                }
            }

            // Generate section interfaces
            foreach (var tabInfo in tabInfos)
            {
                code.AppendLine($"{TAB}export interface I{tabInfo.Name}TabSections {{");

                foreach (var section in tabInfo.Sections)
                {
                    if (!string.IsNullOrEmpty(section.Label))
                    {
                        code.AppendLine($"{TAB2}/** {section.Label} */");
                    }
                    code.AppendLine($"{TAB2}{section.Name}: DevKit.Controls.Section;");
                }

                code.AppendLine($"{TAB}}}");
                code.AppendLine();
            }

            // Generate tab interfaces
            foreach (var tabInfo in tabInfos)
            {
                if (!string.IsNullOrEmpty(tabInfo.Label))
                {
                    code.AppendLine($"{TAB}/** {tabInfo.Label} */");
                }
                code.AppendLine($"{TAB}export interface I{tabInfo.Name}Tab extends DevKit.Controls.ITab {{");
                code.AppendLine($"{TAB2}Section: I{tabInfo.Name}TabSections;");
                code.AppendLine($"{TAB}}}");
                code.AppendLine();
            }

            // Generate ITabs interface
            code.AppendLine($"{TAB}export interface ITabs {{");

            foreach (var tabInfo in tabInfos)
            {
                if (!string.IsNullOrEmpty(tabInfo.Label))
                {
                    code.AppendLine($"{TAB2}/** {tabInfo.Label} */");
                }
                code.AppendLine($"{TAB2}{tabInfo.Name}: I{tabInfo.Name}Tab;");
            }

            code.AppendLine($"{TAB}}}");
            code.AppendLine();

            return code.ToString();
        }

        /// <summary>
        /// Generates tab interfaces with extra indentation for nested namespace structure
        /// Uses TAB2/TAB3/TAB4 instead of TAB/TAB2/TAB3
        /// </summary>
        private static string GetTabsInterfacesNested(string formXml)
        {
            return GetTabsInterfacesNested(new FormContext(formXml));
        }

        private static string GetTabsInterfacesNested(FormContext ctx)
        {
            var code = new StringBuilder();
            var tabs = from x in ctx.XDoc.Descendants("tabs").Elements("tab")
                       select new
                       {
                           Name = x?.Attribute("name")?.Value,
                           Label = x?.Descendants("labels")?.Descendants("label")?.FirstOrDefault()?.Attribute("description")?.Value,
                           InnerText = x?.ToString()
                       };
            tabs = tabs.OrderBy(x => x.Name).ToList();

            if (tabs.Count() == 0) return string.Empty;

            var existTabs = new List<string>();
            var tabInfos = new List<TabInfo>();

            foreach (var tab in tabs)
            {
                if (string.IsNullOrEmpty(Helper.SafeIdentifier(tab.Name))) continue;
                if (existTabs.Contains(Helper.SafeIdentifier(tab.Name))) continue;
                existTabs.Add(Helper.SafeIdentifier(tab.Name));

                var tabName = Helper.SafeIdentifier(tab.Name);
                var xdoc2 = XDocument.Parse(tab.InnerText);
                var sections = from x2 in xdoc2
                               .Descendants("columns")
                               .Descendants("column")
                               .Descendants("sections")
                               .Elements("section")
                               select new
                               {
                                   Name = x2?.Attribute("name")?.Value,
                                   Label = x2?.Descendants("labels")?.Descendants("label")?.FirstOrDefault()?.Attribute("description")?.Value
                               };
                sections = sections.OrderBy(x => x.Name).ToList();

                var sectionList = new List<SectionInfo>();
                var existSections = new List<string>();

                foreach (var section in sections)
                {
                    if (section.Name == null) continue;
                    if (section.Name.StartsWith("ref_pan")) continue;
                    if (string.IsNullOrEmpty(Helper.SafeIdentifier(section.Name))) continue;
                    if (existSections.Contains(Helper.SafeIdentifier(section.Name))) continue;
                    existSections.Add(Helper.SafeIdentifier(section.Name));

                    sectionList.Add(new SectionInfo
                    {
                        Name = Helper.SafeIdentifier(section.Name),
                        Label = section.Label
                    });
                }

                if (sectionList.Count > 0)
                {
                    tabInfos.Add(new TabInfo
                    {
                        Name = tabName,
                        Label = tab.Label,
                        Sections = sectionList
                    });
                }
            }

            // Generate section interfaces (with extra indentation)
            foreach (var tabInfo in tabInfos)
            {
                code.AppendLine($"{TAB2}export interface I{tabInfo.Name}TabSections {{");

                foreach (var section in tabInfo.Sections)
                {
                    if (!string.IsNullOrEmpty(section.Label))
                    {
                        code.AppendLine($"{TAB3}/** {section.Label} */");
                    }
                    code.AppendLine($"{TAB3}{section.Name}: DevKit.Controls.Section;");
                }

                code.AppendLine($"{TAB2}}}");
                code.AppendLine();
            }

            // Generate tab interfaces (with extra indentation)
            foreach (var tabInfo in tabInfos)
            {
                if (!string.IsNullOrEmpty(tabInfo.Label))
                {
                    code.AppendLine($"{TAB2}/** {tabInfo.Label} */");
                }
                code.AppendLine($"{TAB2}export interface I{tabInfo.Name}Tab extends DevKit.Controls.ITab {{");
                code.AppendLine($"{TAB3}Section: I{tabInfo.Name}TabSections;");
                code.AppendLine($"{TAB2}}}");
                code.AppendLine();
            }

            // Generate ITabs interface (with extra indentation)
            code.AppendLine($"{TAB2}export interface ITabs {{");

            foreach (var tabInfo in tabInfos)
            {
                if (!string.IsNullOrEmpty(tabInfo.Label))
                {
                    code.AppendLine($"{TAB3}/** {tabInfo.Label} */");
                }
                code.AppendLine($"{TAB3}{tabInfo.Name}: I{tabInfo.Name}Tab;");
            }

            code.AppendLine($"{TAB2}}}");
            code.AppendLine();

            return code.ToString();
        }

        private class FieldInfo
        {
            public string SchemaName { get; set; }
            public string Id { get; set; }
            public string ClassId { get; set; }
            public string ControlId { get; set; }
            public string LogicalName { get; set; }
            public string Label { get; set; }
        }


        private class ProcessFieldInfo
        {
            public string Name { get; set; }
            public string DisplayName { get; set; }
            public string Type { get; set; }
        }

        private class QuickFormFieldInfo
        {
            public string Name { get; set; }
            public string Comment { get; set; }
        }

        private class QuickFormInfo
        {
            public string QuickFormName { get; set; }
            public List<QuickFormFieldInfo> Fields { get; set; }
        }

        private static List<FieldInfo> GetBodyFields(string formXml)
        {
            return GetBodyFields(new FormContext(formXml));
        }

        private static List<FieldInfo> GetBodyFields(FormContext ctx)
        {
            var rawFields = (from x in ctx.XDoc.Descendants("tabs").Descendants("tab").Descendants("columns")
                    .Descendants("column").Descendants("sections").Descendants("section").Descendants("rows")
                    .Descendants("row").Descendants("cell").Descendants("control")
                          select new FieldInfo
                          {
                              LogicalName = x?.Attribute("datafieldname")?.Value,
                              Id = x?.Attribute("id")?.Value,
                              ClassId = Helper.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                              ControlId = x?.Attribute("uniqueid")?.Value
                          }).ToList();

            rawFields = rawFields.Where(x => !string.IsNullOrEmpty(x.Id)).ToList();

            // Map to SchemaName and handle duplicate names using Dictionary
            var result = new List<FieldInfo>();
            var usedNames = new Dictionary<string, int>();
            var processedVirtualControls = new List<string>();

            foreach (var field in rawFields)
            {
                // Get the real ClassId (may be overridden by virtual control) - uses cached lookup
                var classId = ctx.GetRealClassId(field.ClassId, field.ControlId);

                // Handle regular attribute controls
                if (!string.IsNullOrEmpty(field.LogicalName) && ControlClassId.CONTROLS.Contains(classId))
                {
                    if (!AttributesByLogicalName.TryGetValue(field.LogicalName, out var crmAttribute)) continue;

                    var baseName = Helper.SafeIdentifier(crmAttribute.SchemaName);
                    string schemaName;

                    if (usedNames.ContainsKey(baseName))
                    {
                        usedNames[baseName]++;
                        schemaName = baseName + usedNames[baseName].ToString();
                    }
                    else
                    {
                        usedNames[baseName] = 0;
                        schemaName = baseName;
                    }

                    result.Add(new FieldInfo
                    {
                        SchemaName = schemaName,
                        Id = field.Id,
                        ClassId = classId,
                        ControlId = field.ControlId,
                        LogicalName = field.LogicalName
                    });
                }
                // Handle virtual controls (IFRAME, WebResource, etc.) - only specific types, not QuickViewForm/SubGrid
                else if (classId == ControlClassId.IFRAME ||
                         classId == ControlClassId.WEB_RESOURCE ||
                         classId == ControlClassId.NOTE ||
                         classId == ControlClassId.TIMER ||
                         classId == ControlClassId.EMAIL_ENGAGEMENT_ACTIONS ||
                         classId == ControlClassId.EMAIL_RECIPIENT_ACTIVITY ||
                         classId == ControlClassId.ACI_WIDGET ||
                         classId == ControlClassId.MAP_CONTROL ||
                         classId == ControlClassId.ACTION_CARDS ||
                         classId == ControlClassId.POWERBI)
                {
                    var controlId = Helper.SafeIdentifier(field.Id);
                    if (processedVirtualControls.Contains(controlId)) continue;
                    processedVirtualControls.Add(controlId);

                    result.Add(new FieldInfo
                    {
                        SchemaName = controlId,
                        Id = field.Id,
                        ClassId = classId,
                        ControlId = field.ControlId,
                        LogicalName = field.LogicalName
                    });
                }
            }

            return result.OrderBy(x => x.SchemaName).ToList();
        }

        private static List<FieldInfo> GetHeaderFields(string formXml)
        {
            return GetHeaderFields(new FormContext(formXml));
        }

        private static List<FieldInfo> GetHeaderFields(FormContext ctx)
        {
            var rawFields = (from x in ctx.XDoc.Descendants("header").Descendants("rows").Descendants("row")
                    .Descendants("cell").Descendants("control")
                          select new FieldInfo
                          {
                              LogicalName = x?.Attribute("datafieldname")?.Value,
                              Id = x?.Attribute("id")?.Value,
                              ClassId = Helper.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                              ControlId = x?.Attribute("uniqueid")?.Value
                          }).ToList();

            rawFields = rawFields.Where(x => !string.IsNullOrEmpty(x.LogicalName)).ToList();

            // Map to SchemaName and handle duplicate names using Dictionary
            var result = new List<FieldInfo>();
            var usedNames = new Dictionary<string, int>();

            foreach (var field in rawFields)
            {
                if (!AttributesByLogicalName.TryGetValue(field.LogicalName, out var crmAttribute)) continue;

                var baseName = Helper.SafeIdentifier(crmAttribute.SchemaName);
                string schemaName;

                if (usedNames.ContainsKey(baseName))
                {
                    usedNames[baseName]++;
                    schemaName = baseName + usedNames[baseName].ToString();
                }
                else
                {
                    usedNames[baseName] = 0;
                    schemaName = baseName;
                }

                result.Add(new FieldInfo
                {
                    SchemaName = schemaName,
                    Id = field.Id,
                    ClassId = field.ClassId,
                    ControlId = field.ControlId,
                    LogicalName = field.LogicalName
                });
            }

            return result.OrderBy(x => x.SchemaName).ToList();
        }



        private class GridInfo
        {
            public string Id { get; set; }
            public string Label { get; set; }
        }

        private static List<GridInfo> GetGridFields(string formXml)
        {
            return GetGridFields(new FormContext(formXml));
        }

        private static List<GridInfo> GetGridFields(FormContext ctx)
        {
            var fields = (from x in ctx.XDoc.Descendants("tabs").Descendants("tab").Descendants("columns")
                    .Descendants("column").Descendants("sections").Descendants("section").Descendants("rows")
                    .Descendants("row").Descendants("cell")
                          select new
                          {
                              Control = x.Descendants("control").FirstOrDefault(),
                              // Get label from cell's labels element
                              Label = x?.Descendants("labels")?.Descendants("label")?.FirstOrDefault()?.Attribute("description")?.Value
                          })
                          .Where(x => x.Control != null)
                          .Select(x => new FieldInfo
                          {
                              LogicalName = Helper.SafeIdentifier(x.Control?.Attribute("datafieldname")?.Value),
                              Id = x.Control?.Attribute("id")?.Value,
                              ClassId = Helper.TrimGuid(x.Control?.Attribute("classid")?.Value?.ToUpper()),
                              ControlId = x.Control?.Attribute("uniqueid")?.Value,
                              Label = x.Label
                          }).Distinct().ToList();

            var gridFields = new List<GridInfo>();
            var addedGrids = new List<string>();
            foreach (var field in fields.OrderBy(x => x.Id))
            {
                var classId = ctx.GetRealClassId(field.ClassId, field.ControlId);
                if (classId != ControlClassId.SUB_GRID && classId != ControlClassId.SUB_GRID_PANEL) continue;
                if (addedGrids.Contains(field.Id)) continue;
                addedGrids.Add(field.Id);
                gridFields.Add(new GridInfo { Id = field.Id, Label = field.Label });
            }

            return gridFields;
        }

        private class NavigationInfo
        {
            public string Id { get; set; }
            public string Title { get; set; }
        }


        private static List<NavigationInfo> GetNavigationFields(string formXml)
        {
            return GetNavigationFields(new FormContext(formXml));
        }

        private static List<NavigationInfo> GetNavigationFields(FormContext ctx)
        {
            var navItems = (from x in ctx.XDoc
                            .Descendants("Navigation")
                            .Descendants("NavBar")
                            .Descendants("NavBarByRelationshipItem")
                            let id = x?.Attribute("Id")?.Value
                            let title = x?.Descendants("Titles")?.Descendants("Title")?.FirstOrDefault()?.Attribute("Text")?.Value
                            where !string.IsNullOrEmpty(id)
                            select new NavigationInfo
                            {
                                Id = Helper.SafeIdentifier(id),
                                Title = title
                            }).Distinct().ToList();

            if (EntityMetadata.IsActivityParty == true && !navItems.Any(x => x.Id == "navActivities"))
            {
                navItems.Add(new NavigationInfo { Id = "navActivities", Title = "Activities" });
            }

            return navItems.OrderBy(x => x.Id).ToList();
        }

        private static async Task<List<QuickFormInfo>> GetQuickFormFieldsAsync(string formXml)
        {
            var quickForms = new List<QuickFormInfo>();
            var xdoc = XDocument.Parse(formXml);
            var fields = from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns")
                    .Descendants("column").Descendants("sections").Descendants("section").Descendants("rows")
                    .Descendants("row").Descendants("cell").Descendants("control")
                         select new
                         {
                             QuickForms = x?.Descendants("parameters").Descendants("QuickForms"),
                             id = (string)x?.Attribute("id")
                         };

            var quickFormIds = (from f in fields
                                where f.QuickForms.Count() != 0
                                select f.id).ToList();
            quickFormIds.Sort();

            if (quickFormIds.Count == 0) return quickForms;

            foreach (var quickFormId in quickFormIds)
            {
                var qfFields = await GetQuickFormBodyFieldsAsync(formXml, quickFormId);
                if (qfFields.Count > 0)
                {
                    quickForms.Add(new QuickFormInfo
                    {
                        QuickFormName = Helper.SafeIdentifier(quickFormId),
                        Fields = qfFields
                    });
                }
            }

            return quickForms;
        }

        private static async Task<List<QuickFormFieldInfo>> GetQuickFormBodyFieldsAsync(string formXml, string id)
        {
            var fields = new List<QuickFormFieldInfo>();
            var xdoc = XDocument.Parse(formXml);
            var node = from x in xdoc
                          .Descendants("tabs")
                          .Descendants("tab")
                          .Descendants("columns")
                          .Descendants("column")
                          .Descendants("sections")
                          .Descendants("section")
                          .Descendants("rows")
                          .Descendants("row")
                          .Descendants("cell")
                          .Elements("control")
                       where x?.Attribute("id")?.Value == id &&
                             x?.Attribute("classid")?.Value == $"{{{ControlClassId.QUICK_VIEW_FORM}}}"
                       select x;

            var node2 = (from x in node
                            .Descendants("parameters")
                            .Descendants("QuickForms")
                         select x.Value
                        ).FirstOrDefault();

            if (node2 == null) return fields;

            var xdoc2 = XDocument.Parse(node2);
            var quickViewXml = (from x in xdoc2.Descendants("QuickFormId")
                                select new { formId = x.Value, entityLogicalName = x?.Attribute("entityname")?.Value }).FirstOrDefault();

            if (quickViewXml == null) return fields;

            var quickViewFormXml = await GetFormXmlAsync(quickViewXml.formId, quickViewXml.entityLogicalName);
            if (quickViewFormXml == string.Empty) return fields;

            var xdoc3 = XDocument.Parse(quickViewFormXml);
            var qvFields = (from x in xdoc3
                          .Descendants("tabs")
                          .Descendants("tab")
                          .Descendants("columns")
                          .Descendants("column")
                          .Descendants("sections")
                          .Descendants("section")
                          .Descendants("rows")
                          .Descendants("row")
                          .Descendants("cell")
                          .Descendants("control")
                           select new IdName
                           {
                               Name = Helper.SafeIdentifier(x?.Attribute("datafieldname")?.Value),
                               Id = x?.Attribute("id").Value,
                               ClassId = Helper.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                               ControlId = x?.Attribute("uniqueid")?.Value
                           }).Distinct().ToList();

            qvFields = qvFields.OrderBy(x => x.Name).ToList();
            await XrmHelper.EntitiesMetadata.AddIfNotExistAsync(ServiceClient, quickViewXml.entityLogicalName);
            var quickViewMetadata = XrmHelper.EntitiesMetadata.Where(x => x.LogicalName == quickViewXml.entityLogicalName).FirstOrDefault();

            if (quickViewMetadata == null) return fields;
            if (quickViewMetadata.Attributes == null)
                quickViewMetadata = await XrmHelper.FetchEntityMetadataAsync(ServiceClient, quickViewXml.entityLogicalName);

            foreach (var field in qvFields)
            {
                var fieldAttribute = quickViewMetadata.Attributes.Where(x => x.LogicalName == field.Id).FirstOrDefault();
                if (fieldAttribute != null)
                {
                    string comment = null;

                    // Priority 1: Check Description first (per Microsoft SDK documentation)
                    if (fieldAttribute.Description?.UserLocalizedLabel != null &&
                        !string.IsNullOrWhiteSpace(fieldAttribute.Description.UserLocalizedLabel.Label))
                    {
                        comment = fieldAttribute.Description.UserLocalizedLabel.Label;
                    }
                    // Priority 2: Fallback to DisplayName if no Description
                    else if (fieldAttribute.DisplayName?.UserLocalizedLabel != null &&
                        !string.IsNullOrWhiteSpace(fieldAttribute.DisplayName.UserLocalizedLabel.Label))
                    {
                        comment = fieldAttribute.DisplayName.UserLocalizedLabel.Label;
                    }

                    fields.Add(new QuickFormFieldInfo
                    {
                        Name = Helper.SafeIdentifier(fieldAttribute.SchemaName),
                        Comment = comment
                    });
                }
            }

            return fields;
        }

        private static async Task<string> GetFormXmlAsync(string formId, string entityLogicalName)
        {
            await XrmHelper.EntitiesFormXml.AddIfNotExistAsync(ServiceClient, entityLogicalName);
            var form = XrmHelper.EntitiesFormXml.FirstOrDefault(x => x.FormType == FormType.QuickView && x.FormId == Guid.Parse(formId));
            if (form != null)
            {
                return form.FormXml;
            }
            return string.Empty;
        }

        private static async Task<List<ProcessFields>> GetProcessFieldsAsync()
        {
            var processList = new List<ProcessFields>();
            await XrmHelper.EntitiesProcessForm.AddIfNotExistAsync(ServiceClient, EntityMetadata.LogicalName);
            var processes = XrmHelper.EntitiesProcessForm.Where(x => x.EntityLogicalName == EntityMetadata.LogicalName).OrderBy(x => x.Name);

            if (processes.Count() == 0) return processList;

            foreach (var process in processes)
            {
                var name = Helper.SafeIdentifier(process.Name);
                var xdoc = XDocument.Parse(process.xaml);
                var ns = xdoc.Root?.GetNamespaceOfPrefix("mxswa");
                var rows2 = from x in xdoc.Descendants(ns + "Workflow").Elements(ns + "ActivityReference")
                            select new
                            {
                                DisplayName = x.Attribute("DisplayName")?.Value,
                                InnerText = x.ToString()
                            };

                var fields = new List<string>();
                foreach (var row in rows2)
                {
                    var arr = row.DisplayName.Split(' ');
                    if (arr.Length == 1 || arr[1] != EntityMetadata.LogicalName) continue;
                    const string pattern = @"DataFieldName=""([^""]+)""";
                    foreach (Match m in Regex.Matches(row.InnerText, pattern))
                    {
                        if (m.Groups.Count > 1)
                        {
                            var fieldName = m.Groups[1].Value;
                            fields.Add(fieldName);
                        }
                    }
                }

                fields.Sort();

                processList.Add(new ProcessFields
                {
                    ProcessName = name,
                    Fields = fields
                });
            }

            return processList;
        }

        private static ProcessFieldInfo GetProcessFieldInfo(string fieldLogicalName)
        {
            var fieldInfo = new ProcessFieldInfo { Name = fieldLogicalName, DisplayName = null, Type = "String" };

            AttributesByLogicalName.TryGetValue(fieldLogicalName, out var crmAttribute);
            if (crmAttribute != null)
            {
                fieldInfo.Name = Helper.SafeIdentifier(crmAttribute.SchemaName);

                // Priority 1: Check Description first (per Microsoft SDK documentation)
                if (crmAttribute.Description?.UserLocalizedLabel != null &&
                    !string.IsNullOrWhiteSpace(crmAttribute.Description.UserLocalizedLabel.Label))
                {
                    fieldInfo.DisplayName = crmAttribute.Description.UserLocalizedLabel.Label;
                }
                // Priority 2: Fallback to DisplayName if no Description
                else if (crmAttribute.DisplayName?.UserLocalizedLabel != null &&
                    !string.IsNullOrWhiteSpace(crmAttribute.DisplayName.UserLocalizedLabel.Label))
                {
                    fieldInfo.DisplayName = crmAttribute.DisplayName.UserLocalizedLabel.Label;
                }

                fieldInfo.Type = GetAttributeType(crmAttribute);
            }

            return fieldInfo;
        }

        private static List<string> GetDialogFields(string formXml)
        {
            // Dialog fields are typically not present in form XML, returning empty list
            return new List<string>();
        }

        private static List<string> GetBodyFieldNames(string formXml)
        {
            var bodyFields = GetBodyFields(formXml);
            return bodyFields.Select(x => x.SchemaName).ToList();
        }

        private static List<string> GetHeaderFieldNames(string formXml)
        {
            var headerFields = GetHeaderFields(formXml);
            return headerFields.Select(x => x.SchemaName).ToList();
        }

        private static List<string> GetTabFieldNames(string formXml)
        {
            var fields = new List<string>();
            var xdoc = XDocument.Parse(formXml);
            var tabs = from x in xdoc.Descendants("tabs").Elements("tab")
                       select new
                       {
                           Name = x?.Attribute("name")?.Value,
                           InnerText = x?.ToString()
                       };
            tabs = tabs.OrderBy(x => x.Name).ToList();

            if (tabs.Count() == 0) return fields;

            var existTabs = new List<string>();
            foreach (var tab in tabs)
            {
                if (string.IsNullOrEmpty(Helper.SafeIdentifier(tab.Name))) continue;
                if (existTabs.Contains(Helper.SafeIdentifier(tab.Name))) continue;
                existTabs.Add(Helper.SafeIdentifier(tab.Name));

                var tabName = Helper.SafeIdentifier(tab.Name);
                var xdoc2 = XDocument.Parse(tab.InnerText);
                var sections = from x2 in xdoc2
                               .Descendants("columns")
                               .Descendants("column")
                               .Descendants("sections")
                               .Elements("section")
                               select x2?.Attribute("name")?.Value;
                sections = sections.OrderBy(x => x).ToList();

                var existSections = new List<string>();
                foreach (var section in sections)
                {
                    if (section == null) continue;
                    if (section.StartsWith("ref_pan")) continue;
                    if (string.IsNullOrEmpty(Helper.SafeIdentifier(section))) continue;
                    if (existSections.Contains(Helper.SafeIdentifier(section))) continue;
                    existSections.Add(Helper.SafeIdentifier(section));

                    var sectionName = Helper.SafeIdentifier(section);
                    fields.Add($"{tabName}___{sectionName}");
                }
            }

            return fields;
        }

        private static List<string> GetGridFieldNames(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var fields = (from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns")
                    .Descendants("column").Descendants("sections").Descendants("section").Descendants("rows")
                    .Descendants("row").Descendants("cell").Descendants("control")
                          select new FieldInfo
                          {
                              LogicalName = Helper.SafeIdentifier(x?.Attribute("datafieldname")?.Value),
                              Id = x?.Attribute("id")?.Value,
                              ClassId = Helper.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                              ControlId = x?.Attribute("uniqueid")?.Value
                          }).Distinct().ToList();

            var gridFields = new List<string>();
            foreach (var field in fields.OrderBy(x => x.Id))
            {
                var classId = GetARealClassId(formXml, field.ClassId, field.ControlId);
                if (classId != ControlClassId.SUB_GRID && classId != ControlClassId.SUB_GRID_PANEL) continue;
                gridFields.Add(field.Id);
            }

            return gridFields;
        }

        private static List<string> GetNavigationFieldNames(string formXml)
        {
            var navItems = GetNavigationFields(formXml);
            return navItems.Select(x => x.Id).ToList();
        }

        private static async Task<List<string>> GetQuickFormFieldNamesAsync(string formXml)
        {
            var fields = new List<string>();
            var xdoc = XDocument.Parse(formXml);
            var controls = from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns")
                    .Descendants("column").Descendants("sections").Descendants("section").Descendants("rows")
                    .Descendants("row").Descendants("cell").Descendants("control")
                           select new
                           {
                               QuickForms = x?.Descendants("parameters").Descendants("QuickForms"),
                               id = (string)x?.Attribute("id")
                           };

            var quickFormIds = (from f in controls
                                where f.QuickForms.Count() != 0
                                select f.id).ToList();
            quickFormIds.Sort();

            if (quickFormIds.Count == 0) return fields;

            foreach (var quickFormId in quickFormIds)
            {
                var qfBodyFields = await GetQuickFormBodyFieldNamesAsync(formXml, quickFormId);
                fields.AddRange(qfBodyFields);
            }

            return fields;
        }

        private static async Task<List<string>> GetQuickFormBodyFieldNamesAsync(string formXml, string id)
        {
            var fields = new List<string>();
            var xdoc = XDocument.Parse(formXml);
            var node = from x in xdoc
                          .Descendants("tabs")
                          .Descendants("tab")
                          .Descendants("columns")
                          .Descendants("column")
                          .Descendants("sections")
                          .Descendants("section")
                          .Descendants("rows")
                          .Descendants("row")
                          .Descendants("cell")
                          .Elements("control")
                       where x?.Attribute("id")?.Value == id &&
                             x?.Attribute("classid")?.Value == $"{{{ControlClassId.QUICK_VIEW_FORM}}}"
                       select x;

            var node2 = (from x in node
                            .Descendants("parameters")
                            .Descendants("QuickForms")
                         select x.Value
                        ).FirstOrDefault();

            if (node2 == null) return fields;

            var xdoc2 = XDocument.Parse(node2);
            var quickViewXml = (from x in xdoc2.Descendants("QuickFormId")
                                select new { formId = x.Value, entityLogicalName = x?.Attribute("entityname")?.Value }).FirstOrDefault();

            if (quickViewXml == null) return fields;

            var quickViewFormXml = await GetFormXmlAsync(quickViewXml.formId, quickViewXml.entityLogicalName);
            if (quickViewFormXml == string.Empty) return fields;

            var xdoc3 = XDocument.Parse(quickViewFormXml);
            var qvFields = (from x in xdoc3
                          .Descendants("tabs")
                          .Descendants("tab")
                          .Descendants("columns")
                          .Descendants("column")
                          .Descendants("sections")
                          .Descendants("section")
                          .Descendants("rows")
                          .Descendants("row")
                          .Descendants("cell")
                          .Descendants("control")
                           select new IdName
                           {
                               Name = Helper.SafeIdentifier(x?.Attribute("datafieldname")?.Value),
                               Id = x?.Attribute("id").Value,
                               ClassId = Helper.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                               ControlId = x?.Attribute("uniqueid")?.Value
                           }).Distinct().ToList();

            qvFields = qvFields.OrderBy(x => x.Name).ToList();
            await XrmHelper.EntitiesMetadata.AddIfNotExistAsync(ServiceClient, quickViewXml.entityLogicalName);
            var quickViewMetadata = XrmHelper.EntitiesMetadata.Where(x => x.LogicalName == quickViewXml.entityLogicalName).FirstOrDefault();

            if (quickViewMetadata == null) return fields;
            if (quickViewMetadata.Attributes == null)
                quickViewMetadata = await XrmHelper.FetchEntityMetadataAsync(ServiceClient, quickViewXml.entityLogicalName);

            foreach (var field in qvFields)
            {
                var fieldAttribute = quickViewMetadata.Attributes.Where(x => x.LogicalName == field.Id).FirstOrDefault();
                if (fieldAttribute != null)
                {
                    fields.Add($"{Helper.SafeIdentifier(id)}___{Helper.SafeIdentifier(fieldAttribute.SchemaName)}");
                }
            }

            return fields;
        }

        private static List<string> GetBpfFieldNames(List<ProcessFields> processFields)
        {
            var fields = new List<string>();
            if (processFields == null || processFields.Count == 0) return fields;

            foreach (var process in processFields)
            {
                var processName = process.ProcessName;
                var usedNames = new Dictionary<string, int>();

                var currentProcessFields = new List<string>();

                foreach (var fieldLogicalName in process.Fields)
                {
                    if (AttributesByLogicalName.TryGetValue(fieldLogicalName, out var crmAttribute))
                    {
                        var schemaName = Helper.SafeIdentifier(crmAttribute.SchemaName);
                        var fullBaseName = $"{processName}___{schemaName}";
                        string outputName;

                        if (usedNames.ContainsKey(fullBaseName))
                        {
                            usedNames[fullBaseName]++;
                            outputName = $"{fullBaseName}_{usedNames[fullBaseName]}";
                        }
                        else
                        {
                            usedNames[fullBaseName] = 0;
                            outputName = fullBaseName;
                        }

                        currentProcessFields.Add(outputName);
                    }
                }
                currentProcessFields.Sort();
                fields.AddRange(currentProcessFields);
            }

            return fields;
        }

        private static List<string> GetDialogFieldNames(string formXml)
        {
            // Dialog fields are typically not present in form XML
            return new List<string>();
        }

        private static string GetARealClassId(string formXml, string classId, string controlId)
        {
            if (controlId == null || controlId.Length == 0) return classId;
            var xdoc = XDocument.Parse(formXml);
            var rows = from x in xdoc
                       .Descendants("controlDescriptions")
                       .Elements("controlDescription")
                       where x?.Attribute("forControl")?.Value == controlId
                       select x;
            if (rows == null) return classId;
            var rows2 = (from x in rows.Elements("customControl")
                         where x?.Attribute("id")?.Value != null
                         select new
                         {
                             id = x?.Attribute("id")?.Value?.ToString()
                         }).ToList();
            if (rows2.Count() == 0) return classId;
            foreach (var row in rows2)
            {
                if (Guid.TryParse(row.id, out var guid))
                {
                    return guid.ToString().ToUpper();
                }
            }
            return classId;
        }

        private static string GetControlType(FieldInfo field)
        {
            if (field == null || string.IsNullOrEmpty(field.Id)) return "String";

            // Check if it's a grid
            if (field.ClassId == ControlClassId.SUB_GRID || field.ClassId == ControlClassId.SUB_GRID_PANEL)
                return "Grid";

            // Check if it's an iframe
            if (field.ClassId == ControlClassId.IFRAME)
                return "IFrame";

            // Check if it's a web resource
            if (field.ClassId == ControlClassId.WEB_RESOURCE)
                return "WebResource";

            // Check for Note control
            if (field.ClassId == ControlClassId.NOTE)
                return "Note";

            // Check for Map control
            if (field.ClassId == ControlClassId.MAP_CONTROL)
                return "Map";

            // Check for ActionCards control
            if (field.ClassId == ControlClassId.ACTION_CARDS)
                return "ActionCards";

            // Check for Timer control
            if (field.ClassId == ControlClassId.TIMER)
                return "Timer";

            // Check for PowerBi control
            if (field.ClassId == ControlClassId.POWERBI)
                return "PowerBi";

            // Check for EmailEngagement control
            if (field.ClassId == ControlClassId.EMAIL_ENGAGEMENT_ACTIONS)
                return "EmailEngagement";

            // Check for EmailRecipient control
            if (field.ClassId == ControlClassId.EMAIL_RECIPIENT_ACTIVITY)
                return "EmailRecipient";

            // Check for AciWidget control
            if (field.ClassId == ControlClassId.ACI_WIDGET)
                return "AciWidget";

            // Check for File control
            if (field.ClassId == ControlClassId.FILE)
                return "File";

            // Check for Image control
            if (field.ClassId == ControlClassId.IMAGE)
                return "Image";

            // Try to find the attribute in metadata
            var logicalName = !string.IsNullOrEmpty(field.LogicalName) ? field.LogicalName : field.Id?.ToLower();
            var attribute = EntityMetadata.Attributes?.FirstOrDefault(x => x.LogicalName == logicalName);
            if (attribute != null)
            {
                return GetAttributeType(attribute);
            }

            return "String";
        }

        private static string GetAttributeType(AttributeMetadata attribute)
        {
            switch (attribute.AttributeType)
            {
                case AttributeTypeCode.Boolean:
                    return "Boolean";
                case AttributeTypeCode.DateTime:
                    return attribute is DateTimeAttributeMetadata dtAttr && dtAttr.Format == DateTimeFormat.DateOnly
                        ? "DateOnly"
                        : "DateTime";
                case AttributeTypeCode.Decimal:
                    return "Decimal";
                case AttributeTypeCode.Double:
                    return "Double";
                case AttributeTypeCode.Integer:
                    return "Integer";
                case AttributeTypeCode.Lookup:
                case AttributeTypeCode.Customer:
                case AttributeTypeCode.Owner:
                case AttributeTypeCode.PartyList:
                    return "Lookup";
                case AttributeTypeCode.Money:
                    return "Money";
                case AttributeTypeCode.Memo:
                    return "Memo";
                case AttributeTypeCode.Picklist:
                case AttributeTypeCode.State:
                case AttributeTypeCode.Status:
                    return "OptionSet";
                case AttributeTypeCode.Virtual:
                    if (attribute is MultiSelectPicklistAttributeMetadata)
                        return "MultiOptionSet";
                    return "String";
                default:
                    return "String";
            }
        }

        private static string GetFieldComment(FieldInfo field)
        {
            if (field == null) return null;

            // Use LogicalName first (preferred), fallback to Id if LogicalName is empty
            var logicalName = !string.IsNullOrEmpty(field.LogicalName) ? field.LogicalName : field.Id?.ToLower();
            if (string.IsNullOrEmpty(logicalName)) return null;

            var attribute = EntityMetadata.Attributes?.FirstOrDefault(x => x.LogicalName == logicalName);
            if (attribute != null)
            {
                // Priority 1: Check Description first (per Microsoft SDK documentation)
                if (attribute.Description?.UserLocalizedLabel != null &&
                    !string.IsNullOrWhiteSpace(attribute.Description.UserLocalizedLabel.Label))
                {
                    return attribute.Description.UserLocalizedLabel.Label;
                }

                // Priority 2: Fallback to DisplayName if no Description
                if (attribute.DisplayName?.UserLocalizedLabel != null &&
                    !string.IsNullOrWhiteSpace(attribute.DisplayName.UserLocalizedLabel.Label))
                {
                    return attribute.DisplayName.UserLocalizedLabel.Label;
                }
            }

            return null;
        }

        /// <summary>
        /// Gets the comment for a field by its logical name
        /// </summary>
        private static string GetFieldCommentByLogicalName(string logicalName)
        {
            if (string.IsNullOrEmpty(logicalName)) return null;

            var attribute = EntityMetadata.Attributes?.FirstOrDefault(x => x.LogicalName == logicalName);
            if (attribute != null)
            {
                // Priority 1: Check Description first (per Microsoft SDK documentation)
                if (attribute.Description?.UserLocalizedLabel != null &&
                    !string.IsNullOrWhiteSpace(attribute.Description.UserLocalizedLabel.Label))
                {
                    return attribute.Description.UserLocalizedLabel.Label;
                }

                // Priority 2: Fallback to DisplayName if no Description
                if (attribute.DisplayName?.UserLocalizedLabel != null &&
                    !string.IsNullOrWhiteSpace(attribute.DisplayName.UserLocalizedLabel.Label))
                {
                    return attribute.DisplayName.UserLocalizedLabel.Label;
                }
            }

            return null;
        }

        private static string GetUniqueFormName(string formName)
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
    }
}

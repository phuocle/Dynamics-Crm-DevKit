using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
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

            var code = new StringBuilder();

            // Header comments
            code.AppendLine("/**");
            code.AppendLine($" * {entityMetadata.SchemaName}.form.ts - {entityMetadata.SchemaName} Form for early-bound style form coding");
            code.AppendLine(" * Generated file - DO NOT MODIFY MANUALLY");
            code.AppendLine(" *");
            code.AppendLine(" * Structure:");
            code.AppendLine(" * 1. Imports");
            code.AppendLine(" * 2. Types - IBody, IHeader, ITabs, IGrid, INavigation, IQuickForm, IProcess");
            code.AppendLine(" * 3. Runtime - Form class with field configurations");
            code.AppendLine(" */");
            code.AppendLine();
            code.AppendLine("/// <reference path=\"../lib/devkit.d.ts\" />");
            code.AppendLine("import { FormBase } from '../lib/devkit';");
            code.AppendLine("import './OptionSet';");
            code.AppendLine();
            code.AppendLine("// ============================================================================");
            code.AppendLine("// 1. Types");
            code.AppendLine("// ============================================================================");
            code.AppendLine();

            // Generate forms
            foreach (var form in forms.Where(x => !x.IsQuickCreate))
            {
                code.Append(await GetMainFormTsCodeAsync(form));
            }

            foreach (var form in forms.Where(x => x.IsQuickCreate))
            {
                code.Append(await GetQuickCreateFormTsCodeAsync(form));
            }

            return code.ToString();
        }

        private static async Task<string> GetQuickCreateFormTsCodeAsync(SystemForm form)
        {
            var formName = Helper.GetFormName(form.Name, EntityMetadata.SchemaName);
            formName = GetUniqueFormName(formName);
            var safeName = Helper.SafeIdentifier(formName);

            var code = new StringBuilder();

            code.AppendLine($"export namespace Form{safeName} {{");
            code.AppendLine();

            // Generate IBody interface
            code.AppendLine($"{TAB}/**");
            code.AppendLine($"{TAB} * Body controls interface");
            code.AppendLine($"{TAB} * Contains all controls on the form body");
            code.AppendLine($"{TAB} */");
            code.AppendLine($"{TAB}export interface IBody {{");

            var bodyFields = GetBodyFields(form.FormXml);
            foreach (var field in bodyFields)
            {
                var comment = GetFieldComment(field);
                if (!string.IsNullOrEmpty(comment))
                {
                    code.AppendLine($"{TAB2}/** {comment} */");
                }
                code.AppendLine($"{TAB2}{field.LogicalName}: DevKit.Controls.{GetControlType(field)};");
            }

            code.AppendLine($"{TAB2}/** Form Tabs */");
            code.AppendLine($"{TAB2}Tab: ITabs;");
            code.AppendLine($"{TAB}}}");
            code.AppendLine();



            // Generate Tabs interfaces
            code.Append(GetTabsInterfaces(form.FormXml));



            // Generate Form class
            code.Append(await GetFormClassAsync(safeName, form.FormXml, true));

            code.AppendLine("}");
            code.AppendLine();

            return code.ToString();
        }

        private static async Task<string> GetMainFormTsCodeAsync(SystemForm form)
        {
            var formName = Helper.GetFormName(form.Name, EntityMetadata.SchemaName);
            formName = GetUniqueFormName(formName);
            var safeName = Helper.SafeIdentifier(formName);

            var code = new StringBuilder();

            code.AppendLine($"export namespace Form{safeName} {{");
            code.AppendLine();

            // Generate IBody interface
            code.AppendLine($"{TAB}/**");
            code.AppendLine($"{TAB} * Body controls interface");
            code.AppendLine($"{TAB} * Contains all controls on the form body");
            code.AppendLine($"{TAB} */");
            code.AppendLine($"{TAB}export interface IBody {{");

            var bodyFields = GetBodyFields(form.FormXml);
            foreach (var field in bodyFields)
            {
                var comment = GetFieldComment(field);
                if (!string.IsNullOrEmpty(comment))
                {
                    code.AppendLine($"{TAB2}/** {comment} */");
                }
                code.AppendLine($"{TAB2}{field.SchemaName}: DevKit.Controls.{GetControlType(field)};");
            }
            //code.AppendLine($"{TAB2}/** Form Tabs */");
            code.AppendLine($"{TAB2}Tab: ITabs;");
            code.AppendLine($"{TAB}}}");
            code.AppendLine();

            // Generate IHeader interface
            code.AppendLine($"{TAB}/**");
            code.AppendLine($"{TAB} * Header controls interface");
            code.AppendLine($"{TAB} * Contains controls displayed in the form header");
            code.AppendLine($"{TAB} */");
            code.AppendLine($"{TAB}export interface IHeader extends DevKit.Controls.IHeader {{");

            var headerFields = GetHeaderFields(form.FormXml);
            foreach (var field in headerFields)
            {
                var comment = GetFieldComment(field);
                if (!string.IsNullOrEmpty(comment))
                {
                    code.AppendLine($"{TAB2}/** {comment} */");
                }
                code.AppendLine($"{TAB2}{field.SchemaName}: DevKit.Controls.{GetControlType(field)};");
            }

            code.AppendLine($"{TAB}}}");
            code.AppendLine();

            // Generate Tabs interfaces
            code.Append(GetTabsInterfaces(form.FormXml));

            // Generate IGrid interface
            code.AppendLine($"{TAB}/**");
            code.AppendLine($"{TAB} * Grid controls interface");
            code.AppendLine($"{TAB} * Contains all subgrid controls on the form");
            code.AppendLine($"{TAB} */");
            code.AppendLine($"{TAB}export interface IGrid {{");

            var gridFields = GetGridFields(form.FormXml);
            foreach (var field in gridFields)
            {
                // Add JSDoc for grid label
                if (!string.IsNullOrWhiteSpace(field.Label))
                {
                    code.AppendLine($"{TAB2}/** {field.Label} */");
                }
                code.AppendLine($"{TAB2}{field.Id}: DevKit.Controls.Grid;");
            }


            code.AppendLine($"{TAB}}}");
            code.AppendLine();

            // Generate INavigation interface
            code.AppendLine($"{TAB}/**");
            code.AppendLine($"{TAB} * Navigation interface");
            code.AppendLine($"{TAB} * Contains navigation items");
            code.AppendLine($"{TAB} */");
            code.AppendLine($"{TAB}export interface INavigation {{");

            var navigationFields = GetNavigationFields(form.FormXml);
            foreach (var nav in navigationFields)
            {
                if (!string.IsNullOrEmpty(nav.Title))
                {
                    code.AppendLine($"{TAB2}/** {nav.Title} */");
                }
                code.AppendLine($"{TAB2}{nav.Id}: DevKit.Controls.NavigationItem;");
            }

            code.AppendLine($"{TAB}}}");
            code.AppendLine();

            // Generate IQuickForm interface
            var quickFormFields = await GetQuickFormFieldsAsync(form.FormXml);
            code.AppendLine($"{TAB}/**");
            code.AppendLine($"{TAB} * QuickForm interface");
            code.AppendLine($"{TAB} * Contains quick view form controls");
            code.AppendLine($"{TAB} */");
            code.AppendLine($"{TAB}export interface IQuickForm {{");

            foreach (var qf in quickFormFields)
            {
                code.AppendLine($"{TAB2}{qf.QuickFormName}: DevKit.Controls.IQuickView & {{");
                code.AppendLine($"{TAB3}Body: I{qf.QuickFormName}Body;");
                code.AppendLine($"{TAB2}}};");
            }

            code.AppendLine($"{TAB}}}");
            code.AppendLine();

            // Generate QuickForm body interfaces
            foreach (var qf in quickFormFields)
            {
                code.AppendLine($"{TAB}/**");
                code.AppendLine($"{TAB} * {qf.QuickFormName} quick view control body interface");
                code.AppendLine($"{TAB} */");
                code.AppendLine($"{TAB}export interface I{qf.QuickFormName}Body {{");

                foreach (var field in qf.Fields)
                {
                    if (!string.IsNullOrEmpty(field.Comment))
                    {
                        code.AppendLine($"{TAB2}/** {field.Comment} */");
                    }
                    code.AppendLine($"{TAB2}{field.Name}: DevKit.Controls.QuickView;");
                }

                code.AppendLine($"{TAB}}}");
                code.AppendLine();
            }

            // Generate IProcess interface
            var processFields = await GetProcessFieldsAsync();
            code.AppendLine($"{TAB}/**");
            code.AppendLine($"{TAB} * Process interface");
            code.AppendLine($"{TAB} * Contains business process flow definitions");
            code.AppendLine($"{TAB} */");
            code.AppendLine($"{TAB}export interface IProcess extends DevKit.Controls.IProcess {{");

            foreach (var process in processFields)
            {
                //code.AppendLine($"{TAB2}/** {process.ProcessName} - {process.ProcessName} */");
                code.AppendLine($"{TAB2}{process.ProcessName}: I{process.ProcessName};");
            }

            code.AppendLine($"{TAB}}}");
            code.AppendLine();

            // Generate Process field interfaces
            foreach (var process in processFields)
            {
                code.AppendLine($"{TAB}/**");
                code.AppendLine($"{TAB} * {process.ProcessName} Business Process Flow fields interface");
                code.AppendLine($"{TAB} */");
                code.AppendLine($"{TAB}export interface I{process.ProcessName} {{");

                // Track used names for BPF duplicate handling (uses _1, _2 pattern)
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
                        code.AppendLine($"{TAB2}/** {fieldInfo.DisplayName} */");
                    }
                    code.AppendLine($"{TAB2}{schemaName}: DevKit.Controls.{fieldInfo.Type};");
                }

                code.AppendLine($"{TAB}}}");
                code.AppendLine();
            }

            // Generate IDialog interface
            code.AppendLine($"{TAB}/**");
            code.AppendLine($"{TAB} * Dialog interface");
            code.AppendLine($"{TAB} * For quick create dialogs or other dialog forms");
            code.AppendLine($"{TAB} */");
            code.AppendLine($"{TAB}export interface IDialog extends DevKit.IDialog {{");

            var dialogFields = GetDialogFields(form.FormXml);
            foreach (var field in dialogFields)
            {
                code.AppendLine($"{TAB2}/** {field} field for dialog */");
                code.AppendLine($"{TAB2}{field}: DevKit.Controls.String;");
            }

            code.AppendLine($"{TAB}}}");
            code.AppendLine();

            // Generate comment separator
            code.AppendLine($"{TAB}// ============================================================================");
            code.AppendLine($"{TAB}// 2. Runtime - Form Class");
            code.AppendLine($"{TAB}// ============================================================================");
            code.AppendLine();

            // Generate Form class
            code.Append(await GetFormClassAsync(safeName, form.FormXml, false));

            code.AppendLine("}");
            code.AppendLine();

            return code.ToString();
        }

        private static async Task<string> GetFormClassAsync(string formName, string formXml, bool isQuickCreate)
        {
            var code = new StringBuilder();

            code.AppendLine($"{TAB}/**");
            code.AppendLine($"{TAB} * {EntityMetadata.SchemaName} Form class");
            code.AppendLine($"{TAB} * Provides typed access to all form controls");
            code.AppendLine($"{TAB} */");
            if (isQuickCreate)
            {
                code.AppendLine($"{TAB}export class Form extends FormBase<IBody, undefined, undefined, undefined, undefined, undefined, undefined> {{");
            }
            else
            {
                code.AppendLine($"{TAB}export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {{");
            }
            code.AppendLine($"{TAB2}/**");
            code.AppendLine($"{TAB2} * Creates an {EntityMetadata.SchemaName} Form instance");
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

            // Navigation fields
            var navArray = GetNavigationFieldNames(formXml);
            code.AppendLine($"{TAB4}navigation: [{string.Join(", ", navArray.Select(x => $"'{x}'"))}],");

            // Quick form fields
            if (!isQuickCreate)
            {
                var quickArray = await GetQuickFormFieldNamesAsync(formXml);
                code.AppendLine($"{TAB4}quick: [{string.Join(", ", quickArray.Select(x => $"'{x}'"))}],");

                // BPF fields
                var bpfArray = await GetBpfFieldNamesAsync();
                code.AppendLine($"{TAB4}bpf: [{string.Join(", ", bpfArray.Select(x => $"'{x}'"))}],");

                // Dialog fields
                var dialogArray = GetDialogFieldNames(formXml);
                code.AppendLine($"{TAB4}dialog: [{string.Join(", ", dialogArray.Select(x => $"'{x}'"))}]");
            }
            else
            {
                code.AppendLine($"{TAB4}quick: [],");
                code.AppendLine($"{TAB4}bpf: [],");
                code.AppendLine($"{TAB4}dialog: []");
            }

            code.AppendLine($"{TAB3}}});");
            code.AppendLine($"{TAB2}}}");
            code.AppendLine($"{TAB}}}");

            return code.ToString();
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
            var xdoc = XDocument.Parse(formXml);
            var rawFields = (from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns")
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
                // Get the real ClassId (may be overridden by virtual control)
                var classId = GetARealClassId(formXml, field.ClassId, field.ControlId);

                // Handle regular attribute controls
                if (!string.IsNullOrEmpty(field.LogicalName) && ControlClassId.CONTROLS.Contains(classId))
                {
                    var crmAttribute = EntityMetadata?.Attributes?.FirstOrDefault(a => a.LogicalName == field.LogicalName);
                    if (crmAttribute == null) continue;

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
            var xdoc = XDocument.Parse(formXml);
            var rawFields = (from x in xdoc.Descendants("header").Descendants("rows").Descendants("row")
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
                var crmAttribute = EntityMetadata?.Attributes?.FirstOrDefault(a => a.LogicalName == field.LogicalName);
                if (crmAttribute == null) continue;

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
            var xdoc = XDocument.Parse(formXml);
            var fields = (from x in xdoc.Descendants("tabs").Descendants("tab").Descendants("columns")
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
                var classId = GetARealClassId(formXml, field.ClassId, field.ControlId);
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
            var xdoc = XDocument.Parse(formXml);
            var navItems = (from x in xdoc
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

            var crmAttribute = EntityMetadata.Attributes.FirstOrDefault(x => x.LogicalName == fieldLogicalName);
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

        private static async Task<List<string>> GetBpfFieldNamesAsync()
        {
            var fields = new List<string>();
            await XrmHelper.EntitiesProcessForm.AddIfNotExistAsync(ServiceClient, EntityMetadata.LogicalName);
            var processes = XrmHelper.EntitiesProcessForm.Where(x => x.EntityLogicalName == EntityMetadata.LogicalName).OrderBy(x => x.Name);

            if (processes.Count() == 0) return fields;

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

                var processFields = new List<string>();
                var usedNames = new Dictionary<string, int>();

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
                            var crmAttribute = EntityMetadata.Attributes.FirstOrDefault(x => x.LogicalName == fieldName);
                            if (crmAttribute != null)
                            {
                                var schemaName = Helper.SafeIdentifier(crmAttribute.SchemaName);
                                var fullBaseName = $"{name}___{schemaName}";
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

                                processFields.Add(outputName);
                            }
                        }
                    }
                }

                processFields.Sort();
                fields.AddRange(processFields);
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

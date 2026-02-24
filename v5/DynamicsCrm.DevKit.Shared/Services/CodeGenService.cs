using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Services
{
    public class CodeGenService
    {
        private readonly ServiceClient _serviceClient;

        private const string NEW_LINE = "\r\n";
        private const string TAB = "\t";

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

        private static readonly HashSet<string> JsReservedWordsExact = new HashSet<string>(StringComparer.Ordinal)
        {
            "package", "private", "protected", "public", "static", "yield",
            "let", "class", "enum", "export", "extends", "import", "super",
            "implements", "interface", "await", "break", "case", "catch",
            "continue", "debugger", "default", "delete", "do", "else",
            "finally", "for", "function", "if", "in", "instanceof", "new",
            "return", "switch", "this", "throw", "try", "typeof", "var",
            "void", "while", "with", "const"
        };

        public CodeGenService(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        private static string GetSafeEntityName(string entityName)
        {
            if (JsReservedWords.Contains(entityName))
            {
                return $"_{entityName}";
            }
            return entityName;
        }

        private static bool CanUseAsAlias(string entityName)
        {
            return !JsReservedWordsExact.Contains(entityName);
        }

        public async Task<string> GetDefaultJsFormFileAsync(EntityMetadata entityMetadata, string rootNamespace)
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
            var forms = await new MetadataService(_serviceClient).GetEntityFormsAsync(entityMetadata.LogicalName);
            if (!forms.Any()) return Helper.GetDefaultFileWithWebApi(entityMetadata.SchemaName);
            var @namespace = Helper.GetNameSpace(rootNamespace);
            var code = string.Empty;
            code += $"//@ts-check{NEW_LINE}";
            code += $"///<reference path=\"{entityMetadata.SchemaName}.d.ts\" />{NEW_LINE}";
            code += $"\"use strict\";{NEW_LINE}";
            var formNames = new List<string>();
            foreach (var form in forms)
            {
                var formName = Helper.GetFormName(form.Name, entityMetadata.SchemaName);
                formName = GetUnquieFormName(formNames, formName);
                var type = $"{@namespace}.Form{Helper.SafeIdentifier(formName)}";
                code += $"{NEW_LINE}";
                code += $"//var form{Helper.SafeIdentifier(formName)} = (function () {{{NEW_LINE}";
                code += $"//{TAB}\"use strict\";{NEW_LINE}";
                code += $"//{TAB}/** @type {{{type}}} */{NEW_LINE}";
                code += $"//{TAB}let form;{NEW_LINE}";
                code += $"//{TAB}/** @param {{any}} executionContext */{NEW_LINE}";
                code += $"//{TAB}async function onLoad(executionContext) {{{NEW_LINE}";
                code += $"//{TAB}{TAB}form = new {type}(executionContext);{NEW_LINE}";
                code += $"//{TAB}{TAB}registerEvents();{NEW_LINE}";
                code += $"//{TAB}{TAB}form.UiAddLoaded(UiAddLoaded);{NEW_LINE}";
                code += $"//{TAB}}}{NEW_LINE}";
                code += $"//{TAB}function registerEvents() {{{NEW_LINE}";
                code += $"//{TAB}{TAB}if (form.ExecutionContext.IsInitialLoad()) {{{NEW_LINE}";
                code += $"//{TAB}{TAB}}}{NEW_LINE}";
                code += $"//{TAB}}}{NEW_LINE}";
                code += $"//{TAB}//BEGIN ON LOAD ========================================================{NEW_LINE}";
                code += $"//{TAB}/** @param {{any}} executionContext */{NEW_LINE}";
                code += $"//{TAB}async function UiAddLoaded(executionContext) {{{NEW_LINE}";
                code += $"//{TAB}}}{NEW_LINE}";
                code += $"//{TAB}//END ON LOAD =========================================================={NEW_LINE}";
                code += $"//{TAB}//BEGIN ON CHANGE ======================================================{NEW_LINE}";
                code += $"//{NEW_LINE}";
                code += $"//{TAB}//END ON CHANGE ========================================================{NEW_LINE}";
                code += $"//{TAB}//BEGIN PRE SEARCH ====================================================={NEW_LINE}";
                code += $"//{NEW_LINE}";
                code += $"//{TAB}//END PRE SEARCH ======================================================={NEW_LINE}";
                code += $"//{TAB}//BEGIN OTHERS ========================================================={NEW_LINE}";
                code += $"//{NEW_LINE}";
                code += $"//{TAB}//END OTHERS ==========================================================={NEW_LINE}";
                code += $"//{TAB}return {{{NEW_LINE}";
                code += $"//{TAB}{TAB}OnLoad: onLoad{NEW_LINE}";
                code += $"//{TAB}}};{NEW_LINE}";
                code += $"//}})();{NEW_LINE}";
                code += $"{NEW_LINE}";
            }
            code = code.TrimEnd($"{NEW_LINE}".ToCharArray());
            return code;
        }

        public async Task<string> GetDefaultWebApiFileAsync(string schemaName)
        {
            await Helper.DelayAsync(1);
            var code = string.Empty;
            code += $"//@ts-check{NEW_LINE}";
            code += $"///<reference path=\"{schemaName}.d.ts\" />{NEW_LINE}";
            return code;
        }

        public async Task<string> GetDefaultTsFormFileAsync(EntityMetadata entityMetadata)
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
            var forms = await new MetadataService(_serviceClient).GetEntityFormsAsync(entityMetadata.LogicalName);
            if (!forms.Any()) return string.Empty;
            var code = string.Empty;
            var formNames = new List<string>();
            var formClassNames = new List<string>();

            foreach (var form in forms)
            {
                var formName = Helper.GetFormName(form.Name, entityMetadata.SchemaName);
                formName = GetUnquieFormName(formNames, formName);
                formClassNames.Add(formName);
            }

            var safeEntityName = GetSafeEntityName(entityMetadata.SchemaName);
            var isReservedWord = safeEntityName != entityMetadata.SchemaName;
            var canUseAlias = CanUseAsAlias(entityMetadata.SchemaName);
            if (isReservedWord && canUseAlias)
            {
                code += $"import {{ {safeEntityName} as {entityMetadata.SchemaName} }} from './{entityMetadata.SchemaName}.form';{NEW_LINE}";
            }
            else if (isReservedWord)
            {
                code += $"import {{ {safeEntityName} }} from './{entityMetadata.SchemaName}.form';{NEW_LINE}";
            }
            else
            {
                code += $"import {{ {entityMetadata.SchemaName} }} from './{entityMetadata.SchemaName}.form';{NEW_LINE}";
            }
            code += $"{NEW_LINE}";

            foreach (var formClassName in formClassNames)
            {
                var safeFormName = Helper.SafeIdentifier(formClassName);
                code += $"//const form{safeFormName} = (function () {{{NEW_LINE}";
                code += $"//{TAB}\"use strict\";{NEW_LINE}";
                code += $"//{NEW_LINE}";
                code += $"//{TAB}let form: {entityMetadata.SchemaName}.{safeFormName};{NEW_LINE}";
                code += $"//{NEW_LINE}";
                code += $"//{TAB}async function onLoad(executionContext: any): Promise<void> {{{NEW_LINE}";
                code += $"//{TAB}{TAB}form = new {entityMetadata.SchemaName}.{safeFormName}(executionContext);{NEW_LINE}";
                code += $"//{TAB}{TAB}registerEvents();{NEW_LINE}";
                code += $"//{TAB}{TAB}form.UiAddLoaded(UiAddLoaded);{NEW_LINE}";
                code += $"//{TAB}}}{NEW_LINE}";
                code += $"//{NEW_LINE}";
                code += $"//{TAB}function registerEvents(): void {{{NEW_LINE}";
                code += $"//{TAB}{TAB}if (form.ExecutionContext.IsInitialLoad()) {{{NEW_LINE}";
                code += $"//{TAB}{TAB}}}{NEW_LINE}";
                code += $"//{TAB}}}{NEW_LINE}";
                code += $"//{NEW_LINE}";
                code += $"//{TAB}// ========================================================================{NEW_LINE}";
                code += $"//{TAB}// BEGIN ON LOAD{NEW_LINE}";
                code += $"//{TAB}// ========================================================================{NEW_LINE}";
                code += $"//{NEW_LINE}";
                code += $"//{TAB}async function UiAddLoaded(executionContext: any): Promise<void> {{{NEW_LINE}";
                code += $"//{TAB}}}{NEW_LINE}";
                code += $"//{NEW_LINE}";
                code += $"//{TAB}// END ON LOAD{NEW_LINE}";
                code += $"//{TAB}// ========================================================================{NEW_LINE}";
                code += $"//{NEW_LINE}";
                code += $"//{TAB}// ========================================================================{NEW_LINE}";
                code += $"//{TAB}// BEGIN ON CHANGE{NEW_LINE}";
                code += $"//{TAB}// ========================================================================{NEW_LINE}";
                code += $"//{NEW_LINE}";
                code += $"//{TAB}// END ON CHANGE{NEW_LINE}";
                code += $"//{TAB}// ========================================================================{NEW_LINE}";
                code += $"//{NEW_LINE}";
                code += $"//{TAB}// ========================================================================{NEW_LINE}";
                code += $"//{TAB}// BEGIN PRE SEARCH{NEW_LINE}";
                code += $"//{TAB}// ========================================================================{NEW_LINE}";
                code += $"//{NEW_LINE}";
                code += $"//{TAB}// END PRE SEARCH{NEW_LINE}";
                code += $"//{TAB}// ========================================================================{NEW_LINE}";
                code += $"//{NEW_LINE}";
                code += $"//{TAB}// ========================================================================{NEW_LINE}";
                code += $"//{TAB}// BEGIN OTHERS{NEW_LINE}";
                code += $"//{TAB}// ========================================================================{NEW_LINE}";
                code += $"//{NEW_LINE}";
                code += $"//{TAB}// END OTHERS{NEW_LINE}";
                code += $"//{TAB}// ========================================================================{NEW_LINE}";
                code += $"//{NEW_LINE}";
                code += $"//{TAB}return {{{NEW_LINE}";
                code += $"//{TAB}{TAB}OnLoad: onLoad{NEW_LINE}";
                code += $"//{TAB}}};{NEW_LINE}";
                code += $"//}})();{NEW_LINE}";
                code += $"{NEW_LINE}";
            }

            var namespaceName = (isReservedWord && canUseAlias) ? entityMetadata.SchemaName : safeEntityName;
            code += $"const formAllInOne = (function () {{{NEW_LINE}";
            code += $"{TAB}\"use strict\";{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"{TAB}let form: {namespaceName}.AllInOne;{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"{TAB}async function onLoad(executionContext: any): Promise<void> {{{NEW_LINE}";
            code += $"{TAB}{TAB}form = new {namespaceName}.AllInOne(executionContext);{NEW_LINE}";
            code += $"{TAB}{TAB}registerEvents();{NEW_LINE}";
            code += $"{TAB}{TAB}form.UiAddLoaded(UiAddLoaded);{NEW_LINE}";
            code += $"{TAB}}}{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"{TAB}function registerEvents(): void {{{NEW_LINE}";
            code += $"{TAB}{TAB}if (form.ExecutionContext.IsInitialLoad()) {{{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}}}{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"{TAB}// ========================================================================{NEW_LINE}";
            code += $"{TAB}// BEGIN ON LOAD{NEW_LINE}";
            code += $"{TAB}// ========================================================================{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"{TAB}async function UiAddLoaded(executionContext: any): Promise<void> {{{NEW_LINE}";
            code += $"{TAB}}}{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"{TAB}// END ON LOAD{NEW_LINE}";
            code += $"{TAB}// ========================================================================{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"{TAB}// ========================================================================{NEW_LINE}";
            code += $"{TAB}// BEGIN ON CHANGE{NEW_LINE}";
            code += $"{TAB}// ========================================================================{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"{TAB}// END ON CHANGE{NEW_LINE}";
            code += $"{TAB}// ========================================================================{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"{TAB}// ========================================================================{NEW_LINE}";
            code += $"{TAB}// BEGIN PRE SEARCH{NEW_LINE}";
            code += $"{TAB}// ========================================================================{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"{TAB}// END PRE SEARCH{NEW_LINE}";
            code += $"{TAB}// ========================================================================{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"{TAB}// ========================================================================{NEW_LINE}";
            code += $"{TAB}// BEGIN OTHERS{NEW_LINE}";
            code += $"{TAB}// ========================================================================{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"{TAB}// END OTHERS{NEW_LINE}";
            code += $"{TAB}// ========================================================================{NEW_LINE}";
            code += $"{NEW_LINE}";
            code += $"{TAB}return {{{NEW_LINE}";
            code += $"{TAB}{TAB}OnLoad: onLoad{NEW_LINE}";
            code += $"{TAB}}};{NEW_LINE}";
            code += $"}})();{NEW_LINE}";
            code += $"{NEW_LINE}";

            var exports = string.Join(" ", formClassNames.Select(f => $"/* form{Helper.SafeIdentifier(f)}, */"));
            code += $"export {{ {exports} formAllInOne }};";
            return code;
        }

        public string GetDefaultCsFile(EntityMetadata entityMetadata, string rootNamespace)
        {
            return Helper.GetDefaultFileWithCs(entityMetadata, rootNamespace);
        }

        public string GetDefaultWebApiFile(string schemaName)
        {
            return Helper.GetDefaultFileWithWebApi(schemaName);
        }

        public async Task<string> GetPluginCommentAsync(string entityLogicalName, string message)
        {
            return await new MetadataService(_serviceClient).GetPluginCommentAsync(entityLogicalName, message);
        }
    }
}

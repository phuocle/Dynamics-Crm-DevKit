using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Shared
{
    public class JsTypeScriptDeclaration
    {
        private const string NEW_LINE = "\r\n";
        private const string TAB = "\t";
        private static CrmServiceClient CrmServiceClient { get; set; }
        private static EntityMetadata EntityMetadata { get; set; }
        private static string RootNamespace { get; set; }
        private static CommentTypeScriptDeclaration Comment { get; set; }
        private static List<string> FormNames = new List<string>();

        public static string GetCode(CrmServiceClient crmServiceClient, EntityMetadata entityMetadata, string rootNamespace, CommentTypeScriptDeclaration comment)
        {
            CrmServiceClient = crmServiceClient;
            EntityMetadata = entityMetadata;
            RootNamespace = rootNamespace;
            Comment = comment;
            var @namespace = Utility.GetNameSpace(RootNamespace);
            var _d_ts = string.Empty;
            _d_ts += $"//@ts-check{NEW_LINE}";
            _d_ts += $"///<reference path=\"devkit.d.ts\" />{NEW_LINE}";
            _d_ts += $"declare namespace {rootNamespace} {{{NEW_LINE}";
            if (comment.UseForm)
                _d_ts += GetForm_d_ts(@namespace);
            if (comment.UseWebApi)
                _d_ts += GetWebApi_d_ts(@namespace);
            _d_ts += $"}}{NEW_LINE}";
            _d_ts += GetOptionSet_d_ts();
            _d_ts += GetSavedComment();
            return _d_ts;
        }

        private static string GetOptionSet_d_ts()
        {
            var _d_ts = string.Empty;
            _d_ts += $"declare namespace OptionSet {{{NEW_LINE}";
            _d_ts += $"{TAB}namespace {EntityMetadata.SchemaName} {{{NEW_LINE}";
            foreach (var attribute in EntityMetadata.Attributes.OrderBy(x => x.SchemaName))
            {
                if (XrmHelper.IsOptionSet(attribute))
                {
                    var attributeSchemaName = Utility.SafeDeclareName(attribute.SchemaName, GeneratorType.jsform, EntityMetadata.SchemaName);
                    var values = attribute.OptionSetValues();
                    if (values.Count == 0) continue;
                    _d_ts += $"{TAB}{TAB}enum {attributeSchemaName} {{{NEW_LINE}";
                    foreach (var value in values)
                    {
                        _d_ts += $"{TAB}{TAB}{TAB}/** {value.Value} */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{TAB}{value.Name},{NEW_LINE}";
                    }
                    _d_ts = _d_ts.TrimEnd($",{NEW_LINE}".ToCharArray());
                    _d_ts += $"{NEW_LINE}";
                    _d_ts += $"{TAB}{TAB}}}{NEW_LINE}";
                }
            }
            _d_ts += $"{TAB}{TAB}enum RollupState {{{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** 0 - Attribute value is yet to be calculated */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}NotCalculated,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}Calculated,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** 2 - Attribute value calculation lead to overflow error */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}OverflowError,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}OtherError,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}RetryLimitExceeded,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}HierarchicalRecursionLimitReached,{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{TAB}LoopDetected{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}}}{NEW_LINE}";
            _d_ts += $"{TAB}}}{NEW_LINE}";
            _d_ts += $"}}{NEW_LINE}";
            return _d_ts;
        }

        private static string GetWebApi_d_ts(string @namespace)
        {
            var _d_ts = string.Empty;
            _d_ts += $"{TAB}class {EntityMetadata.SchemaName}Api {{{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/**{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}* DynamicsCrm.DevKit {EntityMetadata.SchemaName}Api{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}* @param entity The entity object{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}*/{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}constructor(entity?: any);{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/**{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * Get the value of alias{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * @param alias the alias value{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * @param isMultiOptionSet true if the alias is multi OptionSet{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/**{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * Get the formatted value of alias{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * @param alias the alias value{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} * @param isMultiOptionSet true if the alias is multi OptionSet{NEW_LINE}";
            _d_ts += $"{TAB}{TAB} */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/** The entity object */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}Entity: any;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/** The entity name */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}EntityName: string;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/** The entity collection name */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}EntityCollectionName: string;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}\"@odata.etag\": string;{NEW_LINE}";

            foreach (var attribute in EntityMetadata?.Attributes?.OrderBy(x => x.SchemaName))
            {
                var attributeSchemaName = Utility.SafeDeclareName(attribute.SchemaName, GeneratorType.jswebapi, EntityMetadata.SchemaName, attribute);
                if (attribute.AttributeType == AttributeTypeCode.PartyList || attribute.AttributeType == AttributeTypeCode.EntityName) continue;
                if (attribute.AttributeOf != null && attribute.AttributeTypeName != AttributeTypeDisplayName.ImageType) continue;

                var Readonly = (!(attribute.IsValidForCreate ?? false) && !(attribute.IsValidForUpdate ?? false)) ? "Readonly" : string.Empty;
                var jdoc = attribute?.Description?.UserLocalizedLabel?.Label ?? string.Empty;
                switch (attribute.AttributeType)
                {
                    case AttributeTypeCode.Picklist:
                    case AttributeTypeCode.State:
                    case AttributeTypeCode.Status:
                        if (attribute is MultiSelectPicklistAttributeMetadata)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            _d_ts += $"{TAB}{TAB}{attributeSchemaName}: DevKit.WebApi.MultiOptionSetValue{Readonly};{NEW_LINE}";
                        }
                        else if (attribute is PicklistAttributeMetadata || attribute is StateAttributeMetadata || attribute is StatusAttributeMetadata)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            _d_ts += $"{TAB}{TAB}{attributeSchemaName}: DevKit.WebApi.OptionSetValue{Readonly};{NEW_LINE}";
                        }
                        break;
                    case AttributeTypeCode.Owner:
                        _d_ts += $"{TAB}{TAB}/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}OwnerId_systemuser: DevKit.WebApi.LookupValue{Readonly};\r\n";
                        _d_ts += $"{TAB}{TAB}/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}OwnerId_team: DevKit.WebApi.LookupValue{Readonly};\r\n";
                        break;
                    case AttributeTypeCode.Lookup:
                    case AttributeTypeCode.Customer:
                        if (attribute is LookupAttributeMetadata lookup)
                        {
                            if (lookup.Targets.Count() == 1)
                            {
                                if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                                _d_ts += $"{TAB}{TAB}{attributeSchemaName}: DevKit.WebApi.LookupValue{Readonly};{NEW_LINE}";
                            }
                            else
                            {
                                if (attribute.LogicalName == "acceptingentityid")
                                {
                                    if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                                    _d_ts += $"{TAB}{TAB}acceptingentityid_queue: DevKit.WebApi.LookupValue{Readonly};{NEW_LINE}";
                                    if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                                    _d_ts += $"{TAB}{TAB}acceptingentityid_systemuser: DevKit.WebApi.LookupValue{Readonly};{NEW_LINE}";
                                }
                                else
                                {
                                    foreach (var entityLogicalName in lookup.Targets.Distinct())
                                    {
                                        var navigation = EntityMetadata.ManyToOneRelationships.FirstOrDefault(x => x.ReferencingAttribute == attribute.LogicalName && x.ReferencedEntity == entityLogicalName);
                                        if (navigation?.ReferencingEntityNavigationPropertyName != null && navigation?.ReferencingEntityNavigationPropertyName.Length > 0)
                                        {
                                            var temp = $"{TAB}{TAB}{Utility.SafeDeclareName(navigation?.ReferencingEntityNavigationPropertyName, GeneratorType.jswebapi, EntityMetadata.SchemaName, attribute)}: DevKit.WebApi.LookupValue{Readonly};{NEW_LINE}";
                                            if (!_d_ts.Contains(temp))
                                            {
                                                if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                                                _d_ts += temp;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        break;
                    case AttributeTypeCode.Memo:
                    case AttributeTypeCode.String:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{attributeSchemaName}: DevKit.WebApi.StringValue{Readonly};{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Boolean:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{attributeSchemaName}: DevKit.WebApi.BooleanValue{Readonly};{NEW_LINE}";
                        break;
                    case AttributeTypeCode.DateTime:
                        if (attribute is DateTimeAttributeMetadata dateTime)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            if (dateTime.DateTimeBehavior == DateTimeBehavior.DateOnly)
                                _d_ts += $"{TAB}{TAB}{attributeSchemaName}_DateOnly: DevKit.WebApi.DateOnlyValue{Readonly};{NEW_LINE}";
                            else if (dateTime.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
                            {
                                if (dateTime.Format == DateTimeFormat.DateOnly)
                                    _d_ts += $"{TAB}{TAB}{attributeSchemaName}_TimezoneDateOnly: DevKit.WebApi.TimezoneDateOnlyValue{Readonly};{NEW_LINE}";
                                else
                                    _d_ts += $"{TAB}{TAB}{attributeSchemaName}_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue{Readonly};{NEW_LINE}";
                            }
                            else
                            {
                                if (dateTime.Format == DateTimeFormat.DateOnly)
                                    _d_ts += $"{TAB}{TAB}{attributeSchemaName}_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue{Readonly};{NEW_LINE}";
                                else
                                    _d_ts += $"{TAB}{TAB}{attributeSchemaName}_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue{Readonly};{NEW_LINE}";
                            }
                        }
                        break;
                    case AttributeTypeCode.Integer:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{attributeSchemaName}: DevKit.WebApi.IntegerValue{Readonly};{NEW_LINE}";
                        break;
                    case AttributeTypeCode.BigInt:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{attributeSchemaName}: DevKit.WebApi.BigIntValue{Readonly};{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Decimal:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{attributeSchemaName}: DevKit.WebApi.DecimalValue{Readonly};{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Double:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{attributeSchemaName}: DevKit.WebApi.DoubleValue{Readonly};{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Money:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{attributeSchemaName}: DevKit.WebApi.MoneyValue{Readonly};{NEW_LINE}";
                        break;
                    case AttributeTypeCode.Uniqueidentifier:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{attributeSchemaName}: DevKit.WebApi.GuidValue{Readonly};{NEW_LINE}";
                        break;
                    case AttributeTypeCode.ManagedProperty:
                        if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                        _d_ts += $"{TAB}{TAB}{attributeSchemaName}: DevKit.WebApi.ManagedPropertyValue{Readonly};{NEW_LINE}";
                        break;

                    default:
                        if (attribute is ImageAttributeMetadata image)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            if ((image.IsPrimaryImage ?? false) && image.LogicalName != "entityimage")
                                _d_ts += GetGeneratorImageCode_d_ts("EntityImage", image.LogicalName);
                            _d_ts += GetGeneratorImageCode_d_ts(attributeSchemaName, attribute.LogicalName);
                        }
                        else if (attribute is FileAttributeMetadata file)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            _d_ts += $"{TAB}{TAB}{attributeSchemaName}: DevKit.WebApi.StringValue{Readonly};{NEW_LINE}";
                        }
                        else if (attribute is MultiSelectPicklistAttributeMetadata)
                        {
                            if (jdoc.Length > 0) _d_ts += $"{TAB}{TAB}/** {jdoc} */{NEW_LINE}";
                            _d_ts += $"{TAB}{TAB}{attributeSchemaName}: DevKit.WebApi.MultiOptionSetValue{Readonly};{NEW_LINE}";
                        }
                        else
                            _d_ts += $"{attribute.AttributeType}-{attributeSchemaName}-{attribute.LogicalName};{NEW_LINE}";
                        break;
                }
            }
            if (EntityMetadata.Attributes.Where(f => f.AttributeType == AttributeTypeCode.PartyList).Any())
            {
                _d_ts += $"{TAB}{TAB}/** The array of object that can cast object to ActivityPartyApi class */{NEW_LINE}"; ;
                _d_ts += $"{TAB}{TAB}ActivityParties: Array<any>;{NEW_LINE}";
            }
            _d_ts += $"{TAB}}}{NEW_LINE}";
            return _d_ts;
        }

        private static string GetGeneratorImageCode_d_ts(string schemaName, string logicalName)
        {
            var _d_ts = string.Empty;
            _d_ts += $"{TAB}{TAB}{schemaName}: DevKit.WebApi.StringValue;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{schemaName}_Timestamp: DevKit.WebApi.BigIntValueReadonly;{NEW_LINE}";
            _d_ts += $"{TAB}{TAB}{schemaName}_URL: DevKit.WebApi.StringValueReadonly;{NEW_LINE}";
            return _d_ts;
        }

        private static string GetForm_d_ts(string @namespace)
        {
            var forms = XrmHelper.GetEntityForms(CrmServiceClient, EntityMetadata.LogicalName);
            if (!forms.Any()) return string.Empty;
            var _d_ts = string.Empty;
            foreach(var form in forms.Where(x => x.FormType == XrmHelper.FormType.Main).ToList())
                _d_ts += GetFormMain_d_ts(form, @namespace);
            foreach(var form in forms.Where(x => x.FormType == XrmHelper.FormType.QuickCreate).ToList())
                _d_ts += GetFormQuickCreate_d_ts(form, @namespace);
            return _d_ts;
        }

        private static string GetFormQuickCreate_d_ts(SystemForm form, string @namespace)
        {
            var _d_ts = string.Empty;
            var formName = Utility.SafeIdentifier(Utility.GetFormName(form.Name, EntityMetadata.SchemaName));
            formName = GetUnquieFormName(formName);
            _d_ts += $"\tnamespace Form{formName} {{\r\n";
            var form_d_ts_Body_QuickCreate = GetForm_d_ts_Body(form.FormXml);
            if (form_d_ts_Body_QuickCreate.Length > 0)
            {
                _d_ts += form_d_ts_Body_QuickCreate;
            }
            _d_ts += $"\t}}\r\n";
            _d_ts += $"\tclass Form{formName} extends DevKit.IForm {{\r\n";
            _d_ts += $"\t\t/**\r\n";
            _d_ts += $"\t\t* DynamicsCrm.DevKit form {formName} Quick Create\r\n";
            _d_ts += $"\t\t* @param executionContext the execution context\r\n";
            _d_ts += $"\t\t* @param defaultWebResourceName default resource name. E.g.: \"devkit_/resources/Resource\"\r\n";
            _d_ts += $"\t\t*/\r\n";
            _d_ts += $"\t\tconstructor(executionContext: any, defaultWebResourceName?: string);\r\n";
            _d_ts += $"\t\t/** Utility functions/methods/objects for Dynamics 365 form */\r\n";
            _d_ts += $"\t\tUtility: DevKit.Utility;\r\n";
            if (form_d_ts_Body_QuickCreate.Length > 0)
            {
                _d_ts += $"\t\t/** The Body section of form {formName} */\r\n";
                _d_ts += $"\t\tBody: {@namespace}.Form{formName}.Body;\r\n";
            }
            _d_ts += $"\t}}\r\n";
            return _d_ts;
        }

        private static string GetFormMain_d_ts(SystemForm form, string @namespace)
        {
            var _d_ts = string.Empty;
            var formName = Utility.SafeIdentifier(Utility.GetFormName(form.Name, EntityMetadata.SchemaName));
            formName = GetUnquieFormName(formName);
            _d_ts += $"{TAB}namespace Form{formName} {{{NEW_LINE}";
            var form_d_ts_Header = GetForm_d_ts_Header(form.FormXml);
            if (form_d_ts_Header.Length > 0)
            {
                _d_ts += $"\t\tinterface Header extends DevKit.Controls.IHeader {{\r\n";
                _d_ts += form_d_ts_Header;
                _d_ts += $"\t\t}}\r\n";
            }
            var form_d_ts_Body = GetForm_d_ts_Body(form.FormXml);
            if (form_d_ts_Body.Length > 0)
            {
                _d_ts += form_d_ts_Body;
            }
            var form_d_ts_Footer = GetForm_d_ts_Footer(form.FormXml);
            if (form_d_ts_Footer.Length > 0)
            {
                _d_ts += $"\t\tinterface Footer extends DevKit.Controls.IFooter {{\r\n";
                _d_ts += form_d_ts_Footer;
                _d_ts += $"\t\t}}\r\n";
            }
            var form_d_ts_Navigation = GetForm_d_ts_Navigation(form.FormXml);
            if (form_d_ts_Navigation.Length > 0)
            {
                _d_ts += $"\t\tinterface Navigation {{\r\n";
                _d_ts += form_d_ts_Navigation;
                _d_ts += $"\t\t}}\r\n";
            }
            var form_d_ts_QuickForm = GetForm_d_ts_QuickForm(form.FormXml);
            if (form_d_ts_QuickForm.Length > 0)
            {
                _d_ts += form_d_ts_QuickForm;
            }
            var form_d_ts_Process = GetForm_d_ts_Process(form.FormXml);
            //if (form_d_ts_Process.Length > 0)
            //{
                _d_ts += form_d_ts_Process;
            //}
            var form_d_ts_Grid = GetForm_d_ts_Grid(form.FormXml);
            if (form_d_ts_Grid.Length > 0)
            {
                _d_ts += form_d_ts_Grid;
            }
            _d_ts += $"{TAB}}}{NEW_LINE}";
            _d_ts += $"\tclass Form{formName} extends DevKit.IForm {{\r\n";
            _d_ts += $"\t\t/**\r\n";
            _d_ts += $"\t\t* DynamicsCrm.DevKit form {formName} Main Form\r\n";
            _d_ts += $"\t\t* @param executionContext the execution context\r\n";
            _d_ts += $"\t\t* @param defaultWebResourceName default resource name. E.g.: \"devkit_/resources/Resource\"\r\n";
            _d_ts += $"\t\t*/\r\n";
            _d_ts += $"\t\tconstructor(executionContext: any, defaultWebResourceName?: string);\r\n";
            _d_ts += $"\t\t/** Utility functions/methods/objects for Dynamics 365 form */\r\n";
            _d_ts += $"\t\tUtility: DevKit.Utility;\r\n";
            if (form_d_ts_Body.Length > 0)
            {
                _d_ts += $"\t\t/** The Body section of form {formName} */\r\n";
                _d_ts += $"\t\tBody: {@namespace}.Form{formName}.Body;\r\n";
            }
            if (form_d_ts_Footer.Length > 0)
            {
                _d_ts += $"\t\t/** The Footer section of form {formName} */\r\n";
                _d_ts += $"\t\tFooter: {@namespace}.Form{formName}.Footer;\r\n";
            }
            if (form_d_ts_Header.Length > 0)
            {
                _d_ts += $"\t\t/** The Header section of form {formName} */\r\n";
                _d_ts += $"\t\tHeader: {@namespace}.Form{formName}.Header;\r\n";
            }
            if (form_d_ts_Navigation.Length > 0)
            {
                _d_ts += $"\t\t/** The Navigation of form {formName} */\r\n";
                _d_ts += $"\t\tNavigation: {@namespace}.Form{formName}.Navigation;\r\n";
            }
            if (form_d_ts_QuickForm.Length > 0)
            {
                _d_ts += $"\t\t/** The QuickForm of form {formName} */\r\n";
                _d_ts += $"\t\tQuickForm: {@namespace}.Form{formName}.QuickForm;\r\n";
            }
            //if (form_d_ts_Process.Length > 0)
            //{
                _d_ts += $"\t\t/** The Process of form {formName} */\r\n";
                _d_ts += $"\t\tProcess: {@namespace}.Form{formName}.Process;\r\n";
            //}
            if (form_d_ts_Grid.Length > 0)
            {
                _d_ts += $"\t\t/** The Grid of form {formName} */\r\n";
                _d_ts += $"\t\tGrid: {@namespace}.Form{formName}.Grid;\r\n";
            }
            _d_ts += $"\t\t/** The SidePanes of form {formName} */\r\n";
            _d_ts += $"\t\tSidePanes: DevKit.SidePanes;\r\n";
            _d_ts += $"\t}}\r\n";
            return  _d_ts;
        }

        private static string GetUnquieFormName(string formName)
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

        private static string GetForm_d_ts_Grid(string formXml)
        {
            var _d_ts = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var fields = (from x in xdoc
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
                              Name = x?.Attribute("datafieldname")?.Value,
                              Id = x?.Attribute("id").Value,
                              ClassId = Utility.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                              ControlId = x?.Attribute("uniqueid")?.Value
                          }).Distinct().ToList();
            fields = fields.OrderBy(x => x.Id).ToList();
            var temp = string.Empty;
            foreach (var field in fields)
            {
                var classId = GetARealClassId(formXml, field.ClassId, field.ControlId);
                if (classId != ControlClassId.SUB_GRID && classId != ControlClassId.SUB_GRID_PANEL) continue;
                if (temp.Contains($"\t\t\t{field.Id}: DevKit.Controls.Grid;\r\n")) continue;
                temp += $"\t\t\t{field.Id}: DevKit.Controls.Grid;\r\n";
            }
            if (temp.Length > 0)
            {
                _d_ts += $"\t\tinterface Grid {{\r\n";
                _d_ts += temp;
                _d_ts += $"\t\t}}\r\n";
                return _d_ts;
            }
            return string.Empty;
        }

        private static string GetForm_d_ts_Process(string formXml)
        {
            var code = string.Empty;
            XrmHelper.EntitiesProcessForm.AddIfNotExist(CrmServiceClient, EntityMetadata.LogicalName);
            var processes = XrmHelper.EntitiesProcessForm.Where(x => x.EntityLogicalName == EntityMetadata.LogicalName).OrderBy(x => x.Name);
            var _d_ts = string.Empty;
            var part1 = string.Empty;
            foreach (var process in processes)
            {
                var name = Utility.SafeIdentifier(process.Name);
                _d_ts += $"\t\tinterface Process{name} {{\r\n";
                var xdoc = XDocument.Parse(process.xaml);
                var ns = xdoc.Root?.GetNamespaceOfPrefix("mxswa");
                var rows2 = from x in xdoc.Descendants(ns + "Workflow").Elements(ns + "ActivityReference")
                            select new
                            {
                                DisplayName = x.Attribute("DisplayName")?.Value,
                                InnerText = x.ToString()
                            };
                var fields = new List<IdName>();
                foreach (var row in rows2)
                {
                    var arr = row.DisplayName.Split(" ".ToCharArray());
                    if (arr.Length == 1 || arr[1] != EntityMetadata.LogicalName) continue;
                    const string pattern = @"DataFieldName=""\w*""";
                    foreach (Match m in Regex.Matches(row.InnerText, pattern))
                    {
                        var array = m.Value.Split("=".ToCharArray());
                        var fieldName = array[1].Substring(1, array[1].Length - 2);
                        var field = new IdName
                        {
                            ClassId = ControlClassId.SINGLE_LINE_OF_TEXT,
                            Name = fieldName,
                            Id = null,
                            ControlId = null
                        };
                        fields.Add(field);
                    }
                }
                fields = fields.OrderBy(f => f.Name).ToList();
                _d_ts += Get_d_ts_ForListFields(formXml, fields, true);
                _d_ts += $"\t\t}}\r\n";
                part1 += $"\t\t\t{name}: Process{name};\r\n";
            }
            _d_ts += $"\t\tinterface Process extends DevKit.Controls.IProcess {{\r\n";
            _d_ts += part1;
            _d_ts += $"\t\t}}\r\n";
            return _d_ts;
        }

        private static string GetForm_d_ts_QuickForm(string formXml)
        {
            var _d_ts = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var fields = (from x in xdoc
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
                              Name = x?.Attribute("datafieldname")?.Value,
                              Id = x?.Attribute("id").Value,
                              ClassId = Utility.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                              ControlId = x?.Attribute("uniqueid")?.Value
                          }).Distinct().ToList();
            fields = fields.OrderBy(x => x.Name).ToList();
            var temp = string.Empty;
            var temp1 = string.Empty;
            var temp2 = string.Empty;
            foreach (var field in fields)
            {
                var classId = GetARealClassId(formXml, field.ClassId, field.ControlId);
                if (classId != ControlClassId.QUICK_VIEW_FORM) continue;
                temp2 += GetBodyOfQuickView(formXml, field.Id);
                temp1 += $"\t\tinterface quickForm_{field.Id} extends DevKit.Controls.IQuickView {{\r\n";
                temp1 += $"\t\t\tBody: quickForm_{field.Id}_Body;\r\n";
                temp1 += $"\t\t}}\r\n";
                temp += $"\t\t\t{field.Id}: quickForm_{field.Id};\r\n";
            }
            if (temp.Length > 0)
            {
                _d_ts += temp2;
                _d_ts += temp1;
                _d_ts += $"\t\tinterface QuickForm {{\r\n";
                _d_ts += temp;
                _d_ts += $"\t\t}}\r\n";
                return _d_ts;
            }
            return _d_ts;
        }

        private static string GetBodyOfQuickView(string formXml, string id)
        {
            var _d_ts = string.Empty;
            _d_ts += $"\t\tinterface quickForm_{id}_Body {{\r\n";
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
            if (node2 == null) return string.Empty;
            var xdoc2 = XDocument.Parse(node2);
            var quickViewXml = (from x in xdoc2.Descendants("QuickFormId") select new { formId = x.Value, entityLogicalName = x?.Attribute("entityname")?.Value }).FirstOrDefault();
            if (quickViewXml == null) return string.Empty;
            var quickViewFormXml = string.Empty;
            //var quickViewEntityLogicalName = string.Empty;
            GetFormXml(quickViewXml.formId, quickViewXml.entityLogicalName, out quickViewFormXml);
            if (quickViewFormXml == string.Empty) return string.Empty;
            var xdoc3 = XDocument.Parse(quickViewFormXml);
            var fields = (from x in xdoc3
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
                              Name = x?.Attribute("datafieldname")?.Value,
                              Id = x?.Attribute("id").Value,
                              ClassId = Utility.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                              ControlId = x?.Attribute("uniqueid")?.Value
                          }).Distinct().ToList();
            fields = fields.OrderBy(x => x.Name).ToList();
            XrmHelper.EntitiesMetadata.AddIfNotExist(CrmServiceClient, quickViewXml.entityLogicalName);
            var quickViewMetadata = XrmHelper.EntitiesMetadata.Where(x => x.LogicalName == quickViewXml.entityLogicalName).FirstOrDefault();
            if (quickViewMetadata == null) return String.Empty;
            foreach (var field in fields)
            {
                var fieldAttribute = quickViewMetadata.Attributes.Where(x => x.LogicalName == field.Id).FirstOrDefault();
                if (fieldAttribute != null)
                {
                    _d_ts += $"\t\t\t{fieldAttribute.SchemaName}: DevKit.Controls.QuickView;\r\n";
                }
            }
            _d_ts += $"\t\t}}\r\n";
            return _d_ts;
        }

        private static void GetFormXml(string formId, string entityLogicalName, out string formXml)
        {
            formXml = string.Empty;
            XrmHelper.EntitiesFormXml.AddIfNotExist(CrmServiceClient, entityLogicalName);
            var form = XrmHelper.EntitiesFormXml.FirstOrDefault(x => x.FormType == XrmHelper.FormType.QuickView && x.FormId == Guid.Parse(formId));
            if (form != null)
            {
                formXml = form.FormXml;
            }
        }

        private static string GetForm_d_ts_Navigation(string formXml)
        {
            var _d_ts = string.Empty;
            var xdoc = XDocument.Parse(formXml);
            var navigations = (from x in xdoc.Descendants("Navigation").Descendants("NavBar")
                    .Descendants("NavBarByRelationshipItem")
                               select (string)x?.Attribute("Id")).ToList();
            navigations.Sort();
            if (navigations.Count == 0) return string.Empty;
            navigations.Sort();
            foreach (var navigation in navigations)
            {
                _d_ts += $"\t\t\t{navigation}: DevKit.Controls.NavigationItem,\r\n";
            }
            _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return _d_ts;
        }

        private static string GetForm_d_ts_Footer(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var footers = (from x in xdoc.Descendants("footer")
                           .Descendants("rows")
                           .Descendants("row")
                           .Descendants("cell")
                           .Descendants("control")
                           select new IdName
                           {
                               Name = x?.Attribute("datafieldname")?.Value,
                               Id = x?.Attribute("id").Value,
                               ClassId = Utility.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                               ControlId = x?.Attribute("uniqueid")?.Value
                           }).ToList();
            footers = footers.OrderBy(x => x.Name).ToList();
            if (footers.Count() == 0) return string.Empty;
            var _d_ts = Get_d_ts_ForListFields(formXml, footers, false);
            if (_d_ts.EndsWith(",\r\n")) _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return _d_ts;
        }

        private static string GetForm_d_ts_Body(string formXml)
        {
            var part1 = string.Empty;
            var part2 = string.Empty;
            var part3 = $"\t\tinterface Tabs {{\r\n";
            var xdoc = XDocument.Parse(formXml);
            var rows = from x in xdoc.Descendants("tabs").Elements("tab")
                       select new
                       {
                           Name = x?.Attribute("name")?.Value,
                           InnerText = x?.ToString()
                       };
            var existTabs = new List<string>();
            rows = rows.OrderBy(x => x.Name).ToList();
            foreach (var row in rows)
            {
                if (Utility.SafeIdentifier(row.Name).Length == 0) continue;
                var tabName = row.Name;
                if (existTabs.Contains(Utility.SafeIdentifier(tabName))) continue; else existTabs.Add(Utility.SafeIdentifier(tabName));
                part1 += $"\t\tinterface tab_{Utility.SafeIdentifier(tabName)}_Sections {{\r\n";
                var xdoc2 = XDocument.Parse(row.InnerText);
                var rows2 = from x2 in xdoc2.Descendants("columns").Descendants("column").Descendants("sections")
                        .Elements("section")
                            select new
                            {
                                name = x2.Attribute("name")?.Value
                            };
                var existSections = new List<string>();
                rows2 = rows2.OrderBy(x => x.name).ToList();
                foreach (var row2 in rows2)
                {
                    if (row2 == null) continue;
                    if (row2.name == null) continue;
                    //if (row2.name.StartsWith("ref_pan")) continue;
                    var sectionName = row2.name;
                    if (existSections.Contains(Utility.SafeIdentifier(sectionName))) continue; else existSections.Add(Utility.SafeIdentifier(sectionName));
                    part1 += $"\t\t\t{Utility.SafeIdentifier(sectionName)}: DevKit.Controls.Section;\r\n";
                }
                part1 += $"\t\t}}\r\n";

                part2 += $"\t\tinterface tab_{Utility.SafeIdentifier(tabName)} extends DevKit.Controls.ITab {{\r\n";
                part2 += $"\t\t\tSection: tab_{Utility.SafeIdentifier(tabName)}_Sections;\r\n";
                part2 += $"\t\t}}\r\n";

                part3 += $"\t\t\t{Utility.SafeIdentifier(tabName)}: tab_{Utility.SafeIdentifier(tabName)};\r\n";

            }
            part3 += $"\t\t}}\r\n";
            var _d_ts = string.Empty;
            _d_ts = $"{part1}{part2}{part3}";
            _d_ts += $"\t\tinterface Body {{\r\n";
            if (part1.Length > 0 && part2.Length > 0)
                _d_ts += $"\t\t\tTab: Tabs;\r\n";
            var body = (from x in xdoc
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
                            Name = x?.Attribute("datafieldname")?.Value ?? x?.Attribute("id")?.Value,
                            Id = x?.Attribute("id").Value,
                            ClassId = Utility.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                            ControlId = x?.Attribute("uniqueid")?.Value
                        }).Distinct().ToList();
            body = body.OrderBy(x => x.Name).ToList();
            _d_ts += Get_d_ts_ForListFields(formXml, body, false);
            if (_d_ts.EndsWith(",\r\n")) _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            _d_ts += $"\t\t}}\r\n";
            return _d_ts;
        }

        private static string GetForm_d_ts_Header(string formXml)
        {
            var xdoc = XDocument.Parse(formXml);
            var headers = (from x in xdoc.Descendants("header")
                           .Descendants("rows")
                           .Descendants("row")
                           .Descendants("cell")
                           .Descendants("control")
                           select new IdName
                           {
                               Name = x?.Attribute("datafieldname")?.Value,
                               Id = x?.Attribute("id").Value,
                               ClassId = Utility.TrimGuid(x?.Attribute("classid")?.Value?.ToUpper()),
                               ControlId = x?.Attribute("uniqueid")?.Value
                           }).ToList();
            headers = headers.OrderBy(x => x.Name).ToList();
            if (headers.Count() == 0) return string.Empty;
            var _d_ts = Get_d_ts_ForListFields(formXml, headers, false);
            if (_d_ts.EndsWith(",\r\n")) _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return _d_ts;
        }

        private static string Get_d_ts_ForListFields(string formXml, List<IdName> list, bool isBPF)
        {
            var _d_ts = string.Empty;
            var previousName = string.Empty;
            var previousCount = 0;

            var listVirtualControls = new List<string>();

            foreach (var item in list)
            {
                item.ClassId = GetARealClassId(formXml, item.ClassId, item.ControlId);
                if (item.Name != null && ControlClassId.CONTROLS.Contains(item.ClassId))
                {
                    var crmAttribute = EntityMetadata.Attributes.FirstOrDefault(x => x.LogicalName == item.Name);
                    if (crmAttribute == null) continue;
                    var name = crmAttribute.SchemaName;
                    if (name == previousName)
                    {
                        previousCount = previousCount + 1;
                        if (isBPF)
                            name = name + "_" + previousCount.ToString();
                        else
                            name = name + previousCount.ToString();
                    }
                    else
                    {
                        previousName = string.Empty;
                        previousCount = 0;
                    }
                    previousName = crmAttribute.SchemaName;
                    var jsdoc = string.Empty;
                    if (crmAttribute?.Description?.UserLocalizedLabel?.Label.Length > 0)
                        jsdoc = $"\t\t\t/** {crmAttribute?.Description?.UserLocalizedLabel?.Label} */\r\n";
                    if (crmAttribute.AttributeType == AttributeTypeCode.Memo ||
                        crmAttribute.AttributeType == AttributeTypeCode.String)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.String;\r\n";
                    }
                    else if (crmAttribute is MultiSelectPicklistAttributeMetadata)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.MultiOptionSet;\r\n";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.Picklist ||
                             crmAttribute.AttributeType == AttributeTypeCode.State ||
                             crmAttribute.AttributeType == AttributeTypeCode.Status)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.OptionSet;\r\n";
                    }
                    else if (crmAttribute is DateTimeAttributeMetadata dateTime)
                    {
                        if (dateTime.Format == DateTimeFormat.DateOnly)
                        {
                            _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.Date;\r\n";
                        }
                        else
                        {
                            _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.DateTime;\r\n";
                        }
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.Lookup ||
                             crmAttribute.AttributeType == AttributeTypeCode.Owner ||
                             crmAttribute.AttributeType == AttributeTypeCode.Customer ||
                             crmAttribute.AttributeType == AttributeTypeCode.PartyList)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.Lookup;\r\n";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.Boolean)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.Boolean;\r\n";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.Money)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.Money;\r\n";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.Integer)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.Integer;\r\n";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.Double)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.Double;\r\n";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.Decimal)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.Decimal;\r\n";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.EntityName)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.String;\r\n";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.Uniqueidentifier)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.String;\r\n";
                    }
                    else if (crmAttribute.AttributeType == AttributeTypeCode.ManagedProperty)
                    {
                        _d_ts += $"{jsdoc}\t\t\t{name}: DevKit.Controls.String;\r\n";
                    }
                    else
                    {
                        _d_ts += $"\t\t\t{item.Name}: DevKit.Controls.ELSE1???;//{item.Id} - {item.ClassId} -- FOR DEBUG \r\n";
                    }
                }
                else if (ControlClassId.VIRTUAL_CONTROLS.Contains(item.ClassId))
                {
                    if (listVirtualControls.Contains(item.Id))
                        continue;
                    else
                        listVirtualControls.Add(item.Id);
                    if (item.ClassId == ControlClassId.IFRAME)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.IFrame;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.WEB_RESOURCE)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.WebResource;\r\n";
                    }
                    else if (item.Id.ToLower() == "notescontrol" && item.ClassId == ControlClassId.NOTE)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.Note;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.EMAIL_ENGAGEMENT_ACTIONS)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.EmailEngagement;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.EMAIL_RECIPIENT_ACTIVITY)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.EmailRecipient;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.TIMER)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.Timer;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.ACI_WIDGET)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.AciWidget;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.MAP_CONTROL)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.Map;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.ACTION_CARDS)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.ActionCards;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.POWERBI)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.PowerBi;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.FILE)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.File;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.IMAGE)
                    {
                        _d_ts += $"\t\t\t{item.Id}: DevKit.Controls.Image;\r\n";
                    }
                    else if (item.ClassId == ControlClassId.UNKNOWN_1 ||
                             item.ClassId == ControlClassId.UNKNOWN_2 ||
                             item.ClassId == ControlClassId.UNKNOWN_3 ||
                             item.ClassId == ControlClassId.UNKNOWN_4 ||
                             item.ClassId == ControlClassId.UNKNOWN_5 ||
                             item.ClassId == ControlClassId.UNKNOWN_6 ||
                             item.ClassId == ControlClassId.UNKNOWN_7 ||
                             item.ClassId == ControlClassId.UNKNOWN_8 ||
                             item.ClassId == ControlClassId.UNKNOWN_9 ||
                             item.ClassId == ControlClassId.UNKNOWN_10 ||
                             item.ClassId == ControlClassId.UNKNOWN_11 ||
                             item.ClassId == ControlClassId.UNKNOWN_12 ||
                             item.ClassId == ControlClassId.UNKNOWN_13 ||
                             item.ClassId == ControlClassId.UNKNOWN_14 ||
                             item.ClassId == ControlClassId.UNKNOWN_15 ||
                             item.ClassId == ControlClassId.UNKNOWN_16 ||
                             item.ClassId == ControlClassId.UNKNOWN_17 ||
                             item.ClassId == ControlClassId.SUB_GRID ||
                             item.ClassId == ControlClassId.SUB_GRID_PANEL ||
                             item.ClassId == ControlClassId.QUICK_VIEW_FORM ||
                             item.ClassId == ControlClassId.CASERESEARCH_LINKCONTROL ||
                             item.ClassId == ControlClassId.KBVIEWER ||
                             item.ClassId == ControlClassId.CASE_KBSEARCHCONTROL ||
                             item.ClassId == ControlClassId.ATTACHMENT ||
                             item.ClassId == ControlClassId.ISMANAGED ||
                             item.ClassId == ControlClassId.CONNECTIONROLEOBJECTTYPECODELIST ||
                             item.ClassId == ControlClassId.DYNAMICPROPERTIESLIST_LINKCONTROL ||
                             item.ClassId == ControlClassId.MSDYN_SESSIONTYPE ||
                             item.ClassId == ControlClassId.MSDYN_NAME ||
                             item.ClassId == ControlClassId.WEBRESOURCE_POSTCONVERSATIONSURVEYDISCLAIMER ||
                             item.ClassId == ControlClassId.WEBRESOURCE_URL ||
                             item.ClassId == ControlClassId.WEBRESOURCE_POSTCONVERSATIONSURVEYDISCLAIMER2 ||
                             item.ClassId == ControlClassId.WEBRESOURCE_POSTCONVERSATIONSURVEYDISCLAIMER3 ||
                             item.ClassId == ControlClassId.WEBRESOURCE_WECHATCALLBACKURL ||
                             item.ClassId == ControlClassId.MSDYN_SOURCEENTITYNAME
                             )
                        continue;
                    else
                    {
                        _d_ts += $"\t\t\t{item.Name}: DevKit.Controls.ELSE2???;//{item.Id} - {item.ClassId} -- FOR DEBUG \r\n";
                    }
                }
                else
                {
                    if (item.Name != null)
                        _d_ts += $"\t\t\t{item.Name}: DevKit.Controls.ELSE3???;//{item.Id} - {item.ClassId} -- FOR DEBUG \r\n";
                }
            }
            _d_ts = _d_ts.TrimEnd(",\r\n".ToCharArray()) + "\r\n";
            return _d_ts;
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

        private static string GetSavedComment()
        {
            var _d_ts = string.Empty;
            _d_ts = $"//{SimpleJson.SerializeObject(Comment)}";
            _d_ts = _d_ts.Replace("\"", "'");
            return _d_ts;
        }
    }
}

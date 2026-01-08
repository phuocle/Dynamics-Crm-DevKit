//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_webformstep_Information {
		interface tab_tab_10_Sections {
			/** Section */
			tab_10_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_additional_functionality_Sections {
			/** Geolocation */
			section_geolocation: DevKit.Controls.Section;
			/** Action Configuration */
			section_settings: DevKit.Controls.Section;
			/** Log User Info */
			tab_7_section_1: DevKit.Controls.Section;
			/** Auto Numbering */
			tab_7_section_4: DevKit.Controls.Section;
			/** File Attachment */
			tab_8_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_condition_Sections {
			/** Section */
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_entity_reference_Sections {
			/** Table Reference Details */
			section_entity_reference_details: DevKit.Controls.Section;
			/** ReadOnly Details */
			section_entity_reference_readonly: DevKit.Controls.Section;
			/** Table Reference Source */
			section_entity_reference_source: DevKit.Controls.Section;
			/** Entity Source From Query String */
			section_entity_source_query_string: DevKit.Controls.Section;
			/** Entity Source From Step */
			section_entity_source_step: DevKit.Controls.Section;
			/** Reference Source Relationship */
			section_reference_entity_source_relationship: DevKit.Controls.Section;
			/** Section */
			tab_9_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_form_Sections {
			/** Additional Settings */
			section_additionalsettings: DevKit.Controls.Section;
			/** Associate Current Portal User on Insert */
			section_associateportaluser: DevKit.Controls.Section;
			/** Record Source */
			section_entity_source: DevKit.Controls.Section;
			/** Section */
			section_entity_source_querystring: DevKit.Controls.Section;
			/** Entity Source Relationship */
			section_entity_source_relationship: DevKit.Controls.Section;
			/** Section */
			section_formdefinition: DevKit.Controls.Section;
			/** Section */
			section_mode: DevKit.Controls.Section;
		}
		interface tab_tab_form_options_Sections {
			/** Custom JavaScript */
			mspp_webformstep_registerstartupscript_MonacoEditor: DevKit.Controls.Section;
			/** Options */
			section_formtabusercontroloptions: DevKit.Controls.Section;
			/** Custom JavaScript */
			section_javascript: DevKit.Controls.Section;
			/** Progress Indicator */
			tab_10_section_1: DevKit.Controls.Section;
			/** Action Button Settings */
			tab_form_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_redirect_Sections {
			/** Section */
			tab_4_section_1: DevKit.Controls.Section;
			/** Append an attribute's value to the Query String */
			tab_redirect_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_usercontrol_Sections {
			/** Section */
			tab_8_section_2: DevKit.Controls.Section;
		}
		/** Developer Extensions */
		interface tab_tab_10 extends DevKit.Controls.ITab {
			Section: tab_tab_10_Sections;
		}
		/** Additional Functionality */
		interface tab_tab_additional_functionality extends DevKit.Controls.ITab {
			Section: tab_tab_additional_functionality_Sections;
		}
		/** Condition */
		interface tab_tab_condition extends DevKit.Controls.ITab {
			Section: tab_tab_condition_Sections;
		}
		/** Associated Table Reference */
		interface tab_tab_entity_reference extends DevKit.Controls.ITab {
			Section: tab_tab_entity_reference_Sections;
		}
		/** Form Definition */
		interface tab_tab_form extends DevKit.Controls.ITab {
			Section: tab_tab_form_Sections;
		}
		/** Form Options */
		interface tab_tab_form_options extends DevKit.Controls.ITab {
			Section: tab_tab_form_options_Sections;
		}
		/** Redirect */
		interface tab_tab_redirect extends DevKit.Controls.ITab {
			Section: tab_tab_redirect_Sections;
		}
		/** User Control */
		interface tab_tab_usercontrol extends DevKit.Controls.ITab {
			Section: tab_tab_usercontrol_Sections;
		}
		interface Tabs {
			/** Developer Extensions */
			tab_10: tab_tab_10;
			/** Additional Functionality */
			tab_additional_functionality: tab_tab_additional_functionality;
			/** Condition */
			tab_condition: tab_tab_condition;
			/** Associated Table Reference */
			tab_entity_reference: tab_tab_entity_reference;
			/** Form Definition */
			tab_form: tab_tab_form;
			/** Form Options */
			tab_form_options: tab_tab_form_options;
			/** Redirect */
			tab_redirect: tab_tab_redirect;
			/** User Control */
			tab_usercontrol: tab_tab_usercontrol;
		}
		interface Body {
			Tab: Tabs;
			/** The accept attribute specifies the MIME types of files that the server accepts through file upload. To specify more than one value, separate the values with a comma (e.g. audio/*,video/*,image/*). */
			mspp_accept: DevKit.Controls.String;
			/** Allow Multiple Files */
			mspp_allowmultiplefiles: DevKit.Controls.Boolean;
			/** Append Query String */
			mspp_appendquerystring: DevKit.Controls.Boolean;
			/** Associate Current Portal User */
			mspp_associatecurrentportaluser: DevKit.Controls.Boolean;
			/** Attach File */
			mspp_attachfile: DevKit.Controls.Boolean;
			/** Attach File Label */
			mspp_attachfilelabel: DevKit.Controls.String;
			/** Attach File Maximum Size */
			mspp_attachfilemaxsize: DevKit.Controls.Integer;
			/** Attach File Required */
			mspp_attachfilerequired: DevKit.Controls.Boolean;
			/** Attach File Required Error Message */
			mspp_attachfilerequirederrormessage: DevKit.Controls.String;
			/** Attach File Restrict Accept */
			mspp_attachfilerestrictaccept: DevKit.Controls.Boolean;
			/** Attach File Size Error Message */
			mspp_attachfilesizeerrormessage: DevKit.Controls.String;
			/** Attach File Storage Location */
			mspp_attachfilestoragelocation: DevKit.Controls.OptionSet;
			/** Attach File Type Error Message */
			mspp_attachfiletypeerrormessage: DevKit.Controls.String;
			/** Auto Generate Steps From Tabs */
			mspp_autogeneratesteps: DevKit.Controls.Boolean;
			/** Auto Number Attribute Logical Name */
			mspp_autonumberattributelogicalname: DevKit.Controls.String;
			/** Auto Number Definition Name */
			mspp_autonumberdefinitionname: DevKit.Controls.String;
			/** Captcha Required */
			mspp_captcharequired: DevKit.Controls.Boolean;
			/** Condition */
			mspp_condition: DevKit.Controls.String;
			/** If the condition test fails, this is the next step. */
			mspp_conditiondefaultnextstep: DevKit.Controls.Lookup;
			/** Create Auto Number */
			mspp_createautonumber: DevKit.Controls.Boolean;
			/** Enable Table Permissions */
			mspp_entitypermissionsenabled: DevKit.Controls.Boolean;
			/** Unique identifier for Form Step associated with Form Step. */
			mspp_entitysourcestep: DevKit.Controls.Lookup;
			/** Table Source Type */
			mspp_entitysourcetype: DevKit.Controls.OptionSet;
			/** Make All Fields Required */
			mspp_forceallfieldsrequired: DevKit.Controls.Boolean;
			/** Shows the name of the entity form to render. */
			mspp_formname: DevKit.Controls.String;
			/** Address Line Field Name */
			mspp_geolocation_addresslinefieldname: DevKit.Controls.String;
			/** City Field Name */
			mspp_geolocation_cityfieldname: DevKit.Controls.String;
			/** Country/Region Field Name */
			mspp_geolocation_countryfieldname: DevKit.Controls.String;
			/** County Field Name */
			mspp_geolocation_countyfieldname: DevKit.Controls.String;
			/** Display Map */
			mspp_geolocation_displaymap: DevKit.Controls.Boolean;
			/** Enabled */
			mspp_geolocation_enabled: DevKit.Controls.Boolean;
			/** Formatted Address Field Name */
			mspp_geolocation_formattedaddressfieldname: DevKit.Controls.String;
			/** Latitude Field Name */
			mspp_geolocation_latitudefieldname: DevKit.Controls.String;
			/** Longitude Field Name */
			mspp_geolocation_longitudefieldname: DevKit.Controls.String;
			/** Neighborhood Field Name */
			mspp_geolocation_neighborhoodfieldname: DevKit.Controls.String;
			/** Zip/Postal Code Field Name */
			mspp_geolocation_postalcodefieldname: DevKit.Controls.String;
			/** State or Province Field Name */
			mspp_geolocation_statefieldname: DevKit.Controls.String;
			/** Hide Form on Success */
			mspp_hideformonsuccess: DevKit.Controls.Boolean;
			/** Instructions */
			mspp_instructions: DevKit.Controls.String;
			/** Load Event Key Name */
			mspp_loadeventkeyname: DevKit.Controls.String;
			/** Log User */
			mspp_loguser: DevKit.Controls.Boolean;
			/** Mode */
			mspp_mode: DevKit.Controls.OptionSet;
			/** Move Previous Event Key Name */
			mspp_movepreviouseventkeyname: DevKit.Controls.String;
			/** Move Previous Permitted */
			mspp_movepreviouspermitted: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Next Button CSS Class */
			mspp_nextbuttoncssclass: DevKit.Controls.String;
			/** Next Button Text */
			mspp_nextbuttontext: DevKit.Controls.String;
			/** Pointer to the next step. */
			mspp_nextstep: DevKit.Controls.Lookup;
			/** Populate Table Reference Lookup Field */
			mspp_populatereferenceentitylookupfield: DevKit.Controls.Boolean;
			/** Is Activity Party */
			mspp_portaluserlookupattributeisactivityparty: DevKit.Controls.Boolean;
			/** Previous Button CSS Class */
			mspp_previousbuttoncssclass: DevKit.Controls.String;
			/** Previous Button Text */
			mspp_previousbuttontext: DevKit.Controls.String;
			/** The logical name of the primary key attribute of the target entity. */
			mspp_primarykeyattributelogicalname: DevKit.Controls.String;
			/** Primary Key Query String Parameter Name */
			mspp_primarykeyquerystringparametername: DevKit.Controls.String;
			/** Provisioned Languages */
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			/** Recommended Fields Required */
			mspp_recommendedfieldsrequired: DevKit.Controls.Boolean;
			/** Record Not Found Message */
			mspp_recordnotfoundmessage: DevKit.Controls.String;
			/** Relationship Name */
			mspp_recordsourcerelationshipname: DevKit.Controls.String;
			/** Shows the URL to redirect to. */
			mspp_redirecturl: DevKit.Controls.String;
			/** Append Table ID To Query String */
			mspp_redirecturlappendentityidquerystring: DevKit.Controls.Boolean;
			/** Custom Query String */
			mspp_redirecturlcustomquerystring: DevKit.Controls.String;
			/** Add an attribute value as a query string value by specifying the logical name of the attribute to assign its value to the query string. */
			mspp_redirecturlquerystringattribute: DevKit.Controls.String;
			/** Query String Parameter Name */
			mspp_redirecturlquerystringattributeparamname: DevKit.Controls.String;
			/** The url to redirect to is dynamically retrieved from the query string using this parameter name */
			mspp_redirecturlquerystringname: DevKit.Controls.String;
			/** Web Page to redirect to. */
			mspp_redirectwebpage: DevKit.Controls.Lookup;
			/** Reference Table name */
			mspp_referenceentitylogicalname: DevKit.Controls.String;
			/** Reference Entity ReadOnly Form Name */
			mspp_referenceentityreadonlyformname: DevKit.Controls.String;
			/** Reference Entity Relationship Name */
			mspp_referenceentityrelationshipname: DevKit.Controls.String;
			/** Show Reference Entity ReadOnly Form */
			mspp_referenceentityshowreadonlyform: DevKit.Controls.Boolean;
			/** Source Type */
			mspp_referenceentitysourcetype: DevKit.Controls.OptionSet;
			/** Unique identifier for Form Step associated with Form Step. */
			mspp_referenceentitystep: DevKit.Controls.Lookup;
			/** Reference Query Attribute Logical Name */
			mspp_referencequeryattributelogicalname: DevKit.Controls.String;
			/** Reference Query String Is Primary Key */
			mspp_referencequerystringisprimarykey: DevKit.Controls.Boolean;
			/** Reference Query String Name */
			mspp_referencequerystringname: DevKit.Controls.String;
			/** Record Source Relationship Name */
			mspp_referencerecordsourcerelationshipname: DevKit.Controls.String;
			/** Reference Target Lookup Attribute Logical Name */
			mspp_referencetargetlookupattributelogicalname: DevKit.Controls.String;
			/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
			mspp_registerstartupscript: DevKit.Controls.String;
			/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
			mspp_registerstartupscript1: DevKit.Controls.String;
			/** Render Web Resources Inline */
			mspp_renderwebresourcesinline: DevKit.Controls.Boolean;
			/** Saved Event Key Name */
			mspp_savedeventkeyname: DevKit.Controls.String;
			/** Saving Event Key Name */
			mspp_savingeventkeyname: DevKit.Controls.String;
			/** Set Table Reference */
			mspp_setentityreference: DevKit.Controls.Boolean;
			/** Settings */
			mspp_settings: DevKit.Controls.String;
			/** Show Captcha for authenticated users */
			mspp_showcaptchaforauthenticatedusers: DevKit.Controls.Boolean;
			/** Show Owner Fields */
			mspp_showownerfields: DevKit.Controls.Boolean;
			/** Show Unsupported Fields */
			mspp_showunsupportedfields: DevKit.Controls.Boolean;
			/** Submit Button Busy Text */
			mspp_submitbuttonbusytext: DevKit.Controls.String;
			/** Submit Button CSS Class */
			mspp_submitbuttoncssclass: DevKit.Controls.String;
			/** Submit Button Text */
			mspp_submitbuttontext: DevKit.Controls.String;
			/** Submit Event Key Name */
			mspp_submiteventkeyname: DevKit.Controls.String;
			/** Success Message */
			mspp_successmessage: DevKit.Controls.String;
			/** The name of the tab on an entity form to render. */
			mspp_tabname: DevKit.Controls.String;
			/** Target Table name */
			mspp_targetentitylogicalname: DevKit.Controls.String;
			/** Portal User Lookup Column */
			mspp_targetentityportaluserlookupattribute: DevKit.Controls.String;
			/** Title */
			mspp_title: DevKit.Controls.String;
			/** ToolTip Enabled */
			mspp_tooltipenabled: DevKit.Controls.Boolean;
			/** Type */
			mspp_type: DevKit.Controls.OptionSet;
			/** User Control Path */
			mspp_usercontrolpath: DevKit.Controls.String;
			/** User Control Title */
			mspp_usercontroltitle: DevKit.Controls.String;
			/** User Host Address Attribute Logical Name */
			mspp_userhostaddressattributelogicalname: DevKit.Controls.String;
			/** User Identity Name Attribute Logical Name */
			mspp_useridentitynameattributelogicalname: DevKit.Controls.String;
			/** Validation Group */
			mspp_validationgroup: DevKit.Controls.String;
			/** Validation Summary CSS Class */
			mspp_validationsummarycssclass: DevKit.Controls.String;
			/** Validation Summary Header Text */
			mspp_validationsummaryheadertext: DevKit.Controls.String;
			/** Enable Validation Summary Links */
			mspp_validationsummarylinksenabled: DevKit.Controls.Boolean;
			/** Validation Summary Link Text */
			mspp_validationsummarylinktext: DevKit.Controls.String;
			/** Unique identifier for Multistep Form associated with Form Step. */
			mspp_webform: DevKit.Controls.Lookup;
			WebResource_condition: DevKit.Controls.WebResource;
			WebResource_geolocationaddresslinefieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationcityfieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationcountryfieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationcountyfieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationformattedaddressfieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationlatitudefieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationlongitudefieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationneighborhoodfieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationpostalcodefieldname: DevKit.Controls.WebResource;
			WebResource_geolocationstatefieldnameselector: DevKit.Controls.WebResource;
			WebResource_instructions: DevKit.Controls.WebResource;
			WebResource_localize_attachfilelabel: DevKit.Controls.WebResource;
			WebResource_localize_attachfilerequirederrormessage: DevKit.Controls.WebResource;
			WebResource_localize_nextbuttontext: DevKit.Controls.WebResource;
			WebResource_localize_previousbuttontext: DevKit.Controls.WebResource;
			WebResource_localize_submitbuttonbusytext: DevKit.Controls.WebResource;
			WebResource_localize_submitbuttontext: DevKit.Controls.WebResource;
			WebResource_localize_successmessage: DevKit.Controls.WebResource;
			WebResource_localize_title: DevKit.Controls.WebResource;
			WebResource_localize_usercontroltitle: DevKit.Controls.WebResource;
			WebResource_localized_recordnotfoundmessage: DevKit.Controls.WebResource;
			WebResource_mspp_attachfilesizeerrormessage: DevKit.Controls.WebResource;
			WebResource_mspp_attachfiletypeerrormessage: DevKit.Controls.WebResource;
			WebResource_mspp_autonumberattributelogicalname: DevKit.Controls.WebResource;
			WebResource_mspp_formname: DevKit.Controls.WebResource;
			WebResource_mspp_primarykeyattributelogicalname: DevKit.Controls.WebResource;
			WebResource_mspp_recordsourcerelationshipname: DevKit.Controls.WebResource;
			WebResource_mspp_redirecturlquerystringattribute: DevKit.Controls.WebResource;
			WebResource_mspp_referenceentitylogicalname: DevKit.Controls.WebResource;
			WebResource_mspp_referenceentityreadonlyformname: DevKit.Controls.WebResource;
			WebResource_mspp_referenceentityrelationshipname_selector: DevKit.Controls.WebResource;
			WebResource_mspp_referencequeryattributelogicalname: DevKit.Controls.WebResource;
			WebResource_mspp_referencerecordsourcerelationshipname: DevKit.Controls.WebResource;
			WebResource_mspp_referencetargetlookupattributelogicalname: DevKit.Controls.WebResource;
			WebResource_mspp_settings: DevKit.Controls.WebResource;
			WebResource_mspp_tabname: DevKit.Controls.WebResource;
			WebResource_mspp_targetentitylogicalname: DevKit.Controls.WebResource;
			WebResource_mspp_targetentityportaluserlookupattribute: DevKit.Controls.WebResource;
			WebResource_mspp_userhostaddressattributelogicalname: DevKit.Controls.WebResource;
			WebResource_mspp_useridentitynameattributelogicalname: DevKit.Controls.WebResource;
			WebResource_mspp_validationsummaryheadertext: DevKit.Controls.WebResource;
		}
	}
	export class Formmspp_webformstep_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form mspp_webformstep_Information */
		Body: DevKit.Formmspp_webformstep_Information.Body;
	}
	export class mspp_webformstepApi {
		/**
		* DynamicsCrm.DevKit mspp_webformstepApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** The accept attribute specifies the MIME types of files that the server accepts through file upload. To specify more than one value, separate the values with a comma (e.g. audio/*,video/*,image/*). */
		mspp_accept: string | null;
		mspp_allowmultiplefiles: boolean | null;
		mspp_appendquerystring: boolean | null;
		mspp_associatecurrentportaluser: boolean | null;
		mspp_attachfile: boolean | null;
		mspp_attachfilelabel: string | null;
		mspp_attachfilemaxsize: number | null;
		mspp_attachfilerequired: boolean | null;
		mspp_attachfilerequirederrormessage: string | null;
		mspp_attachfilerestrictaccept: boolean | null;
		mspp_attachfilesizeerrormessage: string | null;
		mspp_attachfilestoragelocation: OptionSet.mspp_webformstep.mspp_attachfilestoragelocation | null;
		mspp_attachfiletypeerrormessage: string | null;
		mspp_autogeneratesteps: boolean | null;
		mspp_autonumberattributelogicalname: string | null;
		mspp_autonumberdefinitionname: string | null;
		mspp_captcharequired: boolean | null;
		mspp_condition: string | null;
		/** If the condition test fails, this is the next step. */
		mspp_conditiondefaultnextstep: string | null;
		mspp_containername: string | null;
		mspp_createautonumber: boolean | null;
		/** Shows who created the record. */
		mspp_createdby: string | null;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date | null;
		mspp_editexistingrecordpermitted: boolean | null;
		mspp_editexpiredmessage: string | null;
		mspp_editexpiredstatecode: number | null;
		mspp_editexpiredstatusreason: number | null;
		mspp_editnotpermittedmessage: string | null;
		mspp_entitypermissionsenabled: boolean | null;
		/** Unique identifier for Form Step associated with Form Step. */
		mspp_entitysourcestep: string | null;
		mspp_entitysourcetype: OptionSet.mspp_webformstep.mspp_entitysourcetype | null;
		mspp_forceallfieldsrequired: boolean | null;
		/** Shows the name of the entity form to render. */
		mspp_formname: string | null;
		mspp_geolocation_addresslinefieldname: string | null;
		mspp_geolocation_cityfieldname: string | null;
		mspp_geolocation_countryfieldname: string | null;
		mspp_geolocation_countyfieldname: string | null;
		mspp_geolocation_displaymap: boolean | null;
		mspp_geolocation_enabled: boolean | null;
		mspp_geolocation_formattedaddressfieldname: string | null;
		mspp_geolocation_latitudefieldname: string | null;
		mspp_geolocation_longitudefieldname: string | null;
		mspp_geolocation_maptype: OptionSet.mspp_webformstep.mspp_geolocation_maptype | null;
		mspp_geolocation_neighborhoodfieldname: string | null;
		mspp_geolocation_postalcodefieldname: string | null;
		mspp_geolocation_statefieldname: string | null;
		mspp_hideformonsuccess: boolean | null;
		mspp_instructions: string | null;
		mspp_loadeventkeyname: string | null;
		mspp_loguser: boolean | null;
		mspp_maximumnooffiles: number | null;
		mspp_mode: OptionSet.mspp_webformstep.mspp_mode | null;
		/** Shows who last updated the record. */
		mspp_modifiedby: string | null;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date | null;
		mspp_movepreviouseventkeyname: string | null;
		mspp_movepreviouspermitted: boolean | null;
		mspp_multiplerecordsperuserpermitted: boolean | null;
		/** The name of the custom entity. */
		mspp_name: string | null;
		mspp_nextbuttoncssclass: string | null;
		mspp_nextbuttontext: string | null;
		/** Pointer to the next step. */
		mspp_nextstep: string | null;
		mspp_populatereferenceentitylookupfield: boolean | null;
		mspp_portaluserlookupattributeisactivityparty: boolean | null;
		mspp_postbackurl: string | null;
		mspp_previousbuttoncssclass: string | null;
		mspp_previousbuttontext: string | null;
		/** Pointer to the previous step. */
		mspp_previousstep: string | null;
		/** The logical name of the primary key attribute of the target entity. */
		mspp_primarykeyattributelogicalname: string | null;
		mspp_primarykeyquerystringparametername: string | null;
		mspp_provisionedlanguages: number | null;
		mspp_recommendedfieldsrequired: boolean | null;
		mspp_recordnotfoundmessage: string | null;
		mspp_recordsourcerelationshipname: string | null;
		/** Shows the URL to redirect to. */
		mspp_redirecturl: string | null;
		mspp_redirecturlappendentityidquerystring: boolean | null;
		mspp_redirecturlcustomquerystring: string | null;
		/** Add an attribute value as a query string value by specifying the logical name of the attribute to assign its value to the query string. */
		mspp_redirecturlquerystringattribute: string | null;
		mspp_redirecturlquerystringattributeparamname: string | null;
		/** The url to redirect to is dynamically retrieved from the query string using this parameter name */
		mspp_redirecturlquerystringname: string | null;
		/** Web Page to redirect to. */
		mspp_redirectwebpage: string | null;
		mspp_referenceentitylogicalname: string | null;
		mspp_referenceentityprimarykeylogicalname: string | null;
		mspp_referenceentityreadonlyformname: string | null;
		mspp_referenceentityrelationshipname: string | null;
		mspp_referenceentityshowreadonlyform: boolean | null;
		mspp_referenceentitysourcetype: OptionSet.mspp_webformstep.mspp_referenceentitysourcetype | null;
		/** Unique identifier for Form Step associated with Form Step. */
		mspp_referenceentitystep: string | null;
		mspp_referencequeryattributelogicalname: string | null;
		mspp_referencequerystringisprimarykey: boolean | null;
		mspp_referencequerystringname: string | null;
		mspp_referencerecordsourcerelationshipname: string | null;
		mspp_referencesourceentitylogicalname: string | null;
		mspp_referencetargetlookupattributelogicalname: string | null;
		/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
		mspp_registerstartupscript: string | null;
		mspp_renderwebresourcesinline: boolean | null;
		mspp_savedeventkeyname: string | null;
		mspp_savingeventkeyname: string | null;
		mspp_setentityreference: boolean | null;
		mspp_settings: string | null;
		mspp_showcaptchaforauthenticatedusers: boolean | null;
		mspp_showownerfields: boolean | null;
		mspp_showunsupportedfields: boolean | null;
		mspp_storageaccountname: string | null;
		mspp_submitbuttonbusytext: string | null;
		mspp_submitbuttoncssclass: string | null;
		mspp_submitbuttontext: string | null;
		mspp_submiteventkeyname: string | null;
		mspp_successmessage: string | null;
		/** The name of the tab on an entity form to render. */
		mspp_tabname: string | null;
		mspp_targetentitylogicalname: string | null;
		mspp_targetentityportaluserlookupattribute: string | null;
		mspp_targetentityprimarykeylogicalname: string | null;
		mspp_title: string | null;
		mspp_tooltipenabled: boolean | null;
		mspp_type: OptionSet.mspp_webformstep.mspp_type | null;
		mspp_usercontrolpath: string | null;
		mspp_usercontroltitle: string | null;
		mspp_userhostaddressattributelogicalname: string | null;
		mspp_useridentitynameattributelogicalname: string | null;
		mspp_validationgroup: string | null;
		mspp_validationsummarycssclass: string | null;
		mspp_validationsummaryheadertext: string | null;
		mspp_validationsummarylinksenabled: boolean | null;
		mspp_validationsummarylinktext: string | null;
		/** Unique identifier for Multistep Form associated with Form Step. */
		mspp_webform: string | null;
		/** Unique identifier for entity instances */
		mspp_webformstepId: string | null;
		/** Status of the Form Step */
		statecode: OptionSet.mspp_webformstep.statecode | null;
		/** Reason for the status of the Form Step */
		statuscode: OptionSet.mspp_webformstep.statuscode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** The accept attribute specifies the MIME types of files that the server accepts through file upload. To specify more than one value, separate the values with a comma (e.g. audio/*,video/*,image/*). */
			readonly mspp_accept: string;
			readonly mspp_allowmultiplefiles: string;
			readonly mspp_appendquerystring: string;
			readonly mspp_associatecurrentportaluser: string;
			readonly mspp_attachfile: string;
			readonly mspp_attachfilelabel: string;
			readonly mspp_attachfilemaxsize: string;
			readonly mspp_attachfilerequired: string;
			readonly mspp_attachfilerequirederrormessage: string;
			readonly mspp_attachfilerestrictaccept: string;
			readonly mspp_attachfilesizeerrormessage: string;
			readonly mspp_attachfilestoragelocation: string;
			readonly mspp_attachfiletypeerrormessage: string;
			readonly mspp_autogeneratesteps: string;
			readonly mspp_autonumberattributelogicalname: string;
			readonly mspp_autonumberdefinitionname: string;
			readonly mspp_captcharequired: string;
			readonly mspp_condition: string;
			/** If the condition test fails, this is the next step. */
			readonly mspp_conditiondefaultnextstep: string;
			readonly mspp_containername: string;
			readonly mspp_createautonumber: string;
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_editexistingrecordpermitted: string;
			readonly mspp_editexpiredmessage: string;
			readonly mspp_editexpiredstatecode: string;
			readonly mspp_editexpiredstatusreason: string;
			readonly mspp_editnotpermittedmessage: string;
			readonly mspp_entitypermissionsenabled: string;
			/** Unique identifier for Form Step associated with Form Step. */
			readonly mspp_entitysourcestep: string;
			readonly mspp_entitysourcetype: string;
			readonly mspp_forceallfieldsrequired: string;
			/** Shows the name of the entity form to render. */
			readonly mspp_formname: string;
			readonly mspp_geolocation_addresslinefieldname: string;
			readonly mspp_geolocation_cityfieldname: string;
			readonly mspp_geolocation_countryfieldname: string;
			readonly mspp_geolocation_countyfieldname: string;
			readonly mspp_geolocation_displaymap: string;
			readonly mspp_geolocation_enabled: string;
			readonly mspp_geolocation_formattedaddressfieldname: string;
			readonly mspp_geolocation_latitudefieldname: string;
			readonly mspp_geolocation_longitudefieldname: string;
			readonly mspp_geolocation_maptype: string;
			readonly mspp_geolocation_neighborhoodfieldname: string;
			readonly mspp_geolocation_postalcodefieldname: string;
			readonly mspp_geolocation_statefieldname: string;
			readonly mspp_hideformonsuccess: string;
			readonly mspp_instructions: string;
			readonly mspp_loadeventkeyname: string;
			readonly mspp_loguser: string;
			readonly mspp_maximumnooffiles: string;
			readonly mspp_mode: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			readonly mspp_movepreviouseventkeyname: string;
			readonly mspp_movepreviouspermitted: string;
			readonly mspp_multiplerecordsperuserpermitted: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			readonly mspp_nextbuttoncssclass: string;
			readonly mspp_nextbuttontext: string;
			/** Pointer to the next step. */
			readonly mspp_nextstep: string;
			readonly mspp_populatereferenceentitylookupfield: string;
			readonly mspp_portaluserlookupattributeisactivityparty: string;
			readonly mspp_postbackurl: string;
			readonly mspp_previousbuttoncssclass: string;
			readonly mspp_previousbuttontext: string;
			/** Pointer to the previous step. */
			readonly mspp_previousstep: string;
			/** The logical name of the primary key attribute of the target entity. */
			readonly mspp_primarykeyattributelogicalname: string;
			readonly mspp_primarykeyquerystringparametername: string;
			readonly mspp_provisionedlanguages: string;
			readonly mspp_recommendedfieldsrequired: string;
			readonly mspp_recordnotfoundmessage: string;
			readonly mspp_recordsourcerelationshipname: string;
			/** Shows the URL to redirect to. */
			readonly mspp_redirecturl: string;
			readonly mspp_redirecturlappendentityidquerystring: string;
			readonly mspp_redirecturlcustomquerystring: string;
			/** Add an attribute value as a query string value by specifying the logical name of the attribute to assign its value to the query string. */
			readonly mspp_redirecturlquerystringattribute: string;
			readonly mspp_redirecturlquerystringattributeparamname: string;
			/** The url to redirect to is dynamically retrieved from the query string using this parameter name */
			readonly mspp_redirecturlquerystringname: string;
			/** Web Page to redirect to. */
			readonly mspp_redirectwebpage: string;
			readonly mspp_referenceentitylogicalname: string;
			readonly mspp_referenceentityprimarykeylogicalname: string;
			readonly mspp_referenceentityreadonlyformname: string;
			readonly mspp_referenceentityrelationshipname: string;
			readonly mspp_referenceentityshowreadonlyform: string;
			readonly mspp_referenceentitysourcetype: string;
			/** Unique identifier for Form Step associated with Form Step. */
			readonly mspp_referenceentitystep: string;
			readonly mspp_referencequeryattributelogicalname: string;
			readonly mspp_referencequerystringisprimarykey: string;
			readonly mspp_referencequerystringname: string;
			readonly mspp_referencerecordsourcerelationshipname: string;
			readonly mspp_referencesourceentitylogicalname: string;
			readonly mspp_referencetargetlookupattributelogicalname: string;
			/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
			readonly mspp_registerstartupscript: string;
			readonly mspp_renderwebresourcesinline: string;
			readonly mspp_savedeventkeyname: string;
			readonly mspp_savingeventkeyname: string;
			readonly mspp_setentityreference: string;
			readonly mspp_settings: string;
			readonly mspp_showcaptchaforauthenticatedusers: string;
			readonly mspp_showownerfields: string;
			readonly mspp_showunsupportedfields: string;
			readonly mspp_storageaccountname: string;
			readonly mspp_submitbuttonbusytext: string;
			readonly mspp_submitbuttoncssclass: string;
			readonly mspp_submitbuttontext: string;
			readonly mspp_submiteventkeyname: string;
			readonly mspp_successmessage: string;
			/** The name of the tab on an entity form to render. */
			readonly mspp_tabname: string;
			readonly mspp_targetentitylogicalname: string;
			readonly mspp_targetentityportaluserlookupattribute: string;
			readonly mspp_targetentityprimarykeylogicalname: string;
			readonly mspp_title: string;
			readonly mspp_tooltipenabled: string;
			readonly mspp_type: string;
			readonly mspp_usercontrolpath: string;
			readonly mspp_usercontroltitle: string;
			readonly mspp_userhostaddressattributelogicalname: string;
			readonly mspp_useridentitynameattributelogicalname: string;
			readonly mspp_validationgroup: string;
			readonly mspp_validationsummarycssclass: string;
			readonly mspp_validationsummaryheadertext: string;
			readonly mspp_validationsummarylinksenabled: string;
			readonly mspp_validationsummarylinktext: string;
			/** Unique identifier for Multistep Form associated with Form Step. */
			readonly mspp_webform: string;
			/** Unique identifier for entity instances */
			readonly mspp_webformstepId: string;
			/** Status of the Form Step */
			readonly statecode: string;
			/** Reason for the status of the Form Step */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_webformstep {
		enum mspp_attachfilestoragelocation {
			/** Azure_Blob_Storage = 756150001*/
			Azure_Blob_Storage = 756150001,
			/** Note_Document = 756150000*/
			Note_Document = 756150000
		}
		enum mspp_entitysourcetype {
			/** Current_Portal_User = 100000002*/
			Current_Portal_User = 100000002,
			/** Query_String = 100000001*/
			Query_String = 100000001,
			/** Record_Associated_to_Current_Portal_User = 100000004*/
			Record_Associated_to_Current_Portal_User = 100000004,
			/** Result_From_Previous_Step = 100000003*/
			Result_From_Previous_Step = 100000003
		}
		enum mspp_geolocation_maptype {
			/** Bing = 756150000*/
			Bing = 756150000,
			/** Esri = 756150002*/
			Esri = 756150002,
			/** Google = 756150001*/
			Google = 756150001
		}
		enum mspp_mode {
			/** Edit = 100000001*/
			Edit = 100000001,
			/** Insert = 100000000*/
			Insert = 100000000,
			/** ReadOnly = 100000002*/
			ReadOnly = 100000002
		}
		enum mspp_referenceentitysourcetype {
			/** Previous_Step = 100000001*/
			Previous_Step = 100000001,
			/** Query_String = 100000000*/
			Query_String = 100000000,
			/** Record_Associated_to_Current_Portal_User = 100000002*/
			Record_Associated_to_Current_Portal_User = 100000002
		}
		enum mspp_type {
			/** Condition = 100000000*/
			Condition = 100000000,
			/** Load_Form = 100000001*/
			Load_Form = 100000001,
			/** Load_Tab = 100000002*/
			Load_Tab = 100000002,
			/** Load_User_Control = 100000004*/
			Load_User_Control = 100000004,
			/** Redirect = 100000003*/
			Redirect = 100000003
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
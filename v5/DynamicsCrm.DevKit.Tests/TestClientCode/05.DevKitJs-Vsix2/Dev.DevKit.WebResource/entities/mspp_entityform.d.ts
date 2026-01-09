//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_entityform_Information {
		interface tab_tab_additionalsettings_Sections {
			/** Custom JavaScript */
			mspp_entityform_javascript_monacoEditor_text_section: DevKit.Controls.Section;
			/** Custom JavaScript */
			section_customjavascript: DevKit.Controls.Section;
			/** Geolocation */
			section_geolocation: DevKit.Controls.Section;
			/** Action Configuration */
			section_settings: DevKit.Controls.Section;
			/** Associate Current Portal User on Insert */
			tab_4_section_1: DevKit.Controls.Section;
			/** Add Attach File */
			tab_additionalsettings_section_2: DevKit.Controls.Section;
			/** Button Settings */
			tab_formoptions_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_entityformmetadata_Sections {
			/** Section */
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_entityreference_Sections {
			/** Table Reference Details */
			section_entity_reference_details: DevKit.Controls.Section;
			/** ReadOnly Details */
			section_entity_reference_readonly: DevKit.Controls.Section;
			/** Table Reference Source */
			section_entity_reference_source: DevKit.Controls.Section;
			/** Entity Source From Query String */
			section_entity_source_query_string: DevKit.Controls.Section;
			/** Reference Source Relationship */
			section_reference_entity_source_relationship: DevKit.Controls.Section;
			/** Section */
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_formoptions_Sections {
			/** Section */
			tab_2_section_1: DevKit.Controls.Section;
			/** Additional Settings */
			tab_formoptions_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_onsuccess_Sections {
			/** Section */
			tab_3_section_1: DevKit.Controls.Section;
			/** Display Success Message */
			tab_onsuccess_section_2: DevKit.Controls.Section;
			/** Redirect */
			tab_onsuccess_section_3: DevKit.Controls.Section;
		}
		/** Additional Settings */
		interface tab_tab_additionalsettings extends DevKit.Controls.ITab {
			Section: tab_tab_additionalsettings_Sections;
		}
		/** Basic Form Metadata */
		interface tab_tab_entityformmetadata extends DevKit.Controls.ITab {
			Section: tab_tab_entityformmetadata_Sections;
		}
		/** Associated Table Reference */
		interface tab_tab_entityreference extends DevKit.Controls.ITab {
			Section: tab_tab_entityreference_Sections;
		}
		/** Form Options */
		interface tab_tab_formoptions extends DevKit.Controls.ITab {
			Section: tab_tab_formoptions_Sections;
		}
		/** On Success Settings */
		interface tab_tab_onsuccess extends DevKit.Controls.ITab {
			Section: tab_tab_onsuccess_Sections;
		}
		interface Tabs {
			/** Additional Settings */
			tab_additionalsettings: tab_tab_additionalsettings;
			/** Basic Form Metadata */
			tab_entityformmetadata: tab_tab_entityformmetadata;
			/** Associated Table Reference */
			tab_entityreference: tab_tab_entityreference;
			/** Form Options */
			tab_formoptions: tab_tab_formoptions;
			/** On Success Settings */
			tab_onsuccess: tab_tab_onsuccess;
		}
		interface Body {
			Tab: Tabs;
			/** Append Query String */
			mspp_appendquerystring: DevKit.Controls.Boolean;
			/** Associate Current Portal User */
			mspp_associatecurrentportaluser: DevKit.Controls.Boolean;
			/** Attach File */
			mspp_attachfile: DevKit.Controls.Boolean;
			/** The accept attribute specifies the MIME types of files that the server accepts through file upload. To specify more than one value, separate the values with a comma (e.g. audio/*,video/*,image/*). */
			mspp_attachfileaccept: DevKit.Controls.String;
			/** The accept attribute specifies the extension types of files that the server accepts through file upload. To specify more than one value, separate the values with a comma (e.g. .docx,.pdf,.txt). */
			mspp_attachfileacceptextensions: DevKit.Controls.String;
			/** Attach File Allow Multiple */
			mspp_attachfileallowmultiple: DevKit.Controls.Boolean;
			/** Attach File Label */
			mspp_attachfilelabel: DevKit.Controls.String;
			/** Maximum File Size */
			mspp_attachfilemaxsize: DevKit.Controls.Integer;
			/** Attach File Required */
			mspp_attachfilerequired: DevKit.Controls.Boolean;
			/** Attach File Required Error Message */
			mspp_attachfilerequirederrormessage: DevKit.Controls.String;
			/** Restrict Files To Accepted Types */
			mspp_attachfilerestrictaccept: DevKit.Controls.Boolean;
			/** Attach File Save Option */
			mspp_attachfilesaveoption: DevKit.Controls.OptionSet;
			/** Attach File Size Error Message */
			mspp_attachfilesizeerrormessage: DevKit.Controls.String;
			/** Attach File Storage Location */
			mspp_attachfilestoragelocation: DevKit.Controls.OptionSet;
			/** Attach File Type Error Message */
			mspp_attachfiletypeerrormessage: DevKit.Controls.String;
			/** Auto Generate Steps From Tabs */
			mspp_autogeneratesteps: DevKit.Controls.Boolean;
			/** Captcha Required */
			mspp_captcharequired: DevKit.Controls.Boolean;
			/** Table Name */
			mspp_entityname: DevKit.Controls.String;
			/** Indicates whether or not the table permission provider will assert privileges. */
			mspp_entitypermissionsenabled: DevKit.Controls.Boolean;
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
			/** Mode */
			mspp_mode: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Next Button CSS Class */
			mspp_nextbuttoncssclass: DevKit.Controls.String;
			/** Next Button Text */
			mspp_nextbuttontext: DevKit.Controls.String;
			/** On Success */
			mspp_onsuccess: DevKit.Controls.OptionSet;
			/** Populate Table Reference Lookup Field */
			mspp_populatereferenceentitylookupfield: DevKit.Controls.Boolean;
			/** Is Activity Party */
			mspp_portaluserlookupattributeisactivityparty: DevKit.Controls.Boolean;
			/** Previous Button CSS Class */
			mspp_previousbuttoncssclass: DevKit.Controls.String;
			/** Previous Button Text */
			mspp_previousbuttontext: DevKit.Controls.String;
			/** Primary Key Name */
			mspp_primarykeyname: DevKit.Controls.String;
			/** Provisioned Languages */
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			/** Recommended Fields Required */
			mspp_recommendedfieldsrequired: DevKit.Controls.Boolean;
			/** Record ID Parameter Name */
			mspp_recordidquerystringparametername: DevKit.Controls.String;
			/** Record Not Found Message */
			mspp_recordnotfoundmessage: DevKit.Controls.String;
			/** This flag, when set to "true," allows the user to create a record if the record doesn't already exist and the Record Source Type is "Record Associated with Current Portal User." */
			mspp_recordsourceallowcreateonnull: DevKit.Controls.Boolean;
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
			/** Custom JavaScript */
			mspp_registerstartupscript: DevKit.Controls.String;
			/** Custom JavaScript */
			mspp_registerstartupscript1: DevKit.Controls.String;
			/** Render Web Resources Inline */
			mspp_renderwebresourcesinline: DevKit.Controls.Boolean;
			/** Set Table Reference */
			mspp_setentityreference: DevKit.Controls.Boolean;
			/** Settings */
			mspp_settings: DevKit.Controls.String;
			/** Show Captcha for Authenticated Users */
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
			/** Success Message */
			mspp_successmessage: DevKit.Controls.String;
			/** The name of the tab on an entity form to render. */
			mspp_tabname: DevKit.Controls.String;
			/** Portal User Lookup Column */
			mspp_targetentityportaluserlookupattribute: DevKit.Controls.String;
			/** ToolTip Enabled */
			mspp_tooltipenabled: DevKit.Controls.Boolean;
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
			/** Unique identifier for Website entity associated with this record. */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_entityreferencequerystringattributeselector: DevKit.Controls.WebResource;
			WebResource_entityreferencereadonlyformselector: DevKit.Controls.WebResource;
			WebResource_geolocation_addresslinefieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationcityfieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationcountryfieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationcountyfieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationformattedaddressfieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationlatitudefieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationlongitudefieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationneighborhoodfieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationpostalcodefieldnameselector: DevKit.Controls.WebResource;
			WebResource_geolocationstatefieldnameselector: DevKit.Controls.WebResource;
			WebResource_instructions: DevKit.Controls.WebResource;
			WebResource_localize_attachfilelabel: DevKit.Controls.WebResource;
			WebResource_localize_attachfilerequirederrormessage: DevKit.Controls.WebResource;
			WebResource_localize_attachfiletypeerrormessage: DevKit.Controls.WebResource;
			WebResource_localize_attachmentfilesizeerrormessage: DevKit.Controls.WebResource;
			WebResource_localized_recordnotfoundmessage: DevKit.Controls.WebResource;
			WebResource_lookupattributeselector: DevKit.Controls.WebResource;
			WebResource_mspp_entityname: DevKit.Controls.WebResource;
			WebResource_mspp_formname: DevKit.Controls.WebResource;
			WebResource_mspp_recordsourcerelationshipname: DevKit.Controls.WebResource;
			WebResource_mspp_referenceentityrelationshipname_selector: DevKit.Controls.WebResource;
			WebResource_mspp_referencerecordsourcerelationshipname: DevKit.Controls.WebResource;
			WebResource_mspp_settings: DevKit.Controls.WebResource;
			WebResource_mspp_tabname: DevKit.Controls.WebResource;
			WebResource_mspp_validationsummaryheadertext: DevKit.Controls.WebResource;
			WebResource_referenceentityselector: DevKit.Controls.WebResource;
			WebResource_targetlookupportaluserselector: DevKit.Controls.WebResource;
		}
		interface Grid {
			/** Basic Form Metadata (Basic Form) */
			grid_entityformmetadata: DevKit.Controls.Grid;
		}
	}
	export class Formmspp_entityform_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form mspp_entityform_Information */
		Body: DevKit.Formmspp_entityform_Information.Body;
		/** The Grid of form mspp_entityform_Information */
		Grid: DevKit.Formmspp_entityform_Information.Grid;
	}
	export class mspp_entityformApi {
		/**
		* DynamicsCrm.DevKit mspp_entityformApi
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
		mspp_appendquerystring: boolean | null;
		mspp_associatecurrentportaluser: boolean | null;
		mspp_attachfile: boolean | null;
		/** The accept attribute specifies the MIME types of files that the server accepts through file upload. To specify more than one value, separate the values with a comma (e.g. audio/*,video/*,image/*). */
		mspp_attachfileaccept: string | null;
		/** The accept attribute specifies the extension types of files that the server accepts through file upload. To specify more than one value, separate the values with a comma (e.g. .docx,.pdf,.txt). */
		mspp_attachfileacceptextensions: string | null;
		mspp_attachfileallowmultiple: boolean | null;
		mspp_attachfilelabel: string | null;
		mspp_attachfilemaxsize: number | null;
		mspp_attachfilerequired: boolean | null;
		mspp_attachfilerequirederrormessage: string | null;
		mspp_attachfilerestrictaccept: boolean | null;
		mspp_attachfilesaveoption: OptionSet.mspp_entityform.mspp_attachfilesaveoption | null;
		mspp_attachfilesizeerrormessage: string | null;
		mspp_attachfilestoragelocation: OptionSet.mspp_entityform.mspp_attachfilestoragelocation | null;
		mspp_attachfiletypeerrormessage: string | null;
		mspp_autogeneratesteps: boolean | null;
		mspp_captcharequired: boolean | null;
		mspp_containername: string | null;
		/** Shows who created the record. */
		mspp_createdby: string | null;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date | null;
		/** Unique identifier for entity instances */
		mspp_entityformId: string | null;
		mspp_entityname: string | null;
		/** Indicates whether or not the table permission provider will assert privileges. */
		mspp_entitypermissionsenabled: boolean | null;
		mspp_entitysourcetype: OptionSet.mspp_entityform.mspp_entitysourcetype | null;
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
		mspp_geolocation_maptype: OptionSet.mspp_entityform.mspp_geolocation_maptype | null;
		mspp_geolocation_neighborhoodfieldname: string | null;
		mspp_geolocation_postalcodefieldname: string | null;
		mspp_geolocation_statefieldname: string | null;
		mspp_hideformonsuccess: boolean | null;
		mspp_instructions: string | null;
		mspp_maximumnooffiles: number | null;
		mspp_mode: OptionSet.mspp_entityform.mspp_mode | null;
		/** Shows who last updated the record. */
		mspp_modifiedby: string | null;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date | null;
		/** The name of the custom entity. */
		mspp_name: string | null;
		mspp_nextbuttoncssclass: string | null;
		mspp_nextbuttontext: string | null;
		mspp_onsuccess: OptionSet.mspp_entityform.mspp_onsuccess | null;
		mspp_populatereferenceentitylookupfield: boolean | null;
		mspp_portaluserlookupattributeisactivityparty: boolean | null;
		mspp_previousbuttoncssclass: string | null;
		mspp_previousbuttontext: string | null;
		mspp_primarykeyname: string | null;
		mspp_provisionedlanguages: number | null;
		mspp_recommendedfieldsrequired: boolean | null;
		mspp_recordidquerystringparametername: string | null;
		mspp_recordnotfoundmessage: string | null;
		/** This flag, when set to "true," allows the user to create a record if the record doesn't already exist and the Record Source Type is "Record Associated with Current Portal User." */
		mspp_recordsourceallowcreateonnull: boolean | null;
		mspp_recordsourceentitylogicalname: string | null;
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
		mspp_referenceentitysourcetype: OptionSet.mspp_entityform.mspp_referenceentitysourcetype | null;
		mspp_referencequeryattributelogicalname: string | null;
		mspp_referencequerystringisprimarykey: boolean | null;
		mspp_referencequerystringname: string | null;
		mspp_referencerecordsourcerelationshipname: string | null;
		mspp_referencetargetlookupattributelogicalname: string | null;
		mspp_registerstartupscript: string | null;
		mspp_renderwebresourcesinline: boolean | null;
		mspp_setentityreference: boolean | null;
		mspp_settings: string | null;
		mspp_showcaptchaforauthenticatedusers: boolean | null;
		mspp_showownerfields: boolean | null;
		mspp_showunsupportedfields: boolean | null;
		mspp_storageaccountname: string | null;
		mspp_submitbuttonbusytext: string | null;
		mspp_submitbuttoncssclass: string | null;
		mspp_submitbuttontext: string | null;
		mspp_successmessage: string | null;
		/** The name of the tab on an entity form to render. */
		mspp_tabname: string | null;
		mspp_targetentityportaluserlookupattribute: string | null;
		mspp_tooltipenabled: boolean | null;
		mspp_validationgroup: string | null;
		mspp_validationsummarycssclass: string | null;
		mspp_validationsummaryheadertext: string | null;
		mspp_validationsummarylinksenabled: boolean | null;
		mspp_validationsummarylinktext: string | null;
		/** Unique identifier for Website entity associated with this record. */
		mspp_websiteid: string | null;
		/** Status of the Basic Form */
		statecode: OptionSet.mspp_entityform.statecode | null;
		/** Reason for the status of the Basic Form */
		statuscode: OptionSet.mspp_entityform.statuscode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly mspp_appendquerystring: string;
			readonly mspp_associatecurrentportaluser: string;
			readonly mspp_attachfile: string;
			/** The accept attribute specifies the MIME types of files that the server accepts through file upload. To specify more than one value, separate the values with a comma (e.g. audio/*,video/*,image/*). */
			readonly mspp_attachfileaccept: string;
			/** The accept attribute specifies the extension types of files that the server accepts through file upload. To specify more than one value, separate the values with a comma (e.g. .docx,.pdf,.txt). */
			readonly mspp_attachfileacceptextensions: string;
			readonly mspp_attachfileallowmultiple: string;
			readonly mspp_attachfilelabel: string;
			readonly mspp_attachfilemaxsize: string;
			readonly mspp_attachfilerequired: string;
			readonly mspp_attachfilerequirederrormessage: string;
			readonly mspp_attachfilerestrictaccept: string;
			readonly mspp_attachfilesaveoption: string;
			readonly mspp_attachfilesizeerrormessage: string;
			readonly mspp_attachfilestoragelocation: string;
			readonly mspp_attachfiletypeerrormessage: string;
			readonly mspp_autogeneratesteps: string;
			readonly mspp_captcharequired: string;
			readonly mspp_containername: string;
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Unique identifier for entity instances */
			readonly mspp_entityformId: string;
			readonly mspp_entityname: string;
			/** Indicates whether or not the table permission provider will assert privileges. */
			readonly mspp_entitypermissionsenabled: string;
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
			readonly mspp_maximumnooffiles: string;
			readonly mspp_mode: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			readonly mspp_nextbuttoncssclass: string;
			readonly mspp_nextbuttontext: string;
			readonly mspp_onsuccess: string;
			readonly mspp_populatereferenceentitylookupfield: string;
			readonly mspp_portaluserlookupattributeisactivityparty: string;
			readonly mspp_previousbuttoncssclass: string;
			readonly mspp_previousbuttontext: string;
			readonly mspp_primarykeyname: string;
			readonly mspp_provisionedlanguages: string;
			readonly mspp_recommendedfieldsrequired: string;
			readonly mspp_recordidquerystringparametername: string;
			readonly mspp_recordnotfoundmessage: string;
			/** This flag, when set to "true," allows the user to create a record if the record doesn't already exist and the Record Source Type is "Record Associated with Current Portal User." */
			readonly mspp_recordsourceallowcreateonnull: string;
			readonly mspp_recordsourceentitylogicalname: string;
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
			readonly mspp_referencequeryattributelogicalname: string;
			readonly mspp_referencequerystringisprimarykey: string;
			readonly mspp_referencequerystringname: string;
			readonly mspp_referencerecordsourcerelationshipname: string;
			readonly mspp_referencetargetlookupattributelogicalname: string;
			readonly mspp_registerstartupscript: string;
			readonly mspp_renderwebresourcesinline: string;
			readonly mspp_setentityreference: string;
			readonly mspp_settings: string;
			readonly mspp_showcaptchaforauthenticatedusers: string;
			readonly mspp_showownerfields: string;
			readonly mspp_showunsupportedfields: string;
			readonly mspp_storageaccountname: string;
			readonly mspp_submitbuttonbusytext: string;
			readonly mspp_submitbuttoncssclass: string;
			readonly mspp_submitbuttontext: string;
			readonly mspp_successmessage: string;
			/** The name of the tab on an entity form to render. */
			readonly mspp_tabname: string;
			readonly mspp_targetentityportaluserlookupattribute: string;
			readonly mspp_tooltipenabled: string;
			readonly mspp_validationgroup: string;
			readonly mspp_validationsummarycssclass: string;
			readonly mspp_validationsummaryheadertext: string;
			readonly mspp_validationsummarylinksenabled: string;
			readonly mspp_validationsummarylinktext: string;
			/** Unique identifier for Website entity associated with this record. */
			readonly mspp_websiteid: string;
			/** Status of the Basic Form */
			readonly statecode: string;
			/** Reason for the status of the Basic Form */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_entityform {
		enum mspp_attachfilesaveoption {
			/** Notes = 756150000*/
			Notes = 756150000,
			/** Portal_Comment = 756150001*/
			Portal_Comment = 756150001
		}
		enum mspp_attachfilestoragelocation {
			/** Azure_Blob_Storage = 756150001*/
			Azure_Blob_Storage = 756150001,
			/** Note_Attachment = 756150000*/
			Note_Attachment = 756150000
		}
		enum mspp_entitysourcetype {
			/** Current_Portal_User = 756150002*/
			Current_Portal_User = 756150002,
			/** Query_String = 756150001*/
			Query_String = 756150001,
			/** Record_Associated_to_Current_Portal_User = 756150003*/
			Record_Associated_to_Current_Portal_User = 756150003
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
		enum mspp_onsuccess {
			/** Display_Success_Message = 756150000*/
			Display_Success_Message = 756150000,
			/** Redirect = 756150001*/
			Redirect = 756150001
		}
		enum mspp_referenceentitysourcetype {
			/** Query_String = 756150000*/
			Query_String = 756150000,
			/** Record_Associated_to_Current_Portal_User = 756150001*/
			Record_Associated_to_Current_Portal_User = 756150001
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
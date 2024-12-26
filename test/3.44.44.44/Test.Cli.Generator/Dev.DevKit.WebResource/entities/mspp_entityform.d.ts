//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_entityform_Information {
		interface tab_tab_additionalsettings_Sections {
			mspp_entityform_javascript_monacoEditor_text_section: DevKit.Controls.Section;
			section_customjavascript: DevKit.Controls.Section;
			section_geolocation: DevKit.Controls.Section;
			section_settings: DevKit.Controls.Section;
			tab_4_section_1: DevKit.Controls.Section;
			tab_additionalsettings_section_2: DevKit.Controls.Section;
			tab_formoptions_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_entityformmetadata_Sections {
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_entityreference_Sections {
			section_entity_reference_details: DevKit.Controls.Section;
			section_entity_reference_readonly: DevKit.Controls.Section;
			section_entity_reference_source: DevKit.Controls.Section;
			section_entity_source_query_string: DevKit.Controls.Section;
			section_reference_entity_source_relationship: DevKit.Controls.Section;
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_formoptions_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_formoptions_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_onsuccess_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_onsuccess_section_2: DevKit.Controls.Section;
			tab_onsuccess_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_additionalsettings extends DevKit.Controls.ITab {
			Section: tab_tab_additionalsettings_Sections;
		}
		interface tab_tab_entityformmetadata extends DevKit.Controls.ITab {
			Section: tab_tab_entityformmetadata_Sections;
		}
		interface tab_tab_entityreference extends DevKit.Controls.ITab {
			Section: tab_tab_entityreference_Sections;
		}
		interface tab_tab_formoptions extends DevKit.Controls.ITab {
			Section: tab_tab_formoptions_Sections;
		}
		interface tab_tab_onsuccess extends DevKit.Controls.ITab {
			Section: tab_tab_onsuccess_Sections;
		}
		interface Tabs {
			tab_additionalsettings: tab_tab_additionalsettings;
			tab_entityformmetadata: tab_tab_entityformmetadata;
			tab_entityreference: tab_tab_entityreference;
			tab_formoptions: tab_tab_formoptions;
			tab_onsuccess: tab_tab_onsuccess;
		}
		interface Body {
			Tab: Tabs;
			mspp_appendquerystring: DevKit.Controls.Boolean;
			mspp_associatecurrentportaluser: DevKit.Controls.Boolean;
			mspp_attachfile: DevKit.Controls.Boolean;
			/** The accept attribute specifies the MIME types of files that the server accepts through file upload. To specify more than one value, separate the values with a comma (e.g. audio/*,video/*,image/*). */
			mspp_attachfileaccept: DevKit.Controls.String;
			/** The accept attribute specifies the extension types of files that the server accepts through file upload. To specify more than one value, separate the values with a comma (e.g. .docx,.pdf,.txt). */
			mspp_attachfileacceptextensions: DevKit.Controls.String;
			mspp_attachfileallowmultiple: DevKit.Controls.Boolean;
			mspp_attachfilelabel: DevKit.Controls.String;
			mspp_attachfilemaxsize: DevKit.Controls.Integer;
			mspp_attachfilerequired: DevKit.Controls.Boolean;
			mspp_attachfilerequirederrormessage: DevKit.Controls.String;
			mspp_attachfilerestrictaccept: DevKit.Controls.Boolean;
			mspp_attachfilesaveoption: DevKit.Controls.OptionSet;
			mspp_attachfilesizeerrormessage: DevKit.Controls.String;
			mspp_attachfilestoragelocation: DevKit.Controls.OptionSet;
			mspp_attachfiletypeerrormessage: DevKit.Controls.String;
			mspp_autogeneratesteps: DevKit.Controls.Boolean;
			mspp_captcharequired: DevKit.Controls.Boolean;
			mspp_entityname: DevKit.Controls.String;
			/** Indicates whether or not the table permission provider will assert privileges. */
			mspp_entitypermissionsenabled: DevKit.Controls.Boolean;
			mspp_entitysourcetype: DevKit.Controls.OptionSet;
			mspp_forceallfieldsrequired: DevKit.Controls.Boolean;
			/** Shows the name of the entity form to render. */
			mspp_formname: DevKit.Controls.String;
			mspp_geolocation_addresslinefieldname: DevKit.Controls.String;
			mspp_geolocation_cityfieldname: DevKit.Controls.String;
			mspp_geolocation_countryfieldname: DevKit.Controls.String;
			mspp_geolocation_countyfieldname: DevKit.Controls.String;
			mspp_geolocation_displaymap: DevKit.Controls.Boolean;
			mspp_geolocation_enabled: DevKit.Controls.Boolean;
			mspp_geolocation_formattedaddressfieldname: DevKit.Controls.String;
			mspp_geolocation_latitudefieldname: DevKit.Controls.String;
			mspp_geolocation_longitudefieldname: DevKit.Controls.String;
			mspp_geolocation_neighborhoodfieldname: DevKit.Controls.String;
			mspp_geolocation_postalcodefieldname: DevKit.Controls.String;
			mspp_geolocation_statefieldname: DevKit.Controls.String;
			mspp_hideformonsuccess: DevKit.Controls.Boolean;
			mspp_instructions: DevKit.Controls.String;
			mspp_mode: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			mspp_nextbuttoncssclass: DevKit.Controls.String;
			mspp_nextbuttontext: DevKit.Controls.String;
			mspp_onsuccess: DevKit.Controls.OptionSet;
			mspp_populatereferenceentitylookupfield: DevKit.Controls.Boolean;
			mspp_portaluserlookupattributeisactivityparty: DevKit.Controls.Boolean;
			mspp_previousbuttoncssclass: DevKit.Controls.String;
			mspp_previousbuttontext: DevKit.Controls.String;
			mspp_primarykeyname: DevKit.Controls.String;
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			mspp_recommendedfieldsrequired: DevKit.Controls.Boolean;
			mspp_recordidquerystringparametername: DevKit.Controls.String;
			mspp_recordnotfoundmessage: DevKit.Controls.String;
			/** This flag, when set to "true," allows the user to create a record if the record doesn't already exist and the Record Source Type is "Record Associated with Current Portal User." */
			mspp_recordsourceallowcreateonnull: DevKit.Controls.Boolean;
			mspp_recordsourcerelationshipname: DevKit.Controls.String;
			/** Shows the URL to redirect to. */
			mspp_redirecturl: DevKit.Controls.String;
			mspp_redirecturlappendentityidquerystring: DevKit.Controls.Boolean;
			mspp_redirecturlcustomquerystring: DevKit.Controls.String;
			/** Add an attribute value as a query string value by specifying the logical name of the attribute to assign its value to the query string. */
			mspp_redirecturlquerystringattribute: DevKit.Controls.String;
			mspp_redirecturlquerystringattributeparamname: DevKit.Controls.String;
			/** The url to redirect to is dynamically retrieved from the query string using this parameter name */
			mspp_redirecturlquerystringname: DevKit.Controls.String;
			/** Web Page to redirect to. */
			mspp_redirectwebpage: DevKit.Controls.Lookup;
			mspp_referenceentitylogicalname: DevKit.Controls.String;
			mspp_referenceentityreadonlyformname: DevKit.Controls.String;
			mspp_referenceentityrelationshipname: DevKit.Controls.String;
			mspp_referenceentityshowreadonlyform: DevKit.Controls.Boolean;
			mspp_referenceentitysourcetype: DevKit.Controls.OptionSet;
			mspp_referencequeryattributelogicalname: DevKit.Controls.String;
			mspp_referencequerystringisprimarykey: DevKit.Controls.Boolean;
			mspp_referencequerystringname: DevKit.Controls.String;
			mspp_referencerecordsourcerelationshipname: DevKit.Controls.String;
			mspp_referencetargetlookupattributelogicalname: DevKit.Controls.String;
			mspp_registerstartupscript: DevKit.Controls.String;
			mspp_registerstartupscript1: DevKit.Controls.String;
			mspp_renderwebresourcesinline: DevKit.Controls.Boolean;
			mspp_setentityreference: DevKit.Controls.Boolean;
			mspp_settings: DevKit.Controls.String;
			mspp_showcaptchaforauthenticatedusers: DevKit.Controls.Boolean;
			mspp_showownerfields: DevKit.Controls.Boolean;
			mspp_showunsupportedfields: DevKit.Controls.Boolean;
			mspp_submitbuttonbusytext: DevKit.Controls.String;
			mspp_submitbuttoncssclass: DevKit.Controls.String;
			mspp_submitbuttontext: DevKit.Controls.String;
			mspp_successmessage: DevKit.Controls.String;
			/** The name of the tab on an entity form to render. */
			mspp_tabname: DevKit.Controls.String;
			mspp_targetentityportaluserlookupattribute: DevKit.Controls.String;
			mspp_tooltipenabled: DevKit.Controls.Boolean;
			mspp_validationgroup: DevKit.Controls.String;
			mspp_validationsummarycssclass: DevKit.Controls.String;
			mspp_validationsummaryheadertext: DevKit.Controls.String;
			mspp_validationsummarylinksenabled: DevKit.Controls.Boolean;
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
		interface Navigation {
			mspp_entityform_entityformmetadata_entityformforcreate: DevKit.Controls.NavigationItem,
			mspp_entityform_webformmetadata_entityformforcreate: DevKit.Controls.NavigationItem,
			mspp_entityformmetadata_entityform: DevKit.Controls.NavigationItem,
			mspp_webpage_entityform: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_entityformmetadata: DevKit.Controls.Grid;
		}
	}
	class Formmspp_entityform_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_entityform_Information */
		Body: DevKit.Formmspp_entityform_Information.Body;
		/** The Navigation of form mspp_entityform_Information */
		Navigation: DevKit.Formmspp_entityform_Information.Navigation;
		/** The Grid of form mspp_entityform_Information */
		Grid: DevKit.Formmspp_entityform_Information.Grid;
		/** The SidePanes of form mspp_entityform_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_entityformApi {
		/**
		* DynamicsCrm.DevKit mspp_entityformApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		mspp_appendquerystring: boolean;
		mspp_associatecurrentportaluser: boolean;
		mspp_attachfile: boolean;
		/** The accept attribute specifies the MIME types of files that the server accepts through file upload. To specify more than one value, separate the values with a comma (e.g. audio/*,video/*,image/*). */
		mspp_attachfileaccept: string;
		/** The accept attribute specifies the extension types of files that the server accepts through file upload. To specify more than one value, separate the values with a comma (e.g. .docx,.pdf,.txt). */
		mspp_attachfileacceptextensions: string;
		mspp_attachfileallowmultiple: boolean;
		mspp_attachfilelabel: string;
		mspp_attachfilemaxsize: number;
		mspp_attachfilerequired: boolean;
		mspp_attachfilerequirederrormessage: string;
		mspp_attachfilerestrictaccept: boolean;
		mspp_attachfilesaveoption: OptionSet.mspp_entityform.mspp_attachfilesaveoption;
		mspp_attachfilesizeerrormessage: string;
		mspp_attachfilestoragelocation: OptionSet.mspp_entityform.mspp_attachfilestoragelocation;
		mspp_attachfiletypeerrormessage: string;
		mspp_autogeneratesteps: boolean;
		mspp_captcharequired: boolean;
		mspp_containername: string;
		/** Shows who created the record. */
		mspp_createdby: string;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date;
		/** Unique identifier for entity instances */
		mspp_entityformId: string;
		mspp_entityname: string;
		/** Indicates whether or not the table permission provider will assert privileges. */
		mspp_entitypermissionsenabled: boolean;
		mspp_entitysourcetype: OptionSet.mspp_entityform.mspp_entitysourcetype;
		mspp_forceallfieldsrequired: boolean;
		/** Shows the name of the entity form to render. */
		mspp_formname: string;
		mspp_geolocation_addresslinefieldname: string;
		mspp_geolocation_cityfieldname: string;
		mspp_geolocation_countryfieldname: string;
		mspp_geolocation_countyfieldname: string;
		mspp_geolocation_displaymap: boolean;
		mspp_geolocation_enabled: boolean;
		mspp_geolocation_formattedaddressfieldname: string;
		mspp_geolocation_latitudefieldname: string;
		mspp_geolocation_longitudefieldname: string;
		mspp_geolocation_maptype: OptionSet.mspp_entityform.mspp_geolocation_maptype;
		mspp_geolocation_neighborhoodfieldname: string;
		mspp_geolocation_postalcodefieldname: string;
		mspp_geolocation_statefieldname: string;
		mspp_hideformonsuccess: boolean;
		mspp_instructions: string;
		mspp_maximumnooffiles: number;
		mspp_mode: OptionSet.mspp_entityform.mspp_mode;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		mspp_name: string;
		mspp_nextbuttoncssclass: string;
		mspp_nextbuttontext: string;
		mspp_onsuccess: OptionSet.mspp_entityform.mspp_onsuccess;
		mspp_populatereferenceentitylookupfield: boolean;
		mspp_portaluserlookupattributeisactivityparty: boolean;
		mspp_previousbuttoncssclass: string;
		mspp_previousbuttontext: string;
		mspp_primarykeyname: string;
		mspp_provisionedlanguages: number;
		mspp_recommendedfieldsrequired: boolean;
		mspp_recordidquerystringparametername: string;
		mspp_recordnotfoundmessage: string;
		/** This flag, when set to "true," allows the user to create a record if the record doesn't already exist and the Record Source Type is "Record Associated with Current Portal User." */
		mspp_recordsourceallowcreateonnull: boolean;
		mspp_recordsourceentitylogicalname: string;
		mspp_recordsourcerelationshipname: string;
		/** Shows the URL to redirect to. */
		mspp_redirecturl: string;
		mspp_redirecturlappendentityidquerystring: boolean;
		mspp_redirecturlcustomquerystring: string;
		/** Add an attribute value as a query string value by specifying the logical name of the attribute to assign its value to the query string. */
		mspp_redirecturlquerystringattribute: string;
		mspp_redirecturlquerystringattributeparamname: string;
		/** The url to redirect to is dynamically retrieved from the query string using this parameter name */
		mspp_redirecturlquerystringname: string;
		/** Web Page to redirect to. */
		mspp_redirectwebpage: string;
		mspp_referenceentitylogicalname: string;
		mspp_referenceentityprimarykeylogicalname: string;
		mspp_referenceentityreadonlyformname: string;
		mspp_referenceentityrelationshipname: string;
		mspp_referenceentityshowreadonlyform: boolean;
		mspp_referenceentitysourcetype: OptionSet.mspp_entityform.mspp_referenceentitysourcetype;
		mspp_referencequeryattributelogicalname: string;
		mspp_referencequerystringisprimarykey: boolean;
		mspp_referencequerystringname: string;
		mspp_referencerecordsourcerelationshipname: string;
		mspp_referencetargetlookupattributelogicalname: string;
		mspp_registerstartupscript: string;
		mspp_renderwebresourcesinline: boolean;
		mspp_setentityreference: boolean;
		mspp_settings: string;
		mspp_showcaptchaforauthenticatedusers: boolean;
		mspp_showownerfields: boolean;
		mspp_showunsupportedfields: boolean;
		mspp_storageaccountname: string;
		mspp_submitbuttonbusytext: string;
		mspp_submitbuttoncssclass: string;
		mspp_submitbuttontext: string;
		mspp_successmessage: string;
		/** The name of the tab on an entity form to render. */
		mspp_tabname: string;
		mspp_targetentityportaluserlookupattribute: string;
		mspp_tooltipenabled: boolean;
		mspp_validationgroup: string;
		mspp_validationsummarycssclass: string;
		mspp_validationsummaryheadertext: string;
		mspp_validationsummarylinksenabled: boolean;
		mspp_validationsummarylinktext: string;
		/** Unique identifier for Website entity associated with this record. */
		mspp_websiteid: string;
		/** Status of the Basic Form */
		statecode: OptionSet.mspp_entityform.statecode;
		/** Reason for the status of the Basic Form */
		statuscode: OptionSet.mspp_entityform.statuscode;
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
			/** 756150000 */
			Notes,
			/** 756150001 */
			Portal_Comment
		}
		enum mspp_attachfilestoragelocation {
			/** 756150001 */
			Azure_Blob_Storage,
			/** 756150000 */
			Note_Attachment
		}
		enum mspp_entitysourcetype {
			/** 756150002 */
			Current_Portal_User,
			/** 756150001 */
			Query_String,
			/** 756150003 */
			Record_Associated_to_Current_Portal_User
		}
		enum mspp_geolocation_maptype {
			/** 756150000 */
			Bing,
			/** 756150002 */
			Esri,
			/** 756150001 */
			Google
		}
		enum mspp_mode {
			/** 100000001 */
			Edit,
			/** 100000000 */
			Insert,
			/** 100000002 */
			ReadOnly
		}
		enum mspp_onsuccess {
			/** 756150000 */
			Display_Success_Message,
			/** 756150001 */
			Redirect
		}
		enum mspp_referenceentitysourcetype {
			/** 756150000 */
			Query_String,
			/** 756150001 */
			Record_Associated_to_Current_Portal_User
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
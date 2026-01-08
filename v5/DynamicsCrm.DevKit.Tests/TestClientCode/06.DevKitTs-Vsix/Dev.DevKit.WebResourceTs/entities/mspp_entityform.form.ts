/**
 * mspp_entityform.form.ts - mspp_entityform Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_entityform containing form classes: mspp_entityform.FormClassName
 * 3. Aggregate Form class: mspp_entityform.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_entityform {

	// ========================================================================
	// Form: mspp_entityform_Information
	// ========================================================================

	export namespace mspp_entityform_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
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
			mspp_instructions: DevKit.Controls.Memo;
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
			mspp_recordnotfoundmessage: DevKit.Controls.Memo;
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
			mspp_registerstartupscript: DevKit.Controls.Memo;
			/** Custom JavaScript */
			mspp_registerstartupscript1: DevKit.Controls.Memo;
			/** Render Web Resources Inline */
			mspp_renderwebresourcesinline: DevKit.Controls.Boolean;
			/** Set Table Reference */
			mspp_setentityreference: DevKit.Controls.Boolean;
			/** Settings */
			mspp_settings: DevKit.Controls.Memo;
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
			mspp_successmessage: DevKit.Controls.Memo;
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
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface Itab_additionalsettingsTabSections {
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

		export interface Itab_entityformmetadataTabSections {
			/** Section */
			tab_5_section_1: DevKit.Controls.Section;
		}

		export interface Itab_entityreferenceTabSections {
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

		export interface Itab_formoptionsTabSections {
			/** Section */
			tab_2_section_1: DevKit.Controls.Section;
			/** Additional Settings */
			tab_formoptions_section_2: DevKit.Controls.Section;
		}

		export interface Itab_onsuccessTabSections {
			/** Section */
			tab_3_section_1: DevKit.Controls.Section;
			/** Display Success Message */
			tab_onsuccess_section_2: DevKit.Controls.Section;
			/** Redirect */
			tab_onsuccess_section_3: DevKit.Controls.Section;
		}

		/** Additional Settings */
		export interface Itab_additionalsettingsTab extends DevKit.Controls.ITab {
			Section: Itab_additionalsettingsTabSections;
		}

		/** Basic Form Metadata */
		export interface Itab_entityformmetadataTab extends DevKit.Controls.ITab {
			Section: Itab_entityformmetadataTabSections;
		}

		/** Associated Table Reference */
		export interface Itab_entityreferenceTab extends DevKit.Controls.ITab {
			Section: Itab_entityreferenceTabSections;
		}

		/** Form Options */
		export interface Itab_formoptionsTab extends DevKit.Controls.ITab {
			Section: Itab_formoptionsTabSections;
		}

		/** On Success Settings */
		export interface Itab_onsuccessTab extends DevKit.Controls.ITab {
			Section: Itab_onsuccessTabSections;
		}

		export interface ITabs {
			/** Additional Settings */
			tab_additionalsettings: Itab_additionalsettingsTab;
			/** Basic Form Metadata */
			tab_entityformmetadata: Itab_entityformmetadataTab;
			/** Associated Table Reference */
			tab_entityreference: Itab_entityreferenceTab;
			/** Form Options */
			tab_formoptions: Itab_formoptionsTab;
			/** On Success Settings */
			tab_onsuccess: Itab_onsuccessTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Basic Form Metadata (Basic Form) */
			grid_entityformmetadata: DevKit.Controls.Grid;
		}

		/**
		 * Navigation interface
		 * Contains navigation items
		 */
		export interface INavigation {
		}

		/**
		 * QuickForm interface
		 * Contains quick view form controls
		 */
		export interface IQuickForm {
		}

		/**
		 * Process interface
		 * Contains business process flow definitions
		 */
		export interface IProcess extends DevKit.Controls.IProcess {
		}

		/**
		 * Dialog interface
		 * For quick create dialogs or other dialog forms
		 */
		export interface IDialog extends DevKit.IDialog {
		}
	}

	/**
	 * mspp_entityform_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_entityform.mspp_entityform_Information(executionContext)
	 */
	export class mspp_entityform_Information extends FormBase<mspp_entityform_Information.IBody, mspp_entityform_Information.IHeader, mspp_entityform_Information.IGrid, mspp_entityform_Information.INavigation, mspp_entityform_Information.IQuickForm, mspp_entityform_Information.IProcess, mspp_entityform_Information.IDialog> {
		/**
		 * Creates a mspp_entityform_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_appendquerystring', 'mspp_associatecurrentportaluser', 'mspp_attachfile', 'mspp_attachfileaccept', 'mspp_attachfileacceptextensions', 'mspp_attachfileallowmultiple', 'mspp_attachfilelabel', 'mspp_attachfilemaxsize', 'mspp_attachfilerequired', 'mspp_attachfilerequirederrormessage', 'mspp_attachfilerestrictaccept', 'mspp_attachfilesaveoption', 'mspp_attachfilesizeerrormessage', 'mspp_attachfilestoragelocation', 'mspp_attachfiletypeerrormessage', 'mspp_autogeneratesteps', 'mspp_captcharequired', 'mspp_entityname', 'mspp_entitypermissionsenabled', 'mspp_entitysourcetype', 'mspp_forceallfieldsrequired', 'mspp_formname', 'mspp_geolocation_addresslinefieldname', 'mspp_geolocation_cityfieldname', 'mspp_geolocation_countryfieldname', 'mspp_geolocation_countyfieldname', 'mspp_geolocation_displaymap', 'mspp_geolocation_enabled', 'mspp_geolocation_formattedaddressfieldname', 'mspp_geolocation_latitudefieldname', 'mspp_geolocation_longitudefieldname', 'mspp_geolocation_neighborhoodfieldname', 'mspp_geolocation_postalcodefieldname', 'mspp_geolocation_statefieldname', 'mspp_hideformonsuccess', 'mspp_instructions', 'mspp_mode', 'mspp_name', 'mspp_nextbuttoncssclass', 'mspp_nextbuttontext', 'mspp_onsuccess', 'mspp_populatereferenceentitylookupfield', 'mspp_portaluserlookupattributeisactivityparty', 'mspp_previousbuttoncssclass', 'mspp_previousbuttontext', 'mspp_primarykeyname', 'mspp_provisionedlanguages', 'mspp_recommendedfieldsrequired', 'mspp_recordidquerystringparametername', 'mspp_recordnotfoundmessage', 'mspp_recordsourceallowcreateonnull', 'mspp_recordsourcerelationshipname', 'mspp_redirecturl', 'mspp_redirecturlappendentityidquerystring', 'mspp_redirecturlcustomquerystring', 'mspp_redirecturlquerystringattribute', 'mspp_redirecturlquerystringattributeparamname', 'mspp_redirecturlquerystringname', 'mspp_redirectwebpage', 'mspp_referenceentitylogicalname', 'mspp_referenceentityreadonlyformname', 'mspp_referenceentityrelationshipname', 'mspp_referenceentityshowreadonlyform', 'mspp_referenceentitysourcetype', 'mspp_referencequeryattributelogicalname', 'mspp_referencequerystringisprimarykey', 'mspp_referencequerystringname', 'mspp_referencerecordsourcerelationshipname', 'mspp_referencetargetlookupattributelogicalname', 'mspp_registerstartupscript', 'mspp_registerstartupscript1', 'mspp_renderwebresourcesinline', 'mspp_setentityreference', 'mspp_settings', 'mspp_showcaptchaforauthenticatedusers', 'mspp_showownerfields', 'mspp_showunsupportedfields', 'mspp_submitbuttonbusytext', 'mspp_submitbuttoncssclass', 'mspp_submitbuttontext', 'mspp_successmessage', 'mspp_tabname', 'mspp_targetentityportaluserlookupattribute', 'mspp_tooltipenabled', 'mspp_validationgroup', 'mspp_validationsummarycssclass', 'mspp_validationsummaryheadertext', 'mspp_validationsummarylinksenabled', 'mspp_validationsummarylinktext', 'mspp_websiteid', 'WebResource_entityreferencequerystringattributeselector', 'WebResource_entityreferencereadonlyformselector', 'WebResource_geolocation_addresslinefieldnameselector', 'WebResource_geolocationcityfieldnameselector', 'WebResource_geolocationcountryfieldnameselector', 'WebResource_geolocationcountyfieldnameselector', 'WebResource_geolocationformattedaddressfieldnameselector', 'WebResource_geolocationlatitudefieldnameselector', 'WebResource_geolocationlongitudefieldnameselector', 'WebResource_geolocationneighborhoodfieldnameselector', 'WebResource_geolocationpostalcodefieldnameselector', 'WebResource_geolocationstatefieldnameselector', 'WebResource_instructions', 'WebResource_localize_attachfilelabel', 'WebResource_localize_attachfilerequirederrormessage', 'WebResource_localize_attachfiletypeerrormessage', 'WebResource_localize_attachmentfilesizeerrormessage', 'WebResource_localized_recordnotfoundmessage', 'WebResource_lookupattributeselector', 'WebResource_mspp_entityname', 'WebResource_mspp_formname', 'WebResource_mspp_recordsourcerelationshipname', 'WebResource_mspp_referenceentityrelationshipname_selector', 'WebResource_mspp_referencerecordsourcerelationshipname', 'WebResource_mspp_settings', 'WebResource_mspp_tabname', 'WebResource_mspp_validationsummaryheadertext', 'WebResource_referenceentityselector', 'WebResource_targetlookupportaluserselector'],
				header: [],
				tab: ['tab_additionalsettings___mspp_entityform_javascript_monacoEditor_text_section', 'tab_additionalsettings___section_customjavascript', 'tab_additionalsettings___section_geolocation', 'tab_additionalsettings___section_settings', 'tab_additionalsettings___tab_4_section_1', 'tab_additionalsettings___tab_additionalsettings_section_2', 'tab_additionalsettings___tab_formoptions_section_3', 'tab_entityformmetadata___tab_5_section_1', 'tab_entityreference___section_entity_reference_details', 'tab_entityreference___section_entity_reference_readonly', 'tab_entityreference___section_entity_reference_source', 'tab_entityreference___section_entity_source_query_string', 'tab_entityreference___section_reference_entity_source_relationship', 'tab_entityreference___tab_6_section_1', 'tab_formoptions___tab_2_section_1', 'tab_formoptions___tab_formoptions_section_2', 'tab_onsuccess___tab_3_section_1', 'tab_onsuccess___tab_onsuccess_section_2', 'tab_onsuccess___tab_onsuccess_section_3'],
				grid: ['grid_entityformmetadata'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Aggregate Form: Form (contains all fields from all forms)
	// ========================================================================

	export namespace AllInOne {

		/**
		 * Aggregate Body controls interface
		 * Contains all controls from all forms on the entity
		 */
		export interface IBody {
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
			mspp_instructions: DevKit.Controls.Memo;
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
			mspp_recordnotfoundmessage: DevKit.Controls.Memo;
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
			mspp_registerstartupscript: DevKit.Controls.Memo;
			/** Custom JavaScript */
			mspp_registerstartupscript1: DevKit.Controls.Memo;
			/** Render Web Resources Inline */
			mspp_renderwebresourcesinline: DevKit.Controls.Boolean;
			/** Set Table Reference */
			mspp_setentityreference: DevKit.Controls.Boolean;
			/** Settings */
			mspp_settings: DevKit.Controls.Memo;
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
			mspp_successmessage: DevKit.Controls.Memo;
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

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		/**
		 * Aggregate Grid controls interface
		 */
		export interface IGrid {
			/** Basic Form Metadata (Basic Form) */
			grid_entityformmetadata: DevKit.Controls.Grid;
		}

		/**
		 * Aggregate Navigation interface
		 */
		export interface INavigation {
		}

		/**
		 * Aggregate QuickForm interface
		 */
		export interface IQuickForm {
		}

		/**
		 * Aggregate Process interface
		 */
		export interface IProcess extends DevKit.Controls.IProcess {
		}

	}

	/**
	 * Aggregate Form class
	 * Contains all fields from all forms - useful when form type is unknown at compile time
	 * Usage: new mspp_entityform.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_entityform Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_appendquerystring', 'mspp_associatecurrentportaluser', 'mspp_attachfile', 'mspp_attachfileaccept', 'mspp_attachfileacceptextensions', 'mspp_attachfileallowmultiple', 'mspp_attachfilelabel', 'mspp_attachfilemaxsize', 'mspp_attachfilerequired', 'mspp_attachfilerequirederrormessage', 'mspp_attachfilerestrictaccept', 'mspp_attachfilesaveoption', 'mspp_attachfilesizeerrormessage', 'mspp_attachfilestoragelocation', 'mspp_attachfiletypeerrormessage', 'mspp_autogeneratesteps', 'mspp_captcharequired', 'mspp_entityname', 'mspp_entitypermissionsenabled', 'mspp_entitysourcetype', 'mspp_forceallfieldsrequired', 'mspp_formname', 'mspp_geolocation_addresslinefieldname', 'mspp_geolocation_cityfieldname', 'mspp_geolocation_countryfieldname', 'mspp_geolocation_countyfieldname', 'mspp_geolocation_displaymap', 'mspp_geolocation_enabled', 'mspp_geolocation_formattedaddressfieldname', 'mspp_geolocation_latitudefieldname', 'mspp_geolocation_longitudefieldname', 'mspp_geolocation_neighborhoodfieldname', 'mspp_geolocation_postalcodefieldname', 'mspp_geolocation_statefieldname', 'mspp_hideformonsuccess', 'mspp_instructions', 'mspp_mode', 'mspp_name', 'mspp_nextbuttoncssclass', 'mspp_nextbuttontext', 'mspp_onsuccess', 'mspp_populatereferenceentitylookupfield', 'mspp_portaluserlookupattributeisactivityparty', 'mspp_previousbuttoncssclass', 'mspp_previousbuttontext', 'mspp_primarykeyname', 'mspp_provisionedlanguages', 'mspp_recommendedfieldsrequired', 'mspp_recordidquerystringparametername', 'mspp_recordnotfoundmessage', 'mspp_recordsourceallowcreateonnull', 'mspp_recordsourcerelationshipname', 'mspp_redirecturl', 'mspp_redirecturlappendentityidquerystring', 'mspp_redirecturlcustomquerystring', 'mspp_redirecturlquerystringattribute', 'mspp_redirecturlquerystringattributeparamname', 'mspp_redirecturlquerystringname', 'mspp_redirectwebpage', 'mspp_referenceentitylogicalname', 'mspp_referenceentityreadonlyformname', 'mspp_referenceentityrelationshipname', 'mspp_referenceentityshowreadonlyform', 'mspp_referenceentitysourcetype', 'mspp_referencequeryattributelogicalname', 'mspp_referencequerystringisprimarykey', 'mspp_referencequerystringname', 'mspp_referencerecordsourcerelationshipname', 'mspp_referencetargetlookupattributelogicalname', 'mspp_registerstartupscript', 'mspp_registerstartupscript1', 'mspp_renderwebresourcesinline', 'mspp_setentityreference', 'mspp_settings', 'mspp_showcaptchaforauthenticatedusers', 'mspp_showownerfields', 'mspp_showunsupportedfields', 'mspp_submitbuttonbusytext', 'mspp_submitbuttoncssclass', 'mspp_submitbuttontext', 'mspp_successmessage', 'mspp_tabname', 'mspp_targetentityportaluserlookupattribute', 'mspp_tooltipenabled', 'mspp_validationgroup', 'mspp_validationsummarycssclass', 'mspp_validationsummaryheadertext', 'mspp_validationsummarylinksenabled', 'mspp_validationsummarylinktext', 'mspp_websiteid', 'WebResource_entityreferencequerystringattributeselector', 'WebResource_entityreferencereadonlyformselector', 'WebResource_geolocation_addresslinefieldnameselector', 'WebResource_geolocationcityfieldnameselector', 'WebResource_geolocationcountryfieldnameselector', 'WebResource_geolocationcountyfieldnameselector', 'WebResource_geolocationformattedaddressfieldnameselector', 'WebResource_geolocationlatitudefieldnameselector', 'WebResource_geolocationlongitudefieldnameselector', 'WebResource_geolocationneighborhoodfieldnameselector', 'WebResource_geolocationpostalcodefieldnameselector', 'WebResource_geolocationstatefieldnameselector', 'WebResource_instructions', 'WebResource_localize_attachfilelabel', 'WebResource_localize_attachfilerequirederrormessage', 'WebResource_localize_attachfiletypeerrormessage', 'WebResource_localize_attachmentfilesizeerrormessage', 'WebResource_localized_recordnotfoundmessage', 'WebResource_lookupattributeselector', 'WebResource_mspp_entityname', 'WebResource_mspp_formname', 'WebResource_mspp_recordsourcerelationshipname', 'WebResource_mspp_referenceentityrelationshipname_selector', 'WebResource_mspp_referencerecordsourcerelationshipname', 'WebResource_mspp_settings', 'WebResource_mspp_tabname', 'WebResource_mspp_validationsummaryheadertext', 'WebResource_referenceentityselector', 'WebResource_targetlookupportaluserselector'],
				header: [],
				tab: ['tab_additionalsettings___mspp_entityform_javascript_monacoEditor_text_section', 'tab_additionalsettings___section_customjavascript', 'tab_additionalsettings___section_geolocation', 'tab_additionalsettings___section_settings', 'tab_additionalsettings___tab_4_section_1', 'tab_additionalsettings___tab_additionalsettings_section_2', 'tab_additionalsettings___tab_formoptions_section_3', 'tab_entityformmetadata___tab_5_section_1', 'tab_entityreference___section_entity_reference_details', 'tab_entityreference___section_entity_reference_readonly', 'tab_entityreference___section_entity_reference_source', 'tab_entityreference___section_entity_source_query_string', 'tab_entityreference___section_reference_entity_source_relationship', 'tab_entityreference___tab_6_section_1', 'tab_formoptions___tab_2_section_1', 'tab_formoptions___tab_formoptions_section_2', 'tab_onsuccess___tab_3_section_1', 'tab_onsuccess___tab_onsuccess_section_2', 'tab_onsuccess___tab_onsuccess_section_3'],
				grid: ['grid_entityformmetadata'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

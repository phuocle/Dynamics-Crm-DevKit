/**
 * mspp_webformstep.form.ts - mspp_webformstep Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_webformstep containing form classes: mspp_webformstep.FormClassName
 * 3. Aggregate Form class: mspp_webformstep.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_webformstep {

	// ========================================================================
	// Form: mspp_webformstep_Information
	// ========================================================================

	export namespace mspp_webformstep_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
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
			mspp_instructions: DevKit.Controls.Memo;
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
			mspp_recordnotfoundmessage: DevKit.Controls.Memo;
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
			mspp_registerstartupscript: DevKit.Controls.Memo;
			/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
			mspp_registerstartupscript1: DevKit.Controls.Memo;
			/** Render Web Resources Inline */
			mspp_renderwebresourcesinline: DevKit.Controls.Boolean;
			/** Saved Event Key Name */
			mspp_savedeventkeyname: DevKit.Controls.String;
			/** Saving Event Key Name */
			mspp_savingeventkeyname: DevKit.Controls.String;
			/** Set Table Reference */
			mspp_setentityreference: DevKit.Controls.Boolean;
			/** Settings */
			mspp_settings: DevKit.Controls.Memo;
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
			mspp_successmessage: DevKit.Controls.Memo;
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
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface Itab_10TabSections {
			/** Section */
			tab_10_section_2: DevKit.Controls.Section;
		}

		export interface Itab_additional_functionalityTabSections {
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

		export interface Itab_conditionTabSections {
			/** Section */
			tab_5_section_1: DevKit.Controls.Section;
		}

		export interface Itab_entity_referenceTabSections {
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

		export interface Itab_formTabSections {
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

		export interface Itab_form_optionsTabSections {
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

		export interface Itab_redirectTabSections {
			/** Section */
			tab_4_section_1: DevKit.Controls.Section;
			/** Append an attribute's value to the Query String */
			tab_redirect_section_2: DevKit.Controls.Section;
		}

		export interface Itab_usercontrolTabSections {
			/** Section */
			tab_8_section_2: DevKit.Controls.Section;
		}

		/** Developer Extensions */
		export interface Itab_10Tab extends DevKit.Controls.ITab {
			Section: Itab_10TabSections;
		}

		/** Additional Functionality */
		export interface Itab_additional_functionalityTab extends DevKit.Controls.ITab {
			Section: Itab_additional_functionalityTabSections;
		}

		/** Condition */
		export interface Itab_conditionTab extends DevKit.Controls.ITab {
			Section: Itab_conditionTabSections;
		}

		/** Associated Table Reference */
		export interface Itab_entity_referenceTab extends DevKit.Controls.ITab {
			Section: Itab_entity_referenceTabSections;
		}

		/** Form Definition */
		export interface Itab_formTab extends DevKit.Controls.ITab {
			Section: Itab_formTabSections;
		}

		/** Form Options */
		export interface Itab_form_optionsTab extends DevKit.Controls.ITab {
			Section: Itab_form_optionsTabSections;
		}

		/** Redirect */
		export interface Itab_redirectTab extends DevKit.Controls.ITab {
			Section: Itab_redirectTabSections;
		}

		/** User Control */
		export interface Itab_usercontrolTab extends DevKit.Controls.ITab {
			Section: Itab_usercontrolTabSections;
		}

		export interface ITabs {
			/** Developer Extensions */
			tab_10: Itab_10Tab;
			/** Additional Functionality */
			tab_additional_functionality: Itab_additional_functionalityTab;
			/** Condition */
			tab_condition: Itab_conditionTab;
			/** Associated Table Reference */
			tab_entity_reference: Itab_entity_referenceTab;
			/** Form Definition */
			tab_form: Itab_formTab;
			/** Form Options */
			tab_form_options: Itab_form_optionsTab;
			/** Redirect */
			tab_redirect: Itab_redirectTab;
			/** User Control */
			tab_usercontrol: Itab_usercontrolTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
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
	 * mspp_webformstep_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_webformstep.mspp_webformstep_Information(executionContext)
	 */
	export class mspp_webformstep_Information extends FormBase<mspp_webformstep_Information.IBody, mspp_webformstep_Information.IHeader, mspp_webformstep_Information.IGrid, mspp_webformstep_Information.INavigation, mspp_webformstep_Information.IQuickForm, mspp_webformstep_Information.IProcess, mspp_webformstep_Information.IDialog> {
		/**
		 * Creates a mspp_webformstep_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_accept', 'mspp_allowmultiplefiles', 'mspp_appendquerystring', 'mspp_associatecurrentportaluser', 'mspp_attachfile', 'mspp_attachfilelabel', 'mspp_attachfilemaxsize', 'mspp_attachfilerequired', 'mspp_attachfilerequirederrormessage', 'mspp_attachfilerestrictaccept', 'mspp_attachfilesizeerrormessage', 'mspp_attachfilestoragelocation', 'mspp_attachfiletypeerrormessage', 'mspp_autogeneratesteps', 'mspp_autonumberattributelogicalname', 'mspp_autonumberdefinitionname', 'mspp_captcharequired', 'mspp_condition', 'mspp_conditiondefaultnextstep', 'mspp_createautonumber', 'mspp_entitypermissionsenabled', 'mspp_entitysourcestep', 'mspp_entitysourcetype', 'mspp_forceallfieldsrequired', 'mspp_formname', 'mspp_geolocation_addresslinefieldname', 'mspp_geolocation_cityfieldname', 'mspp_geolocation_countryfieldname', 'mspp_geolocation_countyfieldname', 'mspp_geolocation_displaymap', 'mspp_geolocation_enabled', 'mspp_geolocation_formattedaddressfieldname', 'mspp_geolocation_latitudefieldname', 'mspp_geolocation_longitudefieldname', 'mspp_geolocation_neighborhoodfieldname', 'mspp_geolocation_postalcodefieldname', 'mspp_geolocation_statefieldname', 'mspp_hideformonsuccess', 'mspp_instructions', 'mspp_loadeventkeyname', 'mspp_loguser', 'mspp_mode', 'mspp_movepreviouseventkeyname', 'mspp_movepreviouspermitted', 'mspp_name', 'mspp_nextbuttoncssclass', 'mspp_nextbuttontext', 'mspp_nextstep', 'mspp_populatereferenceentitylookupfield', 'mspp_portaluserlookupattributeisactivityparty', 'mspp_previousbuttoncssclass', 'mspp_previousbuttontext', 'mspp_primarykeyattributelogicalname', 'mspp_primarykeyquerystringparametername', 'mspp_provisionedlanguages', 'mspp_recommendedfieldsrequired', 'mspp_recordnotfoundmessage', 'mspp_recordsourcerelationshipname', 'mspp_redirecturl', 'mspp_redirecturlappendentityidquerystring', 'mspp_redirecturlcustomquerystring', 'mspp_redirecturlquerystringattribute', 'mspp_redirecturlquerystringattributeparamname', 'mspp_redirecturlquerystringname', 'mspp_redirectwebpage', 'mspp_referenceentitylogicalname', 'mspp_referenceentityreadonlyformname', 'mspp_referenceentityrelationshipname', 'mspp_referenceentityshowreadonlyform', 'mspp_referenceentitysourcetype', 'mspp_referenceentitystep', 'mspp_referencequeryattributelogicalname', 'mspp_referencequerystringisprimarykey', 'mspp_referencequerystringname', 'mspp_referencerecordsourcerelationshipname', 'mspp_referencetargetlookupattributelogicalname', 'mspp_registerstartupscript', 'mspp_registerstartupscript1', 'mspp_renderwebresourcesinline', 'mspp_savedeventkeyname', 'mspp_savingeventkeyname', 'mspp_setentityreference', 'mspp_settings', 'mspp_showcaptchaforauthenticatedusers', 'mspp_showownerfields', 'mspp_showunsupportedfields', 'mspp_submitbuttonbusytext', 'mspp_submitbuttoncssclass', 'mspp_submitbuttontext', 'mspp_submiteventkeyname', 'mspp_successmessage', 'mspp_tabname', 'mspp_targetentitylogicalname', 'mspp_targetentityportaluserlookupattribute', 'mspp_title', 'mspp_tooltipenabled', 'mspp_type', 'mspp_usercontrolpath', 'mspp_usercontroltitle', 'mspp_userhostaddressattributelogicalname', 'mspp_useridentitynameattributelogicalname', 'mspp_validationgroup', 'mspp_validationsummarycssclass', 'mspp_validationsummaryheadertext', 'mspp_validationsummarylinksenabled', 'mspp_validationsummarylinktext', 'mspp_webform', 'WebResource_condition', 'WebResource_geolocationaddresslinefieldnameselector', 'WebResource_geolocationcityfieldnameselector', 'WebResource_geolocationcountryfieldnameselector', 'WebResource_geolocationcountyfieldnameselector', 'WebResource_geolocationformattedaddressfieldnameselector', 'WebResource_geolocationlatitudefieldnameselector', 'WebResource_geolocationlongitudefieldnameselector', 'WebResource_geolocationneighborhoodfieldnameselector', 'WebResource_geolocationpostalcodefieldname', 'WebResource_geolocationstatefieldnameselector', 'WebResource_instructions', 'WebResource_localize_attachfilelabel', 'WebResource_localize_attachfilerequirederrormessage', 'WebResource_localize_nextbuttontext', 'WebResource_localize_previousbuttontext', 'WebResource_localize_submitbuttonbusytext', 'WebResource_localize_submitbuttontext', 'WebResource_localize_successmessage', 'WebResource_localize_title', 'WebResource_localize_usercontroltitle', 'WebResource_localized_recordnotfoundmessage', 'WebResource_mspp_attachfilesizeerrormessage', 'WebResource_mspp_attachfiletypeerrormessage', 'WebResource_mspp_autonumberattributelogicalname', 'WebResource_mspp_formname', 'WebResource_mspp_primarykeyattributelogicalname', 'WebResource_mspp_recordsourcerelationshipname', 'WebResource_mspp_redirecturlquerystringattribute', 'WebResource_mspp_referenceentitylogicalname', 'WebResource_mspp_referenceentityreadonlyformname', 'WebResource_mspp_referenceentityrelationshipname_selector', 'WebResource_mspp_referencequeryattributelogicalname', 'WebResource_mspp_referencerecordsourcerelationshipname', 'WebResource_mspp_referencetargetlookupattributelogicalname', 'WebResource_mspp_settings', 'WebResource_mspp_tabname', 'WebResource_mspp_targetentitylogicalname', 'WebResource_mspp_targetentityportaluserlookupattribute', 'WebResource_mspp_userhostaddressattributelogicalname', 'WebResource_mspp_useridentitynameattributelogicalname', 'WebResource_mspp_validationsummaryheadertext'],
				header: [],
				tab: ['tab_10___tab_10_section_2', 'tab_additional_functionality___section_geolocation', 'tab_additional_functionality___section_settings', 'tab_additional_functionality___tab_7_section_1', 'tab_additional_functionality___tab_7_section_4', 'tab_additional_functionality___tab_8_section_1', 'tab_condition___tab_5_section_1', 'tab_entity_reference___section_entity_reference_details', 'tab_entity_reference___section_entity_reference_readonly', 'tab_entity_reference___section_entity_reference_source', 'tab_entity_reference___section_entity_source_query_string', 'tab_entity_reference___section_entity_source_step', 'tab_entity_reference___section_reference_entity_source_relationship', 'tab_entity_reference___tab_9_section_1', 'tab_form___section_additionalsettings', 'tab_form___section_associateportaluser', 'tab_form___section_entity_source', 'tab_form___section_entity_source_querystring', 'tab_form___section_entity_source_relationship', 'tab_form___section_formdefinition', 'tab_form___section_mode', 'tab_form_options___mspp_webformstep_registerstartupscript_MonacoEditor', 'tab_form_options___section_formtabusercontroloptions', 'tab_form_options___section_javascript', 'tab_form_options___tab_10_section_1', 'tab_form_options___tab_form_section_3', 'tab_redirect___tab_4_section_1', 'tab_redirect___tab_redirect_section_2', 'tab_usercontrol___tab_8_section_2'],
				grid: [],
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
			mspp_instructions: DevKit.Controls.Memo;
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
			mspp_recordnotfoundmessage: DevKit.Controls.Memo;
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
			mspp_registerstartupscript: DevKit.Controls.Memo;
			/** Shows your custom JavaScript that will be placed at the bottom of the page right before the closing </form> element. */
			mspp_registerstartupscript1: DevKit.Controls.Memo;
			/** Render Web Resources Inline */
			mspp_renderwebresourcesinline: DevKit.Controls.Boolean;
			/** Saved Event Key Name */
			mspp_savedeventkeyname: DevKit.Controls.String;
			/** Saving Event Key Name */
			mspp_savingeventkeyname: DevKit.Controls.String;
			/** Set Table Reference */
			mspp_setentityreference: DevKit.Controls.Boolean;
			/** Settings */
			mspp_settings: DevKit.Controls.Memo;
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
			mspp_successmessage: DevKit.Controls.Memo;
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
	 * Usage: new mspp_webformstep.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_webformstep Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_accept', 'mspp_allowmultiplefiles', 'mspp_appendquerystring', 'mspp_associatecurrentportaluser', 'mspp_attachfile', 'mspp_attachfilelabel', 'mspp_attachfilemaxsize', 'mspp_attachfilerequired', 'mspp_attachfilerequirederrormessage', 'mspp_attachfilerestrictaccept', 'mspp_attachfilesizeerrormessage', 'mspp_attachfilestoragelocation', 'mspp_attachfiletypeerrormessage', 'mspp_autogeneratesteps', 'mspp_autonumberattributelogicalname', 'mspp_autonumberdefinitionname', 'mspp_captcharequired', 'mspp_condition', 'mspp_conditiondefaultnextstep', 'mspp_createautonumber', 'mspp_entitypermissionsenabled', 'mspp_entitysourcestep', 'mspp_entitysourcetype', 'mspp_forceallfieldsrequired', 'mspp_formname', 'mspp_geolocation_addresslinefieldname', 'mspp_geolocation_cityfieldname', 'mspp_geolocation_countryfieldname', 'mspp_geolocation_countyfieldname', 'mspp_geolocation_displaymap', 'mspp_geolocation_enabled', 'mspp_geolocation_formattedaddressfieldname', 'mspp_geolocation_latitudefieldname', 'mspp_geolocation_longitudefieldname', 'mspp_geolocation_neighborhoodfieldname', 'mspp_geolocation_postalcodefieldname', 'mspp_geolocation_statefieldname', 'mspp_hideformonsuccess', 'mspp_instructions', 'mspp_loadeventkeyname', 'mspp_loguser', 'mspp_mode', 'mspp_movepreviouseventkeyname', 'mspp_movepreviouspermitted', 'mspp_name', 'mspp_nextbuttoncssclass', 'mspp_nextbuttontext', 'mspp_nextstep', 'mspp_populatereferenceentitylookupfield', 'mspp_portaluserlookupattributeisactivityparty', 'mspp_previousbuttoncssclass', 'mspp_previousbuttontext', 'mspp_primarykeyattributelogicalname', 'mspp_primarykeyquerystringparametername', 'mspp_provisionedlanguages', 'mspp_recommendedfieldsrequired', 'mspp_recordnotfoundmessage', 'mspp_recordsourcerelationshipname', 'mspp_redirecturl', 'mspp_redirecturlappendentityidquerystring', 'mspp_redirecturlcustomquerystring', 'mspp_redirecturlquerystringattribute', 'mspp_redirecturlquerystringattributeparamname', 'mspp_redirecturlquerystringname', 'mspp_redirectwebpage', 'mspp_referenceentitylogicalname', 'mspp_referenceentityreadonlyformname', 'mspp_referenceentityrelationshipname', 'mspp_referenceentityshowreadonlyform', 'mspp_referenceentitysourcetype', 'mspp_referenceentitystep', 'mspp_referencequeryattributelogicalname', 'mspp_referencequerystringisprimarykey', 'mspp_referencequerystringname', 'mspp_referencerecordsourcerelationshipname', 'mspp_referencetargetlookupattributelogicalname', 'mspp_registerstartupscript', 'mspp_registerstartupscript1', 'mspp_renderwebresourcesinline', 'mspp_savedeventkeyname', 'mspp_savingeventkeyname', 'mspp_setentityreference', 'mspp_settings', 'mspp_showcaptchaforauthenticatedusers', 'mspp_showownerfields', 'mspp_showunsupportedfields', 'mspp_submitbuttonbusytext', 'mspp_submitbuttoncssclass', 'mspp_submitbuttontext', 'mspp_submiteventkeyname', 'mspp_successmessage', 'mspp_tabname', 'mspp_targetentitylogicalname', 'mspp_targetentityportaluserlookupattribute', 'mspp_title', 'mspp_tooltipenabled', 'mspp_type', 'mspp_usercontrolpath', 'mspp_usercontroltitle', 'mspp_userhostaddressattributelogicalname', 'mspp_useridentitynameattributelogicalname', 'mspp_validationgroup', 'mspp_validationsummarycssclass', 'mspp_validationsummaryheadertext', 'mspp_validationsummarylinksenabled', 'mspp_validationsummarylinktext', 'mspp_webform', 'WebResource_condition', 'WebResource_geolocationaddresslinefieldnameselector', 'WebResource_geolocationcityfieldnameselector', 'WebResource_geolocationcountryfieldnameselector', 'WebResource_geolocationcountyfieldnameselector', 'WebResource_geolocationformattedaddressfieldnameselector', 'WebResource_geolocationlatitudefieldnameselector', 'WebResource_geolocationlongitudefieldnameselector', 'WebResource_geolocationneighborhoodfieldnameselector', 'WebResource_geolocationpostalcodefieldname', 'WebResource_geolocationstatefieldnameselector', 'WebResource_instructions', 'WebResource_localize_attachfilelabel', 'WebResource_localize_attachfilerequirederrormessage', 'WebResource_localize_nextbuttontext', 'WebResource_localize_previousbuttontext', 'WebResource_localize_submitbuttonbusytext', 'WebResource_localize_submitbuttontext', 'WebResource_localize_successmessage', 'WebResource_localize_title', 'WebResource_localize_usercontroltitle', 'WebResource_localized_recordnotfoundmessage', 'WebResource_mspp_attachfilesizeerrormessage', 'WebResource_mspp_attachfiletypeerrormessage', 'WebResource_mspp_autonumberattributelogicalname', 'WebResource_mspp_formname', 'WebResource_mspp_primarykeyattributelogicalname', 'WebResource_mspp_recordsourcerelationshipname', 'WebResource_mspp_redirecturlquerystringattribute', 'WebResource_mspp_referenceentitylogicalname', 'WebResource_mspp_referenceentityreadonlyformname', 'WebResource_mspp_referenceentityrelationshipname_selector', 'WebResource_mspp_referencequeryattributelogicalname', 'WebResource_mspp_referencerecordsourcerelationshipname', 'WebResource_mspp_referencetargetlookupattributelogicalname', 'WebResource_mspp_settings', 'WebResource_mspp_tabname', 'WebResource_mspp_targetentitylogicalname', 'WebResource_mspp_targetentityportaluserlookupattribute', 'WebResource_mspp_userhostaddressattributelogicalname', 'WebResource_mspp_useridentitynameattributelogicalname', 'WebResource_mspp_validationsummaryheadertext'],
				header: [],
				tab: ['tab_10___tab_10_section_2', 'tab_additional_functionality___section_geolocation', 'tab_additional_functionality___section_settings', 'tab_additional_functionality___tab_7_section_1', 'tab_additional_functionality___tab_7_section_4', 'tab_additional_functionality___tab_8_section_1', 'tab_condition___tab_5_section_1', 'tab_entity_reference___section_entity_reference_details', 'tab_entity_reference___section_entity_reference_readonly', 'tab_entity_reference___section_entity_reference_source', 'tab_entity_reference___section_entity_source_query_string', 'tab_entity_reference___section_entity_source_step', 'tab_entity_reference___section_reference_entity_source_relationship', 'tab_entity_reference___tab_9_section_1', 'tab_form___section_additionalsettings', 'tab_form___section_associateportaluser', 'tab_form___section_entity_source', 'tab_form___section_entity_source_querystring', 'tab_form___section_entity_source_relationship', 'tab_form___section_formdefinition', 'tab_form___section_mode', 'tab_form_options___mspp_webformstep_registerstartupscript_MonacoEditor', 'tab_form_options___section_formtabusercontroloptions', 'tab_form_options___section_javascript', 'tab_form_options___tab_10_section_1', 'tab_form_options___tab_form_section_3', 'tab_redirect___tab_4_section_1', 'tab_redirect___tab_redirect_section_2', 'tab_usercontrol___tab_8_section_2'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

/**
 * mspp_entityformmetadata.form.ts - mspp_entityformmetadata Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_entityformmetadata containing form classes: mspp_entityformmetadata.FormClassName
 * 3. Aggregate Form class: mspp_entityformmetadata.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_entityformmetadata {

	// ========================================================================
	// Form: mspp_entityformmetadata_Information
	// ========================================================================

	export namespace mspp_entityformmetadata_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Add Description */
			mspp_adddescription: DevKit.Controls.Boolean;
			/** Attribute Logical Name */
			mspp_attributelogicalname: DevKit.Controls.String;
			/** Constant Sum Maximum Total */
			mspp_constantsummaximumtotal: DevKit.Controls.Integer;
			/** Constant Sum Minimum Total */
			mspp_constantsumminimumtotal: DevKit.Controls.Integer;
			/** Constant Sum Validation Error Message */
			mspp_constantsumvalidationerrormessage: DevKit.Controls.String;
			/** Specifies how the control should be modified or enhanced. */
			mspp_controlstyle: DevKit.Controls.OptionSet;
			/** CSS Class */
			mspp_cssclass: DevKit.Controls.String;
			/** Description */
			mspp_description: DevKit.Controls.Memo;
			/** Position */
			mspp_descriptionposition: DevKit.Controls.OptionSet;
			/** Unique identifier for Entity Form associated with Entity Form Metadata. */
			mspp_entityform: DevKit.Controls.Lookup;
			/** Basic Form for Create */
			mspp_entityformforcreate: DevKit.Controls.Lookup;
			/** Field is Required */
			mspp_fieldisrequired: DevKit.Controls.Boolean;
			/** The error message to be displayed when the geolocation validator validation fails. */
			mspp_geolocationvalidatorerrormessage: DevKit.Controls.String;
			/** Shows which attributes are to be grouped and rendered as a composite control if the control style is a groupings type such as "Group Whole Number as Constant Sum." */
			mspp_groupname: DevKit.Controls.String;
			/** Ignore Default Value */
			mspp_ignoredefaultvalue: DevKit.Controls.Boolean;
			/** Label */
			mspp_label: DevKit.Controls.Memo;
			/** Multiple Choice Max Selected Count */
			mspp_maxmultiplechoiceselectedcount: DevKit.Controls.Integer;
			/** Multiple Choice Minimum Required Selected Count */
			mspp_minmultiplechoiceselectedcount: DevKit.Controls.Integer;
			/** Multiple Choice Validation Error Message */
			mspp_multiplechoicevalidationerrormessage: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Notes Settings */
			mspp_notes_settings: DevKit.Controls.Memo;
			/** Use this field, in conjunction with On Save Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
			mspp_onsavefromattribute: DevKit.Controls.String;
			/** Shows the mechanisms for populating a field with a value. */
			mspp_onsavetype: DevKit.Controls.OptionSet;
			/** Value */
			mspp_onsavevalue: DevKit.Controls.String;
			/** Use this field, in conjunction with Prepopulate Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
			mspp_prepopulatefromattribute: DevKit.Controls.String;
			/** Shows the mechanisms for populating a field with a value. */
			mspp_prepopulatetype: DevKit.Controls.OptionSet;
			/** The value to prepopulate the field. */
			mspp_prepopulatevalue: DevKit.Controls.String;
			/** Provisioned Languages */
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			/** Randomize Option Set Values */
			mspp_randomizeoptionsetvalues: DevKit.Controls.Boolean;
			/** Range Validation Error Message */
			mspp_rangevalidationerrormessage: DevKit.Controls.String;
			/** Rank Order No Ties Validation Error Message */
			mspp_rankordernotiesvalidationerrormessage: DevKit.Controls.String;
			/** The error message shown when a required field does not contain a value. */
			mspp_requiredfieldvalidationerrormessage: DevKit.Controls.String;
			/** Section Name */
			mspp_sectionname: DevKit.Controls.String;
			/** Set Value On Save */
			mspp_setvalueonsave: DevKit.Controls.Boolean;
			/** Subgrid Name */
			mspp_subgrid_name: DevKit.Controls.String;
			/** Subgrid Settings */
			mspp_subgrid_settings: DevKit.Controls.Memo;
			/** Tab Name */
			mspp_tabname: DevKit.Controls.String;
			/** Timeline Settings */
			mspp_timeline_settings: DevKit.Controls.Memo;
			/** Type */
			mspp_type: DevKit.Controls.OptionSet;
			/** Use Attribute's Description Property */
			mspp_useattributedescriptionproperty: DevKit.Controls.Boolean;
			/** The error message defined for the validation. */
			mspp_validationerrormessage: DevKit.Controls.String;
			/** Adds a regular expression validator with the specified regular expression. */
			mspp_validationregularexpression: DevKit.Controls.String;
			/** Regular Expression Validation Error Message */
			mspp_validationregularexpressionerrormessage: DevKit.Controls.String;
			WebResource_attributelogicalname: DevKit.Controls.WebResource;
			WebResource_localizeconstantsumerrormessage: DevKit.Controls.WebResource;
			WebResource_localizedescription: DevKit.Controls.WebResource;
			WebResource_localizegeolocationerrormessage: DevKit.Controls.WebResource;
			WebResource_localizelabel: DevKit.Controls.WebResource;
			WebResource_localizemultiplechoiceerrormessage: DevKit.Controls.WebResource;
			WebResource_localizerangevalidationerrormessage: DevKit.Controls.WebResource;
			WebResource_localizerankordernotieserrormessage: DevKit.Controls.WebResource;
			WebResource_localizeregularexpressionerrormessage: DevKit.Controls.WebResource;
			WebResource_localizerequiredfieldvalidationerrormessage: DevKit.Controls.WebResource;
			WebResource_localizevalidationerrormessage: DevKit.Controls.WebResource;
			WebResource_mspp_onsavefromattribute: DevKit.Controls.WebResource;
			WebResource_mspp_prepopulatefromattribute: DevKit.Controls.WebResource;
			WebResource_notes_settings: DevKit.Controls.WebResource;
			WebResource_sectionname: DevKit.Controls.WebResource;
			WebResource_subgrid_name: DevKit.Controls.WebResource;
			WebResource_subgrid_settings: DevKit.Controls.WebResource;
			WebResource_tabname: DevKit.Controls.WebResource;
			WebResource_timeline_settings: DevKit.Controls.WebResource;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface ITabs {
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
	 * mspp_entityformmetadata_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_entityformmetadata.mspp_entityformmetadata_Information(executionContext)
	 */
	export class mspp_entityformmetadata_Information extends FormBase<mspp_entityformmetadata_Information.IBody, mspp_entityformmetadata_Information.IHeader, mspp_entityformmetadata_Information.IGrid, mspp_entityformmetadata_Information.INavigation, mspp_entityformmetadata_Information.IQuickForm, mspp_entityformmetadata_Information.IProcess, mspp_entityformmetadata_Information.IDialog> {
		/**
		 * Creates a mspp_entityformmetadata_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_adddescription', 'mspp_attributelogicalname', 'mspp_constantsummaximumtotal', 'mspp_constantsumminimumtotal', 'mspp_constantsumvalidationerrormessage', 'mspp_controlstyle', 'mspp_cssclass', 'mspp_description', 'mspp_descriptionposition', 'mspp_entityform', 'mspp_entityformforcreate', 'mspp_fieldisrequired', 'mspp_geolocationvalidatorerrormessage', 'mspp_groupname', 'mspp_ignoredefaultvalue', 'mspp_label', 'mspp_maxmultiplechoiceselectedcount', 'mspp_minmultiplechoiceselectedcount', 'mspp_multiplechoicevalidationerrormessage', 'mspp_name', 'mspp_notes_settings', 'mspp_onsavefromattribute', 'mspp_onsavetype', 'mspp_onsavevalue', 'mspp_prepopulatefromattribute', 'mspp_prepopulatetype', 'mspp_prepopulatevalue', 'mspp_provisionedlanguages', 'mspp_randomizeoptionsetvalues', 'mspp_rangevalidationerrormessage', 'mspp_rankordernotiesvalidationerrormessage', 'mspp_requiredfieldvalidationerrormessage', 'mspp_sectionname', 'mspp_setvalueonsave', 'mspp_subgrid_name', 'mspp_subgrid_settings', 'mspp_tabname', 'mspp_timeline_settings', 'mspp_type', 'mspp_useattributedescriptionproperty', 'mspp_validationerrormessage', 'mspp_validationregularexpression', 'mspp_validationregularexpressionerrormessage', 'WebResource_attributelogicalname', 'WebResource_localizeconstantsumerrormessage', 'WebResource_localizedescription', 'WebResource_localizegeolocationerrormessage', 'WebResource_localizelabel', 'WebResource_localizemultiplechoiceerrormessage', 'WebResource_localizerangevalidationerrormessage', 'WebResource_localizerankordernotieserrormessage', 'WebResource_localizeregularexpressionerrormessage', 'WebResource_localizerequiredfieldvalidationerrormessage', 'WebResource_localizevalidationerrormessage', 'WebResource_mspp_onsavefromattribute', 'WebResource_mspp_prepopulatefromattribute', 'WebResource_notes_settings', 'WebResource_sectionname', 'WebResource_subgrid_name', 'WebResource_subgrid_settings', 'WebResource_tabname', 'WebResource_timeline_settings'],
				header: [],
				tab: [],
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
			/** Add Description */
			mspp_adddescription: DevKit.Controls.Boolean;
			/** Attribute Logical Name */
			mspp_attributelogicalname: DevKit.Controls.String;
			/** Constant Sum Maximum Total */
			mspp_constantsummaximumtotal: DevKit.Controls.Integer;
			/** Constant Sum Minimum Total */
			mspp_constantsumminimumtotal: DevKit.Controls.Integer;
			/** Constant Sum Validation Error Message */
			mspp_constantsumvalidationerrormessage: DevKit.Controls.String;
			/** Specifies how the control should be modified or enhanced. */
			mspp_controlstyle: DevKit.Controls.OptionSet;
			/** CSS Class */
			mspp_cssclass: DevKit.Controls.String;
			/** Description */
			mspp_description: DevKit.Controls.Memo;
			/** Position */
			mspp_descriptionposition: DevKit.Controls.OptionSet;
			/** Unique identifier for Entity Form associated with Entity Form Metadata. */
			mspp_entityform: DevKit.Controls.Lookup;
			/** Basic Form for Create */
			mspp_entityformforcreate: DevKit.Controls.Lookup;
			/** Field is Required */
			mspp_fieldisrequired: DevKit.Controls.Boolean;
			/** The error message to be displayed when the geolocation validator validation fails. */
			mspp_geolocationvalidatorerrormessage: DevKit.Controls.String;
			/** Shows which attributes are to be grouped and rendered as a composite control if the control style is a groupings type such as "Group Whole Number as Constant Sum." */
			mspp_groupname: DevKit.Controls.String;
			/** Ignore Default Value */
			mspp_ignoredefaultvalue: DevKit.Controls.Boolean;
			/** Label */
			mspp_label: DevKit.Controls.Memo;
			/** Multiple Choice Max Selected Count */
			mspp_maxmultiplechoiceselectedcount: DevKit.Controls.Integer;
			/** Multiple Choice Minimum Required Selected Count */
			mspp_minmultiplechoiceselectedcount: DevKit.Controls.Integer;
			/** Multiple Choice Validation Error Message */
			mspp_multiplechoicevalidationerrormessage: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Notes Settings */
			mspp_notes_settings: DevKit.Controls.Memo;
			/** Use this field, in conjunction with On Save Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
			mspp_onsavefromattribute: DevKit.Controls.String;
			/** Shows the mechanisms for populating a field with a value. */
			mspp_onsavetype: DevKit.Controls.OptionSet;
			/** Value */
			mspp_onsavevalue: DevKit.Controls.String;
			/** Use this field, in conjunction with Prepopulate Type = Current User Contact, to map any attribute from the current user’s contact record to this record’s attribute logical name. */
			mspp_prepopulatefromattribute: DevKit.Controls.String;
			/** Shows the mechanisms for populating a field with a value. */
			mspp_prepopulatetype: DevKit.Controls.OptionSet;
			/** The value to prepopulate the field. */
			mspp_prepopulatevalue: DevKit.Controls.String;
			/** Provisioned Languages */
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			/** Randomize Option Set Values */
			mspp_randomizeoptionsetvalues: DevKit.Controls.Boolean;
			/** Range Validation Error Message */
			mspp_rangevalidationerrormessage: DevKit.Controls.String;
			/** Rank Order No Ties Validation Error Message */
			mspp_rankordernotiesvalidationerrormessage: DevKit.Controls.String;
			/** The error message shown when a required field does not contain a value. */
			mspp_requiredfieldvalidationerrormessage: DevKit.Controls.String;
			/** Section Name */
			mspp_sectionname: DevKit.Controls.String;
			/** Set Value On Save */
			mspp_setvalueonsave: DevKit.Controls.Boolean;
			/** Subgrid Name */
			mspp_subgrid_name: DevKit.Controls.String;
			/** Subgrid Settings */
			mspp_subgrid_settings: DevKit.Controls.Memo;
			/** Tab Name */
			mspp_tabname: DevKit.Controls.String;
			/** Timeline Settings */
			mspp_timeline_settings: DevKit.Controls.Memo;
			/** Type */
			mspp_type: DevKit.Controls.OptionSet;
			/** Use Attribute's Description Property */
			mspp_useattributedescriptionproperty: DevKit.Controls.Boolean;
			/** The error message defined for the validation. */
			mspp_validationerrormessage: DevKit.Controls.String;
			/** Adds a regular expression validator with the specified regular expression. */
			mspp_validationregularexpression: DevKit.Controls.String;
			/** Regular Expression Validation Error Message */
			mspp_validationregularexpressionerrormessage: DevKit.Controls.String;
			WebResource_attributelogicalname: DevKit.Controls.WebResource;
			WebResource_localizeconstantsumerrormessage: DevKit.Controls.WebResource;
			WebResource_localizedescription: DevKit.Controls.WebResource;
			WebResource_localizegeolocationerrormessage: DevKit.Controls.WebResource;
			WebResource_localizelabel: DevKit.Controls.WebResource;
			WebResource_localizemultiplechoiceerrormessage: DevKit.Controls.WebResource;
			WebResource_localizerangevalidationerrormessage: DevKit.Controls.WebResource;
			WebResource_localizerankordernotieserrormessage: DevKit.Controls.WebResource;
			WebResource_localizeregularexpressionerrormessage: DevKit.Controls.WebResource;
			WebResource_localizerequiredfieldvalidationerrormessage: DevKit.Controls.WebResource;
			WebResource_localizevalidationerrormessage: DevKit.Controls.WebResource;
			WebResource_mspp_onsavefromattribute: DevKit.Controls.WebResource;
			WebResource_mspp_prepopulatefromattribute: DevKit.Controls.WebResource;
			WebResource_notes_settings: DevKit.Controls.WebResource;
			WebResource_sectionname: DevKit.Controls.WebResource;
			WebResource_subgrid_name: DevKit.Controls.WebResource;
			WebResource_subgrid_settings: DevKit.Controls.WebResource;
			WebResource_tabname: DevKit.Controls.WebResource;
			WebResource_timeline_settings: DevKit.Controls.WebResource;
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
	 * Usage: new mspp_entityformmetadata.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_entityformmetadata Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_adddescription', 'mspp_attributelogicalname', 'mspp_constantsummaximumtotal', 'mspp_constantsumminimumtotal', 'mspp_constantsumvalidationerrormessage', 'mspp_controlstyle', 'mspp_cssclass', 'mspp_description', 'mspp_descriptionposition', 'mspp_entityform', 'mspp_entityformforcreate', 'mspp_fieldisrequired', 'mspp_geolocationvalidatorerrormessage', 'mspp_groupname', 'mspp_ignoredefaultvalue', 'mspp_label', 'mspp_maxmultiplechoiceselectedcount', 'mspp_minmultiplechoiceselectedcount', 'mspp_multiplechoicevalidationerrormessage', 'mspp_name', 'mspp_notes_settings', 'mspp_onsavefromattribute', 'mspp_onsavetype', 'mspp_onsavevalue', 'mspp_prepopulatefromattribute', 'mspp_prepopulatetype', 'mspp_prepopulatevalue', 'mspp_provisionedlanguages', 'mspp_randomizeoptionsetvalues', 'mspp_rangevalidationerrormessage', 'mspp_rankordernotiesvalidationerrormessage', 'mspp_requiredfieldvalidationerrormessage', 'mspp_sectionname', 'mspp_setvalueonsave', 'mspp_subgrid_name', 'mspp_subgrid_settings', 'mspp_tabname', 'mspp_timeline_settings', 'mspp_type', 'mspp_useattributedescriptionproperty', 'mspp_validationerrormessage', 'mspp_validationregularexpression', 'mspp_validationregularexpressionerrormessage', 'WebResource_attributelogicalname', 'WebResource_localizeconstantsumerrormessage', 'WebResource_localizedescription', 'WebResource_localizegeolocationerrormessage', 'WebResource_localizelabel', 'WebResource_localizemultiplechoiceerrormessage', 'WebResource_localizerangevalidationerrormessage', 'WebResource_localizerankordernotieserrormessage', 'WebResource_localizeregularexpressionerrormessage', 'WebResource_localizerequiredfieldvalidationerrormessage', 'WebResource_localizevalidationerrormessage', 'WebResource_mspp_onsavefromattribute', 'WebResource_mspp_prepopulatefromattribute', 'WebResource_notes_settings', 'WebResource_sectionname', 'WebResource_subgrid_name', 'WebResource_subgrid_settings', 'WebResource_tabname', 'WebResource_timeline_settings'],
				header: [],
				tab: [],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

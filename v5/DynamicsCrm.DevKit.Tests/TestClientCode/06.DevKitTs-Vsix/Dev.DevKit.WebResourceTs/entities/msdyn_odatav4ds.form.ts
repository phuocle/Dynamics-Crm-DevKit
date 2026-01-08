/**
 * msdyn_odatav4ds.form.ts - msdyn_odatav4ds Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_odatav4ds containing form classes: msdyn_odatav4ds.FormClassName
 * 3. Aggregate Form class: msdyn_odatav4ds.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_odatav4ds {

	// ========================================================================
	// Form: msdyn_odatav4ds_Information
	// ========================================================================

	export namespace msdyn_odatav4ds_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Parameter10 Type */
			msdyn_isparameter10header: DevKit.Controls.Boolean;
			/** Parameter1 Type */
			msdyn_isparameter1header: DevKit.Controls.Boolean;
			/** Parameter2 Type */
			msdyn_isparameter2header: DevKit.Controls.Boolean;
			/** Parameter3 Type */
			msdyn_isparameter3header: DevKit.Controls.Boolean;
			/** Parameter4 Type */
			msdyn_isparameter4header: DevKit.Controls.Boolean;
			/** Parameter5 Type */
			msdyn_isparameter5header: DevKit.Controls.Boolean;
			/** Parameter6 Type */
			msdyn_isparameter6header: DevKit.Controls.Boolean;
			/** Parameter7 Type */
			msdyn_isparameter7header: DevKit.Controls.Boolean;
			/** Parameter8 Type */
			msdyn_isparameter8header: DevKit.Controls.Boolean;
			/** Parameter9 Type */
			msdyn_isparameter9header: DevKit.Controls.Boolean;
			/** Name of the OData v4 data source. This name appears in the data source drop-down list when creating a new entity. */
			msdyn_name: DevKit.Controls.String;
			/** Pagination Mode */
			msdyn_paginationtype: DevKit.Controls.OptionSet;
			/** parameter10name */
			msdyn_parameter10name: DevKit.Controls.String;
			/** parameter10value */
			msdyn_parameter10value: DevKit.Controls.String;
			/** parameter1name */
			msdyn_parameter1name: DevKit.Controls.String;
			/** parameter1value */
			msdyn_parameter1value: DevKit.Controls.String;
			/** parameter2name */
			msdyn_parameter2name: DevKit.Controls.String;
			/** parameter2value */
			msdyn_parameter2value: DevKit.Controls.String;
			/** parameter3name */
			msdyn_parameter3name: DevKit.Controls.String;
			/** parameter3value */
			msdyn_parameter3value: DevKit.Controls.String;
			/** parameter4name */
			msdyn_parameter4name: DevKit.Controls.String;
			/** parameter4value */
			msdyn_parameter4value: DevKit.Controls.String;
			/** parameter5name */
			msdyn_parameter5name: DevKit.Controls.String;
			/** parameter5value */
			msdyn_parameter5value: DevKit.Controls.String;
			/** parameter6name */
			msdyn_parameter6name: DevKit.Controls.String;
			/** parameter6value */
			msdyn_parameter6value: DevKit.Controls.String;
			/** parameter7name */
			msdyn_parameter7name: DevKit.Controls.String;
			/** parameter7value */
			msdyn_parameter7value: DevKit.Controls.String;
			/** parameter8name */
			msdyn_parameter8name: DevKit.Controls.String;
			/** parameter8value */
			msdyn_parameter8value: DevKit.Controls.String;
			/** parameter9name */
			msdyn_parameter9name: DevKit.Controls.String;
			/** parameter9value */
			msdyn_parameter9value: DevKit.Controls.String;
			/** Return Inline Count */
			msdyn_returninlinecount: DevKit.Controls.Boolean;
			/** Amount of time to wait, in seconds, before timing out an OData v4 request. */
			msdyn_timeout: DevKit.Controls.Integer;
			/** URL of the OData v4 web service endpoint this data source will target. */
			msdyn_uri: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface Itab_additional_parametersTabSections {
			/** Parameter Name */
			tab_additional_section_parametername: DevKit.Controls.Section;
			/** Parameter Type */
			tab_additional_section_parametertype: DevKit.Controls.Section;
			/** Value */
			tab_additional_section_value: DevKit.Controls.Section;
		}

		export interface Itab_Request_ParametersTabSections {
			/** Parameter Name */
			tab_requestparameters_section_name: DevKit.Controls.Section;
			/** Parameter Type */
			tab_requestparameters_section_type: DevKit.Controls.Section;
			/** Value */
			tab_requestparameters_section_value: DevKit.Controls.Section;
		}

		/** Additional Request Parameters */
		export interface Itab_additional_parametersTab extends DevKit.Controls.ITab {
			Section: Itab_additional_parametersTabSections;
		}

		/** Request Parameters */
		export interface Itab_Request_ParametersTab extends DevKit.Controls.ITab {
			Section: Itab_Request_ParametersTabSections;
		}

		export interface ITabs {
			/** Additional Request Parameters */
			tab_additional_parameters: Itab_additional_parametersTab;
			/** Request Parameters */
			tab_Request_Parameters: Itab_Request_ParametersTab;
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
	 * msdyn_odatav4ds_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_odatav4ds.msdyn_odatav4ds_Information(executionContext)
	 */
	export class msdyn_odatav4ds_Information extends FormBase<msdyn_odatav4ds_Information.IBody, msdyn_odatav4ds_Information.IHeader, msdyn_odatav4ds_Information.IGrid, msdyn_odatav4ds_Information.INavigation, msdyn_odatav4ds_Information.IQuickForm, msdyn_odatav4ds_Information.IProcess, msdyn_odatav4ds_Information.IDialog> {
		/**
		 * Creates a msdyn_odatav4ds_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_isparameter10header', 'msdyn_isparameter1header', 'msdyn_isparameter2header', 'msdyn_isparameter3header', 'msdyn_isparameter4header', 'msdyn_isparameter5header', 'msdyn_isparameter6header', 'msdyn_isparameter7header', 'msdyn_isparameter8header', 'msdyn_isparameter9header', 'msdyn_name', 'msdyn_paginationtype', 'msdyn_parameter10name', 'msdyn_parameter10value', 'msdyn_parameter1name', 'msdyn_parameter1value', 'msdyn_parameter2name', 'msdyn_parameter2value', 'msdyn_parameter3name', 'msdyn_parameter3value', 'msdyn_parameter4name', 'msdyn_parameter4value', 'msdyn_parameter5name', 'msdyn_parameter5value', 'msdyn_parameter6name', 'msdyn_parameter6value', 'msdyn_parameter7name', 'msdyn_parameter7value', 'msdyn_parameter8name', 'msdyn_parameter8value', 'msdyn_parameter9name', 'msdyn_parameter9value', 'msdyn_returninlinecount', 'msdyn_timeout', 'msdyn_uri'],
				header: [],
				tab: ['tab_additional_parameters___tab_additional_section_parametername', 'tab_additional_parameters___tab_additional_section_parametertype', 'tab_additional_parameters___tab_additional_section_value', 'tab_Request_Parameters___tab_requestparameters_section_name', 'tab_Request_Parameters___tab_requestparameters_section_type', 'tab_Request_Parameters___tab_requestparameters_section_value'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: msdyn_odatav4ds_Information2
	// ========================================================================

	export namespace msdyn_odatav4ds_Information2 {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Parameter10 Type */
			msdyn_isparameter10header: DevKit.Controls.Boolean;
			/** Parameter1 Type */
			msdyn_isparameter1header: DevKit.Controls.Boolean;
			/** Parameter2 Type */
			msdyn_isparameter2header: DevKit.Controls.Boolean;
			/** Parameter3 Type */
			msdyn_isparameter3header: DevKit.Controls.Boolean;
			/** Parameter4 Type */
			msdyn_isparameter4header: DevKit.Controls.Boolean;
			/** Parameter5 Type */
			msdyn_isparameter5header: DevKit.Controls.Boolean;
			/** Parameter6 Type */
			msdyn_isparameter6header: DevKit.Controls.Boolean;
			/** Parameter7 Type */
			msdyn_isparameter7header: DevKit.Controls.Boolean;
			/** Parameter8 Type */
			msdyn_isparameter8header: DevKit.Controls.Boolean;
			/** Parameter9 Type */
			msdyn_isparameter9header: DevKit.Controls.Boolean;
			/** Name of the OData v4 data source. This name appears in the data source drop-down list when creating a new entity. */
			msdyn_name: DevKit.Controls.String;
			/** Pagination Mode */
			msdyn_paginationtype: DevKit.Controls.OptionSet;
			/** parameter10name */
			msdyn_parameter10name: DevKit.Controls.String;
			/** parameter10value */
			msdyn_parameter10value: DevKit.Controls.String;
			/** parameter1name */
			msdyn_parameter1name: DevKit.Controls.String;
			/** parameter1value */
			msdyn_parameter1value: DevKit.Controls.String;
			/** parameter2name */
			msdyn_parameter2name: DevKit.Controls.String;
			/** parameter2value */
			msdyn_parameter2value: DevKit.Controls.String;
			/** parameter3name */
			msdyn_parameter3name: DevKit.Controls.String;
			/** parameter3value */
			msdyn_parameter3value: DevKit.Controls.String;
			/** parameter4name */
			msdyn_parameter4name: DevKit.Controls.String;
			/** parameter4value */
			msdyn_parameter4value: DevKit.Controls.String;
			/** parameter5name */
			msdyn_parameter5name: DevKit.Controls.String;
			/** parameter5value */
			msdyn_parameter5value: DevKit.Controls.String;
			/** parameter6name */
			msdyn_parameter6name: DevKit.Controls.String;
			/** parameter6value */
			msdyn_parameter6value: DevKit.Controls.String;
			/** parameter7name */
			msdyn_parameter7name: DevKit.Controls.String;
			/** parameter7value */
			msdyn_parameter7value: DevKit.Controls.String;
			/** parameter8name */
			msdyn_parameter8name: DevKit.Controls.String;
			/** parameter8value */
			msdyn_parameter8value: DevKit.Controls.String;
			/** parameter9name */
			msdyn_parameter9name: DevKit.Controls.String;
			/** parameter9value */
			msdyn_parameter9value: DevKit.Controls.String;
			/** Return Inline Count */
			msdyn_returninlinecount: DevKit.Controls.Boolean;
			/** Amount of time to wait, in seconds, before timing out an OData v4 request. */
			msdyn_timeout: DevKit.Controls.Integer;
			/** URL of the OData v4 web service endpoint this data source will target. */
			msdyn_uri: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface Itab_additional_parametersTabSections {
			/** Parameter Name */
			tab_additional_section_parametername: DevKit.Controls.Section;
			/** Parameter Type */
			tab_additional_section_parametertype: DevKit.Controls.Section;
			/** Value */
			tab_additional_section_value: DevKit.Controls.Section;
		}

		export interface Itab_Request_ParametersTabSections {
			/** Parameter Name */
			tab_requestparameters_section_name: DevKit.Controls.Section;
			/** Parameter Type */
			tab_requestparameters_section_type: DevKit.Controls.Section;
			/** Value */
			tab_requestparameters_section_value: DevKit.Controls.Section;
		}

		/** Additional Request Parameters */
		export interface Itab_additional_parametersTab extends DevKit.Controls.ITab {
			Section: Itab_additional_parametersTabSections;
		}

		/** Request Parameters */
		export interface Itab_Request_ParametersTab extends DevKit.Controls.ITab {
			Section: Itab_Request_ParametersTabSections;
		}

		export interface ITabs {
			/** Additional Request Parameters */
			tab_additional_parameters: Itab_additional_parametersTab;
			/** Request Parameters */
			tab_Request_Parameters: Itab_Request_ParametersTab;
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
	 * msdyn_odatav4ds_Information2 Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_odatav4ds.msdyn_odatav4ds_Information2(executionContext)
	 */
	export class msdyn_odatav4ds_Information2 extends FormBase<msdyn_odatav4ds_Information2.IBody, msdyn_odatav4ds_Information2.IHeader, msdyn_odatav4ds_Information2.IGrid, msdyn_odatav4ds_Information2.INavigation, msdyn_odatav4ds_Information2.IQuickForm, msdyn_odatav4ds_Information2.IProcess, msdyn_odatav4ds_Information2.IDialog> {
		/**
		 * Creates a msdyn_odatav4ds_Information2 Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_isparameter10header', 'msdyn_isparameter1header', 'msdyn_isparameter2header', 'msdyn_isparameter3header', 'msdyn_isparameter4header', 'msdyn_isparameter5header', 'msdyn_isparameter6header', 'msdyn_isparameter7header', 'msdyn_isparameter8header', 'msdyn_isparameter9header', 'msdyn_name', 'msdyn_paginationtype', 'msdyn_parameter10name', 'msdyn_parameter10value', 'msdyn_parameter1name', 'msdyn_parameter1value', 'msdyn_parameter2name', 'msdyn_parameter2value', 'msdyn_parameter3name', 'msdyn_parameter3value', 'msdyn_parameter4name', 'msdyn_parameter4value', 'msdyn_parameter5name', 'msdyn_parameter5value', 'msdyn_parameter6name', 'msdyn_parameter6value', 'msdyn_parameter7name', 'msdyn_parameter7value', 'msdyn_parameter8name', 'msdyn_parameter8value', 'msdyn_parameter9name', 'msdyn_parameter9value', 'msdyn_returninlinecount', 'msdyn_timeout', 'msdyn_uri'],
				header: [],
				tab: ['tab_additional_parameters___tab_additional_section_parametername', 'tab_additional_parameters___tab_additional_section_parametertype', 'tab_additional_parameters___tab_additional_section_value', 'tab_Request_Parameters___tab_requestparameters_section_name', 'tab_Request_Parameters___tab_requestparameters_section_type', 'tab_Request_Parameters___tab_requestparameters_section_value'],
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
			/** Parameter10 Type */
			msdyn_isparameter10header: DevKit.Controls.Boolean;
			/** Parameter1 Type */
			msdyn_isparameter1header: DevKit.Controls.Boolean;
			/** Parameter2 Type */
			msdyn_isparameter2header: DevKit.Controls.Boolean;
			/** Parameter3 Type */
			msdyn_isparameter3header: DevKit.Controls.Boolean;
			/** Parameter4 Type */
			msdyn_isparameter4header: DevKit.Controls.Boolean;
			/** Parameter5 Type */
			msdyn_isparameter5header: DevKit.Controls.Boolean;
			/** Parameter6 Type */
			msdyn_isparameter6header: DevKit.Controls.Boolean;
			/** Parameter7 Type */
			msdyn_isparameter7header: DevKit.Controls.Boolean;
			/** Parameter8 Type */
			msdyn_isparameter8header: DevKit.Controls.Boolean;
			/** Parameter9 Type */
			msdyn_isparameter9header: DevKit.Controls.Boolean;
			/** Name of the OData v4 data source. This name appears in the data source drop-down list when creating a new entity. */
			msdyn_name: DevKit.Controls.String;
			/** Pagination Mode */
			msdyn_paginationtype: DevKit.Controls.OptionSet;
			/** parameter10name */
			msdyn_parameter10name: DevKit.Controls.String;
			/** parameter10value */
			msdyn_parameter10value: DevKit.Controls.String;
			/** parameter1name */
			msdyn_parameter1name: DevKit.Controls.String;
			/** parameter1value */
			msdyn_parameter1value: DevKit.Controls.String;
			/** parameter2name */
			msdyn_parameter2name: DevKit.Controls.String;
			/** parameter2value */
			msdyn_parameter2value: DevKit.Controls.String;
			/** parameter3name */
			msdyn_parameter3name: DevKit.Controls.String;
			/** parameter3value */
			msdyn_parameter3value: DevKit.Controls.String;
			/** parameter4name */
			msdyn_parameter4name: DevKit.Controls.String;
			/** parameter4value */
			msdyn_parameter4value: DevKit.Controls.String;
			/** parameter5name */
			msdyn_parameter5name: DevKit.Controls.String;
			/** parameter5value */
			msdyn_parameter5value: DevKit.Controls.String;
			/** parameter6name */
			msdyn_parameter6name: DevKit.Controls.String;
			/** parameter6value */
			msdyn_parameter6value: DevKit.Controls.String;
			/** parameter7name */
			msdyn_parameter7name: DevKit.Controls.String;
			/** parameter7value */
			msdyn_parameter7value: DevKit.Controls.String;
			/** parameter8name */
			msdyn_parameter8name: DevKit.Controls.String;
			/** parameter8value */
			msdyn_parameter8value: DevKit.Controls.String;
			/** parameter9name */
			msdyn_parameter9name: DevKit.Controls.String;
			/** parameter9value */
			msdyn_parameter9value: DevKit.Controls.String;
			/** Return Inline Count */
			msdyn_returninlinecount: DevKit.Controls.Boolean;
			/** Amount of time to wait, in seconds, before timing out an OData v4 request. */
			msdyn_timeout: DevKit.Controls.Integer;
			/** URL of the OData v4 web service endpoint this data source will target. */
			msdyn_uri: DevKit.Controls.String;
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
	 * Usage: new msdyn_odatav4ds.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_odatav4ds Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_isparameter10header', 'msdyn_isparameter1header', 'msdyn_isparameter2header', 'msdyn_isparameter3header', 'msdyn_isparameter4header', 'msdyn_isparameter5header', 'msdyn_isparameter6header', 'msdyn_isparameter7header', 'msdyn_isparameter8header', 'msdyn_isparameter9header', 'msdyn_name', 'msdyn_paginationtype', 'msdyn_parameter10name', 'msdyn_parameter10value', 'msdyn_parameter1name', 'msdyn_parameter1value', 'msdyn_parameter2name', 'msdyn_parameter2value', 'msdyn_parameter3name', 'msdyn_parameter3value', 'msdyn_parameter4name', 'msdyn_parameter4value', 'msdyn_parameter5name', 'msdyn_parameter5value', 'msdyn_parameter6name', 'msdyn_parameter6value', 'msdyn_parameter7name', 'msdyn_parameter7value', 'msdyn_parameter8name', 'msdyn_parameter8value', 'msdyn_parameter9name', 'msdyn_parameter9value', 'msdyn_returninlinecount', 'msdyn_timeout', 'msdyn_uri'],
				header: [],
				tab: ['tab_additional_parameters___tab_additional_section_parametername', 'tab_additional_parameters___tab_additional_section_parametertype', 'tab_additional_parameters___tab_additional_section_value', 'tab_Request_Parameters___tab_requestparameters_section_name', 'tab_Request_Parameters___tab_requestparameters_section_type', 'tab_Request_Parameters___tab_requestparameters_section_value'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

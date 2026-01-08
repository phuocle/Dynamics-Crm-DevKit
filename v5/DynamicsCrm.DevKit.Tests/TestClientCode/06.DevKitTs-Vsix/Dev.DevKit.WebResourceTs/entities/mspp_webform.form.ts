/**
 * mspp_webform.form.ts - mspp_webform Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_webform containing form classes: mspp_webform.FormClassName
 * 3. Aggregate Form class: mspp_webform.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_webform {

	// ========================================================================
	// Form: mspp_webform_Information
	// ========================================================================

	export namespace mspp_webform_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Redirect to sign in if the user is anonymous. */
			mspp_authenticationrequired: DevKit.Controls.Boolean;
			/** Edit Expired Message */
			mspp_editexpiredmessage: DevKit.Controls.Memo;
			/** Edit Expired State Code */
			mspp_editexpiredstatecode: DevKit.Controls.Integer;
			/** Edit Expired Status Code */
			mspp_editexpiredstatuscode: DevKit.Controls.Integer;
			/** Multiple Records Per User Permitted */
			mspp_multiplerecordsperuserpermitted: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Enabled */
			mspp_progressindicatorenabled: DevKit.Controls.Boolean;
			/** Ignore Last Step In Progress Count */
			mspp_progressindicatorignorelaststep: DevKit.Controls.Boolean;
			/** Location of the progress indicator relative to the form */
			mspp_progressindicatorposition: DevKit.Controls.OptionSet;
			/** Prepend Step Number to Step Title */
			mspp_progressindicatorprependstepnum: DevKit.Controls.Boolean;
			/** Type */
			mspp_progressindicatortype: DevKit.Controls.OptionSet;
			/** Provisioned Languages */
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			/** Default message: Your changes have not been saved. To stay on the page so that you can save your changes, click Cancel. */
			mspp_savechangeswarningmessage: DevKit.Controls.Memo;
			/** Displays a warning message to the user if they close the browser, or refresh the page, or click the previous button in a multiple step form and they have changes that haven't been saved. */
			mspp_savechangeswarningonclose: DevKit.Controls.Boolean;
			/** Start New Session On Load */
			mspp_startnewsessiononload: DevKit.Controls.Boolean;
			/** Unique identifier for Form Step associated with Multistep Form. */
			mspp_startstep: DevKit.Controls.Lookup;
			/** Unique identifier for Website entity associated with this record */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_localize_editexpiredmessage: DevKit.Controls.WebResource;
			WebResource_localize_savechangeswarningmessage: DevKit.Controls.WebResource;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface Itab_sessionsTabSections {
			/** Section */
			tab_4_section_1: DevKit.Controls.Section;
		}

		export interface Itab_webformstepsTabSections {
			/** Section */
			tab_2_section_1: DevKit.Controls.Section;
		}

		export interface Itab_webpagesTabSections {
			/** Section */
			tab_3_section_1: DevKit.Controls.Section;
		}

		/** Sessions */
		export interface Itab_sessionsTab extends DevKit.Controls.ITab {
			Section: Itab_sessionsTabSections;
		}

		/** Form Steps */
		export interface Itab_webformstepsTab extends DevKit.Controls.ITab {
			Section: Itab_webformstepsTabSections;
		}

		/** Web Pages */
		export interface Itab_webpagesTab extends DevKit.Controls.ITab {
			Section: Itab_webpagesTabSections;
		}

		export interface ITabs {
			/** Sessions */
			tab_sessions: Itab_sessionsTab;
			/** Form Steps */
			tab_webformsteps: Itab_webformstepsTab;
			/** Web Pages */
			tab_webpages: Itab_webpagesTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Sessions (Multistep Form) */
			grid_webformsessions: DevKit.Controls.Grid;
			/** Steps (Multistep Form) */
			grid_webformsteps: DevKit.Controls.Grid;
			/** Web Pages (Multistep Form) */
			grid_webpages: DevKit.Controls.Grid;
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
	 * mspp_webform_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_webform.mspp_webform_Information(executionContext)
	 */
	export class mspp_webform_Information extends FormBase<mspp_webform_Information.IBody, mspp_webform_Information.IHeader, mspp_webform_Information.IGrid, mspp_webform_Information.INavigation, mspp_webform_Information.IQuickForm, mspp_webform_Information.IProcess, mspp_webform_Information.IDialog> {
		/**
		 * Creates a mspp_webform_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_authenticationrequired', 'mspp_editexpiredmessage', 'mspp_editexpiredstatecode', 'mspp_editexpiredstatuscode', 'mspp_multiplerecordsperuserpermitted', 'mspp_name', 'mspp_progressindicatorenabled', 'mspp_progressindicatorignorelaststep', 'mspp_progressindicatorposition', 'mspp_progressindicatorprependstepnum', 'mspp_progressindicatortype', 'mspp_provisionedlanguages', 'mspp_savechangeswarningmessage', 'mspp_savechangeswarningonclose', 'mspp_startnewsessiononload', 'mspp_startstep', 'mspp_websiteid', 'WebResource_localize_editexpiredmessage', 'WebResource_localize_savechangeswarningmessage'],
				header: [],
				tab: ['tab_sessions___tab_4_section_1', 'tab_webformsteps___tab_2_section_1', 'tab_webpages___tab_3_section_1'],
				grid: ['grid_webformsessions', 'grid_webformsteps', 'grid_webpages'],
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
			/** Redirect to sign in if the user is anonymous. */
			mspp_authenticationrequired: DevKit.Controls.Boolean;
			/** Edit Expired Message */
			mspp_editexpiredmessage: DevKit.Controls.Memo;
			/** Edit Expired State Code */
			mspp_editexpiredstatecode: DevKit.Controls.Integer;
			/** Edit Expired Status Code */
			mspp_editexpiredstatuscode: DevKit.Controls.Integer;
			/** Multiple Records Per User Permitted */
			mspp_multiplerecordsperuserpermitted: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Enabled */
			mspp_progressindicatorenabled: DevKit.Controls.Boolean;
			/** Ignore Last Step In Progress Count */
			mspp_progressindicatorignorelaststep: DevKit.Controls.Boolean;
			/** Location of the progress indicator relative to the form */
			mspp_progressindicatorposition: DevKit.Controls.OptionSet;
			/** Prepend Step Number to Step Title */
			mspp_progressindicatorprependstepnum: DevKit.Controls.Boolean;
			/** Type */
			mspp_progressindicatortype: DevKit.Controls.OptionSet;
			/** Provisioned Languages */
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			/** Default message: Your changes have not been saved. To stay on the page so that you can save your changes, click Cancel. */
			mspp_savechangeswarningmessage: DevKit.Controls.Memo;
			/** Displays a warning message to the user if they close the browser, or refresh the page, or click the previous button in a multiple step form and they have changes that haven't been saved. */
			mspp_savechangeswarningonclose: DevKit.Controls.Boolean;
			/** Start New Session On Load */
			mspp_startnewsessiononload: DevKit.Controls.Boolean;
			/** Unique identifier for Form Step associated with Multistep Form. */
			mspp_startstep: DevKit.Controls.Lookup;
			/** Unique identifier for Website entity associated with this record */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_localize_editexpiredmessage: DevKit.Controls.WebResource;
			WebResource_localize_savechangeswarningmessage: DevKit.Controls.WebResource;
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
			/** Sessions (Multistep Form) */
			grid_webformsessions: DevKit.Controls.Grid;
			/** Steps (Multistep Form) */
			grid_webformsteps: DevKit.Controls.Grid;
			/** Web Pages (Multistep Form) */
			grid_webpages: DevKit.Controls.Grid;
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
	 * Usage: new mspp_webform.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_webform Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_authenticationrequired', 'mspp_editexpiredmessage', 'mspp_editexpiredstatecode', 'mspp_editexpiredstatuscode', 'mspp_multiplerecordsperuserpermitted', 'mspp_name', 'mspp_progressindicatorenabled', 'mspp_progressindicatorignorelaststep', 'mspp_progressindicatorposition', 'mspp_progressindicatorprependstepnum', 'mspp_progressindicatortype', 'mspp_provisionedlanguages', 'mspp_savechangeswarningmessage', 'mspp_savechangeswarningonclose', 'mspp_startnewsessiononload', 'mspp_startstep', 'mspp_websiteid', 'WebResource_localize_editexpiredmessage', 'WebResource_localize_savechangeswarningmessage'],
				header: [],
				tab: ['tab_sessions___tab_4_section_1', 'tab_webformsteps___tab_2_section_1', 'tab_webpages___tab_3_section_1'],
				grid: ['grid_webformsessions', 'grid_webformsteps', 'grid_webpages'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

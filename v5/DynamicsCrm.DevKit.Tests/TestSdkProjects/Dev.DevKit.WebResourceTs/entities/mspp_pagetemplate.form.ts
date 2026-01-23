/**
 * mspp_pagetemplate.form.ts - mspp_pagetemplate Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_pagetemplate containing form classes: mspp_pagetemplate.FormClassName
 * 3. Aggregate Form class: mspp_pagetemplate.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_pagetemplate {

	// ========================================================================
	// Form: mspp_pagetemplate_Information
	// ========================================================================

	export namespace mspp_pagetemplate_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Description */
			mspp_description: DevKit.Controls.Memo;
			/** Table Name */
			mspp_entityname: DevKit.Controls.String;
			/** Is Default */
			mspp_isdefault: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Rewrite Url */
			mspp_rewriteurl: DevKit.Controls.String;
			/** The type of the record. */
			mspp_type: DevKit.Controls.OptionSet;
			/** Control whether this web template page template will be rendered using the website header and footer, or control rendering of all page content. */
			mspp_usewebsiteheaderandfooter: DevKit.Controls.Boolean;
			/** Unique identifier for Website associated with Page Template. */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** Unique identifier for Web Template associated with Page Template. */
			mspp_webtemplateid: DevKit.Controls.Lookup;
			WebResource_entityname: DevKit.Controls.WebResource;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface Itab_webpagesTabSections {
			/** Section */
			tab_3_section_1: DevKit.Controls.Section;
		}

		/** Web Pages */
		export interface Itab_webpagesTab extends DevKit.Controls.ITab {
			Section: Itab_webpagesTabSections;
		}

		export interface ITabs {
			/** Web Pages */
			tab_webpages: Itab_webpagesTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
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
	 * mspp_pagetemplate_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_pagetemplate.mspp_pagetemplate_Information(executionContext)
	 */
	export class mspp_pagetemplate_Information extends FormBase<mspp_pagetemplate_Information.IBody, mspp_pagetemplate_Information.IHeader, mspp_pagetemplate_Information.IGrid, mspp_pagetemplate_Information.INavigation, mspp_pagetemplate_Information.IQuickForm, mspp_pagetemplate_Information.IProcess, mspp_pagetemplate_Information.IDialog> {
		/**
		 * Creates a mspp_pagetemplate_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_description', 'mspp_entityname', 'mspp_isdefault', 'mspp_name', 'mspp_rewriteurl', 'mspp_type', 'mspp_usewebsiteheaderandfooter', 'mspp_websiteid', 'mspp_webtemplateid', 'WebResource_entityname'],
				header: [],
				tab: ['tab_webpages___tab_3_section_1'],
				grid: ['grid_webpages'],
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
			/** Description */
			mspp_description: DevKit.Controls.Memo;
			/** Table Name */
			mspp_entityname: DevKit.Controls.String;
			/** Is Default */
			mspp_isdefault: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Rewrite Url */
			mspp_rewriteurl: DevKit.Controls.String;
			/** The type of the record. */
			mspp_type: DevKit.Controls.OptionSet;
			/** Control whether this web template page template will be rendered using the website header and footer, or control rendering of all page content. */
			mspp_usewebsiteheaderandfooter: DevKit.Controls.Boolean;
			/** Unique identifier for Website associated with Page Template. */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** Unique identifier for Web Template associated with Page Template. */
			mspp_webtemplateid: DevKit.Controls.Lookup;
			WebResource_entityname: DevKit.Controls.WebResource;
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
	 * Usage: new mspp_pagetemplate.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_pagetemplate Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_description', 'mspp_entityname', 'mspp_isdefault', 'mspp_name', 'mspp_rewriteurl', 'mspp_type', 'mspp_usewebsiteheaderandfooter', 'mspp_websiteid', 'mspp_webtemplateid', 'WebResource_entityname'],
				header: [],
				tab: ['tab_webpages___tab_3_section_1'],
				grid: ['grid_webpages'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

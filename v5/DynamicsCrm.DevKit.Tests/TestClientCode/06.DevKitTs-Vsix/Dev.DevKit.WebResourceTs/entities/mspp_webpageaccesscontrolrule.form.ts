/**
 * mspp_webpageaccesscontrolrule.form.ts - mspp_webpageaccesscontrolrule Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_webpageaccesscontrolrule containing form classes: mspp_webpageaccesscontrolrule.FormClassName
 * 3. Aggregate Form class: mspp_webpageaccesscontrolrule.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_webpageaccesscontrolrule {

	// ========================================================================
	// Form: mspp_webpageaccesscontrolrule_Information
	// ========================================================================

	export namespace mspp_webpageaccesscontrolrule_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Description */
			mspp_description: DevKit.Controls.Memo;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Right */
			mspp_right: DevKit.Controls.OptionSet;
			/** All child web files directly related to this web page will be excluded from security validation. This does not exclude the children's descendants. */
			mspp_scope: DevKit.Controls.OptionSet;
			/** Unique identifier for Web Page associated with Web Page Access Control Rule. */
			mspp_webpageid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Web Page Access Control Rule. */
			mspp_websiteid: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_300B9BF7_0715_4AE2_8C50_A8C82541E3A9TabSections {
			/** General */
			_9CE2EE20_11E4_4D93_9F2A_C5B20F77791F: DevKit.Controls.Section;
		}

		export interface Itab_3TabSections {
			/** Section */
			tab_3_section_1: DevKit.Controls.Section;
		}

		export interface Itab_webrolesTabSections {
			/** Section */
			tab_4_section_1: DevKit.Controls.Section;
		}

		/** General */
		export interface I_300B9BF7_0715_4AE2_8C50_A8C82541E3A9Tab extends DevKit.Controls.ITab {
			Section: I_300B9BF7_0715_4AE2_8C50_A8C82541E3A9TabSections;
		}

		/** Publishing States */
		export interface Itab_3Tab extends DevKit.Controls.ITab {
			Section: Itab_3TabSections;
		}

		/** Web Roles */
		export interface Itab_webrolesTab extends DevKit.Controls.ITab {
			Section: Itab_webrolesTabSections;
		}

		export interface ITabs {
			/** General */
			_300B9BF7_0715_4AE2_8C50_A8C82541E3A9: I_300B9BF7_0715_4AE2_8C50_A8C82541E3A9Tab;
			/** Publishing States */
			tab_3: Itab_3Tab;
			/** Web Roles */
			tab_webroles: Itab_webrolesTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Web Roles */
			grid_webroles: DevKit.Controls.Grid;
			/** Publishing States */
			publishing_states: DevKit.Controls.Grid;
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
	 * mspp_webpageaccesscontrolrule_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_webpageaccesscontrolrule.mspp_webpageaccesscontrolrule_Information(executionContext)
	 */
	export class mspp_webpageaccesscontrolrule_Information extends FormBase<mspp_webpageaccesscontrolrule_Information.IBody, mspp_webpageaccesscontrolrule_Information.IHeader, mspp_webpageaccesscontrolrule_Information.IGrid, mspp_webpageaccesscontrolrule_Information.INavigation, mspp_webpageaccesscontrolrule_Information.IQuickForm, mspp_webpageaccesscontrolrule_Information.IProcess, mspp_webpageaccesscontrolrule_Information.IDialog> {
		/**
		 * Creates a mspp_webpageaccesscontrolrule_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_description', 'mspp_name', 'mspp_right', 'mspp_scope', 'mspp_webpageid', 'mspp_websiteid'],
				header: [],
				tab: ['_300B9BF7_0715_4AE2_8C50_A8C82541E3A9____9CE2EE20_11E4_4D93_9F2A_C5B20F77791F', 'tab_3___tab_3_section_1', 'tab_webroles___tab_4_section_1'],
				grid: ['grid_webroles', 'publishing_states'],
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
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Right */
			mspp_right: DevKit.Controls.OptionSet;
			/** All child web files directly related to this web page will be excluded from security validation. This does not exclude the children's descendants. */
			mspp_scope: DevKit.Controls.OptionSet;
			/** Unique identifier for Web Page associated with Web Page Access Control Rule. */
			mspp_webpageid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Web Page Access Control Rule. */
			mspp_websiteid: DevKit.Controls.Lookup;
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
			/** Web Roles */
			grid_webroles: DevKit.Controls.Grid;
			/** Publishing States */
			publishing_states: DevKit.Controls.Grid;
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
	 * Usage: new mspp_webpageaccesscontrolrule.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_webpageaccesscontrolrule Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_description', 'mspp_name', 'mspp_right', 'mspp_scope', 'mspp_webpageid', 'mspp_websiteid'],
				header: [],
				tab: ['{300b9bf7-0715-4ae2-8c50-a8c82541e3a9}___{9ce2ee20-11e4-4d93-9f2a-c5b20f77791f}', 'tab_3___tab_3_section_1', 'tab_webroles___tab_4_section_1'],
				grid: ['grid_webroles', 'publishing_states'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

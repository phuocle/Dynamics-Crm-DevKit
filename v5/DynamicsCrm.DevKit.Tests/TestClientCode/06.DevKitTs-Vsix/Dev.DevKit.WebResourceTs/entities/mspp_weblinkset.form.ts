/**
 * mspp_weblinkset.form.ts - mspp_weblinkset Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_weblinkset containing form classes: mspp_weblinkset.FormClassName
 * 3. Aggregate Form class: mspp_weblinkset.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_weblinkset {

	// ========================================================================
	// Form: mspp_weblinkset_Information
	// ========================================================================

	export namespace mspp_weblinkset_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Copy */
			mspp_copy: DevKit.Controls.Memo;
			/** Copy */
			mspp_copy1: DevKit.Controls.Memo;
			/** Stores the label that is shown on the user interface (UI) in the data editing mode. */
			mspp_display_name: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Publishing State associated with Web Link Set. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			/** Title */
			mspp_title: DevKit.Controls.String;
			/** Unique identifier for Website associated with Web Link Set. */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** Optional language to associate with web link sets for language-specific primary navigation */
			mspp_websitelanguageid: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_8C794036_9DC7_4C14_B3F1_705DA097C5EFTabSections {
			/** General */
			_0907E05B_70C7_4463_80BD_ED65C2911934: DevKit.Controls.Section;
			/** Copy (HTML) */
			mspp_weblinkset_description_monacoEditor: DevKit.Controls.Section;
		}

		export interface Itab_3TabSections {
			/** Section */
			tab_3_section_1: DevKit.Controls.Section;
		}

		export interface Itab_4TabSections {
			/** Section */
			tab_4_section_1: DevKit.Controls.Section;
		}

		/** General */
		export interface I_8C794036_9DC7_4C14_B3F1_705DA097C5EFTab extends DevKit.Controls.ITab {
			Section: I_8C794036_9DC7_4C14_B3F1_705DA097C5EFTabSections;
		}

		/** Links */
		export interface Itab_3Tab extends DevKit.Controls.ITab {
			Section: Itab_3TabSections;
		}

		/** Web Pages (Navigation) */
		export interface Itab_4Tab extends DevKit.Controls.ITab {
			Section: Itab_4TabSections;
		}

		export interface ITabs {
			/** General */
			_8C794036_9DC7_4C14_B3F1_705DA097C5EF: I_8C794036_9DC7_4C14_B3F1_705DA097C5EFTab;
			/** Links */
			tab_3: Itab_3Tab;
			/** Web Pages (Navigation) */
			tab_4: Itab_4Tab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Web Pages (Navigation) */
			grid_webpages: DevKit.Controls.Grid;
			/** Web Links (Web Link Set) */
			weblinkset: DevKit.Controls.Grid;
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
	 * mspp_weblinkset_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_weblinkset.mspp_weblinkset_Information(executionContext)
	 */
	export class mspp_weblinkset_Information extends FormBase<mspp_weblinkset_Information.IBody, mspp_weblinkset_Information.IHeader, mspp_weblinkset_Information.IGrid, mspp_weblinkset_Information.INavigation, mspp_weblinkset_Information.IQuickForm, mspp_weblinkset_Information.IProcess, mspp_weblinkset_Information.IDialog> {
		/**
		 * Creates a mspp_weblinkset_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_copy', 'mspp_copy1', 'mspp_display_name', 'mspp_name', 'mspp_publishingstateid', 'mspp_title', 'mspp_websiteid', 'mspp_websitelanguageid'],
				header: [],
				tab: ['_8C794036_9DC7_4C14_B3F1_705DA097C5EF____0907E05B_70C7_4463_80BD_ED65C2911934', '_8C794036_9DC7_4C14_B3F1_705DA097C5EF___mspp_weblinkset_description_monacoEditor', 'tab_3___tab_3_section_1', 'tab_4___tab_4_section_1'],
				grid: ['grid_webpages', 'weblinkset'],
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
			/** Copy */
			mspp_copy: DevKit.Controls.Memo;
			/** Copy */
			mspp_copy1: DevKit.Controls.Memo;
			/** Stores the label that is shown on the user interface (UI) in the data editing mode. */
			mspp_display_name: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Publishing State associated with Web Link Set. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			/** Title */
			mspp_title: DevKit.Controls.String;
			/** Unique identifier for Website associated with Web Link Set. */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** Optional language to associate with web link sets for language-specific primary navigation */
			mspp_websitelanguageid: DevKit.Controls.Lookup;
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
			/** Web Pages (Navigation) */
			grid_webpages: DevKit.Controls.Grid;
			/** Web Links (Web Link Set) */
			weblinkset: DevKit.Controls.Grid;
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
	 * Usage: new mspp_weblinkset.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_weblinkset Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_copy', 'mspp_copy1', 'mspp_display_name', 'mspp_name', 'mspp_publishingstateid', 'mspp_title', 'mspp_websiteid', 'mspp_websitelanguageid'],
				header: [],
				tab: ['{8c794036-9dc7-4c14-b3f1-705da097c5ef}___{0907e05b-70c7-4463-80bd-ed65c2911934}', '{8c794036-9dc7-4c14-b3f1-705da097c5ef}___mspp_weblinkset_description_monacoEditor', 'tab_3___tab_3_section_1', 'tab_4___tab_4_section_1'],
				grid: ['grid_webpages', 'weblinkset'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

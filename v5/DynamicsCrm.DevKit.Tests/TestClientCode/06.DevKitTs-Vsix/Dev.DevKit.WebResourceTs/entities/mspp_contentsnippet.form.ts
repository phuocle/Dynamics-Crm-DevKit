/**
 * mspp_contentsnippet.form.ts - mspp_contentsnippet Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_contentsnippet containing form classes: mspp_contentsnippet.FormClassName
 * 3. Aggregate Form class: mspp_contentsnippet.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_contentsnippet {

	// ========================================================================
	// Form: mspp_contentsnippet_Information
	// ========================================================================

	export namespace mspp_contentsnippet_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Option to make content snippets language specific */
			mspp_contentsnippetlanguageid: DevKit.Controls.Lookup;
			/** Stores the label that is shown on the user interface (UI) in the data editing mode. */
			mspp_display_name: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Type */
			mspp_type: DevKit.Controls.OptionSet;
			/** Value */
			mspp_value: DevKit.Controls.Memo;
			/** Value */
			mspp_value1: DevKit.Controls.Memo;
			/** Unique identifier for Website associated with Content Snippet. */
			mspp_websiteid: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface Imspp_contentsnippet_generalTabSections {
			/** HTML */
			mspp_contentsnippet_html_section: DevKit.Controls.Section;
			/** Text */
			mspp_contentsnippet_text_section: DevKit.Controls.Section;
		}

		/** General */
		export interface Imspp_contentsnippet_generalTab extends DevKit.Controls.ITab {
			Section: Imspp_contentsnippet_generalTabSections;
		}

		export interface ITabs {
			/** General */
			mspp_contentsnippet_general: Imspp_contentsnippet_generalTab;
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
	 * mspp_contentsnippet_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_contentsnippet.mspp_contentsnippet_Information(executionContext)
	 */
	export class mspp_contentsnippet_Information extends FormBase<mspp_contentsnippet_Information.IBody, mspp_contentsnippet_Information.IHeader, mspp_contentsnippet_Information.IGrid, mspp_contentsnippet_Information.INavigation, mspp_contentsnippet_Information.IQuickForm, mspp_contentsnippet_Information.IProcess, mspp_contentsnippet_Information.IDialog> {
		/**
		 * Creates a mspp_contentsnippet_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_contentsnippetlanguageid', 'mspp_display_name', 'mspp_name', 'mspp_type', 'mspp_value', 'mspp_value1', 'mspp_websiteid'],
				header: [],
				tab: ['mspp_contentsnippet_general___mspp_contentsnippet_html_section', 'mspp_contentsnippet_general___mspp_contentsnippet_text_section'],
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
			/** Option to make content snippets language specific */
			mspp_contentsnippetlanguageid: DevKit.Controls.Lookup;
			/** Stores the label that is shown on the user interface (UI) in the data editing mode. */
			mspp_display_name: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Type */
			mspp_type: DevKit.Controls.OptionSet;
			/** Value */
			mspp_value: DevKit.Controls.Memo;
			/** Value */
			mspp_value1: DevKit.Controls.Memo;
			/** Unique identifier for Website associated with Content Snippet. */
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
	 * Usage: new mspp_contentsnippet.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_contentsnippet Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_contentsnippetlanguageid', 'mspp_display_name', 'mspp_name', 'mspp_type', 'mspp_value', 'mspp_value1', 'mspp_websiteid'],
				header: [],
				tab: ['mspp_contentsnippet_general___mspp_contentsnippet_html_section', 'mspp_contentsnippet_general___mspp_contentsnippet_text_section'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

/**
 * mspp_websiteaccess.form.ts - mspp_websiteaccess Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_websiteaccess containing form classes: mspp_websiteaccess.FormClassName
 * 3. Aggregate Form class: mspp_websiteaccess.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_websiteaccess {

	// ========================================================================
	// Form: mspp_websiteaccess_Information
	// ========================================================================

	export namespace mspp_websiteaccess_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Manage Content Snippets */
			mspp_managecontentsnippets: DevKit.Controls.Boolean;
			/** Manage Site Markers */
			mspp_managesitemarkers: DevKit.Controls.Boolean;
			/** Manage Web Link Sets */
			mspp_manageweblinksets: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Preview Unpublished Entities */
			mspp_previewunpublishedentities: DevKit.Controls.Boolean;
			/** Unique identifier for Website associated with Website Access. */
			mspp_websiteid: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface Itab_webrolesTabSections {
			/** Section */
			tab_3_section_1: DevKit.Controls.Section;
		}

		/** Web Roles */
		export interface Itab_webrolesTab extends DevKit.Controls.ITab {
			Section: Itab_webrolesTabSections;
		}

		export interface ITabs {
			/** Web Roles */
			tab_webroles: Itab_webrolesTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			grid_webroles: DevKit.Controls.Grid;
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
	 * mspp_websiteaccess_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_websiteaccess.mspp_websiteaccess_Information(executionContext)
	 */
	export class mspp_websiteaccess_Information extends FormBase<mspp_websiteaccess_Information.IBody, mspp_websiteaccess_Information.IHeader, mspp_websiteaccess_Information.IGrid, mspp_websiteaccess_Information.INavigation, mspp_websiteaccess_Information.IQuickForm, mspp_websiteaccess_Information.IProcess, mspp_websiteaccess_Information.IDialog> {
		/**
		 * Creates a mspp_websiteaccess_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_managecontentsnippets', 'mspp_managesitemarkers', 'mspp_manageweblinksets', 'mspp_name', 'mspp_previewunpublishedentities', 'mspp_websiteid'],
				header: [],
				tab: ['tab_webroles___tab_3_section_1'],
				grid: ['grid_webroles'],
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
			/** Manage Content Snippets */
			mspp_managecontentsnippets: DevKit.Controls.Boolean;
			/** Manage Site Markers */
			mspp_managesitemarkers: DevKit.Controls.Boolean;
			/** Manage Web Link Sets */
			mspp_manageweblinksets: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Preview Unpublished Entities */
			mspp_previewunpublishedentities: DevKit.Controls.Boolean;
			/** Unique identifier for Website associated with Website Access. */
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
			grid_webroles: DevKit.Controls.Grid;
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
	 * Usage: new mspp_websiteaccess.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_websiteaccess Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_managecontentsnippets', 'mspp_managesitemarkers', 'mspp_manageweblinksets', 'mspp_name', 'mspp_previewunpublishedentities', 'mspp_websiteid'],
				header: [],
				tab: ['tab_webroles___tab_3_section_1'],
				grid: ['grid_webroles'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

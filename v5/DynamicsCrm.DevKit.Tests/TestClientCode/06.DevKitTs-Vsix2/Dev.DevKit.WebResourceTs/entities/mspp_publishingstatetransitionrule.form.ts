/**
 * mspp_publishingstatetransitionrule.form.ts - mspp_publishingstatetransitionrule Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_publishingstatetransitionrule containing form classes: mspp_publishingstatetransitionrule.FormClassName
 * 3. Aggregate Form class: mspp_publishingstatetransitionrule.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_publishingstatetransitionrule {

	// ========================================================================
	// Form: mspp_publishingstatetransitionrule_Information
	// ========================================================================

	export namespace mspp_publishingstatetransitionrule_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier for Publishing State associated with Publishing State Transition Rule. */
			mspp_fromstate_publishingstateid: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Publishing State associated with Publishing State Transition Rule. */
			mspp_tostate_publishingstateid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Publishing State Transition Rule. */
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
			tab_4_section_1: DevKit.Controls.Section;
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
			/** Web Roles */
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
	 * mspp_publishingstatetransitionrule_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_publishingstatetransitionrule.mspp_publishingstatetransitionrule_Information(executionContext)
	 */
	export class mspp_publishingstatetransitionrule_Information extends FormBase<mspp_publishingstatetransitionrule_Information.IBody, mspp_publishingstatetransitionrule_Information.IHeader, mspp_publishingstatetransitionrule_Information.IGrid, mspp_publishingstatetransitionrule_Information.INavigation, mspp_publishingstatetransitionrule_Information.IQuickForm, mspp_publishingstatetransitionrule_Information.IProcess, mspp_publishingstatetransitionrule_Information.IDialog> {
		/**
		 * Creates a mspp_publishingstatetransitionrule_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_fromstate_publishingstateid', 'mspp_name', 'mspp_tostate_publishingstateid', 'mspp_websiteid'],
				header: [],
				tab: ['tab_webroles___tab_4_section_1'],
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
			/** Unique identifier for Publishing State associated with Publishing State Transition Rule. */
			mspp_fromstate_publishingstateid: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Publishing State associated with Publishing State Transition Rule. */
			mspp_tostate_publishingstateid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Publishing State Transition Rule. */
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
	 * Usage: new mspp_publishingstatetransitionrule.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_publishingstatetransitionrule Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_fromstate_publishingstateid', 'mspp_name', 'mspp_tostate_publishingstateid', 'mspp_websiteid'],
				header: [],
				tab: ['tab_webroles___tab_4_section_1'],
				grid: ['grid_webroles'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

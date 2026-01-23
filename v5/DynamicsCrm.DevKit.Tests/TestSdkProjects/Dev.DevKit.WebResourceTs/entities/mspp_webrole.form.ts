/**
 * mspp_webrole.form.ts - mspp_webrole Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_webrole containing form classes: mspp_webrole.FormClassName
 * 3. Aggregate Form class: mspp_webrole.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_webrole {

	// ========================================================================
	// Form: mspp_webrole_Information
	// ========================================================================

	export namespace mspp_webrole_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Anonymous Users Role */
			mspp_anonymoususersrole: DevKit.Controls.Boolean;
			/** Authenticated Users Role */
			mspp_authenticatedusersrole: DevKit.Controls.Boolean;
			/** Description */
			mspp_description: DevKit.Controls.Memo;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Website associated with Web Role. */
			mspp_websiteid: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_DF9D451B_B910_4EF5_BB24_EA08E5441AD5TabSections {
			/** General */
			_5E67BE2F_D70F_47BE_B2BE_4AAA15B945C8: DevKit.Controls.Section;
		}

		/** General */
		export interface I_DF9D451B_B910_4EF5_BB24_EA08E5441AD5Tab extends DevKit.Controls.ITab {
			Section: I_DF9D451B_B910_4EF5_BB24_EA08E5441AD5TabSections;
		}

		export interface ITabs {
			/** General */
			_DF9D451B_B910_4EF5_BB24_EA08E5441AD5: I_DF9D451B_B910_4EF5_BB24_EA08E5441AD5Tab;
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
	 * mspp_webrole_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_webrole.mspp_webrole_Information(executionContext)
	 */
	export class mspp_webrole_Information extends FormBase<mspp_webrole_Information.IBody, mspp_webrole_Information.IHeader, mspp_webrole_Information.IGrid, mspp_webrole_Information.INavigation, mspp_webrole_Information.IQuickForm, mspp_webrole_Information.IProcess, mspp_webrole_Information.IDialog> {
		/**
		 * Creates a mspp_webrole_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_anonymoususersrole', 'mspp_authenticatedusersrole', 'mspp_description', 'mspp_name', 'mspp_websiteid'],
				header: [],
				tab: ['_DF9D451B_B910_4EF5_BB24_EA08E5441AD5____5E67BE2F_D70F_47BE_B2BE_4AAA15B945C8'],
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
			/** Anonymous Users Role */
			mspp_anonymoususersrole: DevKit.Controls.Boolean;
			/** Authenticated Users Role */
			mspp_authenticatedusersrole: DevKit.Controls.Boolean;
			/** Description */
			mspp_description: DevKit.Controls.Memo;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Website associated with Web Role. */
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
	 * Usage: new mspp_webrole.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_webrole Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_anonymoususersrole', 'mspp_authenticatedusersrole', 'mspp_description', 'mspp_name', 'mspp_websiteid'],
				header: [],
				tab: ['{df9d451b-b910-4ef5-bb24-ea08e5441ad5}___{5e67be2f-d70f-47be-b2be-4aaa15b945c8}'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

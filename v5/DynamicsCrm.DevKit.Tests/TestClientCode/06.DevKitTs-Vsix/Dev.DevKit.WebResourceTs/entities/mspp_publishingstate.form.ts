/**
 * mspp_publishingstate.form.ts - mspp_publishingstate Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_publishingstate containing form classes: mspp_publishingstate.FormClassName
 * 3. Aggregate Form class: mspp_publishingstate.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_publishingstate {

	// ========================================================================
	// Form: mspp_publishingstate_Information
	// ========================================================================

	export namespace mspp_publishingstate_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Display Order */
			mspp_displayorder: DevKit.Controls.Integer;
			/** Is Default */
			mspp_isdefault: DevKit.Controls.Boolean;
			/** Select whether the publishing state is visible. */
			mspp_isvisible: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Website associated with Publishing State. */
			mspp_websiteid: DevKit.Controls.Lookup;
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
	 * mspp_publishingstate_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_publishingstate.mspp_publishingstate_Information(executionContext)
	 */
	export class mspp_publishingstate_Information extends FormBase<mspp_publishingstate_Information.IBody, mspp_publishingstate_Information.IHeader, mspp_publishingstate_Information.IGrid, mspp_publishingstate_Information.INavigation, mspp_publishingstate_Information.IQuickForm, mspp_publishingstate_Information.IProcess, mspp_publishingstate_Information.IDialog> {
		/**
		 * Creates a mspp_publishingstate_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_displayorder', 'mspp_isdefault', 'mspp_isvisible', 'mspp_name', 'mspp_websiteid'],
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
			/** Display Order */
			mspp_displayorder: DevKit.Controls.Integer;
			/** Is Default */
			mspp_isdefault: DevKit.Controls.Boolean;
			/** Select whether the publishing state is visible. */
			mspp_isvisible: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Website associated with Publishing State. */
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
	 * Usage: new mspp_publishingstate.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_publishingstate Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_displayorder', 'mspp_isdefault', 'mspp_isvisible', 'mspp_name', 'mspp_websiteid'],
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

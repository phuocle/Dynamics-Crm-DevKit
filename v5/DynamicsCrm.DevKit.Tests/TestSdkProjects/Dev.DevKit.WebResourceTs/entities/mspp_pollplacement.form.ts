/**
 * mspp_pollplacement.form.ts - mspp_pollplacement Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_pollplacement containing form classes: mspp_pollplacement.FormClassName
 * 3. Aggregate Form class: mspp_pollplacement.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_pollplacement {

	// ========================================================================
	// Form: mspp_pollplacement_Information
	// ========================================================================

	export namespace mspp_pollplacement_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Website associated with Poll Placement. */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** Unique identifier for Web Template associated with Poll Placement. */
			mspp_webtemplateid: DevKit.Controls.Lookup;
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
	 * mspp_pollplacement_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_pollplacement.mspp_pollplacement_Information(executionContext)
	 */
	export class mspp_pollplacement_Information extends FormBase<mspp_pollplacement_Information.IBody, mspp_pollplacement_Information.IHeader, mspp_pollplacement_Information.IGrid, mspp_pollplacement_Information.INavigation, mspp_pollplacement_Information.IQuickForm, mspp_pollplacement_Information.IProcess, mspp_pollplacement_Information.IDialog> {
		/**
		 * Creates a mspp_pollplacement_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_name', 'mspp_websiteid', 'mspp_webtemplateid'],
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
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Website associated with Poll Placement. */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** Unique identifier for Web Template associated with Poll Placement. */
			mspp_webtemplateid: DevKit.Controls.Lookup;
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
	 * Usage: new mspp_pollplacement.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_pollplacement Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_name', 'mspp_websiteid', 'mspp_webtemplateid'],
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

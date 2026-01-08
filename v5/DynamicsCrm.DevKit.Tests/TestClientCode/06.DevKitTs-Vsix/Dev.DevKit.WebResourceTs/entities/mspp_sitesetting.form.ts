/**
 * mspp_sitesetting.form.ts - mspp_sitesetting Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_sitesetting containing form classes: mspp_sitesetting.FormClassName
 * 3. Aggregate Form class: mspp_sitesetting.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_sitesetting {

	// ========================================================================
	// Form: mspp_sitesetting_Information
	// ========================================================================

	export namespace mspp_sitesetting_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Description */
			mspp_description: DevKit.Controls.Memo;
			/** Environment Variable */
			mspp_environmentvariable: DevKit.Controls.Lookup;
			/** Environment Variable Schema Name */
			mspp_envvar_schema: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Source from value is taken */
			mspp_source: DevKit.Controls.OptionSet;
			/** Value */
			mspp_value: DevKit.Controls.String;
			/** Unique identifier for Website associated with Site Setting. */
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
	 * mspp_sitesetting_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_sitesetting.mspp_sitesetting_Information(executionContext)
	 */
	export class mspp_sitesetting_Information extends FormBase<mspp_sitesetting_Information.IBody, mspp_sitesetting_Information.IHeader, mspp_sitesetting_Information.IGrid, mspp_sitesetting_Information.INavigation, mspp_sitesetting_Information.IQuickForm, mspp_sitesetting_Information.IProcess, mspp_sitesetting_Information.IDialog> {
		/**
		 * Creates a mspp_sitesetting_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_description', 'mspp_environmentvariable', 'mspp_envvar_schema', 'mspp_name', 'mspp_source', 'mspp_value', 'mspp_websiteid'],
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
			/** Description */
			mspp_description: DevKit.Controls.Memo;
			/** Environment Variable */
			mspp_environmentvariable: DevKit.Controls.Lookup;
			/** Environment Variable Schema Name */
			mspp_envvar_schema: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Source from value is taken */
			mspp_source: DevKit.Controls.OptionSet;
			/** Value */
			mspp_value: DevKit.Controls.String;
			/** Unique identifier for Website associated with Site Setting. */
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
	 * Usage: new mspp_sitesetting.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_sitesetting Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_description', 'mspp_environmentvariable', 'mspp_envvar_schema', 'mspp_name', 'mspp_source', 'mspp_value', 'mspp_websiteid'],
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

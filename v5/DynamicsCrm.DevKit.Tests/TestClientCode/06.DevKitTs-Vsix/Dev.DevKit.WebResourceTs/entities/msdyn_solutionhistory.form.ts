/**
 * msdyn_solutionhistory.form.ts - msdyn_solutionhistory Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_solutionhistory containing form classes: msdyn_solutionhistory.FormClassName
 * 3. Aggregate Form class: msdyn_solutionhistory.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_solutionhistory {

	// ========================================================================
	// Form: msdyn_solutionhistory_Information
	// ========================================================================

	export namespace msdyn_solutionhistory_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Error Code */
			msdyn_errorcode: DevKit.Controls.String;
			/** Exception Message */
			msdyn_exceptionmessage: DevKit.Controls.Memo;
			/** Managed */
			msdyn_ismanaged: DevKit.Controls.Boolean;
			/** Overwrite Customizations */
			msdyn_isoverwritecustomizations: DevKit.Controls.Boolean;
			/** Patch */
			msdyn_ispatch: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Operation */
			msdyn_operation: DevKit.Controls.OptionSet;
			/** Publisher Name */
			msdyn_publishername: DevKit.Controls.String;
			/** Solution Version */
			msdyn_solutionversion: DevKit.Controls.String;
			/** Suboperation */
			msdyn_suboperation: DevKit.Controls.OptionSet;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** End Time */
			msdyn_endtime: DevKit.Controls.DateTime;
			/** Result */
			msdyn_result: DevKit.Controls.Boolean;
			/** Start Time */
			msdyn_starttime: DevKit.Controls.DateTime;
			/** Total Time (seconds) */
			msdyn_totaltime: DevKit.Controls.Integer;
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
	 * msdyn_solutionhistory_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_solutionhistory.msdyn_solutionhistory_Information(executionContext)
	 */
	export class msdyn_solutionhistory_Information extends FormBase<msdyn_solutionhistory_Information.IBody, msdyn_solutionhistory_Information.IHeader, msdyn_solutionhistory_Information.IGrid, msdyn_solutionhistory_Information.INavigation, msdyn_solutionhistory_Information.IQuickForm, msdyn_solutionhistory_Information.IProcess, msdyn_solutionhistory_Information.IDialog> {
		/**
		 * Creates a msdyn_solutionhistory_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_errorcode', 'msdyn_exceptionmessage', 'msdyn_ismanaged', 'msdyn_isoverwritecustomizations', 'msdyn_ispatch', 'msdyn_name', 'msdyn_operation', 'msdyn_publishername', 'msdyn_solutionversion', 'msdyn_suboperation'],
				header: ['msdyn_endtime', 'msdyn_result', 'msdyn_starttime', 'msdyn_totaltime'],
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
			/** Error Code */
			msdyn_errorcode: DevKit.Controls.String;
			/** Exception Message */
			msdyn_exceptionmessage: DevKit.Controls.Memo;
			/** Managed */
			msdyn_ismanaged: DevKit.Controls.Boolean;
			/** Overwrite Customizations */
			msdyn_isoverwritecustomizations: DevKit.Controls.Boolean;
			/** Patch */
			msdyn_ispatch: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Operation */
			msdyn_operation: DevKit.Controls.OptionSet;
			/** Publisher Name */
			msdyn_publishername: DevKit.Controls.String;
			/** Solution Version */
			msdyn_solutionversion: DevKit.Controls.String;
			/** Suboperation */
			msdyn_suboperation: DevKit.Controls.OptionSet;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** End Time */
			msdyn_endtime: DevKit.Controls.DateTime;
			/** Result */
			msdyn_result: DevKit.Controls.Boolean;
			/** Start Time */
			msdyn_starttime: DevKit.Controls.DateTime;
			/** Total Time (seconds) */
			msdyn_totaltime: DevKit.Controls.Integer;
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
	 * Usage: new msdyn_solutionhistory.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_solutionhistory Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_errorcode', 'msdyn_exceptionmessage', 'msdyn_ismanaged', 'msdyn_isoverwritecustomizations', 'msdyn_ispatch', 'msdyn_name', 'msdyn_operation', 'msdyn_publishername', 'msdyn_solutionversion', 'msdyn_suboperation'],
				header: ['msdyn_endtime', 'msdyn_result', 'msdyn_starttime', 'msdyn_totaltime'],
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

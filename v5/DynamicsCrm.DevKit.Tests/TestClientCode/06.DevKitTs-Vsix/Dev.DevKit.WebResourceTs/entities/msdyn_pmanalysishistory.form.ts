/**
 * msdyn_pmanalysishistory.form.ts - msdyn_pmanalysishistory Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_pmanalysishistory containing form classes: msdyn_pmanalysishistory.FormClassName
 * 3. Aggregate Form class: msdyn_pmanalysishistory.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_pmanalysishistory {

	// ========================================================================
	// Form: msdyn_pmanalysishistory_Information
	// ========================================================================

	export namespace msdyn_pmanalysishistory_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Analysis Result */
			msdyn_analysisresult: DevKit.Controls.OptionSet;
			/** Analysis Type */
			msdyn_analysistype: DevKit.Controls.OptionSet;
			/** Last Errors */
			msdyn_lasterrors: DevKit.Controls.Memo;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Parent Task */
			msdyn_parenttask: DevKit.Controls.Lookup;
			/** Start Time */
			msdyn_starttime: DevKit.Controls.DateOnly;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the PM Analysis History */
			statecode: DevKit.Controls.OptionSet;
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
	 * msdyn_pmanalysishistory_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_pmanalysishistory.msdyn_pmanalysishistory_Information(executionContext)
	 */
	export class msdyn_pmanalysishistory_Information extends FormBase<msdyn_pmanalysishistory_Information.IBody, msdyn_pmanalysishistory_Information.IHeader, msdyn_pmanalysishistory_Information.IGrid, msdyn_pmanalysishistory_Information.INavigation, msdyn_pmanalysishistory_Information.IQuickForm, msdyn_pmanalysishistory_Information.IProcess, msdyn_pmanalysishistory_Information.IDialog> {
		/**
		 * Creates a msdyn_pmanalysishistory_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_analysisresult', 'msdyn_analysistype', 'msdyn_lasterrors', 'msdyn_name', 'msdyn_parenttask', 'msdyn_starttime', 'OwnerId', 'statecode'],
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
			/** Analysis Result */
			msdyn_analysisresult: DevKit.Controls.OptionSet;
			/** Analysis Type */
			msdyn_analysistype: DevKit.Controls.OptionSet;
			/** Last Errors */
			msdyn_lasterrors: DevKit.Controls.Memo;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Parent Task */
			msdyn_parenttask: DevKit.Controls.Lookup;
			/** Start Time */
			msdyn_starttime: DevKit.Controls.DateOnly;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the PM Analysis History */
			statecode: DevKit.Controls.OptionSet;
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
	 * Usage: new msdyn_pmanalysishistory.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_pmanalysishistory Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_analysisresult', 'msdyn_analysistype', 'msdyn_lasterrors', 'msdyn_name', 'msdyn_parenttask', 'msdyn_starttime', 'OwnerId', 'statecode'],
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

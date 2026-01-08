/**
 * msdyn_pmsimulation.form.ts - msdyn_pmsimulation Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_pmsimulation containing form classes: msdyn_pmsimulation.FormClassName
 * 3. Aggregate Form class: msdyn_pmsimulation.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_pmsimulation {

	// ========================================================================
	// Form: msdyn_pmsimulation_Information
	// ========================================================================

	export namespace msdyn_pmsimulation_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Description of custom entity. */
			msdyn_description: DevKit.Controls.Memo;
			/** The end of the simulation. */
			msdyn_end: DevKit.Controls.DateTime;
			/** Indicates if the simulation log will be generated during the simulation. */
			msdyn_generatelog: DevKit.Controls.Boolean;
			/** The name of custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The Guid of PSE simulation. */
			msdyn_psesimulationid: DevKit.Controls.String;
			/** The result of simulation. */
			msdyn_result: DevKit.Controls.Memo;
			/** The settings of simulation. */
			msdyn_setting: DevKit.Controls.Memo;
			/** The start of simulation. */
			msdyn_start: DevKit.Controls.DateTime;
			/** The state of simulation. */
			msdyn_state: DevKit.Controls.OptionSet;
			/** The version number of entity. */
			msdyn_version: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
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
	 * msdyn_pmsimulation_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_pmsimulation.msdyn_pmsimulation_Information(executionContext)
	 */
	export class msdyn_pmsimulation_Information extends FormBase<msdyn_pmsimulation_Information.IBody, msdyn_pmsimulation_Information.IHeader, msdyn_pmsimulation_Information.IGrid, msdyn_pmsimulation_Information.INavigation, msdyn_pmsimulation_Information.IQuickForm, msdyn_pmsimulation_Information.IProcess, msdyn_pmsimulation_Information.IDialog> {
		/**
		 * Creates a msdyn_pmsimulation_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_description', 'msdyn_end', 'msdyn_generatelog', 'msdyn_name', 'msdyn_psesimulationid', 'msdyn_result', 'msdyn_setting', 'msdyn_start', 'msdyn_state', 'msdyn_version', 'OwnerId'],
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
			/** Description of custom entity. */
			msdyn_description: DevKit.Controls.Memo;
			/** The end of the simulation. */
			msdyn_end: DevKit.Controls.DateTime;
			/** Indicates if the simulation log will be generated during the simulation. */
			msdyn_generatelog: DevKit.Controls.Boolean;
			/** The name of custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The Guid of PSE simulation. */
			msdyn_psesimulationid: DevKit.Controls.String;
			/** The result of simulation. */
			msdyn_result: DevKit.Controls.Memo;
			/** The settings of simulation. */
			msdyn_setting: DevKit.Controls.Memo;
			/** The start of simulation. */
			msdyn_start: DevKit.Controls.DateTime;
			/** The state of simulation. */
			msdyn_state: DevKit.Controls.OptionSet;
			/** The version number of entity. */
			msdyn_version: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
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
	 * Usage: new msdyn_pmsimulation.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_pmsimulation Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_description', 'msdyn_end', 'msdyn_generatelog', 'msdyn_name', 'msdyn_psesimulationid', 'msdyn_result', 'msdyn_setting', 'msdyn_start', 'msdyn_state', 'msdyn_version', 'OwnerId'],
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

/**
 * msdyn_pmprocesstemplate.form.ts - msdyn_pmprocesstemplate Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_pmprocesstemplate containing form classes: msdyn_pmprocesstemplate.FormClassName
 * 3. Aggregate Form class: msdyn_pmprocesstemplate.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_pmprocesstemplate {

	// ========================================================================
	// Form: msdyn_pmprocesstemplate_Information
	// ========================================================================

	export namespace msdyn_pmprocesstemplate_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** PM Inferred Task Id */
			msdyn_pminferredtaskid: DevKit.Controls.Lookup;
			/** Process Dataflow Configuration */
			msdyn_processdataflowconfig: DevKit.Controls.Memo;
			/** Unique identifier for a process template */
			msdyn_processmashupscript: DevKit.Controls.Memo;
			/** Process Mining Metadata Configuration */
			msdyn_processminingmetadataconfig: DevKit.Controls.Memo;
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
	 * msdyn_pmprocesstemplate_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_pmprocesstemplate.msdyn_pmprocesstemplate_Information(executionContext)
	 */
	export class msdyn_pmprocesstemplate_Information extends FormBase<msdyn_pmprocesstemplate_Information.IBody, msdyn_pmprocesstemplate_Information.IHeader, msdyn_pmprocesstemplate_Information.IGrid, msdyn_pmprocesstemplate_Information.INavigation, msdyn_pmprocesstemplate_Information.IQuickForm, msdyn_pmprocesstemplate_Information.IProcess, msdyn_pmprocesstemplate_Information.IDialog> {
		/**
		 * Creates a msdyn_pmprocesstemplate_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_name', 'msdyn_pminferredtaskid', 'msdyn_processdataflowconfig', 'msdyn_processmashupscript', 'msdyn_processminingmetadataconfig', 'OwnerId'],
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
			msdyn_name: DevKit.Controls.String;
			/** PM Inferred Task Id */
			msdyn_pminferredtaskid: DevKit.Controls.Lookup;
			/** Process Dataflow Configuration */
			msdyn_processdataflowconfig: DevKit.Controls.Memo;
			/** Unique identifier for a process template */
			msdyn_processmashupscript: DevKit.Controls.Memo;
			/** Process Mining Metadata Configuration */
			msdyn_processminingmetadataconfig: DevKit.Controls.Memo;
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
	 * Usage: new msdyn_pmprocesstemplate.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_pmprocesstemplate Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_name', 'msdyn_pminferredtaskid', 'msdyn_processdataflowconfig', 'msdyn_processmashupscript', 'msdyn_processminingmetadataconfig', 'OwnerId'],
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

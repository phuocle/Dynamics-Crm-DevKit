/**
 * Workflow.form.ts - Workflow Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Workflow containing form classes: Workflow.FormClassName
 * 3. Aggregate Form class: Workflow.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Workflow {

	// ========================================================================
	// Form: Workflow_Information
	// ========================================================================

	export namespace Workflow_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Description of the process. */
			Description: DevKit.Controls.Memo;
			/** Name of the process. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the user or team who owns the process. */
			OwnerId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface InotesTabSections {
			/** Notes */
			notes: DevKit.Controls.Section;
		}

		/** Notes */
		export interface InotesTab extends DevKit.Controls.ITab {
			Section: InotesTabSections;
		}

		export interface ITabs {
			/** Notes */
			notes: InotesTab;
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
	 * Workflow_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new Workflow.Workflow_Information(executionContext)
	 */
	export class Workflow_Information extends FormBase<Workflow_Information.IBody, Workflow_Information.IHeader, Workflow_Information.IGrid, Workflow_Information.INavigation, Workflow_Information.IQuickForm, Workflow_Information.IProcess, Workflow_Information.IDialog> {
		/**
		 * Creates a Workflow_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'Name', 'notescontrol', 'OwnerId'],
				header: [],
				tab: ['notes___notes'],
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
			/** Description of the process. */
			Description: DevKit.Controls.Memo;
			/** Name of the process. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the user or team who owns the process. */
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
	 * Usage: new Workflow.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Workflow Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'Name', 'notescontrol', 'OwnerId'],
				header: [],
				tab: ['notes___notes'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

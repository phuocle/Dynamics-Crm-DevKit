/**
 * PrivilegeCheckerRun.form.ts - PrivilegeCheckerRun Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace PrivilegeCheckerRun containing form classes: PrivilegeCheckerRun.FormClassName
 * 3. Aggregate Form class: PrivilegeCheckerRun.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace PrivilegeCheckerRun {

	// ========================================================================
	// Form: Privilege_Checker_Run_main_form
	// ========================================================================

	export namespace Privilege_Checker_Run_main_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Name */
			Name: DevKit.Controls.String;
			/** User who privilege checker tool is tracing. */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the Privilege Checker Run */
			statuscode: DevKit.Controls.OptionSet;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface INew_TabTabSections {
			/** New Section */
			New_Section: DevKit.Controls.Section;
		}

		/** New Tab */
		export interface INew_TabTab extends DevKit.Controls.ITab {
			Section: INew_TabTabSections;
		}

		export interface ITabs {
			/** New Tab */
			New_Tab: INew_TabTab;
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
	 * Privilege_Checker_Run_main_form Form class
	 * Provides typed access to all form controls
	 * Usage: new PrivilegeCheckerRun.Privilege_Checker_Run_main_form(executionContext)
	 */
	export class Privilege_Checker_Run_main_form extends FormBase<Privilege_Checker_Run_main_form.IBody, Privilege_Checker_Run_main_form.IHeader, Privilege_Checker_Run_main_form.IGrid, Privilege_Checker_Run_main_form.INavigation, Privilege_Checker_Run_main_form.IQuickForm, Privilege_Checker_Run_main_form.IProcess, Privilege_Checker_Run_main_form.IDialog> {
		/**
		 * Creates a Privilege_Checker_Run_main_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Name', 'OwnerId', 'statuscode'],
				header: [],
				tab: ['New_Tab___New_Section'],
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
			/** Name */
			Name: DevKit.Controls.String;
			/** User who privilege checker tool is tracing. */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the Privilege Checker Run */
			statuscode: DevKit.Controls.OptionSet;
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
	 * Usage: new PrivilegeCheckerRun.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate PrivilegeCheckerRun Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Name', 'OwnerId', 'statuscode'],
				header: [],
				tab: ['New Tab___New Section'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

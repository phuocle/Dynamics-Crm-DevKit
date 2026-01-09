/**
 * msdyn_solutionhealthruleset.form.ts - msdyn_solutionhealthruleset Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_solutionhealthruleset containing form classes: msdyn_solutionhealthruleset.FormClassName
 * 3. Aggregate Form class: msdyn_solutionhealthruleset.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_solutionhealthruleset {

	// ========================================================================
	// Form: msdyn_solutionhealthruleset_Information
	// ========================================================================

	export namespace msdyn_solutionhealthruleset_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Holds the description of the rule set. */
			msdyn_description: DevKit.Controls.Memo;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The unique name of the rule set. Will be enforced as unique in UI and business logic. */
			msdyn_uniquename: DevKit.Controls.String;
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
			/** Solution Health Rules (Solution Health Rule Set) */
			Solution_Health_Rules: DevKit.Controls.Grid;
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
	 * msdyn_solutionhealthruleset_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_solutionhealthruleset.msdyn_solutionhealthruleset_Information(executionContext)
	 */
	export class msdyn_solutionhealthruleset_Information extends FormBase<msdyn_solutionhealthruleset_Information.IBody, msdyn_solutionhealthruleset_Information.IHeader, msdyn_solutionhealthruleset_Information.IGrid, msdyn_solutionhealthruleset_Information.INavigation, msdyn_solutionhealthruleset_Information.IQuickForm, msdyn_solutionhealthruleset_Information.IProcess, msdyn_solutionhealthruleset_Information.IDialog> {
		/**
		 * Creates a msdyn_solutionhealthruleset_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_description', 'msdyn_name', 'msdyn_uniquename'],
				header: [],
				tab: [],
				grid: ['Solution_Health_Rules'],
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
			/** Holds the description of the rule set. */
			msdyn_description: DevKit.Controls.Memo;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The unique name of the rule set. Will be enforced as unique in UI and business logic. */
			msdyn_uniquename: DevKit.Controls.String;
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
			/** Solution Health Rules (Solution Health Rule Set) */
			Solution_Health_Rules: DevKit.Controls.Grid;
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
	 * Usage: new msdyn_solutionhealthruleset.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_solutionhealthruleset Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_description', 'msdyn_name', 'msdyn_uniquename'],
				header: [],
				tab: [],
				grid: ['Solution_Health_Rules'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

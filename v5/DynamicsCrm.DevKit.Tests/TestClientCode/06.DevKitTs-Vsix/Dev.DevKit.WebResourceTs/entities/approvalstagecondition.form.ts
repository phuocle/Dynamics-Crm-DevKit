/**
 * approvalstagecondition.form.ts - approvalstagecondition Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace approvalstagecondition containing form classes: approvalstagecondition.FormClassName
 * 3. Aggregate Form class: approvalstagecondition.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace approvalstagecondition {

	// ========================================================================
	// Form: approvalstagecondition_Information
	// ========================================================================

	export namespace approvalstagecondition_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** The conditional logic and related actions */
			ConditionalLogic: DevKit.Controls.String;
			/** Name */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Extra result info needed for some scenarios */
			ResultInfo: DevKit.Controls.String;
			/** The type of action selected */
			ResultType: DevKit.Controls.OptionSet;
			/** The optional value needed for some actions */
			ResultValue: DevKit.Controls.String;
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
	 * approvalstagecondition_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new approvalstagecondition.approvalstagecondition_Information(executionContext)
	 */
	export class approvalstagecondition_Information extends FormBase<approvalstagecondition_Information.IBody, approvalstagecondition_Information.IHeader, approvalstagecondition_Information.IGrid, approvalstagecondition_Information.INavigation, approvalstagecondition_Information.IQuickForm, approvalstagecondition_Information.IProcess, approvalstagecondition_Information.IDialog> {
		/**
		 * Creates a approvalstagecondition_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ConditionalLogic', 'Name', 'OwnerId', 'ResultInfo', 'ResultType', 'ResultValue'],
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
			/** The conditional logic and related actions */
			ConditionalLogic: DevKit.Controls.String;
			/** Name */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Extra result info needed for some scenarios */
			ResultInfo: DevKit.Controls.String;
			/** The type of action selected */
			ResultType: DevKit.Controls.OptionSet;
			/** The optional value needed for some actions */
			ResultValue: DevKit.Controls.String;
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
	 * Usage: new approvalstagecondition.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate approvalstagecondition Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ConditionalLogic', 'Name', 'OwnerId', 'ResultInfo', 'ResultType', 'ResultValue'],
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

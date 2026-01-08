/**
 * msdyn_solutionhealthrule.form.ts - msdyn_solutionhealthrule Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_solutionhealthrule containing form classes: msdyn_solutionhealthrule.FormClassName
 * 3. Aggregate Form class: msdyn_solutionhealthrule.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_solutionhealthrule {

	// ========================================================================
	// Form: msdyn_solutionhealthrule_Information
	// ========================================================================

	export namespace msdyn_solutionhealthrule_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Rule description. */
			msdyn_Description: DevKit.Controls.Memo;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** OwningSolutionId */
			msdyn_OwningSolutionId: DevKit.Controls.String;
			/** ResolutionAction */
			msdyn_ResolutionAction: DevKit.Controls.Lookup;
			/** This message will be visible to end use when he/she tried to resolve rule failure. */
			msdyn_resolutionmessage: DevKit.Controls.String;
			/** Rule set to which the rule belongs to. */
			msdyn_solutionhealthrulesetId: DevKit.Controls.Lookup;
			/** Workflow */
			msdyn_Workflow: DevKit.Controls.Lookup;
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
	 * msdyn_solutionhealthrule_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_solutionhealthrule.msdyn_solutionhealthrule_Information(executionContext)
	 */
	export class msdyn_solutionhealthrule_Information extends FormBase<msdyn_solutionhealthrule_Information.IBody, msdyn_solutionhealthrule_Information.IHeader, msdyn_solutionhealthrule_Information.IGrid, msdyn_solutionhealthrule_Information.INavigation, msdyn_solutionhealthrule_Information.IQuickForm, msdyn_solutionhealthrule_Information.IProcess, msdyn_solutionhealthrule_Information.IDialog> {
		/**
		 * Creates a msdyn_solutionhealthrule_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_Description', 'msdyn_name', 'msdyn_OwningSolutionId', 'msdyn_ResolutionAction', 'msdyn_resolutionmessage', 'msdyn_solutionhealthrulesetId', 'msdyn_Workflow', 'OwnerId'],
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
			/** Rule description. */
			msdyn_Description: DevKit.Controls.Memo;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** OwningSolutionId */
			msdyn_OwningSolutionId: DevKit.Controls.String;
			/** ResolutionAction */
			msdyn_ResolutionAction: DevKit.Controls.Lookup;
			/** This message will be visible to end use when he/she tried to resolve rule failure. */
			msdyn_resolutionmessage: DevKit.Controls.String;
			/** Rule set to which the rule belongs to. */
			msdyn_solutionhealthrulesetId: DevKit.Controls.Lookup;
			/** Workflow */
			msdyn_Workflow: DevKit.Controls.Lookup;
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
	 * Usage: new msdyn_solutionhealthrule.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_solutionhealthrule Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_Description', 'msdyn_name', 'msdyn_OwningSolutionId', 'msdyn_ResolutionAction', 'msdyn_resolutionmessage', 'msdyn_solutionhealthrulesetId', 'msdyn_Workflow', 'OwnerId'],
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

/**
 * approvalstageorder.form.ts - approvalstageorder Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace approvalstageorder containing form classes: approvalstageorder.FormClassName
 * 3. Aggregate Form class: approvalstageorder.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace approvalstageorder {

	// ========================================================================
	// Form: approvalstageorder_Information
	// ========================================================================

	export namespace approvalstageorder_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Name of the stage */
			Name: DevKit.Controls.String;
			/** The order number of the stage */
			OrderNumber: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The linked stage approval */
			StageApproval: DevKit.Controls.Lookup;
			/** The linked condition */
			StageCondition: DevKit.Controls.Lookup;
			/** The type of the stage */
			Type: DevKit.Controls.OptionSet;
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
	 * approvalstageorder_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new approvalstageorder.approvalstageorder_Information(executionContext)
	 */
	export class approvalstageorder_Information extends FormBase<approvalstageorder_Information.IBody, approvalstageorder_Information.IHeader, approvalstageorder_Information.IGrid, approvalstageorder_Information.INavigation, approvalstageorder_Information.IQuickForm, approvalstageorder_Information.IProcess, approvalstageorder_Information.IDialog> {
		/**
		 * Creates a approvalstageorder_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Name', 'OrderNumber', 'OwnerId', 'StageApproval', 'StageCondition', 'Type'],
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
			/** Name of the stage */
			Name: DevKit.Controls.String;
			/** The order number of the stage */
			OrderNumber: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The linked stage approval */
			StageApproval: DevKit.Controls.Lookup;
			/** The linked condition */
			StageCondition: DevKit.Controls.Lookup;
			/** The type of the stage */
			Type: DevKit.Controls.OptionSet;
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
	 * Usage: new approvalstageorder.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate approvalstageorder Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Name', 'OrderNumber', 'OwnerId', 'StageApproval', 'StageCondition', 'Type'],
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

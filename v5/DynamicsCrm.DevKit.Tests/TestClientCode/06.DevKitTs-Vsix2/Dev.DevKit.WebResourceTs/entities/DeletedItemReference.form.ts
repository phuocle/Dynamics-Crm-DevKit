/**
 * DeletedItemReference.form.ts - DeletedItemReference Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace DeletedItemReference containing form classes: DeletedItemReference.FormClassName
 * 3. Aggregate Form class: DeletedItemReference.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace DeletedItemReference {

	// ========================================================================
	// Form: Deleted_Item_Reference
	// ========================================================================

	export namespace Deleted_Item_Reference {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Deleted Object */
			DeletedObject: DevKit.Controls.Lookup;
			/** The Display name of the deleted record. */
			name: DevKit.Controls.String;
			/** Number of Processed Records */
			ProcessedRecords: DevKit.Controls.Integer;
			/** Regarding Object */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Total impacted Records */
			TotalRecords: DevKit.Controls.Integer;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Unique identifier of the user who deleted the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was deleted. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who deleted the record. */
			CreatedOnBehalfBy: DevKit.Controls.Lookup;
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
	 * Deleted_Item_Reference Form class
	 * Provides typed access to all form controls
	 * Usage: new DeletedItemReference.Deleted_Item_Reference(executionContext)
	 */
	export class Deleted_Item_Reference extends FormBase<Deleted_Item_Reference.IBody, Deleted_Item_Reference.IHeader, Deleted_Item_Reference.IGrid, Deleted_Item_Reference.INavigation, Deleted_Item_Reference.IQuickForm, Deleted_Item_Reference.IProcess, Deleted_Item_Reference.IDialog> {
		/**
		 * Creates a Deleted_Item_Reference Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['DeletedObject', 'name', 'ProcessedRecords', 'RegardingObjectId', 'TotalRecords'],
				header: ['CreatedBy', 'CreatedOn', 'CreatedOnBehalfBy'],
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
			/** Deleted Object */
			DeletedObject: DevKit.Controls.Lookup;
			/** The Display name of the deleted record. */
			name: DevKit.Controls.String;
			/** Number of Processed Records */
			ProcessedRecords: DevKit.Controls.Integer;
			/** Regarding Object */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Total impacted Records */
			TotalRecords: DevKit.Controls.Integer;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Unique identifier of the user who deleted the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was deleted. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who deleted the record. */
			CreatedOnBehalfBy: DevKit.Controls.Lookup;
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
	 * Usage: new DeletedItemReference.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate DeletedItemReference Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['DeletedObject', 'name', 'ProcessedRecords', 'RegardingObjectId', 'TotalRecords'],
				header: ['CreatedBy', 'CreatedOn', 'CreatedOnBehalfBy'],
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

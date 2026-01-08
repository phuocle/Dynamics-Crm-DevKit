/**
 * SyncError.form.ts - SyncError Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace SyncError containing form classes: SyncError.FormClassName
 * 3. Aggregate Form class: SyncError.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace SyncError {

	// ========================================================================
	// Form: Sync_Error
	// ========================================================================

	export namespace Sync_Error {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Action Name for which sync error has occurred */
			Action: DevKit.Controls.String;
			/** Enter a short description of the sync error. */
			Description: DevKit.Controls.Memo;
			/** Displays the error code. */
			ErrorCode: DevKit.Controls.Memo;
			/** Error description from the exception */
			ErrorDetail: DevKit.Controls.Memo;
			/** Error Message of the exception */
			ErrorMessage: DevKit.Controls.String;
			/** Date and time when the upsync request was executed on CRM server */
			ErrorTime: DevKit.Controls.DateTime;
			/** Select the preferred error type. */
			ErrorType: DevKit.Controls.OptionSet;
			/** Entity name of the record for which sync error has occurred */
			Name: DevKit.Controls.String;
			/** Choose the record that the sync error relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the sync error. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the sync error status. */
			StatusCode: DevKit.Controls.OptionSet;
		}

		export interface IGeneral_TabTabSections {
			SYNCERROR_INFORMATION: DevKit.Controls.Section;
		}

		/** General */
		export interface IGeneral_TabTab extends DevKit.Controls.ITab {
			Section: IGeneral_TabTabSections;
		}

		export interface ITabs {
			/** General */
			General_Tab: IGeneral_TabTab;
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
	 * Sync_Error Form class
	 * Provides typed access to all form controls
	 * Usage: new SyncError.Sync_Error(executionContext)
	 */
	export class Sync_Error extends FormBase<Sync_Error.IBody, Sync_Error.IHeader, Sync_Error.IGrid, Sync_Error.INavigation, Sync_Error.IQuickForm, Sync_Error.IProcess, Sync_Error.IDialog> {
		/**
		 * Creates a Sync_Error Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Action', 'Description', 'ErrorCode', 'ErrorDetail', 'ErrorMessage', 'ErrorTime', 'ErrorType', 'Name', 'RegardingObjectId'],
				header: ['OwnerId', 'StatusCode'],
				tab: ['General_Tab___SYNCERROR_INFORMATION'],
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
			/** Action Name for which sync error has occurred */
			Action: DevKit.Controls.String;
			/** Enter a short description of the sync error. */
			Description: DevKit.Controls.Memo;
			/** Displays the error code. */
			ErrorCode: DevKit.Controls.Memo;
			/** Error description from the exception */
			ErrorDetail: DevKit.Controls.Memo;
			/** Error Message of the exception */
			ErrorMessage: DevKit.Controls.String;
			/** Date and time when the upsync request was executed on CRM server */
			ErrorTime: DevKit.Controls.DateTime;
			/** Select the preferred error type. */
			ErrorType: DevKit.Controls.OptionSet;
			/** Entity name of the record for which sync error has occurred */
			Name: DevKit.Controls.String;
			/** Choose the record that the sync error relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the sync error. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the sync error status. */
			StatusCode: DevKit.Controls.OptionSet;
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
	 * Usage: new SyncError.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate SyncError Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Action', 'Description', 'ErrorCode', 'ErrorDetail', 'ErrorMessage', 'ErrorTime', 'ErrorType', 'Name', 'RegardingObjectId'],
				header: ['OwnerId', 'StatusCode'],
				tab: ['General_Tab___SYNCERROR_INFORMATION'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

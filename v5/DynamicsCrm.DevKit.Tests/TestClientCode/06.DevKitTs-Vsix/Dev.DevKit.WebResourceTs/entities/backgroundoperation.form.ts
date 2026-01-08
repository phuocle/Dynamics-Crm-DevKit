/**
 * backgroundoperation.form.ts - backgroundoperation Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace backgroundoperation containing form classes: backgroundoperation.FormClassName
 * 3. Aggregate Form class: backgroundoperation.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace backgroundoperation {

	// ========================================================================
	// Form: backgroundoperation_Information
	// ========================================================================

	export namespace backgroundoperation_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** The is display name of background operation. */
			DisplayName: DevKit.Controls.String;
			/** The date time when background operation finished execution. */
			EndTime: DevKit.Controls.DateTime;
			/** The error code of error for background operation in case of failure. */
			ErrorCode: DevKit.Controls.Integer;
			/** The error message of error for background operation in case of failure. */
			ErrorMessage: DevKit.Controls.Memo;
			/** The input parameters that were supplied to start background operation. */
			InputParameters: DevKit.Controls.Memo;
			/** The name of the background operation. */
			Name: DevKit.Controls.String;
			/** The response of background operation. */
			OutputParameters: DevKit.Controls.Memo;
			/** The number of times background operation was retried. */
			RetryCount: DevKit.Controls.Integer;
			/** The date time when background operation started execution. */
			StartTime: DevKit.Controls.DateTime;
			/** The status of background operation. */
			StateCode: DevKit.Controls.OptionSet;
			/** The status reason for background operation. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Time to live in seconds. */
			TTLInSeconds: DevKit.Controls.Integer;
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
	 * backgroundoperation_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new backgroundoperation.backgroundoperation_Information(executionContext)
	 */
	export class backgroundoperation_Information extends FormBase<backgroundoperation_Information.IBody, backgroundoperation_Information.IHeader, backgroundoperation_Information.IGrid, backgroundoperation_Information.INavigation, backgroundoperation_Information.IQuickForm, backgroundoperation_Information.IProcess, backgroundoperation_Information.IDialog> {
		/**
		 * Creates a backgroundoperation_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedBy', 'CreatedOn', 'DisplayName', 'EndTime', 'ErrorCode', 'ErrorMessage', 'InputParameters', 'Name', 'OutputParameters', 'RetryCount', 'StartTime', 'StateCode', 'StatusCode', 'TTLInSeconds'],
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
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** The is display name of background operation. */
			DisplayName: DevKit.Controls.String;
			/** The date time when background operation finished execution. */
			EndTime: DevKit.Controls.DateTime;
			/** The error code of error for background operation in case of failure. */
			ErrorCode: DevKit.Controls.Integer;
			/** The error message of error for background operation in case of failure. */
			ErrorMessage: DevKit.Controls.Memo;
			/** The input parameters that were supplied to start background operation. */
			InputParameters: DevKit.Controls.Memo;
			/** The name of the background operation. */
			Name: DevKit.Controls.String;
			/** The response of background operation. */
			OutputParameters: DevKit.Controls.Memo;
			/** The number of times background operation was retried. */
			RetryCount: DevKit.Controls.Integer;
			/** The date time when background operation started execution. */
			StartTime: DevKit.Controls.DateTime;
			/** The status of background operation. */
			StateCode: DevKit.Controls.OptionSet;
			/** The status reason for background operation. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Time to live in seconds. */
			TTLInSeconds: DevKit.Controls.Integer;
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
	 * Usage: new backgroundoperation.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate backgroundoperation Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedBy', 'CreatedOn', 'DisplayName', 'EndTime', 'ErrorCode', 'ErrorMessage', 'InputParameters', 'Name', 'OutputParameters', 'RetryCount', 'StartTime', 'StateCode', 'StatusCode', 'TTLInSeconds'],
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

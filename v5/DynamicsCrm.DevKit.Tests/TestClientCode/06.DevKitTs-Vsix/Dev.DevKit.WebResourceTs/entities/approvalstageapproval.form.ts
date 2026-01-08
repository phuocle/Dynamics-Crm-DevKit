/**
 * approvalstageapproval.form.ts - approvalstageapproval Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace approvalstageapproval containing form classes: approvalstageapproval.FormClassName
 * 3. Aggregate Form class: approvalstageapproval.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace approvalstageapproval {

	// ========================================================================
	// Form: approvalstageapproval_Information
	// ========================================================================

	export namespace approvalstageapproval_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Choice to allow cancellation of approval */
			AllowCancel: DevKit.Controls.Boolean;
			/** Choice to allow approval reassignment */
			AllowReassign: DevKit.Controls.Boolean;
			/** Custom fields provided by customer */
			CustomFields: DevKit.Controls.String;
			/** Description of approval */
			Details: DevKit.Controls.String;
			/** Optional link to the item to approve */
			ItemLink: DevKit.Controls.String;
			/** Optional description for the item link */
			ItemLinkDescription: DevKit.Controls.String;
			/** The guid of the linked approval model */
			ModelId: DevKit.Controls.String;
			/** The type of the linked approval model */
			ModelType: DevKit.Controls.String;
			/** Name */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The result of the approval */
			Result: DevKit.Controls.String;
			/** Whether to send system generated emails */
			SendEmailNotification: DevKit.Controls.Boolean;
			/** Title of the approval */
			Title: DevKit.Controls.String;
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
	 * approvalstageapproval_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new approvalstageapproval.approvalstageapproval_Information(executionContext)
	 */
	export class approvalstageapproval_Information extends FormBase<approvalstageapproval_Information.IBody, approvalstageapproval_Information.IHeader, approvalstageapproval_Information.IGrid, approvalstageapproval_Information.INavigation, approvalstageapproval_Information.IQuickForm, approvalstageapproval_Information.IProcess, approvalstageapproval_Information.IDialog> {
		/**
		 * Creates a approvalstageapproval_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AllowCancel', 'AllowReassign', 'CustomFields', 'Details', 'ItemLink', 'ItemLinkDescription', 'ModelId', 'ModelType', 'Name', 'OwnerId', 'Result', 'SendEmailNotification', 'Title'],
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
			/** Choice to allow cancellation of approval */
			AllowCancel: DevKit.Controls.Boolean;
			/** Choice to allow approval reassignment */
			AllowReassign: DevKit.Controls.Boolean;
			/** Custom fields provided by customer */
			CustomFields: DevKit.Controls.String;
			/** Description of approval */
			Details: DevKit.Controls.String;
			/** Optional link to the item to approve */
			ItemLink: DevKit.Controls.String;
			/** Optional description for the item link */
			ItemLinkDescription: DevKit.Controls.String;
			/** The guid of the linked approval model */
			ModelId: DevKit.Controls.String;
			/** The type of the linked approval model */
			ModelType: DevKit.Controls.String;
			/** Name */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The result of the approval */
			Result: DevKit.Controls.String;
			/** Whether to send system generated emails */
			SendEmailNotification: DevKit.Controls.Boolean;
			/** Title of the approval */
			Title: DevKit.Controls.String;
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
	 * Usage: new approvalstageapproval.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate approvalstageapproval Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AllowCancel', 'AllowReassign', 'CustomFields', 'Details', 'ItemLink', 'ItemLinkDescription', 'ModelId', 'ModelType', 'Name', 'OwnerId', 'Result', 'SendEmailNotification', 'Title'],
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

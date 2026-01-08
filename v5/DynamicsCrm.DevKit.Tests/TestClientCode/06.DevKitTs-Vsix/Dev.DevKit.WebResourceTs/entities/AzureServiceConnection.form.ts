/**
 * AzureServiceConnection.form.ts - AzureServiceConnection Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace AzureServiceConnection containing form classes: AzureServiceConnection.FormClassName
 * 3. Aggregate Form class: AzureServiceConnection.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace AzureServiceConnection {

	// ========================================================================
	// Form: AzureServiceConnection_Information
	// ========================================================================

	export namespace AzureServiceConnection_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type the Azure account key. */
			AccountKey: DevKit.Controls.String;
			/** Unique identifier of the user who created the Azure service connection. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Enter a description of the Azure service connection. */
			Description: DevKit.Controls.Memo;
			/** Shows the status of the last connection to the Azure service. */
			LastConnectionStatusCode: DevKit.Controls.OptionSet;
			/** shows the time of the last connection to the Azure service. */
			LastConnectionTime: DevKit.Controls.DateTime;
			/** Unique identifier of the user who modified the Azure service connection. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the Azure service connection was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Type a logical name for the connection. */
			Name: DevKit.Controls.String;
			/** Type the service URL for the Azure service. */
			ServiceUri: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Shows whether the Azure service connection is active or inactive. */
			StateCode: DevKit.Controls.OptionSet;
		}

		export interface IgeneralTabSections {
			/** CONNECTION INFORMATION */
			connectioninfo: DevKit.Controls.Section;
			/** CONNECTION TEST INFORMATION */
			connectiontestinfo: DevKit.Controls.Section;
		}

		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		export interface ITabs {
			general: IgeneralTab;
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
	 * AzureServiceConnection_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new AzureServiceConnection.AzureServiceConnection_Information(executionContext)
	 */
	export class AzureServiceConnection_Information extends FormBase<AzureServiceConnection_Information.IBody, AzureServiceConnection_Information.IHeader, AzureServiceConnection_Information.IGrid, AzureServiceConnection_Information.INavigation, AzureServiceConnection_Information.IQuickForm, AzureServiceConnection_Information.IProcess, AzureServiceConnection_Information.IDialog> {
		/**
		 * Creates a AzureServiceConnection_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AccountKey', 'CreatedBy', 'Description', 'LastConnectionStatusCode', 'LastConnectionTime', 'ModifiedBy', 'ModifiedOn', 'Name', 'ServiceUri'],
				header: ['StateCode'],
				tab: ['general___connectioninfo', 'general___connectiontestinfo'],
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
			/** Type the Azure account key. */
			AccountKey: DevKit.Controls.String;
			/** Unique identifier of the user who created the Azure service connection. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Enter a description of the Azure service connection. */
			Description: DevKit.Controls.Memo;
			/** Shows the status of the last connection to the Azure service. */
			LastConnectionStatusCode: DevKit.Controls.OptionSet;
			/** shows the time of the last connection to the Azure service. */
			LastConnectionTime: DevKit.Controls.DateTime;
			/** Unique identifier of the user who modified the Azure service connection. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the Azure service connection was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Type a logical name for the connection. */
			Name: DevKit.Controls.String;
			/** Type the service URL for the Azure service. */
			ServiceUri: DevKit.Controls.String;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Shows whether the Azure service connection is active or inactive. */
			StateCode: DevKit.Controls.OptionSet;
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
	 * Usage: new AzureServiceConnection.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate AzureServiceConnection Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AccountKey', 'CreatedBy', 'Description', 'LastConnectionStatusCode', 'LastConnectionTime', 'ModifiedBy', 'ModifiedOn', 'Name', 'ServiceUri'],
				header: ['StateCode'],
				tab: ['general___connectioninfo', 'general___connectiontestinfo'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

/**
 * CustomAPI.form.ts - CustomAPI Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace CustomAPI containing form classes: CustomAPI.FormClassName
 * 3. Aggregate Form class: CustomAPI.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace CustomAPI {

	// ========================================================================
	// Form: CustomAPI_Information
	// ========================================================================

	export namespace CustomAPI_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** The type of custom processing step allowed */
			AllowedCustomProcessingStepType: DevKit.Controls.OptionSet;
			/** The binding type of the custom API */
			BindingType: DevKit.Controls.OptionSet;
			/** The logical name of the entity bound to the custom API */
			BoundEntityLogicalName: DevKit.Controls.String;
			/** Localized description for custom API instances */
			Description: DevKit.Controls.String;
			/** Localized display name for custom API instances */
			DisplayName: DevKit.Controls.String;
			/** Name of the privilege that allows execution of the custom API */
			ExecutePrivilegeName: DevKit.Controls.String;
			/** Indicates if the custom API is a function (GET is supported) or not (POST is supported) */
			IsFunction: DevKit.Controls.Boolean;
			/** Indicates if the custom API is private (hidden from metadata and documentation) */
			IsPrivate: DevKit.Controls.Boolean;
			/** The primary name of the custom API */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Plugin Type */
			PluginTypeId: DevKit.Controls.Lookup;
			/** Unique name for the custom API */
			UniqueName: DevKit.Controls.String;
			/** Indicates if the custom API is enabled as a workflow action */
			WorkflowSdkStepEnabled: DevKit.Controls.Boolean;
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
	 * CustomAPI_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new CustomAPI.CustomAPI_Information(executionContext)
	 */
	export class CustomAPI_Information extends FormBase<CustomAPI_Information.IBody, CustomAPI_Information.IHeader, CustomAPI_Information.IGrid, CustomAPI_Information.INavigation, CustomAPI_Information.IQuickForm, CustomAPI_Information.IProcess, CustomAPI_Information.IDialog> {
		/**
		 * Creates a CustomAPI_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AllowedCustomProcessingStepType', 'BindingType', 'BoundEntityLogicalName', 'Description', 'DisplayName', 'ExecutePrivilegeName', 'IsFunction', 'IsPrivate', 'Name', 'OwnerId', 'PluginTypeId', 'UniqueName', 'WorkflowSdkStepEnabled'],
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
			/** The type of custom processing step allowed */
			AllowedCustomProcessingStepType: DevKit.Controls.OptionSet;
			/** The binding type of the custom API */
			BindingType: DevKit.Controls.OptionSet;
			/** The logical name of the entity bound to the custom API */
			BoundEntityLogicalName: DevKit.Controls.String;
			/** Localized description for custom API instances */
			Description: DevKit.Controls.String;
			/** Localized display name for custom API instances */
			DisplayName: DevKit.Controls.String;
			/** Name of the privilege that allows execution of the custom API */
			ExecutePrivilegeName: DevKit.Controls.String;
			/** Indicates if the custom API is a function (GET is supported) or not (POST is supported) */
			IsFunction: DevKit.Controls.Boolean;
			/** Indicates if the custom API is private (hidden from metadata and documentation) */
			IsPrivate: DevKit.Controls.Boolean;
			/** The primary name of the custom API */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Plugin Type */
			PluginTypeId: DevKit.Controls.Lookup;
			/** Unique name for the custom API */
			UniqueName: DevKit.Controls.String;
			/** Indicates if the custom API is enabled as a workflow action */
			WorkflowSdkStepEnabled: DevKit.Controls.Boolean;
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
	 * Usage: new CustomAPI.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate CustomAPI Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AllowedCustomProcessingStepType', 'BindingType', 'BoundEntityLogicalName', 'Description', 'DisplayName', 'ExecutePrivilegeName', 'IsFunction', 'IsPrivate', 'Name', 'OwnerId', 'PluginTypeId', 'UniqueName', 'WorkflowSdkStepEnabled'],
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

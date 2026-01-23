/**
 * CustomAPIRequestParameter.form.ts - CustomAPIRequestParameter Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace CustomAPIRequestParameter containing form classes: CustomAPIRequestParameter.FormClassName
 * 3. Aggregate Form class: CustomAPIRequestParameter.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace CustomAPIRequestParameter {

	// ========================================================================
	// Form: CustomAPIRequestParameter_Information
	// ========================================================================

	export namespace CustomAPIRequestParameter_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier for the custom API that owns this custom API request parameter */
			CustomAPIId: DevKit.Controls.Lookup;
			/** Localized description for custom API request parameter instances  */
			Description: DevKit.Controls.String;
			/** Localized display name for custom API request parameter instances */
			DisplayName: DevKit.Controls.String;
			/** Indicates if the custom API request parameter is optional */
			IsOptional: DevKit.Controls.Boolean;
			/** The logical name of the entity bound to the custom API request parameter */
			LogicalEntityName: DevKit.Controls.String;
			/** The primary name of the custom API request parameter */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The data type of the custom API request parameter */
			Type: DevKit.Controls.OptionSet;
			/** Unique name for the custom API request parameter */
			UniqueName: DevKit.Controls.String;
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
	 * CustomAPIRequestParameter_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new CustomAPIRequestParameter.CustomAPIRequestParameter_Information(executionContext)
	 */
	export class CustomAPIRequestParameter_Information extends FormBase<CustomAPIRequestParameter_Information.IBody, CustomAPIRequestParameter_Information.IHeader, CustomAPIRequestParameter_Information.IGrid, CustomAPIRequestParameter_Information.INavigation, CustomAPIRequestParameter_Information.IQuickForm, CustomAPIRequestParameter_Information.IProcess, CustomAPIRequestParameter_Information.IDialog> {
		/**
		 * Creates a CustomAPIRequestParameter_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CustomAPIId', 'Description', 'DisplayName', 'IsOptional', 'LogicalEntityName', 'Name', 'OwnerId', 'Type', 'UniqueName'],
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
			/** Unique identifier for the custom API that owns this custom API request parameter */
			CustomAPIId: DevKit.Controls.Lookup;
			/** Localized description for custom API request parameter instances  */
			Description: DevKit.Controls.String;
			/** Localized display name for custom API request parameter instances */
			DisplayName: DevKit.Controls.String;
			/** Indicates if the custom API request parameter is optional */
			IsOptional: DevKit.Controls.Boolean;
			/** The logical name of the entity bound to the custom API request parameter */
			LogicalEntityName: DevKit.Controls.String;
			/** The primary name of the custom API request parameter */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The data type of the custom API request parameter */
			Type: DevKit.Controls.OptionSet;
			/** Unique name for the custom API request parameter */
			UniqueName: DevKit.Controls.String;
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
	 * Usage: new CustomAPIRequestParameter.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate CustomAPIRequestParameter Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CustomAPIId', 'Description', 'DisplayName', 'IsOptional', 'LogicalEntityName', 'Name', 'OwnerId', 'Type', 'UniqueName'],
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

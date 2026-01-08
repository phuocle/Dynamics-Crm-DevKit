/**
 * CustomAPIResponseProperty.form.ts - CustomAPIResponseProperty Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace CustomAPIResponseProperty containing form classes: CustomAPIResponseProperty.FormClassName
 * 3. Aggregate Form class: CustomAPIResponseProperty.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace CustomAPIResponseProperty {

	// ========================================================================
	// Form: CustomAPIResponseProperty_Information
	// ========================================================================

	export namespace CustomAPIResponseProperty_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier for the custom API that owns this custom API response property */
			CustomAPIId: DevKit.Controls.Lookup;
			/** Localized description for custom API response property instances */
			Description: DevKit.Controls.String;
			/** Localized display name for custom API response property instances */
			DisplayName: DevKit.Controls.String;
			/** The logical name of the entity bound to the custom API response property */
			LogicalEntityName: DevKit.Controls.String;
			/** The primary name of the custom API response property */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The data type of the custom API response property */
			Type: DevKit.Controls.OptionSet;
			/** Unique name for the custom API response property */
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
	 * CustomAPIResponseProperty_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new CustomAPIResponseProperty.CustomAPIResponseProperty_Information(executionContext)
	 */
	export class CustomAPIResponseProperty_Information extends FormBase<CustomAPIResponseProperty_Information.IBody, CustomAPIResponseProperty_Information.IHeader, CustomAPIResponseProperty_Information.IGrid, CustomAPIResponseProperty_Information.INavigation, CustomAPIResponseProperty_Information.IQuickForm, CustomAPIResponseProperty_Information.IProcess, CustomAPIResponseProperty_Information.IDialog> {
		/**
		 * Creates a CustomAPIResponseProperty_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CustomAPIId', 'Description', 'DisplayName', 'LogicalEntityName', 'Name', 'OwnerId', 'Type', 'UniqueName'],
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
			/** Unique identifier for the custom API that owns this custom API response property */
			CustomAPIId: DevKit.Controls.Lookup;
			/** Localized description for custom API response property instances */
			Description: DevKit.Controls.String;
			/** Localized display name for custom API response property instances */
			DisplayName: DevKit.Controls.String;
			/** The logical name of the entity bound to the custom API response property */
			LogicalEntityName: DevKit.Controls.String;
			/** The primary name of the custom API response property */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The data type of the custom API response property */
			Type: DevKit.Controls.OptionSet;
			/** Unique name for the custom API response property */
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
	 * Usage: new CustomAPIResponseProperty.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate CustomAPIResponseProperty Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CustomAPIId', 'Description', 'DisplayName', 'LogicalEntityName', 'Name', 'OwnerId', 'Type', 'UniqueName'],
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

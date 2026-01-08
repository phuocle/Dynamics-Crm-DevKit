/**
 * DVFileSearchAttribute.form.ts - DVFileSearchAttribute Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace DVFileSearchAttribute containing form classes: DVFileSearchAttribute.FormClassName
 * 3. Aggregate Form class: DVFileSearchAttribute.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace DVFileSearchAttribute {

	// ========================================================================
	// Form: DVFileSearchAttribute_Information
	// ========================================================================

	export namespace DVFileSearchAttribute_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier for Attribute associated with DVFileSearchAttribute. */
			attribute: DevKit.Controls.Lookup;
			/** AttributeLogicalName */
			AttributeLogicalName: DevKit.Controls.String;
			/** Unique identifier for DVFileSearchEntity associated with DVFileSearchAttribute. */
			dvfilesearchentity: DevKit.Controls.Lookup;
			/** Is Filterable */
			IsFilterable: DevKit.Controls.Boolean;
			/** Is Searchable */
			IsSearchable: DevKit.Controls.Boolean;
			/** Is Vectorizable */
			IsVectorizable: DevKit.Controls.Boolean;
			/** Name */
			Name: DevKit.Controls.String;
			/** Unique Name for the entity. */
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
	 * DVFileSearchAttribute_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new DVFileSearchAttribute.DVFileSearchAttribute_Information(executionContext)
	 */
	export class DVFileSearchAttribute_Information extends FormBase<DVFileSearchAttribute_Information.IBody, DVFileSearchAttribute_Information.IHeader, DVFileSearchAttribute_Information.IGrid, DVFileSearchAttribute_Information.INavigation, DVFileSearchAttribute_Information.IQuickForm, DVFileSearchAttribute_Information.IProcess, DVFileSearchAttribute_Information.IDialog> {
		/**
		 * Creates a DVFileSearchAttribute_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['attribute', 'AttributeLogicalName', 'dvfilesearchentity', 'IsFilterable', 'IsSearchable', 'IsVectorizable', 'Name', 'UniqueName'],
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
			/** Unique identifier for Attribute associated with DVFileSearchAttribute. */
			attribute: DevKit.Controls.Lookup;
			/** AttributeLogicalName */
			AttributeLogicalName: DevKit.Controls.String;
			/** Unique identifier for DVFileSearchEntity associated with DVFileSearchAttribute. */
			dvfilesearchentity: DevKit.Controls.Lookup;
			/** Is Filterable */
			IsFilterable: DevKit.Controls.Boolean;
			/** Is Searchable */
			IsSearchable: DevKit.Controls.Boolean;
			/** Is Vectorizable */
			IsVectorizable: DevKit.Controls.Boolean;
			/** Name */
			Name: DevKit.Controls.String;
			/** Unique Name for the entity. */
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
	 * Usage: new DVFileSearchAttribute.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate DVFileSearchAttribute Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['attribute', 'AttributeLogicalName', 'dvfilesearchentity', 'IsFilterable', 'IsSearchable', 'IsVectorizable', 'Name', 'UniqueName'],
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

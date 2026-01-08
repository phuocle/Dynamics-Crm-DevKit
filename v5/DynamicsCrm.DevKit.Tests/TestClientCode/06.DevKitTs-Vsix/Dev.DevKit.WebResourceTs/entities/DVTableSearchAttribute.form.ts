/**
 * DVTableSearchAttribute.form.ts - DVTableSearchAttribute Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace DVTableSearchAttribute containing form classes: DVTableSearchAttribute.FormClassName
 * 3. Aggregate Form class: DVTableSearchAttribute.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace DVTableSearchAttribute {

	// ========================================================================
	// Form: DVTableSearchAttribute_main_form
	// ========================================================================

	export namespace DVTableSearchAttribute_main_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** AttributeLogicalName */
			AttributeLogicalName: DevKit.Controls.String;
			/** Unique identifier for DVTableSearchEntity associated with DVTableSearchAttribute. */
			dvtablesearchentity: DevKit.Controls.Lookup;
			/** Is Retrievable */
			IsRetrievable: DevKit.Controls.Boolean;
			/** Is Searchable */
			IsSearchable: DevKit.Controls.Boolean;
			/** Name */
			Name: DevKit.Controls.String;
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
	 * DVTableSearchAttribute_main_form Form class
	 * Provides typed access to all form controls
	 * Usage: new DVTableSearchAttribute.DVTableSearchAttribute_main_form(executionContext)
	 */
	export class DVTableSearchAttribute_main_form extends FormBase<DVTableSearchAttribute_main_form.IBody, DVTableSearchAttribute_main_form.IHeader, DVTableSearchAttribute_main_form.IGrid, DVTableSearchAttribute_main_form.INavigation, DVTableSearchAttribute_main_form.IQuickForm, DVTableSearchAttribute_main_form.IProcess, DVTableSearchAttribute_main_form.IDialog> {
		/**
		 * Creates a DVTableSearchAttribute_main_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AttributeLogicalName', 'dvtablesearchentity', 'IsRetrievable', 'IsSearchable', 'Name'],
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
			/** AttributeLogicalName */
			AttributeLogicalName: DevKit.Controls.String;
			/** Unique identifier for DVTableSearchEntity associated with DVTableSearchAttribute. */
			dvtablesearchentity: DevKit.Controls.Lookup;
			/** Is Retrievable */
			IsRetrievable: DevKit.Controls.Boolean;
			/** Is Searchable */
			IsSearchable: DevKit.Controls.Boolean;
			/** Name */
			Name: DevKit.Controls.String;
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
	 * Usage: new DVTableSearchAttribute.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate DVTableSearchAttribute Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AttributeLogicalName', 'dvtablesearchentity', 'IsRetrievable', 'IsSearchable', 'Name'],
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

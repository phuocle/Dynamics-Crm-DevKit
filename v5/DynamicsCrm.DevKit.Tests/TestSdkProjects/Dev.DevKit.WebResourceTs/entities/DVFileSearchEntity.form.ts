/**
 * DVFileSearchEntity.form.ts - DVFileSearchEntity Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace DVFileSearchEntity containing form classes: DVFileSearchEntity.FormClassName
 * 3. Aggregate Form class: DVFileSearchEntity.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace DVFileSearchEntity {

	// ========================================================================
	// Form: DVFileSearchEntity_main_form
	// ========================================================================

	export namespace DVFileSearchEntity_main_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** DVFileSearch */
			DVFileSearch: DevKit.Controls.Lookup;
			/** Entity */
			Entity: DevKit.Controls.Lookup;
			/** EntityLogicalName */
			EntityLogicalName: DevKit.Controls.String;
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

		export interface INew_TabTabSections {
			/** New Section */
			New_Section: DevKit.Controls.Section;
		}

		/** New Tab */
		export interface INew_TabTab extends DevKit.Controls.ITab {
			Section: INew_TabTabSections;
		}

		export interface ITabs {
			/** New Tab */
			New_Tab: INew_TabTab;
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
	 * DVFileSearchEntity_main_form Form class
	 * Provides typed access to all form controls
	 * Usage: new DVFileSearchEntity.DVFileSearchEntity_main_form(executionContext)
	 */
	export class DVFileSearchEntity_main_form extends FormBase<DVFileSearchEntity_main_form.IBody, DVFileSearchEntity_main_form.IHeader, DVFileSearchEntity_main_form.IGrid, DVFileSearchEntity_main_form.INavigation, DVFileSearchEntity_main_form.IQuickForm, DVFileSearchEntity_main_form.IProcess, DVFileSearchEntity_main_form.IDialog> {
		/**
		 * Creates a DVFileSearchEntity_main_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['DVFileSearch', 'Entity', 'EntityLogicalName', 'Name'],
				header: [],
				tab: ['New_Tab___New_Section'],
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
			/** DVFileSearch */
			DVFileSearch: DevKit.Controls.Lookup;
			/** Entity */
			Entity: DevKit.Controls.Lookup;
			/** EntityLogicalName */
			EntityLogicalName: DevKit.Controls.String;
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
	 * Usage: new DVFileSearchEntity.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate DVFileSearchEntity Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['DVFileSearch', 'Entity', 'EntityLogicalName', 'Name'],
				header: [],
				tab: ['New Tab___New Section'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

/**
 * AIPluginOperation.form.ts - AIPluginOperation Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace AIPluginOperation containing form classes: AIPluginOperation.FormClassName
 * 3. Aggregate Form class: AIPluginOperation.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace AIPluginOperation {

	// ========================================================================
	// Form: AIPluginOperation_main_form
	// ========================================================================

	export namespace AIPluginOperation_main_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** AIPlugin */
			AIPlugin: DevKit.Controls.Lookup;
			/** AI Plugin Operation Export Key */
			AIPluginOperationExportKey: DevKit.Controls.String;
			/** Custom API */
			CustomAPI: DevKit.Controls.Lookup;
			/** Operation Description */
			Description: DevKit.Controls.Memo;
			/** DVFileSearch */
			DVFileSearch: DevKit.Controls.Lookup;
			/** DVTableSearch */
			DVTableSearch: DevKit.Controls.Lookup;
			/** Name */
			Name: DevKit.Controls.String;
			/** OperationId on the swagger file */
			OperationId: DevKit.Controls.String;
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
	 * AIPluginOperation_main_form Form class
	 * Provides typed access to all form controls
	 * Usage: new AIPluginOperation.AIPluginOperation_main_form(executionContext)
	 */
	export class AIPluginOperation_main_form extends FormBase<AIPluginOperation_main_form.IBody, AIPluginOperation_main_form.IHeader, AIPluginOperation_main_form.IGrid, AIPluginOperation_main_form.INavigation, AIPluginOperation_main_form.IQuickForm, AIPluginOperation_main_form.IProcess, AIPluginOperation_main_form.IDialog> {
		/**
		 * Creates a AIPluginOperation_main_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AIPlugin', 'AIPluginOperationExportKey', 'CustomAPI', 'Description', 'DVFileSearch', 'DVTableSearch', 'Name', 'OperationId'],
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
			/** AIPlugin */
			AIPlugin: DevKit.Controls.Lookup;
			/** AI Plugin Operation Export Key */
			AIPluginOperationExportKey: DevKit.Controls.String;
			/** Custom API */
			CustomAPI: DevKit.Controls.Lookup;
			/** Operation Description */
			Description: DevKit.Controls.Memo;
			/** DVFileSearch */
			DVFileSearch: DevKit.Controls.Lookup;
			/** DVTableSearch */
			DVTableSearch: DevKit.Controls.Lookup;
			/** Name */
			Name: DevKit.Controls.String;
			/** OperationId on the swagger file */
			OperationId: DevKit.Controls.String;
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
	 * Usage: new AIPluginOperation.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate AIPluginOperation Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AIPlugin', 'AIPluginOperationExportKey', 'CustomAPI', 'Description', 'DVFileSearch', 'DVTableSearch', 'Name', 'OperationId'],
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

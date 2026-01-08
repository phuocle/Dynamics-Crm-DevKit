/**
 * AIPlugin.form.ts - AIPlugin Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace AIPlugin containing form classes: AIPlugin.FormClassName
 * 3. Aggregate Form class: AIPlugin.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace AIPlugin {

	// ========================================================================
	// Form: AIPlugin_main_form
	// ========================================================================

	export namespace AIPlugin_main_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			AIPluginTitle: DevKit.Controls.Lookup;
			/** Human-readable description of the Plugin */
			HumanDescription: DevKit.Controls.Memo;
			/** Human-readable name for the model */
			HumanName: DevKit.Controls.Memo;
			/** Description better tailored to the model, such as token context length considerations or keyword usage for improved plugin prompting. */
			ModelDescription: DevKit.Controls.Memo;
			/** Model name for the plugin */
			ModelName: DevKit.Controls.Memo;
			/** Name */
			Name: DevKit.Controls.String;
			/** PluginType */
			PluginType: DevKit.Controls.OptionSet;
			/** SchemaVersion of OpenAI Manifest */
			SchemaVersion: DevKit.Controls.OptionSet;
			/** Swagger value that is upserted to generated plugin definition, used to provide override for properties not exposed as table/columns.

Example:

{
  "info": {
      "x-ms-keywords": [ "sales", "support" ]
   }
}

Adds x-ms-keywords in info property. */
			UpsertSwagger: DevKit.Controls.Memo;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface INew_TabTabSections {
			/** AI Plugin Operations */
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
			/** Operations */
			OperationsGrid: DevKit.Controls.Grid;
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
	 * AIPlugin_main_form Form class
	 * Provides typed access to all form controls
	 * Usage: new AIPlugin.AIPlugin_main_form(executionContext)
	 */
	export class AIPlugin_main_form extends FormBase<AIPlugin_main_form.IBody, AIPlugin_main_form.IHeader, AIPlugin_main_form.IGrid, AIPlugin_main_form.INavigation, AIPlugin_main_form.IQuickForm, AIPlugin_main_form.IProcess, AIPlugin_main_form.IDialog> {
		/**
		 * Creates a AIPlugin_main_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AIPluginTitle', 'HumanDescription', 'HumanName', 'ModelDescription', 'ModelName', 'Name', 'PluginType', 'SchemaVersion', 'UpsertSwagger'],
				header: [],
				tab: ['New_Tab___New_Section'],
				grid: ['OperationsGrid'],
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
			AIPluginTitle: DevKit.Controls.Lookup;
			/** Human-readable description of the Plugin */
			HumanDescription: DevKit.Controls.Memo;
			/** Human-readable name for the model */
			HumanName: DevKit.Controls.Memo;
			/** Description better tailored to the model, such as token context length considerations or keyword usage for improved plugin prompting. */
			ModelDescription: DevKit.Controls.Memo;
			/** Model name for the plugin */
			ModelName: DevKit.Controls.Memo;
			/** Name */
			Name: DevKit.Controls.String;
			/** PluginType */
			PluginType: DevKit.Controls.OptionSet;
			/** SchemaVersion of OpenAI Manifest */
			SchemaVersion: DevKit.Controls.OptionSet;
			/** Swagger value that is upserted to generated plugin definition, used to provide override for properties not exposed as table/columns.

Example:

{
  "info": {
      "x-ms-keywords": [ "sales", "support" ]
   }
}

Adds x-ms-keywords in info property. */
			UpsertSwagger: DevKit.Controls.Memo;
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
			/** Operations */
			OperationsGrid: DevKit.Controls.Grid;
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
	 * Usage: new AIPlugin.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate AIPlugin Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AIPluginTitle', 'HumanDescription', 'HumanName', 'ModelDescription', 'ModelName', 'Name', 'PluginType', 'SchemaVersion', 'UpsertSwagger'],
				header: [],
				tab: ['New Tab___New Section'],
				grid: ['OperationsGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

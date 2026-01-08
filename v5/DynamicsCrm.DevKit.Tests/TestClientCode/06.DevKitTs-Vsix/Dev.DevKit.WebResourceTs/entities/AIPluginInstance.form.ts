/**
 * AIPluginInstance.form.ts - AIPluginInstance Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace AIPluginInstance containing form classes: AIPluginInstance.FormClassName
 * 3. Aggregate Form class: AIPluginInstance.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace AIPluginInstance {

	// ========================================================================
	// Form: AIPlugin_main_form
	// ========================================================================

	export namespace AIPlugin_main_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** AIPlugin */
			AIPlugin: DevKit.Controls.Lookup;
			/** Name */
			Name: DevKit.Controls.String;
			/** Status of the AIPluginInstance */
			statecode: DevKit.Controls.OptionSet;
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
	 * AIPlugin_main_form Form class
	 * Provides typed access to all form controls
	 * Usage: new AIPluginInstance.AIPlugin_main_form(executionContext)
	 */
	export class AIPlugin_main_form extends FormBase<AIPlugin_main_form.IBody, AIPlugin_main_form.IHeader, AIPlugin_main_form.IGrid, AIPlugin_main_form.INavigation, AIPlugin_main_form.IQuickForm, AIPlugin_main_form.IProcess, AIPlugin_main_form.IDialog> {
		/**
		 * Creates a AIPlugin_main_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AIPlugin', 'Name', 'statecode'],
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
			/** Name */
			Name: DevKit.Controls.String;
			/** Status of the AIPluginInstance */
			statecode: DevKit.Controls.OptionSet;
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
	 * Usage: new AIPluginInstance.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate AIPluginInstance Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AIPlugin', 'Name', 'statecode'],
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

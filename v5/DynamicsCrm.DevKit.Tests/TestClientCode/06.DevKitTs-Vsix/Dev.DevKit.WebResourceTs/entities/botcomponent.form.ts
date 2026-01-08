/**
 * botcomponent.form.ts - botcomponent Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace botcomponent containing form classes: botcomponent.FormClassName
 * 3. Aggregate Form class: botcomponent.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace botcomponent {

	// ========================================================================
	// Form: botcomponent_Information
	// ========================================================================

	export namespace botcomponent_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Accent Color for this re-usable component */
			AccentColor: DevKit.Controls.String;
			/** The category of Copilot component. */
			Category: DevKit.Controls.String;
			/** The sub type of Copilot component. */
			ComponentType: DevKit.Controls.OptionSet;
			/** The content or metadata of the Bot Component that defines its structure and properties. */
			Content: DevKit.Controls.Memo;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** The content of the Bot Component in OBI format */
			Data: DevKit.Controls.Memo;
			/** Used to store dependencies between bots. */
			Dependencies: DevKit.Controls.Memo;
			/** Contains searchable text for the bot component */
			Description: DevKit.Controls.Memo;
			/** Link to learn More about this component */
			HelpLink: DevKit.Controls.String;
			/** Icon Url for this component */
			IconUrl: DevKit.Controls.String;
			/** Language of the copilot component */
			Language: DevKit.Controls.OptionSet;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Unique identifier for Copilot component collection associated with Copilot component. */
			ParentBotComponentCollectionId: DevKit.Controls.Lookup;
			/** Unique identifier for Copilot component associated with Copilot component. */
			ParentBotComponentId: DevKit.Controls.Lookup;
			/** Unique identifier for Bot associated with the Component. */
			ParentBotId: DevKit.Controls.Lookup;
			/** Reuse Policy for the copilot component */
			ReusePolicy: DevKit.Controls.OptionSet;
			/** SchemaName */
			SchemaName: DevKit.Controls.String;
			/** Status of the BotComponent */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the BotComponent */
			statuscode: DevKit.Controls.OptionSet;
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
			/** Child components */
			ChildComponents: DevKit.Controls.Grid;
			/** Related chat bot components */
			RelatedBotComponents: DevKit.Controls.Grid;
			/** Related chat bots */
			RelatedBots: DevKit.Controls.Grid;
			/** Related flows */
			RelatedProcesses: DevKit.Controls.Grid;
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
	 * botcomponent_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new botcomponent.botcomponent_Information(executionContext)
	 */
	export class botcomponent_Information extends FormBase<botcomponent_Information.IBody, botcomponent_Information.IHeader, botcomponent_Information.IGrid, botcomponent_Information.INavigation, botcomponent_Information.IQuickForm, botcomponent_Information.IProcess, botcomponent_Information.IDialog> {
		/**
		 * Creates a botcomponent_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AccentColor', 'Category', 'ComponentType', 'Content', 'CreatedBy', 'CreatedOn', 'Data', 'Dependencies', 'Description', 'HelpLink', 'IconUrl', 'Language', 'ModifiedBy', 'ModifiedOn', 'name', 'OwnerId', 'OwningBusinessUnit', 'ParentBotComponentCollectionId', 'ParentBotComponentId', 'ParentBotId', 'ReusePolicy', 'SchemaName', 'statecode', 'statuscode'],
				header: [],
				tab: [],
				grid: ['ChildComponents', 'RelatedBotComponents', 'RelatedBots', 'RelatedProcesses'],
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
			/** Accent Color for this re-usable component */
			AccentColor: DevKit.Controls.String;
			/** The category of Copilot component. */
			Category: DevKit.Controls.String;
			/** The sub type of Copilot component. */
			ComponentType: DevKit.Controls.OptionSet;
			/** The content or metadata of the Bot Component that defines its structure and properties. */
			Content: DevKit.Controls.Memo;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** The content of the Bot Component in OBI format */
			Data: DevKit.Controls.Memo;
			/** Used to store dependencies between bots. */
			Dependencies: DevKit.Controls.Memo;
			/** Contains searchable text for the bot component */
			Description: DevKit.Controls.Memo;
			/** Link to learn More about this component */
			HelpLink: DevKit.Controls.String;
			/** Icon Url for this component */
			IconUrl: DevKit.Controls.String;
			/** Language of the copilot component */
			Language: DevKit.Controls.OptionSet;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Unique identifier for Copilot component collection associated with Copilot component. */
			ParentBotComponentCollectionId: DevKit.Controls.Lookup;
			/** Unique identifier for Copilot component associated with Copilot component. */
			ParentBotComponentId: DevKit.Controls.Lookup;
			/** Unique identifier for Bot associated with the Component. */
			ParentBotId: DevKit.Controls.Lookup;
			/** Reuse Policy for the copilot component */
			ReusePolicy: DevKit.Controls.OptionSet;
			/** SchemaName */
			SchemaName: DevKit.Controls.String;
			/** Status of the BotComponent */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the BotComponent */
			statuscode: DevKit.Controls.OptionSet;
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
			/** Child components */
			ChildComponents: DevKit.Controls.Grid;
			/** Related chat bot components */
			RelatedBotComponents: DevKit.Controls.Grid;
			/** Related chat bots */
			RelatedBots: DevKit.Controls.Grid;
			/** Related flows */
			RelatedProcesses: DevKit.Controls.Grid;
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
	 * Usage: new botcomponent.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate botcomponent Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AccentColor', 'Category', 'ComponentType', 'Content', 'CreatedBy', 'CreatedOn', 'Data', 'Dependencies', 'Description', 'HelpLink', 'IconUrl', 'Language', 'ModifiedBy', 'ModifiedOn', 'name', 'OwnerId', 'OwningBusinessUnit', 'ParentBotComponentCollectionId', 'ParentBotComponentId', 'ParentBotId', 'ReusePolicy', 'SchemaName', 'statecode', 'statuscode'],
				header: [],
				tab: [],
				grid: ['ChildComponents', 'RelatedBotComponents', 'RelatedBots', 'RelatedProcesses'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

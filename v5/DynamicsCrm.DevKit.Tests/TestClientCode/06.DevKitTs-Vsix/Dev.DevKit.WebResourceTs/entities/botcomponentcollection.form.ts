/**
 * botcomponentcollection.form.ts - botcomponentcollection Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace botcomponentcollection containing form classes: botcomponentcollection.FormClassName
 * 3. Aggregate Form class: botcomponentcollection.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace botcomponentcollection {

	// ========================================================================
	// Form: botcomponentcollection_Information
	// ========================================================================

	export namespace botcomponentcollection_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Configuration */
			Configuration: DevKit.Controls.Memo;
			/** Description */
			Description: DevKit.Controls.String;
			/** The name of the component collection. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique Name for the entity. */
			SchemaName: DevKit.Controls.String;
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
			/** Linked bots */
			Bots: DevKit.Controls.Grid;
			/** Copilot components (ParentBotComponentCollection) */
			Components: DevKit.Controls.Grid;
		}

		/**
		 * Navigation interface
		 * Contains navigation items
		 */
		export interface INavigation {
			/** Copilots */
			nav_bot_botcomponentcollection: DevKit.Controls.NavigationItem;
			/** Components */
			nav_botcomponent_parent_botcomponentcollection: DevKit.Controls.NavigationItem;
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
	 * botcomponentcollection_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new botcomponentcollection.botcomponentcollection_Information(executionContext)
	 */
	export class botcomponentcollection_Information extends FormBase<botcomponentcollection_Information.IBody, botcomponentcollection_Information.IHeader, botcomponentcollection_Information.IGrid, botcomponentcollection_Information.INavigation, botcomponentcollection_Information.IQuickForm, botcomponentcollection_Information.IProcess, botcomponentcollection_Information.IDialog> {
		/**
		 * Creates a botcomponentcollection_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Configuration', 'Description', 'name', 'OwnerId', 'SchemaName'],
				header: [],
				tab: [],
				grid: ['Bots', 'Components'],
				navigation: ['nav_bot_botcomponentcollection', 'nav_botcomponent_parent_botcomponentcollection'],
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
			/** Configuration */
			Configuration: DevKit.Controls.Memo;
			/** Description */
			Description: DevKit.Controls.String;
			/** The name of the component collection. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique Name for the entity. */
			SchemaName: DevKit.Controls.String;
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
			/** Linked bots */
			Bots: DevKit.Controls.Grid;
			/** Copilot components (ParentBotComponentCollection) */
			Components: DevKit.Controls.Grid;
		}

		/**
		 * Aggregate Navigation interface
		 */
		export interface INavigation {
			/** Copilots */
			nav_bot_botcomponentcollection: DevKit.Controls.NavigationItem;
			/** Components */
			nav_botcomponent_parent_botcomponentcollection: DevKit.Controls.NavigationItem;
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
	 * Usage: new botcomponentcollection.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate botcomponentcollection Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Configuration', 'Description', 'name', 'OwnerId', 'SchemaName'],
				header: [],
				tab: [],
				grid: ['Bots', 'Components'],
				navigation: ['nav_bot_botcomponentcollection', 'nav_botcomponent_parent_botcomponentcollection'],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

/**
 * EnvironmentVariableDefinition.form.ts - EnvironmentVariableDefinition Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace EnvironmentVariableDefinition containing form classes: EnvironmentVariableDefinition.FormClassName
 * 3. Aggregate Form class: EnvironmentVariableDefinition.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace EnvironmentVariableDefinition {

	// ========================================================================
	// Form: EnvironmentVariableDefinition_Information
	// ========================================================================

	export namespace EnvironmentVariableDefinition_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier for Connection Reference associated with Environment Variable Definition. */
			ConnectionReferenceId: DevKit.Controls.Lookup;
			/** Default variable value to be used if no associated EnvironmentVariableValue entities exist. */
			DefaultValue: DevKit.Controls.Memo;
			/** Description of the variable definition. */
			Description: DevKit.Controls.Memo;
			/** Display Name of the variable definition. */
			DisplayName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for Environment Variable Definition associated with Environment Variable Definition. */
			ParentDefinitionId: DevKit.Controls.Lookup;
			/** Unique entity name. */
			SchemaName: DevKit.Controls.String;
			/** Environment variable value type. */
			Type: DevKit.Controls.OptionSet;
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
			/** Values */
			Values: DevKit.Controls.Grid;
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
	 * EnvironmentVariableDefinition_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new EnvironmentVariableDefinition.EnvironmentVariableDefinition_Information(executionContext)
	 */
	export class EnvironmentVariableDefinition_Information extends FormBase<EnvironmentVariableDefinition_Information.IBody, EnvironmentVariableDefinition_Information.IHeader, EnvironmentVariableDefinition_Information.IGrid, EnvironmentVariableDefinition_Information.INavigation, EnvironmentVariableDefinition_Information.IQuickForm, EnvironmentVariableDefinition_Information.IProcess, EnvironmentVariableDefinition_Information.IDialog> {
		/**
		 * Creates a EnvironmentVariableDefinition_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ConnectionReferenceId', 'DefaultValue', 'Description', 'DisplayName', 'OwnerId', 'ParentDefinitionId', 'SchemaName', 'Type'],
				header: [],
				tab: [],
				grid: ['Values'],
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
			/** Unique identifier for Connection Reference associated with Environment Variable Definition. */
			ConnectionReferenceId: DevKit.Controls.Lookup;
			/** Default variable value to be used if no associated EnvironmentVariableValue entities exist. */
			DefaultValue: DevKit.Controls.Memo;
			/** Description of the variable definition. */
			Description: DevKit.Controls.Memo;
			/** Display Name of the variable definition. */
			DisplayName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for Environment Variable Definition associated with Environment Variable Definition. */
			ParentDefinitionId: DevKit.Controls.Lookup;
			/** Unique entity name. */
			SchemaName: DevKit.Controls.String;
			/** Environment variable value type. */
			Type: DevKit.Controls.OptionSet;
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
			/** Values */
			Values: DevKit.Controls.Grid;
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
	 * Usage: new EnvironmentVariableDefinition.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate EnvironmentVariableDefinition Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ConnectionReferenceId', 'DefaultValue', 'Description', 'DisplayName', 'OwnerId', 'ParentDefinitionId', 'SchemaName', 'Type'],
				header: [],
				tab: [],
				grid: ['Values'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

/**
 * powerbimashupparameter.form.ts - powerbimashupparameter Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace powerbimashupparameter containing form classes: powerbimashupparameter.FormClassName
 * 3. Aggregate Form class: powerbimashupparameter.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace powerbimashupparameter {

	// ========================================================================
	// Form: powerbimashupparameter_Information
	// ========================================================================

	export namespace powerbimashupparameter_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** The Id of the Power BI Dataset component this mashup parameter belongs to */
			DatasetId: DevKit.Controls.Lookup;
			/** The environment variable this mashup parameter is bound to */
			EnvironmentVariableId: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The value for the mashup parameter */
			ParameterLiteralValue: DevKit.Controls.String;
			/** The name of the mashup parameter */
			ParameterName: DevKit.Controls.String;
			/** Specifies how the parameter value should be set */
			ParameterValueSource: DevKit.Controls.OptionSet;
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
	 * powerbimashupparameter_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new powerbimashupparameter.powerbimashupparameter_Information(executionContext)
	 */
	export class powerbimashupparameter_Information extends FormBase<powerbimashupparameter_Information.IBody, powerbimashupparameter_Information.IHeader, powerbimashupparameter_Information.IGrid, powerbimashupparameter_Information.INavigation, powerbimashupparameter_Information.IQuickForm, powerbimashupparameter_Information.IProcess, powerbimashupparameter_Information.IDialog> {
		/**
		 * Creates a powerbimashupparameter_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['DatasetId', 'EnvironmentVariableId', 'name', 'OwnerId', 'ParameterLiteralValue', 'ParameterName', 'ParameterValueSource', 'UniqueName'],
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
			/** The Id of the Power BI Dataset component this mashup parameter belongs to */
			DatasetId: DevKit.Controls.Lookup;
			/** The environment variable this mashup parameter is bound to */
			EnvironmentVariableId: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The value for the mashup parameter */
			ParameterLiteralValue: DevKit.Controls.String;
			/** The name of the mashup parameter */
			ParameterName: DevKit.Controls.String;
			/** Specifies how the parameter value should be set */
			ParameterValueSource: DevKit.Controls.OptionSet;
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
	 * Usage: new powerbimashupparameter.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate powerbimashupparameter Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['DatasetId', 'EnvironmentVariableId', 'name', 'OwnerId', 'ParameterLiteralValue', 'ParameterName', 'ParameterValueSource', 'UniqueName'],
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

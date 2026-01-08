/**
 * solutioncomponentattributeconfiguration.form.ts - solutioncomponentattributeconfiguration Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace solutioncomponentattributeconfiguration containing form classes: solutioncomponentattributeconfiguration.FormClassName
 * 3. Aggregate Form class: solutioncomponentattributeconfiguration.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace solutioncomponentattributeconfiguration {

	// ========================================================================
	// Form: solutioncomponentattributeconfiguration_Information
	// ========================================================================

	export namespace solutioncomponentattributeconfiguration_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Encoding Format */
			EncodingFormat: DevKit.Controls.OptionSet;
			/** File Extension */
			FileExtension: DevKit.Controls.String;
			/** Export Disabled */
			IsExportDisabled: DevKit.Controls.Boolean;
			/** IsExportedAsFile */
			IsExportedAsFile: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Unique identifier for the Solution Component Configuration associated with Solution Component Attribute Configuration. */
			SolutionComponentConfigurationId: DevKit.Controls.Lookup;
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
	 * solutioncomponentattributeconfiguration_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new solutioncomponentattributeconfiguration.solutioncomponentattributeconfiguration_Information(executionContext)
	 */
	export class solutioncomponentattributeconfiguration_Information extends FormBase<solutioncomponentattributeconfiguration_Information.IBody, solutioncomponentattributeconfiguration_Information.IHeader, solutioncomponentattributeconfiguration_Information.IGrid, solutioncomponentattributeconfiguration_Information.INavigation, solutioncomponentattributeconfiguration_Information.IQuickForm, solutioncomponentattributeconfiguration_Information.IProcess, solutioncomponentattributeconfiguration_Information.IDialog> {
		/**
		 * Creates a solutioncomponentattributeconfiguration_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['EncodingFormat', 'FileExtension', 'IsExportDisabled', 'IsExportedAsFile', 'name', 'SolutionComponentConfigurationId'],
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
			/** Encoding Format */
			EncodingFormat: DevKit.Controls.OptionSet;
			/** File Extension */
			FileExtension: DevKit.Controls.String;
			/** Export Disabled */
			IsExportDisabled: DevKit.Controls.Boolean;
			/** IsExportedAsFile */
			IsExportedAsFile: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Unique identifier for the Solution Component Configuration associated with Solution Component Attribute Configuration. */
			SolutionComponentConfigurationId: DevKit.Controls.Lookup;
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
	 * Usage: new solutioncomponentattributeconfiguration.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate solutioncomponentattributeconfiguration Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['EncodingFormat', 'FileExtension', 'IsExportDisabled', 'IsExportedAsFile', 'name', 'SolutionComponentConfigurationId'],
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

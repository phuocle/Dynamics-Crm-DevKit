/**
 * RecycleBinConfig.form.ts - RecycleBinConfig Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace RecycleBinConfig containing form classes: RecycleBinConfig.FormClassName
 * 3. Aggregate Form class: RecycleBinConfig.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace RecycleBinConfig {

	// ========================================================================
	// Form: RecycleBinConfig_Information
	// ========================================================================

	export namespace RecycleBinConfig_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Cleanup Interval In Days */
			CleanupIntervalInDays: DevKit.Controls.Integer;
			/** The metadata for Entity. */
			ExtensionOfRecordId: DevKit.Controls.Lookup;
			/** Is Ready (Create Synchronously). */
			IsReadyForRecycleBin: DevKit.Controls.Boolean;
			/** The name of the  settings. */
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
	 * RecycleBinConfig_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new RecycleBinConfig.RecycleBinConfig_Information(executionContext)
	 */
	export class RecycleBinConfig_Information extends FormBase<RecycleBinConfig_Information.IBody, RecycleBinConfig_Information.IHeader, RecycleBinConfig_Information.IGrid, RecycleBinConfig_Information.INavigation, RecycleBinConfig_Information.IQuickForm, RecycleBinConfig_Information.IProcess, RecycleBinConfig_Information.IDialog> {
		/**
		 * Creates a RecycleBinConfig_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CleanupIntervalInDays', 'ExtensionOfRecordId', 'IsReadyForRecycleBin', 'Name'],
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
			/** Cleanup Interval In Days */
			CleanupIntervalInDays: DevKit.Controls.Integer;
			/** The metadata for Entity. */
			ExtensionOfRecordId: DevKit.Controls.Lookup;
			/** Is Ready (Create Synchronously). */
			IsReadyForRecycleBin: DevKit.Controls.Boolean;
			/** The name of the  settings. */
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
	 * Usage: new RecycleBinConfig.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate RecycleBinConfig Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CleanupIntervalInDays', 'ExtensionOfRecordId', 'IsReadyForRecycleBin', 'Name'],
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

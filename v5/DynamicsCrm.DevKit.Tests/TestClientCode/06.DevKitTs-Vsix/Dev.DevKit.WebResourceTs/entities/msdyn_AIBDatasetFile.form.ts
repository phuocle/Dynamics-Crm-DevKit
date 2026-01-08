/**
 * msdyn_AIBDatasetFile.form.ts - msdyn_AIBDatasetFile Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_AIBDatasetFile containing form classes: msdyn_AIBDatasetFile.FormClassName
 * 3. Aggregate Form class: msdyn_AIBDatasetFile.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_AIBDatasetFile {

	// ========================================================================
	// Form: msdyn_AIBDatasetFile_Information
	// ========================================================================

	export namespace msdyn_AIBDatasetFile_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** AI Builder Dataset */
			msdyn_AIBDatasetId: DevKit.Controls.Lookup;
			/** AI Builder File */
			msdyn_AIBFileId: DevKit.Controls.Lookup;
			/** LastModifiedDate */
			msdyn_LastModifiedDate: DevKit.Controls.DateTime;
			/** Required name field */
			msdyn_Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
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
	 * msdyn_AIBDatasetFile_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_AIBDatasetFile.msdyn_AIBDatasetFile_Information(executionContext)
	 */
	export class msdyn_AIBDatasetFile_Information extends FormBase<msdyn_AIBDatasetFile_Information.IBody, msdyn_AIBDatasetFile_Information.IHeader, msdyn_AIBDatasetFile_Information.IGrid, msdyn_AIBDatasetFile_Information.INavigation, msdyn_AIBDatasetFile_Information.IQuickForm, msdyn_AIBDatasetFile_Information.IProcess, msdyn_AIBDatasetFile_Information.IDialog> {
		/**
		 * Creates a msdyn_AIBDatasetFile_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_AIBDatasetId', 'msdyn_AIBFileId', 'msdyn_LastModifiedDate', 'msdyn_Name', 'OwnerId'],
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
			/** AI Builder Dataset */
			msdyn_AIBDatasetId: DevKit.Controls.Lookup;
			/** AI Builder File */
			msdyn_AIBFileId: DevKit.Controls.Lookup;
			/** LastModifiedDate */
			msdyn_LastModifiedDate: DevKit.Controls.DateTime;
			/** Required name field */
			msdyn_Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
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
	 * Usage: new msdyn_AIBDatasetFile.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_AIBDatasetFile Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_AIBDatasetId', 'msdyn_AIBFileId', 'msdyn_LastModifiedDate', 'msdyn_Name', 'OwnerId'],
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

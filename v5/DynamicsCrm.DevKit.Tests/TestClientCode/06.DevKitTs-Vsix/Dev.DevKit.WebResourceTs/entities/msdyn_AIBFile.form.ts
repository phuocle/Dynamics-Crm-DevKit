/**
 * msdyn_AIBFile.form.ts - msdyn_AIBFile Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_AIBFile containing form classes: msdyn_AIBFile.FormClassName
 * 3. Aggregate Form class: msdyn_AIBFile.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_AIBFile {

	// ========================================================================
	// Form: msdyn_AIBFile_Information
	// ========================================================================

	export namespace msdyn_AIBFile_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** AI Builder Datasets Container */
			msdyn_AIBDatasetsContainerId: DevKit.Controls.Lookup;
			/** Checksum */
			msdyn_Checksum: DevKit.Controls.String;
			/** ImportMetadata */
			msdyn_ImportMetadata: DevKit.Controls.Memo;
			/** MimeType */
			msdyn_MimeType: DevKit.Controls.String;
			/** Required name field */
			msdyn_Name: DevKit.Controls.String;
			/** Size */
			msdyn_Size: DevKit.Controls.Integer;
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
	 * msdyn_AIBFile_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_AIBFile.msdyn_AIBFile_Information(executionContext)
	 */
	export class msdyn_AIBFile_Information extends FormBase<msdyn_AIBFile_Information.IBody, msdyn_AIBFile_Information.IHeader, msdyn_AIBFile_Information.IGrid, msdyn_AIBFile_Information.INavigation, msdyn_AIBFile_Information.IQuickForm, msdyn_AIBFile_Information.IProcess, msdyn_AIBFile_Information.IDialog> {
		/**
		 * Creates a msdyn_AIBFile_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_AIBDatasetsContainerId', 'msdyn_Checksum', 'msdyn_ImportMetadata', 'msdyn_MimeType', 'msdyn_Name', 'msdyn_Size', 'OwnerId'],
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
			/** AI Builder Datasets Container */
			msdyn_AIBDatasetsContainerId: DevKit.Controls.Lookup;
			/** Checksum */
			msdyn_Checksum: DevKit.Controls.String;
			/** ImportMetadata */
			msdyn_ImportMetadata: DevKit.Controls.Memo;
			/** MimeType */
			msdyn_MimeType: DevKit.Controls.String;
			/** Required name field */
			msdyn_Name: DevKit.Controls.String;
			/** Size */
			msdyn_Size: DevKit.Controls.Integer;
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
	 * Usage: new msdyn_AIBFile.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_AIBFile Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_AIBDatasetsContainerId', 'msdyn_Checksum', 'msdyn_ImportMetadata', 'msdyn_MimeType', 'msdyn_Name', 'msdyn_Size', 'OwnerId'],
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

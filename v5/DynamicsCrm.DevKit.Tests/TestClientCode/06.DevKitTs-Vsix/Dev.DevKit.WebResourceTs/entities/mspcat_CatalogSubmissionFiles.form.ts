/**
 * mspcat_CatalogSubmissionFiles.form.ts - mspcat_CatalogSubmissionFiles Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspcat_CatalogSubmissionFiles containing form classes: mspcat_CatalogSubmissionFiles.FormClassName
 * 3. Aggregate Form class: mspcat_CatalogSubmissionFiles.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspcat_CatalogSubmissionFiles {

	// ========================================================================
	// Form: Main_Information_Form
	// ========================================================================

	export namespace Main_Information_Form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who created the record. */
			CreatedOnBehalfBy: DevKit.Controls.Lookup;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who modified the record. */
			ModifiedOnBehalfBy: DevKit.Controls.Lookup;
			/** File Item description */
			mspcat_Description: DevKit.Controls.Memo;
			/** File asset */
			mspcat_File: DevKit.Controls.File;
			/** Type of File Described */
			mspcat_FileType: DevKit.Controls.OptionSet;
			/** Size of Image Described */
			mspcat_ImageSize: DevKit.Controls.OptionSet;
			/** Name */
			mspcat_Name: DevKit.Controls.String;
			/** Related Package Store Item. */
			mspcat_PackageStore: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Status of the Catalog Submission Files */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Catalog Submission Files */
			statuscode: DevKit.Controls.OptionSet;
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
	 * Main_Information_Form Form class
	 * Provides typed access to all form controls
	 * Usage: new mspcat_CatalogSubmissionFiles.Main_Information_Form(executionContext)
	 */
	export class Main_Information_Form extends FormBase<Main_Information_Form.IBody, Main_Information_Form.IHeader, Main_Information_Form.IGrid, Main_Information_Form.INavigation, Main_Information_Form.IQuickForm, Main_Information_Form.IProcess, Main_Information_Form.IDialog> {
		/**
		 * Creates a Main_Information_Form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedBy', 'CreatedOn', 'CreatedOnBehalfBy', 'ModifiedBy', 'ModifiedOn', 'ModifiedOnBehalfBy', 'mspcat_Description', 'mspcat_File', 'mspcat_FileType', 'mspcat_ImageSize', 'mspcat_Name', 'mspcat_PackageStore', 'OwnerId'],
				header: ['statecode', 'statuscode'],
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
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who created the record. */
			CreatedOnBehalfBy: DevKit.Controls.Lookup;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who modified the record. */
			ModifiedOnBehalfBy: DevKit.Controls.Lookup;
			/** File Item description */
			mspcat_Description: DevKit.Controls.Memo;
			/** File asset */
			mspcat_File: DevKit.Controls.File;
			/** Type of File Described */
			mspcat_FileType: DevKit.Controls.OptionSet;
			/** Size of Image Described */
			mspcat_ImageSize: DevKit.Controls.OptionSet;
			/** Name */
			mspcat_Name: DevKit.Controls.String;
			/** Related Package Store Item. */
			mspcat_PackageStore: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Status of the Catalog Submission Files */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Catalog Submission Files */
			statuscode: DevKit.Controls.OptionSet;
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
	 * Usage: new mspcat_CatalogSubmissionFiles.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspcat_CatalogSubmissionFiles Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedBy', 'CreatedOn', 'CreatedOnBehalfBy', 'ModifiedBy', 'ModifiedOn', 'ModifiedOnBehalfBy', 'mspcat_Description', 'mspcat_File', 'mspcat_FileType', 'mspcat_ImageSize', 'mspcat_Name', 'mspcat_PackageStore', 'OwnerId'],
				header: ['statecode', 'statuscode'],
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

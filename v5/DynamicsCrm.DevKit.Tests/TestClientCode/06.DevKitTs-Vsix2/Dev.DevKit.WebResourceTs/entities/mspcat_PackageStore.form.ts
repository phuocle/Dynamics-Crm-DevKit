/**
 * mspcat_PackageStore.form.ts - mspcat_PackageStore Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspcat_PackageStore containing form classes: mspcat_PackageStore.FormClassName
 * 3. Aggregate Form class: mspcat_PackageStore.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspcat_PackageStore {

	// ========================================================================
	// Form: Packages
	// ========================================================================

	export namespace Packages {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who modified the record. */
			ModifiedOnBehalfBy: DevKit.Controls.Lookup;
			/** Async Job used to track this operation.  */
			mspcat_AsyncOperationId: DevKit.Controls.String;
			/** Type of Deployment this package is intended to be used for */
			mspcat_IntendedDeploymentType: DevKit.Controls.OptionSet;
			/** Name */
			mspcat_Name: DevKit.Controls.String;
			/** Describes the request operation on this package */
			mspcat_Operation: DevKit.Controls.OptionSet;
			/** File that the package is stored in */
			mspcat_PackageFile: DevKit.Controls.File;
			/** Processing Message */
			mspcat_ProcessingMessage: DevKit.Controls.String;
			/** Link between the solution unique name and the catalog package */
			mspcat_SolutionUniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the Package Store */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Package Store */
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
			/** Files for Submission To Catalog */
			Subgrid_new_1: DevKit.Controls.Grid;
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
	 * Packages Form class
	 * Provides typed access to all form controls
	 * Usage: new mspcat_PackageStore.Packages(executionContext)
	 */
	export class Packages extends FormBase<Packages.IBody, Packages.IHeader, Packages.IGrid, Packages.INavigation, Packages.IQuickForm, Packages.IProcess, Packages.IDialog> {
		/**
		 * Creates a Packages Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ModifiedBy', 'ModifiedOn', 'ModifiedOnBehalfBy', 'mspcat_AsyncOperationId', 'mspcat_IntendedDeploymentType', 'mspcat_Name', 'mspcat_Operation', 'mspcat_PackageFile', 'mspcat_ProcessingMessage', 'mspcat_SolutionUniqueName', 'OwnerId', 'statecode', 'statuscode'],
				header: [],
				tab: [],
				grid: ['Subgrid_new_1'],
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
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who modified the record. */
			ModifiedOnBehalfBy: DevKit.Controls.Lookup;
			/** Async Job used to track this operation.  */
			mspcat_AsyncOperationId: DevKit.Controls.String;
			/** Type of Deployment this package is intended to be used for */
			mspcat_IntendedDeploymentType: DevKit.Controls.OptionSet;
			/** Name */
			mspcat_Name: DevKit.Controls.String;
			/** Describes the request operation on this package */
			mspcat_Operation: DevKit.Controls.OptionSet;
			/** File that the package is stored in */
			mspcat_PackageFile: DevKit.Controls.File;
			/** Processing Message */
			mspcat_ProcessingMessage: DevKit.Controls.String;
			/** Link between the solution unique name and the catalog package */
			mspcat_SolutionUniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the Package Store */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Package Store */
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
			/** Files for Submission To Catalog */
			Subgrid_new_1: DevKit.Controls.Grid;
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
	 * Usage: new mspcat_PackageStore.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspcat_PackageStore Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ModifiedBy', 'ModifiedOn', 'ModifiedOnBehalfBy', 'mspcat_AsyncOperationId', 'mspcat_IntendedDeploymentType', 'mspcat_Name', 'mspcat_Operation', 'mspcat_PackageFile', 'mspcat_ProcessingMessage', 'mspcat_SolutionUniqueName', 'OwnerId', 'statecode', 'statuscode'],
				header: [],
				tab: [],
				grid: ['Subgrid_new_1'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

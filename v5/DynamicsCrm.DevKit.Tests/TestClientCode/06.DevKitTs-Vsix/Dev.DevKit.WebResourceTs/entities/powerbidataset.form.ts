/**
 * powerbidataset.form.ts - powerbidataset Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace powerbidataset containing form classes: powerbidataset.FormClassName
 * 3. Aggregate Form class: powerbidataset.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace powerbidataset {

	// ========================================================================
	// Form: powerbidataset_Information
	// ========================================================================

	export namespace powerbidataset_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** The objectId of the Power BI dataset */
			DatasetObjectId: DevKit.Controls.String;
			/** Specifies whether the Dataverse connection in this dataset should be updated on solution import to match the target Dataverse environment. Applies only if the dataset has exactly one such connection. */
			DataverseConnectionUpdateEnabled: DevKit.Controls.Boolean;
			/** The Etag of the Power BI dataset at the moment of creating the package */
			Etag: DevKit.Controls.String;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The Power BI package (ZIP) for re-creating the dataset on solution import */
			Package: DevKit.Controls.String;
			/** Unique Name for the entity. */
			UniqueName: DevKit.Controls.String;
			/** The objectId of the Power BI workspace where the dataset resides */
			WorkspaceObjectId: DevKit.Controls.String;
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
	 * powerbidataset_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new powerbidataset.powerbidataset_Information(executionContext)
	 */
	export class powerbidataset_Information extends FormBase<powerbidataset_Information.IBody, powerbidataset_Information.IHeader, powerbidataset_Information.IGrid, powerbidataset_Information.INavigation, powerbidataset_Information.IQuickForm, powerbidataset_Information.IProcess, powerbidataset_Information.IDialog> {
		/**
		 * Creates a powerbidataset_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['DatasetObjectId', 'DataverseConnectionUpdateEnabled', 'Etag', 'name', 'OwnerId', 'Package', 'UniqueName', 'WorkspaceObjectId'],
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
			/** The objectId of the Power BI dataset */
			DatasetObjectId: DevKit.Controls.String;
			/** Specifies whether the Dataverse connection in this dataset should be updated on solution import to match the target Dataverse environment. Applies only if the dataset has exactly one such connection. */
			DataverseConnectionUpdateEnabled: DevKit.Controls.Boolean;
			/** The Etag of the Power BI dataset at the moment of creating the package */
			Etag: DevKit.Controls.String;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The Power BI package (ZIP) for re-creating the dataset on solution import */
			Package: DevKit.Controls.String;
			/** Unique Name for the entity. */
			UniqueName: DevKit.Controls.String;
			/** The objectId of the Power BI workspace where the dataset resides */
			WorkspaceObjectId: DevKit.Controls.String;
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
	 * Usage: new powerbidataset.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate powerbidataset Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['DatasetObjectId', 'DataverseConnectionUpdateEnabled', 'Etag', 'name', 'OwnerId', 'Package', 'UniqueName', 'WorkspaceObjectId'],
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

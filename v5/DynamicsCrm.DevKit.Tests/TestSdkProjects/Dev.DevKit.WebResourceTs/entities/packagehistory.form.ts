/**
 * packagehistory.form.ts - packagehistory Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace packagehistory containing form classes: packagehistory.FormClassName
 * 3. Aggregate Form class: packagehistory.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace packagehistory {

	// ========================================================================
	// Form: packagehistory_Information
	// ========================================================================

	export namespace packagehistory_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** The application name of the target for installation */
			ApplicationName: DevKit.Controls.String;
			/** The catalog that acted as the source for the artifact */
			CatalogId: DevKit.Controls.String;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** deploy package as given user (azureactivedirectoryobjectid) */
			DeployAsUserId: DevKit.Controls.Memo;
			/** The display name for this operation */
			ExecutionName: DevKit.Controls.String;
			/** Indicates whether this package history record represents a cluster operation */
			IsClusterOperation: DevKit.Controls.Boolean;
			/** Stores the package file for installation */
			PackageFile: DevKit.Controls.String;
			/** Type of the package */
			PackageType: DevKit.Controls.OptionSet;
			/** Priority level for the package */
			Priority: DevKit.Controls.OptionSet;
			/** Deployment Package settings value. */
			Settings: DevKit.Controls.Memo;
			/** Stage of the operation */
			StageValue: DevKit.Controls.OptionSet;
			/** The unique name of the target for installation */
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
	 * packagehistory_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new packagehistory.packagehistory_Information(executionContext)
	 */
	export class packagehistory_Information extends FormBase<packagehistory_Information.IBody, packagehistory_Information.IHeader, packagehistory_Information.IGrid, packagehistory_Information.INavigation, packagehistory_Information.IQuickForm, packagehistory_Information.IProcess, packagehistory_Information.IDialog> {
		/**
		 * Creates a packagehistory_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ApplicationName', 'CatalogId', 'CreatedBy', 'DeployAsUserId', 'ExecutionName', 'IsClusterOperation', 'PackageFile', 'PackageType', 'Priority', 'Settings', 'StageValue', 'UniqueName'],
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
			/** The application name of the target for installation */
			ApplicationName: DevKit.Controls.String;
			/** The catalog that acted as the source for the artifact */
			CatalogId: DevKit.Controls.String;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** deploy package as given user (azureactivedirectoryobjectid) */
			DeployAsUserId: DevKit.Controls.Memo;
			/** The display name for this operation */
			ExecutionName: DevKit.Controls.String;
			/** Indicates whether this package history record represents a cluster operation */
			IsClusterOperation: DevKit.Controls.Boolean;
			/** Stores the package file for installation */
			PackageFile: DevKit.Controls.String;
			/** Type of the package */
			PackageType: DevKit.Controls.OptionSet;
			/** Priority level for the package */
			Priority: DevKit.Controls.OptionSet;
			/** Deployment Package settings value. */
			Settings: DevKit.Controls.Memo;
			/** Stage of the operation */
			StageValue: DevKit.Controls.OptionSet;
			/** The unique name of the target for installation */
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
	 * Usage: new packagehistory.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate packagehistory Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ApplicationName', 'CatalogId', 'CreatedBy', 'DeployAsUserId', 'ExecutionName', 'IsClusterOperation', 'PackageFile', 'PackageType', 'Priority', 'Settings', 'StageValue', 'UniqueName'],
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

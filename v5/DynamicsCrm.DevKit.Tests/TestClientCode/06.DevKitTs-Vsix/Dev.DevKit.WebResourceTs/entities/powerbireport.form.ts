/**
 * powerbireport.form.ts - powerbireport Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace powerbireport containing form classes: powerbireport.FormClassName
 * 3. Aggregate Form class: powerbireport.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace powerbireport {

	// ========================================================================
	// Form: powerbireport_Information
	// ========================================================================

	export namespace powerbireport_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** The Id for the Power BI Dataset component representing the Power BI dataset the report is bound to */
			DatasetId: DevKit.Controls.Lookup;
			/** The Etag of the Power BI report at the moment of creating the package */
			Etag: DevKit.Controls.String;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The Power BI package (ZIP) for re-creating the report on solution import */
			Package: DevKit.Controls.String;
			/** The objectId of the Power BI report */
			ReportObjectId: DevKit.Controls.String;
			/** Unique Name for the entity. */
			UniqueName: DevKit.Controls.String;
			/** The objectId of the Power BI workspace where the report resides */
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
	 * powerbireport_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new powerbireport.powerbireport_Information(executionContext)
	 */
	export class powerbireport_Information extends FormBase<powerbireport_Information.IBody, powerbireport_Information.IHeader, powerbireport_Information.IGrid, powerbireport_Information.INavigation, powerbireport_Information.IQuickForm, powerbireport_Information.IProcess, powerbireport_Information.IDialog> {
		/**
		 * Creates a powerbireport_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['DatasetId', 'Etag', 'name', 'OwnerId', 'Package', 'ReportObjectId', 'UniqueName', 'WorkspaceObjectId'],
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
			/** The Id for the Power BI Dataset component representing the Power BI dataset the report is bound to */
			DatasetId: DevKit.Controls.Lookup;
			/** The Etag of the Power BI report at the moment of creating the package */
			Etag: DevKit.Controls.String;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The Power BI package (ZIP) for re-creating the report on solution import */
			Package: DevKit.Controls.String;
			/** The objectId of the Power BI report */
			ReportObjectId: DevKit.Controls.String;
			/** Unique Name for the entity. */
			UniqueName: DevKit.Controls.String;
			/** The objectId of the Power BI workspace where the report resides */
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
	 * Usage: new powerbireport.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate powerbireport Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['DatasetId', 'Etag', 'name', 'OwnerId', 'Package', 'ReportObjectId', 'UniqueName', 'WorkspaceObjectId'],
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

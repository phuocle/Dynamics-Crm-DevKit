/**
 * VirtualEntityMetadata.form.ts - VirtualEntityMetadata Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace VirtualEntityMetadata containing form classes: VirtualEntityMetadata.FormClassName
 * 3. Aggregate Form class: VirtualEntityMetadata.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace VirtualEntityMetadata {

	// ========================================================================
	// Form: VirtualEntityMetadata_Information
	// ========================================================================

	export namespace VirtualEntityMetadata_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** The name of the virtual entity that these settings are for. */
			ExtensionOfRecordId: DevKit.Controls.Lookup;
			/** Whether the OnExternalUpdated message ChangedFields parameter will include data about which fields have changed. */
			IsChangedFieldsEnabledForUpdateEvent: DevKit.Controls.Boolean;
			/** Will enable a message to send information about new records created in the external data source. */
			IsOnExternalCreatedEnabled: DevKit.Controls.Boolean;
			/** Will enable a message to send information about deleted records in the external data source. */
			IsOnExternalDeletedEnabled: DevKit.Controls.Boolean;
			/** Will enable a message to send information about updated records in the external data source. */
			IsOnExternalUpdatedEnabled: DevKit.Controls.Boolean;
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
	 * VirtualEntityMetadata_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new VirtualEntityMetadata.VirtualEntityMetadata_Information(executionContext)
	 */
	export class VirtualEntityMetadata_Information extends FormBase<VirtualEntityMetadata_Information.IBody, VirtualEntityMetadata_Information.IHeader, VirtualEntityMetadata_Information.IGrid, VirtualEntityMetadata_Information.INavigation, VirtualEntityMetadata_Information.IQuickForm, VirtualEntityMetadata_Information.IProcess, VirtualEntityMetadata_Information.IDialog> {
		/**
		 * Creates a VirtualEntityMetadata_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ExtensionOfRecordId', 'IsChangedFieldsEnabledForUpdateEvent', 'IsOnExternalCreatedEnabled', 'IsOnExternalDeletedEnabled', 'IsOnExternalUpdatedEnabled', 'Name'],
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
			/** The name of the virtual entity that these settings are for. */
			ExtensionOfRecordId: DevKit.Controls.Lookup;
			/** Whether the OnExternalUpdated message ChangedFields parameter will include data about which fields have changed. */
			IsChangedFieldsEnabledForUpdateEvent: DevKit.Controls.Boolean;
			/** Will enable a message to send information about new records created in the external data source. */
			IsOnExternalCreatedEnabled: DevKit.Controls.Boolean;
			/** Will enable a message to send information about deleted records in the external data source. */
			IsOnExternalDeletedEnabled: DevKit.Controls.Boolean;
			/** Will enable a message to send information about updated records in the external data source. */
			IsOnExternalUpdatedEnabled: DevKit.Controls.Boolean;
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
	 * Usage: new VirtualEntityMetadata.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate VirtualEntityMetadata Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ExtensionOfRecordId', 'IsChangedFieldsEnabledForUpdateEvent', 'IsOnExternalCreatedEnabled', 'IsOnExternalDeletedEnabled', 'IsOnExternalUpdatedEnabled', 'Name'],
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

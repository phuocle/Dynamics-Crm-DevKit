/**
 * EntityClusterConfig.form.ts - EntityClusterConfig Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace EntityClusterConfig containing form classes: EntityClusterConfig.FormClassName
 * 3. Aggregate Form class: EntityClusterConfig.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace EntityClusterConfig {

	// ========================================================================
	// Form: EntityClusterConfig_Information
	// ========================================================================

	export namespace EntityClusterConfig_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Cluster Mode for the Table */
			ClusterMode: DevKit.Controls.OptionSet;
			/** When creating a partitioned entity record, if a clusterpartitionid is not specified, the entity record is created in a local partition instead of failing the creation operation. */
			DefaultToLocalPartition: DevKit.Controls.Boolean;
			/** The metadata for Entity. */
			ExtensionOfRecordId: DevKit.Controls.Lookup;
			/** The name of the  settings. */
			Name: DevKit.Controls.String;
			/** Specifies if the table should be auto replicated. */
			ShouldAutoReplicate: DevKit.Controls.Boolean;
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
	 * EntityClusterConfig_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new EntityClusterConfig.EntityClusterConfig_Information(executionContext)
	 */
	export class EntityClusterConfig_Information extends FormBase<EntityClusterConfig_Information.IBody, EntityClusterConfig_Information.IHeader, EntityClusterConfig_Information.IGrid, EntityClusterConfig_Information.INavigation, EntityClusterConfig_Information.IQuickForm, EntityClusterConfig_Information.IProcess, EntityClusterConfig_Information.IDialog> {
		/**
		 * Creates a EntityClusterConfig_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ClusterMode', 'DefaultToLocalPartition', 'ExtensionOfRecordId', 'Name', 'ShouldAutoReplicate'],
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
			/** Cluster Mode for the Table */
			ClusterMode: DevKit.Controls.OptionSet;
			/** When creating a partitioned entity record, if a clusterpartitionid is not specified, the entity record is created in a local partition instead of failing the creation operation. */
			DefaultToLocalPartition: DevKit.Controls.Boolean;
			/** The metadata for Entity. */
			ExtensionOfRecordId: DevKit.Controls.Lookup;
			/** The name of the  settings. */
			Name: DevKit.Controls.String;
			/** Specifies if the table should be auto replicated. */
			ShouldAutoReplicate: DevKit.Controls.Boolean;
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
	 * Usage: new EntityClusterConfig.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate EntityClusterConfig Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ClusterMode', 'DefaultToLocalPartition', 'ExtensionOfRecordId', 'Name', 'ShouldAutoReplicate'],
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

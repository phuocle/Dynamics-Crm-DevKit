/**
 * msdyn_connectordatasource.form.ts - msdyn_connectordatasource Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_connectordatasource containing form classes: msdyn_connectordatasource.FormClassName
 * 3. Aggregate Form class: msdyn_connectordatasource.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_connectordatasource {

	// ========================================================================
	// Form: msdyn_connectordatasource_Information
	// ========================================================================

	export namespace msdyn_connectordatasource_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier for Connection Reference associated with ConnectorDataSource. */
			msdyn_ConnectionReferenceId: DevKit.Controls.Lookup;
			/** Dataset Value */
			msdyn_dataset_value: DevKit.Controls.String;
			/** Name */
			msdyn_name: DevKit.Controls.String;
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
	 * msdyn_connectordatasource_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_connectordatasource.msdyn_connectordatasource_Information(executionContext)
	 */
	export class msdyn_connectordatasource_Information extends FormBase<msdyn_connectordatasource_Information.IBody, msdyn_connectordatasource_Information.IHeader, msdyn_connectordatasource_Information.IGrid, msdyn_connectordatasource_Information.INavigation, msdyn_connectordatasource_Information.IQuickForm, msdyn_connectordatasource_Information.IProcess, msdyn_connectordatasource_Information.IDialog> {
		/**
		 * Creates a msdyn_connectordatasource_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_ConnectionReferenceId', 'msdyn_dataset_value', 'msdyn_name'],
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
			/** Unique identifier for Connection Reference associated with ConnectorDataSource. */
			msdyn_ConnectionReferenceId: DevKit.Controls.Lookup;
			/** Dataset Value */
			msdyn_dataset_value: DevKit.Controls.String;
			/** Name */
			msdyn_name: DevKit.Controls.String;
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
	 * Usage: new msdyn_connectordatasource.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_connectordatasource Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_ConnectionReferenceId', 'msdyn_dataset_value', 'msdyn_name'],
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

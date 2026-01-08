/**
 * msdyn_tour.form.ts - msdyn_tour Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_tour containing form classes: msdyn_tour.FormClassName
 * 3. Aggregate Form class: msdyn_tour.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_tour {

	// ========================================================================
	// Form: msdyn_tour_Information
	// ========================================================================

	export namespace msdyn_tour_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Display Name */
			msdyn_displayname: DevKit.Controls.String;
			/** Labels Resource */
			msdyn_labelsresource: DevKit.Controls.String;
			/** Path */
			msdyn_path: DevKit.Controls.String;
			/** Tour Definition */
			msdyn_tourdefinition: DevKit.Controls.Memo;
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
	 * msdyn_tour_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_tour.msdyn_tour_Information(executionContext)
	 */
	export class msdyn_tour_Information extends FormBase<msdyn_tour_Information.IBody, msdyn_tour_Information.IHeader, msdyn_tour_Information.IGrid, msdyn_tour_Information.INavigation, msdyn_tour_Information.IQuickForm, msdyn_tour_Information.IProcess, msdyn_tour_Information.IDialog> {
		/**
		 * Creates a msdyn_tour_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_displayname', 'msdyn_labelsresource', 'msdyn_path', 'msdyn_tourdefinition'],
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
			/** Display Name */
			msdyn_displayname: DevKit.Controls.String;
			/** Labels Resource */
			msdyn_labelsresource: DevKit.Controls.String;
			/** Path */
			msdyn_path: DevKit.Controls.String;
			/** Tour Definition */
			msdyn_tourdefinition: DevKit.Controls.Memo;
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
	 * Usage: new msdyn_tour.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_tour Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_displayname', 'msdyn_labelsresource', 'msdyn_path', 'msdyn_tourdefinition'],
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

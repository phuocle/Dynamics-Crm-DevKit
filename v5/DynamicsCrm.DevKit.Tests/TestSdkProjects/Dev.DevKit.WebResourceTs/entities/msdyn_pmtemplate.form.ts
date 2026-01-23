/**
 * msdyn_pmtemplate.form.ts - msdyn_pmtemplate Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace msdyn_pmtemplate containing form classes: msdyn_pmtemplate.FormClassName
 * 3. Aggregate Form class: msdyn_pmtemplate.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace msdyn_pmtemplate {

	// ========================================================================
	// Form: msdyn_pmtemplate_Information
	// ========================================================================

	export namespace msdyn_pmtemplate_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Author */
			msdyn_author: DevKit.Controls.String;
			/** Category */
			msdyn_category: DevKit.Controls.String;
			/** Configuration */
			msdyn_configuration: DevKit.Controls.Memo;
			/** Description */
			msdyn_description: DevKit.Controls.Memo;
			/** Icon */
			msdyn_icon: DevKit.Controls.Memo;
			/** Icon name */
			msdyn_iconname: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Sub Category */
			msdyn_subcategory: DevKit.Controls.String;
			/** Template group Id */
			msdyn_templategroupid: DevKit.Controls.String;
			/** Template Version */
			msdyn_templateversion: DevKit.Controls.String;
			/** Type */
			msdyn_type: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the PM Template */
			statecode: DevKit.Controls.OptionSet;
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
	 * msdyn_pmtemplate_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new msdyn_pmtemplate.msdyn_pmtemplate_Information(executionContext)
	 */
	export class msdyn_pmtemplate_Information extends FormBase<msdyn_pmtemplate_Information.IBody, msdyn_pmtemplate_Information.IHeader, msdyn_pmtemplate_Information.IGrid, msdyn_pmtemplate_Information.INavigation, msdyn_pmtemplate_Information.IQuickForm, msdyn_pmtemplate_Information.IProcess, msdyn_pmtemplate_Information.IDialog> {
		/**
		 * Creates a msdyn_pmtemplate_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_author', 'msdyn_category', 'msdyn_configuration', 'msdyn_description', 'msdyn_icon', 'msdyn_iconname', 'msdyn_name', 'msdyn_subcategory', 'msdyn_templategroupid', 'msdyn_templateversion', 'msdyn_type', 'msdyn_UniqueName', 'OwnerId', 'statecode'],
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
			/** Author */
			msdyn_author: DevKit.Controls.String;
			/** Category */
			msdyn_category: DevKit.Controls.String;
			/** Configuration */
			msdyn_configuration: DevKit.Controls.Memo;
			/** Description */
			msdyn_description: DevKit.Controls.Memo;
			/** Icon */
			msdyn_icon: DevKit.Controls.Memo;
			/** Icon name */
			msdyn_iconname: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Sub Category */
			msdyn_subcategory: DevKit.Controls.String;
			/** Template group Id */
			msdyn_templategroupid: DevKit.Controls.String;
			/** Template Version */
			msdyn_templateversion: DevKit.Controls.String;
			/** Type */
			msdyn_type: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the PM Template */
			statecode: DevKit.Controls.OptionSet;
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
	 * Usage: new msdyn_pmtemplate.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate msdyn_pmtemplate Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['msdyn_author', 'msdyn_category', 'msdyn_configuration', 'msdyn_description', 'msdyn_icon', 'msdyn_iconname', 'msdyn_name', 'msdyn_subcategory', 'msdyn_templategroupid', 'msdyn_templateversion', 'msdyn_type', 'msdyn_UniqueName', 'OwnerId', 'statecode'],
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

/**
 * mspp_columnpermission.form.ts - mspp_columnpermission Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace mspp_columnpermission containing form classes: mspp_columnpermission.FormClassName
 * 3. Aggregate Form class: mspp_columnpermission.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace mspp_columnpermission {

	// ========================================================================
	// Form: mspp_columnpermission_Information
	// ========================================================================

	export namespace mspp_columnpermission_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** The name of the custom entity. */
			mspp_columnname: DevKit.Controls.String;
			/** Column Permission Profile */
			mspp_columnpermissionprofileid: DevKit.Controls.Lookup;
			/** Permissions */
			mspp_permissions: DevKit.Controls.MultiOptionSet;
			WebResource_mspp_columnnameselector: DevKit.Controls.WebResource;
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
	 * mspp_columnpermission_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new mspp_columnpermission.mspp_columnpermission_Information(executionContext)
	 */
	export class mspp_columnpermission_Information extends FormBase<mspp_columnpermission_Information.IBody, mspp_columnpermission_Information.IHeader, mspp_columnpermission_Information.IGrid, mspp_columnpermission_Information.INavigation, mspp_columnpermission_Information.IQuickForm, mspp_columnpermission_Information.IProcess, mspp_columnpermission_Information.IDialog> {
		/**
		 * Creates a mspp_columnpermission_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_columnname', 'mspp_columnpermissionprofileid', 'mspp_permissions', 'WebResource_mspp_columnnameselector'],
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
			/** The name of the custom entity. */
			mspp_columnname: DevKit.Controls.String;
			/** Column Permission Profile */
			mspp_columnpermissionprofileid: DevKit.Controls.Lookup;
			/** Permissions */
			mspp_permissions: DevKit.Controls.MultiOptionSet;
			WebResource_mspp_columnnameselector: DevKit.Controls.WebResource;
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
	 * Usage: new mspp_columnpermission.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate mspp_columnpermission Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['mspp_columnname', 'mspp_columnpermissionprofileid', 'mspp_permissions', 'WebResource_mspp_columnnameselector'],
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

/**
 * Role.form.ts - Role Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Role containing form classes: Role.FormClassName
 * 3. Aggregate Form class: Role.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Role {

	// ========================================================================
	// Form: Role_Information
	// ========================================================================

	export namespace Role_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier of the user who created the role. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the role was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user who last modified the role. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the role was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Name of the role. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the parent role. */
			ParentRoleId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Role Information */
			role_information: DevKit.Controls.Section;
		}

		/** General */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		export interface ITabs {
			/** General */
			general: IgeneralTab;
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
	 * Role_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new Role.Role_Information(executionContext)
	 */
	export class Role_Information extends FormBase<Role_Information.IBody, Role_Information.IHeader, Role_Information.IGrid, Role_Information.INavigation, Role_Information.IQuickForm, Role_Information.IProcess, Role_Information.IDialog> {
		/**
		 * Creates a Role_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedBy', 'CreatedOn', 'ModifiedBy', 'ModifiedOn', 'Name', 'ParentRoleId'],
				header: [],
				tab: ['general___role_information'],
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
			/** Unique identifier of the user who created the role. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the role was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user who last modified the role. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the role was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Name of the role. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the parent role. */
			ParentRoleId: DevKit.Controls.Lookup;
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
	 * Usage: new Role.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Role Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedBy', 'CreatedOn', 'ModifiedBy', 'ModifiedOn', 'Name', 'ParentRoleId'],
				header: [],
				tab: ['general___role information'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

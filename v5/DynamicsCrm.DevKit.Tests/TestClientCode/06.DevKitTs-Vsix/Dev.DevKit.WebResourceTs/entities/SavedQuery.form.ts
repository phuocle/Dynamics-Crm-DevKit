/**
 * SavedQuery.form.ts - SavedQuery Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace SavedQuery containing form classes: SavedQuery.FormClassName
 * 3. Aggregate Form class: SavedQuery.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace SavedQuery {

	// ========================================================================
	// Form: SavedQuery_Information
	// ========================================================================

	export namespace SavedQuery_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Shows who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Type additional information to describe the view, such as the filter criteria or intended results set. */
			Description: DevKit.Controls.Memo;
			/** Tells whether the component can be customized. */
			IsCustomizable: DevKit.Controls.String;
			/** Tells whether the view is the default view for the specified record type (entity). */
			IsDefault: DevKit.Controls.Boolean;
			/** Choose whether the view is compatible with Quick Find. When users search for specific items, you define the fields that are searched in. */
			IsQuickFindQuery: DevKit.Controls.Boolean;
			/** Tells whether the view was created by a user. */
			IsUserDefined: DevKit.Controls.Boolean;
			/** Shows who last updated the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Type a name for the view to describe what results the view will contain. This name is visible to users in the View list. */
			Name: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Account Information */
			account_information: DevKit.Controls.Section;
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
	 * SavedQuery_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new SavedQuery.SavedQuery_Information(executionContext)
	 */
	export class SavedQuery_Information extends FormBase<SavedQuery_Information.IBody, SavedQuery_Information.IHeader, SavedQuery_Information.IGrid, SavedQuery_Information.INavigation, SavedQuery_Information.IQuickForm, SavedQuery_Information.IProcess, SavedQuery_Information.IDialog> {
		/**
		 * Creates a SavedQuery_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedBy', 'CreatedOn', 'Description', 'IsCustomizable', 'IsDefault', 'IsQuickFindQuery', 'IsUserDefined', 'ModifiedBy', 'ModifiedOn', 'Name'],
				header: [],
				tab: ['general___account_information'],
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
			/** Shows who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Type additional information to describe the view, such as the filter criteria or intended results set. */
			Description: DevKit.Controls.Memo;
			/** Tells whether the component can be customized. */
			IsCustomizable: DevKit.Controls.String;
			/** Tells whether the view is the default view for the specified record type (entity). */
			IsDefault: DevKit.Controls.Boolean;
			/** Choose whether the view is compatible with Quick Find. When users search for specific items, you define the fields that are searched in. */
			IsQuickFindQuery: DevKit.Controls.Boolean;
			/** Tells whether the view was created by a user. */
			IsUserDefined: DevKit.Controls.Boolean;
			/** Shows who last updated the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Type a name for the view to describe what results the view will contain. This name is visible to users in the View list. */
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
	 * Usage: new SavedQuery.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate SavedQuery Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CreatedBy', 'CreatedOn', 'Description', 'IsCustomizable', 'IsDefault', 'IsQuickFindQuery', 'IsUserDefined', 'ModifiedBy', 'ModifiedOn', 'Name'],
				header: [],
				tab: ['general___account information'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

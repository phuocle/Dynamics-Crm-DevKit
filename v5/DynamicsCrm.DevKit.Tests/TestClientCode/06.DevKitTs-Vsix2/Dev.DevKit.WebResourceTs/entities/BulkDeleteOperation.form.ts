/**
 * BulkDeleteOperation.form.ts - BulkDeleteOperation Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace BulkDeleteOperation containing form classes: BulkDeleteOperation.FormClassName
 * 3. Aggregate Form class: BulkDeleteOperation.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace BulkDeleteOperation {

	// ========================================================================
	// Form: BulkDeleteOperation_Information
	// ========================================================================

	export namespace BulkDeleteOperation_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			advfindcontrol: DevKit.Controls.IFrame;
			/** Unique identifier of the user who created the bulk deletion job. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Number of records that could not be deleted by the bulk deletion job. */
			FailureCount: DevKit.Controls.Integer;
			/** Information about if recurrence is defined for the bulk deletion job. */
			IsRecurring: DevKit.Controls.Boolean;
			/** Unique identifier of the user who last modified the bulk deletion job. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job record was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Name of the bulk deletion job. */
			Name: DevKit.Controls.String;
			/** Next scheduled time for the bulk deletion job to run. */
			NextRun: DevKit.Controls.DateTime;
			/** Reason for the status of the bulk deletion job. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Number of records deleted by the bulk deletion job. */
			SuccessCount: DevKit.Controls.Integer;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IpropertiesTabSections {
			/** Details */
			details: DevKit.Controls.Section;
			/** Query Details */
			querydetails: DevKit.Controls.Section;
		}

		/** Properties */
		export interface IpropertiesTab extends DevKit.Controls.ITab {
			Section: IpropertiesTabSections;
		}

		export interface ITabs {
			/** Properties */
			properties: IpropertiesTab;
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
	 * BulkDeleteOperation_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new BulkDeleteOperation.BulkDeleteOperation_Information(executionContext)
	 */
	export class BulkDeleteOperation_Information extends FormBase<BulkDeleteOperation_Information.IBody, BulkDeleteOperation_Information.IHeader, BulkDeleteOperation_Information.IGrid, BulkDeleteOperation_Information.INavigation, BulkDeleteOperation_Information.IQuickForm, BulkDeleteOperation_Information.IProcess, BulkDeleteOperation_Information.IDialog> {
		/**
		 * Creates a BulkDeleteOperation_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['advfindcontrol', 'CreatedBy', 'CreatedOn', 'FailureCount', 'IsRecurring', 'ModifiedBy', 'ModifiedOn', 'Name', 'NextRun', 'StatusCode', 'SuccessCount'],
				header: [],
				tab: ['properties___details', 'properties___querydetails'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: New_bulk_record
	// ========================================================================

	export namespace New_bulk_record {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			advfindcontrol: DevKit.Controls.IFrame;
			/** Unique identifier of the user who created the bulk deletion job. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Number of records that could not be deleted by the bulk deletion job. */
			FailureCount: DevKit.Controls.Integer;
			/** Information about if recurrence is defined for the bulk deletion job. */
			IsRecurring: DevKit.Controls.Boolean;
			/** Unique identifier of the user who last modified the bulk deletion job. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job record was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyn_pcfcolumn: DevKit.Controls.ActionCards;
			/** Name of the bulk deletion job. */
			Name: DevKit.Controls.String;
			/** Next scheduled time for the bulk deletion job to run. */
			NextRun: DevKit.Controls.DateTime;
			/** Reason for the status of the bulk deletion job. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Number of records deleted by the bulk deletion job. */
			SuccessCount: DevKit.Controls.Integer;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface ILegacy_1TabSections {
			/** General */
			general: DevKit.Controls.Section;
			/** Options */
			options: DevKit.Controls.Section;
			/** Results */
			result: DevKit.Controls.Section;
		}

		export interface ILegacy_2TabSections {
			/** Details */
			details: DevKit.Controls.Section;
			/** Query Details */
			querydetails: DevKit.Controls.Section;
		}

		export interface IModern_1TabSections {
			/** New Section */
			New_Section: DevKit.Controls.Section;
		}

		/** General */
		export interface ILegacy_1Tab extends DevKit.Controls.ITab {
			Section: ILegacy_1TabSections;
		}

		/** Properties */
		export interface ILegacy_2Tab extends DevKit.Controls.ITab {
			Section: ILegacy_2TabSections;
		}

		/** General */
		export interface IModern_1Tab extends DevKit.Controls.ITab {
			Section: IModern_1TabSections;
		}

		export interface ITabs {
			/** General */
			Legacy_1: ILegacy_1Tab;
			/** Properties */
			Legacy_2: ILegacy_2Tab;
			/** General */
			Modern_1: IModern_1Tab;
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
	 * New_bulk_record Form class
	 * Provides typed access to all form controls
	 * Usage: new BulkDeleteOperation.New_bulk_record(executionContext)
	 */
	export class New_bulk_record extends FormBase<New_bulk_record.IBody, New_bulk_record.IHeader, New_bulk_record.IGrid, New_bulk_record.INavigation, New_bulk_record.IQuickForm, New_bulk_record.IProcess, New_bulk_record.IDialog> {
		/**
		 * Creates a New_bulk_record Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['advfindcontrol', 'CreatedBy', 'CreatedOn', 'FailureCount', 'IsRecurring', 'ModifiedBy', 'ModifiedOn', 'msdyn_pcfcolumn', 'Name', 'NextRun', 'StatusCode', 'SuccessCount'],
				header: [],
				tab: ['Legacy_1___general', 'Legacy_1___options', 'Legacy_1___result', 'Legacy_2___details', 'Legacy_2___querydetails', 'Modern_1___New_Section'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: New_bulk_record2
	// ========================================================================

	export namespace New_bulk_record2 {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			advfindcontrol: DevKit.Controls.IFrame;
			/** Unique identifier of the user who created the bulk deletion job. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Number of records that could not be deleted by the bulk deletion job. */
			FailureCount: DevKit.Controls.Integer;
			/** Information about if recurrence is defined for the bulk deletion job. */
			IsRecurring: DevKit.Controls.Boolean;
			/** Unique identifier of the user who last modified the bulk deletion job. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job record was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyn_pcfcolumn: DevKit.Controls.ActionCards;
			/** Name of the bulk deletion job. */
			Name: DevKit.Controls.String;
			/** Next scheduled time for the bulk deletion job to run. */
			NextRun: DevKit.Controls.DateTime;
			/** Reason for the status of the bulk deletion job. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Number of records deleted by the bulk deletion job. */
			SuccessCount: DevKit.Controls.Integer;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface ILegacy_1TabSections {
			/** General */
			general: DevKit.Controls.Section;
			/** Options */
			options: DevKit.Controls.Section;
			/** Results */
			result: DevKit.Controls.Section;
		}

		export interface ILegacy_2TabSections {
			/** Details */
			details: DevKit.Controls.Section;
			/** Query Details */
			querydetails: DevKit.Controls.Section;
		}

		export interface IModern_1TabSections {
			/** New Section */
			New_Section: DevKit.Controls.Section;
		}

		/** General */
		export interface ILegacy_1Tab extends DevKit.Controls.ITab {
			Section: ILegacy_1TabSections;
		}

		/** Properties */
		export interface ILegacy_2Tab extends DevKit.Controls.ITab {
			Section: ILegacy_2TabSections;
		}

		/** General */
		export interface IModern_1Tab extends DevKit.Controls.ITab {
			Section: IModern_1TabSections;
		}

		export interface ITabs {
			/** General */
			Legacy_1: ILegacy_1Tab;
			/** Properties */
			Legacy_2: ILegacy_2Tab;
			/** General */
			Modern_1: IModern_1Tab;
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
	 * New_bulk_record2 Form class
	 * Provides typed access to all form controls
	 * Usage: new BulkDeleteOperation.New_bulk_record2(executionContext)
	 */
	export class New_bulk_record2 extends FormBase<New_bulk_record2.IBody, New_bulk_record2.IHeader, New_bulk_record2.IGrid, New_bulk_record2.INavigation, New_bulk_record2.IQuickForm, New_bulk_record2.IProcess, New_bulk_record2.IDialog> {
		/**
		 * Creates a New_bulk_record2 Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['advfindcontrol', 'CreatedBy', 'CreatedOn', 'FailureCount', 'IsRecurring', 'ModifiedBy', 'ModifiedOn', 'msdyn_pcfcolumn', 'Name', 'NextRun', 'StatusCode', 'SuccessCount'],
				header: [],
				tab: ['Legacy_1___general', 'Legacy_1___options', 'Legacy_1___result', 'Legacy_2___details', 'Legacy_2___querydetails', 'Modern_1___New_Section'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: View_bulk_record
	// ========================================================================

	export namespace View_bulk_record {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			advfindcontrol: DevKit.Controls.IFrame;
			/** Unique identifier of the user who created the bulk deletion job. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Number of records that could not be deleted by the bulk deletion job. */
			FailureCount: DevKit.Controls.Integer;
			/** Information about if recurrence is defined for the bulk deletion job. */
			IsRecurring: DevKit.Controls.Boolean;
			/** Unique identifier of the user who last modified the bulk deletion job. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job record was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyn_pcfcolumn: DevKit.Controls.ActionCards;
			/** Name of the bulk deletion job. */
			Name: DevKit.Controls.String;
			/** Next scheduled time for the bulk deletion job to run. */
			NextRun: DevKit.Controls.DateTime;
			/** Reason for the status of the bulk deletion job. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Number of records deleted by the bulk deletion job. */
			SuccessCount: DevKit.Controls.Integer;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface ILegacy_1TabSections {
			/** General */
			general: DevKit.Controls.Section;
			/** Options */
			options: DevKit.Controls.Section;
			/** Results */
			result: DevKit.Controls.Section;
		}

		export interface ILegacy_2TabSections {
			/** Details */
			details: DevKit.Controls.Section;
			/** Query Details */
			querydetails: DevKit.Controls.Section;
		}

		export interface IModern_1TabSections {
			/** PCF Section */
			PCF_Section: DevKit.Controls.Section;
		}

		/** General */
		export interface ILegacy_1Tab extends DevKit.Controls.ITab {
			Section: ILegacy_1TabSections;
		}

		/** Properties */
		export interface ILegacy_2Tab extends DevKit.Controls.ITab {
			Section: ILegacy_2TabSections;
		}

		/** General */
		export interface IModern_1Tab extends DevKit.Controls.ITab {
			Section: IModern_1TabSections;
		}

		export interface ITabs {
			/** General */
			Legacy_1: ILegacy_1Tab;
			/** Properties */
			Legacy_2: ILegacy_2Tab;
			/** General */
			Modern_1: IModern_1Tab;
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
	 * View_bulk_record Form class
	 * Provides typed access to all form controls
	 * Usage: new BulkDeleteOperation.View_bulk_record(executionContext)
	 */
	export class View_bulk_record extends FormBase<View_bulk_record.IBody, View_bulk_record.IHeader, View_bulk_record.IGrid, View_bulk_record.INavigation, View_bulk_record.IQuickForm, View_bulk_record.IProcess, View_bulk_record.IDialog> {
		/**
		 * Creates a View_bulk_record Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['advfindcontrol', 'CreatedBy', 'CreatedOn', 'FailureCount', 'IsRecurring', 'ModifiedBy', 'ModifiedOn', 'msdyn_pcfcolumn', 'Name', 'NextRun', 'StatusCode', 'SuccessCount'],
				header: [],
				tab: ['Legacy_1___general', 'Legacy_1___options', 'Legacy_1___result', 'Legacy_2___details', 'Legacy_2___querydetails', 'Modern_1___PCF_Section'],
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
			advfindcontrol: DevKit.Controls.IFrame;
			/** Unique identifier of the user who created the bulk deletion job. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Number of records that could not be deleted by the bulk deletion job. */
			FailureCount: DevKit.Controls.Integer;
			/** Information about if recurrence is defined for the bulk deletion job. */
			IsRecurring: DevKit.Controls.Boolean;
			/** Unique identifier of the user who last modified the bulk deletion job. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job record was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyn_pcfcolumn: DevKit.Controls.ActionCards;
			/** Name of the bulk deletion job. */
			Name: DevKit.Controls.String;
			/** Next scheduled time for the bulk deletion job to run. */
			NextRun: DevKit.Controls.DateTime;
			/** Reason for the status of the bulk deletion job. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Number of records deleted by the bulk deletion job. */
			SuccessCount: DevKit.Controls.Integer;
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
	 * Usage: new BulkDeleteOperation.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate BulkDeleteOperation Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['advfindcontrol', 'CreatedBy', 'CreatedOn', 'FailureCount', 'IsRecurring', 'ModifiedBy', 'ModifiedOn', 'msdyn_pcfcolumn', 'Name', 'NextRun', 'StatusCode', 'SuccessCount'],
				header: [],
				tab: ['Legacy_1___general', 'Legacy_1___options', 'Legacy_1___result', 'Legacy_2___details', 'Legacy_2___querydetails', 'Modern_1___New Section', 'Modern_1___PCF Section', 'properties___details', 'properties___querydetails'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

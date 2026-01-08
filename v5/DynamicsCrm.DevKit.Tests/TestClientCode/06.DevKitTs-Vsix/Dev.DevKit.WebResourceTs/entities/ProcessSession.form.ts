/**
 * ProcessSession.form.ts - ProcessSession Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace ProcessSession containing form classes: ProcessSession.FormClassName
 * 3. Aggregate Form class: ProcessSession.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace ProcessSession {

	// ========================================================================
	// Form: ProcessSession_Information
	// ========================================================================

	export namespace ProcessSession_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Unique identifier of the user who canceled the dialog session. */
			CanceledBy: DevKit.Controls.Lookup;
			/** Date and time when the dialog session was canceled. */
			CanceledOn: DevKit.Controls.DateTime;
			/** User comments. */
			Comments: DevKit.Controls.Memo;
			/** Unique identifier of the user who completed the dialog session. */
			CompletedBy: DevKit.Controls.Lookup;
			/** Date and time when the dialog session was completed. */
			CompletedOn: DevKit.Controls.DateTime;
			/** Date and time when the dialog session was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Name of the dialog session. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the succeeding linked dialog session. */
			NextLinkedSessionId: DevKit.Controls.Lookup;
			/** Unique identifier of the originating dialog session. */
			OriginatingSessionId: DevKit.Controls.Lookup;
			/** Unique identifier of the user or team who owns the dialog session. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the preceding linked dialog session. */
			PreviousLinkedSessionId: DevKit.Controls.Lookup;
			/** Select the process activation record that is related to the dialog session. */
			ProcessId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the dialog session is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Unique identifier of the user who started the dialog session. */
			StartedBy: DevKit.Controls.Lookup;
			/** Date and time when the dialog session was started. */
			StartedOn: DevKit.Controls.DateTime;
			/** Reason for the status of the dialog session. */
			StatusCode: DevKit.Controls.OptionSet;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface I_474B8A52_CB22_4194_A5A6_F21FD40B7417TabSections {
			/** Details */
			Details: DevKit.Controls.Section;
		}

		export interface ICommentsTabSections {
			/** Comments */
			Comments: DevKit.Controls.Section;
		}

		export interface IDetailsTabSections {
			/** Details */
			Details_2: DevKit.Controls.Section;
		}

		export interface ILinked_SessionsTabSections {
			/** Linked Sessions */
			Linked_Sessions: DevKit.Controls.Section;
		}

		export interface ISummaryTabSections {
			/** Summary */
			Summary: DevKit.Controls.Section;
		}

		/** General */
		export interface I_474B8A52_CB22_4194_A5A6_F21FD40B7417Tab extends DevKit.Controls.ITab {
			Section: I_474B8A52_CB22_4194_A5A6_F21FD40B7417TabSections;
		}

		/** Comments */
		export interface ICommentsTab extends DevKit.Controls.ITab {
			Section: ICommentsTabSections;
		}

		/** Details */
		export interface IDetailsTab extends DevKit.Controls.ITab {
			Section: IDetailsTabSections;
		}

		/** Linked Sessions */
		export interface ILinked_SessionsTab extends DevKit.Controls.ITab {
			Section: ILinked_SessionsTabSections;
		}

		/** Summary */
		export interface ISummaryTab extends DevKit.Controls.ITab {
			Section: ISummaryTabSections;
		}

		export interface ITabs {
			/** General */
			_474B8A52_CB22_4194_A5A6_F21FD40B7417: I_474B8A52_CB22_4194_A5A6_F21FD40B7417Tab;
			/** Comments */
			Comments: ICommentsTab;
			/** Details */
			Details: IDetailsTab;
			/** Linked Sessions */
			Linked_Sessions: ILinked_SessionsTab;
			/** Summary */
			Summary: ISummaryTab;
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
	 * ProcessSession_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new ProcessSession.ProcessSession_Information(executionContext)
	 */
	export class ProcessSession_Information extends FormBase<ProcessSession_Information.IBody, ProcessSession_Information.IHeader, ProcessSession_Information.IGrid, ProcessSession_Information.INavigation, ProcessSession_Information.IQuickForm, ProcessSession_Information.IProcess, ProcessSession_Information.IDialog> {
		/**
		 * Creates a ProcessSession_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CanceledBy', 'CanceledOn', 'Comments', 'CompletedBy', 'CompletedOn', 'CreatedOn', 'Name', 'NextLinkedSessionId', 'OriginatingSessionId', 'OwnerId', 'PreviousLinkedSessionId', 'ProcessId', 'RegardingObjectId', 'StartedBy', 'StartedOn', 'StatusCode'],
				header: [],
				tab: ['_474B8A52_CB22_4194_A5A6_F21FD40B7417___Details', 'Comments___Comments', 'Details___Details_2', 'Linked_Sessions___Linked_Sessions', 'Summary___Summary'],
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
			/** Unique identifier of the user who canceled the dialog session. */
			CanceledBy: DevKit.Controls.Lookup;
			/** Date and time when the dialog session was canceled. */
			CanceledOn: DevKit.Controls.DateTime;
			/** User comments. */
			Comments: DevKit.Controls.Memo;
			/** Unique identifier of the user who completed the dialog session. */
			CompletedBy: DevKit.Controls.Lookup;
			/** Date and time when the dialog session was completed. */
			CompletedOn: DevKit.Controls.DateTime;
			/** Date and time when the dialog session was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Name of the dialog session. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the succeeding linked dialog session. */
			NextLinkedSessionId: DevKit.Controls.Lookup;
			/** Unique identifier of the originating dialog session. */
			OriginatingSessionId: DevKit.Controls.Lookup;
			/** Unique identifier of the user or team who owns the dialog session. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the preceding linked dialog session. */
			PreviousLinkedSessionId: DevKit.Controls.Lookup;
			/** Select the process activation record that is related to the dialog session. */
			ProcessId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the dialog session is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Unique identifier of the user who started the dialog session. */
			StartedBy: DevKit.Controls.Lookup;
			/** Date and time when the dialog session was started. */
			StartedOn: DevKit.Controls.DateTime;
			/** Reason for the status of the dialog session. */
			StatusCode: DevKit.Controls.OptionSet;
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
	 * Usage: new ProcessSession.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate ProcessSession Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['CanceledBy', 'CanceledOn', 'Comments', 'CompletedBy', 'CompletedOn', 'CreatedOn', 'Name', 'NextLinkedSessionId', 'OriginatingSessionId', 'OwnerId', 'PreviousLinkedSessionId', 'ProcessId', 'RegardingObjectId', 'StartedBy', 'StartedOn', 'StatusCode'],
				header: [],
				tab: ['{474B8A52-CB22-4194-A5A6-F21FD40B7417}___Details', 'Comments___Comments', 'Details___Details_2', 'Linked Sessions___Linked Sessions', 'Summary___Summary'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

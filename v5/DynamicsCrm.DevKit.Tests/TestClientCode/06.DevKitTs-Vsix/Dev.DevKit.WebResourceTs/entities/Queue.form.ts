/**
 * Queue.form.ts - Queue Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Queue containing form classes: Queue.FormClassName
 * 3. Aggregate Form class: Queue.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Queue {

	// ========================================================================
	// Form: Queue_Information
	// ========================================================================

	export namespace Queue_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Select the mailbox associated with this queue. */
			DefaultMailbox: DevKit.Controls.Lookup;
			/** Description of the queue. */
			Description: DevKit.Controls.Memo;
			/** Email address that is associated with the queue. */
			EMailAddress: DevKit.Controls.String;
			/** Convert Incoming Email To Activities */
			IncomingEmailFilteringMethod: DevKit.Controls.OptionSet;
			/** Name of the queue. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the queue. */
			OwnerId: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** Email Configuration */
			email_configuration: DevKit.Controls.Section;
			/** Incoming Email */
			incoming_email: DevKit.Controls.Section;
			/** Queue Information */
			queue_information: DevKit.Controls.Section;
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
			/** Activities */
			navActivities: DevKit.Controls.NavigationItem;
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
	 * Queue_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new Queue.Queue_Information(executionContext)
	 */
	export class Queue_Information extends FormBase<Queue_Information.IBody, Queue_Information.IHeader, Queue_Information.IGrid, Queue_Information.INavigation, Queue_Information.IQuickForm, Queue_Information.IProcess, Queue_Information.IDialog> {
		/**
		 * Creates a Queue_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['DefaultMailbox', 'Description', 'EMailAddress', 'IncomingEmailFilteringMethod', 'Name', 'OwnerId'],
				header: [],
				tab: ['general___email_configuration', 'general___incoming_email', 'general___queue_information'],
				grid: [],
				navigation: ['navActivities'],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Queue
	// ========================================================================

	export namespace Queue {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Select the mailbox associated with this queue. */
			DefaultMailbox: DevKit.Controls.Lookup;
			/** Description of the queue. */
			Description: DevKit.Controls.Memo;
			/** Email address that is associated with the queue. */
			EMailAddress: DevKit.Controls.String;
			/** Convert Incoming Email To Activities */
			IncomingEmailFilteringMethod: DevKit.Controls.OptionSet;
			/** Name of the queue. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the queue. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select whether the queue is public or private. A public queue can be viewed by all. A private queue can be viewed only by the members added to the queue. */
			QueueViewType: DevKit.Controls.OptionSet;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IgeneralTabSections {
			/** EMAIL SETTINGS */
			incoming_email: DevKit.Controls.Section;
			/** SUMMARY */
			queue_information: DevKit.Controls.Section;
			QueueItems: DevKit.Controls.Section;
			QueueMembers: DevKit.Controls.Section;
			/** Members */
			QueueMembersNoRecord: DevKit.Controls.Section;
			RecordCreationAndUpdateRule: DevKit.Controls.Section;
		}

		/** Summary */
		export interface IgeneralTab extends DevKit.Controls.ITab {
			Section: IgeneralTabSections;
		}

		export interface ITabs {
			/** Summary */
			general: IgeneralTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** QUEUE ITEMS */
			QueueItemsGrid: DevKit.Controls.Grid;
			/** MEMBERS */
			queuemembersgrid: DevKit.Controls.Grid;
			/** RECORD CREATION AND UPDATE RULES */
			RecordCreationAndUpdateRuleGrid: DevKit.Controls.Grid;
		}

		/**
		 * Navigation interface
		 * Contains navigation items
		 */
		export interface INavigation {
			/** Activities */
			navActivities: DevKit.Controls.NavigationItem;
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
	 * Queue Form class
	 * Provides typed access to all form controls
	 * Usage: new Queue.Queue(executionContext)
	 */
	export class Queue extends FormBase<Queue.IBody, Queue.IHeader, Queue.IGrid, Queue.INavigation, Queue.IQuickForm, Queue.IProcess, Queue.IDialog> {
		/**
		 * Creates a Queue Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['DefaultMailbox', 'Description', 'EMailAddress', 'IncomingEmailFilteringMethod', 'Name', 'OwnerId', 'QueueViewType'],
				header: [],
				tab: ['general___incoming_email', 'general___queue_information', 'general___QueueItems', 'general___QueueMembers', 'general___QueueMembersNoRecord', 'general___RecordCreationAndUpdateRule'],
				grid: ['QueueItemsGrid', 'queuemembersgrid', 'RecordCreationAndUpdateRuleGrid'],
				navigation: ['navActivities'],
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
			/** Select the mailbox associated with this queue. */
			DefaultMailbox: DevKit.Controls.Lookup;
			/** Description of the queue. */
			Description: DevKit.Controls.Memo;
			/** Email address that is associated with the queue. */
			EMailAddress: DevKit.Controls.String;
			/** Convert Incoming Email To Activities */
			IncomingEmailFilteringMethod: DevKit.Controls.OptionSet;
			/** Name of the queue. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the queue. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select whether the queue is public or private. A public queue can be viewed by all. A private queue can be viewed only by the members added to the queue. */
			QueueViewType: DevKit.Controls.OptionSet;
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
			/** QUEUE ITEMS */
			QueueItemsGrid: DevKit.Controls.Grid;
			/** MEMBERS */
			queuemembersgrid: DevKit.Controls.Grid;
			/** RECORD CREATION AND UPDATE RULES */
			RecordCreationAndUpdateRuleGrid: DevKit.Controls.Grid;
		}

		/**
		 * Aggregate Navigation interface
		 */
		export interface INavigation {
			/** Activities */
			navActivities: DevKit.Controls.NavigationItem;
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
	 * Usage: new Queue.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Queue Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['DefaultMailbox', 'Description', 'EMailAddress', 'IncomingEmailFilteringMethod', 'Name', 'OwnerId', 'QueueViewType'],
				header: [],
				tab: ['general___email configuration', 'general___incoming email', 'general___queue information', 'general___QueueItems', 'general___QueueMembers', 'general___QueueMembersNoRecord', 'general___RecordCreationAndUpdateRule'],
				grid: ['QueueItemsGrid', 'queuemembersgrid', 'RecordCreationAndUpdateRuleGrid'],
				navigation: ['navActivities'],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

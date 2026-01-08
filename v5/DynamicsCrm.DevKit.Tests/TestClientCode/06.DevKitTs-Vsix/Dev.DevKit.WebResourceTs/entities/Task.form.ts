/**
 * Task.form.ts - Task Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Task containing form classes: Task.FormClassName
 * 3. Aggregate Form class: Task.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Task {

	// ========================================================================
	// Form: Task
	// ========================================================================

	export namespace Task {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the task. */
			Description: DevKit.Controls.Memo;
			/** Choose the record that the task relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}

		export interface ITASK_TABTabSections {
			/** Description */
			Description: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
			/** TASK */
			TASK: DevKit.Controls.Section;
			/** Task Details */
			task_details: DevKit.Controls.Section;
		}

		/** TASK */
		export interface ITASK_TABTab extends DevKit.Controls.ITab {
			Section: ITASK_TABTabSections;
		}

		export interface ITabs {
			/** TASK */
			TASK_TAB: ITASK_TABTab;
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
	 * Task Form class
	 * Provides typed access to all form controls
	 * Usage: new Task.Task(executionContext)
	 */
	export class Task extends FormBase<Task.IBody, Task.IHeader, Task.IGrid, Task.INavigation, Task.IQuickForm, Task.IProcess, Task.IDialog> {
		/**
		 * Creates a Task Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActualDurationMinutes', 'Description', 'RegardingObjectId', 'Subject'],
				header: ['OwnerId', 'PriorityCode', 'ScheduledEnd', 'StateCode'],
				tab: ['TASK_TAB___Description', 'TASK_TAB___tab_2_section_2', 'TASK_TAB___TASK', 'TASK_TAB___task_details'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Task_for_Interactive_experience
	// ========================================================================

	export namespace Task_for_Interactive_experience {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the task. */
			Description: DevKit.Controls.Memo;
			/** Choose the record that the task relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Choose the record that the task relates to. */
			RegardingObjectId1: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}

		export interface Itab_4TabSections {
			/** Description */
			tab_3_section_3: DevKit.Controls.Section;
			/** DETAILS */
			tab_4_section_2: DevKit.Controls.Section;
			/** Regarding */
			tab_4_section_4: DevKit.Controls.Section;
		}

		/** TASK */
		export interface Itab_4Tab extends DevKit.Controls.ITab {
			Section: Itab_4TabSections;
		}

		export interface ITabs {
			/** TASK */
			tab_4: Itab_4Tab;
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
	 * Task_for_Interactive_experience Form class
	 * Provides typed access to all form controls
	 * Usage: new Task.Task_for_Interactive_experience(executionContext)
	 */
	export class Task_for_Interactive_experience extends FormBase<Task_for_Interactive_experience.IBody, Task_for_Interactive_experience.IHeader, Task_for_Interactive_experience.IGrid, Task_for_Interactive_experience.INavigation, Task_for_Interactive_experience.IQuickForm, Task_for_Interactive_experience.IProcess, Task_for_Interactive_experience.IDialog> {
		/**
		 * Creates a Task_for_Interactive_experience Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActualDurationMinutes', 'Description', 'RegardingObjectId', 'RegardingObjectId1', 'Subject'],
				header: ['OwnerId', 'PriorityCode', 'ScheduledEnd', 'StateCode'],
				tab: ['tab_4___tab_3_section_3', 'tab_4___tab_4_section_2', 'tab_4___tab_4_section_4'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Task_quick_create_form
	// ========================================================================

	export namespace Task_quick_create_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the task. */
			Description: DevKit.Controls.Memo;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Choose the record that the task relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Controls.String;
			/** Form Tabs */
			Tab: ITabs;
		}

		export interface IcreatetaskTabSections {
			task: DevKit.Controls.Section;
			task_2: DevKit.Controls.Section;
			task_3: DevKit.Controls.Section;
		}

		/** Create Task */
		export interface IcreatetaskTab extends DevKit.Controls.ITab {
			Section: IcreatetaskTabSections;
		}

		export interface ITabs {
			/** Create Task */
			createtask: IcreatetaskTab;
		}

	}

	/**
	 * Task_quick_create_form Form class
	 * Provides typed access to all form controls
	 * Usage: new Task.Task_quick_create_form(executionContext)
	 */
	export class Task_quick_create_form extends FormBase<Task_quick_create_form.IBody, undefined, undefined, undefined, undefined, undefined, undefined> {
		/**
		 * Creates a Task_quick_create_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActualDurationMinutes', 'Description', 'OwnerId', 'PriorityCode', 'RegardingObjectId', 'ScheduledEnd', 'Subject'],
				header: [],
				tab: ['createtask___task', 'createtask___task_2', 'createtask___task_3'],
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
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the task. */
			Description: DevKit.Controls.Memo;
			/** Choose the record that the task relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Choose the record that the task relates to. */
			RegardingObjectId1: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Controls.String;
		}

		/**
		 * Aggregate Header controls interface
		 * Contains all header controls from all forms on the entity
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
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
	 * Usage: new Task.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Task Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActualDurationMinutes', 'Description', 'RegardingObjectId', 'RegardingObjectId1', 'Subject'],
				header: ['OwnerId', 'PriorityCode', 'ScheduledEnd', 'StateCode'],
				tab: ['tab_4___tab_3_section_3', 'tab_4___tab_4_section_2', 'tab_4___tab_4_section_4', 'TASK_TAB___Description', 'TASK_TAB___tab_2_section_2', 'TASK_TAB___TASK', 'TASK_TAB___task details'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

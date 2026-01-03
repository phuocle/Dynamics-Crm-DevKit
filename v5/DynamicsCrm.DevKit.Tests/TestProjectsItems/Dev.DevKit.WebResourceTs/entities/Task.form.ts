/**
 * Task.form.ts - Task Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Types - IBody, IHeader, ITabs, IGrid, INavigation, IQuickForm, IProcess
 * 3. Runtime - Form class with field configurations
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

// ============================================================================
// 1. Types
// ============================================================================

export namespace FormTask {

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
	export interface IHeader {
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
		Description: DevKit.Controls.Section;
		tab_2_section_2: DevKit.Controls.Section;
		TASK: DevKit.Controls.Section;
		task_details: DevKit.Controls.Section;
	}

	export interface ITASK_TABTab extends DevKit.Controls.ITab {
		Section: ITASK_TABTabSections;
	}

	export interface ITabs {
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

	// ============================================================================
	// 2. Runtime - Form Class
	// ============================================================================

	/**
	 * Task Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Task Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'ActualDurationMinutes',
					'Description',
					'RegardingObjectId',
					'Subject'
				],
				header: [
					'OwnerId',
					'PriorityCode',
					'ScheduledEnd',
					'StateCode'
				],
				tab: [
					'TASK_TAB___Description',
					'TASK_TAB___tab_2_section_2',
					'TASK_TAB___TASK',
					'TASK_TAB___task_details'
				],
				grid: [
					
				],
				navigation: [
					
				],
				quick: [
					
				],
				bpf: [
					
				],
				dialog: [
					
				]
			});
		}
	}
}

export namespace FormTask_for_Interactive_experience {

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
	export interface IHeader {
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
		tab_3_section_3: DevKit.Controls.Section;
		tab_4_section_2: DevKit.Controls.Section;
		tab_4_section_4: DevKit.Controls.Section;
	}

	export interface Itab_4Tab extends DevKit.Controls.ITab {
		Section: Itab_4TabSections;
	}

	export interface ITabs {
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

	// ============================================================================
	// 2. Runtime - Form Class
	// ============================================================================

	/**
	 * Task Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Task Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'ActualDurationMinutes',
					'Description',
					'RegardingObjectId',
					'RegardingObjectId1',
					'Subject'
				],
				header: [
					'OwnerId',
					'PriorityCode',
					'ScheduledEnd',
					'StateCode'
				],
				tab: [
					'tab_4___tab_3_section_3',
					'tab_4___tab_4_section_2',
					'tab_4___tab_4_section_4'
				],
				grid: [
					
				],
				navigation: [
					
				],
				quick: [
					
				],
				bpf: [
					
				],
				dialog: [
					
				]
			});
		}
	}
}

export namespace FormTask_quick_create_form {

	/**
	 * Body controls interface
	 * Contains all controls on the form body
	 */
	export interface IBody {
		actualdurationminutes: DevKit.Controls.Integer;
		description: DevKit.Controls.Memo;
		ownerid: DevKit.Controls.Lookup;
		prioritycode: DevKit.Controls.OptionSet;
		regardingobjectid: DevKit.Controls.Lookup;
		scheduledend: DevKit.Controls.DateTime;
		subject: DevKit.Controls.String;
		/** Form Tabs */
		Tab: ITabs;
	}

	export interface IHeader {
	}

	export interface IcreatetaskTabSections {
		task: DevKit.Controls.Section;
		task_2: DevKit.Controls.Section;
		task_3: DevKit.Controls.Section;
	}

	export interface IcreatetaskTab extends DevKit.Controls.ITab {
		Section: IcreatetaskTabSections;
	}

	export interface ITabs {
		createtask: IcreatetaskTab;
	}

	export interface IGrid {
	}

	export interface INavigation {
	}

	export interface IQuickForm {
	}

	export interface IProcess extends DevKit.Controls.IProcess {
	}

	export interface IDialog extends DevKit.IDialog {
	}

	/**
	 * Task Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Task Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'ActualDurationMinutes',
					'Description',
					'OwnerId',
					'PriorityCode',
					'RegardingObjectId',
					'ScheduledEnd',
					'Subject'
				],
				header: [
					
				],
				tab: [
					'createtask___task',
					'createtask___task_2',
					'createtask___task_3'
				],
				grid: [
					
				],
				navigation: [
					
				],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}
}


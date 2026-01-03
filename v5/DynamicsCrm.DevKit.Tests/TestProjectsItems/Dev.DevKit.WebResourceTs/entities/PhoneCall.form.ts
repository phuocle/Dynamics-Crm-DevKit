/**
 * PhoneCall.form.ts - PhoneCall Form for early-bound style form coding
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

export namespace FormPhone_Call {

	/**
	 * Body controls interface
	 * Contains all controls on the form body
	 */
	export interface IBody {
		/** Type the number of minutes spent on the phone call. The duration is used in reporting. */
		ActualDurationMinutes: DevKit.Controls.Integer;
		/** Type additional information to describe the phone call, such as the primary message or the products and services discussed. */
		Description: DevKit.Controls.Memo;
		/** Select the direction of the phone call as incoming or outbound. */
		DirectionCode: DevKit.Controls.Boolean;
		/** Enter the account, contact, lead, or user who made the phone call. */
		from: DevKit.Controls.Lookup;
		/** Type the phone number. */
		PhoneNumber: DevKit.Controls.String;
		/** Choose the record that the phone call relates to. */
		RegardingObjectId: DevKit.Controls.Lookup;
		/** Type a short description about the objective or primary topic of the phone call. */
		Subject: DevKit.Controls.String;
		/** Enter the account, contact, lead, or user recipients of the phone call. */
		to: DevKit.Controls.Lookup;
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
		/** Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited. */
		StateCode: DevKit.Controls.OptionSet;
	}

	export interface IphonecallTabSections {
		/** General Information */
		general_information: DevKit.Controls.Section;
		/** Description */
		phone_call_description: DevKit.Controls.Section;
		/** Phone Call Details */
		phone_call_details: DevKit.Controls.Section;
		/** Section */
		tab_2_section_2: DevKit.Controls.Section;
	}

	/** Phone Call */
	export interface IphonecallTab extends DevKit.Controls.ITab {
		Section: IphonecallTabSections;
	}

	export interface ITabs {
		/** Phone Call */
		phonecall: IphonecallTab;
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
	 * PhoneCall Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an PhoneCall Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'ActualDurationMinutes',
					'Description',
					'DirectionCode',
					'from',
					'PhoneNumber',
					'RegardingObjectId',
					'Subject',
					'to'
				],
				header: [
					'OwnerId',
					'PriorityCode',
					'ScheduledEnd',
					'StateCode'
				],
				tab: [
					'phonecall___general_information',
					'phonecall___phone_call_description',
					'phonecall___phone_call_details',
					'phonecall___tab_2_section_2'
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

export namespace FormPhone_Call_for_Interactive_experience {

	/**
	 * Body controls interface
	 * Contains all controls on the form body
	 */
	export interface IBody {
		/** Type the number of minutes spent on the phone call. The duration is used in reporting. */
		ActualDurationMinutes: DevKit.Controls.Integer;
		/** Type additional information to describe the phone call, such as the primary message or the products and services discussed. */
		Description: DevKit.Controls.Memo;
		/** Select the direction of the phone call as incoming or outbound. */
		DirectionCode: DevKit.Controls.Boolean;
		/** Enter the account, contact, lead, or user who made the phone call. */
		from: DevKit.Controls.Lookup;
		/** Type the phone number. */
		PhoneNumber: DevKit.Controls.String;
		/** Choose the record that the phone call relates to. */
		RegardingObjectId: DevKit.Controls.Lookup;
		/** Choose the record that the phone call relates to. */
		RegardingObjectId1: DevKit.Controls.Lookup;
		/** Type a short description about the objective or primary topic of the phone call. */
		Subject: DevKit.Controls.String;
		/** Enter the account, contact, lead, or user recipients of the phone call. */
		to: DevKit.Controls.Lookup;
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
		/** Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited. */
		StateCode: DevKit.Controls.OptionSet;
	}

	export interface Itab_2TabSections {
		/** Regarding */
		tab_2_section_1: DevKit.Controls.Section;
		/** Description */
		tab_2_section_2: DevKit.Controls.Section;
		/** DETAILS */
		tab_2_section_4: DevKit.Controls.Section;
	}

	/** Phone Call */
	export interface Itab_2Tab extends DevKit.Controls.ITab {
		Section: Itab_2TabSections;
	}

	export interface ITabs {
		/** Phone Call */
		tab_2: Itab_2Tab;
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
	 * PhoneCall Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an PhoneCall Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'ActualDurationMinutes',
					'Description',
					'DirectionCode',
					'from',
					'PhoneNumber',
					'RegardingObjectId',
					'RegardingObjectId1',
					'Subject',
					'to'
				],
				header: [
					'OwnerId',
					'PriorityCode',
					'ScheduledEnd',
					'StateCode'
				],
				tab: [
					'tab_2___tab_2_section_1',
					'tab_2___tab_2_section_2',
					'tab_2___tab_2_section_4'
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

export namespace FormPhone_call_quick_create_form {

	/**
	 * Body controls interface
	 * Contains all controls on the form body
	 */
	export interface IBody {
		actualdurationminutes: DevKit.Controls.Integer;
		description: DevKit.Controls.Memo;
		directioncode: DevKit.Controls.Boolean;
		from: DevKit.Controls.Lookup;
		ownerid: DevKit.Controls.Lookup;
		phonenumber: DevKit.Controls.String;
		prioritycode: DevKit.Controls.OptionSet;
		regardingobjectid: DevKit.Controls.Lookup;
		scheduledend: DevKit.Controls.DateTime;
		subject: DevKit.Controls.String;
		to: DevKit.Controls.Lookup;
		/** Form Tabs */
		Tab: ITabs;
	}

	export interface IHeader {
	}

	export interface IPhoneCall_Tab_1TabSections {
		PhoneCall_Description: DevKit.Controls.Section;
		/** DESCRIPTION */
		PhoneCall_Description_2: DevKit.Controls.Section;
		PhoneCall_Description_3: DevKit.Controls.Section;
	}

	/** General */
	export interface IPhoneCall_Tab_1Tab extends DevKit.Controls.ITab {
		Section: IPhoneCall_Tab_1TabSections;
	}

	export interface ITabs {
		/** General */
		PhoneCall_Tab_1: IPhoneCall_Tab_1Tab;
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
	 * PhoneCall Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an PhoneCall Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'ActualDurationMinutes',
					'Description',
					'DirectionCode',
					'from',
					'OwnerId',
					'PhoneNumber',
					'PriorityCode',
					'RegardingObjectId',
					'ScheduledEnd',
					'Subject',
					'to'
				],
				header: [
					
				],
				tab: [
					'PhoneCall_Tab_1___PhoneCall_Description',
					'PhoneCall_Tab_1___PhoneCall_Description_2',
					'PhoneCall_Tab_1___PhoneCall_Description_3'
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


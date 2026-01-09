/**
 * PhoneCall.form.ts - PhoneCall Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace PhoneCall containing form classes: PhoneCall.FormClassName
 * 3. Aggregate Form class: PhoneCall.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace PhoneCall {

	// ========================================================================
	// Form: Phone_Call
	// ========================================================================

	export namespace Phone_Call {

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
		export interface IHeader extends DevKit.Controls.IHeader {
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
	}

	/**
	 * Phone_Call Form class
	 * Provides typed access to all form controls
	 * Usage: new PhoneCall.Phone_Call(executionContext)
	 */
	export class Phone_Call extends FormBase<Phone_Call.IBody, Phone_Call.IHeader, Phone_Call.IGrid, Phone_Call.INavigation, Phone_Call.IQuickForm, Phone_Call.IProcess, Phone_Call.IDialog> {
		/**
		 * Creates a Phone_Call Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActualDurationMinutes', 'Description', 'DirectionCode', 'from', 'PhoneNumber', 'RegardingObjectId', 'Subject', 'to'],
				header: ['OwnerId', 'PriorityCode', 'ScheduledEnd', 'StateCode'],
				tab: ['phonecall___general_information', 'phonecall___phone_call_description', 'phonecall___phone_call_details', 'phonecall___tab_2_section_2'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Phone_Call_for_Interactive_experience
	// ========================================================================

	export namespace Phone_Call_for_Interactive_experience {

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
		export interface IHeader extends DevKit.Controls.IHeader {
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
	}

	/**
	 * Phone_Call_for_Interactive_experience Form class
	 * Provides typed access to all form controls
	 * Usage: new PhoneCall.Phone_Call_for_Interactive_experience(executionContext)
	 */
	export class Phone_Call_for_Interactive_experience extends FormBase<Phone_Call_for_Interactive_experience.IBody, Phone_Call_for_Interactive_experience.IHeader, Phone_Call_for_Interactive_experience.IGrid, Phone_Call_for_Interactive_experience.INavigation, Phone_Call_for_Interactive_experience.IQuickForm, Phone_Call_for_Interactive_experience.IProcess, Phone_Call_for_Interactive_experience.IDialog> {
		/**
		 * Creates a Phone_Call_for_Interactive_experience Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActualDurationMinutes', 'Description', 'DirectionCode', 'from', 'PhoneNumber', 'RegardingObjectId', 'RegardingObjectId1', 'Subject', 'to'],
				header: ['OwnerId', 'PriorityCode', 'ScheduledEnd', 'StateCode'],
				tab: ['tab_2___tab_2_section_1', 'tab_2___tab_2_section_2', 'tab_2___tab_2_section_4'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Phone_call_quick_create_form
	// ========================================================================

	export namespace Phone_call_quick_create_form {

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
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the phone number. */
			PhoneNumber: DevKit.Controls.String;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Choose the record that the phone call relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Type a short description about the objective or primary topic of the phone call. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, or user recipients of the phone call. */
			to: DevKit.Controls.Lookup;
			/** Form Tabs */
			Tab: ITabs;
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

	}

	/**
	 * Phone_call_quick_create_form Form class
	 * Provides typed access to all form controls
	 * Usage: new PhoneCall.Phone_call_quick_create_form(executionContext)
	 */
	export class Phone_call_quick_create_form extends FormBase<Phone_call_quick_create_form.IBody, undefined, undefined, undefined, undefined, undefined, undefined> {
		/**
		 * Creates a Phone_call_quick_create_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActualDurationMinutes', 'Description', 'DirectionCode', 'from', 'OwnerId', 'PhoneNumber', 'PriorityCode', 'RegardingObjectId', 'ScheduledEnd', 'Subject', 'to'],
				header: [],
				tab: ['PhoneCall_Tab_1___PhoneCall_Description', 'PhoneCall_Tab_1___PhoneCall_Description_2', 'PhoneCall_Tab_1___PhoneCall_Description_3'],
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
			/** Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited. */
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
	 * Usage: new PhoneCall.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate PhoneCall Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActualDurationMinutes', 'Description', 'DirectionCode', 'from', 'PhoneNumber', 'RegardingObjectId', 'RegardingObjectId1', 'Subject', 'to'],
				header: ['OwnerId', 'PriorityCode', 'ScheduledEnd', 'StateCode'],
				tab: ['phonecall___general information', 'phonecall___phone call description', 'phonecall___phone call details', 'phonecall___tab_2_section_2', 'tab_2___tab_2_section_1', 'tab_2___tab_2_section_2', 'tab_2___tab_2_section_4'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

/**
 * Appointment.form.ts - Appointment Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Appointment containing form classes: Appointment.FormClassName
 * 3. Aggregate Form class: Appointment.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Appointment {

	// ========================================================================
	// Form: Appointment
	// ========================================================================

	export namespace Appointment {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Controls.Memo;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Controls.Boolean;
			/** Displays whether or not this is an online meeting. */
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Controls.String;
			/** Shows the online meeting join url. */
			onlinemeetingjoinurl: DevKit.Controls.ActionCards;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Controls.Lookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Controls.Integer;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Type a short description about the objective or primary topic of the appointment. */
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
			/** Shows whether the appointment is open, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}

		export interface IappointmentTabSections {
			/** Description */
			appointment_description: DevKit.Controls.Section;
			/** Attachments */
			attachments: DevKit.Controls.Section;
			general_information: DevKit.Controls.Section;
			/** Scheduling Information */
			scheduling_information: DevKit.Controls.Section;
			/** Section */
			tab_2_section_2: DevKit.Controls.Section;
		}

		/** Appointment */
		export interface IappointmentTab extends DevKit.Controls.ITab {
			Section: IappointmentTabSections;
		}

		export interface ITabs {
			/** Appointment */
			appointment: IappointmentTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Attachment */
			attachmentsGrid: DevKit.Controls.Grid;
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
	 * Appointment Form class
	 * Provides typed access to all form controls
	 * Usage: new Appointment.Appointment(executionContext)
	 */
	export class Appointment extends FormBase<Appointment.IBody, Appointment.IHeader, Appointment.IGrid, Appointment.INavigation, Appointment.IQuickForm, Appointment.IProcess, Appointment.IDialog> {
		/**
		 * Creates a Appointment Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'IsAllDayEvent', 'isonlinemeeting', 'Location', 'onlinemeetingjoinurl', 'OptionalAttendees', 'RegardingObjectId', 'requiredattendees', 'ScheduledDurationMinutes', 'ScheduledEnd', 'ScheduledStart', 'Subject'],
				header: ['OwnerId', 'PriorityCode', 'StateCode'],
				tab: ['appointment___appointment_description', 'appointment___attachments', 'appointment___general_information', 'appointment___scheduling_information', 'appointment___tab_2_section_2'],
				grid: ['attachmentsGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Appointment_for_Interactive_experience
	// ========================================================================

	export namespace Appointment_for_Interactive_experience {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Controls.Memo;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Controls.Boolean;
			/** Displays whether or not this is an online meeting. */
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Controls.String;
			/** Shows the online meeting join url. */
			onlinemeetingjoinurl: DevKit.Controls.ActionCards;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId1: DevKit.Controls.Lookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Controls.Lookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Controls.Integer;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Type a short description about the objective or primary topic of the appointment. */
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
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the appointment is open, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}

		export interface Itab_5TabSections {
			/** Description */
			appointment_description: DevKit.Controls.Section;
			/** DETAILS */
			tab_5_section_2: DevKit.Controls.Section;
			/** ATTACHMENTS */
			tab_5_section_3: DevKit.Controls.Section;
			/** Regarding */
			tab_5_section_5: DevKit.Controls.Section;
		}

		/** Appointment */
		export interface Itab_5Tab extends DevKit.Controls.ITab {
			Section: Itab_5TabSections;
		}

		export interface ITabs {
			/** Appointment */
			tab_5: Itab_5Tab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** ATTACHMENTS */
			attachmentsGrid: DevKit.Controls.Grid;
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
	 * Appointment_for_Interactive_experience Form class
	 * Provides typed access to all form controls
	 * Usage: new Appointment.Appointment_for_Interactive_experience(executionContext)
	 */
	export class Appointment_for_Interactive_experience extends FormBase<Appointment_for_Interactive_experience.IBody, Appointment_for_Interactive_experience.IHeader, Appointment_for_Interactive_experience.IGrid, Appointment_for_Interactive_experience.INavigation, Appointment_for_Interactive_experience.IQuickForm, Appointment_for_Interactive_experience.IProcess, Appointment_for_Interactive_experience.IDialog> {
		/**
		 * Creates a Appointment_for_Interactive_experience Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'IsAllDayEvent', 'isonlinemeeting', 'Location', 'onlinemeetingjoinurl', 'OptionalAttendees', 'RegardingObjectId', 'RegardingObjectId1', 'requiredattendees', 'ScheduledDurationMinutes', 'ScheduledEnd', 'ScheduledStart', 'Subject'],
				header: ['OwnerId', 'PriorityCode', 'ScheduledEnd', 'StateCode'],
				tab: ['tab_5___appointment_description', 'tab_5___tab_5_section_2', 'tab_5___tab_5_section_3', 'tab_5___tab_5_section_5'],
				grid: ['attachmentsGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Appointment_Wizard
	// ========================================================================

	export namespace Appointment_Wizard {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Controls.Memo;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Controls.Boolean;
			/** Displays whether or not this is an online meeting. */
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Controls.String;
			/** Shows the online meeting join url. */
			onlinemeetingjoinurl: DevKit.Controls.ActionCards;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Controls.Lookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Controls.Integer;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Select the appointment's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Type a short description about the objective or primary topic of the appointment. */
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
		}

		export interface IappointmentTabSections {
			/** Description */
			appointment_description: DevKit.Controls.Section;
			/** Attachments */
			attachments: DevKit.Controls.Section;
			general_information: DevKit.Controls.Section;
			Hidden_Section: DevKit.Controls.Section;
			scheduling_information: DevKit.Controls.Section;
		}

		export interface IappointmentTab extends DevKit.Controls.ITab {
			Section: IappointmentTabSections;
		}

		export interface ITabs {
			appointment: IappointmentTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Attachment */
			attachmentsGrid: DevKit.Controls.Grid;
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
	 * Appointment_Wizard Form class
	 * Provides typed access to all form controls
	 * Usage: new Appointment.Appointment_Wizard(executionContext)
	 */
	export class Appointment_Wizard extends FormBase<Appointment_Wizard.IBody, Appointment_Wizard.IHeader, Appointment_Wizard.IGrid, Appointment_Wizard.INavigation, Appointment_Wizard.IQuickForm, Appointment_Wizard.IProcess, Appointment_Wizard.IDialog> {
		/**
		 * Creates a Appointment_Wizard Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'IsAllDayEvent', 'isonlinemeeting', 'Location', 'onlinemeetingjoinurl', 'OptionalAttendees', 'RegardingObjectId', 'requiredattendees', 'ScheduledDurationMinutes', 'ScheduledEnd', 'ScheduledStart', 'StatusCode', 'Subject'],
				header: ['OwnerId', 'PriorityCode'],
				tab: ['appointment___appointment_description', 'appointment___attachments', 'appointment___general_information', 'appointment___Hidden_Section', 'appointment___scheduling_information'],
				grid: ['attachmentsGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Appointment_quick_create_form
	// ========================================================================

	export namespace Appointment_quick_create_form {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Controls.Memo;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Controls.Boolean;
			/** Displays whether or not this is an online meeting. */
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Controls.String;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Controls.Lookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Controls.Integer;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Type a short description about the objective or primary topic of the appointment. */
			Subject: DevKit.Controls.String;
			/** Form Tabs */
			Tab: ITabs;
		}

		export interface Itab_1TabSections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			/** APPOINTMENT DETAILS */
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}

		export interface Itab_1Tab extends DevKit.Controls.ITab {
			Section: Itab_1TabSections;
		}

		export interface ITabs {
			tab_1: Itab_1Tab;
		}

	}

	/**
	 * Appointment_quick_create_form Form class
	 * Provides typed access to all form controls
	 * Usage: new Appointment.Appointment_quick_create_form(executionContext)
	 */
	export class Appointment_quick_create_form extends FormBase<Appointment_quick_create_form.IBody, undefined, undefined, undefined, undefined, undefined, undefined> {
		/**
		 * Creates a Appointment_quick_create_form Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'IsAllDayEvent', 'isonlinemeeting', 'Location', 'OptionalAttendees', 'OwnerId', 'PriorityCode', 'RegardingObjectId', 'requiredattendees', 'ScheduledDurationMinutes', 'ScheduledEnd', 'ScheduledStart', 'Subject'],
				header: [],
				tab: ['tab_1___tab_1_column_1_section_1', 'tab_1___tab_1_column_2_section_1', 'tab_1___tab_1_column_3_section_1'],
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
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Controls.Memo;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Controls.Boolean;
			/** Displays whether or not this is an online meeting. */
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Controls.String;
			/** Shows the online meeting join url. */
			onlinemeetingjoinurl: DevKit.Controls.ActionCards;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Choose the record that the appointment relates to. */
			RegardingObjectId1: DevKit.Controls.Lookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Controls.Lookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Controls.Integer;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Select the appointment's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Type a short description about the objective or primary topic of the appointment. */
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
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the appointment is open, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}

		/**
		 * Aggregate Grid controls interface
		 */
		export interface IGrid {
			/** Attachment */
			attachmentsGrid: DevKit.Controls.Grid;
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
	 * Usage: new Appointment.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Appointment Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'IsAllDayEvent', 'isonlinemeeting', 'Location', 'onlinemeetingjoinurl', 'OptionalAttendees', 'RegardingObjectId', 'RegardingObjectId1', 'requiredattendees', 'ScheduledDurationMinutes', 'ScheduledEnd', 'ScheduledStart', 'StatusCode', 'Subject'],
				header: ['OwnerId', 'PriorityCode', 'ScheduledEnd', 'StateCode'],
				tab: ['appointment___appointment description', 'appointment___attachments', 'appointment___general information', 'appointment___Hidden Section', 'appointment___scheduling information', 'appointment___tab_2_section_2', 'tab_5___appointment description', 'tab_5___tab_5_section_2', 'tab_5___tab_5_section_3', 'tab_5___tab_5_section_5'],
				grid: ['attachmentsGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

/**
 * RecurringAppointmentMaster.form.ts - RecurringAppointmentMaster Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace RecurringAppointmentMaster containing form classes: RecurringAppointmentMaster.FormClassName
 * 3. Aggregate Form class: RecurringAppointmentMaster.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace RecurringAppointmentMaster {

	// ========================================================================
	// Form: Recurring_Appointment
	// ========================================================================

	export namespace Recurring_Appointment {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type additional information to describe the recurring appointment, such as key talking points or objectives. */
			Description: DevKit.Controls.Memo;
			/** Displays whether or not this is an online meeting. */
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Type the location where the recurring appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Controls.String;
			/** Shows the online meeting join url. */
			onlinemeetingjoinurl: DevKit.Controls.ActionCards;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the recurring appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Choose the record that the recurring appointment series relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the recurring appointment. */
			RequiredAttendees: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the recurring appointment. */
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
			/** Shows whether the recurring appointment is open, scheduled, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}

		export interface ISUMMARY_TABTabSections {
			/** Description */
			appointment_description: DevKit.Controls.Section;
			general_information: DevKit.Controls.Section;
			/** Section */
			tab_2_section_2: DevKit.Controls.Section;
		}

		/** Recurring Appointment */
		export interface ISUMMARY_TABTab extends DevKit.Controls.ITab {
			Section: ISUMMARY_TABTabSections;
		}

		export interface ITabs {
			/** Recurring Appointment */
			SUMMARY_TAB: ISUMMARY_TABTab;
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
	 * Recurring_Appointment Form class
	 * Provides typed access to all form controls
	 * Usage: new RecurringAppointmentMaster.Recurring_Appointment(executionContext)
	 */
	export class Recurring_Appointment extends FormBase<Recurring_Appointment.IBody, Recurring_Appointment.IHeader, Recurring_Appointment.IGrid, Recurring_Appointment.INavigation, Recurring_Appointment.IQuickForm, Recurring_Appointment.IProcess, Recurring_Appointment.IDialog> {
		/**
		 * Creates a Recurring_Appointment Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'isonlinemeeting', 'Location', 'onlinemeetingjoinurl', 'OptionalAttendees', 'RegardingObjectId', 'RequiredAttendees', 'Subject'],
				header: ['OwnerId', 'PriorityCode', 'StateCode'],
				tab: ['SUMMARY_TAB___appointment_description', 'SUMMARY_TAB___general_information', 'SUMMARY_TAB___tab_2_section_2'],
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
			/** Type additional information to describe the recurring appointment, such as key talking points or objectives. */
			Description: DevKit.Controls.Memo;
			/** Displays whether or not this is an online meeting. */
			isonlinemeeting: DevKit.Controls.ActionCards;
			/** Type the location where the recurring appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Controls.String;
			/** Shows the online meeting join url. */
			onlinemeetingjoinurl: DevKit.Controls.ActionCards;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the recurring appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Controls.Lookup;
			/** Choose the record that the recurring appointment series relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the recurring appointment. */
			RequiredAttendees: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the recurring appointment. */
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
			/** Shows whether the recurring appointment is open, scheduled, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
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
	 * Usage: new RecurringAppointmentMaster.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate RecurringAppointmentMaster Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'isonlinemeeting', 'Location', 'onlinemeetingjoinurl', 'OptionalAttendees', 'RegardingObjectId', 'RequiredAttendees', 'Subject'],
				header: ['OwnerId', 'PriorityCode', 'StateCode'],
				tab: ['SUMMARY_TAB___appointment description', 'SUMMARY_TAB___general information', 'SUMMARY_TAB___tab_2_section_2'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

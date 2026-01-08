/**
 * Email.form.ts - Email Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Email containing form classes: Email.FormClassName
 * 3. Aggregate Form class: Email.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Email {

	// ========================================================================
	// Form: Email
	// ========================================================================

	export namespace Email {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type the number of minutes spent creating and sending the email. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Enter the recipients that are included on the email distribution, but are not displayed to other recipients. */
			bcc: DevKit.Controls.Lookup;
			/** Enter the recipients that should be copied on the email. */
			cc: DevKit.Controls.Lookup;
			/** Type the greeting and message text of the email. */
			Description: DevKit.Controls.Memo;
			emailengagementactionscontrol: DevKit.Controls.EmailEngagement;
			emailrecipientactivitycontrol: DevKit.Controls.EmailRecipient;
			/** Enter the sender of the email. */
			from: DevKit.Controls.Lookup;
			/** Choose the record that the email relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
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
			/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Select the email's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}

		export interface IEmailTabSections {
			/** Attachments */
			attachments: DevKit.Controls.Section;
			/** E-mail Description */
			email_description: DevKit.Controls.Section;
			/** EMAIL ENGAGEMENT */
			emailengagementactions: DevKit.Controls.Section;
			/** RECIPIENT ACTIVITY */
			Emailrecipient_section_6: DevKit.Controls.Section;
			/** Recipient Information */
			recipient_information: DevKit.Controls.Section;
			Regarding_information: DevKit.Controls.Section;
			/** Section */
			tab_4_section_2: DevKit.Controls.Section;
		}

		/** Email */
		export interface IEmailTab extends DevKit.Controls.ITab {
			Section: IEmailTabSections;
		}

		export interface ITabs {
			/** Email */
			Email: IEmailTab;
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
	 * Email Form class
	 * Provides typed access to all form controls
	 * Usage: new Email.Email(executionContext)
	 */
	export class Email extends FormBase<Email.IBody, Email.IHeader, Email.IGrid, Email.INavigation, Email.IQuickForm, Email.IProcess, Email.IDialog> {
		/**
		 * Creates a Email Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActualDurationMinutes', 'bcc', 'cc', 'Description', 'emailengagementactionscontrol', 'emailrecipientactivitycontrol', 'from', 'RegardingObjectId', 'Subject', 'to'],
				header: ['OwnerId', 'PriorityCode', 'ScheduledEnd', 'StatusCode'],
				tab: ['Email___attachments', 'Email___email_description', 'Email___emailengagementactions', 'Email___Emailrecipient_section_6', 'Email___recipient_information', 'Email___Regarding_information', 'Email___tab_4_section_2'],
				grid: ['attachmentsGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Email_for_Interactive_experience
	// ========================================================================

	export namespace Email_for_Interactive_experience {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Enter the recipients that are included on the email distribution, but are not displayed to other recipients. */
			bcc: DevKit.Controls.Lookup;
			/** Enter the recipients that should be copied on the email. */
			cc: DevKit.Controls.Lookup;
			/** Type the greeting and message text of the email. */
			Description: DevKit.Controls.Memo;
			/** Enter the sender of the email. */
			from: DevKit.Controls.Lookup;
			/** Choose the record that the email relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
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
			/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Select the email's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}

		export interface Itab_2TabSections {
			/** DETAILS */
			tab_2_section_2: DevKit.Controls.Section;
			/** ATTACHMENTS */
			tab_2_section_3: DevKit.Controls.Section;
			/** REGARDING */
			tab_2_section_5: DevKit.Controls.Section;
		}

		/** Email */
		export interface Itab_2Tab extends DevKit.Controls.ITab {
			Section: Itab_2TabSections;
		}

		export interface ITabs {
			/** Email */
			tab_2: Itab_2Tab;
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
	 * Email_for_Interactive_experience Form class
	 * Provides typed access to all form controls
	 * Usage: new Email.Email_for_Interactive_experience(executionContext)
	 */
	export class Email_for_Interactive_experience extends FormBase<Email_for_Interactive_experience.IBody, Email_for_Interactive_experience.IHeader, Email_for_Interactive_experience.IGrid, Email_for_Interactive_experience.INavigation, Email_for_Interactive_experience.IQuickForm, Email_for_Interactive_experience.IProcess, Email_for_Interactive_experience.IDialog> {
		/**
		 * Creates a Email_for_Interactive_experience Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['bcc', 'cc', 'Description', 'from', 'RegardingObjectId', 'Subject', 'to'],
				header: ['OwnerId', 'PriorityCode', 'ScheduledEnd', 'StatusCode'],
				tab: ['tab_2___tab_2_section_2', 'tab_2___tab_2_section_3', 'tab_2___tab_2_section_5'],
				grid: ['attachmentsGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Enhanced_Email
	// ========================================================================

	export namespace Enhanced_Email {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Enter the recipients that are included on the email distribution, but are not displayed to other recipients. */
			bcc: DevKit.Controls.Lookup;
			/** Enter the recipients that should be copied on the email. */
			cc: DevKit.Controls.Lookup;
			/** Type the greeting and message text of the email. */
			Description: DevKit.Controls.Memo;
			/** Enter the sender of the email. */
			from: DevKit.Controls.Lookup;
			/** Choose the record that the email relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
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
			/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Select the email's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}

		export interface IEmailTabSections {
			/** Recipient information */
			recipient_information: DevKit.Controls.Section;
			Regarding_information: DevKit.Controls.Section;
		}

		/** Email */
		export interface IEmailTab extends DevKit.Controls.ITab {
			Section: IEmailTabSections;
		}

		export interface ITabs {
			/** Email */
			Email: IEmailTab;
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
	 * Enhanced_Email Form class
	 * Provides typed access to all form controls
	 * Usage: new Email.Enhanced_Email(executionContext)
	 */
	export class Enhanced_Email extends FormBase<Enhanced_Email.IBody, Enhanced_Email.IHeader, Enhanced_Email.IGrid, Enhanced_Email.INavigation, Enhanced_Email.IQuickForm, Enhanced_Email.IProcess, Enhanced_Email.IDialog> {
		/**
		 * Creates a Enhanced_Email Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['bcc', 'cc', 'Description', 'from', 'RegardingObjectId', 'Subject', 'to'],
				header: ['OwnerId', 'PriorityCode', 'ScheduledEnd', 'StatusCode'],
				tab: ['Email___recipient_information', 'Email___Regarding_information'],
				grid: ['attachmentsGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Email_Wizard
	// ========================================================================

	export namespace Email_Wizard {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type the number of minutes spent creating and sending the email. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Enter the recipients that are included on the email distribution, but are not displayed to other recipients. */
			bcc: DevKit.Controls.Lookup;
			/** Enter the recipients that should be copied on the email. */
			cc: DevKit.Controls.Lookup;
			/** Type the greeting and message text of the email. */
			Description: DevKit.Controls.Memo;
			/** Enter the sender of the email. */
			from: DevKit.Controls.Lookup;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the record that the email relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Select the email's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
			to: DevKit.Controls.Lookup;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
			ScheduledEnd: DevKit.Controls.DateTime;
		}

		export interface IEmailTabSections {
			/** Attachments */
			attachments: DevKit.Controls.Section;
			email_description: DevKit.Controls.Section;
			Hidden_Section: DevKit.Controls.Section;
			recipient_information: DevKit.Controls.Section;
			Regarding_information: DevKit.Controls.Section;
		}

		export interface IEmailTab extends DevKit.Controls.ITab {
			Section: IEmailTabSections;
		}

		export interface ITabs {
			Email: IEmailTab;
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
	 * Email_Wizard Form class
	 * Provides typed access to all form controls
	 * Usage: new Email.Email_Wizard(executionContext)
	 */
	export class Email_Wizard extends FormBase<Email_Wizard.IBody, Email_Wizard.IHeader, Email_Wizard.IGrid, Email_Wizard.INavigation, Email_Wizard.IQuickForm, Email_Wizard.IProcess, Email_Wizard.IDialog> {
		/**
		 * Creates a Email_Wizard Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActualDurationMinutes', 'bcc', 'cc', 'Description', 'from', 'OwnerId', 'RegardingObjectId', 'StatusCode', 'Subject', 'to'],
				header: ['PriorityCode', 'ScheduledEnd'],
				tab: ['Email___attachments', 'Email___email_description', 'Email___Hidden_Section', 'Email___recipient_information', 'Email___Regarding_information'],
				grid: ['attachmentsGrid'],
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
			/** Type the number of minutes spent creating and sending the email. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Enter the recipients that are included on the email distribution, but are not displayed to other recipients. */
			bcc: DevKit.Controls.Lookup;
			/** Enter the recipients that should be copied on the email. */
			cc: DevKit.Controls.Lookup;
			/** Type the greeting and message text of the email. */
			Description: DevKit.Controls.Memo;
			emailengagementactionscontrol: DevKit.Controls.EmailEngagement;
			emailrecipientactivitycontrol: DevKit.Controls.EmailRecipient;
			/** Enter the sender of the email. */
			from: DevKit.Controls.Lookup;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose the record that the email relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Select the email's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Type a short description about the objective or primary topic of the email. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the email. */
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
			/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Select the email's status. */
			StatusCode: DevKit.Controls.OptionSet;
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
	 * Usage: new Email.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Email Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ActualDurationMinutes', 'bcc', 'cc', 'Description', 'emailengagementactionscontrol', 'emailrecipientactivitycontrol', 'from', 'OwnerId', 'RegardingObjectId', 'StatusCode', 'Subject', 'to'],
				header: ['OwnerId', 'PriorityCode', 'ScheduledEnd', 'StatusCode'],
				tab: ['Email___attachments', 'Email___email description', 'Email___emailengagementactions', 'Email___Emailrecipient_section_6', 'Email___Hidden Section', 'Email___recipient information', 'Email___Regarding information', 'Email___tab_4_section_2', 'tab_2___tab_2_section_2', 'tab_2___tab_2_section_3', 'tab_2___tab_2_section_5'],
				grid: ['attachmentsGrid'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

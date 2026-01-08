/**
 * Mailbox.form.ts - Mailbox Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace Mailbox containing form classes: Mailbox.FormClassName
 * 3. Aggregate Form class: Mailbox.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace Mailbox {

	// ========================================================================
	// Form: Mailbox_Information
	// ========================================================================

	export namespace Mailbox_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Choose the delivery method for the mailbox for appointments, contacts, and tasks. */
			ACTDeliveryMethod: DevKit.Controls.OptionSet;
			/** Status of the Appointments, Contacts, and Tasks. */
			ACTStatus: DevKit.Controls.OptionSet;
			/** Choose whether to allow the email connector to use credentials. */
			AllowEmailConnectorToUseCredentials: DevKit.Controls.Boolean;
			/** Type the email address of the mailbox. */
			EmailAddress: DevKit.Controls.String;
			/** Select the email server profile of the mailbox. */
			EmailServerProfile: DevKit.Controls.Lookup;
			/** Select how incoming email will be delivered to the mailbox. */
			IncomingEmailDeliveryMethod: DevKit.Controls.OptionSet;
			/** Select the status that will be assigned to incoming email messages. */
			IncomingEmailStatus: DevKit.Controls.OptionSet;
			/** Shows the status of approval of the email address by O365 Admin. */
			IsEmailAddressApprovedByO365Admin: DevKit.Controls.Boolean;
			/** Select whether the mailbox is a forward mailbox. */
			IsForwardMailbox: DevKit.Controls.Boolean;
			/** Type the name of the mailbox. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Type the Oauth access token for the mailbox. */
			OauthAccessToken: DevKit.Controls.String;
			/** Select how outgoing email will be sent from the mailbox. */
			OutgoingEmailDeliveryMethod: DevKit.Controls.OptionSet;
			/** Select the status of outgoing email messages. */
			OutgoingEmailStatus: DevKit.Controls.OptionSet;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the password for the mailbox. */
			Password: DevKit.Controls.String;
			/** Select whether to delete emails from the mailbox after processing. */
			ProcessAndDeleteEmails: DevKit.Controls.Boolean;
			/** Choose the user associated to the mailbox. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Date and time when the last email configuration test was completed for a mailbox record. */
			TestMailboxAccessCompletedOn: DevKit.Controls.DateTime;
			/** Type a user name used for mailbox authentication. */
			Username: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IMailboxStatusTabTabSections {
			/** O365 Administrator Approval */
			MailboxStatusTab_section_1: DevKit.Controls.Section;
		}

		export interface Itab_4TabSections {
			/** Configuration Test Results */
			tab_4_section_1: DevKit.Controls.Section;
		}

		/** Mailbox Status */
		export interface IMailboxStatusTabTab extends DevKit.Controls.ITab {
			Section: IMailboxStatusTabTabSections;
		}

		/** Configuration Test Results */
		export interface Itab_4Tab extends DevKit.Controls.ITab {
			Section: Itab_4TabSections;
		}

		export interface ITabs {
			/** Mailbox Status */
			MailboxStatusTab: IMailboxStatusTabTab;
			/** Configuration Test Results */
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
	 * Mailbox_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new Mailbox.Mailbox_Information(executionContext)
	 */
	export class Mailbox_Information extends FormBase<Mailbox_Information.IBody, Mailbox_Information.IHeader, Mailbox_Information.IGrid, Mailbox_Information.INavigation, Mailbox_Information.IQuickForm, Mailbox_Information.IProcess, Mailbox_Information.IDialog> {
		/**
		 * Creates a Mailbox_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ACTDeliveryMethod', 'ACTStatus', 'AllowEmailConnectorToUseCredentials', 'EmailAddress', 'EmailServerProfile', 'IncomingEmailDeliveryMethod', 'IncomingEmailStatus', 'IsEmailAddressApprovedByO365Admin', 'IsForwardMailbox', 'Name', 'notescontrol', 'OauthAccessToken', 'OutgoingEmailDeliveryMethod', 'OutgoingEmailStatus', 'OwnerId', 'Password', 'ProcessAndDeleteEmails', 'RegardingObjectId', 'TestMailboxAccessCompletedOn', 'Username'],
				header: [],
				tab: ['MailboxStatusTab___MailboxStatusTab_section_1', 'tab_4___tab_4_section_1'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: Mailbox
	// ========================================================================

	export namespace Mailbox {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Choose the delivery method for the mailbox for appointments, contacts, and tasks. */
			ACTDeliveryMethod: DevKit.Controls.OptionSet;
			/** Status of the Appointments, Contacts, and Tasks. */
			ACTStatus: DevKit.Controls.OptionSet;
			/** Choose whether to allow the email connector to use credentials. */
			AllowEmailConnectorToUseCredentials: DevKit.Controls.Boolean;
			/** Type the email address of the mailbox. */
			EmailAddress: DevKit.Controls.String;
			/** The user who approved the email address for synchronization. */
			EmailAddressApprovedBy: DevKit.Controls.Lookup;
			/** Date and time the mailbox's email address was approved. */
			EmailAddressApprovedOn: DevKit.Controls.DateTime;
			/** Select the email server profile of the mailbox. */
			EmailServerProfile: DevKit.Controls.Lookup;
			/** Select how incoming email will be delivered to the mailbox. */
			IncomingEmailDeliveryMethod: DevKit.Controls.OptionSet;
			/** Select the status that will be assigned to incoming email messages. */
			IncomingEmailStatus: DevKit.Controls.OptionSet;
			/** Shows the status of approval of the email address by O365 Admin. */
			IsEmailAddressApprovedByO365Admin: DevKit.Controls.Boolean;
			/** Select whether the mailbox is a forward mailbox. */
			IsForwardMailbox: DevKit.Controls.Boolean;
			/** Type the name of the mailbox. */
			Name: DevKit.Controls.String;
			/** Type the name of the mailbox. */
			Name1: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Type the Oauth access token for the mailbox. */
			OauthAccessToken: DevKit.Controls.String;
			/** Select how outgoing email will be sent from the mailbox. */
			OutgoingEmailDeliveryMethod: DevKit.Controls.OptionSet;
			/** Select the status of outgoing email messages. */
			OutgoingEmailStatus: DevKit.Controls.OptionSet;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the password for the mailbox. */
			Password: DevKit.Controls.String;
			/** Select whether to delete emails from the mailbox after processing. */
			ProcessAndDeleteEmails: DevKit.Controls.Boolean;
			/** Choose the user associated to the mailbox. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** The user who last attempted to Test and Enable the mailbox. */
			TestAndEnableLastAttemptedBy: DevKit.Controls.Lookup;
			/** The date and time of the last test and enable attempt. */
			TestAndEnableLastAttemptedOn: DevKit.Controls.DateTime;
			/** Date and time when the last email configuration test was completed for a mailbox record. */
			TestMailboxAccessCompletedOn: DevKit.Controls.DateTime;
			/** Type a user name used for mailbox authentication. */
			Username: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IGeneralTabTabSections {
			/** Mailbox Information */
			_6540EA4F_4803_4411_80D0_54AEC63A1698: DevKit.Controls.Section;
			/** Credentials */
			_C46AA141_19BF_4677_BD94_2BB61073779E_SECTION_3: DevKit.Controls.Section;
			/** Synchronization Method */
			_C46AA141_19BF_4677_BD94_2BB61073779E_SECTION_4: DevKit.Controls.Section;
			/** Configuration Status */
			configuration_test_result_section: DevKit.Controls.Section;
			/** New Section */
			mailbox_notifications: DevKit.Controls.Section;
		}

		export interface Imailbox_alertsTabSections {
			mailbox_alerts_section_1: DevKit.Controls.Section;
		}

		export interface IMailboxStatusTabTabSections {
			/** O365 Administrator Approval */
			MailboxStatusTab_section_1: DevKit.Controls.Section;
		}

		/** General */
		export interface IGeneralTabTab extends DevKit.Controls.ITab {
			Section: IGeneralTabTabSections;
		}

		/** Alerts */
		export interface Imailbox_alertsTab extends DevKit.Controls.ITab {
			Section: Imailbox_alertsTabSections;
		}

		/** Mailbox Status */
		export interface IMailboxStatusTabTab extends DevKit.Controls.ITab {
			Section: IMailboxStatusTabTabSections;
		}

		export interface ITabs {
			/** General */
			GeneralTab: IGeneralTabTab;
			/** Alerts */
			mailbox_alerts: Imailbox_alertsTab;
			/** Mailbox Status */
			MailboxStatusTab: IMailboxStatusTabTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Alerts */
			Subgrid_new_1: DevKit.Controls.Grid;
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
	 * Mailbox Form class
	 * Provides typed access to all form controls
	 * Usage: new Mailbox.Mailbox(executionContext)
	 */
	export class Mailbox extends FormBase<Mailbox.IBody, Mailbox.IHeader, Mailbox.IGrid, Mailbox.INavigation, Mailbox.IQuickForm, Mailbox.IProcess, Mailbox.IDialog> {
		/**
		 * Creates a Mailbox Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ACTDeliveryMethod', 'ACTStatus', 'AllowEmailConnectorToUseCredentials', 'EmailAddress', 'EmailAddressApprovedBy', 'EmailAddressApprovedOn', 'EmailServerProfile', 'IncomingEmailDeliveryMethod', 'IncomingEmailStatus', 'IsEmailAddressApprovedByO365Admin', 'IsForwardMailbox', 'Name', 'Name1', 'notescontrol', 'OauthAccessToken', 'OutgoingEmailDeliveryMethod', 'OutgoingEmailStatus', 'OwnerId', 'Password', 'ProcessAndDeleteEmails', 'RegardingObjectId', 'TestAndEnableLastAttemptedBy', 'TestAndEnableLastAttemptedOn', 'TestMailboxAccessCompletedOn', 'Username'],
				header: [],
				tab: ['GeneralTab____6540EA4F_4803_4411_80D0_54AEC63A1698', 'GeneralTab____C46AA141_19BF_4677_BD94_2BB61073779E_SECTION_3', 'GeneralTab____C46AA141_19BF_4677_BD94_2BB61073779E_SECTION_4', 'GeneralTab___configuration_test_result_section', 'GeneralTab___mailbox_notifications', 'mailbox_alerts___mailbox_alerts_section_1', 'MailboxStatusTab___MailboxStatusTab_section_1'],
				grid: ['Subgrid_new_1'],
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
			/** Choose the delivery method for the mailbox for appointments, contacts, and tasks. */
			ACTDeliveryMethod: DevKit.Controls.OptionSet;
			/** Status of the Appointments, Contacts, and Tasks. */
			ACTStatus: DevKit.Controls.OptionSet;
			/** Choose whether to allow the email connector to use credentials. */
			AllowEmailConnectorToUseCredentials: DevKit.Controls.Boolean;
			/** Type the email address of the mailbox. */
			EmailAddress: DevKit.Controls.String;
			/** The user who approved the email address for synchronization. */
			EmailAddressApprovedBy: DevKit.Controls.Lookup;
			/** Date and time the mailbox's email address was approved. */
			EmailAddressApprovedOn: DevKit.Controls.DateTime;
			/** Select the email server profile of the mailbox. */
			EmailServerProfile: DevKit.Controls.Lookup;
			/** Select how incoming email will be delivered to the mailbox. */
			IncomingEmailDeliveryMethod: DevKit.Controls.OptionSet;
			/** Select the status that will be assigned to incoming email messages. */
			IncomingEmailStatus: DevKit.Controls.OptionSet;
			/** Shows the status of approval of the email address by O365 Admin. */
			IsEmailAddressApprovedByO365Admin: DevKit.Controls.Boolean;
			/** Select whether the mailbox is a forward mailbox. */
			IsForwardMailbox: DevKit.Controls.Boolean;
			/** Type the name of the mailbox. */
			Name: DevKit.Controls.String;
			/** Type the name of the mailbox. */
			Name1: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Type the Oauth access token for the mailbox. */
			OauthAccessToken: DevKit.Controls.String;
			/** Select how outgoing email will be sent from the mailbox. */
			OutgoingEmailDeliveryMethod: DevKit.Controls.OptionSet;
			/** Select the status of outgoing email messages. */
			OutgoingEmailStatus: DevKit.Controls.OptionSet;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the password for the mailbox. */
			Password: DevKit.Controls.String;
			/** Select whether to delete emails from the mailbox after processing. */
			ProcessAndDeleteEmails: DevKit.Controls.Boolean;
			/** Choose the user associated to the mailbox. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** The user who last attempted to Test and Enable the mailbox. */
			TestAndEnableLastAttemptedBy: DevKit.Controls.Lookup;
			/** The date and time of the last test and enable attempt. */
			TestAndEnableLastAttemptedOn: DevKit.Controls.DateTime;
			/** Date and time when the last email configuration test was completed for a mailbox record. */
			TestMailboxAccessCompletedOn: DevKit.Controls.DateTime;
			/** Type a user name used for mailbox authentication. */
			Username: DevKit.Controls.String;
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
			/** Alerts */
			Subgrid_new_1: DevKit.Controls.Grid;
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
	 * Usage: new Mailbox.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate Mailbox Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ACTDeliveryMethod', 'ACTStatus', 'AllowEmailConnectorToUseCredentials', 'EmailAddress', 'EmailAddressApprovedBy', 'EmailAddressApprovedOn', 'EmailServerProfile', 'IncomingEmailDeliveryMethod', 'IncomingEmailStatus', 'IsEmailAddressApprovedByO365Admin', 'IsForwardMailbox', 'Name', 'Name1', 'notescontrol', 'OauthAccessToken', 'OutgoingEmailDeliveryMethod', 'OutgoingEmailStatus', 'OwnerId', 'Password', 'ProcessAndDeleteEmails', 'RegardingObjectId', 'TestAndEnableLastAttemptedBy', 'TestAndEnableLastAttemptedOn', 'TestMailboxAccessCompletedOn', 'Username'],
				header: [],
				tab: ['GeneralTab___{6540ea4f-4803-4411-80d0-54aec63a1698}', 'GeneralTab___{c46aa141-19bf-4677-bd94-2bb61073779e}_section_3', 'GeneralTab___{c46aa141-19bf-4677-bd94-2bb61073779e}_section_4', 'GeneralTab___configuration_test_result_section', 'GeneralTab___mailbox_notifications', 'mailbox_alerts___mailbox_alerts_section_1', 'MailboxStatusTab___MailboxStatusTab_section_1', 'tab_4___tab_4_section_1'],
				grid: ['Subgrid_new_1'],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

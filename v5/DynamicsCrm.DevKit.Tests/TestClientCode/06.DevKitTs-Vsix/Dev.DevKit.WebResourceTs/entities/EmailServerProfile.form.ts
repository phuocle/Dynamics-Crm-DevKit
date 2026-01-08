/**
 * EmailServerProfile.form.ts - EmailServerProfile Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace EmailServerProfile containing form classes: EmailServerProfile.FormClassName
 * 3. Aggregate Form class: EmailServerProfile.Form (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace EmailServerProfile {

	// ========================================================================
	// Form: EmailServerProfile_Information
	// ========================================================================

	export namespace EmailServerProfile_Information {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type additional information that describes the email server profile. */
			Description: DevKit.Controls.Memo;
			/** Email Server Type Name */
			EmailServerTypeName: DevKit.Controls.String;
			/** Type the tenant ID of Exchange Online. */
			ExchangeOnlineTenantId: DevKit.Controls.String;
			/** Select the incoming email authentication protocol that is used for connecting to the email server. */
			IncomingAuthenticationProtocol: DevKit.Controls.OptionSet;
			/** Select how credentials will be retrieved for incoming email. */
			IncomingCredentialRetrieval: DevKit.Controls.OptionSet;
			/** Type the password for incoming email. */
			IncomingPassword: DevKit.Controls.String;
			/** Type the Exchange port number for incoming mail. */
			IncomingPortNumber: DevKit.Controls.Integer;
			/** Type the location of the server for incoming email. */
			IncomingServerLocation: DevKit.Controls.String;
			/** Select whether to use impersonation to access the mailbox to process incoming emails. */
			IncomingUseImpersonation: DevKit.Controls.Boolean;
			/** Type the user name for incoming email. */
			IncomingUserName: DevKit.Controls.String;
			/** Select whether to use the Secure Sockets Layer (SSL) protocol for incoming email. */
			IncomingUseSSL: DevKit.Controls.Boolean;
			/** Maximum number of concurrent connections allowed to the email server per authenticated user. */
			MaxConcurrentConnections: DevKit.Controls.Integer;
			/** Minimum polling interval, in minutes, for mailboxes that are associated with this email server profile. */
			MinPollingIntervalInMinutes: DevKit.Controls.Integer;
			/** Indicates whether to move undelivered incoming emails to the Undeliverable folder in Microsoft Exchange. */
			MoveUndeliveredEmails: DevKit.Controls.Boolean;
			/** Type a meaningful name for the email server profile. This name is displayed when you need to select an email server profile. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** ClientId used for OAuth athentication scheme */
			OauthClientId: DevKit.Controls.String;
			/** Client secret used for the OAuth authentication scheme */
			OauthClientSecret: DevKit.Controls.String;
			/** Select the outgoing email authentication protocol that is used for connecting to the email server. */
			OutgoingAuthenticationProtocol: DevKit.Controls.OptionSet;
			/** Select how credentials will be retrieved for outgoing email. */
			OutgoingCredentialRetrieval: DevKit.Controls.OptionSet;
			/** Type the password for outgoing email. */
			OutgoingPassword: DevKit.Controls.String;
			/** Type the Exchange port number for outgoing mail. */
			OutgoingPortNumber: DevKit.Controls.Integer;
			/** Type the location of the server for outgoing email. */
			OutgoingServerLocation: DevKit.Controls.String;
			/** Select whether to use impersonation for accessing the mailbox to process outgoing emails. */
			OutgoingUseImpersonation: DevKit.Controls.Boolean;
			/** Type the user name for outgoing email. */
			OutgoingUsername: DevKit.Controls.String;
			/** Select whether to use the Secure Sockets Layer (SSL) protocol for outgoing email. */
			OutgoingUseSSL: DevKit.Controls.Boolean;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows the date and time after which email messages that are received will be processed for mailboxes associated with the email server profile. */
			ProcessEmailsReceivedAfter: DevKit.Controls.DateTime;
			/** Select whether to send an email alert if more than 50% of the mailboxes in this email server profile failed to synchronize in an hour period. */
			SendEmailAlert: DevKit.Controls.Boolean;
			/** Select the profile's email server type. */
			ServerType: DevKit.Controls.OptionSet;
			/** Select whether to timeout a single mailbox. */
			TimeoutMailboxConnection: DevKit.Controls.Boolean;
			/** Type the number of milliseconds to timeout a single mailbox. The upper limit is 100 seconds. */
			TimeoutMailboxConnectionAfterAmount: DevKit.Controls.Integer;
			/** Select whether to automatically discover the server location */
			UseAutoDiscover: DevKit.Controls.Boolean;
			/** Select whether to use the Exchange Online Tenant ID obtained from running Microsoft Azure PowerShell cmdlets (highly recommended). If you select No, you can edit this field manually */
			UseDefaultTenantId: DevKit.Controls.Boolean;
			/** Select whether to use the same settings for incoming and outgoing connections. */
			UseSameSettingsForOutgoingConnections: DevKit.Controls.Boolean;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface Itab_3TabSections {
			/** Incoming Connection */
			_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_1: DevKit.Controls.Section;
			/** Replicate Settings for Outgoing */
			_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_2: DevKit.Controls.Section;
			/** Outgoing Connection */
			_2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_3: DevKit.Controls.Section;
		}

		export interface Itab_4TabSections {
			tab_4_section_1: DevKit.Controls.Section;
		}

		/** Credentials */
		export interface Itab_3Tab extends DevKit.Controls.ITab {
			Section: Itab_3TabSections;
		}

		/** Error Handling */
		export interface Itab_4Tab extends DevKit.Controls.ITab {
			Section: Itab_4TabSections;
		}

		export interface ITabs {
			/** Credentials */
			tab_3: Itab_3Tab;
			/** Error Handling */
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
	 * EmailServerProfile_Information Form class
	 * Provides typed access to all form controls
	 * Usage: new EmailServerProfile.EmailServerProfile_Information(executionContext)
	 */
	export class EmailServerProfile_Information extends FormBase<EmailServerProfile_Information.IBody, EmailServerProfile_Information.IHeader, EmailServerProfile_Information.IGrid, EmailServerProfile_Information.INavigation, EmailServerProfile_Information.IQuickForm, EmailServerProfile_Information.IProcess, EmailServerProfile_Information.IDialog> {
		/**
		 * Creates a EmailServerProfile_Information Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'EmailServerTypeName', 'ExchangeOnlineTenantId', 'IncomingAuthenticationProtocol', 'IncomingCredentialRetrieval', 'IncomingPassword', 'IncomingPortNumber', 'IncomingServerLocation', 'IncomingUseImpersonation', 'IncomingUserName', 'IncomingUseSSL', 'MaxConcurrentConnections', 'MinPollingIntervalInMinutes', 'MoveUndeliveredEmails', 'Name', 'notescontrol', 'OauthClientId', 'OauthClientSecret', 'OutgoingAuthenticationProtocol', 'OutgoingCredentialRetrieval', 'OutgoingPassword', 'OutgoingPortNumber', 'OutgoingServerLocation', 'OutgoingUseImpersonation', 'OutgoingUsername', 'OutgoingUseSSL', 'OwnerId', 'ProcessEmailsReceivedAfter', 'SendEmailAlert', 'ServerType', 'TimeoutMailboxConnection', 'TimeoutMailboxConnectionAfterAmount', 'UseAutoDiscover', 'UseDefaultTenantId', 'UseSameSettingsForOutgoingConnections'],
				header: [],
				tab: ['tab_3____2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_1', 'tab_3____2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_2', 'tab_3____2EB17E5B_3A06_43BD_BB50_23F8630CD9F8_SECTION_3', 'tab_4___tab_4_section_1'],
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
			/** Type additional information that describes the email server profile. */
			Description: DevKit.Controls.Memo;
			/** Email Server Type Name */
			EmailServerTypeName: DevKit.Controls.String;
			/** Type the tenant ID of Exchange Online. */
			ExchangeOnlineTenantId: DevKit.Controls.String;
			/** Select the incoming email authentication protocol that is used for connecting to the email server. */
			IncomingAuthenticationProtocol: DevKit.Controls.OptionSet;
			/** Select how credentials will be retrieved for incoming email. */
			IncomingCredentialRetrieval: DevKit.Controls.OptionSet;
			/** Type the password for incoming email. */
			IncomingPassword: DevKit.Controls.String;
			/** Type the Exchange port number for incoming mail. */
			IncomingPortNumber: DevKit.Controls.Integer;
			/** Type the location of the server for incoming email. */
			IncomingServerLocation: DevKit.Controls.String;
			/** Select whether to use impersonation to access the mailbox to process incoming emails. */
			IncomingUseImpersonation: DevKit.Controls.Boolean;
			/** Type the user name for incoming email. */
			IncomingUserName: DevKit.Controls.String;
			/** Select whether to use the Secure Sockets Layer (SSL) protocol for incoming email. */
			IncomingUseSSL: DevKit.Controls.Boolean;
			/** Maximum number of concurrent connections allowed to the email server per authenticated user. */
			MaxConcurrentConnections: DevKit.Controls.Integer;
			/** Minimum polling interval, in minutes, for mailboxes that are associated with this email server profile. */
			MinPollingIntervalInMinutes: DevKit.Controls.Integer;
			/** Indicates whether to move undelivered incoming emails to the Undeliverable folder in Microsoft Exchange. */
			MoveUndeliveredEmails: DevKit.Controls.Boolean;
			/** Type a meaningful name for the email server profile. This name is displayed when you need to select an email server profile. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** ClientId used for OAuth athentication scheme */
			OauthClientId: DevKit.Controls.String;
			/** Client secret used for the OAuth authentication scheme */
			OauthClientSecret: DevKit.Controls.String;
			/** Select the outgoing email authentication protocol that is used for connecting to the email server. */
			OutgoingAuthenticationProtocol: DevKit.Controls.OptionSet;
			/** Select how credentials will be retrieved for outgoing email. */
			OutgoingCredentialRetrieval: DevKit.Controls.OptionSet;
			/** Type the password for outgoing email. */
			OutgoingPassword: DevKit.Controls.String;
			/** Type the Exchange port number for outgoing mail. */
			OutgoingPortNumber: DevKit.Controls.Integer;
			/** Type the location of the server for outgoing email. */
			OutgoingServerLocation: DevKit.Controls.String;
			/** Select whether to use impersonation for accessing the mailbox to process outgoing emails. */
			OutgoingUseImpersonation: DevKit.Controls.Boolean;
			/** Type the user name for outgoing email. */
			OutgoingUsername: DevKit.Controls.String;
			/** Select whether to use the Secure Sockets Layer (SSL) protocol for outgoing email. */
			OutgoingUseSSL: DevKit.Controls.Boolean;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows the date and time after which email messages that are received will be processed for mailboxes associated with the email server profile. */
			ProcessEmailsReceivedAfter: DevKit.Controls.DateTime;
			/** Select whether to send an email alert if more than 50% of the mailboxes in this email server profile failed to synchronize in an hour period. */
			SendEmailAlert: DevKit.Controls.Boolean;
			/** Select the profile's email server type. */
			ServerType: DevKit.Controls.OptionSet;
			/** Select whether to timeout a single mailbox. */
			TimeoutMailboxConnection: DevKit.Controls.Boolean;
			/** Type the number of milliseconds to timeout a single mailbox. The upper limit is 100 seconds. */
			TimeoutMailboxConnectionAfterAmount: DevKit.Controls.Integer;
			/** Select whether to automatically discover the server location */
			UseAutoDiscover: DevKit.Controls.Boolean;
			/** Select whether to use the Exchange Online Tenant ID obtained from running Microsoft Azure PowerShell cmdlets (highly recommended). If you select No, you can edit this field manually */
			UseDefaultTenantId: DevKit.Controls.Boolean;
			/** Select whether to use the same settings for incoming and outgoing connections. */
			UseSameSettingsForOutgoingConnections: DevKit.Controls.Boolean;
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
	 * Usage: new EmailServerProfile.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate EmailServerProfile Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['Description', 'EmailServerTypeName', 'ExchangeOnlineTenantId', 'IncomingAuthenticationProtocol', 'IncomingCredentialRetrieval', 'IncomingPassword', 'IncomingPortNumber', 'IncomingServerLocation', 'IncomingUseImpersonation', 'IncomingUserName', 'IncomingUseSSL', 'MaxConcurrentConnections', 'MinPollingIntervalInMinutes', 'MoveUndeliveredEmails', 'Name', 'notescontrol', 'OauthClientId', 'OauthClientSecret', 'OutgoingAuthenticationProtocol', 'OutgoingCredentialRetrieval', 'OutgoingPassword', 'OutgoingPortNumber', 'OutgoingServerLocation', 'OutgoingUseImpersonation', 'OutgoingUsername', 'OutgoingUseSSL', 'OwnerId', 'ProcessEmailsReceivedAfter', 'SendEmailAlert', 'ServerType', 'TimeoutMailboxConnection', 'TimeoutMailboxConnectionAfterAmount', 'UseAutoDiscover', 'UseDefaultTenantId', 'UseSameSettingsForOutgoingConnections'],
				header: [],
				tab: ['tab_3___{2EB17E5B-3A06-43BD-BB50-23F8630CD9F8}_section_1', 'tab_3___{2EB17E5B-3A06-43BD-BB50-23F8630CD9F8}_section_2', 'tab_3___{2EB17E5B-3A06-43BD-BB50-23F8630CD9F8}_section_3', 'tab_3___tab_3_section_1', 'tab_3___tab_3_section_2', 'tab_3___tab_3_section_3', 'tab_4___tab_4_section_1'],
				grid: [],
				navigation: [],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

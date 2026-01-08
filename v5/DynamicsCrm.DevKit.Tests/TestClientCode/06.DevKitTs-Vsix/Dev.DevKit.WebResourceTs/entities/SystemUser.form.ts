/**
 * SystemUser.form.ts - SystemUser Form for early-bound style form coding
 * Generated file - DO NOT MODIFY MANUALLY
 *
 * Structure:
 * 1. Imports
 * 2. Namespace SystemUser containing form classes: SystemUser.FormClassName
 * 3. Aggregate Form class: SystemUser.AllInOne (contains all fields from all forms)
 */

/// <reference path="../lib/devkit.d.ts" />
import { FormBase } from '../lib/devkit';
import './OptionSet';

export namespace SystemUser {

	// ========================================================================
	// Form: Application_User
	// ========================================================================

	export namespace Application_User {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** The identifier for the application. This is used to access data in another application. */
			ApplicationId: DevKit.Controls.String;
			/** The URI used as a unique logical identifier for the external app. This can be used to validate the application. */
			ApplicationIdUri: DevKit.Controls.String;
			/** This is the application directory object Id. */
			AzureActiveDirectoryObjectId: DevKit.Controls.String;
			/** Active Directory domain of which the user is a member. */
			DomainName: DevKit.Controls.String;
			/** Full name of the user. */
			FullName: DevKit.Controls.String;
			/** Internal email address for the user. */
			InternalEMailAddress: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface ISUMMARY_TABTabSections {
			/** Account Information */
			onpremise_account_information: DevKit.Controls.Section;
			/** User Information */
			user_information: DevKit.Controls.Section;
		}

		/** Summary */
		export interface ISUMMARY_TABTab extends DevKit.Controls.ITab {
			Section: ISUMMARY_TABTabSections;
		}

		export interface ITabs {
			/** Summary */
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
	 * Application_User Form class
	 * Provides typed access to all form controls
	 * Usage: new SystemUser.Application_User(executionContext)
	 */
	export class Application_User extends FormBase<Application_User.IBody, Application_User.IHeader, Application_User.IGrid, Application_User.INavigation, Application_User.IQuickForm, Application_User.IProcess, Application_User.IDialog> {
		/**
		 * Creates a Application_User Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['ApplicationId', 'ApplicationIdUri', 'AzureActiveDirectoryObjectId', 'DomainName', 'FullName', 'InternalEMailAddress'],
				header: [],
				tab: ['SUMMARY_TAB___onpremise_account_information', 'SUMMARY_TAB___user_information'],
				grid: [],
				navigation: ['navActivities'],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: User
	// ========================================================================

	export namespace User {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type of user. */
			AccessMode: DevKit.Controls.OptionSet;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.Memo;
			/** Fax number for address 1. */
			Address1_Fax: DevKit.Controls.String;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Second telephone number associated with address 1. */
			Address1_Telephone2: DevKit.Controls.String;
			/** Third telephone number associated with address 1. */
			Address1_Telephone3: DevKit.Controls.String;
			/** Shows the complete secondary address. */
			Address2_Composite: DevKit.Controls.Memo;
			/** Unique identifier of the business unit with which the user is associated. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** License type of user. This is used only in the on-premises version of the product. Online licenses are managed through Microsoft 365 Office Portal */
			CALType: DevKit.Controls.OptionSet;
			/** Select the mailbox associated with this user. */
			DefaultMailbox: DevKit.Controls.Lookup;
			/** Active Directory domain of which the user is a member. */
			DomainName: DevKit.Controls.String;
			/** Full name of the user. */
			FullName: DevKit.Controls.String;
			/** Home phone number for the user. */
			HomePhone: DevKit.Controls.String;
			/** Internal email address for the user. */
			InternalEMailAddress: DevKit.Controls.String;
			/** User invitation status. */
			InviteStatusCode: DevKit.Controls.OptionSet;
			/** Mobile alert email address for the user. */
			MobileAlertEMail: DevKit.Controls.String;
			/** Items contained with a particular SystemUser. */
			MobileOfflineProfileId: DevKit.Controls.Lookup;
			/** Mobile phone number for the user. */
			MobilePhone: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the manager of the user. */
			ParentSystemUserId: DevKit.Controls.Lookup;
			/** Personal email address of the user. */
			PersonalEMailAddress: DevKit.Controls.String;
			/** User's position in hierarchical security model. */
			PositionId: DevKit.Controls.Lookup;
			/** Preferred address for the user. */
			PreferredAddressCode: DevKit.Controls.OptionSet;
			/** Preferred phone number for the user. */
			PreferredPhoneCode: DevKit.Controls.OptionSet;
			/** Unique identifier of the default queue for the user. */
			QueueId: DevKit.Controls.Lookup;
			/** Title of the user. */
			Title: DevKit.Controls.String;
			/** Windows Live ID */
			WindowsLiveID: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IADMINISTRATION_TABTabSections {
			/** Client Access License (CAL) Information */
			administration: DevKit.Controls.Section;
			/** E-mail Access Configuration */
			e_mail_configuration: DevKit.Controls.Section;
		}

		export interface IDETAILS_TABTabSections {
			/** Direct Reports */
			DirectReports: DevKit.Controls.Section;
			/** Mailing Address */
			mailing_address: DevKit.Controls.Section;
			/** User Information */
			user_information_2: DevKit.Controls.Section;
		}

		export interface IMobileOfflineProfile_TABTabSections {
			/** Mobile Offline Access Information */
			mobileofflineaccessinfo: DevKit.Controls.Section;
		}

		export interface ISUMMARY_TABTabSections {
			/** Account Information */
			online_account_information: DevKit.Controls.Section;
			/** Account Information */
			onpremise_account_information: DevKit.Controls.Section;
			/** Organization Information */
			organization_information: DevKit.Controls.Section;
			queue_information: DevKit.Controls.Section;
			/** Queue Information */
			queue_selection: DevKit.Controls.Section;
			/** SOCIAL PANE */
			SOCIAL_PANE_TAB: DevKit.Controls.Section;
			teams_information: DevKit.Controls.Section;
			/** User Information */
			user_information: DevKit.Controls.Section;
		}

		/** Administration */
		export interface IADMINISTRATION_TABTab extends DevKit.Controls.ITab {
			Section: IADMINISTRATION_TABTabSections;
		}

		/** Details */
		export interface IDETAILS_TABTab extends DevKit.Controls.ITab {
			Section: IDETAILS_TABTabSections;
		}

		/** Mobile Offline Profile Details */
		export interface IMobileOfflineProfile_TABTab extends DevKit.Controls.ITab {
			Section: IMobileOfflineProfile_TABTabSections;
		}

		/** Summary */
		export interface ISUMMARY_TABTab extends DevKit.Controls.ITab {
			Section: ISUMMARY_TABTabSections;
		}

		export interface ITabs {
			/** Administration */
			ADMINISTRATION_TAB: IADMINISTRATION_TABTab;
			/** Details */
			DETAILS_TAB: IDETAILS_TABTab;
			/** Mobile Offline Profile Details */
			MobileOfflineProfile_TAB: IMobileOfflineProfile_TABTab;
			/** Summary */
			SUMMARY_TAB: ISUMMARY_TABTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Direct Reports */
			DirectReports: DevKit.Controls.Grid;
			/** Queues I'm a member of */
			PrivateQueuesSubGrid: DevKit.Controls.Grid;
			/** TEAMS */
			TeamsSubGrid: DevKit.Controls.Grid;
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
	 * User Form class
	 * Provides typed access to all form controls
	 * Usage: new SystemUser.User(executionContext)
	 */
	export class User extends FormBase<User.IBody, User.IHeader, User.IGrid, User.INavigation, User.IQuickForm, User.IProcess, User.IDialog> {
		/**
		 * Creates a User Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AccessMode', 'Address1_Composite', 'Address1_Fax', 'Address1_Telephone1', 'Address1_Telephone2', 'Address1_Telephone3', 'Address2_Composite', 'BusinessUnitId', 'CALType', 'DefaultMailbox', 'DomainName', 'FullName', 'HomePhone', 'InternalEMailAddress', 'InviteStatusCode', 'MobileAlertEMail', 'MobileOfflineProfileId', 'MobilePhone', 'notescontrol', 'ParentSystemUserId', 'PersonalEMailAddress', 'PositionId', 'PreferredAddressCode', 'PreferredPhoneCode', 'QueueId', 'Title', 'WindowsLiveID'],
				header: [],
				tab: ['ADMINISTRATION_TAB___administration', 'ADMINISTRATION_TAB___e_mail_configuration', 'DETAILS_TAB___DirectReports', 'DETAILS_TAB___mailing_address', 'DETAILS_TAB___user_information_2', 'MobileOfflineProfile_TAB___mobileofflineaccessinfo', 'SUMMARY_TAB___online_account_information', 'SUMMARY_TAB___onpremise_account_information', 'SUMMARY_TAB___organization_information', 'SUMMARY_TAB___queue_information', 'SUMMARY_TAB___queue_selection', 'SUMMARY_TAB___SOCIAL_PANE_TAB', 'SUMMARY_TAB___teams_information', 'SUMMARY_TAB___user_information'],
				grid: ['DirectReports', 'PrivateQueuesSubGrid', 'TeamsSubGrid'],
				navigation: ['navActivities'],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

	// ========================================================================
	// Form: User_form_Business
	// ========================================================================

	export namespace User_form_Business {

		/**
		 * Body controls interface
		 * Contains all controls on the form body
		 */
		export interface IBody {
			/** Type of user. */
			AccessMode: DevKit.Controls.OptionSet;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.Memo;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Unique identifier of the business unit with which the user is associated. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** License type of user. This is used only in the on-premises version of the product. Online licenses are managed through Microsoft 365 Office Portal */
			CALType: DevKit.Controls.OptionSet;
			/** Select the mailbox associated with this user. */
			DefaultMailbox: DevKit.Controls.Lookup;
			/** Active Directory domain of which the user is a member. */
			DomainName: DevKit.Controls.String;
			/** Full name of the user. */
			FullName: DevKit.Controls.String;
			/** Internal email address for the user. */
			InternalEMailAddress: DevKit.Controls.String;
			/** User invitation status. */
			InviteStatusCode: DevKit.Controls.OptionSet;
			/** Mobile phone number for the user. */
			MobilePhone: DevKit.Controls.String;
			/** Unique identifier of the manager of the user. */
			ParentSystemUserId: DevKit.Controls.Lookup;
			/** Preferred address for the user. */
			PreferredAddressCode: DevKit.Controls.OptionSet;
			/** Title of the user. */
			Title: DevKit.Controls.String;
			/** Windows Live ID */
			WindowsLiveID: DevKit.Controls.String;
			Tab: ITabs;
		}

		/**
		 * Header controls interface
		 * Contains controls displayed in the form header
		 */
		export interface IHeader extends DevKit.Controls.IHeader {
		}

		export interface IADMINISTRATION_TABTabSections {
			/** Client Access License (CAL) Information */
			administration: DevKit.Controls.Section;
			/** E-mail Access Configuration */
			e_mail_configuration: DevKit.Controls.Section;
		}

		export interface ISUMMARY_TABTabSections {
			/** Direct Reports */
			DirectReports: DevKit.Controls.Section;
			/** Mailing Address */
			mailing_address: DevKit.Controls.Section;
			/** Account Information */
			online_account_information: DevKit.Controls.Section;
			/** Account Information */
			onpremise_account_information: DevKit.Controls.Section;
			/** Organization Information */
			organization_information: DevKit.Controls.Section;
			/** Teams */
			TEAMS_TAB: DevKit.Controls.Section;
			/** User Information */
			user_information: DevKit.Controls.Section;
		}

		/** Administration */
		export interface IADMINISTRATION_TABTab extends DevKit.Controls.ITab {
			Section: IADMINISTRATION_TABTabSections;
		}

		/** Summary */
		export interface ISUMMARY_TABTab extends DevKit.Controls.ITab {
			Section: ISUMMARY_TABTabSections;
		}

		export interface ITabs {
			/** Administration */
			ADMINISTRATION_TAB: IADMINISTRATION_TABTab;
			/** Summary */
			SUMMARY_TAB: ISUMMARY_TABTab;
		}

		/**
		 * Grid controls interface
		 * Contains all subgrid controls on the form
		 */
		export interface IGrid {
			/** Direct Reports */
			DirectReports: DevKit.Controls.Grid;
			/** TEAMS */
			TeamsSubGrid: DevKit.Controls.Grid;
		}

		/**
		 * Navigation interface
		 * Contains navigation items
		 */
		export interface INavigation {
			/** Activities */
			navActivities: DevKit.Controls.NavigationItem;
			/** Background Processes */
			navAsyncOperations: DevKit.Controls.NavigationItem;
			/** Audit History */
			navAudit: DevKit.Controls.NavigationItem;
			/** Connections */
			navConnections: DevKit.Controls.NavigationItem;
			/** Field Security Profiles */
			navFieldSecurityProfiles: DevKit.Controls.NavigationItem;
			/** Work Hours */
			navMonthlyCalendar: DevKit.Controls.NavigationItem;
			/** Process Sessions */
			navProcessSessions: DevKit.Controls.NavigationItem;
			/** Resource Groups */
			navResourceGroups: DevKit.Controls.NavigationItem;
			/** Security Roles */
			navRoles: DevKit.Controls.NavigationItem;
			/** Services */
			navServices: DevKit.Controls.NavigationItem;
			/** Teams */
			navTeams: DevKit.Controls.NavigationItem;
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
	 * User_form_Business Form class
	 * Provides typed access to all form controls
	 * Usage: new SystemUser.User_form_Business(executionContext)
	 */
	export class User_form_Business extends FormBase<User_form_Business.IBody, User_form_Business.IHeader, User_form_Business.IGrid, User_form_Business.INavigation, User_form_Business.IQuickForm, User_form_Business.IProcess, User_form_Business.IDialog> {
		/**
		 * Creates a User_form_Business Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AccessMode', 'Address1_Composite', 'Address1_Telephone1', 'BusinessUnitId', 'CALType', 'DefaultMailbox', 'DomainName', 'FullName', 'InternalEMailAddress', 'InviteStatusCode', 'MobilePhone', 'ParentSystemUserId', 'PreferredAddressCode', 'Title', 'WindowsLiveID'],
				header: [],
				tab: ['ADMINISTRATION_TAB___administration', 'ADMINISTRATION_TAB___e_mail_configuration', 'SUMMARY_TAB___DirectReports', 'SUMMARY_TAB___mailing_address', 'SUMMARY_TAB___online_account_information', 'SUMMARY_TAB___onpremise_account_information', 'SUMMARY_TAB___organization_information', 'SUMMARY_TAB___TEAMS_TAB', 'SUMMARY_TAB___user_information'],
				grid: ['DirectReports', 'TeamsSubGrid'],
				navigation: ['navActivities', 'navAsyncOperations', 'navAudit', 'navConnections', 'navFieldSecurityProfiles', 'navMonthlyCalendar', 'navProcessSessions', 'navResourceGroups', 'navRoles', 'navServices', 'navTeams'],
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
			/** Type of user. */
			AccessMode: DevKit.Controls.OptionSet;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.Memo;
			/** Fax number for address 1. */
			Address1_Fax: DevKit.Controls.String;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Second telephone number associated with address 1. */
			Address1_Telephone2: DevKit.Controls.String;
			/** Third telephone number associated with address 1. */
			Address1_Telephone3: DevKit.Controls.String;
			/** Shows the complete secondary address. */
			Address2_Composite: DevKit.Controls.Memo;
			/** The identifier for the application. This is used to access data in another application. */
			ApplicationId: DevKit.Controls.String;
			/** The URI used as a unique logical identifier for the external app. This can be used to validate the application. */
			ApplicationIdUri: DevKit.Controls.String;
			/** This is the application directory object Id. */
			AzureActiveDirectoryObjectId: DevKit.Controls.String;
			/** Unique identifier of the business unit with which the user is associated. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** License type of user. This is used only in the on-premises version of the product. Online licenses are managed through Microsoft 365 Office Portal */
			CALType: DevKit.Controls.OptionSet;
			/** Select the mailbox associated with this user. */
			DefaultMailbox: DevKit.Controls.Lookup;
			/** Active Directory domain of which the user is a member. */
			DomainName: DevKit.Controls.String;
			/** Full name of the user. */
			FullName: DevKit.Controls.String;
			/** Home phone number for the user. */
			HomePhone: DevKit.Controls.String;
			/** Internal email address for the user. */
			InternalEMailAddress: DevKit.Controls.String;
			/** User invitation status. */
			InviteStatusCode: DevKit.Controls.OptionSet;
			/** Mobile alert email address for the user. */
			MobileAlertEMail: DevKit.Controls.String;
			/** Items contained with a particular SystemUser. */
			MobileOfflineProfileId: DevKit.Controls.Lookup;
			/** Mobile phone number for the user. */
			MobilePhone: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the manager of the user. */
			ParentSystemUserId: DevKit.Controls.Lookup;
			/** Personal email address of the user. */
			PersonalEMailAddress: DevKit.Controls.String;
			/** User's position in hierarchical security model. */
			PositionId: DevKit.Controls.Lookup;
			/** Preferred address for the user. */
			PreferredAddressCode: DevKit.Controls.OptionSet;
			/** Preferred phone number for the user. */
			PreferredPhoneCode: DevKit.Controls.OptionSet;
			/** Unique identifier of the default queue for the user. */
			QueueId: DevKit.Controls.Lookup;
			/** Title of the user. */
			Title: DevKit.Controls.String;
			/** Windows Live ID */
			WindowsLiveID: DevKit.Controls.String;
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
			/** Direct Reports */
			DirectReports: DevKit.Controls.Grid;
			/** Queues I'm a member of */
			PrivateQueuesSubGrid: DevKit.Controls.Grid;
			/** TEAMS */
			TeamsSubGrid: DevKit.Controls.Grid;
		}

		/**
		 * Aggregate Navigation interface
		 */
		export interface INavigation {
			/** Activities */
			navActivities: DevKit.Controls.NavigationItem;
			/** Background Processes */
			navAsyncOperations: DevKit.Controls.NavigationItem;
			/** Audit History */
			navAudit: DevKit.Controls.NavigationItem;
			/** Connections */
			navConnections: DevKit.Controls.NavigationItem;
			/** Field Security Profiles */
			navFieldSecurityProfiles: DevKit.Controls.NavigationItem;
			/** Work Hours */
			navMonthlyCalendar: DevKit.Controls.NavigationItem;
			/** Process Sessions */
			navProcessSessions: DevKit.Controls.NavigationItem;
			/** Resource Groups */
			navResourceGroups: DevKit.Controls.NavigationItem;
			/** Security Roles */
			navRoles: DevKit.Controls.NavigationItem;
			/** Services */
			navServices: DevKit.Controls.NavigationItem;
			/** Teams */
			navTeams: DevKit.Controls.NavigationItem;
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
	 * Usage: new SystemUser.AllInOne(executionContext)
	 */
	export class AllInOne extends FormBase<AllInOne.IBody, AllInOne.IHeader, AllInOne.IGrid, AllInOne.INavigation, AllInOne.IQuickForm, AllInOne.IProcess, undefined> {
		/**
		 * Creates an aggregate SystemUser Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: ['AccessMode', 'Address1_Composite', 'Address1_Fax', 'Address1_Telephone1', 'Address1_Telephone2', 'Address1_Telephone3', 'Address2_Composite', 'ApplicationId', 'ApplicationIdUri', 'AzureActiveDirectoryObjectId', 'BusinessUnitId', 'CALType', 'DefaultMailbox', 'DomainName', 'FullName', 'HomePhone', 'InternalEMailAddress', 'InviteStatusCode', 'MobileAlertEMail', 'MobileOfflineProfileId', 'MobilePhone', 'notescontrol', 'ParentSystemUserId', 'PersonalEMailAddress', 'PositionId', 'PreferredAddressCode', 'PreferredPhoneCode', 'QueueId', 'Title', 'WindowsLiveID'],
				header: [],
				tab: ['ADMINISTRATION_TAB___administration', 'ADMINISTRATION_TAB___e-mail configuration', 'DETAILS_TAB___DirectReports', 'DETAILS_TAB___mailing address', 'DETAILS_TAB___user information_2', 'MobileOfflineProfile_TAB___mobileofflineaccessinfo', 'SUMMARY_TAB___DirectReports', 'SUMMARY_TAB___mailing address', 'SUMMARY_TAB___online account information', 'SUMMARY_TAB___onpremise account information', 'SUMMARY_TAB___organization information', 'SUMMARY_TAB___queue information', 'SUMMARY_TAB___queue selection', 'SUMMARY_TAB___SOCIAL_PANE_TAB', 'SUMMARY_TAB___teams information', 'SUMMARY_TAB___TEAMS_TAB', 'SUMMARY_TAB___user information'],
				grid: ['DirectReports', 'PrivateQueuesSubGrid', 'TeamsSubGrid'],
				navigation: ['navActivities', 'navAsyncOperations', 'navAudit', 'navConnections', 'navFieldSecurityProfiles', 'navMonthlyCalendar', 'navProcessSessions', 'navResourceGroups', 'navRoles', 'navServices', 'navTeams'],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}

}

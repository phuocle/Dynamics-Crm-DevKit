/**
 * SystemUser.form.ts - SystemUser Form for early-bound style form coding
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

export namespace FormApplication_User {

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
	export interface IHeader {
	}

	export interface ISUMMARY_TABTabSections {
		onpremise_account_information: DevKit.Controls.Section;
		user_information: DevKit.Controls.Section;
	}

	export interface ISUMMARY_TABTab extends DevKit.Controls.ITab {
		Section: ISUMMARY_TABTabSections;
	}

	export interface ITabs {
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

	// ============================================================================
	// 2. Runtime - Form Class
	// ============================================================================

	/**
	 * SystemUser Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an SystemUser Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'ApplicationId',
					'ApplicationIdUri',
					'AzureActiveDirectoryObjectId',
					'DomainName',
					'FullName',
					'InternalEMailAddress'
				],
				header: [
					
				],
				tab: [
					'SUMMARY_TAB___onpremise_account_information',
					'SUMMARY_TAB___user_information'
				],
				grid: [
					
				],
				navigation: [
					'navActivities'
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

export namespace FormUser {

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
		notescontrol: DevKit.Controls.String;
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
	export interface IHeader {
	}

	export interface IADMINISTRATION_TABTabSections {
		administration: DevKit.Controls.Section;
		e_mail_configuration: DevKit.Controls.Section;
	}

	export interface IDETAILS_TABTabSections {
		DirectReports: DevKit.Controls.Section;
		mailing_address: DevKit.Controls.Section;
		user_information_2: DevKit.Controls.Section;
	}

	export interface IMobileOfflineProfile_TABTabSections {
		mobileofflineaccessinfo: DevKit.Controls.Section;
	}

	export interface ISUMMARY_TABTabSections {
		online_account_information: DevKit.Controls.Section;
		onpremise_account_information: DevKit.Controls.Section;
		organization_information: DevKit.Controls.Section;
		queue_information: DevKit.Controls.Section;
		queue_selection: DevKit.Controls.Section;
		SOCIAL_PANE_TAB: DevKit.Controls.Section;
		teams_information: DevKit.Controls.Section;
		user_information: DevKit.Controls.Section;
	}

	export interface IADMINISTRATION_TABTab extends DevKit.Controls.ITab {
		Section: IADMINISTRATION_TABTabSections;
	}

	export interface IDETAILS_TABTab extends DevKit.Controls.ITab {
		Section: IDETAILS_TABTabSections;
	}

	export interface IMobileOfflineProfile_TABTab extends DevKit.Controls.ITab {
		Section: IMobileOfflineProfile_TABTabSections;
	}

	export interface ISUMMARY_TABTab extends DevKit.Controls.ITab {
		Section: ISUMMARY_TABTabSections;
	}

	export interface ITabs {
		ADMINISTRATION_TAB: IADMINISTRATION_TABTab;
		DETAILS_TAB: IDETAILS_TABTab;
		MobileOfflineProfile_TAB: IMobileOfflineProfile_TABTab;
		SUMMARY_TAB: ISUMMARY_TABTab;
	}

	/**
	 * Grid controls interface
	 * Contains all subgrid controls on the form
	 */
	export interface IGrid {
		DirectReports: DevKit.Controls.Grid;
		PrivateQueuesSubGrid: DevKit.Controls.Grid;
		TeamsSubGrid: DevKit.Controls.Grid;
	}

	/**
	 * Navigation interface
	 * Contains navigation items
	 */
	export interface INavigation {
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

	// ============================================================================
	// 2. Runtime - Form Class
	// ============================================================================

	/**
	 * SystemUser Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an SystemUser Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'AccessMode',
					'Address1_Composite',
					'Address1_Fax',
					'Address1_Telephone1',
					'Address1_Telephone2',
					'Address1_Telephone3',
					'Address2_Composite',
					'BusinessUnitId',
					'CALType',
					'DefaultMailbox',
					'DomainName',
					'FullName',
					'HomePhone',
					'InternalEMailAddress',
					'InviteStatusCode',
					'MobileAlertEMail',
					'MobileOfflineProfileId',
					'MobilePhone',
					'notescontrol',
					'ParentSystemUserId',
					'PersonalEMailAddress',
					'PositionId',
					'PreferredAddressCode',
					'PreferredPhoneCode',
					'QueueId',
					'Title',
					'WindowsLiveID'
				],
				header: [
					
				],
				tab: [
					'ADMINISTRATION_TAB___administration',
					'ADMINISTRATION_TAB___e_mail_configuration',
					'DETAILS_TAB___DirectReports',
					'DETAILS_TAB___mailing_address',
					'DETAILS_TAB___user_information_2',
					'MobileOfflineProfile_TAB___mobileofflineaccessinfo',
					'SUMMARY_TAB___online_account_information',
					'SUMMARY_TAB___onpremise_account_information',
					'SUMMARY_TAB___organization_information',
					'SUMMARY_TAB___queue_information',
					'SUMMARY_TAB___queue_selection',
					'SUMMARY_TAB___SOCIAL_PANE_TAB',
					'SUMMARY_TAB___teams_information',
					'SUMMARY_TAB___user_information'
				],
				grid: [
					'DirectReports',
					'PrivateQueuesSubGrid',
					'TeamsSubGrid'
				],
				navigation: [
					'navActivities'
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

export namespace FormUser_form_Business {

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
	export interface IHeader {
	}

	export interface IADMINISTRATION_TABTabSections {
		administration: DevKit.Controls.Section;
		e_mail_configuration: DevKit.Controls.Section;
	}

	export interface ISUMMARY_TABTabSections {
		DirectReports: DevKit.Controls.Section;
		mailing_address: DevKit.Controls.Section;
		online_account_information: DevKit.Controls.Section;
		onpremise_account_information: DevKit.Controls.Section;
		organization_information: DevKit.Controls.Section;
		TEAMS_TAB: DevKit.Controls.Section;
		user_information: DevKit.Controls.Section;
	}

	export interface IADMINISTRATION_TABTab extends DevKit.Controls.ITab {
		Section: IADMINISTRATION_TABTabSections;
	}

	export interface ISUMMARY_TABTab extends DevKit.Controls.ITab {
		Section: ISUMMARY_TABTabSections;
	}

	export interface ITabs {
		ADMINISTRATION_TAB: IADMINISTRATION_TABTab;
		SUMMARY_TAB: ISUMMARY_TABTab;
	}

	/**
	 * Grid controls interface
	 * Contains all subgrid controls on the form
	 */
	export interface IGrid {
		DirectReports: DevKit.Controls.Grid;
		TeamsSubGrid: DevKit.Controls.Grid;
	}

	/**
	 * Navigation interface
	 * Contains navigation items
	 */
	export interface INavigation {
		navActivities: DevKit.Controls.NavigationItem;
		navAsyncOperations: DevKit.Controls.NavigationItem;
		navAudit: DevKit.Controls.NavigationItem;
		navConnections: DevKit.Controls.NavigationItem;
		navFieldSecurityProfiles: DevKit.Controls.NavigationItem;
		navMonthlyCalendar: DevKit.Controls.NavigationItem;
		navProcessSessions: DevKit.Controls.NavigationItem;
		navResourceGroups: DevKit.Controls.NavigationItem;
		navRoles: DevKit.Controls.NavigationItem;
		navServices: DevKit.Controls.NavigationItem;
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

	// ============================================================================
	// 2. Runtime - Form Class
	// ============================================================================

	/**
	 * SystemUser Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an SystemUser Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'AccessMode',
					'Address1_Composite',
					'Address1_Telephone1',
					'BusinessUnitId',
					'CALType',
					'DefaultMailbox',
					'DomainName',
					'FullName',
					'InternalEMailAddress',
					'InviteStatusCode',
					'MobilePhone',
					'ParentSystemUserId',
					'PreferredAddressCode',
					'Title',
					'WindowsLiveID'
				],
				header: [
					
				],
				tab: [
					'ADMINISTRATION_TAB___administration',
					'ADMINISTRATION_TAB___e_mail_configuration',
					'SUMMARY_TAB___DirectReports',
					'SUMMARY_TAB___mailing_address',
					'SUMMARY_TAB___online_account_information',
					'SUMMARY_TAB___onpremise_account_information',
					'SUMMARY_TAB___organization_information',
					'SUMMARY_TAB___TEAMS_TAB',
					'SUMMARY_TAB___user_information'
				],
				grid: [
					'DirectReports',
					'TeamsSubGrid'
				],
				navigation: [
					'navActivities',
					'navAsyncOperations',
					'navAudit',
					'navConnections',
					'navFieldSecurityProfiles',
					'navMonthlyCalendar',
					'navProcessSessions',
					'navResourceGroups',
					'navRoles',
					'navServices',
					'navTeams'
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


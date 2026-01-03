/**
 * Contact.form.ts - Contact Form for early-bound style form coding
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

export namespace FormContact {

	/**
	 * Body controls interface
	 * Contains all controls on the form body
	 */
	export interface IBody {
		ActionCards: DevKit.Controls.ActionCards;
		/** Shows the complete primary address. */
		Address1_Composite: DevKit.Controls.Memo;
		/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
		Address1_FreightTermsCode: DevKit.Controls.OptionSet;
		/** Select a shipping method for deliveries sent to this address. */
		Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
		/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
		Anniversary: DevKit.Controls.DateOnly;
		/** Enter the contact's birthday for use in customer gift programs or other communications. */
		BirthDate: DevKit.Controls.DateOnly;
		/** Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer. */
		CreditLimit: DevKit.Controls.Money;
		/** Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues. */
		CreditOnHold: DevKit.Controls.Boolean;
		/** Type additional information to describe the contact, such as an excerpt from the company's website. */
		Description: DevKit.Controls.Memo;
		/** Select whether the contact accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the email. */
		DoNotBulkEMail: DevKit.Controls.Boolean;
		/** Select whether the contact allows direct email sent from Microsoft Dynamics 365. If Do Not Allow is selected, Microsoft Dynamics 365 will not send the email. */
		DoNotEMail: DevKit.Controls.Boolean;
		/** Select whether the contact allows faxes. If Do Not Allow is selected, the contact will be excluded from any fax activities distributed in marketing campaigns. */
		DoNotFax: DevKit.Controls.Boolean;
		/** Select whether the contact accepts phone calls. If Do Not Allow is selected, the contact will be excluded from any phone call activities distributed in marketing campaigns. */
		DoNotPhone: DevKit.Controls.Boolean;
		/** Select whether the contact allows direct mail. If Do Not Allow is selected, the contact will be excluded from letter activities distributed in marketing campaigns. */
		DoNotPostalMail: DevKit.Controls.Boolean;
		/** Type the primary email address for the contact. */
		EMailAddress1: DevKit.Controls.String;
		/** Select the marital status of the contact for reference in follow-up phone calls and other communications. */
		FamilyStatusCode: DevKit.Controls.OptionSet;
		/** Type the fax number for the contact. */
		Fax: DevKit.Controls.String;
		/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the contact. */
		FollowEmail: DevKit.Controls.Boolean;
		/** Combines and shows the contact's first and last names so that the full name can be displayed in views and reports. */
		FullName: DevKit.Controls.String;
		/** Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		GenderCode: DevKit.Controls.OptionSet;
		/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		JobTitle: DevKit.Controls.String;
		mapcontrol: DevKit.Controls.Map;
		/** Type the mobile phone number for the contact. */
		MobilePhone: DevKit.Controls.String;
		notescontrol: DevKit.Controls.Note;
		/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
		ParentCustomerId: DevKit.Controls.Lookup;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: DevKit.Controls.OptionSet;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: DevKit.Controls.OptionSet;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode1: DevKit.Controls.OptionSet;
		/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
		SpousesName: DevKit.Controls.String;
		/** Type the main phone number for this contact. */
		Telephone1: DevKit.Controls.String;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.Controls.Lookup;
		Tab: ITabs;
	}

	/**
	 * Header controls interface
	 * Contains controls displayed in the form header
	 */
	export interface IHeader {
		/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId: DevKit.Controls.Lookup;
	}

	export interface IDETAILS_TABTabSections {
		/** BILLING */
		billing_information: DevKit.Controls.Section;
		/** CONTACT PREFERENCES */
		CONTACT_PREFERENCES: DevKit.Controls.Section;
		/** PERSONAL */
		PERSONAL_INFORMATION: DevKit.Controls.Section;
		/** PERSONAL NOTES */
		PERSONAL_NOTES_SECTION: DevKit.Controls.Section;
		/** SHIPPING */
		shipping_information: DevKit.Controls.Section;
	}

	export interface ISUMMARY_TABTabSections {
		/** CONTACT INFORMATION */
		CONTACT_INFORMATION: DevKit.Controls.Section;
		MapSection: DevKit.Controls.Section;
		/** SOCIAL PANE */
		SOCIAL_PANE_TAB: DevKit.Controls.Section;
		/** Assistant */
		Summary_section_6: DevKit.Controls.Section;
	}

	/** Details */
	export interface IDETAILS_TABTab extends DevKit.Controls.ITab {
		Section: IDETAILS_TABTabSections;
	}

	/** Summary */
	export interface ISUMMARY_TABTab extends DevKit.Controls.ITab {
		Section: ISUMMARY_TABTabSections;
	}

	export interface ITabs {
		/** Details */
		DETAILS_TAB: IDETAILS_TABTab;
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
		/** Addresses */
		navAddresses: DevKit.Controls.NavigationItem;
		/** Workflows */
		navAsyncOperations: DevKit.Controls.NavigationItem;
		/** Invoice */
		navInvoices: DevKit.Controls.NavigationItem;
		/** SalesOrder */
		navOrders: DevKit.Controls.NavigationItem;
		/** Dialog Sessions */
		navProcessSessions: DevKit.Controls.NavigationItem;
		/** Quote */
		navQuotes: DevKit.Controls.NavigationItem;
		/** CustomerRelationship */
		navRelationships: DevKit.Controls.NavigationItem;
		/** Contacts */
		navSubConts: DevKit.Controls.NavigationItem;
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
	 * Contact Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Contact Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'ActionCards',
					'Address1_Composite',
					'Address1_FreightTermsCode',
					'Address1_ShippingMethodCode',
					'Anniversary',
					'BirthDate',
					'CreditLimit',
					'CreditOnHold',
					'Description',
					'DoNotBulkEMail',
					'DoNotEMail',
					'DoNotFax',
					'DoNotPhone',
					'DoNotPostalMail',
					'EMailAddress1',
					'FamilyStatusCode',
					'Fax',
					'FollowEmail',
					'FullName',
					'GenderCode',
					'JobTitle',
					'mapcontrol',
					'MobilePhone',
					'notescontrol',
					'ParentCustomerId',
					'PaymentTermsCode',
					'PreferredContactMethodCode',
					'PreferredContactMethodCode1',
					'SpousesName',
					'Telephone1',
					'TransactionCurrencyId'
				],
				header: [
					'OwnerId'
				],
				tab: [
					'DETAILS_TAB___billing_information',
					'DETAILS_TAB___CONTACT_PREFERENCES',
					'DETAILS_TAB___PERSONAL_INFORMATION',
					'DETAILS_TAB___PERSONAL_NOTES_SECTION',
					'DETAILS_TAB___shipping_information',
					'SUMMARY_TAB___CONTACT_INFORMATION',
					'SUMMARY_TAB___MapSection',
					'SUMMARY_TAB___SOCIAL_PANE_TAB',
					'SUMMARY_TAB___Summary_section_6'
				],
				grid: [
					
				],
				navigation: [
					'navActivities',
					'navAddresses',
					'navAsyncOperations',
					'navInvoices',
					'navOrders',
					'navProcessSessions',
					'navQuotes',
					'navRelationships',
					'navSubConts'
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

export namespace FormContact_Information {

	/**
	 * Body controls interface
	 * Contains all controls on the form body
	 */
	export interface IBody {
		/** Select the contact's role within the company or sales process, such as decision maker, employee, or influencer. */
		AccountRoleCode: DevKit.Controls.OptionSet;
		/** Select the primary address type. */
		Address1_AddressTypeCode: DevKit.Controls.OptionSet;
		/** Type the city for the primary address. */
		Address1_City: DevKit.Controls.String;
		/** Type the country or region for the primary address. */
		Address1_Country: DevKit.Controls.String;
		/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
		Address1_FreightTermsCode: DevKit.Controls.OptionSet;
		/** Type the first line of the primary address. */
		Address1_Line1: DevKit.Controls.String;
		/** Type the second line of the primary address. */
		Address1_Line2: DevKit.Controls.String;
		/** Type the third line of the primary address. */
		Address1_Line3: DevKit.Controls.String;
		/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
		Address1_Name: DevKit.Controls.String;
		/** Type the ZIP Code or postal code for the primary address. */
		Address1_PostalCode: DevKit.Controls.String;
		/** Select a shipping method for deliveries sent to this address. */
		Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
		/** Type the state or province of the primary address. */
		Address1_StateOrProvince: DevKit.Controls.String;
		/** Type the main phone number associated with the primary address. */
		Address1_Telephone1: DevKit.Controls.String;
		/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
		Anniversary: DevKit.Controls.DateOnly;
		/** Type the name of the contact's assistant. */
		AssistantName: DevKit.Controls.String;
		/** Type the phone number for the contact's assistant. */
		AssistantPhone: DevKit.Controls.String;
		/** Enter the contact's birthday for use in customer gift programs or other communications. */
		BirthDate: DevKit.Controls.DateOnly;
		/** Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer. */
		CreditLimit: DevKit.Controls.Money;
		/** Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues. */
		CreditOnHold: DevKit.Controls.Boolean;
		/** Type the department or business unit where the contact works in the parent company or business. */
		Department: DevKit.Controls.String;
		/** Type additional information to describe the contact, such as an excerpt from the company's website. */
		Description: DevKit.Controls.Memo;
		/** Select whether the contact accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the email. */
		DoNotBulkEMail: DevKit.Controls.Boolean;
		/** Select whether the contact allows direct email sent from Microsoft Dynamics 365. If Do Not Allow is selected, Microsoft Dynamics 365 will not send the email. */
		DoNotEMail: DevKit.Controls.Boolean;
		/** Select whether the contact allows faxes. If Do Not Allow is selected, the contact will be excluded from any fax activities distributed in marketing campaigns. */
		DoNotFax: DevKit.Controls.Boolean;
		/** Select whether the contact accepts phone calls. If Do Not Allow is selected, the contact will be excluded from any phone call activities distributed in marketing campaigns. */
		DoNotPhone: DevKit.Controls.Boolean;
		/** Select whether the contact allows direct mail. If Do Not Allow is selected, the contact will be excluded from letter activities distributed in marketing campaigns. */
		DoNotPostalMail: DevKit.Controls.Boolean;
		/** Type the primary email address for the contact. */
		EMailAddress1: DevKit.Controls.String;
		/** Select the marital status of the contact for reference in follow-up phone calls and other communications. */
		FamilyStatusCode: DevKit.Controls.OptionSet;
		/** Type the fax number for the contact. */
		Fax: DevKit.Controls.String;
		/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		FirstName: DevKit.Controls.String;
		/** Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		GenderCode: DevKit.Controls.OptionSet;
		/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		JobTitle: DevKit.Controls.String;
		/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		LastName: DevKit.Controls.String;
		/** Type the name of the contact's manager for use in escalating issues or other follow-up communications with the contact. */
		ManagerName: DevKit.Controls.String;
		/** Type the phone number for the contact's manager. */
		ManagerPhone: DevKit.Controls.String;
		/** Type the contact's middle name or initial to make sure the contact is addressed correctly. */
		MiddleName: DevKit.Controls.String;
		/** Type the mobile phone number for the contact. */
		MobilePhone: DevKit.Controls.String;
		notescontrol: DevKit.Controls.Note;
		/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId: DevKit.Controls.Lookup;
		/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
		ParentCustomerId: DevKit.Controls.Lookup;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: DevKit.Controls.OptionSet;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: DevKit.Controls.OptionSet;
		/** Type the salutation of the contact to make sure the contact is addressed correctly in sales calls, email messages, and marketing campaigns. */
		Salutation: DevKit.Controls.String;
		/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
		SpousesName: DevKit.Controls.String;
		/** Type the main phone number for this contact. */
		Telephone1: DevKit.Controls.String;
		/** Type a second phone number for this contact. */
		Telephone2: DevKit.Controls.String;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.Controls.Lookup;
		Tab: ITabs;
	}

	/**
	 * Header controls interface
	 * Contains controls displayed in the form header
	 */
	export interface IHeader {
		/** Type the primary email address for the contact. */
		EMailAddress1: DevKit.Controls.String;
		/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId: DevKit.Controls.Lookup;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: DevKit.Controls.OptionSet;
	}

	export interface IadministrationTabSections {
		/** Billing Information */
		billing_information: DevKit.Controls.Section;
		/** Contact Methods */
		contact_methods: DevKit.Controls.Section;
		/** Internal Information */
		internal_information: DevKit.Controls.Section;
	}

	export interface IdetailsTabSections {
		/** Personal Information */
		personal_information: DevKit.Controls.Section;
		/** Professional Information */
		professional_information: DevKit.Controls.Section;
	}

	export interface IgeneralTabSections {
		/** Address */
		address: DevKit.Controls.Section;
		/** Description */
		description: DevKit.Controls.Section;
		/** Name */
		name: DevKit.Controls.Section;
		/** Shipping Information */
		shipping_information: DevKit.Controls.Section;
	}

	export interface Inotes_and_activitiesTabSections {
		/** Activities */
		activities: DevKit.Controls.Section;
		/** Notes */
		notes: DevKit.Controls.Section;
	}

	/** Preferences */
	export interface IadministrationTab extends DevKit.Controls.ITab {
		Section: IadministrationTabSections;
	}

	/** Details */
	export interface IdetailsTab extends DevKit.Controls.ITab {
		Section: IdetailsTabSections;
	}

	/** General */
	export interface IgeneralTab extends DevKit.Controls.ITab {
		Section: IgeneralTabSections;
	}

	/** Notes & Activities */
	export interface Inotes_and_activitiesTab extends DevKit.Controls.ITab {
		Section: Inotes_and_activitiesTabSections;
	}

	export interface ITabs {
		/** Preferences */
		administration: IadministrationTab;
		/** Details */
		details: IdetailsTab;
		/** General */
		general: IgeneralTab;
		/** Notes & Activities */
		notes_and_activities: Inotes_and_activitiesTab;
	}

	/**
	 * Grid controls interface
	 * Contains all subgrid controls on the form
	 */
	export interface IGrid {
		contactactivitiesgrid: DevKit.Controls.Grid;
	}

	/**
	 * Navigation interface
	 * Contains navigation items
	 */
	export interface INavigation {
		navActivities: DevKit.Controls.NavigationItem;
		navActivityHistory: DevKit.Controls.NavigationItem;
		navAddresses: DevKit.Controls.NavigationItem;
		navRelationships: DevKit.Controls.NavigationItem;
		navSubConts: DevKit.Controls.NavigationItem;
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
	 * Contact Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Contact Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'AccountRoleCode',
					'Address1_AddressTypeCode',
					'Address1_City',
					'Address1_Country',
					'Address1_FreightTermsCode',
					'Address1_Line1',
					'Address1_Line2',
					'Address1_Line3',
					'Address1_Name',
					'Address1_PostalCode',
					'Address1_ShippingMethodCode',
					'Address1_StateOrProvince',
					'Address1_Telephone1',
					'Anniversary',
					'AssistantName',
					'AssistantPhone',
					'BirthDate',
					'CreditLimit',
					'CreditOnHold',
					'Department',
					'Description',
					'DoNotBulkEMail',
					'DoNotEMail',
					'DoNotFax',
					'DoNotPhone',
					'DoNotPostalMail',
					'EMailAddress1',
					'FamilyStatusCode',
					'Fax',
					'FirstName',
					'GenderCode',
					'JobTitle',
					'LastName',
					'ManagerName',
					'ManagerPhone',
					'MiddleName',
					'MobilePhone',
					'notescontrol',
					'OwnerId',
					'ParentCustomerId',
					'PaymentTermsCode',
					'PreferredContactMethodCode',
					'Salutation',
					'SpousesName',
					'Telephone1',
					'Telephone2',
					'TransactionCurrencyId'
				],
				header: [
					'EMailAddress1',
					'OwnerId',
					'PreferredContactMethodCode'
				],
				tab: [
					'administration___billing_information',
					'administration___contact_methods',
					'administration___internal_information',
					'details___personal_information',
					'details___professional_information',
					'general___address',
					'general___description',
					'general___name',
					'general___shipping_information',
					'notes_and_activities___activities',
					'notes_and_activities___notes'
				],
				grid: [
					'contactactivitiesgrid'
				],
				navigation: [
					'navActivities',
					'navActivityHistory',
					'navAddresses',
					'navRelationships',
					'navSubConts'
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

export namespace FormInvite_Web_Form {

	/**
	 * Body controls interface
	 * Contains all controls on the form body
	 */
	export interface IBody {
		/** Type the primary email address for the contact. */
		EMailAddress1: DevKit.Controls.String;
		/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		FirstName: DevKit.Controls.String;
		/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		LastName: DevKit.Controls.String;
		/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId: DevKit.Controls.Lookup;
		/** Type the main phone number for this contact. */
		Telephone1: DevKit.Controls.String;
		Tab: ITabs;
	}

	/**
	 * Header controls interface
	 * Contains controls displayed in the form header
	 */
	export interface IHeader {
	}

	export interface ITabs {
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
		/** Closed Activities */
		navActivityHistory: DevKit.Controls.NavigationItem;
		/** More Addresses */
		navAddresses: DevKit.Controls.NavigationItem;
		/** Relationships */
		navRelationships: DevKit.Controls.NavigationItem;
		/** Sub-Contacts */
		navSubConts: DevKit.Controls.NavigationItem;
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
	 * Contact Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Contact Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'EMailAddress1',
					'FirstName',
					'LastName',
					'OwnerId',
					'Telephone1'
				],
				header: [
					
				],
				tab: [
					
				],
				grid: [
					
				],
				navigation: [
					'navActivities',
					'navActivityHistory',
					'navAddresses',
					'navRelationships',
					'navSubConts'
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

export namespace FormPortal_Contact_Enhanced {

	/**
	 * Body controls interface
	 * Contains all controls on the form body
	 */
	export interface IBody {
		/** Select the contact's role within the company or sales process, such as decision maker, employee, or influencer. */
		AccountRoleCode: DevKit.Controls.OptionSet;
		/** Select the primary address type. */
		Address1_AddressTypeCode: DevKit.Controls.OptionSet;
		/** Type the city for the primary address. */
		Address1_City: DevKit.Controls.String;
		/** Type the country or region for the primary address. */
		Address1_Country: DevKit.Controls.String;
		/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
		Address1_FreightTermsCode: DevKit.Controls.OptionSet;
		/** Type the first line of the primary address. */
		Address1_Line1: DevKit.Controls.String;
		/** Type the second line of the primary address. */
		Address1_Line2: DevKit.Controls.String;
		/** Type the third line of the primary address. */
		Address1_Line3: DevKit.Controls.String;
		/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
		Address1_Name: DevKit.Controls.String;
		/** Type the ZIP Code or postal code for the primary address. */
		Address1_PostalCode: DevKit.Controls.String;
		/** Select a shipping method for deliveries sent to this address. */
		Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
		/** Type the state or province of the primary address. */
		Address1_StateOrProvince: DevKit.Controls.String;
		/** Type the main phone number associated with the primary address. */
		Address1_Telephone1: DevKit.Controls.String;
		/** Shows the current count of failed password attempts for the contact. */
		adx_identity_accessfailedcount: DevKit.Controls.Integer;
		/** Determines if the email is confirmed by the contact. */
		adx_identity_emailaddress1confirmed: DevKit.Controls.Boolean;
		/** Indicates that the contact can no longer sign in to the portal using the local account. */
		adx_identity_locallogindisabled: DevKit.Controls.Boolean;
		/** Determines if this contact will track failed access attempts and become locked after too many failed attempts. To prevent the contact from becoming locked, you can disable this setting. */
		adx_identity_lockoutenabled: DevKit.Controls.Boolean;
		/** Shows the moment in time when the locked contact becomes unlocked again. */
		adx_identity_lockoutenddate: DevKit.Controls.DateTime;
		/** Determines if web authentication is enabled for the contact. */
		adx_identity_logonenabled: DevKit.Controls.Boolean;
		/** Determines if the phone number is confirmed by the contact. */
		adx_identity_mobilephoneconfirmed: DevKit.Controls.Boolean;
		/** A token used to manage the web authentication session. */
		adx_identity_securitystamp: DevKit.Controls.String;
		/** Determines if two-factor authentication is enabled for the contact. */
		adx_identity_twofactorenabled: DevKit.Controls.Boolean;
		/** Shows the user identity for local web authentication. */
		adx_identity_username: DevKit.Controls.String;
		/** Time Zone */
		Adx_TimeZone: DevKit.Controls.Integer;
		/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
		Anniversary: DevKit.Controls.DateOnly;
		/** Type the name of the contact's assistant. */
		AssistantName: DevKit.Controls.String;
		/** Type the phone number for the contact's assistant. */
		AssistantPhone: DevKit.Controls.String;
		/** Enter the contact's birthday for use in customer gift programs or other communications. */
		BirthDate: DevKit.Controls.DateOnly;
		/** Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer. */
		CreditLimit: DevKit.Controls.Money;
		/** Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues. */
		CreditOnHold: DevKit.Controls.Boolean;
		/** Type the department or business unit where the contact works in the parent company or business. */
		Department: DevKit.Controls.String;
		/** Type additional information to describe the contact, such as an excerpt from the company's website. */
		Description: DevKit.Controls.Memo;
		/** Select whether the contact accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the email. */
		DoNotBulkEMail: DevKit.Controls.Boolean;
		/** Select whether the contact allows direct email sent from Microsoft Dynamics 365. If Do Not Allow is selected, Microsoft Dynamics 365 will not send the email. */
		DoNotEMail: DevKit.Controls.Boolean;
		/** Select whether the contact allows faxes. If Do Not Allow is selected, the contact will be excluded from any fax activities distributed in marketing campaigns. */
		DoNotFax: DevKit.Controls.Boolean;
		/** Select whether the contact accepts phone calls. If Do Not Allow is selected, the contact will be excluded from any phone call activities distributed in marketing campaigns. */
		DoNotPhone: DevKit.Controls.Boolean;
		/** Select whether the contact allows direct mail. If Do Not Allow is selected, the contact will be excluded from letter activities distributed in marketing campaigns. */
		DoNotPostalMail: DevKit.Controls.Boolean;
		/** Type the primary email address for the contact. */
		EMailAddress1: DevKit.Controls.String;
		/** Select the marital status of the contact for reference in follow-up phone calls and other communications. */
		FamilyStatusCode: DevKit.Controls.OptionSet;
		/** Type the fax number for the contact. */
		Fax: DevKit.Controls.String;
		/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		FirstName: DevKit.Controls.String;
		/** Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		GenderCode: DevKit.Controls.OptionSet;
		/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		JobTitle: DevKit.Controls.String;
		/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		LastName: DevKit.Controls.String;
		/** Type the name of the contact's manager for use in escalating issues or other follow-up communications with the contact. */
		ManagerName: DevKit.Controls.String;
		/** Type the phone number for the contact's manager. */
		ManagerPhone: DevKit.Controls.String;
		/** Type the contact's middle name or initial to make sure the contact is addressed correctly. */
		MiddleName: DevKit.Controls.String;
		/** Type the mobile phone number for the contact. */
		MobilePhone: DevKit.Controls.String;
		notescontrol: DevKit.Controls.Note;
		/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId: DevKit.Controls.Lookup;
		/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
		ParentCustomerId: DevKit.Controls.Lookup;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: DevKit.Controls.OptionSet;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: DevKit.Controls.OptionSet;
		/** Type the salutation of the contact to make sure the contact is addressed correctly in sales calls, email messages, and marketing campaigns. */
		Salutation: DevKit.Controls.String;
		/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
		SpousesName: DevKit.Controls.String;
		/** Type the main phone number for this contact. */
		Telephone1: DevKit.Controls.String;
		/** Type a second phone number for this contact. */
		Telephone2: DevKit.Controls.String;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.Controls.Lookup;
		Tab: ITabs;
	}

	/**
	 * Header controls interface
	 * Contains controls displayed in the form header
	 */
	export interface IHeader {
		/** Type the primary email address for the contact. */
		EMailAddress1: DevKit.Controls.String;
		/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId: DevKit.Controls.Lookup;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: DevKit.Controls.OptionSet;
	}

	export interface IadministrationTabSections {
		/** Billing Information */
		billing_information: DevKit.Controls.Section;
		/** Contact Methods */
		contact_methods: DevKit.Controls.Section;
		/** Internal Information */
		internal_information: DevKit.Controls.Section;
	}

	export interface IdetailsTabSections {
		/** Personal Information */
		personal_information: DevKit.Controls.Section;
		/** Professional Information */
		professional_information: DevKit.Controls.Section;
	}

	export interface IgeneralTabSections {
		/** Address */
		address: DevKit.Controls.Section;
		/** Web Roles */
		contact_webrole_section: DevKit.Controls.Section;
		/** Description */
		description: DevKit.Controls.Section;
		/** Name */
		name: DevKit.Controls.Section;
		/** Shipping Information */
		shipping_information: DevKit.Controls.Section;
	}

	export interface Inotes_and_activitiesTabSections {
		/** Activities */
		activities: DevKit.Controls.Section;
		/** Notes */
		notes: DevKit.Controls.Section;
	}

	export interface Iweb_authenticationTabSections {
		/** Local Identity */
		_F0EF7388_9001_DD11_86DA_0003FF48C0DB_SECTION_4: DevKit.Controls.Section;
		/** External Identities */
		_F0EF7388_9001_DD11_86DA_0003FF48C0DB_SECTION_5: DevKit.Controls.Section;
	}

	/** Preferences */
	export interface IadministrationTab extends DevKit.Controls.ITab {
		Section: IadministrationTabSections;
	}

	/** Details */
	export interface IdetailsTab extends DevKit.Controls.ITab {
		Section: IdetailsTabSections;
	}

	/** General */
	export interface IgeneralTab extends DevKit.Controls.ITab {
		Section: IgeneralTabSections;
	}

	/** Notes & Activities */
	export interface Inotes_and_activitiesTab extends DevKit.Controls.ITab {
		Section: Inotes_and_activitiesTabSections;
	}

	/** Web Authentication */
	export interface Iweb_authenticationTab extends DevKit.Controls.ITab {
		Section: Iweb_authenticationTabSections;
	}

	export interface ITabs {
		/** Preferences */
		administration: IadministrationTab;
		/** Details */
		details: IdetailsTab;
		/** General */
		general: IgeneralTab;
		/** Notes & Activities */
		notes_and_activities: Inotes_and_activitiesTab;
		/** Web Authentication */
		web_authentication: Iweb_authenticationTab;
	}

	/**
	 * Grid controls interface
	 * Contains all subgrid controls on the form
	 */
	export interface IGrid {
		adx_externalidentity: DevKit.Controls.Grid;
		contactactivitiesgrid: DevKit.Controls.Grid;
		grid_contact_mspp_webrole: DevKit.Controls.Grid;
	}

	/**
	 * Navigation interface
	 * Contains navigation items
	 */
	export interface INavigation {
		/** Web Roles */
		nav_adx_webrole_contact: DevKit.Controls.NavigationItem;
		/** Site Components */
		nav_powerpagecomponent_mspp_webrole_contact: DevKit.Controls.NavigationItem;
		/** Activities */
		navActivities: DevKit.Controls.NavigationItem;
		/** Closed Activities */
		navActivityHistory: DevKit.Controls.NavigationItem;
		/** More Addresses */
		navAddresses: DevKit.Controls.NavigationItem;
		/** Relationships */
		navRelationships: DevKit.Controls.NavigationItem;
		/** Sub-Contacts */
		navSubConts: DevKit.Controls.NavigationItem;
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
	 * Contact Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Contact Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'AccountRoleCode',
					'Address1_AddressTypeCode',
					'Address1_City',
					'Address1_Country',
					'Address1_FreightTermsCode',
					'Address1_Line1',
					'Address1_Line2',
					'Address1_Line3',
					'Address1_Name',
					'Address1_PostalCode',
					'Address1_ShippingMethodCode',
					'Address1_StateOrProvince',
					'Address1_Telephone1',
					'adx_identity_accessfailedcount',
					'adx_identity_emailaddress1confirmed',
					'adx_identity_locallogindisabled',
					'adx_identity_lockoutenabled',
					'adx_identity_lockoutenddate',
					'adx_identity_logonenabled',
					'adx_identity_mobilephoneconfirmed',
					'adx_identity_securitystamp',
					'adx_identity_twofactorenabled',
					'adx_identity_username',
					'Adx_TimeZone',
					'Anniversary',
					'AssistantName',
					'AssistantPhone',
					'BirthDate',
					'CreditLimit',
					'CreditOnHold',
					'Department',
					'Description',
					'DoNotBulkEMail',
					'DoNotEMail',
					'DoNotFax',
					'DoNotPhone',
					'DoNotPostalMail',
					'EMailAddress1',
					'FamilyStatusCode',
					'Fax',
					'FirstName',
					'GenderCode',
					'JobTitle',
					'LastName',
					'ManagerName',
					'ManagerPhone',
					'MiddleName',
					'MobilePhone',
					'notescontrol',
					'OwnerId',
					'ParentCustomerId',
					'PaymentTermsCode',
					'PreferredContactMethodCode',
					'Salutation',
					'SpousesName',
					'Telephone1',
					'Telephone2',
					'TransactionCurrencyId'
				],
				header: [
					'EMailAddress1',
					'OwnerId',
					'PreferredContactMethodCode'
				],
				tab: [
					'administration___billing_information',
					'administration___contact_methods',
					'administration___internal_information',
					'details___personal_information',
					'details___professional_information',
					'general___address',
					'general___contact_webrole_section',
					'general___description',
					'general___name',
					'general___shipping_information',
					'notes_and_activities___activities',
					'notes_and_activities___notes',
					'web_authentication____F0EF7388_9001_DD11_86DA_0003FF48C0DB_SECTION_4',
					'web_authentication____F0EF7388_9001_DD11_86DA_0003FF48C0DB_SECTION_5'
				],
				grid: [
					'adx_externalidentity',
					'contactactivitiesgrid',
					'grid_contact_mspp_webrole'
				],
				navigation: [
					'nav_adx_webrole_contact',
					'nav_powerpagecomponent_mspp_webrole_contact',
					'navActivities',
					'navActivityHistory',
					'navAddresses',
					'navRelationships',
					'navSubConts'
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

export namespace FormProfile_Web_Form_Enhanced {

	/**
	 * Body controls interface
	 * Contains all controls on the form body
	 */
	export interface IBody {
		/** Organization Name */
		Adx_OrganizationName: DevKit.Controls.String;
		/** Public Profile Copy */
		adx_PublicProfileCopy: DevKit.Controls.Memo;
		/** Type the primary email address for the contact. */
		EMailAddress1: DevKit.Controls.String;
		/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		FirstName: DevKit.Controls.String;
		/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		JobTitle: DevKit.Controls.String;
		/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		LastName: DevKit.Controls.String;
		/** User’s preferred portal language */
		mspp_userpreferredlcid: DevKit.Controls.OptionSet;
		/** Type the contact's nickname. */
		NickName: DevKit.Controls.String;
		/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId: DevKit.Controls.Lookup;
		/** Type the main phone number for this contact. */
		Telephone1: DevKit.Controls.String;
		/** Type the contact's professional or personal website or blog URL. */
		WebSiteUrl: DevKit.Controls.String;
		Tab: ITabs;
	}

	/**
	 * Header controls interface
	 * Contains controls displayed in the form header
	 */
	export interface IHeader {
	}

	export interface ITabs {
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
		/** Closed Activities */
		navActivityHistory: DevKit.Controls.NavigationItem;
		/** More Addresses */
		navAddresses: DevKit.Controls.NavigationItem;
		/** Relationships */
		navRelationships: DevKit.Controls.NavigationItem;
		/** Sub-Contacts */
		navSubConts: DevKit.Controls.NavigationItem;
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
	 * Contact Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Contact Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'Adx_OrganizationName',
					'adx_PublicProfileCopy',
					'EMailAddress1',
					'FirstName',
					'JobTitle',
					'LastName',
					'mspp_userpreferredlcid',
					'NickName',
					'OwnerId',
					'Telephone1',
					'WebSiteUrl'
				],
				header: [
					
				],
				tab: [
					
				],
				grid: [
					
				],
				navigation: [
					'navActivities',
					'navActivityHistory',
					'navAddresses',
					'navRelationships',
					'navSubConts'
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

export namespace FormProfile_Web_Form_Enhanced_Japanese {

	/**
	 * Body controls interface
	 * Contains all controls on the form body
	 */
	export interface IBody {
		/** Organization Name */
		Adx_OrganizationName: DevKit.Controls.String;
		/** Public Profile Copy */
		adx_PublicProfileCopy: DevKit.Controls.Memo;
		/** Type the primary email address for the contact. */
		EMailAddress1: DevKit.Controls.String;
		/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		FirstName: DevKit.Controls.String;
		/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		JobTitle: DevKit.Controls.String;
		/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		LastName: DevKit.Controls.String;
		/** User’s preferred portal language */
		mspp_userpreferredlcid: DevKit.Controls.OptionSet;
		/** Type the contact's nickname. */
		NickName: DevKit.Controls.String;
		/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId: DevKit.Controls.Lookup;
		/** Type the main phone number for this contact. */
		Telephone1: DevKit.Controls.String;
		/** Type the contact's professional or personal website or blog URL. */
		WebSiteUrl: DevKit.Controls.String;
		/** Type the phonetic spelling of the contact's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiFirstName: DevKit.Controls.String;
		/** Type the phonetic spelling of the contact's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
		YomiLastName: DevKit.Controls.String;
		Tab: ITabs;
	}

	/**
	 * Header controls interface
	 * Contains controls displayed in the form header
	 */
	export interface IHeader {
	}

	export interface ITabs {
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
		/** Closed Activities */
		navActivityHistory: DevKit.Controls.NavigationItem;
		/** More Addresses */
		navAddresses: DevKit.Controls.NavigationItem;
		/** Relationships */
		navRelationships: DevKit.Controls.NavigationItem;
		/** Sub-Contacts */
		navSubConts: DevKit.Controls.NavigationItem;
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
	 * Contact Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Contact Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'Adx_OrganizationName',
					'adx_PublicProfileCopy',
					'EMailAddress1',
					'FirstName',
					'JobTitle',
					'LastName',
					'mspp_userpreferredlcid',
					'NickName',
					'OwnerId',
					'Telephone1',
					'WebSiteUrl',
					'YomiFirstName',
					'YomiLastName'
				],
				header: [
					
				],
				tab: [
					
				],
				grid: [
					
				],
				navigation: [
					'navActivities',
					'navActivityHistory',
					'navAddresses',
					'navRelationships',
					'navSubConts'
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

export namespace FormContact_Quick_Create {

	/**
	 * Body controls interface
	 * Contains all controls on the form body
	 */
	export interface IBody {
		address1_city: DevKit.Controls.String;
		address1_line1: DevKit.Controls.String;
		address1_line2: DevKit.Controls.String;
		address1_postalcode: DevKit.Controls.String;
		description: DevKit.Controls.Memo;
		emailaddress1: DevKit.Controls.String;
		firstname: DevKit.Controls.String;
		jobtitle: DevKit.Controls.String;
		lastname: DevKit.Controls.String;
		mobilephone: DevKit.Controls.String;
		parentcustomerid: DevKit.Controls.Lookup;
		telephone1: DevKit.Controls.String;
		/** Form Tabs */
		Tab: ITabs;
	}

	export interface IHeader {
	}

	export interface Itab_1TabSections {
		/** Details */
		tab_1_column_1_section_1: DevKit.Controls.Section;
		/** Contact Information */
		tab_1_column_2_section_1: DevKit.Controls.Section;
		/** Address */
		tab_1_column_3_section_1: DevKit.Controls.Section;
	}

	/** Tab */
	export interface Itab_1Tab extends DevKit.Controls.ITab {
		Section: Itab_1TabSections;
	}

	export interface ITabs {
		/** Tab */
		tab_1: Itab_1Tab;
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
	 * Contact Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Contact Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'Address1_City',
					'Address1_Line1',
					'Address1_Line2',
					'Address1_PostalCode',
					'Description',
					'EMailAddress1',
					'FirstName',
					'JobTitle',
					'LastName',
					'MobilePhone',
					'ParentCustomerId',
					'Telephone1'
				],
				header: [
					
				],
				tab: [
					'tab_1___tab_1_column_1_section_1',
					'tab_1___tab_1_column_2_section_1',
					'tab_1___tab_1_column_3_section_1'
				],
				grid: [
					
				],
				navigation: [
					'navActivities'
				],
				quick: [],
				bpf: [],
				dialog: []
			});
		}
	}
}


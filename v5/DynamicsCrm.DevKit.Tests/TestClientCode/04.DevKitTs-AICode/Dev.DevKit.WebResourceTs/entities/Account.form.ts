/**
 * Account.form.ts - Account Form for early-bound style form coding
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

export namespace FormAccount {

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
		/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
		CreditLimit: DevKit.Controls.Money;
		/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
		CreditOnHold: DevKit.Controls.Boolean;
		/** Type additional information to describe the account, such as an excerpt from the company's website. */
		Description: DevKit.Controls.Memo;
		/** Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email. */
		DoNotBulkEMail: DevKit.Controls.Boolean;
		/** Select whether the account allows direct email sent from Microsoft Dynamics 365. */
		DoNotEMail: DevKit.Controls.Boolean;
		/** Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns. */
		DoNotFax: DevKit.Controls.Boolean;
		/** Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns. */
		DoNotPhone: DevKit.Controls.Boolean;
		/** Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns. */
		DoNotPostalMail: DevKit.Controls.Boolean;
		/** Type the fax number for the account. */
		Fax: DevKit.Controls.String;
		/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account. */
		FollowEmail: DevKit.Controls.Boolean;
		/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
		IndustryCode: DevKit.Controls.OptionSet;
		mapcontrol: DevKit.Controls.Map;
		/** Type the company or business name. */
		Name: DevKit.Controls.String;
		notescontrol: DevKit.Controls.Note;
		/** Select the account's ownership structure, such as public or private. */
		OwnershipCode: DevKit.Controls.OptionSet;
		/** Choose the parent account associated with this account to show parent and child businesses in reporting and analytics. */
		ParentAccountId: DevKit.Controls.Lookup;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: DevKit.Controls.OptionSet;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: DevKit.Controls.OptionSet;
		/** Choose the primary contact for the account to provide quick access to contact details. */
		PrimaryContactId: DevKit.Controls.Lookup;
		/** Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. */
		SIC: DevKit.Controls.String;
		/** Type the main phone number for this account. */
		Telephone1: DevKit.Controls.String;
		/** Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
		TickerSymbol: DevKit.Controls.String;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.Controls.Lookup;
		/** Type the account's website URL to get quick details about the company profile. */
		WebSiteURL: DevKit.Controls.String;
		Tab: ITabs;
	}

	/**
	 * Header controls interface
	 * Contains controls displayed in the form header
	 */
	export interface IHeader extends DevKit.Controls.IHeader {
		/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
		NumberOfEmployees: DevKit.Controls.Integer;
		/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId: DevKit.Controls.Lookup;
		/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
		Revenue: DevKit.Controls.Money;
	}

	export interface IDETAILS_TABTabSections {
		/** BILLING */
		BILLING: DevKit.Controls.Section;
		/** CHILD ACCOUNTS */
		ChildAccounts: DevKit.Controls.Section;
		/** COMPANY PROFILE */
		COMPANY_PROFILE: DevKit.Controls.Section;
		/** CONTACT PREFERENCES */
		CONTACT_PREFERENCES: DevKit.Controls.Section;
		/** Description */
		DETAILS_TAB_section_6: DevKit.Controls.Section;
		/** SHIPPING */
		SHIPPING: DevKit.Controls.Section;
	}

	export interface ISUMMARY_TABTabSections {
		/** ACCOUNT INFORMATION */
		ACCOUNT_INFORMATION: DevKit.Controls.Section;
		/** ADDRESS */
		ADDRESS: DevKit.Controls.Section;
		MapSection: DevKit.Controls.Section;
		/** SOCIAL PANE */
		SOCIAL_PANE_TAB: DevKit.Controls.Section;
		/** Assistant */
		Summary_section_6: DevKit.Controls.Section;
		/** Section */
		SUMMARY_TAB_section_6: DevKit.Controls.Section;
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
		/** Child Accounts */
		ChildAccounts: DevKit.Controls.Grid;
		/** CONTACTS */
		Contacts: DevKit.Controls.Grid;
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
		/** Campaigns */
		navCampaignsInSFA: DevKit.Controls.NavigationItem;
		/** Dialog Sessions */
		navProcessSessions: DevKit.Controls.NavigationItem;
		/** CustomerRelationship */
		navRelationships: DevKit.Controls.NavigationItem;
		/** Accounts */
		navSubAccts: DevKit.Controls.NavigationItem;
	}

	/**
	 * QuickForm interface
	 * Contains quick view form controls
	 */
	export interface IQuickForm {
		contactquickform: DevKit.Controls.IQuickView & {
			Body: IcontactquickformBody;
		};
	}

	/**
	 * contactquickform quick view control body interface
	 */
	export interface IcontactquickformBody {
		/** Type the primary email address for the contact. */
		EMailAddress1: DevKit.Controls.QuickView;
		/** Type the main phone number for this contact. */
		Telephone1: DevKit.Controls.QuickView;
	}

	/**
	 * Process interface
	 * Contains business process flow definitions
	 */
	export interface IProcess extends DevKit.Controls.IProcess {
		AccountBPF: IAccountBPF;
	}

	/**
	 * AccountBPF Business Process Flow fields interface
	 */
	export interface IAccountBPF {
		/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
		IndustryCode: DevKit.Controls.OptionSet;
		/** Type the company or business name. */
		Name: DevKit.Controls.String;
		/** Type the company or business name. */
		Name_1: DevKit.Controls.String;
		/** Choose the primary contact for the account to provide quick access to contact details. */
		PrimaryContactId: DevKit.Controls.Lookup;
		/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
		Revenue: DevKit.Controls.Money;
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
	 * Account Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Account Form instance
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
					'CreditLimit',
					'CreditOnHold',
					'Description',
					'DoNotBulkEMail',
					'DoNotEMail',
					'DoNotFax',
					'DoNotPhone',
					'DoNotPostalMail',
					'Fax',
					'FollowEmail',
					'IndustryCode',
					'mapcontrol',
					'Name',
					'notescontrol',
					'OwnershipCode',
					'ParentAccountId',
					'PaymentTermsCode',
					'PreferredContactMethodCode',
					'PrimaryContactId',
					'SIC',
					'Telephone1',
					'TickerSymbol',
					'TransactionCurrencyId',
					'WebSiteURL'
				],
				header: [
					'NumberOfEmployees',
					'OwnerId',
					'Revenue'
				],
				tab: [
					'DETAILS_TAB___BILLING',
					'DETAILS_TAB___ChildAccounts',
					'DETAILS_TAB___COMPANY_PROFILE',
					'DETAILS_TAB___CONTACT_PREFERENCES',
					'DETAILS_TAB___DETAILS_TAB_section_6',
					'DETAILS_TAB___SHIPPING',
					'SUMMARY_TAB___ACCOUNT_INFORMATION',
					'SUMMARY_TAB___ADDRESS',
					'SUMMARY_TAB___MapSection',
					'SUMMARY_TAB___SOCIAL_PANE_TAB',
					'SUMMARY_TAB___Summary_section_6',
					'SUMMARY_TAB___SUMMARY_TAB_section_6'
				],
				grid: [
					'ChildAccounts',
					'Contacts'
				],
				navigation: [
					'navActivities',
					'navAddresses',
					'navAsyncOperations',
					'navCampaignsInSFA',
					'navProcessSessions',
					'navRelationships',
					'navSubAccts'
				],
				quick: [
					'contactquickform___EMailAddress1',
					'contactquickform___Telephone1'
				],
				bpf: [
					'AccountBPF___IndustryCode',
					'AccountBPF___Name',
					'AccountBPF___Name_1',
					'AccountBPF___PrimaryContactId',
					'AccountBPF___Revenue'
				],
				dialog: [
					
				]
			});
		}
	}
}

export namespace FormAccount_DevKitV4 {

	/**
	 * Body controls interface
	 * Contains all controls on the form body
	 */
	export interface IBody {
		IFRAME_PhuocLe: DevKit.Controls.IFrame;
		/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId: DevKit.Controls.Lookup;
		/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId1: DevKit.Controls.Lookup;
		/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId2: DevKit.Controls.Lookup;
		/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId3: DevKit.Controls.Lookup;
		/** Boolean */
		v4_Boolean: DevKit.Controls.Boolean;
		/** DateOnly */
		v4_DateOnly: DevKit.Controls.DateOnly;
		/** DateTime */
		v4_DateTime: DevKit.Controls.DateTime;
		/** Decimal */
		v4_Decimal: DevKit.Controls.Decimal;
		/** Double */
		v4_Double: DevKit.Controls.Double;
		/** Integer */
		v4_Integer: DevKit.Controls.Integer;
		/** Lookup */
		v4_Lookup: DevKit.Controls.Lookup;
		/** Lookup */
		v4_Lookup1: DevKit.Controls.Lookup;
		/** Memo */
		v4_Memo: DevKit.Controls.Memo;
		/** Money */
		v4_Money: DevKit.Controls.Money;
		/** MultiOptionSet */
		v4_MultiOptionSet: DevKit.Controls.MultiOptionSet;
		/** OptionSet */
		v4_OptionSet: DevKit.Controls.OptionSet;
		/** String */
		v4_String: DevKit.Controls.String;
		/** String */
		v4_String1: DevKit.Controls.String;
		/** String */
		v4_String2: DevKit.Controls.String;
		WebResource_DevKitV4: DevKit.Controls.WebResource;
		Tab: ITabs;
	}

	/**
	 * Header controls interface
	 * Contains controls displayed in the form header
	 */
	export interface IHeader extends DevKit.Controls.IHeader {
		/** Integer */
		v4_Integer: DevKit.Controls.Integer;
		/** Integer */
		v4_Integer1: DevKit.Controls.Integer;
		/** OptionSet */
		v4_OptionSet: DevKit.Controls.OptionSet;
		/** String */
		v4_String: DevKit.Controls.String;
	}

	export interface ITAB_1TabSections {
		/** TAB_1_SECTION_1 */
		TAB_1_SECTION_1: DevKit.Controls.Section;
		/** TAB_1_SECTION_2 */
		TAB_1_SECTION_2: DevKit.Controls.Section;
		/** TAB_1_SECTION_3 */
		TAB_1_SECTION_3: DevKit.Controls.Section;
		/** TAB_1_SECTION_4 */
		TAB_1_SECTION_4: DevKit.Controls.Section;
	}

	export interface ITAB_2TabSections {
		/** TAB_2_SECTION_1 */
		TAB_2_SECTION_1: DevKit.Controls.Section;
		/** TAB_2_SECTION_2 */
		TAB_2_SECTION_2: DevKit.Controls.Section;
	}

	/** TAB_1 */
	export interface ITAB_1Tab extends DevKit.Controls.ITab {
		Section: ITAB_1TabSections;
	}

	/** TAB_2 */
	export interface ITAB_2Tab extends DevKit.Controls.ITab {
		Section: ITAB_2TabSections;
	}

	export interface ITabs {
		/** TAB_1 */
		TAB_1: ITAB_1Tab;
		/** TAB_2 */
		TAB_2: ITAB_2Tab;
	}

	/**
	 * Grid controls interface
	 * Contains all subgrid controls on the form
	 */
	export interface IGrid {
		/** CONTACTS */
		Contacts: DevKit.Controls.Grid;
	}

	/**
	 * Navigation interface
	 * Contains navigation items
	 */
	export interface INavigation {
		/** Invitations */
		nav_adx_invitation_assigntoaccount: DevKit.Controls.NavigationItem;
		/** Managed Accounts */
		nav_msa_account_managingpartner: DevKit.Controls.NavigationItem;
		/** Managed Contacts */
		nav_msa_contact_managingpartner: DevKit.Controls.NavigationItem;
		/** Activities */
		navActivities: DevKit.Controls.NavigationItem;
		/** Addresses */
		navAddresses: DevKit.Controls.NavigationItem;
		/** Workflows */
		navAsyncOperations: DevKit.Controls.NavigationItem;
		/** Audit History */
		navAudit: DevKit.Controls.NavigationItem;
		/** Campaigns */
		navCampaignsInSFA: DevKit.Controls.NavigationItem;
		/** Connections */
		navConnections: DevKit.Controls.NavigationItem;
		/** Contacts2 */
		navContacts: DevKit.Controls.NavigationItem;
		/** Dialog Sessions */
		navProcessSessions: DevKit.Controls.NavigationItem;
		/** CustomerRelationship */
		navRelationships: DevKit.Controls.NavigationItem;
		/** Social Profiles */
		navSocialprofiles: DevKit.Controls.NavigationItem;
		/** Accounts */
		navSubAccts: DevKit.Controls.NavigationItem;
	}

	/**
	 * QuickForm interface
	 * Contains quick view form controls
	 */
	export interface IQuickForm {
		ContactQuickForm: DevKit.Controls.IQuickView & {
			Body: IContactQuickFormBody;
		};
	}

	/**
	 * ContactQuickForm quick view control body interface
	 */
	export interface IContactQuickFormBody {
		/** Type the primary email address for the contact. */
		EMailAddress1: DevKit.Controls.QuickView;
		/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		FirstName: DevKit.Controls.QuickView;
		/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
		LastName: DevKit.Controls.QuickView;
		/** Type the mobile phone number for the contact. */
		MobilePhone: DevKit.Controls.QuickView;
		/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
		ParentCustomerId: DevKit.Controls.QuickView;
	}

	/**
	 * Process interface
	 * Contains business process flow definitions
	 */
	export interface IProcess extends DevKit.Controls.IProcess {
		AccountBPF: IAccountBPF;
	}

	/**
	 * AccountBPF Business Process Flow fields interface
	 */
	export interface IAccountBPF {
		/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
		IndustryCode: DevKit.Controls.OptionSet;
		/** Type the company or business name. */
		Name: DevKit.Controls.String;
		/** Type the company or business name. */
		Name_1: DevKit.Controls.String;
		/** Choose the primary contact for the account to provide quick access to contact details. */
		PrimaryContactId: DevKit.Controls.Lookup;
		/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
		Revenue: DevKit.Controls.Money;
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
	 * Account Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Account Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'IFRAME_PhuocLe',
					'OwnerId',
					'OwnerId1',
					'OwnerId2',
					'OwnerId3',
					'v4_Boolean',
					'v4_DateOnly',
					'v4_DateTime',
					'v4_Decimal',
					'v4_Double',
					'v4_Integer',
					'v4_Lookup',
					'v4_Lookup1',
					'v4_Memo',
					'v4_Money',
					'v4_MultiOptionSet',
					'v4_OptionSet',
					'v4_String',
					'v4_String1',
					'v4_String2',
					'WebResource_DevKitV4'
				],
				header: [
					'v4_Integer',
					'v4_Integer1',
					'v4_OptionSet',
					'v4_String'
				],
				tab: [
					'TAB_1___TAB_1_SECTION_1',
					'TAB_1___TAB_1_SECTION_2',
					'TAB_1___TAB_1_SECTION_3',
					'TAB_1___TAB_1_SECTION_4',
					'TAB_2___TAB_2_SECTION_1',
					'TAB_2___TAB_2_SECTION_2'
				],
				grid: [
					'Contacts'
				],
				navigation: [
					'nav_adx_invitation_assigntoaccount',
					'nav_msa_account_managingpartner',
					'nav_msa_contact_managingpartner',
					'navActivities',
					'navAddresses',
					'navAsyncOperations',
					'navAudit',
					'navCampaignsInSFA',
					'navConnections',
					'navContacts',
					'navProcessSessions',
					'navRelationships',
					'navSocialprofiles',
					'navSubAccts'
				],
				quick: [
					'ContactQuickForm___EMailAddress1',
					'ContactQuickForm___FirstName',
					'ContactQuickForm___LastName',
					'ContactQuickForm___MobilePhone',
					'ContactQuickForm___ParentCustomerId'
				],
				bpf: [
					'AccountBPF___IndustryCode',
					'AccountBPF___Name',
					'AccountBPF___Name_1',
					'AccountBPF___PrimaryContactId',
					'AccountBPF___Revenue'
				],
				dialog: [
					
				]
			});
		}
	}
}

export namespace FormAccount_for_Interactive_experience {

	/**
	 * Body controls interface
	 * Contains all controls on the form body
	 */
	export interface IBody {
		/** Shows the complete primary address. */
		Address1_Composite: DevKit.Controls.Memo;
		/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
		Address1_FreightTermsCode: DevKit.Controls.OptionSet;
		/** Select a shipping method for deliveries sent to this address. */
		Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
		/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
		CreditLimit: DevKit.Controls.Money;
		/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
		CreditOnHold: DevKit.Controls.Boolean;
		/** Type additional information to describe the account, such as an excerpt from the company's website. */
		Description: DevKit.Controls.Memo;
		/** Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email. */
		DoNotBulkEMail: DevKit.Controls.Boolean;
		/** Select whether the account allows direct email sent from Microsoft Dynamics 365. */
		DoNotEMail: DevKit.Controls.Boolean;
		/** Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns. */
		DoNotFax: DevKit.Controls.Boolean;
		/** Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns. */
		DoNotPhone: DevKit.Controls.Boolean;
		/** Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns. */
		DoNotPostalMail: DevKit.Controls.Boolean;
		/** Type the fax number for the account. */
		Fax: DevKit.Controls.String;
		/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account. */
		FollowEmail: DevKit.Controls.Boolean;
		/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
		IndustryCode: DevKit.Controls.OptionSet;
		/** Type the company or business name. */
		Name: DevKit.Controls.String;
		notescontrol: DevKit.Controls.Note;
		/** Select the account's ownership structure, such as public or private. */
		OwnershipCode: DevKit.Controls.OptionSet;
		/** Choose the parent account associated with this account to show parent and child businesses in reporting and analytics. */
		ParentAccountId: DevKit.Controls.Lookup;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: DevKit.Controls.OptionSet;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: DevKit.Controls.OptionSet;
		/** Choose the primary contact for the account to provide quick access to contact details. */
		PrimaryContactId: DevKit.Controls.Lookup;
		/** Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. */
		SIC: DevKit.Controls.String;
		/** Type the main phone number for this account. */
		Telephone1: DevKit.Controls.String;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.Controls.Lookup;
		/** Type the account's website URL to get quick details about the company profile. */
		WebSiteURL: DevKit.Controls.String;
		Tab: ITabs;
	}

	/**
	 * Header controls interface
	 * Contains controls displayed in the form header
	 */
	export interface IHeader extends DevKit.Controls.IHeader {
		/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
		NumberOfEmployees: DevKit.Controls.Integer;
		/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId: DevKit.Controls.Lookup;
		/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
		Revenue: DevKit.Controls.Money;
	}

	export interface IDETAILS_TABTabSections {
		/** BILLING */
		BILLING: DevKit.Controls.Section;
		/** COMPANY PROFILE */
		COMPANY_PROFILE: DevKit.Controls.Section;
		/** CONTACT PREFERENCES */
		CONTACT_PREFERENCES: DevKit.Controls.Section;
		/** DESCRIPTION */
		DETAILS_TAB_section_6: DevKit.Controls.Section;
		/** SHIPPING */
		SHIPPING: DevKit.Controls.Section;
	}

	export interface ISUMMARY_TABTabSections {
		/** ACCOUNT INFORMATION */
		ACCOUNT_INFORMATION: DevKit.Controls.Section;
		/** TIMELINE */
		Timeline: DevKit.Controls.Section;
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
		/** CONTACTS */
		Contacts: DevKit.Controls.Grid;
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
		/** Dialog Sessions */
		navProcessSessions: DevKit.Controls.NavigationItem;
		/** CustomerRelationship */
		navRelationships: DevKit.Controls.NavigationItem;
		/** Accounts */
		navSubAccts: DevKit.Controls.NavigationItem;
	}

	/**
	 * QuickForm interface
	 * Contains quick view form controls
	 */
	export interface IQuickForm {
		contactquickform: DevKit.Controls.IQuickView & {
			Body: IcontactquickformBody;
		};
	}

	/**
	 * contactquickform quick view control body interface
	 */
	export interface IcontactquickformBody {
		/** Type the primary email address for the contact. */
		EMailAddress1: DevKit.Controls.QuickView;
		/** Type the main phone number for this contact. */
		Telephone1: DevKit.Controls.QuickView;
	}

	/**
	 * Process interface
	 * Contains business process flow definitions
	 */
	export interface IProcess extends DevKit.Controls.IProcess {
		AccountBPF: IAccountBPF;
	}

	/**
	 * AccountBPF Business Process Flow fields interface
	 */
	export interface IAccountBPF {
		/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
		IndustryCode: DevKit.Controls.OptionSet;
		/** Type the company or business name. */
		Name: DevKit.Controls.String;
		/** Type the company or business name. */
		Name_1: DevKit.Controls.String;
		/** Choose the primary contact for the account to provide quick access to contact details. */
		PrimaryContactId: DevKit.Controls.Lookup;
		/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
		Revenue: DevKit.Controls.Money;
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
	 * Account Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Account Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'Address1_Composite',
					'Address1_FreightTermsCode',
					'Address1_ShippingMethodCode',
					'CreditLimit',
					'CreditOnHold',
					'Description',
					'DoNotBulkEMail',
					'DoNotEMail',
					'DoNotFax',
					'DoNotPhone',
					'DoNotPostalMail',
					'Fax',
					'FollowEmail',
					'IndustryCode',
					'Name',
					'notescontrol',
					'OwnershipCode',
					'ParentAccountId',
					'PaymentTermsCode',
					'PreferredContactMethodCode',
					'PrimaryContactId',
					'SIC',
					'Telephone1',
					'TransactionCurrencyId',
					'WebSiteURL'
				],
				header: [
					'NumberOfEmployees',
					'OwnerId',
					'Revenue'
				],
				tab: [
					'DETAILS_TAB___BILLING',
					'DETAILS_TAB___COMPANY_PROFILE',
					'DETAILS_TAB___CONTACT_PREFERENCES',
					'DETAILS_TAB___DETAILS_TAB_section_6',
					'DETAILS_TAB___SHIPPING',
					'SUMMARY_TAB___ACCOUNT_INFORMATION',
					'SUMMARY_TAB___Timeline'
				],
				grid: [
					'Contacts'
				],
				navigation: [
					'navActivities',
					'navAddresses',
					'navAsyncOperations',
					'navProcessSessions',
					'navRelationships',
					'navSubAccts'
				],
				quick: [
					'contactquickform___EMailAddress1',
					'contactquickform___Telephone1'
				],
				bpf: [
					'AccountBPF___IndustryCode',
					'AccountBPF___Name',
					'AccountBPF___Name_1',
					'AccountBPF___PrimaryContactId',
					'AccountBPF___Revenue'
				],
				dialog: [
					
				]
			});
		}
	}
}

export namespace FormAccount_Information {

	/**
	 * Body controls interface
	 * Contains all controls on the form body
	 */
	export interface IBody {
		/** Select a category to indicate whether the customer account is standard or preferred. */
		AccountCategoryCode: DevKit.Controls.OptionSet;
		/** Type an ID number or code for the account to quickly search and identify the account in system views. */
		AccountNumber: DevKit.Controls.String;
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
		/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
		CreditLimit: DevKit.Controls.Money;
		/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
		CreditOnHold: DevKit.Controls.Boolean;
		/** Select the category that best describes the relationship between the account and your organization. */
		CustomerTypeCode: DevKit.Controls.OptionSet;
		/** Type additional information to describe the account, such as an excerpt from the company's website. */
		Description: DevKit.Controls.Memo;
		/** Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email. */
		DoNotBulkEMail: DevKit.Controls.Boolean;
		/** Select whether the account allows direct email sent from Microsoft Dynamics 365. */
		DoNotEMail: DevKit.Controls.Boolean;
		/** Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns. */
		DoNotFax: DevKit.Controls.Boolean;
		/** Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns. */
		DoNotPhone: DevKit.Controls.Boolean;
		/** Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns. */
		DoNotPostalMail: DevKit.Controls.Boolean;
		/** Type the primary email address for the account. */
		EMailAddress1: DevKit.Controls.String;
		/** Type the fax number for the account. */
		Fax: DevKit.Controls.String;
		/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account. */
		FollowEmail: DevKit.Controls.Boolean;
		/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
		IndustryCode: DevKit.Controls.OptionSet;
		/** Type the company or business name. */
		Name: DevKit.Controls.String;
		notescontrol: DevKit.Controls.Note;
		/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
		NumberOfEmployees: DevKit.Controls.Integer;
		/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId: DevKit.Controls.Lookup;
		/** Select the account's ownership structure, such as public or private. */
		OwnershipCode: DevKit.Controls.OptionSet;
		/** Choose the parent account associated with this account to show parent and child businesses in reporting and analytics. */
		ParentAccountId: DevKit.Controls.Lookup;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: DevKit.Controls.OptionSet;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: DevKit.Controls.OptionSet;
		/** Choose the primary contact for the account to provide quick access to contact details. */
		PrimaryContactId: DevKit.Controls.Lookup;
		/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
		Revenue: DevKit.Controls.Money;
		/** Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. */
		SIC: DevKit.Controls.String;
		/** Type the main phone number for this account. */
		Telephone1: DevKit.Controls.String;
		/** Type a second phone number for this account. */
		Telephone2: DevKit.Controls.String;
		/** Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
		TickerSymbol: DevKit.Controls.String;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.Controls.Lookup;
		/** Type the account's website URL to get quick details about the company profile. */
		WebSiteURL: DevKit.Controls.String;
		Tab: ITabs;
	}

	/**
	 * Header controls interface
	 * Contains controls displayed in the form header
	 */
	export interface IHeader extends DevKit.Controls.IHeader {
		/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
		CreditLimit: DevKit.Controls.Money;
		/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId: DevKit.Controls.Lookup;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: DevKit.Controls.OptionSet;
		/** Choose the primary contact for the account to provide quick access to contact details. */
		PrimaryContactId: DevKit.Controls.Lookup;
		/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
		Revenue: DevKit.Controls.Money;
	}

	export interface IadministrationTabSections {
		/** Contact Methods */
		contact_methods: DevKit.Controls.Section;
		/** Internal Information */
		internal_information: DevKit.Controls.Section;
	}

	export interface IcontactsTabSections {
		/** Contacts */
		contacts: DevKit.Controls.Section;
	}

	export interface IdetailsTabSections {
		/** Billing Information */
		billing_information: DevKit.Controls.Section;
		/** Description */
		description_2: DevKit.Controls.Section;
		/** Professional Information */
		professional_information: DevKit.Controls.Section;
	}

	export interface IgeneralTabSections {
		/** Account Information */
		account_information: DevKit.Controls.Section;
		/** Address */
		address: DevKit.Controls.Section;
		/** Description */
		description: DevKit.Controls.Section;
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

	/** Contacts */
	export interface IcontactsTab extends DevKit.Controls.ITab {
		Section: IcontactsTabSections;
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
		/** Contacts */
		contacts: IcontactsTab;
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
		/** Activities */
		accountactivitiesgrid: DevKit.Controls.Grid;
		/** Contacts */
		accountContactsGrid: DevKit.Controls.Grid;
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
		navSubAct: DevKit.Controls.NavigationItem;
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
		AccountBPF: IAccountBPF;
	}

	/**
	 * AccountBPF Business Process Flow fields interface
	 */
	export interface IAccountBPF {
		/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
		IndustryCode: DevKit.Controls.OptionSet;
		/** Type the company or business name. */
		Name: DevKit.Controls.String;
		/** Type the company or business name. */
		Name_1: DevKit.Controls.String;
		/** Choose the primary contact for the account to provide quick access to contact details. */
		PrimaryContactId: DevKit.Controls.Lookup;
		/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
		Revenue: DevKit.Controls.Money;
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
	 * Account Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Account Form instance
		 * @param executionContext The execution context from form event
		 * @param defaultWebResourceName Optional default web resource name
		 */
		constructor(executionContext: any, defaultWebResourceName?: string) {
			super(executionContext, defaultWebResourceName, {
				body: [
					'AccountCategoryCode',
					'AccountNumber',
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
					'CreditLimit',
					'CreditOnHold',
					'CustomerTypeCode',
					'Description',
					'DoNotBulkEMail',
					'DoNotEMail',
					'DoNotFax',
					'DoNotPhone',
					'DoNotPostalMail',
					'EMailAddress1',
					'Fax',
					'FollowEmail',
					'IndustryCode',
					'Name',
					'notescontrol',
					'NumberOfEmployees',
					'OwnerId',
					'OwnershipCode',
					'ParentAccountId',
					'PaymentTermsCode',
					'PreferredContactMethodCode',
					'PrimaryContactId',
					'Revenue',
					'SIC',
					'Telephone1',
					'Telephone2',
					'TickerSymbol',
					'TransactionCurrencyId',
					'WebSiteURL'
				],
				header: [
					'CreditLimit',
					'OwnerId',
					'PreferredContactMethodCode',
					'PrimaryContactId',
					'Revenue'
				],
				tab: [
					'administration___contact_methods',
					'administration___internal_information',
					'contacts___contacts',
					'details___billing_information',
					'details___description_2',
					'details___professional_information',
					'general___account_information',
					'general___address',
					'general___description',
					'general___shipping_information',
					'notes_and_activities___activities',
					'notes_and_activities___notes'
				],
				grid: [
					'accountactivitiesgrid',
					'accountContactsGrid'
				],
				navigation: [
					'navActivities',
					'navActivityHistory',
					'navAddresses',
					'navRelationships',
					'navSubAct'
				],
				quick: [
					
				],
				bpf: [
					'AccountBPF___IndustryCode',
					'AccountBPF___Name',
					'AccountBPF___Name_1',
					'AccountBPF___PrimaryContactId',
					'AccountBPF___Revenue'
				],
				dialog: [
					
				]
			});
		}
	}
}

export namespace FormAccount_Quick_Create {

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
		name: DevKit.Controls.String;
		numberofemployees: DevKit.Controls.Integer;
		primarycontactid: DevKit.Controls.Lookup;
		revenue: DevKit.Controls.Money;
		telephone1: DevKit.Controls.String;
		/** Form Tabs */
		Tab: ITabs;
	}

	export interface IHeader extends DevKit.Controls.IHeader {
	}

	export interface Itab_1TabSections {
		/** Details */
		tab_1_column_1_section_1: DevKit.Controls.Section;
		/** Description */
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
	 * Account Form class
	 * Provides typed access to all form controls
	 */
	export class Form extends FormBase<IBody, IHeader, IGrid, INavigation, IQuickForm, IProcess, IDialog> {
		/**
		 * Creates an Account Form instance
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
					'Name',
					'NumberOfEmployees',
					'PrimaryContactId',
					'Revenue',
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


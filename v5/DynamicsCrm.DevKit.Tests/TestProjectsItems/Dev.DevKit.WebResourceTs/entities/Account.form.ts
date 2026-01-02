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

	export interface IBody {
		ActionCards: DevKit.Controls.String;
		/** Address 1 */
		Address1_Composite: DevKit.Controls.Memo;
		/** Address 1: Freight Terms */
		Address1_FreightTermsCode: DevKit.Controls.OptionSet;
		/** Address 1: Shipping Method */
		Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
		/** Credit Limit */
		CreditLimit: DevKit.Controls.Money;
		/** Credit Hold */
		CreditOnHold: DevKit.Controls.Boolean;
		/** Description */
		Description: DevKit.Controls.Memo;
		/** Do not allow Bulk Emails */
		DoNotBulkEMail: DevKit.Controls.Boolean;
		/** Do not allow Emails */
		DoNotEMail: DevKit.Controls.Boolean;
		/** Do not allow Faxes */
		DoNotFax: DevKit.Controls.Boolean;
		/** Do not allow Phone Calls */
		DoNotPhone: DevKit.Controls.Boolean;
		/** Do not allow Mails */
		DoNotPostalMail: DevKit.Controls.Boolean;
		/** Fax */
		Fax: DevKit.Controls.String;
		/** Follow Email Activity */
		FollowEmail: DevKit.Controls.Boolean;
		/** Industry */
		IndustryCode: DevKit.Controls.OptionSet;
		mapcontrol: DevKit.Controls.String;
		/** Account Name */
		Name: DevKit.Controls.String;
		notescontrol: DevKit.Controls.String;
		/** Ownership */
		OwnershipCode: DevKit.Controls.OptionSet;
		/** Parent Account */
		ParentAccountId: DevKit.Controls.Lookup;
		/** Payment Terms */
		PaymentTermsCode: DevKit.Controls.OptionSet;
		/** Preferred Method of Contact */
		PreferredContactMethodCode: DevKit.Controls.OptionSet;
		/** Primary Contact */
		PrimaryContactId: DevKit.Controls.Lookup;
		/** SIC Code */
		SIC: DevKit.Controls.String;
		/** Main Phone */
		Telephone1: DevKit.Controls.String;
		/** Ticker Symbol */
		TickerSymbol: DevKit.Controls.String;
		/** Currency */
		TransactionCurrencyId: DevKit.Controls.Lookup;
		/** Website */
		WebSiteURL: DevKit.Controls.String;
		Tab: ITabs;
	}

	export interface IHeader {
		NumberOfEmployees: DevKit.Controls.Integer;
		OwnerId: DevKit.Controls.Lookup;
		Revenue: DevKit.Controls.Money;
	}

	export interface IDETAILS_TABTabSections {
		BILLING: DevKit.Controls.Section;
		ChildAccounts: DevKit.Controls.Section;
		COMPANY_PROFILE: DevKit.Controls.Section;
		CONTACT_PREFERENCES: DevKit.Controls.Section;
		DETAILS_TAB_section_6: DevKit.Controls.Section;
		SHIPPING: DevKit.Controls.Section;
	}

	export interface ISUMMARY_TABTabSections {
		ACCOUNT_INFORMATION: DevKit.Controls.Section;
		ADDRESS: DevKit.Controls.Section;
		MapSection: DevKit.Controls.Section;
		SOCIAL_PANE_TAB: DevKit.Controls.Section;
		Summary_section_6: DevKit.Controls.Section;
		SUMMARY_TAB_section_6: DevKit.Controls.Section;
	}

	export interface IDETAILS_TABTab extends DevKit.Controls.ITab {
		Section: IDETAILS_TABTabSections;
	}

	export interface ISUMMARY_TABTab extends DevKit.Controls.ITab {
		Section: ISUMMARY_TABTabSections;
	}

	export interface ITabs {
		DETAILS_TAB: IDETAILS_TABTab;
		SUMMARY_TAB: ISUMMARY_TABTab;
	}

	export interface IGrid {
		ChildAccounts: DevKit.Controls.Grid;
		Contacts: DevKit.Controls.Grid;
	}

	export interface INavigation {
		navActivities: DevKit.Controls.NavigationItem;
		navAddresses: DevKit.Controls.NavigationItem;
		navAsyncOperations: DevKit.Controls.NavigationItem;
		navCampaignsInSFA: DevKit.Controls.NavigationItem;
		navProcessSessions: DevKit.Controls.NavigationItem;
		navRelationships: DevKit.Controls.NavigationItem;
		navSubAccts: DevKit.Controls.NavigationItem;
	}

	export interface IQuickForm {
		contactquickform: DevKit.Controls.IQuickView & {
			Body: IcontactquickformBody;
		};
	}

	export interface IcontactquickformBody {
		EMailAddress1: DevKit.Controls.QuickView;
		Telephone1: DevKit.Controls.QuickView;
	}

	export interface IProcess extends DevKit.Controls.IProcess {
		AccountBPF: IAccountBPF;
	}

	export interface IAccountBPF {
		IndustryCode: DevKit.Controls.OptionSet;
		Name: DevKit.Controls.String;
		Name_1: DevKit.Controls.String;
		PrimaryContactId: DevKit.Controls.Lookup;
		Revenue: DevKit.Controls.Money;
	}

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

	export interface IBody {
		IFRAME_PhuocLe: DevKit.Controls.IFrame;
		OwnerId: DevKit.Controls.Lookup;
		/** Owner */
		OwnerId1: DevKit.Controls.Lookup;
		/** Owner */
		OwnerId2: DevKit.Controls.Lookup;
		/** Owner */
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

	export interface IHeader {
		v4_Integer: DevKit.Controls.Integer;
		v4_Integer1: DevKit.Controls.Integer;
		v4_OptionSet: DevKit.Controls.OptionSet;
		v4_String: DevKit.Controls.String;
	}

	export interface ITAB_1TabSections {
		TAB_1_SECTION_1: DevKit.Controls.Section;
		TAB_1_SECTION_2: DevKit.Controls.Section;
		TAB_1_SECTION_3: DevKit.Controls.Section;
		TAB_1_SECTION_4: DevKit.Controls.Section;
	}

	export interface ITAB_2TabSections {
		TAB_2_SECTION_1: DevKit.Controls.Section;
		TAB_2_SECTION_2: DevKit.Controls.Section;
	}

	export interface ITAB_1Tab extends DevKit.Controls.ITab {
		Section: ITAB_1TabSections;
	}

	export interface ITAB_2Tab extends DevKit.Controls.ITab {
		Section: ITAB_2TabSections;
	}

	export interface ITabs {
		TAB_1: ITAB_1Tab;
		TAB_2: ITAB_2Tab;
	}

	export interface IGrid {
		Contacts: DevKit.Controls.Grid;
	}

	export interface INavigation {
		nav_adx_invitation_assigntoaccount: DevKit.Controls.NavigationItem;
		nav_msa_account_managingpartner: DevKit.Controls.NavigationItem;
		nav_msa_contact_managingpartner: DevKit.Controls.NavigationItem;
		navActivities: DevKit.Controls.NavigationItem;
		navAddresses: DevKit.Controls.NavigationItem;
		navAsyncOperations: DevKit.Controls.NavigationItem;
		navAudit: DevKit.Controls.NavigationItem;
		navCampaignsInSFA: DevKit.Controls.NavigationItem;
		navConnections: DevKit.Controls.NavigationItem;
		navContacts: DevKit.Controls.NavigationItem;
		navProcessSessions: DevKit.Controls.NavigationItem;
		navRelationships: DevKit.Controls.NavigationItem;
		navSocialprofiles: DevKit.Controls.NavigationItem;
		navSubAccts: DevKit.Controls.NavigationItem;
	}

	export interface IQuickForm {
		ContactQuickForm: DevKit.Controls.IQuickView & {
			Body: IContactQuickFormBody;
		};
	}

	export interface IContactQuickFormBody {
		EMailAddress1: DevKit.Controls.QuickView;
		FirstName: DevKit.Controls.QuickView;
		LastName: DevKit.Controls.QuickView;
		MobilePhone: DevKit.Controls.QuickView;
		ParentCustomerId: DevKit.Controls.QuickView;
	}

	export interface IProcess extends DevKit.Controls.IProcess {
		AccountBPF: IAccountBPF;
	}

	export interface IAccountBPF {
		IndustryCode: DevKit.Controls.OptionSet;
		Name: DevKit.Controls.String;
		Name_1: DevKit.Controls.String;
		PrimaryContactId: DevKit.Controls.Lookup;
		Revenue: DevKit.Controls.Money;
	}

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

	export interface IBody {
		/** Address 1 */
		Address1_Composite: DevKit.Controls.Memo;
		/** Address 1: Freight Terms */
		Address1_FreightTermsCode: DevKit.Controls.OptionSet;
		/** Address 1: Shipping Method */
		Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
		/** Credit Limit */
		CreditLimit: DevKit.Controls.Money;
		/** Credit Hold */
		CreditOnHold: DevKit.Controls.Boolean;
		/** Description */
		Description: DevKit.Controls.Memo;
		/** Do not allow Bulk Emails */
		DoNotBulkEMail: DevKit.Controls.Boolean;
		/** Do not allow Emails */
		DoNotEMail: DevKit.Controls.Boolean;
		/** Do not allow Faxes */
		DoNotFax: DevKit.Controls.Boolean;
		/** Do not allow Phone Calls */
		DoNotPhone: DevKit.Controls.Boolean;
		/** Do not allow Mails */
		DoNotPostalMail: DevKit.Controls.Boolean;
		/** Fax */
		Fax: DevKit.Controls.String;
		/** Follow Email Activity */
		FollowEmail: DevKit.Controls.Boolean;
		/** Industry */
		IndustryCode: DevKit.Controls.OptionSet;
		/** Account Name */
		Name: DevKit.Controls.String;
		notescontrol: DevKit.Controls.String;
		/** Ownership */
		OwnershipCode: DevKit.Controls.OptionSet;
		/** Parent Account */
		ParentAccountId: DevKit.Controls.Lookup;
		/** Payment Terms */
		PaymentTermsCode: DevKit.Controls.OptionSet;
		/** Preferred Method of Contact */
		PreferredContactMethodCode: DevKit.Controls.OptionSet;
		/** Primary Contact */
		PrimaryContactId: DevKit.Controls.Lookup;
		/** SIC Code */
		SIC: DevKit.Controls.String;
		/** Main Phone */
		Telephone1: DevKit.Controls.String;
		/** Currency */
		TransactionCurrencyId: DevKit.Controls.Lookup;
		/** Website */
		WebSiteURL: DevKit.Controls.String;
		Tab: ITabs;
	}

	export interface IHeader {
		NumberOfEmployees: DevKit.Controls.Integer;
		OwnerId: DevKit.Controls.Lookup;
		Revenue: DevKit.Controls.Money;
	}

	export interface IDETAILS_TABTabSections {
		BILLING: DevKit.Controls.Section;
		COMPANY_PROFILE: DevKit.Controls.Section;
		CONTACT_PREFERENCES: DevKit.Controls.Section;
		DETAILS_TAB_section_6: DevKit.Controls.Section;
		SHIPPING: DevKit.Controls.Section;
	}

	export interface ISUMMARY_TABTabSections {
		ACCOUNT_INFORMATION: DevKit.Controls.Section;
		Timeline: DevKit.Controls.Section;
	}

	export interface IDETAILS_TABTab extends DevKit.Controls.ITab {
		Section: IDETAILS_TABTabSections;
	}

	export interface ISUMMARY_TABTab extends DevKit.Controls.ITab {
		Section: ISUMMARY_TABTabSections;
	}

	export interface ITabs {
		DETAILS_TAB: IDETAILS_TABTab;
		SUMMARY_TAB: ISUMMARY_TABTab;
	}

	export interface IGrid {
		Contacts: DevKit.Controls.Grid;
	}

	export interface INavigation {
		navActivities: DevKit.Controls.NavigationItem;
		navAddresses: DevKit.Controls.NavigationItem;
		navAsyncOperations: DevKit.Controls.NavigationItem;
		navProcessSessions: DevKit.Controls.NavigationItem;
		navRelationships: DevKit.Controls.NavigationItem;
		navSubAccts: DevKit.Controls.NavigationItem;
	}

	export interface IQuickForm {
		contactquickform: DevKit.Controls.IQuickView & {
			Body: IcontactquickformBody;
		};
	}

	export interface IcontactquickformBody {
		EMailAddress1: DevKit.Controls.QuickView;
		Telephone1: DevKit.Controls.QuickView;
	}

	export interface IProcess extends DevKit.Controls.IProcess {
		AccountBPF: IAccountBPF;
	}

	export interface IAccountBPF {
		IndustryCode: DevKit.Controls.OptionSet;
		Name: DevKit.Controls.String;
		Name_1: DevKit.Controls.String;
		PrimaryContactId: DevKit.Controls.Lookup;
		Revenue: DevKit.Controls.Money;
	}

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

	export interface IBody {
		/** Category */
		AccountCategoryCode: DevKit.Controls.OptionSet;
		/** Account Number */
		AccountNumber: DevKit.Controls.String;
		/** Address 1: Address Type */
		Address1_AddressTypeCode: DevKit.Controls.OptionSet;
		/** Address 1: City */
		Address1_City: DevKit.Controls.String;
		/** Address 1: Country/Region */
		Address1_Country: DevKit.Controls.String;
		/** Address 1: Freight Terms */
		Address1_FreightTermsCode: DevKit.Controls.OptionSet;
		/** Address 1: Street 1 */
		Address1_Line1: DevKit.Controls.String;
		/** Address 1: Street 2 */
		Address1_Line2: DevKit.Controls.String;
		/** Address 1: Street 3 */
		Address1_Line3: DevKit.Controls.String;
		/** Address 1: Name */
		Address1_Name: DevKit.Controls.String;
		/** Address 1: ZIP/Postal Code */
		Address1_PostalCode: DevKit.Controls.String;
		/** Address 1: Shipping Method */
		Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
		/** Address 1: State/Province */
		Address1_StateOrProvince: DevKit.Controls.String;
		/** Address Phone */
		Address1_Telephone1: DevKit.Controls.String;
		/** Credit Limit */
		CreditLimit: DevKit.Controls.Money;
		/** Credit Hold */
		CreditOnHold: DevKit.Controls.Boolean;
		/** Relationship Type */
		CustomerTypeCode: DevKit.Controls.OptionSet;
		/** Description */
		Description: DevKit.Controls.Memo;
		/** Do not allow Bulk Emails */
		DoNotBulkEMail: DevKit.Controls.Boolean;
		/** Do not allow Emails */
		DoNotEMail: DevKit.Controls.Boolean;
		/** Do not allow Faxes */
		DoNotFax: DevKit.Controls.Boolean;
		/** Do not allow Phone Calls */
		DoNotPhone: DevKit.Controls.Boolean;
		/** Do not allow Mails */
		DoNotPostalMail: DevKit.Controls.Boolean;
		/** Email */
		EMailAddress1: DevKit.Controls.String;
		/** Fax */
		Fax: DevKit.Controls.String;
		/** Follow Email Activity */
		FollowEmail: DevKit.Controls.Boolean;
		/** Industry */
		IndustryCode: DevKit.Controls.OptionSet;
		/** Account Name */
		Name: DevKit.Controls.String;
		notescontrol: DevKit.Controls.String;
		/** Number of Employees */
		NumberOfEmployees: DevKit.Controls.Integer;
		/** Owner */
		OwnerId: DevKit.Controls.Lookup;
		/** Ownership */
		OwnershipCode: DevKit.Controls.OptionSet;
		/** Parent Account */
		ParentAccountId: DevKit.Controls.Lookup;
		/** Payment Terms */
		PaymentTermsCode: DevKit.Controls.OptionSet;
		/** Preferred Method of Contact */
		PreferredContactMethodCode: DevKit.Controls.OptionSet;
		/** Primary Contact */
		PrimaryContactId: DevKit.Controls.Lookup;
		/** Annual Revenue */
		Revenue: DevKit.Controls.Money;
		/** SIC Code */
		SIC: DevKit.Controls.String;
		/** Main Phone */
		Telephone1: DevKit.Controls.String;
		/** Other Phone */
		Telephone2: DevKit.Controls.String;
		/** Ticker Symbol */
		TickerSymbol: DevKit.Controls.String;
		/** Currency */
		TransactionCurrencyId: DevKit.Controls.Lookup;
		/** Website */
		WebSiteURL: DevKit.Controls.String;
		Tab: ITabs;
	}

	export interface IHeader {
		CreditLimit: DevKit.Controls.Money;
		OwnerId: DevKit.Controls.Lookup;
		PreferredContactMethodCode: DevKit.Controls.OptionSet;
		PrimaryContactId: DevKit.Controls.Lookup;
		Revenue: DevKit.Controls.Money;
	}

	export interface IadministrationTabSections {
		contact_methods: DevKit.Controls.Section;
		internal_information: DevKit.Controls.Section;
	}

	export interface IcontactsTabSections {
		contacts: DevKit.Controls.Section;
	}

	export interface IdetailsTabSections {
		billing_information: DevKit.Controls.Section;
		description_2: DevKit.Controls.Section;
		professional_information: DevKit.Controls.Section;
	}

	export interface IgeneralTabSections {
		account_information: DevKit.Controls.Section;
		address: DevKit.Controls.Section;
		description: DevKit.Controls.Section;
		shipping_information: DevKit.Controls.Section;
	}

	export interface Inotes_and_activitiesTabSections {
		activities: DevKit.Controls.Section;
		notes: DevKit.Controls.Section;
	}

	export interface IadministrationTab extends DevKit.Controls.ITab {
		Section: IadministrationTabSections;
	}

	export interface IcontactsTab extends DevKit.Controls.ITab {
		Section: IcontactsTabSections;
	}

	export interface IdetailsTab extends DevKit.Controls.ITab {
		Section: IdetailsTabSections;
	}

	export interface IgeneralTab extends DevKit.Controls.ITab {
		Section: IgeneralTabSections;
	}

	export interface Inotes_and_activitiesTab extends DevKit.Controls.ITab {
		Section: Inotes_and_activitiesTabSections;
	}

	export interface ITabs {
		administration: IadministrationTab;
		contacts: IcontactsTab;
		details: IdetailsTab;
		general: IgeneralTab;
		notes_and_activities: Inotes_and_activitiesTab;
	}

	export interface IGrid {
		accountactivitiesgrid: DevKit.Controls.Grid;
		accountContactsGrid: DevKit.Controls.Grid;
	}

	export interface INavigation {
		navActivities: DevKit.Controls.NavigationItem;
		navActivityHistory: DevKit.Controls.NavigationItem;
		navAddresses: DevKit.Controls.NavigationItem;
		navRelationships: DevKit.Controls.NavigationItem;
		navSubAct: DevKit.Controls.NavigationItem;
	}

	export interface IQuickForm {
	}

	export interface IProcess extends DevKit.Controls.IProcess {
		AccountBPF: IAccountBPF;
	}

	export interface IAccountBPF {
		IndustryCode: DevKit.Controls.OptionSet;
		Name: DevKit.Controls.String;
		Name_1: DevKit.Controls.String;
		PrimaryContactId: DevKit.Controls.Lookup;
		Revenue: DevKit.Controls.Money;
	}

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

	export interface IHeader {
	}

	export interface Itab_1TabSections {
		tab_1_column_1_section_1: DevKit.Controls.Section;
		tab_1_column_2_section_1: DevKit.Controls.Section;
		tab_1_column_3_section_1: DevKit.Controls.Section;
	}

	export interface Itab_1Tab extends DevKit.Controls.ITab {
		Section: Itab_1TabSections;
	}

	export interface ITabs {
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


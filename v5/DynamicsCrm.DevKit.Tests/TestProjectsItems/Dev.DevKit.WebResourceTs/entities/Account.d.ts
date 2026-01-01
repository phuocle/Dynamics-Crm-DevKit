//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAccount {
		interface Header extends DevKit.Controls.IHeader {
			/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
			NumberOfEmployees: DevKit.Controls.Integer;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
			Revenue: DevKit.Controls.Money;
		}
		interface tab_DETAILS_TAB_Sections {
			BILLING: DevKit.Controls.Section;
			ChildAccounts: DevKit.Controls.Section;
			COMPANY_PROFILE: DevKit.Controls.Section;
			CONTACT_PREFERENCES: DevKit.Controls.Section;
			DETAILS_TAB_section_6: DevKit.Controls.Section;
			SHIPPING: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			ACCOUNT_INFORMATION: DevKit.Controls.Section;
			ADDRESS: DevKit.Controls.Section;
			MapSection: DevKit.Controls.Section;
			SOCIAL_PANE_TAB: DevKit.Controls.Section;
			Summary_section_6: DevKit.Controls.Section;
			SUMMARY_TAB_section_6: DevKit.Controls.Section;
		}
		interface tab_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			DETAILS_TAB: tab_DETAILS_TAB;
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			ActionCards: DevKit.Controls.ActionCards;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Select a shipping method for deliveries sent to this address. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
			CreditLimit: DevKit.Controls.Money;
			/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Type additional information to describe the account, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
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
		}
		interface Navigation {
			navActivities: DevKit.Controls.NavigationItem;
			navAddresses: DevKit.Controls.NavigationItem;
			navAsyncOperations: DevKit.Controls.NavigationItem;
			navCampaignsInSFA: DevKit.Controls.NavigationItem;
			navProcessSessions: DevKit.Controls.NavigationItem;
			navRelationships: DevKit.Controls.NavigationItem;
			navSubAccts: DevKit.Controls.NavigationItem;
		}
		interface quickForm_contactquickform_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			Telephone1: DevKit.Controls.QuickView;
		}
		interface quickForm_contactquickform extends DevKit.Controls.IQuickView {
			Body: quickForm_contactquickform_Body;
		}
		interface QuickForm {
			contactquickform: quickForm_contactquickform;
		}
		interface ProcessAccountBPF {
			/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
			IndustryCode: DevKit.Controls.OptionSet;
			/** Type the company or business name. */
			Name: DevKit.Controls.String;
			/** Choose the primary contact for the account to provide quick access to contact details. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
			Revenue: DevKit.Controls.Money;
		}
		interface Process extends DevKit.Controls.IProcess {
			AccountBPF: ProcessAccountBPF;
		}
		interface Grid {
			ChildAccounts: DevKit.Controls.Grid;
			Contacts: DevKit.Controls.Grid;
		}
	}
	export class FormAccount extends DevKit.IForm {
		/**
		* Account [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Account */
		Body: DevKit.FormAccount.Body;
		/** The Header section of form Account */
		Header: DevKit.FormAccount.Header;
		/** The Navigation of form Account */
		Navigation: DevKit.FormAccount.Navigation;
		/** The QuickForm of form Account */
		QuickForm: DevKit.FormAccount.QuickForm;
		/** The Process of form Account */
		Process: DevKit.FormAccount.Process;
		/** The Grid of form Account */
		Grid: DevKit.FormAccount.Grid;
	}
	namespace FormAccount_DevKitV4 {
		interface Header extends DevKit.Controls.IHeader {
			v4_Integer: DevKit.Controls.Integer;
			v4_Integer1: DevKit.Controls.Integer;
			v4_OptionSet: DevKit.Controls.OptionSet;
			v4_String: DevKit.Controls.String;
		}
		interface tab_TAB_1_Sections {
			TAB_1_SECTION_1: DevKit.Controls.Section;
			TAB_1_SECTION_2: DevKit.Controls.Section;
			TAB_1_SECTION_3: DevKit.Controls.Section;
			TAB_1_SECTION_4: DevKit.Controls.Section;
		}
		interface tab_TAB_2_Sections {
			TAB_2_SECTION_1: DevKit.Controls.Section;
			TAB_2_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_TAB_1 extends DevKit.Controls.ITab {
			Section: tab_TAB_1_Sections;
		}
		interface tab_TAB_2 extends DevKit.Controls.ITab {
			Section: tab_TAB_2_Sections;
		}
		interface Tabs {
			TAB_1: tab_TAB_1;
			TAB_2: tab_TAB_2;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			IFRAME_PhuocLe: DevKit.Controls.IFrame;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId1: DevKit.Controls.Lookup;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId2: DevKit.Controls.Lookup;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId3: DevKit.Controls.Lookup;
			v4_Boolean: DevKit.Controls.Boolean;
			v4_DateOnly: DevKit.Controls.Date;
			v4_DateTime: DevKit.Controls.DateTime;
			v4_Decimal: DevKit.Controls.Decimal;
			v4_Double: DevKit.Controls.Double;
			v4_Integer: DevKit.Controls.Integer;
			v4_Lookup: DevKit.Controls.Lookup;
			v4_Lookup1: DevKit.Controls.Lookup;
			v4_Memo: DevKit.Controls.String;
			v4_Money: DevKit.Controls.Money;
			v4_MultiOptionSet: DevKit.Controls.MultiOptionSet;
			v4_OptionSet: DevKit.Controls.OptionSet;
			v4_String: DevKit.Controls.String;
			v4_String1: DevKit.Controls.String;
			v4_String2: DevKit.Controls.String;
			WebResource_DevKitV4: DevKit.Controls.WebResource;
		}
		interface Navigation {
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
		interface quickForm_ContactQuickForm_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			FirstName: DevKit.Controls.QuickView;
			LastName: DevKit.Controls.QuickView;
			MobilePhone: DevKit.Controls.QuickView;
			ParentCustomerId: DevKit.Controls.QuickView;
		}
		interface quickForm_ContactQuickForm extends DevKit.Controls.IQuickView {
			Body: quickForm_ContactQuickForm_Body;
		}
		interface QuickForm {
			ContactQuickForm: quickForm_ContactQuickForm;
		}
		interface ProcessAccountBPF {
			/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
			IndustryCode: DevKit.Controls.OptionSet;
			/** Type the company or business name. */
			Name: DevKit.Controls.String;
			/** Choose the primary contact for the account to provide quick access to contact details. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
			Revenue: DevKit.Controls.Money;
		}
		interface Process extends DevKit.Controls.IProcess {
			AccountBPF: ProcessAccountBPF;
		}
		interface Grid {
			Contacts: DevKit.Controls.Grid;
		}
	}
	export class FormAccount_DevKitV4 extends DevKit.IForm {
		/**
		* Account DevKitV4 [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Account_DevKitV4 */
		Body: DevKit.FormAccount_DevKitV4.Body;
		/** The Header section of form Account_DevKitV4 */
		Header: DevKit.FormAccount_DevKitV4.Header;
		/** The Navigation of form Account_DevKitV4 */
		Navigation: DevKit.FormAccount_DevKitV4.Navigation;
		/** The QuickForm of form Account_DevKitV4 */
		QuickForm: DevKit.FormAccount_DevKitV4.QuickForm;
		/** The Process of form Account_DevKitV4 */
		Process: DevKit.FormAccount_DevKitV4.Process;
		/** The Grid of form Account_DevKitV4 */
		Grid: DevKit.FormAccount_DevKitV4.Grid;
	}
	namespace FormAccount_for_Interactive_experience {
		interface Header extends DevKit.Controls.IHeader {
			/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
			NumberOfEmployees: DevKit.Controls.Integer;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
			Revenue: DevKit.Controls.Money;
		}
		interface tab_DETAILS_TAB_Sections {
			BILLING: DevKit.Controls.Section;
			COMPANY_PROFILE: DevKit.Controls.Section;
			CONTACT_PREFERENCES: DevKit.Controls.Section;
			DETAILS_TAB_section_6: DevKit.Controls.Section;
			SHIPPING: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			ACCOUNT_INFORMATION: DevKit.Controls.Section;
			ref_pan_SUMMARY_TAB_section_6: DevKit.Controls.Section;
			Timeline: DevKit.Controls.Section;
		}
		interface tab_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			DETAILS_TAB: tab_DETAILS_TAB;
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Select a shipping method for deliveries sent to this address. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
			CreditLimit: DevKit.Controls.Money;
			/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Type additional information to describe the account, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
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
		}
		interface Navigation {
			navActivities: DevKit.Controls.NavigationItem;
			navAddresses: DevKit.Controls.NavigationItem;
			navAsyncOperations: DevKit.Controls.NavigationItem;
			navProcessSessions: DevKit.Controls.NavigationItem;
			navRelationships: DevKit.Controls.NavigationItem;
			navSubAccts: DevKit.Controls.NavigationItem;
		}
		interface quickForm_contactquickform_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			Telephone1: DevKit.Controls.QuickView;
		}
		interface quickForm_contactquickform extends DevKit.Controls.IQuickView {
			Body: quickForm_contactquickform_Body;
		}
		interface QuickForm {
			contactquickform: quickForm_contactquickform;
		}
		interface ProcessAccountBPF {
			/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
			IndustryCode: DevKit.Controls.OptionSet;
			/** Type the company or business name. */
			Name: DevKit.Controls.String;
			/** Choose the primary contact for the account to provide quick access to contact details. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
			Revenue: DevKit.Controls.Money;
		}
		interface Process extends DevKit.Controls.IProcess {
			AccountBPF: ProcessAccountBPF;
		}
		interface Grid {
			Contacts: DevKit.Controls.Grid;
		}
	}
	export class FormAccount_for_Interactive_experience extends DevKit.IForm {
		/**
		* Account for Interactive experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Account_for_Interactive_experience */
		Body: DevKit.FormAccount_for_Interactive_experience.Body;
		/** The Header section of form Account_for_Interactive_experience */
		Header: DevKit.FormAccount_for_Interactive_experience.Header;
		/** The Navigation of form Account_for_Interactive_experience */
		Navigation: DevKit.FormAccount_for_Interactive_experience.Navigation;
		/** The QuickForm of form Account_for_Interactive_experience */
		QuickForm: DevKit.FormAccount_for_Interactive_experience.QuickForm;
		/** The Process of form Account_for_Interactive_experience */
		Process: DevKit.FormAccount_for_Interactive_experience.Process;
		/** The Grid of form Account_for_Interactive_experience */
		Grid: DevKit.FormAccount_for_Interactive_experience.Grid;
	}
	namespace FormAccount_Information {
		interface Header extends DevKit.Controls.IHeader {
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
		interface tab_administration_Sections {
			contact_methods: DevKit.Controls.Section;
			internal_information: DevKit.Controls.Section;
		}
		interface tab_contacts_Sections {
			contacts: DevKit.Controls.Section;
		}
		interface tab_details_Sections {
			billing_information: DevKit.Controls.Section;
			description_2: DevKit.Controls.Section;
			professional_information: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			account_information: DevKit.Controls.Section;
			address: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
			shipping_information: DevKit.Controls.Section;
		}
		interface tab_notes_and_activities_Sections {
			activities: DevKit.Controls.Section;
			notes: DevKit.Controls.Section;
		}
		interface tab_administration extends DevKit.Controls.ITab {
			Section: tab_administration_Sections;
		}
		interface tab_contacts extends DevKit.Controls.ITab {
			Section: tab_contacts_Sections;
		}
		interface tab_details extends DevKit.Controls.ITab {
			Section: tab_details_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_notes_and_activities extends DevKit.Controls.ITab {
			Section: tab_notes_and_activities_Sections;
		}
		interface Tabs {
			administration: tab_administration;
			contacts: tab_contacts;
			details: tab_details;
			general: tab_general;
			notes_and_activities: tab_notes_and_activities;
		}
		interface Body {
			Tab: Tabs;
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
			Description: DevKit.Controls.String;
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
		}
		interface Navigation {
			navActivities: DevKit.Controls.NavigationItem;
			navActivityHistory: DevKit.Controls.NavigationItem;
			navAddresses: DevKit.Controls.NavigationItem;
			navRelationships: DevKit.Controls.NavigationItem;
			navSubAct: DevKit.Controls.NavigationItem;
		}
		interface ProcessAccountBPF {
			/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
			IndustryCode: DevKit.Controls.OptionSet;
			/** Type the company or business name. */
			Name: DevKit.Controls.String;
			/** Choose the primary contact for the account to provide quick access to contact details. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
			Revenue: DevKit.Controls.Money;
		}
		interface Process extends DevKit.Controls.IProcess {
			AccountBPF: ProcessAccountBPF;
		}
		interface Grid {
			accountactivitiesgrid: DevKit.Controls.Grid;
			accountContactsGrid: DevKit.Controls.Grid;
		}
	}
	export class FormAccount_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Account_Information */
		Body: DevKit.FormAccount_Information.Body;
		/** The Header section of form Account_Information */
		Header: DevKit.FormAccount_Information.Header;
		/** The Navigation of form Account_Information */
		Navigation: DevKit.FormAccount_Information.Navigation;
		/** The Process of form Account_Information */
		Process: DevKit.FormAccount_Information.Process;
		/** The Grid of form Account_Information */
		Grid: DevKit.FormAccount_Information.Grid;
	}
	namespace FormAccount_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Type the city for the primary address. */
			Address1_City: DevKit.Controls.String;
			/** Type the first line of the primary address. */
			Address1_Line1: DevKit.Controls.String;
			/** Type the second line of the primary address. */
			Address1_Line2: DevKit.Controls.String;
			/** Type the ZIP Code or postal code for the primary address. */
			Address1_PostalCode: DevKit.Controls.String;
			/** Type additional information to describe the account, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Type the company or business name. */
			Name: DevKit.Controls.String;
			/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
			NumberOfEmployees: DevKit.Controls.Integer;
			/** Choose the primary contact for the account to provide quick access to contact details. */
			PrimaryContactId: DevKit.Controls.Lookup;
			/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
			Revenue: DevKit.Controls.Money;
			/** Type the main phone number for this account. */
			Telephone1: DevKit.Controls.String;
		}
	}
	export class FormAccount_Quick_Create extends DevKit.IForm {
		/**
		* Account Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Account_Quick_Create */
		Body: DevKit.FormAccount_Quick_Create.Body;
	}
}
declare namespace OptionSet {
	namespace Account {
		enum AccountCategoryCode {
			/** Preferred_Customer = 1*/
			Preferred_Customer = 1,
			/** Standard = 2*/
			Standard = 2
		}
		enum AccountClassificationCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum AccountRatingCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address1_AddressTypeCode {
			/** Bill_To = 1*/
			Bill_To = 1,
			/** Other = 4*/
			Other = 4,
			/** Primary = 3*/
			Primary = 3,
			/** Ship_To = 2*/
			Ship_To = 2
		}
		enum Address1_FreightTermsCode {
			/** FOB = 1*/
			FOB = 1,
			/** No_Charge = 2*/
			No_Charge = 2
		}
		enum Address1_ShippingMethodCode {
			/** Airborne = 1*/
			Airborne = 1,
			/** DHL = 2*/
			DHL = 2,
			/** FedEx = 3*/
			FedEx = 3,
			/** Full_Load = 6*/
			Full_Load = 6,
			/** Postal_Mail = 5*/
			Postal_Mail = 5,
			/** UPS = 4*/
			UPS = 4,
			/** Will_Call = 7*/
			Will_Call = 7
		}
		enum Address2_AddressTypeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address2_FreightTermsCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address2_ShippingMethodCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum BusinessTypeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum CustomerSizeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum CustomerTypeCode {
			/** Competitor = 1*/
			Competitor = 1,
			/** Consultant = 2*/
			Consultant = 2,
			/** Customer = 3*/
			Customer = 3,
			/** Influencer = 6*/
			Influencer = 6,
			/** Investor = 4*/
			Investor = 4,
			/** Other = 12*/
			Other = 12,
			/** Partner = 5*/
			Partner = 5,
			/** Press = 7*/
			Press = 7,
			/** Prospect = 8*/
			Prospect = 8,
			/** Reseller = 9*/
			Reseller = 9,
			/** Supplier = 10*/
			Supplier = 10,
			/** Vendor = 11*/
			Vendor = 11
		}
		enum IndustryCode {
			/** Accounting = 1*/
			Accounting = 1,
			/** Agriculture_and_Non_petrol_Natural_Resource_Extraction = 2*/
			Agriculture_and_Non_petrol_Natural_Resource_Extraction = 2,
			/** Broadcasting_Printing_and_Publishing = 3*/
			Broadcasting_Printing_and_Publishing = 3,
			/** Brokers = 4*/
			Brokers = 4,
			/** Building_Supply_Retail = 5*/
			Building_Supply_Retail = 5,
			/** Business_Services = 6*/
			Business_Services = 6,
			/** Consulting = 7*/
			Consulting = 7,
			/** Consumer_Services = 8*/
			Consumer_Services = 8,
			/** Design_Direction_and_Creative_Management = 9*/
			Design_Direction_and_Creative_Management = 9,
			/** Distributors_Dispatchers_and_Processors = 10*/
			Distributors_Dispatchers_and_Processors = 10,
			/** Doctors_Offices_and_Clinics = 11*/
			Doctors_Offices_and_Clinics = 11,
			/** Durable_Manufacturing = 12*/
			Durable_Manufacturing = 12,
			/** Eating_and_Drinking_Places = 13*/
			Eating_and_Drinking_Places = 13,
			/** Entertainment_Retail = 14*/
			Entertainment_Retail = 14,
			/** Equipment_Rental_and_Leasing = 15*/
			Equipment_Rental_and_Leasing = 15,
			/** Financial = 16*/
			Financial = 16,
			/** Food_and_Tobacco_Processing = 17*/
			Food_and_Tobacco_Processing = 17,
			/** Inbound_Capital_Intensive_Processing = 18*/
			Inbound_Capital_Intensive_Processing = 18,
			/** Inbound_Repair_and_Services = 19*/
			Inbound_Repair_and_Services = 19,
			/** Insurance = 20*/
			Insurance = 20,
			/** Legal_Services = 21*/
			Legal_Services = 21,
			/** Non_Durable_Merchandise_Retail = 22*/
			Non_Durable_Merchandise_Retail = 22,
			/** Outbound_Consumer_Service = 23*/
			Outbound_Consumer_Service = 23,
			/** Petrochemical_Extraction_and_Distribution = 24*/
			Petrochemical_Extraction_and_Distribution = 24,
			/** Service_Retail = 25*/
			Service_Retail = 25,
			/** SIG_Affiliations = 26*/
			SIG_Affiliations = 26,
			/** Social_Services = 27*/
			Social_Services = 27,
			/** Special_Outbound_Trade_Contractors = 28*/
			Special_Outbound_Trade_Contractors = 28,
			/** Specialty_Realty = 29*/
			Specialty_Realty = 29,
			/** Transportation = 30*/
			Transportation = 30,
			/** Utility_Creation_and_Distribution = 31*/
			Utility_Creation_and_Distribution = 31,
			/** Vehicle_Retail = 32*/
			Vehicle_Retail = 32,
			/** Wholesale = 33*/
			Wholesale = 33
		}
		enum OwnershipCode {
			/** Other = 4*/
			Other = 4,
			/** Private = 2*/
			Private = 2,
			/** Public = 1*/
			Public = 1,
			/** Subsidiary = 3*/
			Subsidiary = 3
		}
		enum PaymentTermsCode {
			/** _2_10_Net_30 = 2*/
			_2_10_Net_30 = 2,
			/** Net_30 = 1*/
			Net_30 = 1,
			/** Net_45 = 3*/
			Net_45 = 3,
			/** Net_60 = 4*/
			Net_60 = 4
		}
		enum PreferredAppointmentDayCode {
			/** Friday = 5*/
			Friday = 5,
			/** Monday = 1*/
			Monday = 1,
			/** Saturday = 6*/
			Saturday = 6,
			/** Sunday = 0*/
			Sunday = 0,
			/** Thursday = 4*/
			Thursday = 4,
			/** Tuesday = 2*/
			Tuesday = 2,
			/** Wednesday = 3*/
			Wednesday = 3
		}
		enum PreferredAppointmentTimeCode {
			/** Afternoon = 2*/
			Afternoon = 2,
			/** Evening = 3*/
			Evening = 3,
			/** Morning = 1*/
			Morning = 1
		}
		enum PreferredContactMethodCode {
			/** Any = 1*/
			Any = 1,
			/** Email = 2*/
			Email = 2,
			/** Fax = 4*/
			Fax = 4,
			/** Mail = 5*/
			Mail = 5,
			/** Phone = 3*/
			Phone = 3
		}
		enum ShippingMethodCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum TerritoryCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum v4_Categories {
			/** Category_A = 100000000*/
			Category_A = 100000000,
			/** Category_B = 100000001*/
			Category_B = 100000001,
			/** Category_C = 100000002*/
			Category_C = 100000002,
			/** Category_D = 100000003*/
			Category_D = 100000003
		}
		enum v4_MultiOptionSet {
			/** Category_A = 100000000*/
			Category_A = 100000000,
			/** Category_B = 100000001*/
			Category_B = 100000001,
			/** Category_C = 100000002*/
			Category_C = 100000002,
			/** Category_D = 100000003*/
			Category_D = 100000003
		}
		enum v4_OptionSet {
			/** Category_A = 100000000*/
			Category_A = 100000000,
			/** Category_B = 100000001*/
			Category_B = 100000001,
			/** Category_C = 100000002*/
			Category_C = 100000002,
			/** Category_D = 100000003*/
			Category_D = 100000003
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
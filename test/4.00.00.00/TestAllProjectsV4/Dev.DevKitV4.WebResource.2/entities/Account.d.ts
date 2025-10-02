//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKitV4 {
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
			/** Select a category to indicate whether the customer account is standard or preferred. */
			AccountCategoryCode: DevKit.Controls.OptionSet;
			ActionCards: DevKit.Controls.ActionCards;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Select a shipping method for deliveries sent to this address. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
			CreditLimit: DevKit.Controls.Money;
			/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Type additional information to describe the account, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			devkit_CategoryCode: DevKit.Controls.MultiOptionSet;
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
			IFRAME_PHUOCLE: DevKit.Controls.IFrame;
			/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
			IndustryCode: DevKit.Controls.OptionSet;
			mapcontrol: DevKit.Controls.Map;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Type the company or business name. */
			Name: DevKit.Controls.String;
			/** Type the company or business name. */
			Name1: DevKit.Controls.String;
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
			account_adx_inviteredemptions: DevKit.Controls.NavigationItem;
			account_adx_portalcomments: DevKit.Controls.NavigationItem;
			Account_Appointments: DevKit.Controls.NavigationItem;
			Account_Email_EmailSender: DevKit.Controls.NavigationItem;
			Account_Email_SendersAccount: DevKit.Controls.NavigationItem;
			Account_Emails: DevKit.Controls.NavigationItem;
			account_msfp_alerts: DevKit.Controls.NavigationItem;
			account_msfp_surveyinvites: DevKit.Controls.NavigationItem;
			account_msfp_surveyresponses: DevKit.Controls.NavigationItem;
			account_parent_account: DevKit.Controls.NavigationItem;
			Account_Phonecalls: DevKit.Controls.NavigationItem;
			Account_Tasks: DevKit.Controls.NavigationItem;
			adx_invitation_assigntoaccount: DevKit.Controls.NavigationItem;
			bpf_account_devkit_bpfaccount: DevKit.Controls.NavigationItem;
			bpf_account_v4_bpf_account_v4_1: DevKit.Controls.NavigationItem;
			contact_customer_accounts: DevKit.Controls.NavigationItem;
			msa_account_managingpartner: DevKit.Controls.NavigationItem;
			msa_contact_managingpartner: DevKit.Controls.NavigationItem;
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
		interface ProcessBPF_Account {
			/** Type the company or business name. */
			Name: DevKit.Controls.String;
			/** Type the company or business name. */
			Name_1: DevKit.Controls.String;
		}
		interface ProcessBPF_Account_v4_1 {
			/** Type an ID number or code for the account to quickly search and identify the account in system views. */
			AccountNumber: DevKit.Controls.String;
			/** Select a rating to indicate the value of the customer account. */
			AccountRatingCode: DevKit.Controls.OptionSet;
			/** Type the county for the primary address. */
			Address1_County: DevKit.Controls.String;
			/** Type additional information to describe the account, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Type the company or business name. */
			Name: DevKit.Controls.String;
			/** Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. */
			SIC: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
			BPF_Account: ProcessBPF_Account;
			BPF_Account_v4_1: ProcessBPF_Account_v4_1;
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
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Account */
		Body: DevKitV4.FormAccount.Body;
		/** The Header section of form Account */
		Header: DevKitV4.FormAccount.Header;
		/** The Navigation of form Account */
		Navigation: DevKitV4.FormAccount.Navigation;
		/** The QuickForm of form Account */
		QuickForm: DevKitV4.FormAccount.QuickForm;
		/** The Process of form Account */
		Process: DevKitV4.FormAccount.Process;
		/** The Grid of form Account */
		Grid: DevKitV4.FormAccount.Grid;
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
			account_adx_inviteredemptions: DevKit.Controls.NavigationItem;
			account_adx_portalcomments: DevKit.Controls.NavigationItem;
			Account_Appointments: DevKit.Controls.NavigationItem;
			Account_Email_EmailSender: DevKit.Controls.NavigationItem;
			Account_Email_SendersAccount: DevKit.Controls.NavigationItem;
			Account_Emails: DevKit.Controls.NavigationItem;
			account_msfp_alerts: DevKit.Controls.NavigationItem;
			account_msfp_surveyinvites: DevKit.Controls.NavigationItem;
			account_msfp_surveyresponses: DevKit.Controls.NavigationItem;
			account_parent_account: DevKit.Controls.NavigationItem;
			Account_Phonecalls: DevKit.Controls.NavigationItem;
			Account_Tasks: DevKit.Controls.NavigationItem;
			adx_invitation_assigntoaccount: DevKit.Controls.NavigationItem;
			bpf_account_devkit_bpfaccount: DevKit.Controls.NavigationItem;
			bpf_account_v4_bpf_account_v4_1: DevKit.Controls.NavigationItem;
			contact_customer_accounts: DevKit.Controls.NavigationItem;
			msa_account_managingpartner: DevKit.Controls.NavigationItem;
			msa_contact_managingpartner: DevKit.Controls.NavigationItem;
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
		interface ProcessBPF_Account {
			/** Type the company or business name. */
			Name: DevKit.Controls.String;
			/** Type the company or business name. */
			Name_1: DevKit.Controls.String;
		}
		interface ProcessBPF_Account_v4_1 {
			/** Type an ID number or code for the account to quickly search and identify the account in system views. */
			AccountNumber: DevKit.Controls.String;
			/** Select a rating to indicate the value of the customer account. */
			AccountRatingCode: DevKit.Controls.OptionSet;
			/** Type the county for the primary address. */
			Address1_County: DevKit.Controls.String;
			/** Type additional information to describe the account, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Type the company or business name. */
			Name: DevKit.Controls.String;
			/** Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. */
			SIC: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
			BPF_Account: ProcessBPF_Account;
			BPF_Account_v4_1: ProcessBPF_Account_v4_1;
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
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Account_for_Interactive_experience */
		Body: DevKitV4.FormAccount_for_Interactive_experience.Body;
		/** The Header section of form Account_for_Interactive_experience */
		Header: DevKitV4.FormAccount_for_Interactive_experience.Header;
		/** The Navigation of form Account_for_Interactive_experience */
		Navigation: DevKitV4.FormAccount_for_Interactive_experience.Navigation;
		/** The QuickForm of form Account_for_Interactive_experience */
		QuickForm: DevKitV4.FormAccount_for_Interactive_experience.QuickForm;
		/** The Process of form Account_for_Interactive_experience */
		Process: DevKitV4.FormAccount_for_Interactive_experience.Process;
		/** The Grid of form Account_for_Interactive_experience */
		Grid: DevKitV4.FormAccount_for_Interactive_experience.Grid;
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
			account_adx_inviteredemptions: DevKit.Controls.NavigationItem;
			account_adx_portalcomments: DevKit.Controls.NavigationItem;
			Account_Appointments: DevKit.Controls.NavigationItem;
			Account_Email_EmailSender: DevKit.Controls.NavigationItem;
			Account_Email_SendersAccount: DevKit.Controls.NavigationItem;
			Account_Emails: DevKit.Controls.NavigationItem;
			account_msfp_alerts: DevKit.Controls.NavigationItem;
			account_msfp_surveyinvites: DevKit.Controls.NavigationItem;
			account_msfp_surveyresponses: DevKit.Controls.NavigationItem;
			account_parent_account: DevKit.Controls.NavigationItem;
			Account_Phonecalls: DevKit.Controls.NavigationItem;
			Account_Tasks: DevKit.Controls.NavigationItem;
			adx_invitation_assigntoaccount: DevKit.Controls.NavigationItem;
			bpf_account_devkit_bpfaccount: DevKit.Controls.NavigationItem;
			bpf_account_v4_bpf_account_v4_1: DevKit.Controls.NavigationItem;
			contact_customer_accounts: DevKit.Controls.NavigationItem;
			msa_account_managingpartner: DevKit.Controls.NavigationItem;
			msa_contact_managingpartner: DevKit.Controls.NavigationItem;
		}
		interface quickForm_QuickviewControl1759305531762_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			Name: DevKit.Controls.QuickView;
			Telephone1: DevKit.Controls.QuickView;
		}
		interface quickForm_QuickviewControl1759305509815_Body {
			EMailAddress1: DevKit.Controls.QuickView;
			FirstName: DevKit.Controls.QuickView;
			LastName: DevKit.Controls.QuickView;
			MobilePhone: DevKit.Controls.QuickView;
			ParentCustomerId: DevKit.Controls.QuickView;
		}
		interface quickForm_QuickviewControl1759305531762 extends DevKit.Controls.IQuickView {
			Body: quickForm_QuickviewControl1759305531762_Body;
		}
		interface quickForm_QuickviewControl1759305509815 extends DevKit.Controls.IQuickView {
			Body: quickForm_QuickviewControl1759305509815_Body;
		}
		interface QuickForm {
			QuickviewControl1759305531762: quickForm_QuickviewControl1759305531762;
			QuickviewControl1759305509815: quickForm_QuickviewControl1759305509815;
		}
		interface ProcessBPF_Account {
			/** Type the company or business name. */
			Name: DevKit.Controls.String;
			/** Type the company or business name. */
			Name_1: DevKit.Controls.String;
		}
		interface ProcessBPF_Account_v4_1 {
			/** Type an ID number or code for the account to quickly search and identify the account in system views. */
			AccountNumber: DevKit.Controls.String;
			/** Select a rating to indicate the value of the customer account. */
			AccountRatingCode: DevKit.Controls.OptionSet;
			/** Type the county for the primary address. */
			Address1_County: DevKit.Controls.String;
			/** Type additional information to describe the account, such as an excerpt from the company's website. */
			Description: DevKit.Controls.String;
			/** Type the company or business name. */
			Name: DevKit.Controls.String;
			/** Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. */
			SIC: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
			BPF_Account: ProcessBPF_Account;
			BPF_Account_v4_1: ProcessBPF_Account_v4_1;
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
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Account_Information */
		Body: DevKitV4.FormAccount_Information.Body;
		/** The Header section of form Account_Information */
		Header: DevKitV4.FormAccount_Information.Header;
		/** The Navigation of form Account_Information */
		Navigation: DevKitV4.FormAccount_Information.Navigation;
		/** The QuickForm of form Account_Information */
		QuickForm: DevKitV4.FormAccount_Information.QuickForm;
		/** The Process of form Account_Information */
		Process: DevKitV4.FormAccount_Information.Process;
		/** The Grid of form Account_Information */
		Grid: DevKitV4.FormAccount_Information.Grid;
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
		Body: DevKitV4.FormAccount_Quick_Create.Body;
	}
	export class AccountApi {
		/**
		* DynamicsCrm.DevKit AccountApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>) : DevKitV4.AccountApi;
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Select a category to indicate whether the customer account is standard or preferred. */
		AccountCategoryCode: OptionSet.Account.AccountCategoryCode | null;
		/** Select a classification code to indicate the potential value of the customer account based on the projected return on investment, cooperation level, sales cycle length or other criteria. */
		AccountClassificationCode: OptionSet.Account.AccountClassificationCode | null;
		/** Unique identifier of the account. */
		AccountId: string | null;
		/** Type an ID number or code for the account to quickly search and identify the account in system views. */
		AccountNumber: string | null;
		/** Select a rating to indicate the value of the customer account. */
		AccountRatingCode: OptionSet.Account.AccountRatingCode | null;
		/** Unique identifier for address 1. */
		Address1_AddressId: string | null;
		/** Select the primary address type. */
		Address1_AddressTypeCode: OptionSet.Account.Address1_AddressTypeCode | null;
		/** Type the city for the primary address. */
		Address1_City: string | null;
		/** Shows the complete primary address. */
		readonly Address1_Composite: string | null;
		/** Type the country or region for the primary address. */
		Address1_Country: string | null;
		/** Type the county for the primary address. */
		Address1_County: string | null;
		/** Type the fax number associated with the primary address. */
		Address1_Fax: string | null;
		/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
		Address1_FreightTermsCode: OptionSet.Account.Address1_FreightTermsCode | null;
		/** Type the latitude value for the primary address for use in mapping and other applications. */
		Address1_Latitude: number | null;
		/** Type the first line of the primary address. */
		Address1_Line1: string | null;
		/** Type the second line of the primary address. */
		Address1_Line2: string | null;
		/** Type the third line of the primary address. */
		Address1_Line3: string | null;
		/** Type the longitude value for the primary address for use in mapping and other applications. */
		Address1_Longitude: number | null;
		/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
		Address1_Name: string | null;
		/** Type the ZIP Code or postal code for the primary address. */
		Address1_PostalCode: string | null;
		/** Type the post office box number of the primary address. */
		Address1_PostOfficeBox: string | null;
		/** Type the name of the main contact at the account's primary address. */
		Address1_PrimaryContactName: string | null;
		/** Select a shipping method for deliveries sent to this address. */
		Address1_ShippingMethodCode: OptionSet.Account.Address1_ShippingMethodCode | null;
		/** Type the state or province of the primary address. */
		Address1_StateOrProvince: string | null;
		/** Type the main phone number associated with the primary address. */
		Address1_Telephone1: string | null;
		/** Type a second phone number associated with the primary address. */
		Address1_Telephone2: string | null;
		/** Type a third phone number associated with the primary address. */
		Address1_Telephone3: string | null;
		/** Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address1_UPSZone: string | null;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address1_UTCOffset: number | null;
		/** Unique identifier for address 2. */
		Address2_AddressId: string | null;
		/** Select the secondary address type. */
		Address2_AddressTypeCode: OptionSet.Account.Address2_AddressTypeCode | null;
		/** Type the city for the secondary address. */
		Address2_City: string | null;
		/** Shows the complete secondary address. */
		readonly Address2_Composite: string | null;
		/** Type the country or region for the secondary address. */
		Address2_Country: string | null;
		/** Type the county for the secondary address. */
		Address2_County: string | null;
		/** Type the fax number associated with the secondary address. */
		Address2_Fax: string | null;
		/** Select the freight terms for the secondary address to make sure shipping orders are processed correctly. */
		Address2_FreightTermsCode: OptionSet.Account.Address2_FreightTermsCode | null;
		/** Type the latitude value for the secondary address for use in mapping and other applications. */
		Address2_Latitude: number | null;
		/** Type the first line of the secondary address. */
		Address2_Line1: string | null;
		/** Type the second line of the secondary address. */
		Address2_Line2: string | null;
		/** Type the third line of the secondary address. */
		Address2_Line3: string | null;
		/** Type the longitude value for the secondary address for use in mapping and other applications. */
		Address2_Longitude: number | null;
		/** Type a descriptive name for the secondary address, such as Corporate Headquarters. */
		Address2_Name: string | null;
		/** Type the ZIP Code or postal code for the secondary address. */
		Address2_PostalCode: string | null;
		/** Type the post office box number of the secondary address. */
		Address2_PostOfficeBox: string | null;
		/** Type the name of the main contact at the account's secondary address. */
		Address2_PrimaryContactName: string | null;
		/** Select a shipping method for deliveries sent to this address. */
		Address2_ShippingMethodCode: OptionSet.Account.Address2_ShippingMethodCode | null;
		/** Type the state or province of the secondary address. */
		Address2_StateOrProvince: string | null;
		/** Type the main phone number associated with the secondary address. */
		Address2_Telephone1: string | null;
		/** Type a second phone number associated with the secondary address. */
		Address2_Telephone2: string | null;
		/** Type a third phone number associated with the secondary address. */
		Address2_Telephone3: string | null;
		/** Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address2_UPSZone: string | null;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address2_UTCOffset: number | null;
		Adx_CreatedByIPAddress: string | null;
		Adx_CreatedByUsername: string | null;
		Adx_ModifiedByIPAddress: string | null;
		Adx_ModifiedByUsername: string | null;
		/** For system use only. */
		readonly Aging30: number | null;
		/** The base currency equivalent of the aging 30 field. */
		readonly Aging30_Base: number | null;
		/** For system use only. */
		readonly Aging60: number | null;
		/** The base currency equivalent of the aging 60 field. */
		readonly Aging60_Base: number | null;
		/** For system use only. */
		readonly Aging90: number | null;
		/** The base currency equivalent of the aging 90 field. */
		readonly Aging90_Base: number | null;
		/** Select the legal designation or other business type of the account for contracts or reporting purposes. */
		BusinessTypeCode: OptionSet.Account.BusinessTypeCode | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the external party who created the record. */
		readonly CreatedByExternalParty: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
		CreditLimit: number | null;
		/** Shows the credit limit converted to the system's default base currency for reporting purposes. */
		readonly CreditLimit_Base: number | null;
		/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
		CreditOnHold: boolean | null;
		/** Select the size category or range of the account for segmentation and reporting purposes. */
		CustomerSizeCode: OptionSet.Account.CustomerSizeCode | null;
		/** Select the category that best describes the relationship between the account and your organization. */
		CustomerTypeCode: OptionSet.Account.CustomerTypeCode | null;
		/** Type additional information to describe the account, such as an excerpt from the company's website. */
		Description: string | null;
		devkit_BigInt: number | null;
		devkit_CategoryCode: Array<OptionSet.Account.devkit_CategoryCode> | null;
		/** Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email. */
		DoNotBulkEMail: boolean | null;
		/** Select whether the account allows bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but will be excluded from the postal mail. */
		DoNotBulkPostalMail: boolean | null;
		/** Select whether the account allows direct email sent from Microsoft Dynamics 365. */
		DoNotEMail: boolean | null;
		/** Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns. */
		DoNotFax: boolean | null;
		/** Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns. */
		DoNotPhone: boolean | null;
		/** Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns. */
		DoNotPostalMail: boolean | null;
		/** Select whether the account accepts marketing materials, such as brochures or catalogs. */
		DoNotSendMM: boolean | null;
		/** Type the primary email address for the account. */
		EMailAddress1: string | null;
		/** Type the secondary email address for the account. */
		EMailAddress2: string | null;
		/** Type an alternate email address for the account. */
		EMailAddress3: string | null;
		/** Shows the default image for the record. */
		EntityImage: string | null;
		EntityImage_Timestamp: number | null;
		EntityImage_URL: string | null;
		/** For internal use only. */
		readonly EntityImageId: string | null;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number | null;
		/** Type the fax number for the account. */
		Fax: string | null;
		/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account. */
		FollowEmail: boolean | null;
		/** Type the URL for the account's FTP site to enable users to access data and share documents. */
		FtpSiteURL: string | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
		IndustryCode: OptionSet.Account.IndustryCode | null;
		readonly IsPrivate: boolean | null;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date | null;
		/** Shows the date when the account was last included in a marketing campaign or quick campaign. */
		LastUsedInCampaign_UtcDateOnly: Date | null;
		/** Type the market capitalization of the account to identify the company's equity, used as an indicator in financial performance analysis. */
		MarketCap: number | null;
		/** Shows the market capitalization converted to the system's default base currency. */
		readonly MarketCap_Base: number | null;
		/** Whether is only for marketing */
		MarketingOnly: boolean | null;
		/** Shows the master account that the account was merged with. */
		readonly MasterId: string | null;
		/** Shows whether the account has been merged with another account. */
		readonly Merged: boolean | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the external party who modified the record. */
		readonly ModifiedByExternalParty: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier for Account associated with Account. */
		msa_managingpartnerid: string | null;
		/** Type the company or business name. */
		Name: string | null;
		/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
		NumberOfEmployees: number | null;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Select the account's ownership structure, such as public or private. */
		OwnershipCode: OptionSet.Account.OwnershipCode | null;
		/** Shows the business unit that the record owner belongs to. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the account. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the account. */
		readonly OwningUser: string | null;
		/** Choose the parent account associated with this account to show parent and child businesses in reporting and analytics. */
		ParentAccountId: string | null;
		/** For system use only. Legacy Microsoft Dynamics CRM 3.0 workflow data. */
		ParticipatesInWorkflow: boolean | null;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: OptionSet.Account.PaymentTermsCode | null;
		/** Select the preferred day of the week for service appointments. */
		PreferredAppointmentDayCode: OptionSet.Account.PreferredAppointmentDayCode | null;
		/** Select the preferred time of day for service appointments. */
		PreferredAppointmentTimeCode: OptionSet.Account.PreferredAppointmentTimeCode | null;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: OptionSet.Account.PreferredContactMethodCode | null;
		/** Choose the preferred service representative for reference when you schedule service activities for the account. */
		PreferredSystemUserId: string | null;
		/** Choose the primary contact for the account to provide quick access to contact details. */
		PrimaryContactId: string | null;
		/** Primary Satori ID for Account */
		PrimarySatoriId: string | null;
		/** Primary Twitter ID for Account */
		PrimaryTwitterId: string | null;
		/** Shows the ID of the process. */
		ProcessId: string | null;
		/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
		Revenue: number | null;
		/** Shows the annual revenue converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		readonly Revenue_Base: number | null;
		/** Type the number of shares available to the public for the account. This number is used as an indicator in financial performance analysis. */
		SharesOutstanding: number | null;
		/** Select a shipping method for deliveries sent to the account's address to designate the preferred carrier or other delivery option. */
		ShippingMethodCode: OptionSet.Account.ShippingMethodCode | null;
		/** Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. */
		SIC: string | null;
		/** Choose the service level agreement (SLA) that you want to apply to the Account record. */
		SLAId: string | null;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		readonly SLAInvokedId: string | null;
		/** Shows the ID of the stage. */
		StageId: string | null;
		/** Shows whether the account is active or inactive. Inactive accounts are read-only and can't be edited unless they are reactivated. */
		StateCode: OptionSet.Account.StateCode | null;
		/** Select the account's status. */
		StatusCode: OptionSet.Account.StatusCode | null;
		/** Type the stock exchange at which the account is listed to track their stock and financial performance of the company. */
		StockExchange: string | null;
		/** Type the main phone number for this account. */
		Telephone1: string | null;
		/** Type a second phone number for this account. */
		Telephone2: string | null;
		/** Type a third phone number for this account. */
		Telephone3: string | null;
		/** Select a region or territory for the account for use in segmentation and analysis. */
		TerritoryCode: OptionSet.Account.TerritoryCode | null;
		/** Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
		TickerSymbol: string | null;
		/** Total time spent for emails (read and write) and meetings by me in relation to account record. */
		readonly TimeSpentByMeOnEmailAndMeetings: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string | null;
		/** For internal use only. */
		TraversedPath: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of the account. */
		readonly VersionNumber: number | null;
		/** Type the account's website URL to get quick details about the company profile. */
		WebSiteURL: string | null;
		/** Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
		YomiName: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Select a category to indicate whether the customer account is standard or preferred. */
			readonly AccountCategoryCode: string;
			/** Select a classification code to indicate the potential value of the customer account based on the projected return on investment, cooperation level, sales cycle length or other criteria. */
			readonly AccountClassificationCode: string;
			/** Unique identifier of the account. */
			readonly AccountId: string;
			/** Type an ID number or code for the account to quickly search and identify the account in system views. */
			readonly AccountNumber: string;
			/** Select a rating to indicate the value of the customer account. */
			readonly AccountRatingCode: string;
			/** Unique identifier for address 1. */
			readonly Address1_AddressId: string;
			/** Select the primary address type. */
			readonly Address1_AddressTypeCode: string;
			/** Type the city for the primary address. */
			readonly Address1_City: string;
			/** Shows the complete primary address. */
			readonly Address1_Composite: string;
			/** Type the country or region for the primary address. */
			readonly Address1_Country: string;
			/** Type the county for the primary address. */
			readonly Address1_County: string;
			/** Type the fax number associated with the primary address. */
			readonly Address1_Fax: string;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			readonly Address1_FreightTermsCode: string;
			/** Type the latitude value for the primary address for use in mapping and other applications. */
			readonly Address1_Latitude: string;
			/** Type the first line of the primary address. */
			readonly Address1_Line1: string;
			/** Type the second line of the primary address. */
			readonly Address1_Line2: string;
			/** Type the third line of the primary address. */
			readonly Address1_Line3: string;
			/** Type the longitude value for the primary address for use in mapping and other applications. */
			readonly Address1_Longitude: string;
			/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
			readonly Address1_Name: string;
			/** Type the ZIP Code or postal code for the primary address. */
			readonly Address1_PostalCode: string;
			/** Type the post office box number of the primary address. */
			readonly Address1_PostOfficeBox: string;
			/** Type the name of the main contact at the account's primary address. */
			readonly Address1_PrimaryContactName: string;
			/** Select a shipping method for deliveries sent to this address. */
			readonly Address1_ShippingMethodCode: string;
			/** Type the state or province of the primary address. */
			readonly Address1_StateOrProvince: string;
			/** Type the main phone number associated with the primary address. */
			readonly Address1_Telephone1: string;
			/** Type a second phone number associated with the primary address. */
			readonly Address1_Telephone2: string;
			/** Type a third phone number associated with the primary address. */
			readonly Address1_Telephone3: string;
			/** Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
			readonly Address1_UPSZone: string;
			/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
			readonly Address1_UTCOffset: string;
			/** Unique identifier for address 2. */
			readonly Address2_AddressId: string;
			/** Select the secondary address type. */
			readonly Address2_AddressTypeCode: string;
			/** Type the city for the secondary address. */
			readonly Address2_City: string;
			/** Shows the complete secondary address. */
			readonly Address2_Composite: string;
			/** Type the country or region for the secondary address. */
			readonly Address2_Country: string;
			/** Type the county for the secondary address. */
			readonly Address2_County: string;
			/** Type the fax number associated with the secondary address. */
			readonly Address2_Fax: string;
			/** Select the freight terms for the secondary address to make sure shipping orders are processed correctly. */
			readonly Address2_FreightTermsCode: string;
			/** Type the latitude value for the secondary address for use in mapping and other applications. */
			readonly Address2_Latitude: string;
			/** Type the first line of the secondary address. */
			readonly Address2_Line1: string;
			/** Type the second line of the secondary address. */
			readonly Address2_Line2: string;
			/** Type the third line of the secondary address. */
			readonly Address2_Line3: string;
			/** Type the longitude value for the secondary address for use in mapping and other applications. */
			readonly Address2_Longitude: string;
			/** Type a descriptive name for the secondary address, such as Corporate Headquarters. */
			readonly Address2_Name: string;
			/** Type the ZIP Code or postal code for the secondary address. */
			readonly Address2_PostalCode: string;
			/** Type the post office box number of the secondary address. */
			readonly Address2_PostOfficeBox: string;
			/** Type the name of the main contact at the account's secondary address. */
			readonly Address2_PrimaryContactName: string;
			/** Select a shipping method for deliveries sent to this address. */
			readonly Address2_ShippingMethodCode: string;
			/** Type the state or province of the secondary address. */
			readonly Address2_StateOrProvince: string;
			/** Type the main phone number associated with the secondary address. */
			readonly Address2_Telephone1: string;
			/** Type a second phone number associated with the secondary address. */
			readonly Address2_Telephone2: string;
			/** Type a third phone number associated with the secondary address. */
			readonly Address2_Telephone3: string;
			/** Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
			readonly Address2_UPSZone: string;
			/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
			readonly Address2_UTCOffset: string;
			readonly Adx_CreatedByIPAddress: string;
			readonly Adx_CreatedByUsername: string;
			readonly Adx_ModifiedByIPAddress: string;
			readonly Adx_ModifiedByUsername: string;
			/** For system use only. */
			readonly Aging30: string;
			/** The base currency equivalent of the aging 30 field. */
			readonly Aging30_Base: string;
			/** For system use only. */
			readonly Aging60: string;
			/** The base currency equivalent of the aging 60 field. */
			readonly Aging60_Base: string;
			/** For system use only. */
			readonly Aging90: string;
			/** The base currency equivalent of the aging 90 field. */
			readonly Aging90_Base: string;
			/** Select the legal designation or other business type of the account for contracts or reporting purposes. */
			readonly BusinessTypeCode: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the external party who created the record. */
			readonly CreatedByExternalParty: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
			readonly CreditLimit: string;
			/** Shows the credit limit converted to the system's default base currency for reporting purposes. */
			readonly CreditLimit_Base: string;
			/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
			readonly CreditOnHold: string;
			/** Select the size category or range of the account for segmentation and reporting purposes. */
			readonly CustomerSizeCode: string;
			/** Select the category that best describes the relationship between the account and your organization. */
			readonly CustomerTypeCode: string;
			/** Type additional information to describe the account, such as an excerpt from the company's website. */
			readonly Description: string;
			readonly devkit_BigInt: string;
			readonly devkit_CategoryCode: Array<string>;
			/** Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email. */
			readonly DoNotBulkEMail: string;
			/** Select whether the account allows bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but will be excluded from the postal mail. */
			readonly DoNotBulkPostalMail: string;
			/** Select whether the account allows direct email sent from Microsoft Dynamics 365. */
			readonly DoNotEMail: string;
			/** Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns. */
			readonly DoNotFax: string;
			/** Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns. */
			readonly DoNotPhone: string;
			/** Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns. */
			readonly DoNotPostalMail: string;
			/** Select whether the account accepts marketing materials, such as brochures or catalogs. */
			readonly DoNotSendMM: string;
			/** Type the primary email address for the account. */
			readonly EMailAddress1: string;
			/** Type the secondary email address for the account. */
			readonly EMailAddress2: string;
			/** Type an alternate email address for the account. */
			readonly EMailAddress3: string;
			/** Shows the default image for the record. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** For internal use only. */
			readonly EntityImageId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Type the fax number for the account. */
			readonly Fax: string;
			/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account. */
			readonly FollowEmail: string;
			/** Type the URL for the account's FTP site to enable users to access data and share documents. */
			readonly FtpSiteURL: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
			readonly IndustryCode: string;
			readonly IsPrivate: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Shows the date when the account was last included in a marketing campaign or quick campaign. */
			readonly LastUsedInCampaign_UtcDateOnly: string;
			/** Type the market capitalization of the account to identify the company's equity, used as an indicator in financial performance analysis. */
			readonly MarketCap: string;
			/** Shows the market capitalization converted to the system's default base currency. */
			readonly MarketCap_Base: string;
			/** Whether is only for marketing */
			readonly MarketingOnly: string;
			/** Shows the master account that the account was merged with. */
			readonly MasterId: string;
			/** Shows whether the account has been merged with another account. */
			readonly Merged: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the external party who modified the record. */
			readonly ModifiedByExternalParty: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for Account associated with Account. */
			readonly msa_managingpartnerid: string;
			/** Type the company or business name. */
			readonly Name: string;
			/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
			readonly NumberOfEmployees: string;
			/** Shows how long, in minutes, that the record was on hold. */
			readonly OnHoldTime: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Select the account's ownership structure, such as public or private. */
			readonly OwnershipCode: string;
			/** Shows the business unit that the record owner belongs to. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the account. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the account. */
			readonly OwningUser: string;
			/** Choose the parent account associated with this account to show parent and child businesses in reporting and analytics. */
			readonly ParentAccountId: string;
			/** For system use only. Legacy Microsoft Dynamics CRM 3.0 workflow data. */
			readonly ParticipatesInWorkflow: string;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			readonly PaymentTermsCode: string;
			/** Select the preferred day of the week for service appointments. */
			readonly PreferredAppointmentDayCode: string;
			/** Select the preferred time of day for service appointments. */
			readonly PreferredAppointmentTimeCode: string;
			/** Select the preferred method of contact. */
			readonly PreferredContactMethodCode: string;
			/** Choose the preferred service representative for reference when you schedule service activities for the account. */
			readonly PreferredSystemUserId: string;
			/** Choose the primary contact for the account to provide quick access to contact details. */
			readonly PrimaryContactId: string;
			/** Primary Satori ID for Account */
			readonly PrimarySatoriId: string;
			/** Primary Twitter ID for Account */
			readonly PrimaryTwitterId: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
			readonly Revenue: string;
			/** Shows the annual revenue converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
			readonly Revenue_Base: string;
			/** Type the number of shares available to the public for the account. This number is used as an indicator in financial performance analysis. */
			readonly SharesOutstanding: string;
			/** Select a shipping method for deliveries sent to the account's address to designate the preferred carrier or other delivery option. */
			readonly ShippingMethodCode: string;
			/** Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. */
			readonly SIC: string;
			/** Choose the service level agreement (SLA) that you want to apply to the Account record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this case. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Shows the ID of the stage. */
			readonly StageId: string;
			/** Shows whether the account is active or inactive. Inactive accounts are read-only and can't be edited unless they are reactivated. */
			readonly StateCode: string;
			/** Select the account's status. */
			readonly StatusCode: string;
			/** Type the stock exchange at which the account is listed to track their stock and financial performance of the company. */
			readonly StockExchange: string;
			/** Type the main phone number for this account. */
			readonly Telephone1: string;
			/** Type a second phone number for this account. */
			readonly Telephone2: string;
			/** Type a third phone number for this account. */
			readonly Telephone3: string;
			/** Select a region or territory for the account for use in segmentation and analysis. */
			readonly TerritoryCode: string;
			/** Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
			readonly TickerSymbol: string;
			/** Total time spent for emails (read and write) and meetings by me in relation to account record. */
			readonly TimeSpentByMeOnEmailAndMeetings: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the account. */
			readonly VersionNumber: string;
			/** Type the account's website URL to get quick details about the company profile. */
			readonly WebSiteURL: string;
			/** Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
			readonly YomiName: string;
		}
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
		enum devkit_CategoryCode {
			/** Business = 1*/
			Business = 1,
			/** Family = 2*/
			Family = 2,
			/** Other = 5*/
			Other = 5,
			/** Sales = 4*/
			Sales = 4,
			/** Sales_Team = 1001*/
			Sales_Team = 1001,
			/** Service = 1002*/
			Service = 1002,
			/** Social = 3*/
			Social = 3,
			/** Stakeholder = 1000*/
			Stakeholder = 1000
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
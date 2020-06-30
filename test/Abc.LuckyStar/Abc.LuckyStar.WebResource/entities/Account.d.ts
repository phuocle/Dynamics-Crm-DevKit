//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormAccount {
		interface Header {
			/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
			NumberOfEmployees: DevKit.Form.Controls.ControlInteger;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
			Revenue: DevKit.Form.Controls.ControlMoney;
		}
		interface tab_SUMMARY_TAB_Sections {
			ACCOUNT_INFORMATION: DevKit.Form.Controls.ControlSection;
			ADDRESS: DevKit.Form.Controls.ControlSection;
			MapSection: DevKit.Form.Controls.ControlSection;
			SOCIAL_PANE_TAB: DevKit.Form.Controls.ControlSection;
			Summary_section_6: DevKit.Form.Controls.ControlSection;
			SUMMARY_TAB_section_6: DevKit.Form.Controls.ControlSection;
		}
		interface tab_DETAILS_TAB_Sections {
			COMPANY_PROFILE: DevKit.Form.Controls.ControlSection;
			DETAILS_TAB_section_6: DevKit.Form.Controls.ControlSection;
			CONTACT_PREFERENCES: DevKit.Form.Controls.ControlSection;
			BILLING: DevKit.Form.Controls.ControlSection;
			SHIPPING: DevKit.Form.Controls.ControlSection;
			ChildAccounts: DevKit.Form.Controls.ControlSection;
		}
		interface tab__64BC19B9_1311_4B93_BE4C_6407B98D2AB3_Sections {
			_64BC19B9_1311_4B93_BE4C_6407B98D2AB4: DevKit.Form.Controls.ControlSection;
		}
		interface tab_SUMMARY_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface tab_DETAILS_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface tab__64BC19B9_1311_4B93_BE4C_6407B98D2AB3 extends DevKit.Form.Controls.IControlTab {
			Section: tab__64BC19B9_1311_4B93_BE4C_6407B98D2AB3_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
			DETAILS_TAB: tab_DETAILS_TAB;
			_64BC19B9_1311_4B93_BE4C_6407B98D2AB3: tab__64BC19B9_1311_4B93_BE4C_6407B98D2AB3;
		}
		interface Body {
			Tab: Tabs;
			mapcontrol: DevKit.Form.Controls.ControlMap;
			notescontrol: DevKit.Form.Controls.ControlNote;
			ActionCards: DevKit.Form.Controls.ControlActionCards;
			ChildAccounts: DevKit.Form.Controls.ControlGrid;
			Contacts: DevKit.Form.Controls.ControlGrid;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Form.Controls.ControlString;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			Address1_FreightTermsCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select a shipping method for deliveries sent to this address. */
			Address1_ShippingMethodCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
			CreditLimit: DevKit.Form.Controls.ControlMoney;
			/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
			CreditOnHold: DevKit.Form.Controls.ControlBoolean;
			/** Type additional information to describe the account, such as an excerpt from the company's website. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email. */
			DoNotBulkEMail: DevKit.Form.Controls.ControlBoolean;
			/** Select whether the account allows direct email sent from Microsoft Dynamics 365. */
			DoNotEMail: DevKit.Form.Controls.ControlBoolean;
			/** Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns. */
			DoNotFax: DevKit.Form.Controls.ControlBoolean;
			/** Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns. */
			DoNotPhone: DevKit.Form.Controls.ControlBoolean;
			/** Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns. */
			DoNotPostalMail: DevKit.Form.Controls.ControlBoolean;
			/** Type the fax number for the account. */
			Fax: DevKit.Form.Controls.ControlString;
			/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account. */
			FollowEmail: DevKit.Form.Controls.ControlBoolean;
			/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
			IndustryCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type the company or business name. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select the account's ownership structure, such as public or private. */
			OwnershipCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the parent account associated with this account to show parent and child businesses in reporting and analytics. */
			ParentAccountId: DevKit.Form.Controls.ControlLookup;
			/** Select the payment terms to indicate when the customer needs to pay the total amount. */
			PaymentTermsCode: DevKit.Form.Controls.ControlOptionSet;
			/** Select the preferred method of contact. */
			PreferredContactMethodCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the primary contact for the account to provide quick access to contact details. */
			PrimaryContactId: DevKit.Form.Controls.ControlLookup;
			contactquickform: DevKit.Form.Controls.ControlQuickView;
			/** Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. */
			SIC: DevKit.Form.Controls.ControlString;
			/** Type the main phone number for this account. */
			Telephone1: DevKit.Form.Controls.ControlString;
			/** Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
			TickerSymbol: DevKit.Form.Controls.ControlString;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
			/** Type the account's website URL to get quick details about the company profile. */
			WebSiteURL: DevKit.Form.Controls.ControlString;
		}
		interface Navigation {
			navRelationships: DevKit.Form.Controls.ControlNavigationItem,
			navAddresses: DevKit.Form.Controls.ControlNavigationItem,
			navSubAccts: DevKit.Form.Controls.ControlNavigationItem,
			navCampaignsInSFA: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_devkit_account_devkit_webapi_Customer: DevKit.Form.Controls.ControlNavigationItem
		}
		interface ProcessBPF_Account_3 {
			/** Type an number or code for the account to quickly search and identify the account in system views. */
			AccountNumber: DevKit.Form.Controls.ControlString;
			/** Type the company or business name. */
			Name: DevKit.Form.Controls.ControlString;
		}
		interface ProcessBPF_Account_1 {
			/** Select a category to indicate whether the customer account is standard or preferred. */
			AccountCategoryCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type an number or code for the account to quickly search and identify the account in system views. */
			AccountNumber: DevKit.Form.Controls.ControlString;
			/** Type the company or business name. */
			Name: DevKit.Form.Controls.ControlString;
			/** Type the main phone number for this account. */
			Telephone1: DevKit.Form.Controls.ControlString;
			/** Type a second phone number for this account. */
			Telephone2: DevKit.Form.Controls.ControlString;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			BPF_Account_3: ProcessBPF_Account_3;
			BPF_Account_1: ProcessBPF_Account_1;
		}
	}
	class FormAccount extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Account
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Account */
		Body: LuckyStar.FormAccount.Body;
		/** The Header section of form Account */
		Header: LuckyStar.FormAccount.Header;
		/** The Navigation of form Account */
		Navigation: LuckyStar.FormAccount.Navigation;
		/** The Process of form Account */
		Process: LuckyStar.FormAccount.Process;
	}
}
declare namespace OptionSet {
	namespace Account {
		enum AccountCategoryCode {
			/** 1 */
			Preferred_Customer,
			/** 2 */
			Standard
		}
		enum AccountClassificationCode {
			/** 1 */
			Default_Value
		}
		enum AccountRatingCode {
			/** 1 */
			Default_Value
		}
		enum Address1_AddressTypeCode {
			/** 1 */
			Bill_To,
			/** 2 */
			Ship_To,
			/** 3 */
			Primary,
			/** 4 */
			Other
		}
		enum Address1_FreightTermsCode {
			/** 1 */
			FOB,
			/** 2 */
			No_Charge
		}
		enum Address1_ShippingMethodCode {
			/** 1 */
			Airborne,
			/** 2 */
			DHL,
			/** 3 */
			FedEx,
			/** 4 */
			UPS,
			/** 5 */
			Postal_Mail,
			/** 6 */
			Full_Load,
			/** 7 */
			Will_Call
		}
		enum Address2_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address2_FreightTermsCode {
			/** 1 */
			Default_Value
		}
		enum Address2_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum BusinessTypeCode {
			/** 1 */
			Default_Value
		}
		enum CustomerSizeCode {
			/** 1 */
			Default_Value
		}
		enum CustomerTypeCode {
			/** 1 */
			Competitor,
			/** 2 */
			Consultant,
			/** 3 */
			Customer,
			/** 4 */
			Investor,
			/** 5 */
			Partner,
			/** 6 */
			Influencer,
			/** 7 */
			Press,
			/** 8 */
			Prospect,
			/** 9 */
			Reseller,
			/** 10 */
			Supplier,
			/** 11 */
			Vendor,
			/** 12 */
			Other
		}
		enum IndustryCode {
			/** 1 */
			Accounting,
			/** 2 */
			Agriculture_and_Non_petrol_Natural_Resource_Extraction,
			/** 3 */
			Broadcasting_Printing_and_Publishing,
			/** 4 */
			Brokers,
			/** 5 */
			Building_Supply_Retail,
			/** 6 */
			Business_Services,
			/** 7 */
			Consulting,
			/** 8 */
			Consumer_Services,
			/** 9 */
			Design_Direction_and_Creative_Management,
			/** 10 */
			Distributors_Dispatchers_and_Processors,
			/** 11 */
			Doctors_Offices_and_Clinics,
			/** 12 */
			Durable_Manufacturing,
			/** 13 */
			Eating_and_Drinking_Places,
			/** 14 */
			Entertainment_Retail,
			/** 15 */
			Equipment_Rental_and_Leasing,
			/** 16 */
			Financial,
			/** 17 */
			Food_and_Tobacco_Processing,
			/** 18 */
			Inbound_Capital_Intensive_Processing,
			/** 19 */
			Inbound_Repair_and_Services,
			/** 20 */
			Insurance,
			/** 21 */
			Legal_Services,
			/** 22 */
			Non_Durable_Merchandise_Retail,
			/** 23 */
			Outbound_Consumer_Service,
			/** 24 */
			Petrochemical_Extraction_and_Distribution,
			/** 25 */
			Service_Retail,
			/** 26 */
			SIG_Affiliations,
			/** 27 */
			Social_Services,
			/** 28 */
			Special_Outbound_Trade_Contractors,
			/** 29 */
			Specialty_Realty,
			/** 30 */
			Transportation,
			/** 31 */
			Utility_Creation_and_Distribution,
			/** 32 */
			Vehicle_Retail,
			/** 33 */
			Wholesale
		}
		enum OwnershipCode {
			/** 1 */
			Public,
			/** 2 */
			Private,
			/** 3 */
			Subsidiary,
			/** 4 */
			Other
		}
		enum PaymentTermsCode {
			/** 1 */
			Net_30,
			/** 2 */
			_2_10_Net_30,
			/** 3 */
			Net_45,
			/** 4 */
			Net_60
		}
		enum PreferredAppointmentDayCode {
			/** 0 */
			Sunday,
			/** 1 */
			Monday,
			/** 2 */
			Tuesday,
			/** 3 */
			Wednesday,
			/** 4 */
			Thursday,
			/** 5 */
			Friday,
			/** 6 */
			Saturday
		}
		enum PreferredAppointmentTimeCode {
			/** 1 */
			Morning,
			/** 2 */
			Afternoon,
			/** 3 */
			Evening
		}
		enum PreferredContactMethodCode {
			/** 1 */
			Any,
			/** 2 */
			Email,
			/** 3 */
			Phone,
			/** 4 */
			Fax,
			/** 5 */
			Mail
		}
		enum ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum TerritoryCode {
			/** 1 */
			Default_Value
		}
        enum RollupState {
            /** 0 - Attribute value is yet to be calculated */
            NotCalculated,
            /** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
            Calculated,
            /** 2 - Attribute value calculation lead to overflow error */
            OverflowError,
            /** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
            OtherError,
            /** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
            RetryLimitExceeded,
            /** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
            HierarchicalRecursionLimitReached,
            /** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
            LoopDetected
        }
	}
}
//{'JsForm':['Account'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
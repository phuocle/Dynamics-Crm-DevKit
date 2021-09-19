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
		interface tab_AssetsAndLocationsTab_Sections {
			AssetsAndLocationsSection: DevKit.Controls.Section;
		}
		interface tab_DETAILS_TAB_Sections {
			BILLING: DevKit.Controls.Section;
			COMPANY_PROFILE: DevKit.Controls.Section;
			CONTACT_PREFERENCES: DevKit.Controls.Section;
			DETAILS_TAB_section_6: DevKit.Controls.Section;
			SHIPPING: DevKit.Controls.Section;
		}
		interface tab_documents_sharepoint_Sections {
			documents_sharepoint_section: DevKit.Controls.Section;
		}
		interface tab_FieldService_Sections {
			DETAILS_TAB_section_7: DevKit.Controls.Section;
			DETAILS_TAB_section_8: DevKit.Controls.Section;
			FieldService_section_3: DevKit.Controls.Section;
			FieldService_section_4: DevKit.Controls.Section;
		}
		interface tab_Pricing_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB_Sections {
			ACCOUNT_INFORMATION: DevKit.Controls.Section;
			ADDRESS: DevKit.Controls.Section;
			MapSection: DevKit.Controls.Section;
			SOCIAL_PANE_TAB: DevKit.Controls.Section;
			Summary_section_6: DevKit.Controls.Section;
			SUMMARY_TAB_section_6: DevKit.Controls.Section;
		}
		interface tab_urstab_Sections {
			tab_3_section_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
			urstab_section_general: DevKit.Controls.Section;
		}
		interface tab_AssetsAndLocationsTab extends DevKit.Controls.ITab {
			Section: tab_AssetsAndLocationsTab_Sections;
		}
		interface tab_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_DETAILS_TAB_Sections;
		}
		interface tab_documents_sharepoint extends DevKit.Controls.ITab {
			Section: tab_documents_sharepoint_Sections;
		}
		interface tab_FieldService extends DevKit.Controls.ITab {
			Section: tab_FieldService_Sections;
		}
		interface tab_Pricing extends DevKit.Controls.ITab {
			Section: tab_Pricing_Sections;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface tab_urstab extends DevKit.Controls.ITab {
			Section: tab_urstab_Sections;
		}
		interface Tabs {
			AssetsAndLocationsTab: tab_AssetsAndLocationsTab;
			DETAILS_TAB: tab_DETAILS_TAB;
			documents_sharepoint: tab_documents_sharepoint;
			FieldService: tab_FieldService;
			Pricing: tab_Pricing;
			SUMMARY_TAB: tab_SUMMARY_TAB;
			urstab: tab_urstab;
		}
		interface Body {
			Tab: Tabs;
			ActionCards: DevKit.Controls.ActionCards;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
			Address1_FreightTermsCode: DevKit.Controls.OptionSet;
			/** Type the latitude value for the primary address for use in mapping and other applications. */
			Address1_Latitude: DevKit.Controls.Double;
			/** Type the latitude value for the primary address for use in mapping and other applications. */
			Address1_Latitude_1: DevKit.Controls.Double;
			/** Type the first line of the primary address. */
			Address1_Line1: DevKit.Controls.String;
			/** Type the longitude value for the primary address for use in mapping and other applications. */
			Address1_Longitude: DevKit.Controls.Double;
			/** Type the longitude value for the primary address for use in mapping and other applications. */
			Address1_Longitude_1: DevKit.Controls.Double;
			/** Select a shipping method for deliveries sent to this address. */
			Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
			CreditLimit: DevKit.Controls.Money;
			/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
			CreditOnHold: DevKit.Controls.Boolean;
			/** Select the category that best describes the relationship between the account and your organization. */
			CustomerTypeCode: DevKit.Controls.OptionSet;
			/** Choose the default price list associated with the account to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders. */
			DefaultPriceLevelId: DevKit.Controls.Lookup;
			/** Choose the default price list associated with the account to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders. */
			DefaultPriceLevelId_1: DevKit.Controls.Lookup;
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
			/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
			IndustryCode: DevKit.Controls.OptionSet;
			mapcontrol: DevKit.Controls.Map;
			/** Reference to an other account to be used for billing (only to be used if billing account differs) */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Default Sales Tax Code */
			msdyn_SalesTaxCode: DevKit.Controls.Lookup;
			/** The Service Territory this account belongs to. This is used to optimize scheduling and routing */
			msdyn_ServiceTerritory: DevKit.Controls.Lookup;
			/** Select whether the account is tax exempt. */
			msdyn_TaxExempt: DevKit.Controls.Boolean;
			/** Shows the government tax exempt number. */
			msdyn_TaxExemptNumber: DevKit.Controls.String;
			/** Enter the travel charge to include on work orders. This value will be multiplied by the travel charge type. */
			msdyn_TravelCharge: DevKit.Controls.Money;
			/** Specify how travel is charged for this account. */
			msdyn_TravelChargeType: DevKit.Controls.OptionSet;
			msdyn_workhourtemplate: DevKit.Controls.Lookup;
			/** Shows the default instructions to show on new work orders. */
			msdyn_WorkOrderInstructions: DevKit.Controls.String;
			/** Captures the facebook id */
			msdyusd_Facebook: DevKit.Controls.String;
			/** Capture the twitter id */
			msdyusd_Twitter: DevKit.Controls.String;
			/** Type the company or business name. */
			Name: DevKit.Controls.String;
			/** Type the company or business name. */
			Name_1: DevKit.Controls.String;
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
			nav_msdyn_account_account_BillingAccount: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_accountpricelist_Account: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_actualfact_AccountCustomer: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_actualfact_AccountVendor: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_agreement_BillingAccount: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_agreement_ServiceAccount: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_customerasset_Account: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_payment_Account: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_project_Customer: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_purchaseorder_Vendor: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_rma_BillingAccount: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_rma_ServiceAccount: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_rmaproduct_Changeownership: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_rmaproduct_ReturntoVendor: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_rtv_Vendor: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_workorder_BillingAccount: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_workorder_ServiceAccount: DevKit.Controls.NavigationItem,
			nav_msdyn_account_msdyn_workorderresourcerestriction_Account: DevKit.Controls.NavigationItem,
			nav_msdyn_account_product_DefaultVendor: DevKit.Controls.NavigationItem,
			navActivities: DevKit.Controls.NavigationItem,
			navAddresses: DevKit.Controls.NavigationItem,
			navCampaignsInSFA: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navContacts: DevKit.Controls.NavigationItem,
			navEntitlement: DevKit.Controls.NavigationItem,
			navRelationships: DevKit.Controls.NavigationItem,
			navService: DevKit.Controls.NavigationItem,
			navSocialprofiles: DevKit.Controls.NavigationItem,
			navSubAccts: DevKit.Controls.NavigationItem
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
		interface Grid {
			Contacts: DevKit.Controls.Grid;
			PriceListsGrid: DevKit.Controls.Grid;
			Work_Orders: DevKit.Controls.Grid;
			DocumentsSubGrid: DevKit.Controls.Grid;
		}
	}
	class FormAccount extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Account
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Account */
		Body: DevKit.FormAccount.Body;
		/** The Header section of form Account */
		Header: DevKit.FormAccount.Header;
		/** The Navigation of form Account */
		Navigation: DevKit.FormAccount.Navigation;
		/** The QuickForm of form Account */
		QuickForm: DevKit.FormAccount.QuickForm;
		/** The Grid of form Account */
		Grid: DevKit.FormAccount.Grid;
		/** The SidePanes of form Account */
		SidePanes: DevKit.SidePanes;
	}
	class AccountApi {
		/**
		* DynamicsCrm.DevKit AccountApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Select a category to indicate whether the customer account is standard or preferred. */
		AccountCategoryCode: DevKit.WebApi.OptionSetValue;
		/** Select a classification code to indicate the potential value of the customer account based on the projected return on investment, cooperation level, sales cycle length or other criteria. */
		AccountClassificationCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the account. */
		AccountId: DevKit.WebApi.GuidValue;
		/** Type an ID number or code for the account to quickly search and identify the account in system views. */
		AccountNumber: DevKit.WebApi.StringValue;
		/** Select a rating to indicate the value of the customer account. */
		AccountRatingCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for address 1. */
		Address1_AddressId: DevKit.WebApi.GuidValue;
		/** Select the primary address type. */
		Address1_AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** Type the city for the primary address. */
		Address1_City: DevKit.WebApi.StringValue;
		/** Shows the complete primary address. */
		Address1_Composite: DevKit.WebApi.StringValueReadonly;
		/** Type the country or region for the primary address. */
		Address1_Country: DevKit.WebApi.StringValue;
		/** Type the county for the primary address. */
		Address1_County: DevKit.WebApi.StringValue;
		/** Type the fax number associated with the primary address. */
		Address1_Fax: DevKit.WebApi.StringValue;
		/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
		Address1_FreightTermsCode: DevKit.WebApi.OptionSetValue;
		/** Type the latitude value for the primary address for use in mapping and other applications. */
		Address1_Latitude: DevKit.WebApi.DoubleValue;
		/** Type the first line of the primary address. */
		Address1_Line1: DevKit.WebApi.StringValue;
		/** Type the second line of the primary address. */
		Address1_Line2: DevKit.WebApi.StringValue;
		/** Type the third line of the primary address. */
		Address1_Line3: DevKit.WebApi.StringValue;
		/** Type the longitude value for the primary address for use in mapping and other applications. */
		Address1_Longitude: DevKit.WebApi.DoubleValue;
		/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
		Address1_Name: DevKit.WebApi.StringValue;
		/** Type the ZIP Code or postal code for the primary address. */
		Address1_PostalCode: DevKit.WebApi.StringValue;
		/** Type the post office box number of the primary address. */
		Address1_PostOfficeBox: DevKit.WebApi.StringValue;
		/** Type the name of the main contact at the account's primary address. */
		Address1_PrimaryContactName: DevKit.WebApi.StringValue;
		/** Select a shipping method for deliveries sent to this address. */
		Address1_ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** Type the state or province of the primary address. */
		Address1_StateOrProvince: DevKit.WebApi.StringValue;
		/** Type the main phone number associated with the primary address. */
		Address1_Telephone1: DevKit.WebApi.StringValue;
		/** Type a second phone number associated with the primary address. */
		Address1_Telephone2: DevKit.WebApi.StringValue;
		/** Type a third phone number associated with the primary address. */
		Address1_Telephone3: DevKit.WebApi.StringValue;
		/** Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address1_UPSZone: DevKit.WebApi.StringValue;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address1_UTCOffset: DevKit.WebApi.IntegerValue;
		/** Unique identifier for address 2. */
		Address2_AddressId: DevKit.WebApi.GuidValue;
		/** Select the secondary address type. */
		Address2_AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** Type the city for the secondary address. */
		Address2_City: DevKit.WebApi.StringValue;
		/** Shows the complete secondary address. */
		Address2_Composite: DevKit.WebApi.StringValueReadonly;
		/** Type the country or region for the secondary address. */
		Address2_Country: DevKit.WebApi.StringValue;
		/** Type the county for the secondary address. */
		Address2_County: DevKit.WebApi.StringValue;
		/** Type the fax number associated with the secondary address. */
		Address2_Fax: DevKit.WebApi.StringValue;
		/** Select the freight terms for the secondary address to make sure shipping orders are processed correctly. */
		Address2_FreightTermsCode: DevKit.WebApi.OptionSetValue;
		/** Type the latitude value for the secondary address for use in mapping and other applications. */
		Address2_Latitude: DevKit.WebApi.DoubleValue;
		/** Type the first line of the secondary address. */
		Address2_Line1: DevKit.WebApi.StringValue;
		/** Type the second line of the secondary address. */
		Address2_Line2: DevKit.WebApi.StringValue;
		/** Type the third line of the secondary address. */
		Address2_Line3: DevKit.WebApi.StringValue;
		/** Type the longitude value for the secondary address for use in mapping and other applications. */
		Address2_Longitude: DevKit.WebApi.DoubleValue;
		/** Type a descriptive name for the secondary address, such as Corporate Headquarters. */
		Address2_Name: DevKit.WebApi.StringValue;
		/** Type the ZIP Code or postal code for the secondary address. */
		Address2_PostalCode: DevKit.WebApi.StringValue;
		/** Type the post office box number of the secondary address. */
		Address2_PostOfficeBox: DevKit.WebApi.StringValue;
		/** Type the name of the main contact at the account's secondary address. */
		Address2_PrimaryContactName: DevKit.WebApi.StringValue;
		/** Select a shipping method for deliveries sent to this address. */
		Address2_ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** Type the state or province of the secondary address. */
		Address2_StateOrProvince: DevKit.WebApi.StringValue;
		/** Type the main phone number associated with the secondary address. */
		Address2_Telephone1: DevKit.WebApi.StringValue;
		/** Type a second phone number associated with the secondary address. */
		Address2_Telephone2: DevKit.WebApi.StringValue;
		/** Type a third phone number associated with the secondary address. */
		Address2_Telephone3: DevKit.WebApi.StringValue;
		/** Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address2_UPSZone: DevKit.WebApi.StringValue;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address2_UTCOffset: DevKit.WebApi.IntegerValue;
		/** For system use only. */
		Aging30: DevKit.WebApi.MoneyValueReadonly;
		/** The base currency equivalent of the aging 30 field. */
		Aging30_Base: DevKit.WebApi.MoneyValueReadonly;
		/** For system use only. */
		Aging60: DevKit.WebApi.MoneyValueReadonly;
		/** The base currency equivalent of the aging 60 field. */
		Aging60_Base: DevKit.WebApi.MoneyValueReadonly;
		/** For system use only. */
		Aging90: DevKit.WebApi.MoneyValueReadonly;
		/** The base currency equivalent of the aging 90 field. */
		Aging90_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the legal designation or other business type of the account for contracts or reporting purposes. */
		BusinessTypeCode: DevKit.WebApi.OptionSetValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the external party who created the record. */
		CreatedByExternalParty: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
		CreditLimit: DevKit.WebApi.MoneyValue;
		/** Shows the credit limit converted to the system's default base currency for reporting purposes. */
		CreditLimit_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
		CreditOnHold: DevKit.WebApi.BooleanValue;
		/** Select the size category or range of the account for segmentation and reporting purposes. */
		CustomerSizeCode: DevKit.WebApi.OptionSetValue;
		/** Select the category that best describes the relationship between the account and your organization. */
		CustomerTypeCode: DevKit.WebApi.OptionSetValue;
		/** Choose the default price list associated with the account to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders. */
		DefaultPriceLevelId: DevKit.WebApi.LookupValue;
		/** Type additional information to describe the account, such as an excerpt from the company's website. */
		Description: DevKit.WebApi.StringValue;
		/** Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email. */
		DoNotBulkEMail: DevKit.WebApi.BooleanValue;
		/** Select whether the account allows bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but will be excluded from the postal mail. */
		DoNotBulkPostalMail: DevKit.WebApi.BooleanValue;
		/** Select whether the account allows direct email sent from Microsoft Dynamics 365. */
		DoNotEMail: DevKit.WebApi.BooleanValue;
		/** Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns. */
		DoNotFax: DevKit.WebApi.BooleanValue;
		/** Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns. */
		DoNotPhone: DevKit.WebApi.BooleanValue;
		/** Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns. */
		DoNotPostalMail: DevKit.WebApi.BooleanValue;
		/** Select whether the account accepts marketing materials, such as brochures or catalogs. */
		DoNotSendMM: DevKit.WebApi.BooleanValue;
		/** Type the primary email address for the account. */
		EMailAddress1: DevKit.WebApi.StringValue;
		/** Type the secondary email address for the account. */
		EMailAddress2: DevKit.WebApi.StringValue;
		/** Type an alternate email address for the account. */
		EMailAddress3: DevKit.WebApi.StringValue;
		/** Shows the default image for the record. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Type the fax number for the account. */
		Fax: DevKit.WebApi.StringValue;
		/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account. */
		FollowEmail: DevKit.WebApi.BooleanValue;
		/** Type the URL for the account's FTP site to enable users to access data and share documents. */
		FtpSiteURL: DevKit.WebApi.StringValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
		IndustryCode: DevKit.WebApi.OptionSetValue;
		IsPrivate: DevKit.WebApi.BooleanValueReadonly;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the date when the account was last included in a marketing campaign or quick campaign. */
		LastUsedInCampaign_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type the market capitalization of the account to identify the company's equity, used as an indicator in financial performance analysis. */
		MarketCap: DevKit.WebApi.MoneyValue;
		/** Shows the market capitalization converted to the system's default base currency. */
		MarketCap_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Whether is only for marketing */
		MarketingOnly: DevKit.WebApi.BooleanValue;
		MasterAccountIdName: DevKit.WebApi.StringValueReadonly;
		/** Shows the master account that the account was merged with. */
		MasterId: DevKit.WebApi.LookupValueReadonly;
		/** Shows whether the account has been merged with another account. */
		Merged: DevKit.WebApi.BooleanValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the external party who modified the record. */
		ModifiedByExternalParty: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Reference to an other account to be used for billing (only to be used if billing account differs) */
		msdyn_BillingAccount: DevKit.WebApi.LookupValue;
		/** External Account ID from other systems. */
		msdyn_externalaccountid: DevKit.WebApi.StringValue;
		msdyn_PreferredResource: DevKit.WebApi.LookupValue;
		/** Default Sales Tax Code */
		msdyn_SalesTaxCode: DevKit.WebApi.LookupValue;
		/** The Service Territory this account belongs to. This is used to optimize scheduling and routing */
		msdyn_ServiceTerritory: DevKit.WebApi.LookupValue;
		/** Select whether the account is tax exempt. */
		msdyn_TaxExempt: DevKit.WebApi.BooleanValue;
		/** Shows the government tax exempt number. */
		msdyn_TaxExemptNumber: DevKit.WebApi.StringValue;
		/** Enter the travel charge to include on work orders. This value will be multiplied by the travel charge type. */
		msdyn_TravelCharge: DevKit.WebApi.MoneyValue;
		/** Value of the Travel Charge in base currency. */
		msdyn_travelcharge_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Specify how travel is charged for this account. */
		msdyn_TravelChargeType: DevKit.WebApi.OptionSetValue;
		msdyn_workhourtemplate: DevKit.WebApi.LookupValue;
		/** Shows the default instructions to show on new work orders. */
		msdyn_WorkOrderInstructions: DevKit.WebApi.StringValue;
		/** Captures the facebook id */
		msdyusd_Facebook: DevKit.WebApi.StringValue;
		/** Capture the twitter id */
		msdyusd_Twitter: DevKit.WebApi.StringValue;
		/** Type the company or business name. */
		Name: DevKit.WebApi.StringValue;
		/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
		NumberOfEmployees: DevKit.WebApi.IntegerValue;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Number of open opportunities against an account and its child accounts. */
		OpenDeals: DevKit.WebApi.IntegerValueReadonly;
		/** Last Updated time of rollup field Open Deals. */
		OpenDeals_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** State of rollup field Open Deals. */
		OpenDeals_State: DevKit.WebApi.IntegerValueReadonly;
		/** Sum of open revenue against an account and its child accounts. */
		OpenRevenue: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Open Revenue in base currency. */
		OpenRevenue_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Last Updated time of rollup field Open Revenue. */
		OpenRevenue_Date_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** State of rollup field Open Revenue. */
		OpenRevenue_State: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the lead that the account was created from if the account was created by converting a lead in Microsoft Dynamics 365. This is used to relate the account to data on the originating lead for use in reporting and analytics. */
		OriginatingLeadId: DevKit.WebApi.LookupValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Select the account's ownership structure, such as public or private. */
		OwnershipCode: DevKit.WebApi.OptionSetValue;
		/** Shows the business unit that the record owner belongs to. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the account. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the account. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Choose the parent account associated with this account to show parent and child businesses in reporting and analytics. */
		ParentAccountId: DevKit.WebApi.LookupValue;
		/** For system use only. Legacy Microsoft Dynamics CRM 3.0 workflow data. */
		ParticipatesInWorkflow: DevKit.WebApi.BooleanValue;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: DevKit.WebApi.OptionSetValue;
		/** Select the preferred day of the week for service appointments. */
		PreferredAppointmentDayCode: DevKit.WebApi.OptionSetValue;
		/** Select the preferred time of day for service appointments. */
		PreferredAppointmentTimeCode: DevKit.WebApi.OptionSetValue;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: DevKit.WebApi.OptionSetValue;
		/** Choose the account's preferred service facility or equipment to make sure services are scheduled correctly for the customer. */
		PreferredEquipmentId: DevKit.WebApi.LookupValue;
		/** Choose the account's preferred service for reference when you schedule service activities. */
		PreferredServiceId: DevKit.WebApi.LookupValue;
		/** Choose the preferred service representative for reference when you schedule service activities for the account. */
		PreferredSystemUserId: DevKit.WebApi.LookupValue;
		/** Choose the primary contact for the account to provide quick access to contact details. */
		PrimaryContactId: DevKit.WebApi.LookupValue;
		/** Primary Satori ID for Account */
		PrimarySatoriId: DevKit.WebApi.StringValue;
		/** Primary Twitter ID for Account */
		PrimaryTwitterId: DevKit.WebApi.StringValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
		Revenue: DevKit.WebApi.MoneyValue;
		/** Shows the annual revenue converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		Revenue_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Type the number of shares available to the public for the account. This number is used as an indicator in financial performance analysis. */
		SharesOutstanding: DevKit.WebApi.IntegerValue;
		/** Select a shipping method for deliveries sent to the account's address to designate the preferred carrier or other delivery option. */
		ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. */
		SIC: DevKit.WebApi.StringValue;
		/** Choose the service level agreement (SLA) that you want to apply to the Account record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the account is active or inactive. Inactive accounts are read-only and can't be edited unless they are reactivated. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the account's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type the stock exchange at which the account is listed to track their stock and financial performance of the company. */
		StockExchange: DevKit.WebApi.StringValue;
		/** Number of users or conversations followed the record */
		TeamsFollowed: DevKit.WebApi.IntegerValue;
		/** Type the main phone number for this account. */
		Telephone1: DevKit.WebApi.StringValue;
		/** Type a second phone number for this account. */
		Telephone2: DevKit.WebApi.StringValue;
		/** Type a third phone number for this account. */
		Telephone3: DevKit.WebApi.StringValue;
		/** Select a region or territory for the account for use in segmentation and analysis. */
		TerritoryCode: DevKit.WebApi.OptionSetValue;
		/** Choose the sales region or territory for the account to make sure the account is assigned to the correct representative and for use in segmentation and analysis. */
		TerritoryId: DevKit.WebApi.LookupValue;
		/** Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
		TickerSymbol: DevKit.WebApi.StringValue;
		/** Total time spent for emails (read and write) and meetings by me in relation to account record. */
		TimeSpentByMeOnEmailAndMeetings: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the account. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Type the account's website URL to get quick details about the company profile. */
		WebSiteURL: DevKit.WebApi.StringValue;
		/** Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
		YomiName: DevKit.WebApi.StringValue;
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
			/** 4 */
			Other,
			/** 3 */
			Primary,
			/** 2 */
			Ship_To
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
			/** 6 */
			Full_Load,
			/** 5 */
			Postal_Mail,
			/** 4 */
			UPS,
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
			/** 6 */
			Influencer,
			/** 4 */
			Investor,
			/** 12 */
			Other,
			/** 5 */
			Partner,
			/** 7 */
			Press,
			/** 8 */
			Prospect,
			/** 9 */
			Reseller,
			/** 10 */
			Supplier,
			/** 11 */
			Vendor
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
		enum msdyn_TravelChargeType {
			/** 690970002 */
			Fixed,
			/** 690970000 */
			Hourly,
			/** 690970001 */
			Mileage,
			/** 690970003 */
			None
		}
		enum OwnershipCode {
			/** 4 */
			Other,
			/** 2 */
			Private,
			/** 1 */
			Public,
			/** 3 */
			Subsidiary
		}
		enum PaymentTermsCode {
			/** 2 */
			_2_10_Net_30,
			/** 1 */
			Net_30,
			/** 3 */
			Net_45,
			/** 4 */
			Net_60
		}
		enum PreferredAppointmentDayCode {
			/** 5 */
			Friday,
			/** 1 */
			Monday,
			/** 6 */
			Saturday,
			/** 0 */
			Sunday,
			/** 4 */
			Thursday,
			/** 2 */
			Tuesday,
			/** 3 */
			Wednesday
		}
		enum PreferredAppointmentTimeCode {
			/** 2 */
			Afternoon,
			/** 3 */
			Evening,
			/** 1 */
			Morning
		}
		enum PreferredContactMethodCode {
			/** 1 */
			Any,
			/** 2 */
			Email,
			/** 4 */
			Fax,
			/** 5 */
			Mail,
			/** 3 */
			Phone
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
//{'JsForm':['Account'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.13.33','JsFormVersion':'v2'}
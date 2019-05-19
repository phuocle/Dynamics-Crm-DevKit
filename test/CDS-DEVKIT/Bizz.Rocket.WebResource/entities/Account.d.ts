///<reference path='devkit.d.ts' />
declare namespace Rocket {
    class AccountApi {
        /**
         * PL.DynamicsCrm.DevKit AccountApi
         * @param entity The entity object
         */
		constructor(entity?: any);
		/**
		 * Get the value of alias.
		 * @param alias the alias value.
		 * @param isMultiOptionSet true if the alias is multi optionset.
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias.
		 * @param alias the alias value.
		 * @param isMultiOptionSet true if the alias is multi optionset.
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object. */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** A collection OptionSet of Account enttiy */
        //OptionSet: AccountOptionSet;
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
		/** ReadOnly - Shows the complete primary address. */
		Address1_Composite: DevKit.WebApi.StringValue;
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
		/** ReadOnly - Shows the complete secondary address. */
		Address2_Composite: DevKit.WebApi.StringValue;
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
		/** ReadOnly - For system use only. */
		Aging30: DevKit.WebApi.MoneyValue;
		/** ReadOnly - The base currency equivalent of the aging 30 field. */
		Aging30_Base: DevKit.WebApi.MoneyValue;
		/** ReadOnly - For system use only. */
		Aging60: DevKit.WebApi.MoneyValue;
		/** ReadOnly - The base currency equivalent of the aging 60 field. */
		Aging60_Base: DevKit.WebApi.MoneyValue;
		/** ReadOnly - For system use only. */
		Aging90: DevKit.WebApi.MoneyValue;
		/** ReadOnly - The base currency equivalent of the aging 90 field. */
		Aging90_Base: DevKit.WebApi.MoneyValue;
		/** Select the legal designation or other business type of the account for contracts or reporting purposes. */
		BusinessTypeCode: DevKit.WebApi.OptionSetValue;
		/** ReadOnly - Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the external party who created the record. */
		CreatedByExternalParty: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValue;
		/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
		CreditLimit: DevKit.WebApi.MoneyValue;
		/** ReadOnly - Shows the credit limit converted to the system's default base currency for reporting purposes. */
		CreditLimit_Base: DevKit.WebApi.MoneyValue;
		/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
		CreditOnHold: DevKit.WebApi.BooleanValue;
		/** Select the size category or range of the account for segmentation and reporting purposes. */
		CustomerSizeCode: DevKit.WebApi.OptionSetValue;
		/** Select the category that best describes the relationship between the account and your organization. */
		CustomerTypeCode: DevKit.WebApi.OptionSetValue;
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
		/** ReadOnly */
		EntityImage_Timestamp: DevKit.WebApi.BigIntValue;
		/** ReadOnly */
		EntityImage_URL: DevKit.WebApi.StringValue;
		/** ReadOnly - For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValue;
		/** ReadOnly - Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValue;
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
		/** ReadOnly */
		IsPrivate: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the date when the account was last included in a marketing campaign or quick campaign. */
		LastUsedInCampaign_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type the market capitalization of the account to identify the company's equity, used as an indicator in financial performance analysis. */
		MarketCap: DevKit.WebApi.MoneyValue;
		/** ReadOnly - Shows the market capitalization converted to the system's default base currency. */
		MarketCap_Base: DevKit.WebApi.MoneyValue;
		/** Whether is only for marketing */
		MarketingOnly: DevKit.WebApi.BooleanValue;
		/** ReadOnly */
		MasterAccountIdName: DevKit.WebApi.StringValue;
		/** ReadOnly - Shows the master account that the account was merged with. */
		MasterId: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows whether the account has been merged with another account. */
		Merged: DevKit.WebApi.BooleanValue;
		/** ReadOnly - Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the external party who modified the record. */
		ModifiedByExternalParty: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValue;
		/** Type the company or business name. */
		Name: DevKit.WebApi.StringValue;
		/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
		NumberOfEmployees: DevKit.WebApi.IntegerValue;
		/** ReadOnly - Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team. */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Select the account's ownership structure, such as public or private. */
		OwnershipCode: DevKit.WebApi.OptionSetValue;
		/** ReadOnly - Shows the business unit that the record owner belongs to. */
		OwningBusinessUnit: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the team who owns the account. */
		OwningTeam: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the user who owns the account. */
		OwningUser: DevKit.WebApi.LookupValue;
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
		/** ReadOnly - Shows the annual revenue converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		Revenue_Base: DevKit.WebApi.MoneyValue;
		/** Type the number of shares available to the public for the account. This number is used as an indicator in financial performance analysis. */
		SharesOutstanding: DevKit.WebApi.IntegerValue;
		/** Select a shipping method for deliveries sent to the account's address to designate the preferred carrier or other delivery option. */
		ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. */
		SIC: DevKit.WebApi.StringValue;
		/** Choose the service level agreement (SLA) that you want to apply to the Account record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** ReadOnly - Last SLA that was applied to this case. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValue;
		/** ReadOnly */
		SLAName: DevKit.WebApi.StringValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the account is active or inactive. Inactive accounts are read-only and can't be edited unless they are reactivated. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the account's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type the stock exchange at which the account is listed to track their stock and financial performance of the company. */
		StockExchange: DevKit.WebApi.StringValue;
		/** Type the main phone number for this account. */
		Telephone1: DevKit.WebApi.StringValue;
		/** Type a second phone number for this account. */
		Telephone2: DevKit.WebApi.StringValue;
		/** Type a third phone number for this account. */
		Telephone3: DevKit.WebApi.StringValue;
		/** Select a region or territory for the account for use in segmentation and analysis. */
		TerritoryCode: DevKit.WebApi.OptionSetValue;
		/** Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
		TickerSymbol: DevKit.WebApi.StringValue;
		/** ReadOnly - Total time spent for emails (read and write) and meetings by me in relation to account record. */
		TimeSpentByMeOnEmailAndMeetings: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** ReadOnly - Version number of the account. */
		VersionNumber: DevKit.WebApi.BigIntValue;
		/** Type the account's website URL to get quick details about the company profile. */
		WebSiteURL: DevKit.WebApi.StringValue;
		/** Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
		YomiName: DevKit.WebApi.StringValue;
    }
    class FormAccount {
        /**
         * PL.DynamicsCrm.DevKit form Account.
         * @param executionContext the execution context.
         * @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource".
         */
        constructor(executionContext: any, defaultWebResourceName?: string);
        /** Utility functions/methods/objects for Dynamics 365 from. */
        Utility: DevKit.Form.Utility;
        ///** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement. */
        WebApi: DevKit.Form.WebApi;
        /**
        * Adds a function to be called when the record is saved.
        * @param successCallback The function to be executed when the record is saved. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function.
        * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/addonsave
        */
        AddOnSave(successCallback: (executionContext: any) => void): void;
        ///**
        // *  The Attributes collections of form Account.
        // *  @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes
        // * */
        //Attributes: DevKit.Form.Collections;
        ///** The body of form Account. */
        ////Body: FormAccountBody;
    }
}
declare namespace OptionSet {
    namespace AccountOptionSet {
        enum AccountCategoryCode {
            /** 1 */
            Preferred_Customer,
            /** 2 */
            Standard
        }
    }
}
//{'JsForm':['Account'],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}
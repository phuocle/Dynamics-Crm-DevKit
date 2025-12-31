//@ts-check
declare namespace Tfsvn {
	/**
	 * DynamicsCrm.DevKit AccountApi
	 * Represents a customer or potential customer account in the system.
	 */
	interface AccountApi {
		/**
		 * DynamicsCrm.DevKit AccountApi
		 * @param entity The entity object from OData response
		 */
		new (entity?: Record<string, any>): AccountApi;

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

		/** The entity object for Create/Update operations */
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data */
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag used for caching and concurrency control */
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
		/** Choose the default price list associated with the account to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders. */
		DefaultPriceLevelId: string | null;
		/** Type additional information to describe the account, such as an excerpt from the company's website. */
		Description: string | null;
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
		hs_debug_context: string | null;
		readonly hs_no_active_case_rollup: number | null;
		/** Last Updated time of rollup field No. of Active Case. */
		readonly hs_no_active_case_rollup_Date_UtcDateAndTime: Date | null;
		/** State of rollup field No. of Active Case. */
		readonly hs_no_active_case_rollup_State: number | null;
		readonly hs_no_resolved_case_rollup: number | null;
		/** Last Updated time of rollup field No. of Resolved Case. */
		readonly hs_no_resolved_case_rollup_Date_UtcDateAndTime: Date | null;
		/** State of rollup field No. of Resolved Case. */
		readonly hs_no_resolved_case_rollup_State: number | null;
		hs_tax_id: string | null;
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
		msdyn_accountkpiid: string | null;
		/** Describes whether account is opted out or not */
		msdyn_gdproptout: boolean | null;
		/** Indicates the primary time zone that the client works on. */
		msdyn_PrimaryTimeZone: number | null;		/** Sales Acceleration Insights ID */
		msdyn_salesaccelerationinsightid: string | null;
		/** Unique identifier for Segment associated with account. */
		msdyn_segmentid: string | null;
		/** Type the company or business name. */
		Name: string | null;
		/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
		NumberOfEmployees: number | null;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number | null;
		/** Number of open opportunities against an account and its child accounts. */
		readonly OpenDeals: number | null;
		/** Last Updated time of rollup field Open Deals. */
		readonly OpenDeals_Date_UtcDateAndTime: Date | null;
		/** State of rollup field Open Deals. */
		readonly OpenDeals_State: number | null;
		/** Sum of open revenue against an account and its child accounts. */
		readonly OpenRevenue: number | null;
		/** Value of the Open Revenue in base currency. */
		readonly OpenRevenue_Base: number | null;
		/** Last Updated time of rollup field Open Revenue. */
		readonly OpenRevenue_Date_UtcDateAndTime: Date | null;
		/** State of rollup field Open Revenue. */
		readonly OpenRevenue_State: number | null;
		/** Shows the lead that the account was created from if the account was created by converting a lead in Microsoft Dynamics 365. This is used to relate the account to data on the originating lead for use in reporting and analytics. */
		OriginatingLeadId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Select the account's ownership structure, such as public or private. */
		OwnershipCode: OptionSet.Account.OwnershipCode | null;/** Shows the business unit that the record owner belongs to. */
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
		/** Choose the account's preferred service facility or equipment to make sure services are scheduled correctly for the customer. */
		PreferredEquipmentId: string | null;
		/** Choose the account's preferred service for reference when you schedule service activities. */
		PreferredServiceId: string | null;
		/** Choose the preferred service representative for reference when you schedule service activities for the account. */
		PreferredSystemUserId: string | null;
		/** Choose the primary contact for the account to provide quick access to contact details. */
		PrimaryContactId: string | null;		/** Primary Satori ID for Account */
		PrimarySatoriId: string | null;/** Primary Twitter ID for Account */
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
		StageId: string | null;		/** Shows whether the account is active or inactive. Inactive accounts are read-only and can't be edited unless they are reactivated. */
		StateCode: OptionSet.Account.StateCode | null;
		/** Select the account's status. */
		StatusCode: OptionSet.Account.StatusCode | null;
		/** Type the stock exchange at which the account is listed to track their stock and financial performance of the company. */
		StockExchange: string | null;
		/** Number of users or conversations followed the record */
		TeamsFollowed: number | null;
		/** Update to get latest customer information from CORE-System */
		Telephone1: string | null;
		/** Type a second phone number for this account. */
		Telephone2: string | null;
		/** Type a third phone number for this account. */
		Telephone3: string | null;
		/** Select a region or territory for the account for use in segmentation and analysis. */
		TerritoryCode: OptionSet.Account.TerritoryCode | null;
		/** Choose the sales region or territory for the account to make sure the account is assigned to the correct representative and for use in segmentation and analysis. */
		TerritoryId: string | null;
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
			/** Choose the default price list associated with the account to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders. */
			readonly DefaultPriceLevelId: string;
			/** Type additional information to describe the account, such as an excerpt from the company's website. */
			readonly Description: string;
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
			readonly hs_debug_context: string;
			readonly hs_no_active_case_rollup: string;
			/** Last Updated time of rollup field No. of Active Case. */
			readonly hs_no_active_case_rollup_Date_UtcDateAndTime: string;
			/** State of rollup field No. of Active Case. */
			readonly hs_no_active_case_rollup_State: string;
			readonly hs_no_resolved_case_rollup: string;
			/** Last Updated time of rollup field No. of Resolved Case. */
			readonly hs_no_resolved_case_rollup_Date_UtcDateAndTime: string;
			/** State of rollup field No. of Resolved Case. */
			readonly hs_no_resolved_case_rollup_State: string;
			readonly hs_tax_id: string;
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
			readonly msdyn_accountkpiid: string;
			/** Describes whether account is opted out or not */
			readonly msdyn_gdproptout: string;
			/** Indicates the primary time zone that the client works on. */
			readonly msdyn_PrimaryTimeZone: string;
			/** Sales Acceleration Insights ID */
			readonly msdyn_salesaccelerationinsightid: string;
			/** Unique identifier for Segment associated with account. */
			readonly msdyn_segmentid: string;
			/** Type the company or business name. */
			readonly Name: string;
			/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
			readonly NumberOfEmployees: string;
			/** Shows how long, in minutes, that the record was on hold. */
			readonly OnHoldTime: string;
			/** Number of open opportunities against an account and its child accounts. */
			readonly OpenDeals: string;
			/** Last Updated time of rollup field Open Deals. */
			readonly OpenDeals_Date_UtcDateAndTime: string;
			/** State of rollup field Open Deals. */
			readonly OpenDeals_State: string;
			/** Sum of open revenue against an account and its child accounts. */
			readonly OpenRevenue: string;
			/** Value of the Open Revenue in base currency. */
			readonly OpenRevenue_Base: string;
			/** Last Updated time of rollup field Open Revenue. */
			readonly OpenRevenue_Date_UtcDateAndTime: string;
			/** State of rollup field Open Revenue. */
			readonly OpenRevenue_State: string;
			/** Shows the lead that the account was created from if the account was created by converting a lead in Microsoft Dynamics 365. This is used to relate the account to data on the originating lead for use in reporting and analytics. */
			readonly OriginatingLeadId: string;
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
			/** Choose the account's preferred service facility or equipment to make sure services are scheduled correctly for the customer. */
			readonly PreferredEquipmentId: string;
			/** Choose the account's preferred service for reference when you schedule service activities. */
			readonly PreferredServiceId: string;
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
			/** Number of users or conversations followed the record */
			readonly TeamsFollowed: string;
			/** Update to get latest customer information from CORE-System */
			readonly Telephone1: string;
			/** Type a second phone number for this account. */
			readonly Telephone2: string;
			/** Type a third phone number for this account. */
			readonly Telephone3: string;
			/** Select a region or territory for the account for use in segmentation and analysis. */
			readonly TerritoryCode: string;
			/** Choose the sales region or territory for the account to make sure the account is assigned to the correct representative and for use in segmentation and analysis. */
			readonly TerritoryId: string;
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
			readonly YomiName: string;		}
	}
}

/**
 * Option Set definitions for Account entity
 * Contains all the picklist/option set values used in the Account entity
 */
declare namespace OptionSet {
	namespace Account {
		/**
		 * Account Category Code - Indicates whether the customer account is standard or preferred
		 */
		enum AccountCategoryCode {
			/** Preferred Customer */
			Preferred_Customer = 1,
			/** Standard */
			Standard = 2
		}

		/**
		 * Account Classification Code - Indicates the potential value of the customer account
		 */
		enum AccountClassificationCode {
			/** Default Value */
			Default_Value = 1
		}

		/**
		 * Account Rating Code - Rating to indicate the value of the customer account
		 */
		enum AccountRatingCode {
			/** Default Value */
			Default_Value = 1
		}

		/**
		 * Address1 Address Type Code - Primary address type
		 */
		enum Address1_AddressTypeCode {
			/** Bill To */
			Bill_To = 1,
			/** Other */
			Other = 4,
			/** Primary */
			Primary = 3,
			/** Ship To */
			Ship_To = 2
		}

		/**
		 * Address1 Freight Terms Code - Freight terms for the primary address
		 */
		enum Address1_FreightTermsCode {
			/** FOB */
			FOB = 1,
			/** No Charge */
			No_Charge = 2
		}

		/**
		 * Address1 Shipping Method Code - Shipping method for deliveries to primary address
		 */
		enum Address1_ShippingMethodCode {
			/** Airborne */
			Airborne = 1,
			/** DHL */
			DHL = 2,
			/** FedEx */
			FedEx = 3,
			/** Full Load */
			Full_Load = 6,
			/** Postal Mail */
			Postal_Mail = 5,
			/** UPS */
			UPS = 4,
			/** Will Call */
			Will_Call = 7
		}

		/**
		 * Address2 Address Type Code - Secondary address type
		 */
		enum Address2_AddressTypeCode {
			/** Default Value */
			Default_Value = 1
		}

		/**
		 * Address2 Freight Terms Code - Freight terms for the secondary address
		 */
		enum Address2_FreightTermsCode {
			/** Default Value */
			Default_Value = 1
		}

		/**
		 * Address2 Shipping Method Code - Shipping method for deliveries to secondary address
		 */
		enum Address2_ShippingMethodCode {
			/** Default Value */
			Default_Value = 1
		}

		/**
		 * Business Type Code - Legal designation or business type of the account
		 */
		enum BusinessTypeCode {
			/** Default Value */
			Default_Value = 1
		}

		/**
		 * Customer Size Code - Size category or range of the account for segmentation
		 */
		enum CustomerSizeCode {
			/** Default Value */
			Default_Value = 1
		}

		/**
		 * Customer Type Code - Category that describes the relationship between the account and organization
		 */
		enum CustomerTypeCode {
			/** Competitor */
			Competitor = 1,
			/** Consultant */
			Consultant = 2,
			/** Customer */
			Customer = 3,
			/** Influencer */
			Influencer = 6,
			/** Investor */
			Investor = 4,
			/** Other */
			Other = 12,
			/** Partner */
			Partner = 5,
			/** Press */
			Press = 7,
			/** Prospect */
			Prospect = 8,
			/** Reseller */
			Reseller = 9,
			/** Supplier */
			Supplier = 10,
			/** Vendor */
			Vendor = 11
		}

		/**
		 * Industry Code - Account's primary industry for marketing segmentation and demographic analysis
		 */
		enum IndustryCode {
			/** Accounting */
			Accounting = 1,
			/** Agriculture and Non-petrol Natural Resource Extraction */
			Agriculture_and_Non_petrol_Natural_Resource_Extraction = 2,
			/** Broadcasting Printing and Publishing */
			Broadcasting_Printing_and_Publishing = 3,
			/** Brokers */
			Brokers = 4,
			/** Building Supply Retail */
			Building_Supply_Retail = 5,
			/** Business Services */
			Business_Services = 6,
			/** Consulting */
			Consulting = 7,
			/** Consumer Services */
			Consumer_Services = 8,
			/** Design Direction and Creative Management */
			Design_Direction_and_Creative_Management = 9,
			/** Distributors Dispatchers and Processors */
			Distributors_Dispatchers_and_Processors = 10,
			/** Doctors Offices and Clinics */
			Doctors_Offices_and_Clinics = 11,
			/** Durable Manufacturing */
			Durable_Manufacturing = 12,
			/** Eating and Drinking Places */
			Eating_and_Drinking_Places = 13,
			/** Entertainment Retail */
			Entertainment_Retail = 14,
			/** Equipment Rental and Leasing */
			Equipment_Rental_and_Leasing = 15,
			/** Financial */
			Financial = 16,
			/** Food and Tobacco Processing */
			Food_and_Tobacco_Processing = 17,
			/** Inbound Capital Intensive Processing */
			Inbound_Capital_Intensive_Processing = 18,
			/** Inbound Repair and Services */
			Inbound_Repair_and_Services = 19,
			/** Insurance */
			Insurance = 20,
			/** Legal Services */
			Legal_Services = 21,
			/** Non Durable Merchandise Retail */
			Non_Durable_Merchandise_Retail = 22,
			/** Outbound Consumer Service */
			Outbound_Consumer_Service = 23,
			/** Petrochemical Extraction and Distribution */
			Petrochemical_Extraction_and_Distribution = 24,
			/** Service Retail */
			Service_Retail = 25,
			/** SIG Affiliations */
			SIG_Affiliations = 26,
			/** Social Services */
			Social_Services = 27,
			/** Special Outbound Trade Contractors */
			Special_Outbound_Trade_Contractors = 28,
			/** Specialty Realty */
			Specialty_Realty = 29,
			/** Transportation */
			Transportation = 30,
			/** Utility Creation and Distribution */
			Utility_Creation_and_Distribution = 31,
			/** Vehicle Retail */
			Vehicle_Retail = 32,
			/** Wholesale */
			Wholesale = 33
		}

		/**
		 * Ownership Code - Account's ownership structure
		 */
		enum OwnershipCode {
			/** Other */
			Other = 4,
			/** Private */
			Private = 2,
			/** Public */
			Public = 1,
			/** Subsidiary */
			Subsidiary = 3
		}

		/**
		 * Payment Terms Code - Payment terms for the account
		 */
		enum PaymentTermsCode {
			/** 2% 10, Net 30 */
			_2_10_Net_30 = 2,
			/** Net 30 */
			Net_30 = 1,
			/** Net 45 */
			Net_45 = 3,
			/** Net 60 */
			Net_60 = 4
		}

		/**
		 * Preferred Appointment Day Code - Preferred day of the week for service appointments
		 */
		enum PreferredAppointmentDayCode {
			/** Friday */
			Friday = 5,
			/** Monday */
			Monday = 1,
			/** Saturday */
			Saturday = 6,
			/** Sunday */
			Sunday = 0,
			/** Thursday */
			Thursday = 4,
			/** Tuesday */
			Tuesday = 2,
			/** Wednesday */
			Wednesday = 3
		}

		/**
		 * Preferred Appointment Time Code - Preferred time of day for service appointments
		 */
		enum PreferredAppointmentTimeCode {
			/** Afternoon */
			Afternoon = 2,
			/** Evening */
			Evening = 3,
			/** Morning */
			Morning = 1
		}

		/**
		 * Preferred Contact Method Code - Preferred method of contact
		 */
		enum PreferredContactMethodCode {
			/** Any */
			Any = 1,
			/** Email */
			Email = 2,
			/** Fax */
			Fax = 4,
			/** Mail */
			Mail = 5,
			/** Phone */
			Phone = 3
		}

		/**
		 * Shipping Method Code - Default shipping method for the account
		 */
		enum ShippingMethodCode {
			/** Default Value */
			Default_Value = 1
		}

		/**
		 * State Code - Shows whether the account is active or inactive
		 */
		enum StateCode {
			/** Active */
			Active = 0,
			/** Inactive */
			Inactive = 1
		}

		/**
		 * Status Code - Account's status
		 */
		enum StatusCode {
			/** Active */
			Active = 1,
			/** Inactive */
			Inactive = 2
		}

		/**
		 * Territory Code - Region or territory for the account
		 */
		enum TerritoryCode {
			/** Default Value */
			Default_Value = 1
		}

		/**
		 * Rollup State - State of rollup field calculations
		 */
		enum RollupState {
			/** Attribute value is yet to be calculated */
			NotCalculated = 0,
			/** Attribute value has been calculated per the last update time */
			Calculated = 1,
			/** Attribute value calculation lead to overflow error */
			OverflowError = 2,
			/** Attribute value calculation failed due to an internal error */
			OtherError = 3,
			/** Attribute value calculation failed because the maximum number of retry attempts were exceeded */
			RetryLimitExceeded = 4,
			/** Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached = 5,
			/** Attribute value calculation failed because a recursive loop was detected in the hierarchy */
			LoopDetected = 6
		}
	}
}
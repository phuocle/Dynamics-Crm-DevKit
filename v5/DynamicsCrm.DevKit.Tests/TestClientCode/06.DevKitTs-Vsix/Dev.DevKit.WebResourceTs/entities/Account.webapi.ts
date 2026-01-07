/**
 * Account.webapi.ts - Account WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 * 
 * Structure:
 * 1. Imports
 * 2. Types - IAccountFormattedValue, IAccountApi
 * 3. Runtime - AccountFieldConfig, AccountApi factory
 */

import { createWebApiEntity } from '../lib/devkit';

// ============================================================================
// 1. Types
// ============================================================================

/**
 * Formatted values interface for Account
 * All fields return string representation of their values
 */
export interface IAccountFormattedValue {
	readonly AccountCategoryCode: string;
	readonly AccountClassificationCode: string;
	readonly AccountId: string;
	readonly AccountNumber: string;
	readonly AccountRatingCode: string;
	readonly Address1_AddressId: string;
	readonly Address1_AddressTypeCode: string;
	readonly Address1_City: string;
	readonly Address1_Composite: string;
	readonly Address1_Country: string;
	readonly Address1_County: string;
	readonly Address1_Fax: string;
	readonly Address1_FreightTermsCode: string;
	readonly Address1_Latitude: string;
	readonly Address1_Line1: string;
	readonly Address1_Line2: string;
	readonly Address1_Line3: string;
	readonly Address1_Longitude: string;
	readonly Address1_Name: string;
	readonly Address1_PostalCode: string;
	readonly Address1_PostOfficeBox: string;
	readonly Address1_PrimaryContactName: string;
	readonly Address1_ShippingMethodCode: string;
	readonly Address1_StateOrProvince: string;
	readonly Address1_Telephone1: string;
	readonly Address1_Telephone2: string;
	readonly Address1_Telephone3: string;
	readonly Address1_UPSZone: string;
	readonly Address1_UTCOffset: string;
	readonly Address2_AddressId: string;
	readonly Address2_AddressTypeCode: string;
	readonly Address2_City: string;
	readonly Address2_Composite: string;
	readonly Address2_Country: string;
	readonly Address2_County: string;
	readonly Address2_Fax: string;
	readonly Address2_FreightTermsCode: string;
	readonly Address2_Latitude: string;
	readonly Address2_Line1: string;
	readonly Address2_Line2: string;
	readonly Address2_Line3: string;
	readonly Address2_Longitude: string;
	readonly Address2_Name: string;
	readonly Address2_PostalCode: string;
	readonly Address2_PostOfficeBox: string;
	readonly Address2_PrimaryContactName: string;
	readonly Address2_ShippingMethodCode: string;
	readonly Address2_StateOrProvince: string;
	readonly Address2_Telephone1: string;
	readonly Address2_Telephone2: string;
	readonly Address2_Telephone3: string;
	readonly Address2_UPSZone: string;
	readonly Address2_UTCOffset: string;
	readonly Adx_CreatedByIPAddress: string;
	readonly Adx_CreatedByUsername: string;
	readonly Adx_ModifiedByIPAddress: string;
	readonly Adx_ModifiedByUsername: string;
	readonly Aging30: string;
	readonly Aging30_Base: string;
	readonly Aging60: string;
	readonly Aging60_Base: string;
	readonly Aging90: string;
	readonly Aging90_Base: string;
	readonly BusinessTypeCode: string;
	readonly CreatedBy: string;
	readonly CreatedByExternalParty: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CreditLimit: string;
	readonly CreditLimit_Base: string;
	readonly CreditOnHold: string;
	readonly CustomerSizeCode: string;
	readonly CustomerTypeCode: string;
	readonly Description: string;
	readonly DoNotBulkEMail: string;
	readonly DoNotBulkPostalMail: string;
	readonly DoNotEMail: string;
	readonly DoNotFax: string;
	readonly DoNotPhone: string;
	readonly DoNotPostalMail: string;
	readonly DoNotSendMM: string;
	readonly EMailAddress1: string;
	readonly EMailAddress2: string;
	readonly EMailAddress3: string;
	readonly EntityImage: string;
	readonly EntityImageId: string;
	readonly ExchangeRate: string;
	readonly Fax: string;
	readonly FollowEmail: string;
	readonly FtpSiteURL: string;
	readonly ImportSequenceNumber: string;
	readonly IndustryCode: string;
	readonly IsPrivate: string;
	readonly LastOnHoldTime_UtcDateAndTime: string;
	readonly LastUsedInCampaign_UtcDateOnly: string;
	readonly MarketCap: string;
	readonly MarketCap_Base: string;
	readonly MarketingOnly: string;
	readonly MasterId: string;
	readonly Merged: string;
	readonly ModifiedBy: string;
	readonly ModifiedByExternalParty: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msa_managingpartnerid: string;
	readonly Name: string;
	readonly NumberOfEmployees: string;
	readonly OnHoldTime: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwnershipCode: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly ParentAccountId: string;
	readonly ParticipatesInWorkflow: string;
	readonly PaymentTermsCode: string;
	readonly PreferredAppointmentDayCode: string;
	readonly PreferredAppointmentTimeCode: string;
	readonly PreferredContactMethodCode: string;
	readonly PreferredSystemUserId: string;
	readonly PrimaryContactId: string;
	readonly PrimarySatoriId: string;
	readonly PrimaryTwitterId: string;
	readonly ProcessId: string;
	readonly Revenue: string;
	readonly Revenue_Base: string;
	readonly SharesOutstanding: string;
	readonly ShippingMethodCode: string;
	readonly SIC: string;
	readonly SLAId: string;
	readonly SLAInvokedId: string;
	readonly StageId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly StockExchange: string;
	readonly Telephone1: string;
	readonly Telephone2: string;
	readonly Telephone3: string;
	readonly TerritoryCode: string;
	readonly TickerSymbol: string;
	readonly TimeSpentByMeOnEmailAndMeetings: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TransactionCurrencyId: string;
	readonly TraversedPath: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly v4_AppointmentTime_UtcDateAndTime: string;
	readonly v4_Birthday_TimezoneDateOnly: string;
	readonly v4_Boolean: string;
	readonly v4_Categories: string;
	readonly v4_DateOnly_TimezoneDateOnly: string;
	readonly v4_DateTime_UtcDateAndTime: string;
	readonly v4_Decimal: string;
	readonly v4_Double: string;
	readonly v4_Integer: string;
	readonly v4_Lookup: string;
	readonly v4_Memo: string;
	readonly v4_Money: string;
	readonly v4_money_Base: string;
	readonly v4_MultiOptionSet: string;
	readonly v4_OptionSet: string;
	readonly v4_String: string;
	readonly VersionNumber: string;
	readonly WebSiteURL: string;
	readonly YomiName: string;
}

/**
 * Account WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAccountApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IAccountFormattedValue;
	/** Select a category to indicate whether the customer account is standard or preferred. */
	AccountCategoryCode: number | null;
	/** Select a classification code to indicate the potential value of the customer account based on the projected return on investment, cooperation level, sales cycle length or other criteria. */
	AccountClassificationCode: number | null;
	/** Unique identifier of the account. */
	AccountId: DevKit.Guid | null;
	/** Type an ID number or code for the account to quickly search and identify the account in system views. */
	AccountNumber: string | null;
	/** Select a rating to indicate the value of the customer account. */
	AccountRatingCode: number | null;
	/** Unique identifier for address 1. */
	Address1_AddressId: DevKit.Guid | null;
	/** Select the primary address type. */
	Address1_AddressTypeCode: number | null;
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
	Address1_FreightTermsCode: number | null;
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
	Address1_ShippingMethodCode: number | null;
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
	Address2_AddressId: DevKit.Guid | null;
	/** Select the secondary address type. */
	Address2_AddressTypeCode: number | null;
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
	Address2_FreightTermsCode: number | null;
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
	Address2_ShippingMethodCode: number | null;
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
	/** Created By (IP Address) */
	Adx_CreatedByIPAddress: string | null;
	/** Created By (User Name) */
	Adx_CreatedByUsername: string | null;
	/** Modified By (IP Address) */
	Adx_ModifiedByIPAddress: string | null;
	/** Modified By (User Name) */
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
	BusinessTypeCode: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the external party who created the record. */
	readonly CreatedByExternalParty: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
	CreditLimit: number | null;
	/** Shows the credit limit converted to the system's default base currency for reporting purposes. */
	readonly CreditLimit_Base: number | null;
	/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
	CreditOnHold: boolean | null;
	/** Select the size category or range of the account for segmentation and reporting purposes. */
	CustomerSizeCode: number | null;
	/** Select the category that best describes the relationship between the account and your organization. */
	CustomerTypeCode: number | null;
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
	/** For internal use only. */
	readonly EntityImageId: DevKit.Guid | null;
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
	IndustryCode: number | null;
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
	readonly MasterId: DevKit.Guid | null;
	/** Shows whether the account has been merged with another account. */
	readonly Merged: boolean | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the external party who modified the record. */
	readonly ModifiedByExternalParty: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for Account associated with Account. */
	msa_managingpartnerid: DevKit.Guid | null;
	/** Type the company or business name. */
	Name: string | null;
	/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
	NumberOfEmployees: number | null;
	/** Shows how long, in minutes, that the record was on hold. */
	readonly OnHoldTime: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Select the account's ownership structure, such as public or private. */
	OwnershipCode: number | null;
	/** Shows the business unit that the record owner belongs to. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the account. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the account. */
	readonly OwningUser: DevKit.Guid | null;
	/** Choose the parent account associated with this account to show parent and child businesses in reporting and analytics. */
	ParentAccountId: DevKit.Guid | null;
	/** For system use only. Legacy Microsoft Dynamics CRM 3.0 workflow data. */
	ParticipatesInWorkflow: boolean | null;
	/** Select the payment terms to indicate when the customer needs to pay the total amount. */
	PaymentTermsCode: number | null;
	/** Select the preferred day of the week for service appointments. */
	PreferredAppointmentDayCode: number | null;
	/** Select the preferred time of day for service appointments. */
	PreferredAppointmentTimeCode: number | null;
	/** Select the preferred method of contact. */
	PreferredContactMethodCode: number | null;
	/** Choose the preferred service representative for reference when you schedule service activities for the account. */
	PreferredSystemUserId: DevKit.Guid | null;
	/** Choose the primary contact for the account to provide quick access to contact details. */
	PrimaryContactId: DevKit.Guid | null;
	/** Primary Satori ID for Account */
	PrimarySatoriId: string | null;
	/** Primary Twitter ID for Account */
	PrimaryTwitterId: string | null;
	/** Shows the ID of the process. */
	ProcessId: DevKit.Guid | null;
	/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
	Revenue: number | null;
	/** Shows the annual revenue converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
	readonly Revenue_Base: number | null;
	/** Type the number of shares available to the public for the account. This number is used as an indicator in financial performance analysis. */
	SharesOutstanding: number | null;
	/** Select a shipping method for deliveries sent to the account's address to designate the preferred carrier or other delivery option. */
	ShippingMethodCode: number | null;
	/** Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. */
	SIC: string | null;
	/** Choose the service level agreement (SLA) that you want to apply to the Account record. */
	SLAId: DevKit.Guid | null;
	/** Last SLA that was applied to this case. This field is for internal use only. */
	readonly SLAInvokedId: DevKit.Guid | null;
	/** Shows the ID of the stage. */
	StageId: DevKit.Guid | null;
	/** Shows whether the account is active or inactive. Inactive accounts are read-only and can't be edited unless they are reactivated. */
	StateCode: number | null;
	/** Select the account's status. */
	StatusCode: number | null;
	/** Type the stock exchange at which the account is listed to track their stock and financial performance of the company. */
	StockExchange: string | null;
	/** Type the main phone number for this account. */
	Telephone1: string | null;
	/** Type a second phone number for this account. */
	Telephone2: string | null;
	/** Type a third phone number for this account. */
	Telephone3: string | null;
	/** Select a region or territory for the account for use in segmentation and analysis. */
	TerritoryCode: number | null;
	/** Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
	TickerSymbol: string | null;
	/** Total time spent for emails (read and write) and meetings by me in relation to account record. */
	readonly TimeSpentByMeOnEmailAndMeetings: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** For internal use only. */
	TraversedPath: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Appointment Time */
	v4_AppointmentTime_UtcDateAndTime: Date | null;
	/** Birthday */
	v4_Birthday_TimezoneDateOnly: Date | null;
	/** Boolean */
	v4_Boolean: boolean | null;
	/** Categories */
	v4_Categories: Array<number> | null;
	/** DateOnly */
	v4_DateOnly_TimezoneDateOnly: Date | null;
	/** DateTime */
	v4_DateTime_UtcDateAndTime: Date | null;
	/** Decimal */
	v4_Decimal: number | null;
	/** Double */
	v4_Double: number | null;
	/** Integer */
	v4_Integer: number | null;
	/** Lookup */
	v4_Lookup: DevKit.Guid | null;
	/** Memo */
	v4_Memo: string | null;
	/** Money */
	v4_Money: number | null;
	/** Value of the Money in base currency. */
	readonly v4_money_Base: number | null;
	/** MultiOptionSet */
	v4_MultiOptionSet: Array<number> | null;
	/** OptionSet */
	v4_OptionSet: number | null;
	/** String */
	v4_String: string | null;
	/** Version number of the account. */
	readonly VersionNumber: number | null;
	/** Type the account's website URL to get quick details about the company profile. */
	WebSiteURL: string | null;
	/** Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
	YomiName: string | null;
}

// ============================================================================
// 2. Runtime - Field Configuration
// ============================================================================

/**
 * Account field metadata configuration
 * - logicalName: attribute logical name (e.g. 'accountid')
 * - schemaName: schema name for lookup binding
 * - entityCollectionName: collection name for lookup (e.g. 'accounts')
 * - entityLogicalName: entity name for lookup (e.g. 'account')
 * - readOnly: whether the field is read-only
 * - type: field type for parsing (Integer, Number, Boolean, DateTime, MultiOptionSet)
 */
const AccountFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AccountCategoryCode: { logicalName: 'accountcategorycode', type: 'Integer' },
	AccountClassificationCode: { logicalName: 'accountclassificationcode', type: 'Integer' },
	AccountId: { logicalName: 'accountid' },
	AccountNumber: { logicalName: 'accountnumber' },
	AccountRatingCode: { logicalName: 'accountratingcode', type: 'Integer' },
	Address1_AddressId: { logicalName: 'address1_addressid' },
	Address1_AddressTypeCode: { logicalName: 'address1_addresstypecode', type: 'Integer' },
	Address1_City: { logicalName: 'address1_city' },
	Address1_Composite: { logicalName: 'address1_composite', readOnly: true },
	Address1_Country: { logicalName: 'address1_country' },
	Address1_County: { logicalName: 'address1_county' },
	Address1_Fax: { logicalName: 'address1_fax' },
	Address1_FreightTermsCode: { logicalName: 'address1_freighttermscode', type: 'Integer' },
	Address1_Latitude: { logicalName: 'address1_latitude', type: 'Number' },
	Address1_Line1: { logicalName: 'address1_line1' },
	Address1_Line2: { logicalName: 'address1_line2' },
	Address1_Line3: { logicalName: 'address1_line3' },
	Address1_Longitude: { logicalName: 'address1_longitude', type: 'Number' },
	Address1_Name: { logicalName: 'address1_name' },
	Address1_PostalCode: { logicalName: 'address1_postalcode' },
	Address1_PostOfficeBox: { logicalName: 'address1_postofficebox' },
	Address1_PrimaryContactName: { logicalName: 'address1_primarycontactname' },
	Address1_ShippingMethodCode: { logicalName: 'address1_shippingmethodcode', type: 'Integer' },
	Address1_StateOrProvince: { logicalName: 'address1_stateorprovince' },
	Address1_Telephone1: { logicalName: 'address1_telephone1' },
	Address1_Telephone2: { logicalName: 'address1_telephone2' },
	Address1_Telephone3: { logicalName: 'address1_telephone3' },
	Address1_UPSZone: { logicalName: 'address1_upszone' },
	Address1_UTCOffset: { logicalName: 'address1_utcoffset', type: 'Integer' },
	Address2_AddressId: { logicalName: 'address2_addressid' },
	Address2_AddressTypeCode: { logicalName: 'address2_addresstypecode', type: 'Integer' },
	Address2_City: { logicalName: 'address2_city' },
	Address2_Composite: { logicalName: 'address2_composite', readOnly: true },
	Address2_Country: { logicalName: 'address2_country' },
	Address2_County: { logicalName: 'address2_county' },
	Address2_Fax: { logicalName: 'address2_fax' },
	Address2_FreightTermsCode: { logicalName: 'address2_freighttermscode', type: 'Integer' },
	Address2_Latitude: { logicalName: 'address2_latitude', type: 'Number' },
	Address2_Line1: { logicalName: 'address2_line1' },
	Address2_Line2: { logicalName: 'address2_line2' },
	Address2_Line3: { logicalName: 'address2_line3' },
	Address2_Longitude: { logicalName: 'address2_longitude', type: 'Number' },
	Address2_Name: { logicalName: 'address2_name' },
	Address2_PostalCode: { logicalName: 'address2_postalcode' },
	Address2_PostOfficeBox: { logicalName: 'address2_postofficebox' },
	Address2_PrimaryContactName: { logicalName: 'address2_primarycontactname' },
	Address2_ShippingMethodCode: { logicalName: 'address2_shippingmethodcode', type: 'Integer' },
	Address2_StateOrProvince: { logicalName: 'address2_stateorprovince' },
	Address2_Telephone1: { logicalName: 'address2_telephone1' },
	Address2_Telephone2: { logicalName: 'address2_telephone2' },
	Address2_Telephone3: { logicalName: 'address2_telephone3' },
	Address2_UPSZone: { logicalName: 'address2_upszone' },
	Address2_UTCOffset: { logicalName: 'address2_utcoffset', type: 'Integer' },
	Adx_CreatedByIPAddress: { logicalName: 'adx_createdbyipaddress' },
	Adx_CreatedByUsername: { logicalName: 'adx_createdbyusername' },
	Adx_ModifiedByIPAddress: { logicalName: 'adx_modifiedbyipaddress' },
	Adx_ModifiedByUsername: { logicalName: 'adx_modifiedbyusername' },
	Aging30: { logicalName: 'aging30', readOnly: true, type: 'Number' },
	Aging30_Base: { logicalName: 'aging30_base', readOnly: true, type: 'Number' },
	Aging60: { logicalName: 'aging60', readOnly: true, type: 'Number' },
	Aging60_Base: { logicalName: 'aging60_base', readOnly: true, type: 'Number' },
	Aging90: { logicalName: 'aging90', readOnly: true, type: 'Number' },
	Aging90_Base: { logicalName: 'aging90_base', readOnly: true, type: 'Number' },
	BusinessTypeCode: { logicalName: 'businesstypecode', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedByExternalParty: { schemaName: 'CreatedByExternalParty', logicalName: '_createdbyexternalparty_value', readOnly: true, entityCollectionName: 'externalparties', entityLogicalName: 'externalparty' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreditLimit: { logicalName: 'creditlimit', type: 'Number' },
	CreditLimit_Base: { logicalName: 'creditlimit_base', readOnly: true, type: 'Number' },
	CreditOnHold: { logicalName: 'creditonhold', type: 'Boolean' },
	CustomerSizeCode: { logicalName: 'customersizecode', type: 'Integer' },
	CustomerTypeCode: { logicalName: 'customertypecode', type: 'Integer' },
	Description: { logicalName: 'description' },
	DoNotBulkEMail: { logicalName: 'donotbulkemail', type: 'Boolean' },
	DoNotBulkPostalMail: { logicalName: 'donotbulkpostalmail', type: 'Boolean' },
	DoNotEMail: { logicalName: 'donotemail', type: 'Boolean' },
	DoNotFax: { logicalName: 'donotfax', type: 'Boolean' },
	DoNotPhone: { logicalName: 'donotphone', type: 'Boolean' },
	DoNotPostalMail: { logicalName: 'donotpostalmail', type: 'Boolean' },
	DoNotSendMM: { logicalName: 'donotsendmm', type: 'Boolean' },
	EMailAddress1: { logicalName: 'emailaddress1' },
	EMailAddress2: { logicalName: 'emailaddress2' },
	EMailAddress3: { logicalName: 'emailaddress3' },
	EntityImage: { logicalName: 'entityimage' },
	EntityImageId: { logicalName: 'entityimageid', readOnly: true },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	Fax: { logicalName: 'fax' },
	FollowEmail: { logicalName: 'followemail', type: 'Boolean' },
	FtpSiteURL: { logicalName: 'ftpsiteurl' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IndustryCode: { logicalName: 'industrycode', type: 'Integer' },
	IsPrivate: { logicalName: 'isprivate', readOnly: true, type: 'Boolean' },
	LastOnHoldTime_UtcDateAndTime: { logicalName: 'lastonholdtime', type: 'DateTime' },
	LastUsedInCampaign_UtcDateOnly: { logicalName: 'lastusedincampaign', type: 'DateTime' },
	MarketCap: { logicalName: 'marketcap', type: 'Number' },
	MarketCap_Base: { logicalName: 'marketcap_base', readOnly: true, type: 'Number' },
	MarketingOnly: { logicalName: 'marketingonly', type: 'Boolean' },
	MasterId: { schemaName: 'MasterId', logicalName: '_masterid_value', readOnly: true, entityCollectionName: 'accounts', entityLogicalName: 'account' },
	Merged: { logicalName: 'merged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedByExternalParty: { schemaName: 'ModifiedByExternalParty', logicalName: '_modifiedbyexternalparty_value', readOnly: true, entityCollectionName: 'externalparties', entityLogicalName: 'externalparty' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msa_managingpartnerid: { schemaName: 'msa_managingpartnerid', logicalName: '_msa_managingpartnerid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	Name: { logicalName: 'name' },
	NumberOfEmployees: { logicalName: 'numberofemployees', type: 'Integer' },
	OnHoldTime: { logicalName: 'onholdtime', readOnly: true, type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwnershipCode: { logicalName: 'ownershipcode', type: 'Integer' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ParentAccountId: { schemaName: 'ParentAccountId', logicalName: '_parentaccountid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	ParticipatesInWorkflow: { logicalName: 'participatesinworkflow', type: 'Boolean' },
	PaymentTermsCode: { logicalName: 'paymenttermscode', type: 'Integer' },
	PreferredAppointmentDayCode: { logicalName: 'preferredappointmentdaycode', type: 'Integer' },
	PreferredAppointmentTimeCode: { logicalName: 'preferredappointmenttimecode', type: 'Integer' },
	PreferredContactMethodCode: { logicalName: 'preferredcontactmethodcode', type: 'Integer' },
	PreferredSystemUserId: { schemaName: 'PreferredSystemUserId', logicalName: '_preferredsystemuserid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PrimaryContactId: { schemaName: 'PrimaryContactId', logicalName: '_primarycontactid_value', entityCollectionName: 'contacts', entityLogicalName: 'contact' },
	PrimarySatoriId: { logicalName: 'primarysatoriid' },
	PrimaryTwitterId: { logicalName: 'primarytwitterid' },
	ProcessId: { logicalName: 'processid' },
	Revenue: { logicalName: 'revenue', type: 'Number' },
	Revenue_Base: { logicalName: 'revenue_base', readOnly: true, type: 'Number' },
	SharesOutstanding: { logicalName: 'sharesoutstanding', type: 'Integer' },
	ShippingMethodCode: { logicalName: 'shippingmethodcode', type: 'Integer' },
	SIC: { logicalName: 'sic' },
	SLAId: { schemaName: 'SLAId', logicalName: '_slaid_value', entityCollectionName: 'slas', entityLogicalName: 'sla' },
	SLAInvokedId: { schemaName: 'SLAInvokedId', logicalName: '_slainvokedid_value', readOnly: true, entityCollectionName: 'slas', entityLogicalName: 'sla' },
	StageId: { logicalName: 'stageid' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	StockExchange: { logicalName: 'stockexchange' },
	Telephone1: { logicalName: 'telephone1' },
	Telephone2: { logicalName: 'telephone2' },
	Telephone3: { logicalName: 'telephone3' },
	TerritoryCode: { logicalName: 'territorycode', type: 'Integer' },
	TickerSymbol: { logicalName: 'tickersymbol' },
	TimeSpentByMeOnEmailAndMeetings: { logicalName: 'timespentbymeonemailandmeetings', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	TraversedPath: { logicalName: 'traversedpath' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	v4_AppointmentTime_UtcDateAndTime: { logicalName: 'v4_appointmenttime', type: 'DateTime' },
	v4_Birthday_TimezoneDateOnly: { logicalName: 'v4_birthday', type: 'DateTime' },
	v4_Boolean: { logicalName: 'v4_boolean', type: 'Boolean' },
	v4_Categories: { logicalName: 'v4_categories', type: 'MultiOptionSet' },
	v4_DateOnly_TimezoneDateOnly: { logicalName: 'v4_dateonly', type: 'DateTime' },
	v4_DateTime_UtcDateAndTime: { logicalName: 'v4_datetime', type: 'DateTime' },
	v4_Decimal: { logicalName: 'v4_decimal', type: 'Number' },
	v4_Double: { logicalName: 'v4_double', type: 'Number' },
	v4_Integer: { logicalName: 'v4_integer', type: 'Integer' },
	v4_Lookup: { schemaName: 'v4_Lookup', logicalName: '_v4_lookup_value', entityCollectionName: 'contacts', entityLogicalName: 'contact' },
	v4_Memo: { logicalName: 'v4_memo' },
	v4_Money: { logicalName: 'v4_money', type: 'Number' },
	v4_money_Base: { logicalName: 'v4_money_base', readOnly: true, type: 'Number' },
	v4_MultiOptionSet: { logicalName: 'v4_multioptionset', type: 'MultiOptionSet' },
	v4_OptionSet: { logicalName: 'v4_optionset', type: 'Integer' },
	v4_String: { logicalName: 'v4_string' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WebSiteURL: { logicalName: 'websiteurl' },
	YomiName: { logicalName: 'yominame' },
};

// ============================================================================
// 3. Runtime - Class (C# early-bound style with `new` keyword)
// ============================================================================

/**
 * Account WebApi class for early-bound style coding
 * Usage: const account = new AccountApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AccountApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAccountApi>(entity, 'account', 'accounts', AccountFieldConfig);
		// Copy property descriptors to preserve getters/setters
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

// Type assertion to make AccountApi instances work as IAccountApi
export interface AccountApi extends IAccountApi { }

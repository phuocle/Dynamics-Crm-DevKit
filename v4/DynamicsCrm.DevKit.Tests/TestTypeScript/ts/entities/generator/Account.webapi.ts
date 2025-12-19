/**
 * Account WebApi - TypeScript version
 * Port from Account2.webapi.js for early-bound style WebApi coding
 */
import {
    createWebApiEntity,
    IWebApiEntity,
    IWebApiFieldConfigMap
} from '../../lib/devkit';

/**
 * Account field metadata configuration
 * Using descriptive property names for maintainability:
 * - logicalName: attribute logical name (e.g. 'accountid')
 * - schemaName: schema name for lookup binding
 * - entityCollectionName: collection name for lookup (e.g. 'accounts')
 * - entityLogicalName: entity name for lookup (e.g. 'account')
 * - readOnly: whether the field is read-only
 * - type: field type for parsing (Integer, Number, Boolean, DateTime, MultiOptionSet)
 */
const AccountFieldConfig: IWebApiFieldConfigMap = {
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
    CreatedBy: { schemaName: 'createdby', logicalName: '_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser', readOnly: true },
    CreatedByExternalParty: { schemaName: 'createdbyexternalparty', logicalName: '_createdbyexternalparty_value', entityCollectionName: 'externalparties', entityLogicalName: 'externalparty', readOnly: true },
    CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
    CreatedOnBehalfBy: { schemaName: 'createdonbehalfby', logicalName: '_createdonbehalfby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser', readOnly: true },
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
    EntityImage_Timestamp: { logicalName: 'entityimage_timestamp', readOnly: true },
    EntityImage_URL: { logicalName: 'entityimage_url', readOnly: true },
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
    MasterId: { schemaName: 'masterid', logicalName: '_masterid_value', entityCollectionName: 'accounts', entityLogicalName: 'account', readOnly: true },
    Merged: { logicalName: 'merged', readOnly: true, type: 'Boolean' },
    ModifiedBy: { schemaName: 'modifiedby', logicalName: '_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser', readOnly: true },
    ModifiedByExternalParty: { schemaName: 'modifiedbyexternalparty', logicalName: '_modifiedbyexternalparty_value', entityCollectionName: 'externalparties', entityLogicalName: 'externalparty', readOnly: true },
    ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
    ModifiedOnBehalfBy: { schemaName: 'modifiedonbehalfby', logicalName: '_modifiedonbehalfby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser', readOnly: true },
    msa_managingpartnerid: { schemaName: 'msa_managingpartnerid', logicalName: '_msa_managingpartnerid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
    Name: { logicalName: 'name' },
    NumberOfEmployees: { logicalName: 'numberofemployees', type: 'Integer' },
    OnHoldTime: { logicalName: 'onholdtime', readOnly: true, type: 'Integer' },
    OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
    OwnerId_systemuser: { schemaName: 'ownerid', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
    OwnerId_team: { schemaName: 'ownerid', logicalName: '_ownerid_value', entityCollectionName: 'teams', entityLogicalName: 'team' },
    OwnershipCode: { logicalName: 'ownershipcode', type: 'Integer' },
    OwningBusinessUnit: { schemaName: 'owningbusinessunit', logicalName: '_owningbusinessunit_value', entityCollectionName: 'businessunits', entityLogicalName: 'businessunit', readOnly: true },
    OwningTeam: { schemaName: 'owningteam', logicalName: '_owningteam_value', entityCollectionName: 'teams', entityLogicalName: 'team', readOnly: true },
    OwningUser: { schemaName: 'owninguser', logicalName: '_owninguser_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser', readOnly: true },
    ParentAccountId: { schemaName: 'parentaccountid', logicalName: '_parentaccountid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
    ParticipatesInWorkflow: { logicalName: 'participatesinworkflow', type: 'Boolean' },
    PaymentTermsCode: { logicalName: 'paymenttermscode', type: 'Integer' },
    PreferredAppointmentDayCode: { logicalName: 'preferredappointmentdaycode', type: 'Integer' },
    PreferredAppointmentTimeCode: { logicalName: 'preferredappointmenttimecode', type: 'Integer' },
    PreferredContactMethodCode: { logicalName: 'preferredcontactmethodcode', type: 'Integer' },
    PreferredSystemUserId: { schemaName: 'preferredsystemuserid', logicalName: '_preferredsystemuserid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
    PrimaryContactId: { schemaName: 'primarycontactid', logicalName: '_primarycontactid_value', entityCollectionName: 'contacts', entityLogicalName: 'contact' },
    PrimarySatoriId: { logicalName: 'primarysatoriid' },
    PrimaryTwitterId: { logicalName: 'primarytwitterid' },
    ProcessId: { logicalName: 'processid' },
    Revenue: { logicalName: 'revenue', type: 'Number' },
    Revenue_Base: { logicalName: 'revenue_base', readOnly: true, type: 'Number' },
    SharesOutstanding: { logicalName: 'sharesoutstanding', type: 'Integer' },
    ShippingMethodCode: { logicalName: 'shippingmethodcode', type: 'Integer' },
    SIC: { logicalName: 'sic' },
    SLAId: { schemaName: 'slaid', logicalName: '_slaid_value', entityCollectionName: 'slas', entityLogicalName: 'sla' },
    SLAInvokedId: { schemaName: 'slainvokedid', logicalName: '_slainvokedid_value', entityCollectionName: 'slas', entityLogicalName: 'sla', readOnly: true },
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
    TransactionCurrencyId: { schemaName: 'transactioncurrencyid', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
    TraversedPath: { logicalName: 'traversedpath' },
    UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
    VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
    WebSiteURL: { logicalName: 'websiteurl' },
    YomiName: { logicalName: 'yominame' }
};

/**
 * Formatted values interface for Account
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
    readonly EntityImage_Timestamp: string;
    readonly EntityImage_URL: string;
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
    readonly OwnerId_systemuser: string;
    readonly OwnerId_team: string;
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
    readonly VersionNumber: string;
    readonly WebSiteURL: string;
    readonly YomiName: string;
}

/**
 * Interface for Account WebApi entity with all typed properties
 * Provides IntelliSense for early-bound style coding
 */
export interface IAccountApi extends IWebApiEntity {
    /** Formatted values for all fields */
    readonly FormattedValue: IAccountFormattedValue;

    /** Select a category to indicate whether the customer account is standard or preferred. */
    AccountCategoryCode: number | null;
    /** Select a classification code to indicate the potential value of the customer account. */
    AccountClassificationCode: number | null;
    /** Unique identifier of the account. */
    AccountId: string | null;
    /** Type an ID number or code for the account to quickly search and identify the account. */
    AccountNumber: string | null;
    /** Select a rating to indicate the value of the customer account. */
    AccountRatingCode: number | null;
    /** Unique identifier for address 1. */
    Address1_AddressId: string | null;
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
    /** Select the freight terms for the primary address. */
    Address1_FreightTermsCode: number | null;
    /** Type the latitude value for the primary address. */
    Address1_Latitude: number | null;
    /** Type the first line of the primary address. */
    Address1_Line1: string | null;
    /** Type the second line of the primary address. */
    Address1_Line2: string | null;
    /** Type the third line of the primary address. */
    Address1_Line3: string | null;
    /** Type the longitude value for the primary address. */
    Address1_Longitude: number | null;
    /** Type a descriptive name for the primary address. */
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
    /** Type the UPS zone of the primary address. */
    Address1_UPSZone: string | null;
    /** Select the time zone, or UTC offset, for this address. */
    Address1_UTCOffset: number | null;
    /** Unique identifier for address 2. */
    Address2_AddressId: string | null;
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
    /** Select the freight terms for the secondary address. */
    Address2_FreightTermsCode: number | null;
    /** Type the latitude value for the secondary address. */
    Address2_Latitude: number | null;
    /** Type the first line of the secondary address. */
    Address2_Line1: string | null;
    /** Type the second line of the secondary address. */
    Address2_Line2: string | null;
    /** Type the third line of the secondary address. */
    Address2_Line3: string | null;
    /** Type the longitude value for the secondary address. */
    Address2_Longitude: number | null;
    /** Type a descriptive name for the secondary address. */
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
    /** Type the UPS zone of the secondary address. */
    Address2_UPSZone: string | null;
    /** Select the time zone, or UTC offset, for this address. */
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
    /** Select the legal designation or other business type of the account. */
    BusinessTypeCode: number | null;
    /** Shows who created the record. */
    readonly CreatedBy: string | null;
    /** Shows the external party who created the record. */
    readonly CreatedByExternalParty: string | null;
    /** Shows the date and time when the record was created. */
    readonly CreatedOn_UtcDateAndTime: Date | null;
    /** Shows who created the record on behalf of another user. */
    readonly CreatedOnBehalfBy: string | null;
    /** Type the credit limit of the account. */
    CreditLimit: number | null;
    /** Shows the credit limit converted to the system's default base currency. */
    readonly CreditLimit_Base: number | null;
    /** Select whether the credit for the account is on hold. */
    CreditOnHold: boolean | null;
    /** Select the size category or range of the account. */
    CustomerSizeCode: number | null;
    /** Select the category that best describes the relationship between the account and your organization. */
    CustomerTypeCode: number | null;
    /** Type additional information to describe the account. */
    Description: string | null;
    /** Select whether the account allows bulk email sent through campaigns. */
    DoNotBulkEMail: boolean | null;
    /** Select whether the account allows bulk postal mail. */
    DoNotBulkPostalMail: boolean | null;
    /** Select whether the account allows direct email. */
    DoNotEMail: boolean | null;
    /** Select whether the account allows faxes. */
    DoNotFax: boolean | null;
    /** Select whether the account allows phone calls. */
    DoNotPhone: boolean | null;
    /** Select whether the account allows direct mail. */
    DoNotPostalMail: boolean | null;
    /** Select whether the account accepts marketing materials. */
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
    /** Shows the conversion rate of the record's currency. */
    readonly ExchangeRate: number | null;
    /** Type the fax number for the account. */
    Fax: string | null;
    /** Information about whether to allow following email activity. */
    FollowEmail: boolean | null;
    /** Type the URL for the account's FTP site. */
    FtpSiteURL: string | null;
    /** Unique identifier of the data import or data migration that created this record. */
    ImportSequenceNumber: number | null;
    /** Select the account's primary industry. */
    IndustryCode: number | null;
    readonly IsPrivate: boolean | null;
    /** Contains the date and time stamp of the last on hold time. */
    LastOnHoldTime_UtcDateAndTime: Date | null;
    /** Shows the date when the account was last included in a marketing campaign. */
    LastUsedInCampaign_UtcDateOnly: Date | null;
    /** Type the market capitalization of the account. */
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
    /** Shows the date and time when the record was last updated. */
    readonly ModifiedOn_UtcDateAndTime: Date | null;
    /** Shows who created the record on behalf of another user. */
    readonly ModifiedOnBehalfBy: string | null;
    /** Unique identifier for Account associated with Account. */
    msa_managingpartnerid: string | null;
    /** Type the company or business name. */
    Name: string | null;
    /** Type the number of employees that work at the account. */
    NumberOfEmployees: number | null;
    /** Shows how long, in minutes, that the record was on hold. */
    readonly OnHoldTime: number | null;
    /** Date and time that the record was migrated. */
    OverriddenCreatedOn_UtcDateOnly: Date | null;
    /** Enter the user who is assigned to manage the record. */
    OwnerId_systemuser: string | null;
    /** Enter the team who is assigned to manage the record. */
    OwnerId_team: string | null;
    /** Select the account's ownership structure, such as public or private. */
    OwnershipCode: number | null;
    /** Shows the business unit that the record owner belongs to. */
    readonly OwningBusinessUnit: string | null;
    /** Unique identifier of the team who owns the account. */
    readonly OwningTeam: string | null;
    /** Unique identifier of the user who owns the account. */
    readonly OwningUser: string | null;
    /** Choose the parent account associated with this account. */
    ParentAccountId: string | null;
    /** For system use only. Legacy Microsoft Dynamics CRM 3.0 workflow data. */
    ParticipatesInWorkflow: boolean | null;
    /** Select the payment terms to indicate when the customer needs to pay. */
    PaymentTermsCode: number | null;
    /** Select the preferred day of the week for service appointments. */
    PreferredAppointmentDayCode: number | null;
    /** Select the preferred time of day for service appointments. */
    PreferredAppointmentTimeCode: number | null;
    /** Select the preferred method of contact. */
    PreferredContactMethodCode: number | null;
    /** Choose the preferred service representative. */
    PreferredSystemUserId: string | null;
    /** Choose the primary contact for the account. */
    PrimaryContactId: string | null;
    /** Primary Satori ID for Account */
    PrimarySatoriId: string | null;
    /** Primary Twitter ID for Account */
    PrimaryTwitterId: string | null;
    /** Shows the ID of the process. */
    ProcessId: string | null;
    /** Type the annual revenue for the account. */
    Revenue: number | null;
    /** Shows the annual revenue converted to the system's default base currency. */
    readonly Revenue_Base: number | null;
    /** Type the number of shares available to the public for the account. */
    SharesOutstanding: number | null;
    /** Select a shipping method for deliveries sent to the account's address. */
    ShippingMethodCode: number | null;
    /** Type the Standard Industrial Classification (SIC) code. */
    SIC: string | null;
    /** Choose the service level agreement (SLA) that you want to apply. */
    SLAId: string | null;
    /** Last SLA that was applied to this case. */
    readonly SLAInvokedId: string | null;
    /** Shows the ID of the stage. */
    StageId: string | null;
    /** Shows whether the account is active or inactive. */
    StateCode: number | null;
    /** Select the account's status. */
    StatusCode: number | null;
    /** Type the stock exchange at which the account is listed. */
    StockExchange: string | null;
    /** Type the main phone number for this account. */
    Telephone1: string | null;
    /** Type a second phone number for this account. */
    Telephone2: string | null;
    /** Type a third phone number for this account. */
    Telephone3: string | null;
    /** Select a region or territory for the account. */
    TerritoryCode: number | null;
    /** Type the stock exchange symbol for the account. */
    TickerSymbol: string | null;
    /** Total time spent for emails and meetings by me in relation to account record. */
    readonly TimeSpentByMeOnEmailAndMeetings: string | null;
    /** For internal use only. */
    TimeZoneRuleVersionNumber: number | null;
    /** Choose the local currency for the record. */
    TransactionCurrencyId: string | null;
    /** For internal use only. */
    TraversedPath: string | null;
    /** Time zone code that was in use when the record was created. */
    UTCConversionTimeZoneCode: number | null;
    /** Version number of the account. */
    readonly VersionNumber: number | null;
    /** Type the account's website URL. */
    WebSiteURL: string | null;
    /** Type the phonetic spelling of the company name. */
    YomiName: string | null;
}

/**
 * Creates an Account WebApi object for early-bound style coding
 * @param entity The entity object from OData response
 * @returns AccountApi object with typed properties
 */
export function AccountApi(entity?: Record<string, any>): IAccountApi {
    return createWebApiEntity<IAccountApi>(
        entity,
        'account',
        'accounts',
        AccountFieldConfig
    );
}

// Export for module usage
export default AccountApi;

/**
 * BusinessUnit.webapi.ts - BusinessUnit WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for BusinessUnit
 * All fields return string representation of their values
 */
export interface IBusinessUnitFormattedValue {
	readonly Address1_AddressId: string;
	readonly Address1_AddressTypeCode: string;
	readonly Address1_City: string;
	readonly Address1_Country: string;
	readonly Address1_County: string;
	readonly Address1_Fax: string;
	readonly Address1_Latitude: string;
	readonly Address1_Line1: string;
	readonly Address1_Line2: string;
	readonly Address1_Line3: string;
	readonly Address1_Longitude: string;
	readonly Address1_Name: string;
	readonly Address1_PostalCode: string;
	readonly Address1_PostOfficeBox: string;
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
	readonly Address2_Country: string;
	readonly Address2_County: string;
	readonly Address2_Fax: string;
	readonly Address2_Latitude: string;
	readonly Address2_Line1: string;
	readonly Address2_Line2: string;
	readonly Address2_Line3: string;
	readonly Address2_Longitude: string;
	readonly Address2_Name: string;
	readonly Address2_PostalCode: string;
	readonly Address2_PostOfficeBox: string;
	readonly Address2_ShippingMethodCode: string;
	readonly Address2_StateOrProvince: string;
	readonly Address2_Telephone1: string;
	readonly Address2_Telephone2: string;
	readonly Address2_Telephone3: string;
	readonly Address2_UPSZone: string;
	readonly Address2_UTCOffset: string;
	readonly BusinessUnitId: string;
	readonly CalendarId: string;
	readonly CostCenter: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CreditLimit: string;
	readonly Description: string;
	readonly DisabledReason: string;
	readonly DivisionName: string;
	readonly EMailAddress: string;
	readonly ExchangeRate: string;
	readonly FileAsName: string;
	readonly FtpSiteUrl: string;
	readonly ImportSequenceNumber: string;
	readonly InheritanceMask: string;
	readonly IsDisabled: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly ParentBusinessUnitId: string;
	readonly Picture: string;
	readonly StockExchange: string;
	readonly TickerSymbol: string;
	readonly TransactionCurrencyId: string;
	readonly UserGroupId: string;
	readonly UTCOffset: string;
	readonly VersionNumber: string;
	readonly WebSiteUrl: string;
	readonly WorkflowSuspended: string;
}

/**
 * BusinessUnit WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IBusinessUnitApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IBusinessUnitFormattedValue;
	/** Unique identifier for address 1. */
	Address1_AddressId: DevKit.Guid | null;
	/** Type of address for address 1, such as billing, shipping, or primary address. */
	Address1_AddressTypeCode: number | null;
	/** City name for address 1. */
	Address1_City: string | null;
	/** Country/region name for address 1. */
	Address1_Country: string | null;
	/** County name for address 1. */
	Address1_County: string | null;
	/** Fax number for address 1. */
	Address1_Fax: string | null;
	/** Latitude for address 1. */
	Address1_Latitude: number | null;
	/** First line for entering address 1 information. */
	Address1_Line1: string | null;
	/** Second line for entering address 1 information. */
	Address1_Line2: string | null;
	/** Third line for entering address 1 information. */
	Address1_Line3: string | null;
	/** Longitude for address 1. */
	Address1_Longitude: number | null;
	/** Name to enter for address 1. */
	Address1_Name: string | null;
	/** ZIP Code or postal code for address 1. */
	Address1_PostalCode: string | null;
	/** Post office box number for address 1. */
	Address1_PostOfficeBox: string | null;
	/** Method of shipment for address 1. */
	Address1_ShippingMethodCode: number | null;
	/** State or province for address 1. */
	Address1_StateOrProvince: string | null;
	/** First telephone number associated with address 1. */
	Address1_Telephone1: string | null;
	/** Second telephone number associated with address 1. */
	Address1_Telephone2: string | null;
	/** Third telephone number associated with address 1. */
	Address1_Telephone3: string | null;
	/** United Parcel Service (UPS) zone for address 1. */
	Address1_UPSZone: string | null;
	/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
	Address1_UTCOffset: number | null;
	/** Unique identifier for address 2. */
	Address2_AddressId: DevKit.Guid | null;
	/** Type of address for address 2, such as billing, shipping, or primary address. */
	Address2_AddressTypeCode: number | null;
	/** City name for address 2. */
	Address2_City: string | null;
	/** Country/region name for address 2. */
	Address2_Country: string | null;
	/** County name for address 2. */
	Address2_County: string | null;
	/** Fax number for address 2. */
	Address2_Fax: string | null;
	/** Latitude for address 2. */
	Address2_Latitude: number | null;
	/** First line for entering address 2 information. */
	Address2_Line1: string | null;
	/** Second line for entering address 2 information. */
	Address2_Line2: string | null;
	/** Third line for entering address 2 information. */
	Address2_Line3: string | null;
	/** Longitude for address 2. */
	Address2_Longitude: number | null;
	/** Name to enter for address 2. */
	Address2_Name: string | null;
	/** ZIP Code or postal code for address 2. */
	Address2_PostalCode: string | null;
	/** Post office box number for address 2. */
	Address2_PostOfficeBox: string | null;
	/** Method of shipment for address 2. */
	Address2_ShippingMethodCode: number | null;
	/** State or province for address 2. */
	Address2_StateOrProvince: string | null;
	/** First telephone number associated with address 2. */
	Address2_Telephone1: string | null;
	/** Second telephone number associated with address 2. */
	Address2_Telephone2: string | null;
	/** Third telephone number associated with address 2. */
	Address2_Telephone3: string | null;
	/** United Parcel Service (UPS) zone for address 2. */
	Address2_UPSZone: string | null;
	/** UTC offset for address 2. This is the difference between local time and standard Coordinated Universal Time. */
	Address2_UTCOffset: number | null;
	/** Unique identifier of the business unit. */
	BusinessUnitId: DevKit.Guid | null;
	/** Fiscal calendar associated with the business unit. */
	CalendarId: DevKit.Guid | null;
	/** Name of the business unit cost center. */
	CostCenter: string | null;
	/** Unique identifier of the user who created the business unit. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the business unit was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the businessunit. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Credit limit for the business unit. */
	CreditLimit: number | null;
	/** Description of the business unit. */
	Description: string | null;
	/** Reason for disabling the business unit. */
	readonly DisabledReason: string | null;
	/** Name of the division to which the business unit belongs. */
	DivisionName: string | null;
	/** Email address for the business unit. */
	EMailAddress: string | null;
	/** Exchange rate for the currency associated with the businessunit with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Alternative name under which the business unit can be filed. */
	FileAsName: string | null;
	/** FTP site URL for the business unit. */
	FtpSiteUrl: string | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Inheritance mask for the business unit. */
	InheritanceMask: number | null;
	/** Information about whether the business unit is enabled or disabled. */
	IsDisabled: boolean | null;
	/** Unique identifier of the user who last modified the business unit. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the business unit was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the businessunit. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the business unit. */
	Name: string | null;
	/** Unique identifier of the organization associated with the business unit. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier for the parent business unit. */
	ParentBusinessUnitId: DevKit.Guid | null;
	/** Picture or diagram of the business unit. */
	Picture: string | null;
	/** Stock exchange on which the business is listed. */
	StockExchange: string | null;
	/** Stock exchange ticker symbol for the business unit. */
	TickerSymbol: string | null;
	/** Unique identifier of the currency associated with the businessunit. */
	TransactionCurrencyId: DevKit.Guid | null;
	readonly UserGroupId: DevKit.Guid | null;
	/** UTC offset for the business unit. This is the difference between local time and standard Coordinated Universal Time. */
	UTCOffset: number | null;
	/** Version number of the business unit. */
	readonly VersionNumber: number | null;
	/** Website URL for the business unit. */
	WebSiteUrl: string | null;
	/** Information about whether workflow or sales process rules have been suspended. */
	WorkflowSuspended: boolean | null;
}

const BusinessUnitFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Address1_AddressId: { logicalName: 'address1_addressid' },
	Address1_AddressTypeCode: { logicalName: 'address1_addresstypecode', type: 'Integer' },
	Address1_City: { logicalName: 'address1_city' },
	Address1_Country: { logicalName: 'address1_country' },
	Address1_County: { logicalName: 'address1_county' },
	Address1_Fax: { logicalName: 'address1_fax' },
	Address1_Latitude: { logicalName: 'address1_latitude', type: 'Number' },
	Address1_Line1: { logicalName: 'address1_line1' },
	Address1_Line2: { logicalName: 'address1_line2' },
	Address1_Line3: { logicalName: 'address1_line3' },
	Address1_Longitude: { logicalName: 'address1_longitude', type: 'Number' },
	Address1_Name: { logicalName: 'address1_name' },
	Address1_PostalCode: { logicalName: 'address1_postalcode' },
	Address1_PostOfficeBox: { logicalName: 'address1_postofficebox' },
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
	Address2_Country: { logicalName: 'address2_country' },
	Address2_County: { logicalName: 'address2_county' },
	Address2_Fax: { logicalName: 'address2_fax' },
	Address2_Latitude: { logicalName: 'address2_latitude', type: 'Number' },
	Address2_Line1: { logicalName: 'address2_line1' },
	Address2_Line2: { logicalName: 'address2_line2' },
	Address2_Line3: { logicalName: 'address2_line3' },
	Address2_Longitude: { logicalName: 'address2_longitude', type: 'Number' },
	Address2_Name: { logicalName: 'address2_name' },
	Address2_PostalCode: { logicalName: 'address2_postalcode' },
	Address2_PostOfficeBox: { logicalName: 'address2_postofficebox' },
	Address2_ShippingMethodCode: { logicalName: 'address2_shippingmethodcode', type: 'Integer' },
	Address2_StateOrProvince: { logicalName: 'address2_stateorprovince' },
	Address2_Telephone1: { logicalName: 'address2_telephone1' },
	Address2_Telephone2: { logicalName: 'address2_telephone2' },
	Address2_Telephone3: { logicalName: 'address2_telephone3' },
	Address2_UPSZone: { logicalName: 'address2_upszone' },
	Address2_UTCOffset: { logicalName: 'address2_utcoffset', type: 'Integer' },
	BusinessUnitId: { logicalName: 'businessunitid' },
	CalendarId: { schemaName: 'CalendarId', logicalName: '_calendarid_value', entityCollectionName: 'calendars', entityLogicalName: 'calendar' },
	CostCenter: { logicalName: 'costcenter' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreditLimit: { logicalName: 'creditlimit', type: 'Number' },
	Description: { logicalName: 'description' },
	DisabledReason: { logicalName: 'disabledreason', readOnly: true },
	DivisionName: { logicalName: 'divisionname' },
	EMailAddress: { logicalName: 'emailaddress' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	FileAsName: { logicalName: 'fileasname' },
	FtpSiteUrl: { logicalName: 'ftpsiteurl' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InheritanceMask: { logicalName: 'inheritancemask', type: 'Integer' },
	IsDisabled: { logicalName: 'isdisabled', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	ParentBusinessUnitId: { schemaName: 'ParentBusinessUnitId', logicalName: '_parentbusinessunitid_value', entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	Picture: { logicalName: 'picture' },
	StockExchange: { logicalName: 'stockexchange' },
	TickerSymbol: { logicalName: 'tickersymbol' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UserGroupId: { logicalName: 'usergroupid', readOnly: true },
	UTCOffset: { logicalName: 'utcoffset', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WebSiteUrl: { logicalName: 'websiteurl' },
	WorkflowSuspended: { logicalName: 'workflowsuspended', type: 'Boolean' },
};

/**
 * BusinessUnit WebApi class for early-bound style coding
 * Usage: const businessUnit = new BusinessUnitApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class BusinessUnitApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IBusinessUnitApi>(entity, 'businessunit', 'businessunits', BusinessUnitFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface BusinessUnitApi extends IBusinessUnitApi { }

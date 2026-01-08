/**
 * CustomerAddress.webapi.ts - CustomerAddress WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for CustomerAddress
 * All fields return string representation of their values
 */
export interface ICustomerAddressFormattedValue {
	readonly AddressNumber: string;
	readonly AddressTypeCode: string;
	readonly City: string;
	readonly Composite: string;
	readonly Country: string;
	readonly County: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CustomerAddressId: string;
	readonly ExchangeRate: string;
	readonly Fax: string;
	readonly FreightTermsCode: string;
	readonly ImportSequenceNumber: string;
	readonly Latitude: string;
	readonly Line1: string;
	readonly Line2: string;
	readonly Line3: string;
	readonly Longitude: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningUser: string;
	readonly ParentId: string;
	readonly PostalCode: string;
	readonly PostOfficeBox: string;
	readonly PrimaryContactName: string;
	readonly ShippingMethodCode: string;
	readonly StateOrProvince: string;
	readonly Telephone1: string;
	readonly Telephone2: string;
	readonly Telephone3: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TransactionCurrencyId: string;
	readonly UPSZone: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly UTCOffset: string;
	readonly VersionNumber: string;
}

/**
 * CustomerAddress WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ICustomerAddressApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ICustomerAddressFormattedValue;
	/** Shows the number of the address, to indicate whether the address is the primary, secondary, or other address for the customer. */
	AddressNumber: number | null;
	/** Select the address type, such as primary or billing. */
	AddressTypeCode: number | null;
	/** Type the city for the customer's address to help identify the location. */
	City: string | null;
	/** Shows the complete address. */
	readonly Composite: string | null;
	/** Type the country or region for the customer's address. */
	Country: string | null;
	/** Type the county for the customer's address. */
	County: string | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the customer address. */
	CustomerAddressId: DevKit.Guid | null;
	/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
	readonly ExchangeRate: number | null;
	/** Type the fax number associated with the customer's address. */
	Fax: string | null;
	/** Select the freight terms to make sure shipping charges are processed correctly. */
	FreightTermsCode: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Type the latitude value for the customer's address, for use in mapping and other applications. */
	Latitude: number | null;
	/** Type the first line of the customer's address to help identify the location. */
	Line1: string | null;
	/** Type the second line of the customer's address. */
	Line2: string | null;
	/** Type the third line of the customer's address. */
	Line3: string | null;
	/** Type the longitude value for the customer's address, for use in mapping and other applications. */
	Longitude: number | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type a descriptive name for the customer's address, such as Corporate Headquarters. */
	Name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	readonly OwnerId: DevKit.Guid | null;
	/** Shows the business unit that the record owner belongs to. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the user who owns the customer address. */
	readonly OwningUser: DevKit.Guid | null;
	/** Choose the customer's address. */
	ParentId: DevKit.Guid | null;
	/** Type the ZIP Code or postal code for the address. */
	PostalCode: string | null;
	/** Type the post office box number of the customer's address. */
	PostOfficeBox: string | null;
	/** Type the name of the primary contact person for the customer's address. */
	PrimaryContactName: string | null;
	/** Select a shipping method for deliveries sent to this address. */
	ShippingMethodCode: number | null;
	/** Type the state or province of the customer's address. */
	StateOrProvince: string | null;
	/** Type the primary phone number for the customer's address. */
	Telephone1: string | null;
	/** Type a second phone number for the customer's address. */
	Telephone2: string | null;
	/** Type a third phone number for the customer's address. */
	Telephone3: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Type the UPS zone of the customer's address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
	UPSZone: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Select the time zone for the address. */
	UTCOffset: number | null;
	/** Version number of the customer address. */
	readonly VersionNumber: number | null;
}

const CustomerAddressFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AddressNumber: { logicalName: 'addressnumber', type: 'Integer' },
	AddressTypeCode: { logicalName: 'addresstypecode', type: 'Integer' },
	City: { logicalName: 'city' },
	Composite: { logicalName: 'composite', readOnly: true },
	Country: { logicalName: 'country' },
	County: { logicalName: 'county' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomerAddressId: { logicalName: 'customeraddressid' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	Fax: { logicalName: 'fax' },
	FreightTermsCode: { logicalName: 'freighttermscode', type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	Latitude: { logicalName: 'latitude', type: 'Number' },
	Line1: { logicalName: 'line1' },
	Line2: { logicalName: 'line2' },
	Line3: { logicalName: 'line3' },
	Longitude: { logicalName: 'longitude', type: 'Number' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ParentId: { schemaName: 'ParentId', logicalName: '_parentid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	PostalCode: { logicalName: 'postalcode' },
	PostOfficeBox: { logicalName: 'postofficebox' },
	PrimaryContactName: { logicalName: 'primarycontactname' },
	ShippingMethodCode: { logicalName: 'shippingmethodcode', type: 'Integer' },
	StateOrProvince: { logicalName: 'stateorprovince' },
	Telephone1: { logicalName: 'telephone1' },
	Telephone2: { logicalName: 'telephone2' },
	Telephone3: { logicalName: 'telephone3' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UPSZone: { logicalName: 'upszone' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	UTCOffset: { logicalName: 'utcoffset', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * CustomerAddress WebApi class for early-bound style coding
 * Usage: const customerAddress = new CustomerAddressApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class CustomerAddressApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ICustomerAddressApi>(entity, 'customeraddress', 'customeraddresses', CustomerAddressFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface CustomerAddressApi extends ICustomerAddressApi { }

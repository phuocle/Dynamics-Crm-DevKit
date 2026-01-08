/**
 * PublisherAddress.webapi.ts - PublisherAddress WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for PublisherAddress
 * All fields return string representation of their values
 */
export interface IPublisherAddressFormattedValue {
	readonly AddressNumber: string;
	readonly AddressTypeCode: string;
	readonly City: string;
	readonly Country: string;
	readonly County: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
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
	readonly ParentId: string;
	readonly PostalCode: string;
	readonly PostOfficeBox: string;
	readonly PrimaryContactName: string;
	readonly PublisherAddressId: string;
	readonly ShippingMethodCode: string;
	readonly StateOrProvince: string;
	readonly Telephone1: string;
	readonly Telephone2: string;
	readonly Telephone3: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UPSZone: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly UTCOffset: string;
	readonly VersionNumber: string;
}

/**
 * PublisherAddress WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPublisherAddressApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IPublisherAddressFormattedValue;
	/** Specifies which publisher address is applicable. */
	AddressNumber: number | null;
	/** Type of address for the publisher, such as billing, shipping, or primary address. */
	AddressTypeCode: number | null;
	/** City name in the publisher address. */
	City: string | null;
	/** Country/region name in the publisher address. */
	Country: string | null;
	/** County name in the publisher address. */
	County: string | null;
	/** Unique identifier of the user who created the publisher address. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the publisher address was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the publisher address. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Fax number for the publisher address. */
	Fax: string | null;
	/** Freight terms for the publisher address. */
	FreightTermsCode: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Latitude for the publisher address. */
	Latitude: number | null;
	/** First line for entering address information. */
	Line1: string | null;
	/** Second line for entering address information. */
	Line2: string | null;
	/** Third line for entering address information. */
	Line3: string | null;
	/** Longitude for the publisher address. */
	Longitude: number | null;
	/** Unique identifier of the user who last modified the publisher address. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the publisher address was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the publisher address. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name used to identify the publisher address. */
	Name: string | null;
	/** Unique identifier of the parent object with which the publisher address is associated. */
	ParentId: DevKit.Guid | null;
	/** ZIP Code or postal code in the publisher address. */
	PostalCode: string | null;
	/** Post office box number in the publisher address. */
	PostOfficeBox: string | null;
	/** Name of the primary contact at the publisher address. */
	PrimaryContactName: string | null;
	/** Unique identifier of the publisher address. */
	PublisherAddressId: DevKit.Guid | null;
	/** Method of shipment for the publisher address. */
	ShippingMethodCode: number | null;
	/** State or province in the publisher address. */
	StateOrProvince: string | null;
	/** First telephone number for the publisher address. */
	Telephone1: string | null;
	/** Second telephone number for the publisher address. */
	Telephone2: string | null;
	/** Third telephone number for the publisher address. */
	Telephone3: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** United Parcel Service (UPS) zone for the address of the publisher. */
	UPSZone: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** UTC offset for the address. This is the difference between local time and standard Coordinated Universal Time. */
	UTCOffset: number | null;
	readonly VersionNumber: number | null;
}

const PublisherAddressFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AddressNumber: { logicalName: 'addressnumber', type: 'Integer' },
	AddressTypeCode: { logicalName: 'addresstypecode', type: 'Integer' },
	City: { logicalName: 'city' },
	Country: { logicalName: 'country' },
	County: { logicalName: 'county' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
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
	ParentId: { schemaName: 'ParentId', logicalName: '_parentid_value', entityCollectionName: 'publishers', entityLogicalName: 'publisher' },
	PostalCode: { logicalName: 'postalcode' },
	PostOfficeBox: { logicalName: 'postofficebox' },
	PrimaryContactName: { logicalName: 'primarycontactname' },
	PublisherAddressId: { logicalName: 'publisheraddressid' },
	ShippingMethodCode: { logicalName: 'shippingmethodcode', type: 'Integer' },
	StateOrProvince: { logicalName: 'stateorprovince' },
	Telephone1: { logicalName: 'telephone1' },
	Telephone2: { logicalName: 'telephone2' },
	Telephone3: { logicalName: 'telephone3' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UPSZone: { logicalName: 'upszone' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	UTCOffset: { logicalName: 'utcoffset', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * PublisherAddress WebApi class for early-bound style coding
 * Usage: const publisherAddress = new PublisherAddressApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PublisherAddressApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPublisherAddressApi>(entity, 'publisheraddress', 'publisheraddresses', PublisherAddressFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PublisherAddressApi extends IPublisherAddressApi { }

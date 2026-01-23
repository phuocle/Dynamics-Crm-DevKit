/**
 * InternalAddress.webapi.ts - InternalAddress WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * InternalAddress WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IInternalAddressApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IInternalAddressApi, 'FormattedValue'>]: string };
	/** Information about which internal address is applicable. */
	AddressNumber: number | null;
	/** Type of address for the internal address. */
	AddressTypeCode: number | null;
	readonly BusinessUnitId: DevKit.Guid | null;
	/** City name in the internal address. */
	City: string | null;
	/** Shows the complete address. */
	readonly Composite: string | null;
	/** Country/region name in the internal address. */
	Country: string | null;
	/** County name in the internal address. */
	County: string | null;
	/** Unique identifier of the user who created the internal address record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the internal address was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the internal address. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Fax number for the internal address. */
	Fax: string | null;
	/** Unique identifier of the internal address. */
	InternalAddressId: DevKit.Guid | null;
	/** Latitude for the internal address. */
	Latitude: number | null;
	/** First line for entering address information. */
	Line1: string | null;
	/** Second line for entering address information. */
	Line2: string | null;
	/** Third line for entering address information. */
	Line3: string | null;
	/** Longitude for the internal address. */
	Longitude: number | null;
	/** Unique identifier of the user who last modified the internal address. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the internal address record was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the internaladdress. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name used to identify the internal address. */
	Name: string | null;
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier of the parent object with which the internal address is associated. */
	ParentId: DevKit.Guid | null;
	/** ZIP Code or postal code in the internal address. */
	PostalCode: string | null;
	/** Post office box number in the internal address. */
	PostOfficeBox: string | null;
	/** Method of shipment for the internal address. */
	ShippingMethodCode: number | null;
	/** State or province in the internal address. */
	StateOrProvince: string | null;
	/** First telephone number for the internal address. */
	Telephone1: string | null;
	/** Second telephone number for an internal address. */
	Telephone2: string | null;
	/** Third telephone number for an internal address. */
	Telephone3: string | null;
	/** United Parcel Service (UPS) zone for the internal address. */
	UPSZone: string | null;
	/** UTC offset for the internal address. The difference between local time and standard Coordinated Universal Time. */
	UTCOffset: number | null;
	/** Version number of the internal address. */
	readonly VersionNumber: number | null;
}

const InternalAddressFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AddressNumber: { logicalName: 'addressnumber', type: 'Integer' },
	AddressTypeCode: { logicalName: 'addresstypecode', type: 'Integer' },
	BusinessUnitId: { logicalName: 'businessunitid', readOnly: true },
	City: { logicalName: 'city' },
	Composite: { logicalName: 'composite', readOnly: true },
	Country: { logicalName: 'country' },
	County: { logicalName: 'county' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Fax: { logicalName: 'fax' },
	InternalAddressId: { logicalName: 'internaladdressid' },
	Latitude: { logicalName: 'latitude', type: 'Number' },
	Line1: { logicalName: 'line1' },
	Line2: { logicalName: 'line2' },
	Line3: { logicalName: 'line3' },
	Longitude: { logicalName: 'longitude', type: 'Number' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	ParentId: { logicalName: 'parentid' },
	PostalCode: { logicalName: 'postalcode' },
	PostOfficeBox: { logicalName: 'postofficebox' },
	ShippingMethodCode: { logicalName: 'shippingmethodcode', type: 'Integer' },
	StateOrProvince: { logicalName: 'stateorprovince' },
	Telephone1: { logicalName: 'telephone1' },
	Telephone2: { logicalName: 'telephone2' },
	Telephone3: { logicalName: 'telephone3' },
	UPSZone: { logicalName: 'upszone' },
	UTCOffset: { logicalName: 'utcoffset', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * InternalAddress WebApi class for early-bound style coding
 * Usage: const internalAddress = new InternalAddressApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class InternalAddressApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IInternalAddressApi>(entity, 'internaladdress', 'internaladdresses', InternalAddressFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface InternalAddressApi extends IInternalAddressApi { }

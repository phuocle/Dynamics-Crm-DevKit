/**
 * Publisher.webapi.ts - Publisher WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Publisher WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPublisherApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IPublisherApi, 'FormattedValue'>]: string };
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
	/** Type of address for address 2. such as billing, shipping, or primary address. */
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
	/** Unique identifier of the user who created the publisher. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the publisher was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the publisher. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Default option value prefix used for newly created options for solutions associated with this publisher. */
	CustomizationOptionValuePrefix: number | null;
	/** Prefix used for new entities, attributes, and entity relationships for solutions associated with this publisher. */
	CustomizationPrefix: string | null;
	/** Description of the solution. */
	Description: string | null;
	/** Email address for the publisher. */
	EMailAddress: string | null;
	/** Shows the default image for the record. */
	EntityImage: string | null;
	/** For internal use only. */
	readonly EntityImageId: DevKit.Guid | null;
	/** User display name for this publisher. */
	FriendlyName: string | null;
	/** Indicates whether the publisher was created as part of a managed solution installation. */
	readonly IsReadonly: boolean | null;
	/** Unique identifier of the user who last modified the publisher. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the publisher was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the publisher. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the publisher. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Default locale of the publisher in Microsoft Pinpoint. */
	readonly PinpointPublisherDefaultLocale: string | null;
	/** Identifier of the publisher in Microsoft Pinpoint. */
	readonly PinpointPublisherId: number | null;
	/** Unique identifier of the publisher. */
	PublisherId: DevKit.Guid | null;
	/** URL for the supporting website of this publisher. */
	SupportingWebsiteUrl: string | null;
	/** The unique name of this publisher. */
	UniqueName: string | null;
	readonly VersionNumber: number | null;
}

const PublisherFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomizationOptionValuePrefix: { logicalName: 'customizationoptionvalueprefix', type: 'Integer' },
	CustomizationPrefix: { logicalName: 'customizationprefix' },
	Description: { logicalName: 'description' },
	EMailAddress: { logicalName: 'emailaddress' },
	EntityImage: { logicalName: 'entityimage' },
	EntityImageId: { logicalName: 'entityimageid', readOnly: true },
	FriendlyName: { logicalName: 'friendlyname' },
	IsReadonly: { logicalName: 'isreadonly', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	PinpointPublisherDefaultLocale: { logicalName: 'pinpointpublisherdefaultlocale', readOnly: true },
	PinpointPublisherId: { logicalName: 'pinpointpublisherid', readOnly: true, type: 'Integer' },
	PublisherId: { logicalName: 'publisherid' },
	SupportingWebsiteUrl: { logicalName: 'supportingwebsiteurl' },
	UniqueName: { logicalName: 'uniquename' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Publisher WebApi class for early-bound style coding
 * Usage: const publisher = new PublisherApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PublisherApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPublisherApi>(entity, 'publisher', 'publishers', PublisherFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PublisherApi extends IPublisherApi { }

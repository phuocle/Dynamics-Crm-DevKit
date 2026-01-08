//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class PublisherApi {
		/**
		* DynamicsCrm.DevKit PublisherApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
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
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier for address 1. */
		Address1_AddressId: string | null;
		/** Type of address for address 1, such as billing, shipping, or primary address. */
		Address1_AddressTypeCode: OptionSet.Publisher.Address1_AddressTypeCode | null;
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
		Address1_ShippingMethodCode: OptionSet.Publisher.Address1_ShippingMethodCode | null;
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
		Address2_AddressId: string | null;
		/** Type of address for address 2. such as billing, shipping, or primary address. */
		Address2_AddressTypeCode: OptionSet.Publisher.Address2_AddressTypeCode | null;
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
		Address2_ShippingMethodCode: OptionSet.Publisher.Address2_ShippingMethodCode | null;
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
		readonly CreatedBy: string | null;
		/** Date and time when the publisher was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the publisher. */
		readonly CreatedOnBehalfBy: string | null;
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
		EntityImage_Timestamp: number | null;
		EntityImage_URL: string | null;
		/** For internal use only. */
		readonly EntityImageId: string | null;
		/** User display name for this publisher. */
		FriendlyName: string | null;
		/** Indicates whether the publisher was created as part of a managed solution installation. */
		readonly IsReadonly: boolean | null;
		/** Unique identifier of the user who last modified the publisher. */
		readonly ModifiedBy: string | null;
		/** Date and time when the publisher was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the publisher. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier of the organization associated with the publisher. */
		readonly OrganizationId: string | null;
		/** Default locale of the publisher in Microsoft Pinpoint. */
		readonly PinpointPublisherDefaultLocale: string | null;
		/** Identifier of the publisher in Microsoft Pinpoint. */
		readonly PinpointPublisherId: number | null;
		/** Unique identifier of the publisher. */
		PublisherId: string | null;
		/** URL for the supporting website of this publisher. */
		SupportingWebsiteUrl: string | null;
		/** The unique name of this publisher. */
		UniqueName: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier for address 1. */
			readonly Address1_AddressId: string;
			/** Type of address for address 1, such as billing, shipping, or primary address. */
			readonly Address1_AddressTypeCode: string;
			/** City name for address 1. */
			readonly Address1_City: string;
			/** Country/region name for address 1. */
			readonly Address1_Country: string;
			/** County name for address 1. */
			readonly Address1_County: string;
			/** Fax number for address 1. */
			readonly Address1_Fax: string;
			/** Latitude for address 1. */
			readonly Address1_Latitude: string;
			/** First line for entering address 1 information. */
			readonly Address1_Line1: string;
			/** Second line for entering address 1 information. */
			readonly Address1_Line2: string;
			/** Third line for entering address 1 information. */
			readonly Address1_Line3: string;
			/** Longitude for address 1. */
			readonly Address1_Longitude: string;
			/** Name to enter for address 1. */
			readonly Address1_Name: string;
			/** ZIP Code or postal code for address 1. */
			readonly Address1_PostalCode: string;
			/** Post office box number for address 1. */
			readonly Address1_PostOfficeBox: string;
			/** Method of shipment for address 1. */
			readonly Address1_ShippingMethodCode: string;
			/** State or province for address 1. */
			readonly Address1_StateOrProvince: string;
			/** First telephone number associated with address 1. */
			readonly Address1_Telephone1: string;
			/** Second telephone number associated with address 1. */
			readonly Address1_Telephone2: string;
			/** Third telephone number associated with address 1. */
			readonly Address1_Telephone3: string;
			/** United Parcel Service (UPS) zone for address 1. */
			readonly Address1_UPSZone: string;
			/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
			readonly Address1_UTCOffset: string;
			/** Unique identifier for address 2. */
			readonly Address2_AddressId: string;
			/** Type of address for address 2. such as billing, shipping, or primary address. */
			readonly Address2_AddressTypeCode: string;
			/** City name for address 2. */
			readonly Address2_City: string;
			/** Country/region name for address 2. */
			readonly Address2_Country: string;
			/** County name for address 2. */
			readonly Address2_County: string;
			/** Fax number for address 2. */
			readonly Address2_Fax: string;
			/** Latitude for address 2. */
			readonly Address2_Latitude: string;
			/** First line for entering address 2 information. */
			readonly Address2_Line1: string;
			/** Second line for entering address 2 information. */
			readonly Address2_Line2: string;
			/** Third line for entering address 2 information. */
			readonly Address2_Line3: string;
			/** Longitude for address 2. */
			readonly Address2_Longitude: string;
			/** Name to enter for address 2. */
			readonly Address2_Name: string;
			/** ZIP Code or postal code for address 2. */
			readonly Address2_PostalCode: string;
			/** Post office box number for address 2. */
			readonly Address2_PostOfficeBox: string;
			/** Method of shipment for address 2. */
			readonly Address2_ShippingMethodCode: string;
			/** State or province for address 2. */
			readonly Address2_StateOrProvince: string;
			/** First telephone number associated with address 2. */
			readonly Address2_Telephone1: string;
			/** Second telephone number associated with address 2. */
			readonly Address2_Telephone2: string;
			/** Third telephone number associated with address 2. */
			readonly Address2_Telephone3: string;
			/** United Parcel Service (UPS) zone for address 2. */
			readonly Address2_UPSZone: string;
			/** UTC offset for address 2. This is the difference between local time and standard Coordinated Universal Time. */
			readonly Address2_UTCOffset: string;
			/** Unique identifier of the user who created the publisher. */
			readonly CreatedBy: string;
			/** Date and time when the publisher was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the publisher. */
			readonly CreatedOnBehalfBy: string;
			/** Default option value prefix used for newly created options for solutions associated with this publisher. */
			readonly CustomizationOptionValuePrefix: string;
			/** Prefix used for new entities, attributes, and entity relationships for solutions associated with this publisher. */
			readonly CustomizationPrefix: string;
			/** Description of the solution. */
			readonly Description: string;
			/** Email address for the publisher. */
			readonly EMailAddress: string;
			/** Shows the default image for the record. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** For internal use only. */
			readonly EntityImageId: string;
			/** User display name for this publisher. */
			readonly FriendlyName: string;
			/** Indicates whether the publisher was created as part of a managed solution installation. */
			readonly IsReadonly: string;
			/** Unique identifier of the user who last modified the publisher. */
			readonly ModifiedBy: string;
			/** Date and time when the publisher was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the publisher. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the publisher. */
			readonly OrganizationId: string;
			/** Default locale of the publisher in Microsoft Pinpoint. */
			readonly PinpointPublisherDefaultLocale: string;
			/** Identifier of the publisher in Microsoft Pinpoint. */
			readonly PinpointPublisherId: string;
			/** Unique identifier of the publisher. */
			readonly PublisherId: string;
			/** URL for the supporting website of this publisher. */
			readonly SupportingWebsiteUrl: string;
			/** The unique name of this publisher. */
			readonly UniqueName: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Publisher {
		enum Address1_AddressTypeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address1_ShippingMethodCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address2_AddressTypeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address2_ShippingMethodCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
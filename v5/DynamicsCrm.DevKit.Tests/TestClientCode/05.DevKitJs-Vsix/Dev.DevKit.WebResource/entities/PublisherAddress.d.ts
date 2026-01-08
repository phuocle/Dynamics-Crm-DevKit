//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class PublisherAddressApi {
		/**
		* DynamicsCrm.DevKit PublisherAddressApi
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
		/** Specifies which publisher address is applicable. */
		AddressNumber: number | null;
		/** Type of address for the publisher, such as billing, shipping, or primary address. */
		AddressTypeCode: OptionSet.PublisherAddress.AddressTypeCode | null;
		/** City name in the publisher address. */
		City: string | null;
		/** Country/region name in the publisher address. */
		Country: string | null;
		/** County name in the publisher address. */
		County: string | null;
		/** Unique identifier of the user who created the publisher address. */
		readonly CreatedBy: string | null;
		/** Date and time when the publisher address was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the publisher address. */
		readonly CreatedOnBehalfBy: string | null;
		/** Fax number for the publisher address. */
		Fax: string | null;
		/** Freight terms for the publisher address. */
		FreightTermsCode: OptionSet.PublisherAddress.FreightTermsCode | null;
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
		readonly ModifiedBy: string | null;
		/** Date and time when the publisher address was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the publisher address. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name used to identify the publisher address. */
		Name: string | null;
		/** Unique identifier of the parent object with which the publisher address is associated. */
		ParentId: string | null;
		/** ZIP Code or postal code in the publisher address. */
		PostalCode: string | null;
		/** Post office box number in the publisher address. */
		PostOfficeBox: string | null;
		/** Name of the primary contact at the publisher address. */
		PrimaryContactName: string | null;
		/** Unique identifier of the publisher address. */
		PublisherAddressId: string | null;
		/** Method of shipment for the publisher address. */
		ShippingMethodCode: OptionSet.PublisherAddress.ShippingMethodCode | null;
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
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Specifies which publisher address is applicable. */
			readonly AddressNumber: string;
			/** Type of address for the publisher, such as billing, shipping, or primary address. */
			readonly AddressTypeCode: string;
			/** City name in the publisher address. */
			readonly City: string;
			/** Country/region name in the publisher address. */
			readonly Country: string;
			/** County name in the publisher address. */
			readonly County: string;
			/** Unique identifier of the user who created the publisher address. */
			readonly CreatedBy: string;
			/** Date and time when the publisher address was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the publisher address. */
			readonly CreatedOnBehalfBy: string;
			/** Fax number for the publisher address. */
			readonly Fax: string;
			/** Freight terms for the publisher address. */
			readonly FreightTermsCode: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Latitude for the publisher address. */
			readonly Latitude: string;
			/** First line for entering address information. */
			readonly Line1: string;
			/** Second line for entering address information. */
			readonly Line2: string;
			/** Third line for entering address information. */
			readonly Line3: string;
			/** Longitude for the publisher address. */
			readonly Longitude: string;
			/** Unique identifier of the user who last modified the publisher address. */
			readonly ModifiedBy: string;
			/** Date and time when the publisher address was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the publisher address. */
			readonly ModifiedOnBehalfBy: string;
			/** Name used to identify the publisher address. */
			readonly Name: string;
			/** Unique identifier of the parent object with which the publisher address is associated. */
			readonly ParentId: string;
			/** ZIP Code or postal code in the publisher address. */
			readonly PostalCode: string;
			/** Post office box number in the publisher address. */
			readonly PostOfficeBox: string;
			/** Name of the primary contact at the publisher address. */
			readonly PrimaryContactName: string;
			/** Unique identifier of the publisher address. */
			readonly PublisherAddressId: string;
			/** Method of shipment for the publisher address. */
			readonly ShippingMethodCode: string;
			/** State or province in the publisher address. */
			readonly StateOrProvince: string;
			/** First telephone number for the publisher address. */
			readonly Telephone1: string;
			/** Second telephone number for the publisher address. */
			readonly Telephone2: string;
			/** Third telephone number for the publisher address. */
			readonly Telephone3: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** United Parcel Service (UPS) zone for the address of the publisher. */
			readonly UPSZone: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** UTC offset for the address. This is the difference between local time and standard Coordinated Universal Time. */
			readonly UTCOffset: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PublisherAddress {
		enum AddressTypeCode {
			/** Bill_To = 1*/
			Bill_To = 1,
			/** Other = 4*/
			Other = 4,
			/** Primary = 3*/
			Primary = 3,
			/** Ship_To = 2*/
			Ship_To = 2
		}
		enum FreightTermsCode {
			/** FOB = 1*/
			FOB = 1,
			/** No_Charge = 2*/
			No_Charge = 2
		}
		enum ParentIdTypeCode {
		}
		enum ShippingMethodCode {
			/** Default = 1*/
			Default = 1
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
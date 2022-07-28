//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PublisherAddressApi {
		/**
		* DynamicsCrm.DevKit PublisherAddressApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Specifies which publisher address is applicable. */
		AddressNumber: number;
		/** Type of address for the publisher, such as billing, shipping, or primary address. */
		AddressTypeCode: OptionSet.PublisherAddress.AddressTypeCode;
		/** City name in the publisher address. */
		City: string;
		/** Country/region name in the publisher address. */
		Country: string;
		/** County name in the publisher address. */
		County: string;
		/** Unique identifier of the user who created the publisher address. */
		readonly CreatedBy: string;
		/** Date and time when the publisher address was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the publisher address. */
		readonly CreatedOnBehalfBy: string;
		/** Fax number for the publisher address. */
		Fax: string;
		/** Freight terms for the publisher address. */
		FreightTermsCode: OptionSet.PublisherAddress.FreightTermsCode;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Latitude for the publisher address. */
		Latitude: number;
		/** First line for entering address information. */
		Line1: string;
		/** Second line for entering address information. */
		Line2: string;
		/** Third line for entering address information. */
		Line3: string;
		/** Longitude for the publisher address. */
		Longitude: number;
		/** Unique identifier of the user who last modified the publisher address. */
		readonly ModifiedBy: string;
		/** Date and time when the publisher address was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the publisher address. */
		readonly ModifiedOnBehalfBy: string;
		/** Name used to identify the publisher address. */
		Name: string;
		/** Unique identifier of the parent object with which the publisher address is associated. */
		ParentId: string;
		/** ZIP Code or postal code in the publisher address. */
		PostalCode: string;
		/** Post office box number in the publisher address. */
		PostOfficeBox: string;
		/** Name of the primary contact at the publisher address. */
		PrimaryContactName: string;
		/** Unique identifier of the publisher address. */
		PublisherAddressId: string;
		/** Method of shipment for the publisher address. */
		ShippingMethodCode: OptionSet.PublisherAddress.ShippingMethodCode;
		/** State or province in the publisher address. */
		StateOrProvince: string;
		/** First telephone number for the publisher address. */
		Telephone1: string;
		/** Second telephone number for the publisher address. */
		Telephone2: string;
		/** Third telephone number for the publisher address. */
		Telephone3: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** United Parcel Service (UPS) zone for the address of the publisher. */
		UPSZone: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** UTC offset for the address. This is the difference between local time and standard Coordinated Universal Time. */
		UTCOffset: number;
		readonly VersionNumber: number;
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
			/** 1 */
			Bill_To,
			/** 4 */
			Other,
			/** 3 */
			Primary,
			/** 2 */
			Ship_To
		}
		enum FreightTermsCode {
			/** 1 */
			FOB,
			/** 2 */
			No_Charge
		}
		enum ParentIdTypeCode {
		}
		enum ShippingMethodCode {
			/** 1 */
			Default
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
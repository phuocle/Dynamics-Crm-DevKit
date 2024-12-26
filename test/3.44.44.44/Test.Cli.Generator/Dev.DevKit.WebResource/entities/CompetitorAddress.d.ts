//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class CompetitorAddressApi {
		/**
		* DynamicsCrm.DevKit CompetitorAddressApi
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
		/** Information about which competitor address is applicable. */
		AddressNumber: number;
		/** Type of address for the competitor, such as primary address. */
		AddressTypeCode: OptionSet.CompetitorAddress.AddressTypeCode;
		/** City name in the competitor address. */
		City: string;
		/** Unique identifier of the competitor address. */
		CompetitorAddressId: string;
		/** Shows the complete address. */
		readonly Composite: string;
		/** Country/region name in the competitor address. */
		Country: string;
		/** County name in the competitor address. */
		County: string;
		/** Unique identifier of the user who created the competitor address. */
		readonly CreatedBy: string;
		/** Date and time when the competitor address was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the competitor address. */
		readonly CreatedOnBehalfBy: string;
		/** Fax number for the competitor address. */
		Fax: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Latitude for the competitor address. */
		Latitude: number;
		/** First line for entering address information. */
		Line1: string;
		/** Second line for entering address information. */
		Line2: string;
		/** Third line for entering address information. */
		Line3: string;
		/** Longitude for the address for the competitor. */
		Longitude: number;
		/** Unique identifier of the user who last modified the competitor address. */
		readonly ModifiedBy: string;
		/** Date and time when the competitor address was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the competitor address. */
		readonly ModifiedOnBehalfBy: string;
		/** Name used to identify the competitor address. */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Unique identifier of the parent object with which the competitor address is associated. */
		ParentId: string;
		/** ZIP Code or postal code in the competitor address. */
		PostalCode: string;
		/** Post office box number in the competitor address. */
		PostOfficeBox: string;
		/** Method of shipment for the competitor. */
		ShippingMethodCode: OptionSet.CompetitorAddress.ShippingMethodCode;
		/** State or province in the competitor address. */
		StateOrProvince: string;
		/** First telephone number for the competitor address. */
		Telephone1: string;
		/** Second telephone number for the competitor address. */
		Telephone2: string;
		/** Third telephone number for the competitor address. */
		Telephone3: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** United Parcel Service (UPS) zone for the address of the competitor. */
		UPSZone: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
		UTCOffset: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Information about which competitor address is applicable. */
			readonly AddressNumber: string;
			/** Type of address for the competitor, such as primary address. */
			readonly AddressTypeCode: string;
			/** City name in the competitor address. */
			readonly City: string;
			/** Unique identifier of the competitor address. */
			readonly CompetitorAddressId: string;
			/** Shows the complete address. */
			readonly Composite: string;
			/** Country/region name in the competitor address. */
			readonly Country: string;
			/** County name in the competitor address. */
			readonly County: string;
			/** Unique identifier of the user who created the competitor address. */
			readonly CreatedBy: string;
			/** Date and time when the competitor address was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the competitor address. */
			readonly CreatedOnBehalfBy: string;
			/** Fax number for the competitor address. */
			readonly Fax: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Latitude for the competitor address. */
			readonly Latitude: string;
			/** First line for entering address information. */
			readonly Line1: string;
			/** Second line for entering address information. */
			readonly Line2: string;
			/** Third line for entering address information. */
			readonly Line3: string;
			/** Longitude for the address for the competitor. */
			readonly Longitude: string;
			/** Unique identifier of the user who last modified the competitor address. */
			readonly ModifiedBy: string;
			/** Date and time when the competitor address was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the competitor address. */
			readonly ModifiedOnBehalfBy: string;
			/** Name used to identify the competitor address. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Unique identifier of the parent object with which the competitor address is associated. */
			readonly ParentId: string;
			/** ZIP Code or postal code in the competitor address. */
			readonly PostalCode: string;
			/** Post office box number in the competitor address. */
			readonly PostOfficeBox: string;
			/** Method of shipment for the competitor. */
			readonly ShippingMethodCode: string;
			/** State or province in the competitor address. */
			readonly StateOrProvince: string;
			/** First telephone number for the competitor address. */
			readonly Telephone1: string;
			/** Second telephone number for the competitor address. */
			readonly Telephone2: string;
			/** Third telephone number for the competitor address. */
			readonly Telephone3: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** United Parcel Service (UPS) zone for the address of the competitor. */
			readonly UPSZone: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
			readonly UTCOffset: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace CompetitorAddress {
		enum AddressTypeCode {
		}
		enum ShippingMethodCode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
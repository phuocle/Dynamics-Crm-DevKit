//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class LeadAddressApi {
		/**
		* DynamicsCrm.DevKit LeadAddressApi
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
		/** Information about the address for the lead. */
		AddressNumber: number;
		/** Type of address for the lead address. */
		AddressTypeCode: OptionSet.LeadAddress.AddressTypeCode;
		/** City name in the address for the lead. */
		City: string;
		/** Shows the complete address. */
		readonly Composite: string;
		/** Country/region name in the address for the lead. */
		Country: string;
		/** County name in the address for the lead. */
		County: string;
		/** Unique identifier of the user who created the lead address. */
		readonly CreatedBy: string;
		/** Date and time when the lead address was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the leadaddress. */
		readonly CreatedOnBehalfBy: string;
		/** Exchange rate for the currency associated with the leadaddress with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Fax number for the address for the lead. */
		Fax: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Latitude for the address for the lead. */
		Latitude: number;
		/** Unique identifier of the lead address. */
		LeadAddressId: string;
		/** First line for entering address information. */
		Line1: string;
		/** Second line for entering address information. */
		Line2: string;
		/** Third line for entering address information. */
		Line3: string;
		/** Longitude for the address for the lead. */
		Longitude: number;
		/** Unique identifier of the user who last modified the lead address. */
		readonly ModifiedBy: string;
		/** Date and time when the lead address was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the leadaddress. */
		readonly ModifiedOnBehalfBy: string;
		/** Name used to identify the lead address. */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		readonly OwnerId: string;
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the parent object with which the lead address is associated. */
		ParentId: string;
		/** ZIP Code or postal code in the address for the lead. */
		PostalCode: string;
		/** Post office box number in the address for the lead. */
		PostOfficeBox: string;
		/** Method of shipment for the lead. */
		ShippingMethodCode: OptionSet.LeadAddress.ShippingMethodCode;
		/** State or province in the address for the lead. */
		StateOrProvince: string;
		/** First telephone number for the lead address. */
		Telephone1: string;
		/** Second telephone number for the lead address. */
		Telephone2: string;
		/** Third telephone number for the lead address. */
		Telephone3: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the leadaddress. */
		TransactionCurrencyId: string;
		/** United Parcel Service (UPS) zone for the address of the lead. */
		UPSZone: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** UTC offset for the lead address. This is the difference between local time and standard Coordinated Universal Time. */
		UTCOffset: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Information about the address for the lead. */
			readonly AddressNumber: string;
			/** Type of address for the lead address. */
			readonly AddressTypeCode: string;
			/** City name in the address for the lead. */
			readonly City: string;
			/** Shows the complete address. */
			readonly Composite: string;
			/** Country/region name in the address for the lead. */
			readonly Country: string;
			/** County name in the address for the lead. */
			readonly County: string;
			/** Unique identifier of the user who created the lead address. */
			readonly CreatedBy: string;
			/** Date and time when the lead address was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the leadaddress. */
			readonly CreatedOnBehalfBy: string;
			/** Exchange rate for the currency associated with the leadaddress with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Fax number for the address for the lead. */
			readonly Fax: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Latitude for the address for the lead. */
			readonly Latitude: string;
			/** Unique identifier of the lead address. */
			readonly LeadAddressId: string;
			/** First line for entering address information. */
			readonly Line1: string;
			/** Second line for entering address information. */
			readonly Line2: string;
			/** Third line for entering address information. */
			readonly Line3: string;
			/** Longitude for the address for the lead. */
			readonly Longitude: string;
			/** Unique identifier of the user who last modified the lead address. */
			readonly ModifiedBy: string;
			/** Date and time when the lead address was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the leadaddress. */
			readonly ModifiedOnBehalfBy: string;
			/** Name used to identify the lead address. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			readonly OwnerId: string;
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the parent object with which the lead address is associated. */
			readonly ParentId: string;
			/** ZIP Code or postal code in the address for the lead. */
			readonly PostalCode: string;
			/** Post office box number in the address for the lead. */
			readonly PostOfficeBox: string;
			/** Method of shipment for the lead. */
			readonly ShippingMethodCode: string;
			/** State or province in the address for the lead. */
			readonly StateOrProvince: string;
			/** First telephone number for the lead address. */
			readonly Telephone1: string;
			/** Second telephone number for the lead address. */
			readonly Telephone2: string;
			/** Third telephone number for the lead address. */
			readonly Telephone3: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the leadaddress. */
			readonly TransactionCurrencyId: string;
			/** United Parcel Service (UPS) zone for the address of the lead. */
			readonly UPSZone: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** UTC offset for the lead address. This is the difference between local time and standard Coordinated Universal Time. */
			readonly UTCOffset: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace LeadAddress {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Specifies which publisher address is applicable. */
		AddressNumber: DevKit.WebApi.IntegerValue;
		/** Type of address for the publisher, such as billing, shipping, or primary address. */
		AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** City name in the publisher address. */
		City: DevKit.WebApi.StringValue;
		/** Country/region name in the publisher address. */
		Country: DevKit.WebApi.StringValue;
		/** County name in the publisher address. */
		County: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the publisher address. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the publisher address was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the publisher address. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Fax number for the publisher address. */
		Fax: DevKit.WebApi.StringValue;
		/** Freight terms for the publisher address. */
		FreightTermsCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Latitude for the publisher address. */
		Latitude: DevKit.WebApi.DoubleValue;
		/** First line for entering address information. */
		Line1: DevKit.WebApi.StringValue;
		/** Second line for entering address information. */
		Line2: DevKit.WebApi.StringValue;
		/** Third line for entering address information. */
		Line3: DevKit.WebApi.StringValue;
		/** Longitude for the publisher address. */
		Longitude: DevKit.WebApi.DoubleValue;
		/** Unique identifier of the user who last modified the publisher address. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the publisher address was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the publisher address. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name used to identify the publisher address. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the parent object with which the publisher address is associated. */
		ParentId: DevKit.WebApi.LookupValue;
		/** ZIP Code or postal code in the publisher address. */
		PostalCode: DevKit.WebApi.StringValue;
		/** Post office box number in the publisher address. */
		PostOfficeBox: DevKit.WebApi.StringValue;
		/** Name of the primary contact at the publisher address. */
		PrimaryContactName: DevKit.WebApi.StringValue;
		/** Unique identifier of the publisher address. */
		PublisherAddressId: DevKit.WebApi.GuidValue;
		/** Method of shipment for the publisher address. */
		ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** State or province in the publisher address. */
		StateOrProvince: DevKit.WebApi.StringValue;
		/** First telephone number for the publisher address. */
		Telephone1: DevKit.WebApi.StringValue;
		/** Second telephone number for the publisher address. */
		Telephone2: DevKit.WebApi.StringValue;
		/** Third telephone number for the publisher address. */
		Telephone3: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** United Parcel Service (UPS) zone for the address of the publisher. */
		UPSZone: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** UTC offset for the address. This is the difference between local time and standard Coordinated Universal Time. */
		UTCOffset: DevKit.WebApi.IntegerValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace PublisherAddress {
		enum AddressTypeCode {
			/** 1 */
			Bill_To,
			/** 2 */
			Ship_To,
			/** 3 */
			Primary,
			/** 4 */
			Other
		}
		enum FreightTermsCode {
			/** 1 */
			FOB,
			/** 2 */
			No_Charge
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}
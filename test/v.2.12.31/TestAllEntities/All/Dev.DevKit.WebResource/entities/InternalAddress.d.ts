//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class InternalAddressApi {
		/**
		* DynamicsCrm.DevKit InternalAddressApi
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
		/** Information about which internal address is applicable. */
		AddressNumber: DevKit.WebApi.IntegerValue;
		/** Type of address for the internal address. */
		AddressTypeCode: DevKit.WebApi.OptionSetValue;
		BusinessUnitId: DevKit.WebApi.GuidValueReadonly;
		/** City name in the internal address. */
		City: DevKit.WebApi.StringValue;
		/** Shows the complete address. */
		Composite: DevKit.WebApi.StringValueReadonly;
		/** Country/region name in the internal address. */
		Country: DevKit.WebApi.StringValue;
		/** County name in the internal address. */
		County: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the internal address record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the internal address was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the internal address. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Fax number for the internal address. */
		Fax: DevKit.WebApi.StringValue;
		/** Unique identifier of the internal address. */
		InternalAddressId: DevKit.WebApi.GuidValue;
		/** Latitude for the internal address. */
		Latitude: DevKit.WebApi.DoubleValue;
		/** First line for entering address information. */
		Line1: DevKit.WebApi.StringValue;
		/** Second line for entering address information. */
		Line2: DevKit.WebApi.StringValue;
		/** Third line for entering address information. */
		Line3: DevKit.WebApi.StringValue;
		/** Longitude for the internal address. */
		Longitude: DevKit.WebApi.DoubleValue;
		/** Unique identifier of the user who last modified the internal address. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the internal address record was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the internaladdress. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name used to identify the internal address. */
		Name: DevKit.WebApi.StringValue;
		OrganizationId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the parent object with which the internal address is associated. */
		ParentId: DevKit.WebApi.GuidValue;
		/** ZIP Code or postal code in the internal address. */
		PostalCode: DevKit.WebApi.StringValue;
		/** Post office box number in the internal address. */
		PostOfficeBox: DevKit.WebApi.StringValue;
		/** Method of shipment for the internal address. */
		ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** State or province in the internal address. */
		StateOrProvince: DevKit.WebApi.StringValue;
		/** First telephone number for the internal address. */
		Telephone1: DevKit.WebApi.StringValue;
		/** Second telephone number for an internal address. */
		Telephone2: DevKit.WebApi.StringValue;
		/** Third telephone number for an internal address. */
		Telephone3: DevKit.WebApi.StringValue;
		/** United Parcel Service (UPS) zone for the internal address. */
		UPSZone: DevKit.WebApi.StringValue;
		/** UTC offset for the internal address. The difference between local time and standard Coordinated Universal Time. */
		UTCOffset: DevKit.WebApi.IntegerValue;
		/** Version number of the internal address. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace InternalAddress {
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
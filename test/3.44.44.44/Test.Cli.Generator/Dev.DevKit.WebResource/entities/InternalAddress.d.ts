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
		/** Information about which internal address is applicable. */
		AddressNumber: number;
		/** Type of address for the internal address. */
		AddressTypeCode: OptionSet.InternalAddress.AddressTypeCode;
		readonly BusinessUnitId: string;
		/** City name in the internal address. */
		City: string;
		/** Shows the complete address. */
		readonly Composite: string;
		/** Country/region name in the internal address. */
		Country: string;
		/** County name in the internal address. */
		County: string;
		/** Unique identifier of the user who created the internal address record. */
		readonly CreatedBy: string;
		/** Date and time when the internal address was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the internal address. */
		readonly CreatedOnBehalfBy: string;
		/** Fax number for the internal address. */
		Fax: string;
		/** Unique identifier of the internal address. */
		InternalAddressId: string;
		/** Latitude for the internal address. */
		Latitude: number;
		/** First line for entering address information. */
		Line1: string;
		/** Second line for entering address information. */
		Line2: string;
		/** Third line for entering address information. */
		Line3: string;
		/** Longitude for the internal address. */
		Longitude: number;
		/** Unique identifier of the user who last modified the internal address. */
		readonly ModifiedBy: string;
		/** Date and time when the internal address record was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the internaladdress. */
		readonly ModifiedOnBehalfBy: string;
		/** Name used to identify the internal address. */
		Name: string;
		readonly OrganizationId: string;
		/** Unique identifier of the parent object with which the internal address is associated. */
		ParentId: string;
		/** ZIP Code or postal code in the internal address. */
		PostalCode: string;
		/** Post office box number in the internal address. */
		PostOfficeBox: string;
		/** Method of shipment for the internal address. */
		ShippingMethodCode: OptionSet.InternalAddress.ShippingMethodCode;
		/** State or province in the internal address. */
		StateOrProvince: string;
		/** First telephone number for the internal address. */
		Telephone1: string;
		/** Second telephone number for an internal address. */
		Telephone2: string;
		/** Third telephone number for an internal address. */
		Telephone3: string;
		/** United Parcel Service (UPS) zone for the internal address. */
		UPSZone: string;
		/** UTC offset for the internal address. The difference between local time and standard Coordinated Universal Time. */
		UTCOffset: number;
		/** Version number of the internal address. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Information about which internal address is applicable. */
			readonly AddressNumber: string;
			/** Type of address for the internal address. */
			readonly AddressTypeCode: string;
			readonly BusinessUnitId: string;
			/** City name in the internal address. */
			readonly City: string;
			/** Shows the complete address. */
			readonly Composite: string;
			/** Country/region name in the internal address. */
			readonly Country: string;
			/** County name in the internal address. */
			readonly County: string;
			/** Unique identifier of the user who created the internal address record. */
			readonly CreatedBy: string;
			/** Date and time when the internal address was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the internal address. */
			readonly CreatedOnBehalfBy: string;
			/** Fax number for the internal address. */
			readonly Fax: string;
			/** Unique identifier of the internal address. */
			readonly InternalAddressId: string;
			/** Latitude for the internal address. */
			readonly Latitude: string;
			/** First line for entering address information. */
			readonly Line1: string;
			/** Second line for entering address information. */
			readonly Line2: string;
			/** Third line for entering address information. */
			readonly Line3: string;
			/** Longitude for the internal address. */
			readonly Longitude: string;
			/** Unique identifier of the user who last modified the internal address. */
			readonly ModifiedBy: string;
			/** Date and time when the internal address record was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the internaladdress. */
			readonly ModifiedOnBehalfBy: string;
			/** Name used to identify the internal address. */
			readonly Name: string;
			readonly OrganizationId: string;
			/** Unique identifier of the parent object with which the internal address is associated. */
			readonly ParentId: string;
			/** ZIP Code or postal code in the internal address. */
			readonly PostalCode: string;
			/** Post office box number in the internal address. */
			readonly PostOfficeBox: string;
			/** Method of shipment for the internal address. */
			readonly ShippingMethodCode: string;
			/** State or province in the internal address. */
			readonly StateOrProvince: string;
			/** First telephone number for the internal address. */
			readonly Telephone1: string;
			/** Second telephone number for an internal address. */
			readonly Telephone2: string;
			/** Third telephone number for an internal address. */
			readonly Telephone3: string;
			/** United Parcel Service (UPS) zone for the internal address. */
			readonly UPSZone: string;
			/** UTC offset for the internal address. The difference between local time and standard Coordinated Universal Time. */
			readonly UTCOffset: string;
			/** Version number of the internal address. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace InternalAddress {
		enum AddressTypeCode {
		}
		enum ObjectTypeCode {
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
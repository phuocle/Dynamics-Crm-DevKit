//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class InternalAddressApi {
		/**
		* DynamicsCrm.DevKit InternalAddressApi
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
		/** Information about which internal address is applicable. */
		AddressNumber: number | null;
		/** Type of address for the internal address. */
		AddressTypeCode: OptionSet.InternalAddress.AddressTypeCode | null;
		readonly BusinessUnitId: string | null;
		/** City name in the internal address. */
		City: string | null;
		/** Shows the complete address. */
		readonly Composite: string | null;
		/** Country/region name in the internal address. */
		Country: string | null;
		/** County name in the internal address. */
		County: string | null;
		/** Unique identifier of the user who created the internal address record. */
		readonly CreatedBy: string | null;
		/** Date and time when the internal address was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the internal address. */
		readonly CreatedOnBehalfBy: string | null;
		/** Fax number for the internal address. */
		Fax: string | null;
		/** Unique identifier of the internal address. */
		InternalAddressId: string | null;
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
		readonly ModifiedBy: string | null;
		/** Date and time when the internal address record was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the internaladdress. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name used to identify the internal address. */
		Name: string | null;
		readonly OrganizationId: string | null;
		/** Unique identifier of the parent object with which the internal address is associated. */
		ParentId: string | null;
		/** ZIP Code or postal code in the internal address. */
		PostalCode: string | null;
		/** Post office box number in the internal address. */
		PostOfficeBox: string | null;
		/** Method of shipment for the internal address. */
		ShippingMethodCode: OptionSet.InternalAddress.ShippingMethodCode | null;
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
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
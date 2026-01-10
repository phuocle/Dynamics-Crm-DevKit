//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class ACIViewMapperApi {
		/**
		* DynamicsCrm.DevKit ACIViewMapperApi
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
		/** Unique identifier for entity instances */
		ACIViewMapperId: string | null;
		/** Unique identifier of the user who created the display string. */
		readonly CreatedBy: string | null;
		/** Date and time when the display string was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the displaystring. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier of the user who last modified the display string. */
		readonly ModifiedBy: string | null;
		/** Date and time when the display string was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the displaystring. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier of the organization associated with the display string. */
		readonly OrganizationId: string | null;
		/** Status of the ACIViewMapper */
		readonly statecode: OptionSet.ACIViewMapper.statecode | null;
		/** Reason for the status of the Unit Group. */
		StatusCode: OptionSet.ACIViewMapper.StatusCode | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		readonly VersionNumber: number | null;
		ViewName: string | null;
		/** End point of web application */
		WebApplicationEndPoint: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier for entity instances */
			readonly ACIViewMapperId: string;
			/** Unique identifier of the user who created the display string. */
			readonly CreatedBy: string;
			/** Date and time when the display string was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the displaystring. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the user who last modified the display string. */
			readonly ModifiedBy: string;
			/** Date and time when the display string was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the displaystring. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the display string. */
			readonly OrganizationId: string;
			/** Status of the ACIViewMapper */
			readonly statecode: string;
			/** Reason for the status of the Unit Group. */
			readonly StatusCode: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
			readonly ViewName: string;
			/** End point of web application */
			readonly WebApplicationEndPoint: string;
		}
	}
}
declare namespace OptionSet {
	namespace ACIViewMapper {
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
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
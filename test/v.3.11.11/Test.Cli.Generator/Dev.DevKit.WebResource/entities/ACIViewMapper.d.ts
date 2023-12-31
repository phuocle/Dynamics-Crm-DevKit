//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ACIViewMapperApi {
		/**
		* DynamicsCrm.DevKit ACIViewMapperApi
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
		/** Unique identifier for entity instances */
		ACIViewMapperId: string;
		/** Unique identifier of the user who created the display string. */
		readonly CreatedBy: string;
		/** Date and time when the display string was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the displaystring. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier of the user who last modified the display string. */
		readonly ModifiedBy: string;
		/** Date and time when the display string was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the displaystring. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization associated with the display string. */
		readonly OrganizationId: string;
		/** Status of the ACIViewMapper */
		readonly statecode: OptionSet.ACIViewMapper.statecode;
		/** Reason for the status of the Unit Group. */
		StatusCode: OptionSet.ACIViewMapper.StatusCode;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		ViewName: string;
		/** End point of web application */
		WebApplicationEndPoint: string;
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
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
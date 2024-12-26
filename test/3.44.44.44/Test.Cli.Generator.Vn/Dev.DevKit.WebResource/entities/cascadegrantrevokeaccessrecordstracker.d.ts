//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class cascadegrantrevokeaccessrecordstrackerApi {
		/**
		* DynamicsCrm.DevKit cascadegrantrevokeaccessrecordstrackerApi
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
		cascadegrantrevokeaccessrecordstrackerId: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		ProcessedRecords: number;
		readonly RecordsAttachment_name: string;
		RecordsJson: string;
		/** Status of the CascadeGrantRevokeAccessRecordsTracker */
		statecode: OptionSet.cascadegrantrevokeaccessrecordstracker.statecode;
		/** Reason for the status of the CascadeGrantRevokeAccessRecordsTracker */
		statuscode: OptionSet.cascadegrantrevokeaccessrecordstracker.statuscode;
		SyncTrackerId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		TotalRecords: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly FormattedValue: {
			/** Unique identifier for entity instances */
			readonly cascadegrantrevokeaccessrecordstrackerId: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			readonly ProcessedRecords: string;
			readonly RecordsAttachment_name: string;
			readonly RecordsJson: string;
			/** Status of the CascadeGrantRevokeAccessRecordsTracker */
			readonly statecode: string;
			/** Reason for the status of the CascadeGrantRevokeAccessRecordsTracker */
			readonly statuscode: string;
			readonly SyncTrackerId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			readonly TotalRecords: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace cascadegrantrevokeaccessrecordstracker {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}
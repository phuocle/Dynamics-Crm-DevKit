//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class cascadegrantrevokeaccessrecordstrackerApi {
		/**
		* DynamicsCrm.DevKit cascadegrantrevokeaccessrecordstrackerApi
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
		cascadegrantrevokeaccessrecordstrackerId: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** The name of the custom entity. */
		name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		ProcessedRecords: number | null;
		readonly RecordsAttachment_name: string | null;
		RecordsJson: string | null;
		/** Status of the CascadeGrantRevokeAccessRecordsTracker */
		statecode: OptionSet.cascadegrantrevokeaccessrecordstracker.statecode | null;
		/** Reason for the status of the CascadeGrantRevokeAccessRecordsTracker */
		statuscode: OptionSet.cascadegrantrevokeaccessrecordstracker.statuscode | null;
		SyncTrackerId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		TotalRecords: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
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
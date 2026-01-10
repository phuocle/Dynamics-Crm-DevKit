//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class RollupJobApi {
		/**
		* DynamicsCrm.DevKit RollupJobApi
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
		readonly DepthProcessed: number | null;
		readonly PostponeUntil_UtcDateAndTime: Date | null;
		readonly RecordCreatedOn_UtcDateAndTime: Date | null;
		readonly RetryCount: number | null;
		readonly RollupJobId2: number | null;
		readonly RollupPropertiesId: string | null;
		readonly SourceEntityTypeCode: number | null;
		readonly StateCode: OptionSet.RollupJob.StateCode | null;
		readonly StatusCode: OptionSet.RollupJob.StatusCode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly DepthProcessed: string;
			readonly PostponeUntil_UtcDateAndTime: string;
			readonly RecordCreatedOn_UtcDateAndTime: string;
			readonly RetryCount: string;
			readonly RollupJobId2: string;
			readonly RollupPropertiesId: string;
			readonly SourceEntityTypeCode: string;
			readonly StateCode: string;
			readonly StatusCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace RollupJob {
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** Completed = 3*/
			Completed = 3,
			/** Locked = 2*/
			Locked = 2,
			/** Ready = 0*/
			Ready = 0,
			/** Suspended = 1*/
			Suspended = 1
		}
		enum StatusCode {
			/** Canceled = 32*/
			Canceled = 32,
			/** Canceling = 22*/
			Canceling = 22,
			/** Failed = 31*/
			Failed = 31,
			/** In_Progress = 20*/
			In_Progress = 20,
			/** Pausing = 21*/
			Pausing = 21,
			/** Succeeded = 30*/
			Succeeded = 30,
			/** Waiting = 10*/
			Waiting = 10,
			/** Waiting_For_Resources = 0*/
			Waiting_For_Resources = 0
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
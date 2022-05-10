//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class RollupJobApi {
		/**
		* DynamicsCrm.DevKit RollupJobApi
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
		readonly DepthProcessed: number;
		readonly PostponeUntil_UtcDateAndTime: Date;
		readonly RecordCreatedOn_UtcDateAndTime: Date;
		readonly RetryCount: number;
		readonly RollupJobId1: number;
		readonly RollupPropertiesId: string;
		readonly SourceEntityTypeCode: number;
		readonly StateCode: OptionSet.RollupJob.StateCode;
		readonly StatusCode: OptionSet.RollupJob.StatusCode;
		readonly FormattedValue: {
			readonly DepthProcessed: string;
			readonly PostponeUntil_UtcDateAndTime: string;
			readonly RecordCreatedOn_UtcDateAndTime: string;
			readonly RetryCount: string;
			readonly RollupJobId1: string;
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
			/** 3 */
			Completed,
			/** 2 */
			Locked,
			/** 0 */
			Ready,
			/** 1 */
			Suspended
		}
		enum StatusCode {
			/** 32 */
			Canceled,
			/** 22 */
			Canceling,
			/** 31 */
			Failed,
			/** 20 */
			In_Progress,
			/** 21 */
			Pausing,
			/** 30 */
			Succeeded,
			/** 10 */
			Waiting,
			/** 0 */
			Waiting_For_Resources
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class RollupPropertiesApi {
		/**
		* DynamicsCrm.DevKit RollupPropertiesApi
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
		/** Logical name of target attribute */
		readonly AggregateAttributeLogicalName: string;
		/** Logical name of target entity */
		readonly AggregateEntityLogicalName: string;
		/** Type code of aggregate entity */
		readonly AggregateEntityTypeCode: number;
		/** Filter criteria for target */
		readonly AggregateFilterAttributes: string;
		/** Relationship name of the source-target relationship. */
		readonly AggregateRelationshipName: string;
		/** Type of aggregation to perform */
		readonly AggregateType: OptionSet.RollupProperties.AggregateType;
		/** Allow source entity to be hierarchical */
		readonly AllowHierarchyOnSource: boolean;
		/** Depth used for bootstrap calculations */
		readonly BootstrapCurrentDepth: number;
		/** Retry count for bootstrap */
		readonly BootstrapRetryCount: number;
		/** Unique identifier representing the mass calculate async job id. */
		readonly BootstrapRollupAsyncJobId: string;
		/** Step number to start bootstrap execution */
		readonly BootstrapStepNumber: number;
		/** Target pointer used for bootstrap calculations */
		readonly BootstrapTargetPointer: number;
		/** Rollup field data type */
		readonly DataType: string;
		/** Unique identifier representing the calculate entity async job id. */
		readonly IncrementalRollupAsyncJobId: string;
		/** Status of initial value calculation. */
		readonly InitialValueCalculationStatus: OptionSet.RollupProperties.InitialValueCalculationStatus;
		/** Flag indicating whether Activity Party is included */
		readonly IsActivityPartyIncluded: number;
		/** Last time when calculations were performed for this rollup field. */
		readonly LastCalculationTime_UtcDateAndTime: Date;
		/** Logical name of source attribute */
		readonly RollupAttributeLogicalName: string;
		/** Base Table Name Of Rollup Entity */
		readonly RollupEntityBaseTableName: string;
		/** Logical name of source entity */
		readonly RollupEntityLogicalName: string;
		/** Physical Name of Primary Key Of Rollup Entity */
		readonly RollupEntityPrimaryKeyPhysicalName: string;
		/** Type code of rollup entity */
		readonly RollupEntityTypeCode: number;
		/** Filter criteria for source */
		readonly RollupFilterAttributes: string;
		/** Unique identifier of the current record. */
		readonly RollupPropertiesId: string;
		/** Physical Name of Rollup State Attribute */
		readonly RollupStateAttributePhysicalName: string;
		/** Relationship name of the source hierarchical relationship */
		readonly SourceHierarchicalRelationshipName: string;
		/** Status of the Rollup. */
		readonly StateCode: OptionSet.RollupProperties.StateCode;
		/** Additional information about status of the rollup properties. */
		readonly StatusCode: OptionSet.RollupProperties.StatusCode;
		/** Version number of rollup. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Logical name of target attribute */
			readonly AggregateAttributeLogicalName: string;
			/** Logical name of target entity */
			readonly AggregateEntityLogicalName: string;
			/** Type code of aggregate entity */
			readonly AggregateEntityTypeCode: string;
			/** Filter criteria for target */
			readonly AggregateFilterAttributes: string;
			/** Relationship name of the source-target relationship. */
			readonly AggregateRelationshipName: string;
			/** Type of aggregation to perform */
			readonly AggregateType: string;
			/** Allow source entity to be hierarchical */
			readonly AllowHierarchyOnSource: string;
			/** Depth used for bootstrap calculations */
			readonly BootstrapCurrentDepth: string;
			/** Retry count for bootstrap */
			readonly BootstrapRetryCount: string;
			/** Unique identifier representing the mass calculate async job id. */
			readonly BootstrapRollupAsyncJobId: string;
			/** Step number to start bootstrap execution */
			readonly BootstrapStepNumber: string;
			/** Target pointer used for bootstrap calculations */
			readonly BootstrapTargetPointer: string;
			/** Rollup field data type */
			readonly DataType: string;
			/** Unique identifier representing the calculate entity async job id. */
			readonly IncrementalRollupAsyncJobId: string;
			/** Status of initial value calculation. */
			readonly InitialValueCalculationStatus: string;
			/** Flag indicating whether Activity Party is included */
			readonly IsActivityPartyIncluded: string;
			/** Last time when calculations were performed for this rollup field. */
			readonly LastCalculationTime_UtcDateAndTime: string;
			/** Logical name of source attribute */
			readonly RollupAttributeLogicalName: string;
			/** Base Table Name Of Rollup Entity */
			readonly RollupEntityBaseTableName: string;
			/** Logical name of source entity */
			readonly RollupEntityLogicalName: string;
			/** Physical Name of Primary Key Of Rollup Entity */
			readonly RollupEntityPrimaryKeyPhysicalName: string;
			/** Type code of rollup entity */
			readonly RollupEntityTypeCode: string;
			/** Filter criteria for source */
			readonly RollupFilterAttributes: string;
			/** Unique identifier of the current record. */
			readonly RollupPropertiesId: string;
			/** Physical Name of Rollup State Attribute */
			readonly RollupStateAttributePhysicalName: string;
			/** Relationship name of the source hierarchical relationship */
			readonly SourceHierarchicalRelationshipName: string;
			/** Status of the Rollup. */
			readonly StateCode: string;
			/** Additional information about status of the rollup properties. */
			readonly StatusCode: string;
			/** Version number of rollup. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RollupProperties {
		enum AggregateType {
			/** 2 */
			Average,
			/** 0 */
			Count,
			/** 4 */
			Max,
			/** 3 */
			Min,
			/** 1 */
			Sum
		}
		enum InitialValueCalculationStatus {
			/** 3 */
			Completed,
			/** 4 */
			Failed,
			/** 1 */
			In_Progress,
			/** 2 */
			Paused,
			/** 0 */
			Pending
		}
		enum StateCode {
			/** 1 */
			Invalid,
			/** 0 */
			Valid
		}
		enum StatusCode {
			/** 2 */
			Invalid,
			/** 1 */
			Valid
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
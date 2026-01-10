//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class RollupPropertiesApi {
		/**
		* DynamicsCrm.DevKit RollupPropertiesApi
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
		/** Logical name of target attribute */
		readonly AggregateAttributeLogicalName: string | null;
		/** Logical name of target entity */
		readonly AggregateEntityLogicalName: string | null;
		/** Type code of aggregate entity */
		readonly AggregateEntityTypeCode: number | null;
		/** Filter criteria for target */
		readonly AggregateFilterAttributes: string | null;
		/** Relationship name of the source-target relationship. */
		readonly AggregateRelationshipName: string | null;
		/** Type of aggregation to perform */
		readonly AggregateType: OptionSet.RollupProperties.AggregateType | null;
		/** Allow source entity to be hierarchical */
		readonly AllowHierarchyOnSource: boolean | null;
		/** Depth used for bootstrap calculations */
		readonly BootstrapCurrentDepth: number | null;
		/** Retry count for bootstrap */
		readonly BootstrapRetryCount: number | null;
		/** Unique identifier representing the mass calculate async job id. */
		readonly BootstrapRollupAsyncJobId: string | null;
		/** Step number to start bootstrap execution */
		readonly BootstrapStepNumber: number | null;
		/** Target pointer used for bootstrap calculations */
		readonly BootstrapTargetPointer: number | null;
		/** Rollup field data type */
		readonly DataType: string | null;
		/** Unique identifier representing the calculate entity async job id. */
		readonly IncrementalRollupAsyncJobId: string | null;
		/** Status of initial value calculation. */
		readonly InitialValueCalculationStatus: OptionSet.RollupProperties.InitialValueCalculationStatus | null;
		/** Flag indicating whether Activity Party is included */
		readonly IsActivityPartyIncluded: number | null;
		/** Last time when calculations were performed for this rollup field. */
		readonly LastCalculationTime_UtcDateAndTime: Date | null;
		/** Logical name of source attribute */
		readonly RollupAttributeLogicalName: string | null;
		/** Base Table Name Of Rollup Entity */
		readonly RollupEntityBaseTableName: string | null;
		/** Logical name of source entity */
		readonly RollupEntityLogicalName: string | null;
		/** Physical Name of Primary Key Of Rollup Entity */
		readonly RollupEntityPrimaryKeyPhysicalName: string | null;
		/** Type code of rollup entity */
		readonly RollupEntityTypeCode: number | null;
		/** Filter criteria for source */
		readonly RollupFilterAttributes: string | null;
		/** Unique identifier of the current record. */
		readonly RollupPropertiesId: string | null;
		/** Physical Name of Rollup State Attribute */
		readonly RollupStateAttributePhysicalName: string | null;
		/** Relationship name of the source hierarchical relationship */
		readonly SourceHierarchicalRelationshipName: string | null;
		/** Status of the Rollup. */
		readonly StateCode: OptionSet.RollupProperties.StateCode | null;
		/** Additional information about status of the rollup properties. */
		readonly StatusCode: OptionSet.RollupProperties.StatusCode | null;
		/** Version number of rollup. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Average = 2*/
			Average = 2,
			/** Count = 0*/
			Count = 0,
			/** Max = 4*/
			Max = 4,
			/** Min = 3*/
			Min = 3,
			/** Sum = 1*/
			Sum = 1
		}
		enum InitialValueCalculationStatus {
			/** Completed = 3*/
			Completed = 3,
			/** Failed = 4*/
			Failed = 4,
			/** In_Progress = 1*/
			In_Progress = 1,
			/** Paused = 2*/
			Paused = 2,
			/** Pending = 0*/
			Pending = 0
		}
		enum StateCode {
			/** Invalid = 1*/
			Invalid = 1,
			/** Valid = 0*/
			Valid = 0
		}
		enum StatusCode {
			/** Invalid = 2*/
			Invalid = 2,
			/** Valid = 1*/
			Valid = 1
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
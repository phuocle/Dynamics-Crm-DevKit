//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Logical name of target attribute */
		AggregateAttributeLogicalName: DevKit.WebApi.StringValueReadonly;
		/** Logical name of target entity */
		AggregateEntityLogicalName: DevKit.WebApi.StringValueReadonly;
		/** Type code of aggregate entity */
		AggregateEntityTypeCode: DevKit.WebApi.IntegerValueReadonly;
		/** Filter criteria for target */
		AggregateFilterAttributes: DevKit.WebApi.StringValueReadonly;
		/** Relationship name of the source-target relationship. */
		AggregateRelationshipName: DevKit.WebApi.StringValueReadonly;
		/** Type of aggregation to perform */
		AggregateType: DevKit.WebApi.OptionSetValueReadonly;
		/** Allow source entity to be hierarchical */
		AllowHierarchyOnSource: DevKit.WebApi.BooleanValueReadonly;
		/** Depth used for bootstrap calculations */
		BootstrapCurrentDepth: DevKit.WebApi.IntegerValueReadonly;
		/** Retry count for bootstrap */
		BootstrapRetryCount: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier representing the mass calculate async job id. */
		BootstrapRollupAsyncJobId: DevKit.WebApi.GuidValueReadonly;
		/** Step number to start bootstrap execution */
		BootstrapStepNumber: DevKit.WebApi.IntegerValueReadonly;
		/** Target pointer used for bootstrap calculations */
		BootstrapTargetPointer: DevKit.WebApi.IntegerValueReadonly;
		/** Rollup field data type */
		DataType: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier representing the calculate entity async job id. */
		IncrementalRollupAsyncJobId: DevKit.WebApi.GuidValueReadonly;
		/** Status of initial value calculation. */
		InitialValueCalculationStatus: DevKit.WebApi.OptionSetValueReadonly;
		/** Flag indicating whether Activity Party is included */
		IsActivityPartyIncluded: DevKit.WebApi.IntegerValueReadonly;
		/** Last time when calculations were performed for this rollup field. */
		LastCalculationTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Logical name of source attribute */
		RollupAttributeLogicalName: DevKit.WebApi.StringValueReadonly;
		/** Base Table Name Of Rollup Entity */
		RollupEntityBaseTableName: DevKit.WebApi.StringValueReadonly;
		/** Logical name of source entity */
		RollupEntityLogicalName: DevKit.WebApi.StringValueReadonly;
		/** Physical Name of Primary Key Of Rollup Entity */
		RollupEntityPrimaryKeyPhysicalName: DevKit.WebApi.StringValueReadonly;
		/** Type code of rollup entity */
		RollupEntityTypeCode: DevKit.WebApi.IntegerValueReadonly;
		/** Filter criteria for source */
		RollupFilterAttributes: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the current record. */
		RollupPropertiesId: DevKit.WebApi.GuidValueReadonly;
		/** Physical Name of Rollup State Attribute */
		RollupStateAttributePhysicalName: DevKit.WebApi.StringValueReadonly;
		/** Relationship name of the source hierarchical relationship */
		SourceHierarchicalRelationshipName: DevKit.WebApi.StringValueReadonly;
		/** Status of the Rollup. */
		StateCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Additional information about status of the rollup properties. */
		StatusCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Version number of rollup. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace RollupProperties {
		enum AggregateType {
			/** 0 */
			Count,
			/** 1 */
			Sum,
			/** 2 */
			Average,
			/** 3 */
			Min,
			/** 4 */
			Max
		}
		enum InitialValueCalculationStatus {
			/** 0 */
			Pending,
			/** 1 */
			In_Progress,
			/** 2 */
			Paused,
			/** 3 */
			Completed,
			/** 4 */
			Failed
		}
		enum StateCode {
			/** 0 */
			Valid,
			/** 1 */
			Invalid
		}
		enum StatusCode {
			/** 1 */
			Valid,
			/** 2 */
			Invalid
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}
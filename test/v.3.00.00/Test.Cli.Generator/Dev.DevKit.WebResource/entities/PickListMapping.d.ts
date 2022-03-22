//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PickListMappingApi {
		/**
		* DynamicsCrm.DevKit PickListMappingApi
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
		/** Unique identifier of the column mapping with which this list value mapping is associated. */
		ColumnMappingId: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.PickListMapping.ComponentState;
		/** Unique identifier of the user who created the list value mapping. */
		readonly CreatedBy: string;
		/** Date and time when the list value mapping was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the picklistmapping. */
		readonly CreatedOnBehalfBy: string;
		/** Version in which the component is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who last modified the list value mapping. */
		readonly ModifiedBy: string;
		/** Date and time when the list value mapping was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the picklistmapping. */
		readonly ModifiedOnBehalfBy: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier of the picklist mapping. */
		PickListMappingId: string;
		/** Unique identifier of the Pick List Mapping. */
		readonly PickListMappingIdUnique: string;
		/** Information about whether the list value mapping needs to be processed. */
		ProcessCode: OptionSet.PickListMapping.ProcessCode;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Source value to be replaced. */
		SourceValue: string;
		/** Status of the picklist mapping. */
		readonly StateCode: OptionSet.PickListMapping.StateCode;
		/** Reason for the status of the picklist mapping. */
		StatusCode: OptionSet.PickListMapping.StatusCode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Microsoft Dynamics 365 list value with which to replace the source value. */
		TargetValue: number;
	}
}
declare namespace OptionSet {
	namespace PickListMapping {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum ProcessCode {
			/** 2 */
			Ignore,
			/** 3 */
			Internal,
			/** 1 */
			Process,
			/** 4 */
			Unmapped
		}
		enum StateCode {
			/** 0 */
			Active
		}
		enum StatusCode {
			/** 0 */
			Active
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
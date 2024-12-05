//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ColumnMappingApi {
		/**
		* DynamicsCrm.DevKit ColumnMappingApi
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
		/** Unique identifier of the column mapping. */
		ColumnMappingId: string;
		/** Unique identifier of the Column Mapping. */
		readonly ColumnMappingIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ColumnMapping.ComponentState;
		/** Unique identifier of the user who created the column mapping. */
		readonly CreatedBy: string;
		/** Date and time when the column mapping was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the columnmapping. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier of the associated data map. */
		ImportMapId: string;
		/** Version in which the component is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who last modified the column mapping. */
		readonly ModifiedBy: string;
		/** Date and time when the column mapping was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the columnmapping. */
		readonly ModifiedOnBehalfBy: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Information about whether the column mapping needs to be processed. */
		ProcessCode: OptionSet.ColumnMapping.ProcessCode;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Name of the source attribute. */
		SourceAttributeName: string;
		/** Name of the source entity. */
		SourceEntityName: string;
		/** Status of the column mapping. */
		readonly StateCode: OptionSet.ColumnMapping.StateCode;
		/** Reason for the status of the column mapping. */
		StatusCode: OptionSet.ColumnMapping.StatusCode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Name of the Microsoft Dynamics 365 attribute. */
		TargetAttributeName: string;
		/** Name of the Microsoft Dynamics 365 entity. */
		TargetEntityName: string;
		readonly FormattedValue: {
			/** Unique identifier of the column mapping. */
			readonly ColumnMappingId: string;
			/** Unique identifier of the Column Mapping. */
			readonly ColumnMappingIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the column mapping. */
			readonly CreatedBy: string;
			/** Date and time when the column mapping was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the columnmapping. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the associated data map. */
			readonly ImportMapId: string;
			/** Version in which the component is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			/** Unique identifier of the user who last modified the column mapping. */
			readonly ModifiedBy: string;
			/** Date and time when the column mapping was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the columnmapping. */
			readonly ModifiedOnBehalfBy: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Information about whether the column mapping needs to be processed. */
			readonly ProcessCode: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Name of the source attribute. */
			readonly SourceAttributeName: string;
			/** Name of the source entity. */
			readonly SourceEntityName: string;
			/** Status of the column mapping. */
			readonly StateCode: string;
			/** Reason for the status of the column mapping. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Name of the Microsoft Dynamics 365 attribute. */
			readonly TargetAttributeName: string;
			/** Name of the Microsoft Dynamics 365 entity. */
			readonly TargetEntityName: string;
		}
	}
}
declare namespace OptionSet {
	namespace ColumnMapping {
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
			Process
		}
		enum StateCode {
			/** 0 */
			Active
		}
		enum StatusCode {
			/** 1 */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
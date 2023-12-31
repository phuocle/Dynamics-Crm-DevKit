//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class RibbonMetadataToProcessApi {
		/**
		* DynamicsCrm.DevKit RibbonMetadataToProcessApi
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
		/** Shows the date and time when the ribbon entity record has finished processing. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CompletedOn_UtcDateAndTime: Date;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Entity Logical Name */
		EntityName1: string;
		/** Exception message */
		ExceptionMessage: string;
		/** Is entity created via Db Update */
		IsDbUpdate: number;
		/** Shows the date and time when the record was processed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ProcessedOn_UtcDateAndTime: Date;
		/** Retry Count */
		RetryCount: number;
		/** Unique identifier for Ribbon Metadata Instance To Process */
		RibbonMetadataRowId: string;
		/** Solution Id */
		SolutionId: string;
		/** Solution Name of the ribbon entity */
		SolutionName: string;
		/** Status */
		Status: number;
		readonly FormattedValue: {
			/** Shows the date and time when the ribbon entity record has finished processing. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Entity Logical Name */
			readonly EntityName1: string;
			/** Exception message */
			readonly ExceptionMessage: string;
			/** Is entity created via Db Update */
			readonly IsDbUpdate: string;
			/** Shows the date and time when the record was processed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ProcessedOn_UtcDateAndTime: string;
			/** Retry Count */
			readonly RetryCount: string;
			/** Unique identifier for Ribbon Metadata Instance To Process */
			readonly RibbonMetadataRowId: string;
			/** Solution Id */
			readonly SolutionId: string;
			/** Solution Name of the ribbon entity */
			readonly SolutionName: string;
			/** Status */
			readonly Status: string;
		}
	}
}
declare namespace OptionSet {
	namespace RibbonMetadataToProcess {
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
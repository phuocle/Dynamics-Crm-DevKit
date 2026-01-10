//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class RibbonMetadataToProcessApi {
		/**
		* DynamicsCrm.DevKit RibbonMetadataToProcessApi
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
		/** Shows the date and time when the ribbon entity record has finished processing. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CompletedOn_UtcDateAndTime: Date | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Entity Logical Name */
		EntityName2: string | null;
		/** Exception message */
		ExceptionMessage: string | null;
		/** Is entity created via Db Update */
		IsDbUpdate: number | null;
		/** Shows the date and time when the record was processed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ProcessedOn_UtcDateAndTime: Date | null;
		/** Retry Count */
		RetryCount: number | null;
		/** Unique identifier for Ribbon Metadata Instance To Process */
		RibbonMetadataRowId: string | null;
		/** Solution Id */
		SolutionId: string | null;
		/** Solution Name of the ribbon entity */
		SolutionName: string | null;
		/** Status */
		Status: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Shows the date and time when the ribbon entity record has finished processing. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Entity Logical Name */
			readonly EntityName2: string;
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
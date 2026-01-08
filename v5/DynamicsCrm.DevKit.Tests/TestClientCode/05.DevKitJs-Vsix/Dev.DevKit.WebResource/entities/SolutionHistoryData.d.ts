//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SolutionHistoryDataApi {
		/**
		* DynamicsCrm.DevKit SolutionHistoryDataApi
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
		/** The Activity Id. */
		ActivityId: string | null;
		/** The Correlation Id. */
		CorrelationId: string | null;
		/** Comments associated with solution installation */
		Description: string | null;
		/** DateTime of the end of the solution event. */
		EndTime_UtcDateAndTime: Date | null;
		/** The error code of the operation performed on the solution. */
		ErrorCode: number | null;
		/** The Exception Message. */
		ExceptionMessage: string | null;
		/** The Exception Stack. */
		ExceptionStack: string | null;
		/** Is Solution Managed */
		IsManaged: boolean | null;
		/** Is the solution published by a Microsoft publisher. */
		IsMicrosoftPublisher: boolean | null;
		/** Does the event overwrite customizations. */
		IsOverwriteCustomizations: boolean | null;
		/** Is Solution Patch */
		IsPatch: boolean | null;
		/** The operation performed on the solution. */
		Operation: OptionSet.SolutionHistoryData.Operation | null;
		/** Name of the package. */
		PackageName: string | null;
		/** Version of the package. */
		PackageVersion: string | null;
		/** Name of the solution's publisher. */
		PublisherName: string | null;
		/** The result of the operation performed on the solution. */
		Result: number | null;
		/** Unique identifier for entity instances */
		SolutionHistoryDataId: string | null;
		/** The Solution. */
		SolutionId: string | null;
		/** Name of the solution. */
		SolutionName: string | null;
		/** The Version of the Solution. */
		SolutionVersion: string | null;
		/** DateTime of the start of the solution event. */
		StartTime_UtcDateAndTime: Date | null;
		/** The status of the operation performed on the solution. */
		Status: OptionSet.SolutionHistoryData.Status | null;
		/** The suboperation performed on the solution. */
		SubOperation: OptionSet.SolutionHistoryData.SubOperation | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** The Activity Id. */
			readonly ActivityId: string;
			/** The Correlation Id. */
			readonly CorrelationId: string;
			/** Comments associated with solution installation */
			readonly Description: string;
			/** DateTime of the end of the solution event. */
			readonly EndTime_UtcDateAndTime: string;
			/** The error code of the operation performed on the solution. */
			readonly ErrorCode: string;
			/** The Exception Message. */
			readonly ExceptionMessage: string;
			/** The Exception Stack. */
			readonly ExceptionStack: string;
			/** Is Solution Managed */
			readonly IsManaged: string;
			/** Is the solution published by a Microsoft publisher. */
			readonly IsMicrosoftPublisher: string;
			/** Does the event overwrite customizations. */
			readonly IsOverwriteCustomizations: string;
			/** Is Solution Patch */
			readonly IsPatch: string;
			/** The operation performed on the solution. */
			readonly Operation: string;
			/** Name of the package. */
			readonly PackageName: string;
			/** Version of the package. */
			readonly PackageVersion: string;
			/** Name of the solution's publisher. */
			readonly PublisherName: string;
			/** The result of the operation performed on the solution. */
			readonly Result: string;
			/** Unique identifier for entity instances */
			readonly SolutionHistoryDataId: string;
			/** The Solution. */
			readonly SolutionId: string;
			/** Name of the solution. */
			readonly SolutionName: string;
			/** The Version of the Solution. */
			readonly SolutionVersion: string;
			/** DateTime of the start of the solution event. */
			readonly StartTime_UtcDateAndTime: string;
			/** The status of the operation performed on the solution. */
			readonly Status: string;
			/** The suboperation performed on the solution. */
			readonly SubOperation: string;
		}
	}
}
declare namespace OptionSet {
	namespace SolutionHistoryData {
		enum Operation {
			/** Export = 2*/
			Export = 2,
			/** Import = 0*/
			Import = 0,
			/** Uninstall = 1*/
			Uninstall = 1
		}
		enum Status {
			/** End = 1*/
			End = 1,
			/** Start = 0*/
			Start = 0
		}
		enum SubOperation {
			/** Delete = 4*/
			Delete = 4,
			/** New = 1*/
			New = 1,
			/** None = 0*/
			None = 0,
			/** Update = 3*/
			Update = 3,
			/** Upgrade = 2*/
			Upgrade = 2
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
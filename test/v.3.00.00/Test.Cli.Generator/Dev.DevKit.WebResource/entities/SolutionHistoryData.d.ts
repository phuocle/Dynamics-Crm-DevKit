//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SolutionHistoryDataApi {
		/**
		* DynamicsCrm.DevKit SolutionHistoryDataApi
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
		/** The Activity Id. */
		ActivityId: string;
		/** The Correlation Id. */
		CorrelationId: string;
		/** DateTime of the end of the solution event. */
		EndTime_UtcDateAndTime: Date;
		/** The error code of the operation performed on the solution. */
		ErrorCode: number;
		/** The Exception Message. */
		ExceptionMessage: string;
		/** The Exception Stack. */
		ExceptionStack: string;
		/** Is Solution Managed */
		IsManaged: boolean;
		/** Is the solution published by a Microsoft publisher. */
		IsMicrosoftPublisher: boolean;
		/** Does the event overwrite customizations. */
		IsOverwriteCustomizations: boolean;
		/** Is Solution Patch */
		IsPatch: boolean;
		/** The operation performed on the solution. */
		Operation: OptionSet.SolutionHistoryData.Operation;
		/** Name of the package. */
		PackageName: string;
		/** Version of the package. */
		PackageVersion: string;
		/** Name of the solution's publisher. */
		PublisherName: string;
		/** The result of the operation performed on the solution. */
		Result: number;
		/** Unique identifier for entity instances */
		SolutionHistoryDataId: string;
		/** The Solution. */
		SolutionId: string;
		/** Name of the solution. */
		SolutionName: string;
		/** The Version of the Solution. */
		SolutionVersion: string;
		/** DateTime of the start of the solution event. */
		StartTime_UtcDateAndTime: Date;
		/** The status of the operation performed on the solution. */
		Status: OptionSet.SolutionHistoryData.Status;
		/** The suboperation performed on the solution. */
		SubOperation: OptionSet.SolutionHistoryData.SubOperation;
	}
}
declare namespace OptionSet {
	namespace SolutionHistoryData {
		enum Operation {
			/** 2 */
			Export,
			/** 0 */
			Import,
			/** 1 */
			Uninstall
		}
		enum Status {
			/** 1 */
			End,
			/** 0 */
			Start
		}
		enum SubOperation {
			/** 4 */
			Delete,
			/** 1 */
			New,
			/** 0 */
			None,
			/** 3 */
			Update,
			/** 2 */
			Upgrade
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
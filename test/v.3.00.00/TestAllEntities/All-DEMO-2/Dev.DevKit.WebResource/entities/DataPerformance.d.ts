//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormDataPerformance_Information {
		interface tab_Performance_Improvement_Sections {
			Performance_Improvement: DevKit.Controls.Section;
		}
		interface tab_Performance_Improvement extends DevKit.Controls.ITab {
			Section: tab_Performance_Improvement_Sections;
		}
		interface Tabs {
			Performance_Improvement: tab_Performance_Improvement;
		}
		interface Body {
			Tab: Tabs;
			/** An internal state which indicates whether at least one optimization is applied. */
			AnyOptimizationApplied: DevKit.Controls.Boolean;
			/** An internal state which indicates whether at least one optimization is available for this record. */
			AnyOptimizationAvailable: DevKit.Controls.Boolean;
			/** Number of times a queries were executed (Aggregated) */
			Count: DevKit.Controls.Integer;
			/** Primary entity */
			Entity: DevKit.Controls.String;
			/** An internal state which shows the result of the last action that was taken on this record. */
			LastActionResult: DevKit.Controls.String;
			/** Maximum execution time in seconds. (Aggregated) */
			MaxTime: DevKit.Controls.Decimal;
			/** Average execution time in seconds. (Aggregated) */
			MedianTime: DevKit.Controls.Decimal;
			/** Minimum execution time in seconds. (Aggregated) */
			MinTime: DevKit.Controls.Decimal;
			/** Data operation that triggered the query (Retrieve Multiple, etc.) */
			Operation: DevKit.Controls.String;
			/** Current optimization status of the record, showed to the customer. */
			OptimizationStatus: DevKit.Controls.String;
			/** Query Weight of the component. Factored with the Optimization Impact to determine the overall importance of applying an optimization. (P2) */
			Weight: DevKit.Controls.Decimal;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormDataPerformance_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form DataPerformance_Information */
		Body: DevKit.FormDataPerformance_Information.Body;
		/** The Process of form DataPerformance_Information */
		Process: DevKit.FormDataPerformance_Information.Process;
		/** The SidePanes of form DataPerformance_Information */
		SidePanes: DevKit.SidePanes;
	}
	class DataPerformanceApi {
		/**
		* DynamicsCrm.DevKit DataPerformanceApi
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
		/** An internal state which indicates whether at least one optimization is applied. */
		AnyOptimizationApplied: DevKit.WebApi.BooleanValueReadonly;
		/** An internal state which indicates whether at least one optimization is available for this record. */
		AnyOptimizationAvailable: DevKit.WebApi.BooleanValueReadonly;
		/** Name of the component */
		Component: DevKit.WebApi.StringValueReadonly;
		/** Number of times a queries were executed (Aggregated) */
		Count: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the performance suggestion. */
		DataPerformanceId: DevKit.WebApi.GuidValue;
		/** Primary entity */
		Entity1: DevKit.WebApi.StringValueReadonly;
		/** The expected average cost benefit of an optimization. */
		EstimatedOptimizationImpact: DevKit.WebApi.DecimalValueReadonly;
		/** The execution period for which the performance metrics are calculated. */
		ExecutionPeriod: DevKit.WebApi.StringValueReadonly;
		/** An internal state which shows the result of the last action that was taken on this record. */
		LastActionResult: DevKit.WebApi.StringValueReadonly;
		/** Last time an optimization was applied. */
		LastOptimizationDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Maximum execution time in seconds. (Aggregated) */
		MaxTime: DevKit.WebApi.DecimalValueReadonly;
		/** Average execution time in seconds. (Aggregated) */
		MedianTime: DevKit.WebApi.DecimalValueReadonly;
		/** Minimum execution time in seconds. (Aggregated) */
		MinTime: DevKit.WebApi.DecimalValueReadonly;
		/** Data operation that triggered the query (Retrieve Multiple, etc.) */
		Operation: DevKit.WebApi.StringValueReadonly;
		/** Current optimization status of the record, showed to the customer. */
		OptimizationStatus: DevKit.WebApi.StringValueReadonly;
		/** Storage consumed by the optimization. (MB) */
		OptimizationStorage: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the organization associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Actual performance change after taking an optimization action on the record. */
		RealizedOptimizationImpact: DevKit.WebApi.StringValueReadonly;
		/** Name of the solution that owns the component */
		Solution: DevKit.WebApi.StringValueReadonly;
		/** Query Weight of the component. Factored with the Optimization Impact to determine the overall importance of applying an optimization. (P2) */
		Weight: DevKit.WebApi.DecimalValueReadonly;
	}
}
declare namespace OptionSet {
	namespace DataPerformance {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}
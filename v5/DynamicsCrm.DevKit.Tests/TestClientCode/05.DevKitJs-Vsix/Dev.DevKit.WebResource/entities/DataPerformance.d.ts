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
	}
	export class FormDataPerformance_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form DataPerformance_Information */
		Body: DevKit.FormDataPerformance_Information.Body;
	}
	export class DataPerformanceApi {
		/**
		* DynamicsCrm.DevKit DataPerformanceApi
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
		/** An internal state which indicates whether at least one optimization is applied. */
		readonly AnyOptimizationApplied: boolean | null;
		/** An internal state which indicates whether at least one optimization is available for this record. */
		readonly AnyOptimizationAvailable: boolean | null;
		/** Name of the component */
		readonly Component: string | null;
		/** Number of times a queries were executed (Aggregated) */
		readonly Count: number | null;
		/** Unique identifier of the performance suggestion. */
		DataPerformanceId: string | null;
		/** Primary entity */
		readonly Entity2: string | null;
		/** The expected average cost benefit of an optimization. */
		readonly EstimatedOptimizationImpact: number | null;
		/** The execution period for which the performance metrics are calculated. */
		readonly ExecutionPeriod: string | null;
		/** An internal state which shows the result of the last action that was taken on this record. */
		readonly LastActionResult: string | null;
		/** Last time an optimization was applied. */
		readonly LastOptimizationDate_UtcDateAndTime: Date | null;
		/** Maximum execution time in seconds. (Aggregated) */
		readonly MaxTime: number | null;
		/** Average execution time in seconds. (Aggregated) */
		readonly MedianTime: number | null;
		/** Minimum execution time in seconds. (Aggregated) */
		readonly MinTime: number | null;
		/** Data operation that triggered the query (Retrieve Multiple, etc.) */
		readonly Operation: string | null;
		/** Current optimization status of the record, showed to the customer. */
		readonly OptimizationStatus: string | null;
		/** Storage consumed by the optimization. (MB) */
		readonly OptimizationStorage: number | null;
		/** Unique identifier of the organization associated. */
		readonly OrganizationId: string | null;
		/** Actual performance change after taking an optimization action on the record. */
		readonly RealizedOptimizationImpact: string | null;
		/** Name of the solution that owns the component */
		readonly Solution: string | null;
		/** Query Weight of the component. Factored with the Optimization Impact to determine the overall importance of applying an optimization. (P2) */
		readonly Weight: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** An internal state which indicates whether at least one optimization is applied. */
			readonly AnyOptimizationApplied: string;
			/** An internal state which indicates whether at least one optimization is available for this record. */
			readonly AnyOptimizationAvailable: string;
			/** Name of the component */
			readonly Component: string;
			/** Number of times a queries were executed (Aggregated) */
			readonly Count: string;
			/** Unique identifier of the performance suggestion. */
			readonly DataPerformanceId: string;
			/** Primary entity */
			readonly Entity2: string;
			/** The expected average cost benefit of an optimization. */
			readonly EstimatedOptimizationImpact: string;
			/** The execution period for which the performance metrics are calculated. */
			readonly ExecutionPeriod: string;
			/** An internal state which shows the result of the last action that was taken on this record. */
			readonly LastActionResult: string;
			/** Last time an optimization was applied. */
			readonly LastOptimizationDate_UtcDateAndTime: string;
			/** Maximum execution time in seconds. (Aggregated) */
			readonly MaxTime: string;
			/** Average execution time in seconds. (Aggregated) */
			readonly MedianTime: string;
			/** Minimum execution time in seconds. (Aggregated) */
			readonly MinTime: string;
			/** Data operation that triggered the query (Retrieve Multiple, etc.) */
			readonly Operation: string;
			/** Current optimization status of the record, showed to the customer. */
			readonly OptimizationStatus: string;
			/** Storage consumed by the optimization. (MB) */
			readonly OptimizationStorage: string;
			/** Unique identifier of the organization associated. */
			readonly OrganizationId: string;
			/** Actual performance change after taking an optimization action on the record. */
			readonly RealizedOptimizationImpact: string;
			/** Name of the solution that owns the component */
			readonly Solution: string;
			/** Query Weight of the component. Factored with the Optimization Impact to determine the overall importance of applying an optimization. (P2) */
			readonly Weight: string;
		}
	}
}
declare namespace OptionSet {
	namespace DataPerformance {
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class PluginTypeStatisticApi {
		/**
		* DynamicsCrm.DevKit PluginTypeStatisticApi
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
		/** The average execution time (in milliseconds) for the plug-in type. */
		readonly AverageExecuteTimeInMilliseconds: number | null;
		/** The plug-in type percentage contribution to crashes. */
		readonly CrashContributionPercent: number | null;
		/** Number of times the plug-in type has crashed. */
		readonly CrashCount: number | null;
		/** Percentage of crashes for the plug-in type. */
		readonly CrashPercent: number | null;
		/** Unique identifier of the user who created the plug-in type statistic. */
		readonly CreatedBy: string | null;
		/** Date and time when the plug-in type statistic was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the plug-in type statistic. */
		readonly CreatedOnBehalfBy: string | null;
		/** Number of times the plug-in type has been executed. */
		readonly ExecuteCount: number | null;
		/** Number of times the plug-in type has failed. */
		readonly FailureCount: number | null;
		/** Percentage of failures for the plug-in type. */
		readonly FailurePercent: number | null;
		/** Unique identifier of the user who last modified the plug-in type statistic. */
		readonly ModifiedBy: string | null;
		/** Date and time when the plug-in type statistic was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the plug-in type statistic. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier of the organization with which the plug-in type statistic is associated. */
		readonly OrganizationId: string | null;
		/** Unique identifier of the plug-in type associated with this plug-in type statistic. */
		readonly PluginTypeId: string | null;
		/** Unique identifier of the plug-in type statistic. */
		readonly PluginTypeStatisticId: string | null;
		/** The plug-in type percentage contribution to Worker process termination due to excessive CPU usage. */
		readonly TerminateCpuContributionPercent: number | null;
		/** The plug-in type percentage contribution to Worker process termination due to excessive handle usage. */
		readonly TerminateHandlesContributionPercent: number | null;
		/** The plug-in type percentage contribution to Worker process termination due to excessive memory usage. */
		readonly TerminateMemoryContributionPercent: number | null;
		/** The plug-in type percentage contribution to Worker process termination due to unknown reasons. */
		readonly TerminateOtherContributionPercent: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** The average execution time (in milliseconds) for the plug-in type. */
			readonly AverageExecuteTimeInMilliseconds: string;
			/** The plug-in type percentage contribution to crashes. */
			readonly CrashContributionPercent: string;
			/** Number of times the plug-in type has crashed. */
			readonly CrashCount: string;
			/** Percentage of crashes for the plug-in type. */
			readonly CrashPercent: string;
			/** Unique identifier of the user who created the plug-in type statistic. */
			readonly CreatedBy: string;
			/** Date and time when the plug-in type statistic was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the plug-in type statistic. */
			readonly CreatedOnBehalfBy: string;
			/** Number of times the plug-in type has been executed. */
			readonly ExecuteCount: string;
			/** Number of times the plug-in type has failed. */
			readonly FailureCount: string;
			/** Percentage of failures for the plug-in type. */
			readonly FailurePercent: string;
			/** Unique identifier of the user who last modified the plug-in type statistic. */
			readonly ModifiedBy: string;
			/** Date and time when the plug-in type statistic was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the plug-in type statistic. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization with which the plug-in type statistic is associated. */
			readonly OrganizationId: string;
			/** Unique identifier of the plug-in type associated with this plug-in type statistic. */
			readonly PluginTypeId: string;
			/** Unique identifier of the plug-in type statistic. */
			readonly PluginTypeStatisticId: string;
			/** The plug-in type percentage contribution to Worker process termination due to excessive CPU usage. */
			readonly TerminateCpuContributionPercent: string;
			/** The plug-in type percentage contribution to Worker process termination due to excessive handle usage. */
			readonly TerminateHandlesContributionPercent: string;
			/** The plug-in type percentage contribution to Worker process termination due to excessive memory usage. */
			readonly TerminateMemoryContributionPercent: string;
			/** The plug-in type percentage contribution to Worker process termination due to unknown reasons. */
			readonly TerminateOtherContributionPercent: string;
		}
	}
}
declare namespace OptionSet {
	namespace PluginTypeStatistic {
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
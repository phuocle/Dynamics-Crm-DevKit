//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PluginTypeStatisticApi {
		/**
		* DynamicsCrm.DevKit PluginTypeStatisticApi
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
		/** The average execution time (in milliseconds) for the plug-in type. */
		readonly AverageExecuteTimeInMilliseconds: number;
		/** The plug-in type percentage contribution to crashes. */
		readonly CrashContributionPercent: number;
		/** Number of times the plug-in type has crashed. */
		readonly CrashCount: number;
		/** Percentage of crashes for the plug-in type. */
		readonly CrashPercent: number;
		/** Unique identifier of the user who created the plug-in type statistic. */
		readonly CreatedBy: string;
		/** Date and time when the plug-in type statistic was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the plug-in type statistic. */
		readonly CreatedOnBehalfBy: string;
		/** Number of times the plug-in type has been executed. */
		readonly ExecuteCount: number;
		/** Number of times the plug-in type has failed. */
		readonly FailureCount: number;
		/** Percentage of failures for the plug-in type. */
		readonly FailurePercent: number;
		/** Unique identifier of the user who last modified the plug-in type statistic. */
		readonly ModifiedBy: string;
		/** Date and time when the plug-in type statistic was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the plug-in type statistic. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization with which the plug-in type statistic is associated. */
		readonly OrganizationId: string;
		/** Unique identifier of the plug-in type associated with this plug-in type statistic. */
		readonly PluginTypeId: string;
		/** Unique identifier of the plug-in type statistic. */
		readonly PluginTypeStatisticId: string;
		/** The plug-in type percentage contribution to Worker process termination due to excessive CPU usage. */
		readonly TerminateCpuContributionPercent: number;
		/** The plug-in type percentage contribution to Worker process termination due to excessive handle usage. */
		readonly TerminateHandlesContributionPercent: number;
		/** The plug-in type percentage contribution to Worker process termination due to excessive memory usage. */
		readonly TerminateMemoryContributionPercent: number;
		/** The plug-in type percentage contribution to Worker process termination due to unknown reasons. */
		readonly TerminateOtherContributionPercent: number;
	}
}
declare namespace OptionSet {
	namespace PluginTypeStatistic {
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
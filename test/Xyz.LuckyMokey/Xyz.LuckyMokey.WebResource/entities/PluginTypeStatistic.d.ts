//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** The average execution time (in milliseconds) for the plug-in type. */
		AverageExecuteTimeInMilliseconds: DevKit.WebApi.IntegerValueReadonly;
		/** The plug-in type percentage contribution to crashes. */
		CrashContributionPercent: DevKit.WebApi.IntegerValueReadonly;
		/** Number of times the plug-in type has crashed. */
		CrashCount: DevKit.WebApi.IntegerValueReadonly;
		/** Percentage of crashes for the plug-in type. */
		CrashPercent: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the user who created the plug-in type statistic. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the plug-in type statistic was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the plug-in type statistic. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Number of times the plug-in type has been executed. */
		ExecuteCount: DevKit.WebApi.IntegerValueReadonly;
		/** Number of times the plug-in type has failed. */
		FailureCount: DevKit.WebApi.IntegerValueReadonly;
		/** Percentage of failures for the plug-in type. */
		FailurePercent: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the user who last modified the plug-in type statistic. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the plug-in type statistic was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the plug-in type statistic. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization with which the plug-in type statistic is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the plug-in type associated with this plug-in type statistic. */
		PluginTypeId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the plug-in type statistic. */
		PluginTypeStatisticId: DevKit.WebApi.GuidValueReadonly;
		/** The plug-in type percentage contribution to Worker process termination due to excessive CPU usage. */
		TerminateCpuContributionPercent: DevKit.WebApi.IntegerValueReadonly;
		/** The plug-in type percentage contribution to Worker process termination due to excessive handle usage. */
		TerminateHandlesContributionPercent: DevKit.WebApi.IntegerValueReadonly;
		/** The plug-in type percentage contribution to Worker process termination due to excessive memory usage. */
		TerminateMemoryContributionPercent: DevKit.WebApi.IntegerValueReadonly;
		/** The plug-in type percentage contribution to Worker process termination due to unknown reasons. */
		TerminateOtherContributionPercent: DevKit.WebApi.IntegerValueReadonly;
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}
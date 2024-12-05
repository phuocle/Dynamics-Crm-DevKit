//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class GlobalSearchConfigurationApi {
		/**
		* DynamicsCrm.DevKit GlobalSearchConfigurationApi
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
		/** For internal use only. */
		readonly ComponentState: OptionSet.GlobalSearchConfiguration.ComponentState;
		GlobalSearchConfigurationId: string;
		/** For internal use only. */
		readonly GlobalSearchConfigurationidUnique: string;
		/** Information that specifies whether the specified search is enabled. */
		IsEnabled: boolean;
		/** Information that specifies whether the search logical name is localized. */
		IsLocalized: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Information that specifies whether the Search Box is visible. */
		IsSearchBoxVisible: boolean;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		SearchProviderName: string;
		SearchProviderResultsPage: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			readonly GlobalSearchConfigurationId: string;
			/** For internal use only. */
			readonly GlobalSearchConfigurationidUnique: string;
			/** Information that specifies whether the specified search is enabled. */
			readonly IsEnabled: string;
			/** Information that specifies whether the search logical name is localized. */
			readonly IsLocalized: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Information that specifies whether the Search Box is visible. */
			readonly IsSearchBoxVisible: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			readonly SearchProviderName: string;
			readonly SearchProviderResultsPage: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
		}
	}
}
declare namespace OptionSet {
	namespace GlobalSearchConfiguration {
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
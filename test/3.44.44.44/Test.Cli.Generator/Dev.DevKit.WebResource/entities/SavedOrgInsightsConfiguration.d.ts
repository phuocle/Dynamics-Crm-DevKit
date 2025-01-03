﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SavedOrgInsightsConfigurationApi {
		/**
		* DynamicsCrm.DevKit SavedOrgInsightsConfigurationApi
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
		/** Unique identifier of the user who created the record */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string;
		/** Description of the saved organization insights configuration */
		Description: string;
		/** Indicates whether this saved organization insights configuration is the default config */
		IsDefault: boolean;
		/** Indicates whether this configuration indicates a drilldown chart */
		IsDrilldown: boolean;
		/** Metrics Data in Json format for those metrics defined in parameters */
		readonly JsonData: string;
		/** End Time */
		readonly JsonDataEndTime_UtcDateAndTime: Date;
		/** Start Time */
		readonly JsonDataStartTime_UtcDateAndTime: Date;
		/** Lookback period */
		Lookback: OptionSet.SavedOrgInsightsConfiguration.Lookback;
		/** Type of the metric */
		MetricType: OptionSet.SavedOrgInsightsConfiguration.MetricType;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		/** Display name */
		Name: string;
		/** Unique identifier of the organization associated with the solution */
		readonly OrganizationId: string;
		/** Parameters needed for data retrieval */
		Parameters: string;
		/** Plot Option */
		PlotOption: OptionSet.SavedOrgInsightsConfiguration.PlotOption;
		/** Shows the ID of the Saved Organization Insights Configuration */
		SavedOrgInsightsConfigurationId: string;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record */
			readonly CreatedOnBehalfBy: string;
			/** Description of the saved organization insights configuration */
			readonly Description: string;
			/** Indicates whether this saved organization insights configuration is the default config */
			readonly IsDefault: string;
			/** Indicates whether this configuration indicates a drilldown chart */
			readonly IsDrilldown: string;
			/** Metrics Data in Json format for those metrics defined in parameters */
			readonly JsonData: string;
			/** End Time */
			readonly JsonDataEndTime_UtcDateAndTime: string;
			/** Start Time */
			readonly JsonDataStartTime_UtcDateAndTime: string;
			/** Lookback period */
			readonly Lookback: string;
			/** Type of the metric */
			readonly MetricType: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			/** Display name */
			readonly Name: string;
			/** Unique identifier of the organization associated with the solution */
			readonly OrganizationId: string;
			/** Parameters needed for data retrieval */
			readonly Parameters: string;
			/** Plot Option */
			readonly PlotOption: string;
			/** Shows the ID of the Saved Organization Insights Configuration */
			readonly SavedOrgInsightsConfigurationId: string;
		}
	}
}
declare namespace OptionSet {
	namespace SavedOrgInsightsConfiguration {
		enum Lookback {
			/** 1 */
			_2H,
			/** 4 */
			_30D,
			/** 2 */
			_48H,
			/** 3 */
			_7D
		}
		enum MetricType {
			/** 2 */
			Category,
			/** 1 */
			Time_Series
		}
		enum PlotOption {
			/** 3 */
			Area,
			/** 5 */
			Bar,
			/** 11 */
			Bubble,
			/** 2 */
			Column,
			/** 6 */
			Donut,
			/** 9 */
			DoubleDonut,
			/** 7 */
			Infocard,
			/** 1 */
			Line,
			/** 10 */
			LinearGauge,
			/** 8 */
			List,
			/** 4 */
			Pie
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
//@ts-check
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the saved organization insights configuration */
		Description: DevKit.WebApi.StringValue;
		/** Indicates whether this saved organization insights configuration is the default config */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** Indicates whether this configuration indicates a drilldown chart */
		IsDrilldown: DevKit.WebApi.BooleanValue;
		/** Metrics Data in Json format for those metrics defined in parameters */
		JsonData: DevKit.WebApi.StringValueReadonly;
		/** End Time */
		JsonDataEndTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Start Time */
		JsonDataStartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Lookback period */
		Lookback: DevKit.WebApi.OptionSetValue;
		/** Type of the metric */
		MetricType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who modified the record */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Display name */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the solution */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Parameters needed for data retrieval */
		Parameters: DevKit.WebApi.StringValue;
		/** Plot Option */
		PlotOption: DevKit.WebApi.OptionSetValue;
		/** Shows the ID of the Saved Organization Insights Configuration */
		SavedOrgInsightsConfigurationId: DevKit.WebApi.GuidValue;
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
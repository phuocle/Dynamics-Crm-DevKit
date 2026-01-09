//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SavedOrgInsightsConfigurationApi {
		/**
		* DynamicsCrm.DevKit SavedOrgInsightsConfigurationApi
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
		/** Unique identifier of the user who created the record */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string | null;
		/** Description of the saved organization insights configuration */
		Description: string | null;
		/** Indicates whether this saved organization insights configuration is the default config */
		IsDefault: boolean | null;
		/** Indicates whether this configuration indicates a drilldown chart */
		IsDrilldown: boolean | null;
		/** Metrics Data in Json format for those metrics defined in parameters */
		readonly JsonData: string | null;
		/** End Time */
		readonly JsonDataEndTime_UtcDateAndTime: Date | null;
		/** Start Time */
		readonly JsonDataStartTime_UtcDateAndTime: Date | null;
		/** Lookback period */
		Lookback: OptionSet.SavedOrgInsightsConfiguration.Lookback | null;
		/** Type of the metric */
		MetricType: OptionSet.SavedOrgInsightsConfiguration.MetricType | null;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string | null;
		/** Display name */
		Name: string | null;
		/** Unique identifier of the organization associated with the solution */
		readonly OrganizationId: string | null;
		/** Parameters needed for data retrieval */
		Parameters: string | null;
		/** Plot Option */
		PlotOption: OptionSet.SavedOrgInsightsConfiguration.PlotOption | null;
		/** Shows the ID of the Saved Organization Insights Configuration */
		SavedOrgInsightsConfigurationId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** _2H = 1*/
			_2H = 1,
			/** _30D = 4*/
			_30D = 4,
			/** _48H = 2*/
			_48H = 2,
			/** _7D = 3*/
			_7D = 3
		}
		enum MetricType {
			/** Category = 2*/
			Category = 2,
			/** Time_Series = 1*/
			Time_Series = 1
		}
		enum PlotOption {
			/** Area = 3*/
			Area = 3,
			/** Bar = 5*/
			Bar = 5,
			/** Bubble = 11*/
			Bubble = 11,
			/** Column = 2*/
			Column = 2,
			/** Donut = 6*/
			Donut = 6,
			/** DoubleDonut = 9*/
			DoubleDonut = 9,
			/** Infocard = 7*/
			Infocard = 7,
			/** Line = 1*/
			Line = 1,
			/** LinearGauge = 10*/
			LinearGauge = 10,
			/** List = 8*/
			List = 8,
			/** Pie = 4*/
			Pie = 4
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMetric_Information {
		interface tab_description_Sections {
			description: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			_379F3DB8_82DF_4E44_930A_C7A22C0E5206: DevKit.Controls.Section;
		}
		interface tab_Rollup_Attributes_Sections {
			_CEBD8001_3DD4_4ABB_99DE_9A3F2FD250EB: DevKit.Controls.Section;
		}
		interface tab_description extends DevKit.Controls.ITab {
			Section: tab_description_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_Rollup_Attributes extends DevKit.Controls.ITab {
			Section: tab_Rollup_Attributes_Sections;
		}
		interface Tabs {
			description: tab_description;
			general: tab_general;
			Rollup_Attributes: tab_Rollup_Attributes;
		}
		interface Body {
			Tab: Tabs;
			/** Data type of the amount. */
			AmountDataType: DevKit.Controls.OptionSet;
			/** Description of the goal metric. */
			Description: DevKit.Controls.String;
			/** Information that indicates whether the metric type is Count or Amount. */
			IsAmount: DevKit.Controls.Boolean;
			/** Indicates whether the goal metric tracks stretch targets. */
			IsStretchTracked: DevKit.Controls.Boolean;
			/** Name of the goal metric. */
			Name: DevKit.Controls.String;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the goal metric. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			MetricLineItemSubGrid: DevKit.Controls.Grid;
		}
	}
	class FormMetric_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Metric_Information */
		Body: DevKit.FormMetric_Information.Body;
		/** The Footer section of form Metric_Information */
		Footer: DevKit.FormMetric_Information.Footer;
		/** The Process of form Metric_Information */
		Process: DevKit.FormMetric_Information.Process;
		/** The Grid of form Metric_Information */
		Grid: DevKit.FormMetric_Information.Grid;
		/** The SidePanes of form Metric_Information */
		SidePanes: DevKit.SidePanes;
	}
	class MetricApi {
		/**
		* DynamicsCrm.DevKit MetricApi
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
		/** Data type of the amount. */
		AmountDataType: OptionSet.Metric.AmountDataType;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the goal metric. */
		Description: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Information that indicates whether the metric type is Count or Amount. */
		IsAmount: boolean;
		/** Indicates whether the goal metric tracks stretch targets. */
		IsStretchTracked: boolean;
		/** Unique identifier of the goal metric. */
		MetricId: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the goal metric. */
		Name: string;
		/** Unique identifier of the organization. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the goal metric. */
		StateCode: OptionSet.Metric.StateCode;
		/** Reason for the status of the goal metric. */
		StatusCode: OptionSet.Metric.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the goal metric. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Data type of the amount. */
			readonly AmountDataType: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the goal metric. */
			readonly Description: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Information that indicates whether the metric type is Count or Amount. */
			readonly IsAmount: string;
			/** Indicates whether the goal metric tracks stretch targets. */
			readonly IsStretchTracked: string;
			/** Unique identifier of the goal metric. */
			readonly MetricId: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the goal metric. */
			readonly Name: string;
			/** Unique identifier of the organization. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the goal metric. */
			readonly StateCode: string;
			/** Reason for the status of the goal metric. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the goal metric. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Metric {
		enum AmountDataType {
			/** 1 */
			Decimal,
			/** 2 */
			Integer,
			/** 0 */
			Money
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Closed,
			/** 0 */
			Open
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
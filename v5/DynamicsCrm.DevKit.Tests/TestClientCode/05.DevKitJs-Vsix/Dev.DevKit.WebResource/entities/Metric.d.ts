//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMetric_Information {
		interface tab_description_Sections {
			/** Description */
			description: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			/** Step1 : Define the metric */
			_379F3DB8_82DF_4E44_930A_C7A22C0E5206: DevKit.Controls.Section;
		}
		interface tab_Rollup_Attributes_Sections {
			/** Step2 : Define the rollup fields for this metric to track the target's actual and in-progress values */
			_CEBD8001_3DD4_4ABB_99DE_9A3F2FD250EB: DevKit.Controls.Section;
		}
		/** Description */
		interface tab_description extends DevKit.Controls.ITab {
			Section: tab_description_Sections;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		/** Rollup Fields */
		interface tab_Rollup_Attributes extends DevKit.Controls.ITab {
			Section: tab_Rollup_Attributes_Sections;
		}
		interface Tabs {
			/** Description */
			description: tab_description;
			/** General */
			general: tab_general;
			/** Rollup Fields */
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
		interface Grid {
			/** Rollup Attributes */
			MetricLineItemSubGrid: DevKit.Controls.Grid;
		}
	}
	export class FormMetric_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Metric_Information */
		Body: DevKit.FormMetric_Information.Body;
		/** The Grid of form Metric_Information */
		Grid: DevKit.FormMetric_Information.Grid;
	}
	export class MetricApi {
		/**
		* DynamicsCrm.DevKit MetricApi
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
		/** Data type of the amount. */
		AmountDataType: OptionSet.Metric.AmountDataType | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description of the goal metric. */
		Description: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Information that indicates whether the metric type is Count or Amount. */
		IsAmount: boolean | null;
		/** Indicates whether the goal metric tracks stretch targets. */
		IsStretchTracked: boolean | null;
		/** Unique identifier of the goal metric. */
		MetricId: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the goal metric. */
		Name: string | null;
		/** Unique identifier of the organization. */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Status of the goal metric. */
		StateCode: OptionSet.Metric.StateCode | null;
		/** Reason for the status of the goal metric. */
		StatusCode: OptionSet.Metric.StatusCode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of the goal metric. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Decimal = 1*/
			Decimal = 1,
			/** Integer = 2*/
			Integer = 2,
			/** Money = 0*/
			Money = 0
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
			/** Closed = 1*/
			Closed = 1,
			/** Open = 0*/
			Open = 0
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
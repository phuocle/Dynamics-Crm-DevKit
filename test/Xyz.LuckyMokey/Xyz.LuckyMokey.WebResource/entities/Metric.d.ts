//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormMetric_Information {
		interface tab_general_Sections {
			_379F3DB8_82DF_4E44_930A_C7A22C0E5206: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Rollup_Attributes_Sections {
			_CEBD8001_3DD4_4ABB_99DE_9A3F2FD250EB: DevKit.Form.Controls.ControlSection;
		}
		interface tab_description_Sections {
			description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface tab_Rollup_Attributes extends DevKit.Form.Controls.IControlTab {
			Section: tab_Rollup_Attributes_Sections;
		}
		interface tab_description extends DevKit.Form.Controls.IControlTab {
			Section: tab_description_Sections;
		}
		interface Tabs {
			general: tab_general;
			Rollup_Attributes: tab_Rollup_Attributes;
			description: tab_description;
		}
		interface Body {
			Tab: Tabs;
			MetricLineItemSubGrid: DevKit.Form.Controls.ControlGrid;
			/** Data type of the amount. */
			AmountDataType: DevKit.Form.Controls.ControlOptionSet;
			/** Description of the goal metric. */
			Description: DevKit.Form.Controls.ControlString;
			/** Information that indicates whether the metric type is Count or Amount. */
			IsAmount: DevKit.Form.Controls.ControlBoolean;
			/** Indicates whether the goal metric tracks stretch targets. */
			IsStretchTracked: DevKit.Form.Controls.ControlBoolean;
			/** Name of the goal metric. */
			Name: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Status of the goal metric. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormMetric_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Metric_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Metric_Information */
		Body: LuckyMokey.FormMetric_Information.Body;
		/** The Footer section of form Metric_Information */
		Footer: LuckyMokey.FormMetric_Information.Footer;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Data type of the amount. */
		AmountDataType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the goal metric. */
		Description: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Information that indicates whether the metric type is Count or Amount. */
		IsAmount: DevKit.WebApi.BooleanValue;
		/** Indicates whether the goal metric tracks stretch targets. */
		IsStretchTracked: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the goal metric. */
		MetricId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the goal metric. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the goal metric. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the goal metric. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the goal metric. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Metric {
		enum AmountDataType {
			/** 0 */
			Money,
			/** 1 */
			Decimal,
			/** 2 */
			Integer
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 0 */
			Open,
			/** 1 */
			Closed
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
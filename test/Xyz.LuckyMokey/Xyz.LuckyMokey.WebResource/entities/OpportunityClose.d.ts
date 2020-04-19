//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormOpportunityClose_Information {
		interface tab_resolution_Sections {
			information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_resolution extends DevKit.Form.Controls.IControlTab {
			Section: tab_resolution_Sections;
		}
		interface Tabs {
			resolution: tab_resolution;
		}
		interface Body {
			Tab: Tabs;
			/** Actual end time of the opportunity close activity. */
			ActualEnd: DevKit.Form.Controls.ControlDate;
			/** Actual revenue generated for the opportunity. */
			ActualRevenue: DevKit.Form.Controls.ControlMoney;
			/** Unique identifier of the competitor with which the opportunity close activity is associated. */
			CompetitorId: DevKit.Form.Controls.ControlLookup;
			/** Activity that is created automatically when an opportunity is closed, containing information such as the description of the closing and actual revenue. */
			Description: DevKit.Form.Controls.ControlString;
		}
	}
	class FormOpportunityClose_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form OpportunityClose_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form OpportunityClose_Information */
		Body: LuckyMokey.FormOpportunityClose_Information.Body;
	}
	namespace FormOpportunity_Close {
		interface tab_OpportunityClose_Sections {
			quickOpportunityClose_column1_section1: DevKit.Form.Controls.ControlSection;
			quickOpportunityClose_column2_section1: DevKit.Form.Controls.ControlSection;
			quickOpportunityClose_column3_section1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_OpportunityClose extends DevKit.Form.Controls.IControlTab {
			Section: tab_OpportunityClose_Sections;
		}
		interface Tabs {
			OpportunityClose: tab_OpportunityClose;
		}
		interface Body {
			Tab: Tabs;
			/** Actual end time of the opportunity close activity. */
			ActualEnd: DevKit.Form.Controls.ControlDate;
			/** Actual revenue generated for the opportunity. */
			ActualRevenue: DevKit.Form.Controls.ControlMoney;
			/** Unique identifier of the competitor with which the opportunity close activity is associated. */
			CompetitorId: DevKit.Form.Controls.ControlLookup;
			/** Activity that is created automatically when an opportunity is closed, containing information such as the description of the closing and actual revenue. */
			Description: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the opportunity closed. */
			OpportunityId: DevKit.Form.Controls.ControlLookup;
			/** Status of the opportunity. */
			OpportunityStateCode: DevKit.Form.Controls.ControlOptionSet;
			/** Status reason of the opportunity. */
			OpportunityStatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Subject associated with the opportunity close activity. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormOpportunity_Close extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Opportunity_Close
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Opportunity_Close */
		Body: LuckyMokey.FormOpportunity_Close.Body;
	}
}
declare namespace OptionSet {
	namespace OpportunityClose {
		enum Community {
			/** 1 */
			Facebook,
			/** 2 */
			Twitter,
			/** 0 */
			Other
		}
		enum DeliveryPriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 1 */
			Recurring_Master,
			/** 2 */
			Recurring_Instance,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception
		}
		enum OpportunityStateCode {
			/** 0 */
			Open,
			/** 1 */
			Won,
			/** 2 */
			Lost
		}
		enum OpportunityStatusCode {
			/** 1 */
			In_Progress,
			/** 2 */
			On_Hold,
			/** 3 */
			Won,
			/** 4 */
			Canceled,
			/** 5 */
			Out_Sold
		}
		enum PriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum StateCode {
			/** 0 */
			Open,
			/** 1 */
			Completed,
			/** 2 */
			Canceled
		}
		enum StatusCode {
			/** 1 */
			Open,
			/** 2 */
			Completed,
			/** 3 */
			Canceled
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
//{'JsForm':['Information','Opportunity Close'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
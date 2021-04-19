//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormOpportunityClose_Information {
		interface tab_resolution_Sections {
			information: DevKit.Controls.Section;
		}
		interface tab_resolution extends DevKit.Controls.ITab {
			Section: tab_resolution_Sections;
		}
		interface Tabs {
			resolution: tab_resolution;
		}
		interface Body {
			Tab: Tabs;
			/** Actual end time of the opportunity close activity. */
			ActualEnd: DevKit.Controls.Date;
			/** Actual revenue generated for the opportunity. */
			ActualRevenue: DevKit.Controls.Money;
			/** Unique identifier of the competitor with which the opportunity close activity is associated. */
			CompetitorId: DevKit.Controls.Lookup;
			/** Activity that is created automatically when an opportunity is closed, containing information such as the description of the closing and actual revenue. */
			Description: DevKit.Controls.String;
		}
	}
	class FormOpportunityClose_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form OpportunityClose_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form OpportunityClose_Information */
		Body: MyDog.FormOpportunityClose_Information.Body;
	}
	namespace FormOpportunity_Close {
		interface tab_OpportunityClose_Sections {
			quickOpportunityClose_column1_section1: DevKit.Controls.Section;
			quickOpportunityClose_column2_section1: DevKit.Controls.Section;
			quickOpportunityClose_column3_section1: DevKit.Controls.Section;
		}
		interface tab_OpportunityClose extends DevKit.Controls.ITab {
			Section: tab_OpportunityClose_Sections;
		}
		interface Tabs {
			OpportunityClose: tab_OpportunityClose;
		}
		interface Body {
			Tab: Tabs;
			/** Actual end time of the opportunity close activity. */
			ActualEnd: DevKit.Controls.Date;
			/** Actual revenue generated for the opportunity. */
			ActualRevenue: DevKit.Controls.Money;
			/** Unique identifier of the competitor with which the opportunity close activity is associated. */
			CompetitorId: DevKit.Controls.Lookup;
			/** Activity that is created automatically when an opportunity is closed, containing information such as the description of the closing and actual revenue. */
			Description: DevKit.Controls.String;
			/** Unique identifier of the opportunity closed. */
			OpportunityId: DevKit.Controls.Lookup;
			/** Status of the opportunity. */
			OpportunityStateCode: DevKit.Controls.OptionSet;
			/** Status reason of the opportunity. */
			OpportunityStatusCode: DevKit.Controls.OptionSet;
			/** Subject associated with the opportunity close activity. */
			Subject: DevKit.Controls.String;
		}
	}
	class FormOpportunity_Close extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Opportunity_Close
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form Opportunity_Close */
		Body: MyDog.FormOpportunity_Close.Body;
	}
}
declare namespace OptionSet {
	namespace OpportunityClose {
		enum Community {
			/** 5 */
			Cortana,
			/** 6 */
			Direct_Line,
			/** 8 */
			Direct_Line_Speech,
			/** 9 */
			Email,
			/** 1 */
			Facebook,
			/** 10 */
			GroupMe,
			/** 11 */
			Kik,
			/** 3 */
			Line,
			/** 7 */
			Microsoft_Teams,
			/** 0 */
			Other,
			/** 13 */
			Skype,
			/** 14 */
			Slack,
			/** 12 */
			Telegram,
			/** 2 */
			Twitter,
			/** 4 */
			Wechat,
			/** 15 */
			WhatsApp
		}
		enum DeliveryPriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception,
			/** 2 */
			Recurring_Instance,
			/** 1 */
			Recurring_Master
		}
		enum OpportunityStateCode {
			/** 2 */
			Lost,
			/** 0 */
			Open,
			/** 1 */
			Won
		}
		enum OpportunityStatusCode {
			/** 4 */
			Canceled,
			/** 1 */
			In_Progress,
			/** 2 */
			On_Hold,
			/** 5 */
			Out_Sold,
			/** 3 */
			Won
		}
		enum PriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum StateCode {
			/** 2 */
			Canceled,
			/** 1 */
			Completed,
			/** 0 */
			Open
		}
		enum StatusCode {
			/** 3 */
			Canceled,
			/** 2 */
			Completed,
			/** 1 */
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
//{'JsForm':['Information','Opportunity Close'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormIncidentResolution_Information {
		interface tab_general_Sections {
			information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information that describes the case resolution. */
			Description: DevKit.Form.Controls.ControlString;
			ResolutionTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Subject associated with the case resolution activity. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Time spent on the case resolution activity. */
			TimeSpent: DevKit.Form.Controls.ControlInteger;
			/** Total time spent on the case resolution activity. */
			TotalTimeSpent: DevKit.Form.Controls.ControlInteger;
		}
	}
	class FormIncidentResolution_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form IncidentResolution_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form IncidentResolution_Information */
		Body: LuckyMokey.FormIncidentResolution_Information.Body;
	}
	namespace FormCase_Resolution_Quick_Create_Form {
		interface tab_general_Sections {
			information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information that describes the case resolution. */
			Description: DevKit.Form.Controls.ControlString;
			ResolutionTypeCode: DevKit.Form.Controls.ControlOptionSet;
			/** Subject associated with the case resolution activity. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Time spent on the case resolution activity. */
			TimeSpent: DevKit.Form.Controls.ControlInteger;
			/** Total time spent on the case resolution activity. */
			TotalTimeSpent: DevKit.Form.Controls.ControlInteger;
		}
	}
	class FormCase_Resolution_Quick_Create_Form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Case_Resolution_Quick_Create_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Case_Resolution_Quick_Create_Form */
		Body: LuckyMokey.FormCase_Resolution_Quick_Create_Form.Body;
	}
}
declare namespace OptionSet {
	namespace IncidentResolution {
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
		enum PriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum ResolutionTypeCode {
			/** 5 */
			Problem_Solved,
			/** 1000 */
			Information_Provided
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
			Closed,
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
//{'JsForm':['Quick Create Form','Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormBusinessUnitNewsArticle_Information {
		interface tab_announcement_Sections {
			announcement_information: DevKit.Form.Controls.ControlSection;
			additional_settings: DevKit.Form.Controls.ControlSection;
		}
		interface tab_announcement extends DevKit.Form.Controls.IControlTab {
			Section: tab_announcement_Sections;
		}
		interface Tabs {
			announcement: tab_announcement;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time of the last day the announcement is active. */
			ActiveUntil: DevKit.Form.Controls.ControlDate;
			/** Title of the announcement. */
			ArticleTitle: DevKit.Form.Controls.ControlString;
			/** URL for the Website on which the announcement is located. */
			ArticleUrl: DevKit.Form.Controls.ControlString;
			/** Text for the announcement. */
			NewsArticle: DevKit.Form.Controls.ControlString;
		}
	}
	class FormBusinessUnitNewsArticle_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form BusinessUnitNewsArticle_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form BusinessUnitNewsArticle_Information */
		Body: LuckyMokey.FormBusinessUnitNewsArticle_Information.Body;
	}
}
declare namespace OptionSet {
	namespace BusinessUnitNewsArticle {
		enum ArticleTypeCode {
			/** 1 */
			All_Users,
			/** 2 */
			Sales_Users,
			/** 3 */
			Service_Users
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsfp_surveyresponse_Information {
		interface Header {
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Priority of the activity. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Scheduled end time of the activity. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Status of the activity. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab__FE5BE043_870F_4D0F_B79F_195DCBA93F38_Sections {
			General: DevKit.Form.Controls.ControlSection;
			_FE5BE043_870F_4D0F_B79F_195DCBA93F38_SECTION_4: DevKit.Form.Controls.ControlSection;
			QuestionResponses: DevKit.Form.Controls.ControlSection;
		}
		interface tab__FE5BE043_870F_4D0F_B79F_195DCBA93F38 extends DevKit.Form.Controls.IControlTab {
			Section: tab__FE5BE043_870F_4D0F_B79F_195DCBA93F38_Sections;
		}
		interface Tabs {
			_FE5BE043_870F_4D0F_B79F_195DCBA93F38: tab__FE5BE043_870F_4D0F_B79F_195DCBA93F38;
		}
		interface Body {
			Tab: Tabs;
			IFRAME_SurveyResponse: DevKit.Form.Controls.ControlIFrame;
			QuestionResponses: DevKit.Form.Controls.ControlGrid;
			/** Person who the activity is from. */
			From: DevKit.Form.Controls.ControlLookup;
			/** Context data for the survey response. */
			msfp_embedcontextparameters: DevKit.Form.Controls.ControlString;
			/** Shows the language of the respondent. */
			msfp_language: DevKit.Form.Controls.ControlString;
			/** Shows the locale of the respondent. */
			msfp_locale: DevKit.Form.Controls.ControlString;
			/** The survey response name. */
			msfp_name: DevKit.Form.Controls.ControlString;
			/** Net Promoter Score of the response. */
			msfp_npsscore: DevKit.Form.Controls.ControlInteger;
			/** Other survey response properties in JSON format. */
			msfp_otherproperties: DevKit.Form.Controls.ControlString;
			/** Name of the respondent. */
			msfp_respondent: DevKit.Form.Controls.ControlString;
			/** Email address of the respondent. */
			msfp_respondentemailaddress: DevKit.Form.Controls.ControlString;
			/** Sentiment of the response. */
			msfp_sentiment: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier for the survey in the source application. */
			msfp_sourcesurveyidentifier: DevKit.Form.Controls.ControlString;
			/** Stores the date when a response was submitted. */
			msfp_submitdate: DevKit.Form.Controls.ControlDate;
			/** Specifies the survey associated with the survey response. */
			msfp_surveyid: DevKit.Form.Controls.ControlLookup;
			/** Specifies survey invitation associated with the survey response */
			msfp_surveyinviteid: DevKit.Form.Controls.ControlLookup;
			/** Link to the survey response in Microsoft Forms Pro. */
			msfp_surveyresponseurl: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Scheduled start time of the activity. */
			ScheduledStart: DevKit.Form.Controls.ControlDateTime;
			/** Subject associated with the activity. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsfp_surveyresponse_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msfp_surveyresponse_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msfp_surveyresponse_Information */
		Body: LuckyMokey.Formmsfp_surveyresponse_Information.Body;
		/** The Header section of form msfp_surveyresponse_Information */
		Header: LuckyMokey.Formmsfp_surveyresponse_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msfp_surveyresponse {
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
		enum msfp_sentiment {
			/** 647390000 */
			Positive,
			/** 647390001 */
			Neutral,
			/** 647390002 */
			Negative
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
			Canceled,
			/** 3 */
			Scheduled
		}
		enum StatusCode {
			/** 1 */
			Open,
			/** 2 */
			Completed,
			/** 3 */
			Canceled,
			/** 4 */
			Scheduled
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsfp_surveyresponse_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Priority of the activity. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Scheduled end time of the activity. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Status of the activity. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab__FE5BE043_870F_4D0F_B79F_195DCBA93F38_Sections {
			_FE5BE043_870F_4D0F_B79F_195DCBA93F38_SECTION_4: DevKit.Controls.Section;
			General: DevKit.Controls.Section;
			QuestionResponses: DevKit.Controls.Section;
		}
		interface tab__FE5BE043_870F_4D0F_B79F_195DCBA93F38 extends DevKit.Controls.ITab {
			Section: tab__FE5BE043_870F_4D0F_B79F_195DCBA93F38_Sections;
		}
		interface Tabs {
			_FE5BE043_870F_4D0F_B79F_195DCBA93F38: tab__FE5BE043_870F_4D0F_B79F_195DCBA93F38;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who created the activity. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Person who the activity is from. */
			From: DevKit.Controls.Lookup;
			IFRAME_SurveyResponse: DevKit.Controls.IFrame;
			/** Context data for the survey response. */
			msfp_embedcontextparameters: DevKit.Controls.String;
			/** Shows the language of the respondent. */
			msfp_language: DevKit.Controls.String;
			/** Shows the locale of the respondent. */
			msfp_locale: DevKit.Controls.String;
			/** The survey response name. */
			msfp_name: DevKit.Controls.String;
			/** Net Promoter Score of the response. */
			msfp_npsscore: DevKit.Controls.Integer;
			/** Other survey response properties in JSON format. */
			msfp_otherproperties: DevKit.Controls.String;
			/** List of question responses in JSON format. */
			msfp_questionresponseslist: DevKit.Controls.String;
			/** Name of the respondent. */
			msfp_respondent: DevKit.Controls.String;
			/** Email address of the respondent. */
			msfp_respondentemailaddress: DevKit.Controls.String;
			/** Satisfaction metric values for the survey response. */
			msfp_satisfactionmetricvalue: DevKit.Controls.String;
			/** Sentiment of the response. */
			msfp_sentiment: DevKit.Controls.OptionSet;
			/** Unique identifier for the survey in the source application. */
			msfp_sourcesurveyidentifier: DevKit.Controls.String;
			/** Stores the date when a response was submitted. */
			msfp_submitdate: DevKit.Controls.Date;
			/** Specifies the survey associated with the survey response. */
			msfp_surveyid: DevKit.Controls.Lookup;
			/** Specifies survey invitation associated with the survey response */
			msfp_surveyinviteid: DevKit.Controls.Lookup;
			/** Link to the survey response in Customer Voice. */
			msfp_surveyresponseurl: DevKit.Controls.String;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Scheduled start time of the activity. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
		}
		interface Grid {
			QuestionResponses: DevKit.Controls.Grid;
		}
	}
	class Formmsfp_surveyresponse_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msfp_surveyresponse_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msfp_surveyresponse_Information */
		Body: DevKit.Formmsfp_surveyresponse_Information.Body;
		/** The Header section of form msfp_surveyresponse_Information */
		Header: DevKit.Formmsfp_surveyresponse_Information.Header;
		/** The Grid of form msfp_surveyresponse_Information */
		Grid: DevKit.Formmsfp_surveyresponse_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msfp_surveyresponse {
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
		enum msfp_sentiment {
			/** 647390002 */
			Negative,
			/** 647390001 */
			Neutral,
			/** 647390000 */
			Positive
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
			Open,
			/** 3 */
			Scheduled
		}
		enum StatusCode {
			/** 3 */
			Canceled,
			/** 2 */
			Completed,
			/** 1 */
			Open,
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
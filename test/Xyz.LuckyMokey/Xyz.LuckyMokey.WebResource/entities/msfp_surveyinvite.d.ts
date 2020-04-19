//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsfp_surveyinvite_Information {
		interface Header {
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Status of the activity. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab__9556FAF0_FB19_453F_A229_3F55E2787722_Sections {
			_D2018D44_DE86_424D_889D_319B33BF6825: DevKit.Form.Controls.ControlSection;
		}
		interface tab__9556FAF0_FB19_453F_A229_3F55E2787722 extends DevKit.Form.Controls.IControlTab {
			Section: tab__9556FAF0_FB19_453F_A229_3F55E2787722_Sections;
		}
		interface Tabs {
			_9556FAF0_FB19_453F_A229_3F55E2787722: tab__9556FAF0_FB19_453F_A229_3F55E2787722;
		}
		interface Body {
			Tab: Tabs;
			/** Channel through which the survey invitation was sent. */
			msfp_channel: DevKit.Form.Controls.ControlOptionSet;
			/** Email to which the survey invitation is sent. */
			msfp_inviteemailaddress: DevKit.Form.Controls.ControlString;
			/** Date when the survey invitation was sent. */
			msfp_invitesentdate: DevKit.Form.Controls.ControlDate;
			/** Status of the survey invitation. */
			msfp_invitestatus: DevKit.Form.Controls.ControlOptionSet;
			/** Stores other survey invitation properties in JSON format. */
			msfp_otherproperties: DevKit.Form.Controls.ControlString;
			/** Name of the respondent */
			msfp_respondent: DevKit.Form.Controls.ControlString;
			/** Unique identifier for the survey in the source application. */
			msfp_sourcesurveyidentifier: DevKit.Form.Controls.ControlString;
			/** Stores the survey associated with the survey invitation. */
			msfp_surveyid: DevKit.Form.Controls.ControlLookup;
			/** Personalized survey link sent with the invitation. */
			msfp_surveyinvitationurl: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Reason for the status of the activity. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Subject associated with the activity. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Person who is the receiver of the activity. */
			To: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsfp_surveyinvite_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msfp_surveyinvite_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msfp_surveyinvite_Information */
		Body: LuckyMokey.Formmsfp_surveyinvite_Information.Body;
		/** The Header section of form msfp_surveyinvite_Information */
		Header: LuckyMokey.Formmsfp_surveyinvite_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msfp_surveyinvite {
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
		enum msfp_channel {
			/** 647390000 */
			Email,
			/** 647390001 */
			Flow
		}
		enum msfp_invitestatus {
			/** 647390000 */
			Queued,
			/** 647390001 */
			UnSubscribed,
			/** 647390002 */
			Sent,
			/** 647390003 */
			Responded,
			/** 647390004 */
			Failed,
			/** 647390005 */
			Created,
			/** 647390006 */
			Read,
			/** 647390007 */
			Started,
			/** 647390008 */
			Delayed
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
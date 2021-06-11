//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsfp_surveyinvite_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the activity. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab__9556FAF0_FB19_453F_A229_3F55E2787722_Sections {
			_D2018D44_DE86_424D_889D_319B33BF6825: DevKit.Controls.Section;
			Email_Message: DevKit.Controls.Section;
		}
		interface tab__9556FAF0_FB19_453F_A229_3F55E2787722 extends DevKit.Controls.ITab {
			Section: tab__9556FAF0_FB19_453F_A229_3F55E2787722_Sections;
		}
		interface Tabs {
			_9556FAF0_FB19_453F_A229_3F55E2787722: tab__9556FAF0_FB19_453F_A229_3F55E2787722;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who created the activity. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Channel through which the survey invitation was sent. */
			msfp_channel: DevKit.Controls.OptionSet;
			/** Content of the email message. */
			msfp_emailmessage: DevKit.Controls.String;
			/** Email to which the survey invitation is sent. */
			msfp_inviteemailaddress: DevKit.Controls.String;
			/** Date when the survey invitation was sent. */
			msfp_invitesentdate: DevKit.Controls.Date;
			/** Status of the survey invitation. */
			msfp_invitestatus: DevKit.Controls.OptionSet;
			/** Stores other survey invitation properties in JSON format. */
			msfp_otherproperties: DevKit.Controls.String;
			/** Name of the respondent */
			msfp_respondent: DevKit.Controls.String;
			/** Unique identifier for the survey in the source application. */
			msfp_sourcesurveyidentifier: DevKit.Controls.String;
			/** Stores the survey associated with the survey invitation. */
			msfp_surveyid: DevKit.Controls.Lookup;
			/** Personalized survey link sent with the invitation. */
			msfp_surveyinvitationurl: DevKit.Controls.String;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Reason for the status of the activity. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
			/** Person who is the receiver of the activity. */
			To: DevKit.Controls.Lookup;
		}
	}
	class Formmsfp_surveyinvite_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msfp_surveyinvite_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msfp_surveyinvite_Information */
		Body: DevKit.Formmsfp_surveyinvite_Information.Body;
		/** The Header section of form msfp_surveyinvite_Information */
		Header: DevKit.Formmsfp_surveyinvite_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msfp_surveyinvite {
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
		enum msfp_channel {
			/** 647390000 */
			Email,
			/** 647390001 */
			Flow
		}
		enum msfp_invitestatus {
			/** 647390005 */
			Created,
			/** 647390008 */
			Delayed,
			/** 647390004 */
			Failed,
			/** 647390000 */
			Queued,
			/** 647390006 */
			Read,
			/** 647390011 */
			Reminder_failed,
			/** 647390012 */
			Reminder_in_progress,
			/** 647390009 */
			Reminder_scheduled,
			/** 647390010 */
			Reminder_sent,
			/** 647390003 */
			Responded,
			/** 647390002 */
			Sent,
			/** 647390013 */
			Skipped,
			/** 647390007 */
			Started,
			/** 647390001 */
			UnSubscribed
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
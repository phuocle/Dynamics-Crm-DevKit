//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsfp_alert_Information {
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
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Controls.Note;
			/** Date and time when the activity was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Date and time when activity was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Email address of the assignee of the alert. */
			msfp_assigneeemail: DevKit.Controls.String;
			/** Name of the assignee of the alert. */
			msfp_assigneename: DevKit.Controls.String;
			msfp_customeremail: DevKit.Controls.String;
			msfp_customername: DevKit.Controls.String;
			/** Additional detail for the alert. */
			msfp_notes: DevKit.Controls.String;
			/** Project to which the alert belongs. */
			msfp_project: DevKit.Controls.Lookup;
			/** Questions associated with the alert. */
			msfp_questions: DevKit.Controls.String;
			/** Reason for creating the alert. */
			msfp_reason: DevKit.Controls.String;
			/** Detail on how the alert was resolved. */
			msfp_resolutiondetail: DevKit.Controls.String;
			/** Sentiment while resolving the alert. */
			msfp_resolutionsentiment: DevKit.Controls.Integer;
			/** Email address of the user who resolved the alert. */
			msfp_resolveremail: DevKit.Controls.String;
			/** Name of the user who resolved the alert. */
			msfp_resolvername: DevKit.Controls.String;
			/** Satisfaction metric associated with the alert. */
			msfp_satisfactionmetric: DevKit.Controls.Lookup;
			/** Survey associated with the alert. */
			msfp_survey: DevKit.Controls.Lookup;
			/** Survey response associated with the alert. */
			msfp_surveyresponse: DevKit.Controls.Lookup;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
			/** Person who is the receiver of the activity. */
			To: DevKit.Controls.Lookup;
		}
	}
	class Formmsfp_alert_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msfp_alert_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msfp_alert_Information */
		Body: MyDog.Formmsfp_alert_Information.Body;
		/** The Header section of form msfp_alert_Information */
		Header: MyDog.Formmsfp_alert_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msfp_alert {
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
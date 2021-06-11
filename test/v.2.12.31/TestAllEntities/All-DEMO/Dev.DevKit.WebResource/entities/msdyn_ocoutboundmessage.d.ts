//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocoutboundmessage_Information {
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
		interface tab__D7D88659_2ED3_45F1_977B_4F32B69EE89D_Sections {
		}
		interface tab__D7D88659_2ED3_45F1_977B_4F32B69EE89D extends DevKit.Controls.ITab {
			Section: tab__D7D88659_2ED3_45F1_977B_4F32B69EE89D_Sections;
		}
		interface Tabs {
			_D7D88659_2ED3_45F1_977B_4F32B69EE89D: tab__D7D88659_2ED3_45F1_977B_4F32B69EE89D;
		}
		interface Body {
			Tab: Tabs;
			/** Outbound message delivery failure reason. */
			msdyn_failurereason: DevKit.Controls.String;
			/** Failure status code of outbound message */
			msdyn_failurestatuscode: DevKit.Controls.Integer;
			/** The channel(s) in the conversation. */
			msdyn_occhanneltype: DevKit.Controls.MultiOptionSet;
			/** Message text. */
			msdyn_ocmessagetext: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
		}
	}
	class Formmsdyn_ocoutboundmessage_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_ocoutboundmessage_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocoutboundmessage_Information */
		Body: DevKit.Formmsdyn_ocoutboundmessage_Information.Body;
		/** The Header section of form msdyn_ocoutboundmessage_Information */
		Header: DevKit.Formmsdyn_ocoutboundmessage_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msdyn_ocoutboundmessage {
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
		enum msdyn_occhanneltype {
			/** 192390000 */
			Co_browse,
			/** 192350002 */
			Custom,
			/** 192350000 */
			Entity_Records,
			/** 192330000 */
			Facebook,
			/** 192310000 */
			LINE,
			/** 192360000 */
			Live_chat,
			/** 19241000 */
			Microsoft_Teams,
			/** 192400000 */
			Screen_sharing,
			/** 192340000 */
			SMS,
			/** 192350001 */
			Twitter,
			/** 192380000 */
			Video,
			/** 192370000 */
			Voice,
			/** 192320000 */
			WeChat,
			/** 192300000 */
			WhatsApp
		}
		enum msdyn_ocmessagetype {
			/** 100000001 */
			Create_conversation_on_send,
			/** 100000000 */
			Create_conversation_when_customer_responds_
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
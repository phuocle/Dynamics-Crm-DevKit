//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_liveconversation_Information {
		interface Tabs {
		}
		interface Body {
			/** Subject associated with the conversation record */
			msdyn_subject: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the conversation record. */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_liveconversation_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_liveconversation_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_liveconversation_Information */
		Body: MyDog.Formmsdyn_liveconversation_Information.Body;
	}
	namespace FormOngoing_Conversation_Main_Form {
		interface Tabs {
		}
		interface Body {
			/** Subject associated with the conversation record */
			msdyn_subject: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the conversation record. */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class FormOngoing_Conversation_Main_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Ongoing_Conversation_Main_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Ongoing_Conversation_Main_Form */
		Body: MyDog.FormOngoing_Conversation_Main_Form.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_liveconversation {
		enum msdyn_channel {
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
		enum msdyn_customersentimentlabel {
			/** 0 */
			NA,
			/** 8 */
			Negative,
			/** 10 */
			Neutral,
			/** 12 */
			Positive,
			/** 9 */
			Slightly_negative,
			/** 11 */
			Slightly_positive,
			/** 7 */
			Very_negative,
			/** 13 */
			Very_positive
		}
		enum msdyn_statecode {
			/** 1 */
			Active,
			/** 3 */
			Closed,
			/** 0 */
			Open,
			/** 2 */
			Waiting,
			/** 4 */
			Wrap_up
		}
		enum msdyn_statuscode {
			/** 2 */
			Active,
			/** 4 */
			Closed,
			/** 1 */
			Open,
			/** 3 */
			Waiting,
			/** 5 */
			Wrap_up
		}
		enum msdyn_workstreamworkdistributionmode {
			/** 192350001 */
			Pick,
			/** 192350000 */
			Push
		}
		enum statecode {
			/** 1 */
			Active,
			/** 3 */
			Closed,
			/** 0 */
			Open,
			/** 2 */
			Waiting,
			/** 4 */
			Wrap_up
		}
		enum statuscode {
			/** 2 */
			Active,
			/** 4 */
			Closed,
			/** 1 */
			Open,
			/** 3 */
			Waiting,
			/** 5 */
			Wrap_up
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
//{'JsForm':['Information','Main Form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
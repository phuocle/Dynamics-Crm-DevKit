//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_questionsequence_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_QuestionRequired: DevKit.Form.Controls.ControlBoolean;
			msdyn_SurveyQuestion: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			SequenceNumber: DevKit.Form.Controls.ControlInteger;
		}
	}
	class Formmsdyn_questionsequence_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_questionsequence_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_questionsequence_Information */
		Body: LuckyMokey.Formmsdyn_questionsequence_Information.Body;
	}
	namespace FormQuick_Create_Chat_Question {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for Chat widget associated with Survey question sequence. */
			msdyn_ChatEngagementToChatSequenceId: DevKit.Form.Controls.ControlLookup;
			msdyn_chatquestionnairetype: DevKit.Form.Controls.ControlOptionSet;
			msdyn_QuestionRequired: DevKit.Form.Controls.ControlBoolean;
			msdyn_SurveyQuestion: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			SequenceNumber: DevKit.Form.Controls.ControlInteger;
		}
	}
	class FormQuick_Create_Chat_Question extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Quick_Create_Chat_Question
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Quick_Create_Chat_Question */
		Body: LuckyMokey.FormQuick_Create_Chat_Question.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_questionsequence {
		enum msdyn_chatquestionnairetype {
			/** 192350000 */
			Pre_chat_authenticated,
			/** 192350001 */
			Pre_chat_unauthenticated,
			/** 192350002 */
			Offline_authenticated,
			/** 192350003 */
			Offline_unauthenticated,
			/** 192350004 */
			Post_chat_authenticated,
			/** 192350005 */
			Post_chat_unauthenticated
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'JsForm':['Information','Quick Create : Chat Question'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
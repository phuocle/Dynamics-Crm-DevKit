//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_conversationaction_Information {
		interface tab__87D6AEF8_978D_4530_BFC7_EB7307C1BBD8_Sections {
		}
		interface tab_ConversationActionLocale_Sections {
			_87D6AEF8_978D_4530_BFC7_EB7307C1BBD8_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__87D6AEF8_978D_4530_BFC7_EB7307C1BBD8 extends DevKit.Form.Controls.IControlTab {
			Section: tab__87D6AEF8_978D_4530_BFC7_EB7307C1BBD8_Sections;
		}
		interface tab_ConversationActionLocale extends DevKit.Form.Controls.IControlTab {
			Section: tab_ConversationActionLocale_Sections;
		}
		interface Tabs {
			_87D6AEF8_978D_4530_BFC7_EB7307C1BBD8: tab__87D6AEF8_978D_4530_BFC7_EB7307C1BBD8;
			ConversationActionLocale: tab_ConversationActionLocale;
		}
		interface Body {
			Tab: Tabs;
			Local_fields: DevKit.Form.Controls.ControlGrid;
			msdyn_EventName: DevKit.Form.Controls.ControlOptionSet;
			msdyn_EventParameter: DevKit.Form.Controls.ControlString;
			msdyn_FunctionName: DevKit.Form.Controls.ControlString;
			msdyn_Icon: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_Order: DevKit.Form.Controls.ControlInteger;
			msdyn_WebResource: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_conversationaction_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_conversationaction_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_conversationaction_Information */
		Body: LuckyMokey.Formmsdyn_conversationaction_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_conversationaction {
		enum msdyn_EventName {
			/** 100000000 */
			Open_App_Tab_Template,
			/** 100000001 */
			Send_message,
			/** 100000002 */
			Customer_Defined_Function
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
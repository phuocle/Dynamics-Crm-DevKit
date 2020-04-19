//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormPost_Information {
		interface tab_general_Sections {
			Post_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the parent record for the post to identify the customer, opportunity, case, or other record that the post most closely relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Select whether the post was created manually or automatically. */
			Source: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the text of a post. If this is a manual post, it appears in plain text. If this is an auto post, it appears in XML. */
			Text: DevKit.Form.Controls.ControlString;
		}
	}
	class FormPost_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Post_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Post_Information */
		Body: LuckyMokey.FormPost_Information.Body;
	}
}
declare namespace OptionSet {
	namespace Post {
		enum Source {
			/** 1 */
			Auto_Post,
			/** 2 */
			Manual_Post,
			/** 3 */
			ActionHub_Post
		}
		enum Type {
			/** 1 */
			Check_in,
			/** 2 */
			Idea,
			/** 3 */
			News,
			/** 4 */
			Private_Message,
			/** 5 */
			Question,
			/** 6 */
			Re_post,
			/** 7 */
			Status
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
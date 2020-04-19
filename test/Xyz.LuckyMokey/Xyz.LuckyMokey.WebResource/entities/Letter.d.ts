//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormLetter {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Shows whether the letter is open, completed, or canceled. Completed and canceled letters are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_SUMMARY_TAB_Sections {
			general_information: DevKit.Form.Controls.ControlSection;
			Letter_description: DevKit.Form.Controls.ControlSection;
			Letter_details: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_SUMMARY_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent creating and sending the letter. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Type the complete recipient address for the letter to ensure timely delivery. */
			Address: DevKit.Form.Controls.ControlString;
			/** Type the letter body or additional information to describe the letter, such as the primary message or the products and services described. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select the direction of the letter as incoming or outbound. */
			DirectionCode: DevKit.Form.Controls.ControlBoolean;
			/** Enter the account, contact, lead, or user who sent the letter. */
			from: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the letter activity is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the letter. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, or user recipients for the letter. */
			to: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormLetter extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Letter
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Letter */
		Body: LuckyMokey.FormLetter.Body;
		/** The Header section of form Letter */
		Header: LuckyMokey.FormLetter.Header;
	}
}
declare namespace OptionSet {
	namespace Letter {
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
			Canceled
		}
		enum StatusCode {
			/** 1 */
			Open,
			/** 2 */
			Draft,
			/** 3 */
			Received,
			/** 4 */
			Sent,
			/** 5 */
			Canceled
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
//{'JsForm':['Letter'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
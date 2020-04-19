//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormFax {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Shows whether the fax activity is open, completed, or canceled. Completed and canceled fax activities are read-only and can't be edited. */
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
			/** Type the number of minutes spent creating and sending the fax. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Type additional information to describe the fax, such as the primary message or the products and services featured. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select the direction of the fax as incoming or outbound. */
			DirectionCode: DevKit.Form.Controls.ControlBoolean;
			/** Type the recipient's fax number. */
			FaxNumber: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, queue, or user who sent the fax. */
			from: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the fax activity is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the fax. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, queue, or user recipients for the fax. */
			to: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormFax extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Fax
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Fax */
		Body: LuckyMokey.FormFax.Body;
		/** The Header section of form Fax */
		Header: LuckyMokey.FormFax.Header;
	}
}
declare namespace OptionSet {
	namespace Fax {
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
			Completed,
			/** 3 */
			Sent,
			/** 4 */
			Received,
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
//{'JsForm':['Fax'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
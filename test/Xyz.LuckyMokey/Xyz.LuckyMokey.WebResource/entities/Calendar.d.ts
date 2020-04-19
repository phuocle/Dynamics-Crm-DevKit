//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormCalendar_Information {
		interface tab_general_Sections {
			section_1: DevKit.Form.Controls.ControlSection;
			Holidays_List: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Calendar used by the scheduling system to define when an appointment or activity is to occur. */
			Description: DevKit.Form.Controls.ControlString;
			/** Name of the calendar. */
			Name: DevKit.Form.Controls.ControlString;
			holidayListcontrol_id: DevKit.Form.Controls.ControlActionCards;
		}
	}
	class FormCalendar_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Calendar_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Calendar_Information */
		Body: LuckyMokey.FormCalendar_Information.Body;
	}
}
declare namespace OptionSet {
	namespace Calendar {
		enum Type {
			/** 0 */
			Default,
			/** 1 */
			Customer_Service,
			/** 2 */
			Holiday_Schedule,
			/** -1 */
			Inner_Calendar_type
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
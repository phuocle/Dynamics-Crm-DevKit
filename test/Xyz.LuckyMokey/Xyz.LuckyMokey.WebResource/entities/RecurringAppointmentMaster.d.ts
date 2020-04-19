//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormRecurring_Appointment {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows whether the recurring appointment is open, scheduled, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_SUMMARY_TAB_Sections {
			general_information: DevKit.Form.Controls.ControlSection;
			appointment_description: DevKit.Form.Controls.ControlSection;
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
			/** Type additional information to describe the recurring appointment, such as key talking points or objectives. */
			Description: DevKit.Form.Controls.ControlString;
			/** Type the location where the recurring appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the recurring appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the recurring appointment series is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the recurring appointment. */
			RequiredAttendees: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the recurring appointment. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormRecurring_Appointment extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Recurring_Appointment
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Recurring_Appointment */
		Body: LuckyMokey.FormRecurring_Appointment.Body;
		/** The Header section of form Recurring_Appointment */
		Header: LuckyMokey.FormRecurring_Appointment.Header;
	}
}
declare namespace OptionSet {
	namespace RecurringAppointmentMaster {
		enum ExpansionStateCode {
			/** 0 */
			Unexpanded,
			/** 1 */
			Partial,
			/** 2 */
			Full
		}
		enum Instance {
			/** 1 */
			First,
			/** 2 */
			Second,
			/** 3 */
			Third,
			/** 4 */
			Fourth,
			/** 5 */
			Last
		}
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 1 */
			Recurring_Master,
			/** 2 */
			Recurring_Instance,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception
		}
		enum MonthOfYear {
			/** 0 */
			Invalid_Month_Of_Year,
			/** 1 */
			January,
			/** 2 */
			February,
			/** 3 */
			March,
			/** 4 */
			April,
			/** 5 */
			May,
			/** 6 */
			June,
			/** 7 */
			July,
			/** 8 */
			August,
			/** 9 */
			September,
			/** 10 */
			October,
			/** 11 */
			November,
			/** 12 */
			December
		}
		enum PatternEndType {
			/** 1 */
			No_End_Date,
			/** 2 */
			Occurrences,
			/** 3 */
			Pattern_End_Date
		}
		enum PriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum RecurrencePatternType {
			/** 0 */
			Daily,
			/** 1 */
			Weekly,
			/** 2 */
			Monthly,
			/** 3 */
			Yearly
		}
		enum StateCode {
			/** 0 */
			Open,
			/** 1 */
			Completed,
			/** 2 */
			Canceled,
			/** 3 */
			Scheduled
		}
		enum StatusCode {
			/** 1 */
			Free,
			/** 2 */
			Tentative,
			/** 3 */
			Completed,
			/** 4 */
			Canceled,
			/** 5 */
			Busy,
			/** 6 */
			Out_of_Office
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
//{'JsForm':['Recurring Appointment'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormAppointment {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Shows whether the appointment is open, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_appointment_Sections {
			general_information: DevKit.Form.Controls.ControlSection;
			attachments: DevKit.Form.Controls.ControlSection;
			scheduling_information: DevKit.Form.Controls.ControlSection;
			appointment_description: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_appointment extends DevKit.Form.Controls.IControlTab {
			Section: tab_appointment_Sections;
		}
		interface Tabs {
			appointment: tab_appointment;
		}
		interface Body {
			Tab: Tabs;
			attachmentsGrid: DevKit.Form.Controls.ControlGrid;
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Form.Controls.ControlBoolean;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the appointment is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Form.Controls.ControlLookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Form.Controls.ControlDateTime;
			/** Type a short description about the objective or primary topic of the appointment. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormAppointment extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Appointment
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Appointment */
		Body: LuckyMokey.FormAppointment.Body;
		/** The Header section of form Appointment */
		Header: LuckyMokey.FormAppointment.Header;
	}
	namespace FormAppointment_for_Interactive_experience {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Shows whether the appointment is open, completed, or canceled. Completed and canceled appointments are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_tab_5_Sections {
			tab_5_section_5: DevKit.Form.Controls.ControlSection;
			tab_5_section_2: DevKit.Form.Controls.ControlSection;
			appointment_description: DevKit.Form.Controls.ControlSection;
			tab_5_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_5 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_5_Sections;
		}
		interface Tabs {
			tab_5: tab_tab_5;
		}
		interface Body {
			Tab: Tabs;
			attachmentsGrid: DevKit.Form.Controls.ControlGrid;
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Form.Controls.ControlBoolean;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the appointment is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the appointment is associated. */
			RegardingObjectId_1: DevKit.Form.Controls.ControlLookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Form.Controls.ControlLookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Form.Controls.ControlDateTime;
			/** Type a short description about the objective or primary topic of the appointment. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormAppointment_for_Interactive_experience extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Appointment_for_Interactive_experience
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Appointment_for_Interactive_experience */
		Body: LuckyMokey.FormAppointment_for_Interactive_experience.Body;
		/** The Header section of form Appointment_for_Interactive_experience */
		Header: LuckyMokey.FormAppointment_for_Interactive_experience.Header;
	}
	namespace FormAppointment_Wizard {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_appointment_Sections {
			Hidden_Section: DevKit.Form.Controls.ControlSection;
			general_information: DevKit.Form.Controls.ControlSection;
			attachments: DevKit.Form.Controls.ControlSection;
			scheduling_information: DevKit.Form.Controls.ControlSection;
			appointment_description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_appointment extends DevKit.Form.Controls.IControlTab {
			Section: tab_appointment_Sections;
		}
		interface Tabs {
			appointment: tab_appointment;
		}
		interface Body {
			Tab: Tabs;
			attachmentsGrid: DevKit.Form.Controls.ControlGrid;
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Form.Controls.ControlBoolean;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the appointment is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Form.Controls.ControlLookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Form.Controls.ControlDateTime;
			/** Select the appointment's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type a short description about the objective or primary topic of the appointment. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormAppointment_Wizard extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Appointment_Wizard
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Appointment_Wizard */
		Body: LuckyMokey.FormAppointment_Wizard.Body;
		/** The Header section of form Appointment_Wizard */
		Header: LuckyMokey.FormAppointment_Wizard.Header;
	}
	namespace FormAppointment_quick_create_form {
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
			/** Type additional information to describe the purpose of the appointment. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select whether the appointment is an all-day event to make sure that the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Form.Controls.ControlBoolean;
			/** Type the location where the appointment will take place, such as a conference room or customer office. */
			Location: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, user, or other equipment resources that are not needed at the appointment, but can optionally attend. */
			OptionalAttendees: DevKit.Form.Controls.ControlLookup;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier of the object with which the appointment is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Enter the account, contact, lead, user, or other equipment resources that are required to attend the appointment. */
			requiredattendees: DevKit.Form.Controls.ControlLookup;
			/** Shows the expected duration of the appointment, in minutes. */
			ScheduledDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Enter the expected due date and time for the activity to be completed to provide details about the timing of the appointment. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Enter the expected start date and time for the activity to provide details about the timing of the appointment. */
			ScheduledStart: DevKit.Form.Controls.ControlDateTime;
			/** Type a short description about the objective or primary topic of the appointment. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormAppointment_quick_create_form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Appointment_quick_create_form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Appointment_quick_create_form */
		Body: LuckyMokey.FormAppointment_quick_create_form.Body;
	}
}
declare namespace OptionSet {
	namespace Appointment {
		enum AttachmentErrors {
			/** 0 */
			None,
			/** 1 */
			The_appointment_was_saved_as_a_Microsoft_Dynamics_365_appointment_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid
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
//{'JsForm':['Appointment','Appointment for Interactive experience','Appointment quick create form.','Wizard'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
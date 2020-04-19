//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormServiceAppointment_Information {
		interface tab_service_Sections {
			general_information: DevKit.Form.Controls.ControlSection;
			scheduling_information: DevKit.Form.Controls.ControlSection;
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_details_Sections {
			appointment_details: DevKit.Form.Controls.ControlSection;
		}
		interface tab_bookableResourceBooking_Sections {
			Bookable_Resource_Bookings_Section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_service extends DevKit.Form.Controls.IControlTab {
			Section: tab_service_Sections;
		}
		interface tab_details extends DevKit.Form.Controls.IControlTab {
			Section: tab_details_Sections;
		}
		interface tab_bookableResourceBooking extends DevKit.Form.Controls.IControlTab {
			Section: tab_bookableResourceBooking_Sections;
		}
		interface Tabs {
			service: tab_service;
			details: tab_details;
			bookableResourceBooking: tab_bookableResourceBooking;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			bookableresourcebookings: DevKit.Form.Controls.ControlGrid;
			/** Type a category to identify the service activity type, such as routine maintenance or service call, to tie the service activity to a business group or function. */
			Category: DevKit.Form.Controls.ControlString;
			/** Enter the accounts and contacts for whom the service activity is being performed. */
			Customers: DevKit.Form.Controls.ControlLookup;
			/** Select whether the service activity is an all-day event to make sure the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Form.Controls.ControlBoolean;
			/** Type the location where the service activity will take place, such as a conference room, customer office, or other venue. */
			Location: DevKit.Form.Controls.ControlString;
			/** OrganizationalUnit ServiceAppointment Id */
			msdyn_OrganizationalUnitId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier of the object with which the service activity is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Enter the user, facility, or equipment required to complete the service activity. */
			Resources: DevKit.Form.Controls.ControlLookup;
			/** Shows the expected duration of the service activity, in minutes. */
			ScheduledDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Enter the expected due date and time. */
			ScheduledStart: DevKit.Form.Controls.ControlDateTime;
			/** Choose the service scheduled to be performed during the service activity. */
			ServiceId: DevKit.Form.Controls.ControlLookup;
			/** Choose the site or location where the service activity will be performed. */
			SiteId: DevKit.Form.Controls.ControlLookup;
			/** Select the service activity's status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Type a subcategory to identify the service activity type and relate the activity to a specific product, service region, business group, or other function. */
			Subcategory: DevKit.Form.Controls.ControlString;
			/** Type a short description about the objective or primary topic of the service activity. */
			Subject: DevKit.Form.Controls.ControlString;
		}
		interface Footer {
			/** Shows whether the service activity is open, completed, or canceled. Completed and canceled service activities are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormServiceAppointment_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form ServiceAppointment_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ServiceAppointment_Information */
		Body: LuckyMokey.FormServiceAppointment_Information.Body;
		/** The Footer section of form ServiceAppointment_Information */
		Footer: LuckyMokey.FormServiceAppointment_Information.Footer;
	}
}
declare namespace OptionSet {
	namespace ServiceAppointment {
		enum Community {
			/** 1 */
			Facebook,
			/** 2 */
			Twitter,
			/** 0 */
			Other
		}
		enum DeliveryPriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
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
			Closed,
			/** 2 */
			Canceled,
			/** 3 */
			Scheduled
		}
		enum StatusCode {
			/** 1 */
			Requested,
			/** 2 */
			Tentative,
			/** 3 */
			Pending,
			/** 4 */
			Reserved,
			/** 6 */
			In_Progress,
			/** 7 */
			Arrived,
			/** 8 */
			Completed,
			/** 9 */
			Canceled,
			/** 10 */
			No_Show
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
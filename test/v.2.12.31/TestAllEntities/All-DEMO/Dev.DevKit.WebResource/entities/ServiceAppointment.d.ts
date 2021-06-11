//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormServiceAppointment_Information {
		interface tab_bookableResourceBooking_Sections {
			Bookable_Resource_Bookings_Section: DevKit.Controls.Section;
		}
		interface tab_details_Sections {
			appointment_details: DevKit.Controls.Section;
		}
		interface tab_service_Sections {
			general_information: DevKit.Controls.Section;
			notes: DevKit.Controls.Section;
			scheduling_information: DevKit.Controls.Section;
		}
		interface tab_bookableResourceBooking extends DevKit.Controls.ITab {
			Section: tab_bookableResourceBooking_Sections;
		}
		interface tab_details extends DevKit.Controls.ITab {
			Section: tab_details_Sections;
		}
		interface tab_service extends DevKit.Controls.ITab {
			Section: tab_service_Sections;
		}
		interface Tabs {
			bookableResourceBooking: tab_bookableResourceBooking;
			details: tab_details;
			service: tab_service;
		}
		interface Body {
			Tab: Tabs;
			/** Type a category to identify the service activity type, such as routine maintenance or service call, to tie the service activity to a business group or function. */
			Category: DevKit.Controls.String;
			/** Enter the accounts and contacts for whom the service activity is being performed. */
			Customers: DevKit.Controls.Lookup;
			/** Select whether the service activity is an all-day event to make sure the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Controls.Boolean;
			/** Type the location where the service activity will take place, such as a conference room, customer office, or other venue. */
			Location: DevKit.Controls.String;
			/** OrganizationalUnit ServiceAppointment Id */
			msdyn_OrganizationalUnitId: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Unique identifier of the object with which the service activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the user, facility, or equipment required to complete the service activity. */
			Resources: DevKit.Controls.Lookup;
			/** Shows the expected duration of the service activity, in minutes. */
			ScheduledDurationMinutes: DevKit.Controls.Integer;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Enter the expected due date and time. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Choose the service scheduled to be performed during the service activity. */
			ServiceId: DevKit.Controls.Lookup;
			/** Choose the site or location where the service activity will be performed. */
			SiteId: DevKit.Controls.Lookup;
			/** Select the service activity's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Type a subcategory to identify the service activity type and relate the activity to a specific product, service region, business group, or other function. */
			Subcategory: DevKit.Controls.String;
			/** Type a short description about the objective or primary topic of the service activity. */
			Subject: DevKit.Controls.String;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Shows whether the service activity is open, completed, or canceled. Completed and canceled service activities are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface Grid {
			bookableresourcebookings: DevKit.Controls.Grid;
		}
	}
	class FormServiceAppointment_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form ServiceAppointment_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ServiceAppointment_Information */
		Body: DevKit.FormServiceAppointment_Information.Body;
		/** The Footer section of form ServiceAppointment_Information */
		Footer: DevKit.FormServiceAppointment_Information.Footer;
		/** The Grid of form ServiceAppointment_Information */
		Grid: DevKit.FormServiceAppointment_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace ServiceAppointment {
		enum Community {
			/** 5 */
			Cortana,
			/** 6 */
			Direct_Line,
			/** 8 */
			Direct_Line_Speech,
			/** 9 */
			Email,
			/** 1 */
			Facebook,
			/** 10 */
			GroupMe,
			/** 11 */
			Kik,
			/** 3 */
			Line,
			/** 7 */
			Microsoft_Teams,
			/** 0 */
			Other,
			/** 13 */
			Skype,
			/** 14 */
			Slack,
			/** 12 */
			Telegram,
			/** 2 */
			Twitter,
			/** 4 */
			Wechat,
			/** 15 */
			WhatsApp
		}
		enum DeliveryPriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception,
			/** 2 */
			Recurring_Instance,
			/** 1 */
			Recurring_Master
		}
		enum PriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum StateCode {
			/** 2 */
			Canceled,
			/** 1 */
			Closed,
			/** 0 */
			Open,
			/** 3 */
			Scheduled
		}
		enum StatusCode {
			/** 7 */
			Arrived,
			/** 9 */
			Canceled,
			/** 8 */
			Completed,
			/** 6 */
			In_Progress,
			/** 10 */
			No_Show,
			/** 3 */
			Pending,
			/** 1 */
			Requested,
			/** 4 */
			Reserved,
			/** 2 */
			Tentative
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
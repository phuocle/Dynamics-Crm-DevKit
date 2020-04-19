//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
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
		Body: LuckyStar.FormCalendar_Information.Body;
	}
	class CalendarApi {
		/**
		* DynamicsCrm.DevKit CalendarApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the business unit with which the calendar is associated. */
		BusinessUnitId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the calendar. */
		CalendarId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who created the calendar. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the calendar was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the calendar. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Calendar used by the scheduling system to define when an appointment or activity is to occur. */
		Description: DevKit.WebApi.StringValue;
		/** Holiday Schedule CalendarId */
		HolidayScheduleCalendarId: DevKit.WebApi.LookupValue;
		/** Calendar is shared by other calendars, such as the organization calendar. */
		IsShared: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who last modified the calendar. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the calendar was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the calendar. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the calendar. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization with which the calendar is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the primary user of this calendar. */
		PrimaryUserId: DevKit.WebApi.GuidValue;
		/** Calendar type, such as User work hour calendar, or Customer service hour calendar. */
		Type: DevKit.WebApi.OptionSetValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'JsForm':['Calendar Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
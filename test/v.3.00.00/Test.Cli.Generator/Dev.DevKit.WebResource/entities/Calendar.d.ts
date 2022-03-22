//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCalendar_Information {
		interface tab_general_Sections {
			Holidays_List: DevKit.Controls.Section;
			section_1: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Calendar used by the scheduling system to define when an appointment or activity is to occur. */
			Description: DevKit.Controls.String;
			/** Name of the calendar. */
			Name: DevKit.Controls.String;
			holidayListcontrol_id: DevKit.Controls.ActionCards;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormCalendar_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Calendar_Information */
		Body: DevKit.FormCalendar_Information.Body;
		/** The Process of form Calendar_Information */
		Process: DevKit.FormCalendar_Information.Process;
		/** The SidePanes of form Calendar_Information */
		SidePanes: DevKit.SidePanes;
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the business unit with which the calendar is associated. */
		BusinessUnitId: string;
		/** Unique identifier of the calendar. */
		CalendarId: string;
		/** Unique identifier of the user who created the calendar. */
		readonly CreatedBy: string;
		/** Date and time when the calendar was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the calendar. */
		readonly CreatedOnBehalfBy: string;
		/** Calendar used by the scheduling system to define when an appointment or activity is to occur. */
		Description: string;
		/** Holiday Schedule CalendarId */
		HolidayScheduleCalendarId: string;
		/** Calendar is shared by other calendars, such as the organization calendar. */
		IsShared: boolean;
		/** Unique identifier of the user who last modified the calendar. */
		readonly ModifiedBy: string;
		/** Date and time when the calendar was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the calendar. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the calendar. */
		Name: string;
		/** Unique identifier of the organization with which the calendar is associated. */
		readonly OrganizationId: string;
		/** Unique identifier of the primary user of this calendar. */
		PrimaryUserId: string;
		/** Calendar type, such as User work hour calendar, or Customer service hour calendar. */
		Type: OptionSet.Calendar.Type;
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace Calendar {
		enum Type {
			/** 1 */
			Customer_Service,
			/** 0 */
			Default,
			/** 2 */
			Holiday_Schedule
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
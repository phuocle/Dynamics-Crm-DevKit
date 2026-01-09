//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCalendar_Information {
		interface tab_general_Sections {
			/** Holidays */
			Holidays_List: DevKit.Controls.Section;
			/** Section 1 */
			section_1: DevKit.Controls.Section;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			/** General */
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Calendar used by the scheduling system to define when an appointment or activity is to occur. */
			Description: DevKit.Controls.String;
			holidayListcontrol_id: DevKit.Controls.ActionCards;
			/** Name of the calendar. */
			Name: DevKit.Controls.String;
		}
	}
	export class FormCalendar_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Calendar_Information */
		Body: DevKit.FormCalendar_Information.Body;
	}
	export class CalendarApi {
		/**
		* DynamicsCrm.DevKit CalendarApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the business unit with which the calendar is associated. */
		BusinessUnitId: string | null;
		/** Unique identifier of the calendar. */
		CalendarId: string | null;
		/** Unique identifier of the user who created the calendar. */
		readonly CreatedBy: string | null;
		/** Date and time when the calendar was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the calendar. */
		readonly CreatedOnBehalfBy: string | null;
		/** Calendar used by the scheduling system to define when an appointment or activity is to occur. */
		Description: string | null;
		/** Holiday Schedule CalendarId */
		HolidayScheduleCalendarId: string | null;
		/** Calendar is shared by other calendars, such as the organization calendar. */
		IsShared: boolean | null;
		/** Unique identifier of the user who last modified the calendar. */
		readonly ModifiedBy: string | null;
		/** Date and time when the calendar was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the calendar. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the calendar. */
		Name: string | null;
		/** Unique identifier of the organization with which the calendar is associated. */
		readonly OrganizationId: string | null;
		/** Unique identifier of the primary user of this calendar. */
		PrimaryUserId: string | null;
		/** Calendar type, such as User work hour calendar, or Customer service hour calendar. */
		Type: OptionSet.Calendar.Type | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the business unit with which the calendar is associated. */
			readonly BusinessUnitId: string;
			/** Unique identifier of the calendar. */
			readonly CalendarId: string;
			/** Unique identifier of the user who created the calendar. */
			readonly CreatedBy: string;
			/** Date and time when the calendar was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the calendar. */
			readonly CreatedOnBehalfBy: string;
			/** Calendar used by the scheduling system to define when an appointment or activity is to occur. */
			readonly Description: string;
			/** Holiday Schedule CalendarId */
			readonly HolidayScheduleCalendarId: string;
			/** Calendar is shared by other calendars, such as the organization calendar. */
			readonly IsShared: string;
			/** Unique identifier of the user who last modified the calendar. */
			readonly ModifiedBy: string;
			/** Date and time when the calendar was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the calendar. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the calendar. */
			readonly Name: string;
			/** Unique identifier of the organization with which the calendar is associated. */
			readonly OrganizationId: string;
			/** Unique identifier of the primary user of this calendar. */
			readonly PrimaryUserId: string;
			/** Calendar type, such as User work hour calendar, or Customer service hour calendar. */
			readonly Type: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Calendar {
		enum Type {
			/** Customer_Service = 1*/
			Customer_Service = 1,
			/** Default = 0*/
			Default = 0,
			/** Holiday_Schedule = 2*/
			Holiday_Schedule = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
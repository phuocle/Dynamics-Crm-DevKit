//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCalendarRule_Information {
		interface tab_general_Sections {
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
			/** Defines free/busy times for a service and for resources or resource groups, such as working, non-working, vacation, and blocked. */
			Description: DevKit.Controls.String;
			/** Name of the calendar rule. */
			Name: DevKit.Controls.String;
		}
	}
	export class FormCalendarRule_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form CalendarRule_Information */
		Body: DevKit.FormCalendarRule_Information.Body;
	}
	export class CalendarRuleApi {
		/**
		* DynamicsCrm.DevKit CalendarRuleApi
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
		/** Unique identifier of the business unit with which the calendar rule is associated. */
		readonly BusinessUnitId: string | null;
		/** Unique identifier of the calendar with which the calendar rule is associated. */
		CalendarId: string | null;
		/** Unique identifier of the calendar rule. */
		CalendarRuleId: string | null;
		/** Unique identifier of the user who created the calendar rule. */
		readonly CreatedBy: string | null;
		/** Date and time when the calendar rule was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the calendarrule. */
		readonly CreatedOnBehalfBy: string | null;
		/** Defines free/busy times for a service and for resources or resource groups, such as working, non-working, vacation, and blocked. */
		Description: string | null;
		/** Duration of the calendar rule in minutes. */
		Duration: number | null;
		/** Effective interval end of the calendar rule. */
		EffectiveIntervalEnd_UtcDateOnly: Date | null;
		/** Effective interval start of the calendar rule. */
		EffectiveIntervalStart_UtcDateOnly: Date | null;
		/** Effort available for a resource during the time described by the calendar rule. */
		Effort: number | null;
		/** For internal use only. */
		EndTime_UtcDateAndTime: Date | null;
		/** Extent of the calendar rule. */
		ExtentCode: number | null;
		/** Unique identifier of the group. */
		GroupDesignator: string | null;
		/** Unique identifier of the inner calendar for non-leaf calendar rules. */
		InnerCalendarId: string | null;
		/** For internal use only. */
		IsModified: boolean | null;
		/** Flag used in vary-by-day calendar rules. */
		IsSelected: boolean | null;
		/** Flag used in vary-by-day calendar rules. */
		IsSimple: boolean | null;
		/** Flag used in leaf nonrecurring rules. */
		IsVaried: boolean | null;
		/** Unique identifier of the user who last modified the calendar rule. */
		readonly ModifiedBy: string | null;
		/** Date and time when the calendar rule was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the calendarrule. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the calendar rule. */
		Name: string | null;
		/** Start offset for leaf nonrecurring rules. */
		Offset: number | null;
		/** Unique identifier of the organization with which the calendar rule is associated. */
		readonly OrganizationId: string | null;
		/** Pattern of the rule recurrence. */
		Pattern: string | null;
		/** Rank of the calendar rule. */
		Rank: number | null;
		/** Start time for the rule. */
		StartTime_UtcDateAndTime: Date | null;
		/** Sub-type of calendar rule. */
		SubCode: number | null;
		/** Type of calendar rule such as working hours, break, holiday, or time off. */
		TimeCode: number | null;
		/** Local time zone for the calendar rule. */
		TimeZoneCode: number | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the business unit with which the calendar rule is associated. */
			readonly BusinessUnitId: string;
			/** Unique identifier of the calendar with which the calendar rule is associated. */
			readonly CalendarId: string;
			/** Unique identifier of the calendar rule. */
			readonly CalendarRuleId: string;
			/** Unique identifier of the user who created the calendar rule. */
			readonly CreatedBy: string;
			/** Date and time when the calendar rule was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the calendarrule. */
			readonly CreatedOnBehalfBy: string;
			/** Defines free/busy times for a service and for resources or resource groups, such as working, non-working, vacation, and blocked. */
			readonly Description: string;
			/** Duration of the calendar rule in minutes. */
			readonly Duration: string;
			/** Effective interval end of the calendar rule. */
			readonly EffectiveIntervalEnd_UtcDateOnly: string;
			/** Effective interval start of the calendar rule. */
			readonly EffectiveIntervalStart_UtcDateOnly: string;
			/** Effort available for a resource during the time described by the calendar rule. */
			readonly Effort: string;
			/** For internal use only. */
			readonly EndTime_UtcDateAndTime: string;
			/** Extent of the calendar rule. */
			readonly ExtentCode: string;
			/** Unique identifier of the group. */
			readonly GroupDesignator: string;
			/** Unique identifier of the inner calendar for non-leaf calendar rules. */
			readonly InnerCalendarId: string;
			/** For internal use only. */
			readonly IsModified: string;
			/** Flag used in vary-by-day calendar rules. */
			readonly IsSelected: string;
			/** Flag used in vary-by-day calendar rules. */
			readonly IsSimple: string;
			/** Flag used in leaf nonrecurring rules. */
			readonly IsVaried: string;
			/** Unique identifier of the user who last modified the calendar rule. */
			readonly ModifiedBy: string;
			/** Date and time when the calendar rule was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the calendarrule. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the calendar rule. */
			readonly Name: string;
			/** Start offset for leaf nonrecurring rules. */
			readonly Offset: string;
			/** Unique identifier of the organization with which the calendar rule is associated. */
			readonly OrganizationId: string;
			/** Pattern of the rule recurrence. */
			readonly Pattern: string;
			/** Rank of the calendar rule. */
			readonly Rank: string;
			/** Start time for the rule. */
			readonly StartTime_UtcDateAndTime: string;
			/** Sub-type of calendar rule. */
			readonly SubCode: string;
			/** Type of calendar rule such as working hours, break, holiday, or time off. */
			readonly TimeCode: string;
			/** Local time zone for the calendar rule. */
			readonly TimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace CalendarRule {
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
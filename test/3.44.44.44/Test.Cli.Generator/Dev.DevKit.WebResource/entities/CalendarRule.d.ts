//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCalendarRule_Information {
		interface tab_general_Sections {
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
			/** Defines free/busy times for a service and for resources or resource groups, such as working, non-working, vacation, and blocked. */
			Description: DevKit.Controls.String;
			/** Name of the calendar rule. */
			Name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormCalendarRule_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form CalendarRule_Information */
		Body: DevKit.FormCalendarRule_Information.Body;
		/** The Navigation of form CalendarRule_Information */
		Navigation: DevKit.FormCalendarRule_Information.Navigation;
		/** The SidePanes of form CalendarRule_Information */
		SidePanes: DevKit.SidePanes;
	}
	class CalendarRuleApi {
		/**
		* DynamicsCrm.DevKit CalendarRuleApi
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
		/** Unique identifier of the business unit with which the calendar rule is associated. */
		readonly BusinessUnitId: string;
		/** Unique identifier of the calendar with which the calendar rule is associated. */
		CalendarId: string;
		/** Unique identifier of the calendar rule. */
		CalendarRuleId: string;
		/** Unique identifier of the user who created the calendar rule. */
		readonly CreatedBy: string;
		/** Date and time when the calendar rule was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the calendarrule. */
		readonly CreatedOnBehalfBy: string;
		/** Defines free/busy times for a service and for resources or resource groups, such as working, non-working, vacation, and blocked. */
		Description: string;
		/** Duration of the calendar rule in minutes. */
		Duration: number;
		/** Effective interval end of the calendar rule. */
		EffectiveIntervalEnd_UtcDateOnly: Date;
		/** Effective interval start of the calendar rule. */
		EffectiveIntervalStart_UtcDateOnly: Date;
		/** Effort available for a resource during the time described by the calendar rule. */
		Effort: number;
		/** For internal use only. */
		EndTime_UtcDateAndTime: Date;
		/** Extent of the calendar rule. */
		ExtentCode: number;
		/** Unique identifier of the group. */
		GroupDesignator: string;
		/** Unique identifier of the inner calendar for non-leaf calendar rules. */
		InnerCalendarId: string;
		/** For internal use only. */
		IsModified: boolean;
		/** Flag used in vary-by-day calendar rules. */
		IsSelected: boolean;
		/** Flag used in vary-by-day calendar rules. */
		IsSimple: boolean;
		/** Flag used in leaf nonrecurring rules. */
		IsVaried: boolean;
		/** Unique identifier of the user who last modified the calendar rule. */
		readonly ModifiedBy: string;
		/** Date and time when the calendar rule was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the calendarrule. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the calendar rule. */
		Name: string;
		/** Start offset for leaf nonrecurring rules. */
		Offset: number;
		/** Unique identifier of the organization with which the calendar rule is associated. */
		readonly OrganizationId: string;
		/** Pattern of the rule recurrence. */
		Pattern: string;
		/** Rank of the calendar rule. */
		Rank: number;
		/** Unique identifier of the service with which the calendar rule is associated. */
		ServiceId: string;
		/** Start time for the rule. */
		StartTime_UtcDateAndTime: Date;
		/** Sub-type of calendar rule. */
		SubCode: number;
		/** Type of calendar rule such as working hours, break, holiday, or time off. */
		TimeCode: number;
		/** Local time zone for the calendar rule. */
		TimeZoneCode: number;
		readonly VersionNumber: number;
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
			/** Unique identifier of the service with which the calendar rule is associated. */
			readonly ServiceId: string;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
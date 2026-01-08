//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class RecurrenceRuleApi {
		/**
		* DynamicsCrm.DevKit RecurrenceRuleApi
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
		/** Unique identifier of the user who created the recurrence rule. */
		readonly CreatedBy: string | null;
		/** Date and time when the recurrence rule was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the recurrence rule. */
		readonly CreatedOnBehalfBy: string | null;
		/** The day of the month on which the recurring appointment or task occurs. */
		DayOfMonth: number | null;
		/** Bitmask representing the days of the week on which the recurring appointment or task occurs. */
		DaysOfWeekMask: number | null;
		/** Duration of the recurrence pattern in minutes. */
		Duration: number | null;
		/** The actual end date for expansion of the recurrence pattern. */
		EffectiveEndDate_UtcDateAndTime: Date | null;
		/** The actual start date for expansion of the recurrence pattern. */
		EffectiveStartDate_UtcDateOnly: Date | null;
		/** End time of the associated activity. */
		EndTime_UtcDateAndTime: Date | null;
		/** First day Of week for the recurrence pattern. */
		FirstDayOfWeek: number | null;
		/** Specifies the count for which the recurrence pattern is valid for a given interval. */
		Instance: OptionSet.RecurrenceRule.Instance | null;
		/** Number of units of a given recurrence type between occurrences. */
		Interval: number | null;
		/** Specifies whether the monthly recurrence pattern is Nth monthly, valid only for monthly recurrence. */
		IsNthMonthly: boolean | null;
		/** Specifies whether the yearly recurrence pattern is Nth yearly, valid only for yearly recurrence. */
		IsNthYearly: boolean | null;
		/** Valid only for task type recurrence,indicates whether task should be regenerated. */
		IsRegenerate: boolean | null;
		/** Specifies whether the weekly recurrence pattern is actually a daily every weekday pattern, valid only for weekly recurrence. */
		IsWeekDayPattern: boolean | null;
		/** Unique identifier of the user who last modified the recurrence rule. */
		readonly ModifiedBy: string | null;
		/** Date and time when the recurrence rule was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the recurrence rule. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Specifies the month of the year valid for the recurrence pattern. */
		MonthOfYear: OptionSet.RecurrenceRule.MonthOfYear | null;
		/** Unique identifier of the object with which the recurrence rule is associated. */
		ObjectId: string | null;
		/** Number of occurrences of the recurrence pattern. */
		Occurrences: number | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the recurrence rule. */
		readonly OwningBusinessUnit: string | null;
		readonly OwningTeam: string | null;
		readonly OwningUser: string | null;
		/** End date of the Recurrence Range. */
		PatternEndDate_UtcDateAndTime: Date | null;
		/** Pattern End Type of a recurring series. */
		PatternEndType: OptionSet.RecurrenceRule.PatternEndType | null;
		/** Start date of the Recurrence Range. */
		PatternStartDate_UtcDateAndTime: Date | null;
		/** Type of Recurrence. */
		RecurrencePatternType: OptionSet.RecurrenceRule.RecurrencePatternType | null;
		/** Unique identifier of the entity associated with recurrence rule. */
		RuleId: string | null;
		/** Start time of the recurring activity. */
		StartTime_UtcDateAndTime: Date | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the user who created the recurrence rule. */
			readonly CreatedBy: string;
			/** Date and time when the recurrence rule was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the recurrence rule. */
			readonly CreatedOnBehalfBy: string;
			/** The day of the month on which the recurring appointment or task occurs. */
			readonly DayOfMonth: string;
			/** Bitmask representing the days of the week on which the recurring appointment or task occurs. */
			readonly DaysOfWeekMask: string;
			/** Duration of the recurrence pattern in minutes. */
			readonly Duration: string;
			/** The actual end date for expansion of the recurrence pattern. */
			readonly EffectiveEndDate_UtcDateAndTime: string;
			/** The actual start date for expansion of the recurrence pattern. */
			readonly EffectiveStartDate_UtcDateOnly: string;
			/** End time of the associated activity. */
			readonly EndTime_UtcDateAndTime: string;
			/** First day Of week for the recurrence pattern. */
			readonly FirstDayOfWeek: string;
			/** Specifies the count for which the recurrence pattern is valid for a given interval. */
			readonly Instance: string;
			/** Number of units of a given recurrence type between occurrences. */
			readonly Interval: string;
			/** Specifies whether the monthly recurrence pattern is Nth monthly, valid only for monthly recurrence. */
			readonly IsNthMonthly: string;
			/** Specifies whether the yearly recurrence pattern is Nth yearly, valid only for yearly recurrence. */
			readonly IsNthYearly: string;
			/** Valid only for task type recurrence,indicates whether task should be regenerated. */
			readonly IsRegenerate: string;
			/** Specifies whether the weekly recurrence pattern is actually a daily every weekday pattern, valid only for weekly recurrence. */
			readonly IsWeekDayPattern: string;
			/** Unique identifier of the user who last modified the recurrence rule. */
			readonly ModifiedBy: string;
			/** Date and time when the recurrence rule was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the recurrence rule. */
			readonly ModifiedOnBehalfBy: string;
			/** Specifies the month of the year valid for the recurrence pattern. */
			readonly MonthOfYear: string;
			/** Unique identifier of the object with which the recurrence rule is associated. */
			readonly ObjectId: string;
			/** Number of occurrences of the recurrence pattern. */
			readonly Occurrences: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the recurrence rule. */
			readonly OwningBusinessUnit: string;
			readonly OwningTeam: string;
			readonly OwningUser: string;
			/** End date of the Recurrence Range. */
			readonly PatternEndDate_UtcDateAndTime: string;
			/** Pattern End Type of a recurring series. */
			readonly PatternEndType: string;
			/** Start date of the Recurrence Range. */
			readonly PatternStartDate_UtcDateAndTime: string;
			/** Type of Recurrence. */
			readonly RecurrencePatternType: string;
			/** Unique identifier of the entity associated with recurrence rule. */
			readonly RuleId: string;
			/** Start time of the recurring activity. */
			readonly StartTime_UtcDateAndTime: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RecurrenceRule {
		enum Instance {
			/** First = 1*/
			First = 1,
			/** Fourth = 4*/
			Fourth = 4,
			/** Last = 5*/
			Last = 5,
			/** Second = 2*/
			Second = 2,
			/** Third = 3*/
			Third = 3
		}
		enum MonthOfYear {
			/** April = 4*/
			April = 4,
			/** August = 8*/
			August = 8,
			/** December = 12*/
			December = 12,
			/** February = 2*/
			February = 2,
			/** Invalid_Month_Of_Year = 0*/
			Invalid_Month_Of_Year = 0,
			/** January = 1*/
			January = 1,
			/** July = 7*/
			July = 7,
			/** June = 6*/
			June = 6,
			/** March = 3*/
			March = 3,
			/** May = 5*/
			May = 5,
			/** November = 11*/
			November = 11,
			/** October = 10*/
			October = 10,
			/** September = 9*/
			September = 9
		}
		enum ObjectTypeCode {
		}
		enum PatternEndType {
			/** No_End_Date = 1*/
			No_End_Date = 1,
			/** Occurrences = 2*/
			Occurrences = 2,
			/** Pattern_End_Date = 3*/
			Pattern_End_Date = 3
		}
		enum RecurrencePatternType {
			/** Daily = 0*/
			Daily = 0,
			/** Monthly = 2*/
			Monthly = 2,
			/** Weekly = 1*/
			Weekly = 1,
			/** Yearly = 3*/
			Yearly = 3
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
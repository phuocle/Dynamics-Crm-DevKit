//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class RecurrenceRuleApi {
		/**
		* DynamicsCrm.DevKit RecurrenceRuleApi
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
		/** Unique identifier of the user who created the recurrence rule. */
		readonly CreatedBy: string;
		/** Date and time when the recurrence rule was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the recurrence rule. */
		readonly CreatedOnBehalfBy: string;
		/** The day of the month on which the recurring appointment or task occurs. */
		DayOfMonth: number;
		/** Bitmask representing the days of the week on which the recurring appointment or task occurs. */
		DaysOfWeekMask: number;
		/** Duration of the recurrence pattern in minutes. */
		Duration: number;
		/** The actual end date for expansion of the recurrence pattern. */
		EffectiveEndDate_UtcDateAndTime: Date;
		/** The actual start date for expansion of the recurrence pattern. */
		EffectiveStartDate_UtcDateOnly: Date;
		/** End time of the associated activity. */
		EndTime_UtcDateAndTime: Date;
		/** First day Of week for the recurrence pattern. */
		FirstDayOfWeek: number;
		/** Specifies the count for which the recurrence pattern is valid for a given interval. */
		Instance: OptionSet.RecurrenceRule.Instance;
		/** Number of units of a given recurrence type between occurrences. */
		Interval: number;
		/** Specifies whether the monthly recurrence pattern is Nth monthly, valid only for monthly recurrence. */
		IsNthMonthly: boolean;
		/** Specifies whether the yearly recurrence pattern is Nth yearly, valid only for yearly recurrence. */
		IsNthYearly: boolean;
		/** Valid only for task type recurrence,indicates whether task should be regenerated. */
		IsRegenerate: boolean;
		/** Specifies whether the weekly recurrence pattern is actually a daily every weekday pattern, valid only for weekly recurrence. */
		IsWeekDayPattern: boolean;
		/** Unique identifier of the user who last modified the recurrence rule. */
		readonly ModifiedBy: string;
		/** Date and time when the recurrence rule was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the recurrence rule. */
		readonly ModifiedOnBehalfBy: string;
		/** Specifies the month of the year valid for the recurrence pattern. */
		MonthOfYear: OptionSet.RecurrenceRule.MonthOfYear;
		/** Unique identifier of the object with which the recurrence rule is associated. */
		ObjectId: string;
		/** Number of occurrences of the recurrence pattern. */
		Occurrences: number;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the recurrence rule. */
		readonly OwningBusinessUnit: string;
		readonly OwningTeam: string;
		readonly OwningUser: string;
		/** End date of the Recurrence Range. */
		PatternEndDate_UtcDateAndTime: Date;
		/** Pattern End Type of a recurring series. */
		PatternEndType: OptionSet.RecurrenceRule.PatternEndType;
		/** Start date of the Recurrence Range. */
		PatternStartDate_UtcDateAndTime: Date;
		/** Type of Recurrence. */
		RecurrencePatternType: OptionSet.RecurrenceRule.RecurrencePatternType;
		/** Unique identifier of the entity associated with recurrence rule. */
		RuleId: string;
		/** Start time of the recurring activity. */
		StartTime_UtcDateAndTime: Date;
		readonly VersionNumber: number;
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
			/** 1 */
			First,
			/** 4 */
			Fourth,
			/** 5 */
			Last,
			/** 2 */
			Second,
			/** 3 */
			Third
		}
		enum MonthOfYear {
			/** 4 */
			April,
			/** 8 */
			August,
			/** 12 */
			December,
			/** 2 */
			February,
			/** 0 */
			Invalid_Month_Of_Year,
			/** 1 */
			January,
			/** 7 */
			July,
			/** 6 */
			June,
			/** 3 */
			March,
			/** 5 */
			May,
			/** 11 */
			November,
			/** 10 */
			October,
			/** 9 */
			September
		}
		enum ObjectTypeCode {
		}
		enum PatternEndType {
			/** 1 */
			No_End_Date,
			/** 2 */
			Occurrences,
			/** 3 */
			Pattern_End_Date
		}
		enum RecurrencePatternType {
			/** 0 */
			Daily,
			/** 2 */
			Monthly,
			/** 1 */
			Weekly,
			/** 3 */
			Yearly
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
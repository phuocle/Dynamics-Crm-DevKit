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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the recurrence rule. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the recurrence rule was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the recurrence rule. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The day of the month on which the recurring appointment or task occurs. */
		DayOfMonth: DevKit.WebApi.IntegerValue;
		/** Bitmask representing the days of the week on which the recurring appointment or task occurs. */
		DaysOfWeekMask: DevKit.WebApi.IntegerValue;
		/** Duration of the recurrence pattern in minutes. */
		Duration: DevKit.WebApi.IntegerValue;
		/** The actual end date for expansion of the recurrence pattern. */
		EffectiveEndDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** The actual start date for expansion of the recurrence pattern. */
		EffectiveStartDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** End time of the associated activity. */
		EndTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** First day Of week for the recurrence pattern. */
		FirstDayOfWeek: DevKit.WebApi.IntegerValue;
		/** Specifies the count for which the recurrence pattern is valid for a given interval. */
		Instance: DevKit.WebApi.OptionSetValue;
		/** Number of units of a given recurrence type between occurrences. */
		Interval: DevKit.WebApi.IntegerValue;
		/** Specifies whether the monthly recurrence pattern is Nth monthly, valid only for monthly recurrence. */
		IsNthMonthly: DevKit.WebApi.BooleanValue;
		/** Specifies whether the yearly recurrence pattern is Nth yearly, valid only for yearly recurrence. */
		IsNthYearly: DevKit.WebApi.BooleanValue;
		/** Valid only for task type recurrence,indicates whether task should be regenerated. */
		IsRegenerate: DevKit.WebApi.BooleanValue;
		/** Specifies whether the weekly recurrence pattern is actually a daily every weekday pattern, valid only for weekly recurrence. */
		IsWeekDayPattern: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who last modified the recurrence rule. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the recurrence rule was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the recurrence rule. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Specifies the month of the year valid for the recurrence pattern. */
		MonthOfYear: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the object with which the recurrence rule is associated. */
		ObjectId: DevKit.WebApi.LookupValue;
		/** Number of occurrences of the recurrence pattern. */
		Occurrences: DevKit.WebApi.IntegerValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the recurrence rule. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** End date of the Recurrence Range. */
		PatternEndDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Pattern End Type of a recurring series. */
		PatternEndType: DevKit.WebApi.OptionSetValue;
		/** Start date of the Recurrence Range. */
		PatternStartDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Type of Recurrence. */
		RecurrencePatternType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the entity associated with recurrence rule. */
		RuleId: DevKit.WebApi.GuidValue;
		/** Start time of the recurring activity. */
		StartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00'}
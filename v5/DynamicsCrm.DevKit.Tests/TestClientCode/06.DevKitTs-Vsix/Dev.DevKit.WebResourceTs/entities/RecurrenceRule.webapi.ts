/**
 * RecurrenceRule.webapi.ts - RecurrenceRule WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for RecurrenceRule
 * All fields return string representation of their values
 */
export interface IRecurrenceRuleFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DayOfMonth: string;
	readonly DaysOfWeekMask: string;
	readonly Duration: string;
	readonly EffectiveEndDate_UtcDateAndTime: string;
	readonly EffectiveStartDate_UtcDateOnly: string;
	readonly EndTime_UtcDateAndTime: string;
	readonly FirstDayOfWeek: string;
	readonly Instance: string;
	readonly Interval: string;
	readonly IsNthMonthly: string;
	readonly IsNthYearly: string;
	readonly IsRegenerate: string;
	readonly IsWeekDayPattern: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly MonthOfYear: string;
	readonly ObjectId: string;
	readonly Occurrences: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly PatternEndDate_UtcDateAndTime: string;
	readonly PatternEndType: string;
	readonly PatternStartDate_UtcDateAndTime: string;
	readonly RecurrencePatternType: string;
	readonly RuleId: string;
	readonly StartTime_UtcDateAndTime: string;
	readonly VersionNumber: string;
}

/**
 * RecurrenceRule WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRecurrenceRuleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IRecurrenceRuleFormattedValue;
	/** Unique identifier of the user who created the recurrence rule. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the recurrence rule was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the recurrence rule. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
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
	Instance: number | null;
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
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the recurrence rule was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the recurrence rule. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Specifies the month of the year valid for the recurrence pattern. */
	MonthOfYear: number | null;
	/** Unique identifier of the object with which the recurrence rule is associated. */
	ObjectId: DevKit.Guid | null;
	/** Number of occurrences of the recurrence pattern. */
	Occurrences: number | null;
	/** Unique identifier of the user or team who owns the recurrence rule. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the recurrence rule. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Owning Team */
	readonly OwningTeam: DevKit.Guid | null;
	/** Owning User */
	readonly OwningUser: DevKit.Guid | null;
	/** End date of the Recurrence Range. */
	PatternEndDate_UtcDateAndTime: Date | null;
	/** Pattern End Type of a recurring series. */
	PatternEndType: number | null;
	/** Start date of the Recurrence Range. */
	PatternStartDate_UtcDateAndTime: Date | null;
	/** Type of Recurrence. */
	RecurrencePatternType: number | null;
	/** Unique identifier of the entity associated with recurrence rule. */
	RuleId: DevKit.Guid | null;
	/** Start time of the recurring activity. */
	StartTime_UtcDateAndTime: Date | null;
	readonly VersionNumber: number | null;
}

const RecurrenceRuleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DayOfMonth: { logicalName: 'dayofmonth', type: 'Integer' },
	DaysOfWeekMask: { logicalName: 'daysofweekmask', type: 'Integer' },
	Duration: { logicalName: 'duration', type: 'Integer' },
	EffectiveEndDate_UtcDateAndTime: { logicalName: 'effectiveenddate', type: 'DateTime' },
	EffectiveStartDate_UtcDateOnly: { logicalName: 'effectivestartdate', type: 'DateTime' },
	EndTime_UtcDateAndTime: { logicalName: 'endtime', type: 'DateTime' },
	FirstDayOfWeek: { logicalName: 'firstdayofweek', type: 'Integer' },
	Instance: { logicalName: 'instance', type: 'Integer' },
	Interval: { logicalName: 'interval', type: 'Integer' },
	IsNthMonthly: { logicalName: 'isnthmonthly', type: 'Boolean' },
	IsNthYearly: { logicalName: 'isnthyearly', type: 'Boolean' },
	IsRegenerate: { logicalName: 'isregenerate', type: 'Boolean' },
	IsWeekDayPattern: { logicalName: 'isweekdaypattern', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	MonthOfYear: { logicalName: 'monthofyear', type: 'Integer' },
	ObjectId: { schemaName: 'ObjectId', logicalName: '_objectid_value', entityCollectionName: 'activitypointers', entityLogicalName: 'activitypointer' },
	Occurrences: { logicalName: 'occurrences', type: 'Integer' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PatternEndDate_UtcDateAndTime: { logicalName: 'patternenddate', type: 'DateTime' },
	PatternEndType: { logicalName: 'patternendtype', type: 'Integer' },
	PatternStartDate_UtcDateAndTime: { logicalName: 'patternstartdate', type: 'DateTime' },
	RecurrencePatternType: { logicalName: 'recurrencepatterntype', type: 'Integer' },
	RuleId: { logicalName: 'ruleid' },
	StartTime_UtcDateAndTime: { logicalName: 'starttime', type: 'DateTime' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * RecurrenceRule WebApi class for early-bound style coding
 * Usage: const recurrenceRule = new RecurrenceRuleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RecurrenceRuleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRecurrenceRuleApi>(entity, 'recurrencerule', 'recurrencerules', RecurrenceRuleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RecurrenceRuleApi extends IRecurrenceRuleApi { }

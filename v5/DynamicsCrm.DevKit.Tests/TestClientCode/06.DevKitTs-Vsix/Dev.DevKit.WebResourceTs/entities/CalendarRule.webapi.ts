/**
 * CalendarRule.webapi.ts - CalendarRule WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for CalendarRule
 * All fields return string representation of their values
 */
export interface ICalendarRuleFormattedValue {
	readonly BusinessUnitId: string;
	readonly CalendarId: string;
	readonly CalendarRuleId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly Duration: string;
	readonly EffectiveIntervalEnd_UtcDateOnly: string;
	readonly EffectiveIntervalStart_UtcDateOnly: string;
	readonly Effort: string;
	readonly EndTime_UtcDateAndTime: string;
	readonly ExtentCode: string;
	readonly GroupDesignator: string;
	readonly InnerCalendarId: string;
	readonly IsModified: string;
	readonly IsSelected: string;
	readonly IsSimple: string;
	readonly IsVaried: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly Offset: string;
	readonly OrganizationId: string;
	readonly Pattern: string;
	readonly Rank: string;
	readonly StartTime_UtcDateAndTime: string;
	readonly SubCode: string;
	readonly TimeCode: string;
	readonly TimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * CalendarRule WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ICalendarRuleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ICalendarRuleFormattedValue;
	/** Unique identifier of the business unit with which the calendar rule is associated. */
	readonly BusinessUnitId: DevKit.Guid | null;
	/** Unique identifier of the calendar with which the calendar rule is associated. */
	CalendarId: DevKit.Guid | null;
	/** Unique identifier of the calendar rule. */
	CalendarRuleId: DevKit.Guid | null;
	/** Unique identifier of the user who created the calendar rule. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the calendar rule was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the calendarrule. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
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
	InnerCalendarId: DevKit.Guid | null;
	/** For internal use only. */
	IsModified: boolean | null;
	/** Flag used in vary-by-day calendar rules. */
	IsSelected: boolean | null;
	/** Flag used in vary-by-day calendar rules. */
	IsSimple: boolean | null;
	/** Flag used in leaf nonrecurring rules. */
	IsVaried: boolean | null;
	/** Unique identifier of the user who last modified the calendar rule. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the calendar rule was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the calendarrule. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the calendar rule. */
	Name: string | null;
	/** Start offset for leaf nonrecurring rules. */
	Offset: number | null;
	/** Unique identifier of the organization with which the calendar rule is associated. */
	readonly OrganizationId: DevKit.Guid | null;
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
}

const CalendarRuleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	BusinessUnitId: { logicalName: 'businessunitid', readOnly: true },
	CalendarId: { schemaName: 'CalendarId', logicalName: '_calendarid_value', entityCollectionName: 'calendars', entityLogicalName: 'calendar' },
	CalendarRuleId: { logicalName: 'calendarruleid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	Duration: { logicalName: 'duration', type: 'Integer' },
	EffectiveIntervalEnd_UtcDateOnly: { logicalName: 'effectiveintervalend', type: 'DateTime' },
	EffectiveIntervalStart_UtcDateOnly: { logicalName: 'effectiveintervalstart', type: 'DateTime' },
	Effort: { logicalName: 'effort', type: 'Number' },
	EndTime_UtcDateAndTime: { logicalName: 'endtime', type: 'DateTime' },
	ExtentCode: { logicalName: 'extentcode', type: 'Integer' },
	GroupDesignator: { logicalName: 'groupdesignator' },
	InnerCalendarId: { schemaName: 'InnerCalendarId', logicalName: '_innercalendarid_value', entityCollectionName: 'calendars', entityLogicalName: 'calendar' },
	IsModified: { logicalName: 'ismodified', type: 'Boolean' },
	IsSelected: { logicalName: 'isselected', type: 'Boolean' },
	IsSimple: { logicalName: 'issimple', type: 'Boolean' },
	IsVaried: { logicalName: 'isvaried', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	Offset: { logicalName: 'offset', type: 'Integer' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	Pattern: { logicalName: 'pattern' },
	Rank: { logicalName: 'rank', type: 'Integer' },
	StartTime_UtcDateAndTime: { logicalName: 'starttime', type: 'DateTime' },
	SubCode: { logicalName: 'subcode', type: 'Integer' },
	TimeCode: { logicalName: 'timecode', type: 'Integer' },
	TimeZoneCode: { logicalName: 'timezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * CalendarRule WebApi class for early-bound style coding
 * Usage: const calendarRule = new CalendarRuleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class CalendarRuleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ICalendarRuleApi>(entity, 'calendarrule', 'calendarrules', CalendarRuleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface CalendarRuleApi extends ICalendarRuleApi { }

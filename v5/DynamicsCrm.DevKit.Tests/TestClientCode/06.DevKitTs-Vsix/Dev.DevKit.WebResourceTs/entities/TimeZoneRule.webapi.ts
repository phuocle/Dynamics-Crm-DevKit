/**
 * TimeZoneRule.webapi.ts - TimeZoneRule WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * TimeZoneRule WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITimeZoneRuleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ITimeZoneRuleApi, 'FormattedValue'>]: string };
	/** Base time bias of the time zone rule. */
	Bias: number | null;
	/** Unique identifier of the user who created the time zone rule. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the time zone rule was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the timezonerule. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Time bias in addition to the base bias for daylight savings time. */
	DaylightBias: number | null;
	/** Day of the month when daylight savings time starts. */
	DaylightDay: number | null;
	/** Day of the week when daylight savings time starts. */
	DaylightDayOfWeek: number | null;
	/** Hour of the day when daylight savings time starts */
	DaylightHour: number | null;
	/** Minute of the hour when daylight savings time starts. */
	DaylightMinute: number | null;
	/** Month when daylight savings time starts. */
	DaylightMonth: number | null;
	/** Second of the minute when daylight savings time starts */
	DaylightSecond: number | null;
	/** Year when daylight savings times starts. */
	DaylightYear: number | null;
	/** Time that this rule takes effect, in local time. */
	EffectiveDateTime_UtcDateOnly: Date | null;
	/** Unique identifier of the user who last modified the time zone rule. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the time zone rule was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the timezonerule. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the time zone rule. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Time bias in addition to the base bias for standard time. */
	StandardBias: number | null;
	/** Day of the month when standard time starts. */
	StandardDay: number | null;
	/** Day of the week when standard time starts. */
	StandardDayOfWeek: number | null;
	/** Hour of the day when standard time starts. */
	StandardHour: number | null;
	/** Minute of the hour when standard time starts. */
	StandardMinute: number | null;
	/** Month when standard time starts. */
	StandardMonth: number | null;
	/** Second of the Minute when standard time starts. */
	StandardSecond: number | null;
	/** Year when standard time starts. */
	StandardYear: number | null;
	/** Unique identifier of the time zone definition. */
	TimeZoneDefinitionId: DevKit.Guid | null;
	/** Unique identifier of the time zone rule. */
	TimeZoneRuleId: DevKit.Guid | null;
	/** For internal use only */
	TimeZoneRuleVersionNumber: number | null;
	readonly VersionNumber: number | null;
}

const TimeZoneRuleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Bias: { logicalName: 'bias', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DaylightBias: { logicalName: 'daylightbias', type: 'Integer' },
	DaylightDay: { logicalName: 'daylightday', type: 'Integer' },
	DaylightDayOfWeek: { logicalName: 'daylightdayofweek', type: 'Integer' },
	DaylightHour: { logicalName: 'daylighthour', type: 'Integer' },
	DaylightMinute: { logicalName: 'daylightminute', type: 'Integer' },
	DaylightMonth: { logicalName: 'daylightmonth', type: 'Integer' },
	DaylightSecond: { logicalName: 'daylightsecond', type: 'Integer' },
	DaylightYear: { logicalName: 'daylightyear', type: 'Integer' },
	EffectiveDateTime_UtcDateOnly: { logicalName: 'effectivedatetime', type: 'DateTime' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	StandardBias: { logicalName: 'standardbias', type: 'Integer' },
	StandardDay: { logicalName: 'standardday', type: 'Integer' },
	StandardDayOfWeek: { logicalName: 'standarddayofweek', type: 'Integer' },
	StandardHour: { logicalName: 'standardhour', type: 'Integer' },
	StandardMinute: { logicalName: 'standardminute', type: 'Integer' },
	StandardMonth: { logicalName: 'standardmonth', type: 'Integer' },
	StandardSecond: { logicalName: 'standardsecond', type: 'Integer' },
	StandardYear: { logicalName: 'standardyear', type: 'Integer' },
	TimeZoneDefinitionId: { schemaName: 'TimeZoneDefinitionId', logicalName: '_timezonedefinitionid_value', entityCollectionName: 'timezonedefinitions', entityLogicalName: 'timezonedefinition' },
	TimeZoneRuleId: { logicalName: 'timezoneruleid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * TimeZoneRule WebApi class for early-bound style coding
 * Usage: const timeZoneRule = new TimeZoneRuleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TimeZoneRuleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITimeZoneRuleApi>(entity, 'timezonerule', 'timezonerules', TimeZoneRuleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TimeZoneRuleApi extends ITimeZoneRuleApi { }

/**
 * Calendar.webapi.ts - Calendar WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Calendar
 * All fields return string representation of their values
 */
export interface ICalendarFormattedValue {
	readonly BusinessUnitId: string;
	readonly CalendarId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly HolidayScheduleCalendarId: string;
	readonly IsShared: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly PrimaryUserId: string;
	readonly Type: string;
	readonly VersionNumber: string;
}

/**
 * Calendar WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ICalendarApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ICalendarFormattedValue;
	/** Unique identifier of the business unit with which the calendar is associated. */
	BusinessUnitId: DevKit.Guid | null;
	/** Unique identifier of the calendar. */
	CalendarId: DevKit.Guid | null;
	/** Unique identifier of the user who created the calendar. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the calendar was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the calendar. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Calendar used by the scheduling system to define when an appointment or activity is to occur. */
	Description: string | null;
	/** Holiday Schedule CalendarId */
	HolidayScheduleCalendarId: DevKit.Guid | null;
	/** Calendar is shared by other calendars, such as the organization calendar. */
	IsShared: boolean | null;
	/** Unique identifier of the user who last modified the calendar. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the calendar was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the calendar. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the calendar. */
	Name: string | null;
	/** Unique identifier of the organization with which the calendar is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier of the primary user of this calendar. */
	PrimaryUserId: DevKit.Guid | null;
	/** Calendar type, such as User work hour calendar, or Customer service hour calendar. */
	Type: number | null;
	readonly VersionNumber: number | null;
}

const CalendarFieldConfig: DevKit.IWebApiFieldConfigMap = {
	BusinessUnitId: { schemaName: 'BusinessUnitId', logicalName: '_businessunitid_value', entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	CalendarId: { logicalName: 'calendarid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	HolidayScheduleCalendarId: { schemaName: 'HolidayScheduleCalendarId', logicalName: '_holidayschedulecalendarid_value', entityCollectionName: 'calendars', entityLogicalName: 'calendar' },
	IsShared: { logicalName: 'isshared', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	PrimaryUserId: { logicalName: 'primaryuserid' },
	Type: { logicalName: 'type', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Calendar WebApi class for early-bound style coding
 * Usage: const calendar = new CalendarApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class CalendarApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ICalendarApi>(entity, 'calendar', 'calendars', CalendarFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface CalendarApi extends ICalendarApi { }

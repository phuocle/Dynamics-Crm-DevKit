/**
 * holidaywrapper.webapi.ts - holidaywrapper WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * holidaywrapper WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IholidaywrapperApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IholidaywrapperApi, 'FormattedValue'>]: string };
	/** CalendarId */
	CalendarId: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Duration */
	Duration: string | null;
	/** Date and time when the business closure ends. */
	enddatetime: string | null;
	/** End Time */
	EndTime_UtcDateOnly: Date | null;
	/** Unique identifier for entity instances */
	holidaywrapperId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Selected Year */
	SelectedYear: number | null;
	/** Date and time when the business closure starts. */
	startdatetime: string | null;
	/** Start Time */
	StartTime_UtcDateOnly: Date | null;
	/** Start Date field which holds only date */
	startTime_DateOnlyForView_TimezoneDateOnly: Date | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const holidaywrapperFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CalendarId: { logicalName: 'calendarid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Duration: { logicalName: 'duration' },
	enddatetime: { logicalName: 'enddatetime' },
	EndTime_UtcDateOnly: { logicalName: 'endtime', type: 'DateTime' },
	holidaywrapperId: { logicalName: 'holidaywrapperid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	SelectedYear: { logicalName: 'selectedyear', type: 'Integer' },
	startdatetime: { logicalName: 'startdatetime' },
	StartTime_UtcDateOnly: { logicalName: 'starttime', type: 'DateTime' },
	startTime_DateOnlyForView_TimezoneDateOnly: { logicalName: 'starttime_dateonlyforview', type: 'DateTime' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * holidaywrapper WebApi class for early-bound style coding
 * Usage: const holidaywrapper = new holidaywrapperApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class holidaywrapperApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IholidaywrapperApi>(entity, 'holidaywrapper', 'holidaywrappers', holidaywrapperFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface holidaywrapperApi extends IholidaywrapperApi { }

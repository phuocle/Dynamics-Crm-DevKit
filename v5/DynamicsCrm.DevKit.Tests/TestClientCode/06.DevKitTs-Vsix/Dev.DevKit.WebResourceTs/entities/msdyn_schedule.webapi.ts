/**
 * msdyn_schedule.webapi.ts - msdyn_schedule WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_schedule
 * All fields return string representation of their values
 */
export interface Imsdyn_scheduleFormattedValue {
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msdyn_callbackurl: string;
	readonly msdyn_isactive: string;
	readonly msdyn_nextrefreshtime_TimezoneDateAndTime: string;
	readonly msdyn_refentityname: string;
	readonly msdyn_referenceid: string;
	readonly msdyn_refreshpayload: string;
	readonly msdyn_refreshperiod: string;
	readonly msdyn_schedule2: string;
	readonly msdyn_scheduledisabledreason: string;
	readonly msdyn_scheduleId: string;
	readonly msdyn_scheduleidref: string;
	readonly msdyn_schedulerefreshtype: string;
	readonly msdyn_startdatetime_TimezoneDateAndTime: string;
	readonly msdyn_timebasedrefreshperiod: string;
	readonly msdyn_timezoneid: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly SolutionId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingSolutionId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_schedule WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_scheduleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_scheduleFormattedValue;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Callback Url */
	msdyn_callbackurl: string | null;
	/** IsActive option set */
	msdyn_isactive: boolean | null;
	/** Next expected refresh time */
	msdyn_nextrefreshtime_TimezoneDateAndTime: Date | null;
	/** Reference name of consuming entity */
	msdyn_refentityname: string | null;
	/** Reference id of consuming entity */
	msdyn_referenceid: DevKit.Guid | null;
	/** Refresh payload */
	msdyn_refreshpayload: string | null;
	/** Refresh period for interval based */
	msdyn_refreshperiod: string | null;
	/** Schedule */
	msdyn_schedule2: string | null;
	/** Schedule Refresh disabled reason if any */
	msdyn_scheduledisabledreason: string | null;
	/** Unique identifier for entity instances */
	msdyn_scheduleId: DevKit.Guid | null;
	/** (Deprecated) Schedule id reference for dataflows etc. */
	readonly msdyn_scheduleidref: DevKit.Guid | null;
	/** Dataflow schedule refresh type */
	msdyn_schedulerefreshtype: number | null;
	/** Initial start date time */
	msdyn_startdatetime_TimezoneDateAndTime: Date | null;
	/** Refresh period for time based. */
	msdyn_timebasedrefreshperiod: string | null;
	/** Dataflow Time zone id */
	msdyn_timezoneid: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Schedule */
	statecode: number | null;
	/** Reason for the status of the Schedule */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_scheduleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_callbackurl: { logicalName: 'msdyn_callbackurl' },
	msdyn_isactive: { logicalName: 'msdyn_isactive', type: 'Boolean' },
	msdyn_nextrefreshtime_TimezoneDateAndTime: { logicalName: 'msdyn_nextrefreshtime', type: 'DateTime' },
	msdyn_refentityname: { logicalName: 'msdyn_refentityname' },
	msdyn_referenceid: { logicalName: 'msdyn_referenceid' },
	msdyn_refreshpayload: { logicalName: 'msdyn_refreshpayload' },
	msdyn_refreshperiod: { logicalName: 'msdyn_refreshperiod' },
	msdyn_schedule2: { logicalName: 'msdyn_schedule' },
	msdyn_scheduledisabledreason: { logicalName: 'msdyn_scheduledisabledreason' },
	msdyn_scheduleId: { logicalName: 'msdyn_scheduleid' },
	msdyn_scheduleidref: { schemaName: 'msdyn_scheduleidref', logicalName: '_msdyn_scheduleidref_value', readOnly: true, entityCollectionName: 'msdyn_dataflows', entityLogicalName: 'msdyn_dataflow' },
	msdyn_schedulerefreshtype: { logicalName: 'msdyn_schedulerefreshtype', type: 'Integer' },
	msdyn_startdatetime_TimezoneDateAndTime: { logicalName: 'msdyn_startdatetime', type: 'DateTime' },
	msdyn_timebasedrefreshperiod: { logicalName: 'msdyn_timebasedrefreshperiod' },
	msdyn_timezoneid: { logicalName: 'msdyn_timezoneid' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_schedule WebApi class for early-bound style coding
 * Usage: const msdyn_schedule = new msdyn_scheduleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_scheduleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_scheduleApi>(entity, 'msdyn_schedule', 'msdyn_schedules', msdyn_scheduleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_scheduleApi extends Imsdyn_scheduleApi { }

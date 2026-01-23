/**
 * msdyn_dmssyncstatus.webapi.ts - msdyn_dmssyncstatus WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_dmssyncstatus WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_dmssyncstatusApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_dmssyncstatusApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	msdyn_dmssyncstatusId: DevKit.Guid | null;
	/** Sync End Time */
	msdyn_EndTime_TimezoneDateAndTime: Date | null;
	/** Error details json property bag. */
	msdyn_ErrorDetails: string | null;
	/** The DMS sync request */
	msdyn_lookupfield_dmssyncrequest: DevKit.Guid | null;
	/** Sync Start Time */
	msdyn_StartTime_TimezoneDateAndTime: Date | null;
	/** The primary attribute for the DMS Sync Status entity. */
	msdyn_StatusUniqueName: string | null;
	/** Sync details json property bag. */
	msdyn_SyncDetails: string | null;
	/** Sync Status */
	msdyn_SyncStatus: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Status of the DMS Sync Status */
	statecode: number | null;
	/** Reason for the status of the DMS Sync Status */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_dmssyncstatusFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_dmssyncstatusId: { logicalName: 'msdyn_dmssyncstatusid' },
	msdyn_EndTime_TimezoneDateAndTime: { logicalName: 'msdyn_endtime', type: 'DateTime' },
	msdyn_ErrorDetails: { logicalName: 'msdyn_errordetails' },
	msdyn_lookupfield_dmssyncrequest: { schemaName: 'msdyn_lookupfield_dmssyncrequest', logicalName: '_msdyn_lookupfield_dmssyncrequest_value', entityCollectionName: 'msdyn_dmssyncrequests', entityLogicalName: 'msdyn_dmssyncrequest' },
	msdyn_StartTime_TimezoneDateAndTime: { logicalName: 'msdyn_starttime', type: 'DateTime' },
	msdyn_StatusUniqueName: { logicalName: 'msdyn_statusuniquename' },
	msdyn_SyncDetails: { logicalName: 'msdyn_syncdetails' },
	msdyn_SyncStatus: { logicalName: 'msdyn_syncstatus' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_dmssyncstatus WebApi class for early-bound style coding
 * Usage: const msdyn_dmssyncstatus = new msdyn_dmssyncstatusApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_dmssyncstatusApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_dmssyncstatusApi>(entity, 'msdyn_dmssyncstatus', 'msdyn_dmssyncstatuses', msdyn_dmssyncstatusFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_dmssyncstatusApi extends Imsdyn_dmssyncstatusApi { }

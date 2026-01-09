/**
 * msdyn_dmsrequeststatus.webapi.ts - msdyn_dmsrequeststatus WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_dmsrequeststatus WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_dmsrequeststatusApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_dmsrequeststatusApi, 'FormattedValue'>]: string };
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
	/** Power Platform Dataflow Id */
	msdyn_DataflowId: string | null;
	/** Power Platform Dataflow Job Id */
	msdyn_DataflowJobId: string | null;
	/** Unique identifier for entity instances */
	msdyn_dmsrequeststatusId: DevKit.Guid | null;
	/** Upload job errors grouped by entity. */
	msdyn_ErrorDetails: string | null;
	/** JobUniqueName */
	msdyn_JobUniqueName: string | null;
	/** msdyn_lookupfield_uploadrequest */
	msdyn_lookupfield_uploadrequest: DevKit.Guid | null;
	/** Data Movement Service End time */
	msdyn_UploadEndTime_UtcDateAndTime: Date | null;
	/** Data Movement Service Request start time */
	msdyn_UploadStartTime_UtcDateAndTime: Date | null;
	/** Data Movement Service Request Status  */
	msdyn_UploadStatus: string | null;
	/** Entity level upload job status */
	msdyn_UploadStatusDetails: string | null;
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
	/** Status of the msdyn_dmsrequeststatus */
	statecode: number | null;
	/** Reason for the status of the msdyn_dmsrequeststatus */
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

const msdyn_dmsrequeststatusFieldConfig: DevKit.IWebApiFieldConfigMap = {
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
	msdyn_DataflowId: { logicalName: 'msdyn_dataflowid' },
	msdyn_DataflowJobId: { logicalName: 'msdyn_dataflowjobid' },
	msdyn_dmsrequeststatusId: { logicalName: 'msdyn_dmsrequeststatusid' },
	msdyn_ErrorDetails: { logicalName: 'msdyn_errordetails' },
	msdyn_JobUniqueName: { logicalName: 'msdyn_jobuniquename' },
	msdyn_lookupfield_uploadrequest: { schemaName: 'msdyn_lookupfield_uploadrequest', logicalName: '_msdyn_lookupfield_uploadrequest_value', entityCollectionName: 'msdyn_dmsrequests', entityLogicalName: 'msdyn_dmsrequest' },
	msdyn_UploadEndTime_UtcDateAndTime: { logicalName: 'msdyn_uploadendtime', type: 'DateTime' },
	msdyn_UploadStartTime_UtcDateAndTime: { logicalName: 'msdyn_uploadstarttime', type: 'DateTime' },
	msdyn_UploadStatus: { logicalName: 'msdyn_uploadstatus' },
	msdyn_UploadStatusDetails: { logicalName: 'msdyn_uploadstatusdetails' },
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
 * msdyn_dmsrequeststatus WebApi class for early-bound style coding
 * Usage: const msdyn_dmsrequeststatus = new msdyn_dmsrequeststatusApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_dmsrequeststatusApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_dmsrequeststatusApi>(entity, 'msdyn_dmsrequeststatus', 'msdyn_dmsrequeststatuses', msdyn_dmsrequeststatusFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_dmsrequeststatusApi extends Imsdyn_dmsrequeststatusApi { }

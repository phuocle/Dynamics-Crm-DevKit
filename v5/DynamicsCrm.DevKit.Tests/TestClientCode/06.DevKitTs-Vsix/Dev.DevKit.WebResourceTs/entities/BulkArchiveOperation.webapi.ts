/**
 * BulkArchiveOperation.webapi.ts - BulkArchiveOperation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for BulkArchiveOperation
 * All fields return string representation of their values
 */
export interface IBulkArchiveOperationFormattedValue {
	readonly AdditionalDetails: string;
	readonly ArchivedCount: string;
	readonly AsyncOperationId: string;
	readonly BulkArchiveConfigId: string;
	readonly BulkArchiveOperationId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Criteria: string;
	readonly EndTime_UtcDateAndTime: string;
	readonly FailedCount: string;
	readonly ImportSequenceNumber: string;
	readonly LastMarkedVersionNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly PagingCookie: string;
	readonly RootEntityLogicalName: string;
	readonly StartTime_UtcDateAndTime: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * BulkArchiveOperation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IBulkArchiveOperationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IBulkArchiveOperationFormattedValue;
	/** AdditionalDetails */
	AdditionalDetails: string | null;
	/** ArchivedCount */
	ArchivedCount: number | null;
	/** AsyncOperationId */
	AsyncOperationId: string | null;
	/** BulkArchiveConfigId */
	BulkArchiveConfigId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	BulkArchiveOperationId: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Criteria */
	Criteria: string | null;
	/** EndTime */
	EndTime_UtcDateAndTime: Date | null;
	/** Total failed records. */
	FailedCount: number | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** LastMarkedVersionNumber */
	LastMarkedVersionNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	Name: string | null;
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
	/** PagingCookie */
	PagingCookie: string | null;
	/** RootEntityLogicalName */
	RootEntityLogicalName: string | null;
	/** StartTime */
	StartTime_UtcDateAndTime: Date | null;
	/** Status of the bulkarchiveoperation */
	statecode: number | null;
	/** Reason for the status of the bulkarchiveoperation */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const BulkArchiveOperationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AdditionalDetails: { logicalName: 'additionaldetails' },
	ArchivedCount: { logicalName: 'archivedcount', type: 'Integer' },
	AsyncOperationId: { logicalName: 'asyncoperationid' },
	BulkArchiveConfigId: { schemaName: 'BulkArchiveConfigId', logicalName: '_bulkarchiveconfigid_value', entityCollectionName: 'bulkarchiveconfigs', entityLogicalName: 'bulkarchiveconfig' },
	BulkArchiveOperationId: { logicalName: 'bulkarchiveoperationid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Criteria: { logicalName: 'criteria' },
	EndTime_UtcDateAndTime: { logicalName: 'endtime', type: 'DateTime' },
	FailedCount: { logicalName: 'failedcount', type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	LastMarkedVersionNumber: { logicalName: 'lastmarkedversionnumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PagingCookie: { logicalName: 'pagingcookie' },
	RootEntityLogicalName: { logicalName: 'rootentitylogicalname' },
	StartTime_UtcDateAndTime: { logicalName: 'starttime', type: 'DateTime' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * BulkArchiveOperation WebApi class for early-bound style coding
 * Usage: const bulkArchiveOperation = new BulkArchiveOperationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class BulkArchiveOperationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IBulkArchiveOperationApi>(entity, 'bulkarchiveoperation', 'bulkarchiveoperations', BulkArchiveOperationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface BulkArchiveOperationApi extends IBulkArchiveOperationApi { }

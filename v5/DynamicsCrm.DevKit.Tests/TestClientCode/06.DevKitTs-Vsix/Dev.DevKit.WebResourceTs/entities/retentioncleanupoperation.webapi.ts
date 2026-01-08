/**
 * retentioncleanupoperation.webapi.ts - retentioncleanupoperation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for retentioncleanupoperation
 * All fields return string representation of their values
 */
export interface IretentioncleanupoperationFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Criteria: string;
	readonly EndTime_UtcDateAndTime: string;
	readonly EntityLogicalName: string;
	readonly FailedCount: string;
	readonly FromVersion: string;
	readonly ImportSequenceNumber: string;
	readonly Message: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OperationName: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly RecordCount: string;
	readonly retentioncleanupoperationId: string;
	readonly StartTime_UtcDateAndTime: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly ToVersion: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * retentioncleanupoperation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IretentioncleanupoperationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IretentioncleanupoperationFormattedValue;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Criteria */
	Criteria: string | null;
	/** End time of the operation. */
	EndTime_UtcDateAndTime: Date | null;
	/** Table name on which cleanup operation is going on. */
	EntityLogicalName: string | null;
	/** Failed records in cleanup operation. */
	FailedCount: number | null;
	/** Version number from where cleanup should happen. */
	FromVersion: number | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Message. */
	Message: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	Name: string | null;
	/** Operation name. */
	OperationName: number | null;
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
	/** Record count of cleanup operation. */
	RecordCount: number | null;
	/** Unique identifier for entity instances */
	retentioncleanupoperationId: DevKit.Guid | null;
	/** Start time of the operation. */
	StartTime_UtcDateAndTime: Date | null;
	/** Status of the retentioncleanupoperation */
	statecode: number | null;
	/** Reason for the status of the retentioncleanupoperation */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** version number till cleanup should happen. */
	ToVersion: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const retentioncleanupoperationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Criteria: { logicalName: 'criteria' },
	EndTime_UtcDateAndTime: { logicalName: 'endtime', type: 'DateTime' },
	EntityLogicalName: { logicalName: 'entitylogicalname' },
	FailedCount: { logicalName: 'failedcount', type: 'Integer' },
	FromVersion: { logicalName: 'fromversion', type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	Message: { logicalName: 'message' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OperationName: { logicalName: 'operationname', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	RecordCount: { logicalName: 'recordcount', type: 'Integer' },
	retentioncleanupoperationId: { logicalName: 'retentioncleanupoperationid' },
	StartTime_UtcDateAndTime: { logicalName: 'starttime', type: 'DateTime' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	ToVersion: { logicalName: 'toversion', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * retentioncleanupoperation WebApi class for early-bound style coding
 * Usage: const retentioncleanupoperation = new retentioncleanupoperationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class retentioncleanupoperationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IretentioncleanupoperationApi>(entity, 'retentioncleanupoperation', 'retentioncleanupoperations', retentioncleanupoperationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface retentioncleanupoperationApi extends IretentioncleanupoperationApi { }

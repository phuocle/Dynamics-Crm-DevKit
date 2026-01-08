/**
 * retentionoperation.webapi.ts - retentionoperation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * retentionoperation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IretentionoperationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IretentionoperationApi, 'FormattedValue'>]: string };
	/** Addintional details. */
	AdditionalDetails: string | null;
	/** For internal use only. */
	AsyncOperationId: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Fetch XML format criteria used to select records for retention. */
	Criteria: string | null;
	/** Endtime of the retention operation. */
	EndTime_UtcDateAndTime: Date | null;
	/** Total failed records. */
	FailedCount: number | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Last marked version number of the retained records. */
	LastMarkedVersionNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the retention operation. */
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
	/** Pagination criteria to process next page records. */
	PagingCookie: string | null;
	/** Identifier for retention config. */
	RetentionConfigId: DevKit.Guid | null;
	/** Total retained records. */
	RetentionCount: number | null;
	/** Unique identifier for execution instance. */
	retentionoperationId: DevKit.Guid | null;
	/** Table name on which retention was executed. */
	RootEntityLogicalName: string | null;
	/** Start time of the retention operation. */
	StartTime_UtcDateAndTime: Date | null;
	/** Status of the retentionoperation */
	statecode: number | null;
	/** Reason for the status of the retentionoperation */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const retentionoperationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AdditionalDetails: { logicalName: 'additionaldetails' },
	AsyncOperationId: { logicalName: 'asyncoperationid' },
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
	RetentionConfigId: { schemaName: 'RetentionConfigId', logicalName: '_retentionconfigid_value', entityCollectionName: 'retentionconfigs', entityLogicalName: 'retentionconfig' },
	RetentionCount: { logicalName: 'retentioncount', type: 'Integer' },
	retentionoperationId: { logicalName: 'retentionoperationid' },
	RootEntityLogicalName: { logicalName: 'rootentitylogicalname' },
	StartTime_UtcDateAndTime: { logicalName: 'starttime', type: 'DateTime' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * retentionoperation WebApi class for early-bound style coding
 * Usage: const retentionoperation = new retentionoperationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class retentionoperationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IretentionoperationApi>(entity, 'retentionoperation', 'retentionoperations', retentionoperationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface retentionoperationApi extends IretentionoperationApi { }

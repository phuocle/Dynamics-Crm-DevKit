/**
 * unstructuredfilesearchrecordstatus.webapi.ts - unstructuredfilesearchrecordstatus WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for unstructuredfilesearchrecordstatus
 * All fields return string representation of their values
 */
export interface IunstructuredfilesearchrecordstatusFormattedValue {
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly FileId: string;
	readonly ImportSequenceNumber: string;
	readonly IndexingIssueDetails: string;
	readonly IndexingIssueType: string;
	readonly IndexingStatus: string;
	readonly IngestionBatchId: string;
	readonly IngestionIssueDetails: string;
	readonly IngestionIssueType: string;
	readonly IngestionStatus: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly LastIndexingTimestamp_UtcDateAndTime: string;
	readonly LastIngestionTimestamp_UtcDateAndTime: string;
	readonly LastSuccessfulIndexingTimestamp_UtcDateAndTime: string;
	readonly LastSuccessfulIngestionTimestamp_UtcDateAndTime: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly SearchConfigurationId: string;
	readonly SolutionId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingSolutionId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UnstructuredFileSearchRecordId: string;
	readonly unstructuredfilesearchrecordstatusId: string;
	readonly UnstructuredFileSearchRecordStatusName: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * unstructuredfilesearchrecordstatus WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IunstructuredfilesearchrecordstatusApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IunstructuredfilesearchrecordstatusFormattedValue;
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
	/** Source file data id. */
	FileId: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Indexing issue/error details. */
	IndexingIssueDetails: string | null;
	/** Indexing issue type for failed file data. */
	IndexingIssueType: string | null;
	/** IndexingStatus */
	IndexingStatus: number | null;
	/** Ingesting all file data are done in batched, like folders. Therefore, this can be used as a folderid or any ids to indicate batches of ingestion. */
	IngestionBatchId: string | null;
	/** Ingestion issue/error details. */
	IngestionIssueDetails: string | null;
	/** Ingestion issue type for failed file data refresh */
	IngestionIssueType: string | null;
	/** IngestionStatus */
	IngestionStatus: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Last Indexing Timestamp */
	LastIndexingTimestamp_UtcDateAndTime: Date | null;
	/** Last Ingestion Refresh Timestamp for file data or file content. */
	LastIngestionTimestamp_UtcDateAndTime: Date | null;
	/** Last Successful Indexing Timestamp */
	LastSuccessfulIndexingTimestamp_UtcDateAndTime: Date | null;
	/** Last Successful Ingestion Timestamp */
	LastSuccessfulIngestionTimestamp_UtcDateAndTime: Date | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
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
	/** SearchConfigurationId for a knowledge sources */
	SearchConfigurationId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Table1 */
	statecode: number | null;
	/** Reason for the status of the Table1 */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Lookup to UnstructuredFileSearchRecord Table */
	UnstructuredFileSearchRecordId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	unstructuredfilesearchrecordstatusId: DevKit.Guid | null;
	/** Unstructured File Search Record Status Name */
	UnstructuredFileSearchRecordStatusName: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const unstructuredfilesearchrecordstatusFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	FileId: { logicalName: 'fileid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IndexingIssueDetails: { logicalName: 'indexingissuedetails' },
	IndexingIssueType: { logicalName: 'indexingissuetype' },
	IndexingStatus: { logicalName: 'indexingstatus', type: 'Integer' },
	IngestionBatchId: { logicalName: 'ingestionbatchid' },
	IngestionIssueDetails: { logicalName: 'ingestionissuedetails' },
	IngestionIssueType: { logicalName: 'ingestionissuetype' },
	IngestionStatus: { logicalName: 'ingestionstatus', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	LastIndexingTimestamp_UtcDateAndTime: { logicalName: 'lastindexingtimestamp', type: 'DateTime' },
	LastIngestionTimestamp_UtcDateAndTime: { logicalName: 'lastingestiontimestamp', type: 'DateTime' },
	LastSuccessfulIndexingTimestamp_UtcDateAndTime: { logicalName: 'lastsuccessfulindexingtimestamp', type: 'DateTime' },
	LastSuccessfulIngestionTimestamp_UtcDateAndTime: { logicalName: 'lastsuccessfulingestiontimestamp', type: 'DateTime' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SearchConfigurationId: { schemaName: 'SearchConfigurationId', logicalName: '_searchconfigurationid_value', entityCollectionName: 'dvtablesearchs', entityLogicalName: 'dvtablesearch' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UnstructuredFileSearchRecordId: { schemaName: 'UnstructuredFileSearchRecordId', logicalName: '_unstructuredfilesearchrecordid_value', entityCollectionName: 'unstructuredfilesearchrecords', entityLogicalName: 'unstructuredfilesearchrecord' },
	unstructuredfilesearchrecordstatusId: { logicalName: 'unstructuredfilesearchrecordstatusid' },
	UnstructuredFileSearchRecordStatusName: { logicalName: 'unstructuredfilesearchrecordstatusname' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * unstructuredfilesearchrecordstatus WebApi class for early-bound style coding
 * Usage: const unstructuredfilesearchrecordstatus = new unstructuredfilesearchrecordstatusApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class unstructuredfilesearchrecordstatusApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IunstructuredfilesearchrecordstatusApi>(entity, 'unstructuredfilesearchrecordstatus', 'unstructuredfilesearchrecordstatuses', unstructuredfilesearchrecordstatusFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface unstructuredfilesearchrecordstatusApi extends IunstructuredfilesearchrecordstatusApi { }

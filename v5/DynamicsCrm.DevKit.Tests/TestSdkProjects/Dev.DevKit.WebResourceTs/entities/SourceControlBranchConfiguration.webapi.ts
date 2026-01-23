/**
 * SourceControlBranchConfiguration.webapi.ts - SourceControlBranchConfiguration WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SourceControlBranchConfiguration WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISourceControlBranchConfigurationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISourceControlBranchConfigurationApi, 'FormattedValue'>]: string };
	/** Name of the branch associated with the organization or solution */
	BranchName: string | null;
	/** Git commit id of the branch which was last synced in the organization */
	BranchSyncedCommitId: string | null;
	/** Specifies the time at which branch was last synced in the organization */
	BranchSyncedTime_UtcDateAndTime: Date | null;
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
	/** Name */
	Name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Specifies the relative path of the folder under which the organization or solution changes would be synced */
	RootFolderPath: string | null;
	/** Unique identifier for entity instances */
	SourceControlBranchConfigurationId: DevKit.Guid | null;
	/** Unique identifier of source control configuration */
	SourceControlConfigurationId: DevKit.Guid | null;
	/** Describes solution git connection status. */
	StatusCode: number | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Stores the git upstream branch name associated with the organization */
	UpstreamBranchName: string | null;
	/** Specifies the upstream branch commit id which was last synced to the current branch */
	UpstreamBranchSyncedCommitId: string | null;
	/** Specifies the time when the upstream branch was last synced to the current branch */
	UpstreamBranchSyncedTime_UtcDateAndTime: Date | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const SourceControlBranchConfigurationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	BranchName: { logicalName: 'branchname' },
	BranchSyncedCommitId: { logicalName: 'branchsyncedcommitid' },
	BranchSyncedTime_UtcDateAndTime: { logicalName: 'branchsyncedtime', type: 'DateTime' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PartitionId: { logicalName: 'partitionid' },
	RootFolderPath: { logicalName: 'rootfolderpath' },
	SourceControlBranchConfigurationId: { logicalName: 'sourcecontrolbranchconfigurationid' },
	SourceControlConfigurationId: { schemaName: 'SourceControlConfigurationId', logicalName: '_sourcecontrolconfigurationid_value', entityCollectionName: 'sourcecontrolconfigurations', entityLogicalName: 'sourcecontrolconfiguration' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	UpstreamBranchName: { logicalName: 'upstreambranchname' },
	UpstreamBranchSyncedCommitId: { logicalName: 'upstreambranchsyncedcommitid' },
	UpstreamBranchSyncedTime_UtcDateAndTime: { logicalName: 'upstreambranchsyncedtime', type: 'DateTime' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SourceControlBranchConfiguration WebApi class for early-bound style coding
 * Usage: const sourceControlBranchConfiguration = new SourceControlBranchConfigurationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SourceControlBranchConfigurationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISourceControlBranchConfigurationApi>(entity, 'sourcecontrolbranchconfiguration', 'sourcecontrolbranchconfigurations', SourceControlBranchConfigurationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SourceControlBranchConfigurationApi extends ISourceControlBranchConfigurationApi { }

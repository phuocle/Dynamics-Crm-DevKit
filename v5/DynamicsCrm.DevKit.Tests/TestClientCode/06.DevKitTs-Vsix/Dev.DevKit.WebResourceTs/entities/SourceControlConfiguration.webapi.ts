/**
 * SourceControlConfiguration.webapi.ts - SourceControlConfiguration WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SourceControlConfiguration WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISourceControlConfigurationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISourceControlConfigurationApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Describes the git provider for source control integration. */
	GitProvider: number | null;
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
	/** Stores the git organization name associated with the organization */
	OrganizationName: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Stores the git project name associated with the organization */
	ProjectName: string | null;
	/** Stores the git repository name associated with the organization */
	RepositoryName: string | null;
	/** Unique identifier for entity instances */
	SourceControlConfigurationId: DevKit.Guid | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const SourceControlConfigurationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	GitProvider: { logicalName: 'gitprovider', type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationName: { logicalName: 'organizationname' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PartitionId: { logicalName: 'partitionid' },
	ProjectName: { logicalName: 'projectname' },
	RepositoryName: { logicalName: 'repositoryname' },
	SourceControlConfigurationId: { logicalName: 'sourcecontrolconfigurationid' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SourceControlConfiguration WebApi class for early-bound style coding
 * Usage: const sourceControlConfiguration = new SourceControlConfigurationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SourceControlConfigurationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISourceControlConfigurationApi>(entity, 'sourcecontrolconfiguration', 'sourcecontrolconfigurations', SourceControlConfigurationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SourceControlConfigurationApi extends ISourceControlConfigurationApi { }

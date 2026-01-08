/**
 * EntityDataProvider.webapi.ts - EntityDataProvider WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for EntityDataProvider
 * All fields return string representation of their values
 */
export interface IEntityDataProviderFormattedValue {
	readonly ArchivePlugin: string;
	readonly BulkArchivePlugin: string;
	readonly BulkRetainPlugin: string;
	readonly ComponentState: string;
	readonly CreateMultiplePlugin: string;
	readonly CreatePlugin: string;
	readonly DataSourceLogicalName: string;
	readonly DeleteMultiplePlugin: string;
	readonly DeletePlugin: string;
	readonly Description: string;
	readonly EntityDataProviderId: string;
	readonly EntityDataProviderIdUnique: string;
	readonly IntroducedVersion: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly LookupExpansionEnabled: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly PurgeArchivedContentPlugin: string;
	readonly PurgeRetainedContentPlugin: string;
	readonly RetainPlugin: string;
	readonly RetrieveEntityChangesPlugin: string;
	readonly RetrieveMultiplePlugin: string;
	readonly RetrievePlugin: string;
	readonly RollbackRetainPlugin: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly UpdateMultiplePlugin: string;
	readonly UpdatePlugin: string;
	readonly UpsertMultiplePlugin: string;
	readonly UpsertPlugin: string;
	readonly ValidateArchiveConfigPlugin: string;
	readonly ValidateRetentionConfigPlugin: string;
}

/**
 * EntityDataProvider WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IEntityDataProviderApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IEntityDataProviderFormattedValue;
	/** Contains the archiveplugin id that should be run when Archive is invoked */
	ArchivePlugin: DevKit.Guid | null;
	/** Contains the bulkarchiveplugin id that should be run when BulkArchive is invoked */
	BulkArchivePlugin: DevKit.Guid | null;
	/** Contains the bulkretainplugin id that should be run when BulkRetain is invoked */
	BulkRetainPlugin: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Contains the createmultipleplugin id that should be run when CreateMultiple is invoked */
	CreateMultiplePlugin: DevKit.Guid | null;
	/** Create Plugin */
	CreatePlugin: DevKit.Guid | null;
	/** When creating a Data Provider, the end user must select the name of the Data Source entity that will be created for the provider. */
	DataSourceLogicalName: string | null;
	/** Contains the deletemultipleplugin id that should be run when DeleteMultiple is invoked */
	DeleteMultiplePlugin: DevKit.Guid | null;
	/** Delete Plugin */
	DeletePlugin: DevKit.Guid | null;
	/** What is this Data Provider used for and data store technologies does it target? */
	Description: string | null;
	/** Unique identifier of the data provider. */
	EntityDataProviderId: DevKit.Guid | null;
	/** For internal use only. */
	readonly EntityDataProviderIdUnique: DevKit.Guid | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Enables expansion support for lookups columns. Only applicable to RetrieveMultiple plugin. Enabling this might modify the filter expression supplied to RetrieveMultiple plugin. Default value is false. */
	LookupExpansionEnabled: boolean | null;
	/** The name of this Data Provider. This is the name that appears in the dropdown when creating a new entity. */
	Name: string | null;
	/** Unique identifier for the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Contains the purgearchivedcontentplugin id that should be run when PurgeArchivedContent is invoked */
	PurgeArchivedContentPlugin: DevKit.Guid | null;
	/** Contains the purgeretainedcontentplugin id that should be run when PurgeRetainedContent is invoked */
	PurgeRetainedContentPlugin: DevKit.Guid | null;
	/** Contains the retainplugin id that should be run when Retain is invoked */
	RetainPlugin: DevKit.Guid | null;
	/** Contains the retrieveentitychangesplugin id that should be run when RetrieveEntityChanges is invoked */
	RetrieveEntityChangesPlugin: DevKit.Guid | null;
	/** MultipleRetrieve Plugin */
	RetrieveMultiplePlugin: DevKit.Guid | null;
	/** Retrieve Plugin */
	RetrievePlugin: DevKit.Guid | null;
	/** Contains the rollbackretainplugin id that should be run when Rollback Retain is invoked */
	RollbackRetainPlugin: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Contains the updatemultipleplugin id that should be run when UpdateMultiple is invoked */
	UpdateMultiplePlugin: DevKit.Guid | null;
	/** Update Plugin */
	UpdatePlugin: DevKit.Guid | null;
	/** Contains the upsertmultipleplugin id that should be run when UpsertMultiple is invoked */
	UpsertMultiplePlugin: DevKit.Guid | null;
	/** Contains the upsertplugin id that should be run when Upsert is invoked */
	UpsertPlugin: DevKit.Guid | null;
	/** Contains the validatearchiveconfigplugin id that should be run when ValidateArchiveConfig is invoked */
	ValidateArchiveConfigPlugin: DevKit.Guid | null;
	/** Contains the validateretentionconfigplugin id that should be run when ValidateRetentionConfig is invoked */
	ValidateRetentionConfigPlugin: DevKit.Guid | null;
}

const EntityDataProviderFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ArchivePlugin: { logicalName: 'archiveplugin' },
	BulkArchivePlugin: { logicalName: 'bulkarchiveplugin' },
	BulkRetainPlugin: { logicalName: 'bulkretainplugin' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreateMultiplePlugin: { logicalName: 'createmultipleplugin' },
	CreatePlugin: { logicalName: 'createplugin' },
	DataSourceLogicalName: { logicalName: 'datasourcelogicalname' },
	DeleteMultiplePlugin: { logicalName: 'deletemultipleplugin' },
	DeletePlugin: { logicalName: 'deleteplugin' },
	Description: { logicalName: 'description' },
	EntityDataProviderId: { logicalName: 'entitydataproviderid' },
	EntityDataProviderIdUnique: { logicalName: 'entitydataprovideridunique', readOnly: true },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	LookupExpansionEnabled: { logicalName: 'lookupexpansionenabled', type: 'Boolean' },
	Name: { logicalName: 'name' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PurgeArchivedContentPlugin: { logicalName: 'purgearchivedcontentplugin' },
	PurgeRetainedContentPlugin: { logicalName: 'purgeretainedcontentplugin' },
	RetainPlugin: { logicalName: 'retainplugin' },
	RetrieveEntityChangesPlugin: { logicalName: 'retrieveentitychangesplugin' },
	RetrieveMultiplePlugin: { logicalName: 'retrievemultipleplugin' },
	RetrievePlugin: { logicalName: 'retrieveplugin' },
	RollbackRetainPlugin: { logicalName: 'rollbackretainplugin' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	UpdateMultiplePlugin: { logicalName: 'updatemultipleplugin' },
	UpdatePlugin: { logicalName: 'updateplugin' },
	UpsertMultiplePlugin: { logicalName: 'upsertmultipleplugin' },
	UpsertPlugin: { logicalName: 'upsertplugin' },
	ValidateArchiveConfigPlugin: { logicalName: 'validatearchiveconfigplugin' },
	ValidateRetentionConfigPlugin: { logicalName: 'validateretentionconfigplugin' },
};

/**
 * EntityDataProvider WebApi class for early-bound style coding
 * Usage: const entityDataProvider = new EntityDataProviderApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class EntityDataProviderApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IEntityDataProviderApi>(entity, 'entitydataprovider', 'entitydataproviders', EntityDataProviderFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface EntityDataProviderApi extends IEntityDataProviderApi { }

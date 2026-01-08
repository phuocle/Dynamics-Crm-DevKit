/**
 * StagedEntity.webapi.ts - StagedEntity WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * StagedEntity WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IStagedEntityApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IStagedEntityApi, 'FormattedValue'>]: string };
	/** The collection name of the staged entity. */
	CollectionName: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** The ID of the data provider for virtual entity. */
	DataproviderId: DevKit.Guid | null;
	/** The ID of the data source for virtual entity. */
	DatasourceId: DevKit.Guid | null;
	/** The entity decription with properties for delta update */
	EntityDescription: string | null;
	/** The entity set name of the staged entity. */
	EntitySetName: string | null;
	/** The external collection name of the staged entity for VT scenario. */
	ExternalCollectionName: string | null;
	/** The external name for virtual entity. */
	ExternalName: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** The logical collection name of the staged entity. */
	LogicalCollectionName: string | null;
	/** The logical name of the staged entity. */
	LogicalName: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the staged entity. */
	Name: string | null;
	/** The original localized collection name of the staged entity. */
	OriginalLocalizedCollectionName: string | null;
	/** The localized description of the entity. */
	OriginalLocalizedDescription: string | null;
	/** The original localized name of the staged entity. */
	OriginalLocalizedName: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** The physical name of the staged entity. */
	PhysicalName: string | null;
	/** Unique identifier for entity instances */
	StagedEntityId: DevKit.Guid | null;
	/** Status of the Staged Entity */
	statecode: number | null;
	/** Reason for the status of the Staged Entity */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const StagedEntityFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CollectionName: { logicalName: 'collectionname' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DataproviderId: { logicalName: 'dataproviderid' },
	DatasourceId: { logicalName: 'datasourceid' },
	EntityDescription: { logicalName: 'entitydescription' },
	EntitySetName: { logicalName: 'entitysetname' },
	ExternalCollectionName: { logicalName: 'externalcollectionname' },
	ExternalName: { logicalName: 'externalname' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	LogicalCollectionName: { logicalName: 'logicalcollectionname' },
	LogicalName: { logicalName: 'logicalname' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OriginalLocalizedCollectionName: { logicalName: 'originallocalizedcollectioname' },
	OriginalLocalizedDescription: { logicalName: 'originallocalizedescription' },
	OriginalLocalizedName: { logicalName: 'originallocalizedname' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	PhysicalName: { logicalName: 'physicalname' },
	StagedEntityId: { logicalName: 'stagedentityid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * StagedEntity WebApi class for early-bound style coding
 * Usage: const stagedEntity = new StagedEntityApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class StagedEntityApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IStagedEntityApi>(entity, 'stagedentity', 'stagedentities', StagedEntityFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface StagedEntityApi extends IStagedEntityApi { }

/**
 * indexedtrait.webapi.ts - indexedtrait WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * indexedtrait WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IindexedtraitApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IindexedtraitApi, 'FormattedValue'>]: string };
	/** AlternativeKey */
	AlternativeKey: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** DetailedContents */
	DetailedContents: string | null;
	/** FilterCriteria */
	FilterCriteria: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier for entity instances */
	indexedtraitId: DevKit.Guid | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name */
	name: string | null;
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
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Properties */
	Properties: string | null;
	/** SearchContents */
	SearchContents: string | null;
	/** TraitType */
	TraitType: string | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** UserId */
	UserId: string | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const indexedtraitFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AlternativeKey: { logicalName: 'alternativekey' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DetailedContents: { logicalName: 'detailedcontents' },
	FilterCriteria: { logicalName: 'filtercriteria' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	indexedtraitId: { logicalName: 'indexedtraitid' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PartitionId: { logicalName: 'partitionid' },
	Properties: { logicalName: 'properties' },
	SearchContents: { logicalName: 'searchcontents' },
	TraitType: { logicalName: 'traittype' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	UserId: { logicalName: 'userid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * indexedtrait WebApi class for early-bound style coding
 * Usage: const indexedtrait = new indexedtraitApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class indexedtraitApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IindexedtraitApi>(entity, 'indexedtrait', 'indexedtraits', indexedtraitFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface indexedtraitApi extends IindexedtraitApi { }

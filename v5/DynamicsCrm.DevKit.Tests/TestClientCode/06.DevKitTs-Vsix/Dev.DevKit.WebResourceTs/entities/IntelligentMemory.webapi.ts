/**
 * IntelligentMemory.webapi.ts - IntelligentMemory WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for IntelligentMemory
 * All fields return string representation of their values
 */
export interface IIntelligentMemoryFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly IntelligentMemoryId: string;
	readonly IntelligentMemoryName: string;
	readonly MemoryKind: string;
	readonly MemorySource: string;
	readonly MemoryType: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly PartitionId: string;
	readonly Predicate: string;
	readonly PrivacyLevel: string;
	readonly RecordVersion: string;
	readonly SourceId: string;
	readonly Subject: string;
	readonly TargetObject: string;
	readonly TTLInSeconds: string;
	readonly VersionNumber: string;
}

/**
 * IntelligentMemory WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IIntelligentMemoryApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IIntelligentMemoryFormattedValue;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier for intelligent memory record. */
	IntelligentMemoryId: DevKit.Guid | null;
	/** Unique name for the record. */
	IntelligentMemoryName: string | null;
	/** The category of information being persisted - fact, observation, inference etc. */
	MemoryKind: string | null;
	/** The source creating the memory record - app, agent, user etc. */
	MemorySource: string | null;
	/** Specifies the temporal or persistence classification of the memory - short_term, long_term, working_memory, episodic etc. */
	MemoryType: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
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
	/** Short and crisp '_' separated strings that represent the relationship/characteristic binding the source with the target object. */
	Predicate: string | null;
	/** The privacy level of information being persisted - Private (user-only), Shared (specific agents), Public (open to all), etc. */
	PrivacyLevel: string | null;
	/** Versioning to separate different versions of the entity records (To be used only when we change the way memory is stored and interacted with). */
	RecordVersion: string | null;
	/** The identifier of the source. */
	SourceId: string | null;
	/** The subject/entity that the memory is about. */
	Subject: string | null;
	/** The information about the subject that is being persisted. */
	TargetObject: string | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const IntelligentMemoryFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IntelligentMemoryId: { logicalName: 'intelligentmemoryid' },
	IntelligentMemoryName: { logicalName: 'intelligentmemoryname' },
	MemoryKind: { logicalName: 'memorykind' },
	MemorySource: { logicalName: 'memorysource' },
	MemoryType: { logicalName: 'memorytype' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PartitionId: { logicalName: 'partitionid' },
	Predicate: { logicalName: 'predicate' },
	PrivacyLevel: { logicalName: 'privacylevel' },
	RecordVersion: { logicalName: 'recordversion' },
	SourceId: { logicalName: 'sourceid' },
	Subject: { logicalName: 'subject' },
	TargetObject: { logicalName: 'targetobject' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * IntelligentMemory WebApi class for early-bound style coding
 * Usage: const intelligentMemory = new IntelligentMemoryApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class IntelligentMemoryApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IIntelligentMemoryApi>(entity, 'intelligentmemory', 'intelligentmemories', IntelligentMemoryFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface IntelligentMemoryApi extends IIntelligentMemoryApi { }

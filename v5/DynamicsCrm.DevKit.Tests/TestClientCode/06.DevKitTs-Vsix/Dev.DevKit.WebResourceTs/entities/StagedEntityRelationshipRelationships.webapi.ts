/**
 * StagedEntityRelationshipRelationships.webapi.ts - StagedEntityRelationshipRelationships WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * StagedEntityRelationshipRelationships WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IStagedEntityRelationshipRelationshipsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IStagedEntityRelationshipRelationshipsApi, 'FormattedValue'>]: string };
	/** Solution component state of entity relationship relationships. */
	ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Identifier of the entity relationship. */
	EntityRelationshipId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Metadata description of entity relationship relationships. */
	MetadataDescription: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Overwrite time of the solution component entity relationship relationships. */
	OverwriteTime_UtcDateAndTime: Date | null;
	/** Identifier of the relationship. */
	RelationshipId: DevKit.Guid | null;
	/** The name of the relationship. */
	SchemaName: string | null;
	/** Identifier of the solution that contains entity relationship relationships. */
	SolutionId: DevKit.Guid | null;
	/** Unique identifier for entity instances. */
	StagedEntityRelationshipRelationshipsId: DevKit.Guid | null;
	/** A unique identifier used to tie together all objects staged within the same transaction. */
	StagingExecutionContextId: DevKit.Guid | null;
	/** Status of the staged entity relationship relationships. */
	statecode: number | null;
	/** Reason for the status of the staged entity relationship relationships. */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const StagedEntityRelationshipRelationshipsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EntityRelationshipId: { logicalName: 'entityrelationshipid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	MetadataDescription: { logicalName: 'metadatadescription' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', type: 'DateTime' },
	RelationshipId: { logicalName: 'relationshipid' },
	SchemaName: { logicalName: 'schemaname' },
	SolutionId: { logicalName: 'solutionid' },
	StagedEntityRelationshipRelationshipsId: { logicalName: 'stagedentityrelationshiprelationshipsid' },
	StagingExecutionContextId: { logicalName: 'stagingexecutioncontextid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * StagedEntityRelationshipRelationships WebApi class for early-bound style coding
 * Usage: const stagedEntityRelationshipRelationships = new StagedEntityRelationshipRelationshipsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class StagedEntityRelationshipRelationshipsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IStagedEntityRelationshipRelationshipsApi>(entity, 'stagedentityrelationshiprelationships', 'stagedentityrelationshiprelationshipses', StagedEntityRelationshipRelationshipsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface StagedEntityRelationshipRelationshipsApi extends IStagedEntityRelationshipRelationshipsApi { }

/**
 * StagedEntityRelationshipRole.webapi.ts - StagedEntityRelationshipRole WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * StagedEntityRelationshipRole WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IStagedEntityRelationshipRoleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IStagedEntityRelationshipRoleApi, 'FormattedValue'>]: string };
	/** Solution component state of entity relationship role. */
	ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Identifier of the entity. */
	EntityId: DevKit.Guid | null;
	/** Identifier of the entity relationship. */
	EntityRelationshipId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Metadata description of entity relationship role. */
	MetadataDescription: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Overwrite time of the solution component entity relationship role. */
	OverwriteTime_UtcDateAndTime: Date | null;
	/** The name of the entity relationship role. */
	SchemaName: string | null;
	/** Identifier of the solution that contains entity relationship role. */
	SolutionId: DevKit.Guid | null;
	/** Unique identifier for entity instances. */
	StagedEntityRelationshipRoleId: DevKit.Guid | null;
	/** A unique identifier used to tie together all objects staged within the same transaction. */
	StagingExecutionContextId: DevKit.Guid | null;
	/** Status of the staged entity relationship role. */
	statecode: number | null;
	/** Reason for the status of the staged entity relationship role. */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const StagedEntityRelationshipRoleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EntityId: { logicalName: 'entityid' },
	EntityRelationshipId: { logicalName: 'entityrelationshipid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	MetadataDescription: { logicalName: 'metadatadescription' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', type: 'DateTime' },
	SchemaName: { logicalName: 'schemaname' },
	SolutionId: { logicalName: 'solutionid' },
	StagedEntityRelationshipRoleId: { logicalName: 'stagedentityrelationshiproleid' },
	StagingExecutionContextId: { logicalName: 'stagingexecutioncontextid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * StagedEntityRelationshipRole WebApi class for early-bound style coding
 * Usage: const stagedEntityRelationshipRole = new StagedEntityRelationshipRoleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class StagedEntityRelationshipRoleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IStagedEntityRelationshipRoleApi>(entity, 'stagedentityrelationshiprole', 'stagedentityrelationshiproles', StagedEntityRelationshipRoleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface StagedEntityRelationshipRoleApi extends IStagedEntityRelationshipRoleApi { }

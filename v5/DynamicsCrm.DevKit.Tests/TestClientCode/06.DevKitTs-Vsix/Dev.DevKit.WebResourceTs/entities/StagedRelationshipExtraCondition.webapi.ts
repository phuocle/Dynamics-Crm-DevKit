/**
 * StagedRelationshipExtraCondition.webapi.ts - StagedRelationshipExtraCondition WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for StagedRelationshipExtraCondition
 * All fields return string representation of their values
 */
export interface IStagedRelationshipExtraConditionFormattedValue {
	readonly AttributeId: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly MetadataDescription: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly RelationshipId: string;
	readonly SolutionId: string;
	readonly StagedRelationshipExtraConditionId: string;
	readonly StagingExecutionContextId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * StagedRelationshipExtraCondition WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IStagedRelationshipExtraConditionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IStagedRelationshipExtraConditionFormattedValue;
	/** Identifier of the attribute. */
	AttributeId: DevKit.Guid | null;
	/** Solution component state of relationship extra condition. */
	ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Metadata description of relationship extra condition. */
	MetadataDescription: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the relationship extra condition. */
	Name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Overwrite time of the solution component relationship extra condition. */
	OverwriteTime_UtcDateAndTime: Date | null;
	/** Identifier of the relationship. */
	RelationshipId: DevKit.Guid | null;
	/** Identifier of the solution that contains relationship extra condition. */
	SolutionId: DevKit.Guid | null;
	/** Unique identifier for entity instances. */
	StagedRelationshipExtraConditionId: DevKit.Guid | null;
	/** A unique identifier used to tie together all objects staged within the same transaction. */
	StagingExecutionContextId: DevKit.Guid | null;
	/** Status of the staged relationship extra condition. */
	statecode: number | null;
	/** Reason for the status of the staged relationship extra condition. */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const StagedRelationshipExtraConditionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AttributeId: { logicalName: 'attributeid' },
	ComponentState: { logicalName: 'componentstate', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	MetadataDescription: { logicalName: 'metadatadescription' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', type: 'DateTime' },
	RelationshipId: { logicalName: 'relationshipid' },
	SolutionId: { logicalName: 'solutionid' },
	StagedRelationshipExtraConditionId: { logicalName: 'stagedrelationshipextraconditionid' },
	StagingExecutionContextId: { logicalName: 'stagingexecutioncontextid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * StagedRelationshipExtraCondition WebApi class for early-bound style coding
 * Usage: const stagedRelationshipExtraCondition = new StagedRelationshipExtraConditionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class StagedRelationshipExtraConditionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IStagedRelationshipExtraConditionApi>(entity, 'stagedrelationshipextracondition', 'stagedrelationshipextraconditions', StagedRelationshipExtraConditionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface StagedRelationshipExtraConditionApi extends IStagedRelationshipExtraConditionApi { }

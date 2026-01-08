/**
 * StagedRelationship.webapi.ts - StagedRelationship WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for StagedRelationship
 * All fields return string representation of their values
 */
export interface IStagedRelationshipFormattedValue {
	readonly CascadeArchive: string;
	readonly CascadeAssign: string;
	readonly CascadeDelete: string;
	readonly CascadeLinkMask: string;
	readonly CascadeMerge: string;
	readonly CascadeReparent: string;
	readonly CascadeRollupView: string;
	readonly CascadeShare: string;
	readonly CascadeUnShare: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly EntityKeyId: string;
	readonly ImportSequenceNumber: string;
	readonly IntroducedVersion: string;
	readonly IsCustomRelationship: string;
	readonly IsLogical: string;
	readonly IsRelationshipAttributeDenormalized: string;
	readonly IsValidForAdvancedFind: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly RecordId: string;
	readonly ReferencedAttributeId: string;
	readonly ReferencedEntityId: string;
	readonly ReferencingAttributeId: string;
	readonly ReferencingEntityId: string;
	readonly RelationshipRowId: string;
	readonly RelationshipType: string;
	readonly SolutionId: string;
	readonly StagedRelationshipId: string;
	readonly StagingExecutionContextId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingSolutionId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * StagedRelationship WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IStagedRelationshipApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IStagedRelationshipFormattedValue;
	/** Cascade archive behavior. */
	CascadeArchive: number | null;
	/** Cascade assign behavior. */
	CascadeAssign: number | null;
	/** Cascade delete behavior. */
	CascadeDelete: number | null;
	/** Cascade link mask value. */
	CascadeLinkMask: number | null;
	/** Cascade merge behavior. */
	CascadeMerge: number | null;
	/** Cascade reparent behavior. */
	CascadeReparent: number | null;
	/** Cascade rollup view behavior. */
	CascadeRollupView: number | null;
	/** Cascade share behavior. */
	CascadeShare: number | null;
	/** Cascade unshare behavior. */
	CascadeUnShare: number | null;
	/** Solution component state of relationship. */
	ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Identifier of the entity key. */
	EntityKeyId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** The version in which this relationship was introduced. */
	readonly IntroducedVersion: string | null;
	/** Indicates if the relationship is custom. */
	IsCustomRelationship: boolean | null;
	/** Indicates if the relationship is logical. */
	IsLogical: boolean | null;
	/** Indicates if the relationship attribute is denormalized. */
	IsRelationshipAttributeDenormalized: boolean | null;
	/** Indicates if the relationship is valid for advanced find. */
	IsValidForAdvancedFind: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the relationship. */
	Name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Overwrite time of the solution component relationship. */
	OverwriteTime_UtcDateAndTime: Date | null;
	/** Record identifier. */
	RecordId: number | null;
	/** Identifier of the referenced attribute. */
	ReferencedAttributeId: DevKit.Guid | null;
	/** Identifier of the referenced entity. */
	ReferencedEntityId: DevKit.Guid | null;
	/** Identifier of the referencing attribute. */
	ReferencingAttributeId: DevKit.Guid | null;
	/** Identifier of the referencing entity. */
	ReferencingEntityId: DevKit.Guid | null;
	/** Identifier of the relationship row. */
	RelationshipRowId: DevKit.Guid | null;
	/** Type of the relationship. */
	RelationshipType: number | null;
	/** Identifier of the solution that contains relationship. */
	SolutionId: DevKit.Guid | null;
	/** Unique identifier for entity instances. */
	StagedRelationshipId: DevKit.Guid | null;
	/** A unique identifier used to tie together all objects staged within the same transaction. */
	StagingExecutionContextId: DevKit.Guid | null;
	/** Status of the staged relationship. */
	statecode: number | null;
	/** Reason for the status of the staged relationship. */
	statuscode: number | null;
	/** Identifier of the supporting solution. */
	SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const StagedRelationshipFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CascadeArchive: { logicalName: 'cascadearchive', type: 'Integer' },
	CascadeAssign: { logicalName: 'cascadeassign', type: 'Integer' },
	CascadeDelete: { logicalName: 'cascadedelete', type: 'Integer' },
	CascadeLinkMask: { logicalName: 'cascadelinkmask', type: 'Integer' },
	CascadeMerge: { logicalName: 'cascademerge', type: 'Integer' },
	CascadeReparent: { logicalName: 'cascadereparent', type: 'Integer' },
	CascadeRollupView: { logicalName: 'cascaderollupview', type: 'Integer' },
	CascadeShare: { logicalName: 'cascadeshare', type: 'Integer' },
	CascadeUnShare: { logicalName: 'cascadeunshare', type: 'Integer' },
	ComponentState: { logicalName: 'componentstate', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EntityKeyId: { logicalName: 'entitykeyid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion', readOnly: true },
	IsCustomRelationship: { logicalName: 'iscustomrelationship', type: 'Boolean' },
	IsLogical: { logicalName: 'islogical', type: 'Boolean' },
	IsRelationshipAttributeDenormalized: { logicalName: 'isrelationshipattributedenormalized', type: 'Boolean' },
	IsValidForAdvancedFind: { logicalName: 'isvalidforadvancedfind', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', type: 'DateTime' },
	RecordId: { logicalName: 'recordid', type: 'Integer' },
	ReferencedAttributeId: { logicalName: 'referencedattributeid' },
	ReferencedEntityId: { logicalName: 'referencedentityid' },
	ReferencingAttributeId: { logicalName: 'referencingattributeid' },
	ReferencingEntityId: { logicalName: 'referencingentityid' },
	RelationshipRowId: { logicalName: 'relationshiprowid' },
	RelationshipType: { logicalName: 'relationshiptype', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid' },
	StagedRelationshipId: { logicalName: 'stagedrelationshipid' },
	StagingExecutionContextId: { logicalName: 'stagingexecutioncontextid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * StagedRelationship WebApi class for early-bound style coding
 * Usage: const stagedRelationship = new StagedRelationshipApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class StagedRelationshipApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IStagedRelationshipApi>(entity, 'stagedrelationship', 'stagedrelationships', StagedRelationshipFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface StagedRelationshipApi extends IStagedRelationshipApi { }

/**
 * solutioncomponentrelationshipconfiguration.webapi.ts - solutioncomponentrelationshipconfiguration WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * solutioncomponentrelationshipconfiguration WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IsolutioncomponentrelationshipconfigurationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IsolutioncomponentrelationshipconfigurationApi, 'FormattedValue'>]: string };
	/** Add Related Components */
	AddRelatedComponents: boolean | null;
	/** Cascade Remove Components */
	CascadeRemoveComponents: boolean | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for Entity Relationship associated with Solution Component Relationship Configuration. */
	EntityRelationshipId: DevKit.Guid | null;
	/** Force Adding Managed Related Components */
	ForceAddingManagedRelatedComponents: boolean | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Boolean that indicates if this relationship can be excluded from the export as a missing dependency if the target is part of an api managed solution. */
	NoMissingDependencyForApiManagedSolution: boolean | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** PrimaryEntityDependencyType */
	PrimaryEntityDependencyType: number | null;
	/** Respect Parent Root Component Behavior */
	RespectParentRootComponentBehavior: boolean | null;
	/** SecondaryEntityDependencyType */
	SecondaryEntityDependencyType: number | null;
	/** Unique identifier for entity instances */
	solutioncomponentrelationshipconfigurationId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Solution Component Relationship Configuration */
	statecode: number | null;
	/** Reason for the status of the Solution Component Relationship Configuration */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const solutioncomponentrelationshipconfigurationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AddRelatedComponents: { logicalName: 'addrelatedcomponents', type: 'Boolean' },
	CascadeRemoveComponents: { logicalName: 'cascaderemovecomponents', type: 'Boolean' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EntityRelationshipId: { schemaName: 'EntityRelationshipId', logicalName: '_entityrelationshipid_value', entityCollectionName: 'entityrelationships', entityLogicalName: 'entityrelationship' },
	ForceAddingManagedRelatedComponents: { logicalName: 'forceaddingmanagedrelatedcomponents', type: 'Boolean' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	NoMissingDependencyForApiManagedSolution: { logicalName: 'nomissingdependencyforapimanagedsolution', type: 'Boolean' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PrimaryEntityDependencyType: { logicalName: 'primaryentitydependencytype', type: 'Integer' },
	RespectParentRootComponentBehavior: { logicalName: 'respectparentrootcomponentbehavior', type: 'Boolean' },
	SecondaryEntityDependencyType: { logicalName: 'secondaryentitydependencytype', type: 'Integer' },
	solutioncomponentrelationshipconfigurationId: { logicalName: 'solutioncomponentrelationshipconfigurationid' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * solutioncomponentrelationshipconfiguration WebApi class for early-bound style coding
 * Usage: const solutioncomponentrelationshipconfiguration = new solutioncomponentrelationshipconfigurationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class solutioncomponentrelationshipconfigurationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IsolutioncomponentrelationshipconfigurationApi>(entity, 'solutioncomponentrelationshipconfiguration', 'solutioncomponentrelationshipconfigurations', solutioncomponentrelationshipconfigurationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface solutioncomponentrelationshipconfigurationApi extends IsolutioncomponentrelationshipconfigurationApi { }

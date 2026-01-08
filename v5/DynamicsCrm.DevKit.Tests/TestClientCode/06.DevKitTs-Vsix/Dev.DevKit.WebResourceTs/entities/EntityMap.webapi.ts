/**
 * EntityMap.webapi.ts - EntityMap WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for EntityMap
 * All fields return string representation of their values
 */
export interface IEntityMapFormattedValue {
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly EntityMapId: string;
	readonly EntityMapIdUnique: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly SolutionId: string;
	readonly SourceEntityName: string;
	readonly SupportingSolutionId: string;
	readonly TargetEntityName: string;
	readonly VersionNumber: string;
}

/**
 * EntityMap WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IEntityMapApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IEntityMapFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the entity map. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the entity map was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the entitymap. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the entity map. */
	EntityMapId: DevKit.Guid | null;
	/** For internal use only. */
	readonly EntityMapIdUnique: DevKit.Guid | null;
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who last modified the entity map. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the entity map was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the entitymap. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization with which the entity map is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Name of the source entity for the entity mapping. */
	SourceEntityName: string | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Name of the Microsoft Dynamics 365 entity. */
	TargetEntityName: string | null;
	readonly VersionNumber: number | null;
}

const EntityMapFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EntityMapId: { logicalName: 'entitymapid' },
	EntityMapIdUnique: { logicalName: 'entitymapidunique', readOnly: true },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SourceEntityName: { logicalName: 'sourceentityname' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TargetEntityName: { logicalName: 'targetentityname' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * EntityMap WebApi class for early-bound style coding
 * Usage: const entityMap = new EntityMapApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class EntityMapApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IEntityMapApi>(entity, 'entitymap', 'entitymaps', EntityMapFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface EntityMapApi extends IEntityMapApi { }

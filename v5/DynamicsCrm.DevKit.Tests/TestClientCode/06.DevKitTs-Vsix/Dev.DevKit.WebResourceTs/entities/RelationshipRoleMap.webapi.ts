/**
 * RelationshipRoleMap.webapi.ts - RelationshipRoleMap WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for RelationshipRoleMap
 * All fields return string representation of their values
 */
export interface IRelationshipRoleMapFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly RelationshipRoleId: string;
	readonly RelationshipRoleMapId: string;
	readonly VersionNumber: string;
}

/**
 * RelationshipRoleMap WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRelationshipRoleMapApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IRelationshipRoleMapFormattedValue;
	/** Unique identifier of the user who created the relationship role map. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the relationship role map was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the relationshiprolemap. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the user who last modified the relationship role map. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the relationship role map record was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the relationshiprolemap. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization with which the relationship role map is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier of the relationship role. This relationship role is only valid in a relationship between an entity of type specified in the primaryobjecttypecode property and an entity of type specified in the associateobjecttypecode property. */
	RelationshipRoleId: DevKit.Guid | null;
	/** Unique identifier of the relationship role map. */
	RelationshipRoleMapId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const RelationshipRoleMapFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	RelationshipRoleId: { schemaName: 'RelationshipRoleId', logicalName: '_relationshiproleid_value', entityCollectionName: 'relationshiproles', entityLogicalName: 'relationshiprole' },
	RelationshipRoleMapId: { logicalName: 'relationshiprolemapid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * RelationshipRoleMap WebApi class for early-bound style coding
 * Usage: const relationshipRoleMap = new RelationshipRoleMapApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RelationshipRoleMapApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRelationshipRoleMapApi>(entity, 'relationshiprolemap', 'relationshiprolemaps', RelationshipRoleMapFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RelationshipRoleMapApi extends IRelationshipRoleMapApi { }

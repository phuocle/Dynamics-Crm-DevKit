/**
 * RelationshipRole.webapi.ts - RelationshipRole WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * RelationshipRole WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRelationshipRoleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IRelationshipRoleApi, 'FormattedValue'>]: string };
	/** Unique Identifier of the user who created the relationship role. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the relationship role was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the relationshiprole. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of the relationship role. */
	Description: string | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who last modified the relationship role. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the relationship role was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the relationshiprole. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the relationship role. */
	Name: string | null;
	/** Unique Identifier of the organization that this relationship role belongs to. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier of the relationship role. */
	RelationshipRoleId: DevKit.Guid | null;
	/** Status of the relationship role. */
	StateCode: number | null;
	/** Reason for the status of the relationship role. */
	StatusCode: number | null;
	readonly VersionNumber: number | null;
}

const RelationshipRoleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	RelationshipRoleId: { logicalName: 'relationshiproleid' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * RelationshipRole WebApi class for early-bound style coding
 * Usage: const relationshipRole = new RelationshipRoleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RelationshipRoleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRelationshipRoleApi>(entity, 'relationshiprole', 'relationshiproles', RelationshipRoleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RelationshipRoleApi extends IRelationshipRoleApi { }

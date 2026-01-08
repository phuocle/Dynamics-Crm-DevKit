/**
 * RelationshipAttribute.webapi.ts - RelationshipAttribute WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for RelationshipAttribute
 * All fields return string representation of their values
 */
export interface IRelationshipAttributeFormattedValue {
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly ReferencedAttributeId: string;
	readonly ReferencingAttributeId: string;
	readonly RelationshipAttributeId: string;
	readonly RelationshipId: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly versionnumber: string;
}

/**
 * RelationshipAttribute WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRelationshipAttributeApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IRelationshipAttributeFormattedValue;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Display Name */
	Name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Referenced Attribute Id */
	ReferencedAttributeId: DevKit.Guid | null;
	/** Referencing Attribute Id */
	ReferencingAttributeId: DevKit.Guid | null;
	/** Unique identifier of the relationship attribute */
	RelationshipAttributeId: DevKit.Guid | null;
	/** Relationship Id */
	RelationshipId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Version number of Image descriptor. */
	readonly versionnumber: number | null;
}

const RelationshipAttributeFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ReferencedAttributeId: { schemaName: 'ReferencedAttributeId', logicalName: '_referencedattributeid_value', entityCollectionName: 'attributes', entityLogicalName: 'attribute' },
	ReferencingAttributeId: { schemaName: 'ReferencingAttributeId', logicalName: '_referencingattributeid_value', entityCollectionName: 'attributes', entityLogicalName: 'attribute' },
	RelationshipAttributeId: { logicalName: 'relationshipattributeid' },
	RelationshipId: { schemaName: 'RelationshipId', logicalName: '_relationshipid_value', entityCollectionName: 'relationships', entityLogicalName: 'relationship' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	versionnumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * RelationshipAttribute WebApi class for early-bound style coding
 * Usage: const relationshipAttribute = new RelationshipAttributeApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RelationshipAttributeApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRelationshipAttributeApi>(entity, 'relationshipattribute', 'relationshipattributes', RelationshipAttributeFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RelationshipAttributeApi extends IRelationshipAttributeApi { }

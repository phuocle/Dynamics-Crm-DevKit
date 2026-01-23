/**
 * AttributeMap.webapi.ts - AttributeMap WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * AttributeMap WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAttributeMapApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAttributeMapApi, 'FormattedValue'>]: string };
	/** Unique identifier of the attribute map. */
	AttributeMapId: DevKit.Guid | null;
	/** For internal use only. */
	readonly AttributeMapIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the attribute map. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the attribute map was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the attributemap. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the entity map with which the attribute map is associated. */
	EntityMapId: DevKit.Guid | null;
	readonly IsManaged: boolean | null;
	/** Information about whether this attribute map is user-defined or system-defined. */
	IsSystem: boolean | null;
	/** Unique identifier of the user who last modified the attribute map. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the attribute map was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the attributemap. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization with which the attribute map is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the parent attribute map. */
	ParentAttributeMapId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Name of the source attribute for the mapping. */
	SourceAttributeName: string | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Name of the target attribute for the mapping. */
	TargetAttributeName: string | null;
	readonly VersionNumber: number | null;
}

const AttributeMapFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AttributeMapId: { logicalName: 'attributemapid' },
	AttributeMapIdUnique: { logicalName: 'attributemapidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EntityMapId: { schemaName: 'EntityMapId', logicalName: '_entitymapid_value', entityCollectionName: 'entitymaps', entityLogicalName: 'entitymap' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsSystem: { logicalName: 'issystem', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ParentAttributeMapId: { schemaName: 'ParentAttributeMapId', logicalName: '_parentattributemapid_value', entityCollectionName: 'attributemaps', entityLogicalName: 'attributemap' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SourceAttributeName: { logicalName: 'sourceattributename' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TargetAttributeName: { logicalName: 'targetattributename' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * AttributeMap WebApi class for early-bound style coding
 * Usage: const attributeMap = new AttributeMapApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AttributeMapApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAttributeMapApi>(entity, 'attributemap', 'attributemaps', AttributeMapFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AttributeMapApi extends IAttributeMapApi { }

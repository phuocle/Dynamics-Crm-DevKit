/**
 * Attribute.webapi.ts - Attribute WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Attribute WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAttributeApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAttributeApi, 'FormattedValue'>]: string };
	/** Unique identifier of the attribute. */
	AttributeId: DevKit.Guid | null;
	/** Attribute Of */
	readonly AttributeOf: DevKit.Guid | null;
	/** Attribute Type Id */
	readonly AttributeTypeId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** The external name of this attribute. */
	ExternalName: string | null;
	/** The logical name of this attribute. */
	LogicalName: string | null;
	/** The managed property logical name of this attribute. */
	ManagedPropertyLogicalName: string | null;
	/** The managed property parent attribute name of this attribute. */
	ManagedPropertyParentAttributeName: string | null;
	/** The name of this Attribute. */
	Name: string | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** The physical name of this attribute. */
	PhysicalName: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** The table column name of this attribute. */
	TableColumnName: string | null;
	/** Valid For Read API */
	readonly ValidForReadAPI: boolean | null;
	/** The version number of this attribute. */
	readonly VersionNumber: number | null;
}

const AttributeFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AttributeId: { logicalName: 'attributeid' },
	AttributeOf: { logicalName: 'attributeof', readOnly: true },
	AttributeTypeId: { logicalName: 'attributetypeid', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ExternalName: { logicalName: 'externalname' },
	LogicalName: { logicalName: 'logicalname' },
	ManagedPropertyLogicalName: { logicalName: 'managedpropertylogicalname' },
	ManagedPropertyParentAttributeName: { logicalName: 'managedpropertyparentattributename' },
	Name: { logicalName: 'name' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PhysicalName: { logicalName: 'physicalname' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	TableColumnName: { logicalName: 'tablecolumnname' },
	ValidForReadAPI: { logicalName: 'validforreadapi', readOnly: true, type: 'Boolean' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Attribute WebApi class for early-bound style coding
 * Usage: const attribute = new AttributeApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AttributeApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAttributeApi>(entity, 'attribute', 'attributes', AttributeFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AttributeApi extends IAttributeApi { }

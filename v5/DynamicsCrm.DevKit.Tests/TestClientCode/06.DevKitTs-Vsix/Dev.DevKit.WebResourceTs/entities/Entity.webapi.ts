/**
 * Entity.webapi.ts - Entity WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Entity WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IEntityApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IEntityApi, 'FormattedValue'>]: string };
	/** The address table name of this entity. */
	AddressTableName: string | null;
	/** The base table name of this entity. */
	BaseTableName: string | null;
	/** The collection name of this entity. */
	CollectionName: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the entity. */
	EntityId: DevKit.Guid | null;
	/** The entity set name of this entity. */
	EntitySetName: string | null;
	/** The extension table name of this entity. */
	ExtensionTableName: string | null;
	/** The external collection name of this entity. */
	ExternalCollectionName: string | null;
	/** The external name of this entity. */
	ExternalName: string | null;
	/** Whether this entity is of type activity. */
	readonly IsActivity: boolean | null;
	/** The logical collection name of this entity. */
	LogicalCollectionName: string | null;
	/** The logical name of this entity. */
	LogicalName: string | null;
	/** The name of this Entity. */
	Name: string | null;
	/** The object type code of this entity. */
	readonly ObjectTypeCode: number | null;
	/** The original localized collection name of this entity. */
	OriginalLocalizedCollectionName: string | null;
	/** The original localized name of this entity. */
	OriginalLocalizedName: string | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** The parent controlling attribute name of this entity. */
	ParentControllingAttributeName: string | null;
	/** The physical name of this entity. */
	PhysicalName: string | null;
	/** The Report view name of this entity. */
	ReportViewName: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** The version number of this entity. */
	readonly VersionNumber: number | null;
}

const EntityFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AddressTableName: { logicalName: 'addresstablename' },
	BaseTableName: { logicalName: 'basetablename' },
	CollectionName: { logicalName: 'collectionname' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	EntityId: { logicalName: 'entityid' },
	EntitySetName: { logicalName: 'entitysetname' },
	ExtensionTableName: { logicalName: 'extensiontablename' },
	ExternalCollectionName: { logicalName: 'externalcollectionname' },
	ExternalName: { logicalName: 'externalname' },
	IsActivity: { logicalName: 'isactivity', readOnly: true, type: 'Boolean' },
	LogicalCollectionName: { logicalName: 'logicalcollectionname' },
	LogicalName: { logicalName: 'logicalname' },
	Name: { logicalName: 'name' },
	ObjectTypeCode: { logicalName: 'objecttypecode', readOnly: true, type: 'Integer' },
	OriginalLocalizedCollectionName: { logicalName: 'originallocalizedcollectionname' },
	OriginalLocalizedName: { logicalName: 'originallocalizedname' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ParentControllingAttributeName: { logicalName: 'parentcontrollingattributename' },
	PhysicalName: { logicalName: 'physicalname' },
	ReportViewName: { logicalName: 'reportviewname' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Entity WebApi class for early-bound style coding
 * Usage: const entity = new EntityApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class EntityApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IEntityApi>(entity, 'entity', 'entities', EntityFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface EntityApi extends IEntityApi { }

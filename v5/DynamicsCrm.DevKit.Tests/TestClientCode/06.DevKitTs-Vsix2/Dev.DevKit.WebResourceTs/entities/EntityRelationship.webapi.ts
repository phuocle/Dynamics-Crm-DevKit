/**
 * EntityRelationship.webapi.ts - EntityRelationship WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * EntityRelationship WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IEntityRelationshipApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IEntityRelationshipApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the entity relationship. */
	EntityRelationshipId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** The name of this Entity Relationship. */
	SchemaName: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
}

const EntityRelationshipFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	EntityRelationshipId: { logicalName: 'entityrelationshipid' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SchemaName: { logicalName: 'schemaname' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
};

/**
 * EntityRelationship WebApi class for early-bound style coding
 * Usage: const entityRelationship = new EntityRelationshipApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class EntityRelationshipApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IEntityRelationshipApi>(entity, 'entityrelationship', 'entityrelationships', EntityRelationshipFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface EntityRelationshipApi extends IEntityRelationshipApi { }

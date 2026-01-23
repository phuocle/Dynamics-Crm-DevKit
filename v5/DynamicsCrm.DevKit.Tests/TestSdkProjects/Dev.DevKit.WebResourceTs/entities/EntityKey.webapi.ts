/**
 * EntityKey.webapi.ts - EntityKey WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * EntityKey WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IEntityKeyApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IEntityKeyApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the entity key. */
	EntityKeyId: DevKit.Guid | null;
	/** Is the attribute secondary key. */
	readonly IsSecondaryKey: boolean | null;
	/** The logical name of this Entity Key. */
	LogicalName: string | null;
	/** The name of this Entity Key. */
	Name: string | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
}

const EntityKeyFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	EntityKeyId: { logicalName: 'entitykeyid' },
	IsSecondaryKey: { logicalName: 'issecondarykey', readOnly: true, type: 'Boolean' },
	LogicalName: { logicalName: 'logicalname' },
	Name: { logicalName: 'name' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
};

/**
 * EntityKey WebApi class for early-bound style coding
 * Usage: const entityKey = new EntityKeyApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class EntityKeyApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IEntityKeyApi>(entity, 'entitykey', 'entitykeys', EntityKeyFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface EntityKeyApi extends IEntityKeyApi { }

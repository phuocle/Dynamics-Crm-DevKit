/**
 * MultiEntitySearchEntities.webapi.ts - MultiEntitySearchEntities WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * MultiEntitySearchEntities WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IMultiEntitySearchEntitiesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IMultiEntitySearchEntitiesApi, 'FormattedValue'>]: string };
	/** Logical entity name of the entity participating in the multi entity search. */
	readonly EntityName2: string | null;
	/** Order of the entity in the result collection. */
	readonly EntityOrder: number | null;
	/** Shows the entity used for the multiple entity search. */
	readonly MultiEntitySearchEntityId: DevKit.Guid | null;
	/** Shows the ID of the multiple entity search. */
	readonly MultiEntitySearchId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const MultiEntitySearchEntitiesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	EntityName2: { logicalName: 'entityname', readOnly: true },
	EntityOrder: { logicalName: 'entityorder', readOnly: true, type: 'Integer' },
	MultiEntitySearchEntityId: { logicalName: 'multientitysearchentityid', readOnly: true },
	MultiEntitySearchId: { schemaName: 'MultiEntitySearchId', logicalName: '_multientitysearchid_value', readOnly: true, entityCollectionName: 'multientitysearches', entityLogicalName: 'multientitysearch' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * MultiEntitySearchEntities WebApi class for early-bound style coding
 * Usage: const multiEntitySearchEntities = new MultiEntitySearchEntitiesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class MultiEntitySearchEntitiesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IMultiEntitySearchEntitiesApi>(entity, 'multientitysearchentities', 'multientitysearchentitiescollection', MultiEntitySearchEntitiesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface MultiEntitySearchEntitiesApi extends IMultiEntitySearchEntitiesApi { }

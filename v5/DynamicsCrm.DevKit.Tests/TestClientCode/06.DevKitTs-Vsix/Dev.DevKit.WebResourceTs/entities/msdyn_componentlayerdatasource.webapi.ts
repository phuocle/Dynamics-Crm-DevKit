/**
 * msdyn_componentlayerdatasource.webapi.ts - msdyn_componentlayerdatasource WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_componentlayerdatasource
 * All fields return string representation of their values
 */
export interface Imsdyn_componentlayerdatasourceFormattedValue {
	readonly msdyn_componentlayerdatasourceId: string;
	readonly msdyn_name: string;
}

/**
 * msdyn_componentlayerdatasource WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_componentlayerdatasourceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_componentlayerdatasourceFormattedValue;
	/** Unique identifier for entity instances */
	msdyn_componentlayerdatasourceId: DevKit.Guid | null;
	/** Name */
	msdyn_name: string | null;
}

const msdyn_componentlayerdatasourceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_componentlayerdatasourceId: { logicalName: 'msdyn_componentlayerdatasourceid' },
	msdyn_name: { logicalName: 'msdyn_name' },
};

/**
 * msdyn_componentlayerdatasource WebApi class for early-bound style coding
 * Usage: const msdyn_componentlayerdatasource = new msdyn_componentlayerdatasourceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_componentlayerdatasourceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_componentlayerdatasourceApi>(entity, 'msdyn_componentlayerdatasource', 'msdyn_componentlayerdatasources', msdyn_componentlayerdatasourceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_componentlayerdatasourceApi extends Imsdyn_componentlayerdatasourceApi { }

/**
 * msdyn_nonrelationalds.webapi.ts - msdyn_nonrelationalds WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_nonrelationalds WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_nonrelationaldsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_nonrelationaldsApi, 'FormattedValue'>]: string };
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** Unique identifier for entity instances */
	msdyn_nonrelationaldsId: DevKit.Guid | null;
}

const msdyn_nonrelationaldsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_nonrelationaldsId: { logicalName: 'msdyn_nonrelationaldsid' },
};

/**
 * msdyn_nonrelationalds WebApi class for early-bound style coding
 * Usage: const msdyn_nonrelationalds = new msdyn_nonrelationaldsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_nonrelationaldsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_nonrelationaldsApi>(entity, 'msdyn_nonrelationalds', 'msdyn_nonrelationaldses', msdyn_nonrelationaldsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_nonrelationaldsApi extends Imsdyn_nonrelationaldsApi { }

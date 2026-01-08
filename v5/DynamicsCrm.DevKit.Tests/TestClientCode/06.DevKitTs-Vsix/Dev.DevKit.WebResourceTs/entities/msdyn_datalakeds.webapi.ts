/**
 * msdyn_datalakeds.webapi.ts - msdyn_datalakeds WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_datalakeds WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_datalakedsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_datalakedsApi, 'FormattedValue'>]: string };
	/** Unique identifier for entity instances */
	msdyn_datalakedsId: DevKit.Guid | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
}

const msdyn_datalakedsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_datalakedsId: { logicalName: 'msdyn_datalakedsid' },
	msdyn_name: { logicalName: 'msdyn_name' },
};

/**
 * msdyn_datalakeds WebApi class for early-bound style coding
 * Usage: const msdyn_datalakeds = new msdyn_datalakedsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_datalakedsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_datalakedsApi>(entity, 'msdyn_datalakeds', 'msdyn_datalakedses', msdyn_datalakedsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_datalakedsApi extends Imsdyn_datalakedsApi { }

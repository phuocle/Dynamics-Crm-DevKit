/**
 * mspp_powerpagescoreentityds.webapi.ts - mspp_powerpagescoreentityds WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mspp_powerpagescoreentityds
 * All fields return string representation of their values
 */
export interface Imspp_powerpagescoreentitydsFormattedValue {
	readonly mspp_name: string;
	readonly mspp_powerpagescoreentitydsId: string;
}

/**
 * mspp_powerpagescoreentityds WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_powerpagescoreentitydsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imspp_powerpagescoreentitydsFormattedValue;
	/** Name */
	mspp_name: string | null;
	/** Unique identifier for entity instances */
	mspp_powerpagescoreentitydsId: DevKit.Guid | null;
}

const mspp_powerpagescoreentitydsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_name: { logicalName: 'mspp_name' },
	mspp_powerpagescoreentitydsId: { logicalName: 'mspp_powerpagescoreentitydsid' },
};

/**
 * mspp_powerpagescoreentityds WebApi class for early-bound style coding
 * Usage: const mspp_powerpagescoreentityds = new mspp_powerpagescoreentitydsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_powerpagescoreentitydsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_powerpagescoreentitydsApi>(entity, 'mspp_powerpagescoreentityds', 'mspp_powerpagescoreentitydses', mspp_powerpagescoreentitydsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_powerpagescoreentitydsApi extends Imspp_powerpagescoreentitydsApi { }
